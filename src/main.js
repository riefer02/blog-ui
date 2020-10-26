import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import upperFirst from 'lodash/upperFirst';
// import camelCase from 'lodash/camelCase';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faSpinner);


// const requireComponent = require.context(
//   './components',
//   false,
//   /Base[A-Z]\w+\.(vue|js)$/
// );

const app = createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios);

// requireComponent.keys().forEach(fileName => {
//   const componentConfig = requireComponent(fileName);

//   const componentName = upperFirst(
//     camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
//   );

//   app.component(componentName, componentConfig.default || componentConfig);
// });

app.component('font-awesome-icon', FontAwesomeIcon);


app.mount('#app');
