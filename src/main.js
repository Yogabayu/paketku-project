/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */


// Components
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

// Composables
import { createApp } from 'vue'

const app = createApp(App)
app.use(vuetify)
app.use(router)

registerPlugins(app)

app.mount('#app')
