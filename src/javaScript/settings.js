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
        this.applyButton.style.backgroundColor = "purple";
    }

    /**
     * Reset inline styles to default
     */
    resetStyles() {
        var pageElements = [this.applyButton, this.textContainer[0], this.header, 
                            this.backButton, this.themeDropdown];
        for  (let i = 0; i < pageElements.length; i++) {
            pageElements[i].removeAttribute("style");
            console.log(`${pageElements[i]} reset to default`)
        }

    }
}


new Settings();