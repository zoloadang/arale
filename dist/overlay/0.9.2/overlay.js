define("#overlay/0.9.2/overlay",["$","position","iframe-shim","widget"],function(a,b,c){function i(a){return d.contains(document.documentElement,a)}var d=a("$"),e=a("position"),f=a("iframe-shim"),g=a("widget"),h=g.extend({attrs:{width:"",height:"",zIndex:10,id:"",className:"",style:{},parentNode:document.body,align:{selfXY:[0,0],baseElement:e.VIEWPORT,baseXY:[0,0]}},setup:function(){this._setupShim()},_setupShim:function(){var a=new f(this.element);this.before("show",a.sync,a),this.after("hide",a.sync,a),this.on("change:width change:heightchange:zIndex change:id change:positionchange:className change:style",a.sync,a)},render:function(){return h.superclass.render.call(this),this._setPosition(),this},_setPosition:function(a){if(!i(this.element[0]))return;a||(a=this.get("align"));var b=this.element.is(":hidden");return b&&this.element.css({visibility:"hidden",display:"block"}),e.pin({element:this.element,x:a.selfXY[0],y:a.selfXY[1]},{element:a.baseElement,x:a.baseXY[0],y:a.baseXY[1]}),b&&this.element.css({visibility:"",display:""}),this},show:function(){return this.element.show(),this},hide:function(){return this.element.hide(),this},_onChangeWidth:function(a){this.element.css("width",a)},_onChangeHeight:function(a){this.element.css("height",a)},_onChangeZIndex:function(a){this.element.css("zIndex",a)},_onChangeId:function(a){a&&this.element.attr("id",a)},_onChangeClassName:function(a,b){this.element.removeClass(b).addClass(a)},_onChangeStyle:function(a){this.element.css(a)},_onChangePosition:function(a){this._setPosition(a)}});c.exports=h});