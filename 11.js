(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.cuadros_negros = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(350.6,211.3).curveTo(339,211.3,339,200.1).lineTo(339,140.1).curveTo(339,128.8,350.6,128.8).lineTo(514.4,128.8).curveTo(526,128.8,526,140.1).lineTo(526,200.1).curveTo(526,211.3,514.4,211.3).closePath().moveTo(244.4,198.5).lineTo(244.4,141.8).lineTo(301.1,141.8).lineTo(301.1,198.5).closePath().moveTo(130.1,198.5).lineTo(130.1,141.8).lineTo(186.8,141.8).lineTo(186.8,198.5).closePath().moveTo(20.6,198.5).lineTo(20.6,141.8).lineTo(77.3,141.8).lineTo(77.3,198.5).closePath().moveTo(-90.5,198.5).lineTo(-90.5,141.8).lineTo(-33.8,141.8).lineTo(-33.8,198.5).closePath().moveTo(-200.1,198.5).lineTo(-200.1,141.8).lineTo(-143.4,141.8).lineTo(-143.4,198.5).closePath().moveTo(-308.2,198.5).lineTo(-308.2,141.8).lineTo(-251.5,141.8).lineTo(-251.5,198.5).closePath().moveTo(-417.9,198.5).lineTo(-417.9,141.8).lineTo(-361.2,141.8).lineTo(-361.2,198.5).closePath().moveTo(-526.1,198.5).lineTo(-526.1,141.8).lineTo(-469.4,141.8).lineTo(-469.4,198.5).closePath().moveTo(458.9,78.8).lineTo(458.9,22.1).lineTo(515.6,22.1).lineTo(515.6,78.8).closePath().moveTo(349.3,78.8).lineTo(349.3,22.1).lineTo(406,22.1).lineTo(406,78.8).closePath().moveTo(244.4,78.8).lineTo(244.4,22.1).lineTo(301.1,22.1).lineTo(301.1,78.8).closePath().moveTo(130.1,78.8).lineTo(130.1,22.1).lineTo(186.8,22.1).lineTo(186.8,78.8).closePath().moveTo(20.6,78.8).lineTo(20.6,22.1).lineTo(77.3,22.1).lineTo(77.3,78.8).closePath().moveTo(-90.5,78.8).lineTo(-90.5,22.1).lineTo(-33.8,22.1).lineTo(-33.8,78.8).closePath().moveTo(-200.1,78.8).lineTo(-200.1,22.1).lineTo(-143.4,22.1).lineTo(-143.4,78.8).closePath().moveTo(-308.2,78.8).lineTo(-308.2,22.1).lineTo(-251.5,22.1).lineTo(-251.5,78.8).closePath().moveTo(-417.9,78.8).lineTo(-417.9,22.1).lineTo(-361.2,22.1).lineTo(-361.2,78.8).closePath().moveTo(-526.1,78.8).lineTo(-526.1,22.1).lineTo(-469.4,22.1).lineTo(-469.4,78.8).closePath().moveTo(458.9,-39.9).lineTo(458.9,-96.6).lineTo(515.6,-96.6).lineTo(515.6,-39.9).closePath().moveTo(349.3,-39.9).lineTo(349.3,-96.6).lineTo(406,-96.6).lineTo(406,-39.9).closePath().moveTo(244.4,-39.9).lineTo(244.4,-96.6).lineTo(301.1,-96.6).lineTo(301.1,-39.9).closePath().moveTo(130.1,-39.9).lineTo(130.1,-96.6).lineTo(186.8,-96.6).lineTo(186.8,-39.9).closePath().moveTo(20.6,-39.9).lineTo(20.6,-96.6).lineTo(77.3,-96.6).lineTo(77.3,-39.9).closePath().moveTo(-90.5,-39.9).lineTo(-90.5,-96.6).lineTo(-33.8,-96.6).lineTo(-33.8,-39.9).closePath().moveTo(-200.1,-39.9).lineTo(-200.1,-96.6).lineTo(-143.4,-96.6).lineTo(-143.4,-39.9).closePath().moveTo(-308.2,-39.9).lineTo(-308.2,-96.6).lineTo(-251.5,-96.6).lineTo(-251.5,-39.9).closePath().moveTo(-417.9,-39.9).lineTo(-417.9,-96.6).lineTo(-361.2,-96.6).lineTo(-361.2,-39.9).closePath().moveTo(-526.1,-39.9).lineTo(-526.1,-96.6).lineTo(-469.4,-96.6).lineTo(-469.4,-39.9).closePath().moveTo(458.9,-154.6).lineTo(458.9,-211.3).lineTo(515.6,-211.3).lineTo(515.6,-154.6).closePath().moveTo(349.3,-154.6).lineTo(349.3,-211.3).lineTo(406,-211.3).lineTo(406,-154.6).closePath().moveTo(244.4,-154.6).lineTo(244.4,-211.3).lineTo(301.1,-211.3).lineTo(301.1,-154.6).closePath().moveTo(130.1,-154.6).lineTo(130.1,-211.3).lineTo(186.8,-211.3).lineTo(186.8,-154.6).closePath().moveTo(20.6,-154.6).lineTo(20.6,-211.3).lineTo(77.3,-211.3).lineTo(77.3,-154.6).closePath().moveTo(-90.5,-154.6).lineTo(-90.5,-211.3).lineTo(-33.8,-211.3).lineTo(-33.8,-154.6).closePath().moveTo(-200.1,-154.6).lineTo(-200.1,-211.3).lineTo(-143.4,-211.3).lineTo(-143.4,-154.6).closePath().moveTo(-308.2,-154.6).lineTo(-308.2,-211.3).lineTo(-251.5,-211.3).lineTo(-251.5,-154.6).closePath().moveTo(-417.9,-154.6).lineTo(-417.9,-211.3).lineTo(-361.2,-211.3).lineTo(-361.2,-154.6).closePath().moveTo(-526.1,-154.6).lineTo(-526.1,-211.3).lineTo(-469.4,-211.3).lineTo(-469.4,-154.6).closePath();
	this.shape.setTransform(526.05,211.325);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cuadros_negros, new cjs.Rectangle(0,0,1052.1,422.7), null);


(lib.t39 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(3.6,7.1).lineTo(3,6.5).lineTo(2.6,5.9).lineTo(2.1,5.1).lineTo(1.2,3.8).lineTo(0.2,2.2).lineTo(-0.6,1.3).lineTo(-1.2,0.7).lineTo(-1.9,0.6).lineTo(-2.1,0.6).lineTo(-2.4,0.6).lineTo(-2.4,4.5).lineTo(-2.4,5.3).lineTo(-2.1,5.7).curveTo(-1.8,6.1,-0.9,6).lineTo(-0.4,6).lineTo(-0.4,7.1).lineTo(-7.5,7.1).lineTo(-7.5,6).lineTo(-7,6).lineTo(-6.2,6).curveTo(-5.9,6,-5.7,5.8).curveTo(-5.7,5.7,-5.7,5.7).curveTo(-5.6,5.6,-5.6,5.6).curveTo(-5.6,5.5,-5.6,5.4).curveTo(-5.6,5.4,-5.5,5.3).lineTo(-5.4,4.5).lineTo(-5.4,-4.5).lineTo(-5.5,-5.3).curveTo(-5.6,-5.4,-5.6,-5.4).curveTo(-5.6,-5.5,-5.6,-5.6).curveTo(-5.6,-5.6,-5.7,-5.7).curveTo(-5.7,-5.7,-5.7,-5.8).curveTo(-5.9,-6,-6.2,-6).lineTo(-7,-6).lineTo(-7.5,-6).lineTo(-7.5,-7.1).lineTo(0.9,-7.1).curveTo(2.6,-7.1,3.6,-6.1).curveTo(4.7,-5.2,4.6,-3.5).curveTo(4.7,-2.5,4.2,-1.6).curveTo(3.7,-0.9,2.9,-0.3).lineTo(1.9,0.1).lineTo(0.5,0.3).curveTo(1.3,0.4,1.8,0.6).curveTo(2.4,0.8,2.8,1.2).curveTo(3.3,1.6,3.8,2.3).lineTo(5.3,4.4).lineTo(5.9,5.3).lineTo(6.4,5.8).lineTo(6.8,6).lineTo(7.3,6.1).lineTo(7.5,6.1).lineTo(7.5,7.1).closePath().moveTo(-2.4,-0.5).lineTo(-1.2,-0.5).curveTo(0.2,-0.4,0.8,-1.2).curveTo(1.6,-1.8,1.6,-3.3).curveTo(1.6,-5.1,0.5,-5.8).curveTo(0.2,-6,-0.1,-6).lineTo(-1,-6).lineTo(-2.4,-6).closePath();
	this.shape.setTransform(132.35,44.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CC9511").beginStroke().moveTo(-6.3,7.1).lineTo(-6.3,6).lineTo(-5.8,6).lineTo(-5,5.9).curveTo(-4.7,5.9,-4.6,5.7).curveTo(-4.5,5.7,-4.5,5.6).curveTo(-4.4,5.6,-4.4,5.5).curveTo(-4.4,5.5,-4.3,5.4).curveTo(-4.3,5.4,-4.3,5.3).lineTo(-4.2,4.5).lineTo(-4.2,-4.5).lineTo(-4.3,-5.3).lineTo(-4.6,-5.8).lineTo(-5,-6).lineTo(-5.8,-6).lineTo(-6.3,-6).lineTo(-6.3,-7.1).lineTo(5.1,-7.1).lineTo(5.2,-3.4).lineTo(4.2,-3.4).lineTo(4.1,-4.3).lineTo(3.8,-5).curveTo(3.5,-5.6,3,-5.8).curveTo(2.6,-6.1,1.7,-6).lineTo(-1.2,-6).lineTo(-1.2,-1.1).lineTo(0.2,-1.1).curveTo(0.9,-1.1,1.2,-1.5).curveTo(1.6,-2,1.6,-3).lineTo(2.7,-3).lineTo(2.7,2.2).lineTo(1.6,2.2).lineTo(1.6,2).curveTo(1.6,0.9,1.2,0.5).curveTo(0.7,0.1,-0.3,0.1).lineTo(-1.2,0.1).lineTo(-1.2,4.3).lineTo(-1.2,5).lineTo(-1.1,5.4).lineTo(-1.1,5.6).lineTo(-0.9,5.8).lineTo(-0.7,5.9).lineTo(-0.5,6).lineTo(-0.2,6).lineTo(0.5,6).lineTo(2.2,6).lineTo(3.1,5.9).curveTo(3.5,5.9,3.8,5.7).lineTo(4.3,5.2).lineTo(4.8,4.6).lineTo(5,3.7).lineTo(5.2,2.7).lineTo(6.3,2.7).lineTo(6,7.1).closePath();
	this.shape_1.setTransform(112.95,44.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#CC9511").beginStroke().moveTo(-3.6,7.1).lineTo(-3.6,6).lineTo(-3.1,6).lineTo(-2.3,5.9).curveTo(-2,5.9,-1.8,5.7).lineTo(-1.6,5.3).lineTo(-1.5,4.5).lineTo(-1.5,-6).lineTo(-2.3,-6).curveTo(-3.4,-6,-4,-5.8).curveTo(-4.6,-5.4,-5,-4.7).curveTo(-5.5,-3.8,-5.6,-2.7).lineTo(-6.7,-2.7).lineTo(-6.4,-7.1).lineTo(6.4,-7.1).lineTo(6.7,-2.7).lineTo(5.6,-2.7).curveTo(5.5,-4.3,4.6,-5.2).curveTo(3.8,-6,2.4,-6).lineTo(1.5,-6).lineTo(1.5,4.5).lineTo(1.6,5.3).curveTo(1.6,5.6,1.8,5.8).curveTo(2,6,2.3,6).lineTo(3.1,6).lineTo(3.6,6).lineTo(3.6,7.1).closePath();
	this.shape_2.setTransform(94.475,44.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#CC9511").beginStroke().moveTo(3.4,7.1).lineTo(-4.2,-4.3).lineTo(-4.2,4.5).lineTo(-4.1,5.3).curveTo(-4.1,5.4,-4.1,5.4).curveTo(-4.1,5.5,-4.1,5.5).curveTo(-4.1,5.6,-4,5.6).curveTo(-4,5.7,-3.9,5.7).curveTo(-3.6,6.1,-2.7,6).lineTo(-2.2,6).lineTo(-2.2,7.1).lineTo(-7.8,7.1).lineTo(-7.8,6).lineTo(-7.4,6).lineTo(-6.6,6).curveTo(-6.3,6,-6.2,5.8).curveTo(-6.1,5.7,-6.1,5.7).curveTo(-6,5.6,-6,5.6).curveTo(-6,5.5,-6,5.4).curveTo(-6,5.4,-5.9,5.3).lineTo(-5.8,4.5).lineTo(-5.8,-4.5).lineTo(-5.9,-5.3).lineTo(-6.2,-5.8).lineTo(-6.6,-6).lineTo(-7.4,-6).lineTo(-7.8,-6).lineTo(-7.8,-7.1).lineTo(-2.6,-7.1).lineTo(4.2,3).lineTo(4.2,-4.5).lineTo(4.2,-5.3).lineTo(4,-5.8).lineTo(3.5,-6).lineTo(2.7,-6).lineTo(2.2,-6).lineTo(2.2,-7.1).lineTo(7.8,-7.1).lineTo(7.8,-6).lineTo(7.5,-6).lineTo(6.7,-6).curveTo(6.4,-6,6.2,-5.8).curveTo(6.2,-5.7,6.1,-5.7).curveTo(6.1,-5.6,6.1,-5.6).curveTo(6,-5.5,6,-5.4).curveTo(6,-5.4,6,-5.3).lineTo(6,-4.5).lineTo(6,7.1).closePath();
	this.shape_3.setTransform(74.5,44.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#CC9511").beginStroke().moveTo(-6.3,7.1).lineTo(-6.3,6).lineTo(-5.8,6).lineTo(-5,5.9).curveTo(-4.7,5.9,-4.5,5.7).curveTo(-4.5,5.7,-4.5,5.6).curveTo(-4.4,5.6,-4.4,5.5).curveTo(-4.4,5.5,-4.3,5.4).curveTo(-4.3,5.4,-4.3,5.3).lineTo(-4.3,4.5).lineTo(-4.3,-4.5).lineTo(-4.3,-5.3).lineTo(-4.5,-5.8).lineTo(-5,-6).lineTo(-5.8,-6).lineTo(-6.3,-6).lineTo(-6.3,-7.1).lineTo(5.1,-7.1).lineTo(5.3,-3.4).lineTo(4.2,-3.4).lineTo(4.1,-4.3).lineTo(3.8,-5).curveTo(3.4,-5.6,3,-5.8).curveTo(2.5,-6.1,1.8,-6).lineTo(-1.2,-6).lineTo(-1.2,-1.1).lineTo(0.2,-1.1).curveTo(0.9,-1.1,1.2,-1.5).curveTo(1.6,-2,1.6,-3).lineTo(2.7,-3).lineTo(2.7,2.2).lineTo(1.6,2.2).lineTo(1.6,2).curveTo(1.6,0.9,1.1,0.5).curveTo(0.8,0.1,-0.3,0.1).lineTo(-1.2,0.1).lineTo(-1.2,4.3).lineTo(-1.2,5).lineTo(-1.1,5.4).lineTo(-1,5.6).lineTo(-0.9,5.8).lineTo(-0.7,5.9).lineTo(-0.6,6).lineTo(-0.1,6).lineTo(0.5,6).lineTo(2.2,6).lineTo(3.1,5.9).curveTo(3.5,5.9,3.8,5.7).lineTo(4.3,5.2).lineTo(4.7,4.6).lineTo(5,3.7).lineTo(5.3,2.7).lineTo(6.3,2.7).lineTo(6,7.1).closePath();
	this.shape_4.setTransform(54.65,44.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#DCDCDC").beginStroke().moveTo(3.6,7.1).lineTo(3,6.5).lineTo(2.6,5.9).lineTo(2.1,5.1).lineTo(1.2,3.8).lineTo(0.2,2.2).lineTo(-0.6,1.3).lineTo(-1.2,0.7).lineTo(-1.9,0.6).lineTo(-2.1,0.6).lineTo(-2.4,0.6).lineTo(-2.4,4.5).lineTo(-2.4,5.3).lineTo(-2.1,5.7).curveTo(-1.8,6.1,-0.9,6).lineTo(-0.4,6).lineTo(-0.4,7.1).lineTo(-7.5,7.1).lineTo(-7.5,6).lineTo(-7,6).lineTo(-6.2,6).curveTo(-5.9,6,-5.7,5.8).curveTo(-5.7,5.7,-5.7,5.7).curveTo(-5.6,5.6,-5.6,5.6).curveTo(-5.6,5.5,-5.6,5.4).curveTo(-5.6,5.4,-5.5,5.3).lineTo(-5.4,4.5).lineTo(-5.4,-4.5).lineTo(-5.5,-5.3).curveTo(-5.6,-5.4,-5.6,-5.4).curveTo(-5.6,-5.5,-5.6,-5.6).curveTo(-5.6,-5.6,-5.7,-5.7).curveTo(-5.7,-5.7,-5.7,-5.8).curveTo(-5.9,-6,-6.2,-6).lineTo(-7,-6).lineTo(-7.5,-6).lineTo(-7.5,-7.1).lineTo(0.9,-7.1).curveTo(2.6,-7.1,3.6,-6.1).curveTo(4.7,-5.2,4.6,-3.5).curveTo(4.7,-2.5,4.2,-1.6).curveTo(3.7,-0.9,2.9,-0.3).lineTo(1.9,0.1).lineTo(0.5,0.3).curveTo(1.3,0.4,1.8,0.6).curveTo(2.4,0.8,2.8,1.2).curveTo(3.3,1.6,3.8,2.3).lineTo(5.3,4.4).lineTo(5.9,5.3).lineTo(6.4,5.8).lineTo(6.8,6).lineTo(7.3,6.1).lineTo(7.5,6.1).lineTo(7.5,7.1).closePath().moveTo(-2.4,-0.5).lineTo(-1.2,-0.5).curveTo(0.2,-0.4,0.8,-1.2).curveTo(1.6,-1.8,1.6,-3.3).curveTo(1.6,-5.1,0.5,-5.8).curveTo(0.2,-6,-0.1,-6).lineTo(-1,-6).lineTo(-2.4,-6).closePath();
	this.shape_5.setTransform(132.35,44.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-6.3,7.1).lineTo(-6.3,6).lineTo(-5.8,6).lineTo(-5,5.9).curveTo(-4.7,5.9,-4.6,5.7).curveTo(-4.5,5.7,-4.5,5.6).curveTo(-4.4,5.6,-4.4,5.5).curveTo(-4.4,5.5,-4.3,5.4).curveTo(-4.3,5.4,-4.3,5.3).lineTo(-4.2,4.5).lineTo(-4.2,-4.5).lineTo(-4.3,-5.3).lineTo(-4.6,-5.8).lineTo(-5,-6).lineTo(-5.8,-6).lineTo(-6.3,-6).lineTo(-6.3,-7.1).lineTo(5.1,-7.1).lineTo(5.2,-3.4).lineTo(4.2,-3.4).lineTo(4.1,-4.3).lineTo(3.8,-5).curveTo(3.5,-5.6,3,-5.8).curveTo(2.6,-6.1,1.7,-6).lineTo(-1.2,-6).lineTo(-1.2,-1.1).lineTo(0.2,-1.1).curveTo(0.9,-1.1,1.2,-1.5).curveTo(1.6,-2,1.6,-3).lineTo(2.7,-3).lineTo(2.7,2.2).lineTo(1.6,2.2).lineTo(1.6,2).curveTo(1.6,0.9,1.2,0.5).curveTo(0.7,0.1,-0.3,0.1).lineTo(-1.2,0.1).lineTo(-1.2,4.3).lineTo(-1.2,5).lineTo(-1.1,5.4).lineTo(-1.1,5.6).lineTo(-0.9,5.8).lineTo(-0.7,5.9).lineTo(-0.5,6).lineTo(-0.2,6).lineTo(0.5,6).lineTo(2.2,6).lineTo(3.1,5.9).curveTo(3.5,5.9,3.8,5.7).lineTo(4.3,5.2).lineTo(4.8,4.6).lineTo(5,3.7).lineTo(5.2,2.7).lineTo(6.3,2.7).lineTo(6,7.1).closePath();
	this.shape_6.setTransform(112.95,44.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-3.6,7.1).lineTo(-3.6,6).lineTo(-3.1,6).lineTo(-2.3,5.9).curveTo(-2,5.9,-1.8,5.7).lineTo(-1.6,5.3).lineTo(-1.5,4.5).lineTo(-1.5,-6).lineTo(-2.3,-6).curveTo(-3.4,-6,-4,-5.8).curveTo(-4.6,-5.4,-5,-4.7).curveTo(-5.5,-3.8,-5.6,-2.7).lineTo(-6.7,-2.7).lineTo(-6.4,-7.1).lineTo(6.4,-7.1).lineTo(6.7,-2.7).lineTo(5.6,-2.7).curveTo(5.5,-4.3,4.6,-5.2).curveTo(3.8,-6,2.4,-6).lineTo(1.5,-6).lineTo(1.5,4.5).lineTo(1.6,5.3).curveTo(1.6,5.6,1.8,5.8).curveTo(2,6,2.3,6).lineTo(3.1,6).lineTo(3.6,6).lineTo(3.6,7.1).closePath();
	this.shape_7.setTransform(94.475,44.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#DCDCDC").beginStroke().moveTo(3.4,7.1).lineTo(-4.2,-4.3).lineTo(-4.2,4.5).lineTo(-4.1,5.3).curveTo(-4.1,5.4,-4.1,5.4).curveTo(-4.1,5.5,-4.1,5.5).curveTo(-4.1,5.6,-4,5.6).curveTo(-4,5.7,-3.9,5.7).curveTo(-3.6,6.1,-2.7,6).lineTo(-2.2,6).lineTo(-2.2,7.1).lineTo(-7.8,7.1).lineTo(-7.8,6).lineTo(-7.4,6).lineTo(-6.6,6).curveTo(-6.3,6,-6.2,5.8).curveTo(-6.1,5.7,-6.1,5.7).curveTo(-6,5.6,-6,5.6).curveTo(-6,5.5,-6,5.4).curveTo(-6,5.4,-5.9,5.3).lineTo(-5.8,4.5).lineTo(-5.8,-4.5).lineTo(-5.9,-5.3).lineTo(-6.2,-5.8).lineTo(-6.6,-6).lineTo(-7.4,-6).lineTo(-7.8,-6).lineTo(-7.8,-7.1).lineTo(-2.6,-7.1).lineTo(4.2,3).lineTo(4.2,-4.5).lineTo(4.2,-5.3).lineTo(4,-5.8).lineTo(3.5,-6).lineTo(2.7,-6).lineTo(2.2,-6).lineTo(2.2,-7.1).lineTo(7.8,-7.1).lineTo(7.8,-6).lineTo(7.5,-6).lineTo(6.7,-6).curveTo(6.4,-6,6.2,-5.8).curveTo(6.2,-5.7,6.1,-5.7).curveTo(6.1,-5.6,6.1,-5.6).curveTo(6,-5.5,6,-5.4).curveTo(6,-5.4,6,-5.3).lineTo(6,-4.5).lineTo(6,7.1).closePath();
	this.shape_8.setTransform(74.5,44.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-6.3,7.1).lineTo(-6.3,6).lineTo(-5.8,6).lineTo(-5,5.9).curveTo(-4.7,5.9,-4.5,5.7).curveTo(-4.5,5.7,-4.5,5.6).curveTo(-4.4,5.6,-4.4,5.5).curveTo(-4.4,5.5,-4.3,5.4).curveTo(-4.3,5.4,-4.3,5.3).lineTo(-4.3,4.5).lineTo(-4.3,-4.5).lineTo(-4.3,-5.3).lineTo(-4.5,-5.8).lineTo(-5,-6).lineTo(-5.8,-6).lineTo(-6.3,-6).lineTo(-6.3,-7.1).lineTo(5.1,-7.1).lineTo(5.3,-3.4).lineTo(4.2,-3.4).lineTo(4.1,-4.3).lineTo(3.8,-5).curveTo(3.4,-5.6,3,-5.8).curveTo(2.5,-6.1,1.8,-6).lineTo(-1.2,-6).lineTo(-1.2,-1.1).lineTo(0.2,-1.1).curveTo(0.9,-1.1,1.2,-1.5).curveTo(1.6,-2,1.6,-3).lineTo(2.7,-3).lineTo(2.7,2.2).lineTo(1.6,2.2).lineTo(1.6,2).curveTo(1.6,0.9,1.1,0.5).curveTo(0.8,0.1,-0.3,0.1).lineTo(-1.2,0.1).lineTo(-1.2,4.3).lineTo(-1.2,5).lineTo(-1.1,5.4).lineTo(-1,5.6).lineTo(-0.9,5.8).lineTo(-0.7,5.9).lineTo(-0.6,6).lineTo(-0.1,6).lineTo(0.5,6).lineTo(2.2,6).lineTo(3.1,5.9).curveTo(3.5,5.9,3.8,5.7).lineTo(4.3,5.2).lineTo(4.7,4.6).lineTo(5,3.7).lineTo(5.3,2.7).lineTo(6.3,2.7).lineTo(6,7.1).closePath();
	this.shape_9.setTransform(54.65,44.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-69.8,0,69.8,0).setStrokeStyle(1.9).moveTo(-61.2,31.5).lineTo(61.2,31.5).curveTo(64.4,31.5,66.6,29.3).curveTo(68.9,27.1,68.9,23.9).lineTo(68.9,-24).curveTo(68.9,-27.1,66.6,-29.4).curveTo(64.4,-31.6,61.2,-31.6).lineTo(-61.2,-31.6).curveTo(-64.4,-31.6,-66.6,-29.4).curveTo(-68.9,-27.1,-68.9,-24).lineTo(-68.9,23.9).curveTo(-68.9,27.1,-66.6,29.3).curveTo(-64.4,31.5,-61.2,31.5).closePath();
	this.shape_10.setTransform(96.1024,43.9634,1.3972,1.3972);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000000").beginStroke().moveTo(-61.2,31.5).curveTo(-64.4,31.6,-66.6,29.3).curveTo(-68.8,27.1,-68.9,23.9).lineTo(-68.9,-24).curveTo(-68.8,-27.1,-66.6,-29.3).curveTo(-64.4,-31.6,-61.2,-31.6).lineTo(61.3,-31.6).curveTo(64.4,-31.6,66.7,-29.3).curveTo(68.8,-27.1,68.8,-24).lineTo(68.8,23.9).curveTo(68.8,27.1,66.7,29.3).curveTo(64.4,31.6,61.3,31.5).closePath();
	this.shape_11.setTransform(96.1024,43.9634,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,194.4,90.19999999999999);


(lib.t38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(3.5,10.7).lineTo(3.5,9.1).lineTo(4.3,9.1).lineTo(5.5,9).curveTo(5.9,8.9,6.2,8.6).curveTo(6.4,8.3,6.5,8).lineTo(6.5,6.7).lineTo(6.5,-5.6).lineTo(0.1,10.7).lineTo(-2.3,10.7).lineTo(-8.8,-5.8).lineTo(-8.8,6.7).lineTo(-8.7,8).curveTo(-8.6,8.4,-8.4,8.6).curveTo(-8.2,8.9,-7.7,9).lineTo(-6.4,9.1).lineTo(-5.6,9.1).lineTo(-5.6,10.7).lineTo(-14.2,10.7).lineTo(-14.2,9.1).lineTo(-13.4,9.1).lineTo(-12.2,9).curveTo(-11.7,8.9,-11.5,8.6).curveTo(-11.2,8.3,-11.2,8).lineTo(-11.1,6.7).lineTo(-11.1,-6.7).lineTo(-11.2,-8).curveTo(-11.2,-8.3,-11.5,-8.6).curveTo(-11.7,-8.9,-12.2,-9).lineTo(-13.4,-9.1).lineTo(-14.2,-9.1).lineTo(-14.2,-10.7).lineTo(-5.9,-10.7).lineTo(0.1,4.5).lineTo(6.2,-10.7).lineTo(14.2,-10.7).lineTo(14.2,-9.1).lineTo(13.4,-9.1).lineTo(12.2,-9).curveTo(11.8,-8.9,11.5,-8.6).lineTo(11.3,-8.4).lineTo(11.2,-8.1).lineTo(11.1,-7.6).lineTo(11.1,-6.7).lineTo(11.1,6.7).lineTo(11.2,7.9).curveTo(11.4,8.3,11.7,8.6).curveTo(11.9,8.9,12.4,9).lineTo(13.6,9.1).lineTo(14.2,9.1).lineTo(14.2,10.7).closePath();
	this.shape.setTransform(40.8,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(3.5,10.7).lineTo(3.5,9.1).lineTo(4.3,9.1).lineTo(5.5,9).curveTo(5.9,8.9,6.2,8.6).curveTo(6.4,8.3,6.5,8).lineTo(6.5,6.7).lineTo(6.5,-5.6).lineTo(0.1,10.7).lineTo(-2.3,10.7).lineTo(-8.8,-5.8).lineTo(-8.8,6.7).lineTo(-8.7,8).curveTo(-8.6,8.4,-8.4,8.6).curveTo(-8.2,8.9,-7.7,9).lineTo(-6.4,9.1).lineTo(-5.6,9.1).lineTo(-5.6,10.7).lineTo(-14.2,10.7).lineTo(-14.2,9.1).lineTo(-13.4,9.1).lineTo(-12.2,9).curveTo(-11.7,8.9,-11.5,8.6).curveTo(-11.2,8.3,-11.2,8).lineTo(-11.1,6.7).lineTo(-11.1,-6.7).lineTo(-11.2,-8).curveTo(-11.2,-8.3,-11.5,-8.6).curveTo(-11.7,-8.9,-12.2,-9).lineTo(-13.4,-9.1).lineTo(-14.2,-9.1).lineTo(-14.2,-10.7).lineTo(-5.9,-10.7).lineTo(0.1,4.5).lineTo(6.2,-10.7).lineTo(14.2,-10.7).lineTo(14.2,-9.1).lineTo(13.4,-9.1).lineTo(12.2,-9).curveTo(11.8,-8.9,11.5,-8.6).lineTo(11.3,-8.4).lineTo(11.2,-8.1).lineTo(11.1,-7.6).lineTo(11.1,-6.7).lineTo(11.1,6.7).lineTo(11.2,7.9).curveTo(11.4,8.3,11.7,8.6).curveTo(11.9,8.9,12.4,9).lineTo(13.6,9.1).lineTo(14.2,9.1).lineTo(14.2,10.7).closePath();
	this.shape_1.setTransform(40.8,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.2,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.8).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.2,32.3).closePath();
	this.shape_2.setTransform(40.9964,44.9928,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.2,-32.3).curveTo(24.6,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(40.9964,44.9928,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,84.19999999999999,92.19999999999999);


(lib.t37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(5.2,10.7).lineTo(-6.3,-6.4).lineTo(-6.3,6.7).lineTo(-6.3,8).curveTo(-6.2,8.3,-5.9,8.6).curveTo(-5.4,9.1,-4,9.1).lineTo(-3.3,9.1).lineTo(-3.3,10.7).lineTo(-11.8,10.7).lineTo(-11.8,9.1).lineTo(-11.1,9.1).lineTo(-10,9).curveTo(-9.5,8.9,-9.3,8.7).curveTo(-9,8.4,-8.9,7.9).lineTo(-8.8,6.7).lineTo(-8.8,-6.7).lineTo(-8.9,-8).curveTo(-9,-8.3,-9.2,-8.6).curveTo(-9.5,-8.9,-9.9,-9).lineTo(-11.1,-9.1).lineTo(-11.8,-9.1).lineTo(-11.8,-10.7).lineTo(-3.9,-10.7).lineTo(6.4,4.6).lineTo(6.4,-6.7).curveTo(6.4,-7.7,6.3,-8).curveTo(6.3,-8.3,6,-8.6).curveTo(5.8,-8.9,5.3,-9).lineTo(4.1,-9.1).lineTo(3.3,-9.1).lineTo(3.3,-10.7).lineTo(11.8,-10.7).lineTo(11.8,-9.1).lineTo(11.2,-9.1).lineTo(10,-9).curveTo(9.6,-8.9,9.3,-8.7).curveTo(9.1,-8.4,9,-7.9).lineTo(8.9,-6.7).lineTo(8.9,10.7).closePath();
	this.shape.setTransform(40.875,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(5.2,10.7).lineTo(-6.3,-6.4).lineTo(-6.3,6.7).lineTo(-6.3,8).curveTo(-6.2,8.3,-5.9,8.6).curveTo(-5.4,9.1,-4,9.1).lineTo(-3.3,9.1).lineTo(-3.3,10.7).lineTo(-11.8,10.7).lineTo(-11.8,9.1).lineTo(-11.1,9.1).lineTo(-10,9).curveTo(-9.5,8.9,-9.3,8.7).curveTo(-9,8.4,-8.9,7.9).lineTo(-8.8,6.7).lineTo(-8.8,-6.7).lineTo(-8.9,-8).curveTo(-9,-8.3,-9.2,-8.6).curveTo(-9.5,-8.9,-9.9,-9).lineTo(-11.1,-9.1).lineTo(-11.8,-9.1).lineTo(-11.8,-10.7).lineTo(-3.9,-10.7).lineTo(6.4,4.6).lineTo(6.4,-6.7).curveTo(6.4,-7.7,6.3,-8).curveTo(6.3,-8.3,6,-8.6).curveTo(5.8,-8.9,5.3,-9).lineTo(4.1,-9.1).lineTo(3.3,-9.1).lineTo(3.3,-10.7).lineTo(11.8,-10.7).lineTo(11.8,-9.1).lineTo(11.2,-9.1).lineTo(10,-9).curveTo(9.6,-8.9,9.3,-8.7).curveTo(9.1,-8.4,9,-7.9).lineTo(8.9,-6.7).lineTo(8.9,10.7).closePath();
	this.shape_1.setTransform(40.875,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.7,32.2,27,29.6).curveTo(29.4,27,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.8).curveTo(24.6,-32.3,21.2,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0022,44.9928,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.6,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.7,32.2,21.3,32.2).lineTo(-21.2,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.0022,44.9928,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,84.19999999999999,92.19999999999999);


(lib.t36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-9.1,10.7).lineTo(-9.1,9.1).lineTo(-8.5,9.1).lineTo(-7.3,9).curveTo(-6.8,8.8,-6.6,8.6).curveTo(-6.3,8.3,-6.2,8).lineTo(-6.2,6.7).lineTo(-6.2,-6.7).lineTo(-6.2,-8).curveTo(-6.3,-8.3,-6.6,-8.6).curveTo(-6.8,-8.8,-7.3,-8.9).curveTo(-7.7,-9.1,-8.5,-9.1).lineTo(-9.1,-9.1).lineTo(-9.1,-10.7).lineTo(2.6,-10.7).curveTo(3.7,-10.7,4.7,-10.3).curveTo(5.8,-9.9,6.5,-9.2).curveTo(7.2,-8.5,7.6,-7.5).curveTo(8,-6.6,8,-5.4).curveTo(8,-4.2,7.5,-3.2).curveTo(6.9,-2.2,5.9,-1.5).lineTo(4.9,-1.1).curveTo(4.5,-0.9,3.6,-0.9).curveTo(6.4,-0.3,7.8,1.1).curveTo(9.1,2.4,9.1,4.9).curveTo(9.1,7.6,7.2,9.3).curveTo(6.3,10,5.2,10.3).curveTo(4.1,10.7,2.3,10.7).closePath().moveTo(-1.6,6.9).lineTo(-1.5,8.2).curveTo(-1.4,8.6,-1.2,8.9).curveTo(-1,9.2,-0.6,9.3).lineTo(0.5,9.4).curveTo(1.6,9.4,2.3,9.1).curveTo(2.9,8.8,3.4,8.2).curveTo(3.8,7.7,4,6.8).curveTo(4.2,6,4.2,5).curveTo(4.2,3.6,3.8,2.6).curveTo(3.4,1.7,2.7,1.1).lineTo(2.2,0.8).lineTo(1.6,0.6).lineTo(0.7,0.5).lineTo(-0.4,0.5).lineTo(-1.6,0.5).closePath().moveTo(-1.6,-1.1).lineTo(-0.6,-1.1).curveTo(0.8,-1.1,1.5,-1.3).curveTo(2.2,-1.6,2.7,-2.2).curveTo(3.4,-3.2,3.4,-5.1).curveTo(3.4,-6.3,3.1,-7).curveTo(2.8,-7.7,2.2,-8.2).lineTo(1.7,-8.5).lineTo(1.1,-8.7).lineTo(0.3,-8.7).lineTo(-1,-8.7).lineTo(-1.6,-8.7).closePath();
	this.shape.setTransform(40.625,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-9.1,10.7).lineTo(-9.1,9.1).lineTo(-8.5,9.1).lineTo(-7.3,9).curveTo(-6.8,8.8,-6.6,8.6).curveTo(-6.3,8.3,-6.2,8).lineTo(-6.2,6.7).lineTo(-6.2,-6.7).lineTo(-6.2,-8).curveTo(-6.3,-8.3,-6.6,-8.6).curveTo(-6.8,-8.8,-7.3,-8.9).curveTo(-7.7,-9.1,-8.5,-9.1).lineTo(-9.1,-9.1).lineTo(-9.1,-10.7).lineTo(2.6,-10.7).curveTo(3.7,-10.7,4.7,-10.3).curveTo(5.8,-9.9,6.5,-9.2).curveTo(7.2,-8.5,7.6,-7.5).curveTo(8,-6.6,8,-5.4).curveTo(8,-4.2,7.5,-3.2).curveTo(6.9,-2.2,5.9,-1.5).lineTo(4.9,-1.1).curveTo(4.5,-0.9,3.6,-0.9).curveTo(6.4,-0.3,7.8,1.1).curveTo(9.1,2.4,9.1,4.9).curveTo(9.1,7.6,7.2,9.3).curveTo(6.3,10,5.2,10.3).curveTo(4.1,10.7,2.3,10.7).closePath().moveTo(-1.6,6.9).lineTo(-1.5,8.2).curveTo(-1.4,8.6,-1.2,8.9).curveTo(-1,9.2,-0.6,9.3).lineTo(0.5,9.4).curveTo(1.6,9.4,2.3,9.1).curveTo(2.9,8.8,3.4,8.2).curveTo(3.8,7.7,4,6.8).curveTo(4.2,6,4.2,5).curveTo(4.2,3.6,3.8,2.6).curveTo(3.4,1.7,2.7,1.1).lineTo(2.2,0.8).lineTo(1.6,0.6).lineTo(0.7,0.5).lineTo(-0.4,0.5).lineTo(-1.6,0.5).closePath().moveTo(-1.6,-1.1).lineTo(-0.6,-1.1).curveTo(0.8,-1.1,1.5,-1.3).curveTo(2.2,-1.6,2.7,-2.2).curveTo(3.4,-3.2,3.4,-5.1).curveTo(3.4,-6.3,3.1,-7).curveTo(2.8,-7.7,2.2,-8.2).lineTo(1.7,-8.5).lineTo(1.1,-8.7).lineTo(0.3,-8.7).lineTo(-1,-8.7).lineTo(-1.6,-8.7).closePath();
	this.shape_1.setTransform(40.625,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.8).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.008,44.9928,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.7,32.2,21.2,32.2).lineTo(-21.2,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.008,44.9928,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,95.3);


(lib.t35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-1.3,10.7).lineTo(-8.6,-6.2).lineTo(-9.2,-7.5).lineTo(-9.9,-8.3).curveTo(-10.2,-8.6,-10.8,-8.8).lineTo(-12,-9.1).lineTo(-12,-10.7).lineTo(-2,-10.7).lineTo(-2,-9.1).curveTo(-3.3,-9,-3.8,-8.8).curveTo(-4.2,-8.6,-4.2,-8).lineTo(-4,-7.4).lineTo(-3.6,-6.2).lineTo(1.1,5.1).lineTo(5.8,-6.2).lineTo(6.1,-7.2).lineTo(6.2,-8).curveTo(6.2,-8.6,5.7,-8.9).curveTo(5,-9.1,3.4,-9.1).lineTo(3.4,-10.7).lineTo(12,-10.7).lineTo(12,-9.1).curveTo(10.9,-9,10.4,-8.8).curveTo(9.8,-8.6,9.4,-7.9).lineTo(8.9,-7.1).lineTo(8,-5.3).lineTo(7.2,-3.5).lineTo(6.8,-2.4).lineTo(6.3,-1.6).lineTo(6,-0.7).lineTo(1.4,10.7).closePath();
	this.shape.setTransform(40.75,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-1.3,10.7).lineTo(-8.6,-6.2).lineTo(-9.2,-7.5).lineTo(-9.9,-8.3).curveTo(-10.2,-8.6,-10.8,-8.8).lineTo(-12,-9.1).lineTo(-12,-10.7).lineTo(-2,-10.7).lineTo(-2,-9.1).curveTo(-3.3,-9,-3.8,-8.8).curveTo(-4.2,-8.6,-4.2,-8).lineTo(-4,-7.4).lineTo(-3.6,-6.2).lineTo(1.1,5.1).lineTo(5.8,-6.2).lineTo(6.1,-7.2).lineTo(6.2,-8).curveTo(6.2,-8.6,5.7,-8.9).curveTo(5,-9.1,3.4,-9.1).lineTo(3.4,-10.7).lineTo(12,-10.7).lineTo(12,-9.1).curveTo(10.9,-9,10.4,-8.8).curveTo(9.8,-8.6,9.4,-7.9).lineTo(8.9,-7.1).lineTo(8,-5.3).lineTo(7.2,-3.5).lineTo(6.8,-2.4).lineTo(6.3,-1.6).lineTo(6,-0.7).lineTo(1.4,10.7).closePath();
	this.shape_1.setTransform(40.75,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.8).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0138,44.9928,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.0138,44.9928,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,92.19999999999999);


(lib.t34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-3.9,10.7).curveTo(-6.1,9.8,-7.6,8.3).curveTo(-9.1,6.9,-10,4.8).curveTo(-10.7,2.7,-10.8,0.2).curveTo(-10.7,-4.8,-7.5,-8.1).curveTo(-4.1,-11.5,1,-11.5).curveTo(3,-11.5,4.6,-11).curveTo(6.3,-10.5,7.8,-9.4).lineTo(8.4,-10.9).lineTo(9.6,-10.9).lineTo(9.6,-9.3).lineTo(9.7,-7.8).lineTo(9.8,-5.8).lineTo(10.1,-2.9).lineTo(8.4,-2.9).curveTo(7.6,-6,5.7,-7.7).curveTo(3.8,-9.4,1.2,-9.4).curveTo(-0.5,-9.4,-1.9,-8.7).curveTo(-3.2,-7.9,-4.2,-6.4).curveTo(-5.7,-3.9,-5.7,0.1).curveTo(-5.7,4.5,-3.9,6.9).curveTo(-2.1,9.3,1.3,9.3).curveTo(3.7,9.3,5.8,8).curveTo(7.9,6.6,9.1,4.2).lineTo(10.7,5.4).curveTo(9.3,8.4,6.8,9.9).curveTo(4.2,11.5,0.6,11.5).curveTo(-1.9,11.5,-3.9,10.7).closePath();
	this.shape.setTransform(41.2,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-3.9,10.7).curveTo(-6.1,9.8,-7.6,8.3).curveTo(-9.1,6.9,-10,4.8).curveTo(-10.7,2.7,-10.8,0.2).curveTo(-10.7,-4.8,-7.5,-8.1).curveTo(-4.1,-11.5,1,-11.5).curveTo(3,-11.5,4.6,-11).curveTo(6.3,-10.5,7.8,-9.4).lineTo(8.4,-10.9).lineTo(9.6,-10.9).lineTo(9.6,-9.3).lineTo(9.7,-7.8).lineTo(9.8,-5.8).lineTo(10.1,-2.9).lineTo(8.4,-2.9).curveTo(7.6,-6,5.7,-7.7).curveTo(3.8,-9.4,1.2,-9.4).curveTo(-0.5,-9.4,-1.9,-8.7).curveTo(-3.2,-7.9,-4.2,-6.4).curveTo(-5.7,-3.9,-5.7,0.1).curveTo(-5.7,4.5,-3.9,6.9).curveTo(-2.1,9.3,1.3,9.3).curveTo(3.7,9.3,5.8,8).curveTo(7.9,6.6,9.1,4.2).lineTo(10.7,5.4).curveTo(9.3,8.4,6.8,9.9).curveTo(4.2,11.5,0.6,11.5).curveTo(-1.9,11.5,-3.9,10.7).closePath();
	this.shape_1.setTransform(41.2,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.3,32.2).curveTo(24.7,32.2,27,29.6).curveTo(29.4,27,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.8).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0196,44.9928,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.4,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.0196,44.9928,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,92.19999999999999);


(lib.t33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(0.7,10.7).lineTo(0.7,9.1).lineTo(1.8,9.1).lineTo(2.3,9).curveTo(2.6,8.9,2.8,8.7).curveTo(2.8,8.7,2.8,8.6).curveTo(2.9,8.6,2.9,8.5).curveTo(2.9,8.5,2.9,8.4).curveTo(2.9,8.3,2.9,8.3).curveTo(2.9,8,2.7,7.6).lineTo(1.8,6.1).lineTo(-0.7,2.5).lineTo(-4,6.7).lineTo(-4.5,7.5).lineTo(-4.8,7.9).lineTo(-4.9,8.1).lineTo(-4.9,8.3).curveTo(-4.9,8.5,-4.6,8.7).curveTo(-4.4,8.9,-4.1,9).lineTo(-3.8,9).lineTo(-3.5,9.1).lineTo(-3,9.1).lineTo(-2.2,9.1).lineTo(-2.2,10.7).lineTo(-11,10.7).lineTo(-11,9.1).lineTo(-9.9,8.9).curveTo(-9.4,8.8,-9,8.6).lineTo(-8.2,8).lineTo(-7.4,7.1).lineTo(-2.2,0.3).lineTo(-7.2,-7.1).lineTo(-8,-8).lineTo(-8.7,-8.6).curveTo(-9.1,-8.9,-9.6,-8.9).lineTo(-10.7,-9.1).lineTo(-10.7,-10.7).lineTo(-0.1,-10.7).lineTo(-0.1,-9.1).curveTo(-1.3,-9,-1.7,-8.9).curveTo(-2.1,-8.7,-2.1,-8.1).lineTo(-2.1,-7.8).lineTo(-2,-7.5).lineTo(-1.6,-7).lineTo(-1.1,-6.2).lineTo(0.7,-3.5).lineTo(2.9,-6.4).lineTo(3.8,-7.5).curveTo(4,-8,4,-8.2).curveTo(4,-8.7,3.4,-8.9).curveTo(2.9,-9.1,1.5,-9.1).lineTo(1.5,-10.7).lineTo(11,-10.7).lineTo(11,-9.1).lineTo(9.5,-8.9).curveTo(8.9,-8.8,8.3,-8.5).curveTo(7.8,-8.2,7.3,-7.7).lineTo(6,-6.4).lineTo(2.1,-1.3).lineTo(6.8,5.5).lineTo(8.1,7.4).curveTo(8.6,8.1,9.1,8.4).curveTo(9.5,8.8,10,8.9).curveTo(10.4,9.1,11,9.1).lineTo(11,10.7).closePath();
	this.shape.setTransform(40.825,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(0.7,10.7).lineTo(0.7,9.1).lineTo(1.8,9.1).lineTo(2.3,9).curveTo(2.6,8.9,2.8,8.7).curveTo(2.8,8.7,2.8,8.6).curveTo(2.9,8.6,2.9,8.5).curveTo(2.9,8.5,2.9,8.4).curveTo(2.9,8.3,2.9,8.3).curveTo(2.9,8,2.7,7.6).lineTo(1.8,6.1).lineTo(-0.7,2.5).lineTo(-4,6.7).lineTo(-4.5,7.5).lineTo(-4.8,7.9).lineTo(-4.9,8.1).lineTo(-4.9,8.3).curveTo(-4.9,8.5,-4.6,8.7).curveTo(-4.4,8.9,-4.1,9).lineTo(-3.8,9).lineTo(-3.5,9.1).lineTo(-3,9.1).lineTo(-2.2,9.1).lineTo(-2.2,10.7).lineTo(-11,10.7).lineTo(-11,9.1).lineTo(-9.9,8.9).curveTo(-9.4,8.8,-9,8.6).lineTo(-8.2,8).lineTo(-7.4,7.1).lineTo(-2.2,0.3).lineTo(-7.2,-7.1).lineTo(-8,-8).lineTo(-8.7,-8.6).curveTo(-9.1,-8.9,-9.6,-8.9).lineTo(-10.7,-9.1).lineTo(-10.7,-10.7).lineTo(-0.1,-10.7).lineTo(-0.1,-9.1).curveTo(-1.3,-9,-1.7,-8.9).curveTo(-2.1,-8.7,-2.1,-8.1).lineTo(-2.1,-7.8).lineTo(-2,-7.5).lineTo(-1.6,-7).lineTo(-1.1,-6.2).lineTo(0.7,-3.5).lineTo(2.9,-6.4).lineTo(3.8,-7.5).curveTo(4,-8,4,-8.2).curveTo(4,-8.7,3.4,-8.9).curveTo(2.9,-9.1,1.5,-9.1).lineTo(1.5,-10.7).lineTo(11,-10.7).lineTo(11,-9.1).lineTo(9.5,-8.9).curveTo(8.9,-8.8,8.3,-8.5).curveTo(7.8,-8.2,7.3,-7.7).lineTo(6,-6.4).lineTo(2.1,-1.3).lineTo(6.8,5.5).lineTo(8.1,7.4).curveTo(8.6,8.1,9.1,8.4).curveTo(9.5,8.8,10,8.9).curveTo(10.4,9.1,11,9.1).lineTo(11,10.7).closePath();
	this.shape_1.setTransform(40.825,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.8).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(40.9905,44.9928,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(40.9905,44.9928,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,92.19999999999999);


(lib.t32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-9.6,10.7).lineTo(-9.6,10).lineTo(3.4,-9.1).lineTo(-1.3,-9.1).curveTo(-2.9,-9.1,-3.7,-8.7).curveTo(-4.6,-8.4,-5.3,-7.6).lineTo(-6.2,-6.1).curveTo(-6.5,-5.3,-6.9,-4).lineTo(-8.4,-4).lineTo(-7.8,-10.7).lineTo(9.6,-10.7).lineTo(9.6,-9.9).lineTo(-3.3,9.1).lineTo(1.4,9.1).curveTo(3.2,9.1,4.1,8.9).curveTo(5,8.8,5.5,8.4).curveTo(6.9,7.3,7.9,3.7).lineTo(9.6,3.7).lineTo(8.9,10.7).closePath();
	this.shape.setTransform(40.55,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-9.6,10.7).lineTo(-9.6,10).lineTo(3.4,-9.1).lineTo(-1.3,-9.1).curveTo(-2.9,-9.1,-3.7,-8.7).curveTo(-4.6,-8.4,-5.3,-7.6).lineTo(-6.2,-6.1).curveTo(-6.5,-5.3,-6.9,-4).lineTo(-8.4,-4).lineTo(-7.8,-10.7).lineTo(9.6,-10.7).lineTo(9.6,-9.9).lineTo(-3.3,9.1).lineTo(1.4,9.1).curveTo(3.2,9.1,4.1,8.9).curveTo(5,8.8,5.5,8.4).curveTo(6.9,7.3,7.9,3.7).lineTo(9.6,3.7).lineTo(8.9,10.7).closePath();
	this.shape_1.setTransform(40.55,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.8).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.3,-32.2).curveTo(-24.7,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(40.9956,44.9928,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.7,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(40.9956,44.9928,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,95.19999999999999);


(lib.t31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-7.9,0,8,0).beginStroke().moveTo(-8,6.9).lineTo(-0,-6.9).lineTo(8,6.9).closePath();
	this.shape.setTransform(40.7528,45.1319,1.3972,1.3972);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.8).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.3,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_1.setTransform(41.0672,44.9928,1.3972,1.3972);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_2.setTransform(41.0672,44.9928,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.2,95.3);


(lib.t30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-13.3,0,13.4,0).beginStroke().moveTo(-13.4,-0).lineTo(-2.4,-6.3).lineTo(-2.4,-1.5).lineTo(13.4,-1.5).lineTo(13.4,1.5).lineTo(-2.4,1.5).lineTo(-2.4,6.3).closePath();
	this.shape.setTransform(41.0745,45.7124,1.3972,1.3972);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_1.setTransform(40.9347,45.0487,1.3972,1.3972);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_2.setTransform(40.9347,45.0487,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,84.1,92.3);


(lib.t29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-9.4,10.7).lineTo(-9.4,9.1).lineTo(-8.8,9.1).lineTo(-7.5,9).curveTo(-7.1,8.9,-6.8,8.6).curveTo(-6.6,8.3,-6.5,8).lineTo(-6.5,6.7).lineTo(-6.5,-6.7).lineTo(-6.5,-8).curveTo(-6.6,-8.3,-6.8,-8.6).curveTo(-7.1,-8.9,-7.5,-9).lineTo(-8.8,-9.1).lineTo(-9.4,-9.1).lineTo(-9.4,-10.7).lineTo(1.2,-10.7).lineTo(1.2,-9.1).lineTo(0.5,-9.1).lineTo(-0.8,-9).curveTo(-1.2,-8.9,-1.4,-8.6).curveTo(-1.7,-8.3,-1.8,-8).lineTo(-1.9,-6.7).lineTo(-1.9,6.6).lineTo(-1.9,7.5).lineTo(-1.8,8).lineTo(-1.6,8.4).lineTo(-1.3,8.6).lineTo(-1,8.8).lineTo(-0.3,8.9).lineTo(0.7,9).lineTo(2.5,9).curveTo(3.7,9,4.7,8.8).curveTo(5.6,8.5,6.2,7.9).curveTo(6.9,7.3,7.3,6.3).curveTo(7.6,5.3,7.8,4).lineTo(9.5,4).lineTo(9.1,10.7).closePath();
	this.shape.setTransform(41.1,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-9.4,10.7).lineTo(-9.4,9.1).lineTo(-8.8,9.1).lineTo(-7.5,9).curveTo(-7.1,8.9,-6.8,8.6).curveTo(-6.6,8.3,-6.5,8).lineTo(-6.5,6.7).lineTo(-6.5,-6.7).lineTo(-6.5,-8).curveTo(-6.6,-8.3,-6.8,-8.6).curveTo(-7.1,-8.9,-7.5,-9).lineTo(-8.8,-9.1).lineTo(-9.4,-9.1).lineTo(-9.4,-10.7).lineTo(1.2,-10.7).lineTo(1.2,-9.1).lineTo(0.5,-9.1).lineTo(-0.8,-9).curveTo(-1.2,-8.9,-1.4,-8.6).curveTo(-1.7,-8.3,-1.8,-8).lineTo(-1.9,-6.7).lineTo(-1.9,6.6).lineTo(-1.9,7.5).lineTo(-1.8,8).lineTo(-1.6,8.4).lineTo(-1.3,8.6).lineTo(-1,8.8).lineTo(-0.3,8.9).lineTo(0.7,9).lineTo(2.5,9).curveTo(3.7,9,4.7,8.8).curveTo(5.6,8.5,6.2,7.9).curveTo(6.9,7.3,7.3,6.3).curveTo(7.6,5.3,7.8,4).lineTo(9.5,4).lineTo(9.1,10.7).closePath();
	this.shape_1.setTransform(41.1,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(40.9905,45.0487,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(40.9905,45.0487,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,84.19999999999999,92.3);


(lib.t28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(1.1,10.7).lineTo(1.1,9.1).lineTo(1.9,9.1).curveTo(2.6,9.1,2.9,8.9).curveTo(3.2,8.8,3.1,8.4).lineTo(3,8).lineTo(2.7,7.3).lineTo(-2.4,0.6).lineTo(-4.3,2.3).lineTo(-4.3,6.8).lineTo(-4.2,7.9).curveTo(-4.1,8.4,-3.9,8.7).curveTo(-3.6,8.9,-3.1,9).lineTo(-1.9,9.1).lineTo(-1.2,9.1).lineTo(-1.2,10.7).lineTo(-12,10.7).lineTo(-12,9.1).lineTo(-11.2,9.1).lineTo(-10,9).curveTo(-9.6,8.9,-9.3,8.7).curveTo(-9,8.4,-8.9,7.9).lineTo(-8.8,6.7).lineTo(-8.8,-6.7).lineTo(-8.9,-7.9).curveTo(-9,-8.4,-9.3,-8.7).curveTo(-9.6,-8.9,-10,-9).lineTo(-11.2,-9.1).lineTo(-12,-9.1).lineTo(-12,-10.7).lineTo(-1.2,-10.7).lineTo(-1.2,-9.1).lineTo(-1.9,-9.1).lineTo(-3.1,-9).curveTo(-3.6,-8.9,-3.9,-8.7).curveTo(-4.1,-8.4,-4.2,-7.9).lineTo(-4.3,-6.7).lineTo(-4.3,-0.6).lineTo(0.1,-4.7).lineTo(1.6,-6.1).lineTo(2.4,-7).lineTo(2.8,-7.5).lineTo(2.9,-7.9).curveTo(2.9,-9.1,0.9,-9.1).lineTo(0.4,-9.1).lineTo(0.4,-10.7).lineTo(10.4,-10.7).lineTo(10.4,-9.1).lineTo(8.9,-8.9).curveTo(8.3,-8.7,7.4,-8.2).curveTo(6.7,-7.7,5.6,-6.7).lineTo(2.7,-4).lineTo(1.1,-2.6).lineTo(7,5.5).lineTo(8.4,7.3).curveTo(8.9,8,9.4,8.3).curveTo(9.9,8.7,10.4,8.9).curveTo(11,9.1,11.7,9.1).lineTo(11.9,9.1).lineTo(11.9,10.7).closePath();
	this.shape.setTransform(41.6,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(1.1,10.7).lineTo(1.1,9.1).lineTo(1.9,9.1).curveTo(2.6,9.1,2.9,8.9).curveTo(3.2,8.8,3.1,8.4).lineTo(3,8).lineTo(2.7,7.3).lineTo(-2.4,0.6).lineTo(-4.3,2.3).lineTo(-4.3,6.8).lineTo(-4.2,7.9).curveTo(-4.1,8.4,-3.9,8.7).curveTo(-3.6,8.9,-3.1,9).lineTo(-1.9,9.1).lineTo(-1.2,9.1).lineTo(-1.2,10.7).lineTo(-12,10.7).lineTo(-12,9.1).lineTo(-11.2,9.1).lineTo(-10,9).curveTo(-9.6,8.9,-9.3,8.7).curveTo(-9,8.4,-8.9,7.9).lineTo(-8.8,6.7).lineTo(-8.8,-6.7).lineTo(-8.9,-7.9).curveTo(-9,-8.4,-9.3,-8.7).curveTo(-9.6,-8.9,-10,-9).lineTo(-11.2,-9.1).lineTo(-12,-9.1).lineTo(-12,-10.7).lineTo(-1.2,-10.7).lineTo(-1.2,-9.1).lineTo(-1.9,-9.1).lineTo(-3.1,-9).curveTo(-3.6,-8.9,-3.9,-8.7).curveTo(-4.1,-8.4,-4.2,-7.9).lineTo(-4.3,-6.7).lineTo(-4.3,-0.6).lineTo(0.1,-4.7).lineTo(1.6,-6.1).lineTo(2.4,-7).lineTo(2.8,-7.5).lineTo(2.9,-7.9).curveTo(2.9,-9.1,0.9,-9.1).lineTo(0.4,-9.1).lineTo(0.4,-10.7).lineTo(10.4,-10.7).lineTo(10.4,-9.1).lineTo(8.9,-8.9).curveTo(8.3,-8.7,7.4,-8.2).curveTo(6.7,-7.7,5.6,-6.7).lineTo(2.7,-4).lineTo(1.1,-2.6).lineTo(7,5.5).lineTo(8.4,7.3).curveTo(8.9,8,9.4,8.3).curveTo(9.9,8.7,10.4,8.9).curveTo(11,9.1,11.7,9.1).lineTo(11.9,9.1).lineTo(11.9,10.7).closePath();
	this.shape_1.setTransform(41.6,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.2,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.2,32.3).closePath();
	this.shape_2.setTransform(40.9964,45.0487,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.2,-32.3).curveTo(24.6,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(40.9964,45.0487,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,84.19999999999999,92.3);


(lib.t27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-5.1,14.8).curveTo(-6.1,14.5,-6.8,14.1).curveTo(-7.5,13.6,-7.9,13).curveTo(-8.2,12.4,-8.2,11.6).curveTo(-8.2,10.7,-7.6,10.2).curveTo(-7,9.6,-6.1,9.6).curveTo(-5.3,9.6,-4.7,10.1).curveTo(-4.2,10.5,-4.2,11.2).lineTo(-4.3,11.6).lineTo(-4.5,12).lineTo(-4.6,12.4).curveTo(-4.6,12.7,-4.1,12.9).curveTo(-3.7,13.2,-3,13.2).curveTo(-2,13.2,-1.2,12.7).curveTo(-0.4,12.1,0,11.2).curveTo(0.4,10.4,0.5,9.6).curveTo(0.7,8.7,0.7,7.2).lineTo(0.7,-11.2).lineTo(0.6,-12.4).curveTo(0.6,-12.7,0.3,-13).curveTo(0,-13.3,-0.4,-13.4).lineTo(-1.6,-13.5).lineTo(-2,-13.5).lineTo(-2,-15.1).lineTo(8.2,-15.1).lineTo(8.2,-13.5).lineTo(7.6,-13.5).lineTo(6.4,-13.4).curveTo(5.9,-13.3,5.7,-13).curveTo(5.4,-12.7,5.3,-12.4).lineTo(5.3,-11.2).lineTo(5.3,6.9).curveTo(5.3,10,3.8,11.9).curveTo(2.7,13.4,0.8,14.2).curveTo(-1,15.1,-3,15.1).curveTo(-4.2,15.1,-5.1,14.8).closePath();
	this.shape.setTransform(38.475,49.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-5.1,14.8).curveTo(-6.1,14.5,-6.8,14.1).curveTo(-7.5,13.6,-7.9,13).curveTo(-8.2,12.4,-8.2,11.6).curveTo(-8.2,10.7,-7.6,10.2).curveTo(-7,9.6,-6.1,9.6).curveTo(-5.3,9.6,-4.7,10.1).curveTo(-4.2,10.5,-4.2,11.2).lineTo(-4.3,11.6).lineTo(-4.5,12).lineTo(-4.6,12.4).curveTo(-4.6,12.7,-4.1,12.9).curveTo(-3.7,13.2,-3,13.2).curveTo(-2,13.2,-1.2,12.7).curveTo(-0.4,12.1,0,11.2).curveTo(0.4,10.4,0.5,9.6).curveTo(0.7,8.7,0.7,7.2).lineTo(0.7,-11.2).lineTo(0.6,-12.4).curveTo(0.6,-12.7,0.3,-13).curveTo(0,-13.3,-0.4,-13.4).lineTo(-1.6,-13.5).lineTo(-2,-13.5).lineTo(-2,-15.1).lineTo(8.2,-15.1).lineTo(8.2,-13.5).lineTo(7.6,-13.5).lineTo(6.4,-13.4).curveTo(5.9,-13.3,5.7,-13).curveTo(5.4,-12.7,5.3,-12.4).lineTo(5.3,-11.2).lineTo(5.3,6.9).curveTo(5.3,10,3.8,11.9).curveTo(2.7,13.4,0.8,14.2).curveTo(-1,15.1,-3,15.1).curveTo(-4.2,15.1,-5.1,14.8).closePath();
	this.shape_1.setTransform(38.475,49.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.7,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.6,-32.3,21.2,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0022,45.0487,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.6,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.7,32.2,21.3,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.0022,45.0487,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,84.19999999999999,92.3);


(lib.t26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(1.7,10.7).lineTo(1.7,9.1).lineTo(2.3,9.1).lineTo(3.5,9).curveTo(3.9,8.9,4.2,8.7).curveTo(4.5,8.4,4.6,7.9).lineTo(4.6,6.8).lineTo(4.6,0.3).lineTo(-4.5,0.3).lineTo(-4.5,6.8).lineTo(-4.5,8).curveTo(-4.5,8.3,-4.2,8.6).curveTo(-3.7,9.1,-2.3,9.1).lineTo(-1.6,9.1).lineTo(-1.6,10.7).lineTo(-12.3,10.7).lineTo(-12.3,9.1).lineTo(-11.5,9.1).lineTo(-10.4,9).curveTo(-9.9,8.9,-9.7,8.7).curveTo(-9.4,8.4,-9.3,7.9).lineTo(-9.2,6.7).lineTo(-9.2,-6.7).lineTo(-9.3,-7.9).curveTo(-9.4,-8.4,-9.7,-8.7).curveTo(-9.9,-8.9,-10.4,-9).lineTo(-11.5,-9.1).lineTo(-12.3,-9.1).lineTo(-12.3,-10.7).lineTo(-1.6,-10.7).lineTo(-1.6,-9.1).lineTo(-2.3,-9.1).lineTo(-3.4,-9).curveTo(-3.9,-8.9,-4.2,-8.6).curveTo(-4.5,-8.3,-4.5,-8).lineTo(-4.5,-6.7).lineTo(-4.5,-1.5).lineTo(4.6,-1.5).lineTo(4.6,-6.7).lineTo(4.6,-8).curveTo(4.5,-8.3,4.2,-8.6).curveTo(4,-8.9,3.6,-9).lineTo(2.3,-9.1).lineTo(1.7,-9.1).lineTo(1.7,-10.7).lineTo(12.2,-10.7).lineTo(12.2,-9.1).lineTo(11.6,-9.1).lineTo(10.3,-9).curveTo(9.9,-8.9,9.6,-8.6).curveTo(9.4,-8.3,9.3,-8).lineTo(9.3,-6.7).lineTo(9.3,6.7).lineTo(9.3,8).curveTo(9.4,8.3,9.6,8.6).curveTo(10.2,9.1,11.6,9.1).lineTo(12.2,9.1).lineTo(12.2,10.7).closePath();
	this.shape.setTransform(40.7,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(1.7,10.7).lineTo(1.7,9.1).lineTo(2.3,9.1).lineTo(3.5,9).curveTo(3.9,8.9,4.2,8.7).curveTo(4.5,8.4,4.6,7.9).lineTo(4.6,6.8).lineTo(4.6,0.3).lineTo(-4.5,0.3).lineTo(-4.5,6.8).lineTo(-4.5,8).curveTo(-4.5,8.3,-4.2,8.6).curveTo(-3.7,9.1,-2.3,9.1).lineTo(-1.6,9.1).lineTo(-1.6,10.7).lineTo(-12.3,10.7).lineTo(-12.3,9.1).lineTo(-11.5,9.1).lineTo(-10.4,9).curveTo(-9.9,8.9,-9.7,8.7).curveTo(-9.4,8.4,-9.3,7.9).lineTo(-9.2,6.7).lineTo(-9.2,-6.7).lineTo(-9.3,-7.9).curveTo(-9.4,-8.4,-9.7,-8.7).curveTo(-9.9,-8.9,-10.4,-9).lineTo(-11.5,-9.1).lineTo(-12.3,-9.1).lineTo(-12.3,-10.7).lineTo(-1.6,-10.7).lineTo(-1.6,-9.1).lineTo(-2.3,-9.1).lineTo(-3.4,-9).curveTo(-3.9,-8.9,-4.2,-8.6).curveTo(-4.5,-8.3,-4.5,-8).lineTo(-4.5,-6.7).lineTo(-4.5,-1.5).lineTo(4.6,-1.5).lineTo(4.6,-6.7).lineTo(4.6,-8).curveTo(4.5,-8.3,4.2,-8.6).curveTo(4,-8.9,3.6,-9).lineTo(2.3,-9.1).lineTo(1.7,-9.1).lineTo(1.7,-10.7).lineTo(12.2,-10.7).lineTo(12.2,-9.1).lineTo(11.6,-9.1).lineTo(10.3,-9).curveTo(9.9,-8.9,9.6,-8.6).curveTo(9.4,-8.3,9.3,-8).lineTo(9.3,-6.7).lineTo(9.3,6.7).lineTo(9.3,8).curveTo(9.4,8.3,9.6,8.6).curveTo(10.2,9.1,11.6,9.1).lineTo(12.2,9.1).lineTo(12.2,10.7).closePath();
	this.shape_1.setTransform(40.7,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.008,45.0487,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.7,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.008,45.0487,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-1.1,86.8,92.3);


(lib.t25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-5.1,10.7).curveTo(-7.1,9.9,-8.6,8.5).curveTo(-10.1,7.1,-10.8,5).curveTo(-11.6,3,-11.6,0.6).curveTo(-11.6,-2,-10.7,-4.2).curveTo(-9.9,-6.4,-8.4,-8).curveTo(-6.8,-9.6,-4.7,-10.6).curveTo(-2.6,-11.5,-0.2,-11.5).curveTo(1.8,-11.5,3.3,-11).curveTo(4.9,-10.5,6.5,-9.4).lineTo(6.9,-10.7).lineTo(8.5,-10.7).lineTo(8.5,-3.2).lineTo(6.9,-3.2).lineTo(6.2,-5.5).curveTo(5.8,-6.3,5.4,-6.9).curveTo(4.5,-8.1,3.1,-8.8).curveTo(1.8,-9.5,0.2,-9.5).curveTo(-1.4,-9.5,-2.6,-8.8).curveTo(-3.8,-8.1,-4.7,-6.8).curveTo(-5.6,-5.6,-6.1,-3.8).curveTo(-6.6,-2,-6.6,0.2).curveTo(-6.6,2.3,-6.1,4).curveTo(-5.6,5.6,-4.8,6.9).curveTo(-4,8.1,-2.9,8.8).curveTo(-1.7,9.4,-0.2,9.4).curveTo(2.2,9.4,4.4,7.8).lineTo(4.4,5.2).lineTo(4.3,4).curveTo(4.2,3.5,4,3.3).curveTo(3.7,3,3.2,2.9).lineTo(2.1,2.9).lineTo(1.3,2.9).lineTo(1.3,1.3).lineTo(11.6,1.3).lineTo(11.6,2.9).lineTo(11.2,2.9).lineTo(10,3).curveTo(9.5,3.1,9.3,3.3).curveTo(9,3.6,9,3.9).lineTo(8.8,5.2).lineTo(8.8,10).lineTo(7.8,10).lineTo(7,10.1).lineTo(6,10.2).lineTo(4.8,10.6).lineTo(3.6,10.9).curveTo(1.6,11.5,-0.5,11.5).curveTo(-3,11.5,-5.1,10.7).closePath();
	this.shape.setTransform(41.05,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-5.1,10.7).curveTo(-7.1,9.9,-8.6,8.5).curveTo(-10.1,7.1,-10.8,5).curveTo(-11.6,3,-11.6,0.6).curveTo(-11.6,-2,-10.7,-4.2).curveTo(-9.9,-6.4,-8.4,-8).curveTo(-6.8,-9.6,-4.7,-10.6).curveTo(-2.6,-11.5,-0.2,-11.5).curveTo(1.8,-11.5,3.3,-11).curveTo(4.9,-10.5,6.5,-9.4).lineTo(6.9,-10.7).lineTo(8.5,-10.7).lineTo(8.5,-3.2).lineTo(6.9,-3.2).lineTo(6.2,-5.5).curveTo(5.8,-6.3,5.4,-6.9).curveTo(4.5,-8.1,3.1,-8.8).curveTo(1.8,-9.5,0.2,-9.5).curveTo(-1.4,-9.5,-2.6,-8.8).curveTo(-3.8,-8.1,-4.7,-6.8).curveTo(-5.6,-5.6,-6.1,-3.8).curveTo(-6.6,-2,-6.6,0.2).curveTo(-6.6,2.3,-6.1,4).curveTo(-5.6,5.6,-4.8,6.9).curveTo(-4,8.1,-2.9,8.8).curveTo(-1.7,9.4,-0.2,9.4).curveTo(2.2,9.4,4.4,7.8).lineTo(4.4,5.2).lineTo(4.3,4).curveTo(4.2,3.5,4,3.3).curveTo(3.7,3,3.2,2.9).lineTo(2.1,2.9).lineTo(1.3,2.9).lineTo(1.3,1.3).lineTo(11.6,1.3).lineTo(11.6,2.9).lineTo(11.2,2.9).lineTo(10,3).curveTo(9.5,3.1,9.3,3.3).curveTo(9,3.6,9,3.9).lineTo(8.8,5.2).lineTo(8.8,10).lineTo(7.8,10).lineTo(7,10.1).lineTo(6,10.2).lineTo(4.8,10.6).lineTo(3.6,10.9).curveTo(1.6,11.5,-0.5,11.5).curveTo(-3,11.5,-5.1,10.7).closePath();
	this.shape_1.setTransform(41.05,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0138,45.0487,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.0138,45.0487,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,95.3);


(lib.t24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-8.7,10.7).lineTo(-8.7,9.1).lineTo(-7.9,9.1).lineTo(-6.8,9).curveTo(-6.3,8.9,-6,8.6).curveTo(-5.8,8.3,-5.7,8).lineTo(-5.7,6.7).lineTo(-5.7,-6.7).lineTo(-5.7,-8).curveTo(-5.8,-8.3,-6,-8.6).curveTo(-6.3,-8.9,-6.8,-9).lineTo(-7.9,-9.1).lineTo(-8.7,-9.1).lineTo(-8.7,-10.7).lineTo(8.1,-10.7).lineTo(8.7,-5.1).lineTo(7.1,-5.1).lineTo(6.5,-7.1).curveTo(6.1,-7.9,5.7,-8.3).curveTo(5.2,-8.8,4.6,-8.9).curveTo(3.9,-9.1,2.9,-9.1).lineTo(-1.1,-9.1).lineTo(-1.1,-1.4).lineTo(0.3,-1.4).curveTo(1,-1.4,1.6,-1.5).curveTo(2.1,-1.6,2.4,-2).curveTo(2.8,-2.3,3,-2.8).lineTo(3.2,-4.2).lineTo(4.8,-4.2).lineTo(4.8,3.3).lineTo(3.2,3.3).curveTo(3.2,1.6,2.5,0.9).curveTo(1.8,0.2,0.1,0.2).lineTo(-1.1,0.2).lineTo(-1.1,6.7).lineTo(-1,8).curveTo(-0.9,8.3,-0.6,8.6).curveTo(-0.2,9.1,1.2,9.1).lineTo(2,9.1).lineTo(2,10.7).closePath();
	this.shape.setTransform(41.05,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-8.7,10.7).lineTo(-8.7,9.1).lineTo(-7.9,9.1).lineTo(-6.8,9).curveTo(-6.3,8.9,-6,8.6).curveTo(-5.8,8.3,-5.7,8).lineTo(-5.7,6.7).lineTo(-5.7,-6.7).lineTo(-5.7,-8).curveTo(-5.8,-8.3,-6,-8.6).curveTo(-6.3,-8.9,-6.8,-9).lineTo(-7.9,-9.1).lineTo(-8.7,-9.1).lineTo(-8.7,-10.7).lineTo(8.1,-10.7).lineTo(8.7,-5.1).lineTo(7.1,-5.1).lineTo(6.5,-7.1).curveTo(6.1,-7.9,5.7,-8.3).curveTo(5.2,-8.8,4.6,-8.9).curveTo(3.9,-9.1,2.9,-9.1).lineTo(-1.1,-9.1).lineTo(-1.1,-1.4).lineTo(0.3,-1.4).curveTo(1,-1.4,1.6,-1.5).curveTo(2.1,-1.6,2.4,-2).curveTo(2.8,-2.3,3,-2.8).lineTo(3.2,-4.2).lineTo(4.8,-4.2).lineTo(4.8,3.3).lineTo(3.2,3.3).curveTo(3.2,1.6,2.5,0.9).curveTo(1.8,0.2,0.1,0.2).lineTo(-1.1,0.2).lineTo(-1.1,6.7).lineTo(-1,8).curveTo(-0.9,8.3,-0.6,8.6).curveTo(-0.2,9.1,1.2,9.1).lineTo(2,9.1).lineTo(2,10.7).closePath();
	this.shape_1.setTransform(41.05,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.3,32.2).curveTo(24.7,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0196,45.0487,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.4,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.0196,45.0487,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,92.3);


(lib.t23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-11.4,10.7).lineTo(-11.4,9.1).lineTo(-10.6,9.1).lineTo(-9.5,9).curveTo(-9,9,-8.8,8.7).curveTo(-8.5,8.4,-8.4,7.9).lineTo(-8.3,6.8).lineTo(-8.3,-6.7).lineTo(-8.4,-7.9).curveTo(-8.5,-8.4,-8.8,-8.6).curveTo(-9,-8.9,-9.5,-9).lineTo(-10.6,-9.1).lineTo(-11.4,-9.1).lineTo(-11.4,-10.7).lineTo(-5.2,-10.7).lineTo(-4.4,-10.7).lineTo(-3.3,-10.7).lineTo(-1.7,-10.7).lineTo(-0.3,-10.7).curveTo(1.3,-10.7,2.7,-10.6).curveTo(4,-10.3,5.1,-10).curveTo(6.1,-9.6,7,-8.9).curveTo(7.9,-8.3,8.7,-7.4).curveTo(11.4,-4.4,11.4,0.1).curveTo(11.4,3.2,10.1,5.6).curveTo(9,8.1,6.8,9.4).curveTo(5.7,10.1,4.4,10.4).curveTo(3.1,10.7,1.2,10.7).closePath().moveTo(-3.7,7.1).lineTo(-3.6,8.1).curveTo(-3.5,8.6,-3.3,8.8).curveTo(-3,9,-2.6,9).lineTo(-1.4,9.1).curveTo(-0.1,9.1,0.8,9).curveTo(1.8,8.9,2.5,8.6).curveTo(3.2,8.2,3.8,7.8).curveTo(4.4,7.3,4.8,6.6).curveTo(5.5,5.4,6,3.8).curveTo(6.3,2.1,6.4,0.1).curveTo(6.4,-2.7,5.4,-4.8).curveTo(4.6,-6.9,2.8,-8).lineTo(1.8,-8.5).lineTo(0.5,-8.9).curveTo(-0.2,-9,-1.2,-9).lineTo(-3.7,-9.1).closePath();
	this.shape.setTransform(40.9,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-11.4,10.7).lineTo(-11.4,9.1).lineTo(-10.6,9.1).lineTo(-9.5,9).curveTo(-9,9,-8.8,8.7).curveTo(-8.5,8.4,-8.4,7.9).lineTo(-8.3,6.8).lineTo(-8.3,-6.7).lineTo(-8.4,-7.9).curveTo(-8.5,-8.4,-8.8,-8.6).curveTo(-9,-8.9,-9.5,-9).lineTo(-10.6,-9.1).lineTo(-11.4,-9.1).lineTo(-11.4,-10.7).lineTo(-5.2,-10.7).lineTo(-4.4,-10.7).lineTo(-3.3,-10.7).lineTo(-1.7,-10.7).lineTo(-0.3,-10.7).curveTo(1.3,-10.7,2.7,-10.6).curveTo(4,-10.3,5.1,-10).curveTo(6.1,-9.6,7,-8.9).curveTo(7.9,-8.3,8.7,-7.4).curveTo(11.4,-4.4,11.4,0.1).curveTo(11.4,3.2,10.1,5.6).curveTo(9,8.1,6.8,9.4).curveTo(5.7,10.1,4.4,10.4).curveTo(3.1,10.7,1.2,10.7).closePath().moveTo(-3.7,7.1).lineTo(-3.6,8.1).curveTo(-3.5,8.6,-3.3,8.8).curveTo(-3,9,-2.6,9).lineTo(-1.4,9.1).curveTo(-0.1,9.1,0.8,9).curveTo(1.8,8.9,2.5,8.6).curveTo(3.2,8.2,3.8,7.8).curveTo(4.4,7.3,4.8,6.6).curveTo(5.5,5.4,6,3.8).curveTo(6.3,2.1,6.4,0.1).curveTo(6.4,-2.7,5.4,-4.8).curveTo(4.6,-6.9,2.8,-8).lineTo(1.8,-8.5).lineTo(0.5,-8.9).curveTo(-0.2,-9,-1.2,-9).lineTo(-3.7,-9.1).closePath();
	this.shape_1.setTransform(40.9,44.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(40.9905,45.0487,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(40.9905,45.0487,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,92.3);


(lib.t22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-1.3,11.4).lineTo(-2.6,11).curveTo(-3.3,10.8,-3.9,10.3).lineTo(-5.5,9.2).lineTo(-6.1,10.8).lineTo(-7.6,10.8).lineTo(-7.3,3.7).lineTo(-6.1,3.7).curveTo(-5.8,4.9,-5.5,5.6).curveTo(-5.2,6.3,-4.6,6.9).curveTo(-2.8,9.3,0,9.3).curveTo(1.7,9.3,2.8,8.4).curveTo(3.9,7.4,3.9,5.9).curveTo(3.9,4.9,3.4,4.2).curveTo(2.9,3.5,1.6,2.7).lineTo(1,2.4).lineTo(0.4,2.1).lineTo(-0.8,1.5).lineTo(-2.6,0.7).curveTo(-5.1,-0.5,-6.2,-1.9).curveTo(-7.3,-3.4,-7.3,-5.4).curveTo(-7.3,-6.7,-6.8,-7.9).curveTo(-6.3,-9,-5.4,-9.8).curveTo(-4.5,-10.6,-3.3,-11).curveTo(-2,-11.5,-0.5,-11.5).curveTo(0.9,-11.5,2.3,-11).curveTo(3.6,-10.6,4.7,-9.7).lineTo(5.3,-11).lineTo(6.6,-11).lineTo(6.6,-4.8).lineTo(5.3,-4.8).lineTo(4.9,-6).lineTo(4.5,-6.9).lineTo(4.1,-7.5).lineTo(3.6,-8).curveTo(2,-9.4,-0.3,-9.4).curveTo(-1.8,-9.4,-2.7,-8.8).curveTo(-3.6,-8.1,-3.6,-6.9).curveTo(-3.5,-6.4,-3.3,-5.9).curveTo(-3,-5.4,-2.5,-4.9).curveTo(-1.9,-4.4,-1,-3.9).lineTo(1.4,-2.7).lineTo(2.7,-2.1).lineTo(3.6,-1.6).lineTo(4.3,-1.2).lineTo(5,-0.7).curveTo(7.7,1.3,7.7,4.6).curveTo(7.7,6.1,7.1,7.4).curveTo(6.5,8.6,5.6,9.5).curveTo(4.6,10.4,3.3,11).curveTo(1.9,11.5,0.2,11.5).lineTo(-1.3,11.4).closePath();
	this.shape.setTransform(41,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-1.3,11.4).lineTo(-2.6,11).curveTo(-3.3,10.8,-3.9,10.3).lineTo(-5.5,9.2).lineTo(-6.1,10.8).lineTo(-7.6,10.8).lineTo(-7.3,3.7).lineTo(-6.1,3.7).curveTo(-5.8,4.9,-5.5,5.6).curveTo(-5.2,6.3,-4.6,6.9).curveTo(-2.8,9.3,0,9.3).curveTo(1.7,9.3,2.8,8.4).curveTo(3.9,7.4,3.9,5.9).curveTo(3.9,4.9,3.4,4.2).curveTo(2.9,3.5,1.6,2.7).lineTo(1,2.4).lineTo(0.4,2.1).lineTo(-0.8,1.5).lineTo(-2.6,0.7).curveTo(-5.1,-0.5,-6.2,-1.9).curveTo(-7.3,-3.4,-7.3,-5.4).curveTo(-7.3,-6.7,-6.8,-7.9).curveTo(-6.3,-9,-5.4,-9.8).curveTo(-4.5,-10.6,-3.3,-11).curveTo(-2,-11.5,-0.5,-11.5).curveTo(0.9,-11.5,2.3,-11).curveTo(3.6,-10.6,4.7,-9.7).lineTo(5.3,-11).lineTo(6.6,-11).lineTo(6.6,-4.8).lineTo(5.3,-4.8).lineTo(4.9,-6).lineTo(4.5,-6.9).lineTo(4.1,-7.5).lineTo(3.6,-8).curveTo(2,-9.4,-0.3,-9.4).curveTo(-1.8,-9.4,-2.7,-8.8).curveTo(-3.6,-8.1,-3.6,-6.9).curveTo(-3.5,-6.4,-3.3,-5.9).curveTo(-3,-5.4,-2.5,-4.9).curveTo(-1.9,-4.4,-1,-3.9).lineTo(1.4,-2.7).lineTo(2.7,-2.1).lineTo(3.6,-1.6).lineTo(4.3,-1.2).lineTo(5,-0.7).curveTo(7.7,1.3,7.7,4.6).curveTo(7.7,6.1,7.1,7.4).curveTo(6.5,8.6,5.6,9.5).curveTo(4.6,10.4,3.3,11).curveTo(1.9,11.5,0.2,11.5).lineTo(-1.3,11.4).closePath();
	this.shape_1.setTransform(41,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.3,-32.2).curveTo(-24.7,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(40.9956,45.0487,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.7,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(40.9956,45.0487,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,95.3);


(lib.t21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(1.3,10.8).lineTo(1.3,9.2).lineTo(2.7,9.2).curveTo(3.2,9.2,3.5,9).curveTo(3.9,8.7,3.9,8.4).curveTo(3.9,8.1,3.6,7.6).lineTo(2.1,3.7).lineTo(-4.4,3.7).lineTo(-5.9,7.6).lineTo(-6,8).lineTo(-6.1,8.4).curveTo(-6.1,8.9,-5.8,9.1).curveTo(-5.5,9.2,-4.8,9.2).lineTo(-3.4,9.2).lineTo(-3.4,10.8).lineTo(-11.6,10.8).lineTo(-11.6,9.2).curveTo(-10.2,9.3,-9.5,8.8).curveTo(-8.8,8.3,-8.2,7).lineTo(-1.1,-10.8).lineTo(1,-10.8).lineTo(8.2,7).lineTo(8.8,8.2).lineTo(9.3,8.8).curveTo(9.6,9.1,10,9.2).lineTo(10.9,9.2).lineTo(11.6,9.2).lineTo(11.6,10.8).closePath().moveTo(-3.9,2.2).lineTo(1.4,2.2).lineTo(-1.2,-4.5).closePath();
	this.shape.setTransform(40.875,44.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(1.3,10.8).lineTo(1.3,9.2).lineTo(2.7,9.2).curveTo(3.2,9.2,3.5,9).curveTo(3.9,8.7,3.9,8.4).curveTo(3.9,8.1,3.6,7.6).lineTo(2.1,3.7).lineTo(-4.4,3.7).lineTo(-5.9,7.6).lineTo(-6,8).lineTo(-6.1,8.4).curveTo(-6.1,8.9,-5.8,9.1).curveTo(-5.5,9.2,-4.8,9.2).lineTo(-3.4,9.2).lineTo(-3.4,10.8).lineTo(-11.6,10.8).lineTo(-11.6,9.2).curveTo(-10.2,9.3,-9.5,8.8).curveTo(-8.8,8.3,-8.2,7).lineTo(-1.1,-10.8).lineTo(1,-10.8).lineTo(8.2,7).lineTo(8.8,8.2).lineTo(9.3,8.8).curveTo(9.6,9.1,10,9.2).lineTo(10.9,9.2).lineTo(11.6,9.2).lineTo(11.6,10.8).closePath().moveTo(-3.9,2.2).lineTo(1.4,2.2).lineTo(-1.2,-4.5).closePath();
	this.shape_1.setTransform(40.875,44.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.7,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.2,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0672,45.0487,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.0672,45.0487,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.2,92.3);


(lib.t20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-9.1,10.7).lineTo(-9.1,9.1).lineTo(-8.3,9.1).lineTo(-7.1,9).curveTo(-6.7,8.9,-6.4,8.6).curveTo(-6.1,8.3,-6,8).lineTo(-6,6.7).lineTo(-6,-6.7).lineTo(-6,-8).curveTo(-6.1,-8.3,-6.4,-8.6).curveTo(-6.7,-8.9,-7.1,-9).lineTo(-8.3,-9.1).lineTo(-9.1,-9.1).lineTo(-9.1,-10.7).lineTo(3.2,-10.7).curveTo(6,-10.7,7.6,-9.3).curveTo(9.1,-7.9,9.1,-5.4).curveTo(9.1,-3.7,8.5,-2.4).curveTo(7.7,-1,6.5,-0.2).curveTo(4.7,1,1.5,1).lineTo(-1.1,0.9).lineTo(-1.4,0.9).lineTo(-1.4,6.7).lineTo(-1.3,7.9).curveTo(-1.2,8.4,-1,8.7).curveTo(-0.7,8.9,-0.3,9).lineTo(0.9,9.1).lineTo(1.6,9.1).lineTo(1.6,10.7).closePath().moveTo(-1.4,-9.1).lineTo(-1.4,-0.7).lineTo(-0.7,-0.6).lineTo(-0.2,-0.6).curveTo(2.1,-0.6,3.2,-1.4).curveTo(3.8,-1.9,4.2,-2.8).curveTo(4.7,-3.7,4.7,-4.8).curveTo(4.6,-6.1,4.1,-7.1).curveTo(3.6,-8.2,2.9,-8.6).curveTo(2.4,-8.9,1.7,-9).curveTo(1,-9.1,0,-9.1).lineTo(-0.6,-9.1).lineTo(-1.4,-9.1).closePath();
	this.shape.setTransform(40.95,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-9.1,10.7).lineTo(-9.1,9.1).lineTo(-8.3,9.1).lineTo(-7.1,9).curveTo(-6.7,8.9,-6.4,8.6).curveTo(-6.1,8.3,-6,8).lineTo(-6,6.7).lineTo(-6,-6.7).lineTo(-6,-8).curveTo(-6.1,-8.3,-6.4,-8.6).curveTo(-6.7,-8.9,-7.1,-9).lineTo(-8.3,-9.1).lineTo(-9.1,-9.1).lineTo(-9.1,-10.7).lineTo(3.2,-10.7).curveTo(6,-10.7,7.6,-9.3).curveTo(9.1,-7.9,9.1,-5.4).curveTo(9.1,-3.7,8.5,-2.4).curveTo(7.7,-1,6.5,-0.2).curveTo(4.7,1,1.5,1).lineTo(-1.1,0.9).lineTo(-1.4,0.9).lineTo(-1.4,6.7).lineTo(-1.3,7.9).curveTo(-1.2,8.4,-1,8.7).curveTo(-0.7,8.9,-0.3,9).lineTo(0.9,9.1).lineTo(1.6,9.1).lineTo(1.6,10.7).closePath().moveTo(-1.4,-9.1).lineTo(-1.4,-0.7).lineTo(-0.7,-0.6).lineTo(-0.2,-0.6).curveTo(2.1,-0.6,3.2,-1.4).curveTo(3.8,-1.9,4.2,-2.8).curveTo(4.7,-3.7,4.7,-4.8).curveTo(4.6,-6.1,4.1,-7.1).curveTo(3.6,-8.2,2.9,-8.6).curveTo(2.4,-8.9,1.7,-9).curveTo(1,-9.1,0,-9.1).lineTo(-0.6,-9.1).lineTo(-1.4,-9.1).closePath();
	this.shape_1.setTransform(40.95,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(40.9347,45.0703,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(40.9347,45.0703,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,84.1,92.39999999999999);


(lib.t19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-4.7,10.6).curveTo(-6.9,9.8,-8.4,8.3).curveTo(-10,6.8,-10.9,4.7).curveTo(-11.7,2.6,-11.7,0.1).curveTo(-11.7,-4.7,-8.6,-7.9).curveTo(-6.8,-9.7,-4.6,-10.6).curveTo(-2.5,-11.5,0.3,-11.5).curveTo(2.7,-11.5,4.8,-10.6).curveTo(6.9,-9.8,8.4,-8.3).curveTo(10,-6.8,10.9,-4.7).curveTo(11.7,-2.7,11.7,-0.3).curveTo(11.7,2.3,10.8,4.5).curveTo(9.9,6.6,8.4,8.2).curveTo(6.8,9.7,4.7,10.6).curveTo(2.5,11.5,-0.1,11.5).curveTo(-2.6,11.5,-4.7,10.6).closePath().moveTo(-5,-7.2).curveTo(-6.7,-4.8,-6.7,-0.2).curveTo(-6.7,4.5,-5,7).curveTo(-3.3,9.5,0,9.5).curveTo(1.6,9.5,2.9,8.9).curveTo(4.2,8.2,5,7.1).curveTo(5.4,6.6,5.7,5.8).lineTo(6.2,4).lineTo(6.6,1.9).lineTo(6.7,-0.2).curveTo(6.7,-2.6,6.1,-4.6).curveTo(5.5,-6.7,4.5,-7.7).curveTo(3.8,-8.6,2.6,-9.1).curveTo(1.4,-9.5,0,-9.5).curveTo(-3.3,-9.5,-5,-7.2).closePath();
	this.shape.setTransform(40.975,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-4.7,10.6).curveTo(-6.9,9.8,-8.4,8.3).curveTo(-10,6.8,-10.9,4.7).curveTo(-11.7,2.6,-11.7,0.1).curveTo(-11.7,-4.7,-8.6,-7.9).curveTo(-6.8,-9.7,-4.6,-10.6).curveTo(-2.5,-11.5,0.3,-11.5).curveTo(2.7,-11.5,4.8,-10.6).curveTo(6.9,-9.8,8.4,-8.3).curveTo(10,-6.8,10.9,-4.7).curveTo(11.7,-2.7,11.7,-0.3).curveTo(11.7,2.3,10.8,4.5).curveTo(9.9,6.6,8.4,8.2).curveTo(6.8,9.7,4.7,10.6).curveTo(2.5,11.5,-0.1,11.5).curveTo(-2.6,11.5,-4.7,10.6).closePath().moveTo(-5,-7.2).curveTo(-6.7,-4.8,-6.7,-0.2).curveTo(-6.7,4.5,-5,7).curveTo(-3.3,9.5,0,9.5).curveTo(1.6,9.5,2.9,8.9).curveTo(4.2,8.2,5,7.1).curveTo(5.4,6.6,5.7,5.8).lineTo(6.2,4).lineTo(6.6,1.9).lineTo(6.7,-0.2).curveTo(6.7,-2.6,6.1,-4.6).curveTo(5.5,-6.7,4.5,-7.7).curveTo(3.8,-8.6,2.6,-9.1).curveTo(1.4,-9.5,0,-9.5).curveTo(-3.3,-9.5,-5,-7.2).closePath();
	this.shape_1.setTransform(40.975,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(40.9905,45.0703,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(40.9905,45.0703,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,84.19999999999999,92.39999999999999);


(lib.t18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-5.3,10.7).lineTo(-5.3,9.1).lineTo(-4.6,9.1).lineTo(-3.4,9).curveTo(-3,8.9,-2.7,8.6).curveTo(-2.5,8.3,-2.4,8).lineTo(-2.3,6.7).lineTo(-2.3,-6.7).lineTo(-2.4,-8).curveTo(-2.5,-8.3,-2.7,-8.6).curveTo(-3,-8.9,-3.4,-9).lineTo(-4.6,-9.1).lineTo(-5.3,-9.1).lineTo(-5.3,-10.7).lineTo(5.3,-10.7).lineTo(5.3,-9.1).lineTo(4.6,-9.1).lineTo(3.4,-9).curveTo(3,-8.9,2.7,-8.6).curveTo(2.4,-8.3,2.4,-8).lineTo(2.3,-6.7).lineTo(2.3,6.7).lineTo(2.4,7.9).curveTo(2.4,8.4,2.7,8.7).curveTo(3,8.9,3.5,9).lineTo(4.6,9.1).lineTo(5.3,9.1).lineTo(5.3,10.7).closePath();
	this.shape.setTransform(41,44.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-5.3,10.7).lineTo(-5.3,9.1).lineTo(-4.6,9.1).lineTo(-3.4,9).curveTo(-3,8.9,-2.7,8.6).curveTo(-2.5,8.3,-2.4,8).lineTo(-2.3,6.7).lineTo(-2.3,-6.7).lineTo(-2.4,-8).curveTo(-2.5,-8.3,-2.7,-8.6).curveTo(-3,-8.9,-3.4,-9).lineTo(-4.6,-9.1).lineTo(-5.3,-9.1).lineTo(-5.3,-10.7).lineTo(5.3,-10.7).lineTo(5.3,-9.1).lineTo(4.6,-9.1).lineTo(3.4,-9).curveTo(3,-8.9,2.7,-8.6).curveTo(2.4,-8.3,2.4,-8).lineTo(2.3,-6.7).lineTo(2.3,6.7).lineTo(2.4,7.9).curveTo(2.4,8.4,2.7,8.7).curveTo(3,8.9,3.5,9).lineTo(4.6,9.1).lineTo(5.3,9.1).lineTo(5.3,10.7).closePath();
	this.shape_1.setTransform(41,44.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.2,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.2,32.3).closePath();
	this.shape_2.setTransform(41.031,45.1025,1.3973,1.3973);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.2,-32.3).curveTo(24.6,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.031,45.1025,1.3973,1.3973);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,92.39999999999999);


(lib.t17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-9.1,2.8).lineTo(-9.1,-7.1).lineTo(-9.2,-8.4).curveTo(-9.3,-8.7,-9.5,-9).curveTo(-9.7,-9.3,-10.2,-9.4).lineTo(-11.4,-9.5).lineTo(-11.7,-9.5).lineTo(-11.7,-11.1).lineTo(-1.6,-11.1).lineTo(-1.6,-9.5).lineTo(-2.2,-9.5).lineTo(-3.4,-9.4).curveTo(-3.9,-9.3,-4.1,-9.1).curveTo(-4.3,-8.8,-4.5,-8.3).lineTo(-4.5,-7.1).lineTo(-4.5,2.8).curveTo(-4.5,4.5,-4.3,5.4).curveTo(-4.1,6.2,-3.5,6.9).curveTo(-2.7,7.8,-1.7,8.2).curveTo(-0.5,8.7,0.9,8.7).curveTo(2.3,8.7,3.5,8.2).curveTo(4.6,7.8,5.3,7).curveTo(5.6,6.6,5.9,6.1).lineTo(6.3,4.9).lineTo(6.5,3.4).lineTo(6.6,1.5).lineTo(6.6,-7.1).curveTo(6.6,-8.1,6.5,-8.4).curveTo(6.5,-8.7,6.2,-9).curveTo(5.9,-9.3,5.5,-9.4).lineTo(4.3,-9.5).lineTo(3.5,-9.5).lineTo(3.5,-11.1).lineTo(11.7,-11.1).lineTo(11.7,-9.5).lineTo(11.4,-9.5).lineTo(10.1,-9.4).curveTo(9.7,-9.3,9.5,-9).curveTo(9.2,-8.7,9.1,-8.4).lineTo(9.1,-7.1).lineTo(9.1,2.8).curveTo(9.1,5.1,8.5,6.6).curveTo(7.9,8,6.5,9.1).curveTo(5.3,10.2,3.7,10.6).curveTo(2.2,11.1,0,11.1).curveTo(-9.2,11.1,-9.1,2.8).closePath();
	this.shape.setTransform(41,45.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-9.1,2.8).lineTo(-9.1,-7.1).lineTo(-9.2,-8.4).curveTo(-9.3,-8.7,-9.5,-9).curveTo(-9.7,-9.3,-10.2,-9.4).lineTo(-11.4,-9.5).lineTo(-11.7,-9.5).lineTo(-11.7,-11.1).lineTo(-1.6,-11.1).lineTo(-1.6,-9.5).lineTo(-2.2,-9.5).lineTo(-3.4,-9.4).curveTo(-3.9,-9.3,-4.1,-9.1).curveTo(-4.3,-8.8,-4.5,-8.3).lineTo(-4.5,-7.1).lineTo(-4.5,2.8).curveTo(-4.5,4.5,-4.3,5.4).curveTo(-4.1,6.2,-3.5,6.9).curveTo(-2.7,7.8,-1.7,8.2).curveTo(-0.5,8.7,0.9,8.7).curveTo(2.3,8.7,3.5,8.2).curveTo(4.6,7.8,5.3,7).curveTo(5.6,6.6,5.9,6.1).lineTo(6.3,4.9).lineTo(6.5,3.4).lineTo(6.6,1.5).lineTo(6.6,-7.1).curveTo(6.6,-8.1,6.5,-8.4).curveTo(6.5,-8.7,6.2,-9).curveTo(5.9,-9.3,5.5,-9.4).lineTo(4.3,-9.5).lineTo(3.5,-9.5).lineTo(3.5,-11.1).lineTo(11.7,-11.1).lineTo(11.7,-9.5).lineTo(11.4,-9.5).lineTo(10.1,-9.4).curveTo(9.7,-9.3,9.5,-9).curveTo(9.2,-8.7,9.1,-8.4).lineTo(9.1,-7.1).lineTo(9.1,2.8).curveTo(9.1,5.1,8.5,6.6).curveTo(7.9,8,6.5,9.1).curveTo(5.3,10.2,3.7,10.6).curveTo(2.2,11.1,0,11.1).curveTo(-9.2,11.1,-9.1,2.8).closePath();
	this.shape_1.setTransform(41,45.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.7,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.6,-32.3,21.2,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0022,45.0703,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.6,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.7,32.2,21.3,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.0022,45.0703,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-1.1,84.19999999999999,92.39999999999999);


(lib.t16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-5.5,10.7).lineTo(-5.5,9.1).lineTo(-4.8,9.1).lineTo(-3.6,9).curveTo(-3.1,8.9,-2.9,8.6).curveTo(-2.6,8.3,-2.5,8).lineTo(-2.4,6.7).lineTo(-2.4,1.5).lineTo(-7.8,-6.8).lineTo(-8.6,-8.1).curveTo(-9,-8.5,-9.3,-8.7).lineTo(-10,-9).lineTo(-11,-9.1).lineTo(-11,-10.7).lineTo(-1,-10.7).lineTo(-1,-9.1).lineTo(-1.2,-9.1).lineTo(-1.9,-9.1).curveTo(-3,-9,-3,-8.2).lineTo(-2.9,-7.6).lineTo(-2.2,-6.4).lineTo(0.9,-1.2).lineTo(4.2,-6.8).lineTo(4.8,-7.7).lineTo(4.9,-8.2).curveTo(4.9,-8.7,4.1,-8.9).lineTo(3.9,-9).lineTo(3.6,-9).lineTo(3.2,-9).lineTo(2.5,-9.1).lineTo(2.2,-9.1).lineTo(2.2,-10.7).lineTo(11,-10.7).lineTo(11,-9.1).lineTo(9.6,-8.8).curveTo(8.9,-8.7,8.5,-8.4).curveTo(8.1,-8.2,7.7,-7.8).curveTo(7.3,-7.4,7,-6.8).lineTo(2.2,1.2).lineTo(2.2,6.7).lineTo(2.3,7.9).curveTo(2.3,8.4,2.6,8.7).curveTo(2.9,8.9,3.3,9).lineTo(4.4,9.1).lineTo(5.1,9.1).lineTo(5.1,10.7).closePath();
	this.shape.setTransform(40.75,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-5.5,10.7).lineTo(-5.5,9.1).lineTo(-4.8,9.1).lineTo(-3.6,9).curveTo(-3.1,8.9,-2.9,8.6).curveTo(-2.6,8.3,-2.5,8).lineTo(-2.4,6.7).lineTo(-2.4,1.5).lineTo(-7.8,-6.8).lineTo(-8.6,-8.1).curveTo(-9,-8.5,-9.3,-8.7).lineTo(-10,-9).lineTo(-11,-9.1).lineTo(-11,-10.7).lineTo(-1,-10.7).lineTo(-1,-9.1).lineTo(-1.2,-9.1).lineTo(-1.9,-9.1).curveTo(-3,-9,-3,-8.2).lineTo(-2.9,-7.6).lineTo(-2.2,-6.4).lineTo(0.9,-1.2).lineTo(4.2,-6.8).lineTo(4.8,-7.7).lineTo(4.9,-8.2).curveTo(4.9,-8.7,4.1,-8.9).lineTo(3.9,-9).lineTo(3.6,-9).lineTo(3.2,-9).lineTo(2.5,-9.1).lineTo(2.2,-9.1).lineTo(2.2,-10.7).lineTo(11,-10.7).lineTo(11,-9.1).lineTo(9.6,-8.8).curveTo(8.9,-8.7,8.5,-8.4).curveTo(8.1,-8.2,7.7,-7.8).curveTo(7.3,-7.4,7,-6.8).lineTo(2.2,1.2).lineTo(2.2,6.7).lineTo(2.3,7.9).curveTo(2.3,8.4,2.6,8.7).curveTo(2.9,8.9,3.3,9).lineTo(4.4,9.1).lineTo(5.1,9.1).lineTo(5.1,10.7).closePath();
	this.shape_1.setTransform(40.75,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.008,45.0703,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.7,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.008,45.0703,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,95.3);


(lib.t15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-5.5,10.7).lineTo(-5.5,9.1).lineTo(-4.6,9.1).lineTo(-3.4,9).curveTo(-3,8.9,-2.7,8.6).curveTo(-2.4,8.3,-2.3,8).lineTo(-2.3,6.7).lineTo(-2.3,-9.1).lineTo(-3.5,-9.1).curveTo(-5,-9.1,-6,-8.6).curveTo(-7,-8.1,-7.5,-7.1).curveTo(-8.2,-5.7,-8.4,-4).lineTo(-10,-4).lineTo(-9.5,-10.7).lineTo(9.6,-10.7).lineTo(10,-4).lineTo(8.4,-4).curveTo(8.2,-6.5,7,-7.8).curveTo(5.7,-9.1,3.6,-9.1).lineTo(2.3,-9.1).lineTo(2.3,6.7).lineTo(2.4,7.9).curveTo(2.4,8.4,2.7,8.7).curveTo(3,8.9,3.4,9).lineTo(4.6,9.1).lineTo(5.3,9.1).lineTo(5.3,10.7).closePath();
	this.shape.setTransform(40.75,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-5.5,10.7).lineTo(-5.5,9.1).lineTo(-4.6,9.1).lineTo(-3.4,9).curveTo(-3,8.9,-2.7,8.6).curveTo(-2.4,8.3,-2.3,8).lineTo(-2.3,6.7).lineTo(-2.3,-9.1).lineTo(-3.5,-9.1).curveTo(-5,-9.1,-6,-8.6).curveTo(-7,-8.1,-7.5,-7.1).curveTo(-8.2,-5.7,-8.4,-4).lineTo(-10,-4).lineTo(-9.5,-10.7).lineTo(9.6,-10.7).lineTo(10,-4).lineTo(8.4,-4).curveTo(8.2,-6.5,7,-7.8).curveTo(5.7,-9.1,3.6,-9.1).lineTo(2.3,-9.1).lineTo(2.3,6.7).lineTo(2.4,7.9).curveTo(2.4,8.4,2.7,8.7).curveTo(3,8.9,3.4,9).lineTo(4.6,9.1).lineTo(5.3,9.1).lineTo(5.3,10.7).closePath();
	this.shape_1.setTransform(40.75,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0138,45.0703,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.0138,45.0703,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,92.39999999999999);


(lib.t14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(5.6,10.7).lineTo(4.6,9.8).lineTo(4,9).lineTo(3.1,7.7).lineTo(1.9,5.7).lineTo(0.4,3.3).curveTo(-0.2,2.4,-0.8,1.9).curveTo(-1.4,1.4,-1.8,1.2).curveTo(-2.3,1,-3,1).lineTo(-3.2,1).lineTo(-3.6,1).lineTo(-3.6,6.7).lineTo(-3.5,8).curveTo(-3.4,8.3,-3.2,8.6).curveTo(-2.7,9.1,-1.3,9.1).lineTo(-0.6,9.1).lineTo(-0.6,10.7).lineTo(-11.3,10.7).lineTo(-11.3,9.1).lineTo(-10.5,9.1).lineTo(-9.4,9).curveTo(-8.9,8.9,-8.6,8.7).curveTo(-8.3,8.4,-8.3,7.9).lineTo(-8.2,6.7).lineTo(-8.2,-6.7).lineTo(-8.3,-7.9).curveTo(-8.3,-8.4,-8.6,-8.7).curveTo(-8.9,-8.9,-9.4,-9).lineTo(-10.5,-9.1).lineTo(-11.3,-9.1).lineTo(-11.3,-10.7).lineTo(1.4,-10.7).curveTo(4,-10.7,5.5,-9.2).curveTo(6.9,-7.8,6.9,-5.3).curveTo(6.9,-3.7,6.3,-2.5).curveTo(5.6,-1.2,4.3,-0.4).curveTo(3.7,-0,2.9,0.2).lineTo(0.7,0.4).lineTo(2.8,0.9).curveTo(3.6,1.1,4.2,1.7).curveTo(5,2.4,5.8,3.5).lineTo(7.9,6.6).lineTo(8.9,8).curveTo(9.2,8.5,9.6,8.8).curveTo(9.9,9.1,10.3,9.1).lineTo(11.1,9.2).lineTo(11.3,9.2).lineTo(11.3,10.7).closePath().moveTo(-3.6,-0.7).lineTo(-1.9,-0.7).curveTo(0.3,-0.7,1.3,-1.7).curveTo(2.3,-2.8,2.3,-5).curveTo(2.4,-7.7,0.7,-8.6).curveTo(0.3,-8.9,-0.2,-9).lineTo(-1.6,-9.1).lineTo(-3.6,-9.1).closePath();
	this.shape.setTransform(41.85,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(5.6,10.7).lineTo(4.6,9.8).lineTo(4,9).lineTo(3.1,7.7).lineTo(1.9,5.7).lineTo(0.4,3.3).curveTo(-0.2,2.4,-0.8,1.9).curveTo(-1.4,1.4,-1.8,1.2).curveTo(-2.3,1,-3,1).lineTo(-3.2,1).lineTo(-3.6,1).lineTo(-3.6,6.7).lineTo(-3.5,8).curveTo(-3.4,8.3,-3.2,8.6).curveTo(-2.7,9.1,-1.3,9.1).lineTo(-0.6,9.1).lineTo(-0.6,10.7).lineTo(-11.3,10.7).lineTo(-11.3,9.1).lineTo(-10.5,9.1).lineTo(-9.4,9).curveTo(-8.9,8.9,-8.6,8.7).curveTo(-8.3,8.4,-8.3,7.9).lineTo(-8.2,6.7).lineTo(-8.2,-6.7).lineTo(-8.3,-7.9).curveTo(-8.3,-8.4,-8.6,-8.7).curveTo(-8.9,-8.9,-9.4,-9).lineTo(-10.5,-9.1).lineTo(-11.3,-9.1).lineTo(-11.3,-10.7).lineTo(1.4,-10.7).curveTo(4,-10.7,5.5,-9.2).curveTo(6.9,-7.8,6.9,-5.3).curveTo(6.9,-3.7,6.3,-2.5).curveTo(5.6,-1.2,4.3,-0.4).curveTo(3.7,-0,2.9,0.2).lineTo(0.7,0.4).lineTo(2.8,0.9).curveTo(3.6,1.1,4.2,1.7).curveTo(5,2.4,5.8,3.5).lineTo(7.9,6.6).lineTo(8.9,8).curveTo(9.2,8.5,9.6,8.8).curveTo(9.9,9.1,10.3,9.1).lineTo(11.1,9.2).lineTo(11.3,9.2).lineTo(11.3,10.7).closePath().moveTo(-3.6,-0.7).lineTo(-1.9,-0.7).curveTo(0.3,-0.7,1.3,-1.7).curveTo(2.3,-2.8,2.3,-5).curveTo(2.4,-7.7,0.7,-8.6).curveTo(0.3,-8.9,-0.2,-9).lineTo(-1.6,-9.1).lineTo(-3.6,-9.1).closePath();
	this.shape_1.setTransform(41.85,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.3,32.2).curveTo(24.7,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0196,45.0703,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.4,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.0196,45.0703,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,92.39999999999999);


(lib.t13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-9.4,10.7).lineTo(-9.4,9.1).lineTo(-8.7,9.1).lineTo(-7.5,9).curveTo(-7.1,8.9,-6.8,8.6).curveTo(-6.6,8.3,-6.5,8).lineTo(-6.4,6.7).lineTo(-6.4,-6.7).lineTo(-6.5,-8).curveTo(-6.6,-8.3,-6.8,-8.6).curveTo(-7.1,-8.9,-7.5,-9).lineTo(-8.7,-9.1).lineTo(-9.4,-9.1).lineTo(-9.4,-10.7).lineTo(7.6,-10.7).lineTo(7.9,-5.1).lineTo(6.3,-5.1).lineTo(6.1,-6.4).curveTo(6,-7,5.7,-7.5).curveTo(5.2,-8.4,4.5,-8.7).curveTo(3.8,-9.1,2.6,-9.1).lineTo(-1.8,-9.1).lineTo(-1.8,-1.7).lineTo(0.2,-1.7).curveTo(1.3,-1.7,1.8,-2.3).curveTo(2.3,-3,2.4,-4.5).lineTo(4.1,-4.5).lineTo(4.1,3.3).lineTo(2.4,3.3).lineTo(2.4,2.9).curveTo(2.4,1.4,1.7,0.8).curveTo(1.1,0.1,-0.4,0.1).lineTo(-1.8,0.1).lineTo(-1.8,6.6).lineTo(-1.7,7.6).lineTo(-1.7,8.1).lineTo(-1.6,8.4).lineTo(-1.4,8.6).lineTo(-1.2,8.9).lineTo(-0.8,9).lineTo(-0.2,9.1).lineTo(0.8,9.1).lineTo(3.3,9.1).lineTo(4.6,9).curveTo(5.2,8.9,5.6,8.6).curveTo(6.1,8.3,6.4,7.9).curveTo(6.8,7.5,7.1,6.8).lineTo(7.6,5.6).lineTo(7.9,4).lineTo(9.4,4).lineTo(9,10.7).closePath();
	this.shape.setTransform(40.975,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-9.4,10.7).lineTo(-9.4,9.1).lineTo(-8.7,9.1).lineTo(-7.5,9).curveTo(-7.1,8.9,-6.8,8.6).curveTo(-6.6,8.3,-6.5,8).lineTo(-6.4,6.7).lineTo(-6.4,-6.7).lineTo(-6.5,-8).curveTo(-6.6,-8.3,-6.8,-8.6).curveTo(-7.1,-8.9,-7.5,-9).lineTo(-8.7,-9.1).lineTo(-9.4,-9.1).lineTo(-9.4,-10.7).lineTo(7.6,-10.7).lineTo(7.9,-5.1).lineTo(6.3,-5.1).lineTo(6.1,-6.4).curveTo(6,-7,5.7,-7.5).curveTo(5.2,-8.4,4.5,-8.7).curveTo(3.8,-9.1,2.6,-9.1).lineTo(-1.8,-9.1).lineTo(-1.8,-1.7).lineTo(0.2,-1.7).curveTo(1.3,-1.7,1.8,-2.3).curveTo(2.3,-3,2.4,-4.5).lineTo(4.1,-4.5).lineTo(4.1,3.3).lineTo(2.4,3.3).lineTo(2.4,2.9).curveTo(2.4,1.4,1.7,0.8).curveTo(1.1,0.1,-0.4,0.1).lineTo(-1.8,0.1).lineTo(-1.8,6.6).lineTo(-1.7,7.6).lineTo(-1.7,8.1).lineTo(-1.6,8.4).lineTo(-1.4,8.6).lineTo(-1.2,8.9).lineTo(-0.8,9).lineTo(-0.2,9.1).lineTo(0.8,9.1).lineTo(3.3,9.1).lineTo(4.6,9).curveTo(5.2,8.9,5.6,8.6).curveTo(6.1,8.3,6.4,7.9).curveTo(6.8,7.5,7.1,6.8).lineTo(7.6,5.6).lineTo(7.9,4).lineTo(9.4,4).lineTo(9,10.7).closePath();
	this.shape_1.setTransform(40.975,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(40.9905,45.0703,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(40.9905,45.0703,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,92.39999999999999);


(lib.t12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(4.6,10.7).lineTo(-0,-3.7).lineTo(-4.1,10.7).lineTo(-7.1,10.7).lineTo(-12.6,-6.6).lineTo(-13.1,-7.9).curveTo(-13.3,-8.3,-13.6,-8.6).curveTo(-13.9,-8.9,-14.3,-8.9).lineTo(-15.3,-9.1).lineTo(-15.3,-10.7).lineTo(-5.7,-10.7).lineTo(-5.7,-9.1).lineTo(-5.9,-9).lineTo(-6.6,-9).curveTo(-7.5,-8.9,-7.8,-8.7).curveTo(-8.1,-8.5,-8.1,-8).curveTo(-8.1,-7.5,-7.8,-6.7).lineTo(-4.5,3.9).lineTo(-0.5,-10.7).lineTo(2.4,-10.7).lineTo(7,3.9).lineTo(10,-6.4).lineTo(10.3,-7.6).lineTo(10.4,-8.2).curveTo(10.4,-8.7,9.9,-8.9).curveTo(9.4,-9,7.8,-9.1).lineTo(7.8,-10.7).lineTo(15.3,-10.7).lineTo(15.3,-9.1).curveTo(14.5,-9,14.1,-8.9).curveTo(13.6,-8.8,13.2,-8.3).curveTo(12.9,-7.9,12.6,-7.1).lineTo(11.9,-4.9).lineTo(7.4,10.7).closePath();
	this.shape.setTransform(40.975,44.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(4.6,10.7).lineTo(-0,-3.7).lineTo(-4.1,10.7).lineTo(-7.1,10.7).lineTo(-12.6,-6.6).lineTo(-13.1,-7.9).curveTo(-13.3,-8.3,-13.6,-8.6).curveTo(-13.9,-8.9,-14.3,-8.9).lineTo(-15.3,-9.1).lineTo(-15.3,-10.7).lineTo(-5.7,-10.7).lineTo(-5.7,-9.1).lineTo(-5.9,-9).lineTo(-6.6,-9).curveTo(-7.5,-8.9,-7.8,-8.7).curveTo(-8.1,-8.5,-8.1,-8).curveTo(-8.1,-7.5,-7.8,-6.7).lineTo(-4.5,3.9).lineTo(-0.5,-10.7).lineTo(2.4,-10.7).lineTo(7,3.9).lineTo(10,-6.4).lineTo(10.3,-7.6).lineTo(10.4,-8.2).curveTo(10.4,-8.7,9.9,-8.9).curveTo(9.4,-9,7.8,-9.1).lineTo(7.8,-10.7).lineTo(15.3,-10.7).lineTo(15.3,-9.1).curveTo(14.5,-9,14.1,-8.9).curveTo(13.6,-8.8,13.2,-8.3).curveTo(12.9,-7.9,12.6,-7.1).lineTo(11.9,-4.9).lineTo(7.4,10.7).closePath();
	this.shape_1.setTransform(40.975,44.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.3,-32.2).curveTo(-24.7,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(40.9956,45.0703,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.7,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(40.9956,45.0703,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.1,92.39999999999999);


(lib.t11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(6.5,15.3).lineTo(5,14.9).lineTo(3.4,14.2).lineTo(1.5,13.1).curveTo(-0.8,11.6,-2.6,10.8).curveTo(-4.4,10.1,-5.5,10.1).curveTo(-6.3,10.1,-6.8,10.3).curveTo(-7.3,10.5,-8,11.1).curveTo(-8.4,11.4,-8.9,11.4).curveTo(-9.2,11.4,-9.6,11).curveTo(-9.9,10.6,-9.9,10.1).curveTo(-9.9,9.6,-9.5,9.4).lineTo(-8.9,9.1).lineTo(-7.6,8.8).curveTo(-6.5,8.7,-5.7,8.3).curveTo(-4.8,8,-3.8,7.4).curveTo(-6.3,7.2,-7.8,6.6).curveTo(-9.4,6,-10.8,4.9).curveTo(-12.8,3.3,-13.8,1.1).curveTo(-14.7,-1.1,-14.7,-3.9).curveTo(-14.7,-6.4,-13.9,-8.6).curveTo(-13,-10.7,-11.4,-12.2).curveTo(-9.8,-13.7,-7.7,-14.6).curveTo(-5.5,-15.4,-2.8,-15.4).curveTo(2.2,-15.4,5.6,-12.1).curveTo(8.7,-9,8.7,-4.3).curveTo(8.7,-1.7,7.7,0.6).curveTo(6.7,2.9,4.8,4.5).lineTo(3.9,5.4).curveTo(3.4,5.8,2.9,6).lineTo(1.5,6.6).lineTo(-0.3,7.3).lineTo(-2.3,8.1).lineTo(-3.8,8.8).lineTo(-1.3,8.8).curveTo(-0.1,8.9,0.9,9.2).curveTo(1.9,9.4,2.9,9.7).lineTo(5.1,10.6).curveTo(7.3,11.6,8.5,12).curveTo(9.8,12.4,10.7,12.4).curveTo(12.4,12.4,13.5,10.1).lineTo(14.7,10.7).curveTo(14.2,11.9,13.8,12.6).curveTo(13.4,13.3,12.7,13.9).curveTo(10.8,15.4,8.1,15.4).lineTo(6.5,15.3).closePath().moveTo(-6.1,-12.7).curveTo(-7.5,-11.9,-8.3,-10.5).curveTo(-8.9,-9.4,-9.3,-7.7).curveTo(-9.7,-5.9,-9.7,-4.2).curveTo(-9.7,-3.1,-9.6,-2).curveTo(-9.4,-0.9,-9.2,0).curveTo(-9,0.9,-8.7,1.7).curveTo(-8.3,2.6,-7.9,3.1).curveTo(-7.1,4.2,-5.8,4.8).curveTo(-4.5,5.5,-3,5.5).curveTo(-1.4,5.5,-0.2,4.9).curveTo(1.1,4.3,1.9,3.3).curveTo(2.7,2.2,3.2,0.1).curveTo(3.7,-1.9,3.7,-4.3).curveTo(3.7,-6.4,3.2,-8.2).curveTo(2.7,-9.9,1.9,-11.1).curveTo(1,-12.3,-0.2,-12.9).curveTo(-1.5,-13.5,-3,-13.5).curveTo(-4.7,-13.5,-6.1,-12.7).closePath();
	this.shape.setTransform(43.85,48.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(6.5,15.3).lineTo(5,14.9).lineTo(3.4,14.2).lineTo(1.5,13.1).curveTo(-0.8,11.6,-2.6,10.8).curveTo(-4.4,10.1,-5.5,10.1).curveTo(-6.3,10.1,-6.8,10.3).curveTo(-7.3,10.5,-8,11.1).curveTo(-8.4,11.4,-8.9,11.4).curveTo(-9.2,11.4,-9.6,11).curveTo(-9.9,10.6,-9.9,10.1).curveTo(-9.9,9.6,-9.5,9.4).lineTo(-8.9,9.1).lineTo(-7.6,8.8).curveTo(-6.5,8.7,-5.7,8.3).curveTo(-4.8,8,-3.8,7.4).curveTo(-6.3,7.2,-7.8,6.6).curveTo(-9.4,6,-10.8,4.9).curveTo(-12.8,3.3,-13.8,1.1).curveTo(-14.7,-1.1,-14.7,-3.9).curveTo(-14.7,-6.4,-13.9,-8.6).curveTo(-13,-10.7,-11.4,-12.2).curveTo(-9.8,-13.7,-7.7,-14.6).curveTo(-5.5,-15.4,-2.8,-15.4).curveTo(2.2,-15.4,5.6,-12.1).curveTo(8.7,-9,8.7,-4.3).curveTo(8.7,-1.7,7.7,0.6).curveTo(6.7,2.9,4.8,4.5).lineTo(3.9,5.4).curveTo(3.4,5.8,2.9,6).lineTo(1.5,6.6).lineTo(-0.3,7.3).lineTo(-2.3,8.1).lineTo(-3.8,8.8).lineTo(-1.3,8.8).curveTo(-0.1,8.9,0.9,9.2).curveTo(1.9,9.4,2.9,9.7).lineTo(5.1,10.6).curveTo(7.3,11.6,8.5,12).curveTo(9.8,12.4,10.7,12.4).curveTo(12.4,12.4,13.5,10.1).lineTo(14.7,10.7).curveTo(14.2,11.9,13.8,12.6).curveTo(13.4,13.3,12.7,13.9).curveTo(10.8,15.4,8.1,15.4).lineTo(6.5,15.3).closePath().moveTo(-6.1,-12.7).curveTo(-7.5,-11.9,-8.3,-10.5).curveTo(-8.9,-9.4,-9.3,-7.7).curveTo(-9.7,-5.9,-9.7,-4.2).curveTo(-9.7,-3.1,-9.6,-2).curveTo(-9.4,-0.9,-9.2,0).curveTo(-9,0.9,-8.7,1.7).curveTo(-8.3,2.6,-7.9,3.1).curveTo(-7.1,4.2,-5.8,4.8).curveTo(-4.5,5.5,-3,5.5).curveTo(-1.4,5.5,-0.2,4.9).curveTo(1.1,4.3,1.9,3.3).curveTo(2.7,2.2,3.2,0.1).curveTo(3.7,-1.9,3.7,-4.3).curveTo(3.7,-6.4,3.2,-8.2).curveTo(2.7,-9.9,1.9,-11.1).curveTo(1,-12.3,-0.2,-12.9).curveTo(-1.5,-13.5,-3,-13.5).curveTo(-4.7,-13.5,-6.1,-12.7).closePath();
	this.shape_1.setTransform(43.85,48.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.7,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.2,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27.1,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.7).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0672,45.0703,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(41.0672,45.0703,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1.1,84.2,92.39999999999999);


(lib.t10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-2.6,9.8).curveTo(-3.8,8.9,-4.7,7.5).curveTo(-5.7,6,-6.3,4.1).curveTo(-6.8,2.1,-6.8,0.1).curveTo(-6.8,-2.1,-6.3,-4).curveTo(-5.7,-6,-4.7,-7.5).curveTo(-3.8,-8.9,-2.6,-9.7).curveTo(-1.3,-10.6,0,-10.6).curveTo(1.4,-10.6,2.7,-9.7).curveTo(4,-8.8,5,-7.1).curveTo(6,-5.6,6.3,-3.9).curveTo(6.8,-2.1,6.8,0.1).curveTo(6.8,4.9,4.5,8).curveTo(3.5,9.3,2.4,10).curveTo(1.2,10.6,0,10.6).curveTo(-1.3,10.7,-2.6,9.8).closePath().moveTo(-1.1,-8.4).curveTo(-1.6,-7.9,-1.9,-6.9).lineTo(-2.2,-5.7).lineTo(-2.5,-3.9).lineTo(-2.7,-2).lineTo(-2.8,0.1).lineTo(-2.7,2.1).lineTo(-2.5,4).lineTo(-2.2,5.7).lineTo(-1.9,6.9).curveTo(-1.6,7.9,-1.1,8.4).curveTo(-0.6,8.9,0,8.9).curveTo(2.8,8.9,2.8,0.1).lineTo(2.7,-2.2).lineTo(2.6,-4).curveTo(2.5,-4.9,2.4,-5.6).curveTo(2.3,-6.3,2,-6.9).curveTo(1.7,-7.9,1.2,-8.4).curveTo(0.6,-8.9,0,-8.9).curveTo(-0.6,-8.9,-1.1,-8.4).closePath();
	this.shape.setTransform(41,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-2.6,9.8).curveTo(-3.8,8.9,-4.7,7.5).curveTo(-5.7,6,-6.3,4.1).curveTo(-6.8,2.1,-6.8,0.1).curveTo(-6.8,-2.1,-6.3,-4).curveTo(-5.7,-6,-4.7,-7.5).curveTo(-3.8,-8.9,-2.6,-9.7).curveTo(-1.3,-10.6,0,-10.6).curveTo(1.4,-10.6,2.7,-9.7).curveTo(4,-8.8,5,-7.1).curveTo(6,-5.6,6.3,-3.9).curveTo(6.8,-2.1,6.8,0.1).curveTo(6.8,4.9,4.5,8).curveTo(3.5,9.3,2.4,10).curveTo(1.2,10.6,0,10.6).curveTo(-1.3,10.7,-2.6,9.8).closePath().moveTo(-1.1,-8.4).curveTo(-1.6,-7.9,-1.9,-6.9).lineTo(-2.2,-5.7).lineTo(-2.5,-3.9).lineTo(-2.7,-2).lineTo(-2.8,0.1).lineTo(-2.7,2.1).lineTo(-2.5,4).lineTo(-2.2,5.7).lineTo(-1.9,6.9).curveTo(-1.6,7.9,-1.1,8.4).curveTo(-0.6,8.9,0,8.9).curveTo(2.8,8.9,2.8,0.1).lineTo(2.7,-2.2).lineTo(2.6,-4).curveTo(2.5,-4.9,2.4,-5.6).curveTo(2.3,-6.3,2,-6.9).curveTo(1.7,-7.9,1.2,-8.4).curveTo(0.6,-8.9,0,-8.9).curveTo(-0.6,-8.9,-1.1,-8.4).closePath();
	this.shape_1.setTransform(41,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.8).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(40.9347,45.0263,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.7,-32.2,-21.2,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_3.setTransform(40.9347,45.0263,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-9.5,84.1,100.7);


(lib.t9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-3.5,10.5).curveTo(-4.4,10.2,-5,9.8).curveTo(-5.6,9.4,-6.1,8.8).curveTo(-6.4,8.2,-6.4,7.6).curveTo(-6.4,6.9,-6,6.5).curveTo(-5.6,6,-5,6).curveTo(-3.7,6,-3.4,7.5).lineTo(-3.1,8.3).lineTo(-2.8,8.6).curveTo(-2.6,8.8,-2.3,8.9).lineTo(-1.6,9).curveTo(-0,9,1.1,7.2).curveTo(2.3,5.2,2.7,1.9).curveTo(1.3,3.3,-0.9,3.3).curveTo(-2.1,3.3,-3.2,2.7).curveTo(-4.2,2.2,-5,1.2).curveTo(-5.8,0.4,-6.3,-0.9).curveTo(-6.7,-2.2,-6.7,-3.6).curveTo(-6.7,-5.2,-6.2,-6.5).curveTo(-5.8,-7.8,-4.8,-8.8).curveTo(-4,-9.6,-2.7,-10.2).curveTo(-1.5,-10.7,-0.1,-10.7).curveTo(3.2,-10.7,4.9,-8.3).curveTo(6.7,-6,6.7,-1.6).curveTo(6.7,1.1,6.1,3.4).curveTo(5.5,5.6,4.4,7.2).curveTo(3.2,8.9,1.7,9.8).curveTo(0.1,10.7,-1.7,10.7).curveTo(-2.7,10.7,-3.5,10.5).closePath().moveTo(-2.1,-7.7).curveTo(-2.9,-6.4,-2.9,-3.9).curveTo(-2.9,-1.4,-2.1,0.1).curveTo(-1.5,1.5,-0.1,1.5).curveTo(1.3,1.5,2.1,0.2).curveTo(2.8,-1.1,2.8,-3.6).curveTo(2.9,-6.3,2.1,-7.7).curveTo(1.4,-9.1,-0,-9.1).curveTo(-1.4,-9.1,-2.1,-7.7).closePath();
	this.shape.setTransform(40.9,44.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-3.5,10.5).curveTo(-4.4,10.2,-5,9.8).curveTo(-5.6,9.4,-6.1,8.8).curveTo(-6.4,8.2,-6.4,7.6).curveTo(-6.4,6.9,-6,6.5).curveTo(-5.6,6,-5,6).curveTo(-3.7,6,-3.4,7.5).lineTo(-3.1,8.3).lineTo(-2.8,8.6).curveTo(-2.6,8.8,-2.3,8.9).lineTo(-1.6,9).curveTo(-0,9,1.1,7.2).curveTo(2.3,5.2,2.7,1.9).curveTo(1.3,3.3,-0.9,3.3).curveTo(-2.1,3.3,-3.2,2.7).curveTo(-4.2,2.2,-5,1.2).curveTo(-5.8,0.4,-6.3,-0.9).curveTo(-6.7,-2.2,-6.7,-3.6).curveTo(-6.7,-5.2,-6.2,-6.5).curveTo(-5.8,-7.8,-4.8,-8.8).curveTo(-4,-9.6,-2.7,-10.2).curveTo(-1.5,-10.7,-0.1,-10.7).curveTo(3.2,-10.7,4.9,-8.3).curveTo(6.7,-6,6.7,-1.6).curveTo(6.7,1.1,6.1,3.4).curveTo(5.5,5.6,4.4,7.2).curveTo(3.2,8.9,1.7,9.8).curveTo(0.1,10.7,-1.7,10.7).curveTo(-2.7,10.7,-3.5,10.5).closePath().moveTo(-2.1,-7.7).curveTo(-2.9,-6.4,-2.9,-3.9).curveTo(-2.9,-1.4,-2.1,0.1).curveTo(-1.5,1.5,-0.1,1.5).curveTo(1.3,1.5,2.1,0.2).curveTo(2.8,-1.1,2.8,-3.6).curveTo(2.9,-6.3,2.1,-7.7).curveTo(1.4,-9.1,-0,-9.1).curveTo(-1.4,-9.1,-2.1,-7.7).closePath();
	this.shape_1.setTransform(40.9,44.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.8).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(40.9905,45.0263,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.7,-32.2,-21.2,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_3.setTransform(40.9905,45.0263,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-9.5,86.89999999999999,100.7);


(lib.t8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-2.7,10.3).curveTo(-3.9,9.9,-4.8,9.2).curveTo(-5.7,8.4,-6.2,7.4).curveTo(-6.7,6.3,-6.7,5).curveTo(-6.7,3.2,-5.6,1.9).curveTo(-4.5,0.6,-2.5,-0).curveTo(-4.4,-1.3,-5.2,-2.5).curveTo(-6,-3.7,-6,-5.3).curveTo(-6,-6.5,-5.5,-7.5).curveTo(-5.1,-8.6,-4.2,-9.2).curveTo(-3.4,-10,-2.3,-10.4).curveTo(-1.2,-10.8,0.2,-10.8).curveTo(1.4,-10.8,2.5,-10.4).curveTo(3.5,-10,4.3,-9.4).curveTo(5.1,-8.6,5.5,-7.7).curveTo(5.9,-6.8,5.9,-5.6).curveTo(5.9,-2.6,2.6,-0.8).curveTo(4.8,0.6,5.8,1.9).curveTo(6.7,3.3,6.7,5).curveTo(6.7,6.3,6.2,7.3).curveTo(5.7,8.3,4.8,9.2).curveTo(3.9,9.9,2.6,10.3).curveTo(1.4,10.8,-0,10.8).curveTo(-1.5,10.8,-2.7,10.3).closePath().moveTo(-2.1,2.3).lineTo(-2.8,3.5).lineTo(-3.1,4.4).lineTo(-3.2,5.4).curveTo(-3.2,6.2,-3,6.9).curveTo(-2.7,7.5,-2.2,8.1).curveTo(-1.8,8.5,-1.2,8.9).curveTo(-0.6,9.2,0.1,9.2).curveTo(1.4,9.2,2.3,8.2).curveTo(3.2,7.3,3.2,5.8).curveTo(3.2,4.4,1.9,3.1).lineTo(1.5,2.7).lineTo(1.2,2.3).lineTo(0.6,1.9).lineTo(-0.5,1.2).lineTo(-0.7,1.1).lineTo(-1,0.9).lineTo(-2.1,2.3).closePath().moveTo(-2,-8.5).curveTo(-2.8,-7.6,-2.8,-6.4).curveTo(-2.8,-4.7,-0.9,-3.1).lineTo(-0.2,-2.6).lineTo(1.1,-1.8).curveTo(2,-3,2.4,-3.9).curveTo(2.7,-4.8,2.7,-5.9).curveTo(2.7,-7.4,1.9,-8.3).curveTo(1.1,-9.3,-0.1,-9.3).curveTo(-1.3,-9.3,-2,-8.5).closePath();
	this.shape.setTransform(40.825,44.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-2.7,10.3).curveTo(-3.9,9.9,-4.8,9.2).curveTo(-5.7,8.4,-6.2,7.4).curveTo(-6.7,6.3,-6.7,5).curveTo(-6.7,3.2,-5.6,1.9).curveTo(-4.5,0.6,-2.5,-0).curveTo(-4.4,-1.3,-5.2,-2.5).curveTo(-6,-3.7,-6,-5.3).curveTo(-6,-6.5,-5.5,-7.5).curveTo(-5.1,-8.6,-4.2,-9.2).curveTo(-3.4,-10,-2.3,-10.4).curveTo(-1.2,-10.8,0.2,-10.8).curveTo(1.4,-10.8,2.5,-10.4).curveTo(3.5,-10,4.3,-9.4).curveTo(5.1,-8.6,5.5,-7.7).curveTo(5.9,-6.8,5.9,-5.6).curveTo(5.9,-2.6,2.6,-0.8).curveTo(4.8,0.6,5.8,1.9).curveTo(6.7,3.3,6.7,5).curveTo(6.7,6.3,6.2,7.3).curveTo(5.7,8.3,4.8,9.2).curveTo(3.9,9.9,2.6,10.3).curveTo(1.4,10.8,-0,10.8).curveTo(-1.5,10.8,-2.7,10.3).closePath().moveTo(-2.1,2.3).lineTo(-2.8,3.5).lineTo(-3.1,4.4).lineTo(-3.2,5.4).curveTo(-3.2,6.2,-3,6.9).curveTo(-2.7,7.5,-2.2,8.1).curveTo(-1.8,8.5,-1.2,8.9).curveTo(-0.6,9.2,0.1,9.2).curveTo(1.4,9.2,2.3,8.2).curveTo(3.2,7.3,3.2,5.8).curveTo(3.2,4.4,1.9,3.1).lineTo(1.5,2.7).lineTo(1.2,2.3).lineTo(0.6,1.9).lineTo(-0.5,1.2).lineTo(-0.7,1.1).lineTo(-1,0.9).lineTo(-2.1,2.3).closePath().moveTo(-2,-8.5).curveTo(-2.8,-7.6,-2.8,-6.4).curveTo(-2.8,-4.7,-0.9,-3.1).lineTo(-0.2,-2.6).lineTo(1.1,-1.8).curveTo(2,-3,2.4,-3.9).curveTo(2.7,-4.8,2.7,-5.9).curveTo(2.7,-7.4,1.9,-8.3).curveTo(1.1,-9.3,-0.1,-9.3).curveTo(-1.3,-9.3,-2,-8.5).closePath();
	this.shape_1.setTransform(40.825,44.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.2,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.7,-32.2,-27,-29.6).curveTo(-29.4,-27,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.8).curveTo(-24.6,32.3,-21.2,32.3).closePath();
	this.shape_2.setTransform(40.9964,45.0263,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.7,-32.2,-21.3,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.6,32.3,-26.9,29.8).closePath();
	this.shape_3.setTransform(40.9964,45.0263,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-9.5,84.19999999999999,100.7);


(lib.t7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-4.1,10.3).curveTo(-4.6,9.8,-4.6,9.2).curveTo(-4.6,8.6,-4.2,7.5).lineTo(-2.6,4.4).lineTo(3.8,-7.2).lineTo(-1.7,-7.2).curveTo(-2.7,-7.2,-3.4,-7.1).curveTo(-3.9,-6.8,-4.4,-6.3).lineTo(-4.6,-6.1).lineTo(-4.8,-5.7).lineTo(-5.1,-5.2).lineTo(-5.4,-4.3).lineTo(-6.7,-4.3).lineTo(-5.5,-10.8).lineTo(-4.4,-10.8).curveTo(-4.4,-10.7,-4.3,-10.7).curveTo(-4.3,-10.6,-4.3,-10.6).curveTo(-4.3,-10.6,-4.2,-10.5).curveTo(-4.2,-10.5,-4.2,-10.5).lineTo(-3.5,-10.5).lineTo(6.8,-10.5).lineTo(2.7,-0).lineTo(1,4.4).lineTo(-0.4,8.3).curveTo(-1,9.7,-1.5,10.3).curveTo(-1.9,10.8,-2.8,10.8).curveTo(-3.6,10.8,-4.1,10.3).closePath();
	this.shape.setTransform(41,44.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-4.1,10.3).curveTo(-4.6,9.8,-4.6,9.2).curveTo(-4.6,8.6,-4.2,7.5).lineTo(-2.6,4.4).lineTo(3.8,-7.2).lineTo(-1.7,-7.2).curveTo(-2.7,-7.2,-3.4,-7.1).curveTo(-3.9,-6.8,-4.4,-6.3).lineTo(-4.6,-6.1).lineTo(-4.8,-5.7).lineTo(-5.1,-5.2).lineTo(-5.4,-4.3).lineTo(-6.7,-4.3).lineTo(-5.5,-10.8).lineTo(-4.4,-10.8).curveTo(-4.4,-10.7,-4.3,-10.7).curveTo(-4.3,-10.6,-4.3,-10.6).curveTo(-4.3,-10.6,-4.2,-10.5).curveTo(-4.2,-10.5,-4.2,-10.5).lineTo(-3.5,-10.5).lineTo(6.8,-10.5).lineTo(2.7,-0).lineTo(1,4.4).lineTo(-0.4,8.3).curveTo(-1,9.7,-1.5,10.3).curveTo(-1.9,10.8,-2.8,10.8).curveTo(-3.6,10.8,-4.1,10.3).closePath();
	this.shape_1.setTransform(41,44.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.7,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.2,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.8).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0022,45.0263,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.7,32.2,21.3,32.2).lineTo(-21.2,32.3).curveTo(-24.6,32.3,-26.9,29.8).closePath();
	this.shape_3.setTransform(41.0022,45.0263,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,-9.5,84.19999999999999,100.7);


(lib.t6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-2.8,10.1).curveTo(-4.2,9.4,-5,8.3).curveTo(-5.9,7.1,-6.3,5.3).curveTo(-6.9,3.6,-6.9,1.4).curveTo(-6.8,-1.8,-5.7,-4.5).curveTo(-4.6,-7.2,-2.5,-8.8).curveTo(-1.3,-9.8,0.1,-10.3).curveTo(1.4,-10.7,2.8,-10.8).curveTo(4.2,-10.7,5.3,-10.2).curveTo(6.3,-9.6,6.3,-8.7).curveTo(6.3,-8,5.8,-7.6).curveTo(5.4,-7.1,4.7,-7.2).curveTo(4.2,-7.2,3.9,-7.4).curveTo(3.6,-7.6,3.2,-8).curveTo(2.9,-8.5,2.4,-8.8).curveTo(2.1,-9.1,1.5,-9.1).curveTo(-0.2,-9.1,-1.4,-6.8).lineTo(-1.7,-6.1).lineTo(-2.1,-5.3).lineTo(-2.4,-4.1).lineTo(-2.6,-2.3).curveTo(-1.2,-3.6,0.8,-3.6).curveTo(2,-3.6,3.1,-3.1).curveTo(4.2,-2.6,5.1,-1.6).curveTo(5.9,-0.7,6.4,0.6).curveTo(6.8,1.9,6.8,3.2).curveTo(6.9,4.8,6.3,6.2).curveTo(5.8,7.6,4.8,8.6).curveTo(3.9,9.6,2.7,10.2).curveTo(1.4,10.7,-0,10.7).curveTo(-1.6,10.8,-2.8,10.1).closePath().moveTo(-2.1,-0.4).curveTo(-2.9,1,-2.9,3.5).curveTo(-2.9,6.1,-2.2,7.6).curveTo(-1.4,9,-0,9).curveTo(2.8,9,2.9,3.4).curveTo(2.8,-1.9,0.1,-1.9).curveTo(-1.4,-1.9,-2.1,-0.4).closePath();
	this.shape.setTransform(40.7,44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-2.8,10.1).curveTo(-4.2,9.4,-5,8.3).curveTo(-5.9,7.1,-6.3,5.3).curveTo(-6.9,3.6,-6.9,1.4).curveTo(-6.8,-1.8,-5.7,-4.5).curveTo(-4.6,-7.2,-2.5,-8.8).curveTo(-1.3,-9.8,0.1,-10.3).curveTo(1.4,-10.7,2.8,-10.8).curveTo(4.2,-10.7,5.3,-10.2).curveTo(6.3,-9.6,6.3,-8.7).curveTo(6.3,-8,5.8,-7.6).curveTo(5.4,-7.1,4.7,-7.2).curveTo(4.2,-7.2,3.9,-7.4).curveTo(3.6,-7.6,3.2,-8).curveTo(2.9,-8.5,2.4,-8.8).curveTo(2.1,-9.1,1.5,-9.1).curveTo(-0.2,-9.1,-1.4,-6.8).lineTo(-1.7,-6.1).lineTo(-2.1,-5.3).lineTo(-2.4,-4.1).lineTo(-2.6,-2.3).curveTo(-1.2,-3.6,0.8,-3.6).curveTo(2,-3.6,3.1,-3.1).curveTo(4.2,-2.6,5.1,-1.6).curveTo(5.9,-0.7,6.4,0.6).curveTo(6.8,1.9,6.8,3.2).curveTo(6.9,4.8,6.3,6.2).curveTo(5.8,7.6,4.8,8.6).curveTo(3.9,9.6,2.7,10.2).curveTo(1.4,10.7,-0,10.7).curveTo(-1.6,10.8,-2.8,10.1).closePath().moveTo(-2.1,-0.4).curveTo(-2.9,1,-2.9,3.5).curveTo(-2.9,6.1,-2.2,7.6).curveTo(-1.4,9,-0,9).curveTo(2.8,9,2.9,3.4).curveTo(2.8,-1.9,0.1,-1.9).curveTo(-1.4,-1.9,-2.1,-0.4).closePath();
	this.shape_1.setTransform(40.7,44.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.8).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.008,45.0263,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.7,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_3.setTransform(41.008,45.0263,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-9.5,86.89999999999999,100.7);


(lib.t5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-3.2,10.5).curveTo(-4.3,10.3,-5.1,9.6).curveTo(-5.9,9.1,-6.4,8.3).curveTo(-6.9,7.5,-6.9,6.8).curveTo(-6.9,6,-6.4,5.5).curveTo(-5.9,4.9,-5.2,4.9).curveTo(-3.6,4.9,-3.6,7.1).lineTo(-3.5,8.1).curveTo(-3.5,8.4,-3.1,8.6).curveTo(-2.6,9.1,-1.8,9.1).curveTo(-1,9.1,-0.3,8.5).curveTo(0.5,8,1.1,7.1).curveTo(1.7,6.1,2,4.9).curveTo(2.4,3.8,2.4,2.5).curveTo(2.4,0.9,1.8,-0.1).curveTo(1.1,-1,0,-1).lineTo(-0.9,-0.8).curveTo(-1.3,-0.6,-1.7,-0.3).lineTo(-1.9,-0.1).lineTo(-2,0.1).lineTo(-2.3,0.5).lineTo(-2.7,1.3).curveTo(-2.9,1.8,-3.5,1.8).curveTo(-4.2,1.8,-4.2,1.3).lineTo(-4.1,1.1).lineTo(-2.8,-10.4).lineTo(-1,-10).lineTo(0.2,-9.8).lineTo(1.1,-9.7).lineTo(2.1,-9.7).lineTo(3.4,-9.8).lineTo(4.4,-10).curveTo(4.8,-10.1,5.2,-10.4).lineTo(5.8,-10.9).lineTo(6.9,-10.4).curveTo(6.6,-9.7,6.1,-9).curveTo(5.6,-8.3,4.9,-7.8).curveTo(4.2,-7.1,3.2,-6.8).curveTo(2.2,-6.5,0.8,-6.4).lineTo(-0.3,-6.5).lineTo(-1.5,-6.7).lineTo(-2.2,-1.8).curveTo(-1.5,-2.4,-0.7,-2.7).curveTo(0.1,-3,1,-3).curveTo(2.1,-3,3,-2.5).curveTo(4,-2,4.7,-1.3).curveTo(5.4,-0.5,5.8,0.5).curveTo(6.2,1.6,6.2,2.9).curveTo(6.2,4.5,5.6,6).curveTo(5.1,7.5,4.1,8.5).curveTo(3.1,9.6,1.8,10.3).curveTo(0.5,10.9,-1,10.9).curveTo(-2.2,10.9,-3.2,10.5).closePath();
	this.shape.setTransform(40.325,44.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-3.2,10.5).curveTo(-4.3,10.3,-5.1,9.6).curveTo(-5.9,9.1,-6.4,8.3).curveTo(-6.9,7.5,-6.9,6.8).curveTo(-6.9,6,-6.4,5.5).curveTo(-5.9,4.9,-5.2,4.9).curveTo(-3.6,4.9,-3.6,7.1).lineTo(-3.5,8.1).curveTo(-3.5,8.4,-3.1,8.6).curveTo(-2.6,9.1,-1.8,9.1).curveTo(-1,9.1,-0.3,8.5).curveTo(0.5,8,1.1,7.1).curveTo(1.7,6.1,2,4.9).curveTo(2.4,3.8,2.4,2.5).curveTo(2.4,0.9,1.8,-0.1).curveTo(1.1,-1,0,-1).lineTo(-0.9,-0.8).curveTo(-1.3,-0.6,-1.7,-0.3).lineTo(-1.9,-0.1).lineTo(-2,0.1).lineTo(-2.3,0.5).lineTo(-2.7,1.3).curveTo(-2.9,1.8,-3.5,1.8).curveTo(-4.2,1.8,-4.2,1.3).lineTo(-4.1,1.1).lineTo(-2.8,-10.4).lineTo(-1,-10).lineTo(0.2,-9.8).lineTo(1.1,-9.7).lineTo(2.1,-9.7).lineTo(3.4,-9.8).lineTo(4.4,-10).curveTo(4.8,-10.1,5.2,-10.4).lineTo(5.8,-10.9).lineTo(6.9,-10.4).curveTo(6.6,-9.7,6.1,-9).curveTo(5.6,-8.3,4.9,-7.8).curveTo(4.2,-7.1,3.2,-6.8).curveTo(2.2,-6.5,0.8,-6.4).lineTo(-0.3,-6.5).lineTo(-1.5,-6.7).lineTo(-2.2,-1.8).curveTo(-1.5,-2.4,-0.7,-2.7).curveTo(0.1,-3,1,-3).curveTo(2.1,-3,3,-2.5).curveTo(4,-2,4.7,-1.3).curveTo(5.4,-0.5,5.8,0.5).curveTo(6.2,1.6,6.2,2.9).curveTo(6.2,4.5,5.6,6).curveTo(5.1,7.5,4.1,8.5).curveTo(3.1,9.6,1.8,10.3).curveTo(0.5,10.9,-1,10.9).curveTo(-2.2,10.9,-3.2,10.5).closePath();
	this.shape_1.setTransform(40.325,44.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.8).curveTo(-24.6,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0138,45.0263,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_3.setTransform(41.0138,45.0263,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-9.5,86.89999999999999,100.7);


(lib.t4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-2.4,10.5).lineTo(-2.4,9.3).curveTo(-1.1,9.2,-0.7,8.6).curveTo(-0.2,8,-0.2,6.3).lineTo(-0.2,5.6).lineTo(-7.4,5.6).lineTo(1.9,-10.5).lineTo(3.5,-10.5).lineTo(3.5,3.8).lineTo(4,3.8).curveTo(4.9,3.8,5.3,3.4).curveTo(5.7,3.2,6,2.3).lineTo(7.4,2.3).lineTo(6.3,5.6).lineTo(3.5,5.6).lineTo(3.5,6.3).lineTo(3.5,7.1).lineTo(3.6,8.1).curveTo(3.7,8.5,4,8.8).curveTo(4.2,9,4.6,9.2).lineTo(5.8,9.3).lineTo(5.8,10.5).closePath().moveTo(-4.8,3.8).lineTo(-0.2,3.8).lineTo(-0.2,-4.4).closePath();
	this.shape.setTransform(40.975,44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-2.4,10.5).lineTo(-2.4,9.3).curveTo(-1.1,9.2,-0.7,8.6).curveTo(-0.2,8,-0.2,6.3).lineTo(-0.2,5.6).lineTo(-7.4,5.6).lineTo(1.9,-10.5).lineTo(3.5,-10.5).lineTo(3.5,3.8).lineTo(4,3.8).curveTo(4.9,3.8,5.3,3.4).curveTo(5.7,3.2,6,2.3).lineTo(7.4,2.3).lineTo(6.3,5.6).lineTo(3.5,5.6).lineTo(3.5,6.3).lineTo(3.5,7.1).lineTo(3.6,8.1).curveTo(3.7,8.5,4,8.8).curveTo(4.2,9,4.6,9.2).lineTo(5.8,9.3).lineTo(5.8,10.5).closePath().moveTo(-4.8,3.8).lineTo(-0.2,3.8).lineTo(-0.2,-4.4).closePath();
	this.shape_1.setTransform(40.975,44.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.2,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.7,-32.2,-27,-29.6).curveTo(-29.4,-27,-29.4,-23.4).lineTo(-29.4,23.5).curveTo(-29.3,27.2,-26.9,29.8).curveTo(-24.6,32.3,-21.2,32.3).closePath();
	this.shape_2.setTransform(41.0196,45.0263,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.4,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.7,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_3.setTransform(41.0196,45.0263,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-9.5,86.69999999999999,100.7);


(lib.t3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-3.1,10.4).curveTo(-4.2,10.1,-5,9.6).curveTo(-5.8,9.1,-6.2,8.3).curveTo(-6.7,7.6,-6.7,6.6).curveTo(-6.7,5.3,-5.8,4.6).curveTo(-4.9,3.8,-3.5,3.8).curveTo(-2.7,3.8,-2.7,4).lineTo(-2.8,4.3).curveTo(-3.1,4.8,-3.2,5.4).lineTo(-3.4,6.5).curveTo(-3.4,7.5,-2.6,8.2).curveTo(-1.9,8.9,-0.7,8.9).curveTo(0.9,8.9,1.8,7.6).curveTo(2.8,6.3,2.8,4.2).curveTo(2.8,2.4,2.2,1.1).curveTo(1.6,-0.1,0.7,-0).lineTo(0,0.1).lineTo(-0.9,0.4).curveTo(-1.2,0.6,-1.5,0.7).curveTo(-2,0.7,-2.4,0.2).curveTo(-2.7,-0.2,-2.7,-0.7).curveTo(-2.7,-1.3,-2.4,-1.5).curveTo(-2.1,-1.8,-1.6,-1.8).lineTo(-0.8,-1.6).lineTo(-0.1,-1.5).lineTo(0.3,-1.5).curveTo(1.3,-1.5,1.9,-2.6).curveTo(2.5,-3.7,2.5,-5.5).curveTo(2.5,-7.1,1.8,-8.1).curveTo(1.1,-9.1,-0.1,-9.1).curveTo(-1,-9.1,-1.7,-8.6).curveTo(-2.3,-8,-2.3,-7.2).curveTo(-2.3,-6.3,-1.5,-5.4).lineTo(-1.4,-5.3).curveTo(-1.4,-5.1,-1.9,-4.9).curveTo(-2.4,-4.6,-2.9,-4.6).curveTo(-4,-4.6,-4.6,-5.3).curveTo(-5.2,-5.9,-5.2,-6.9).curveTo(-5.2,-7.7,-4.8,-8.5).curveTo(-4.4,-9.2,-3.7,-9.7).curveTo(-3,-10.2,-2,-10.5).curveTo(-1,-10.8,0.2,-10.8).curveTo(1.5,-10.8,2.6,-10.4).curveTo(3.7,-10,4.6,-9.3).curveTo(5.4,-8.6,5.9,-7.7).curveTo(6.4,-6.7,6.4,-5.6).curveTo(6.4,-2.4,2.5,-0.9).curveTo(3.6,-0.7,4.1,-0.4).curveTo(4.7,-0.1,5.3,0.5).curveTo(6.7,2.2,6.7,4.4).curveTo(6.7,5.8,6.1,7).curveTo(5.6,8.1,4.6,9).curveTo(3.6,9.8,2.2,10.3).curveTo(0.8,10.8,-0.8,10.8).curveTo(-2.1,10.8,-3.1,10.4).closePath();
	this.shape.setTransform(40.675,44.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-3.1,10.4).curveTo(-4.2,10.1,-5,9.6).curveTo(-5.8,9.1,-6.2,8.3).curveTo(-6.7,7.6,-6.7,6.6).curveTo(-6.7,5.3,-5.8,4.6).curveTo(-4.9,3.8,-3.5,3.8).curveTo(-2.7,3.8,-2.7,4).lineTo(-2.8,4.3).curveTo(-3.1,4.8,-3.2,5.4).lineTo(-3.4,6.5).curveTo(-3.4,7.5,-2.6,8.2).curveTo(-1.9,8.9,-0.7,8.9).curveTo(0.9,8.9,1.8,7.6).curveTo(2.8,6.3,2.8,4.2).curveTo(2.8,2.4,2.2,1.1).curveTo(1.6,-0.1,0.7,-0).lineTo(0,0.1).lineTo(-0.9,0.4).curveTo(-1.2,0.6,-1.5,0.7).curveTo(-2,0.7,-2.4,0.2).curveTo(-2.7,-0.2,-2.7,-0.7).curveTo(-2.7,-1.3,-2.4,-1.5).curveTo(-2.1,-1.8,-1.6,-1.8).lineTo(-0.8,-1.6).lineTo(-0.1,-1.5).lineTo(0.3,-1.5).curveTo(1.3,-1.5,1.9,-2.6).curveTo(2.5,-3.7,2.5,-5.5).curveTo(2.5,-7.1,1.8,-8.1).curveTo(1.1,-9.1,-0.1,-9.1).curveTo(-1,-9.1,-1.7,-8.6).curveTo(-2.3,-8,-2.3,-7.2).curveTo(-2.3,-6.3,-1.5,-5.4).lineTo(-1.4,-5.3).curveTo(-1.4,-5.1,-1.9,-4.9).curveTo(-2.4,-4.6,-2.9,-4.6).curveTo(-4,-4.6,-4.6,-5.3).curveTo(-5.2,-5.9,-5.2,-6.9).curveTo(-5.2,-7.7,-4.8,-8.5).curveTo(-4.4,-9.2,-3.7,-9.7).curveTo(-3,-10.2,-2,-10.5).curveTo(-1,-10.8,0.2,-10.8).curveTo(1.5,-10.8,2.6,-10.4).curveTo(3.7,-10,4.6,-9.3).curveTo(5.4,-8.6,5.9,-7.7).curveTo(6.4,-6.7,6.4,-5.6).curveTo(6.4,-2.4,2.5,-0.9).curveTo(3.6,-0.7,4.1,-0.4).curveTo(4.7,-0.1,5.3,0.5).curveTo(6.7,2.2,6.7,4.4).curveTo(6.7,5.8,6.1,7).curveTo(5.6,8.1,4.6,9).curveTo(3.6,9.8,2.2,10.3).curveTo(0.8,10.8,-0.8,10.8).curveTo(-2.1,10.8,-3.1,10.4).closePath();
	this.shape_1.setTransform(40.675,44.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.2,-32.2).curveTo(-24.6,-32.2,-27,-29.6).curveTo(-29.4,-27,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.8).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(40.9905,45.0263,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_3.setTransform(40.9905,45.0263,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.6,-9.5,86.69999999999999,100.7);


(lib.t2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-7,10.6).lineTo(-6.7,8.9).lineTo(-4.2,6.4).lineTo(-2.6,4.7).lineTo(-1.5,3.3).lineTo(-0.5,1.8).curveTo(0.7,-0,1.4,-1.8).curveTo(2,-3.7,2,-5.2).curveTo(2,-7,1.3,-8).curveTo(0.6,-9,-0.8,-9).curveTo(-2,-9,-2.8,-8).curveTo(-3.6,-7.1,-3.6,-5.7).curveTo(-3.6,-4.7,-3,-3.9).curveTo(-2.4,-3.2,-1.2,-2.9).curveTo(-1.7,-2.3,-2.3,-2).curveTo(-2.9,-1.7,-3.7,-1.7).curveTo(-4.9,-1.7,-5.6,-2.7).curveTo(-6.4,-3.6,-6.4,-5.1).curveTo(-6.4,-6.3,-5.9,-7.3).curveTo(-5.5,-8.3,-4.6,-9).curveTo(-3.8,-9.7,-2.7,-10.1).curveTo(-1.6,-10.6,-0.3,-10.6).curveTo(1.1,-10.6,2.2,-10.1).curveTo(3.4,-9.7,4.2,-8.9).curveTo(5,-8.1,5.5,-7.1).curveTo(6,-6,6,-4.7).curveTo(6,-2,3.9,0.8).lineTo(3.2,1.7).lineTo(2,2.9).lineTo(0.8,4.2).lineTo(-0.1,5).lineTo(-3,7.7).lineTo(0.5,7.7).lineTo(2.8,7.6).curveTo(3.6,7.5,4.1,7.2).curveTo(4.6,6.9,4.9,6.3).lineTo(5.5,4.7).lineTo(7,4.7).lineTo(5.7,10.6).closePath();
	this.shape.setTransform(40.875,44.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-7,10.6).lineTo(-6.7,8.9).lineTo(-4.2,6.4).lineTo(-2.6,4.7).lineTo(-1.5,3.3).lineTo(-0.5,1.8).curveTo(0.7,-0,1.4,-1.8).curveTo(2,-3.7,2,-5.2).curveTo(2,-7,1.3,-8).curveTo(0.6,-9,-0.8,-9).curveTo(-2,-9,-2.8,-8).curveTo(-3.6,-7.1,-3.6,-5.7).curveTo(-3.6,-4.7,-3,-3.9).curveTo(-2.4,-3.2,-1.2,-2.9).curveTo(-1.7,-2.3,-2.3,-2).curveTo(-2.9,-1.7,-3.7,-1.7).curveTo(-4.9,-1.7,-5.6,-2.7).curveTo(-6.4,-3.6,-6.4,-5.1).curveTo(-6.4,-6.3,-5.9,-7.3).curveTo(-5.5,-8.3,-4.6,-9).curveTo(-3.8,-9.7,-2.7,-10.1).curveTo(-1.6,-10.6,-0.3,-10.6).curveTo(1.1,-10.6,2.2,-10.1).curveTo(3.4,-9.7,4.2,-8.9).curveTo(5,-8.1,5.5,-7.1).curveTo(6,-6,6,-4.7).curveTo(6,-2,3.9,0.8).lineTo(3.2,1.7).lineTo(2,2.9).lineTo(0.8,4.2).lineTo(-0.1,5).lineTo(-3,7.7).lineTo(0.5,7.7).lineTo(2.8,7.6).curveTo(3.6,7.5,4.1,7.2).curveTo(4.6,6.9,4.9,6.3).lineTo(5.5,4.7).lineTo(7,4.7).lineTo(5.7,10.6).closePath();
	this.shape_1.setTransform(40.875,44.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.6,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.1,-32.3).lineTo(-21.3,-32.2).curveTo(-24.7,-32.2,-27,-29.6).curveTo(-29.4,-27,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.8).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(40.9956,45.0263,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.7,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_3.setTransform(40.9956,45.0263,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-9.5,86.89999999999999,100.7);


(lib.t1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-5.1,10.6).lineTo(-5.1,9.3).lineTo(-4.1,9.3).lineTo(-3.5,9.2).lineTo(-3.1,9.1).lineTo(-2.8,8.9).curveTo(-2.3,8.6,-2,8).curveTo(-1.9,7.5,-1.9,6.4).lineTo(-1.9,-6.7).lineTo(-4.8,-6.7).lineTo(-4.8,-8.1).curveTo(-2.8,-8.3,-1.3,-8.9).curveTo(0.1,-9.5,1.5,-10.6).lineTo(2.1,-10.6).lineTo(2.1,6.4).lineTo(2.2,7.8).curveTo(2.3,8.4,2.7,8.7).curveTo(3,9,3.6,9.2).curveTo(4.2,9.3,5.1,9.3).lineTo(5.1,10.6).closePath();
	this.shape.setTransform(41.1,44.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#DCDCDC").beginStroke().moveTo(-5.1,10.6).lineTo(-5.1,9.3).lineTo(-4.1,9.3).lineTo(-3.5,9.2).lineTo(-3.1,9.1).lineTo(-2.8,8.9).curveTo(-2.3,8.6,-2,8).curveTo(-1.9,7.5,-1.9,6.4).lineTo(-1.9,-6.7).lineTo(-4.8,-6.7).lineTo(-4.8,-8.1).curveTo(-2.8,-8.3,-1.3,-8.9).curveTo(0.1,-9.5,1.5,-10.6).lineTo(2.1,-10.6).lineTo(2.1,6.4).lineTo(2.2,7.8).curveTo(2.3,8.4,2.7,8.7).curveTo(3,9,3.6,9.2).curveTo(4.2,9.3,5.1,9.3).lineTo(5.1,10.6).closePath();
	this.shape_1.setTransform(41.1,44.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginLinearGradientStroke(["#EDCD5C","#EAC959","#D1AA45","#BE9437","#B3862E","#AF812A","#BB9139","#D8BA5C","#DFC464","#DCBF5E","#D1AF4D","#C0942F","#AE7909"],[0.004,0.016,0.102,0.184,0.263,0.333,0.443,0.663,0.71,0.769,0.847,0.929,1],-30.3,0,30.4,0).setStrokeStyle(1.9).moveTo(-21.1,32.3).lineTo(21.2,32.2).curveTo(24.7,32.2,27,29.6).curveTo(29.4,27.1,29.4,23.4).lineTo(29.3,-23.5).curveTo(29.3,-27.2,26.9,-29.7).curveTo(24.5,-32.3,21.2,-32.3).lineTo(-21.2,-32.2).curveTo(-24.7,-32.2,-27,-29.6).curveTo(-29.4,-27,-29.4,-23.4).lineTo(-29.3,23.5).curveTo(-29.3,27.2,-26.9,29.8).curveTo(-24.5,32.3,-21.1,32.3).closePath();
	this.shape_2.setTransform(41.0672,45.0263,1.3972,1.3972);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_3.setTransform(41.0672,45.0263,1.3972,1.3972);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-9.5,84.2,100.7);


// stage content:
(lib._11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var _this = this;
		
		// Definir la lista de botones
		var botones = [
		    _this.it1,
		    _this.it2,
		    _this.it3,
		    _this.it4,
		    _this.it5,
		    _this.it6,
		    _this.it7,
		    _this.it8,
		    _this.it9,
		    _this.it10,
		    _this.it11,
		    _this.it12,
		    _this.it13,
		    _this.it14,
		    _this.it15,
		    _this.it16,
		    _this.it17,
		    _this.it18,
		    _this.it19,
		    _this.it20,
		    _this.it21,
		    _this.it22,
		    _this.it23,
		    _this.it24,
		    _this.it25,
		    _this.it26,
		    _this.it27,
		    _this.it28,
		    _this.it29,
		    _this.it30,
		    _this.it31,
		    _this.it32,
		    _this.it33,
		    _this.it34,
		    _this.it35,
		    _this.it36,
		    _this.it37,
		    _this.it38,
		    _this.it39
		    // Agrega el resto de instancias de botones aquí
		];
		
		// Manejar el evento de clic del botón para cada botón
		botones.forEach(function(boton) {
		    boton.on('mousedown', function() {
		        // Guardar el alpha original del botón
		        var initialAlpha = boton.alpha;
		
		        // Aplicar la animación de iluminación al botón pulsado
		        createjs.Tween.get(boton)
		            .to({ alpha: 0.1 }, 50)
		            .to({ alpha: initialAlpha }, 1000);
		    });
		});
		
		// Variable para guardar el estado de visibilidad del clip de película "c_n"
		var cNVisible = false;
		
		// Hacer invisible el clip de película "c_n" al inicio
		_this.c_n.visible = false;
		
		// Manejar el evento de clic del botón it39
		_this.it39.on('mousedown', function() {
		    // Hacer visible la capa "c_n" al hacer clic en el botón it39 con efecto de fundido
		    _this.c_n.alpha = 0; // Establecer la opacidad inicial en 0
		
		    // Mostrar la capa c_n
		    _this.c_n.visible = true;
		
		    // Animar la propiedad alpha para lograr el efecto de fundido
		    createjs.Tween.get(_this.c_n)
		        .to({ alpha: 1 }, 1000); // Aumentar gradualmente la opacidad a 1 en 1000 ms
		});
		
		// Manejar el evento de presionar una tecla del teclado
		document.addEventListener('keydown', function(event) {
		    // Verificar si se ha presionado cualquier tecla del teclado
		    // Puedes cambiar esto para limitarlo a una tecla específica si es necesario
		    if (event.key) {
		        // Suponer que el nombre de la instancia del video es "videoADN"
		        // Hacer visible el video y reproducirlo
		        _this.videoADN.visible = true;
		        _this.videoADN.play();
		    }
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// tecl_osc
	this.c_n = new lib.cuadros_negros();
	this.c_n.name = "c_n";
	this.c_n.setTransform(645.9,412.1,1,1,0,0,0,526,211.3);

	this.timeline.addTween(cjs.Tween.get(this.c_n).wait(1));

	// TECLAS
	this.it39 = new lib.t39();
	this.it39.name = "it39";
	this.it39.setTransform(1078.6,582.3,1.0003,1.0003,0,0,0,96.3,44.1);
	new cjs.ButtonHelper(this.it39, 0, 1, 1);

	this.it38 = new lib.t38();
	this.it38.name = "it38";
	this.it38.setTransform(915.45,582.8,1,1,0,0,0,42.5,45.1);
	new cjs.ButtonHelper(this.it38, 0, 1, 1);

	this.it37 = new lib.t37();
	this.it37.name = "it37";
	this.it37.setTransform(805.85,582.8,1,1,0,0,0,42.5,45.1);
	new cjs.ButtonHelper(this.it37, 0, 1, 1);

	this.it36 = new lib.t36();
	this.it36.name = "it36";
	this.it36.setTransform(694.85,582.8,1,1,0,0,0,41.1,45.1);
	new cjs.ButtonHelper(this.it36, 0, 1, 1);

	this.it35 = new lib.t35();
	this.it35.name = "it35";
	this.it35.setTransform(585.25,582.8,1,1,0,0,0,41.1,45.1);
	new cjs.ButtonHelper(this.it35, 0, 1, 1);

	this.it34 = new lib.t34();
	this.it34.name = "it34";
	this.it34.setTransform(475.7,582.8,1,1,0,0,0,41.1,45.1);
	new cjs.ButtonHelper(this.it34, 0, 1, 1);

	this.it33 = new lib.t33();
	this.it33.name = "it33";
	this.it33.setTransform(366.1,582.8,1,1,0,0,0,41.1,45.1);
	new cjs.ButtonHelper(this.it33, 0, 1, 1);

	this.it32 = new lib.t32();
	this.it32.name = "it32";
	this.it32.setTransform(255.1,582.8,1,1,0,0,0,39.7,45.1);
	new cjs.ButtonHelper(this.it32, 0, 1, 1);

	this.it31 = new lib.t31();
	this.it31.name = "it31";
	this.it31.setTransform(146.85,584.5,1,1,0,0,0,41.1,46.8);
	new cjs.ButtonHelper(this.it31, 0, 1, 1);

	this.it30 = new lib.t30();
	this.it30.name = "it30";
	this.it30.setTransform(1133.2,465.35,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it30, 0, 1, 1);

	this.it29 = new lib.t29();
	this.it29.name = "it29";
	this.it29.setTransform(1023.6,465.35,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it29, 0, 1, 1);

	this.it28 = new lib.t28();
	this.it28.name = "it28";
	this.it28.setTransform(914.05,465.35,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it28, 0, 1, 1);

	this.it27 = new lib.t27();
	this.it27.name = "it27";
	this.it27.setTransform(804.45,465.35,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it27, 0, 1, 1);

	this.it26 = new lib.t26();
	this.it26.name = "it26";
	this.it26.setTransform(694.85,465.35,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it26, 0, 1, 1);

	this.it25 = new lib.t25();
	this.it25.name = "it25";
	this.it25.setTransform(585.25,465.35,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it25, 0, 1, 1);

	this.it24 = new lib.t24();
	this.it24.name = "it24";
	this.it24.setTransform(475.7,465.35,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it24, 0, 1, 1);

	this.it23 = new lib.t23();
	this.it23.name = "it23";
	this.it23.setTransform(366.1,465.35,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it23, 0, 1, 1);

	this.it22 = new lib.t22();
	this.it22.name = "it22";
	this.it22.setTransform(256.5,465.35,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it22, 0, 1, 1);

	this.it21 = new lib.t21();
	this.it21.name = "it21";
	this.it21.setTransform(146.85,463.85,1,1,0,0,0,41.1,43.7);
	new cjs.ButtonHelper(this.it21, 0, 1, 1);

	this.it20 = new lib.t20();
	this.it20.name = "it20";
	this.it20.setTransform(1133.2,347.7,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it20, 0, 1, 1);

	this.it19 = new lib.t19();
	this.it19.name = "it19";
	this.it19.setTransform(1023.6,347.7,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it19, 0, 1, 1);

	this.it18 = new lib.t18();
	this.it18.name = "it18";
	this.it18.setTransform(914.05,347.7,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it18, 0, 1, 1);

	this.it17 = new lib.t17();
	this.it17.name = "it17";
	this.it17.setTransform(804.45,347.7,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it17, 0, 1, 1);

	this.it16 = new lib.t16();
	this.it16.name = "it16";
	this.it16.setTransform(694.85,346.3,1,1,0,0,0,41.1,43.8);
	new cjs.ButtonHelper(this.it16, 0, 1, 1);

	this.it15 = new lib.t15();
	this.it15.name = "it15";
	this.it15.setTransform(585.25,346.3,1,1,0,0,0,41.1,43.8);
	new cjs.ButtonHelper(this.it15, 0, 1, 1);

	this.it14 = new lib.t14();
	this.it14.name = "it14";
	this.it14.setTransform(475.7,347.7,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it14, 0, 1, 1);

	this.it13 = new lib.t13();
	this.it13.name = "it13";
	this.it13.setTransform(366.1,347.7,1,1,0,0,0,41.1,45.2);
	new cjs.ButtonHelper(this.it13, 0, 1, 1);

	this.it12 = new lib.t12();
	this.it12.name = "it12";
	this.it12.setTransform(256.5,347.6,1,1,0,0,0,41.1,45.1);
	new cjs.ButtonHelper(this.it12, 0, 1, 1);

	this.it11 = new lib.t11();
	this.it11.name = "it11";
	this.it11.setTransform(148.25,347.7,1,1,0,0,0,42.5,45.2);
	new cjs.ButtonHelper(this.it11, 0, 1, 1);

	this.it10 = new lib.t10();
	this.it10.name = "it10";
	this.it10.setTransform(1133.2,225.95,1,1,0,0,0,41.1,41);
	new cjs.ButtonHelper(this.it10, 0, 1, 1);

	this.it9 = new lib.t9();
	this.it9.name = "it9";
	this.it9.setTransform(1023.6,225.95,1,1,0,0,0,41.1,41);
	new cjs.ButtonHelper(this.it9, 0, 1, 1);

	this.it8 = new lib.t8();
	this.it8.name = "it8";
	this.it8.setTransform(914.05,225.95,1,1,0,0,0,41.1,41);
	new cjs.ButtonHelper(this.it8, 0, 1, 1);

	this.it7 = new lib.t7();
	this.it7.name = "it7";
	this.it7.setTransform(804.45,225.95,1,1,0,0,0,41.1,41);
	new cjs.ButtonHelper(this.it7, 0, 1, 1);

	this.it6 = new lib.t6();
	this.it6.name = "it6";
	this.it6.setTransform(694.85,225.95,1,1,0,0,0,41.1,41);
	new cjs.ButtonHelper(this.it6, 0, 1, 1);

	this.it5 = new lib.t5();
	this.it5.name = "it5";
	this.it5.setTransform(583.85,225.95,1,1,0,0,0,39.7,41);
	new cjs.ButtonHelper(this.it5, 0, 1, 1);

	this.it4 = new lib.t4();
	this.it4.name = "it4";
	this.it4.setTransform(474.2,225.95,1,1,0,0,0,39.6,41);
	new cjs.ButtonHelper(this.it4, 0, 1, 1);

	this.it3 = new lib.t3();
	this.it3.name = "it3";
	this.it3.setTransform(366.1,225.95,1,1,0,0,0,41.1,41);
	new cjs.ButtonHelper(this.it3, 0, 1, 1);

	this.it2 = new lib.t2();
	this.it2.name = "it2";
	this.it2.setTransform(256.5,227.25,1,1,0,0,0,41.1,42.3);
	new cjs.ButtonHelper(this.it2, 0, 1, 1);

	this.it1 = new lib.t1();
	this.it1.name = "it1";
	this.it1.setTransform(148.25,225.95,1,1,0,0,0,42.5,41);
	new cjs.ButtonHelper(this.it1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.it1},{t:this.it2},{t:this.it3},{t:this.it4},{t:this.it5},{t:this.it6},{t:this.it7},{t:this.it8},{t:this.it9},{t:this.it10},{t:this.it11},{t:this.it12},{t:this.it13},{t:this.it14},{t:this.it15},{t:this.it16},{t:this.it17},{t:this.it18},{t:this.it19},{t:this.it20},{t:this.it21},{t:this.it22},{t:this.it23},{t:this.it24},{t:this.it25},{t:this.it26},{t:this.it27},{t:this.it28},{t:this.it29},{t:this.it30},{t:this.it31},{t:this.it32},{t:this.it33},{t:this.it34},{t:this.it35},{t:this.it36},{t:this.it37},{t:this.it38},{t:this.it39}]}).wait(1));

	// TECLADO
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.2,-32.3).curveTo(24.6,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape.setTransform(914.1122,583.0213,1.3978,1.3978);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.6,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.7,32.2,21.3,32.2).lineTo(-21.2,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_1.setTransform(804.5249,583.0213,1.3978,1.3978);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.7,32.2,21.2,32.2).lineTo(-21.2,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_2.setTransform(694.9376,583.0213,1.3978,1.3978);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_3.setTransform(585.3504,583.0213,1.3978,1.3978);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.4,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_4.setTransform(475.7631,583.0213,1.3978,1.3978);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_5.setTransform(366.1409,583.0213,1.3978,1.3978);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.7,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).lineTo(-21.3,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_6.setTransform(256.553,583.0213,1.3978,1.3978);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.8).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_7.setTransform(146.9315,583.0213,1.3978,1.3978);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_8.setTransform(1133.2867,465.431,1.3978,1.3978);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_9.setTransform(1023.6994,465.431,1.3978,1.3978);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.2,-32.3).curveTo(24.6,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_10.setTransform(914.1122,465.431,1.3978,1.3978);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.6,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.7,32.2,21.3,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_11.setTransform(804.5249,465.431,1.3978,1.3978);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.7,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_12.setTransform(694.9376,465.431,1.3978,1.3978);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_13.setTransform(585.3504,465.431,1.3978,1.3978);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.4,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_14.setTransform(475.7631,465.431,1.3978,1.3978);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_15.setTransform(366.1409,465.431,1.3978,1.3978);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.7,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_16.setTransform(256.553,465.431,1.3978,1.3978);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_17.setTransform(146.9315,465.431,1.3978,1.3978);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_18.setTransform(1133.2867,347.8064,1.3978,1.3978);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_19.setTransform(1023.6994,347.8064,1.3978,1.3978);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.2,-32.3).curveTo(24.6,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_20.setTransform(914.1122,347.8064,1.3978,1.3978);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.6,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.7,32.2,21.3,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_21.setTransform(804.5249,347.8064,1.3978,1.3978);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.7,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_22.setTransform(694.9376,347.8064,1.3978,1.3978);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_23.setTransform(585.3504,347.8064,1.3978,1.3978);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.4,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_24.setTransform(475.7631,347.8064,1.3978,1.3978);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_25.setTransform(366.1409,347.8064,1.3978,1.3978);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.7,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_26.setTransform(256.553,347.8064,1.3978,1.3978);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.7).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27.1,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.7).closePath();
	this.shape_27.setTransform(146.9315,347.8064,1.3978,1.3978);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.7,-32.2,-21.2,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_28.setTransform(1133.2867,230.2161,1.3978,1.3978);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.7,-32.2,-21.2,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_29.setTransform(1023.6994,230.2161,1.3978,1.3978);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.7,-32.2,-21.3,-32.2).lineTo(21.2,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.3,32.2).lineTo(-21.1,32.3).curveTo(-24.6,32.3,-26.9,29.8).closePath();
	this.shape_30.setTransform(914.1122,230.2161,1.3978,1.3978);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.7,32.2,21.3,32.2).lineTo(-21.2,32.3).curveTo(-24.6,32.3,-26.9,29.8).closePath();
	this.shape_31.setTransform(804.5249,230.2161,1.3978,1.3978);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.7,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_32.setTransform(694.9376,230.2161,1.3978,1.3978);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_33.setTransform(585.3504,230.2161,1.3978,1.3978);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.4,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.7,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.2,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_34.setTransform(475.7631,230.2161,1.3978,1.3978);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.6,-32.2,-21.2,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_35.setTransform(366.1409,230.2161,1.3978,1.3978);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.7,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_36.setTransform(256.553,230.2161,1.3978,1.3978);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#CC9511").beginStroke().moveTo(-26.9,29.8).curveTo(-29.3,27.2,-29.3,23.5).lineTo(-29.4,-23.4).curveTo(-29.4,-27,-27,-29.6).curveTo(-24.6,-32.2,-21.3,-32.2).lineTo(21.1,-32.3).curveTo(24.5,-32.3,26.9,-29.7).curveTo(29.3,-27.2,29.3,-23.5).lineTo(29.4,23.4).curveTo(29.4,27.1,27,29.6).curveTo(24.6,32.2,21.2,32.2).lineTo(-21.1,32.3).curveTo(-24.5,32.3,-26.9,29.8).closePath();
	this.shape_37.setTransform(146.9315,230.2161,1.3978,1.3978);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#CC9511").beginStroke().moveTo(-61.2,31.5).curveTo(-64.4,31.6,-66.6,29.3).curveTo(-68.8,27.1,-68.9,23.9).lineTo(-68.9,-24).curveTo(-68.8,-27.1,-66.6,-29.3).curveTo(-64.4,-31.6,-61.2,-31.6).lineTo(61.3,-31.6).curveTo(64.4,-31.6,66.7,-29.3).curveTo(68.8,-27.1,68.8,-24).lineTo(68.8,23.9).curveTo(68.8,27.1,66.7,29.3).curveTo(64.4,31.6,61.3,31.5).closePath();
	this.shape_38.setTransform(1078.6328,582.3916,1.3978,1.3978);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.beginFill("#000000").beginStroke().moveTo(-458,231.7).lineTo(-458,-231.7).lineTo(458,-231.7).lineTo(458,231.7).closePath();
	this.shape_39.setTransform(640.1615,400.0469,1.3978,1.7229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,400.9,640.4000000000001,398.5);
// library properties:
lib.properties = {
	id: '4004B0B52A67DC429498472D7CA53E73',
	width: 1280,
	height: 800,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4004B0B52A67DC429498472D7CA53E73'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;