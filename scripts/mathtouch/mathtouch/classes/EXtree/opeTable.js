MathTOUCH.Operator = function(tp,exc,tw,mw,ts,mid,at){
    var _opeType=tp;
    var _EXcode=exc;
    var _TexWord=tw;
    var _MathMLWord=mw;
    var _TexSample=ts;
    var _mathOID=mid;
    var _algType=at;

    this.getOpeType = function(){
        return _opeType;
    }
    
    this.setOpeType = function(v){
        _opeType = v;
    }

    
    this.getEXcode = function(){
        return _EXcode;
    }
    
    this.setEXcode = function(v){
        _EXcode = v;
    }
    
    this.getTexWord = function(){
        return _TexWord;
    }
    
    this.setTexWord = function(v){
        _TexWord = v;
    }
    
    this.getMathMLWord = function(){
        return _MathMLWord;
    }
    
    this.setMathMLWord = function(v){
        _MathMLWord = v;
    }
    
    this.getTexSample = function(){
        return _TexSample;
    }
    
    this.setTexSample = function(v){
        _TexSample = v;
    }
    
    this.getMathOID = function(){
        return _mathOID;
    }
    
    this.setMathOID = function(v){
        _mathOID = v;
    }
    
    this.getAlgType = function(){
        return _algType;
    }
    
    this.setAlgType = function(v){
        _algType = v;
    }
};

MathTOUCH.opeTable = function(){
    
    var _table={
        /*Invisible*/" ":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C0 "," ","&InvisibleTimes;","{\\Box_1} {\\Box_2}",0,50)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C1^","^{","msup","{\\Box_1}^{{\\Box_2}}",1,22)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C2_^","_{}^{}","msubsup","{\\Box_1}_{{\\Box_2}}^{{\\Box_3}}",2,26)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C3_","_{","msub","{\\Box_1}_{{\\Box_2}}",3,23)
        ], "!":[ new MathTOUCH.Operator(    MathTOUCH.OP1A,"A0!","!","!","{\\Box_1}!",4,11)
        , new MathTOUCH.Operator(    MathTOUCH.OP1A,"A3?","?","?","{\\Box_1}?",5,11)
        ], "\"":[ new MathTOUCH.Operator(    MathTOUCH.OP1A,"A0\"","\"","\"","{\\Box_1}\"",6,11)
        ], "#":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0#","\\#","#","\\#{\\Box_1}",7,31)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0forall","\\forall","&ForAll;","\\forall {\\Box_1}",8,31)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0exists","\\exists","&Exists;","\\exists {\\Box_1}",9,31)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0at","@","@","@{\\Box_1}",10,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP1A,"A1#","^{#}","#","{\\Box_1}^{#}",11,11)
        ], "$":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0$","\\$","$","\\$ {\\Box_1}",12,31)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0pounds","\\pounds","&#x00A3;","\\pounds {\\Box_1}",13,31)
        ], "%":[ new MathTOUCH.Operator(    MathTOUCH.OP1A,"A3%","\\%","%","{\\Box_1}\\%",14,11)
        ], "&":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6&","\\&","&amp;","\\&",15,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6wedge","\\wedge","&Wedge;","\\wedge",16,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6cap","\\cap","&#x2229;","\\cap",17,70)
        ], "'":[ new MathTOUCH.Operator(    MathTOUCH.OP1A,"A0'","'","'","{\\Box_1}'",18,11)
        , new MathTOUCH.Operator(    MathTOUCH.OP1A,"A1circ","^{\\circ}","&#x25CB;","{\\Box_1}^{\\circ}",19,11)
        ], "(":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B3()","\\left(,\\right.","(,)","\\left({\\Box_1}\\right.",20,503)
        ], ")":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B5()","\\left.,\\right)","(,)","\\left.{\\Box_1}\\right)",21,504)
        ], "*":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6*","*","*","*",22,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6cdot","\\cdot","&#x2219;","\\cdot",23,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6times","\\times","&#x00D7;","\\times",24,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0*","*","*","*{\\Box_1}",25,32)
        ], "+":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6+","+","+","+",26,200)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0+","+","+","+{\\Box_1}",27,100)
        ], ",":[ new MathTOUCH.Operator(MathTOUCH.OP2C,"Ccomma",",",",","{\\Box_1},{\\Box_2}",28,502)
        ], "-":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6-","-","-","-",29,200)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0-","-","-","-{\\Box_1}",30,100)
        ], ".":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C..",".",".",".",31,27)
        ], "/":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6/","/","/","/",33,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C7frac","\\frac","mfrac","\\frac{{\\Box_1}}{{\\Box_2}}",34,28)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6div","\\div","&#x00F7;","\\div",35,70)
        ], ":":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6:",":",":",":",36,250)
        ], ";":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6;",";",";","{\\Box_1};{\\Box_2}",37,410)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C,thinspace","\\,","mspace width=\"0.15em\"/","{\\Box_1}\\, y_{.15}",38,410)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C:medspace","\\:","mspace width=\"0.3em\"/","{\\Box_1}\\: y_{.3}",39,410)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C;thickspace","\\;","mspace width=\"0.45em\"/","{\\Box_1}\\; y_{.45}",40,410)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C!negthinspace","\\!","mspace width=\"-0.15em\"/","{\\Box_1}\\! y_{-.15}",41,410)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C>quad","\\quad","mspace width=\"1em\"/","{\\Box_1}\\quad y_{1}",42,410)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"Cqquad","\\qquad","mspace width=\"2em\"/","{\\Box_1}\\qquad y_{2}",43,410)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C-negmedspace","\\negmedspace","mspace width=\"-0.3em\"/","{\\Box_1}\\negmedspace y_{-.3}",44,410)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C<negthickspace","\\negthickspace","mspace width=\"-0.45em\"/","{\\Box_1}\\negthickspace y_{-.45}",45,410)
        ], "<":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6<","<","&lt;","<",46,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6in","\\in","&Element;","\\in",47,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6subset","\\subset","&#x2282;","\\subset",48,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0angle","\\angle","&#x2220;","\\angle {\\Box_1}",49,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0triangleup","\\triangle","&#x2206;","\\triangle {\\Box_1}",50,32)
        ], "=":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6=","=","=","=",51,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6equiv","\\equiv","&#x2261;","\\equiv",52,300)
        ], ">":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6>",">",">",">",53,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6ni","\\ni","&ReverseElement;","\\ni",54,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6supset","\\supset","&#x2283;","\\supset",55,300)
        ], "?":[ new MathTOUCH.Operator(    MathTOUCH.OP1A,"A3?","?","?","{\\Box_1}?",56,11)
        ], "@":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0at","@","@","@",57,32)
        ], "[":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B3[]","\\left[,\\right.","[,]","\\left[ \\Box_1 \\right.",58,503)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B3|1","\\left|,\\right.","|,|","\\left| {\\Box_1} \\right.",59,503)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B3|2","\\left\\|,\\right.","||,||","\\left\\| {\\Box_1} \\right.",60,503)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B3lf","\\left\\lfloor,\\right.","&LeftFloor;,&RightFloor;","\\left\\lfloor {\\Box_1} \\right.",61,503)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B3lc","\\left\\lceil,\\right.","&LeftCeiling;,&RightCeiling;","\\left\\lceil {\\Box_1} \\right.",62,503)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B3//","\\left/,\\right.","/,/","\\left/ {\\Box_1} \\right.",63,503)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B3bs","\\left\\backslash,\\right.","&Backslash;,&Backslash;","\\left\\backslash {\\Box_1} \\right.",64,503)
        ], "\\":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6backslash","\\backslash","&Backslash;","\\backslash",65,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C9frac","\\frac","mfrac","\\frac{{\\Box_2}}{{\\Box_1}}",66,28)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0\\","\\\\","&Backslash;","\\backslash {\\Box_1}",67,32)
        ], "]":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B5[]","\\left.,\\right]","[,]","\\left. {\\Box_1} \\right]",68,504)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B5|1","\\left.,\\right|","|,|","\\left. {\\Box_1} \\right|",69,504)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B5|2","\\left.,\\right\\|","||,||","\\left. {\\Box_1} \\right\\|",70,504)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B5rf","\\left.,\\right\\rfloor","&LeftFloor;,&RightFloor;","\\left. {\\Box_1} \\right\\rfloor",71,504)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B5rc","\\left.,\\right\\rceil","&LeftCeiling;,&RightCeiling;","\\left. {\\Box_1} \\right\\rceil",72,504)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B5//","\\left.,\\right/","/,/","\\left. {\\Box_1} \\right/",73,504)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B5bs","\\left.,\\right\\backslash","&Backslash;,&Backslash;","\\left. {\\Box_1} \\right\\backslash",74,504)
        ], "^":[ new MathTOUCH.Operator(MathTOUCH.OP2C,"C1^","^{","msup","{\\Box_1}^{{\\Box_2}}",75,22)
        ], "_":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C3_","_{","msub","{\\Box_1}_{{\\Box_2}}",76,23)
        ], "`":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0`","`","`","`{\\Box_1}",77,31)
        ], "{":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B3{}","\\left\\{,\\right.","{,}","\\left\\{ {\\Box_1} \\right.",78,503)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B3<>","\\left\\langle,\\right.","&#x3008;,&#x3009;","\\left\\langle {\\Box_1} \\right.",79,503)
        ], "|":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6|","|","|","|",80,405)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6mid","\\mid","&#x2223;","\\mid",81,405)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6perp","\\perp","&#x22A5;","\\perp",82,300)
        ], "}":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B5{}","\\left.,\\right\\}","{,}","\\left. {\\Box_1} \\right\\}",83,504)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B5<>","\\left.,\\right\\rangle","&#x3008;,&#x3009;","\\left. {\\Box_1} \\right\\rangle",84,504)
        ], "~":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0~","\\sim","&#x223C;","\\sim {\\Box_1}",85,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pewidetilde","\\widetilde","&DiacriticalTilde;","\\widetilde{{\\Box_1} {\\Box_2}}",87,13)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6sim","\\sim","&#x223C;","\\sim",88,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6propto","\\propto","&#x221D;","\\propto",89,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6wr","\\wr","&#x2240;","\\wr",90,406)
        ], "+-":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6pm","\\pm","&PlusMinus;","\\pm",91,200)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0pm","\\pm","&PlusMinus;","\\pm {\\Box_1}",92,100)
        ], "-+":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6mp","\\mp","&MinusPlus;","\\mp",93,200)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0mp","\\mp","&MinusPlus;","\\mp {\\Box_1}",94,100)
        ], "()":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1()","\\left(,\\right)","(,)","({\\Box_1})",95,12)
        ], "[]":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1[]","\\left[,\\right]","[,]","\\left[ \\Box_1 \\right]",96,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1|1","\\left|,\\right|","|,|","\\left| {\\Box_1} \\right|",97,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1|2","\\left\\|,\\right\\|","||,||","\\left\\| {\\Box_1} \\right\\|",98,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1lf","\\left\\lfloor,\\right\\rfloor","&LeftFloor;,&RightFloor;","\\left\\lfloor {\\Box_1} \\right\\rfloor",99,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1lc","\\left\\lceil,\\right\\rceil","&LeftCeiling;,&RightCeiling;","\\left\\lceil {\\Box_1} \\right\\rceil",100,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1//","\\left/,\\right/","/,/","\\left/ {\\Box_1} \\right/",101,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1bs","\\left\\backslash,\\right\\backslash","&Backslash;,&Backslash;","\\left\\backslash {\\Box_1} \\right\\backslash",102,12)
        ], "{}":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1{}","\\left\\{,\\right\\}","{,}","\\left\\{ {\\Box_1} \\right\\}",103,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1<>","\\left\\langle,\\right\\rangle","&#x3008;,&#x3009;","\\left\\langle {\\Box_1} \\right\\rangle",104,12)
        ], "(]":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1(]","\\left(,\\right]","(,]","({\\Box_1}]",105,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1(|","\\left(,\\right|","(,|","({\\Box_1}|",106,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1(2","\\left(,\\right\\|","(,||","({\\Box_1}\\|",107,12)
        ],"(}":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1(}","\\left(,\\right\\}","(,}","({\\Box_1}\\}",108,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1(>","\\left(,\\right\\rangle","(,&#x3009;","({\\Box_1}\\rangle",109,12)
        ], "[)":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1[)","\\left[,\\right)","[,)","\\left[ \\Box_1 \\right)",110,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1|)","\\left|,\\right)","|,)","\\left| \\Box_1 \\right)",111,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B12)","\\left\\|,\\right)","||,)","\\left\\| \\Box_1 \\right)",112,12)
        ],"[}":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1[>","\\left[,\\right\\rangle","[,&#x3009;","\\left[ \\Box_1 \\right\\rangle",113,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1|>","\\left|,\\right\\rangle","|,&#x3009;","\\left| \\Box_1 \\right\\rangle",114,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B12>","\\left\\|,\\right\\rangle","||,&#x3009;","\\left\\| \\Box_1 \\right\\rangle",115,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1[}","\\left[,\\right\\}","[,}","\\left[ \\Box_1 \\right\\}",116,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1|}","\\left|,\\right\\}","|,}","\\left| \\Box_1 \\right\\}",117,12)
        ],"{)":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1{)","\\left\\{,\\right)","{,)","\\left\\{ {\\Box_1} \\right)",118,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1<)","\\left\\langle,\\right)","&#x3008;,)","\\left\\langle {\\Box_1} \\right)",119,12)
        ], "{]":[ new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1<]","\\left\\langle,\\right]","&#x3008;,]","\\left\\langle {\\Box_1} \\right]",120,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1<|","\\left\\langle,\\right|","&#x3008;,|","\\left\\langle {\\Box_1} \\right|",121,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1<2","\\left\\langle,\\right\\|","&#x3008;,||","\\left\\langle {\\Box_1} \\right\\|",122,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1{]","\\left\\{,\\right]","{,]","\\left\\{ {\\Box_1} \\right]",123,12)
        , new MathTOUCH.Operator(    MathTOUCH.OP1B,"B1{|","\\left\\{,\\right|","{,|","\\left\\{ {\\Box_1} \\right|",124,12)
        ], "<=":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6leq","\\leq","&le;","\\leq",125,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6leqq","\\leqq","&#x2266;","\\leqq",126,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6subseteq","\\subseteq","&#x2286;","\\subseteq",127,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6sqsubseteq","\\sqsubseteq","&#x2292;","\\sqsubseteq",128,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6preceq","\\preceq","&#x227E;","\\preceq",129,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6unlhd","\\unlhd","&#x22B4;","\\unlhd",130,406)
        ], ">=":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6geq","\\geq","&#x2265;","\\geq",131,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6geqq","\\geqq","&#x2267;","\\geqq",132,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6supseteq","\\supseteq","&#x2287;","\\supseteq",133,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6sqsupseteq","\\sqsupseteq","&#x2291;","\\sqsupseteq",134,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6succeq","\\succeq","&SucceedsEqual;","\\succeq",135,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6unrhd","\\unrhd","&#x22B5;","\\unrhd",136,406)
        ], "/=":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6neq","\\neq","&#x2260;","\\neq",137,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not equiv","\\not\\equiv","&NotDoubleVerticalBar;","\\not\\equiv",138,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not sim","\\not\\sim","&NotTilde;","\\not\\sim",139,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not simeq","\\not\\simeq","&NotTildeEqual;","\\not\\simeq",140,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not approx","\\not\\approx","&NotTildeTilde;","\\not\\approx",141,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not cong","\\not\\cong","&NotTildeFullEqual;","\\not\\cong",142,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not asymp","\\not\\asymp","&NotTilde;","\\not\\asymp",143,300)
        ], "/<":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not in","\\not\\in","&NotElement;","\\not\\in",144,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not <","\\not<","&NotLess;","\\not<",145,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not leq","\\not\\leq","&NotLessEqual;","\\not\\leq",146,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not subset","\\not\\subset","&NotSubset;","\\not\\subset",147,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not subseteq","\\not\\subseteq","&NotSubsetEqual;","\\not\\subseteq",148,300)
        ], "/>":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not >","\\not>","&NotGreater;","\\not>",149,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not geq","\\not\\geq","&NotGreaterEqual;","\\not\\geq",150,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not ni","\\not\\ni","&NotReverseElement;","\\not\\ni",151,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not supset","\\not\\supset","&NotSuperset;","\\not\\supset",152,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6not supseteq","\\not\\supseteq","&NotSupersetEqual;","\\not\\supseteq",153,300)
        ], "<<":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6ll","\\ll","&LessLess;","\\ll",154,300)
        ], ">>":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6gg","\\gg","&GreaterGreater;","\\gg",155,300)
        ], "><":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6Join","\\Join","&#x22C8;","\\Join",156,300)
        ],"^+":[ new MathTOUCH.Operator(    MathTOUCH.OP1A,"A1+","^{+}","+","{\\Box_1}^{+}",157,11)
        , new MathTOUCH.Operator(    MathTOUCH.OP1A,"A1pm","^{\\pm}","&PlusMinus;","{\\Box_1}^{\\pm}",158,11)
        , new MathTOUCH.Operator(    MathTOUCH.OP1A,"A1dagger","^{\\dagger}","&#x2020;","{\\Box_1}^{\\dagger}",159,11)
        ],"^-":[ new MathTOUCH.Operator(    MathTOUCH.OP1A,"A1-","^{-}","-","{\\Box_1}^{-}",160,11)
        , new MathTOUCH.Operator(    MathTOUCH.OP1A,"A1mp","^{\\mp}","&MinusPlus;","{\\Box_1}^{\\mp}",161,11)
        ],"^*":[ new MathTOUCH.Operator(    MathTOUCH.OP1A,"A1*","^{*}","*","{\\Box_1}^{*}",162,11)
        , new MathTOUCH.Operator(    MathTOUCH.OP1A,"A1times","^{\\times}","&#x00D7;","{\\Box_1}^{\\times}",163,11)
        ],"~=":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6fallingdotseq","\\fallingdotseq","&#x2252;","\\fallingdotseq",164,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6cong","\\cong","&#x2245;","\\cong",165,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6approx","\\approx","&#x2248;","\\approx",166,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6simeq","\\simeq","&#x2243;","\\simeq",167,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6doteq","\\doteq","&#x2250;","\\doteq",168,300)
        ], "amalg":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6amalg","\\amalg","&#x2210;","\\amalg",169,70)
        ], "angle":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0angle","\\angle","&#x2220;","\\angle {\\Box_1}",170,32)
        ], "arcsin":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0arcsin","\\arcsin","arcsin","\\arcsin {\\Box_1}",171,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pasin","\\sin^{-1}","sin","\\sin^{-1} {\\Box_1}",172,32)
        ], "arccos":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0arccos","\\arccos","arccos","\\arccos {\\Box_1}",173,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pacos","\\cos^{-1}","cos","\\cos^{-1} {\\Box_1}",174,32)
        ], "arctan":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0arctan","\\arctan","arctan","\\arctan {\\Box_1}",175,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"Patan","\\tan^{-1}","tan","\\tan^{-1}{\\Box_1}",176,32)
        ], "arg":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0arg","\\arg","arg","\\arg {\\Box_1}",177,32)
        ], "asymp":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6asymp","\\asymp","&#x224D;","\\asymp",178,300)
        ], "backslash":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6backslash","\\backslash","&Backslash;","\\backslash",179,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C9frac","\\frac","mfrac","\\frac{{\\Box_2}}{{\\Box_1}}",180,28)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0\\","\\\\","&Backslash;","\\backslash {\\Box_1}",181,32)
        ], "because":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0because","\\because","&#x2235;","\\because {\\Box_1}",182,402)
        ], "bigcap":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pbbigcap","\\bigcap","&Cap;","\\bigcap {\\Box_1}",183,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q2bigcap","\\bigcap","&Cap;","\\bigcap_{{\\Box_1}}{\\Box_2}",184,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R0bigcap","\\bigcap","&Cap;","\\bigcap_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",185,36)
        ], "bigcup":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pbbigcup","\\bigcup","&Cup;","\\bigcup {\\Box_1}",186,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q2bigcup","\\bigcup","&Cup;","\\bigcup_{{\\Box_1}}{\\Box_2}",187,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R0bigcup","\\bigcup","&Cup;","\\bigcup_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",188,36)
        ], "bigodot":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pbbigodot","\\bigodot","&CircleDot;","\\bigodot {\\Box_1}",189,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q2bigodot","\\bigodot","&CircleDot;","\\bigodot_{{\\Box_1}}{\\Box_2}",190,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R0bigodot","\\bigodot","&CircleDot;","\\bigodot_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",191,36)
        ], "bigoplus":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pbbigoplus","\\bigoplus","&CirclePlus;","\\bigoplus {\\Box_1}",192,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q2bigoplus","\\bigoplus","&CirclePlus;","\\bigoplus_{{\\Box_1}}{\\Box_2}",193,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R0bigoplus","\\bigoplus","&CirclePlus;","\\bigoplus_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",194,36)
        ], "bigotimes":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pbbigotimes","\\bigotimes","&CircleTimes;","\\bigotimes {\\Box_1}",195,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q2bigotimes","\\bigotimes","&CircleTimes;","\\bigotimes_{{\\Box_1}}{\\Box_2}",196,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R0bigotimes","\\bigotimes","&CircleTimes;","\\bigotimes_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",197,36)
        ], "bigsqcup":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pbbigsqcup","\\bigsqcup","&SquareUnion;","\\bigsqcup {\\Box_1}",198,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q2bigsqcup","\\bigsqcup","&SquareUnion;","\\bigsqcup_{{\\Box_1}}{\\Box_2}",199,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R0bigsqcup","\\bigsqcup","&SquareUnion;","\\bigsqcup_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",200,36)
        ], "bigtriangledown":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6bigtriangledown","\\bigtriangledown","&#x25BD;","\\bigtriangledown",201,406)
        ], "bigtriangleup":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6bigtriangleup","\\bigtriangleup","&#x25B3;","\\bigtriangleup",202,406)
        ], "biguplus":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pbbiguplus","\\biguplus","&UnionPlus;","\\biguplus {\\Box_1}",203,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q2biguplus","\\biguplus","&UnionPlus;","\\biguplus_{{\\Box_1}}{\\Box_2}",204,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R0biguplus","\\biguplus","&UnionPlus;","\\biguplus_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",205,36)
        ], "bigvee":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pbbigvee","\\bigvee","&Vee;","\\bigvee {\\Box_1}",206,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q2bigvee","\\bigvee","&Vee;","\\bigvee_{{\\Box_1}}{\\Box_2}",207,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R0bigvee","\\bigvee","&Vee;","\\bigvee_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",208,36)
        ], "bigwedge":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pbbigwedge","\\bigwedge","&Wedge;","\\bigwedge {\\Box_1}",209,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q2bigwedge","\\bigwedge","&Wedge;","\\bigwedge_{{\\Box_1}}{\\Box_2}",210,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R0bigwedge","\\bigwedge","&Wedge;","\\bigwedge_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",211,36)
        ], "bmod":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6bmod","\\bmod","mod","\\bmod",212,70)
        ], "cap":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6cap","\\cap","&Cap;","\\cap",213,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6sqcap","\\sqcap","&SquareIntersection;","\\sqcap",214,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6frown","\\frown","&#x2040;","\\frown",215,70)
        ], "coprod":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pbcoprod","\\coprod","&Coproduct;","\\coprod {\\Box_1}",216,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q2coprod","\\coprod","&Coproduct;","\\coprod_{{\\Box_1}}{\\Box_2}",217,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R0coprod","\\coprod","&Coproduct;","\\coprod_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",218,36)
        ], "cos":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0cos","\\cos","cos","\\cos {\\Box_1}",219,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q3cos","\\cos","cos","\\cos^{{\\Box_1}}{\\Box_2}",220,34)
        ], "cos-1":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pacos","\\cos^{-1}","cos","\\cos^{-1}{\\Box_1}",221,32)
        ], "cosh":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0cosh","\\cosh","cosh","\\cosh {\\Box_1}",222,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q3cosh","\\cosh","cosh","\\cosh^{{\\Box_1}}{\\Box_2}",223,34)
        ], "cot":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0cot","\\cot","cot","\\cot {\\Box_1}",224,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q3cot","\\cot","cot","\\cot^{{\\Box_1}}{\\Box_2}",225,34)
        ], "coth":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0coth","\\coth","coth","\\coth {\\Box_1}",226,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q3coth","\\coth","coth","\\coth^{{\\Box_1}}{\\Box_2}",227,34)
        ], "csc":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0csc","\\csc","csc","\\csc {\\Box_1}",228,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q3csc","\\csc","csc","\\csc^{{\\Box_1}}{\\Box_2}",229,34)
        ], "cup":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6cup","\\cup","&Cup;","\\cup",230,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6uplus","\\uplus","&UnionPlus;","\\uplus",231,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6sqcup","\\sqcup","&SquareUnion;","\\sqcup",232,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6smile","\\smile","&#x203F;","\\smile",233,70)
        ], "dagger":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6dagger","\\dagger","&#x2020;","\\dagger",234,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6ddagger","\\ddagger","&#x2021;","\\ddagger",235,70)
        ], "dashv":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6dashv","\\dashv","&#x22A3;","\\dashv",236,300)
        ], "diamond":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6diamond","\\diamond","&#x25C7;","\\diamond",237,70)
        ], "deg":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0deg","\\deg","deg","\\deg {\\Box_1}",238,32)
        ], "det":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0det","\\det","det","\\det {\\Box_1}",239,32)
        ], "dim":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0dim","\\dim","dim","\\dim {\\Box_1}",240,32)
        ], "dot":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P3cdot","\\dot","&CenterDot;","\\dot{{\\Box_1}}",241,5)
        ], "exists":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0exists","\\exists","&Exists;","\\exists {\\Box_1}",242,31)
        ], "exp":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0exp","\\exp","exp","\\exp {\\Box_1}",243,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q3exp","\\exp","exp","\\exp",244,34)
        ], "fbox":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Piframebox","\\fbox","&UnderBar;","\\fbox{{\\Box_1}}",245,501)
        ], "forall":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0forall","\\forall","&ForAll;","\\forall {\\Box_1}",246,31)
        ], "gcd":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0gcd","\\gcd","gcd","\\gcd {\\Box_1}",247,32)
        ], "hat":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P2^","\\hat","&Hat;","\\hat{{\\Box_1}}",248,5)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pfwidehat","\\widehat","&Hat;","\\widehat{xy}",249,13)
        ], "hom":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0hom","\\hom","hom","\\hom {\\Box_1}",250,32)
        ], "integral":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P9int","\\int","&Integral;","\\int {\\Box_1}",251,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q0int","\\int","&Integral;","\\int_{{\\Box_1}}{\\Box_2}",252,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R1int","\\int","&Integral;","\\int_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",253,36)
        ], "ker":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0ker","\\ker","ker","\\ker {\\Box_1}",254,32)
        ], "left^":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C4left^","left^","mprescripts/","{}^{{\\Box_1}}{\\Box_2}",255,24)
        ], "left_":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C5left_","left_","mprescripts/","{}_{{\\Box_1}}{\\Box_2}",256,25)
        ], "leftarrow":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6leftarrow","\\leftarrow","&LeftArrow;","\\leftarrow",257,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6leftharpoonup","\\leftharpoonup","&UpperLeftArrow;","\\leftharpoonup",258,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6leftharpoondown","\\leftharpoondown","&LowerLeftArrow;","\\leftharpoondown",259,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6hookleftarrow","\\hookleftarrow","&#x21A9;","\\hookleftarrow",260,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6Leftarrow","\\Leftarrow","&DoubleLeftArrow;","\\Leftarrow",261,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6nwarrow","\\nwarrow","&#x2196;","\\nwarrow",262,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6downarrow","\\downarrow","&#x2193;","\\downarrow",263,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6swarrow","\\swarrow","&#x2199;","\\swarrow",264,407)
        ], "Leftarrow":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6Leftarrow","\\Leftarrow","&DoubleLeftArrow;","\\Leftarrow",265,407)
        ], "leftrightarrow":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6leftrightarrow","\\leftrightarrow","&LeftRightArrow;","\\leftrightarrow",266,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6Leftrightarrow","\\Leftrightarrow","&DoubleLeftRightArrow;","\\Leftrightarrow",267,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6updownarrow","\\updownarrow","&#x2195;","\\updownarrow",268,407)
        ], "Leftrightarrow":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6Leftrightarrow","\\Leftrightarrow","&DoubleLeftRightArrow;","\\Leftrightarrow",269,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6rightleftharpoons","\\rightleftharpoons","&RightArrowLeftArrow;","\\rightleftharpoons",270,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6Updownarrow","\\Updownarrow","&#x21D5;","\\Updownarrow",271,407)
        ], "lg":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0lg","\\lg","lg","\\lg {\\Box_1}",272,32)
        ], "lim":[ new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q4lim","\\lim_","lim","\\lim_{h\\rightarrow0} {\\Box_1}",273,35)
        ], "liminf":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0liminf","\\liminf","liminf","\\liminf {\\Box_1}",274,32)
        ], "limsup":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0limsup","\\limsup","limsup","\\limsup {\\Box_1}",275,32)
        ], "ln":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0ln","\\ln","ln","\\ln {\\Box_1}",276,32)
        ], "log":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0log","\\log","log","\\log {\\Box_1}",277,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q1log","\\log","log","\\log_{{\\Box_1}}{\\Box_2}",278,34)
        ], "max":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0max","\\max","max","\\max {\\Box_1}",279,32)
        ], "min":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0min","\\min","min","\\min {\\Box_1}",280,32)
        ], "mod":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6bmod","\\bmod","mod","\\bmod",281,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0pmod","\\pmod","mod","\\pmod {\\Box_1}",282,32)
        ], "models":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6models","\\models","&#x22A8;","\\models",283,300)
        ], "odot":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6odot","\\odot","&CircleDot;","\\odot",284,70)
        ], "oint":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P9oint","\\oint","&ContourIntegral;","\\oint {\\Box_1}",285,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q0oint","\\oint","&ContourIntegral;","\\oint_{{\\Box_1}}{\\Box_2}",286,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R1oint","\\oint","&ContourIntegral;","\\oint_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",287,36)
        ], "oplus":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6oplus","\\oplus","&#x2295;","\\oplus",288,70)
        ], "ominus":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6ominus","\\ominus","&CircleMinus;","\\ominus",289,70)
        ], "oslash":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6oslash","\\oslash","&#x2298;","\\oslash",290,70)
        ], "otimes":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6otimes","\\otimes","&CircleTimes;","\\otimes",291,70)
        ], "over":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P5overline","\\overline","&OverBar;","{\\overline {\\Box_1}}",292,501)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pgoverbrace","\\overbrace","&OverBrace;","\\overbrace{{\\Box_1}}",293,501)
        ], "parallel":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6parallel","\\parallel","&#x2016;","\\parallel",294,300)
        ], "pmod":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0pmod","\\pmod","mod","\\pmod {\\Box_1}",295,32)
        ], "Pr":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0Pr","\\Pr","Pr","\\Pr {\\Box_1}",296,32)
        ], "prec":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6prec","\\prec","&#x227A;","\\prec",297,300)
        ], "prod":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pbprod","\\prod","&Product;","\\prod {\\Box_1}",298,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q2prod","\\prod","&Product;","\\prod_{{\\Box_1}}{\\Box_2}",299,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R0prod","\\prod","&Product;","\\prod_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",300,36)
        ], "rightarrow":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6rightarrow","\\rightarrow","&RightArrow;","\\rightarrow",301,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6rightharpoonup","\\rightharpoonup","&UpperRightArrow;","\\rightharpoonup",302,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6rightharpoondown","\\rightharpoondown","&LowerRightArrow;","\\rightharpoondown",303,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6hookrightarrow","\\hookrightarrow","&#x21AA;","\\hookrightarrow",304,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6mapsto","\\mapsto","&RightTeeArrow;","\\mapsto",305,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6leadsto","\\leadsto","&#x219D;","\\leadsto",306,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6Rightarrow","\\Rightarrow","&DoubleRightArrow;","\\Rightarrow",307,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6uparrow","\\uparrow","&#x2191;","\\uparrow",308,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6nearrow","\\nearrow","&#x2197;","\\nearrow",309,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6searrow","\\searrow","&#x2198;","\\searrow",310,407)
        ], "Rightarrow":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6Rightarrow","\\Rightarrow","&DoubleRightArrow;","\\Rightarrow",311,407)
        ], "root":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P1sqrt","\\sqrt","msqrt","\\sqrt{{\\Box_1}}",312,14)
        , new MathTOUCH.Operator(MathTOUCH.OP2C,"C8sqrt","\\sqrt[","mroot","\\sqrt[{\\Box_1}]{{\\Box_2}}",313,21)
        ], "sec":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0sec","\\sec","sec","\\sec {\\Box_1}",314,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q3sec","\\sec","sec","\\sec^{{\\Box_1}}{\\Box_2}",315,34)
        ], "sin":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0sin","\\sin","sin","\\sin {\\Box_1}",316,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q3sin","\\sin","sin","\\sin^{{\\Box_1}}{\\Box_2}",317,34)
        ], "sin-1":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pasin","\\sin^{-1}","sin","\\sin^{-1}{\\Box_1}",318,32)
        ], "sinh":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0sinh","\\sinh","sinh","\\sinh {\\Box_1}",319,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q3sinh","\\sinh","sinh","\\sinh^{{\\Box_1}}{\\Box_2}",320,34)
        ], "sqrt":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C8sqrt","\\sqrt[","mroot","\\sqrt[{\\Box_1}]{{\\Box_2}}",321,21)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P1sqrt","\\sqrt","msqrt","\\sqrt{{\\Box_1}}",322,14)
        ], "sqsubset":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6sqsubset","\\sqsubset","&#x228F;","\\sqsubset",323,300)
        ], "sqsupset":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6sqsupset","\\sqsupset","&#x2290;","\\sqsupset",324,300)
        ], "star":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6star","\\star","&#x22C6;","\\star",325,70)
        ], "succ":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6succ","\\succ","&#x227B;","\\succ",326,300)
        ], "sum":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pbsum","\\sum","&Sum;","\\sum {\\Box_1}",327,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q2sum","\\sum","&Sum;","\\sum_{{\\Box_1}}{\\Box_2}",328,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R0sum","\\sum","&Sum;","\\sum_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",329,36)
        ], "sup":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0sup","\\sup","sup","\\sup {\\Box_1}",330,32)
        ], "tan":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0tan","\\tan","tan","\\tan {\\Box_1}",331,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q3tan","\\tan","tan","\\tan^{{\\Box_1}}{\\Box_2}",332,34)
        ], "tan-1":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"Patan","\\tan^{-1}","tan","\\tan^{-1}{\\Box_1}",333,32)
        ], "tanh":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0tanh","\\tanh","tanh","\\tanh {\\Box_1}",334,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q3tanh","\\tanh","tanh","\\tanh^{{\\Box_1}}{\\Box_2}",335,34)
        ], "therefore":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0therefore","\\therefore","&#x2234;","\\therefore {\\Box_1}",336,402)
        ], "triangleleft":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6triangleleft","\\triangleleft","&LeftTriangle;","\\triangleleft",337,406)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6lhd","\\lhd","&#x25C1;","\\lhd",338,406)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6unlhd","\\unlhd","&#x22B4;","\\unlhd",339,406)
        ], "triangleright":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6triangleright","\\triangleright","&RightTriangle;","\\triangleright",340,406)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6rhd","\\rhd","&#x25B7;","\\rhd",341,406)
        , new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6unrhd","\\unrhd","&#x22B5;","\\unrhd",342,406)
        ], "triangleup":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0triangleup","\\triangle","&#x2206;","\\triangleup {\\Box_1}",343,32)
        ], "under":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P8underline","\\underline","&UnderBar;","{\\underline {\\Box_1}}",344,501)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"Phunderbrace","\\underbrace","&UnderBrace;","\\underbrace{{\\Box_1}}",345,501)
        ], "var":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P5overline","\\overline","&OverBar;","{\\overline {\\Box_1}}",346,501)
        ], "vdash":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6vdash","\\vdash","&#x22A2;","\\vdash",347,300)
        ], "vec":[ new MathTOUCH.Operator(    MathTOUCH.OP1P,"P6vec","\\vec","&RightVector;","\\vec{{\\Box_1}}",348,5)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P7widevec","\\overrightarrow","&RightArrow;","\\overrightarrow{{\\Box_1}}",349,13)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pdwideleftvec","\\overleftarrow","&LeftArrow;","\\overleftarrow{{\\Box_1}}",350,13)
        ], "vee":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6vee","\\vee","&Vee;","\\vee",351,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"Pbbigvee","\\bigvee","&Vee;","\\bigvee {\\Box_1}",352,32)
        , new MathTOUCH.Operator(    MathTOUCH.OP2P,"Q2bigvee","\\bigvee","&Vee;","\\bigvee_{{\\Box_1}}{\\Box_2}",353,33)
        , new MathTOUCH.Operator(    MathTOUCH.OP3P,"R0bigvee","\\bigvee","&Vee;","\\bigvee_{{\\Box_1}}^{{\\Box_2}}{\\Box_3}",354,36)
        ], "wedge":[ new MathTOUCH.Operator(    MathTOUCH.OP2C,"C6wedge","\\wedge","&Wedge;","\\wedge",355,70)
        , new MathTOUCH.Operator(    MathTOUCH.OP1P,"P0^","\\wedge","&#x2227;","\\wedge {\\Box_1}",356,31)
        ], "=@":[ new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0=","=","=","\\stackrel{{\\Box_1}}{=}",357,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1=","=","=","\\stackrel{X}{=}",358,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2=","=","=","\\stackrel{=}{{\\Box_1}}",359,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0equiv","\\equiv","&#x2261;","\\stackrel{{\\Box_1}}{\\equiv}",360,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1equiv","\\equiv","&#x2261;","\\stackrel{X}{\\equiv}",361,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2equiv","\\equiv","&#x2261;","\\stackrel{\\equiv}{{\\Box_1}}",362,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0sim","\\sim","&#x223C;","\\stackrel{{\\Box_1}}{\\sim}",363,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1sim","\\sim","&#x223C;","\\stackrel{X}{\\sim}",364,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2sim","\\sim","&#x223C;","\\stackrel{\\sim}{{\\Box_1}}",365,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0simeq","\\simeq","&#x2243;","\\stackrel{{\\Box_1}}{\\simeq}",366,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1simeq","\\simeq","&#x2243;","\\stackrel{X}{\\simeq}",367,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2simeq","\\simeq","&#x2243;","\\stackrel{\\simeq}{{\\Box_1}}",368,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0approx","\\approx","&#x2248;","\\stackrel{{\\Box_1}}{\\approx}",369,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1approx","\\approx","&#x2248;","\\stackrel{X}{\\approX}",370,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2approx","\\approx","&#x2248;","\\stackrel{\\approx}{{\\Box_1}}",371,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0cong","\\cong","&#x2245;","\\stackrel{{\\Box_1}}{\\cong}",372,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1cong","\\cong","&#x2245;","\\stackrel{X}{\\cong}",373,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2cong","\\cong","&#x2245;","\\stackrel{\\cong}{{\\Box_1}}",374,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0propto","\\propto","&#x221D;","\\stackrel{{\\Box_1}}{\\propto}",375,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1propto","\\propto","&#x221D;","\\stackrel{X}{\\propto}",376,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2propto","\\propto","&#x221D;","\\stackrel{\\propto}{{\\Box_1}}",377,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0doteq","\\doteq","&#x2250;","\\stackrel{{\\Box_1}}{\\doteq}",378,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1doteq","\\doteq","&#x2250;","\\stackrel{X}{\\doteq}",379,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2doteq","\\doteq","&#x2250;","\\stackrel{\\doteq}{{\\Box_1}}",380,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0asymp","\\asymp","&#x224D;","\\stackrel{{\\Box_1}}{\\asymp}",381,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1asymp","\\asymp","&#x224D;","\\stackrel{X}{\\asymp}",382,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2asymp","\\asymp","&#x224D;","\\stackrel{\\asymp}{{\\Box_1}}",383,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0models","\\models","&#x22A8;","\\stackrel{{\\Box_1}}{\\models}",384,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1models","\\models","&#x22A8;","\\stackrel{X}{\\models}",385,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2models","\\models","&#x22A8;","\\stackrel{\\models}{{\\Box_1}}",386,300)
        ], "<@":[ new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0<","<","&lt;","\\stackrel{{\\Box_1}}{<}",387,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1<","<","&lt;","\\stackrel{X}{<}",388,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2<","<","&lt;","\\stackrel{<}{{\\Box_1}}",389,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0ll","\\ll","&#x00AB;","\\stackrel{{\\Box_1}}{\\ll}",390,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1ll","\\ll","&#x00AB;","\\stackrel{X}{\\ll}",391,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2ll","\\ll","&#x00AB;","\\stackrel{\\ll}{{\\Box_1}}",392,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0prec","\\prec","&#x227A;","\\stackrel{{\\Box_1}}{\\prec}",393,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1prec","\\prec","&#x227A;","\\stackrel{X}{\\prec}",394,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2prec","\\prec","&#x227A;","\\stackrel{\\prec}{{\\Box_1}}",395,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0in","\\in","&Element;","\\stackrel{{\\Box_1}}{\\in}",396,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1in","\\in","&Element;","\\stackrel{X}{\\in}",397,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2in","\\in","&Element;","\\stackrel{\\in}{{\\Box_1}}",398,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0subset","\\subset","&#x2282;","\\stackrel{{\\Box_1}}{\\subset}",399,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1subset","\\subset","&#x2282;","\\stackrel{X}{\\subset}",400,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2subset","\\subset","&#x2282;","\\stackrel{\\subset}{{\\Box_1}}",401,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0sqsubset","\\sqsubset","&#x228F;","\\stackrel{{\\Box_1}}{\\sqsubset}",402,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1sqsubset","\\sqsubset","&#x228F;","\\stackrel{X}{\\sqsubset}",403,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2sqsubset","\\sqsubset","&#x228F;","\\stackrel{\\sqsubset}{{\\Box_1}}",404,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0vdash","\\vdash","&#x22A2;","\\stackrel{{\\Box_1}}{\\vdash}",405,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1vdash","\\vdash","&#x22A2;","\\stackrel{X}{\\vdash}",406,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2vdash","\\vdash","&#x22A2;","\\stackrel{\\vdash}{{\\Box_1}}",407,300)
        ], "<=@":[ new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0leq","\\leq","&le;","\\stackrel{{\\Box_1}}{\\leq}",408,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1leq","\\leq","&le;","\\stackrel{X}{\\leq}",409,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2leq","\\leq","&le;","\\stackrel{\\leq}{{\\Box_1}}",410,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0subseteq","\\subseteq","&#x2286;","\\stackrel{{\\Box_1}}{\\subseteq}",411,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1subseteq","\\subseteq","&#x2286;","\\stackrel{X}{\\subseteq}",412,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2subseteq","\\subseteq","&#x2286;","\\stackrel{\\subseteq}{{\\Box_1}}",413,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0sqsubseteq","\\sqsubseteq","&#x2292;","\\stackrel{{\\Box_1}}{\\sqsubseteq}",414,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1sqsubseteq","\\sqsubseteq","&#x2292;","\\stackrel{X}{\\sqsubseteq}",415,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2sqsubseteq","\\sqsubseteq","&#x2292;","\\stackrel{\\sqsubseteq}{{\\Box_1}}",416,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0preceq","\\preceq","&#x227E;","\\stackrel{{\\Box_1}}{\\preceq}",417,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1preceq","\\preceq","&#x227E;","\\stackrel{X}{\\preceq}",418,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2preceq","\\preceq","&#x227E;","\\stackrel{\\preceq}{{\\Box_1}}",419,300)
        ], ">@":[ new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0>",">",">","\\stackrel{{\\Box_1}}{>}",420,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1>",">",">","\\stackrel{X}{>}",421,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2>",">",">","\\stackrel{>}{{\\Box_1}}",422,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0gg","\\gg","&#x00BB;","\\stackrel{{\\Box_1}}{\\gg}",423,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1gg","\\gg","&#x00BB;","\\stackrel{X}{\\gg}",424,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2gg","\\gg","&#x00BB;","\\stackrel{\\gg}{{\\Box_1}}",425,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0succ","\\succ","&#x227B;","\\stackrel{{\\Box_1}}{\\succ}",426,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1succ","\\succ","&#x227B;","\\stackrel{X}{\\succ}",427,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2succ","\\succ","&#x227B;","\\stackrel{\\succ}{{\\Box_1}}",428,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0ni","\\ni","&ReverseElement;","\\stackrel{{\\Box_1}}{\\ni}",429,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1ni","\\ni","&ReverseElement;","\\stackrel{X}{\\ni}",430,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2ni","\\ni","&ReverseElement;","\\stackrel{\\ni}{{\\Box_1}}",431,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0supset","\\supset","&#x2283;","\\stackrel{{\\Box_1}}{\\supset}",432,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1supset","\\supset","&#x2283;","\\stackrel{X}{\\supset}",433,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2supset","\\supset","&#x2283;","\\stackrel{\\supset}{{\\Box_1}}",434,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0sqsupset","\\sqsupset","&#x2290;","\\stackrel{{\\Box_1}}{\\sqsupset}",435,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1sqsupset","\\sqsupset","&#x2290;","\\stackrel{X}{\\sqsupset}",436,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2sqsupset","\\sqsupset","&#x2290;","\\stackrel{\\sqsupset}{{\\Box_1}}",437,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0dashv","\\dashv","&#x22A3;","\\stackrel{{\\Box_1}}{\\dashv}",438,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1dashv","\\dashv","&#x22A3;","\\stackrel{X}{\\dashv}",439,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2dashv","\\dashv","&#x22A3;","\\stackrel{\\dashv}{{\\Box_1}}",440,300)
        ], ">=@":[ new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0geq","\\geq","&#x2265;","\\stackrel{{\\Box_1}}{\\geq}",441,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1geq","\\geq","&#x2265;","\\stackrel{X}{\\geq}",442,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2geq","\\geq","&#x2265;","\\stackrel{\\geq}{{\\Box_1}}",443,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0supseteq","\\supseteq","&#x2287;","\\stackrel{{\\Box_1}}{\\supseteq}",444,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1supseteq","\\supseteq","&#x2287;","\\stackrel{X}{\\supseteq}",445,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2supseteq","\\supseteq","&#x2287;","\\stackrel{\\supseteq}{{\\Box_1}}",446,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0sqsupseteq","\\sqsupseteq","&#x2291;","\\stackrel{{\\Box_1}}{\\sqsupseteq}",447,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1sqsupseteq","\\sqsupseteq","&#x2291;","\\stackrel{X}{\\sqsupseteq}",448,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2sqsupseteq","\\sqsupseteq","&#x2291;","\\stackrel{\\sqsupseteq}{{\\Box_1}}",449,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0succeq","\\succeq","&SucceedsEqual;","\\stackrel{{\\Box_1}}{\\succeq}",450,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1succeq","\\succeq","&SucceedsEqual;","\\stackrel{X}{\\succeq}",451,300)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2succeq","\\succeq","&SucceedsEqual;","\\stackrel{\\succeq}{{\\Box_1}}",452,300)
        ], "<--@":[ new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0leftarrow","\\leftarrow","&LeftArrow;","\\stackrel{{\\Box_1}}{\\leftarrow}",453,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1leftarrow","\\leftarrow","&LeftArrow;","\\stackrel{X}{\\leftarrow}",454,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2leftarrow","\\leftarrow","&LeftArrow;","\\stackrel{\\leftarrow}{{\\Box_1}}",455,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0leftharpoonup","\\leftharpoonup","&UpperLeftArrow;","\\stackrel{{\\Box_1}}{\\leftharpoonup}",456,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1leftharpoonup","\\leftharpoonup","&UpperLeftArrow;","\\stackrel{X}{\\leftharpoonup}",457,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2leftharpoonup","\\leftharpoonup","&UpperLeftArrow;","\\stackrel{\\leftharpoonup}{{\\Box_1}}",458,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0leftharpoondown","\\leftharpoondown","&LowerLeftArrow;","\\stackrel{{\\Box_1}}{\\leftharpoondown}",459,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1leftharpoondown","\\leftharpoondown","&LowerLeftArrow;","\\stackrel{X}{\\leftharpoondown}",460,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2leftharpoondown","\\leftharpoondown","&LowerLeftArrow;","\\stackrel{\\leftharpoondown}{{\\Box_1}}",461,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0hookleftarrow","\\hookleftarrow","&#x21A9;","\\stackrel{{\\Box_1}}{\\hookleftarrow}",462,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1hookleftarrow","\\hookleftarrow","&#x21A9;","\\stackrel{X}{\\hookleftarrow}",463,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2hookleftarrow","\\hookleftarrow","&#x21A9;","\\stackrel{\\hookleftarrow}{{\\Box_1}}",464,407)
        ], "<==@":[ new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0Leftarrow","\\Leftarrow","&DoubleLeftArrow;","\\stackrel{{\\Box_1}}{\\Leftarrow}",465,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1Leftarrow","\\Leftarrow","&DoubleLeftArrow;","\\stackrel{X}{\\Leftarrow}",466,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2Leftarrow","\\Leftarrow","&DoubleLeftArrow;","\\stackrel{\\Leftarrow}{{\\Box_1}}",467,407)
        ], "-->@":[ new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0rightarrow","\\rightarrow","&RightArrow;","\\stackrel{{\\Box_1}}{\\rightarrow}",468,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1rightarrow","\\rightarrow","&RightArrow;","\\stackrel{X}{\\rightarrow}",469,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2rightarrow","\\rightarrow","&RightArrow;","\\stackrel{\\rightarrow}{{\\Box_1}}",470,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0rightharpoonup","\\rightharpoonup","&UpperRightArrow;","\\stackrel{{\\Box_1}}{\\rightharpoonup}",471,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1rightharpoonup","\\rightharpoonup","&UpperRightArrow;","\\stackrel{X}{\\rightharpoonup}",472,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2rightharpoonup","\\rightharpoonup","&UpperRightArrow;","\\stackrel{\\rightharpoonup}{{\\Box_1}}",473,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0rightharpoondown","\\rightharpoondown","&LowerRightArrow;","\\stackrel{{\\Box_1}}{\\rightharpoondown}",474,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1rightharpoondown","\\rightharpoondown","&LowerRightArrow;","\\stackrel{X}{\\rightharpoondown}",475,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2rightharpoondown","\\rightharpoondown","&LowerRightArrow;","\\stackrel{\\rightharpoondown}{{\\Box_1}}",476,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0hookrightarrow","\\hookrightarrow","&#x21AA;","\\stackrel{{\\Box_1}}{\\hookrightarrow}",477,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1hookrightarrow","\\hookrightarrow","&#x21AA;","\\stackrel{X}{\\hookrightarrow}",478,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2hookrightarrow","\\hookrightarrow","&#x21AA;","\\stackrel{\\hookrightarrow}{{\\Box_1}}",479,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0mapsto","\\mapsto","&RightTeeArrow;","\\stackrel{{\\Box_1}}{\\mapsto}",480,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1mapsto","\\mapsto","&RightTeeArrow;","\\stackrel{X}{\\mapsto}",481,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2mapsto","\\mapsto","&RightTeeArrow;","\\stackrel{\\mapsto}{{\\Box_1}}",482,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0leadsto","\\leadsto","&#x219D;","\\stackrel{{\\Box_1}}{\\leadsto}",483,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1leadsto","\\leadsto","&#x219D;","\\stackrel{X}{\\leadsto}",484,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2leadsto","\\leadsto","&#x219D;","\\stackrel{\\leadsto}{{\\Box_1}}",485,407)
        ], "==>@":[ new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0Rightarrow","\\Rightarrow","&DoubleRightArrow;","\\stackrel{{\\Box_1}}{\\Rightarrow}",486,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1Rightarrow","\\Rightarrow","&DoubleRightArrow;","\\stackrel{X}{\\Rightarrow}",487,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2Rightarrow","\\Rightarrow","&DoubleRightArrow;","\\stackrel{\\Rightarrow}{{\\Box_1}}",488,407)
        ], "<->@":[ new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0leftrightarrow","\\leftrightarrow","&LeftRightArrow;","\\stackrel{{\\Box_1}}{\\leftrightarrow}",489,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1leftrightarrow","\\leftrightarrow","&LeftRightArrow;","\\stackrel{X}{\\leftrightarrow}",490,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2leftrightarrow","\\leftrightarrow","&LeftRightArrow;","\\stackrel{\\leftrightarrow}{{\\Box_1}}",491,407)
        ], "<=>@":[ new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0Leftrightarrow","\\Leftrightarrow","&DoubleLeftRightArrow;","\\stackrel{{\\Box_1}}{\\Leftrightarrow}",492,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1Leftrightarrow","\\Leftrightarrow","&DoubleLeftRightArrow;","\\stackrel{X}{\\Leftrightarrow}",493,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2Leftrightarrow","\\Leftrightarrow","&DoubleLeftRightArrow;","\\stackrel{\\Leftrightarrow}{{\\Box_1}}",494,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T0rightleftharpoons","\\rightleftharpoons","&RightArrowLeftArrow;","\\stackrel{{\\Box_1}}{\\rightleftharpoons}",495,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T1rightleftharpoons","\\rightleftharpoons","&RightArrowLeftArrow;","\\stackrel{X}{\\rightleftharpoons}",496,407)
        , new MathTOUCH.Operator(    MathTOUCH.OP3T,"T2rightleftharpoons","\\rightleftharpoons","&RightArrowLeftArrow;","\\stackrel{\\rightleftharpoons}{{\\Box_1}}",497,407)]
    };
    
    this.logOrder=-1;
    var _mathOkey=168;
    this.getKeyTotal=function(){return _mathOkey;}
    var _mathOIDmax=496;
    this.getTotalOperator=function(){return _mathOIDmax;}
    
    var _okeyByID = new Array(_mathOIDmax);
    var _OID = new Array(_mathOkey);
    
    var _opeorder = new Array(_mathOkey);
    var _knum = 0;
    var _index=0;
    var symNumber = function(cc){
        if(cc<32){return -1;}
        else if(cc<48){return (cc-32);}
        else if(cc<58){return -1;}
        else if(cc<65){return (16+cc-58);}
        else if(cc<91){return -1;}
        else if(cc<97){return (23+cc-91);}
        else if(cc<123){return -1;}
        else if(cc<127){return (29+cc-123);}
        else{return -1;}
    }

    var _opeword=Object.keys(_table);
    this.keyNumberOf=function(wd){
        var it=wd.charCodeAt(0);
        var od=symNumber(it);
        if(od>=0 && wd.length==1) return(od);
        var TBEND= _opeword.length;
        for(var i=33;i<TBEND;i++){
            if(_opeword[i]==wd) return(i);
        }
        return(-1);
    }

    var _optypes=new Array();
    for(var i in _table){
        _optypes[_knum]=new Array();
        _optypes[_knum][0]=_table[i][0].getOpeType();
        _opeorder[_knum] = new Array();
        _OID[_knum] = new Array();
        var type=0,k=0;
        for(var j=0; j<_table[i].length; j++){
            _opeorder[_knum][j]={"key":i, "order":j};
            _OID[_knum][j]=_index++;
            _okeyByID[_table[i][j].getMathOID()] = _knum*100+j;
            type=_table[i][j].getOpeType();
            for(k=0;k<_optypes[_knum].length;k++){
                if(_optypes[_knum][k]==type) break;
            }
            if(k==_optypes[_knum].length){_optypes[_knum].push(type);}
        }
        _knum++;
    }
    

    this.theNumberOf = function(wd){
        for(var i=0; i<_opeorder.length; i++){
            if(_opeorder[i][0].key === wd) return(i);
        }
        return(-1);
    }
    

    for(var i=0; i<DIC.getDictionAllLength(); i++){
        for(var j=0; j<DIC.getDictionLength(i); j++){
            if(DIC.getDiction(i,j).type <= MathTOUCH.SYM || DIC.getDiction(i,j).type === MathTOUCH.XTML){
                
            }else{
                DIC.getDiction(i,j).key=this.theNumberOf(DIC.getDiction(i,j).theWord);
            }
        }
    }
    
    this.getOpeorder = function(keynum, ord){
        return _opeorder[keynum][ord];
    }
    
    
    this.getOpeorderKey = function(keynum, ord){
        return _opeorder[keynum][ord].key;
    }
    
    this.setOpeorder = function(keynum, ord, val){
        _opeorder[keynum][ord] = val;
    }
    
    this.getOpeorderOrder = function(keynum, ord){
        return _opeorder[keynum][ord].order;
    }
    
    this.getOpeorderAllLength = function(){
        return _opeorder.length;
    }
    
    this.getOpeLength = function(keynum){
        return _opeorder[keynum].length;
    }
    
    this.getOpeword = function(keynum){
        return _opeword[keynum];
    }
    
    this.getTable = function(i,ord){
        return (_table[i][ord]);
    }
    
    this.getTableLength = function(kwd){
        return _table[kwd].length;
    }

    this.getOpeTypeAt=function(kk){
        return _optypes[kk];
    }

    this.getOID=function(kk,ord){
        return _OID[kk][ord];
    }
    
}

MathTOUCH.opeTable.prototype.shiftToTop = function(keynum,ord){
        var _onum = this.getOpeorder(keynum, ord);
        var _ans = new Array();
        for(var i=0;i<this.getOpeorderLength(keynum);i++){
            _ans[i] = this.getOpeorder(keynum, i);
        }
        for(var i=ord; i>0; i--){
            this.setOpeorder(keynum, i, this.getOpeorder(keynum, i-1));
        }
        this.setOpeorder(keynum, 0, _onum);
        return(_ans);
};
    
MathTOUCH.opeTable.prototype.shiftToSecond = function(keynum,ord){
        var _onum = this.getOpeorder(keynum, ord);
        if(ord > 0){
            for(var i=ord; i>1; i--){
                this.setOpeorder(keynum, i, this.getOpeorder(keynum, i-1));
            }
            this.setOpeorder(keynum, 1, _onum);
        }
};

MathTOUCH.opeTable.prototype.order = function(keynum){
        if(this.getLOrder()>=0){
            return ( this.getOpeorderOrder(keynum, this.getLOrder()));
        }else{
            return (-1);
        }
};

MathTOUCH.opeTable.prototype.getLogOrder = function(keynum,ord){
        var _olen=this.getOpeLength(keynum);
        for(var i=0; i<_olen; i++){
            if(this.getOpeorderOrder(keynum, i) === ord){
                return i;
            }
        }
        return -1;
};

MathTOUCH.opeTable.prototype.getFirstOrder = function(keynum,type){
        for(var i=0; i<this.getOpeLength(keynum); i++){
            if(this.getTable(this.getOpeorderKey(keynum, i), this.getOpeorderOrder(keynum, i)).getOpeType() === type){
                return i;
            }
        }
        return (-1);
};

MathTOUCH.opeTable.prototype.theKeyWordAt = function(keynum){
        return (this.getOpeorderKey(keynum, 0));
};

MathTOUCH.opeTable.prototype.theEXcodeLog = function(keynum,ord){
        return (this.getTable(this.getOpeorderKey(keynum, ord), this.getOpeorderOrder(keynum, ord)).getEXcode());
};

MathTOUCH.opeTable.prototype.theTeXcodeLog = function(keynum,ord){
        return (this.getTable(this.getOpeorderKey(keynum, ord), this.getOpeorderOrder(keynum, ord)).getTexWord());
};

MathTOUCH.opeTable.prototype.theTeXsampleLog = function(keynum,ord){
        return (this.getTable(this.getOpeorderKey(keynum, ord), this.getOpeorderOrder(keynum, ord)).getTexSample());
};

MathTOUCH.opeTable.prototype.getOpeTypeLog = function(keynum,ord){
        return (this.getTable(this.getOpeorderKey(keynum, ord), this.getOpeorderOrder(keynum, ord)).getOpeType());
};

MathTOUCH.opeTable.prototype.getKeyAndLogOrder = function(wd){
        for(var i=0; i<this.getOpeorderAllLength(); i++){
            for(var j=0; j<this.getOpeorderLength(i); j++)
                if(this.theEXcodeLog(i,j)===wd){
                    return(i*100+j);
                }
        }
        return (-1);
};

MathTOUCH.opeTable.prototype.theEXcode = function(keynum,ord){
        return (this.getTable(this.getOpeorderKey(keynum, ord), ord).getEXcode());
}

MathTOUCH.opeTable.prototype.theTeXcode = function(keynum,ord){
        return (this.getTable(this.getOpeorderKey(keynum, ord), ord).getTexWord());
};

MathTOUCH.opeTable.prototype.theTeXsample = function(keynum,ord){
        return (this.getTable(this.getOpeorderKey(keynum, ord), ord).getTexSample());
};

MathTOUCH.opeTable.prototype.theMathMLcode = function(keynum,ord){
        return (this.getTable(this.getOpeorderKey(keynum, ord), ord).getMathMLWord());
};

MathTOUCH.opeTable.prototype.getOpeType = function(keynum,ord){
        return (this.getTable(this.getOpeorderKey(keynum, ord), ord).getOpeType());
};

MathTOUCH.opeTable.prototype.getOpeTypeByID = function(mathid){
        var _ko=this.okeyByID[mathid];
        return (this.getTable(this.theKeyWordAt(Math.floor(_ko/100)), _ko%100).getOpeType());
};

MathTOUCH.opeTable.prototype.theAlgebraicType = function(keynum,ord){
        return ((this.getTable(this.getOpeorderKey(keynum, ord), ord)).getAlgType());
};

MathTOUCH.opeTable.prototype.getKeyAndOrder = function(wd){
    for(var i=0;i<this.getOpeorderAllLength();i++){
        for(var j=0; j<this.getOpeLength(i); j++)
            if(this.theEXcode(i,j)==wd) return(i*100+j);
    }
    return (-1);
};

MathTOUCH.opeTable.prototype.getKeyAndOrderFromExcode = function(kwd,code){
        if(kwd=="\u201A") kwd=",";
        kwd=DIC.keyWord(kwd);
        var keynum=this.theNumberOf(kwd);
        if(keynum<0) return(-1);
        var len = this.getTableLength(kwd);
        for(var j=0;j<len;j++){
            if(this.getTable(kwd, j).getEXcode()==code){
                return(keynum*100+j);
            }
        }
        return (-1);
};

MathTOUCH.opeTable.prototype.getOpeList = function(wd){
        var ans=null;
        var key=this.theNumberOf(wd);
        if(key<0) return null;
        ans=this.getOpeTypeAt(key);
        return (ans);
    
};

MathTOUCH.opeTable.prototype.setLOrder = function(lo){
    this.logOrder = lo;
};
 
MathTOUCH.opeTable.prototype.getLOrder = function(){
    return this.logOrder;
};
