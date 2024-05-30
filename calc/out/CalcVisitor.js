// Generated from Calc.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by CalcParser.

export default class CalcVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by CalcParser#prog.
	visitProg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalcParser#line.
	visitLine(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalcParser#int_expr.
	visitInt_expr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalcParser#calculate_expr.
	visitCalculate_expr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalcParser#inner_expr.
	visitInner_expr(ctx) {
	  return this.visitChildren(ctx);
	}



}