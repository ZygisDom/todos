<template>
    <section>
        <div class="home">
            <div class="container margin-top-7rem mb-5">
                <div v-for="(task) in tasks" :key="task.id" >
                    <div v-if="task.completed === false && task.trashed === true" :task="task">
                        <div class="row d-flex justify-content-center mb-2">
                            <div class="col-lg-8 col-md-8 col-sm-8">
                                    <div class="card mt-4">
                                        <div class="card-header">
                                            <a href="javascript:void(0)"><fa-icon icon="trash" class="float-right" @click="markAsTrashed(task)" v-model="task.trashed"/></a>
                                            <a href="javascript:void(0)"><fa-icon icon="check-circle" class="float-right mr-4" @click="markAsCompleted(task)" v-model="task.completed"/></a>
                                        </div>
                                        <div class="card-body">
                                            <div>
                                                <h5>Task ID: {{ task.id }}</h5>
                                                <hr/>
                                            </div>
                                            <p class="card-text" v-if="!task.editing" @dblclick="editTask(task)">{{ task.title }}</p>
                                            <input v-else class="task-edit outline-0 p-2" type="text" v-model="task.title" @blur="doneEdit(task)" @keyup.enter="doneEdit(task)" @keyup.esc="cancelEdit(task)"
                                                   v-focus>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    // @ is an alias to /src
    //import HelloWorld from '@/components/HelloWorld.vue'
    //import TaskItem from "@/components/TaskItem";
    const STORAGE_KEY = 'todo-storage';

    export default {
        name: 'TrashedIssues',
        components: {
           //TaskItem
        },
        data () {
            return {
                newTask: '',
                idForTask: 1,
                beforeEditCache: '',
                tasks: [],
                completed: false,
                trashed: false
            }
        },
        directives: {
            focus: {
                inserted: function (el) {
                    el.focus()
                }
            }
        },
       created() {
            //if (localStorage.tasks) {
                //this.tasks = JSON.parse(localStorage.tasks);
            //}
           this.tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        },
        //watch: {
          //tasks(newTasks) {
          //  localStorage.tasks = JSON.stringify(newTasks);
          //}
       // },
        methods: {
            addTask() {
                if (this.newTask.trim().length === 0) {
                    return
                }
                this.tasks.push({
                    id: this.idForTask,
                    title: this.newTask,
                    completed: false,
                    editing: false,
                    trashed: false,
                })
                this.newTask = ''
                this.idForTask++
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
            },
            editTask(task) {
                this.beforeEditCache =  task.title
                task.editing = true
            },
            doneEdit(task) {
                task.editing = false
                if (task.title.trim().length === 0) {
                    task.title = this.beforeEditCache
                }
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
            },
            cancelEdit(task) {
                task.title = this.beforeEditCache
                task.editing = false
            },
            removeTask(index) {
                this.tasks.splice(index, 1)
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
            },
            markAsCompleted: function(task) {
                task.completed = !task.completed;
                task.trashed = false
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
            },
            markAsTrashed(task) {
                task.trashed = !task.trashed
                task.completed = false
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
            },
        },
    }
</script>
