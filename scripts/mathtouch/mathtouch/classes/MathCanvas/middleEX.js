var KTB=new MathTOUCH.keyTable("Full");
var LOG=new MathTOUCH.logTable();
var MTTLOG=new MathTOUCH.TouchLog();
var AlgRules = new MathTOUCH.AlgebraicRules();

MathTOUCH.middleEXbackup = function(){
	this.inTerm=new Array();
	this.outTerm=new Array();
	this.Termtype=new Array();
    this.outKey=new Array();
    this.outOrder=new Array();
	this.symComplete=new Array();
	this.divPoint=new Array();
	this.toknum=0;
    this.rank=0;
	this.scp=-1;
}

MathTOUCH.middleEX = function(sizeN){
	var middleMAX;
    if(sizeN>0) middleMAX=sizeN;
    else middleMAX=500;
    this.inTerm=new Array();
	this.outTerm=new Array();
	this.Termtype=new Array();
    this.outKey=new Array();
    this.outOrder=new Array();
	this.symComplete=new Array();
	this.divPoint=new Array();
	this.toknum=0;
    this.rank=0;
	this.scp=-1;
	this.errnum=0;
    var errmax=20;
	this.error=new Array();
	this.BoldNumber=false;
    this.undoMax=20;
    this.BAK=new Array();
    for(var i=0;i<this.undoMax;i++) this.BAK[i]=new MathTOUCH.middleEXbackup();
    var _MAX=10;
    this.setMax=function(mx){
        _MAX=mx;
        NES.MAX=mx;
    }
    this.getMax=function(){ return _MAX;}
    this.timeMax=10000;
    
};

MathTOUCH.middleEX.prototype.logReset = function(){
    LOG.reset();
};
	
MathTOUCH.middleEX.prototype.pushData = function(sp){
    if(sp>=this.undoMax){alert("BAK stack overflow! in middleEX"); return;}
    this.BAK[sp].toknum=this.toknum;
    for(var i=0;i<this.toknum;i++){
        this.BAK[sp].inTerm[i]=this.inTerm[i];
        this.BAK[sp].outTerm[i]=this.outTerm[i];
        this.BAK[sp].Termtype[i]=this.Termtype[i];
        this.BAK[sp].symComplete[i]=this.symComplete[i];
        this.BAK[sp].divPoint[i]=this.divPoint[i];
    }
};

MathTOUCH.middleEX.prototype.pullData = function(sp){
    if(sp<0){alert("BAK stack underflow! in middleEX"); return;}
    this.toknum=this.BAK[sp].toknum;
    for(var i=0;i<this.toknum;i++){
        this.inTerm[i]=this.BAK[sp].inTerm[i];
        this.outTerm[i]=this.BAK[sp].outTerm[i];
        this.Termtype[i]=this.BAK[sp].Termtype[i];
        this.symComplete[i]=this.BAK[sp].symComplete[i];
        this.divPoint[i]=this.BAK[sp].divPoint[i];
    }
};

MathTOUCH.middleEX.prototype.extrans = function(trystr){
    var tnum;
    for(tnum=this.anyMatch(trystr); tnum<trystr.length;tnum=this.anyMatch(trystr)){
        trystr=trystr.substring(tnum);
    }
    this.divpointTrace();
};
	
MathTOUCH.middleEX.prototype.extransOff = function(trystr,offstr){
    var tnum;
    for(tnum=this.anyMatchOff(trystr,offstr);tnum<trystr.length;tnum=this.anyMatchOff(trystr,offstr)){
        trystr=trystr.substring(tnum);
    }
    this.divpointTrace();
};
	
MathTOUCH.middleEX.prototype.extransNext = function(trystr){
    var tnum;
    for(tnum=this.anyNextMatch(trystr);tnum<trystr.length;tnum=this.anyMatch(trystr)){
        trystr=trystr.substring(tnum);
    }
    this.divpointTrace();
};
	
MathTOUCH.middleEX.prototype.extransPart0 = function(trystr){
    var tnum;
    var trystr2=trystr.substring(0,trystr.length-1);
    for(tnum=this.anyMatch(trystr2);tnum<trystr.length;tnum=this.anyMatch(trystr)){
        trystr=trystr.substring(tnum);
    }
    this.divpointTrace();
};
    
MathTOUCH.middleEX.prototype.extransPart = function(st,trystr){
    var tnum;
    if(st==0){tnum=0;}
    else{tnum=this.anyMatch(trystr.substring(0,st));}
    for(;tnum<trystr.length;tnum=this.anyMatch(trystr)){
        trystr=trystr.substring(tnum);
    }
    this.divpointTrace();
};
	
MathTOUCH.middleEX.prototype.anyMatch = function(str){
    var n;
    var isLogHit=true;
    n=this.textMatch(str);
    if(n>0){return(n);}
    var kw=LOG.logMatch1(str);
    if(kw==null) {
        kw=DIC.dicMatch(str);
        isLogHit=false;
    }
    else if(kw.score<=2){
        kw=DIC.dicMatch(str);
        isLogHit=false;
    }
    if(kw!=null && kw.score>2){
        this.Termtype[this.toknum]=kw.type;
        this.symComplete[this.toknum]=false;
        this.inTerm[this.toknum]=kw.keyword;
        if(kw.type==MathTOUCH.VAR||kw.type==MathTOUCH.SYM){
            this.outTerm[this.toknum++]=KTB.getLogWord(kw.key,0);
        }
        else{this.outTerm[this.toknum++]=kw.theWord;}
        if(isLogHit){MTTLOG.loghit();}
        else{MTTLOG.dichit();}
        return(kw.getInputWord().length);
    }
    n=this.numMatch(str);if(n>0) return(n);
    this.keyMatch(str); return(1);
};
	
MathTOUCH.middleEX.prototype.anyMatchOff = function(str,offstr){
    var n;
    n=this.textMatch(str);if(n>0) return(n);
    var kw=LOG.logMatchOff(str,offstr);
    if(kw==null) {kw=DIC.dicMatchOff(str,offstr);}
    else if(kw.score<=2) {kw=DIC.dicMatchOff(str,offstr);}
    if(kw!=null && kw.score>2){
        this.Termtype[this.toknum]=kw.type;
        this.symComplete[this.toknum]=false;
        this.inTerm[this.toknum]=kw.keyword;
        if(kw.type==MathTOUCH.VAR||kw.type==MathTOUCH.SYM) this.outTerm[this.toknum++]=KTB.getLogWord(kw.key,0);
        else this.outTerm[this.toknum++]=kw.theWord;
        return(kw.getInputWord().length);
    }
    n=this.numMatch(str);if(n>0) return(n);
    this.keyMatch(str); return(1);
};
	
MathTOUCH.middleEX.prototype.anyNextMatch = function(str){
    var n;
    n=this.textMatch(str);if(n>0) return(n);
    var kw=LOG.nextMatch(str);
    if(kw==null) {kw=DIC.dicMatch(str);}
    else if(kw.score<=2) {kw=DIC.dicMatch(str);}
    if(kw!=null && kw.score>2){
        this.Termtype[this.toknum]=kw.type;
        this.symComplete[this.toknum]=false;
        this.inTerm[this.toknum]=kw.keyword;
        if(kw.type==MathTOUCH.VAR||kw.type==MathTOUCH.SYM) this.outTerm[this.toknum++]=KTB.getLogWord(kw.key,0);
        else this.outTerm[this.toknum++]=kw.theWord;
        return(kw.getInputWord().length);
    }
    n=this.numMatch(str);if(n>0) return(n);
    this.keyMatch(str); return(1);
};
	
MathTOUCH.middleEX.prototype.textMatch = function(str){
    if(str.charAt(0)=='\"'){
        console.log("○textMatch"+str);
        this.Termtype[this.toknum]=MathTOUCH.TXT;
        this.symComplete[this.toknum]=true;
        var e=str.indexOf('\"',1);
        if(e<0){
            this.inTerm[this.toknum]=str;
            this.outTerm[this.toknum++]=str.substring(1);
            return(str.length);
        }
        else{
            this.inTerm[this.toknum]=str.substring(0,e+1);
            this.outTerm[this.toknum++]=str.substring(1,e);
            return(e+1);
        }
    }
    return(0);
};
	
MathTOUCH.middleEX.prototype.numMatch = function(str){
    var i=0;
    for(i=0;i<str.length;i++){
        if(this.getType(str.charAt(i))!=1) break;
    }
    if(i>0){
        this.Termtype[this.toknum]=1;
        this.symComplete[this.toknum]=false;
        if(this.BoldNumber==false){
            if(i>1) this.symComplete[this.toknum]=false;
            else this.symComplete[this.toknum]=true;
        }
        this.inTerm[this.toknum]=str.substring(0,i);
        this.outTerm[this.toknum++]=str.substring(0,i);
        return(i);
    }
    else return(0);
};
	
MathTOUCH.middleEX.prototype.getType = function(c){
    var cc=c.charCodeAt(0);
    if(cc>='0'.charCodeAt(0)&&cc<='9'.charCodeAt(0)) return(1);
    else if(cc>='A'.charCodeAt(0)&&cc<='Z'.charCodeAt(0)) return(2);
    else if(cc>='a'.charCodeAt(0)&&cc<='z'.charCodeAt(0)) return(2);
    else if(cc==' '.charCodeAt(0)) return(2);
    else if(cc>' '.charCodeAt(0)&&cc<='~'.charCodeAt(0)) return(3);
    else return(0);
};
	
MathTOUCH.middleEX.prototype.keyMatch = function(str){
    var c=str.charAt(0);
    if(c=='\u21E9'){
        this.Termtype[this.toknum]=MathTOUCH.MAT;
        this.symComplete[this.toknum]=true;
        this.inTerm[this.toknum]=""+c;
        this.outTerm[this.toknum++]="matBegin";
        return;
    }
    else if(c=='\u22A1'){
        this.Termtype[this.toknum]=MathTOUCH.MAT;
        this.symComplete[this.toknum]=true;
        this.inTerm[this.toknum]=""+c;
        this.outTerm[this.toknum++]="matEnd";
        return;
    }
    else if(c=='\u27B1' || c=='\u23cE'){
        this.Termtype[this.toknum]=MathTOUCH.MAT;
        this.symComplete[this.toknum]=true;
        this.inTerm[this.toknum]=""+c;
        this.outTerm[this.toknum++]=""+c;
        return;
    }
    else if(c=='\u201A'){
        this.Termtype[this.toknum]=MathTOUCH.OP2C;
        this.symComplete[this.toknum]=false;
        this.inTerm[this.toknum]=""+c;
        this.outTerm[this.toknum++]=",";
        return;
    }
    if(c.charCodeAt(0)==165) c=String.fromCharCode(92);
    var type=this.getType(c);
    if(type<3) this.Termtype[this.toknum]=type;
    else this.Termtype[this.toknum]=MathTOUCH.OPEtype[this.OPEnumber(c)];
    if(this.Termtype[this.toknum]==2){
        if(KTB.keyLengthOf(c.charCodeAt(0)-32)==1) this.symComplete[this.toknum]=true;
        else this.symComplete[this.toknum]=false;
    }
    else this.symComplete[this.toknum]=true;
    this.inTerm[this.toknum]=""+c;
    this.outTerm[this.toknum++]=KTB.getLogTopWord(c.charCodeAt(0)-32);
};
		
MathTOUCH.middleEX.prototype.OPEnumber = function(c){
    var cc=c.charCodeAt(0);
    if(cc<' '.charCodeAt(0)){return -1;}
    else if(cc<'0'.charCodeAt(0)){return (cc-' '.charCodeAt(0));}
    else if(cc<':'.charCodeAt(0)){return -1;}
    else if(cc<'A'.charCodeAt(0)){return 16+(cc-':'.charCodeAt(0));}
    else if(cc<'['.charCodeAt(0)){return -1;}
    else if(cc<'a'.charCodeAt(0)){return 23+(cc-'['.charCodeAt(0));}
    else if(cc<'{'.charCodeAt(0)){return -1;}
    else if(cc<='~'.charCodeAt(0)){return 29+(cc-'{'.charCodeAt(0));}
    else{return -1;}
};
	
MathTOUCH.middleEX.prototype.divpointTrace = function(){
    for(var i=0;i<this.toknum;i++) this.divPoint[i]=false;
    for(var i=0;i<this.toknum-1;i++){
        var tt1=this.Termtype[i];
        var tt2=this.Termtype[i+1];
        if(
        ((tt1<4)||(tt1==MathTOUCH.OP1A)||(tt1==MathTOUCH.OP1B&&(this.outTerm[i]==")"||this.outTerm[i]=="}"||this.outTerm[i]=="]")))
           &&((tt2!=MathTOUCH.OP1A )&&(tt2!=MathTOUCH.OP2C)&&(tt2!=MathTOUCH.OP3T)&&!(this.outTerm[i+1]==")")&&!(this.outTerm[i+1]=="}")&&!(this.outTerm[i+1]=="]"))) this.divPoint[i+1]=true;
    }
};
    
MathTOUCH.middleEX.prototype.isTermPoint = function(i){
    if(i<1) return false;
    if(i==this.toknum) return true;
    var tt1=this.Termtype[i-1];
    var tt2=this.Termtype[i];
    if(tt1<4) return true;
    if(tt2==MathTOUCH.OP1A||tt2==MathTOUCH.OP2C||tt2==MathTOUCH.OP3T||
       (tt2==MathTOUCH.OP1B&&(this.outTerm[i]==")"||this.outTerm[i]=="}"||this.outTerm[i]=="]"))) return true;
    if(tt1==MathTOUCH.OP1A||
       (tt1==MathTOUCH.OP1B&&(this.outTerm[i-1]==")"||this.outTerm[i-1]=="}"||this.outTerm[i-1]=="]"))) return true;
    return false;
};

MathTOUCH.middleEX.prototype.shiftRight = function(st,num){
    if(this.toknum+num>=middleMAX){alert("Token stack overflow in middleEX");return;}
    for(var i=this.toknum-1;i>=st;i--){
        this.Termtype[i+num]=this.Termtype[i];
        this.inTerm[i+num]=this.inTerm[i];
        this.outTerm[i+num]=this.outTerm[i];
        this.symComplete[i+num]=this.symComplete[i];
        this.divPoint[i+num]=this.divPoint[i];
    }
    this.toknum=this.toknum+num;
};
	
MathTOUCH.middleEX.prototype.shiftLeft = function(st,num){
    if(st-num<0){alert("Token stack underflow in middleEX");return;}
    for(var i=st;i<this.toknum;i++){
        this.Termtype[i-num]=this.Termtype[i];
        this.inTerm[i-num]=this.inTerm[i];
        this.outTerm[i-num]=this.outTerm[i];
        this.symComplete[i-num]=this.symComplete[i];
        this.divPoint[i-num]=this.divPoint[i];
    }
    this.toknum=this.toknum-num;
};
	
MathTOUCH.middleEX.prototype.insertTo = function(st,sub){
    shiftRight(st,sub.toknum);
    for(var i=0;i<sub.toknum;i++){
        this.Termtype[st+i]=sub.Termtype[i];
        this.inTerm[st+i]=sub.inTerm[i];
        this.outTerm[st+i]=sub.outTerm[i];
        this.symComplete[st+i]=sub.symComplete[i];
    }
    this.divPointTrace();
};

MathTOUCH.middleEX.prototype.appendTo = function(st,sub){
    shiftRight(st,sub.toknum-1);
    for(var i=0;i<sub.toknum;i++){
        this.Termtype[st+i]=sub.Termtype[i];
        this.inTerm[st+i]=sub.inTerm[i];
        this.outTerm[st+i]=sub.outTerm[i];
        this.symComplete[st+i]=sub.symComplete[i];
    }
    this.divPointTrace();
};
	
MathTOUCH.middleEX.prototype.addTo = function(st,sub){
    for(var i=0;i<sub.toknum;i++){
        this.Termtype[st+i]=sub.Termtype[i];
        this.inTerm[st+i]=sub.inTerm[i];
        this.outTerm[st+i]=sub.outTerm[i];
        this.symComplete[st+i]=sub.symComplete[i];
    }
    this.toknum=st+sub.toknum;
    this.divPointTrace();
};
    
MathTOUCH.middleEX.prototype.isDividable = function(str){
    if(str.length<=1) return false;
    else if(str.charAt(1)=='@') return false;
    var cc=str.charCodeAt(0);
    if(cc<'A'.charCodeAt(0)){return false;}
    else if(cc<'['.charCodeAt(0)){return true;}
    else if(cc<'a'.charCodeAt(0)){return false;}
    else if(cc<'{'.charCodeAt(0)){return true;}
    else{return false;}
};

MathTOUCH.middleEX.prototype.makeEXtree = function(spt,ept){
		var ans=null;
		var temp=null;
		var temp2=null;
		var temp3=null;
		var j;
        if(spt==ept){
            ans=null;
        }else if(spt+1==ept){
            if(this.Termtype[spt]==MathTOUCH.NUM){
                ans=new NumberEXT(0, this.outTerm[spt]);
            }else if(this.Termtype[spt]==MathTOUCH.VAR){
				if(this.inTerm[spt]==" "){
                    ans=new EmptyEXT( this.outTerm[spt]);
                }else{
                    var tmptype=KTB.getTypeWD(this.inTerm[spt],this.outTerm[spt]);
                    if(tmptype<0) ans=new VariableEXT(0,this.outTerm[spt],this.inTerm[spt]);
                    else if(tmptype==MathTOUCH.SYM) ans=new SymbolEXT(0,this.outTerm[spt],this.inTerm[spt]);
                    else ans=new VariableEXT(0,this.outTerm[spt],this.inTerm[spt]);
                }
                
            }else if(this.Termtype[spt]==MathTOUCH.SYM){
                ans=new SymbolEXT(0, this.outTerm[spt],this.inTerm[spt]);
            }else if(this.Termtype[spt]==MathTOUCH.XTML){
                ans=new EXtree0( 0,MathTOUCH.XTML,this.outTerm[spt],this.inTerm[spt]);
            }else if(this.Termtype[spt]==MathTOUCH.TXT){
                ans=new EXtree0( 2,MathTOUCH.TXT,this.outTerm[spt],this.inTerm[spt]);
            }else if(this.Termtype[spt]==MathTOUCH.MAT){
                ans=null;alert("makeEXtree error (not Matrix) in middleEX");return ans;
            }else{
				var inlen=this.inTerm[spt].length;
				if(inlen>1 && this.isDividable(this.inTerm[spt])){
					DIC.setDicE(0);
					var sub=new MathTOUCH.middleEX(100);
					sub.extransPart0(this.inTerm[spt]);
					ans=sub.makeEXtree(0,sub.toknum);
					if(ans==null){
                    }
				}
				else{
                    var key=OTB.theNumberOf(this.outTerm[spt]);
                    var type=this.Termtype[spt];
                    if(type==MathTOUCH.OP1A ||type==MathTOUCH.OP1B||type==MathTOUCH.OP1P){
                        ans=new EXtree1( 0,key,OTB.getFirstOrder(key,this.Termtype[spt]),new EmptyEXT( ""),this.inTerm[spt]);
                    }
                    else if(type==MathTOUCH.OP2C||type==MathTOUCH.OP2P){
                        ans=new EXtree2( 0,key,OTB.getFirstOrder(key,this.Termtype[spt]),new EmptyEXT( ""),new EmptyEXT( ""),this.inTerm[spt]);
                    }
                    else if(type==MathTOUCH.OP3P||type==MathTOUCH.OP3T){
                        ans=new EXtree1( 0,key,OTB.getFirstOrder(key,this.Termtype[spt]),new EmptyEXT( ""),new EmptyEXT( ""),new EmptyEXT( ""),this.inTerm[spt]);
                    }
                    else ans=null;
					
				}
			}
			if(ans!=null){
				if(spt==this.scp && !this.symComplete[spt]){
                    ans.setBaseColor(4);
                }else{
					ans.clearBaseColor();
                    if(this.symComplete[spt]){
                        ans.state=2;
                    }
				}
			}
		}
		else{
			var eqkey=OTB.theNumberOf("=");
			var bra=0;
			var k=-1;
			var foundOP2C=false;
			for(j=spt;j<ept;j++){
				if(this.outTerm[j]=="("){ bra++;if(k<0) k=j;}
				else if(this.outTerm[j]=="{"){ bra++;if(k<0) k=j;}
				else if(this.outTerm[j]=="["){ bra++;if(k<0) k=j;}
				else if(this.outTerm[j]==")"){ bra--;if(bra<0) break;if(bra==0) k=-1;}				else if(this.outTerm[j]=="}"){ bra--;if(bra<0) break;if(bra==0) k=-1;}
				else if(this.outTerm[j]=="]"){ bra--;if(bra<0) break;if(bra==0) k=-1;}
                else if(this.outTerm[j]=="matBegin"){
                    while(this.outTerm[j]!="matEnd"){
                        j++;
                        if(j>=ept){alert("matEnd error in bracket check in middleEX");
                            return;}
                    }
                }
			}
			if(j>=spt && j<ept){
				if(bra<0){
					if(j==spt){
                        temp=new EXtree1( 0,OTB.theNumberOf(this.outTerm[j]),0,new EmptyEXT( ""),this.inTerm[j]);
                        ans=this.make1EXtree(temp,j+1,ept);
					}
					else if(j+1<ept){
						temp=this.makeEXtree(spt,j);
						if(temp==null){
                            if(this.errnum>0) this.error[this.errnum-1]="片括弧内部"+this.error[this.errnum-1];
							ans=null;
						}
						else{
							ans=this.make1EXtree(new EXtree1( 0,OTB.theNumberOf(this.outTerm[j]),0,temp,this.inTerm[j]),j+1,ept);
						}
					}
					else{
						temp=this.makeEXtree(spt,j);
						if(temp==null){
							if(this.errnum>0) this.error[this.errnum-1]="片括弧内部"+this.error[this.errnum-1];
							ans=null;
						}
						else ans=new EXtree1( 0,OTB.theNumberOf(this.outTerm[j]),0,temp,this.inTerm[j]);
					}
				}
				else{
					if(j==spt){
						temp=this.makeEXtree(j+1,ept);
						if(temp==null){
							if(this.errnum>0) this.error[this.errnum-1]="括弧内部"+this.error[this.errnum-1];
							ans=null;
						}
						else ans=new EXtree1( 0,eqkey,0,temp,this.inTerm[j]);
					}
					else if(j+1<ept){
						temp=this.makeEXtree(spt,j);
						if(temp==null){
							if(this.errnum>0) this.error[this.errnum-1]="左辺"+this.error[this.errnum-1];
							temp2=this.makeEXtree(j+1,ept);
							if(temp2==null) if(this.errnum>0) this.error[this.errnum-1]="右辺"+this.error[this.errnum-1];
							ans=null;
						}
						else{
							temp2=this.makeEXtree(j+1,ept);
							if(temp2==null){
								if(this.errnum>0) this.error[this.errnum-1]="右辺"+this.error[this.errnum-1];
								ans=null;
							}
							else{
								ans=new EXtree2( 0,eqkey,0,temp,temp2,this.inTerm[j]);
							}
						}
					}
					else{
						temp=this.makeEXtree(spt,j);
						if(temp==null){
							temp2=this.makeEXtree(j,ept);
							if(temp2==null) if(this.errnum>0) this.error[this.errnum-1]="括弧"+this.error[this.errnum-1];
							ans=null;
						}
						else{
							temp2=this.makeEXtree(j,ept);
							if(temp2==null){
								if(this.errnum>0) this.error[this.errnum-1]="括弧"+this.error[this.errnum-1];
								ans=null;
							}
							ans=new EXtree2( 0,MathTOUCH.SP,0,temp,temp2," ");
						}
					}
				}
			}
			else if(this.Termtype[spt] ==MathTOUCH.XTML){
				var ans2=new EXtree0( 0,MathTOUCH.XTML,this.outTerm[spt],this.inTerm[spt]);
				ans=this.make1EXtree(ans2,spt+1,ept);
				if(spt==this.scp && !this.symComplete[spt]){
                    ans2.setBaseColor(4);
                }
				else{
                    ans2.clearBaseColor();
                }

			}
			else if(this.Termtype[spt] ==MathTOUCH.TXT){ 
				ans=this.make1EXtree(new EXtree0( 2,MathTOUCH.TXT,this.outTerm[spt],this.inTerm[spt]),spt+1,ept);
			}
			else if(this.Termtype[spt] ==MathTOUCH.OP1P){
                temp=this.makeEXtree(spt+1,ept);
				if(temp==null) ans=null;
                else{
                    var key=OTB.theNumberOf(this.outTerm[spt]);
                    var ord;
                    for(ord=0;ord<OTB.getOpeLength(key);ord++){
                        if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P) break;
                    }
                    if(ord<OTB.getOpeLength(key)){
                        ans=new EXtree1( 0,key,ord,temp,this.inTerm[spt]);
                    }
                    else{
                        ans=new EXtree1( 0,OTB.theNumberOf(this.outTerm[spt]),0,temp.copy(),this.inTerm[spt]);
                        console.log("makeEXtree error not OP1P:"+this.outTerm[spt]);
                    }
                }
			}
			else if(this.Termtype[spt] ==MathTOUCH.OP2P){
				if(spt+2>=ept){
                    ans=this.makeEXtree(spt+1,ept);
                    if(ans!=null){
                        temp=ans.reMakeTree();
                        if(temp!=null){
                            temp2=ans.getLastSpacedTerm();
                            if(temp2!=null){
                                var key=OTB.theNumberOf(this.outTerm[spt]);
                                var ord=OTB.getFirstOrder(key,MathTOUCH.OP2P);if(ord<0) ord=0;
                                if(temp2.parent==ans){
                                    ans=new EXtree2( 0,key,ord,temp2.parent.ch[0].copy(),temp2.copy(),this.inTerm[spt]);
                                }
                                else{
                                    temp2.parent.parent.add(temp2.parent.pnum,temp2.parent.ch[0].copy());
                                    ans=new EXtree2( 0,key,ord,ans.copy(),temp2.copy(),this.inTerm[spt]);
                                }
                                return ans;
                            }
                        }
                    }
                    ans=null;
					this.error[this.errnum++]="【Error】前置二項演算子"+this.inTerm[spt]+"の後に２つの作用範囲がありません。";
					return ans;
				}
				for(j=spt+2;j<ept;j++) if(this.divPoint[j]) break;
                if(j<ept){
                    temp=this.makeEXtree(spt+1,j);
                    while(temp==null&&j<ept){
                        for(j++;j<ept;j++) if(this.divPoint[j]){
                            temp=this.makeEXtree(spt+1,j);
                            break;
                        }
                    }
                    if(temp==null||j==ept) ans=null;
                    else{
                        temp2=this.makeEXtree(j,ept);
                        if(temp2==null) ans=null;
                        else{
                            var key=OTB.theNumberOf(this.outTerm[spt]);
                            var ord=OTB.getFirstOrder(key,MathTOUCH.OP2P);if(ord<0) ord=0;
                            ans=new EXtree2( 0,key,ord,temp,temp2,this.inTerm[spt]);
                        }
                    }
                    return ans;
                }
                for(j=spt+2;j<ept;j++) if(this.Termtype[j]==MathTOUCH.OP2C || this.Termtype[j]==MathTOUCH.OP1A ){
                    var key=0;
                    var ord;
                    ans=null;
                    key=OTB.theNumberOf(this.outTerm[j]);
                    for(ord=0;ord<OTB.getOpeLength(key);ord++){
                        if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P){
                            temp=this.makeEXtree(spt+1,j);
                            temp2=this.makeEXtree(j,ept);
                            if(temp==null||temp2==null){ ans=null;}
                            else{
                                var key0=OTB.theNumberOf(this.outTerm[spt]);
                                var ord0=OTB.getFirstOrder(key0,MathTOUCH.OP2P);if(ord0<0) ord0=0;
                                ans=new EXtree2( 0,key0,ord0,temp,temp2,this.inTerm[spt]);
                                break;
                            }
                        }
                    }
                    if(ans!=null) return ans;
                    key=OTB.theNumberOf(this.outTerm[j]);
                    for(ord=0;ord<OTB.getOpeLength(key);ord++){
                        if(OTB.getOpeType(key,ord)==MathTOUCH.OP1A ){
                            temp=this.makeEXtree(spt+1,j);
                            temp2=this.makeEXtree(j+1,ept);
                            if(temp==null||temp2==null){ ans=null;}
                            else{
                                var key0=OTB.theNumberOf(this.outTerm[spt]);
                                var ord0=OTB.getFirstOrder(key0,MathTOUCH.OP2P);if(ord0<0) ord0=0;
                                ans=new EXtree2( 0,key0,ord0,new EXtree1( 0,key,ord,temp,this.inTerm[j]),temp2,this.inTerm[spt]);
                                break;
                            }
                        }
                    }
                    if(ans!=null) return ans;
                }
                ans=this.makeEXtree(spt+1,ept);
                if(ans!=null){
                    temp=ans.reMakeTree();
                    if(temp!=null){
                        temp2=ans.getLastSpacedTerm();
                        if(temp2!=null){
                            var key0=OTB.theNumberOf(this.outTerm[spt]);
                            var ord0=OTB.getFirstOrder(key0,MathTOUCH.OP2P);if(ord0<0) ord0=0;
                            if(temp2.parent==ans) ans=new EXtree2( 0,key0,ord0,temp2.parent.ch[0].copy(),temp2.copy(),this.inTerm[spt]);
                            else{
                                temp2.parent.parent.add(temp2.parent.pnum,temp2.parent.ch[0].copy());
                                ans=new EXtree2( 0,key0,ord0,ans.copy(),temp2.copy(),this.inTerm[spt]);
                            }
                            return ans;
                        }
                    }
                }
                ans=null;
                this.error[this.errnum++]="【Error】前置二項演算子"+this.inTerm[spt]+"の後に２つの作用範囲がありません。";
                return ans;
			}
			else if(this.Termtype[spt] ==MathTOUCH.OP3P){
				if(spt+3>=ept){
                    ans=null;
					this.error[this.errnum++]="【Error1】前置三項演算子"+this.inTerm[spt]+"の後に３つの作用範囲がありません。";
					return ans;
				}
				for(j=spt+2;j<ept;j++) if(this.divPoint[j]) break;
				if(j+1>=ept){
                    for(j=spt+2;j<ept-1;j++) if(this.Termtype[j]==MathTOUCH.OP2C || this.Termtype[j]==MathTOUCH.OP1A ){
                        var key=0;
                        var ord;
                        ans=null;
                        key=OTB.theNumberOf(this.outTerm[j]);
                        for(ord=0;ord<OTB.getOpeLength(key);ord++){
                            if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P){
                                temp=this.makeEXtree(spt+1,j);
                                var j2;
                                for(j2=j+1;j2<ept;j2++) if(this.divPoint[j2]) break;
                                if(j2<ept){
                                    temp2=this.makeEXtree(j,j2);
                                    temp3=this.makeEXtree(j2,ept);
                                    if(temp==null||temp2==null||temp3==null){ ans=null;}
                                    else{
                                        var key0=OTB.theNumberOf(this.outTerm[spt]);
                                        var ord0=OTB.getFirstOrder(key0,this.Termtype[spt]);if(ord0<0) ord0=0;
                                        ans=new EXtree3( 0,key0,ord0,temp,temp2,temp3,this.inTerm[spt]);
                                        break;
                                    }
                                }
                                else{
                                    ans=null;
                                }
                            }
                        }
                        if(ans!=null) return ans;
                        key=OTB.theNumberOf(this.outTerm[j]);
                        for(ord=0;ord<OTB.getOpeLength(key);ord++){
                            if(OTB.getOpeType(key,ord)==MathTOUCH.OP1A ){
                                temp=this.makeEXtree(spt+1,j);
                                var j2;
                                for(j2=j+2;j2<ept;j2++) if(this.divPoint[j2]) break;
                                if(j2<ept){
                                    temp2=this.makeEXtree(j+1,j2);
                                    temp3=this.makeEXtree(j2,ept);
                                    if(temp==null||temp2==null||temp3==null){ ans=null;}
                                    else{
                                        var key0=OTB.theNumberOf(this.outTerm[spt]);
                                        var ord0=OTB.getFirstOrder(key0,this.Termtype[spt]);if(ord0<0) ord0=0;
                                        ans=new EXtree3( 0,key0,ord0,new EXtree1( 0,key,ord,temp,this.inTerm[j]),temp2,temp3,this.inTerm[spt]);
                                        break;
                                    }
                                }
                                else{
                                    ans=null; 
                                }
                            }
                        }
                        if(ans!=null) return ans;
                    }
                    
                    ans=null;
					this.error[this.errnum++]="【Error2】前置三項演算子"+this.inTerm[spt]+"の後に３つの作用範囲がありません。";
					return ans;
				}
                temp=this.makeEXtree(spt+1,j);
                while(temp==null&&j<ept){
                    for(j++;j<ept;j++) if(this.divPoint[j]){
                        temp=this.makeEXtree(spt+1,j);
                        break;
                    }
                }
                if(temp==null||j==ept) return null;
				var j2;
				for(j2=j+1;j2<ept;j2++) if(this.divPoint[j2]) break;
				if(j2==ept){
                    ans=this.makeEXtree(j,ept);
                    if(ans!=null){
                        temp2=ans.reMakeTree();
                        if(temp2!=null){
                            temp3=ans.getLastSpacedTerm();
                            if(temp3!=null){
                                var key0=OTB.theNumberOf(this.outTerm[spt]);
                                var ord0=OTB.getFirstOrder(key0,this.Termtype[spt]);if(ord0<0) ord0=0;
                                if(temp3.parent==ans) ans=new EXtree3( 0,key0,ord0,temp,temp3.parent.ch[0].copy(),temp3.copy(),this.inTerm[spt]);
                                else{
                                    temp3.parent.parent.add(temp3.parent.pnum,temp3.parent.ch[0].copy());
                                    ans=new EXtree3( 0,key0,ord0,temp,ans.copy(),temp3.copy(),this.inTerm[spt]);
                                }
                                return ans;
                            }
                        }
                    }
                    ans=null;
					this.error[this.errnum++]="【Error3】前置三項演算子"+this.inTerm[spt]+"の後に３つの作用範囲がありません。"; 
					return ans;
				}
				temp2=this.makeEXtree(j,j2);
                while(temp2==null&&j2<ept){
                    for(j2++;j2<ept;j2++) if(this.divPoint[j2]){
                        temp2=this.makeEXtree(j,j2);
                        break;
                    }
                }
                if(temp2==null||j2==ept) return null;
				temp3=this.makeEXtree(j2,ept);
				if(temp3==null) ans=null;
                else{
                    var key0=OTB.theNumberOf(this.outTerm[spt]);
                    var ord0=OTB.getFirstOrder(key0,this.Termtype[spt]);if(ord0<0) ord0=0;
                    ans=new EXtree3( 0,key0,ord0,temp,temp2,temp3,this.inTerm[spt]);
                }
			}
			else if(this.Termtype[spt]==1||this.Termtype[spt]==2||this.Termtype[spt]==3
                    ||(this.Termtype[spt]==MathTOUCH.MAT&&this.outTerm[spt]=="matBegin")){
                var npt=spt+1;
                if(this.Termtype[spt]==MathTOUCH.MAT){
                    while(this.outTerm[npt]!="matEnd"){
                        npt++;
                        if(npt>=ept){alert("matEnd error in middleEX");return null;}
                    }
                    npt++;
                    temp=this.makeMAT(spt,npt);
                    if(npt==ept){ans=temp;return ans;}
                }
                else temp=this.makeEXtree(spt,npt);
				if(this.Termtype[npt]<=3 || this.Termtype[npt]==MathTOUCH.XTML || this.Termtype[npt]==MathTOUCH.TXT || this.Termtype[npt]==MathTOUCH.MAT){
					temp2=this.makeEXtree(npt,ept);
					if(temp==null||temp2==null) ans=null;
					else ans=new EXtree2( 0,MathTOUCH.SP,0,temp,temp2," ");
				}
				else if(this.Termtype[npt]==MathTOUCH.OP2C){
					var key=0;
					var ord;
					if(npt+1<ept){
					  if(this.Termtype[npt+1]==MathTOUCH.OP2C || this.Termtype[npt+1]==MathTOUCH.OP1A ){
						ans=null;
						  key=OTB.theNumberOf(this.outTerm[npt+1]);
						  for(ord=0;ord<OTB.getOpeLength(key);ord++){
							  if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P){
								  temp2=this.makeEXtree(npt+1,ept);
								  if(temp==null||temp2==null){ ans=null;}
                                  else{
                                      var key0=OTB.theNumberOf(this.outTerm[npt]);
                                      var ord0=OTB.getFirstOrder(key0,this.Termtype[npt]);if(ord0<0) ord0=0;
                                      ans=new EXtree2( 0,key0,ord0,temp,temp2,this.inTerm[npt]);
                                  }
								  return ans;
							  }
						  }
						key=OTB.theNumberOf(this.outTerm[npt]);
						for(ord=0;ord<OTB.getOpeLength(key);ord++){
							if(OTB.getOpeType(key,ord)==MathTOUCH.OP1A ){
								if(temp==null){ ans=null;return ans;}
								else ans=this.make1EXtree(new EXtree1( 0,key,ord,temp,this.inTerm[npt]),spt+2,ept);
								break;
							}
						}
						if(ans==null){
							temp2=this.makeEXtree(spt+2,ept);
							if(temp==null||temp2==null) ans=null;
                            else{
                                var key0=OTB.theNumberOf(this.outTerm[npt]);
                                var ord0=OTB.getFirstOrder(key0,this.Termtype[npt]);if(ord0<0) ord0=0;
                                ans=new EXtree2( 0,key0,ord0,temp,temp2,this.inTerm[npt]);
                            }
						}
					  }
					  else{
						  temp2=this.makeEXtree(npt+1,ept);
						  if(temp==null||temp2==null) ans=null;
                          else{
                              var key0=OTB.theNumberOf(this.outTerm[npt]);
                              var ord0=OTB.getFirstOrder(key0,this.Termtype[npt]);if(ord0<0) ord0=0;
                              ans=new EXtree2( 0,key0,ord0,temp,temp2,this.inTerm[npt]);
                          }
					  }
					}
					else{
						ans=null;
						for(ord=0;ord<OTB.getOpeLength(key);ord++){
							if(OTB.getOpeType(key,ord)==MathTOUCH.OP1A ){
								if(temp==null){ans=null;return ans;}
								else ans=new EXtree1( 0,key,ord,temp,this.inTerm[npt]);
								break;
							}
						}
						if(ans==null){
							this.error[this.errnum++]="【Error】二項演算子"+this.inTerm[npt]+"の後に作用範囲がありません。";
                            key=OTB.theNumberOf(this.outTerm[npt]);
                            ord=0;
                            ans=new EXtree2( 0,key,ord,temp,new EmptyEXT( ""),this.inTerm[npt]);
						}
					}
				}
				else if(this.Termtype[npt]==MathTOUCH.OP3T){
					var key=OTB.theNumberOf(this.outTerm[npt]);
					var ord;
					if(npt+2<ept){
						if(this.divPoint[npt+2]){
							temp=this.makeEXtree(npt+1,npt+2);
							temp2=this.makeEXtree(spt,npt);
							temp3=this.makeEXtree(npt+2,ept);
							if(temp==null||temp2==null||temp3==null) ans=null;
							else ans=new EXtree3( 0,key,0,temp,temp2,temp3,this.inTerm[npt]);
						}
						else if(npt+3<ept){
							if(this.divPoint[npt+3]){
								temp=this.makeEXtree(npt+1,npt+3);
								temp2=this.makeEXtree(spt,npt);
								temp3=this.makeEXtree(npt+3,ept);
								if(temp==null||temp2==null||temp3==null) ans=null;
								else ans=new EXtree3( 0,key,0,temp,temp2,temp3,this.inTerm[npt]);
							}
							else{
								var key2=OTB.theNumberOf(this.outTerm[npt+2]);
								ans=null;
								for(ord=0;ord<OTB.getOpeLength(key2);ord++){
									if(OTB.getOpeType(key2,ord)==MathTOUCH.OP1P){
										temp=this.makeEXtree(npt+1,npt+2);
										temp2=this.makeEXtree(spt,npt);
										temp3=this.makeEXtree(npt+3,ept);
										if(temp==null||temp2==null||temp3==null){ ans=null;return ans;}
										else ans=new EXtree3( 0,key,0,temp,temp2,new EXtree1( 0,key2,ord,temp3,this.inTerm[npt+2]),this.inTerm[npt]);
										break;
									}
								}
								if(ans==null){
									var jj=4;
									while(npt+jj<ept){
										if(this.divPoint[npt+jj]){
											temp=this.makeEXtree(npt+1,npt+jj);
											temp2=this.makeEXtree(spt,npt);
											temp3=this.makeEXtree(npt+jj,ept);
											if(temp==null||temp2==null||temp3==null){ ans=null;return ans;}
											else ans=new EXtree3( 0,key,0,temp,temp2,temp3,this.inTerm[npt]);
											break;
										}
										jj++;
									}
									if(ans==null){
										this.error[this.errnum++]="【Error】内挿三項演算子"+this.inTerm[npt]+"の後に２つの作用範囲がありません。";
									}
								}
							}
						}
						else{
                            ans=null;
							this.error[this.errnum++]="【Error】内挿三項演算子"+this.inTerm[npt]+"の後に２つの作用範囲がありません。";
						}
					}
					else{ans=null;
						this.error[this.errnum++]="【Error】内挿三項演算子"+this.inTerm[npt]+"の後に２つの作用範囲がありません。";
					}
				}
				else if(this.outTerm[npt]=="("||this.outTerm[npt]=="{"||this.outTerm[npt]=="["){
					temp2=this.makeEXtree(npt,ept);
					if(temp==null||temp2==null) ans=null;
					else ans=new EXtree2( 0,MathTOUCH.SP,0,temp,temp2," ");
                }
				else if(this.Termtype[npt]==MathTOUCH.OP1P||this.Termtype[npt]==MathTOUCH.OP2P||this.Termtype[npt]==MathTOUCH.OP3P){					if(npt+1<ept){
						temp2=this.makeEXtree(npt,ept);
						if(temp==null||temp2==null) ans=null;
						else ans=new EXtree2( 0,MathTOUCH.SP,0,temp,temp2," ");
					}
					else{
						temp2=this.makeEXtree(npt,ept);
						if(temp==null||temp2==null) ans=null;
						else ans=new EXtree2( 0,MathTOUCH.SP,0,temp,temp2," ");
					}
				}
				else if(this.Termtype[npt]==MathTOUCH.OP1A ){
					if(npt+1<ept){
						if(temp==null) ans=null;
						else{ ans=this.make1EXtree(new EXtree1( 0,OTB.theNumberOf(this.outTerm[npt]),0,temp,this.inTerm[npt]),npt+1,ept);
                        }
					}
					else{
						if(temp==null) ans=null;
						else{ ans=new EXtree1( 0,OTB.theNumberOf(this.outTerm[npt]),0,temp,this.inTerm[npt]);
                        }
					}
				}
				else{
					ans=new VariableEXT(0, this.outTerm[spt],this.inTerm[spt]);
				}
			}
			else if(this.Termtype[spt]==MathTOUCH.OP1B){
				var BL=this.outTerm[spt];
				var BR="",BR2="",BR3="";
				if(spt+1==ept) BR="";
				else if(BL=="("){ BR=")";BR2="]";BR3="}";}
				else if(BL=="{"){ BR="}";BR2="]";BR3=")";}
				else if(BL=="["){ BR="]";BR2=")";BR3="}";}
                else{
                    temp=new EXtree1( 0,OTB.theNumberOf(this.outTerm[spt]),0,new EmptyEXT( ""),this.inTerm[spt]);
                    ans=this.make1EXtree(temp,spt+1,ept);
                    return ans;
                }
				bra=1;
					for(j=spt+1;j<ept;j++){
						if(this.outTerm[j]==BL) bra++;
						else if(this.outTerm[j]==BR){bra--;if(bra==0) break;}
                        else if(this.outTerm[j]=="matBegin"){
                            while(this.outTerm[j]!="matEnd"){
                                j++;
                                if(j>=ept){alert("matEnd error in ()");return;}
                            }
                        }
					}
					if(j==spt+1){
						if(j+1<ept){
							var tempans=new EXtree1( 0,OTB.theNumberOf(BL+BR),0,new EmptyEXT( ""),BL+BR);
							tempans.setComplete();
							ans=this.make1EXtree(tempans,j+1,ept);
						}
						else{ans=new EXtree1( 0,OTB.theNumberOf(BL+BR),0,new EmptyEXT( ""),BL+BR);ans.setComplete();
						}
					}
					else if(j<ept){
						if(j+1<ept){
							temp=this.makeEXtree(spt+1,j);
							if(temp==null){
								ans=null;
								if(this.errnum>0) this.error[this.errnum-1]="括弧内部:"+this.error[this.errnum-1];
							}
							else ans=this.make1EXtree(new EXtree1( 0,OTB.theNumberOf(BL+BR),0,temp,BL+BR),j+1,ept);
						}
						else{
							temp=this.makeEXtree(spt+1,j);
							if(temp==null){
								ans=null;
								if(this.errnum>0) this.error[this.errnum-1]="括弧内部"+this.error[this.errnum-1];
							}
							else ans=new EXtree1( 0,OTB.theNumberOf(BL+BR),0,temp,BL+BR);
						}
					}
                    else{
                        for(j=ept-1;j>spt;j--){
                            if(this.outTerm[j]==BR2){BR=BR2; break;}
                            else if(this.outTerm[j]==BR3){BR=BR3; break;}
                            else if(this.outTerm[j]=="matEnd"){
                                while(!this.outTerm[j]=="matBegin"){
                                    j--;
                                    if(j<=spt){alert("matEnd error in ()");/*exit*/}
                                }
                            }
                        }
                        if(j==ept-1){
                            temp=this.makeEXtree(spt+1,j);
							if(temp==null){
								ans=null;
								if(this.errnum>0) this.error[this.errnum-1]="括弧内部:"+this.error[this.errnum-1];
							}
							else ans=new EXtree1(0,OTB.theNumberOf(BL+BR),0,temp,BL+BR);
                        }
                        else if(j>spt){
                            temp=this.makeEXtree(spt+1,j);
							if(temp==null){
								ans=null;
								if(this.errnum>0) this.error[this.errnum-1]="括弧内部:"+this.error[this.errnum-1];
							}
							else ans=this.make1EXtree(new EXtree1(0,OTB.theNumberOf(BL+BR),0,temp,BL+BR),j+1,ept);
                        }
                        else{
                            temp=this.makeEXtree(spt+1,ept);
                            if(temp==null){
                                ans=null;
                                if(this.errnum>0) this.error[this.errnum-1]="左片括弧内部"+this.error[this.errnum-1];
                            }
                            else ans=new EXtree1(0,OTB.theNumberOf(BL),0,temp,BL);
                        }
                    }
			}
			else if(this.Termtype[spt]==MathTOUCH.OP2C){
				var key;
				var ord;
				if(this.outTerm[spt]=="|"){
					var BL="|";
					var BR="|";
					ord=2;
					bra=1;
					for(j=spt+1;j<ept;j++){
						if(this.outTerm[j]==BR){bra--;if(bra==0) break;}
						else if(this.outTerm[j]==BL) bra++;
					}
					if(j==spt+1){
						if(j+1<ept){
							var tempans=new EXtree1( 0,OTB.theNumberOf("[]"),ord,new EmptyEXT( ""),"[]");
							ans=this.make1EXtree(tempans,j+1,ept);
						}
						else{ans=new EXtree1( 0,OTB.theNumberOf("[]"),ord,new EmptyEXT( ""),"[]");
						}
					}
					else if(j<ept){
						if(j+1<ept){
							temp=this.makeEXtree(spt+1,j);
							if(temp==null) ans=null;
							else ans=this.make1EXtree(new EXtree1( 0,OTB.theNumberOf("[]"),ord,temp,"[]"),j+1,ept);
						}
						else{
							temp=this.makeEXtree(spt+1,j);
							if(temp==null) ans=null;
							else ans=new EXtree1( 0,OTB.theNumberOf("[]"),ord,temp,"[]");
						}
					}
					else{
						key=OTB.theNumberOf(this.outTerm[spt]);
						for(ord=0;ord<OTB.getOpeLength(key);ord++){
							if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P) break;
						}
						if(ord<OTB.getOpeLength(key)){
							temp=this.makeEXtree(spt+1,ept);
							if(temp==null) ans=null;
							else ans=new EXtree1( 0,key,ord,temp,this.inTerm[spt]);
						}
						else {ans=null;
							this.error[this.errnum++]="【Error】演算子|の前に作用範囲がありません。";
						}
					}
				}
				else{
					key=OTB.theNumberOf(this.outTerm[spt]);
					for(ord=0;ord<OTB.getOpeLength(key);ord++){
						if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P) break;
					}
					if(ord<OTB.getOpeLength(key)){
						temp=this.makeEXtree(spt+1,ept);
						if(temp==null) ans=null;
						else ans=new EXtree1( 0,key,ord,temp,this.inTerm[spt]);
					}
					else {
                        temp=this.makeEXtree(spt+1,ept);
						if(temp==null) ans=new EXtree2( 0,OTB.theNumberOf(this.outTerm[spt]),0,new EmptyEXT( ""),new EmptyEXT( ""),this.inTerm[spt]);
						else
                        ans=new EXtree2( 0,OTB.theNumberOf(this.outTerm[spt]),0,new EmptyEXT( ""),temp,this.inTerm[spt]);
						this.error[this.errnum++]="【Error】二項演算子"+this.inTerm[spt]+"の前に作用範囲がありません。";
					}
				}
			}
			else if(this.Termtype[spt]==MathTOUCH.OP3T){
				ans=null;
				this.error[this.errnum++]="【Error】内挿三項演算子"+this.inTerm[spt]+"の前に作用範囲がありません。";
            }
			else{
				temp=this.makeEXtree(spt,spt+1);
				temp2=this.makeEXtree(spt+1,ept);
				if(temp==null||temp2==null) ans=null;
				else ans=new EXtree2( 0,MathTOUCH.SP,0,temp,temp2," ");
			}
		}
		return ans;
};

MathTOUCH.middleEX.prototype.makeMAT = function(spt,ept){
        var ans=null;
        var temp=null;
        if(this.outTerm[spt]!="matBegin"||this.outTerm[ept-1]!="matEnd") return ans;
        var mpt=new Array();
        var mnum=0;
        var rownum=0,colnum=0;
        var row=0;
        var col=0;
        var j;
        for(j=spt+1;j<ept-1;j++){
            if(this.outTerm[j]=="\u27B1"){col++;mpt[mnum++]=j;}
            else if(this.outTerm[j]=="\u23cE"){
                row++;
                mpt[mnum++]=j;
                col++;
                if(col>colnum) colnum=col;
                col=0;
            }
        }
        rownum=row+1;
        col++;if(col>colnum) colnum=col;
        if(mnum>0){
            var elem=new Array();
            for(var i=0;i<rownum*colnum;i++) elem[i]=null;
            row=0;col=0;j=spt+1;
            for(var i=0;i<mnum;i++){
                if(j<mpt[i]){
                    temp=this.makeEXtree(j,mpt[i]);
                    if(temp==null){
                        if(this.errnum>0) this.error[this.errnum-1]=(row+1)+"行"+(col+1)+"列目"+this.error[this.errnum-1];
                        ans=null;
                        return ans;
                    }
                    else{
                        elem[row*colnum+col]=temp;
                        if(this.outTerm[mpt[i]]=="\u27B1") col++;
                        else if(this.outTerm[mpt[i]]=="\u23cE"){col=0;row++;}
                        j=mpt[i]+1;
                    }
                }
                else{
                    elem[row*colnum+col]=new EmptyEXT( "");
                    if(this.outTerm[mpt[i]]=="\u27B1") col++;
                    else if(this.outTerm[mpt[i]]=="\u23cE"){col=0;row++;}
                    j=mpt[i]+1;
                }
            }
            if(j<ept){
                if(j<ept-1){
                    temp=this.makeEXtree(j,ept-1);
                    if(temp==null){
                        if(this.errnum>0) this.error[this.errnum-1]=(row+1)+"行"+(col+1)+"列目"+this.error[this.errnum-1];
                        ans=null;
                        return ans;
                    }
                    else{
                        elem[row*colnum+col]=temp;
                    }
                }
                else{
                    elem[row*colnum+col]=new EmptyEXT( "");
                }
            }
            ans=new EXtreeMat0(0,rownum,colnum,elem,"MAT");
        }
        return ans;
};
	
MathTOUCH.middleEX.prototype.make1EXtree = function(f,spt,ept){
    var ans;
    var temp=null;
    var temp2=null;
    var temp3=null;
    if(f==null){
        return(this.makeEXtree(spt,ept));
    }
    if(spt==ept){ans=f;}
    else if(spt+1==ept){
			if(this.Termtype[spt]==MathTOUCH.OP1A ){
				ans=new EXtree1( 0,OTB.theNumberOf(this.outTerm[spt]),0,f,this.inTerm[spt]);
			}
			else if(this.Termtype[spt]==MathTOUCH.OP2C){
				ans=null;
				var key=OTB.theNumberOf(this.outTerm[spt]);
				var ord;
				for(ord=0;ord<OTB.getOpeLength(key);ord++){
					if(OTB.getOpeType(key,ord)==MathTOUCH.OP1A ){ 
						ans=new EXtree1( 0,key,ord,f,this.inTerm[spt]);
						break;
					}
				}
				if(ans==null){
					this.error[this.errnum++]="【Error】演算子"+this.inTerm[spt]+"の後に作用範囲がありません。";
                    ans=new EXtree2( 0,OTB.theNumberOf(this.outTerm[spt]),0,f,new EmptyEXT( ""),this.inTerm[spt]);
				}
			}
            else if(this.Termtype[spt]==MathTOUCH.OP1B){
                if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                    ans=new EXtree1( 0,OTB.theNumberOf(this.outTerm[spt]),0,f,this.inTerm[spt]);
                }
                else ans=null;
			}
			else{
				temp=this.makeEXtree(spt,ept);
				if(temp==null) ans=null;
				else ans=new EXtree2( 0,MathTOUCH.SP,0,f,temp," ");
			}
		}
		else if(this.Termtype[spt]==MathTOUCH.OP2C){
			var key=OTB.theNumberOf(this.outTerm[spt]);
			var ord;
			if(this.Termtype[spt+1]==MathTOUCH.OP2C || this.Termtype[spt+1]==MathTOUCH.OP1A ){
				ans=null;
				for(ord=0;ord<OTB.getOpeLength(key);ord++){
					if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P){ 
						temp=this.makeEXtree(spt+1,ept);
						if(temp==null){ans=null;return ans;}
						else ans=new EXtree2( 0,MathTOUCH.SP,0,f,new EXtree1( 0,key,ord,temp,this.inTerm[spt])," ");
						break;
					}
					if(OTB.getOpeType(key,ord)==MathTOUCH.OP1A ){
						ans=this.make1EXtree(new EXtree1( 0,key,ord,f,this.inTerm[spt]),spt+1,ept);
						break;
					}
				}
				if(ans==null){
					temp=this.makeEXtree(spt+1,ept);
					if(temp==null) ans=null;
					else ans=new EXtree2( 0,key,0,f,temp,this.inTerm[spt]);
				}
			}
			else{
				temp=this.makeEXtree(spt+1,ept);
				if(temp==null) ans=null;
				else ans=new EXtree2( 0,key,0,f,temp,this.inTerm[spt]);
			}
		}
		else if(this.Termtype[spt] ==MathTOUCH.OP3T){
			var key=OTB.theNumberOf(this.outTerm[spt]);
			var ord;
			var j;
				if(spt+2>=ept){ans=null;
					this.error[this.errnum++]="【Error】内挿三項演算子"+this.inTerm[spt]+"の後に２つの作用範囲がありません。";
				}
				for(j=spt+2;j<ept;j++) if(this.divPoint[j]) break;
				if(j==ept){ans=null;
					this.error[this.errnum++]="【Error】内挿三項演算子"+this.inTerm[spt]+"の後に２つの作用範囲がありません。";
				}
			temp=this.makeEXtree(spt+1,j);
			temp2=this.makeEXtree(j,ept);
			if(temp==null||temp2==null) ans=null;
			else ans=new EXtree3( 0,key,0,temp,f,temp2,this.inTerm[spt]);
		}
		else if(this.Termtype[spt]==MathTOUCH.OP1A ){
				ans=this.make1EXtree(new EXtree1( 0,OTB.theNumberOf(this.outTerm[spt]),0,f,this.inTerm[spt]),spt+1,ept);
		}
		else if(this.Termtype[spt]==MathTOUCH.EMP||this.Termtype[spt]==MathTOUCH.NUM||this.Termtype[spt]==MathTOUCH.VAR||this.Termtype[spt]==MathTOUCH.SYM){
			temp=this.makeEXtree(spt,ept);
			if(temp==null) ans=null;
			else ans=new EXtree2( 0,MathTOUCH.SP,0,f,temp," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.XTML){
			temp=this.makeEXtree(spt,ept);
			if(temp==null) ans=null;
			else ans=new EXtree2( 0,MathTOUCH.SP,0,f,temp," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.TXT){ 
			temp=this.makeEXtree(spt,ept);
			if(temp==null) ans=null;
			else ans=new EXtree2( 0,MathTOUCH.SP,0,f,temp," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.MAT){
			temp=this.makeEXtree(spt,ept);
			if(temp==null) ans=null;
			else ans=new EXtree2( 0,MathTOUCH.SP,0,f,temp," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.OP1P){
			temp=this.makeEXtree(spt,ept);
			if(temp==null) ans=null;
			else ans=new EXtree2( 0,MathTOUCH.SP,0,f,temp," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.OP2P){
			temp=this.makeEXtree(spt,ept);
			if(temp==null) ans=null;
			else ans=new EXtree2( 0,MathTOUCH.SP,0,f,temp," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.OP3P){
			temp=this.makeEXtree(spt,ept);
			if(temp==null) ans=null;
			else ans=new EXtree2( 0,MathTOUCH.SP,0,f,temp," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.OP1B){
			if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                temp=this.makeEXtree(spt+1,ept);
                if(temp==null) ans=null;
                else ans=new EXtree2( 0,MathTOUCH.SP,0,new EXtree1( 0,OTB.theNumberOf(this.outTerm[spt]),0,f,this.inTerm[spt]),temp," ");
            }
            else{
                temp=this.makeEXtree(spt,ept);
                if(temp==null) ans=null;
                else ans=new EXtree2( 0,MathTOUCH.SP,0,f,temp," ");
            }
		}
		else{ans=null; alert("error make1EXtree!");
			this.error[this.errnum++]="【Error】演算子が不明です。";
		}
		return ans;
};

MathTOUCH.middleEX.prototype.remakeEXtree = function(f){
        this.toknum=0;
        this.errnum=0;
        this.extrans(f.getInputWord());
        return(this.makeEXtree(0,this.toknum));
};
	
MathTOUCH.middleEX.prototype.makeEXtreeFromEDIT = function(f){
        var ans;
		var temp=null;
		var temp2=null;
		var temp3=null;
		if(f==null) return(null);
		var edit=f.EDITpoint();
		if(edit==null) return null;
		if(edit.editbox.isEmpty()){
            return null;
        }
		var inputline=edit.editbox.getText();
        this.toknum=0;
		if(inputline==null) return null;
        this.extrans(inputline);
		var spt=0;
		var ept=this.toknum;
		if(spt==ept) ans=null;
		else if(spt+1==ept){
			if(this.Termtype[spt]==MathTOUCH.OP1A ||this.Termtype[spt]==MathTOUCH.OP2C||this.Termtype[spt]==MathTOUCH.OP1B){
				var key=OTB.theNumberOf(this.outTerm[spt]);
				var ord=0;
				ans=null;
				var bsp=edit.BSpoint();
				var arg1=null;
				if(bsp!=null){
					if(bsp==edit&&edit.parent.isSpaced()&&edit.pnum==1){
						arg1=edit.parent.ch[0];
						arg1.clearFrameColor();
						if(this.Termtype[spt]==MathTOUCH.OP1A ){
							edit.parent.change(new EXtree1( 0,key,ord,arg1.copy(),this.inTerm[spt]));
							ans=edit.parent;
						}
                        else if(this.Termtype[spt]==MathTOUCH.OP1B){
                            if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                                temp=this.make1EXtree(arg1.copy(),spt,ept);
                                if(temp==null) ans=null;
                                else{ 
                                    edit.parent.change(temp);
                                    ans=edit.parent;
                                }
                            }
                            else if(this.outTerm[spt]=="("||this.outTerm[spt]=="{"||this.outTerm[spt]=="["){
                                temp2=edit.parent.getRightParent();
                                if(temp2==null) ans=null;
                                else if(temp2.isSpaced()){
                                    temp=this.make2EXtree(spt,ept,temp2.ch[1].copy());
                                    if(temp==null) ans=null;
                                    else{ 
                                        temp2.add(1,temp);
                                        edit.parent.change(arg1);
                                        ans=edit.parent;
                                    }
                                }
                                else ans=null;
                            }
                            else ans=null;
                        }
						else{
							var pp=edit.parent.parent;
							if(pp!=null&&pp.isSpaced()&&edit.parent.pnum==0){
								pp.change(new EXtree2( 0,key,0,arg1.copy(),pp.ch[1].copy(),this.inTerm[spt]));
								ans=pp;
							}
							else{
								for(ord=0;ord<OTB.getOpeLength(key);ord++){
									if(OTB.getOpeType(key,ord)==MathTOUCH.OP1A ){ 
										temp=new EXtree1( 0,key,ord,arg1.copy(),this.inTerm[spt]);
										break;
									}
								}
								if(temp==null){
                                    temp=new EXtree2( 0,key,0,arg1.copy(),new EmptyEXT( ""),this.inTerm[spt]);
                                    edit.parent.change(temp);
									ans=edit.parent;
                                    this.error[this.errnum++]="【警告】演算子"+this.inTerm[spt]+"の後に空要素を挿入しました。";
                                }
								else{
									edit.parent.change(temp);
									ans=edit.parent;
								}
							}
						}
					}
					else if(bsp.parent!=null){
						if(edit.parent.isSpaced()){
                            if(this.Termtype[spt]==MathTOUCH.OP1B){
                                if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                                    if(bsp.parent.isSpaced()){
                                        temp=this.make1EXtree(bsp.parent.ch[0].copy(),spt,ept);
                                        if(temp==null) ans=null;
                                        else{ 
                                            edit.parent.change(temp);
                                            ans=edit.parent;
                                        }
                                    }
                                    else ans=null;
                                }
                                else if(this.outTerm[spt]=="("||this.outTerm[spt]=="{"||this.outTerm[spt]=="["){
                                    temp=this.make2EXtree(spt,ept,edit.parent.ch[1].copy());
                                    if(temp==null) ans=null;
                                    else{ 
                                        edit.parent.change(temp);
                                        ans=edit.parent;
                                    }
                                }
                                else ans=null;
                            }
							else if(this.Termtype[spt]==MathTOUCH.OP2C&&bsp.parent.isSpaced()&&bsp.pnum==1){
								edit.parent.change(edit.parent.ch[1]);
                                bsp.parent.change(new EXtree2( 0,key,0,bsp.parent.ch[0].copy(),bsp.copy(),this.inTerm[spt]));
								ans=bsp.parent;
							}
							else{
								edit.parent.change(edit.parent.ch[1]);
                                for(ord=0;ord<OTB.getOpeLength(key);ord++){
									if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P){ 
										temp=new EXtree1( 0,key,ord,bsp.copy(),this.inTerm[spt]);
										break;
									}
								}
								if(temp==null){ 
                                    temp=new EXtree2( 0,key,0,new EmptyEXT( ""),arg1.copy(),this.inTerm[spt]);
                                    edit.parent.change(temp);
									ans=edit.parent;
                                    this.error[this.errnum++]="【警告】演算子"+this.inTerm[spt]+"の前に空要素を挿入しました。";
                                }
								else{
									bsp.change(temp);
									ans=bsp;
								}
							}
						}
						else{
							this.error[this.errnum++]="【Error】演算子"+this.inTerm[spt]+"の前後に作用範囲がありません。";
						}
                    }
					else if(edit.parent.isSpaced()){
						arg1=edit.parent.ch[1];
                        if(this.Termtype[spt]==MathTOUCH.OP1B){
                            if(this.outTerm[spt]=="("||this.outTerm[spt]=="{"||this.outTerm[spt]=="["){
                                temp=this.make2EXtree(spt,ept,arg1.copy());
                                if(temp==null) ans=null;
                                else{
                                    edit.parent.change(temp);
                                    ans=edit.parent;
                                }
                            }
                            else ans=null;
                        }
                        else{
                            for(ord=0;ord<OTB.getOpeLength(key);ord++){
                                if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P){ 
                                    temp=new EXtree1( 0,key,ord,arg1.copy(),this.inTerm[spt]);
                                    break;
                                }
                            }
                            if(temp==null){
                                temp=new EXtree2( 0,key,0,new EmptyEXT( ""),arg1.copy(),this.inTerm[spt]);
                                edit.parent.change(temp);
                                ans=edit.parent;
                                this.error[this.errnum++]="【警告】演算子"+this.inTerm[spt]+"の前に空要素を挿入しました。";
                            }
                            else{
                                edit.parent.change(temp);
                                ans=edit.parent;
                            }
                        }
					}
					else this.error[this.errnum++]="【Error】演算子"+this.inTerm[spt]+"の前後に作用範囲がありません。";
				}
				else{
                    temp=new EXtree2( 0,key,0,new EmptyEXT( ""),new EmptyEXT( ""),this.inTerm[spt]);
                    edit.change(temp);
                    ans=edit;
                    this.error[this.errnum++]="【警告】演算子"+this.inTerm[spt]+"の前後に空要素を挿入しました。";
				}
			}
			else if(this.Termtype[spt]==MathTOUCH.OP1P){
				var key=OTB.theNumberOf(this.outTerm[spt]);
				var ord=0;
				ans=null;
				var bsp=edit.BSpoint();
				var arg1=null;
				if(edit.parent==null){
                    temp=new EXtree1( 0,key,ord,new EmptyEXT(""),this.inTerm[spt]);
                    edit.change(temp);
                    ans=edit;
                }
                else if(edit.parent.isSpaced()&&edit.pnum==0){
					arg1=edit.parent.ch[1];
					temp=new EXtree1( 0,key,ord,arg1.copy(),this.inTerm[spt]);
					if(temp!=null){
						edit.parent.change(temp);
						ans=edit.parent;
					}
					else{
						temp=this.makeEXtree(spt,ept);
						if(temp==null){ ans=null;this.error[this.errnum++]="【Error】演算子の後にオペランドがありません。";}
						else{ 
							edit.change(temp);
							ans=edit;
						}
					}
				}
				else{
                    if(edit.parent!=null&&edit.parent.isSpaced()&&edit.pnum==1) edit.parent.ch[0].clearFrameColor();
					temp=this.makeEXtree(spt,ept);
					if(temp==null){ ans=null;this.error[this.errnum++]="【Error】演算子の後にオペランドがありません。";}
					else{ 
						edit.change(temp);
						ans=edit;
					}
				}
			}
			else{
                if(edit.parent!=null&&edit.parent.isSpaced()&&edit.pnum==1){
                    edit.parent.ch[0].clearFrameColor();
                }
                temp=this.makeEXtree(spt,ept);
                if(temp==null){
                    ans=null;
                }else{
                    edit.change(temp);
                    ans=edit;
				}
			}
		}
		else if(this.Termtype[spt]==MathTOUCH.OP2C||this.Termtype[spt]==MathTOUCH.OP1A ){
			ans=null;
			var key=OTB.theNumberOf(this.outTerm[spt]);
			var ord=0;
			var bsp=edit.BSpoint();
			var arg1=null;
			if(bsp!=null){
				if(bsp==edit&&edit.parent!=null&&edit.parent.isSpaced()&&edit.pnum==1){
					arg1=edit.parent.ch[0];
					arg1.clearFrameColor();
					temp=this.makeEXtree(spt+1,ept);
					if(temp!=null){
						if(this.Termtype[spt]==MathTOUCH.OP2C){
							edit.parent.change(new EXtree2( 0,key,ord,arg1.copy(),temp.copy(),this.inTerm[spt]));
							ans=edit.parent;
						}
						else{
							edit.parent.change(new EXtree1( 0,key,ord,arg1.copy(),this.inTerm[spt]).spacedOn(temp.copy()));
							ans=edit.parent;
						}
					}
					else{
						if(edit.parent.parent!=null&&edit.parent.parent.isSpaced()&&edit.parent.pnum==0){
							var arg2=edit.parent.parent.ch[1];
							temp=this.make2EXtree(spt+1,ept,arg2.copy());
							if(temp!=null){
								if(this.Termtype[spt]==MathTOUCH.OP2C){
									edit.parent.parent.change(new EXtree2( 0,key,ord,arg1.copy(),temp,this.inTerm[spt]));
									ans=edit.parent.parent;
								}
								else{
									edit.parent.parent.change(new EXtree1( 0,key,ord,arg1.copy(),this.inTerm[spt]).spacedOn(temp));
									ans=edit.parent.parent;
								}
							}
							else{
								temp=this.make2EXtree(spt,ept,arg2.copy());
								if(temp!=null){
									edit.parent.parent.change(arg1.copy().spacedOn(temp));
									ans=edit.parent.parent;
								}
								else ans=null;
							}
						}
						else{
							temp=this.makeEXtree(spt,ept);
							if(temp!=null){
								edit.change(temp);
								ans=edit;
							}
							else ans=null;
						}
					}
				}
				else if(bsp.parent!=null){
					if(bsp.parent.isSpaced()&&edit.parent.isSpaced()){
						arg1=bsp.parent.ch[0];
						temp=this.makeEXtree(spt+1,ept);
						if(temp!=null){
							if(this.Termtype[spt]==MathTOUCH.OP2C){
								edit.parent.parent.add(edit.parent.pnum,edit.parent.ch[1].copy());
								bsp.parent.add(0,new EXtree2( 0,key,ord,arg1.copy(),temp.copy(),this.inTerm[spt]));
								ans=bsp.parent.ch[0];
							}
							else{
								edit.parent.parent.add(edit.parent.pnum,edit.parent.ch[1].copy());
								bsp.parent.add(0,new EXtree1( 0,key,ord,arg1.copy(),this.inTerm[spt]).spacedOn(temp.copy()));
								ans=bsp.parent.ch[0];
							}
						}
						else if(bsp==edit.parent){
							var arg2=edit.parent.ch[1];
							temp=this.make2EXtree(spt+1,ept,arg2.copy());
							if(temp!=null){
								if(this.Termtype[spt]==MathTOUCH.OP2C){
									bsp.parent.change(new EXtree2( 0,key,ord,arg1.copy(),temp,this.inTerm[spt]));
									ans=bsp.parent;
								}
								else{
									arg1.change(new EXtree1( 0,key,ord,arg1.copy(),this.inTerm[spt]));
									edit.parent.change(temp);
								}
							}
							else{
								temp=this.make2EXtree(spt,ept,arg2.copy());
								if(temp!=null){
									bsp.change(temp);
									ans=bsp;
								}
								else ans=null;
							}
						}
						else{
							var arg2=edit.parent.ch[1];
							temp=this.make2EXtree(spt,ept,arg2.copy());
							if(temp!=null){
								edit.parent.change(temp);
								ans=edit.parent;
							}
							else ans=null;
						}
					}
					else if(edit.parent.isSpaced()){
						var arg2=edit.parent.ch[1];
						temp=this.make2EXtree(spt,ept,arg2.copy());
						if(temp!=null){
							edit.parent.change(temp);
							ans=edit.parent;
						}
						else ans=null;
					}
                    else if(edit.parent.type==MathTOUCH.MAT){
						temp=this.makeEXtree(spt,ept);
						if(temp!=null){
							edit.change(temp);
							ans=edit;
						}
						else ans=null;
					}
					else ans=null;
				}
				else{
                    if(edit.parent.type==MathTOUCH.OP1A ){
                        ans=null;
                        this.error[this.errnum++]="【Error】後置単項演算子に追加入力できません。";
                    }
                    else if(edit.parent.isSpaced()){
                        var arg2=edit.parent.ch[1];
                        temp=this.make2EXtree(spt,ept,arg2.copy());
                        if(temp!=null){
                            edit.parent.change(temp);
                            ans=edit.parent;
                        }
                        else ans=null;
                    }
                    else{
                        temp=this.makeEXtree(spt,ept);
                        if(temp==null){
                            ans=null;
                            this.error[this.errnum++]="【Error】指示文字列が解釈できません。";
                        }
                        else{
                            edit.change(temp);
                            ans=edit;
                        }
                    }
				}
			}
			else{
                temp=this.makeEXtree(spt,ept);
                if(temp!=null){edit.change(temp);ans=edit;}
                else{ ans=null;this.error[this.errnum++]="【Error】指示文字列が解釈できません。";}
			}
		}
        else if(this.Termtype[spt]==MathTOUCH.OP1B){
			ans=null;
			var key=OTB.theNumberOf(this.outTerm[spt]);
			var ord=0;
			var bsp=edit.BSpoint();
			var arg1=null;
			if(bsp!=null){
				if(bsp==edit&&edit.parent!=null&&edit.parent.isSpaced()&&edit.pnum==1){
					arg1=edit.parent.ch[0];
					arg1.clearFrameColor();
                    if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                        temp=this.make1EXtree(arg1.copy(),spt,ept);
                        if(temp==null) ans=null;
                        else{ 
                            edit.parent.change(temp);
                            ans=edit.parent;
                        }
                    }
                    else if(this.outTerm[spt]=="("||this.outTerm[spt]=="{"||this.outTerm[spt]=="["){
                        temp2=edit.parent.getRightParent();
                        if(temp2==null){
                            temp=this.make1EXtree(arg1.copy(),spt,ept);
                            if(temp==null) ans=null;
                            else{ 
                                edit.parent.change(temp);
                                ans=edit.parent;
                            }
                        }
                        else if(temp2.isSpaced()){
                            temp=this.make2EXtree(spt,ept,temp2.ch[1].copy());
                            if(temp==null) ans=null;
                            else{ 
                                temp2.add(1,temp);
                                edit.parent.change(arg1);
                                ans=edit.parent;
                            }
                        }
                        else ans=null;
                    }
                    else ans=null;
				}
				else if(bsp.parent!=null){
                    if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                        if(bsp.parent.isSpaced()){
                            temp=this.make1EXtree(bsp.parent.ch[0].copy(),spt,ept);
                            if(temp==null) ans=null;
                            else{ 
                                bsp.parent.add(0,temp);
                                if(edit.parent.isSpaced()){
                                    edit.parent.change(edit.parent.ch[0]);
                                    ans=edit.parent;
                                }
                                else{
                                    edit.parent.add(edit.pnum,new EmptyEXT( ""));
                                    ans=edit;
                                }
                            }
                        }
                        else ans=null;
                    }
                    else if(this.outTerm[spt]=="("||this.outTerm[spt]=="{"||this.outTerm[spt]=="["){
                        if(edit.parent.isSpaced()){
                            temp=this.make2EXtree(spt,ept,edit.parent.ch[1].copy());
                            if(temp==null) ans=null;
                            else{ 
                                edit.parent.change(temp);
                                ans=edit.parent;
                            }
                        }
                        else{
                            temp=this.makeEXtree(spt,ept);
                            if(temp==null){
                                ans=null;
                                this.error[this.errnum++]="【Error】指示文字列が解釈できません。";
                            }
                            else{
                                edit.change(temp);
                                ans=edit;
                            }
                        }
                    }
                    else ans=null;
				}
				else{
                    if(this.outTerm[spt]=="("||this.outTerm[spt]=="{"||this.outTerm[spt]=="["){
                        if(edit.parent.isSpaced()){
                            temp=this.make2EXtree(spt,ept,edit.parent.ch[1].copy());
                            if(temp!=null){
                                edit.parent.change(temp);
                                ans=edit.parent;
                            }
                            else ans=null;
                        }
                        else{
                            temp=this.makeEXtree(spt,ept);
                            if(temp==null){
                                ans=null;
                                this.error[this.errnum++]="【Error】指示文字列が解釈できません。";
                            }
                            else{
                                edit.change(temp);
                                ans=edit;
                            }
                        }
                    }
                    else ans=null;
				}
			}
            else{
                temp=this.makeEXtree(spt,ept);
                if(temp!=null){edit.change(temp);ans=edit;}
                else{ ans=null;this.error[this.errnum++]="【Error】指示文字列が解釈できません。";}
			}
		}
		else if(this.Termtype[spt] ==MathTOUCH.OP3T){
			ans=null;
		}
		else if(edit.parent!=null&&edit.parent.isSpaced()){
			if(edit.pnum==0){
				var arg2=edit.parent.ch[1];
				temp=this.make2EXtree(spt,ept,arg2.copy());
				if(temp!=null){
					edit.parent.change(temp);
					ans=edit.parent;
				}
				else ans=null;
			}
			else if(edit.parent.parent!=null&&edit.parent.parent.isSpaced()&&edit.parent.pnum==0){
                edit.parent.ch[0].clearFrameColor();
				var arg2=edit.parent.parent.ch[1];
				temp=this.make2EXtree(spt,ept,arg2.copy());
				if(temp!=null){
					edit.parent.parent.change(edit.parent.ch[0].copy().spacedOn(temp));
					ans=edit.parent.parent;
				}
				else ans=null;
			}
			else{
                edit.parent.ch[0].clearFrameColor();
                
				temp=this.makeEXtree(spt,ept);
				if(temp!=null){edit.change(temp);ans=edit;}
				else ans=null;
			}
		}
		else if(edit.parent!=null){
			temp=this.makeEXtree(spt,ept);
			if(temp!=null){edit.change(temp);ans=edit;}
			else ans=null;
		}
		else{
			temp=this.makeEXtree(spt,ept);
			if(temp!=null){
                edit.change(temp);
                ans=edit;
            }
			else ans=null;
		}

		return ans;
};

MathTOUCH.middleEX.prototype.make2EXtree = function(spt,ept,f){
		var ans=null;
		var temp=null;
		var temp2=null;
		var temp3=null;
		var key=OTB.theNumberOf(this.outTerm[spt]);
		var ord=0;
		if(f==null) return(this.makeEXtree(spt,ept));
		if(spt==ept) ans=f;
		else if(this.Termtype[spt]==MathTOUCH.OP2C||this.Termtype[spt]==MathTOUCH.OP1A ){
			for(ord=0;ord<OTB.getOpeLength(key);ord++){
				if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P){
					temp=this.make2EXtree(spt+1,ept,f);
					if(temp==null){ans=null;}
					else ans=new EXtree1( 0,key,ord,temp,this.inTerm[spt]);
					break;
				}
			}
			if(ans==null){
				this.error[this.errnum++]="【Error】演算子"+this.inTerm[spt]+"の前に作用範囲がありません。";
			}
		}
		else if(this.Termtype[spt] ==MathTOUCH.OP3T){
			this.error[this.errnum++]="【Error】演算子"+this.inTerm[spt]+"の前に作用範囲がありません。";
		}
		else if(this.Termtype[ept-1]==MathTOUCH.OP2C){
			temp=this.makeEXtree(spt,ept-1);
			if(temp==null) this.error[this.errnum++]="【Error】最後の演算子"+this.inTerm[ept-1]+"が処理できません。";
			else{
				key=OTB.theNumberOf(this.outTerm[ept-1]);
				ans=new EXtree2( 0,key,ord,temp,f,this.inTerm[ept-1]);
			}
		}
        else if(ept>spt+1&&this.Termtype[ept-1]==MathTOUCH.OP1B){
			if(this.outTerm[ept-1]=="("||this.outTerm[ept-1]=="{"||this.outTerm[ept-1]=="["){
                ans=this.make2EXtree(spt,ept-1,this.make2EXtree(ept-1,ept,f));
            }
            else ans=new EXtree2( 0,MathTOUCH.SP,0,this.makeEXtree(spt,ept),f," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.EMP||this.Termtype[spt]==MathTOUCH.NUM||this.Termtype[spt]==MathTOUCH.VAR||this.Termtype[spt]==MathTOUCH.SYM){
			temp=this.makeEXtree(spt,ept);
			if(temp==null) ans=null;
			else ans=new EXtree2( 0,MathTOUCH.SP,0,temp,f," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.XTML){
			temp=this.makeEXtree(spt,ept);
			if(temp==null) ans=null;
			else ans=new EXtree2( 0,MathTOUCH.SP,0,temp,f," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.TXT){ 
			temp=this.makeEXtree(spt,ept);
			if(temp==null) ans=null;
			else ans=new EXtree2( 0,MathTOUCH.SP,0,temp,f," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.MAT){
			temp=this.makeEXtree(spt,ept);
			if(temp==null) ans=null;
			else ans=new EXtree2( 0,MathTOUCH.SP,0,temp,f," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.OP1P){
			temp=this.makeEXtree(spt,ept);
			if(temp==null){ 
				temp=this.make2EXtree(spt+1,ept,f);
				if(temp==null) ans=null;
				else ans=new EXtree1( 0,key,ord,temp,this.inTerm[spt]);
			}
			else ans=new EXtree2( 0,MathTOUCH.SP,0,temp,f," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.OP2P){
			temp=this.makeEXtree(spt,ept);
			if(temp==null){ 
				temp=this.makeEXtree(spt+1,ept);
				if(temp==null){
					for(ord=0;ord<OTB.getOpeLength(key);ord++){
						if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P){
							temp=this.make2EXtree(spt+1,ept,f);
							if(temp==null){ans=null;}
							else ans=new EXtree1( 0,key,ord,temp,this.inTerm[spt]);
							break;
						}
					}
				}
				else ans=new EXtree2( 0,key,ord,temp,f,this.inTerm[spt]);
			}
			else ans=new EXtree2( 0,MathTOUCH.SP,0,temp,f," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.OP3P){
			temp=this.makeEXtree(spt,ept);
			if(temp==null){ 
				temp=this.makeEXtree(spt+1,ept);
				if(temp==null){
					for(ord=0;ord<OTB.getOpeLength(key);ord++){
						if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P){
							temp=this.make2EXtree(spt+1,ept,f);
							if(temp==null){ans=null;}
							else ans=new EXtree1( 0,key,ord,temp,this.inTerm[spt]);
							break;
						}
					}
				}
				else{ 
					for(ord=0;ord<OTB.getOpeLength(key);ord++){
						if(OTB.getOpeType(key,ord)==MathTOUCH.OP2P){
							ans=new EXtree2( 0,key,ord,temp,f,this.inTerm[spt]);
							break;
						}
						if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P){
							ans=new EXtree1( 0,key,ord,temp.spacedOn(f),this.inTerm[spt]);
							break;
						}
					}
				}
			}
			else ans=new EXtree2(0,MathTOUCH.SP,0,temp,f," ");
		}
		else if(this.Termtype[spt]==MathTOUCH.OP1B){
			if(spt+1==ept){
                ans=new EXtree1( 0,key,ord,f,this.inTerm[spt]);
            }
            else{
                temp=this.make2EXtree(spt+1,ept,f);
                if(temp==null){ans=null;}
                else ans=new EXtree1( 0,key,ord,temp,this.inTerm[spt]);
            }
		}
		else{ans=null; alert("error make1EXtree");
			this.error[this.errnum++]="【Error】演算子が不明です。";
		}
		return ans;
};

MathTOUCH.middleEX.prototype.makeEXtreeStructure=function(spt,ept,starttime){
    var vans=new MathTOUCH.Top10();
    vans.setMax(this.getMax());
    var middle;
    middle=new Date().getTime();
    if((middle-starttime)>this.timeMax){
        return vans;
    }

        var ans=null;
        var ascore=0;
        var key,ord;
        var algscore=0;
        var _dep2=2;
        var _dep3=3;

		if(spt==ept){
            ans=new EmptyEXT("");
            ascore=NES.countScore(ans);
            vans.rankIn(ans,ascore);
        }
		else if(spt+1==ept){
            var key=OTB.theNumberOf(this.outTerm[spt]);
            var type=this.Termtype[spt];
            if(type==MathTOUCH.OP1A||type==MathTOUCH.OP1B||type==MathTOUCH.OP1P){
                ans=new EXtree1(0,key,OTB.getFirstOrder(key,this.Termtype[spt]),new EmptyEXT(""),this.inTerm[spt]);
            }
            else if(type==MathTOUCH.OP2C||type==MathTOUCH.OP2P){
                ans=new EXtree2(0,key,OTB.getFirstOrder(key,this.Termtype[spt]),new EmptyEXT(""),new EmptyEXT(""),this.inTerm[spt]);
            }
            else if(type==MathTOUCH.OP3P||type==MathTOUCH.OP3T){
                ans=new EXtree3(0,key,OTB.getFirstOrder(key,this.Termtype[spt]),new EmptyEXT(""),new EmptyEXT(""),new EmptyEXT(""),this.inTerm[spt]);
            }
            else{
                ans=this.makeEXtree(spt,ept);
            }
            if(ans!=null){
                vans=NES.makeTop10from(ans);
            }
		}
		else{
            if(this.Termtype[spt]==MathTOUCH.OP1P){
                var arg=this.makeEXtreeStructure(spt+1,ept,starttime);
                key=this.outKey[spt];
                var len=OTB.getOpeLength(key);
                for(ord=0;ord<len;ord++){
                    for(var j=0;j<arg.getLastNumber();j++){
                        if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P){
                            ans=new EXtree1(0,key,ord,arg.getEXtreeAt(j).copy(),this.inTerm[spt]);
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000) continue;
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                }
            }
            else if(this.Termtype[spt] ==MathTOUCH.OP2P){
                key=this.outKey[spt];
                var len=OTB.getOpeLength(key);
				for(var i=spt+2;i<ept;i++){
                    if(this.divPoint[i]){
                        var arg1=this.makeEXtreeStructure(spt+1,i,starttime);
                        var arg2=this.makeEXtreeStructure(i,ept,starttime);
                        var idxMax=[arg1.getLastNumber(),arg2.getLastNumber()];
                        if(idxMax[0]*idxMax[1]==0) continue;
                        var vidx=NES.leastIndices(_dep2*this.getMax(),idxMax);
                        for(var k=0;k<vidx.length;k++){
                            var idx=vidx[k];
                            for(var l=0;l<len;l++){
                                if(OTB.getOpeType(key,l)!=MathTOUCH.OP2P) continue;
                                ans=new EXtree2(0,key,l,arg1.getEXtreeAt(idx[0]).copy(),arg2.getEXtreeAt(idx[1]).copy(),this.inTerm[spt]);
                                algscore=AlgRules.theAlgebraicType(ans);
                                if(algscore>=1000||algscore<= -1000) continue;
                                ascore=NES.countScore(ans);
                                vans.rankIn(ans,ascore);
                            }
                        }
                    }
				}
			}
			else if(this.Termtype[spt] ==MathTOUCH.OP3P){
                key=this.outKey[spt];
                var len=OTB.getOpeLength(key);
				for(var i=spt+2;i<ept-1;i++){
                    if(this.divPoint[i]){
                        for(var j=i+1;j<ept;j++){
                            if(this.divPoint[j]){
                                var arg1=this.makeEXtreeStructure(spt+1,i,starttime);
                                var arg2=this.makeEXtreeStructure(i,j,starttime);
                                var arg3=this.makeEXtreeStructure(j,ept,starttime);
                                var idxMax=[arg1.getLastNumber(),arg2.getLastNumber(),arg3.getLastNumber()];
                                if(idxMax[0]*idxMax[1]*idxMax[2]==0) continue;
                                var vidx=NES.leastIndices(_dep3*this.getMax(),idxMax);
                                for(var k=0;k<vidx.length;k++){
                                    var idx=vidx[k];
                                    for(var l=0;l<len;l++){
                                        if(OTB.getOpeType(key,l)!=MathTOUCH.OP3P) continue;
                                        ans=new EXtree3(0,key,l,arg1.getEXtreeAt(idx[0]).copy(),arg2.getEXtreeAt(idx[1]).copy(),arg3.getEXtreeAt(idx[2]).copy(),this.inTerm[spt]);
                                        algscore=AlgRules.theAlgebraicType(ans);
                                        if(algscore>=1000||algscore<= -1000) continue;
                                        ascore=NES.countScore(ans);
                                        vans.rankIn(ans,ascore);
                                    }
                                    middle=new Date().getTime();
                                    if((middle-starttime)>2000){
                                        break;
                                    }
                                }
                            }
                        }
                    }
				}
			}
            else if(this.Termtype[ept-1]==MathTOUCH.OP1A){
                key=this.outKey[ept-1];
                var len=OTB.getOpeLength(key);
				var arg1=this.makeEXtreeStructure(spt,ept-1,starttime);
                for(var i=0;i<arg1.getLastNumber();i++){
                    for(ord=0;ord<len;ord++){
                        if(OTB.getOpeType(key,ord)!=MathTOUCH.OP1A) continue;
                        ans=new EXtree1(0,key,ord,arg1.getEXtreeAt(i).copy(),this.inTerm[ept-1]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000) continue;
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
			}
            else if(this.Termtype[spt]==MathTOUCH.OP1B){
				var BL=this.outTerm[spt];
				var BR="";
                var BR2="";
                var BR3="";
                var isTop=true;
				if(BL=="("){ BR=")";BR2="]";BR3="}";}
				else if(BL=="{"){ BR="}";BR2="]";BR3=")";}
				else if(BL=="["){ BR="]";BR2=")";BR3="}";}
                else isTop=false;
            if(isTop){
				var bra=1;
                var j;
                for(j=spt+1;j<ept;j++){
                    if(this.outTerm[j]==BL) bra++;
                    else if(this.outTerm[j]==BR){bra--;if(bra==0) break;}
                    else if(this.outTerm[j]=="matBegin"){
                        while(!(this.outTerm[j]=="matEnd")){
                            j++;
                            if(j>=ept){alert("matEnd error in ()");ans=null;}
                        }
                    }
                }
                if(j<ept){
                    key=OTB.theNumberOf(BL+BR);
                    var len=OTB.getOpeLength(key);
                    if(j+1==ept){
                        var arg1=this.makeEXtreeStructure(spt+1,j,starttime);
                        for(var i=0;i<arg1.getLastNumber();i++){
                            for(ord=0;ord<len;ord++){
                                ans=new EXtree1(0,key,ord,arg1.getEXtreeAt(i).copy(),BL+BR);
                                algscore=AlgRules.theAlgebraicType(ans);
                                if(algscore>=1000||algscore<= -1000) continue;
                                ascore=NES.countScore(ans);
                                vans.rankIn(ans,ascore);
                            }
                        }
                    }
                }
                else if(this.outTerm[ept-1]==BR2){
                    key=OTB.theNumberOf(BL+BR2);
                    var len=OTB.getOpeLength(key);
                    var arg1=this.makeEXtreeStructure(spt+1,ept-1,starttime);
                    for(var i=0;i<arg1.getLastNumber();i++){
                        for(ord=0;ord<len;ord++){
                            ans=new EXtree1(0,key,ord,arg1.getEXtreeAt(i).copy(),BL+BR2);
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000) continue;
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                }
                else if(this.outTerm[ept-1]==BR3){
                    key=OTB.theNumberOf(BL+BR3);
                    var len=OTB.getOpeLength(key);
                    var arg1=this.makeEXtreeStructure(spt+1,ept-1,starttime);
                    for(var i=0;i<arg1.getLastNumber();i++){
                        for(ord=0;ord<len;ord++){
                            ans=new EXtree1(0,key,ord,arg1.getEXtreeAt(i).copy(),BL+BR3);
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000) continue;
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                }
                else{
                    var arg1=this.makeEXtreeStructure(spt+1,ept,starttime);
                    key=OTB.theNumberOf(BL);
                    var len=OTB.getOpeLength(key);
                    for(var i=0;i<arg1.getLastNumber();i++){
                        for(ord=0;ord<len;ord++){
                            ans=new EXtree1(0,key,ord,arg1.getEXtreeAt(i).copy(),BL);
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000) continue;
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                }
            }
            }
            else if(this.Termtype[ept-1]==MathTOUCH.OP1B){
				var BR=this.outTerm[ept-1];
				if(BR==")"||BR=="}"||BR=="]"){
                    var arg1=this.makeEXtreeStructure(spt,ept-1,starttime);
                    key=OTB.theNumberOf(BR);
                    var len=OTB.getOpeLength(key);
                    for(var i=0;i<arg1.getLastNumber();i++){
                        for(ord=0;ord<len;ord++){
                            ans=new EXtree1(0,key,ord,arg1.getEXtreeAt(i).copy(),BR);
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000) continue;
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                }
			}
            else if(this.Termtype[spt]==MathTOUCH.MAT){
                var npt=spt+1;
                while(!(this.outTerm[npt]=="matEnd")){
                    npt++;
                    if(npt>=ept){alert("matEnd error in middleEX:"+ept);return null;}
                }
                npt++;
                if(npt==ept){vans=this.makeMATstructure(spt,npt,starttime);}
                else{
                    var vans2=this.makeMATstructure(spt,npt,starttime);
                    for(var i=0;i<vans2.getLastNumber();i++){
                        var vans3=this.make1EXtreeStructure(vans2.getEXtreeAt(i).copy(),npt,ept,starttime);
                        vans.join(vans3);
                    }
                }
                return vans;
            }

            for(var i=ept-1;i>=spt;i--){
                if(this.outTerm[i]=="matEnd"){
                    while(!(this.outTerm[i--]=="matBegin")){
                        if(i<spt) break;
                    }
                }
                if(i<spt) break;
                if(this.Termtype[i]==MathTOUCH.OP2C){
                    key=this.outKey[i];
                    ord=this.outOrder[i];
                    var len=OTB.getOpeLength(key);
                    var left=this.makeEXtreeStructure(spt,i,starttime);
                    var right=this.makeEXtreeStructure(i+1,ept,starttime);
                    var idxMax=[left.getLastNumber(),right.getLastNumber()];
                    if(idxMax[0]*idxMax[1]==0) continue;
                    var vidx=NES.leastIndices(_dep2*this.getMax(),idxMax);
                    for(var j=0;j<vidx.length;j++){
                        var idx=vidx[j];
                        for(var k=0;k<len;k++){
                            if(OTB.getOpeType(key,k)!=MathTOUCH.OP2C) continue;
                            ans=new EXtree2(0,key,k,left.getEXtreeAt(idx[0]).copy(),right.getEXtreeAt(idx[1]).copy(),this.inTerm[i]);
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000) continue;
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                }
                else if(this.Termtype[i]==MathTOUCH.OP3T){
                    key=this.outKey[i];
                    ord=this.outOrder[i];
                    var len=OTB.getOpeLength(key);

                    for(var l=i+2;l<ept;l++){
                        if(this.divPoint[l]){
                            var arg2=this.makeEXtreeStructure(spt,i,starttime);
                            var arg1=this.makeEXtreeStructure(i+1,l,starttime);
                            var arg3=this.makeEXtreeStructure(l,ept,starttime);
                            var idxMax=[arg1.getLastNumber(),arg2.getLastNumber(),arg3.getLastNumber()];
                            if(idxMax[0]*idxMax[1]*idxMax[2]==0) continue;
                            var vidx=NES.leastIndices(_dep3*this.getMax(),idxMax);
                            for(var j=0;j<vidx.length;j++){
                                var idx=vidx[j];
                                for(var k=0;k<len;k++){
                                    if(OTB.getOpeType(key,k)!=MathTOUCH.OP3T) continue;
                                    ans=new EXtree3(0,key,k,arg1.getEXtreeAt(idx[0]).copy(),arg2.getEXtreeAt(idx[1]).copy(),arg3.getEXtreeAt(idx[2]).copy(),this.inTerm[i]);
                                    algscore=AlgRules.theAlgebraicType(ans);
                                    if(algscore>=1000||algscore<= -1000) continue;
                                    ascore=NES.countScore(ans);
                                    vans.rankIn(ans,ascore);
                                }
                            }
                        }
                    }
                }
            }

            for(var i=spt+1;i<ept;i++){
                middle=new Date().getTime();
                if((middle-starttime)>2000){
                    i=ept;
                    break;
                }
                if(this.outTerm[i]=="matBegin"){
                    while(!(this.outTerm[i++]=="matEnd")){
                        if(i>=ept) break;
                    }
                }
                if(i>=ept) break;
                if(this.divPoint[i]){
                    var left=this.makeEXtreeStructure(spt,i,starttime);
                    var right=this.makeEXtreeStructure(i,ept,starttime);
                    var len=OTB.getOpeLength(MathTOUCH.SP);
                    var idxMax=[left.getLastNumber(),right.getLastNumber()];
                    if(idxMax[0]*idxMax[1]==0) continue;
                    var vidx=NES.leastIndices(_dep2*this.getMax(),idxMax);
                    for(var j=0;j<vidx.length;j++){
                        var idx=vidx[j];
                        var ltmp=left.getEXtreeAt(idx[0]);
                        var rtmp=right.getEXtreeAt(idx[1]);
                        if(ltmp.type==MathTOUCH.EMP||rtmp.type==MathTOUCH.EMP){
                            ans=new EXtree2(0,MathTOUCH.SP,0,ltmp.copy(),rtmp.copy()," ");
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                            continue;
                        }
                        for(var l=0;l<len;l++){
                            if(l==2){
                                if(ltmp.type==MathTOUCH.OP2C&&ltmp.key==MathTOUCH.SP&&ltmp.order==3){
                                    ans=new EXtree2(0,MathTOUCH.SP,l,ltmp.copy(),rtmp.copy()," ");
                                    algscore=AlgRules.theAlgebraicType(ans);
                                    if(algscore>=1000||algscore<= -1000) continue;
                                    ascore=NES.countScore(ans);
                                    vans.rankIn(ans,ascore);
                                }
                            }
                            else{
                                ans=new EXtree2(0,MathTOUCH.SP,l,ltmp.copy(),rtmp.copy()," ");
                                algscore=AlgRules.theAlgebraicType(ans);
                                if(algscore>=1000||algscore<= -1000) continue;
                                ascore=NES.countScore(ans);
                                vans.rankIn(ans,ascore);
                            }
                        }
                    }
                }
            }
            if(vans.getLastNumber()==0){
                for(var i=spt+1;i<ept;i++){
                    middle=new Date().getTime();
                    if((middle-starttime)>2000){
                        i=ept;
                        break;
                    }
                    if(this.outTerm[i]=="matBegin"){
                        while(!(this.outTerm[i++]=="matEnd")){
                            if(i>=ept) break;
                        }
                    }
                    if(i>=ept) break;
                    if(this.divPoint[i]){
                        var left=this.makeEXtreeStructure(spt,i,starttime);
                        var right=this.makeEXtreeStructure(i,ept,starttime);
                        var len=OTB.getOpeLength(MathTOUCH.SP);
                        var idxMax=[left.getLastNumber(),right.getLastNumber()];
                        if(idxMax[0]*idxMax[1]==0) continue;
                        var vidx=NES.leastIndices(_dep2*this.getMax(),idxMax);
                        for(var j=0;j<vidx.length;j++){
                            var idx=vidx[j];
                            var ltmp=left.getEXtreeAt(idx[0]);
                            var rtmp=right.getEXtreeAt(idx[1]);
                            if(ltmp.type==MathTOUCH.EMP||rtmp.type==MathTOUCH.EMP){
                                ans=AlgRules.reform(new EXtree2(0,MathTOUCH.SP,0,ltmp.copy(),rtmp.copy()," "));
                                if(ans!=null){
                                    ascore=NES.countScore(ans);
                                    vans.rankIn(ans,ascore);
                                }
                                continue;
                            }
                            for(var l=0;l<len;l++){
                                if(l==2){
                                    if(ltmp.type==MathTOUCH.OP2C&&ltmp.key==MathTOUCH.SP&&ltmp.order==3){
                                        ans=AlgRules.reform(new EXtree2(0,MathTOUCH.SP,l,ltmp.copy(),rtmp.copy()," "));
                                        if(ans!=null){
                                            ascore=NES.countScore(ans);
                                            vans.rankInUni(ans,ascore);
                                        }
                                    }
                                }
                                else{
                                    ans=AlgRules.reform(new EXtree2(0,MathTOUCH.SP,l,ltmp.copy(),rtmp.copy()," "));
                                    if(ans!=null){
                                        ascore=NES.countScore(ans);
                                        vans.rankInUni(ans,ascore);
                                    }
                                }
                            }
                        }
                    }
                }
            }
		}
		return vans;
	}

MathTOUCH.middleEX.prototype.make1EXtreeStructure=function(f,spt,ept,starttime){
        var vans=new MathTOUCH.Top10();
        vans.setMax(this.getMax());
        var middle;
        middle=new Date().getTime();
        if((middle-starttime)>this.timeMax){
            return vans;
        }
        var ans=null;
        var ascore=0;
        var key,ord,len;
        var algscore=0;
        var _dep2=2;
        var _dep3=3;
        var fisSimple=false;

		if(f==null) vans=this.makeEXtreeStructure(spt,ept,starttime);
		else if(spt==ept){ ans=f;ascore=NES.countScore(ans);vans.rankIn(ans,ascore);}
		else if(spt+1==ept){
			if(this.Termtype[spt]==MathTOUCH.OP1A){
                key=OTB.keyNumberOf(this.outTerm[spt]);
                len=OTB.getOpeLength(key);
                for(ord=0;ord<len;ord++){
                    if(OTB.getOpeType(key,ord)==MathTOUCH.OP1A){
                        ans=new EXtree1(0,key,ord,f,this.inTerm[spt]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
			}
			else if(this.Termtype[spt]==MathTOUCH.OP2C){
                key=OTB.keyNumberOf(this.outTerm[spt]);
                len=OTB.getOpeLength(key);
                for(ord=0;ord<len;ord++){
                    if(OTB.getOpeType(key,ord)==MathTOUCH.OP2C){
                        ans=new EXtree2(0,key,ord,f,new EmptyEXT(""),this.inTerm[spt]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
			}
            else if(this.Termtype[spt]==MathTOUCH.OP1B){
                key=OTB.keyNumberOf(this.outTerm[spt]);
                len=OTB.getOpeLength(key);
                if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                    for(ord=0;ord<len;ord++){
                        ans=new EXtree1(0,key,ord,f,this.inTerm[spt]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
                else{
                    for(ord=0;ord<len;ord++){
                        ans=new EXtree2(0,MathTOUCH.SP,0,f,new EXtree1(0,key,ord,new EmptyEXT(""),this.inTerm[spt])," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
			}
			else{
				var vtemp=this.makeEXtreeStructure(spt,ept,starttime);
                len=OTB.getOpeLength(MathTOUCH.SP);
				for(var i=0;i<vtemp.getLastNumber();i++){
                    if(f.cnum==0&&f.type!=MathTOUCH.EMP) fisSimple=true;
                    ord=0;
                    ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                    algscore=AlgRules.theAlgebraicType(ans);
                    if(algscore>=1000||algscore<= -1000){
                        if(fisSimple){
                            var temp=AlgRules.reform(ans);
                            if(temp==null) continue;
                            else ans=temp;
                        }
                        else continue;
                    }
                    ascore=NES.countScore(ans);
                    vans.rankIn(ans,ascore);
                    if(f.type==MathTOUCH.OP1B && (f.inputWord=="()"||f.inputWord=="{}"||f.inputWord=="[]")) fisSimple=true;
                    if(this.Termtype[spt]==2&&this.inTerm[spt]==" ") continue;
                    if(fisSimple){
                        ord=1;
                        ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                        
                        ord=3;
                        ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                    if(f.key==MathTOUCH.SP&&f.order==3){
                        ord=2;
                        ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                        ord=1;
                        ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                    middle=new Date().getTime();
                    if((middle-starttime)>2000){
                        break;
                    }
                }
			}
		}
    else{
        if(this.Termtype[spt]==MathTOUCH.OP2C){
			var vtemp=this.makeEXtreeStructure(spt+1,ept,starttime);
            key=this.outKey[spt];
            len=OTB.getOpeLength(key);
			for(var i=0;i<vtemp.getLastNumber();i++){
                for(ord=0;ord<len;ord++){
                    if(OTB.getOpeType(key,ord)==MathTOUCH.OP2C){
                        ans=new EXtree2(0,key,ord,f,vtemp.getEXtreeAt(i).copy(),this.inTerm[spt]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
                middle=new Date().getTime();
                if((middle-starttime)>2000){
                    break;
                }
			}
		}
		else if(this.Termtype[spt] ==MathTOUCH.OP3T){
            key=this.outKey[spt];
            len=OTB.getOpeLength(key);
			for(var i=spt+2;i<ept;i++){
                if(this.divPoint[i]){
                    var arg2=this.makeEXtreeStructure(spt+1,i,starttime);
                    var arg3=this.makeEXtreeStructure(i,ept,starttime);
                    var idxMax=[arg2.getLastNumber(),arg3.getLastNumber()];
                    if(idxMax[0]*idxMax[1]==0) continue;
                    var vidx=NES.leastIndices(_dep2*this.getMax(),idxMax);
                    for(var k=0;k<vidx.length;k++){
                        var idx=vidx[k];
                        for(var l=0;l<len;l++){
                            if(OTB.getOpeType(key,l)!=MathTOUCH.OP3T) continue;
                            ans=new EXtree3(0,key,l,f,arg2.getEXtreeAt(idx[0]).copy(),arg3.getEXtreeAt(idx[1]).copy(),this.inTerm[spt]);
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000){
                                continue;
                            }
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                }
            }
		}
		else if(this.Termtype[spt]==MathTOUCH.OP1A){
            key=this.outKey[spt];
            len=OTB.getOpeLength(key);
            for(ord=0;ord<len;ord++){
                if(OTB.getOpeType(key,ord)==MathTOUCH.OP1A){
                    var vans2=this.make1EXtreeStructure(new EXtree1(0,key,ord,f,this.inTerm[spt]),spt+1,ept,starttime);
                    vans.join(vans2);
                }
            }
		}
		else if(this.Termtype[spt]==MathTOUCH.EMP||this.Termtype[spt]==MathTOUCH.NUM||this.Termtype[spt]==MathTOUCH.VAR||this.Termtype[spt]==MathTOUCH.SYM||this.Termtype[spt]==MathTOUCH.XTML||this.Termtype[spt]==MathTOUCH.TXT){
            var vtemp;
            if(MathTOUCH.Device!=MathTOUCH.Device_PC){
                    vtemp=this.make1EXtreeStructure(f,spt,spt+1,starttime);
                    for(var i=0;i<vtemp.getLastNumber();i++){
                    var vans2=this.make1EXtreeStructure(vtemp.getEXtreeAt(i).copy(),spt+1,ept,starttime);
                    vans.join(vans2);
                }
            }
            vtemp=this.makeEXtreeStructure(spt,ept,starttime);
            len=OTB.getOpeLength(MathTOUCH.SP);
            if(f.type==MathTOUCH.EMP||this.Termtype[spt]==MathTOUCH.EMP) len=1;
            for(var i=0;i<vtemp.getLastNumber();i++){
                for(ord=0;ord<len;ord++){
                    if(ord==2){
                        if(f.type==MathTOUCH.OP2C&&f.key==MathTOUCH.SP&&f.order==3){
                            ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000){
                                continue;
                            }
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                    else{
                        ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        var rin=vans.rankIn(ans,ascore);
                    }
                }
                middle=new Date().getTime();
                if((middle-starttime)>2000){
                    break;
                }
            }
		}
		else if(this.Termtype[spt]==MathTOUCH.MAT){
			var vtemp=this.makeEXtreeStructure(spt,ept,starttime);
			for(var i=0;i<vtemp.getLastNumber();i++){
                ans=new EXtree2(0,MathTOUCH.SP,0,f,vtemp.getEXtreeAt(i).copy()," ");
                algscore=AlgRules.theAlgebraicType(ans);
                if(algscore>=1000||algscore<= -1000){
                    continue;
                }
                ascore=NES.countScore(ans);
                vans.rankIn(ans,ascore);
            }
		}
		else if(this.Termtype[spt]==MathTOUCH.OP1P||this.Termtype[spt]==MathTOUCH.OP2P||this.Termtype[spt]==MathTOUCH.OP3P){
			var vtemp=this.makeEXtreeStructure(spt,ept,starttime);
            len=OTB.getOpeLength(MathTOUCH.SP);
			for(var i=0;i<vtemp.getLastNumber();i++){
                for(ord=0;ord<len;ord++){
                    if(ord==2){
                        if(f.type==MathTOUCH.OP2C&&f.key==MathTOUCH.SP&&f.order==3){
                            ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000){
                                continue;
                            }
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                    else{
                        ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
                middle=new Date().getTime();
                if((middle-starttime)>2000){
                    break;
                }

            }
		}
		else if(this.Termtype[spt]==MathTOUCH.OP1B){
			if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                var vtemp=this.make1EXtreeStructure(f,spt,spt+1,starttime);
                for(var i=0;i<vtemp.getLastNumber();i++){
                    var vans2=this.make1EXtreeStructure(vtemp.getEXtreeAt(i).copy(),spt+1,ept,starttime);
                    vans.join(vans2);
                }
            }
            else{
                var vtemp=this.makeEXtreeStructure(spt,ept,starttime);
                len=OTB.getOpeLength(MathTOUCH.SP);
                for(var i=0;i<vtemp.getLastNumber();i++){
                    for(ord=0;ord<len;ord++){
                        if(ord==2){
                            if(f.type==MathTOUCH.OP2C&&f.key==MathTOUCH.SP&&f.order==3){
                                ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                                algscore=AlgRules.theAlgebraicType(ans);
                                if(algscore>=1000||algscore<= -1000){
                                    continue;
                                }
                                ascore=NES.countScore(ans);
                                vans.rankIn(ans,ascore);
                            }
                        }
                        else{
                            ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000){
                                continue;
                            }
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                }
            }
		}
		else{ans=null; alert("error make1EXtreeStructure");
		}
        for(var i=ept-1;i>spt;i--){
            if(this.outTerm[i]=="matEnd"){
                while(!(this.outTerm[i--]=="matBegin")){
                    if(i<spt) break;
                }
            }
            if(i<spt) break;
            if(this.Termtype[i]==MathTOUCH.OP2C){
                key=this.outKey[i];
                ord=this.outOrder[i];
                var len=OTB.getOpeLength(key);
                var left=this.make1EXtreeStructure(f,spt,i,starttime);
                var right=this.makeEXtreeStructure(i+1,ept,starttime);
                var idxMax=[left.getLastNumber(),right.getLastNumber()];
                if(idxMax[0]*idxMax[1]==0) continue;
                var vidx=NES.leastIndices(_dep2*this.getMax(),idxMax);
                for(var j=0;j<vidx.length;j++){
                    var idx=vidx[j];
                    for(var k=0;k<len;k++){
                        if(OTB.getOpeType(key,k)!=MathTOUCH.OP2C) continue;
                        ans=new EXtree2(0,key,k,left.getEXtreeAt(idx[0]).copy(),right.getEXtreeAt(idx[1]).copy(),this.inTerm[i]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000) continue;
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
            }
            else if(this.Termtype[i]==MathTOUCH.OP3T){
                key=this.outKey[i];
                ord=this.outOrder[i];
                var len=OTB.getOpeLength(key);

                for(var l=i+2;l<ept;l++){
                    if(this.divPoint[l]){
                        var arg2=this.make1EXtreeStructure(f,spt,i,starttime);
                        var arg1=this.makeEXtreeStructure(i+1,l,starttime);
                        var arg3=this.makeEXtreeStructure(l,ept,starttime);
                        var idxMax=[arg1.getLastNumber(),arg2.getLastNumber(),arg3.getLastNumber()];
                        if(idxMax[0]*idxMax[1]*idxMax[2]==0) continue;
                        var vidx=NES.leastIndices(_dep3*this.getMax(),idxMax);
                        for(var j=0;j<vidx.length;j++){
                            var idx=vidx[j];
                            for(var k=0;k<len;k++){
                                if(OTB.getOpeType(key,k)!=MathTOUCH.OP3T) continue;
                                ans=new EXtree3(0,key,k,arg1.getEXtreeAt(idx[0]).copy(),arg2.getEXtreeAt(idx[1]).copy(),arg3.getEXtreeAt(idx[2]).copy(),this.inTerm[i]);
                                algscore=AlgRules.theAlgebraicType(ans);
                                if(algscore>=1000||algscore<= -1000) continue;
                                ascore=NES.countScore(ans);
                                vans.rankIn(ans,ascore);
                            }
                        }
                    }
                }
            }
        }
        for(var i=spt+1;i<ept;i++){
            middle=new Date().getTime();
            if((middle-starttime)>2000){
                i=ept;
                break;
            }
            if(this.outTerm[i]=="matBegin"){
                while(!(this.outTerm[i++]=="matEnd")){
                    if(i>=ept) break;
                }
            }
            if(i>=ept) break;
            if(this.divPoint[i]){
                var left=this.make1EXtreeStructure(f,spt,i,starttime);
                var right=this.makeEXtreeStructure(i,ept,starttime);
                var len=OTB.getOpeLength(MathTOUCH.SP);
                var idxMax=[left.getLastNumber(),right.getLastNumber()];
                if(idxMax[0]*idxMax[1]==0) continue;
                var vidx=NES.leastIndices(_dep2*this.getMax(),idxMax);
                for(var j=0;j<vidx.length;j++){
                    var idx=vidx[j];
                    var ltmp=left.getEXtreeAt(idx[0]);
                    var rtmp=right.getEXtreeAt(idx[1]);
                    if(ltmp.type==MathTOUCH.EMP||rtmp.type==MathTOUCH.EMP){
                        ans=new EXtree2(0,MathTOUCH.SP,0,ltmp.copy(),rtmp.copy()," ");
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                        continue;
                    }
                    for(var l=0;l<len;l++){
                        if(l==2){
                            if(ltmp.type==MathTOUCH.OP2C&&ltmp.key==MathTOUCH.SP&&ltmp.order==3){
                                ans=new EXtree2(0,MathTOUCH.SP,l,ltmp.copy(),rtmp.copy()," ");
                                algscore=AlgRules.theAlgebraicType(ans);
                                if(algscore>=1000||algscore<= -1000) continue;
                                ascore=NES.countScore(ans);
                                vans.rankIn(ans,ascore);
                            }
                        }
                        else{
                            ans=new EXtree2(0,MathTOUCH.SP,l,ltmp.copy(),rtmp.copy()," ");
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000) continue;
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                }
            }
        }
    }
    return vans;
}

MathTOUCH.middleEX.prototype.makeTargetEXtreeStructure=function(tagex,spt,ept,starttime){
    var vans=new MathTOUCH.Top10();
    vans.setMax(this.getMax());
    var middle;
    middle=new Date().getTime();
    if((middle-starttime)>this.timeMax){
        return vans;
    }
    if(tagex.type!=this.Termtype[spt]||tagex.inputWord!=this.inTerm[spt]){
        console.log("makeTargetEXtreeStructure error! tag="+tagex.inputWord+", spt="+this.inTerm[spt]);
        return vans;
    }
        var ans=null;
        var ascore=0;
        var key,ord;
        var algscore=0;
        var _dep2=2;
        var _dep3=3;

        if(spt==ept){
            ans=new EmptyEXT("");
            ascore=NES.countScore(ans);
            vans.rankIn(ans,ascore);
        }
        else if(spt+1==ept){
            ans=tagex.copy();
            ans.setAllComplete();
            ascore=NES.countScore(ans);
            vans.rankIn(ans,ascore);
        }
        else{
            if(tagex.type==MathTOUCH.OP1P){
                var arg=this.makeEXtreeStructure(spt+1,ept,starttime);
                key=tagex.key;
                ord=tagex.order;
                for(var j=0;j<arg.getLastNumber();j++){
                    if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P){
                        ans=new EXtree1(2,key,ord,arg.getEXtreeAt(j).copy(),this.inTerm[spt]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000) continue;
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                        break;
                    }
                }
            }
            else if(tagex.type == MathTOUCH.OP2P){
                key=tagex.key;
                ord=tagex.order;
                for(var i=spt+2;i<ept;i++){
                    if(this.divPoint[i]){
                        var arg1=this.makeEXtreeStructure(spt+1,i,starttime);
                        var arg2=this.makeEXtreeStructure(i,ept,starttime);
                        var idxMax=[arg1.getLastNumber(),arg2.getLastNumber()];
                        if(idxMax[0]*idxMax[1]==0) continue;
                        var vidx=NES.leastIndices(_dep2*this.getMax(),idxMax);
                        for(var k=0;k<vidx.length;k++){
                            var idx=vidx[k];
                            ans=new EXtree2(2,key,ord,arg1.getEXtreeAt(idx[0]).copy(),arg2.getEXtreeAt(idx[1]).copy(),this.inTerm[spt]);
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000) continue;
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                            break;
                        }
                    }
                }
            }
            else if(tagex.type == MathTOUCH.OP3P){
                key=tagex.key;
                ord=tagex.order;
                for(var i=spt+2;i<ept-1;i++){
                    if(this.divPoint[i]){
                        for(var j=i+1;j<ept;j++){
                            if(this.divPoint[j]){
                                var arg1=this.makeEXtreeStructure(spt+1,i,starttime);
                                var arg2=this.makeEXtreeStructure(i,j,starttime);
                                var arg3=this.makeEXtreeStructure(j,ept,starttime);
                                var idxMax=[arg1.getLastNumber(),arg2.getLastNumber(),arg3.getLastNumber()];
                                if(idxMax[0]*idxMax[1]*idxMax[2]==0) continue;
                                var vidx=NES.leastIndices(_dep3*this.getMax(),idxMax);
                                for(var k=0;k<vidx.length;k++){
                                    var idx=vidx[k];
                                    ans=new EXtree3(2,key,ord,arg1.getEXtreeAt(idx[0]).copy(),arg2.getEXtreeAt(idx[1]).copy(),arg3.getEXtreeAt(idx[2]).copy(),this.inTerm[spt]);
                                    algscore=AlgRules.theAlgebraicType(ans);
                                    if(algscore>=1000||algscore<= -1000) continue;
                                    ascore=NES.countScore(ans);
                                    vans.rankIn(ans,ascore);
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            else if(tagex.type==MathTOUCH.OP1B){
                var BL=this.outTerm[spt];
                var BR="";
                var BR2="";
                var BR3="";
                var isTop=true;
                if(BL=="("){ BR=")";BR2="]";BR3="}";}
                else if(BL=="{"){ BR="}";BR2="]";BR3=")";}
                else if(BL=="["){ BR="]";BR2=")";BR3="}";}
                else isTop=false;
            if(isTop){
                var bra=1;
                var j;
                for(j=spt+1;j<ept;j++){
                    if(this.outTerm[j]==BL) bra++;
                    else if(this.outTerm[j]==BR){bra--;if(bra==0) break;}
                    else if(this.outTerm[j]=="matBegin"){
                        while(!(this.outTerm[j]=="matEnd")){
                            j++;
                            if(j>=ept){alert("matEnd error in ()");ans=null;}
                        }
                    }
                }
                if(j<ept){
                    key=tagex.key;
                    ord=tagex.order;
                    if(j+1==ept){
                        var arg1=this.makeEXtreeStructure(spt+1,j,starttime);
                        for(var i=0;i<arg1.getLastNumber();i++){
                            ans=new EXtree1(2,key,ord,arg1.getEXtreeAt(i).copy(),BL+BR);
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000) continue;
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                            break;
                        }
                    }

                }

                else{
                    var arg1=this.makeEXtreeStructure(spt+1,ept,starttime);
                    key=tagex.key;
                    ord=tagex.order;
                    for(var i=0;i<arg1.getLastNumber();i++){
                        ans=new EXtree1(2,key,ord,arg1.getEXtreeAt(i).copy(),BL);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000) continue;
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                        break;
                    }
                }
            }
            }

            else if(this.Termtype[spt]==MathTOUCH.MAT){
                var npt=spt+1;
                while(!(this.outTerm[npt]=="matEnd")){
                    npt++;
                    if(npt>=ept){alert("matEnd error in middleEX:"+ept);return null;}
                }
                npt++;
                if(npt==ept){vans=this.makeMATstructure(spt,npt,starttime);}
                else{
                    var vans2=this.makeMATstructure(spt,npt,starttime);
                    for(var i=0;i<vans2.getLastNumber();i++){
                        var vans3=this.make1EXtreeStructure(vans2.getEXtreeAt(i).copy(),npt,ept,starttime);
                        vans.join(vans3);
                    }
                }
                return vans;
            }
            var trynum=0;
            for(var i=ept-1;i>=spt;i--){
                if(this.outTerm[i]=="matEnd"){
                    while(!(this.outTerm[i--]=="matBegin")){
                        if(i<spt) break;
                    }
                }
                if(i<spt) break;
                if(this.Termtype[i]==MathTOUCH.OP2C){
                    var left=this.makeTargetEXtreeStructure(tagex,spt,i,starttime);
                    vans.join(left);
                }
                else if(this.Termtype[i]==MathTOUCH.OP3T){
                    var left=this.makeTargetEXtreeStructure(tagex,spt,i,starttime);
                    vans.join(left);
                }
            }
            for(var i=spt+1;i<ept;i++){
                middle=new Date().getTime();
                if((middle-starttime)>2000){
                    i=ept;
                    break;
                }
                if(this.outTerm[i]=="matBegin"){
                    while(!(this.outTerm[i++]=="matEnd")){
                        if(i>=ept) break;
                    }
                }
                if(i>=ept) break;
                if(this.divPoint[i]){
                    var left=this.makeTargetEXtreeStructure(tagex,spt,i,starttime);
                    vans.join(left);
                }
            }
        }
        return vans;
}


MathTOUCH.middleEX.prototype.make1TargetEXtreeStructure=function(f,tagex,spt,ept,starttime){
        var vans=new MathTOUCH.Top10();
        vans.setMax(this.getMax());
        var middle;
        middle=new Date().getTime();
        if((middle-starttime)>this.timeMax){
            return vans;
        }
    var tagpoint=NES.searchTarget(tagex);
    if(tagpoint==null){return vans;}
    if(tagpoint.key!=MathTOUCH.SP&&(tagpoint.type!=this.Termtype[spt]||tagpoint.inputWord!=this.inTerm[spt])) return vans;
        var ans=null;
        var ascore=0;
        var key,ord,len;
        var algscore=0;
        var _dep2=2;
        var _dep3=3;
        var fisSimple=false;

        if(f==null) vans=this.makeTargetEXtreeStructure(tagex,spt,ept,starttime);
        else if(spt==ept){ ans=f;ans.setAllComplete();
            ascore=NES.countScore(ans);vans.rankIn(ans,ascore);}
        else if(spt+1==ept){
            if(tagpoint.type==MathTOUCH.OP1A){
                ans=new EXtree1(2,tagpoint.key,tagpoint.order,f,this.inTerm[spt]);
                algscore=AlgRules.theAlgebraicType(ans);
                if(algscore>=1000||algscore<= -1000){
                    var temp=AlgRules.reform(ans);
                    if(temp==null) return vans;
                    else ans=temp;
                }
                ascore=NES.countScore(ans);
                vans.rankIn(ans,ascore);
            }
            else if(tagpoint.type==MathTOUCH.OP2C){
                ans=new EXtree2(2,tagpoint.key,tagpoint.order,f,new EmptyEXT(""),this.inTerm[spt]);
                algscore=AlgRules.theAlgebraicType(ans);
                if(algscore>=1000||algscore<= -1000){
                    var temp=AlgRules.reform(ans);
                    if(temp==null) return vans;
                    else ans=temp;
                }
                ascore=NES.countScore(ans);
                vans.rankIn(ans,ascore);
            }
            else if(tagpoint.type==MathTOUCH.OP1B){
                if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                    ans=new EXtree1(2,tagpoint.key,tagpoint.order,f,this.inTerm[spt]);
                    algscore=AlgRules.theAlgebraicType(ans);
                    if(algscore>=1000||algscore<= -1000){
                        var temp=AlgRules.reform(ans);
                        if(temp==null) return vans;
                        else ans=temp;
                    }
                    ascore=NES.countScore(ans);
                    vans.rankIn(ans,ascore);
                }
                else{
                    ans=new EXtree2(2,MathTOUCH.SP,0,f,new EXtree1(2,tagpoint.key,tagpoint.order,new EmptyEXT(""),this.inTerm[spt])," ");
                    algscore=AlgRules.theAlgebraicType(ans);
                    if(algscore>=1000||algscore<= -1000){
                        var temp=AlgRules.reform(ans);
                        if(temp==null) return vans;
                        else ans=temp;
                    }
                    ascore=NES.countScore(ans);
                    vans.rankIn(ans,ascore);
                }
            }
            else{
                ans=tagex.copy();
                ans.setAllComplete();
                ascore=NES.countScore(ans);
                vans.rankIn(ans,ascore);
            }
        }
        else if(tagpoint.key==MathTOUCH.SP){
            for(var m=ept;m>spt;m--){
                if(this.isTermPoint(m)){
                    var temp=this.makeEXtree(spt,m);
                    if(temp==null){continue;}
                    var tempA=AlgRules.theAlgebraicType(temp);
                    if(tempA>=1000||tempA<= -1000){
                        temp=AlgRules.reform(temp);
                        if(temp==null){continue;}
                    }
                    f.setAllComplete();
                    ans=new EXtree2(2,tagpoint.key,tagpoint.order,f,temp.copy()," ");
                    ascore=NES.countScore(ans);
                    vans.rankIn(ans,ascore);
                }
            }
        }
        else if(tagpoint.type==MathTOUCH.OP2C){
            for(var m=ept;m>spt;m--){
                if(this.isTermPoint(m)){
                    var temp=this.makeEXtree(spt+1,m);
                    if(temp==null){continue;}
                    f.setAllComplete();
                    ans=new EXtree2(2,tagpoint.key,tagpoint.order,f.copy(),temp.copy(),tagpoint.inputWord);
                    if(ans!=null){
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
            }
        }
        else if(tagpoint.type==MathTOUCH.OP3T){
            f.setAllComplete();
            for(var i=spt+2;i<ept;i++){
                if(this.divPoint[i]){
                    var arg2=this.makeEXtree(spt+1,i);
                    var arg2A=AlgRules.theAlgebraicType(arg2);
                    if(arg2==null||arg2A>=1000||arg2A<= -1000){
                        continue;
                    }
                    var arg3=this.makeEXtree(i,ept);
                    var arg3A=AlgRules.theAlgebraicType(arg3);
                    if(arg3==null||arg3A>=1000||arg3A<= -1000){
                        continue;
                    }
                    f.setAllComplete();
                    ans=new EXtree2(2,tagpoint.key,tagpoint.order,f,arg2.copy(),arg3.copy(),this.inTerm[spt]);
                    ascore=NES.countScore(ans);
                    vans.rankIn(ans,ascore);
                }
            }
        }
        else if(tagpoint.type==MathTOUCH.OP1A){
            var vans2=this.make1EXtreeStructure(new EXtree1(2,tagpoint.key,tagpoint.order,f,this.inTerm[spt]),spt+1,ept,starttime);
            vans.join(vans2);
        }
        else if(this.Termtype[spt]==MathTOUCH.EMP||this.Termtype[spt]==MathTOUCH.NUM||this.Termtype[spt]==MathTOUCH.VAR||this.Termtype[spt]==MathTOUCH.SYM||this.Termtype[spt]==MathTOUCH.XTML||this.Termtype[spt]==MathTOUCH.TXT){
            var vtemp;
            if(MathTOUCH.Device!=MathTOUCH.Device_PC){
                vtemp=this.make1TargetEXtreeStructure(f,tagex,spt,spt+1,starttime);
                for(var i=0;i<vtemp.getLastNumber();i++){
                    var vans2=this.make1EXtreeStructure(vtemp.getEXtreeAt(i).copy(),spt+1,ept,starttime);
                    vans.join(vans2);
                }
            }
            vtemp=this.makeTargetEXtreeStructure(tagex,spt,ept,starttime);
            vans.join(vtemp);
        }
        else if(this.Termtype[spt]==MathTOUCH.MAT){
            var vtemp=this.makeEXtreeStructure(spt,ept,starttime);
            for(var i=0;i<vtemp.getLastNumber();i++){
                ans=new EXtree2(0,MathTOUCH.SP,0,f,vtemp.getEXtreeAt(i).copy()," ");
                algscore=AlgRules.theAlgebraicType(ans);
                if(algscore>=1000||algscore<= -1000){
                    continue;
                }
                ascore=NES.countScore(ans);
                vans.rankIn(ans,ascore);
            }
        }
        else if(this.Termtype[spt]==MathTOUCH.OP1P||this.Termtype[spt]==MathTOUCH.OP2P||this.Termtype[spt]==MathTOUCH.OP3P){
            var vtemp=this.makeTargetEXtreeStructure(tagpoint,spt,ept,starttime);
            for(var i=0;i<vtemp.getLastNumber();i++){
                ans=tagex.copy();
                var anstagpoint=NES.searchTarget(ans);
                if(anstagpoint==null){alert("make1TargetExtreeStructure Error in OpP");return vans;}
                NES.clearTarget(anstagpoint);
                ans.setAllComplete();
                anstagpoint.change(vtemp.getEXtreeAt(i).copy());
                ascore=NES.countScore(ans);
                vans.rankIn(ans,ascore);
                middle=new Date().getTime();
                if((middle-starttime)>2000){
                    break;
                }

            }
        }
        else if(this.Termtype[spt]==MathTOUCH.OP1B){
            if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                var vans2=this.make1EXtreeStructure(new EXtree1(2,tagpoint.key,tagpoint.order,f,this.inTerm[spt]),spt+1,ept,starttime);
                vans.join(vans2);
            }
            else{
                var vtemp=this.makeTargetEXtreeStructure(tagpoint,spt,ept,starttime);
                for(var i=0;i<vtemp.getLastNumber();i++){
                    ans=tagex.copy();
                    var anstagpoint=NES.searchTarget(ans);
                    if(anstagpoint==null){alert("make1TargetExtreeStructure Error in OpB");return vans;}
                    ans.setAllComplete();
                    anstagpoint.change(vtemp.getEXtreeAt(i).copy());
                    ascore=NES.countScore(ans);
                    vans.rankIn(ans,ascore);
                    middle=new Date().getTime();
                    if((middle-starttime)>2000){
                            break;
                    }
                }
            }
        }
        else{ans=null; alert("error make1TargetEXtreeStructure in last");
        }
        return vans;
}


MathTOUCH.middleEX.prototype.makeEXtreeTagStructure=function(spt,ept,starttime){
  
    var vans=new MathTOUCH.Top10();
    vans.setMax(this.getMax());
    var middle;
    middle=new Date().getTime();
    if((middle-starttime)>this.timeMax){
        return vans;
    }
        var ans=null;
        var ascore=0;
        var key,ord;
        var algscore=0;
        var _dep2=2;
        var _dep3=3;
        if(spt==ept){
            ans=new EmptyEXT("");
            ascore=NES.countScore(ans);
            vans.rankIn(ans,ascore);
        }
        else if(spt+1==ept){
            var key=OTB.theNumberOf(this.outTerm[spt]);
            var type=this.Termtype[spt];
            if(type==MathTOUCH.OP1A||type==MathTOUCH.OP1B||type==MathTOUCH.OP1P){
                ans=new EXtree1(0,key,OTB.getFirstOrder(key,this.Termtype[spt]),new EmptyEXT(""),this.inTerm[spt]);
            }
            else if(type==MathTOUCH.OP2C||type==MathTOUCH.OP2P){
                ans=new EXtree2(0,key,OTB.getFirstOrder(key,this.Termtype[spt]),new EmptyEXT(""),new EmptyEXT(""),this.inTerm[spt]);
            }
            else if(type==MathTOUCH.OP3P||type==MathTOUCH.OP3T){
                ans=new EXtree3(0,key,OTB.getFirstOrder(key,this.Termtype[spt]),new EmptyEXT(""),new EmptyEXT(""),new EmptyEXT(""),this.inTerm[spt]);
            }
            else{
                ans=this.makeEXtree(spt,ept);
            }
            if(ans!=null){
                vans=NES.makeTop10from(ans);
                for(var j=0;j<vans.getLastNumber();j++){
                    NES.setTarget(vans.getEXtreeAt(j));
                }
            }
            
        }
        else{
            if(this.Termtype[spt]==MathTOUCH.OP1P){
                var arg=this.makeEXtreeStructure(spt+1,ept,starttime);
                key=this.outKey[spt];
                var len=OTB.getOpeLength(key);
                for(ord=0;ord<len;ord++){
                    for(var j=0;j<arg.getLastNumber();j++){
                        if(OTB.getOpeType(key,ord)==MathTOUCH.OP1P){
                            ans=new EXtree1(0,key,ord,arg.getEXtreeAt(j).copy(),this.inTerm[spt]);
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000) continue;
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                            break;
                        }
                    }
                }
            }
            else if(this.Termtype[spt] ==MathTOUCH.OP2P){
                key=this.outKey[spt];
                var len=OTB.getOpeLength(key);
                for(var i=spt+2;i<ept;i++){
                    if(this.divPoint[i]){
                        var arg1=this.makeEXtreeStructure(spt+1,i,starttime);
                        var arg2=this.makeEXtreeStructure(i,ept,starttime);
                        var idxMax=[arg1.getLastNumber(),arg2.getLastNumber()];
                        if(idxMax[0]*idxMax[1]==0) continue;
                        var vidx=NES.leastIndices(_dep2*this.getMax(),idxMax);
                        for(var l=0;l<len;l++){
                            if(OTB.getOpeType(key,l)!=MathTOUCH.OP2P) continue;
                            for(var k=0;k<vidx.length;k++){
                                var idx=vidx[k];
                            
                                ans=new EXtree2(0,key,l,arg1.getEXtreeAt(idx[0]).copy(),arg2.getEXtreeAt(idx[1]).copy(),this.inTerm[spt]);
                                algscore=AlgRules.theAlgebraicType(ans);
                                if(algscore>=1000||algscore<= -1000) continue;
                                ascore=NES.countScore(ans);
                                
                                vans.rankIn(ans,ascore);
                                break;
                            }
                        }
                    }
                }
            }
            else if(this.Termtype[spt] ==MathTOUCH.OP3P){
                key=this.outKey[spt];
                var len=OTB.getOpeLength(key);
                for(var i=spt+2;i<ept-1;i++){
                    if(this.divPoint[i]){
                        for(var j=i+1;j<ept;j++){
                            if(this.divPoint[j]){
                                var arg1=this.makeEXtreeStructure(spt+1,i,starttime);
                                var arg2=this.makeEXtreeStructure(i,j,starttime);
                                var arg3=this.makeEXtreeStructure(j,ept,starttime);
                                var idxMax=[arg1.getLastNumber(),arg2.getLastNumber(),arg3.getLastNumber()];
                                if(idxMax[0]*idxMax[1]*idxMax[2]==0) continue;
                                var vidx=NES.leastIndices(_dep3*this.getMax(),idxMax);
                                for(var l=0;l<len;l++){
                                    if(OTB.getOpeType(key,l)!=MathTOUCH.OP3P) continue;
                                    for(var k=0;k<vidx.length;k++){
                                        var idx=vidx[k];
                                        ans=new EXtree3(0,key,l,arg1.getEXtreeAt(idx[0]).copy(),arg2.getEXtreeAt(idx[1]).copy(),arg3.getEXtreeAt(idx[2]).copy(),this.inTerm[spt]);
                                        algscore=AlgRules.theAlgebraicType(ans);
                                        if(algscore>=1000||algscore<= -1000) continue;
                                        ascore=NES.countScore(ans);
                                        vans.rankIn(ans,ascore);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            else if(this.Termtype[ept-1]==MathTOUCH.OP1A){
                key=this.outKey[ept-1];
                var len=OTB.getOpeLength(key);
                var arg1=this.makeEXtreeStructure(spt,ept-1,starttime);
                for(ord=0;ord<len;ord++){
                    if(OTB.getOpeType(key,ord)!=MathTOUCH.OP1A) continue;
                    for(var i=0;i<arg1.getLastNumber();i++){
                        ans=new EXtree1(0,key,ord,arg1.getEXtreeAt(i).copy(),this.inTerm[ept-1]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000) continue;
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                        break;
                    }
                }
            }
            else if(this.Termtype[spt]==MathTOUCH.OP1B){
                var BL=this.outTerm[spt];
                var BR="";
                var BR2="";
                var BR3="";
                var isTop=true;
                if(BL=="("){ BR=")";BR2="]";BR3="}";}
                else if(BL=="{"){ BR="}";BR2="]";BR3=")";}
                else if(BL=="["){ BR="]";BR2=")";BR3="}";}
                else isTop=false;
            if(isTop){
                var bra=1;
                var j;
                for(j=spt+1;j<ept;j++){
                    if(this.outTerm[j]==BL) bra++;
                    else if(this.outTerm[j]==BR){bra--;if(bra==0) break;}
                    else if(this.outTerm[j]=="matBegin"){
                        while(!(this.outTerm[j]=="matEnd")){
                            j++;
                            if(j>=ept){alert("matEnd error in ()");ans=null;}
                        }
                    }
                }
                if(j<ept){
                    key=OTB.theNumberOf(BL+BR);
                    var len=OTB.getOpeLength(key);
                    for(ord=0;ord<len;ord++){
                        ans=new EXtree1(0,key,ord,new EmptyEXT(""),BL+BR);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000) continue;
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
                else if(this.outTerm[ept-1]==BR2){
                    key=OTB.theNumberOf(BL+BR2);
                    var len=OTB.getOpeLength(key);
                    for(ord=0;ord<len;ord++){
                        ans=new EXtree1(0,key,ord,new EmptyEXT(""),BL+BR2);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000) continue;
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }

                }
                else if(this.outTerm[ept-1]==BR3){
                    key=OTB.theNumberOf(BL+BR3);
                    var len=OTB.getOpeLength(key);
                    for(ord=0;ord<len;ord++){
                        ans=new EXtree1(0,key,ord,new EmptyEXT(""),BL+BR3);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000) continue;
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }

                }
                else{
                    key=OTB.theNumberOf(BL);
                    var len=OTB.getOpeLength(key);
                    for(ord=0;ord<len;ord++){
                        ans=new EXtree1(0,key,ord,new EmptyEXT(""),BL);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000) continue;
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
            }
            }

            else if(this.Termtype[spt]==MathTOUCH.MAT){
                var npt=spt+1;
                while(!(this.outTerm[npt]=="matEnd")){
                    npt++;
                    if(npt>=ept){alert("matEnd error in middleEX:"+ept);return null;}
                }
                npt++;
                if(npt==ept){vans=this.makeMATstructure(spt,npt,starttime);}
                else{
                    var vans2=this.makeMATstructure(spt,npt,starttime);
                    for(var i=0;i<vans2.getLastNumber();i++){
                        var vans3=this.make1EXtreeStructure(vans2.getEXtreeAt(i).copy(),npt,ept,starttime);
                        vans.join(vans3);
                    }
                }
                return vans;
            }

            for(var j=0;j<vans.getLastNumber();j++){
                NES.setTarget(vans.getEXtreeAt(j));
            }

        }
        return vans;
}

MathTOUCH.middleEX.prototype.make1EXtreeTagStructure=function(f,spt,ept,starttime){
        var vans=new MathTOUCH.Top10();
        vans.setMax(this.getMax());
        var middle;
        middle=new Date().getTime();
        if((middle-starttime)>this.timeMax){
            return vans;
        }
        var ans=null;
        var ascore=0;
        var key,ord,len;
        var algscore=0;
        var _dep2=2;
        var _dep3=3;
        var fisSimple=false;

        if(f==null) vans=this.makeEXtreeTagStructure(spt,ept,starttime);
        else if(spt==ept){
            var ord=0;
            ans=new EXtree2(0,MathTOUCH.SP,ord,f,new EmptyEXT("")," ");
            ascore=NES.countScore(ans);
            NES.setTarget(ans);
            vans.rankIn(ans,ascore);
            
            ord=1;
            ans=new EXtree2(0,MathTOUCH.SP,ord,f,new EmptyEXT("")," ");
            ascore=NES.countScore(ans);
            NES.setTarget(ans);
            vans.rankIn(ans,ascore);
            
            if(f.key==MathTOUCH.SP&&f.order==3){
                ord=2;
                ans=new EXtree2(0,MathTOUCH.SP,ord,f,new EmptyEXT("")," ");
                ascore=NES.countScore(ans);
                NES.setTarget(ans);
                vans.rankIn(ans,ascore);
            }
            ord=3;
            ans=new EXtree2(0,MathTOUCH.SP,ord,f,new EmptyEXT("")," ");
            ascore=NES.countScore(ans);
            NES.setTarget(ans);
            vans.rankIn(ans,ascore);
        }
        else if(spt+1==ept){
            if(this.Termtype[spt]==MathTOUCH.OP1A){
                key=OTB.keyNumberOf(this.outTerm[spt]);
                len=OTB.getOpeLength(key);
                for(ord=0;ord<len;ord++){
                    if(OTB.getOpeType(key,ord)==MathTOUCH.OP1A){
                        ans=new EXtree1(0,key,ord,f,this.inTerm[spt]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        NES.setTarget(ans); 
                        vans.rankIn(ans,ascore);
                    }
                }
            }
            else if(this.Termtype[spt]==MathTOUCH.OP2C){
                key=OTB.keyNumberOf(this.outTerm[spt]);
                len=OTB.getOpeLength(key);
                for(ord=0;ord<len;ord++){
                    if(OTB.getOpeType(key,ord)==MathTOUCH.OP2C){
                        ans=new EXtree2(0,key,ord,f,new EmptyEXT(""),this.inTerm[spt]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        NES.setTarget(ans); 
                        vans.rankIn(ans,ascore);
                    }
                }
            }
            else if(this.Termtype[spt]==MathTOUCH.OP1B){
                key=OTB.keyNumberOf(this.outTerm[spt]);
                len=OTB.getOpeLength(key);
                if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                    for(ord=0;ord<len;ord++){
                        ans=new EXtree1(0,key,ord,f,this.inTerm[spt]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        NES.setTarget(ans); 
                        vans.rankIn(ans,ascore);
                    }
                }
                else{
                    for(ord=0;ord<len;ord++){
                        ans=new EXtree2(0,MathTOUCH.SP,0,f,new EXtree1(0,key,ord,new EmptyEXT(""),this.inTerm[spt])," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        NES.setTarget(ans.ch[1]); 
                        vans.rankIn(ans,ascore);
                    }
                }
            }
            else{
                var vtemp=this.makeEXtreeTagStructure(spt,ept,starttime);
                len=OTB.getOpeLength(MathTOUCH.SP);
                for(var i=0;i<vtemp.getLastNumber();i++){
                    ord=0;
                    ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                    algscore=AlgRules.theAlgebraicType(ans);
                    if(algscore>=1000||algscore<= -1000){
                        continue;
                    }
                    ascore=NES.countScore(ans);
                    vans.rankIn(ans,ascore);
                    if(f.cnum==0) fisSimple=true;
                    if(f.type==MathTOUCH.OP1B && (f.inputWord=="()"||f.inputWord=="{}"||f.inputWord=="[]")) fisSimple=true;
                    if(fisSimple){
                        ord=1;
                        ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                        
                        ord=3;
                        ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                    middle=new Date().getTime();
                    if((middle-starttime)>2000){
                        break;
                    }
                }
            }
        }
        else if(this.Termtype[spt]==MathTOUCH.OP2C){
            var vtemp=this.makeEXtreeStructure(spt+1,ept,starttime);
            key=this.outKey[spt];
            len=OTB.getOpeLength(key);
            for(var i=0;i<vtemp.getLastNumber();i++){
                for(ord=0;ord<len;ord++){
                    if(OTB.getOpeType(key,ord)==MathTOUCH.OP2C){
                        ans=new EXtree2(0,key,ord,f,vtemp.getEXtreeAt(i).copy(),this.inTerm[spt]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
                middle=new Date().getTime();
                if((middle-starttime)>2000){
                    break;
                }
            }
        }
        else if(this.Termtype[spt] ==MathTOUCH.OP3T){
            key=this.outKey[spt];
            len=OTB.getOpeLength(key);
            for(var i=spt+2;i<ept;i++){
                if(this.divPoint[i]){
                    var arg2=this.makeEXtreeStructure(spt+1,i,starttime);
                    var arg3=this.makeEXtreeStructure(i,ept,starttime);
                    var idxMax=[arg2.getLastNumber(),arg3.getLastNumber()];
                    if(idxMax[0]*idxMax[1]==0) continue;
                    var vidx=NES.leastIndices(_dep2*this.getMax(),idxMax);
                    for(var k=0;k<vidx.length;k++){
                        var idx=vidx[k];
                        for(var l=0;l<len;l++){
                            if(OTB.getOpeType(key,l)!=MathTOUCH.OP3T) continue;
                            ans=new EXtree3(0,key,l,f,arg2.getEXtreeAt(idx[0]).copy(),arg3.getEXtreeAt(idx[1]).copy(),this.inTerm[spt]);
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000){
                                continue;
                            }
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                }
            }
        }
        else if(this.Termtype[spt]==MathTOUCH.OP1A){
            key=this.outKey[spt];
            len=OTB.getOpeLength(key);
            for(ord=0;ord<len;ord++){
                if(OTB.getOpeType(key,ord)==MathTOUCH.OP1A){
                    var vans2=this.make1EXtreeStructure(new EXtree1(0,key,ord,f,this.inTerm[spt]),spt+1,ept,starttime);
                    vans.join(vans2);
                }
            }
        }
        else if(this.Termtype[spt]==MathTOUCH.EMP||this.Termtype[spt]==MathTOUCH.NUM||this.Termtype[spt]==MathTOUCH.VAR||this.Termtype[spt]==MathTOUCH.SYM||this.Termtype[spt]==MathTOUCH.XTML||this.Termtype[spt]==MathTOUCH.TXT){
            var vtemp;
            if(MathTOUCH.Device!=MathTOUCH.Device_PC){
                    vtemp=this.make1EXtreeStructure(f,spt,spt+1,starttime);
                    for(var i=0;i<vtemp.getLastNumber();i++){
                    var vans2=this.make1EXtreeStructure(vtemp.getEXtreeAt(i).copy(),spt+1,ept,starttime);
                    vans.join(vans2);
                }
            }
            vtemp=this.makeEXtreeStructure(spt,ept,starttime);
            len=OTB.getOpeLength(MathTOUCH.SP);
            for(var i=0;i<vtemp.getLastNumber();i++){
                for(ord=0;ord<len;ord++){
                    if(ord==2){
                        if(f.type==MathTOUCH.OP2C&&f.key==MathTOUCH.SP&&f.order==3){
                            ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000){
                                continue;
                            }
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                    else{
                        ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        var rin=vans.rankIn(ans,ascore);
                    }
                }
                middle=new Date().getTime();
                if((middle-starttime)>2000){
                    break;
                }
            }
        }
        else if(this.Termtype[spt]==MathTOUCH.MAT){
            var vtemp=this.makeEXtreeStructure(spt,ept,starttime);
            for(var i=0;i<vtemp.getLastNumber();i++){
                ans=new EXtree2(0,MathTOUCH.SP,0,f,vtemp.getEXtreeAt(i).copy()," ");
                algscore=AlgRules.theAlgebraicType(ans);
                if(algscore>=1000||algscore<= -1000){
                    continue;
                }
                ascore=NES.countScore(ans);
                vans.rankIn(ans,ascore);
            }
        }
        else if(this.Termtype[spt]==MathTOUCH.OP1P||this.Termtype[spt]==MathTOUCH.OP2P||this.Termtype[spt]==MathTOUCH.OP3P){
            var vtemp=this.makeEXtreeStructure(spt,ept,starttime);
            len=OTB.getOpeLength(MathTOUCH.SP);
            for(var i=0;i<vtemp.getLastNumber();i++){
                for(ord=0;ord<len;ord++){
                    if(ord==2){
                        if(f.type==MathTOUCH.OP2C&&f.key==MathTOUCH.SP&&f.order==3){
                            ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000){
                                continue;
                            }
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                    else{
                        ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            continue;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
                middle=new Date().getTime();
                if((middle-starttime)>2000){
                    break;
                }

            }
        }
        else if(this.Termtype[spt]==MathTOUCH.OP1B){
            if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                var vtemp=this.make1EXtreeStructure(f,spt,spt+1,starttime);
                for(var i=0;i<vtemp.getLastNumber();i++){
                    var vans2=this.make1EXtreeStructure(vtemp.getEXtreeAt(i).copy(),spt+1,ept,starttime);
                    vans.join(vans2);
                }
            }
            else{
                var vtemp=this.makeEXtreeStructure(spt,ept,starttime);
                len=OTB.getOpeLength(MathTOUCH.SP);
                for(var i=0;i<vtemp.getLastNumber();i++){
                    for(ord=0;ord<len;ord++){
                        if(ord==2){
                            if(f.type==MathTOUCH.OP2C&&f.key==MathTOUCH.SP&&f.order==3){
                                ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                                algscore=AlgRules.theAlgebraicType(ans);
                                if(algscore>=1000||algscore<= -1000){
                                    continue;
                                }
                                ascore=NES.countScore(ans);
                                vans.rankIn(ans,ascore);
                            }
                        }
                        else{
                            ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000){
                                continue;
                            }
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                }
            }
        }
        else{ans=null; alert("error make1EXtreeStructure");
        }
        return vans;
}
MathTOUCH.middleEX.prototype.remake1EXtreeStructure=function(f,spt,ept,starttime){
        var vans=new MathTOUCH.Top10();
        vans.setMax(this.getMax());
        var middle;
        middle=new Date().getTime();
        if((middle-starttime)>this.timeMax){
            return vans;
        }
        var ans=null;
        var ascore=0;
        var key,ord,len;
        var algscore=0;
        var _dep2=2;
        var _dep3=3;

		if(f==null) vans=this.makeEXtreeStructure(spt,ept,starttime);
		else if(spt==ept){ ans=f;ascore=NES.countScore(ans);vans.rankIn(ans,ascore);}
		else if(spt+1==ept){
			if(this.Termtype[spt]==MathTOUCH.OP1A){
                key=OTB.keyNumberOf(this.outTerm[spt]);
                len=OTB.getOpeLength(key);
                for(ord=0;ord<len;ord++){
                    if(OTB.getOpeType(key,ord)==MathTOUCH.OP1A){
                        ans=new EXtree1(0,key,ord,f,this.inTerm[spt]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            var temp=AlgRules.reform(ans);
                            if(temp==null) continue;
                            else ans=temp;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
			}
			else if(this.Termtype[spt]==MathTOUCH.OP2C){
                key=OTB.keyNumberOf(this.outTerm[spt]);
                len=OTB.getOpeLength(key);
                for(ord=0;ord<len;ord++){
                    if(OTB.getOpeType(key,ord)==MathTOUCH.OP2C){
                        ans=new EXtree2(0,key,ord,f,new EmptyEXT(""),this.inTerm[spt]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            var temp=AlgRules.reform(ans);
                            if(temp==null) continue;
                            else ans=temp;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
			}
            else if(this.Termtype[spt]==MathTOUCH.OP1B){
                key=OTB.keyNumberOf(this.outTerm[spt]);
                len=OTB.getOpeLength(key);
                if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                    for(ord=0;ord<len;ord++){
                        ans=new EXtree1(0,key,ord,f,this.inTerm[spt]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            var temp=AlgRules.reform(ans);
                            if(temp==null) continue;
                            else ans=temp;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
                else{
                    for(ord=0;ord<len;ord++){
                        ans=new EXtree2(0,MathTOUCH.SP,0,f,new EXtree1(0,key,ord,new EmptyEXT(""),this.inTerm[spt])," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            var temp=AlgRules.reform(ans);
                            if(temp==null) continue;
                            else ans=temp;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
			}
			else{
				var vtemp=this.makeEXtreeStructure(spt,ept,starttime);
                len=OTB.getOpeLength(MathTOUCH.SP);
				for(var i=0;i<vtemp.getLastNumber();i++){
                    ord=0;
                    ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                    algscore=AlgRules.theAlgebraicType(ans);
                    if(algscore>=1000||algscore<= -1000){
                        var temp=AlgRules.reform(ans);
                        if(temp==null) continue;
                        else ans=temp;
                    }
                    ascore=NES.countScore(ans);
                    vans.rankIn(ans,ascore);
                }
			}
		}
		else if(this.Termtype[spt]==MathTOUCH.OP2C){
			var vtemp=this.makeEXtreeStructure(spt+1,ept,starttime);
            key=this.outKey[spt];
            len=OTB.getOpeLength(key);
			for(var i=0;i<vtemp.getLastNumber();i++){
                for(ord=0;ord<len;ord++){
                    if(OTB.getOpeType(key,ord)==MathTOUCH.OP2C){
                        ans=new EXtree2(0,key,ord,f,vtemp.getEXtreeAt(i).copy(),this.inTerm[spt]);
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            var temp=AlgRules.reform(ans);
                            if(temp==null) continue;
                            else ans=temp;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
			}
		}
		else if(this.Termtype[spt] ==MathTOUCH.OP3T){
            key=this.outKey[spt];
            len=OTB.getOpeLength(key);
			for(var i=spt+2;i<ept;i++){
                if(this.divPoint[i]){
                    var arg2=this.makeEXtreeStructure(spt+1,i,starttime);
                    var arg3=this.makeEXtreeStructure(i,ept,starttime);
                    var idxMax=[arg2.getLastNumber(),arg3.getLastNumber()];
                    if(idxMax[0]*idxMax[1]==0) continue;
                    var vidx=NES.leastIndices(_dep2*this.getMax(),idxMax);
                    for(var k=0;k<vidx.length;k++){
                        var idx=vidx[k];
                        for(var l=0;l<len;l++){
                            if(OTB.getOpeType(key,l)!=MathTOUCH.OP3T) continue;
                            ans=new EXtree3(0,key,l,f,arg2.getEXtreeAt(idx[0]).copy(),arg3.getEXtreeAt(idx[1]).copy(),this.inTerm[spt]);
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000){
                                var temp=AlgRules.reform(ans);
                                if(temp==null) continue;
                                else ans=temp;
                            }
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                }
            }
		}
		else if(this.Termtype[spt]==MathTOUCH.OP1A){
            key=this.outKey[spt];
            len=OTB.getOpeLength(key);
            for(ord=0;ord<len;ord++){
                if(OTB.getOpeType(key,ord)==MathTOUCH.OP1A){
                    var vans2=this.remake1EXtreeStructure(new EXtree1(0,key,ord,f,this.inTerm[spt]),spt+1,ept,starttime);
                    vans.join(vans2);
                }
            }
		}
		else if(this.Termtype[spt]==MathTOUCH.EMP||this.Termtype[spt]==MathTOUCH.NUM||this.Termtype[spt]==MathTOUCH.VAR||this.Termtype[spt]==MathTOUCH.SYM||this.Termtype[spt]==MathTOUCH.XTML||this.Termtype[spt]==MathTOUCH.TXT){
            var vtemp;
            vtemp=this.remake1EXtreeStructure(f,spt,spt+1,starttime);
			for(var i=0;i<vtemp.getLastNumber();i++){
                var vans2=this.remake1EXtreeStructure(vtemp.getEXtreeAt(i).copy(),spt+1,ept,starttime);
                vans.join(vans2);
            }
            vtemp=this.makeEXtreeStructure(spt,ept,starttime);
            len=OTB.getOpeLength(MathTOUCH.SP);
            for(var i=0;i<vtemp.getLastNumber();i++){
                for(ord=0;ord<len;ord++){
                    if(ord==2){
                        if(f.type==MathTOUCH.OP2C&&f.key==MathTOUCH.SP&&f.order==3){
                            ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000){
                                var temp=AlgRules.reform(ans);
                                if(temp==null) continue;
                                else ans=temp;
                            }
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                    else{
                        ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            var temp=AlgRules.reform(ans);
                            if(temp==null) continue;
                            else ans=temp;
                        }
                        ascore=NES.countScore(ans);
                        var rin=vans.rankIn(ans,ascore);
                    }
                }
            }
		}
		else if(this.Termtype[spt]==MathTOUCH.MAT){
			var vtemp=this.makeEXtreeStructure(spt,ept,starttime);
			for(var i=0;i<vtemp.getLastNumber();i++){
                ans=new EXtree2(0,MathTOUCH.SP,0,f,vtemp.getEXtreeAt(i).copy()," ");
                algscore=AlgRules.theAlgebraicType(ans);
                if(algscore>=1000||algscore<= -1000){
                    var temp=AlgRules.reform(ans);
                    if(temp==null) continue;
                    else ans=temp;
                }
                ascore=NES.countScore(ans);
                vans.rankIn(ans,ascore);
            }
		}
		else if(this.Termtype[spt]==MathTOUCH.OP1P||this.Termtype[spt]==MathTOUCH.OP2P||this.Termtype[spt]==MathTOUCH.OP3P){
			var vtemp=this.makeEXtreeStructure(spt,ept,starttime);
            len=OTB.getOpeLength(MathTOUCH.SP);
			for(var i=0;i<vtemp.getLastNumber();i++){
                for(ord=0;ord<len;ord++){
                    if(ord==2){
                        if(f.type==MathTOUCH.OP2C&&f.key==MathTOUCH.SP&&f.order==3){
                            ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000){
                                var temp=AlgRules.reform(ans);
                                if(temp==null) continue;
                                else ans=temp;
                            }
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                    else{
                        ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                        algscore=AlgRules.theAlgebraicType(ans);
                        if(algscore>=1000||algscore<= -1000){
                            var temp=AlgRules.reform(ans);
                            if(temp==null) continue;
                            else ans=temp;
                        }
                        ascore=NES.countScore(ans);
                        vans.rankIn(ans,ascore);
                    }
                }
            }
		}
		else if(this.Termtype[spt]==MathTOUCH.OP1B){
			if(this.outTerm[spt]==")"||this.outTerm[spt]=="}"||this.outTerm[spt]=="]"){
                var vtemp=this.remake1EXtreeStructure(f,spt,spt+1,starttime);
                for(var i=0;i<vtemp.getLastNumber();i++){
                    var vans2=this.remake1EXtreeStructure(vtemp.getEXtreeAt(i).copy(),spt+1,ept,starttime);
                    vans.join(vans2);
                }
            }
            else{
                var vtemp=this.makeEXtreeStructure(spt,ept,starttime);
                len=OTB.getOpeLength(MathTOUCH.SP);
                for(var i=0;i<vtemp.getLastNumber();i++){
                    for(ord=0;ord<len;ord++){
                        if(ord==2){
                            if(f.type==MathTOUCH.OP2C&&f.key==MathTOUCH.SP&&f.order==3){
                                ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                                algscore=AlgRules.theAlgebraicType(ans);
                                if(algscore>=1000||algscore<= -1000){
                                    var temp=AlgRules.reform(ans);
                                    if(temp==null) continue;
                                    else ans=temp;
                                }
                                ascore=NES.countScore(ans);
                                vans.rankIn(ans,ascore);
                            }
                        }
                        else{
                            ans=new EXtree2(0,MathTOUCH.SP,ord,f,vtemp.getEXtreeAt(i).copy()," ");
                            algscore=AlgRules.theAlgebraicType(ans);
                            if(algscore>=1000||algscore<= -1000){
                                var temp=AlgRules.reform(ans);
                                if(temp==null) continue;
                                else ans=temp;
                            }
                            ascore=NES.countScore(ans);
                            vans.rankIn(ans,ascore);
                        }
                    }
                }
            }
		}
		else{ans=null; alert("error remake1EXtreeStructure");
		}
		return vans;
}

MathTOUCH.middleEX.prototype.makeMATstructure=function(spt,ept,starttime){
        var vans=new MathTOUCH.Top10();
        vans.setMax(this.getMax());
        var ans=null;
        var ascore=0;
        var temp=null;
        if(this.outTerm[spt]!="matBegin"||this.outTerm[ept-1]!="matEnd") return vans;
        var mpt=new Array();
        var mnum=0;
        var rownum=0,colnum=0;
        var row=0;
        var col=0;
        var j;
        for(j=spt+1;j<ept-1;j++){
            if(this.outTerm[j]=="\u27B1"){col++;mpt[mnum++]=j;}
            else if(this.outTerm[j]=="\u23cE"){
                row++;
                mpt[mnum++]=j;
                col++;
                if(col>colnum) colnum=col;
                col=0;
            }
        }
        rownum=row+1;
        col++;if(col>colnum) colnum=col;
        if(mnum>0){
            var elem=new Array();
            for(var i=0;i<rownum*colnum;i++) elem[i]=new MathTOUCH.Top10();
            row=0;col=0;j=spt+1;
            for(var i=0;i<mnum;i++){
                if(j<mpt[i]){
                    elem[row*colnum+col]=this.makeEXtreeStructure(j,mpt[i],starttime);
                    if(this.outTerm[mpt[i]]=="\u27B1") col++;
                    else if(this.outTerm[mpt[i]]=="\u23cE"){col=0;row++;}
                    j=mpt[i]+1;
                }
                else{
                    elem[row*colnum+col].rankIn(new EmptyEXT(""),-1);
                    if(this.outTerm[mpt[i]]=="\u27B1") col++;
                    else if(this.outTerm[mpt[i]]=="\u23cE"){col=0;row++;}
                    j=mpt[i]+1;
                }
            }
            if(j<ept){
                if(j<ept-1){
                    elem[row*colnum+col]=this.makeEXtreeStructure(j,ept-1,starttime);
                }
                else{
                    elem[row*colnum+col].rankIn(new EmptyEXT(""),-1);
                }
            }
            var Mnum=rownum*colnum;
            var LEN=new Array();
            for(var i=0;i<Mnum;i++){
                LEN[i]=elem[i].getLastNumber();
                if(LEN[i]==0) return vans;
            }
            var vidx=NES.leastIndices(3*this.getMax(),LEN);
            for(var k=0;k<vidx.length;k++){
                var elems=new Array();
                var idx=vidx[k];
                for(var i=0;i<Mnum;i++){
                    elems[i]=elem[i].getEXtreeAt(idx[i]).copy();
                }
                ans=new EXtreeMat0(0,rownum,colnum,elems,"MAT");
                vans.rankIn(ans,NES.countScore(ans));
            }
        }
        return vans;
}
