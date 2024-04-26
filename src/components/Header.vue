<script setup lang="ts">
import { RouterLink } from 'vue-router'
let title = 'Peos Rosados'
</script>

<template>
  <header>
    <h1 id="header-title">{{ title }}</h1>
    <nav id="navbar">
      <ul id="nav-menu">
        <li class="nav-menu-item"><RouterLink to="/">Archivo</RouterLink></li>
        <li class="nav-menu-item"><RouterLink to="/">Quien soy</RouterLink></li>
        <li class="nav-menu-item"><RouterLink to="/">Catalogo</RouterLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Header */
header {
  height: 30%;
  text-align: center;
}
header #header-title {
  font-size: 3.5em;
  color: var(--color-heading);
}
/* Navbar*/
#navbar #nav-menu {
  padding: 0;
}
#navbar .nav-menu-item {
  padding: 0.4em 1.3em;
  display: inline-block;
  list-style-type: none;
}
#navbar .nav-menu-item a {
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--color-link);
  text-decoration: none;
}
#navbar .nav-menu-item a:hover {
  color: var(--color-link-hover);
}
</style>
