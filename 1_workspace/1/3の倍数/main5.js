let n = 1
const genkiFunction = function(){
  if (n%3 === 0) {
    console.log( n +"!!!!!")
  } else {
    console.log(n)
  }
  n += 1
}

setInterval(genkiFunction,1000)