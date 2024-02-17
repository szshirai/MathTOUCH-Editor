/************
exRep module
 ************/
var exR = function(){};

exR.exRep = function(){
    var _Rep         = null;
    var _point       = 0;
    var _type        = null;
    var _term        = new Array();
    var _lx          = 0;
    var _ly          = 0;
    var _width       = 0;
    var _per         = 0.0;
    var _ascent      = 0;
    var _descent     = 0;
    var _opeWidth    = 0;
    var _fontName    = "Times New Roman";
    var _fontFace    = "";
    var _currentColor= "black";
    var _currentSize = 24;
    var _direction   = 0;
    var _baseColor   = 0;
    var _opeColor    = 0;
    var _backColor   = 0;
    var _opeBackColor = 0;
    var _frameColor  = 0;
    var _opeFrameColor = 0;
    var _transCol    = -1;
    var _gap         = 0;
    var _test       = "test";
    var _visibleEmpty = true;
    this.isVisibleEmptyMode=function(){return _visibleEmpty;}
    this.setVisibleEmptyMode=function(){
        _visibleEmpty=true;
        if(_term.length>0){
            if(_term[0].setVisibleEmptyMode==undefined){
                if(_term[0].length>0){
                    for(var i=0;i<_term.length;i++){
                        for(var j=0;j<_term[i].length;j++) _term[i][j].setVisibleEmptyMode();
                    }
                }else return;
            }
            else for(var i=0;i<_term.length;i++) _term[i].setVisibleEmptyMode();
        }
    }
    this.setInvisibleEmptyMode=function(){
        _visibleEmpty=false;
        if(_term.length>0){
            if(_term[0].setInvisibleEmptyMode==undefined){
                if(_term[0].length>0){
                    for(var i=0;i<_term.length;i++){
                        for(var j=0;j<_term[i].length;j++) _term[i][j].setInvisibleEmptyMode();
                    }
                }else return;
            }
            else for(var i=0;i<_term.length;i++) _term[i].setInvisibleEmptyMode();
        }
    }
    
    var _varNames = {
        "!`":"\u00A1","\"a":"\u00E4","\"A":"\u00C4","\"e":"\u00EB","\"E":"\u00CB",
        "\"i":"\u00EF","\"I":"\u00CF","\"o":"\u00F6","\"O":"\u00D6","\"u":"\u00FC",
        "\"U":"\u00DC","?`":"\u00BF","^a":"\u00E2","^A":"\u00C2","^e":"\u00EA",
        "^E":"\u00CA","^i":"\u00EE","^I":"\u00CE","^o":"\u00F4","^O":"\u00D4",
        "^u":"\u00FB","^U":"\u00DB","`a":"\u00E0","`A":"\u00C0","`e":"\u00E8",
        "`E":"\u00C8","`i":"\u00EC","`I":"\u00CC","`o":"\u00F2","`O":"\u00D2",
        "`u":"\u00F9","`U":"\u00D9","|":"\u2016","~a":"\u00E3","~A":"\u00C3",
        "~n":"\u00F1","~N":"\u00D1","~o":"\u00F5","~O":"\u00D5","=a":"\u0102",
        "=A":"\u0101","\'a":"\u00E1","\'A":"\u00C1","aa":"\u00E5","AA":"\u00C5",
        "ae":"\u00E6","AE":"\u00C6","aleph":"\u2135","alpha":"\u03B1",
        "backslash":"\u2216","because":"\u2235",
        "beta":"\u03B2","bot":"\u22A5","Box":"\u20DE","c a":"\u0106",
        "c A":"\u0105","c c":"\u00E7","c C":"\u00C7","chi":"\u03C7","clubsuit":"\u2663",
        "copyright":"\u00A9","delta":"\u03B4","Delta":"\u0394","Diamond":"\u20DF","diamondsuit":"\u2662",
        "downarrow":"\u2193",
        "\'e":"\u00E9","\'E":"\u00C9","ell":"\u2113","emptyset":"\u2205","epsilon":"\u220A",
        "eta":"\u03B7","exists":"\u2203","flat":"\u266D","forall":"\u2200","gamma":"\u03B3",
        "Gamma":"\u0393","hbar":"\u210F","heartsuit":"\u2661","\'i":"\u00ED","\'I":"\u00CD",
        "Im":"\u2111","infty":"\u221E","iota":"\u03B9","jmath":"\u2110","kappa":"\u03BA",
        "lambda":"\u03BB","Lambda":"\u039B","mho":"\u2127","mu":"\u03BC","nabla":"\u2207",
        "natural":"\u266E","nearrow":"\u2197","neg":"\u00AC","neq":"\u2260","nu":"\u03BD","nwarrow":"\u2196",
        "o":"\u00F8","\'o":"\u00F3",
        "O":"\u00D8","\'O":"\u00D3","omega":"\u03C9","Omega":"\u03A9","P":"\u00B6",
        "phi":"\u03C6","Phi":"\u03A6","pi":"\u03C0","Pi":"\u03A0","partial":"\u2202",
        "pounds":"\u00A3","psi":"\u03C8","Psi":"\u03A8","Re":"\u211C","rho":"\u03C1",
        "S":"\u00A7","searrow":"\u2198","sharp":"\u266F","sigma":"\u03C3",
        "Sigma":"\u03A3","spadesuit":"\u2660","ss":"\u00DF","surd":"\u221A","swarrow":"\u2199",
        "tau":"\u03C4","therefore":"\u2234",
        "theta":"\u03B8","Theta":"\u0398",
        "top":"\u22A4","triangle":"\u2206",
        "\'u":"\u00FA","\'U":"\u00DA","u a":"\u0104",
        "u A":"\u0103","upsilon":"\u03C5","Upsilon":"\u03A5",
        "uparrow":"\u2191","updownarrow":"\u2195","Updownarrow":"\u21D5",
        "varepsilon":"\u03B5","varphi":"\u03C6",
        "varpi":"\u03D6","varrho":"\u03F1","varsigma":"\u03C2","vartheta":"\u03D1","wp":"\u2118",
        "xi":"\u03BE","Xi":"\u039E","zeta":"\u03B6","ldots":"\u2026","cdots":"\u22EF",
        "vdots":"\u22EE","ddots":"\u22F1"
    };
    
    var _opeNames = {
        "+":"+","-":"-",",":",",".":".","(":"(",")":")",
        "[":"[","]":"]","{":"{","}":"}","*":"*",
        "/":"/","<":"<",">":">","^":"^","\\":"\u2216",
        "~":"~","|":"|","||":"\u2016","lfloor":"\u23A3","rfloor":"\u23A6",
        "lceil":"\u23A1","rceil":"\u23A4","=":"=",":":":",";":";",
        "!":"!","#":"#","$":"$","%":"%","&":"&","@":"@","`":"`",
        "'":"\u2032","int":"\u222B","dint":"\u222C",
        "tint":"\u222D","sum":"\u2211","prod":"\u220F",
        "amalg":"\u2210","angle":"\u2220","approx":"\u2248",
        "ast":"\u2217","asymp":"\u224D",
        "backslash":"\u2216","because":"\u2235","bigcirc":"\u20DD","bigtriangledown":"\u25BD",
        "bigoplus":"\u2295","biguplus":"\u228E","bigodot":"\u2299",
        "bigcap":"\u2229","bigcup":"\u222A","bigsqcap":"\u2293","bigsqcup":"\u2294","bigotimes":"\u2297",
        "bigvee":"\u2228","bigwedge":"\u2227",
        "bigtriangleup":"\u25B3","bullet":"\u2022",
        "cap":"\u2229","cdot":"\u2219","cdots":"\u22EF","circ":"\u25CB",
        "cong":"\u2245",
        "cos":"cos","coth":"coth","cup":"\u222A",
        "dagger":"\u2020","dashv":"\u22A3","ddagger":"\u2021","ddots":"\u22F1","diamond":"\u20DF",
        "div":"\u00F7","doteq":"\u2250","downarrow":"\u2193",
        "equiv":"\u2261","exists":"\u2203",
        "fallingdotseq":"\u2252","forall":"\u2200","frown":"\u2040",
        "geq":"\u2265","geqq":"\u2267","gg":"\u00BB","hookleftarrow":"\u21A9",
        "hookrightarrow":"\u21AA",
        "in":"\u2208",
        "Join":"\u22C8",
        "langle":"\u3008","ldot":"\u2024","ldots":"\u2026",
        "leadsto":"\u219D","leftarrow":"\u2190","Leftarrow":"\u21D0","leftharpoondown":"\u21BD",
        "leftharpoonup":"\u21BC","leftrightarrow":"\u2194","Leftrightarrow":"\u21D4",
        "leq":"\u2264","leqq":"\u2266","lhd":"\u25C3","ll":"\u00AB",
        "limsup":"lim sup","liminf":"lim inf","log":"log",
        "mapsto":"\u21A6","mid":"\u2223","models":"\u22A8","mp":"\u2213",
        "neq":"\u2260","nearrow":"\u2197","ni":"\u220B","nwarrow":"\u2196",
        "odot":"\u2299","oint":"\u222E",
        "ominus":"\u2296","oplus":"\u2295","oslash":"\u2298","otimes":"\u2297",
        "parallel":"\u2225",
        "perp":"\u22A5","pm":"\u00B1","pounds":"\u00A3","prec":"\u227A",
        "preceq":"\u227E","propto":"\u221D",
        "rangle":"\u3009","rhd":"\u25B7","rightarrow":"\u2192","Rightarrow":"\u21D2",
        "rightharpoonup":"\u21C0","rightharpoondown":"\u21C1","rightleftharpoons":"\u21CC",
        "searrow":"\u2198","setminus":"\u2216","sin":"sin",
        "sim":"\u223C","simeq":"\u2243",
        "smile":"\u203F","sqcap":"\u2293","sqcup":"\u2294","sqsubset":"\u228F",
        "sqsubseteq":"\u2291","sqsupset":"\u2290","sqsupseteq":"\u2292",
        "star":"\u22C6","subset":"\u2282","subseteq":"\u2286",
        "succ":"\u227B","succeq":"\u227F","supset":"\u2283","supseteq":"\u2287",
        "swarrow":"\u2199",
        "therefore":"\u2234",
        "times":"\u00D7","triangleup":"\u2206","triangleleft":"\u22B2","triangleright":"\u22B3",
        "unlhd":"\u22B4","unrhd":"\u22B5",
        "uparrow":"\u2191","updownarrow":"\u2195","Updownarrow":"\u21D5",
        "uplus":"\u228E",
        "vdash":"\u22A2","vdots":"\u22EE","vec":"\u2192","vee":"\u2228",
        "wedge":"\u2227","wr":"\u2240",
        "tan":"tan",
        "arg":"arg","hom":"hom","csc":"csc",
        "sec":"sec","cot":"cot","deg":"deg","ker":"ker","lg":"lg",
        "arcsin":"arcsin","arccos":"arccos","arctan":"arctan","dim":"dim","ln":"ln",
        "sinh":"sinh","cosh":"cosh","tanh":"tanh","exp":"exp","lim":"lim",
        "gcd":"gcd","Pr":"Pr","det":"det","max":"max","min":"min",
        "sup":"sup","inf":"inf","bmod":"mod",
        "pmod":"mod","coprod":"\u2210"
        
    };
    
    this.setFace = function(face){
        _fontFace = face;
    };
    
    this.getFace = function(){
        return _fontFace;
    };
    
    this.setFont = function(fn){
        _fontName = fn;
    }
    
    this.getFont = function(){
        return _fontName;
    }
    
    this.setFontSize = function(pt){
        _currentSize = pt;
    };
    
    this.getFontSize = function(){
        return _currentSize;
    };
    
    this.setRep = function(r){
        _Rep = r;
    };

    this.getRep = function(){
        return _Rep;
    };
    
    this.setPer = function(p){
        _per = p;
    };
    
    this.getPer = function(){
        return _per;
    };
    
    this.setType = function(t){
        _type = t;
    };
    
    this.getType = function(){
        return _type;
    };
    
    this.setColor = function(c){
        _currentColor = c;
    };
    
    this.getColor = function(){
        return _currentColor;
    };
    
    this.setGap = function(g){
        _gap = g;
    };
    
    this.getGap = function(){
        return _gap;
    };
    
    this.setTerm = function(e){
        _term = e;
    };
    
    this.getTerm = function(){
        return _term;
    };
    
    this.setTerm1 = function(i,t){
        _term[i] = t;
    };
    
    this.getTerm1 = function(i){
        return _term[i];
    };
    
    this.getTerm2 = function(i,j){
        return _term[i][j];
    };
    
    this.setOpeWidth = function(o){
        _opeWidth = o;
    };
    
    this.getOpeWidth = function(){
        return _opeWidth;
    };
    
    this.setDirection = function(i){
        _direction = i;
    };
    
    this.getDirection = function(){
        return _direction;
    };
    
    this.setAscent = function(as){
        _ascent = as;
    };
    
    this.getAscent = function(){
        return _ascent;
    };
    
    this.setDescent = function(ds){
        _descent = ds;
    };
    
    this.getDescent = function(){
        return _descent;
    };
    
    this.getLabel = function(label){
        var _vv = this.getVarNames(label);
        if(_vv == undefined){
            return "?";
        }
        else return(_vv);
    };
    
    this.getOpeLabel = function(label){
        var _ov = _opeNames[label];
        if(_ov == undefined) return "?";
        else return(_ov);
    };
    
    this.setBaseColor = function(bc){
        if(bc<0){
            _direction = 1;
            _baseColor = -bc;
        }
        else{
            _direction=0;
            _baseColor=bc;
        }
    };
    
    this.getBaseColor = function(){
        return MathTOUCH.ctbl[ _baseColor ];
    };
    
    this.getBaseColorNum = function(){
        return _baseColor;
    };
    
    this.clearBaseColor = function(){
        _baseColor = 0;
        _direction = 0;
    };
    
    this.setOBcolor = function(oc,bc){
        _opeColor = oc;
        if(bc<0){
            _direction = 1;
            _baseColor = -bc;
        }
        else{
            _direction = 0;
            _baseColor = bc;
        }
    };
    
    this.clearOBcolor = function(){
        _opeColor = 0;
        _baseColor = 0;
    };
    
    this.setOpeColor = function(oc){
        _opeColor=oc;
    };
    
    this.getOpeColor = function(){
        return MathTOUCH.ctbl[ _opeColor ];
    };
    
    this.getOpeColorNum = function(){
        return _opeColor;
    };
    
    this.clearOpeColor = function(){
        _opeColor = 0;
    };
    
    this.setBackColor = function(bk){
        _backColor = bk;
    };
    
    this.getBackColor = function(){
        return MathTOUCH.ctbl[ _backColor];
    };
    
    this.getBackColorNum = function(){
        return _backColor;
    },
    
    this.clearBackColor = function(){
        _backColor=0;
    };
    
    this.setOpeBackColor = function(bk){
        _opeBackColor = bk;
    };
    
    this.getOpeBackColor = function(){
        return MathTOUCH.ctbl[ _opeBackColor ];
    };
    
    this.getOpeBackColorNum = function(){
        return _opeBackColor;
    };
    
    this.clearOpeBackColor = function(){
        _opeBackColor = 0;
    };
    
    
    this.setFrameColor = function(fc){
        _frameColor = fc;
    };
    
    this.clearFrameColor = function(){
        _frameColor=0;
    };
    
    this.getFrameColor = function(){
        return MathTOUCH.ctbl[ _frameColor ];
    };
    
    this.getFrameColorNum = function(){
        return _frameColor;
    };
    
    this.setOpeFrameColor = function(fc){
        _opeFrameColor = fc;
    };
    
    this.clearOpeFrameColor = function(){
        _opeFrameColor = 0;
    };
    
    this.getOpeFrameColor = function(){
        return MathTOUCH.ctbl[ _opeFrameColor ];
    };
    
    this.getOpeFrameColorNum = function(){
        return _opeFrameColor;
    };
    
    this.setMatColum = function(mcol){
        _transCol = mcol;
    };
    
    this.clearMatColum = function(){
        _transCol = -1;
    };
    
    this.getMatColum = function(){
        return _transCol;
    };
    
    this.setLx = function(lx){
        _lx = lx;
    };
    
    this.getLx = function(){
        return _lx;
    };
    
    this.setLy = function(ly){
        _ly = ly;
    };
    
    this.getLy = function(){
        return _ly;
    };
    
    this.setWidth = function(w){
        _width = w;
    };
    
    this.getWidth = function(){
        return _width;
    };
    
    this.setStartXY = function(x,y){
        _lx = x;
        _ly = y;
    };
    
    this.getTextWidth = function(ctx, str){
        ctx.font = this.getFace()+" "+this.getFontSize()+"px '"+this.getFont()+"'";
        if(ctx!=null){
            var tm=ctx.measureText(str);
            return tm.width;
        }
        else return 0;
    };
    
    this.getVarNames = function(label){
        return _varNames[label];
    };
    
    this.setPoint = function(pt){
        _point = pt;
    };
    

    this.toString = function () {
        return _Rep;
    };
    
    this.iMax2 = function(a,b){
        if(a>b){
            return(a);
        }else{
            return(b);
        }
    };
    
    this.iMax3 = function(a,b,c){
        if(a>b){
            if(a>c){
                return(a);
            }else{
                return c;
            }
        }else{
            if(b>c){
                return(b);
            }else{
                return c;
            }
        }
    };

};



/****************
 空式および空白文字
/***************/

exR.EmptyEx = function(v){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setType(-1);
    this.setFace("");
    this.setPer(0.7);
    this.setRep(v);
    this.setSpace(v);
    if(v=="") this.setVisibleEmptyMode();
    else this.setInvisibleEmptyMode();
};

exR.EmptyEx.prototype.setSpace = function(str){
    if(str === ""){
        this.setPer(0.7);
    }else if(str === " "){
        this.setPer(0.7);
    }else if(str === "thinspace"){
        this.setPer(0.15);
    }else if(str === "medspace"){
        this.setPer(0.3);
    }else if(str === "thickspace"){
        this.setPer(0.45);
    }else if(str === "quad"){
        this.setPer(1.0);
    }else if(str === "qquad"){
        this.setPer(2.0);
    }else{
        this.setPer(0.0);
    }
};

exR.EmptyEx.prototype.sizeEx = function (gra,pt) {
    this.setFontSize(pt);
    if(this.isVisibleEmptyMode()){
        this.setWidth(Math.floor(this.getTextWidth(gra, "\u2B1A")*this.getPer()));
    }
    else{
        this.setWidth(Math.floor(pt*0.4*this.getPer()));
    }
    this.setAscent(pt*7/10);
    this.setDescent(pt*3/10);
};

exR.EmptyEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum()>0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),"cyan");
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    if(this.getOpeColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getOpeColor());
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
    if(this.isVisibleEmptyMode()) MathTOUCH.drawString(gra,'\u2B1A',x,y,this.getFace(),Math.floor(this.getFontSize()*this.getPer()),this.getFont(),this.getOpeColor());

};

/****************
 数:ns=数字文字列
****************/
exR.NumberRep = function(ns){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setRep(ns);
    this.setType(0);
};

exR.NumberRep.prototype.toString = function() {
    return this.Rep;
};

exR.NumberRep.prototype.getNumber = function() {
    return "Number: " + this.toString();
};

exR.NumberRep.prototype.getTest = function() {
    this.sizeEx(gra,24);
    return "width: " + this.getWidth();
};

exR.NumberRep.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.setFontSize(pt);
    this.setWidth(this.getTextWidth(gra, this.getRep()));
    this.setAscent(pt*7/10);
    this.setDescent(pt*3/10);
    this.setOpeWidth(this.getWidth());
};

exR.NumberRep.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.setFontSize(pt);
    MathTOUCH.drawString(gra,this.getRep(),x,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
 変数:v=変数文字
****************/
exR.VariableEx = function(v){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    if(v.length>1){
        this.setRep(this.getLabel(v));
    }else{
        this.setRep(v);
    }
    this.setFace("italic");
    this.setType(1);
};

exR.VariableEx.prototype.getTest = function() {
    this.sizeEx(gra,24);
    return "width: " + this.getWidth();
};

exR.VariableEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.setFontSize(pt);
    this.setWidth(this.getTextWidth(gra, this.getRep()));
    this.setAscent(pt*7/10);
    this.setDescent(pt*3/10);
    this.setOpeWidth(this.getWidth());
};

exR.VariableEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }

    this.setFontSize(pt);
    MathTOUCH.drawString(gra,this.getRep(),x,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
 　（演算子）記号表現クラス（シンボル）
 *****************/
exR.SymbolRep = function(v){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setType(12);
    this.not=false;
    if(v.length>4 && v.substring(0,4)=="not "){
        this.not=true;
        this.setRep(this.getLabel(v.substring(4)));
    }
    else this.setRep(this.getLabel(v));
};

exR.SymbolRep.prototype.getTest = function() {
    this.sizeEx(gra,24);
    return "width: " + this.getWidth();
};

exR.SymbolRep.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.setFontSize(pt);
    this.setWidth(this.getTextWidth(gra, this.getRep()));
    this.setAscent(pt*7/10);
    this.setDescent(pt*3/10);
    this.setOpeWidth(this.getWidth());
};

exR.SymbolRep.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }

    this.setFontSize(pt);
    MathTOUCH.drawString(gra,this.getRep(),x,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    if(this.not){
        var ad=(this.getAscent()+this.getDescent())/4;
        MathTOUCH.drawLine(gra,x+this.getWidth()/4,y+this.getDescent()-ad,x+3*this.getWidth()/4,y-this.getAscent()+ad,this.getOpeColor());
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
    (3)2項演算子
 *****************/
exR.CenterOpeEx = function(t1,ope,t2){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setType(3);
    this.setPer(0.2);
    this.setGap(0);
    this.setTerm1(0,t1);
    this.setTerm1(1,t2);
    if(ope.length > 4 && ope.substring(0,4)=="not "){
        this.not=true;
        this.setRep(this.getOpeLabel(ope.substring(4)));
    }
    else{
        this.not=false;
        this.setRep(this.getOpeLabel(ope));
    }
};

exR.CenterOpeEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.getTerm1(1).sizeEx(gra,pt);
    this.setGap(Math.floor(pt*this.getPer()));
    this.setFontSize(pt);
    this.setOpeWidth(this.getTextWidth(gra, this.getRep()));
    this.setWidth(this.getTerm1(0).getWidth()+this.getTerm1(1).getWidth()+this.getOpeWidth()+this.getGap()*2);
    this.setAscent(this.iMax2(this.getTerm1(0).getAscent(),this.getTerm1(1).getAscent()));
    this.setDescent(this.iMax2(this.getTerm1(0).getDescent(),this.getTerm1(1).getDescent()));
};
                      
exR.CenterOpeEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x+this.getTerm1(0).getWidth()+this.getGap(),y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x+this.getTerm1(0).getWidth()+this.getGap(),y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x,y);
    this.getTerm1(1).drawEx(gra,pt,x+this.getWidth()-this.getTerm1(1).getWidth(),y);
    if(this.getOpeColorNum() > 1) this.setColor(this.getOpeColor());
    this.setFontSize(pt);
    MathTOUCH.drawString(gra,this.getRep(),x+this.getTerm1(0).getWidth()+this.getGap(),y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    if(this.not){
        var w=this.getOpeWidth();
        var a=pt*7/10;
        var d=pt*3/10;
        var ad=(a+d)/4;
        MathTOUCH.drawLine(gra,x+this.getTerm1(0).getWidth()+this.getGap()+w/8,y+d-ad,x+this.getTerm1(0).getWidth()+this.getGap()+3*w/4,y-a+ad-a/3,this.getOpeColor());

    }
    
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(2)括弧演算子
*****************/
exR.BracketEx = function(left,t1,right){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setType(2);
    this.setPer(0.1);
    this.setGap(0);
    this.setTerm1(0,t1);
    this.RepL=this.getOpeLabel(left);
    this.RepR=this.getOpeLabel(right);
}

exR.BracketEx.prototype.toString = function () {
    return this.RepL+this.getTerm1(0).toString()+this.RepR;
};

exR.BracketEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setGap(Math.floor(pt*this.getPer()));
    this.setFontSize(pt);
    this.setOpeWidth(this.getTextWidth(gra, this.RepL));
    this.setWidth(this.getOpeWidth()+this.getTerm1(0).getWidth()+this.getTextWidth(gra, this.RepR)+this.getGap()*2);
    this.setAscent(this.iMax2(pt*7/10,this.getTerm1(0).getAscent()));
    this.setDescent(this.iMax2(pt*3/10,this.getTerm1(0).getDescent()));
};

exR.BracketEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
        MathTOUCH.fillRect(gra,x+this.getOpeWidth()+this.getTerm1(0).getWidth()+this.getGap()*2,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
        MathTOUCH.drawRect(gra,x+this.getOpeWidth()+this.getTerm1(0).getWidth()+this.getGap()*2,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.setFontSize(pt);
    MathTOUCH.drawString(gra,this.RepL,x,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    MathTOUCH.drawString(gra,this.RepR,x+this.getOpeWidth()+this.getTerm1(0).getWidth()+this.getGap()*2,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    this.getTerm1(0).drawEx(gra,pt,x+this.getOpeWidth()+this.getGap(),y);
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
 (2)括弧（サイズ可変）演算子
 *****************/
exR.BigBracketEx = function(left,t1,right){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    this.setType(2);
    this.setPer(0.1);
    this.setGap(0);
    var _bigpoint=0;
    var _subwidth=0;
    this.setTerm1(0,t1);
    this.RepL=this.getOpeLabel(left);
    this.RepR=this.getOpeLabel(right);
    var _subBase=0;

    this.setSubBase = function(s){
        _subBase=s;
    };
    
    this.getSubBase = function(){
        return _subBase;
    };
                      
    this.setBigpoint = function(b){
        _bigpoint=b;
    };
                      
    this.getBigpoint = function(){
        return _bigpoint;
    };
                      
    this.setSubwidth = function(s){
        _subwidth=s;
    };
                      
    this.getSubwidth = function(){
        return _subwidth;
    };
};

exR.BigBracketEx.prototype.toString = function () {
        return this.RepL+this.getTerm1(0).toString()+this.RepR;
};

exR.BigBracketEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setGap(Math.floor(pt*this.getPer()));
    this.setBigpoint(this.iMax2(Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())),this.getBigpoint()));
    this.setFontSize(this.getBigpoint());
    this.setSubwidth(this.getTextWidth(gra, this.RepL));
    this.setOpeWidth(this.getSubwidth());
    this.setWidth(this.getSubwidth()+this.getTerm1(0).getWidth()+this.getTextWidth(gra, this.RepR)+this.getGap()*2);
    this.setAscent(this.getTerm1(0).getAscent());
    this.setDescent(this.getTerm1(0).getDescent());
    this.setSubBase(this.getDescent()*0.3);
};

exR.BigBracketEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
        MathTOUCH.fillRect(gra,x+this.getSubwidth()+this.getTerm1(0).getWidth()+this.getGap()*2,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
        MathTOUCH.drawRect(gra,x+this.getSubwidth()+this.getTerm1(0).getWidth()+this.getGap()*2,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    MathTOUCH.drawString(gra,this.RepL,x,y+this.getSubBase(),this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    MathTOUCH.drawString(gra,this.RepR,x+this.getSubwidth()+this.getTerm1(0).getWidth()+this.getGap()*2,y+this.getSubBase(),this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    this.getTerm1(0).drawEx(gra,pt,x+this.getSubwidth()+this.getGap(),y);
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(2）前置単項演算子（サイズ可変）
*****************/
exR.BigLeftOpeEx = function(left,t1) {
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    this.setType(2);
    this.setPer(0.1);
    this.setGap(0);
    this.setTerm1(0,t1);
    this.RepL=this.getOpeLabel(left);
    var _subBase=0;
    var _bigpoint=0;
    var _subwidth=0;
    
    this.setSubBase = function(s){
          _subBase=s;
    };
    
    this.getSubBase = function(){
          return _subBase;
    };
    
    this.setBigpoint = function(b){
          _bigpoint=b;
    };
                      
    this.getBigpoint = function(){
        return _bigpoint;
    };
    
    this.setSubwidth = function(s){
        _subwidth=s;
    };
                      
    this.getSubwidth = function(){
        return _subwidth;
    };
};

exR.BigLeftOpeEx.prototype.toString = function () {
        return this.RepL+this.getTerm1(0).toString();
};
exR.BigLeftOpeEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setGap(Math.floor(pt*this.getPer()));
    this.setBigpoint(Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*0.9));
    this.setFontSize(this.getBigpoint());
    this.setOpeWidth(this.getTextWidth(gra, this.RepL));
    this.setWidth(this.getOpeWidth()+this.getTerm1(0).getWidth()+this.getGap());
    this.setAscent(this.getTerm1(0).getAscent());
    this.setDescent(this.getTerm1(0).getDescent());
    this.setSubBase(this.getDescent()*0.3);
};

exR.BigLeftOpeEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.setFontSize(this.getBigpoint());
    MathTOUCH.drawString(gra,this.RepL,x,y+this.getSubBase(),this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    this.getTerm1(0).drawEx(gra,pt,x+this.getWidth()-this.getTerm1(0).getWidth(),y);
    if(this.getBaseColorNum() >0){
            MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
 (2）後置単項演算子（サイズ可変）
*****************/
exR.BigRightOpeEx = function(t1,right){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    this.setType(2);
    this.setPer(0.1);
    this.setGap(0);
    this.setTerm1(0,t1);
    this.RepR=this.getOpeLabel(right);
    var _subBase=0;
    var _bigpoint=0;
    var _subwidth=0;
                      
    this.setSubBase = function(s){
        _subBase=s;
    };
                      
    this.getSubBase = function(){
        return _subBase;
    };
    
    this.setBigpoint = function(b){
        _bigpoint=b;
    };
    
    this.getBigpoint = function(){
        return _bigpoint;
    };
                      
    this.setSubwidth = function(s){
        _subwidth=s;
    };
                      
    this.getSubwidth = function(){
        return _subwidth;
    };
};

exR.BigRightOpeEx.prototype.toString = function () {
    return this.getTerm1(0).toString()+this.RepR;
};

exR.BigRightOpeEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setGap(Math.floor(pt*this.getPer()));
    this.setBigpoint(Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*0.9));
    this.setFontSize(this.getBigpoint());
    this.setOpeWidth(this.getTextWidth(gra, this.RepR));
    this.setWidth(this.getOpeWidth()+this.getTerm1(0).getWidth()+this.getGap());
    this.setAscent(this.getTerm1(0).getAscent());
    this.setDescent(this.getTerm1(0).getDescent());
    this.setSubBase(this.getDescent()*0.3);
};

exR.BigRightOpeEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x+this.getTerm1(0).getWidth()+this.getGap(),y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x+this.getTerm1(0).getWidth()+this.getGap(),y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x,y);
    this.setFontSize(this.getBigpoint());
    MathTOUCH.drawString(gra,this.RepR,x+this.getTerm1(0).getWidth()+this.getGap(),y+this.getSubBase(),this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/**************** 
 (3）分数演算子
*****************/
exR.FractionalEx = function(t1,t2){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    this.setType(3);
    this.setTerm1(0,t1);
    this.setTerm1(1,t2);
    this.divline=0;
};

exR.FractionalEx.prototype.toString = function () {
    return this.getTerm1(0).toString()+"/"+this.getTerm1(1).toString();
};

exR.FractionalEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.getTerm1(1).sizeEx(gra,pt);
    this.divline=Math.floor(pt/5);
    this.setOpeWidth(5);
    this.setWidth(this.iMax2(this.getTerm1(0).getWidth()+2,this.getTerm1(1).getWidth()+2));
    this.setAscent(this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent()+this.divline+1);
    this.setDescent(this.getTerm1(1).getAscent()+this.getTerm1(1).getDescent()-this.divline+1);
};
    
exR.FractionalEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    var dx=0;
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.divline-this.getOpeWidth()/2,this.getWidth(),this.getOpeWidth(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.divline-this.getOpeWidth()/2,this.getWidth(),this.getOpeWidth(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    if(this.getTerm1(0).getWidth()<this.getTerm1(1).getWidth()){
        dx=Math.floor((this.getTerm1(1).getWidth()-this.getTerm1(0).getWidth())/2.0);
        this.getTerm1(0).drawEx(gra,pt,x+1+dx,y-this.divline-this.getTerm1(0).getDescent()-1);
        this.getTerm1(1).drawEx(gra,pt,x+1,y-this.divline+this.getTerm1(1).getAscent()+1);
        MathTOUCH.drawLine(gra,x,y-this.divline-1,x+this.getWidth(),y-this.divline-1,this.getOpeColor());
    }else{
        dx=Math.floor((this.getTerm1(0).getWidth()-this.getTerm1(1).getWidth())/2.0);
        this.getTerm1(0).drawEx(gra,pt,x+1,y-this.divline-this.getTerm1(0).getDescent()-1);
        this.getTerm1(1).drawEx(gra,pt,x+1+dx,y-this.divline+this.getTerm1(1).getAscent()+1);
        MathTOUCH.drawLine(gra,x,y-this.divline-1,x+this.getWidth(),y-this.divline-1,this.getOpeColor());
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
　(2）上付き型演算子
 *****************/
exR.SuperscriptOpeEx = function(t1,ope){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    this.setType(2);
    this.setPer(0.1);
    this.setGap(0);
    this.setTerm1(0,t1);
    this.setRep(this.getOpeLabel(ope));
    var _subBase=0;
    var _subpoint=0;
    var _opeAscent=0;
    
    this.setSubBase = function(s){
        _subBase=s;
    };
    
    this.getSubBase = function(){
        return _subBase;
    };
                      
    this.setSubpoint = function(s){
        _subpoint=s;
    };
                      
    this.getSubpoint = function(){
        return _subpoint;
    };
                      
    this.setOpeAscent = function(o){
        _opeAscent=o;
    };
                      
    this.getOpeAscent = function(){
        return _opeAscent;
    };
};

exR.SuperscriptOpeEx.prototype.toString = function () {
    return this.getTerm1(0).toString()+this.getRep();
};
    
exR.SuperscriptOpeEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.setSubpoint(Math.floor(pt*0.6));
    this.getTerm1(0).sizeEx(gra,pt);
    this.setGap(Math.floor(pt*this.getPer()));
    this.setSubBase(Math.floor(this.getTerm1(0).getAscent()*0.5));
    this.setFontSize(this.getSubpoint());
    this.setOpeWidth(this.getTextWidth(gra, this.getRep()));
    this.setWidth(this.getTerm1(0).getWidth()+this.getOpeWidth()+this.getGap());
    this.setAscent(this.iMax2(this.getTerm1(0).getAscent(),this.getSubBase()+this.getSubpoint()*7/10));
    this.setDescent(this.iMax2(this.getTerm1(0).getDescent(),this.getSubpoint()*3/10-this.getSubBase()));
    this.setOpeAscent(this.getSubpoint()*7/10);
};
    
exR.SuperscriptOpeEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getTerm1(0).type===5){
        if(this.getOpeBackColorNum() > 0){
            MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth()-this.getTerm1(0).getWidth(),this.getOpeAscent(),this.getOpeBackColor());
        }
        if(this.getOpeFrameColorNum() > 0){
            MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth()-this.getTerm1(0).getWidth(),this.getOpeAscent(),this.getOpeFrameColor());
        }
        if(this.getFrameColorNum () > 0){
            MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
        }
        this.getTerm1(0).drawEx(gra,pt,x+this.getOpeWidth+this.getGap(),y);
        this.setFontSize(this.getSubpoint());
        MathTOUCH.drawString(gra,this.getRep(),x,y-this.getSubBase(),this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    }
    else{
        if(this.getOpeBackColorNum() > 0){
            MathTOUCH.fillRect(gra,x+this.getTerm1(0).getWidth()+this.getGap(),y-this.getAscent(),this.getWidth()-this.getTerm1(0).getWidth(),this.getOpeAscent(),this.getOpeBackColor());
        }
        if(this.getOpeFrameColorNum() > 0){
            MathTOUCH.drawRect(gra,x+this.getTerm1(0).getWidth()+this.getGap(),y-this.getAscent(),this.getWidth()-this.getTerm1(0).getWidth(),this.getOpeAscent(),this.getOpeFrameColor());
        }
        if(this.getFrameColorNum () > 0){
            MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
        }
        this.getTerm1(0).drawEx(gra,pt,x,y);
        this.setFontSize(this.getSubpoint());
        MathTOUCH.drawString(gra,this.getRep(),x+this.getTerm1(0).getWidth()+this.getGap(),y-this.getSubBase(),this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

    
/****************
　(4）上置単項演算子
*****************/
exR.CenterTopEx = function(sym,t1,left,right) {
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    this.setType(4);
    this.setPer(0.6);
    var _gper = 0.2;
    this.setGap(0);
    var _subpoint = 0;
    var _subwidth = 0;
    var _subBase = 0;
    var _up=1.0;
    this.setTerm1(0,t1);
    this.setTerm1(1,left);
    this.setTerm1(2,right);
    this.setRep(this.getOpeLabel(sym));
    this.setSubRatio=function(pp){
        this.per=pp;
    }
    this.setGper = function(g){
        _gper = g;
    };
    
    this.getGper = function(){
        return _gper;
    };
    
    this.setSubBase = function(s){
        _subBase=s;
    };
    
    this.getSubBase = function(){
        return _subBase;
    };
    
    this.setSubpoint = function(s){
        _subpoint=s;
    };
    
    this.getSubpoint = function(){
        return _subpoint;
    };
    
    this.setSubwidth = function(s){
        _subwidth=s;
    };
    
    this.getSubwidth = function(){
        return _subwidth;
    };
    
    this.setUp = function(u){
        _up=u;
    };
    
    this.getUp = function(){
        return _up;
    };
};

exR.CenterTopEx.prototype.setSubRatio = function(pp){
    this.setPer(pp);
};
    
exR.CenterTopEx.prototype.setUp = function(u){
    this.up=u;
};
    
exR.CenterTopEx.prototype.toString = function () {
    return this.getTerm1(1).toString()+this.getRep()+this.getTerm1(0).toString()+this.getTerm1(2).toString();
};
    
exR.CenterTopEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.getTerm1(1).sizeEx(gra,pt);
    this.getTerm1(2).sizeEx(gra,pt);
    this.setGap(Math.floor(pt*this.getGper()));
    this.setSubpoint(Math.floor(pt*this.getPer()));
    this.getTerm1(0).sizeEx(gra,this.getSubpoint());
    this.setFontSize(pt);
    this.setSubwidth(this.getTextWidth(gra, this.getRep()));
    if(this.getSubwidth()<this.getTerm1(0).getWidth()){
        this.setOpeWidth(this.getTerm1(0).getWidth());
    }else{
        this.setOpeWidth(this.getSubwidth());
    }
    this.setSubBase(Math.floor((this.getTerm1(0).getDescent()+pt*7/10)*this.getUp()));
    this.setWidth(this.iMax2(this.getSubwidth(),this.getTerm1(0).getWidth())+this.getTerm1(1).getWidth()+this.getTerm1(2).getOpeWidth()+this.getGap()*2);
    this.setAscent(this.iMax2(this.iMax2(this.iMax2(this.getSubBase()+this.getTerm1(0).getAscent(),pt*7/10),this.getTerm1(1).getAscent()),this.getTerm1(2).getAscent()));
    this.setDescent(this.iMax2(this.iMax2(this.iMax2(this.getTerm1(0).getDescent(),pt*3/10),this.getTerm1(1).getDescent()),this.getTerm1(2).getDescent()));
};

exR.CenterTopEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    var dx=0;
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x+this.getTerm1(1).getWidth()+this.getGap(),y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x+this.getTerm1(1).getWidth()+this.getGap(),y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(1).drawEx(gra,pt,x,y);
    this.getTerm1(2).drawEx(gra,pt,x+this.getWidth(),y);
    this.getTerm1(2).drawEx(gra,pt,x+this.getWidth()-this.getTerm1(2).getOpeWidth,y);
        
    if(this.getSubwidth()<this.getTerm1(0).getWidth()){
        dx=(this.getTerm1(0).getWidth()-this.getSubwidth())/2;
        this.getTerm1(0).drawEx(gra,this.getSubpoint(),x+this.getTerm1(1).getWidth()+this.getGap(),y-this.getSubBase());
        this.setFontSize(pt);
        MathTOUCH.drawString(gra,this.getRep(),x+this.getTerm1(1).getWidth()+this.getGap()+dx,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    }
    else{
        dx=(this.getSubwidth()-this.getTerm1(0).getWidth())/2;
        this.getTerm1(0).drawEx(gra,this.getSubpoint(),x+this.getTerm1(1).getWidth()+this.getGap()+dx,y-this.getSubBase());
        this.setFontSize(pt);
        MathTOUCH.drawString(gra,this.getRep(),x+this.getTerm1(1).getWidth()+this.getGap(),y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(5）指示文字列入力処理の文字とカーソル
*****************/
exR.EditBox = function() {
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFont("Lucida Grande");
    this.setFace("");
    this.setType(5);
    this.frontText=null;
    this.backText=null;
    this.matmax=1;
    this.index=0;
    this.row=new Array();
    this.row[0]=1;
    this.col=new Array();
    this.col[0]=1;
    this.matnum=0;
    this.curCol="gray";
    this.cgap=5;
    this.rgap=5;
    this.matgap=25;
    this.callet="|";
    this.setCursorOff=function(){this.callet="";}
    this.setCursorOn=function(){this.callet="|";}
};

exR.EditBox.prototype.setCursorColor = function(c){
        this.curCol=c;
};
exR.EditBox.prototype.insert = function(st){
    if(st=='\u27B1') this.addColumn();
    else if(st=='\u23cE') this.addRow();
    else if(st=='\u21E9') this.addMat();
    else if(this.frontText!=null){
        if(this.frontText[this.index]!=null){
            if(this.frontText[this.index][this.matnum]!=null) this.frontText[this.index][this.matnum]=this.frontText[this.index][this.matnum]+st;
            else this.frontText[this.index][this.matnum]=st;
        }
        else{
            this.frontText[this.index]=new Array();
            this.matnum=0;
            this.frontText[this.index][this.matnum]=st;
            this.row[this.index]=1;
            this.col[this.index]=1;
        }
    }
    else{
        this.frontText=new Array();
        this.matmax=1;
        this.index=0;
        this.row=new Array();this.row[this.index]=1;
        this.col=new Array();this.col[this.index]=1;
        this.matnum=0;
        this.frontText[this.index]=new Array();
        this.frontText[this.index][this.matnum]=st;
    }
};

exR.EditBox.prototype.addColumn = function(){
    if(this.frontText==null){
        this.frontText=new Array();
        this.matmax=1;
        this.index=0;
        this.row=new Array();this.row[this.index]=1;
        this.col=new Array();this.col[this.index]=1;
        this.matnum=0;
        this.frontText[this.index]=new Array();
        this.frontText[this.index][this.matnum]=null;
    }
    var r=Math.floor(this.matnum/this.col[this.index]);
    var c=this.matnum % this.col[this.index];
    this.col[this.index]++;
    var front=new Array();
    for(var k=0;k<this.matmax;k++){
        front[k]=new Array();
        for(var i=0;i<this.row[k];i++){
            for(var j=0;j<this.col[k];j++){
                if(k==this.index){
                    if(j<=c) front[k][i*this.col[k]+j]=this.frontText[k][i*(this.col[k]-1)+j];
                    else if(j==c+1) front[k][i*this.col[k]+j]=null;
                    else front[k][i*this.col[k]+j]=this.frontText[k][i*(this.col[k]-1)+j-1];
                }
                else front[k][i*this.col[k]+j]=this.frontText[k][i*this.col[k]+j];
            }
        }
    }
    this.frontText=front;
    this.matnum=r*this.col[this.index]+c+1;
};

exR.EditBox.prototype.deleteColumn = function(){
    if(this.frontText==null) return 0;
    if(this.col[this.index]<=1) return 0;
    var Reject=false;
    var cscol=this.matnum%this.col[this.index];
    for(var i=0;i<this.row[this.index];i++){
        if(this.frontText[this.index][i*this.col[this.index]+cscol]!=null){
            Reject=true;
            break;
        }
    }
    if(Reject||this.backText!=null){
        return 0;
    }
    var front=new Array();
    if(cscol==(this.col[this.index]-1)) cscol--;
    var csrow=Math.floor(this.matnum/this.col[this.index]);
    for(var i=0;i<this.row[this.index];i++) for(var j=0;j<this.col[this.index]-1;j++){
        front[i*(this.col[this.index]-1)+j]=this.frontText[this.index][i*this.col[this.index]+j];
    }
    this.frontText[this.index]=front;
    this.col[this.index]--;
    this.matnum=csrow*this.col[this.index]+cscol;
    return 1;
};

exR.EditBox.prototype.addRow = function(){
    if(this.frontText==null){
        this.frontText=new Array();
        this.matmax=1;
        this.index=0;
        this.row=new Array();this.row[this.index]=1;
        this.col=new Array();this.col[this.index]=1;
        this.matnum=0;
        this.frontText[this.index]=new Array();
        this.frontText[this.index][this.matnum]=null;
        return;
    }
    var r=Math.floor(this.matnum/this.col[this.index]);
    var c=this.matnum % this.col[this.index];
    this.row[this.index]++;
    var front=new Array();
    for(var k=0;k<this.matmax;k++){
        if(this.frontText[k]==null){front[k]=null;continue;}
        front[k]=new Array();
        for(var i=0;i<this.row[k];i++){
            for(var j=0;j<this.col[k];j++){
                if(k==this.index){
                    if(i<=r) front[k][i*this.col[k]+j]=this.frontText[k][i*this.col[k]+j];
                    else if(i==r+1) front[k][i*this.col[k]+j]=null;
                    else front[k][i*this.col[k]+j]=this.frontText[k][(i-1)*this.col[k]+j];
                }
                else front[k][i*this.col[k]+j]=this.frontText[k][i*this.col[k]+j];
            }
        }
    }
    this.frontText=front;
    this.matnum=(r+1)*this.col[this.index];
};

exR.EditBox.prototype.deleteRow = function(){
    if(this.frontText==null) return 0;
    if(this.row[this.index]<=1) return 0;
    var front=new Array();
    var cscol=this.matnum % this.col[this.indext];
    var csrow=Math.floor(this.matnum/this.col[this.index]);
    if(csrow==(this.row[this.index]-1)){
        this.backText=null;
        csrow--;
    }
    for(var i=0;i<this.row[this.index]-1;i++) for(var j=0;j<this.col[this.index];j++){
        front[i*this.col[this.index]+j]=this.frontText[this.index][i*this.col[this.index]+j];
    }
    this.frontText[this.index]=front;
    this.row[this.index]--;
    this.matnum=csrow*this.col[this.index]+cscol;
    return 1;
};

exR.EditBox.prototype.addMat = function(){
    if(this.frontText==null){console.log("addMat");
        this.frontText=new Array();
        this.matmax=1;
        this.index=0;
        this.row=new Array();this.row[this.index]=1;
        this.col=new Array();this.col[this.index]=1;
        this.matnum=0;
        this.frontText[this.index]=new Array();
        this.frontText[this.index][this.matnum]=null;
        return;
    }
    else if(this.frontText[this.index]==null){
        return;
    }
    this.matmax++;
    var front=new Array();
    var row1=new Array();
    var col1=new Array();
    for(var k=0;k<this.matmax-1;k++){
        front[k]=new Array();
        row1[k]=this.row[k];
        col1[k]=this.col[k];
        for(var i=0;i<this.row[k];i++){
            for(var j=0;j<this.col[k];j++){
                front[k][i*this.col[k]+j]=this.frontText[k][i*this.col[k]+j];
            }
        }
    }
    this.index=this.matmax-1;
    this.matnum=0;
    front[this.index]=new Array();
    front[this.index][this.matnum]=null;
    row1[this.index]=1;
    col1[this.index]=1;
    this.frontText=front;
    this.row=row1;
    this.col=col1;
};

exR.EditBox.prototype.goLeft = function(){
    var flen;
    var ch;
    if(this.frontText!=null){
        if(this.frontText[this.index]!=null){
            if(this.frontText[this.index][this.matnum]==null){
                if(this.matnum==0){
                    if(this.index==0) return 0;
                    else{
                        this.frontText[this.index][this.matnum]=this.backText;
                        this.index--;
                        this.matnum=this.row[this.index]*this.col[this.index]-1;
                        this.backText=null;
                        return 1;
                    }
                }
                else{
                    this.frontText[this.index][this.matnum]=this.backText;
                    this.matnum--;
                    this.backText=null;
                    return 1;
                }
            }
            flen=this.frontText[this.index][this.matnum].length;
            if(flen==0){
                if(this.matnum==0){this.frontText[this.index][this.matnum]=null;return 0;}
                else{
                    this.frontText[this.index][this.matnum]=this.backText;
                    this.matnum--;
                    this.backText=null;
                    return 1;
                }
            }
            ch=this.frontText[this.index][this.matnum].substring(flen-1);
            if(this.backText!=null) this.backText=ch+this.backText;
            else this.backText=ch;
            if(flen>1) this.frontText[this.index][this.matnum]=this.frontText[this.index][this.matnum].substring(0,flen-1);
            else this.frontText[this.index][this.matnum]=null;
            return 1;
        }
        else{
            if(this.index==0) return 0;
            else{
                this.index--;
                this.matnum=this.row[this.index]*this.col[this.index]-1;
                this.backText=null;
                return 1;
            }
        }
    }
    else return 0;
};

exR.EditBox.prototype.goRight = function(){
    var blen;
    var ch;
    if(this.backText!=null){
        blen=this.backText.length;
        if(blen==0){this.backText=null;return 0;}
        ch=this.backText.substring(0,1);
        if(this.frontText!=null){
            if(this.frontText[this.index]!=null){
                if(this.frontText[this.index][this.matnum]!=null) this.frontText[this.index][this.matnum]=this.frontText[this.index][this.matnum]+ch;
                else this.frontText[this.index][this.matnum]=ch;
            }
            else{
                this.frontText[this.index]=new Array();
                this.frontText[this.index][0]=ch;
            }
        }
        else{
            this.frontText=new Array();
            this.matmax=1;
            this.index=0;
            this.row=new Array();this.row[0]=1;
            this.col=new Array();this.col[0]=1;
            this.matnum=0;
            this.frontText[this.index][this.matnum]=ch;
        }
        if(blen>1) this.backText=this.backText.substring(1);
        else this.backText=null;
        return 1;
    }
    else if(this.frontText!=null){
        if(this.frontText[this.index]!=null){
            if(this.matnum<this.row[this.index]*this.col[this.index]-1){
                this.matnum++;
                this.backText=this.frontText[this.index][this.matnum];
                this.frontText[this.index][this.matnum]=null;
                return 1;
            }
            else{
                if(this.index<this.matmax-1){
                    this.index++;
                    this.matnum=0;
                    if(this.frontText[this.index]!=null){
                        this.backText=this.frontText[this.index][this.matnum];
                        this.frontText[this.index][this.matnum]=null;
                    }
                    return 1;
                }
                else return 0;
            }
        }
        else{
            if(this.index<this.matmax-1){
                this.index++;
                this.matnum=0;
                if(this.frontText[this.index]!=null){
                    this.backText=this.frontText[this.index][this.matnum];
                    this.frontText[this.index][this.matnum]=null;
                }
            return 1;
            }
            else return 0;
        }
    }
    else{
        return 0;
    }
};

exR.EditBox.prototype.goUp = function(){
    if(this.frontText!=null){
        if(this.frontText[this.index]!=null){
            if(Math.floor(this.matnum/this.col[this.index])>0){
                var matnum2=this.matnum-this.col[this.index];
                var len;
                if(this.frontText[this.index][this.matnum]!=null){
                    len=this.frontText[this.index][this.matnum].length;
                    if(this.backText!=null) this.frontText[this.index][this.matnum]+=this.backText;
                }
                else{
                    len=0;
                    if(this.backText!=null) this.frontText[this.index][this.matnum]=this.backText;
                }
                var len2;
                if(this.frontText[this.index][matnum2]!=null) len2=this.frontText[this.index][matnum2].length;
                else len2=0;
                if(len>0){
                    if(len2>len){
                        this.backText=this.frontText[this.index][matnum2].substring(len);
                        this.frontText[this.index][matnum2]=this.frontText[this.index][matnum2].substring(0,len);
                    }
                    else this.backText=null;
                }
                else{
                    this.backText=this.frontText[this.index][matnum2];
                    this.frontText[this.index][matnum2]=null;
                }
                this.matnum=matnum2;
                return 1;
            }
        }
    }
    return 0;
};

exR.EditBox.prototype.goDown = function(){
    if(this.frontText!=null){
        if(this.frontText[this.index]!=null){
            if(this.matnum/this.col[this.index]<this.row[this.index]-1){
                var matnum2=this.matnum+this.col[this.index];
                var len;
                if(this.frontText[this.index][this.matnum]!=null){
                    len=this.frontText[this.index][this.matnum].length;
                    if(this.backText!=null) this.frontText[this.index][this.matnum]+=this.backText;
                }
                else{
                    len=0;
                    if(this.backText!=null) this.frontText[this.index][this.matnum]=this.backText;
                }
                var len2;
                if(this.frontText[this.index][matnum2]!=null) len2=this.frontText[this.index][matnum2].length;
                else len2=0;
                if(len>0){
                    if(len2>len){
                        this.backText=this.frontText[this.index][matnum2].substring(len);
                        this.frontText[this.index][matnum2]=this.frontText[this.index][matnum2].substring(0,len);
                    }
                    else this.backText=null;
                }
                else{
                    this.backText=this.frontText[this.index][matnum2];
                    this.frontText[this.index][matnum2]=null;
                }
                this.matnum=matnum2;
                return 1;
            }else if(this.matnum==this.row[this.index]*this.col[this.index]-1 && this.backText==null){
                return 2;
            }else{
                if(this.backText!=null){this.frontText[this.index][this.matnum]+=this.backText;}
                return 2;
            }
        }
    }
    return 0;
};

exR.EditBox.prototype.doBS = function(){
    var flen;
    var ch;
    if(this.frontText!=null){
        if(this.frontText[this.index]!=null){
            if(this.frontText[this.index][this.matnum]==null){
                if(this.matnum==0){
                    if(this.index>0){
                        if(this.row[this.index]*this.col[this.index]>1){
                            for(var i=0;i<this.row[this.index];i++){
                                for(var j=0;j<this.col[this.index];j++){
                                    if(this.frontText[this.index]!=null){
                                        if(this.backText!=null){
                                            this.backText=this.backText+this.frontText[this.index][i*this.col[this.index]+j];
                                        }else{
                                            this.backText=this.frontText[this.index][i*this.col[this.index]+j];
                                        }
                                    }
                                }
                            }
                            if(this.backText.length==0){
                                this.backText=null;
                            }
                        }
                        this.matmax--;
                        var front=new Array();
                        var row1=new Array();
                        var col1=new Array();
                        for(var k=0;k<this.matmax;k++){
                            row1[k]=this.row[k];
                            col1[k]=this.col[k];
                            front[k]=new Array();
                            for(var i=0;i<this.row[k];i++){
                                for(var j=0;j<this.col[k];j++){
                                    front[k][i*this.col[k]+j]=this.frontText[k][i*this.col[k]+j];
                                }
                            }
                        }
                        this.frontText=front;
                        this.row=row1;
                        this.col=col1;
                        this.index--;
                        this.matnum=this.row[this.index]*this.col[this.index]-1;
                        return 1;
                    }else{
                        return 0;
                    }
                }else if(this.matnum % this.col[this.index]==0){
                    var front=new Array();
                    if(this.col[this.index]>1){
                        if(this.backText==null) this.backText="";
                        for(var j=1;j<this.col[this.index];j++){
                            if(this.frontText[this.index][this.matnum+j]!=null) this.backText=this.backText+this.frontText[this.index][this.matnum+j];
                        }
                        if(this.backText.length==0) this.backText=null;
                        for(var i=0;i<this.row[this.index];i++) for(var j=0;j<this.col[this.index];j++){
                            if(i*this.col[this.index]+j<this.matnum){
                                front[i*this.col[this.index]+j]=this.frontText[this.index][i*this.col[this.index]+j];
                            }else if(i*this.col[this.index]+j>=this.matnum+this.col[this.index]){
                                front[(i-1)*this.col[this.index]+j]=this.frontText[this.index][i*this.col[this.index]+j];
                            }
                        }
                        this.frontText[this.index]=front;
                        this.row[this.index]--;
                        this.matnum--;
                        return 1;
                    }else{
                        for(var i=0;i<this.row[this.index];i++){
                            if(i*this.col[this.index]<this.matnum){
                                front[i*this.col[this.index]]=this.frontText[this.index][i*this.col[this.index]];
                            }else if(i*this.col[this.index]>=this.matnum+this.col[this.index]){
                                front[(i-1)*this.col[this.index]]=this.frontText[this.index][i*this.col[this.index]];
                            }
                        }
                        this.frontText[this.index]=front;
                        this.row[this.index]--;
                        this.matnum--;
                        return 1;
                    }
                }else{
                    var Reject=false;
                    var ccc=this.matnum%this.col[this.index];
                    for(var i=0;i<this.row[this.index];i++){
                        if(this.frontText[this.index][i*this.col[this.index]+ccc]!=null){
                            Reject=true;
                            break;
                        }
                    }
                    if(Reject||this.backText!=null){
                        return 0;
                    }
                    var front=new Array();
                    ccc=this.matnum%this.col[this.index]-1;
                    var ccr=Math.floor(this.matnum/this.col[this.index]);
                    for(var i=0;i<this.row[this.index];i++) for(var j=0;j<this.col[this.index]-1;j++){
                        if(j<ccc){
                            front[i*(this.col[this.index]-1)+j]=this.frontText[this.index][i*this.col[this.index]+j];
                        }else if(j==ccc){
                            if(this.frontText[this.index][i*this.col[this.index]+j+1]==null){
                                front[i*(this.col[this.index]-1)+j]=this.frontText[this.index][i*this.col[this.index]+j];
                            }else if(this.frontText[this.index][i*this.col[this.index]+j]==null){
                                front[i*(this.col[this.index]-1)+j]=this.frontText[this.index][i*this.col[this.index]+j+1];
                            }else{
                                front[i*(this.col[this.index]-1)+j]=this.frontText[this.index][i*this.col[this.index]+j]+this.frontText[this.index  ][i*this.col[this.index]+j+1];
                            }
                        }else{
                            front[i*(this.col[this.index]-1)+j]=this.frontText[this.index][i*this.col[this.index]+j+1];
                        }
                    }
                    this.frontText[this.index]=front;
                    this.col[this.index]--;
                    this.matnum=ccr*this.col[this.index]+ccc;
                    return 1;
                }
            }
            flen=this.frontText[this.index][this.matnum].length;
            if(flen==0){this.frontText[this.index][this.matnum]=null;return 0;}
            ch=this.frontText[this.index][this.matnum].substring(flen-1);
            if(flen>1) this.frontText[this.index][this.matnum]=this.frontText[this.index][this.matnum].substring(0,flen-1);
            else this.frontText[this.index][this.matnum]=null;
            return 1;
        }else{
            this.matmax--;
            var front=new Array();
            var row1=new Array();
            var col1=new Array();
            for(var k=0;k<this.matmax;k++){
                row1[k]=this.row[k];
                col1[k]=this.col[k];
                front[k]=new Array();
                for(var i=0;i<this.row[k];i++){
                    for(var j=0;j<this.col[k];j++){
                        front[k][i*this.col[k]+j]=this.frontText[k][i*this.col[k]+j];
                    }
                }
            }
            this.frontText=front;
            this.row=row1;
            this.col=col1;
            this.index--;
            this.matnum=this.row[this.index]*this.col[this.index]-1;
            this.backText=null;
            return 1;
        }
    }else{
        return 0;
    }
    
};


exR.EditBox.prototype.clear = function(){
    this.frontText=null;
    this.backText=null;
    this.matmax=0;
    this.index=0;
    this.matnum=0;
};

exR.EditBox.prototype.isEmpty = function(){
    if(this.getText()==null) return true;
    return(this.frontText==null && this.backText==null);
};

exR.EditBox.prototype.getText = function(){
    var ans=null;
    var ans2=null;
    if(this.frontText!=null){
        ans="";
        for(var k=0;k<this.matmax;k++){
            if(this.frontText[k]!=null){
                ans2="";
                for(var i=0;i<this.row[k];i++){
                    for(var j=0;j<this.col[k];j++){
                        if(this.frontText[k][i*this.col[k]+j]!=null) ans2=ans2+this.frontText[k][i*this.col[k]+j];
                        if(k==this.index && i*this.col[k]+j==this.matnum && this.backText!=null){
                            if(ans2==null) ans2=this.backText;
                            else ans2=ans2+this.backText;
                        }
                        if(j<this.col[k]-1) ans2=ans2+'\u27B1';
                    }
                    if(i<this.row[k]-1) ans2=ans2+'\u23cE';
                }
                if(ans2.length>0){
                    if(this.row[k]*this.col[k]==1) ans=ans+ans2;
                    else ans=ans+'\u21E9'+ans2+'\u22A1';
                }
            }
        }
        if(ans.length==0) ans=null;
    }
    return ans;
};

exR.EditBox.prototype.getTextForPrint = function(fb,idx,r,c){
    var emp=" ";
    var ans=emp;
    if(this.frontText==null){
        if(fb==0||fb==3) ans=this.callet;
        else ans=emp;
        return ans;
    }
    if(this.frontText[idx]!=null){
        if(this.frontText[idx][r*this.col[idx]+c]!=null){
            if(fb==2||fb==3) ans=emp;
            else ans=this.frontText[idx][r*this.col[idx]+c];
        }
        if(idx==this.index&&r*this.col[idx]+c==this.matnum){
            if(this.backText!=null){
                if(fb==0) ans=ans+this.callet+this.backText;
                else if(fb==2) ans=this.backText;
                else if(fb==3) ans=this.callet;
            }
            else{
                if(fb==0) ans=ans+this.callet;
                else if(fb==2) ans=emp;
                else if(fb==3) ans=this.callet;
            }
        }
    }
    else if(idx==this.index){
        if(fb==0||fb==3) ans=this.callet;
        else ans=emp;
    }
    return ans;
};

exR.EditBox.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.setFontSize(pt);
    this.setAscent(pt*7/10);
    var dd=pt*3/10;
        this.cwidth=new Array();
    if(this.isEmpty()){
        this.setWidth(this.getTextWidth(gra, this.getTextForPrint(0,0,0,0)));
        this.cwidth[0]=new Array();
        this.cwidth[0][0]=this.getTextWidth(gra, this.getTextForPrint(0,0,0,0));
        this.setDescent(dd);
        this.setOpeWidth(0);
        return;
    }

    this.setWidth(0);
    this.cgap=5;
    this.matgap=30;
    this.curWidth=this.getTextWidth(gra, this.callet);
    this.rpich=this.getAscent()+dd+this.rgap;
    this.setDescent(dd);
    var w=new Array();
    if(this.frontText!=null){
        for(var k=0;k<this.matmax;k++){
            if(this.frontText[k]!=null){
                this.cwidth[k]=new Array();
                w[k]=0;
                for(var j=0;j<this.col[k];j++) this.cwidth[k][j]=this.getTextWidth(gra, this.getTextForPrint(0,k,0,j));
                for(var i=1;i<this.row[k];i++) for(var j=0;j<this.col[k];j++){
                    w[k]=this.getTextWidth(gra, this.getTextForPrint(0,k,i,j));
                    if(this.cwidth[k][j]<w[k]) this.cwidth[k][j]=w[k];
                }
                w[k]=0;
                for(var j=0;j<this.col[k];j++){
                    w[k]=w[k]+this.cwidth[k][j];
                    w[k]=w[k]+this.cgap;
                }
                this.setWidth(this.getWidth()+w[k]);
                if(k>0) this.setWidth(this.getWidth()+this.matgap);
                if(this.getDescent()<(this.rpich)*(this.row[k]-1)+dd) this.setDescent((this.rpich)*(this.row[k]-1)+dd);
            }
            else{
                this.cwidth[k]=new Array();
                this.cwidth[k][0]=this.getTextWidth(gra, this.callet);
                this.setWidth(this.getWidth()+this.cwidth[k][0]);
            }
        }
    }
    if(this.frontText!=null){
        this.setOpeWidth(0);
        for(var k=0;k<this.index;k++){
            if(k>0){
                this.setOpeWidth(this.getOpeWidth()+this.matgap);
            }
            if(this.frontText[k]!=null){
                this.setOpeWidth(this.getOpeWidth()+w[k]);
            }
        }
        if(this.frontText[this.index]!=null){
            if(this.index>0){
                this.setOpeWidth(this.getOpeWidth()+this.matgap);
            }
            for(var j=0;j<this.matnum%this.col[this.index];j++){
                this.setOpeWidth(this.getOpeWidth()+this.cwidth[this.index][j]+this.cgap);
            }
            if(this.frontText[this.index][this.matnum]!=null){
                this.setOpeWidth(this.getOpeWidth()+this.getTextWidth(gra, this.frontText[this.index][this.matnum]));
            }
        }
        else{
            if(this.index>0){
                this.setOpeWidth(this.getOpeWidth()+this.matgap);
            }
            var str=this.getTextForPrint(1,this.index,0,0);
            if(str.length>0){
                this.setOpeWidth(this.getOpeWidth()+this.getTextWidth(gra, str));
            }
        }
    }else{
        this.setOpeWidth(0);
    }
};

exR.EditBox.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getWidth()===0) return;
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.setFontSize(pt);
    var cx=0;
    var cy=0;
    var tx=0;
    var c0=0;
    var str="";
    if(this.frontText!=null){
        for(var k=0;k<this.matmax;k++){
            cy=0;
            if(this.frontText[k]!=null){
                var cxmax=0;
                if(k>0) {
                    this.setFontSize(8);
                    if(this.row[k]>1||this.col[k]>1){
                        MathTOUCH.drawString(gra,this.row[k]+"行"+this.col[k]+"列",x+tx,y+cy,this.getFace(),this.getFontSize(),this.getFont(),"gray");
                    }else{
                        MathTOUCH.drawString(gra,"行列",x+tx,y+cy,this.getFace(),this.getFontSize(),this.getFont(),"gray");
                    }
                    this.setFontSize(pt);
                    c0=this.matgap;
                }
                for(var i=0;i<this.row[k];i++){
                    cx=c0;
                    for(var j=0;j<this.col[k];j++){
                        if(this.row[k]>=1||this.col[k]>1){
                            MathTOUCH.fillRect(gra,x+tx+cx,y+cy-pt*7/10,this.cwidth[k][j],pt,"cyan");
                        }
                        MathTOUCH.drawString(gra,this.getTextForPrint(1,k,i,j),x+tx+cx,y+cy,this.getFace(),this.getFontSize(),this.getFont(),"gray");
                        str=new String(this.getTextForPrint(3,k,i,j));
                        if(str.length>0){
                            if(this.matnum==(i*this.col[k]+j)){
                                MathTOUCH.drawString(gra,this.callet,x+this.getOpeWidth(),y+cy,this.getFace(),this.getFontSize(),this.getFont(),this.curCol);
                            }
                            MathTOUCH.drawString(gra,this.getTextForPrint(2,k,i,j),x+this.getOpeWidth()+this.curWidth,y+cy,this.getFace(),this.getFontSize(),this.getFont(),"gray");
                        }
                        cx=cx+this.cwidth[k][j]+this.cgap;
                    }
                    cy=cy+this.rpich;
                    if(cxmax<cx){
                        cxmax=cx;
                    }
                }
                tx=tx+cxmax;
            }else{
                cx=0;
                if(k>0) {
                    this.setFontSize(8);
                    if(this.row[k]>1||this.col[k]>1)
                        MathTOUCH.drawString(gra,this.row[k]+"行"+this.col[k]+"列",x+tx,y+cy,this.getFace(),this.getFontSize(),this.getFont(),"gray");
                    else MathTOUCH.drawString(gra,"行列",x+tx,y+cy,this.getFace(),this.getFontSize(),this.getFont(),"gray");
                    this.setFontSize(pt);
                    cx=cx+this.matgap;
                }
                MathTOUCH.drawString(gra,this.getTextForPrint(1,k,0,0),x+tx+cx,y+cy,this.getFace(),this.getFontSize(),this.getFont(),"gray");
                str=this.getTextForPrint(3,k,0,0);
                if(str.length>0){
                    MathTOUCH.drawString(gra,this.callet,x+this.getOpeWidth(),y+cy,this.getFace(),this.getFontSize(),this.getFont(),this.curCol);
                    MathTOUCH.drawString(gra,this.getTextForPrint(2,k,0,0),x+this.getOpeWidth()+this.curWidth,y+cy,this.getFace(),this.getFontSize(),this.getFont(),"gray");
                }
                tx=tx+this.cwidth[k][0];
            }
        }
    }else{
        MathTOUCH.drawString(gra,this.getTextForPrint(1,0,0,0),x+tx+cx,y+cy,this.getFace(),this.getFontSize(),this.getFont(),"gray");
        str=this.getTextForPrint(3,0,0,0);
        if(str.length>0){
            MathTOUCH.drawString(gra,this.callet,x+this.getOpeWidth(),y+cy,this.getFace(),this.getFontSize(),this.getFont(),this.curCol);
            MathTOUCH.drawString(gra,this.getTextForPrint(2,0,0,0),x+this.getOpeWidth()+this.curWidth,y+cy,this.getFace(),this.getFontSize(),this.getFont(),"gray");
        }
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
 (2）枠囲み式
 *****************/
exR.FrameboxEx = function(t1) {
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    if(t1.type<0){
        this.setType(-1);
    }else{
        this.setType(2);
    }
    this.setTerm1(0,t1);

};

exR.FrameboxEx.prototype.toString = function () {
    return "frame("+this.getTerm1(0).toString()+")";
};

exR.FrameboxEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setFontSize(pt);
    this.setWidth(this.getTerm1(0).getWidth()+Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*0.2));
    this.setAscent(this.getTerm1(0).getAscent()+Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*0.1));
    this.setDescent(this.getTerm1(0).getDescent()+Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*0.1));
    this.setOpeWidth(Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*0.1));
};

exR.FrameboxEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent()-2,this.getWidth(),5,this.getOpeBackColor());
        MathTOUCH.fillRect(gra,x,y+this.getDescent()-2,this.getWidth(),5,this.getOpeBackColor());
        MathTOUCH.fillRect(gra,x-2,y-this.getAscent()-2,5,this.getAscent()+this.getDescent(),this.getOpeBackColor());
        MathTOUCH.fillRect(gra,x+this.getWidth()-2,y-this.getAscent()-2,5,this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x+this.getOpeWidth(),y);
    MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getOpeColor());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(4）積分記号による式
*****************/
exR.IntegralEx = function(ope,t1,t2,t3){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("italic");
    if(t3==null){
        if(t2==null){
            this.setType(2);
        }else{
            this.setType(3);
        }
    }else{
        this.setType(4);
    }
    this.setGap(0);
    var _scale = 2.0;
    var _subBase=0;
    var _bigpoint=0;
    var _subpoint=0;
    var _subwidth=0;
    var _dom1 = 0;
    var _variable = false;
    if(ope==null){
        this.setRep("\u222B");
    }else{
        this.setRep(this.getOpeLabel(ope));
    }
    this.setTerm1(0,t1);
    if(t2!=null){
        this.setTerm1(1,t2);
    }
    if(t3!=null){
        this.setTerm1(2,t3);
    }
    
    
    this.setScale = function(s){
        _scale=s;
    };
    
    this.getScale = function(){
        return _scale;
    };
    
    this.setSubBase = function(s){
        _subBase=s;
    };
                      
    this.getSubBase = function(){
        return _subBase;
    };
                      
    this.setBigpoint = function(b){
        _bigpoint=b;
    };
    
    this.getBigpoint = function(){
        return _bigpoint;
    };
    
    this.setSubpoint = function(s){
        _subpoint=s;
    };
    
    this.getSubpoint = function(){
        return _subpoint;
    };
    
    this.setSubwidth = function(s){
        _subwidth=s;
    };
    
    this.getSubwidth = function(){
        return _subwidth;
    };
    
    this.setDom = function(d){
        _dom1=d;
    };
    
    this.getDom = function(){
        return _dom1;
    };
    
    this.setVariableflag = function(v){
        _variable=v;
    };
    
    this.getVariableflag = function(){
        return _variable;
    };
};

exR.IntegralEx.prototype.toString = function () {
    return this.getRep()+this.getTerm1(0).toString();
};

exR.IntegralEx.prototype.sizeEx = function (gra,pt) {
        
        this.setPoint(pt);
        if(this.getType()===MathTOUCH.VAR){
            this.getTerm1(0).sizeEx(gra,pt);
            if(this.getVariableflag()) this.setBigpoint(Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*1.5));
            else this.setBigpoint(Math.floor(pt*this.getScale()));
            this.setGap(Math.floor(this.getBigpoint()*0.1));
            this.setFontSize(this.getBigpoint());
            this.setOpeWidth(this.getTextWidth(gra, this.getRep()));
            this.setWidth(this.getOpeWidth()+this.getTerm1(0).getWidth()+this.getGap()*3);
            if(this.getVariableflag()) this.setSubBase(Math.floor((this.getTerm1(0).getAscent()-this.getTerm1(0).getDescent())/1.0));
            else this.setSubBase(pt*4/10);
            this.setAscent(this.getBigpoint()*7/10);
            this.setDescent(this.getBigpoint()*3/10+this.getSubBase()/2);
        }else if(this.getType()===MathTOUCH.SYM){
            this.setSubpoint(Math.floor(pt*0.6));
            this.getTerm1(0).sizeEx(gra,this.getSubpoint());
            this.getTerm1(1).sizeEx(gra,pt);
            if(this.getVariableflag()) this.setBigpoint(Math.floor((this.getTerm1(1).getAscent()+this.getTerm1(1).getDescent())*1.5));
            else this.setBigpoint(Math.floor(pt*this.getScale()));
            this.setGap(Math.floor(this.getBigpoint()*0.1));
            this.setFontSize(this.getBigpoint());
            this.setSubwidth(this.getTextWidth(gra, this.getRep()));
            this.setOpeWidth(this.getTextWidth(gra, this.getRep()));
            this.setWidth(this.getSubwidth()+this.getTerm1(0).getWidth()+this.getTerm1(1).getWidth()+this.getGap()*3);
            if(this.getVariableflag()) this.setSubBase(Math.floor((this.getTerm1(1).getAscent()-this.getTerm1(1).getDescent())/1.0));
            else this.setSubBase(pt*4/10);
            this.setAscent(this.getBigpoint()*7/10);
            this.setDescent(this.iMax2(this.getBigpoint()*3/10+this.getSubBase()/2,this.getBigpoint()*3/10+this.getTerm1(0).getDescent()));
            this.setDom(this.getBigpoint()*3/10);
        }else{
            this.setSubpoint(Math.floor(pt*0.6));
            this.getTerm1(0).sizeEx(gra,this.getSubpoint());
            this.getTerm1(1).sizeEx(gra,this.getSubpoint());
            this.getTerm1(2).sizeEx(gra,pt);
            if(this.getVariableflag()) this.setBigpoint(Math.floor((this.getTerm1(2).getAscent()+this.getTerm1(2).getDescent())*1.5));
            else this.setBigpoint(Math.floor(pt*this.getScale()));
            this.setGap(Math.floor(this.getBigpoint()*0.1));
            this.setFontSize(this.getBigpoint());
            this.setSubwidth(this.getTextWidth(gra, this.getRep()));
            this.setOpeWidth(this.getTextWidth(gra, this.getRep()));
            this.setWidth(this.getSubwidth()+this.getTerm1(1).getWidth()+this.getTerm1(2).getWidth()+this.getGap()*4);
            if(this.getVariableflag()) this.setSubBase(Math.floor((this.getTerm1(2).getAscent()-this.getTerm1(2).getDescent())));
            else this.setSubBase(pt*4/10);
            this.setAscent(this.getBigpoint()*7/10+this.getTerm1(1).getAscent());
            this.setDescent(this.iMax2(this.getBigpoint()*3/10+this.getSubBase()/2,this.getBigpoint()*3/10+this.getTerm1(0).getDescent()));
            this.setDom(this.getBigpoint()*3/10);
        }
};

exR.IntegralEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x+this.getGap(),y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x+this.getGap(),y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    if(this.getType()===2){
        this.setFontSize(this.getBigpoint());
        MathTOUCH.drawString(gra,this.getRep(),x+this.getGap(),y+this.getSubBase(),this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
        this.getTerm1(0).drawEx(gra,pt,x+this.getWidth()-this.getTerm1(0).getWidth(),y);
    }else if(this.getType()===3){
        this.setFontSize(this.getBigpoint());
        MathTOUCH.drawString(gra,this.getRep(),x+this.getGap(),y+this.getSubBase(),this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
        this.getTerm1(0).drawEx(gra,this.getSubpoint(),x+this.getSubwidth()+this.getGap(),y+this.getDom());
        this.getTerm1(1).drawEx(gra,pt,x+this.getSubwidth()+this.getGap()*3+this.getTerm1(0).getWidth(),y);
    }else{
        this.setFontSize(this.getBigpoint());
        MathTOUCH.drawString(gra,this.getRep(),x+this.getGap(),y+this.getSubBase(),this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
        this.getTerm1(0).drawEx(gra,this.getSubpoint(),x+this.getSubwidth()+this.getGap(),y+this.getDom());
        this.getTerm1(1).drawEx(gra,this.getSubpoint(),x+this.getSubwidth()+this.getGap()*4,y-this.getAscent()+this.getTerm1(1).getAscent());
        this.getTerm1(2).drawEx(gra,pt,x+this.getSubwidth()+this.getGap()*4+this.getTerm1(1).getWidth(),y);
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(2）前置演算子と式
*****************/
exR.LeftOpeEx = function(left,t1){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    this.setType(2);
    this.setPer(0.1);
    this.setGap(0);
    this.setTerm1(0,t1);
    this.RepL=this.getOpeLabel(left);
};

exR.LeftOpeEx.prototype.toString = function () {
    return this.RepL+this.getTerm1(0).toString();
};

exR.LeftOpeEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setGap(Math.floor(pt*this.getPer()));
    this.setFontSize(pt);
    this.setOpeWidth(this.getTextWidth(gra, this.RepL));
    
    
    this.setWidth(this.getOpeWidth()+this.getTerm1(0).getWidth()+this.getGap());
    this.setAscent(this.iMax2(pt*7/10,this.getTerm1(0).getAscent()));
    this.setDescent(this.iMax2(pt*3/10,this.getTerm1(0).getDescent()));
    
};

exR.LeftOpeEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x+this.getWidth()-this.getTerm1(0).getWidth(),y);
    
    this.setFontSize(pt);
    MathTOUCH.drawString(gra,this.RepL,x,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
  (3）下付添え字付き関数型　log_{2}xタイプ
*****************/
exR.LeftOpeSubscriptEx = function(left,t1,t2){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    this.setType(3);
    this.setPer(0.1);
    this.setGap(0);
    this.setTerm1(0,t1);
    this.setTerm1(1,t2);
    this.RepL=this.getOpeLabel(left);
    
    var _subBase=0;
    var _subpoint=0;
    
    this.setSubBase = function(s){
        _subBase=s;
    };
                      
    this.getSubBase = function(){
        return _subBase;
    };
    
    this.setSubpoint = function(b){
        _subpoint=b;
    };
                      
    this.getSubpoint = function(){
        return _subpoint;
    };
                      
};

exR.LeftOpeSubscriptEx.prototype.toString = function () {
    return this.RepL+this.getTerm1(0).toString();
};
    
exR.LeftOpeSubscriptEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.setSubpoint(Math.floor(pt*0.6));
    this.getTerm1(0).sizeEx(gra,this.getSubpoint());
    this.getTerm1(1).sizeEx(gra,pt);
    this.setGap(Math.floor(pt*this.getPer()));
    this.setFontSize(pt);
    this.setOpeWidth(this.getTextWidth(gra, this.RepL));
    this.setSubBase(Math.floor(pt*21/100));
    
    this.setWidth(this.getOpeWidth()+1+this.getTerm1(0).getWidth()+this.getGap()+this.getTerm1(1).getWidth());
    this.setAscent(this.iMax2(pt*7/10,this.getTerm1(1).getAscent()));
    this.setDescent(this.iMax2(this.getTerm1(0).getDescent()+this.getSubBase(),this.getTerm1(1).getDescent()));
};

exR.LeftOpeSubscriptEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,this.getSubpoint(),x+this.getWidth()-this.getTerm1(0).getWidth()-this.getTerm1(1).getWidth()-this.getGap(),y+this.getSubBase());
    this.getTerm1(1).drawEx(gra,pt,x+this.getWidth()-this.getTerm1(1).getWidth(),y);
    this.setFontSize(pt);
    MathTOUCH.drawString(gra,this.RepL,x,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};


/****************
(3）上付き添え字付き関数型　sin^{-1}xタイプ
*****************/
exR.LeftOpeSuperscriptEx = function(left,t1,t2){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    this.setType(3);
    this.setPer(0.1);
    this.setGap(0);
    this.setTerm1(0,t1);
    this.setTerm1(1,t2);
    this.RepL=this.getOpeLabel(left);
    var _subBase=0;
    var _subpoint=0;
    
    this.setSubBase = function(s){
        _subBase=s;
    };
    
    this.getSubBase = function(){
        return _subBase;
    };
                      
    this.setSubpoint = function(s){
        _subpoint=s;
    };
    
    this.getSubpoint = function(){
        return _subpoint;
    };
}

exR.LeftOpeSuperscriptEx.prototype.toString = function () {
    return this.RepL+this.getTerm1(0).toString();
};
    
exR.LeftOpeSuperscriptEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.setSubpoint(Math.floor(pt*0.6));
    this.getTerm1(0).sizeEx(gra,this.getSubpoint());
    this.getTerm1(1).sizeEx(gra,pt);
    this.setGap(Math.floor(pt*this.getPer()));
    this.setFontSize(pt);
    this.setOpeWidth(this.getTextWidth(gra, this.RepL));
    this.setSubBase(Math.floor(pt*7*5/100));
    this.setWidth(this.getOpeWidth()+1+this.getTerm1(0).getWidth()+this.getGap()+this.getTerm1(1).getWidth());
    this.setAscent(this.iMax2(this.getTerm1(0).getAscent()+this.getSubBase(),this.getTerm1(1).getAscent()));
    this.setDescent(this.iMax2(pt*3/10,this.getTerm1(1).getDescent()));
};
    
exR.LeftOpeSuperscriptEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,this.getSubpoint(),x+this.getWidth()-this.getTerm1(0).getWidth()-this.getTerm1(1).getWidth()-this.getGap(),y-this.getSubBase());
    this.getTerm1(1).drawEx(gra,pt,x+this.getWidth()-this.getTerm1(1).getWidth(),y);
    this.setFontSize(pt);
    MathTOUCH.drawString(gra,this.RepL,x,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};
    
    
/****************
(3）左添え字付き型
*****************/
exR.LeftSubscriptEx = function(t1,t2){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    this.setType(3);
    this.setTerm1(0,t1);
    this.setTerm1(1,t2);
                      
    var _subBase=0;
    var _subpoint=0;
    
    this.setSubBase = function(s){
        _subBase=s;
    };
                      
    this.getSubBase = function(){
        return _subBase;
    };
                      
    this.setSubpoint = function(s){
        _subpoint=s;
    };
                      
    this.getSubpoint = function(){
        return _subpoint;
    };

};

exR.LeftSubscriptEx.prototype.toString = function () {
    return this.RepL+this.getTerm1(0).toString();
};
    
exR.LeftSubscriptEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.setSubpoint(Math.floor(pt*0.6));
    this.getTerm1(0).sizeEx(gra,pt);
    this.getTerm1(1).sizeEx(gra,this.getSubpoint());
    this.setSubBase(Math.floor(this.getTerm1(0).getDescent()*0.7));
    this.setWidth(1+this.getTerm1(0).getWidth()+this.getTerm1(1).getWidth());
    this.setAscent(this.iMax2(this.getTerm1(0).getAscent(),this.getTerm1(1).getAscent()-this.getSubBase()));
    this.setDescent(this.iMax2(this.getTerm1(0).getDescent(),this.getTerm1(1).getDescent()+this.getSubBase()));
};

exR.LeftSubscriptEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x+this.getTerm1(1).getWidth(),y+this.getSubBase()-this.getTerm1(1).getAscent(),2,this.getTerm1(1).getAscent()+this.getTerm1(1).getDescent(),this.getOpeBackColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x+this.getTerm1(1).getWidth()+1,y);
    this.getTerm1(1).drawEx(gra,this.getSubpoint(),x,y+this.getSubBase());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(3）左上付き型
*****************/
exR.LeftSuperscriptEx = function(t1,t2){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    this.setType(3);
    this.setTerm1(0,t1);
    this.setTerm1(1,t2);
    var _subBase=0;
    var _subpoint=0;
                      
    this.setSubBase = function(s){
        _subBase=s;
    };
                      
    this.getSubBase = function(){
        return _subBase;
    };
                      
    this.setSubpoint = function(s){
        _subpoint=s;
    };
                      
    this.getSubpoint = function(){
        return _subpoint;
    };
};

exR.LeftSuperscriptEx.prototype.toString = function () {
   return this.RepL+this.getTerm1(0).toString();
};

exR.LeftSuperscriptEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.setSubpoint(Math.floor(pt*0.6));
    this.getTerm1(0).sizeEx(gra,pt);
    this.getTerm1(1).sizeEx(gra,this.getSubpoint());
    this.setSubBase(Math.floor(this.getTerm1(0).getAscent()*0.5));
    this.setWidth(1+this.getTerm1(0).getWidth()+this.getTerm1(1).getWidth());
    this.setAscent(this.iMax2(this.getTerm1(0).getAscent(),this.getTerm1(1).getAscent()+this.getSubBase()));
    this.setDescent(this.iMax2(this.getTerm1(0).getDescent(),this.getTerm1(1).getDescent()-this.getSubBase()));
};

exR.LeftSuperscriptEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x+this.getTerm1(1).getWidth(),y-this.getSubBase()-this.getTerm1(1).getAscent(),2,this.getTerm1(1).getAscent()+this.getTerm1(1).getDescent(),this.getOpeBackColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x+this.getTerm1(1).getWidth()+1,y);
    this.getTerm1(1).drawEx(gra,this.getSubpoint(),x,y-this.getSubBase());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(-1）空式クラス
*****************/
exR.NullEx = function(t1,t2){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setType(-1);
    this.setFace("");
};

exR.NullEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.setFontSize(pt);
    this.setWidth(0);
    this.setAscent(pt*7/10);
    this.setDescent(pt*3/10);
};

exR.NullEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
};
    

/****************
(3）極限記号の式
*****************/
exR.LimitEx = function(t1,t2){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    this.setType(3);
    this.setPer(0.1);
    this.setGap(0);
    this.setTerm1(0,t1);
    if(t2==null){
        this.setTerm1(1,new NullEx());
    }else{
        this.setTerm1(1,t2);
    }
    this.RepL="lim";
    var _subBase=0;
    var _subpoint=0;
    this.setSubBase = function(s){
        _subBase=s;
    };
    
    this.getSubBase = function(){
        return _subBase;
    };
    
    this.setSubpoint = function(s){
        _subpoint=s;
    };
    
    this.getSubpoint = function(){
        return _subpoint;
    };
    
    this.setSubwidth = function(s){
        _subwidth=s;
    };
    
    this.getSubwidth = function(){
        return _subwidth;
    };

};

exR.LimitEx.prototype.toString = function () {
    return this.RepL+this.getTerm1(0).toString();
};

exR.LimitEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.setSubpoint(Math.floor(pt*0.6));
    this.getTerm1(0).sizeEx(gra,this.getSubpoint());
    this.getTerm1(1).sizeEx(gra,pt);
    this.setGap(Math.floor(pt*this.getPer()));
    this.setFontSize(pt);
    this.setSubwidth(this.getTextWidth(gra, this.RepL));
    this.setOpeWidth(this.getSubwidth());
    if(this.getTerm1(0).getWidth()<this.getSubwidth()){
        this.setGap(Math.floor(pt*0.2));
        this.setWidth(this.getSubwidth()+this.getGap()+this.getTerm1(1).getWidth());
    }
    else{
        this.setGap(0);
        this.setWidth(this.getTerm1(0).getWidth()+this.getTerm1(1).getWidth());
    }
    this.setAscent(this.iMax2(pt*7/10,this.getTerm1(1).getAscent()));
    this.setDescent(this.iMax2(this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent(),this.getTerm1(1).getDescent()));
};

exR.LimitEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    var dx;
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    if(this.getTerm1(0).getWidth()<this.getSubwidth()){
        dx=Math.floor((this.getSubwidth()-this.getTerm1(0).getWidth())/2.0);
        if(this.getOpeBackColorNum() > 0){
            MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent(),this.getOpeBackColor());
        }
        if(this.getOpeFrameColorNum() > 0){
            MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent(),this.getOpeFrameColor());
        }
        this.getTerm1(0).drawEx(gra,this.getSubpoint(),x+dx,y+this.getTerm1(0).getAscent());
        this.getTerm1(1).drawEx(gra,pt,x+this.getSubwidth()+this.getGap(),y);
        this.setFontSize(pt);
        MathTOUCH.drawString(gra,this.RepL,x,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    }
    else{
        dx=Math.floor((this.getTerm1(0).getWidth()-this.getSubwidth())/2.0);
        if(this.getOpeBackColorNum() > 0){
            MathTOUCH.fillRect(gra,x+dx,y-this.getAscent(),this.getOpeWidth(),this.getAscent(),this.getOpeBackColor());
        }
        if(this.getOpeFrameColorNum() > 0){
            MathTOUCH.drawRect(gra,x+dx,y-this.getAscent(),this.getOpeWidth(),this.getAscent(),this.getOpeFrameColor());
        }
        this.getTerm1(0).drawEx(gra,this.getSubpoint(),x,y+this.getTerm1(0).getAscent());
        this.getTerm1(1).drawEx(gra,pt,x+this.getTerm1(0).getWidth(),y);
        this.setFontSize(pt);
        MathTOUCH.drawString(gra,this.RepL,x+dx,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
 (1）文字表現クラス
*****************/
exR.Mbox = function(st){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setType(1);
    this.setFace("");
    this.setRep(st);

};

exR.Mbox.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.setFontSize(pt);
    this.setWidth(this.getTextWidth(gra, this.getRep()));
    this.setAscent(pt*7/10);
    this.setDescent(pt*3/10);
};

exR.Mbox.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.setFontSize(pt);
    MathTOUCH.drawString(gra,this.getRep(),x,y,this.getFace(),this.getFontSize(),this.getFont(),this.getColor());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(6）行列表現
*****************/
exR.MatrixEx = function(rowNum,rcs,elem) {
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setType(6);
    this.setFace("");
    this.setTerm(elem);
    this.setMatColum(-1);
    var _row=rowNum;
    var _col=0;
    var c,i,j,k,l,m;
    for(i=_row+1;i<rcs.length;i++){
        c=rcs.charAt(i);
        if(c=='l'||c=='c'||c=='r'){
            _col++;
        }
    }
    
    if(_col===0){return;}
    var _cols = new Array();
    this.setPer(0.3);
    var _rgap;
    var _cgap=new Array();
    var _cgaper=new Array();
    var _Reps=new Array();
    var _vline=new Array();
    for(i=0;i<_col+1;i++){
        _Reps[i]=null;
        _cgaper[i]=1.0;
        _vline[i]=0;
    }
    var _hline=new Array();
    var _subwidth=new Array();
    var _colwidth=new Array();
    var _rowwidth=new Array();
    var _mBase=new Array();
    for(i=0;i<=_row;i++){
        switch(rcs.charAt(i)){
            case '1':_hline[i]=1;break;
            case '2':_hline[i]=2;break;
            default: _hline[i]=0;
        }
    }
    j=k=0;
    for(i=_row+1;i<rcs.length;i++){
        switch(rcs.charAt(i)){
            case 'l':
                _cols[j++]=0;
                k++;
                break;
            case 'c':
                _cols[j++]=1;
                k++;
                break;
            case 'r':
                _cols[j++]=2;
                k++;
                break;
            case '|':
                if(i+1<rcs.length&&rcs.charAt(i+1)=='|') {
                    _vline[k]=2;
                    i++;
                }
                else _vline[k]=1;
                break;
            case '@':
                l=i+1;
                _cgaper[k]=0.0
                if(rcs.charAt(l++)!='{'){return;}
                while(rcs.charAt(l++)!='}') if(l>=rcs.length){return;}
                _Reps[k]=rcs.substring(i+2,l-1);
                i=l-1;
                break;
            default:return;
        }
    }
    
    
    this.setRow = function(r){
        _row=r;
    };
    
    this.getRow = function(){
        return _row;
    };
    
    this.setCol = function(c){
        _col=c;
    };
    
    this.getCol = function(){
        return _col;
    };
    
    this.setSubBase = function(s){
        _subBase=s;
    };
    
    this.getSubBase = function(){
        return _subBase;
    };
    
    this.setCols = function(i,v){
        _cols[i]=v;
    };
    
    this.getCols = function(i){
        return _cols[i];
    };
    
    this.setRgap = function(r){
        _rgap=r;
    };
    
    this.getRgap = function(){
        return _rgap;
    };
    
    this.setCgap = function(i,v){
        _cgap[i]=v;
    };
    
    this.getCgap = function(i){
        return _cgap[i];
    };
    
    this.setCgaper = function(i,v){
        _cgaper[i]=v;
    };
    
    this.getCgaper = function(i){
        return _cgaper[i];
    };
    
    this.setReps = function(i,v){
        _Reps[i]=v;
    };
    
    this.getReps = function(i){
        return _Reps[i];
    };
    
    this.setVline = function(i,v){
        _vline[i]=v;
    };
    
    this.getVline = function(i){
        return _vline[i];
    };
    
    this.setHline = function(i,v){
        _hline[i]=v;
    };
    
    this.getHline = function(i){
        return _hline[i];
    };
    
    this.setSubwidth = function(i,v){
        _subwidth[i]=v;
    };
    
    this.getSubwidth = function(i){
        return _subwidth[i];
    };
    
    this.setColwidth = function(i,v){
        _colwidth[i]=v;
    };
    
    this.getColwidth = function(i){
        return _colwidth[i];
    };
    
    this.setRowwidth = function(i,v){
        _rowwidth[i]=v;
    };
    
    this.getRowwidth = function(i){
        return _rowwidth[i];
    };
    
    this.setMbase = function(i,v){
        _mBase[i]=v;
    };
    
    this.getMbase = function(i){
        return _mBase[i];
    };
};

exR.MatrixEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.setSubBase((pt*7/10-pt*3/10)/2);
    this.setFontSize(pt);
    var i,j,w,h;
    var height=0;
    for(j=0;j<=this.getCol()+1;j++){
        this.setCgap(j,Math.floor(pt*this.getCgaper(j)));
        if(this.getReps(j)==null){this.setSubwidth(j,0);}
        else{this.setSubwidth(j,this.getTextWidth(gra, this.getReps(j)));}
    }
    for(j=0;j<this.getCol();j++) this.setColwidth(j,0);
    this.setRgap(Math.floor(pt*this.getPer()));
    for(i=0;i<this.getRow();i++){
        this.setRowwidth(i,0);
        for(j=0;j<this.getCol();j++){
            this.getTerm2(i,j).sizeEx(gra,pt);
            
            w=this.getTerm2(i,j).getWidth();
            h=this.getTerm2(i,j).getAscent()+this.getTerm2(i,j).getDescent();
            if(this.getColwidth(j)<w){this.setColwidth(j,w);}
            if(this.getRowwidth(i)<h){
                this.setRowwidth(i,h);
                this.setMbase(i,this.getTerm2(i,j).getAscent());
            }
        }
        height+=(this.getRowwidth(i)+this.getRgap());
    }
    this.setWidth(0);
    for(j=0;j<this.getCol();j++){
        this.setWidth(this.getWidth()+(this.getColwidth(j)+this.getCgap(j)+this.getSubwidth(j)));
    }
    this.setWidth(this.getWidth()+this.getSubwidth(j));
    this.setAscent(height/2+this.getSubBase());
    this.setDescent(height/2-this.getSubBase());
};

exR.MatrixEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    var i,j,dx;
    var mx,my;
    var hy=y-this.getAscent();
    if(this.getHline(0)===1){MathTOUCH.drawLine(gra,x,hy,x+this.getWidth(),hy,"black");}
    else if(this.getHline(0)===2){
        MathTOUCH.drawLine(gra,x,hy,x+this.getWidth(),hy,"black");
        MathTOUCH.drawLine(gra,x,hy+3,x+this.getWidth(),hy+3,"black");
    }
    for(i=0;i<this.getRow();i++){
        my=hy+this.getRgap()/2+this.getMbase(i);
        for(j=0,mx=x;j<this.getCol();j++){
            if(j==0){
                mx+=this.getCgap(j)/2;
            }else{
                mx+=this.getCgap(j);
            }
            if(this.getReps(j)!=null){
                this.setFontSize(pt);
                MathTOUCH.drawString(gra,this.getReps(j),mx,my,this.getFace(),this.getFontSize(),this.getFont(),"black");
                mx+=this.getSubwidth(j);
            }
            if(this.getOpeColorNum() > 0){
                MathTOUCH.fillRect(gra,mx,my-this.getMbase(i),this.getColwidth(j),this.getRowwidth(i),"cyan");
            }
            if(this.getCols(j)===0){this.getTerm2(i,j).drawEx(gra,pt,mx,my);}
            else if(this.getCols(j)===1){
                dx=(this.getColwidth(j)-this.getTerm2(i,j).getWidth())/2;
                this.getTerm2(i,j).drawEx(gra,pt,mx+dx,my);
            }
            else {
                dx=this.getColwidth(j)-this.getTerm2(i,j).getWidth();
                this.getTerm2(i,j).drawEx(gra,pt,mx+dx,my);
            }
            mx+=this.getColwidth(j);
        }
        if(this.getReps(j)!=null){
            this.setFontSize(pt);
            MathTOUCH.drawString(gra,this.getReps(j),mx,my,this.getFace(),this.getFontSize(),this.getFont(),"black");
        }
        hy+=(this.getRowwidth(i)+this.getRgap());
        if(this.getHline(i+1)===1){MathTOUCH.drawLine(gra,x,hy,x+this.getWidth(),hy,"black");}
        else if(this.getHline(i+1)===2){
            MathTOUCH.drawLine(gra,x,hy,x+this.getWidth(),hy,"black");
            MathTOUCH.drawLine(gra,x,hy+3,x+this.getWidth(),hy+3,"black");
        }
    }
    mx=x;
    my=y-this.getAscent();
    j=0;
    if(this.getVline(j)===1){MathTOUCH.drawLine(gra,mx,my,mx,y+this.getDescent(),"black");}
    else if(this.getVline(j)===2){
        MathTOUCH.drawLine(gra,mx-1,my,mx-1,y+this.getDescent(),"black");
        MathTOUCH.drawLine(gra,mx+1,my,mx+1,y+this.getDescent(),"black");
    }
    if(this.getOpeColorNum() > 0 && this.getMatColum()>=0 && Math.floor(this.getMatColum()/2)==j){
        if(this.getMatColum()%2==0){
            MathTOUCH.drawRect(gra,mx-2,my-2,this.getWidth()+4,this.getAscent()+this.getDescent()+4,"yellow");
        }
        else MathTOUCH.drawRect(gra,mx+this.getCgap(j)/2,my,this.getSubwidth(j)+this.getColwidth(j),this.getAscent()+this.getDescent(),"yellow");
    }
    mx+=(this.getCgap(j)/2+this.getSubwidth(j)+this.getColwidth(j));
    for(j=1;j<this.getCol();j++){
        if(this.getVline(j)===1){MathTOUCH.drawLine(gra,mx+this.getCgap(j)/2,my,mx+this.getCgap(j)/2,y+this.getDescent(),"black");}
        else if(this.getVline(j)===2){
            MathTOUCH.drawLine(gra,mx+this.getCgap(j)/2-1,my,mx+this.getCgap(j)/2-1,y+this.getDescent(),"black");
            MathTOUCH.drawLine(gra,mx+this.getCgap(j)/2+1,my,mx+this.getCgap(j)/2+1,y+this.getDescent(),"black");
        }
        if(this.getOpeColorNum() > 0 && this.getMatColum()>=0 && Math.floor(this.getMatColum()/2)==j){
            if(this.getMatColum()%2==0){
                if(this.getMatColum()==0) MathTOUCH.drawRect(gra,mx-2,my-2,this.getWidth()+4,this.getAscent()+this.getDescent()+4,"yellow");
                else MathTOUCH.drawRect(gra,mx-2,my,this.getCgap(j)+2,this.getAscent()+this.getDescent(),"yellow");
            }
            else MathTOUCH.drawRect(gra,mx+this.getCgap(j),my,this.getSubwidth(j)+this.getColwidth(j),this.getAscent()+this.getDescent(),"yellow");
        }
        mx+=(this.getCgap(j)+this.getSubwidth(j)+this.getColwidth(j));
    }
    mx=x+this.getWidth();
    if(this.getVline(j)===1){MathTOUCH.drawLine(gra,mx,my,mx,y+this.getDescent(),"black");}
    else if(this.getVline(j)===2){
        MathTOUCH.drawLine(gra,mx,my,mx,y+this.getDescent(),"black");
        MathTOUCH.drawLine(gra,mx-2,my,mx-2,y+this.getDescent(),"black");
    }
    if(this.getOpeColorNum() > 0 && this.getMatColum()>=0 && Math.floor(this.getMatColum()/2)==j){
        if(this.getMatColum()%2==0) MathTOUCH.drawRect(gra,mx-this.getCgap(j)/2+2,my,this.getCgap(j),this.getAscent()+this.getDescent(),"yellow");
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
 (2）オーバーブレース
 *****************/
exR.OverBraceEx = function(t1){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");
    if(t1.type<0){
        this.setType(-1);
    }else{
        this.setType(2);
    }
    this.setTerm1(0,t1);
};

exR.OverBraceEx.prototype.toString = function () {
    return "frame("+this.getTerm1(0).toString()+")";
};

exR.OverBraceEx.prototype.sizeEx = function (gra,pt) {
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setFontSize(pt);
    this.setWidth(this.getTerm1(0).getWidth());
    this.setAscent(this.getTerm1(0).getAscent()+7);
    this.setDescent(this.getTerm1(0).getDescent());
    this.setOpeWidth(this.getWidth());
};

exR.OverBraceEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x,y);
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),6,this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),6,this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    var ix0=x,iy0=y-this.getAscent()+6;
    var ix,iy;
    var w=this.getWidth()/8;if(w<=1) w=2;
    for(var t=0.1;t<=0.5*Math.PI;t+=0.2){
        ix=x+Math.floor(t*w/(0.5*Math.PI));
        iy=y-this.getAscent()+6-Math.floor(3.0*Math.sin(t));
        MathTOUCH.drawLine(gra,ix0,iy0,ix,iy,this.getOpeColor());
        ix0=ix;iy0=iy;
    }
    MathTOUCH.drawLine(gra,x+w,y-this.getAscent()+3,x+this.getWidth()/2-w,y-this.getAscent()+3,this.getOpeColor());
    ix0=x+this.getWidth()/2-w;
    iy0=y-this.getAscent()+3;
    for(var t=1.5*Math.PI+0.1;t<=2.0*Math.PI;t+=0.2){
        ix=x+this.getWidth()/2-w+Math.floor((t-1.5*Math.PI)*w/(0.5*Math.PI));
        iy=y-this.getAscent()-Math.floor(3.0*Math.sin(t));
        MathTOUCH.drawLine(gra,ix0,iy0,ix,iy,this.getOpeColor());
        ix0=ix;iy0=iy;
    }
    ix0=x+this.getWidth()/2;
    iy0=y-this.getAscent();
    for(var t=Math.PI+0.1;t<=1.5*Math.PI;t+=0.2){
        ix=x+this.getWidth()/2+Math.floor((t-Math.PI)*w/(0.5*Math.PI));
        iy=y-this.getAscent()-Math.floor(3.0*Math.sin(t));
        MathTOUCH.drawLine(gra,ix0,iy0,ix,iy,this.getOpeColor());
        ix0=ix;iy0=iy;
    }
    MathTOUCH.drawLine(gra,x+this.getWidth()/2+w,y-this.getAscent()+3,x+this.getWidth()-w,y-this.getAscent()+3,this.getOpeColor());
    ix0=x+this.getWidth()-w;
    iy0=y-this.getAscent()+3;
    for(var t=0.5*Math.PI+0.1;t<=Math.PI;t+=0.2){
        ix=x+this.getWidth()-w+Math.floor((t-0.5*Math.PI)*w/(0.5*Math.PI));
        iy=y-this.getAscent()+6-Math.floor(3.0*Math.sin(t));
        MathTOUCH.drawLine(gra,ix0,iy0,ix,iy,this.getOpeColor());
        ix0=ix;iy0=iy;
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(2）アンダーブレース
*****************/
exR.UnderBraceEx = function(t1){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    if(t1.type<0){
        this.setType(-1);
    }else{
        this.setType(2);
    }
    this.setTerm1(0,t1);
};

exR.UnderBraceEx.prototype.toString = function () {
    return "frame("+this.getTerm1(0).toString()+")";
};
exR.UnderBraceEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setFontSize(pt);
    this.setWidth(this.getTerm1(0).getWidth());
    this.setAscent(this.getTerm1(0).getAscent());
    this.setDescent(this.getTerm1(0).getDescent()+7);
    this.setOpeWidth(this.getWidth());
};

exR.UnderBraceEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x,y);
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y+this.getDescent()-6,this.getOpeWidth(),6,this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y+this.getDescent()-6,this.getOpeWidth(),6,this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    var ix0=x,iy0=y+this.getDescent()-6;
    var ix,iy;
    var w=this.getWidth()/8;if(w<=1) w=2;
    for(var t=0.1;t<=0.5*Math.PI;t+=0.2){
        ix=x+Math.floor(t*w/(0.5*Math.PI));
        iy=y+this.getDescent()-6+Math.floor(3.0*Math.sin(t));
        MathTOUCH.drawLine(gra,ix0,iy0,ix,iy,this.getOpeColor());
        ix0=ix;iy0=iy;
    }
    MathTOUCH.drawLine(gra,x+w,y+this.getDescent()-3,x+this.getWidth()/2-w,y+this.getDescent()-3,this.getOpeColor());
    ix0=x+this.getWidth()/2-w;
    iy0=y+this.getDescent()-3;
    for(var t=1.5*Math.PI+0.1;t<=2.0*Math.PI;t+=0.2){
        ix=x+this.getWidth()/2-w+Math.floor((t-1.5*Math.PI)*w/(0.5*Math.PI));
        iy=y+this.getDescent()+Math.floor(3.0*Math.sin(t));
        MathTOUCH.drawLine(gra,ix0,iy0,ix,iy,this.getOpeColor());
        ix0=ix;iy0=iy;
    }
    ix0=x+this.getWidth()/2;
    iy0=y+this.getDescent();
    for(var t=Math.PI+0.1;t<=1.5*Math.PI;t+=0.2){
        ix=x+this.getWidth()/2+Math.floor((t-Math.PI)*w/(0.5*Math.PI));
        iy=y+this.getDescent()+Math.floor(3.0*Math.sin(t));
        MathTOUCH.drawLine(gra,ix0,iy0,ix,iy,this.getOpeColor());
        ix0=ix;iy0=iy;
    }
    MathTOUCH.drawLine(gra,x+this.getWidth()/2+w,y+this.getDescent()-3,x+this.getWidth()-w,y+this.getDescent()-3,this.getOpeColor());
    ix0=x+this.getWidth()-w;
    iy0=y+this.getDescent()-3;
    for(var t=0.5*Math.PI+0.1;t<=Math.PI;t+=0.2){
        ix=x+this.getWidth()-w+Math.floor((t-0.5*Math.PI)*w/(0.5*Math.PI));
        iy=y+this.getDescent()-6+Math.floor(3.0*Math.sin(t));
        MathTOUCH.drawLine(gra,ix0,iy0,ix,iy,this.getOpeColor());
        ix0=ix;iy0=iy;
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(2）オーバーラインの式
*****************/
exR.OverlineEx = function(t1){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    if(t1.type<0) this.setType(-1);
    else this.setType(2);
    this.setTerm1(0,t1);
};

exR.OverlineEx.prototype.toString = function () {
    return "overline("+this.getTerm1(0).toString()+")";
};

exR.OverlineEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setFontSize(pt);
    this.setWidth(this.getTerm1(0).getWidth());
    this.setAscent(this.getTerm1(0).getAscent()+Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*0.1+2));
    this.setDescent(this.getTerm1(0).getDescent());
    this.setOpeWidth(this.getWidth());
};

exR.OverlineEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x,y);
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),5,this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),5,this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    MathTOUCH.drawLine(gra,x,y-this.getAscent()+2,x+this.getWidth(),y-this.getAscent()+2,this.getOpeColor());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};
    

/****************
(2）アンダーラインの式
*****************/
exR.UnderlineEx = function(t1){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    if(t1.type<0) this.setType(-1);
    else this.setType(2);
    this.setTerm1(0,t1);
};

exR.UnderlineEx.prototype.toString = function () {
    return "frame("+this.getTerm1(0).toString()+")";
};

exR.UnderlineEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setFontSize(pt);
    this.setWidth(this.getTerm1(0).getWidth());
    this.setAscent(this.getTerm1(0).getAscent());
    this.setDescent(this.getTerm1(0).getDescent()+Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*0.1+2));
    this.setOpeWidth(this.getWidth());
};

exR.UnderlineEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x,y);
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y+this.getDescent()-5,this.getOpeWidth(),5,this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y+this.getDescent()-5,this.getOpeWidth(),5,this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    MathTOUCH.drawLine(gra,x,y+this.getDescent()-2,x+this.getWidth(),y+this.getDescent()-2,this.getOpeColor());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(2）総和記号タイプの式
*****************/
exR.SumTypeEx = function(ope,t1,t2,t3){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    if(t3==null){
        if(t2==null) this.setType(2);
        else this.setType(3);
    }
    else this.setType(4);
    this.setGap(0);
    if(ope==null) this.setRep(this.getOpeLabel("sum"));
    else this.setRep(this.getOpeLabel(ope));
    this.setTerm1(0,t1);
    if(t2!=null) this.setTerm1(1,t2);
    if(t3!=null) this.setTerm1(2,t3);
    var _variable=false;
    var _subpoint=0;
    var _bigpoint=0;
    var _subwidth=0;
                      
    this.setSubpoint = function(s){
        _subpoint=s;
    };
                      
    this.getSubpoint = function(){
        return _subpoint;
    };
                      
    this.setBigpoint = function(b){
        _bigpoint=b;
    };
                      
    this.getBigpoint = function(){
        return _bigpoint;
    };
                      
    this.setSubwidth = function(s){
        _subwidth=s;
    };
                      
    this.getSubwidth = function(){
        return _subwidth;
    };
    
    this.setVariableflag = function(v){
        _variable=v;
    };
    
    this.getVariableflag = function(){
        return _variable;
    };

};

exR.SumTypeEx.prototype.toString = function () {
    return this.getRep()+this.getTerm1(0).toString();
};

exR.SumTypeEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    if(this.getType()===MathTOUCH.VAR){
        this.getTerm1(0).sizeEx(gra,pt);
        if(this.getVariableflag()) this.setBigpoint(this.iMax2(pt,Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*0.6)));
        else this.setBigpoint(pt);
        this.setGap(Math.floor(pt*0.2));
        this.setFontSize(this.getBigpoint());
        this.setOpeWidth(this.getTextWidth(gra, this.getRep()));
        this.setSubwidth(this.getBigpoint());
        this.setWidth(this.getOpeWidth()+this.getTerm1(0).getWidth()+this.getGap());
        this.setAscent(this.iMax2(this.getBigpoint()*7/10,this.getTerm1(0).getAscent()));
        this.setDescent(this.iMax2(this.getBigpoint()*3/10,this.getTerm1(0).getDescent()));
    }else if(this.getType()===MathTOUCH.SYM){
        this.setSubpoint(Math.floor(pt*0.6));
        this.getTerm1(0).sizeEx(gra,this.getSubpoint());
        this.getTerm1(1).sizeEx(gra,pt);
        if(this.getVariableflag()) this.setBigpoint(this.iMax2(pt,Math.floor((this.getTerm1(1).getAscent()+this.getTerm1(1).getDescent())*0.6)));
        else this.setBigpoint(pt);
        this.setGap(Math.floor(pt*0.2));
        this.setFontSize(this.getBigpoint());
        this.setOpeWidth(this.getTextWidth(gra, this.getRep()));
        this.setSubwidth(this.getBigpoint());
        this.setWidth(this.iMax2(this.getOpeWidth(),this.getTerm1(0).getWidth())+this.getTerm1(1).getWidth()+this.getGap());
        this.setAscent(this.iMax2(this.getBigpoint()*7/10,this.getTerm1(1).getAscent()));
        this.setDescent(this.iMax2(this.getBigpoint()*3/10+this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent(),this.getTerm1(1).getDescent()));
    }else{
        this.setSubpoint(Math.floor(pt*0.6));
        this.getTerm1(0).sizeEx(gra,this.getSubpoint());
        this.getTerm1(1).sizeEx(gra,this.getSubpoint());
        this.getTerm1(2).sizeEx(gra,pt);
        if(this.getVariableflag()) this.setBigpoint(this.iMax2(pt,Math.floor((this.getTerm1(2).getAscent()+this.getTerm1(2).getDescent())*0.6)));
        else this.setBigpoint(pt);
        this.setGap(Math.floor(pt*0.2));
        this.setFontSize(this.getBigpoint());
        this.setOpeWidth(this.getTextWidth(gra, this.getRep()));
        this.setSubwidth(this.getBigpoint());
        this.setWidth(this.iMax3(this.getOpeWidth(),this.getTerm1(0).getWidth(),this.getTerm1(1).getWidth())+this.getTerm1(2).getWidth()+this.getGap());
        this.setAscent(this.iMax2(this.getBigpoint()*7/10+this.getTerm1(1).getAscent()+this.getTerm1(1).getDescent(),this.getTerm1(2).getAscent()));
        this.setDescent(this.iMax2(this.getBigpoint()*3/10+this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent(),this.getTerm1(2).getDescent()));
    }
};

exR.SumTypeEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    if(this.getType()===MathTOUCH.VAR){
        if(this.getOpeBackColorNum() > 0){
            MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getSubwidth(),this.getOpeBackColor());
        }
        if(this.getOpeFrameColorNum() > 0){
            MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getSubwidth(),this.getOpeFrameColor());
        }
        this.setFontSize(this.getBigpoint());
        MathTOUCH.drawString(gra,this.getRep(),x,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
        this.getTerm1(0).drawEx(gra,pt,x+this.getOpeWidth()+this.getGap(),y);
    }else if(this.getType()===MathTOUCH.SYM){
        var dx=this.iMax2(this.getOpeWidth(),this.getTerm1(0).getWidth());
        if(this.getOpeBackColorNum() > 0){
            MathTOUCH.fillRect(gra,x+(dx-this.getOpeWidth())/2,y-this.getAscent(),this.getOpeWidth(),this.getSubwidth(),this.getOpeBackColor());
        }
        if(this.getOpeFrameColorNum() > 0){
            MathTOUCH.drawRect(gra,x+(dx-this.getOpeWidth())/2,y-this.getAscent(),this.getOpeWidth(),this.getSubwidth(),this.getOpeFrameColor());
        }
        this.setFontSize(this.getBigpoint());
        MathTOUCH.drawString(gra,this.getRep(),x+(dx-this.getOpeWidth())/2,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
        this.getTerm1(0).drawEx(gra,this.getSubpoint(),x+(dx-this.getTerm1(0).getWidth())/2,y+this.getDescent()-this.getTerm1(0).getDescent());
        this.getTerm1(1).drawEx(gra,pt,x+dx+this.getGap(),y);
    }else{
        var dx=this.iMax3(this.getOpeWidth(),this.getTerm1(0).getWidth(),this.getTerm1(1).getWidth());
        if(this.getOpeBackColorNum() > 0){
            MathTOUCH.fillRect(gra,x+(dx-this.getOpeWidth())/2,y-this.getAscent()+this.getTerm1(1).getAscent()+this.getTerm1(1).getDescent(),this.getOpeWidth(),this.getSubwidth(),this.getOpeBackColor());
        }
        if(this.getOpeFrameColorNum() > 0){
            MathTOUCH.drawRect(gra,x+(dx-this.getOpeWidth())/2,y-this.getAscent()+this.getTerm1(1).getAscent()+this.getTerm1(1).getDescent(),this.getOpeWidth(),this.getSubwidth(),this.getOpeFrameColor());
        }
        this.setFontSize(this.getBigpoint());
        MathTOUCH.drawString(gra,this.getRep(),x+(dx-this.getOpeWidth())/2,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
        this.getTerm1(0).drawEx(gra,this.getSubpoint(),x+(dx-this.getTerm1(0).getWidth())/2,y+this.getDescent()-this.getTerm1(0).getDescent());
        this.getTerm1(1).drawEx(gra,this.getSubpoint(),x+(dx-this.getTerm1(1).getWidth())/2,y-this.getAscent()+this.getTerm1(1).getAscent());
        this.getTerm1(2).drawEx(gra,pt,x+dx+this.getGap(),y);
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};
/****************
(2）後置演算子と式
*****************/
exR.RightOpeEx = function(t1,right){ 
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    this.setType(2);
    this.setPer(0.1);
    this.setGap(0);
    this.setTerm1(0,t1);
    this.RepR=this.getOpeLabel(right);
};

exR.RightOpeEx.prototype.toString = function () {
    return this.RepR+this.getTerm1(0).toString();
};

exR.RightOpeEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setGap(Math.floor(pt*this.getPer()));
    this.setFontSize(pt);
    this.setOpeWidth(this.getTextWidth(gra, this.RepR));
    this.setWidth(this.getOpeWidth()+this.getTerm1(0).getWidth()+this.getGap());
    this.setAscent(this.iMax2(pt*7/10,this.getTerm1(0).getAscent()));
    this.setDescent(this.iMax2(pt*3/10,this.getTerm1(0).getDescent()));
};

exR.RightOpeEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    if(this.getTerm1(0).type==5){
        if(this.getOpeBackColorNum() > 0){
            MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
        }
        if(this.getOpeFrameColorNum() > 0){
            MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
        }
        this.getTerm1(0).drawEx(gra,pt,x+this.getOpeWidth()+this.getGap(),y);
        
        this.setFontSize(pt);
        MathTOUCH.drawString(gra,this.RepR,x,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    }
    else{
        if(this.getOpeBackColorNum() > 0){
            MathTOUCH.fillRect(gra,x+this.getTerm1(0).getWidth()+this.getGap(),y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
        }
        if(this.getOpeFrameColorNum() > 0){
            MathTOUCH.drawRect(gra,x+this.getTerm1(0).getWidth()+this.getGap(),y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
        }
        this.getTerm1(0).drawEx(gra,pt,x,y);
        
        this.setFontSize(pt);
        MathTOUCH.drawString(gra,this.RepR,x+this.getTerm1(0).getWidth()+this.getGap(),y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
 (3）空白区切りによる2式（暗黙の積）
*****************/
exR.SpacedEx = function(t1,t2){ 
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setType(3);
    this.setTerm1(0,t1);
    this.setTerm1(1,t2);
    this.setPer(0.0);
    this.setGap(0);
};

exR.SpacedEx.prototype.toString = function () {
    return this.getTerm1(0).toString()+"/"+this.getTerm1(1).toString();
};

exR.SpacedEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.getTerm1(1).sizeEx(gra,pt);
    this.setGap(Math.floor(pt*this.getPer()));
    this.setOpeWidth(this.getGap()+2);
    this.setWidth(this.getTerm1(0).getWidth()+this.getTerm1(1).getWidth()+this.getGap());
    this.setAscent(this.iMax2(this.getTerm1(0).getAscent(),this.getTerm1(1).getAscent()));
    this.setDescent(this.iMax2(this.getTerm1(0).getDescent(),this.getTerm1(1).getDescent()));
};

exR.SpacedEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    var dx=0;
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x+this.getTerm1(0).getWidth()-1,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x+this.getTerm1(0).getWidth(),y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x,y);
    this.getTerm1(1).drawEx(gra,pt,x+this.getTerm1(0).getWidth()+this.getGap(),y);
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(2）2乗根の式
*****************/
exR.SqrtEx = function(t1){ 
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    this.setType(2);
    this.setTerm1(0,t1);
    var _subBase=0;
    var _subwidth=0;
                      
    this.setSubBase = function(s){
        _subBase=s;
    };
                      
    this.getSubBase = function(){
        return _subBase;
    };
                      
    this.setSubwidth = function(s){
        _subwidth=s;
    };
                      
    this.getSubwidth = function(){
        return _subwidth;
    };
};

exR.SqrtEx.prototype.toString = function () {
        return "overline("+this.getTerm1(0).toString()+")";
};

exR.SqrtEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    var swit=Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*0.08);
    if(swit<1) swit=1;
    this.setSubwidth(swit);
    this.setSubBase(Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())/2)+this.getSubwidth()*2);
    this.setWidth(this.getTerm1(0).getWidth()+this.getSubwidth()*6+2);
    this.setAscent(this.getTerm1(0).getAscent()+this.getSubwidth()*2);
    this.setDescent(this.getTerm1(0).getDescent());
    this.setOpeWidth(this.getSubwidth()*6+2);
};

exR.SqrtEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
        MathTOUCH.fillRect(gra,x+2+this.getSubwidth()*6,y-this.getTerm1(0).getAscent()+this.getSubwidth()-3,this.getTerm1(0).getWidth(),5,this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x+this.getSubwidth()*6+2,y);
    
    MathTOUCH.drawLine(gra,x,y+this.getDescent()-this.getSubBase()+2,x+2,y+this.getDescent()-this.getSubBase(),this.getOpeColor());
    MathTOUCH.drawLine(gra,x+2,y+this.getDescent()-this.getSubBase(),x+2+this.getSubwidth()*2,y+this.getDescent()-this.getSubwidth()*2,this.getOpeColor());
    MathTOUCH.drawLine(gra,x+2+this.getSubwidth()*2,y+this.getDescent()-this.getSubwidth()*2,x+2+this.getSubwidth()*6,y-this.getTerm1(0).getAscent()-this.getSubwidth()*2+1,this.getOpeColor());
    MathTOUCH.drawLine(gra,x+2+this.getSubwidth()*6,y-this.getTerm1(0).getAscent()-this.getSubwidth()*2+1,x+2+this.getSubwidth()*6+this.getTerm1(0).getWidth(),y-this.getTerm1(0).getAscent()-this.getSubwidth()*2+1,this.getOpeColor());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(3）n乗根の式
 *****************/
exR.RootEx = function(t1,t2){ 
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    this.setType(3);
    this.setTerm1(0,t1);
    this.setTerm1(1,t2);
    var _subBase=0;
    var _subpoint=0;
    var _subwidth=0;
                      
    this.setSubBase = function(s){
        _subBase=s;
    };
                      
    this.getSubBase = function(){
        return _subBase;
    };
    
    this.setSubpoint = function(b){
        _subpoint=b;
    };
                      
    this.getSubpoint = function(){
        return _subpoint;
    };
                      
    this.setSubwidth = function(s){
        _subwidth=s;
    };
                      
    this.getSubwidth = function(){
        return _subwidth;
    };
};

exR.RootEx.prototype.toString = function () {
    return "overline("+this.getTerm1(0).toString()+")";
};

exR.RootEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.setSubpoint(Math.floor(pt*0.6));
    this.getTerm1(0).sizeEx(gra,this.getSubpoint());
    this.getTerm1(1).sizeEx(gra,pt);
    var rtsw=Math.floor((this.getTerm1(1).getAscent()+this.getTerm1(1).getDescent())*0.08);
    if(rtsw<1) rtsw=1;
    this.setSubwidth(rtsw);
    this.setSubBase(Math.floor((this.getTerm1(1).getAscent()+this.getTerm1(1).getDescent())/2)+this.getSubwidth()*2);
    this.setWidth(this.iMax2(this.getTerm1(1).getWidth()+this.getSubwidth()*6+2,this.getTerm1(1).getWidth()+this.getTerm1(0).getWidth()+this.getSubwidth()*2));
    this.setAscent(this.getTerm1(1).getAscent()+this.getSubwidth()*2);
    this.setDescent(this.getTerm1(1).getDescent());
    this.setOpeWidth(this.getSubwidth()*6+2);
};

exR.RootEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    var dx;
    if(this.getSubwidth()*4<this.getTerm1(0).getWidth()) dx=this.getTerm1(0).getWidth()-this.getSubwidth()*4-2;
    else dx=0;
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x+dx,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeBackColor());
        MathTOUCH.fillRect(gra,x+dx+2+this.getSubwidth()*6,y-this.getTerm1(1).getAscent()+this.getSubwidth()-3,this.getTerm1(1).getWidth(),5,this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x+dx,y-this.getAscent(),this.getOpeWidth(),this.getAscent()+this.getDescent(),this.getOpeFrameColor());
    }
    this.getTerm1(0).drawEx(gra,this.getSubpoint(),x,y+this.getDescent()-this.getSubBase()-this.getTerm1(0).getDescent());
    this.getTerm1(1).drawEx(gra,pt,x+dx+this.getSubwidth()*6+2,y);
    
    MathTOUCH.drawLine(gra,x+dx,y+this.getDescent()-this.getSubBase()+2,x+dx+2,y+this.getDescent()-this.getSubBase(),this.getOpeColor());
    MathTOUCH.drawLine(gra,x+dx+2,y+this.getDescent()-this.getSubBase(),x+dx+2+this.getSubwidth()*2,y+this.getDescent()-this.getSubwidth()*2,this.getOpeColor());
    MathTOUCH.drawLine(gra,x+dx+2+this.getSubwidth()*2,y+this.getDescent()-this.getSubwidth()*2,x+dx+2+this.getSubwidth()*6,y-this.getTerm1(1).getAscent()-this.getSubwidth()*2,this.getOpeColor());
    MathTOUCH.drawLine(gra,x+dx+2+this.getSubwidth()*6,y-this.getTerm1(1).getAscent()-this.getSubwidth()*2,x+dx+2+this.getSubwidth()*6+this.getTerm1(1).getWidth(),y-this.getTerm1(1).getAscent()-this.getSubwidth()*2,this.getOpeColor());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(2）真上に添字文字列を配置した変数
*****************/
exR.StackrelEx = function(t1,sym){ 
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    this.setType(2);
    this.setPer(0.6);
    this.setTerm1(0,t1);
    this.setRep(this.getOpeLabel(sym));
    var _up=1.0;
    var _subBase=0;
    var _subpoint=0;
    var _subwidth=0;
    
    this.setUp = function(s){
        _up=s;
    };
    this.getUp = function(){
        return _up;
    };
    
    this.setSubBase = function(s){
        _subBase=s;
    };
    this.getSubBase = function(){
        return _subBase;
    };
    
    this.setSubpoint = function(b){
        _subpoint=b;
    };
                      
    this.getSubpoint = function(){
        return _subpoint;
    };
                      
    this.setSubwidth = function(s){
        _subwidth=s;
    };
                      
    this.getSubwidth = function(){
        return _subwidth;
    };
};

exR.StackrelEx.prototype.toString = function () {
    return this.RepR+this.getTerm1(0).toString();
};

exR.StackrelEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.setSubpoint(Math.floor(pt*this.getPer()));
    this.getTerm1(0).sizeEx(gra,this.getSubpoint());
    this.setFontSize(pt);
    this.setOpeWidth(this.getTextWidth(gra, this.getRep()));
    this.setSubwidth(this.getOpeWidth());
    this.setSubBase(Math.floor(this.getTerm1(0).getDescent()+pt*7/10*this.getUp()));
    this.setWidth(this.iMax2(this.getOpeWidth(),this.getTerm1(0).getWidth()));
    this.setAscent(this.iMax2(pt*7/10,this.getSubBase()+this.getTerm1(0).getAscent()));
    this.setDescent(this.getTerm1(0).getDescent());
};

exR.StackrelEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    var dx;
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    if(this.getOpeWidth()<this.getTerm1(0).getWidth()){
        dx=(this.getTerm1(0).getWidth()-this.getOpeWidth())/2;
        if(this.getOpeBackColorNum() > 0){
            MathTOUCH.fillRect(gra,x+dx,y-this.getSubBase()+this.getTerm1(0).getDescent(),this.getOpeWidth(),this.getAscent()+this.getDescent()-this.getTerm1(0).getAscent(),this.getOpeBackColor());
        }
        if(this.getOpeFrameColorNum() > 0){
            MathTOUCH.drawRect(gra,x+dx,y-this.getSubBase()+this.getTerm1(0).getDescent(),this.getOpeWidth(),this.getAscent()+this.getDescent()-this.getTerm1(0).getAscent(),this.getOpeFrameColor());
        }
        this.getTerm1(0).drawEx(gra,this.getSubpoint(),x,y-this.getSubBase());
        
        this.setFontSize(pt);
        MathTOUCH.drawString(gra,this.getRep(),x+dx,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    }
    else{
        dx=(this.getOpeWidth()-this.getTerm1(0).getWidth())/2;
        if(this.getOpeBackColorNum() > 0){
            MathTOUCH.fillRect(gra,x,y-this.getSubBase()+this.getTerm1(0).getDescent(),this.getOpeWidth(),this.getAscent()+this.getDescent()-this.getTerm1(0).getAscent(),his.getOpeBackColor());
        }
        if(this.getOpeFrameColorNum() > 0){
            MathTOUCH.drawRect(gra,x,y-this.getSubBase()+this.getTerm1(0).getDescent(),this.getOpeWidth(),this.getAscent()+this.getDescent()-this.getTerm1(0).getAscent(),this.getOpeFrameColor());
        }
        this.getTerm1(0).drawEx(gra,this.getSubpoint(),x+dx,y-this.getSubBase());
        
        this.setFontSize(pt);
        MathTOUCH.drawString(gra,this.getRep(),x,y,this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};
    
/****************
  (3）下付き添字式
 *****************/
exR.SubscriptEx = function(t1,t2){ 
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    this.setType(3);
    this.setTerm1(0,t1);
    this.setTerm1(1,t2);
    var _subBase=0;
    var _subpoint=0;

    this.setSubBase = function(s){
        _subBase=s;
    };
                      
    this.getSubBase = function(){
        return _subBase;
    };
                      
    this.setSubpoint = function(s){
        _subpoint=s;
    };
                      
    this.getSubpoint = function(){
        return _subpoint;
    };
};

exR.SubscriptEx.prototype.toString = function () {
    return this.getTerm1(0).toString()+"_"+this.getTerm1(1).toString();
};

exR.SubscriptEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.setSubpoint(Math.floor(pt*0.6));
    this.getTerm1(0).sizeEx(gra,pt);
    this.getTerm1(1).sizeEx(gra,this.getSubpoint());
    this.setSubBase(Math.floor(this.getTerm1(0).getDescent()*0.7));
    this.setWidth(this.getTerm1(0).getWidth()+this.getTerm1(1).getWidth()+1);
    this.setAscent(this.iMax2(this.getTerm1(0).getAscent(),this.getTerm1(1).getAscent()-this.getSubBase()));
    this.setDescent(this.iMax2(this.getTerm1(0).getDescent(),this.getTerm1(1).getDescent()+this.getSubBase()));
};

exR.SubscriptEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x+this.getTerm1(0).getWidth()-1,y+this.getSubBase()-this.getTerm1(1).getAscent(),2,this.getTerm1(1).getAscent()+this.getTerm1(1).getDescent(),this.getOpeBackColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x,y);
    this.getTerm1(1).drawEx(gra,this.getSubpoint(),x+this.getTerm1(0).getWidth()+1,y+this.getSubBase());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
(3）上付き添字式
 *****************/
exR.SuperscriptEx = function(t1,t2){ 
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    this.setType(3);
    this.setTerm1(0,t1);
    this.setTerm1(1,t2);
    var _subBase=0;
    var _subpoint=0;
    
    this.setSubBase = function(s){
        _subBase=s;
    };
                      
    this.getSubBase = function(){
        return _subBase;
    };
                      
    this.setSubpoint = function(s){
        _subpoint=s;
    };
                      
    this.getSubpoint = function(){
        return _subpoint;
    };
};

exR.SuperscriptEx.prototype.toString = function () {
    return this.getTerm1(0).toString()+"^"+this.getTerm1(1).toString();
};

exR.SuperscriptEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.setSubpoint(Math.floor(pt*0.6));
    this.getTerm1(0).sizeEx(gra,pt);
    this.getTerm1(1).sizeEx(gra,this.getSubpoint());
    this.setSubBase(Math.floor(this.getTerm1(0).getAscent()*0.5));
    this.setWidth(this.getTerm1(0).getWidth()+this.getTerm1(1).getWidth()+1);
    this.setAscent(this.iMax2(this.getTerm1(0).getAscent(),this.getTerm1(1).getAscent()+this.getSubBase()));
    this.setDescent(this.iMax2(this.getTerm1(0).getDescent(),this.getTerm1(1).getDescent()-this.getSubBase()));
};

exR.SuperscriptEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x+this.getTerm1(0).getWidth()-1,y-this.getSubBase()-this.getTerm1(1).getAscent(),2,this.getTerm1(1).getAscent()+this.getTerm1(1).getDescent(),this.getOpeBackColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x,y);
    this.getTerm1(1).drawEx(gra,this.getSubpoint(),x+this.getTerm1(0).getWidth()+1,y-this.getSubBase());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};
    
/****************
（演算子）下・上付き添字式
 *****************/
exR.SubSuperscriptEx = function(t1,t2,t3){ 
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    this.setType(4);
    this.setTerm1(0,t1);
    this.setTerm1(1,t2);
    this.setTerm1(2,t3);
    var _subBase=0;
    var _supBase=0;
    var _subpoint=0;
                      
    this.setSubBase = function(s){
        _subBase=s;
    };
                      
    this.getSubBase = function(){
        return _subBase;
    };
                      
    this.setSupBase = function(s){
        _supBase=s;
    };
    
    this.getSupBase = function(){
        return _supBase;
    };
                      
    this.setSubpoint = function(s){
        _subpoint=s;
    };
                      
    this.getSubpoint = function(){
        return _subpoint;
    };
                      
};

exR.SubSuperscriptEx.prototype.toString = function () {
    return this.getTerm1(0).toString()+"_"+this.getTerm1(1).toString();
};

exR.SubSuperscriptEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.setSubpoint(Math.floor(pt*0.6));
    this.getTerm1(0).sizeEx(gra,pt);
    this.getTerm1(1).sizeEx(gra,this.getSubpoint());
    this.getTerm1(2).sizeEx(gra,this.getSubpoint());
    this.setSubBase(this.iMax2(Math.floor(this.getTerm1(0).getDescent()*0.7),1+this.getTerm1(1).getAscent()));
    this.setSupBase(this.iMax2(Math.floor(this.getTerm1(0).getAscent()*0.5),2+this.getTerm1(2).getDescent()));
    this.setWidth(this.iMax2(this.getTerm1(0).getWidth()+this.getTerm1(1).getWidth()+1,this.getTerm1(0).getWidth()+this.getTerm1(2).getWidth()+1));
    this.setAscent(this.iMax2(this.getTerm1(0).getAscent(),this.getTerm1(2).getAscent()+this.getSupBase()));
    this.setDescent(this.iMax2(this.getTerm1(0).getDescent(),this.getTerm1(1).getDescent()+this.getSubBase()));
};

exR.SubSuperscriptEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x+this.getTerm1(0).getWidth()-1,y-this.getSubBase()-this.getTerm1(1).getAscent(),2,this.getTerm1(1).getAscent()+this.getTerm1(1).getDescent(),this.getOpeBackColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    if(this.getTerm1(0).type==2) this.getTerm1(0).setBigpoint(this.getAscent()+this.getDescent());
    this.getTerm1(0).drawEx(gra,pt,x,y);
    this.getTerm1(1).drawEx(gra,this.getSubpoint(),x+this.getTerm1(0).getWidth()+1,y+this.getSubBase());
    this.getTerm1(2).drawEx(gra,this.getSubpoint(),x+this.getTerm1(0).getWidth()+1,y-this.getSupBase());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};
    
/****************
 （演算子）真上に文字列を配置した式
 *****************/
exR.TopEx = function(sym,t1){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    this.setType(2);
    this.setPer(1.0);
    this.setTerm1(0,t1);
    this.setRep(this.getOpeLabel(sym));
    var _up = 1.0;
    var _subBase=0;
    var _subpoint=0;
    var _subwidth=0;
    
    this.setSubBase = function(s){
    _subBase=s;
    };
                      
    this.getSubBase = function(){
        return _subBase;
    };
                      
    this.setSubpoint = function(s){
        _subpoint=s;
    };
                      
    this.getSubpoint = function(){
        return _subpoint;
    };
                      
    this.setSubwidth = function(s){
        _subwidth=s;
    };
                      
    this.getSubwidth = function(){
        return _subwidth;
    };

    this.setUp = function(s){
        _up=s;
    };
    this.getUp = function(){
        return _up;
    };
};

exR.TopEx.prototype.setSubRatio = function(pp){
    this.setPer(pp);
};

exR.TopEx.prototype.toString = function () {
    return this.RepR+this.getTerm1(0).toString();
};

exR.TopEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.setSubpoint(Math.floor(pt*this.getPer()));
    this.getTerm1(0).sizeEx(gra,pt);
    this.setFontSize(this.getSubpoint());
    this.setOpeWidth(this.getTextWidth(gra, this.getRep()));
    this.setSubwidth(pt);
    this.setSubBase(Math.floor(this.getTerm1(0).getAscent()+pt*3/10*this.getUp()));
    this.setWidth(this.iMax2(this.getOpeWidth(),this.getTerm1(0).getWidth()));
    this.setAscent(this.iMax2(this.getTerm1(0).getAscent(),this.getSubBase()+pt*7/10));
    this.setDescent(this.getTerm1(0).getDescent());
};

exR.TopEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    var dx;
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    if(this.getOpeWidth()<this.getTerm1(0).getWidth()){
        dx=(this.getTerm1(0).getWidth()-this.getOpeWidth())/2;
        if(this.getOpeBackColorNum() > 0){
            MathTOUCH.fillRect(gra,x+dx,y-this.getAscent(),this.getOpeWidth(),this.getSubwidth(),this.getOpeBackColor());
        }
        if(this.getOpeFrameColorNum() > 0){
            MathTOUCH.drawRect(gra,x+dx,y-this.getAscent(),this.getOpeWidth(),this.getSubwidth(),this.getOpeFrameColor());
        }
        this.getTerm1(0).drawEx(gra,pt,x,y);
        
        this.setFontSize(this.getSubpoint());
        MathTOUCH.drawString(gra,this.getRep(),x+dx,y-this.getSubBase(),this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    }
    else{
        dx=(this.getOpeWidth()-this.getTerm1(0).getWidth())/2;
        if(this.getOpeBackColorNum() > 0){
            MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getSubwidth(),this.getOpeBackColor());
        }
        if(this.getOpeFrameColorNum() > 0){
            MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getOpeWidth(),this.getSubwidth(),this.getOpeFrameColor());
        }
        this.getTerm1(0).drawEx(gra,pt,x+dx,y);
        
        this.setFontSize(this.getSubpoint());
        MathTOUCH.drawString(gra,this.getRep(),x,y-this.getSubBase(),this.getFace(),this.getFontSize(),this.getFont(),this.getOpeColor());
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
（演算子）ハット記号（可変サイズ）
 *****************/
exR.WideHatEx = function(t1){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    if(t1.type<0) this.setType(-1);
    else this.setType(2);
    this.setTerm1(0,t1);
};

exR.WideHatEx.prototype.toString = function () {
    return "wideHat("+this.getTerm1(0).toString()+")";
};

exR.WideHatEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setOpeWidth(Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*0.1+4));
    this.setWidth(this.getTerm1(0).getWidth());
    this.setAscent(this.getTerm1(0).getAscent()+this.getOpeWidth());
    this.setDescent(this.getTerm1(0).getDescent());
};

exR.WideHatEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getOpeWidth(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getOpeWidth(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x,y);
    
    MathTOUCH.drawLine(gra,x,y-this.getAscent()+6,x+this.getWidth()/2,y-this.getAscent(),this.getOpeColor());
    MathTOUCH.drawLine(gra,x+this.getWidth()/2,y-this.getAscent(),x+this.getWidth(),y-this.getAscent()+6,this.getOpeColor());
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
（演算子）チルダ記号（可変サイズ）
 *****************/
exR.WideTildeEx = function(t1){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    if(t1.type<0){
        this.setType(-1);
    }else{
        this.setType(2);
    }
    this.setTerm1(0,t1);
};

exR.WideTildeEx.prototype.toString = function () {
    return "wideHat("+this.getTerm1(0).toString()+")";
};

exR.WideTildeEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setOpeWidth(Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*0.1+4));
    this.setWidth(this.getTerm1(0).getWidth());
    this.setAscent(this.getTerm1(0).getAscent()+this.getOpeWidth());
    this.setDescent(this.getTerm1(0).getDescent());
};

exR.WideTildeEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getOpeWidth(),this.getOpeBackColor());
    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getOpeWidth(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x,y);
    var ix0=x;
    var iy0=y-this.getAscent()+3;
    var ix,iy;
    for(var t=0.1;t<=2.0*Math.PI;t+=0.1){
        ix=x+Math.floor(t*this.getWidth()/(2.0*Math.PI));
        iy=y-this.getAscent()+3-Math.floor(3.0*Math.sin(t));
        MathTOUCH.drawLine(gra,ix0,iy0,ix,iy,this.getOpeColor());
        ix0=ix;iy0=iy;
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.arrowLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getDirection(),this.getBaseColor());
    }
};

/****************
（演算子）ベクトル記号（可変サイズ）
 *****************/
exR.WideVecEx = function(t1){
    MathTOUCH.initializeBase(this, exR.exRep, []);
    this.setFace("");	
    if(t1.type<0) this.setType(-1);
    else this.setType(2);
    this.setTerm1(0,t1);
    this.Rightarrow=true;
};

exR.WideVecEx.prototype.setDirection = function(isRight){
    this.Rightarrow=isRight;
};

exR.WideVecEx.prototype.toString = function () {
    return "wideHat("+this.getTerm1(0).toString()+")";
};

exR.WideVecEx.prototype.sizeEx = function (gra,pt) {	
    this.setPoint(pt);
    this.getTerm1(0).sizeEx(gra,pt);
    this.setOpeWidth(Math.floor((this.getTerm1(0).getAscent()+this.getTerm1(0).getDescent())*0.1+4));
    this.setWidth(this.getTerm1(0).getWidth());
    this.setAscent(this.getTerm1(0).getAscent()+this.getOpeWidth());
    this.setDescent(this.getTerm1(0).getDescent());
};

exR.WideVecEx.prototype.drawEx = function (gra,pt,x,y) {
    this.setStartXY(x,y);
    this.sizeEx(gra,pt);
    if(this.getBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getBackColor());
    }
    if(this.getOpeBackColorNum() > 0){
        MathTOUCH.fillRect(gra,x,y-this.getAscent(),this.getWidth(),this.getOpeWidth(),this.getOpeBackColor());

    }
    if(this.getOpeFrameColorNum() > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getOpeWidth(),this.getOpeFrameColor());
    }
    if(this.getFrameColorNum () > 0){
        MathTOUCH.drawRect(gra,x,y-this.getAscent(),this.getWidth(),this.getAscent()+this.getDescent(),this.getFrameColor());
    }
    this.getTerm1(0).drawEx(gra,pt,x,y);
    
    MathTOUCH.drawLine(gra,x,y-this.getAscent()+3,x+this.getWidth(),y-this.getAscent()+3,this.getOpeColor());
    if(this.Rightarrow){
        MathTOUCH.drawLine(gra,x+this.getWidth(),y-this.getAscent()+3,x+this.getWidth()-3,y-this.getAscent(),this.getOpeColor());
        MathTOUCH.drawLine(gra,x+this.getWidth(),y-this.getAscent()+3,x+this.getWidth()-3,y-this.getAscent()+6,this.getOpeColor());
    }
    else{
        MathTOUCH.drawLine(gra,x,y-this.getAscent()+3,x+3,y-this.getAscent(),this.getOpeColor());
        MathTOUCH.drawLine(gra,x,y-this.getAscent()+3,x+3,y-this.getAscent()+6,this.getOpeColor());
    }
    if(this.getBaseColorNum() >0){
        MathTOUCH.drawLine(gra,x,y,parseInt(x)+parseInt(this.getWidth()),y,this.getBaseColor());
    }
};
