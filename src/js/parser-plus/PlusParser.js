// Generated from Plus.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require("antlr4/index");
var PlusListener = require("./PlusListener").PlusListener;
// var grammarFileName = "Plus.g4";

var serializedATN = [
  "\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
  "\u0003\t#\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
  "\u0004\u0005\t\u0005\u0003\u0002\u0006\u0002\f\n\u0002\r\u0002\u000e",
  "\u0002\r\u0003\u0002\u0005\u0002\u0011\n\u0002\u0003\u0003\u0003\u0003",
  "\u0003\u0003\u0005\u0003\u0016\n\u0003\u0003\u0004\u0003\u0004\u0003",
  "\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u001d\n\u0004\u0003\u0005",
  "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0002\u0006\u0002",
  "\u0004\u0006\b\u0002\u0003\u0004\u0002\u0003\u0003\u0005\u0005\u0002",
  "$\u0002\u0010\u0003\u0002\u0002\u0002\u0004\u0015\u0003\u0002\u0002",
  "\u0002\u0006\u0017\u0003\u0002\u0002\u0002\b\u001e\u0003\u0002\u0002",
  "\u0002\n\f\u0005\u0004\u0003\u0002\u000b\n\u0003\u0002\u0002\u0002\f",
  "\r\u0003\u0002\u0002\u0002\r\u000b\u0003\u0002\u0002\u0002\r\u000e\u0003",
  "\u0002\u0002\u0002\u000e\u0011\u0003\u0002\u0002\u0002\u000f\u0011\u0007",
  "\u0002\u0002\u0003\u0010\u000b\u0003\u0002\u0002\u0002\u0010\u000f\u0003",
  "\u0002\u0002\u0002\u0011\u0003\u0003\u0002\u0002\u0002\u0012\u0016\u0005",
  "\u0006\u0004\u0002\u0013\u0016\u0005\b\u0005\u0002\u0014\u0016\u0007",
  "\u0006\u0002\u0002\u0015\u0012\u0003\u0002\u0002\u0002\u0015\u0013\u0003",
  "\u0002\u0002\u0002\u0015\u0014\u0003\u0002\u0002\u0002\u0016\u0005\u0003",
  "\u0002\u0002\u0002\u0017\u0018\u0007\u0003\u0002\u0002\u0018\u001c\u0007",
  "\t\u0002\u0002\u0019\u001d\u0007\u0003\u0002\u0002\u001a\u001d\u0007",
  "\u0005\u0002\u0002\u001b\u001d\u0005\b\u0005\u0002\u001c\u0019\u0003",
  "\u0002\u0002\u0002\u001c\u001a\u0003\u0002\u0002\u0002\u001c\u001b\u0003",
  "\u0002\u0002\u0002\u001d\u0007\u0003\u0002\u0002\u0002\u001e\u001f\t",
  "\u0002\u0002\u0002\u001f \u0007\b\u0002\u0002 !\t\u0002\u0002\u0002",
  "!\t\u0003\u0002\u0002\u0002\u0006\r\u0010\u0015\u001c"
].join("");

var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map(function(ds, index) {
  return new antlr4.dfa.DFA(ds, index);
});

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [null, null, "'PRINT'", null, null, null, "'+'", "'='"];

var symbolicNames = [
  null,
  "VAR",
  "PRINT",
  "NUMBER",
  "EOL",
  "WHITESPACE",
  "PLUS",
  "EGAL"
];

var ruleNames = ["plus", "ligne", "affectation", "addition"];

function PlusParser(input) {
  antlr4.Parser.call(this, input);
  this._interp = new antlr4.atn.ParserATNSimulator(
    this,
    atn,
    decisionsToDFA,
    sharedContextCache
  );
  this.ruleNames = ruleNames;
  this.literalNames = literalNames;
  this.symbolicNames = symbolicNames;
  return this;
}

PlusParser.prototype = Object.create(antlr4.Parser.prototype);
PlusParser.prototype.constructor = PlusParser;

Object.defineProperty(PlusParser.prototype, "atn", {
  get: function() {
    return atn;
  }
});

PlusParser.EOF = antlr4.Token.EOF;
PlusParser.VAR = 1;
PlusParser.PRINT = 2;
PlusParser.NUMBER = 3;
PlusParser.EOL = 4;
PlusParser.WHITESPACE = 5;
PlusParser.PLUS = 6;
PlusParser.EGAL = 7;

PlusParser.RULE_plus = 0;
PlusParser.RULE_ligne = 1;
PlusParser.RULE_affectation = 2;
PlusParser.RULE_addition = 3;

function PlusContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlusParser.RULE_plus;
  return this;
}

PlusContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PlusContext.prototype.constructor = PlusContext;

PlusContext.prototype.ligne = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTypedRuleContexts(LigneContext);
  } else {
    return this.getTypedRuleContext(LigneContext, i);
  }
};

PlusContext.prototype.EOF = function() {
  return this.getToken(PlusParser.EOF, 0);
};

PlusContext.prototype.enterRule = function(listener) {
  if (listener instanceof PlusListener) {
    listener.enterPlus(this);
  }
};

PlusContext.prototype.exitRule = function(listener) {
  if (listener instanceof PlusListener) {
    listener.exitPlus(this);
  }
};

PlusParser.PlusContext = PlusContext;

PlusParser.prototype.plus = function() {
  var localctx = new PlusContext(this, this._ctx, this.state);
  this.enterRule(localctx, 0, PlusParser.RULE_plus);
  var _la = 0; // Token type
  try {
    this.state = 14;
    this._errHandler.sync(this);
    switch (this._input.LA(1)) {
      case PlusParser.VAR:
      case PlusParser.NUMBER:
      case PlusParser.EOL:
        this.enterOuterAlt(localctx, 1);
        this.state = 9;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          this.state = 8;
          this.ligne();
          this.state = 11;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (
          (_la & ~0x1f) === 0 &&
          ((1 << _la) &
            ((1 << PlusParser.VAR) |
              (1 << PlusParser.NUMBER) |
              (1 << PlusParser.EOL))) !==
            0
        );
        break;
      case PlusParser.EOF:
        this.enterOuterAlt(localctx, 2);
        this.state = 13;
        this.match(PlusParser.EOF);
        break;
      default:
        throw new antlr4.error.NoViableAltException(this);
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function LigneContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlusParser.RULE_ligne;
  return this;
}

LigneContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LigneContext.prototype.constructor = LigneContext;

LigneContext.prototype.affectation = function() {
  return this.getTypedRuleContext(AffectationContext, 0);
};

LigneContext.prototype.addition = function() {
  return this.getTypedRuleContext(AdditionContext, 0);
};

LigneContext.prototype.EOL = function() {
  return this.getToken(PlusParser.EOL, 0);
};

LigneContext.prototype.enterRule = function(listener) {
  if (listener instanceof PlusListener) {
    listener.enterLigne(this);
  }
};

LigneContext.prototype.exitRule = function(listener) {
  if (listener instanceof PlusListener) {
    listener.exitLigne(this);
  }
};

PlusParser.LigneContext = LigneContext;

PlusParser.prototype.ligne = function() {
  var localctx = new LigneContext(this, this._ctx, this.state);
  this.enterRule(localctx, 2, PlusParser.RULE_ligne);
  try {
    this.state = 19;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 2, this._ctx);
    switch (la_) {
      case 1:
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.affectation();
        break;

      case 2:
        this.enterOuterAlt(localctx, 2);
        this.state = 17;
        this.addition();
        break;

      case 3:
        this.enterOuterAlt(localctx, 3);
        this.state = 18;
        this.match(PlusParser.EOL);
        break;
      default:
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function AffectationContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlusParser.RULE_affectation;
  return this;
}

AffectationContext.prototype = Object.create(
  antlr4.ParserRuleContext.prototype
);
AffectationContext.prototype.constructor = AffectationContext;

AffectationContext.prototype.VAR = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(PlusParser.VAR);
  } else {
    return this.getToken(PlusParser.VAR, i);
  }
};

AffectationContext.prototype.EGAL = function() {
  return this.getToken(PlusParser.EGAL, 0);
};

AffectationContext.prototype.NUMBER = function() {
  return this.getToken(PlusParser.NUMBER, 0);
};

AffectationContext.prototype.addition = function() {
  return this.getTypedRuleContext(AdditionContext, 0);
};

AffectationContext.prototype.enterRule = function(listener) {
  if (listener instanceof PlusListener) {
    listener.enterAffectation(this);
  }
};

AffectationContext.prototype.exitRule = function(listener) {
  if (listener instanceof PlusListener) {
    listener.exitAffectation(this);
  }
};

PlusParser.AffectationContext = AffectationContext;

PlusParser.prototype.affectation = function() {
  var localctx = new AffectationContext(this, this._ctx, this.state);
  this.enterRule(localctx, 4, PlusParser.RULE_affectation);
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 21;
    this.match(PlusParser.VAR);
    this.state = 22;
    this.match(PlusParser.EGAL);
    this.state = 26;
    this._errHandler.sync(this);
    var la_ = this._interp.adaptivePredict(this._input, 3, this._ctx);
    switch (la_) {
      case 1:
        this.state = 23;
        this.match(PlusParser.VAR);
        break;

      case 2:
        this.state = 24;
        this.match(PlusParser.NUMBER);
        break;

      case 3:
        this.state = 25;
        this.addition();
        break;
      default:
        break;
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

function AdditionContext(parser, parent, invokingState) {
  if (parent === undefined) {
    parent = null;
  }
  if (invokingState === undefined || invokingState === null) {
    invokingState = -1;
  }
  antlr4.ParserRuleContext.call(this, parent, invokingState);
  this.parser = parser;
  this.ruleIndex = PlusParser.RULE_addition;
  return this;
}

AdditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AdditionContext.prototype.constructor = AdditionContext;

AdditionContext.prototype.PLUS = function() {
  return this.getToken(PlusParser.PLUS, 0);
};

AdditionContext.prototype.VAR = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(PlusParser.VAR);
  } else {
    return this.getToken(PlusParser.VAR, i);
  }
};

AdditionContext.prototype.NUMBER = function(i) {
  if (i === undefined) {
    i = null;
  }
  if (i === null) {
    return this.getTokens(PlusParser.NUMBER);
  } else {
    return this.getToken(PlusParser.NUMBER, i);
  }
};

AdditionContext.prototype.enterRule = function(listener) {
  if (listener instanceof PlusListener) {
    listener.enterAddition(this);
  }
};

AdditionContext.prototype.exitRule = function(listener) {
  if (listener instanceof PlusListener) {
    listener.exitAddition(this);
  }
};

PlusParser.AdditionContext = AdditionContext;

PlusParser.prototype.addition = function() {
  var localctx = new AdditionContext(this, this._ctx, this.state);
  this.enterRule(localctx, 6, PlusParser.RULE_addition);
  var _la = 0; // Token type
  try {
    this.enterOuterAlt(localctx, 1);
    this.state = 28;
    _la = this._input.LA(1);
    if (!(_la === PlusParser.VAR || _la === PlusParser.NUMBER)) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
    this.state = 29;
    this.match(PlusParser.PLUS);
    this.state = 30;
    _la = this._input.LA(1);
    if (!(_la === PlusParser.VAR || _la === PlusParser.NUMBER)) {
      this._errHandler.recoverInline(this);
    } else {
      this._errHandler.reportMatch(this);
      this.consume();
    }
  } catch (re) {
    if (re instanceof antlr4.error.RecognitionException) {
      localctx.exception = re;
      this._errHandler.reportError(this, re);
      this._errHandler.recover(this, re);
    } else {
      throw re;
    }
  } finally {
    this.exitRule();
  }
  return localctx;
};

exports.PlusParser = PlusParser;
