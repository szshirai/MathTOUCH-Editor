function initializeBase(derive, base, baseArgs) {
    base.apply(derive, baseArgs);
    for(var prop in base.prototype) {
        var proto = derive.constructor.prototype;
        if(!proto[prop]) {
            proto[prop] = base.prototype[prop];
        }
    }
}

var HTML = function(){};

HTML.writeHTML = function(html){
    document.write(html);
};

