/* const phaseOne = document.querySelector("#phaseOne");
const phaseTwo = document.querySelector("#phaseTwo");
const phaseThree = document.querySelector("#phaseThree");
const phaseFour = document.querySelector("#phaseFour"); */
const button0 = document.querySelector(".button0");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");

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

const thirdStep = () => {
    document.querySelector("#phaseOne").style.visibility = "hidden";
    document.querySelector("#phaseTwo").style.visibility = "hidden";
    document.querySelector("#phaseThree").style.visibility = "hidden";
    document.querySelector("#phaseFour").style.visibility = "visible";
};

button2.addEventListener("click", thirdStep);

const fourthStep = () => {
    document.querySelector("#phaseOne").style.visibility = "visible";
    document.querySelector("#phaseTwo").style.visibility = "hidden";
    document.querySelector("#phaseThree").style.visibility = "hidden";
    document.querySelector("#phaseFour").style.visibility = "hidden";
};

button3.addEventListener("click", fourthStep);