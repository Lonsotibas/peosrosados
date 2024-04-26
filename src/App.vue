<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import { reactive, ref, type Ref } from 'vue'
// Tema
const setTheme = (newTheme: string) => {
  localStorage.setItem('theme', newTheme)
  theme.value = newTheme
  document.documentElement.className = newTheme
}

const getStoragedTheme = () => {
  return localStorage.getItem('theme')
}

const toggleTheme = (theme: string) => {
  if (theme == 'light') {
    setTheme('dark')
    return
  }
  setTheme('light')
}

const getMediaPreference = () => {
  const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (hasDarkPreference) {
    return 'dark'
  }
  return 'light'
}
// Inicializa tema
const theme = ref(getStoragedTheme || getMediaPreference)
</script>

<template>
  <main id="app">
    <button @click="toggleTheme(theme)">aprietame</button>
    <Header />
    <RouterView />
  </main>
</template>

<style scoped></style>
