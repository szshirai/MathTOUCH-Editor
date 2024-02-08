<?php

// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Failsafe textarea editor support.
 *
 * @package    MathTOUCHeditor
 * @subpackage textarea
 * @copyright   2024 Tetsuo Fukui & Sizuka Shirai & Takahiro Nakahara
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

class mathtouch_texteditor extends texteditor {
    public function supported_by_browser() {
        return true;
    }

    public function get_supported_formats() {
        return array(FORMAT_HTML => FORMAT_HTML);
    }

    public function get_preferred_format() {
        return FORMAT_HTML;
    }

    public function supports_repositories() {
        return true;
    }

    public function use_editor($elementid, array $options=null, $fpoptions=null) {
        global $CFG,$PAGE;

        $scriptlibs = array(
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
            'EXtree/EXtree2Speech.js',
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
        foreach($scriptlibs as $libs){
        $PAGE->requires->js(new moodle_url('/lib/editor/mathtouch/scripts/mathtouch/mathtouch/classes/'.$libs));
        }
        $PAGE->requires->js(new moodle_url('/lib/editor/mathtouch/scripts/mathtouch/matheditor/js/main.js'));

        $initparams = [
            'elementid' => $elementid,
            'contextid' => empty($options['context']) ? $PAGE->context->id : $options['context']->id,
            'noclean' => true,
            'mathtouchpath' => $CFG->wwwroot.'/lib/editor/mathtouch/scripts/mathtouch/'
        ];
        $PAGE->requires->js_call_amd('editor_mathtouch/editor', 'init', [$initparams]);
        
        $PAGE->requires->js_init_code('M.editor_mathtouch = M.editor_mathtouch || {}');
        $PAGE->requires->js_init_code('M.editor_mathtouch.fpoptions = M.editor_mathtouch.fpoptions || {}');
        $PAGE->requires->js_init_code(js_writer::set_variable('M.editor_mathtouch.fpoptions["'.$elementid.'"]', $fpoptions));
        
        return;
    }
  
    /**
     * Create a params array to init the editor.
     *
     * @param string $elementid
     * @param array $options
     * @param array $fpoptions
     */
    protected function get_init_params($elementid, array $options = null, array $fpoptions = null, $plugins = null) {
        global $PAGE;
        return $params;
    }
}
