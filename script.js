//your code here
let evaluatedText = document.getElementById("evaluatedText");
let letterCount = document.getElementById("letterCount");

//add a eventListener at input box
evaluatedText.addEventListener("input",calculateLength);

function calculateLength() {
    // console.log("someone wrote something");

    //to get the word from the input box 

    let word = evaluatedText.value;
    let length = word.length;
    letterCount.innerText = length;
}