(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{296:function(e,r,s){"use strict";s.r(r);var n=s(14),a=Object(n.a)({},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"modules-cloud-acls"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-acls","aria-hidden":"true"}},[e._v("#")]),e._v(" Modules.Cloud.ACLs")]),e._v(" "),s("ProxySummary"),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("h3",{attrs:{id:"create-an-acl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-acl","aria-hidden":"true"}},[e._v("#")]),e._v(" Create an ACL")]),e._v(" "),s("p",[e._v("This example creates an ACL object and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.ACLs.create({\n    name: 'testACL',\n    reader_ids: readers.ids.join(','),\n    writer_ids: writers.ids.join(','),\n    public_read: \"false\",\n    public_write: \"false\"\n}, function (e) {\n    if (e.success) {\n        alert('Created!');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"update-an-acl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-an-acl","aria-hidden":"true"}},[e._v("#")]),e._v(" Update an ACL")]),e._v(" "),s("p",[e._v("This example updates an ACL object and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.ACLs.update({\n    name: 'testACL',\n    reader_ids: '',\n    writer_ids: '',\n    public_read: \"true\",\n    public_write: \"true\"\n}, function (e) {\n    if (e.success) {\n        alert('Updated!');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"show-an-acl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-an-acl","aria-hidden":"true"}},[e._v("#")]),e._v(" Show an ACL")]),e._v(" "),s("p",[e._v("This example requests an ACL object and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.ACLs.show({\n    name: 'testACL'\n}, function (e) {\n    if (e.success) {\n        alert('Shown!');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"remove-an-acl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-an-acl","aria-hidden":"true"}},[e._v("#")]),e._v(" Remove an ACL")]),e._v(" "),s("p",[e._v("This example deletes an ACL object and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.ACLs.remove({\n    name: 'testACL'\n}, function (e) {\n    if (e.success) {\n        alert('Removed!');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"add-user-to-an-acl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#add-user-to-an-acl","aria-hidden":"true"}},[e._v("#")]),e._v(" Add user to an ACL")]),e._v(" "),s("p",[e._v("This example adds a user to an ACL object and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.ACLs.addUser({\n    name: 'testACL',\n    reader_ids: readers.ids.join(','),\n    writer_ids: writers.ids.join(',')\n}, function (e) {\n    if (e.success) {\n        alert('Added!');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"remove-user-from-an-acl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-user-from-an-acl","aria-hidden":"true"}},[e._v("#")]),e._v(" Remove user from an ACL")]),e._v(" "),s("p",[e._v("This example removes a user from an ACL object and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.ACLs.removeUser({\n    name: 'testACL',\n    reader_ids: readers.ids.join(','),\n    writer_ids: writers.ids.join(',')\n}, function (e) {\n    if (e.success) {\n        alert('Removed!');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("h3",{attrs:{id:"check-user-permissions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-user-permissions","aria-hidden":"true"}},[e._v("#")]),e._v(" Check user permissions")]),e._v(" "),s("p",[e._v("This example checks a user's permissions in an ACL and checks the response.")]),e._v(" "),s("pre",[s("code",[e._v("Cloud.ACLs.checkUser({\n    name: 'testACL',\n    user_id: userID\n}, function (e) {\n    if (e.success) {\n        alert('Read Permission: ' + e.permission['read permission'] +\n              '\\nWrite Permission: ' + e.permission['write permission']);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])]),e._v(" "),s("ApiDocs")],1)},[],!1,null,null,null);a.options.__file="acls.md";r.default=a.exports}}]);