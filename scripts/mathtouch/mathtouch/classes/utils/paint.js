MathTOUCH.drawLine = function(ctx,x1,y1,x2,y2,currentColor) {
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.lineWidth=1;
    ctx.strokeStyle = currentColor;
    ctx.stroke();
};

MathTOUCH.drawRect = function(ctx,x,y,w,h,currentColor){
    ctx.beginPath();
    ctx.lineWidth=1;
    ctx.strokeStyle = currentColor;
    ctx.strokeRect(x,y,w,h);
};

MathTOUCH.fillRect = function(ctx,x,y,w,h,currentColor){
    ctx.beginPath();
    ctx.fillStyle = currentColor;
    ctx.fillRect(x,y,w,h);
};

MathTOUCH.drawOval = function(ctx,x,y,w,h,currentColor) {
    ctx.beginPath();
    ctx.lineWidth=1;
    ctx.strokeStyle = currentColor;
    ctx.ellipse(x+w/2, y+h/2, w/2, h/2, 0, 0, Math.PI*2, false);
    ctx.stroke();
};

MathTOUCH.fillOval = function(ctx,x,y,w,h,currentColor) {
    ctx.beginPath();
    ctx.fillStyle = currentColor;
    ctx.ellipse(x+w/2, y+h/2, w/2, h/2, 0, 0, Math.PI*2, false);
    ctx.fill();
};

MathTOUCH.drawArc = function(ctx,x,y,w,h,sa,ang,currentColor) {
    ctx.beginPath();
    ctx.lineWidth=1;
    ctx.strokeStyle = currentColor;
    ctx.ellipse(x+w/2, y+h/2, w/2, h/2, 0, 2*Math.PI-sa-ang, 2*Math.PI-sa, false);
    ctx.stroke();
};

MathTOUCH.fillArc = function(ctx,x,y,w,h,sa,ang,currentColor) {
    ctx.beginPath();
    ctx.moveTo(x+w/2,y+h/2);
    ctx.fillStyle = currentColor;
    ctx.ellipse(x+w/2, y+h/2, w/2, h/2, 0, 2*Math.PI-sa-ang, 2*Math.PI-sa, false);
    ctx.closePath();
    ctx.fill();
};

MathTOUCH.drawString = function(ctx,str,x,y,currentFace,currentSize,currentFont,currentColor){
    ctx.beginPath();
    ctx.font = currentFace+" "+currentSize+"px '"+currentFont+"'";
    ctx.fillStyle = currentColor;
    ctx.fillText(str,x,y);
};

MathTOUCH.fillPolygon = function(ctx,X,Y,n,currentColor) {
    if(X.length==0||Y.length==0){
        return;
    }
    if(!(X.length==Y.length && X.length==n)){
        alert("Polygon error");
        return;
    }
    ctx.beginPath();
    ctx.moveTo(X[0],Y[0]);
    for(var i=1; i<n; i++){
        ctx.lineTo(X[i],Y[i]);
    }
    ctx.closePath();
    ctx.fillStyle = currentColor;
    ctx.fill();
};
    
MathTOUCH.arrowLine = function(ctx,x1,y1,x2,y2,direction,currentColor){
    MathTOUCH.drawLine(ctx,x1,y1,x2,y2,currentColor);
    var sz=3;
    if(direction==0){
        var X=[x2,x2-sz,x2-sz,x2,x2-sz*2-2,x2-sz-2,x2-sz-2,x2-sz*2-2];
        var Y=[y2,y2-sz,y2+sz,y2,y2,y2+sz,y2-sz,y2];
        MathTOUCH.fillPolygon(ctx,X,Y,8,currentColor);
    }
    else{
        var X=[x1,x1+sz,x1+sz,x1,x1+sz*2+2,x1+sz+2,x1+sz+2,x1+sz*2+2];
        var Y=[y1,y1+sz,y1-sz,y1,y1,y1+sz,y1-sz,y1];
        MathTOUCH.fillPolygon(ctx,X,Y,8,currentColor);
    }
};
