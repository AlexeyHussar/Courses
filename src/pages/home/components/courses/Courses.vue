<template>
  <ul>
    <li v-for='course in filtredCourses' :key='course.id'>
      <CourseItem :course='course'
        :deleteCourse='deleteCourse' />
    </li>
  </ul>
</template>

<script>
import { bus } from '../../../../main';
import CourseItem from './CourseItem.vue';

export default {
  components: {
    CourseItem
  },
  data() {
    return {
      wanted: '',
      courses: []
    };
  },
  methods: {
    deleteCourse: function(id) {
      return this.courses = this.courses
        .filter(course => course.id !== id);
    }
  },
  computed: {
    filtredCourses: function() {
      return this.courses.filter(course => (
        course.title.toLowerCase().trim()
          .match(this.wanted.toLowerCase().trim())
      ))
    }
  },
  created() {
    this.$http.get('http://localhost:8081/courses')
      .then(data => this.courses = data.body);
    bus.$on('courseSearch', search => {
      this.wanted = search;
    });
  }
};
</script>

<style>
ul {
  padding: 0;
  list-style-type: none;
  width: 70%;
  margin: 20px auto;
}
</style>


