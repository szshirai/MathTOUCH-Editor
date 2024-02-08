MathTOUCH.KeyBoard_flag = false;
MathTOUCH.KeyBoard_BASE;
MathTOUCH.KeyBoard_BASE_inner;
MathTOUCH.KeyBoard_candidates_ul;
MathTOUCH.KeyBoard_canvas;
MathTOUCH.KeyBoard_area;
MathTOUCH.KeyBoard_area0;
MathTOUCH.KeyBoard_area1;
MathTOUCH.KeyBoard_area2;
MathTOUCH.KeyBoard_area3;

MathTOUCH.KeyBoard_areaL;
MathTOUCH.KeyBoard_areaR;

MathTOUCH.KeyBoard_cbStr;
MathTOUCH.KeyBoard_areaRbutton;

MathTOUCH.KeyBoard_row0;
MathTOUCH.KeyBoard_row1;
MathTOUCH.KeyBoard_row2;
MathTOUCH.KeyBoard_row3;
MathTOUCH.KeyBoard_row4;

MathTOUCH.KeyBoard_popup1;

MathTOUCH.KeyBoard_key;
MathTOUCH.KeyBoard_keyStr;
MathTOUCH.KeyBoard_keyDisplay = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
MathTOUCH.KeyBoard_keyVal = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ];
MathTOUCH.KeyBoard_keyCode= [ 49, 50, 51, 52, 53, 54, 55, 56, 57, 48 ];
MathTOUCH.KeyBoard_key_len = MathTOUCH.KeyBoard_keyVal.length;
MathTOUCH.KeyBoard_keyp;
MathTOUCH.KeyBoard_keyStrp;

MathTOUCH.KeyBoard_key1;
MathTOUCH.KeyBoard_keyStr1;
MathTOUCH.KeyBoard_keyDisplay1 = [ 'x', 'y', '=', '+', '-', '/', '.', ',', 'round_bracket', 'curly_bracket' ];
MathTOUCH.KeyBoard_keyVal1 = [ 'x', 'y',  '=', '+', '-', '/', '.', ',', '()←', '{}←'];
MathTOUCH.KeyBoard_keyCode1 = [  106, 120, 97, 98, 41 , 41, 95, 43, 47, 61 ];
MathTOUCH.KeyBoard_key1_len = MathTOUCH.KeyBoard_keyVal1.length;
MathTOUCH.KeyBoard_key1p;
MathTOUCH.KeyBoard_key1Strp;

MathTOUCH.KeyBoard_key2;
MathTOUCH.KeyBoard_keyStr2;
MathTOUCH.KeyBoard_keyDisplay2 = ['root', '\u03C0','absolute_value', 'sin', 'cos',  'tan' , 'e', 'log','square_bracket','\u232B'];
MathTOUCH.KeyBoard_keyVal2 = [ 'root', 'p','[]←', 'sin', 'cos', 'tan' , 'e', 'log','[]←','\u232B' ];
MathTOUCH.KeyBoard_keyCode2 = ['root',  'p','[]←', 'sin', 'cos', 'tan' , 'e', 'log', '[]←', MathTOUCH.K_BS];
MathTOUCH.KeyBoard_key2_len = MathTOUCH.KeyBoard_keyVal2.length;
MathTOUCH.KeyBoard_key2p;
MathTOUCH.KeyBoard_key2Strp;

MathTOUCH.KeyBoard_key3;
MathTOUCH.KeyBoard_keyStr3;
MathTOUCH.KeyBoard_keyDisplay3 = ['undo', 'Refine', '\u25C0', '\u25B6', 'Back', 'Forward', 'Enter'];
MathTOUCH.KeyBoard_keyVal3 = ['ESC', '@', '\u25C0', '\u225B6', 'Back', 'Forward', 'Enter'];
MathTOUCH.KeyBoard_keyCode3 =  [27, '@候補絞込', 37+128, 39+128, 38+128, 40+128, 13];
MathTOUCH.KeyBoard_keyTitle =  ['一つ前の動作に戻します', '候補の絞込を行います。変換候補に入力したい数式が表示されない場合はクリックしてください。', 'カーソルを左に移動します', 'カーソルを右に移動します', '前の候補を選択します', '次の候補を選択します', '数式を確定します'];
MathTOUCH.KeyBoard_key3_len= MathTOUCH.KeyBoard_keyVal3.length;
MathTOUCH.KeyBoard_key3p;
MathTOUCH.KeyBoard_key3Strp;

MathTOUCH.KeyBoard_key4;
MathTOUCH.KeyBoard_key4font;
MathTOUCH.KeyBoard_keyStr4;

MathTOUCH.KeyBoard_keyStr4_title = ['数字', '英字',  '基本記号', 'ギリシャ文字', 'かっこ', '積分', '総和', '三角関数', '極限・対数' , 'アクセント記号']
MathTOUCH.KeyBoard_keyDisplay4 =  ['123', 'abc', '=' ,'\u03C0', '{( )}', '\u222B', '\u2211', 'sin' , 'log', 'accent'];
MathTOUCH.KeyBoard_keyVal4 = ['123', 'abc', '=', '\u03C0', '\u222B', '\u2211', '{( )}', 'sin', 'log', 'accent'];
MathTOUCH.KeyBoard_keyCode4 = [ '123', 'abc', 'basic', 'letters', 'par' ,'int','sum' ,'tri' ,'log', 'accent'];
MathTOUCH.KeyBoard_key4_len = MathTOUCH.KeyBoard_keyVal4.length;

MathTOUCH.KeyBoard_enCap_flag = false;

MathTOUCH.KeyBoard_en1;
MathTOUCH.KeyBoard_enStr1;
MathTOUCH.KeyBoard_enDisplay1 = [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ];
MathTOUCH.KeyBoard_enVal1 = [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ];
MathTOUCH.KeyBoard_enCode1 = [ 113, 119, 101, 114, 116, 121, 117, 105, 111, 112 ];
MathTOUCH.KeyBoard_en1_len = MathTOUCH.KeyBoard_enVal1.length;

MathTOUCH.KeyBoard_en1p;
MathTOUCH.KeyBoard_en1Strp;

MathTOUCH.KeyBoard_en2;
MathTOUCH.KeyBoard_enStr2;
MathTOUCH.KeyBoard_enDisplay2 = [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ];
MathTOUCH.KeyBoard_enVal2 = [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ];
MathTOUCH.KeyBoard_enCode2 = [ 97, 115, 100, 102, 103, 104, 106, 107, 108 ];
MathTOUCH.KeyBoard_en2_len = MathTOUCH.KeyBoard_enVal2.length;

MathTOUCH.KeyBoard_en2p;
MathTOUCH.KeyBoard_en2Strp;

MathTOUCH.KeyBoard_en3;
MathTOUCH.KeyBoard_enStr3;
MathTOUCH.KeyBoard_enDisplay3 = [ '\u21E7','z','x' ,'c' ,'v' ,'b' ,'n' ,'m','\u232B'];
MathTOUCH.KeyBoard_enVal3 = [ '\u21E7','z','x' ,'c' ,'v' ,'b' ,'n' ,'m','\u232B' ];
MathTOUCH.KeyBoard_enCode3 = [ 'Cap',122, 120, 99, 118, 98, 110, 109, MathTOUCH.K_BS];
MathTOUCH.KeyBoard_en3_len = MathTOUCH.KeyBoard_enVal3.length;

MathTOUCH.KeyBoard_en3p;
MathTOUCH.KeyBoard_en3Strp;

MathTOUCH.KeyBoard_enCapStr1;
MathTOUCH.KeyBoard_enCapDisplay1 = [ 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P' ];
MathTOUCH.KeyBoard_enCapVal1 =  [ 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P' ];
MathTOUCH.KeyBoard_enCapCode1 = [ 81, 87, 69, 82, 84, 89, 85, 73, 79, 80 ];
MathTOUCH.KeyBoard_enCap1_len = MathTOUCH.KeyBoard_enCapVal1.length;

MathTOUCH.KeyBoard_enCapStr2;
MathTOUCH.KeyBoard_enCapDisplay2 = [ 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L' ];
MathTOUCH.KeyBoard_enCapVal2 = [ 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L' ];
MathTOUCH.KeyBoard_enCapCode2 = [ 65, 83, 68, 70, 71, 72, 74, 75, 76 ];
MathTOUCH.KeyBoard_enCap2_len = MathTOUCH.KeyBoard_enCapVal2.length;

MathTOUCH.KeyBoard_enCapStr3;
MathTOUCH.KeyBoard_enCapDisplay3 = [ '\u21EA','Z','X' ,'C' ,'V' ,'B' ,'N' ,'M'];
MathTOUCH.KeyBoard_enCapVal3 = [ '\u21EA','Z','X' ,'C' ,'V' ,'B' ,'N' ,'M' ];
MathTOUCH.KeyBoard_enCapCode3 = [ 'Lower', 90, 88, 67, 86, 66, 78, 77];
MathTOUCH.KeyBoard_enCap3_len = MathTOUCH.KeyBoard_enCapVal3.length;

MathTOUCH.KeyBoard_sym1;
MathTOUCH.KeyBoard_symStr1;
MathTOUCH.KeyBoard_symDisplay1 = [ '[',']','{' ,'}' ,'#' ,'%' ,'^' ,'*' ,'+', '=' ];
MathTOUCH.KeyBoard_symVal1 = [ '[',']','{' ,'}' ,'#' ,'%' ,'^' ,'*' ,'+', '=' ];
MathTOUCH.KeyBoard_symCode1 = [ 91,93, 123, 125, 35, 37, 94, 42, 43, 61];
MathTOUCH.KeyBoard_sym1_len = MathTOUCH.KeyBoard_symVal1.length;

MathTOUCH.KeyBoard_sym1p;
MathTOUCH.KeyBoard_sym1Strp;

MathTOUCH.KeyBoard_sym2;
MathTOUCH.KeyBoard_symStr2;
MathTOUCH.KeyBoard_symDisplay2 = [ '(',')','|' ,'~', '<', '>', '\u2190', '\u2192', '\u00B7', '\u22EF'];
MathTOUCH.KeyBoard_symVal2 = [ '(',')','|' ,'~', '<', '>', '<--', '-->', '*', '...'];
MathTOUCH.KeyBoard_symCode2 = [ 40 ,41, 124, 126, 60, 62,'leftA' ,'rightA' ,'upperA', 'downA'];
MathTOUCH.KeyBoard_sym2_len = MathTOUCH.KeyBoard_symVal2.length;

MathTOUCH.KeyBoard_sym2p;
MathTOUCH.KeyBoard_sym2Strp;

MathTOUCH.KeyBoard_sym3;
MathTOUCH.KeyBoard_symStr3;
MathTOUCH.KeyBoard_symDisplay3 = [ ':',';','.' ,'\,', '?', '!', '\'' ,'_' ,'-', '/' ];
MathTOUCH.KeyBoard_symVal3 = [ ':',';','.' ,'\,', '?', '!', '\'' ,'_' ,'-', '/' ];
MathTOUCH.KeyBoard_symCode3 = [ 58, 59, 46, 44, 63, 33, 39, 47];
MathTOUCH.KeyBoard_sym3_len = MathTOUCH.KeyBoard_symVal3.length;

MathTOUCH.KeyBoard_sym3p;
MathTOUCH.KeyBoard_sym3Strp;

MathTOUCH.KeyBoard_letters1;
MathTOUCH.KeyBoard_letters1font;
MathTOUCH.KeyBoard_lettersStr1;
MathTOUCH.KeyBoard_lettersDisplay1  = ['alpha', 'beta', 'gamma' , 'delta', 'epsilon','zeta','eta', 'theta', 'iota', 'kappa','lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma', 'tau', 'upsilon', 'phi','chi', 'psi', 'omega' ];
MathTOUCH.KeyBoard_lettersTitle1  = [ 'アルファ (a)', 'ベータ (b)', 'ガンマ (g)' , 'デルタ (d)', 'イプシロン (e)','ゼータ (z)','イータ (e)', 'シータ (t)','イオタ (i)', 'カッパ (k)', 'ラムダ (l)', 'ミュー (m)', 'ニュー (n)', 'クサイ (x)', 'オミクロン (o)', 'パイ (p)', 'ロー (r)', 'シグマ (s)', 'タウ (t)', 'ウプシロン (u)', 'ファイ (p)','カイ (c)', 'プサイ (p)', 'オメガ (o)' ];
MathTOUCH.KeyBoard_lettersVal1 = [ 'a', 'b', 'g' , 'd', 'e','z','e', 't','i', 'k','l', 'm', 'n', 'x', 'o', 'p', 'r', 's', 't', 'u', 'p','c', 'p', 'o' ];
MathTOUCH.KeyBoard_lettersCode1 = [ 'a', 'b', 'g' , 'd', 'e','z','e', 't','i', 'k','l', 'm', 'n', 'x', 'o', 'p', 'r', 's', 't', 'u', 'p','c', 'p', 'o' ];
MathTOUCH.KeyBoard_letters1_len = MathTOUCH.KeyBoard_lettersVal1.length;

MathTOUCH.KeyBoard_letters2;
MathTOUCH.KeyBoard_letters2font;
MathTOUCH.KeyBoard_lettersStr2;
MathTOUCH.KeyBoard_lettersDisplay2 = ['Gamma', 'Delta', 'Theta', 'Lambda', 'Xi', 'Pi', 'Sigma', 'Upsilon', 'Phi', 'X','Psi', 'Omega' ];
MathTOUCH.KeyBoard_lettersTitle2 = [  'ガンマ (G)', 'デルタ (D)', 'シータ (T)', 'ラムダ (L)', 'グザイ (X)', 'パイ (P)', 'シグマ (S)', 'ウプシロン (U)', 'ファイ (P)', 'カイ (X)','プサイ (P)', 'オメガ (O)' ];
MathTOUCH.KeyBoard_lettersVal2 = [ 'G', 'D', 'T', 'L', 'X', 'P', 'S', 'U', 'P', 'X','P', 'O' ];
MathTOUCH.KeyBoard_lettersCode2 =  [ 'G', 'D', 'T', 'L', 'X', 'P', 'S', 'U', 'P', 'X','P', 'O' ];
MathTOUCH.KeyBoard_letters2_len = MathTOUCH.KeyBoard_lettersVal2.length;

MathTOUCH.KeyBoard_int1;
MathTOUCH.KeyBoard_int1font;
MathTOUCH.KeyBoard_intStr1;
MathTOUCH.KeyBoard_intDisplay1 = [ 'int', 'oint','dx','dy','dtheta' ];
MathTOUCH.KeyBoard_intTitle = [ '積分（int）', '線積分（oint)','積分x (dx)','積分y (dy)','積分θ (dt)' ];
MathTOUCH.KeyBoard_intVal1 = [ 'int', 'oint', 'dx', 'dy', 'dt'];
MathTOUCH.KeyBoard_int1_len = MathTOUCH.KeyBoard_intVal1.length;


MathTOUCH.KeyBoard_sum1;
MathTOUCH.KeyBoard_sum1font;
MathTOUCH.KeyBoard_sumStr1;
MathTOUCH.KeyBoard_sumDisplay1 =  [ 'sum', 'prod', 'coprod', 'Cup','Cap','Vee', 'Wedge'];
MathTOUCH.KeyBoard_sumTitle = [ '総和（sum）', '直積（prod)', '余積（coprod)','和集合（Cup)','積集合（Cap)','論理和（Vee)','論理積',];
MathTOUCH.KeyBoard_sumVal1 = [ 'sum', 'prod', 'coprod', 'Cup','Cap','Vee', 'Wedge'];
MathTOUCH.KeyBoard_sum1_len = MathTOUCH.KeyBoard_sumVal1.length;


MathTOUCH.KeyBoard_par1;
MathTOUCH.KeyBoard_par1font;
MathTOUCH.KeyBoard_parStr1;
MathTOUCH.KeyBoard_parDisplay1 = [ 'bracket()', 'bracket[]','bracket{}', 'abs','norm', 'angle', 'floor','ceil'];
MathTOUCH.KeyBoard_parTitle = [ 'かっこ ( (要素) )', '大かっこ ( [要素] )','波かっこ ( {要素} )', '縦棒 ( [要素] )','二重縦棒 ( [要素] )', '山かっこ ( {要素} )', '床大かっこ ( [要素] )','天井大かっこ ( [要素] )'];
MathTOUCH.KeyBoard_parVal1 = [ '()←', '[]←','{}←', '[]←', '[]←', '{}←', '[]←', '[]←'];
MathTOUCH.KeyBoard_parCode1 = [ '()', '[]','{}', '[]', '[]', '{}', '[]', '[]'];
MathTOUCH.KeyBoard_par1_len = MathTOUCH.KeyBoard_parVal1.length;

MathTOUCH.KeyBoard_tri1;
MathTOUCH.KeyBoard_tri1font;
MathTOUCH.KeyBoard_triStr1;
MathTOUCH.KeyBoard_triDisplay1 =  [ 'sin', 'cos', 'tan', 'csc','sec' , 'cot', 'sinh', 'cosh', 'tanh', 't'];
MathTOUCH.KeyBoard_triTitle = ['正弦関数 (sin)','余弦関数 (cos)','正接関数 (tan)', '余割関数 (csc)','正割関数 (sec)','余接関数 (cot)', '双曲線正弦関数 (sinh)','双曲線余弦関数 (cosh)','双曲線正接関数 (tanh)', 'シータ(t)'];
MathTOUCH.KeyBoard_triVal1 = [ 'sin', 'cos', 'tan', 'csc','sec' , 'cot', 'sinh', 'cosh', 'tanh', 't'];
MathTOUCH.KeyBoard_triCode1 =  [ 'sin', 'cos', 'tan', 'csc','sec' , 'cot', 'sinh', 'cosh', 'tanh', 't'];
MathTOUCH.KeyBoard_tri1_len = MathTOUCH.KeyBoard_triVal1.length;

MathTOUCH.KeyBoard_log1;
MathTOUCH.KeyBoard_log1font;
MathTOUCH.KeyBoard_logStr1;
MathTOUCH.KeyBoard_logDisplay1 = [  'lim', 'log', 'ln', 'min', 'max'];
MathTOUCH.KeyBoard_logTitle = [  '極限 (lim)', '対数 (log)','自然対数 (ln)', '最小値 (min)', '最大値 (max)'];
MathTOUCH.KeyBoard_logVal1 = ['lim',  'log','ln', 'min', 'max'];
MathTOUCH.KeyBoard_logCode1 = [ 'lim', 'log','ln', 'min', 'max'];
MathTOUCH.KeyBoard_log1_len = MathTOUCH.KeyBoard_logVal1.length;

MathTOUCH.KeyBoard_accent1;
MathTOUCH.KeyBoard_accent1font;
MathTOUCH.KeyBoard_accentStr1;
MathTOUCH.KeyBoard_accentDisplay1 = [  'lim', 'log', 'ln', 'min', 'max'];
MathTOUCH.KeyBoard_accentTitle = [  '極限 (lim)', '対数 (log)','自然対数 (ln)', '最小値 (min)', '最大値 (max)'];
MathTOUCH.KeyBoard_accentVal1 = ['lim',  'log','ln', 'min', 'max'];
MathTOUCH.KeyBoard_accentCode1 = [ 'lim', 'log','ln', 'min', 'max'];
MathTOUCH.KeyBoard_accent1_len = MathTOUCH.KeyBoard_logVal1.length;

MathTOUCH.KeyBoard_msym1;
MathTOUCH.KeyBoard_msym1font;
MathTOUCH.KeyBoard_msymStr1;
MathTOUCH.KeyBoard_msymDisplay1  = [ '+', '-','frac','P1sqrt','sqrt','=', 'neq', 'less', 'greater', 'leq','geq', 'equiv', 'times', 'div','pm', 'oplus',
                                    'rightarrow','leftarrow','uparrow','downarrow', 'ast', 'bullet','infty',
                                    'vdots', 'cdots', 'rddots', 'ddots',
                                    'subset', 'supset', 'subseteq', 'supseteq','not_subset','not_supset','not_subseteq',
                                    'not_supseteq',  'in', 'ni', 'not_in' , 'not_ni',
                                     'cup','cap'];
MathTOUCH.KeyBoard_msymTitle  = [ '加算記号 (+)', '減算記号 (-)','分数 (/)','平方根 (root)','次数付きべき乗根 (root)','等号', '等しくない (/=)', '不等号: より小さい (<)' , '不等号: より大きい(>)', '以下(<=)', '以上(>=)', '合同 (=)', '乗算記号 (*)', '除算記号 (/)','プラスマイナス (+-)', '直積 (+)','右矢印 (-->)','左矢印 (<--)','上矢印 (-->)','下矢印 (<--)', 'アスタリスク (*)', 'ドット (*)','無限大 (i)',
                                 '垂直線の省略記号 (...)', '水平中央の省略記号 (...)', '右上がりの省略記号 (...)', '右下がりの省略記号 (...)',
                                    '真部分集合として含まれる (<)', '真部分集合として含む (>)', '部分集合として含まれる (<=)', '部分集合として含む (>=)','真部分集合として含まれない (/<)', '真部分集合として含まない (/>)', '部分集合として含まれない (/<)', '部分集合として含まない (/>)', '要素である (<)', '元として含む (>)', '要素として含まない(/<)', '元として含まない (/>)',  '和集合(cup)', '積集合(cap)'];
MathTOUCH.KeyBoard_msymVal1 = [ '+', '-','/','root','root', '=', '/=', '<', '>', '<=','>=', '=', '*', '/', '+-', '+',
                               '-->','<--', '-->', '<--', '*', '*', 'i', '...', '...', '...', '...',
                               '<', '>','<=', '>=','/<','/>','/<','/>',  '<', '>', '/<' , '/>', 'cup', 'cap'];
MathTOUCH.KeyBoard_msymCode1 =  [ '+', '-','/','root','root', '=', '/=', '<', '>', '<=','>=', '=', '*', '/', '+-', '+',
                                 '-->','<--', '-->', '<--', '*', '*', 'i', '...', '...', '...', '...',
                                 '<', '>','<=', '>=','/<','/>','/<','/>',  '<', '>', '/<' , '/>', 'cup', 'cap'];
MathTOUCH.KeyBoard_msym1_len = MathTOUCH.KeyBoard_msymVal1.length;

MathTOUCH.KeyBoard_exlogKeyList = new Array();
MathTOUCH.KeyBoard_exlogKeyfont = new Array();
MathTOUCH.KeyBoard_exlogKeyStr1 = new Array();

MathTOUCH.KeyBoard_titlebar;

MathTOUCH.KeyBoard_menubar_edit;
MathTOUCH.KeyBoard_menubar_editA;
MathTOUCH.KeyBoard_menubar_edit_menuarea;
MathTOUCH.KeyBoard_menubar_edit_menuareaUL;
MathTOUCH.KeyBoard_menubar_edit_menuarea_li = [];
MathTOUCH.KeyBoard_menubar_edit_menuarea_text = [];
MathTOUCH.KeyBoard_menubar_edit_menuarea_val = ["元に戻す", "やり直し"];
MathTOUCH.KeyBoard_menubar_edit_menuarea_len = MathTOUCH.KeyBoard_menubar_edit_menuarea_val.length;

MathTOUCH.KeyBoard_menubar_undo;
MathTOUCH.KeyBoard_menubar_undoIMG;

MathTOUCH.KeyBoard_menubar_redo;
MathTOUCH.KeyBoard_menubar_redoIMG;

MathTOUCH.KeyBoard_menubar_settings;
MathTOUCH.KeyBoard_menubar_settingsIMG;
MathTOUCH.KeyBoard_menubar_settings_menu;
MathTOUCH.KeyBoard_menubar_settings_menu_menuarea;
MathTOUCH.KeyBoard_menubar_settings_menu_menuareaUL;
MathTOUCH.KeyBoard_menubar_settings_menu_li = [];
MathTOUCH.KeyBoard_menubar_settings_menu_text = [];
MathTOUCH.KeyBoard_menubar_settings_menu_val = ["LaTeX入力", "学習データの初期化"];
MathTOUCH.KeyBoard_menubar_settings_menu_len = MathTOUCH.KeyBoard_menubar_settings_menu_val.length;

MathTOUCH.KeyBoard_menubar_history;
MathTOUCH.KeyBoard_menubar_historyIMG;
MathTOUCH.KeyBoard_menubar_history_menu;
MathTOUCH.KeyBoard_menubar_history_menu_h5area;
MathTOUCH.KeyBoard_menubar_history_menu_h5;
MathTOUCH.KeyBoard_menubar_history_menu_text;
MathTOUCH.KeyBoard_menubar_history_menu_eqarea;
MathTOUCH.KeyBoard_menubar_history_menu_eqareaUL;

MathTOUCH.KeyBoard_area2_messageFlag = false;

MathTOUCH.mtKeyBoard_preinit = function(){
    MathTOUCH.KeyBoard_BASE = document.createElement("div");
    MathTOUCH.KeyBoard_BASE.id = "mt_keyboard";
    MathTOUCH.KeyBoard_BASE_inner = document.createElement("div");
    MathTOUCH.KeyBoard_BASE_inner.id = "mtkeyboard_inner";
    MathTOUCH.KeyBoard_BASE.appendChild(MathTOUCH.KeyBoard_BASE_inner);

    if(MathTOUCH.Device != MathTOUCH.Device_SP){
        MathTOUCH.KeyBoard_titlebar = document.createElement("div");
        MathTOUCH.KeyBoard_titlebar.id = "mtkeyboard_titlebar";
        MathTOUCH.KeyBoard_titlebar_inner = document.createElement("div");
        MathTOUCH.KeyBoard_titlebar_inner.id = "mtkeyboard_titlebar_inner";
        
        MathTOUCH.KeyBoard_titlebar_close = document.createElement("div");
        MathTOUCH.KeyBoard_titlebar_close.id = "mtkeyboard_titlebar_close";
        MathTOUCH.KeyBoard_titlebar_close.className="mt_titlebar_iconA";
        MathTOUCH.KeyBoard_titlebar_closeA = document.createElement("a");
        MathTOUCH.KeyBoard_titlebar_closeA.id = "mtkeyboard_titlebar_closeA";
        MathTOUCH.KeyBoard_titlebar_close_text = document.createTextNode("×");
        MathTOUCH.KeyBoard_titlebar_closeA.appendChild(MathTOUCH.KeyBoard_titlebar_close_text);
        MathTOUCH.KeyBoard_titlebar_closeA.href="#!";
        MathTOUCH.KeyBoard_titlebar_close.appendChild(MathTOUCH.KeyBoard_titlebar_closeA);
        
        MathTOUCH.KeyBoard_titlebar_inner.appendChild(MathTOUCH.KeyBoard_titlebar_close);
        MathTOUCH.KeyBoard_titlebar.appendChild(MathTOUCH.KeyBoard_titlebar_inner);
        MathTOUCH.KeyBoard_BASE_inner.appendChild(MathTOUCH.KeyBoard_titlebar);
        
        /*** Menu bar ***/
        MathTOUCH.KeyBoard_menubar = document.createElement("div");
        MathTOUCH.KeyBoard_menubar.id = "mtkeyboard_menubar";
        MathTOUCH.KeyBoard_menubar_inner = document.createElement("div");
        MathTOUCH.KeyBoard_menubar_inner.id = "mtkeyboard_menubar_inner";
        
        /*edit*/
        MathTOUCH.KeyBoard_menubar_edit = document.createElement("div");
        MathTOUCH.KeyBoard_menubar_edit.id = "mtkeyboard_menubar_edit";
        MathTOUCH.KeyBoard_menubar_edit.className="mt_menubar_textbutton";
        MathTOUCH.KeyBoard_menubar_editText = document.createTextNode("Edit");
        MathTOUCH.KeyBoard_menubar_edit.appendChild(MathTOUCH.KeyBoard_menubar_editText);
        MathTOUCH.KeyBoard_menubar_inner.appendChild(MathTOUCH.KeyBoard_menubar_edit);
        MathTOUCH.KeyBoard_menubar_edit_menuarea = document.createElement("div");
        MathTOUCH.KeyBoard_menubar_edit_menuarea.id="mtkeyboard_menubar_edit_menuarea";
        MathTOUCH.KeyBoard_menubar_edit_menuarea.className="mtkeyboard_menubar_edit_menuarea";
        MathTOUCH.KeyBoard_menubar_edit_menuareaUL = document.createElement("ul");
        MathTOUCH.KeyBoard_menubar_edit_menuareaUL.className="mtkeyboard_menubar_edit_menuareaUL";
        MathTOUCH.KeyBoard_menubar_edit_menuarea.appendChild(MathTOUCH.KeyBoard_menubar_edit_menuareaUL );
        MathTOUCH.KeyBoard_menubar_edit.appendChild(MathTOUCH.KeyBoard_menubar_edit_menuarea);
        for(var j = 0; j < MathTOUCH.KeyBoard_menubar_edit_menuarea_len; j++){
            MathTOUCH.KeyBoard_menubar_edit_menuarea_li[j] = document.createElement("li");
            MathTOUCH.KeyBoard_menubar_edit_menuarea_li[j].className = "edit_menuli"
            MathTOUCH.KeyBoard_menubar_edit_menuarea_text[j] = document.createTextNode(MathTOUCH.KeyBoard_menubar_edit_menuarea_val[j]);
            MathTOUCH.KeyBoard_menubar_edit_menuarea_li[j].appendChild( MathTOUCH.KeyBoard_menubar_edit_menuarea_text[j]);
            MathTOUCH.KeyBoard_menubar_edit_menuareaUL.appendChild(MathTOUCH.KeyBoard_menubar_edit_menuarea_li[j]);
        }
        
        /*history*/
        MathTOUCH.KeyBoard_menubar_history = document.createElement("div");
        MathTOUCH.KeyBoard_menubar_history.id = "mtkeyboard_menubar_history";
        MathTOUCH.KeyBoard_menubar_history.className="mt_menubar_textbutton";
        MathTOUCH.KeyBoard_menubar_historyText = document.createTextNode("History");
        MathTOUCH.KeyBoard_menubar_history.appendChild(MathTOUCH.KeyBoard_menubar_historyText);
        MathTOUCH.KeyBoard_menubar_inner.appendChild(MathTOUCH.KeyBoard_menubar_history);
        MathTOUCH.KeyBoard_menubar_history_menu = document.createElement("div");
        MathTOUCH.KeyBoard_menubar_history_menu.id = "mtkeyboard_menubar_history_menu";
        MathTOUCH.KeyBoard_menubar_history_menu.className = "mtkeyboard_menubar_history_menuClass";
        MathTOUCH.KeyBoard_menubar_history_menu_h5area = document.createElement("div");
        MathTOUCH.KeyBoard_menubar_history_menu_h5area.id="mtkeyboard_menubar_history_menu_h5area";
        MathTOUCH.KeyBoard_menubar_history_menu_h5 = document.createElement("h5");
        MathTOUCH.KeyBoard_menubar_history_menu_text = document.createTextNode("入力履歴");
        MathTOUCH.KeyBoard_menubar_history_menu_h5.appendChild(MathTOUCH.KeyBoard_menubar_history_menu_text);
        MathTOUCH.KeyBoard_menubar_history_menu_h5area.appendChild(MathTOUCH.KeyBoard_menubar_history_menu_h5);
        MathTOUCH.KeyBoard_menubar_history_menu.appendChild(MathTOUCH.KeyBoard_menubar_history_menu_h5area);
        MathTOUCH.KeyBoard_menubar_history_menu_eqarea = document.createElement("div");
        MathTOUCH.KeyBoard_menubar_history_menu_eqarea.id="mtkeyboard_menubar_history_menu_eqarea";
        MathTOUCH.KeyBoard_menubar_history_menu_eqareaUL = document.createElement("ul");
        MathTOUCH.KeyBoard_menubar_history_menu_eqarea.className="mtkeyboard_menubar_history_menu_eqareaUL";
        MathTOUCH.KeyBoard_menubar_history_menu_eqarea.appendChild(MathTOUCH.KeyBoard_menubar_history_menu_eqareaUL);
        MathTOUCH.KeyBoard_menubar_history_menu.appendChild(MathTOUCH.KeyBoard_menubar_history_menu_eqarea);
        MathTOUCH.KeyBoard_menubar_inner.appendChild(MathTOUCH.KeyBoard_menubar_history);
        MathTOUCH.KeyBoard_menubar_inner.appendChild(MathTOUCH.KeyBoard_menubar_history_menu);
        
        MathTOUCH.KeyBoard_menubar.appendChild(MathTOUCH.KeyBoard_menubar_inner);
        MathTOUCH.KeyBoard_BASE_inner.appendChild(MathTOUCH.KeyBoard_menubar);
        
        MathTOUCH.KeyBoard_menubar_settings = document.createElement("div");
        MathTOUCH.KeyBoard_menubar_settings.id = "mtkeyboard_menubar_settings";
        MathTOUCH.KeyBoard_menubar_settings.className="mt_menubar_icon_right";
        MathTOUCH.KeyBoard_menubar_settingsIMG = document.createElement("img");
        MathTOUCH.KeyBoard_menubar_settingsIMG.className="mt_menubar_iconIMG";
        MathTOUCH.KeyBoard_menubar_settingsIMG.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTcuMSAxNy4xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNy4xIDE3LjE7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMDQwMDAwO30KPC9zdHlsZT4KPGc+Cgk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI4LjYiIGN5PSIzLjIiIHI9IjEuNCIvPgoJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iOC42IiBjeT0iOC42IiByPSIxLjQiLz4KCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjguNiIgY3k9IjEzLjgiIHI9IjEuNCIvPgo8L2c+Cjwvc3ZnPgo=";
        MathTOUCH.KeyBoard_menubar_settingsIMG.alt = "設定";
        MathTOUCH.KeyBoard_menubar_settingsIMG.title = "設定";
        MathTOUCH.KeyBoard_menubar_settingsIMG.href="#!";
        MathTOUCH.KeyBoard_menubar_settings_menu = document.createElement("div");
        MathTOUCH.KeyBoard_menubar_settings_menu.id = "mtkeyboard_menubar_settings_menu";
        MathTOUCH.KeyBoard_menubar_settings_menu.className = "mtkeyboard_menubar_settings_menuClass";
        MathTOUCH.KeyBoard_menubar_settings_menu_menuarea = document.createElement("div");
        MathTOUCH.KeyBoard_menubar_settings_menu_menuarea.id="mtkeyboard_menubar_settings_menu_menuarea";
        MathTOUCH.KeyBoard_menubar_settings_menu_menuareaUL = document.createElement("ul");
        MathTOUCH.KeyBoard_menubar_settings_menu_menuarea.className="mtkeyboard_menubar_settings_menu_eqareaUL";
        MathTOUCH.KeyBoard_menubar_settings_menu_menuarea.appendChild(MathTOUCH.KeyBoard_menubar_settings_menu_menuareaUL);
        MathTOUCH.KeyBoard_menubar_settings_menu.appendChild(MathTOUCH.KeyBoard_menubar_settings_menu_menuarea);
        for(var j = 0; j < MathTOUCH.KeyBoard_menubar_settings_menu_len; j++){
            MathTOUCH.KeyBoard_menubar_settings_menu_li[j] = document.createElement("li");
            MathTOUCH.KeyBoard_menubar_settings_menu_li[j].className = "settings_menuli"
            MathTOUCH.KeyBoard_menubar_settings_menu_text[j] = document.createTextNode(MathTOUCH.KeyBoard_menubar_settings_menu_val[j]);
            MathTOUCH.KeyBoard_menubar_settings_menu_li[j].appendChild( MathTOUCH.KeyBoard_menubar_settings_menu_text[j]);
            MathTOUCH.KeyBoard_menubar_settings_menu_menuareaUL.appendChild(MathTOUCH.KeyBoard_menubar_settings_menu_li[j]);
        }
        
        MathTOUCH.KeyBoard_menubar_settings.appendChild(MathTOUCH.KeyBoard_menubar_settingsIMG);
        MathTOUCH.KeyBoard_menubar_inner.appendChild(MathTOUCH.KeyBoard_menubar_settings);
        MathTOUCH.KeyBoard_menubar_inner.appendChild(MathTOUCH.KeyBoard_menubar_settings_menu);
        
    }
    MathTOUCH.KeyBoard_area = document.createElement("div");
    MathTOUCH.KeyBoard_area.id = "mtkeyboard_canvas";
    MathTOUCH.KeyBoard_area0 = document.createElement("div");
    MathTOUCH.KeyBoard_area0.id = "mtkeyboard_candidates";
    MathTOUCH.KeyBoard_areaL = document.createElement("div");
    MathTOUCH.KeyBoard_areaR = document.createElement("div");
    MathTOUCH.KeyBoard_areaL.id = "mt_areaL";
    MathTOUCH.KeyBoard_areaR.id = "mt_areaR";
    MathTOUCH.KeyBoard_areaL.className = "mt_std";

    MathTOUCH.KeyBoard_areaRbutton = document.createElement("img");
    MathTOUCH.KeyBoard_areaRbutton.title="right-arrow";
    MathTOUCH.KeyBoard_areaRbutton.className="mt_key-up";
    MathTOUCH.KeyBoard_areaRbutton.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjMwLjUgMzgyLjYiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjMwLjUgMzgyLjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZD0iTTI5MC43LDM3Mi41TDEwLjEsOTEuOWMtMTMuNS0xMy41LTEzLjUtMzUuNSwwLTQ5bDMyLjctMzIuN0M1Ni40LTMuNCw3OC4zLTMuNCw5MS44LDEwLjFsMjIzLjQsMjIyLjRMNTM4LjcsMTAuMQoJYzEzLjUtMTMuNSwzNS40LTEzLjUsNDguOSwwLjFsMzIuNywzMi43YzEzLjUsMTMuNSwxMy41LDM1LjUsMCw0OUwzMzkuNywzNzIuNUMzMjYuMiwzODYsMzA0LjMsMzg2LDI5MC43LDM3Mi41TDI5MC43LDM3Mi41eiIvPgo8L3N2Zz4K";
    MathTOUCH.KeyBoard_areaRbutton.setAttribute("onclick", "expKB()");
    MathTOUCH.KeyBoard_areaR.appendChild(MathTOUCH.KeyBoard_areaRbutton);
    
        
    MathTOUCH.KeyBoard_area0.appendChild(MathTOUCH.KeyBoard_areaL);
    MathTOUCH.KeyBoard_area0.appendChild(MathTOUCH.KeyBoard_areaR);
        
    MathTOUCH.KeyBoard_candidates_ul = document.createElement("ul");
    MathTOUCH.KeyBoard_candidates_ul.id = "mtkeyboard_candidates_ul";
    MathTOUCH.KeyBoard_areaL.appendChild(MathTOUCH.KeyBoard_candidates_ul);
        

    MathTOUCH.KeyBoard_area1 = document.createElement("div");
    MathTOUCH.KeyBoard_area1.id = "mt_area1";
        
    MathTOUCH.KeyBoard_row0 = document.createElement("ul");
    MathTOUCH.KeyBoard_row1 = document.createElement("ul");
    MathTOUCH.KeyBoard_row2 = document.createElement("ul");
    MathTOUCH.KeyBoard_row3 = document.createElement("ul");
        
    MathTOUCH.KeyBoard_area2 = document.createElement("div");
    MathTOUCH.KeyBoard_row0.className = "mt_row";
    MathTOUCH.KeyBoard_row1.className = "mt_row";
    MathTOUCH.KeyBoard_row2.className = "mt_row";
    MathTOUCH.KeyBoard_row3.className = "mt_row";
        
    MathTOUCH.KeyBoard_area1.appendChild(MathTOUCH.KeyBoard_row0);
    MathTOUCH.KeyBoard_area1.appendChild(MathTOUCH.KeyBoard_row1);
    MathTOUCH.KeyBoard_area1.appendChild(MathTOUCH.KeyBoard_row2);
    MathTOUCH.KeyBoard_area1.appendChild(MathTOUCH.KeyBoard_row3);
        
    MathTOUCH.KeyBoard_area2.id = "mt_area2";
    MathTOUCH.KeyBoard_area2_messagediv = document.createElement("div");
    MathTOUCH.KeyBoard_area2_message = document.createElement("p");
    MathTOUCH.KeyBoard_area2_messagediv.id = "area2_message";
    MathTOUCH.KeyBoard_area2_messagediv.appendChild(MathTOUCH.KeyBoard_area2_message);
    MathTOUCH.KeyBoard_area2_message.textContent = "test";
    
    MathTOUCH.KeyBoard_row4 = document.createElement("ul");
    MathTOUCH.KeyBoard_row4.className = "mt_area2_ul";
    MathTOUCH.KeyBoard_area2.appendChild(MathTOUCH.KeyBoard_row4);
    
    MathTOUCH.KeyBoard_BASE_inner.appendChild(MathTOUCH.KeyBoard_area);
    MathTOUCH.KeyBoard_BASE_inner.appendChild(MathTOUCH.KeyBoard_area0);
    MathTOUCH.KeyBoard_BASE_inner.appendChild(MathTOUCH.KeyBoard_area1);
    MathTOUCH.KeyBoard_BASE_inner.appendChild(MathTOUCH.KeyBoard_area2);
        
    MathTOUCH.KeyBoard_key4 = new Array(MathTOUCH.KeyBoard_key4_len);
    MathTOUCH.KeyBoard_key4font = new Array(MathTOUCH.KeyBoard_key4_len);
    MathTOUCH.KeyBoard_keyStr4 = new Array(MathTOUCH.KeyBoard_key4_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_key4_len; j++){
        MathTOUCH.KeyBoard_key4[j] = document.createElement("li");
        MathTOUCH.KeyBoard_key4font[j] = document.createElement("div");
        MathTOUCH.KeyBoard_keyStr4[j] = document.createElement("img");
        MathTOUCH.KeyBoard_keyStr4[j].title=MathTOUCH.KeyBoard_keyStr4_title[j];
        MathTOUCH.KeyBoard_key4[j].className = "mt_area2_li";
        if(j===0){
            MathTOUCH.KeyBoard_keyStr4[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYuMiAxNi4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNi4yIDE2LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7Zm9udC1mYW1pbHk6J1RpbWVzTmV3Um9tYW5QU01UJzt9Cgkuc3Qxe2ZvbnQtc2l6ZTo5cHg7fQo8L3N0eWxlPgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDEuMjcyNCAxMC43MTA0KSIgY2xhc3M9InN0MCBzdDEiPjEyMzwvdGV4dD4KPC9zdmc+Cg==";
        }else if(j===1){
            MathTOUCH.KeyBoard_keyStr4[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYuMiAxNi4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNi4yIDE2LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7Zm9udC1mYW1pbHk6J1RpbWVzTmV3Um9tYW5QU01UJzt9Cgkuc3Qxe2ZvbnQtc2l6ZTo5cHg7fQo8L3N0eWxlPgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDEuNzMwNyAxMC43MTA0KSIgY2xhc3M9InN0MCBzdDEiPmFiYzwvdGV4dD4KPC9zdmc+Cg==";
        }else if(j===2){
            MathTOUCH.KeyBoard_keyStr4[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTUuNSA1MS43IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1NS41IDUxLjc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjE3LjMiIHkxPSIyMiIgeDI9IjM4LjUiIHkyPSIyMiIvPgo8bGluZSBjbGFzcz0ic3QwIiB4MT0iMTcuMyIgeTE9IjM1LjYiIHgyPSIzOC41IiB5Mj0iMzUuNiIvPgo8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjcuOSIgeTE9IjExLjQiIHgyPSIyNy45IiB5Mj0iMzIuNiIvPgo8L3N2Zz4K";
        }else if(j===3){
            MathTOUCH.KeyBoard_keyStr4[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYuMiAxNi4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNi4yIDE2LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMDQwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZvbnQtZmFtaWx5OidUaW1lc05ld1JvbWFuUFMtSXRhbGljTVQnO30KCS5zdDJ7Zm9udC1zaXplOjE0cHg7fQo8L3N0eWxlPgo8cG9seWxpbmUgY2xhc3M9InN0MCIgcG9pbnRzPSItMTUuNCwwLjYgLTIwLjMsNS45IC0xNS40LDEwLjcgIi8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0tMTEuNywxMy44aDFjMiwwLDMuNi0xLjYsMy42LTMuNlY5LjVjMC0yLjEtMS43LTMuOC0zLjgtMy44aC04LjciLz4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA0LjY2NDQgMTEuMzc5MSkiIGNsYXNzPSJzdDEgc3QyIj7PgDwvdGV4dD4KPC9zdmc+Cg==";
        }else if(j===4){
            MathTOUCH.KeyBoard_keyStr4[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYuMiAxNi4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNi4yIDE2LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMDQwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZvbnQtZmFtaWx5OidUaW1lc05ld1JvbWFuUFNNVCc7fQoJLnN0Mntmb250LXNpemU6OXB4O30KPC9zdHlsZT4KPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iLTE1LjQsMC42IC0yMC4zLDUuOSAtMTUuNCwxMC43ICIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTExLjcsMTMuOGgxYzIsMCwzLjYtMS42LDMuNi0zLjZWOS41YzAtMi4xLTEuNy0zLjgtMy44LTMuOGgtOC43Ii8+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgLTAuMjg5MyAxMC4yNTI3KSIgY2xhc3M9InN0MSBzdDIiPnsoICl9PC90ZXh0Pgo8L3N2Zz4K";
        }else if(j===5){
            MathTOUCH.KeyBoard_keyStr4[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYuMiAxNi4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNi4yIDE2LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMDQwMDAwO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cgkuc3Qxe2ZvbnQtZmFtaWx5OidUaW1lc05ld1JvbWFuUFMtSXRhbGljTVQnO30KCS5zdDJ7Zm9udC1zaXplOjUuNDIwNHB4O30KPC9zdHlsZT4KPHBvbHlsaW5lIGNsYXNzPSJzdDAiIHBvaW50cz0iLTE1LjQsMC42IC0yMC4zLDUuOSAtMTUuNCwxMC43ICIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNLTExLjcsMTMuOGgxYzIsMCwzLjYtMS42LDMuNi0zLjZWOS41YzAtMi4xLTEuNy0zLjgtMy44LTMuOGgtOC43Ii8+CjxnPgoJPHBhdGggZD0iTTkuNiwzQzcuNywxLjYsNy45LDcuNCw3LjcsOC40QzcuNiwxMCw3LjQsMTIsNi4xLDEzLjNjLTAuNSwwLjQtMS4xLDAuNS0xLjcsMC40YzAuNi0wLjEsMS4xLTAuMywxLjQtMC43CgkJYzEuOS0yLjgsMC41LTYuOCwyLjMtOS43QzguNCwyLjgsOS4yLDIuNCw5LjYsM0w5LjYsM3oiLz4KPC9nPgo8Y2lyY2xlIGN4PSI5LjEiIGN5PSIzLjMiIHI9IjAuNiIvPgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDcuNzI5NCAxMy43ODc3KSIgY2xhc3M9InN0MSBzdDIiPmE8L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMTAuMDU4NSA1LjgxMjYpIiBjbGFzcz0ic3QxIHN0MiI+YjwvdGV4dD4KPGNpcmNsZSBjeD0iNC41IiBjeT0iMTMuMSIgcj0iMC42Ii8+Cjwvc3ZnPgo=";
        }else if(j===6){
            MathTOUCH.KeyBoard_keyStr4[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYuMiAxNi4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNi4yIDE2LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7Zm9udC1mYW1pbHk6J1RpbWVzTmV3Um9tYW5QUy1JdGFsaWNNVCc7fQoJLnN0MXtmb250LXNpemU6NHB4O30KCS5zdDJ7Zm9udC1mYW1pbHk6J1RpbWVzTmV3Um9tYW5QU01UJzt9Cgkuc3Qze2ZvbnQtc2l6ZToxMHB4O30KPC9zdHlsZT4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA1LjIwODUgMTQuMjU4NikiPjx0c3BhbiB4PSIwIiB5PSIwIiBjbGFzcz0ic3QwIHN0MSI+aSA8L3RzcGFuPjx0c3BhbiB4PSIyLjEiIHk9IjAiIGNsYXNzPSJzdDIgc3QxIj49MTwvdHNwYW4+PC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDUuMjc3NiAxMC44NTE4KSIgY2xhc3M9InN0MiBzdDMiPs6jPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDcuMTQwNyAzLjYwMzgpIiBjbGFzcz0ic3QwIHN0MSI+bjwvdGV4dD4KPC9zdmc+Cg==";
        }else if(j===7){
            MathTOUCH.KeyBoard_keyStr4[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYuMiAxNi4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNi4yIDE2LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7Zm9udC1mYW1pbHk6J1RpbWVzTmV3Um9tYW5QU01UJzt9Cgkuc3Qxe2ZvbnQtc2l6ZTo4cHg7fQoJLnN0Mntmb250LWZhbWlseTonVGltZXNOZXdSb21hblBTLUl0YWxpY01UJzt9Cjwvc3R5bGU+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMS4zMTc3IDEwLjQ3OSkiIGNsYXNzPSJzdDAgc3QxIj5zaW48L3RleHQ+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMTAuOTEyIDEwLjQ3OTIpIiBjbGFzcz0ic3QyIHN0MSI+zrg8L3RleHQ+Cjwvc3ZnPgo=";
        }else if(j===8){
            MathTOUCH.KeyBoard_keyStr4[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYuMiAxNi4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNi4yIDE2LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7Zm9udC1mYW1pbHk6J1RpbWVzTmV3Um9tYW5QU01UJzt9Cgkuc3Qxe2ZvbnQtc2l6ZTo4cHg7fQoJLnN0Mntmb250LWZhbWlseTonVGltZXNOZXdSb21hblBTLUl0YWxpY01UJzt9Cgkuc3Qze2ZvbnQtc2l6ZTo1cHg7fQo8L3N0eWxlPgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDIuOTI0MSA5LjI3OTIpIiBjbGFzcz0ic3QwIHN0MSI+bGltPC90ZXh0Pgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik05LjEsMTAuNWMwLjIsMC4yLDAuNCwwLjQsMC42LDAuNWMwLjIsMC4xLDAuMywwLjIsMC40LDAuM3YwLjFjLTAuMiwwLjEtMC4zLDAuMi0wLjUsMC4zYy0wLjIsMC4xLTAuMywwLjMtMC41LDAuNUg4LjkKCQkJYzAuMi0wLjMsMC4zLTAuNiwwLjUtMC44SDUuNXYtMC4yaDMuOWMtMC4xLTAuMi0wLjItMC4zLTAuMy0wLjRTOSwxMC43LDguOSwxMC41SDkuMXoiLz4KCQk8cGF0aCBkPSJNMTEuMywxMC41Yy0wLjMsMC0wLjUsMC4yLTAuNSwwLjVjMCwwLjMsMC4zLDAuNiwwLjYsMC42YzAuNCwwLDAuNi0wLjIsMC45LTAuNmwwLjEsMC4yYy0wLjMsMC41LTAuNywwLjctMSwwLjcKCQkJYy0wLjQsMC0wLjgtMC40LTAuOC0wLjhjMC0wLjUsMC4zLTAuOSwwLjgtMC45YzAuNSwwLDAuOCwwLjMsMS4xLDAuN2MwLjMsMC40LDAuNSwwLjcsMC45LDAuN2MwLjMsMCwwLjUtMC4yLDAuNS0wLjUKCQkJYzAtMC4zLTAuMy0wLjYtMC42LTAuNmMtMC40LDAtMC42LDAuMi0wLjksMC42bC0wLjEtMC4yYzAuMy0wLjUsMC43LTAuNywxLTAuN2MwLjQsMCwwLjgsMC40LDAuOCwwLjhjMCwwLjUtMC4zLDAuOS0wLjgsMC45CgkJCWMtMC41LDAtMC44LTAuMy0xLjEtMC43QzExLjksMTAuOCwxMS42LDEwLjUsMTEuMywxMC41eiIvPgoJPC9nPgo8L2c+Cjx0ZXh0IHRyYW5zZm9ybT0ibWF0cml4KDEgMCAwIDEgMi42MjE2IDEyLjI0MDMpIiBjbGFzcz0ic3QyIHN0MyI+eDwvdGV4dD4KPC9zdmc+Cg==";
        }else if(j===9){
            MathTOUCH.KeyBoard_keyStr4[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTYuMiAxNi4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNi4yIDE2LjI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7Zm9udC1mYW1pbHk6J1RpbWVzTmV3Um9tYW5QUy1JdGFsaWNNVCc7fQoJLnN0MXtmb250LXNpemU6MTRweDt9Cgkuc3Qye2ZvbnQtZmFtaWx5OidUaW1lc05ld1JvbWFuUFNNVCc7fQoJLnN0M3tmb250LXNpemU6OHB4O30KPC9zdHlsZT4KPHRleHQgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgMSA0LjUyMzcgMTIuNDY1NSkiIGNsYXNzPSJzdDAgc3QxIj5hPC90ZXh0Pgo8dGV4dCB0cmFuc2Zvcm09Im1hdHJpeCgxIDAgMCAxIDQuMzk5NiA2LjExODkpIiBjbGFzcz0ic3QyIHN0MyI+4oaSPC90ZXh0Pgo8L3N2Zz4K";
        }
        
        MathTOUCH.KeyBoard_key4font[j].appendChild(MathTOUCH.KeyBoard_keyStr4[j]);
        MathTOUCH.KeyBoard_key4[j].appendChild(MathTOUCH.KeyBoard_key4font[j]);
        MathTOUCH.KeyBoard_row4.appendChild(MathTOUCH.KeyBoard_key4[j]);
    }
        
    MathTOUCH.KeyBoard_key = new Array(MathTOUCH.KeyBoard_key_len);
    MathTOUCH.KeyBoard_keyStr = new Array(MathTOUCH.KeyBoard_key_len);
    MathTOUCH.KeyBoard_keyp = new Array(MathTOUCH.KeyBoard_key_len);
    MathTOUCH.KeyBoard_keyStrp = new Array(MathTOUCH.KeyBoard_key_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_key_len; j++){
        /*numKey*/
        MathTOUCH.KeyBoard_key[j] = document.createElement("li");
        MathTOUCH.KeyBoard_keyp[j] = document.createElement("div");
        MathTOUCH.KeyBoard_keyStr[j] = document.createTextNode(MathTOUCH.KeyBoard_keyDisplay[j]);
        MathTOUCH.KeyBoard_keyStrp[j] = document.createTextNode(MathTOUCH.KeyBoard_keyDisplay[j]);
        MathTOUCH.KeyBoard_key[j].className = "mt_key10";
        MathTOUCH.KeyBoard_keyp[j].className = "mt_keypop";
        MathTOUCH.KeyBoard_key[j].appendChild(MathTOUCH.KeyBoard_keyStr[j]);
        MathTOUCH.KeyBoard_keyp[j].appendChild(MathTOUCH.KeyBoard_keyStrp[j]);
        MathTOUCH.KeyBoard_key[j].appendChild(MathTOUCH.KeyBoard_keyp[j]);
    }
    MathTOUCH.KeyBoard_key1 = new Array(MathTOUCH.KeyBoard_key1_len);
    MathTOUCH.KeyBoard_keyStr1 = new Array(MathTOUCH.KeyBoard_key1_len);
    MathTOUCH.KeyBoard_key1p = new Array(MathTOUCH.KeyBoard_key1_len);
    MathTOUCH.KeyBoard_key1Strp = new Array(MathTOUCH.KeyBoard_key1_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_key1_len; j++){
        MathTOUCH.KeyBoard_key1[j] = document.createElement("li");
        if(j == 8 || j == 9){
            MathTOUCH.KeyBoard_key1p[j] = document.createElement("img");
            MathTOUCH.KeyBoard_key1p[j].alt = MathTOUCH.KeyBoard_keyDisplay1[j];
            MathTOUCH.KeyBoard_key1p[j].title = MathTOUCH.KeyBoard_keyDisplay1[j];
            MathTOUCH.KeyBoard_key1p[j].src =  MathTOUCH.SITEURL + "img/keyboard/main/"+MathTOUCH.KeyBoard_keyDisplay1[j]+".png";
            MathTOUCH.KeyBoard_keyStr1[j] = document.createElement("img");
            MathTOUCH.KeyBoard_keyStr1[j].alt = MathTOUCH.KeyBoard_keyDisplay1[j];
            MathTOUCH.KeyBoard_keyStr1[j].title = MathTOUCH.KeyBoard_keyDisplay1[j];
            MathTOUCH.KeyBoard_keyStr1[j].src =  MathTOUCH.SITEURL + "img/keyboard/main/"+MathTOUCH.KeyBoard_keyDisplay1[j]+".png";
            MathTOUCH.KeyBoard_key1[j].className = "mt_key10";
            MathTOUCH.KeyBoard_key1p[j].className = "mt_keypop3";
            MathTOUCH.KeyBoard_key1[j].appendChild(MathTOUCH.KeyBoard_keyStr1[j]);
            MathTOUCH.KeyBoard_key1[j].appendChild(MathTOUCH.KeyBoard_key1p[j]);
        }else{
            MathTOUCH.KeyBoard_key1p[j] = document.createElement("div");
            MathTOUCH.KeyBoard_keyStr1[j] = document.createTextNode(MathTOUCH.KeyBoard_keyDisplay1[j]);
            MathTOUCH.KeyBoard_key1Strp[j] = document.createTextNode(MathTOUCH.KeyBoard_keyDisplay1[j]);
            MathTOUCH.KeyBoard_key1[j].className = "mt_key10";
            MathTOUCH.KeyBoard_key1p[j].className = "mt_keypop2";
            MathTOUCH.KeyBoard_key1[j].appendChild(MathTOUCH.KeyBoard_keyStr1[j]);
            MathTOUCH.KeyBoard_key1p[j].appendChild(MathTOUCH.KeyBoard_key1Strp[j]);
            MathTOUCH.KeyBoard_key1[j].appendChild(MathTOUCH.KeyBoard_key1p[j]);
        }
    }
    MathTOUCH.KeyBoard_key2 = new Array(MathTOUCH.KeyBoard_key2_len);
    MathTOUCH.KeyBoard_keyStr2 = new Array(MathTOUCH.KeyBoard_key2_len);
    MathTOUCH.KeyBoard_key2p = new Array(MathTOUCH.KeyBoard_key2_len);
    MathTOUCH.KeyBoard_key2Strp = new Array(MathTOUCH.KeyBoard_key2_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_key2_len; j++){
        MathTOUCH.KeyBoard_key2[j] = document.createElement("li");
        if(j == 0 || j == 2 || j == 8){
            MathTOUCH.KeyBoard_key2p[j] = document.createElement("img");
            MathTOUCH.KeyBoard_key2p[j].alt = MathTOUCH.KeyBoard_keyDisplay2[j];
            MathTOUCH.KeyBoard_key2p[j].title = MathTOUCH.KeyBoard_keyDisplay2[j];
            MathTOUCH.KeyBoard_key2p[j].src =  MathTOUCH.SITEURL + "img/keyboard/main/"+MathTOUCH.KeyBoard_keyDisplay2[j]+".png";
            MathTOUCH.KeyBoard_keyStr2[j] = document.createElement("img");
            MathTOUCH.KeyBoard_keyStr2[j].alt = MathTOUCH.KeyBoard_keyDisplay2[j];
            MathTOUCH.KeyBoard_keyStr2[j].title = MathTOUCH.KeyBoard_keyDisplay2[j];
            MathTOUCH.KeyBoard_keyStr2[j].src =  MathTOUCH.SITEURL + "img/keyboard/main/"+MathTOUCH.KeyBoard_keyDisplay2[j]+".png";
            MathTOUCH.KeyBoard_key2[j].className = "mt_key10";
            MathTOUCH.KeyBoard_key2p[j].className = "mt_keypop3";
            MathTOUCH.KeyBoard_key2[j].appendChild(MathTOUCH.KeyBoard_keyStr2[j]);
            MathTOUCH.KeyBoard_key2[j].appendChild(MathTOUCH.KeyBoard_key2p[j]);
        }else{
            MathTOUCH.KeyBoard_key2p[j] = document.createElement("div");
            MathTOUCH.KeyBoard_keyStr2[j] = document.createTextNode(MathTOUCH.KeyBoard_keyDisplay2[j]);
            MathTOUCH.KeyBoard_key2Strp[j] = document.createTextNode(MathTOUCH.KeyBoard_keyDisplay2[j]);
            if(j===9){
                MathTOUCH.KeyBoard_key2p[j] = document.createElement("img");
                MathTOUCH.KeyBoard_key2p[j].alt = MathTOUCH.KeyBoard_keyDisplay2[j];
                MathTOUCH.KeyBoard_key2p[j].title = MathTOUCH.KeyBoard_keyDisplay2[j];
                MathTOUCH.KeyBoard_key2p[j].title = MathTOUCH.KeyBoard_keyDisplay2[j];
                MathTOUCH.KeyBoard_key2p[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTggNTQuOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTggNTQuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLjIsMTMuM2MtMC4yLDAuMS0wLjMsMC40LTAuNSwwLjVMOC41LDI1LjNsMTEuMiwxMS40YzAuMSwwLjIsMC4zLDAuNCwwLjUsMC41bDAuNCwwLjQKCWMwLjUsMC40LDEsMC40LDEuNywwLjRoMTYuM2MxLjksMCwzLjQtMS43LDMuNC0zLjd2LTE4YzAtMi4xLTEuNi0zLjctMy40LTMuN0gyMi4zYy0wLjUsMC0xLjIsMC4yLTEuNywwLjRMMjAuMiwxMy4zeiIvPgo8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQuNSIgeTE9IjIwIiB4Mj0iMzQuNyIgeTI9IjMwLjciLz4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjM0LjciIHkxPSIyMCIgeDI9IjI0LjUiIHkyPSIzMC43Ii8+Cjwvc3ZnPgo=";
                MathTOUCH.KeyBoard_keyStr2[j] = document.createElement("img");
                MathTOUCH.KeyBoard_keyStr2[j].alt = MathTOUCH.KeyBoard_keyDisplay2[j];
                MathTOUCH.KeyBoard_keyStr2[j].title = MathTOUCH.KeyBoard_keyDisplay2[j];
                MathTOUCH.KeyBoard_keyStr2[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTggNTQuOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTggNTQuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLjIsMTMuM2MtMC4yLDAuMS0wLjMsMC40LTAuNSwwLjVMOC41LDI1LjNsMTEuMiwxMS40YzAuMSwwLjIsMC4zLDAuNCwwLjUsMC41bDAuNCwwLjQKCWMwLjUsMC40LDEsMC40LDEuNywwLjRoMTYuM2MxLjksMCwzLjQtMS43LDMuNC0zLjd2LTE4YzAtMi4xLTEuNi0zLjctMy40LTMuN0gyMi4zYy0wLjUsMC0xLjIsMC4yLTEuNywwLjRMMjAuMiwxMy4zeiIvPgo8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQuNSIgeTE9IjIwIiB4Mj0iMzQuNyIgeTI9IjMwLjciLz4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjM0LjciIHkxPSIyMCIgeDI9IjI0LjUiIHkyPSIzMC43Ii8+Cjwvc3ZnPgo=";
                MathTOUCH.KeyBoard_key2[j].className = "mt_key10 opekeyColor";
                MathTOUCH.KeyBoard_key2p[j].className = "mt_keypop3";
            }else{
                MathTOUCH.KeyBoard_key2[j].className = "mt_key10 smallf";
                MathTOUCH.KeyBoard_key2p[j].className = "mt_keypop3";
            }
            MathTOUCH.KeyBoard_key2[j].appendChild(MathTOUCH.KeyBoard_keyStr2[j]);
            MathTOUCH.KeyBoard_key2p[j].appendChild(MathTOUCH.KeyBoard_key2Strp[j]);
            MathTOUCH.KeyBoard_key2[j].appendChild(MathTOUCH.KeyBoard_key2p[j]);
        }
    }
    MathTOUCH.KeyBoard_key3 = new Array(MathTOUCH.KeyBoard_key3_len);
    MathTOUCH.KeyBoard_keyStr3 = new Array(MathTOUCH.KeyBoard_key3_len);
    MathTOUCH.KeyBoard_key3p = new Array(MathTOUCH.KeyBoard_key3_len);
    MathTOUCH.KeyBoard_key3Strp = new Array(MathTOUCH.KeyBoard_key3_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_key3_len; j++){
        MathTOUCH.KeyBoard_key3[j] = document.createElement("li");
        MathTOUCH.KeyBoard_key3p[j] = document.createElement("div");
        if(j===0){
            MathTOUCH.KeyBoard_keyStr3[j] = document.createElement("img");
            MathTOUCH.KeyBoard_keyStr3[j].className="mt_undo";
            MathTOUCH.KeyBoard_keyStr3[j].src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB7CAYAAABZ2Y84AAAACXBIWXMAAAsSAAALEgHS3X78AAAHMklEQVR4nO2dXW7bRhDHZ4O8Wz2BlRNYOUHVE1Q9gZ0TxD1B5be+VT6B5RNEfuxT7BNYuoF0glpAHwtsscKfAmORErU7y50l5wcQiBGHofjX7Md8rbHWUq4YYwZENLLWPmf7IRLwIbcHdkIbY2bGmDUR/UNE340x1v1sjJkKeETxZGXpxpgRETmrvjjyaysimlhr1y0+WlZkY+nGmEkDwR1X7vcw9CsVZCG6MeaGiL41ELzgkohm8Z8sT8QP7xD8wfOf/2StfWN+pOwRbemBgjtGjI/TGcSKboy5DRScVPRqPkp8KGPMnIiuBTxKJxFn6cyCL5nu0ylELeSYBd9aa3XbVoEYS48wpKt3robklg4nyoKIfma87aO19obxfp0i6UIOgj/Di8aFCn6CZMO7Cp6OJKKr4GlpXfRSpEwFT0Src3rD0Oi5fLHWztv5BN2gNUtXweXQiugquCyii66CyyOq6AiNvjIKviWi31TwMKIt5Bhi4e9xgo+ttRpECSSKpavgsmEXXQWXD6voLh+dWfCNCs4P25weITS6guCa2MgMi6Wr4HkRLLoKnh/eoqOmTAXPEC/RS6FRTsEfVfB2OHshp7Hw/DnL0lXwbtBYdBW8OzQSHZGyNbPgdyp4Gk7O6Roa7R5HLV0F7ya1oqvg3aVS9DNafZyDCi6Eg7KmCKHR/+Bp+zfD93OMchuzt6JCNof2Zj+IHkHwvrLBbucZ11KSp3EvugoenRUKNRep8wN2omPR9pryQXrGBl+AeZIvACzdPYDVK8nlRL9xOrR1GSIaoN2mkpYtet/NYs//H7QDkxjc9vgPtwB0PW5jdrzMriFwDyjEX2JxzY6KLhfX6vTBGOP63A45n7JYvb8xe98UXtx8P7XWsvS7LSx9oSKJxhnkX7D64Lm+sPQBPEhq7fLZoJ+99/5+Z+nYIowxjCiyuUQ/e/9FXtkhgO3bmzppsrm8nDpVUbYh5njO1Ki/iehPxvulZoiL4Nwa4efLBM91dsi6smOkJkH6Y4wZ40swxtXGOuk84euGAHyDl8xD3bxNH7OEyy263OduYdpsPNQf/0sVnvVywmAEjSX8OFj0kvDcUTj3RRr0WPxxJPHdaDIMFr30oHMVPor4a+73yia6Ch9V/Cnze52yia7CRxV+xLx+GrGJHlH42ofskfCc66faYT7kAW+YhX9T4ffvlsuobllFV+GjC3/L9D4Pps6gJAp4gb6E3OMdFwgm9D6FC7Hz+8DbXODLc3Bzjm9lDItv5GjogcWHDvUH1s6SLgWL/4UxNHuBw/B7X7+OeMUq4BYXcAXvYT2iSytd44DI5zLgva6stfspkzUxEtkc3MkYD323eGvtOvBwwavyOok9G1aFjwMWdiHD/P79RUmBLgkf8pDveUDD4T5zuBJvzrj4zajHbmoyBj8uIzbgiNJPbqqIWuxQSrjktPhrtCftKyGffWft0StcVHhesJPxXS/tFnOtlDVFFH4Rs9BPML7FKe2JThAee8VHxtv+Crdt34T37WvTrugFWIRxCn/VQ+F9q1t2zp1kh+Zrr/gwjDG+wn1OVqqsFh+M7/pokLQ+HcL/znjLK3Ry6ENo1ntES96UAO7FGDH5Pq7qGyGiE0WkZIy+u2xrEdN+JILw12rt1YjqOVMSnitC1+W53fuziWs0BOG5QrNdFt03oWIpsrsUY0y+k3t2lEN74fwYYluKMQm/ZnwkSfiKvtvbi+4jFyj8Jofe655MPP/dzgjENw+E8EMPD1Qnt2xIkvRNStn57LPoGOkRmn3karQnkJCUqd3Ilyzg4gP23XOEVOu4t9aGvBixhPb7s9a6rt98h+a3ASx+gtXrTanDE2HomiFduKvcBmzVnoo/ZGXpfYah4GFfNKJdoPNhFiD4tpxipaJngDHm9sQ65hSLcnKJDu/CYTpU6XO5gbBaumAwj4c6mF7ed4xW0YWC7dmCoQL4oPBRRRcIYznYS5UrWud0YTDX+H+q8luopQsC5dhcgt/XOarU0gWA4XzGWAewQZeuynwCtfTE4Kz6JXPhx+RY0YeKnggXP0Ct+TfmEyHuTh3qo8N7yyBYNA1oLHCMJ2vtyQQLFb0FMGdPECXj7MpRpnEtX1ah1ZyAN22C5I8Qv3kTzireVNEZwN56AIFHuNo6uWmL81saZ/6q6A3A/nkCYQtSHclVZgXBz6pXV9GPAAteCBC3Cu96fN2y1YBV9qtQwZ9CGjDo6r0C4QcOu314SMtQHd5rCElAjMUWnrbgAg4d3qvxrSCJxRPOW2Op2NHhvYKAJj7cbHAOi2/fuEp0eJfJFlG3WYxuWSp6NZtEq/aoYhfonF5N29WuTuw7zNvT2L3wdE6vAHv07y38Vy84ZbrV5sYqeg04UOBrhFuvUIS5SFV3p6IfgamV6QqZMW4F/iyhjamKfgKkM00bxMFX6HGzhDdvKbUThoreELhmf+hWlWV7EyL6H66gURzruujnAAAAAElFTkSuQmCC";
            MathTOUCH.KeyBoard_key3Strp[j] = document.createTextNode(MathTOUCH.KeyBoard_keyDisplay3[j]);
        }else{
            MathTOUCH.KeyBoard_keyStr3[j] = document.createTextNode(MathTOUCH.KeyBoard_keyDisplay3[j]);
            MathTOUCH.KeyBoard_key3Strp[j] = document.createTextNode(MathTOUCH.KeyBoard_keyDisplay3[j]);
        }
        MathTOUCH.KeyBoard_key3[j].title = MathTOUCH.KeyBoard_keyTitle[j];
        if(j==6){
            MathTOUCH.KeyBoard_key3[j].className = "mt_opKB_enter";
        }else{
            MathTOUCH.KeyBoard_key3[j].className = "mt_opKB_arrow";
        }
        MathTOUCH.KeyBoard_key3p[j].className = "mt_keypop55";
        MathTOUCH.KeyBoard_key3[j].appendChild(MathTOUCH.KeyBoard_keyStr3[j]);
        MathTOUCH.KeyBoard_key3p[j].appendChild(MathTOUCH.KeyBoard_key3Strp[j]);
        MathTOUCH.KeyBoard_key3[j].appendChild(MathTOUCH.KeyBoard_key3p[j]);
    }
    
    MathTOUCH.KeyBoard_en1 = new Array(MathTOUCH.KeyBoard_en1_len);
    MathTOUCH.KeyBoard_enStr1 = new Array(MathTOUCH.KeyBoard_en1_len);
    MathTOUCH.KeyBoard_en1p = new Array(MathTOUCH.KeyBoard_en1_len);
    MathTOUCH.KeyBoard_en1Strp = new Array(MathTOUCH.KeyBoard_en1_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_en1_len; j++){
        MathTOUCH.KeyBoard_en1[j] = document.createElement("li");
        MathTOUCH.KeyBoard_enStr1[j] = document.createTextNode(MathTOUCH.KeyBoard_enDisplay1[j]);
        MathTOUCH.KeyBoard_en1p[j] = document.createElement("div");
        MathTOUCH.KeyBoard_en1Strp[j] = document.createTextNode(MathTOUCH.KeyBoard_enDisplay1[j]);
            
        MathTOUCH.KeyBoard_en1[j].className = "mt_key10";
        MathTOUCH.KeyBoard_en1p[j].className = "mt_keypop";
        MathTOUCH.KeyBoard_en1[j].appendChild(MathTOUCH.KeyBoard_enStr1[j]);
        MathTOUCH.KeyBoard_en1p[j].appendChild(MathTOUCH.KeyBoard_en1Strp[j]);
        MathTOUCH.KeyBoard_en1[j].appendChild(MathTOUCH.KeyBoard_en1p[j]);
    }
        
    MathTOUCH.KeyBoard_en2 = new Array(MathTOUCH.KeyBoard_en2_len);
    MathTOUCH.KeyBoard_enStr2 = new Array(MathTOUCH.KeyBoard_en2_len);
    MathTOUCH.KeyBoard_en2p = new Array(MathTOUCH.KeyBoard_en2_len);
    MathTOUCH.KeyBoard_en2Strp = new Array(MathTOUCH.KeyBoard_en2_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_en2_len; j++){
        MathTOUCH.KeyBoard_en2[j] = document.createElement("li");
        MathTOUCH.KeyBoard_enStr2[j] = document.createTextNode(MathTOUCH.KeyBoard_enDisplay2[j]);
        MathTOUCH.KeyBoard_en2p[j] = document.createElement("div");
        MathTOUCH.KeyBoard_en2Strp[j] = document.createTextNode(MathTOUCH.KeyBoard_enDisplay2[j]);
        MathTOUCH.KeyBoard_en2[j].className = "mt_key10";
        MathTOUCH.KeyBoard_en2p[j].className = "mt_keypop2";
        MathTOUCH.KeyBoard_en2[j].appendChild(MathTOUCH.KeyBoard_enStr2[j]);
        MathTOUCH.KeyBoard_en2p[j].appendChild(MathTOUCH.KeyBoard_en2Strp[j]);
        MathTOUCH.KeyBoard_en2[j].appendChild(MathTOUCH.KeyBoard_en2p[j]);
    }
    
    MathTOUCH.KeyBoard_en3 = new Array(MathTOUCH.KeyBoard_en3_len);
    MathTOUCH.KeyBoard_enStr3 = new Array(MathTOUCH.KeyBoard_en3_len);
    MathTOUCH.KeyBoard_en3p = new Array(MathTOUCH.KeyBoard_en3_len);
    MathTOUCH.KeyBoard_en3Strp = new Array(MathTOUCH.KeyBoard_en3_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_en3_len; j++){
        MathTOUCH.KeyBoard_en3[j] = document.createElement("li");
        MathTOUCH.KeyBoard_en3p[j] = document.createElement("div");
        if(j===0){
            MathTOUCH.KeyBoard_enStr3[j] = document.createElement("img");
            MathTOUCH.KeyBoard_enStr3[j].className="mt_key_caps";
            MathTOUCH.KeyBoard_enStr3[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjMwLjUgMzgyLjYiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjMwLjUgMzgyLjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDozMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00OTAuMSwyMjYuN0wzMjQuNyw4Mi4xYy0zLjItMi41LTgtMi41LTExLjIsMEwxNDguMSwyMjYuN2MtNS45LDQuNS0yLjIsMTMsNS42LDEzaDY3LjZjNC43LDAsOC41LDMuMyw4LjUsNy40Cgl2MTExYzAsNC4xLDMuOCw3LjQsOC41LDcuNGgxNjEuNmM0LjcsMCw4LjUtMy4zLDguNS03LjR2LTExMWMwLTQuMSwzLjgtNy40LDguNS03LjRoNjcuNkM0OTIuMywyMzkuNyw0OTYsMjMxLjMsNDkwLjEsMjI2Ljd6Ii8+Cjwvc3ZnPgo=";
        }else if(j===8){
            MathTOUCH.KeyBoard_enStr3[j] = document.createElement("img");
            MathTOUCH.KeyBoard_enStr3[j].className="mt_key_caps";
            MathTOUCH.KeyBoard_enStr3[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiCgkgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTggNTQuOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTggNTQuOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTIwLjIsMTMuM2MtMC4yLDAuMS0wLjMsMC40LTAuNSwwLjVMOC41LDI1LjNsMTEuMiwxMS40YzAuMSwwLjIsMC4zLDAuNCwwLjUsMC41bDAuNCwwLjQKCWMwLjUsMC40LDEsMC40LDEuNywwLjRoMTYuM2MxLjksMCwzLjQtMS43LDMuNC0zLjd2LTE4YzAtMi4xLTEuNi0zLjctMy40LTMuN0gyMi4zYy0wLjUsMC0xLjIsMC4yLTEuNywwLjRMMjAuMiwxMy4zeiIvPgo8bGluZSBjbGFzcz0ic3QwIiB4MT0iMjQuNSIgeTE9IjIwIiB4Mj0iMzQuNyIgeTI9IjMwLjciLz4KPGxpbmUgY2xhc3M9InN0MCIgeDE9IjM0LjciIHkxPSIyMCIgeDI9IjI0LjUiIHkyPSIzMC43Ii8+Cjwvc3ZnPgo=";
        }else{
            MathTOUCH.KeyBoard_enStr3[j] = document.createTextNode(MathTOUCH.KeyBoard_enDisplay3[j]);
            MathTOUCH.KeyBoard_en3Strp[j] = document.createTextNode(MathTOUCH.KeyBoard_enDisplay3[j]);
        }
        if(j==0){
            MathTOUCH.KeyBoard_en3[j].className = "mt_opKB";
            MathTOUCH.KeyBoard_en3p[j].className = "mt_keypop3";
        }else if(j==8){
            MathTOUCH.KeyBoard_en3[j].className = "mt_key10 opekeyColor";
            MathTOUCH.KeyBoard_en3p[j].className = "mt_keypop3";
        }else{
            MathTOUCH.KeyBoard_en3[j].className = "mt_key10";
            MathTOUCH.KeyBoard_en3p[j].className = "mt_keypop3";
        }
        MathTOUCH.KeyBoard_en3[j].appendChild(MathTOUCH.KeyBoard_enStr3[j]);
        /*MathTOUCH.KeyBoard_en3p[j].appendChild(MathTOUCH.KeyBoard_en3Strp[j]);*/
        MathTOUCH.KeyBoard_en3[j].appendChild(MathTOUCH.KeyBoard_en3p[j]);
    }
        
    MathTOUCH.KeyBoard_enCapStr1 = new Array(MathTOUCH.KeyBoard_enCap1_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_enCap1_len; j++){
        MathTOUCH.KeyBoard_enCapStr1[j] = document.createTextNode(MathTOUCH.KeyBoard_enCapDisplay1[j]);
    }
        
    MathTOUCH.KeyBoard_enCapStr2 = new Array(MathTOUCH.KeyBoard_enCap2_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_enCap2_len; j++){
        MathTOUCH.KeyBoard_enCapStr2[j] = document.createTextNode(MathTOUCH.KeyBoard_enCapDisplay2[j]);
    }
    MathTOUCH.KeyBoard_enCapStr3 = new Array(MathTOUCH.KeyBoard_enCap3_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_enCap3_len; j++){
        if(j===0){
            /*MathTOUCH.KeyBoard_enCapStr3[j] = document.createElement("i");
            MathTOUCH.KeyBoard_enCapStr3[j].className = "fas fa-arrow-alt-circle-up";*/
            MathTOUCH.KeyBoard_enCapStr3[j] = document.createElement("img");
            MathTOUCH.KeyBoard_enCapStr3[j].className="mt_key_caps";
            MathTOUCH.KeyBoard_enCapStr3[j].src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjMwLjUgMzgyLjYiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjMwLjUgMzgyLjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjMwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ5MC4xLDIyNi43TDMyNC43LDgyLjFjLTMuMi0yLjUtOC0yLjUtMTEuMiwwTDE0OC4xLDIyNi43Yy01LjksNC41LTIuMiwxMyw1LjYsMTNoNjcuNmM0LjcsMCw4LjUsMy4zLDguNSw3LjQKCXYxMTFjMCw0LjEsMy44LDcuNCw4LjUsNy40aDE2MS42YzQuNywwLDguNS0zLjMsOC41LTcuNHYtMTExYzAtNC4xLDMuOC03LjQsOC41LTcuNGg2Ny42QzQ5Mi4zLDIzOS43LDQ5NiwyMzEuMyw0OTAuMSwyMjYuN3oiLz4KPC9zdmc+Cg==";
        }else{
            MathTOUCH.KeyBoard_enCapStr3[j] = document.createTextNode(MathTOUCH.KeyBoard_enCapDisplay3[j]);
        }
    }
        
    MathTOUCH.KeyBoard_sym1 = new Array(MathTOUCH.KeyBoard_sym1_len);
    MathTOUCH.KeyBoard_symStr1 = new Array(MathTOUCH.KeyBoard_sym1_len);
    MathTOUCH.KeyBoard_sym2 = new Array(MathTOUCH.KeyBoard_sym2_len);
    MathTOUCH.KeyBoard_symStr2 = new Array(MathTOUCH.KeyBoard_sym2_len);
    MathTOUCH.KeyBoard_sym3 = new Array(MathTOUCH.KeyBoard_sym3_len);
    MathTOUCH.KeyBoard_symStr3 = new Array(MathTOUCH.KeyBoard_sym3_len);
        
    MathTOUCH.KeyBoard_sym1p = new Array(MathTOUCH.KeyBoard_sym1_len);
    MathTOUCH.KeyBoard_sym1Strp = new Array(MathTOUCH.KeyBoard_sym1_len);
    MathTOUCH.KeyBoard_sym2p = new Array(MathTOUCH.KeyBoard_sym2_len);
    MathTOUCH.KeyBoard_sym2Strp = new Array(MathTOUCH.KeyBoard_sym2_len);
    MathTOUCH.KeyBoard_sym3p = new Array(MathTOUCH.KeyBoard_sym3_len);
    MathTOUCH.KeyBoard_sym3Strp = new Array(MathTOUCH.KeyBoard_sym3_len);
        
    for(var j=0; j < MathTOUCH.KeyBoard_sym1_len; j++){
        MathTOUCH.KeyBoard_sym1[j] = document.createElement("li");
        MathTOUCH.KeyBoard_symStr1[j] = document.createTextNode(MathTOUCH.KeyBoard_symDisplay1[j]);
        MathTOUCH.KeyBoard_sym1p[j] = document.createElement("div");
        MathTOUCH.KeyBoard_sym1Strp[j] = document.createTextNode(MathTOUCH.KeyBoard_symDisplay1[j]);
        MathTOUCH.KeyBoard_sym1[j].className = "mt_key10";
        MathTOUCH.KeyBoard_sym1p[j].className = "mt_keypop";
        MathTOUCH.KeyBoard_sym1[j].appendChild(MathTOUCH.KeyBoard_symStr1[j]);
        MathTOUCH.KeyBoard_sym1p[j].appendChild(MathTOUCH.KeyBoard_sym1Strp[j]);
        MathTOUCH.KeyBoard_sym1[j].appendChild(MathTOUCH.KeyBoard_sym1p[j]);
    
        MathTOUCH.KeyBoard_sym2[j] = document.createElement("li");
        MathTOUCH.KeyBoard_symStr2[j] = document.createTextNode(MathTOUCH.KeyBoard_symDisplay2[j]);
        MathTOUCH.KeyBoard_sym2p[j] = document.createElement("div");
        MathTOUCH.KeyBoard_sym2Strp[j] = document.createTextNode(MathTOUCH.KeyBoard_symDisplay2[j]);
        MathTOUCH.KeyBoard_sym2[j].className = "mt_key10";
        MathTOUCH.KeyBoard_sym2p[j].className = "mt_keypop2";
        MathTOUCH.KeyBoard_sym2[j].appendChild(MathTOUCH.KeyBoard_symStr2[j]);
        MathTOUCH.KeyBoard_sym2p[j].appendChild(MathTOUCH.KeyBoard_sym2Strp[j]);
        MathTOUCH.KeyBoard_sym2[j].appendChild(MathTOUCH.KeyBoard_sym2p[j]);
        
        MathTOUCH.KeyBoard_sym3[j] = document.createElement("li");
        MathTOUCH.KeyBoard_symStr3[j] = document.createTextNode(MathTOUCH.KeyBoard_symDisplay3[j]);
        MathTOUCH.KeyBoard_sym3p[j] = document.createElement("div");
        MathTOUCH.KeyBoard_sym3Strp[j] = document.createTextNode(MathTOUCH.KeyBoard_symDisplay3[j]);
        MathTOUCH.KeyBoard_sym3[j].className = "mt_key10";
        MathTOUCH.KeyBoard_sym3p[j].className = "mt_keypop3";
        MathTOUCH.KeyBoard_sym3[j].appendChild(MathTOUCH.KeyBoard_symStr3[j]);
        MathTOUCH.KeyBoard_sym3p[j].appendChild(MathTOUCH.KeyBoard_sym3Strp[j]);
        MathTOUCH.KeyBoard_sym3[j].appendChild(MathTOUCH.KeyBoard_sym3p[j]);
    }
    
    MathTOUCH.KeyBoard_letters1 = new Array(MathTOUCH.KeyBoard_letters1_len);
    MathTOUCH.KeyBoard_letters1font = new Array(MathTOUCH.KeyBoard_letters1_len);
    MathTOUCH.KeyBoard_lettersStr1 = new Array(MathTOUCH.KeyBoard_letters1_len);
    for(var j=0; j < MathTOUCH.KeyBoard_letters1_len; j++){
        MathTOUCH.KeyBoard_letters1[j] = document.createElement("li");
        MathTOUCH.KeyBoard_letters1font[j] = document.createElement("img");
        MathTOUCH.KeyBoard_letters1font[j].alt = MathTOUCH.KeyBoard_lettersDisplay1[j];
        MathTOUCH.KeyBoard_letters1font[j].title = MathTOUCH.KeyBoard_lettersTitle1[j];
        MathTOUCH.KeyBoard_letters1font[j].src =  MathTOUCH.SITEURL + "img/keyboard/lowercase/"+MathTOUCH.KeyBoard_lettersDisplay1[j]+".png";
        MathTOUCH.KeyBoard_letters1font[j].id = "letters";
        MathTOUCH.KeyBoard_letters1[j].className = "Special";
        MathTOUCH.KeyBoard_letters1[j].appendChild(MathTOUCH.KeyBoard_letters1font[j]);
    }
    
    MathTOUCH.KeyBoard_letters2 = new Array(MathTOUCH.KeyBoard_letters2_len);
    MathTOUCH.KeyBoard_letters2font = new Array(MathTOUCH.KeyBoard_letters2_len);
    MathTOUCH.KeyBoard_lettersStr2 = new Array(MathTOUCH.KeyBoard_letters2_len);
    
    for(var j=0; j < MathTOUCH.KeyBoard_letters2_len; j++){
        MathTOUCH.KeyBoard_letters2[j] = document.createElement("li");
        MathTOUCH.KeyBoard_letters2font[j] = document.createElement("img");
        MathTOUCH.KeyBoard_letters2font[j].alt = MathTOUCH.KeyBoard_lettersDisplay2[j];
        MathTOUCH.KeyBoard_letters2font[j].title = MathTOUCH.KeyBoard_lettersTitle2[j];
        MathTOUCH.KeyBoard_letters2font[j].src =  MathTOUCH.SITEURL + "img/keyboard/uppercase/"+MathTOUCH.KeyBoard_lettersDisplay2[j]+".png";
        MathTOUCH.KeyBoard_letters2font[j].id = "letters";
        MathTOUCH.KeyBoard_letters2[j].className = "Special";
        MathTOUCH.KeyBoard_letters2[j].appendChild(MathTOUCH.KeyBoard_letters2font[j]);
    }
        
    MathTOUCH.KeyBoard_int1 = new Array(MathTOUCH.KeyBoard_int1_len);
    MathTOUCH.KeyBoard_int1font = new Array(MathTOUCH.KeyBoard_int1_len);
    MathTOUCH.KeyBoard_intStr1 = new Array(MathTOUCH.KeyBoard_int1_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_int1_len; j++){
        MathTOUCH.KeyBoard_int1[j] = document.createElement("li");
        MathTOUCH.KeyBoard_int1font[j] = document.createElement("img");
        MathTOUCH.KeyBoard_int1font[j].alt = MathTOUCH.KeyBoard_intDisplay1[j];
        MathTOUCH.KeyBoard_int1font[j].title = MathTOUCH.KeyBoard_intTitle[j];
        MathTOUCH.KeyBoard_int1font[j].src =  MathTOUCH.SITEURL + "img/keyboard/int/"+MathTOUCH.KeyBoard_intDisplay1[j]+".png";
        MathTOUCH.KeyBoard_int1font[j].id = "int";
        MathTOUCH.KeyBoard_int1[j].className = "Special";
        MathTOUCH.KeyBoard_int1[j].appendChild(MathTOUCH.KeyBoard_int1font[j]);
    }
    
    MathTOUCH.KeyBoard_par1 = new Array(MathTOUCH.KeyBoard_par1_len);
    MathTOUCH.KeyBoard_par1font = new Array(MathTOUCH.KeyBoard_par1_len);
    MathTOUCH.KeyBoard_parStr1 = new Array(MathTOUCH.KeyBoard_par1_len);
    for(var j=0; j < MathTOUCH.KeyBoard_par1_len; j++){
                MathTOUCH.KeyBoard_par1[j] = document.createElement("li");
                MathTOUCH.KeyBoard_par1font[j] = document.createElement("img");
                MathTOUCH.KeyBoard_par1font[j].alt = MathTOUCH.KeyBoard_parDisplay1[j];
                MathTOUCH.KeyBoard_par1font[j].title = MathTOUCH.KeyBoard_parTitle[j];
                MathTOUCH.KeyBoard_par1font[j].src =  MathTOUCH.SITEURL + "img/keyboard/bracket/"+MathTOUCH.KeyBoard_parDisplay1[j]+".png";
                MathTOUCH.KeyBoard_parStr1[j] = document.createElement("img");
                MathTOUCH.KeyBoard_parStr1[j].alt = MathTOUCH.KeyBoard_parDisplay1[j];
                MathTOUCH.KeyBoard_parStr1[j].title = MathTOUCH.KeyBoard_parDisplay1[j];
                MathTOUCH.KeyBoard_parStr1[j].src =  MathTOUCH.SITEURL + "img/keyboard/bracket/"+MathTOUCH.KeyBoard_parDisplay1[j]+".png";
                MathTOUCH.KeyBoard_par1font[j].id = "par";
                MathTOUCH.KeyBoard_par1[j].className = "Special";
                MathTOUCH.KeyBoard_par1font[j].appendChild(MathTOUCH.KeyBoard_parStr1[j]);
                MathTOUCH.KeyBoard_par1[j].appendChild(MathTOUCH.KeyBoard_par1font[j]);
    }
        
    MathTOUCH.KeyBoard_tri1 = new Array(MathTOUCH.KeyBoard_tri1_len);
    MathTOUCH.KeyBoard_tri1font = new Array(MathTOUCH.KeyBoard_tri1_len);
    MathTOUCH.KeyBoard_triStr1 = new Array(MathTOUCH.KeyBoard_tri1_len);
    for(var j=0; j < MathTOUCH.KeyBoard_tri1_len; j++){
                MathTOUCH.KeyBoard_tri1[j] = document.createElement("li");
                MathTOUCH.KeyBoard_tri1font[j] = document.createElement("img");
                MathTOUCH.KeyBoard_tri1font[j].alt = MathTOUCH.KeyBoard_triDisplay1[j];
                MathTOUCH.KeyBoard_tri1font[j].title = MathTOUCH.KeyBoard_triTitle[j];
                MathTOUCH.KeyBoard_tri1font[j].src =  MathTOUCH.SITEURL + "img/keyboard/tri/"+MathTOUCH.KeyBoard_triDisplay1[j]+".png";
                MathTOUCH.KeyBoard_triStr1[j] = document.createElement("img");
                MathTOUCH.KeyBoard_triStr1[j].alt = MathTOUCH.KeyBoard_triDisplay1[j];
                MathTOUCH.KeyBoard_triStr1[j].title = MathTOUCH.KeyBoard_triDisplay1[j];
                MathTOUCH.KeyBoard_triStr1[j].src =  MathTOUCH.SITEURL + "img/keyboard/tri/"+MathTOUCH.KeyBoard_triDisplay1[j]+".png";
                MathTOUCH.KeyBoard_tri1font[j].id = "tri";
                MathTOUCH.KeyBoard_tri1[j].className = "Special";
                MathTOUCH.KeyBoard_tri1font[j].appendChild(MathTOUCH.KeyBoard_triStr1[j]);
                MathTOUCH.KeyBoard_tri1[j].appendChild(MathTOUCH.KeyBoard_tri1font[j]);
    }
        
    MathTOUCH.KeyBoard_log1 = new Array(MathTOUCH.KeyBoard_log1_len);
    MathTOUCH.KeyBoard_log1font = new Array(MathTOUCH.KeyBoard_log1_len);
    MathTOUCH.KeyBoard_logStr1 = new Array(MathTOUCH.KeyBoard_log1_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_log1_len; j++){
                MathTOUCH.KeyBoard_log1[j] = document.createElement("li");
                MathTOUCH.KeyBoard_log1font[j] = document.createElement("img");
                MathTOUCH.KeyBoard_log1font[j].alt = MathTOUCH.KeyBoard_logDisplay1[j];
                MathTOUCH.KeyBoard_log1font[j].title = MathTOUCH.KeyBoard_logTitle[j];
                MathTOUCH.KeyBoard_log1font[j].src =  MathTOUCH.SITEURL + "img/keyboard/log/"+MathTOUCH.KeyBoard_logDisplay1[j]+".png";
                MathTOUCH.KeyBoard_logStr1[j] = document.createElement("img");
                MathTOUCH.KeyBoard_logStr1[j].alt = MathTOUCH.KeyBoard_logDisplay1[j];
                MathTOUCH.KeyBoard_logStr1[j].title = MathTOUCH.KeyBoard_logDisplay1[j];
                MathTOUCH.KeyBoard_logStr1[j].src =  MathTOUCH.SITEURL + "img/keyboard/log/"+MathTOUCH.KeyBoard_logDisplay1[j]+".png";
                MathTOUCH.KeyBoard_log1font[j].id = "log";
                MathTOUCH.KeyBoard_log1[j].className = "Special";
                MathTOUCH.KeyBoard_log1font[j].appendChild(MathTOUCH.KeyBoard_logStr1[j]);
                MathTOUCH.KeyBoard_log1[j].appendChild(MathTOUCH.KeyBoard_log1font[j]);
    }
    MathTOUCH.KeyBoard_sum1 = new Array(MathTOUCH.KeyBoard_sum1_len);
    MathTOUCH.KeyBoard_sum1font = new Array(MathTOUCH.KeyBoard_sum1_len);
    MathTOUCH.KeyBoard_sumStr1 = new Array(MathTOUCH.KeyBoard_sum1_len);
    for(var j = 0; j < MathTOUCH.KeyBoard_sum1_len; j++){
        MathTOUCH.KeyBoard_sum1[j] = document.createElement("li");
        MathTOUCH.KeyBoard_sum1font[j] = document.createElement("img");
        MathTOUCH.KeyBoard_sum1font[j].alt = MathTOUCH.KeyBoard_sumDisplay1[j];
        MathTOUCH.KeyBoard_sum1font[j].title = MathTOUCH.KeyBoard_sumTitle[j];
        MathTOUCH.KeyBoard_sum1font[j].src =  MathTOUCH.SITEURL + "img/keyboard/sum/"+MathTOUCH.KeyBoard_sumDisplay1[j]+".png";
        MathTOUCH.KeyBoard_sum1font[j].id = "sum";
        MathTOUCH.KeyBoard_sum1[j].className = "Special";
        MathTOUCH.KeyBoard_sum1[j].appendChild(MathTOUCH.KeyBoard_sum1font[j]);
    }
    
    MathTOUCH.KeyBoard_msym1 = new Array(MathTOUCH.KeyBoard_msym1_len);
    MathTOUCH.KeyBoard_msym1font = new Array(MathTOUCH.KeyBoard_msym1_len);
    MathTOUCH.KeyBoard_msymStr1 = new Array(MathTOUCH.KeyBoard_msym1_len);
    for(var j=0; j < MathTOUCH.KeyBoard_msym1_len; j++){
                MathTOUCH.KeyBoard_msym1[j] = document.createElement("li");
                MathTOUCH.KeyBoard_msym1font[j] = document.createElement("img");
                MathTOUCH.KeyBoard_msym1font[j].alt = MathTOUCH.KeyBoard_msymDisplay1[j];
                MathTOUCH.KeyBoard_msym1font[j].title = MathTOUCH.KeyBoard_msymTitle[j];
                MathTOUCH.KeyBoard_msym1font[j].src =  MathTOUCH.SITEURL + "img/keyboard/special/"+MathTOUCH.KeyBoard_msymDisplay1[j]+".png";
                MathTOUCH.KeyBoard_msymStr1[j] = document.createElement("img");
                MathTOUCH.KeyBoard_msymStr1[j].alt = MathTOUCH.KeyBoard_msymDisplay1[j];
                MathTOUCH.KeyBoard_msymStr1[j].title = MathTOUCH.KeyBoard_msymDisplay1[j];
                MathTOUCH.KeyBoard_msymStr1[j].src =  MathTOUCH.SITEURL + "img/keyboard/special/"+MathTOUCH.KeyBoard_msymDisplay1[j]+".png";
                MathTOUCH.KeyBoard_msym1font[j].id = "symbols";
                MathTOUCH.KeyBoard_msym1[j].className = "Special_msym";
                MathTOUCH.KeyBoard_msym1font[j].appendChild(MathTOUCH.KeyBoard_msymStr1[j]);
                MathTOUCH.KeyBoard_msym1[j].appendChild(MathTOUCH.KeyBoard_msym1font[j]);
    }
        
    document.body.appendChild(MathTOUCH.KeyBoard_BASE);
    MathTOUCH.KeyBoard_BASE.style.display="none";


    if(MathTOUCH.Device != MathTOUCH.Device_SP){
        var drag_flg = false;
        var pos1;
        var posX1;
        var posY1;
        $("#mtkeyboard_titlebar").mousedown(function(evt1) {
            if(drag_flg == false) {
                pos1 = $("#mt_keyboard").position();
                posX1 = evt1.clientX - pos1.left;
                posY1 = evt1.clientY - pos1.top;
                drag_flg = true;
            }else if(drag_flg == true) {
                drag_flg = false;
            }
        });
        $("#mtkeyboard_titlebar").mouseup(function() {
            drag_flg = false;
        });
        $(document).mousemove(function(evt2) {
            if(drag_flg == true) {
                $("#mt_keyboard").css("left",(evt2.clientX - posX1));
                $("#mt_keyboard").css("top",(evt2.clientY - posY1));
            }
        });
        
    }
    
}



MathTOUCH.mtKeyBoard = function(){
}

MathTOUCH.mtKeyBoard.prototype.init = function(mobj){
    var obj=this;
    MathTOUCH.KeyBoard_en3[0].onclick = (function(){
                      return function(){
                      obj.changeKeyBoard(mobj,MathTOUCH.KeyBoard_enCode3[0]);
                      }
                      })();
    
    if(MathTOUCH.Device != MathTOUCH.Device_SP){
        MathTOUCH.KeyBoard_titlebar_close.onclick = (function(){
            return function(){
                mobj.mtcancel();
            }
        })();


    
        MathTOUCH.KeyBoard_menubar_edit.onclick = (function(j){
            return function(){
                addEventListener("click", edit_menu);
            }
        })();
    
        MathTOUCH.KeyBoard_menubar_edit_menuarea_li[0].onclick = (function(){
            return function(){
                mobj.pushSoftKeyExt(27);
            }
        })();
    
        MathTOUCH.KeyBoard_menubar_edit_menuarea_li[1].onclick = (function(){
            return function(){
            }
        })();
    
        MathTOUCH.KeyBoard_menubar_settings.onclick = (function(j){
            return function(){
                addEventListener("click", settings_menu);
            }
        })();
    
        MathTOUCH.KeyBoard_menubar_settings_menu_li[0].onclick = (function(){
            return function(){
                MathTOUCH.KeyBoard_menubar_settings_menu.style.display = "none";
                mobj.insertLaTeX();
            }
        })();
    
        MathTOUCH.KeyBoard_menubar_settings_menu_li[1].onclick = (function(){
            return function(){
                MathTOUCH.KeyBoard_menubar_settings_menu.style.display = "none";
                if(window.confirm('学習状態を初期化しますか？')){
                    NES.resetTable();
                }else{
                    window.alert('キャンセルされました。');
                }
            }
        })();

        MathTOUCH.KeyBoard_menubar_history.onclick = (function(j){
            return function(){
                obj.exlogKeyList(mobj);
                addEventListener("click", history_menu);
            }
        })(j);
    }
    

    for(var j = 0; j < MathTOUCH.KeyBoard_key4_len; j++){
            MathTOUCH.KeyBoard_key4[j].onclick = (function(j){
                                                     return function(){
                                                     obj.changeKeyBoard(mobj,MathTOUCH.KeyBoard_keyCode4[j]);
                                                     }
                                                     })(j);
    }
    for(var j = 0; j < MathTOUCH.KeyBoard_key_len; j++){
        MathTOUCH.KeyBoard_key[j].onclick = (function(j){
                                            return function(){
                                            mobj.insertKey(MathTOUCH.KeyBoard_keyVal[j], MathTOUCH.KeyBoard_keyCode[j]);
                                            }
                                            })(j);
        
    }
    
    for(var j = 0; j < MathTOUCH.KeyBoard_key1_len; j++){
        MathTOUCH.KeyBoard_key1[j].onclick = (function(j){
            return function(){
                mobj.pushSoftKey(MathTOUCH.KeyBoard_keyVal1[j]);
            }
        })(j);
    }
    
    for(var j = 0; j < MathTOUCH.KeyBoard_key2_len; j++){
        MathTOUCH.KeyBoard_key2[j].onclick = (function(j){
            return function(){
                if(j==9){
                    mobj.keyProcess(MathTOUCH.KeyBoard_keyCode2[j]);
                }else{
                    mobj.pushSoftKey(MathTOUCH.KeyBoard_keyVal2[j]);
                }
            }
        })(j);
    }
    
    for(var j = 0; j < MathTOUCH.KeyBoard_key3_len; j++){
        MathTOUCH.KeyBoard_key3[j].onclick = (function(j){
            return function(){
                if(j==0){
                    mobj.pushSoftKeyExt(27);
                }else if(j==1){
                    if(mobj.targetMode==0) mobj.pushSoftKey(MathTOUCH.KeyBoard_keyVal3[j]);
                    else mobj.pushSoftKey(' ');
                }else{
                    mobj.insertKey(MathTOUCH.KeyBoard_keyVal3[j], MathTOUCH.KeyBoard_keyCode3[j]);
                }
            }
        })(j);
    }

    
    for(var j = 0; j < MathTOUCH.KeyBoard_en1_len; j++){
        MathTOUCH.KeyBoard_en1[j].onclick = (function(j){
                                                return function(){
                                                if(!MathTOUCH.KeyBoard_enCap_flag){
                                                  mobj.insertKey(MathTOUCH.KeyBoard_enVal1[j], MathTOUCH.KeyBoard_enCode1[j]);
                                                  }else{
                                                  mobj.insertKey(MathTOUCH.KeyBoard_enCapVal1[j], MathTOUCH.KeyBoard_enCapCode1[j]);
                                                  }
                                                }
                                                })(j);
    }
    
    for(var j = 0; j < MathTOUCH.KeyBoard_en2_len; j++){
        MathTOUCH.KeyBoard_en2[j].onclick = (function(j){
                                                return function(){
                                                  if(!MathTOUCH.KeyBoard_enCap_flag){
                                                    mobj.insertKey(MathTOUCH.KeyBoard_enVal2[j], MathTOUCH.KeyBoard_enCode2[j]);
                                                  }else{
                                                    mobj.insertKey(MathTOUCH.KeyBoard_enCapVal2[j], MathTOUCH.KeyBoard_enCapCode2[j]);
                                                  }
                                                }
                                                })(j);
    }
    
    for(var j = 1; j < MathTOUCH.KeyBoard_en3_len; j++){
        MathTOUCH.KeyBoard_en3[j].onclick = (function(j){
                                                  return function(){
                                                  if(!MathTOUCH.KeyBoard_enCap_flag){
                                                  mobj.insertKey(MathTOUCH.KeyBoard_enVal3[j], MathTOUCH.KeyBoard_enCode3[j]);
                                                  }else{
                                                  mobj.insertKey(MathTOUCH.KeyBoard_enCapVal3[j], MathTOUCH.KeyBoard_enCapCode3[j]);
                                                  }
                                                  }
                                                  })(j);
    }
    
    
    for(var j = 0; j < MathTOUCH.KeyBoard_letters1_len; j++){
        MathTOUCH.KeyBoard_letters1[j].onclick = (function(j){
                                                     return function(){
                                                         mobj.insertKey(MathTOUCH.KeyBoard_lettersVal1[j]);
                                                     }
                                                     })(j);
    }
    
    for(var j = 0; j < MathTOUCH.KeyBoard_letters2_len; j++){
        MathTOUCH.KeyBoard_letters2[j].onclick = (function(j){
                                                     return function(){
                                                         mobj.insertKey(MathTOUCH.KeyBoard_lettersVal2[j]);
                                                     }
                                                     })(j);
    }
    
    for(var j = 0; j < MathTOUCH.KeyBoard_int1_len; j++){
        MathTOUCH.KeyBoard_int1[j].onclick = (function(j){
                                                 return function(){
                                                 mobj.insertKey(MathTOUCH.KeyBoard_intVal1[j]);
                                                 }
                                                 })(j);

    }
    
    for(var j = 0; j < MathTOUCH.KeyBoard_par1_len; j++){
        MathTOUCH.KeyBoard_par1[j].onclick = (function(j){
            return function(){
                mobj.pushSoftKey(MathTOUCH.KeyBoard_parVal1[j]);
            }
        })(j);
    }
    
    for(var j = 0; j < MathTOUCH.KeyBoard_tri1_len; j++){
        MathTOUCH.KeyBoard_tri1[j].onclick = (function(j){
                                                 return function(){
                                                     mobj.pushSoftKey(MathTOUCH.KeyBoard_triVal1[j]);
                                                 }
                                                 })(j);
    }
    
    for(var j = 0; j < MathTOUCH.KeyBoard_log1_len; j++){
        MathTOUCH.KeyBoard_log1[j].onclick = (function(j){
                                                 return function(){
                                                     mobj.pushSoftKey(MathTOUCH.KeyBoard_logVal1[j]);
                                                 }
                                                 })(j);
    }
    
    for(var j = 0; j < MathTOUCH.KeyBoard_sum1_len; j++){
        MathTOUCH.KeyBoard_sum1[j].onclick = (function(j){
                                                 return function(){
                                                 mobj.insertKey(MathTOUCH.KeyBoard_sumVal1[j]);
                                                
                                                 }
                                                 })(j);
    }
    
   for(var j = 0; j < MathTOUCH.KeyBoard_msym1_len; j++){
        MathTOUCH.KeyBoard_msym1[j].onclick = (function(j){
                                                  return function(){
                                                  mobj.insertKey(MathTOUCH.KeyBoard_msymVal1[j]);
                                                      
                                                  }
                                                  })(j);
    }
            
    this.resetKeyboard();
    this.defaultKeyboard();
}
                                               
MathTOUCH.mtKeyBoard.prototype.morePred = function(mode){
    expKB(mode);
}
                                
function expKB(mode){
    if(mode==null||mode==undefined) mode=0;
            if((mode==0&&$('#mt_areaL').hasClass("mt_std"))||mode==1){
                MathTOUCH.KeyBoard_areaRbutton.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjMwLjUgMzgyLjYiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjMwLjUgMzgyLjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZD0iTTMzOS43LDEwLjFsMjgwLjYsMjgwLjZjMTMuNSwxMy41LDEzLjUsMzUuNSwwLDQ5bC0zMi43LDMyLjdjLTEzLjUsMTMuNS0zNS40LDEzLjUtNDguOSwwLjFMMzE1LjIsMTUwLjJMOTEuOCwzNzIuNQoJQzc4LjMsMzg2LDU2LjQsMzg2LDQyLjksMzcyLjVsLTMyLjctMzIuN2MtMTMuNS0xMy41LTEzLjUtMzUuNSwwLTQ5TDI5MC43LDEwLjFDMzA0LjMtMy40LDMyNi4yLTMuNCwzMzkuNywxMC4xTDMzOS43LDEwLjF6Ii8+Cjwvc3ZnPgo=";
                $('#mt_areaL').removeClass("mt_std");
                $('#mtkeyboard_candidates_ul').css('display', 'block');
                $('#mtkeyboard_candidates').addClass("mtcnd_exp");
                $('#mtkeyboard_candidates').height($('#mtkeyboard_candidates').height()+$('#mt_area1').height());
                $('#mt_area1').hide();
                $('#mtcanvas').focus();
            }else{
                MathTOUCH.KeyBoard_areaRbutton.src = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuODrOOCpOODpOODvF8xIiBmb2N1c2FibGU9ImZhbHNlIgoJIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjMwLjUgMzgyLjYiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjMwLjUgMzgyLjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHBhdGggZD0iTTI5MC43LDM3Mi41TDEwLjEsOTEuOWMtMTMuNS0xMy41LTEzLjUtMzUuNSwwLTQ5bDMyLjctMzIuN0M1Ni40LTMuNCw3OC4zLTMuNCw5MS44LDEwLjFsMjIzLjQsMjIyLjRMNTM4LjcsMTAuMQoJYzEzLjUtMTMuNSwzNS40LTEzLjUsNDguOSwwLjFsMzIuNywzMi43YzEzLjUsMTMuNSwxMy41LDM1LjUsMCw0OUwzMzkuNywzNzIuNUMzMjYuMiwzODYsMzA0LjMsMzg2LDI5MC43LDM3Mi41TDI5MC43LDM3Mi41eiIvPgo8L3N2Zz4K";
                $('#mt_areaL').addClass("mt_std");
                $('#mtkeyboard_candidates_ul').css('display', 'flex');
                $('#mtkeyboard_candidates').removeClass("mtcnd_exp");
                $('#mtkeyboard_candidates').height($('#mtkeyboard_candidates').height()-$('#mt_area1').height());
                $('#mt_area1').show();
                $('#mtcanvas').focus();
            }
}


MathTOUCH.mtKeyBoard.prototype.defaultKeyboard = function(){
    MathTOUCH.KeyBoard_key4[0].className = "selectKB mt_area2_li";
    $(MathTOUCH.KeyBoard_area1).removeClass("scrollarea");
            for(var j = 0; j < MathTOUCH.KeyBoard_key_len; j++){
                MathTOUCH.KeyBoard_row0.appendChild(MathTOUCH.KeyBoard_key[j]);
            }
            for(var j = 0; j < MathTOUCH.KeyBoard_key1_len; j++){
                MathTOUCH.KeyBoard_row1.appendChild(MathTOUCH.KeyBoard_key1[j]);
            }
            for(var j = 0; j < MathTOUCH.KeyBoard_key2_len; j++){
                MathTOUCH.KeyBoard_row2.appendChild(MathTOUCH.KeyBoard_key2[j]);
            }
            for(var j = 0; j < MathTOUCH.KeyBoard_key3_len; j++){
                MathTOUCH.KeyBoard_row3.appendChild(MathTOUCH.KeyBoard_key3[j]);
            }
}



MathTOUCH.mtKeyBoard.prototype.enKeyboard = function(){
            MathTOUCH.KeyBoard_key4[1].className = "selectKB mt_area2_li";
            $(MathTOUCH.KeyBoard_area1).removeClass("scrollarea");
            for(var i = 0; i < MathTOUCH.KeyBoard_en1_len; i++){
                MathTOUCH.KeyBoard_row0.appendChild(MathTOUCH.KeyBoard_en1[i]);
            }
            for(var i = 0; i < MathTOUCH.KeyBoard_en2_len; i++){
                MathTOUCH.KeyBoard_row1.appendChild(MathTOUCH.KeyBoard_en2[i]);
            }
            for(var i = 0; i < MathTOUCH.KeyBoard_en3_len; i++){
                MathTOUCH.KeyBoard_row2.appendChild(MathTOUCH.KeyBoard_en3[i]);
            }
            for(var i = 0; i < MathTOUCH.KeyBoard_key3_len; i++){
                MathTOUCH.KeyBoard_row3.appendChild(MathTOUCH.KeyBoard_key3[i]);
            }
}

MathTOUCH.mtKeyBoard.prototype.LowerKeyboard = function(){
            MathTOUCH.KeyBoard_key4[1].className = "selectKB mt_area2_li";
            $(MathTOUCH.KeyBoard_area1).removeClass("scrollarea");
            for(var i = 0; i < MathTOUCH.KeyBoard_en1_len; i++){
                MathTOUCH.KeyBoard_row0.appendChild(MathTOUCH.KeyBoard_en1[i]);
            }
            for(var i = 0; i < MathTOUCH.KeyBoard_en2_len; i++){
                MathTOUCH.KeyBoard_row1.appendChild(MathTOUCH.KeyBoard_en2[i]);
            }
            for(var i = 0; i < MathTOUCH.KeyBoard_en3_len; i++){
                MathTOUCH.KeyBoard_row2.appendChild(MathTOUCH.KeyBoard_en3[i]);
            }
            for(var i = 0; i < MathTOUCH.KeyBoard_key3_len; i++){
                MathTOUCH.KeyBoard_row3.appendChild(MathTOUCH.KeyBoard_key3[i]);
            }
}

MathTOUCH.mtKeyBoard.prototype.enCapKeyboard = function(){
            MathTOUCH.KeyBoard_key4[1].className = "selectKB mt_area2_li";
            if(!MathTOUCH.KeyBoard_enCap_flag){
                for(var j = 0; j < MathTOUCH.KeyBoard_en1_len; j++){
                    MathTOUCH.KeyBoard_en1[j].replaceChild(MathTOUCH.KeyBoard_enCapStr1[j],MathTOUCH.KeyBoard_enStr1[j]);
                }
                for(var j = 0; j < MathTOUCH.KeyBoard_en2_len; j++){
                    MathTOUCH.KeyBoard_en2[j].replaceChild(MathTOUCH.KeyBoard_enCapStr2[j],MathTOUCH.KeyBoard_enStr2[j]);
                }
                for(var j = 0; j < MathTOUCH.KeyBoard_en3_len-1; j++){
                    if(j == 0 && $(MathTOUCH.KeyBoard_en3[0]).hasClass("mt_opKB")){
                        $(MathTOUCH.KeyBoard_en3[0]).removeClass('mt_opKB');
                        $(MathTOUCH.KeyBoard_en3[0]).addClass('mt_opKB_select');
                    }
                    MathTOUCH.KeyBoard_en3[j].replaceChild(MathTOUCH.KeyBoard_enCapStr3[j],MathTOUCH.KeyBoard_enStr3[j]);
                }
                MathTOUCH.KeyBoard_enCap_flag = true;
            }else{
                for(var j = 0; j < MathTOUCH.KeyBoard_enCap1_len; j++){
                    MathTOUCH.KeyBoard_en1[j].replaceChild(MathTOUCH.KeyBoard_enStr1[j],MathTOUCH.KeyBoard_enCapStr1[j]);
                }
                for(var j = 0; j < MathTOUCH.KeyBoard_enCap2_len; j++){
                    MathTOUCH.KeyBoard_en2[j].replaceChild(MathTOUCH.KeyBoard_enStr2[j],MathTOUCH.KeyBoard_enCapStr2[j]);
                }
                for(var j = 0; j < MathTOUCH.KeyBoard_enCap3_len; j++){
                    if(j == 0 && !$(MathTOUCH.KeyBoard_en3[0]).hasClass("mt_opKB")){
                        $(MathTOUCH.KeyBoard_en3[0]).removeClass('mt_opKB_select');
                        $(MathTOUCH.KeyBoard_en3[0]).addClass('mt_opKB');
                    }
                    MathTOUCH.KeyBoard_en3[j].replaceChild(MathTOUCH.KeyBoard_enStr3[j],MathTOUCH.KeyBoard_enCapStr3[j]);
                }
                MathTOUCH.KeyBoard_enCap_flag = false;
            }
}
                                              
                                              
MathTOUCH.mtKeyBoard.prototype.msymKeyboard = function(){
            MathTOUCH.KeyBoard_key4[2].className = "selectKB mt_area2_li";
            MathTOUCH.KeyBoard_area1.className="scrollarea";
            for(var i = 0; i < MathTOUCH.KeyBoard_msym1_len; i++){
                MathTOUCH.KeyBoard_row0.appendChild(MathTOUCH.KeyBoard_msym1[i]);
            }
            
        }

MathTOUCH.mtKeyBoard.prototype.lettersKeyboard = function(){
            MathTOUCH.KeyBoard_key4[3].className = "selectKB mt_area2_li";
            MathTOUCH.KeyBoard_area1.className="scrollarea";
            for(var i = 0; i < MathTOUCH.KeyBoard_letters1_len; i++){
                MathTOUCH.KeyBoard_row0.appendChild(MathTOUCH.KeyBoard_letters1[i]);
            }for(var i = 0; i < MathTOUCH.KeyBoard_letters2_len; i++){
                MathTOUCH.KeyBoard_row0.appendChild(MathTOUCH.KeyBoard_letters2[i]);
                
            }
            
}

MathTOUCH.mtKeyBoard.prototype.parKeyboard = function(){
            MathTOUCH.KeyBoard_key4[4].className = "selectKB mt_area2_li";
            MathTOUCH.KeyBoard_area1.className="scrollarea";
            for(var i = 0; i < MathTOUCH.KeyBoard_par1_len; i++){
                MathTOUCH.KeyBoard_row0.appendChild(MathTOUCH.KeyBoard_par1[i]);
            }
            
        }
                                              
MathTOUCH.mtKeyBoard.prototype.intKeyboard = function(){
            MathTOUCH.KeyBoard_key4[5].className = "selectKB mt_area2_li";
            MathTOUCH.KeyBoard_area1.className="scrollarea";
            for(var i = 0; i < MathTOUCH.KeyBoard_int1_len; i++){
                MathTOUCH.KeyBoard_row0.appendChild(MathTOUCH.KeyBoard_int1[i]);
            }
            
}

MathTOUCH.mtKeyBoard.prototype.sumKeyboard = function(){
            MathTOUCH.KeyBoard_key4[6].className = "selectKB mt_area2_li";
            MathTOUCH.KeyBoard_area1.className="scrollarea";
            for(var i = 0; i < MathTOUCH.KeyBoard_sum1_len; i++){
                MathTOUCH.KeyBoard_row0.appendChild(MathTOUCH.KeyBoard_sum1[i]);
            }
}

MathTOUCH.mtKeyBoard.prototype.triKeyboard = function(){
            MathTOUCH.KeyBoard_key4[7].className = "selectKB mt_area2_li";
            MathTOUCH.KeyBoard_area1.className="scrollarea";
            for(var i = 0; i < MathTOUCH.KeyBoard_tri1_len; i++){
                MathTOUCH.KeyBoard_row0.appendChild(MathTOUCH.KeyBoard_tri1[i]);
            }
            
        }


MathTOUCH.mtKeyBoard.prototype.logKeyboard = function(){
            MathTOUCH.KeyBoard_key4[8].className = "selectKB mt_area2_li";
            MathTOUCH.KeyBoard_area1.className="scrollarea";
            for(var i = 0; i < MathTOUCH.KeyBoard_log1_len; i++){
                MathTOUCH.KeyBoard_row0.appendChild(MathTOUCH.KeyBoard_log1[i]);
            }
            
        }

                                               
MathTOUCH.mtKeyBoard.prototype.getImageSrc = function(ex){
    var rep = ex.toExRep();
    var canvasIMG = document.createElement("canvas");
    var ctxIMG = canvasIMG.getContext('2d');
    let fsize = 48;
    rep.sizeEx(ctxIMG,fsize);
    canvasIMG.width = rep.getWidth();
    canvasIMG.height = rep.getAscent()+rep.getDescent();
    rep.drawEx(ctxIMG,fsize,0,rep.getAscent());
    var ans = canvasIMG.toDataURL('image/png' , 1.0);
    return ans;
}

MathTOUCH.mtKeyBoard.prototype.exlogKeyList = function(mobj){
            MathTOUCH.KeyBoard_menubar_history.className = "mt_menubar_icon_right_on";
            $(MathTOUCH.KeyBoard_menubar_history_menu_eqareaUL).empty();
            for(var j=0; j < LOG.getLoglistLength(); j++){
                var exKW=LOG.getLoglistAt(j);
                var xtml=exKW.keyword+"@@@"+exKW.theWord;
                var ex=EXTML.parseAny(xtml);
                if(ex==null) alert("履歴式候補エラー　in mt_keyboard");
                        
                MathTOUCH.KeyBoard_exlogKeyList[j] = document.createElement("li");
                MathTOUCH.KeyBoard_exlogKeyfont[j] = document.createElement("img");
                MathTOUCH.KeyBoard_exlogKeyfont[j].alt = xtml;
                MathTOUCH.KeyBoard_exlogKeyfont[j].style.height="30px";
                MathTOUCH.KeyBoard_exlogKeyfont[j].title = ex.getInputWord();
                MathTOUCH.KeyBoard_exlogKeyfont[j].src = this.getImageSrc(ex);
                MathTOUCH.KeyBoard_exlogKeyList[j].className = "history_eq";
                MathTOUCH.KeyBoard_exlogKeyList[j].appendChild(MathTOUCH.KeyBoard_exlogKeyfont[j]);
                MathTOUCH.KeyBoard_exlogKeyList[j].onclick = (function(j){
                    return function(xtml){
                        var xtml=MathTOUCH.KeyBoard_exlogKeyfont[j].alt;
                        var ex=EXTML.parseAny(xtml);
                        var bres=[];
                        bres.push(ex);
                        mobj.insertBres(bres);
                        MathTOUCH.KeyBoard_menubar_history.className = "mt_menubar_textbutton";
                        $('#mtkeyboard_menubar_history_menu').fadeOut();
                            }
                    
                    })(j);
            }
            for(var i = 0; i < MathTOUCH.KeyBoard_exlogKeyList.length; i++){
                MathTOUCH.KeyBoard_menubar_history_menu_eqareaUL.appendChild(MathTOUCH.KeyBoard_exlogKeyList[i]);
            }
}
                                              
function history_menu(e){
            if(!$(e.target).closest('#mtkeyboard_menubar_history_menu').length && !$(e.target).closest('#mtkeyboard_menubar_history').length){
                MathTOUCH.KeyBoard_menubar_history.className = "mt_menubar_textbutton";
                $('#mtkeyboard_menubar_history_menu').fadeOut();
                removeEventListener("click", history_menu);
            }else if($(e.target).closest('#mtkeyboard_menubar_history').length){
                if($('#mtkeyboard_menubar_history_menu').is(':hidden')){
                    $('#mtkeyboard_menubar_history_menu').show();
                    MathTOUCH.KeyBoard_menubar_history.className = "mt_menubar_textbutton_on";
                }else{
                    $('#mtkeyboard_menubar_history_menu').fadeOut();
                    MathTOUCH.KeyBoard_menubar_history.className = "mt_menubar_textbutton";
                    removeEventListener("click", history_menu);
                }
            }
};
            
function settings_menu(e){
    if(!$(e.target).closest('#mtkeyboard_menubar_settings_menu').length && !$(e.target).closest('#mtkeyboard_menubar_settings').length){
        MathTOUCH.KeyBoard_menubar_settings.className = "mt_menubar_icon_right";
        $('#mtkeyboard_menubar_settings_menu').fadeOut();
        removeEventListener("click", settings_menu);
    }else if($(e.target).closest('#mtkeyboard_menubar_settings').length){
        if($('#mtkeyboard_menubar_settings_menu').is(':hidden')){
            $('#mtkeyboard_menubar_settings_menu').show();
            MathTOUCH.KeyBoard_menubar_settings.className = "mt_menubar_icon_right_on";
        }else{
            $('#mtkeyboard_menubar_settings_menu').fadeOut();
            MathTOUCH.KeyBoard_menubar_settings.className = "mt_menubar_icon_right";
            removeEventListener("click", settings_menu);
        }
    }
};
                                              
function edit_menu(e){
            if(!$(e.target).closest('#mtkeyboard_menubar_edit').length && !$(e.target).closest('#mtkeyboard_menubar_edit_menuarea').length){
                $('#mtkeyboard_menubar_edit_menuarea').fadeOut();
                MathTOUCH.KeyBoard_menubar_edit.className = "mt_menubar_textbutton";
                removeEventListener("click", edit_menu);
            }else if($(e.target).closest('#mtkeyboard_menubar_edit').length){
                if($('#mtkeyboard_menubar_edit_menuarea').is(':hidden')){
                    $('#mtkeyboard_menubar_edit_menuarea').show();
                    MathTOUCH.KeyBoard_menubar_edit.className = "mt_menubar_textbutton_on";
                }else{
                    $('#mtkeyboard_menubar_edit_menuarea').fadeOut();
                    MathTOUCH.KeyBoard_menubar_edit.className = "mt_menubar_textbutton";
                    removeEventListener("click", edit_menu);
                }
            }
            
        };

                                              
MathTOUCH.mtKeyBoard.prototype.resetKeyboard = function(){
    $(MathTOUCH.KeyBoard_row0).empty();
    $(MathTOUCH.KeyBoard_row1).empty();
    $(MathTOUCH.KeyBoard_row2).empty();
    $(MathTOUCH.KeyBoard_row3).empty();
    $(MathTOUCH.KeyBoard_key4).removeClass("selectKB");
}


MathTOUCH.mtKeyBoard.prototype.changeKeyBoard = function(mobj,type){
            if(!$('#mt_areaL').hasClass("mt_std")){
                $('#mt_areaL').addClass("mt_std");
                $('#mtkeyboard_candidates_ul').css('display', 'flex');
                $('#mtkeyboard_candidates').removeClass("mtcnd_exp");
                $('#mtkeyboard_candidates').height($('#mtkeyboard_candidates').height()-$('#mt_area1').height());
                $('#mt_area1').show();
            }
            if(type==="123"){
                this.resetKeyboard();
                this.defaultKeyboard();
            }else if(type==="abc"){
                this.resetKeyboard();
                this.enKeyboard();
            }else if(type==="Cap"){
                this.enCapKeyboard();
            }else if(type==="basic"){
                this.resetKeyboard();
                this.msymKeyboard();
            }else if(type==="letters"){
                this.resetKeyboard();
                this.lettersKeyboard();
            }else if(type==="par"){
                this.resetKeyboard();
                this.parKeyboard();
            }else if(type==="int"){
                this.resetKeyboard();
                this.intKeyboard();
            }else if(type==="sum"){
                this.resetKeyboard();
                this.sumKeyboard();
            }else if(type==="tri"){
                this.resetKeyboard();
                this.triKeyboard();
            }else if(type==="log"){
                this.resetKeyboard();
                this.logKeyboard();
            }/*else if(type==="accent"){
                this.resetKeyboard();
                this.accentKeyboard();
            }*/else if(type==="speech"){
                this.resetKeyboard();
                this.speechKeyboard();
            }
            $('#mtcanvas').focus();
}

MathTOUCH.changeKB_area2 = function(text){
    if(!MathTOUCH.KeyBoard_area2_messageFlag){
        MathTOUCH.KeyBoard_area2_message.textContent = text;
        MathTOUCH.KeyBoard_area2.removeChild(MathTOUCH.KeyBoard_row4);
        MathTOUCH.KeyBoard_area2.appendChild(MathTOUCH.KeyBoard_area2_messagediv);
        MathTOUCH.KeyBoard_area2_messageFlag = true;
    }
}

MathTOUCH.backKB_area2 = function(){
    if(MathTOUCH.KeyBoard_area2_messageFlag){
        MathTOUCH.KeyBoard_area2.removeChild(MathTOUCH.KeyBoard_area2_messagediv);
        MathTOUCH.KeyBoard_area2.appendChild(MathTOUCH.KeyBoard_row4);
        MathTOUCH.KeyBoard_area2_messageFlag = false;
    }
}
