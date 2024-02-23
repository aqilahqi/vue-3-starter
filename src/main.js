import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

async function prepareApp() {
  const { worker } = await import('./mocks/browser.js')
  return worker.start()
}

const app = createApp(App)

prepareApp().then(() => {
  app.mount('#app')
})
