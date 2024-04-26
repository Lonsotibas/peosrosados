<script setup lang="ts">
// Componentes
import Header from './components/Header.vue'
// Vue
import { RouterView } from 'vue-router'
import { ref, type Ref } from 'vue'
// Setea tema en DOM y lo almacena en ref
const setTheme = (newTheme: string) => {
  localStorage.setItem('theme', newTheme)
  theme.value = newTheme
  document.documentElement.className = newTheme
}
// Obtiene tema desde el localStorage
const getStoragedTheme = () => {
  return localStorage.getItem('theme')
}
// Cambia tema
const toggleTheme = (theme: string) => {
  if (theme == 'light') {
    setTheme('dark')
    return
  }
  setTheme('light')
}

// Obtiene preferencia de tema del usuario
const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (hasDarkPreference) {
    return 'dark'
  }
  return 'light'
}
// Inicializa tema
const theme: Ref = ref(getStoragedTheme || getMediaPreference)
toggleTheme(theme.value)
</script>

<template>
  <main id="app">
    <!-- Boton Tema -->
    <div id="btnToggleTheme">
      <button @click="toggleTheme(theme)">
        <span>{{ theme == 'light' ? 'dom' : 'cute' }}</span>
      </button>
    </div>
    <!-- Encabezado -->
    <Header />
    <!-- Vistas -->
    <RouterView />
  </main>
</template>

<style scoped>
#btnToggleTheme {
  width: 100%;
  position: absolute;
  left: 45px;
}
#btnToggleTheme > button {
  height: 100px;
  width: 100px;
  background: var(--icon-btn-theme) no-repeat scroll 0 0 transparent;
  color: var(--color-link);
  background-size: 110px;
  background-position: center;
  border: none;
  cursor: pointer;
}
#btnToggleTheme > button:hover {
  color: var(--color-link-hover);
}
#btnToggleTheme > button > span {
  position: relative;
  top: var(--icon-btn-top);
  font-size: 16px;
  font-weight: bold;
}
</style>
