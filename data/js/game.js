function game() {
	this.cWidth;	//canvas width
	this.cHeight;   //canvas height
	this.ctx;	    //canvas context
	this.canvas;
	this.then;
	this.fps;
	this.fpsTick = 0;
	
	this.init = function() {
		canvas = $("#canvas").get(0);
		canvas.width = cWidth = $("body").width();
		canvas.height = cHeight = $("body").height();
		
		ctx = canvas.getContext("2d");
		
		var w = window;
		requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
		then = performance.now();
		
		this.loop();
		this.fpsCount();
	}

	this.loop = function() {
		var now = performance.now();
		var delta = now - then;
		then = now;

		this.update(delta / 1000);
		this.draw();
		
		requestAnimationFrame(this.loop.bind(this));
	};

	this.draw = function() {
		ctx.clearRect(0, 0, cWidth, cHeight);
		ctx.fillStyle = "#000";
		ctx.font = "16px Arial";
		ctx.fillText("w: " + cWidth + " h: " + cHeight + ", fps: " + this.fps, 32, 32);
	}

	this.update = function(modifier) {
		this.fpsTick++;
	}
	
	this.fpsCount = function(){
		this.fps = this.fpsTick;
		this.fpsTick = 0;
		setTimeout(this.fpsCount.bind(this), 1000);
	}
}
