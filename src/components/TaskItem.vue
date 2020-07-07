<template>
    <div class="task-item">
   <div class="row d-flex justify-content-center mb-2">
    <div class="col-lg-8 col-md-8 col-sm-8">
    <div class="task-item">
        <div class="card mt-3">
            <div class="card-header">
                <a href="javascript:void(0)"><fa-icon icon="trash" class="float-right" @click="markAsTrashed" v-model="trashed"/></a>
                <a href="javascript:void(0)"><fa-icon icon="check-circle" class="float-right mr-4" @click="markAsCompleted" v-model="completed"/></a>
            </div>
            <div class="card-body">
                <div>
                    <h5>Task ID: {{ id }}</h5>
                    <hr/>
                </div>
                <div class="card-text" v-if="!editing" @dblclick="editTask">{{ title }}</div>
                <input v-else class="task-edit outline-0 p-2" type="text"    v-model="title" @blur="doneEdit" @keyup.enter="doneEdit" @keyup.esc="cancelEdit"
                                                                            v-focus
                       @dblclick="editTask">
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
</template>

<script>
  // const STORAGE_KEY = 'todo-storage';

    export default {
        name: "task-item",
        props: {
            task: {
                type: Object,
                required: true,
            },
            index: {
                type: Number,
                required: true,
            }
        },
        data() {
            return {
                'id': this.task.id,
                'title': this.task.title,
                'completed': this.task.completed,
                'editing': this.task.editing,
                'beforeEditCache': '',
            }
        },
        directives: {
            focus: {
                inserted: function (el) {
                    el.focus()
                }
            }
        },
        methods: {
              editTask() {
              this.beforeEditCache =  this.title
              this.editing = true
            },
            doneEdit() {
                if (this.title.trim() === '') {
                    this.title = this.beforeEditCache
                }
                this.editing = false
                this.$emit('finishedEdit', {
                    'index': this.index,
                    'task': {
                        'id': this.id,
                        'title': this.title,
                        'completed': this.completed,
                        'editing': this.editing,
                    }
                })
            },
            cancelEdit() {
                this.title = this.beforeEditCache
                this.editing = false
            },
            markAsTrashed() {
                this.completed = false
                this.trashed = !this.trashed
                this.$emit('MarkedTrashed', {
                    'task': {
                        'id': this.id,
                        'title': this.title,
                        'completed': this.completed,
                        'trashed': this.trashed,
                        'editing': this.editing,
                    }
                })
            },
        },
    }
</script>