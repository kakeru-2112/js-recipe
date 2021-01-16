const display = document.getElementById("display")
const clear = document.getElementById("clear-button")
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


let display_num = ""
let record_num = ""
let calc_num = null
let calc = "0"

const calcFunction = function(){
  if (calc_num===null){
    calc_num = Number(record_num)
  }else {
    if (calc === "1"){
      calc_num = calc_num+Number(record_num)
    }else if(calc === "2"){
      calc_num = calc_num-Number(record_num)
    }else if(calc === "3"){
      calc_num = calc_num*Number(record_num)
    }else if(calc === "4"){
      calc_num = calc_num/Number(record_num)
    }
  }
}
  
one.onclick = function(){
  display_num+="1" 
  record_num+="1" 
  display.textContent = display_num
}
two.onclick = function(){ 
  display_num+="2" 
  record_num+="2"
  display.textContent = display_num
}
three.onclick = function(){  
  display_num+="3"
  record_num+="3"
  display.textContent = display_num
}
four.onclick = function(){ 
  display_num+="4"
  record_num+="4"
  display.textContent = display_num
}
five.onclick = function(){ 
  display_num+="5" 
  record_num+="5"
  display.textContent = display_num
}
six.onclick = function(){
  display_num+="6" 
  record_num+="6"  
  display.textContent = display_num
}
seven.onclick = function(){ 
  display_num+="7" 
  record_num+="7"
  display.textContent = display_num
}
eight.onclick = function(){ 
  display_num+="8"
  record_num+="8" 
  display.textContent = display_num
}
nine.onclick = function(){  
  display_num+="9"
  record_num+="9"
  display.textContent = display_num
}
zero.onclick = function(){
  display_num+="0"
  record_num+="0"
  display.textContent = display_num
}

plus.onclick = function(){
  calcFunction()
  display_num+="+"
  record_num = ""
  calc = "1"
  display.textContent = display_num
}
minus.onclick = function(){
  if (record_num !== ""){
    calcFunction()
    record_num = ""
    calc = "2"
  } else{
    record_num+="-"
  }
  display_num+="-"
  display.textContent = display_num 
}
multi.onclick = function(){
  calcFunction()
  display_num+="×"
  record_num = ""
  calc = "3"
  display.textContent = display_num 
}
division.onclick = function(){
  calcFunction()
  display_num+="÷"
  record_num = ""
  calc = "4"
  display.textContent = display_num 
}

clear.onclick = function(){
  display_num =""
  record_num = "" 
  calc_num = null
  calc = "0"
  display.textContent = 0
}

dot.onclick = function(){
  record_num+="."
  display_num+="."
  display.textContent = display_num 
}

equal.onclick = function(){ 
  calcFunction()
  display.textContent = calc_num
  display_num =""
  record_num = "" 
  calc_num = null
  calc = "0"
}



