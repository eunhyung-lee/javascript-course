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
const subTitle = document.querySelector(".hello:last-of-type");
function handleMouseEnter(){
    title.style.color = "blue"
    title.innerText = "mouse enter"
}
function handleMouseLeave(){
    title.innerText = "mouse leave"
}
function handleTitleClick(){
    subTitle.innerText = "graped"
}

console.dir(subTitle)
title.addEventListener("mouseenter", handleMouseEnter)
title.addEventListener("mouseleave", handleMouseLeave)
subTitle.addEventListener("click", handleTitleClick)