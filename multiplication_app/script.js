const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;
}
let cnt = JSON.parse(localStorage.getItem("cnt"));
if(!cnt){
    cnt = 0;
}
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const submitBtn = document.getElementById("btn");
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
scoreEl.innerText = `Score: ${score}`;

const ans = num1 * num2;
if (isNaN(inputEl.value)){
    submitBtn.disabled=true;
}else {
    submitBtn.disabled=false;
}

formEl.addEventListener("submit",()=>{
    const userInput = +inputEl.value;

    if (isNaN(userInput)){
        alert('Please enter valid value!');
    }

    if (userInput === ans){
        score++;
        update();
    }else{
        score--;
        update();
    }
    cnt++;
    update()
    if (cnt === 5){
        alert('Final Score:'+score);
        score = 0;
        cnt = 0;
        update();
    }
});

function update(){
    localStorage.setItem("score",JSON.stringify(score));
    localStorage.setItem("cnt",JSON.stringify(cnt));
}
