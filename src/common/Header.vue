<template>
  <header id="app-header" @click="$router.push('/')">
    <h1 @click="$router.push('/')">Courses</h1>
  </header>
</template>

<script>

export default {
  components: {
  }
};
</script>

<style>
#app-header {
  position:fixed;
  top: 0;
  height: 80px;
  width: 100vw;
  color: rgb(41, 40, 40);
  background-color: rgb(81, 194, 198);
  text-align: center;
}

#app-header:hover {
  background-color: rgb(15, 163, 168);  
}
</style>


