MathTOUCH.EXtree2TeX = function(){
    var TEX=2;
};

MathTOUCH.EXtree2TeX.prototype.TeXof = function(ex,option){
    var ans;
    switch(ex.type){
        case MathTOUCH.EMP:
            if(ex.val==""){
                if(option==undefined||option==null||option==false) ans=" ";
                else ans="\u2B1A ";
            }
            else if(ex.val=="thinspace") ans="\\, ";
            else if(ex.val=="medspace") ans="\\: ";
            else if(ex.val=="thickspace") ans="\\; ";
            else if(ex.val=="quad") ans="\\quad ";
            else if(ex.val=="qquad") ans="\\qquad ";
            else ans="";
            break;
        case MathTOUCH.NUM:
            if(ex.val.charAt(0)=='b') ans="{\\bf "+ex.val.substring(1)+"}";
            else ans=ex.val;
            break;
        case MathTOUCH.VAR:
            ans=ex.val;
            break;
        case MathTOUCH.SYM:
            ans=ex.val;
            break;
        case MathTOUCH.TXT:
            ans="\\mbox{\\rm "+ex.val+"}";
            break;
        case MathTOUCH.EDIT:
            ans="\\mbox{\\rm "+ex.getInputWord()+"}";
            break;
        case MathTOUCH.XTML:
            ans=this.TeXof(EXTML.parse(ex.inputWord,ex.val),option);
            break;
        case MathTOUCH.MAT:
            ans="\\begin{array}{"+ex.val.substring(ex.rownum+1)+"}";
            var rowline=new Array();
            for(var i=0;i<=ex.rownum;i++) rowline[i]=ex.val.charAt(i);
            if(rowline[0]==0) ans=ans;
            else if(rowline[0]==1) ans=ans+"\\hline ";
            else ans=ans+"\\hline\\hline ";
            for(var i=0;i<ex.rownum-1;i++){
                for(var j=0;j<ex.colnum-1;j++){
                    if(ex.ch[i*ex.colnum+j]==null) ans=ans+" & ";
                    else ans=ans+this.TeXof(ex.ch[i*ex.colnum+j],option)+" & ";
                }
                if(ex.ch[i*ex.colnum+ex.colnum-1]==null) ans=ans+" \\\\ ";
                else ans=ans+this.TeXof(ex.ch[i*ex.colnum+ex.colnum-1],option)+" \\\\ ";
                if(rowline[i+1]==0) ans=ans;
                else if(rowline[i+1]==1) ans=ans+"\\hline ";
                else ans=ans+"\\hline\\hline ";
            }
                for(var j=0;j<ex.colnum-1;j++){
                    if(ex.ch[(ex.rownum-1)*ex.colnum+j]==null) ans=ans+" & ";
                    else ans=ans+this.TeXof(ex.ch[(ex.rownum-1)*ex.colnum+j],option)+" & ";
                }
                if(ex.ch[(ex.rownum-1)*ex.colnum+ex.colnum-1]==null) ans=ans+" \\\\ ";
                else ans=ans+this.TeXof(ex.ch[(ex.rownum-1)*ex.colnum+ex.colnum-1],option)+" \\\\ ";
                if(rowline[ex.rownum]==0) ans=ans;
                else if(rowline[ex.rownum]==1) ans=ans+"\\hline ";
                else ans=ans+"\\hline\\hline ";
            ans=ans+"\\end{array}";
            break;
        default:
            var excode=OTB.theEXcode(ex.key,ex.order);
            var opec=excode.charAt(1);
            var texcode=OTB.theTeXcode(ex.key,ex.order);
            switch(ex.type){
                case MathTOUCH.OP1P: ans=this.OP1PexRep(opec,texcode,ex,option);
                        break;
                case MathTOUCH.OP1A : ans=this.OP1AexRep(opec,texcode,ex,option);
                        break;
                case MathTOUCH.OP1B: ans=this.OP1BexRep(opec,texcode,ex,option);
                        break;
                case MathTOUCH.OP2C: ans=this.OP2CexRep(opec,texcode,ex,option);
                        break;
                case MathTOUCH.OP2P: ans=this.OP2PexRep(opec,texcode,ex,option);
                        break;
                case MathTOUCH.OP3P:	ans=this.OP3PexRep(opec,texcode,ex,option);
                        break;
                case MathTOUCH.OP3T:	ans=this.OP3TexRep(opec,texcode,ex,option);
                        break;
                default:
                        ans=null;
            }
    }
    return ans;
};

MathTOUCH.EXtree2TeX.prototype.OP1PexRep = function(opec,texcode,ex,option){
    var ans=null;
    switch(opec){
        case '0':
        case '9':
        case 'a':
        case 'b':
            ans=texcode+" "+this.TeXof(ex.ch[0],option);
            break;
        case '1':
            ans="\\sqrt{"+this.TeXof(ex.ch[0],option)+"}";
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
        case 'i':
            ans=texcode+"{"+this.TeXof(ex.ch[0],option)+"}";
            break;
        default:
            ans="\\mbox{OP1P Error}";
    }
    return ans;
};

MathTOUCH.EXtree2TeX.prototype.OP1AexRep = function(opec,texcode,ex,option){
    var ans=null;
    switch(opec){
        case '0':
        case '1':
        case '3':
            ans=this.TeXof(ex.ch[0],option)+texcode;
            break;
        case '2':
            ans="\\left."+this.TeXof(ex.ch[0],option)+"\\right"+texcode;
            break;
        case '4':
            ans=texcode+"{"+this.TeXof(ex.ch[0],option)+"}";
            break;
        case '8':
        case '9':
            ans=texcode+"{"+this.TeXof(ex.ch[0],option)+"}";
            break;
        default:
            ans="\\mbox{OP1A Error}";
    }
    return ans;
};

MathTOUCH.EXtree2TeX.prototype.OP1BexRep = function(opec,texcode,ex,option){
    var ans=null;
    var i=texcode.indexOf(',');
    var Lbra=texcode.substring(0,i);
    var Rbra=texcode.substring(i+1);
    switch(opec){
        case '0':
        case '1':
        case '2':case '1':
        case '3':
        case '4':
        case '5':
            ans=Lbra+" "+this.TeXof(ex.ch[0],option)+" "+Rbra;
            break;
        default:
            ans="\\mbox{OP1B Error}";
    }
    return ans;
};

MathTOUCH.EXtree2TeX.prototype.OP2CexRep = function(opec,texcode,ex,option){
    var ans=null;
    switch(opec){
        case '0':
            ans=this.TeXof(ex.ch[0],option)+" "+this.TeXof(ex.ch[1],option);
            break;
        case '1':
            if(ex.ch[0].cnum==0) ans=this.TeXof(ex.ch[0],option)+"^{"+this.TeXof(ex.ch[1],option)+"}";
            else ans="{"+this.TeXof(ex.ch[0],option)+"}^{"+this.TeXof(ex.ch[1],option)+"}";
            break;
        case '2':
            if(ex.ch[0].key==MathTOUCH.SP && ex.ch[0].order==3){
                if(ex.ch[0].ch[0].cnum==0) ans=this.TeXof(ex.ch[0].ch[0],option)+"_{"+this.TeXof(ex.ch[0].ch[1],option)+"}^{"+this.TeXof(ex.ch[1],option)+"}";
                else ans="{"+this.TeXof(ex.ch[0].ch[0],option)+"}_{"+this.TeXof(ex.ch[0].ch[1],option)+"}^{"+this.TeXof(ex.ch[1],option)+"}";
            }
            else ans="\\mbox{SubSuperscript Error}";
            break;
        case '3':
            if(ex.ch[0].cnum==0) ans=this.TeXof(ex.ch[0],option)+"_{"+this.TeXof(ex.ch[1],option)+"}";
            else ans="{"+this.TeXof(ex.ch[0],option)+"}_{"+this.TeXof(ex.ch[1],option)+"}";
            break;
        case '4':
            ans="{}^{"+this.TeXof(ex.ch[0],option)+"}"+this.TeXof(ex.ch[1],option);
            break;
        case '5':
            ans="{}_{"+this.TeXof(ex.ch[0],option)+"}"+this.TeXof(ex.ch[1],option);
            break;
        case '6':
        case 'c':
        case '.':
            ans=this.TeXof(ex.ch[0],option)+" "+texcode+" "+this.TeXof(ex.ch[1],option);
            break;
        case ',':
            ans=this.TeXof(ex.ch[0],option)+"\\,"+this.TeXof(ex.ch[1],option);
            break;
        case ':':
            ans=this.TeXof(ex.ch[0],option)+"\\:"+this.TeXof(ex.ch[1],option);
            break;
        case ';':
            ans=this.TeXof(ex.ch[0],option)+"\\;"+this.TeXof(ex.ch[1],option);
            break;
        case '>':
            ans=this.TeXof(ex.ch[0],option)+"\\quad "+this.TeXof(ex.ch[1],option);
            break;
        case 'q':
            ans=this.TeXof(ex.ch[0],option)+"\\qquad "+this.TeXof(ex.ch[1],option);
            break;
        case '!':
            ans=this.TeXof(ex.ch[0],option)+"\\!"+this.TeXof(ex.ch[1],option);
            break;
        case '-':
            ans=this.TeXof(ex.ch[0],option)+"\\negmedspace "+this.TeXof(ex.ch[1],option);
            break;
        case '<':
            ans=this.TeXof(ex.ch[0],option)+"\\negthickspace "+this.TeXof(ex.ch[1],option);
            break;
        case '7':
            ans="\\frac{"+this.TeXof(ex.ch[0],option)+"}{"+this.TeXof(ex.ch[1],option)+"}";
            break;
        case '9':
            ans="\\frac{"+this.TeXof(ex.ch[1],option)+"}{"+this.TeXof(ex.ch[0],option)+"}";
            break;
        case '8':
            ans="\\sqrt["+this.TeXof(ex.ch[0],option)+"]{"+this.TeXof(ex.ch[1],option)+"}";
            break;
        default:
            ans="\\mbox{OP2C error}";
    }
    return ans;
};

MathTOUCH.EXtree2TeX.prototype.OP2PexRep = function(opec,texcode,ex,option){
    var ans=null;
    switch(opec){
        case '0':
        case '1':
        case '2':
            ans=texcode+"_{"+this.TeXof(ex.ch[0],option)+"} "+this.TeXof(ex.ch[1],option);
            break;
        case '3':
            ans=texcode+"^{"+this.TeXof(ex.ch[0],option)+"}"+this.TeXof(ex.ch[1],option);
            break;
        case '4':
            ans=texcode+"{"+this.TeXof(ex.ch[0],option)+"}"+this.TeXof(ex.ch[1],option);
            break;
        default:
            ans="\\mbox{OP2P Error}";
    }
    return ans;
};

MathTOUCH.EXtree2TeX.prototype.OP3PexRep = function(opec,texcode,ex,option){
    var ans=null;
    switch(opec){
        case '0':
        case '1':
            ans=texcode+"_{"+this.TeXof(ex.ch[0],option)+"}^{"+this.TeXof(ex.ch[1],option)+"}"+this.TeXof(ex.ch[2],option);
            break;
        default:
            ans="\\mbox{OP3P Error}";
    }
    return ans;
};

MathTOUCH.EXtree2TeX.prototype.OP3TexRep = function(opec,texcode,ex,option){
    var ans=null;
    switch(opec){
        case '0':
            ans=ans=this.TeXof(ex.ch[1],option)+" \\stackrel{"+this.TeXof(ex.ch[0],option)+"}{"+texcode+"}"+this.TeXof(ex.ch[2],option);
            break;
        case '1':
            ans=ans=this.TeXof(ex.ch[1],option)+" \\stackrel{"+this.TeXof(ex.ch[0],option)+"}{"+texcode+"}"+this.TeXof(ex.ch[2],option);
            break;
        case '2':
            ans=ans=this.TeXof(ex.ch[1],option)+" \\stackrel{"+texcode+"}{"+this.TeXof(ex.ch[0],option)+"}"+this.TeXof(ex.ch[2],option);
            break;
        default:
            ans="\\mbox{OP3P Error}";
    }
    return ans;
};
