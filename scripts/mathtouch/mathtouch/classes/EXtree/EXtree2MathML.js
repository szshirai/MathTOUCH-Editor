MathTOUCH.EXtree2MathML = function(){
    var TEX=2;
    var mathtable=[
                   ["!`","<mi>\u00A1</mi>"],["\"a","<mi>\u00E4</mi>"],["\"A","<mi>\u00C4</mi>"],["\"e","<mi>\u00EB</mi>"],["\"E","<mi>\u00CB</mi>"],
                   ["\"i","<mi>\u00EF</mi>"],["\"I","<mi>\u00CF</mi>"],["\"o","<mi>\u00F6</mi>"],["\"O","<mi>\u00D6</mi>"],["\"u","<mi>\u00FC</mi>"],
                   ["\"U","<mi>\u00DC</mi>"],["?`","<mi>\u00BF</mi>"],["^a","<mi>\u00E2</mi>"],["^A","<mi>\u00C2</mi>"],["^e","<mi>\u00EA</mi>"],
                   ["^E","<mi>\u00CA</mi>"],["^i","<mi>\u00EE</mi>"],["^I","<mi>\u00CE</mi>"],["^o","<mi>\u00F4</mi>"],["^O","<mi>\u00D4</mi>"],
                   ["^u","<mi>\u00FB</mi>"],["^U","<mi>\u00DB</mi>"],["`a","<mi>\u00E0</mi>"],["`A","<mi>\u00C0</mi>"],["`e","<mi>\u00E8</mi>"],
                   ["`E","<mi>\u00C8</mi>"],["`i","<mi>\u00EC</mi>"],["`I","<mi>\u00CC</mi>"],["`o","<mi>\u00F2</mi>"],["`O","<mi>\u00D2</mi>"],
                   ["`u","<mi>\u00F9</mi>"],["`U","<mi>\u00D9</mi>"],["|","<mi>\u2016</mi>"],["~a","<mi>\u00E3</mi>"],["~A","<mi>\u00C3</mi>"],
                   ["~n","<mi>\u00F1</mi>"],["~N","<mi>\u00D1</mi>"],["~o","<mi>\u00F5</mi>"],["~O","<mi>\u00D5</mi>"],
                   ["=a","<mi>\u0102</mi>"],["=A","<mi>\u0101</mi>"],["\'a","<mi>\u00E1</mi>"],["\'A","<mi>\u00C1</mi>"],
                   ["\\aa","<mi>\u00E5</mi>"],["\\AA","<mi>\u00C5</mi>"],["\\ae","<mi>\u00E6</mi>"],["\\AE","<mi>\u00C6</mi>"],
                   ["\\aleph","<mi>\u2135</mi>"],["\\alpha","<mi>\u03B1</mi>"],
                   ["\\backslash","<mi>\u2216</mi>"],["\\because","<mi>&#x2235;</mi>"],
                   ["\\beta","<mi>\u03B2</mi>"],["\\bot","<mi>\u22A5</mi>"],
                   ["\\Box","<mi>\u20DE</mi>"],
                   ["\\c a","<mi>\u0106</mi>"],["\\c A","<mi>\u0105</mi>"],["\\c c","<mi>\u00E7</mi>"],["\\c C","<mi>\u00C7</mi>"],
                   ["\\chi","<mi>\u03C7</mi>"],["\\clubsuit","<mi>\u2663</mi>"],["\\copyright","<mi>\u00A9</mi>"],
                   ["\\delta","<mi>\u03B4</mi>"],["\\Delta","<mi>\u0394</mi>"],["\\Diamond","<mi>\u20DF</mi>"],
                   ["\\diamondsuit","<mi>\u2662</mi>"],["\\downarrow","<mi>\u2193</mi>"],
                   ["\'e","<mi>\u00E9</mi>"],["\'E","<mi>\u00C9</mi>"],["\\ell","<mi>\u2113</mi>"],["\\emptyset","<mi>\u2205</mi>"],["\\epsilon","<mi>\u220A</mi>"],
                   ["\\eta","<mi>\u03B7</mi>"],["\\exists","<mi>\u2203</mi>"],
                   ["\\flat","<mi>\u266D</mi>"],["\\forall","<mi>\u2200</mi>"],["\\gamma","<mi>\u03B3</mi>"],
                   ["\\Gamma","<mi>\u0393</mi>"],["\\hbar","<mi>\u210F</mi>"],["\\heartsuit","<mi>\u2661</mi>"],["\'i","<mi>\u00ED</mi>"],["\'I","<mi>\u00CD</mi>"],
                   ["\\Im","<mi>\u2111</mi>"],["\\infty","<mi>\u221E</mi>"],["\\iota","<mi>\u03B9</mi>"],["\\jmath","<mi>\u2110</mi>"],["\\kappa","<mi>\u03BA</mi>"],
                   ["\\lambda","<mi>\u03BB</mi>"],["\\Lambda","<mi>\u039B</mi>"],["\\mho","<mi>\u2127</mi>"],["\\mu","<mi>\u03BC</mi>"],["\\nabla","<mi>\u2207</mi>"],
                   ["\\natural","<mi>\u266E</mi>"],["\\nearrow","<mi>\u2197</mi>"],["\\neq","<mi>\u2260</mi>"],["\\nu","<mi>\u03BD</mi>"],["\\nwarrow","<mi>\u2196</mi>"],
                   ["\\o","<mi>\u00F8</mi>"],["\'o","<mi>\u00F3</mi>"],
                   ["\\O","<mi>\u00D8</mi>"],["\'O","<mi>\u00D3</mi>"],["\\omega","<mi>\u03C9</mi>"],["\\Omega","<mi>\u03A9</mi>"],["\\P","<mi>\u00B6</mi>"],
                   ["\\phi","<mi>\u03C6</mi>"],["\\Phi","<mi>\u03A6</mi>"],["\\pi","<mi>\u03C0</mi>"],["\\Pi","<mi>\u03A0</mi>"],["\\partial","<mi>\u2202</mi>"],
                   ["\\pounds","<mi>\u00A3</mi>"],["\\psi","<mi>\u03C8</mi>"],["\\Psi","<mi>\u03A8</mi>"],["\\Re","<mi>\u211C</mi>"],["\\rho","<mi>\u03C1</mi>"],
                   ["\\S","<mi>\u00A7</mi>"],["\\searrow","<mi>\u2198</mi>"],["\\sharp","<mi>\u266F</mi>"],["\\sigma","<mi>\u03C3</mi>"],
                   ["\\Sigma","<mi>\u03A3</mi>"],["\\spadesuit","<mi>\u2660</mi>"],["\\ss","<mi>\u00DF</mi>"],["\\surd","<mi>\u221A</mi>"],["\\swarrow","<mi>\u2199</mi>"],
                   ["\\tau","<mi>\u03C4</mi>"],["\\therefore","<mi>&#x2234;</mi>"],
                   ["\\theta","<mi>\u03B8</mi>"],["\\Theta","<mi>\u0398</mi>"],
                   ["\\top","<mi>\u22A4</mi>"],["\\triangle","<mi>\u2206</mi>"],
                   ["\'u","<mi>\u00FA</mi>"],["\'U","<mi>\u00DA</mi>"],["\\u a","<mi>\u0104</mi>"],
                   ["\\u A","<mi>\u0103</mi>"],["\\upsilon","<mi>\u03C5</mi>"],["\\Upsilon","<mi>\u03A5</mi>"],
                   ["\\uparrow","<mi>\u2191</mi>"],["\\updownarrow","<mi>\u2195</mi>"],["\\Updownarrow","<mi>\u21D5</mi>"],
                   ["\\varepsilon","<mi>\u03B5</mi>"],["\\varphi","<mi>\u03C6</mi>"],
                   ["\\varpi","<mi>\u03D6</mi>"],["\\varrho","<mi>\u03F1</mi>"],["\\varsigma","<mi>\u03C2</mi>"],["\\vartheta","<mi>\u03D1</mi>"],["\\wp","<mi>\u2118</mi>"],
                   ["\\xi","<mi>\u03BE</mi>"],["\\Xi","<mi>\u039E</mi>"],["\\zeta","<mi>\u03B6</mi>"],["\\ldots","<mi>\u2026</mi>"],["\\cdots","<mi>\u22EF</mi>"],
                   ["\\vdots","<mi>\u22EE</mi>"],["\\ddots","<mi>\u22F1</mi>"],
                   
                   ["\\mathcal{A}","<mi mathvariant=\"script\">A</mi>"],
                   ["\\mbox{\\boldmath$\\mathcal{A}$}","<mi mathvariant=\"bold-script\">A</mi>"],
                   ["\\mathsf{A}","<mi mathvariant=\"sans-serif\">A</mi>"],
                   
                   ["\\mathrm{A}","<mi mathvariant=\"normal\">A</mi>"],["\\mathbf{A}","<mi mathvariant=\"bold\">A</mi>"],["\\mbox{\\boldmath$A$}","<mi mathvariant=\"bold-italic\">A</mi>"],["\\mathcal{A}","<mi mathvariant=\"script\">A</mi>"],["\\mbox{\\boldmath$\\mathcal{A}$}","<mi mathvariant=\"bold-script\">A</mi>"],["\\mathsf{A}","<mi mathvariant=\"sans-serif\">A</mi>"],
                   ["\\mathrm{B}","<mi mathvariant=\"normal\">B</mi>"],["\\mathbf{B}","<mi mathvariant=\"bold\">B</mi>"],["\\mbox{\\boldmath$B$}","<mi mathvariant=\"bold-italic\">B</mi>"],["\\mathcal{B}","<mi mathvariant=\"script\">B</mi>"],["\\mathsf{B}","<mi mathvariant=\"sans-serif\">B</mi>"],
                   ["\\mathrm{C}","<mi mathvariant=\"normal\">C</mi>"],["\\mathbf{C}","<mi mathvariant=\"bold\">C</mi>"],["\\mbox{\\boldmath$C$}","<mi mathvariant=\"bold-italic\">C</mi>"],["\\mathcal{C}","<mi mathvariant=\"script\">C</mi>"],["\\mathsf{C}","<mi mathvariant=\"sans-serif\">C</mi>"],
                   ["\\mathrm{D}","<mi mathvariant=\"normal\">D</mi>"],["\\mathbf{D}","<mi mathvariant=\"bold\">D</mi>"],["\\mbox{\\boldmath$D$}","<mi mathvariant=\"bold-italic\">D</mi>"],["\\mathcal{D}","<mi mathvariant=\"script\">D</mi>"],["\\mathsf{D}","<mi mathvariant=\"sans-serif\">D</mi>"],
                   ["\\mathrm{E}","<mi mathvariant=\"normal\">E</mi>"],["\\mathbf{E}","<mi mathvariant=\"bold\">E</mi>"],["\\mbox{\\boldmath$E$}","<mi mathvariant=\"bold-italic\">E</mi>"],["\\mathcal{E}","<mi mathvariant=\"script\">E</mi>"],["\\mathsf{E}","<mi mathvariant=\"sans-serif\">E</mi>"],
                   ["\\mathrm{F}","<mi mathvariant=\"normal\">F</mi>"],["\\mathbf{F}","<mi mathvariant=\"bold\">F</mi>"],["\\mbox{\\boldmath$F$}","<mi mathvariant=\"bold-italic\">F</mi>"],["\\mathcal{F}","<mi mathvariant=\"script\">F</mi>"],["\\mathsf{F}","<mi mathvariant=\"sans-serif\">F</mi>"],
                   ["\\mathrm{G}","<mi mathvariant=\"normal\">G</mi>"],["\\mathbf{G}","<mi mathvariant=\"bold\">G</mi>"],["\\mbox{\\boldmath$G$}","<mi mathvariant=\"bold-italic\">G</mi>"],["\\mathcal{G}","<mi mathvariant=\"script\">G</mi>"],["\\mathsf{G}","<mi mathvariant=\"sans-serif\">G</mi>"],
                   ["\\mathrm{H}","<mi mathvariant=\"normal\">H</mi>"],["\\mathbf{H}","<mi mathvariant=\"bold\">H</mi>"],["\\mbox{\\boldmath$H$}","<mi mathvariant=\"bold-italic\">H</mi>"],["\\mathcal{H}","<mi mathvariant=\"script\">H</mi>"],["\\mathsf{H}","<mi mathvariant=\"sans-serif\">H</mi>"],
                   ["\\mathrm{I}","<mi mathvariant=\"normal\">I</mi>"],["\\mathbf{I}","<mi mathvariant=\"bold\">I</mi>"],["\\mbox{\\boldmath$I$}","<mi mathvariant=\"bold-italic\">I</mi>"],["\\mathcal{I}","<mi mathvariant=\"script\">I</mi>"],["\\mathsf{I}","<mi mathvariant=\"sans-serif\">I</mi>"],
                   ["\\mathrm{J}","<mi mathvariant=\"normal\">J</mi>"],["\\mathbf{J}","<mi mathvariant=\"bold\">J</mi>"],["\\mbox{\\boldmath$J$}","<mi mathvariant=\"bold-italic\">J</mi>"],["\\mathcal{J}","<mi mathvariant=\"script\">J</mi>"],["\\mathsf{J}","<mi mathvariant=\"sans-serif\">J</mi>"],
                   ["\\mathrm{K}","<mi mathvariant=\"normal\">K</mi>"],["\\mathbf{K}","<mi mathvariant=\"bold\">K</mi>"],["\\mbox{\\boldmath$K$}","<mi mathvariant=\"bold-italic\">K</mi>"],["\\mathcal{K}","<mi mathvariant=\"script\">K</mi>"],["\\mathsf{K}","<mi mathvariant=\"sans-serif\">K</mi>"],
                   ["\\mathrm{L}","<mi mathvariant=\"normal\">L</mi>"],["\\mathbf{L}","<mi mathvariant=\"bold\">L</mi>"],["\\mbox{\\boldmath$L$}","<mi mathvariant=\"bold-italic\">L</mi>"],["\\mathcal{L}","<mi mathvariant=\"script\">L</mi>"],["\\mathsf{L}","<mi mathvariant=\"sans-serif\">L</mi>"],
                   ["\\mathrm{M}","<mi mathvariant=\"normal\">M</mi>"],["\\mathbf{M}","<mi mathvariant=\"bold\">M</mi>"],["\\mbox{\\boldmath$M$}","<mi mathvariant=\"bold-italic\">M</mi>"],["\\mathcal{M}","<mi mathvariant=\"script\">M</mi>"],["\\mathsf{M}","<mi mathvariant=\"sans-serif\">M</mi>"],
                   ["\\mathrm{N}","<mi mathvariant=\"normal\">N</mi>"],["\\mathbf{N}","<mi mathvariant=\"bold\">N</mi>"],["\\mbox{\\boldmath$N$}","<mi mathvariant=\"bold-italic\">N</mi>"],["\\mathcal{N}","<mi mathvariant=\"script\">N</mi>"],["\\mathsf{N}","<mi mathvariant=\"sans-serif\">N</mi>"],
                   ["\\mathrm{O}","<mi mathvariant=\"normal\">O</mi>"],["\\mathbf{O}","<mi mathvariant=\"bold\">O</mi>"],["\\mbox{\\boldmath$O$}","<mi mathvariant=\"bold-italic\">O</mi>"],["\\mathcal{O}","<mi mathvariant=\"script\">O</mi>"],["\\mathsf{O}","<mi mathvariant=\"sans-serif\">O</mi>"],
                   ["\\mathrm{P}","<mi mathvariant=\"normal\">P</mi>"],["\\mathbf{P}","<mi mathvariant=\"bold\">P</mi>"],["\\mbox{\\boldmath$P$}","<mi mathvariant=\"bold-italic\">P</mi>"],["\\mathcal{P}","<mi mathvariant=\"script\">P</mi>"],["\\mathsf{P}","<mi mathvariant=\"sans-serif\">P</mi>"],
                   ["\\mathrm{Q}","<mi mathvariant=\"normal\">Q</mi>"],["\\mathbf{Q}","<mi mathvariant=\"bold\">Q</mi>"],["\\mbox{\\boldmath$Q$}","<mi mathvariant=\"bold-italic\">Q</mi>"],["\\mathcal{Q}","<mi mathvariant=\"script\">Q</mi>"],["\\mathsf{Q}","<mi mathvariant=\"sans-serif\">Q</mi>"],
                   ["\\mathrm{R}","<mi mathvariant=\"normal\">R</mi>"],["\\mathbf{R}","<mi mathvariant=\"bold\">R</mi>"],["\\mbox{\\boldmath$R$}","<mi mathvariant=\"bold-italic\">R</mi>"],["\\mathcal{R}","<mi mathvariant=\"script\">R</mi>"],["\\mathsf{R}","<mi mathvariant=\"sans-serif\">R</mi>"],
                   ["\\mathrm{S}","<mi mathvariant=\"normal\">S</mi>"],["\\mathbf{S}","<mi mathvariant=\"bold\">S</mi>"],["\\mbox{\\boldmath$S$}","<mi mathvariant=\"bold-italic\">S</mi>"],["\\mathcal{S}","<mi mathvariant=\"script\">S</mi>"],["\\mathsf{S}","<mi mathvariant=\"sans-serif\">S</mi>"],
                   ["\\mathrm{T}","<mi mathvariant=\"normal\">T</mi>"],["\\mathbf{T}","<mi mathvariant=\"bold\">T</mi>"],["\\mbox{\\boldmath$T$}","<mi mathvariant=\"bold-italic\">T</mi>"],["\\mathcal{T}","<mi mathvariant=\"script\">T</mi>"],["\\mathsf{T}","<mi mathvariant=\"sans-serif\">T</mi>"],
                   ["\\mathrm{U}","<mi mathvariant=\"normal\">U</mi>"],["\\mathbf{U}","<mi mathvariant=\"bold\">U</mi>"],["\\mbox{\\boldmath$U$}","<mi mathvariant=\"bold-italic\">U</mi>"],["\\mathcal{U}","<mi mathvariant=\"script\">U</mi>"],["\\mathsf{U}","<mi mathvariant=\"sans-serif\">U</mi>"],
                   ["\\mathrm{V}","<mi mathvariant=\"normal\">V</mi>"],["\\mathbf{V}","<mi mathvariant=\"bold\">V</mi>"],["\\mbox{\\boldmath$V$}","<mi mathvariant=\"bold-italic\">V</mi>"],["\\mathcal{V}","<mi mathvariant=\"script\">V</mi>"],["\\mathsf{V}","<mi mathvariant=\"sans-serif\">V</mi>"],
                   ["\\mathrm{W}","<mi mathvariant=\"normal\">W</mi>"],["\\mathbf{W}","<mi mathvariant=\"bold\">W</mi>"],["\\mbox{\\boldmath$W$}","<mi mathvariant=\"bold-italic\">W</mi>"],["\\mathcal{W}","<mi mathvariant=\"script\">W</mi>"],["\\mathsf{W}","<mi mathvariant=\"sans-serif\">W</mi>"],
                   ["\\mathrm{X}","<mi mathvariant=\"normal\">X</mi>"],["\\mathbf{X}","<mi mathvariant=\"bold\">X</mi>"],["\\mbox{\\boldmath$X$}","<mi mathvariant=\"bold-italic\">X</mi>"],["\\mathcal{X}","<mi mathvariant=\"script\">X</mi>"],["\\mathsf{X}","<mi mathvariant=\"sans-serif\">X</mi>"],
                   ["\\mathrm{Y}","<mi mathvariant=\"normal\">Y</mi>"],["\\mathbf{Y}","<mi mathvariant=\"bold\">Y</mi>"],["\\mbox{\\boldmath$Y$}","<mi mathvariant=\"bold-italic\">Y</mi>"],["\\mathcal{Y}","<mi mathvariant=\"script\">Y</mi>"],["\\mathsf{Y}","<mi mathvariant=\"sans-serif\">Y</mi>"],
                   ["\\mathrm{Z}","<mi mathvariant=\"normal\">Z</mi>"],["\\mathbf{Z}","<mi mathvariant=\"bold\">Z</mi>"],["\\mbox{\\boldmath$Z$}","<mi mathvariant=\"bold-italic\">Z</mi>"],["\\mathcal{Z}","<mi mathvariant=\"script\">Z</mi>"],["\\mathsf{Z}","<mi mathvariant=\"sans-serif\">Z</mi>"],
                   ["\\mathrm{a}","<mi mathvariant=\"normal\">a</mi>"],["\\mathbf{a}","<mi mathvariant=\"bold\">a</mi>"],["\\mbox{\\boldmath$a$}","<mi mathvariant=\"bold-italic\">a</mi>"],["\\mathcal{a}","<mi mathvariant=\"script\">a</mi>"],["\\mathsf{a}","<mi mathvariant=\"sans-serif\">a</mi>"],
                   ["\\mathrm{b}","<mi mathvariant=\"normal\">b</mi>"],["\\mathbf{b}","<mi mathvariant=\"bold\">b</mi>"],["\\mbox{\\boldmath$b$}","<mi mathvariant=\"bold-italic\">b</mi>"],["\\mathcal{b}","<mi mathvariant=\"script\">b</mi>"],["\\mathsf{b}","<mi mathvariant=\"sans-serif\">b</mi>"],
                   ["\\mathrm{c}","<mi mathvariant=\"normal\">c</mi>"],["\\mathbf{c}","<mi mathvariant=\"bold\">c</mi>"],["\\mbox{\\boldmath$c$}","<mi mathvariant=\"bold-italic\">c</mi>"],["\\mathcal{c}","<mi mathvariant=\"script\">c</mi>"],["\\mathsf{c}","<mi mathvariant=\"sans-serif\">c</mi>"],
                   ["\\mathrm{d}","<mi mathvariant=\"normal\">d</mi>"],["\\mathbf{d}","<mi mathvariant=\"bold\">d</mi>"],["\\mbox{\\boldmath$d$}","<mi mathvariant=\"bold-italic\">d</mi>"],["\\mathcal{d}","<mi mathvariant=\"script\">d</mi>"],["\\mathsf{d}","<mi mathvariant=\"sans-serif\">d</mi>"],
                   ["\\mathrm{e}","<mi mathvariant=\"normal\">e</mi>"],["\\mathbf{e}","<mi mathvariant=\"bold\">e</mi>"],["\\mbox{\\boldmath$e$}","<mi mathvariant=\"bold-italic\">e</mi>"],["\\mathcal{e}","<mi mathvariant=\"script\">e</mi>"],["\\mathsf{e}","<mi mathvariant=\"sans-serif\">e</mi>"],
                   ["\\mathrm{f}","<mi mathvariant=\"normal\">f</mi>"],["\\mathbf{f}","<mi mathvariant=\"bold\">f</mi>"],["\\mbox{\\boldmath$f$}","<mi mathvariant=\"bold-italic\">f</mi>"],["\\mathcal{f}","<mi mathvariant=\"script\">f</mi>"],["\\mathsf{f}","<mi mathvariant=\"sans-serif\">f</mi>"],
                   ["\\mathrm{g}","<mi mathvariant=\"normal\">g</mi>"],["\\mathbf{g}","<mi mathvariant=\"bold\">g</mi>"],["\\mbox{\\boldmath$g$}","<mi mathvariant=\"bold-italic\">g</mi>"],["\\mathcal{g}","<mi mathvariant=\"script\">g</mi>"],["\\mathsf{g}","<mi mathvariant=\"sans-serif\">g</mi>"],
                   ["\\mathrm{h}","<mi mathvariant=\"normal\">h</mi>"],["\\mathbf{h}","<mi mathvariant=\"bold\">h</mi>"],["\\mbox{\\boldmath$h$}","<mi mathvariant=\"bold-italic\">h</mi>"],["\\mathcal{h}","<mi mathvariant=\"script\">h</mi>"],["\\mathsf{h}","<mi mathvariant=\"sans-serif\">h</mi>"],
                   ["\\mathrm{i}","<mi mathvariant=\"normal\">i</mi>"],["\\mathbf{i}","<mi mathvariant=\"bold\">i</mi>"],["\\mbox{\\boldmath$i$}","<mi mathvariant=\"bold-italic\">i</mi>"],["\\mathcal{i}","<mi mathvariant=\"script\">i</mi>"],["\\mathsf{i}","<mi mathvariant=\"sans-serif\">i</mi>"],
                   ["\\mathrm{j}","<mi mathvariant=\"normal\">j</mi>"],["\\mathbf{j}","<mi mathvariant=\"bold\">j</mi>"],["\\mbox{\\boldmath$j$}","<mi mathvariant=\"bold-italic\">j</mi>"],["\\mathcal{j}","<mi mathvariant=\"script\">j</mi>"],["\\mathsf{j}","<mi mathvariant=\"sans-serif\">j</mi>"],
                   ["\\mathrm{k}","<mi mathvariant=\"normal\">k</mi>"],["\\mathbf{k}","<mi mathvariant=\"bold\">k</mi>"],["\\mbox{\\boldmath$k$}","<mi mathvariant=\"bold-italic\">k</mi>"],["\\mathcal{k}","<mi mathvariant=\"script\">k</mi>"],["\\mathsf{k}","<mi mathvariant=\"sans-serif\">k</mi>"],
                   ["\\mathrm{l}","<mi mathvariant=\"normal\">l</mi>"],["\\mathbf{l}","<mi mathvariant=\"bold\">l</mi>"],["\\mbox{\\boldmath$l$}","<mi mathvariant=\"bold-italic\">l</mi>"],["\\mathcal{l}","<mi mathvariant=\"script\">l</mi>"],["\\mathsf{l}","<mi mathvariant=\"sans-serif\">l</mi>"],
                   ["\\mathrm{m}","<mi mathvariant=\"normal\">m</mi>"],["\\mathbf{m}","<mi mathvariant=\"bold\">m</mi>"],["\\mbox{\\boldmath$m$}","<mi mathvariant=\"bold-italic\">m</mi>"],["\\mathcal{m}","<mi mathvariant=\"script\">m</mi>"],["\\mathsf{m}","<mi mathvariant=\"sans-serif\">m</mi>"],
                   ["\\mathrm{n}","<mi mathvariant=\"normal\">n</mi>"],["\\mathbf{n}","<mi mathvariant=\"bold\">n</mi>"],["\\mbox{\\boldmath$n$}","<mi mathvariant=\"bold-italic\">n</mi>"],["\\mathcal{n}","<mi mathvariant=\"script\">n</mi>"],["\\mathsf{n}","<mi mathvariant=\"sans-serif\">n</mi>"],
                   ["\\mathrm{o}","<mi mathvariant=\"normal\">o</mi>"],["\\mathbf{o}","<mi mathvariant=\"bold\">o</mi>"],["\\mbox{\\boldmath$o$}","<mi mathvariant=\"bold-italic\">o</mi>"],["\\mathcal{o}","<mi mathvariant=\"script\">o</mi>"],["\\mathsf{o}","<mi mathvariant=\"sans-serif\">o</mi>"],
                   ["\\mathrm{p}","<mi mathvariant=\"normal\">p</mi>"],["\\mathbf{p}","<mi mathvariant=\"bold\">p</mi>"],["\\mbox{\\boldmath$p$}","<mi mathvariant=\"bold-italic\">p</mi>"],["\\mathcal{p}","<mi mathvariant=\"script\">p</mi>"],["\\mathsf{p}","<mi mathvariant=\"sans-serif\">p</mi>"],
                   ["\\mathrm{q}","<mi mathvariant=\"normal\">q</mi>"],["\\mathbf{q}","<mi mathvariant=\"bold\">q</mi>"],["\\mbox{\\boldmath$q$}","<mi mathvariant=\"bold-italic\">q</mi>"],["\\mathcal{q}","<mi mathvariant=\"script\">q</mi>"],["\\mathsf{q}","<mi mathvariant=\"sans-serif\">q</mi>"],
                   ["\\mathrm{r}","<mi mathvariant=\"normal\">r</mi>"],["\\mathbf{r}","<mi mathvariant=\"bold\">r</mi>"],["\\mbox{\\boldmath$r$}","<mi mathvariant=\"bold-italic\">r</mi>"],["\\mathcal{r}","<mi mathvariant=\"script\">r</mi>"],["\\mathsf{r}","<mi mathvariant=\"sans-serif\">r</mi>"],
                   ["\\mathrm{s}","<mi mathvariant=\"normal\">s</mi>"],["\\mathbf{s}","<mi mathvariant=\"bold\">s</mi>"],["\\mbox{\\boldmath$s$}","<mi mathvariant=\"bold-italic\">s</mi>"],["\\mathcal{s}","<mi mathvariant=\"script\">s</mi>"],["\\mathsf{s}","<mi mathvariant=\"sans-serif\">s</mi>"],
                   ["\\mathrm{t}","<mi mathvariant=\"normal\">t</mi>"],["\\mathbf{t}","<mi mathvariant=\"bold\">t</mi>"],["\\mbox{\\boldmath$t$}","<mi mathvariant=\"bold-italic\">t</mi>"],["\\mathcal{t}","<mi mathvariant=\"script\">t</mi>"],["\\mathsf{t}","<mi mathvariant=\"sans-serif\">t</mi>"],
                   ["\\mathrm{u}","<mi mathvariant=\"normal\">u</mi>"],["\\mathbf{u}","<mi mathvariant=\"bold\">u</mi>"],["\\mbox{\\boldmath$u$}","<mi mathvariant=\"bold-italic\">u</mi>"],["\\mathcal{u}","<mi mathvariant=\"script\">u</mi>"],["\\mathsf{u}","<mi mathvariant=\"sans-serif\">u</mi>"],
                   ["\\mathrm{v}","<mi mathvariant=\"normal\">v</mi>"],["\\mathbf{v}","<mi mathvariant=\"bold\">v</mi>"],["\\mbox{\\boldmath$v$}","<mi mathvariant=\"bold-italic\">v</mi>"],["\\mathcal{v}","<mi mathvariant=\"script\">v</mi>"],["\\mathsf{v}","<mi mathvariant=\"sans-serif\">v</mi>"],
                   ["\\mathrm{w}","<mi mathvariant=\"normal\">w</mi>"],["\\mathbf{w}","<mi mathvariant=\"bold\">w</mi>"],["\\mbox{\\boldmath$w$}","<mi mathvariant=\"bold-italic\">w</mi>"],["\\mathcal{w}","<mi mathvariant=\"script\">w</mi>"],["\\mathsf{w}","<mi mathvariant=\"sans-serif\">w</mi>"],
                   ["\\mathrm{x}","<mi mathvariant=\"normal\">x</mi>"],["\\mathbf{x}","<mi mathvariant=\"bold\">x</mi>"],["\\mbox{\\boldmath$x$}","<mi mathvariant=\"bold-italic\">x</mi>"],["\\mathcal{x}","<mi mathvariant=\"script\">x</mi>"],["\\mathsf{x}","<mi mathvariant=\"sans-serif\">x</mi>"],
                   ["\\mathrm{y}","<mi mathvariant=\"normal\">y</mi>"],["\\mathbf{y}","<mi mathvariant=\"bold\">y</mi>"],["\\mbox{\\boldmath$y$}","<mi mathvariant=\"bold-italic\">y</mi>"],["\\mathcal{y}","<mi mathvariant=\"script\">y</mi>"],["\\mathsf{y}","<mi mathvariant=\"sans-serif\">y</mi>"],
                   ["\\mathrm{z}","<mi mathvariant=\"normal\">z</mi>"],["\\mathbf{z}","<mi mathvariant=\"bold\">z</mi>"],["\\mbox{\\boldmath$z$}","<mi mathvariant=\"bold-italic\">z</mi>"],["\\mathcal{z}","<mi mathvariant=\"script\">z</mi>"],["\\mathsf{z}","<mi mathvariant=\"sans-serif\">z</mi>"]
                   ];
    
    this.match = function(val){
        for(var i=0;i<mathtable.length;i++){
            if(mathtable[i][0]==val) return(mathtable[i][1]);
        }
        return null;
    };
    
    this.tabs = function(n){
        var ans="";
        for(var i=0;i<n;i++){
            ans=ans+"\t";}
        return(ans);
    };
    
    
}

MathTOUCH.EXtree2MathML.prototype.MathMLof = function(level, ex){
		var ans;
		switch(ex.type){
			case MathTOUCH.EMP:
				if(ex.val=="") ans=" ";
				else if(ex.val=="thinspace") ans=this.tabs(level)+"<mspace width=\"0.15em\"/>\n";
				else if(ex.val=="medspace") ans=this.tabs(level)+"<mspace width=\"0.3em\"/>\n";
				else if(ex.val=="thickspace") ans=this.tabs(level)+"<mspace width=\"0.45em\"/>\n";
				else if(ex.val=="quad") ans=this.tabs(level)+"<mspace width=\"1em\"/>\n";
				else if(ex.val=="qquad") ans=this.tabs(level)+"<mspace width=\"2em\"/>\n";
				else ans="";
				break;
			case MathTOUCH.NUM:
				if(ex.val.charAt(0)=='b') ans=ans=this.tabs(level)+"<mn mathvariant=\"bold\">"+ex.val.substring(1)+"</mn>\n";
				else ans=this.tabs(level)+"<mn>"+ex.val+"</mn>\n";
				break;
			case MathTOUCH.VAR:
			case MathTOUCH.SYM:
				if(ex.val.length==1) ans=this.tabs(level)+"<mi>"+ex.val+"</mi>\n";
				else{
                    var str= this.match(ex.val);
					if(str!=null) ans=this.tabs(level)+str+"\n";
					else{ans=null;console.log("V error in EXtree2MathML");return null;}
				}
				break;
			case MathTOUCH.TXT:
				ans=this.tabs(level)+"<mtext>"+ex.val+"</mtext>\n";
				break;
			case MathTOUCH.XTML:
				ans=this.MathMLof(level, EXTML.parse(ex.inputWord,ex.val));
				break;
			case MathTOUCH.MAT:
				var rcstr=ex.val;
				var c;
				var rowline=new Array();
				for(var i=0;i<=ex.rownum;i++){c=rcstr.charAt(i);rowline[i]=c;}
				var len=rcstr.length;
				var colline=new Array();
				var colmode=new Array();
				var cl=0,cm=0;
				for(var i=ex.rownum+1;i<len;i++){
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
				ans=this.tabs(level)+"<mtable ";
				if(rowline[ex.rownum]==1 || colline[0]==1) ans=ans+"frame=\"solid\" ";
				if(rowline[1]==1) ans=ans+"rowlines=\"solid\" ";
				else if(rowline[1]==2) ans=ans+"rowlines=\"dashed\" ";
				if(colline[1]==1) ans=ans+"columnlines=\"solid\" ";
				else if(colline[1]==2) ans=ans+"columnlines=\"dashed\" ";
				if(colmode[0]==1) ans=ans+"columnalign=\"left\" ";
				else if(colmode[0]==2) ans=ans+"columnalign=\"right\" ";
				ans=ans+">\n";
				for(var i=0;i<ex.rownum;i++){
					ans=ans+this.tabs(level+1)+"<mtr>\n";
					for(var j=0;j<ex.colnum;j++){
						if(ex.ch[i*ex.colnum+j]==null) ans=ans+this.tabs(level+2)+"<mtd></mtd>\n";
						else ans=ans+this.tabs(level+2)+"<mtd>\n"+this.MathMLof(level+3, ex.ch[i*ex.colnum+j])+this.tabs(level+2)+"</mtd>\n";
					}
					ans=ans+this.tabs(level+1)+"</mtr>\n";
				}
				ans=ans+this.tabs(level)+"</mtable>\n";
				break;
			default:
				var excode=OTB.theEXcode(ex.key,ex.order);
				var opec=excode.charAt(1);
				var mlcode=OTB.theMathMLcode(ex.key,ex.order);
				switch(ex.type){
					case MathTOUCH.OP1P: ans=this.OP1PexRep(level,opec,mlcode,ex);
							break;
					case MathTOUCH.OP1A : ans=this.OP1AexRep(level,opec,mlcode,ex);
							break;
					case MathTOUCH.OP1B: ans=this.OP1BexRep(level,opec,mlcode,ex);
							break;
					case MathTOUCH.OP2C: ans=this.OP2CexRep(level,opec,mlcode,ex);
							break;
					case MathTOUCH.OP2P: ans=this.OP2PexRep(level,opec,mlcode,ex);
							break;
					case MathTOUCH.OP3P:	ans=this.OP3PexRep(level,opec,mlcode,ex);
							break;
					case MathTOUCH.OP3T:	ans=this.OP3TexRep(level,opec,mlcode,ex);
							break;
					default:
							ans=null;
				}
		}
		return ans;
};

MathTOUCH.EXtree2MathML.prototype.OP1PexRep = function(level, opec, mlcode, ex){
		var ans=null;
		switch(opec){
			case '0':
				ans=this.tabs(level)+"<mrow>\n"+this.tabs(level+1)+"<mi>"+mlcode+"</mi>\n"
				+this.tabs(level+1)+"<mo>&ApplyFunction;</mo>\n"
				+this.MathMLof(level+1, ex.ch[0])+this.tabs(level)+"</mrow>\n";
				break;
			case '9':
				ans=this.tabs(level)+"<mrow>\n"+this.tabs(level+1)+"<mo>"+mlcode+"</mo>\n"
				+this.MathMLof(level+1, ex.ch[0])+this.tabs(level)+"</mrow>\n";
				break;
			case 'b': 
				ans=this.tabs(level)+"<mrow>\n"+this.tabs(level+1)+"<mi>"+mlcode+"</mi>\n"
				+this.tabs(level+1)+"<mo>&ApplyFunction;</mo>\n"
				+this.MathMLof(level+1, ex.ch[0])+this.tabs(level)+"</mrow>\n";
				break;
			case 'a':
				ans=this.tabs(level)+"<mrow>\n"+this.tabs(level+1)+"<msup>\n"
				+this.tabs(level+2)+"<mi>"+mlcode+"</mi>\n"
				+this.tabs(level+2)+"<mn>-1</mn>\n"+this.tabs(level+1)+"</msup>\n"
				+this.tabs(level+1)+"<mo>&ApplyFunction;</mo>\n"
				+this.MathMLof(level+1, ex.ch[0])+this.tabs(level)+"</mrow>\n";
				break;
			case '1':
				ans=this.tabs(level)+"<"+mlcode+">\n"+this.MathMLof(level+1, ex.ch[0])+this.tabs(level)+"</"+mlcode+">\n";
				break;
			case '2':
			case '3': 
			case '4': 
			case '5': 
			case '6': 
				ans=this.tabs(level)+"<mover>\n"+this.MathMLof(level+1, ex.ch[0])+this.tabs(level+1)+"<mo>"+mlcode+"</mo>\n"
				+this.tabs(level)+"</mover>\n";
				break;
			case '8':
			case 'h':
				ans=this.tabs(level)+"<munder>\n"+this.MathMLof(level+1, ex.ch[0])+this.tabs(level+1)+"<mo>"+mlcode+"</mo>\n"
				+this.tabs(level)+"</munder>\n";
				break;
			case 'c':
				ans=mlcode+"{"+this.MathMLof(level+1,ex.ch[0])+"}";
				break;
			case '7':
			case 'd':
			case 'e':
			case 'f':
			case 'g':
				ans=this.tabs(level)+"<mover accent=\"true\">\n"+this.MathMLof(level+1, ex.ch[0])+this.tabs(level+1)+"<mo>"+mlcode+"</mo>\n"
				+this.tabs(level)+"</mover>\n";
				break;
			default:
				ans="<mtext>OP1P Error</mtext>\n";
		}
		return ans;
};


MathTOUCH.EXtree2MathML.prototype.OP1AexRep = function(level, opec, mlcode, ex){
		var ans=null;
		switch(opec){
			case '0':
				ans=this.tabs(level)+"<mrow>\n"+this.MathMLof(level+1, ex.ch[0])+this.tabs(level+1)+"<mo>"+mlcode+"</mo>\n"
				+this.tabs(level)+"</mrow>\n";
				break;
			case '1': 
				ans=this.tabs(level)+"<msup>\n"+this.MathMLof(level+1, ex.ch[0])+this.tabs(level+1)+"<mi>"+mlcode+"</mi>\n"
				+this.tabs(level)+"</msup>\n";
				break;
			case '3':
				ans=this.tabs(level)+"<mrow>\n"+this.MathMLof(level+1, ex.ch[0])+this.tabs(level+1)+"<mo>&InvisibleTimes;</mo>\n"
				+this.tabs(level+1)+"<mi>"+mlcode+"</mi>\n"+this.tabs(level)+"</mrow>\n";
				break;
			case '2':
				ans="\\left."+this.MathMLof(level+1, ex.ch[0])+"\\right"+mlcode;
				break;
            case '4': 
				ans=this.tabs(level)+"<mover>\n"+this.MathMLof(level+1, ex.ch[0])+this.tabs(level+1)+"<mo>"+mlcode+"</mo>\n"+this.tabs(level)+"</mover>\n";
				break;
			case '8':
            case '9':
				ans=this.tabs(level)+"<munder>\n"+this.MathMLof(level+1, ex.ch[0])+this.tabs(level+1)+"<mo>"+mlcode+"</mo>\n"
				+this.tabs(level)+"</munder>\n";
				break;
            default:
				ans="<mtext>OP1A Error</mtext>\n";
		}
		return ans;
};

MathTOUCH.EXtree2MathML.prototype.OP1BexRep = function(level, opec, mlcode, ex){
		var ans=null;
		var i=mlcode.indexOf(',');
		var Lbra=mlcode.substring(0,i);
		var Rbra=mlcode.substring(i+1);
		switch(opec){
			case '0':
				ans=this.tabs(level)+"<mrow>\n"+this.tabs(level+1)+"<mo>"+Lbra+"</mo>\n"
				+this.MathMLof(level+1, ex.ch[0])+this.tabs(level+1)+"<mo>"+Rbra+"</mo>\n"
				+this.tabs(level)+"</mrow>\n";
				break;
			case '1':
				ans=this.tabs(level)+"<mfenced open=\""+Lbra+"\" close=\""+Rbra+"\">\n"
				+this.MathMLof(level+1, ex.ch[0])
				+this.tabs(level)+"</mfenced>\n";
				break;
			case '2':
			case '3':
				ans=this.tabs(level)+"<mrow>\n"+this.tabs(level+1)+"<mo>"+Lbra+"</mo>\n"
				+this.MathMLof(level+1, ex.ch[0])
				+this.tabs(level)+"</mrow>\n";
				break;
			case '4':
			case '5':
				ans=this.tabs(level)+"<mrow>\n"
				+this.MathMLof(level+1, ex.ch[0])+this.tabs(level+1)+"<mo>"+Rbra+"</mo>\n"
				+this.tabs(level)+"</mrow>\n";
				break;
			default:
				ans="<mtext>OP1B Error</mtext>\n";
		}
		return ans;
};


MathTOUCH.EXtree2MathML.prototype.OP2CexRep = function(level, opec, mlcode, ex){
		var ans=null;
		switch(opec){
			case '0':
				ans=this.tabs(level)+"<mrow>\n"+this.MathMLof(level+1, ex.ch[0])+this.tabs(level+1)+"<mo>"+mlcode+"</mo>\n"
					+this.MathMLof(level+1, ex.ch[1])+this.tabs(level)+"</mrow>\n";
				break;
			case '1':
			case '3':
				ans=this.tabs(level)+"<"+mlcode+">\n"+this.MathMLof(level+1, ex.ch[0])+this.MathMLof(level+1, ex.ch[1])+this.tabs(level)+"</"+mlcode+">\n";
				break;
			case '2':
				if(ex.ch[0].key==MathTOUCH.SP && ex.ch[0].order==3)
					ans=this.tabs(level)+"<"+mlcode+">\n"+this.MathMLof(level+1, ex.ch[0].ch[0])
					+this.MathMLof(level+1, ex.ch[0].ch[1])+this.MathMLof(level+1, ex.ch[1])
					+this.tabs(level)+"</"+mlcode+">\n";
				else ans="<mtext>SubSuperscript Error</mtext>\n";
				break;
			case '4':
				ans=this.tabs(level)+"<mmultiscripts>\n"+this.MathMLof(level+1, ex.ch[1])
				+this.tabs(level+1)+"<"+mlcode+">\n"+this.tabs(level+1)+"<none/>\n"
				+this.MathMLof(level+1, ex.ch[0])+this.tabs(level)+"</mmultiscripts>\n";
				break;
			case '5':
				ans=this.tabs(level)+"<mmultiscripts>\n"+this.MathMLof(level+1, ex.ch[1])
				+this.tabs(level+1)+"<"+mlcode+">\n"+this.MathMLof(level+1, ex.ch[0])
				+this.tabs(level+1)+"<none/>\n"+this.tabs(level)+"</mmultiscripts>\n";
				break;
			case '6':
			case 'c':
			case '.':
				ans=this.tabs(level)+"<mrow>\n"+this.MathMLof(level+1, ex.ch[0])+this.tabs(level+1)+"<mo>"+mlcode+"</mo>\n"
					+this.MathMLof(level+1, ex.ch[1])+this.tabs(level)+"</mrow>\n";
				break;
			case ',':
				ans=this.tabs(level)+"<mrow>\n"
				+this.MathMLof(level+1, ex.ch[0])
				+this.tabs(level+1)+"<mspace width=\"0.15em\"/>\n"
				+this.MathMLof(level+1, ex.ch[1])
				+this.tabs(level)+"</mrow>\n";
				break;
			case ':':
				ans=this.tabs(level)+"<mrow>\n"
				+this.MathMLof(level+1, ex.ch[0])
				+this.tabs(level+1)+"<mspace width=\"0.3em\"/>\n"
				+this.MathMLof(level+1, ex.ch[1])
				+this.tabs(level)+"</mrow>\n";
				break;
			case ';':
				ans=this.tabs(level)+"<mrow>\n"
				+this.MathMLof(level+1, ex.ch[0])
				+this.tabs(level+1)+"<mspace width=\"0.45em\"/>\n"
				+this.MathMLof(level+1, ex.ch[1])
				+this.tabs(level)+"</mrow>\n";
				break;
			case '>':
				ans=this.tabs(level)+"<mrow>\n"
				+this.MathMLof(level+1, ex.ch[0])
				+this.tabs(level+1)+"<mspace width=\"1em\"/>\n"
				+this.MathMLof(level+1, ex.ch[1])
				+this.tabs(level)+"</mrow>\n";
				break;
			case 'q':
				ans=this.tabs(level)+"<mrow>\n"
				+this.MathMLof(level+1, ex.ch[0])
				+this.tabs(level+1)+"<mspace width=\"2em\"/>\n"
				+this.MathMLof(level+1, ex.ch[1])
				+this.tabs(level)+"</mrow>\n";
				break;
			case '!':
				ans=this.tabs(level)+"<mrow>\n"
				+this.MathMLof(level+1, ex.ch[0])
				+this.tabs(level+1)+"<mspace width=\"-0.15em\"/>\n"
				+this.MathMLof(level+1, ex.ch[1])
				+this.tabs(level)+"</mrow>\n";
				break;
			case '-':
				ans=this.tabs(level)+"<mrow>\n"
				+this.MathMLof(level+1, ex.ch[0])
				+this.tabs(level+1)+"<mspace width=\"-0.3em\"/>\n"
				+this.MathMLof(level+1, ex.ch[1])
				+this.tabs(level)+"</mrow>\n";
				break;
			case '<':
				ans=this.tabs(level)+"<mrow>\n"
				+this.MathMLof(level+1, ex.ch[0])
				+this.tabs(level+1)+"<mspace width=\"-0.45em\"/>\n"
				+this.MathMLof(level+1, ex.ch[1])
				+this.tabs(level)+"</mrow>\n";
				break;
			case '7':
				ans=this.tabs(level)+"<"+mlcode+">\n"+this.MathMLof(level+1, ex.ch[0])+this.MathMLof(level+1, ex.ch[1])+this.tabs(level)+"</"+mlcode+">\n";
				break;
			case '9':
				ans=this.tabs(level)+"<"+mlcode+">\n"+this.MathMLof(level+1, ex.ch[1])+this.MathMLof(level+1, ex.ch[0])+this.tabs(level)+"</"+mlcode+">\n";
				break;
			case '8':
				ans=this.tabs(level)+"<"+mlcode+">\n"+this.MathMLof(level+1, ex.ch[1])+this.MathMLof(level+1, ex.ch[0])+this.tabs(level)+"</"+mlcode+">\n";
				break;
			default:
				ans="<mtext>OP2C Error</mtext>\n";
		}
		return ans;
};

MathTOUCH.EXtree2MathML.prototype.OP2PexRep = function(level, opec, mlcode, ex){
		var ans=null;
		switch(opec){
			case '0':
				ans=this.tabs(level)+"<mrow>\n"+this.tabs(level+1)+"<msub>\n"
				+this.tabs(level+2)+"<mo>"+mlcode+"</mo>\n"
				+this.MathMLof(level+2, ex.ch[0])+this.tabs(level+1)+"</msub>\n"
				+this.MathMLof(level+1, ex.ch[1])+this.tabs(level)+"</mrow>\n";
				break;
			case '2':
				ans=this.tabs(level)+"<mrow>\n"+this.tabs(level+1)+"<munder>\n"
				+this.tabs(level+2)+"<mi>"+mlcode+"</mi>\n"
				+this.MathMLof(level+2, ex.ch[0])+this.tabs(level+1)+"</munder>\n"
				+this.tabs(level+1)+"<mo>&ApplyFunction;</mo>\n"
				+this.MathMLof(level+1, ex.ch[1])+this.tabs(level)+"</mrow>\n";
				break;
			case '1':
				ans=this.tabs(level)+"<mrow>\n"+this.tabs(level+1)+"<msub>\n"
				+this.tabs(level+2)+"<mi>"+mlcode+"</mi>\n"
				+this.MathMLof(level+2, ex.ch[0])
				+this.tabs(level+1)+"</msub>\n"
				+this.tabs(level+1)+"<mo>&ApplyFunction;</mo>\n"
				+this.MathMLof(level+1, ex.ch[1])+this.tabs(level)+"</mrow>\n";
				break;
			case '3':
				ans=this.tabs(level)+"<mrow>\n"+this.tabs(level+1)+"<msup>\n"
				+this.tabs(level+2)+"<mi>"+mlcode+"</mi>\n"
				+this.MathMLof(level+2, ex.ch[0])
				+this.tabs(level+1)+"</msup>\n"
				+this.tabs(level+1)+"<mo>&ApplyFunction;</mo>\n"
				+this.MathMLof(level+1, ex.ch[1])+this.tabs(level)+"</mrow>\n";
				break;
			case '4':
				ans=this.tabs(level)+"<mrow>\n"+this.tabs(level+1)+"<munder>\n"
				+this.tabs(level+2)+"<mi>"+mlcode+"</mi>\n"
				+this.MathMLof(level+2, ex.ch[0])+this.tabs(level+1)+"</munder>\n"
				+this.MathMLof(level+1, ex.ch[1])+this.tabs(level)+"</mrow>\n";
				break;
			default:
				ans="<mtext>OP2P Error</mtext>\n";
		}
		return ans;
};

MathTOUCH.EXtree2MathML.prototype.OP3PexRep = function(level, opec, mlcode, ex){
		var ans=null;
		switch(opec){
			case '0':
				ans=this.tabs(level)+"<mrow>\n"+this.tabs(level+1)+"<munderover>\n"
				+this.tabs(level+2)+"<mi>"+mlcode+"</mi>\n"
				+this.MathMLof(level+2, ex.ch[0])+this.MathMLof(level+2, ex.ch[1])+this.tabs(level+1)+"</munderover>\n"
				+this.tabs(level+1)+"<mo>&ApplyFunction;</mo>\n"
				+this.MathMLof(level+1,ex.ch[2])+this.tabs(level)+"</mrow>\n";
				break;
			case '1':
				ans=this.tabs(level)+"<mrow>\n"+this.tabs(level+1)+"<msubsup>\n"
				+this.tabs(level+2)+"<mo>"+mlcode+"</mo>\n"
				+this.MathMLof(level+2, ex.ch[0])+this.MathMLof(level+2, ex.ch[1])+this.tabs(level+1)+"</msubsup>\n"
				+this.MathMLof(level+1, ex.ch[2])+this.tabs(level)+"</mrow>\n";
				break;
			default:
				ans="<mtext>OP3P Error</mtext>\n";
		}
		return ans;
};


MathTOUCH.EXtree2MathML.prototype.OP3TexRep = function(level, opec, mlcode, ex){
		var ans=null;
		switch(opec){
			case '0':
				ans=this.tabs(level)+"<mrow>\n"+this.MathMLof(level+1, ex.ch[1])+this.tabs(level+1)+"<mover accent=\"true\">\n"
					+this.tabs(level+2)+"<mo>"+mlcode+"</mo>\n"
					+this.MathMLof(level+2, ex.ch[0])
					+this.tabs(level+1)+"</mover>\n"
					+this.MathMLof(level+1, ex.ch[2])+this.tabs(level)+"</mrow>\n";
				break;
			case '1':
				ans=this.tabs(level)+"<mrow>\n"+this.MathMLof(level+1, ex.ch[1])+this.tabs(level+1)+"<mover accent=\"false\">"
					+this.tabs(level+2)+"<mo>"+mlcode+"</mo>\n"
					+this.MathMLof(level+2, ex.ch[0])
					+this.tabs(level+1)+"</mover>\n"
					+this.MathMLof(level+1, ex.ch[2])+this.tabs(level)+"</mrow>\n";
				break;
			case '2':
				ans=this.tabs(level)+"<mrow>\n"+this.MathMLof(level+1, ex.ch[1])+this.tabs(level+1)+"<munder accent=\"true\">"
					+this.tabs(level+2)+"<mo>"+mlcode+"</mo>\n"
					+this.MathMLof(level+2, ex.ch[0])
					+this.tabs(level+1)+"</munder>\n"
					+this.MathMLof(level+1, ex.ch[2])+this.tabs(level)+"</mrow>\n";
				break;
			default:
				ans="<mtext>OP3P Error</mtext>\n";
		}
		return ans;
};
