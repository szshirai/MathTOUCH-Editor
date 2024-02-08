MathTOUCH.mtMenu = function(){
}

MathTOUCH.mtMenu.prototype.init = function(menu,num,mobj){
    var i=num;
    for(var m = 0; m <MathTOUCH.EDIT_len; m++) {
        MathTOUCH.EDIT_a[i][m].onclick = (function(m){
                                       return function(){
                                          if(MathTOUCH.EDIT_li[i][m].option=== "\'Shift_Enter\'" ){
                                                mobj.allComplete();
                                          }else if(MathTOUCH.EDIT_li[i][m].option==="\'Shift_BS\'"){
                                                mobj.allClearEQ();
                                          }else{
                                            mobj.keyProcess(MathTOUCH.EDIT_li[i][m].value);
                                          }
                                       }
                                       })(m);
    }
    

    for(var m = 0; m <MathTOUCH.OUTPUT_len; m++) {
        MathTOUCH.OUTPUT_a[i][m].onclick = (function(m){
                                        return function(){
                                            mobj.checkForm(i,MathTOUCH.OUTPUT_li[i][m].option);
                                            mobj.setOutputForm(m+1);
                                        }
                                        })(m);
    }


    
    for(var m = 0; m <MathTOUCH.smenuLen0; m++) {
        MathTOUCH.PALET_suba0[i][m].onclick = (function(m){
                                      return function(){
                                    mobj.insertKey(MathTOUCH.smenuData0[MathTOUCH.smenuKeys0[m]].key,MathTOUCH.smenuData0[MathTOUCH.smenuKeys0[m]].keycode);
                                        mobj.getCanvasID().focus();
                                      }
                                      })(m);
    }
    
    for(var m = 0; m <MathTOUCH.smenuLen1; m++) {
        MathTOUCH.PALET_suba1[i][m].onclick = (function(m){
                                               return function(){
                                               mobj.insertKey(MathTOUCH.smenuData1[MathTOUCH.smenuKeys1[m]].key,MathTOUCH.smenuData1[MathTOUCH.smenuKeys1[m]].keycode);
                                                    mobj.getCanvasID().focus();
                                               }
                                               })(m);
    }
    
    for(var m = 0; m <MathTOUCH.smenuLen2; m++) {
        MathTOUCH.PALET_suba2[i][m].onclick = (function(m){
                                               return function(){
                                               mobj.insertKey(MathTOUCH.smenuData2[MathTOUCH.smenuKeys2[m]].key,MathTOUCH.smenuData2[MathTOUCH.smenuKeys2[m]].keycode);
                                               mobj.getCanvasID().focus();
                                               }
                                               })(m);
    }
    
    for(var m = 0; m <MathTOUCH.smenuLen3; m++) {
        MathTOUCH.PALET_suba3[i][m].onclick = (function(m){
                                               return function(){
                                               mobj.insertKey(MathTOUCH.smenuData3[MathTOUCH.smenuKeys3[m]].key,MathTOUCH.smenuData3[MathTOUCH.smenuKeys3[m]].keycode);
                                               mobj.getCanvasID().focus();
                                               }
                                               })(m);
    }
    
    for(var m = 0; m <MathTOUCH.smenuLen4; m++) {
        MathTOUCH.PALET_suba4[i][m].onclick = (function(m){
                                               return function(){
                                               mobj.insertKey(MathTOUCH.smenuData4[MathTOUCH.smenuKeys4[m]].key,MathTOUCH.smenuData4[MathTOUCH.smenuKeys4[m]].keycode);
                                               mobj.getCanvasID().focus();
                                               }
                                               })(m);
    }
    
    for(var m = 0; m <MathTOUCH.smenuLen5; m++) {
        MathTOUCH.PALET_suba5[i][m].onclick = (function(m){
                                               return function(){
                                               mobj.insertKey(MathTOUCH.smenuData5[MathTOUCH.smenuKeys5[m]].key,MathTOUCH.smenuData5[MathTOUCH.smenuKeys5[m]].keycode);
                                               mobj.getCanvasID().focus();
                                               }
                                               })(m);
    }
    
    for(var m = 0; m <MathTOUCH.smenuLen6; m++) {
        MathTOUCH.PALET_suba6[i][m].onclick = (function(m){
                                               return function(){
                                               mobj.insertKey(MathTOUCH.smenuData6[MathTOUCH.smenuKeys6[m]].key,MathTOUCH.smenuData6[MathTOUCH.smenuKeys6[m]].keycode);
                                               mobj.getCanvasID().focus();
                                               }
                                               })(m);
    }
    
    for(var m = 0; m <MathTOUCH.smenuLen7; m++) {
        MathTOUCH.PALET_suba7[i][m].onclick = (function(m){
                                               return function(){
                                               mobj.insertKey(MathTOUCH.smenuData7[MathTOUCH.smenuKeys7[m]].key,MathTOUCH.smenuData7[MathTOUCH.smenuKeys7[m]].keycode);
                                               mobj.getCanvasID().focus();
                                               }
                                               })(m);
    }
    
    for(var m = 0; m <MathTOUCH.smenuLen8; m++) {
        MathTOUCH.PALET_suba8[i][m].onclick = (function(m){
                                               return function(){
                                               mobj.insertKey(MathTOUCH.smenuData8[MathTOUCH.smenuKeys8[m]].key,MathTOUCH.smenuData8[MathTOUCH.smenuKeys8[m]].keycode);
                                               mobj.getCanvasID().focus();
                                               }
                                               })(m);
    }
    
    for(var m = 0; m <MathTOUCH.smenuLen9; m++) {
        MathTOUCH.PALET_suba9[i][m].onclick = (function(m){
                                               return function(){
                                               mobj.insertKey(MathTOUCH.smenuData9[MathTOUCH.smenuKeys9[m]].key,MathTOUCH.smenuData9[MathTOUCH.smenuKeys9[m]].keycode);
                                               mobj.getCanvasID().focus();
                                               }
                                               })(m);
    }
    
    for(var m = 0; m <MathTOUCH.smenuLen10; m++) {
        MathTOUCH.PALET_suba10[i][m].onclick = (function(m){
                                               return function(){
                                               mobj.insertKey(MathTOUCH.smenuData10[MathTOUCH.smenuKeys10[m]].key,MathTOUCH.smenuData10[MathTOUCH.smenuKeys10[m]].keycode);
                                               mobj.getCanvasID().focus();
                                               }
                                               })(m);
    }
    
    for(var m = 0; m <MathTOUCH.smenuLen11; m++) {
        MathTOUCH.PALET_suba11[i][m].onclick = (function(m){
                                                return function(){
                                                mobj.insertKey(MathTOUCH.smenuData11[MathTOUCH.smenuKeys11[m]].key,MathTOUCH.smenuData11[MathTOUCH.smenuKeys11[m]].keycode);
                                                mobj.getCanvasID().focus();
                                                }
                                                })(m);
    }
    
    for(var m = 0; m <MathTOUCH.VIEW_len; m++) {
        MathTOUCH.VIEW_a[i][m].onclick = (function(m){
                                     return function(){
                                      mobj.fontChange(m);
                                     }
                                     })(m);
    }


    for(var m = 0; m <MathTOUCH.HIS_len; m++) {
        MathTOUCH.HIS_a[i][m].onclick = (function(m){
                                          return function(){
                                                if(MathTOUCH.HIS_li[i][m].option==="clear"){
                                                    if(window.confirm('学習状態をゼロにしますか？')){
                                                        NES.clearTable();
                                                    }else{
                                                        window.alert('キャンセルされました。');
                                                    }
                                                }else if(MathTOUCH.HIS_li[i][m].option==="reset"){
                                                    if(window.confirm('学習状態を初期化しますか？')){
                                                        NES.resetTable();
                                                    }else{
                                                        window.alert('キャンセルされました。');
                                                    }
                                                }
                                            }
                                          })(m);
    }

    
    for(var m = 0; m <MathTOUCH.HELP_len; m++) {
        MathTOUCH.HELP_a[i][m].onclick = (function(m){
                                      return function(){
                                          if(MathTOUCH.HELP_li[i][m].option==="help"){
                                            var helpurl="./js/mteditor/plugins/mathtouch/help/jp/index.html";
                                            window.open(helpurl, 'mywindow2', 'width=400, height=300, menubar=no, toolbar=no, scrollbars=yes');
                                          }else if(MathTOUCH.HELP_li[i][m].option==="reload"){
                                            if(window.confirm('ページをリロードしますか？')){
                                                location.reload();
                                            }else{
                                                window.alert('キャンセルされました');
                                            }
                                          }
                                      }
                                      })(m);
    }
    
    if(MathTOUCH.uitype=="mteditor"){
        MathTOUCH.INSERT_a[i][0].onclick = (function(){
                                        return function(){
                                                    mobj.getMTResult();
                                                    }
                                                    })();
    }
    

    $(document).on('click', function(e){
                   var target  = e.target.nextElementSibling;
                   if(target!=null){
                        var target2  = target.parentNode.id;
                        var areaCheck = target2.split("_");
                   
                        if(areaCheck[0]==="menu"){
                            click = target.id.split("_");
                            var u_num=click[0];
                            var m_num=click[1];
                            if(MathTOUCH.MENUFLAG == true){
                                if(MathTOUCH.DROPMENU_UL[u_num][m_num].className === "selected"){
                                    MathTOUCH.DROPMENU_UL[u_num][m_num].className = "noselected";
                                    MathTOUCH.MENUFLAG = false;
                                }else{
                                    for(var i=0;i<MathTOUCH.AREA_NUM;i++){
                                        for(var j=0;j<6;j++){
                                            MathTOUCH.DROPMENU_UL[i][j].className = "noselected";
                                        }
                                    }
                                    MathTOUCH.DROPMENU_UL[u_num][m_num].className = "selected";
                                }
                            }else{
                                MathTOUCH.DROPMENU_UL[u_num][m_num].className = "selected";
                                MathTOUCH.MENUFLAG = true;
                            }
                        }else{
                            for(var i=0;i<MathTOUCH.AREA_NUM;i++){
                                for(var j=0;j<6;j++){
                                    MathTOUCH.DROPMENU_UL[i][j].className = "noselected";
                                }
                            }
                            MathTOUCH.MENUFLAG = false;
                        }
                   }else{
                        if(MathTOUCH.MENUFLAG = true){
                            for(var i=0;i<MathTOUCH.AREA_NUM;i++){
                                for(var j=0;j<6;j++){
                                    MathTOUCH.DROPMENU_UL[i][j].className = "noselected";
                                }
                            }
                            MathTOUCH.MENUFLAG = false;
                        }
                   
                   }
                   e.stopImmediatePropagation();
                   return false;
                   
                   });
    
   $(".mt_dropmenu").on('mouseover', function(e){
                        var nexttarget  = e.target.nextElementSibling;
                        var u_num2 = null;
                        var m_num2 = null;
                        var n_num2 = null;
                        if( nexttarget == null ){
                            return;
                        }else if( nexttarget.id.indexOf('-') != -1 ){
                            var click = nexttarget.id.split("-");
                            u_num2=click[0];
                            m_num2=click[1];
                            n_num2=click[2];
                        }else if ( nexttarget.id.indexOf('_') != -1 ) {
                            var click = nexttarget.id.split("_");
                            u_num2=click[0];
                            m_num2=click[1];
                        }
                        
                        if(MathTOUCH.MENUFLAG === true){
                            if(u_num2 === null || m_num2===null){
                                return;
                            }else if(u_num2 === "list"){
                                if( MathTOUCH.PALET_subul[m_num2][n_num2].className === "noselected" ){
                                    for(var i=0;i<MathTOUCH.AREA_NUM;i++){
                                        for(var j=0;j<MathTOUCH.PALET_len;j++){
                                            MathTOUCH.PALET_subul[i][j].className = "noselected";
                                        }
                                    }
                                    MathTOUCH.PALET_subul[m_num2][n_num2].className = "selected";
                                }
                        
                            }else{
                                if( MathTOUCH.DROPMENU_UL[u_num2][m_num2].className === "noselected"){
                                    for(var i=0;i<MathTOUCH.AREA_NUM;i++){
                                        for(var j=0;j<MathTOUCH.DROPMENU_len;j++){
                                            MathTOUCH.DROPMENU_UL[i][j].className = "noselected";
                                        }
                                    }
                                    MathTOUCH.DROPMENU_UL[u_num2][m_num2].className = "selected";
                        
                                }
                        
                            }
                        }
                        
                   });
    
    
};
