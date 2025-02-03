import PigLatin from './pigLatin.js';


class ButtonFunctions {
    /**
     * Initialize button functions class by defining html elements
     */
    constructor() {
        this.textBox = document.getElementById("text-box");
        this.translateButton = document.getElementById("translate-button");
        this.copyButton = document.getElementById("copy-button");
        this.clearButton = document.getElementById("clear-button");

        // Attach event listeners within the constructor to ensure this context is correct
        this.translateButton.addEventListener("click", () => this.translateText());
        this.clearButton.addEventListener("click", () => this.clearTextArea());
    }

    /**
     * When this method is called it will pass along the value in the text box
     * to the PigLatin class to translate it. The translated text will appear in
     * the text box .Translate button will turn into copy button
     */
    translateText(){ 
        // Make the text box read only and assign text to a variable
        const textToBeTranslated = new PigLatin(this.textBox.value);
        this.textBox.setAttribute("readonly", true);

        console.log(textToBeTranslated.translate());
        this.textBox.value = textToBeTranslated.translate();
    
        // Hide translate button and show copy button
        this.copyButton.style.display = "inline";
        this.translateButton.style.display = "none";   
    }

    /**
     * Clears the value in the text area and turns the copy button back
     * into the translate button.
     */
    clearTextArea(){
        // Reset text area 
        this.textBox.value = "";
        this.textBox.removeAttribute("readonly");
    
        // Hide copy button and show translate button
        this.copyButton.style.display = "none";
        this.translateButton.style.display = "inline";
    }

    /**
     * Copies the text in the text area to the users clip board
     */
    copyText(){
        
    }

}

const buttonFunctions = new ButtonFunctions();

