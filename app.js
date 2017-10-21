//controller file
//

//importing word file (containing word constructor) and prompt package
var Word = require('./word.js');
//var inquirer = require('inquirer');
//var letter = require('./letter.js')
var prompt = require('prompt');


//Displays on application start
console.log("This is the Hangman Game!");
console.log("You will guess the letters of a Random word.");
console.log("The word is chosen from a list of Fruit names.")
console.log("..............................................");
prompt.start();



var game = { 
 	fruitArray: ["orange", "peach","mango"],
 	guessesRemaining: 10,
 	randomWord:null,
 	
 	play: function () {
 		this.resetGuesses();
 		this.randomWord = new Word(this.fruitArray[Math.floor(Math.random() * this.fruitArray.length)]);
 		this.randomWord.getLetter();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		//var guessesSoFar = [];

 		prompt.get(['Guess Letter'], function(error, result){
 			//console.log(result.guessLetter);
 			var lettersGuessed = self.randomWord.checkLetter(result.guessLetter); 


 			if(lettersGuessed == 0) {
 				console.log("Wrong ... Try Again");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("Correct ...");
 					if(self.randomWord.findWord()){
 						console.log("You won! \nThe fruit is " + self.randomWord.wordRender());
 						return;
 					}
 			}
 			//console.log("Guesses So Far:", guessesSoFar );
 			console.log(self.guessesRemaining + " " + "Guesses Remaining \n");
 	
 			if((self.guessesRemaining > 0) && (self.randomWord.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining < 1){
 				console.log("Game over!!! The Correct fruit is: " + self.randomWord.fruitName);
 			} else {
 				console.log(self.randomWord.wordRender());
 			}
 		});

 	}


};

game.play();
