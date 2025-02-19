import PigLatin from './pigLatin.js';


class ButtonFunctions {
    /**
     * Initialize button functions class by defining html elements
     */
    constructor() {
        // HTML elements found in main content
        this.textBox = document.getElementById("text-box");
        this.translateButton = document.getElementById("translate-button");
        this.copyButton = document.getElementById("copy-button");
        this.clearButton = document.getElementById("clear-button");

        // HTML elements found in settings menu
        this.settingsButtonClosed = document.getElementById("settings-btn-menu-closed");
        this.settingsMenu = document.getElementById("settings-menu");
        this.settingsButtonOpen = document.getElementById("settings-btn-menu-open");

        // Attach event listeners within the constructor to ensure this context is correct
        this.translateButton.addEventListener("click", () => this.translateText());
        this.clearButton.addEventListener("click", () => this.clearTextArea());
        this.settingsButtonClosed.addEventListener("click", () => this.openSettingsMenu());
        this.settingsButtonOpen.addEventListener("click", () => this.closeSettingsMenu());
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
    
    /**
     * Opens the settings menu when the settings button is clicked
     */
    openSettingsMenu(){
        console.log("Settings menu opened");
        this.settingsMenu.style.visibility = "visible";
        this.settingsMenu.style.opacity = "1";

    }
    /**
     * Closes the settings menu when the close button is clicked
     */
    closeSettingsMenu(){
        console.log("settings menu closed");
        this.settingsMenu.style.visibility = "hidden";
        this.settingsMenu.style.opacity = "0";
    }

}

const buttonFunctions = new ButtonFunctions();

