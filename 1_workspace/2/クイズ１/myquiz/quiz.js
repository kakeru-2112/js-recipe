const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const container = document.getElementById("button-container")



//選択肢(ボタン)を作る
const CreateButton = function(choices_num){
  //buttonを作成
  const button = document.createElement("button")
  button.className = "choice"
  button.textContent = quiz.choices[choices_num].text
  button.onclick = function(){
    choose(choices_num)     
  }
  container.append(button)
    
}


const quiz = {
  text: "この写真は何キャンパスでしょう？",
  amswer: 1,//0番目スタート
  choices: [
    {
      text: "松本キャンパス",
      image: "shinshu_matsumoto_img.jpg",
      feedback: "残念！一年生はここで過ごすんだ～。",
    },
    {
      text: "長野キャンパス",
      image: "shinshu_engineer_img.jpg",
      feedback: "正解！我らが工学キャンパス！！"
    },
    {
      text: "伊那キャンパス",
      image: "shinshu_ina__img.jpg",
      feedback: "残念！農学部あるんだけど、めちゃくちゃど田舎らしい。。",
    },
    {
      text: "上田キャンパス",
      image: "shinshu_senni__img.jpg",
      feedback: "正解！日本で唯一？の繊維学部があるよ。",
    }
  ]
}

const choose = function(choiceNumber){
  feedback.textContent = quiz.choices[choiceNumber].feedback
  quizImage.src = quiz.choices[choiceNumber].image
}

const reloadQuiz = function(){
  //問題文を表示
  quizText.textContent = "Q." + quiz.text
  //画像を表示
  const ans_num = quiz.amswer
  quizImage.src = quiz.choices[ans_num].image

  //選択肢の数をchoice_numに格納
  const choice_num = quiz.choices.length
  //選択肢（ボタン）を作成したい数作成
  for (let i=0;i<choice_num;i++){
    CreateButton(i)
  }

}


reloadQuiz()