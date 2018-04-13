<template>
  <div id="app-controls">
    <input type="text" v-model="query"
      placeholder="Type your query">
    <button @click="onAdd">
      {{ buttonTitle }}   
    </button> 
  </div>  
</template>

<script>

export default {
  props: {
    buttonTitle: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      query: '',
    };
  },
  methods: {
    onAdd() {
      this.$emit('addItem');
    }
  },
  watch: {
    query: function() {
     this.$emit('query', this.query);
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


