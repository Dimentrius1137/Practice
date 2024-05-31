<template>
  <div class="quiz__cont" v-for="que in q_array">
	<p v-if="que.isShowing">
		{{ que.question }}
	</p>
	<form 
	v-if="que.isShowing"
	v-for="ans in que.answers">
		<input type="radio" id="q">
		<label for="q">
			{{ ans }}
		</label>
	</form>
  </div>
  <button @click="ShowNext">Принять</button>
</template>
<script>

	export default {
		data(){
			return {
				q_array:  [
							{
								question: "Какое из этих животных является млекопитающим?",
								answers: ["Лягушка", "Кит", "Ящерица", "Курица"],
								correct_answer: "Кит",
								type: "radio",
								isShowing: true
							},
							{
								question: "Какие из этих слов не являются существительными?",
								answers: ["Дом", "Беглый", "Красивый", "Стол"],
								correct_answer: "Красивый",
								type: "checkbox",
								isShowing:false
							},
							{
								question: "Какой город является столицей Франции?",
								answers: ["Лондон", "Рим", "Берлин", "Париж"],
								correct_answer: "Париж",
								type: "radio",
								isShowing:false
							},
							{
								question: "Сколько планет в Солнечной системе?",
								answers: ["7", "9", "10", "8"],
								correct_answer: "8",
								type: "radio",
								isShowing:false
							},
							{
								question: "Какое из этих чисел является простым числом?",
								answers: ["12", "15", "23", "30"],
								correct_answer: "23",
								type: "radio",
								isShowing:false
							},
							{
								question: "Какой химический элемент обозначается символом Fe?",
								answers: ["Золото", "Железо", "Серебро", "Медь"],
								correct_answer: "Железо",
								type: "radio",
								isShowing:false
							},
							{
								question: "Как называется столица Японии?",
								answers: ["Пекин", "Токио", "Сеул", "Хонконг"],
								correct_answer: "Токио",
								type: "radio",
								isShowing:false
							},
							{
								question: "Какой океан самый большой по площади?",
								answers: ["Тихий", "Атлантический", "Индийский", "Северный Ледовитый"],
								correct_answer: "Тихий",
								type: "radio",
								isShowing:false
							},
							{
								question: "Сколько лет длится один семестр в университете?",
								answers: ["3", "4", "6", "5"],
								correct_answer: "5",
								type: "radio",
								isShowing:false
							},
							{
								question: "Какой из этих видов спорта не включает использование мяча?",
								answers: ["Футбол", "Теннис", "Плавание", "Баскетбол"],
								correct_answer: "Плавание",
								type: "radio",
								isShowing:false
							}
						],
					
					
					}
		},
		mounted(){
		
		},
		methods: {
			ShowNext(){
				for(let i = 0; i < this.q_array.length; i++){
					const showing__q = this.q_array;
					if(showing__q[i].isShowing == true)
					{
						showing__q[i].isShowing = false;
						if(i < showing__q.length - 1 ){
							showing__q[i + 1].isShowing = true;
						}
						else{
							console.log("всё")
							return
						}
		
						return
					}
						
				}
					
			}
		},

	}
</script>
<style scoped lang="scss">
.quiz__cont{
    width: 1000px;
	height: auto;
// .quiz{

	// }

}
</style>
