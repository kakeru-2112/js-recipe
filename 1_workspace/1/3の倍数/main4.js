// const genkiFunction = function(number){
//   let n = 1

//   const countUp = function(number){
//     if (n%3 === 0) {
//     console.log( n +"!!!!!")
//   } else {
//     console.log(n)
//   }
//     n += 1
//   }

//   setInterval(countUp(number),1000)
// }

// genkiFunction(24)
let n = 1
const genkiFunction = function(){
  if (n%3 === 0) {
    console.log( n +"!!!!!")
  } else {
    console.log(n)
  }
  n += 1
  if (n===9){
    return
  }
}

setInterval(genkiFunction,1000)
