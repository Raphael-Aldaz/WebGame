const element = document.querySelector(".image__toClick");
const result = document.querySelector('.resultValue');

let score =0 ;
let timer = null;
let interval;
let valeur =1;
let a = false;

const rules = [
    {id :1 ,price : 100, rule:"Click X2"},
    {id : 2,price:200, rule:"+242"},
    {id : 3,price: 300, rule:"+2 cliks/5s" },
    {id : 4,price: 400, rule:"Click +10 pendant 10sec"},
    {id : 5,price: 1000, rule:"+5 clicks/3s"},
]
rules.map((bonusItem) => {
    const bonus = document.createElement("p");
    const price = document.createElement("h2");
    const card = document.getElementById(bonusItem.price);
    const bonusContent =document.createTextNode(bonusItem.rule);
    const priceContent = document.createTextNode("Cout : " +bonusItem.price+" clicks");
    bonus.appendChild(bonusContent);
    price.appendChild(priceContent);
    card.appendChild(price)
    card.appendChild(bonus);
})
function getClassName(value){
    const a = document.getElementById(value).className;
    return a
}
function enable(value){
    if( score > value){
        if(getClassName(value) === "card bonus_one"){
            multiple()
            score -= value;
            changePicture();
            console.log(score)
        } else if(getClassName(value) === "card bonus_two"){
            moreClicks(242);
            score-=value
        } 
    }
}
function increaseScore(){
    score += valeur;
    result.textContent = Math.round(score);
    changePicture();
}
function multiple(){
    valeur *= 2;
    result.textContent = Math.round(score);
}
function changePicture(){

    if(score > 1 && score < 100){
        element.src="./assets/Capture.JPG"
    }
    if(score > 100){
        element.src="./assets/Capture2.JPG"
    } 
    if( score > 200){
        element.src="./assets/Capture3.JPG"
    } 
    if( score > 300){
        element.src="./assets/Capture4.JPG"
    } 
    if(score > 400){
        element.src="./assets/Capture5.JPG"
    } 
    if(score > 500) {
        element.src="./assets/Capture6.JPG"
    } 
    if(score > 600){
        element.src="./assets/Capture7.JPG"
    } 
    if(score > 700){
        element.src="./assets/Capture.JPG"
    } 
}
function moreClicks(value){
    score += value;
}
function autoClick(value){
    if(score > value){
        const interval = setInterval(() => {
            newScore = score += 2;
            result.textContent = Math.round(score);
        }, 5000)
        score -= value;
        changePicture();
    }
}
function bonusMaster(value){
    if(score > value){
        const interval = setInterval(() => {
            newScore = score += 5;
            result.textContent = Math.round(score);
        }, 3000)
        score -= value;
        changePicture();
    }
}
const incrementTimer = (value) =>{
    if (score > value){
        valeur += 10;
        setTimeout(() =>{
            valeur =1;
        }, 10000)
    }
}
const malus = () => {
    if( score > 0) {
        score -= 1.5
        result.textContent = Math.round(score);
    }
    if( score > 100) {
        score -= 8
        result.textContent = Math.round(score);
    }
    if(score > 200) {
        score -= 50
        result.textContent = Math.round(score);
    }
    if(score > 300) {
        score -= 70
        result.textContent = Math.round(score);
    }if( score > 400) {
        score -= 100
        result.textContent = Math.round(score);
    }
    if( score <= 0){
        element.src="./assets/gameOver.png";
        element.removeEventListener("click", increaseScore)
    }
}
function setScore(newScore){
    score = newScore;
    myFunction();
}
function myFunction(){
    interval =  setInterval(malus, 800)
}
const start = () => {
    setScore(score)
    element.addEventListener("click",increaseScore);
}