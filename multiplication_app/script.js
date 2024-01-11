const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
scoreEl.innerText = `Score: ${score}`;

const ans = num1 * num2;

formEl.addEventListener("submit",()=>{
    const userInput = +inputEl.value;
    if (userInput === ans){
        score++;
        update();
    }else{
        score--;
        update();
    }
});

function update(){
    localStorage.setItem("score",JSON.stringify(score));
}
