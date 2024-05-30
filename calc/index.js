import antlr4 from 'antlr4';
import CalcLexer from './out/CalcLexer.js';
import CalcParser from './out/CalcParser.js';
import CalcVisitor from './out/CalcVisitor.js';
// import MyGrammarListener from './Calcr.js';

const input = `1+2-3
3/4+8
3*(6-2)
`
console.log(input)
const chars = new antlr4.InputStream(input);
const lexer = new CalcLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);


const parser = new CalcParser(tokens);


parser.buildParseTrees = true;
const tree = parser.prog();



class Visitor extends CalcVisitor{
 
	// Visit a parse tree produced by CalcParser#prog.
	visitProg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalcParser#line.
	visitLine(ctx) {
	  const result = this.visitChildren(ctx);
    console.log(result[0])
	}


	// Visit a parse tree produced by CalcParser#int_expr.
	visitInt_expr(ctx) {
	  return Number(ctx.INT().symbol.text);
	}


	// Visit a parse tree produced by CalcParser#calculate_expr.
	visitCalculate_expr(ctx) {
    const [preExpr,lastExpr]=ctx.expr()
    const pre = preExpr.accept(this)
    const last = lastExpr.accept(this)
    // console.log(ctx.DIV(),ctx.MUL(),ctx.SUB(), pre,last)
    if(ctx.DIV()){
      return pre / last
    }else if(ctx.MUL()){
      return pre * last
    }else if(ctx.SUB()){
      return pre - last 
    }else{
      return pre + last
    }
	}


	// Visit a parse tree produced by CalcParser#inner_expr.
	visitInner_expr(ctx) {
    
	  return ctx.expr().accept(this);
	}
}

tree.accept(new Visitor())

console.log("end")