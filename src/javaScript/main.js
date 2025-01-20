// Define html elements
const textBox = document.getElementById("text-box");
const translateButton = document.getElementById("translate-button");
const copyButton = document.getElementById("copy-button")

function translateFunction(){ 
    // Make the text box read only and assign text to a variable
    const text = textBox.value;
    textBox.setAttribute("readonly", true)

    // Hide translate button and show copy button
    copyButton.style.display = "inline";
    translateButton.style.display = "none";
    
}

function clearFunction(){
    textBox.value = "";
}

// function test(){
//     const myButton = document.getElementById("my-btn");
    

//     myButton.style.width = "500px";
//     myButton.style.backgroundColor = "blue";
//     document.body.style.backgroundColor = "red";
// }