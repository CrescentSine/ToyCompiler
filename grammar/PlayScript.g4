/*
 [The "BSD licence"]
 版权说明
 本文件的大部分内容来自：https://github.com/antlr/grammars-v4/blob/master/java/JavaParser.g4
 在此基础上进行了一些修改。
 修改者：宫文学 2019年
 
 原文件采用BSD licence，本文件仍然采用BSD licence.
 原文件的版权声明如下：
 */

/*
 [The "BSD licence"]
 Copyright (c) 2013 Terence Parr, Sam Harwell
 Copyright (c) 2017 Ivan
 Kochurkin (upgrade to Java 8)
 All rights reserved.
 Redistribution and use in source and binary
 forms, with or without
 modification, are permitted provided that the following conditions
 are
 met:
 1. Redistributions of source code must retain the above copyright
 notice, this list of
 conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the
 above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation
 and/or other materials provided with the distribution.
 3. The name of the author
 may not be used
 to endorse or promote products
 derived from this software without specific prior
 written
 permission.
 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED
 WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND
 FITNESS
 FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 DIRECT,
 INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT
 LIMITED
 TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR
 BUSINESS
 INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT,
 STRICT
 LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF
 THIS
 SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

grammar PlayScript;

import CommonLexer; //导入词法定义

// @header { package antlrtest; }

literal:
	IntegerLiteral
	| FloatingPointLiteral
	| BooleanLiteral
	| CharacterLiteral
	| StringLiteral
	| NullLiteral;

primitiveType: 'Number' | 'String' | 'var';

variableDeclaratorId: IDENTIFIER ('[' ']')*;

arrayInitializer:
	'{' (variableInitializer (',' variableInitializer)* (',')?)? '}';

variableInitializer: arrayInitializer | expression;

variableDeclarator:
	variableDeclaratorId ('=' variableInitializer)?;

variableDeclarators:
	typeType variableDeclarator (',' variableDeclarator)*;

blockStatement:
	variableDeclarators ';'
	| statement;
	// | localTypeDeclaration | functionDeclaration | classDeclaration;

blockStatements: blockStatement*;

block: '{' blockStatements '}';

parExpression: '(' expression ')';

forInit: variableDeclarators | expressionList;

enhancedForControl:
	typeType variableDeclaratorId ':' expression;

forControl:
	enhancedForControl
	| forInit? ';' expression? ';' forUpdate = expressionList?;

switchLabel:
	CASE (
		constantExpression = expression
		| enumConstantName = IDENTIFIER
	) ':'
	| DEFAULT ':';

/** Matches cases then statements, both of which are mandatory.
 To handle empty cases at the end,
 * we add switchLabel* to statement.
 */
switchBlockStatementGroup: switchLabel+ blockStatement+;

statement:
	blockLabel = block
	| IF parExpression statement (ELSE statement)?
	| FOR '(' forControl ')' statement
	| WHILE parExpression statement
	| DO statement WHILE parExpression ';'
	| SWITCH parExpression '{' switchBlockStatementGroup* switchLabel* '}'
	| RETURN expression? ';'
	| BREAK IDENTIFIER? ';'
	| SEMI
	| statementExpression = expression ';';
//| selectionStatement | iterationStatement;

expression:
	primary
	| expression bop = '.' (IDENTIFIER /*| functionCall*/ | THIS)
	| expression '[' expression ']'
	// | functionCall
	| expression postfix = ('++' | '--')
	| prefix = ('+' | '-' | '++' | '--') expression
	| prefix = ('~' | '!') expression
	| expression bop = ('*' | '/' | '%') expression
	| expression bop = ('+' | '-') expression
	| expression ('<' '<' | '>' '>' '>' | '>' '>') expression
	| expression bop = ('<=' | '>=' | '>' | '<') expression
	| expression bop = INSTANCEOF typeType
	| expression bop = ('==' | '!=') expression
	| expression bop = '&' expression
	| expression bop = '^' expression
	| expression bop = '|' expression
	| expression bop = '&&' expression
	| expression bop = '||' expression
	| expression bop = '?' expression ':' expression
	| <assoc = right> expression bop = (
		'='
		| '+='
		| '-='
		| '*='
		| '/='
		| '&='
		| '|='
		| '^='
		| '>>='
		| '>>>='
		| '<<='
		| '%='
	) expression;

expressionList: expression (',' expression)*;

primary:
	'(' expression ')'
	| THIS
	| SUPER
	| literal
	| IDENTIFIER; // | typeTypeOrVoid '.' CLASS

typeType: (
		/*classOrInterfaceType| functionType |*/ primitiveType
	) ('[' ']')*;

// functionCall: IDENTIFIER '(' expressionList? ')' | THIS '(' expressionList? ')' | SUPER '('
// expressionList? ')';

