(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{165:function(t,e,a){},168:function(t,e,a){},206:function(t,e,a){"use strict";var i=a(165);a.n(i).a},210:function(t,e,a){"use strict";var i=a(168);a.n(i).a},243:function(t,e,a){"use strict";a.r(e);a(51);var i=a(0),s=a(197),n=a.n(s),o=a(25),r=(a(23),a(37),a(155),a(146));function c(t,e,a){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(o.a)(t.children||[])):i.push(t)});for(var s=0;s<i.length;s++){var n=i[s];if("page"===n.type&&n.path===decodeURIComponent(t.path))return i[s+a]}}var d={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,a=this.$page.frontmatter.prev;return!1===a?void 0:a?Object(r.l)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,c(t,e,-1))},next:function(){var t,e,a=this.$page.frontmatter.next;return!1===a?void 0:a?Object(r.l)(this.$site.pages,a,this.$route.path):(t=this.$page,e=this.sidebarItems,c(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,a=t.editLinks,i=t.docsDir,s=void 0===i?"":i,n=t.docsBranch,o=void 0===n?"master":n,c=t.docsRepo,d=void 0===c?e:c,l=Object(r.i)(this.$page.path);return r.a.test(l)?l+="README.md":l+=".md",d&&a?this.createEditLink(e,d,s,o,l):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,a,i,s){return/bitbucket.org/.test(t)?(r.j.test(e)?e:t).replace(r.a,"")+"/".concat(i)+(a?"/"+a.replace(r.a,""):"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(r.j.test(e)?e:"https://github.com/".concat(e)).replace(r.a,"")+"/edit/".concat(i)+(a?"/"+a.replace(r.a,""):"")+s}}},l=(a(206),a(14)),h=Object(l.a)(d,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[t._t("top"),t._v(" "),a("Content"),t._v(" "),a("div",{staticClass:"page-edit"},[t.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),a("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[t.prev?a("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?a("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?a("span",{staticClass:"next"},[t.next?a("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null);h.options.__file="Page.vue";var p=h.exports,u=a(204),v={components:{NavLink:a(195).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},f=(a(210),Object(l.a)(v,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),a("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),a("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return a("div",{key:i,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),a("Content",{staticClass:"custom"})],1)},[],!1,null,null,null));f.options.__file="Home.vue";var g=f.exports,_=a(202),m=a(203),b={components:{Home:g,Footer:u.a,Page:p,Sidebar:m.a,Navbar:_.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(r.m)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;n.a.configure({showSpinner:!1}),this.$router.beforeEach(function(t,e,a){t.path===e.path||i.a.component(t.name)||n.a.start(),a()}),this.$router.afterEach(function(){n.a.done(),t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},$=(a(200),a(201),Object(l.a)(b,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-docs-wrapper"},[a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1),t._v(" "),a("Footer")],1)},[],!1,null,null,null));$.options.__file="Layout.vue";e.default=$.exports}}]);