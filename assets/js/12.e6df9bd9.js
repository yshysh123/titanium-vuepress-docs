(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{145:function(r,t,a){},147:function(r,t,a){"use strict";var i=a(3),o=a(34)(6),n="findIndex",s=!0;n in[]&&Array(1)[n](function(){s=!1}),i(i.P+i.F*s,"Array",{findIndex:function(r){return o(this,r,arguments.length>1?arguments[1]:void 0)}}),a(83)(n)},148:function(r,t,a){"use strict";var i=a(10),o=a(3),n=a(18),s=a(84),e=a(85),l=a(17),f=a(87),c=a(86);o(o.S+o.F*!a(52)(function(r){Array.from(r)}),"Array",{from:function(r){var t,a,o,u,p=n(r),m="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,h=void 0!==d,w=0,y=c(p);if(h&&(d=i(d,v>2?arguments[2]:void 0,2)),null==y||m==Array&&e(y))for(a=new m(t=l(p.length));t>w;w++)f(a,w,h?d(p[w],w):p[w]);else for(u=y.call(p),a=new m;!(o=u.next()).done;w++)f(a,w,h?s(u,d,[o.value,w],!0):o.value);return a.length=w,a}})},149:function(r,t,a){"use strict";var i=a(145);a.n(i).a},151:function(r,t,a){"use strict";a.r(t);a(51),a(147),a(53),a(148);var i={props:{platforms:Array},computed:{normalizedPlaforms:function(){if(!this.platforms)return[];var r=Array.from(this.platforms),t=this.platforms.findIndex(function(r){return"iphone"===r.name}),a=this.platforms.findIndex(function(r){return"ipad"===r.name});if(-1===t||-1===a)return this.platforms;if(this.platforms[t].version===this.platforms[a].version){var i=this.platforms[t].since;r[t]={name:"ios",pretty_name:"iOS",since:i},r.splice(a,1)}return r}},methods:{imageForPlatform:function(r){switch(r){case"android":return"/android-logo.png";case"ios":return"/apple-logo.png";case"iphone":return"/iphone-logo.png";case"ipad":return"/ipad-logo.png";case"windowsphone":return"/windows-logo.png"}}}},o=(a(149),a(14)),n=Object(o.a)(i,function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("div",{staticClass:"proxy-meta availability"},[a("div",{staticClass:"proxy-meta-name"},[r._v("Availability")]),r._v(" "),a("div",{staticClass:"proxy-meta-value available-platforms"},r._l(r.normalizedPlaforms,function(t){return a("div",{staticClass:"platform-item"},[a("img",{staticClass:"platform-logo",attrs:{src:r.$withBase(r.imageForPlatform(t.name))}}),r._v(" "),a("span",[r._v(r._s(t.since))])])}),0)])},[],!1,null,null,null);n.options.__file="AvailabilityInfo.vue";t.default=n.exports}}]);