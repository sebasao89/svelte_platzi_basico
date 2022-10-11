import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
  props: {
    name: 'Sebastian',
    lastName: 'Alarcon'
  }
})

export default app
