// Generated from .\grammar\PlayScript.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PlayScriptListener = require('./PlayScriptListener').PlayScriptListener;
var grammarFileName = "PlayScript.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003e\u0136\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "4\n\u0004\f\u0004\u000e\u00047\u000b\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0007\u0005=\n\u0005\f\u0005\u000e\u0005@\u000b\u0005",
    "\u0003\u0005\u0005\u0005C\n\u0005\u0005\u0005E\n\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0006\u0003\u0006\u0005\u0006K\n\u0006\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0005\u0007P\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0007\bV\n\b\f\b\u000e\bY\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0005\t_\n\t\u0003\n\u0007\nb\n\n\f\n\u000e\ne\u000b\n\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f",
    "\u0003\r\u0003\r\u0005\rq\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0005\u000fz\n\u000f\u0003",
    "\u000f\u0003\u000f\u0005\u000f~\n\u000f\u0003\u000f\u0003\u000f\u0005",
    "\u000f\u0082\n\u000f\u0005\u000f\u0084\n\u000f\u0003\u0010\u0003\u0010",
    "\u0003\u0010\u0005\u0010\u0089\n\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0005\u0010\u008e\n\u0010\u0003\u0011\u0006\u0011\u0091\n\u0011",
    "\r\u0011\u000e\u0011\u0092\u0003\u0011\u0006\u0011\u0096\n\u0011\r\u0011",
    "\u000e\u0011\u0097\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0005\u0012\u00a0\n\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0007\u0012\u00b6\n\u0012\f\u0012\u000e\u0012\u00b9\u000b\u0012\u0003",
    "\u0012\u0007\u0012\u00bc\n\u0012\f\u0012\u000e\u0012\u00bf\u000b\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00c5\n",
    "\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012\u00ca\n\u0012",
    "\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u00d1\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u00d9\n\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013",
    "\u0005\u0013\u00e9\n\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0007\u0013\u0117",
    "\n\u0013\f\u0013\u000e\u0013\u011a\u000b\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0007\u0014\u011f\n\u0014\f\u0014\u000e\u0014\u0122\u000b",
    "\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u012c\n\u0015\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0007\u0016\u0131\n\u0016\f\u0016\u000e\u0016",
    "\u0134\u000b\u0016\u0003\u0016\u0002\u0003$\u0017\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*",
    "\u0002\r\u0003\u0002-2\u0003\u0002\u0003\u0005\u0003\u0002MP\u0003\u0002",
    "BC\u0004\u0002QRVV\u0003\u0002OP\u0004\u0002@AHI\u0004\u0002GGJJ\u0004",
    "\u0002??Wa\u0004\u0002**bb\u0003\u0002MN\u0002\u015a\u0002,\u0003\u0002",
    "\u0002\u0002\u0004.\u0003\u0002\u0002\u0002\u00060\u0003\u0002\u0002",
    "\u0002\b8\u0003\u0002\u0002\u0002\nJ\u0003\u0002\u0002\u0002\fL\u0003",
    "\u0002\u0002\u0002\u000eQ\u0003\u0002\u0002\u0002\u0010^\u0003\u0002",
    "\u0002\u0002\u0012c\u0003\u0002\u0002\u0002\u0014f\u0003\u0002\u0002",
    "\u0002\u0016j\u0003\u0002\u0002\u0002\u0018p\u0003\u0002\u0002\u0002",
    "\u001ar\u0003\u0002\u0002\u0002\u001c\u0083\u0003\u0002\u0002\u0002",
    "\u001e\u008d\u0003\u0002\u0002\u0002 \u0090\u0003\u0002\u0002\u0002",
    "\"\u00d0\u0003\u0002\u0002\u0002$\u00d8\u0003\u0002\u0002\u0002&\u011b",
    "\u0003\u0002\u0002\u0002(\u012b\u0003\u0002\u0002\u0002*\u012d\u0003",
    "\u0002\u0002\u0002,-\t\u0002\u0002\u0002-\u0003\u0003\u0002\u0002\u0002",
    "./\t\u0003\u0002\u0002/\u0005\u0003\u0002\u0002\u000205\u0007b\u0002",
    "\u000212\u00077\u0002\u000224\u00078\u0002\u000231\u0003\u0002\u0002",
    "\u000247\u0003\u0002\u0002\u000253\u0003\u0002\u0002\u000256\u0003\u0002",
    "\u0002\u00026\u0007\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u0002",
    "8D\u00075\u0002\u00029>\u0005\n\u0006\u0002:;\u0007:\u0002\u0002;=\u0005",
    "\n\u0006\u0002<:\u0003\u0002\u0002\u0002=@\u0003\u0002\u0002\u0002>",
    "<\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002?B\u0003\u0002\u0002",
    "\u0002@>\u0003\u0002\u0002\u0002AC\u0007:\u0002\u0002BA\u0003\u0002",
    "\u0002\u0002BC\u0003\u0002\u0002\u0002CE\u0003\u0002\u0002\u0002D9\u0003",
    "\u0002\u0002\u0002DE\u0003\u0002\u0002\u0002EF\u0003\u0002\u0002\u0002",
    "FG\u00076\u0002\u0002G\t\u0003\u0002\u0002\u0002HK\u0005\b\u0005\u0002",
    "IK\u0005$\u0013\u0002JH\u0003\u0002\u0002\u0002JI\u0003\u0002\u0002",
    "\u0002K\u000b\u0003\u0002\u0002\u0002LO\u0005\u0006\u0004\u0002MN\u0007",
    "?\u0002\u0002NP\u0005\n\u0006\u0002OM\u0003\u0002\u0002\u0002OP\u0003",
    "\u0002\u0002\u0002P\r\u0003\u0002\u0002\u0002QR\u0005*\u0016\u0002R",
    "W\u0005\f\u0007\u0002ST\u0007:\u0002\u0002TV\u0005\f\u0007\u0002US\u0003",
    "\u0002\u0002\u0002VY\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002",
    "WX\u0003\u0002\u0002\u0002X\u000f\u0003\u0002\u0002\u0002YW\u0003\u0002",
    "\u0002\u0002Z[\u0005\u000e\b\u0002[\\\u00079\u0002\u0002\\_\u0003\u0002",
    "\u0002\u0002]_\u0005\"\u0012\u0002^Z\u0003\u0002\u0002\u0002^]\u0003",
    "\u0002\u0002\u0002_\u0011\u0003\u0002\u0002\u0002`b\u0005\u0010\t\u0002",
    "a`\u0003\u0002\u0002\u0002be\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002",
    "\u0002cd\u0003\u0002\u0002\u0002d\u0013\u0003\u0002\u0002\u0002ec\u0003",
    "\u0002\u0002\u0002fg\u00075\u0002\u0002gh\u0005\u0012\n\u0002hi\u0007",
    "6\u0002\u0002i\u0015\u0003\u0002\u0002\u0002jk\u00073\u0002\u0002kl",
    "\u0005$\u0013\u0002lm\u00074\u0002\u0002m\u0017\u0003\u0002\u0002\u0002",
    "nq\u0005\u000e\b\u0002oq\u0005&\u0014\u0002pn\u0003\u0002\u0002\u0002",
    "po\u0003\u0002\u0002\u0002q\u0019\u0003\u0002\u0002\u0002rs\u0005*\u0016",
    "\u0002st\u0005\u0006\u0004\u0002tu\u0007E\u0002\u0002uv\u0005$\u0013",
    "\u0002v\u001b\u0003\u0002\u0002\u0002w\u0084\u0005\u001a\u000e\u0002",
    "xz\u0005\u0018\r\u0002yx\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002",
    "\u0002z{\u0003\u0002\u0002\u0002{}\u00079\u0002\u0002|~\u0005$\u0013",
    "\u0002}|\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002\u0002~\u007f\u0003",
    "\u0002\u0002\u0002\u007f\u0081\u00079\u0002\u0002\u0080\u0082\u0005",
    "&\u0014\u0002\u0081\u0080\u0003\u0002\u0002\u0002\u0081\u0082\u0003",
    "\u0002\u0002\u0002\u0082\u0084\u0003\u0002\u0002\u0002\u0083w\u0003",
    "\u0002\u0002\u0002\u0083y\u0003\u0002\u0002\u0002\u0084\u001d\u0003",
    "\u0002\u0002\u0002\u0085\u0088\u0007\t\u0002\u0002\u0086\u0089\u0005",
    "$\u0013\u0002\u0087\u0089\u0007b\u0002\u0002\u0088\u0086\u0003\u0002",
    "\u0002\u0002\u0088\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002",
    "\u0002\u0002\u008a\u008e\u0007E\u0002\u0002\u008b\u008c\u0007\u000f",
    "\u0002\u0002\u008c\u008e\u0007E\u0002\u0002\u008d\u0085\u0003\u0002",
    "\u0002\u0002\u008d\u008b\u0003\u0002\u0002\u0002\u008e\u001f\u0003\u0002",
    "\u0002\u0002\u008f\u0091\u0005\u001e\u0010\u0002\u0090\u008f\u0003\u0002",
    "\u0002\u0002\u0091\u0092\u0003\u0002\u0002\u0002\u0092\u0090\u0003\u0002",
    "\u0002\u0002\u0092\u0093\u0003\u0002\u0002\u0002\u0093\u0095\u0003\u0002",
    "\u0002\u0002\u0094\u0096\u0005\u0010\t\u0002\u0095\u0094\u0003\u0002",
    "\u0002\u0002\u0096\u0097\u0003\u0002\u0002\u0002\u0097\u0095\u0003\u0002",
    "\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002\u0098!\u0003\u0002",
    "\u0002\u0002\u0099\u00d1\u0005\u0014\u000b\u0002\u009a\u009b\u0007\u0019",
    "\u0002\u0002\u009b\u009c\u0005\u0016\f\u0002\u009c\u009f\u0005\"\u0012",
    "\u0002\u009d\u009e\u0007\u0012\u0002\u0002\u009e\u00a0\u0005\"\u0012",
    "\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002",
    "\u0002\u00a0\u00d1\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007\u0018\u0002",
    "\u0002\u00a2\u00a3\u00073\u0002\u0002\u00a3\u00a4\u0005\u001c\u000f",
    "\u0002\u00a4\u00a5\u00074\u0002\u0002\u00a5\u00a6\u0005\"\u0012\u0002",
    "\u00a6\u00d1\u0003\u0002\u0002\u0002\u00a7\u00a8\u0007,\u0002\u0002",
    "\u00a8\u00a9\u0005\u0016\f\u0002\u00a9\u00aa\u0005\"\u0012\u0002\u00aa",
    "\u00d1\u0003\u0002\u0002\u0002\u00ab\u00ac\u0007\u0010\u0002\u0002\u00ac",
    "\u00ad\u0005\"\u0012\u0002\u00ad\u00ae\u0007,\u0002\u0002\u00ae\u00af",
    "\u0005\u0016\f\u0002\u00af\u00b0\u00079\u0002\u0002\u00b0\u00d1\u0003",
    "\u0002\u0002\u0002\u00b1\u00b2\u0007)\u0002\u0002\u00b2\u00b3\u0005",
    "\u0016\f\u0002\u00b3\u00b7\u00075\u0002\u0002\u00b4\u00b6\u0005 \u0011",
    "\u0002\u00b5\u00b4\u0003\u0002\u0002\u0002\u00b6\u00b9\u0003\u0002\u0002",
    "\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002",
    "\u0002\u00b8\u00bd\u0003\u0002\u0002\u0002\u00b9\u00b7\u0003\u0002\u0002",
    "\u0002\u00ba\u00bc\u0005\u001e\u0010\u0002\u00bb\u00ba\u0003\u0002\u0002",
    "\u0002\u00bc\u00bf\u0003\u0002\u0002\u0002\u00bd\u00bb\u0003\u0002\u0002",
    "\u0002\u00bd\u00be\u0003\u0002\u0002\u0002\u00be\u00c0\u0003\u0002\u0002",
    "\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00c0\u00c1\u00076\u0002",
    "\u0002\u00c1\u00d1\u0003\u0002\u0002\u0002\u00c2\u00c4\u0007&\u0002",
    "\u0002\u00c3\u00c5\u0005$\u0013\u0002\u00c4\u00c3\u0003\u0002\u0002",
    "\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5\u00c6\u0003\u0002\u0002",
    "\u0002\u00c6\u00d1\u00079\u0002\u0002\u00c7\u00c9\u0007\u0007\u0002",
    "\u0002\u00c8\u00ca\u0007b\u0002\u0002\u00c9\u00c8\u0003\u0002\u0002",
    "\u0002\u00c9\u00ca\u0003\u0002\u0002\u0002\u00ca\u00cb\u0003\u0002\u0002",
    "\u0002\u00cb\u00d1\u00079\u0002\u0002\u00cc\u00d1\u00079\u0002\u0002",
    "\u00cd\u00ce\u0005$\u0013\u0002\u00ce\u00cf\u00079\u0002\u0002\u00cf",
    "\u00d1\u0003\u0002\u0002\u0002\u00d0\u0099\u0003\u0002\u0002\u0002\u00d0",
    "\u009a\u0003\u0002\u0002\u0002\u00d0\u00a1\u0003\u0002\u0002\u0002\u00d0",
    "\u00a7\u0003\u0002\u0002\u0002\u00d0\u00ab\u0003\u0002\u0002\u0002\u00d0",
    "\u00b1\u0003\u0002\u0002\u0002\u00d0\u00c2\u0003\u0002\u0002\u0002\u00d0",
    "\u00c7\u0003\u0002\u0002\u0002\u00d0\u00cc\u0003\u0002\u0002\u0002\u00d0",
    "\u00cd\u0003\u0002\u0002\u0002\u00d1#\u0003\u0002\u0002\u0002\u00d2",
    "\u00d3\b\u0013\u0001\u0002\u00d3\u00d9\u0005(\u0015\u0002\u00d4\u00d5",
    "\t\u0004\u0002\u0002\u00d5\u00d9\u0005$\u0013\u0011\u00d6\u00d7\t\u0005",
    "\u0002\u0002\u00d7\u00d9\u0005$\u0013\u0010\u00d8\u00d2\u0003\u0002",
    "\u0002\u0002\u00d8\u00d4\u0003\u0002\u0002\u0002\u00d8\u00d6\u0003\u0002",
    "\u0002\u0002\u00d9\u0118\u0003\u0002\u0002\u0002\u00da\u00db\f\u000f",
    "\u0002\u0002\u00db\u00dc\t\u0006\u0002\u0002\u00dc\u0117\u0005$\u0013",
    "\u0010\u00dd\u00de\f\u000e\u0002\u0002\u00de\u00df\t\u0007\u0002\u0002",
    "\u00df\u0117\u0005$\u0013\u000f\u00e0\u00e8\f\r\u0002\u0002\u00e1\u00e2",
    "\u0007A\u0002\u0002\u00e2\u00e9\u0007A\u0002\u0002\u00e3\u00e4\u0007",
    "@\u0002\u0002\u00e4\u00e5\u0007@\u0002\u0002\u00e5\u00e9\u0007@\u0002",
    "\u0002\u00e6\u00e7\u0007@\u0002\u0002\u00e7\u00e9\u0007@\u0002\u0002",
    "\u00e8\u00e1\u0003\u0002\u0002\u0002\u00e8\u00e3\u0003\u0002\u0002\u0002",
    "\u00e8\u00e6\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002\u0002",
    "\u00ea\u0117\u0005$\u0013\u000e\u00eb\u00ec\f\f\u0002\u0002\u00ec\u00ed",
    "\t\b\u0002\u0002\u00ed\u0117\u0005$\u0013\r\u00ee\u00ef\f\n\u0002\u0002",
    "\u00ef\u00f0\t\t\u0002\u0002\u00f0\u0117\u0005$\u0013\u000b\u00f1\u00f2",
    "\f\t\u0002\u0002\u00f2\u00f3\u0007S\u0002\u0002\u00f3\u0117\u0005$\u0013",
    "\n\u00f4\u00f5\f\b\u0002\u0002\u00f5\u00f6\u0007U\u0002\u0002\u00f6",
    "\u0117\u0005$\u0013\t\u00f7\u00f8\f\u0007\u0002\u0002\u00f8\u00f9\u0007",
    "T\u0002\u0002\u00f9\u0117\u0005$\u0013\b\u00fa\u00fb\f\u0006\u0002\u0002",
    "\u00fb\u00fc\u0007K\u0002\u0002\u00fc\u0117\u0005$\u0013\u0007\u00fd",
    "\u00fe\f\u0005\u0002\u0002\u00fe\u00ff\u0007L\u0002\u0002\u00ff\u0117",
    "\u0005$\u0013\u0006\u0100\u0101\f\u0004\u0002\u0002\u0101\u0102\u0007",
    "D\u0002\u0002\u0102\u0103\u0005$\u0013\u0002\u0103\u0104\u0007E\u0002",
    "\u0002\u0104\u0105\u0005$\u0013\u0005\u0105\u0117\u0003\u0002\u0002",
    "\u0002\u0106\u0107\f\u0003\u0002\u0002\u0107\u0108\t\n\u0002\u0002\u0108",
    "\u0117\u0005$\u0013\u0003\u0109\u010a\f\u0014\u0002\u0002\u010a\u010b",
    "\u0007;\u0002\u0002\u010b\u0117\t\u000b\u0002\u0002\u010c\u010d\f\u0013",
    "\u0002\u0002\u010d\u010e\u00077\u0002\u0002\u010e\u010f\u0005$\u0013",
    "\u0002\u010f\u0110\u00078\u0002\u0002\u0110\u0117\u0003\u0002\u0002",
    "\u0002\u0111\u0112\f\u0012\u0002\u0002\u0112\u0117\t\f\u0002\u0002\u0113",
    "\u0114\f\u000b\u0002\u0002\u0114\u0115\u0007\u001c\u0002\u0002\u0115",
    "\u0117\u0005*\u0016\u0002\u0116\u00da\u0003\u0002\u0002\u0002\u0116",
    "\u00dd\u0003\u0002\u0002\u0002\u0116\u00e0\u0003\u0002\u0002\u0002\u0116",
    "\u00eb\u0003\u0002\u0002\u0002\u0116\u00ee\u0003\u0002\u0002\u0002\u0116",
    "\u00f1\u0003\u0002\u0002\u0002\u0116\u00f4\u0003\u0002\u0002\u0002\u0116",
    "\u00f7\u0003\u0002\u0002\u0002\u0116\u00fa\u0003\u0002\u0002\u0002\u0116",
    "\u00fd\u0003\u0002\u0002\u0002\u0116\u0100\u0003\u0002\u0002\u0002\u0116",
    "\u0106\u0003\u0002\u0002\u0002\u0116\u0109\u0003\u0002\u0002\u0002\u0116",
    "\u010c\u0003\u0002\u0002\u0002\u0116\u0111\u0003\u0002\u0002\u0002\u0116",
    "\u0113\u0003\u0002\u0002\u0002\u0117\u011a\u0003\u0002\u0002\u0002\u0118",
    "\u0116\u0003\u0002\u0002\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u0119",
    "%\u0003\u0002\u0002\u0002\u011a\u0118\u0003\u0002\u0002\u0002\u011b",
    "\u0120\u0005$\u0013\u0002\u011c\u011d\u0007:\u0002\u0002\u011d\u011f",
    "\u0005$\u0013\u0002\u011e\u011c\u0003\u0002\u0002\u0002\u011f\u0122",
    "\u0003\u0002\u0002\u0002\u0120\u011e\u0003\u0002\u0002\u0002\u0120\u0121",
    "\u0003\u0002\u0002\u0002\u0121\'\u0003\u0002\u0002\u0002\u0122\u0120",
    "\u0003\u0002\u0002\u0002\u0123\u0124\u00073\u0002\u0002\u0124\u0125",
    "\u0005$\u0013\u0002\u0125\u0126\u00074\u0002\u0002\u0126\u012c\u0003",
    "\u0002\u0002\u0002\u0127\u012c\u0007*\u0002\u0002\u0128\u012c\u0007",
    "(\u0002\u0002\u0129\u012c\u0005\u0002\u0002\u0002\u012a\u012c\u0007",
    "b\u0002\u0002\u012b\u0123\u0003\u0002\u0002\u0002\u012b\u0127\u0003",
    "\u0002\u0002\u0002\u012b\u0128\u0003\u0002\u0002\u0002\u012b\u0129\u0003",
    "\u0002\u0002\u0002\u012b\u012a\u0003\u0002\u0002\u0002\u012c)\u0003",
    "\u0002\u0002\u0002\u012d\u0132\u0005\u0004\u0003\u0002\u012e\u012f\u0007",
    "7\u0002\u0002\u012f\u0131\u00078\u0002\u0002\u0130\u012e\u0003\u0002",
    "\u0002\u0002\u0131\u0134\u0003\u0002\u0002\u0002\u0132\u0130\u0003\u0002",
    "\u0002\u0002\u0132\u0133\u0003\u0002\u0002\u0002\u0133+\u0003\u0002",
    "\u0002\u0002\u0134\u0132\u0003\u0002\u0002\u0002!5>BDJOW^cpy}\u0081",
    "\u0083\u0088\u008d\u0092\u0097\u009f\u00b7\u00bd\u00c4\u00c9\u00d0\u00d8",
    "\u00e8\u0116\u0118\u0120\u012b\u0132"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'Number'", "'String'", "'var'", "'boolean'", 
                     "'break'", "'byte'", "'case'", "'catch'", "'char'", 
                     "'class'", "'const'", "'continue'", "'default'", "'do'", 
                     "'double'", "'else'", "'enum'", "'extends'", "'final'", 
                     "'finally'", "'float'", "'for'", "'if'", "'implements'", 
                     "'import'", "'instanceof'", "'int'", "'interface'", 
                     "'long'", "'native'", "'new'", "'package'", "'private'", 
                     "'protected'", "'public'", "'return'", "'short'", "'super'", 
                     "'switch'", "'this'", "'void'", "'while'", null, null, 
                     null, null, null, "'null'", "'('", "')'", "'{'", "'}'", 
                     "'['", "']'", "';'", "','", "'.'", "'...'", "'@'", 
                     "'::'", "'='", "'>'", "'<'", "'!'", "'~'", "'?'", "':'", 
                     "'->'", "'=='", "'<='", "'>='", "'!='", "'&&'", "'||'", 
                     "'++'", "'--'", "'+'", "'-'", "'*'", "'/'", "'&'", 
                     "'|'", "'^'", "'%'", "'+='", "'-='", "'*='", "'/='", 
                     "'&='", "'|='", "'^='", "'%='", "'<<='", "'>>='", "'>>>='" ];

var symbolicNames = [ null, null, null, null, "BOOLEAN", "BREAK", "BYTE", 
                      "CASE", "CATCH", "CHAR", "CLASS", "CONST", "CONTINUE", 
                      "DEFAULT", "DO", "DOUBLE", "ELSE", "ENUM", "EXTENDS", 
                      "FINAL", "FINALLY", "FLOAT", "FOR", "IF", "IMPLEMENTS", 
                      "IMPORT", "INSTANCEOF", "INT", "INTERFACE", "LONG", 
                      "NATIVE", "NEW", "PACKAGE", "PRIVATE", "PROTECTED", 
                      "PUBLIC", "RETURN", "SHORT", "SUPER", "SWITCH", "THIS", 
                      "VOID", "WHILE", "IntegerLiteral", "FloatingPointLiteral", 
                      "BooleanLiteral", "CharacterLiteral", "StringLiteral", 
                      "NullLiteral", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                      "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "ELLIPSIS", 
                      "AT", "COLONCOLON", "ASSIGN", "GT", "LT", "BANG", 
                      "TILDE", "QUESTION", "COLON", "ARROW", "EQUAL", "LE", 
                      "GE", "NOTEQUAL", "AND", "OR", "INC", "DEC", "ADD", 
                      "SUB", "MUL", "DIV", "BITAND", "BITOR", "CARET", "MOD", 
                      "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
                      "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", 
                      "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", "URSHIFT_ASSIGN", 
                      "IDENTIFIER", "WS", "COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "literal", "primitiveType", "variableDeclaratorId", "arrayInitializer", 
                   "variableInitializer", "variableDeclarator", "variableDeclarators", 
                   "blockStatement", "blockStatements", "block", "parExpression", 
                   "forInit", "enhancedForControl", "forControl", "switchLabel", 
                   "switchBlockStatementGroup", "statement", "expression", 
                   "expressionList", "primary", "typeType" ];

function PlayScriptParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PlayScriptParser.prototype = Object.create(antlr4.Parser.prototype);
PlayScriptParser.prototype.constructor = PlayScriptParser;

Object.defineProperty(PlayScriptParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PlayScriptParser.EOF = antlr4.Token.EOF;
PlayScriptParser.T__0 = 1;
PlayScriptParser.T__1 = 2;
PlayScriptParser.T__2 = 3;
PlayScriptParser.BOOLEAN = 4;
PlayScriptParser.BREAK = 5;
PlayScriptParser.BYTE = 6;
PlayScriptParser.CASE = 7;
PlayScriptParser.CATCH = 8;
PlayScriptParser.CHAR = 9;
PlayScriptParser.CLASS = 10;
PlayScriptParser.CONST = 11;
PlayScriptParser.CONTINUE = 12;
PlayScriptParser.DEFAULT = 13;
PlayScriptParser.DO = 14;
PlayScriptParser.DOUBLE = 15;
PlayScriptParser.ELSE = 16;
PlayScriptParser.ENUM = 17;
PlayScriptParser.EXTENDS = 18;
PlayScriptParser.FINAL = 19;
PlayScriptParser.FINALLY = 20;
PlayScriptParser.FLOAT = 21;
PlayScriptParser.FOR = 22;
PlayScriptParser.IF = 23;
PlayScriptParser.IMPLEMENTS = 24;
PlayScriptParser.IMPORT = 25;
PlayScriptParser.INSTANCEOF = 26;
PlayScriptParser.INT = 27;
PlayScriptParser.INTERFACE = 28;
PlayScriptParser.LONG = 29;
PlayScriptParser.NATIVE = 30;
PlayScriptParser.NEW = 31;
PlayScriptParser.PACKAGE = 32;
PlayScriptParser.PRIVATE = 33;
PlayScriptParser.PROTECTED = 34;
PlayScriptParser.PUBLIC = 35;
PlayScriptParser.RETURN = 36;
PlayScriptParser.SHORT = 37;
PlayScriptParser.SUPER = 38;
PlayScriptParser.SWITCH = 39;
PlayScriptParser.THIS = 40;
PlayScriptParser.VOID = 41;
PlayScriptParser.WHILE = 42;
PlayScriptParser.IntegerLiteral = 43;
PlayScriptParser.FloatingPointLiteral = 44;
PlayScriptParser.BooleanLiteral = 45;
PlayScriptParser.CharacterLiteral = 46;
PlayScriptParser.StringLiteral = 47;
PlayScriptParser.NullLiteral = 48;
PlayScriptParser.LPAREN = 49;
PlayScriptParser.RPAREN = 50;
PlayScriptParser.LBRACE = 51;
PlayScriptParser.RBRACE = 52;
PlayScriptParser.LBRACK = 53;
PlayScriptParser.RBRACK = 54;
PlayScriptParser.SEMI = 55;
PlayScriptParser.COMMA = 56;
PlayScriptParser.DOT = 57;
PlayScriptParser.ELLIPSIS = 58;
PlayScriptParser.AT = 59;
PlayScriptParser.COLONCOLON = 60;
PlayScriptParser.ASSIGN = 61;
PlayScriptParser.GT = 62;
PlayScriptParser.LT = 63;
PlayScriptParser.BANG = 64;
PlayScriptParser.TILDE = 65;
PlayScriptParser.QUESTION = 66;
PlayScriptParser.COLON = 67;
PlayScriptParser.ARROW = 68;
PlayScriptParser.EQUAL = 69;
PlayScriptParser.LE = 70;
PlayScriptParser.GE = 71;
PlayScriptParser.NOTEQUAL = 72;
PlayScriptParser.AND = 73;
PlayScriptParser.OR = 74;
PlayScriptParser.INC = 75;
PlayScriptParser.DEC = 76;
PlayScriptParser.ADD = 77;
PlayScriptParser.SUB = 78;
PlayScriptParser.MUL = 79;
PlayScriptParser.DIV = 80;
PlayScriptParser.BITAND = 81;
PlayScriptParser.BITOR = 82;
PlayScriptParser.CARET = 83;
PlayScriptParser.MOD = 84;
PlayScriptParser.ADD_ASSIGN = 85;
PlayScriptParser.SUB_ASSIGN = 86;
PlayScriptParser.MUL_ASSIGN = 87;
PlayScriptParser.DIV_ASSIGN = 88;
PlayScriptParser.AND_ASSIGN = 89;
PlayScriptParser.OR_ASSIGN = 90;
PlayScriptParser.XOR_ASSIGN = 91;
PlayScriptParser.MOD_ASSIGN = 92;
PlayScriptParser.LSHIFT_ASSIGN = 93;
PlayScriptParser.RSHIFT_ASSIGN = 94;
PlayScriptParser.URSHIFT_ASSIGN = 95;
PlayScriptParser.IDENTIFIER = 96;
PlayScriptParser.WS = 97;
PlayScriptParser.COMMENT = 98;
PlayScriptParser.LINE_COMMENT = 99;

PlayScriptParser.RULE_literal = 0;
PlayScriptParser.RULE_primitiveType = 1;
PlayScriptParser.RULE_variableDeclaratorId = 2;
PlayScriptParser.RULE_arrayInitializer = 3;
PlayScriptParser.RULE_variableInitializer = 4;
PlayScriptParser.RULE_variableDeclarator = 5;
PlayScriptParser.RULE_variableDeclarators = 6;
PlayScriptParser.RULE_blockStatement = 7;
PlayScriptParser.RULE_blockStatements = 8;
PlayScriptParser.RULE_block = 9;
PlayScriptParser.RULE_parExpression = 10;
PlayScriptParser.RULE_forInit = 11;
PlayScriptParser.RULE_enhancedForControl = 12;
PlayScriptParser.RULE_forControl = 13;
PlayScriptParser.RULE_switchLabel = 14;
PlayScriptParser.RULE_switchBlockStatementGroup = 15;
PlayScriptParser.RULE_statement = 16;
PlayScriptParser.RULE_expression = 17;
PlayScriptParser.RULE_expressionList = 18;
PlayScriptParser.RULE_primary = 19;
PlayScriptParser.RULE_typeType = 20;


function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.IntegerLiteral = function() {
    return this.getToken(PlayScriptParser.IntegerLiteral, 0);
};

LiteralContext.prototype.FloatingPointLiteral = function() {
    return this.getToken(PlayScriptParser.FloatingPointLiteral, 0);
};

LiteralContext.prototype.BooleanLiteral = function() {
    return this.getToken(PlayScriptParser.BooleanLiteral, 0);
};

LiteralContext.prototype.CharacterLiteral = function() {
    return this.getToken(PlayScriptParser.CharacterLiteral, 0);
};

LiteralContext.prototype.StringLiteral = function() {
    return this.getToken(PlayScriptParser.StringLiteral, 0);
};

LiteralContext.prototype.NullLiteral = function() {
    return this.getToken(PlayScriptParser.NullLiteral, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitLiteral(this);
	}
};




PlayScriptParser.LiteralContext = LiteralContext;

PlayScriptParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, PlayScriptParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        _la = this._input.LA(1);
        if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (PlayScriptParser.IntegerLiteral - 43)) | (1 << (PlayScriptParser.FloatingPointLiteral - 43)) | (1 << (PlayScriptParser.BooleanLiteral - 43)) | (1 << (PlayScriptParser.CharacterLiteral - 43)) | (1 << (PlayScriptParser.StringLiteral - 43)) | (1 << (PlayScriptParser.NullLiteral - 43)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


function PrimitiveTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_primitiveType;
    return this;
}

PrimitiveTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveTypeContext.prototype.constructor = PrimitiveTypeContext;


PrimitiveTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterPrimitiveType(this);
	}
};

PrimitiveTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitPrimitiveType(this);
	}
};




PlayScriptParser.PrimitiveTypeContext = PrimitiveTypeContext;

PlayScriptParser.prototype.primitiveType = function() {

    var localctx = new PrimitiveTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, PlayScriptParser.RULE_primitiveType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlayScriptParser.T__0) | (1 << PlayScriptParser.T__1) | (1 << PlayScriptParser.T__2))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
};


function VariableDeclaratorIdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_variableDeclaratorId;
    return this;
}

VariableDeclaratorIdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclaratorIdContext.prototype.constructor = VariableDeclaratorIdContext;

VariableDeclaratorIdContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

VariableDeclaratorIdContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.LBRACK);
    } else {
        return this.getToken(PlayScriptParser.LBRACK, i);
    }
};


VariableDeclaratorIdContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.RBRACK);
    } else {
        return this.getToken(PlayScriptParser.RBRACK, i);
    }
};


VariableDeclaratorIdContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterVariableDeclaratorId(this);
	}
};

VariableDeclaratorIdContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitVariableDeclaratorId(this);
	}
};




PlayScriptParser.VariableDeclaratorIdContext = VariableDeclaratorIdContext;

PlayScriptParser.prototype.variableDeclaratorId = function() {

    var localctx = new VariableDeclaratorIdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PlayScriptParser.RULE_variableDeclaratorId);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this.match(PlayScriptParser.IDENTIFIER);
        this.state = 51;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlayScriptParser.LBRACK) {
            this.state = 47;
            this.match(PlayScriptParser.LBRACK);
            this.state = 48;
            this.match(PlayScriptParser.RBRACK);
            this.state = 53;
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
};


function ArrayInitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_arrayInitializer;
    return this;
}

ArrayInitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArrayInitializerContext.prototype.constructor = ArrayInitializerContext;

ArrayInitializerContext.prototype.LBRACE = function() {
    return this.getToken(PlayScriptParser.LBRACE, 0);
};

ArrayInitializerContext.prototype.RBRACE = function() {
    return this.getToken(PlayScriptParser.RBRACE, 0);
};

ArrayInitializerContext.prototype.variableInitializer = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableInitializerContext);
    } else {
        return this.getTypedRuleContext(VariableInitializerContext,i);
    }
};

ArrayInitializerContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.COMMA);
    } else {
        return this.getToken(PlayScriptParser.COMMA, i);
    }
};


ArrayInitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterArrayInitializer(this);
	}
};

ArrayInitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitArrayInitializer(this);
	}
};




PlayScriptParser.ArrayInitializerContext = ArrayInitializerContext;

PlayScriptParser.prototype.arrayInitializer = function() {

    var localctx = new ArrayInitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, PlayScriptParser.RULE_arrayInitializer);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 54;
        this.match(PlayScriptParser.LBRACE);
        this.state = 66;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (PlayScriptParser.SUPER - 38)) | (1 << (PlayScriptParser.THIS - 38)) | (1 << (PlayScriptParser.IntegerLiteral - 38)) | (1 << (PlayScriptParser.FloatingPointLiteral - 38)) | (1 << (PlayScriptParser.BooleanLiteral - 38)) | (1 << (PlayScriptParser.CharacterLiteral - 38)) | (1 << (PlayScriptParser.StringLiteral - 38)) | (1 << (PlayScriptParser.NullLiteral - 38)) | (1 << (PlayScriptParser.LPAREN - 38)) | (1 << (PlayScriptParser.LBRACE - 38)) | (1 << (PlayScriptParser.BANG - 38)) | (1 << (PlayScriptParser.TILDE - 38)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)) | (1 << (PlayScriptParser.IDENTIFIER - 75)))) !== 0)) {
            this.state = 55;
            this.variableInitializer();
            this.state = 60;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 56;
                    this.match(PlayScriptParser.COMMA);
                    this.state = 57;
                    this.variableInitializer(); 
                }
                this.state = 62;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
            }

            this.state = 64;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlayScriptParser.COMMA) {
                this.state = 63;
                this.match(PlayScriptParser.COMMA);
            }

        }

        this.state = 68;
        this.match(PlayScriptParser.RBRACE);
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
};


function VariableInitializerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_variableInitializer;
    return this;
}

VariableInitializerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableInitializerContext.prototype.constructor = VariableInitializerContext;

VariableInitializerContext.prototype.arrayInitializer = function() {
    return this.getTypedRuleContext(ArrayInitializerContext,0);
};

VariableInitializerContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

VariableInitializerContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterVariableInitializer(this);
	}
};

VariableInitializerContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitVariableInitializer(this);
	}
};




PlayScriptParser.VariableInitializerContext = VariableInitializerContext;

PlayScriptParser.prototype.variableInitializer = function() {

    var localctx = new VariableInitializerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, PlayScriptParser.RULE_variableInitializer);
    try {
        this.state = 72;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.LBRACE:
            this.enterOuterAlt(localctx, 1);
            this.state = 70;
            this.arrayInitializer();
            break;
        case PlayScriptParser.SUPER:
        case PlayScriptParser.THIS:
        case PlayScriptParser.IntegerLiteral:
        case PlayScriptParser.FloatingPointLiteral:
        case PlayScriptParser.BooleanLiteral:
        case PlayScriptParser.CharacterLiteral:
        case PlayScriptParser.StringLiteral:
        case PlayScriptParser.NullLiteral:
        case PlayScriptParser.LPAREN:
        case PlayScriptParser.BANG:
        case PlayScriptParser.TILDE:
        case PlayScriptParser.INC:
        case PlayScriptParser.DEC:
        case PlayScriptParser.ADD:
        case PlayScriptParser.SUB:
        case PlayScriptParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 71;
            this.expression(0);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
};


function VariableDeclaratorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_variableDeclarator;
    return this;
}

VariableDeclaratorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclaratorContext.prototype.constructor = VariableDeclaratorContext;

VariableDeclaratorContext.prototype.variableDeclaratorId = function() {
    return this.getTypedRuleContext(VariableDeclaratorIdContext,0);
};

VariableDeclaratorContext.prototype.ASSIGN = function() {
    return this.getToken(PlayScriptParser.ASSIGN, 0);
};

VariableDeclaratorContext.prototype.variableInitializer = function() {
    return this.getTypedRuleContext(VariableInitializerContext,0);
};

VariableDeclaratorContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterVariableDeclarator(this);
	}
};

VariableDeclaratorContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitVariableDeclarator(this);
	}
};




PlayScriptParser.VariableDeclaratorContext = VariableDeclaratorContext;

PlayScriptParser.prototype.variableDeclarator = function() {

    var localctx = new VariableDeclaratorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, PlayScriptParser.RULE_variableDeclarator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 74;
        this.variableDeclaratorId();
        this.state = 77;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===PlayScriptParser.ASSIGN) {
            this.state = 75;
            this.match(PlayScriptParser.ASSIGN);
            this.state = 76;
            this.variableInitializer();
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
};


function VariableDeclaratorsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_variableDeclarators;
    return this;
}

VariableDeclaratorsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableDeclaratorsContext.prototype.constructor = VariableDeclaratorsContext;

VariableDeclaratorsContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

VariableDeclaratorsContext.prototype.variableDeclarator = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableDeclaratorContext);
    } else {
        return this.getTypedRuleContext(VariableDeclaratorContext,i);
    }
};

VariableDeclaratorsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.COMMA);
    } else {
        return this.getToken(PlayScriptParser.COMMA, i);
    }
};


VariableDeclaratorsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterVariableDeclarators(this);
	}
};

VariableDeclaratorsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitVariableDeclarators(this);
	}
};




PlayScriptParser.VariableDeclaratorsContext = VariableDeclaratorsContext;

PlayScriptParser.prototype.variableDeclarators = function() {

    var localctx = new VariableDeclaratorsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, PlayScriptParser.RULE_variableDeclarators);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 79;
        this.typeType();
        this.state = 80;
        this.variableDeclarator();
        this.state = 85;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlayScriptParser.COMMA) {
            this.state = 81;
            this.match(PlayScriptParser.COMMA);
            this.state = 82;
            this.variableDeclarator();
            this.state = 87;
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
};


function BlockStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_blockStatement;
    return this;
}

BlockStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockStatementContext.prototype.constructor = BlockStatementContext;

BlockStatementContext.prototype.variableDeclarators = function() {
    return this.getTypedRuleContext(VariableDeclaratorsContext,0);
};

BlockStatementContext.prototype.SEMI = function() {
    return this.getToken(PlayScriptParser.SEMI, 0);
};

BlockStatementContext.prototype.statement = function() {
    return this.getTypedRuleContext(StatementContext,0);
};

BlockStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterBlockStatement(this);
	}
};

BlockStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitBlockStatement(this);
	}
};




PlayScriptParser.BlockStatementContext = BlockStatementContext;

PlayScriptParser.prototype.blockStatement = function() {

    var localctx = new BlockStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, PlayScriptParser.RULE_blockStatement);
    try {
        this.state = 92;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.T__0:
        case PlayScriptParser.T__1:
        case PlayScriptParser.T__2:
            this.enterOuterAlt(localctx, 1);
            this.state = 88;
            this.variableDeclarators();
            this.state = 89;
            this.match(PlayScriptParser.SEMI);
            break;
        case PlayScriptParser.BREAK:
        case PlayScriptParser.DO:
        case PlayScriptParser.FOR:
        case PlayScriptParser.IF:
        case PlayScriptParser.RETURN:
        case PlayScriptParser.SUPER:
        case PlayScriptParser.SWITCH:
        case PlayScriptParser.THIS:
        case PlayScriptParser.WHILE:
        case PlayScriptParser.IntegerLiteral:
        case PlayScriptParser.FloatingPointLiteral:
        case PlayScriptParser.BooleanLiteral:
        case PlayScriptParser.CharacterLiteral:
        case PlayScriptParser.StringLiteral:
        case PlayScriptParser.NullLiteral:
        case PlayScriptParser.LPAREN:
        case PlayScriptParser.LBRACE:
        case PlayScriptParser.SEMI:
        case PlayScriptParser.BANG:
        case PlayScriptParser.TILDE:
        case PlayScriptParser.INC:
        case PlayScriptParser.DEC:
        case PlayScriptParser.ADD:
        case PlayScriptParser.SUB:
        case PlayScriptParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 91;
            this.statement();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
};


function BlockStatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_blockStatements;
    return this;
}

BlockStatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockStatementsContext.prototype.constructor = BlockStatementsContext;

BlockStatementsContext.prototype.blockStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockStatementContext);
    } else {
        return this.getTypedRuleContext(BlockStatementContext,i);
    }
};

BlockStatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterBlockStatements(this);
	}
};

BlockStatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitBlockStatements(this);
	}
};




PlayScriptParser.BlockStatementsContext = BlockStatementsContext;

PlayScriptParser.prototype.blockStatements = function() {

    var localctx = new BlockStatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, PlayScriptParser.RULE_blockStatements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlayScriptParser.T__0) | (1 << PlayScriptParser.T__1) | (1 << PlayScriptParser.T__2) | (1 << PlayScriptParser.BREAK) | (1 << PlayScriptParser.DO) | (1 << PlayScriptParser.FOR) | (1 << PlayScriptParser.IF))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (PlayScriptParser.RETURN - 36)) | (1 << (PlayScriptParser.SUPER - 36)) | (1 << (PlayScriptParser.SWITCH - 36)) | (1 << (PlayScriptParser.THIS - 36)) | (1 << (PlayScriptParser.WHILE - 36)) | (1 << (PlayScriptParser.IntegerLiteral - 36)) | (1 << (PlayScriptParser.FloatingPointLiteral - 36)) | (1 << (PlayScriptParser.BooleanLiteral - 36)) | (1 << (PlayScriptParser.CharacterLiteral - 36)) | (1 << (PlayScriptParser.StringLiteral - 36)) | (1 << (PlayScriptParser.NullLiteral - 36)) | (1 << (PlayScriptParser.LPAREN - 36)) | (1 << (PlayScriptParser.LBRACE - 36)) | (1 << (PlayScriptParser.SEMI - 36)) | (1 << (PlayScriptParser.BANG - 36)) | (1 << (PlayScriptParser.TILDE - 36)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)) | (1 << (PlayScriptParser.IDENTIFIER - 75)))) !== 0)) {
            this.state = 94;
            this.blockStatement();
            this.state = 99;
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
};


function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.LBRACE = function() {
    return this.getToken(PlayScriptParser.LBRACE, 0);
};

BlockContext.prototype.blockStatements = function() {
    return this.getTypedRuleContext(BlockStatementsContext,0);
};

BlockContext.prototype.RBRACE = function() {
    return this.getToken(PlayScriptParser.RBRACE, 0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitBlock(this);
	}
};




PlayScriptParser.BlockContext = BlockContext;

PlayScriptParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, PlayScriptParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.match(PlayScriptParser.LBRACE);
        this.state = 101;
        this.blockStatements();
        this.state = 102;
        this.match(PlayScriptParser.RBRACE);
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
};


function ParExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_parExpression;
    return this;
}

ParExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParExpressionContext.prototype.constructor = ParExpressionContext;

ParExpressionContext.prototype.LPAREN = function() {
    return this.getToken(PlayScriptParser.LPAREN, 0);
};

ParExpressionContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ParExpressionContext.prototype.RPAREN = function() {
    return this.getToken(PlayScriptParser.RPAREN, 0);
};

ParExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterParExpression(this);
	}
};

ParExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitParExpression(this);
	}
};




PlayScriptParser.ParExpressionContext = ParExpressionContext;

PlayScriptParser.prototype.parExpression = function() {

    var localctx = new ParExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, PlayScriptParser.RULE_parExpression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(PlayScriptParser.LPAREN);
        this.state = 105;
        this.expression(0);
        this.state = 106;
        this.match(PlayScriptParser.RPAREN);
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
};


function ForInitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_forInit;
    return this;
}

ForInitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForInitContext.prototype.constructor = ForInitContext;

ForInitContext.prototype.variableDeclarators = function() {
    return this.getTypedRuleContext(VariableDeclaratorsContext,0);
};

ForInitContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ForInitContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterForInit(this);
	}
};

ForInitContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitForInit(this);
	}
};




PlayScriptParser.ForInitContext = ForInitContext;

PlayScriptParser.prototype.forInit = function() {

    var localctx = new ForInitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, PlayScriptParser.RULE_forInit);
    try {
        this.state = 110;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.T__0:
        case PlayScriptParser.T__1:
        case PlayScriptParser.T__2:
            this.enterOuterAlt(localctx, 1);
            this.state = 108;
            this.variableDeclarators();
            break;
        case PlayScriptParser.SUPER:
        case PlayScriptParser.THIS:
        case PlayScriptParser.IntegerLiteral:
        case PlayScriptParser.FloatingPointLiteral:
        case PlayScriptParser.BooleanLiteral:
        case PlayScriptParser.CharacterLiteral:
        case PlayScriptParser.StringLiteral:
        case PlayScriptParser.NullLiteral:
        case PlayScriptParser.LPAREN:
        case PlayScriptParser.BANG:
        case PlayScriptParser.TILDE:
        case PlayScriptParser.INC:
        case PlayScriptParser.DEC:
        case PlayScriptParser.ADD:
        case PlayScriptParser.SUB:
        case PlayScriptParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 2);
            this.state = 109;
            this.expressionList();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
};


function EnhancedForControlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_enhancedForControl;
    return this;
}

EnhancedForControlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EnhancedForControlContext.prototype.constructor = EnhancedForControlContext;

EnhancedForControlContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

EnhancedForControlContext.prototype.variableDeclaratorId = function() {
    return this.getTypedRuleContext(VariableDeclaratorIdContext,0);
};

EnhancedForControlContext.prototype.COLON = function() {
    return this.getToken(PlayScriptParser.COLON, 0);
};

EnhancedForControlContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

EnhancedForControlContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterEnhancedForControl(this);
	}
};

EnhancedForControlContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitEnhancedForControl(this);
	}
};




PlayScriptParser.EnhancedForControlContext = EnhancedForControlContext;

PlayScriptParser.prototype.enhancedForControl = function() {

    var localctx = new EnhancedForControlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, PlayScriptParser.RULE_enhancedForControl);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        this.typeType();
        this.state = 113;
        this.variableDeclaratorId();
        this.state = 114;
        this.match(PlayScriptParser.COLON);
        this.state = 115;
        this.expression(0);
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
};


function ForControlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_forControl;
    this.forUpdate = null; // ExpressionListContext
    return this;
}

ForControlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForControlContext.prototype.constructor = ForControlContext;

ForControlContext.prototype.enhancedForControl = function() {
    return this.getTypedRuleContext(EnhancedForControlContext,0);
};

ForControlContext.prototype.SEMI = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.SEMI);
    } else {
        return this.getToken(PlayScriptParser.SEMI, i);
    }
};


ForControlContext.prototype.forInit = function() {
    return this.getTypedRuleContext(ForInitContext,0);
};

ForControlContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ForControlContext.prototype.expressionList = function() {
    return this.getTypedRuleContext(ExpressionListContext,0);
};

ForControlContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterForControl(this);
	}
};

ForControlContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitForControl(this);
	}
};




PlayScriptParser.ForControlContext = ForControlContext;

PlayScriptParser.prototype.forControl = function() {

    var localctx = new ForControlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, PlayScriptParser.RULE_forControl);
    var _la = 0; // Token type
    try {
        this.state = 129;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 117;
            this.enhancedForControl();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 119;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlayScriptParser.T__0) | (1 << PlayScriptParser.T__1) | (1 << PlayScriptParser.T__2))) !== 0) || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (PlayScriptParser.SUPER - 38)) | (1 << (PlayScriptParser.THIS - 38)) | (1 << (PlayScriptParser.IntegerLiteral - 38)) | (1 << (PlayScriptParser.FloatingPointLiteral - 38)) | (1 << (PlayScriptParser.BooleanLiteral - 38)) | (1 << (PlayScriptParser.CharacterLiteral - 38)) | (1 << (PlayScriptParser.StringLiteral - 38)) | (1 << (PlayScriptParser.NullLiteral - 38)) | (1 << (PlayScriptParser.LPAREN - 38)) | (1 << (PlayScriptParser.BANG - 38)) | (1 << (PlayScriptParser.TILDE - 38)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)) | (1 << (PlayScriptParser.IDENTIFIER - 75)))) !== 0)) {
                this.state = 118;
                this.forInit();
            }

            this.state = 121;
            this.match(PlayScriptParser.SEMI);
            this.state = 123;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (PlayScriptParser.SUPER - 38)) | (1 << (PlayScriptParser.THIS - 38)) | (1 << (PlayScriptParser.IntegerLiteral - 38)) | (1 << (PlayScriptParser.FloatingPointLiteral - 38)) | (1 << (PlayScriptParser.BooleanLiteral - 38)) | (1 << (PlayScriptParser.CharacterLiteral - 38)) | (1 << (PlayScriptParser.StringLiteral - 38)) | (1 << (PlayScriptParser.NullLiteral - 38)) | (1 << (PlayScriptParser.LPAREN - 38)) | (1 << (PlayScriptParser.BANG - 38)) | (1 << (PlayScriptParser.TILDE - 38)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)) | (1 << (PlayScriptParser.IDENTIFIER - 75)))) !== 0)) {
                this.state = 122;
                this.expression(0);
            }

            this.state = 125;
            this.match(PlayScriptParser.SEMI);
            this.state = 127;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (PlayScriptParser.SUPER - 38)) | (1 << (PlayScriptParser.THIS - 38)) | (1 << (PlayScriptParser.IntegerLiteral - 38)) | (1 << (PlayScriptParser.FloatingPointLiteral - 38)) | (1 << (PlayScriptParser.BooleanLiteral - 38)) | (1 << (PlayScriptParser.CharacterLiteral - 38)) | (1 << (PlayScriptParser.StringLiteral - 38)) | (1 << (PlayScriptParser.NullLiteral - 38)) | (1 << (PlayScriptParser.LPAREN - 38)) | (1 << (PlayScriptParser.BANG - 38)) | (1 << (PlayScriptParser.TILDE - 38)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)) | (1 << (PlayScriptParser.IDENTIFIER - 75)))) !== 0)) {
                this.state = 126;
                localctx.forUpdate = this.expressionList();
            }

            break;

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
};


function SwitchLabelContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_switchLabel;
    this.constantExpression = null; // ExpressionContext
    this.enumConstantName = null; // Token
    return this;
}

SwitchLabelContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SwitchLabelContext.prototype.constructor = SwitchLabelContext;

SwitchLabelContext.prototype.CASE = function() {
    return this.getToken(PlayScriptParser.CASE, 0);
};

SwitchLabelContext.prototype.COLON = function() {
    return this.getToken(PlayScriptParser.COLON, 0);
};

SwitchLabelContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

SwitchLabelContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

SwitchLabelContext.prototype.DEFAULT = function() {
    return this.getToken(PlayScriptParser.DEFAULT, 0);
};

SwitchLabelContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterSwitchLabel(this);
	}
};

SwitchLabelContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitSwitchLabel(this);
	}
};




PlayScriptParser.SwitchLabelContext = SwitchLabelContext;

PlayScriptParser.prototype.switchLabel = function() {

    var localctx = new SwitchLabelContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, PlayScriptParser.RULE_switchLabel);
    try {
        this.state = 139;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.CASE:
            this.enterOuterAlt(localctx, 1);
            this.state = 131;
            this.match(PlayScriptParser.CASE);
            this.state = 134;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
            switch(la_) {
            case 1:
                this.state = 132;
                localctx.constantExpression = this.expression(0);
                break;

            case 2:
                this.state = 133;
                localctx.enumConstantName = this.match(PlayScriptParser.IDENTIFIER);
                break;

            }
            this.state = 136;
            this.match(PlayScriptParser.COLON);
            break;
        case PlayScriptParser.DEFAULT:
            this.enterOuterAlt(localctx, 2);
            this.state = 137;
            this.match(PlayScriptParser.DEFAULT);
            this.state = 138;
            this.match(PlayScriptParser.COLON);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
};


function SwitchBlockStatementGroupContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_switchBlockStatementGroup;
    return this;
}

SwitchBlockStatementGroupContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SwitchBlockStatementGroupContext.prototype.constructor = SwitchBlockStatementGroupContext;

SwitchBlockStatementGroupContext.prototype.switchLabel = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SwitchLabelContext);
    } else {
        return this.getTypedRuleContext(SwitchLabelContext,i);
    }
};

SwitchBlockStatementGroupContext.prototype.blockStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockStatementContext);
    } else {
        return this.getTypedRuleContext(BlockStatementContext,i);
    }
};

SwitchBlockStatementGroupContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterSwitchBlockStatementGroup(this);
	}
};

SwitchBlockStatementGroupContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitSwitchBlockStatementGroup(this);
	}
};




PlayScriptParser.SwitchBlockStatementGroupContext = SwitchBlockStatementGroupContext;

PlayScriptParser.prototype.switchBlockStatementGroup = function() {

    var localctx = new SwitchBlockStatementGroupContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, PlayScriptParser.RULE_switchBlockStatementGroup);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 141;
            this.switchLabel();
            this.state = 144; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===PlayScriptParser.CASE || _la===PlayScriptParser.DEFAULT);
        this.state = 147; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 146;
            this.blockStatement();
            this.state = 149; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << PlayScriptParser.T__0) | (1 << PlayScriptParser.T__1) | (1 << PlayScriptParser.T__2) | (1 << PlayScriptParser.BREAK) | (1 << PlayScriptParser.DO) | (1 << PlayScriptParser.FOR) | (1 << PlayScriptParser.IF))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (PlayScriptParser.RETURN - 36)) | (1 << (PlayScriptParser.SUPER - 36)) | (1 << (PlayScriptParser.SWITCH - 36)) | (1 << (PlayScriptParser.THIS - 36)) | (1 << (PlayScriptParser.WHILE - 36)) | (1 << (PlayScriptParser.IntegerLiteral - 36)) | (1 << (PlayScriptParser.FloatingPointLiteral - 36)) | (1 << (PlayScriptParser.BooleanLiteral - 36)) | (1 << (PlayScriptParser.CharacterLiteral - 36)) | (1 << (PlayScriptParser.StringLiteral - 36)) | (1 << (PlayScriptParser.NullLiteral - 36)) | (1 << (PlayScriptParser.LPAREN - 36)) | (1 << (PlayScriptParser.LBRACE - 36)) | (1 << (PlayScriptParser.SEMI - 36)) | (1 << (PlayScriptParser.BANG - 36)) | (1 << (PlayScriptParser.TILDE - 36)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)) | (1 << (PlayScriptParser.IDENTIFIER - 75)))) !== 0));
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
};


function StatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_statement;
    this.blockLabel = null; // BlockContext
    this.statementExpression = null; // ExpressionContext
    return this;
}

StatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementContext.prototype.constructor = StatementContext;

StatementContext.prototype.block = function() {
    return this.getTypedRuleContext(BlockContext,0);
};

StatementContext.prototype.IF = function() {
    return this.getToken(PlayScriptParser.IF, 0);
};

StatementContext.prototype.parExpression = function() {
    return this.getTypedRuleContext(ParExpressionContext,0);
};

StatementContext.prototype.statement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(StatementContext);
    } else {
        return this.getTypedRuleContext(StatementContext,i);
    }
};

StatementContext.prototype.ELSE = function() {
    return this.getToken(PlayScriptParser.ELSE, 0);
};

StatementContext.prototype.FOR = function() {
    return this.getToken(PlayScriptParser.FOR, 0);
};

StatementContext.prototype.LPAREN = function() {
    return this.getToken(PlayScriptParser.LPAREN, 0);
};

StatementContext.prototype.forControl = function() {
    return this.getTypedRuleContext(ForControlContext,0);
};

StatementContext.prototype.RPAREN = function() {
    return this.getToken(PlayScriptParser.RPAREN, 0);
};

StatementContext.prototype.WHILE = function() {
    return this.getToken(PlayScriptParser.WHILE, 0);
};

StatementContext.prototype.DO = function() {
    return this.getToken(PlayScriptParser.DO, 0);
};

StatementContext.prototype.SEMI = function() {
    return this.getToken(PlayScriptParser.SEMI, 0);
};

StatementContext.prototype.SWITCH = function() {
    return this.getToken(PlayScriptParser.SWITCH, 0);
};

StatementContext.prototype.LBRACE = function() {
    return this.getToken(PlayScriptParser.LBRACE, 0);
};

StatementContext.prototype.RBRACE = function() {
    return this.getToken(PlayScriptParser.RBRACE, 0);
};

StatementContext.prototype.switchBlockStatementGroup = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SwitchBlockStatementGroupContext);
    } else {
        return this.getTypedRuleContext(SwitchBlockStatementGroupContext,i);
    }
};

StatementContext.prototype.switchLabel = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SwitchLabelContext);
    } else {
        return this.getTypedRuleContext(SwitchLabelContext,i);
    }
};

StatementContext.prototype.RETURN = function() {
    return this.getToken(PlayScriptParser.RETURN, 0);
};

StatementContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

StatementContext.prototype.BREAK = function() {
    return this.getToken(PlayScriptParser.BREAK, 0);
};

StatementContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

StatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterStatement(this);
	}
};

StatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitStatement(this);
	}
};




PlayScriptParser.StatementContext = StatementContext;

PlayScriptParser.prototype.statement = function() {

    var localctx = new StatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, PlayScriptParser.RULE_statement);
    var _la = 0; // Token type
    try {
        this.state = 206;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.LBRACE:
            this.enterOuterAlt(localctx, 1);
            this.state = 151;
            localctx.blockLabel = this.block();
            break;
        case PlayScriptParser.IF:
            this.enterOuterAlt(localctx, 2);
            this.state = 152;
            this.match(PlayScriptParser.IF);
            this.state = 153;
            this.parExpression();
            this.state = 154;
            this.statement();
            this.state = 157;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
            if(la_===1) {
                this.state = 155;
                this.match(PlayScriptParser.ELSE);
                this.state = 156;
                this.statement();

            }
            break;
        case PlayScriptParser.FOR:
            this.enterOuterAlt(localctx, 3);
            this.state = 159;
            this.match(PlayScriptParser.FOR);
            this.state = 160;
            this.match(PlayScriptParser.LPAREN);
            this.state = 161;
            this.forControl();
            this.state = 162;
            this.match(PlayScriptParser.RPAREN);
            this.state = 163;
            this.statement();
            break;
        case PlayScriptParser.WHILE:
            this.enterOuterAlt(localctx, 4);
            this.state = 165;
            this.match(PlayScriptParser.WHILE);
            this.state = 166;
            this.parExpression();
            this.state = 167;
            this.statement();
            break;
        case PlayScriptParser.DO:
            this.enterOuterAlt(localctx, 5);
            this.state = 169;
            this.match(PlayScriptParser.DO);
            this.state = 170;
            this.statement();
            this.state = 171;
            this.match(PlayScriptParser.WHILE);
            this.state = 172;
            this.parExpression();
            this.state = 173;
            this.match(PlayScriptParser.SEMI);
            break;
        case PlayScriptParser.SWITCH:
            this.enterOuterAlt(localctx, 6);
            this.state = 175;
            this.match(PlayScriptParser.SWITCH);
            this.state = 176;
            this.parExpression();
            this.state = 177;
            this.match(PlayScriptParser.LBRACE);
            this.state = 181;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 178;
                    this.switchBlockStatementGroup(); 
                }
                this.state = 183;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
            }

            this.state = 187;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PlayScriptParser.CASE || _la===PlayScriptParser.DEFAULT) {
                this.state = 184;
                this.switchLabel();
                this.state = 189;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 190;
            this.match(PlayScriptParser.RBRACE);
            break;
        case PlayScriptParser.RETURN:
            this.enterOuterAlt(localctx, 7);
            this.state = 192;
            this.match(PlayScriptParser.RETURN);
            this.state = 194;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (PlayScriptParser.SUPER - 38)) | (1 << (PlayScriptParser.THIS - 38)) | (1 << (PlayScriptParser.IntegerLiteral - 38)) | (1 << (PlayScriptParser.FloatingPointLiteral - 38)) | (1 << (PlayScriptParser.BooleanLiteral - 38)) | (1 << (PlayScriptParser.CharacterLiteral - 38)) | (1 << (PlayScriptParser.StringLiteral - 38)) | (1 << (PlayScriptParser.NullLiteral - 38)) | (1 << (PlayScriptParser.LPAREN - 38)) | (1 << (PlayScriptParser.BANG - 38)) | (1 << (PlayScriptParser.TILDE - 38)))) !== 0) || ((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)) | (1 << (PlayScriptParser.IDENTIFIER - 75)))) !== 0)) {
                this.state = 193;
                this.expression(0);
            }

            this.state = 196;
            this.match(PlayScriptParser.SEMI);
            break;
        case PlayScriptParser.BREAK:
            this.enterOuterAlt(localctx, 8);
            this.state = 197;
            this.match(PlayScriptParser.BREAK);
            this.state = 199;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===PlayScriptParser.IDENTIFIER) {
                this.state = 198;
                this.match(PlayScriptParser.IDENTIFIER);
            }

            this.state = 201;
            this.match(PlayScriptParser.SEMI);
            break;
        case PlayScriptParser.SEMI:
            this.enterOuterAlt(localctx, 9);
            this.state = 202;
            this.match(PlayScriptParser.SEMI);
            break;
        case PlayScriptParser.SUPER:
        case PlayScriptParser.THIS:
        case PlayScriptParser.IntegerLiteral:
        case PlayScriptParser.FloatingPointLiteral:
        case PlayScriptParser.BooleanLiteral:
        case PlayScriptParser.CharacterLiteral:
        case PlayScriptParser.StringLiteral:
        case PlayScriptParser.NullLiteral:
        case PlayScriptParser.LPAREN:
        case PlayScriptParser.BANG:
        case PlayScriptParser.TILDE:
        case PlayScriptParser.INC:
        case PlayScriptParser.DEC:
        case PlayScriptParser.ADD:
        case PlayScriptParser.SUB:
        case PlayScriptParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 10);
            this.state = 203;
            localctx.statementExpression = this.expression(0);
            this.state = 204;
            this.match(PlayScriptParser.SEMI);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_expression;
    this.prefix = null; // Token
    this.bop = null; // Token
    this.postfix = null; // Token
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.ADD = function() {
    return this.getToken(PlayScriptParser.ADD, 0);
};

ExpressionContext.prototype.SUB = function() {
    return this.getToken(PlayScriptParser.SUB, 0);
};

ExpressionContext.prototype.INC = function() {
    return this.getToken(PlayScriptParser.INC, 0);
};

ExpressionContext.prototype.DEC = function() {
    return this.getToken(PlayScriptParser.DEC, 0);
};

ExpressionContext.prototype.TILDE = function() {
    return this.getToken(PlayScriptParser.TILDE, 0);
};

ExpressionContext.prototype.BANG = function() {
    return this.getToken(PlayScriptParser.BANG, 0);
};

ExpressionContext.prototype.MUL = function() {
    return this.getToken(PlayScriptParser.MUL, 0);
};

ExpressionContext.prototype.DIV = function() {
    return this.getToken(PlayScriptParser.DIV, 0);
};

ExpressionContext.prototype.MOD = function() {
    return this.getToken(PlayScriptParser.MOD, 0);
};

ExpressionContext.prototype.LT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.LT);
    } else {
        return this.getToken(PlayScriptParser.LT, i);
    }
};


ExpressionContext.prototype.GT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.GT);
    } else {
        return this.getToken(PlayScriptParser.GT, i);
    }
};


ExpressionContext.prototype.LE = function() {
    return this.getToken(PlayScriptParser.LE, 0);
};

ExpressionContext.prototype.GE = function() {
    return this.getToken(PlayScriptParser.GE, 0);
};

ExpressionContext.prototype.EQUAL = function() {
    return this.getToken(PlayScriptParser.EQUAL, 0);
};

ExpressionContext.prototype.NOTEQUAL = function() {
    return this.getToken(PlayScriptParser.NOTEQUAL, 0);
};

ExpressionContext.prototype.BITAND = function() {
    return this.getToken(PlayScriptParser.BITAND, 0);
};

ExpressionContext.prototype.CARET = function() {
    return this.getToken(PlayScriptParser.CARET, 0);
};

ExpressionContext.prototype.BITOR = function() {
    return this.getToken(PlayScriptParser.BITOR, 0);
};

ExpressionContext.prototype.AND = function() {
    return this.getToken(PlayScriptParser.AND, 0);
};

ExpressionContext.prototype.OR = function() {
    return this.getToken(PlayScriptParser.OR, 0);
};

ExpressionContext.prototype.COLON = function() {
    return this.getToken(PlayScriptParser.COLON, 0);
};

ExpressionContext.prototype.QUESTION = function() {
    return this.getToken(PlayScriptParser.QUESTION, 0);
};

ExpressionContext.prototype.ASSIGN = function() {
    return this.getToken(PlayScriptParser.ASSIGN, 0);
};

ExpressionContext.prototype.ADD_ASSIGN = function() {
    return this.getToken(PlayScriptParser.ADD_ASSIGN, 0);
};

ExpressionContext.prototype.SUB_ASSIGN = function() {
    return this.getToken(PlayScriptParser.SUB_ASSIGN, 0);
};

ExpressionContext.prototype.MUL_ASSIGN = function() {
    return this.getToken(PlayScriptParser.MUL_ASSIGN, 0);
};

ExpressionContext.prototype.DIV_ASSIGN = function() {
    return this.getToken(PlayScriptParser.DIV_ASSIGN, 0);
};

ExpressionContext.prototype.AND_ASSIGN = function() {
    return this.getToken(PlayScriptParser.AND_ASSIGN, 0);
};

ExpressionContext.prototype.OR_ASSIGN = function() {
    return this.getToken(PlayScriptParser.OR_ASSIGN, 0);
};

ExpressionContext.prototype.XOR_ASSIGN = function() {
    return this.getToken(PlayScriptParser.XOR_ASSIGN, 0);
};

ExpressionContext.prototype.RSHIFT_ASSIGN = function() {
    return this.getToken(PlayScriptParser.RSHIFT_ASSIGN, 0);
};

ExpressionContext.prototype.URSHIFT_ASSIGN = function() {
    return this.getToken(PlayScriptParser.URSHIFT_ASSIGN, 0);
};

ExpressionContext.prototype.LSHIFT_ASSIGN = function() {
    return this.getToken(PlayScriptParser.LSHIFT_ASSIGN, 0);
};

ExpressionContext.prototype.MOD_ASSIGN = function() {
    return this.getToken(PlayScriptParser.MOD_ASSIGN, 0);
};

ExpressionContext.prototype.DOT = function() {
    return this.getToken(PlayScriptParser.DOT, 0);
};

ExpressionContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

ExpressionContext.prototype.THIS = function() {
    return this.getToken(PlayScriptParser.THIS, 0);
};

ExpressionContext.prototype.LBRACK = function() {
    return this.getToken(PlayScriptParser.LBRACK, 0);
};

ExpressionContext.prototype.RBRACK = function() {
    return this.getToken(PlayScriptParser.RBRACK, 0);
};

ExpressionContext.prototype.typeType = function() {
    return this.getTypedRuleContext(TypeTypeContext,0);
};

ExpressionContext.prototype.INSTANCEOF = function() {
    return this.getToken(PlayScriptParser.INSTANCEOF, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitExpression(this);
	}
};



PlayScriptParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 34;
    this.enterRecursionRule(localctx, 34, PlayScriptParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 214;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.SUPER:
        case PlayScriptParser.THIS:
        case PlayScriptParser.IntegerLiteral:
        case PlayScriptParser.FloatingPointLiteral:
        case PlayScriptParser.BooleanLiteral:
        case PlayScriptParser.CharacterLiteral:
        case PlayScriptParser.StringLiteral:
        case PlayScriptParser.NullLiteral:
        case PlayScriptParser.LPAREN:
        case PlayScriptParser.IDENTIFIER:
            this.state = 209;
            this.primary();
            break;
        case PlayScriptParser.INC:
        case PlayScriptParser.DEC:
        case PlayScriptParser.ADD:
        case PlayScriptParser.SUB:
            this.state = 210;
            localctx.prefix = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(((((_la - 75)) & ~0x1f) == 0 && ((1 << (_la - 75)) & ((1 << (PlayScriptParser.INC - 75)) | (1 << (PlayScriptParser.DEC - 75)) | (1 << (PlayScriptParser.ADD - 75)) | (1 << (PlayScriptParser.SUB - 75)))) !== 0))) {
                localctx.prefix = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 211;
            this.expression(15);
            break;
        case PlayScriptParser.BANG:
        case PlayScriptParser.TILDE:
            this.state = 212;
            localctx.prefix = this._input.LT(1);
            _la = this._input.LA(1);
            if(!(_la===PlayScriptParser.BANG || _la===PlayScriptParser.TILDE)) {
                localctx.prefix = this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 213;
            this.expression(14);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 278;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 276;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 216;
                    if (!( this.precpred(this._ctx, 13))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
                    }
                    this.state = 217;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 79)) & ~0x1f) == 0 && ((1 << (_la - 79)) & ((1 << (PlayScriptParser.MUL - 79)) | (1 << (PlayScriptParser.DIV - 79)) | (1 << (PlayScriptParser.MOD - 79)))) !== 0))) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 218;
                    this.expression(14);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 219;
                    if (!( this.precpred(this._ctx, 12))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
                    }
                    this.state = 220;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===PlayScriptParser.ADD || _la===PlayScriptParser.SUB)) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 221;
                    this.expression(13);
                    break;

                case 3:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 222;
                    if (!( this.precpred(this._ctx, 11))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
                    }
                    this.state = 230;
                    this._errHandler.sync(this);
                    var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
                    switch(la_) {
                    case 1:
                        this.state = 223;
                        this.match(PlayScriptParser.LT);
                        this.state = 224;
                        this.match(PlayScriptParser.LT);
                        break;

                    case 2:
                        this.state = 225;
                        this.match(PlayScriptParser.GT);
                        this.state = 226;
                        this.match(PlayScriptParser.GT);
                        this.state = 227;
                        this.match(PlayScriptParser.GT);
                        break;

                    case 3:
                        this.state = 228;
                        this.match(PlayScriptParser.GT);
                        this.state = 229;
                        this.match(PlayScriptParser.GT);
                        break;

                    }
                    this.state = 232;
                    this.expression(12);
                    break;

                case 4:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 233;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 234;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 62)) & ~0x1f) == 0 && ((1 << (_la - 62)) & ((1 << (PlayScriptParser.GT - 62)) | (1 << (PlayScriptParser.LT - 62)) | (1 << (PlayScriptParser.LE - 62)) | (1 << (PlayScriptParser.GE - 62)))) !== 0))) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 235;
                    this.expression(11);
                    break;

                case 5:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 236;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 237;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===PlayScriptParser.EQUAL || _la===PlayScriptParser.NOTEQUAL)) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 238;
                    this.expression(9);
                    break;

                case 6:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 239;
                    if (!( this.precpred(this._ctx, 7))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
                    }
                    this.state = 240;
                    localctx.bop = this.match(PlayScriptParser.BITAND);
                    this.state = 241;
                    this.expression(8);
                    break;

                case 7:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 242;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 243;
                    localctx.bop = this.match(PlayScriptParser.CARET);
                    this.state = 244;
                    this.expression(7);
                    break;

                case 8:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 245;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 246;
                    localctx.bop = this.match(PlayScriptParser.BITOR);
                    this.state = 247;
                    this.expression(6);
                    break;

                case 9:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 248;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 249;
                    localctx.bop = this.match(PlayScriptParser.AND);
                    this.state = 250;
                    this.expression(5);
                    break;

                case 10:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 251;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 252;
                    localctx.bop = this.match(PlayScriptParser.OR);
                    this.state = 253;
                    this.expression(4);
                    break;

                case 11:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 254;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 255;
                    localctx.bop = this.match(PlayScriptParser.QUESTION);
                    this.state = 256;
                    this.expression(0);
                    this.state = 257;
                    this.match(PlayScriptParser.COLON);
                    this.state = 258;
                    this.expression(3);
                    break;

                case 12:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 260;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 261;
                    localctx.bop = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(((((_la - 61)) & ~0x1f) == 0 && ((1 << (_la - 61)) & ((1 << (PlayScriptParser.ASSIGN - 61)) | (1 << (PlayScriptParser.ADD_ASSIGN - 61)) | (1 << (PlayScriptParser.SUB_ASSIGN - 61)) | (1 << (PlayScriptParser.MUL_ASSIGN - 61)) | (1 << (PlayScriptParser.DIV_ASSIGN - 61)) | (1 << (PlayScriptParser.AND_ASSIGN - 61)) | (1 << (PlayScriptParser.OR_ASSIGN - 61)) | (1 << (PlayScriptParser.XOR_ASSIGN - 61)) | (1 << (PlayScriptParser.MOD_ASSIGN - 61)))) !== 0) || ((((_la - 93)) & ~0x1f) == 0 && ((1 << (_la - 93)) & ((1 << (PlayScriptParser.LSHIFT_ASSIGN - 93)) | (1 << (PlayScriptParser.RSHIFT_ASSIGN - 93)) | (1 << (PlayScriptParser.URSHIFT_ASSIGN - 93)))) !== 0))) {
                        localctx.bop = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 262;
                    this.expression(1);
                    break;

                case 13:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 263;
                    if (!( this.precpred(this._ctx, 18))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
                    }
                    this.state = 264;
                    localctx.bop = this.match(PlayScriptParser.DOT);
                    this.state = 265;
                    _la = this._input.LA(1);
                    if(!(_la===PlayScriptParser.THIS || _la===PlayScriptParser.IDENTIFIER)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    break;

                case 14:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 266;
                    if (!( this.precpred(this._ctx, 17))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
                    }
                    this.state = 267;
                    this.match(PlayScriptParser.LBRACK);
                    this.state = 268;
                    this.expression(0);
                    this.state = 269;
                    this.match(PlayScriptParser.RBRACK);
                    break;

                case 15:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 271;
                    if (!( this.precpred(this._ctx, 16))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
                    }
                    this.state = 272;
                    localctx.postfix = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===PlayScriptParser.INC || _la===PlayScriptParser.DEC)) {
                        localctx.postfix = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    break;

                case 16:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, PlayScriptParser.RULE_expression);
                    this.state = 273;
                    if (!( this.precpred(this._ctx, 9))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
                    }
                    this.state = 274;
                    localctx.bop = this.match(PlayScriptParser.INSTANCEOF);
                    this.state = 275;
                    this.typeType();
                    break;

                } 
            }
            this.state = 280;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
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
};


function ExpressionListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_expressionList;
    return this;
}

ExpressionListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionListContext.prototype.constructor = ExpressionListContext;

ExpressionListContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionListContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.COMMA);
    } else {
        return this.getToken(PlayScriptParser.COMMA, i);
    }
};


ExpressionListContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterExpressionList(this);
	}
};

ExpressionListContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitExpressionList(this);
	}
};




PlayScriptParser.ExpressionListContext = ExpressionListContext;

PlayScriptParser.prototype.expressionList = function() {

    var localctx = new ExpressionListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, PlayScriptParser.RULE_expressionList);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 281;
        this.expression(0);
        this.state = 286;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===PlayScriptParser.COMMA) {
            this.state = 282;
            this.match(PlayScriptParser.COMMA);
            this.state = 283;
            this.expression(0);
            this.state = 288;
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
};


function PrimaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_primary;
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;

PrimaryContext.prototype.LPAREN = function() {
    return this.getToken(PlayScriptParser.LPAREN, 0);
};

PrimaryContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

PrimaryContext.prototype.RPAREN = function() {
    return this.getToken(PlayScriptParser.RPAREN, 0);
};

PrimaryContext.prototype.THIS = function() {
    return this.getToken(PlayScriptParser.THIS, 0);
};

PrimaryContext.prototype.SUPER = function() {
    return this.getToken(PlayScriptParser.SUPER, 0);
};

PrimaryContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

PrimaryContext.prototype.IDENTIFIER = function() {
    return this.getToken(PlayScriptParser.IDENTIFIER, 0);
};

PrimaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterPrimary(this);
	}
};

PrimaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitPrimary(this);
	}
};




PlayScriptParser.PrimaryContext = PrimaryContext;

PlayScriptParser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, PlayScriptParser.RULE_primary);
    try {
        this.state = 297;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case PlayScriptParser.LPAREN:
            this.enterOuterAlt(localctx, 1);
            this.state = 289;
            this.match(PlayScriptParser.LPAREN);
            this.state = 290;
            this.expression(0);
            this.state = 291;
            this.match(PlayScriptParser.RPAREN);
            break;
        case PlayScriptParser.THIS:
            this.enterOuterAlt(localctx, 2);
            this.state = 293;
            this.match(PlayScriptParser.THIS);
            break;
        case PlayScriptParser.SUPER:
            this.enterOuterAlt(localctx, 3);
            this.state = 294;
            this.match(PlayScriptParser.SUPER);
            break;
        case PlayScriptParser.IntegerLiteral:
        case PlayScriptParser.FloatingPointLiteral:
        case PlayScriptParser.BooleanLiteral:
        case PlayScriptParser.CharacterLiteral:
        case PlayScriptParser.StringLiteral:
        case PlayScriptParser.NullLiteral:
            this.enterOuterAlt(localctx, 4);
            this.state = 295;
            this.literal();
            break;
        case PlayScriptParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 5);
            this.state = 296;
            this.match(PlayScriptParser.IDENTIFIER);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
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
};


function TypeTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PlayScriptParser.RULE_typeType;
    return this;
}

TypeTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeTypeContext.prototype.constructor = TypeTypeContext;

TypeTypeContext.prototype.primitiveType = function() {
    return this.getTypedRuleContext(PrimitiveTypeContext,0);
};

TypeTypeContext.prototype.LBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.LBRACK);
    } else {
        return this.getToken(PlayScriptParser.LBRACK, i);
    }
};


TypeTypeContext.prototype.RBRACK = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PlayScriptParser.RBRACK);
    } else {
        return this.getToken(PlayScriptParser.RBRACK, i);
    }
};


TypeTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.enterTypeType(this);
	}
};

TypeTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof PlayScriptListener ) {
        listener.exitTypeType(this);
	}
};




PlayScriptParser.TypeTypeContext = TypeTypeContext;

PlayScriptParser.prototype.typeType = function() {

    var localctx = new TypeTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, PlayScriptParser.RULE_typeType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 299;
        this.primitiveType();
        this.state = 304;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 300;
                this.match(PlayScriptParser.LBRACK);
                this.state = 301;
                this.match(PlayScriptParser.RBRACK); 
            }
            this.state = 306;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
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
};


PlayScriptParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 17:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

PlayScriptParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);
		case 1:
			return this.precpred(this._ctx, 12);
		case 2:
			return this.precpred(this._ctx, 11);
		case 3:
			return this.precpred(this._ctx, 10);
		case 4:
			return this.precpred(this._ctx, 8);
		case 5:
			return this.precpred(this._ctx, 7);
		case 6:
			return this.precpred(this._ctx, 6);
		case 7:
			return this.precpred(this._ctx, 5);
		case 8:
			return this.precpred(this._ctx, 4);
		case 9:
			return this.precpred(this._ctx, 3);
		case 10:
			return this.precpred(this._ctx, 2);
		case 11:
			return this.precpred(this._ctx, 1);
		case 12:
			return this.precpred(this._ctx, 18);
		case 13:
			return this.precpred(this._ctx, 17);
		case 14:
			return this.precpred(this._ctx, 16);
		case 15:
			return this.precpred(this._ctx, 9);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.PlayScriptParser = PlayScriptParser;
