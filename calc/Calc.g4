grammar Calc;
	
prog:	line* ;

line: expr NEWLINE;

expr:	expr (MUL|SUB|ADD|DIV) expr  # calculate_expr
    |	INT                          # int_expr
    |	'(' expr ')'                 # inner_expr
    ;

NEWLINE : [\r\n]+ ;
INT     : [0-9]+ ;
ADD : '+';
SUB: '-';
MUL: '*';
DIV : '/';

// start: input;

// input: setvariable NL input      #completecalculate 
//        | expression NL? EOF       #calculate
//        ;

// setvariable : ID '=' expression  
//        ;

// expression : expression POW expression         #pow
//         | expression (MUL | DIV) expression    #muldiv
//         | expression (ADD | SUB) expression    #addsub
//         | '(' expression ')'              #expr 
//         | ID                              #id           
//         | NUMBER                          #num
//         ;

// POW : '^';

// ADD : '+';
// SUB: '-';
// MUL: '*';
// DIV : '/';
// NL : '\r' ? '\n';
// ID : [a-zA-Z_]+;
// NUMBER : [0-9]+;