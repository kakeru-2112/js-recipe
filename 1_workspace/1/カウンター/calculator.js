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


let record_num = ""
let calc_num = null
let calc = "0"

const calcFunction = function(){
  if (calc_num === null){
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
  calcFunction()
  record_num = ""
  calc = "1"
  display.textContent = calc_num
}
minus.onclick = function(){
  if (record_num !== ""){
    if(plus.classList.contains("onclick-button") == true ){
      plus.classList.remove("onclick-button")
     } else if(multi.classList.contains("onclick-button") == true ){
      multi.classList.remove("onclick-button")
     } else if(division.classList.contains("onclick-button") == true ){
      division.classList.remove("onclick-button")
     } 
    minus.classList.add("onclick-button")
    calcFunction()
    record_num = ""
    calc = "2"
    display.textContent = calc_num
  } else{
    record_num+="-"
    display.textContent = record_num
  }
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
  calcFunction()
  record_num = ""
  calc = "3"
  display.textContent = calc_num
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
  calcFunction()
  record_num = ""
  calc = "4"
  display.textContent = calc_num 
}

clear.onclick = function(){
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
  calcFunction()
  display.textContent = calc_num
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

