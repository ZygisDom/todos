import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWrench, faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faWrench, faCheckCircle, faTrash)

Vue.component('fa-icon', FontAwesomeIcon)