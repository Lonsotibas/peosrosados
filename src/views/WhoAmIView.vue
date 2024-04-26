<script setup lang="ts"></script>

<template>
  <main class="view">
    <div class="card" id="presentation">Presentacion</div>
    <div class="card" id="photo">Foto/Imagen</div>
    <div class="card" id="text">Texto</div>
  </main>
</template>

<style scoped>
#presentation {
  grid-column: 1;
  grid-row: 1/4;
}
#photo {
  grid-column: 2;
  grid-row: 1/3;
}
#text {
  grid-column: 2;
  grid-row: 3;
}
</style>
