(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{320:function(e,t,s){"use strict";s.r(t);var n=s(14),a=Object(n.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"modules-cloud-posts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-posts","aria-hidden":"true"}},[e._v("#")]),e._v(" Modules.Cloud.Posts")]),e._v(" "),s("ProxySummary"),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("h3",{attrs:{id:"create-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-post","aria-hidden":"true"}},[e._v("#")]),e._v(" Create Post")]),e._v(" "),s("p",[e._v("This example creates a new post and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.Posts.create({\n    content: 'Man Walks On Moon',\n    title: 'News of the day',\n    photo: Titanium.Filesystem.getFile('photo.jpg')\n}, function (e) {\n    if (e.success) {\n        var post = e.posts[0];\n        alert('Success:\\n' +\n            'id: ' + post.id + '\\n' +\n            'title: ' + post.title + '\\n' +\n            'content: ' + post.content + '\\n' +\n            'updated_at: ' + post.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"show-a-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-a-post","aria-hidden":"true"}},[e._v("#")]),e._v(" Show a Post")]),e._v(" "),s("p",[e._v("This example retrieves information about a post and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.Posts.show({\n    post_id: savedPostId\n}, function (e) {\n    if (e.success) {\n        var post = e.posts[0];\n        alert('Success:\\n' +\n            'id: ' + post.id + '\\n' +\n            'title: ' + post.title + '\\n' +\n            'content: ' + post.content + '\\n' +\n            'updated_at: ' + post.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"query-for-posts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-for-posts","aria-hidden":"true"}},[e._v("#")]),e._v(" Query for Posts")]),e._v(" "),s("p",[e._v("This example requests a list of posts and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.Posts.query({\n    page: 1,\n    per_page: 20,\n    where: {\n        reviews_count: { '$gt': 1.0 }\n    }\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.posts.length);\n        for (var i = 0; i < e.posts.length; i++) {\n            var post = e.posts[i];\n            alert('id: ' + post.id + '\\n' +\n                'id: ' + post.id + '\\n' +\n                'title: ' + post.title + '\\n' +\n                'content: ' + post.content + '\\n' +\n                'updated_at: ' + post.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"update-a-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-a-post","aria-hidden":"true"}},[e._v("#")]),e._v(" Update a Post")]),e._v(" "),s("p",[e._v("This example updates a post and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.Posts.update({\n    post_id: savedPostId,\n    title: 'Lunar Eclipse'\n}, function (e) {\n    if (e.success) {\n        var post = e.posts[0];\n        alert('Success:\\n' +\n            'id: ' + post.id + '\\n' +\n            'title: ' + post.title + '\\n' +\n            'content: ' + post.content + '\\n' +\n            'updated_at: ' + post.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"remove-a-post"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-post","aria-hidden":"true"}},[e._v("#")]),e._v(" Remove a Post")]),e._v(" "),s("p",[e._v("This example deletes a post and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.Posts.remove({\n    post_id: savedPostId\n}, function (e) {\n    if (e.success) {\n        alert('Success');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("ApiDocs")],1)},[],!1,null,null,null);a.options.__file="posts.md";t.default=a.exports}}]);