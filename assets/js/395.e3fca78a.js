(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{364:function(e,t,i){"use strict";i.r(t);var n=i(14),r=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"titanium-ui-refreshcontrol"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-refreshcontrol","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.RefreshControl")]),e._v(" "),i("ProxySummary"),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("You use a "),i("code",[e._v("RefreshControl")]),e._v(" with a "),i("type-link",{attrs:{type:"Titanium.UI.TableView"}},[e._v("Titanium.UI.TableView")]),e._v(", "),i("type-link",{attrs:{type:"Titanium.UI.ListView"}},[e._v("Titanium.UI.ListView")]),e._v(" or "),i("type-link",{attrs:{type:"Titanium.UI.ScrollView"}},[e._v("Titanium.UI.ScrollView")]),e._v(" object.\nIt provides an alternate method to implement "),i("strong",[e._v("pull to refresh")]),e._v(" functionality provided by\n"),i("type-link",{attrs:{type:"Titanium.UI.TableView.headerPullView"}},[e._v("Titanium.UI.TableView.headerPullView")]),e._v(" and "),i("type-link",{attrs:{type:"Titanium.UI.ListView.pullView"}},[e._v("Titanium.UI.ListView.pullView")]),e._v(" properties.")],1),e._v(" "),i("p",[e._v("Use the "),i("type-link",{attrs:{type:"Titanium.UI.createRefreshControl"}},[e._v("Titanium.UI.createRefreshControl")]),e._v(" method to create a RefreshControl.")],1),e._v(" "),i("p",[i("strong",[e._v("Important iOS 10+ Note")]),e._v(": If you use the RefreshControl inside a "),i("type-link",{attrs:{type:"Titanium.UI.Window"}},[e._v("Titanium.UI.Window")]),e._v(" that has the "),i("code",[e._v("largeTitleEnabled")]),e._v(" property\nset to "),i("code",[e._v("true")]),e._v(", you also need to set the "),i("code",[e._v("extendEdges")]),e._v(" property to either "),i("code",[e._v("[Ti.UI.EXTEND_EDGE_TOP]")]),e._v(" or "),i("code",[e._v("[Ti.UI.EXTEND_EDGE_ALL]")]),e._v("\nin order to prevent a flickering of the refresh spinner. In Titanium SDK 8+, the "),i("code",[e._v("extendEdges")]),e._v(" property will be set to "),i("code",[e._v("[Ti.UI.EXTEND_EDGE_ALL]")]),e._v("\nby default to match the native behavior.")],1),e._v(" "),i("h2",{attrs:{id:"examples"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),i("h3",{attrs:{id:"basic-pull-to-refresh"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#basic-pull-to-refresh","aria-hidden":"true"}},[e._v("#")]),e._v(" Basic Pull To Refresh")]),e._v(" "),i("p",[e._v("A basic sample showing the usage of refreshstart event with endRefreshing functionality.")]),e._v(" "),i("pre",[i("code",[e._v("var win = Ti.UI.createWindow({\n    fullscreen:true\n});\nvar counter = 0;\nfunction genData()\n{\n    var data = [];\n    var i=1;\n    for (i=1;i<=3;i++) {\n        data.push({properties:{title:'ROW '+(counter+i)}})\n    }\n    counter += 3;\n    return data;\n}\nvar section = Ti.UI.createListSection();\nsection.setItems(genData());\nvar control = Ti.UI.createRefreshControl({\n    tintColor:'red'\n})\nvar listView = Ti.UI.createListView({\n    sections:[section],\n    refreshControl:control\n});\ncontrol.addEventListener('refreshstart',function(e){\n    Ti.API.info('refreshstart');\n    setTimeout(function(){\n        Ti.API.debug('Timeout');\n        section.appendItems(genData());\n        control.endRefreshing();\n    }, 2000);\n})\nwin.add(listView);\nwin.open();\n")])]),e._v(" "),i("ApiDocs")],1)},[],!1,null,null,null);r.options.__file="refreshcontrol.md";t.default=r.exports}}]);