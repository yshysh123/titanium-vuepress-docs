(window.webpackJsonp=window.webpackJsonp||[]).push([[307],{615:function(e,o,t){"use strict";t.r(o);var r=t(14),i=Object(r.a)({},function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"titanium-network-bonjourservice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#titanium-network-bonjourservice","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.Network.BonjourService")]),e._v(" "),t("ProxySummary"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("You can obtain a "),t("code",[e._v("BonjourService")]),e._v(" instance by calling "),t("type-link",{attrs:{type:"Titanium.Network.createBonjourService"}},[e._v("Titanium.Network.createBonjourService")]),e._v("\nor from the "),t("code",[e._v("service")]),e._v(" list from a "),t("type-link",{attrs:{type:"Titanium.Network.BonjourBrowser"}},[e._v("BonjourBrowser")]),t("br"),e._v(" "),t("code",[e._v("updatedservices")]),e._v(" event.")],1),e._v(" "),t("p",[e._v("You can only publish Bonjour services attached to a socket which is currently listening;\nyou cannot publish a service for a remotely connected socket.  If you stop the Bonjour\nservice and wish to close the socket it uses, it is strongly recommended that you stop\nthe service first.  When a window which publishes a Bonjour service is closed, you must\nstop the service if the associated socket is also to be closed, or if it is no longer\nnecessary to publish.  Unlike other network operations, Bonjour service resolution and\npublishing is synchronous, so be aware that your code may block while resolution is going\non.  In particular, you may wish to display UI elements indicating background activity\nbefore beginning resolution.")]),e._v(" "),t("ApiDocs")],1)},[],!1,null,null,null);i.options.__file="bonjourservice.md";o.default=i.exports}}]);