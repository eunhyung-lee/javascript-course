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


// const title = document.querySelector("div h1");
// const subTitle = document.querySelector(".hello:last-of-type");
// function handleMouseEnter(){
//     title.style.color = "blue"
//     title.innerText = "mouse enter"
// }
// function handleMouseLeave(){
//     title.innerText = "mouse leave"
// }
// function handleTitleClick(){
//     console.log(subTitle.style.color)
//     subTitle.style.color = "blue"
//     console.log(subTitle.style.color)
// }
// function handleWindowResize(){
//     document.body.style.backgroundColor = "wheat"
// }
// function handleWindwCopy(){
//     alert("copy")
// }
// function handleWindowOffline(){
//     alert ("WIFI Disconnected")
// }
// function handleWindowOnline(){
//     alert("WIFI Connected")
// }

// console.dir(subTitle)
// title.addEventListener("mouseenter", handleMouseEnter)
// title.addEventListener("mouseleave", handleMouseLeave)
// subTitle.addEventListener("click", handleTitleClick)
// subTitle.onclick = handleTitleClick
// window.addEventListener("resize", handleWindowResize)
// window.addEventListener("copy", handleWindwCopy)
// window.addEventListener("online",handleWindowOnline)
// window.addEventListener("offline",handleWindowOffline)

// const title = document.querySelector("div h1");
// const subTitle = document.querySelector(".hello:last-of-type");
// function handleTitleClick(){
//     const currentColor = title.style.color;
//     let newColor;
    
//     if (currentColor === "blue"){
//         newColor = "tomato"
//     }
//     else{
//         newColor = "blue"
//     }
//     title.style.color = newColor
// }

// title.addEventListener("click", handleTitleClick)

const title = document.querySelector("div h1");
const subTitle = document.querySelector(".hello:last-of-type");
function handleTitleClick(){
    const clickedClass = "clicked"
    // if(title.classList.contains(clickedClass)){
    //     title.classList.remove(clickedClass) ;
    // } else{
    //     title.classList.add(clickedClass)
    // }

    title.classList.toggle("clicked")
}

title.addEventListener("click", handleTitleClick)