const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
let score = JSON.parse(localStorage.getItem("score"));
let cnt = JSON.parse(localStorage.getItem("cnt"));
if(!score){
    score = 0;
    cnt = 0;
}

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const submitBtn = document.getElementById("btn");
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;
scoreEl.innerText = `Score: ${score}`;
console.log('input is ' + inputEl.value);
const ans = num1 * num2;
submitBtn.disabled=true;
formEl.addEventListener("input",()=>{
    if (inputEl.value !== ''){
        submitBtn.disabled=false;
    }
})
formEl.addEventListener("submit",()=>{
    const userInput = +inputEl.value;

    if (isNaN(userInput)|| inputEl.value === ''){
        alert('Please enter valid value!');
        localStorage.clear();
        score = 0;
        cnt = 0;
        update();
    }else{
        if (userInput === ans){
            score++;
            update();
        }else{
            score--;
            update();
        }
        
        if(score < 0){
            alert('Game Over !!!');
            localStorage.clear();
            score = 0;
            cnt = 0;
            update();
        }
        cnt++;
        update()
        if (cnt === 5){
            alert('Final Score:'+score);
            localStorage.clear();
            score = 0;
            cnt = 0;
            update();
        }
    }

    

});

function update(){
    localStorage.setItem("score",JSON.stringify(score));
    localStorage.setItem("cnt",JSON.stringify(cnt));
}
