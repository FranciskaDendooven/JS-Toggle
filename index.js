const button0 = document.querySelector(".button0");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const inputName = document.querySelector("#name");
const displayName = document.querySelector("#displayName");
const yesNo = document.querySelector("#coffeeYesNo");
let img = document.querySelector("img");

window.onload = () =>{
document.querySelector("#phaseOne").style.visibility = "visible";
document.querySelector("#phaseTwo").style.visibility = "hidden";
document.querySelector("#phaseThree").style.visibility = "hidden";
document.querySelector("#phaseFour").style.visibility = "hidden";
};

const firstStep = () => {
    document.querySelector("#phaseOne").style.visibility = "hidden";
    document.querySelector("#phaseTwo").style.visibility = "visible";
    document.querySelector("#phaseThree").style.visibility = "hidden";
    document.querySelector("#phaseFour").style.visibility = "hidden";
};

button0.addEventListener("click", firstStep);

const secondStep = () => {
    document.querySelector("#phaseOne").style.visibility = "hidden";
    document.querySelector("#phaseTwo").style.visibility = "hidden";
    document.querySelector("#phaseThree").style.visibility = "visible";
    document.querySelector("#phaseFour").style.visibility = "hidden";
};

button1.addEventListener("click", secondStep);
button1.addEventListener("click", () => {
displayName.innerText = "Hi, " + inputName.value;
});

const thirdStep = () => {
    document.querySelector("#phaseOne").style.visibility = "hidden";
    document.querySelector("#phaseTwo").style.visibility = "hidden";
    document.querySelector("#phaseThree").style.visibility = "hidden";
    document.querySelector("#phaseFour").style.visibility = "visible";
};
const displayImg = () => {
    let value = yesNo.value;
    console.log(value);
    
    if (value === "true"){
        img.src = "img/coffee.jpg";
    }
    else{
        img.src = "img/tea.jpg";
    }
};

button2.addEventListener("click", thirdStep);
button2.addEventListener("click", displayImg);

const fourthStep = () => {
    document.querySelector("#phaseOne").style.visibility = "visible";
    document.querySelector("#phaseTwo").style.visibility = "hidden";
    document.querySelector("#phaseThree").style.visibility = "hidden";
    document.querySelector("#phaseFour").style.visibility = "hidden";
};

button3.addEventListener("click", fourthStep);