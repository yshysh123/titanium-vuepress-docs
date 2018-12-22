(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{628:function(e,t,a){"use strict";a.r(t);var i=a(14),r=Object(i.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-app-ios-searchableitem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-app-ios-searchableitem","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.App.iOS.SearchableItem")]),e._v(" "),a("ProxySummary"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("To effectively add and remove information from the iOS search index you will need to use the below listed modules:")]),e._v(" "),a("ul",[a("li",[a("type-link",{attrs:{type:"Titanium.App.iOS.SearchableItemAttributeSet"}},[e._v("Titanium.App.iOS.SearchableItemAttributeSet")]),e._v(" - Used to create metadata related to the "),a("code",[e._v("Ti.App.iOS.SearchableItem")])],1),e._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.App.iOS.SearchableItem"}},[e._v("Titanium.App.iOS.SearchableItem")]),e._v(" - Used to assemble metadata into a unique object package to be used by "),a("code",[e._v("Ti.App.iOS.SearchableIndex")])],1),e._v(" "),a("li",[a("type-link",{attrs:{type:"Titanium.App.iOS.SearchableIndex"}},[e._v("Titanium.App.iOS.SearchableIndex")]),e._v(" - Used to add and remove "),a("code",[e._v("Ti.App.iOS.SearchableItem")]),e._v(" objects to the device search index")],1)]),e._v(" "),a("p",[e._v("To use this feature make sure you have a compatible device running iOS 9 or later.")]),e._v(" "),a("p",[e._v("To create a SearchableItem object, use the Titanium.App.iOS.createSearchableItem method.\nPass a dictionary of properties to the method that will help identify the item.\nAt minimum, you must set the "),a("type-link",{attrs:{type:"Titanium.App.iOS.SearchableItem.attributeSet"}},[e._v("attributeSet")]),e._v(" property, which associates\nthe metadata with the SearchableItem object.")],1),e._v(" "),a("p",[e._v("Then, pass the SearchableItem object to a SearchableIndex object's\n"),a("type-link",{attrs:{type:"Titanium.App.iOS.SearchableIndex.addToDefaultSearchableIndex"}},[e._v("addToDefaultSearchableIndex()")]),e._v(" method to add the item\nto the device's search index.")],1),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"add-searchable-content-to-the-on-device-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-searchable-content-to-the-on-device-index","aria-hidden":"true"}},[e._v("#")]),e._v(" Add Searchable Content to the On-Device Index")]),e._v(" "),a("p",[e._v("The following example demonstrates how to create a new Ti.App.iOS.SearchableItem and\nadd a Ti.App.iOS.SearchableItemAttributeSet. The Ti.App.iOS.SearchableItem is then passed to the\nTi.App.iOS.SearchableIndex object to add it to the on-device search index.")]),e._v(" "),a("h4",{attrs:{id:"app-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-js","aria-hidden":"true"}},[e._v("#")]),e._v(" app.js")]),e._v(" "),a("pre",[a("code",[e._v('var searchItems = [];\nvar itemAttr = Ti.App.iOS.createSearchableItemAttributeSet({\n    itemContentType: Ti.App.iOS.UTTYPE_IMAGE,\n    title:"Titanium Core Spotlight Tutorial",\n    contentDescription:"Tech Example \\nOn: " + String.formatDate(new Date(),"short"),\n    keywords:["Mobile","Appcelerator","Titanium"]\n});\n\nvar item = Ti.App.iOS.createSearchableItem({\n    uniqueIndentifier:"my-id",\n    domainIdentifier:"com.mydomain",\n    attributeSet:itemAttr\n});\nsearchItems.push(item);\n\nvar indexer = Ti.App.iOS.createSearchableIndex();\n\nindexer.addToDefaultSearchableIndex(searchItems,function(e){\n    if(e.success){\n        alert("Press the home button and now search for your keywords");\n    }else{\n        alert("Errored: " + JSON.stringify(e.error));\n    }\n});\n')])]),e._v(" "),a("ApiDocs")],1)},[],!1,null,null,null);r.options.__file="searchableitem.md";t.default=r.exports}}]);