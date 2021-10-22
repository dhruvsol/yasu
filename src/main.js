import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/scss/_boilerplate.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faSearch,
  faBookMedical,
  faBriefcaseMedical,
  faPrescriptionBottleAlt,
  faHistory,
  faUser,
  faExclamationCircle,
  faSignOutAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faSearch,
  faBookMedical,
  faBriefcaseMedical,
  faPrescriptionBottleAlt,
  faHistory,
  faUser,
  faExclamationCircle,
  faSignOutAlt,
  faTimes,
);

createApp(App)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .mount('#app');
