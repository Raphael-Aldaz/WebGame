const element = document.querySelector(".image__toClick");
const result = document.querySelector('.resultValue');
const bonus1 = document.querySelector('.bonus_un');
const bonus2 = document.querySelector('.bonus2')
let score = 0;
let valeur =1;





function increaseScore(){
    score += valeur;
    result.textContent = Math.round(score);
    
}

function multiple(){
    score *= 1.2;
    result.textContent = Math.round(score);
}

function multiple2(){
    valeur += 1
    setTimeout(valueVanilla, 10000);
}
function valueVanilla(){
    valeur -= 1;
}

function changePicture(){
    if(score === 20){
    element.src="./assets/Capture2.JPG"
    }
}

//window.setInterval(increaseScore, 5000);
element.addEventListener("click",increaseScore);
//element.addEventListener("click", changePicture)
/*bonus1.addEventListener("click", multiple);*/
bonus2.addEventListener("click", multiple2);