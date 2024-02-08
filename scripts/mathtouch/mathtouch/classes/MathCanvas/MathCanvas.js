var mtmenu = new MathTOUCH.mtMenu();
var mtKB = new MathTOUCH.mtKeyBoard();
var mtTEX = new MathTOUCH.EXtree2TeX();
var mathml = new MathTOUCH.EXtree2MathML();
var maxima = new MathTOUCH.EXtree2Maxima();
var maple = new MathTOUCH.EXtree2Maple();
var SPC = new MathTOUCH.EXtree2Speech();
var mathematica = new MathTOUCH.EXtree2Mathematica();
var word = new MathTOUCH.EXtree2Word();
var NES=new MathTOUCH.NEScore();

MathTOUCH.mathcanvas= function(){
    var _mtarea;
    this.getArea = function(){
        return _mtarea;
    };
    this.setArea = function(area){
        _mtarea = area;
    };

    var _canvas;
    this.getCanvas = function(){
        return _canvas;
    };
    this.setCanvas = function(canvas){
        _canvas = canvas;
    };
    
    var _ctx;
    this.getCTX = function(){
        return _ctx;
    };
    this.setCTX = function(ctx){
        _ctx=ctx;
    }
    
    var _outputArea;
    this.getOutputArea = function(){
        return _outputArea;
    };
    this.setOutputArea = function(outputarea){
        _outputArea=outputarea;
    };

    var _candidatelist;
    this.getCandidatelist = function(){
        return _candidatelist;
    };
    this.setCandidatelist = function(list){
        _candidatelist = list;
    };
    
    var _ansTex;
    this.getAnsTex = function(i){
        return _ansTex[i];
    }
    this.setAnsTex = function(i, ans){
        _ansTex[i] = ans;
    }
    this.clearAnsTex = function(){
        _ansTex = [];
    }
    
    var _candidates_flag = false;
    this.setCandidates_flag = function(cf){
        _candidates_flag = cf;
    };
    this.getCandidates_flag= function(){
        return _candidates_flag;
    };
    
    var _lang;
    this.getLang = function(){
        return _lang;
    };
    this.setLang = function(lang){
        _lang=lang;
    }

    var _outputform = MathTOUCH.TexForm;
    this.setOutputForm = function(outputform){
        _outputform = outputform;
    }
    this.getOutputForm = function(){
        return _outputform;
    };
    
    var _outputformName;
    this.getOutputformName = function(){
        return _outputformName;
    };
    this.setOutputformName = function(outputformname){
        _outputformName = outputformname;
    };
    
    var _helpcommentID;
    var _helpMessage;
    this.getHelpcommentID = function(){
        return _helpcommentID;
    };
    this.setHelpcommentID = function(id){
        _helpcommentID=id;
    };
    this.setHelpMessage = function(message){
        _helpMessage = message;
    };
    this.getHelpMessage = function(message){
        return _helpMessage;
    };
    
    var _outputfontSize;
    this.setOutputFontSize = function(fontsize){
        _outputfontSize = fontsize;
    };
    this.getOutputFontSize = function(){
        return _outputfontSize;
    };
    
    var _fontSize;
    this.setFontSize = function(fontsize){
        _fontSize = fontsize;
    };
    this.getFontSize = function(){
        return _fontSize;
    };
    

    var _gk;
    this.setGK = function(gk){
        _gk = gk;
    };
    this.getGK = function(){
        return _gk;
    };
    this.checkGK = function(gk){
        return (_gk === gk);
    };
    
    var _shift;
    this.setShift = function(shift){
        _shift = shift;
    };
    this.getShift = function(){
        return _shift;
    };
    
    var _ctrl;
    this.setCtrl = function(ctrl){
        _ctrl = ctrl;
    };
    this.getCtrl = function(){
        return _ctrl;
    };
    
    var _ckey;
    this.setCkey = function(ckey){
        _ckey = ckey;
    };
    this.getCkey = function(){
        return _ckey;
    };
    this.checkCkey = function(key){
        return _ckey === key;
    };
    
    var _candidate_mttouch = false;
    this.setmtTOUCH = function(check){
        _candidate_mttouch = check;
    }
    this.checkmtTOUCH = function(){
        return (_candidate_mttouch);
    }
    
    
    var _originalCanvasSize;
    this.getOriginalCanvasHeight = function(){
        return _originalCanvasSize;
    };
    this.setOriginalCanvasHeight  = function(h){
        _originalCanvasSize = h;
    };
    
    var _inputHeight;
    this.setInputHeight = function(inputheight){
        _inputHeight = inputheight;
    };
    this.getInputHeight = function(){
        return _inputHeight;
    };
    
    var _hline;
    this.setHline = function(hline){
        _hline = hline;
    };
    this.getHline = function(){
        return _hline;
    };
    
    var _leftmargin;
    this.setLeftmargin = function(leftmargin){
        _leftmargin = leftmargin;
    };
    this.getLeftmargin = function(){
        return _leftmargin;
    };
    

    var _areawidth;
    this.setAreawidth = function(areawidth){
        _areawidth = areawidth;
    };
    this.getAreawidth = function(){
        return _areawidth;
    };
    
    
    this.curTimer;
    var _cursorflag;
    this.setCursorTimerFlag = function(fg){
        _cursorflag = fg;
    };
    this.checkCursorFlag = function(){
        return (_cursorflag === true);
    };
    

    var _isFocus = false;
    this.setFocusflag = function(fg){
        _isFocus = fg;
    };
    this.getFocusflag = function(){
        return _isFocus;
    };
    
    var _curVisual=0;
    this.setCurVisual = function(cv){
        _curVisual = cv;
    };
    this.getCurVisual = function(){
        return  _curVisual;
    };
    this.checkCurVisual = function(i){
        return  (i === _curVisual);
    };

    var _endMT;
    this.getEndMT_flag= function(){
        return _endMT;
    };
    this.setEndMT_flag = function(f){
        _endMT = f;
    };
    

    this.copyEXtree=null;
    var copyMode = 0;
    var top_candidates=0;

    this.mouseX1;
    this.mouseY1;
    this.mouseX2;
    this.mouseY2;
    this.clickEx = null;
    this.clickRep=null;
    
    var _Dragflag = false;
    this.checkDragflag = function(){
        return (_Dragflag === true);
    }
    this.getDragflag = function(){
        return _Dragflag;
    };
    this.setDragflag = function(df){
        _Dragflag = df;
    };
    
    var _OpeSelected = false;
    this.getOpeSelected = function(){
        return _OpeSelected;
    };
    this.setOpeSelected = function(os){
        _OpeSelected = os;
    };
    this.checkOpeSelected = function(){
        return (_OpeSelected === true );
    }
    
    var _selectMode = false;
    this.getSelectMode = function(){
        return _selectMode;
    };
    this.setSelectMode = function(sm){
        _selectMode = sm;
    };
    this.checkSelectMode = function(){
        return (_selectMode === true);
    };
    
    var _minratio = 0;
    this.getMinratio = function(){
        return _minratio;
    };
    this.setMinratio = function(mr){
        _minratio = mr;
    };
   
    var _frontback = 0;
    this.setFrontback = function(fb){
        _frontback = fb;
    };
    this.checkFrontback = function(fb){
        return (_frontback === fb);
    };
    
    
    var _rmcur;
    this.getRmcur = function(){
        return _rmcur;
    };
    this.setRmcur = function(rm){
        _rmcur = rm;
    };
    this.checkNullRmcur = function(rm){
        return (_rmcur == null);
    };
    
    var _minx2y2;
    this.setMinx2y2 = function(minxy){
        _minx2y2 = minxy;
    };
    this.getMinx2y2 = function(){
        return _minx2y2;
    };
    
    var _errorMessage;
    this.getErrormessage = function(){
        return _errorMessage;
    };
    this.setErrormessage = function(em){
        _errorMessage = em;
    };
    

    var _currentEXtree = null;
    this.setCurrentEXtree = function(cx){
        _currentEXtree = cx;
    };
    this.getCurrentEXtree = function(){
        return _currentEXtree;
    };

    var _processEXtree = null;
    this.setProcessEXtree = function(processextree){
        _processEXtree = processextree;
    };
    this.getProcessEXtree = function(){
        return _processEXtree;
    };
    this.checkNullProcessEXtree = function(){
        return (_processEXtree != null);
    };
    
    var _previousEXtree = null;
    this.setPreviousEXtree = function(previousextree){
        _previousEXtree = previousextree;
    };
    this.getPreviousEXtree = function(){
        return _previousEXtree;
    };
    this.checkNullPreviousEXtree = function(){
        return (_previousEXtree != null);
    };
    
    var _argEXtree = null;
    this.setArgEXtree = function(ag){
        _argEXtree = ag;
    };
    this.getArgEXtree = function(){
        return _argEXtree;
    };
    
    var _argEXtree1 = null;
    this.setArgEXtree1 = function(ag){
        _argEXtree1 = ag;
    };
    this.getArgEXtree1 = function(){
        return _argEXtree1;
    };
    
    var _argEXtree2 = null;
    this.setArgEXtree2 = function(ag){
        _argEXtree2 = ag;
    };
    this.getArgEXtree2 = function(){
        return _argEXtree2;
    };
    
    var _currentRep = null;
    this.setCurrentRep = function(cr){
        _currentRep = cr;
    };
    this.getCurrentRep = function(){
        return _currentRep;
    };
    
    
    var _TransMode = 0;
    this.getTransMode = function(){
        return _TransMode;
    };
    this.setTransMode = function(tm){
        _TransMode = tm;
    };
    this.checkTransMode = function(t){
        return (_TransMode === t);
    };
    
    var _subMode = 0;
    this.getSubMode = function(){
        return _subMode;
    };
    this.setSubMode = function(sm){
        _subMode = sm;
    };
    this.checkSubMode = function(sm){
        return (_subMode === sm);
    };
    
    var _Mcol = -1;
    this.getMcol = function(){
        return _Mcol;
    };
    this.setMcol = function(mcol){
        _Mcol = mcol;
    };
    
    var _LogMode=true;
    this.getLogMode = function(){
        return _LogMode;
    };
    this.setLogMode = function(lm){
        _LogMode = lm;
    };
    
    var _scpKey=0;
    this.getScpKey = function(){
        return _scpKey;
    };
    this.setScpKey = function(sk){
        _scpKey = sk;
    };
    
    var _scpOrder=0;
    this.getScpOrder = function(){
        return _scpOrder;
    };
    this.setScpOrder = function(so){
        _scpOrder = so;
    };
    
    var _divMode = MathTOUCH.Dfix;
    this.getDivMode= function(){
        return _divMode;
    };
    this.setDivMode = function(dm){
        _divMode = dm;
    };
    this.checkDivMode = function(dm){
        return (_divMode === dm);
    };
    
    var _results;
    this.getResult = function(i){
        return _results;
    };
    this.setResult = function(rs){
        _results=rs;
    };

    var _prescpOrder = 0;
    this.getPrescpOrder= function(){
        return _prescpOrder;
    };
    this.setPrescpOrder = function(po){
        _prescpOrder = po;
    };
    this.checkPrescpOrder = function(po){
        return (_prescpOrder === po);
    };
    
    var _SNUM=0;
    this.getSNUM= function(){
        return _SNUM;
    };
    this.setSNUM = function(num){
        _SNUM = num;
    };


    var _predict=null;
    this.setPrediction=function(prt){_predict=prt;}
    this.getPrediction=function(){return _predict;}
    
    this.isPredicted=function(){
        if(_predict != null && _predict != undefined) return(_predict.getLastNumber()>0);
        else return(false);
    }
    
    this.targetMode=0;
    this.tagex=null;
    this.keyboardcheck=false;
    this.cur = new exR.EditBox();
    this.xtreeml = new MathTOUCH.EXtree2XtreeML();
    this.EXTML = new MathTOUCH.XtreeML2EXtree();
    this.MEX = new MathTOUCH.middleEX( _ctx, 0);
    this.tree = new MathTOUCH.EXtree2TeX();
    
    var _isPPdoing = false;
    this.setisPPdoing = function(prt){
        _isPPdoing = prt;
    }
    this.getisPPdoing = function(){
        return _isPPdoing;
    }
    
    var _PPid = null;
    this.setPPid = function(id){
        _PPid = id;
    }
    this.getPPid = function(){
        return _PPid;
    }
    
    var _candidatePosiRemainder = 0;
    this.setCandidatePosiRemainder = function(pos){
        _candidatePosiRemainder = pos;
    }
    this.getCandidatePosiRemainder = function(){
        return _candidatePosiRemainder;
    }
    
    var _currentCandidateWidth = 432;
    this.setCurrentCandidateWidth = function(pos){
        _currentCandidateWidth = pos;
    }
    this.getCurrentCandidateWidth = function(){
        return _currentCandidateWidth;
    }
    
    
    
    this.checkNull = function(o){
        return (o === null);
    };
    
    
    var _imgid="";
    this.setImgID = function(id){
        _imgid=id;
    }
    this.getImgID = function(){
        return _imgid;
    }
    
    
    var _outputimgurl;
    this.setOutputIMGURL = function(url){
        _outputimgurl=url;
    }
    this.getOutputIMGURL = function(){
        return _outputimgurl;
    }
}

MathTOUCH.mathcanvas.prototype.init = function(menu, marea, mcanvas,candidatelist_id, help,outputid,mlang,xtml,imgid,fsize,siteurl, outputimgurl) {
    switch(MathTOUCH.Apptype){
        case "mtsingle":
            MathTOUCH.MTSingle = true; break;
        case "mathEditor":
            MathTOUCH.MTEditor = true; break;
        case "mc2":
            MathTOUCH.MC2 = true; break;
        case "mtweb":
            MathTOUCH.MTWeb = true;
            this.setOutputForm(MathTOUCH.TexForm); break;
        case "stack":
            MathTOUCH.STACK = true;
            this.setOutputForm(MathTOUCH.MaximaForm); break;
        case "dw":
            MathTOUCH.DW = true;
            this.setOutputForm(MathTOUCH.EXTForm); break;
        case "mathgraph":
            MathTOUCH.mathGraph = true; break;
        case "mathreader":
            MathTOUCH.mathReader = true; break;
    }
    this.setOutputIMGURL(outputimgurl);
    this.setEndMT_flag(0);
    this.setLang(mlang);
    this.setArea(document.getElementById(marea));
    this.setCanvas(document.getElementById(mcanvas));
    this.setCandidatelist(document.getElementById(candidatelist_id));
    let mtcanvas = document.getElementById(mcanvas);
    mtcanvas.width="480";
    this.setCTX(mtcanvas.getContext('2d'));
    this.setOutputArea(document.getElementById(outputid));
    mtcanvas.setAttribute('tabindex', 0);
    var mobj=this;
    
    if(MathTOUCH.MENUFLAG){
        var helpcommentID = this.getHelpcommentID();
        $.getJSON("langs/" + this.getLang() + ".json", function (data) {
            helpcommentID.innerHTML = "<p>&#x25B6; "+ data["start_msg"]+"</p>";
            
        });
        mtmenu.init(document.getElementById(menu),num,mobj);
        this.setHelpcommentID(document.getElementById(help));
        
        if(MathTOUCH.MTWeb){
            var outputarea = this.getOutputArea();
            $.getJSON("langs/" + this.getLang() + ".json", function (data) {
                  outputarea.innerHTML = data["start_outputarea"];
                  });
        }
        if(fsize!=null){
            this.setFontSize(fsize);
        }else{
            if(!MathTOUCH.STACK){
                this.setFontSize(24);
            }else{
                this.setFontSize(22);
            }
        }
    }

    if(window.addEventListener){
        window.addEventListener("resize",function(){mobj.resizeMTarea()},false);
    }
    if(mtcanvas.addEventListener){
        mtcanvas.addEventListener("keypress",function(){mobj.getKey()},false);
        mtcanvas.addEventListener("keydown",function(){mobj.getExtKey()},false);
        mtcanvas.addEventListener("focus",function(){mobj.setFocus()},false);
        mtcanvas.addEventListener("blur", function(){mobj.outFocus()},false);
    }else if(mtcanvas.attachEvent){
        mtcanvas.attachEvent("onkeypress",mobj.getKey(),false);
        mtcanvas.attachEvent("onkeydown",mobj.getExtKey(),false);
        mtcanvas.attachEvent("onblur", mobj.outFocus(),false);
        mtcanvas.attachEvent("onfocus", mobj.setFocus(),false);
    }
    this.catchEvent(mtcanvas, "mousedown", mobj.mouseDownListner(mobj),false);
    this.catchEvent(mtcanvas, "mouseup", mobj.mouseUpListner(mobj),false);
    this.catchEvent(mtcanvas, "mousemove", mobj.mouseMoveListner(mobj),false);
    this.setCurrentEXtree(new EditEXT(this.cur));
    this.setProcessEXtree(this.getCurrentEXtree());
    this.setPreviousEXtree(this.getProcessEXtree());

    MathTOUCH.MathCanvas_undoStack=new MathTOUCH.MathCanvas_UndoStack();
    MathTOUCH.MathCanvas_redoStack=new MathTOUCH.MathCanvas_UndoStack();

    this.setOriginalCanvasHeight(mtcanvas.clientHeight);
    
    if( MathTOUCH.MTEditor || MathTOUCH.MC2 ||MathTOUCH.mathGraph ){
        this.setImgID(imgid);
        NES.init(MathTOUCH.SITEURL);
        this.setFontSize(24);
        if(fsize == null||fsize == undefined){
            this.setOutputFontSize(22);
        }else{
            this.setOutputFontSize(fsize);
        }
        this.setLeftmargin(10);
        if(xtml != undefined && xtml!=""){
            var temp=this.EXTML.parseAny(xtml);
            if(temp!=null){
                this.setCurrentEXtree(temp);
                this.setPreviousEXtree(this.getCurrentEXtree());
                this.mode3Pros();
                this.setCurrentRep(this.getCurrentEXtree().toExRep());
            }else{
                this.setHelpMessage("xtmlError");
            }
        }
    }
    mtKB.init(mobj);
    this.setFocus();
    mtcanvas.focus();
    this.paint();
};
    
MathTOUCH.mathcanvas.prototype.cursorVisible = function(){
    if(this.getFocusflag() && this.checkCurVisual(0)){
        this.setCurVisual(1);
    }
    else if(this.getFocusflag()&&this.checkCurVisual(1)){
        this.setCurVisual(0);
    }
    this.paint();
};

MathTOUCH.mathcanvas.prototype.startTimer = function(mobj){
    clearInterval(this.curTimer);
    this.curTimer = setInterval(function(){mobj.cursorVisible()},700);
    this.setCursorTimerFlag(true);
};
    
MathTOUCH.mathcanvas.prototype.stopTimer = function(){
    clearInterval(this.curTimer);
    this.setCursorTimerFlag(false);
    this.setCurVisual(0);
};

MathTOUCH.mathcanvas.prototype.setFocus = function(){
    this.getCanvas().focus();
    this.setFocusflag(true);
    if(MathTOUCH.Device==MathTOUCH.Device_SP || MathTOUCH.Device==MathTOUCH.Device_TB || MathTOUCH.MC2){
        $("#"+MathTOUCH.KeyBoard_BASE.id).slideDown();
    }else{
        $("#"+MathTOUCH.KeyBoard_BASE.id).show();
    }
    MathTOUCH.KeyBoard_flag = true;
    this.getCanvas().style.borderColor = '#66ccff';
    this.startTimer(this);
};
    
MathTOUCH.mathcanvas.prototype.outFocus = function(){
    if(MathTOUCH.Device==MathTOUCH.Device_SP || MathTOUCH.Device==MathTOUCH.Device_TB || MathTOUCH.MC2){
        $("#"+MathTOUCH.KeyBoard_BASE.id).slideDown();
    }
    MathTOUCH.KeyBoard_flag = false;
    this.setFocusflag(false);
    this.stopTimer();
};


MathTOUCH.mathcanvas.prototype.setCanvasSize = function(){
    let mtcanvas = this.getCanvas();
    var mtAreadiv = this.getArea();
    if(MathTOUCH.MTWeb){
        mtcanvas.width = window.outerWidth;
        this.setAreawidth(mtcanvas.width - 60);
    }else if(!MathTOUCH.MTWeb && !MathTOUCH.MC2){
        this.setAreawidth(mtcanvas.width - 20);
    }
    
    if(this.getCurrentRep() === null){
        if(MathTOUCH.MTWeb){
            if(MathTOUCH.MENUFLAG){
                mtcanvas.height = mtAreadiv.offsetHeight;
                this.setInputHeight(this.getCanvas().height);
                this.setHline(this.getInputHeight()/2);
            }else{
                    mtcanvas.height = 100 ;
                    this.setInputHeight(this.getCanvas().height+10);
                    this.setHline(this.getInputHeight()/2);
            }
        }else if(MathTOUCH.MC2){
            mtcanvas.height = this.getFontSize()+20;
            this.setInputHeight(this.getCanvas().height+20);
            this.setHline(this.getInputHeight()/2);
            mtcanvas.width = 500;
            this.setAreawidth(mtcanvas.width - 20);
        }else{
                mtcanvas.height = this.getFontSize()+20;
                this.setInputHeight(this.getCanvas().height+20);
                this.setHline(this.getInputHeight()/2);
                mtcanvas.width = mtAreadiv.offsetWidth;
                this.setAreawidth(mtcanvas.width - 20);
        }
    }else{
        if(MathTOUCH.MTWeb){
            if((this.getHline() + this.getCurrentRep().getDescent())>this.getCanvas().height){
                mtAreadiv.style.setProperty("height", (this.getHline()+this.getCurrentRep().getDescent()+50)+"px");
                mtcanvas.height = mtAreadiv.offsetHeight;
            }
        }else if(MathTOUCH.MC2){
            var crep=this.getCurrentRep();
            mtcanvas.height = crep.getAscent()+crep.getDescent()+6;
            this.setInputHeight(this.getCanvas().height+4);
            this.setHline(crep.getAscent()+3);
            mtcanvas.width = crep.getWidth()+50;
            mtcanvas.width = 200;
            this.setAreawidth(crep.getWidth());
        }else{
            var crep=this.getCurrentRep();
            mtcanvas.height = crep.getAscent()+crep.getDescent()+20;
            this.setInputHeight(this.getCanvas().height+20);
            this.setHline(crep.getAscent()+10);
            let diffhight = mtcanvas.clientHeight-this.getOriginalCanvasHeight();
            
            if( diffhight!=0 && mtcanvas.clientHeight!=0){
                if(MathTOUCH.Device == MathTOUCH.Device_SP){
                    $("#mtkeyboard_canvas").css("height", diffhight);
                    var test = diffhight + 330-45;
                    $("#mt_keyboard").css("height", test);
                }else{
                    var test = diffhight + 370 - 51;
                    $("#mt_keyboard").css("height", test);
                }
            }
        }
    }
};
    
MathTOUCH.mathcanvas.prototype.resizeMTarea = function(){
        var queue = null;
        var wait = 300;
        var that = this;
        clearTimeout( queue );
        queue = setTimeout(function() {
                           that.setCanvasSize();
                           }, wait );
};



MathTOUCH.mathcanvas.prototype.set_mtoutputarea = function(outputname){
    this.setOutputArea(document.getElementById(outputname));
};

MathTOUCH.mathcanvas.prototype.catchEvent = function(eventObj, event, eventHandler) {
        if (eventObj.addEventListener) {
            eventObj.addEventListener(event, eventHandler,false);
        }else if (eventObj.attachEvent) {
            event = "on" + event;
            eventObj.attachEvent(event, eventHandler);
        }
};
    
MathTOUCH.mathcanvas.prototype.fontChange = function(command){
    if(command===1 && this.getFontSize()<30){
        this.setFontSize( this.getFontSize()+1 );
        this.setHelpMessage("fontlarger");
    }else if(command===0 && this.getFontSize()>10){
        this.setFontSize( this.getFontSize()-1 );
        this.setHelpMessage("fontsmaller");
    }else{
        if(this.getFontSize()>=30){
            this.setHelpMessage("cannotlarge");
        }else if(this.getFontSize()<=10){
            this.setHelpMessage("connotsmall");
        }
    }
    var helpmessage = this.getHelpMessage();
    var helpcommentID = this.getHelpcommentID();
    $.getJSON("langs/" + this.getLang() + ".json", function (data) {
        helpcommentID.innerHTML = "&#x25B6; "+ data[helpmessage];
        });
    this.paint();
};

MathTOUCH.mathcanvas.prototype.checkForm = function(outputform){
                let webresult;
                let TeXresult;
                let Maximaresult;
                let Mapleresult;
                let Mathematicaresult;
                let MathMLresult;
                let Wordresult;
                let XMLresult;
    if( MathTOUCH.MTWeb || MathTOUCH.MTSingle ){
        this.reset_select();
    }
    if(!this.checkNull(this.getResult())){
        if( MathTOUCH.DW ){
            var send="\""+this.getResult().getKeyWords()+"\",\""+this.xtreeml.XtreeML(this.getResult())+"\"";
            dw_submitData(send);
            this.setTransMode(9);
        }else{
            if( MathTOUCH.MTWeb){
                TeXresult=this.tree.TeXof(this.getResult(),true);
                if( outputform != MathTOUCH.JPGForm){
                    webresult="<pre><code>";
                }
            }
            switch( outputform ){
                case MathTOUCH.TexForm:
                    this.setOutputformName("LaTeX");
                    if( MathTOUCH.MTWeb ){
                        webresult=webresult+this.html_escape(TeXresult);
                    }else{
                        TeXresult=this.tree.TeXof(this.getResult(),true);
                        if(TeXresult!=null&&this.getOutputArea()!=null){
                            this.getOutputArea().value = TeXresult;
                        }
                    }
                    break;
                case MathTOUCH.MMLForm:
                    MathMLresult=mathml.MathMLof(0, this.getResult());
                    this.setOutputformName("MathML");
                    if( MathTOUCH.MTWeb ){
                        webresult=webresult+this.html_escape(MathMLresult);
                    }else{
                        this.getOutputArea().value = MathMLresult;
                    }
                    break;
                case MathTOUCH.EPSForm:
                    this.setOutputformName("EPS");
                    if( MathTOUCH.MTWeb ){
                    }else{
                        this.getOutputArea().value = "can not use";
                    }
                    break;
                case MathTOUCH.PNGForm:
                    this.setOutputformName("PNG");
                    if( MathTOUCH.MTWeb ){
                    }else{
                        this.getOutputArea().value = "can not use";
                    }
                    break;
                case MathTOUCH.JPGForm:
                    this.setOutputformName("JPEG");
                    if( MathTOUCH.MTWeb ){
                    }else{
                        this.getOutputArea().value = "can not use";
                    }
                    break;
                case MathTOUCH.EXTForm:
                    XMLresult="\""+this.getResult().getKeyWords()+"@@@"+this.xtreeml.XtreeML(this.getResult())+"\"";
                    this.setOutputformName("EXtreeML");
                    if( MathTOUCH.MTWeb ){
                        webresult=webresult+this.html_escape(XMLresult);
                    }else{
                        this.getOutputArea().value = XMLresult;
                    }
                    break;
                case MathTOUCH.MaximaForm:
                    Maximaresult=maxima.Maximaof(this.getResult());
                    this.setOutputformName("Maxima");
                    if( MathTOUCH.MTWeb ){
                        webresult=webresult+this.html_escape(Maximaresult);
                    }else{
                        this.getOutputArea().value="";
                        this.getOutputArea().focus();
                        this.getOutputArea().value = Maximaresult;
                        var that=this;
                        this.stopTimer();
                        setTimeout(function(){
                            that.getCanvas().focus();
                                   }, 150);
                    }
                    break;
                case MathTOUCH.MapleForm:
                    Mapleresult=maple.Mapleof(this.getResult());
                    this.setOutputformName("Maple");
                    if( MathTOUCH.MTWeb ){
                        webresult=webresult+this.html_escape(Mapleresult);
                    }else{
                        this.getOutputArea().value = Mapleresult;
                    }
                    break;
                case MathTOUCH.MathematicaForm:
                    Mathematicaresult=mathematica.Mathematicaof(this.getResult());
                    this.setOutputformName("Mathematica");
                    if( MathTOUCH.MTWeb ){
                        webresult=webresult+this.html_escape(Mathematicaresult);
                    }else{
                        this.getOutputArea().value = Mathematicaresult;
                    }
                    break;
                case MathTOUCH.WordForm:
                    Wordresult=word.Wordof(this.getResult());
                    this.setOutputformName("Word");
                    if( MathTOUCH.MTWeb ){
                        webresult=webresult+this.html_escape(Wordresult);
                    }else{
                        this.getOutputArea().value = Wordresult;
                    }
                    break;
                case MathTOUCH.Speach:
                    Speechresult=SPC.Speak(this.getResult());
                    this.setOutputformName("Speach");
                    if( MathTOUCH.MTWeb ){
                        webresult=webresult+this.html_escape(Speechresult);
                    }else{
                        this.getOutputArea().value = Speechresult;
                    }
                    break;
                case MathTOUCH.TestForm:
                    this.setOutputformName("Experiment");
                    if( MathTOUCH.MTWeb ){
                        webresult=webresult+"$"+this.html_escape(TeXresult)+"$ & \\verb#"+this.getResult().getKeyWords()+"@@@"+this.xtreeml.XtreeML(this.getResult())+"#\\\\";
                    }else{
                        this.getOutputArea().value = XMLresult;
                    }
                    break;
            }
            if( MathTOUCH.MTWeb ){
                this.getResultultWeb(TeXresult,MathTOUCH.SITEURL);
                if(this.getOutputForm()!=MathTOUCH.JPGForm || this.getOutputForm()!=MathTOUCH.EPSForm ||this.getOutputForm()!=MathTOUCH.PNGForm ){
                    webresult=webresult+"</code></pre>";
                    this.setOutputHTML(webresult);
                }
            }
            if( MathTOUCH.MENUFLAG){
                var helpcommentID = this.getHelpcommentID();
                var outputformName = this.getOutputformName();
                $.getJSON("langs/" + this.getLang() + ".json", function (data) {
                          helpcommentID.innerHTML = "<p>&#x25B6; "+data["outputresult1"] +outputformName + data["outputresult2"]+"</p>";
                          });
            }
        }
    }
    return false;
};

MathTOUCH.mathcanvas.prototype.getResultultWeb = function (TeXresult,url){
    var tLOG=MTTLOG.getMTTLog( this.getResult().getKeyWords(),this.xtreeml.XtreeML(this.getResult()));
    var postdata = this.getOutputformName()+"\n"+TeXresult+"\nend\n"+this.getOutputformName()+","+tLOG;
    var req = new XMLHttpRequest();
    req.onreadystatechange = readyStateChange;
    req.open('POST', "http://"+location.hostname+"/cgi-bin/HELLO/mathtouch.cgi");
    req.send(postdata);
    function readyStateChange(){
        var str = "readyState:" + req.readyState + " ";
        
        switch(req.readyState){
            case 0:
                str += "[XMLHttpRequest オブジェクトを作成した直後] ";
                break;
            case 1:
                str += "[open() メソッドの呼び出しが完了] ";
                break;
            case 2:
                str += "[レスポンスヘッダの受信が完了]\n";
                str += req.getAllResponseHeaders();
                break;
            case 3:
                str += "[レスポンスボディを受信中] (" + req.responseText.length + " characters)";
                break;
            case 4:
                str += "[req 通信が完了]";
                if(req.status == 0){
                    str += " [req 通信失敗]";
                }else{
                    str += " [req 通信成功]";
                    if((200 <= req.status && req.status < 300) || (req.status == 304)){
                        str += " [リクエスト成功]";
                        if(this.getOutputForm()===MathTOUCH.EPSForm||this.getOutputForm()===MathTOUCH.JPGForm||this.getOutputForm()===MathTOUCH.PNGForm){
                            var xtmlres="\""+this.getResult().getKeyWords()+"@@@"+this.xtreeml.XtreeML(this.getResult())+"\"";
                            var imagehtml="<img id='resultImage' title ='画像をコピーまたはダウンロードできます' data-mtform='"+xtmlres+"' class='subimage'" ;
                            if(this.getOutputForm()===MathTOUCH.EPSForm){
                                imagehtml=imagehtml+"alt='この文字の上で右クリックし、画像をコピーまたはダウンロードしてください'";
                            }
                            imagehtml=imagehtml+"src="+this.getOutputIMGURL()+req.responseText+"' />";
                            this.setOutputHTML(imagehtml);
                            var resultmtImage = document.getElementById("resultImage");
                            
                        }
                        
                    }else{
                        str += " [リクエスト失敗]もしくはテキスト形式";
                    }
                }
                str += "\nstatus:" + req.status + " (" + req.statusText + ")";
                
                break;
        }
        var resulMTTLOG = str;
        
    }
};

MathTOUCH.mathcanvas.prototype.getImageSrc = function(ex,visibleEmptyMode){
    var rep2 = ex.toExRep();
    var canvasIMG2 = document.createElement("canvas");
    var ctxIMG2 = canvasIMG2.getContext('2d');
    if(visibleEmptyMode!=undefined && visibleEmptyMode==false) rep2.setInvisibleEmptyMode();
    else rep2.setVisibleEmptyMode();
    if(MathTOUCH.MTGraph){
        rep2.sizeEx(ctxIMG2,this.getFontSize());
        canvasIMG2.width = rep2.getWidth();
        canvasIMG2.height = rep2.getAscent()+rep2.getDescent();
        rep2.drawEx(ctxIMG2,this.getFontSize(),0,rep2.getAscent());
    }else{
        let fsize = 48;
        rep2.sizeEx(ctxIMG2,fsize);
        canvasIMG2.width = rep2.getWidth();
        canvasIMG2.height = rep2.getAscent()+rep2.getDescent();
        rep2.drawEx(ctxIMG2,fsize,0,rep2.getAscent());
    }
    var obj = new Object();
    obj.val1 = canvasIMG2.toDataURL('image/png' , 1.0);
    return obj;
}

MathTOUCH.mathcanvas.prototype.endMathTOUCH = function(){
    var texresult=this.tree.TeXof(this.getResult(),true);
    var xtmlres=this.getResult().getKeyWords()+"@@@"+this.xtreeml.XtreeML(this.getResult());
    var resextree = this.getResult();
    var resimgobj = this.getImageSrc(resextree,false);
                var imgid = this.getImgID();
                if(MathTOUCH.MTEditor){
                    this.insertEQ(this.getImageSrc(resextree,false).val1, xtmlres, texresult, resextree, imgid);
                    if(MathTOUCH.Device!=MathTOUCH.Device_SP){
                        $("#"+MathTOUCH.KeyBoard_BASE.id).hide();
                    }else{
                        $("#"+MathTOUCH.KeyBoard_BASE.id).slideUp();
                    }
                    this.stopEvent();
                    this.setEndMT_flag(1);
                }else if(MathTOUCH.mathGraph){
                    MathTOUCH.MathGraph_changeExpression(imgid, xtmlres);
                    this.getCanvas().remove();
                    if(MathTOUCH.Device!=MathTOUCH.Device_SP){
                        $("#"+MathTOUCH.KeyBoard_BASE.id).hide();
                    }else{
                        $("#"+MathTOUCH.KeyBoard_BASE.id).slideUp();
                    }
                    this.stopEvent();
                    this.setEndMT_flag(1);
                }
                
}
                          
MathTOUCH.mathcanvas.prototype.getImageSize = function(xtml){
                let canvasIMG2 = document.createElement("canvas");
                let rep2 = this.EXTML.parseAny(xtml).toExRep();
                let fsize = 48;
                let ctxIMG2 = canvasIMG2.getContext('2d');
                rep2.sizeEx(ctxIMG2,fsize);
                height = rep2.getAscent()+rep2.getDescent();
                return height;
}

MathTOUCH.mathcanvas.prototype.insertEQ = async function(mturl ,xtml, tex, resextree, imgid){
                let mteq;
                if(MathTOUCH.MC2){
                    this.outFocus();
                    target = document.getElementById("chatroom-footer");
                    target.style.minHeight = 50 + "px";
                    document.getElementById("chat_button_area").style.cssText ="display:inline; ";
                    if(MathTOUCH.Device!=MathTOUCH.Device_SP){
                        $("#"+MathTOUCH.KeyBoard_BASE.id).hide();
                    }else{
                        $("#"+MathTOUCH.KeyBoard_BASE.id).slideUp();
                    }
                    document.getElementById("candidates0").remove();
                }else if(MathTOUCH.MTEditor){
                    let mteqimg = document.createElement("img");
                    mteqimg.className = 'mteq';
                    mteqimg.id = imgid;
                    mteqimg.style.cssText = "vertical-align: middle;";
                    mteqimg.setAttribute("data-xtml", xtml);
                    mteqimg.setAttribute("data-mathjax", tex);
                    mteqimg.setAttribute("data-editarea", this.getArea().id);
                    mteqimg.setAttribute("data-fsize", this.getOutputFontSize());
                    if($("#mt_caret").length){
                        mteq = document.getElementById("mt_caret");
                    }else{
                        mteq = document.getElementsByClassName("modifyeq");
                    }
                    
                    let csize;
                    let ofontsize = this.getOutputFontSize();
                    let oimgsize = this.getImageSize(xtml);
                    csize = Math.ceil((ofontsize/48)*10)/10 * oimgsize;
                    if(oimgsize == 48){
                        $(mteqimg).css('margin-top', "-4px");
                    }
                    mteqimg.height = parseInt(csize, 10);
                    mteqimg.src = mturl;
                    this.getCanvas().remove();
                    $(mteq).replaceWith(mteqimg);
                    if(MathTOUCH.Device!=MathTOUCH.Device_SP){
                        $("#"+MathTOUCH.KeyBoard_BASE.id).hide();
                    }
                    this.getArea().setAttribute("contenteditable", "true");
                    this.getArea().focus();
                    var range = document.createRange();
                    range.setStartAfter(mteqimg);
                    var sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(range);
                    MathTOUCH.MTEditor_mtCheckFlag = false;
                    MathTOUCH.pushHistory(this.getArea().id);
                    MathTOUCH.setMTtextarea(this.getArea().id, this.getOutputArea().id);
                    MathTOUCH.MTEditor_focusID = this.getOutputArea().id;
                    MathTOUCH.fontsizeCheck();
                }
}

MathTOUCH.mathcanvas.prototype.insertLaTeX = function(){
    var txtterm=prompt("LaTeX形式の数式をペーストしてください。");
    if(txtterm == null) return;
    var xtmlterm=this.TEX.parse(txtterm);
    if(txtterm!=null){
        this.setCurrentEXtree(xtmlterm);
        this.setPreviousEXtree(this.getCurrentEXtree());
        this.mode3Pros();
    }else{
        this.setHelpMessage("xtmlError");
    }
}
                                       
MathTOUCH.mathcanvas.prototype.mtcancel = function(){
    var result = window.confirm('保存せずに数式の編集を終了していいですか');
    let mteq;
    let mtcanvas = this.getCanvas();
    var test;
    if(result){
        if(MathTOUCH.MTEditor){
            if($("#mt_caret").length){
                mteq = document.getElementById("mt_caret");
                var range = document.createRange();
                range.setStartAfter(mteq);
                var sel = window.getSelection();
            }else{
                mteq = document.getElementsByClassName("modifyeq");
                var range = document.createRange();
                range.setStartAfter(mteq[0]);
                var sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
                $(mteq).toggleClass("modifyeq");
            }
            this.clearCandidates();
        }
        if(MathTOUCH.Device!=MathTOUCH.Device_SP){
            $("#"+MathTOUCH.KeyBoard_BASE.id).hide();
        }else{
            $("#"+MathTOUCH.KeyBoard_BASE.id).slideUp();
        }
        this.getCanvas().remove();
        this.getArea().setAttribute("contenteditable", "true");
        this.getArea().focus();
        sel.removeAllRanges();
        sel.addRange(range);
        if($("#mt_caret").length) mteq.remove();
        MathTOUCH.MTEditor_mtCheckFlag = false;
        MathTOUCH.setMTtextarea(this.getArea().id, this.getOutputArea().id);
        MathTOUCH.fontsizeCheck();
    }else{
        if(MathTOUCH.MC2){
            target = document.getElementById("chatroom-footer");
            target.style.minHeight = 50 + "px";
            document.getElementById("chat_button_area").style.cssText ="display:inline";
            var mt_editor = document.getElementById("mteditor_editarea_0");
            if(mt_editor.childNodes[0] === undefined){
                document.getElementsByClassName("mc2_editarea").style.cssText ="min-height: 20px;";
            }
        }
    }
}

MathTOUCH.mathcanvas.prototype.stopEvent = function() {
                            var mobj=this;
                            let mtcanvas = this.getCanvas();
                            if(mtcanvas.removeEventListener){
                                mtcanvas.removeEventListener("keypress",function(){mobj.getKey()},true);  
                                mtcanvas.removeEventListener("keydown",function(){mobj.getExtKey()},true);
                                mtcanvas.removeEventListener("focus",function(){mobj.setFocus()},true);
                                mtcanvas.removeEventListener("blur", function(){mobj.outFocus()},true);
                            }
                        
};

MathTOUCH.mathcanvas.prototype.getMouseX =  function(event){
        var rect = event.target.getBoundingClientRect();
        var mxdata;
        mxdata = event.clientX - rect.left;
        return mxdata;
};

MathTOUCH.mathcanvas.prototype.getMouseY = function(event){
        var rect = event.target.getBoundingClientRect();
        var mydata;
        mydata = event.clientY - rect.top;
        return mydata;
};

MathTOUCH.mathcanvas.prototype.mouseMoveListner = function(mobj) {
        return function(event){
                    if(mobj.checkDragflag()){
                        mobj.mouseX2=mobj.getMouseX(event);
                        mobj.mouseY2=mobj.getMouseY(event);
                        if((mobj.checkTransMode(0)||mobj.checkTransMode(3)) && mobj.cur.isEmpty() && mobj.mouseX2 > 0 && mobj.mouseX2 < mobj.getAreawidth()+60&& mobj.mouseY2 > 0 && mobj.mouseY2 < mobj.getInputHeight()){
                            if((mobj.mouseX2 - mobj.mouseX1)*(mobj.mouseY2 - mobj.mouseY1)<20){
                                return;
                            }
                            mobj.setMinratio(0);
                            if(mobj.clickEx!=null){
                                if(mobj.checkOpeSelected()){
                                    mobj.clickEx.clearOpeBackColor();
                                }else{
                                    mobj.clickEx.clearBackColor();
                                }
                            }
                            if(mobj.checkNullProcessEXtree()){
                                mobj.getProcessEXtree().clearBSframe();
                            }
                            mobj.clickEx=mobj.getCurrentEXtree();
                            mobj.clickRep=mobj.getCurrentRep();
                            mobj.setFrontback(1);
                            mobj.compDrag(mobj.getCurrentEXtree(),mobj.getCurrentRep(),mobj.mouseX1,mobj.mouseY1,mobj.mouseX2,mobj.mouseY2);
                            mobj.setRmcur(mobj.getCurrentEXtree().removeEditBox());
                            if(mobj.clickEx!=null){
                                if(mobj.checkOpeSelected()){
                                    mobj.clickEx.setOpeBackColor(6);
                                }else{
                                    mobj.clickEx.setBackColor(6);
                                }
                                mobj.setProcessEXtree(mobj.clickEx);
                            }
                            mobj.setTransMode(3);
                            mobj.cur.clear();
                            mobj.MEX.toknum=0;
                        }
                        mobj.paint();
                    }
            }
};

MathTOUCH.mathcanvas.prototype.mouseDownListner = function(mobj) {
        return function(event){
            mobj.setDragflag(true);
            if(mobj.clickEx!=null){
                if(mobj.checkOpeSelected()){
                    mobj.clickEx.clearOpeBackColor();
                }else{
                    mobj.clickEx.clearBackColor();
                }
            }
            mobj.mouseX1=mobj.getMouseX(event);
            mobj.mouseY1=mobj.getMouseY(event);
            mobj.mouseX2=mobj.mouseX1;
            mobj.mouseY2=mobj.mouseY1;
            mobj.paint();
        }
};

MathTOUCH.mathcanvas.prototype.mouseUpListner = function(mobj){
        return function(event){
            if((mobj.mouseX2-mobj.mouseX1)*(mobj.mouseY2-mobj.mouseY1)<20){
                mobj.setSelectMode(false);
                if((mobj.checkTransMode(0) || mobj.checkTransMode(3))&& mobj.cur.isEmpty() && mobj.mouseX1 > 0 && mobj.mouseX1 < mobj.getAreawidth() + 60 && mobj.mouseY1> 0 && mobj.mouseY1 < mobj.getInputHeight()){
                    mobj.setMinx2y2( (mobj.mouseX1-30)*(mobj.mouseX1-30)+(mobj.mouseY1-mobj.getHline())*(mobj.mouseY1-mobj.getHline()));
                    mobj.clickEx=mobj.getCurrentEXtree();
                    mobj.clickRep=mobj.getCurrentRep();
                    mobj.setFrontback(1);
                    var tmp=null;
                    mobj.compClick(mobj.getCurrentEXtree(),mobj.getCurrentRep(),mobj.mouseX1,mobj.mouseY1);
                   if( mobj.getMinx2y2() < 1000){
                        mobj.setErrormessage(null);
                        mobj.clickEx.setEditMark();
                        mobj.getProcessEXtree().clearBSframe();
                        var rmcur=mobj.getCurrentEXtree().removeEditBox();
                        if(rmcur!=null && mobj.checkFrontback(1)){
                            tmp=mobj.getCurrentEXtree().EditMarkpoint();
                            if(tmp!=null){
                                tmp.clearEditMark();
                                tmp.change(new EditEXT(mobj.cur).spacedOn(tmp.copy()));
                                mobj.setProcessEXtree(tmp.ch[0]);
                            }else{
                                mobj.setErrormessage("editMark error fb=1");
                            }
                        }else if(rmcur!=null){
                            tmp=mobj.getCurrentEXtree().EditMarkpoint();
                            if(tmp!=null){
                                tmp.clearEditMark();
                                tmp.change(tmp.copy().spacedOn(new EditEXT(mobj.cur)));
                                mobj.setProcessEXtree(tmp.ch[1]);
                            }else{
                                mobj.setErrormessage("editMark error fb=2");
                            }
                        }
                        mobj.getProcessEXtree().setBSframe(6);
                        mobj.setTransMode(3);
                        mobj.cur.clear();
                        mobj.MEX.toknum=0;
                    }
                }
            }else{
                mobj.setSelectMode(true);
                mobj.setTransMode(3);
            }
            mobj.setDragflag(false);
            mobj.paint();
        }
};

MathTOUCH.mathcanvas.prototype.compDrag = function(cex,crep,mousex1,mousey1,mousex2,mousey2){
        var x,y,w,h,r1,r2,a,d;
        var x1,y1,x2,y2;
        if(cex.cnum>0){
            if(cex.key==MathTOUCH.SP&&cex.order==2&&cex.ch[0]!=null&&cex.ch[0].key==MathTOUCH.SP&&cex.ch[0].order==3){
                if(cex.ch[0].ch[0]!=null){
                    this.compDrag(cex.ch[0].ch[0],crep.getTerm1(0),mousex1,mousey1,mousex2,mousey2);
                }
                if(cex.ch[0].ch[1]!=null){
                    this.compDrag(cex.ch[0].ch[1],crep.getTerm1(1),mousex1,mousey1,mousex2,mousey2);
                }
                if(cex.ch[1]!=null){
                    this.compDrag(cex.ch[1],crep.getTerm1(2),mousex1,mousey1,mousex2,mousey2);
                }
            }else if(cex.key==OTB.theNumberOf("left^")||cex.key==OTB.theNumberOf("left_")){
                if(cex.ch[1]!=null){
                    this.compDrag(cex.ch[1],crep.getTerm1(0),mousex1,mousey1,mousex2,mousey2);
                }
                if(cex.ch[0]!=null){
                    this.compDrag(cex.ch[0],crep.getTerm1(1),mousex1,mousey1,mousex2,mousey2);
                }
            }else if((cex.key==OTB.theNumberOf("backslash")||cex.key==OTB.theNumberOf("\\"))&&cex.order==1){
                if(cex.ch[1]!=null) this.compDrag(cex.ch[1],crep.getTerm1(0),mousex1,mousey1,mousex2,mousey2);
                if(cex.ch[0]!=null) this.compDrag(cex.ch[0],crep.getTerm1(1),mousex1,mousey1,mousex2,mousey2);
            }else if(cex.isSpaced()&&cex.ch[0]!=null&&cex.ch[0].type===MathTOUCH.EDIT){
                if(cex.ch[1]!=null){
                    this.compDrag(cex.ch[1],crep.getTerm1(1),mousex1,mousey1,mousex2,mousey2);
                }
                return;
            }else if(cex.isSpaced()&&cex.ch[1]!=null&&cex.ch[1].type===MathTOUCH.EDIT){
                if(cex.ch[0]!=null){
                    this.compDrag(cex.ch[0],crep.getTerm1(0),mousex1,mousey1,mousex2,mousey2);
                }
                return;
            }else if(cex.type===MathTOUCH.OP1P &&OTB.theEXcode(cex.key,cex.order).charAt(1)=='a'){
                if(cex.ch[0]!=null) this.compDrag(cex.ch[0],crep.getTerm1(1),mousex1,mousey1,mousex2,mousey2);
            }else if(cex.type===MathTOUCH.MAT){
                for(var i=0;i<cex.rownum;i++){
                    for(var j=0;j<cex.colnum;j++){
                        if(cex.ch[i*cex.colnum+j]!=null){
                            this.compDrag(cex.ch[i*cex.colnum+j],crep.getTerm2(i, j),mousex1,mousey1,mousex2,mousey2);
                        }
                    }
                }
            }else{
                for(var i=0;i<cex.cnum;i++){
                    if(cex.ch[i]!=null){
                        this.compDrag(cex.ch[i],crep.getTerm1(i),mousex1,mousey1,mousex2,mousey2);
                    }
                }
            }
        }
        if(cex.type===MathTOUCH.EDIT||(cex.type===MathTOUCH.EMP&&cex.inputWord=="")){
            return;
        }
        x=crep.getLx();
        y=crep.getLy()-crep.getAscent();
        w=crep.getWidth();
        h=crep.getAscent()+crep.getDescent();
        if(x>mousex1){
            x1=x;
        }else{
            x1=mousex1;
        }
        if(x+w<mousex2){
            x2=x+w;
        }else{
            x2=mousex2;
        }
        if(x1>=x2){
            return;
        }
        if(y>mousey1){
            y1=y;
        }else{
            y1=mousey1;
        }
        if(y+h<mousey2){
            y2=y+h;
        }else{
            y2=mousey2;
        }
        if(y1>=y2){
            return;
        }
        r1=(x2-x1)*(y2-y1)/((mousex2-mousex1)*(mousey2-mousey1));
        r2=(x2-x1)*(y2-y1)/(w*h);
        if(r1*r2 >= this.getMinratio()){
            this.setMinratio(r1*r2);
            this.setOpeSelected(false);
            if(this.getMinratio() < 0.1 && cex.cnum>0){
                if(cex.cnum==1){
                    this.setOpeSelected(true);
                }else if(cex.cnum==2){
                    this.setOpeSelected(true);
                }else if(cex.cnum==3){
                    this.setOpeSelected(true);
                }else{
                    this.setOpeSelected(false);
                }
            }else{
                this.setOpeSelected(false);
            }
            this.clickEx=cex;
            this.clickRep=crep;
        }
};

MathTOUCH.mathcanvas.prototype.compClick = function(cex,crep,mousex,mousey){
        var x,y,w,r2;
        if(cex.cnum>0){
            if(cex.key==MathTOUCH.SP&&cex.order==2&&cex.ch[0]!=null&&cex.ch[0].key==MathTOUCH.SP&&cex.ch[0].order==3){
                if(cex.ch[0].ch[0]!=null){
                    this.compClick(cex.ch[0].ch[0],crep.getTerm1(0),mousex,mousey);
                }
                if(cex.ch[0].ch[1]!=null){
                    this.compClick(cex.ch[0].ch[1],crep.getTerm1(1),mousex,mousey);
                }
                if(cex.ch[1]!=null){
                    this.compClick(cex.ch[1],crep.getTerm1(2),mousex,mousey);
                }
            }else if(cex.key==OTB.theNumberOf("left^")||cex.key==OTB.theNumberOf("left_")){
                if(cex.ch[1]!=null){
                    this.compClick(cex.ch[1],crep.getTerm1(0),mousex,mousey);
                }
                if(cex.ch[0]!=null){
                    this.compClick(cex.ch[0],crep.getTerm1(1),mousex,mousey);
                }
            }else if((cex.key==OTB.theNumberOf("backslash")||cex.key==OTB.theNumberOf("\\"))&&cex.order==1){
                if(cex.ch[1]!=null) this.compClick(cex.ch[1],crep.getTerm1(0),mousex,mousey);
                if(cex.ch[0]!=null) this.compClick(cex.ch[0],crep.getTerm1(1),mousex,mousey);
            }else if(cex.isSpaced()&&cex.ch[0]!=null&&cex.ch[0].type===MathTOUCH.EDIT){
                if(cex.ch[1]!=null){
                    this.compClick(cex.ch[1],crep.getTerm1(1),mousex,mousey);
                }
                return;
            }else if(cex.isSpaced()&&cex.ch[1]!=null&&cex.ch[1].type===MathTOUCH.EDIT){
                if(cex.ch[0]!=null){
                    this.compClick(cex.ch[0],crep.getTerm1(0),mousex,mousey);
                }
                return;
            }else if(cex.type===MathTOUCH.OP1P&&OTB.theEXcode(cex.key,cex.order).charAt(1)=='a'){
                if(cex.ch[0]!=null) this.compClick(cex.ch[0],crep.getTerm1(1),mousex,mousey);
            }
            else if(cex.type===MathTOUCH.MAT){
                for(var i=0;i<cex.rownum;i++){
                    for(var j=0;j<cex.colnum;j++){
                        if(cex.ch[i*cex.colnum+j]!=null){
                            this.compClick(cex.ch[i*cex.colnum+j],crep.getTerm2(i, j),mousex,mousey);
                        }
                    }
                }
            }else for(var i=0;i<cex.cnum;i++){
                if(cex.ch[i]!=null){
                    this.compClick(cex.ch[i],crep.getTerm1(i),mousex,mousey);
                }
            }
        }
        if(cex.type===MathTOUCH.EDIT||(cex.type===MathTOUCH.EMP&&cex.inputWord=="")){
            return;
        }
        x=crep.getLx();
        y=crep.getLy();
        w=crep.getWidth();
        r2=(x-mousex)*(x-mousex)+(y-mousey)*(y-mousey);
        if(r2 <= this.getMinx2y2()){
            this.setMinx2y2(r2);
            this.clickEx=cex;
            this.clickRep=crep;
            this.setFrontback(1);
        }
        r2=(x+w-mousex)*(x+w-mousex)+(y-mousey)*(y-mousey);
        if(r2<=this.getMinx2y2()){
            this.setMinx2y2(r2);
            this.clickEx=cex;
            this.clickRep=crep;
            this.setFrontback(2);
        }
};



MathTOUCH.mathcanvas.prototype.clearCandidates = function(){
        var val="";
        this.setCandidates_flag(false);
        top_candidates=0;
        this.setCandidatePosiRemainder(0);
        this.setCurrentCandidateWidth(432);
        if(MathTOUCH.Device==MathTOUCH.Device_PC && !MathTOUCH.MTEditor && !MathTOUCH.MC2 &&!MathTOUCH.mathGraph){
              this.getCandidatelist().innerHTML =val;
              this.getCandidatelist().classList.remove("candidatesStyle");
        }else{
              this.getCandidatelist().innerHTML =val;
              if(!$('#mt_areaL').hasClass("mt_std")){
                  expKB();
              }
              $('#mtkeyboard_candidates_ul').html(val);
        }
}
                                       
MathTOUCH.mathcanvas.prototype.getBracketString = function(str){
    var ans=new Array();
    if(str==null||str==undefined||str.lenght==0) return ans;
    var BL=str.charAt(0);
    var BR="";
    var BR2="",BL2="";
    var BR3="",BL3="";
                        var isTop=true;
    if(BL=="("){ BL2="{";BL3="[";BR=")";BR2="]";BR3="}";}
    else if(BL=="{"){ BL2="(";BL3="[";BR="}";BR2="]";BR3=")";}
    else if(BL=="["){ BL2="(";BL3="{";BR="]";BR2=")";BR3="}";}
    else return ans;
    var bra=1;
    var j,ch;
    for(j=1;j<str.length;j++){
        ch=str.charAt(j);
        if(ch==BL||ch==BL2||ch==BL3) bra++;
        else if(ch==BR||ch==BR2||ch==BR3){bra--;if(bra==0) break;}
        else if(ch=="matBegin"){
            while(!(ch=="matEnd")){
                j++;ch=str.charAt(j);
                if(j>=str.length){alert("matEnd error in (getBracketStr)");ans=[];}
            }
        }
    }
    ans.push(BL);
    if(j<str.length){
        ans.push(str.substring(1,j));
        ans.push(str.charAt(j));
        ans.push(str.substring(j+1));
    }
    else{
        ans.push(str.substring(1));
    }
    return ans;
}
                          
MathTOUCH.mathcanvas.prototype.getRemainInputString = function(ex){
        var ansstr=null;
        if(ex.state==2) return null;
        if(ex.type==MathTOUCH.EDIT){
            ansstr=ex.getInputWord();
        }
        else if(ex.cnum==0){
            ansstr=ex.getInputWord();
        }
        else if(ex.rownum*ex.colnum>0){
            ansstr=ex.getInputWord();
        }
        else if(ex.type==MathTOUCH.OP1P){ansstr=ex.getInputWord();}
        else if(ex.type==MathTOUCH.OP1A){ansstr=ex.inputWord;}
        else if(ex.type==MathTOUCH.OP1B){
                if(ex.inputWord=="(") ansstr=ex.getInputWord();
                else if(ex.inputWord==")") ansstr=ex.inputWord;
                else if(ex.inputWord=="()") ansstr=ex.getInputWord();
                else if(ex.inputWord=="{") ansstr=ex.getInputWord();
                else if(ex.inputWord=="}") ansstr=ex.inputWord;
                else if(ex.inputWord=="{}") ansstr=ex.getInputWord();
                else if(ex.inputWord=="[") ansstr=ex.getInputWord();
                else if(ex.inputWord=="]") ansstr=ex.inputWord;
                else if(ex.inputWord=="[]") ansstr=ex.getInputWord();
                else if(ex.inputWord=="(]") ansstr=ex.getInputWord();
                else if(ex.inputWord=="(}") ansstr=ex.getInputWord();
                else if(ex.inputWord=="[)") ansstr=ex.getInputWord();
                else if(ex.inputWord=="[}") ansstr=ex.getInputWord();
                else if(ex.inputWord=="{)") ransstr=ex.getInputWord();
                else if(ex.inputWord=="{]") ansstr=ex.getInputWord();
                else if(ex.ch[0].inputWord.length==0) ansstr=ex.inputWord;
                else{alert("getInputWord blacket error in EXtree"); return null;}
        }
        else if(ex.type==MathTOUCH.OP2C){
            var left=this.getRemainInputString(ex.ch[0]);
            var leftstr="";
            if(left!=null) leftstr=left;
            if(ex.key==MathTOUCH.SP){
                if(ex.inputWord==" ") ansstr=ex.ch[1].getInputWord();
                else ansstr=ex.inputWord;
            }
            else if(ex.inputWord==null) ansstr=ex.ch[1].getInputWord();
            else if(ex.inputWord==",") ansstr="\u201A"+ex.ch[1].getInputWord();
            else ansstr=ex.inputWord+ex.ch[1].getInputWord();
            ansstr=leftstr+ansstr;
        }
        else if(ex.type==MathTOUCH.OP2P){ansstr=ex.getInputWord();}
        else if(ex.type==MathTOUCH.OP3P){
            ansstr=ex.getInputWord();
        }
        else if(ex.type==MathTOUCH.OP3T){ansstr=ex.inputWord+ex.ch[0].getInputWord()+ex.ch[2].getInputWord();}
        else{alert("getInputWord error in EXtree"); return null;}
        return ansstr;
}
MathTOUCH.baseMargin=5;
MathTOUCH.mathcanvas.prototype.paint = function() {
    var mobj=this;
    this.getCTX().clearRect(0,0,this.getCanvas().width,this.getCanvas().height);
    
    if(this.getCurrentEXtree()!=null){
        this.setCurrentRep(this.getCurrentEXtree().toExRep());
        this.getCurrentRep().drawEx(this.getCTX(),this.getFontSize(),this.getLeftmargin(),-(this.getHline()+this.getCurrentRep().getAscent()+500));
        this.setCanvasSize();
        var _erep=this.EditRep(this.getCurrentEXtree(), this.getCurrentRep());

        if(_erep!=null){
            if(this.checkCurVisual(1)){
                _erep.setCursorColor("gray");
            }else{
                _erep.setCursorColor("white");
            }
            if(_erep.getLx()+_erep.getOpeWidth()>this.getAreawidth()){
                    this.setLeftmargin(this.getLeftmargin()-30+this.getAreawidth()-_erep.getLx()-_erep.getOpeWidth());
            }

            else if(this.getLeftmargin()<10){
                this.setLeftmargin(this.getLeftmargin()-30+this.getAreawidth()-_erep.getLx()-_erep.getOpeWidth());
                if(this.getLeftmargin()>10){
                    this.setLeftmargin(10);
                }
            }else{
                this.setLeftmargin(10);
            }
        }else{
            var _curlx=this.getCurrentRep().getLx();
            var _curwidth=this.getCurrentRep().getWidth();
            _erep=this.getRepWithColor(this.getCurrentRep(),5);
            var d;
            this.setLeftmargin(10);
            this.getCurrentEXtree().setOpeColorRight(6);
        }
        if((this.getHline()+this.getCurrentRep().getDescent())>this.getCanvas().height || 0 > this.getHline()-this.getCurrentRep().getAscent() ){
            this.setCanvasSize();
        }
        this.getCurrentRep().drawEx(this.getCTX(),this.getFontSize(),this.getLeftmargin(),this.getHline());
        if(this.cur.isEmpty()&&this.getResult()==null&&this.checkTransMode(0)&&this.getFocusflag()!=true){
            if(this.getLang()==="ja"){
                MathTOUCH.drawString(this.getCTX(),"このエリアをクリックして数式文字列を入力してください。",this.getLeftmargin()+20,this.getHline(),this.getFontSize(),"","Lucida Grande", "lightGray");
                MathTOUCH.drawString(this.getCTX(),"キーボードは必ず半角英数字モードにしてください。",this.getLeftmargin()+20,this.getHline()+30,this.getFontSize(), "", "Lucida Grande", "lightGray");
            }else if(this.getLang()==="en"){
                if(!MathTOUCH.MTEditor  && !MathTOUCH.MC2 && !MathTOUCH.mathGraph){
                    MathTOUCH.drawString(this.getCTX(),"Type a mathematical expression.",this.getLeftmargin()+20,this.getHline(),this.getFontSize(), "", "Lucida Grande", "lightGray");
                }else{
                    MathTOUCH.drawString(this.getCTX(),"Type a mathematical expression.",this.getLeftmargin(),this.getHline(),this.getFontSize(),"","Lucida Grande","lightGray");
                }
            }
        }
    }
    

    if(this.checkSubMode(0)){
    }
    else if(this.checkSubMode(1))
    }
    else if(this.checkSubMode(2)){
        var reps=new Array();
        var len,xp,posi;
        this.clearAnsTex();
        if(!this.checkNullProcessEXtree()){}
        else if(this.getProcessEXtree().type===MathTOUCH.VAR || this.getProcessEXtree().type===MathTOUCH.EMP){
           
            if(this.getProcessEXtree().isMultipleVARorSYM()){
                var ans;
                var i=0;
                var next=this.getProcessEXtree();
               
                var dicEold=DIC.getDicE();
                DIC.setDicE(-1);
                    
               
                if(!this.getCandidates_flag()){
                    xp=0;
                    yp=this.getHline()+this.getCurrentRep().getDescent();
                    var posi=this.getRepWithColor(this.getCurrentRep(),5);
                        
                    if(posi!=null){
                        xp=xp+posi.getLx();
                    }
                    this.getCandidatelist().textContent = null;
                    var candidates_val = new Array(len);
                    var mobj=this;
                    while((next=DIC.dicNextMatch(this.getProcessEXtree().inputWord))!=null){
                        for(var jj=0;jj<KTB.keyLengthOf(next.key);jj++){
                            ans=new EXtree0(0,next.type,KTB.getLogWord(next.key,jj),this.getProcessEXtree().inputWord);
                            this.setAnsTex(i, this.tree.TeXof(ans,true));
                            candidates_val[i] =  document.createElement("li");
                            candidates_val[i].textContent = "\\({"+this.getAnsTex(i)+"}\\)";
                            candidates_val[i].id ="li_candidates_"+i;
                            if(MathTOUCH.Device==MathTOUCH.Device_PC){
                                candidates_val[i].onmousedown = (function(i){
                                                                return function(){
                                                                  mobj.setmtTOUCH(true);
                                                                }
                                                                })(i);
                                candidates_val[i].onmousemove = (function(i){
                                                                return function(){
                                                                 mobj.setmtTOUCH(false);
                                                                }
                                                                })(i);
                                candidates_val[i].onmouseup = (function(i){
                                                                  return function(){
                                                                if(mobj.checkmtTOUCH()){
                                                                    mobj.mt_touchEnd(i);
                                                                    mobj.setmtTOUCH(false);
                                                                }
                                                                  }
                                                                  })(i);
                            }else{
                                candidates_val[i].ontouchstart = (function(i){
                                                                  return function(){
                                                                  mobj.setmtTOUCH(true);
                                                                      i.preventDefault();
                                                                  }
                                                                  })(i);
                                candidates_val[i].ontouchmove = (function(i){
                                                                 return function(){
                                                                 mobj.setmtTOUCH(false);
                                                                 }
                                                                 })(i);
                                candidates_val[i].ontouchend = (function(i){
                                                                return function(){
                                                                if(mobj.checkmtTOUCH()){
                                                                mobj.mt_touchEnd(i);
                                                                mobj.setmtTOUCH(false);
                                                                }
                                                                }
                                                                })(i);
                            }
                            this.getCandidatelist().appendChild(candidates_val[i]);
                        }
                        
                    }
                    if(MathTOUCH.Device==MathTOUCH.Device_PC && !MathTOUCH.MTEditor && !MathTOUCH.MC2 &&!MathTOUCH.mathGraph){
                        this.getCandidatelist().style.left       = xp + "px";
                        this.getCandidatelist().stylestyle.top        = yp +10+ "px";
                        this.getCandidatelist().style.className = "candidatesStyle";
                        $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                        MathJax.Hub.Queue(["Typeset",MathJax.Hub,"candidates"]);
                    }else{
                        $('#mtkeyboard_candidates_ul').html(candidates_val);
                        $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                    }
                        
                    this.setCandidates_flag(true);
                }else{
                    if(MathTOUCH.Device==MathTOUCH.Device_PC && !MathTOUCH.MTEditor && !MathTOUCH.MC2&&!MathTOUCH.mathGraph){
                        yp=this.getHline()+this.getCurrentRep().getDescent();
                        this.getCandidatelist().style.top           = yp +10+ "px";
                        $("li:nth-child("+(this.getPrescpOrder())+")").removeClass("selected");
                        $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                    }else{
                        $('#mtkeyboard_candidates_ul').html(candidates_val);
                        $("li:nth-child("+(this.getPrescpOrder())+")").removeClass("selected");
                        $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                    }
                }
                DIC.setDicE(dicEold);
            }
            else if(this.getProcessEXtree().type===MathTOUCH.EMP){
                this.setErrormessage("EMP");
            }
            else{
                len=KTB.keyLengthOf(this.getScpKey());
                var temp;
                var nodeid=0;
                this.clearAnsTex();
                if(!this.getCandidates_flag()){
                    xp=0;
                    yp=this.getHline()+this.getCurrentRep().getDescent();
                    posi=this.getRepWithColor(this.getCurrentRep(),5);
                    if(posi!=null){
                        xp=xp+posi.getLx();
                    }
                    this.getCandidatelist().textContent = null;
                    var candidates_val = new Array(len);
                    var mobj=this;
                    for(var i=0;i<len;i++){
                        temp=new VariableEXT(0,KTB.getLogWord(this.getScpKey(),i),this.getProcessEXtree().inputWord);
                        this.setAnsTex(i, this.tree.TeXof(temp,true));
                        candidates_val[i] =  document.createElement("li");
                        candidates_val[i].textContent = "\\({"+this.getAnsTex(i)+"}\\)";
                        candidates_val[i].id ="li_candidates_"+i;
                        if(MathTOUCH.Device==MathTOUCH.Device_PC){
                            candidates_val[i].onmousedown = (function(i){
                                                            return function(){
                                                              mobj.setmtTOUCH(true);
                                                            }
                                                            })(i);
                            candidates_val[i].onmousemove = (function(i){
                                                            return function(){
                                                             mobj.setmtTOUCH(false);
                                                            }
                                                            })(i);
                            candidates_val[i].onmouseup = (function(i){
                                                              return function(){
                                                            if(mobj.checkmtTOUCH()){
                                                                mobj.mt_touchEnd(i);
                                                                mobj.setmtTOUCH(false);
                                                            }
                                                              }
                                                              })(i);
                        }else{
                            candidates_val[i].ontouchstart = (function(i){
                                                              return function(){
                                                              mobj.setmtTOUCH(true);
                                                                  i.preventDefault();
                                                              }
                                                              })(i);
                            candidates_val[i].ontouchmove = (function(i){
                                                             return function(){
                                                             mobj.setmtTOUCH(false);
                                                             }
                                                             })(i);
                            candidates_val[i].ontouchend = (function(i){
                                                            return function(){
                                                            if(mobj.checkmtTOUCH()){
                                                            mobj.mt_touchEnd(i);
                                                            mobj.setmtTOUCH(false);
                                                            }
                                                            }
                                                            })(i);
                        }
                        this.getCandidatelist().appendChild(candidates_val[i]);
                    }
                    if(MathTOUCH.Device==MathTOUCH.Device_PC && !MathTOUCH.MTEditor && !MathTOUCH.MC2 &&!MathTOUCH.mathGraph){
                        this.getCandidatelist().style.left    = xp +"px";
                        this.getCandidatelist().style.top     = yp + 10 + "px";
                        this.getCandidatelist().className = "candidatesStyle";
                        if(this.getScpOrder()>=0) $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                        MathJax.Hub.Queue(["Typeset",MathJax.Hub,"candidates"]);
                    }else{
                        $('#mtkeyboard_candidates_ul').html(candidates_val);
                        if(this.getScpOrder()>=0) $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                    }
                    this.setCandidates_flag(true);
                }else{
                    if(MathTOUCH.Device==MathTOUCH.Device_PC && !MathTOUCH.MTEditor && !MathTOUCH.MC2 &&!MathTOUCH.mathGraph){
                        yp=this.getHline()+this.getCurrentRep().getDescent();
                        this.getCandidatelist().style.top           = yp +10+ "px";
                        $("li:nth-child("+(this.getPrescpOrder())+")").removeClass("selected");
                        $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                    }else{
                        $('#mtkeyboard_candidates_ul').html(candidates_val);
                        $("li:nth-child("+(this.getPrescpOrder())+")").removeClass("selected");
                        $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                    }
                }
            }
        
        }
        else if(this.getProcessEXtree().type===MathTOUCH.SYM || this.getProcessEXtree().type===MathTOUCH.XTML){
            var next=null;
            var ans;
            var i=0;
            if(this.getProcessEXtree().type===MathTOUCH.SYM){
                var dicEold=DIC.getDicE();
                DIC.setDicE(-1);
                /*PC用*/
                if(!this.getCandidates_flag()){
                    xp=0;
                    yp=this.getHline()+this.getCurrentRep().getDescent();
                    posi=this.getRepWithColor(this.getCurrentRep(),5);
                    if(posi!=null){
                        xp=xp+posi.getLx();
                    }
                    this.getCandidatelist().textContent = null;
                    var candidates_val = new Array(this.getSNUM());
                    var mobj=this;
                    while((next=DIC.dicNextMatch(this.getProcessEXtree().inputWord))!=null){
                        for(var jj=0;jj<KTB.keyLengthOf(next.key);jj++){
                            ans=new EXtree0(0,next.type,KTB.getLogWord(next.key,jj),this.getProcessEXtree().inputWord);
                            this.setAnsTex(i,this.tree.TeXof(ans,true));
                            candidates_val[i] =  document.createElement("li");
                            candidates_val[i].textContent = "\\({"+this.getAnsTex(i)+"}\\)";
                            candidates_val[i].id ="li_candidates_"+i;
                            if(MathTOUCH.Device==MathTOUCH.Device_PC){
                                candidates_val[i].onmousedown = (function(i){
                                                                return function(){
                                                                  mobj.setmtTOUCH(true);
                                                                }
                                                                })(i);
                                candidates_val[i].onmousemove = (function(i){
                                                                return function(){
                                                                 mobj.setmtTOUCH(false);
                                                                }
                                                                })(i);
                                candidates_val[i].onmouseup = (function(i){
                                                                  return function(){
                                                                if(mobj.checkmtTOUCH()){
                                                                    mobj.mt_touchEnd(i);
                                                                    mobj.setmtTOUCH(false);
                                                                }
                                                                  }
                                                                  })(i);
                            }else{
                                candidates_val[i].ontouchstart = (function(i){
                                                                  return function(){
                                                                  mobj.setmtTOUCH(true);
                                                                      i.preventDefault();
                                                                  }
                                                                  })(i);
                                candidates_val[i].ontouchmove = (function(i){
                                                                 return function(){
                                                                 mobj.setmtTOUCH(false);
                                                                 }
                                                                 })(i);
                                candidates_val[i].ontouchend = (function(i){
                                                                return function(){
                                                                if(mobj.checkmtTOUCH()){
                                                                mobj.mt_touchEnd(i);
                                                                mobj.setmtTOUCH(false);
                                                                }
                                                                }
                                                                })(i);
                            }
                            this.getCandidatelist().appendChild(candidates_val[i]);
                        }
                    }
                    DIC.setDicE(dicEold);
                    if(MathTOUCH.Device==MathTOUCH.Device_PC && !MathTOUCH.MTEditor && !MathTOUCH.MC2 &&!MathTOUCH.mathGraph){
                        this.getCandidatelist().style.left       = xp + "px";
                        this.getCandidatelist().style.top           = yp +10+ "px";
                        this.getCandidatelist().className = "candidatesStyle";
                        $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                        MathJax.Hub.Queue(["Typeset",MathJax.Hub,"candidates"]);
                    }else{
                        $('#mtkeyboard_candidates_ul').css('width',($( window ).width()*0.9)+'px');
                        $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                    }
                    this.setCandidates_flag(true);
                }else{
                    if(MathTOUCH.Device==MathTOUCH.Device_PC && !MathTOUCH.MTEditor && !MathTOUCH.MC2 &&!MathTOUCH.mathGraph){
                        yp=this.getHline()+this.getCurrentRep().getDescent();
                        this.getCandidatelist().style.top           = yp +10+ "px";
                        DIC.setDicE(dicEold);
                        $("li:nth-child("+(this.getPrescpOrder())+")").removeClass("selected");
                        $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                    }else{
                        $('#mtkeyboard_candidates_ul').css('width',($( window ).width()*0.9)+'px');
                        $("li:nth-child("+(this.getPrescpOrder())+")").removeClass("selected");
                        $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                    }
                }
            }
        }
    }else if(this.checkSubMode(3)){
        var len,xp,yp;
        var reps=new Array();
        if(this.checkNullProcessEXtree() && ((this.getProcessEXtree().type>=MathTOUCH.OP1P&&this.getProcessEXtree().type<=MathTOUCH.OP3P)||this.getProcessEXtree().type===MathTOUCH.OP3T)){

            var posi;
            if(!this.getCandidates_flag()){
                xp=0;
                yp=this.getHline()+this.getCurrentRep().getDescent();
                posi=this.getRepWithColor(this.getCurrentRep(),5);
                if(posi!=null){
                    xp=xp+posi.getLx();
                }
                this.getCandidatelist().textContent = null;
                var candidates_val = new Array(this.getSNUM());
                var mobj=this;
                for(var i=0;i<this.getSNUM();i++){
                    candidates_val[i] =  document.createElement("li");
                    candidates_val[i].textContent = "\\({"+this.getAnsTex(i)+"}\\)";
                    candidates_val[i].id ="li_candidates_"+i;
                    if(MathTOUCH.Device==MathTOUCH.Device_PC){
                        candidates_val[i].onmousedown = (function(i){
                                                        return function(){
                                                          mobj.setmtTOUCH(true);
                                                        }
                                                        })(i);
                        candidates_val[i].onmousemove = (function(i){
                                                        return function(){
                                                         mobj.setmtTOUCH(false);
                                                        }
                                                        })(i);
                        candidates_val[i].onmouseup = (function(i){
                                                          return function(){
                                                        if(mobj.checkmtTOUCH()){
                                                            mobj.mt_touchEnd(i);
                                                            mobj.setmtTOUCH(false);
                                                        }
                                                          }
                                                          })(i);
                    }else{
                        candidates_val[i].ontouchstart = (function(i){
                                                          return function(){
                                                          mobj.setmtTOUCH(true);
                                                              i.preventDefault();
                                                          }
                                                          })(i);
                        candidates_val[i].ontouchmove = (function(i){
                                                         return function(){
                                                         mobj.setmtTOUCH(false);
                                                         }
                                                         })(i);
                        candidates_val[i].ontouchend = (function(i){
                                                        return function(){
                                                        if(mobj.checkmtTOUCH()){
                                                        mobj.mt_touchEnd(i);
                                                        mobj.setmtTOUCH(false);
                                                        }
                                                        }
                                                        })(i);
                    }
                    this.getCandidatelist().appendChild(candidates_val[i]);
                }
                if(MathTOUCH.Device==MathTOUCH.Device_PC && !MathTOUCH.MTEditor && !MathTOUCH.MC2 &&!MathTOUCH.mathGraph){
                    this.getCandidatelist().style.left       = xp + "px";
                    this.getCandidatelist().style.top           = yp +10+ "px";
                    this.getCandidatelist().className = "candidatesStyle";
                    $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                    MathJax.Hub.Queue(["Typeset",MathJax.Hub,"candidates"]);
                }else{
                    $('#mtkeyboard_candidates_ul').html(candidates_val);
                    $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                }
                this.setCandidates_flag(true);
            }else{
                if(MathTOUCH.Device==MathTOUCH.Device_PC && !MathTOUCH.MTEditor && !MathTOUCH.MC2 &&!MathTOUCH.mathGraph){
                    yp=this.getHline()+this.getCurrentRep().getDescent();
                    this.getCandidatelist().style.top           = yp+10+ "px";
                    $("li:nth-child("+(this.getPrescpOrder())+")").removeClass("selected");
                    $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                }else{
                    $('#mtkeyboard_candidates_ul').html(candidates_val);
                    $("li:nth-child("+(this.getPrescpOrder())+")").removeClass("selected");
                    $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                }
            }
        }
    }
    else if(this.checkSubMode(4)){
        this.clearAnsTex();
        if(this.checkNullProcessEXtree() && this.getProcessEXtree().type===MathTOUCH.MAT){
            if(this.getMcol()===0){
                this.setHelpMessage("matrix1");
            }else if(this.getMcol()%2===1){
                this.setHelpMessage("matrix2");
            }else if(this.getMcol()%2===0){
                this.setHelpMessage("matrix3");
            }else{
                this.setHelpMessage("matrix4");
            }
            var helpcommentID = this.getHelpcommentID();
            var helpmessage = this.getHelpMessage();
            $.getJSON("langs/" + this.getLang() + ".json", function (data) {
                helpcommentID.innerHTML = "&#x25B6; "+data[helpmessage];
                      });
        }
    }
    else if(this.checkSubMode(5)){
        var len=0;
        this.clearAnsTex();
        if(this.isPredicted()) len=this.getPrediction().getLastNumber();
        if(len>0){
            this.setSNUM(len);
            var posi,xp,yp;
            if(this.getCandidates_flag()){
                xp = 0;
                yp = this.getHline()+this.getCurrentRep().getDescent();
                posi=this.getRepWithColor(this.getCurrentRep(),7);
                if(posi!=null){
                    xp=xp+posi.getLx();
                }
                this.getCandidatelist().textContent = null;
                var candidates_val = new Array(this.getSNUM());
                var candidates_img = new Array(this.getSNUM());
                var mobj=this;
                for(var i=0;i<this.getSNUM();i++){
                    candidates_val[i] =  document.createElement("li");
                    candidates_val[i].id =  "li_candidates_"+i;
                    candidates_img[i]  = document.createElement("img");
                    candidates_img[i].src = this.getImageSrc(this.getPrediction().getEXtreeAt(i)).val1;
                    candidates_img[i].className = "candidatesStyleIMG";
                    candidates_val[i].appendChild(candidates_img[i]);
                    if(MathTOUCH.Device==MathTOUCH.Device_PC){
                        candidates_val[i].onmousedown = (function(i){
                                                        return function(){
                                                          mobj.setmtTOUCH(true);
                                                        }
                                                        })(i);
                        candidates_val[i].onmousemove = (function(i){
                                                        return function(){
                                                         mobj.setmtTOUCH(false);
                                                        }
                                                        })(i);
                        candidates_val[i].onmouseup = (function(i){
                                                          return function(){
                                                        if(mobj.checkmtTOUCH()){
                                                            mobj.mt_touchEnd(i);
                                                            mobj.setmtTOUCH(false);
                                                        }
                                                          }
                                                          })(i);
                    }else{
                        candidates_val[i].ontouchstart = (function(i){
                                                          return function(){
                                                          mobj.setmtTOUCH(true);
                                                              i.preventDefault();
                                                          }
                                                          })(i);
                        candidates_val[i].ontouchmove = (function(i){
                                                         return function(){
                                                         mobj.setmtTOUCH(false);
                                                         }
                                                         })(i);
                        candidates_val[i].ontouchend = (function(i){
                                                        return function(){
                                                        if(mobj.checkmtTOUCH()){
                                                        mobj.mt_touchEnd(i);
                                                        mobj.setmtTOUCH(false);
                                                        }
                                                        }
                                                        })(i);
                    }
                    this.getCandidatelist().appendChild(candidates_val[i]);
                }
                if(MathTOUCH.Device==MathTOUCH.Device_PC && !MathTOUCH.MTEditor && !MathTOUCH.MC2 &&!MathTOUCH.mathGraph){
                    
                    if(MathTOUCH.MTEditor || MathTOUCH.MC2 ||MathTOUCH.mathGraph){
                        let mtcanvas = this.getCanvas();
                        yp =  mtcanvas.getBoundingClientRect().top;
                        xp = mtcanvas.getBoundingClientRect().left;
                        w = mtcanvas.getBoundingClientRect().width;
                        this.getCandidatelist().style.left    = xp - w/2 +"px";
                        this.getCandidatelist().style.top     = yp + 7 + "px";
                    }else{
                        this.getCandidatelist().style.left    = xp +"px";
                        this.getCandidatelist().style.top     = yp + 10 + "px";
                    }
                    this.getCandidatelist().className = "candidatesStyle";
                    if(this.getScpOrder()>=0) $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                }else{
                    $('#mtkeyboard_candidates_ul').html(candidates_val);
                    $("li:nth-child("+(this.getScpOrder())+")").removeClass("selected");
                    $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                }
                this.setCandidates_flag(true);
            }else{
                if(MathTOUCH.Device==MathTOUCH.Device_PC && !MathTOUCH.MTEditor && !MathTOUCH.MC2 &&!MathTOUCH.mathGraph){
                    this.getCandidatelist().style.top           = yp+10+ "px";
                    $("li:nth-child("+(this.getPrescpOrder())+")").removeClass("selected");
                    $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                }else{
                    $('#mtkeyboard_candidates_ul').html(candidates_val);
                    if(this.getScpOrder()>=0){
                        $("li:nth-child("+(this.getScpOrder())+")").removeClass("selected");
                        $("li:nth-child("+(this.getScpOrder()+1)+")").addClass("selected");
                    }
                }
            }
        }
    }
};

MathTOUCH.mathcanvas.prototype.mt_autoScroll = function(){
                        let mtcandidate = document.getElementById("li_candidates_"+this.getScpOrder());
                        let mtcandidatediv = document.getElementById("mt_areaL");
                        let mtcandidatedivWidth =  this.getCurrentCandidateWidth();
                        let currentRemainder = mtcandidatedivWidth - (mtcandidate.offsetLeft + mtcandidate.offsetWidth);
                        if(this.getScpOrder()==0){
                            mtcandidatediv.scrollLeft=0;
                            this.setCurrentCandidateWidth(432);
                            this.setCandidatePosiRemainder(0);
                        }else if(currentRemainder<0){
                            mtcandidatediv.scrollLeft =　mtcandidatediv.scrollLeft+(mtcandidatediv.offsetWidth+this.getCandidatePosiRemainder());
                            mtcandidatedivWidth = mtcandidatedivWidth + mtcandidatediv.offsetWidth;
                            this.setCurrentCandidateWidth(mtcandidatedivWidth);
                        }
                        
                        this.setCandidatePosiRemainder(mtcandidatedivWidth - (mtcandidate.offsetLeft + mtcandidate.offsetWidth));
};

MathTOUCH.mathcanvas.prototype.mt_autoScrollup = function() {
                        let mtcandidate = document.getElementById("li_candidates_"+this.getScpOrder());
                        let mtcandidatediv = document.getElementById("mt_areaL");
                        let mtcandidatedivWidth =  this.getCurrentCandidateWidth();
                        if((mtcandidate.offsetLeft-mtcandidatediv.scrollLeft) < 0){
                            mtcandidatediv.scrollLeft =　mtcandidatediv.scrollLeft - mtcandidatediv.offsetWidth;
                            mtcandidatedivWidth = mtcandidatedivWidth - mtcandidatediv.offsetWidth;
                            this.setCurrentCandidateWidth(mtcandidatedivWidth);
                        }
};

MathTOUCH.mathcanvas.prototype.mt_touchEnd = function(touch_num){
        if(this.checkSubMode(2)){
            this.setPrescpOrder(this.getScpOrder()+1);
            if(this.getProcessEXtree().type===MathTOUCH.VAR||this.getProcessEXtree().type===MathTOUCH.SYM){
                    this.selectSim(touch_num);
            }else if(this.getProcessEXtree().type===MathTOUCH.XTML){
                var next=LOG.logMatch(this.getProcessEXtree().inputWord,touch_num);
                if(next!=null){
                    this.getProcessEXtree().val=next.theWord;
                    this.getProcessEXtree().setBaseColor(2);
                }else {
                    this.setErrormessage("Mouse select error in MathCanvas!");
                    return;
                }
            }
        }else if(this.checkSubMode(3)){
            var next=this.getProcessEXtree();
            this.setPrescpOrder(this.getScpOrder()+1);
            var dist=this.getSNUM()-this.getScpOrder()+touch_num;
            if(dist>=this.getSNUM()) dist=dist-this.getSNUM();
            for(var count=0;count<dist;count++){
                next=this.getProcessEXtree().nextType();
                if(next==null){this.setErrormessage("next null in MathCanvas"); break;}
                if(next!=this.getProcessEXtree()){this.setProcessEXtree(next);}
            }
            this.setScpOrder(touch_num);
            this.setArgument();
            this.getProcessEXtree().setOpeBackColor(5);
            this.setSubMode(3);
        }else if(this.checkSubMode(5)){
            this.setPrescpOrder(this.getScpOrder()+1);
            this.setScpOrder(touch_num);
        }
        if(this.checkPrescpOrder(this.getScpOrder()+1)){
            this.setPrescpOrder(-1);
        }
    this.paint();
        this.mouseclick();
};


MathTOUCH.mathcanvas.prototype.allComplete = function(){
        this.setShift(true);
        this.keyProcess(MathTOUCH.K_ENTER);
};

MathTOUCH.mathcanvas.prototype.allClearEQ = function(){
        this.setShift(true);
        this.keyProcess(MathTOUCH.K_BS);
};

MathTOUCH.mathcanvas.prototype.mouseclick = function(){
        this.setGK(MathTOUCH.K_ENTER);
        this.keyProcess(MathTOUCH.K_ENTER);
};
                
MathTOUCH.mathcanvas.prototype.unComplete = function(ex){
    if(ex==null) return;
    ex.state=0;
    for(var i=0;i<ex.cnum;i++) this.unComplete(ex.ch[i]);
};
                                       
MathTOUCH.mathcanvas.prototype.makeOperand = function(ex){
    if(ex.cnum==0||ex.type==MathTOUCH.OP1A) return ex;
    var ans=ex.copy();
    var i0=0;
    if(ex.type==MathTOUCH.OP2C||ex.type==MathTOUCH.OP3T){
        i0=1;
    }
    for(var i=i0;i<ex.cnum;i++){
        var opistr=ex.ch[i].getInputWord();
        var eb=new exR.EditBox();
        eb.clear();
        eb.insert(opistr);
        eb.setCursorOff();
        ans.ch[i].change(new EditEXT(eb));
        this.unComplete(ans.ch[i]);
    }
    return ans;
};


MathTOUCH.mathcanvas.prototype.predictiveConversion = function(myres,linearStr){
    var anstop=new MathTOUCH.Top10();
    var Nbest=10;
    anstop.setMax(Nbest);
    var vans;
    var starttime=new Date().getTime();
    var middle;
    var ttrie=new MathTOUCH.termTrie(linearStr);
    ttrie.addAnotherOpeTypeRoot();
    ttrie.makeMiddleList();
    var mmm;
    var projNum=ttrie.middleList.length;
    var projMax=Nbest;
    var pcount=0;
    var ncount=0;
    var termNum=0;
    if(projNum>0) termNum=ttrie.middleList[0].toknum+1;

    if(projNum>30) starttime=new Date().getTime();
    for(var j=0;j<projNum;j++){
        mmm=ttrie.middleList[j];
        mmm.divpointTrace();
        mmm.setMax(Nbest);
        middle=new Date().getTime();
        if((middle-starttime)>3000){
            j=projNum;
            break;
        }
        
        if(myres==null){
            if(this.targetMode==1){
                if(mmm.Termtype[0]==MathTOUCH.NUM){
                    var myresN=mmm.makeEXtree(0,1);
                    if(mmm.outTerm[0].length>1){
                        myresN=new NumberEXT(2,mmm.outTerm[0].charAt(0));
                        vans=mmm.make1EXtreeTagStructure(myresN,1,1,starttime);
                    }
                    else if(mmm.toknum>1&&(mmm.Termtype[1]==MathTOUCH.OP2C||mmm.Termtype[1]==MathTOUCH.OP1A||(mmm.Termtype[1]==MathTOUCH.OP1B&&(mmm.outTerm[1]==")"||mmm.outTerm[1]=="}"||mmm.outTerm[1]=="]")))){
                            vans=mmm.make1EXtreeTagStructure(myresN,1,2,starttime);
                    }
                    else{
                        vans=mmm.make1EXtreeTagStructure(myresN,1,1,starttime);
                    }
                }
                else if(mmm.Termtype[0]==MathTOUCH.OP1B){
                    vans=mmm.makeEXtreeTagStructure(0,mmm.toknum,starttime);
                }
                else{
                    vans=mmm.makeEXtreeTagStructure(0,1,starttime);
                }
            }
            else if(this.targetMode==2){
                vans=mmm.makeTargetEXtreeStructure(this.tagex,0,mmm.toknum,starttime);
            }
            else if(mmm.toknum>termNum&&anstop.getLastNumber()>0){
                continue;
            }
            else {
                vans=mmm.makeEXtreeStructure(0,mmm.toknum,starttime);
            }
        }
        else if(myres.type==MathTOUCH.EMP&&myres.inputWord==""){
                    if(this.targetMode==1){
                        if(mmm.Termtype[0]==MathTOUCH.NUM){
                            var myresN=mmm.makeEXtree(0,1);
                            vans=mmm.make1EXtreeTagStructure(myresN,1,2,starttime);
                        }
                        else{
                            vans=mmm.makeEXtreeTagStructure(0,1,starttime);
                        }
                    }
                    else if(this.targetMode==2){
                        vans=mmm.makeTargetEXtreeStructure(this.tagex,0,mmm.toknum,starttime);
                    }
                    else if(mmm.toknum>termNum&&anstop.getLastNumber()>0){
                        continue;
                    }
                    else vans=mmm.makeEXtreeStructure(0,mmm.toknum,starttime);
        }
        else{
                    if(this.targetMode==1){
                        if(mmm.Termtype[0]==MathTOUCH.OP2C||mmm.Termtype[0]==MathTOUCH.OP1A||(mmm.Termtype[0]==MathTOUCH.OP1B&&(mmm.outTerm[0]==")"||mmm.outTerm[0]=="}"||mmm.outTerm[0]=="]"))){
                            vans=mmm.make1EXtreeTagStructure(myres,0,1,starttime);
                        }
                        else if(mmm.Termtype[0]===MathTOUCH.OP3T){
                        }
                        else{
                            vans=mmm.make1EXtreeTagStructure(myres,0,0,starttime);
                        }
                       
                    }
                    else if(this.targetMode==2){
                        
                        vans=mmm.make1TargetEXtreeStructure(myres,this.tagex,0,mmm.toknum,starttime);
                        if(vans.getLastNumber()>0) j=projNum;
                    }
                    else if(mmm.toknum>termNum&&anstop.getLastNumber()>0){
                        continue;
                    }
                    else{
                        vans=mmm.make1EXtreeStructure(myres,0,mmm.toknum,starttime);
                        
                        if(vans.getLastNumber()==0 && anstop.getLastNumber()==0){
                            vans=mmm.remake1EXtreeStructure(myres,0,mmm.toknum,starttime);
                        }
                    }
        }

        for(var i=0;i<vans.getLastNumber();i++){
            if(this.targetMode==2){
                anstop.addInUni(this.makeOperand(vans.getEXtreeAt(i)),vans.getScoreAt(i));
            }
            else if(mmm.toknum==1){
                anstop.addIn(vans.getEXtreeAt(i),vans.getScoreAt(i));

            }
            else if(anstop.rankInUni(vans.getEXtreeAt(i),vans.getScoreAt(i))>=0){

            }
        }
        middle=new Date().getTime();
        if((middle-starttime)>3000){
            j=projNum;
            break;
        }
    }
    return anstop;
};

MathTOUCH.mathcanvas.prototype.realtimePrediction = function(){
        this.setSubMode(5);
        this.setCandidates_flag(false);
        if(!this.cur.isEmpty()){
            var totalcurrent=this.cur.getText();
            var subres=this.getCurrentEXtree().EDITpoint();
            if(subres==null){ this.setPrediction(this.predictiveConversion(this.getResult(),totalcurrent));}
            else{
                subres.clearBSframe();
                if(subres.parent!=null&&subres.parent.isSpaced()&&subres.pnum==1){
                    if(subres.parent.state==2){
                        this.setPrediction(this.predictiveConversion(null,totalcurrent));
                    }
                    else{
                        subres=subres.parent.ch[0].copy();
                        this.setPrediction(this.predictiveConversion(subres,totalcurrent));
                    }
                }
                else if(subres.parent!=null&&subres.parent.type==MathTOUCH.OP2C){
                    if(subres.parent.state==2){
                        if(this.targetMode==2&&subres.parent.inputWord==this.tagex.inputWord){
                            var str2=subres.parent.inputWord+totalcurrent;
                            var ch0=subres.parent.ch[0].copy();
                            this.setPrediction(this.predictiveConversion(ch0,str2));
                        }
                        else{
                            this.setPrediction(this.predictiveConversion(null,totalcurrent));
                        }
                    }
                    else if(subres.pnum==1){
                        subres=subres.parent.ch[0].copy();
                        this.setPrediction(this.predictiveConversion(subres,totalcurrent));
                    }
                    else{
                        this.setPrediction(this.predictiveConversion(null,totalcurrent));
                    }
                }
                else{
                    this.setPrediction(this.predictiveConversion(null,totalcurrent));
                }
            }
            this.setScpOrder(-1);
        }
        else{
            this.setPrediction(null);
            this.clearCandidates();
        }
}

MathTOUCH.mathcanvas.prototype.paintPrediction = function(){
    var count=0;
    while(this.getisPPdoing()){
        count++;
        if(count>1000){
            this.setisPPdoing(false);
            this.setPrediction(null);
            return;
        }
    }
    this.setisPPdoing(true);
    this.realtimePrediction();
    if(this.getPrediction()!=null){
        if(this.getPrediction().getLastNumber()>1){
            this.setCandidates_flag(true);
            this.paint();
        }
        else if(this.getPrediction().getLastNumber()>0){
            var ex=this.getPrediction().getEXtreeAt(0);
                this.setCandidates_flag(true);
                this.paint();
        }
    }else{
    this.setisPPdoing(false);
    this.setPPid(null);
}

MathTOUCH.mathcanvas.prototype.getKey = function(){
        var theEvent=event?event:window.event;
        var keycode;
        if (theEvent != null) {
            keycode = theEvent.which;
            this.setCtrl( typeof theEvent.modifiers == 'undefined' ? theEvent.ctrlKey : theEvent.modifiers & Event.CONTROL_MASK);
            this.setShift( typeof theEvent.modifiers == 'undefined' ? theEvent.shiftKey : theEvent.modifiers & Event.SHIFT_MASK );
            theEvent.preventDefault();
            theEvent.stopPropagation();
        }
        else {
            keycode = theEvent.keyCode;
            this.setCtrl( theEvent.ctrlKey );
            this.setShift( theEvent.shiftKey );
            theEvent.returnValue = false;
            theEvent.cancelBubble = true;
        }
        var keychar = String.fromCharCode(keycode).toLowerCase();
        if(this.getShift()){
            keychar=keychar.toUpperCase();
        }
        this.setGK(keycode);
        this.setCkey(keychar);
        if(this.checkGK(MathTOUCH.CTRL_C) || this.checkGK(MathTOUCH.CTRL_X) || this.checkGK(MathTOUCH.CTRL_V) || this.checkGK(MathTOUCH.CTRL_J) || this.checkGK(MathTOUCH.CTRL_I) || this.checkGK(MathTOUCH.CTRL_K) || this.checkGK(MathTOUCH.CTRL_L) || this.checkGK(MathTOUCH.CTRL_Z) || this.getGK() >32 ){
                this.keyProcess(this.getGK());
        }
        
};

MathTOUCH.mathcanvas.prototype.getExtKey = function(){
        var theEvent=event?event:window.event;
        var keycode;
        if (theEvent != null) {
            keycode = theEvent.which;
            this.setCtrl( typeof theEvent.modifiers == 'undefined' ? theEvent.ctrlKey : theEvent.modifiers & Event.CONTROL_MASK );
            this.setShift( typeof theEvent.modifiers == 'undefined' ? theEvent.shiftKey : theEvent.modifiers & Event.SHIFT_MASK );
            
            if(theEvent.keyCode == 67 && theEvent.metaKey){
                this.setGK(MathTOUCH.CTRL_C);
                this.keyProcess(this.getGK());
            }else if(theEvent.keyCode == 86 && theEvent.metaKey){
                this.setGK(MathTOUCH.CTRL_V);
                this.keyProcess(this.getGK());
            }else if(theEvent.keyCode == 88 && theEvent.metaKey){
                this.setGK(MathTOUCH.CTRL_X);
                this.keyProcess(this.getGK());
            }else if(theEvent.keyCode == 90 && theEvent.metaKey){
                this.setGK(MathTOUCH.CTRL_Z);
                this.keyProcess(this.getGK());
            }else if(keycode<=32){
                theEvent.preventDefault();
                theEvent.stopPropagation();
                this.setGK(keycode);
                this.keyProcess(this.getGK());
            }else if(keycode>=37&&keycode<=40){
                theEvent.preventDefault();
                theEvent.stopPropagation();
                this.setGK(keycode+128);
                this.keyProcess(this.getGK());
            }
        }else {
            keycode = theEvent.keyCode;
            this.setCtrl( theEvent.ctrlKey );
            this.setShift( theEvent.shiftKey );
            if(keycode<=32){
                theEvent.returnValue = false;
                theEvent.cancelBubble = true;
                this.setGK(keycode);
                this.keyProcess(this.getGK());
            }else if(keycode>=37&&keycode<=40){
                theEvent.preventDefault();
                theEvent.stopPropagation();
                this.setGK(keycode+128);
                this.keyProcess(this.getGK());
            }
        }
};
                                       
MathTOUCH.mathcanvas.prototype.pushSoftKey=function(kw){
    if(this.getCanvas()!=null||this.getCanvas()!=undefined){
        for(var i=0;i<kw.length;i++){
            if(kw.charAt(i)=='←') this.pushSoftKeyExt(37+128);
            else this.insertKey(kw.charAt(i),kw.charCodeAt(i));
        }
    }
}

MathTOUCH.mathcanvas.prototype.pushSoftKeyExt=function(code){
    if(this.getCanvas()!=null||this.getCanvas()!=undefined){
        this.keyProcess(code);
    }
}


MathTOUCH.mathcanvas.prototype.insertKey = function(key,keycode){
    this.setCkey(key.toString());
    this.keyProcess(keycode);
    if(this.getEndMT_flag() == 0){
        this.setFocus();
    }
};

MathTOUCH.mathcanvas.prototype.insertBres = function(bres){
    for(var i=0;i<bres.length;i++){
        var subres=this.getCurrentEXtree().EDITpoint();
        if(subres==null){
            this.setCurrentEXtree(bres[i]);
            this.mode3Pros();
            this.cur.clear();
            this.clearCandidates();
            this.setCandidates_flag(true);
            this.setFocus();
        }else{
            subres.clearEditMark();
            subres.change(bres[i]);
            subres.setEditMark();
            this.mode3Pros();
            this.cur.clear();
            this.clearCandidates();
            this.setCandidates_flag(true);
            this.setFocus();
        }

    }
};
                                       
MathTOUCH.mathcanvas.prototype.changeNextCandidate = function(){
    this.setPrescpOrder(this.getScpOrder()+1);
    this.setScpOrder(this.getScpOrder()+1);
    if(this.getScpOrder()>=this.getPrediction().getLastNumber()){
        this.setScpOrder(0);
    }
    this.setSubMode(5);
    this.mt_autoScroll();
}
                                       
MathTOUCH.mathcanvas.prototype.changePreviousCandidate = function(){
    if(this.getScpOrder()>0){
        this.setPrescpOrder(this.getScpOrder()-1);
        this.setScpOrder(this.getScpOrder()-1);
    }
    this.setSubMode(5);
    this.mt_autoScrollup();
}

MathTOUCH.mathcanvas.prototype.keyProcess = function(kcode){
    this.setHelpMessage("start_msg");
    this.setErrormessage(null);
    var helpmessage;
    MTTLOG.keyin();
    this.setGK(kcode);
    if(this.checkTransMode(0)){
        switch(this.getGK()){
            case 16:    break;
            case 17:    break
            case 18:    break;
            case 15:    break;
            case MathTOUCH.K_ESCAPE	:
                if(!this.checkNull(this.getResult())||!this.cur.isEmpty()){
                    MTTLOG.clzin();
                    if(this.getPPid()!=null){
                        clearTimeout(this.getPPid());
                        this.setPPid(null);
                    }
                    this.undo();
                }

                break;
            case MathTOUCH.CTRL_Z    :
                if(!this.checkNull(this.getResult())||!this.cur.isEmpty()){
                    MTTLOG.clzin();
                    if(this.getPPid()!=null){
                        clearTimeout(this.getPPid());
                        this.setPPid(null);
                    }
                    this.undo();
                }
                break;
            case MathTOUCH.CTRL_Y    :
                if(!this.checkNull(this.getResult())||!this.cur.isEmpty()){
                    MTTLOG.clzin();
                    if(this.getPPid()!=null){
                        clearTimeout(this.getPPid());
                        this.setPPid(null);
                    }
                    this.redo();
                }
                break;
            case MathTOUCH.K_DELETE	:
            case MathTOUCH.K_BS	:
                MTTLOG.bsin();
                this.undoPush();
                if(this.getShift()){
                    if(this.getPPid()!=null){
                        clearTimeout(this.getPPid());
                        this.setPPid(null);
                    }
                    this.resetNewLineInput();
                    this.setPrediction(null);
                    this.clearCandidates();
                }
                else if(this.checkSelectMode()){
                    var ans=this.deleteDragPoint();
                    if(ans!=null){
                        this.setProcessEXtree(ans);
                        if(this.getProcessEXtree().type===MathTOUCH.EDIT){
                            this.setResult(this.getCurrentEXtree().result());
                            this.getProcessEXtree().setBSframe(6);
                            if(this.getResult()==null){
                                this.resetNewLineInput();
                                
                            }else{
                                this.setTransMode(3);
                                this.cur.clear();
                                this.MEX.toknum=0;
                                var temp=AlgRules.reform(this.getResult());
                                if(temp!=null) this.setResult(temp);
                            }
                        }else{
                            this.setProcessMode();
                        }
                        this.checkForm(this.getOutputForm());
                        this.setSelectMode(0);
                        this.setOpeSelected(false);
                        this.setHelpMessage("delete1");
                    }else{
                        this.setHelpMessage("cannotDelete2");
                    }
                }else if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                    var bc=this.cur.doBS();
                    var ans;
                    if(bc==0){
                        ans=this.getProcessEXtree().deleteBSpoint();
                        if(ans!=null){
                            this.setProcessEXtree(ans);
                            if(this.getProcessEXtree().type===MathTOUCH.EDIT){
                                this.setResult(this.getCurrentEXtree().result());
                                this.getProcessEXtree().setBSframe(6);
                                if(this.getResult()==null){
                                    this.resetNewLineInput();
                                    this.initResult();
                                }else{
                                    this.BSpost();
                                }
                            }else{
                                this.setProcessMode();
                            }
                            this.checkForm(this.getOutputForm());
                        }
                    }else{
                        if(this.getPPid()!=null){
                            clearTimeout(this.getPPid());
                            this.setPPid(null);
                        }
                        var that=this;
                        this.setPPid(setTimeout(function(){
                                                  that.paintPrediction();
                                                  },100));
                    }
                }else{
                    this.setHelpMessage("cannotDelete1");
                }
                break;
            case MathTOUCH.K_SPACE	:
                MTTLOG.spin();
                this.undoPush();
                if(this.getShift() ||this.getCtrl()){
                    this.cur.insert(' ');
                    this.setFocus();
                    if(this.getPPid()!=null){
                        clearTimeout(this.getPPid());
                        this.setPPid(null);
                    }
                    var that=this;
                    this.setPPid(setTimeout(function(){
                                              that.paintPrediction();
                                              },100));
                }
                
                else{
                    this.changeNextCandidate();
                }
                this.stopTimer();
                break;
            case MathTOUCH.K_ENTER	:
                MTTLOG.retin();
                this.undoPush();
                this.clearCandidates();
                if(this.getScpOrder()<0){
                    var totalcurrent=this.cur.getText();
                    var temp=this.MEX.makeEXtreeFromEDIT(this.getCurrentEXtree());
                    if(temp==null){ this.errorProcess();
                        this.setTransMode(3);
                    }
                    else{
                        var temp2=temp.nextEDITpoint();
                        if(temp2!=null) temp2.setEditMark();
                        else temp.setEditMark();
                        if(this.getResult()==null){
                            var temp3=AlgRules.reform(this.getCurrentEXtree());
                            if(temp3!=null){ this.setCurrentEXtree(temp3);}
                        }
                        if(MathTOUCH.STACK&&this.getCurrentEXtree().type===MathTOUCH.MAT&&this.getCurrentEXtree().rownum*this.getCurrentEXtree().colnum>1){
                            this.setCurrentEXtree(new EXtree1(0,OTB.theNumberOf("[]"),0,this.getCurrentEXtree().copy(),"[]"));
                            this.getCurrentEXtree().setComplete();
                        }
                        this.getCurrentEXtree().setAllComplete();
                        this.mode3Pros();
                        this.cur.clear();
                        this.setCandidates_flag(true);
                    }
                }
                else if(this.targetMode==1){
                    this.tagex=this.getPrediction().getEXtreeAt(this.getScpOrder());
                    var tagpoint=NES.searchTarget(this.tagex);
                    if(tagpoint!=null&&tagpoint.cnum==0){
                        NES.clearTarget(tagpoint);
                        if(this.getResult()==null){
                            this.setResult(this.tagex.copy());
                            this.getResult().setComplete();
                        }
                        else{
                            this.setResult(this.tagex.copy());
                            this.getResult().setAllComplete();
                        }
                        var totalcurrent=this.cur.getText().substring(tagpoint.getInputWord().length);
                        this.targetMode=0;
                        this.cur.clear();
                        this.cur.insert(totalcurrent);
                        var edex=this.getResult().copy().spacedOn(new EditEXT(this.cur));
                        this.setProcessEXtree(edex.ch[1]);
                        edex.ch[1].setEditMark();
                        var subres=this.getCurrentEXtree().EDITpoint();
                        if(subres==null){
                            this.setCurrentEXtree(edex);
                        }else if(subres.parent!=null&&subres.parent.isSpaced()&&subres.pnum==1){
                            subres.clearEditMark();
                            if(subres.parent.state==2){
                                subres.change(edex);
                            }
                            else{
                                subres.parent.change(edex);
                            }
                        }else{
                            subres.clearEditMark();
                            subres.change(edex);
                        }
                        
                        this.setScpOrder(-1);
                        this.setCandidates_flag(true);
                    }
                    else if(tagpoint!=null){
                        var totalcurrent=this.cur.getText();
                        var edex;
                        if(tagpoint.type==MathTOUCH.OP2C&&tagpoint.key==MathTOUCH.SP){
                            var ch0=tagpoint.ch[0].copy();
                            ch0.setComplete();
                            var ch0str=ch0.getInputWord();
                            var left=totalcurrent.substring(0,ch0str.length);
                            if(ch0str==left){
                                totalcurrent=totalcurrent.substring(ch0str.length);
                            }
                            this.cur.clear();
                            this.cur.insert(totalcurrent);
                            edex=new EXtree2(0,tagpoint.key,tagpoint.order,ch0,new EditEXT(this.cur),tagpoint.inputWord);
                        }
                        else if(tagpoint.type==MathTOUCH.OP2C){
                        if(this.getResult()!=null)
                            var ch0=tagpoint.ch[0].copy();
                            ch0.setComplete();
                            var ch0str=ch0.getInputWord();
                            var left=totalcurrent;
                            var right=totalcurrent;
                            if(ch0.type==MathTOUCH.NUM&&ch0str==totalcurrent.substring(0,ch0str.length)){
                                left=totalcurrent.substring(0,ch0str.length+tagpoint.inputWord.length);
                            }
                            else{
                                left=totalcurrent.substring(0,tagpoint.inputWord.length);
                            }
                            right=totalcurrent.substring(left.length);
                            this.cur.clear();
                            this.cur.insert(right);
                            edex=new EXtree2(2,tagpoint.key,tagpoint.order,ch0,new EditEXT(this.cur),tagpoint.inputWord);
                        }
                        else if(tagpoint.type==MathTOUCH.OP1B){
                            var Bstr=this.getBracketString(totalcurrent);
                            if(Bstr.length==0){ alert("Bracket Error");edex=this.tagex.copy();}
                            else if(Bstr.length==2){
                                edex=this.tagex.copy();
                                this.cur.clear();
                                this.cur.insert(Bstr[1]);
                                tagpoint=NES.searchTarget(edex);
                                if(tagpoint==null){alert("EditBox target error!");}
                                else{
                                    tagpoint.ch[0].change(new EditEXT(this.cur));
                                }
                            }
                            else{
                                edex=this.tagex.copy();
                                this.cur.clear();
                                this.cur.insert(Bstr[1]);
                                tagpoint=NES.searchTarget(edex);
                                if(tagpoint==null){alert("EditBox target error!");}
                                else{
                                    tagpoint.ch[0].change(new EditEXT(this.cur));
                                }
                                edex.setComplete();
                                var eb=new exR.EditBox();
                                eb.clear();
                                eb.insert(Bstr[3]);
                                eb.setCursorOff();
                                edex=edex.spacedOn(new EditEXT(eb));
                                this.targetMode=0;
                            }
                        }
                        else{
                            edex=this.tagex.copy();
                            tagpoint=NES.searchTarget(edex);
                            if(tagpoint==null){alert("EditBox target error!");}
                            else{
                                tagpoint.change(new EditEXT(this.cur));
                            }
                        }
                        var subres=this.getCurrentEXtree().EDITpoint();
                        if(subres==null){
                            this.setCurrentEXtree(edex);
                        }else if(subres.parent!=null&&subres.parent.isSpaced()&&subres.pnum==1){
                            subres.clearEditMark();
                            if(subres.parent.state==2){
                                subres.change(edex);
                            }
                            else{
                                subres.parent.change(edex);
                            }
                        }else{
                            subres.clearEditMark();
                            subres.change(edex);
                        }
                        if(this.targetMode==1) this.targetMode=2;
                        mtKB.morePred(1);
                        this.setScpOrder(-1);
                        this.setCandidates_flag(true);
                    }
                    else{
                        this.targetMode=2;
                    }
                                    
                    this.setFocus();
                    if(this.getPPid()!=null){
                        clearTimeout(this.getPPid());
                        this.setPPid(null);
                    }
                    var that=this;
                    this.setPPid(setTimeout(function(){
                                    that.paintPrediction();
                                },100))
                }
                else if(this.targetMode==2){
                    var tagpoint=NES.searchTarget(this.tagex);
                    var edex=this.getPrediction().getEXtreeAt(this.getScpOrder());
                    edex.setComplete();
                    var edexstr=edex.getInputWord();
                    if(tagpoint==null||tagpoint.cnum==0||tagpoint.type==MathTOUCH.OP1A){alert("Tmode=2 no tag error");}
                    else if(tagpoint.type==MathTOUCH.OP2C&&tagpoint.key==MathTOUCH.SP){
                        edexstr=edexstr.substring(tagpoint.ch[0].getInputWord().length);
                        if(edexstr.length<this.cur.getText().length){
                            var str2=this.cur.getText().substring(edexstr.length);
                            this.cur.clear();
                            this.cur.insert(edexstr);
                            edex=new EXtree2(2,tagpoint.key,tagpoint.order,tagpoint.ch[0].copy(),new EditEXT(this.cur),tagpoint.inputWord);
                            edex.ch[1].setEditMark();
                            var eb=new exR.EditBox();
                            eb.clear();
                            eb.insert(str2);
                            eb.setCursorOff();
                            edex=edex.spacedOn(new EditEXT(eb));
                        }
                        else{
                            this.cur.clear();
                            this.cur.insert(edexstr);
                            edex=new EXtree2(2,tagpoint.key,tagpoint.order,tagpoint.ch[0].copy(),new EditEXT(this.cur),tagpoint.inputWord);
                            edex.ch[1].setEditMark();
                            this.setProcessEXtree(edex.ch[1]);
                        }
                    }
                    else if(tagpoint.type==MathTOUCH.OP2C){
                        edexstr=edexstr.substring(tagpoint.ch[0].getInputWord().length+tagpoint.inputWord.length);
                        if(edexstr.length<this.cur.getText().length){
                            var str2=this.cur.getText().substring(edexstr.length);
                            this.cur.clear();
                            this.cur.insert(edexstr);
                            edex=new EXtree2(2,tagpoint.key,tagpoint.order,tagpoint.ch[0].copy(),new EditEXT(this.cur),tagpoint.inputWord);
                            edex.ch[1].setEditMark();
                            this.setProcessEXtree(edex.ch[1]);
                            var eb=new exR.EditBox();
                            eb.clear();
                            eb.insert(str2);
                            eb.setCursorOff();
                            edex=edex.spacedOn(new EditEXT(eb));
                        }
                        else{
                            this.cur.clear();
                            this.cur.insert(edexstr);
                            edex=new EXtree2(2,tagpoint.key,tagpoint.order,tagpoint.ch[0].copy(),new EditEXT(this.cur),tagpoint.inputWord);
                                            edex.ch[1].setEditMark();
                                            this.setProcessEXtree(edex.ch[1]);
                        }
                    }
                    else{
                        var str0=edex.ch[0].getInputWord();
                        if(edexstr.length<this.cur.getText().length){
                            var str2=this.cur.getText().substring(edexstr.length);
                            this.cur.clear();
                            this.cur.insert(str0);
                            edex.ch[0].change(new EditEXT(this.cur));
                            edex.ch[0].setEditMark();
                            this.setProcessEXtree(edex.ch[0]);
                            var eb=new exR.EditBox();
                            eb.clear();
                            eb.insert(str2);
                            eb.setCursorOff();
                            edex=edex.spacedOn(new EditEXT(eb));
                        }
                        else{
                            this.cur.clear();
                            this.cur.insert(str0);
                            edex.ch[0].change(new EditEXT(this.cur));
                            edex.ch[0].setEditMark();
                            this.setProcessEXtree(edex.ch[0]);
                        }
                    }
                    var subres=this.getCurrentEXtree().EDITpoint();
                    if(subres==null){
                        this.setCurrentEXtree(edex);
                    }else if(subres.parent!=null&&subres.parent.isSpaced()&&subres.pnum==1){
                        subres.clearEditMark();
                        if(edex.isSpaced()&&edex.ch[0].equals(subres.parent.ch[0])){
                            subres.parent.change(edex);
                        }
                        else if(this.tagex.isSpaced()&&this.tagex.ch[0].equals(subres.parent.ch[0])){
                            subres.parent.change(edex);
                        }
                        else{
                            subres.change(edex);
                        }
                                        
                    }else if(subres.parent!=null&&subres.parent.type==MathTOUCH.OP2C){
                        subres.clearEditMark();
                        if(edex.key==subres.parent.key&&edex.order==subres.parent.order&&edex.ch[0].equals(subres.parent.ch[0])){
                            subres.parent.change(edex);
                        }
                        else if(this.tagex.type==subres.parent.type&&this.tagex.inputWord==subres.parent.inputWord){
                            subres.parent.change(edex);
                        }
                        else{
                            subres.change(edex);
                        }
                    }else{
                        subres.clearEditMark();
                        subres.change(edex);
                    }

                    this.targetMode=0;
                    this.mode5Pros();
                    this.setFocus();
                    if(this.getPPid()!=null){
                        clearTimeout(this.getPPid());
                        this.setPPid(null);
                    }
                    var that=this;
                    this.setPPid(setTimeout(function(){
                        that.paintPrediction();
                    },100))
                }
                else{
                    var edex=this.getPrediction().getEXtreeAt(this.getScpOrder());
                    if(edex==null){ alert("申し訳ありませんが、変換できていません。");break;}
                    edex.setAllComplete();
                    edex.clearEditMark();
                    var temp2=edex.nextEDITpoint();
                    if(temp2!=null) temp2.setEditMark();
                    else edex.setEditMark();
                    var subres=this.getCurrentEXtree().EDITpoint();
                    if(subres==null){
                        this.setCurrentEXtree(edex);
                    }else if(subres.parent!=null&&subres.parent.isSpaced()&&subres.pnum==1){
                        subres.clearEditMark();
                        if(subres.parent.state==2){
                            subres.change(edex);
                        }
                        else{
                            subres.parent.change(edex);
                        }
                    }else{
                        subres.clearEditMark();
                        subres.change(edex);
                        if(subres.parent!=null&&subres.parent.isSpaced()&&subres.pnum==0){
                            subres.parent.state=2;
                        }
                    }
                    var nextex=this.getCurrentEXtree().searchProcessNode();
                    if(nextex==null||nextex.isEmpty()){
                        this.targetMode=0;
                        this.mode3Pros();
                        this.cur.clear();
                        this.setCandidates_flag(true);
                    }
                    else{
                        var nextstr=this.getRemainInputString(nextex);
                        this.cur.clear();
                        if(nextstr.length>0) this.cur.insert(nextstr);
                        if(nextex.type==MathTOUCH.OP2C||nextex.type==MathTOUCH.OP1A||nextex.type==MathTOUCH.OP3T){
                                nextex.change(nextex.ch[0].copy().spacedOn(new EditEXT(this.cur)));
                                    nextex.ch[1].setEditMark();
                        }
                        else{
                            nextex.change(new EditEXT(this.cur));
                            nextex.setEditMark();
                        }
                        this.setProcessEXtree(nextex);
                        this.targetMode=0;
                        this.mode5Pros();
                        this.setFocus();
                        if(this.getPPid()!=null){
                            clearTimeout(this.getPPid());
                            this.setPPid(null);
                        }
                        var that=this;
                        this.setPPid(setTimeout(function(){
                            that.paintPrediction();
                        },100))
                    }
                }
                break;
            case MathTOUCH.K_LEFT	:
                MTTLOG.leftin();
                this.undoPush();
                if( this.getShift() ||this.getCtrl()){
                    this.cur.deleteColumn();
                    if(this.getPPid()!=null){
                        clearTimeout(this.getPPid());
                        this.setPPid(null);
                    }
                    var that=this;
                    this.setPPid(setTimeout(function(){
                                              that.paintPrediction();
                                              },0))
                }else if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                    var ic=this.cur.goLeft();
                    if(ic==0){
                        if(!this.cur.isEmpty()){
                            var totalcurrent=this.cur.getText();
                            this.undoPush();
                            var temp=this.MEX.makeEXtreeFromEDIT(this.getCurrentEXtree());
                            if(temp==null){ this.errorProcess();
                            }
                            else{
                                temp.setEditMark();
                                if(this.getResult()==null){
                                    var temp3=AlgRules.reform(this.getCurrentEXtree());
                                    if(temp3!=null){ this.setCurrentEXtree(temp3);}
                                }
                                if(MathTOUCH.STACK&&this.getCurrentEXtree().type===MathTOUCH.MAT&&this.getCurrentEXtree().rownum*this.getCurrentEXtree().colnum>1){
                                    this.setCurrentEXtree(new EXtree1(0,OTB.theNumberOf("[]"),0,this.getCurrentEXtree().copy(),"[]"));
                                    this.getCurrentEXtree().setComplete();
                                }
                                this.getCurrentEXtree().setAllComplete();
                            }
                            this.mode3Pros();
                            this.cur.clear();
                            this.setCandidates_flag(true);
                        }
                        var tmp=this.getProcessEXtree().moveEditToLeft();
                        tmp=this.getProcessEXtree().moveBoxToLeft();
                        if(tmp!=null){this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);}
                        else{
                            this.getProcessEXtree().setBSframe(6);
                            this.setHelpMessage("cannotMoveLeft");
                        }
                    }
                }else{
                    this.setHelpMessage("cannotUseLeftarrow");
                }
                break;
            case MathTOUCH.K_RIGHT	:
                MTTLOG.rightin();
                this.undoPush();
                if(this.getShift() ||this.getCtrl()){
                    this.cur.insert('\u27B1');
                    if(this.getPPid()!=null){
                        clearTimeout(this.getPPid());
                        this.setPPid(null);
                    }
                    var that=this;
                    this.setPPid(setTimeout(function(){
                                              that.paintPrediction();
                                              },100));
                }else if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                    var ic=this.cur.goRight();
                    if(ic==0){
                        if(!this.cur.isEmpty()){
                            var totalcurrent=this.cur.getText();
                            this.undoPush();
                            var temp=this.MEX.makeEXtreeFromEDIT(this.getCurrentEXtree());
                            if(temp==null){ this.errorProcess();
                            }
                            else{
                                temp.setEditMark();
                                if(this.getResult()==null){
                                    var temp3=AlgRules.reform(this.getCurrentEXtree());
                                    if(temp3!=null){ this.setCurrentEXtree(temp3);}
                                }
                                if(MathTOUCH.STACK&&this.getCurrentEXtree().type===MathTOUCH.MAT&&this.getCurrentEXtree().rownum*this.getCurrentEXtree().colnum>1){
                                    this.setCurrentEXtree(new EXtree1(0,OTB.theNumberOf("[]"),0,this.getCurrentEXtree().copy(),"[]"));
                                    this.getCurrentEXtree().setComplete();
                                }
                                this.getCurrentEXtree().setAllComplete();
                            }
                            this.mode3Pros();
                            this.cur.clear();
                            this.setCandidates_flag(true);
                        }
                        var tmp=this.getProcessEXtree().moveEditToRight();
                        if(tmp!=null){
                            this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);
                        }
                        else{
                            alert("右に移動できません！");
                        }
                    }
                }else{
                    this.setHelpMessage("cannotUseRightarrow");
                }
                break;
            case MathTOUCH.K_TAB	:
                if(this.getShift() ||this.getCtrl()){
                    this.changePreviousCandidate();
                }else{
                    this.changeNextCandidate();
                }
                break;
            case MathTOUCH.K_UP		:
                this.undoPush();
                if(this.getShift()||this.getCtrl()){
                    var ic=this.cur.deleteRow();
                    if(ic==0){
                        var tmp=this.getProcessEXtree().moveEditToUp();
                        if(tmp!=null){this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);}
                        else{
                            var temp=this.MEX.makeEXtreeFromEDIT(this.getCurrentEXtree());
                            if(temp==null){ this.errorProcess();
                            }else{
                                if(this.checkNull(this.getResult())){
                                    var temp3=AlgRules.reform(this.getCurrentEXtree());
                                    if(temp3!=null){ temp=temp3; this.setCurrentEXtree(temp3);}
                                }
                                if(MathTOUCH.STACK&&this.getCurrentEXtree().type===MathTOUCH.MAT&&this.getCurrentEXtree().rownum*this.getCurrentEXtree().colnum>1){
                                    this.setCurrentEXtree(new EXtree1(0,OTB.theNumberOf("[]"),0,temp.copy(),"[]"));
                                    this.getCurrentEXtree().setComplete();
                                    temp = this.getCurrentEXtree();
                                }
                                this.setProcessEXtree(temp.searchProcessNode());
                                if(!this.checkNullProcessEXtree()) this.mode3Pros();
                                else{
                                    this.setProcessMode();
                                    OTB.setLOrder(-1);
                                    this.setLeftmargin(10);
                                }
                                this.cur.clear();
                            }
                        }
                    }else{
                        if(this.getPPid()!=null){
                            clearTimeout(this.getPPid());
                            this.setPPid(null);
                        }
                        var that=this;
                        this.setPPid(setTimeout(function(){
                                                  that.paintPrediction();
                                                  },100));
                    }

                }else if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT&&this.getPrediction()!=null){
                    this.changePreviousCandidate();
                }else{
                    var tmp=this.getProcessEXtree().moveBoxToLeft();
                    if(tmp!=null){this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);}
                    else this.getProcessEXtree().setBSframe(6);
                }
                break;
            case MathTOUCH.K_DOWN	:
                this.undoPush();
                if(this.getShift()||this.getCtrl()){
                    var ic=this.cur.goDown();
                    if(ic==0){
                        var tmp=this.getProcessEXtree().moveEditToDown();
                        if(tmp!=null){this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);}
                        else{
                            this.getProcessEXtree().setBSframe(6);
                            this.setHelpMessage("cannotMoveDown");
                        }
                    }else if(ic==2){
                        this.cur.insert('\u23cE');
                        if(this.getPPid()!=null){
                            clearTimeout(this.getPPid());
                            this.setPPid(null);
                        }
                        var that=this;
                        this.setPPid(setTimeout(function(){
                                                  that.paintPrediction();
                                                  },100));
                    }
                }else if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT&&this.getPrediction()!=null){
                    this.changeNextCandidate();
                }else{
                    var tmp=this.getProcessEXtree().moveBoxToRight();
                    if(tmp!=null){
                        this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);
                        
                    }else{
                        this.getProcessEXtree().setBSframe(6);
                    }
                }
                break;
            case MathTOUCH.CTRL_L:
                if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                    var ic=this.cur.goRight();
                    if(ic==0){
                        var tmp=this.getProcessEXtree().moveEditToRight();
                        if(tmp!=null){
                            this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);
                        }else{
                            this.cur.insert('\u27B1');
                        }
                    }
                }else{
                    this.setHelpMessage("cannotUseRightarrow");
                }
                break;
            case MathTOUCH.CTRL_J	:
                if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                    var ic=this.cur.goLeft();
                    if(ic==0){
                        var tmp=this.getProcessEXtree().moveEditToLeft();
                        if(tmp!=null){
                            this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);
                        }else{
                            this.getProcessEXtree().setBSframe(6);
                            this.setHelpMessage("cannotMoveLeft");
                        }
                    }
                }else{
                    this.setHelpMessage("cannotUseLeftarrow");
                }
                break;
            case MathTOUCH.CTRL_K	:
                if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                    var ic=this.cur.goDown();
                    if(ic==0){
                        var tmp=this.getProcessEXtree().moveEditToDown();
                        if(tmp!=null){this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);}
                        else{
                            this.getProcessEXtree().setBSframe(6);
                            this.setHelpMessage("cannotMoveDown");
                        }
                    }else if(ic==2){
                        this.cur.insert('\u23cE');
                    }
                }else{
                    var tmp=this.getProcessEXtree().moveBoxToRight();
                    if(tmp!=null){
                        this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);
                    }else{
                        this.getProcessEXtree().setBSframe(6);
                    }
                }
                break;
            case MathTOUCH.CTRL_C:
                this.copyEXtree=this.clickEx.copy();
                copyMode=1;
                this.setHelpMessage("copy");
                break;
            case MathTOUCH.CTRL_X:
                this.undoPush();
                if(this.checkSelectMode()){
                    this.copyEXtree=this.clickEx.copy();
                    copyMode=1;
                    var ans=this.deleteDragPoint();
                    if(ans!=null){
                        this.getProcessEXtree()=ans;
                        if(this.getProcessEXtree().type===MathTOUCH.EDIT){
                            this.setResult(this.getCurrentEXtree().result());
                            this.getProcessEXtree().setBSframe(6);
                            if(this.checkNull(this.getResult())){ this.resetCurrentLineInput();}
                            else{
                                this.setTransMode(3);
                                this.cur.clear();
                                this.MEX.toknum=0;
                                var temp=AlgRules.reform(this.getResult());
                                if(temp!=null) this.setResult(temp);
                            }
                        }else{
                            this.setProcessMode();
                        }
                        this.setSelectMode(false);
                        this.setOpeSelected(false);
                        this.setHelpMessage("copyandcut");
                    }else{
                        this.setHelpMessage("cannotDelete2");
                    }
                }
                break;
            case MathTOUCH.CTRL_V:
                this.undoPush();
                if(this.getCtrl()&&copyMode==1){
                    this.pastePros();
                    this.setHelpMessage("paste");
                }
                break;
            default	:
                if(this.checkSelectMode()&&this.clickEx!=null){
                    var ans=this.deleteDragPoint();
                    if(ans!=null){
                        this.getProcessEXtree()=ans;
                        if(this.getProcessEXtree().type===MathTOUCH.EDIT){
                            this.setResult(this.getCurrentEXtree().result());
                            this.getProcessEXtree().setBSframe(6);
                            if(this.checkNull(this.getResult())){ this.resetCurrentLineInput();}
                            else{
                                this.setTransMode(3);
                                this.cur.clear();
                                this.MEX.toknum=0;
                                var temp=AlgRules.reform(this.getResult());
                                if(temp!=null) this.setResult(temp);
                            }
                        }
                        else{
                            this.setProcessMode();
                        }
                        this.setSelectMode(false);
                        this.setOpeSelected(false);
                    }
                    else{
                        this.setHelpMessage("cannotDelete2");
                    }
                }if(this.checkCkey('\"')){
                    var txtterm;
                    $.getJSON("langs/" + this.getLang() + ".json", function (data) {
                        txtterm=prompt(data["InputText"]);
                        if(txtterm!=null&&txtterm!="") this.cur.insert("\""+txtterm+"\"");
                        });
                }else if(this.checkCkey(',')){
                    this.setCkey('\u201A');
                    this.cur.insert(this.getCkey());
                }else if(this.checkCkey('l')){
                    if(this.getCtrl()){
                        if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                            var ic=this.cur.goRight();
                            if(ic==0){
                                var tmp=this.getProcessEXtree().moveEditToRight();
                                if(tmp!=null){this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);}
                                else{
                                    this.getProcessEXtree().setBSframe(6);
                                    this.setHelpMessage("cannotMoveRight");
                                }
                            }
                        }
                    }else{this.cur.insert(this.getCkey());}
                }else if(this.checkCkey('j')){
                    if(this.getCtrl()){
                        if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                            var ic=this.cur.goLeft();
                            if(ic==0){
                                var tmp=this.getProcessEXtree().moveEditToLeft();
                                if(tmp!=null){this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);}
                                else{ this.getProcessEXtree().setBSframe(6);
                                    this.setHelpMessage("cannotMoveLeft");
                                }
                            }
                        }else{
                            this.setHelpMessage("cannotUseLeftarrow");
                        }
                    }else{this.cur.insert(this.getCkey());}
                }else if(this.checkCkey('i')){
                    if(this.getCtrl()){
                        if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                            var ic=this.cur.goUp();
                            if(ic==0){
                                var tmp=this.getProcessEXtree().moveEditToUp();
                                if(tmp!=null){this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);}
                                else{
                                    this.getProcessEXtree().setBSframe(6);
                                    this.setHelpMessage("cannotMoveUp");
                                }
                            }
                        }else{
                            var tmp=this.getProcessEXtree().moveBoxToLeft();
                            if(tmp!=null){
                                this.setProcessEXtree(tmp);
                                this.getProcessEXtree().setBSframe(6);
                            }else{
                                this.getProcessEXtree().setBSframe(6);
                            }
                        }
                    }else{
                        this.cur.insert(this.getCkey());
                    }
                }else if(this.checkCkey('k')){
                    if(this.getCtrl()){
                        if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                            var ic=this.cur.goDown();
                            if(ic==0){
                                var tmp=this.getProcessEXtree().moveEditToDown();
                                if(tmp!=null){
                                    this.setProcessEXtree(tmp);
                                    this.getProcessEXtree().setBSframe(6);
                                }else{
                                    this.getProcessEXtree().setBSframe(6);
                                    this.setHelpMessage("cannotMoveDown");
                                }
                            }else if(ic==2){
                                this.cur.insert('\u21E9');
                            }
                        }else{
                            var tmp=this.getProcessEXtree().moveBoxToRight();
                            if(tmp!=null){
                                this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);
                            }
                            else this.getProcessEXtree().setBSframe(6);
                        }
                    }else{
                        this.cur.insert(this.getCkey());
                    }
                }else if(this.checkCkey('@')){
                    if(this.cur.isEmpty()){
                        var txtterm=prompt("XTMLをペーストしてください。");
                        var temp=this.EXTML.parseAny(txtterm);
                        if(temp!=null){
                            this.setCurrentEXtree(temp);
                            this.setPreviousEXtree(this.getCurrentEXtree());
                            this.mode3Pros();
                        }else{
                            this.setHelpMessage("xtmlError");
                        }
                    }
                    else if(this.isPredicted()){
                        if(this.targetMode==0){
                            this.targetMode=1;
                            mtKB.morePred(1);
                        }
                        else if(this.targetMode==2){
                            if(this.getScpOrder()<0) this.setScpOrder(0);
                            var edex=this.getPrediction().getEXtreeAt(this.getScpOrder());
                            var nextex=edex.searchProcessNode();
                            if(nextex==null){
                                edex.setAllComplete();
                                var subres=this.getCurrentEXtree().EDITpoint();
                                if(subres==null){
                                    this.setCurrentEXtree(edex);
                                }else if(subres.parent!=null&&subres.parent.isSpaced()&&subres.pnum==1){
                                    subres.clearEditMark();
                                    subres.parent.change(edex);
                                    subres.parent.setEditMark();
                                }else{
                                    subres.clearEditMark();
                                    subres.change(edex);
                                    subres.setEditMark();
                                }
                                this.targetMode=0;
                                this.mode3Pros();
                                this.cur.clear();
                                this.setCandidates_flag(true);
                            }
                            else{
                                var nextstr=nextex.getInputWord();
                                this.cur.clear();
                                this.cur.insert(nextstr);
                                nextex.change(new  EditEXT(this.cur));
                                var subres=this.getCurrentEXtree().EDITpoint();
                                if(subres==null){
                                    this.setCurrentEXtree(edex);
                                }else if(subres.parent!=null&&subres.parent.isSpaced()&&subres.pnum==1){
                                    subres.clearEditMark();
                                    subres.parent.change(edex);
                                    subres.parent.setEditMark();
                                }else{
                                    subres.clearEditMark();
                                    subres.change(edex);
                                    subres.setEditMark();
                                }
                                this.setProcessEXtree(nextex);
                                this.targetMode=0;
                                this.mode5Pros();
                                this.setCandidates_flag(true);
                            }
                        }
                        else alert("Can't use @.");
                    }
                    else{ this.cur.insert(this.getCkey());}
                }else if(this.checkCkey('#')){
                    this.cur.insert('\u21E9');
                }else{
                    if(this.getScpOrder()>=0&&this.isPredicted()){
                        var subres=this.getCurrentEXtree().EDITpoint();
                        if(subres==null){
                            this.setCurrentEXtree(this.getPrediction().getEXtreeAt(this.getScpOrder()));
                        }else if(subres.parent!=null&&subres.parent.isSpaced()&&subres.pnum==1){
                            subres.clearEditMark();
                            subres.parent.change(this.getPrediction().getEXtreeAt(this.getScpOrder()));
                        }else{
                            subres.clearEditMark();
                            subres.change(this.getPrediction().getEXtreeAt(this.getScpOrder()));
                        }
                        this.mode3Pros();
                        this.setProcessEXtree(this.getCurrentEXtree().searchProcessNode());
                        this.cur.clear();
                        this.clearCandidates();
                        this.setCandidates_flag(false);
                    }
                    this.cur.insert(this.getCkey());
                }
                this.setFocus();
                if(this.getPPid()!=null){
                    clearTimeout(this.getPPid());
                    this.setPPid(null);
                }
                var that=this;
                this.setPPid(setTimeout(function(){
                                          that.paintPrediction();
                                          },100));
                    
            }
            
        }

        else if(this.checkTransMode(1)){
            this.stopTimer();
            switch(this.getGK()){
                case MathTOUCH.K_ESCAPE	:
                    if(this.getProcessEXtree().type!=MathTOUCH.NUM){
                        this.clearCandidates();
                    }
                    this.resetCurrentLineInput();
                    this.initResult();
                    this.setSubMode(0);
                    break;
                case MathTOUCH.K_DELETE	:
                    this.clearCandidates();
                case MathTOUCH.K_BS	:
                    MTTLOG.bsin();
                    if(this.getProcessEXtree().type!=MathTOUCH.NUM){
                        this.clearCandidates();
                    }
                    this.undo();
                    break;
                case MathTOUCH.CTRL_Z	:
                    MTTLOG.clzin();
                    if(this.getProcessEXtree().type!=MathTOUCH.NUM){
                        this.clearCandidates();
                    }
                    this.undo();
                    break;
                case MathTOUCH.K_ENTER	:
                    MTTLOG.retin();
                    testnum=0;
                    if(this.getProcessEXtree().type!=MathTOUCH.NUM){
                        this.clearCandidates();
            
                    }
                    this.mode1ReturnPros();
                    break;
                case MathTOUCH.K_TAB	:
                    break;
                case 'l':   if(!this.getCtrl()) break;
                case MathTOUCH.K_RIGHT	:
                    MTTLOG.rightin();
                    if(this.getProcessEXtree().type===MathTOUCH.NUM && this.getProcessEXtree().parent!=null){
                        if(this.getProcessEXtree().parent.isSpaced()&&this.getProcessEXtree().pnum==0){
                            var left=this.getProcessEXtree().parent.ch[1].theLeftMostLeaf();
                            if (left!=null && left.type===MathTOUCH.NUM && left.state==0) {
                                var nstr=left.inputWord;
                                if(nstr.length==1){
                                    if(left.pnum==1 && left.parent.isSpaced()){
                                        nstr=this.getProcessEXtree().inputWord+nstr;
                                        if(this.getProcessEXtree().val.charAt(0)=='b') left.parent.change(new NumberEXT(this.getProcessEXtree().state,"b"+nstr));
                                        else left.parent.change(new NumberEXT(this.getProcessEXtree().state,nstr));
                                        this.getProcessEXtree()=left.parent;
                                    }
                                    else {
                                        left.inputWord=this.getProcessEXtree().inputWord+nstr;
                                        if(left.val.charAt(0)=='b') left.val="b"+left.inputWord;
                                        else left.val=left.inputWord;
                                        this.getProcessEXtree().parent.change(this.getProcessEXtree().parent.ch[1].copy());
                                        this.getProcessEXtree()=this.getProcessEXtree().parent.theLeftMostLeaf();
                                    }
                                    
                                }
                                else {
                                    this.getProcessEXtree().inputWord=this.getProcessEXtree().inputWord+nstr.substring(0,1);
                                    if(this.getProcessEXtree().val.charAt(0)=='b') this.getProcessEXtree().val="b"+this.getProcessEXtree().inputWord;
                                    else this.getProcessEXtree().val=this.getProcessEXtree().inputWord;
                                    left.inputWord=nstr.substring(1,nstr.length);
                                    if(left.val.charAt(0)=='b') left.val="b"+left.inputWord;
                                    else left.val=left.inputWord;
                                }
                            }
                            this.setProcessMode();
                        }
                    }
                    break;
                case 'j':   if(!this.getCtrl()) break;
                case MathTOUCH.K_LEFT	:
                    MTTLOG.leftin();
                    var nnum=this.getProcessEXtree().inputWord.length;
                    if(this.getProcessEXtree().type===MathTOUCH.NUM && nnum>1){
                        this.undoPush();
                        var nstr=this.getProcessEXtree().inputWord;
                        this.getProcessEXtree().inputWord=nstr.substring(0,nnum-1);
                        var bbb="";
                        if(this.getProcessEXtree().val.charAt(0)=='b'){ this.getProcessEXtree().val="b"+this.getProcessEXtree().inputWord;bbb="b";}
                        else this.getProcessEXtree().val=this.getProcessEXtree().inputWord;
                        if(this.getProcessEXtree().parent==null){
                            this.getProcessEXtree().change(new EXtree2(0,MathTOUCH.SP,0,
                                                                       new NumberEXT(this.getProcessEXtree().state,bbb+nstr.substring(0,nnum-1)),
                                                                       new NumberEXT(0,bbb+nstr.substring(nnum-1,nnum))," "));
                            this.getProcessEXtree()=this.getProcessEXtree().ch[0];
                        }
                        else if(this.getProcessEXtree().parent.isSpaced()&&this.getProcessEXtree().pnum==0){
                            var left=this.getProcessEXtree().parent.ch[1].theLeftMostLeaf();
                            if (left!=null && left.type===MathTOUCH.NUM && left.state==0) {
                                left.inputWord=nstr.substring(nnum-1,nnum)+left.inputWord;
                                if(left.val.charAt(0)=='b') left.val="b"+left.inputWord;
                                else left.val=left.inputWord;
                            }
                            else {
                                this.getProcessEXtree().parent.add(0,new NumberEXT(this.getProcessEXtree().state,bbb+nstr.substring(nnum-1,nnum)));
                                var ans=new EXtree2(0,MathTOUCH.SP,0,new NumberEXT(0,bbb+nstr.substring(0,nnum-1)),this.getProcessEXtree().parent.copy()," ");
                                this.getProcessEXtree().parent.change(ans);
                                this.setProcessEXtree(ans.ch[0]);
                            }
                            
                        }
                        else if(this.getProcessEXtree().parent.isOP2Cor1A()&&this.getProcessEXtree().pnum==0){
                            this.getProcessEXtree().parent.add(0,new NumberEXT(this.getProcessEXtree().state,bbb+nstr.substring(nnum-1,nnum)));
                            var ans=new EXtree2(0,MathTOUCH.SP,0,new NumberEXT(0,bbb+nstr.substring(0,nnum-1)),this.getProcessEXtree().parent.copy()," ");
                            this.getProcessEXtree().parent.change(ans);
                            this.setProcessEXtree(ans.ch[0]);
                        }
                        else{
                            this.getProcessEXtree().change(new EXtree2(0,MathTOUCH.SP,0,new NumberEXT(0,bbb+nstr.substring(0,nnum-1)),new NumberEXT(this.getProcessEXtree().state,bbb+nstr.substring(nnum-1,nnum))," "));
                            this.setProcessEXtree(this.getProcessEXtree().ch[0]);
                        }
                        this.setProcessMode();
                    }
                    else if(this.getProcessEXtree().isMultipleVARorSYM()||this.getProcessEXtree().type===MathTOUCH.XTML){
                        this.undoPush();
                        DIC.setDicE(0);
                        var reststr;
                        var sub=new MathTOUCH.middleEX(100);
                        var leftparent=this.getProcessEXtree().theLeftMostTop();
                        reststr=leftparent.getInputWord();
                        sub.extransPart(this.getProcessEXtree().getInputWord().length-1,reststr);
                        var ans=sub.makeEXtree(0,sub.toknum);
                        if(ans==null){
                            this.setHelpMessage("interpretingError1");
                        }
                        else{
                            leftparent.change(ans);
                            this.setProcessEXtree(ans.nextProcessNode());
                            if(!this.checkNullProcessEXtree()) this.mode3Pros();
                            else{
                                this.setProcessMode();
                                OTB.setLOrder(-1);
                            }
                        }
                    }
                    break;
                case 'k':   if(!this.getCtrl()) break;
                case MathTOUCH.K_DOWN	:
                    this.setPrescpOrder(this.getScpOrder()+1);
                case MathTOUCH.K_SPACE	:
                    MTTLOG.spin();
                    this.setPrescpOrder(this.getScpOrder()+1);
                    this.mt_autoScroll();
                    if(this.getShift()){
                        if(!this.checkNullProcessEXtree()){
                            this.setHelpMessage("interpretingError2");
                            break;
                        }
                        if(this.getProcessEXtree.isMultipleVARorSYM()||this.getProcessEXtree().type===MathTOUCH.XTML){
                            this.undoPush();
                            DIC.setDicE(0);
                            var reststr;
                            var sub=new MathTOUCH.middleEX(100);
                            var leftparent=this.getProcessEXtree().theLeftMostTop();
                            reststr=leftparent.getInputWord();
                            sub.extransPart(this.getProcessEXtree().getInputWord().length-1,reststr);
                            var ans=sub.makeEXtree(0,sub.toknum);
                            if(ans==null){
                                this.setHelpMessage("interpretingError");
                            }
                            else{
                                leftparent.change(ans);
                                this.setProcessEXtree(ans.nextProcessNode());
                                if(!this.checkNullProcessEXtree()) this.mode3Pros();
                                else{
                                    this.setProcessMode();
                                    OTB.setLOrder(-1);
                                }
                            }
                        }
                        else{
                            this.setHelpMessage("Error");
                        }
                    }
                    else if(this.getProcessEXtree().type===MathTOUCH.VAR||this.getProcessEXtree().type===MathTOUCH.SYM||this.getProcessEXtree().type===MathTOUCH.EMP){
                        if(this.getShift()) this.prevSim();
                        else this.nextSim();
                    }
                    else if(this.getProcessEXtree().type===MathTOUCH.NUM && this.MEX.BoldNumber){
                        if(this.getProcessEXtree().val.charAt(0)=='b') this.getProcessEXtree().val=this.getProcessEXtree().inputWord;
                        else this.getProcessEXtree().val="b"+this.getProcessEXtree().inputWord;
                        this.getProcessEXtree().setOpeBackColor(5);
                    }
                    else if(this.getProcessEXtree().type===MathTOUCH.XTML){
                        
                        var next=null;
                        
                        if(this.getShift()){
                            next=LOG.previousMatch(this.getProcessEXtree().getInputWord());
                        }
                        else{
                            next=LOG.nextMatch(this.getProcessEXtree().getInputWord());
                        }
                        if(next!=null && this.getProcessEXtree().val!=next.theWord){
                            this.setScpOrder(this.getScpOrder()+1);
                            this.getProcessEXtree().val=next.theWord;
                            this.getProcessEXtree().setBaseColor(2);
                        }
                        else{
                            DIC.setDicE(0);
                            var reststr;
                            var sub=new MathTOUCH.middleEX(100);
                            var leftparent=this.getProcessEXtree().theLeftMostTop();
                            reststr=leftparent.getInputWord();
                            sub.extransNext(reststr);
                            if(sub.outTerm[0]==this.getProcessEXtree().val){
                                sub.toknum=0;
                                sub.extransPart(this.getProcessEXtree().getInputWord().length-1,reststr);
                            }
                            var ans=sub.makeEXtree(0,sub.toknum);
                            if(ans==null){
                                this.setHelpMessage("interpretingError1");
                            }
                            else{
                                leftparent.change(ans);
                                this.setProcessEXtree(leftparent.nextProcessNode());
                                if(!this.checkNullProcessEXtree()) this.mode3Pros();
                                else{
                                    this.setProcessMode();
                                    OTB.setLOrder(-1);
                                }
                            }
                        }
                    }
                    break;
                case 'i':   if(!this.getCtrl()) break;
                case MathTOUCH.K_UP		:
                    this.setPrescpOrder(this.getScpOrder()+1);
                    if(this.getProcessEXtree().type===MathTOUCH.VAR||this.getProcessEXtree().type===MathTOUCH.SYM||this.getProcessEXtree().type===MathTOUCH.EMP){
                        this.prevSim();
                    }
                    else if(this.getProcessEXtree().type===MathTOUCH.NUM && this.MEX.BoldNumber){
                        if(this.getProcessEXtree().val.charAt(0)=='b') this.getProcessEXtree().val=this.getProcessEXtree().inputWord;
                        else this.getProcessEXtree().val="b"+this.getProcessEXtree().inputWord;
                        this.getProcessEXtree().setOpeBackColor(5);
                    }
                    else if(this.getProcessEXtree().type===MathTOUCH.XTML){
                        var next=null;
                        next=LOG.previousMatch(this.getProcessEXtree().getInputWord());
                        if(next!=null && this.getProcessEXtree().val!=next.theWord){
                            this.getProcessEXtree().val=next.theWord;
                            this.getProcessEXtree().setBaseColor(2);
                        }
                        else{
                            DIC.setDicE(0);
                            var reststr;
                            var sub=new Array();
                            var leftparent=this.getProcessEXtree().theLeftMostTop();
                            reststr=leftparent.getInputWord();
                            sub.extransNext(reststr);
                            if(sub.outTerm[0]==this.getProcessEXtree().val){
                                sub.toknum=0;
                                sub.extransPart(this.getProcessEXtree().getInputWord().length-1,reststr);
                            }
                            var ans=sub.makeEXtree(0,sub.toknum);
                            if(ans==null){
                                this.setHelpMessage("interpretingError1");
                            }
                            else{
                                leftparent.change(ans);
                                this.setProcessEXtree(leftparent.nextProcessNode());
                                if(!this.checkNullProcessEXtree()) this.mode3Pros();
                                else{
                                    this.setProcessMode();
                                    OTB.setLOrder(-1);
                                }
                            }
                        }
                    }
                    this.mt_autoScrollup();
                    break;
                case MathTOUCH.K_SHIFT	:break;
                case MathTOUCH.K_CONTROL	:break;
                case MathTOUCH.K_ALT	:break;
                case MathTOUCH.K_L	:
                    if(subkey==2){
                        break;
                    }
                default	:
                    if(this.checkCkey('\"')){
                        var txtterm;
                        helpmessage = this.getHelpMessage();
                        $.getJSON("langs/" + this.getLang() + ".json", function (data) {
                                  this.setHelpMessage("InputText");
                                  txtterm=prompt(data[helpmessage] );
                                  this.cur.insert("\""+txtterm+"\"");
                                  });
                    }else if(this.checkCkey(',')){
                        this.setCkey('\u201A');
                        this.cur.insert(this.getCkey());
                    }
                    else if(this.checkCkey('@')){
                        if(this.cur.isEmpty()){
                            var txtterm=prompt("XTMLをペーストしてください。");
                            var temp=this.EXTML.parseEX(txtterm);
                            if(temp!=null){
                                this.setCurrentEXtree(temp);
                                this.setPreviousEXtree(this.getCurrentEXtree());
                                this.mode3Pros();
                            }
                            else{
                                this.setHelpMessage("xtmlError");
                            }
                        }
                        else{ this.cur.insert(this.getCkey());}
                    }
                    else{
                        this.cur.insert(this.getCkey());
                    }
                    this.setSubMode(1);
                    this.setSNUM(0);
                    if(this.getProcessEXtree().type!=MathTOUCH.NUM){
                        this.clearCandidates();
                    }
                    var totalcurrent=this.cur.getText();
                    this.undo();
                    this.undoPush();
                    this.MEX.extrans(totalcurrent);
                    var temp=this.MEX.makeEXtreeFromEDIT(this.getCurrentEXtree());
                    if(temp==null){ this.errorProcess();
                    }
                    else{
                        if(this.checkNull(this.getResult())){
                            var temp3=AlgRules.reform(this.getCurrentEXtree());
                            if(temp3!=null){ temp=temp3; this.setCurrentEXtree(temp3);}
                        }
                        if(MathTOUCH.STACK&&this.getCurrentEXtree().type===MathTOUCH.MAT&&this.getCurrentEXtree().rownum*this.getCurrentEXtree().colnum>1){
                            this.setCurrentEXtree(new EXtree0(0,OTB.theNumberOf("[]"),0,temp.copy(),"[]"));
                            this.getCurrentEXtree().setComplete();
                            temp = this.getCurrentEXtree();
                        }
                        this.setProcessEXtree(temp.searchProcessNode());
                        if(!this.checkNullProcessEXtree()) this.mode3Pros();
                        else{
                            this.setProcessMode();
                            OTB.setLOrder(-1);
                            this.setLeftmargin(10);
                        }
                    }
            }
        }

        else if(this.checkTransMode(2)){
            this.stopTimer();
            switch(this.getGK()){
                case MathTOUCH.K_ESCAPE	:
                    this.clearCandidates();
                    this.resetCurrentLineInput();
                    this.initResult();
                    this.setSubMode(0);
                    break;
                case MathTOUCH.K_DELETE	:
                    this.clearCandidates();
                case MathTOUCH.K_BS	:
                    MTTLOG.bsin();
                    this.clearCandidates();
                    this.undo();
                    break;
                case MathTOUCH.CTRL_Z	:
                    MTTLOG.clzin();
                    this.clearCandidates();
                    this.undo();
                    break;
                case MathTOUCH.K_ENTER	:
                    this.clearCandidates();
                    this.undoPush();
                    this.setSubMode(3);
                    this.getProcessEXtree().setComplete();
                    this.setPreviousEXtree(this.getProcessEXtree());
                    if(OTB.getLOrder()>0){
                        OTB.shiftToSecond(this.getProcessEXtree().key,OTB.getLOrder());
                        MTTLOG.opeTableChanged();
                    }
                    OTB.setLOrder(-1);
                    if(this.getShift()){
                        MTTLOG.shiftretin();
                        this.getCurrentEXtree().setAllComplete();
                        this.mode3Pros();
                        break;
                    }
                    MTTLOG.retin();
                    this.getProcessEXtree().setOpeColorRight(6);
                    this.setProcessEXtree(this.getProcessEXtree().nextProcessNode());
                    if(!this.checkNullProcessEXtree()) {
                        this.mode3Pros();
                    }
                    else{
                       this.setProcessMode();
                    }
                    break;
                case MathTOUCH.K_TAB	:
                    this.undoPush();
                    if(this.checkDivMode(MathTOUCH.D2P1)){
                        this.setDivMode(MathTOUCH.DLast);
                        this.getProcessEXtree().setChildBColor(this.getProcessEXtree().cnum-1);
                        
                    }
                    else if(this.checkDivMode(MathTOUCH.D3P1)){
                        this.setDivMode(MathTOUCH.D3P2);
                        this.getProcessEXtree().setChildBColor(1);
                    }
                    else if(this.checkDivMode(MathTOUCH.D3P2)){
                        this.setDivMode(MathTOUCH.DLast);
                        this.getProcessEXtree().setChildBColor(this.getProcessEXtree().cnum-1);
                    }
                    else if(this.checkDivMode(MathTOUCH.Dpre)){
                        this.setDivMode(MathTOUCH.DLast);
                        this.getProcessEXtree().setChildBColor(this.getProcessEXtree().cnum-1);
                    }
                    else if(this.checkDivMode(MathTOUCH.DLast)){
                        if(this.getProcessEXtree().type===MathTOUCH.OP2P){
                            this.setDivMode(MathTOUCH.D2P1);
                            this.setArgEXtree1(this.getProcessEXtree().ch[0]);
                            this.setArgEXtree(this.getProcessEXtree().ch[1]);
                            this.getProcessEXtree().setChildBColor(0);
                        }
                        else if(this.getProcessEXtree().type===MathTOUCH.OP3P){
                            this.setDivMode(MathTOUCH.D3P1);
                            this.setArgEXtree1(this.getProcessEXtree().ch[0]);
                            this.setArgEXtree2(this.getProcessEXtree().ch[1]);
                            this.setArgEXtree=this.getProcessEXtree().ch[2];
                            this.getProcessEXtree().setChildBColor(0);
                        }
                        else if(this.getProcessEXtree().type===MathTOUCH.OP3T){
                            this.setDivMode(MathTOUCH.D2P1);
                            this.setArgEXtree1(this.getProcessEXtree().ch[0]);
                            this.setAargEXtree(this.getProcessEXtree().ch[2]);
                            this.getProcessEXtree().setChildBColor(0);
                        }
                        else if(this.getProcessEXtree().type===MathTOUCH.OP2C){
                            this.setDivMode(MathTOUCH.Dpre);
                            this.setArgEXtree1(this.getProcessEXtree().ch[0]);
                            this.ArgEXtree(this.getProcessEXtree().ch[1]);
                            this.getProcessEXtree().setChildBColor(0);
                        }
                    }
                    break;
                case 'l':   if(!this.getCtrl()) break;
                case MathTOUCH.K_RIGHT	:
                    MTTLOG.rightin();
                    this.undoPush();
                    this.setCandidates_flag(false);
                    if(!this.checkNullProcessEXtree()) break;
                    for(var i=0;i<this.getProcessEXtree().cnum;i++){
                        this.getProcessEXtree().ch[i].clearBaseColor();
                        this.getProcessEXtree().ch[i].clearBackColor();
                    }
                    if(this.checkDivMode(MathTOUCH.DLast)){
                        var ans=this.getProcessEXtree().divideOnRight();
                        if(ans!=null){ this.setProcessEXtree(ans);
                        }
                        else{
                            ans=this.getProcessEXtree().divideOnLeft();
                            while(ans!=null){
                                if(ans.parent!=null){
                                    if(ans.parent.type===MathTOUCH.OP2C&&ans.pnum==0){
                                        if(!ans.parent.ch[1].isPartlyComplete()){
                                            var tmpRight=this.MEX.remakeEXtree(ans.parent.ch[1]);
                                            if(tmpRight!=null) ans.parent.add(1,tmpRight);
                                        }
                                    }
                                    else if(ans.parent.type===MathTOUCH.OP3T&&ans.pnum==1){
                                        if(!ans.parent.ch[2].isPartlyComplete()){
                                            var tmpRight=this.MEX.remakeEXtree(ans.parent.ch[2]);
                                            if(tmpRight!=null) ans.parent.add(2,tmpRight);
                                        }
                                    }
                                }
                                this.setProcessEXtree(ans);
                                ans=this.getProcessEXtree().divideOnLeft();
                            }
                        }
                        this.getProcessEXtree().setChildBColor(this.getProcessEXtree().cnum-1);
                    }
                    else if(this.checkDivMode(MathTOUCH.D2P1)){
                        if(this.moveFirstInNextOperandToOperand(this.getArgEXtree1(),this.getArgEXtree())==false){
                            if(this.reMakeTree2(this.getArgEXtree())!=null){
                                this.moveFirstInNextOperandToOperand(this.getArgEXtree1(),this.getArgEXtree());
                            }
                        }
                        this.getProcessEXtree().setChildBColor(0);
                    }
                    else if(this.checkDivMode(MathTOUCH.D3P1)){
                        var f3=null;
                        if(this.moveFirstInNextOperandToOperand(this.getArgEXtree1(),getArgEXtree2())==false){
                            if(this.reMakeTree2(this.getArgEXtree2())!=null){
                                if(this.moveFirstInNextOperandToOperand(this.getArgEXtree1(),getArgEXtree2())==false){
                                    f3=this.getArgEXtree().cutFirstSpacedTerm2();
                                    if(f3!=null){
                                        this.getArgEXtree1().addLastB(getArgEXtree2().copy());
                                        this.getArgEXtree2().change(f3);
                                    }
                                    else if(this.reMakeTree2(this.getArgEXtree())!=null){
                                        f3=this.getArgEXtree().cutFirstSpacedTerm2();
                                        if(f3!=null){
                                            this.getArgEXtree1().addLastB(this.getArgEXtree2().copy());
                                            this.getArgEXtree2().change(f3);
                                        }
                                    }
                                }
                            }
                            else{
                                f3=this.getArgEXtree().cutFirstSpacedTerm2();
                                if(f3!=null){
                                    this.getArgEXtree1().addLastB(this.getArgEXtree2().copy());
                                    this.getArgEXtree2().change(f3);
                                }
                                else if(this.reMakeTree2(this.getArgEXtree())!=null){
                                    f3=this.getArgEXtree().cutFirstSpacedTerm2();
                                    if(f3!=null){
                                        this.getArgEXtree1().addLastB(this.getArgEXtree2().copy());
                                        this.getArgEXtree2().change(f3);
                                    }
                                }
                            }
                        }
                        this.getProcessEXtree().setChildBColor(0);
                    }
                    else if(this.checkDivMode(MathTOUCH.D3P2)){
                        if(this.moveFirstInNextOperandToOperand(this.getArgEXtree2(),this.getArgEXtree())==false){
                            if(this.reMakeTree2(this.getArgEXtree())!=null){
                                this.moveFirstInNextOperandToOperand(this.getArgEXtree2(),this.getArgEXtree());
                            }
                        }
                        this.getProcessEXtree().setChildBColor(1);
                    }
                    else if(this.checkDivMode(MathTOUCH.Dpre)){
                        var ans=this.getProcessEXtree().removeLeftTermAtLeft();
                        if(ans!=null) this.setProcessEXtree(ans);
                        this.getProcessEXtree().setChildBColor(0);
                    }
                    else{
                        this.getProcessEXtree().setChildBColor(0);
                    }
                    this.opeScan();
                    this.getProcessEXjtree().setOpeBackColor(5);
                    break;
                case 'j':   if(!this.getCtrl()) break;
                case MathTOUCH.K_LEFT	:
                    MTTLOG.leftin();
                    this.undoPush();
                    this.setCandidates_flag(false);
                    if(this.checkDivMode(MathTOUCH.DLast)){
                        var ans=null;
                        if(this.getShift()){
                            var tmp=this.getProcessEXtree().leftPoint();
                            if(tmp==null) tmp=this.getProcessEXtree().ch[this.getProcessEXtree().cnum-1];
                            else tmp=tmp.ch[tmp.cnum-1];
                            if(tmp.inputWord.length>1){
                                var offstr=tmp.inputWord;
                                DIC.setDicE(0);
                                var reststr;
                                var sub=new MathTOUCH.middleEX(100);
                                if(tmp.type===MathTOUCH.OP2C&&tmp.ch[0].state>0){
                                    reststr=offstr+tmp.ch[1].getInputWord();
                                    sub.extransOff(reststr,offstr);
                                    var ansub=sub.make1EXtree(tmp.ch[0].copy(),0,sub.toknum);
                                    if(ansub==null){
                                        this.setHelpMessage("interpretingError1");
                                    }
                                    else{
                                        tmp.change(ansub);
                                    }
                                }
                                else{
                                    reststr=tmp.getInputWord();
                                    sub.extransOff(reststr,offstr);
                                    var ansub=sub.makeEXtree(0,sub.toknum);
                                    if(ansub==null){
                                        this.setHelpMessage("interpretingError1");
                                    }
                                    else{
                                        tmp.change(ansub);
                                    }
                                }
                                ans=this.getProcessEXtree();
                            }
                            else{
                                ans=this.reMakeTree(this.getProcessEXtree());
                                if(ans!=null) this.setProcessEXtree(ans);
                            }
                        }
                        ans=this.getProcessEXtree().divideOnLeft();
                        if(ans!=null){
                            if(ans.parent!=null){
                                if(ans.parent.type===MathTOUCH.OP2C&&ans.pnum==0){
                                    if(!ans.parent.ch[1].isPartlyComplete()){
                                        var tmpRight=this.MEX.remakeEXtree(ans.parent.ch[1]);
                                        if(tmpRight!=null) ans.parent.add(1,tmpRight);
                                    }
                                }
                                else if(ans.parent.type===MathTOUCH.OP3T&&ans.pnum==1){
                                    if(!ans.parent.ch[2].isPartlyComplete()){
                                        var tmpRight=this.MEX.remakeEXtree(ans.parent.ch[2]);
                                        if(tmpRight!=null) ans.parent.add(2,tmpRight);
                                    }
                                }
                            }
                            this.setProcessEXtree(ans);
                        }
                        else{
                            ans=this.reMakeTree(this.getProcessEXtree());
                            if(ans!=null){
                                ans=this.getProcessEXtree().divideOnLeft();
                                if(ans!=null){
                                    if(ans.parent!=null){
                                        if(ans.parent.type===MathTOUCH.OP2C&&ans.pnum==0){
                                            if(!ans.parent.ch[1].isPartlyComplete()){
                                                var tmpRight=this.MEX.remakeEXtree(ans.parent.ch[1]);
                                                if(tmpRight!=null) ans.parent.add(1,tmpRight);
                                            }
                                        }
                                        else if(ans.parent.type===MathTOUCH.OP3T&&ans.pnum==1){
                                            if(!ans.parent.ch[2].isPartlyComplete()){
                                                var tmpRight=this.MEX.remakeEXtree(ans.parent.ch[2]);
                                                if(tmpRight!=null) ans.parent.add(2,tmpRight);
                                            }
                                        }
                                    }
                                    this.setProcessEXtree(ans);
                                }
                            }
                        }
                        this.getProcessEXtree().setChildBColor(this.getProcessEXtree().cnum-1);
                    }
                    else if(this.checkDivMode(MathTOUCH.D2P1)){
                        var l1=null;
                        if(this.getShift()){
                            l1=this.reMakeTree(this.getArgEXtree1());
                        }
                        if(this.moveLastInOperandToNextOperand(this.getArgEXtree1(),this.getArgEXtree())==false){
                            l1=this.reMakeTree(this.getArgEXtree1());
                            if(l1!=null){
                                this.moveLastInOperandToNextOperand(this.getArgEXtree1(),this.getArgEXtree());
                            }
                        }
                        this.getProcessEXtree().setChildBColor(0);
                    }
                    else if(this.checkDivMode(MathTOUCH.D3P1)){
                        var l1=null;
                        if(this.getShift()){
                            l1=this.reMakeTree(this.getArgEXtree1());
                        }
                        if(this.moveLastInOperandToNextOperand(this.getArgEXtree1(),this.getArgEXtree2())){
                            if(this.moveLastInOperandToNextOperand(this.getArgEXtree2(),this.getArgEXtree())==false){
                                l1=this.reMakeTree(this.getArgEXtree2());
                                if(l1!=null){
                                    this.moveLastInOperandToNextOperand(this.getArgEXtree2(),this.getArgEXtree());
                                }
                            }
                        }
                        else{
                            l1=this.reMakeTree(this.getArgEXtree1());
                            if(l1!=null){
                                if(this.moveLastInOperandToNextOperand(this.getArgEXtree1(),this.getArgEXtree2())){
                                    if(this.moveLastInOperandToNextOperand(this.getArgEXtree2(),this.getArgEXtree())==false){
                                        l1=this.reMakeTree(this.getArgEXtree2());
                                        if(l1!=null){
                                            this.moveLastInOperandToNextOperand(this.getArgEXtree2(),this.getArgEXtree());
                                        }
                                    }
                                }
                            }
                        }
                        this.getProcessEXtree().setChildBColor(0);
                    }
                    else if(this.checkDivMode(MathTOUCH.D3P2)){
                        var l1=null;
                        if(this.getShift()){
                            l1=this.reMakeTree(this.getArgEXtree2());
                        }
                        if(this.moveLastInOperandToNextOperand(this.getArgEXtree2(),this.getArgEXtree())==false){
                            l1=this.reMakeTree(this.getArgEXtree2());
                            if(l1!=null){
                                this.moveLastInOperandToNextOperand(this.getArgEXtree2(),this.getArgEXtree());
                            }
                        }
                        this.getProcessEXtree().setChildBColor(1);
                    }
                    else if(this.checkDivMode(MathTOUCH.Dpre)){
                        var ans=this.getProcessEXtree().restoreLeftTermAtLeft();
                        if(ans!=null){ this.setProcessEXtree(ans);}
                        this.getProcessEXtree().setChildBColor(0);
                    }
                    else{
                        this.getProcessEXtree().setChildBColor(0);
                    }
                    this.opeScan();
                    this.getProcessEXtree().setOpeBackColor(5);
                    break;
                case 'k':   if(!this.getCtrl()) break;
                case MathTOUCH.K_DOWN	:
                    this.setPrescpOrder(this.getScpOrder()+1);
                    
                case MathTOUCH.K_SPACE:
                    this.setPrescpOrder(this.getScpOrder()+1);
                    MTTLOG.spin();
                    this.undoPush();
                    if(this.getShift()){
                        if(this.getProcessEXtree().inputWord.length>1){
                            var offstr=this.getProcessEXtree().inputWord;
                            DIC.setDicE(0);
                            var reststr;
                            var sub=new MathTOUCH.middleEX(100);
                            var leftparent=this.getProcessEXtree();
                            if(leftparent.type===MathTOUCH.OP2C&&leftparent.ch[0].state>0){
                                reststr=offstr+leftparent.ch[1].getInputWord();
                                sub.extransOff(reststr,offstr);
                                var ansub=sub.make1EXtree(leftparent.ch[0].copy(),0,sub.toknum);
                                if(ansub==null){
                                    this.setHelpMessage("interpretingError1");
                                }
                                else{
                                    leftparent.change(ansub);
                                    this.getProcessEXtree()=leftparent;
                                    this.setProcessEXtree(this.getProcessEXtree().nextProcessNode());
                                    this.clearCandidates();
                                    if(!this.checkNullProcessEXtree()) this.mode3Pros();
                                    else{
                                        this.setProcessMode();
                                        OTB.setLOrder(-1);
                                    }
                                }
                            }
                            else{
                                reststr=leftparent.getInputWord();
                                sub.extransOff(reststr,offstr);
                                var ansub=sub.makeEXtree(0,sub.toknum);
                                if(ansub==null){
                                    this.setHelpMessage("interpretingError1");
                                }
                                else{
                                    leftparent.change(ansub);
                                    this.setProcessEXtree(leftparent);
                                    this.setProcessEXtree(this.getProcessEXtree().nextProcessNode());
                                    this.clearCandidates();
                                    if(!this.checkNullProcessEXtree()) this.mode3Pros();
                                    else{
                                        this.setProcessMode();
                                        OTB.setLOrder(-1);
                                    }
                                }
                            }
                        }
                    }
                    else{
                        var next=this.getProcessEXtree().nextType();
                        if(next!=null){
                            this.setProcessEXtree(next);
                            this.setArgument();
                        }
                        else{
                            var ans=this.reMakeTree2(this.getProcessEXtree());
                            if(ans!=null){
                                next=this.getProcessEXtree().nextType();
                                if(next!=null && next!=this.getProcessEXtree()){
                                    this.setProcessEXtree(next);
                                    this.setArgument();
                                }
                                else this.setArgument();
                            }
                            else this.setArgument();
                        }
                        this.opeScan();
                        this.getProcessEXtree().setOpeBackColor(5);
                        this.setSubMode(3);
                    }
                    this.mt_autoScroll();
                    break;
                case 'i':   if(!this.getCtrl()) break;
                case MathTOUCH.K_UP:
                    var next=this.getProcessEXtree();
                    var preIndex=this.getScpOrder()-1;
                    if(preIndex<0) preIndex=0;
                    var dist=this.getSNUM()-this.getScpOrder()+preIndex;
                    if(dist>=this.getSNUM()) dist=dist-this.getSNUM();
                    for(var count=0;count<dist;count++){
                        next=this.getProcessEXtree().nextType();
                        if(next==null){
                            consolog.log("next null in MathCanvas");
                            break;
                        }
                        if(next!=this.getProcessEXtree()){this.setProcessEXtree(next);}
                    }
                    this.setPrescpOrder(this.getScpOrder()+1);
                    this.setScpOrder(preIndex);
                    this.setArgument();
                    this.getProcessEXtree().setOpeBackColor(5);
                    this.setSubMode(3);
                    this.mt_autoScrollup();
                    break;
                case MathTOUCH.K_SHIFT	:break;
                case MathTOUCH.K_CONTROL	:break;
                case MathTOUCH.K_ALT	:break;
                case MathTOUCH.K_L	:
                    if(this.getCtrl()){
                        break;
                    }
                default	:
                    if(this.checkCkey('\"')){
                        var txtterm;
                        helpmessage = this.getHelpMessage();
                        $.getJSON("langs/" + this.getLang() + ".json", function (data) {
                                  this.setHelpMessage("InputText");
                                  txtterm=prompt(data[helpmessage] );
                                  this.cur.insert("\""+txtterm+"\"");
                                  });
                    }else if(this.checkCkey(',')){
                        this.setCkey('\u201A');
                        this.cur.insert(this.getCkey());
                    }
                    else if(this.checkCkey('@')){
                        if(this.cur.isEmpty()){
                            
                            var txtterm=prompt("XTMLをペーストしてください。");
                            var temp=this.EXTML.parseEX(txtterm);
                            if(temp!=null){
                                this.setCurrentEXtree(temp);
                                this.setPreviousEXtree(this.getCurrentEXtree());
                                this.mode3Pros();
                            }
                            else{
                                this.setHelpMessage("xtmlError");
                            }
                        }
                        else{ this.cur.insert(this.getCkey());}
                    }
                    else{
                        this.undo();
                        this.cur.insert(this.getCkey());
                    }
                    this.setSubMode(1);
                    this.setSNUM(0);
                    this.clearCandidates();
                    var totalcurrent=this.cur.getText();
                    this.undoPush();
                    this.MEX.extrans(totalcurrent);
                    var temp=this.MEX.makeEXtreeFromEDIT(this.getCurrentEXtree());
                    if(temp==null){ this.errorProcess();
                        this.setErrormessage("error:"+totalcurrent);
                    }
                    else{
                        if(this.checkNull(this.getResult())){
                            var temp3=AlgRules.reform(this.getCurrentEXtree());
                            if(temp3!=null){ temp=temp3; this.setCurrentEXtree(temp3);}
                        }
                        if(MathTOUCH.STACK&&this.getCurrentEXtree().type===MathTOUCH.MAT&&this.getCurrentEXtree().rownum*this.getCurrentEXtree().colnum>1){
                            this.setCurrentEXtree(new EXtree1(0,OTB.theNumberOf("[]"),0,temp.copy(),"[]"));
                            this.getCurrentEXtree().setComplete();
                            temp = this.getCurrentEXtree();
                        }
                        this.getProcessEXtree()=temp.searchProcessNode();
                        if(!this.checkNullProcessEXtree()) this.mode3Pros();
                        else{
                            this.setProcessMode();
                            OTB.setLOrder(-1);
                            this.setLeftmargin(10);
                        }
                    }
            }
        }
        else if(this.checkTransMode(3)){
            switch(this.getGK()){
                case MathTOUCH.K_ESCAPE	:
                    if(!this.checkNull(this.getResult())||!this.cur.isEmpty()){
                        this.undo();
                    }
                    break;
                case MathTOUCH.CTRL_Z	:
                    if(!this.checkNull(this.getResult())){
                        MTTLOG.clzin();
                        this.undo();
                    }
                    break;
                case MathTOUCH.CTRL_Y    :
                    if(!this.checkNull(this.getResult())||!this.cur.isEmpty()){
                        MTTLOG.clzin();
                        this.redo();
                    }
                    break;
                case MathTOUCH.K_DELETE	:
                case MathTOUCH.K_BS	:
                    MTTLOG.bsin();
                    this.undoPush();
                    if(this.getShift()){
                        this.initNewLineInput();
                        this.initResult();
                    }else if(this.checkSelectMode()){
                        var ans=this.deleteDragPoint();
                        if(ans!=null){
                            this.setProcessEXtree(ans);
                            if(this.getProcessEXtree().type===MathTOUCH.EDIT){
                                this.setResult(this.getCurrentEXtree().result());
                                this.getProcessEXtree().setBSframe(6);
                                if(this.checkNull(this.getResult())){ this.resetCurrentLineInput();}
                                else{
                                    this.setTransMode(3);
                                    this.cur.clear();
                                    this.MEX.toknum=0;
                                    var temp=AlgRules.reform(this.getResult());
                                    if(temp!=null) this.setResult(temp);
                                }
                            }
                            else{
                                this.setProcessMode();
                            }
                            this.setSelectMode(false);
                            this.setOpeSelected(false);
                            this.setHelpMessage("delete1");
                        }
                        else{
                            this.setHelpMessage("cannotDelete2");
                        }
                    }else{
                        if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                            var bc=this.cur.doBS();
                            var ans;
                            if(bc==0){
                                ans=this.getProcessEXtree().deleteBSpoint();
                                if(ans!=null){
                                    this.setProcessEXtree(ans);
                                    if(this.getProcessEXtree().type===MathTOUCH.EDIT){
                                        this.setResult(this.getCurrentEXtree().result());
                                        this.getProcessEXtree().setBSframe(6);
                                        if(this.getResult()==null){
                                            this.resetNewLineInput();
                                            this.initResult();
                                        }else{
                                            this.BSpost();
                                        }
                                    }else{
                                        this.setProcessMode();
                                    }
                                }
                            }else{
                                if(this.getPPid()!=null){
                                    clearTimeout(this.getPPid());
                                    this.setPPid(null);
                                }
                                var that=this;
                                this.setPPid(setTimeout(function(){
                                                          that.paintPrediction();
                                                          },0));
                            }
                        }else{
                            this.setHelpMessage("cannotDelete1");
                        }
                    }
                        
                    this.checkForm(this.getOutputForm());
                    break;
                case 'j':   if(!this.getCtrl()) this.cur.insert(this.getCkey());break;
                case MathTOUCH.K_LEFT	:
                    MTTLOG.leftin();
                    this.undoPush();
                    this.cur.clear();
                    this.MEX.toknum=0;
                    if(this.getShift()||this.getCtrl()){
                        
                        this.cur.deleteColumn();
                        if(this.getPPid()!=null){
                            clearTimeout(this.getPPid());
                            this.setPPid(null);
                        }
                        var that=this;
                        this.setPPid(setTimeout(function(){
                                                  that.paintPrediction();
                                                  },0));
                    }
                    else if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                        var ic=this.cur.goLeft();
                        if(ic==0){
                            var tmp;
                            tmp=this.getProcessEXtree().moveBoxToLeft();
                            if(tmp!=null){
                                this.setProcessEXtree(tmp);
                                this.getProcessEXtree().setBSframe(6);
                                
                            }
                            else{
                                tmp=this.getProcessEXtree().moveEditToLeft();
                                if(tmp!=null){
                                    this.setProcessEXtree(tmp);
                                    this.getProcessEXtree().setBSframe(6);
                                }
                                else{
                                    this.getProcessEXtree().setBSframe(6);
                                    this.setHelpMessage("cannotMoveLeft");
                                }
                            }
                        }
                    }
                    else{
                        this.setHelpMessage("cannotUseLeftarrow");
                    }
                    break;
                case 'l':   if(!this.getCtrl()) this.cur.insert(this.getCkey());break;
                case MathTOUCH.K_RIGHT	:
                    MTTLOG.rightin();
                    this.undoPush();
                    this.cur.clear();
                    this.MEX.toknum=0;
                    if(this.getShift()||this.getCtrl()){
                        this.cur.insert('\u27B1');
                        if(this.getPPid()!=null){
                            clearTimeout(this.getPPid());
                            this.setPPid(null);
                        }
                        var that=this;
                        this.setPPid(setTimeout(function(){
                                                  that.paintPrediction();
                                                  },0));
                    }
                    else if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                        var ic=this.cur.goRight();
                        if(ic==0){
                            var tmp;
                            
                                tmp=this.getProcessEXtree().moveEditToRight();
                                if(tmp!=null){
                                    this.setProcessEXtree(tmp);
                                    this.getProcessEXtree().setBSframe(6);
                                }else{
                                    this.getProcessEXtree().setBSframe(6);
                                    this.setHelpMessage("cannotMoveRight");
                                }
                        }
                    }
                    else{
                        this.setHelpMessage("cannotUseRightarrow");
                    }
                    break;
                case 'i':   if(!this.getCtrl()) this.cur.insert(this.getCkey());break;
                case MathTOUCH.K_UP		:
                    this.undoPush();
                    if(this.getShift()||this.getCtrl()){
                        this.cur.deleteRow();
                        if(this.getPPid()!=null){
                            clearTimeout(this.getPPid());
                            this.setPPid(null);
                        }
                        var that=this;
                        this.setPPid(setTimeout(function(){
                                                  that.paintPrediction();
                                                  },0));
                    }
                    else if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT&&this.getPrediction()!=null){
                        this.changePreviousCandidate();
                        this.setTransMode(0);
                        
                    }
                    else{
                        this.cur.clear();
                        this.MEX.toknum=0;
                        var tmp=this.getProcessEXtree().moveBoxToLeft();
                        if(tmp!=null){this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);}
                        else this.getProcessEXtree().setBSframe(6);
                    }
                    break;
                case 'k':   if(!this.getCtrl()) this.cur.insert(this.getCkey());break;
                case MathTOUCH.K_DOWN	:
                    this.undoPush();
                    if(this.getShift()||this.getCtrl()){
                        this.cur.insert('\u23cE');
                        if(this.getPPid()!=null){
                            clearTimeout(this.getPPid());
                            this.setPPid(null);
                        }
                        var that=this;
                        this.setPPid(setTimeout(function(){
                                                  that.paintPrediction();
                                                  },0));
                    }
                    else if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT&&this.getPrediction()!=null){
                        this.changeNextCandidate();
                        this.setTransMode(0);
                        
                    }
                    else{
                        this.cur.clear();
                        this.MEX.toknum=0;
                        var tmp=this.getProcessEXtree().moveBoxToRight();
                        if(tmp!=null){this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);}
                        else this.getProcessEXtree().setBSframe(6);
                    }
                    break;
                case MathTOUCH.K_TAB	:
                    if(this.getShift() ||this.getCtrl()){
                        this.changePreviousCandidate();
                    }else{
                        this.changeNextCandidate();
                    }
                    break;
                case MathTOUCH.K_ENTER	:
                    this.undoPush();
                    MTTLOG.keymainus();
                    NES.writeXML();
                    LOG.writeLogXML();
                    if(!MathTOUCH.MTEditor  && !MathTOUCH.MC2 &&!MathTOUCH.mathGraph){
                        this.checkForm(this.getOutputForm());
                    }else{
                        this.endMathTOUCH();
                        break;
                    }
                    break;
                case MathTOUCH.K_SPACE	:
                    MTTLOG.spin();
                    this.undoPush();
                    if(this.getShift()||this.getCtrl()){
                        this.cur.insert(' ');
                        this.setFocus();
                        if(this.getPPid()!=null){
                            clearTimeout(this.getPPid());
                            this.setPPid(null);
                        }
                        var that=this;
                        this.setPPid(setTimeout(function(){
                                                  that.paintPrediction();
                                                  },100));
                    }
                    
                    else{
                        this.changeNextCandidate();
                        this.setTransMode(0);
                        
                    }
                    break;
                case MathTOUCH.CTRL_C:
                    this.copyEXtree=this.clickEx.copy();
                    copyMode=1;
                    this.setHelpMessage("copy");
                    break;
                case MathTOUCH.CTRL_X:
                    this.undoPush();
                    this.copyEXtree=this.clickEx.copy();
                    copyMode=1;
                    var ans=this.deleteDragPoint();
                    if(ans!=null){
                        this.setProcessEXtree(ans);
                        if(this.getProcessEXtree().type===MathTOUCH.EDIT){
                            this.setResult(this.getCurrentEXtree().result());
                            this.getProcessEXtree().setBSframe(6);
                            if(this.checkNull(this.getResult())){ this.resetCurrentLineInput();}
                            else{
                                this.setTransMode(3);
                                this.cur.clear();
                                this.MEX.toknum=0;
                                var temp=AlgRules.reform(this.getResult());
                                if(temp!=null) this.setResult(temp);
                            }
                        }
                        else{
                            this.setProcessMode();
                        }
                        this.setSelectMode(false);
                        this.setOpeSelected(false);
                        this.setHelpMessage("copyandcut");
                    }
                    else this.setHelpMessage("cutError");
                    break;
                case MathTOUCH.CTRL_V:
                    this.undoPush();
                    this.pastePros();
                    this.setHelpMessage("paste");
                    break;
                case MathTOUCH.K_SHIFT	:break;
                case MathTOUCH.K_CONTROL	:break;
                case MathTOUCH.K_ALT	:break;
                case MathTOUCH.K_L	:
                    if(this.getShift()){
                        break;
                    }
                default	:
                    if(this.checkSelectMode() && this.clickEx!=null){
                        var ans=this.deleteDragPoint();
                        if(ans!=null){
                            this.setProcessEXtree(ans);
                            if(this.getProcessEXtree().type===MathTOUCH.EDIT){
                                this.setResult(this.getCurrentEXtree().result());
                                this.getProcessEXtree().setBSframe(6);
                                if(this.checkNull(this.getResult())){ this.resetCurrentLineInput();}
                                else{
                                    this.setTransMode(3);
                                    this.cur.clear();
                                    this.MEX.toknum=0;
                                    var temp=AlgRules.reform(this.getResult());
                                    if(temp!=null) this.setResult(temp);
                                }
                            }
                            else{
                                this.setProcessMode();
                            }
                            this.setSelectMode(false);
                            this.setOpeSelected(false);
                        }
                        else{
                            this.setHelpMessage("cannotDelete2");
                        }
                    }
                    this.setTransMode(0);
                    this.MEX.toknum=0;
                    if(this.checkCkey('\"')){
                        var txtterm;
                        $.getJSON("langs/" + this.getLang() + ".json", function (data) {
                                  txtterm=prompt(data["InputText"]);
                                  this.cur.insert("\""+txtterm+"\"");
                                  });
                    }
                    else if(this.checkCkey(',')){
                        this.setCkey('\u201A');
                        this.cur.insert(this.getCkey());
                    }
                    else if(this.checkCkey('L')){
                        if(this.getCtrl()){
                            if(this.checkNullProcessEXtree()&&this.getProcessEXtree().type===MathTOUCH.EDIT){
                                var ic=this.cur.goRight();
                                if(ic==0){
                                    var tmp=this.getProcessEXtree().moveEditToRight();
                                    if(tmp!=null){this.setProcessEXtree(tmp);this.getProcessEXtree().setBSframe(6);}
                                    else{ this.getProcessEXtree().setBSframe(6);
                                        this.setHelpMessage("cannotMoveRight");
                                    }
                                }
                            }
                        }
                        else{this.cur.insert(this.getCkey());}
                    }
                    else if(this.checkCkey('@')){
                        if(this.cur.isEmpty()){
                            var txtterm=prompt("XTMLをペーストしてください。");
                            var temp=this.EXTML.parseEX(txtterm);
                            if(temp!=null){
                                this.setCurrentEXtree(temp);
                                this.setPreviousEXtree(this.getCurrentEXtree());
                                this.mode3Pros();
                            }
                            else{
                                this.setHelpMessage("xtmlError");
                            }
                        }
                        else{ this.cur.insert(this.getCkey());}
                    }
                    else if(this.checkCkey('#')){
                        this.setTransMode(0);
                        this.cur.insert('\u21E9');
                    }
                    else{ this.cur.insert(this.getCkey());}
                    if(this.getPPid()!=null){
                        clearTimeout(this.getPPid());
                        this.setPPid(null);
                    }
                    var that=this;
                    this.setPPid(setTimeout(function(){
                                              that.paintPrediction();
                                              },0));
                    

            }
        }
        else if(this.checkTransMode(4)){
            this.stopTimer();
            switch(this.getGK()){
                case MathTOUCH.K_ESCAPE	:
                    this.clearCandidates();
                    this.resetCurrentLineInput();
                    this.initResult();
                    this.setSubMode(0);
                    break;
                case MathTOUCH.K_DELETE	:
                case MathTOUCH.K_BS	:
                    MTTLOG.bsin();
                    this.clearCandidates();
                    this.undo();
                    break;
                case MathTOUCH.CTRL_Z	:
                    MTTLOG.clzin();
                    this.clearCandidates();
                    this.undo();
                    break;
                case MathTOUCH.K_ENTER	:
                    MTTLOG.retin();
                    this.setMcol(this.getMcol()+2);
                    if(this.getMcol()%2 ===1 && this.getMcol() >= this.getProcessEXtree().colnum*2){
                        this.setMcol(0);
                        this.getProcessEXtree().setMatColor(this.getMcol(),5);
                    }
                    else if((this.getMcol()%2 === 0 && this.getMcol() >= this.getProcessEXtree().colnum*2) || this.getShift()){
                        this.getProcessEXtree().setComplete();
                        this.setPreviousEXtree(this.getProcessEXtree());
                        OTB.setLOrder(-1);
                        this.setTransMode(2);
                        this.setSubMode(3);
                        this.setProcessEXtree(this.getProcessEXtree().nextProcessNode());
                        if(!this.checkNullProcessEXtree()) {this.mode3Pros();}
                        else if(this.getProcessEXtree().type===MathTOUCH.MAT){
                            this.setTransMode(4);
                            this.setSubMode(4);
                            this.setMcol(0);
                            this.getProcessEXtree().setMatColor(this.getMcol(),5);
                        }
                        else{
                            this.setProcessMode();
                        }
                    }
                    else	this.getProcessEXtree().setMatColor(this.getMcol(),5);
                    break;
                case MathTOUCH.K_TAB	:break;
                case MathTOUCH.K_RIGHT	:
                    break;
                case MathTOUCH.K_SPACE	:
                    MTTLOG.spin();
                    this.getProcessEXtree().nextMatColum(this.getMcol());
                    break;
                case MathTOUCH.K_SHIFT	:break;
                case MathTOUCH.K_CONTROL	:break;
                case MathTOUCH.K_ALT	:break;
                case MathTOUCH.K_L	:
                    if(this.getShift()){
                        break;
                    }
                default	:
            }
            $.getJSON("langs/" + this.getLang() + ".json", function (data) {
                      this.setHelpcommentHTML("&#x25B6; "+ data[helpMessage]);
                      });
        }


        else{
            switch(this.getGK()){
                case MathTOUCH.K_ENTER	:
                    dw_Next();
                    this.resetNewLineInput();
                default	:
            }
        }
                        
        this.setShift(false);
        this.paint();
};

MathTOUCH.mathcanvas.prototype.BSpost = function(){
    this.setTransMode(3);
    this.setSubMode(0);
    this.setScpOrder(-1);
    if(!this.checkCursorFlag()){
        this.getCanvas().focus();
        this.setFocus();
    }
};
MathTOUCH.mathcanvas.prototype.errorProcess = function (){
        this.setErrormessage("");
        for(var i=0;i<this.MEX.errnum;i++) this.setErrormessage(this.MEX.error[i]+"\n");
        this.MEX.errnum=0;
        this.MEX.toknum=0;
};

MathTOUCH.mathcanvas.prototype.initResult = function(){
                this.setResult(null);
                this.setLogMode(true);
                MTTLOG.allclear();
                this.setPrediction(null);
                if(!MathTOUCH.MTEditor &&!MathTOUCH.MC2 &&!MathTOUCH.mathGraph){
                    this.reset_select();
                }
                    if(!this.checkCursorFlag()){
                        this.setFocus();
                    }
};

MathTOUCH.mathcanvas.prototype.initNewLineInput = function(){
        cnum=0;
        this.setTransMode(0);
        this.cur.clear();
        this.MEX.toknum=0;
        this.setScpOrder(-1);
        this.setLeftmargin(10);
        this.setCurrentEXtree(new  EditEXT(this.cur));
        this.setProcessEXtree(this.getCurrentEXtree());
};

MathTOUCH.mathcanvas.prototype.resetCurrentLineInput = function(){
        this.setTransMode(0);
        this.cur.clear();
        this.cur.insert(this.getCurrentEXtree().getInputWord());
        this.MEX.toknum=0;
        this.setScpOrder(-1);
        this.setLeftmargin(10);
        this.setCurrentEXtree(new  EditEXT(this.cur));
        this.setProcessEXtree(this.getCurrentEXtree());
};

MathTOUCH.mathcanvas.prototype.resetNewLineInput = function(){
        this.initNewLineInput();
        this.initResult();
};

MathTOUCH.mathcanvas.prototype.deleteDragPoint = function(){
        if(this.clickEx==null){ return null;}
        var ans=null;
        if(this.checkOpeSelected()) this.clickEx.clearOpeBackColor();
        else this.clickEx.clearBackColor();
        if(this.checkOpeSelected()){
            if(this.clickEx.type===MathTOUCH.OP2C){
                ans=new  EditEXT(this.cur).spacedOn(this.clickEx.ch[1].copy());
                this.clickEx.change(this.clickEx.ch[0].spacedOn(ans));
                ans=ans.ch[0];
            }
            else if(this.clickEx.type===MathTOUCH.OP1P){
                this.clickEx.change(new  EditEXT(this.cur).spacedOn(this.clickEx.ch[0].copy()));
                ans=this.clickEx.ch[0];
            }
            else if(this.clickEx.type===MathTOUCH.OP2P){
                this.clickEx.change(new  EditEXT(this.cur).spacedOn(lickEx.ch[0].spacedOn(this.clickEx.ch[1].copy())));
                ans=this.clickEx.ch[0];
            }
            else if(this.clickEx.type===MathTOUCH.OP3P){
                this.clickEx.change(new  EditEXT(this.cur).spacedOn(this.clickEx.ch[0].spacedOn(this.clickEx.ch[1].copy().spacedOn(this.clickEx.ch[2].copy()))));
                ans=this.clickEx.ch[0];
            }
            else if(this.clickEx.type===MathTOUCH.OP3T){
                ans=new  EditEXT(this.cur).spacedOn(this.clickEx.ch[0].spacedOn(this.clickEx.ch[2].copy()));
                this.clickEx.change(this.clickEx.ch[1].spacedOn(ans));
                ans=ans.ch[0];
            }
            else if(this.clickEx.type===MathTOUCH.OP1A){
                this.clickEx.change(this.clickEx.ch[0].copy().spacedOn(new  EditEXT(this.cur)));
                ans=this.clickEx.ch[1];
            }
            else if(this.clickEx.type===MathTOUCH.OP1B){
                this.clickEx.change(new  EditEXT(this.cur).spacedOn(this.clickEx.ch[0].copy()));
                ans=this.clickEx.ch[0];
            }
            else{
            }
        }
        else if(this.clickEx.parent==null){
            this.resetNewLineInput();
            ans=this.getProcessEXtree();
        }
        else if(this.clickEx.parent.isSpaced()&&this.clickEx.pnum==1){
            if(this.clickEx.parent.ch[0].isLinear()){
                var temp0=this.clickEx.parent;
                temp0.change(temp0.ch[0]);
                var temp=temp0.nextEDITpoint();
                temp.change(temp.copy().spacedOn(new  EditEXT(this.cur)));
                ans=temp.ch[1];
            }
            else{
                this.clickEx.change(new  EditEXT(this.cur));
                ans=this.clickEx;
            }
        }
        else{
            this.clickEx.change(new  EditEXT(this.cur));
            ans=this.clickEx;
        }
        return ans;
};

MathTOUCH.mathcanvas.prototype.undoPush = function(){
    if(MathTOUCH.MathCanvas_undoStack==null||MathTOUCH.MathCanvas_undoStack==undefined) return;
    MathTOUCH.MathCanvas_undoStack.push(this.getPushData());
}
MathTOUCH.mathcanvas.prototype.redoPush = function(){
    if(MathTOUCH.MathCanvas_redoStack==null||MathTOUCH.MathCanvas_redoStack==undefined) return;
    MathTOUCH.MathCanvas_redoStack.push(this.getPushData());
}

MathTOUCH.mathcanvas.prototype.getPushData = function(){
    var mcbak=new McBAK.MathCanvasBackup();
    mcbak.setTransMode(this.getTransMode());
    mcbak.setSubMode(this.getSubMode());
    mcbak.setMcol(this.getMcol());
    mcbak.setLogMode(this.getLogMode());
    mcbak.setScpKey(this.getScpKey());
    mcbak.setScpOrder(this.getScpOrder());
    if(this.getCurrentEXtree()!=null){
        mcbak.setCurrentEXtree(this.getCurrentEXtree().copy());
        if(this.checkNullProcessEXtree()){
            var postr = this.getProcessEXtree().getPosition();
            mcbak.setProcessEXtree(mcbak.getCurrentEXtree().subTree(postr));
        }
        else{
            mcbak.setProcessEXtree(null);
        }
    }
    else{
        mcbak.setCurrentEXtree(null);
    }
    mcbak.setLogOrder(OTB.getLOrder());
    mcbak.setDivMode(this.getDivMode());
    if(MathTOUCH.MTEditor  || MathTOUCH.MC2 ||MathTOUCH.mathGraph){
        if(this.getResult()!=null){
            mcbak.setResult(this.getResult().copy());
        }
        else{
            mcbak.setResult(null);
        }
    }else{
        if(!this.checkNull(this.getResult())) mcbak.setResult(this.getResult().copy());
        else mcbak.setResult(null);
    }
    mcbak.setOutput(this.getOutputForm());
    if(this.cur.isEmpty()) mcbak.setCursorText("");
    else mcbak.setCursorText(this.cur.getText());
    mcbak.setPrediction(this.getPrediction());
    mcbak.setTargetMode(this.targetMode);
    mcbak.setCandidates_flag(this.getCandidates_flag());
    return mcbak;
}
                                       
MathTOUCH.mathcanvas.prototype.setPullData = function(mcbak){
    if(mcbak==null) return;
    this.setTransMode(mcbak.getTransMode());
    this.setSubMode(mcbak.getSubMode());
    this.setMcol(mcbak.getMcol());
    this.setLogMode(mcbak.getLogMode());
    this.setScpKey(mcbak.getScpKey());
    this.setScpOrder(mcbak.getScpOrder());
    if(mcbak.getCurrentEXtree()!=null) this.setCurrentEXtree(mcbak.getCurrentEXtree());
    else this.setCurrentEXtree(null);
    if(mcbak.checkNullProcessEXtree()) this.setProcessEXtree(mcbak.getProcessEXtree());
    else this.setProcessEXtree(null);
    OTB.setLOrder(mcbak.getLogOrder());
    this.setDivMode(mcbak.getDivMode());
    if(mcbak.getResult() != null){
        this.setResult(mcbak.getResult().copy());
    }else{
        this.setResult(null);
    }
    this.setOutputForm(mcbak.getOutput());
    var curstr=mcbak.getCursorText();
    this.cur.clear();
    if(curstr!=null&&curstr.length>0) this.cur.insert(curstr);
    this.setPrediction(mcbak.getPrediction());
    this.targetMode=mcbak.getTargetMode();
    this.setCandidates_flag(mcbak.getCandidates_flag());
    this.pullArgument();
}



MathTOUCH.mathcanvas.prototype.undo = function(){
    var mcbak=MathTOUCH.MathCanvas_undoStack.pop();
    if(mcbak!=null){
        this.redoPush();
        this.clearCandidates();
        this.setPullData(mcbak);
        if(!this.checkCursorFlag()){
            this.setFocus();
        }
    }
    else{
        alert("これ以上取消しできません!");
    }
       
}
MathTOUCH.mathcanvas.prototype.redo = function(){
    var mcbak=MathTOUCH.MathCanvas_redoStack.pop();
    if(mcbak!=null){
        this.undoPush();
        this.clearCandidates();
        this.setPullData(mcbak);
        if(!this.checkCursorFlag()){
            this.setFocus();
        }
    }
    else{
        alert("これ以上やり直しできません!");
    }
}

MathTOUCH.mathcanvas.prototype.pullArgument = function(){
        if(!this.checkNullProcessEXtree()) return;
        if(this.getProcessEXtree().type<MathTOUCH.OP1P||this.getProcessEXtree().type>MathTOUCH.OP3T) return;
        if(this.checkDivMode(MathTOUCH.Dfix)){
            this.setArgEXtree(this.getProcessEXtree().ch[0]);
        }
        else if(this.checkDivMode(MathTOUCH.D2P1)){
            this.setArgEXtree1(this.getProcessEXtree().ch[0]);
            if(this.getProcessEXtree().type===MathTOUCH.OP3T) this.setArgEXtree(this.getProcessEXtree().ch[2]);
            else this.setArgEXtree(this.getProcessEXtree().ch[1]);
            this.getProcessEXtree().setChildBColor(0);
        }
        else if(this.checkDivMode(MathTOUCH.D3P1)){
            this.setArgEXtree1(this.getProcessEXtree().ch[0]);
            this.setArgEXtree2(this.getProcessEXtree().ch[1]);
            this.getArgEXtree(this.getProcessEXtree().ch[2]);
            this.getProcessEXtree().setChildBColor(0);
        }
        else if(this.checkDivMode(MathTOUCH.D3P2)){
            this.setArgEXtree1(this.getProcessEXtree().ch[0]);
            this.setArgEXtree2(this.getProcessEXtree().ch[1]);
            this.setArgEXtree(this.getProcessEXtree().ch[2]);
            this.getProcessEXtree().setChildBColor(1);
        }
        else if(this.checkDivMode(MathTOUCH.Dpre)){
            this.getProcessEXtree().setChildBColor(0);
        }
        else if(this.checkDivMode(MathTOUCH.DLast)){
            this.getProcessEXtree().setChildBColor(this.getProcessEXtree().cnum-1);
        }
    };

MathTOUCH.mathcanvas.prototype.setProcessMode = function(){
    if(!this.checkNullProcessEXtree()){
        this.setHelpMessage("escError");
        return;
    }
    this.setScpOrder(0);
        switch (this.getProcessEXtree().type) {
            case MathTOUCH.EMP:
                this.cur.clear();
                this.setTransMode(0);
                this.setSubMode(1);
                this.getProcessEXtree().addEditBox(this.cur);
                this.setProcessEXtree(this.getProcessEXtree().ch[1]);
                break;
            case MathTOUCH.VAR:
            case MathTOUCH.SYM:
                DIC.setDicE(0);
                this.setTransMode(1);
                this.setSubMode(2);
                this.setScpKey(this.getProcessEXtree().key);
            this.setScpOrder(KTB.getLogOrder(this.getScpKey(),this.getProcessEXtree().order));
                if(this.getProcessEXtree().isMultipleVARorSYM()){
                    this.getProcessEXtree().setBaseColor(2);
                    this.setErrormessage("元キー："+this.getProcessEXtree().inputWord+"に戻す場合はBS");
                }
                this.getProcessEXtree().setOpeBackColor(5);
                break;
            case MathTOUCH.XTML:
            case MathTOUCH.NUM:
                this.setTransMode(1);
                this.setSubMode(2);
                this.getProcessEXtree().setBaseColor(2);
                this.getProcessEXtree().setBackColor(5);
                break;
            case MathTOUCH.TXT:
                this.getProcessEXtree().setComplete();
                this.setProcessEXtree(this.getProcessEXtree().nextProcessNode());
                if(!this.checkNullProcessEXtree()) this.mode3Pros();
                else{
                    this.setProcessMode();
                }
                break;
            case MathTOUCH.MAT:
                if(MathTOUCH.STACK){
                    this.getProcessEXtree().setComplete();
                    this.setPreviousEXtree(this.getProcessEXtree());
                    OTB.setLOrder(-1);
                    this.setTransMode(2);
                    this.setSubMode(3);
                    this.setProcessEXtree(this.getProcessEXtree().nextProcessNode());
                    if(!this.checkNullProcessEXtree()) {this.mode3Pros();}
                    else{
                        this.setProcessMode();
                    }
                    this.setErrormessage(null);
                }else{
                    this.setTransMode(4);
                    this.setSubMode(4);
                    this.setMcol(1);
                    this.getProcessEXtree().setMatColor(this.getMcol(),7);
                }
                break;
            case MathTOUCH.EDIT:
                this.setTransMode(0);
                this.setSubMode(1);
                break;
            default:
                if(this.getProcessEXtree().isSpaced()){
                    var temp=this.getProcessEXtree().ch[1].theLeftMostLeaf();
                    if(this.getProcessEXtree().ch[0].type===MathTOUCH.EMP||(temp!=null&&temp.type===MathTOUCH.EMP)){
                        this.getProcessEXtree().setComplete();
                        this.setProcessEXtree(this.getProcessEXtree().nextProcessNode());
                        if(!this.checkNullProcessEXtree()) this.mode3Pros();
                        else{
                            this.setProcessMode();
                        }
                    }else {
                        this.setTransMode(2);
                        this.setSubMode(3);
                        this.setArgument();
                        OTB.setLOrder(OTB.getLogOrder(this.getProcessEXtree().key,this.getProcessEXtree().order));
                        this.opeScan();
                        this.getProcessEXtree().setOpeBackColor(5);
                        this.getProcessEXtree().ch[1].setBackColor(0);
                    }
                }else{
                    this.setTransMode(2);
                    this.setSubMode(3);
                    this.setArgument();
                    OTB.setLOrder(OTB.getLogOrder(this.getProcessEXtree().key,this.getProcessEXtree().order));
                    this.opeScan();
                    this.getProcessEXtree().setOpeBackColor(5);
                    if(this.getProcessEXtree().cnum>=2) this.getProcessEXtree().ch[1].setBackColor(0);
                }
                break;
        }
};

MathTOUCH.mathcanvas.prototype.opeScan = function(){
                        let selIndex, len, xp;
        if((this.getProcessEXtree().type>=MathTOUCH.OP1P&&this.getProcessEXtree().type<=MathTOUCH.OP3P)||this.getProcessEXtree().type===MathTOUCH.OP3T){
            this.undoPush();
            var tmpLogOrder=OTB.getLOrder();
            len=OTB.getOpeLength(this.getProcessEXtree().key);
            this.setSNUM(len);
            selIndex=new Array();
            this.clearAnsTex();
            
            var tmpIndex=new Array();
            seReps=new Array();
            var tmpReps=new Array();
            var tmpTex=new Array();
            
            var count=0;
            var next=this.getProcessEXtree();
            next.setComplete();
            next.state=0;
            while(next!=null){
                next.setOpeBackColor(5);
                next.setOpeColorRight(6);
                tmpIndex[count]=next.order;
                tmpReps[count]=next.toExRep();
                tmpTex[count]=this.tree.TeXof(next,true);
                next=this.getProcessEXtree().nextType();
                if(next!=null){if(next!=this.getProcessEXtree()){this.setProcessEXtree(next);}}
                else if(this.reMakeTree2(this.getProcessEXtree())!=null){
                    next=this.getProcessEXtree().nextType();
                    if(next!=null&&next!=this.getProcessEXtree()){this.setProcessEXtree(next);}
                }
                count++; if(count>30) break;
                if(next!=null&&next.order==tmpIndex[0]) break;
            }
            this.setSNUM(count);
            var min=tmpIndex[0];
            var k=0;
            for(count=1;count<this.getSNUM();count++) if(tmpIndex[count]<min){min=tmpIndex[count];k=count;}
            var tmpOrder=0;
            for(var j=0;j<this.getSNUM();j++){
                if(k==0) tmpOrder=j;
                this.setAnsTex(j, tmpTex[k]);
                selIndex[j]=tmpIndex[k++];
                if(k>=this.getSNUM()) k=0;
            }
            this.pullData(2);
            this.setScpOrder(tmpOrder);
            OTB.setLOrder(tmpLogOrder);
        }
};

MathTOUCH.mathcanvas.prototype.setArgument = function(){
        if(!this.checkNullProcessEXtree()){this.setDivMode(MathTOUCH.Dfix);return;}
        var Ptype=this.getProcessEXtree().type;
        if(Ptype<MathTOUCH.OP1P||Ptype>MathTOUCH.OP3T) this.setDivMode(MathTOUCH.Dfix);
        else if(Ptype === MathTOUCH.OP1A ){
            this.setDivMode(MathTOUCH.Dpre);
            this.setArgEXtree1(this.getProcessEXtree().ch[0]);
            this.getProcessEXtree().setChildBColor(0);
        }else if(Ptype === MathTOUCH.OP2P){
            this.setDivMode(MathTOUCH.D2P1);
            this.setArgEXtree1(this.getProcessEXtree().ch[0]);
            this.setArgEXtree(this.getProcessEXtree().ch[1]);
            this.getProcessEXtree().setChildBColor(0);
        }else if(Ptype === MathTOUCH.OP3P){
            this.setDivMode(MathTOUCH.D3P1);
            this.setArgEXtree1(this.getProcessEXtree().ch[0]);
            this.setArgEXtree2(this.getProcessEXtree().ch[1]);
            this.setArgEXtree(this.getProcessEXtree().ch[2]);
            this.getProcessEXtree().setChildBColor(0);
        }else if(Ptype === MathTOUCH.OP3T){
            this.setDivMode(MathTOUCH.D2P1);
            this.setArgEXtree1(this.getProcessEXtree().ch[0]);
            this.setArgEXtree(this.getProcessEXtree().ch[2]);
            this.getProcessEXtree().setChildBColor(0);
        }
        else{
            this.setDivMode(MathTOUCH.DLast);
            this.setArgEXtree(this.getProcessEXtree().ch[this.getProcessEXtree().cnum-1]);
            this.getProcessEXtree().setChildBColor(this.getProcessEXtree().cnum-1);
        }
};
  
MathTOUCH.mathcanvas.prototype.pastePros = function(){
        this.setTransMode(3);
        this.setSubMode(0);
        if(this.checkSelectMode()){
            if(this.clickEx!=null){
                if(this.checkOpeSelected()){
                    this.clickEx.clearOpeBackColor();
                }else{
                    this.clickEx.clearBackColor();
                }
            }
            this.getProcessEXtree().clearBSframe();
            this.setRmcur(this.getCurrentEXtree().removeEditBox());
            this.setPreviousEXtree(this.getCurrentEXtree().copy());
            if(this.clickEx!=null){
                if(this.checkOpeSelected()) {
                    this.clickEx.change(this.copyEXtree);
                }else{
                    this.clickEx.change(this.copyEXtree);
                }
                this.setSelectMode(false);
                this.setOpeSelected(false);
            }
        }else{
            this.getProcessEXtree().clearBSframe();
            var ppcur=this.getCurrentEXtree().EDITpoint();
            if(ppcur!=null&&this.checkFrontback(1)){
                ppcur.clearEditMark();
                ppcur.change(this.copyEXtree);
                this.setProcessEXtree(ppcur);
            }else if(ppcur!=null){
                ppcur.clearEditMark();
                ppcur.change(this.copyEXtree);
                this.setProcessEXtree(ppcur);
            }
            this.setPreviousEXtree(this.getCurrentEXtree().copy());
        }
        if(this.checkNullPreviousEXtree()){
            this.getPreviousEXtree().setEditMark();
        }
        this.setResult(AlgRules.reform(this.getCurrentEXtree()));
        var atype1=AlgRules.theAlgebraicType(this.getCurrentEXtree());
        if(this.getResult()==null){
            this.setErrormessage("curr="+atype1+": argebraic form error!");
            this.setResult(this.getCurrentEXtree());
        }else{
            this.getResult().setAllComplete();
        }
        XMLresult=this.xtreeml.XtreeML(this.getResult());
        if(this.getLogMode() && !this.cur.isEmpty()){
            LOG.makeLogOfSubtree(this.getResult());
        }
        this.cur.clear();
        this.setCurrentEXtree(this.getResult().copy());
        this.setProcessEXtree(null);
        if(!this.checkNullProcessEXtree()){
            var temp=this.getCurrentEXtree().nextEDITpoint();
            temp.change(temp.copy().spacedOn(new  EditEXT(this.cur)));
            this.setProcessEXtree(temp.ch[1]);
        }
        this.getProcessEXtree().setBSframe(6);
};

MathTOUCH.mathcanvas.prototype.mode3Pros = function(){
    this.setTransMode(3);
    this.setSubMode(0);
    this.setResult(AlgRules.reform(this.getCurrentEXtree()));
    var atype1=AlgRules.theAlgebraicType(this.getCurrentEXtree());
    if(this.checkNull(this.getResult())){
        this.setErrormessage("curr="+atype1+": argebraic form error!");
        this.setResult(this.getCurrentEXtree());
    }else{
        this.getResult().setAllComplete();
    }
    if(this.getLogMode() && !this.cur.isEmpty()){
        LOG.makeLogOfSubtree(this.getResult());
        if(this.isPredicted()){
            var projTrue=this.getPrediction().getEXtreeAt(this.getScpOrder());
            var proj0=this.getPrediction().getEXtreeAt(0);
            if(this.getScpOrder()>0){
                NES.addScore(projTrue,2);
                NES.addScore(proj0,-1);
            }
        }
    }
    this.setScpOrder(-1);
    this.setCurrentEXtree(this.getResult().copy());
    var emppoint=this.getCurrentEXtree().topDownEMPsearch();
    if(emppoint==null){
        var temp=this.getCurrentEXtree().EditMarkpoint();
        if(temp==null){
            temp=this.getCurrentEXtree().nextEDITpoint();
        }
        temp.clearEditMark();
        temp.change(temp.copy().spacedOn(new EditEXT(this.cur)));
        this.setProcessEXtree(temp.ch[1]);
    } else{
        emppoint.change(new EditEXT(this.cur));
        this.setProcessEXtree(emppoint);
    }
    this.getCurrentEXtree().clearEditMark();
    this.getProcessEXtree().setBSframe(6);
    if(!this.checkCursorFlag()){
        this.getCanvas().focus();
        this.setFocus();
    }

};

MathTOUCH.mathcanvas.prototype.mode1ReturnPros = function(){
        this.undoPush();
        this.getProcessEXtree().setComplete();
        this.setPreviousEXtree(this.getProcessEXtree());
        if(this.getProcessEXtree().type===MathTOUCH.VAR && this.getScpOrder()>0){
            KTB.shiftToTop(this.getScpKey(),this.getScpOrder());
            this.reNewTreeLeaf(this.getScpKey(),this.getCurrentEXtree());
            MTTLOG.keyTableChanged();
        }
        this.setScpOrder(0);
        this.setSubMode(2);
        if(this.getShift()){
            MTTLOG.shiftretin();
            this.getCurrentEXtree().setAllComplete();
            this.mode3Pros();
        }
        else{
            MTTLOG.retin();
            this.setProcessEXtree(this.getProcessEXtree().nextProcessNode());
            if(!this.checkNullProcessEXtree()) {
                this.mode3Pros();
            }
            else {
                this.setProcessMode();
            }
        }
};

MathTOUCH.mathcanvas.prototype.mode5Pros = function(){
        this.undoPush();
        this.setScpOrder(-1);
        this.getProcessEXtree().setBSframe(6);
        if(!this.checkCursorFlag()){
            this.setFocus();
        }
        $('#predictList').hide();
}
                          
                          
MathTOUCH.mathcanvas.prototype.moveLastInOperandToNextOperand = function(arg1,arg2){
        var ans=true;
        var cutpoint=arg1.getLastSpacedOrAPoint();
        if(cutpoint==null) ans=false;
        else if(cutpoint.isSpaced()){
            arg2.addFirst(cutpoint.ch[1]);
            cutpoint.change(cutpoint.ch[0]);
        }else if(cutpoint.type===MathTOUCH.OP1A){
            var od=cutpoint.theOrderOfAnotherType(MathTOUCH.OP1P);
            if(arg2.isSpaced()){
                arg2.add(0,new EXtree1(cutpoint.state,cutpoint.key,od,arg2.ch[0].copy(),cutpoint.inputWord));
                cutpoint.change(cutpoint.ch[0]);
            }else{
                arg2.change(new EXtree1(cutpoint.state,cutpoint.key,od,arg2.copy(),cutpoint.inputWord));
                cutpoint.change(cutpoint.ch[0]);
            }
        }else{
            ans=false;
        }
        return ans;
};

MathTOUCH.mathcanvas.prototype.moveFirstInNextOperandToOperand = function(arg1,arg2){
        var ans=true;
        var cutpoint=arg2.getFirst1Pto1APoint();
        if(cutpoint!=null){
            var od=cutpoint.theOrderOfAnotherType(MathTOUCH.OP1A );
            if(od>=0){
                var last=arg1.getLastB();
                last.change(new EXtree1(cutpoint.state,cutpoint.key,od,last.copy(),cutpoint.inputWord));
                cutpoint.change(cutpoint.ch[0]);
            }else{
                return false;
            }
        }else{
            cutpoint=arg2.cutFirstSpacedTerm2();
            if(cutpoint!=null) arg1.addLastB(cutpoint);
            else ans=false;
        }
        return ans;
};

MathTOUCH.mathcanvas.prototype.reNewTreeLeaf = function(key,ex){
        if(ex.type===MathTOUCH.VAR && ex.state==0 && ex.key==key){
            ex.val=KTB.getLogWord(key,0);
            ex.order=KTB.getOrderOfLog(key,0);
        }else if(ex.cnum>0){
            for(var i=0;i<ex.cnum;i++) this.reNewTreeLeaf(key,ex.ch[i]);
        }
};

MathTOUCH.mathcanvas.prototype.reMakeTree = function(ex){
    var last=ex.getLastB();
    while(last.BraType()==1) last=last.ch[0].getLastB();
    var nnum=last.inputWord.length;
    if(last.type===MathTOUCH.NUM && nnum>1){
        var nstr=last.inputWord;
        var outWord1,outWord2;
        if(last.val.charAt(0)=='b'){
            outWord1="b"+nstr.substring(0,nnum-1);outWord2="b"+nstr.substring(nnum-1,nnum);
        }else{
            outWord1=nstr.substring(0,nnum-1);outWord2=nstr.substring(nnum-1,nnum);
        }
        last.change(new EXtree2(0,MathTOUCH.SP,0,new NumberEXT(0,outWord1),new NumberEXT(last.state,outWord2)," "));
        return ex;
    }else if(nnum>1&&(last.type===MathTOUCH.XTML || last.type===MathTOUCH.SYM || last.type===MathTOUCH.VAR)){
            DIC.setDicE(0);
            var reststr;
            var sub=new MathTOUCH.middleEX(100);
            var leftparent=last.theLeftMostTop();
            reststr=leftparent.getInputWord();
            sub.extransPart(last.getInputWord().length-1,reststr);
            var ans=sub.makeEXtree(0,sub.toknum);
            if(ans==null){
                this.setHelpMessage("interpretingError1");
                return null;
            }else{
                leftparent.change(ans);
                return ex;
            }
        }else{
            while(true){
                var btype=last.BraType();
                if(btype==0){
                    
                }else if(btype==1){
                    var ans=this.reMakeTree(last.ch[0]);
                    if(ans!=null){
                        var temp=last.ch[0].getLastSpacedTerm();
                        if(temp!=null){
                            temp.parent.parent.add(temp.parent.pnum,temp.parent.ch[0].copy());
                            last.change(new EXtree2(0,MathTOUCH.SP,0,last.copy(),temp.copy()," "));
                            return ex;
                        }
                    }
                }else if(last.type===MathTOUCH.OP2C||last.type===MathTOUCH.OP1A||btype==2){
                    var ans=this.reMakeTree(last.ch[0]);
                    if(ans!=null){
                        var temp=last.ch[0].getLastSpacedTerm();
                        if(temp!=null){
                            temp.parent.change(temp.parent.ch[0]);
                            var temp2=last.ch[0].copy();
                            last.add(0,temp.copy());
                            last.change(new EXtree2(0,MathTOUCH.SP,0,temp2,last.copy()," "));
                            return ex;
                        }
                    }
                }else if(last.type===MathTOUCH.OP2P){
                    var ans=this.reMakeTree(last.ch[0]);
                    if(ans!=null){
                        var temp=last.ch[0].getLastSpacedTerm();
                        if(temp!=null){
                            temp.parent.change(temp.parent.ch[0].copy());
                            last.ch[1].change(new EXtree2(0,MathTOUCH.SP,0,temp.copy(),last.ch[1].copy()," "));
                            return ex;
                        }
                    }
                }else if(last.type===MathTOUCH.OP3P){
                    var ans=this.reMakeTree(last.ch[1]);
                    if(ans!=null){
                        var temp=last.ch[1].getLastSpacedTerm();
                        if(temp!=null){
                            temp.parent.change(temp.parent.ch[0].copy());
                            last.ch[2].change(new EXtree2(0,MathTOUCH.SP,0,temp.copy(),last.ch[2].copy()," "));
                            return ex;
                        }
                    }else{
                        ans=this.reMakeTree(last.ch[0]);
                        if(ans!=null){
                            var temp=last.ch[0].getLastSpacedTerm();
                            if(temp!=null){
                                temp.parent.change(temp.parent.ch[0].copy());
                                last.ch[2].change(new EXtree2(0,MathTOUCH.SP,0,last.ch[1].copy(),last.ch[2].copy()," "));
                                last.add(1,temp.copy());
                                return ex;
                            }
                        }
                    }
                }else if(last.type===MathTOUCH.OP3T){
                    var ans=this.reMakeTree(last.ch[0]);
                    if(ans!=null){
                        var temp=last.ch[0].getLastSpacedTerm();
                        if(temp!=null){
                            temp.parent.change(temp.parent.ch[0].copy());
                            last.ch[2].change(new EXtree2(0,MathTOUCH.SP,0,temp.copy(),last.ch[2].copy()," "));
                            return ex;
                        }
                    }else{
                        ans=this.reMakeTree(last.ch[1]);
                        if(ans!=null){
                            var temp=last.ch[1].getLastSpacedTerm();
                            if(temp!=null){
                                temp.parent.change(temp.parent.ch[0]);
                                var temp2=last.ch[1].copy();
                                last.change(new EXtree2(0,MathTOUCH.SP,0,temp2,last.copy()," "));
                                return ex;
                            }
                        }
                    }
                }
                if(last==ex){return null;}
                if(last.parent==null){return null;}
                last=last.parent;
            }
        }
};

MathTOUCH.mathcanvas.prototype.reMakeTree2 = function(ex){
        var nnum=ex.inputWord.length;
        if(ex.type===MathTOUCH.NUM && nnum>1){
            var nstr=ex.inputWord;
            var outWord1,outWord2,outWord3;
            if(nnum==2){
                if(ex.val.charAt(0)=='b'){
                    outWord1="b"+nstr.substring(0,1);
                    outWord2="b"+nstr.substring(1,nnum);
                }else{
                    outWord1=nstr.substring(0,1);outWord2=nstr.substring(1,nnum);
                }
                ex.change(new EXtree2(0,MathTOUCH.SP,0,new NumberEXT(2,outWord1),new NumberEXT(ex.state,outWord2)," "));
            }else{
                if(ex.val.charAt(0)=='b'){
                    outWord1="b"+nstr.substring(0,1);
                    outWord2="b"+nstr.substring(1,2);
                    outWord3="b"+nstr.substring(2,nnum);
                }else{
                    outWord1=nstr.substring(0,1);
                    outWord2=nstr.substring(1,2);
                    outWord3=nstr.substring(2,nnum);
                }
                ex.change((new NumberEXT(2,outWord1).spacedOn(new NumberEXT(2,outWord2))).spacedOn(new NumberEXT(ex.state,outWord3)));
            }
            return ex;
        }else if(ex.type===MathTOUCH.XTML || ex.type===MathTOUCH.SYM || ex.type===MathTOUCH.VAR){
            DIC.setDicE(0);
            var reststr;
            var sub=new MathTOUCH.middleEX(100);
            var leftparent=ex.theLeftMostTop();
            reststr=leftparent.getInputWord();
            sub.extransNext(reststr);
            if(sub.outTerm[0]==ex.val){
                sub.toknum=0;
                sub.extransPart(ex.getInputWord().length-1,reststr);
            }
            var ans=sub.makeEXtree(0,sub.toknum);
            if(ans==null){
                this.setHelpMessage("interpretingError1");
                return null;
            }else{
                leftparent.change(ans);
                return ex;
            }
        }else if(ex.type===MathTOUCH.OP1A || (ex.BraType()==2)){
            return this.reMakeTree2(ex.ch[0]);
        }else if(ex.type===MathTOUCH.OP1P||ex.type===MathTOUCH.OP2P||ex.type===MathTOUCH.OP3P||ex.BraType()==1){
            return this.reMakeTree2(ex.ch[ex.cnum-1]);
        }else if(ex.type===MathTOUCH.OP2C){
            var arg=this.reMakeTree2(ex.ch[0]);
            if(arg!=null) return arg;
            else return this.reMakeTree2(ex.ch[1]);
        }
        else if(ex.type===MathTOUCH.OP3T){
            var arg=this.reMakeTree2(ex.ch[1]);
            if(arg!=null) return arg;
            else return this.reMakeTree2(ex.ch[2]);
        }
        else return null;
};

MathTOUCH.mathcanvas.prototype.nextSim = function(){
    if(this.getProcessEXtree().key===this.getScpKey() && this.getProcessEXtree().order===KTB.getOrderOfLog(this.getScpKey(),this.getScpOrder())){
        this.setScpOrder(this.getScpOrder()+1);
        if(this.getScpOrder()>=KTB.keyLengthOf(this.getScpKey())){
            this.setScpOrder(0);
        }
    }
    this.getProcessEXtree().val=KTB.getLogWord(this.getScpKey(),this.getScpOrder());
    this.getProcessEXtree().order=KTB.getOrderOfLog(this.getScpKey(),this.getScpOrder());
    this.getProcessEXtree().setOpeBackColor(5);
};

MathTOUCH.mathcanvas.prototype.prevSim = function(){
        if(this.getProcessEXtree().key===this.getScpKey() && this.getProcessEXtree().order==KTB.getOrderOfLog(this.getScpKey(),this.getScpOrder())){
            this.setScpOrder(this.getScpOrder()-1);
            if(this.getScpOrder()<0){
                this.setScpOrder(KTB.keyLengthOf(this.getScpKey())-1);
            }
        }
        this.getProcessEXtree().val=KTB.getLogWord(this.getScpKey(),this.getScpOrder());
        this.getProcessEXtree().order=KTB.getOrderOfLog(this.getScpKey(),this.getScpOrder());
        this.getProcessEXtree().setOpeBackColor(5);
};

MathTOUCH.mathcanvas.prototype.selectSim = function(ord){
        if(this.getProcessEXtree().key===this.getScpKey()&&this.getProcessEXtree().order==KTB.getOrderOfLog(this.getScpKey(),this.getScpOrder())){
            this.setScpOrder(ord);
            if(this.getScpOrder()>=KTB.keyLengthOf(this.getScpKey())){
                this.setScpOrder(0);
            }
        }
        this.getProcessEXtree().val=KTB.getLogWord(this.getScpKey(),this.getScpOrder());
        this.getProcessEXtree().order=KTB.getOrderOfLog(this.getScpKey(),this.getScpOrder());
        this.getProcessEXtree().setOpeBackColor(5);
};

MathTOUCH.mathcanvas.prototype.EditRep = function(cex,crep){
        if(cex==null){
            return null;
        }
        if(crep==null){
            return null;
        }
        var ans=null;
        if(cex.cnum>0){
            if(cex.key==MathTOUCH.SP&&cex.order==2&&cex.ch[0]!=null&&cex.ch[0].key==MathTOUCH.SP&&cex.ch[0].order==3){
                if(cex.ch[0].ch[0]!=null) ans=this.EditRep(cex.ch[0].ch[0],crep.getTerm1(0));
                if(ans==null&&cex.ch[0].ch[1]!=null) ans=this.EditRep(cex.ch[0].ch[1],crep.getTerm1(1));
                if(ans==null&&cex.ch[1]!=null) ans=this.EditRep(cex.ch[1],crep.getTerm1(2));
            }else if(cex.key==OTB.theNumberOf("left^")||cex.key==OTB.theNumberOf("left_")){
                if(cex.ch[1]!=null) ans=this.EditRep(cex.ch[1],crep.getTerm1(0));
                if(ans==null&&cex.ch[0]!=null) ans=this.EditRep(cex.ch[0],crep.getTerm1(1));
            }else if((cex.key==OTB.theNumberOf("backslash")||cex.key==OTB.theNumberOf("\\"))&&cex.order==1){
                if(cex.ch[1]!=null) ans=this.EditRep( cex.ch[1],crep.getTerm1(0));
                if(ans==null&&cex.ch[0]!=null) ans=this.EditRep( cex.ch[0],crep.getTerm1(1));
            }else if((cex.key==OTB.theNumberOf("sin-1")||cex.key==OTB.theNumberOf("cos-1")||cex.key==OTB.theNumberOf("tan-1"))&&cex.order==0){
                ans=this.EditRep(cex.ch[0],crep.getTerm1(1));
            }else if(cex.type===MathTOUCH.MAT){
                for(var i=0;i<cex.rownum;i++){
                    for(var j=0;j<cex.colnum;j++){
                        if(cex.ch[i*cex.colnum+j]!=null) ans=this.EditRep(cex.ch[i*cex.colnum+j],crep.getTerm2(i, j));
                        if(ans!=null){i=cex.rownum; break;}
                    }
                }
            }
            else{
                for(var i=0; i<cex.cnum; i++){
                    if(cex.ch[i]!=null){
                        ans=this.EditRep(cex.ch[i],crep.getTerm1(i));
                    }
                    if(ans!=null){
                        break;
                    }
                }
            }
        }else if(cex.type==MathTOUCH.EDIT){
             ans=crep;
        }else{
            ans=null;
        }
        return ans;
};

MathTOUCH.mathcanvas.prototype.getRepWithColor = function(crep,obc){
    if(crep==null) return null;
    var ans=null;
    if(crep.getOpeBackColorNum()==obc||crep.getBackColorNum()==obc||crep.getBaseColorNum()==obc){
        ans=crep;
    }else if(crep.getTerm()!=null){
        if(crep.getType()!=6){
            for(var i=0;i<crep.getTerm().length;i++){
                ans=this.getRepWithColor(crep.getTerm1(i),obc);
                if(ans!=null){
                    break;
                }
            }
        }else{
            for(var i=0;i<crep.getRow();i++){
                for(var j=0;j<crep.getCol();j++){
                    ans=this.getRepWithColor(crep.getTerm2(i, j),obc);
                    if(ans!=null){
                        return ans;
                    }
                }
            }
        }
    }else{
        ans=null;
    }
    return ans;
};

MathTOUCH.mathcanvas.prototype.result_select = function(){
        var ua = window.navigator.userAgent.toLowerCase();
        var ver = window.navigator.appVersion.toLowerCase();
        var name = 'unknown';
        var outputarea=document.getElementById("dammy");
        var comment=document.getElementById("result_comment");
        var output=document.getElementById("output")
        outputarea.textContent=output.textContent;
        comment.classList.add("comment");
        if (ua.indexOf("msie") != -1){
            if (ver.indexOf("msie 6.") != -1){
                name = 'ie6';
            }else if (ver.indexOf("msie 7.") != -1){
                name = 'ie7';
            }else if (ver.indexOf("msie 8.") != -1){
                name = 'ie8';
            }else if (ver.indexOf("msie 9.") != -1){
                name = 'ie9';
            }else if (ver.indexOf("msie 10.") != -1){
                name = 'ie10';
            }else{
                name = 'ie';
            }
            document.execCommand('copy');
        }else if(ua.indexOf('trident/7') != -1){
            name = 'ie11';
            document.execCommand('copy');
        }else if (ua.indexOf('chrome') != -1){
            name = 'chrome';
            outputarea.select();
            document.execCommand('copy');
        }else if (ua.indexOf('safari') != -1){
            name = 'safari';
            var range = document.createRange();
            range.selectNodeContents(output);
            window.getSelection().addRange(range);
        }else if (ua.indexOf('opera') != -1){
            name = 'opera';
            outputarea.select();
            document.execCommand('copy');
        }else if (ua.indexOf('firefox') != -1){
            name = 'firefox';
            outputarea.select();
            document.execCommand('copy');
        }
};

MathTOUCH.mathcanvas.prototype.html_escape = function(str){
                            str = str.replace(/&/g,"&amp;");
                            str = str.replace(/</g,"&lt;");
                            str = str.replace(/>/g,"&gt;");
                            str = str.replace(/\"/g,"&quot;");
                            return str;
                            
                        };

       

MathTOUCH.mathcanvas.prototype.getMTResult = function(){
                            this.setOutputformName("PNG");
                            TeXresult=this.tree.TeXof(this.getResult(),true);
                            this.getResultultWebURL(TeXresult);
}
                                 
MathTOUCH.mathcanvas.prototype.reset_select = function(){
                            this.getOutputArea().value = "";
};

