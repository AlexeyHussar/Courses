<template>
  <div id='home-page'>
    <Controls button-title="Add course"
      @addItem="addCourseRedirect"
      @query="setSearchQuery" />
    <Courses :query="query" />
  </div>
</template>

<script>
import Controls from '../../shared/components/Controls.vue';
import Courses from './components/courses/Courses.vue';
import { mapActions } from 'vuex' 
import * as types from '../../store/breadcrumbsStore/breadcrumbsTypes';

export default {
  components: {
    Controls,
    Courses
  },
  data() {
    return {
      query: ''
    }
  },
  methods: {
    ...mapActions({
      makeTrack: types.MAKE_TRACK
    }),
    addCourseRedirect() {
      this.$router.push('/add-course');
    },
    setSearchQuery(query) {
      this.query = query;
    }
  },
  created() {
    this.makeTrack(this.$route.path);
  }
};

</script>

<style scoped>
#home-page {
  height: 70%;
  margin-top: 15px;
  margin-bottom: 60px;
}
</style>
