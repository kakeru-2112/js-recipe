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


let numberBox = []
let p_list = []
let u_list = []

let record_num = ""
let calc_num = null

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

const eachminu = function(list,m){
  for (let n=0;n<list.length;n+=1){
    if (m<list[n]){
      list[n]-=2
    }
  }
}

one.onclick = function(){ 
  record_num+="1"
  display.textContent = record_num
}
two.onclick = function(){ 
  record_num+="2"
  display.textContent = record_num
}
three.onclick = function(){  
  record_num+="3"
  display.textContent = record_num
}
four.onclick = function(){ 
  record_num+="4"
  display.textContent = record_num
}
five.onclick = function(){  
  record_num+="5"
  display.textContent = record_num
}
six.onclick = function(){ 
  record_num+="6"  
  display.textContent = record_num
}
seven.onclick = function(){ 
  record_num+="7"
  display.textContent = record_num
}
eight.onclick = function(){ 
  record_num+="8" 
  display.textContent = record_num
}
nine.onclick = function(){  
  record_num+="9"
  display.textContent = record_num
}
zero.onclick = function(){
  record_num+="0"
  display.textContent = record_numm
}

plus.onclick = function(){

  if(minus.classList.contains("onclick-button") == true ){
    minus.classList.remove("onclick-button")
   } else if(multi.classList.contains("onclick-button") == true ){
    multi.classList.remove("onclick-button")
   } else if(division.classList.contains("onclick-button") == true ){
    division.classList.remove("onclick-button")
   } 
  plus.classList.add("onclick-button")

  if (record_num === ""){
    numberBox.pop()
  }else{
    numberBox.push(Number(record_num))
    record_num = ""
  }
  
  numberBox.push("1")

}
minus.onclick = function(){

  if(plus.classList.contains("onclick-button") == true ){
    plus.classList.remove("onclick-button")
   } else if(multi.classList.contains("onclick-button") == true ){
    multi.classList.remove("onclick-button")
   } else if(division.classList.contains("onclick-button") == true ){
    division.classList.remove("onclick-button")
   } 
  minus.classList.add("onclick-button")

  if (record_num === ""){
    numberBox.pop()
  }else{
    numberBox.push(Number(record_num))
    record_num = ""
  }

  numberBox.push("2")

}
multi.onclick = function(){

  if(plus.classList.contains("onclick-button") == true ){
    plus.classList.remove("onclick-button")
   } else if(minus.classList.contains("onclick-button") == true ){
    minus.classList.remove("onclick-button")
   } else if(division.classList.contains("onclick-button") == true ){
    division.classList.remove("onclick-button")
   } 
  multi.classList.add("onclick-button")

  if (record_num === ""){
    numberBox.pop()
  }else{
    numberBox.push(Number(record_num))
    record_num = ""
  }

  numberBox.push("3")

}
division.onclick = function(){

  if(plus.classList.contains("onclick-button") == true ){
    plus.classList.remove("onclick-button")
   } else if(minus.classList.contains("onclick-button") == true ){
    minus.classList.remove("onclick-button")
   } else if(multi.classList.contains("onclick-button") == true ){
    multi.classList.remove("onclick-button")
   } 
  division.classList.add("onclick-button")

  if (record_num === ""){
    numberBox.pop()
  }else{
    numberBox.push(Number(record_num))
    record_num = ""
  }

  numberBox.push("4")

}

clear.onclick = function(){
  numberBox = []
  p_list = []
  u_list = []
  record_num = "" 
  calc_num = null
  calc = "0"
  display.textContent = 0
  if(plus.classList.contains("onclick-button") == true ){
    plus.classList.remove("onclick-button")
   } else if(minus.classList.contains("onclick-button") == true ){
    minus.classList.remove("onclick-button")
   } else if(multi.classList.contains("onclick-button") == true ){
    multi.classList.remove("onclick-button")
   } else if(division.classList.contains("onclick-button") == true ){
    division.classList.remove("onclick-button")
}
}

dot.onclick = function(){
  record_num+="."
  display.textContent = record_num 
}

plumin.onclick = function(){
  if (record_num.indexOf("-",0)!==-1){
    record_num = record_num.slice(1)
    if (record_num === ""){
      display.textContent = 0
    } else{
      display.textContent = record_num
    }
  } else{
    record_num = "-" + record_num
    display.textContent = record_num
  }
}

equal.onclick = function(){ 
  numberBox.push(Number(record_num))
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
    eachminu(p_list,p_list[i])
    eachminu(u_list,p_list[i])
    console.log(numberBox)
  }
  
  for (let i=0;i<u_list.length;i+=1){
    calcFunction(u_list[i])
    eachminu(p_list,u_list[i])
    eachminu(u_list,u_list[i])
    console.log(numberBox)

  }
  

  display.textContent = numberBox[0]
  console.log(numberBox)

  record_num = "" 
  calc_num = null
  calc = "0"
  if(plus.classList.contains("onclick-button") == true ){
    plus.classList.remove("onclick-button")
   } else if(minus.classList.contains("onclick-button") == true ){
    minus.classList.remove("onclick-button")
   } else if(multi.classList.contains("onclick-button") == true ){
    multi.classList.remove("onclick-button")
   } else if(division.classList.contains("onclick-button") == true ){
    division.classList.remove("onclick-button")
}
}

