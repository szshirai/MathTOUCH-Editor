var EXTML = new MathTOUCH.XtreeML2EXtree();
    
MathTOUCH.AlgebraicRules = function(ex){
    var _fRkey,_fRorder,_fRstate,_fRbaseColor,_fRopeColor,_fRbackColor;
    var _fRinputWord;
    this.error = function (i){return(Math.floor(i/1000)>0);}
    this.fType = function (i){return(i>=3 && i<=28);}
    this.tType = function (i){return(i==29);}
    this.tUnder = function (i){return(i<30);}
    this.fLType = function (i){return(Math.floor(i/10)==3);}
    this.tLType = function (i){return(Math.floor(i/10)==4);}
    this.tCType = function (i){return(Math.floor(i/10)==7);}
    this.fRType = function (i){return(Math.floor(i/10)==10);}
    this.tRType = function (i){return(i==110);}
    this.tRLType = function (i){return(Math.floor(i/10)==12);}
    this.tCRType = function (i){return(Math.floor(i/10)==13);}
    this.tAllUnder = function (i){return(Math.floor(i/100)<2);}
    this.polType = function (i){return(Math.floor(i/10)==20);}
    this.polUnder = function (i){return(i<250);}
    this.colType = function (i){return(i==250);}
    this.colUnder = function (i){return(i<300);}
    this.cmpType = function (i){return(Math.floor(i/10)==30);}
    this.cmpUnder = function (i){return(Math.floor(i/100)<=3);}
    this.relType = function (i){return(Math.floor(i/100)==4);}
    
    
    this.getfRkey = function(){
        return _fRkey;
    }
    
    this.setfRkey = function(v){
        _fRkey=v;
    }
    
    this.getfRorder = function(){
        return _fRorder;
    }
    
    this.setfRorder = function(v){
        _fRorder=v;
    }
    
    this.getfRstate = function(){
        return _fRstate;
    }
    
    this.setfRstate = function(v){
        _fRstate=v;
    }
    
    this.getfRbaseColor = function(){
        return _fRbaseColor;
    }
    
    this.setfRbaseColor = function(v){
        _fRbaseColor=v;
    }
    
    this.getfRopeColor = function(){
        return _fRopeColor;
    }
    
    this.setfRopeColor = function(v){
        _fRopeColor=v;
    }
    
    this.getfRbackColor = function(){
        return _fRbackColor;
    }
    
    this.setfRbackColor = function(v){
        _fRbackColor=v;
    }
    
    this.getfRinputWord = function(){
        return _fRinputWord;
    }
    
    this.setfRinputWord = function(v){
        _fRinputWord=v;
    }

    
};

MathTOUCH.AlgebraicRules.prototype.reform = function(ex){
    var ans;
    var arg1,arg2,arg3;
    var algtype;
    if(ex.cnum==0){
        if(ex.type==MathTOUCH.EMP){
            ans=new EmptyEXT(ex.val);
            ans.state=ex.state;
        }
        else if(ex.type==MathTOUCH.XTML&&(ex.state==2||ex.state==6)){
            ans=this.reform(EXTML.parse(ex.inputWord,ex.val));
            ans.setAllComplete();
            ans.state=ex.state;
        }
        else{
            ans=new EXtree0(ex.state,ex.type,ex.val,ex.inputWord);
            ans.baseColor=ex.baseColor;
        }
        return(ans);
    }
    else if(ex.rownum*ex.colnum>0){
        var elem=new Array();
        for(var i=0;i<ex.cnum;i++){
            if(ex.ch[i]==null) elem[i]=null;
            else{
                elem[i]=this.reform(ex.ch[i]);
                if(elem[i]==null) elem[i]=ex.ch[i].copy();
            }
        }
        ans=new EXtreeMat(ex.state,ex.rownum,ex.val,elem,"MAT");
        ans.baseColor=ex.baseColor;
        ans.opeColor=ex.opeColor;
        ans.backColor=ex.backColor;
        ans.MatColum=ex.MatColum;
        ans.inputWord=ex.inputWord;
        return(ans);
    }
    else if(ex.cnum==1){
        var  isEMPTY=false;
        arg1=this.reform(ex.ch[0]);
        if(arg1==null) arg1=ex.ch[0];
        ans=new EXtree1(ex.state,ex.key,ex.order,arg1,ex.inputWord);
        ans.baseColor=ex.baseColor;
        ans.opeColor=ex.opeColor;
        ans.backColor=ex.backColor;
        algtype=this.theAlgebraicType(ans);
        if(algtype<0){isEMPTY=true;algtype= -algtype;}
        if(Math.floor(algtype/1000)>0 ){
            algtype=algtype%1000;
            switch(algtype){
            case 5:
            case 31:
                var arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
                if(arg1type==11){
                    var arg10=this.theAlgebraicType(arg1.ch[0]);if(arg10<0){arg10= -arg10;}
                    if(Math.floor(arg10/10)==0){
                        var temp=new EXtree1(ex.state,ex.key,ex.order,arg1.ch[0],ex.inputWord);
                        temp.baseColor=ex.baseColor;
                        temp.opeColor=ex.opeColor;
                        temp.backColor=ex.backColor;
                        ans=new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
                    }
                    else ans=null;
                }
                else if(arg1type==22||arg1type==23){
                    var arg10=this.theAlgebraicType(arg1.ch[0]);if(arg10<0){arg10= -arg10;}
                    if(Math.floor(arg10/10)==0){
                        var temp=new EXtree1(ex.state,ex.key,ex.order,arg1.ch[0],ex.inputWord);
                        temp.baseColor=ex.baseColor;
                        temp.opeColor=ex.opeColor;
                        temp.backColor=ex.backColor;
                        ans=new EXtree2(arg1.state,arg1.key,arg1.order,temp,arg1.ch[1],arg1.inputWord);
                    }
                    else ans=null;
                }
                else if(this.tType(arg1type)||arg1type==41||arg1type==71||arg1type==72||(Math.floor(arg1type/100)>1&&arg1.type==MathTOUCH.OP2C)){
                    var temp=this.reform(new EXtree1(ex.state,ex.key,ex.order,arg1.ch[0],ex.inputWord));
                    if(temp==null) ans=null;
                    else{
                        temp.baseColor=ex.baseColor;
                        temp.opeColor=ex.opeColor;
                        temp.backColor=ex.backColor;
                        ans=new EXtree2(arg1.state,arg1.key,arg1.order,temp,arg1.ch[1],arg1.inputWord);
                    }
                }
                else ans=null;
                break;
            case 11:
                arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
                if(this.tType(arg1type)||this.tRType(arg1type)){
                    var temp=new EXtree1(ex.state,ex.key,ex.order,arg1.ch[1],ex.inputWord);
                    temp.baseColor=ex.baseColor;
                    temp.opeColor=ex.opeColor;
                    temp.backColor=ex.backColor;
                    ans=new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord);
                }
                else if(arg1type==31||arg1type==101){
                    var temp=new EXtree1(ex.state,ex.key,ex.order,arg1.ch[0],ex.inputWord);
                    temp.baseColor=ex.baseColor;
                    temp.opeColor=ex.opeColor;
                    temp.backColor=ex.backColor;
                    ans=new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
                }
                else if(arg1type==401){ans=null;}
                else if(arg1.type==MathTOUCH.OP1P){
                    var temp=this.reform(new EXtree1(ex.state,ex.key,ex.order,arg1.ch[0],ex.inputWord));
                    if(temp==null) ans=null;
                    else{
                        temp.baseColor=ex.baseColor;
                        temp.opeColor=ex.opeColor;
                        temp.backColor=ex.backColor;
                        ans=new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
                    }
                }
                else if(arg1.type==MathTOUCH.OP2P||arg1.type==MathTOUCH.OP2C){
                    var temp=this.reform(new EXtree1(ex.state,ex.key,ex.order,arg1.ch[1],ex.inputWord));
                    if(temp==null) ans=null;
                    else{
                        temp.baseColor=ex.baseColor;
                        temp.opeColor=ex.opeColor;
                        temp.backColor=ex.backColor;
                        ans=new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord);
                    }
                }
                else if(arg1.type==MathTOUCH.OP3P){
                    var temp=this.reform(new EXtree1(ex.state,ex.key,ex.order,arg1.ch[2],ex.inputWord));
                    if(temp==null) ans=null;
                    else{
                        temp.baseColor=ex.baseColor;
                        temp.opeColor=ex.opeColor;
                        temp.backColor=ex.backColor;
                        ans=new EXtree3(arg1.state,arg1.key,arg1.order,arg1.ch[0],arg1.ch[1],temp,arg1.inputWord);
                    }
                }
                else ans=null;
                break;
            case 13:
            case 32:
                arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
                if(arg1type>=401&&arg1type<=404) ans=null;
                else if(!this.tAllUnder(arg1type)){
                    var temp=this.reform(new EXtree1(ex.state,ex.key,ex.order,arg1.ch[0],ex.inputWord));
                    if(temp==null) ans=null;
                    else{
                        temp.baseColor=ex.baseColor;
                        temp.opeColor=ex.opeColor;
                        temp.backColor=ex.backColor;
                        ans=new EXtree2(arg1.state,arg1.key,arg1.order,temp,arg1.ch[1],arg1.inputWord);
                    }
                }
                else ans=null;
                break;
            case 37:
                    arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
                    if(Math.floor(arg1type/1000)>0) ans=null;
                    break;
            case 100:
                arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
                if(arg1.type==MathTOUCH.OP2C){
                    var temp=this.reform(new EXtree1(ex.state,ex.key,ex.order,arg1.ch[0],ex.inputWord));
                    if(temp==null) ans=null;
                    else{
                        temp.baseColor=ex.baseColor;
                        temp.opeColor=ex.opeColor;
                        temp.backColor=ex.backColor;
                        ans=new EXtree2(arg1.state,arg1.key,arg1.order,temp,arg1.ch[1],arg1.inputWord);
                    }
                }
                else{ans=null;}
                break;
            case 104:
                    arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
                    if(arg1type==37){
                        var temp=this.reform(new EXtree1(ex.state,ex.key,ex.order,arg1.ch[0],ex.inputWord));
                        if(temp==null) ans=null;
                        else{
                            temp.baseColor=ex.baseColor;
                            temp.opeColor=ex.opeColor;
                            temp.backColor=ex.backColor;
                            ans=this.reform(new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord));
                        }
                    }
                    else if(this.tLType(arg1type)&&this.theAlgebraicType(arg1.ch[1])==37){
                        var temp=this.reform(new EXtree1(ex.state,ex.key,ex.order,arg1.ch[1],ex.inputWord));
                        if(temp==null) ans=null;
                        else{
                            temp.baseColor=ex.baseColor;
                            temp.opeColor=ex.opeColor;
                            temp.backColor=ex.backColor;
                            ans=new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord);
                        }
                    }
                    else{
                            var blpp=this.BLpoint(arg1);
                            if(blpp!=null){
                                var tmp0=new EXtree1(ans.state,ans.key,ans.order,blpp.ch[0].copy(),ans.inputWord);
                                var tmp1=this.reform(tmp0);
                                if(tmp1!=null){
                                    blpp.ch[0].change(tmp1);
                                    ans=this.reform(arg1);
                                }
                            }
                            else ans=null;
                    }
                    break;
            case 403:
                    ans=ex.copy();
                    if(!ans.pairBra()) ans=null;
                    break;
            default:return(null);
            }
        }
        return(ans);
    }
    else if(ex.cnum==2){
			var  isEMPTY=false;
            arg1=this.reform(ex.ch[0]);
			if(arg1==null) arg1=ex.ch[0];
			arg2=this.reform(ex.ch[1]);
			if(arg2==null) arg2=ex.ch[1];
			ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
			ans.baseColor=ex.baseColor;
			ans.opeColor=ex.opeColor;
			ans.backColor=ex.backColor;
			algtype=this.theAlgebraicType(ans);if(algtype<=0){isEMPTY=true;algtype= -algtype;}
			if(Math.floor(algtype/1000)>0 || isEMPTY){
				var err=Math.floor(algtype/1000);
				algtype=algtype%1000;
                var arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
                var arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
                if(arg1type==37){
                    var tmp=this.reform(new EXtree2(ans.state,ans.key,ans.order,arg1.ch[0].copy(),arg2,ans.inputWord));
                    if(tmp!=null){
                        ans=new EXtree1(arg1.state,arg1.key,arg1.order,tmp,arg1.inputWord);
                        return ans;
                    }
                }
                else if(arg2type==104){
                    var blpp=this.BLpoint(arg1);
                    if(blpp!=null){
                        var tmp0=new EXtree2(ans.state,ans.key,ans.order,blpp.ch[0].copy(),arg2,ans.inputWord);
                        var tmp1=this.reform(tmp0);
                        if(tmp1!=null){blpp.ch[0].change(tmp1);
                            ans=this.reform(arg1);
                            if(ans!=null) return ans;
                        }
                    }
                    var tmp=this.reform(new EXtree2(ans.state,ans.key,ans.order,arg1,arg2.ch[0].copy(),ans.inputWord));
                    if(tmp!=null){
                        ans=new EXtree1(arg2.state,arg2.key,arg2.order,tmp,arg2.inputWord);
                        return ans;
                    }
                }
                else if(ans.type==MathTOUCH.OP2C){
                    var blpp=this.BLpoint(arg1);
                    if(blpp!=null){
                        var tmp0=new EXtree2(ans.state,ans.key,ans.order,blpp.ch[0].copy(),arg2,ans.inputWord);
                        var tmp=this.reform(tmp0);
                        if(tmp!=null){blpp.ch[0].change(tmp);
                            ans=this.reform(arg1);
                            if(ans!=null) return ans;
                        }
                    }
                }
				switch(algtype){
                    case 21:
                        if(arg2type>=300) ans=null;
                        else if(arg1type==0){
                            var ord=OTB.getFirstOrder(ex.key,MathTOUCH.OP1P);
                            ans=new EXtree1(ex.state,ex.key,ord,arg2,ex.inputWord);
                        }
                        else if(arg1type==29||arg1type==110||arg1type==201){
                            if(this.theAlgebraicType(arg1.ch[1])<=5){
                                var tmp=new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1].copy(),arg2,ex.inputWord);
                                arg1.ch[1].change(tmp);
                                ans=arg1;
                            }
                            else ans=null;
                        }
                        else ans=null;
                        break;
					case 22:
					case 23:
						if(arg2type==0){
                            ans=arg1;
                        }
                        else if(Math.floor(arg2type/10)>20){
                            if(arg2type==502){
                                var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                                if(temp==null){
                                    ans=null;
                                }
                                else{
                                    temp.baseColor=ex.baseColor;
                                    temp.opeColor=ex.opeColor;
                                    temp.backColor=ex.backColor;
                                    ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
                                }
                            }
                            else ans=null;
                        }
						else if(this.tType(arg1type)||this.tRType(arg1type)){
							ans=new EXtree2(arg1.state,MathTOUCH.SP,0,arg1.ch[0],new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord)," ");
						}
						else if(this.fLType(arg1type)){
							if(arg1type==31){
								ans=new EXtree1(arg1.state,arg1.key,arg1.order,new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord),arg1.inputWord);
							}
							else{
								var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[arg1.cnum-1],arg2,ex.inputWord));
								if(temp==null){ 
                                    if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                    else ans=null;
                                }
								else{
									temp.baseColor=ex.baseColor;
									temp.opeColor=ex.opeColor;
									temp.backColor=ex.backColor;
									if(arg1type==32) ans=new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
									else if(arg1type>=33&&arg1type<=35) ans=new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord);
									else if(arg1type==36) ans=new EXtree3(arg1.state,arg1.key,arg1.order,arg1.ch[0],arg1.ch[1],temp,arg1.inputWord);
									else ans=null;
								}
							}
						}
						else if(this.tLType(arg1type)||this.tCType(arg1type)){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord);
							}
						}
						else if(arg1type==101){
							ans=new EXtree1(arg1.state,arg1.key,arg1.order,new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord),arg1.inputWord);
						}
						else if(arg1type==102||arg1type==121){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree2(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
							}
						}
						else if(this.tRLType(arg1type)||this.tCRType(arg1type)||this.polType(arg1type)||this.cmpType(arg1type)||(this.relType(arg1type)&&arg1.type==MathTOUCH.OP2C)||arg1type==502){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord);
							}
						}
                        else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
						else {
							ans=null;
						}
						break;
				case 26:
                        if(arg2type==0){
                            ans=arg1;
                        }
                        else if(Math.floor(arg2type/10)>20){
                            if(arg2type==502){
                                var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                                if(temp==null){
                                    ans=null;
                                }
                                else{
                                    temp.baseColor=ex.baseColor;
                                    temp.opeColor=ex.opeColor;
                                    temp.backColor=ex.backColor;
                                    ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
                                }
                            }
                            else ans=null;
                        }
                        else if(arg1type==13||this.fRType(arg1type)||arg1type==121){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0].copy(),arg2,ex.inputWord));
                            if(temp==null) ans=null;
                            else{
                                temp.baseColor=ex.baseColor;
                                temp.opeColor=ex.opeColor;
                                temp.backColor=ex.backColor;
                                ans=new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
                            }

                        }
                        else if(this.fLType(arg1type)){
                            if(arg1type==31) ans=null;
                            else if(arg1type==32){
                                var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0].copy(),arg2,ex.inputWord));
                                if(temp==null) ans=null;
                                else{
                                    temp.baseColor=ex.baseColor;
                                    temp.opeColor=ex.opeColor;
                                    temp.backColor=ex.backColor;
                                    ans=new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
                                }
                            }
                            else if(arg1type==33||arg1type==34||arg1type==35){
                                var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1].copy(),arg2,ex.inputWord));
                                if(temp==null) ans=null;
                                else{
                                    temp.baseColor=ex.baseColor;
                                    temp.opeColor=ex.opeColor;
                                    temp.backColor=ex.backColor;
                                    ans=new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0].copy(),temp,arg1.inputWord);
                                }
                            }
                            else if(arg1type==36){
                                var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[2].copy(),arg2,ex.inputWord));
                                if(temp==null) ans=null;
                                else{
                                    temp.baseColor=ex.baseColor;
                                    temp.opeColor=ex.opeColor;
                                    temp.backColor=ex.backColor;
                                    ans=new EXtree3(arg1.state,arg1.key,arg1.order,arg1.ch[0].copy(),arg1.ch[1].copy(),temp,arg1.inputWord);
                                }
                            }
                            else ans=null;
                        }
                        else if(this.tType(arg1type)||this.tRType(arg1type)||this.tLType(arg1type)||this.tCType(arg1type)||this.tRLType(arg1type)||this.tCRType(arg1type)){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1].copy(),arg2,ex.inputWord));
                            if(temp==null){
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
                            else{
                                temp.baseColor=ex.baseColor;
                                temp.opeColor=ex.opeColor;
                                temp.backColor=ex.backColor;
                                ans=new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0].copy(),temp,arg1.inputWord);
                            }
                        }
                        else if(this.polType(arg1type)||this.cmpType(arg1type)||(this.relType(arg1type)&&arg1.type==MathTOUCH.OP2C)||arg1type==502){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1].copy(),arg2,ex.inputWord));
                            if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
                            else{
                                temp.baseColor=ex.baseColor;
                                temp.opeColor=ex.opeColor;
                                temp.backColor=ex.backColor;
                                ans=new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0].copy(),temp,arg1.inputWord);
                            }
                        }
                        else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                        else {
                            ans=null;
                        }
						break;
				case 24:
				case 25:
                        arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
						arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
                    if(err%2==0){
						if(arg1type==0){
                            ans=arg2;
                        }
                        else if(arg2type==14){
                            var temp=arg2.ch[0].copy();
                            ans=new EXtree2(arg2.state,arg2.key,OTB.getFirstOrder(arg2.key,MathTOUCH.OP2C),arg1.copy(),temp,arg2.inputWord);
                        }
                        else if(this.tType(arg2type)||this.tLType(arg2type)||this.tCType(arg2type)){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
							}
						}
						else if(arg2type>=401&&arg2type<=404) ans=null;
						else if(!this.tAllUnder(arg2type)){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
							}
						}
                        else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
						else ans=null;
					}
                    else if(arg1type==0){
                        ans=arg2;
                    }
                    else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
					else ans=null;
					break;
				case 27:
					arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
					arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
                        if(Math.floor(arg1type/10)==0 && arg1type>=3){
                            if(arg2type==11){
                                var arg20=this.theAlgebraicType(arg2.ch[0]);if(arg20<0){arg20= -arg20;}
                                if(Math.floor(arg20/10)==0){
                                    var temp=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord);
                                    temp.baseColor=ex.baseColor;
                                    temp.opeColor=ex.opeColor;
                                    temp.backColor=ex.backColor;
                                    ans=new EXtree1(arg2.state,arg2.key,arg2.order,temp,arg2.inputWord);
                                }
                                else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
                            else if(arg2type==22||arg2type==23){
                                var arg20=this.theAlgebraicType(arg2.ch[0]);if(arg20<0){arg20= -arg20;}
                                if(Math.floor(arg20/10)==0){
                                    var temp=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord);
                                    temp.baseColor=ex.baseColor;
                                    temp.opeColor=ex.opeColor;
                                    temp.backColor=ex.backColor;
                                    ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
                                }
                                else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
                            else if(this.tType(arg2type)||this.tLType(arg2type)||this.tCType(arg2type)||(Math.floor(arg2type/100)>1&&arg2.type==MathTOUCH.OP2C)){
                                var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                                if(temp==null){ 
                                    if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                    else ans=null;
                                }
                                else{
                                    temp.baseColor=ex.baseColor;
                                    temp.opeColor=ex.opeColor;
                                    temp.backColor=ex.backColor;
                                    ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
                                }
                            }
                            else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
                        else if(arg1type==24||arg1type==25){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord));
                            if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
                            else{
                                temp.baseColor=ex.baseColor;
                                temp.opeColor=ex.opeColor;
                                temp.backColor=ex.backColor;
                                ans=this.reform(new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord));
                            }
                        }
                        else if(arg1type<30||arg1type==401||arg1type==104){
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
                        else if(arg1.type==MathTOUCH.OP1P){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=this.reform(new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord));
							}
                        }
                        else if(arg1.type==MathTOUCH.OP2P||arg1.type==MathTOUCH.OP2C){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=this.reform(new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord));
							}
                        }
                        else if(arg1.type==MathTOUCH.OP3P){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[2],arg2,ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=this.reform(new EXtree3(arg1.state,arg1.key,arg1.order,arg1.ch[0],arg1.ch[1],temp,arg1.inputWord));
							}
                        }
                        else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                        else ans=null;
					break;
                case 28:
					arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
					arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
                    if(arg1type>=300||arg2type>=300) ans=null;
                    break;
				case 33:
				case 34:
				case 35:
                        arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
                        if(err%2==0){
                            arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
                            if(arg2type>=401&&arg2type<=404) ans=null;
                            else if(!this.tAllUnder(arg2type)){
                                var temp,temp2;
                                temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                                if(temp==null){
                                    if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                    else ans=null;
                                }
                                else{
                                    temp.baseColor=ex.baseColor;
                                    temp.opeColor=ex.opeColor;
                                    temp.backColor=ex.backColor;
                                    ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
                                }
                                if(ans==null){
                                    temp2=arg2.copy();
                                    temp=temp2.cutFirstSpacedTerm();
                                    if(temp!=null){
                                        temp=this.reform(new EXtree2(0,MathTOUCH.SP,0,arg1.copy(),temp," "));
                                        if(temp!=null){
                                            ans=new EXtree2(ex.state,ex.key,ex.order,temp,temp2,ex.inputWord);
                                        }
                                    }
                                }
                            }
                            else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
                        else if(arg1type==0){
                            ans=null;
                        }
                        else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                        else ans=null;
                        break;
				case 29:
				case 110:
                        var isEMPTY1=false;
                        var isEMPTY2=false;
                        arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;isEMPTY1=true;}
                        arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;isEMPTY2=true;}
                        if(arg1type==0){ans=arg2;}
                        else if(arg1type==101&&isEMPTY1){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
                            if(temp==null){
                                ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            }
                            else{
                                temp.baseColor=ex.baseColor;
                                temp.opeColor=ex.opeColor;
                                temp.backColor=ex.backColor;
                                ans=this.reform(new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord));
                            }
                        }
                        else if(arg2type==0){ans=arg1;}
                        else if(arg2type==1){
                            if(arg1type==1){
                                ans=new NumberEXT(ans.state, arg1.val+arg2.val);
                            }
                            else if(arg1type==2){
                                ans=new EXtree2(ans.state,arg1.key,arg1.order
                                               ,arg1.ch[0],new NumberEXT(arg2.state, arg1.ch[1].val+arg2.val)
                                               ,arg1.inputWord);
                                ans.baseColor=ex.baseColor;
                                ans.opeColor=ex.opeColor;
                                ans.backColor=ex.backColor;
                            }
                            else if(arg1type==101){
                                if(arg1.ch[0].type==MathTOUCH.NUM){
                                    ans=new EXtree1(ans.state,arg1.key,arg1.order
                                                   ,new NumberEXT(arg2.state, arg1.ch[0].val+arg2.val)
                                                   ,arg1.inputWord);
                                    ans.baseColor=ex.baseColor;
                                    ans.opeColor=ex.opeColor;
                                    ans.backColor=ex.backColor;
                                }
                                else ans=null;
                            }
                            else if(arg1type>=29){
                                var leftB=arg1.getLinearLastB();
                                if(leftB!=null&&leftB.type==MathTOUCH.NUM){
                                    leftB.change(this.reform(new EXtree2(ans.state,MathTOUCH.SP,0,leftB.copy(),arg2," ")));
                                    ans=this.reform(arg1);
                                }
                                else ans=null;
                            }
                        }
                        else if(arg2type==2){
                            if(arg1type==1){
                                ans=new EXtree2(ans.state,arg2.key,arg2.order
                                               ,new NumberEXT(arg2.ch[0].state, arg1.val+arg2.ch[0].val),arg2.ch[1]
                                               ,arg2.inputWord);
                                ans.baseColor=ex.baseColor;
                                ans.opeColor=ex.opeColor;
                                ans.backColor=ex.backColor;
                            }
                            else if(arg1type==101){
                                if(arg1.ch[0].type==MathTOUCH.NUM){
                                    ans=new EXtree1(ans.state,arg1.key,arg1.order
                                                   ,new EXtree2(arg2.state,arg2.key,arg2.order
                                                               ,new NumberEXT(arg2.ch[0].state, arg1.ch[0].val+arg2.ch[0].val),arg2.ch[1]
                                                               ,arg2.inputWord)
                                                   ,arg1.inputWord);
                                    ans.baseColor=ex.baseColor;
                                    ans.opeColor=ex.opeColor;
                                    ans.backColor=ex.backColor;
                                }
                                else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
                            else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else{
                                var leftB=arg1.getLinearLastB();
                                if(leftB!=null&&leftB.type==MathTOUCH.NUM){
                                    leftB.change(this.reform(new EXtree2(ans.state,MathTOUCH.SP,0,leftB.copy(),arg2," ")));
                                    ans=this.reform(arg1);
                                }
                                else ans=null;
                            }
                        }
                        else if(this.tType(arg2type)||this.tLType(arg2type)||this.tCType(arg2type)){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                            if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
                            else{
                                temp.baseColor=ex.baseColor;
                                temp.opeColor=ex.opeColor;
                                temp.backColor=ex.backColor;
                                ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
                            }
                        }
                        else if(arg2type==101||arg2type==121){
                            ans=new EXtree2(ex.state,arg2.key,arg2.order-1,arg1,arg2.ch[0],arg2.inputWord);
                            ans.baseColor=ex.baseColor;
                            ans.opeColor=ex.opeColor;
                            ans.backColor=ex.backColor;
                        }
                        else if(arg2type==104){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],arg2.inputWord));
                            if(temp==null) ans=null;
                            else{
                                ans=new EXtree1(arg2.state,arg2.key,arg2.order,temp,arg2.inputWord);
                                ans.baseColor=ex.baseColor;
                                ans.opeColor=ex.opeColor;
                                ans.backColor=ex.backColor;
                            }
                        }
                        else if(this.tRType(arg2type)||this.tRLType(arg2type)){
                            var temp=this.tRtot(arg2);
                            if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else if(this.theAlgebraicType(arg2)==104){
                                    temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                                    if(temp==null) ans=null;
                                    else{
                                        ans=new EXtree1(arg2.state,arg2.key,arg2.order,temp,arg2.inputWord);
                                        ans.baseColor=ex.baseColor;
                                        ans.opeColor=ex.opeColor;
                                        ans.backColor=ex.backColor;
                                    }
                                }
                                else ans=null;
                            }
                            else{
                                ans=new EXtree2(ex.state,this.getfRkey(),this.getfRorder()-1,arg1,temp,this.getfRinputWord());
                                ans.baseColor=ex.baseColor;
                                ans.opeColor=ex.opeColor;
                                ans.backColor=ex.backColor;
                            }
                        }
                        else if(this.tCRType(arg2type)){
                            var temp0=this.tRtot(arg2.ch[0]);
                            if(temp0==null){
                                if(this.theAlgebraicType(arg2.ch[0])==104){
                                    temp0=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                                    if(temp0==null) ans=null;
                                    else{
                                        ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp0,arg2.ch[1],arg2.inputWord);
                                        ans.baseColor=ex.baseColor;
                                        ans.opeColor=ex.opeColor;
                                        ans.backColor=ex.backColor;
                                    }
                                }
                                else ans=null;
                            }
                            else{
                                var temp=new EXtree2(arg2.state,arg2.key,arg2.order,temp0,arg2.ch[1],arg2.inputWord);;
                                if(temp==null){
                                    if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                    else ans=null;
                                }
                                else{
                                    ans=new EXtree2(ex.state,this.getfRkey(),this.getfRorder()-1,arg1,temp,this.getfRinputWord());
                                    ans.baseColor=ex.baseColor;
                                    ans.opeColor=ex.opeColor;
                                    ans.backColor=ex.backColor;
                                }
                            }
                        }
                        else if((this.polType(arg2type)||this.cmpType(arg2type)||this.relType(arg2type))&&arg2.type==MathTOUCH.OP2C||arg2type==502){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                            if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
                            else{
                                temp.baseColor=ex.baseColor;
                                temp.opeColor=ex.opeColor;
                                temp.backColor=ex.backColor;
                                ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
                            }
                        }
                        else if(arg2.type==MathTOUCH.OP2C){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                            if(temp==null){
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
                            else{
                                temp.baseColor=ex.baseColor;
                                temp.opeColor=ex.opeColor;
                                temp.backColor=ex.backColor;
                                ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
                            }
                        }
                        else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                        else if(arg1type<3){
                            var rightB=arg2.theLeftMostLeaf();
                            if(rightB!=null&&rightB.type==MathTOUCH.NUM){
                                rightB.change(this.reform(new EXtree2(ans.state,MathTOUCH.SP,0,arg1,rightB.copy()," ")));
                                ans=this.reform(arg2);
                            }
                            else ans=null;
                        }
                        else ans=null;
                        break;
                case 41:
                        arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
                        arg2type=this.theAlgebraicType(arg2);if(arg2type<0){isEMPTY=true;arg2type= -arg2type;}
                        if(arg2type==0){
                            ans=arg1;
                        }
                        else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                        else if(this.tLType(arg1type)){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord));
                            if(temp==null){
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
                            else{
                                temp.baseColor=ex.baseColor;
                                temp.opeColor=ex.opeColor;
                                temp.backColor=ex.backColor;
                                ans=this.reform(new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord));
                            }
                        }
                        break;
				case 42:
					arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
					arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
                    if(arg2type==0){
                        ans=arg1;
                    }
					else if(arg1type==31){ans=null;}
                    else if(arg1type==37){
                        if(this.tRType(arg2type)||arg2type==122||arg2type==123||this.tCRType(arg2type)){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                            if(temp==null){
                                ans=null;
                            }
                            else{
                                ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
                            }
                        }
                        else if(arg1.ch[0].type==MathTOUCH.EMP&&arg1.ch[0].val==""){
                            ans=this.reform(new EXtree1(arg1.state,arg1.key,arg1.order,arg2,arg1.inputWord));
                        }
                        else{
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
                            if(temp==null){
                                ans=null;
                            }
                            else{
                                ans=this.reform(new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord));
                            }
                        }
                    }
					else if(this.fLType(arg1type)){
						if(arg2type>=401&&arg2type<=404){ans=null;}
						else if(this.tLType(arg2type)||this.tCType(arg2type)){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
							}
						}
						else if(arg2type==101||arg2type==121){
							ans=new EXtree2(ex.state,arg2.key,arg2.order-1,arg1,arg2.ch[0],arg2.inputWord);
							ans.baseColor=ex.baseColor;
							ans.opeColor=ex.opeColor;
							ans.backColor=ex.backColor;
						}
                        else if(arg2type==104){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],arg2.inputWord));
                            if(temp==null) ans=null;
                            else{
                                ans=new EXtree1(arg2.state,arg2.key,arg2.order,temp,arg2.inputWord);
                                ans.baseColor=ex.baseColor;
                                ans.opeColor=ex.opeColor;
                                ans.backColor=ex.backColor;
                            }
                        }
						else if(this.tRType(arg2type)||this.tRLType(arg2type)){
							var temp=this.tRtot(arg2);
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								ans=new EXtree2(ex.state,this.getfRkey(),this.getfRorder()-1,arg1,temp,this.getfRinputWord());
								ans.baseColor=ex.baseColor;
								ans.opeColor=ex.opeColor;
								ans.backColor=ex.backColor;
							}
						}
						else if(this.tCRType(arg2type)){
                            var temp0=this.tRtot(arg2.ch[0]);
                            if(temp0==null){
                                if(this.theAlgebraicType(arg2.ch[0])==104){
                                    temp0=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                                    if(temp0==null) ans=null;
                                    else{
                                        ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp0,arg2.ch[1],arg2.inputWord);
                                        ans.baseColor=ex.baseColor;
                                        ans.opeColor=ex.opeColor;
                                        ans.backColor=ex.backColor;
                                    }
                                }
                                else ans=null;
                            }
                            else{
                                var temp=new EXtree2(arg2.state,arg2.key,arg2.order,temp0,arg2.ch[1],arg2.inputWord);;
                                if(temp==null){
                                    if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                    else ans=null;
                                }
                                else{
                                    ans=new EXtree2(ex.state,this.getfRkey(),this.getfRorder()-1,arg1,temp,this.getfRinputWord());
                                    ans.baseColor=ex.baseColor;
                                    ans.opeColor=ex.opeColor;
                                    ans.backColor=ex.backColor;
                                }
                            }
						}
						else if((this.polType(arg2type)||this.cmpType(arg2type)||this.relType(arg2type))&&arg2.type==MathTOUCH.OP2C||arg2type==502){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
							}
						}
						else if(arg1.type==MathTOUCH.OP1P){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
							}
						}
						else if(arg1.type==MathTOUCH.OP2P){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord);
							}
						}
						else if(arg1.type==MathTOUCH.OP3P){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[2],arg2,ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree3(arg1.state,arg1.key,arg1.order,arg1.ch[0],arg1.ch[1],temp,arg1.inputWord);
							}
						}
                        else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
						else ans=null;
					}
					else if(this.tLType(arg1type)){
						var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord));
						if(temp==null){ 
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
						else{
							temp.baseColor=ex.baseColor;
							temp.opeColor=ex.opeColor;
							temp.backColor=ex.backColor;
							ans=this.reform(new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord));
						}
					}
                    else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
					else ans=null;
					break;
				case 123:
                    arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
                    arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
                    if(this.theAlgebraicType(arg2)==0){ans=arg1;}
                    else if(arg2type==502){
                        var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
						if(temp==null){
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
						else{
							temp.baseColor=ex.baseColor;
							temp.opeColor=ex.opeColor;
							temp.backColor=ex.backColor;
							ans=this.reform(new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord));
						}
                    }
                    else if(arg1type==121){
                        var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
						if(temp==null){ 
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
						else{
							temp.baseColor=ex.baseColor;
							temp.opeColor=ex.opeColor;
							temp.backColor=ex.backColor;
							ans=this.reform(new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord));
						}
                    }
                    else {
                        var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord));
						if(temp==null){ 
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
						else{
							temp.baseColor=ex.baseColor;
							temp.opeColor=ex.opeColor;
							temp.backColor=ex.backColor;
							ans=this.reform(new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord));
						}
                    }
					break;
				case 50:
					arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
					arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
                    if(arg1type==0){ans=arg2;}
                    else if(arg2type==0){ ans=arg1;}
					else if(this.tCType(arg1type)||this.tCRType(arg1type)||arg1.type==MathTOUCH.OP2C){
						var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord));
						if(temp==null){ 
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
						else{
							temp.baseColor=ex.baseColor;
							temp.opeColor=ex.opeColor;
							temp.backColor=ex.backColor;
							ans=this.reform(new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord));
						}
					}
                    else if(arg1type==403){
                        if(arg2type==104){
                            var temp=new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord);
                            if(temp==null){
                                ans=null;
                            }
                            else{
                                temp.pairBra();
                                ans=new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
                            }
                        }
                        else if(Math.floor(arg2type/1000)>0){

                        }
                        else{
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
                            if(temp==null){
                                ans=null;
                            }
                            else{
                                ans=new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
                            }
                        }
                    }
                    else if(arg2type==502){
                        var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
						if(temp==null){
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
						else{
							temp.baseColor=ex.baseColor;
							temp.opeColor=ex.opeColor;
							temp.backColor=ex.backColor;
							ans=this.reform(new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord));
						}
                    }
                    else if(arg2.type==MathTOUCH.OP2C){
                        var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                        if(temp==null){
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
                        else{
                            temp.baseColor=ex.baseColor;
                            temp.opeColor=ex.opeColor;
                            temp.backColor=ex.backColor;
                            ans=this.reform(new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord));
                        }
                    }
                    else if(err==0&&isEMPTY){
                        if(arg1type==101||arg1type==102){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
                            if(temp==null){
                                ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            }
                            else{
                                temp.baseColor=ex.baseColor;
                                temp.opeColor=ex.opeColor;
                                temp.backColor=ex.backColor;
                                ans=this.reform(new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord));
                            }
                        }
                        else ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                    }
					else{ ans=null;}
					break;
                case 122:
                case 131:
                case 132:
                        var isEMPTY1=false;
                        arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;isEMPTY1=true;}
                        if(arg1type==101&&isEMPTY1){
                            var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
                            if(temp==null){
                                ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            }
                            else{
                                temp.baseColor=ex.baseColor;
                                temp.opeColor=ex.opeColor;
                                temp.backColor=ex.backColor;
                                ans=this.reform(new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord));
                            }
                        }
                        else ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                        break;
				case 71:
				case 73:
				case 75:
				case 131:
				case 133:
				case 135:
					arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
					if(this.tCType(arg2type)){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                        if(temp==null){ 
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
							}
					}
					else if(Math.floor(arg2type/100)==1) ans=null;
					else if(arg2type>=401&&arg2type<=404) ans=null;
					else if(arg2.type==MathTOUCH.OP2C){
							var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                        if(temp==null){ 
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
							}
					}
                    else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
					else ans=null;
					break;
				case 70:
					arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
					arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
					if(arg1type==402){
						var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
						if(temp==null){ 
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
						else{
							temp.baseColor=ex.baseColor;
							temp.opeColor=ex.opeColor;
							temp.backColor=ex.backColor;
							ans=new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
						}
					}
					else if(arg1.type==MathTOUCH.OP2C){
						var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord));
						if(temp==null){ 
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
						else if(this.relType(arg1type)){
							temp.baseColor=ex.baseColor;
							temp.opeColor=ex.opeColor;
							temp.backColor=ex.backColor;
							ans=new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord);
						}
						else{
							temp.baseColor=ex.baseColor;
							temp.opeColor=ex.opeColor;
							temp.backColor=ex.backColor;
							ans=this.reform(new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord));
						}
					}
                    else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
					else ans=null;
					break;
				case 200:
                case 201:
                case 202:
                case 203:
					arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
					arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
                    var temp=null;
                    if(arg1type==0){
                        temp=this.reform(new EXtree1(ex.state,ex.key,ex.order+1,arg2,ex.inputWord));
                        if(temp==null){ 
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
                        else{
                            temp.baseColor=ex.baseColor;
                            temp.opeColor=ex.opeColor;
                            temp.backColor=ex.backColor;
                            ans=temp;
                        }
                    }
					else if(this.polUnder(arg1type)){
                        if(arg1type==37){
                            temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
                            if(temp!=null){
                                temp.baseColor=ex.baseColor;
                                temp.opeColor=ex.opeColor;
                                temp.backColor=ex.backColor;
                                ans=this.reform(new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord));
                                break;
                            }
                        }
						if(Math.floor(arg2type/100)==1){
                            if(arg2type==104){
                                temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                                if(temp!=null){
                                    temp.baseColor=ex.baseColor;
                                    temp.opeColor=ex.opeColor;
                                    temp.backColor=ex.backColor;
                                    ans=this.reform(new EXtree1(arg2.state,arg2.key,arg2.order,temp,arg2.inputWord));
                                }
                                else ans=null;
                            }
                            else ans=null;
                        }
						else if(arg2type>=401&&arg2type<=404) ans=null;
						else if(arg2.type==MathTOUCH.OP2C){
							temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
							}
						}
                        else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
						else ans=null;
					}
					else if(this.cmpType(arg1type)||(this.relType(arg1type)&&arg1.type==MathTOUCH.OP2C)||arg1type==502){
						temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord));
						if(temp==null){ 
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
						else{
							temp.baseColor=ex.baseColor;
							temp.opeColor=ex.opeColor;
							temp.backColor=ex.backColor;
							ans=this.reform(new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord));
						}
					}
					else if(arg1type==402){
						temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
						if(temp==null){ 
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
						else{
							temp.baseColor=ex.baseColor;
							temp.opeColor=ex.opeColor;
							temp.backColor=ex.backColor;
							ans=new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
						}
					}
                    else if(arg2type==502){
                        var temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
						if(temp==null){
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
						else{
							temp.baseColor=ex.baseColor;
							temp.opeColor=ex.opeColor;
							temp.backColor=ex.backColor;
							ans=this.reform(new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord));
						}
                    }
                    else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
					else ans=null;
					break;
            case 250:
                    arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
					arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
					if(this.colUnder(arg1type)){
                        if(this.colType(arg2type)){
                            temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
							}
                        }
                        else if(arg2type>=401&&arg2type<=404) ans=null;
						else if(arg2.type==MathTOUCH.OP2C){
							temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
							if(temp==null){ 
                                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                                else ans=null;
                            }
							else{
								temp.baseColor=ex.baseColor;
								temp.opeColor=ex.opeColor;
								temp.backColor=ex.backColor;
								ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
							}
						}
                        else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
						else ans=null;
                    }
                    else if(arg1.type==MathTOUCH.OP2C){
						temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord));
						if(temp==null){ 
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
						else{
							temp.baseColor=ex.baseColor;
							temp.opeColor=ex.opeColor;
							temp.backColor=ex.backColor;
							ans=new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord);
						}
					}
					else if(arg1type==402){
						temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
						if(temp==null){ 
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                        else ans=null;
                    }
                    else{
                        temp.baseColor=ex.baseColor;
                        temp.opeColor=ex.opeColor;
                        temp.backColor=ex.backColor;
                        ans=new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
                    }
                }
                else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                else ans=null;
                break;
            case 300:
                arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
                arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
                if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                else if(this.cmpUnder(arg1type)){
                    if(this.cmpType(arg2type)){
                        temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                        if(temp==null){
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
                        else{
                            temp.baseColor=ex.baseColor;
                            temp.opeColor=ex.opeColor;
                            temp.backColor=ex.backColor;
                            ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
                        }
                    }
                    else if(arg2type>=401&&arg2type<=404) ans=null;
                    else if(arg2.type==MathTOUCH.OP2C){
                        temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                        if(temp==null){
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
                        else{
                            temp.baseColor=ex.baseColor;
                            temp.opeColor=ex.opeColor;
                            temp.backColor=ex.backColor;
                            ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
                        }
                    }
                    else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                    else ans=null;
                }
                else if(arg1.type==MathTOUCH.OP2C){
                    temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[1],arg2,ex.inputWord));
                    if(temp==null){
                        if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                        else ans=null;
                    }
                    else{
                        temp.baseColor=ex.baseColor;
                        temp.opeColor=ex.opeColor;
                        temp.backColor=ex.backColor;
                        ans=new EXtree2(arg1.state,arg1.key,arg1.order,arg1.ch[0],temp,arg1.inputWord);
                    }
                }
                else if(arg1type==402){
                    temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1.ch[0],arg2,ex.inputWord));
                    if(temp==null){
                        if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                        else ans=null;
                    }
                    else{
                        temp.baseColor=ex.baseColor;
                        temp.opeColor=ex.opeColor;
                        temp.backColor=ex.backColor;
                        ans=new EXtree1(arg1.state,arg1.key,arg1.order,temp,arg1.inputWord);
                    }
                }
                else ans=null;
                break;
            case 406:
            case 407:
            case 410:
                arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
                arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
                if(this.cmpUnder(arg1type)||this.relType(arg1type)){
                    if(arg2type>=405&&arg2type<=410){
                        temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                        if(temp==null){
                            if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                            else ans=null;
                        }
                        else{
                            temp.baseColor=ex.baseColor;
                            temp.opeColor=ex.opeColor;
                            temp.backColor=ex.backColor;
                            ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
                        }
                    }
                    else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                    else ans=null;
                }
                else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                else ans=null;
                break;
            case 502:
                arg1type=this.theAlgebraicType(arg1);if(arg1type<0){arg1type= -arg1type;}
                arg2type=this.theAlgebraicType(arg2);if(arg2type<0){arg2type= -arg2type;}
                if(arg2type==502){
                    temp=this.reform(new EXtree2(ex.state,ex.key,ex.order,arg1,arg2.ch[0],ex.inputWord));
                    if(temp==null){
                        if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                        else ans=null;
                    }
                    else{
                        temp.baseColor=ex.baseColor;
                        temp.opeColor=ex.opeColor;
                        temp.backColor=ex.backColor;
                        ans=new EXtree2(arg2.state,arg2.key,arg2.order,temp,arg2.ch[1],arg2.inputWord);
                    }
                }
                else if(err==0&&isEMPTY) ans=new EXtree2(ex.state,ex.key,ex.order,arg1,arg2,ex.inputWord);
                else ans=null;
                break;
            default:
                    if(err==0&&isEMPTY) return(ans);
                    else return(null);
            }
        }
        return(ans);
    }
    else if(ex.cnum==3){
        var  isEMPTY=false;
        arg1=this.reform(ex.ch[0]);
        if(arg1==null) arg1=ex.ch[0];
        arg2=this.reform(ex.ch[1]);
        if(arg2==null) arg2=ex.ch[1];
        arg3=this.reform(ex.ch[2]);
        if(arg3==null) arg2=ex.ch[2];
        ans=new EXtree3(ex.state,ex.key,ex.order,arg1,arg2,arg3,ex.inputWord);
        ans.baseColor=ex.baseColor;
        ans.opeColor=ex.opeColor;
        ans.backColor=ex.backColor;
        algtype=this.theAlgebraicType(ans);if(algtype<0){isEMPTY=true;algtype= -algtype;}
        if(Math.floor(algtype/1000)>0 || isEMPTY){
            var err=Math.floor(algtype/1000);
            algtype=algtype%1000;
            if(err%4==0){
                var arg3type=this.theAlgebraicType(arg3);if(arg3type<0) arg3type= -arg3type;
                if(arg3type>=401&&arg3type<=404) ans=null;
                else if(arg3type==300||arg3type==250){
                    var temp=new EXtree3(ex.state,ex.key,ex.order,arg1.copy(),arg2.copy(),arg3.ch[0].copy(),ex.inputWord);
                    var temp2=this.reform(temp);
                    if(temp2==null) temp2=temp;
                    var temp3=new EXtree2(arg3.state,arg3.key,arg3.order,temp2,arg3.ch[1],arg3.inputWord);
                    temp=this.reform(temp3);
                    if(temp==null) ans=temp3;
                    else ans=temp;
                }
                else if(arg3type==201||arg3type==202||arg3type==203){
                    var temp=new EXtree3(ex.state,ex.key,ex.order,arg1.copy(),arg2.copy(),arg3.ch[0].copy(),ex.inputWord);
                    var temp2=this.reform(temp);
                    if(temp2==null) temp2=temp;
                    var temp3=new EXtree2(arg3.state,arg3.key,arg3.order,temp2,arg3.ch[1],arg3.inputWord);
                    temp=this.reform(temp3);
                    if(temp==null) ans=temp3;
                    else ans=temp;
                }
                else if(!this.tAllUnder(arg3type)){
                    var temp,temp2,temp3;
                    temp3=arg3.copy();
                    temp2=temp3.cutFirstSpacedTerm();
                    if(temp2!=null){
                        temp2=this.reform(new EXtree2(0,MathTOUCH.SP,0,arg2.copy(),temp2," "));
                        if(temp2!=null){
                            ans=new EXtree3(ex.state,ex.key,ex.order,arg1.copy(),temp2,temp3,ex.inputWord);
                        }
                    }
                    if(ans==null){
                        temp=this.reform(new EXtree3(ex.state,ex.key,ex.order,arg1,arg2,arg3.ch[0],ex.inputWord));
                        if(temp==null){
                            if(err==0&&isEMPTY) ans=new EXtree3(ex.state,ex.key,ex.order,arg1,arg2,arg3,ex.inputWord);
                            else ans=null;
                        }
                        else{
                            temp.baseColor=ex.baseColor;
                            temp.opeColor=ex.opeColor;
                            temp.backColor=ex.backColor;
                            ans=new EXtree2(arg3.state,arg3.key,arg3.order,temp,arg3.ch[1],arg3.inputWord);
                        }
                    }
                }
                else if(err==0&&isEMPTY){
                    ans=new EXtree3(ex.state,ex.key,ex.order,arg1,arg2,arg3,ex.inputWord);
                }
                else ans=null;
            }
            else if(err==0&&isEMPTY) ans=new EXtree3(ex.state,ex.key,ex.order,arg1,arg2,arg3,ex.inputWord);
            else ans=null;
        }
        return(ans);
    }
    else{console.log("copy error in AlgebraicRules");ans=null;}
    return null;
};

MathTOUCH.AlgebraicRules.prototype.tRtot = function(ex){
    var ans;
    var temp;
    var atype=this.theAlgebraicType(ex);if(atype<0) atype= -atype;
    switch(atype){
    case 101:
    case 102:
    case 121:
        ans=ex.ch[0].copy();
        this.setfRkey(ex.key);
        this.setfRorder(ex.order);
        this.setfRstate(ex.state);
        this.setfRinputWord(ex.inputWord);
        this.setfRbaseColor(ex.baseColor);
        this.setfRopeColor(ex.opeColor);
        this.setfRbackColor(ex.backColor);
        break;
    case 110:
    case 122:
    case 123:
        temp=this.tRtot(ex.ch[0]);
        if(temp==null) ans=null;
        else{
            ans=new EXtree2(ex.state,ex.key,ex.order,temp,ex.ch[1].copy(),ex.inputWord);
            ans.baseColor=ex.baseColor;
            ans.opeColor=ex.opeColor;
            ans.backColor=ex.backColor;
        }
        break;
    default:
        ans=null;
    }
    return(ans);
};

MathTOUCH.AlgebraicRules.prototype.BLpoint=function(ex){
        var extype=this.theAlgebraicType(ex);
        var tmp=null;
        if(extype==37){
            tmp=this.BLpoint(ex.ch[0]);
            if(tmp==null) return ex;
            else return tmp;
        }
        else if((extype>=32&&extype<=36)||(extype>120&&extype<400)||(extype>401&&extype<500)){
            return this.BLpoint(ex.ch[ex.cnum-1]);
        }
        else return null;
};
	
MathTOUCH.AlgebraicRules.prototype.theAlgebraicType = function(ex){
    var isEMPTY=1;
    if(ex==null) return -1;
    if(ex.type==MathTOUCH.EMP){
        if(ex.val==""){ isEMPTY=-1; return 0;}
        return 4;
    }
    else if(ex.type==MathTOUCH.EDIT) return 0;
    else if(ex.type==MathTOUCH.NUM) return 1;
    else if(ex.type==MathTOUCH.VAR) return 3;
    else if(ex.type==MathTOUCH.SYM) return 4;
    else if(ex.type==MathTOUCH.TXT) return 4;
    else if(ex.type==MathTOUCH.XTML){
        if((ex.state==2||ex.state==6)) return this.theAlgebraicType(EXTML.parse(ex.inputWord,ex.val));
        else return 4;
    }
    else if(ex.type==MathTOUCH.MAT){
        var abstype;
        for(var i=0;i<ex.cnum;i++){
            if(ex.ch[i]!=null){
                abstype=this.theAlgebraicType(ex.ch[i]);
                if(abstype<0){isEMPTY=-1;abstype= -abstype;}
                if(Math.floor(abstype/1000)>0) return 1401*isEMPTY;
            }
        }
        return 401*isEMPTY;
    }
    else if(ex.type==MathTOUCH.OP3T){
        return 36;
    }
    else{
        var ans=OTB.theAlgebraicType(ex.key,ex.order);
        var alg1t,alg2t,alg3t;
        if(ex.type==MathTOUCH.OP2C){
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if(alg1t==37) return 3410;
            else if(alg2t==104) return 3410;
            else if(this.BLpoint(ex.ch[0])!=null) return 3410;
        }
        switch(ans){
        case 5:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(Math.floor(alg1t/10)>0) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            break;
        case 11:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(alg1t>28) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            break;
        case 13:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(Math.floor(alg1t/100)>1) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            else if(Math.floor(alg1t/10)==0) ans=5;
            break;
        case 14:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(Math.floor(alg1t/100)>2) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            break;
        case 21:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(alg1t>10) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            if(Math.floor(alg2t/1000)>0) ans=ans+2000;
            else if(Math.floor(alg2t/100)>2) ans=ans+2000;
            else if(alg2t==0) isEMPTY=-1;
            break;
        case 22:
        case 23:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(alg1t>28) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            if(Math.floor(alg2t/1000)>0) ans=ans+2000;
            else if(Math.floor(alg2t/100)>2) ans=ans+2000;
            else if(alg2t==0) isEMPTY=-1;
            break;
        case 26:
                alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
                alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
                if(Math.floor(alg1t/1000)>0) ans=ans+1000;
                else if(alg1t!=23) ans=ans+1000;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(Math.floor(alg2t/100)>2) ans=ans+2000;
                else if(alg2t==0) isEMPTY=-1;
                break;
        case 24:
        case 25:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(Math.floor(alg1t/10)>2) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            if(Math.floor(alg2t/1000)>0) ans=ans+2000;
            else if(Math.floor(alg2t/10)>2) ans=ans+2000;
            else if(alg2t==14) ans=ans+2000;
            else if(alg2t==0) isEMPTY=-1;
            break;
        case 27:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<=0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<=0){isEMPTY=-1;alg2t= -alg2t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(alg1t>10) ans=ans+1000;
            if(Math.floor(alg2t/1000)>0) ans=ans+2000;
            else if(alg2t>29) ans=ans+2000;
            if(alg1t==1&&alg2t==1) ans=2;
            else if(alg1t==0&&alg2t==1) ans=2;
            else if(alg2t==0) isEMPTY=-1;
            break;
        case 28:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(Math.floor(alg1t/100)>2) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            if(Math.floor(alg2t/1000)>0) ans=ans+2000;
            else if(Math.floor(alg2t/100)>2) ans=ans+2000;
            else if(alg2t==0) isEMPTY=-1;
            break;
        case 31:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(alg1t>10) ans=ans+1000;
            break;
        case 32:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(Math.floor(alg1t/10)>7) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            break;
        case 33:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(Math.floor(alg1t/100)>3) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            if(Math.floor(alg2t/1000)>0) ans=ans+2000;
            else if(Math.floor(alg2t/10)>7) ans=ans+2000;
            else if(alg2t==0) isEMPTY=-1;
            break;
        case 34:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(Math.floor(alg1t/100)>2) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            if(Math.floor(alg2t/1000)>0) ans=ans+2000;
            else if(Math.floor(alg2t/10)>7) ans=ans+2000;
            else if(alg2t==0) isEMPTY=-1;
            break;
        case 35:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            if(Math.floor(alg2t/1000)>0) ans=ans+2000;
            else if(Math.floor(alg2t/10)>7) ans=ans+2000;
            else if(alg2t==0) isEMPTY=-1;
            break;
        case 36:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            alg3t=this.theAlgebraicType(ex.ch[2]);if(alg3t<0){isEMPTY=-1;alg3t= -alg3t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(Math.floor(alg1t/100)>3) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            if(Math.floor(alg2t/1000)>0) ans=ans+2000;
            else if(Math.floor(alg2t/100)>2) ans=ans+2000;
            else if(alg2t==0) isEMPTY=-1;
            if(Math.floor(alg3t/1000)>0) ans=ans+4000;
            else if(Math.floor(alg3t/10)>7) ans=ans+4000;
            else if(alg3t==0) isEMPTY=-1;
            break;
        case 37:
                alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
                if(Math.floor(alg1t/1000)>0) ans=ans+1000;
                else if(alg1t==0) isEMPTY=-1;
                break;
        case 50:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<=0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<=0){isEMPTY=-1;alg2t= -alg2t;}
            if((Math.floor(alg1t/1000)>0)||(Math.floor(alg1t/10)>12)||(Math.floor(alg1t/10)==7)){
                ans=ans+1000;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(Math.floor(alg2t/10)>12) ans=ans+2000;
                else if(alg2t==0) isEMPTY=-1;
            }
            else if(alg1t==0){
                isEMPTY=-1;
                if(alg2t==0) isEMPTY=-1;
            }
            else if(alg1t<30){
                ans=29;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(Math.floor(alg2t/10)==3) ans=41;
                else if(alg2t<3 && ex.ch[1].type==MathTOUCH.NUM){
                    var leftB=ex.ch[0].getLinearLastB();
                    if(leftB!=null&&leftB.type==MathTOUCH.NUM) ans=ans+3000;
                    else ans=29;
                }
                else if(alg2t==0) isEMPTY=-1;
                else if(alg2t>28) ans=ans+2000;
                else if(alg1t<3){
                    var rightB=ex.ch[1].theLeftMostLeaf();
                    if(rightB!=null&&rightB.type==MathTOUCH.NUM) ans=ans+3000;
                }
            }
            else if(alg1t>=31&&alg1t<=42){
                ans=42;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(alg2t<31||alg2t>37) ans=ans+2000;
            }
            else if(Math.floor(alg1t/10)==12){
                ans=123;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(Math.floor(alg2t/10)!=3) ans=ans+2000;
            }
            else if(Math.floor(alg1t/10)>=10||this.tRType(alg1t)){
                ans=110;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(alg2t==0) isEMPTY=-1;
                else if(alg1t<104&&alg2t<3){
                    var ttt=this.tRtot(ex.ch[0]);
                    if(ttt==null){ console.log("theAlgebraciType 50 error!");return null;}
                    if(ttt.type==MathTOUCH.NUM) ans=ans+2000;
                    else if(ttt.cnum==2&&ttt.ch[1].type==MathTOUCH.NUM) ans=ans+2000;
                    else ans=110;
                }
                else if(Math.floor(alg2t/10)==3) ans=122;
                else if(!this.fType(alg2t)) ans=ans+2000;
            }
            else{
                ans=42;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(Math.floor(alg2t/10)!=3) ans=ans+2000;
            }
            break;
        case 70:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if((Math.floor(alg1t/1000)>0)||(Math.floor(alg1t/10)>13)){
                ans=ans+1000;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(Math.floor(alg2t/10)>4) ans=ans+2000;
                else if(alg2t==0) isEMPTY=-1;
            }
            else if(alg1t==0){
                isEMPTY=-1;
                if(alg2t==0) isEMPTY=-1;
            }
            else if(alg1t<30){
                ans=71;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(Math.floor(alg2t/10)>4) ans=ans+2000;
                else if(Math.floor(alg2t/10)>2) ans=72;
                else if(alg2t==0) isEMPTY=-1;
            }
            else if(Math.floor(alg1t/10)==13){
                ans=135;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(Math.floor(alg2t/10)>4) ans=ans+2000;
                else if(Math.floor(alg2t/10)>2) ans=136;
                else if(alg2t==0) isEMPTY=-1;
            }
            else if(Math.floor(alg1t/10)==12){
                ans=133;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(Math.floor(alg2t/10)>4) ans=ans+2000;
                else if(Math.floor(alg2t/10)>2) ans=134;
                else if(alg2t==0) isEMPTY=-1;
            }
            else if(Math.floor(alg1t/10)>=10){
                ans=131;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(Math.floor(alg2t/10)>4) ans=ans+2000;
                else if(Math.floor(alg2t/10)>2) ans=132;
                else if(alg2t==0) isEMPTY=-1;
            }
            else if(Math.floor(alg1t/10)==7){
                ans=75;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(Math.floor(alg2t/10)>4) ans=ans+2000;
                else if(Math.floor(alg2t/10)>2) ans=76;
                else if(alg2t==0) isEMPTY=-1;
            }
            else{
                ans=73;
                if(Math.floor(alg2t/1000)>0) ans=ans+2000;
                else if(Math.floor(alg2t/10)>4) ans=ans+2000;
                else if(Math.floor(alg2t/10)>2) ans=74;
                else if(alg2t==0) isEMPTY=-1;
            }
            break;
        case 100:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<=0){isEMPTY=-1;alg1t= -alg1t;}
            if((Math.floor(alg1t/1000)>0)||(Math.floor(alg1t/10)>10)) ans=ans+1000;
            else if(Math.floor(alg1t/10)==10) ans=102;
            else if(Math.floor(alg1t/10)==3) ans=121;
            else if(alg1t>28) ans=ans+1000;
            else ans=101;
            break;
        case 200:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if((Math.floor(alg1t/1000)>0)||(Math.floor(alg1t/100)>2)) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            else if((Math.floor(alg2t/1000)>0)||(Math.floor(alg2t/10)>7)) ans=ans+2000;
            else if(alg2t==0) isEMPTY=-1;
            else if(Math.floor(alg2t/10)<3) ans=201;
            else if(Math.floor(alg2t/10)==7) ans=203;
            else ans=202;
            break;
        case 250:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(alg1t>250) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            if(Math.floor(alg2t/1000)>0) ans=ans+2000;
            else if(alg2t>=250) ans=ans+2000;
            else if(alg2t==0) isEMPTY=-1;
            break;
        case 300:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if((Math.floor(alg1t/1000)>0)||(Math.floor(alg1t/100)>3)) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            else if((Math.floor(alg2t/1000)>0)||(Math.floor(alg2t/100)>2)) ans=ans+2000;
            else if(alg2t==0) isEMPTY=-1;
            break;
        case 501:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            else if(alg1t<250) ans=15;
            else ans=alg1t;
            break;
        case 502:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if(Math.floor(alg1t/1000)>0){
                ans=ans+1000;
                if(Math.floor(alg2t/1000)>0){ans=ans+2000;}
            }
            else if(alg1t==0) isEMPTY=-1;
            else{
                if(Math.floor(alg2t/1000)>0){ans=ans+2000;}
                else if(alg2t==0) isEMPTY=-1;
                else if(alg2t>500){ans=ans+2000;}
            }
            break;
        case 503:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(alg1t==0){
                isEMPTY=-1;
                ans=37;
            }
            else if(alg1t==401){
                ans=0;
                var next;
                for(var i=0;i<ex.ch[0].cnum;i++){
                    next=this.theAlgebraicType(ex.ch[0].ch[i]);if(next<0){isEMPTY=-1;next= -next;}
                    if(next>ans) ans=next;
                }
                if(ans>1000) ans=1015;
                else ans=15;
            }
            else if(alg1t==104){
                ans=1403;
            }
            else ans=37;
            break;
        case 504:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(alg1t==0){
                isEMPTY=-1;
                ans=104;
            }
            else if(alg1t==401){
                ans=0;
                var next;
                for(var i=0;i<ex.ch[0].cnum;i++){
                    next=this.theAlgebraicType(ex.ch[0].ch[i]);if(next<0){isEMPTY=-1;next= -next;}
                    if(next>ans) ans=next;
                }
            }
            else if(alg1t==37){
                ans=1104;
            }
            else if(this.tLType(alg1t)){
                if(this.theAlgebraicType(ex.ch[0].ch[1])==37) ans=1104;
                else ans=104;
            }
            else ans=104;
            break;
        case 405:
        case 406:
        case 407:
        case 410:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            alg2t=this.theAlgebraicType(ex.ch[1]);if(alg2t<0){isEMPTY=-1;alg2t= -alg2t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            else if(alg1t>500){
                ans=ans+1000;
            }
            if(Math.floor(alg2t/1000)>0||alg2t>400) ans=ans+2000;
            else if(alg2t==0) isEMPTY=-1;
            break;
        case 12:
        case 402:
        default:
            alg1t=this.theAlgebraicType(ex.ch[0]);if(alg1t<0){isEMPTY=-1;alg1t= -alg1t;}
            if(Math.floor(alg1t/1000)>0) ans=ans+1000;
            else if(alg1t==0) isEMPTY=-1;
            break;
        }
        return(ans*isEMPTY);
    }
};

