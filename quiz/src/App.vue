<template>
 <div class="quiz__cont" >
	<div class="question__cont" v-for="qa in QA__array">
		<form class="question__form" v-if="qa.isShowing">
					<p class="question__text">{{ qa.question }}</p>
						<div class="variant" v-for="ans in qa.answers">
							<label  class="variant__text" v-bind:for="ans">
								<input class="variant__radio__marker" 
									v-if="qa.type == 'radio'"
									type="radio"
									v-bind:id="ans"
									v-bind:value="ans"
									v-model="last__answer">
								<span class="radio__wrapper" v-if="qa.type == 'radio'"></span>

								<input class="variant__checkbox__marker"
									v-if="qa.type == 'checkbox'"
									type="checkbox"
									v-bind:id="ans" 
									v-bind:value="ans"
									@change="last__answer += ` ${$event.target.value}`">
								<span class="checkbox__wrapper"v-if="qa.type == 'checkbox'"></span>

							{{ ans }}
						</label>
					</div>
		</form>
		<div class="btn__cont">
			<button v-if="!test__complete && qa.isShowing" @click="ShowNext">Принять</button>

		</div>
	</div>
	<div v-if="test__complete">
		{{ result }}/10
	</div>
	<div class="btn__cont">
		<button v-if="test__complete">Повторить тест<img src="../public/items/Union2.png"></button>
	</div>

</div>
</template>
<script>

	export default {
		data(){
			return {
				test__complete: false,
				last__answer: "",
				user__answers: [],
				QA__array:  [
							{
								question: "Какое из этих животных является млекопитающим?",
								answers: ["Лягушка", "Кит", "Ящерица", "Курица"],
								correct_answer: "Кит",
								type: "radio",
								isShowing: true
							},
							{
								question: "Какие из этих слов не являются существительными?",
								answers: [ "Дом", "Беглый", "Красивый", "Стол" ],
								correct_answer: [ "Красивый", "Беглый" ],
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
						result: 0,
					}
		},
		mounted(){
		
		},
		methods: {
			ShowNext(){

				this.user__answers.push(this.last__answer);
				this.last__answer = "";
				console.log(this.user__answers)
				for(let i = 0; i < this.QA__array.length; i++)
				{
					const showing__q = this.QA__array;
					if(showing__q[i].isShowing == true)
					{
						showing__q[i].isShowing = false;
						if(i < showing__q.length - 1){
							showing__q[i + 1].isShowing = true;	
						}
						else{
							this.test__complete = true;
							this.CheckAnswers(this.user__answers)
							return
						}
						return
					}	
				}	
			},

			CheckAnswers(arr){
				let res__counter = 0;
				for(let i = 0; i < arr.length; i++)
				{
					if(this.QA__array[i].type == "radio" && arr[i] == this.QA__array[i].correct_answer){
						res__counter++;
					}
					if(this.QA__array[i].type == "checkbox"){

						const answerVariants = arr[i].trimLeft().split(' ').sort();
						const variants = this.QA__array[i].correct_answer.sort();

						if([...answerVariants].toString() == [...variants].toString()){
							res__counter++;
						}
					}
					
				}
				//CLJ... = res__counter;
				this.result = res__counter;
			},
					
		}
	}
</script>
<style scoped lang="scss">

@mixin flex__params($horiz, $vert, $dir){
    display: flex;
    flex-direction: $dir;
    align-items: $horiz;
    justify-content: $vert;
}
.quiz__cont{
    width: 1000px;
	height: auto;
	.question__form{
		height: auto;
		.question__text{
			margin-top: 14px;
			margin-bottom: 29px;
			font-size: 18px;
		};
		.variant{
			height: 41px;
			margin-top: 18px;
			.variant__text{
				cursor: pointer;
				@include flex__params(end, start, row);
				gap: 0px 15px;
					.variant__radio__marker{
						display: none;
					};
					.radio__wrapper{
						display: inline-block;
						width: 20px;
						height: 20px;
						border: 1px solid #E9262D;
						border-radius: 50%;
						cursor: pointer;
					};
					.variant__radio__marker:checked + span{
						border: 7px solid red;
					};


					.variant__checkbox__marker{
						display: none;
						width: 20px;
						height: 20px;
					}
					.checkbox__wrapper{
						display: inline-block;
						width: 20px;
						height: 20px;
						border: 1px solid #E9262D;
						cursor: pointer;
					};
					.variant__checkbox__marker:checked{
						display: block;
						position: absolute;
						accent-color: red;
					}	

				}
			}

		}

		.btn__cont{
    width: 100%;
    margin: 25px 0px 25px 0;
    text-align: start;
    button{
        width: 160px;
        height: 52px;
        border-radius: 8px;
        border: 1px solid #00000033;
        background-color: #FFFFFF;
    }
    button:disabled, button:active{
        border: 1px solid #00000033;
        background-color: #1C1A1A26;
    }
}

	}



</style>
