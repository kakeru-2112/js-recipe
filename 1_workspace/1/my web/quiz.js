// 一回目押したボタンの記録が残るようにしたい、そして点数を数えて置き最後に結果発表、リセットボタンも必要

const maincontainer = document.getElementById("main-container")
const resultButton = document.getElementById("result_button")
const resultDisplay = document.getElementById("result_display")

// ここにクイズの内容を追加してね
const quiz = [
  {
    firstpush: true,
    text: "僕が生まれた県は？",
    image: "yuru_logo.png",
    comment:"んーー、基本情報に書いてあったよなー。",
    answer:2,
    choices: [
      {
        text: "長野県",
        image: "arukumasuwaru.png",
        feedback: "☝アルクマ　残念！今住んでるのは長野県だけど、生まれは違うぞ～！",
      },
      {
        text: "山口県",
        image: "choruru.png",
        feedback: "☝ちょるる　残念！プロフィールには書いてないけど、父親の実家ｗ",
      },
      {
        text: "群馬県",
        image: "gunnmatyan.jpg",
        feedback: "☝ぐんまちゃん　正解！！なんか、群馬出身ですって言うとみんなジャングルって馬鹿にしてくるｗ",
      },
      {
        text: "宮城県",
        image: "musubimaru.jpg",
        feedback:
          "残念！けど、父親の仕事の都合で二年くらい住んでました。",
      },
    ],
  },
  {
    firstpush: true,
    text: "僕が韓国を好きになったきっかけは？",
    image: "psy.jpg",
    comment:"んーー、趣味の欄にで見たよなー。",
    answer:2,
    choices: [
      {
        text: "ＢＩＧＢＡＮＧ",
        image: "bigbang.jpeg",
        feedback: "残念！きっかけではないんだ、ハルハルっていう曲がおすすめ！！",
      },
      {
        text: "ＮｉｚｉＵ",
        image: "niziu.jpg",
        feedback: "残念！最近話題になったよね、ＴＷＩＣＥと同じ事務所なんだ",
      },
      {
        text: "ＴＷＩＣＥ",
        image: "twice.jpg",
        feedback: "正解！アイドルに全く興味のなかった僕がはまってしまいました。ＴＷＩＣＥのおかげでいい趣味が持てました",
      },
      {
        text: "ＢＴＳ",
        image: "bts.jpg",
        feedback:
          "残念！去年はＤｙｎａｍｉｔｅで大ブレイク！！みんなも一度は耳にしたかな？",
      },
    ],
  },
  {
    firstpush: true,
    text: "信州大学工学部は何キャンパスでしょう？",
    image: "shinshu_logo.png",
    comment:"記事を見てくれた君ならわかるはず！！",
    answer:1,
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
          "正解！！これが分かった君はちゃんと記事読んでくれたね～",
      },
      {
        text: "伊那キャンパス",
        image: "shinshu_ina__img.jpg",
        feedback: "残念！農学部あるんだけど、めちゃくちゃど田舎らしい。。",
      },
      {
        text: "上田キャンパス",
        image: "shinshu_senni__img.jpg",
        feedback: "残念！日本で唯一の繊維学部があるよ！",
      },
    ],
  }



]

// 合計点
let sum = 0

//h2タグ作成
const CreateQuestion = function(quiz_num, container) {
  const question = document.createElement("h2")
  question.className = "quiz-text"
  question.textContent = `Q${quiz_num+1}、` + quiz[quiz_num].text
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
const CreateFeedback = function(quiz_num) {
  const feedback = document.createElement("div")
  feedback.className = "feedback"
  feedback.textContent = quiz[quiz_num].comment
  return feedback
}

// ボタンが選択されたときの処理関数
const choose = function(choiceNumber, quiz_num, feedback, img) {
  feedback.textContent = quiz[quiz_num].choices[choiceNumber].feedback
  img.src = "image/" + quiz[quiz_num].choices[choiceNumber].image
  //フェードインメソッド
  img.animate([{ opacity: "0" }, { opacity: "1" }], 1500)
  // quizの中のfirstpushがtrueのときのみ実行
  if (quiz[quiz_num].firstpush){
    // choiceNumberとanswer変数が同じなら正解
    if (choiceNumber === quiz[quiz_num].answer){
      sum+=1
    }
    // firstpushをfalseにして二回目以降はスコアに反映しない
    quiz[quiz_num].firstpush = false
  }
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
  const feedback = CreateFeedback(quiz_num)
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

resultButton.onclick = function(){
  resultDisplay.textContent = `${quiz.length}問中${sum}問正解！！`
}
