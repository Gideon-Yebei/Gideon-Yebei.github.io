import './assets/main.css';

import { injectSpeedInsights } from '@vercel/speed-insights';

injectSpeedInsights();

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
