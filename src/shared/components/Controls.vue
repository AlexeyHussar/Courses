<template>
  <div id="app-controls">
    <input type="text" 
      v-model="searchQuery"
      placeholder="Type course name">
    <button @click.prevent="submitHandler()">
      Add new Course   
    </button> 
  </div>  
</template>

<script>
import { bus } from '../../main';

export default {
  props: {
    eventType: {
      type: String,
      required: true
    },
    submitHandler: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      searchQuery: '',
    };
  },
  watch: {
    searchQuery: function() {
      bus.$emit(this.eventType, this.searchQuery);
    }
  }
};
</script>

<style scoped>
#app-controls {
  max-width: 600px;
  margin: 20px auto;
  display: flex;
}

input[type='text'], button {
  display: block;
  height: 25px;
  font-size: 20px;
  width: 50%;
  margin-right: 30px;
}

button {
  text-align: center;
  padding: auto;
}

.add-course-button {
  display: block;
  text-decoration: none;
  padding: auto;
} 
</style>


