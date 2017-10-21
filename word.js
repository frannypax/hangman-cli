//importing letter.js which holds the letter constructor
var letter = require('./letter.js');

function Word(fruitName) {
	this.fruitName = fruitName;
	this.letters = []; //This will be filled with the guesses
	this.found = false;  //

	this.getLetter = function() {
		for (var i=0; i < this.fruitName.length; i++) {
			this.letters.push( new letter(this.fruitName[i]));
		}
	};

	this.findWord = function() {
		this.found = this.letters.every(function(currLett) {
			return currLett.appear;
		});
		return this.found;
	};

	this.checkLetter = function(guessLet) {
		var toReturn = 0;

		for (var i = 0; i < this.letters.length; i++) {
			if (this.letters[i].character == guessLet){
				this.letters[i].appear = true;
				toReturn++;
			}
		}
		return toReturn;
	};

	this.wordRender = function() {
		var string = '';
		for (var i=0; i < this.letters.length; i++){
			string += this.letters[i].letterRender();
		}
		return string;
	};

}

module.exports = Word;
