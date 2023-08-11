/*Add your JavaScript here*/

var answeredCount = 0
var namjoonOutcome = 0
var taehyungOutcome = 0

// store html elements using DOM

var result = document.getElementById("result")
var q1a1 = document.getElementById("q1a1")
var q1a2 = document.getElementById("q1a2")
var q2a1 = document.getElementById("q2a1")
var q2a2 = document.getElementById("q2a2")
var q3a1 = document.getElementById("q3a1")
var q3a2 = document.getElementById("q3a2")
var restart = document.getElementById("restart")

var namjoonImg = document.getElementById("namjoonImg")
var taehyungImg = document.getElementById("taehyungImg")

// adding interactivity to buttons

q1a1.addEventListener("click", () => {    
     namjoon();
     disableQ1(q1a1, q1a2);    
});
q1a2.addEventListener("click", () => {    
     taehyung();
     disableQ1(q1a2, q1a1);    
});
q2a1.addEventListener("click", () => {    
     namjoon();
     disableQ2(q2a1, q2a2);    
});
q2a2.addEventListener("click", () => {    
     taehyung();
     disableQ2(q2a2, q2a1);    
});
q3a1.addEventListener("click", () => {    
     namjoon();
     disableQ3(q3a1, q3a2);    
});
q3a2.addEventListener("click", () => {    
     taehyung();
     disableQ3(q3a2, q3a1);    
});

restart.addEventListener("click", restartQuiz);

// hides the image for results!!

namjoonImg.style.display = "none";
taehyungImg.style.display = "none";

// keeps track of namjoon outcome
function namjoon() {
  namjoonOutcome += 1;
  answeredCount += 1;

  console.log("answeredCount = "+ answeredCount + "namjoonOutcome = " + namjoonOutcome);

  if(answeredCount == 3){
  console.log("the quiz is done!")
    updateResult();
}
}

// keeps track of taehyung outcome!

function taehyung() {
  taehyungOutcome += 1;
  answeredCount += 1;

  console.log("answeredCount = "+ answeredCount + "taehyungOutcome = " + taehyungOutcome);
if(answeredCount == 3){
  console.log("The quiz is done!")
  updateResult();
  
}
}


function updateResult(){
  if(namjoonOutcome == 3) {
    result.innerHTML = "Wow, you are JUST like RM of BTS!!"
    namjoonImg.style.display = "block";
    console.log("Wow you are JUST like RM of BTS!!")
  } else if (taehyungOutcome == 3) {
    result.innerHTML = "Wow you are JUST like Taehyung of BTS!!"
    taehyungImg.style.display = "block";
    console.log("Wow you are JUST like Taehyung of BTS!!")
  } else if(namjoonOutcome > taehyungOutcome) {
    result.innerHTML = "Wow you and RM of BTS are quite similar!"
    namjoonImg.style.display = "block";
    console.log("Wow you and RM of BTS are quite similar!")
  } else if(taehyungOutcome > namjoonOutcome) {
    result.innerHTML = "Wow you and Taehyung of BTS are quite similar!"
    taehyungImg.style.display = "block";
    console.log("Wow you and Taehyung of BTS are quite similar!")
  }
}

function restartQuiz(){
  answeredCount = 0;
  namjoonOutcome = 0;
  taehyungOutcome = 0;
  result.innerHTML = "Your result is...";
  console.log("Answer Count = "+ answeredCount, "Namjoon Score = "+ namjoonOutcome, "Taehyung Score = "+taehyungOutcome);
  namjoonImg.style.display = "none";
  taehyungImg.style.display = "none";
  resetQuestions();
}

// disable the rest of the choices when selected one!

function disableQ1(choice, question){
  choice.style.backgroundColor = "#BBBDF6";
  choice.style.color = "white";
  question.disabled = true;
}

function disableQ2(choice, question){
  choice.style.backgroundColor = "#BBBDF6";
  choice.style.color = "white";
  question.disabled = true;
}

function disableQ3(choice, question){
  choice.style.backgroundColor = "#BBBDF6";
  choice.style.color = "white";
  question.disabled = true;
}

// reset the questions back to active
function resetQuestions(){
q1a1.disabled = false;
q1a1.style.backgroundColor = "#eee3ab";
q1a1.style.color = "black";
  
q1a2.disabled = false;
q1a2.style.backgroundColor = "#eee3ab";
q1a2.style.color = "black";
  
q2a1.disabled = false;
q2a1.style.backgroundColor = "#eee3ab";
q2a1.style.color = "black";
  
q2a2.disabled = false;
q2a2.style.backgroundColor = "#eee3ab";
q2a2.style.color = "black";
  
q3a1.disabled = false;
q3a1.style.backgroundColor = "#eee3ab";
q3a1.style.color = "black";
  
q3a2.disabled = false;
q3a2.style.backgroundColor = "#eee3ab";
q3a2.style.color = "black";
  
console.log("All the questions have been enabled")
}
