<template>
  <h1>Some</h1>
</template>

<script>
import { mapActions } from 'vuex';
import * as types from '../../store/breadcrumbsStore/breadcrumbsTypes';

export default {
  methods: {
    ...mapActions({
      makeTrack: types.MAKE_TRACK
    })
  },
  created() {
    this.makeTrack(this.$route.path);
  },
}
</script>

<style>

</style>
