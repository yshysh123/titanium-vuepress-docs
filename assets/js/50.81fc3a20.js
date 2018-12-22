(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{327:function(e,s,t){"use strict";t.r(s);var a=t(14),r=Object(a.a)({},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"modules-cloud-statuses"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-statuses","aria-hidden":"true"}},[e._v("#")]),e._v(" Modules.Cloud.Statuses")]),e._v(" "),t("ProxySummary"),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"create-a-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-status","aria-hidden":"true"}},[e._v("#")]),e._v(" Create a Status")]),e._v(" "),t("p",[e._v("This example creates a status and checks the response.")]),e._v(" "),t("pre",[t("code",[e._v("Cloud.Statuses.create({\n    place_id: myPlaceId,\n    message: 'What a great view!',\n    photo: Titanium.Filesystem.getFile('photo.jpg')\n}, function (e) {\n    if (e.success) {\n        var status = e.statuses[0];\n        alert('Success:\\n' +\n            'id: ' + status.id + '\\n' +\n            'place: ' + status.place.name);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),t("h3",{attrs:{id:"search-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search-status","aria-hidden":"true"}},[e._v("#")]),e._v(" Search Status")]),e._v(" "),t("p",[e._v("This example requests information about a user's status and checks the response.")]),e._v(" "),t("pre",[t("code",[e._v("Cloud.Statuses.search({\n    user_id: someUserId\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.statuses.length);\n        for (var i = 0; i < e.statuses.length; i++) {\n            var status = e.statuses[i];\n            alert('id: ' + status.id + '\\n' +\n                  'message: ' + status.message + '\\n' +\n                  'updated_at: ' + status.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),t("h3",{attrs:{id:"query-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-status","aria-hidden":"true"}},[e._v("#")]),e._v(" Query Status")]),e._v(" "),t("p",[e._v("This example requests information about statuses and checks the response.")]),e._v(" "),t("pre",[t("code",[e._v("Cloud.Statuses.query({\n    page: 1,\n    per_page: 20,\n    order: '-updated_at'\n}, function (e) {\n    if (e.success) {\n        for (var i = 0; i < e.statuses.length; i++) {\n            var status = e.statuses[i];\n            alert('Success:\\n' +\n               'id: ' + status.id + '\\n' +\n               'message: ' + status.message + '\\n' +\n               'updated_at: ' + status.updated_at);\n         }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),t("ApiDocs")],1)},[],!1,null,null,null);r.options.__file="statuses.md";s.default=r.exports}}]);