const body = document.body;
const button = document.getElementById('button');
const question = document.getElementById('question');
const answer = document.getElementById('answer');

img.onclick = function () {
    body.classList.toggle('body-active');
    question.classList.toggle('text__question-active');
    button.classList.toggle('button-active');
    answer.classList.toggle('text__answer-active');
}

button.onclick = function (e) { 
    let ripple = document.createElement("span");  
    let offset = this.getBoundingClientRect();
    let x = e.clientX - offset.left; 
    let y = e.clientY - offset.top; 
    ripple.style.left = `${x}px`; 
    ripple.style.top = `${y}px`; 
    this.appendChild(ripple); 
    setTimeout(() => { 
        ripple.remove(); 
    }, 1000); 
}