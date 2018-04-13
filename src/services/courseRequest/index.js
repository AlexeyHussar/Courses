import Vue from 'vue';

const baseURL = 'http://localhost:8081/courses';

export default {
  get() {
    return Vue.http.get(baseURL);
  },
  post(id, title, duration, text) {
    return Vue.http.post(baseURL, {
      id,
      title,
      duration,
      text
    });
  },
  delete(id) {
    return Vue.http.delete(`${ baseURL }/${ id }`);
  }
};

