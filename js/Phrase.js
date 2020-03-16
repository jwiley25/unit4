/* Project 4 - OOP Game App
 * Phrase.js */
/**
 *
 *
 * @class Phrase-Phrase class for storing phrases and adding them to display
 */
class Phrase{
    /**
     *Creates an instance of Phrase.
     * @param {string} phrase-string which phrase porperty will be set to
     * @memberof Phrase
     */
    constructor(phrase){
        this.phrase = phrase.toLowerCase()

    }
    /**
     * Takes phrase string and displays it to the screen
     *
     * @memberof Phrase
     */
    addPhraseToDisplay(){
        var $list = $("#phrase").children("ul");
        
        for (let char of this.phrase) {
            if(char != " "){
            let $letter = ($(document.createElement("li"))).addClass(`hide letter ${char}`).text(char)
            $list.append($letter)
            }
            else{
                let $letter = $(document.createElement("li")).addClass("space").text(" ")
                $list.append($letter)
            }
        }
    }

    /**
     *  Checks if letter is found in Phrase 
     *
     * @param {string} letter-letter to be checked in the phrase
     * @returns {boolean} - true if letter is in phrase if not false
     * @memberof Phrase
     */
    checkLetter(letter){
        if(this.phrase.indexOf(letter)!=-1){
            return true
        }
        return false
    }

    /**
     *
     *  Shows letter that is matched on the hangman screen
     * @param {string} letter- letter you would like to be shown
     * @memberof Phrase
     */
    showMatchedLetter(letter){
        $(`.${letter}`).removeClass("hide").addClass("show")
        
    }
}