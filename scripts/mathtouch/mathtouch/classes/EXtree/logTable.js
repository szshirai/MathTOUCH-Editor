var xtreeml=new MathTOUCH.EXtree2XtreeML();
MathTOUCH.logTable = function(){
	var _num=0;
	var _len=0;
	var _max=50;
    var _loglist=new Array();
    
    for(var i=0;i< _max;i++){
        _loglist[i]=new MathTOUCH.KW("","nul",MathTOUCH.XTML,-1,0);
    }


    this.getMax = function(){
        return _max;
    }
    
    this.getNum = function(num){
        return _num;
    }
    
    this.setNum = function(num){
        _num = num;
    }
    
    this.setLoglistAt = function(i,val){
        _loglist[i] = val;
    }
    
    this.getLoglistAt = function(i){
        return _loglist[i];
    }
    
    this.isNullLogAt = function(i){
        return( _loglist[i].theWord=="nul");
    }
    
    this.getLoglistLength = function(){
        var i=0;
        for(i=0;i<_loglist.length;i++) if(this.isNullLogAt(i)) break;
        return i;
    }

    this.storage=localStorage;
    this.logkey="MathTOUCHlog";

    this.setLogLocalStorage= function(key, value) {
        if (!window.localStorage) return;
        try {
            this.storage.setItem(key, value);
        } catch (err) {
            console.error(err);
        }
    };

    this.readTable=function(fname){
        xmlLogLoad(fname+".xml");
	}


    var xmlLogLoad=function(fname){
        $.ajax({
		   url:fname,
		   type:'get',
		   dataType:'xml',
		   timeout:1000,
		   success:parse_log_xml
		   });
    }

    var lindex=0;
    this.parse_log_xml=function(xml,status){
        if(status!='success') {alert("XMLlogread error");return;}
        var xmlparser = new DOMParser();
        var xmlarray = xmlparser.parseFromString(xml,"text/xml");
        var logObj = xmlarray.querySelectorAll("Log");console.log("logObj="+logObj.length+",log="+logObj[0]);
        for(var i=0; i<logObj.length; i++){
            log_load(logObj[i]);
        }

    }
    var log_load=function(logobject){
        lindex=0;
        var logparser = new DOMParser();
        var logarray = logparser.parseFromString(logobject,"text/xml");
        var ldataObj = logarray.querySelectorAll("LData");console.log("ldataOBj="+ldataObj.length);
        for(var i=0; i<ldataObj.length; i++){
            ldata_load(ldataObj[i]);
        }
    }
    var ldata_load=function()	{
        var $lid = $(this).text();
        var j=0;
        var score=0;
        var input="";
        var stAry=$lid.split("\t");
        if(stAry.length!=3){alert("LOGTABLE.dat line split error!");}
        input=stAry[0];
        while((j=input.indexOf("@@b"))>=0){
            input=input.substring(0,j)+"\u21E9"+input.substring(j+3);
        }
        while((j=input.indexOf("@@e"))>=0){
            input=input.substring(0,j)+"\u22A1"+input.substring(j+3);
        }
        while((j=input.indexOf("@@r"))>=0){
            input=input.substring(0,j)+"\u23cE"+input.substring(j+3);
        }
        while((j=input.indexOf("@@t"))>=0){
            input=input.substring(0,j)+"\u2326"+input.substring(j+3);
        }
        while((j=input.indexOf("@@c"))>=0){
            input=input.substring(0,j)+"\u201A"+input.substring(j+3);
        }
        score=Number(stAry[2]);
        _loglist[lindex]=new MathTOUCH.KW(input,stAry[1],MathTOUCH.XTML,-1,score);
        lindex++;
    }

    var _mylog = this.storage.getItem(this.logkey);
    if(_mylog ==null||_mylog.length==0){
    }
    else{
        this.parse_log_xml(_mylog,"success");
    }
};


MathTOUCH.logTable.prototype.reset = function(){
    for(var i=0;i<this.getMax();i++){
        this.setLoglistAt(i, new MathTOUCH.KW("","nul",MathTOUCH.XTML,-1,0));
    }
    this.setNum(0);
};
	
MathTOUCH.logTable.prototype.inputWord = function(keyword){
    var ans="";
    var c;
    for(var i=0;i<keyword.length;i++){
        c=keyword.charAt(i);
        if(c!=',') ans=ans+c;
    }
    return ans;
};
	
MathTOUCH.logTable.prototype.addTop = function(inkey,xtml){
    if(this.isMatchLog2(this.inputWord(inkey),xtml)){
        if(this.getLoglistAt(this.getNum()).score>0){
            var sc=this.getLoglistAt(this.getNum()).score;
            for(var i=this.getNum();i>0;i--) this.setLoglistAt(i, this.getLoglistAt(i-1));
            this.setLoglistAt(0, new MathTOUCH.KW(inkey,xtml,MathTOUCH.XTML,-1,sc+1));
        }
        else this.getLoglistAt(this.getNum()).score=this.getLoglistAt(this.getNum()).score+1;
    }
    else{
        for(var i=this.getMax()-1;i>0;i--) this.setLoglistAt(i, this.getLoglistAt(i-1));
        this.setLoglistAt(0, new MathTOUCH.KW(inkey,xtml,MathTOUCH.XTML,-1,0));
    }
};

MathTOUCH.logTable.prototype.logMatch = function(str,index){
    var ans=this.logMatch1(str);
    if(ans!=null){
        for(var i=0;i<index;i++){
            ans=this.nextMatch(str);
            if(ans==null) return(null);
        }
        return(ans);
    }
    else return(null);
};

MathTOUCH.logTable.prototype.logMatch1 = function(str){
    if(this.isMatchLog(str)){
        return(this.getLoglistAt(this.getNum()));
    }
    else return(null);
};
	
MathTOUCH.logTable.prototype.isMatchLog = function(str){
    if(str == null) return(false);
    var _sl=str.length;
    for(var _n=_sl; _n>=3; _n--){
        var _st=str.substring(0,_n);
        for(var _i=0;_i<this.getMax();_i++){
            if(_st == this.getLoglistAt(_i).getInputWord()){
                this.setNum(_i);
                return(true);
            }
        }
    }
    return(false);
};
    
MathTOUCH.logTable.prototype.logMatchOff = function(str,offstr){
    if(this.isMatchLogOff(str,offstr)){
        return(this.getLoglistAt(this.getNum()));
    }
    else return(null);
};
	
MathTOUCH.logTable.prototype.isMatchLogOff = function(str,offstr){
    if(str==null) return(false);
    var sl=str.length;
    for(var n=sl;n>=3;n--){
        var st=str.substring(0,n);
        for(var i=0;i<this.getMax();i++){
            if(st==this.getLoglistAt(i).getInputWord() && st!=offstr){
                this.setNum(i);
                return(true);
            }
        }
    }
    return(false);
};
	
MathTOUCH.logTable.prototype.isMatchLog2 = function(str,xtml){
    for(var i=0;i<this.getMax();i++){
        if(str==this.getLoglistAt(i).getInputWord() && xtml==this.getLoglistAt(i).theWord){
            this.setNum(i);
            return(true);
        }
    }
    return(false);
};
	
MathTOUCH.logTable.prototype.isNextLog = function(str){
    if(this.getNum()+1>=this.getMax()) return false;
    for(var i=this.getNum()+1;i<this.getMax();i++){
        if(str==this.getLoglistAt(i).getInputWord()){
            this.setNum(i);
            return(true);
        }
    }
    return(false);
};

MathTOUCH.logTable.prototype.nextMatch = function(str){
    if(this.isNextLog(str)){
        return(this.getLoglistAt(this.getNum()));
    }
    else return(null);
};
	
MathTOUCH.logTable.prototype.isPreviousLog = function(str){
    if(this.getNum()-1>=this.getMax()||this.getNum()-1<0) return false;
    for(var i=this.getNum()-1;i>=0;i--){
        if(str==this.getLoglistAt(i).getInputWord()){
            this.setNum(i);
            return(true);
        }
    }
    return(false);
};

MathTOUCH.logTable.prototype.previousMatch = function(str){
    if(this.isPreviousLog(str)){
        return(this.getLoglistAt(this.getNum()));
    }
    else return(null);
};
    
MathTOUCH.logTable.prototype.shiftTo = function(from,to){
    if(from==to) return;
    var tmp=new MathTOUCH.KW(this.getLoglistAt(from).keyword,this.getLoglistAt(from).theWord,this.getLoglistAt(from).type,this.getLoglistAt(from).key,this.getLoglistAt(from).score);
    for(var i=from;i>to;i--) this.setLoglistAt(i, this.getLoglistAt(i-1));
    this.setLoglistAt(to, new MathTOUCH.KW(tmp.keyword,tmp.theWord,tmp.type,tmp.key,tmp.score));
};
    
MathTOUCH.logTable.prototype.searchBack = function(from){
    for(var i=from;i>0;i--) if(this.getLoglistAt(from).score<=this.getLoglistAt(i-1).score) return i;
    return 0;
};
    
MathTOUCH.logTable.prototype.sortByScore = function(){
    for(var i=1;i<this.getLoglistLength();i++) this.shiftTo(i,this.searchBack(i));
};
	

MathTOUCH.logTable.prototype.makeLogOfSubtree = function(ex){
    if(ex==null) return;
    if(ex.cnum==0) return;
    if(ex.inputWord==null) return;
    var totalinput=ex.getKeyWords();
    if(totalinput.length>4) this.addTop(totalinput,xtreeml.XtreeML(ex));
};

MathTOUCH.logTable.prototype.writeLogXML=function(){
        var input="";
        var j=0;
		var str="<?xml version=\"1.0\" encoding=\"UTF-8\" ?>";
        str=str+"\n";
        str=str+"<info>";
        str=str+"\n";
        str=str+"<Log>";
        str=str+"\n";
		for(var i=0;i<this.getLoglistLength();i++){
            str=str+"<LData>";
            input=this.getLoglistAt(i).keyword;
            while((j=input.indexOf("\u21E9"))>=0){
				input=input.substring(0,j)+"@@b"+input.substring(j+1);
			}
            while((j=input.indexOf("\u22A1"))>=0){
				input=input.substring(0,j)+"@@e"+input.substring(j+1);
			}
			while((j=input.indexOf("\u23cE"))>=0){
				input=input.substring(0,j)+"@@r"+input.substring(j+1);
			}
			while((j=input.indexOf("\u2326"))>=0){
				input=input.substring(0,j)+"@@t"+input.substring(j+1);
			}
			while((j=input.indexOf("\u201A"))>=0){
				input=input.substring(0,j)+"@@c"+input.substring(j+1);
			}
			str=str+input+"\t"+this.getLoglistAt(i).theWord+"\t"+this.getLoglistAt(i).score;
            str=str+"</LData>";
            str=str+"\n";
        }
        str=str+"</Log>";
        str=str+"\n";
        str=str+"</info>";
        str=str+"\n";
        this.setLogLocalStorage(this.logkey, str);
};
