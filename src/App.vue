<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
body,
input,
textarea {
  font-family: 'Poiret One', serif;
  font-size: 16px;
}

.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
