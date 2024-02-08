MathTOUCH.XtreeML2EXtree = function(){
    var TEX=2;
    this.FirstKey = function(instr){
        var i=instr.indexOf(',');
        var i2=instr.indexOf('\u21E9');if(i2>=0&&(i<0||i2<i)) i=i2;
        i2=instr.indexOf('\u22A1'); if(i2>=0&&(i<0||i2<i)) i=i2;
        i2=instr.indexOf('\u27B1');if(i2>=0&&(i<0||i2<i)) i=i2;
        i2=instr.indexOf('\u23cE');if(i2>=0&&(i<0||i2<i)) i=i2;
        if(i>=0) return instr.substring(0,i);
        else return instr;
    };
    
    this.RestKey = function(instr){
        var i=instr.indexOf(',');
        var i2=instr.indexOf('\u21E9');if(i2>=0&&(i<0||i2<i)) i=i2;
        i2=instr.indexOf('\u22A1');if(i2>=0&&(i<0||i2<i)) i=i2;
        i2=instr.indexOf('\u27B1');if(i2>=0&&(i<0||i2<i)) i=i2;
        i2=instr.indexOf('\u23cE');if(i2>=0&&(i<0||i2<i)) i=i2;
        if(i>=0) return instr.substring(i+1);
        else return "";
    };
    
    this.LastKey = function (instr){
        var i=instr.lastIndexOf(',');
        var i2=instr.lastIndexOf('\u21E9');if(i2>=0&&i2>i) i=i2;
        i2=instr.lastIndexOf('\u22A1');if(i2>=0&&i2>i) i=i2;
        i2=instr.lastIndexOf('\u27B1');if(i2>=0&&i2>i) i=i2;
        i2=instr.lastIndexOf('\u23cE');if(i2>=0&&i2>i) i=i2;
        if(i>=0) return instr.substring(i+1);
        else return instr;
    };
    
    this.AfterKey = function(instr,pre){
        var i=instr.indexOf(pre);
        if(i<0) return null;
        else if(instr.length>i+pre.length) return instr.substring(i+pre.length+1);
        else return "";
    };
    
    this.PreviousKey = function(instr,pre){
        var i=instr.indexOf(pre);
        if(i<0) return null;
        else if(i-1>0) return instr.substring(0,i-1);
        else return "";
    };

};

MathTOUCH.XtreeML2EXtree.prototype.parseAny = function(str){
    var att=str.indexOf("@@@");
    var ans;
    if(att<0) ans=this.parseEX(str);
    else{
        ans=this.parse(str.substring(0,att),str.substring(att+3));
    }
    return ans;
};
	
MathTOUCH.XtreeML2EXtree.prototype.parse = function(input,ex){
    var ans;
    var type=ex.charAt(0);
    var opec=ex.charAt(1);
    var excode=ex.substring(2);
    var len=excode.length;
    var b,ko,alen,br,i,comma;
    var arg,arg1,arg2,arg3;
    var tmp=null;
    var tmp2=null;
    var tmp3=null;
    var input2="";
    var input3="";
    switch(type){
        case 'n':
            switch(opec){
                case 'u': ans=new EmptyEXT("");break;
                case '0': ans=new EmptyEXT(" ");break;
                case '1': ans=new EmptyEXT(excode);break;
                case '2': ans=new EmptyEXT(excode);break;
                case '3': ans=new EmptyEXT(excode);break;
                case '4': ans=new EmptyEXT(excode);break;
                case '5': ans=new EmptyEXT(excode);break;
                default: ans=new EmptyEXT("");
            }
            break;
        case 'N':
            if(opec=='b') ans=new NumberEXT(2,opec+excode);
            else ans=new NumberEXT(2,excode);
            ans.state=2;
            break;
        case 'V':
            ans=new VariableEXT(2,excode,this.FirstKey(input));
            ans.state=2;
            break;
        case 'S':
            ans=new SymbolEXT(2,excode,this.FirstKey(input));
            ans.state=2;
            break;
        case 't':
            ans=new EXtree0( 2,TXT,excode,this.FirstKey(input));
            break;
        case 'P':
            b=excode.indexOf('(');
            arg1=excode.substring(b+1,len-1);
            excode=ex.substring(0,b+2);
            comma=input.indexOf(',');
            ko=OTB.getKeyAndOrderFromExcode(input.substring(0,comma),excode);
            ans=new EXtree1( 2,Math.floor(ko/100),ko%100,this.parse(input.substring(comma+1),arg1),input.substring(0,comma));
            break;
        case 'A':
            b=excode.indexOf('(');
            arg1=excode.substring(b+1,len-1);
            excode=ex.substring(0,b+2);
            tmp=this.parse(input,arg1);
            if(tmp==null){console.log("XtreeML2EXtree ErrorA!");return null;}
            input2=this.FirstKey(this.AfterKey(input,tmp.getKeyWords()));
            if(input2==""){console.log("XtreeML2EXtree ErrorA2!");return null;}
            ko=OTB.getKeyAndOrderFromExcode(input2,excode);
            if(ko<0){console.log("XtreeML2EXtree ErrorA3!");ans=null;}
            else ans=new EXtree1( 2,Math.floor(ko/100),ko%100,tmp,input2);
            break;
        case 'B':
            arg1=excode.substring(3,len-1);
            excode=ex.substring(0,4);
            ko=OTB.getKeyAndOrder(excode);
            input2=this.RestKey(input);
            var binput=excode.substring(2);
            if(opec=='1'){
                if(binput=="()") binput="()";
                else if(binput=="[]"||binput=="|1"||binput=="|2"||binput=="lf"||binput=="lc"||binput=="bs") binput="[]";
                else if(binput=="{}"||binput=="<>") binput="{}";
                else if(binput=="(]"||binput=="(|"||binput=="(2") binput="(]";
                else if(binput=="(}"||binput=="(>") binput="(}";
                else if(binput=="[)"||binput=="|)"||binput=="2)") binput="[)";
                else if(binput=="[}"||binput=="|>"||binput=="2>"||binput=="|}"||binput=="[>") binput="[}";
                else if(binput=="{)"||binput=="<)") binput="{)";
                else if(binput=="{]"||binput=="<|"||binput=="<2"||binput=="{|"||binput=="<]") binput="{]";
                else{console.log("XtreeML2EXtree ErrorB!");}
            }
            else if(opec=='3'){
                if(binput=="()") binput="(";
                else if(binput=="[]"||binput=="|1"||binput=="|2"||binput=="lf"||binput=="lc"||binput=="bs") binput="[";
                else if(binput=="{}"||binput=="<>") binput="{";
                else{console.log("XtreeML2EXtree ErrorB!");}
            }
            else{
                input2=input;
                if(binput=="()") binput=")";
                else if(binput=="[]"||binput=="|1"||binput=="|2"||binput=="lf"||binput=="lc"||binput=="bs") binput="]";
                else if(binput=="{}"||binput=="<>") binput="}";
                else{console.log("XtreeML2EXtree ErrorB!");}
            }
            ans=new EXtree1( 2,Math.floor(ko/100),ko%100,this.parse(input2,arg1),binput);
            break;
        case 'C':
        case 'Q':
            b=excode.indexOf('(');
            arg=excode.substring(b+1,len-1);
            alen=arg.length;
            br=0;
            for(i=0;i<alen;i++){
                var c=arg.charAt(i);
                if(br==0 && c==',') break;
                if(c=='(') br++;
                else if(c==')') br--;
            }
            if(i==alen){console.log("Not found comma error in XtreeML2EXtree.java");return null; }
            arg1=arg.substring(0,i);
            arg2=arg.substring(i+1);
            excode=ex.substring(0,b+2);
            if(type=='C'){
                tmp=this.parse(input,arg1);
                if(tmp==null){console.log("XtreeML2EXtree ErrorC!");return null;}
                input2=this.AfterKey(input,tmp.getKeyWords());
                if(input2==""){console.log("XtreeML2EXtree ErrorC2!");return null;}
                if(opec>='0'&&opec<='3'){
                    var opewd=this.FirstKey(input2);
                    if(opewd=="_"||opewd=="^"){
                        tmp2=this.parse(this.RestKey(input2),arg2);
                    }
                    else{
                        tmp2=this.parse(input2,arg2);
                        opewd=" ";
                    }
                    if(tmp2==null){console.log("XtreeML2EXtree ErrorC3!");return null;}
                                    
                    ko=OTB.getKeyAndOrderFromExcode(opewd,excode);
                    if(ko<0){console.log("XtreeML2EXtree Error C!"+opewd+",excode="+excode);ans=null;}
                    else{
                        ans=new EXtree2( 2,Math.floor(ko/100),ko%100,tmp,tmp2,opewd);
                    }
                }
                else{
                    tmp2=this.parse(this.RestKey(input2),arg2);
                    if(tmp2==null){console.log("XtreeML2EXtree ErrorC4! "+input2+",rest2="+this.RestKey(input2)+",arg2="+arg2);return null;}
                    ko=OTB.getKeyAndOrderFromExcode(this.FirstKey(input2),excode);
                    if(ko<0){console.log("XtreeML2EXtree Error C!");ans=null;}
                    else{
                        var inp=this.FirstKey(input2);
                        ans=new EXtree2( 2,Math.floor(ko/100),ko%100,tmp,tmp2,inp);
                    }
                }
            }else{
                input2=this.RestKey(input);
                if(input2==""){console.log("XtreeML2EXtree ErrorQ1!");return null;}
                tmp=this.parse(input2,arg1);
                if(tmp==null){console.log("XtreeML2EXtree ErrorQ2!");return null;}
                if(tmp.getKeyWords()=="") input2=input2.substring(1);
                else input2=this.AfterKey(input2,tmp.getKeyWords());
                tmp2=this.parse(input2,arg2);
                if(tmp2==null){console.log("XtreeML2EXtree ErrorQ4!");return null;}
                ko=OTB.getKeyAndOrderFromExcode(this.FirstKey(input),excode);
                if(ko<0){console.log("XtreeML2EXtree Error Q5!");ans=null;}
                else ans=new EXtree2( 2,Math.floor(ko/100),ko%100,tmp,tmp2,this.FirstKey(input));
            }
            break;
        case 'R':
        case 'T':
            b=excode.indexOf('(');
            arg=excode.substring(b+1,len-1);
            alen=arg.length;
            br=0;
            for(i=0;i<alen;i++){
                var c=arg.charAt(i);
                if(br==0 && c==',') break;
                if(c=='(') br++;
                else if(c==')') br--;
            }
            if(i==alen){console.log("Not found comma error in XtreeML2EXtree.java");return null; }
            arg1=arg.substring(0,i);
            arg=arg.substring(i+1);
            alen=arg.length;
            br=0;
            for(i=0;i<alen;i++){
                var c=arg.charAt(i);
                if(br==0 && c==',') break;
                if(c=='(') br++;
                else if(c==')') br--;
            }
            if(i==alen){console.log("Not found comma error in XtreeML2EXtree.java");return null; }
            arg2=arg.substring(0,i);
            arg3=arg.substring(i+1);
            excode=ex.substring(0,b+2);
            if(type=='T'){
                tmp2=this.parse(input,arg2);
                if(tmp2==null){console.log("XtreeML2EXtree ErrorT!");return null;}
                if(tmp2.getKeyWords()=="") input2=input.substring(1);
                else input2=this.AfterKey(input,tmp2.getKeyWords());
                if(input2==""){console.log("XtreeML2EXtree ErrorT2!");return null;}
                input3=this.RestKey(input2);
                tmp=this.parse(input3,arg1);
                if(tmp==null){console.log("XtreeML2EXtree ErrorT4!");return null;}
                if(tmp.getKeyWords()=="") input3=input3.substring(1);
                else input3=this.AfterKey(input3,tmp.getKeyWords());
                tmp3=this.parse(input3,arg3);
                if(tmp3==null){console.log("XtreeML2EXtree ErrorT6!");return null;}
                ko=OTB.getKeyAndOrderFromExcode(this.FirstKey(input2),excode);
                if(ko<0){console.log("XtreeML2EXtree Error T7!");ans=null;}
                else ans=new EXtree3( 2,Math.floor(ko/100),ko%100,tmp,tmp2,tmp3,this.FirstKey(input2));
            }else{
                input2=this.RestKey(input);
                if(input2==""){console.log("XtreeML2EXtree ErrorR1!");return null;}
                tmp=this.parse(input2,arg1);
                if(tmp==null){console.log("XtreeML2EXtree ErrorR2!");return null;}
                if(tmp.getKeyWords()=="") input2=input2.substring(1);
                else input2=this.AfterKey(input2,tmp.getKeyWords());
                if(input2==""){console.log("XtreeML2EXtree ErrorR3!");return null;}
                tmp2=this.parse(input2,arg2);
                if(tmp2==null){console.log("XtreeML2EXtree ErrorR4!");return null;}
                if(tmp2.getKeyWords()=="") input2=input2.substring(1);
                else input2=this.AfterKey(input2,tmp2.getKeyWords());
                tmp3=this.parse(input2,arg3);
                if(tmp3==null){console.log("XtreeML2EXtree ErrorR6!");return null;}
                ko=OTB.getKeyAndOrderFromExcode(this.FirstKey(input),excode);
                if(ko<0){console.log("XtreeML2EXtree Error T7!");ans=null;}
                else ans=new EXtree3( 2,Math.floor(ko/100),ko%100,tmp,tmp2,tmp3,this.FirstKey(input));
            }
            break;
        case 'M':
            b=excode.indexOf('(');
            arg=excode.substring(b+1,len-1);
            alen=arg.length;
            excode=excode.substring(0,b);
            var rownum=opec-'0';
            var colnum=0;
            for(var j=rownum+1;j<excode.length;j++){
                switch(excode.charAt(j)){
                    case 'c':
                    case 'l':
                    case 'r':colnum++;break;
                }
            }
            if(input.charAt(0)=='\u21E9') input=input.substring(1);
            var iplen=input.length;
            if(input.charAt(iplen-1)=='\u22A1') input=input.substring(0,iplen-1);
            var elem=new Array();
            for(var j=0;j<rownum*colnum-1;j++){
                br=0;
                for(i=0;i<alen;i++){
                    var c=arg.charAt(i);
                    if(br==0 && c==',') break;
                    if(c=='(') br++;
                    else if(c==')') br--;
                }
                if(i==alen){console.log("Not found comma error in XtreeML2EXtree.java");return null; }
                arg1=arg.substring(0,i);
                if(arg1=="nul"){
                    elem[j]=null;
                    input=this.RestKey(input);
                }
                else{
                    elem[j]=this.parse(input,arg1);
                    if(elem[j]==null){console.log("XtreeML2EXtree Error2!");return null;}
                    if(elem[j].getKeyWords()=="") input2=input.substring(1);
                    else input2=this.AfterKey(input,elem[j].getKeyWords());
                    if(input2==""){console.log("XtreeML2EXtree Error3!");return null;}
                    input=input2;
                }
                arg=arg.substring(i+1);
                alen=arg.length;
            }
            if(arg=="nul") elem[rownum*colnum-1]=null;
            else elem[rownum*colnum-1]=this.parse(input,arg);
            ans=new EXtreeMat(2,rownum,excode,elem,"MAT");
            break;
        default:
            ans=null;
    }
    return ans;
};

MathTOUCH.XtreeML2EXtree.prototype.parseEX = function(ex){
    var ans;
    var type=ex.charAt(0);
    var opec=ex.charAt(1);
    var excode=ex.substring(2);
    var inpu;
    var len=excode.length;
    var b,ko,alen,br,i;
    var arg,arg1,arg2,arg3;
    switch(type){
        case 'n':
            switch(opec){
                case 'u': ans=new new EmptyEXT("");break;
                case '1': ans=new new EmptyEXT(excode);break;
                case '2': ans=new new EmptyEXT(excode);break;
                case '3': ans=new new EmptyEXT(excode);break;
                case '4': ans=new new EmptyEXT(excode);break;
                case '5': ans=new new EmptyEXT(excode);break;
                default: ans=new new EmptyEXT("");
            }
            break;
        case 'N':
            if(opec=='b') ans=new EXtree0( 2,1,opec+excode,excode);
            else ans=new EXtree0( 2,1,excode,excode);
            break;
        case 'V':
            ans=new EXtree0( 2,2,excode,excode);
            break;
        case 'S':
            ans=new EXtree0( 2,3,excode,excode);
            break;
        case 't':
            ans=new EXtree0( 2,TXT,excode,"\""+excode+"\"");
            break;
        case 'P':
        case 'A':
            b=excode.indexOf('(');
            arg1=excode.substring(b+1,len-1);
            inpu=excode.substring(0,b);
            excode=ex.substring(0,b+2);
            ko=OTB.getKeyAndOrder(excode);
            ans=new EXtree1( 2,Math.floor(ko/100),ko%100,this.parseEX(arg1),inpu);
            break;
        case 'B':
            arg1=excode.substring(3,len-1);
            inpu=excode.substring(0,2);
            excode=ex.substring(0,4);
            ko=OTB.getKeyAndOrder(excode);
            var binput=excode.substring(2);
            if(opec=='1'){
                if(binput=="()") binput="()";
                else if(binput=="[]"||binput=="|1"||binput=="|2"||binput=="lf"||binput=="lc"||binput=="bs") binput="[]";
                else if(binput=="{}"||binput=="<>") binput="{}";
                else{console.log("XtreeML2EXtree ErrorB!");}
            }
            else if(opec=='3'){
                if(binput=="()") binput="(";
                else if(binput=="[]"||binput=="|1"||binput=="|2"||binput=="lf"||binput=="lc"||binput=="bs") binput="[";
                else if(binput=="{}"||binput=="<>") binput="{";
                else{console.log("XtreeML2EXtree ErrorB!");}
            }
            else{
                if(binput=="()") binput=")";
                else if(binput=="[]"||binput=="|1"||binput=="|2"||binput=="lf"||binput=="lc"||binput=="bs") binput="]";
                else if(binput=="{}"||binput=="<>") binput="}";
                else{console.log("XtreeML2EXtree ErrorB!");}
            }
            ans=new EXtree1( 2,Math.floor(ko/100),ko%100,this.parseEX(arg1),binput);
            break;
        case 'C':
        case 'Q':
            b=excode.indexOf('(');
            arg=excode.substring(b+1,len-1);
            alen=arg.length;
            inpu=excode.substring(0,b);
            br=0;
            for(i=0;i<alen;i++){
                var c=arg.charAt(i);
                if(br==0 && c==',') break;
                if(c=='(') br++;
                else if(c==')') br--;
            }
            if(i==alen){console.log("Not found comma error in XtreeML2EXtree.java");return null; }
            arg1=arg.substring(0,i);
            arg2=arg.substring(i+1);
            excode=ex.substring(0,b+2);
            ko=OTB.getKeyAndOrder(excode);
            ans=new EXtree2( 2,Math.floor(ko/100),ko%100,this.parseEX(arg1),this.parseEX(arg2),inpu);
            break;
        case 'R':
        case 'T':
            b=excode.indexOf('(');
            arg=excode.substring(b+1,len-1);
            alen=arg.length;
            inpu=excode.substring(0,b);
            br=0;
            for(i=0;i<alen;i++){
                var c=arg.charAt(i);
                if(br==0 && c==',') break;
                if(c=='(') br++;
                else if(c==')') br--;
            }
            if(i==alen){console.log("Not found comma error in XtreeML2EXtree.java");return null; }
            arg1=arg.substring(0,i);
            arg=arg.substring(i+1);
            alen=arg.length;
            br=0;
            for(i=0;i<alen;i++){
                var c=arg.charAt(i);
                if(br==0 && c==',') break;
                if(c=='(') br++;
                else if(c==')') br--;
            }
            if(i==alen){console.log("Not found comma error in XtreeML2EXtree.java");return null; }
            arg2=arg.substring(0,i);
            arg3=arg.substring(i+1);
            excode=ex.substring(0,b+2);
            ko=OTB.getKeyAndOrder(excode);
            ans=new EXtree3( 2,Math.floor(ko/100),ko%100,this.parseEX(arg1),this.parseEX(arg2),this.parseEX(arg3),inpu);
            break;
        case 'M':
            b=excode.indexOf('(');
            arg=excode.substring(b+1,len-1);
            alen=arg.length;
            excode=excode.substring(0,b);
            var rownum=opec.charCodeAt(0)-'0'.charCodeAt(0);
            var colnum=0;
            for(var j=rownum+1;j<excode.length;j++){
                switch(excode.charAt(j)){
                    case 'c':
                    case 'l':
                    case 'r':colnum++;break;
                }
            }
            var elem=new Array();
            for(var j=0;j<rownum*colnum-1;j++){
                br=0;
                for(i=0;i<alen;i++){
                    var c=arg.charAt(i);
                    if(br==0 && c==',') break;
                    if(c=='(') br++;
                    else if(c==')') br--;
                }
                if(i==alen){console.log("Not found comma error in XtreeML2EXtree.java");return null; }
                arg1=arg.substring(0,i);
                if(arg1=="nul") elem[j]=null;
                else elem[j]=this.parseEX(arg1);
                arg=arg.substring(i+1);
                alen=arg.length;
            }
            if(arg=="nul") elem[rownum*colnum-1]=null;
            else elem[rownum*colnum-1]=this.parseEX(arg);
            ans=new EXtreeMat(2,rownum,excode,elem,"MAT");
            break;
        default:
            ans=null;
    }
    return ans;
};
