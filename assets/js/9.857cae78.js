(window.webpackJsonp=window.webpackJsonp||[]).push([[9,12],{145:function(t,a,r){},147:function(t,a,r){"use strict";var n=r(3),s=r(34)(6),e="findIndex",o=!0;e in[]&&Array(1)[e](function(){o=!1}),n(n.P+n.F*o,"Array",{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(83)(e)},148:function(t,a,r){"use strict";var n=r(10),s=r(3),e=r(18),o=r(84),i=r(85),l=r(17),c=r(87),f=r(86);s(s.S+s.F*!r(52)(function(t){Array.from(t)}),"Array",{from:function(t){var a,r,s,u,p=e(t),m="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,h=void 0!==d,_=0,y=f(p);if(h&&(d=n(d,v>2?arguments[2]:void 0,2)),null==y||m==Array&&i(y))for(r=new m(a=l(p.length));a>_;_++)c(r,_,h?d(p[_],_):p[_]);else for(u=y.call(p),r=new m;!(s=u.next()).done;_++)c(r,_,h?o(u,d,[s.value,_],!0):s.value);return r.length=_,r}})},149:function(t,a,r){"use strict";var n=r(145);r.n(n).a},151:function(t,a,r){"use strict";r.r(a);r(51),r(147),r(53),r(148);var n={props:{platforms:Array},computed:{normalizedPlaforms:function(){if(!this.platforms)return[];var t=Array.from(this.platforms),a=this.platforms.findIndex(function(t){return"iphone"===t.name}),r=this.platforms.findIndex(function(t){return"ipad"===t.name});if(-1===a||-1===r)return this.platforms;if(this.platforms[a].version===this.platforms[r].version){var n=this.platforms[a].since;t[a]={name:"ios",pretty_name:"iOS",since:n},t.splice(r,1)}return t}},methods:{imageForPlatform:function(t){switch(t){case"android":return"/android-logo.png";case"ios":return"/apple-logo.png";case"iphone":return"/iphone-logo.png";case"ipad":return"/ipad-logo.png";case"windowsphone":return"/windows-logo.png"}}}},s=(r(149),r(14)),e=Object(s.a)(n,function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"proxy-meta availability"},[r("div",{staticClass:"proxy-meta-name"},[t._v("Availability")]),t._v(" "),r("div",{staticClass:"proxy-meta-value available-platforms"},t._l(t.normalizedPlaforms,function(a){return r("div",{staticClass:"platform-item"},[r("img",{staticClass:"platform-logo",attrs:{src:t.$withBase(t.imageForPlatform(a.name))}}),t._v(" "),r("span",[t._v(t._s(a.since))])])}),0)])},[],!1,null,null,null);e.options.__file="AvailabilityInfo.vue";a.default=e.exports},251:function(t,a,r){"use strict";r.r(a);var n={components:{AvailabilityInfo:r(151).default},props:{constants:{type:Array,default:function(){return[]}}}},s=r(14),e=Object(s.a)(n,function(){var t=this,a=t.$createElement,r=t._self._c||a;return t.constants.length?r("div",{staticClass:"member-list"},[t._m(0),t._v(" "),t._l(t.constants,function(a,n){return[r("div",{staticClass:"member-header"},[r("h4",{attrs:{id:a.name.toLowerCase()}},[r("a",{staticClass:"header-anchor",attrs:{href:"#"+a.name.toLowerCase()}},[t._v("#")]),t._v(" "+t._s(a.name)+" "),a.deprecated?r("Badge",{attrs:{text:"DEPRECATED",type:"warn"}}):t._e()],1),t._v(" "),r("AvailabilityInfo",{attrs:{platforms:a.platforms}})],1),t._v(" "),r("DeprecationAlert",{attrs:{deprecated:a.deprecated}}),t._v(" "),r("p",{domProps:{innerHTML:t._s(a.summary)}}),t._v(" "),r("p",{domProps:{innerHTML:t._s(a.description)}}),t._v(" "),n<t.constants.length-1?r("hr"):t._e()]})],2):t._e()},[function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"constants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constants"}},[this._v("#")]),this._v(" Constants\n  ")])}],!1,null,null,null);e.options.__file="ConstantList.vue";a.default=e.exports}}]);