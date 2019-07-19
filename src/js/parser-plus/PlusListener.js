// Generated from Plus.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by PlusParser.
function PlusListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

PlusListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PlusListener.prototype.constructor = PlusListener;

// Enter a parse tree produced by PlusParser#plus.
PlusListener.prototype.enterPlus = function(ctx) {
};

// Exit a parse tree produced by PlusParser#plus.
PlusListener.prototype.exitPlus = function(ctx) {
};


// Enter a parse tree produced by PlusParser#ligne.
PlusListener.prototype.enterLigne = function(ctx) {
};

// Exit a parse tree produced by PlusParser#ligne.
PlusListener.prototype.exitLigne = function(ctx) {
};


// Enter a parse tree produced by PlusParser#affectation.
PlusListener.prototype.enterAffectation = function(ctx) {
};

// Exit a parse tree produced by PlusParser#affectation.
PlusListener.prototype.exitAffectation = function(ctx) {
};


// Enter a parse tree produced by PlusParser#addition.
PlusListener.prototype.enterAddition = function(ctx) {
};

// Exit a parse tree produced by PlusParser#addition.
PlusListener.prototype.exitAddition = function(ctx) {
};



exports.PlusListener = PlusListener;