(window.webpackJsonp=window.webpackJsonp||[]).push([[316],{591:function(i,a,t){"use strict";t.r(a);var e=t(14),s=Object(e.a)({},function(){var i=this,a=i.$createElement,t=i._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[t("h1",{attrs:{id:"titanium-platform-displaycaps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#titanium-platform-displaycaps","aria-hidden":"true"}},[i._v("#")]),i._v(" Titanium.Platform.DisplayCaps")]),i._v(" "),t("ProxySummary"),i._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[i._v("#")]),i._v(" Overview")]),i._v(" "),t("p",[i._v("On iPhone and iPod devices with retina display, the "),t("code",[i._v("density")]),i._v(" property is "),t("code",[i._v("high")]),i._v(" and the "),t("code",[i._v("dpi")]),i._v("\nproperty is "),t("code",[i._v("320")]),i._v(". For other iPhone and iPod devices, "),t("code",[i._v("density")]),i._v(" is "),t("code",[i._v("medium")]),i._v(" and "),t("code",[i._v("dpi")]),i._v(" is "),t("code",[i._v("160")]),i._v(".")]),i._v(" "),t("p",[i._v("On iPad devices with retina display, the "),t("code",[i._v("density")]),i._v(" property is "),t("code",[i._v("high")]),i._v(" and the "),t("code",[i._v("dpi")]),i._v("\nproperty is "),t("code",[i._v("260")]),i._v(". For other iPad devices, "),t("code",[i._v("density")]),i._v(" is "),t("code",[i._v("medium")]),i._v(" and "),t("code",[i._v("dpi")]),i._v(" is "),t("code",[i._v("130")]),i._v(".")]),i._v(" "),t("p",[i._v("Note that Xcode versions prior to 4.3.1 do not have the correct tools to detect the iPad 3\nretina display. Apps must be built with Xcode 4.3.1 or later to detect iPad 3 retina display.")]),i._v(" "),t("p",[i._v("Note that the "),t("code",[i._v("displayCaps")]),i._v(" property begins with a lowercase letter, which differentiates it\nfrom the "),t("code",[i._v("DisplayCaps")]),i._v(" object that it returns. Refer to the example to understand how it should\nbe called.")]),i._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[i._v("#")]),i._v(" Examples")]),i._v(" "),t("h3",{attrs:{id:"system-display-information"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-display-information","aria-hidden":"true"}},[i._v("#")]),i._v(" System Display Information")]),i._v(" "),t("p",[i._v("Output the display properties to the system log.")]),i._v(" "),t("pre",[t("code",[i._v("Ti.API.info('Ti.Platform.displayCaps.density: ' + Ti.Platform.displayCaps.density);\nTi.API.info('Ti.Platform.displayCaps.dpi: ' + Ti.Platform.displayCaps.dpi);\nTi.API.info('Ti.Platform.displayCaps.platformHeight: ' + Ti.Platform.displayCaps.platformHeight);\nTi.API.info('Ti.Platform.displayCaps.platformWidth: ' + Ti.Platform.displayCaps.platformWidth);\nif((Ti.Platform.osname === 'iphone')||(Ti.Platform.osname === 'ipad')||(Ti.Platform.osname === 'android')){\n  Ti.API.info('Ti.Platform.displayCaps.logicalDensityFactor: ' + Ti.Platform.displayCaps.logicalDensityFactor);\n}\nif(Ti.Platform.osname === 'android'){\n  Ti.API.info('Ti.Platform.displayCaps.xdpi: ' + Ti.Platform.displayCaps.xdpi);\n  Ti.API.info('Ti.Platform.displayCaps.ydpi: ' + Ti.Platform.displayCaps.ydpi);\n}\n")])]),i._v(" "),t("ApiDocs")],1)},[],!1,null,null,null);s.options.__file="displaycaps.md";a.default=s.exports}}]);