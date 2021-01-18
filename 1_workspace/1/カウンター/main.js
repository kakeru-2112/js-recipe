const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const twiceButton = document.getElementById("twice-button")

let count = 0

plusButton.onclick = function(){
  count += 1
  display.textContent = count
}

minusButton.onclick = function(){
  count -= 1
  display.textContent = count
}

twiceButton.onclick = function(){
  count *= 2
  display.textContent = count
}

// const character = {
//   name:"きんにくん",
//   mother:{name:"きんにくママ"},
//   hobbies:["筋トレ","お笑い","YouTube"]
// }

// const multiply = function(a,b){
//   return a*b
// }

// for (let n=2;n<=10;n++){
//   if (n%2===0){
//     console.log(n)
//   }
// }

let numberBox = [1,"1",2,"3",3]
let p_list = []
let u_list = []

let record_num = ""
let calc_num 

const allmin = function(list,m){
  for (let n=0;n<list.length;n+=1){
    if (m<list[n]){
      list[n]-=2
    }
  }
}

const calcFunction = function(k){
  if (numberBox[k] === "1"){
    calc_num = numberBox[k-1]+numberBox[k+1]
  }else if (numberBox[k] === "2"){
    calc_num = numberBox[k-1]-numberBox[k+1]
  }else if (numberBox[k] === "3"){
    calc_num = numberBox[k-1]*numberBox[k+1]
  }else if (numberBox[k] === "4"){
    calc_num = numberBox[k-1]/numberBox[k+1]
  }
  numberBox.splice(k-1,3,calc_num)
}

console.log(numberBox)

for (let i=1;i<=numberBox.length-2;i+=2){
  if (numberBox[i] === "3"){
    p_list.push(i)
  }else if (numberBox[i] === "4"){
    p_list.push(i)
  }
  else if (numberBox[i] === "1"){
    u_list.push(i)
  }
  else if (numberBox[i] === "2"){
    u_list.push(i)
  }
}

for (let i=0;i<p_list.length;i+=1){
  calcFunction(p_list[i])
  allmin(p_list,p_list[i])
  allmin(u_list,p_list[i])
}

for (let i=0;i<u_list.length;i+=1){
  calcFunction(u_list[i])
  allmin(p_list,u_list[i])
  allmin(u_list,u_list[i])
}


// allmin(p_list,1)
// allmin(u_list,1)
  
// calcFunction(1)
// calcFunction(1)
console.log(numberBox)
console.log(p_list)
console.log(u_list)
console.log(calc_num)


