 /* Project 4 - OOP Game App
 * app.js */

 var gam = new Game();
//starts game when start button is press
 ($("#btn__reset")).on("click",function(e){
     gam.startGame()

 })
//run handle interaction on key click
 $(".key").on("click",function(e){
     gam.handleInteraction($(e.target).text(),$(e.target))
 })

//runs handle interaction on key press
 $("body").keyup(function(e){
     if(gam.started){
     gam.handleInteraction(e.key,$(`.key:contains('${e.key}')`))
     }
 })