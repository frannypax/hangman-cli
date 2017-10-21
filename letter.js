var letter = function(fruitLetter){

	this.character = fruitLetter;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.character;
	}
};

module.exports = letter;