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
  created() {
    this.$store.dispatch('makeTrack', '/');
  },
  methods: {
    addCourseRedirect() {
      return this.$router.push('/add-course');
    },
    setSearchQuery(query) {
      this.query = query;
    }
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
