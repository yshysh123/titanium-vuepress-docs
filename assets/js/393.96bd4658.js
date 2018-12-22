(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{370:function(e,n,r){"use strict";r.r(n);var o=r(14),t=Object(o.a)({},function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"titanium-ui-pickerrow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-pickerrow","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.PickerRow")]),e._v(" "),r("ProxySummary"),e._v(" "),r("h2",{attrs:{id:"overview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),r("p",[e._v("Use the "),r("type-link",{attrs:{type:"Titanium.UI.createPickerRow"}},[e._v("Titanium.UI.createPickerRow")]),e._v(" method to create a picker row control. In an Alloy application,\nyou can use a "),r("strong",[r("code",[e._v("<PickerRow>")])]),e._v(" element inside a "),r("code",[e._v("<PickerColumn>")]),e._v(" element. You can also use "),r("code",[e._v("<Row>")]),e._v("\nas a shorthand for "),r("code",[e._v("<PickerRow>")]),e._v(" (see Examples).")],1),e._v(" "),r("p",[e._v("Views added to picker rows is only supported on iOS.")]),e._v(" "),r("h2",{attrs:{id:"examples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),r("h3",{attrs:{id:"custom-view-for-row-ios-only"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#custom-view-for-row-ios-only","aria-hidden":"true"}},[e._v("#")]),e._v(" Custom View for Row (iOS only)")]),e._v(" "),r("p",[e._v("Create a two-column picker, with the first column containing a child view, and automatically\nselect a row in each column.")]),e._v(" "),r("pre",[r("code",[e._v("Ti.UI.backgroundColor = 'white';\nvar win = Ti.UI.createWindow({\n  exitOnClose: true,\n  layout: 'vertical'\n});\n\nvar fruit = [ 'Bananas', 'Strawberries', 'Mangos', 'Grapes' ];\nvar color = [ 'red', 'green', 'blue', 'orange' ];\n\nvar column1 = Ti.UI.createPickerColumn();\n\nfor(var i=0, ilen=fruit.length; i<ilen; i++){\n  var row = Ti.UI.createPickerRow();\n\n  var label = Ti.UI.createLabel({\n    color:'red',\n    font:{fontSize:20,fontWeight:'bold'},\n    text: fruit[i],\n    textAlign:'left',\n    width:'126'\n  });\n\n  row.add(label);\n  column1.addRow(row);\n}\n\nvar column2 = Ti.UI.createPickerColumn();\n\nfor(var i=0, ilen=color.length; i<ilen; i++){\n  var row = Ti.UI.createPickerRow({\n    title: color[i],\n    font: {fontSize:30}\n  });\n  column2.addRow(row);\n}\n\nvar picker = Ti.UI.createPicker({\n  top:50,\n  columns: [column1, column2],\n  selectionIndicator: true\n});\n\nwin.add(picker);\n\nwin.open();\n\n// must be after picker has been displayed\npicker.setSelectedRow(0, 2, false); // select Mangos\npicker.setSelectedRow(1, 3, false); // select Orange\n")])]),e._v(" "),r("h3",{attrs:{id:"alloy-xml-markup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),r("p",[e._v("Previous example as an Alloy view.")]),e._v(" "),r("p",[e._v("pickerrowexample.xml")]),e._v(" "),r("pre",[r("code",[e._v('<Alloy>\n    <Window id="win" backgroundColor="white" layout="vertical" exitOnClose="true">\n        <Picker id="picker" top="50" selectionIndicator="true">\n            <PickerColumn id="column1">\n\n                \x3c!-- On iOS, views can be added to picker rows --\x3e\n                <PickerRow>\n                    <Label color="red" textAlign="left" width="126">Bananas</Label>\n                </PickerRow>\n                <PickerRow>\n                    <Label color="red" textAlign="left" width="126">Strawberries</Label>\n                </PickerRow>\n                <PickerRow>\n                    <Label color="red" textAlign="left" width="126">Mangos</Label>\n                </PickerRow>\n                <PickerRow>\n                    <Label color="red" textAlign="left" width="126">Grapes</Label>\n                </PickerRow>\n            </PickerColumn>\n\n            \x3c!-- Picker shorthand notation --\x3e\n            <Column id="column2">\n                <Row title="red"/>\n                <Row title="green"/>\n                <Row title="blue"/>\n                <Row title="orange"/>\n            </Column>\n        </Picker>\n    </Window>\n</Alloy>\n')])]),e._v(" "),r("p",[e._v("pickerrowexample.js:")]),e._v(" "),r("pre",[r("code",[e._v("$.picker.setSelectedRow(0, 2, false);\n$.picker.setSelectedRow(1, 3, false);\n")])]),e._v(" "),r("ApiDocs")],1)},[],!1,null,null,null);t.options.__file="pickerrow.md";n.default=t.exports}}]);