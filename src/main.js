// Cegah browser scroll ke hash saat refresh
if (location.hash) history.replaceState(null, '', location.pathname)

import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// ponytail: fade-on-scroll via IntersectionObserver, no animation lib
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) }
  }
}, { threshold: 0.15 })

createApp(App)
  .directive('reveal', {
    // v-reveal="150" → delay 150ms (untuk efek berurutan/stagger)
    mounted(el, binding) {
      el.classList.add('reveal')
      if (binding.value) el.style.transitionDelay = binding.value + 'ms'
      io.observe(el)
    },
  })
  .mount('#app')
