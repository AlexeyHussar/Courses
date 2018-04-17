<template>
  <ul id="breadcrumbs">
    <li v-for="(crumb, index) in $store.state.breadcrumbs" :key="index"> 
      <router-link :to="crumb.path">{{ crumb.path }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
};
</script>

<style scoped>
li {
  display: inline-block;
}

span {
  font-weight: bold;
}
</style>

<style>
#breadcrumbs {
  margin-top: 90px;
  font-size: 20px;
}
</style>