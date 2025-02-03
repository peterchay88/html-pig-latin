import PigLatin from './pigLatin.js';
console.log(PigLatin)

// Define html elements
const textBox = document.getElementById("text-box");
const translateButton = document.getElementById("translate-button");
const copyButton = document.getElementById("copy-button");
const clearButton = document.getElementById("clear-button");
const pigLatin = new PigLatin("Hello");

console.log("Hello world!!!!!")

function translateText(){ 
    // Make the text box read only and assign text to a variable
    const text = textBox.value;
    textBox.setAttribute("readonly", true);

    // Hide translate button and show copy button
    copyButton.style.display = "inline";
    translateButton.style.display = "none";
    
}

function clearTextArea(){
    // Reset text area 
    textBox.value = "";
    textBox.removeAttribute("readonly");

    // Hide copy button and show translate button
    copyButton.style.display = "none";
    translateButton.style.display = "inline";

    // Test change button color for debugging
    clearButton.style.backgroundColor = "red";

}

// Add event listeners to make functions global
translateButton.addEventListener("click", translateText);
clearButton.addEventListener("click", clearTextArea);

