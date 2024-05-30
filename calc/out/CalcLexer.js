// Generated from Calc.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,8,39,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,1,1,1,1,2,4,2,23,8,2,11,2,12,2,24,
1,3,4,3,28,8,3,11,3,12,3,29,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,0,0,8,1,1,3,
2,5,3,7,4,9,5,11,6,13,7,15,8,1,0,2,2,0,10,10,13,13,1,0,48,57,40,0,1,1,0,
0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,
0,0,0,0,15,1,0,0,0,1,17,1,0,0,0,3,19,1,0,0,0,5,22,1,0,0,0,7,27,1,0,0,0,9,
31,1,0,0,0,11,33,1,0,0,0,13,35,1,0,0,0,15,37,1,0,0,0,17,18,5,40,0,0,18,2,
1,0,0,0,19,20,5,41,0,0,20,4,1,0,0,0,21,23,7,0,0,0,22,21,1,0,0,0,23,24,1,
0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,6,1,0,0,0,26,28,7,1,0,0,27,26,1,0,0,
0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,8,1,0,0,0,31,32,5,43,0,0,
32,10,1,0,0,0,33,34,5,45,0,0,34,12,1,0,0,0,35,36,5,42,0,0,36,14,1,0,0,0,
37,38,5,47,0,0,38,16,1,0,0,0,3,0,24,29,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class CalcLexer extends antlr4.Lexer {

    static grammarFileName = "Calc.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", null, null, "'+'", "'-'", "'*'", 
                         "'/'" ];
	static symbolicNames = [ null, null, null, "NEWLINE", "INT", "ADD", "SUB", 
                          "MUL", "DIV" ];
	static ruleNames = [ "T__0", "T__1", "NEWLINE", "INT", "ADD", "SUB", "MUL", 
                      "DIV" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

CalcLexer.EOF = antlr4.Token.EOF;
CalcLexer.T__0 = 1;
CalcLexer.T__1 = 2;
CalcLexer.NEWLINE = 3;
CalcLexer.INT = 4;
CalcLexer.ADD = 5;
CalcLexer.SUB = 6;
CalcLexer.MUL = 7;
CalcLexer.DIV = 8;



