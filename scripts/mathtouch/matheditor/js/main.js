/*editor*/

MathTOUCH.MTEditor_num = 0;
MathTOUCH.MTEditor_focusID;
MathTOUCH.MTEditor_mtCheckFlag = false;
MathTOUCH.MTEditor_AREA_NUM = 0;

MathTOUCH.MTEditor_AREA = [];
MathTOUCH.MTEditor_MENU0 = [];
MathTOUCH.MTEditor_MENU1 = [];
MathTOUCH.MTEditor_MENU2 = [];
MathTOUCH.MTEditor_MENU3 = [];
MathTOUCH.MTEditor_editArea = [];
MathTOUCH.MTEditor_editAreap = [];

MathTOUCH.MTEditor_showhtmlp = [];
MathTOUCH.MTEditor_showhtmli = [];
MathTOUCH.MTEditor_showhtmllabel = [];

MathTOUCH.MTEditor_s_h = [];
MathTOUCH.MTEditor_s_f = [];
MathTOUCH.MTEditor_s_fs = [];
MathTOUCH.MTEditor_s_cc = [];
MathTOUCH.MTEditor_s_bc = [];

MathTOUCH.MTEditor_s_hdiv = [];
MathTOUCH.MTEditor_s_fdiv  = [];
MathTOUCH.MTEditor_s_fsdiv  = [];
MathTOUCH.MTEditor_s_ccdiv  = [];
MathTOUCH.MTEditor_s_bcdiv  = [];

MathTOUCH.MTEditor_o_h = [];
MathTOUCH.MTEditor_o_f = [];
MathTOUCH.MTEditor_o_fs = [];
MathTOUCH.MTEditor_o_cc = [];
MathTOUCH.MTEditor_o_bc = [];

MathTOUCH.MTEditor_o_h_text = ["Normal", "heading", "Sub-heading 1", "Sub-heading 2", "Sub-heading 4", "Sub-heading 5", "Sub-heading 6", "Preformatted"];
MathTOUCH.MTEditor_o_h_value = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "pre"];
MathTOUCH.MTEditor_o_f_text = ["Helvetica", "Hiragino Sans", "Arial", "Arial Black", "Times New Roman", "YuMincho", "Hiragino Mincho"];
MathTOUCH.MTEditor_o_fs_text = ["Very small", "A bit small", "Normal", "Medium-large", "Big", "Very big", "Maximum"];
MathTOUCH.MTEditor_o_fs_value2 = [10, 13, 16, 18, 24, 32, 48];
MathTOUCH.MTEditor_o_fs_value = ["1", "2", "3", "4", "5", "6", "7"];
MathTOUCH.MTEditor_o_cc_text = ["Black", "Red", "Blue", "Green", "Yellow", "White"];
MathTOUCH.MTEditor_o_cc_value = ["black", "red", "blue", "green", "yellow", "white"];
MathTOUCH.MTEditor_o_bc_text = ["background", "Red", "Blue", "Yellow", "Green", "Aqua", "Lime", "Fuchsia", "Black", "None"];
MathTOUCH.MTEditor_o_bc_value = ["white", "red", "blue", "yellow", "green", "aqua", "lime", "fuchsia", "black", "white"];

MathTOUCH.MTEditor_i_c = [];
MathTOUCH.MTEditor_i_p = [];
MathTOUCH.MTEditor_i_u = [];
MathTOUCH.MTEditor_i_r = [];
MathTOUCH.MTEditor_i_rf = [];
MathTOUCH.MTEditor_i_b = [];
MathTOUCH.MTEditor_i_it = [];
MathTOUCH.MTEditor_i_ul = [];
MathTOUCH.MTEditor_i_la = [];
MathTOUCH.MTEditor_i_ra = [];
MathTOUCH.MTEditor_i_ca = [];
MathTOUCH.MTEditor_i_nl = [];
MathTOUCH.MTEditor_i_dl = [];
MathTOUCH.MTEditor_i_q = [];
MathTOUCH.MTEditor_i_di = [];
MathTOUCH.MTEditor_i_ai = [];
MathTOUCH.MTEditor_i_hl = [];
MathTOUCH.MTEditor_i_uhl = [];
MathTOUCH.MTEditor_i_iimg = [];
MathTOUCH.MTEditor_i_cut = [];
MathTOUCH.MTEditor_i_c = [];
MathTOUCH.MTEditor_i_p = [];
MathTOUCH.MTEditor_initext = [];
MathTOUCH.MTEditor_inip = [];
MathTOUCH.MTEditor_i_mt = [];
MathTOUCH.MTEditor_i_mtg = [];
MathTOUCH.MTEditor_i_code = [];
MathTOUCH.MTEditor_i_code_mode = 0;

MathTOUCH.MTEditor_i_mtidv = [];

MathTOUCH.MTEditor_modallink = [];
MathTOUCH.MTEditor_modalimg = [];

MathTOUCH.MTEditor_DMENU = [];
MathTOUCH.MTEditor_DMENU_LI = [];
MathTOUCH.MTEditor_DMENU_A = [];
MathTOUCH.MTEditor_DMENU_I = [];
MathTOUCH.MTEditor_DMENU_len;

MathTOUCH.MTEditor_DMENU_font_subul;
MathTOUCH.MTEditor_DMENU_font_subli = [];
MathTOUCH.MTEditor_DMENU_font_suba = [];
MathTOUCH.MTEditor_DMENU_font_substr=[];

MathTOUCH.MTEditor_DMENU_fontsize_subul;
MathTOUCH.MTEditor_DMENU_fontsize_subli = [];
MathTOUCH.MTEditor_DMENU_fontsize_suba = [];
MathTOUCH.MTEditor_DMENU_fontsize_substr=[];

MathTOUCH.MTEditor_editid="";
MathTOUCH.MTEditor_xtml;
MathTOUCH.MTEditor_startCursor;
MathTOUCH.MTEditor_endCursor;

MathTOUCH.MTEditor_DMENU_len;
MathTOUCH.MTEditor_DMENU_Keys;
MathTOUCH.MTEditor_DMENU_Data;

MathTOUCH.MTEditor_FONT_len;
MathTOUCH.MTEditor_FONT_Keys;
MathTOUCH.MTEditor_FONT_Data;

MathTOUCH.MTEditor_FONTsize_len;
MathTOUCH.MTEditor_FONTsize_Keys;
MathTOUCH.MTEditor_FONTsize_Data;

MathTOUCH.MTEditor_Fstyle = 24;

MathTOUCH.MTEditor_modal = document.createElement("div");
MathTOUCH.MTEditor_modal.id = "modal";
MathTOUCH.MTEditor_imgMenu = document.createElement("div");
MathTOUCH.MTEditor_imgMenu.id = "imgmenu";
MathTOUCH.MTEditor_imgMenu.className = "imgmenu";

MathTOUCH.MTEditor_modal.appendChild(MathTOUCH.MTEditor_imgMenu);

MathTOUCH.MTEditor_imgMenu_h2 = document.createElement("h2");
MathTOUCH.MTEditor_imgMenu_h2.textContent = "画像の挿入";
 
MathTOUCH.MTEditor_imgMenu_div = document.createElement("div");
MathTOUCH.MTEditor_imgMenu_div.className = "imgmenu_contents";
 
MathTOUCH.MTEditor_imgMenu_h3_url = document.createElement("h3");
MathTOUCH.MTEditor_imgMenu_h3_url.textContent = "画像のURLを入力する";
  

MathTOUCH.MTEditor_imgMenu_h3_preview = document.createElement("h3");
MathTOUCH.MTEditor_imgMenu_h3_preview.textContent = "プレビュー";

MathTOUCH.MTEditor_imgMenu_img_preview = document.createElement("img");
MathTOUCH.MTEditor_imgMenu_img_preview.width = "200";
MathTOUCH.MTEditor_imgMenu_img_preview.id = "mt_previewIMG"
MathTOUCH.MTEditor_imgMenu_img_preview.onsuccess  = function (e){
    MathTOUCH.MTEditor_imgMenu_inputsize_w.value = MathTOUCH.MTEditor_imgMenu_img_preview.naturalWidth;
    MathTOUCH.MTEditor_imgMenu_inputsize_h.value = MathTOUCH.MTEditor_imgMenu_img_preview.naturalHeight;
}

MathTOUCH.MTEditor_imgMenu_img_preview.onerror  = function (e){
    MathTOUCH.MTEditor_imgMenu_img_preview.alt = "";
    MathTOUCH.MTEditor_imgMenu_inputsize_w.value = "";
    MathTOUCH.MTEditor_imgMenu_inputsize_h.value = "";
}

MathTOUCH.MTEditor_imgMenu_inputURL = document.createElement("input");
MathTOUCH.MTEditor_imgMenu_inputURL.id = "imgMenu_url";
MathTOUCH.MTEditor_imgMenu_inputURL.name = "imgMenu_url";
 
MathTOUCH.MTEditor_imgMenu_inputURLBTN = document.createElement("button");
MathTOUCH.MTEditor_imgMenu_inputURLBTN.textContent = "リポジトリを参照する";
MathTOUCH.MTEditor_imgMenu_inputURLBTN.id = "imgMenu_url_BTN";
MathTOUCH.MTEditor_imgMenu_inputURLBTN.onclick = function (e){
}


MathTOUCH.MTEditor_imgMenu_inputURL.addEventListener("input",function(){
    MathTOUCH.MTEditor_imgMenu_img_preview.src = this.value;
    var intervalId = setInterval( function () {
        if ( MathTOUCH.MTEditor_imgMenu_img_preview.complete ) {
            MathTOUCH.MTEditor_imgMenu_inputsize_w.value = MathTOUCH.MTEditor_imgMenu_img_preview.naturalWidth;
            MathTOUCH.MTEditor_imgMenu_inputsize_h.value = MathTOUCH.MTEditor_imgMenu_img_preview.naturalHeight;
            clearInterval( intervalId ) ;
        }
    }, 500 ) ;
  });

MathTOUCH.MTEditor_imgMenu_origin;

MathTOUCH.MTEditor_imgMenu_h3_alt = document.createElement("h3");
MathTOUCH.MTEditor_imgMenu_h3_alt.textContent = "画像の説明";
 
MathTOUCH.MTEditor_imgMenu_inputALT = document.createElement("input");
MathTOUCH.MTEditor_imgMenu_inputALT.id = "imgMenu_alt";
MathTOUCH.MTEditor_imgMenu_inputALT.name = "imgMenu_alt";
 
MathTOUCH.MTEditor_imgMenu_h3_size = document.createElement("h3");
MathTOUCH.MTEditor_imgMenu_h3_size.textContent = "サイズ";

MathTOUCH.MTEditor_imgMenu_labelsize_w = document.createElement("label");
MathTOUCH.MTEditor_imgMenu_labelsize_w.textContent = "幅 "
MathTOUCH.MTEditor_imgMenu_labelsize_w.htmlFor = "imgMenu_w";
 
MathTOUCH.MTEditor_imgMenu_inputsize_w = document.createElement("input");
MathTOUCH.MTEditor_imgMenu_inputsize_w.id = "imgMenu_w";
MathTOUCH.MTEditor_imgMenu_inputsize_w.name = "imgMenu_w";
 
MathTOUCH.MTEditor_imgMenu_labelsize_h = document.createElement("label");
MathTOUCH.MTEditor_imgMenu_labelsize_h.textContent = " × 高さ "
MathTOUCH.MTEditor_imgMenu_labelsize_h.htmlFor = "imgMenu_h";
  
MathTOUCH.MTEditor_imgMenu_inputsize_h = document.createElement("input");
MathTOUCH.MTEditor_imgMenu_inputsize_h.id = "imgMenu_h";
MathTOUCH.MTEditor_imgMenu_inputsize_h.name = "imgMenu_h";

MathTOUCH.MTEditor_imgMenu_inputsize_w.addEventListener("input",function(){
    if(MathTOUCH.MTEditor_imgMenu_inputsize_fix.checked){
        MathTOUCH.MTEditor_imgMenu_inputsize_h.value =  MathTOUCH.MTEditor_imgMenu_inputsize_w.value * (MathTOUCH.MTEditor_imgMenu_img_preview.naturalHeight/MathTOUCH.MTEditor_imgMenu_img_preview.naturalWidth);
    }
});
                                                                                            
MathTOUCH.MTEditor_imgMenu_inputsize_h.addEventListener("input",function(){
            if(MathTOUCH.MTEditor_imgMenu_inputsize_fix.checked){
                MathTOUCH.MTEditor_imgMenu_inputsize_w.value =  MathTOUCH.MTEditor_imgMenu_inputsize_h.value * (MathTOUCH.MTEditor_imgMenu_img_preview.naturalWidth/MathTOUCH.MTEditor_imgMenu_img_preview.naturalHeight);
            }
});

MathTOUCH.MTEditor_imgMenu_inputsize_fix = document.createElement("input");
MathTOUCH.MTEditor_imgMenu_inputsize_fix.type = "checkbox";
MathTOUCH.MTEditor_imgMenu_inputsize_fix.value = 1;
MathTOUCH.MTEditor_imgMenu_inputsize_fix.name = "fix";
MathTOUCH.MTEditor_imgMenu_inputsize_fix.setAttribute('checked','checked');
MathTOUCH.MTEditor_imgMenu_inputsize_fix_label = document.createElement('label')
MathTOUCH.MTEditor_imgMenu_inputsize_fix_label.htmlFor = "fix";
MathTOUCH.MTEditor_imgMenu_inputsize_fix_label.appendChild(document.createTextNode("縦横比を固定"));
 
MathTOUCH.MTEditor_imgMenu_insertdiv = document.createElement("div");
MathTOUCH.MTEditor_imgMenu_insertdiv.id = "imgMenu_insertButtonDIV";
 
MathTOUCH.MTEditor_imgMenu_insertBTN = document.createElement("input");
MathTOUCH.MTEditor_imgMenu_insertBTN.type = "button";
MathTOUCH.MTEditor_imgMenu_insertBTN.value =  "画像を挿入する";
MathTOUCH.MTEditor_imgMenu_insertBTN.id = "imgMenu_insertButton";
MathTOUCH.MTEditor_imgMenu_insertBTN.onclick = function (e){
    if(MathTOUCH.MTEditor_imgMenu_inputsize_w.value == null || MathTOUCH.MTEditor_imgMenu_inputsize_h.value == null || MathTOUCH.MTEditor_imgMenu_inputsize_w.value == 0 || MathTOUCH.MTEditor_imgMenu_inputsize_h.value == 0){
        alert("画像のURLが正しいか確認してください。");
    }else{
        if(MathTOUCH.MTEditor_imgMenu_reEditing_flag){
            var mtDivId_spl = MathTOUCH.MTEditor_imgMenu_img_preview.name.split("_");
            var mtDivId = "mteditorDiv_"+mtDivId_spl[2] + "_" + mtDivId_spl[3];
            var mt_imgcaret = document.getElementById(MathTOUCH.MTEditor_imgMenu_img_preview.name);
        }else{
            var mt_imgcaret = document.getElementById("mt_caret");
            var mtDivId = mt_imgcaret.parentNode.parentNode.id;
        }
        var mtTextareaId = mtDivId.replace("mteditorEditarea_", "mteditorDiv_");

        var insertImageCode = document.createElement("img");
        insertImageCode.src = MathTOUCH.MTEditor_imgMenu_inputURL.value;
        insertImageCode.alt = MathTOUCH.MTEditor_imgMenu_inputALT.value;
        insertImageCode.width = MathTOUCH.MTEditor_imgMenu_inputsize_w.value;
        insertImageCode.height = MathTOUCH.MTEditor_imgMenu_inputsize_h.value;
        insertImageCode.style.cssText="cursor: pointer;"
        insertImageCode.className = "mtimg"
        var new_imgid = Math.floor( Math.random() * (100000 + 1 - 1) ) + 1;
        var mt_img = document.getElementById(mtDivId).querySelectorAll('img.mtimg');
        mt_img.forEach(function( element ) {
            var used_imgid = element.id.split('img_' + mtTextareaId + '_').join('');
            if(used_imgid == new_imgid){
                new_imgid = Math.floor( Math.random() * (100000 + 1 - 1) ) + 1;
            }
        });
        insertImageCode.id = "img_" + mtDivId + "_" + new_imgid;
        insertImageCode.name = insertImageCode.id;
        
        if(MathTOUCH.MTEditor_imgMenu_reEditing_flag){
            MathTOUCH.MTEditor_imgMenu_reEditing_flag = false;
        }
        mt_imgcaret.replaceWith(insertImageCode);
        var range = document.createRange();
        range.setStartAfter(insertImageCode);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        document.getElementById("modal").style.display="none";
        document.getElementById("imgmenu").style.display="none";
    }
}

MathTOUCH.MTEditor_imgMenu_cancelBTN = document.createElement("input");
MathTOUCH.MTEditor_imgMenu_cancelBTN.type = "button";
MathTOUCH.MTEditor_imgMenu_cancelBTN.value = "キャンセル";
MathTOUCH.MTEditor_imgMenu_cancelBTN.id = "imgMenu_cancelButton";
MathTOUCH.MTEditor_imgMenu_cancelBTN.onclick = function (e){
    document.getElementById("modal").style.display="none";
    document.getElementById("imgmenu").style.display="none";
    if(MathTOUCH.MTEditor_imgMenu_reEditing_flag){
        MathTOUCH.MTEditor_imgMenu_reEditing_flag = false;
    }else{
        var mt_imgcaret = document.getElementById("mt_caret");
        var range = document.createRange();
        range.setStartAfter(mt_imgcaret);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        mt_imgcaret.remove();
    }
}

MathTOUCH.MTEditor_imgMenu_reEditing_flag = false;
 
MathTOUCH.MTEditor_imgMenu.appendChild(MathTOUCH.MTEditor_imgMenu_h2);
MathTOUCH.MTEditor_imgMenu.appendChild(MathTOUCH.MTEditor_imgMenu_div);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_h3_url);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_inputURL);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_inputURLBTN);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_h3_preview);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_img_preview);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_h3_alt);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_inputALT);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_h3_size);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_labelsize_w);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_inputsize_w);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_labelsize_h);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_inputsize_h);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_inputsize_fix);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_inputsize_fix_label);
MathTOUCH.MTEditor_imgMenu_div.appendChild(MathTOUCH.MTEditor_imgMenu_insertdiv);

MathTOUCH.MTEditor_imgMenu_insertdiv.appendChild(MathTOUCH.MTEditor_imgMenu_cancelBTN);
MathTOUCH.MTEditor_imgMenu_insertdiv.appendChild(MathTOUCH.MTEditor_imgMenu_insertBTN);

MathTOUCH.MTEditor_History = [];
MathTOUCH.MTEditor_History_index = null;

MathTOUCH.dividNUM = new Object();

MathTOUCH.MathEditor_init = function(mtTextareaId){
    document.execCommand("DefaultParagraphSeparator", false, "p");
    if(MathTOUCH.MTEditor_num != 0){
        MathTOUCH.MTEditor_AREA_NUM = MathTOUCH.MTEditor_num;
    }
    MathTOUCH.MTEditor_num = MathTOUCH.MTEditor_num + 1;
    function formatDoc(sCmd, sValue, sIndex, mtEditareaId) {
        document.execCommand(sCmd, false, sValue);
        if(sCmd === "formatblock"){
            if(sValue != $("#mth_" + document.activeElement.id).val() && sValue !="blockquote" ){
                document.getElementById("#mth_" + document.activeElement.id).option[this.selectedIndex] = true;
            }
            if(sValue == "p"){
                MathTOUCH.MTEditor_Fstyle == 24;
            }else if(sValue == "h1"){
                MathTOUCH.MTEditor_Fstyle == 32;
            }else if(sValue == "h2"){
                MathTOUCH.MTEditor_Fstyle == 24;
            }else if(sValue == "h3"){
                MathTOUCH.MTEditor_Fstyle == 18;
            }else if(sValue == "h4"){
                MathTOUCH.MTEditor_Fstyle == 16;
            }else if(sValue == "h5"){
                MathTOUCH.MTEditor_Fstyle == 13;
            }else if(sValue == "h6"){
                MathTOUCH.MTEditor_Fstyle == 10;
            }else if("pre"){
                MathTOUCH.MTEditor_Fstyle == 16;
            }
        }
        if(sCmd === "fontsize"){
            MathTOUCH.MTEditor_Fstyle = MathTOUCH.MTEditor_o_fs_value2[sIndex];
            var selection = window.getSelection();
            var dom = selection.getRangeAt(0).cloneContents();
            var mteqimg = dom.querySelectorAll('img.mteq');
            var csize;
            mteqimg.forEach(function( element ) {
                myimg = document.getElementById(element.id);
                if(myimg.dataset.fsize != MathTOUCH.MTEditor_Fstyle){
                    let csize;
                    let mathtouch = new MathTOUCH.mathcanvas();
                    let oimgsize = mathtouch.getImageSize(myimg.dataset.xtml);
                    csize = Math.ceil((MathTOUCH.MTEditor_Fstyle/48)*10)/10 * oimgsize;
                    if(oimgsize == 48){
                        $(mteqimg).css('margin-top', "-4px");
                    }
                    myimg.height = parseInt(csize, 10);
                    myimg.dataset.fsize = MathTOUCH.MTEditor_Fstyle;
                }
            });
        }
        MathTOUCH.pushHistory(mtTextareaId);
    }
                                     
    $(document).on('click','.editarea',function(e){
                        var mtEditareaId = e.target.id;
                                if(e.target.tagName === "DIV" && e.target.className === "editarea"){
                                    var activeid = document.activeElement.id;
                                    MathTOUCH.MTEditor_focusID = activeid.split('mteditorEditarea_').join('');
                                    MathTOUCH.MTEditor_current_editArea = e.target;
                                    var compStyles = window.getComputedStyle(e.target);
                                    MathTOUCH.MTEditor_Fstyle = compStyles.getPropertyValue('font-size').replace(/px/g, '');
                                    var targetFS_ele = document.getElementById("mtsfs_mteditorEditarea_" + MathTOUCH.MTEditor_focusID);
                                    if(MathTOUCH.MTEditor_Fstyle == 16){
                                        targetFS_ele.selectedIndex=2;
                                    }else if(MathTOUCH.MTEditor_Fstyle == 10){
                                        targetFS_ele.selectedIndex=0;
                                    }else if(MathTOUCH.MTEditor_Fstyle == 13){
                                        targetFS_ele.selectedIndex=1;
                                    }else if(MathTOUCH.MTEditor_Fstyle == 18){
                                        targetFS_ele.selectedIndex=3;
                                    }else if(MathTOUCH.MTEditor_Fstyle ==  24){
                                        targetFS_ele.selectedIndex=4;
                                    }else if(MathTOUCH.MTEditor_Fstyle ==  32){
                                        targetFS_ele.selectedIndex=5;
                                    }else if(MathTOUCH.MTEditor_Fstyle ==  48){
                                        targetFS_ele.selectedIndex=6;
                                    }
                                    var targetFF_ele = document.getElementById("mtsf_mteditorEditarea_" + MathTOUCH.MTEditor_focusID);
                                    var fontfamily_ck = compStyles.getPropertyValue('font-family').replace(/"/g, '');
                                    if(fontfamily_ck === "-webkit-standard"){
                                        targetFF_ele.selectedIndex=0;
                                    }else if(fontfamily_ck === "Helvetica"){
                                        targetFF_ele.selectedIndex=1;
                                    }else if(fontfamily_ck === "Hiragino Sans"){
                                        targetFF_ele.selectedIndex=2;
                                    }else if(fontfamily_ck === "Arial"){
                                        targetFF_ele.selectedIndex=3;
                                    }else if(fontfamily_ck === "Arial Black"){
                                        targetFF_ele.selectedIndex=4;
                                    }else if(fontfamily_ck === "Times New Roman"){
                                        targetFF_ele.selectedIndex=5;
                                    }else if(fontfamily_ck === "YuMincho"){
                                        targetFF_ele.selectedIndex=6;
                                    }else if(fontfamily_ck === "Hiragino Mincho"){
                                         targetFF_ele.selectedIndex=7;
                                    }
                                         
                                    //color
                                    var targetCC_ele = document.getElementById("mtcc_mteditorEditarea_" + MathTOUCH.MTEditor_focusID);
                                        if(compStyles.getPropertyValue('color') === "rgb(0, 0, 0)"){
                                            targetCC_ele.selectedIndex=0;
                                        }else if(compStyles.getPropertyValue('color') === "rgb(255, 0, 0)"){
                                            targetCC_ele.selectedIndex=1;
                                        }else if(compStyles.getPropertyValue('color') === "rgb(0, 0, 255)"){
                                            targetCC_ele.selectedIndex=2;
                                        }else if(compStyles.getPropertyValue('color') === "rgb(0, 128, 0)"){
                                            targetCC_ele.selectedIndex=3;
                                        }else if(compStyles.getPropertyValue('color') === "rgb(255, 255, 0)"){
                                            targetCC_ele.selectedIndex=4;
                                        }else if(compStyles.getPropertyValue('color') === "rgb(255, 255, 255)"){
                                            targetCC_ele.selectedIndex=5;
                                        }
                                         
                                        //bkcolor
                                        var targetBC_ele = document.getElementById("mtbc_mteditorEditarea_" + MathTOUCH.MTEditor_focusID);
                                             if(compStyles.getPropertyValue('background-color') === "rgb(255, 255, 255)"){
                                                 targetBC_ele.selectedIndex = 0;
                                             }else if(compStyles.getPropertyValue('background-color') === "rgb(255, 0, 0)"){
                                                 targetBC_ele.selectedIndex=1;
                                             }else if(compStyles.getPropertyValue('background-color') === "rgb(0, 0, 255)"){
                                                 targetBC_ele.selectedIndex=2;
                                             }else if(compStyles.getPropertyValue('background-color') === "rgb(255, 255, 0)"){
                                                 targetBC_ele.selectedIndex=3;
                                             }else if(compStyles.getPropertyValue('background-color') === "rgb(0, 128, 0)"){
                                                 targetBC_ele.selectedIndex=4;
                                             }else if(compStyles.getPropertyValue('background-color') === "rgb(0, 255, 255)"){
                                                 targetBC_ele.selectedIndex=5;
                                             }else if(compStyles.getPropertyValue('background-color') === "rgb(0, 255, 0)"){
                                                 targetBC_ele.selectedIndex=6;
                                             }else if(compStyles.getPropertyValue('background-color') === "rgb(255, 0, 255)"){
                                                 targetBC_ele.selectedIndex=7;
                                             }else if(compStyles.getPropertyValue('background-color') === "rgb(0, 0, 0)"){
                                                 targetBC_ele.selectedIndex=8;
                                             }else if(compStyles.getPropertyValue('background-color') === "rgba(0, 0, 0, 0)"){
                                                 targetBC_ele.selectedIndex=9;
                                             }
                                         
                                             //format
                                             var targetH_ele = document.getElementById("mth_mteditorEditarea_" + MathTOUCH.MTEditor_focusID);
                                             if(e.target.tagName === "H1"){
                                                 targetH_ele.selectedIndex = 1;
                                             }else if(e.target.tagName === "H2"){
                                                 targetH_ele.selectedIndex=2;
                                             }else if(e.target.tagName === "H3"){
                                                 targetH_ele.selectedIndex=3;
                                             }else if(e.target.tagName === "H4"){
                                                 targetH_ele.selectedIndex=4;
                                             }else if(e.target.tagName === "H5"){
                                                 targetH_ele.selectedIndex=5;
                                             }else if(e.target.tagName === "H6"){
                                                 targetH_ele.selectedIndex=6;
                                             }else if(e.target.tagName === "P"){
                                                 targetH_ele.selectedIndex=7;
                                             }else if(e.target.tagName === "PRE"){
                                                 targetH_ele.selectedIndex=8;
                                             }else{
                                                 targetH_ele.selectedIndex=0;
                                             }
                                         }
                        if(document.getElementById(mtEditareaId)!=null){
                            MathTOUCH.pushHistory(mtEditareaId);
                        }
                    });
    var divHtml="";
    if(document.getElementById(mtTextareaId).nodeName == "TEXTAREA"){
            var mtTextareaId = mtTextareaId;
            var mtTextarea = document.getElementById(mtTextareaId);
            var mtDivId = "mteditorDiv_"+mtTextareaId;
            mtTextarea.style.cssText ="display:none";
            MathTOUCH.MTEditor_AREA.push(document.createElement("div"));
            mtTextarea.before(MathTOUCH.MTEditor_AREA[MathTOUCH.MTEditor_AREA_NUM]);
            divHtml = mtTextarea.value;
            $(document).on('DOMSubtreeModified propertychange','#'+mtDivId+' .editarea',function(e){
               if(!MathTOUCH.MTEditor_mtCheckFlag){
                   MathTOUCH.setMTtextarea(e.currentTarget.id, mtTextareaId);
                }
            });
            
        }else{
            MathTOUCH.MTEditor_AREA.push(document.getElementById(mtDivId));
        }
        MathTOUCH.MTEditor_AREA[MathTOUCH.MTEditor_AREA_NUM].id = mtDivId;
        MathTOUCH.MTEditor_AREA[MathTOUCH.MTEditor_AREA_NUM].className = "mteditor";
        MathTOUCH.MTEditor_editArea.push(document.createElement("div"));
        MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].className = "editarea";
        MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].id = "mteditorEditarea_" + mtTextareaId;
        MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].contentEditable = true;
        MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].designMode = "on";
        MathTOUCH.MTEditor_MENU1.push(document.createElement("div"));
        MathTOUCH.MTEditor_MENU1[MathTOUCH.MTEditor_AREA_NUM].id = "btn_menu1_" + mtTextareaId;
        MathTOUCH.MTEditor_MENU1[MathTOUCH.MTEditor_AREA_NUM].className = "btn_menu";
        MathTOUCH.MTEditor_MENU1[MathTOUCH.MTEditor_AREA_NUM].contentEditable = false;
        
        MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].oncopy = function(){return false;}
        MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].onpaste = function(){return false;}
        MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].oncut = function(){return false;}
        MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].onundo = function(){return false;}
        MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].onredo = function(){return false;}
                                      
        MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].addEventListener('keydown', event => {
                        let userAgent = window.navigator.userAgent.toLowerCase();
                        let mtEditareaId = event.target.id
                        let mtDivId = mtEditareaId.replace("mteditorEditarea_","mteditorDiv_");
                        let mtTextareaId = mtEditareaId.replace("mteditorEditarea_","");
                        
                        if((event.ctrlKey && !event.metaKey) || (!event.ctrlKey && event.metaKey)){
                            if(event.keyCode === 67){
                                MathTOUCH.MTEditorCopy(mtEditareaId);
                            }else if(event.keyCode === 86){
                                MathTOUCH.MTEditorPaste(mtDivId, true);
                            }else if(event.keyCode === 88){
                                MathTOUCH.MTEditorCut(mtEditareaId, true);
                            }else if(userAgent.indexOf("mac os x") !== -1 && (event.shiftKey && event.keyCode === 90)){
                                MathTOUCH.MTEditorRedo(mtEditareaId, mtTextareaId);
                            }else if(event.keyCode === 90){
                                MathTOUCH.MTEditorUndo(mtEditareaId, mtTextareaId);
                            }else if((userAgent.indexOf("windows nt") !== -1)&& event.keyCode === 89){
                                MathTOUCH.MTEditorRedo(mtEditareaId, mtTextareaId);
                            }else if(event.keyCode === 69){
                                document.getElementById(mtEditareaId).focus();
                                let range = window.getSelection().getRangeAt(0);
                                const oldConent = document.createTextNode(range.toString());
                                const newElement = document.createElement("span");
                                newElement.id = "mt_caret";
                                newElement.append(oldConent);
                                range.deleteContents();
                                range.insertNode(newElement);
                                MathTOUCH.callMathTOUCH(mtEditareaId,MathTOUCH.MTEditor_Fstyle,mtDivId,mtTextareaId);
                            }
                            return false;
                        }
                    });
        MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].addEventListener('keyup', event => {
                        if(event.keyCode === 13){//Enter key
                            if(!event.isComposing){
                                let mtEditareaId = event.currentTarget.id;
                                let mtdb_content = document.getElementById(mtEditareaId).innerHTML;
                                mtdb_content = mtdb_content.replace('<div id=\"candidates\"></div>', "");
                                if(MathTOUCH.MTEditor_History_index == null){
                                    MathTOUCH.MTEditor_History.push(mtdb_content);
                                    MathTOUCH.MTEditor_History_index = 0;
                                }else if(MathTOUCH.MTEditor_History_index!=(MathTOUCH.MTEditor_History.length-1)){
                                    MathTOUCH.MTEditor_History.splice( (MathTOUCH.MTEditor_History_index+1), (MathTOUCH.MTEditor_History.length-1) );
                                    MathTOUCH.MTEditor_History.push(mtdb_content);
                                    MathTOUCH.MTEditor_History_index ++;
                                }else{
                                    MathTOUCH.MTEditor_History.push(mtdb_content);
                                    MathTOUCH.MTEditor_History_index ++;
                                }
                            }
                        }else if(event.keyCode === 32){//Space key
                            if(event.isComposing){
                                let mtEditareaId = event.currentTarget.id;
                                MathTOUCH.pushHistory(mtEditareaId);
                            }
                        }
                    });
                                      
       
        MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].addEventListener('keyup', event => {
                             if(!event.isComposing && event.keyCode === 13){
                                 document.getElementById("mth_" + document.activeElement.id)[0].selected = true;
                             }
                    });

        //**formatting**//
        MathTOUCH.MTEditor_s_hdiv.push(document.createElement("div"));
        MathTOUCH.MTEditor_s_hdiv[MathTOUCH.MTEditor_AREA_NUM].className = "mtcustom-select";
        MathTOUCH.MTEditor_s_h.push(document.createElement("select"));
        MathTOUCH.MTEditor_s_h[MathTOUCH.MTEditor_AREA_NUM].className = "mtselect";
        MathTOUCH.MTEditor_s_h[MathTOUCH.MTEditor_AREA_NUM].id = "mth_" + MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].id;
        MathTOUCH.MTEditor_s_h[MathTOUCH.MTEditor_AREA_NUM].onchange = function (e){
                let mtTextareaId = e.target.parentNode.parentNode.parentNode.id.replace("mteditorDiv_","");
                let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
                formatDoc( 'formatblock',this[this.selectedIndex].value, this.selectedIndex, mtEditareaId);
        }
        MathTOUCH.MTEditor_o_h[MathTOUCH.MTEditor_AREA_NUM] = new Array(MathTOUCH.MTEditor_o_h_text.length);
        for(var j=0;j<MathTOUCH.MTEditor_o_h_text.length;j++){
            MathTOUCH.MTEditor_o_h[MathTOUCH.MTEditor_AREA_NUM][j] = document.createElement("option");
            MathTOUCH.MTEditor_o_h[MathTOUCH.MTEditor_AREA_NUM][j].className = "test";
            MathTOUCH.MTEditor_o_h[MathTOUCH.MTEditor_AREA_NUM][j].text = MathTOUCH.MTEditor_o_h_text[j];
            MathTOUCH.MTEditor_o_h[MathTOUCH.MTEditor_AREA_NUM][j].value = MathTOUCH.MTEditor_o_h_value[j];
            MathTOUCH.MTEditor_s_h[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_o_h[MathTOUCH.MTEditor_AREA_NUM][j]);
            MathTOUCH.MTEditor_s_hdiv[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_s_h[MathTOUCH.MTEditor_AREA_NUM]);
        }
        MathTOUCH.MTEditor_s_h[MathTOUCH.MTEditor_AREA_NUM].options[0].selected = true;
                
        //**font**//
        MathTOUCH.MTEditor_s_fdiv.push(document.createElement("div"));
        MathTOUCH.MTEditor_s_fdiv[MathTOUCH.MTEditor_AREA_NUM].className = "mtcustom-select";
        MathTOUCH.MTEditor_s_f.push(document.createElement("select"));
        MathTOUCH.MTEditor_s_f[MathTOUCH.MTEditor_AREA_NUM].className = "mtselect";
        MathTOUCH.MTEditor_s_f[MathTOUCH.MTEditor_AREA_NUM].id = "mtsf_" + MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].id;
        MathTOUCH.MTEditor_s_f[MathTOUCH.MTEditor_AREA_NUM].onchange = function (e){
                let mtTextareaId = e.target.parentNode.parentNode.parentNode.id.replace("mteditorDiv_","");
                let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
                formatDoc( 'fontname',this[this.selectedIndex].value, this.selectedIndex, mtEditareaId);
        }
        MathTOUCH.MTEditor_o_f[MathTOUCH.MTEditor_AREA_NUM] = new Array(MathTOUCH.MTEditor_o_f_text.length);
        for(var j=0;j<MathTOUCH.MTEditor_o_f_text.length;j++){
            MathTOUCH.MTEditor_o_f[MathTOUCH.MTEditor_AREA_NUM][j] = document.createElement("option");
            MathTOUCH.MTEditor_o_f[MathTOUCH.MTEditor_AREA_NUM][j].className = "heading";
            MathTOUCH.MTEditor_o_f[MathTOUCH.MTEditor_AREA_NUM].id = "mtof_" + MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].id;
            MathTOUCH.MTEditor_o_f[MathTOUCH.MTEditor_AREA_NUM][j].text = MathTOUCH.MTEditor_o_f_text[j];
            MathTOUCH.MTEditor_s_f[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_o_f[MathTOUCH.MTEditor_AREA_NUM][j]);
            MathTOUCH.MTEditor_s_fdiv[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_s_f[MathTOUCH.MTEditor_AREA_NUM]);
        }
        //**fontsize**//
        MathTOUCH.MTEditor_s_fsdiv.push(document.createElement("div"));
        MathTOUCH.MTEditor_s_fsdiv[MathTOUCH.MTEditor_AREA_NUM].className = "mtcustom-select";
        MathTOUCH.MTEditor_s_fs.push(document.createElement("select"));
        MathTOUCH.MTEditor_s_fs[MathTOUCH.MTEditor_AREA_NUM].className = "mtselect";
        MathTOUCH.MTEditor_s_fs[MathTOUCH.MTEditor_AREA_NUM].id = "mtsfs_" + MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].id;
        MathTOUCH.MTEditor_s_fs[MathTOUCH.MTEditor_AREA_NUM].onchange = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc( 'fontsize',this[this.selectedIndex].value, this.selectedIndex);
        }
        MathTOUCH.MTEditor_o_fs[MathTOUCH.MTEditor_AREA_NUM] = new Array(MathTOUCH.MTEditor_o_fs_text.length);
        for(var j=0;j<MathTOUCH.MTEditor_o_fs_text.length;j++){
            MathTOUCH.MTEditor_o_fs[MathTOUCH.MTEditor_AREA_NUM][j] = document.createElement("option");
            MathTOUCH.MTEditor_o_fs[MathTOUCH.MTEditor_AREA_NUM][j].className = "heading";
            MathTOUCH.MTEditor_o_fs[MathTOUCH.MTEditor_AREA_NUM][j].text = MathTOUCH.MTEditor_o_fs_text[j];
            MathTOUCH.MTEditor_o_fs[MathTOUCH.MTEditor_AREA_NUM][j].value = MathTOUCH.MTEditor_o_fs_value[j];
            
            MathTOUCH.MTEditor_s_fs[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_o_fs[MathTOUCH.MTEditor_AREA_NUM][j]);
            MathTOUCH.MTEditor_s_fsdiv[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_s_fs[MathTOUCH.MTEditor_AREA_NUM]);
        }
        MathTOUCH.MTEditor_s_fs[MathTOUCH.MTEditor_AREA_NUM].options[2].selected = true;
                                         
        //**Color**//
        MathTOUCH.MTEditor_s_ccdiv.push(document.createElement("div"));
        MathTOUCH.MTEditor_s_ccdiv[MathTOUCH.MTEditor_AREA_NUM].className = "mtcustom-select";
        MathTOUCH.MTEditor_s_cc.push(document.createElement("select"));
        MathTOUCH.MTEditor_s_cc[MathTOUCH.MTEditor_AREA_NUM].className = "mtselect";
        MathTOUCH.MTEditor_s_cc[MathTOUCH.MTEditor_AREA_NUM].id = "mtcc_" + MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].id;
        MathTOUCH.MTEditor_s_cc[MathTOUCH.MTEditor_AREA_NUM].onchange = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc( 'forecolor',this[this.selectedIndex].value, this.selectedIndex, mtEditareaId);
        }
        MathTOUCH.MTEditor_o_cc[MathTOUCH.MTEditor_AREA_NUM] = new Array(MathTOUCH.MTEditor_o_cc_text.length);
        for(var j=0;j<MathTOUCH.MTEditor_o_cc_text.length;j++){
            MathTOUCH.MTEditor_o_cc[MathTOUCH.MTEditor_AREA_NUM][j] = document.createElement("option");
            MathTOUCH.MTEditor_o_cc[MathTOUCH.MTEditor_AREA_NUM][j].className = "tttt";
            MathTOUCH.MTEditor_o_cc[MathTOUCH.MTEditor_AREA_NUM][j].text = MathTOUCH.MTEditor_o_cc_text[j];
            MathTOUCH.MTEditor_o_cc[MathTOUCH.MTEditor_AREA_NUM][j].value = MathTOUCH.MTEditor_o_cc_value[j];
            MathTOUCH.MTEditor_s_cc[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_o_cc[MathTOUCH.MTEditor_AREA_NUM][j]);
            MathTOUCH.MTEditor_s_ccdiv[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_s_cc[MathTOUCH.MTEditor_AREA_NUM]);
        }
        MathTOUCH.MTEditor_s_cc[MathTOUCH.MTEditor_AREA_NUM].options[0].selected = true;
                
        //**BackgroundColor**//
        MathTOUCH.MTEditor_s_bcdiv.push(document.createElement("div"));
        MathTOUCH.MTEditor_s_bcdiv[MathTOUCH.MTEditor_AREA_NUM].className = "mtcustom-select";
        MathTOUCH.MTEditor_s_bc.push(document.createElement("select"));
        MathTOUCH.MTEditor_s_bc[MathTOUCH.MTEditor_AREA_NUM].className = "mtselect";
        MathTOUCH.MTEditor_s_bc[MathTOUCH.MTEditor_AREA_NUM].id = "mtbc_" + MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].id;
        MathTOUCH.MTEditor_s_bc[MathTOUCH.MTEditor_AREA_NUM].onchange = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc( 'backcolor',this[this.selectedIndex].value, this.selectedIndex, mtEditareaId);
        }
        MathTOUCH.MTEditor_o_bc[MathTOUCH.MTEditor_AREA_NUM] = new Array(MathTOUCH.MTEditor_o_bc_text.length);
        for(var j=0;j<MathTOUCH.MTEditor_o_bc_text.length;j++){
            MathTOUCH.MTEditor_o_bc[MathTOUCH.MTEditor_AREA_NUM][j] = document.createElement("option");
            MathTOUCH.MTEditor_o_bc[MathTOUCH.MTEditor_AREA_NUM][j].className = "heading";
            MathTOUCH.MTEditor_o_bc[MathTOUCH.MTEditor_AREA_NUM][j].text = MathTOUCH.MTEditor_o_bc_text[j];
            MathTOUCH.MTEditor_o_bc[MathTOUCH.MTEditor_AREA_NUM][j].value = MathTOUCH.MTEditor_o_bc_value[j];
            MathTOUCH.MTEditor_s_bc[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_o_bc[MathTOUCH.MTEditor_AREA_NUM][j]);
            MathTOUCH.MTEditor_s_bcdiv[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_s_bc[MathTOUCH.MTEditor_AREA_NUM]);
        }
                    
        MathTOUCH.MTEditor_MENU1[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_s_hdiv[MathTOUCH.MTEditor_AREA_NUM]);
        MathTOUCH.MTEditor_MENU1[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_s_fdiv[MathTOUCH.MTEditor_AREA_NUM]);
        MathTOUCH.MTEditor_MENU1[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_s_fsdiv[MathTOUCH.MTEditor_AREA_NUM]);
        MathTOUCH.MTEditor_MENU1[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_s_ccdiv[MathTOUCH.MTEditor_AREA_NUM]);
        MathTOUCH.MTEditor_MENU1[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_s_bcdiv[MathTOUCH.MTEditor_AREA_NUM]);
            
        //**Menu2**//
        MathTOUCH.MTEditor_MENU2.push(document.createElement("div"));
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].id = "btn_menu2_" + mtTextareaId;
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].className = "btn_menu";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].contentEditable = false;
            
        //**undo**//
        MathTOUCH.MTEditor_i_u.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_u[MathTOUCH.MTEditor_AREA_NUM].title="Undo"
        MathTOUCH.MTEditor_i_u[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_u[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            MathTOUCH.MTEditorUndo(mtEditareaId, mtTextareaId);
        }
        MathTOUCH.MTEditor_i_u[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojMkJBQUFBO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTcuNywyNi4yYzUuMiwwLDkuNS0zLjEsOS41LTd2LTEuNGMwLTMuOS00LjItNy05LjUtN0gzLjYiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMC42LDEwLjkgMTEuNCwyLjMgMTEuNCwxOS41IAkiLz4KPC9nPgo8L3N2Zz4K";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_u[MathTOUCH.MTEditor_AREA_NUM]);
                
        //**redo**//
        MathTOUCH.MTEditor_i_r.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_r[MathTOUCH.MTEditor_AREA_NUM].title="Redo"
        MathTOUCH.MTEditor_i_r[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_r[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            MathTOUCH.MTEditorRedo(mtEditareaId, mtTextareaId);
        }
        MathTOUCH.MTEditor_i_r[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojMkJBQUFBO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTEuNSwyNS43Yy01LjIsMC05LjUtMy4xLTkuNS03di0xLjRjMC0zLjksNC4yLTcsOS41LTdoMTQuMiIvPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyOC43LDEwLjQgMTcuOCwxLjkgMTcuOCwxOSAJIi8+CjwvZz4KPC9zdmc+Cg==";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_r[MathTOUCH.MTEditor_AREA_NUM]);
                
        //**remove formatting**//
        MathTOUCH.MTEditor_i_rf.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_rf[MathTOUCH.MTEditor_AREA_NUM].title="Remove formatting"
        MathTOUCH.MTEditor_i_rf[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_rf[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc('removeFormat', '', '', mtEditareaId)
        }
        MathTOUCH.MTEditor_i_rf[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojQTZERUUyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojQTZERUUyO30KCS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDo1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDN7ZmlsbDpub25lO3N0cm9rZTojMkFBQkJCO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjYuNCIgeTE9IjI1LjgiIHgyPSIyNC43IiB5Mj0iMjUuOCIvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xMS42LDE4LjZMMTAuMSwyM0g2bDYuNi0xOS4zaDUuMkwyNC43LDIzaC00LjRsLTEuNi00LjVIMTEuNnogTTE3LjgsMTUuMWMtMS40LTQuMS0yLjItNi43LTIuNy04LjRoMAoJCWMtMC41LDEuOS0xLjQsNC45LTIuNSw4LjRIMTcuOHoiLz4KPC9nPgo8Zz4KCTxsaW5lIGNsYXNzPSJzdDIiIHgxPSIyNC42IiB5MT0iNS4zIiB4Mj0iNC4zIiB5Mj0iMjIuNSIvPgoJPGxpbmUgY2xhc3M9InN0MyIgeDE9IjI0LjYiIHkxPSI1LjMiIHgyPSI0LjMiIHkyPSIyMi41Ii8+CjwvZz4KPC9zdmc+Cg==";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_rf[MathTOUCH.MTEditor_AREA_NUM]);
            
        //**bold**//
        MathTOUCH.MTEditor_i_b.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_b[MathTOUCH.MTEditor_AREA_NUM].title="Bold"
        MathTOUCH.MTEditor_i_b[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_b[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc('bold', '', '', mtEditareaId);
        }
        MathTOUCH.MTEditor_i_b[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMkFBQkJCO30KPC9zdHlsZT4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA5NjAgNTQwKSIgc3R5bGU9ImZvbnQtZmFtaWx5OidLb3pHb1ByNk4tUmVndWxhci04M3B2LVJLU0otSCc7IGZvbnQtc2l6ZTo2cHg7Ij5kYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJdU9Eck9PQ3BPT0RwT09EdkY4eElpQm1iMk4xYzJGaWJHVTlJbVpoYkhObElnb0pJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNamtnTWpraUNna2djM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01qa2dNams3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQSE4wZVd4bElIUjVjR1U5SW5SbGVIUXZZM056SWo0S0NTNXpkREI3Wm1sc2JEcHViMjVsTzNOMGNtOXJaVG9qTWtKQlFVRkJPM04wY205clpTMTNhV1IwYURveU8zTjBjbTlyWlMxc2FXNWxZMkZ3T25KdmRXNWtPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwS0NTNXpkREY3Wm1sc2JEb2pNa0pCUVVGQk8zMEtQQzl6ZEhsc1pUNEtQR2MrQ2drOGJHbHVaU0JqYkdGemN6MGljM1F3SWlCNE1UMGlNVEF1TmlJZ2VURTlJall1TmlJZ2VESTlJakkwTGpVaUlIa3lQU0kyTGpZaUx6NEtQQzluUGdvOFp6NEtDVHhzYVc1bElHTnNZWE56UFNKemREQWlJSGd4UFNJeE1DNDJJaUI1TVQwaU1UUXVOU0lnZURJOUlqSTBMalVpSUhreVBTSXhOQzQxSWk4K0Nqd3ZaejRLUEdjK0NnazhiR2x1WlNCamJHRnpjejBpYzNRd0lpQjRNVDBpTVRBdU5pSWdlVEU5SWpJeUxqUWlJSGd5UFNJeU5DNDFJaUI1TWowaU1qSXVOQ0l2UGdvOEwyYytDanhqYVhKamJHVWdZMnhoYzNNOUluTjBNU0lnWTNnOUlqUXVPQ0lnWTNrOUlqWXVOeUlnY2owaU1TNDRJaTgrQ2p4amFYSmpiR1VnWTJ4aGMzTTlJbk4wTVNJZ1kzZzlJalF1T0NJZ1kzazlJakUwTGpVaUlISTlJakV1T0NJdlBnbzhZMmx5WTJ4bElHTnNZWE56UFNKemRERWlJR040UFNJMExqZ2lJR041UFNJeU1pNHpJaUJ5UFNJeExqZ2lMejRLUEM5emRtYytDZz09PC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDk2MCA1NDApIiBzdHlsZT0iZm9udC1mYW1pbHk6J0tvekdvUHI2Ti1SZWd1bGFyLTgzcHYtUktTSi1IJzsgZm9udC1zaXplOjEycHg7Ij5kYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJdU9Eck9PQ3BPT0RwT09EdkY4eElpQm1iMk4xYzJGaWJHVTlJbVpoYkhObElnb0pJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNamtnTWpraUNna2djM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01qa2dNams3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQSE4wZVd4bElIUjVjR1U5SW5SbGVIUXZZM056SWo0S0NTNXpkREI3Wm1sc2JEcHViMjVsTzNOMGNtOXJaVG9qTWtKQlFVRkJPM04wY205clpTMTNhV1IwYURveU8zTjBjbTlyWlMxc2FXNWxZMkZ3T25KdmRXNWtPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwS0NTNXpkREY3Wm1sc2JEb2pNa0pCUVVGQk8zMEtQQzl6ZEhsc1pUNEtQR2MrQ2drOGJHbHVaU0JqYkdGemN6MGljM1F3SWlCNE1UMGlNVEF1TmlJZ2VURTlJall1TmlJZ2VESTlJakkwTGpVaUlIa3lQU0kyTGpZaUx6NEtQQzluUGdvOFp6NEtDVHhzYVc1bElHTnNZWE56UFNKemREQWlJSGd4UFNJeE1DNDJJaUI1TVQwaU1UUXVOU0lnZURJOUlqSTBMalVpSUhreVBTSXhOQzQxSWk4K0Nqd3ZaejRLUEdjK0NnazhiR2x1WlNCamJHRnpjejBpYzNRd0lpQjRNVDBpTVRBdU5pSWdlVEU5SWpJeUxqUWlJSGd5UFNJeU5DNDFJaUI1TWowaU1qSXVOQ0l2UGdvOEwyYytDanhqYVhKamJHVWdZMnhoYzNNOUluTjBNU0lnWTNnOUlqUXVPQ0lnWTNrOUlqWXVOeUlnY2owaU1TNDRJaTgrQ2p4amFYSmpiR1VnWTJ4aGMzTTlJbk4wTVNJZ1kzZzlJalF1T0NJZ1kzazlJakUwTGpVaUlISTlJakV1T0NJdlBnbzhZMmx5WTJ4bElHTnNZWE56UFNKemRERWlJR040UFNJMExqZ2lJR041UFNJeU1pNHpJaUJ5UFNJeExqZ2lMejRLUEM5emRtYytDZz09PC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDk2MCA1NDApIiBzdHlsZT0iZm9udC1mYW1pbHk6J0tvekdvUHI2Ti1SZWd1bGFyLTgzcHYtUktTSi1IJzsgZm9udC1zaXplOjEycHg7Ij5kYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJdU9Eck9PQ3BPT0RwT09EdkY4eElpQm1iMk4xYzJGaWJHVTlJbVpoYkhObElnb0pJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNamtnTWpraUNna2djM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01qa2dNams3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQSE4wZVd4bElIUjVjR1U5SW5SbGVIUXZZM056SWo0S0NTNXpkREI3Wm1sc2JEcHViMjVsTzNOMGNtOXJaVG9qTWtKQlFVRkJPM04wY205clpTMTNhV1IwYURveU8zTjBjbTlyWlMxc2FXNWxZMkZ3T25KdmRXNWtPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwS0NTNXpkREY3Wm1sc2JEb2pNa0pCUVVGQk8zMEtQQzl6ZEhsc1pUNEtQR2MrQ2drOGJHbHVaU0JqYkdGemN6MGljM1F3SWlCNE1UMGlNVEF1TmlJZ2VURTlJall1TmlJZ2VESTlJakkwTGpVaUlIa3lQU0kyTGpZaUx6NEtQQzluUGdvOFp6NEtDVHhzYVc1bElHTnNZWE56UFNKemREQWlJSGd4UFNJeE1DNDJJaUI1TVQwaU1UUXVOU0lnZURJOUlqSTBMalVpSUhreVBTSXhOQzQxSWk4K0Nqd3ZaejRLUEdjK0NnazhiR2x1WlNCamJHRnpjejBpYzNRd0lpQjRNVDBpTVRBdU5pSWdlVEU5SWpJeUxqUWlJSGd5UFNJeU5DNDFJaUI1TWowaU1qSXVOQ0l2UGdvOEwyYytDanhqYVhKamJHVWdZMnhoYzNNOUluTjBNU0lnWTNnOUlqUXVPQ0lnWTNrOUlqWXVOeUlnY2owaU1TNDRJaTgrQ2p4amFYSmpiR1VnWTJ4aGMzTTlJbk4wTVNJZ1kzZzlJalF1T0NJZ1kzazlJakUwTGpVaUlISTlJakV1T0NJdlBnbzhZMmx5WTJ4bElHTnNZWE56UFNKemRERWlJR040UFNJMExqZ2lJR041UFNJeU1pNHpJaUJ5UFNJeExqZ2lMejRLUEM5emRtYytDZz09PC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDk2MCA1NDApIiBzdHlsZT0iZm9udC1mYW1pbHk6J0tvekdvUHI2Ti1SZWd1bGFyLTgzcHYtUktTSi1IJzsgZm9udC1zaXplOjEycHg7Ij5kYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJdU9Eck9PQ3BPT0RwT09EdkY4eElpQm1iMk4xYzJGaWJHVTlJbVpoYkhObElnb0pJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNamtnTWpraUNna2djM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01qa2dNams3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQSE4wZVd4bElIUjVjR1U5SW5SbGVIUXZZM056SWo0S0NTNXpkREI3Wm1sc2JEcHViMjVsTzNOMGNtOXJaVG9qTWtKQlFVRkJPM04wY205clpTMTNhV1IwYURveU8zTjBjbTlyWlMxc2FXNWxZMkZ3T25KdmRXNWtPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwS0NTNXpkREY3Wm1sc2JEb2pNa0pCUVVGQk8zMEtQQzl6ZEhsc1pUNEtQR2MrQ2drOGJHbHVaU0JqYkdGemN6MGljM1F3SWlCNE1UMGlNVEF1TmlJZ2VURTlJall1TmlJZ2VESTlJakkwTGpVaUlIa3lQU0kyTGpZaUx6NEtQQzluUGdvOFp6NEtDVHhzYVc1bElHTnNZWE56UFNKemREQWlJSGd4UFNJeE1DNDJJaUI1TVQwaU1UUXVOU0lnZURJOUlqSTBMalVpSUhreVBTSXhOQzQxSWk4K0Nqd3ZaejRLUEdjK0NnazhiR2x1WlNCamJHRnpjejBpYzNRd0lpQjRNVDBpTVRBdU5pSWdlVEU5SWpJeUxqUWlJSGd5UFNJeU5DNDFJaUI1TWowaU1qSXVOQ0l2UGdvOEwyYytDanhqYVhKamJHVWdZMnhoYzNNOUluTjBNU0lnWTNnOUlqUXVPQ0lnWTNrOUlqWXVOeUlnY2owaU1TNDRJaTgrQ2p4amFYSmpiR1VnWTJ4aGMzTTlJbk4wTVNJZ1kzZzlJalF1T0NJZ1kzazlJakUwTGpVaUlISTlJakV1T0NJdlBnbzhZMmx5WTJ4bElHTnNZWE56UFNKemRERWlJR040UFNJMExqZ2lJR041UFNJeU1pNHpJaUJ5UFNJeExqZ2lMejRLUEM5emRtYytDZz09PC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDk2My42MTM4IDU0Ny44OTMxKSIgc3R5bGU9ImZvbnQtZmFtaWx5OidLb3pHb1ByNk4tUmVndWxhci04M3B2LVJLU0otSCc7IGZvbnQtc2l6ZToxMnB4OyI+ZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREkxTGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SXVPRHJPT0NwT09EcE9PRHZGOHhJaUJtYjJOMWMyRmliR1U5SW1aaGJITmxJZ29KSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElpQjJhV1YzUW05NFBTSXdJREFnTWprZ01qa2lDZ2tnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdNamtnTWprN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajRLUEhOMGVXeGxJSFI1Y0dVOUluUmxlSFF2WTNOeklqNEtDUzV6ZERCN1ptbHNiRHB1YjI1bE8zTjBjbTlyWlRvak1rSkJRVUZCTzNOMGNtOXJaUzEzYVdSMGFEb3lPM04wY205clpTMXNhVzVsWTJGd09uSnZkVzVrTzNOMGNtOXJaUzF0YVhSbGNteHBiV2wwT2pFd08zMEtDUzV6ZERGN1ptbHNiRG9qTWtKQlFVRkJPMzBLUEM5emRIbHNaVDRLUEdjK0NnazhiR2x1WlNCamJHRnpjejBpYzNRd0lpQjRNVDBpTVRBdU5pSWdlVEU5SWpZdU5pSWdlREk5SWpJMExqVWlJSGt5UFNJMkxqWWlMejRLUEM5blBnbzhaejRLQ1R4c2FXNWxJR05zWVhOelBTSnpkREFpSUhneFBTSXhNQzQySWlCNU1UMGlNVFF1TlNJZ2VESTlJakkwTGpVaUlIa3lQU0l4TkM0MUlpOCtDand2Wno0S1BHYytDZ2s4YkdsdVpTQmpiR0Z6Y3owaWMzUXdJaUI0TVQwaU1UQXVOaUlnZVRFOUlqSXlMalFpSUhneVBTSXlOQzQxSWlCNU1qMGlNakl1TkNJdlBnbzhMMmMrQ2p4amFYSmpiR1VnWTJ4aGMzTTlJbk4wTVNJZ1kzZzlJalF1T0NJZ1kzazlJall1TnlJZ2NqMGlNUzQ0SWk4K0NqeGphWEpqYkdVZ1kyeGhjM005SW5OME1TSWdZM2c5SWpRdU9DSWdZM2s5SWpFMExqVWlJSEk5SWpFdU9DSXZQZ284WTJseVkyeGxJR05zWVhOelBTSnpkREVpSUdONFBTSTBMamdpSUdONVBTSXlNaTR6SWlCeVBTSXhMamdpTHo0S1BDOXpkbWMrQ2c9PTwvdGV4dD4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAuMiwyNC45Yy0xLjUsMC0yLjIsMC0zLjMsMC4xYzAuMi0xLjEsMC4yLTEuOCwwLjItMy41VjcuNmMwLTEuMi0wLjEtMi4xLTAuMi0zLjJDOCw0LjUsOC40LDQuNSwxMC4yLDQuNQoJCWg2LjFjNCwwLDYuMiwxLjgsNi4yLDVjMCwxLjYtMC41LDIuNy0xLjQsMy42Yy0wLjYsMC41LTEsMC44LTIsMS4xYzEuMywwLjMsMS45LDAuNSwyLjYsMS4yYzEuMSwxLDEuNiwyLjMsMS42LDMuOQoJCWMwLDMuNi0yLjQsNS42LTYuNyw1LjZIMTAuMnogTTE1LjksMTIuOWMyLDAsMy4xLTEuMSwzLjEtMi44YzAtMC44LTAuMy0xLjUtMC43LTEuOWMtMC42LTAuNS0xLjQtMC44LTIuNS0wLjhoLTUuM3Y1LjVIMTUuOXoKCQkgTTEwLjUsMjJoNS41YzIuMywwLDMuNi0xLjEsMy42LTMuMmMwLTEtMC4zLTEuNy0wLjgtMi4yYy0wLjYtMC42LTEuNi0wLjktMi44LTAuOWgtNS41VjIyeiIvPgo8L2c+Cjwvc3ZnPgo=";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_b[MathTOUCH.MTEditor_AREA_NUM]);
                
        //**italic**//
        MathTOUCH.MTEditor_i_it.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_it[MathTOUCH.MTEditor_AREA_NUM].title="Italic"
        MathTOUCH.MTEditor_i_it[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_it[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc('italic', '', '', mtEditareaId);
        }
        MathTOUCH.MTEditor_i_it[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMkFBQkJCO30KPC9zdHlsZT4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA5NjAgNTQwKSIgc3R5bGU9ImZvbnQtZmFtaWx5OidLb3pHb1ByNk4tUmVndWxhci04M3B2LVJLU0otSCc7IGZvbnQtc2l6ZTo2cHg7Ij5kYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJdU9Eck9PQ3BPT0RwT09EdkY4eElpQm1iMk4xYzJGaWJHVTlJbVpoYkhObElnb0pJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNamtnTWpraUNna2djM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01qa2dNams3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQSE4wZVd4bElIUjVjR1U5SW5SbGVIUXZZM056SWo0S0NTNXpkREI3Wm1sc2JEcHViMjVsTzNOMGNtOXJaVG9qTWtKQlFVRkJPM04wY205clpTMTNhV1IwYURveU8zTjBjbTlyWlMxc2FXNWxZMkZ3T25KdmRXNWtPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwS0NTNXpkREY3Wm1sc2JEb2pNa0pCUVVGQk8zMEtQQzl6ZEhsc1pUNEtQR2MrQ2drOGJHbHVaU0JqYkdGemN6MGljM1F3SWlCNE1UMGlNVEF1TmlJZ2VURTlJall1TmlJZ2VESTlJakkwTGpVaUlIa3lQU0kyTGpZaUx6NEtQQzluUGdvOFp6NEtDVHhzYVc1bElHTnNZWE56UFNKemREQWlJSGd4UFNJeE1DNDJJaUI1TVQwaU1UUXVOU0lnZURJOUlqSTBMalVpSUhreVBTSXhOQzQxSWk4K0Nqd3ZaejRLUEdjK0NnazhiR2x1WlNCamJHRnpjejBpYzNRd0lpQjRNVDBpTVRBdU5pSWdlVEU5SWpJeUxqUWlJSGd5UFNJeU5DNDFJaUI1TWowaU1qSXVOQ0l2UGdvOEwyYytDanhqYVhKamJHVWdZMnhoYzNNOUluTjBNU0lnWTNnOUlqUXVPQ0lnWTNrOUlqWXVOeUlnY2owaU1TNDRJaTgrQ2p4amFYSmpiR1VnWTJ4aGMzTTlJbk4wTVNJZ1kzZzlJalF1T0NJZ1kzazlJakUwTGpVaUlISTlJakV1T0NJdlBnbzhZMmx5WTJ4bElHTnNZWE56UFNKemRERWlJR040UFNJMExqZ2lJR041UFNJeU1pNHpJaUJ5UFNJeExqZ2lMejRLUEM5emRtYytDZz09PC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDk2MCA1NDApIiBzdHlsZT0iZm9udC1mYW1pbHk6J0tvekdvUHI2Ti1SZWd1bGFyLTgzcHYtUktTSi1IJzsgZm9udC1zaXplOjEycHg7Ij5kYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJdU9Eck9PQ3BPT0RwT09EdkY4eElpQm1iMk4xYzJGaWJHVTlJbVpoYkhObElnb0pJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNamtnTWpraUNna2djM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01qa2dNams3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQSE4wZVd4bElIUjVjR1U5SW5SbGVIUXZZM056SWo0S0NTNXpkREI3Wm1sc2JEcHViMjVsTzNOMGNtOXJaVG9qTWtKQlFVRkJPM04wY205clpTMTNhV1IwYURveU8zTjBjbTlyWlMxc2FXNWxZMkZ3T25KdmRXNWtPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwS0NTNXpkREY3Wm1sc2JEb2pNa0pCUVVGQk8zMEtQQzl6ZEhsc1pUNEtQR2MrQ2drOGJHbHVaU0JqYkdGemN6MGljM1F3SWlCNE1UMGlNVEF1TmlJZ2VURTlJall1TmlJZ2VESTlJakkwTGpVaUlIa3lQU0kyTGpZaUx6NEtQQzluUGdvOFp6NEtDVHhzYVc1bElHTnNZWE56UFNKemREQWlJSGd4UFNJeE1DNDJJaUI1TVQwaU1UUXVOU0lnZURJOUlqSTBMalVpSUhreVBTSXhOQzQxSWk4K0Nqd3ZaejRLUEdjK0NnazhiR2x1WlNCamJHRnpjejBpYzNRd0lpQjRNVDBpTVRBdU5pSWdlVEU5SWpJeUxqUWlJSGd5UFNJeU5DNDFJaUI1TWowaU1qSXVOQ0l2UGdvOEwyYytDanhqYVhKamJHVWdZMnhoYzNNOUluTjBNU0lnWTNnOUlqUXVPQ0lnWTNrOUlqWXVOeUlnY2owaU1TNDRJaTgrQ2p4amFYSmpiR1VnWTJ4aGMzTTlJbk4wTVNJZ1kzZzlJalF1T0NJZ1kzazlJakUwTGpVaUlISTlJakV1T0NJdlBnbzhZMmx5WTJ4bElHTnNZWE56UFNKemRERWlJR040UFNJMExqZ2lJR041UFNJeU1pNHpJaUJ5UFNJeExqZ2lMejRLUEM5emRtYytDZz09PC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDk2MCA1NDApIiBzdHlsZT0iZm9udC1mYW1pbHk6J0tvekdvUHI2Ti1SZWd1bGFyLTgzcHYtUktTSi1IJzsgZm9udC1zaXplOjEycHg7Ij5kYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJdU9Eck9PQ3BPT0RwT09EdkY4eElpQm1iMk4xYzJGaWJHVTlJbVpoYkhObElnb0pJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNamtnTWpraUNna2djM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01qa2dNams3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQSE4wZVd4bElIUjVjR1U5SW5SbGVIUXZZM056SWo0S0NTNXpkREI3Wm1sc2JEcHViMjVsTzNOMGNtOXJaVG9qTWtKQlFVRkJPM04wY205clpTMTNhV1IwYURveU8zTjBjbTlyWlMxc2FXNWxZMkZ3T25KdmRXNWtPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwS0NTNXpkREY3Wm1sc2JEb2pNa0pCUVVGQk8zMEtQQzl6ZEhsc1pUNEtQR2MrQ2drOGJHbHVaU0JqYkdGemN6MGljM1F3SWlCNE1UMGlNVEF1TmlJZ2VURTlJall1TmlJZ2VESTlJakkwTGpVaUlIa3lQU0kyTGpZaUx6NEtQQzluUGdvOFp6NEtDVHhzYVc1bElHTnNZWE56UFNKemREQWlJSGd4UFNJeE1DNDJJaUI1TVQwaU1UUXVOU0lnZURJOUlqSTBMalVpSUhreVBTSXhOQzQxSWk4K0Nqd3ZaejRLUEdjK0NnazhiR2x1WlNCamJHRnpjejBpYzNRd0lpQjRNVDBpTVRBdU5pSWdlVEU5SWpJeUxqUWlJSGd5UFNJeU5DNDFJaUI1TWowaU1qSXVOQ0l2UGdvOEwyYytDanhqYVhKamJHVWdZMnhoYzNNOUluTjBNU0lnWTNnOUlqUXVPQ0lnWTNrOUlqWXVOeUlnY2owaU1TNDRJaTgrQ2p4amFYSmpiR1VnWTJ4aGMzTTlJbk4wTVNJZ1kzZzlJalF1T0NJZ1kzazlJakUwTGpVaUlISTlJakV1T0NJdlBnbzhZMmx5WTJ4bElHTnNZWE56UFNKemRERWlJR040UFNJMExqZ2lJR041UFNJeU1pNHpJaUJ5UFNJeExqZ2lMejRLUEM5emRtYytDZz09PC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDk2MCA1NDApIiBzdHlsZT0iZm9udC1mYW1pbHk6J0tvekdvUHI2Ti1SZWd1bGFyLTgzcHYtUktTSi1IJzsgZm9udC1zaXplOjEycHg7Ij5kYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJdU9Eck9PQ3BPT0RwT09EdkY4eElpQm1iMk4xYzJGaWJHVTlJbVpoYkhObElnb0pJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNamtnTWpraUNna2djM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01qa2dNams3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQSE4wZVd4bElIUjVjR1U5SW5SbGVIUXZZM056SWo0S0NTNXpkREI3Wm1sc2JEcHViMjVsTzNOMGNtOXJaVG9qTWtKQlFVRkJPM04wY205clpTMTNhV1IwYURveU8zTjBjbTlyWlMxc2FXNWxZMkZ3T25KdmRXNWtPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwS0NTNXpkREY3Wm1sc2JEb2pNa0pCUVVGQk8zMEtQQzl6ZEhsc1pUNEtQR2MrQ2drOGJHbHVaU0JqYkdGemN6MGljM1F3SWlCNE1UMGlNVEF1TmlJZ2VURTlJall1TmlJZ2VESTlJakkwTGpVaUlIa3lQU0kyTGpZaUx6NEtQQzluUGdvOFp6NEtDVHhzYVc1bElHTnNZWE56UFNKemREQWlJSGd4UFNJeE1DNDJJaUI1TVQwaU1UUXVOU0lnZURJOUlqSTBMalVpSUhreVBTSXhOQzQxSWk4K0Nqd3ZaejRLUEdjK0NnazhiR2x1WlNCamJHRnpjejBpYzNRd0lpQjRNVDBpTVRBdU5pSWdlVEU5SWpJeUxqUWlJSGd5UFNJeU5DNDFJaUI1TWowaU1qSXVOQ0l2UGdvOEwyYytDanhqYVhKamJHVWdZMnhoYzNNOUluTjBNU0lnWTNnOUlqUXVPQ0lnWTNrOUlqWXVOeUlnY2owaU1TNDRJaTgrQ2p4amFYSmpiR1VnWTJ4aGMzTTlJbk4wTVNJZ1kzZzlJalF1T0NJZ1kzazlJakUwTGpVaUlISTlJakV1T0NJdlBnbzhZMmx5WTJ4bElHTnNZWE56UFNKemRERWlJR040UFNJMExqZ2lJR041UFNJeU1pNHpJaUJ5UFNJeExqZ2lMejRLUEM5emRtYytDZz09PC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDk2My42MTM4IDU0Ny44OTMxKSIgc3R5bGU9ImZvbnQtZmFtaWx5OidLb3pHb1ByNk4tUmVndWxhci04M3B2LVJLU0otSCc7IGZvbnQtc2l6ZToxMnB4OyI+ZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejRLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREkxTGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SXVPRHJPT0NwT09EcE9PRHZGOHhJaUJtYjJOMWMyRmliR1U5SW1aaGJITmxJZ29KSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElpQjJhV1YzUW05NFBTSXdJREFnTWprZ01qa2lDZ2tnYzNSNWJHVTlJbVZ1WVdKc1pTMWlZV05yWjNKdmRXNWtPbTVsZHlBd0lEQWdNamtnTWprN0lpQjRiV3c2YzNCaFkyVTlJbkJ5WlhObGNuWmxJajRLUEhOMGVXeGxJSFI1Y0dVOUluUmxlSFF2WTNOeklqNEtDUzV6ZERCN1ptbHNiRHB1YjI1bE8zTjBjbTlyWlRvak1rSkJRVUZCTzNOMGNtOXJaUzEzYVdSMGFEb3lPM04wY205clpTMXNhVzVsWTJGd09uSnZkVzVrTzNOMGNtOXJaUzF0YVhSbGNteHBiV2wwT2pFd08zMEtDUzV6ZERGN1ptbHNiRG9qTWtKQlFVRkJPMzBLUEM5emRIbHNaVDRLUEdjK0NnazhiR2x1WlNCamJHRnpjejBpYzNRd0lpQjRNVDBpTVRBdU5pSWdlVEU5SWpZdU5pSWdlREk5SWpJMExqVWlJSGt5UFNJMkxqWWlMejRLUEM5blBnbzhaejRLQ1R4c2FXNWxJR05zWVhOelBTSnpkREFpSUhneFBTSXhNQzQySWlCNU1UMGlNVFF1TlNJZ2VESTlJakkwTGpVaUlIa3lQU0l4TkM0MUlpOCtDand2Wno0S1BHYytDZ2s4YkdsdVpTQmpiR0Z6Y3owaWMzUXdJaUI0TVQwaU1UQXVOaUlnZVRFOUlqSXlMalFpSUhneVBTSXlOQzQxSWlCNU1qMGlNakl1TkNJdlBnbzhMMmMrQ2p4amFYSmpiR1VnWTJ4aGMzTTlJbk4wTVNJZ1kzZzlJalF1T0NJZ1kzazlJall1TnlJZ2NqMGlNUzQ0SWk4K0NqeGphWEpqYkdVZ1kyeGhjM005SW5OME1TSWdZM2c5SWpRdU9DSWdZM2s5SWpFMExqVWlJSEk5SWpFdU9DSXZQZ284WTJseVkyeGxJR05zWVhOelBTSnpkREVpSUdONFBTSTBMamdpSUdONVBTSXlNaTR6SWlCeVBTSXhMamdpTHo0S1BDOXpkbWMrQ2c9PTwvdGV4dD4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTcuMSwyNS4zTDE2LjgsMjZINC41bDAuMy0wLjZjMS4yLDAsMi4xLTAuMSwyLjQtMC4yYzAuNi0wLjIsMS4xLTAuNSwxLjQtMC44YzAuNS0wLjUsMS0xLjUsMS41LTIuOQoJCWw1LjItMTMuOWMwLjQtMS4yLDAuNy0yLDAuNy0yLjZjMC0wLjMtMC4xLTAuNS0wLjMtMC43Yy0wLjItMC4yLTAuNS0wLjQtMC45LTAuNWMtMC40LTAuMS0xLjItMC4yLTIuMy0wLjJsMC4zLTAuNmgxMS42bC0wLjIsMC42CgkJYy0wLjksMC0xLjYsMC4xLTIuMSwwLjJjLTAuNywwLjItMS4yLDAuNS0xLjUsMWMtMC4zLDAuNC0wLjgsMS4zLTEuMywyLjhsLTUuMiwxMy45Yy0wLjUsMS4zLTAuNywyLjEtMC43LDIuNAoJCWMwLDAuMywwLjEsMC41LDAuMywwLjdjMC4yLDAuMiwwLjUsMC40LDAuOSwwLjVDMTUsMjUuMiwxNS44LDI1LjMsMTcuMSwyNS4zeiIvPgo8L2c+Cjwvc3ZnPgo=";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_it[MathTOUCH.MTEditor_AREA_NUM]);
                
        //**Underline**//
        MathTOUCH.MTEditor_i_ul.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_ul[MathTOUCH.MTEditor_AREA_NUM].title="Underline"
        MathTOUCH.MTEditor_i_ul[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_ul[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc('underline', '', '', mtEditareaId);
        }
        MathTOUCH.MTEditor_i_ul[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMkFBQkJCO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMkFBQkJCO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDk2MCA1NDApIiBzdHlsZT0iZm9udC1mYW1pbHk6J0tvekdvUHI2Ti1SZWd1bGFyLTgzcHYtUktTSi1IJzsgZm9udC1zaXplOjZweDsiPmRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJMUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUl1T0RyT09DcE9PRHBPT0R2Rjh4SWlCbWIyTjFjMkZpYkdVOUltWmhiSE5sSWdvSklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01qa2dNamtpQ2drZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnTWprZ01qazdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0S1BITjBlV3hsSUhSNWNHVTlJblJsZUhRdlkzTnpJajRLQ1M1emREQjdabWxzYkRwdWIyNWxPM04wY205clpUb2pNa0pCUVVGQk8zTjBjbTlyWlMxM2FXUjBhRG95TzNOMGNtOXJaUzFzYVc1bFkyRndPbkp2ZFc1a08zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qRXdPMzBLQ1M1emRERjdabWxzYkRvak1rSkJRVUZCTzMwS1BDOXpkSGxzWlQ0S1BHYytDZ2s4YkdsdVpTQmpiR0Z6Y3owaWMzUXdJaUI0TVQwaU1UQXVOaUlnZVRFOUlqWXVOaUlnZURJOUlqSTBMalVpSUhreVBTSTJMallpTHo0S1BDOW5QZ284Wno0S0NUeHNhVzVsSUdOc1lYTnpQU0p6ZERBaUlIZ3hQU0l4TUM0MklpQjVNVDBpTVRRdU5TSWdlREk5SWpJMExqVWlJSGt5UFNJeE5DNDFJaTgrQ2p3dlp6NEtQR2MrQ2drOGJHbHVaU0JqYkdGemN6MGljM1F3SWlCNE1UMGlNVEF1TmlJZ2VURTlJakl5TGpRaUlIZ3lQU0l5TkM0MUlpQjVNajBpTWpJdU5DSXZQZ284TDJjK0NqeGphWEpqYkdVZ1kyeGhjM005SW5OME1TSWdZM2c5SWpRdU9DSWdZM2s5SWpZdU55SWdjajBpTVM0NElpOCtDanhqYVhKamJHVWdZMnhoYzNNOUluTjBNU0lnWTNnOUlqUXVPQ0lnWTNrOUlqRTBMalVpSUhJOUlqRXVPQ0l2UGdvOFkybHlZMnhsSUdOc1lYTnpQU0p6ZERFaUlHTjRQU0kwTGpnaUlHTjVQU0l5TWk0eklpQnlQU0l4TGpnaUx6NEtQQzl6ZG1jK0NnPT08L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgOTYwIDU0MCkiIHN0eWxlPSJmb250LWZhbWlseTonS296R29QcjZOLVJlZ3VsYXItODNwdi1SS1NKLUgnOyBmb250LXNpemU6MTJweDsiPmRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJMUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUl1T0RyT09DcE9PRHBPT0R2Rjh4SWlCbWIyTjFjMkZpYkdVOUltWmhiSE5sSWdvSklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01qa2dNamtpQ2drZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnTWprZ01qazdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0S1BITjBlV3hsSUhSNWNHVTlJblJsZUhRdlkzTnpJajRLQ1M1emREQjdabWxzYkRwdWIyNWxPM04wY205clpUb2pNa0pCUVVGQk8zTjBjbTlyWlMxM2FXUjBhRG95TzNOMGNtOXJaUzFzYVc1bFkyRndPbkp2ZFc1a08zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qRXdPMzBLQ1M1emRERjdabWxzYkRvak1rSkJRVUZCTzMwS1BDOXpkSGxzWlQ0S1BHYytDZ2s4YkdsdVpTQmpiR0Z6Y3owaWMzUXdJaUI0TVQwaU1UQXVOaUlnZVRFOUlqWXVOaUlnZURJOUlqSTBMalVpSUhreVBTSTJMallpTHo0S1BDOW5QZ284Wno0S0NUeHNhVzVsSUdOc1lYTnpQU0p6ZERBaUlIZ3hQU0l4TUM0MklpQjVNVDBpTVRRdU5TSWdlREk5SWpJMExqVWlJSGt5UFNJeE5DNDFJaTgrQ2p3dlp6NEtQR2MrQ2drOGJHbHVaU0JqYkdGemN6MGljM1F3SWlCNE1UMGlNVEF1TmlJZ2VURTlJakl5TGpRaUlIZ3lQU0l5TkM0MUlpQjVNajBpTWpJdU5DSXZQZ284TDJjK0NqeGphWEpqYkdVZ1kyeGhjM005SW5OME1TSWdZM2c5SWpRdU9DSWdZM2s5SWpZdU55SWdjajBpTVM0NElpOCtDanhqYVhKamJHVWdZMnhoYzNNOUluTjBNU0lnWTNnOUlqUXVPQ0lnWTNrOUlqRTBMalVpSUhJOUlqRXVPQ0l2UGdvOFkybHlZMnhsSUdOc1lYTnpQU0p6ZERFaUlHTjRQU0kwTGpnaUlHTjVQU0l5TWk0eklpQnlQU0l4TGpnaUx6NEtQQzl6ZG1jK0NnPT08L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgOTYwIDU0MCkiIHN0eWxlPSJmb250LWZhbWlseTonS296R29QcjZOLVJlZ3VsYXItODNwdi1SS1NKLUgnOyBmb250LXNpemU6MTJweDsiPmRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJMUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUl1T0RyT09DcE9PRHBPT0R2Rjh4SWlCbWIyTjFjMkZpYkdVOUltWmhiSE5sSWdvSklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01qa2dNamtpQ2drZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnTWprZ01qazdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0S1BITjBlV3hsSUhSNWNHVTlJblJsZUhRdlkzTnpJajRLQ1M1emREQjdabWxzYkRwdWIyNWxPM04wY205clpUb2pNa0pCUVVGQk8zTjBjbTlyWlMxM2FXUjBhRG95TzNOMGNtOXJaUzFzYVc1bFkyRndPbkp2ZFc1a08zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qRXdPMzBLQ1M1emRERjdabWxzYkRvak1rSkJRVUZCTzMwS1BDOXpkSGxzWlQ0S1BHYytDZ2s4YkdsdVpTQmpiR0Z6Y3owaWMzUXdJaUI0TVQwaU1UQXVOaUlnZVRFOUlqWXVOaUlnZURJOUlqSTBMalVpSUhreVBTSTJMallpTHo0S1BDOW5QZ284Wno0S0NUeHNhVzVsSUdOc1lYTnpQU0p6ZERBaUlIZ3hQU0l4TUM0MklpQjVNVDBpTVRRdU5TSWdlREk5SWpJMExqVWlJSGt5UFNJeE5DNDFJaTgrQ2p3dlp6NEtQR2MrQ2drOGJHbHVaU0JqYkdGemN6MGljM1F3SWlCNE1UMGlNVEF1TmlJZ2VURTlJakl5TGpRaUlIZ3lQU0l5TkM0MUlpQjVNajBpTWpJdU5DSXZQZ284TDJjK0NqeGphWEpqYkdVZ1kyeGhjM005SW5OME1TSWdZM2c5SWpRdU9DSWdZM2s5SWpZdU55SWdjajBpTVM0NElpOCtDanhqYVhKamJHVWdZMnhoYzNNOUluTjBNU0lnWTNnOUlqUXVPQ0lnWTNrOUlqRTBMalVpSUhJOUlqRXVPQ0l2UGdvOFkybHlZMnhsSUdOc1lYTnpQU0p6ZERFaUlHTjRQU0kwTGpnaUlHTjVQU0l5TWk0eklpQnlQU0l4TGpnaUx6NEtQQzl6ZG1jK0NnPT08L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgOTYwIDU0MCkiIHN0eWxlPSJmb250LWZhbWlseTonS296R29QcjZOLVJlZ3VsYXItODNwdi1SS1NKLUgnOyBmb250LXNpemU6MTJweDsiPmRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0S1BDRXRMU0JIWlc1bGNtRjBiM0k2SUVGa2IySmxJRWxzYkhWemRISmhkRzl5SURJMUxqQXVNQ3dnVTFaSElFVjRjRzl5ZENCUWJIVm5MVWx1SUM0Z1UxWkhJRlpsY25OcGIyNDZJRFl1TURBZ1FuVnBiR1FnTUNrZ0lDMHRQZ284YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUl1T0RyT09DcE9PRHBPT0R2Rjh4SWlCbWIyTjFjMkZpYkdVOUltWmhiSE5sSWdvSklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01qa2dNamtpQ2drZ2MzUjViR1U5SW1WdVlXSnNaUzFpWVdOclozSnZkVzVrT201bGR5QXdJREFnTWprZ01qazdJaUI0Yld3NmMzQmhZMlU5SW5CeVpYTmxjblpsSWo0S1BITjBlV3hsSUhSNWNHVTlJblJsZUhRdlkzTnpJajRLQ1M1emREQjdabWxzYkRwdWIyNWxPM04wY205clpUb2pNa0pCUVVGQk8zTjBjbTlyWlMxM2FXUjBhRG95TzNOMGNtOXJaUzFzYVc1bFkyRndPbkp2ZFc1a08zTjBjbTlyWlMxdGFYUmxjbXhwYldsME9qRXdPMzBLQ1M1emRERjdabWxzYkRvak1rSkJRVUZCTzMwS1BDOXpkSGxzWlQ0S1BHYytDZ2s4YkdsdVpTQmpiR0Z6Y3owaWMzUXdJaUI0TVQwaU1UQXVOaUlnZVRFOUlqWXVOaUlnZURJOUlqSTBMalVpSUhreVBTSTJMallpTHo0S1BDOW5QZ284Wno0S0NUeHNhVzVsSUdOc1lYTnpQU0p6ZERBaUlIZ3hQU0l4TUM0MklpQjVNVDBpTVRRdU5TSWdlREk5SWpJMExqVWlJSGt5UFNJeE5DNDFJaTgrQ2p3dlp6NEtQR2MrQ2drOGJHbHVaU0JqYkdGemN6MGljM1F3SWlCNE1UMGlNVEF1TmlJZ2VURTlJakl5TGpRaUlIZ3lQU0l5TkM0MUlpQjVNajBpTWpJdU5DSXZQZ284TDJjK0NqeGphWEpqYkdVZ1kyeGhjM005SW5OME1TSWdZM2c5SWpRdU9DSWdZM2s5SWpZdU55SWdjajBpTVM0NElpOCtDanhqYVhKamJHVWdZMnhoYzNNOUluTjBNU0lnWTNnOUlqUXVPQ0lnWTNrOUlqRTBMalVpSUhJOUlqRXVPQ0l2UGdvOFkybHlZMnhsSUdOc1lYTnpQU0p6ZERFaUlHTjRQU0kwTGpnaUlHTjVQU0l5TWk0eklpQnlQU0l4TGpnaUx6NEtQQzl6ZG1jK0NnPT08L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgOTYzLjYxMzggNTQ3Ljg5MzEpIiBzdHlsZT0iZm9udC1mYW1pbHk6J0tvekdvUHI2Ti1SZWd1bGFyLTgzcHYtUktTSi1IJzsgZm9udC1zaXplOjEycHg7Ij5kYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NEtQQ0V0TFNCSFpXNWxjbUYwYjNJNklFRmtiMkpsSUVsc2JIVnpkSEpoZEc5eUlESTFMakF1TUN3Z1UxWkhJRVY0Y0c5eWRDQlFiSFZuTFVsdUlDNGdVMVpISUZabGNuTnBiMjQ2SURZdU1EQWdRblZwYkdRZ01Da2dJQzB0UGdvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJdU9Eck9PQ3BPT0RwT09EdkY4eElpQm1iMk4xYzJGaWJHVTlJbVpoYkhObElnb0pJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWlCMmFXVjNRbTk0UFNJd0lEQWdNamtnTWpraUNna2djM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ01qa2dNams3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNEtQSE4wZVd4bElIUjVjR1U5SW5SbGVIUXZZM056SWo0S0NTNXpkREI3Wm1sc2JEcHViMjVsTzNOMGNtOXJaVG9qTWtKQlFVRkJPM04wY205clpTMTNhV1IwYURveU8zTjBjbTlyWlMxc2FXNWxZMkZ3T25KdmRXNWtPM04wY205clpTMXRhWFJsY214cGJXbDBPakV3TzMwS0NTNXpkREY3Wm1sc2JEb2pNa0pCUVVGQk8zMEtQQzl6ZEhsc1pUNEtQR2MrQ2drOGJHbHVaU0JqYkdGemN6MGljM1F3SWlCNE1UMGlNVEF1TmlJZ2VURTlJall1TmlJZ2VESTlJakkwTGpVaUlIa3lQU0kyTGpZaUx6NEtQQzluUGdvOFp6NEtDVHhzYVc1bElHTnNZWE56UFNKemREQWlJSGd4UFNJeE1DNDJJaUI1TVQwaU1UUXVOU0lnZURJOUlqSTBMalVpSUhreVBTSXhOQzQxSWk4K0Nqd3ZaejRLUEdjK0NnazhiR2x1WlNCamJHRnpjejBpYzNRd0lpQjRNVDBpTVRBdU5pSWdlVEU5SWpJeUxqUWlJSGd5UFNJeU5DNDFJaUI1TWowaU1qSXVOQ0l2UGdvOEwyYytDanhqYVhKamJHVWdZMnhoYzNNOUluTjBNU0lnWTNnOUlqUXVPQ0lnWTNrOUlqWXVOeUlnY2owaU1TNDRJaTgrQ2p4amFYSmpiR1VnWTJ4aGMzTTlJbk4wTVNJZ1kzZzlJalF1T0NJZ1kzazlJakUwTGpVaUlISTlJakV1T0NJdlBnbzhZMmx5WTJ4bElHTnNZWE56UFNKemRERWlJR040UFNJMExqZ2lJR041UFNJeU1pNHpJaUJ5UFNJeExqZ2lMejRLUEM5emRtYytDZz09PC90ZXh0Pgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMi40LDQuN2MtMC4xLDAuOS0wLjIsMS43LTAuMiwzLjFWMTZjMCw0LjgtMi44LDcuNC03LjksNy40Yy0yLjYsMC00LjctMC44LTYtMi4yYy0xLjItMS4zLTEuNy0zLTEuNy01LjMKCQlWNy45YzAtMS40LDAtMi4zLTAuMi0zLjJoMy40QzkuNyw1LjUsOS43LDYuNCw5LjcsNy45VjE2YzAsMy4xLDEuNiw0LjgsNC43LDQuOGMzLjEsMCw0LjctMS42LDQuNy00LjhWNy45YzAtMS41LDAtMi4zLTAuMi0zLjIKCQlIMjIuNHoiLz4KPC9nPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iNS44IiB5MT0iMjYuMSIgeDI9IjIzIiB5Mj0iMjYuMSIvPgo8L3N2Zz4K";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_ul[MathTOUCH.MTEditor_AREA_NUM]);
                
        //**Left align**//
        MathTOUCH.MTEditor_i_la.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_la[MathTOUCH.MTEditor_AREA_NUM].title="Left align"
        MathTOUCH.MTEditor_i_la[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_la[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc('justifyleft');
        }
        MathTOUCH.MTEditor_i_la[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjMuOCIgeTE9IjQuNyIgeDI9IjI1LjMiIHkyPSI0LjciLz4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjMuOCIgeTE9IjExLjEiIHgyPSIxNy42IiB5Mj0iMTEuMSIvPgo8bGluZSBjbGFzcz0ic3QwIiB4MT0iMy44IiB5MT0iMTcuNSIgeDI9IjI1LjMiIHkyPSIxNy41Ii8+CjxsaW5lIGNsYXNzPSJzdDAiIHgxPSIzLjgiIHkxPSIyMy45IiB4Mj0iMTcuNiIgeTI9IjIzLjkiLz4KPC9zdmc+Cg==";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_la[MathTOUCH.MTEditor_AREA_NUM]);
                
        //**Center align**//
        MathTOUCH.MTEditor_i_ca.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_ca[MathTOUCH.MTEditor_AREA_NUM].title="Center align"
        MathTOUCH.MTEditor_i_ca[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_ca[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc('justifycenter' , '', '', mtEditareaId);
        }
        MathTOUCH.MTEditor_i_ca[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjMuOCIgeTE9IjQuNyIgeDI9IjI1LjMiIHkyPSI0LjciLz4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjcuNiIgeTE9IjExLjEiIHgyPSIyMS41IiB5Mj0iMTEuMSIvPgo8bGluZSBjbGFzcz0ic3QwIiB4MT0iMy44IiB5MT0iMTcuNSIgeDI9IjI1LjMiIHkyPSIxNy41Ii8+CjxsaW5lIGNsYXNzPSJzdDAiIHgxPSI3LjYiIHkxPSIyMy45IiB4Mj0iMjEuNSIgeTI9IjIzLjkiLz4KPC9zdmc+Cg==";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_ca[MathTOUCH.MTEditor_AREA_NUM]);
                
        //**Right align**//
        MathTOUCH.MTEditor_i_ra.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_ra[MathTOUCH.MTEditor_AREA_NUM].title="Right align"
        MathTOUCH.MTEditor_i_ra[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_ra[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc('justifyright' , '', '', mtEditareaId);
        }
        MathTOUCH.MTEditor_i_ra[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjMuOCIgeTE9IjQuNyIgeDI9IjI1LjMiIHkyPSI0LjciLz4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjExLjUiIHkxPSIxMS4xIiB4Mj0iMjUuMyIgeTI9IjExLjEiLz4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjMuOCIgeTE9IjE3LjUiIHgyPSIyNS4zIiB5Mj0iMTcuNSIvPgo8bGluZSBjbGFzcz0ic3QwIiB4MT0iMTEuNSIgeTE9IjIzLjkiIHgyPSIyNS4zIiB5Mj0iMjMuOSIvPgo8L3N2Zz4K";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_ra[MathTOUCH.MTEditor_AREA_NUM]);
                
        //**Numbered list**//
        MathTOUCH.MTEditor_i_nl.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_nl[MathTOUCH.MTEditor_AREA_NUM].title="Numbered list"
        MathTOUCH.MTEditor_i_nl[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_nl[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc( 'insertorderedlist' , '', '', mtEditareaId);
        }
        MathTOUCH.MTEditor_i_nl[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojMkJBQUFBO30KPC9zdHlsZT4KPGc+Cgk8bGluZSBjbGFzcz0ic3QwIiB4MT0iMTAuNiIgeTE9IjYuNiIgeDI9IjI0LjUiIHkyPSI2LjYiLz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zLjgsMy42YzAuMywwLDAuNCwwLDAuOCwwaDAuOWMwLjUsMCwwLjYsMCwwLjksMGMwLDAuNCwwLDAuNywwLDEuMXYzLjdjMCwwLjQsMCwwLjcsMC4xLDEuMUg0LjkKCQkJYzAtMC4zLDAuMS0wLjcsMC4xLTEuMVY0LjlINC43Yy0wLjMsMC0wLjUsMC0wLjksMFYzLjZ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQuMiwxNy41Yy0wLjYsMC0wLjgsMC0xLjEsMGMwLTAuMywwLjEtMC42LDAuMS0wLjhjMC4yLTAuNiwwLjUtMS4xLDEtMS42YzAuMy0wLjIsMC41LTAuNCwxLjItMC45CgkJCWMwLjYtMC40LDAuNy0wLjYsMC43LTAuOWMwLTAuMy0wLjMtMC42LTAuNy0wLjZjLTAuMywwLTAuNiwwLjEtMC43LDAuNGMtMC4xLDAuMi0wLjEsMC4zLTAuMiwwLjZsLTEuNS0wLjIKCQkJYzAuMS0wLjYsMC4yLTAuOSwwLjUtMS4yYzAuNC0wLjUsMS0wLjcsMS45LTAuN2MwLjksMCwxLjcsMC4zLDIsMC45YzAuMiwwLjIsMC4yLDAuNSwwLjIsMC44YzAsMC41LTAuMiwwLjktMC42LDEuMwoJCQljLTAuMiwwLjItMC4zLDAuMy0xLDAuN2MtMC42LDAuNC0wLjksMC43LTEsMWgxLjZjMC41LDAsMC44LDAsMS4xLDB2MS4zYy0wLjQsMC0wLjcsMC0xLjIsMEg0LjJ6Ii8+CgkJPHBhdGggY2xhc3M9InN0MSIgZD0iTTQuNiwyMy43YzAsMC4yLDAuMSwwLjMsMC4yLDAuNGMwLjIsMC4yLDAuNSwwLjMsMC44LDAuM2MwLjUsMCwwLjktMC4zLDAuOS0wLjdjMC0wLjMtMC4xLTAuNS0wLjQtMC42CgkJCWMtMC4yLTAuMS0wLjQtMC4xLTAuNy0wLjFjLTAuMywwLTAuNiwwLTAuOSwwdi0xLjJjMC4yLDAsMC41LDAsMC43LDBjMC43LDAsMS0wLjIsMS0wLjdjMC0wLjQtMC4zLTAuNi0wLjctMC42CgkJCWMtMC41LDAtMC43LDAuMi0wLjksMC42bC0xLjUtMC4yYzAuMS0wLjQsMC4yLTAuNiwwLjUtMC45YzAuNC0wLjUsMS4xLTAuNywxLjktMC43YzAuOCwwLDEuNCwwLjIsMS44LDAuNmMwLjMsMC4zLDAuNCwwLjYsMC40LDEKCQkJYzAsMC43LTAuNCwxLjItMS4yLDEuNGMwLjQsMC4xLDAuNywwLjIsMC45LDAuNGMwLjMsMC4zLDAuNSwwLjYsMC41LDFjMCwwLjQtMC4xLDAuNy0wLjMsMC45Yy0wLjIsMC4yLTAuNCwwLjQtMC43LDAuNQoJCQljLTAuNCwwLjItMC45LDAuMy0xLjUsMC4zYy0wLjYsMC0xLjMtMC4xLTEuNi0wLjRjLTAuMy0wLjItMC42LTAuNS0wLjctMC45YzAtMC4xLTAuMS0wLjItMC4xLTAuNEw0LjYsMjMuN3oiLz4KCTwvZz4KPC9nPgo8Zz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxMC42IiB5MT0iMTQuNSIgeDI9IjI0LjUiIHkyPSIxNC41Ii8+CjwvZz4KPGc+Cgk8bGluZSBjbGFzcz0ic3QwIiB4MT0iMTAuNiIgeTE9IjIyLjQiIHgyPSIyNC41IiB5Mj0iMjIuNCIvPgo8L2c+Cjwvc3ZnPgo=";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_nl[MathTOUCH.MTEditor_AREA_NUM]);
                
        //**Dotted list**//
        MathTOUCH.MTEditor_i_dl.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_dl[MathTOUCH.MTEditor_AREA_NUM].title="Dotted list"
        MathTOUCH.MTEditor_i_dl[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_dl[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc('insertunorderedlist', '', '', mtEditareaId );
        }
        MathTOUCH.MTEditor_i_dl[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojMkJBQUFBO30KPC9zdHlsZT4KPGc+Cgk8bGluZSBjbGFzcz0ic3QwIiB4MT0iMTAuNiIgeTE9IjYuNiIgeDI9IjI0LjUiIHkyPSI2LjYiLz4KPC9nPgo8Zz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIxMC42IiB5MT0iMTQuNSIgeDI9IjI0LjUiIHkyPSIxNC41Ii8+CjwvZz4KPGc+Cgk8bGluZSBjbGFzcz0ic3QwIiB4MT0iMTAuNiIgeTE9IjIyLjQiIHgyPSIyNC41IiB5Mj0iMjIuNCIvPgo8L2c+CjxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjQuOCIgY3k9IjYuNyIgcj0iMS44Ii8+CjxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjQuOCIgY3k9IjE0LjUiIHI9IjEuOCIvPgo8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI0LjgiIGN5PSIyMi4zIiByPSIxLjgiLz4KPC9zdmc+Cg==";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_dl[MathTOUCH.MTEditor_AREA_NUM]);
                
        //**Quote**//
        MathTOUCH.MTEditor_i_q.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_q[MathTOUCH.MTEditor_AREA_NUM].title="Quote"
        MathTOUCH.MTEditor_i_q[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_q[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtTextareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc( 'formatblock','blockquote', '', mtEditareaId);
        }
        MathTOUCH.MTEditor_i_q[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMkJBQUFBO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMuNiw2LjR2Mi41Yy0xLDAuMy0xLjcsMC42LTIuMiwxLjFzLTAuOSwxLjEtMS4yLDEuOGMtMC4zLDAuNy0wLjQsMS42LTAuNCwyLjZjMS4yLDAsMi4yLDAuNCwyLjgsMS4xCgkJczAuOSwxLjUsMC45LDIuMmMwLDAuOS0wLjMsMS43LTEsMi4zcy0xLjQsMS0yLjMsMWMtMS4xLDAtMi4xLTAuNS0yLjktMS41Yy0wLjgtMS0xLjItMi4zLTEuMi00YzAtMS41LDAuMy0yLjksMS00LjIKCQlDNy42LDEwLjEsOC41LDksOS42LDguMUMxMC43LDcuMiwxMi4xLDYuNiwxMy42LDYuNHogTTIzLjUsNi40djIuNWMtMSwwLjMtMS43LDAuNi0yLjIsMS4xYy0wLjUsMC41LTAuOSwxLjEtMS4yLDEuOAoJCWMtMC4zLDAuNy0wLjQsMS42LTAuNCwyLjZjMS4yLDAsMi4xLDAuNCwyLjcsMS4xYzAuNiwwLjcsMC45LDEuNSwwLjksMi4yYzAsMC45LTAuMywxLjctMSwyLjNjLTAuNywwLjYtMS40LDEtMi4zLDEKCQljLTEuMSwwLTIuMS0wLjUtMi45LTEuNWMtMC44LTEtMS4yLTIuMy0xLjItNGMwLTEuNSwwLjMtMi45LDEtNC4yYzAuNi0xLjMsMS41LTIuNCwyLjYtMy4zQzIwLjUsNy4yLDIxLjksNi42LDIzLjUsNi40eiIvPgo8L2c+Cjwvc3ZnPgo=";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_q[MathTOUCH.MTEditor_AREA_NUM]);

   
        //**Add indentation**//
        MathTOUCH.MTEditor_i_ai.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_ai[MathTOUCH.MTEditor_AREA_NUM].title="Add indentation"
        MathTOUCH.MTEditor_i_ai[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_ai[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtDivId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc('indent', '', '', mtEditareaId);
        }
        MathTOUCH.MTEditor_i_ai[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDo1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojMkJBQUFBO30KPC9zdHlsZT4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjMuOCIgeTE9IjQuNyIgeDI9IjI1LjMiIHkyPSI0LjciLz4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjE0LjUiIHkxPSIxMS4xIiB4Mj0iMjUuMyIgeTI9IjExLjEiLz4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjMuOCIgeTE9IjIzLjkiIHgyPSIyNS4zIiB5Mj0iMjMuOSIvPgo8bGluZSBjbGFzcz0ic3QwIiB4MT0iMTQuNSIgeTE9IjE3LjUiIHgyPSIyNS4zIiB5Mj0iMTcuNSIvPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMi41IiB5MT0iMTQuNSIgeDI9IjcuNiIgeTI9IjE0LjUiLz4KPHBvbHlnb24gY2xhc3M9InN0MiIgcG9pbnRzPSIxMS45LDE0LjUgNi43LDguNSA2LjcsMjAuNSAiLz4KPC9zdmc+Cg==";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_ai[MathTOUCH.MTEditor_AREA_NUM]);
            
        //**Delete indentation**//
        MathTOUCH.MTEditor_i_di.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_di[MathTOUCH.MTEditor_AREA_NUM].title="Delete indentation"
        MathTOUCH.MTEditor_i_di[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_di[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtDivId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc('outdent', '', '', mtEditareaId);
        }
        MathTOUCH.MTEditor_i_di[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDo1O3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojMkJBQUFBO30KPC9zdHlsZT4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjMuOCIgeTE9IjQuNyIgeDI9IjI1LjMiIHkyPSI0LjciLz4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjMuOCIgeTE9IjIzLjkiIHgyPSIyNS4zIiB5Mj0iMjMuOSIvPgo8Zz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIzLjgiIHkxPSIxMS4xIiB4Mj0iMTQuNiIgeTI9IjExLjEiLz4KCTxsaW5lIGNsYXNzPSJzdDAiIHgxPSIzLjgiIHkxPSIxNy41IiB4Mj0iMTQuNiIgeTI9IjE3LjUiLz4KCTxsaW5lIGNsYXNzPSJzdDEiIHgxPSIyNi42IiB5MT0iMTQuNSIgeDI9IjIxLjUiIHkyPSIxNC41Ii8+Cgk8cG9seWdvbiBjbGFzcz0ic3QyIiBwb2ludHM9IjE3LjIsMTQuNSAyMi40LDguNSAyMi40LDIwLjUgCSIvPgo8L2c+Cjwvc3ZnPgo=";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_di[MathTOUCH.MTEditor_AREA_NUM]);
            
        //**Hyperlink**//
        MathTOUCH.MTEditor_i_hl.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_hl[MathTOUCH.MTEditor_AREA_NUM].title="Hyperlink"
        MathTOUCH.MTEditor_i_hl[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_hl[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            var sLnk=prompt('Write the URL here','http:\/\/');if(sLnk&&sLnk!=''&&sLnk!='http://'){formatDoc( 'createlink',sLnk)}
        }
        MathTOUCH.MTEditor_i_hl[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTQuNSwxNS45bC0xLjMtMWMtMS41LTEuMi0xLjgtMy4zLTAuNy00LjlsNC43LTYuMmMxLjItMS41LDMuMy0xLjgsNC45LTAuN2wxLjMsMWMxLjUsMS4yLDEuOCwzLjMsMC43LDQuOQoJCWwtMy40LDQuNCIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2LDEzLjFsMS4zLDFjMS41LDEuMiwxLjgsMy4zLDAuNyw0LjlsLTQuNyw2LjJjLTEuMiwxLjUtMy4zLDEuOC00LjksMC43bC0xLjMtMWMtMS41LTEuMi0xLjgtMy4zLTAuNy00LjkKCQlsMy40LTQuNCIvPgo8L2c+Cjwvc3ZnPgo=";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_hl[MathTOUCH.MTEditor_AREA_NUM]);
            
        //**Remove Hyperlink**//
        MathTOUCH.MTEditor_i_uhl.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_uhl[MathTOUCH.MTEditor_AREA_NUM].title="Remove Hyperlink"
        MathTOUCH.MTEditor_i_uhl[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_uhl[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
            let mtDivId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","");
            let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
            formatDoc('unlink', '', '', mtEditareaId);
        }
        MathTOUCH.MTEditor_i_uhl[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojQTZERUUyO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDowLjc1O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTMuMiwxNC45Yy0xLjUtMS4yLTEuOC0zLjMtMC43LTQuOWw0LjctNi4yYzEuMi0xLjUsMy4zLTEuOCw0LjktMC43bDEuMywxYzEuNSwxLjIsMS44LDMuMywwLjcsNC45bC0zLjQsNC40CgkJIi8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTcuMywxNC4xYzEuNSwxLjIsMS44LDMuMywwLjcsNC45bC00LjcsNi4yYy0xLjIsMS41LTMuMywxLjgtNC45LDAuN2wtMS4zLTFjLTEuNS0xLjItMS44LTMuMy0wLjctNC45CgkJbDMuNC00LjQiLz4KPC9nPgo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMCwyOSIvPgo8Zz4KCTxsaW5lIGNsYXNzPSJzdDIiIHgxPSIxMS4zIiB5MT0iNS41IiB4Mj0iOS40IiB5Mj0iMSIvPgoJPGxpbmUgY2xhc3M9InN0MiIgeDE9IjYiIHkxPSIxMSIgeDI9IjEiIHkyPSI4LjYiLz4KCTxsaW5lIGNsYXNzPSJzdDIiIHgxPSIzLjciIHkxPSIzLjciIHgyPSI4LjEiIHkyPSI4LjEiLz4KPC9nPgo8Zz4KCTxsaW5lIGNsYXNzPSJzdDIiIHgxPSIyMy41IiB5MT0iMTcuNyIgeDI9IjI4IiB5Mj0iMTkuNiIvPgoJPGxpbmUgY2xhc3M9InN0MiIgeDE9IjE4IiB5MT0iMjMiIHgyPSIyMC4zIiB5Mj0iMjgiLz4KCTxsaW5lIGNsYXNzPSJzdDIiIHgxPSIyNC44IiB5MT0iMjQuOCIgeDI9IjIwLjkiIHkyPSIyMC45Ii8+CjwvZz4KPC9zdmc+Cg==";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_uhl[MathTOUCH.MTEditor_AREA_NUM]);
                
        //**Cut**//
        MathTOUCH.MTEditor_i_cut.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_cut[MathTOUCH.MTEditor_AREA_NUM].title="Cut"
        MathTOUCH.MTEditor_i_cut[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_cut[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
             let mtEditareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","mteditorEditarea_");
             document.getElementById(mtEditareaId).focus();
             MathTOUCH.MTEditorCut(mtEditareaId, true);
        }
        MathTOUCH.MTEditor_i_cut[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZFOEFFO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojRkZGRkZGO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojRkZGRkZGO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qze2ZpbGw6IzJCQUFBQTtzdHJva2U6IzJCQUFBQTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Q0e2ZpbGw6IzJCQUFBQTt9Cgkuc3Q1e2ZpbGw6bm9uZTtzdHJva2U6IzJCQUFBQTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Q2e2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxyZWN0IHg9IjEyLjIiIHk9Ii0zMyIgY2xhc3M9InN0MCIgd2lkdGg9IjE1LjciIGhlaWdodD0iMTkuOSIvPgo8Zz4KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMzIuNywtMTEuNSAxOS4xLC0xMS41IDE5LjEsLTI3LjggMjYuOSwtMjcuOCAyNi45LC0yMS4yIDMyLjcsLTIxLjIgCSIvPgoJPGxpbmUgY2xhc3M9InN0MiIgeDE9IjI3LjkiIHkxPSItMjciIHgyPSIzMi4yIiB5Mj0iLTIyLjIiLz4KPC9nPgo8Zz4KCTxyZWN0IHg9IjE2LjYiIHk9Ii0zNC41IiBjbGFzcz0ic3QzIiB3aWR0aD0iNi45IiBoZWlnaHQ9IjMuMSIvPgoJPGVsbGlwc2UgY2xhc3M9InN0NCIgY3g9IjIwLjEiIGN5PSItMzUuNyIgcng9IjIuOCIgcnk9IjIuMiIvPgo8L2c+CjxjaXJjbGUgY2xhc3M9InN0NSIgY3g9IjcuNSIgY3k9IjIxLjQiIHI9IjQuOCIvPgo8Y2lyY2xlIGNsYXNzPSJzdDUiIGN4PSIyMS40IiBjeT0iMjEuNCIgcj0iNC44Ii8+CjxwYXRoIGNsYXNzPSJzdDQiIGQ9Ik0yMy41LDIuMUw4LjgsMTcuNGMxLjEsMS4xLDIuOCwxLjEsMy43LDAuMUwyMy44LDUuOUMyNC43LDQuOSwyNC42LDMuMiwyMy41LDIuMXoiLz4KPHBhdGggY2xhc3M9InN0NCIgZD0iTTUuMywyLjFMMjAsMTcuNGMtMS4xLDEuMS0yLjgsMS4xLTMuNywwLjFMNS4xLDUuOUM0LjEsNC45LDQuMiwzLjIsNS4zLDIuMXoiLz4KPGNpcmNsZSBjbGFzcz0ic3Q2IiBjeD0iMTQuNSIgY3k9IjEzLjkiIHI9IjAuOSIvPgo8L3N2Zz4K";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_cut[MathTOUCH.MTEditor_AREA_NUM]);
                
        //**Copy**//
        MathTOUCH.MTEditor_i_c.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_c[MathTOUCH.MTEditor_AREA_NUM].title="Copy"
        MathTOUCH.MTEditor_i_c[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_c[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
             let mtEditareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","mteditorEditarea_");
             document.getElementById(mtEditareaId).focus();
             MathTOUCH.MTEditorCopy(mtEditareaId);
        }
        MathTOUCH.MTEditor_i_c[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZGRkZGO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojRkZGRkZGO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxyZWN0IHg9IjMuNiIgeT0iOS4zIiBjbGFzcz0ic3QwIiB3aWR0aD0iMTMuNiIgaGVpZ2h0PSIxNi4yIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMjUuMSwxOSAxMS41LDE5IDExLjUsMi44IDE5LjMsMi44IDE5LjMsOS4zIDI1LjEsOS4zICIvPgo8bGluZSBjbGFzcz0ic3QxIiB4MT0iMjAuMyIgeTE9IjMuNSIgeDI9IjI0LjYiIHkyPSI4LjQiLz4KPC9zdmc+Cg==";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_c[MathTOUCH.MTEditor_AREA_NUM]);
                
       
                                      
        MathTOUCH.MTEditor_i_p.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_p[MathTOUCH.MTEditor_AREA_NUM].title="Paste"
        MathTOUCH.MTEditor_i_p[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_p[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
                        let mtEditareaId = e.target.parentNode.parentNode.id.replace("mteditorDiv_","mteditorEditarea_");
                        document.getElementById(mtEditareaId).focus();
                        let mtDivId = e.target.parentNode.parentNode.id;
                        MathTOUCH.MTEditorPaste(mtDivId, true);
        }
        MathTOUCH.MTEditor_i_p[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojRkZFOEFFO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojRkZGRkZGO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDJ7ZmlsbDojRkZGRkZGO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnNxdWFyZTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qze2ZpbGw6IzJCQUFBQTtzdHJva2U6IzJCQUFBQTtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Q0e2ZpbGw6IzJCQUFBQTt9Cjwvc3R5bGU+CjxyZWN0IHg9IjQuNiIgeT0iNC45IiBjbGFzcz0ic3QwIiB3aWR0aD0iMTUuNyIgaGVpZ2h0PSIxOS45Ii8+CjxnPgoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIyNS4xLDI2LjMgMTEuNSwyNi4zIDExLjUsMTAuMSAxOS4zLDEwLjEgMTkuMywxNi43IDI1LjEsMTYuNyAJIi8+Cgk8bGluZSBjbGFzcz0ic3QyIiB4MT0iMjAuMyIgeTE9IjEwLjgiIHgyPSIyNC42IiB5Mj0iMTUuNyIvPgo8L2c+CjxnPgoJPHJlY3QgeD0iOSIgeT0iMy4zIiBjbGFzcz0ic3QzIiB3aWR0aD0iNi45IiBoZWlnaHQ9IjMuMSIvPgoJPGVsbGlwc2UgY2xhc3M9InN0NCIgY3g9IjEyLjUiIGN5PSIyLjIiIHJ4PSIyLjgiIHJ5PSIyLjIiLz4KPC9nPgo8L3N2Zz4K";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_p[MathTOUCH.MTEditor_AREA_NUM]);
        
                                      
        //**Insert image**//
        MathTOUCH.MTEditor_i_iimg.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_iimg[MathTOUCH.MTEditor_AREA_NUM].title="Insert image"
        MathTOUCH.MTEditor_i_iimg[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"

        MathTOUCH.MTEditor_i_iimg[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
                        let mtEditareaId = e.target.parentNode.parentNode.id;
                        mtEditareaId = mtEditareaId.replace("mteditorDiv_","mteditorEditarea_");
                        document.getElementById(mtEditareaId).focus();
                        let range = window.getSelection().getRangeAt(0);
                        const oldConent = document.createTextNode(range.toString());
                        const newElement = document.createElement("span");
                        newElement.id = "mt_caret";
                        newElement.append(oldConent);
                        range.deleteContents();
                        range.insertNode(newElement);
                        document.getElementById("modal").style.display="block";
                        document.getElementById("imgmenu").style.display="block";
                        MathTOUCH.MTEditor_imgMenu_origin = "" + e.target.parentNode.parentNode.id;
                        MathTOUCH.MTEditor_imgMenu_inputURL.value = "";
                        MathTOUCH.MTEditor_imgMenu_inputALT.value = "";
                        MathTOUCH.MTEditor_imgMenu_inputsize_w.value = "";
                        MathTOUCH.MTEditor_imgMenu_inputsize_h.value = "";
                        MathTOUCH.MTEditor_imgMenu_img_preview.src = "";
                        MathTOUCH.MTEditor_imgMenu_inputURL.focus();
        }

        MathTOUCH.MTEditor_i_iimg[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkFBQkJCO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzJBQUJCQjt9Cjwvc3R5bGU+Cjxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjEyLC0yNy43IDE2LjQsLTIwLjcgMjAuOCwtNDAuOSAzNi4xLC00MC45ICIvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0zMS0yMy4ybC0yLjMtMy4zbC0yLjMsMy4zYy0wLjMsMC41LTAuNiwwLjgtMC44LDFzLTAuNSwwLjMtMC45LDAuM3MtMC43LTAuMS0xLTAuNGMtMC4zLTAuMi0wLjQtMC41LTAuNC0wLjgKCQlzMC4yLTAuOCwwLjYtMS40bDIuOC00bC0yLjUtMy40Yy0wLjQtMC42LTAuNi0xLTAuNi0xLjRjMC0wLjMsMC4xLTAuNiwwLjQtMC44YzAuMy0wLjIsMC42LTAuNCwxLTAuNGMwLjQsMCwwLjcsMC4xLDAuOSwwLjMKCQljMC4yLDAuMiwwLjUsMC41LDAuOCwxbDIsMi44bDItMi44YzAuMy0wLjUsMC42LTAuOCwwLjgtMWMwLjItMC4yLDAuNS0wLjMsMC45LTAuM2MwLjQsMCwwLjcsMC4xLDEsMC4zYzAuMywwLjIsMC40LDAuNSwwLjQsMC44CgkJYzAsMC4yLTAuMSwwLjUtMC4yLDAuN2MtMC4xLDAuMi0wLjMsMC41LTAuNSwwLjhsLTIuNSwzLjRsMi44LDRjMC40LDAuNiwwLjcsMS4xLDAuNywxLjRzLTAuMSwwLjYtMC40LDAuOHMtMC42LDAuNC0xLDAuNAoJCWMtMC40LDAtMC43LTAuMS0wLjktMC4zQzMxLjYtMjIuNCwzMS4zLTIyLjcsMzEtMjMuMnoiLz4KPC9nPgo8cmVjdCB4PSIyLjUiIHk9IjUuNyIgY2xhc3M9InN0MCIgd2lkdGg9IjI0LjEiIGhlaWdodD0iMTcuNiIvPgo8Y2lyY2xlIGNsYXNzPSJzdDEiIGN4PSI4IiBjeT0iMTIiIHI9IjIuNSIvPgo8cG9seWdvbiBjbGFzcz0ic3QxIiBwb2ludHM9IjIuNSwyMy4zIDI1LjIsMjMuMyAyNS4yLDE3LjkgMTYuOSwxMS4yIDExLDE4LjIgNi41LDE2LjEgIi8+Cjwvc3ZnPgo=";
        MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_iimg[MathTOUCH.MTEditor_AREA_NUM]);
            
        //**Menu3**//
        MathTOUCH.MTEditor_MENU3.push(document.createElement("div"));
        MathTOUCH.MTEditor_MENU3[MathTOUCH.MTEditor_AREA_NUM].id = "btn_menu3_" + mtTextareaId;
        MathTOUCH.MTEditor_MENU3[MathTOUCH.MTEditor_AREA_NUM].className = "btn_menu";
        MathTOUCH.MTEditor_MENU3[MathTOUCH.MTEditor_AREA_NUM].contentEditable = false;
            
        //**mt**//
        MathTOUCH.MTEditor_i_mtidv.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_mtidv[MathTOUCH.MTEditor_AREA_NUM].id = "mt_" + mtTextareaId;
        MathTOUCH.MTEditor_i_mtidv[MathTOUCH.MTEditor_AREA_NUM].className = "mt_Button";
        MathTOUCH.MTEditor_i_mtidv[MathTOUCH.MTEditor_AREA_NUM].title = "数式エディタ（ctrl+e）"
        MathTOUCH.MTEditor_i_mtidv[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkFBQkJCO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZpbGw6IzJBQUJCQjt9Cjwvc3R5bGU+Cjxwb2x5bGluZSBjbGFzcz0ic3QwIiBwb2ludHM9IjQuMSwxNy44IDcuOCwyMy42IDExLjQsNi45IDI0LjEsNi45ICIvPgo8Zz4KCTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xOS45LDIxLjVMMTgsMTguOGwtMS45LDIuN2MtMC4yLDAuNC0wLjUsMC43LTAuNywwLjhjLTAuMiwwLjItMC40LDAuMi0wLjcsMC4yYy0wLjMsMC0wLjYtMC4xLTAuOC0wLjMKCQljLTAuMi0wLjItMC4zLTAuNC0wLjMtMC43czAuMi0wLjcsMC41LTEuMmwyLjMtMy4zbC0yLjEtMi44Yy0wLjMtMC41LTAuNS0wLjgtMC41LTEuMmMwLTAuMiwwLjEtMC41LDAuMy0wLjdzMC41LTAuMywwLjgtMC4zCgkJYzAuMywwLDAuNiwwLjEsMC43LDAuMnMwLjQsMC40LDAuNywwLjhsMS43LDIuM2wxLjctMi4zYzAuMi0wLjQsMC41LTAuNywwLjctMC44YzAuMi0wLjIsMC40LTAuMiwwLjctMC4yYzAuMywwLDAuNiwwLjEsMC44LDAuMgoJCXMwLjMsMC40LDAuMywwLjdjMCwwLjItMC4xLDAuNC0wLjIsMC42Yy0wLjEsMC4yLTAuMiwwLjQtMC40LDAuN2wtMi4xLDIuOGwyLjMsMy4zYzAuMywwLjUsMC42LDAuOSwwLjYsMS4yYzAsMC4yLTAuMSwwLjUtMC4zLDAuNwoJCXMtMC41LDAuMy0wLjgsMC4zcy0wLjYtMC4xLTAuNy0wLjJDMjAuNCwyMi4yLDIwLjEsMjEuOSwxOS45LDIxLjV6Ii8+CjwvZz4KPC9zdmc+Cg==";

        MathTOUCH.MTEditor_i_mtidv[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
                        let mtDivId = e.target.parentNode.parentNode.id;
                        mtEditareaId = mtDivId.replace("mteditorDiv_","mteditorEditarea_");
                        document.getElementById(mtEditareaId).focus();
                        let range = window.getSelection().getRangeAt(0);
                        const oldConent = document.createTextNode(range.toString());
                        const newElement = document.createElement("span");
                        newElement.id = "mt_caret";
                        newElement.append(oldConent);
                        range.deleteContents();
                        range.insertNode(newElement);
                        let outputid = e.target.parentNode.parentNode.id;
                        outputid = outputid.replace("mteditorDiv_", "");
                        MathTOUCH.callMathTOUCH(e.target.parentNode.parentNode.lastChild.id, MathTOUCH.MTEditor_Fstyle, e.target.parentNode.parentNode.id, outputid);
        }
        
        MathTOUCH.MTEditor_MENU3[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_mtidv[MathTOUCH.MTEditor_AREA_NUM]);

        //**mtgraph**//
        MathTOUCH.MTEditor_i_mtg.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_mtg[MathTOUCH.MTEditor_AREA_NUM].title="mtgraph"
        MathTOUCH.MTEditor_i_mtg[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_mtg[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
                
        }
        MathTOUCH.MTEditor_i_mtg[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KCS5zdDF7ZmlsbDojMkJBQUFBO30KCS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGc+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjguNS04LjRjNS4yLDAsOS41LTMuMSw5LjUtN3YtMS40YzAtMy45LTQuMi03LTkuNS03SDE0LjQiLz4KCTxwb2x5Z29uIGNsYXNzPSJzdDEiIHBvaW50cz0iMTEuNCwtMjMuNyAyMi4yLC0zMi4zIDIyLjIsLTE1LjEgCSIvPgo8L2c+Cjxwb2x5bGluZSBjbGFzcz0ic3QyIiBwb2ludHM9IjIuNCw0LjYgMi40LDI1LjEgMjcuMiwyNS4xICIvPgo8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMi40LDguNGM0LjksMi4yLDIuOSwxMy41LDYuNCwxMy45YzMuNCwwLjQsMy43LTE0LjYsOS0xNC43YzUuNy0wLjEsNC4xLDE0LjcsOC40LDE0LjciLz4KPC9zdmc+Cg==";
        MathTOUCH.MTEditor_MENU3[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_mtg[MathTOUCH.MTEditor_AREA_NUM]);
                                      
        //**HTML**//
        MathTOUCH.MTEditor_i_code.push(document.createElement("img"));
        MathTOUCH.MTEditor_i_code[MathTOUCH.MTEditor_AREA_NUM].title="code"
        MathTOUCH.MTEditor_i_code[MathTOUCH.MTEditor_AREA_NUM].className="mteditorbtn"
        MathTOUCH.MTEditor_i_code[MathTOUCH.MTEditor_AREA_NUM].onclick = function (e){
                        MathTOUCH.changeCode(e);
        }
        MathTOUCH.MTEditor_i_code[MathTOUCH.MTEditor_AREA_NUM].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjkgMjkiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkgMjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMkJBQUFBO3N0cm9rZS13aWR0aDoxLjgxODk7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iMTcuNSwyNiAyNywxNC41IDE3LjUsMyAiLz4KPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iMTEuNiwyNiAyLjEsMTQuNSAxMS42LDMgIi8+Cjwvc3ZnPgo=";
        MathTOUCH.MTEditor_MENU3[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_i_code[MathTOUCH.MTEditor_AREA_NUM]);
        
        MathTOUCH.MTEditor_AREA[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_modal);
                        
        MathTOUCH.MTEditor_AREA[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_MENU1[MathTOUCH.MTEditor_AREA_NUM]);
        MathTOUCH.MTEditor_AREA[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_MENU2[MathTOUCH.MTEditor_AREA_NUM]);
        MathTOUCH.MTEditor_AREA[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_MENU3[MathTOUCH.MTEditor_AREA_NUM]);
        MathTOUCH.MTEditor_AREA[MathTOUCH.MTEditor_AREA_NUM].appendChild(MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM]);
        
        if(divHtml != ""){
                        MathTOUCH.getMTtextarea(mtTextareaId, divHtml);
        }
                                 
        $(document).on("dblclick", ".mteq", function (e) {
                        let mtEditareaId = e.target.dataset.editarea;
                        let mtDivId = e.target.parentNode.parentNode.id;
                        mtDivId = mtDivId.replace("mteditorDiv_", "");
                        let myimgId = this.id;
                        let myimg = document.getElementById(myimgId);
                        MathTOUCH.modifyEQ(myimgId, mtEditareaId, mtDivId);
        });
        
        $(document).on("dblclick", ".mtimg", function (e) {
            var insertImageCode = e.target;
            MathTOUCH.MTEditor_imgMenu_inputURL.value = insertImageCode.src;
            MathTOUCH.MTEditor_imgMenu_inputALT.value = insertImageCode.alt;
            MathTOUCH.MTEditor_imgMenu_inputsize_w.value = insertImageCode.width;
            MathTOUCH.MTEditor_imgMenu_inputsize_h.value = insertImageCode.height;
            MathTOUCH.MTEditor_imgMenu_img_preview.name = insertImageCode.name;
            document.getElementById("modal").style.display="block";
            document.getElementById("imgmenu").style.display="block";
            MathTOUCH.MTEditor_imgMenu_inputURL.focus();
            MathTOUCH.MTEditor_imgMenu_reEditing_flag = true;
        });

};

MathTOUCH.fontsizeCheck = function(){
                        let targetFS_ele = document.getElementById("mtsfs_mteditorEditarea_" + MathTOUCH.MTEditor_focusID);
                        if(targetFS_ele!=null){
                                if(MathTOUCH.MTEditor_Fstyle == 16){
                                    targetFS_ele.selectedIndex=2;
                                }else if(MathTOUCH.MTEditor_Fstyle == 10){
                                    targetFS_ele.selectedIndex=0;
                                }else if(MathTOUCH.MTEditor_Fstyle == 13){
                                    targetFS_ele.selectedIndex=1;
                                }else if(MathTOUCH.MTEditor_Fstyle == 18){
                                    targetFS_ele.selectedIndex=3;
                                }else if(MathTOUCH.MTEditor_Fstyle ==  24){
                                    targetFS_ele.selectedIndex=4;
                                }else if(MathTOUCH.MTEditor_Fstyle ==  32){
                                    targetFS_ele.selectedIndex=5;
                                }else if(MathTOUCH.MTEditor_Fstyle ==  48){
                                    targetFS_ele.selectedIndex=6;
                                }
                                document.execCommand('fontsize', false, (targetFS_ele.selectedIndex+1));
                        }
}
                                         
MathTOUCH.callMathTOUCH = function(mtEditareaId,fsize,mtDivId,outputid){
                        
    if(MathTOUCH.MTEditor_mtCheckFlag){
        window.alert("数式入力モードを終了してください。");
    }else{
        document.getElementById(mtEditareaId).setAttribute("contenteditable", "false");
        MathTOUCH.MTEditor_mtCheckFlag = true;
        var xtml = "";
        var new_imgid = Math.floor( Math.random() * (100000 + 1 - 1) ) + 1;
        var mt_eq = document.getElementById(mtEditareaId).querySelectorAll('img.mteq');
        mt_eq.forEach(function( element ) {
            var used_imgid = element.id.split('img_' + mtDivId + '_').join('');
            if(used_imgid == new_imgid){
                new_imgid = Math.floor( Math.random() * (100000 + 1 - 1) ) + 1;
            }
        });
        var imgid = "img_" + mtDivId + "_" + new_imgid;
        var mathdiv = document.getElementById(mtEditareaId);
        var orgimg = document.getElementById(imgid);
        var mtcanvas = document.createElement("canvas");
        mtcanvas.id = "mtcanvas";
        mtcanvas.className = "mtcanvas";
        if(orgimg==null || orgimg==undefined){
            document.getElementById("mtkeyboard_canvas").appendChild(mtcanvas);
        }else{
            mathdiv.replaceChild(mtcanvas,orgimg);
        }
        var mathtouch = new MathTOUCH.mathcanvas();
        var mtcandidateslist = document.createElement("div");
        mtcandidateslist.id = "candidates"
        if(MathTOUCH.Device == MathTOUCH.Device_SP || MathTOUCH.MTEditor || MathTOUCH.MC2){
            mtcanvas.appendChild(mtcandidateslist);
        }else{
            mathdiv.appendChild(mtcandidateslist);
        }
        if(MathTOUCH.Device != MathTOUCH.Device_SP){
            var caret_pos = $("#mt_caret").offset();
            $("#mt_keyboard").css("left",caret_pos.left);
            $("#mt_keyboard").css("top",caret_pos.top + $("#mt_caret").height());
        }
        document.getElementById(mtEditareaId).blur();
        mathtouch.init("", mtEditareaId, mtcanvas.id, mtcandidateslist.id, "", outputid, MathTOUCH.lang, xtml, imgid, fsize, MathTOUCH.SITEURL, MathTOUCH.OUTPUTIMGURL);
    }
};

MathTOUCH.modifyEQ = function(imgid, mtEditareaId, outputid){
    document.getElementById(mtEditareaId).focus();
    if(MathTOUCH.MTEditor_mtCheckFlag){
        window.alert("数式入力モードを終了してください。");
    }else{
        document.getElementById(mtEditareaId).setAttribute("contenteditable", "false");
        MathTOUCH.MTEditor_mtCheckFlag = true;
        var imgelement = document.getElementById(imgid);
        var selection = window.getSelection();
        selection.removeAllRanges();
        var mtcanvas = document.createElement("canvas");
        mtcanvas.id = "mtcanvas";
        mtcanvas.className = "mtcanvas";
        document.getElementById("mtkeyboard_canvas").appendChild(mtcanvas);
        $(imgelement).toggleClass("modifyeq");
        var mathtouch = new MathTOUCH.mathcanvas();
        var mtcandidateslist = document.createElement("div");
        mtcandidateslist.id = "candidates"
        mtcanvas.appendChild(mtcandidateslist);
        if(MathTOUCH.Device != MathTOUCH.Device_SP){
            
            var imgel_pos = imgelement.getBoundingClientRect();
            $("#mt_keyboard").css("left",imgel_pos.left);
            $("#mt_keyboard").css("top",imgel_pos.bottom);
        }
        mathtouch.init("", mtEditareaId, mtcanvas.id, mtcandidateslist.id, "", outputid ,MathTOUCH.lang, imgelement.dataset.xtml, imgid,imgelement.dataset.fsize, MathTOUCH.SITEURL, MathTOUCH.OUTPUTIMGURL);
    }

};



MathTOUCH.mc2callMT = function(){
    var node = "<span id='mt_caret'> </span>";
    var mt_editor = document.getElementById("mteditorEditarea_0");
    if(mt_editor.childNodes[0] === undefined){
        mt_editor.innerHTML = node;
    }else{
        document.execCommand('insertHTML', false, node);
    }
    MathTOUCH.callMathTOUCH('mteditorEditarea_0',18,'MTEDITOR_textArea','textArea');
}

MathTOUCH.setMTtextarea = function(mtEditareaId, mtTextareaId){
                        var range = document.createRange();
                        var mtEditarea = document.getElementById(mtEditareaId)
                        range.selectNode(mtEditarea);
                        documentFragment = range.cloneContents();
                        var mt_eq = documentFragment.querySelectorAll('img.mteq');
                        mt_eq.forEach(function( element ) {
                            var mttext =document.createTextNode("\\("+element.dataset.mathjax+"\\)");
                            element.replaceWith(mttext);
                        });
                        var mtdb_content = documentFragment.getElementById(mtEditareaId).innerHTML;
                        let mtdb_contentF = mtdb_content.replace('<div id=\"candidates\"></div>', "");
                        document.getElementById(mtTextareaId).value = mtdb_contentF;
                        
};
                                      
MathTOUCH.getMTtextarea = function(mtTextareaId, divHtml){
                        var mtEditareaId = "mteditorEditarea_" + mtTextareaId;
                        var mtDivId = "mteditorDiv_" + mtTextareaId;
                        var mtEditarea = document.getElementById(mtEditareaId);
                        mtEditarea.innerHTML = divHtml;
                        var TEX=new MathTOUCH.TeXParser();
                        var str=""
                        var imgheight;
                        var imgfsize=3;
                        var imgIDlist = new Array();
                        var new_imgid;
                        var terms = MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].innerHTML;
                        terms=terms.split(/\$|\\\(|\\\)|\\\[|\\\]/);
                        if(terms.length>0){
                            for(var i=0;i<terms.length;i++){
                                if(i%2==0){
                                    str=str+" "+terms[i];
                                    var s=0;
                                    var e=0;
                                    if(terms[i].includes("<font size=")){
                                        
                                        while(terms[i].indexOf("<font size=",s)!=-1){
                                            res = terms[i].indexOf("<font size=",s);
                                            s = res + 1;
                                        }
                                    }
                                    if(terms[i].includes("</font>")){
                                        
                                        while(terms[i].indexOf("</font>",e)!=-1){
                                            res = terms[i].indexOf("</font>",e);
                                            e = res + 1;
                                        }
                                    }
                                    if(s<e){
                                        imgfsize=3;
                                    }else if(s>e){
                                        imgfsize=terms[i].substr(s+11, 1);
                                    }
                                    
                                }else{
                                    var texex=TEX.parse(terms[i]);
                                    var xtml=texex.getKeyWords()+"@@@"+xtreeml.XtreeML(texex);
                                    var regEx=/\\/g;
                                    var xtml2=xtml.replace(regEx,"\\\\");
                                    regEx=/'/g;
                                    xtml2=xtml2.replace(regEx,"\\'");
                                    var str=str+"<img class=\"mteq\" style='vertical-align: middle;' src=\"";
                                    var ex=EXTML.parseAny(xtml);
                                    if(ex==null){
                                        alert("XTML:"+xtml2+"は式が正しくありません。");
                                        return "";
                                    }
                                    var rep = ex.toExRep();
                                    var canvasIMG = document.createElement("canvas");
                                    var ctxIMG = canvasIMG.getContext('2d');
                                    rep.sizeEx(ctxIMG,48);
                                    canvasIMG.width = rep.getWidth();
                                    canvasIMG.height = rep.getAscent()+rep.getDescent();
                                    rep.drawEx(ctxIMG,48,0,rep.getAscent());
                                    str=str+canvasIMG.toDataURL();
                                    str=str+"\" data-xtml='"+xtml+"' data-mathjax='"+terms[i]+"'";
                                    var csize = Math.floor(canvasIMG.height/48)
                                    if(imgfsize==3){
                                        ori_imgHeight = 24;
                                    }else if(imgfsize==4){
                                        ori_imgHeight = 32;
                                    }else if(imgfsize==5){
                                        ori_imgHeight = 40;
                                    }else if(imgfsize==6){
                                        ori_imgHeight = 48;
                                    }else if(imgfsize==1){
                                        ori_imgHeight = 16;
                                    }else if(imgfsize==2){
                                        ori_imgHeight = 20;
                                    }
                                    str=str+"data-fsize='"+ori_imgHeight+"'  data-height='"+(ori_imgHeight*csize)+"' data-editarea='"+mtEditarea.id+"'  height=\""+ (ori_imgHeight*csize)+"\"";
                                    new_imgid = Math.floor( Math.random() * (100000 + 1 - 1) ) + 1;
                                    imgIDlist.push(new_imgid);
                                    while(imgIDlist.indexOf(new_imgid)==-1){
                                        new_imgid = Math.floor( Math.random() * (100000 + 1 - 1) ) + 1;
                                    }
                                    new_imgid = "img_" + mtDivId + "_" + new_imgid;
                                    str=str+" crossOrigin = \"Anonymous\" id='"+new_imgid+"'>";
                                }
                            }
                        }
                        MathTOUCH.MTEditor_editArea[MathTOUCH.MTEditor_AREA_NUM].innerHTML = str;
};

MathTOUCH.MTEditorCopy = function(editareaId){
    tmpData=window.getSelection().getRangeAt(0).cloneContents();
    tmpDiv=document.createElement("div");
    tmpDiv.appendChild(tmpData);
    var clipboardHTML = tmpDiv.innerHTML;
    let type = "text/html";
    let blob = new Blob([clipboardHTML], { type });
    let data = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(data);
}
                                      
MathTOUCH.MTEditorCut = function(editareaId, flagHis){
    tmpData=window.getSelection().getRangeAt(0).cloneContents();
    tmpDiv=document.createElement("div");
    tmpDiv.appendChild(tmpData);
    var clipboardHTML = tmpDiv.innerHTML;
    let type = "text/html";
    let blob = new Blob([clipboardHTML], { type });
    let data = [new ClipboardItem({ [type]: blob })];
    navigator.clipboard.write(data);
    
    var range = window.getSelection().getRangeAt(0);
    range.deleteContents();
    let textNode = document.createTextNode( "\u0018" );
    range.insertNode( textNode );
    range.setStartAfter( textNode );
    if(flagHis){
        MathTOUCH.pushHistory(editareaId);
    }
}
                                      
MathTOUCH.MTEditorPaste = async function(mtDivId, flagHis){
    let mtTextareaId = mtDivId.replace("mteditorDiv_","");
    let mtEditareaId = "mteditorEditarea_"+mtTextareaId;
    let mtEditarea = document.getElementById(mtEditareaId);
    const data = await navigator.clipboard.read();
    document.getElementById(mtEditareaId).focus();
    if (!data.length) {
        return
    }
    const file = data[0];
    for (const type of file.types) {
        if (type.startsWith('text/html')) {
            const blob = await await file.getType(type);
            let clipboardContents = await blob.text();
            clipboardContents = clipboardContents.replace('<meta charset=\"utf-8\">', "");
            var range;
            var textNode;
            var offset;
            if (document.caretPositionFromPoint) {
                range = document.caretPositionFromPoint(window.getSelection().getRangeAt(0).getBoundingClientRect().x, window.getSelection().getRangeAt(0).getBoundingClientRect().y);
                textNode = range.offsetNode;
                offset = range.offset;
            } else if (document.caretRangeFromPoint) {
                
                range = document.caretRangeFromPoint(window.getSelection().getRangeAt(0).getBoundingClientRect().x, window.getSelection().getRangeAt(0).getBoundingClientRect().y);
                textNode = range.startContainer;
                offset = range.startOffset;
            }
            var tmpDiv=document.createElement("span");
            tmpDiv.className = "tmpDiv";
            tmpDiv.innerHTML = clipboardContents;
            
            if(textNode.hasChildNodes()){
                mtEditarea.appendChild(tmpDiv);
                mtEditarea.focus();
            }else{
                var replacement = textNode.splitText(offset);
                textNode.parentNode.insertBefore(tmpDiv, replacement);
                
            }
            let mt_eq = document.getElementById(mtDivId).querySelectorAll('img.mteq');
            let mteqIDlist = new Array();
            let new_eqid;
            mt_eq.forEach(function( element ) {
                if(mteqIDlist.indexOf(element.id)==-1){
                    mteqIDlist.push(element.id);
                }else{
                    new_eqid = "img_"+mtDivId+"_"+Math.floor( Math.random() * (100000 + 1 - 1) ) + 1;
                    while(mteqIDlist.indexOf(new_eqid)!=-1){
                        new_eqid = "img_"+mtDivId+"_"+Math.floor( Math.random() * (100000 + 1 - 1) ) + 1;
                    }
                    element.id = new_eqid;
                }
            });
            $('.tmpDiv').contents().unwrap();
        }
    }
    if(flagHis){
        MathTOUCH.pushHistory(mtEditareaId);
    }
}
                                      
MathTOUCH.MTEditorUndo  = function(mtEditareaId, mtTextareaId){
    if( (MathTOUCH.MTEditor_History_index-1) >= 0){
        MathTOUCH.MTEditor_History_index --;
        document.getElementById(mtEditareaId).innerHTML = MathTOUCH.MTEditor_History[MathTOUCH.MTEditor_History_index];
    }
    MathTOUCH.setMTtextarea(mtEditareaId, mtTextareaId);
}
                                      
MathTOUCH.MTEditorRedo  = function(mtEditareaId, mtTextareaId){
    if((MathTOUCH.MTEditor_History_index+1) <= (MathTOUCH.MTEditor_History.length-1)){
        MathTOUCH.MTEditor_History_index ++;
        document.getElementById(mtEditareaId).innerHTML = MathTOUCH.MTEditor_History[MathTOUCH.MTEditor_History_index];
    }
    MathTOUCH.setMTtextarea(mtEditareaId, mtTextareaId);
}

MathTOUCH.pushHistory = function(mtEditareaId){
    let mtdb_content = document.getElementById(mtEditareaId).innerHTML;
    tdb_content = mtdb_content.replace('<div id=\"candidates\"></div>', "");
    MathTOUCH.MTEditor_History.push(mtdb_content);
    MathTOUCH.MTEditor_History_index ++;
}

MathTOUCH.changeCode = function(e){
                                        let mtTextareaId = e.target.parentNode.parentNode.id;
                                        let mtEditareaId = mtTextareaId.replace("mteditorDiv_","mteditorEditarea_");
                                        let textarea = document.getElementById(mtTextareaId);
                                        let editarea = document.getElementById(mtEditareaId);
                                        if(MathTOUCH.MTEditor_i_code_mode==0){
                                            
                                            MathTOUCH.MTEditor_i_code_mode=1;
                                        }else{
                                            MathTOUCH.MTEditor_i_code_mode=0;
                                        }
                                        
};
