<template>
  <div id="add-course">
    <h1>Add Course</h1>
    <form @submit.prevent="addCourse">
      <input class="add-course-input" type="text" v-model="title"
        placeholder="Type the course title">
      <input class="add-course-input"
        type="text" v-model="duration"
        placeholder="Type the course duration (minutes)">  
      <textarea class="add-course-text" v-model="text" 
        placeholder="Type the course text"></textarea>
      <button class="add-course-button" type="submit">Add course</button>
    </form>
  </div>
</template>

<script>
import { v4 } from 'uuid';
import { bus } from '../../main';
import courseRequest from '../../services/courseRequest';

export default {
  data() {
    return {
      title: '',
      duration: '',
      text: ''
    };
  },
  methods: {
    addCourse() {
      courseRequest.post(v4(), this.title, this.duration, this.text)
        .then(data => {
          bus.$emit('coursesWereUpdated', data);
          this.$router.push('/');        
        })
    }
  }
};
</script>

<style scoped>
#about {
  margin-top: 90px;
  display: flex;
  flex-direction: column;
}

.add-course-input {
  display: block;
  margin: auto;
  margin-bottom: 10px;
  width: 50%;
  height: 30px;
  font-size: 20px;
  box-sizing: border-box;
}

.add-course-text {
  display: block;
  margin: auto;
  margin-bottom: 10px;
  width: 50%;
  height: 150px;  
  font-size: 25px;
  box-sizing: border-box;
}

.add-course-button {
  display: block;
  margin: auto;
  width: 50%;
  height: 30px;
  font-size: 25px;
}

.add-course-button:hover {
  background-color: rgb(14, 214, 214);
}
</style>


