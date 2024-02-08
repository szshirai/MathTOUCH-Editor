var DIC= new MathTOUCH.dicTable();
var OTB= new MathTOUCH.opeTable();

function EXtree()
{
	this.parent=null;
	this.pnum=0;
	this.cnum=0;
	this.ch=null;
	this.state=0;
	this.key;
	this.order;
	this.val="";
	this.type=0;
	this.rownum=0;
	this.colnum=0;
	this.baseColor;
	this.opeColor=0;
	this.opeBackColor=0;
	this.opeFrameColor=0;
	this.backColor=0;
	this.frameColor=0;
	this.MatColum=-1;
	this.inputWord="";
        
    
    this.setBaseColor=function(bc){this.baseColor=bc;}
	this.setOpeColor=function(oc){this.opeColor=oc;}
	this.setOBcolor=function(oc,bc){this.opeColor=oc;this.baseColor=bc;}
	this.setMatColum=function(mcol){ this.transCol=mcol;}
	this.setBackColor=function(bk){this.backColor=bk;}
	this.setOpeBackColor=function(bk){this.opeBackColor=bk;}
	this.setFrameColor=function(fc){this.frameColor=fc;}
	this.setOpeFrameColor=function(fc){this.opeFrameColor=fc;}
    this.setOpeColorTopDown=function(oc){
        this.opeColor=oc;
        for(var i=0;i<this.cnum;i++) if(this.ch[i]!=null) this.ch[i].setOpeColorTopDown(oc);
    }
    this.setOpeColorRight=function(oc){
        if(this.state==0){
            this.opeColor=oc;
            if(this.cnum>0){
                switch(this.type){
                    case MathTOUCH.OP1P: this.ch[0].setOpeColorTopDown(oc);break;
                    case MathTOUCH.OP1A: this.ch[0].setOpeColorRight(oc);break;
                    case MathTOUCH.OP1B: this.ch[0].setOpeColorTopDown(oc);break;
                    case MathTOUCH.OP2C:
                        this.ch[0].setOpeColorRight(oc);
                        this.ch[1].setOpeColorTopDown(oc);
                        break;
                    case MathTOUCH.OP2P:
                        this.ch[0].setOpeColorTopDown(oc);
                        this.ch[1].setOpeColorTopDown(oc);
                        break;
                    case MathTOUCH.OP3P:
                        this.ch[0].setOpeColorTopDown(oc);
                        this.ch[1].setOpeColorTopDown(oc);
                        this.ch[2].setOpeColorTopDown(oc);
                        break;
                    case MathTOUCH.OP3T:
                        this.ch[0].setOpeColorTopDown(oc);
                        this.ch[1].setOpeColorRight(oc);
                        this.ch[2].setOpeColorTopDown(oc);
                        break;
                    case MathTOUCH.MAT:
                        for(var i=0;i<this.cnum;i++) if(this.ch[i]!=null) this.ch[i].setOpeColorTopDown(oc);
                        break;
                }
            }

        }
        else{
            this.opeColor=0;
            if(this.cnum>0){
                switch(this.type){
                    case MathTOUCH.OP1P: this.ch[0].setOpeColorRight(oc);break;
                    case MathTOUCH.OP1A: this.ch[0].setOpeColorRight(oc);break;
                    case MathTOUCH.OP1B: this.ch[0].setOpeColorRight(oc);break;
                    case MathTOUCH.OP2C:
                        this.ch[1].setOpeColorRight(oc);
                        break;
                    case MathTOUCH.OP2P:
                        this.ch[0].setOpeColorRight(oc);
                        this.ch[1].setOpeColorRight(oc);
                        break;
                    case MathTOUCH.OP3P:
                        this.ch[0].setOpeColorRight(oc);
                        this.ch[1].setOpeColorRight(oc);
                        this.ch[2].setOpeColorRight(oc);
                        break;
                    case MathTOUCH.OP3T:
                        this.ch[0].setOpeColorRight(oc);
                        this.ch[2].setOpeColorRight(oc);
                        break;
                    case MathTOUCH.MAT:
                        for(var i=0;i<this.cnum;i++) if(this.ch[i]!=null) this.ch[i].setOpeColorRight(oc);
                        break;
                }
            }
        }
    }
	
	this.clearBaseColor=function(){this.baseColor=0;}
	this.clearOpeColor=function(){this.opeColor=0;}
	this.clearOBcolor=function(){this.opeColor=0;this.baseColor=0;}
	this.clearMatColum=function(){ this.transCol=0;}
	this.clearBackColor=function(){this.backColor=0;}
	this.clearOpeBackColor=function(){this.opeBackColor=0;}
	this.clearFrameColor=function(){this.frameColor=0;}
	this.clearOpeFrameColor=function(){this.opeFrameColor=0;}
    this.clearOpeColorTopDown=function(){
        this.opeColor=0;
        for(var i=0;i<this.cnum;i++) if(this.ch[i]!=null) this.ch[i].clearOpeColorTopDown();
    }
        
    this.getBaseColor=function(){return ctbl[this.baseColor];}
	this.getOpeColor=function(){return ctbl[this.opeColor];}
	this.getMatColum=function(){return ctbl[this.transColor];}
	this.getBackColor=function(){return ctbl[this.backColor];}
	this.getOpeBackColor=function(){return ctbl[this.opeBackColor];}
	this.getFrameColor=function(){return ctbl[this.frameColor];}
	this.getOpeFrameColor=function(){return ctbl[this.opeFrameColor];}

	this.editbox=null;

	this.add=function(num,ext){
		if(num<this.cnum){
            this.ch[num]=ext;
            if(ext!=null){
                this.ch[num].parent=this;
                this.ch[num].pnum=num;
            }
        }
		else{alert("add error! in EXtree");}
	}
	
	this.addElem=function(row,col,ext){
		var num=this.colnum*row+col;
		if(this.type==MathTOUCH.MAT && num<this.cnum){
            this.ch[num]=ext;
            if(ext!=null){this.ch[num].parent=this;this.ch[num].pnum=num;}
        }
		else{alert("addElem error! in EXtree");}
	}
	
	this.countLeaf=function(){
		if(this.cnum==0){return 1;}
		else{
			var ans=0;
			for(var i=0;i<this.cnum;i++) ans+=this.ch[i].countLeaf();
			return ans;
		}
	}
	
	this.getPosition=function(){
		var pp=this.parent;
		var pn=this.pnum;
		var ans="";
		while(pp!=null){
            ans=String.fromCharCode('0'.charCodeAt(0)+pn)+ans;
			pn=pp.pnum;
			pp=pp.parent;
		}
		return ans;
	}
	
	this.getPositionFrom=function(f){
		var pp=this.parent;
		var pn=this.pnum;
		var ans="";
		while(pp!=null&&pp.ch[pn]!=f){
            ans=String.fromCharCode('0'.charCodeAt(0)+pn)+ans;
			pn=pp.pnum;
			pp=pp.parent;
		}
		return ans;
	}
	
	this.subTree=function(pt){
		var num=pt.length;
		var ans=this;
		for(var i=0;i<num;i++){ 
            ans=ans.ch[pt.charCodeAt(i)-'0'.charCodeAt(0)];
        }
		return ans;
	}
	
	this.equals=function(ex){
        if(this.type==MathTOUCH.EDIT){
            if(ex.type!=MathTOUCH.EDIT) return false;
            return(this.editbox.getText()==ex.editbox.getText());
        }
		if(this.cnum==0){return(this.cnum==ex.cnum&&this.type==ex.type&&this.val==ex.val&&this.inputWord==ex.inputWord);}
		else if(this.rownum*this.colnum>0){
			if(this.cnum!=ex.cnum) return false;
			for(var i=0;i<this.cnum;i++){
				if(this.ch[i]==null){ if(ex.ch[i]!=null) return false;}
                else if(ex.ch[i]==null) return false;
				else if(!this.ch[i].equals(ex.ch[i])) return false;
			}
			return(this.rownum==ex.rownum);
		}
		else if(this.cnum==1){
			if(ex.cnum!=1) return false;
			return(this.key==ex.key&&this.order==ex.order&&this.inputWord==ex.inputWord&&this.ch[0].equals(ex.ch[0]));
		}
		else if(this.cnum==2){
			if(ex.cnum!=2) return false;
			return(this.key==ex.key&&this.order==ex.order&&this.inputWord==ex.inputWord
				   &&this.ch[0].equals(ex.ch[0])&&this.ch[1].equals(ex.ch[1]));
		}
		else if(this.cnum==3){
			if(ex.cnum!=3) return false;
			return(this.key==ex.key&&this.order==ex.order&&this.inputWord==ex.inputWord
				   &&this.ch[0].equals(ex.ch[0])&&this.ch[1].equals(ex.ch[1])&&this.ch[2].equals(ex.ch[2]));
		}
		else{alert("equals error in EXtree");return false;}
		return false;
	}

    this.equalsMat=function(ex){
		if(this.type==MathTOUCH.EDIT){alert("Edit include error in equals/EXtree");return false;}
		if(this.cnum==0){return(this.cnum==ex.cnum&&this.type==ex.type&&this.val==ex.val&&this.inputWord==ex.inputWord);}
		else if(this.rownum*this.colnum>0){
			if(this.cnum!=ex.cnum) return false;
			for(var i=0;i<this.cnum;i++){
				if(this.ch[i]==null){ if(ex.ch[i]!=null) return false;}
                else if(ex.ch[i]==null) return false;
				else if(!this.ch[i].equals(ex.ch[i])) return false;
			}
			return(this.rownum==ex.rownum&&this.val==ex.val);
		}
		else if(this.cnum==1){
			if(ex.cnum!=1) return false;
			return(this.key==ex.key&&this.order==ex.order&&this.inputWord==ex.inputWord&&this.ch[0].equals(ex.ch[0]));
		}
		else if(this.cnum==2){
			if(ex.cnum!=2) return false;
			return(this.key==ex.key&&this.order==ex.order&&this.inputWord==ex.inputWord
				   &&this.ch[0].equals(ex.ch[0])&&this.ch[1].equals(ex.ch[1]));
		}
		else if(this.cnum==3){
			if(ex.cnum!=3) return false;
			return(this.key==ex.key&&this.order==ex.order&&this.inputWord==ex.inputWord
				   &&this.ch[0].equals(ex.ch[0])&&this.ch[1].equals(ex.ch[1])&&this.ch[2].equals(ex.ch[2]));
		}
		else{alert("equals error in EXtree");return false;}
		return false;
	}
	
	this.copy=function(){
		var ans;
		if(this.type==MathTOUCH.EDIT){
			if(this.editbox==null) {alert("editbox null error in EXtree.copy()");return null;}
			ans=new EditEXT(this.editbox);
			ans.state=this.state;
			ans.opeColor=this.opeColor;ans.baseColor=this.baseColor;
			ans.backColor=this.backColor;
			ans.frameColor=this.frameColor;
			return(ans);
		}
		else if(this.cnum==0){
			ans=new EXtree0(this.state,this.type,this.val,this.inputWord);
			ans.opeColor=this.opeColor;ans.baseColor=this.baseColor;
			ans.backColor=this.backColor;
			ans.frameColor=this.frameColor;
			return(ans);
		}
		else if(this.rownum*this.colnum>0){
			var elem=new Array();
			for(var i=0;i<this.cnum;i++){
                if(this.ch[i]==null) elem[i]=null;
                else elem[i]=this.ch[i].copy();
            }
			ans=new EXtreeMat(this.state,this.rownum,this.val,elem,"MAT");
			ans.baseColor=this.baseColor;
			ans.opeColor=this.opeColor;
			ans.opeBackColor=this.opeBackColor;
			ans.backColor=this.backColor;
			ans.frameColor=this.frameColor;
			ans.MatColum=this.MatColum;
			ans.inputWord=this.inputWord;
			return(ans);
		}
		else if(this.cnum==1){
			ans=new EXtree1(this.state,this.key,this.order,this.ch[0].copy(),this.inputWord);
			ans.baseColor=this.baseColor;
			ans.opeColor=this.opeColor;
			ans.opeBackColor=this.opeBackColor;
			ans.backColor=this.backColor;
			ans.frameColor=this.frameColor;
			return(ans);
		}
		else if(this.cnum==2){
			ans=new EXtree2(this.state,this.key,this.order,this.ch[0].copy(),this.ch[1].copy(),this.inputWord);
			ans.baseColor=this.baseColor;
			ans.opeColor=this.opeColor;
			ans.opeBackColor=this.opeBackColor;
			ans.backColor=this.backColor;
			ans.frameColor=this.frameColor;
			return(ans);
		}
		else if(this.cnum==3){
			ans=new EXtree3(this.state,this.key,this.order,this.ch[0].copy(),this.ch[1].copy(),this.ch[2].copy(),this.inputWord);
			ans.baseColor=this.baseColor;
			ans.opeColor=this.opeColor;
			ans.opeBackColor=this.opeBackColor;
			ans.backColor=this.backColor;
			ans.frameColor=this.frameColor;
			return(ans);
		}
		else{alert("copy error in EXtree");return null;}
		return null;
	}
	
	this.change=function(from){
		if(from.cnum==0){
            this.cnum=0;this.state=from.state;this.type=from.type;this.val=from.val;
            this.key=from.key;
            this.order=from.order;
            this.rownum=0;this.colnum=0;
            this.opeColor=from.opeColor;
            this.baseColor=from.baseColor;
            this.opeBackColor=from.opeBackColor;
            this.backColor=from.backColor;
            this.frameColor=from.frameColor;
            this.inputWord=from.inputWord;
            this.editbox=from.editbox;
        }
		else if(from.rownum*from.colnum>0){
			this.cnum=from.cnum;this.state=from.state;this.rownum=from.rownum;this.colnum=from.colnum;this.type=from.type;
			this.val=from.val;
			this.ch=new Array();
			for(var i=0;i<this.rownum;i++){
                for(var j=0;j<this.colnum;j++) this.addElem(i,j,from.ch[i*this.colnum+j]);
            }
			this.baseColor=from.baseColor;
			this.opeColor=from.opeColor;
			this.opeBackColor=from.opeBackColor;
			this.backColor=from.backColor;
			this.frameColor=from.frameColor;
			this.MatColum=from.MatColum;
			this.inputWord=from.inputWord;
			this.editbox=null;
		}
		else if(from.cnum==1){
            this.cnum=1;this.state=from.state;this.key=from.key;this.order=from.order;this.type=from.type;this.inputWord=from.inputWord;
			this.ch=new Array();
            this.add(0,from.ch[0]);
            this.rownum=0; this.colnum=0;
			this.baseColor=from.baseColor;
			this.opeColor=from.opeColor;
			this.opeBackColor=from.opeBackColor;
			this.backColor=from.backColor;
			this.frameColor=from.frameColor;
			this.editbox=null;
		}
		else if(from.cnum==2){
            this.cnum=2;this.state=from.state;this.key=from.key;this.order=from.order;this.type=from.type;this.inputWord=from.inputWord;
			this.ch=new Array();
            this.add(0,from.ch[0]);
            this.add(1,from.ch[1]);
            this.rownum=0;this.colnum=0;
			this.baseColor=from.baseColor;
			this.opeColor=from.opeColor;
			this.opeBackColor=from.opeBackColor;
			this.backColor=from.backColor;
			this.frameColor=from.frameColor;
			this.editbox=null;
		}
		else if(from.cnum==3){
            this.cnum=3;this.state=from.state;this.key=from.key;this.order=from.order;this.type=from.type;this.inputWord=from.inputWord;
			this.ch=new Array();
            this.add(0,from.ch[0]);
            this.add(1,from.ch[1]);
            this.add(2,from.ch[2]);
            this.rownum=0;this.colnum=0;
			this.baseColor=from.baseColor;
			this.opeColor=from.opeColor;
			this.opeBackColor=from.opeBackColor;
			this.backColor=from.backColor;
			this.frameColor=from.frameColor;
			this.editbox=null;
		}
		else{alert("change error in EXtree");System.exit(0);}
	}
    
    
    this.spacedOn=function(ex){
        var ans=new EXtree2(0,MathTOUCH.SP,0,this.copy(),ex," ");
        return ans;
    }
    
    this.addEditBox=function(eb){
        this.change(this.copy().spacedOn(new EditEXT(eb)));
        return this.ch[1];
    }
	

	this.isSpaced=function(){return(this.key==MathTOUCH.SP && this.order==0 && this.type==MathTOUCH.OP2C);}
    this.isEmpty=function(){return(this.type==MathTOUCH.EMP&&this.val.length==0);}
    
	this.isType=function(qtype){return(this.type==qtype);}
	this.isOP2C=function(){return(this.type==MathTOUCH.OP2C);}
	this.isOP2Cor1A=function(){return(this.type==MathTOUCH.OP2C || this.type==MathTOUCH.OP1A);}
	this.isLeftOfOP2Cor1A=function(){return(this.pnum==0 && (this.parent.type==MathTOUCH.OP2C) || this.parent.type==MathTOUCH.OP1A);}
	this.isMultipleVARorSYM=function(){
		return((this.type==MathTOUCH.VAR || this.type==MathTOUCH.SYM) && this.getInputWord().length>1);
	}
	this.isZERO=function(){return(this.type==MathTOUCH.NUM && this.val=="0");}
	this.isONE=function(){return(this.type==MathTOUCH.NUM && this.val=="1");}
    this.theOrderOfAnotherType=function(atype){
        if(this.type<MathTOUCH.OP1P) return -1;
        else{
            var omax=OTB.getOpeLength(this.key);
            for(var i=this.order;i<omax;i++) if(OTB.getOpeType(this.key,i)==atype) return i;
            for(var i=0;i<this.order;i++) if(OTB.getOpeType(this.key,i)==atype) return i;
            return -1;
        }
    }
    
	this.isLastOrder=function(){return(this.order==OTB.getOpeLength(this.key)-1);}
	
	this.isLeftOf2Cor1Aor3TorBR=function(){
		if(this.parent==null) return false;
		return(this.isLeftOfOP2Cor1A()||(this.pnum==1&&this.parent.type==MathTOUCH.OP3T)||this.parent.BraType()==2);
	}
	

	this.nextOperator=function(){
		if(this.type<=3 || this.type==MathTOUCH.MAT || this.type==MathTOUCH.TXT) return;
		this.order++;
		if(this.order>=OTB.getOpeLength(this.key)) this.order=0;
		if(this.key==MathTOUCH.SP && this.order==2){
			if(this.ch[0].key!=MathTOUCH.SP||this.ch[0].order!=3) this.order++;
		}
		this.val=OTB.theKeyWordAt(this.key);
	}
	
	
	this.setComplete=function(){
        this.state=this.state|2;
		this.opeColor=0;
		this.opeBackColor=0;
		this.MatColum=-1;
		this.baseColor=0;
		this.backColor=0;
		this.frameColor=0;
		for(var i=0;i<this.cnum;i++){ 
            if(this.ch[i]!=null){
                this.ch[i].clearBaseColor();
                this.ch[i].clearBackColor();
                this.ch[i].clearOpeColorTopDown();
                if((this.ch[i].state&2)==0) this.ch[i].state=this.ch[i].state&6;
                else this.ch[i].state=this.ch[i].state|2;
            }
		}
	}
	
	this.setAllLeafComplete=function(){
		if(this.cnum==0){this.setComplete();}
		else{for(var i=0;i<this.cnum;i++) if(this.ch[i]!=null){this.ch[i].setAllLeafComplete();}}
	}
	
	this.setAllComplete=function(){
		this.setComplete();
		if(this.cnum>0){for(var i=0;i<this.cnum;i++) if(this.ch[i]!=null){this.ch[i].setAllComplete();}}
	}
    
    this.isPartlyComplete=function(){
        if(this.state==2) return true;
        if(this.cnum==0) return false;
        else{
            for(var i=0;i<this.cnum;i++) if(this.ch[i]!=null&&this.ch[i].isPartlyComplete()) return true;
            return false;
        }
    }
	
	this.setChildBColor0=function(){
        if(this.type!=MathTOUCH.MAT) for(var i=0;i<this.cnum;i++) this.ch[i].baseColor=i+2;
    }
	
	this.setChildBColor=function(a){
        for(var i=0;i<this.cnum;i++) this.ch[i].baseColor=6;
		if(a<this.cnum) this.ch[a].baseColor=2;
        if(this.type==MathTOUCH.OP1A||this.type==MathTOUCH.OP2C||this.type==MathTOUCH.OP3T) this.ch[0].baseColor= -this.ch[0].baseColor;
	}
	
	this.setChildBackColor=function(a){
		for(var i=0;i<this.cnum;i++) this.ch[i].backColor=6;
		if(a<this.cnum) this.ch[a].backColor=8;
	}
	
	this.setMatColor=function(mcol,color){
		this.MatColum=mcol;
		this.opeColor=color;
	}
	
	this.nextMatColum=function(mcol){
		var c;
		var row=this.rownum;
		var rcstr=this.val;
		var rowline=new Array();
		for(var i=0;i<=row;i++){c=rcstr.charAt(i);rowline[i]=(c.charCodeAt(0)-'0'.charCodeAt(0));}
		var len=rcstr.length;
		var col=0;
		for(var i=row+1;i<len;i++){c=rcstr.charAt(i);if(c=='l'||c=='c'||c=='r') col++;}
		var colline=new Array();
		var colmode=new Array();
		var cl=0;
        var cm=0;
        for(var i=0;i<col;i++){colline[i]=0;colmode[i]=0;}
        colline[col]=0;
		for(var i=row+1;i<len;i++){
			switch(rcstr.charAt(i)){
			  case 'c':if(cm==cl) colline[cl++]=0;colmode[cm++]=0;break;
			  case 'l':if(cm==cl) colline[cl++]=0;colmode[cm++]=1;break;
			  case 'r':if(cm==cl) colline[cl++]=0;colmode[cm++]=2;break;
			  case '|':
				if(i+1<len && rcstr.charAt(i+1)=='|'){colline[cl++]=2;i++;}
				else{colline[cl++]=1;}
				break;
			}
		}
        if(mcol==0){
            var frame;
            if(colline[0]==0 && colline[col]==0){
                if(rowline[0]==0){ frame=0;rowline[0]=1;}
                else{
                    if(rowline[1]==0){
                        if(rowline[row]==0){ frame=1;rowline[1]=1;}
                        else{ frame=4;rowline[1]=1;}
                    }
                    else if(rowline[1]==1){
                        if(rowline[row]==0){ frame=2;rowline[1]=2;}
                        else{
                            if(row<=2){ frame=7;rowline[1]=2;}
                            else if(rowline[2]==0){ frame=5;rowline[1]=2;}
                            else{ frame=7;rowline[1]=2;}
                        }
                    }
                    else{
                        if(rowline[row]==0){ frame=3;rowline[1]=0;rowline[row]=1;}
                        else{
                            if(row<=2){ frame=8;for(var j=0;j<=row;j++) rowline[j]=0;colline[0]=1;colline[col]=1;}
                            else if(rowline[2]==0){ frame=6;for(var j=0;j<=row;j++) rowline[j]=1;}
                            else{ frame=8;for(var j=0;j<=row;j++) rowline[j]=0;colline[0]=1;colline[col]=1;}
                        }
                    }
                }
            }
            else if(colline[0]==1 && colline[col]==1){
                if(rowline[0]==0){ frame=9;rowline[0]=1;rowline[row]=1;}
                else{
                    if(rowline[1]==0){ frame=10;rowline[1]=1;}
                    else if(rowline[1]==1){
                        if(row<=2){ frame=13;rowline[1]=2;}
                        else if(rowline[2]==0){ frame=11;rowline[1]=2;}
                        else{ frame=13;rowline[1]=2;}
                    }
                    else{
                        if(row<=2){ frame=14;for(var j=0;j<=row;j++) rowline[j]=0;colline[0]=0;colline[col]=0;}
                        else if(rowline[2]==0){ frame=12;for(var j=0;j<=row;j++) rowline[j]=1;}
                        else{ frame=14;for(var j=0;j<=row;j++) rowline[j]=0;colline[0]=0;colline[col]=0;}
                    }
                }
            }
            else{
                if(rowline[0]==0){ frame=9;rowline[0]=1;rowline[row]=1;}
                else{
                    if(rowline[1]==0){ frame=10;rowline[1]=1;}
                    else if(rowline[1]==1){
                        if(row<=2){ frame=13;rowline[1]=2;}
                        else if(rowline[2]==0){ frame=11;rowline[1]=2;}
                        else{ frame=13;rowline[1]=2;}
                    }
                    else{
                        if(row<=2){ frame=14;for(var j=0;j<=row;j++) rowline[j]=0;colline[0]=0;colline[col]=0;}
                        else if(rowline[2]==0){ frame=12;for(var j=0;j<=row;j++) rowline[j]=1;}
                        else{ frame=14;for(var j=0;j<=row;j++) rowline[j]=0;colline[0]=0;colline[col]=0;}
                    }
                }
            }
        }
        else{
            var i=Math.floor(mcol/2);
            if(mcol%2==0){colline[i]++;if(colline[i]>2) colline[i]=0;}
            else{colmode[i]++;if(colmode[i]>2) colmode[i]=0;}
        }
		var ans="";
		for(var i=0;i<=row;i++) ans=ans+rowline[i];
		for(var i=0;i<col;i++){
			if(colline[i]==1) ans=ans+"|";
			else if(colline[i]==2) ans=ans+"||";
			if(colmode[i]==0) ans=ans+"c";
			else if(colmode[i]==1) ans=ans+"l";
			else ans=ans+"r";
		}
		if(colline[col]==1) ans=ans+"|";
		else if(colline[col]==2) ans=ans+"||";
		this.val=ans;
	}
    
	this.searchProcessNode=function(){
		var ans=null;
        var tmpE=this.EDITpoint();
        if(tmpE!=null) return tmpE;
        if(this.parent!=null&&this.parent.isSpaced()&&this.pnum==1&&(this.parent.state&2)==0){
			return this.parent.searchProcessNode();
		}
		if((this.type==MathTOUCH.OP1A||this.type==MathTOUCH.OP2C||this.BraType()==2)&&this.ch[0]!=null){
            var tmp=this.ch[0].searchProcessNode();
			if(tmp!=null) return tmp;
		}
		if(this.type==MathTOUCH.OP3T&&this.ch[1]!=null){
			var tmp=this.ch[1].searchProcessNode();
			if(tmp!=null) return tmp;
		}
		if(this.type==MathTOUCH.NUM){
			if(this.val.length==1) this.state=this.state|2;
		}
		else if(this.type==MathTOUCH.OP1P&&this.theLeftMostTop().parent!=null&&this.theLeftMostTop().parent.isSpaced()&&(this.theLeftMostTop().parent.state&2)==0){
			return this.parent.searchProcessNode();
		}
		if((this.state&2)==0){
			if(this.isSpaced()&&this.ch[1]!=null&&this.ch[1].type==MathTOUCH.EDIT) return this.ch[1];
            else if(this.type==MathTOUCH.MAT){
                for(var num=0;num<this.cnum;num++){
                    if(this.ch[num]!=null&&this.ch[num].state==0) return this.ch[num].nextProcessNode();
                }
                return this;
            }
			else return this;
		}
		if(this.cnum==0){return null;}
		else if(this.ch[0]!=null&&(ans=this.ch[0].searchProcessNode())!=null) return ans;
		else if(this.cnum==1){return null;}
		else if(this.ch[1]!=null&&(ans=this.ch[1].searchProcessNode())!=null) return ans;
		else if(this.ch[1]!=null&&this.ch[1].type==MathTOUCH.OP1P&&(this.ch[1].ch[0].state&2)==0) return this.ch[1].ch[0].searchProcessNode();
		else if(this.cnum==2){return null;}
		else if(this.ch[2]!=null&&(ans=this.ch[2].searchProcessNode())!=null) return ans;
		else if(this.cnum==3){return null;}
		else{
			var num=3;
			while(num<this.cnum){
                if(this.ch[num]!=null&&(ans=this.ch[num].searchProcessNode())!=null) return ans;
                num++;
            }
			return null;
		}
	}

	this.nextProcessNode=function(){
		if(this.parent!=null&&this.parent.isSpaced()&&this.pnum==1&&(this.parent.state&2)==0){
			return this.parent.nextProcessNode();
		}
		else if((this.type==MathTOUCH.OP1A||this.type==MathTOUCH.OP2C||this.BraType()==2)&&this.ch[0]!=null && (this.ch[0].state&2)==0){
			return this.ch[0].nextProcessNode();
		}
		else if(this.type==MathTOUCH.OP3T&&this.ch[1]!=null && (this.ch[1].state&2)==0){
			return this.ch[1].nextProcessNode();
		}
		else if(this.type==MathTOUCH.NUM){
			if(this.val.length==1) this.state=this.state|2;
		}
		else if(this.type==MathTOUCH.OP1P&&this.theLeftMostTop().parent!=null&&this.theLeftMostTop().parent.isSpaced()&&(this.theLeftMostTop().parent.state&2)==0){
			return this.parent.nextProcessNode();
		}
		if((this.state&2)==0){
			if(this.isSpaced()&&this.ch[1]!=null&&this.ch[1].type==MathTOUCH.EDIT) return this.ch[1];
            else if(this.type==MathTOUCH.MAT){
                for(var num=0;num<this.cnum;num++){
                    if(this.ch[num]!=null&&this.ch[num].state==0) return this.ch[num].nextProcessNode();
                }
                return this;
            }
			else return this;
		}
		if(this.cnum==0){
			if(this.parent==null) return null;
			else return this.parent.nextProcessNode();
		}
		else if(this.ch[0]!=null&&(this.ch[0].state&2)==0) return this.ch[0].nextProcessNode();
		else if(this.cnum==1){
			if(this.parent==null) return null;
			else return this.parent.nextProcessNode();
		}
		else if(this.ch[1]!=null&&(this.ch[1].state&2)==0) return this.ch[1].nextProcessNode();
		else if(this.ch[1]!=null&&this.ch[1].type==MathTOUCH.OP1P&&(this.ch[1].ch[0].state&2)==0) return this.ch[1].ch[0].nextProcessNode();
		else if(this.cnum==2){
			if(this.parent==null) return null;
			else return this.parent.nextProcessNode();
		}
		else if(this.ch[2]!=null&&(this.ch[2].state&2)==0) return this.ch[2].nextProcessNode();
		else if(this.cnum==3){
			if(this.parent==null) return null;
			else return this.parent.nextProcessNode();
		}
        else{
			var num=3;
			while(num<this.cnum){
                if(this.ch[num]!=null&&(this.ch[num].state&2)==0) return this.ch[num].nextProcessNode();
                num++;
            }
			if(this.parent==null) return null;
			else return this.parent.nextProcessNode();
		}
	}
    
    this.nextUnfixNode=function(){
        var ans=null;
        if(this.parent!=null&&this.parent.isSpaced()&&this.pnum==1&&(this.parent.state&2)==0){
            return this.parent.searchProcessNode();
        }
        if((this.type==MathTOUCH.OP1A||this.type==MathTOUCH.OP2C||this.BraType()==2)&&this.ch[0]!=null){
            var tmp=this.ch[0].searchProcessNode();
            if(tmp!=null) return tmp;
        }
        if(this.type==MathTOUCH.OP3T&&this.ch[1]!=null){
            var tmp=this.ch[1].searchProcessNode();
            if(tmp!=null) return tmp;
        }
        if(this.type==MathTOUCH.NUM){
            if(this.val.length==1) this.state=this.state|2;
        }
        else if(this.type==MathTOUCH.OP1P&&this.theLeftMostTop().parent!=null&&this.theLeftMostTop().parent.isSpaced()&&(this.theLeftMostTop().parent.state&2)==0){
            return this.parent.searchProcessNode();
        }
        if((this.state&2)==0){
            if(this.isSpaced()&&this.ch[1]!=null&&this.ch[1].type==MathTOUCH.EDIT) return this.ch[1];
            else if(this.type==MathTOUCH.MAT){
                for(var num=0;num<this.cnum;num++){
                    if(this.ch[num]!=null&&this.ch[num].state==0) return this.ch[num].nextProcessNode();
                }
                return this;
            }
            else return this;
        }
        if(this.cnum==0){return null;}
        else if(this.ch[0]!=null&&(ans=this.ch[0].searchProcessNode())!=null) return ans;
        else if(this.cnum==1){return null;}
        else if(this.ch[1]!=null&&(ans=this.ch[1].searchProcessNode())!=null) return ans;
        else if(this.ch[1]!=null&&this.ch[1].type==MathTOUCH.OP1P&&(this.ch[1].ch[0].state&2)==0) return this.ch[1].ch[0].searchProcessNode();
        else if(this.cnum==2){return null;}
        else if(this.ch[2]!=null&&(ans=this.ch[2].searchProcessNode())!=null) return ans;
        else if(this.cnum==3){return null;}
        else{
            var num=3;
            while(num<this.cnum){
                if(this.ch[num]!=null&&(ans=this.ch[num].searchProcessNode())!=null) return ans;
                num++;
            }
            return null;
        }
    }
 
	this.getFirst=function(){
		if(this.cnum==0) return null;
		else return this.ch[0];
	}
	
	this.getSecond=function(){
		if(this.cnum<2) return null;
		else return this.ch[1];
	}
	
	this.getLast=function(){
		if(this.cnum==0) return this;
		else return this.ch[this.cnum-1].getLast();
	}
	
	this.getLinearLastB=function(){
		if(this.cnum==0) return this;
		else if(this.type==MathTOUCH.OP1B) return this;
		else if(this.type==MathTOUCH.OP1A) return this;
        else if(this.type==MathTOUCH.MAT) return this;
        else if(this.type==MathTOUCH.OP3T) return this.ch[this.cnum-1].getLinearLastB();
        else if(this.isLinear()) return this.ch[this.cnum-1].getLastB();
        else return this;
	}
	
	this.addLast=function(ext){
		var last=this.getLast();
		if(last.parent==null || last==this){
			var base=this.baseColor;
			var opec=this.opeColor;
			var back=this.backColor;
			this.clearBaseColor();
			this.clearOpeColor();
			this.clearBackColor();
			var ans=this.copy();
			this.change(new EXtree2(0,MathTOUCH.SP,0,ans,ext," "));
			this.setBaseColor(base);
			this.setOpeColor(opec);
			this.setBackColor(back);
		}
		else{
			last.parent.add(last.pnum,new EXtree2(0,MathTOUCH.SP,0,last.copy(),ext," "));
		}
	}
	
	this.addLastB=function(ext){
		var last=this.getLastB();
		if(last.parent==null || last==this){
			var ans=this.copy();
			this.change(new EXtree2(0,MathTOUCH.SP,0,ans,ext," "));
		}
		else{
			last.parent.add(last.pnum,new EXtree2(0,MathTOUCH.SP,0,last.copy(),ext," "));
		}
	}
	
	this.addFirst=function(ext){
		var base=this.baseColor;
		var opec=this.opeColor;
		var back=this.backColor;
		this.clearBaseColor();
		this.clearOpeColor();
		this.clearBackColor();
		var restTerm=this.copy();
		this.change(new EXtree2(0,MathTOUCH.SP,0,ext,restTerm," "));
		this.setBaseColor(base);
		this.setOpeColor(opec);
		this.setBackColor(back);
	}
	
	this.getLastSpacedTerm=function(){
		if(this.cnum==0 || this.type==MathTOUCH.MAT) return null;
		else{
			var last=this.getLastB();
			var pl=last.parent;
			while(pl!=null && pl!=this && !pl.isSpaced()){last=pl;pl=last.parent;}
			if(pl==null) return null;
			else if(pl.isSpaced()) return last;
			else return null;
		}
	}
	
	this.getLastSpacedOrAPoint=function(){
		if(this.cnum==0 || this.type==MathTOUCH.MAT) return null;
		else{
			var pl=this.getLastB();
            var od;
			while(pl!=null && !pl.isSpaced()){
                if(pl.isOP2C()){
                    if((od=pl.theOrderOfAnotherType(MathTOUCH.OP1A))>=0){
                        pl.change(new EXtree2(0,MathTOUCH.SP,0,new EXtree1(0,pl.key,od,pl.ch[0].copy(),pl.inputWord),pl.ch[1].copy()," "));
                        return pl;
                    }
                    else if((od=pl.theOrderOfAnotherType(MathTOUCH.OP1P))>=0){
                        pl.change(new EXtree2(0,MathTOUCH.SP,0,pl.ch[0].copy(),new EXtree1(0,pl.key,od,pl.ch[1].copy(),pl.inputWord)," "));
                        return pl;
                    }
                }
                else if(pl.type==MathTOUCH.OP1A && pl.theOrderOfAnotherType(MathTOUCH.OP1P)>=0){
                        return pl;
                }
                else if(pl.type==MathTOUCH.OP1P && (od=pl.theOrderOfAnotherType(MathTOUCH.OP1A))>=0){
                    if(pl==this||pl.parent==null) break;
                    if(pl.parent.isSpaced()){
                        pl.parent.add(0,new EXtree1(0,pl.key,od,pl.parent.ch[0].copy(),pl.inputWord));
                        pl.parent.add(1,pl.ch[0].copy());
                        return pl.parent;
                    }
                }
                if(pl==this) break;
                pl=pl.parent;
            }
			if(pl==null) return null;
			else if(pl.isSpaced()) return pl;
			else return null;
		}
	}
	
	this.getFirst1Pto1APoint=function(){
		var od;
        var ans=null;
		if(this.cnum==0) return null;
		if(this.type==MathTOUCH.OP1A || (this.BraType()==2)){
			return this.ch[0].getFirst1Pto1APoint();
		}
		else if(this.type==MathTOUCH.OP1P && (od=this.theOrderOfAnotherType(MathTOUCH.OP1A))>=0) return this;
		else if(this.type==MathTOUCH.OP2C) return this.ch[0].getFirst1Pto1APoint();
		else if(this.type==MathTOUCH.OP3T){
			return this.ch[1].getFirst1Pto1APoint();
		}
		else return null;
	}
	
	this.getFirstSpacedPoint=function(){
		var od;
        var ans=null;
		if(this.cnum==0) return null;
		if(this.type==MathTOUCH.OP1A || (this.BraType()==2)){
			return null;
		}
		else if(this.type==MathTOUCH.OP1P||this.type==MathTOUCH.OP2P||this.type==MathTOUCH.OP3P||this.BraType()==1){
			return this.ch[this.cnum-1].getFirstSpacedPoint();
		}
		else if(this.type==MathTOUCH.OP2C){
			if(this.isSpaced()) return this;
            else if((od=this.theOrderOfAnotherType(MathTOUCH.OP1A))>=0){
                this.change(new EXtree2(0,MathTOUCH.SP,0,new EXtree1(0,this.key,od,this.ch[0].copy(),this.inputWord),this.ch[1].copy()," "));
                return this;
            }
            else if((od=this.theOrderOfAnotherType(MathTOUCH.OP1P))>=0){
                this.change(new EXtree2(0,MathTOUCH.SP,0,this.ch[0].copy(),new EXtree1(0,this.key,od,this.ch[1].copy(),this.inputWord)," "));
                return this;
            }
            else{
                return this.ch[1].getFirstSpacedPoint();
            }
		}
		else if(this.type==MathTOUCH.OP3T){
            return this.ch[2].getFirstSpacedPoint();
		}
		else return null;
	}
	
	this.getRightParent=function(){
        if(this.parent==null) return null;
		else if(this.isLeftOf2Cor1Aor3TorBR()) return this.parent;
		else return this.parent.getRightParent();
	}
	
	this.getLeftParent=function(){
		if(this.cnum==0) return null;
		else if(this.isLeftOfOP2Cor1A()) return this.parent.getLeftParent();
		else return this.parent;
	}
	
	this.theLeftMostTop=function(){
		if(this.parent==null) return this;
		else if(this.isLeftOf2Cor1Aor3TorBR()) return this.parent.theLeftMostTop();
		else return this;
	}

	this.theLeftMostLeaf=function(){
		if(this.cnum==0) return this;
		else if(this.isOP2Cor1A()) return this.ch[0].theLeftMostLeaf();
		else return null;
	}
	
	this.isOP2Cor1Aor3TorBR=function(){
        return(this.type==MathTOUCH.OP2C||this.type==MathTOUCH.OP1A||this.type==MathTOUCH.OP3T||this.BraType()==2);
    }
    
	this.theMostLeftNode=function(){
		if(this.isOP2Cor1Aor3TorBR()){
			if(this.type==MathTOUCH.OP3T) return this.ch[1].theMostLeftNode();
			else return this.ch[0].theMostLeftNode();
		}
		else return this;
	}
	this.theLeftParent=function(){
		if(this.parent==null) return null;
		else if(this.isLeftOf2Cor1Aor3TorBR()) return this.parent.theLeftParent();
		else return this.parent;
	}
	

	this.cutLastSpacedTerm=function(){
		var last=this.getLastSpacedTerm();
		if(last==null) return null;
		var pl=last.parent;
		if(pl.parent==null||pl==this){
			this.change(this.ch[0]);
			last.parent=null;
			return last;
		}
		else{
			pl.parent.ch[pl.pnum]=pl.ch[0];
			pl.ch[0].parent=pl.parent;
			pl.ch[0].pnum=pl.pnum;
			last.parent=null;
			return last;
		}
	}
	
	
	this.cutFirstSpacedTerm=function(){
		var ans=null;
		var firstTerm=null;
		var restTerm=null;
		if(this.cnum==0) return null;
		if(this.type==MathTOUCH.OP1A || (this.BraType()==2)){
			restTerm=this.ch[0].copy();
			firstTerm=restTerm.cutFirstSpacedTerm();
			if(firstTerm==null) return null;
			else {
				this.add(0,restTerm);
				firstTerm.parent=null;
				return firstTerm;
			}
		}
		else if(this.type==MathTOUCH.OP1P||this.type==MathTOUCH.OP2P||this.type==MathTOUCH.OP3P||this.BraType()==1){
			ans=this.copy();
			restTerm=this.ch[this.cnum-1].copy();
			firstTerm=restTerm.cutFirstSpacedTerm();
			if(firstTerm==null) return null;
			else {
				this.add(this.cnum-1,firstTerm);
				ans=this.copy();
				ans.parent=null;
				this.change(restTerm);
				return ans;
			}
		}
		else if(this.type==MathTOUCH.OP2C){
			restTerm=this.ch[0].copy();
			firstTerm=restTerm.cutFirstSpacedTerm();
			if(firstTerm!=null){
				this.add(0,restTerm);
				firstTerm.parent=null;
				return firstTerm;
			}
			else if(this.isSpaced()){
				ans=this.ch[0].copy();
				ans.parent=null;
				this.change(this.ch[1]);
				return ans;
			}
			restTerm=this.ch[1].copy();
			firstTerm=restTerm.cutFirstSpacedTerm();
			if(firstTerm!=null){
				this.add(1,firstTerm);
				ans=this.copy();
				ans.parent=null;
				this.change(restTerm);
				return ans;
			}
			else return null;
		}
		else if(this.type==MathTOUCH.OP3T){
			restTerm=this.ch[1].copy();
			firstTerm=restTerm.cutFirstSpacedTerm();
			if(firstTerm!=null){
				this.add(1,restTerm);
				firstTerm.parent=null;
				return firstTerm;
			}
			restTerm=this.ch[2].copy();
			firstTerm=restTerm.cutFirstSpacedTerm();
			if(firstTerm!=null){
				this.add(2,firstTerm);
				ans=this.copy();
				ans.parent=null;
				this.change(restTerm);
				return ans;
			}
			else return null;
		}
		else return null;
	}
	
	this.cutFirstSpacedTerm2=function(){
		var ans=null;
        var od;
		var firstTerm=null;
		var restTerm=null;
		if(this.cnum==0) return null;
		if(this.type==MathTOUCH.OP1A || (this.BraType()==2)){
			restTerm=this.ch[0].copy();
			firstTerm=restTerm.cutFirstSpacedTerm2();
			if(firstTerm==null) return null;
			else {
				this.add(0,restTerm);
				firstTerm.parent=null;
				return firstTerm.copy();
			}
		}
		else if(this.type==MathTOUCH.OP1P||this.type==MathTOUCH.OP2P||this.type==MathTOUCH.OP3P||this.BraType()==1){
			restTerm=this.ch[this.cnum-1].copy();
			firstTerm=restTerm.cutFirstSpacedTerm2();
			if(firstTerm==null) return null;
			else {
				this.add(this.cnum-1,firstTerm);
				ans=this.copy();
				ans.parent=null;
				this.change(restTerm);
				return ans;
			}
		}
		else if(this.type==MathTOUCH.OP2C){
			restTerm=this.ch[0].copy();
			firstTerm=restTerm.cutFirstSpacedTerm2();
			if(firstTerm!=null){
				this.add(0,restTerm);
				firstTerm.parent=null;
				return firstTerm.copy();
			}
			else if(this.isSpaced()){
				ans=this.ch[0].copy();
				ans.parent=null;
				this.change(this.ch[1]);
				return ans;
			}
            else if((od=this.theOrderOfAnotherType(MathTOUCH.OP1A))>=0){
                ans=new EXtree1(this.state,this.key,od,this.ch[0].copy(),this.inputWord);
                this.change(this.ch[1]);
				return ans;
            }
            else if((od=this.theOrderOfAnotherType(MathTOUCH.OP1P))>=0){
                ans=this.ch[0].copy();
                this.change(new EXtree1(this.state,this.key,od,this.ch[1].copy(),this.inputWord));
                return ans;
            }
			restTerm=this.ch[1].copy();
			firstTerm=restTerm.cutFirstSpacedTerm2();
			if(firstTerm!=null){
				this.add(1,firstTerm);
				ans=this.copy();
				ans.parent=null;
				this.change(restTerm);
				return ans;
			}
			else return null;
		}
		else if(this.type==MathTOUCH.OP3T){
			restTerm=this.ch[1].copy();
			firstTerm=restTerm.cutFirstSpacedTerm2();
			if(firstTerm!=null){
				this.add(1,restTerm);
				firstTerm.parent=null;
				return firstTerm;
			}
			restTerm=this.ch[2].copy();
			firstTerm=restTerm.cutFirstSpacedTerm2();
			if(firstTerm!=null){
				this.add(2,firstTerm);
				ans=this.copy();
				ans.parent=null;
				this.change(restTerm);
				return ans;
			}
			else return null;
		}
		else return null;
	}
	
	this.removeLastSpacedTerm=function(){
		var last=this.getLastSpacedTerm();
		if(last==null) return this;
		var pl=last.parent;
		if(pl.parent==null){pl.ch[0].parent=null;return pl.ch[0];}
		else{
			pl.parent.ch[pl.pnum]=pl.ch[0];
			pl.ch[0].parent=pl.parent;
			pl.ch[0].pnum=pl.pnum;
			return this;
		}
	}
	
	this.removeLastTerm=function(){
		var point=this.cutPoint();
		if(point==null) return null;
		var ans=null;
		if(point.type==MathTOUCH.OP1B){
			var btype=point.BraType();
			if(btype==0){
				var okey=point.KeyOrderOfBraType(1);
				var inwd=point.inputWord;
				if(okey<0){alert("divideOnLeft error in EXtree"); return null;}
				ans=new EXtree1(0,Math.floor(okey/100),okey%100,point.ch[0].copy(),inwd.substring(0,1));
			}
			else{
				ans=point.ch[0].copy();
			}
		}
		else if(point.type==MathTOUCH.OP3T) ans=point.ch[1].copy();
		else ans=point.ch[0].copy();
		if(point.parent==null){
			this.change(ans);
		}
		else{
			point.parent.add(point.pnum,ans);
		}
		return this;
	}
	
	this.cutPoint=function(){
		var point=this.getLastB();
		var btype=point.BraType();
		if(point.parent==null || point==this){
			if(point.type==MathTOUCH.OP1A||point.type==MathTOUCH.OP2C||point.type==MathTOUCH.OP3T) return this;
			else if(point.type==MathTOUCH.OP1B){
				if(point.ch[0].type==MathTOUCH.EMP) return null;
				else if(btype==1) return point.ch[0].cutPoint();
				else return this;
			}
			else return null;
		}
		if(point.type==MathTOUCH.OP1B){
			if(point.ch[0].type!=MathTOUCH.EMP){
				if(btype==0||btype==2) return point;
				var point2=point.ch[0].cutPoint();
				if(point2!=null) return point2;
			}
		}
		point=point.parent;
		while(point!=this && point.type!=MathTOUCH.OP2C && point.type!=MathTOUCH.OP3T){
			point=point.parent;
			if(point==null) return null;
		}
		if(point.type==MathTOUCH.OP2C || point.type==MathTOUCH.OP3T) return point;
		else return null;
	}
	
	this.BraType=function(){
		if(this.type==MathTOUCH.OP1B){
			var excode=OTB.theEXcode(this.key,this.order);
			var op=(excode.charCodeAt(1)-'0'.charCodeAt(0));
			if(op==0||op==1){
				return 0;
			}
			else if(op==2||op==3){
				return 1;
			}
			else if(op==4||op==5){
				return 2;
			}
			else{return -1;}
		}
		else return -1;
	}

	this.KeyOrderOfBraType=function(t){
		var excode=OTB.theEXcode(this.key,this.order);
		var op=excode.charCodeAt(1)-'0'.charCodeAt(0);
        if(op>=4) op=op-4;
        else if(op>=2) op=op-2;
		excode=excode.substring(2);
		var dt=t*2;
		var okey=OTB.getKeyAndOrder("B"+(op+dt)+excode);
		if(okey<0){alert("dKeyOrderOfBraType error in EXtree"); return -1;}
		return okey;
	}

	this.left2CPoint=function(){
		var point=this.getLastB();
		if(point.type==MathTOUCH.OP1B){
			var point2=point.ch[0].left2CPoint();
			if(point2!=null) return point;
		}
		if(point.parent==null || point==this) return null;
		point=point.parent;
		while(point!=this && (point.type!=MathTOUCH.OP2C&&point.type!=MathTOUCH.OP3T)){
			point=point.parent;
			if(point==null) return null;
		}
		if(point.type==MathTOUCH.OP2C||point.type==MathTOUCH.OP3T) return point;
		else return null;
	}
    
    this.preCPtoA=function(){
        var ans=null;
        var tmp=null;
        if(this.type!=MathTOUCH.OP2C&&this.type!=MathTOUCH.OP1P&&this.type!=MathTOUCH.OP2P&&this.type!=MathTOUCH.OP3P) return ans;
        var ord;
        var notfound=true;
        for(ord=0;ord<OTB.getOpeLength(this.key);ord++){
            if(OTB.getOpeType(this.key,ord)==MathTOUCH.OP1A){notfound=false;break;}
        }
        if(notfound) return ans;
        if(this.type==MathTOUCH.OP2C){
            this.ch[1].clearBaseColor();
            this.ch[1].clearBackColor();
            tmp=new EXtree1(0,this.key,ord,this.ch[0].copy(),this.inputWord);
            this.change(new EXtree2(0,MathTOUCH.SP,0,tmp,this.ch[1].copy()," "));
            ans=this;
        }
        else if(this.type==MathTOUCH.OP1P){
            this.ch[0].clearBaseColor();
            this.ch[0].clearBackColor();
            if(this.parent==null) return ans;
            if(this.parent.isSpaced() && this.pnum==1){
                this.parent.add(1,this.ch[0].copy());
                tmp=new EXtree1(0,this.key,ord,this.parent.ch[0].copy(),this.inputWord);
                this.parent.add(0,tmp);
                ans=this.parent;
            }
        }
        else if(this.type==MathTOUCH.OP2P){
            this.ch[0].clearBaseColor();this.ch[1].clearBaseColor();
            this.ch[0].clearBackColor();this.ch[1].clearBackColor();
            if(this.parent==null) return ans;
            if(this.parent.isSpaced() && this.pnum==1){
                var arg1=this.ch[0].copy();
                var arg2=this.ch[1];
                arg1.addLastB(arg2);
                this.parent.add(1,arg1);
                tmp=new EXtree1(0,this.key,ord,this.parent.ch[0].copy(),this.inputWord);
                this.parent.add(0,tmp);
                ans=this.parent;
            }
        }
        else if(this.type==MathTOUCH.OP3P){
            this.ch[0].clearBaseColor();this.ch[1].clearBaseColor();this.ch[2].clearBaseColor();
            this.ch[0].clearBackColor();this.ch[1].clearBackColor();this.ch[2].clearBackColor();
            if(this.parent==null) return ans;
            if(this.parent.isSpaced() && this.pnum==1){
                var arg1=this.ch[0].copy();
                var arg2=this.ch[1];
                var arg3=this.ch[2];
                arg1.addLastB(arg2);
                arg1.addLastB(arg3);
                this.parent.add(1,arg1);
                tmp=new EXtree1(0,this.key,ord,this.parent.ch[0].copy(),this.inputWord);
                this.parent.add(0,tmp);
                ans=this.parent;
            }
        }
        return ans;
    }
		
	this.leftPoint=function(){
		var point=this.getLastB();
		var btype=point.BraType();
		if(point==this){
			if(btype==2) return point;
			else if(btype==0||btype==1){
				if(point.ch[0].type==MathTOUCH.EMP) return null;
				else{
					if(point.ch[0].left2CPoint()==null) return null;
					else return point;
				}
			}
			else return null;
		}
		if(point.parent==null) return null;
		if(point.type==MathTOUCH.OP1A) return point;
		if(btype==2) return point;
		else if(btype==0 && point.ch[0].type!=MathTOUCH.EMP){
			var chleft=point.ch[0].left2CPoint();
			if(chleft!=null) return point;
		}
		else if(btype==1 && point.ch[0].type!=MathTOUCH.EMP){
			var chleft=point.ch[0].getLastB();
			if(chleft.type==MathTOUCH.OP1A) return chleft;
			chleft=point.ch[0].left2CPoint();
			if(chleft!=null){
                return point;}
		}
		point=point.parent;
        if(point==null) return null;
        var tmp=null;
        if(point!=this) tmp=point.preCPtoA();
        if(tmp!=null) point=tmp;
		while(point!=this && (point.type!=MathTOUCH.OP2C&&point.type!=MathTOUCH.OP3T)){
			point=point.parent;
			if(point==null) return null;
            if(point!=this) tmp=point.preCPtoA();
            if(tmp!=null) point=tmp;
		}
		if(point.parent==null || point==this) return null;
		else{return point;}
	}
	
	this.addLeftBra=function(okey,inwd,ex){
		if(this.BraType()!=2) return;
		var R=ex;
		while(R.type==MathTOUCH.OP1A) R=R.ch[0];
		if(okey==MathTOUCH.SP*100 && this.ch[0].type==MathTOUCH.EMP){
			if(R.BraType()==1){
				var okey2=this.KeyOrderOfBraType(0);
				var wd;
				if(this.inputWord==")") wd="()";
				else if(this.inputWord=="}") wd="{}";
				else wd="[]";
				if(ex.type==MathTOUCH.OP1A){
					R.parent.add(R.pnum,R.ch[0]);
					this.change(new EXtree1(this.state,Math.floor(okey2/100),okey2%100,ex.copy(),wd));
				}
				else this.change(new EXtree1(this.state,Math.floor(okey2/100),okey2%100,ex.ch[0].copy(),wd));
			}
			else{
				this.add(0,ex);
			}
		}
		else if(this.ch[0].BraType()==2) this.ch[0].addLeftBra(okey,inwd,ex);
		else if(R.BraType()==1){
			var okey2=KeyOrderOfBraType(0);
			var wd;
			if(this.inputWord==")") wd="()";
			else if(this.inputWord=="}") wd="{}";
			else wd="[]";
			if(okey==MathTOUCH.SP*100 && R.ch[0].type==MathTOUCH.EMP){
				if(ex.type==MathTOUCH.OP1A){alert("addLeftBra error in EXtree"); return;}
				this.change(new EXtree1(this.state,Math.floor(okey2/100),okey2%100,this.ch[0].copy(),wd));
			}
			else{
				if(ex.type==MathTOUCH.OP1A){
					R.parent.add(R.pnum,R.ch[0]);
					this.change(new EXtree1(this.state,Math.floor(okey2/100),okey2%100,
                                            new EXtree2(0,Math.floor(okey/100),okey%100,ex.copy(),this.ch[0].copy(),inwd),wd));
				}
				else this.change(new EXtree1(this.state,Math.floor(okey2/100),okey2%100,
                                            new EXtree2(0,Math.floor(okey/100),okey%100,ex.ch[0].copy(),this.ch[0].copy(),inwd),wd));
			}
		}
		else{
			this.add(0,new EXtree2(0,Math.floor(okey/100),okey%100,ex.copy(),this.ch[0].copy(),inwd));
		}
	}
	
	this.addLeft=function(R){
		var ans=null;
		if(this.type==MathTOUCH.OP2C) ans=new EXtree2(this.state,this.key,this.order,R.copy(),this.ch[1].copy(),this.inputWord);
		else if(this.type==MathTOUCH.OP3T) ans=new EXtree3(this.state,this.key,this.order,this.ch[0].copy(),R.copy(),this.ch[2].copy(),this.inputWord);
		return(ans);
	}
	
	this.pairBra=function(){
		if(this.BraType()!=1) return false;
		var next=this.ch[0].nextBra();
		while(next!=null&&next.BraType()==1){
			if(next.pairBra()==false) return false;
			next=this.ch[0].nextBra();
		}
		if(next==null) return false;
		else{
            var okey=this.KeyOrderOfBraType(0);
            var wd;
            if(this.inputWord=="(") wd="()";
            else if(this.inputWord=="{") wd="{}";
            else wd="[]";
			if(next.isLeftOf2Cor1Aor3TorBR()){
                var temp=next.theLeftMostTop();
                if(temp.parent!=null) temp.parent.add(temp.pnum,next.ch[0]);
				next.parent.add(next.pnum,new EXtree1(this.state,Math.floor(okey/100),okey%100,this.ch[0].copy(),wd));
				this.change(temp);
            }
			else{
				next.parent.add(next.pnum,next.ch[0]);
				this.change(new EXtree1(this.state,Math.floor(okey/100),okey%100,this.ch[0].copy(),wd));
			}
			return true;
		}
	}
    
    this.allPairBra=function(){
        if(this.BraType()==1) this.pairBra();
        for(var i=0;i<this.cnum;i++) this.ch[i].allPairBra();
    }
	
	this.nextBra=function(){
		var temp=null;
		if(this.cnum==0) return null;
		var btype=this.BraType();
		if(btype==1) return this;
		else if(btype==2){
			temp=this.ch[0].nextBra();
			if(temp==null) return this;
			else return temp;
		}
		else if(btype==0) return null;
		if(this.type==MathTOUCH.OP1A) return this.ch[0].nextBra();
		if(this.type==MathTOUCH.OP1P||this.type==MathTOUCH.OP2P||this.type==MathTOUCH.OP3P) return this.ch[this.cnum-1].nextBra();
		if(this.type==MathTOUCH.OP2C){
			temp=this.ch[0].nextBra();
			if(temp!=null) return temp;
			else return this.ch[1].nextBra();
		}
		else if(this.type==MathTOUCH.OP3T){
			temp=this.ch[1].nextBra();
			if(temp!=null) return temp;
			else return this.ch[2].nextBra();
		}
		else return null;
	}
	
	this.nPlast=function(){
		if((this.type==MathTOUCH.OP1P || this.type==MathTOUCH.OP2P || this.type==MathTOUCH.OP3P)){
			return this.getLastB();
		}
		else return null;
	}
	
	this.Bralast=function(){
		var last=this;
		while(last.BraType()==1) last=last.ch[0];
		if(last==this) return null;
		else return last;
	}
	
	this.leftLR=function(){
		var ans=null;
		var LL=null;
		var RR=null;
		var okey=0;
		var btype=this.BraType();
		if(btype==0){
			ans=this.ch[0].leftLR();
			if(ans!=null){
				okey=this.KeyOrderOfBraType(1);
                if(ans.type==MathTOUCH.OP3T){
                    LL=new EXtree1(this.state,Math.floor(okey/100),okey%100,ans.ch[1].copy(),this.inputWord.substring(0,1));
                    okey=this.KeyOrderOfBraType(2);
                    RR=new EXtree1(this.state,Math.floor(okey/100),okey%100,ans.ch[2].copy(),this.inputWord.substring(1));
                    ans.add(1,LL);
                    ans.add(2,RR);
                }
                else{
                    LL=new EXtree1(this.state,Math.floor(okey/100),okey%100,ans.ch[0].copy(),this.inputWord.substring(0,1));
                    okey=this.KeyOrderOfBraType(2);
                    RR=new EXtree1(this.state,Math.floor(okey/100),okey%100,ans.ch[1].copy(),this.inputWord.substring(1));
                    ans.add(0,LL);
                    ans.add(1,RR);
                }
			}
		}
		else if(btype==1){
			ans=this.ch[0].leftLR();
			if(ans!=null){
				okey=this.KeyOrderOfBraType(1);
                if(ans.type==MathTOUCH.OP3T){
                    LL=new EXtree1(this.state,Math.floor(okey/100),okey%100,ans.ch[1].copy(),this.inputWord.substring(0,1));
                    ans.add(1,LL);
                }
                else{
                    LL=new EXtree1(this.state,Math.floor(okey/100),okey%100,ans.ch[0].copy(),this.inputWord.substring(0,1));
                    ans.add(0,LL);
                }
			}
		}
		else if(btype==2) ans=null;
		else{
			LL=this.copy();
			var point=LL.left2CPoint();
			if(point==null) return null;
			btype=point.BraType();
			if(btype==0 || btype==1){
				ans=point.leftLR();
				if(ans!=null){
					point.parent.add(point.pnum,ans.ch[0].copy());
					ans.add(0,LL.copy());
				}
				else{alert("leftLR error in EXtree");}
			}
			else if(point.type==MathTOUCH.OP1A || btype==2) ans=null;
			else if(point.type==MathTOUCH.OP2C){
				if(point==LL) LL=point.ch[0];
				else point.parent.add(point.pnum,point.ch[0]);
				ans=new EXtree2(point.state,point.key,point.order,LL.copy(),point.ch[1].copy(),point.inputWord);
			}
			else if(point.type==MathTOUCH.OP3T){
				if(point==LL) LL=point.ch[1];
				else point.parent.add(point.pnum,point.ch[1]);
				ans=new EXtree3(point.state,point.key,point.order,point.ch[0],LL.copy(),point.ch[2].copy(),point.inputWord);
			}
			else ans=null;
		}
		return ans;
	}
	
	this.divideOnLeft=function(){
		var point=this.leftPoint();
		if(point==null) return null;
		if(point.type==MathTOUCH.OP1A || point.BraType()==2){
				point.parent.add(point.pnum,point.ch[0].copy());
				var ans=new EXtree1(point.state,point.key,point.order,this.copy(),point.inputWord);
				this.change(ans);
				return(ans.ch[0]);
		}
		var ppp=this;
		if(this.parent!=null && this.parent.type==MathTOUCH.OP1A){
			while(ppp.parent!=null && ppp.parent.type==MathTOUCH.OP1A) ppp=ppp.parent;
		}
			var ans=null;
			var L=null;
            var R0=null;
			var R1=null;
			var R1last=null;
			var R1lastpnum=0;
			var R2=null;
			var divkey,divorder,divstate;
			var divinputWord;
			if(point.type==MathTOUCH.OP1B){
				var btype=point.BraType();
				var inwd=point.inputWord;
				var okey;
                var last;
				if(btype==0){
					okey=point.KeyOrderOfBraType(1);
					if(okey<0){alert("divideOnLeft error in EXtree"); return null;}
					var chpoint=point.leftLR();
					if(chpoint==null){alert("divideOnLeft12 error in EXtree"); return null;}
                    if(chpoint.type==MathTOUCH.OP3T){
                        R0=chpoint.ch[0].copy();
                        L=chpoint.ch[1].copy();
                        last=chpoint.ch[2].ch[0].nPlast();
                        if(last!=null){
							R1=chpoint.ch[2].ch[0];
							R1last=last.parent;
							R1lastpnum=last.pnum;
                        }
                        else{last=chpoint.ch[2].ch[0];}
                    }
                    else{
                        L=chpoint.ch[0].copy();
                        last=chpoint.ch[1].ch[0].nPlast();
                        if(last!=null){
							R1=chpoint.ch[1].ch[0];
							R1last=last.parent;
							R1lastpnum=last.pnum;
                        }
                        else{last=chpoint.ch[1].ch[0];}
                    }
					okey=point.KeyOrderOfBraType(2);
					if(ppp==this){R2=new EXtree1(point.state,Math.floor(okey/100),okey%100,last.copy(),inwd.substring(1));}
					else{
						this.parent.add(0,new EXtree1(point.state,Math.floor(okey/100),okey%100,last.copy(),inwd.substring(1)));
						R2=ppp.copy();
					}
					divstate=chpoint.state;divkey=chpoint.key;divorder=chpoint.order;divinputWord=chpoint.inputWord;
				}
				else if(btype==1){
					if(point.ch[0].type==MathTOUCH.OP1A){
						divstate=point.ch[0].state;divkey=point.ch[0].key;divorder=point.ch[0].order;divinputWord=point.ch[0].inputWord;
						point.add(0,point.ch[0].ch[0].copy());
						ans=new EXtree1(divstate,divkey,divorder,this.copy(),divinputWord);
						this.change(ans);
						return(ans.ch[0]);
					}
					okey=point.KeyOrderOfBraType(1);
					if(okey<0){alert("divideOnLeft error in EXtree"); return null;}
					var chpoint=point.leftLR();
					if(chpoint==null){alert("divideOnLeft12 error in EXtree"); return null;}
                    if(chpoint.type==MathTOUCH.OP3T){
                        R0=chpoint.ch[0].copy();
                        L=chpoint.ch[1].copy();
                        last=chpoint.ch[2].nPlast();
                        if(last!=null){
							R1=chpoint.ch[2];
							R1last=last.parent;
							R1lastpnum=last.pnum;
                        }
                        else{
                            last=chpoint.ch[2].Bralast();
                            if(last==null) last=chpoint.ch[2];
                            else{
                                R1=chpoint.ch[2];
                                R1last=last.parent;
                                R1lastpnum=last.pnum;
                            }
                        }
                    }
                    else{
                        L=chpoint.ch[0].copy();
                        last=chpoint.ch[1].nPlast();
                        if(last!=null){
							R1=chpoint.ch[1];
							R1last=last.parent;
							R1lastpnum=last.pnum;
                        }
                        else{
                            last=chpoint.ch[1].Bralast();
                            if(last==null) last=chpoint.ch[1];
                            else{
                                R1=chpoint.ch[1];
                                R1last=last.parent;
                                R1lastpnum=last.pnum;
                            }
                        }
                    }
                    if(ppp==this){R2=last.copy();}
                    else{
                        this.parent.add(0,last.copy());
                        R2=ppp.copy();
                    }
					divstate=chpoint.state;divkey=chpoint.key;divorder=chpoint.order;divinputWord=chpoint.inputWord;
				}
				else{return null;}
			}
			else if(point.type==MathTOUCH.OP2C){
				L=point.ch[0].copy();
				var bra1last=point.ch[1].Bralast();
				if(bra1last==null){
					var last=point.ch[1].nPlast();
					if(last!=null){
						R1=point.ch[1];
						R1last=last.parent;
						R1lastpnum=last.pnum;
					}
					else last=point.ch[1];
					if(ppp==this){R2=last.copy();}
					else{
						this.parent.add(0,last.copy());
						R2=ppp.copy();
					}
				}
				else{
						R1=point.ch[1];
						R1last=bra1last.parent;
						R1lastpnum=bra1last.pnum;
					if(ppp==this){R2=bra1last.copy();}
					else{
						this.parent.add(0,bra1last.copy());
						R2=ppp.copy();
					}
				}
				divstate=point.state;divkey=point.key;divorder=point.order;divinputWord=point.inputWord;
			}
			else if(point.type==MathTOUCH.OP3T){
				R0=point.ch[0].copy();
				L=point.ch[1].copy();
				var bra1last=point.ch[2].Bralast();
				if(bra1last==null){
					var last=point.ch[2].nPlast();
					if(last!=null){
						R1=point.ch[2];
						R1last=last.parent;
						R1lastpnum=last.pnum;
					}
					else last=point.ch[2];
					if(ppp==this){R2=last.copy();}
					else{
						this.parent.add(0,last.copy());
						R2=ppp.copy();
					}
				}
				else{
					R1=point.ch[2];
					R1last=bra1last.parent;
					R1lastpnum=bra1last.pnum;
					if(ppp==this){R2=bra1last.copy();}
					else{
						this.parent.add(0,bra1last.copy());
						R2=ppp.copy();
					}
				}
				divstate=point.state;divkey=point.key;divorder=point.order;divinputWord=point.inputWord;
			}
			else return null;
			if(point==this) this.change(L.copy());
			else{ point.parent.add(point.pnum,L.copy());
                
            }
			if(ppp.parent!=null && ((ppp.parent.type==MathTOUCH.OP2C&& ppp.pnum==0)||(ppp.parent.type==MathTOUCH.OP3T&& ppp.pnum==1))){
				if(R1==null){
					if(R0==null) ans=new EXtree2(divstate,divkey,divorder,this.copy(),ppp.parent.addLeft(R2),divinputWord);
					else ans=new EXtree3(divstate,divkey,divorder,R0,this.copy(),ppp.parent.addLeft(R2),divinputWord);
				}
				else{
					R1last.add(R1lastpnum,ppp.parent.addLeft(R2));
					R1.pairBra();
					if(R0==null) ans=new EXtree2(divstate,divkey,divorder,this.copy(),R1.copy(),divinputWord);
					else ans=new EXtree3(divstate,divkey,divorder,R0,this.copy(),R1.copy(),divinputWord);
				}
                ppp.parent.change(ans);
                if(R0==null) return ppp.parent.ch[0];
                else return ppp.parent.ch[1];
			}
			else if(ppp.parent!=null && ppp.parent.BraType()==2){
				if(R1==null){
					if(R0==null) ans=new EXtree2(divstate,divkey,divorder,this.copy(),
							new EXtree1(ppp.parent.state,ppp.parent.key,ppp.parent.order,R2,ppp.parent.inputWord),divinputWord);
					else ans=new EXtree3(divstate,divkey,divorder,R0,this.copy(),
							new EXtree1(ppp.parent.state,ppp.parent.key,ppp.parent.order,R2,ppp.parent.inputWord),divinputWord);
				}
				else{
					R1last.add(R1lastpnum,new EXtree1(ppp.parent.state,ppp.parent.key,ppp.parent.order,R2,ppp.parent.inputWord));
					R1.pairBra();
					if(R0==null) ans=new EXtree2(divstate,divkey,divorder,this.copy(),R1.copy(),divinputWord);
					else ans=new EXtree3(divstate,divkey,divorder,R0,this.copy(),R1.copy(),divinputWord);
				}
				ppp.parent.change(ans);
			}
			else{
				if(R1==null){
					if(R0==null) ans=new EXtree2(divstate,divkey,divorder,this.copy(),R2,divinputWord);
					else ans=new EXtree3(divstate,divkey,divorder,R0,this.copy(),R2,divinputWord);
				}
				else{
					R1last.add(R1lastpnum,R2);
					R1.pairBra();
					if(R0==null) ans=new EXtree2(divstate,divkey,divorder,this.copy(),R1.copy(),divinputWord);
					else ans=new EXtree3(divstate,divkey,divorder,R0,this.copy(),R1.copy(),divinputWord);
				}
				ppp.change(ans);
			}
			if(R0==null) return(ans.ch[0]);
			else return(ans.ch[1]);
	}
		
	this.rightLR=function(){
		var ans=null;
		var LL=null;
		var RR=null;
		var okey=0;
		var btype=this.BraType();
		if(btype==0){
			ans=this.ch[0].rightLR();
			if(ans!=null){
				var Llast=ans.ch[0];
				while(Llast.type==MathTOUCH.OP1A) Llast=Llast.ch[0];
				okey=this.KeyOrderOfBraType(1);
				LL=new EXtree1(this.state,Math.floor(okey/100),okey%100,Llast.copy(),this.inputWord.substring(0,1));
				okey=this.KeyOrderOfBraType(2);
				var last=ans.ch[1].getLastB();
				last.parent.add(last.pnum,new EXtree1(this.state,Math.floor(okey/100),okey%100,last.copy(),this.inputWord.substring(1)));
				Llast.parent.add(Llast.pnum,LL);
			}
		}
		else if(btype==1){
			ans=this.ch[0].rightLR();
			if(ans!=null){
				var Llast=ans.ch[0];
				while(Llast.type==MathTOUCH.OP1A) Llast=Llast.ch[0];
				okey=this.KeyOrderOfBraType(1);
				LL=new EXtree1(this.state,Math.floor(okey/100),okey%100,Llast.copy(),this.inputWord.substring(0,1));
				Llast.parent.add(Llast.pnum,LL);
			}
		}
		else if(btype==2) ans=null;
		else if((this.type==MathTOUCH.OP2C||this.type==MathTOUCH.OP3T)){ans=this.copy();}
		else ans=null;
		return ans;
	}

	this.right2CPoint=function(){
		var ans=null;
		var btype=this.BraType();
		if(btype==0){ans=this.ch[0].right2CPoint();}
		else if(btype==1){ans=this.ch[0].right2CPoint();}
		else if(btype==2) ans=null;
		else if((this.type==MathTOUCH.OP2C||this.type==MathTOUCH.OP3T)){ans=this;}
		else ans=null;
		return ans;
	}
	
	this.getOPoint=function(){
		if(this.parent==null) return null;
		if(this.parent.type==MathTOUCH.OP1A) return this.parent;
		if((this.parent.type!=MathTOUCH.OP2C || this.pnum!=0)&&(this.parent.type!=MathTOUCH.OP3T|| this.pnum!=1)) return null;
		var point=null;
		if(this.parent.type==MathTOUCH.OP2C) point=this.parent.ch[1];
		else point=this.parent.ch[2];
		while(point.cnum!=0){
			if((point.type==MathTOUCH.OP2C||point.type==MathTOUCH.OP3T)){return point;}
			if(point.type==MathTOUCH.OP1B){break;}
			if(point.type==MathTOUCH.OP1A){break;}
			point=point.ch[point.cnum-1];
		}
		var btype=point.BraType();
		if(btype==0||btype==1){
			var chpoint=point.ch[0].right2CPoint();
			if(chpoint==null) return this.parent;
			else return point;
		}
		else if(btype==2){
			var chpoint=point.ch[0].right2CPoint();
			if(chpoint==null) return this.parent;
			else return point;
		}
		else return this.parent;
	}
    
    this.theMostLeftDivPoint=function(){
        var R=this.theMostLeftNode();
        var ans=null;
        if(R.BraType()==0||R.BraType()==1){
            ans=R.ch[0].theMostLeftDivPoint();
            if(ans==null){
                if(R==this) return null;
                else return R.parent;
            }
            else if(R.state==0){
                var okey;
                var LL;
                var RR;
                if(ans.type==MathTOUCH.OP3T){
                    if(R.BraType()==0){
                        okey=R.KeyOrderOfBraType(1);
                        LL=new EXtree1(0,Math.floor(okey/100),okey%100,ans.ch[1].copy(),R.inputWord.substring(0,1));
                        if(ans==R.ch[0]){
                            okey=R.KeyOrderOfBraType(2);
                            RR=new EXtree1(0,Math.floor(okey/100),okey%100,ans.ch[2].copy(),R.inputWord.substring(1));
                        }
                        else{
                            ans.parent.add(ans.pnum,ans.ch[2].copy());
                            okey=R.KeyOrderOfBraType(2);
                            RR=new EXtree1(0,Math.floor(okey/100),okey%100,R.ch[0].copy(),R.inputWord.substring(1));
                        }
                    }
                    else{
                        LL=new EXtree1(0,R.key,R.order,ans.ch[1].copy(),R.inputWord);
                        if(ans==R.ch[0]){
                            RR=ans.ch[2].copy();
                        }
                        else{
                            ans.parent.add(ans.pnum,ans.ch[2].copy());
                            RR=R.ch[0].copy();
                        }
                    }
                    ans.add(1,LL);
                    ans.add(2,RR);
                    R.change(ans);
                    return R;
                }
                else if(ans.type==MathTOUCH.OP2C){
                    if(R.BraType()==0){
                        okey=R.KeyOrderOfBraType(1);
                        LL=new EXtree1(0,Math.floor(okey/100),okey%100,ans.ch[0].copy(),R.inputWord.substring(0,1));
                        if(ans==R.ch[0]){
                            okey=R.KeyOrderOfBraType(2);
                            RR=new EXtree1(0,Math.floor(okey/100),okey%100,ans.ch[1].copy(),R.inputWord.substring(1));
                        }
                        else{
                            ans.parent.add(ans.pnum,ans.ch[1].copy());
                            okey=R.KeyOrderOfBraType(2);
                            RR=new EXtree1(0,Math.floor(okey/100),okey%100,R.ch[0].copy(),R.inputWord.substring(1));
                        }
                    }
                    else{
                        LL=new EXtree1(0,R.key,R.order,ans.ch[0].copy(),R.inputWord);
                        if(ans==R.ch[0]){
                            RR=ans.ch[1].copy();
                        }
                        else{
                            ans.parent.add(ans.pnum,ans.ch[1].copy());
                            RR=R.ch[0].copy();
                        }
                    }
                    ans.add(0,LL);
                    ans.add(1,RR);
                    R.change(ans);
                    return R;
                }
                else{
                    if(R.BraType()==0){
                        okey=R.KeyOrderOfBraType(1);
                        LL=new EXtree1(0,Math.floor(okey/100),okey%100,ans.ch[0].copy(),R.inputWord.substring(0,1));
                        ans.add(0,LL);
                        okey=R.KeyOrderOfBraType(2);
                        RR=new EXtree1(0,Math.floor(okey/100),okey%100,R.ch[0].copy(),R.inputWord.substring(1));
                    }
                    else{
                        LL=new EXtree1(0,R.key,R.order,ans.ch[0].copy(),R.inputWord);
                        ans.add(0,LL);
                        RR=R.ch[0].copy();
                    }
                    R.change(RR);
                    return R.theMostLeftDivPoint();
                }
            }
            else if(R==this){
                return null;
            }
            else return R.parent;
        }
        else if(R.cnum>0 && R.state==0 && R.ch[R.cnum-1].theMostLeftDivPoint()!=null){
            ans=R.ch[R.cnum-1].theMostLeftDivPoint();
            if(ans.type==MathTOUCH.OP3T){
                ans.add(1,new EXtree1(0,R.key,R.order,ans.ch[0].copy(),R.inputWord));
            }
            else{
                ans.add(0,new EXtree1(0,R.key,R.order,ans.ch[0].copy(),R.inputWord));
            }
            R.change(R.ch[R.cnum-1]);
            return R.theMostLeftDivPoint();
        }
        else if(R==this){
            return null;
        }
        else{
            return R.parent;
        }
    }
	
	this.rightPoint=function(){
		var ROP=this.getRightParent();
        if(ROP==null) return null;
        if(ROP.type==MathTOUCH.OP3T&&ROP.ch[1].state==2) return null;
        else if(ROP.ch[0].state==2) return null;
        if(this.BraType()==0||this.BraType()==2) return null;
		if(ROP.type==MathTOUCH.OP1A||ROP.BraType()==2) return ROP;
		var ROPchild=null;
		if(ROP.type==MathTOUCH.OP2C) ROPchild=ROP.ch[1];
		else ROPchild=ROP.ch[2];
        var point=ROPchild.theMostLeftDivPoint();
        if(point==null) return ROP;
        else return point;
	}
	
	this.divideOnRight=function(){
        var thisstr;
        var ROP=this.getRightParent();
		var point=this.rightPoint();
		var blast=null;
		if(point==null) return null;
        for(var i=0;i<this.cnum;i++){this.ch[i].clearBaseColor();this.ch[i].clearBackColor();}
        var last=this.getLastB();
        
		if(point==ROP && (point.type==MathTOUCH.OP1A||point.BraType()==2)){
			while(last.BraType()==1) last=last.ch[0].getLastB();
			last.parent.add(last.pnum,new EXtree1(point.state,point.key,point.order,last.copy(),point.inputWord));
			point.change(ROP.ch[0].copy());
            point.allPairBra();
			return point;
		}
		while(last!=this && (last.type!=MathTOUCH.OP1P&& last.type!=MathTOUCH.OP2C&&last.type!=MathTOUCH.OP3T&& last.BraType()!=1 && last.type!=MathTOUCH.OP2P && last.type!=MathTOUCH.OP3P)){
			last=last.parent;
		}
		if(last.type!=MathTOUCH.OP1P && last.type!=MathTOUCH.OP2C && last.type!=MathTOUCH.OP3T
					&& last.type!=MathTOUCH.OP2P && last.type!=MathTOUCH.OP3P&& last.BraType()!=1) return null;
		if(last.BraType()==1){
			blast=last.ch[0].getLastB();
			while(blast.BraType()==1) blast=blast.ch[0].getLastB();
		}
		else if(last.isLinear()) blast=last.ch[last.cnum-1];
        else if(last==this) blast=last.ch[last.cnum-1].getLastB();
        else blast=last;
        var ans=null;
        var tmp=null;
		if(point==ROP){
            if(ROP.type==MathTOUCH.OP3T){
                blast.change(new EXtree3(ROP.state,ROP.key,ROP.order,ROP.ch[0].copy(),blast.copy(),ROP.ch[2].copy(),ROP.inputWord));
                
                thisstr=this.getPositionFrom(ROP.ch[1]);
            }
            else{
                blast.change(new EXtree2(ROP.state,ROP.key,ROP.order,blast.copy(),ROP.ch[1].copy(),ROP.inputWord));
                thisstr=this.getPositionFrom(ROP.ch[0]);
            }
            ROP.change(ROP.ch[0].copy());
            ans=ROP.subTree(thisstr);
            ans.allPairBra();
            return ans;
		}
		else{
			var bpoint=point;
			var bp0last=null;
            var tmpthis=null;
			if(bpoint.type==MathTOUCH.OP3T) bp0last=bpoint.ch[1];
			else bp0last=bpoint.ch[0];
            if(ROP.type==MathTOUCH.OP3T){
                blast.change(new EXtree3(ROP.state,ROP.key,ROP.order,ROP.ch[0].copy(),blast.copy(),bp0last.copy(),ROP.inputWord));
                thisstr=this.getPositionFrom(ROP.ch[1]);
                if(bpoint.type==MathTOUCH.OP3T){ 
                    bpoint.add(1,ROP.ch[1].copy());
                    tmpthis=bpoint.ch[1].subTree(thisstr);
                }
                else{ 
                    bpoint.add(0,ROP.ch[1].copy());
                    tmpthis=bpoint.ch[0].subTree(thisstr);
                }
                thisstr=tmpthis.getPositionFrom(ROP.ch[2]);
                ROP.change(ROP.ch[2].copy());
                ans=ROP.subTree(thisstr);
                tmp=ans.nextBra();
                if(tmp!=null&&tmp.BraType()==1) tmp.pairBra();
                return ans;
            }
            else{
                blast.change(new EXtree2(ROP.state,ROP.key,ROP.order,blast.copy(),bp0last.copy(),ROP.inputWord));
                thisstr=this.getPositionFrom(ROP.ch[0]);
                if(bpoint.type==MathTOUCH.OP3T){ 
                    bpoint.add(1,ROP.ch[0].copy());
                    tmpthis=bpoint.ch[1].subTree(thisstr);
                }
                else{ 
                    bpoint.add(0,ROP.ch[0].copy());
                    tmpthis=bpoint.ch[0].subTree(thisstr);
                }
                thisstr=tmpthis.getPositionFrom(ROP.ch[1]);
                ROP.change(ROP.ch[1].copy());
                ans=ROP.subTree(thisstr);
                ans.allPairBra();
                return ans;
            }
		}
	}
	
	
	this.divideLastTerm=function(){
		var last=this.getLastSpacedTerm();
		if(last==null) return this;
		var pl=last.parent;
		if(pl.parent==null) return this;
		else{
			pl.parent.ch[pl.pnum]=pl.ch[0];
			pl.ch[0].parent=pl.parent;
			pl.ch[0].pnum=pl.pnum;
			return(new EXtree2(0,MathTOUCH.SP,0,this.copy(),last," "));
		}
	}
	
	this.divideFirstLastTerm=function(){
		if(!this.isSpaced()) return this;
		var first=this.ch[0];
		var second=this.ch[1];
		var last=first.getLastSpacedTerm();
		if(last==null) return this;
		var ff=first.removeLastSpacedTerm();
		ff.parent=this;ff.pnum=0;
		this.ch[0]=ff;
		this.ch[1]=new EXtree2(0,MathTOUCH.SP,0,last,second," ");
		this.ch[1].parent=this;ch[1].pnum=1;
		return this;
	}
	
	this.removeLeftTermAtLeft=function(){
		if(this.type!=MathTOUCH.OP2C&&this.type!=MathTOUCH.OP1A) return null;
		if(this.ch[0].type!=MathTOUCH.OP2C) return null;
		this.clearOpeColor();this.clearOpeBackColor();
		this.ch[0].clearBaseColor();this.ch[0].clearBackColor();
		if(this.type==MathTOUCH.OP2C){this.ch[1].clearBaseColor();this.ch[1].clearBackColor();}
		var ans=this.ch[0].copy();
		this.add(0,this.ch[0].ch[1].copy());
		ans.add(1,this.copy());
		this.change(ans);
		return this.ch[1];
	}
	
	this.restoreLeftTermAtLeft=function(){
		if(this.type!=MathTOUCH.OP2C&&this.type!=MathTOUCH.OP1A) return null;
		if(this.parent==null||this.parent.type!=MathTOUCH.OP2C||this.pnum!=1) return null;
		this.clearOpeColor();this.clearOpeBackColor();
		this.ch[0].clearBaseColor();this.ch[0].clearBackColor();
		if(this.type==MathTOUCH.OP2C){this.ch[1].clearBaseColor();this.ch[1].clearBackColor();}
        var ans=this.copy();
		var ans2=new EXtree2(this.parent.state,this.parent.key,this.parent.order,this.parent.ch[0].copy(),this.ch[0].copy(),this.parent.inputWord);
		ans.add(0,ans2);
		this.parent.change(ans);
		return this.parent;
	}
    
	this.getLastB=function(){
		if(this.cnum==0) return this;
		else if(this.type==MathTOUCH.OP1B) return this;
		else if(this.type==MathTOUCH.OP1A) return this;
        else if(this.type==MathTOUCH.MAT) return this;
		else return this.ch[this.cnum-1].getLastB();
	}

    this.reMakeTree=function(){
		var last=this.getLastB();
		while(last.BraType()==1) last=last.ch[0].getLastB();
		var nnum=last.inputWord.length;
		if(last.type==MathTOUCH.NUM && nnum>1){
			var nstr=last.inputWord;
			var outWord1;
            var outWord2;
			if(last.val.charAt(0)=='b'){ outWord1="b"+nstr.substring(0,nnum-1);outWord2="b"+nstr.substring(nnum-1,nnum);}
			else{ outWord1=nstr.substring(0,nnum-1);outWord2=nstr.substring(nnum-1,nnum);}
			last.change(new EXtree2(0,MathTOUCH.SP,0,
                        new NumberEXT(0,outWord1),
                        new NumberEXT(0,outWord2),
                                   " ")
						);
			return this;
		}
		else if(nnum>1&&(last.type==MathTOUCH.XTML || last.type==MathTOUCH.SYM || last.type==MathTOUCH.VAR)){
			var reststr;
			var sub=new middleEX(100);
			sub.DIC.dicE=0;
			var leftparent=last.theLeftMostTop();
			reststr=leftparent.getInputWord();
			sub.extransPart(last.getInputWord().length-1,reststr);
			var ans=sub.makeEXtree(0,sub.toknum);
			if(ans==null){
				return null;
			}
			else{
				leftparent.change(ans);
				return this;
			}
		}
        else{
            while(true){
                var btype=last.BraType();
                if(btype==0){
                    
                }
                else if(btype==1){
                    var ans=last.ch[0].reMakeTree();
                    if(ans!=null){
                        var temp=last.ch[0].getLastSpacedTerm();
                        if(temp!=null){
                            temp.parent.parent.add(temp.parent.pnum,temp.parent.ch[0].copy());
                            last.change(new EXtree2(0,MathTOUCH.SP,0,last.copy(),temp.copy()," "));
                            return this;
                        }
                    }
                }
                else if(last.type==MathTOUCH.OP2C||last.type==MathTOUCH.OP1A||btype==2){
                    var ans=last.ch[0].reMakeTree();
                    if(ans!=null){
                        var temp=last.ch[0].getLastSpacedTerm();
                        if(temp!=null){
                            temp.parent.change(temp.parent.ch[0]);
                            var temp2=last.ch[0].copy();
                            last.add(0,temp.copy());
                            last.change(new EXtree2(0,MathTOUCH.SP,0,temp2,last.copy()," "));
                            return this;
                        }
                    }
                }
                else if(last.type==MathTOUCH.OP2P){
                    var ans=last.ch[0].reMakeTree();
                    if(ans!=null){
                        var temp=last.ch[0].getLastSpacedTerm();
                        if(temp!=null){
                            temp.parent.change(temp.parent.ch[0].copy());
                            last.ch[1].change(new EXtree2(0,MathTOUCH.SP,0,temp.copy(),last.ch[1].copy()," "));
                            return this;
                        }
                    }
                }
                else if(last.type==MathTOUCH.OP3P){
                    var ans=last.ch[1].reMakeTree();
                    if(ans!=null){
                        var temp=last.ch[1].getLastSpacedTerm();
                        if(temp!=null){
                            temp.parent.change(temp.parent.ch[0].copy());
                            last.ch[2].change(new EXtree2(0,MathTOUCH.SP,0,temp.copy(),last.ch[2].copy()," "));
                            return this;
                        }
                    }
                    else{
                        ans=last.ch[0].reMakeTree();
                        if(ans!=null){
                            var temp=last.ch[0].getLastSpacedTerm();
                            if(temp!=null){
                                temp.parent.change(temp.parent.ch[0].copy());
                                last.ch[2].change(new EXtree2(0,MathTOUCH.SP,0,last.ch[1].copy(),last.ch[2].copy()," "));
                                last.add(1,temp.copy());
                                return this;
                            }
                        }
                    }
                }
                else if(last.type==MathTOUCH.OP3T){
                    var ans=last.ch[0].reMakeTree();
                    if(ans!=null){
                        var temp=last.ch[0].getLastSpacedTerm();
                        if(temp!=null){
                            temp.parent.change(temp.parent.ch[0].copy());
                            last.ch[2].change(new EXtree2(0,MathTOUCH.SP,0,temp.copy(),last.ch[2].copy()," "));
                            return this;
                        }
                    }
                    else{
                        ans=last.ch[1].reMakeTree();
                        if(ans!=null){
                            var temp=last.ch[1].getLastSpacedTerm();
                            if(temp!=null){
                                temp.parent.change(temp.parent.ch[0]);
                                var temp2=last.ch[1].copy();
                                last.change(new EXtree2(0,MathTOUCH.SP,0,temp2,last.copy()," "));
                                return this;
                            }
                        }
                    }
                }
                if(last==this) return null;
                if(last.parent==null) return null;
                last=last.parent;
            }
        }
	}


	
	this.getKeyWords=function(){
		if(this.cnum==0){if(this.inputWord==null) return("");else return(this.inputWord);}
		else if(this.rownum*this.colnum>0){
			if(!this.inputWord=="MAT") return(this.inputWord);
			var str="\u21E9";
			var i,j;
			for(i=0;i<this.rownum-1;i++){
				for(j=0;j<this.colnum-1;j++){
					if(this.ch[i*this.colnum+j]!=null) str=str+this.ch[i*this.colnum+j].getKeyWords()+"\u27B1";
					else str=str+"\u27B1";
				}
				if(this.ch[i*this.colnum+j]!=null) str=str+this.ch[i*this.colnum+j].getKeyWords()+"\u23cE";
				else str=str+"\u23cE";
			}
			for(j=0;j<this.colnum-1;j++){
				if(this.ch[i*this.colnum+j]!=null) str=str+this.ch[i*this.colnum+j].getKeyWords()+"\u27B1";
				else str=str+"\u27B1";
			}
			if(this.ch[i*this.colnum+j]!=null) str=str+this.ch[i*this.colnum+j].getKeyWords();
            str=str+"\u22A1";
			return(str);
		}
		else if(this.type==MathTOUCH.OP1P){return(this.inputWord+","+this.ch[0].getKeyWords());}
		else if(this.type==MathTOUCH.OP1A){return(this.ch[0].getKeyWords()+","+this.inputWord);}
		else if(this.type==MathTOUCH.OP1B){
			if(this.inputWord=="(") return("(,"+this.ch[0].getKeyWords());
			else if(this.inputWord==")") return(this.ch[0].getKeyWords()+",)");
			else if(this.inputWord=="()") return("(,"+this.ch[0].getKeyWords()+",)");
			else if(this.inputWord=="{") return("{,"+this.ch[0].getKeyWords());
			else if(this.inputWord=="}") return(this.ch[0].getKeyWords()+",}");
			else if(this.inputWord=="{}") return("{,"+this.ch[0].getKeyWords()+",}");
			else if(this.inputWord=="[") return("[,"+this.ch[0].getKeyWords());
			else if(this.inputWord=="]") return(this.ch[0].getKeyWords()+",]");
			else if(this.inputWord=="[]") return("[,"+this.ch[0].getKeyWords()+",]");
            else if(this.inputWord=="(]") return("(,"+this.ch[0].getKeyWords()+",]");
            else if(this.inputWord=="(}") return("(,"+this.ch[0].getKeyWords()+",}");
            else if(this.inputWord=="[)") return("[,"+this.ch[0].getKeyWords()+",)");
            else if(this.inputWord=="[}") return("[,"+this.ch[0].getKeyWords()+",}");
            else if(this.inputWord=="{)") return("{,"+this.ch[0].getKeyWords()+",)");
            else if(this.inputWord=="{]") return("{,"+this.ch[0].getKeyWords()+",]");
			else if(this.ch[0].inputWord.length==0) return(this.inputWord);
			else{alert("getKeyWords blacket error in EXtree"); return null;}
		}
		else if(this.type==MathTOUCH.OP2C){
			if(this.key==MathTOUCH.SP){
				if(this.inputWord==" ") return(this.ch[0].getKeyWords()+","+this.ch[1].getKeyWords());
				else return(this.inputWord);
			}
			else if(this.inputWord==null) return(this.ch[0].getKeyWords()+","+this.ch[1].getKeyWords());
            else if(this.inputWord==",") return(this.ch[0].getKeyWords()+",\u201A,"+this.ch[1].getKeyWords());
			else return(this.ch[0].getKeyWords()+","+this.inputWord+","+this.ch[1].getKeyWords());
		}
		else if(this.type==MathTOUCH.OP2P){return(this.inputWord+","+this.ch[0].getKeyWords()+","+this.ch[1].getKeyWords());}
		else if(this.type==MathTOUCH.OP3P){return(this.inputWord+","+this.ch[0].getKeyWords()+","+this.ch[1].getKeyWords()+","+this.ch[2].getKeyWords());}
		else if(this.type==MathTOUCH.OP3T){return(this.ch[1].getKeyWords()+","+this.inputWord+","+this.ch[0].getKeyWords()+","+this.ch[2].getKeyWords());}
		else{alert("getKeyWords error in EXtree"); return null;}
		return null;
	}
	
	this.getInputWord=function(){
		if(this.cnum==0){
			if(this.inputWord==null) return("");
			else if(this.type==MathTOUCH.XTML){
				var ans="";
				var c;
				for(var i=0;i<this.inputWord.length;i++){c=this.inputWord.charAt(i);if(c!=',') ans=ans+c;}
				return ans;
			}
			else return(this.inputWord);
		}
		else if(this.rownum*this.colnum>0){
			if(!this.inputWord=="MAT") return(this.inputWord);
			var str="\u21E9";
			var i,j;
			for(i=0;i<this.rownum-1;i++){
				for(j=0;j<this.colnum-1;j++){
					if(this.ch[i*this.colnum+j]!=null) str=str+this.ch[i*this.colnum+j].getInputWord()+"\u27B1";
					else str=str+"\u27B1";
				}
				if(this.ch[i*this.colnum+j]!=null) str=str+this.ch[i*this.colnum+j].getInputWord()+"\u23cE";
				else str=str+"\u23cE";
			}
			for(j=0;j<this.colnum-1;j++){
				if(this.ch[i*this.colnum+j]!=null) str=str+this.ch[i*this.colnum+j].getInputWord()+"\u27B1";
				else str=str+"\u27B1";
			}
			if(this.ch[i*this.colnum+j]!=null) str=str+this.ch[i*this.colnum+j].getInputWord();
            str=str+"\u22A1";
			return(str);
		}
		else if(this.type==MathTOUCH.OP1P){return(this.inputWord+this.ch[0].getInputWord());}
		else if(this.type==MathTOUCH.OP1A){return(this.ch[0].getInputWord()+this.inputWord);}
		else if(this.type==MathTOUCH.OP1B){
			if(this.inputWord=="(") return("("+this.ch[0].getInputWord());
			else if(this.inputWord==")") return(this.ch[0].getInputWord()+")");
			else if(this.inputWord=="()") return("("+this.ch[0].getInputWord()+")");
			else if(this.inputWord=="{") return("{"+this.ch[0].getInputWord());
			else if(this.inputWord=="}") return(this.ch[0].getInputWord()+"}");
			else if(this.inputWord=="{}") return("{"+this.ch[0].getInputWord()+"}");
			else if(this.inputWord=="[") return("["+this.ch[0].getInputWord());
			else if(this.inputWord=="]") return(this.ch[0].getInputWord()+"]");
			else if(this.inputWord=="[]") return("["+this.ch[0].getInputWord()+"]");
            else if(this.inputWord=="(]") return("("+this.ch[0].getInputWord()+"]");
            else if(this.inputWord=="(}") return("("+this.ch[0].getInputWord()+"}");
            else if(this.inputWord=="[)") return("["+this.ch[0].getInputWord()+")");
            else if(this.inputWord=="[}") return("["+this.ch[0].getInputWord()+"}");
            else if(this.inputWord=="{)") return("{"+this.ch[0].getInputWord()+")");
            else if(this.inputWord=="{]") return("{"+this.ch[0].getInputWord()+"]");
			else if(this.ch[0].inputWord.length==0) return(this.inputWord);
			else{alert("getInputWord blacket error in EXtree"); return null;}
		}
		else if(this.type==MathTOUCH.OP2C){
			if(this.key==MathTOUCH.SP){
				if(this.inputWord==" ") return(this.ch[0].getInputWord()+this.ch[1].getInputWord());
				else return(this.inputWord);
			}
			else if(this.inputWord==null) return(this.ch[0].getInputWord()+this.ch[1].getInputWord());
            else if(this.inputWord==",") return(this.ch[0].getInputWord()+"\u201A"+this.ch[1].getInputWord());
			else return(this.ch[0].getInputWord()+this.inputWord+this.ch[1].getInputWord());
		}
		else if(this.type==MathTOUCH.OP2P){return(this.inputWord+this.ch[0].getInputWord()+this.ch[1].getInputWord());}
		else if(this.type==MathTOUCH.OP3P){return(this.inputWord+this.ch[0].getInputWord()+this.ch[1].getInputWord()+this.ch[2].getInputWord());}
		else if(this.type==MathTOUCH.OP3T){return(this.ch[1].getInputWord()+this.inputWord+this.ch[0].getInputWord()+this.ch[2].getInputWord());}
		else{alert("getInputWord error in EXtree"); return null;}
		return null;
	}
	

	this.nextType=function(){
		if(this.type<=3 || this.type==MathTOUCH.MAT || this.type==MathTOUCH.TXT) return(this);
		var ans;
		var ttyp=this.type;
		var ord;
		var d;
		var pp=this.parent;
		var pn=this.pnum;
		var pkey=this.key;
		var count=0;
		while(true){
			OTB.logOrder++;
			if(OTB.logOrder>=OTB.getOpeLength(pkey)) {OTB.logOrder=0;count++;}
			if(count>2){
				return(null);
			}
			var nexttype=OTB.getOpeTypeLog(pkey,OTB.logOrder);
			ord=OTB.order(pkey);
			if(ord==this.order){
				OTB.logOrder++;
				if(OTB.logOrder>=OTB.getOpeLength(pkey)) {OTB.logOrder=0;count++;}
				if(count>2){
					return(null);
				}
				nexttype=OTB.getOpeTypeLog(pkey,OTB.logOrder);
				ord=OTB.order(pkey);
			}
			if(ttyp==nexttype){
				this.order=ord;
				if(this.key==MathTOUCH.SP && this.order==2){
					if(this.ch[0].key!=MathTOUCH.SP||this.ch[0].order!=3){
                        OTB.logOrder++;
                        this.order=OTB.order(pkey);
                    }
				}
				this.val=OTB.theKeyWordAt(pkey);
				ans=this;
				break;
			}
			else if(ttyp==MathTOUCH.OP2C && nexttype==MathTOUCH.OP1P){
				this.ch[0].clearBaseColor();this.ch[1].clearBaseColor();
				this.ch[0].clearBackColor();this.ch[1].clearBackColor();
				ans=new EXtree1(0,pkey,ord,this.ch[1].copy(),this.inputWord);
				this.change(new EXtree2(0,MathTOUCH.SP,0,this.ch[0].copy(),ans," "));
				break;
			}
			else if(ttyp==MathTOUCH.OP2C && nexttype==MathTOUCH.OP2P){
				this.ch[0].clearBaseColor();this.ch[1].clearBaseColor();
				this.ch[0].clearBackColor();this.ch[1].clearBackColor();
				var arg2=this.ch[1].copy();
				var arg1=arg2.cutFirstSpacedTerm2();
				if(arg1==null) continue;
				else{
					ans=new EXtree2(0,pkey,ord,arg1,arg2,this.inputWord);
					this.change(new EXtree2(0,MathTOUCH.SP,0,this.ch[0].copy(),ans," "));
					break;
				}
			}
			else if(ttyp==MathTOUCH.OP2C && nexttype==MathTOUCH.OP3P){
				this.ch[0].clearBaseColor();this.ch[1].clearBaseColor();
				this.ch[0].clearBackColor();this.ch[1].clearBackColor();
				var arg3=this.ch[1].copy();
				var arg1=arg3.cutFirstSpacedTerm2();
				var arg2=arg3.cutFirstSpacedTerm2();
				if(arg2==null) continue;
				else{
					ans=new EXtree3(0,pkey,ord,arg1,arg2,arg3,this.inputWord);
					this.change(new EXtree2(0,MathTOUCH.SP,0,this.ch[0].copy(),ans," "));
					break;
				}
			}
			else if(ttyp==MathTOUCH.OP2C && nexttype==MathTOUCH.OP1A){
				this.ch[1].clearBaseColor();
				this.ch[1].clearBackColor();
				ans=new EXtree1(0,pkey,ord,this.ch[0].copy(),this.inputWord);
				this.change(new EXtree2(0,MathTOUCH.SP,0,ans,this.ch[1].copy()," "));
				break;
			}
			else if(ttyp==MathTOUCH.OP1P && nexttype==MathTOUCH.OP2C){
				this.ch[0].clearBaseColor();
				this.ch[0].clearBackColor();
				if(pp==null) continue;
				if(pp.isSpaced() && pn==1){
					pp.change(new EXtree2(0,pkey,ord,pp.ch[0].copy(),this.ch[0].copy(),this.inputWord));
					ans=pp;
					break;
				}
				else if((pp.isType(MathTOUCH.OP2C)||pp.isType(MathTOUCH.OP1A)) && pn==0){
					pn=pp.pnum;pp=pp.parent;
					while(pp!=null){
						if((!pp.isType(MathTOUCH.OP2C)&& !pp.isType(MathTOUCH.OP1A)) || pn!=0) break;
						pn=pp.pnum;pp=pp.parent;
					}
					if(pp==null) continue;
					if(pp.isSpaced() && pn==1){
						this.change(new EXtree2(0,pkey,ord,pp.ch[0].copy(),this.ch[0].copy(),this.inputWord));
						pp.change(pp.ch[1]);
						ans=this;
						break;
					}
					else continue;
				}
				else continue;
			}
			else if(ttyp==MathTOUCH.OP1P && nexttype==MathTOUCH.OP2P){
				this.ch[0].clearBaseColor();
				this.ch[0].clearBackColor();
				var arg2=this.ch[0].copy();
				var arg1=arg2.cutFirstSpacedTerm2();
				if(arg1==null) continue;
				else{
					this.change(new EXtree2(0,pkey,ord,arg1,arg2,this.inputWord));
					ans=this;
					break;
				}
			}
			else if(ttyp==MathTOUCH.OP1P && nexttype==MathTOUCH.OP3P){
				this.ch[0].clearBaseColor();
				this.ch[0].clearBackColor();
				var arg3=this.ch[0].copy();
				var arg1=arg3.cutFirstSpacedTerm2();
				var arg2=arg3.cutFirstSpacedTerm2();
				if(arg2==null) continue;
				else{
					this.change(new EXtree3(0,pkey,ord,arg1,arg2,arg3,this.inputWord));
					ans=this;
					break;
				}
			}
			else if(ttyp==MathTOUCH.OP1P && nexttype==MathTOUCH.OP1A){
				this.ch[0].clearBaseColor();
				this.ch[0].clearBackColor();
				if(pp==null) continue;
				if(pp.isSpaced() && pn==1){
					pp.add(1,this.ch[0]);
					ans=new EXtree1(0,pkey,ord,pp.ch[0].copy(),this.inputWord);
					pp.add(0,ans);
					break;
				}
				else continue;
			}
			else if(ttyp==MathTOUCH.OP2P && nexttype==MathTOUCH.OP2C){
				this.ch[0].clearBaseColor();this.ch[1].clearBaseColor();
				this.ch[0].clearBackColor();this.ch[1].clearBackColor();
				if(pp==null) continue;
				if(pp.isSpaced() && pn==1){
					var arg1=this.ch[0].copy();
					var arg2=this.ch[1];
					arg1.addLastB(arg2);
					pp.change(new EXtree2(0,pkey,ord,pp.ch[0].copy(),arg1,this.inputWord));
					ans=pp;
					break;
				}
				else if((pp.isType(MathTOUCH.OP2C)||pp.isType(MathTOUCH.OP1A)) && pn==0){
					pn=pp.pnum;pp=pp.parent;
					while(pp!=null){
						if((!pp.isType(MathTOUCH.OP2C)&& !pp.isType(MathTOUCH.OP1A)) || pn!=0) break;
						pn=pp.pnum;pp=pp.parent;
					}
					if(pp==null) continue;
					if(pp.isSpaced() && pn==1){
						var arg1=this.ch[0].copy();
						var arg2=this.ch[1];
						arg1.addLastB(arg2);
						this.change(new EXtree2(0,pkey,ord,pp.ch[0].copy(),arg1,this.inputWord));
						pp.change(pp.ch[1]);
						ans=this;
						break;
					}
					else continue;
				}
				else continue;
			}
			else if(ttyp==MathTOUCH.OP2P && nexttype==MathTOUCH.OP1P){
				this.ch[0].clearBaseColor();this.ch[1].clearBaseColor();
				this.ch[0].clearBackColor();this.ch[1].clearBackColor();
				var arg1=this.ch[0].copy();
				var arg2=this.ch[1];
				arg1.addLastB(arg2);
				this.change(new EXtree1(0,pkey,ord,arg1,this.inputWord));
				ans=this;
				break;
			}
			else if(ttyp==MathTOUCH.OP2P && nexttype==MathTOUCH.OP3P){
				this.ch[0].clearBaseColor();this.ch[1].clearBaseColor();
				this.ch[0].clearBackColor();this.ch[1].clearBackColor();
				var arg1=this.ch[0];
				var arg3=this.ch[1];
				var arg2=arg3.cutFirstSpacedTerm2();
				if(arg2==null) continue;
				else{
					this.change(new EXtree3(0,pkey,ord,arg1,arg2.copy(),arg3,this.inputWord));
					ans=this;
					break;
				}
			}
			else if(ttyp==MathTOUCH.OP2P && nexttype==MathTOUCH.OP1A){
				this.ch[0].clearBaseColor();this.ch[1].clearBaseColor();
				this.ch[0].clearBackColor();this.ch[1].clearBackColor();
				if(pp==null) continue;
				if(pp.isSpaced() && pn==1){
					var arg1=this.ch[0].copy();
					var arg2=this.ch[1];
					arg1.addLastB(arg2);
					pp.add(1,arg1);
					ans=new EXtree1(0,pkey,ord,pp.ch[0].copy(),this.inputWord);
					pp.add(0,ans);
					break;
				}
				else continue;
			}
			else if(ttyp==MathTOUCH.OP3P && nexttype==MathTOUCH.OP2C){
				this.ch[0].clearBaseColor();this.ch[1].clearBaseColor();this.ch[2].clearBaseColor();
				this.ch[0].clearBackColor();this.ch[1].clearBackColor();this.ch[2].clearBackColor();
				if(pp==null) continue;
				if(pp.isSpaced() && pn==1){
					var arg1=this.ch[0].copy();
					var arg2=this.ch[1];
					var arg3=this.ch[2];
					arg1.addLastB(arg2);
					arg1.addLastB(arg3);
					pp.change(new EXtree2(0,pkey,ord,pp.ch[0].copy(),arg1,this.inputWord));
					ans=pp;
					break;
				}
				else if((pp.isType(MathTOUCH.OP2C)||pp.isType(MathTOUCH.OP1A)) && pn==0){
					pn=pp.pnum;pp=pp.parent;
					while(pp!=null){
						if((!pp.isType(MathTOUCH.OP2C)&& !pp.isType(MathTOUCH.OP1A)) || pn!=0) break;
						pn=pp.pnum;pp=pp.parent;
					}
					if(pp==null) continue;
					if(pp.isSpaced() && pn==1){
						var arg1=this.ch[0].copy();
						var arg2=this.ch[1];
						var arg3=this.ch[2];
						arg1.addLastB(arg2);
						arg1.addLastB(arg3);
						this.change(new EXtree2(0,pkey,ord,pp.ch[0].copy(),arg1,this.inputWord));
						pp.change(pp.ch[1]);
						ans=this;
						break;
					}
					else continue;
				}
				else continue;
			}
			else if(ttyp==MathTOUCH.OP3P && nexttype==MathTOUCH.OP1P){
				this.ch[0].clearBaseColor();this.ch[1].clearBaseColor();this.ch[2].clearBaseColor();
				this.ch[0].clearBackColor();this.ch[1].clearBackColor();this.ch[2].clearBackColor();
				var arg1=this.ch[0].copy();
				var arg2=this.ch[1];
				var arg3=this.ch[2];
				arg1.addLastB(arg2);
				arg1.addLastB(arg3);
				this.change(new EXtree1(0,pkey,ord,arg1,this.inputWord));
				ans=this;
				break;
			}
			else if(ttyp==MathTOUCH.OP3P && nexttype==MathTOUCH.OP2P){
				this.ch[0].clearBaseColor();this.ch[1].clearBaseColor();this.ch[2].clearBaseColor();
				this.ch[0].clearBackColor();this.ch[1].clearBackColor();this.ch[2].clearBackColor();
				var arg1=this.ch[0];
				var arg2=this.ch[1].copy();
				var arg3=this.ch[2];
				arg2.addLastB(arg3);
				this.change(new EXtree2(0,pkey,ord,arg1,arg2,this.inputWord));
				ans=this;
				break;
			}
			else if(ttyp==MathTOUCH.OP3P && nexttype==MathTOUCH.OP1A){
				this.ch[0].clearBaseColor();this.ch[1].clearBaseColor();this.ch[2].clearBaseColor();
				this.ch[0].clearBackColor();this.ch[1].clearBackColor();this.ch[2].clearBackColor();
				if(pp==null) continue;
				if(pp.isSpaced() && pn==1){
					var arg1=this.ch[0].copy();
					var arg2=this.ch[1];
					var arg3=this.ch[2];
					arg1.addLastB(arg2);
					arg1.addLastB(arg3);
					pp.add(1,arg1);
					ans=new EXtree1(0,pkey,ord,pp.ch[0].copy(),this.inputWord);
					pp.add(0,ans);
					break;
				}
				else continue;
			}
			else if(ttyp==MathTOUCH.OP1A && nexttype==MathTOUCH.OP2C){
				this.ch[0].clearBaseColor();
				this.ch[0].clearBackColor();
				if(pp==null) continue;
				if(pp.isSpaced() && pn==0){
					this.parent.add(this.pnum,this.ch[0]);
					pp.change(new EXtree2(0,pkey,ord,pp.ch[0].copy(),pp.ch[1].copy(),this.inputWord));
					ans=pp;
					break;
				}
				else if(((pp.isType(MathTOUCH.OP2C) && pn==0) || pp.isType(MathTOUCH.OP1A)) && pp.state==0){
					var logOrderBAK=OTB.logOrder;
					OTB.logOrder=pp.order;
					var pans=pp.nextPtype();
					if(pans==null){
						OTB.logOrder=logOrderBAK;
					 continue;
					}
					if(pans.isSpaced()){
						this.parent.add(this.pnum,this.ch[0].copy());
						pans.change(new EXtree2(0,pkey,ord,pans.ch[0].copy(),pans.ch[1].copy(),this.inputWord));
						ans=pans;
						break;
					}
					else{alert("nextPtype error 0C in EXtree"); return null;}
				}
				else continue;
			}
			else if(ttyp==MathTOUCH.OP1A && (nexttype==MathTOUCH.OP1P||nexttype==MathTOUCH.OP2P||nexttype==MathTOUCH.OP3P)){
				this.ch[0].clearBaseColor();
				this.ch[0].clearBackColor();
					var logOrderBAK=OTB.logOrder;
					OTB.logOrder=this.order;
				var pans=this.nextPtype();
					OTB.logOrder=logOrderBAK;
				if(pans==null) continue;
				else if(pans.isSpaced()){
					ans=pans.ch[1];
					break;
				}
				else{alert("nextPtype error 0A in EXtree"); return null;}
			}
			else continue;
		}
		return(ans);
	}

	this.nextPtype=function(){
		var ans;
		var ttyp=this.type;
		var ord;
		var d;
		var pp=this.parent;
		var pn=this.pnum;
		var pkey=this.key;
		var count=0;
		while(true){
			OTB.logOrder++;
			if(OTB.logOrder>=OTB.getOpeLength(pkey)) {OTB.logOrder=0;count++;}
			if(count>=2){ans=null;break;}
			var nexttype=OTB.getOpeTypeLog(pkey,OTB.logOrder);
			ord=OTB.order(pkey);
			if(!(nexttype==MathTOUCH.OP1P||nexttype==MathTOUCH.OP2P||nexttype==MathTOUCH.OP3P)) continue;
			if(ttyp==nexttype){
				this.order=ord;
				if(this.key==MathTOUCH.SP && this.order==2){
					if(this.ch[0].key!=MathTOUCH.SP||this.ch[0].order!=3) this.order++;
				}
				this.val=OTB.theKeyWordAt(pkey);
				ans=this;
				break;
			}
			else if(ttyp==MathTOUCH.OP2C && nexttype==MathTOUCH.OP1P){
				this.ch[0].clearBaseColor();
				this.ch[0].clearBackColor();
				this.change(new EXtree2(0,MathTOUCH.SP,0,this.ch[0].copy(),new EXtree1(0,pkey,ord,this.ch[1].copy(),this.inputWord)," "));
				ans=this;
				break;
			}
			else if(ttyp==MathTOUCH.OP2C && nexttype==MathTOUCH.OP2P){
				this.ch[0].clearBaseColor();
				this.ch[0].clearBackColor();
				var arg2=this.ch[1];
				var arg1=arg2.cutFirstSpacedTerm2();
				if(arg1==null) continue;
				else{
					this.change(new EXtree2(0,MathTOUCH.SP,0,this.ch[0].copy(),new EXtree2(0,pkey,ord,arg1.copy(),arg2.copy(),this.inputWord)," "));
					ans=this;
					break;
				}
			}
			else if(ttyp==MathTOUCH.OP2C && nexttype==MathTOUCH.OP3P){
				this.ch[0].clearBaseColor();
				this.ch[0].clearBackColor();
				var arg3=this.ch[1];
				var arg1=arg3.cutFirstSpacedTerm2();
				var arg2=arg3.cutFirstSpacedTerm2();
				if(arg2==null) continue;
				else{
					this.change(new EXtree2(0,MathTOUCH.SP,0,this.ch[0].copy(),new EXtree3(0,pkey,ord,arg1.copy(),arg2.copy(),arg3.copy(),this.inputWord)," "));
					ans=this;
					break;
				}
			}
			else if(ttyp==MathTOUCH.OP1P && nexttype==MathTOUCH.OP2P){
				var arg2=this.ch[0];
				var arg1=arg2.cutFirstSpacedTerm2();
				if(arg1==null) continue;
				else{
					this.change(new EXtree2(0,pkey,ord,arg1.copy(),arg2,this.inputWord));
					ans=this;
					break;
				}
			}
			else if(ttyp==MathTOUCH.OP1P && nexttype==MathTOUCH.OP3P){
				var arg3=this.ch[0];
				var arg1=arg3.cutFirstSpacedTerm2();
				var arg2=arg3.cutFirstSpacedTerm2();
				if(arg2==null) continue;
				else{
					this.change(new EXtree3(0,pkey,ord,arg1.copy(),arg2.copy(),arg3,this.inputWord));
					ans=this;
					break;
				}
			}
			else if(ttyp==MathTOUCH.OP2P && nexttype==MathTOUCH.OP1P){
				var arg1=this.ch[0].copy();
				var arg2=this.ch[1];
				arg1.addLastB(arg2);
				this.change(new EXtree1(0,pkey,ord,arg1,this.inputWord));
				ans=this;
				break;
			}
			else if(ttyp==MathTOUCH.OP2P && nexttype==MathTOUCH.OP3P){
				var arg1=this.ch[0];
				var arg3=this.ch[1];
				var arg2=arg3.cutFirstSpacedTerm2();
				if(arg2==null) continue;
				else{
					this.change(new EXtree3(0,pkey,ord,arg1,arg2.copy(),arg3,this.inputWord));
					ans=this;
					break;
				}
			}
			else if(ttyp==MathTOUCH.OP3P && nexttype==MathTOUCH.OP1P){
				var arg1=this.ch[0].copy();
				var arg2=this.ch[1];
				var arg3=this.ch[2];
				arg1.addLastB(arg2);
				arg1.addLastB(arg3);
				this.change(new EXtree1(0,pkey,ord,arg1,this.inputWord));
				ans=this;
				break;
			}
			else if(ttyp==MathTOUCH.OP3P && nexttype==MathTOUCH.OP2P){
				var arg1=this.ch[0];
				var arg2=this.ch[1].copy();
				var arg3=this.ch[2];
				arg2.addLastB(arg3);
				this.change(new EXtree2(0,pkey,ord,arg1,arg2,this.inputWord));
				ans=this;
				break;
			}
			else if(ttyp==MathTOUCH.OP1A && nexttype==MathTOUCH.OP1P){
				if(pp==null) continue;
				if(pp.isSpaced() && pn==0){
					this.ch[0].clearBaseColor();
					this.parent.add(this.pnum,this.ch[0]);
					pp.add(1,new EXtree1(0,pkey,ord,pp.ch[1].copy(),this.inputWord));
					ans=pp;
					break;
				}
				else if(((pp.isType(MathTOUCH.OP2C) && pn==0) || pp.isType(MathTOUCH.OP1A)) && pp.state==0){
					var logOrderBAK=OTB.logOrder;
					OTB.logOrder=pp.order;
					var pans=pp.nextPtype();
					OTB.logOrder=logOrderBAK;
					if(pans==null) continue;
					if(pans.isSpaced()){
						this.parent.add(this.pnum,this.ch[0]);
						pans.add(1,new EXtree1(0,pkey,ord,pans.ch[1],this.inputWord));
						ans=pans;
						break;
					}
					else{alert("nextPtype error 1 in EXtree"); return null;}
				}
				else continue;
			}
			else if(ttyp==MathTOUCH.OP1A && nexttype==MathTOUCH.OP2P){
				if(pp==null) continue;
				if(pp.isSpaced() && pn==0){
					this.ch[0].clearBaseColor();
					this.ch[0].clearBackColor();
					var arg2=pp.ch[1].copy();
					var arg1=arg2.cutFirstSpacedTerm2();
					if(arg1==null) continue;
					this.parent.add(this.pnum,this.ch[0]);
					pp.add(1,new EXtree2(0,pkey,ord,arg1,arg2,this.inputWord));
					ans=pp;
					break;
				}
				else if(((pp.isType(MathTOUCH.OP2C) && pn==0) || pp.isType(MathTOUCH.OP1A)) && pp.state==0){
					var logOrderBAK=OTB.logOrder;
					OTB.logOrder=pp.order;
					var pans=pp.nextPtype();
					OTB.logOrder=logOrderBAK;
					if(pans==null) continue;
					if(pans.isSpaced() ){
						var arg2=pans.ch[1].copy();
						var arg1=arg2.cutFirstSpacedTerm2();
						if(arg1==null) continue;
						else{
							this.parent.add(this.pnum,this.ch[0]);
							pans.add(1,new EXtree2(0,pkey,ord,arg1,arg2,this.inputWord));
							ans=pans;
							break;
						}
					}
					else{alert("nextPtype error 2 in EXtree"); return null;}
				}
				else continue;
			}
			else if(ttyp==MathTOUCH.OP1A && nexttype==MathTOUCH.OP3P){
				if(pp==null) continue;
				if(pp.isSpaced() && pn==0){
					this.ch[0].clearBaseColor();
					this.ch[0].clearBackColor();
					var arg3=pp.ch[1].copy();
					var arg1=arg3.cutFirstSpacedTerm2();
					var arg2=arg3.cutFirstSpacedTerm2();
					if(arg2==null) continue;
					this.parent.add(this.pnum,this.ch[0]);
					pp.add(1,new EXtree3(0,pkey,ord,arg1,arg2,arg3,this.inputWord));
					ans=pp;
					break;
				}
				else if(((pp.isType(MathTOUCH.OP2C) && pn==0) || pp.isType(MathTOUCH.OP1A)) && pp.state==0){
					var logOrderBAK=OTB.logOrder;
					OTB.logOrder=pp.order;
					var pans=pp.nextPtype();
					OTB.logOrder=logOrderBAK;
					if(pans==null) continue;
					if(pans.isSpaced()){
						var arg3=pans.ch[1].copy();
						var arg1=arg3.cutFirstSpacedTerm2();
						var arg2=arg3.cutFirstSpacedTerm2();
						if(arg2==null) continue;
						else{
							this.parent.add(this.pnum,this.ch[0]);
							pans.add(1,new EXtree3(0,pkey,ord,arg1,arg2,arg3,this.inputWord));
							ans=pans;
							break;
						}
					}
					else{alert("nextPtype error 3 in EXtree"); return null;}
				}
				else continue;
			}
			else continue;
		}
		return(ans);
	}
    
    this.setEditMark=function(){this.state = this.state|4;}
    
    this.clearEditMark=function(){
        var tmp=this.EditMarkpoint();
        if(tmp!=null) tmp.state=tmp.state&3;
    }
    
    this.EditMarkpoint=function(){
        if(this.parent==null) return this.topDownEditMarksearch();
        return this.parent.EditMarkpoint();
    }
    
    this.topDownEditMarksearch=function(){
        var ans=null;
        if(this.state>=4) return this;
        if(this.cnum==0) return ans;
        for(var i=0;i<this.cnum;i++){
            if(this.ch[i]!=null){
                ans=this.ch[i].topDownEditMarksearch();
                if(ans!=null) return ans;
            }
        }
        return ans;
    }
    
    this.nextEDITpoint=function(){
        if(this.isLinear()){
            if(this.ch[this.cnum-1]!=null) return this.ch[this.cnum-1].nextEDITpoint();
            else return this.ch[cnum-1];
        }
        else return this;
    }
    
    this.previousEDITpoint=function(){
        if(this.isLinear()){
            if(this.parent!=null){
                if(this.isLeftOf2Cor1Aor3TorBR()) return this;
                else return this.parent.previousEDITpoint();
            }
            else return null;
        }
        else return this;
    }
    
    this.isLast=function(){
        if(this.parent==null) return false;
        if(this.parent.type==MathTOUCH.OP1P) return true;
        else if(this.parent.type==MathTOUCH.OP2C&&this.pnum==1) return true;
        else if(this.parent.type==MathTOUCH.OP3T&&this.pnum==2) return true;
        else if(this.parent.type==MathTOUCH.OP2P&&this.pnum==1) return true;
        else if(this.parent.type==MathTOUCH.OP3P&&this.pnum==2) return true;
        else if(this.parent.BraType()==1) return true;
        else return false;
    }
    
    this.theLeftTopNotLinear=function(){
        if(!this.isLinear()) return this;
        else if(this.isLast()) return this.parent.theLeftTopNotLinear();
        else return this;
    }
    
    this.theMostLeftNotLinear=function(){
        if(!this.isLinear()) return this;
        else if(this.isOP2Cor1Aor3TorBR()){
            if(this.type==MathTOUCH.OP3T){
                if(this.ch[1]!=null) return this.ch[1].theMostLeftNotLinear();
                else return this.ch[1];
            }
			else{
                if(this.ch[0]!=null) return this.ch[0].theMostLeftNotLinear();
                else return this.ch[0];
            }
        }
        else return this;
    }
    
    this.EDITpoint=function(){
        if(this.parent==null) return this.topDownEDITsearch();
        return this.parent.EDITpoint();
    }
    
    this.topDownEDITsearch=function(){
        var ans=null;
        if(this.type==MathTOUCH.EDIT&&this.editbox!=null) return this;
        if(this.cnum==0) return ans;
        for(var i=0;i<this.cnum;i++){
            if(this.ch[i]!=null){
                ans=this.ch[i].topDownEDITsearch();
                if(ans!=null) return ans;
            }
        }
        return ans;
    }
    
    this.topDownEMPsearch=function(){
        var ans=null;
        if(this.type==MathTOUCH.EMP&&this.val=="") return this;
        if(this.cnum==0) return ans;
        for(var i=0;i<this.cnum;i++){
            if(this.type==MathTOUCH.OP2C&&this.isLinear()&&i==0) continue;
            if(this.ch[i]!=null){
                ans=this.ch[i].topDownEMPsearch();
                if(ans!=null) return ans;
            }
        }
        return ans;
    }
    
    this.theLeftMostTopNotLinear=function(){
        if(this.parent==null) return this;
        else if(this.cnum>0&&!this.isLinear()) return this;
        else if(this.isLeftOf2Cor1Aor3TorBR()) return this.parent.theLeftMostTopNotLinear();
        else return this;
    }
    
    this.result=function(){
        var ans=this.copy();
        var ep=ans.EDITpoint();
        if(ep!=null){
            ep.clearBSframe();
            if(ep.parent!=null&&ep.parent.isSpaced()){
                if(ep.pnum==0){ ep.parent.change(ep.parent.ch[1].copy());}
                else{ ep.parent.change(ep.parent.ch[0].copy());}
            }
            else if(ep.parent!=null){
                if(ep.parent.type==MathTOUCH.OP1A){
                    if(ep.parent.parent!=null&&ep.parent.parent.isSpaced()){
                        ep.parent.change(ep.parent.parent.ch[0]);
                        ep.parent.parent.change(ep.parent);
                    }
                    else ep.parent.add(ep.pnum,new EmptyEXT(""));
                }
                else ep.parent.add(ep.pnum,new EmptyEXT(""));
            }
            else{ ans=null;
            }
        }
        return ans;
    }
    
    this.setEditBoxOnEditMark=function(eb){
        var tmp=this.EditMarkpoint();
        if(tmp==null) return null;
        else{
            tmp.clearEditMark();
            return tmp.addEditBox(eb);
        }
    }
    
    this.removeEditBox=function(){
        var ans=this;
        var ep=this.EDITpoint();
        if(ep!=null){
            if(ep.parent!=null&&ep.parent.isSpaced()){
                if(ep.pnum==0) ep.parent.change(ep.parent.ch[1]);
                else ep.parent.change(ep.parent.ch[0]);
            }
            else if(ep.parent!=null){
                if(ep.parent.type==MathTOUCH.OP1A){
                    if(ep.parent.parent!=null&&ep.parent.parent.isSpaced()){
                        ep.parent.change(ep.parent.parent.ch[0]);
                        ep.parent.parent.change(ep.parent);
                    }
                    else ep.parent.add(ep.pnum,new EmptyEXT(""));
                }
                else ep.parent.add(ep.pnum,new EmptyEXT(""));
            }
            else{ ans=null;}
        }
        else{}
        return ans;
    }
    
    this.deleteBSpoint=function(){
        var bsp=this.BSpoint();
        if(bsp==null){ return null;}
        var ans=null;
        if(bsp==this&&this.parent.isSpaced()&&this.pnum==1){
            if(this.parent.parent!=null&&this.parent.parent.isSpaced()&&this.parent.pnum==1&&this.parent.parent.ch[0].isLinear()){
                var temp0=this.parent.parent;
                temp0.change(temp0.ch[0]);
                var temp=temp0.nextEDITpoint();
                temp.change(temp.copy().spacedOn(new EditEXT(this.editbox)));
                ans=temp.ch[1];
            }
            else if(this.parent.parent!=null&&this.parent.parent.key==MathTOUCH.SP&&this.parent.pnum==1){
                var temp0=this.parent.parent;
                temp0.change(temp0.ch[0]);
                var temp=temp0.nextEDITpoint();
                temp.change(temp.copy().spacedOn(new EditEXT(this.editbox)));
                ans=temp.ch[1];
            }
            else{
                this.parent.change(new EditEXT(this.editbox));
                ans=this.parent;
            }
        }
        else if(!bsp.isLinear()&&bsp!=this){alert("BSpoint is not Linear nor Edit");
            ans=null;
        }
        else if(bsp.parent!=null){
            this.clearBSframe();
            if(bsp.parent.type==MathTOUCH.OP2C){
                if(this.parent.isSpaced()&&this.pnum==0){
                    this.parent.change(this.parent.ch[1].copy());
                    bsp.parent.change((bsp.parent.ch[0].spacedOn(this)).spacedOn(bsp.parent.ch[1].copy()));
                }else{
                    bsp.parent.change(bsp.parent.ch[0].spacedOn(bsp.parent.ch[1].copy()));
                }
                ans=bsp.parent.topDownEDITsearch();
            }
            else if(bsp.parent.type==MathTOUCH.OP1P){
                bsp.parent.change(bsp.copy());
                ans=bsp.parent.topDownEDITsearch();
            }
            else if(bsp.parent.type==MathTOUCH.OP2P){
                bsp.parent.change(bsp.parent.ch[0].spacedOn(bsp.parent.ch[1].copy()));
                ans=bsp.parent.topDownEDITsearch();
            }
            else if(bsp.parent.type==MathTOUCH.OP3P){
                bsp.parent.change(bsp.parent.ch[0].spacedOn(bsp.parent.ch[1].spacedOn(bsp.parent.ch[2].copy())));
                ans=bsp.parent.topDownEDITsearch();
            }
            else if(bsp.parent.type==MathTOUCH.OP3T){
                bsp.parent.change(bsp.parent.ch[1].spacedOn(bsp.parent.ch[0].spacedOn(bsp.parent.ch[2].copy())));
                ans=bsp.parent.topDownEDITsearch();
            }
            else if(bsp.parent.type==MathTOUCH.OP1A&&bsp==this){
                bsp.parent.change(new EditEXT(this.editbox));
                ans=bsp.parent;
            }
            else if(bsp.parent.type==MathTOUCH.OP1B){
                bsp.parent.change(bsp.copy());
                ans=bsp.parent.topDownEDITsearch();
            }
            else{
            }
        }
        else{
        }
        return ans;
    }
    
    this.retransBSpoint=function(){
        var bsp=this.BSpoint();
        if(bsp==null){ return null;}
        var ans=null;
        if(bsp==this&&this.parent.isSpaced()&&this.pnum==1){
            this.parent.change(this.parent.ch[0].copy());
            this.parent.state=0;
            ans=this.parent;
        }
        else if(!bsp.isLinear()&&bsp!=this){
            ans=null;
        }
        else if(bsp.parent!=null){
            if(bsp.parent.type==MathTOUCH.OP2C){
                if(this.parent.isSpaced()) this.parent.parent.add(this.parent.pnum,this.parent.ch[1]);
                else this.parent.add(this.pnum,new EmptyEXT(""));
                bsp.parent.state=0;
                ans=bsp.parent;
            }
            else if(bsp.parent.type==MathTOUCH.OP1P){
                if(this.parent.isSpaced()) this.parent.parent.add(this.parent.pnum,this.parent.ch[1]);
                else this.parent.add(this.pnum,new EmptyEXT(""));
                bsp.parent.state=0;
                ans=bsp.parent;
            }
            else if(bsp.parent.type==MathTOUCH.OP2P){
                if(bsp.pnum==1){
                    if(this.parent.isSpaced()) this.parent.parent.add(this.parent.pnum,this.parent.ch[1]);
                    else this.parent.add(this.pnum,new EmptyEXT(""));
                    bsp.parent.state=0;
                    ans=bsp.parent;
                }
                else{
                    if(this.parent.isSpaced()) this.parent.parent.add(this.parent.pnum,this.parent.ch[1]);
                    else this.parent.add(this.pnum,new EmptyEXT(""));
                    bsp.parent.state=0;
                    ans=bsp.parent;
                }
            }
            else if(bsp.parent.type==MathTOUCH.OP3P){
                if(bsp.pnum==2){
                    if(this.parent.isSpaced()) this.parent.parent.add(this.parent.pnum,this.parent.ch[1]);
                    else this.parent.add(this.pnum,new EmptyEXT(""));
                    bsp.parent.state=0;
                    ans=bsp.parent;
                }
                else if(bsp.pnum==1){
                    if(this.parent.isSpaced()) this.parent.parent.add(this.parent.pnum,this.parent.ch[1]);
                    else this.parent.add(this.pnum,new EmptyEXT(""));
                    bsp.parent.state=0;
                    ans=bsp.parent;
                }
                else{
                    if(this.parent.isSpaced()) this.parent.parent.add(this.parent.pnum,this.parent.ch[1]);
                    else this.parent.add(this.pnum,new EmptyEXT(""));
                    bsp.parent.state=0;
                    ans=bsp.parent;
                }
            }
            else if(bsp.parent.type==MathTOUCH.OP3T){
                if(bsp.pnum==2){
                    if(this.parent.isSpaced()) this.parent.parent.add(this.parent.pnum,this.parent.ch[1]);
                    else this.parent.add(this.pnum,new EmptyEXT(""));
                    bsp.parent.state=0;
                    ans=bsp.parent;
                }
                else if(bsp.pnum==0){
                    if(this.parent.isSpaced()) this.parent.parent.add(this.parent.pnum,this.parent.ch[1]);
                    else this.parent.add(this.pnum,new EmptyEXT(""));
                    bsp.parent.state=0;
                    ans=bsp.parent;
                }
                else{
                    if(this.parent.isSpaced()) this.parent.parent.add(this.parent.pnum,this.parent.ch[1]);
                    else this.parent.add(this.pnum,new EmptyEXT(""));
                    bsp.parent.state=0;
                    ans=bsp.parent;
                }
            }
            else if(bsp.parent.type==MathTOUCH.OP1A&&bsp==this){
                var tmp=bsp.parent.parent;
                if(tmp!=null&&tmp.isSpaced()&&bsp.parent.pnum==1){
                    bsp.parent.add(0,tmp.ch[0].copy());
                    tmp.change(bsp.parent);
                    tmp.state=0;
                    ans=tmp;
                }
                else ans=null;
            }
            else if(bsp.parent.type==MathTOUCH.OP1B){
                if(this.parent.isSpaced()) this.parent.parent.add(this.parent.pnum,this.parent.ch[1]);
                else this.parent.add(this.pnum,new EmptyEXT(""));
                bsp.parent.state=0;
                ans=bsp.parent;
            }
            else{
            }
        }
        else{
        }
        return ans;
    }
    
    this.isLinear=function(){
        if(this.isSpaced()) return true;
        else if(this.type==MathTOUCH.OP2C){
            if(this.key==OTB.theNumberOf("/")&&this.order==1) return false;
            else if(this.key==OTB.theNumberOf("root")&&this.order==0) return false;
            else if(this.key==OTB.theNumberOf("sqrt")&&this.order==0) return false;
            else if(this.key==MathTOUCH.SP&&this.order>0) return false;
            else if(this.key==OTB.theNumberOf("^")) return false;
            else if(this.key==OTB.theNumberOf("_")) return false;
            else if(this.key==OTB.theNumberOf("backslash")&&this.order==1) return false;
            else return true;
        }
        else if(this.type==MathTOUCH.OP1P){
            if(this.key==OTB.theNumberOf("~")&&this.order>0) return false;
            else if(this.key==OTB.theNumberOf("root")) return false;
            else if(this.key==OTB.theNumberOf("sqrt")) return false;
            else if(this.key==OTB.theNumberOf("integral")) return false;
            else if(this.key==OTB.theNumberOf("_")) return false;
            else if(this.key==OTB.theNumberOf("bigcap")) return false;
            else if(this.key==OTB.theNumberOf("bigcup")) return false;
            else if(this.key==OTB.theNumberOf("bigodot")) return false;
            else if(this.key==OTB.theNumberOf("bigoplus")) return false;
            else if(this.key==OTB.theNumberOf("bigotimes")) return false;
            else if(this.key==OTB.theNumberOf("bigsqcap")) return false;
            else if(this.key==OTB.theNumberOf("bigsqcup")) return false;
            else if(this.key==OTB.theNumberOf("biguplus")) return false;
            else if(this.key==OTB.theNumberOf("bigvee")) return false;
            else if(this.key==OTB.theNumberOf("bigwedge")) return false;
            else if(this.key==OTB.theNumberOf("coprod")) return false;
            else if(this.key==OTB.theNumberOf("cos-1")) return false;
            else if(this.key==OTB.theNumberOf("lim")) return false;
            else if(this.key==OTB.theNumberOf("liminf")) return false;
            else if(this.key==OTB.theNumberOf("limsup")) return false;
            else if(this.key==OTB.theNumberOf("oint")) return false;
            else if(this.key==OTB.theNumberOf("prod")) return false;
            else if(this.key==OTB.theNumberOf("sin-1")) return false;
            else if(this.key==OTB.theNumberOf("sum")) return false;
            else if(this.key==OTB.theNumberOf("tan-1")) return false;
            else if(this.key==OTB.theNumberOf("vee")&&(this.order>0)) return false;
            else return true;
        }
        else return false;
    }
    
    this.BSpoint=function(){
        var ans=null;
        if(this.type!=MathTOUCH.EDIT||this.editbox==null) return null;
        if(this.parent!=null){
            if(this.parent.isSpaced()){
                if(this.pnum==1) ans=this;
                else ans=this.theLeftMostTopNotLinear();
            }
            else if(this.parent.type==MathTOUCH.OP1A||this.parent.BraType()==2) ans=this;
            else ans=this.theLeftMostTopNotLinear();
        }
        return ans;
    }
    
    this.setBSframe=function(c){
        if(this.type!=MathTOUCH.EDIT||this.editbox==null) return;
        var bsp=this.BSpoint();
        if(bsp!=null){
            if(bsp==this&&this.parent.isSpaced()&&this.pnum==1) this.parent.ch[0].setFrameColor(c);
            else if(bsp.parent!=null&&!bsp.isLeftOf2Cor1Aor3TorBR()&&(bsp.isLinear()||bsp==this)){
                if(!((bsp.parent.type==MathTOUCH.OP2P&&bsp.pnum==1)||(bsp.parent.type==MathTOUCH.OP3P&&bsp.pnum==1)||(bsp.parent.type==MathTOUCH.OP3P&&bsp.pnum==2)||(bsp.parent.type==MathTOUCH.OP3T&&bsp.pnum==0)))
                    bsp.parent.setOpeFrameColor(c);
            }
            else if(bsp==this&&(this.parent.type==MathTOUCH.OP1A || this.parent.BraType()==2)) bsp.parent.setOpeFrameColor(c);
        }
    }
    
    this.clearBSframe=function(){
        if(this.type!=MathTOUCH.EDIT||this.editbox==null) return;
        var bsp=this.BSpoint();
        if(bsp!=null){
            if(bsp==this&&this.parent.isSpaced()&&this.pnum==1) this.parent.ch[0].clearFrameColor();
            else if(bsp.parent!=null&&!bsp.isLeftOf2Cor1Aor3TorBR()&&(bsp.isLinear()||bsp==this)){
                if(!((bsp.parent.type==MathTOUCH.OP2P&&bsp.pnum==1)||(bsp.parent.type==MathTOUCH.OP3P&&bsp.pnum==1)||(bsp.parent.type==MathTOUCH.OP3P&&bsp.pnum==2)||(bsp.parent.type==MathTOUCH.OP3T&&bsp.pnum==0)))
                    bsp.parent.clearOpeFrameColor();
            }
            else if(bsp==this&&(this.parent.type==MathTOUCH.OP1A || this.parent.BraType()==2)) bsp.parent.clearOpeFrameColor();
        }
    }
    
    this.moveBoxToLeft=function(){
        if(this.type!=MathTOUCH.EDIT||this.editbox==null) return null;
        this.clearBSframe();
        var ans=null;
        var bsp=this.BSpoint();
        var tmp=null;
        if(bsp!=null){
            if(bsp==this&&this.parent.isSpaced()&&this.pnum==1){
                tmp=this.parent.ch[0];
                if(tmp.cnum==0){
                }
                else{
                    tmp.add(tmp.cnum-1,tmp.ch[tmp.cnum-1].spacedOn(new EditEXT(this.editbox)));
                    this.parent.change(tmp.copy());
                    ans=this.parent.ch[tmp.cnum-1].ch[1];
                }
            }
        }
        else{
            ans=null;
        }
        return ans;
    }
    
    this.moveBoxToRight=function(){
        if(this.type!=MathTOUCH.EDIT||this.editbox==null) return null;
        this.clearBSframe();
        var ans=null;
        var tmp=null;
        if(this.parent!=null){
            if(this.parent.isSpaced()){
                if(this.pnum==1){
                    if(this.parent.parent!=null){
                        var ppt=this.parent.parent.type;
                        if(this.parent.pnum==this.parent.parent.cnum-1){
                            this.parent.parent.add(this.parent.pnum,this.parent.ch[0]);
                            this.parent.parent.change(this.parent.parent.spacedOn(new EditEXT(this.editbox)));
                            ans=this.parent.parent.ch[1];
                        }
                    }
                    else return null;
                }
                else{
                    this.parent.change(this.parent.ch[1].copy().spacedOn(new EditEXT(this.editbox)));
                    ans=this.parent.ch[1];
                }
            }
            else{
                this.change(new EmptyEXT(""));
                if(this.pnum<this.parent.cnum-1){
                    if(this.parent.ch[this.pnum+1].isEmpty()){
                        this.parent.add(this.pnum+1,new EditEXT(this.editbox));
                        ans=this.parent.ch[this.pnum+1];
                    }
                    else{
                        this.parent.ch[this.pnum+1].change(new EditEXT(this.editbox).spacedOn(this.parent.ch[this.pnum+1].copy()));
                        ans=this.parent.ch[this.pnum+1].ch[0];
                    }
                }
                else{
                    this.parent.change(this.parent.copy().spacedOn(new EditEXT(this.editbox)));
                    ans=this.parent.ch[1];
                }
            }
        }
        return ans;
    }
    
    this.moveEditToLeft=function(){
        if(this.type!=MathTOUCH.EDIT||this.editbox==null) return null;
        this.clearBSframe();
        var ans=null;
        var bsp=this.BSpoint();
        var tmp=null;
        if(bsp!=null){
            if(bsp==this&&this.parent.isSpaced()&&this.pnum==1){
                tmp=this.parent.ch[0];
                if(tmp.cnum==0){
                    this.parent.change(tmp.copy());
                    var tmp2=this.parent.theLeftMostTopNotLinear();
                    if(tmp2.parent!=null&&tmp2.parent.isSpaced()&&tmp2.pnum==1){
                        tmp=tmp2.parent.ch[0];
                        tmp.change(tmp.copy().spacedOn(new EditEXT(this.editbox)));
                        ans=tmp.ch[1];
                    }
                    else{
                        this.parent.change(new EditEXT(this.editbox).spacedOn(tmp.copy()));
                        ans=this.parent.ch[0];
                    }
                }
                else{
                    if(tmp.type==MathTOUCH.OP1A || tmp.BraType()==2){
                        this.change(new EXtree1(tmp.state,tmp.key,tmp.order,new EditEXT(this.editbox),tmp.inputWord));
                        this.parent.add(0,tmp.ch[0].copy());
                        ans=this.ch[0];
                    }
                    else{
                        this.parent.change(tmp.copy());
                        if(this.parent.ch[this.parent.cnum-1]!=null){
                            var tmp2=this.parent.ch[this.parent.cnum-1].nextEDITpoint();
                            if(tmp2.isEmpty()){
                                tmp2.change(new EditEXT(this.editbox));
                                ans=tmp2;
                            }
                            else{
                                tmp2.change(tmp2.copy().spacedOn(new EditEXT(this.editbox)));
                                ans=tmp2.ch[1];
                            }
                        }
                        else{
                            this.parent.add(this.parent.cnum-1,new EditEXT(this.editbox));
                            ans=this.parent.ch[this.parent.cnum-1];
                        }
                    }
                }
            }
            else if(!bsp.isLinear()){
                if(this.parent.isSpaced()){
                    if(this.parent.parent!=null) this.parent.parent.add(this.parent.pnum,this.parent.ch[1]);
                    else return null;
                    if(bsp.key==MathTOUCH.SP&&bsp.order==3&&bsp.pnum==0&&bsp.parent!=null&&bsp.parent.key==MathTOUCH.SP&&bsp.parent.order==2){
                        bsp.parent.change(new EditEXT(this.editbox).spacedOn(bsp.parent.copy()));
                        ans=bsp.parent.ch[0];
                    }
                    else{
                        bsp.change(new EditEXT(this.editbox).spacedOn(bsp.copy()));
                        ans=bsp.ch[0];
                    }
                }
                else if(bsp==this&&(this.parent.type==MathTOUCH.OP1A || this.parent.BraType()==2)){
                    if(this.parent.parent!=null&&this.parent.parent.isSpaced()&&this.parent.pnum==1){
                        tmp=this.parent.parent.ch[0].copy().spacedOn(new EditEXT(this.editbox));
                        this.parent.parent.change(new EXtree1(this.parent.state,this.parent.key,this.parent.order,tmp,this.parent.inputWord));
                        ans=tmp.ch[1];
                    }
                }
                else if(bsp==this&&this.parent.type==MathTOUCH.MAT){
                    this.parent.add(this.pnum,new EmptyEXT(""));
                    if(this.pnum>0){
                        if(this.parent.ch[this.pnum-1]!=null){
                            this.parent.add(this.pnum-1,this.parent.ch[this.pnum-1].copy().spacedOn(new EditEXT(this.editbox)));
                            ans=this.parent.ch[this.pnum-1].ch[1];
                        }
                        else{
                            this.parent.add(this.pnum-1,new EditEXT(this.editbox));
                            ans=this.parent.ch[this.pnum-1];
                        }
                    }
                    else{
                        this.parent.change(new EditEXT(this.editbox).spacedOn(this.parent.copy()));
                        ans=this.parent.ch[0];
                    }
                }
                else{
                    this.parent.add(this.pnum,new EmptyEXT(""));
                    bsp.change(new EditEXT(this.editbox).spacedOn(bsp.copy()));
                    ans=bsp.ch[0];
                }
                
            }
            else if(bsp.parent!=null){
                if(bsp.parent.type==MathTOUCH.OP2C){
                    bsp.removeEditBox();
                    if(bsp.parent.key==MathTOUCH.SP&&bsp.parent.order==2){
                        tmp=bsp.parent.ch[0];
                        if(tmp.key==MathTOUCH.SP&&tmp.order==3){
                            tmp.add(1,tmp.ch[1].copy().spacedOn(new EditEXT(this.editbox)));
                            ans=tmp.ch[1].ch[1];
                        }
                        else{ans=null; alert("x_{}^{}error in moveEditToLeft/EXtree.java");}
                    }
                    else{
                        tmp=bsp.parent.ch[0].nextEDITpoint();
                        if(tmp.isEmpty()){
                            tmp.change(new EditEXT(this.editbox));
                            ans=tmp;
                        }
                        else{
                            tmp.change(tmp.spacedOn(new EditEXT(this.editbox)));
                            ans=tmp.ch[1];
                        }
                    }
                }
                else if(bsp.parent.type==MathTOUCH.OP2P){
                    if(bsp.pnum==1){
                        bsp.removeEditBox();
                        tmp=bsp.parent.ch[0].nextEDITpoint();
                        if(tmp.isEmpty()){
                            tmp.change(new EditEXT(this.editbox));
                            ans=tmp;
                        }
                        else{
                            tmp.change(tmp.spacedOn(new EditEXT(this.editbox)));
                            ans=tmp.ch[1];
                        }
                    }
                    else{
                        bsp.removeEditBox();
                        bsp.parent.change(new EditEXT(this.editbox).spacedOn(bsp.parent.copy()));
                        ans=bsp.parent.ch[0];
                    }
                }
                else if(bsp.parent.type==MathTOUCH.OP3P){
                    if(bsp.pnum==2||bsp.pnum==1){
                        bsp.removeEditBox();
                        tmp=bsp.parent.ch[bsp.pnum-1].nextEDITpoint();
                        if(tmp.isEmpty()){
                            tmp.change(new EditEXT(this.editbox));
                            ans=tmp;
                        }
                        else{
                            tmp.change(tmp.spacedOn(new EditEXT(this.editbox)));
                            ans=tmp.ch[1];
                        }
                    }
                    else{
                        bsp.removeEditBox();
                        bsp.parent.change(new EditEXT(this.editbox).spacedOn(bsp.parent.copy()));
                        ans=bsp.parent.ch[0];
                    }
                }
                else if(bsp.parent.type==MathTOUCH.OP3T){
                    if(bsp.pnum==2){
                        bsp.removeEditBox();
                        tmp=bsp.parent.ch[0].nextEDITpoint();
                        if(tmp.isEmpty()){
                            tmp.change(new EditEXT(this.editbox));
                            ans=tmp;
                        }
                        else{
                            tmp.change(tmp.spacedOn(new EditEXT(this.editbox)));
                            ans=tmp.ch[1];
                        }
                    }
                    else if(bsp.pnum==0){
                        bsp.removeEditBox();
                        tmp=bsp.parent.ch[1].nextEDITpoint();
                        if(tmp.isEmpty()){
                            tmp.change(new EditEXT(this.editbox));
                            ans=tmp;
                        }
                        else{
                            tmp.change(tmp.spacedOn(new EditEXT(this.editbox)));
                            ans=tmp.ch[1];
                        }
                    }
                    else{
                        bsp.removeEditBox();
                        bsp.parent.change(new EditEXT(this.editbox).spacedOn(bsp.parent.copy()));
                        ans=bsp.parent.ch[0];
                    }
                }
                else if(bsp.parent.type==MathTOUCH.MAT){
                    if(bsp.pnum>0){
                        bsp.removeEditBox();
                        if(bsp.parent.ch[bsp.pnum-1]!=null){
                            tmp=bsp.parent.ch[bsp.pnum-1].nextEDITpoint();
                            if(tmp.isEmpty()){
                                tmp.change(new EditEXT(this.editbox));
                                ans=tmp;
                            }
                            else{
                                tmp.change(tmp.spacedOn(new EditEXT(this.editbox)));
                                ans=tmp.ch[1];
                            }
                        }
                        else{
                            bsp.parent.add(bsp.pnum-1,new EditEXT(this.editbox));
                            ans=bsp.parent.ch[bsp.pnum-1];
                        }
                    }
                    else{
                        bsp.removeEditBox();
                        bsp.parent.change(new EditEXT(this.editbox).spacedOn(bsp.parent.copy()));
                        ans=bsp.parent.ch[0];
                    }
                }
                else{
                    bsp.removeEditBox();
                    bsp.parent.change(new EditEXT(this.editbox).spacedOn(bsp.parent.copy()));
                    ans=bsp.parent.ch[0];
                }
            }
            else{
                if(this.parent.isSpaced()){
                    if(this.parent.parent!=null) this.parent.parent.add(this.parent.pnum,this.parent.ch[1]);
                    else return null;
                }
                else this.parent.add(this.pnum,new EmptyEXT(""));
                bsp.change(new EditEXT(this.editbox).spacedOn(bsp.copy()));
                ans=bsp.ch[0];
            }
        }
        else{
            ans=null;
        }
        return ans;
    }
    
    this.moveEditToRight=function(){
        if(this.type!=MathTOUCH.EDIT||this.editbox==null) return null;
        this.clearBSframe();
        var ans=null;
        var tmp=null;
        if(this.parent!=null){
            if(this.parent.isSpaced()){
                if(this.pnum==1){
                    tmp=this.parent.theLeftTopNotLinear();
                    if(tmp.parent==null){
                            this.parent.change(this.parent.ch[0]);
                            tmp.change(tmp.copy().spacedOn(new EditEXT(this.editbox)));
                            ans=tmp.ch[1];
                    }
                    else if(!tmp.isLinear()){
                        if(tmp.key==MathTOUCH.SP&&tmp.order==3&&tmp.pnum==0&&tmp.parent!=null&&tmp.parent.key==MathTOUCH.SP&&tmp.parent.order==2){
                            this.parent.change(this.parent.ch[0]);
                            tmp.parent.add(1,new EditEXT(this.editbox).spacedOn(tmp.parent.ch[1].copy()));
                            ans=tmp.parent.ch[1].ch[0];
                        }
                        else{
                            this.parent.change(this.parent.ch[0]);
                            tmp.change(tmp.copy().spacedOn(new EditEXT(this.editbox)));
                            ans=tmp.ch[1];
                        }
                    }
                    else if(tmp.parent.isSpaced()&&tmp.pnum==0){
                        this.parent.change(this.parent.ch[0]);
                        ans=tmp.parent.ch[1].theMostLeftNotLinear();
                        if(ans.isEmpty()){
                            ans.change(new EditEXT(this.editbox));
                        }
                        else{
                            ans.change(ans.copy().spacedOn(new EditEXT(this.editbox)));
                            ans=ans.ch[1];
                        }
                    }
                    else if(tmp.parent.type==MathTOUCH.OP2C||tmp.parent.type==MathTOUCH.OP2P||tmp.parent.type==MathTOUCH.OP3P){
                        this.parent.change(this.parent.ch[0]);
                        ans=tmp.parent.ch[tmp.pnum+1].theMostLeftNotLinear();
                        if(ans.isEmpty()){
                            ans.change(new EditEXT(this.editbox));
                        }
                        else{
                            ans.change(new EditEXT(this.editbox).spacedOn(ans.copy()));
                            ans=ans.ch[0];
                        }
                    }
                    else if(tmp.parent.type==MathTOUCH.OP1A||tmp.parent.BraType()==2){
                        this.parent.change(this.parent.ch[0]);
                        tmp.parent.change(tmp.copy().spacedOn(new EXtree1(tmp.parent.state,tmp.parent.key,tmp.parent.order,new EditEXT(this.editbox),tmp.parent.inputWord)));
                        ans=tmp.parent.ch[1].ch[0];
                    }
                    else if(tmp.parent.type==MathTOUCH.OP3T&&tmp.pnum==1){
                        this.parent.change(this.parent.ch[0]);
                        ans=tmp.parent.ch[0].theMostLeftNotLinear();
                        if(ans.isEmpty()){
                            ans.change(new EditEXT(this.editbox));
                        }
                        else{
                            ans.change(new EditEXT(this.editbox).spacedOn(ans.copy()));
                            ans=ans.ch[0];
                        }
                    }
                    else if(tmp.parent.type==MathTOUCH.OP3T&&tmp.pnum==0){
                        this.parent.change(this.parent.ch[0]);
                        ans=tmp.parent.ch[2].theMostLeftNotLinear();
                        if(ans.isEmpty()){
                            ans.change(new EditEXT(this.editbox));
                        }
                        else{
                            ans.change(new EditEXT(this.editbox).spacedOn(ans.copy()));
                            ans=ans.ch[0];
                        }
                    }
                    else if(tmp.parent.BraType()==0){
                        this.parent.change(this.parent.ch[0]);
                        tmp.parent.change(tmp.parent.copy().spacedOn(new EditEXT(this.editbox)));
                        ans=tmp.parent.ch[1];
                    }
                    else if(tmp.parent.type==MathTOUCH.MAT&&tmp.pnum<tmp.parent.cnum-1){
                        this.parent.change(this.parent.ch[0]);
                        if(tmp.parent.ch[tmp.pnum+1]!=null){
                            ans=tmp.parent.ch[tmp.pnum+1].theMostLeftNotLinear();
                            if(ans.isEmpty()){
                                ans.change(new EditEXT(this.editbox));
                            }
                            else{
                                ans.change(new EditEXT(this.editbox).spacedOn(ans.copy()));
                                ans=ans.ch[0];
                            }
                        }
                        else{
                            tmp.parent.add(tmp.pnum+1,new EditEXT(this.editbox));
                            ans=tmp.parent.ch[tmp.pnum+1];
                        }
                    }
                    else if(tmp.parent.type==MathTOUCH.MAT&&tmp.pnum<tmp.parent.cnum){
                        this.parent.change(this.parent.ch[0]);
                        tmp.parent.change(tmp.parent.copy().spacedOn(new EditEXT(this.editbox)));
                        ans=tmp.parent.ch[1];
                    }
                    else{}
                }
                else{
                    if(this.parent.ch[1].cnum==0){
                        this.parent.change(this.parent.ch[1].spacedOn(new EditEXT(this.editbox)));
                        ans=this.parent.ch[1];
                    }
                    else{
                        this.parent.change(this.parent.ch[1].copy());
                        tmp=this.parent.theMostLeftNotLinear();
                        if(tmp.key==MathTOUCH.SP&&tmp.order==2){
                            if(tmp.ch[0].key==MathTOUCH.SP&&tmp.ch[0].order==3){
                                tmp.ch[0].add(0,new EditEXT(this.editbox).spacedOn(tmp.ch[0].ch[0].copy()));
                                ans=tmp.ch[0].ch[0].ch[0];
                            }
                            else ans=null;
                        }
                        else if(tmp==this.parent){
                            tmp=this.parent.ch[0].theMostLeftNotLinear();
                            if(tmp.isEmpty()){
                                tmp.change(new EditEXT(this.editbox));
                                ans=tmp;
                            }
                            else{
                                tmp.change(new EditEXT(this.editbox).spacedOn(tmp.copy()));
                                ans=tmp.ch[0];
                            }
                        }
                        else if(tmp.isEmpty()){
                            tmp.change(new EditEXT(this.editbox));
                            ans=tmp;
                        }
                        else{
                            tmp.change(new EditEXT(this.editbox).spacedOn(tmp.copy()));
                            ans=tmp.ch[0];
                        }
                    }
                }
            }
            else if((this.parent.type==MathTOUCH.OP1A||this.parent.BraType()==2)&&this.parent.parent!=null&&this.parent.parent.isSpaced()&&this.parent.pnum==1){
                tmp=this.parent.parent;
                tmp.add(0,new EXtree1(this.parent.state,this.parent.key,this.parent.order,tmp.ch[0].copy(),this.parent.inputWord));
                tmp.add(1,new EditEXT(this.editbox));
                ans=tmp.ch[1];
            }
            else{
                var ppt=this.parent.type;
                if(this.pnum==this.parent.cnum-1){
                    tmp=this.parent.previousEDITpoint();
                    if(tmp!=null){
                        this.parent.add(this.pnum,new EmptyEXT(""));
                        tmp.change(tmp.spacedOn(new EditEXT(this.editbox)));
                        ans=tmp.ch[1];
                    }
                }
                else if(ppt==MathTOUCH.OP2C||ppt==MathTOUCH.OP2P||ppt==MathTOUCH.OP3P){
                    this.parent.add(this.pnum,new EmptyEXT(""));
                    tmp=this.parent.ch[this.pnum+1].theMostLeftNotLinear();
                    if(tmp.isEmpty()){
                        tmp.change(new EditEXT(this.editbox));
                        ans=tmp;
                    }
                    else{
                        tmp.change(new EditEXT(this.editbox).spacedOn(tmp.copy()));
                        ans=tmp.ch[0];
                    }
                }
                else if(ppt==MathTOUCH.OP3T){
                    this.parent.add(this.pnum,new EmptyEXT(""));
                    if(this.pnum==0) tmp=this.parent.ch[2].theMostLeftNotLinear();
                    else tmp=this.parent.ch[0].theMostLeftNotLinear();
                    if(tmp.isEmpty()){
                        tmp.change(new EditEXT(this.editbox));
                        ans=tmp;
                    }
                    else{
                        tmp.change(new EditEXT(this.editbox).spacedOn(tmp.copy()));
                        ans=tmp.ch[0];
                    }
                }
                else if(ppt==MathTOUCH.MAT&&this.pnum<this.parent.cnum-1){
                    this.parent.add(this.pnum,new EmptyEXT(""));
                    if(this.parent.ch[this.pnum+1]!=null){
                        ans=this.parent.ch[this.pnum+1].theMostLeftNotLinear();
                        if(ans.isEmpty()){
                            ans.change(new EditEXT(this.editbox));
                        }
                        else{
                            ans.change(new EditEXT(this.editbox).spacedOn(ans.copy()));
                            ans=ans.ch[0];
                        }
                    }
                    else{
                        this.parent.add(this.pnum+1,new EditEXT(this.editbox));
                        ans=this.parent.ch[pnum+1];
                    }
				}
                else if(ppt==MathTOUCH.MAT&&this.pnum<this.parent.cnum){
                    this.parent.add(this.pnum,new EmptyEXT(""));
                    this.parent.change(this.parent.copy().spacedOn(new EditEXT(this.editbox)));
                    ans=this.parent.ch[1];
				}
                else{}
            }
        }
        return ans;
    }
    
    this.fracChild=function(pn){
        var ans=this;
        while(ans.parent!=null){
            if(ans.parent.type==MathTOUCH.OP2C&&OTB.theEXcode(ans.parent.key,ans.parent.order)=="C7frac"&&ans.pnum==pn) return ans;
            ans=ans.parent;
        }
        return null;
    }

    this.matChild=function(){
        var ans=this;
        if(ans.type==MathTOUCH.MAT) return null;
        while(ans.parent!=null){
            if(ans.parent.type==MathTOUCH.MAT) return ans;
            ans=ans.parent;
        }
        return null;
    }
    
    this.moveEditToUp=function(){
        if(this.type!=MathTOUCH.EDIT||this.editbox==null) return null;
        var fch=this.fracChild(1);
        if(fch!=null){
            this.clearBSframe();
            fch.removeEditBox();
            var tmp=fch.parent.ch[0];
            tmp.change(tmp.copy().spacedOn(new EditEXT(this.editbox)));
            ans=tmp.ch[1];
            return ans;
        }
        var mch=this.matChild();
        if(mch==null) return null;
        this.clearBSframe();
        var elemnum=mch.pnum-mch.parent.colnum;
        if(elemnum<0) return null;
        var ans=null;
        var tmp=null;
        if(mch==this||(this.parent.isSpaced()&&this.pnum==0&&mch==this.parent)){
            mch.removeEditBox();
            if(mch.parent.ch[elemnum]!=null){
                tmp=mch.parent.ch[elemnum].theMostLeftNotLinear();
                tmp.change(new EditEXT(this.editbox).spacedOn(tmp.copy()));
                ans=tmp.ch[0];
            }
            else{
                mch.parent.ch[elemnum]=new EditEXT(this.editbox);
                ans=mch.parent.ch[elemnum];
            }
        }
        else{
            mch.removeEditBox();
            if(mch.parent.ch[elemnum]!=null){
                tmp=mch.parent.ch[elemnum].nextEDITpoint();
                tmp.change(tmp.spacedOn(new EditEXT(this.editbox)));
                ans=tmp.ch[1];
            }
            else{
                mch.parent.ch[elemnum]=new EditEXT(this.editbox);
                ans=mch.parent.ch[elemnum];
            }
        }
        return ans;
    }
    
    this.moveEditToDown=function(){
        if(this.type!=MathTOUCH.EDIT||this.editbox==null) return null;
        var fch=this.fracChild(0);
        if(fch!=null){
            this.clearBSframe();
            fch.removeEditBox();
            var tmp=fch.parent.ch[1];
            tmp.change(tmp.copy().spacedOn(new EditEXT(this.editbox)));
            ans=tmp.ch[1];
            return ans;
        }
        var mch=this.matChild();
        if(mch==null) return null;
        this.clearBSframe();
        var elemnum=mch.pnum+mch.parent.colnum;
        if(elemnum>=mch.parent.rownum*mch.parent.colnum) return null;
        var ans=null;
        var tmp=null;
        if(mch==this||(this.parent.isSpaced()&&this.pnum==0&&mch==this.parent)){
            mch.removeEditBox();
            if(mch.parent.ch[elemnum]!=null){
                tmp=mch.parent.ch[elemnum].theMostLeftNotLinear();
                tmp.change(new EditEXT(this.editbox).spacedOn(tmp.copy()));
                ans=tmp.ch[0];
            }
            else{
                mch.parent.ch[elemnum]=new EditEXT(this.editbox);
                ans=mch.parent.ch[elemnum];
            }
        }
        else{
            mch.removeEditBox();
            if(mch.parent.ch[elemnum]!=null){
                tmp=mch.parent.ch[elemnum].nextEDITpoint();
                tmp.change(tmp.spacedOn(new EditEXT(this.editbox)));
                ans=tmp.ch[1];
            }
            else{
                mch.parent.ch[elemnum]=new EditEXT(this.editbox);
                ans=mch.parent.ch[elemnum];
            }
        }
        return ans;
    }

}

	EXtree.prototype.toExRep=function(){
		var ans;
		switch(this.type){
			case 0:
				ans=new exR.EmptyEx(this.val);
				break;
			case 1:
				if(this.val.charAt(0)=='b'){
                    ans=new exR.NumberRep(this.val.substring(1));
                    ans.setFace("bold");
                }
				else ans=new exR.NumberRep(this.val);
				break;
			case 2:
            case 3:
				ans=this.TexSymboltoRep(this.type,this.val);
				break;
			case 12:
				ans=new exR.Mbox(this.val);
				break;
			case 100:
				ans=EXTML.parse(this.inputWord,this.val).toExRep();
				if(this.state<2){ this.frameColor=7;}
				break;
			case 10:
				var elem=new Array();
				for(var i=0;i<this.rownum;i++){
                    elem[i]=new Array();
                    for(var j=0;j<this.colnum;j++){
                        if(this.ch[i * this.colnum+j]==null) elem[i][j]=new exR.NullEx();
                        else elem[i][j]=this.ch[i * this.colnum+j].toExRep();
                    }
				}
				ans=new exR.MatrixEx(this.rownum,this.val,elem);
				if(this.MatColum>=0) ans.setMatColum(this.MatColum);
				break;
			case MathTOUCH.EDIT:
				ans=this.editbox;
				break;
			default:
				var excode=OTB.theEXcode(this.key,this.order);
				var opec=excode.charAt(1);
				excode=excode.substring(2);
				switch(this.type){
					case 4: ans=this.OP1PexRep(opec,excode);
							break;
					case 5: ans=this.OP1AexRep(opec,excode);
							break;
					case 6: ans=this.OP1BexRep(opec,excode);
							break;
					case 7: ans=this.OP2CexRep(opec,excode);
							break;
					case 8: ans=this.OP2PexRep(opec,excode);
							break;
					case 9:	ans=this.OP3PexRep(opec,excode);
							break;
					case 11:	ans=this.OP3TexRep(opec,excode);
							break;
					default:
						ans=new exR.NullEx();
				}
		}
		if(this.baseColor!=0){
			ans.setBaseColor(this.baseColor);
		}
		if(this.opeColor>0){ ans.setOpeColor(this.opeColor);}
		if(this.opeBackColor>0){ans.setOpeBackColor(this.opeBackColor);}
		if(this.opeFrameColor>0){ans.setOpeFrameColor(this.opeFrameColor);}
		if(this.backColor>0) ans.setBackColor(this.backColor);
		if(this.frameColor>0) ans.setFrameColor(this.frameColor);
		return ans;
	}
    
    EXtree.prototype.TexSymboltoRep=function(ty,valstr){
        var ans;
        var head;
        if(valstr.charAt(0)=='\\'){
            if(valstr.length>6){
                head=valstr.substring(1,5);
                if(head=="bold"){
                    var vv=valstr.substring(12,13);
                    ans=new exR.VariableEx(vv);
                    ans.setFace("bold Italic");
                }
                else if(head=="math"){
                    var fc=valstr.substring(5,7);
                    var vv;
                    if(fc=="rm"){
                        vv=valstr.substring(8,9);
                        ans=new exR.VariableEx(vv);
                        ans.setFace("");
                    }
                    else if(fc=="bf"){
                        vv=valstr.substring(8,9);
                        ans=new exR.VariableEx(vv);
                        ans.setFace("bold");
                    }
                    else if(fc=="ca"){
                        vv=valstr.substring(9,10);
                        ans=new exR.VariableEx(vv);
                        ans.setFont("Lucida Calligraphy");
                    }
                    else if(fc=="sf"){
                        vv=valstr.substring(8,9);
                        ans=new exR.VariableEx(vv);
                        ans.setFont("Lucida Sans Unicode");
						ans.setFace("");
                    }
                }
                else{
                    head=valstr.substring(1);
					if(ty==2){
						ans=new exR.VariableEx(head);
						ans.setFace("");
					}
                    else{
						ans=new exR.SymbolRep(head);
						ans.setFace("");
					}
					
                }
            }
            else{
                head=valstr.substring(1);
                if(ty==2){
					ans=new exR.VariableEx(head);
					ans.setFace("");
				}
                else{
					ans=new exR.SymbolRep(head);
					ans.setFace("");
				}
            }
        }
        else{
            if(ty==2) ans=new exR.VariableEx(valstr);
            else ans=new exR.SymbolRep(valstr);
        }
        return ans;
    }
		
	EXtree.prototype.OP1PexRep=function(opec,excode){
		var ans;
		switch(opec){
			case '0':
				ans=new exR.LeftOpeEx(excode,this.ch[0].toExRep());
				break;
			case '1':
				ans=new exR.SqrtEx(this.ch[0].toExRep());
				break;
			case '2':
				ans=new exR.TopEx(excode,this.ch[0].toExRep());
                ans.setSubRatio(1.0);
                ans.setUp(0.3);
				break;
			case '3':
				ans=new exR.TopEx(excode,this.ch[0].toExRep());
                ans.setSubRatio(1.0);
                ans.setUp(0.6);
				break;
			case '4':
				ans=new exR.TopEx(excode,this.ch[0].toExRep());
                ans.setSubRatio(1.0);
                ans.setUp(0.4);
				break;
			case '5':
				ans=new exR.OverlineEx(this.ch[0].toExRep());
				break;
			case '6':
				ans=new exR.TopEx(excode,this.ch[0].toExRep());
                ans.setSubRatio(0.6);
                ans.setUp(0.6);
				break;
			case '7':
				ans=new exR.WideVecEx(this.ch[0].toExRep());
				break;
			case '8':
				ans=new exR.UnderlineEx(this.ch[0].toExRep());
				break;
			case '9':
				if(excode=="int") ans=new exR.IntegralEx(null,this.ch[0].toExRep(),null,null);
				else ans=new exR.IntegralEx(excode,this.ch[0].toExRep(),null,null);
				break;
			case 'a':
				ans=new exR.LeftOpeSuperscriptEx(excode,new exR.LeftOpeEx("-",new exR.NumberRep('1')),this.ch[0].toExRep());
				break;
			case 'b':
				ans=new exR.SumTypeEx(excode,this.ch[0].toExRep(),null,null);
				break;
			case 'c':
				ans=new exR.LimitEx(this.ch[0].toExRep(),null);
				break;
			case 'd':
				ans=new exR.WideVecEx(this.ch[0].toExRep());
                ans.setDirection(false);
				break;
			case 'e':
				ans=new exR.WideTildeEx(this.ch[0].toExRep());
				break;
			case 'f':
				ans=new exR.WideHatEx(this.ch[0].toExRep());
				break;
			case 'g':
				ans=new exR.OverBraceEx(this.ch[0].toExRep());
				break;
			case 'h':
				ans=new exR.UnderBraceEx(this.ch[0].toExRep());
				break;
            case 'i':
                ans=new exR.FrameboxEx(this.ch[0].toExRep());
                break;
			default:
				ans=new exR.Mbox("OP1P error");
		}
		return ans;
	}
		
	EXtree.prototype.OP1AexRep=function(opec,excode){
		var ans;
		switch(opec){
			case '0':
				ans=new exR.RightOpeEx(this.ch[0].toExRep(),excode);
                ans.setGap(0.2);
				break;
			case '1':
				ans=new exR.SuperscriptOpeEx(this.ch[0].toExRep(),excode);
				break;
			case '2':
				ans=new exR.BigRightOpeEx(this.ch[0].toExRep(),excode);
				break;
			case '3':
				ans=new exR.RightOpeEx(this.ch[0].toExRep(),excode);
				break;
            case '4':
				ans=new exR.TopEx(excode,this.ch[0].toExRep());
                ans.setUp(1.0);
                ans.setSubRatio(0.6);
				break;
			case '8':
				ans=new exR.UnderlineEx(this.ch[0].toExRep());
				break;
            case '9':
				ans=new exR.FrameboxEx(this.ch[0].toExRep());
				break;
            default:
				ans=new exR.Mbox("OP1A  error");
		}
		return ans;
	}
		
	EXtree.prototype.OP1BexRep=function(opec,excode){
		var ans;
		var Lbra=excode.substring(0,1);
		var Rbra=excode.substring(1);
		if(!(Lbra=="(" || Lbra=="{" || Lbra=="[")){
			var texcode=OTB.theTeXcode(this.key,this.order);
			var i=texcode.indexOf(',');
			Lbra=texcode.substring(0,i);
			if(Lbra.charAt(0)=='\\'){ Lbra=Lbra.substring(1);if(Lbra=="|") Lbra="||";}
			if(Lbra.length>=4 && Lbra.substring(0,4)=="left"){
				Lbra=Lbra.substring(4);
				if(Lbra.charAt(0)=='\\'){ Lbra=Lbra.substring(1);if(Lbra=="|") Lbra="||";}
			}
			Rbra=texcode.substring(i+1);
			if(Rbra.charAt(0)=='\\'){ Rbra=Rbra.substring(1);if(Rbra=="|") Rbra="||";}
			if(Rbra.length>=5 && Rbra.substring(0,5)=="right"){
				Rbra=Rbra.substring(5);
				if(Rbra.charAt(0)=='\\'){ Rbra=Rbra.substring(1);if(Rbra=="|") Rbra="||";}
			}
		}
		switch(opec){
			case '0':
				ans=new exR.BigBracketEx(Lbra,this.ch[0].toExRep(),Rbra);
				break;
			case '1':
				ans=new exR.BigBracketEx(Lbra,this.ch[0].toExRep(),Rbra);
				break;
			case '2':
				ans=new exR.LeftOpeEx(Lbra,this.ch[0].toExRep());
				break;
			case '3':
				ans=new exR.BigLeftOpeEx(Lbra,this.ch[0].toExRep());
				break;
			case '4':
				ans=new exR.RightOpeEx(this.ch[0].toExRep(),Rbra);
				break;
			case '5':
				ans=new exR.BigRightOpeEx(this.ch[0].toExRep(),Rbra);
				break;
			default:
				ans=new exR.Mbox("OP1B error");
		}
		return ans;
	}

	EXtree.prototype.OP2CexRep=function(opec,excode){
		var ans;
		switch(opec){
			case '0':
				ans=new exR.SpacedEx(this.ch[0].toExRep(),this.ch[1].toExRep());
				break;
			case '1':
				ans=new exR.SuperscriptEx(this.ch[0].toExRep(),this.ch[1].toExRep());
				break;
			case '2':
				if(this.ch[0].key==MathTOUCH.SP && this.ch[0].order==3){
					ans=new exR.SubSuperscriptEx(this.ch[0].ch[0].toExRep(),this.ch[0].ch[1].toExRep(),this.ch[1].toExRep());
                    }
                else{ ans=new exR.Mbox("SubSuperscript Error");
                    console.log("SubSuperscript Error");
                }
				break;
			case '3':
				ans=new exR.SubscriptEx(this.ch[0].toExRep(),this.ch[1].toExRep());
				break;
			case '4':
				ans=new exR.LeftSuperscriptEx(this.ch[1].toExRep(),this.ch[0].toExRep());
				break;
			case '5':
				ans=new exR.LeftSubscriptEx(this.ch[1].toExRep(),this.ch[0].toExRep());
				break;
			case '6':
				ans=new exR.CenterOpeEx(this.ch[0].toExRep(),excode,this.ch[1].toExRep());
				break;
			case 'c':
				ans=new exR.CenterOpeEx(this.ch[0].toExRep(),",",this.ch[1].toExRep());
				break;
			case '7':
				ans=new exR.FractionalEx(this.ch[0].toExRep(),this.ch[1].toExRep());
				break;
			case '9':
				ans=new exR.FractionalEx(this.ch[1].toExRep(),this.ch[0].toExRep());
				break;
			case '8':
				ans=new exR.RootEx(this.ch[0].toExRep(),this.ch[1].toExRep());
				break;
			case '.':
				ans=new exR.CenterOpeEx(this.ch[0].toExRep(),excode,this.ch[1].toExRep());
                ans.setPer(0.0);
				break;
			case ',':
				ans=new exR.SpacedEx(this.ch[0].toExRep(),this.ch[1].toExRep());
                ans.setPer(0.4);
				break;
			case ':':
				ans=new exR.SpacedEx(this.ch[0].toExRep(),this.ch[1].toExRep());
                ans.setPer(0.5);
				break;
			case ';':
				ans=new exR.SpacedEx(this.ch[0].toExRep(),this.ch[1].toExRep());
                ans.setPer(0.6);
				break;
			case '>':
				ans=new exR.SpacedEx(this.ch[0].toExRep(),this.ch[1].toExRep());
                ans.setPer(1.8);
				break;
			case 'q':
				ans=new exR.SpacedEx(this.ch[0].toExRep(),this.ch[1].toExRep());
                ans.setPer(3.6);
				break;
			case '!':
				ans=new exR.SpacedEx(this.ch[0].toExRep(),this.ch[1].toExRep());
                ans.setPer(-0.2);
				break;
			case '-':
				ans=new exR.SpacedEx(this.ch[0].toExRep(),this.ch[1].toExRep());
                ans.setPer(-0.3);
				break;
			case '<':
				ans=new exR.SpacedEx(this.ch[0].toExRep(),this.ch[1].toExRep());
                ans.setPer(-0.4);
				break;
			default:
				ans=new exR.Mbox("OP2C error");
		}
		return ans;
	}
		
	EXtree.prototype.OP2PexRep=function(opec,excode){
		var ans;
		switch(opec){
			case '0':
				if(excode=="int") ans=new exR.IntegralEx(null,this.ch[0].toExRep(),this.ch[1].toExRep(),null);
				else ans=new exR.IntegralEx(excode,this.ch[0].toExRep(),this.ch[1].toExRep(),null);
				break;
			case '1':
				ans=new exR.LeftOpeSubscriptEx(excode,this.ch[0].toExRep(),this.ch[1].toExRep());
				break;
			case '2':
				ans=new exR.SumTypeEx(excode,this.ch[0].toExRep(),this.ch[1].toExRep(),null);
				break;
			case '3':
				ans=new exR.LeftOpeSuperscriptEx(excode,this.ch[0].toExRep(),this.ch[1].toExRep());
				break;
			case '4':
				ans=new exR.LimitEx(this.ch[0].toExRep(),this.ch[1].toExRep());
				break;
			default:
				ans=new exR.Mbox("OP2P error");
		}
		return ans;
	}
		
	EXtree.prototype.OP3PexRep=function(opec,excode){
		var ans;
		switch(opec){
			case '0':
				ans=new exR.SumTypeEx(excode,this.ch[0].toExRep(),this.ch[1].toExRep(),this.ch[2].toExRep());
				break;
			case '1':
				if(excode=="int") ans=new exR.IntegralEx(null,this.ch[0].toExRep(),this.ch[1].toExRep(),this.ch[2].toExRep());
				else ans=new exR.IntegralEx(excode,this.ch[0].toExRep(),this.ch[1].toExRep(),this.ch[2].toExRep());
				break;
			default:
				ans=new exR.Mbox("OP3P error");
		}
		return ans;
	}
		
	EXtree.prototype.OP3TexRep=function(opec,excode){
		var ans;
		switch(opec){
			case '0':
				ans=new exR.CenterTopEx(excode,this.ch[0].toExRep(),this.ch[1].toExRep(),this.ch[2].toExRep());
                ans.setSubRatio(0.6);
                ans.setUp(0.7);
				break;
			case '1':
				ans=new exR.CenterTopEx(excode,this.ch[0].toExRep(),this.ch[1].toExRep(),this.ch[2].toExRep());
                ans.setSubRatio(1.0);
                ans.setUp(1.0);
				break;
			case '2':
				ans=new exR.CenterTopEx(excode,this.ch[0].toExRep(),this.ch[1].toExRep(),this.ch[2].toExRep());
                ans.setSubRatio(0.6);
                ans.setUp(-0.7);
				break;
			default:
				ans=new exR.Mbox("OP3P error");
		}
		return ans;
	}


function EmptyEXT(v){
    EXtree.apply(this, arguments);
    this.cnum=0;
    this.val = v;
    this.type=0;
    this.key=0;
    if(v.length==0){
        this.inputWord="";
        this.state=0;
    }
    else{
        this.inputWord=" ";
        this.state=0;
        switch(v){
                case " ": this.order=0;break;
            case "thinspace": this.order=1;break;
            case "medspace": this.order=2;break;
            case "thickspace": this.order=3;break;
            case "quad": this.order=4;break;
            case "qquad": this.order=5;break;
                default:this.order=0;break;
        }
    }
    this.toString = function () {
        return this.val;
    }
}
EmptyEXT.prototype = new EXtree();

function NumberEXT(s,ns){
    EXtree.apply(this, arguments);
    this.cnum=0;
    this.state=s;
    this.val = ns;
    this.type=1;
    if(ns.charAt(0)=='b') this.inputWord=ns.substring(1);
    else this.inputWord=ns;
    this.toString = function () {
        return this.val;
    }
    
    this.getNumber=function() {
        return "Number: " + this.toString();
    }
}
NumberEXT.prototype = new EXtree();

function VariableEXT(s,v,inwd) {
    EXtree.apply(this, arguments);
    this.cnum=0;
    this.state=s;
    this.val = v;
    this.type=2;
    this.inputWord=inwd;
    var ko=KTB.getKeyAndOrder(inwd,v);
    if(ko<0){
        this.key=null;this.order=null;
        
    }
    else{
        this.key=Math.floor(ko/256);
        this.order=ko%256;
    }
    this.toString = function () {
        return this.val;
    }
}
VariableEXT.prototype = new EXtree();

function SymbolEXT(s,v,inwd) {
    EXtree.apply(this, arguments);
    this.cnum=0;
    this.state=s;
    this.val = v;
    this.type=3;
    this.inputWord=inwd;
    var ko=KTB.getKeyAndOrder(inwd,v);
    if(ko<0){
        this.key=null;
        this.order=null;
        
    }
    else{
        this.key=Math.floor(ko/256);
        this.order=ko%256;
    }
    this.toString = function () {
        return this.val;
    }
}
SymbolEXT.prototype = new EXtree();

function EXtree0(s,t,v,inwd){
    this.parent=null;
    this.cnum=0;
    this.state=s;
    this.val=v;
    this.type=t;
    this.inputWord=inwd;
    this.baseColor=0;
    if(t<2) return;
    else if(t==MathTOUCH.MAT||t==MathTOUCH.TXT||t==MathTOUCH.XTML) return;
    else{
        var ko=KTB.getKeyAndOrder(inwd,v);
        if(ko<0){
            this.key=null;
            this.order=null;
        }
        else{
            this.key=Math.floor(ko/256);
            this.order=ko%256;
        }
    }
}
EXtree0.prototype = new EXtree();

function EXtree1(s,k,od,ex1,inwd){
    this.parent=null;
    this.ch=new Array();
    this.ch[0]=ex1;
    this.cnum=1;
    this.state=s;
    this.key=k;
    this.order=od;
    this.type=OTB.getOpeType(k,od);
    this.baseColor=0;
    this.inputWord=inwd;
    for(var i=0;i<this.cnum;i++){if(this.ch[i]!=null){this.ch[i].parent=this;this.ch[i].pnum=i;}}
}
EXtree1.prototype = new EXtree();

function EXtree2(s,k,od,ex1,ex2,inwd){
    this.parent=null;
    this.ch=new Array();
    this.ch[0]=ex1;
    this.ch[1]=ex2;
    this.cnum=2;
    this.state=s;
    this.key=k;
    this.order=od;
    this.type=OTB.getOpeType(k,od);
    this.baseColor=0;
    this.inputWord=inwd;
    for(var i=0;i<this.cnum;i++){if(this.ch[i]!=null){this.ch[i].parent=this;this.ch[i].pnum=i;}}
}
EXtree2.prototype = new EXtree();

function EXtree3(s,k,od,ex1,ex2,ex3,inwd){
    this.parent=null;
    this.ch=new Array();
    this.ch[0]=ex1;
    this.ch[1]=ex2;
    this.ch[2]=ex3;
    this.cnum=3;
    this.state=s;
    this.key=k;
    this.order=od;
    this.type=OTB.getOpeType(k,od);
    this.baseColor=0;
    this.inputWord=inwd;
    for(var i=0;i<this.cnum;i++){if(this.ch[i]!=null){this.ch[i].parent=this;this.ch[i].pnum=i;}}
}
EXtree3.prototype = new EXtree();

function EXtreeMat0(s,r,c,elem,inwd){
    this.parent=null;
    this.ch=elem;
    this.cnum=elem.length;
    this.state=s;
    this.rownum=r;
    this.colnum=c;
    if(this.cnum!=r*c){alert("EXtree matrix error in EXtree"); return null;}
    this.val="";
    for(var j=0;j<=this.rownum;j++) this.val=this.val+"0";
    for(var i=0;i<this.colnum;i++) this.val=this.val+"c";
    this.type=MathTOUCH.MAT;
    this.baseColor=0;
    this.inputWord=inwd;
    for(var i=0;i<this.cnum;i++){if(this.ch[i]!=null){this.ch[i].parent=this;this.ch[i].pnum=i;}}
}
EXtreeMat0.prototype = new EXtree();

function EXtreeMat(s,r,rcstr,elem,inwd){
    this.parent=null;
    this.ch=elem;
    this.cnum=elem.length;
    this.state=s;
    this.rownum=r;
    this.colnum=0;
    for(var j=this.rownum+1;j<rcstr.length;j++){
        switch(rcstr.charAt(j)){
            case 'c':
            case 'l':
            case 'r':this.colnum++;break;
        }
    }
    if(this.cnum!=this.rownum*this.colnum){return;}
    this.val=rcstr;
    this.type=MathTOUCH.MAT;
    this.baseColor=0;
    this.inputWord=inwd;
    for(var i=0;i<this.cnum;i++){if(this.ch[i]!=null){this.ch[i].parent=this;this.ch[i].pnum=i;}}
}
EXtreeMat.prototype = new EXtree();

function EditEXT(eb){
    EXtree.apply(this, arguments);
    this.parent=null;
    this.cnum=0;
    this.state=0;
    this.val="";
    this.type=MathTOUCH.EDIT;
    this.baseColor=0;
    this.backColor=7;
    this.editbox=eb;
    this.inputWord=this.editbox.getText();
    
    this.goLeft=function(){
        if(this.editbox==null) return 0;
        return this.editbox.goLeft();
    }
    
    this.goRight=function(){
        if(this.editbox==null) return 0;
        return this.editbox.goRight();
    }
    
    this.doBS=function(){
        if(this.editbox==null) return 0;
        return this.editbox.doBS();
    }
    
}
EditEXT.prototype = new EXtree();

