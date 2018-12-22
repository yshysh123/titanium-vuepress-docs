(window.webpackJsonp=window.webpackJsonp||[]).push([[371],{430:function(e,t,r){"use strict";r.r(t);var a=r(14),i=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"titanium-ui-ios-stepper"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-ios-stepper","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.iOS.Stepper")]),e._v(" "),r("ProxySummary"),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("table",{attrs:{id:"iOS Stepper"}},[r("tr",[r("td",[r("img",{attrs:{src:"images/stepper/stepper.png",height:"25"}})]),e._v(" "),r("td",[r("img",{attrs:{src:"images/stepper/stepper_custom.png",height:"25"}})])])]),e._v(" "),r("p",[e._v("A Stepper displays its selected state while it is being pressed.\nYou can specify background images for each state on iOS.\nUse the "),r("type-link",{attrs:{type:"Titanium.UI.iOS.createStepper"}},[e._v("Titanium.UI.iOS.createStepper")]),e._v(" method or a "),r("strong",[r("code",[e._v("<Stepper>")])]),e._v(' Alloy element to create a stepper\n(see the "Examples" section details).')],1),e._v(" "),r("ul",[r("li",[r("p",[e._v("When assigning a custom image to the "),r("code",[e._v("backgroundImage")]),e._v(" property, the image must be\npartially or wholly transparent for the background color or background gradient to be visible.")])]),e._v(" "),r("li",[r("p",[e._v("Similarly, for an assigned background gradient to show through, the "),r("code",[e._v("backgroundColor")]),e._v(" may need to be\nset to 'transparent'.")])]),e._v(" "),r("li",[r("p",[e._v("Note that the stepper cannot be re-sized.")])])]),e._v(" "),r("h2",{attrs:{id:"examples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),r("h3",{attrs:{id:"simple-stepper-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#simple-stepper-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple Stepper Example")]),e._v(" "),r("p",[e._v("var win = Ti.UI.createWindow({\nbackgroundColor: '#fff'\n});")]),e._v(" "),r("p",[e._v('var stepper = Ti.UI.iOS.createStepper({\ntintColor: "green",\nsteps: 3,\nmaximum: 30,\nminimum: 0\n});')]),e._v(" "),r("p",[e._v('stepper.addEventListener("change", function(e) {\nTi.API.info(e.value);\n});')]),e._v(" "),r("p",[e._v("win.add(stepper);\nwin.open();")]),e._v(" "),r("h3",{attrs:{id:"alloy-xml-markup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),r("p",[e._v("Previous example as an Alloy view.")]),e._v(" "),r("p",[e._v("stepper.xml:")]),e._v(" "),r("pre",[r("code",[e._v('<Alloy>\n    <Window id="window">\n        <Stepper id="stepper" onClick="doClick" tintColor="green" steps="3" />\n    </Window>\n</Alloy>\n')])]),e._v(" "),r("p",[e._v("stepper.js:")]),e._v(" "),r("pre",[r("code",[e._v("function doClick(e) {\n    alert(e.value);\n}\n\n$.window.open();\n")])]),e._v(" "),r("ApiDocs")],1)},[],!1,null,null,null);i.options.__file="stepper.md";t.default=i.exports}}]);