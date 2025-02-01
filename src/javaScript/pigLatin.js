class PigLatin {
    /**
     * Creates a new Pig latin instance
     * @param {String} sentence - English sentence to be translated
     **/
    constructor(sentence) {
        this.sentence = sentence;
        this.vowels = ['a', 'e', 'i', 'o', 'u'];
    }

    /**
     * This method takes in the sentence and returns an array of words.
     * 
     * @returns {sentenceArray} - Returned array for words to be translated.
     */
    splitSentence() {
        const sentenceArray = this.sentence.split(" ");
        return sentenceArray;
    }

    /**
     * This method takes in the returned array from splitSentence and determines how the word 
     * Should be translated based on its properties.
     * 
     * Example: 
     * If a word starts with a vowel.. Do something
     * If a word starts with two consonants.. Do something
     * if a word stats with a consonant and the second letter is a vowel.. Do something
     */
    translate(){}

    /**
     * This method takes in words that start with two consonants and returns the pig latin
     * translation of that word.
     */
    doubleConsonant(){}

    /**
     * This method takes in words that start with a consonant and a vowel and returns the
     * pig latin translation of that word.
     */
    consonant(){}

    /**
     * This method takes in words that start with a vowel and returns the pig latin
     * translation of that word
     */
    vowel(){}
}