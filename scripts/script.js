// theme function
function moveSlider(position){
  const circle = document.querySelector(".slider-button");
  const row = document.querySelector(".slider-track");
  const computed = window.getComputedStyle(row);
  const width = computed.getPropertyValue("width");
  const body = document.body;

  const length = parseFloat(width);

  if(position == 1){
    circle.style.left = `5px`;
    body.classList.remove("theme-2");
    body.classList.remove("theme-3");

  }else if (position == 2){
    circle.style.left = `${(length/3) + 6}px`;
    body.classList.add("theme-2");
    body.classList.remove("theme-3");


  }else if (position == 3){
    circle.style.left = `${(length / 3) * 2 + 10}px`;
    body.classList.add("theme-3");
    body.classList.remove("theme-2");
  }

}

//calculator function
let value = "";
let justCalculated = false;
const showValues = document.querySelector('.value');

// show value
function showValue(press){
    if(justCalculated){
    if(!["+","-","/","*"].includes(press)){
      value = "";
      justCalculated = false;
    }else{
      justCalculated = false;
    }
  }

  if(value === ""){
    if(["+","-","/","*"].includes(press)){
      value += `0${press}`;
    }else{
      value += press;
    }
  }else{
      value += press; 
  }
  showValues.innerHTML = value;
}

// delete number
function clearText(){
  value = value.slice(0, -1);
  showValues.innerHTML = value;

  //default condition
  if(value == ""){
    showValues.innerHTML = "0";
  }
}

// reset button
function reset(){
  value = "";
  showValues.innerHTML = "0";
}

// calculate 
function calculate(){
  try{
    let result = eval(value);

    if(result.toString().length > 10){
      showValues.innerHTML = `= ${result.toExponential()}`;
    }else{
      showValues.innerHTML = `= ${result}`;
    }
    
    value = result;
    justCalculated = true;
  
  }catch(e){
    showValues.innerHTML = "Error";
    value = "";
  }
}
