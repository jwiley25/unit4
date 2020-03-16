/* Project 4 - OOP Game App
 * Game.js */
class Game{

    /**
     *Creates an instance of Game.
     * @memberof Game
     */
    constructor(){
        $("#result").hide()
        this.ActivePhrase;
        this.missed = 0;
        this.phrases = ["fourth of july","jacob baer","advanced topics in computer science","onomatopoeia","yash rajani"]
        this.started = false
    }

    /**
     *  hides start overlay, sets active phrase and adds phrase to display
     *
     * @memberof Game
     */
    startGame(){
        $("#overlay").hide()
        this.ActivePhrase = new Phrase(this.getRandomPhrase());
        this.started = true;
        this.ActivePhrase.addPhraseToDisplay();
    }

    /**
     *
     *
     * @returns {string}- random String from phrases array
     * @memberof Game
     */
     getRandomPhrase(){
        var index = Math.floor(Math.random()*(4))
        return this.phrases[index]
    }

    /**
     *  Game Logic of the Game- called after each user action
     * Adds letters if correct, removes lives if incorrect, checks for wins on correct letters
     *
     * @param {string} letter- the letter of the key that was pressed
     * @param {JQuery} key- contains key button
     * @memberof Game
     */
    handleInteraction(letter,key){
    
            $(key).prop("disabled",true);
            if(this.ActivePhrase.checkLetter(letter)){
                this.ActivePhrase.showMatchedLetter(letter)
            
                key.addClass("chosen");
                
                if(this.checkForWin()){
                    this.gameOver();
                };
                $("#result").attr("src","goodjob.gif").fadeIn().delay(800).fadeOut()
                let audioElement = document.createElement('audio');
                audioElement.setAttribute('src', "Hey that's pretty good sound effect.mp3");
                audioElement.play()
            }
            else{
                $("#result").attr("src","wrong.gif").fadeIn().delay(800).fadeOut()
                let audioElement = document.createElement('audio');
                audioElement.setAttribute('src', "Womp womp womp.mp3");
                audioElement.play()
                key.addClass("wrong");
                
                this.removeLife()
            }

        
    }

    /**
     * Removes A player life
     *  Adds and additional missed point checking to see if the game is over
     * changes a live heart to a dead heart
     * @memberof Game
     */
    removeLife(){
        let flag = false
        $(".tries").each( function(i,item){
    
            if($(item).children("img").attr("src") == "images/liveHeart.png" && flag==false){
                $(item).children("img").attr("src","images/lostHeart.png")
                flag =true;
            }
        }

        );
        this.missed +=1
        if (this.missed>4){
            this.gameOver();
        }
    }
    /**
     *
     *
     * @returns {boolean}- boolean based on winstate of the game
     * @memberof Game
     */
    checkForWin(){
        let hidden = $(".hide")
        if(hidden.length ==0){
            return true;
        }
        return false;
    }


    /**
     * Brings user to start of game with game reset displaying win message
     *
     * @memberof Game
     */
    gameOver(){
        if(this.checkForWin()){
            $("#overlay").show();
            $("#overlay").removeClass("start").removeClass("lose")
            $("#overlay").addClass("win")
            $("#overlay").children("h1").text("Nice Job You Won!")
        }
        else{
            $("#overlay").show();
            $("#overlay").removeClass("start").removeClass("win")
            $("#overlay").addClass("lose")
            $("#overlay").children("h1").text("You lost, Try Again!")
        }
        this.resetGame()
    }

    /**
     * Starts game over with a new phrase
     *
     * @memberof Game
     */
    resetGame(){
        $(".key").removeClass("chosen").removeClass("wrong").prop("disabled",false);
        $("#phrase").children("ul").empty()
        this.missed = 0;
        $(".tries").each( function(i,item){
    
            $(item).children("img").attr("src","images/liveHeart.png")
                
        })
        this.started = false;
    }







}