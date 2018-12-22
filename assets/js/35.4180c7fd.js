(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{303:function(e,a,n){"use strict";n.r(a);var s=n(14),i=Object(s.a)({},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"modules-cloud-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Modules.Cloud.Files")]),e._v(" "),n("ProxySummary"),e._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),n("h3",{attrs:{id:"create-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#create-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Create File")]),e._v(" "),n("p",[e._v("This example creates a new file and checks the response.")]),e._v(" "),n("pre",[n("code",[e._v("Cloud.Files.create({\n    name: 'test.dat',\n    file: Titanium.Filesystem.getFile('test.dat')\n}, function (e) {\n    if (e.success) {\n        var file = e.files[0];\n        alert('Success:\\n' +\n            'id: ' + file.id + '\\n' +\n            'name: ' + file.name + '\\n' +\n            'updated_at: ' + file.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),n("h3",{attrs:{id:"show-a-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#show-a-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Show a File")]),e._v(" "),n("p",[e._v("This example retrieves information about a file and checks the response.")]),e._v(" "),n("pre",[n("code",[e._v("Cloud.Files.show({\n    file_id: savedFileId\n}, function (e) {\n    if (e.success) {\n        var file = e.files[0];\n        alert('Success:\\n' +\n            'id: ' + file.id + '\\n' +\n            'name: ' + file.name + '\\n' +\n            'updated_at: ' + file.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),n("h3",{attrs:{id:"query-for-files"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#query-for-files","aria-hidden":"true"}},[e._v("#")]),e._v(" Query for Files")]),e._v(" "),n("p",[e._v("This example requests a list of files and checks the response.")]),e._v(" "),n("pre",[n("code",[e._v("Cloud.Files.query({\n    page: 1,\n    per_page: 20\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.files.length);\n        for (var i = 0; i < e.files.length; i++) {\n            var file = e.files[i];\n            alert('id: ' + file.id + '\\n' +\n                'name: ' + file.name + '\\n' +\n                'updated_at: ' + file.updated_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),n("h3",{attrs:{id:"update-a-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#update-a-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Update a File")]),e._v(" "),n("p",[e._v("This example updates a file and checks the response.")]),e._v(" "),n("pre",[n("code",[e._v("Cloud.Files.update({\n    file_id: savedFileId,\n    name: 'Notice'\n}, function (e) {\n    if (e.success) {\n        var file = e.files[0];\n        alert('Success:\\n' +\n            'id: ' + file.id + '\\n' +\n            'name: ' + file.name + '\\n' +\n            'updated_at: ' + file.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),n("h3",{attrs:{id:"remove-a-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remove-a-file","aria-hidden":"true"}},[e._v("#")]),e._v(" Remove a File")]),e._v(" "),n("p",[e._v("This example deletes a file and checks the response.")]),e._v(" "),n("pre",[n("code",[e._v("Cloud.Files.remove({\n    file_id: savedFileId\n}, function (e) {\n    if (e.success) {\n        alert('Removed');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),n("ApiDocs")],1)},[],!1,null,null,null);i.options.__file="files.md";a.default=i.exports}}]);