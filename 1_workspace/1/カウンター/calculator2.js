// アップデートすべきこと
// ％の計算
// ACからCボタンへ変更、数字の入力が始まったらCボタンに変わり演算記号が入力された時点でその数字は確定する様だ。Cボタンを一回使ったらACボタンに戻る。また数字が入力されたらCボタンへ。


//要素を取得
const display = document.getElementById("display")
const clear = document.getElementById("clear-button")
const plumin = document.getElementById("plumin-button")
const division = document.getElementById("division-button")
const seven = document.getElementById("seven-button")
const eight = document.getElementById("eight-button")
const nine = document.getElementById("nine-button")
const multi = document.getElementById("multi-button")
const four = document.getElementById("four-button")
const five = document.getElementById("five-button")
const six = document.getElementById("six-button")
const minus = document.getElementById("minus-button")
const one = document.getElementById("one-button")
const two = document.getElementById("two-button")
const three = document.getElementById("three-button")
const plus = document.getElementById("plus-button")
const zero = document.getElementById("zero-button")
const dot = document.getElementById("dot-button")
const equal = document.getElementById("equal-button")

//変数と配列をそれぞれ定義
// クリックされた内容がnumberBoxに入る
let numberBox = []
// 乗商算は優先的に行う必要があるため、乗商はp_listに加減はu_listへ
let p_list = []
let u_list = []
// record_numにクリックされた数字を保存し最終的にnumberBoxへ格納しリセット
let record_num = ""

// 配列の中で計算するための変数
let calc_num = null

// Cボタンならtrue
let C_clear = false

// 配列の中の計算記号を確認し演算を行い、計算した部分と結果を置き換える
const calcFunction = function(k) {
  if (numberBox[k] === "1") {
    calc_num = numberBox[k - 1] + numberBox[k + 1]
  } else if (numberBox[k] === "2") {
    calc_num = numberBox[k - 1] - numberBox[k + 1]
  } else if (numberBox[k] === "3") {
    calc_num = numberBox[k - 1] * numberBox[k + 1]
  } else if (numberBox[k] === "4") {
    calc_num = numberBox[k - 1] / numberBox[k + 1]
  }
  numberBox.splice(k - 1, 3, calc_num)
}

// 配列の計算中にインデックスがずれるので修正するための関数
const eachminu = function(list, m) {
  for (let n = 0; n < list.length; n += 1) {
    if (m < list[n]) {
      list[n] -= 2
    }
  }
}

// ACからCボタンへ
const C_buttonChange = function(){
  if (!C_clear){
    clear.textContent = "C"
  }
  C_clear = true
}

// CからACボタンへ
const AC_buttonChange = function(){
  if (C_clear){
    clear.textContent = "AC"
  }
  C_clear = false
}

// 各ボタンをクリックしたときの動作
one.onclick = function() {
  record_num += "1"
  display.textContent = record_num
  C_buttonChange()
}
two.onclick = function() {
  record_num += "2"
  display.textContent = record_num
  C_buttonChange()
}
three.onclick = function() {
  record_num += "3"
  display.textContent = record_num
  C_buttonChange()
}
four.onclick = function() {
  record_num += "4"
  display.textContent = record_num
  C_buttonChange()
}
five.onclick = function() {
  record_num += "5"
  display.textContent = record_num
  C_buttonChange()
}
six.onclick = function() {
  record_num += "6"
  display.textContent = record_num
  C_buttonChange()
}
seven.onclick = function() {
  record_num += "7"
  display.textContent = record_num
  C_buttonChange()
}
eight.onclick = function() {
  record_num += "8"
  display.textContent = record_num
  C_buttonChange()
}
nine.onclick = function() {
  record_num += "9"
  display.textContent = record_num
  C_buttonChange()
}
zero.onclick = function() {
  record_num += "0"
  display.textContent = record_num
  C_buttonChange()
}

// ここから各演算記号をクリック時の動作
plus.onclick = function() {
  // 今クリックされている演算記号にonclick-buttonというclassを付けておく
  if (minus.classList.contains("onclick-button") == true) {
    minus.classList.remove("onclick-button")
  } else if (multi.classList.contains("onclick-button") == true) {
    multi.classList.remove("onclick-button")
  } else if (division.classList.contains("onclick-button") == true) {
    division.classList.remove("onclick-button")
  }
  plus.classList.add("onclick-button")

  // record_numに数字が記録されていなかったら二回連続演算記号を押したことになるので前に押された方を削除、記録されていた場合はそれをnumberBoxに追加してrecord_numはリセット
  if (record_num === "") {
    numberBox.pop()
  } else {
    numberBox.push(Number(record_num))
    record_num = ""
  }

  // 計算法を配列に記録
  numberBox.push("1")
}
minus.onclick = function() {
  if (plus.classList.contains("onclick-button") == true) {
    plus.classList.remove("onclick-button")
  } else if (multi.classList.contains("onclick-button") == true) {
    multi.classList.remove("onclick-button")
  } else if (division.classList.contains("onclick-button") == true) {
    division.classList.remove("onclick-button")
  }
  minus.classList.add("onclick-button")

  if (record_num === "") {
    numberBox.pop()
  } else {
    numberBox.push(Number(record_num))
    record_num = ""
  }

  numberBox.push("2")
}
multi.onclick = function() {
  if (plus.classList.contains("onclick-button") == true) {
    plus.classList.remove("onclick-button")
  } else if (minus.classList.contains("onclick-button") == true) {
    minus.classList.remove("onclick-button")
  } else if (division.classList.contains("onclick-button") == true) {
    division.classList.remove("onclick-button")
  }
  multi.classList.add("onclick-button")

  if (record_num === "") {
    numberBox.pop()
  } else {
    numberBox.push(Number(record_num))
    record_num = ""
  }

  numberBox.push("3")
}
division.onclick = function() {
  if (plus.classList.contains("onclick-button") == true) {
    plus.classList.remove("onclick-button")
  } else if (minus.classList.contains("onclick-button") == true) {
    minus.classList.remove("onclick-button")
  } else if (multi.classList.contains("onclick-button") == true) {
    multi.classList.remove("onclick-button")
  }
  division.classList.add("onclick-button")

  if (record_num === "") {
    numberBox.pop()
  } else {
    numberBox.push(Number(record_num))
    record_num = ""
  }

  numberBox.push("4")
}

clear.onclick = function() {
  // Cの時とACの時で場合分け
  if (C_clear){
    record_num = ""
    AC_buttonChange()
  }else {
    // すべての定義した変数、配列などをリセットして表示は０にする
    numberBox = []
    p_list = []
    u_list = []
    record_num = ""
    calc_num = null
    display.textContent = 0
    if (plus.classList.contains("onclick-button") == true) {
      plus.classList.remove("onclick-button")
    } else if (minus.classList.contains("onclick-button") == true) {
      minus.classList.remove("onclick-button")
    } else if (multi.classList.contains("onclick-button") == true) {
      multi.classList.remove("onclick-button")
    } else if (division.classList.contains("onclick-button") == true) {
      division.classList.remove("onclick-button")
    }
  }
}

// 小数点を追加できる
dot.onclick = function() {
  record_num += "."
  display.textContent = record_num
}

// 正負を逆転することができる
plumin.onclick = function() {
  if (record_num.indexOf("-", 0) !== -1) {
    record_num = record_num.slice(1)
    if (record_num === "") {
      display.textContent = 0
    } else {
      display.textContent = record_num
    }
  } else {
    record_num = "-" + record_num
    display.textContent = record_num
  }
}

// イコールが押された場合今まで記録してきたnumberBoxの計算を行う
equal.onclick = function() {
  numberBox.push(Number(record_num))

  // 演算記号のnumberBoxでの場所を二つの配列に記録（数字、記号、数字のように交互に格納されているため二個飛ばしで探索する）
  for (let i = 1; i <= numberBox.length - 2; i += 2) {
    if (numberBox[i] === "3") {
      p_list.push(i)
    } else if (numberBox[i] === "4") {
      p_list.push(i)
    } else if (numberBox[i] === "1") {
      u_list.push(i)
    } else if (numberBox[i] === "2") {
      u_list.push(i)
    }
  }

  // 優先度の高いp_listの記号を使い左から演算を行う
  for (let i = 0; i < p_list.length; i += 1) {
    calcFunction(p_list[i])
    eachminu(p_list, p_list[i])
    eachminu(u_list, p_list[i])
    console.log(numberBox)
  }

  // 次にu_listを使い演算する
  for (let i = 0; i < u_list.length; i += 1) {
    calcFunction(u_list[i])
    eachminu(p_list, u_list[i])
    eachminu(u_list, u_list[i])
    console.log(numberBox)
  }

  // 演算結果がnumberBoxの一番目にあるのでそれを表示する
  display.textContent = numberBox[0]

  // リセットする
  record_num = ""
  calc_num = null
  if (plus.classList.contains("onclick-button") == true) {
    plus.classList.remove("onclick-button")
  } else if (minus.classList.contains("onclick-button") == true) {
    minus.classList.remove("onclick-button")
  } else if (multi.classList.contains("onclick-button") == true) {
    multi.classList.remove("onclick-button")
  } else if (division.classList.contains("onclick-button") == true) {
    division.classList.remove("onclick-button")
  }
}
