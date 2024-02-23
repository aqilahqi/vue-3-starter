import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import './assets/main.css'

async function prepareApp() {
  const { worker } = await import('./mocks/browser.js')
  return worker.start()
}

const pinia = createPinia()
const app = createApp(App)

prepareApp().then(() => {
  app.use(pinia)
  app.mount('#app')
})
