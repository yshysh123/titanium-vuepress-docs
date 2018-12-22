(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{306:function(e,r,s){"use strict";s.r(r);var n=s(14),a=Object(n.a)({},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"modules-cloud-friends"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-friends","aria-hidden":"true"}},[e._v("#")]),e._v(" Modules.Cloud.Friends")]),e._v(" "),s("ProxySummary"),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("h3",{attrs:{id:"add-a-friend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-a-friend","aria-hidden":"true"}},[e._v("#")]),e._v(" Add a friend")]),e._v(" "),s("p",[e._v("This example adds a friend and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.Friends.add({\n    user_ids: checked.join(\",\")\n}, function (e) {\n    if (e.success) {\n        alert('Friend(s) added');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"show-friend-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-friend-requests","aria-hidden":"true"}},[e._v("#")]),e._v(" Show friend requests")]),e._v(" "),s("p",[e._v("This example shows pending friend requests and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.Friends.requests(function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.friend_requests.length);\n        for (var i = 0; i < e.friend_requests.length; i++) {\n            var user = e.friend_requests[i].user;\n            alert('id: ' + user.id + '\\n' +\n                'first name: ' + user.first_name + '\\n' +\n                'last name: ' + user.last_name);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"approve-friend-requests"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#approve-friend-requests","aria-hidden":"true"}},[e._v("#")]),e._v(" Approve friend requests")]),e._v(" "),s("p",[e._v("This example approves pending friend requests and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.Friends.approve({\n    user_ids: checked.join(\",\")\n}, function (e) {\n    if (e.success) {\n        alert('Friend(s) approved');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"remove-friends"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-friends","aria-hidden":"true"}},[e._v("#")]),e._v(" Remove friends")]),e._v(" "),s("p",[e._v("This example removes friends and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.Friends.remove({\n    user_ids: checked.join(\",\")\n}, function (e) {\n    if (e.success) {\n        alert('Friend(s) removed');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"search-for-friends"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search-for-friends","aria-hidden":"true"}},[e._v("#")]),e._v(" Search for friends")]),e._v(" "),s("p",[e._v("This example requests information about particular friends and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.Friends.search({\n    user_id: searchID\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.users.length);\n        for (var i = 0; i < e.users.length; i++) {\n            var user = e.users[i];\n            alert('id: ' + user.id + '\\n' +\n                'first name: ' + user.first_name + '\\n' +\n                'last name: ' + user.last_name);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("ApiDocs")],1)},[],!1,null,null,null);a.options.__file="friends.md";r.default=a.exports}}]);