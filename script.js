const element = document.querySelector(".image__toClick");
const result = document.querySelector('.resultValue');
const bonusSection = document.querySelector(".bonus__section__disabled");
var score = 0;
let clickValue = 1;

function increaseScore(){
    score += clickValue;
    result.textContent = score;
    showBonus();
}


window.setInterval(increaseScore, 5000);
element.addEventListener("click",increaseScore);