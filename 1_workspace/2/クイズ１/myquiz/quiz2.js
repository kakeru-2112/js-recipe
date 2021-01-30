const maincontainer = document.getElementById("main-container")

// ここにクイズの内容を追加してね
const quiz = [
  {
    text: "ぼくの名前は何でしょう？",
    image: "arukuma_01.jpg",
    choices: [
      {
        text: "りん太君",
        image: "rinnta.jpg",
        feedback: "残念！同じくリンゴが有名な青森県のゆるキャラだね、、、",
      },
      {
        text: "アルクマ",
        image: "arukuma_02.jpg",
        feedback: "正解！ぼくは長野県のゆるキャラあるクマだよ！",
      },
      {
        text: "くまモン",
        image: "kumamon.jpg",
        feedback: "残念！熊本県のゆるキャラだよ、同じくマの仲間だけど、、！",
      },
      {
        text: "ぐんまちゃん",
        image: "gunnmatyan.jpg",
        feedback:
          "ぐんまってあるのに、さすがにこれ選んだ人はいないよね？笑",
      },
    ],
  },
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
        feedback: "正解！長野県内に５のキャンパスがあるんだよ！",
      },
      {
        text: "公立諏訪東京理科大学",
        image: "suwauniv.jpg",
        feedback:
          "公立って書いてあるのに、さすがにこれもないよね？笑",
      },
    ],
  },
  {
    text: "工学部は何キャンパスでしょう？",
    image: "arukuma03.jpeg",
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
          "正解！写真真ん中の建物が研究施設なんだ！！（ちなみに長野市には教育キャンパスも別にあるよ！））",
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
  }



]

//h2タグ作成
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

//buttonタグ作成
const CreateButton = function(choices_num, quiz_num, container, feedback, img) {
  const button = document.createElement("button")
  button.className = "choice"
  button.textContent = quiz[quiz_num].choices[choices_num].text
  button.onclick = function() {
    choose(choices_num, quiz_num, feedback, img)
  }
  container.append(button)
}

//feedbackのためのdivタグを追加
const CreateFeedback = function() {
  const feedback = document.createElement("div")
  feedback.className = "feedback"
  return feedback
}

// ボタンが選択されたときの処理関数
const choose = function(choiceNumber, quiz_num, feedback, img) {
  feedback.textContent = quiz[quiz_num].choices[choiceNumber].feedback
  img.src = "image/" + quiz[quiz_num].choices[choiceNumber].image
  //フェードインメソッド
  img.animate([{ opacity: "0" }, { opacity: "1" }], 1500)
}

// クイズを１問作成
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

//用意されている問題数分のクイズを作成
const reloadQuiz = function() {
  for (let i = 0; i < quiz.length; i++) {
    CreateQuiz(i)
  }
}

reloadQuiz()
