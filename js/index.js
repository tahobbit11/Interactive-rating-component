// 1-5 buttons
const button1 = document.querySelector("#button-1");
const button2 = document.querySelector("#button-2");
const button3 = document.querySelector("#button-3");
const button4 = document.querySelector("#button-4");
const button5 = document.querySelector("#button-5");
// Submit button
const submitButton = document.querySelector(".submit-button button");
//console.log(submitButton);
// Sections
const thanks = document.querySelector(".thanks-wrapper");
const rating = document.querySelector(".rating-wrapper");
// number output
const output = document.querySelector(".number-output");

//Need a listener for when submit button is pressed. Needs to make sure there is a 1-5 button press first before submitting
//Need a function for when a button is pressed is stays pressed instead of fading away.
//Need a function to take the number value pressed and output it in the thanks-wrapper section
//Need a function to hide the first section and show the second section

const buttonInput = (value) => {
    console.log(value);
    if(value === 1){
        output.innerText = "1";
        return true;
    } else if(value === 2){
        output.innerText = "2";
        return true;
    } else if(value === 3){
        output.innerText = "3";
        return true;
    } else if (value === 4){
        output.innerText = "4";
        return true;
    } else if (value === 5){
        output.innerText = "5";
        return true;
    } else {
        return false;
    }
};

button1.addEventListener("click", e => {
    let value = Number(1);
    buttonInput(value);
});

button2.addEventListener("click", e => {
    let value = Number(2);
    buttonInput(value);
});

button3.addEventListener("click", e => {
    let value = Number(3);
    buttonInput(value);
});

button4.addEventListener("click", e => {
    let value = Number(4);
    buttonInput(value);
});

button5.addEventListener("click", e => {
    let value = Number(5);
    buttonInput(value);
});

submitButton.addEventListener("click", e => {
    console.log(e);
    rating.classList.add("hide");
    thanks.classList.remove("hide");
});