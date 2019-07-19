// Generated from Plus.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require("antlr4/index");

var serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
  "\u0002\tE\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
  "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
  "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002",
  "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
  "\u0006\u0004\u001f\n\u0004\r\u0004\u000e\u0004 \u0003\u0005\u0003\u0005",
  "\u0005\u0005%\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
  "\u0003\u0006\u0003\u0006\u0003\u0007\u0006\u0007.\n\u0007\r\u0007\u000e",
  "\u0007/\u0003\b\u0003\b\u0003\t\u0006\t5\n\t\r\t\u000e\t6\u0003\t\u0006",
  "\t:\n\t\r\t\u000e\t;\u0006\t>\n\t\r\t\u000e\t?\u0003\n\u0003\n\u0003",
  "\u000b\u0003\u000b\u0002\u0002\f\u0003\u0002\u0005\u0002\u0007\u0002",
  "\t\u0003\u000b\u0004\r\u0005\u000f\u0006\u0011\u0007\u0013\b\u0015\t",
  "\u0003\u0002\u0004\u0004\u0002C\\c|\u0003\u00022;\u0002J\u0002\t\u0003",
  "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
  "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
  "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
  "\u0002\u0002\u0002\u0003\u0017\u0003\u0002\u0002\u0002\u0005\u0019\u0003",
  '\u0002\u0002\u0002\u0007\u001e\u0003\u0002\u0002\u0002\t"\u0003\u0002',
  "\u0002\u0002\u000b&\u0003\u0002\u0002\u0002\r-\u0003\u0002\u0002\u0002",
  "\u000f1\u0003\u0002\u0002\u0002\u0011=\u0003\u0002\u0002\u0002\u0013",
  "A\u0003\u0002\u0002\u0002\u0015C\u0003\u0002\u0002\u0002\u0017\u0018",
  "\t\u0002\u0002\u0002\u0018\u0004\u0003\u0002\u0002\u0002\u0019\u001a",
  "\t\u0003\u0002\u0002\u001a\u0006\u0003\u0002\u0002\u0002\u001b\u001f",
  "\u0005\u0003\u0002\u0002\u001c\u001f\u0007a\u0002\u0002\u001d\u001f",
  "\u0005\r\u0007\u0002\u001e\u001b\u0003\u0002\u0002\u0002\u001e\u001c",
  "\u0003\u0002\u0002\u0002\u001e\u001d\u0003\u0002\u0002\u0002\u001f ",
  "\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002 !\u0003\u0002",
  '\u0002\u0002!\b\u0003\u0002\u0002\u0002"$\u0005\u0003\u0002\u0002#',
  "%\u0005\u0007\u0004\u0002$#\u0003\u0002\u0002\u0002$%\u0003\u0002\u0002",
  "\u0002%\n\u0003\u0002\u0002\u0002&'\u0007R\u0002\u0002'(\u0007T\u0002",
  "\u0002()\u0007K\u0002\u0002)*\u0007P\u0002\u0002*+\u0007V\u0002\u0002",
  "+\f\u0003\u0002\u0002\u0002,.\u0005\u0005\u0003\u0002-,\u0003\u0002",
  "\u0002\u0002./\u0003\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003",
  "\u0002\u0002\u00020\u000e\u0003\u0002\u0002\u000212\u0007\f\u0002\u0002",
  '2\u0010\u0003\u0002\u0002\u000235\u0007"\u0002\u000243\u0003\u0002',
  "\u0002\u000256\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003",
  "\u0002\u0002\u00027>\u0003\u0002\u0002\u00028:\u0007\u000b\u0002\u0002",
  "98\u0003\u0002\u0002\u0002:;\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002",
  "\u0002;<\u0003\u0002\u0002\u0002<>\u0003\u0002\u0002\u0002=4\u0003\u0002",
  "\u0002\u0002=9\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?=\u0003",
  "\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@\u0012\u0003\u0002\u0002",
  "\u0002AB\u0007-\u0002\u0002B\u0014\u0003\u0002\u0002\u0002CD\u0007?",
  "\u0002\u0002D\u0016\u0003\u0002\u0002\u0002\u000b\u0002\u001e $/6;=",
  "?\u0002"
].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function(ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

function PlusLexer(input) {
  antlr4.Lexer.call(this, input);
  this._interp = new antlr4.atn.LexerATNSimulator(
    this,
    atn,
    decisionsToDFA,
    new antlr4.PredictionContextCache()
  );
  return this;
}

PlusLexer.prototype = Object.create(antlr4.Lexer.prototype);
PlusLexer.prototype.constructor = PlusLexer;

Object.defineProperty(PlusLexer.prototype, "atn", {
  get: function() {
    return atn;
  }
});

PlusLexer.EOF = antlr4.Token.EOF;
PlusLexer.VAR = 1;
PlusLexer.PRINT = 2;
PlusLexer.NUMBER = 3;
PlusLexer.EOL = 4;
PlusLexer.WHITESPACE = 5;
PlusLexer.PLUS = 6;
PlusLexer.EGAL = 7;

PlusLexer.prototype.channelNames = ["DEFAULT_TOKEN_CHANNEL", "HIDDEN"];

PlusLexer.prototype.modeNames = ["DEFAULT_MODE"];

PlusLexer.prototype.literalNames = [
  null,
  null,
  "'PRINT'",
  null,
  null,
  null,
  "'+'",
  "'='"
];

PlusLexer.prototype.symbolicNames = [
  null,
  "VAR",
  "PRINT",
  "NUMBER",
  "EOL",
  "WHITESPACE",
  "PLUS",
  "EGAL"
];

PlusLexer.prototype.ruleNames = [
  "LETTERS",
  "CHIFFRE",
  "PART_VAR",
  "VAR",
  "PRINT",
  "NUMBER",
  "EOL",
  "WHITESPACE",
  "PLUS",
  "EGAL"
];

PlusLexer.prototype.grammarFileName = "Plus.g4";

exports.PlusLexer = PlusLexer;
