MathTOUCH.EXtree2Word = function(){
};

MathTOUCH.EXtree2Word.prototype.Wordof = function(ex){
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
                ans=ex.val;
                if(ex.val.length>1) ans=ans+" ";
				break;
			case MathTOUCH.SYM:
                ans=ex.val;
				break;
			case MathTOUCH.TXT:
				ans="\""+ex.val+"\"";
				break;
			case MathTOUCH.XTML:
				ans=this.Wordof(EXTML.parse(ex.inputWord,ex.val));
				break;
			case MathTOUCH.MAT:
				ans="\\matrix(";
				for(var i=0;i<ex.rownum-1;i++){
					for(var j=0;j<ex.colnum-1;j++){
						if(ex.ch[i*ex.colnum+j]==null) ans=ans+"&";
						else ans=ans+this.Wordof(ex.ch[i*ex.colnum+j])+"&";
					}
					if(ex.ch[i*ex.colnum+ex.colnum-1]==null) ans=ans+"@";
					else ans=ans+this.Wordof(ex.ch[i*ex.colnum+ex.colnum-1])+"@";
				}
					for(var j=0;j<ex.colnum-1;j++){
						if(ex.ch[(ex.rownum-1)*ex.colnum+j]==null) ans=ans+"&";
						else ans=ans+this.Wordof(ex.ch[(ex.rownum-1)*ex.colnum+j])+"&";
					}
					if(ex.ch[(ex.rownum-1)*ex.colnum+ex.colnum-1]==null) ans=ans+"";
					else ans=ans+this.Wordof(ex.ch[(ex.rownum-1)*ex.colnum+ex.colnum-1])+"";
				ans=ans+")";
				break;
			default:
				var excode=OTB.theEXcode(ex.key,ex.order);
				var opec=excode.charAt(1);
				excode=excode.substring(2);
				var texcode=OTB.theTeXcode(ex.key,ex.order);
				switch(ex.type){
					case MathTOUCH.OP1P: ans=this.OP1PexRep(opec,excode,texcode,ex);
							break;
					case MathTOUCH.OP1A: ans=this.OP1AexRep(opec,excode,texcode,ex);
							break;
					case MathTOUCH.OP1B: ans=this.OP1BexRep(opec,excode,texcode,ex);
							break;
					case MathTOUCH.OP2C: ans=this.OP2CexRep(opec,excode,texcode,ex);
							break;
					case MathTOUCH.OP2P: ans=this.OP2PexRep(opec,excode,texcode,ex);
							break;
					case MathTOUCH.OP3P:	ans=this.OP3PexRep(opec,excode,texcode,ex);
							break;
					case MathTOUCH.OP3T:	ans=this.OP3TexRep(opec,excode,texcode,ex);
							break;
					default:
							ans=null;
				}
		}
		
		return ans;
	};
		
	MathTOUCH.EXtree2Word.prototype.OP1PexRep=function(opec,excode,texcode,ex){
		var ans=null;
		switch(opec){
			case '0':
				if(excode=="+") ans="〖"+excode+this.Wordof(ex.ch[0])+"〗";
				else if(excode=="-") ans="〖"+excode+this.Wordof(ex.ch[0])+"〗";
				else if(excode=="log") ans=excode+" 〖"+this.Wordof(ex.ch[0])+"〗";
				else if(excode=="ln") ans="ln 〖"+this.Wordof(ex.ch[0])+"〗";
                else if(excode=="sin")ans="sin 〖"+this.Wordof(ex.ch[0])+"〗";
                else if(excode=="cos")ans="cos 〖"+this.Wordof(ex.ch[0])+"〗";
                else if(excode=="tan")ans="tan 〖"+this.Wordof(ex.ch[0])+"〗";
				else ans=texcode+" 〖"+this.Wordof(ex.ch[0])+"〗";
				break;
			case 'a':
				ans=excode+"^(-1) 〖"+this.Wordof(ex.ch[0])+"〗";
				break;
			case '9':
                ans="\\int 〖"+this.Wordof(ex.ch[0])+"〗";
				break;
			case 'b':
				ans="\\sum 〖"+this.Wordof(ex.ch[0])+"〗";
				break;
			case '1':
				ans="〖\\sqrt("+this.Wordof(ex.ch[0])+")〗";
				break;
			case 'f':
			case '2':
                if(ex.ch[0].cnum==0) ans=this.Wordof(ex.ch[0])+"\\hat  ";
                else ans="("+this.Wordof(ex.ch[0])+")\\hat  ";
                break;
			case '3':
                if(ex.ch[0].cnum==0) ans=this.Wordof(ex.ch[0])+"\\dot  ";
                else ans="("+this.Wordof(ex.ch[0])+")\\dot  ";
                break;
			case 'e':
			case '4':
			case '5':
                ans="\\overbar("+this.Wordof(ex.ch[0])+") ";
				break;
			case '6':
			case '7':
                if(ex.ch[0].cnum==0) ans=this.Wordof(ex.ch[0])+"\\vec  ";
                else ans="("+this.Wordof(ex.ch[0])+")\\vec  ";
                break;
			case '8':
                ans="\\underbar("+this.Wordof(ex.ch[0])+") ";
				break;
			case 'c':
			case 'd':
                ans=this.Wordof(ex.ch[0])+" ";
                break;
			case 'g':
                ans="\\overbrace("+this.Wordof(ex.ch[0])+") ";
				break;
			case 'h':
				ans="\\underbrace("+this.Wordof(ex.ch[0])+") ";
				break;
			default:
				ans="{OP1P Error}";
		}
		return ans;
	}
		
	MathTOUCH.EXtree2Word.prototype.OP1AexRep=function(opec,excode,texcode,ex){
		var ans=null;
		switch(opec){
			case '0':
				if(excode=="!") ans=this.Wordof(ex.ch[0])+"!";
				else if(excode=="'") ans=this.Wordof(ex.ch[0])+"'";
				else if(excode=="\"") ans=this.Wordof(ex.ch[0])+"\\pprime  ";
				else ans=this.Wordof(ex.ch[0]);
				break;
			case '1':
                if(excode=="*") ans=this.Wordof(ex.ch[0])+"^*";
				else if(excode=="times") ans=this.Wordof(ex.ch[0])+"^\\times";
				else if(excode=="circ") ans=this.Wordof(ex.ch[0])+"^\\circ";
                else if(excode=="+") ans=this.Wordof(ex.ch[0])+"^+";
                else if(excode=="-") ans=this.Wordof(ex.ch[0])+"^-";
                else if(excode=="pm") ans=this.Wordof(ex.ch[0])+"^\\pm";
                else if(excode=="mp") ans=this.Wordof(ex.ch[0])+"^\\mp";
                else if(excode=="dagger") ans=this.Wordof(ex.ch[0])+"^\\dagger";
				else ans=this.Wordof(ex.ch[0]);
				break;
			case '3':
			case '2':
                ans=this.Wordof(ex.ch[0])+texcode;
				break;
            case '4':
                if(ex.ch[0].cnum==0) ans=this.Wordof(ex.ch[0])+"\\dot  ";
                else ans="("+this.Wordof(ex.ch[0])+")\\dot  ";
                break;
			case '8':
                ans="\\underbar("+this.Wordof(ex.ch[0])+") ";
				break;
            case '9':
                ans="\\rect("+this.Wordof(ex.ch[0])+") ";
                break;
            default:
				ans="{OP1A Error}";
		}
		return ans;
	}
		
	MathTOUCH.EXtree2Word.prototype.OP1BexRep=function(opec,excode,texcode,ex){
		var ans=null;
		var i=texcode.indexOf(',');
		var Lbra=texcode.substring(0,i);
		var Rbra=texcode.substring(i+1);
		switch(opec){
			case '0':
			case '1':
                if(excode=="()") ans="("+this.Wordof(ex.ch[0])+") ";
                else if(excode=="[]"||excode=="lf"||excode=="lc"||excode=="//"||excode=="bs") ans="["+this.Wordof(ex.ch[0])+"] ";
                else if(excode=="|1") ans="|"+this.Wordof(ex.ch[0])+"| ";
                else if(excode=="|2") ans="||"+this.Wordof(ex.ch[0])+"|| ";
                else if(excode=="{}") ans="{"+this.Wordof(ex.ch[0])+"} ";
                else if(excode=="<>") ans="\\bra "+this.Wordof(ex.ch[0])+"\\ket ";
                else if(excode=="(]") ans="("+this.Wordof(ex.ch[0])+"] ";
                else if(excode=="(|") ans="("+this.Wordof(ex.ch[0])+"| ";
                else if(excode=="(2") ans="("+this.Wordof(ex.ch[0])+"|| ";
                else if(excode=="(}") ans="("+this.Wordof(ex.ch[0])+"} ";
                else if(excode=="(>") ans="("+this.Wordof(ex.ch[0])+"\\ket ";
                else if(excode=="[)") ans="["+this.Wordof(ex.ch[0])+") ";
                else if(excode=="|)") ans="|"+this.Wordof(ex.ch[0])+") ";
                else if(excode=="2)") ans="||"+this.Wordof(ex.ch[0])+") ";
                else if(excode=="[}") ans="["+this.Wordof(ex.ch[0])+"} ";
                else if(excode=="|>") ans="|"+this.Wordof(ex.ch[0])+"\\ket ";
                else if(excode=="2>") ans="||"+this.Wordof(ex.ch[0])+"\\ket ";
                else if(excode=="[>") ans="["+this.Wordof(ex.ch[0])+"\\ket ";
                else if(excode=="|}") ans="|"+this.Wordof(ex.ch[0])+"} ";
                else if(excode=="{)") ans="{"+this.Wordof(ex.ch[0])+") ";
                else if(excode=="<)") ans="<"+this.Wordof(ex.ch[0])+") ";
                else if(excode=="{]") ans="{"+this.Wordof(ex.ch[0])+"] ";
                else if(excode=="{|") ans="{"+this.Wordof(ex.ch[0])+"| ";
                else if(excode=="<]") ans="\\bra "+this.Wordof(ex.ch[0])+"] ";
                else if(excode=="<|") ans="\\bra "+this.Wordof(ex.ch[0])+"| ";
                else if(excode=="<2") ans="\\bra "+this.Wordof(ex.ch[0])+"|| ";
				else ans=Lbra+this.Wordof(ex.ch[0])+Rbra+" ";
				break;
			case '2':
			case '3':
                if(excode=="()") ans="("+this.Wordof(ex.ch[0])+" \\close  ";
                else if(excode=="[]"||excode=="lf"||excode=="lc"||excode=="//"||excode=="bs") ans="["+this.Wordof(ex.ch[0])+" \\close  ";
                else if(excode=="|1") ans="|"+this.Wordof(ex.ch[0])+" \\close  ";
                else if(excode=="|2") ans="||"+this.Wordof(ex.ch[0])+" \\close  ";
                else if(excode=="{}") ans="{"+this.Wordof(ex.ch[0])+" \\close  ";
                else if(excode=="<>") ans="\\bra "+this.Wordof(ex.ch[0])+" \\close  ";
				else ans=Lbra+this.Wordof(ex.ch[0])+" \\close  ";
				break;
			case '4':
			case '5':
                if(excode=="()") ans="\\open "+this.Wordof(ex.ch[0])+") ";
                else if(excode=="[]"||excode=="lf"||excode=="lc"||excode=="//"||excode=="bs") ans="\\open "+this.Wordof(ex.ch[0])+"] ";
                else if(excode=="|1") ans="\\open "+this.Wordof(ex.ch[0])+"| ";
                else if(excode=="|2") ans="\\open "+this.Wordof(ex.ch[0])+"|| ";
                else if(excode=="{}") ans="\\open "+this.Wordof(ex.ch[0])+"} ";
                else if(excode=="<>") ans="\\open "+this.Wordof(ex.ch[0])+"\\ket ";
				else ans="\\open "+this.Wordof(ex.ch[0])+Rbra+" ";
				break;
			default:
				ans="{OP1B Error}";
		}
		return ans;
	}

	MathTOUCH.EXtree2Word.prototype.OP2CexRep=function(opec,excode,texcode,ex){
		var ans=null;
		switch(opec){
			case '0':
				ans=this.Wordof(ex.ch[0])+this.Wordof(ex.ch[1]);
				break;
			case '1':
				if(ex.ch[1].cnum==0) ans=this.Wordof(ex.ch[0])+"^"+this.Wordof(ex.ch[1])+" ";
                else ans=this.Wordof(ex.ch[0])+"^("+this.Wordof(ex.ch[1])+") ";
				break;
			case '2':
				if(ex.ch[0].key==MathTOUCH.SP && ex.ch[0].order==3){
					if(ex.ch[1].cnum==0) ans=this.Wordof(ex.ch[0].ch[0])+"_"+this.Wordof(ex.ch[0].ch[1])+"^"+this.Wordof(ex.ch[1])+" ";
                    else ans=this.Wordof(ex.ch[0].ch[0])+"_"+this.Wordof(ex.ch[0].ch[1])+"^("+this.Wordof(ex.ch[1])+") ";
                }
				else ans="{SubSuperscript Error}";
				break;
			case '3':
				if(ex.ch[1].cnum==0) ans=this.Wordof(ex.ch[0])+"_"+this.Wordof(ex.ch[1]);
                else ans=this.Wordof(ex.ch[0])+"_("+this.Wordof(ex.ch[1])+") ";
				break;
			case '4':
				ans="(^"+this.Wordof(ex.ch[0])+")"+this.Wordof(ex.ch[1]);
				break;
			case '5':
				ans="(_"+this.Wordof(ex.ch[0])+")"+this.Wordof(ex.ch[1]);
				break;
			case '6':
                if(excode=="/") ans=this.Wordof(ex.ch[0])+"〖\\ldiv〗"+this.Wordof(ex.ch[1])+" ";
                else if(excode.length==1) ans=this.Wordof(ex.ch[0])+excode+this.Wordof(ex.ch[1])+" ";
                else if(excode=="rightarrow") ans=this.Wordof(ex.ch[0])+"-> "+this.Wordof(ex.ch[1])+" ";
                else if(excode=="leftarrow") ans=this.Wordof(ex.ch[0])+"<- "+this.Wordof(ex.ch[1])+" ";
                else if(excode=="supset") ans=this.Wordof(ex.ch[0])+"〖\\superset〗"+this.Wordof(ex.ch[1])+" ";
                else if(excode=="supseteq") ans=this.Wordof(ex.ch[0])+"〖\\superseteq〗"+this.Wordof(ex.ch[1])+" ";
                else ans=this.Wordof(ex.ch[0])+"〖"+texcode+"〗"+this.Wordof(ex.ch[1])+" ";
				break;
			case 'c':
				ans=this.Wordof(ex.ch[0])+","+this.Wordof(ex.ch[1]);
				break;
			case '.':
                ans=this.Wordof(ex.ch[0])+"."+this.Wordof(ex.ch[1]);
				break;
			case ',':
			case ':':
                ans=this.Wordof(ex.ch[0])+"\\thinsp "+this.Wordof(ex.ch[1]);
                break;
			case ';':
                ans=this.Wordof(ex.ch[0])+"\\thicksp "+this.Wordof(ex.ch[1]);
                break;
			case '>':
                ans=this.Wordof(ex.ch[0])+"\\emsp "+this.Wordof(ex.ch[1]);
                break;
			case 'q':
                ans=this.Wordof(ex.ch[0])+"  "+this.Wordof(ex.ch[1]);
                break;
			case '!':
			case '-':
			case '<':
				ans=this.Wordof(ex.ch[0])+this.Wordof(ex.ch[1]);
				break;
			case '7':
				if(ex.ch[0].cnum==0) ans="〖"+this.Wordof(ex.ch[0])+"/";
				else ans="〖("+this.Wordof(ex.ch[0])+")"+"/";
				if(ex.ch[1].cnum==0) ans=ans+this.Wordof(ex.ch[1])+"〗";
				else ans=ans+"("+this.Wordof(ex.ch[1])+")〗";
				break;
			case '9':
				if(ex.ch[1].cnum==0) ans="〖"+this.Wordof(ex.ch[1])+"/";
				else ans="〖("+this.Wordof(ex.ch[1])+")"+"/";
				if(ex.ch[0].cnum==0) ans=ans+this.Wordof(ex.ch[0])+"〗";
				else ans=ans+"("+this.Wordof(ex.ch[0])+")〗";
				break;
			case '8':
				if(ex.ch[1].cnum==0) ans="\\sqrt("+this.Wordof(ex.ch[0])+"&"+this.Wordof(ex.ch[1])+") ";
				else ans="\\sqrt("+this.Wordof(ex.ch[0])+"&"+this.Wordof(ex.ch[1])+")";
				break;
			default:
				ans="{OP2C error}";
		}
		return ans;
	}
		
	MathTOUCH.EXtree2Word.prototype.OP2PexRep=function(opec,excode,texcode,ex){
		var ans=null;
		switch(opec){
			case '0':
                ans="\\int _("+this.Wordof(ex.ch[0])+")▒〖"+this.Wordof(ex.ch[1])+"〗";
                break;
			case '2':
				ans=texcode+" _("+this.Wordof(ex.ch[0])+")▒〖"+this.Wordof(ex.ch[1])+"〗";
				break;
			case '1':
				ans="log _("+this.Wordof(ex.ch[0])+") 〖"+this.Wordof(ex.ch[1])+"〗";
				break;
			case '3':
                ans=excode+"^("+this.Wordof(ex.ch[0])+") 〖"+this.Wordof(ex.ch[1])+"〗";
				break;
			case '4':
                ans="lim_("+this.Wordof(ex.ch[0])+") 〖"+this.Wordof(ex.ch[1])+"〗";
				break;
			default:
				ans="{OP2P Error}";
		}
		return ans;
	}
		
	MathTOUCH.EXtree2Word.prototype.OP3PexRep=function(opec,excode,texcode,ex){
		var ans=null;
		switch(opec){
			case '0':
                ans=texcode+" _("+this.Wordof(ex.ch[0])+")^("+this.Wordof(ex.ch[1])+")▒〖"+this.Wordof(ex.ch[2])+"〗";
				break;
			case '1':
                ans=texcode+" _("+this.Wordof(ex.ch[0])+")^("+this.Wordof(ex.ch[1])+")▒〖"+this.Wordof(ex.ch[2])+"〗";
                break;
			default:
				ans="{OP3P Error}";
		}
		return ans;
	}
		
	MathTOUCH.EXtree2Word.prototype.OP3TexRep=function(opec,excode,texcode,ex){
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
	}

