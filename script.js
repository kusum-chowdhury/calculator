let operator = '';
let perviousValue = '';
let currentValue = '';

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");
    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let previousScreen = document.querySelector(".previous");
    let currentScreen = document.querySelector(".current");
    
    numbers.forEach((number) => number.addEventListener("click", function(e){
       handleNumbers(e.target.textContent);
       currentScreen.textContent = currentValue;
    }))
    operators.forEach((op)=> op.addEventListener("click", function(e){
        handleOperators(e.target.textContent)
        previousScreen.textContent = perviousValue + " " + operator;
        currentScreen.textContent = currentValue;
    }))
    clear.addEventListener("click", function(){
        perviousValue = "";
        currentValue="";
        operator="";
        previousScreen.textContent = currentValue;
        currentScreen.textContent= currentValue;
    })
    equal.addEventListener("click", function(){
        if(currentValue != "" && perviousValue != ""){

            calculate()
            previousScreen.textContent = "";
            if(perviousValue.length <= 5){
                currentScreen.textContent = perviousValue
            } else {
                currentScreen.textContent = perviousValue.slice(0, 5)+ "...";
            }
        }
        decimal.addEventListener("click", function(){
            addDecimal()
        })
    })
})



function handleNumbers(number){
    if(currentValue.length <= 5){

        currentValue += number;
    }
}
function handleOperators(op){
   operator = op;
   perviousValue = currentValue;
   currentValue = "";
}
function calculate(){
    perviousValue = Number(perviousValue);
    currentValue = Number(currentValue);

    if(operator === "+"){
        perviousValue += currentValue;
    } else if(operator === "-"){
        perviousValue -= currentValue;
    } else if(operator === "x"){
        perviousValue *= currentValue;
    } else if(operator === "/"){
        perviousValue /= currentValue;
    }
    perviousValue = roundNumber(perviousValue);
    perviousValue = perviousValue.toString();
    currentValue = currentValue.toString();
}
function roundNumber(num){
    return Math.round(num * 1000) /1000;
}

function addDecimal (){
  if(!currentValue.includes(".")){
    currentValue += ".";
  }
}