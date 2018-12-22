(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{379:function(e,t,i){"use strict";i.r(t);var n=i(14),o=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"titanium-ui-optiondialog"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-optiondialog","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.OptionDialog")]),e._v(" "),i("ProxySummary"),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("table",{attrs:{id:"platformComparison"}},[i("tr",[i("td",[i("img",{attrs:{src:"images/optiondialog/optiondialog_android.png",height:"75"}})]),e._v(" "),i("td",[i("img",{attrs:{src:"images/optiondialog/optiondialog_iphone.png",height:"75"}})]),e._v(" "),i("td",[i("img",{attrs:{src:"images/optiondialog/optiondialog_ipad.png",height:"75"}})])]),e._v(" "),i("tr",[i("th",[e._v("Android")]),i("th",[e._v("iPhone")]),i("td",[e._v("iPad")])])]),e._v(" "),i("p",[e._v("An option dialog is created using "),i("type-link",{attrs:{type:"Titanium.UI.createOptionDialog"}},[e._v("Titanium.UI.createOptionDialog")]),e._v(" or Alloy "),i("code",[e._v("<OptionDialog>")]),e._v("\nelement. See Examples below for usage.")],1),e._v(" "),i("p",[e._v("This dialog is presented differently on each platform, as described below.")]),e._v(" "),i("h3",{attrs:{id:"android"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#android","aria-hidden":"true"}},[e._v("#")]),e._v(" Android")]),e._v(" "),i("p",[e._v("On Android, the dialog is shown in the middle of the display (not touching the edges),\nwith the option items represented in a picker. The previously-selected, or default, item can be\nset on creation.")]),e._v(" "),i("p",[e._v("You can assign a "),i("type-link",{attrs:{type:"Titanium.UI.View"}},[e._v("View")]),e._v(" to the "),i("type-link",{attrs:{type:"Titanium.UI.OptionDialog.androidView"}},[e._v("Titanium.UI.OptionDialog.androidView")]),e._v(" property\nto define a custom dialog UI and layout, or you can assign a set of options to the\n"),i("type-link",{attrs:{type:"Titanium.UI.OptionDialog.options"}},[e._v("Titanium.UI.OptionDialog.options")]),e._v(" property, but not both. If both of these properties are set, the custom view\nwill appear but the options will be hidden.")],1),e._v(" "),i("p",[e._v("Buttons below the picker may be optionally defined using the "),i("code",[e._v("buttonNames")]),e._v(" property.\nThe "),i("code",[e._v("click")]),e._v(" event returns a Boolean value to indicate whether either an option item or a button was clicked.")]),e._v(" "),i("h3",{attrs:{id:"ios"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ios","aria-hidden":"true"}},[e._v("#")]),e._v(" iOS")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("destructive")]),e._v(" property may be set for an item, to give a visual cue that selecting it\nresults in an irreversible action. Option dialogs are automatically cancelled when the application is paused/suspended.")]),e._v(" "),i("h4",{attrs:{id:"iphone"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#iphone","aria-hidden":"true"}},[e._v("#")]),e._v(" iPhone")]),e._v(" "),i("p",[e._v("On iPhone, this dialog is shown at the bottom edge of the display, with the option items\nrepresented as vertical buttons.")]),e._v(" "),i("h4",{attrs:{id:"ipad"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ipad","aria-hidden":"true"}},[e._v("#")]),e._v(" iPad")]),e._v(" "),i("p",[e._v("On iPad, this dialog is shown in the middle of the display, or as a popover-like dialog if\nanother view or control is specified via an argument passed to the "),i("code",[e._v("open()")]),e._v(" method.")]),e._v(" "),i("p",[e._v("Note that on iPad, the cancel button is not displayed -- users can cancel the dialog\nby clicking outside of the dialog.")]),e._v(" "),i("h3",{attrs:{id:"caveats"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#caveats","aria-hidden":"true"}},[e._v("#")]),e._v(" Caveats")]),e._v(" "),i("p",[e._v("Care should be taken not to define any properties that are not documented, as this may produce\nunexpected results. For example, setting a "),i("code",[e._v("message")]),e._v(" property will prevent the picker of option\nitems from being displayed on Android.")]),e._v(" "),i("h2",{attrs:{id:"examples"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),i("h3",{attrs:{id:"dialog-with-3-options"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dialog-with-3-options","aria-hidden":"true"}},[e._v("#")]),e._v(" Dialog with 3 Options")]),e._v(" "),i("p",[e._v("Ti.UI.setBackgroundColor('white');\nvar win = Ti.UI.createWindow({\ntitle: 'Click window to test',\nbackgroundColor: 'white'\n});")]),e._v(" "),i("p",[e._v("var opts = {\ncancel: 2,\noptions: ['Confirm', 'Help', 'Cancel'],\nselectedIndex: 2,\ndestructive: 0,\ntitle: 'Delete File?'\n};")]),e._v(" "),i("p",[e._v("win.addEventListener('click', function(e){\nvar dialog = Ti.UI.createOptionDialog(opts).show();\n});\nwin.open();")]),e._v(" "),i("h3",{attrs:{id:"dialog-with-2-options-and-1-button-on-android-and-3-options-on-ios"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dialog-with-2-options-and-1-button-on-android-and-3-options-on-ios","aria-hidden":"true"}},[e._v("#")]),e._v(" Dialog with 2 Options and 1 Button on Android and 3 Options on iOS")]),e._v(" "),i("p",[e._v("var win = Ti.UI.createWindow({\ntitle: 'Click window to test OptionDialog',\nbackgroundColor: 'white'\n});")]),e._v(" "),i("p",[e._v("var opts = {\ntitle: 'Delete File?'\n};")]),e._v(" "),i("p",[e._v("var isAndroid = Ti.Platform.osname === 'android';")]),e._v(" "),i("p",[e._v("if (isAndroid) {\nopts.options = ['Confirm', 'Cancel'];\nopts.buttonNames = ['Help'];\n} else {\nopts.options = ['Confirm', 'Help', 'Cancel'];\n}")]),e._v(" "),i("p",[e._v("var dialog;\nwin.addEventListener('click', function() {\ndialog = Ti.UI.createOptionDialog(opts);")]),e._v(" "),i("p",[e._v("dialog.addEventListener('click', onSelectDialog);\ndialog.addEventListener('cancel', function(e) {\nalert('Dialog canceled! e.cancel = ' + e.cancel + ', e.index = ' + e.index);\n})")]),e._v(" "),i("p",[e._v("dialog.show();\n});")]),e._v(" "),i("p",[e._v("function onSelectDialog(e) {\nif (isAndroid) {\nif (e.button === false && e.index === 0) {\nalert('Confirm option selected! e.index = ' + e.index);\n}\nif (e.button === false && eventeindex === 1) {\nalert('Cancel option selected! e.index = ' + e.index);\n}\nif (e.button === true && e.index === 0) {\nalert('Help Button clicked! e.index = ' + e.index);\n}\n}\n}")]),e._v(" "),i("p",[e._v("win.open();")]),e._v(" "),i("h3",{attrs:{id:"alloy-xml-markup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),i("p",[e._v("Previous example as an Alloy view.")]),e._v(" "),i("p",[e._v("optiondialog.xml:")]),e._v(" "),i("pre",[i("code",[e._v('<Alloy>\n    <Window id="win" onClick="showOptions" title="Click window to test"\n        fullscreen="false" onExit="true" backgroundColor="white">\n\n        \x3c!--\n            The OptionDialog tag declares an option dialog,\n            which will need to be opened by the controller.\n        --\x3e\n        <OptionDialog id="dialog" title="Delete File?">\n\n            \x3c!-- The Options tag sets the options property. --\x3e\n            <Options>\n                <Option>Confirm</Option>\n                <Option platform="ios">Help</Option>\n                <Option>Cancel</Option>\n            </Options>\n\n            \x3c!-- The ButtonNames tag sets the Android-only buttonNames property. --\x3e\n            <ButtonNames>\n                <ButtonName>Help</ButtonName>\n            </ButtonNames>\n\n            \x3c!-- Add a View for the androidView property here. --\x3e\n\n        </OptionDialog>\n\n        \x3c!-- Add views here --\x3e\n\n    </Window>\n</Alloy>\n')])]),e._v(" "),i("p",[e._v("optiondialog.js:")]),e._v(" "),i("pre",[i("code",[e._v("function showOptions(){\n    $.dialog.show();\n}\n")])]),e._v(" "),i("ApiDocs")],1)},[],!1,null,null,null);o.options.__file="optiondialog.md";t.default=o.exports}}]);