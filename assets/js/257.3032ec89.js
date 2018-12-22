(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{629:function(e,t,a){"use strict";a.r(t);var r=a(14),n=Object(r.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-app-ios-searchquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-app-ios-searchquery","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.App.iOS.SearchQuery")]),e._v(" "),a("ProxySummary"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("You can use this API to search multiple "),a("type-link",{attrs:{type:"Titanium.App.iOS.SearchableItem"}},[e._v("Titanium.App.iOS.SearchableItem")]),e._v(" objects at the same time. You can do that\nby using the "),a("code",[e._v("queryString")]),e._v(" parameter that has a special syntax to filter and index several items. Please refer\nto the official "),a("a",{attrs:{href:"https://developer.apple.com/reference/corespotlight/cssearchquery",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apple documentation"),a("OutboundLink")],1),e._v(" for detailed information on how to structure your search-query to get the\nbest possible results.")],1),e._v(" "),a("p",[e._v("To use this feature make sure you have a compatible device running iOS 10 or later.")]),e._v(" "),a("p",[e._v("To create a SearchableItem object, use the Titanium.App.iOS.createSearchableItem method.\nPass a dictionary of properties to the method that will help identify the item.\nAt minimum, you must set the "),a("type-link",{attrs:{type:"Titanium.App.iOS.SearchableItem.attributeSet"}},[e._v("attributeSet")]),e._v(" property, which associates\nthe metadata with the SearchableItem object.")],1),e._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),a("h3",{attrs:{id:"perform-a-simple-search-query-for-all-items-that-start-with-searchable-in-it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#perform-a-simple-search-query-for-all-items-that-start-with-searchable-in-it","aria-hidden":"true"}},[e._v("#")]),e._v(' Perform a simple search-query for all items that start with "Searchable" in it.')]),e._v(" "),a("p",[e._v("The following example demonstrates how to search a Ti.App.iOS.SearchableItem using the iOS 10\nTi.App.iOS.SearchQuery API.")]),e._v(" "),a("h4",{attrs:{id:"app-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-js","aria-hidden":"true"}},[e._v("#")]),e._v(" app.js")]),e._v(" "),a("pre",[a("code",[e._v('var win = Ti.UI.createWindow({\n    backgroundColor: "#fff"\n});\nvar btn = Ti.UI.createButton({\n    title: "Start search-query"\n});\n\nvar searchItems = [];\nvar itemAttr = Ti.App.iOS.createSearchableItemAttributeSet({\n    itemContentType: Ti.App.iOS.UTTYPE_IMAGE,\n    title: "Titanium Core Spotlight Tutorial"\n});\n\nitemAttr.contentDescription = "Tech Example \\nOn: " + String.formatDate(new Date(), "short");\nitemAttr.keywords = ["Mobile", "Appcelerator", "Titanium"];\nitemAttr.displayName = "Hello world";\n\nvar item = Ti.App.iOS.createSearchableItem({\n    uniqueIdentifier: "my-id",\n    domainIdentifier: "com.mydomain",\n    attributeSet: itemAttr\n});\nsearchItems.push(item);\n\nvar indexer = Ti.App.iOS.createSearchableIndex();\n\nindexer.addToDefaultSearchableIndex(searchItems, function(e) {\n    if (e.success) {\n        Ti.API.info("Press the home button and now search for your keywords");\n    } else {\n        alert("Searchable index could not be created: " + JSON.stringify(e.error));\n    }\n});\n\nbtn.addEventListener("click", function() {\n    // An array of found Ti.App.iOS.SearchableItem\'s\n    var allItems = [];\n\n    // The search-query\n    var searchQuery = Ti.App.iOS.createSearchQuery({\n        queryString: \'title == "Titanium*"\',\n        attributes: ["title", "displayName", "keywords", "contentType"]\n    });\n\n    // The event to be called when a new batch of items is found\n    searchQuery.addEventListener("founditems", function(e) {\n        for (var i = 0; i < e.items.length; i++) {\n            allItems.push(e.items[i]);\n        }\n    });\n\n    // The event to be called when the search-query completes\n    searchQuery.addEventListener("completed", function(e) {\n        if (!e.success) {\n            alert(e.error);\n        }\n\n        for (var i = 0; i < allItems.length; i++) {\n            var attributeSet = allItems[i].attributeSet\n            var foundTitle = attributeSet.title\n            var foundDisplayName = attributeSet.displayName\n\n            Ti.API.info("title: " + foundTitle + ", displayName: " + foundDisplayName);\n        }\n    });\n\n    // Start the search-query (or use searchQuery.cancel()) to abort it\n    searchQuery.start();\n});\n\nwin.add(btn);\nwin.open();\n')])]),e._v(" "),a("ApiDocs")],1)},[],!1,null,null,null);n.options.__file="searchquery.md";t.default=n.exports}}]);