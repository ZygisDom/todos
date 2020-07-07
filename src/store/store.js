// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
// export const store = new Vuex.Store({
//    state: {
//        tasks: [
//        //     {
//        //     'id': 1,
//        //     'title': 'Your first task is to Add another Task',
//        //     'completed': false,
//        //     'trashed': false,
//        //     'editing': false,
//        // },
//        //     {
//        //         'id': 2,
//        //         'title': 'You can Mark a task as Completed by clicking on the Checkmark icon' +
//        //             'and Mark as Trash by clicking on the Trashcan icon',
//        //         'completed': false,
//        //         'trashed': false,
//        //         'editing': false,
//        //     },
//        ]
//   },
//     getters: {
//        allTasks: (state) => state.tasks,
//        },
//     actions: {
//         addTask(context, task) {
//             setTimeout(() => {
//                 context.commit('addTask', task)
//             }, 100)
//         },
//     },
//     mutations: {
//         addTask(state, task) {
//             state.tasks.push({
//                 id: task.id,
//                 title: task.title,
//                 completed: false,
//                 editing: false,
//             })
//         },
//     },
//     modules: {
//
//     },
//
//   // mutations: {
//   //      addtask(state, task) {
//   //          state.tasks.push({
//   //              id: task.id,
//   //              title: task.title,
//   //              completed: false,
//   //              trashed: false,
//   //              editing: false,
//   //          })
//   //      }
//   // }
//
// });