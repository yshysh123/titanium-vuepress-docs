(window.webpackJsonp=window.webpackJsonp||[]).push([[322],{576:function(t,i,e){"use strict";e.r(i);var n=e(14),o=Object(n.a)({},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"titanium-ui-activityindicator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-activityindicator","aria-hidden":"true"}},[t._v("#")]),t._v(" Titanium.UI.ActivityIndicator")]),t._v(" "),e("ProxySummary"),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("table",{attrs:{id:"platformComparison"}},[e("tr",[e("td",[e("img",{attrs:{src:"images/activityindicator/activityindicator_android.png",height:"75"}})]),t._v(" "),e("td",[e("img",{attrs:{src:"images/activityindicator/activityindicator_ios.png",height:"75"}})]),t._v(" "),e("td",[e("img",{attrs:{src:"images/activityindicator/activityindicator_wp.png",height:"75"}})])]),t._v(" "),e("tr",[e("th",[t._v("Android")]),e("th",[t._v("iOS")]),e("th",[t._v("Windows Phone")])])]),t._v(" "),e("p",[t._v("An activity indicator can be used to show the progress of an operation in the UI to let the\nuser know that some action is taking place. An activity indicator consists of a spinning\nanimation and an optional text message, and is used to indicate an ongoing activity of\nindeterminate length. To show progress, use "),e("type-link",{attrs:{type:"Titanium.UI.ProgressBar"}},[t._v("Titanium.UI.ProgressBar")]),t._v(" instead.")],1),t._v(" "),e("p",[t._v("Use the "),e("type-link",{attrs:{type:"Titanium.UI.createActivityIndicator"}},[t._v("Titanium.UI.createActivityIndicator")]),t._v(" method or "),e("strong",[e("code",[t._v("<ActivityIndicator>")])]),t._v(" Alloy element to\ncreate an "),e("code",[t._v("ActivityIndicator")]),t._v(" object.")],1),t._v(" "),e("p",[e("code",[t._v("ActivityIndicator")]),t._v(" is a view and, like any view, must be added to a window or other top-level\nview before it can be shown. Unlike most views, "),e("code",[t._v("ActivityIndicator")]),t._v(" is hidden by\ndefault and must be shown explicitly by calling its "),e("type-link",{attrs:{type:"Titanium.UI.ActivityIndicator.show"}},[t._v("Titanium.UI.ActivityIndicator.show")]),t._v(" method.")],1),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("h3",{attrs:{id:"simple-activity-indicator"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple-activity-indicator","aria-hidden":"true"}},[t._v("#")]),t._v(" Simple Activity Indicator")]),t._v(" "),e("p",[t._v("Open a yellow window immediately after a blue window. Show an activity indicator while\nsome code executes and hide it on completion. Then close the yellow window.")]),t._v(" "),e("pre",[e("code",[t._v("Ti.UI.backgroundColor = 'white';\n\nvar win1 = Ti.UI.createWindow({\n  backgroundColor: 'blue'\n});\n\nvar win2 = Ti.UI.createWindow({\n  backgroundColor: 'yellow'\n});\n\nvar activityIndicator = Ti.UI.createActivityIndicator({\n  color: 'green',\n  message: 'Loading ...',\n  style: Ti.UI.ActivityIndicatorStyle.DARK,\n  top: 10,\n  left: 10,\n  height: Ti.UI.SIZE,\n  width: Ti.UI.SIZE\n});\n\n// The activity indicator must be added to a window or view for it to appear\nwin2.add(activityIndicator);\n\n// eventListeners must always be loaded before the event is likely to fire\n// hence, the open() method must be positioned before the window is opened\nwin2.addEventListener('open', function (e) {\n  activityIndicator.show();\n  // do some work that takes 6 seconds\n  // ie. replace the following setTimeout block with your code\n  setTimeout(function() {\n    e.source.close();\n    activityIndicator.hide();\n  }, 6000);\n});\n\nwin1.open();\nwin2.open();\n")])]),t._v(" "),e("h3",{attrs:{id:"alloy-xml-markup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[t._v("#")]),t._v(" Alloy XML Markup")]),t._v(" "),e("p",[t._v("Previous example as two Alloy views.")]),t._v(" "),e("p",[t._v("win1.xml:")]),t._v(" "),e("pre",[e("code",[t._v('<Alloy>\n    <Window onOpen="openWin2" backgroundColor="blue" />\n</Alloy>\n')])]),t._v(" "),e("p",[t._v("win1.js:")]),t._v(" "),e("pre",[e("code",[t._v("function openWin2 () {\n    var win2 = Alloy.createController('win2').getView();\n    win2.open();\n}\n")])]),t._v(" "),e("p",[t._v("win2.xml:")]),t._v(" "),e("pre",[e("code",[t._v('<Alloy>\n    <Window onOpen="showIndicator" backgroundColor="yellow">\n        \x3c!-- Define the styling properties in the TSS file --\x3e\n        <ActivityIndicator id="activityIndicator" message="Loading..."/>\n    </Window>\n</Alloy>\n')])]),t._v(" "),e("p",[t._v("win2.js:")]),t._v(" "),e("pre",[e("code",[t._v("function showIndicator(e) {\n    $.activityIndicator.show();\n    // do some work that takes 6 seconds\n    // ie. replace the following setTimeout block with your code\n    setTimeout(function() {\n        e.source.close();\n        $.activityIndicator.hide();\n    }, 6000);\n}\n")])]),t._v(" "),e("ApiDocs")],1)},[],!1,null,null,null);o.options.__file="activityindicator.md";i.default=o.exports}}]);