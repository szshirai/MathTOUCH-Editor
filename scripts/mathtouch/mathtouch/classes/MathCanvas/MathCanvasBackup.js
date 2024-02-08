var McBAK = function(){};

McBAK.MathCanvasBackup =function(){
    var _TransMode=0;
    var _subMode=0;
    var _Mcol=-1;
    var _LogMode=true;
    var _scpKey=0;
    var _scpOrder=0;
    var _currentEXtree=null;
    var _processEXtree=null;
    var _logOrder=0;
    var _divMode=0;
    var _res=null;
    var _OUTPUT=1;
    var _cursorText="";
    this.getCursorText=function(){return _cursorText;}
    this.setCursorText=function(str){_cursorText=str;}
    var _prediction=null;
    this.getPrediction=function(){return _prediction;}
    this.setPrediction=function(v){_prediction=v;}
    var _targetMode=0;
    this.getTargetMode=function(){return _targetMode;}
    this.setTargetMode=function(v){_targetMode=v;}
    var _candidates_flag=false;
    this.getCandidates_flag=function(){return _candidates_flag;}
    this.setCandidates_flag=function(v){_candidates_flag=v;}
    
    this.getTransMode = function(){
        return _TransMode;
    };
    
    this.setTransMode = function(tm){
        _TransMode = tm;
    };
    
    this.getSubMode = function(){
        return _subMode;
    };
    
    this.setSubMode = function(sm){
        _subMode = sm;
    };
    
    this.getMcol = function(){
        return _Mcol;
    };
    
    this.setMcol = function(mc){
        _Mcol = mc;
    };

    this.getLogMode = function(){
        return _LogMode;
    };
    
    this.setLogMode = function(lm){
        _LogMode = lm;
    };
    
    this.getScpKey = function(){
        return _scpKey;
    };
    
    this.setScpKey = function(sk){
        _scpKey = sk;
    };
    
    this.getScpOrder = function(){
        return _scpOrder;
    };
    
    this.setScpOrder = function(so){
        _scpOrder = so;
    };
    
    this.getCurrentEXtree = function(){
        return _currentEXtree;
    };
    
    this.setCurrentEXtree = function(ce){
        _currentEXtree = ce;
    };
    
    this.getProcessEXtree = function(){
        return _processEXtree;
    };
    
    this.setProcessEXtree = function(pe){
        _processEXtree = pe;
    };
    
    this.checkNullProcessEXtree = function(){
        return (_processEXtree != null);
    };
    
    this.checkNull = function(i){
        return (i == null);
    };
    
    this.getLogOrder = function(){
        return _logOrder;
    };
    
    this.setLogOrder = function(lo){
        _logOrder = lo;
    };
    
    this.getDivMode = function(){
        return _divMode;
    };
    
    this.setDivMode = function(dm){
        _divMode = dm;
    };
    
    this.getResult = function(){
        return _res;
    };
    
    this.setResult = function(rs){
        _res = rs;
    };
    
    this.getOutput = function(){
        return _OUTPUT;
    };
    
    this.setOutput = function(op){
        _OUTPUT = op;
    };

    this.checkNull = function(o){
        return (o === null);
    };
    
};

MathTOUCH.MathCanvas_UndoStack = function() {
    this.stackMax=20;
    this.__a = new Array();
}

MathTOUCH.MathCanvas_UndoStack.prototype.push = function(o) {
    this.__a.push(o);
    if(this.__a.length>this.stackMax) this.__a.shift();
}

MathTOUCH.MathCanvas_UndoStack.prototype.pop = function() {
    if( this.__a.length > 0 ) {
        return this.__a.pop();
    }
    return null;
}

MathTOUCH.MathCanvas_UndoStack.prototype.size = function() {
    return this.__a.length;
}

MathTOUCH.MathCanvas_undoStack=null;
MathTOUCH.MathCanvas_redoStack=null;
