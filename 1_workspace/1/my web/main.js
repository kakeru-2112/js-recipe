const click = document.getElementById("click")

click.onclick = function() {
  let confirm = confirmFunction()
  if (confirm) {
    window.location.href = "quiz.html"
  }
}

const confirmFunction = function() {
  return confirm("きちんと記事は読みましたか？？")
}



// 700,160
function setup() {
  let canvas = createCanvas(700, 160)
  canvas.parent("go_quiz")

  // ボールを作る
  for (let i = 0; i < 3; i++) {
    balls.push(
      new Ball(
        new Vec2(random(0, 700), random(0, 160)),
        new Vec2(random(-300, 300), random(-300, 300)),
      ),
    )
  }
}

// ベクトルにはxとy成分がある
class Vec2 {
  constructor(_x, _y) {
    this.x = _x
    this.y = _y
  }
  // 二つのベクトルa,bの和を計算する
  add(b) {
    let a = this
    return new Vec2(a.x + b.x, a.y + b.y)
  }
  // ベクトルの実数s倍（スカラー倍）を求める
  mul(s) {
    let a = this
    return new Vec2(s * a.x, s * a.y)
  }
}

// ボールには位置と速度のベクトルがある
class Ball {
  constructor(_p, _v) {
    this.p = _p //ボールの中心の位置ベクトル
    this.v = _v //ボールの速度ベクトル
  }
}

// ボールを作る
let balls = []

function draw() {
  for (let ball of balls) {
    // ボールを移動させる
    // ball.p.x = ball.p.x + ball.v.x/60
    // ball.p.y = ball.p.y + ball.v.y/60
    ball.p = ball.p.add(ball.v.mul(1 / 60))

    // ボールが左端か右端に来たら反射
    if (ball.p.x < 15 || ball.p.x > 685) {
      ball.v.x = -ball.v.x
      fill(100 + random(155), 100 + random(155), 100 + random(155), 70)
    }
    // ボールが上下端に来たら反射
    if (ball.p.y < 15 || ball.p.y > 160) {
      ball.v.y = -ball.v.y
      fill(100 + random(155), 100 + random(155), 100 + random(155), 70)
    }
  }

  // 画面を塗りつぶす
  background(242)

  for (let ball of balls) {
    // ボールを描画
    circle(ball.p.x, ball.p.y, 50)
    noStroke()
  }
}
