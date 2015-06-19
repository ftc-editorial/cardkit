"use strict";angular.module("cardkitApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","colorpicker.module","draganddrop","ui.router"]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("index",{url:"/",controller:"MainCtrl",templateUrl:"views/main.html",resolve:{themeConfig:["themeConfigProvider",function(a){return a}]}})}]),angular.module("cardkitApp").controller("MainCtrl",["$scope","saveSvgAsPng","themeConfig",function(a,b,c){function d(){a.defaultConfig=angular.copy(a.config),a.$broadcast("resetSvg")}function e(b,c){var d=new FileReader;d.onload=function(){a.config.svg.elements[c].src=d.result,a.$apply()},d.readAsDataURL(b)}function f(a){return a.stopPropagation(),a.preventDefault(),a.dataTransfer||null}a.config={sizes:[{name:"Twitter",width:650,height:320,gridSize:16.25},{name:"Facebook",width:800,height:370,gridSize:20}],themes:c,output:{scale:2,editable:{scale:!0}},svg:{canvas:{height:function(){return a.size.height},width:function(){return a.size.width},gridSize:function(){return a.size.gridSize}},elements:[{name:"Background Colour",type:"rect",height:function(){return a.size.height},width:function(){return a.size.width},fill:function(){return a.theme.background},editable:{fill:"picker"}},{name:"Image",type:"image",width:600,height:function(){return this.width},src:"",opacity:1,x:"0%",y:"0%",preserveAspectRatio:"xMinYMin meet",draggable:!0,defaultFilter:"",editable:{src:!0,width:!0,opacity:!0,filters:["Sepia","Grayscale","Saturate","Invert","Blur"]}},{name:"Cross Reference Background",type:"rect",height:function(){return 3*a.size.gridSize},width:function(){return a.size.width},y:function(){return a.size.height-this.height()},fill:function(){return a.theme.xrefBackground},editable:{fill:"picker"}},{name:"Logo",type:"image",width:function(){return 2*a.size.gridSize},height:function(){return 2*a.size.gridSize},src:function(){return a.theme.logoSrc},opacity:1,x:function(){return a.size.width-3*a.size.gridSize},y:function(){var b=a.size.gridSize/2;return a.size.height-(this.height()+b)},preserveAspectRatio:"xMinYMin meet",editable:{src:!0,width:!0,opacity:!0},draggable:!1},{name:"Cross Reference Text",type:"text",text:"Read more at: Insert name here",fill:function(){return a.theme.xref},fontSize:22,fontFamily:function(){return a.theme.xrefFont},textAnchor:"start",x:function(){return a.size.gridSize},y:function(){return a.size.height-a.size.gridSize},fontWeight:500,draggable:!0,editable:{text:!0,fontSize:{"Small (16px)":16,"Large (18px)":18},fill:"picker",textAnchor:!0}},{name:"Credit",type:"text",text:"Credit: Insert name here",fill:function(){return a.theme.quote},fontSize:18,fontFamily:function(){return a.theme.creditFont},textAnchor:"start",textTransform:"uppercase",x:15,y:250,fontWeight:500,draggable:!0,editable:{text:!0,fontSize:{"Small (16px)":16,"Large (18px)":18},fill:"picker",textAnchor:!0}},{name:"Headline",type:"text",text:"Edit this text, and drag it around.\n\nYou can upload your own background image,\nlogo, and change the colour of the text too.",fill:function(){return a.theme.quote},fontSize:32,fontFamily:function(){return a.theme.headlineFont},textAnchor:"start",x:15,y:45,fontWeight:600,draggable:!0,editable:{text:!0,fill:"picker",textAnchor:!0,fontSize:{"Small (26px)":26,"Medium (32px)":32,"Large (40px)":40,"X-Large (50px)":50}}}]}},"undefined"!=typeof a.config.themes&&(a.theme=a.config.themes.length>1?null:a.config.themes[0]),a.size=a.config.sizes.length>1?null:a.config.sizes[0],a.$watch("theme",function(){a.$broadcast("changeTheme"),d()}),a.$watch("size",function(){a.$broadcast("changeSize"),d()}),a.resetSvg=function(){a.config.svg=a.defaultConfig.svg,d()},a.onDrop=function(a,b,c){var d=f(b);e(d.files[0],c)},a.fileChanged=function(a){e(angular.element(a)[0].files[0],angular.element(a).data("key"))},a.removeImage=function(b){a.config.svg.elements[b].src=""},a.downloadSvg=function(){b(document.getElementById("snap-svg"),"image.png",{scale:a.config.output.scale})}}]),angular.module("cardkitApp").service("snapSVG",["$window",function(a){return a.Snap}]),angular.module("cardkitApp").directive("snapSvg",["snapSVG",function(a){return{template:'<svg id="snap-svg"></svg>',restrict:"E",scope:{svgConfig:"=",svgTheme:"="},link:function(b,c){function d(a){var b={};for(var c in a)switch(typeof a[c]){case"function":b[c]=a[c]();break;default:b[c]=a[c]}return b}function e(a,b){for(var c="",d=document.styleSheets,e=0;e<d.length;e++)if(f(d[e].href))console.warn("Cannot include styles from other hosts: "+d[e].href);else{var g=d[e].cssRules;if(null!==g)for(var h=0;h<g.length;h++){var i=g[h];if("undefined"!=typeof i.style)try{var j=a.querySelectorAll(i.selectorText);if(j.length>0){var k=b?b(i.selectorText):i.selectorText;c+=k+" { "+i.style.cssText+" }\n"}else i.cssText.match(/^@font-face/)&&(c+=i.cssText+"\n")}catch(l){}}}return c}function f(a){return a&&0===a.lastIndexOf("http",0)&&-1===a.lastIndexOf(window.location.host)}function g(){r={Sepia:m.paper.filter(a.filter.sepia(1)).attr({width:4*p.width+"px",height:4*p.height+"px"}),Grayscale:m.paper.filter(a.filter.grayscale(1)).attr({width:4*p.width+"px",height:4*p.height+"px"}),Saturate:m.paper.filter(a.filter.saturate(.5)).attr({width:4*p.width+"px",height:4*p.height+"px"}),Invert:m.paper.filter(a.filter.invert(1)).attr({width:4*p.width+"px",height:4*p.height+"px"}),Blur:m.paper.filter(a.filter.blur(4,4)).attr({width:4*p.width+"px",height:4*p.height+"px"})}}function h(a){var b;switch(a=d(a),a.type){case"text":b=m.text(a.x,a.y);break;case"image":b=m.image(a.src,a.x,a.y,a.width,a.height);break;case"rect":b=m.rect(a.x,a.y,a.width,a.height,0,0);break;case"circle":break;case"group":var c;b="",angular.forEach(a.elements,function(a,d){c=h(a),i(c,a),0===d?b=m.group(c):b.group(c)});break;default:return!1}return"undefined"!=typeof a.defaultFilter&&(""!==a.defaultFilter?b.attr({filter:r[a.defaultFilter]}):b.attr({filter:""})),b}function i(a,b){var c=d(b),e=c;return delete e.$$hashKey,"text"===e.type&&(e.text=e.text.split("\n")),e.textTransform&&(a.node.style.textTransform=e.textTransform),a.attr(e),"text"===e.type&&a.selectAll("tspan").forEach(function(a,b){a.attr({x:e.x,y:e.y+e.fontSize*b})}),a}function j(){var a=d(b.svgConfig.canvas);m.attr({viewBox:"0, 0, "+a.width+", "+a.height,"data-width":a.width,"data-height":a.height}),i(q,b.svgConfig.canvas);var c;angular.forEach(b.svgConfig.elements,function(a,d){if("undefined"!=typeof t[d]){if(s=t[d],"image"===s.type){c=s.matrix;var e=h(b.svgConfig.elements[d]);if(e===!1)return;s.after(e),e.transform(c),s.remove(),s=e,t[d]=s}if("g"===s.type){if(c=s.matrix,s.remove(),s=h(b.svgConfig.elements[d]),s===!1)return;s.transform(c),t[d]=s}}else{if(s=h(a),s===!1)return;t.push(s)}var f=a;delete f.$$hashKey,i(s,a),a.draggable===!0&&(s.undrag(),s.altDrag())})}function k(){var a=m.selectAll("*");angular.forEach(a,function(a){a.transform("")})}var l=angular.fromJson(b.svgConfig);a.plugin(function(a,c){c.prototype.altDrag=function(){return this.drag(e,d,f),this};var d=function(){this.data("ot",this.transform().local)},e=function(a,c){var d,e,f=this.transform().diffMatrix.invert();f.e=f.f=0,d=f.x(a,c),e=f.y(a,c);var g=b.svgConfig.canvas.gridSize();d=Math.round(d/g)*g,e=Math.round(e/g)*g,this.transform(this.data("ot")+"t"+[d,e])},f=function(){}});var m=a(c[0].children[0]);m.attr({height:"100%",width:"100%"});var n=m.paper.el("style",{type:"text/css"}),o=e(m.node);n.node.innerHTML=o,n.toDefs();var p=d(l.canvas),q=m.rect(0,0,p.width,p.height,0,0).attr(p);p.draggable===!0&&q.altDrag();var r;g();var s,t=[];b.$watch("svgConfig",j,!0),b.$on("changeTheme",j),b.$on("changeSize",j),b.$on("changeSize",g),b.$on("resetSvg",k)}}}]),angular.module("cardkitApp").service("saveSvgAsPng",["$window",function(a){return a.saveSvgAsPng}]),angular.module("cardkitApp").directive("fixedScroll",["$window",function(a){return function(b,c){var d=c.offset().top-20;angular.element(a).bind("scroll",function(){angular.element(a).scrollTop()>=d?c.addClass("fixed"):c.removeClass("fixed")})}}]),angular.module("cardkitApp").provider("themeConfigProvider",function(){return{$get:["$http","$q",function(a,b){var c=a.get("themes.config.json")["catch"](function(a){return 404===a.status?[]:b.reject(a)});return b.all([c]).then(function(a){return a[0].data})}]}}),angular.module("cardkitApp").directive("textEditor",function(){return{template:'<div><label>Text</label><textarea ng-model="element.text" class="form-control"></textarea></div>',restrict:"E",replace:!0,scope:{element:"="}}}),angular.module("cardkitApp").directive("fillEditor",function(){return{template:'<div><label>Fill Color</label><input colorpicker type="text" ng-model="element.fill" ng-if="field == \'picker\'" class="form-control" /><select ng-model="element.fill" ng-options="name for (name, value) in field" class="form-control" ng-if="field != \'picker\'"><option value="">-- Select a Fill Color --</option></select></div>',restrict:"E",scope:{field:"=",element:"="}}}),angular.module("cardkitApp").directive("fontsizeEditor",function(){return{template:'<div><label>Font Size</label><select ng-model="element.fontSize" ng-options="name for (name, value) in field" class="form-control"><option value="">-- Select a Font Size --</option></select></div>',restrict:"E",replace:!0,scope:{element:"=",field:"="}}}),angular.module("cardkitApp").directive("fontfamilyEditor",function(){return{template:'<div><label>Font Family</label><select ng-model="element.fontFamily" ng-options="name for (name, value) in field" class="form-control"><option value="">-- Select a Font Family --</option></select></div>',restrict:"E",replace:!0,scope:{element:"=",field:"="}}}),angular.module("cardkitApp").directive("imageEditor",function(){return{template:'<div><label>Image</label><div class="dropzone" drop="onDrop($data, $event, key)" drop-effect="copy" drop-accept="\'Files\'" drag-over-class="drag-over-accept"><div class="fileInputWrapper button"><span>or select an image</span><input onchange="angular.element(this).scope().$parent.fileChanged(this, event)" data-key="{{key}}" type="file" accept="image/*" /></div></div><button ng-show="config.elements[key].src !== \'\'" ng-click="removeImage(key)" class="button button-danger"><i class="fa fa-times"></i> Remove Image</button></div>',restrict:"E",scope:{key:"=",onDrop:"=",removeImage:"="}}}),angular.module("cardkitApp").directive("sizeEditor",function(){return{template:'<div><label>Size</label><input type="range" min="10" max="1000" ng-model="element.width" /></div>',restrict:"E",replace:!0,scope:{element:"="}}}),angular.module("cardkitApp").directive("textanchorEditor",function(){return{template:'<div><label>Text Anchor</label><select ng-model="element.textAnchor" class="form-control"><option value="">-- Select a Text Anchor --</option><option value="start">Start</option><option value="middle">Middle</option><option value="end">End</option></select></div>',restrict:"E",replace:!0,scope:{element:"="}}}),angular.module("cardkitApp").directive("opacityEditor",function(){return{template:'<div><label>Opacity</label><input type="range" min="0" max="1" ng-model="element.opacity" step="0.05" /></div>',restrict:"E",replace:!0,scope:{element:"=element"}}}),angular.module("cardkitApp").directive("filterEditor",function(){return{template:'<div><label>Filter</label><select ng-model="element.defaultFilter" ng-options="filter for filter in filters" class="form-control"><option value="">No filter</option></select></div>',replace:!0,restrict:"E",scope:{element:"=",filters:"="}}});