(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{367:function(e,r,t){"use strict";t.r(r);var a=t(14),n=Object(a.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"titanium-ui-progressbar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-progressbar","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.ProgressBar")]),e._v(" "),t("ProxySummary"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("table",{attrs:{id:"platformComparison"}},[t("tr",[t("td",[t("img",{attrs:{src:"images/progressbar/progressbar_android.png",height:"50"}})]),e._v(" "),t("td",[t("img",{attrs:{src:"images/progressbar/progressbar_ios.png",height:"25"}})]),e._v(" "),t("td",[t("img",{attrs:{src:"images/progressbar/progressbar_wp.png",height:"25"}})])]),e._v(" "),t("tr",[t("th",[e._v("Android")]),t("th",[e._v("iOS")]),t("th",[e._v("Windows Phone")])])]),e._v(" "),t("p",[e._v("A progress bar is used for displaying an ongoing activity with a defined progression.\nFor an activity without a defined progression, you can use "),t("type-link",{attrs:{type:"Titanium.UI.ActivityIndicator"}},[e._v("Titanium.UI.ActivityIndicator")]),e._v(".")],1),e._v(" "),t("p",[e._v("Unlike most views, progress bars are hidden by default, so you must explicitly\nshow the progress bar.")]),e._v(" "),t("p",[e._v("Use the "),t("type-link",{attrs:{type:"Titanium.UI.createProgressBar"}},[e._v("Titanium.UI.createProgressBar")]),e._v(" method or "),t("strong",[t("code",[e._v("<ProgressBar>")])]),e._v(" Alloy element to create a progress bar.")],1),e._v(" "),t("h3",{attrs:{id:"android-platform-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android-platform-notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Android Platform Notes")]),e._v(" "),t("p",[e._v("In SDK 3.0, use "),t("type-link",{attrs:{type:"Titanium.UI.Android.ProgressIndicator"}},[e._v("Titanium.UI.Android.ProgressIndicator")]),e._v(" to display a progress indicator\nin a modal dialog or window title bar. Use "),t("code",[e._v("ProgressBar")]),e._v(" to display the progress bar inside\nanother view.")],1),e._v(" "),t("h3",{attrs:{id:"ios-platform-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios-platform-notes","aria-hidden":"true"}},[e._v("#")]),e._v(" iOS Platform Notes")]),e._v(" "),t("p",[e._v("On iOS, to display the progress bar in the window title bar, assign the progress bar object\nto the window's "),t("type-link",{attrs:{type:"Titanium.UI.Window.titleControl"}},[e._v("titleControl")]),e._v(" property.\nMake sure the window is modal and not full screen, and that the navigation bar is not hidden.")],1),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"simple-progress-bar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-progress-bar","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple Progress Bar")]),e._v(" "),t("p",[e._v("In this example we create a progress bar with the min value of "),t("code",[e._v("0")]),e._v(" and the max value\nof "),t("code",[e._v("10")]),e._v(" and the current value of "),t("code",[e._v("0")]),e._v(". Changing the "),t("code",[e._v("value")]),e._v(" property causes the\ndisplayed progress bar to update.")]),e._v(" "),t("pre",[t("code",[e._v("var pb = Ti.UI.createProgressBar({\n    top: 25,\n    width: 250,\n    min: 0,\n    max: 10,\n    value: 0,\n    color: 'blue',\n    message: 'Downloading 0 of 10',\n    font: {fontSize: 14, fontWeight: 'bold'},\n    style: Ti.UI.iOS.ProgressBarStyle.PLAIN,\n});\nvar win = Ti.UI.createWindow({backgroundColor: 'white'});\nwin.addEventListener('click', function(){\n    if (pb.value < pb.max) {\n        pb.message = 'Downloading '+ ++pb.value + ' of 10';\n    }\n});\nwin.add(pb);\nwin.open();\n")])]),e._v(" "),t("h3",{attrs:{id:"alloy-xml-markup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),t("p",[e._v("Previous example as an Alloy view.")]),e._v(" "),t("p",[e._v("index.xml:")]),e._v(" "),t("pre",[t("code",[e._v('<Alloy>\n    <Window id="win" backgroundColor="white" onClick="incPB">\n        <ProgressBar id="pb" />\n    </Window>\n</Alloy>\n')])]),e._v(" "),t("p",[e._v("index.js:")]),e._v(" "),t("pre",[t("code",[e._v("function incPB() {\n    if ($.pb.value < $.pb.max) {\n        $.pb.message = 'Downloading '+ ++$.pb.value + ' of 10';\n    }\n}\n$.win.open();\n")])]),e._v(" "),t("p",[e._v("index.tss:")]),e._v(" "),t("pre",[t("code",[e._v("\"#pb\": {\n    top: 25,\n    width: 250,\n    min: 0,\n    max: 10,\n    value: 0,\n    color: 'blue',\n    message: 'Downloading 0 of 10',\n    font: {fontSize:14, fontWeight:'bold'},\n    style: Titanium.UI.iOS.ProgressBarStyle.PLAIN\n}\n")])]),e._v(" "),t("ApiDocs")],1)},[],!1,null,null,null);n.options.__file="progressbar.md";r.default=n.exports}}]);