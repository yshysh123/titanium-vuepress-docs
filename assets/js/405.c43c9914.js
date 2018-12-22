(window.webpackJsonp=window.webpackJsonp||[]).push([[405],{274:function(e,t,a){"use strict";a.r(t);var i=a(14),n=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-ui-tableview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-tableview","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.TableView")]),e._v(" "),a("ProxySummary"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("table",{attrs:{id:"platformComparison"}},[a("tr",[a("td",[a("img",{staticStyle:{border:"1px solid black"},attrs:{src:"images/tableview/tableview_android.png",height:"200"}})]),e._v(" "),a("td",[a("img",{staticStyle:{border:"1px solid black"},attrs:{src:"images/tableview/tableview_ios.png",height:"200"}})]),e._v(" "),a("td",[a("img",{staticStyle:{border:"1px solid black"},attrs:{src:"images/tableview/tableview_wp.png",height:"200"}})])]),e._v(" "),a("tr",[a("th",[e._v("Android")]),a("th",[e._v("iOS")]),a("th",[e._v("Windows Phone")])])]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("TableView")]),e._v(" object is a container for "),a("type-link",{attrs:{type:"Titanium.UI.TableViewSection"}},[e._v("TableViewSection")]),e._v("\nobjects that are, in turn, containers for "),a("type-link",{attrs:{type:"Titanium.UI.TableViewRow"}},[e._v("TableViewRow")]),e._v(" objects.")],1),e._v(" "),a("p",[e._v("Use the "),a("type-link",{attrs:{type:"Titanium.UI.createTableView"}},[e._v("Titanium.UI.createTableView")]),e._v(" method or "),a("strong",[a("code",[e._v("<TableView>")])]),e._v(" Alloy element to create a "),a("code",[e._v("TableView")]),e._v(".")],1),e._v(" "),a("p",[e._v("Also see the "),a("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/TableViews",target:"_blank",rel:"noopener noreferrer"}},[e._v("TableViews guide"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"creating-tables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-tables","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating Tables")]),e._v(" "),a("p",[e._v("There are few approaches to creating and using "),a("code",[e._v("TableView")]),e._v(" object.")]),e._v(" "),a("p",[e._v("The simplest approach is to pass dictionaries of "),a("code",[e._v("TableViewRow")]),e._v(" properties, such as\n"),a("type-link",{attrs:{type:"Titanium.UI.TableViewRow.backgroundColor"}},[e._v("backgroundColor")]),e._v(",\n"),a("type-link",{attrs:{type:"Titanium.UI.TableViewRow.color"}},[e._v("color")]),e._v(", and "),a("type-link",{attrs:{type:"Titanium.UI.TableViewRow.title"}},[e._v("title")]),e._v(", to the\n"),a("type-link",{attrs:{type:"Titanium.UI.createTableView"}},[e._v("createTableView")]),e._v(" method, which causes the rows to be implictly\ncreated, added to a single "),a("type-link",{attrs:{type:"Titanium.UI.TableViewSection"}},[e._v("TableViewSection")]),e._v(", and then added to\nthe "),a("code",[e._v("TableView")]),e._v('. Refer to the "Simple Table View with Basic Rows" example.')],1),e._v(" "),a("p",[e._v("For more control over the layout of each row, however, "),a("type-link",{attrs:{type:"Titanium.UI.TableViewRow"}},[e._v("TableViewRow")]),e._v("\nobjects can be created explicitly using the "),a("type-link",{attrs:{type:"Titanium.UI.createTableViewRow"}},[e._v("Titanium.UI.createTableViewRow")]),e._v(" method. Child views,\nsuch as "),a("type-link",{attrs:{type:"Titanium.UI.Label"}},[e._v("labels")]),e._v(", "),a("type-link",{attrs:{type:"Titanium.UI.ImageView"}},[e._v("images")]),e._v(", and\n"),a("type-link",{attrs:{type:"Titanium.UI.Button"}},[e._v("buttons")]),e._v(", may be added to each row. When one or more\n"),a("type-link",{attrs:{type:"Titanium.UI.TableViewRow"}},[e._v("rows")]),e._v(" are added to the table view,\na single "),a("type-link",{attrs:{type:"Titanium.UI.TableViewSection"}},[e._v("TableViewSection")]),e._v(' is automatically created to hold the\nrows. See the "Table View with Composite Layout" example.')],1),e._v(" "),a("p",[e._v("Lastly, sets of rows may be explicitly created and added to a their own\n"),a("type-link",{attrs:{type:"Titanium.UI.TableViewSection"}},[e._v("TableViewSection")]),e._v(" objects, which are then added to a "),a("code",[e._v("TableView")]),e._v(",\nto enable the rows to be organized. Headers and footers titles or views must be configured\nin order for the sections to be visible.")],1),e._v(" "),a("h3",{attrs:{id:"tables-and-scroll-views"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tables-and-scroll-views","aria-hidden":"true"}},[e._v("#")]),e._v(" Tables and Scroll Views")]),e._v(" "),a("p",[e._v("As a table view inherently scrolls, it creates a very poor user experience when one contains\nother scrolling views, such as a "),a("type-link",{attrs:{type:"Titanium.UI.ScrollableView"}},[e._v("ScrollableView")]),e._v(" or\n"),a("type-link",{attrs:{type:"Titanium.UI.TextArea"}},[e._v("TextArea")]),e._v(". Thus, this layout is strongly discouraged.")],1),e._v(" "),a("h3",{attrs:{id:"textfields-in-tables-with-soft-input-adjust-pan-android"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#textfields-in-tables-with-soft-input-adjust-pan-android","aria-hidden":"true"}},[e._v("#")]),e._v(" TextFields in Tables with SOFT_INPUT_ADJUST_PAN (Android)")]),e._v(" "),a("p",[e._v("When a "),a("type-link",{attrs:{type:"Titanium.UI.TextField"}},[e._v("TextField")]),e._v(" is placed in a row near the bottom of a "),a("code",[e._v("TableView")]),e._v(",\nin a window that is configured with\n"),a("type-link",{attrs:{type:"Titanium.UI.Android.SOFT_INPUT_ADJUST_PAN"}},[e._v("SOFT_INPUT_ADJUST_PAN")]),e._v(", it is expected for the\ntext field to automatically move to a visible position after it is focused and the software\nkeyboard displayed. However, due to a known problem caused by native Android's ListView behavior,\nthe keyboard is likely to completely obscure the text field.")],1),e._v(" "),a("p",[e._v("To mitigate this, a "),a("code",[e._v("ScrollView")]),e._v(" may be used instead of a table view, as demonstrated in the\n"),a("type-link",{attrs:{type:"Titanium.UI.ScrollView"}},[e._v("ScrollView")]),e._v(', "Scroll View as a Table View", example.')],1),e._v(" "),a("h3",{attrs:{id:"known-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#known-issues","aria-hidden":"true"}},[e._v("#")]),e._v(" Known Issues")]),e._v(" "),a("p",[e._v("There are known issues with the "),a("code",[e._v("sections")]),e._v(" property and associated methods added in\nRelease 3.0:")]),e._v(" "),a("ul",[a("li",[e._v("On iOS, the first two arguments to the "),a("code",[e._v("updateSection")]),e._v(" method are reversed.\n("),a("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-12625",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-12625"),a("OutboundLink")],1),e._v("). This issue has been\naddressed in Release 3.3.0 of the Titanium SDK")])]),e._v(" "),a("h3",{attrs:{id:"row-editing-and-moving-modes-ios-only"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#row-editing-and-moving-modes-ios-only","aria-hidden":"true"}},[e._v("#")]),e._v(" Row Editing and Moving Modes (iOS only)")]),e._v(" "),a("p",[e._v("On iOS, table views have an "),a("code",[e._v("editing")]),e._v(" and a "),a("code",[e._v("moving")]),e._v(" mode that may be activated to using their\nrespective "),a("type-link",{attrs:{type:"Titanium.UI.TableView.editing"}},[e._v("editing")]),e._v(" and "),a("type-link",{attrs:{type:"Titanium.UI.TableView.moving"}},[e._v("moving")]),e._v("\nproperties. These allow rows to be deleted or re-ordered by the user, depending on each row's\n"),a("type-link",{attrs:{type:"Titanium.UI.TableViewRow.editable"}},[e._v("editable")]),e._v(" and "),a("type-link",{attrs:{type:"Titanium.UI.TableViewRow.moveable"}},[e._v("moveable")]),e._v("\nproperty that are either explicitly set or inherited from the table.")],1),e._v(" "),a("p",[e._v("There are two UI controls available for deleting table view rows, depending on the combination\nof editing and moving modes enabled:")]),e._v(" "),a("ul",[a("li",[e._v('"red icon delete" - a circular red icon is displayed on the left-hand side of a row, which\nreveals a delete button on the right-hand side of that row when clicked.')]),e._v(" "),a("li",[e._v('"swipe delete" - without either of the table editing or moving modes enabled, a left or right\nswipe gesture on a row reveals a delete button on the right-hand side of the row.')])]),e._v(" "),a("p",[e._v("Note that because the operating system handles the functionality of the swipe delete, the OS will\ncapture swipe events and not bubble the event to Titanium listeners. As such, if you rely on\nswipe events, you must not set editing to true on such rows, and simulate the functionality you\nneed.")]),e._v(" "),a("p",[e._v("When "),a("code",[e._v("editable")]),e._v(" and "),a("code",[e._v("moveable")]),e._v(" properties are set on the table view, they are known as "),a("code",[e._v("inherited")]),e._v(",\nwhereas when set on a row, they are known as "),a("code",[e._v("explicit")]),e._v(". As their resulting behavior may not\nfollow their literal meaning, depending on the combination of "),a("code",[e._v("editing")]),e._v(" and "),a("code",[e._v("moving")]),e._v(" modes that\nare enabled, a detailed description of the behavior follows.")]),e._v(" "),a("p",[e._v("With "),a("code",[e._v("editing:false")]),e._v(" and "),a("code",[e._v("moving:true")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("For red icon delete and swipe delete, inherited and explicit "),a("code",[e._v("editable")]),e._v(" properties may be set.")]),e._v(" "),a("li",[e._v("Inherited "),a("code",[e._v("moveable")]),e._v(" property is always "),a("code",[e._v("true")]),e._v(". Explicit "),a("code",[e._v("moveable")]),e._v(" property may be set.")])]),e._v(" "),a("p",[e._v("With "),a("code",[e._v("editing:true")]),e._v(" and "),a("code",[e._v("moving:false")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("For red icon delete and swipe delete, inherited "),a("code",[e._v("editable")]),e._v(" property is always "),a("code",[e._v("true")]),e._v(". Explicit\n"),a("code",[e._v("editable")]),e._v(" property may be set.")]),e._v(" "),a("li",[e._v("Inherited and explicit "),a("code",[e._v("moveable")]),e._v(" properties may be set.")])]),e._v(" "),a("p",[e._v("With "),a("code",[e._v("editing:false")]),e._v(" and "),a("code",[e._v("moving: false")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("For red icon delete, inherited and explicit "),a("code",[e._v("editable")]),e._v(" properties always "),a("code",[e._v("false")]),e._v(". For\nswipe delete, inherited and explicit "),a("code",[e._v("editable")]),e._v(" properties may be set.")]),e._v(" "),a("li",[e._v("Inherited "),a("code",[e._v("moveable")]),e._v(" property is always "),a("code",[e._v("false")]),e._v(".")])]),e._v(" "),a("p",[e._v("With "),a("code",[e._v("editing:true")]),e._v(" and "),a("code",[e._v("moving:true")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("For red icon delete and swipe delete, inherited and explicit "),a("code",[e._v("editable")]),e._v(" properties may be set.")]),e._v(" "),a("li",[e._v("Inherited "),a("code",[e._v("moveable")]),e._v(" property is always "),a("code",[e._v("true")]),e._v(". Explicit "),a("code",[e._v("moveable")]),e._v(" property may be set.")])]),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"simple-table-view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-table-view","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple Table View")]),e._v(" "),a("p",[e._v("Create a basic table view.")]),e._v(" "),a("pre",[a("code",[e._v("Ti.UI.backgroundColor = 'white';\nvar win = Ti.UI.createWindow();\n\nvar tableData = [ {title: 'Apples'}, {title: 'Bananas'}, {title: 'Carrots'}, {title: 'Potatoes'} ];\n\nvar table = Ti.UI.createTableView({\n  data: tableData\n});\nwin.add(table);\nwin.open();\n")])]),e._v(" "),a("h3",{attrs:{id:"table-view-sections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-view-sections","aria-hidden":"true"}},[e._v("#")]),e._v(" Table View Sections")]),e._v(" "),a("p",[e._v("Create a table with three sections, each with two rows. Add two sections to the table\nbefore and one after it is rendered. This sample only works on Release 3.0 and later.")]),e._v(" "),a("pre",[a("code",[e._v("Ti.UI.backgroundColor = 'white';\nvar win = Ti.UI.createWindow();\n\nvar sectionFruit = Ti.UI.createTableViewSection({ headerTitle: 'Fruit' });\nsectionFruit.add(Ti.UI.createTableViewRow({ title: 'Apples' }));\nsectionFruit.add(Ti.UI.createTableViewRow({ title: 'Bananas' }));\n\nvar sectionVeg = Ti.UI.createTableViewSection({ headerTitle: 'Vegetables' });\nsectionVeg.add(Ti.UI.createTableViewRow({ title: 'Carrots' }));\nsectionVeg.add(Ti.UI.createTableViewRow({ title: 'Potatoes' }));\n\nvar table = Ti.UI.createTableView({\n  data: [sectionFruit, sectionVeg]\n});\n\nwin.add(table);\nwin.open();\n\nvar sectionFish = Ti.UI.createTableViewSection({ headerTitle: 'Fish' });\nsectionFish.add(Ti.UI.createTableViewRow({ title: 'Cod' }));\nsectionFish.add(Ti.UI.createTableViewRow({ title: 'Haddock' }));\n\n// Prior to Release 3.0, you can only add and remove sections by setting the data property\n// table.data = [ sectionFish, sectionFruit, sectionVeg ];\n// Due to a known issue, TIMOB-12616, the section access methods and sections\n// property should not be used on iOS with Release 3.0.x.\ntable.insertSectionBefore(0, sectionFish);\n")])]),e._v(" "),a("h3",{attrs:{id:"table-view-with-composite-layout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#table-view-with-composite-layout","aria-hidden":"true"}},[e._v("#")]),e._v(" Table View with Composite Layout")]),e._v(" "),a("p",[e._v("Create a table of rows that contain a custom child-view layout.")]),e._v(" "),a("pre",[a("code",[e._v("Ti.UI.setBackgroundColor('#000');\nvar win = Ti.UI.createWindow({\n  backgroundColor: 'black',\n  exitOnClose: true,\n  fullscreen: false,\n  title: 'TableView Demo'\n});\n\n// generate random number, used to make each row appear distinct for this example\nfunction randomInt(max){\n  return Math.floor(Math.random() * max) + 1;\n}\n\nvar IMG_BASE = 'images/';\nvar defaultFontSize = Ti.Platform.name === 'android' ? 16 : 14;\n\nvar tableData = [];\n\nfor (var i=1; i<=20; i++){\n  var row = Ti.UI.createTableViewRow({\n    className:'forumEvent', // used to improve table performance\n    selectedBackgroundColor:'white',\n    rowIndex:i, // custom property, useful for determining the row during events\n    height:110\n  });\n\n  var imageAvatar = Ti.UI.createImageView({\n    image: IMG_BASE + 'custom_tableview/user.png',\n    left:10, top:5,\n    width:50, height:50\n  });\n  row.add(imageAvatar);\n\n  var labelUserName = Ti.UI.createLabel({\n    color:'#576996',\n    font:{fontFamily:'Arial', fontSize:defaultFontSize+6, fontWeight:'bold'},\n    text:'Fred Smith ' + i,\n    left:70, top: 6,\n    width:200, height: 30\n  });\n  row.add(labelUserName);\n\n  var labelDetails = Ti.UI.createLabel({\n    color:'#222',\n    font:{fontFamily:'Arial', fontSize:defaultFontSize+2, fontWeight:'normal'},\n    text:'Replied to post with id ' + randomInt(1000) + '.',\n    left:70, top:44,\n    width:360\n  });\n  row.add(labelDetails);\n\n  var imageCalendar = Ti.UI.createImageView({\n    image:IMG_BASE + 'custom_tableview/eventsButton.png',\n    left:70, bottom: 2,\n    width:32, height: 32\n  });\n  row.add(imageCalendar);\n\n  var labelDate = Ti.UI.createLabel({\n    color:'#999',\n    font:{fontFamily:'Arial', fontSize:defaultFontSize, fontWeight:'normal'},\n    text:'on ' + randomInt(30) + ' Nov 2012',\n    left:105, bottom:10,\n    width:200, height:20\n  });\n  row.add(labelDate);\n\n  tableData.push(row);\n}\n\nvar tableView = Ti.UI.createTableView({\n  backgroundColor:'white',\n  data:tableData\n});\n\nwin.add(tableView);\nwin.open();\n")])]),e._v(" "),a("h3",{attrs:{id:"alloy-xml-markup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),a("p",[e._v("Previous table view sections example as an Alloy view.")]),e._v(" "),a("pre",[a("code",[e._v('<Alloy>\n    <Window id="win" backgroundColor="white">\n        <TableView id="table">\n            <TableViewSection id="sectionFruit" headerTitle="Fruit">\n                <TableViewRow title="Apple"/>\n                <TableViewRow title="Bananas"/>\n            </TableViewSection>\n            <TableViewSection id="sectionVeg" headerTitle="Vegetables">\n                <TableViewRow title="Carrots"/>\n                <TableViewRow title="Potatoes"/>\n            </TableViewSection>\n            <TableViewSection id="sectionFish" headerTitle="Fish">\n                <TableViewRow title="Cod"/>\n                <TableViewRow title="Haddock"/>\n            </TableViewSection>\n        </TableView>\n    </Window>\n</Alloy>\n')])]),e._v(" "),a("ApiDocs")],1)},[],!1,null,null,null);n.options.__file="tableview.md";t.default=n.exports}}]);