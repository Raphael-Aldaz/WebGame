const elt = document.querySelector(".image__toClick");


const result = document.querySelector('h1')
let i = 0;

elt.addEventListener("click", event => {
    i +=1
    result.className = "test";
});

