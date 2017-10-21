var letter = function(fruitLetter){
	this.charac = fruitLetter;
	this.appear = false;
	this.letterRender = function(){
		return !(this.appear) ? "_" : this.charac;
	};
};

//export the constructor
module.exports = letter;