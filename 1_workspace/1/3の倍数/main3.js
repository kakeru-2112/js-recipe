const genkiFuncton = function(number){
  for (let n=1; n<=number; n++) {
    if (n%3 === 0) {
      console.log( n +"!!!!!")
    } else {
      let lnum = String(n)  //nを文字列に変換
      if (lnum.indexOf("3") !== -1){  //indexof関数->3を見つけられなかったら-1を返す
        console.log( n +"!!!!!")
      } else {
        console.log(n)
      }
    }
  }
}

genkiFuncton(100)
