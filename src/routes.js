import Home from './pages/home/Home.vue';
import AddCourse from './pages/addCourse/AddCourse.vue';
import some from './pages/addCourse/some.vue';

export default [
  { path: '/', component: Home },
  { path: '/add-course', component: AddCourse },
  { path: '/add-course/some', component: some }
];