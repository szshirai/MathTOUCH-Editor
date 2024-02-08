define([
        'jquery',
        'editor_mathtouch/filepicker',
], function($, filepicker){
	 /**
     * @constructor
     * @param {Element} textarea
     * @param {Object} initparams
     */
    function mathtouchEditor(textarea, initparams) {
		var taid = textarea.attr('id');
        this.textarea = textarea;
        this.initparams = initparams;
        if (typeof M.editor_mathtouch.fpoptions[initparams.elementid] !== "undefined") {
            this.initparams.filepickeroptions = M.editor_mathtouch.fpoptions[initparams.elementid];
        }
        MathTOUCH.SITEURL = this.initparams.mathtouchpath+'mathtouch/'
        MathTOUCH.OUTPUTIMGURL = this.initparams.mathtouchpath+'image/'
        MathTOUCH.init('mathEditor','en',taid,'');
        this.initFilesEmbedding(taid);
      
        return;
    };
    
    /**
     * Initialize support for embedding images via file picker.
     *
     * @method initFilesEmbedding
     */
    
    mathtouchEditor.prototype.initFilesEmbedding = function(taid) {
        if (!("filepickeroptions" in this.initparams)) {
            log.error(this.initparams.elementid + ": File picker options not found");
            return;
        }

        var self = this;

        Y.use('core_filepicker', function() {
            self.filepicker = filepicker.init(self.initparams.filepickeroptions);
            if (self.filepicker.canShowFilepicker("image")) {
                MathTOUCH.MTEditor_imgMenu_inputURLBTN.onclick = function(e){
                    document.getElementById("modal").style.display="none";
                    document.getElementById("imgmenu").style.display="none";
                    e.preventDefault();
                    var button = e.target;
                    self.filepicker.showFilepicker("image", function(data) {
                        MathTOUCH.MTEditor_imgMenu_inputURL.value = data.url; 
                        var image = new Image();
                        image.src = data.url;
                        image.onload = function() {
                            console.log(image)
                            MathTOUCH.MTEditor_imgMenu_inputsize_w.value = image.width;
                            MathTOUCH.MTEditor_imgMenu_inputsize_h.value = image.height;
                        };
                        document.getElementById("modal").style.display="block";
                        document.getElementById("imgmenu").style.display="block";
                    });
                }

            }
        });
    };
    
    /**
     * This is called once the use picks an image via filepicker.
     *
     * @param {Object} data
     */
    mathtouchEditor.prototype.imageEmbedded = function(data,areanum) {
        if ("url" in data) {
            this.insertText("<img alt=\"\" class=\"img-responsive\" src=\"" + data.url + "\" contenteditable=true/>",areanum);
        }
    };
  
    /**
     * Inserts the given text into the editor.
     *
     * @param {String} inserttext
     */
    mathtouchEditor.prototype.insertText = function(inserttext,areanum) {
        var editarea = $(MathTOUCH.MTEditor_editArea[areanum]);
        var areatext = editarea.html();
        var newval = areatext + inserttext;
        editarea.html(newval);
    };
	return /** @alias module:editor_mathtouch */ {
        init: function(params) {
            var textarea;

            if ("elementid" in params) {
                textarea = $(document.getElementById(params.elementid));
            } else {
                throw new Error("MathTOUCH: Invalid editor init parameter - missing elementid");
            }

            if (textarea.length) {
                return new mathtouchEditor(textarea, params);
            } else {
                throw new Error("Unable to find textarea element", params.elementid);
            }
        }
		
    };
});

