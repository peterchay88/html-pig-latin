// Define html elements
const textBox = document.getElementById("text-box");
const translateButton = document.getElementById("translate-button");
const copyButton = document.getElementById("copy-button")

function translateText(){ 
    // Make the text box read only and assign text to a variable
    const text = textBox.value;
    textBox.setAttribute("readonly", true)

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
}

// function copyText(){

// }
