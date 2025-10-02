<!-- App.vue -->
<template>
  <div id="app">
    <router-view />  <!-- Здесь будут показываться страницы -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Глобальные стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  background: linear-gradient(135deg, #ffffff 0%, #ffffff 100%);
  min-height: 100vh;
}
</style>