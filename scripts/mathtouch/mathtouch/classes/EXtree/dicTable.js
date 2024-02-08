/************
 dicTbl module
 ************/
MathTOUCH.KW = function(kw,wd,tp,k,sc){
    this.keyword=kw;
	this.theWord=wd;
	this.type=tp;
    this.key=k;
    this.score=sc;
};
MathTOUCH.KW.prototype.getInputWord = function(){
        var _ans="";
        var _c;
        for(var i=0;i<this.keyword.length;i++){
            _c=this.keyword.charAt(i);
            if(_c!=','){
                _ans=_ans+_c;
            }
        }
        return _ans;
};


MathTOUCH.keyNode = function(r,k,kw,dn){
    this.rank=r;
    this.key=k;
    this.word=null;
    this.down=null;
    if(kw!=null){this.word=new Array();this.word[0]=kw;}
    else{this.word=null;}
    if(dn!=null){this.down=new Array();this.down[0]=dn;}
    else this.down=null;
};

MathTOUCH.keyNode.prototype.copy = function(org){
    this.rank=org.rank;
    this.key=org.key;
    this.word=org.word;
    this.down = org.down;
};
    
MathTOUCH.keyNode.prototype.addKW = function(kw){
    if(kw==null) return;
    var _len=0;
    if(this.word!=null){
        _len=this.word.length;
        for(var i=0;i<_len;i++) if(this.word[i].theWord==kw.theWord) return;
    }
    this.word[_len]=kw;
};
    
MathTOUCH.keyNode.prototype.addDown = function(children){
    this.down=children;
};
    
MathTOUCH.keyNode.prototype.addChild = function(child){
    if(child==null) return null;
    var _len=0;
    if(this.down!=null){
        _len=this.down.length;
        for(var i=0;i<_len;i++){
            if(this.down[i].key==child.key){
                if(child.word!=null){
                    for(var j=0;j<child.word.length;j++){
                        this.down[i].addKW(child.word[j]);
                    }
                }
                return this.down[i];
            }
        }
    }
    var _temp=new Array(_len+1);
    for(var i=0;i<_len;i++){
        _temp[i]=this.down[i];
    }
    _temp[_len]=child;
    this.down=_temp;
    return this.down[_len];
};

 
MathTOUCH.dicTable = function(){
    var _diction=[
                  [new MathTOUCH.KW("Im","Im",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("lg","lg",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("ln","ln",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("Pr","Pr",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("+-","+-",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("-+","-+",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("<=","<=",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("-|","dashv",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW(">=",">=",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("/=","/=",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("/<","/<",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("/>","/>",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW(">>",">>",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("<<","<<",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("><","><",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("^+","^+",MathTOUCH.OP1A,0,3)
                   ,new MathTOUCH.KW("^-","^-",MathTOUCH.OP1A,0,3)
                   ,new MathTOUCH.KW("^*","^*",MathTOUCH.OP1A,0,3)
                   ,new MathTOUCH.KW("~=","~=",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("=@","=@",MathTOUCH.OP3T,0,3)
                   ,new MathTOUCH.KW("<@","<@",MathTOUCH.OP3T,0,3)
                   ,new MathTOUCH.KW(">@",">@",MathTOUCH.OP3T,0,3)
                   ,new MathTOUCH.KW("//","parallel",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("|-","vdash",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("|=","models",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("A@","cap",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("U@","cup",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("a@","cap",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("a@","amalg",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("c@","coprod",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("i@","integral",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("o@","oint",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("p@","prod",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("s@","sum",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("t@","bigtriangleup",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("u@","cup",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("v@","vee",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("w@","bigwedge",MathTOUCH.OP1P,0,3)
                   ]
                  ,
                  [new MathTOUCH.KW("...","...",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("<--","leftarrow",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("-->","rightarrow",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("<->","leftrightarrow",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("<==","Leftarrow",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("==>","Rightarrow",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("<=>","Leftrightarrow",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("<=@","<=@",MathTOUCH.OP3T,0,3)
                   ,new MathTOUCH.KW(">=@",">=@",MathTOUCH.OP3T,0,3)
                   ,new MathTOUCH.KW("alp","alpha",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("arg","arg",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("aru","exists",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("bar","var",MathTOUCH.OP1A,0,3)
                   ,new MathTOUCH.KW("bet","beta",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("bot","bot",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("Box","Box",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("cap","cap",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("Cap","bigcap",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("chi","chi",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("cop","coprod",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("cos","cos",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("cot","cot",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("csc","csc",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("cup","cup",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("Cup","bigcup",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("deg","deg",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("del","delta",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Del","Delta",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("det","det",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("dim","dim",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("dot","dot",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("div","/",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("ell","ell",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("emp","empty",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("eps","epsilon",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("eta","eta",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("exp","exp",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("gam","gamma",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Gam","Gamma",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("gcd","gcd",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("hat","hat",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("hom","hom",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("inf","infty",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("int","integral",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("iot","iota",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("kap","kappa",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("ker","ker",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("lam","lambda",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Lam","Lambda",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("lim","lim",MathTOUCH.OP2P,0,3)
                   ,new MathTOUCH.KW("log","log",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("max","max",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("mho","mho",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("min","min",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("mod","mod",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("neg","neg",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("oin","oint",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("ome","omega",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Ome","Omega",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("phi","phi",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Phi","Phi",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("psi","psi",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Psi","Psi",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rho","rho",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmA","rmA",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmB","rmB",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmC","rmC",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmD","rmD",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmE","rmE",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmF","rmF",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmG","rmG",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmH","rmH",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmI","rmI",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmJ","rmJ",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmK","rmK",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmL","rmL",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmM","rmM",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmN","rmN",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmO","rmO",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmP","rmP",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmQ","rmQ",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmR","rmR",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmS","rmS",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmT","rmT",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmU","rmU",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmV","rmV",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmW","rmW",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmX","rmX",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmY","rmY",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmZ","rmZ",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rma","rma",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmb","rmb",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmc","rmc",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmd","rmd",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rme","rme",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmf","rmf",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmg","rmg",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmh","rmh",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmi","rmi",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmj","rmj",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmk","rmk",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rml","rml",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmm","rmm",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmn","rmn",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmo","rmo",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmp","rmp",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmq","rmq",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmr","rmr",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rms","rms",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmt","rmt",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmu","rmu",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmv","rmv",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmw","rmw",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmx","rmx",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmy","rmy",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("rmz","rmz",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("sec","sec",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("sig","sigma",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Sig","Sigma",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("sin","sin",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("sum","sum",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("sup","sup",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("tan","tan",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("tau","tau",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("the","i",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("The","Theta",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("top","top",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("tri","triangle",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("ups","upsilon",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Ups","Upsilon",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("var","var",MathTOUCH.OP1A,0,3)
                   ,new MathTOUCH.KW("vec","vec",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("vee","vee",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("Vee","bigvee",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("zet","zeta",MathTOUCH.VAR,0,3)
                   ],
                  [
                   new MathTOUCH.KW("<--@","<--@",MathTOUCH.OP3T,0,3)
                   ,new MathTOUCH.KW("<==@","<==@",MathTOUCH.OP3T,0,3)
                   ,new MathTOUCH.KW("-->@","-->@",MathTOUCH.OP3T,0,3)
                   ,new MathTOUCH.KW("==>@","==>@",MathTOUCH.OP3T,0,3)
                   ,new MathTOUCH.KW("<->@","<->@",MathTOUCH.OP3T,0,3)
                   ,new MathTOUCH.KW("<=>@","<=>@",MathTOUCH.OP3T,0,3)
                   ,new MathTOUCH.KW("beta","beta",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldA","boldA",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldB","boldB",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldC","boldC",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldD","boldD",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldE","boldE",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldF","boldF",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldG","boldG",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldH","boldH",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldI","boldI",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldJ","boldJ",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldK","boldK",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldL","boldL",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldM","boldM",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldN","boldN",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldO","boldO",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldP","boldP",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldQ","boldQ",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldR","boldR",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldS","boldS",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldT","boldT",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldU","boldU",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldV","boldV",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldW","boldW",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldX","boldX",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldY","boldY",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldZ","boldZ",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("bolda","bolda",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldb","boldb",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldc","boldc",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldd","boldd",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("bolde","bolde",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldf","boldf",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldg","boldg",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldh","boldh",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldi","boldi",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldj","boldj",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldk","boldk",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldl","boldl",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldm","boldm",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldn","boldn",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldo","boldo",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldp","boldp",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldq","boldq",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldr","boldr",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("bolds","bolds",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldt","boldt",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldu","boldu",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldv","boldv",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldw","boldw",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldx","boldx",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldy","boldy",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("boldz","boldz",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("club","club",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("copr","coprod",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("cosh","cosh",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("coth","coth",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("fbox","fbox",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("flat","flat",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("hbar","hbar",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("iota","iota",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("odot","odot",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("oint","oint",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("over","over",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("para","parallel",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("prec","prec",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("prod","prod",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("root","root",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("sinh","sinh",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("sqrt","sqrt",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("star","star",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("succ","succ",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("tanh","tanh",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("waru","/",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("zeta","zeta",MathTOUCH.VAR,0,3)
                   ],
                  [new MathTOUCH.KW("aleph","aleph",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("alpha","alpha",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("amalg","amalg",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("angle","angle",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("asymp","asymp",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("bunno","backslash",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("cos-1","cos-1",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("dashv","dashv",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("empty","empty",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("gamma","gamma",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Gamma","Gamma",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("delta","delta",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Delta","Delta",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("heart","heart",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("infty","infty",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("jmath","jmath",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("kappa","kappa",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("lambd","lambda",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Lambd","Lambda",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("left^","left^",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("left_","left_",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("nabla","nabla",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("omega","omega",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Omega","Omega",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("oplus","oplus",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("paral","parallel",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("sharp","sharp",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("sigma","sigma",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Sigma","Sigma",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("sin-1","sin-1",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("souwa","sum",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("spade","spade",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("sqcap","bigsqcap",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("sqcup","bigsqcup",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("tan-1","tan-1",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("theta","theta",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Theta","Theta",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("triup","triangleup",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("under","under",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("upsil","upsilon",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Upsil","Upsilon",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("vdash","vdash",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("yueni","therefore",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("wedge","wedge",MathTOUCH.OP2C,0,3)
                   ],
                  [new MathTOUCH.KW("arcsin","arcsin",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("arccos","arccos",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("arctan","arctan",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("bigcap","bigcap",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("bigcup","bigcup",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("bigtri","bigtriangleup",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("bigvee","bigvee",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("coprod","coprod",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("dagger","dagger",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("epsilo","epsilon",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("exists","exists",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("forall","forall",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("lambda","lambda",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Lambda","Lambda",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("liminf","liminf",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("limsup","limsup",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("models","models",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("ominus","ominus",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("oslash","oslash",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("otimes","otimes",MathTOUCH.OP2C,0,3)
                   ],
                  [new MathTOUCH.KW("because","because",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("bigodot","bigodot",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("diamond","diamond",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("Diamond","Diamond",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("epsilon","epsilon",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("natural","natural",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("partial","partial",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("sekibun","integral",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("trileft","triangleleft",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("upsilon","upsilon",MathTOUCH.VAR,0,3)
                   ,new MathTOUCH.KW("Upsilon","Upsilon",MathTOUCH.VAR,0,3)
                   ],
                  [new MathTOUCH.KW("bigoplus","bigoplus",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("bigsqcup","bigsqcup",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("biguplus","biguplus",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("bigwedge","bigwedge",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("btridown","bigtriangledown",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("clubsuit","club",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("emptyset","empty",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("integral","integral",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("nazenara","because",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("parallel","parallel",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("sqsubset","sqsubset",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("sqsupset","sqsupset",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("subeteno","forall",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("triangle","triangle",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("triright","triangleright",MathTOUCH.OP2C,0,3)
                   ],
                  [new MathTOUCH.KW("backslash","backslash",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("bigotimes","bigotimes",MathTOUCH.OP1P,0,3)
                   ,new MathTOUCH.KW("heartsuit","heart",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("leftarrow","leftarrow",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("Leftarrow","Leftarrow",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("spadesuit","spade",MathTOUCH.SYM,0,3)
                   ,new MathTOUCH.KW("therefore","therefore",MathTOUCH.OP1P,0,3)
                   ],
                  [new MathTOUCH.KW("rightarrow","rightarrow",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("Rightarrow","Rightarrow",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("triangleup","triangleup",MathTOUCH.OP1P,0,3)
                   ],
                  [new MathTOUCH.KW("diamondsuit","diamond",MathTOUCH.SYM,0,3)
                   
                   ],
                  [new MathTOUCH.KW("triangleleft","triangleleft",MathTOUCH.OP2C,0,3)
                   
                   ],
                  [new MathTOUCH.KW("bigtriangleup","bigtriangleup",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("triangleright","triangleright",MathTOUCH.OP2C,0,3)
                   ],
                  [new MathTOUCH.KW("leftrightarrow","leftrightarrow",MathTOUCH.OP2C,0,3)
                   ,new MathTOUCH.KW("Leftrightarrow","Leftrightarrow",MathTOUCH.OP2C,0,3)
                   ],
                  [new MathTOUCH.KW("bigtriangledown","bigtriangledown",MathTOUCH.OP2C,0,3)
                   
                   ]
                  ];
    var _dicN=2;
    var _dicE;
    var _max=15;
    var _keyMax=95;
    var _root=new MathTOUCH.keyNode(0,' ',null,null);
    _root.down=new Array(_keyMax);
    for(var k=0;k<_keyMax;k++){
        _root.down[k]= new MathTOUCH.keyNode(1,String.fromCharCode(k+32),null,null);
    }
    for(var n=2;n<16;n++){
        for(var i=0;i<_diction[n-2].length;i++){
            var _bt=_diction[n-2][i].keyword;
            var _len=_bt.length;
            var _temp=_root.down[_bt.charCodeAt(0)-32];
            for(var j=1;j<_len-1;j++){
                if(_temp!=null){
                    _temp=_temp.addChild(new MathTOUCH.keyNode(j+1,_bt.charAt(j),null,null));
                }
                else{
                    console.log("root data error!");
                    return;
                }
            }
            if(_temp!=null){
                _temp.addChild(new MathTOUCH.keyNode(_len,_bt.charAt(_len-1),_diction[n-2][i],null));
            }else{
                console.log("root last data error! n="+n+",i="+i+",key="+_bt);
                return;
            }
        }
    }
    
    this.getMax =function(){
        return _max;
    }
    
    this.setMax =function(v){
        _max=v;
    }
    
    this.getDicN =function(){
        return _dicN;
    }
    
    this.setDicN =function(v){
        _dicN=v;
    }
    
    this.getDicE =function(){
        return _dicE;
    }
    
    this.setDicE =function(v){
        _dicE=v;
    }
    
    this.getRoot =function(){
        return _root;
    }
    
    this.setRoot =function(v){
        _root=v;
    }
    
    
    this.getDictionAllLength = function(){
        return _diction.length;
    }
    
    this.getDictionLength = function(i){
        return _diction[i].length;
    }
    
    this.getDiction = function(i,j){
        return _diction[i][j];
    }
    
    
    
    
};

MathTOUCH.dicTable.prototype.addRootKeyWord = function(myroot,kword){
    var _bt = kword.keyword;
    var _len = _bt.length;
    var _temp = myroot.down[_bt.charCodeAt(0)-32];
    for(var i=1; i<_len-1; i++){
        if(_temp!=null){
            _temp=_temp.addChild(new MathTOUCH.keyNode(i+1,_bt.charAt(i),null,null));
        }else{
            console.log("root data error!");
            return;
        }
    }
    if(_temp!=null){
        _temp.addChild(new MathTOUCH.keyNode(_len,_bt.charAt(_len-1),kword,null));
    }else{
        console.log("root data error!");
        return;
    }
};

MathTOUCH.dicTable.prototype.dicMatchFull = function(str,index){
    var _ans = this.dicMatch(str);
    if(_ans!=null){
        for(var i=0;i<index;i++){
            _ans=this.dicNextMatch(str);
            if(_ans==null) return(null);
        }
        return(_ans);
    }
    else return(null);
};

MathTOUCH.dicTable.prototype.dicMatch = function(str){
    if(this.isMatchDic(str)){
        return(this.getDiction(this.getDicN()-2, this.getDicE()));
    }
    else return(null);
};
	
MathTOUCH.dicTable.prototype.isMatchDic = function(str){
    var _sl=str.length;
    
    if(_sl>this.getMax()){
        _sl=this.getMax();
    }
    for(var n=_sl;n>=2;n--){
        var _st=str.substring(0,n);
        for(var i=0;i<this.getDictionLength(n-2);i++){
            if(_st==this.getDiction(n-2,i).getInputWord()){
                
                this.setDicN(n);
                this.setDicE(i);
                return(true);
            }
        }
    }
    return(false);
};
    
MathTOUCH.dicTable.prototype.dicMatchOff = function(str,offstr){
    if(this.isMatchDicOff(str,offstr)){
        return(this.getDiction(this.getDicN()-2,this.getDicE()));
    }
    else return(null);
};
	
MathTOUCH.dicTable.prototype.isMatchDicOff = function(str,offstr){
    var _sl=str.length;
    if(_sl>this.getMax()){
        _sl=this.getMax();
    }
    for(var n=_sl;n>=2;n--){
        var _st=str.substring(0,n);
        for(var i=0;i<this.getDictionLength(n-2).length;i++){
            if(_st==this.getDiction(n-2,i).getInputWord() && (_st!=offstr)){
                this.setDicN(n);
                this.setDicE(i);
                return(true);
            }
        }
    }
    return(false);
};

MathTOUCH.dicTable.prototype.dicNextMatch = function(str){
    if(this.isNextDic(str)){
        return(this.getDiction(this.getDicN()-2,this.getDicE()));
    }
    else return(null);
};
	
MathTOUCH.dicTable.prototype.isNextDic = function(str){
    var _sl=str.length;
    if(_sl>this.getMax()||_sl<2) return(false);
    for(var i=this.getDicE()+1;i<this.getDictionLength(_sl-2);i++){
        if(str==this.getDiction(_sl-2,i).getInputWord()){
            this.setDicN(_sl);
            this.setDicE(i);
            return(true);
        }
    }
    return(false);
};
    
MathTOUCH.dicTable.prototype.setLastdicE = function(str){
    var _sl=str.length;
    if(_sl>this.getMax() || _sl<2) return;
    this.setDicE(this.getDictionLength(_sl-2)-1);
};
    
MathTOUCH.dicTable.prototype.dicPreviousMatch = function(str){
    if(this.isPreviousDic(str)){
        return(this.getDiction(this.getDicN()-2,this.getDicE()));
    }
    else return(null);
};
	
MathTOUCH.dicTable.prototype.isPreviousDic = function(str){
    var _sl=str.length;
    if(_sl>this.getMax() || _sl<2) return(false);
    for(var i=this.getDicE()-1;i>=0;i--){
        if(str==this.getDiction(_sl-2,i).getInputWord()){
            this.setDicN(_sl);
            this.setDicE(i);
            return(true);
        }
    }
    return(false);
};

MathTOUCH.dicTable.prototype.getKeyNumberOf = function(wd){
    var _sl=wd.length;
    if(_sl>this.getMax()) return -1;
    for(var i=0;i<this.getDictionLength(_sl-2);i++){
        if(wd==this.getDiction(_sl-2,i).getInputWord()){
            return(this.getDiction(_sl-2,i).key);
        }
    }
    return -1;
};

MathTOUCH.dicTable.prototype.keyWord = function(iwd){
    var _sl=iwd.length;
    if(_sl<2||_sl>this.getMax()) return iwd;
    for(var i=0;i<this.getDictionLength(_sl-2);i++){
        if(iwd==this.getDiction(_sl-2,i).getInputWord()){
            return(this.getDiction(_sl-2,i).theWord);
        }
    }
    return iwd;
};

MathTOUCH.dicTable.prototype.AlldicMatch = function(str){
    var c0=str.charAt(0);
    if(c0=='\u21E9'||c0=='\u22A1'||c0=='\u23CE'||c0=='\u27B1'||c0=='\u201A') return null;
    var _kwtemp=new Array(20);
    var _count=0;
    var _nomatch=true;
    var _len=str.length;
    var _temp=this.getRoot().down[str.charCodeAt(0)-32];
    if(_temp.word!=null){
        for(var k=0;k<_temp.word.length;k++){
            _kwtemp[_count++]=_temp.word[k];
        }
    }
    for(var i=1;i<_len;i++){
        if(_temp.down==null) break;
        _nomatch=true;
        for(var j=0;j<_temp.down.length;j++){
            if(_temp.down[j].key==str.charAt(i)){
                _temp=_temp.down[j];
                if(_temp.word!=null){
                    for(var k=0;k<_temp.word.length;k++){
                        _kwtemp[_count++]=_temp.word[k];
                    }
                }
                _nomatch=false;
                break;
            }
        }
        if(_nomatch) break;
    }
    if(_count>0){
        var ans=new Array(_count);
        for(var i=0;i<_count;i++) ans[_count-i-1]=_kwtemp[i];
        return ans;
    }
    else return(null);
};
