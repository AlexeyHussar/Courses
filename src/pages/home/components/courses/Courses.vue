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
import courseRequest from '../../../../services/courseRequest'; 

export default {
  components: {
    CourseItem
  },
  props: {
    query: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      wanted: '',
      courses: []
    };
  },
  methods: {
    getCourses() {
      courseRequest.get()
        .then(data => this.courses = data.body);
    },
    updateCourse() {
      bus.$on('coursesWereUpdated', data => {
        this.courses = data;
    })},
    deleteCourse(id) {
      courseRequest.delete(id)
        .then(() => this.courses = this.courses
          .filter(course => (
            course.id !== id
        )));
    }
  },
  computed: {
    filtredCourses: function() {
      return this.courses.filter(course => (
        course.title.toLowerCase().trim()
          .match(this.query.toLowerCase().trim())
      ));
    }
  },
  created() {
    this.getCourses();
  },
  updated() {
    this.updateCourse();
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
