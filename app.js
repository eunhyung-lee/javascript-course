// const age = parseInt(prompt("How old are you?"))

// if (isNaN(age)) {
//     console.log('please input a number')
// } else if (age < 18){
//     console.log("you are too young")
// } else if (age >=18 && age <=50){
//     console.log("you can drink")
// } else{
//     console.log("you should stop drinking")
// }
// const title = document.getElementById("title");

// console.dir(title);
// title.innerText = "Got you!"
const title = document.querySelector("div h1");
let n = 0;
function handleTitleClick(){
    n = n+1;
    console.log(n);
    if(n%2){
        console.log("1");
        title.style.color = "blue";
    }
    else{
        console.log("0");
        title.style.color="black";  
    }
}
title.addEventListener("click",handleTitleClick);