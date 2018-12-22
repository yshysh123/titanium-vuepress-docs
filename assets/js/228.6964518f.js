(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{590:function(e,t,a){"use strict";a.r(t);var n=a(14),i=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-accelerometer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-accelerometer","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.Accelerometer")]),e._v(" "),a("ProxySummary"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("An accelerometer is a hardware unit integrated into a mobile device, that detects when the\ndevice has moved, and returns its new orientation in a three-dimensional space. With its\nsingle "),a("code",[e._v("update")]),e._v(" event, this module provides an interface to access the output positional data.")]),e._v(" "),a("p",[e._v("An accelerometer needs to be switched on in order for it to report to the operating system,\nwhich consumes a lot of power that will deplete the battery over time. This is why it is\nrecommended that the accelerometer is switched off when not in use.")]),e._v(" "),a("p",[e._v("The accelerometer may be switched on and off by simply adding and removing the "),a("code",[e._v("update")]),e._v("\nevent listener function. See the example for a demonstration.")]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"basic-accelerometer-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-accelerometer-event","aria-hidden":"true"}},[e._v("#")]),e._v(" Basic Accelerometer Event")]),e._v(" "),a("p",[e._v("Adds an accelerometer update event listener, and displays the x, y and z axis in the\nwindow when the device is moved. On Android, the accelerometer is switched off and on when\nthe application is paused and resumed.")]),e._v(" "),a("pre",[a("code",[e._v("var win = Ti.UI.createWindow({\n  backgroundColor: 'white',\n  exitOnClose:true,\n  layout: 'vertical'\n});\n\nopts = {\n  color:'black',\n  font:{fontSize:20},\n  text:'-',\n  top:20, left:10,\n  width:300\n};\nvar labelTimestamp = Ti.UI.createLabel(opts);\nwin.add(labelTimestamp);\nvar labelx = Ti.UI.createLabel(opts);\nwin.add(labelx);\nvar labely = Ti.UI.createLabel(opts);\nwin.add(labely);\nvar labelz = Ti.UI.createLabel(opts);\nwin.add(labelz);\nwin.open();\n\nvar accelerometerCallback = function(e) {\n  labelTimestamp.text = 'timestamp: ' + e.timestamp;\n  labelx.text = 'x: ' + e.x;\n  labely.text = 'y: ' + e.y;\n  labelz.text = 'z: ' + e.z;\n};\n\nif (Ti.Platform.model === 'Simulator' || Ti.Platform.model.indexOf('sdk') !== -1 ) {\n  alert('Accelerometer does not work on a virtual device');\n} else {\n  Ti.Accelerometer.addEventListener('update', accelerometerCallback);\n  if (Ti.Platform.name === 'android') {\n    win.addEventListener(\"open\", function(e) {\n      win.activity.addEventListener(\"pause\", function() {\n        Ti.API.info(\"removing accelerometer callback on pause\");\n        Ti.Accelerometer.removeEventListener('update', accelerometerCallback);\n      });\n      win.activity.addEventListener(\"resume\", function() {\n        Ti.API.info(\"adding accelerometer callback on resume\");\n        Ti.Accelerometer.addEventListener('update', accelerometerCallback);\n      });\n    });\n  }\n}\n")])]),e._v(" "),a("ApiDocs")],1)},[],!1,null,null,null);i.options.__file="accelerometer.md";t.default=i.exports}}]);