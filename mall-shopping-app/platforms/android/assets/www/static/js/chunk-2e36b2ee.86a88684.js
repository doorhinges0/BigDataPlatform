(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e36b2ee"],{"0a26":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("ad06"),s=n("9884"),o=n("ea8e"),r=function(t){var e=t.parent,n=t.bem,r=t.role;return{mixins:[Object(s["a"])(e)],props:{name:null,value:null,disabled:Boolean,iconSize:[Number,String],checkedColor:String,labelPosition:String,labelDisabled:Boolean,shape:{type:String,default:"round"},bindGroup:{type:Boolean,default:!0}},computed:{disableBindRelation:function(){return!this.bindGroup},isDisabled:function(){return this.parent&&this.parent.disabled||this.disabled},iconStyle:function(){var t=this.checkedColor||this.parent&&this.parent.checkedColor;if(t&&this.checked&&!this.isDisabled)return{borderColor:t,backgroundColor:t}},tabindex:function(){return this.isDisabled||"radio"===r&&!this.checked?-1:0}},methods:{onClick:function(t){var e=this.$refs.label,n=t.target,i=e&&(e===n||e.contains(n));this.isDisabled||i&&this.labelDisabled||this.toggle(),this.$emit("click",t)}},render:function(){var t=arguments[0],e=this.slots,s=this.checked,a=e("icon",{checked:s})||t(i["a"],{attrs:{name:"success"},style:this.iconStyle}),c=e()&&t("span",{ref:"label",class:n("label",[this.labelPosition,{disabled:this.isDisabled}])},[e()]),l=this.iconSize||this.parent&&this.parent.iconSize,u=[t("div",{class:n("icon",[this.shape,{disabled:this.isDisabled,checked:s}]),style:{fontSize:Object(o["a"])(l)}},[a])];return"left"===this.labelPosition?u.unshift(c):u.push(c),t("div",{attrs:{role:r,tabindex:this.tabindex,"aria-checked":String(this.checked)},class:n(),on:{click:this.onClick}},[u])}}}},1146:function(t,e,n){},2381:function(t,e,n){},"32d7":function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o}));var i=n("a142");function s(){return!i["d"]&&/android/.test(navigator.userAgent.toLowerCase())}function o(){return!i["d"]&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},"417e":function(t,e,n){"use strict";var i=n("d282"),s=n("0a26"),o=Object(i["a"])("checkbox"),r=o[0],a=o[1];e["a"]=r({mixins:[Object(s["a"])({bem:a,role:"checkbox",parent:"vanCheckbox"})],computed:{checked:{get:function(){return this.parent?-1!==this.parent.value.indexOf(this.name):this.value},set:function(t){this.parent?this.setParentValue(t):this.$emit("input",t)}}},watch:{value:function(t){this.$emit("change",t)}},methods:{toggle:function(t){var e=this;void 0===t&&(t=!this.checked),clearTimeout(this.toggleTask),this.toggleTask=setTimeout((function(){e.checked=t}))},setParentValue:function(t){var e=this.parent,n=e.value.slice();if(t){if(e.max&&n.length>=e.max)return;-1===n.indexOf(this.name)&&(n.push(this.name),e.$emit("input",n))}else{var i=n.indexOf(this.name);-1!==i&&(n.splice(i,1),e.$emit("input",n))}}}})},"453b":function(t,e,n){"use strict";var i=n("d282"),s=n("0b33"),o=n("5e46"),r=n("565f"),a=n("b650"),c=n("b1d2"),l=n("68ed"),u=n("417e"),h=Object(i["a"])("coupon"),d=h[0],f=h[1],p=h[2];function b(t){var e=new Date(1e3*t);return e.getFullYear()+"."+Object(l["b"])(e.getMonth()+1)+"."+Object(l["b"])(e.getDate())}function g(t){return(t/10).toFixed(t%10===0?0:1)}function m(t){return(t/100).toFixed(t%100===0?0:t%10===0?1:2)}var v=d({props:{coupon:Object,chosen:Boolean,disabled:Boolean,currency:{type:String,default:"¥"}},computed:{validPeriod:function(){var t=this.coupon,e=t.startAt,n=t.endAt;return p("valid")+"："+b(e)+" - "+b(n)},faceAmount:function(){var t=this.coupon;return t.valueDesc?t.valueDesc+"<span>"+(t.unitDesc||"")+"</span>":t.denominations?"<span>"+this.currency+"</span> "+m(this.coupon.denominations):t.discount?p("discount",g(this.coupon.discount)):""},conditionMessage:function(){var t=m(this.coupon.originCondition);return"0"===t?p("unlimited"):p("condition",t)}},render:function(){var t=arguments[0],e=this.coupon,n=this.disabled,i=n&&e.reason||e.description;return t("div",{class:f({disabled:n})},[t("div",{class:f("content")},[t("div",{class:f("head")},[t("h2",{class:f("amount"),domProps:{innerHTML:this.faceAmount}}),t("p",[this.coupon.condition||this.conditionMessage])]),t("div",{class:f("body")},[t("h2",{class:f("name")},[e.name]),t("p",[this.validPeriod]),this.chosen&&t(u["a"],{attrs:{value:!0,"checked-color":c["k"]},class:f("corner")})])]),i&&t("p",{class:f("description")},[i])])}}),y=Object(i["a"])("coupon-list"),k=y[0],x=y[1],C=y[2],S="https://img.yzcdn.cn/vant/coupon-empty.png";e["a"]=k({model:{prop:"code"},props:{code:String,closeButtonText:String,inputPlaceholder:String,enabledTitle:String,disabledTitle:String,exchangeButtonText:String,exchangeButtonLoading:Boolean,exchangeButtonDisabled:Boolean,exchangeMinLength:{type:Number,default:1},chosenCoupon:{type:Number,default:-1},coupons:{type:Array,default:function(){return[]}},disabledCoupons:{type:Array,default:function(){return[]}},displayedCouponIndex:{type:Number,default:-1},showExchangeBar:{type:Boolean,default:!0},showCloseButton:{type:Boolean,default:!0},currency:{type:String,default:"¥"},emptyImage:{type:String,default:S}},data:function(){return{tab:0,winHeight:window.innerHeight,currentCode:this.code||""}},computed:{buttonDisabled:function(){return!this.exchangeButtonLoading&&(this.exchangeButtonDisabled||!this.currentCode||this.currentCode.length<this.exchangeMinLength)},listStyle:function(){return{height:this.winHeight-(this.showExchangeBar?140:94)+"px"}}},watch:{code:function(t){this.currentCode=t},currentCode:function(t){this.$emit("input",t)},displayedCouponIndex:"scrollToShowCoupon"},mounted:function(){this.scrollToShowCoupon(this.displayedCouponIndex)},methods:{onClickExchangeButton:function(){this.$emit("exchange",this.currentCode),this.code||(this.currentCode="")},scrollToShowCoupon:function(t){var e=this;-1!==t&&this.$nextTick((function(){var n=e.$refs,i=n.card,s=n.list;s&&i&&i[t]&&(s.scrollTop=i[t].$el.offsetTop-100)}))},renderEmpty:function(){var t=this.$createElement;return t("div",{class:x("empty")},[t("img",{attrs:{src:this.emptyImage}}),t("p",[C("empty")])])},renderExchangeButton:function(){var t=this.$createElement;return t(a["a"],{attrs:{size:"small",type:"danger",text:this.exchangeButtonText||C("exchange"),loading:this.exchangeButtonLoading,disabled:this.buttonDisabled},class:x("exchange"),on:{click:this.onClickExchangeButton}})}},render:function(){var t=this,e=arguments[0],n=this.coupons,i=this.disabledCoupons,c=(this.enabledTitle||C("enable"))+" ("+n.length+")",l=(this.disabledTitle||C("disabled"))+" ("+i.length+")",u=this.showExchangeBar&&e(r["a"],{attrs:{clearable:!0,border:!1,placeholder:this.inputPlaceholder||C("placeholder"),maxlength:"20"},class:x("field"),scopedSlots:{button:this.renderExchangeButton},model:{value:t.currentCode,callback:function(e){t.currentCode=e}}}),h=function(e){return function(){return t.$emit("change",e)}},d=e(s["a"],{attrs:{title:c}},[e("div",{class:x("list"),style:this.listStyle},[n.map((function(n,i){return e(v,{ref:"card",key:n.id,attrs:{coupon:n,currency:t.currency,chosen:i===t.chosenCoupon},nativeOn:{click:h(i)}})})),!n.length&&this.renderEmpty()])]),f=e(s["a"],{attrs:{title:l}},[e("div",{class:x("list"),style:this.listStyle},[i.map((function(n){return e(v,{attrs:{disabled:!0,coupon:n,currency:t.currency},key:n.id})})),!i.length&&this.renderEmpty()])]);return e("div",{class:x()},[u,e(o["a"],{class:x("tab"),attrs:{"line-width":120},model:{value:t.tab,callback:function(e){t.tab=e}}},[d,f]),e(a["a"],{directives:[{name:"show",value:this.showCloseButton}],attrs:{size:"large",text:this.closeButtonText||C("close")},class:x("close"),on:{click:h(-1)}})])}})},"54a3":function(t,e,n){},"565f":function(t,e,n){"use strict";var i=n("2638"),s=n.n(i),o=n("c31d"),r=n("ad06"),a=n("7744"),c=n("dfaf"),l=n("1325"),u=n("a8fa"),h=n("d282"),d=n("a142"),f=n("ea8e"),p=Object(h["a"])("field"),b=p[0],g=p[1];e["a"]=b({inheritAttrs:!1,props:Object(o["a"])({},c["a"],{error:Boolean,readonly:Boolean,autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,labelClass:null,labelWidth:[Number,String],labelAlign:String,inputAlign:String,errorMessage:String,errorMessageAlign:String,type:{type:String,default:"text"}}),data:function(){return{focused:!1}},watch:{value:function(){this.$nextTick(this.adjustSize)}},mounted:function(){this.format(),this.$nextTick(this.adjustSize)},computed:{showClear:function(){return this.clearable&&this.focused&&""!==this.value&&Object(d["b"])(this.value)&&!this.readonly},listeners:function(){var t=Object(o["a"])({},this.$listeners,{input:this.onInput,keypress:this.onKeypress,focus:this.onFocus,blur:this.onBlur});return delete t.click,t},labelStyle:function(){var t=this.labelWidth;if(t)return{width:Object(f["a"])(t)}}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},format:function(t){if(void 0===t&&(t=this.$refs.input),t){var e=t,n=e.value,i=this.$attrs.maxlength;return"number"===this.type&&Object(d["b"])(i)&&n.length>i&&(n=n.slice(0,i),t.value=n),n}},onInput:function(t){t.target.composing||this.$emit("input",this.format(t.target))},onFocus:function(t){this.focused=!0,this.$emit("focus",t),this.readonly&&this.blur()},onBlur:function(t){this.focused=!1,this.$emit("blur",t),Object(u["a"])()},onClick:function(t){this.$emit("click",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){Object(l["c"])(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){if("number"===this.type){var e=t.keyCode,n=-1===String(this.value).indexOf("."),i=e>=48&&e<=57||46===e&&n||45===e;i||Object(l["c"])(t)}"search"===this.type&&13===t.keyCode&&this.blur(),this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if(Object(d["c"])(this.autosize)){var n=this.autosize,i=n.maxHeight,s=n.minHeight;i&&(e=Math.min(e,i)),s&&(e=Math.max(e,s))}e&&(t.style.height=e+"px")}},renderInput:function(){var t=this.$createElement,e=this.slots("input");if(e)return t("div",{class:g("control",this.inputAlign)},[e]);var n={ref:"input",class:g("control",this.inputAlign),domProps:{value:this.value},attrs:Object(o["a"])({},this.$attrs,{readonly:this.readonly}),on:this.listeners,directives:[{name:"model",value:this.value}]};return"textarea"===this.type?t("textarea",s()([{},n])):t("input",s()([{attrs:{type:this.type}},n]))},renderLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:g("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(r["a"],{attrs:{name:this.leftIcon}})])},renderRightIcon:function(){var t=this.$createElement,e=this.slots,n=e("right-icon")||this.rightIcon;if(n)return t("div",{class:g("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(r["a"],{attrs:{name:this.rightIcon}})])}},render:function(){var t,e=arguments[0],n=this.slots,i=this.labelAlign,s={icon:this.renderLeftIcon};return n("label")&&(s.title=function(){return n("label")}),e(a["a"],{attrs:{icon:this.leftIcon,size:this.size,title:this.label,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,titleClass:[g("label",i),this.labelClass],arrowDirection:this.arrowDirection},class:g((t={error:this.error,disabled:this.$attrs.disabled},t["label-"+i]=i,t["min-height"]="textarea"===this.type&&!this.autosize,t)),scopedSlots:s,on:{click:this.onClick}},[e("div",{class:g("body")},[this.renderInput(),this.showClear&&e(r["a"],{attrs:{name:"clear"},class:g("clear"),on:{touchstart:this.onClear}}),this.renderRightIcon(),n("button")&&e("div",{class:g("button")},[n("button")])]),this.errorMessage&&e("div",{class:g("error-message",this.errorMessageAlign)},[this.errorMessage])])}})},8238:function(t,e,n){},a8fa:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("32d7"),s=n("a8c1"),o=Object(i["b"])();function r(){o&&Object(s["e"])(Object(s["b"])())}},ac3c:function(t,e,n){"use strict";var i=n("2638"),s=n.n(i),o=n("d282"),r=n("ba31"),a=n("7744"),c=Object(o["a"])("coupon-cell"),l=c[0],u=c[1],h=c[2];function d(t){var e=t.coupons,n=t.chosenCoupon,i=t.currency,s=e[n];if(s){var o=s.denominations||s.value;return"-"+i+(o/100).toFixed(2)}return 0===e.length?h("tips"):h("count",e.length)}function f(t,e,n,i){var o=e.coupons[e.chosenCoupon]?"van-coupon-cell--selected":"",c=d(e);return t(a["a"],s()([{class:u(),attrs:{value:c,title:e.title||h("title"),border:e.border,isLink:e.editable,valueClass:o}},Object(r["b"])(i,!0)]))}f.model={prop:"chosenCoupon"},f.props={title:String,coupons:{type:Array,default:function(){return[]}},currency:{type:String,default:"¥"},border:{type:Boolean,default:!0},editable:{type:Boolean,default:!0},chosenCoupon:{type:Number,default:-1}},e["a"]=l(f)},b76c:function(t,e,n){"use strict";n("68ef"),n("09fe"),n("ed61")},e324:function(t,e,n){"use strict";n("68ef"),n("f319"),n("b807"),n("ae9e"),n("09fe"),n("1146"),n("2381"),n("54a3"),n("8238")},ed61:function(t,e,n){}}]);