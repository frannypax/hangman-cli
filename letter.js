var letter = function(fruitLetter){

	this.character = fruitLetter;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "|" : this.character;
	};
};

//export the constructor
module.exports = letter;