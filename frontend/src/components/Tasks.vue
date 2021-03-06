// Tasks.vue
<template>
  <div>
    <div class="md-layout md-gutter md-alignment-top-center">
      <div class="md-layout-item md-large-size-50 md-xlarge-size-50 md-medium-size-70 md-small-size-100 taskItems" v-if="tasks.length">
        <bar-chart :chart-data="chartData.values" :labels="chartData.labels"/>
        <template
          v-for="taskGroup in groupedTasks"
        >
          <md-list :key="taskGroup.date" class="task-group">
            <md-list-item class="task-group-date">
              {{taskGroup.date}}
            </md-list-item>
            <TaskItem
              v-for="task in taskGroup.tasks"
              :key="task.id"
              :task="task"
              @edit="onEdit(arguments[0])"
            />
            <md-list-item class="task-duration-list-item">
              {{taskGroup.duration}}
            </md-list-item>
          </md-list>
        </template>
      </div>
    </div>
    <modal :show="show" @close="close">
      <div class="modal-header">
        <h3>Edit your task</h3>
      </div>
      <div class="modal-body">
        <div class="md-layout md-gutter">
          <input type="hidden" v-model="editTask.id" name=id>
          <div class="md-layout-item md-size-40">
            <md-field>
              <label>date</label>
              <md-input v-model="editTask.date"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-30">
            <md-field>
              <label>start_time</label>
              <md-input v-model="editTask.start_time"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-30">
            <md-field>
              <label>end_time</label>
              <md-input v-model="editTask.end_time"></md-input>
            </md-field>
          </div>
        </div>
        <md-field>
          <label>name</label>
          <md-input v-model="editTaskActivity"></md-input>
        </md-field>
        <md-field>
          <label>description</label>
          <md-textarea v-model="editTask.description" md-autogrow></md-textarea>
        </md-field>
        <md-field>
          <label>tag</label>
          <md-input v-model="editTaskTags"></md-input>
        </md-field>
      </div>
      <div class="modal-footer text-right">
        <md-button class="md-accent" @click="closeModal()">Cancel</md-button>
        <md-button class="md-primary" @click="savePost()">Save</md-button>
      </div>
    </modal>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue'
import BarChart from './BarChart.vue'
import Modal from './Modal.vue'
import axios from 'axios'
import urlEncode from './helpers.js'

export default {
  data () {
    return {
      tasks: [],
      selectedDate: {
        start: new Date(),
        end: new Date()
      },
      showNewPostModal: false,
      editTask: {},
      show: false
    }
  },
  props: {
    initialDate: {
      type: Object
    }
  },
  computed: {
    groupedTasks: function () {
      var groupedTasks = {}
      this.tasks.forEach(function (task, i) {
        if (groupedTasks[task['date']] === undefined) {
          groupedTasks[task['date']] = {duration: 0, tasks: [], date: task['date']}
        }
        groupedTasks[task['date']]['tasks'].push(task)
        groupedTasks[task['date']]['duration'] += task['delta']

        // со сложением вместе округление работать не хочет
        groupedTasks[task['date']]['duration'] = Math.round(groupedTasks[task['date']]['duration'] * 100) / 100
      })
      return groupedTasks
    },
    chartData: function () {
      var labels = []
      var values = []

      var current = new Date(this.selectedDate.start)
      while (current <= this.selectedDate.end) {
        var formattedCurrent = this.formatDate(current)
        labels.push(this.formatDate(current, true))

        if (this.groupedTasks[formattedCurrent] !== undefined) {
          values.push(this.groupedTasks[formattedCurrent]['duration'])
        } else {
          values.push(0)
        }
        current.setDate(current.getDate() + 1)
      }
      return {labels: labels, values: values}
    },
    editTaskActivity: {
      get: function () {
        if (this.editTask.name === undefined) {
          return ''
        }

        var str = this.editTask.name
        if (this.editTask.category) {
          str += '@' + this.editTask.category
        }
        return str
      },
      set: function (value) {
        var data = value.split('@', 2)
        this.editTask.name = data[0]
        if (data[1] !== undefined) {
          this.editTask.category = data[1]
        } else {
          this.editTask.category = ''
        }
      }
    },
    editTaskTags: {
      get: function () {
        if (this.editTask.tags === undefined) {
          return ''
        }
        return this.editTask.tags.join(',')
      },
      set: function (value) {
        var data = value.split(',')
        this.editTask.tags = data
      }
    }
  },
  methods: {
    getTasks () {
      var formattedStart = this.formatDate(this.selectedDate.start)
      var formattedEnd = this.formatDate(this.selectedDate.end)

      const path = `http://localhost:5000/api/tasks?interval=` + formattedStart + '-' + formattedEnd
      axios.get(path)
        .then(response => {
          this.tasks = response.data.tasks
        })
        .catch(error => {
          console.log(['getTasks error', error])
        })
    },
    formatDate: function (date, short) {
      return ('0' + date.getDate()).slice(-2) +
        '.' + ('0' + (date.getMonth() + 1)).slice(-2) +
        (short === undefined ? ('.' + date.getFullYear()) : '')
    },
    close: function () {
      this.show = false
    },
    onEdit: function (editTask) {
      this.editTask = Object.assign({}, editTask)
      this.show = true
    },
    savePost: function () {
      // todo save task
      const path = `http://localhost:5000/api/task/edit`
      axios.post(path, urlEncode({
        id: this.editTask.id,
        name: this.editTask.name,
        category: this.editTask.category,
        date: this.editTask.date,
        start_time: this.editTask.start_time,
        end_time: this.editTask.end_time,
        description: this.editTask.description,
        tags: this.editTask.tags
      }),
      {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded'
        }
      })
        .then(response => {
          console.log(['save response', response])

          this.getTasks()
          this.closeModal()
        })
        .catch(error => {
          console.log(['getCompletitions error', error])
        })
    },
    closeModal: function () {
      this.show = false
    }
  },
  components: {
    TaskItem, BarChart, Modal
  },
  created () {
    if (this.initialDate !== undefined) {
      this.selectedDate = this.initialDate
    }
    this.getTasks()
  }
}
</script>

<style>
  .calendar-root .input-date{
    margin: 0 auto;
  }
  .task-group{
    margin-top: 20px;
  }
  .task-group-date .md-list-item-content{
    font-weight: bold;
  }
  .md-list-item{
    z-index: 0;
  }
</style>
