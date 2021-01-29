const maincontainer = document.getElementById("main-container")

const quiz = [
  {
    text: "長野県にある唯一の国立大学は何でしょう？",
    image: "arukumasuwaru.png",
    choices: [
      {
        text: "長野大学",
        image: "naganouniv.jpg",
        feedback: "残念！長野県だけど長野大学ではないよ～、だまされた？？",
      },
      {
        text: "松本大学",
        image: "matsumotouniv.jpg",
        feedback: "残念！松本市有名だもんね",
      },
      {
        text: "信州大学",
        image: "shinshu_logo.png",
        feedback: "正解！我が通っている大学じゃ！",
      },
      {
        text: "公立諏訪東京理科大学",
        image: "suwauniv.jpg",
        feedback:
          "公立って書いてあるのに、さすがにこれ選んだ人はいないでしょ？笑",
      },
    ],
  },
  {
    text: "工学部は何キャンパスでしょう？",
    image: "arukuma.png",
    choices: [
      {
        text: "松本キャンパス",
        image: "shinshu_matsumoto_img.jpg",
        feedback: "残念！一年生はここで過ごすんだ～。",
      },
      {
        text: "長野キャンパス",
        image: "shinshu_engineer_img.jpg",
        feedback:
          "正解！我らが工学キャンパス！！（ちなみに長野市には教育キャンパスも別にあるよ！））",
      },
      {
        text: "伊那キャンパス",
        image: "shinshu_ina__img.jpg",
        feedback: "残念！農学部あるんだけど、めちゃくちゃど田舎らしい。。",
      },
      {
        text: "上田キャンパス",
        image: "shinshu_senni__img.jpg",
        feedback: "正解！日本で唯一の繊維学部があるよ！",
      },
    ],
  },
]

//問題文表示
const CreateQuestion = function(quiz_num, container) {
  const question = document.createElement("h2")
  question.className = "quiz-text"
  question.textContent = "Q." + quiz[quiz_num].text
  container.append(question)
}

//imgタグ作成
const CreateImg = function(quiz_num, container) {
  const img = document.createElement("img")
  img.className = "quiz-image"
  img.src = "image/" + quiz[quiz_num].image
  container.append(img)
  return img
}

//選択肢(ボタン)を作る
const CreateButton = function(choices_num, quiz_num, container, feedback, img) {
  //buttonを作成
  const button = document.createElement("button")
  button.className = "choice"
  button.textContent = quiz[quiz_num].choices[choices_num].text
  button.onclick = function() {
    choose(choices_num, quiz_num, feedback, img)
  }
  container.append(button)
}

//feedbackを追加
const CreateFeedback = function() {
  const feedback = document.createElement("div")
  feedback.className = "feedback"
  return feedback
}

const choose = function(choiceNumber, quiz_num, feedback, img) {
  feedback.textContent = quiz[quiz_num].choices[choiceNumber].feedback
  img.src = "image/" + quiz[quiz_num].choices[choiceNumber].image
}

const CreateQuiz = function(quiz_num) {
  //container作成
  const container = document.createElement("div")
  container.className = "container"
  //問題文を表示
  CreateQuestion(quiz_num, container)
  //画像を表示
  const img = CreateImg(quiz_num, container)
  //feedbackを作成
  const feedback = CreateFeedback()
  container.append(feedback)
  //選択肢の数をchoice_numに格納
  const choice_num = quiz[quiz_num].choices.length
  //選択肢（ボタン）を作成したい数作成
  for (let i = 0; i < choice_num; i++) {
    CreateButton(i, quiz_num, container, feedback, img)
  }

  //containerをmaincontainerに追加
  maincontainer.append(container)
}

const reloadQuiz = function() {
  //問題数分のクイズを作成
  for (let i = 0; i < quiz.length; i++) {
    CreateQuiz(i)
  }
}

reloadQuiz()
