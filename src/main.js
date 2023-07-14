import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            console.log('Service Worker 注冊成功：', registration);
        })
        .catch((error) => {
            console.log('Service Worker 注冊失敗：', error);
        });
    });
}
