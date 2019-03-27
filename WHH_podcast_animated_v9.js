(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"WHH_podcast_animated_v9_atlas_", frames: [[1811,0,256,62],[0,496,2104,22],[1361,0,448,494],[1811,64,229,53],[1811,119,276,43],[0,0,1359,255],[0,257,427,43],[91,347,101,101],[0,302,378,43],[0,347,89,147]]}
];


// symbols:



(lib.applepodcasts = function() {
	this.initialize(ss["WHH_podcast_animated_v9_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottomborder = function() {
	this.initialize(ss["WHH_podcast_animated_v9_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.facepngcopy = function() {
	this.initialize(ss["WHH_podcast_animated_v9_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.listenhereCTA = function() {
	this.initialize(ss["WHH_podcast_animated_v9_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.listento = function() {
	this.initialize(ss["WHH_podcast_animated_v9_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["WHH_podcast_animated_v9_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ofwhohahaspngcopy2 = function() {
	this.initialize(ss["WHH_podcast_animated_v9_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.playbtn = function() {
	this.initialize(ss["WHH_podcast_animated_v9_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.seasontwo = function() {
	this.initialize(ss["WHH_podcast_animated_v9_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.tree = function() {
	this.initialize(ss["WHH_podcast_animated_v9_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(-231.05,-43.35,0.34,0.34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-231,-43.3,462.1,86.69999999999999);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.facepngcopy();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.252,0.252);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.9,124.5);


(lib.Season_two = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.seasontwo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3313,0.3313);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.2,14.3);


(lib.play_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.playbtn();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4654,0.4654);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,47);


(lib.of_Whohaha = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.ofwhohahaspngcopy2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.327,0.327);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139.7,14.1);


(lib.Listen_to = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.listento();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.3322,0.3322);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.7,14.3);


(lib.Button = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("WoS_WhoHaHa_30secSpot_v3");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// button
	this.instance = new lib.playbtn();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.4654,0.4654);

	this.instance_1 = new lib.play_button();
	this.instance_1.parent = this;
	this.instance_1.setTransform(23.5,23.5,1,1,0,0,0,23.5,23.5);
	this.instance_1.alpha = 0.75;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,47);


// stage content:
(lib.WHH_podcast_animated_v9 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Face
	this.instance = new lib.Symbol6("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(106.55,74.45,1.0452,1.044,0,0,0,56.6,62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({startPosition:0},0).wait(1).to({regX:56.5,regY:62.3,scaleX:1.0456,scaleY:1.0445,x:106.45,y:74.1},0).wait(1).to({scaleX:1.0471,scaleY:1.046,x:106.4},0).wait(1).to({scaleX:1.0497,scaleY:1.0486,y:74.15},0).wait(1).to({scaleX:1.0536,scaleY:1.0525,x:106.45,y:74.1},0).wait(1).to({scaleX:1.0585,scaleY:1.0574,y:74.15},0).wait(1).to({scaleX:1.0642,scaleY:1.0631,y:74.1},0).wait(1).to({scaleX:1.0701,scaleY:1.069},0).wait(1).to({scaleX:1.0755,scaleY:1.0744},0).wait(1).to({regX:56.6,regY:62.6,scaleX:1.08,scaleY:1.0788,x:106.5,y:74.45},0).wait(1).to({regX:56.5,regY:62.3,scaleX:1.0755,scaleY:1.0743,x:106.4,y:74.1},0).wait(1).to({scaleX:1.0699,scaleY:1.0687},0).wait(1).to({scaleX:1.0637,scaleY:1.0626},0).wait(1).to({scaleX:1.0579,scaleY:1.0567,x:106.35},0).wait(1).to({scaleX:1.053,scaleY:1.0518,x:106.4,y:74.15},0).wait(1).to({scaleX:1.0493,scaleY:1.0482,y:74.1},0).wait(1).to({scaleX:1.0469,scaleY:1.0458},0).wait(1).to({scaleX:1.0456,scaleY:1.0444,x:106.35},0).wait(1).to({regX:56.6,regY:62.6,scaleX:1.0452,scaleY:1.044,x:106.55,y:74.45},0).wait(11));

	// Listen to
	this.instance_1 = new lib.Listen_to("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(298.9,32.7,1,1,0,0,0,45.9,7.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).wait(1).to({regX:45.8,regY:7.1,x:298.8,y:32.55,alpha:0.0061},0).wait(1).to({y:32.45,alpha:0.0258},0).wait(1).to({y:32.25,alpha:0.061},0).wait(1).to({y:31.95,alpha:0.1139},0).wait(1).to({y:31.55,alpha:0.1867},0).wait(1).to({y:31.05,alpha:0.2807},0).wait(1).to({y:30.4,alpha:0.3949},0).wait(1).to({y:29.7,alpha:0.5241},0).wait(1).to({y:28.95,alpha:0.6572},0).wait(1).to({y:28.3,alpha:0.7797},0).wait(1).to({y:27.75,alpha:0.8788},0).wait(1).to({y:27.35,alpha:0.9483},0).wait(1).to({y:27.15,alpha:0.9877},0).wait(1).to({regX:45.9,regY:7.2,x:298.9,y:27.2,alpha:1},0).wait(72));

	// Season Two
	this.instance_2 = new lib.Season_two("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(416.6,32.85,1,1,0,0,0,62.6,7.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).wait(1).to({y:32.75,alpha:0.0093},0).wait(1).to({y:32.6,alpha:0.0392},0).wait(1).to({y:32.3,alpha:0.0927},0).wait(1).to({y:31.85,alpha:0.1723},0).wait(1).to({y:31.2,alpha:0.2783},0).wait(1).to({y:30.5,alpha:0.4065},0).wait(1).to({y:29.7,alpha:0.5465},0).wait(1).to({y:28.9,alpha:0.6827},0).wait(1).to({y:28.2,alpha:0.8007},0).wait(1).to({y:27.7,alpha:0.892},0).wait(1).to({y:27.35,alpha:0.9542},0).wait(1).to({y:27.15,alpha:0.9891},0).wait(1).to({y:27.1,alpha:1},0).wait(60));

	// of Whohaha's
	this.instance_3 = new lib.of_Whohaha("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(557.8,32.75,1,1,0,0,0,69.8,7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).wait(1).to({y:32.65,alpha:0.0102},0).wait(1).to({y:32.5,alpha:0.0433},0).wait(1).to({y:32.15,alpha:0.1025},0).wait(1).to({y:31.65,alpha:0.1902},0).wait(1).to({y:30.95,alpha:0.3054},0).wait(1).to({y:30.2,alpha:0.4407},0).wait(1).to({y:29.4,alpha:0.5823},0).wait(1).to({y:28.6,alpha:0.7136},0).wait(1).to({y:28,alpha:0.8228},0).wait(1).to({y:27.5,alpha:0.9048},0).wait(1).to({y:27.2,alpha:0.9599},0).wait(1).to({y:27.05,alpha:0.9905},0).wait(1).to({y:27,alpha:1},0).wait(48));

	// logo 2
	this.instance_4 = new lib.Tween8("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(443.05,85.3,1.017,1.0143,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({startPosition:0},0).wait(1).to({regX:0,regY:0,scaleX:1.0173,scaleY:1.0147,x:442.8501,y:85.0995},0).wait(1).to({scaleX:1.0184,scaleY:1.0158,x:442.8502,y:85.098},0).wait(1).to({scaleX:1.0205,scaleY:1.0178,x:442.8505,y:85.0952},0).wait(1).to({scaleX:1.0237,scaleY:1.0211,x:442.851,y:85.0907},0).wait(1).to({scaleX:1.0283,scaleY:1.0256,x:442.8517,y:85.0845},0).wait(1).to({scaleX:1.034,scaleY:1.0313,x:442.8526,y:85.0767},0).wait(1).to({scaleX:1.0401,scaleY:1.0374,x:442.8535,y:85.0683},0).wait(1).to({scaleX:1.0456,scaleY:1.0429,x:442.8543,y:85.0607},0).wait(1).to({regX:0.3,regY:0.4,scaleX:1.05,scaleY:1.0472,x:443.05,y:85.35},0).wait(1).to({regX:0,regY:0,scaleX:1.046,scaleY:1.0433,x:442.7498,y:84.9558},0).wait(1).to({scaleX:1.0407,scaleY:1.038,x:442.7495,y:84.9636},0).wait(1).to({scaleX:1.0347,scaleY:1.032,x:442.7492,y:84.9725},0).wait(1).to({scaleX:1.029,scaleY:1.0263,x:442.7489,y:84.9809},0).wait(1).to({scaleX:1.0245,scaleY:1.0218,x:442.7487,y:84.9875},0).wait(1).to({scaleX:1.0213,scaleY:1.0187,x:442.7485,y:84.9922},0).wait(1).to({scaleX:1.0192,scaleY:1.0165,x:442.7484,y:84.9953},0).wait(1).to({scaleX:1.0179,scaleY:1.0152,x:442.7483,y:84.9972},0).wait(1).to({scaleX:1.0172,scaleY:1.0145,y:84.9983},0).wait(1).to({regX:0.2,regY:0.2,scaleX:1.017,scaleY:1.0143,x:443.05,y:85.3},0).wait(29));

	// Rays 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABqEyIAIgiIAXAGIgGAigAgMD0IAUgcIASAQIgVAcgAhjCRIAfgSIALAVIgeASgAiIATIAjgDIACAXIgjAGgAiEhXIAHgYIAiALIgIAWgAhNjQIAOgTIAcAWIgPASgAAVkqIAUgNIASAgIgUALg");
	this.shape.setTransform(741.5,64.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABZFCIATgxIAXAIIgUAygAgZD1IAmglIAQASIglAlgAhnCAIAygTIAJAYIgyASgAiBgGIA1ABIAAAXIg1ABgAhrh3IAIgYIAzASIgIAYgAghjwIARgSIAkAoIgRARgABQlBIAWgKIAWAyIgXAKg");
	this.shape_1.setTransform(738.5,62.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbFPIAlhCIAUANIgkBBgAhSDtIA7gvIAOATIg6AvgAiTBpIBJgUIAFAXIhIAUgAidgUIADgXIBMALIgFAXgAhxifIALgUIBDAkIgMAUgAgQkRIARgOIAuA8IgTANgAB0lUIAXgGIATBKIgWAEg");
	this.shape_2.setTransform(739.125,60.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiGE7IBQhBIAOASIhPBBgAjQCxIBiggIAGAVIhhAhgAjiAqIACgYIBmAIIgCAWgAi8hwIAMgVIBaAyIgLATgAhcjrIASgQIBCBPIgRANgAArk5IAWgIIAgBiIgUAHgADEjmIAIhmIAXACIgKBmg");
	this.shape_3.setTransform(743.125,56.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AlfD5ICVgeIAFAXIiWAfgAlkBdIAHgYICUAiIgGAXgAkjhHIAPgUIB+BVIgNASgAD8hJIBWh+IATAPIhWB9gAimjLIAWgLIBPCBIgVAMgACOh3IAiiVIAYAHIgjCUgAgBkOIAXgCIAbCVIgYAEg");
	this.shape_4.setTransform(751.725,46.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AmkDKIAEgZICoAVIgCAXgAluAYIANgUICTBUIgMATgAEQA3ICGhnIAPAVIiIBlgAj7h3IATgOIBnCGIgTANgAC1gSIBUiVIAUANIhTCTgAhajQIAXgGIApCmIgYAFgABEg0IAYioIAXADIgYCpg");
	this.shape_5.setTransform(755.625,39.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AmzCFIAJgXICeA7IgIAWgAEQCWICahGIAKAZIidBDgAlWgaIASgSIB7B0IgQAPgADIA5IB0h8IASARIh0B7gAjFiMIAVgKIBHCaIgWAIgABjAAIA+ifIAWAJIg/CdgAgSgUIgBipIAXgBIABCrg");
	this.shape_6.setTransform(759.65,35.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AELCvIChgzIAHAZIijAwgAmyBLIAMgVICWBNIgKAVgADPBKICChuIAPAUIiCBsgAlChJIATgPIBtCCIgRAOgABwAEIBRiWIAUAMIhQCVgAilioIAWgHIA1CiIgXAFgAgBgcIASioIAYACIgUCqg");
	this.shape_7.setTransform(761.3,36.475);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AmzCEIAKgXICfA7IgIAXgAERCWICZhFIAKAYIicBDgAlVgcIARgQIB8B0IgRAQgADJA6IB0h9IARARIh0B7gAjEiNIAWgJIBFCaIgVAJgABjAAIA/ifIAVAJIg+CdgAgSgVIAAipIAXAAIAACrg");
	this.shape_8.setTransform(759.575,35.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AmyCVIAJgXICiAyIgHAXgAESCAICWhPIALAYIiYBLgAldgQIAQgRICCBsIgPARgADFAmIBtiDIASAQIhtCCgAjSiJIAVgLIBOCWIgVAKgABcgOIA2iiIAWAIIg2CigAgagbIgKipIAYgBIAKCqg");
	this.shape_9.setTransform(758.575,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},79).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Play Button
	this.instance_5 = new lib.Button();
	this.instance_5.parent = this;
	this.instance_5.setTransform(760.5,62.5,1,1,0,0,0,23.5,23.5);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(89));

	// CTA
	this.instance_6 = new lib.listenhereCTA();
	this.instance_6.parent = this;
	this.instance_6.setTransform(792,60,0.4711,0.4711);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(89));

	// Apple Podcasts
	this.instance_7 = new lib.applepodcasts();
	this.instance_7.parent = this;
	this.instance_7.setTransform(760,98,0.4717,0.4677);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89));

	// bottom border
	this.instance_8 = new lib.bottomborder();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-2,142,0.4539,0.4539);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89));

	// borders
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E379F3").ss(5,0,0,3).p("EBJ+gLaIAAACMiT9AAAIAAgCIAAgYEBJ+ALbIAAgCMiT9AAAEBKAgLyIAAXlEhKEgLaIAFAAEhJ/ALbIgFAAEhJ/AL0IAAgZIAAgCIAA2x");
	this.shape_10.setTransform(476.05,75.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(89));

	// Palm Trees
	this.instance_9 = new lib.tree();
	this.instance_9.parent = this;
	this.instance_9.setTransform(130,84,0.4895,0.4895);

	this.instance_10 = new lib.tree();
	this.instance_10.parent = this;
	this.instance_10.setTransform(67,84,0.4895,0.4895);

	this.instance_11 = new lib.tree();
	this.instance_11.parent = this;
	this.instance_11.setTransform(9,84,0.4895,0.4895);

	this.instance_12 = new lib.tree();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-11,4,0.4895,0.4895);

	this.instance_13 = new lib.tree();
	this.instance_13.parent = this;
	this.instance_13.setTransform(48,4,0.4895,0.4895);

	this.instance_14 = new lib.tree();
	this.instance_14.parent = this;
	this.instance_14.setTransform(920,84,0.4895,0.4895);

	this.instance_15 = new lib.tree();
	this.instance_15.parent = this;
	this.instance_15.setTransform(862,84,0.4895,0.4895);

	this.instance_16 = new lib.tree();
	this.instance_16.parent = this;
	this.instance_16.setTransform(799,84,0.4895,0.4895);

	this.instance_17 = new lib.tree();
	this.instance_17.parent = this;
	this.instance_17.setTransform(742,84,0.4895,0.4895);

	this.instance_18 = new lib.tree();
	this.instance_18.parent = this;
	this.instance_18.setTransform(676,84,0.4895,0.4895);

	this.instance_19 = new lib.tree();
	this.instance_19.parent = this;
	this.instance_19.setTransform(619,84,0.4895,0.4895);

	this.instance_20 = new lib.tree();
	this.instance_20.parent = this;
	this.instance_20.setTransform(556,84,0.4895,0.4895);

	this.instance_21 = new lib.tree();
	this.instance_21.parent = this;
	this.instance_21.setTransform(498,84,0.4895,0.4895);

	this.instance_22 = new lib.tree();
	this.instance_22.parent = this;
	this.instance_22.setTransform(431,84,0.4895,0.4895);

	this.instance_23 = new lib.tree();
	this.instance_23.parent = this;
	this.instance_23.setTransform(372,84,0.4895,0.4895);

	this.instance_24 = new lib.tree();
	this.instance_24.parent = this;
	this.instance_24.setTransform(309,84,0.4895,0.4895);

	this.instance_25 = new lib.tree();
	this.instance_25.parent = this;
	this.instance_25.setTransform(252,84,0.4895,0.4895);

	this.instance_26 = new lib.tree();
	this.instance_26.parent = this;
	this.instance_26.setTransform(188,84,0.4895,0.4895);

	this.instance_27 = new lib.tree();
	this.instance_27.parent = this;
	this.instance_27.setTransform(900,4,0.4895,0.4895);

	this.instance_28 = new lib.tree();
	this.instance_28.parent = this;
	this.instance_28.setTransform(842,4,0.4895,0.4895);

	this.instance_29 = new lib.tree();
	this.instance_29.parent = this;
	this.instance_29.setTransform(779,4,0.4895,0.4895);

	this.instance_30 = new lib.tree();
	this.instance_30.parent = this;
	this.instance_30.setTransform(722,4,0.4895,0.4895);

	this.instance_31 = new lib.tree();
	this.instance_31.parent = this;
	this.instance_31.setTransform(656,4,0.4895,0.4895);

	this.instance_32 = new lib.tree();
	this.instance_32.parent = this;
	this.instance_32.setTransform(599,4,0.4895,0.4895);

	this.instance_33 = new lib.tree();
	this.instance_33.parent = this;
	this.instance_33.setTransform(536,4,0.4895,0.4895);

	this.instance_34 = new lib.tree();
	this.instance_34.parent = this;
	this.instance_34.setTransform(478,4,0.4895,0.4895);

	this.instance_35 = new lib.tree();
	this.instance_35.parent = this;
	this.instance_35.setTransform(411,4,0.4895,0.4895);

	this.instance_36 = new lib.tree();
	this.instance_36.parent = this;
	this.instance_36.setTransform(352,4,0.4895,0.4895);

	this.instance_37 = new lib.tree();
	this.instance_37.parent = this;
	this.instance_37.setTransform(289,4,0.4895,0.4895);

	this.instance_38 = new lib.tree();
	this.instance_38.parent = this;
	this.instance_38.setTransform(232,4,0.4895,0.4895);

	this.instance_39 = new lib.tree();
	this.instance_39.parent = this;
	this.instance_39.setTransform(110,4,0.4895,0.4895);

	this.instance_40 = new lib.tree();
	this.instance_40.parent = this;
	this.instance_40.setTransform(168,4,0.4895,0.4895);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9}]}).wait(89));

	// bg
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#E379F3","#00F2E5"],[0,1],-0.1,76,-0.1,-76).s().p("EhKZAL4IAA3vMCUzAAAIAAXvg");
	this.shape_11.setTransform(475.8,75.95);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(465,73.1,498.6,82.9);
// library properties:
lib.properties = {
	id: '80426C3544DD4D8E928F872AE0907B0E',
	width: 952,
	height: 151,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/WHH_podcast_animated_v9_atlas_.png", id:"WHH_podcast_animated_v9_atlas_"},
		{src:"sounds/WoS_WhoHaHa_30secSpot_v3.mp3", id:"WoS_WhoHaHa_30secSpot_v3"}
	],
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
an.compositions['80426C3544DD4D8E928F872AE0907B0E'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
