(window.webpackJsonp=window.webpackJsonp||[]).push([[327],{561:function(e,t,n){"use strict";n.r(t);var a=n(14),r=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-ui-android-drawerlayout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-android-drawerlayout","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.Android.DrawerLayout")]),e._v(" "),n("ProxySummary"),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v('DrawerLayout acts as a top-level container for window content that allows for interactive "drawer"\nviews to be pulled out from one or both vertical edges of the window.')]),e._v(" "),n("p",[e._v("As per the Android Design guide, any drawers positioned to the left/start should always contain\ncontent for navigating around the application, whereas any drawers positioned to the right/end\nshould always contain actions to take on the current content.")]),e._v(" "),n("p",[e._v("For design guidelines, see\n"),n("a",{attrs:{href:"https://developer.android.com/training/implementing-navigation/nav-drawer.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Design Guidelines: DrawerLayout"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),n("h3",{attrs:{id:"simple-drawerlayout"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-drawerlayout","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple DrawerLayout")]),e._v(" "),n("p",[e._v("The following code shows a simple drawer-layout usage.")]),e._v(" "),n("pre",[n("code",[e._v("var win = Ti.UI.createWindow();\n\nvar leftView = Ti.UI.createView({ backgroundColor:'red' });\nvar centerView = Ti.UI.createView({ backgroundColor:'yellow' });\nvar rightView = Ti.UI.createView({ backgroundColor:'orange' });\n\nvar drawer = Ti.UI.Android.createDrawerLayout({\n    leftView: leftView,\n    centerView: centerView,\n    rightView: rightView\n});\nvar btn = Ti.UI.createButton({ title: 'RIGHT' });\n\nbtn.addEventListener('click', function() {\n    drawer.toggleRight();\n});\n\ncenterView.add(btn);\n\nwin.addEventListener('open', function(){\n    var activity = win.getActivity(),\n        actionBar = activity.getActionBar();\n\n    if (actionBar) {\n        actionBar.displayHomeAsUp = true;\n        actionBar.onHomeIconItemSelected = function() {\n            drawer.toggleLeft();\n        };\n    }\n});\n\nwin.add(drawer);\nwin.open();\n")])]),e._v(" "),n("ApiDocs")],1)},[],!1,null,null,null);r.options.__file="drawerlayout.md";t.default=r.exports}}]);