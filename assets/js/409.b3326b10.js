(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{325:function(e,t,o){"use strict";o.r(t);var a=o(14),r=Object(a.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"titanium-ui-textfield"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-textfield","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.TextField")]),e._v(" "),o("ProxySummary"),e._v(" "),o("h2",{attrs:{id:"overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),o("table",{attrs:{id:"platformComparison"}},[o("tr",[o("td",[o("img",{attrs:{src:"images/textfield/textfield_android.png",height:"25"}})]),e._v(" "),o("td",[o("img",{attrs:{src:"images/textfield/textfield_ios.png",height:"25"}})]),e._v(" "),o("td",[o("img",{attrs:{src:"images/textfield/textfield_wp.png",height:"25"}})])]),e._v(" "),o("tr",[o("th",[e._v("Android")]),o("th",[e._v("iOS")]),o("th",[e._v("Windows Phone")])])]),e._v(" "),o("p",[e._v("Use the "),o("type-link",{attrs:{type:"Titanium.UI.createTextField"}},[e._v("Titanium.UI.createTextField")]),e._v(" method or "),o("strong",[o("code",[e._v("<TextField>")])]),e._v(" Alloy element to create a text field.")],1),e._v(" "),o("h2",{attrs:{id:"examples"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),o("h3",{attrs:{id:"basic-text-field"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basic-text-field","aria-hidden":"true"}},[e._v("#")]),e._v(" Basic Text Field")]),e._v(" "),o("p",[e._v("Create a simple text field with green text color.")]),e._v(" "),o("pre",[o("code",[e._v("var win = Ti.UI.createWindow({\n  backgroundColor: 'white'\n});\n\nvar textField = Ti.UI.createTextField({\n  backgroundColor: '#fafafa',\n  color: 'green',\n  width: 250, \n  height: 40\n});\n\nwin.add(textField);\nwin.open();\n")])]),e._v(" "),o("h3",{attrs:{id:"custom-keyboard-toolbar-ios"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-keyboard-toolbar-ios","aria-hidden":"true"}},[e._v("#")]),e._v(" Custom Keyboard Toolbar (iOS)")]),e._v(" "),o("p",[e._v("On iOS, a configurable toolbar can be displayed above the virtual keyboard.\nToolbars can be used with both text areas and text fields. See "),o("type-link",{attrs:{type:"Titanium.UI.iOS.Toolbar"}},[e._v("Titanium.UI.iOS.Toolbar")]),e._v("\nfor more information.")],1),e._v(" "),o("p",[e._v("This code excerpt creates a text field with a toolbar:")]),e._v(" "),o("pre",[o("code",[e._v("var win = Ti.UI.createWindow({\n    backgroundColor: 'white'\n});\n\nvar send = Ti.UI.createButton({\n    title: 'Send',\n    style: Ti.UI.iOS.SystemButtonStyle.DONE,\n});\n\nvar camera = Ti.UI.createButton({\n    systemButton: Ti.UI.iOS.SystemButton.CAMERA,\n});\n\nvar cancel = Ti.UI.createButton({\n    systemButton: Ti.UI.iOS.SystemButton.CANCEL\n});\n\nvar flexSpace = Ti.UI.createButton({\n    systemButton: Ti.UI.iOS.SystemButton.FLEXIBLE_SPACE\n});\n\nvar textfield = Ti.UI.createTextField({\n    borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,\n    hintText: 'Focus to see keyboard with toolbar',\n    keyboardToolbar : [cancel, flexSpace, camera, flexSpace, send],\n    keyboardToolbarColor: '#999',\n    keyboardToolbarHeight: 40,\n    top: 10,\n    width: 300, \n    height: 35\n});\n\nwin.add(textField);\nwin.open();\n")])]),e._v(" "),o("h3",{attrs:{id:"alloy-xml-markup"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),o("p",[e._v("Previous basic text field with green text color example using Alloy.")]),e._v(" "),o("p",[e._v("Alternatively, define the properties using the TSS file.")]),e._v(" "),o("pre",[o("code",[e._v('<Alloy>\n    <Window id="win" backgroundColor="white">\n        <TextField class="myTextField" color="green" width="250" height="45" />\n    </Window>\n</Alloy>\n')])]),e._v(" "),o("h3",{attrs:{id:"alloy-custom-keyboard-toolbar-ios"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#alloy-custom-keyboard-toolbar-ios","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy Custom Keyboard Toolbar (iOS)")]),e._v(" "),o("p",[e._v("Previous custom keyboard toolbar example as an Alloy view.  Use the "),o("code",[e._v("<KeyboardToolbar>")]),e._v(" XML\nelement to set the "),o("code",[e._v("keyboardToolbar")]),e._v(" property.")]),e._v(" "),o("p",[e._v("You can also declare the "),o("code",[e._v("leftButton")]),e._v(" and "),o("code",[e._v("rightButton")]),e._v(" properties in XML markup as the\n"),o("code",[e._v("<LeftButton>")]),e._v(" and "),o("code",[e._v("<RightButton>")]),e._v(" XML elements.")]),e._v(" "),o("pre",[o("code",[e._v('<Alloy>\n    <Window fullscreen="true" backgroundColor="white">\n        <TextField\n            platform="ios"\n            borderStyle="Ti.UI.INPUT_BORDERSTYLE_BEZEL"\n            keyboardToolbarColor="#999" \n            keyboardToolbarHeight="40"\n            top="10" \n            height="35" \n            width="300"\n            value="Focus to see keyboard with toolbar">\n\n            \x3c!-- Sets the keyboardToolbar property --\x3e\n            <KeyboardToolbar>\n                <Toolbar>\n                    <Items>\n                        <Button systemButton="CANCEL" />\n                        <FlexSpace/>\n                        <Button systemButton="CAMERA" />\n                        <FlexSpace/>\n                        <Button style="DONE">Send</Button>\n                    </Items>\n                </Toolbar>\n            </KeyboardToolbar>\n        </TextField>\n    </Window>\n</Alloy>\n')])]),e._v(" "),o("ApiDocs")],1)},[],!1,null,null,null);r.options.__file="textfield.md";t.default=r.exports}}]);