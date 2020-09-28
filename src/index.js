const antlr = require('antlr4');
const { PlayScriptLexer } = require('../grammar/PlayScriptLexer');
const { PlayScriptParser } = require('../grammar/PlayScriptParser');

const fs = require('fs');

let TypeNames = [];

for (let key in PlayScriptLexer) {
    if (typeof PlayScriptLexer[key] === 'number') {
        TypeNames[PlayScriptLexer[key]] = key;
    }
}

fs.readFile('./codes/hello.play', 'utf8', function (err, data) {
    let input = new antlr.InputStream(data);
    let lexer = new PlayScriptLexer(input);
    let tokens = new antlr.CommonTokenStream(lexer);
    // let res = tokens.getTokens(0, tokens.getNumberOfOnChannelTokens());
    // console.log(res.map(({ type, text }) => ({ type: TypeNames[type], text })));
    let parser = new PlayScriptParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.blockStatements();
    function show(node, level = 0) {
        if (node.symbol) {
            let { type, text } = node.symbol;
            console.log("  ".repeat(level), `[${TypeNames[type]} ${text}]`);
        }
        else {
            console.log("  ".repeat(level), parser.ruleNames[node.ruleIndex]);
            node.children && node.children.forEach(child => show(child, level + 1));
        }
    }
    show(tree);
});