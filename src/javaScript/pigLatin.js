class PigLatin {
    /**
     * Creates a new Pig latin instance
     * @param {String} sentence - English sentence to be translated
     **/
    constructor(sentence) {
        this.sentence = sentence;
        this.vowels = ['a', 'e', 'i', 'o', 'u'];
        this.suffix = "ay";
        this.translatedSentenceArray = [];
    }

    /**
     * This method takes in the sentence and returns an array of words.
     * 
     * @returns {sentenceArray} - Returned array for words to be translated.
     */
    splitSentence() {
        const sentenceArray = this.sentence.split(" ");
        for (let i = 0; i < sentenceArray.length; i++) {
            this.translate(sentenceArray[i]);
        }
    }

    /**
     * This method takes in a word argument and passes along to the appropriate translation
     * method defined in this class. Then append translated word to the class argument
     * translatedSentence
     * 
     * Example: 
     * If a word starts with a vowel.. firstVowel()
     * If a word starts with two consonants.. doubleConsonant()
     * if a word stats with a consonant and the second letter is a vowel.. singleConsonant()
     * 
     * @param {string} word - Word to be translated. 
     */
    translate(word){
        if (this.vowels.includes(word[0]) === true) { // If the first letter is a vowel
            let translatedWord = this.firstVowel(word);
        } 

        if (this.vowels.includes(word[0]) === false) { // if the first letter is not a vowel
            if (this.vowels.includes(word[1]) === true) { // if the second letter is a vowel
                let translatedWord = this.singleConsonant(word);
            } else { // if the second letter is not a vowel
                let translatedWord = this.doubleConsonant(word);
            }
        }

        this.translatedSentenceArray.push(translatedWord);
        return this.combineWords();
        
    }

    /**
     * This method takes in words that start with two consonants and returns the pig latin
     * translation of that word.
     * 
     * Pig latin rule - If a word starts with two consonants then place the first two letters
     * of the word at the end and append "ay"
     * 
     * @param {string} word - Word to be translated.
     * @returns {string} Translated word.
     */
    doubleConsonant(word){
        let secondHalf = word.slice(2);
        let firstHalf = word.slice(0, 2);
        return secondHalf + firstHalf + this.suffix;
    }

    /**
     * This method takes in words that start with a consonant and a vowel and returns the
     * pig latin translation of that word.
     * 
     * @param {string} word - Word to be translated.
     * @returns {string} Translated word.
     */
    singleConsonant(word){
        let secondHalf = word.slice(1);
        let firstHalf = word.slice(0, 1);
        return secondHalf + firstHalf + this.suffix;
    }

    /**
     * This method takes in words that start with a vowel and returns the pig latin
     * translation of that word
     * 
     * @param {string} word - Word to be translated.
     * @returns {string} Translated word.
     */
    firstVowel(word){
        return word + this.suffix;
    }

    /**
     * This method takes the array defined in translatedSentence and combines it
     * into a text string
     * 
     * @returns {string} Translated sentence
     */
    combineWords() {
        let translatedSentence = "";
        for (let i = 0; i < this.translatedSentenceArray.length; i++) {
            translatedSentence = translatedSentence.concat(this.translatedSentenceArray[i], " ");
        }

        return translatedSentence.trim() // remove trailing spaces and return it
    }
}