
import { createApp } from 'vue'
import App from './App.vue'


createApp(App).mount('#app');

const startBtn = document.querySelector('.js__start');
const startPage = document.querySelector('.js__start__page');
const quiz = document.getElementById('app');

startBtn.addEventListener('click', () => {
    startPage.style.display = "none"
    quiz.style.display = "block"
});
