import './assets/main.css';

import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from '@vercel/speed-insights';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

injectSpeedInsights();
inject();

import App from './App.vue';
import router from './router';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
