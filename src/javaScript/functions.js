import PigLatin from './pigLatin.js';
console.log(PigLatin)

console.log("Hello world!!!!!")

class ButtonFunctions {
    /**
     * Initialize button functions class by defining html elements
     */
    constructor() {
        this.textBox = document.getElementById("text-box");
        this.translateButton = document.getElementById("translate-button");
        this.copyButton = document.getElementById("copy-button");
        this.clearButton = document.getElementById("clear-button");
        // this.pigLatin = new PigLatin("Hello");

        // Attach event listeners within the constructor to ensure this context is correct
        this.translateButton.addEventListener("click", () => this.translateText());
        this.clearButton.addEventListener("click", () => this.clearTextArea());
    }

    /**
     * Translate method TODO add documentation
     */
    translateText(){ 
        // Make the text box read only and assign text to a variable
        const text = this.textBox.value;
        this.textBox.setAttribute("readonly", true);

        console.log(text)
    
        // Hide translate button and show copy button
        this.copyButton.style.display = "inline";
        this.translateButton.style.display = "none";   
    }

    /**
     * clear method TODO add documentation
     */
    clearTextArea(){
        // Reset text area 
        this.textBox.value = "";
        this.textBox.removeAttribute("readonly");
    
        // Hide copy button and show translate button
        this.copyButton.style.display = "none";
        this.translateButton.style.display = "inline";
    
        // Test change button color for debugging
        this.clearButton.style.backgroundColor = "red";
    }

}

const buttonFunctions = new ButtonFunctions();

