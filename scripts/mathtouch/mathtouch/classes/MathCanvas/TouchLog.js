MathTOUCH.TouchLog = function(){
  	var _knum = 0;
	var _bsnum = 0;
	var _spnum = 0;
	var _retnum = 0;
	var _shiftretnum = 0;
    var _leftnum = 0;
	var _rightnum = 0;
	var _inputtime = 0;
	var _loghitnum = 0;
	var _dichitnum = 0;
	var _ktrenum = 0;
	var _otrenum = 0;
    var _clznum = 0;
	var _starttime = new Date();
	var _endtime = new Date();
    var _inputnum = 0;
    var _input = null;
    
    console.log(_starttime);
    
    this.setKnum = function(knum){
        _knum = knum;
    };
    
    this.getKnum = function(){
        return _knum;
    };
    
    this.setBsnum = function(bsnum){
        _bsnum = bsnum;
    };
    
    this.getBsnum = function(){
        return _bsnum;
    };
    
    this.setSpnum = function(spnum){
        _spnum = spnum;
    };
    
    this.getSpnum = function(){
        return _spnum;
    };
    
    this.setRetnum = function(retnum){
        _retnum = retnum;
    };
    
    this.getRetnum = function(){
        return _retnum;
    };
    
    this.setShiftretnum = function(shiftretnum){
        _shiftretnum = shiftretnum;
    };
    
    this.getShiftretnum = function(){
        return _shiftretnum;
    };
    
    this.setLeftnum = function(leftnum){
        _leftnum = leftnum;
    };
    
    this.getLeftnum = function(){
        return _leftnum;
    };
    
    this.setRightnum = function(rightnum){
        _rightnum = rightnum;
    };
    
    this.getRightnum = function(){
        return _rightnum;
    };
    
    this.setInputtime = function(inputtime){
        _inputtime = inputtime;
    };
    
    this.getInputtime = function(){
        return _inputtime;
    };
    
    this.setLoghitnum = function(loghitnum){
        _loghitnum = loghitnum;
    };
    
    this.getLoghitnum = function(){
        return _loghitnum;
    };
    
    this.setDichitnum = function(dichitnum){
        _dichitnum = dichitnum;
    };
    
    this.getDichitnum = function(){
        return _dichitnum;
    };
    
    this.setKtrenum = function(ktrenum){
        _ktrenum = ktrenum;
    };
    
    this.getKtrenum = function(){
        return _ktrenum;
    };
    
    this.setOtrenum = function(otrenum){
        _otrenum = otrenum;
    };
    
    this.getOtrenum = function(){
        return _otrenum;
    };
    
    this.setClznum = function(clznum){
        _clznum = clznum;
    };
    
    this.getClznum = function(){
        return _clznum;
    };
    
    this.setStarttime = function(starttime){
        _starttime = starttime;
    };
    
    this.getStarttime = function(){
        return _starttime;
    };
    
    this.setEndtime = function(endtime){
        _endtime = endtime;
    };
    
    this.getEndtime = function(){
        return _endtime;
    };
    
    
    this.setInputnum = function(inputnum){
        _inputnum = inputnum;
    };
    
    this.getInputnum = function(){
        return _inputnum;
    };
    
    this.setInput = function(input){
        _input = input;
    };
    
    this.getInput = function(){
        return _input;
    };
};

MathTOUCH.TouchLog.prototype.allclear = function(){
        this.setKnum(0);
        this.setBsnum(0);
        this.setClznum(0);
		this.setSpnum(0);
		this.setRetnum(0);
		this.setShiftretnum(0);
		this.setLeftnum(0);
		this.setRightnum(0);
		this.setLoghitnum(0);
		this.setDichitnum(0);
		this.setKtrenum(0);
		this.setOtrenum(0);
        this.setInputnum(0);
        this.setInput("");
		this.setStarttime(new Date());
};

MathTOUCH.TouchLog.prototype.keyin = function(){
    this.setKnum(this.getKnum()+1);
};

MathTOUCH.TouchLog.prototype.keymainus  = function(){
    this.setKnum(this.getKnum()-1);
};

MathTOUCH.TouchLog.prototype.bsin = function(){
    this.setBsnum(this.getBsnum()+1);
};

MathTOUCH.TouchLog.prototype.clzin = function(){
    this.setClznum(this.getClznum()+1);
};

MathTOUCH.TouchLog.prototype.spin = function(){
    this.setSpnum(this.getSpnum()+1);
};

MathTOUCH.TouchLog.prototype.retin = function(){
    this.setRetnum(this.getRetnum()+1);
};

MathTOUCH.TouchLog.prototype.shiftretin = function(){
    this.setShiftretnum(this.getShiftretnum()+1);
};

MathTOUCH.TouchLog.prototype.leftin = function(){
    this.setLeftnum(this.getLeftnum()+1);
};

MathTOUCH.TouchLog.prototype.rightin = function(){
    this.setRightnum(this.getRightnum()+1);
};

MathTOUCH.TouchLog.prototype.loghit = function(){
    this.setLoghitnum(this.getLoghitnum()+1);
};

MathTOUCH.TouchLog.prototype.dichit = function(){
    this.setDichitnum(this.getDichitnum()+1);
};

MathTOUCH.TouchLog.prototype.keyTableChanged = function(){
    this.setKtrenum(this.getKtrenum()+1);
};

MathTOUCH.TouchLog.prototype.opeTableChanged = function(){
    this.setOtrenum(this.getOtrenum()+1);
};

MathTOUCH.TouchLog.prototype.getMTTLog = function(inputKeywords,xml){
    var str;
    this.setEndtime(new Date());
    this.setInputtime((this.getEndtime()-this.getStarttime())/1000);
    console.log("終了時間:"+this.getEndtime()+"||開始時間:"+this.getStarttime()+"||入力時間:"+this.getInputtime());
    this.setInputnum(this.inputWord(inputKeywords).length);
    this.setInput(inputKeywords);
    var j;
    while((j=this.getInput().indexOf("\u21E9"))>=0){
        this.setInput(this.getInput().substring(0,j)+"@@b"+this.getInput().substring(j+1));
    }
    while((j=this.getInput().indexOf("\u22A1"))>=0){
        this.setInput(input.substring(0,j)+"@@e"+this.getInput().substring(j+1));
    }
    while((j=this.getInput().indexOf("\u23cE"))>=0){
        this.setInput(input.substring(0,j)+"@@r"+this.getInput().substring(j+1));
    }
    while((j=this.getInput().indexOf("\u27B1"))>=0){
        this.setInput(input.substring(0,j)+"@@t"+this.getInput().substring(j+1));
    }
    while((j=this.getInput().indexOf("\u201A"))>=0){
        this.setInput(this.getInput().substring(0,j)+"@@c"+this.getInput().substring(j+1));
    }
    str=""+this.getEndtime()+","+this.getInputtime()+","+ this.getInputnum()+"," + this.getKnum()+","+this.getBsnum()+","+this.getClznum()+","+this.getSpnum()+","+this.getRetnum()
        +","+this.getShiftretnum()+","+this.getloghitnum+","+this.getDichitnum()
        +","+this.getKtrenum()+","+this.getOtrenum()+",\""+this.getInput()+"\""+",\""+xml+"\"";
        console.log("入力文字数:"+this.getInputnum()+"|タイピング総数:"+this.getKnum()+"|BS数:"+this.getBsnum()+"|CTRL_Z数:"+this.getClznum()+"|Space数:"+this.getSpnum()+"|Return数:"+this.getRetnum()+"|shiftret:"+this.getShiftretnum()+"|履歴ログのヒット数:"+this.getLoghitnum()+"|辞書ログのヒット数:"+this.getDichitnum()+"|keyTableorder:"+this.getKtrenum()+"|opeTable:"+this.getOtrenum()+"|入力文字:"+this.getInput()+"|XML形式:"+xml);
    return str;
};

MathTOUCH.TouchLog.prototype.inputWord = function(keyword){
    var ans="";
    var c;
    for(var i=0;i<keyword.length;i++){
        c=keyword.charAt(i);
        if(c!=',') ans=ans+c;
    }
    return ans;
};
