class Settings {
    /**
     * Class constructor
     */
    constructor() {
        this.header = document.getElementById("header");
        this.applyButton = document.getElementById("apply-changes");
        this.themeDropdown = document.getElementById("set-theme")
        this.textContainer = document.getElementsByClassName("container");
        this.backButton = document.getElementById("back-btn")

        // Attach event listener to apply button
        this.applyButton.addEventListener("click", () => this.applyChanges());
    }

    /**
     * This method will apply the changes made in the settings menu
     */
    applyChanges() {
        // Default theme is light
        if (this.themeDropdown.value === "light") {
            this.lightTheme();
        } else if (this.themeDropdown.value === "dark") {
            this.darkTheme();
        } else if (this.themeDropdown.value === "high-contrast") {
            this.highContrast();
        }

        console.log("Changes applied")
    }
    /**
     * light theme settings
     */
    lightTheme() {
        this.resetStyles();
        document.body.style.backgroundColor = "aliceblue";
        this.textContainer[0].style.backgroundColor = "#fff";
        document.body.style.color = "#333";
        this.header.style.color = "#333";
    }

    /**
     * Dark theme settings
     */
    darkTheme() {
        this.resetStyles();
        document.body.style.backgroundColor = "#5d5d65";
        this.textContainer[0].style.backgroundColor = "#323236";
        document.body.style.color = "#fff";
        this.header.style.color = "#fff";
    }

    /**
     * High contrast theme settings
     */
    highContrast() {
        this.resetStyles();
        document.body.style.backgroundColor = "black";
        this.textContainer[0].style.backgroundColor = "black";
        document.body.style.color = "yellow";
        this.header.style.color = "yellow";
        this.textContainer[0].style.border = "white";
        this.textContainer[0].style.borderStyle = "solid";
        this.applyButton.style.backgroundColor = "green";
        this.backButton.style.color = "yellow";
        this.backButton.style.backgroundColor = "black";
        this.backButton.style.border = "white";
        this.backButton.style.borderStyle = "solid";
        this.themeDropdown.style.backgroundColor = "black";
        this.themeDropdown.style.color = "yellow";

        // Event listen for hover over back button
        this.addHoverEventsHighContrast();
       
    }

    /**
     * High contrast mouse over event
     */
    highContrastHover() {
            this.backButton.style.backgroundColor = "yellow";
            this.backButton.style.color = "black"; 
        }
    
    /**
     * High contrast mouse out event
     */
    highContrastOut() {
            this.backButton.style.color = "yellow";
            this.backButton.style.backgroundColor = "black";
            this.backButton.style.border = "white";
            this.backButton.style.borderStyle = "solid";
        }
    
    /**
     * Add hover events for high contrast theme
     */
    addHoverEventsHighContrast(){
        this.backButton.addEventListener("mouseover", function() { 
            this.backButton.style.backgroundColor = "yellow";
            this.backButton.style.color = "black";        
        });
        this.backButton.addEventListener("mouseout", this.highContrastOut);
        console.log("High contrast hover events added.")
    }

    /**
     * Remove hover events for high contrast theme
     */
    removeHoverEventsHighContrast(){
        this.backButton.removeEventListener("mouseover", this.highContrastHover);
        this.backButton.removeEventListener("mouseout", this.highContrastOut);
        console.log("High contrast hover events removed")
    }
    

    /**
     * Reset inline styles to default
     */
    resetStyles() {
        // Array of elements to reset
        var pageElements = [this.applyButton, this.textContainer[0], 
            this.header, this.backButton, this.themeDropdown];
            
        // Loop through array and reset styles
        for  (let i = 0; i < pageElements.length; i++) {
            pageElements[i].removeAttribute("style");
            console.log(`${pageElements[i]} reset to default`)
        }

        // Remove hover events
        this.removeHoverEventsHighContrast();

    }
}


new Settings();