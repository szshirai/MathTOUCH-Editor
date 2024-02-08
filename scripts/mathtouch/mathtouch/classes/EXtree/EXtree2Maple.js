MathTOUCH.EXtree2Maple = function(){
}

MathTOUCH.EXtree2Maple.prototype.Mapleof = function(ex){
		var ans;
		switch(ex.type){
			case MathTOUCH.EMP:
				ans=" ";
				break;
			case MathTOUCH.NUM:
				if(ex.val.charAt(0)=='b') ans=ex.val.substring(1);
				else ans=ex.val;
				break;
			case MathTOUCH.VAR:
				if(ex.val=="\\pi") ans="Pi";
                else if(ex.val=="\\infty") ans="infinity";
                else if(ex.val=="e"){
                    if(ex.parent!=null&&ex.parent.key==MathTOUCH.SP&&ex.parent.order==1){
                        ans="%e";
                    }
                    else ans=ex.val;
                }
                else if(ex.val=="\\theta") ans="theta";
                else if(ex.val=="\\alpha") ans="alpha";
                else if(ex.val=="\\beta") ans="beta";
                else if(ex.val=="\\phi") ans="phi";
                else if(ex.val=="\\omega") ans="omega";
				else ans=ex.val;
				break;
			case MathTOUCH.SYM:
                ans=ex.val;
				break;
			case MathTOUCH.TXT:
				ans="";
				break;
			case MathTOUCH.XTML:
				ans=this.Mapleof(EXTML.parse(ex.inputWord,ex.val));
				break;
			case MathTOUCH.MAT:
				ans="Matrix([";
				for(var i=0;i<ex.rownum-1;i++){
					ans=ans+"[";
					for(var j=0;j<ex.colnum-1;j++){
						if(ex.ch[i*ex.colnum+j]==null) ans=ans+" ,";
						else ans=ans+this.Mapleof(ex.ch[i*ex.colnum+j])+",";
					}
					if(ex.ch[i*ex.colnum+ex.colnum-1]==null) ans=ans+" ],";
					else ans=ans+this.Mapleof(ex.ch[i*ex.colnum+ex.colnum-1])+"],";
				}
				ans=ans+"[";
					for(var j=0;j<ex.colnum-1;j++){
						if(ex.ch[(ex.rownum-1)*ex.colnum+j]==null) ans=ans+" ,";
						else ans=ans+this.Mapleof(ex.ch[(ex.rownum-1)*ex.colnum+j])+",";
					}
					if(ex.ch[(ex.rownum-1)*ex.colnum+ex.colnum-1]==null) ans=ans+" ]";
					else ans=ans+this.Mapleof(ex.ch[(ex.rownum-1)*ex.colnum+ex.colnum-1])+"]";
				ans=ans+"])";
				break;
			default:
				var excode=OTB.theEXcode(ex.key,ex.order);
				var opec=excode.charAt(1);
				excode=excode.substring(2);
				var texcode=OTB.theTeXcode(ex.key,ex.order);
				switch(ex.type){
					case MathTOUCH.OP1P: ans=this.OP1PexRep(opec, excode, texcode, ex);
							break;
					case MathTOUCH.OP1A : ans=this.OP1AexRep(opec, excode, texcode, ex);
							break;
					case MathTOUCH.OP1B: ans=this.OP1BexRep(opec, excode, texcode, ex);
							break;
					case MathTOUCH.OP2C: ans=this.OP2CexRep(opec, excode, texcode, ex);
							break;
					case MathTOUCH.OP2P: ans=this.OP2PexRep(opec, excode, texcode, ex);
							break;
					case MathTOUCH.OP3P:	ans=this.OP3PexRep(opec, excode, texcode, ex);
							break;
					case MathTOUCH.OP3T:	ans=this.OP3TexRep(opec, excode, texcode, ex);
							break;
					default:
							ans=null;
				}
		}
		
		return ans;
};

MathTOUCH.EXtree2Maple.prototype.OP1PexRep = function(opec, excode, texcode, ex){
    var ans=null;
		switch(opec){
			case '0':
				if(excode=="+") ans=excode+"("+this.Mapleof(ex.ch[0])+")";
				else if(excode=="-") ans=excode+"("+this.Mapleof(ex.ch[0])+")";
                else if(excode=="log") ans="log[10]("+this.Mapleof(ex.ch[0])+")";
				else if(excode=="ln") ans="Log("+this.Mapleof(ex.ch[0])+")";
                else if(excode=="sin")ans="sin("+this.Mapleof(ex.ch[0])+")";
                else if(excode=="cos")ans="cos("+this.Mapleof(ex.ch[0])+")";
                else if(excode=="tan")ans="tan("+this.Mapleof(ex.ch[0])+")";
				else ans=excode+"("+this.Mapleof(ex.ch[0])+")";
				break;
			case 'a':
                
				ans="arc"+excode+"("+this.Mapleof(ex.ch[0])+")";
				break;
			case '9':
				var tmp=ex.ch[0];
				if(tmp.key==MathTOUCH.SP&&tmp.order==0){
					if(tmp.ch[0].key==MathTOUCH.SP&&tmp.ch[0].order==0){
						if(tmp.ch[0].ch[1].type==VAR&&tmp.ch[0].ch[1].val=="d"){
							var x=tmp.ch[1].copy();
							var f=tmp.ch[0].ch[0].copy();
							ans="int"+"("+this.Mapleof(f)+","+this.Mapleof(x)+")";
						}
						else ans="";
					}
					else ans="";
				}
				else ans="";
				break;
			case 'b':
				ans="sum("+this.Mapleof(ex.ch[0])+")";
				break;
			case '1':
				ans="sqrt("+this.Mapleof(ex.ch[0])+")";
				break;
			case '2':
			case '3': 
			case '4': 
			case '5': 
			case '6':
			case '7':
			case '8':
			case 'c':
			case 'd':
			case 'e':
			case 'f': 
			case 'g':
			case 'h':
				ans="";
				break;
			default:
				ans="{OP1P Error}";
		}
		return ans;
};

MathTOUCH.EXtree2Maple.prototype.OP1AexRep = function(opec, excode, texcode, ex){
		var ans=null;
		switch(opec){
			case '0':
				if(excode=="!") ans=this.Mapleof(ex.ch[0])+"!";
				else if(excode=="'") ans="diff("+this.Mapleof(ex.ch[0])+",x)";
				else if(excode=="\"") ans="diff("+this.Mapleof(ex.ch[0])+",x,2)";
				else ans="";
				break;
			case '1':
                if(excode=="circ"){
                    ans="("+this.Mapleof(ex.ch[0])+")*Pi/180";
                }
                break;
			case '3': 
			case '2': 
            case '4': 
			case '8':
            case '9': 
                ans="";
                break;
            default:
				ans="{OP1A Error}";
		}
		return ans;
};

MathTOUCH.EXtree2Maple.prototype.OP1BexRep = function(opec, excode, texcode, ex){
		var ans=null;
		var i=texcode.indexOf(',');
		var Lbra=texcode.substring(0,i);
		var Rbra=texcode.substring(i+1);
		switch(opec){
			case '0':
			case '1':
                if(excode=="|1") ans="abs("+this.Mapleof(ex.ch[0])+")";
				else ans="("+this.Mapleof(ex.ch[0])+")";
				break;
			case '2':
			case '3':
			case '4':
			case '5':
				ans=this.Mapleof(ex.ch[0])+" ";
				break;
			default:
				ans="{OP1B Error}";
		}
		return ans;
};

MathTOUCH.EXtree2Maple.prototype.OP2CexRep = function(opec, excode, texcode, ex){
		var ans=null;
		switch(opec){
			case '0':
				ans=this.Mapleof(ex.ch[0])+"*"+this.Mapleof(ex.ch[1]);
				break;
			case '1':
				if(ex.ch[0].cnum==0){
                    if(ex.ch[0].val=="e"){
                        ans="exp("+this.Mapleof(ex.ch[1])+")";
                    }
                    else ans=this.Mapleof(ex.ch[0])+"^("+this.Mapleof(ex.ch[1])+")";
                }
                else ans="("+this.Mapleof(ex.ch[0])+")^("+this.Mapleof(ex.ch[1])+")";
				break;
			case '2':
				if(ex.ch[0].key==MathTOUCH.SP && ex.ch[0].order==3){
					if(ex.ch[0].ch[0].cnum==0) ans=this.Mapleof(ex.ch[0].ch[0])+"_"+this.Mapleof(ex.ch[0].ch[1])+"^("+this.Mapleof(ex.ch[1])+")";
                    else ans="("+this.Mapleof(ex.ch[0].ch[0])+"_"+this.Mapleof(ex.ch[0].ch[1])+")^("+this.Mapleof(ex.ch[1])+")";
                }
				else ans="{SubSuperscript Error}";
				break;
			case '3':
				if(ex.ch[0].cnum==0) ans=this.Mapleof(ex.ch[0])+"_"+this.Mapleof(ex.ch[1]);
                else ans="("+this.Mapleof(ex.ch[0])+"_"+this.Mapleof(ex.ch[1])+")";
				break;
			case '4':
				ans="{}^{"+this.Mapleof(ex.ch[0])+"}"+this.Mapleof(ex.ch[1]);
				break;
			case '5':
				ans="{}_{"+this.Mapleof(ex.ch[0])+"}"+this.Mapleof(ex.ch[1]);
				break;
			case '6':
				if(excode=="*"||excode=="cdot"||excode=="times"){
					if(ex.ch[0].cnum==0) ans=this.Mapleof(ex.ch[0])+"*";
					else ans="("+this.Mapleof(ex.ch[0])+")*";
					if(ex.ch[1].cnum==0) ans=ans+this.Mapleof(ex.ch[1]);
					else ans=ans+"("+this.Mapleof(ex.ch[1])+")";
				}
				else if(excode=="+"||excode=="-"||excode=="/"){
					if(ex.ch[0].cnum==0) ans=this.Mapleof(ex.ch[0])+excode;
					else ans="("+this.Mapleof(ex.ch[0])+")"+excode;
					if(ex.ch[1].cnum==0) ans=ans+this.Mapleof(ex.ch[1]);
					else ans=ans+"("+this.Mapleof(ex.ch[1])+")";
				}
				else ans ="";
				break;
			case 'c':
				ans=this.Mapleof(ex.ch[0])+","+this.Mapleof(ex.ch[1]);
				break;
			case '.':
                ans=this.Mapleof(ex.ch[0])+"."+this.Mapleof(ex.ch[1]);
				break;
			case ',':
			case ':':
			case ';':
			case '>':
			case 'q':
			case '!':
			case '-':
			case '<':
				ans=this.Mapleof(ex.ch[0])+"*"+this.Mapleof(ex.ch[1]);
				break;
			case '7': 
                var tmpnum=ex.ch[0];
                var tmpden=ex.ch[1];
                if(tmpnum.type==MathTOUCH.OP2C&&tmpnum.key==MathTOUCH.SP&&tmpnum.order==0&&tmpden.type==MathTOUCH.OP2C&&tmpden.key==MathTOUCH.SP&&tmpden.order==0){ 
                    if(tmpnum.ch[0].type==VAR&&tmpnum.ch[0].val=="d"&&tmpden.ch[0].type==VAR&&tmpden.ch[0].val=="d"){
                        var x=tmpden.ch[1].copy();
                        var f=tmpnum.ch[1].copy();
                        ans="diff"+"("+this.Mapleof(f)+","+this.Mapleof(x)+")";
                        break;
                    }
                }
				if(ex.ch[0].cnum==0) ans=this.Mapleof(ex.ch[0])+"/";
				else ans="("+this.Mapleof(ex.ch[0])+")"+"/";
				if(ex.ch[1].cnum==0) ans=ans+this.Mapleof(ex.ch[1]);
				else ans=ans+"("+this.Mapleof(ex.ch[1])+")";
				break;
			case '9': 
				if(ex.ch[1].cnum==0) ans=this.Mapleof(ex.ch[1])+"/";
				else ans="("+this.Mapleof(ex.ch[1])+")"+"/";
				if(ex.ch[0].cnum==0) ans=ans+this.Mapleof(ex.ch[0]);
				else ans=ans+"("+this.Mapleof(ex.ch[0])+")";
				break;
			case '8':
				if(ex.ch[1].cnum==0) ans=this.Mapleof(ex.ch[1])+"^(1/";
				else ans="("+this.Mapleof(ex.ch[1])+")"+"^(1/";
				ans=ans+this.Mapleof(ex.ch[0])+")";
				break;
			default:
				ans="{OP2C error}";
		}
        return ans;
};

MathTOUCH.EXtree2Maple.prototype.OP2PexRep = function(opec, excode, texcode, ex){
		var ans=null;
		switch(opec){
			case '0':
			case '2':
				ans="";
				break;
			case '1':
				ans="log["+this.Mapleof(ex.ch[0])+"]("+this.Mapleof(ex.ch[1])+")";
				break;
			case '3':
                if(excode=="sin"){
                    ans="sin("+this.Mapleof(ex.ch[1])+")^("+this.Mapleof(ex.ch[0])+")";
                }
                else if(excode=="cos")ans="cos("+this.Mapleof(ex.ch[1])+")^("+this.Mapleof(ex.ch[0])+")";
                else if(excode=="tan")ans="tan("+this.Mapleof(ex.ch[1])+")^("+this.Mapleof(ex.ch[0])+")";
                else{
                    ans=texcode+"("+this.Mapleof(ex.ch[1])+")^("+this.Mapleof(ex.ch[0])+")";
                }
				break;
			case '4':
				var excode2=OTB.theEXcode(ex.ch[0].key,ex.ch[0].order);
				var opec2=excode2.charAt(1);
				excode2=excode2.substring(2);
				if(excode2=="rightarrow"&&opec2=='6'){
					var tmpX=ex.ch[0].ch[0];
					var tmpN=ex.ch[0].ch[1];
					ans="limit("+this.Mapleof(ex.ch[1])+","+this.Mapleof(tmpX)+"="+this.Mapleof(tmpN)+")";
				}
				else ans="";
				break;
			default:
				ans="{OP2P Error}";
		}
		return ans;
};

MathTOUCH.EXtree2Maple.prototype.OP3PexRep = function(opec, excode, texcode, ex){
		var ans=null;
		switch(opec){
			case '0':
				if(excode=="sum"){
					var excode2=OTB.theEXcode(ex.ch[0].key,ex.ch[0].order);
					var opec2=excode2.charAt(1);
					excode2=excode2.substring(2);
					if(excode2=="="&&opec2=='6'){
						var tmpX=ex.ch[0].ch[0];
						var tmpN=ex.ch[0].ch[1];
						ans="sum("+this.Mapleof(ex.ch[2])+","+this.Mapleof(tmpX)+"="+this.Mapleof(tmpN)+".."+this.Mapleof(ex.ch[1])+")";
					}
					else ans="";
				}
				else if(excode=="prod"){
					var excode2=OTB.theEXcode(ex.ch[0].key,ex.ch[0].order);
					var opec2=excode2.charAt(1);
					excode2=excode2.substring(2);
					if(excode2=="="&&opec2=='6'){
						var tmpX=ex.ch[0].ch[0];
						var tmpN=ex.ch[0].ch[1];
						ans="product("+this.Mapleof(ex.ch[2])+","+this.Mapleof(tmpX)+"="+this.Mapleof(tmpN)+".."+this.Mapleof(ex.ch[1])+")";
					}
					else ans="";
				}
				else ans="";
				break;
			case '1':
				var tmp=ex.ch[2];
				if(tmp.type==MathTOUCH.OP2C&&tmp.key==MathTOUCH.SP&&tmp.order==0){
					if(tmp.ch[0].key==MathTOUCH.SP&&tmp.ch[0].order==0){
						if(tmp.ch[0].ch[1].type==VAR&&tmp.ch[0].ch[1].val=="d"){
							var x=tmp.ch[1].copy();
							var f=tmp.ch[0].ch[0].copy();
							ans="int"+"("+this.Mapleof(f)+","+this.Mapleof(x)+"="+this.Mapleof(ex.ch[0])+".."+this.Mapleof(ex.ch[1])+")";
                        }
						else ans="";
					}
					else ans="";
				}
				else ans="";
				break;
			default:
				ans="{OP3P Error}";
		}
		return ans;
};

MathTOUCH.EXtree2Maple.prototype.OP3TexRep = function(opec, excode, texcode, ex){
    var ans=null;
    switch(opec){
        case '0':
        case '1':
        case '2':
            ans="";
            break;
        default:
            ans="{OP3P Error}";
    }
    return ans;
};
