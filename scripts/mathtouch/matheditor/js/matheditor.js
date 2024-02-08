 (function() {
     var html="";
     var baseDir="../mathtouch/classes/";
     moduleCount = 0;
     var scripts = new Array(
                             'utils/mtmethod.js',
                             'utils/paint.js',
                             'exRep/exRep.js',
                             'EXtree/dicTable.js',
                             'EXtree/opeTable.js',
                             'EXtree/EXtree.js',
                             'EXtree/keyTable.js',
                             'EXtree/EXtree2XtreeML.js',
                             'EXtree/XtreeML2EXtree.js',
                             'EXtree/AlgebraicRules.js',
                             'EXtree/logTable.js',
                             'MathCanvas/TouchLog.js',
                             'MathCanvas/middleEX.js',
                             'MathCanvas/MathCanvasBackup.js',
                             'ML/Top10.js',
                             'ML/termTrie.js',
                             'ML/NEScore.js',
                             'EXtree/EXtree2TeX.js',
                             'EXtree/EXtree2MathML.js',
                             'EXtree/EXtree2Maxima.js',
                             'EXtree/EXtree2Maple.js',
                             'EXtree/EXtree2Mathematica.js',
                             'EXtree/EXtree2Word.js',
                             'EXtree/EXtree2JSfunction.js',
                             'EXtree/TeXParser.js',
                             'ui/mt_keyboard.js',
                             'ui/mt_menu.js',
                             'utils/mtcommon.js',
                             'MathCanvas/MathCanvas.js'
                             );
     
     for (var i=0; i<scripts.length; i++) {
         html += '<script type="text/javascript" src="' + baseDir + '/' + scripts[i] + '"></script>\n';
     }
     html += '<script type="text/javascript" src="js/main.js"></script>\n';
     document.write(html);
     
 })();
