<template>
  <div id='home-page'>
    <Controls event-type="courseSearch" :submitHandler="submitHandler" />
    <Courses />
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
  methods: {
    submitHandler: function() {
      return this.$router.push('/add-course');
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
