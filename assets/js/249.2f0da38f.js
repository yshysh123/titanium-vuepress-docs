(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{619:function(e,r,t){"use strict";t.r(r);var a=t(14),i=Object(a.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"titanium-app-android"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#titanium-app-android","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.App.Android")]),e._v(" "),t("ProxySummary"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("For more information, refer to the official documentation on the Android Developer website about\n"),t("a",{attrs:{href:"https://developer.android.com/guide/topics/resources/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("application resources"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"custom-string-resource"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-string-resource","aria-hidden":"true"}},[e._v("#")]),e._v(" Custom String Resource")]),e._v(" "),t("p",[e._v("Custom Android resources may be placed in "),t("code",[e._v("platform/android")]),e._v(" in the project root."),t("br"),e._v("\nFor example, to utilize a custom localization file, create and populate\n"),t("code",[e._v("platform/android/res/values/mystrings.xml")]),e._v(" with the following data.")]),e._v(" "),t("pre",[t("code",[e._v('<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <string name="mystring">testing 1 2 3</string>\n</resources>\n')])]),e._v(" "),t("p",[e._v("In Javascript, this can be accessed as follows.")]),e._v(" "),t("pre",[t("code",[e._v('var activity = Ti.Android.currentActivity;\nvar R = Ti.App.Android.R;\n\nvar mystring = activity.getString(R.string.mystring);\nTi.API.debug("mystring = " + mystring);\n')])]),e._v(" "),t("ApiDocs")],1)},[],!1,null,null,null);i.options.__file="android.md";r.default=i.exports}}]);