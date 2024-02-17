MathTOUCH.TeXParser = function(){

    var SYMBOL=new MathTOUCH.SymbolTable();
    this.parse = function(st){
		if(st==null || st.length==0) return(new EmptyEXT(""));
		var extt=this.exParse(st);
		var num=extt.length;
		var ans=this.makeEXtree(extt,0,num);

		return(ans);
	}
	
    this.isType = function(cc){
		if(cc<'0'){return 0;}
		else if(cc<':'){return 1;}
		else if(cc<'A'){/*if(cc=='=') return 3;*/ return 0;}
		else if(cc<'['){return 2;}
		else if(cc<'a'){if(cc=='\\') return -1; return 0;}
		else if(cc<'{'){return 2;}
		else{return 0;}
	}
	
    this.makeEXtree=function(ext,start,end){
		var i,j,k;
		var op;
		var bra=0;
		var wd;
		var BL,BR;
		var ans=null;
		var ST=new MathTOUCH.oeStack(ext);


		for(i=start;i<end;i++){
			op=ext[i].operation;
            wd=ext[i].word;
            if(op==1){
                ST.exPush(new NumberEXT(2,wd));
            }
            else if(op==2){
                ST.exPush(new VariableEXT(2,wd.charAt(0),wd.charAt(0)));
            }
			else if(op==-1 && (SYMBOL.isVariable(wd)||SYMBOL.isSymbol(wd))){
                if(SYMBOL.isVariable(wd)){
                    ST.exPush(new VariableEXT(2,"\\"+wd,wd.charAt(0)));
                }
                else{
                    ST.exPush(new SymbolEXT(2,"\\"+wd,wd.charAt(0)));
                }
			}
            else if(op==3){
                if(ST.opEquals("mathcal")){
                    ST.opPull();
                    ST.exPush(new VariableEXT(2,"\\mathcal{"+wd.charAt(0)+"}",wd.charAt(0)));
                }
				else if(ST.opEquals("mathrm")){
                    ST.opPull();
                    ST.exPush(new VariableEXT(2,"\\mathrm{"+wd.charAt(0)+"}",wd.charAt(0)));
                }
				else if(ST.opEquals("mathsf")){
                    ST.opPull();
                    ST.exPush(new VariableEXT(2,"\\mathsf{"+wd.charAt(0)+"}",wd.charAt(0)));
                }
				else if(ST.opEquals("mathbf")){
                    ST.opPull();
                    ST.exPush(new VariableEXT(2,"\\mathbf{"+wd.charAt(0)+"}",wd.charAt(0)));
                }
				else if(ST.opEquals("mathbl")){
                    ST.opPull();
                    ST.exPush(new VariableEXT(2,"\\boldsymbol "+wd.charAt(0),wd.charAt(0)));
                }
                else ST.exPush(this.parse(wd));

				if(i<end-1 && !(ext[i+1].word == "^"||ext[i+1].word == "_")){
					ST.evalOperation();
				}
                else if(wd.length==0){
                    ST.exPull();
                    i++;
                    if(ext[i].word=="_") ext[i].word="left_";
                    else ext[i].word="left^";
                    ST.opPush(2,0,i);
                }
                else if(ST.isOperation()&&i>start&&SYMBOL.OP1numberOf(ext[i-1].word)>=0){
                    ST.evalOpe1();
                }
			}
            else if(op==4){
				if(ST.opEquals("sqrt")){
					ST.exPush(this.parse(wd));
					ST.opParamAdd1();
				}
                else{
                    var ko=OTB.getKeyAndOrder("B1[]");
                    if(ko>=0){
                        let key=Math.floor(ko/100);
                        let order=ko%100;
                        ST.exPush(new EXtree1(2,key,order,this.parse(wd),OTB.getOpeword(key)));
                    }
                }
				ST.evalOperation();
			}
			else{
				if(wd == "="){
                    ST.evalAll();
					if(ST.isExpression()){ST.opPush(2,-1,i);}
					else{
                        var ko=OTB.getKeyAndOrder("C6=");
                        if(ko>=0){
                            let key=Math.floor(ko/100);
                            let order=ko%100;
                            ST.exPush(new EXtree2(2,key,order,new EmptyEXT(""),new EmptyEXT(""),OTB.getOpeword(key)));
                        }
                    }
				}
				else if(wd == "^"){
					if(ST.isOperation()){
						if(i>start && ext[i-1].word == "int"){ST.opParamAdd1();}
						else if(i>start+2 && ext[i-3].word == "int" && ext[i-2].word == "_"){ST.opParamAdd1();}
						else if(i>start && SYMBOL.OP1numberOf(ext[i-1].word)>=0){ST.opParamAdd1();
                            console.log(ext[i-1].word+"^="+i);
                        }
						else if(i>start && ext[i-1].word == "oint"){ST.opParamAdd1();}
						else if(i>start+2 && ext[i-3].word == "oint" && ext[i-2].word == "_"){ST.opParamAdd1();}
						else if(i>start && SYMBOL.BignumberOf(ext[i-1].word)>=0){ST.opParamAdd1();}
						else if(i>start+2 && SYMBOL.BignumberOf(ext[i-3].word)>=0 && ext[i-2].word == "_"){ST.opParamAdd1();}
						else if(ST.opEquals("_")){ST.opParamAdd1();}
						else{
                            if(i<end-1){
                                var wd2=ext[i+1].word;
                                var op2=ext[i+1].operator;
                                if(wd2.charAt(0)=="\\"){
                                    wd2=wd2.substring(1);
                                }
                                if(ST.isExpression() && SYMBOL.OPAnumberOf(wd2)>=0){
                                    var ko=OTB.getKeyAndOrder("A1"+wd2);
                                    if(ko>=0){
                                        let key=Math.floor(ko/100);
                                        let order=ko%100;
                                        ST.exPush(new EXtree1(2,key,order,ST.exPull(),OTB.getOpeword(key)));
                                        i=i+1;
                                    }
                                    else{ST.opPush(2,-1,i);}
                                }
                                else{ST.opPush(2,-1,i);
                                }
                            }
                            else{ST.opPush(2,-1,i);}
						}
					}
					else{
                        if(i<end-1){
                            var wd2=ext[i+1].word;
                            var op2=ext[i+1].operator;
                            if(wd2.charAt(0)=="\\"){
                                wd2=wd2.substring(1);
                            }
                            if(ST.isExpression() && SYMBOL.OPAnumberOf(wd2)>=0){
                                var ko=OTB.getKeyAndOrder("A1"+wd2);
                                if(ko>=0){
                                    let key=Math.floor(ko/100);
                                    let order=ko%100;
                                    ST.exPush(new EXtree1(2,key,order,ST.exPull(),OTB.getOpeword(key)));
                                    i=i+1;
                                }
                                else{ST.opPush(2,-1,i);}
                            }
                            else{ST.opPush(2,-1,i);}
                        }
                        else{ST.opPush(2,-1,i);}
                    }
				}
				else if(wd == "_"){
					if(ST.isOperation()){
						if(i>start && ext[i-1].word == "int"){ST.opParamAdd1();}
						else if(i>start+2 && ext[i-3].word == "int" && ext[i-2].word == "^"){ST.opParamAdd1();}
						else if(i>start && ext[i-1].word == "oint"){ST.opParamAdd1();}
						else if(i>start+2 && ext[i-3].word == "oint" && ext[i-2].word == "^"){ST.opParamAdd1();}
						else if(i>start && ext[i-1].word == "lim"){}
						else if(i>start && ext[i-1].word == "log"){ST.opParamAdd1();}
						else if(i>start && SYMBOL.BignumberOf(ext[i-1].word)>=0){ST.opParamAdd1();}
						else if(i>start+2 && SYMBOL.BignumberOf(ext[i-3].word)>=0 && ext[i-2].word == "^"){ST.opParamAdd1();}
						else if(ST.opEquals("^")){ST.opParamAdd1();}
						else{
							if(ST.opEquals("^")){ST.opParamAdd1();}
							else{ST.opPush(2,-1,i);}
						}
					}
                    else if(i>start && ext[i-1].operation==3 && ext[i-1].word==""){
                        ST.exPull();
                        ext[i].word="left_";
                        ST.opPush(2,0,i);
                    }
					else{ST.opPush(2,-1,i);}
				}
				else if(wd == " "){
					if(!ST.isExpression()){}
					else if(i+1<end && ext[i+1].operation>0){
						if(!ST.isOperation()){ST.opPush(2,-1,i);}
						else if(ST.opEquals("^")||ST.opEquals("_")){ST.evalOpe1();}
					}
				}
				else if(op==-1&&(wd == ","||wd == ":"||wd == ";"||wd == "!")){
					ST.evalOpe2Eq();
					ST.opPush(2,-1,i);
				}
				else if(wd == "quad"||wd == "qquad"||wd == "negmedspace"||wd == "negthickspace"){
					ST.evalOpe2Eq();
					ST.opPush(2,-1,i);
				}
				else if(wd == "'"){
					if(ST.isExpression()){
                        var ko=OTB.getKeyAndOrder("A0'");
                        if(ko>=0){
                            let key=Math.floor(ko/100);
                            let order=ko%100;
                            var temp=new EXtree1(2,key,order,ST.exPull(),OTB.getOpeword(key));
                            var temp2=AlgRules.reform(temp);
                            if(temp2!=null) ST.exPush(temp2);
                            else{ ST.exPush(temp);console.log("reform err:"+xtreeml.XtreeML(temp));}
                        }
                    }
				}
                else if(wd == "%"){
                    if(ST.isExpression()){
                        var ko=OTB.getKeyAndOrder("A3%");
                        if(ko>=0){
                            let key=Math.floor(ko/100);
                            let order=ko%100;
                            var temp=new EXtree1(2,key,order,ST.exPull(),OTB.getOpeword(key));
                            var temp2=AlgRules.reform(temp);
                            if(temp2!=null) ST.exPush(temp2);
                            else{ ST.exPush(temp);console.log("reform err:"+xtreeml.XtreeML(temp));}
                        }
                    }
                }
				else if(wd == "!"){
					if(ST.isExpression()){
                        var ko=OTB.getKeyAndOrder("A0!");
                        if(ko>=0){
                            let key=Math.floor(ko/100);
                            let order=ko%100;
                            var temp=new EXtree1(2,key,order,ST.exPull(),OTB.getOpeword(key));
                            var temp2=AlgRules.reform(temp);
                            if(temp2!=null) ST.exPush(temp2);
                            else{ ST.exPush(temp);console.log("reform err:"+xtreeml.XtreeML(temp));}
                        }
                    }
				}
                else if(wd == ","){
                    if(ST.isExpression()){ST.opPush(2,-1,i);}
                    else{
                        ST.exPush(new EmptyEXT(""));
                        ST.opPush(2,-1,i);
                    }
                }
				else if(SYMBOL.DBOnumberOf(wd)>=0){
					if(!ST.isExpression()){ST.opPush(1,0,i);}
					else{
						ST.evalOpe2Eq();
						if(!ST.isOperation()){ST.opPush(2,-1,i);}
						else{ST.opPush(1,0,i);}
					}
				}
				else if(wd == "mbox"){
				}
				else if(wd == "$"){
				}
				else if(wd == "rm"){
                    ST.opPush(1,0,i)
				}
				else if(wd == "cal"){
                    ST.opPush(1,0,i)
				}
				else if(wd == "boldmath"){
                    ST.opPush(1,0,i)
				}
				else if(wd == "bf"){
                    ST.opPush(1,0,i)
				}
				else if(wd == "frac"){
					if(ST.opEquals("^")||ST.opEquals("_")){ST.evalOpe1();}
					ST.opPush(2,0,i);
				}
				else if(wd == "stackrel"){
					if(ST.opEquals("^")||ST.opEquals("_")){ST.evalOpe1();}
					ST.opPush(1,0,i);
				}
				else if(wd == "bmod"){
					ST.evalOpe2Eq();
					ST.opPush(2,-1,i);
				}
				else if(wd == "backslash"){
					ST.evalOpe2Eq();
					ST.opPush(2,-1,i);
				}
				else if(SYMBOL.BignumberOf(wd)>=0){
					if(ST.opEquals("^")||ST.opEquals("_")){ST.evalOpe1();}
					ST.opPush(1,0,i);
				}
				else if(wd == "int"||wd == "oint"){
					if(ST.opEquals("^")||ST.opEquals("_")){ST.evalOpe1();}
					ST.opPush(1,0,i);
				}
				else if(wd == "lim"){
					if(ST.opEquals("^")||ST.opEquals("_")){ST.evalOpe1();}
					ST.opPush(2,0,i);
				}
				else if(SYMBOL.OP1numberOf(wd)>=0){
					if(ST.opEquals("^")||ST.opEquals("_")){ST.evalOpe1();}
					ST.opPush(1,0,i);
				}
				else if((k=SYMBOL.BLnumberOf(wd))>=0){
					bra++;
					for(j=i+1;j<end;j++){
						if(ext[j].operation<=0){
							if(ext[j].word == SYMBOL.BraR[k]){ bra--;if(bra==0) break;}
							else if(ext[j].word == SYMBOL.BraL[k]) bra++;
						}
					}
					if(j>=end){
						if(wd == "|"){
							ST.evalOpe2Eq();
							ST.opPush(2,-1,i);
						}
						else{console.log("Bracket pair error! in TeXParser");return null;}
					}
					else{
						if(ST.opEquals("^")||ST.opEquals("_")){ST.evalOpe1();}
                        var ko=OTB.getKeyAndOrder("B1"+SYMBOL.BraL[k]+SYMBOL.BraR[k]);
                        if(SYMBOL.BraL[k]=="|"){
                            ko=OTB.getKeyAndOrder("B1"+SYMBOL.BraL[k]+"1");
                        }
                        else if(SYMBOL.BraL[k]=="||"){
                            ko=OTB.getKeyAndOrder("B1"+SYMBOL.BraL[k]+"2");
                        }
                        if(ko>=0){
                            let key=Math.floor(ko/100);
                            let order=ko%100;
                            var temp=new EXtree1(2,key,order,this.makeEXtree(ext,i+1,j),OTB.getOpeword(key));
                            var temp2=AlgRules.reform(temp);
                            if(temp2!=null) ST.exPush(temp2);
                            else{ ST.exPush(temp);console.log("reform err:"+xtreeml.XtreeML(temp));}
                        }
                        else{console.log("Bracket pair error! in TeXParser");return null;}
						i=j;
					}
				}
				else if(wd == "left"){
					if(i+1>=end){console.log("left bracket error! in TeXParser");return null;}
                    if(ext[i+1].operation==4){
                        BL="[";BR="]";
                        var extt=this.exParse(ext[i+1].word);
                        if(extt[extt.length-1].operation<=0 && extt[extt.length-1].word == "right"){
                            var ko=OTB.getKeyAndOrder("B1"+BL+BR);
                            if(ko>=0){
                                let key=Math.floor(ko/100);
                                let order=ko%100;
                                ans=new EXtree1(2,key,order,this.makeEXtree(extt,0,extt.length-1),OTB.getOpeword(key));
                            }
                            else{ans=null;console.log("Bracket pair error! in TeXParser");
                                return null;
                            }
                        }else{ans=null;console.log("left[ right] bracket error! in TeXParser");
                            return null;
                        }
                        j=i;
                    }
                    else{
                        bra++;
                        BL=ext[i+1].word;
                        for(j=i+1;j<end;j++){
                            if(ext[j].operation<=0){
                                if(ext[j].word == "left") bra++;
                                else if(ext[j].word == "right"){ bra--;
                                    if(bra==0) break;
                                }
                            }
                        }
                        if(j+1>=end){console.log("right bracket error! in TeXParser");return null;}
                        BR=ext[j+1].word;
                        if(BL == "."){
                            switch(BR){
                                case ")":BL="(";break;
                                case "}":BL="{";break;
                                case "]":BL="[";break;
                                case "rfloor":BL="r";BR="f";break;
                                case "rceil":BL="r";BR="c";break;
                                case "rangle":BL="<";BR=">";break;
                                case "|":BL="|";BR="1";break;
                                case "||":BL="|";BR="2";break;
                                case "/":BL="/";BR="/";break;
                                case "backslash":BL="b";BR="s";break;
                            }
                            var ko=OTB.getKeyAndOrder("B5"+BL+BR);
                            if(ko>=0){
                                let key=Math.floor(ko/100);
                                let order=ko%100;
                                var temp=new EXtree1(2,key,order,this.makeEXtree(ext,i+2,j),OTB.getOpeword(key));
                                ans=AlgRules.reform(temp);
                                if(ans==null) { ans=temp;console.log("B5 reform err:"+xtreeml.XtreeML(temp));}
                            }
                            else{ans=null;console.log("Bracket pair error! in TeXParser");
                                return null;
                            }
                        }
                        else if(BR == "."){
                            switch(BL){
                                case "(":BR=")";break;
                                case "{":BR="}";break;
                                case "[":BR="]";break;
                                case "lfloor":BL="l";BR="f";break;
                                case "lceil":BL="l";BR="c";break;
                                case "langle":BL="<";BR=">";break;
                                case "|":BL="|";BR="1";break;
                                case "||":BL="|";BR="2";break;
                                case "/":BL="/";BR="/";break;
                                case "backslash":BL="b";BR="s";break;
                            }
                            var ko=OTB.getKeyAndOrder("B3"+BL+BR);
                            if(ko>=0){
                                let key=Math.floor(ko/100);
                                let order=ko%100;
                                var temp=new EXtree1(2,key,order,this.makeEXtree(ext,i+2,j),OTB.getOpeword(key));
                                ans=AlgRules.reform(temp);
                                if(ans==null) { ans=temp;console.log("B3 reform err:"+xtreeml.XtreeML(temp));}
                            }
                            else{ans=null;console.log("Bracket pair error! in TeXParser");
                                return null;
                            }
                        }
                        else{
                            switch(BL){
                                case "(":
                                    switch(BR){
                                        case ")":
                                        case "}":
                                        case "]":break;
                                        case "rangle":BR=">";break;
                                        case "|":break;
                                        case "||":BR="2";break;
                                    }
                                    break;
                                case "{":
                                    switch(BR){
                                        case ")":
                                        case "}":
                                        case "]":break;
                                        case "|":break;
                                    }
                                    break;
                                case "[":
                                    switch(BR){
                                        case ")":
                                        case "}":
                                        case "]":break;
                                        case "rangle":BR=">";break;
                                    }
                                    break;
                                case "lfloor":BL="l";BR="f";break;
                                case "lceil":BL="l";BR="c";break;
                                case "langle":
                                    switch(BR){
                                        case ")":
                                        case "]":BL="<";break;
                                        case "rangle":BL="<";BR=">";break;
                                        case "|":BL="<";break;
                                        case "||":BL="<";BR="2";break;
                                    }
                                    break;
                                case "|":
                                    switch(BR){
                                        case ")":
                                        case "}":break;
                                        case "rangle":BR=">";break;
                                        case "|":BR="1";break;
                                    }
                                    break;
                                case "||":
                                    switch(BR){
                                        case ")":BL="2";break;
                                        case "rangle":BL="2";BR=">";break;
                                        case "||":BL="|";BR="2";break;
                                    }
                                    break;
                                case "/":BL="/";BR="/";break;
                                case "backslash":BL="b";BR="s";break;
                            }
                            var ko=OTB.getKeyAndOrder("B1"+BL+BR);
                            if(ko>=0){
                                let key=Math.floor(ko/100);
                                let order=ko%100;
                                var temp=new EXtree1(2,key,order,this.makeEXtree(ext,i+2,j),OTB.getOpeword(key));
                                ans=AlgRules.reform(temp);
                                if(ans==null) { ans=temp;console.log("B1 reform err:"+xtreeml.XtreeML(temp));}
                            }
                            else{ans=null;console.log("Bracket pair error! in TeXParser");
                                return null;
                            }
                        }
                    }
					if(ST.opEquals("^")||ST.opEquals("_")){ST.evalOpe1();}
					ST.exPush(ans);
					i=j+1;
				}
				else if(wd == "begin"){
					var row,col;
					var l,m,n;
					var cols=new Array();
					var term=new Array();
					var matLebel=0;
					var rowline=new Array();
					var c;
                    if(ext[i+1].operation==3 && ext[i+1].word == "array"){
                        matLebel++;
                        for(j=i+2;j<end-1;j++){
                            if(ext[j].operation<=0 && ext[j].word == "end"){
                                if(ext[j+1].operation==3 && ext[j+1].word == "array"){
                                    matLebel--;
                                    if(matLebel==0) break;
                                }
                            }
                            else if(ext[j].operation<=0 && ext[j].word == "begin"){
                                if(ext[j+1].operation==3 && ext[j+1].word == "array"){matLebel++;}
                            }
                        }
                        if(j>=end-1){console.log("array error2");alert("array error2");return null;}
                        if(ext[i+2].operation==3){
                            var colswd=ext[i+2].word;
                            col=0;
                            for(var ii=0;ii<colswd.length;ii++){
                                c=colswd.charAt(ii);
                                if(c=='l'||c=='c'||c=='r') col++;
                            }
                            if(col==0){console.log("cols parameta error in array!");alert("cols parameta error in array!");return null;}
                            row=0;
                            for(k=i+3;k<=j;k++){
                                if(ext[k].word == "\\"){row++;
                                }
                                else if(ext[k].word == "end"&&(ext[k-1].word!="\\"&&ext[k-1].word.charCodeAt(0)!=160)){row++;
                                }
                            }
                            rowline=new Array(row+1);
                            var lnum=0;
                            for(k=0;k<=row;k++) rowline[k]=0;
						console.log("row,col="+row+","+col);
                            term=new Array(row*col);
                            l=i+3;m=0;n=0;
                            for(k=i+3;k<=j;k++){
                                if(ext[k].word == "&"){
                                    term[m*col+n]=this.makeEXtree(ext,l,k);
                                    n++;
                                    l=k+1;
                                    if(n==col){
                                        console.log("column element error in array!");
                                        alert("column element error in array!");
                                        return null;
                                    }
                                }
                                else if(ext[k].word == "\\"){
                                    term[m*col+n]=this.makeEXtree(ext,l,k);
                                    if(term[m*col+n]==null) term[m*col+n]=new EmptyEXT("");
                                    m++;
                                    l=k+1;n=0;lnum++;
                                    if(m>row){console.log("row element error in array!");alert("row element error in array!");return null;}
                                }
                                else if(ext[k].word == "end"&&(ext[k-1].word!="\\"&&ext[k-1].word.charCodeAt(0)!=160)){
                                    term[m*col+n]=this.makeEXtree(ext,l,k);
                                    if(term[m*col+n]==null) term[m*col+n]=new EmptyEXT("");
                                    m++;
                                    l=k+1;n=0;lnum++;
                                    if(m>row){console.log("row element error in array!");alert("row element error in array!");return null;}
                                }
                                else if(ext[k].word == "hline"){
                                    if(lnum>row){console.log("row line error in array!");alert("row line error in array!");return null;}
                                    rowline[lnum]++;
                                    l=k+1;
                                }
                                else if(ext[k].operation<=0 && ext[k].word == "begin"){
                                    matLebel=0;
                                    var jj=0;
                                    if(ext[k+1].operation==3 && ext[k+1].word == "array"){
                                        matLebel++;
                                        for(jj=k+2;jj<end-1;jj++){
                                            if(ext[jj].operation<=0 && ext[jj].word == "end"){
                                                if(ext[jj+1].operation==3 && ext[jj+1].word == "array"){
                                                    matLebel--;
                                                    if(matLebel==0) break;
                                                }
                                            }
                                            else if(ext[jj].operation<=0 && ext[jj].word == "begin"){
                                                if(ext[jj+1].operation==3 && ext[jj+1].word == "array"){matLebel++;}
                                            }
                                        }
                                        if(jj>=end-1){console.log("array error4");alert("array error4");return null;}
                                    }else{console.log("array error5");alert("array error5");return null;}
                                    k=jj+1;
                                }
                            }
                            var rowswd="";
                            for(k=0;k<=row;k++) rowswd=rowswd+rowline[k];
                            ans=new EXtreeMat(2,row,rowswd+colswd,term,"MAT");
                        }
                        else{ans=null;console.log("array cols error3");alert("array cols error3");
                            return null;
                        }
                        if(ST.opEquals("^")||ST.opEquals("_")){ST.evalOpe1();}
                        ST.exPush(ans);
                        i=j+1;
                    }else{console.log("array {cols} parameta error!");alert("array {cols} parameta error!");
                        return null;
                    }
				}
				else{
				}
			}
		}
		ans=ST.pullAll();
		return(ans);
	}

    this.exParse = function(st){
		var stNum=st.length;
		var temp=new Array(stNum*2+1);
		var stat=new Array(stNum*2+1);
		var i,j=0;
		var num=0;
		var bra=0;
        var c,prec='';
		for(i=0;i<stNum;i++){
			c=st.charAt(i);
			if(c=='{' && prec!='\\'){
				if(bra==0){
					if(j<i){stat[num]=0;temp[num++]=st.substring(j,i);}
					j=i+1;
				}
				bra++;
			}
			else if(c=='}' && prec!='\\'){
				if(bra==1){
					if(j<i){stat[num]=1;temp[num++]=st.substring(j,i);}
					else if(j==i){stat[num]=1;temp[num++]="";}
					j=i+1;
				}
				else if(bra==0){
					if(j<i){stat[num]=0;temp[num++]=st.substring(j,i+1);}
					j=i+1;
				}
				bra--;
			}
			else if(c=='['){
				if(bra==0){
					if(j<i){stat[num]=0;temp[num++]=st.substring(j,i);}
					j=i+1;
				}
				bra++;
			}
			else if(c==']'){
				if(bra==1){
					if(j<i){stat[num]=5;temp[num++]=st.substring(j,i);}
					j=i+1;
				}
				else if(bra==0){
					if(j<i){stat[num]=0;temp[num++]=st.substring(j,i+1);}
					j=i+1;
				}
				bra--;
			}
			else if(bra==0 && prec=='\\' && c=='\\'){
				if(j<i-1){stat[num]=0;temp[num++]=st.substring(j,i-1);}
				stat[num]=4;
                temp[num++]="\\";
				j=i+1;
                prec='';
                continue;
			}
			else if(c<=' ' && bra==0){
				if(prec=='\\' && c==' '){
					if(j<i-1){
                        stat[num]=0;
                        temp[num++]=st.substring(j,i-1);
                    }
					stat[num]=2;
                    temp[num++]=" ";
					j=i+1;
				}
				else if(this.isType(prec)>0){
					stat[num]=0;
                    temp[num++]=st.substring(j,i);
					if(i+1<st.length){
						if(this.isType(st.charAt(i+1))>0){
							stat[num]=3;
                            temp[num++]=" ";
						}
					}
					j=i+1;
				}
				else{
					if(j<i){
                        stat[num]=0;
                        temp[num++]=st.substring(j,i);
                    }
					j=i+1;
				}
			}
			prec=c;
		}
		if(j<i){
            stat[num]=0;
            if(bra>0) temp[num++]=st.substring(j-1,i);
            else temp[num++]=st.substring(j,i);
        }
		var tempT=new Array(stNum*2+1);
		var Tnum=0;
		for(i=0;i<num;i++){
			if(stat[i]==0){
				var part=this.subParse(temp[i]);
				for(j=0;j<part.length;j++){
					tempT[Tnum++]=part[j];
				}
			}
			else if(stat[i]==1){
                tempT[Tnum++]=new MathTOUCH.exToken(3,temp[i]);
			}
			else if(stat[i]==5){
                tempT[Tnum++]=new MathTOUCH.exToken(4,temp[i]);
			}
			else if(stat[i]==2){tempT[Tnum++]=new MathTOUCH.exToken(-1,temp[i]);}
			else if(stat[i]==3){tempT[Tnum++]=new MathTOUCH.exToken(0,temp[i]);}
			else if(stat[i]==4){tempT[Tnum++]=new MathTOUCH.exToken(0,temp[i]);}
			else{console.log("No operation in makeEXtree");return;}
		}
		var ans=new Array();
        var prenot=false;
        j=0;
		for(i=0;i<Tnum;i++){
            if(tempT[i].operation==-1&&tempT[i].word=="not"){prenot=true;}
            else if((tempT[i].operation==-1||tempT[i].operation==0)&&prenot){
                ans[j++]=new MathTOUCH.exToken(5,tempT[i].word);
                prenot=false;
            }
            else{
                ans[j++]=new MathTOUCH.exToken(tempT[i].operation,tempT[i].word);
                prenot=false;
            }
        }
		return(ans);
	}
	
    this.subParse = function(st){
		var stNum=st.length;
		var wd=new Array(stNum*2+1);
		var op=new Array(stNum*2+1);
		var c;
		var num=0;
		var j=0;
		var i;
		var type=-2;
		var str;
		for(i=0;i<stNum;i++){
			c=st.charAt(i);
			switch(this.isType(c)){
			 case -1:
				if(type==-2){op[num]=-1;j=i+1;type=-1;}
				else if(type==-1){
                    op[num]=0;
                    wd[num++]="\\";
                    j=i+1;
                    op[num]=0;
                    type=0;
				}
				else if(type==0){op[num]=-1;j=i+1;type=-1;}
				else{
					str=st.substring(j,i);
					if(str == "not"||str == "not "){type=5;op[num]=5;j=i+1;}
					else{wd[num++]=str;j=i+1;op[num]=-1;type=-1;}
				}
				break;
			 case 0:
			  if(c==' '){
				if(type>0){
					if(j<i){
                        str=st.substring(j,i);
						if(str == "not"){op[num]=5;wd[num++]="/";op[num]=0;}
						else{wd[num++]=str;op[num]=0;wd[num++]=""+c;op[num]=0;}
					}
					else{op[num]=0;wd[num++]=""+c;op[num]=0;}
				}
				else if(type==-1){op[num]=-1;wd[num++]=""+c;op[num]=0;}
			  }
			  else if(c>' '){
				if(type==-2){op[num]=0;wd[num++]=""+c;op[num]=0;}
				else if(type==-1){
					op[num]=0;
					if(c=='|') wd[num++]="||";
					else if(c==','||c==':'||c==';'||c=='!'){op[num]=-1;wd[num++]=""+c;}
					else wd[num++]=""+c;
					op[num]=0;
				}
				else if(type==0){op[num]=0;wd[num++]=""+c;op[num]=0;}
				else{
					if(j<i){str=st.substring(j,i);
						if(str == "not"){op[num]=5;wd[num++]=""+c;op[num]=0;}
						else{wd[num++]=str;op[num]=0;wd[num++]=""+c;op[num]=0;}
					}
					else{op[num]=0;wd[num++]=""+c;op[num]=0;}
				}
			  }
				j=i+1;
				type=0;
				break;
			 case 1:
				if(type==-2){op[num]=1;j=i;}
				else if(type==-1){console.log("Bad yenmark before number!");return;}
				else if(type==0){op[num]=1;j=i;}
				else if(type==2){
					if(j<i) wd[num++]=st.substring(j,i);
					j=i;
					op[num]=0;wd[num++]=" ";
					op[num]=1;
				}
				type=1;
				break;
			 case 2:
				if(type==-2){op[num]=2;j=i;}
				else if(type==-1){j=i;}
				else if(type==0){op[num]=2;j=i;}
				else if(type==1){
					if(j<i) wd[num++]=st.substring(j,i);
					op[num]=0;
                    wd[num++]=" ";
					op[num]=2;
                    j=i;
				}
				else{
					if(op[num]==2){
						wd[num++]=st.substring(j,i);
						op[num]=0;
                        wd[num++]=" ";
						op[num]=2;
                        j=i;
					}
					else if(op[num]==0){op[num]=2;j=i;}
				}
				type=2;
				break;
			}
		}
		if(j<i){
			wd[num++]=st.substring(j,i);
		}
		var ans=new Array(num);
		for(i=0;i<num;i++){
			ans[i]=new MathTOUCH.exToken(op[i],wd[i]);
		}
		return(ans);
	}
}


MathTOUCH.exToken = function(op,wd){
	this.operation=op;
	this.word=wd;
}


MathTOUCH.oeStack = function(extt){
	this.ext=extt;
		var opMax=10;
		var exMax=40;
    this.opStack=-1;
	var opParam=new Array(opMax);
	var opStart=new Array(opMax);
    var opIndex=new Array(opMax);
	this.exStack=0;
	var tempEx=new Array(opMax);
	
    this.exPush = function(addEx){
		if(this.exStack>=exMax){console.log("exStack overflow!");return;}
		tempEx[this.exStack++]=addEx;
	}
	
	this.exPull = function(){this.exStack--;return(tempEx[this.exStack]);}
	
	this.opPush = function(par,exp,ind){
		if(this.opStack>=opMax){console.log("opStack overflow!");return;}
        this.opStack++;
        opParam[this.opStack]=par;
        opStart[this.opStack]=this.exStack+exp;
        opIndex[this.opStack]=ind;
	}
	
	this.opPull = function(){this.opStack--;}
	this.opParamAdd1 = function(){opParam[this.opStack]++;}
	
    this.isOperation = function(){
        if(this.opStack>=0) return true;
        else return false;
    }
    this.isExpression = function(){
        if(this.exStack>0) return true;
        else return false;
    }
	
    this.opEquals = function(wd){
		if(this.isOperation()&&this.ext[opIndex[this.opStack]].word == wd) return true;
		else return false;
	}

    this.evalOpe1 = function(){
		if(this.opStack>=0 && (opStart[this.opStack]+opParam[this.opStack])==this.exStack && !this.opEquals("=")){
			this.exStack-=opParam[this.opStack];
			tempEx[this.exStack++]=this.makeEXtree(this.ext[opIndex[this.opStack]].operation,this.ext[opIndex[this.opStack]].word,opStart[this.opStack],opParam[this.opStack],tempEx);
			this.opStack--;
		}
	}
	
	this.evalOpe2Eq = function(){
        while(this.opStack>=0){
			if(opStart[this.opStack]+opParam[this.opStack]<this.exStack){
				this.exStack--;
                var temp=tempEx[this.exStack-1].spacedOn(tempEx[this.exStack]);
                tempEx[this.exStack-1]=AlgRules.reform(temp);
                if(tempEx[this.exStack-1]==null) { tempEx[this.exStack-1]=temp;console.log("reform err:"+xtreeml.XtreeML(temp));}
			}
			else if(this.opEquals("=")){return;}
			else if(opStart[this.opStack]+opParam[this.opStack]==this.exStack){
				this.exStack-=opParam[this.opStack];
				tempEx[this.exStack++]=this.makeEXtree(this.ext[opIndex[this.opStack]].operation,this.ext[opIndex[this.opStack]].word,opStart[this.opStack],opParam[this.opStack],tempEx);
				this.opStack--;
			}
            else{
                this.exPush(new  EmptyEXT(""));
            }
		}
		while(this.opStack==-1 && this.exStack>=2){
			this.exStack--;
            var temp=tempEx[this.exStack-1].spacedOn(tempEx[this.exStack]);
            tempEx[this.exStack-1]=AlgRules.reform(temp);
            if(tempEx[this.exStack-1]==null) { tempEx[this.exStack-1]=temp;console.log("reform err:"+xtreeml.XtreeML(temp));}
		}
	}
    
    this.evalOperation = function(){
        while(this.opStack>=0 && opStart[this.opStack]+opParam[this.opStack]<=this.exStack){
            if(opStart[this.opStack]+opParam[this.opStack]<this.exStack){
                this.exStack--;
                var temp=tempEx[this.exStack-1].spacedOn(tempEx[this.exStack]);
                tempEx[this.exStack-1]=AlgRules.reform(temp);
                if(tempEx[this.exStack-1]==null) {
                    tempEx[this.exStack-1]=temp;console.log("reform err:"+xtreeml.XtreeML(temp));
                }
            }
            else{
                this.exStack-=opParam[this.opStack];
                console.log("makeEx:"+this.ext[opIndex[this.opStack]].word);
                tempEx[this.exStack++]=this.makeEXtree(this.ext[opIndex[this.opStack]].operation,this.ext[opIndex[this.opStack]].word,opStart[this.opStack],opParam[this.opStack],tempEx);
                this.opStack--;
            }
        }
        while(this.opStack==-1 && this.exStack>=2){
            this.exStack--;
            var temp=tempEx[this.exStack-1].spacedOn(tempEx[this.exStack]);
            tempEx[this.exStack-1]=AlgRules.reform(temp);
            if(tempEx[this.exStack-1]==null) {
                tempEx[this.exStack-1]=temp;console.log("reform err:"+xtreeml.XtreeML(temp));
            }
        }
    }
    
    this.evalEMPOperation = function(){
        while(this.opStack>=0){
            if(opStart[this.opStack]+opParam[this.opStack]<this.exStack){
                this.exStack--;
                var temp=tempEx[this.exStack-1].spacedOn(tempEx[this.exStack]);
                tempEx[this.exStack-1]=AlgRules.reform(temp);
                if(tempEx[this.exStack-1]==null) {
                    tempEx[this.exStack-1]=temp;
                    console.log("reform err:"+xtreeml.XtreeML(temp));
                    
                }
            }
            else if(opStart[this.opStack]+opParam[this.opStack]==this.exStack){
                this.exStack-=opParam[this.opStack];
                tempEx[this.exStack++]=this.makeEXtree(this.ext[opIndex[this.opStack]].operation,this.ext[opIndex[this.opStack]].word,opStart[this.opStack],opParam[this.opStack],tempEx);
                this.opStack--;
            }
            else{
                this.exPush(new  EmptyEXT(""));
            }
        }
        while(this.opStack==-1 && this.exStack>=2){
            this.exStack--;
            var temp=tempEx[this.exStack-1].spacedOn(tempEx[this.exStack]);
            tempEx[this.exStack-1]=AlgRules.reform(temp);
            if(tempEx[this.exStack-1]==null) {
                tempEx[this.exStack-1]=temp;
                console.log("reform err:"+xtreeml.XtreeML(temp));
            }
        }
    }
	
	this.evalAll = function(){
		var i;
		if(!this.isOperation()){
			if(this.isExpression()){
                for(i=1;i<this.exStack;i++){
                    var temp=tempEx[0].spacedOn(tempEx[i]);
                    tempEx[0]=AlgRules.reform(temp);
                    if(tempEx[0]==null) {
                        tempEx[0]=temp;
                        console.log("reform err:"+xtreeml.XtreeML(temp));
                    }
                }
				this.exStack=1;
			}
		}
		else if(this.exStack>0){
            var wd;
            var ko,key,order;
			this.evalEMPOperation();
			for(i=0;i<=this.opStack;i++){
                tempEx[0]=tempEx[0].spacedOn(new SymbolEXT(2,this.ext[opIndex[i]].word,this.ext[opIndex[i]].word.charAt(0)));
            }
		}
		else{
			var ans;
            var wd;
            var ko,key,order;
			if(this.ext[opIndex[0]].operation==5) ans=null;
            else if(this.ext[opIndex[0]].operation==-1||this.ext[opIndex[0]].operation==0){
                wd=this.ext[opIndex[0]].word;
                if(wd==",") ko=OTB.getKeyAndOrder("Ccomma");
                else if(wd==".") ko=OTB.getKeyAndOrder("C..");
                else ko=OTB.getKeyAndOrder("C6"+wd);
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree2(2,key,order,new EmptyEXT(""),new EmptyEXT(""),OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(", reform err:"+xtreeml.XtreeML(temp));}
                }
                else{
                    ko=OTB.getKeyAndOrder("P0"+wd);
                    if(ko>=0){
                        key=Math.floor(ko/100);
                        order=ko%100;
                        var temp=new EXtree1(2,key,order,new EmptyEXT(""),OTB.getOpeword(key));
                        ans=AlgRules.reform(temp);
                        if(ans==null) { ans=temp;console.log("P0 reform err:"+xtreeml.XtreeML(temp));}
                    }
                    else ans=null;
                }
            }
			else  ans=new SymbolEXT(2,this.ext[opIndex[0]].word,this.ext[opIndex[0]].word.charAt(0));
			for(i=1;i<=this.opStack;i++){
				if(this.ext[opIndex[i]].operation==5) ans=null;
                else if(this.ext[opIndex[i]].operation==-1||this.ext[opIndex[i]].operation==0){
                    wd=this.ext[opIndex[i]].word;
                    if(wd==",") ko=OTB.getKeyAndOrder("Ccomma");
                    else if(wd==".") ko=OTB.getKeyAndOrder("C..");
                    else ko=OTB.getKeyAndOrder("C6"+wd);
                    if(ko>=0){
                        key=Math.floor(ko/100);
                        order=ko%100;
                        var temp=new EXtree2(2,key,order,new EmptyEXT(""),new EmptyEXT(""),OTB.getOpeword(key));
                        var ans2=AlgRules.reform(temp);
                        if(ans==null){
                            if(ans2==null){ ans=temp;console.log("C, reform err:"+xtreeml.XtreeML(temp));}
                            else{ans=ans2;}
                        }
                        else{
                            if(ans2==null){ ans=ans.spacedOn(temp);console.log(", reform err:"+xtreeml.XtreeML(temp));}
                            else{ans=ans.spacedOn(ans2);}
                        }
                    }
                    else{
                        ko=OTB.getKeyAndOrder("P0"+wd);
                        if(ko>=0){
                            key=Math.floor(ko/100);
                            order=ko%100;
                            var temp=new EXtree1(2,key,order,new EmptyEXT(""),OTB.getOpeword(key));
                            var ans2=AlgRules.reform(temp);
                            if(ans==null){
                                if(ans2==null){ ans=temp;console.log("C, reform err:"+xtreeml.XtreeML(temp));}
                                else{ans=ans2;}
                            }
                            else{
                                if(ans2==null){ ans=ans.spacedOn(temp);console.log(", reform err:"+xtreeml.XtreeML(temp));}
                                else{ans=ans.spacedOn(ans2);}
                            }
                        }
                        else ans=null;
                    }
                }
                else{
                    ans=ans.spacedOn(new SymbolEXT(2,this.ext[opIndex[i]].word,this.ext[opIndex[i]].word.charAt(0)));
                }
			}
			this.exPush(ans);
			this.opStack=-1;
		}
	}
	
	this.pullAll = function(){
		this.evalAll();
		if(!this.isExpression()){ return(new EmptyEXT(""));}
		else return(tempEx[0]);
	}
	

    this.makeEXtree = function(op,  wd, i0, par, stEx){
		var ans;
		var k;
        var ko=OTB.getKeyAndOrder(wd);
        var key=Math.floor(ko/100);
        var order=ko%100;
        if(ko<0) ans=null;
		var SYMBOL=new MathTOUCH.SymbolTable();
		if(wd == "="){
            key=OTB.theNumberOf("=");
            var temp=new EXtree2(2,key,0,stEx[i0],stEx[i0+1],wd);
            ans=AlgRules.reform(temp);
            if(ans==null) { ans=temp;console.log("= reform err:"+xtreeml.XtreeML(temp));}
		}
		else if(wd == "^"){
            if(par==2){
                var temp=new EXtree2(2,MathTOUCH.SP,1,stEx[i0],stEx[i0+1]," ");
                ans=AlgRules.reform(temp);
                if(ans==null) { ans=temp;console.log("^ reform err:"+xtreeml.XtreeML(temp));}
            }
            else if(par==3){
                var temp=new EXtree2(2,MathTOUCH.SP,2,new EXtree2(2,MathTOUCH.SP,3,stEx[i0],stEx[i0+2]," "),stEx[i0+1]," ");
                ans=AlgRules.reform(temp);
                if(ans==null) { ans=temp;console.log("^3 reform err:"+xtreeml.XtreeML(temp));}
            }
		}
		else if(wd == "_"){
            if(par==2){
                var temp=new EXtree2(2,MathTOUCH.SP,3,stEx[i0],stEx[i0+1]," ");
                ans=AlgRules.reform(temp);
                if(ans==null) { ans=temp;console.log("_ reform err:"+xtreeml.XtreeML(temp));}
            }
            else if(par==3){
                var temp=new EXtree2(2,MathTOUCH.SP,2,new EXtree2(2,MathTOUCH.SP,3,stEx[i0],stEx[i0+1]," "),stEx[i0+2]," ");
                ans=AlgRules.reform(temp);
                if(ans==null) { ans=temp;console.log("_3 reform err:"+xtreeml.XtreeML(temp));}
            }
		}
        else if(wd == " "){
            var temp=stEx[i0].spacedOn(stEx[i0+1]);
            ans=AlgRules.reform(temp);
            if(ans==null) { ans=temp;console.log("SP reform err:"+xtreeml.XtreeML(temp));}
        }
		else if(wd == ","&&op==-1){
            key=OTB.theNumberOf(";");
            ans=new EXtree2(2,key,1,stEx[i0],stEx[i0+1],";");
        }
		else if(wd == ":"&&op==-1){
            key=OTB.theNumberOf(";");
            ans=new EXtree2(2,key,2,stEx[i0],stEx[i0+1],";");
        }
		else if(wd == ";"&&op==-1){
            key=OTB.theNumberOf(";");
            ans=new EXtree2(2,key,3,stEx[i0],stEx[i0+1],";");
        }
		else if(wd == "quad"){
            key=OTB.theNumberOf(";");
            ans=new EXtree2(2,key,5,stEx[i0],stEx[i0+1],";");
        }
		else if(wd == "qquad"){
            key=OTB.theNumberOf(";");
            ans=new EXtree2(2,key,6,stEx[i0],stEx[i0+1],";");
        }
		else if(wd == "!"&&op==-1){
            key=OTB.theNumberOf(";");
            ans=new EXtree2(2,key,4,stEx[i0],stEx[i0+1],";");
        }
		else if(wd == "negmedspace"){
            key=OTB.theNumberOf(";");
            ans=new EXtree2(2,key,7,stEx[i0],stEx[i0+1],";");
        }
		else if(wd == "negthickspace"){
            key=OTB.theNumberOf(";");
            ans=new EXtree2(2,key,8,stEx[i0],stEx[i0+1],";");
        }
        else if(wd == "rm"){
            ans=new VariableEXT(2,"\\mathrm{"+stEx[i0].inputWord+"}",stEx[i0].inputWord);
        }
        else if(wd == "cal"){
            ans=new VariableEXT(2,"\\mathcal{"+stEx[i0].inputWord+"}",stEx[i0].inputWord);
        }
        else if(wd == "boldmath"){
            ans=new VariableEXT(2,"\\mathbf{"+stEx[i0].inputWord+"}",stEx[i0].inputWord);
        }
        else if(wd == "bf"){
            ans=new VariableEXT(2,"\\mathbf{"+stEx[i0].inputWord+"}",stEx[i0].inputWord);
        }
		else if((k=SYMBOL.DBOnumberOf(wd))>=0){
			if(par==2){
                if(wd == "."){
                    key=OTB.theNumberOf(".");
                    var temp=new EXtree2(2,key,0,stEx[i0],stEx[i0+1],".");
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(". reform err:"+xtreeml.XtreeML(temp));}
                }
                else if(op==5){
                    var m=SYMBOL.notOPnumberOf(SYMBOL.DoubleOp[k]);
                    console.log("not:"+wd);
                    if(m>=0){
                        ko=OTB.getKeyAndOrder("C6not "+SYMBOL.notOP[m]);
                    }
                    else{
                        ko=OTB.getKeyAndOrder("C6"+SYMBOL.notOP[m]);
                    }
                    if(ko>=0){
                        key=Math.floor(ko/100);
                        order=ko%100;
                        var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                        ans=AlgRules.reform(temp);
                        if(ans==null) { ans=temp;console.log(", reform err:"+xtreeml.XtreeML(temp));}
                    }
                }
                else{
                    if(wd==",") ko=OTB.getKeyAndOrder("Ccomma");
                    else ko=OTB.getKeyAndOrder("C6"+wd);
                    if(ko>=0){
                        key=Math.floor(ko/100);
                        order=ko%100;
                        var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                        ans=AlgRules.reform(temp);
                        if(ans==null) { ans=temp;console.log(", reform err:"+xtreeml.XtreeML(temp));}
                    }
                    else{ans=null;console.log("DoubleOP err:"+wd);}
                }
			}
            else{
                ko=OTB.getKeyAndOrder("P0"+wd);
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log("P0 reform err:"+xtreeml.XtreeML(temp));}
                }
                else{
                    if(wd==",") ko=OTB.getKeyAndOrder("Ccomma");
                    else if(wd==".") ko=OTB.getKeyAndOrder("C..");
                    else ko=OTB.getKeyAndOrder("C6"+wd);
                    if(ko>=0){
                        key=Math.floor(ko/100);
                        order=ko%100;
                        var temp=new EXtree2(2,key,order,new EmptyEXT(""),stEx[i0],OTB.getOpeword(key));
                        ans=AlgRules.reform(temp);
                        if(ans==null) { ans=temp;console.log(", reform err:"+xtreeml.XtreeML(temp));}
                    }
                    else{ans=null;console.log("DoubleOP err:"+wd);}
                }
            }
		}
		else if(wd == "vec"){
                ko=OTB.getKeyAndOrder("P6vec");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log("vec reform err:"+xtreeml.XtreeML(temp));}
                }
        }
		else if(wd == "hat"){
                ko=OTB.getKeyAndOrder("P2^");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
        }
		else if(wd == "dot"){
                ko=OTB.getKeyAndOrder("A4cdot");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                    
                }
        }
		else if(wd == "tilde"){
                ko=OTB.getKeyAndOrder("P4~");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }

        }
		else if(wd == "not"){
            ans=null;
        }
		else if(wd == "overline"){
                ko=OTB.getKeyAndOrder("P5overline");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }

        }
		else if(wd == "underline"){
                ko=OTB.getKeyAndOrder("A8underline");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }

        }
        else if(wd == "framebox"){
                ko=OTB.getKeyAndOrder("A9framebox");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
        }
        else if(wd == "%"){
                ko=OTB.getKeyAndOrder("A3%");console.log("%"+ko);
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
        }
		else if(wd == "overrightarrow"){
                ko=OTB.getKeyAndOrder("P7widevec");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
        }
		else if(wd == "overleftarrow"){
                ko=OTB.getKeyAndOrder("Pdwideleftvec");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
        }
		else if(wd == "widetilde"){
                ko=OTB.getKeyAndOrder("Pewidetilde");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
        }
		else if(wd == "widehat"){
                ko=OTB.getKeyAndOrder("Pfwidehat");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
        }
		else if(wd == "overbrace"){
                ko=OTB.getKeyAndOrder("Pgoverbrace");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
        }
		else if(wd == "underbrace"){
                ko=OTB.getKeyAndOrder("Phunderbrace");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
        }
		else if(wd == "lim"){
                ko=OTB.getKeyAndOrder("Q4lim");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
        }
		else if(SYMBOL.BignumberOf(wd)>=0){
            if(par==1){
                ko=OTB.getKeyAndOrder("Pb"+wd);
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
            }
            else if(par==2){
                ko=OTB.getKeyAndOrder("Q2"+wd);
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
            }
            else{
                ko=OTB.getKeyAndOrder("R0"+wd);
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree3(2,key,order,stEx[i0],stEx[i0+1],stEx[i0+2],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
            }
		}
		else if(wd == "|"){
            ko=OTB.getKeyAndOrder("C6|");
            if(ko>=0){
                key=Math.floor(ko/100);
                order=ko%100;
                var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                ans=AlgRules.reform(temp);
                if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
            }
        }
		else if(wd == "bmod"){
            ko=OTB.getKeyAndOrder("C6bmod");
            if(ko>=0){
                key=Math.floor(ko/100);
                order=ko%100;
                var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                ans=AlgRules.reform(temp);
                if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
            }
        }
		else if(wd == "backslash"){
            ko=OTB.getKeyAndOrder("C6backslash");
            if(ko>=0){
                key=Math.floor(ko/100);
                order=ko%100;
                var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                ans=AlgRules.reform(temp);
                if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
            }
        }
		else if(wd == "pmod"){
            ko=OTB.getKeyAndOrder("P0pmod");
            if(ko>=0){
                key=Math.floor(ko/100);
                order=ko%100;
                var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                ans=AlgRules.reform(temp);
                if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
            }
        }
		else if(wd == "int"||wd == "oint"){
            if(par==1){
                ko=OTB.getKeyAndOrder("P9"+wd);
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+"1 reform err:"+xtreeml.XtreeML(temp));}
                }
            }
            else if(par==2){
                ko=OTB.getKeyAndOrder("Q0"+wd);
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+"2 reform err:"+xtreeml.XtreeML(temp));}
                }
            }
            else{
                ko=OTB.getKeyAndOrder("R1"+wd);
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree3(2,key,order,stEx[i0],stEx[i0+1],stEx[i0+2],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+"3 reform err:"+xtreeml.XtreeML(temp));}
                }
            }
		}

		else if(wd == "frac"){
            ko=OTB.getKeyAndOrder("C7frac");
            if(ko>=0){
                key=Math.floor(ko/100);
                order=ko%100;
                var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                ans=AlgRules.reform(temp);
                if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
            }
        }
		else if(wd == "sqrt"){
            if(par==1){
                ko=OTB.getKeyAndOrder("P1sqrt");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
            }
            else{
                ko=OTB.getKeyAndOrder("C8sqrt");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
            }
		}
		else if(wd == "log"){
            if(par==1){
                ko=OTB.getKeyAndOrder("P0log");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
            }
            else{
                ko=OTB.getKeyAndOrder("Q1log");
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
            }
		}
        else if(wd == "left^"){
            ko=OTB.getKeyAndOrder("C4left^");
            if(ko>=0){
                key=Math.floor(ko/100);
                order=ko%100;
                var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                ans=AlgRules.reform(temp);
                if(ans==null) {
                    ans=temp;
                    console.log(wd+" reform err:"+xtreeml.XtreeML(temp));
                }
            }
        }
        else if(wd == "left_"){
            ko=OTB.getKeyAndOrder("C5left_");
            if(ko>=0){
                key=Math.floor(ko/100);
                order=ko%100;
                var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                ans=AlgRules.reform(temp);
                if(ans==null) {
                    ans=temp;
                    console.log(wd+" reform err:"+xtreeml.XtreeML(temp));
                }
            }
        }
		else if((k=SYMBOL.OP1numberOf(wd))>=0){
            if(par==1){
                ko=OTB.getKeyAndOrder("P0"+wd);
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree1(2,key,order,stEx[i0],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
            }
            else{
                ko=OTB.getKeyAndOrder("Q3"+wd);
                if(ko>=0){
                    key=Math.floor(ko/100);
                    order=ko%100;
                    var temp=new EXtree2(2,key,order,stEx[i0],stEx[i0+1],OTB.getOpeword(key));
                    ans=AlgRules.reform(temp);
                    if(ans==null) { ans=temp;console.log(wd+" reform err:"+xtreeml.XtreeML(temp));}
                }
            }
		}
        else{
            ans=new EmptyEXT("");
        }
		return(ans);
	}

	this.checkError = function(i){
			console.log("("+i+")"+this.ext[i].word+", opStack="+this.opStack+" ,exStack="+this.exStack);
	}
}


MathTOUCH.SymbolTable = function(){
    this.opV=[
		"aleph","alpha","beta","gamma","Gamma","delta","Delta","epsilon",
		"eta","theta","Theta","chi","ell","emptyset","exists","flat","forall",
		"hbar","Im","infty","iota",
		"jmath","kappa","lambda","Lambda","mho","mu","nabla","natural",
		"nu","o","O","omega","Omega","P","partial","phi","Phi",
		"pi","Pi","pounds","psi","Psi","Re","rho","S","sharp","sigma",
		"Sigma","ss","surd",
        "tau","theta","Theta","top","triangle",
		"upsilon","Upsilon","varepsilon","varphi",
		"varpi","varrho","varsigma","vartheta","wp","xi","Xi","zeta",
		"ldots","cdots","vdots","ddots"
	];

    this.opS=[
		"backslash","Box","clubsuit","diamondsuit","Diamond","heartsuit","spadesuit",
		"lfloor","rfloor","lceil","rceil",
		"downarrow","bot","top"];
    this.opA=[
        "!","\"","'",
        "#","circ","+","-","pm","mp","dagger","*","times",
        "?","%",
        "cdot",
        "underline",
        "framebox"
    ];
    
    this.OPAnumberOf = function(st){
        var i;
        for(i=0;i<this.opA.length;i++){if(st == this.opA[i]) break;}
        if(i<this.opA.length) return(i);
        else return(-1);
    }

    this.op1=[
		"@",
		"sin","cos","tan","coth","arg","hom","log","csc","sec","cot","deg",
		"ker","lg","arcsin","arccos","arctan","dim","ln","sinh","cosh","tanh",
		"exp","gcd","Pr","det","max","min","sup","inf","limsup","liminf",
		"triangleup",
		"vec","hat","dot","tilde","sqrt","overline","underline","pmod","not",
		"overrightarrow","overleftarrow","widetilde","widehat","overbrace","underbrace",
		"because","therefore","$","angle",
		"mathcal","mathrm","mathsf","mathbl","mathbf"
	];
    
    this.OP1numberOf = function(st){
		var i;
		for(i=0;i<this.op1.length;i++){if(st == this.op1[i]) break;}
		if(i<this.op1.length) return(i);
		else return(-1);
	}
	
    this.op2=[];

    this.op3=[
		"sum","int"
	];
                        
    this.notOP=[
        "equiv","sim","simeq","approx","cong","asymp",
        "in","<","leq","subset","subseteq",
        ">","geq","ni","supset","supseteq"
    ];
    
    this.notOPnumberOf = function(st){
        var i;
        for(i=0;i<this.notOP.length;i++){if(st == this.notOP[i]) break;}
        if(i<this.notOP.length) return(i);
        else return(-1);
    }
	
	this.BraL=["(","{","[","lfloor","lceil","langle","|","||"];
	this.BraR=[")","}","]","rfloor","rceil","rangle","|","||"];

    this.BLnumberOf = function(br){
		var i;
		for(i=0;i<this.BraL.length;i++){if(br == this.BraL[i]) break;}
		if(i<this.BraL.length) return(i);
		else return(-1);
	}

    this.BigSym=["sum","prod",
		"coprod","bigoplus","biguplus","bigodot","bigcap","bigcup",
		"bigsqcap","bigsqcup","bigotimes","bigvee","bigwedge"
	];
    this.BignumberOf = function(st){
		var i;
		for(i=0;i<this.BigSym.length;i++){if(st == this.BigSym[i]) break;}
		if(i<this.BigSym.length) return(i);
		else return(-1);
	}

    this.DoubleOp=["*","/","#","&","=",
		"+","-","pm","mp",",","<",">",";",":",".",
		"leftarrow","Leftarrow","leftharpoondown","leftharpoonup","leftrightarrow",
		"Leftrightarrow","hookleftarrow","hookrightarrow","bmod",
		"rightarrow","Rightarrow","rightharpoonup","rightherpoondown",
		"rightleftharpoons","approx","asymp",
		"doteq","diamond","downarrow","equiv","frown",
		"geq","geqq","gg","in","Join","leadsto","leq","leqq","ll","mapsto","models",
		"neq","nearrow","ni","nwarrow","setminus","smile",
		"perp","prec","preceq","propto","searrow",
		"sim","simeq","sqcap","sqcup","sqsubset","sqsubseteq","sqsupset","sqsupseteq",
		"subset","subseteq","succ","succeq","supset","supseteq","swarrow",
        "uparrow","updownarrow","Updownarrow",
        "vdash","dashv",
		"ast","bigcirc","bigtriangledown","bigtriangleup",
		"bullet","cap","cdot","circ","cong","cup","div",
		"lhd","odot","ominus","oplus","oslash",
		"otimes","rhd","parallel",
		"star","wr",
		"times","triangleleft","triangleright","unlhd","unrhd",
		"uplus","vee","wedge","amalg","dagger","ddagger"
	];
    this.DBOnumberOf = function(st){
		var i;
		for(i=0;i<this.DoubleOp.length;i++){if(st == this.DoubleOp[i]) break;}
		if(i<this.DoubleOp.length) return(i);
		else return(-1);
	}

    this.isVariable = function(vn){
		var i;
		for(i=0;i<this.opV.length;i++){
			if(vn == this.opV[i]) break;
		}
		if(i<this.opV.length){return(true);}
		else {return(false);}
	}
    this.isSymbol = function(vn){
        var i;
        for(i=0;i<this.opS.length;i++) if(vn == this.opS[i]) break;
        if(i<this.opS.length) return(true);
        return(false);
    }
}
