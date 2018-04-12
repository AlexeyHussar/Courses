<template>
  <div id="add-course">
    <h1>Add Course</h1>
    <form @submit.prevent="addCourseHandler">
      <input type="text" v-model="title"
        placeholder="Type the story title">
      <input type="text" v-model="duration"
        placeholder="Type the course duration (minutes)">  
      <textarea v-model="text" 
        placeholder="Type the story text"></textarea>
      <button type="submit">Add course</button>
    </form>
  </div>
</template>

<script>
import { v4 } from 'uuid';
import { bus } from '../../main';

export default {
  data() {
    return {
      title: '',
      duration: '',
      text: ''
    };
  },
  methods: {
    addCourseHandler: function() {
      this.$http.post('http://localhost:8081/courses', {
        id: v4(),
        title: this.title,
        duration: this.duration,
        text: this.text
      }).then(data => {
        bus.$emit('coursesWereUpdated', data);
        this.$router.push('/');        
      })
    }
  }
};
</script>

<style>
#about {
  margin-top: 90px;
}
</style>


