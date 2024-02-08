var MathTOUCH = function(){};

MathTOUCH.initializeBase = function(derive, base, baseArgs) {
    base.apply(derive, baseArgs);
    for(var prop in base.prototype) {
        var proto = derive.constructor.prototype;
        if(!proto[prop]) {
            proto[prop] = base.prototype[prop];
        }
    }
};


MathTOUCH.Device;
MathTOUCH.Apptype;
MathTOUCH.lang;

MathTOUCH.Device_PC = 0;
MathTOUCH.Device_SP = 1;
MathTOUCH.Device_TB = 2;

MathTOUCH.EMP = 0;
MathTOUCH.NUM = 1;
MathTOUCH.VAR = 2;
MathTOUCH.SYM = 3;
MathTOUCH.OP1P = 4;
MathTOUCH.OP1A = 5;
MathTOUCH.OP1B = 6;
MathTOUCH.OP2C = 7;
MathTOUCH.OP2P = 8;
MathTOUCH.OP3P = 9;
MathTOUCH.MAT = 10;
MathTOUCH.OP3T = 11;
MathTOUCH.TXT = 12;
MathTOUCH.XTML = 100;
MathTOUCH.EDIT = -1;


MathTOUCH.CTRL_C=3;
MathTOUCH.K_BS=8;
MathTOUCH.K_TAB=9;
MathTOUCH.CTRL_I=9;
MathTOUCH.CTRL_J=10;
MathTOUCH.CTRL_K=11;
MathTOUCH.K_ENTER=13;
MathTOUCH.K_SHIFT=16;
MathTOUCH.K_CONTROL=17;
MathTOUCH.K_ALT=18;
MathTOUCH.CTRL_L=17;
MathTOUCH.CTRL_V=22;
MathTOUCH.CTRL_X=24;
MathTOUCH.CTRL_Y=25;
MathTOUCH.CTRL_Z=26;
MathTOUCH.K_ESCAPE=27;
MathTOUCH.K_SPACE=32;
MathTOUCH.K_Q=39;
MathTOUCH.K_I=73;
MathTOUCH.K_J=74;
MathTOUCH.K_K=75;
MathTOUCH.K_L=76;
MathTOUCH.K_LEFT=37+128;
MathTOUCH.K_UP=38+128;
MathTOUCH.K_RIGHT=39+128;
MathTOUCH.K_DOWN=40+128;
MathTOUCH.K_DELETE=46+128;

MathTOUCH.Dfix = 0;
MathTOUCH.DLast = 1;
MathTOUCH.D2P1 = 2;
MathTOUCH.D3P1 = 3;
MathTOUCH.D3P2 = 4;
MathTOUCH.Dpre = 5;
MathTOUCH.SP = 0;

MathTOUCH.ctbl = ['black','black','red','blue','green','yellow','gray','cyan','rgba(224,224,224,1)'];

MathTOUCH.EXTForm = 0;
MathTOUCH.TexForm = 1;
MathTOUCH.MMLForm = 2;
MathTOUCH.EPSForm = 3;
MathTOUCH.PNGForm = 4;
MathTOUCH.JPGForm = 5;
MathTOUCH.MaximaForm = 6;
MathTOUCH.MapleForm = 7;
MathTOUCH.MathematicaForm = 8;
MathTOUCH.WordForm = 9;
MathTOUCH.Speach = 11;
MathTOUCH.TestForm = 10;

MathTOUCH.MTSingle =false;
MathTOUCH.MTWeb = false;
MathTOUCH.STACK = false;
MathTOUCH.DW = false;
MathTOUCH.MTeditor = false;
MathTOUCH.MC2 = false;
MathTOUCH.mathGraph = false;
MathTOUCH.mathReader = false;

MathTOUCH.OPEtype=[
                   MathTOUCH.OP2C,
                   MathTOUCH.OP1A,
                   MathTOUCH.OP1A,
                   MathTOUCH.OP1P,
                   MathTOUCH.OP1P,
                   MathTOUCH.OP1A,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP1A,
                   MathTOUCH.OP1B,
                   MathTOUCH.OP1B,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP1A,
                   MathTOUCH.OP1P,
                   MathTOUCH.OP1B,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP1B,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP1P,
                   MathTOUCH.OP1B,
                   MathTOUCH.OP2C,
                   MathTOUCH.OP1B,
                   MathTOUCH.OP1P
                   ];

MathTOUCH.tName=["(0)","(N)","(V)","(S)","(P)","(A)","(B)","(C)","(Q)","(R)","(M)","(T)","(txt)","(X)","(edit)"];

MathTOUCH.SITEURL;
MathTOUCH.OUTPUTIMGURL;
MathTOUCH.mtKeyBoard_Setup = false;

MathTOUCH.init = function(apptype, lang, mt_divid, oid){
    let userAgent = window.navigator.userAgent.toLowerCase();
    if(userAgent.indexOf('iphone') != -1) {
        MathTOUCH.Device = MathTOUCH.Device_SP;
    }else if(userAgent.indexOf('ipad') != -1) {
        MathTOUCH.Device = MathTOUCH.Device_TB;
    }else if(userAgent.indexOf('android') != -1) {
        if(userAgent.indexOf('mobile') != -1) {
            MathTOUCH.Device = MathTOUCH.Device_SP;
        } else {
            MathTOUCH.Device = MathTOUCH.Device_TB;
        }
    }else{
        MathTOUCH.Device = MathTOUCH.Device_PC;
    }
    MathTOUCH.lang = lang;
    MathTOUCH.Apptype = apptype;
    
    if(!MathTOUCH.mtKeyBoard_Setup){
        MathTOUCH.mtKeyBoard_preinit();
        MathTOUCH.mtKeyBoard_Setup = true;
    }
    
    if(MathTOUCH.Apptype=="mathEditor"){
        MathTOUCH.MathEditor_init(mt_divid);
    }else if(MathTOUCH.Apptype=="mathgraph"){
        MathTOUCH.MathGraph_init();
    }else if(MathTOUCH.Apptype=="mathreader"){
        MathTOUCH.MathReader_init();
    }
    
};
