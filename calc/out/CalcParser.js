// Generated from Calc.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CalcListener from './CalcListener.js';
import CalcVisitor from './CalcVisitor.js';

const serializedATN = [4,1,8,32,2,0,7,0,2,1,7,1,2,2,7,2,1,0,5,0,8,8,0,10,
0,12,0,11,9,0,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,22,8,2,1,2,1,2,1,2,
5,2,27,8,2,10,2,12,2,30,9,2,1,2,0,1,4,3,0,2,4,0,1,1,0,5,8,31,0,9,1,0,0,0,
2,12,1,0,0,0,4,21,1,0,0,0,6,8,3,2,1,0,7,6,1,0,0,0,8,11,1,0,0,0,9,7,1,0,0,
0,9,10,1,0,0,0,10,1,1,0,0,0,11,9,1,0,0,0,12,13,3,4,2,0,13,14,5,3,0,0,14,
3,1,0,0,0,15,16,6,2,-1,0,16,22,5,4,0,0,17,18,5,1,0,0,18,19,3,4,2,0,19,20,
5,2,0,0,20,22,1,0,0,0,21,15,1,0,0,0,21,17,1,0,0,0,22,28,1,0,0,0,23,24,10,
3,0,0,24,25,7,0,0,0,25,27,3,4,2,4,26,23,1,0,0,0,27,30,1,0,0,0,28,26,1,0,
0,0,28,29,1,0,0,0,29,5,1,0,0,0,30,28,1,0,0,0,3,9,21,28];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class CalcParser extends antlr4.Parser {

    static grammarFileName = "Calc.g4";
    static literalNames = [ null, "'('", "')'", null, null, "'+'", "'-'", 
                            "'*'", "'/'" ];
    static symbolicNames = [ null, null, null, "NEWLINE", "INT", "ADD", 
                             "SUB", "MUL", "DIV" ];
    static ruleNames = [ "prog", "line", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalcParser.ruleNames;
        this.literalNames = CalcParser.literalNames;
        this.symbolicNames = CalcParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalcParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 9;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CalcParser.T__0 || _la===CalcParser.INT) {
	            this.state = 6;
	            this.line();
	            this.state = 11;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalcParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 12;
	        this.expr(0);
	        this.state = 13;
	        this.match(CalcParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
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
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, CalcParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CalcParser.INT:
	            localctx = new Int_exprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 16;
	            this.match(CalcParser.INT);
	            break;
	        case CalcParser.T__0:
	            localctx = new Inner_exprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 17;
	            this.match(CalcParser.T__0);
	            this.state = 18;
	            this.expr(0);
	            this.state = 19;
	            this.match(CalcParser.T__1);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 28;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Calculate_exprContext(this, new ExprContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, CalcParser.RULE_expr);
	                this.state = 23;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 24;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CalcParser.ADD) | (1 << CalcParser.SUB) | (1 << CalcParser.MUL) | (1 << CalcParser.DIV))) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 25;
	                this.expr(4); 
	            }
	            this.state = 30;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

CalcParser.EOF = antlr4.Token.EOF;
CalcParser.T__0 = 1;
CalcParser.T__1 = 2;
CalcParser.NEWLINE = 3;
CalcParser.INT = 4;
CalcParser.ADD = 5;
CalcParser.SUB = 6;
CalcParser.MUL = 7;
CalcParser.DIV = 8;

CalcParser.RULE_prog = 0;
CalcParser.RULE_line = 1;
CalcParser.RULE_expr = 2;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalcParser.RULE_prog;
    }

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalcVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalcParser.RULE_line;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NEWLINE() {
	    return this.getToken(CalcParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.exitLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalcVisitor ) {
	        return visitor.visitLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalcParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class Int_exprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(CalcParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.enterInt_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.exitInt_expr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalcVisitor ) {
	        return visitor.visitInt_expr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalcParser.Int_exprContext = Int_exprContext;

class Calculate_exprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(CalcParser.MUL, 0);
	};

	SUB() {
	    return this.getToken(CalcParser.SUB, 0);
	};

	ADD() {
	    return this.getToken(CalcParser.ADD, 0);
	};

	DIV() {
	    return this.getToken(CalcParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.enterCalculate_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.exitCalculate_expr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalcVisitor ) {
	        return visitor.visitCalculate_expr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalcParser.Calculate_exprContext = Calculate_exprContext;

class Inner_exprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.enterInner_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalcListener ) {
	        listener.exitInner_expr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalcVisitor ) {
	        return visitor.visitInner_expr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalcParser.Inner_exprContext = Inner_exprContext;


CalcParser.ProgContext = ProgContext; 
CalcParser.LineContext = LineContext; 
CalcParser.ExprContext = ExprContext; 
