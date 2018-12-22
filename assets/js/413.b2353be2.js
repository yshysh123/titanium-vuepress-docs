(window.webpackJsonp=window.webpackJsonp||[]).push([[413],{675:function(e,n,t){"use strict";t.r(n);var i=t(14),o=Object(i.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"titanium-ui-window"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-window","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.UI.Window")]),e._v(" "),t("ProxySummary"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("To create a window, use the "),t("type-link",{attrs:{type:"Titanium.UI.createWindow"}},[e._v("Titanium.UI.createWindow")]),e._v(" method or a "),t("strong",[t("code",[e._v("<Window>")])]),e._v(" Alloy element.")],1),e._v(" "),t("p",[e._v("A window is a top-level container which can contain other views. Windows can\nbe "),t("em",[e._v("opened")]),e._v(" and "),t("em",[e._v("closed")]),e._v(".  Opening a window causes the window and its child\nviews to be added to the application's render stack, on top of any previously opened\nwindows. Closing a window removes the window and its children from the render stack.")]),e._v(" "),t("p",[e._v("Windows "),t("em",[e._v("contain")]),e._v(" other views, but in general they are not "),t("em",[e._v("contained")]),e._v(" inside\nother views. There are a few specialized views that manage windows:")]),e._v(" "),t("ul",[t("li",[t("type-link",{attrs:{type:"Titanium.UI.NavigationWindow"}},[e._v("NavigationWindow")])],1),e._v(" "),t("li",[t("type-link",{attrs:{type:"Titanium.UI.iPad.SplitWindow"}},[e._v("SplitWindow")])],1),e._v(" "),t("li",[t("type-link",{attrs:{type:"Titanium.UI.TabGroup"}},[e._v("TabGroup")])],1),e._v(" "),t("li",[t("type-link",{attrs:{type:"Titanium.UI.Tab"}},[e._v("Tab")])],1)]),e._v(" "),t("p",[e._v("By default, windows occupy the entire screen except for the navigation bar,\nstatus bar, and in the case of windows contained in tab groups, the tab bar.\nTo take up the entire screen, covering any other UI, specify "),t("code",[e._v("fullscreen:true")]),e._v("\nwhen creating the window.")]),e._v(" "),t("h3",{attrs:{id:"pass-context-between-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pass-context-between-windows","aria-hidden":"true"}},[e._v("#")]),e._v(" Pass Context Between Windows")]),e._v(" "),t("p",[e._v("To pass data between windows, use a\n"),t("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/CommonJS_Modules_in_Titanium",target:"_blank",rel:"noopener noreferrer"}},[e._v("CommonJS module"),t("OutboundLink")],1),e._v("\nto save information from one window then retrieve it in another.  In the example below, the foo\nmodule exposes two methods to store and retrieve an object.  The first window of the project\nloads the foo module and uses the set method to store some data before opening the second window.\nThe second window loads the same module and is able to retrieve the content saved by the first\nwindow with the get method.")]),e._v(" "),t("p",[e._v("Note that for Alloy projects, you can simply pass the context as the second argument of the\nAlloy.createController method, then retrieve the data with the special variable "),t("code",[e._v("$.args")]),e._v("\nin the controller code.")]),e._v(" "),t("p",[t("code",[e._v("app/lib/foo.js")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v("// For a classic Titanium project, save the file to 'Resources/foo.js'\nvar data = {};\nfunction setData (obj){\n    data = obj;\n}\nfunction getData () {\n    return data;\n}\n\n// The special variable 'exports' exposes the functions as public\nexports.setData = setData;\nexports.getData = getData;\n")])]),e._v(" "),t("p",[t("code",[e._v("app/views/index.xml")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v('<Alloy>\n    <Window backgroundColor="blue">\n        <Label onClick="openWindow">Open the Red Window!</Label>\n    </Window>\n</Alloy>\n')])]),e._v(" "),t("p",[t("code",[e._v("app/controllers/index.js")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v("var foo = require('foo');\nfoo.setData({foobar: 42});\n\nfunction openWindow () {\n    var win2 = Alloy.createController('win2').getView();\n    // For Alloy projects, you can pass context\n    // to the controller in the Alloy.createController method.\n    // var win2 = Alloy.createController('win2', {foobar: 42}).getView();\n    win2.open();\n}\n\n$.index.open();\n")])]),e._v(" "),t("p",[t("code",[e._v("app/views/win2.xml")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v('<Alloy>\n    <Window backgroundColor="red">\n        <Label id="label">I am a red window.</Label>\n    </Window>\n</Alloy>\n')])]),e._v(" "),t("p",[t("code",[e._v("app/controllers/win2.js")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v("var foo = require('foo');\n$.label.text = foo.getData().foobar;\n\n// For Alloy projects, you can also pass in context\n// with the Alloy.createController method and retrieve\n// it in the controller code.\n// $.label.text = $.args.foobar;\n")])]),e._v(" "),t("h3",{attrs:{id:"modal-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#modal-windows","aria-hidden":"true"}},[e._v("#")]),e._v(" Modal Windows")]),e._v(" "),t("p",[e._v("In the user interface, a modal window is a window that blocks the main application UI until the\nmodal window is dismissed.  A modal window requires the user to interact with it to resume the\nnormal flow of the application.  For example, if an action requires the user to login, the\napplication can present a login window, then after the user is authenticated, the normal flow\nof the application can be resumed.")]),e._v(" "),t("p",[e._v("To create a modal window, set the "),t("code",[e._v("modal")]),e._v(" property to "),t("code",[e._v("true")]),e._v(" in the dictionary passed to\neither the "),t("code",[e._v("Titanium.UI.createWindow()")]),e._v(" method or the Window object's "),t("code",[e._v("open()")]),e._v(" method.")]),e._v(" "),t("h3",{attrs:{id:"android-behavior"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android-behavior","aria-hidden":"true"}},[e._v("#")]),e._v(" Android Behavior")]),e._v(" "),t("p",[e._v("The Android platform does not have a concept of a modal window but instead uses modal\ndialogs. You may want to use a "),t("type-link",{attrs:{type:"Titanium.UI.AlertDialog"}},[e._v("Titanium.UI.AlertDialog")]),e._v(" or "),t("type-link",{attrs:{type:"Titanium.UI.OptionDialog"}},[e._v("Titanium.UI.OptionDialog")]),e._v(" and\nuse the "),t("code",[e._v("androidView")]),e._v(" property rather than a modal window.")],1),e._v(" "),t("p",[e._v("For Android, Titanium creates a heavyweight window with a translucent background\n(if the background properties are not set). Before API level 14 (Android 4.x), the\nmodal window will blur the background.  On API level 14 and above, the Android OS no longer\nsupports the blur effect.")]),e._v(" "),t("p",[e._v("The combination of "),t("code",[e._v("fullscreen:true")]),e._v(" and "),t("code",[e._v("modal:true")]),e._v(" will not work as expected.\nIf the background window displays the status bar or action bar, it will be visible behind the modal\nwindow.")]),e._v(" "),t("p",[e._v("Note that Titanium will allow a non-modal window to open on top of a modal window on\nAndroid.")]),e._v(" "),t("h3",{attrs:{id:"ios-behavior"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios-behavior","aria-hidden":"true"}},[e._v("#")]),e._v(" iOS Behavior")]),e._v(" "),t("p",[e._v("By default, if you do not set a "),t("code",[e._v("backgroundColor")]),e._v(", the modal's background color will be the\nvalue set to "),t("code",[e._v("Titanium.UI.backgroundColor")]),e._v(".")]),e._v(" "),t("p",[e._v("The modal window will not show the background window stack even if you make the modal translucent.\nFor fullscreen modals, when the modal appears, the background window stack is removed. For\nnon-fullscreen modals on the iPad, the background will be opaque gray if a background color\nis not specified.")]),e._v(" "),t("p",[e._v("By default, modal windows appear from the bottom of the screen and slide up. To change the default\ntransition, set the "),t("code",[e._v("modalTransitionStyle")]),e._v(" property to a\n"),t("code",[e._v("Titanium.UI.iOS.MODAL_TRANSITION_STYLE_*")]),e._v(" constant in the dictionary passed to the Window\nobject's "),t("code",[e._v("open()")]),e._v(" method.")]),e._v(" "),t("p",[e._v("Modal windows should not support orientation modes that the window they are opened over do not\nsupport. Doing otherwise "),t("em",[e._v("may")]),e._v(" cause bad visual/redraw behavior after the modal is dismissed,\ndue to how iOS manages modal transitions.")]),e._v(" "),t("p",[e._v("Starting with Release 3.1.3, if the "),t("code",[e._v("orientationModes")]),e._v(" property of a modal window is undefined,\nthen the orientations supported by this window would be the orientation modes specified by\nthe "),t("code",[e._v("tiapp.xml")]),e._v(" with the "),t("code",[e._v("UISupportedInterfaceOrientations")]),e._v(" key.")]),e._v(" "),t("p",[e._v("iOS does not allow opening non-modal windows on top of a modal window.")]),e._v(" "),t("h4",{attrs:{id:"ipad-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ipad-features","aria-hidden":"true"}},[e._v("#")]),e._v(" iPad Features")]),e._v(" "),t("p",[e._v('In addition to full-screen modal windows, iPad supports "Page sheet"\nand "Form sheet" style windows:')]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("Page sheet")]),e._v(" style windows have a fixed width, equal to the width of the screen\nin portait mode, and a height equal to the "),t("em",[e._v("current")]),e._v(" height of the screen. This means\nthat in portrait mode, the window covers the entire screen. In landscape mode,\nthe window is centered on the screen horizontally.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Form sheet")]),e._v(" style windows are smaller than the screen size, and centered on the screen.")])])]),e._v(" "),t("p",[e._v("The example below is a modal window using the Form sheet style:")]),e._v(" "),t("img",{attrs:{src:"images/window/window-modal.png",width:"400"}}),e._v(" "),t("p",[e._v("You can create this type of modal window on iPad with the following code snippet:")]),e._v(" "),t("pre",[t("code",[e._v('var win = Ti.UI.createNavigationWindow({\n    window: Ti.UI.createWindow({\n        title: "Modal Window"\n    })\n});\n\nwin.open({\n    modal: true,\n    modalTransitionStyle: Ti.UI.iOS.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,\n    modalStyle: Ti.UI.iOS.MODAL_PRESENTATION_FORMSHEET\n});\n')])]),e._v(" "),t("h3",{attrs:{id:"animations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#animations","aria-hidden":"true"}},[e._v("#")]),e._v(" Animations")]),e._v(" "),t("p",[e._v("Windows can be animated like a "),t("type-link",{attrs:{type:"Titanium.UI.View"}},[e._v("View")]),e._v(", such as using an animation\nto open or close a window.  The example below creates a window\nthat opens from small to large with a bounce effect.  This is done by applying a\ntransformation at initialization time that scales the original size of the window to 0.\nWhen the window is opened, a new 2D transformation is applied that will scale the window\nsize from 0 to 110% of it's original size, then, after 1/20th of a second, it is scaled\nback to it's original size at 100%. This gives the bounce effect during animation.")],1),e._v(" "),t("p",[t("code",[e._v("app/views/index.xml")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v('<Alloy>\n    <Window backgroundColor="blue" onPostlayout="animateOpen" >\n        <Label color="orange">Animated Window</Label>\n    </Window>\n</Alloy>\n')])]),e._v(" "),t("p",[t("code",[e._v("app/controllers/index.js")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v("$.index.transform = Titanium.UI.create2DMatrix().scale(0);\n$.index.open();\n\nvar a = Ti.UI.createAnimation({\n    transform : Ti.UI.create2DMatrix().scale(1.1),\n    duration : 2000,\n});\na.addEventListener('complete', function() {\n    $.index.animate({\n        transform: Ti.UI.create2DMatrix(),\n        duration: 200\n    });\n});\n\nfunction animateOpen() {\n    $.index.animate(a);\n}\n")])]),e._v(" "),t("p",[e._v('Note that to animate an Android heavyweight window while you open it, you need\nto follow a specific procedure which is explained below in "Heavyweight\nWindow Transitions in Android".')]),e._v(" "),t("h3",{attrs:{id:"ios-platform-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios-platform-notes","aria-hidden":"true"}},[e._v("#")]),e._v(" iOS Platform Notes")]),e._v(" "),t("h3",{attrs:{id:"ios-transition-animations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios-transition-animations","aria-hidden":"true"}},[e._v("#")]),e._v(" iOS Transition Animations")]),e._v(" "),t("p",[e._v("iOS contains built-in transition animations when switching between non-modal windows. In the Window's\n"),t("code",[e._v("open")]),e._v(" method, set the "),t("code",[e._v("transition")]),e._v(" property to a "),t("code",[e._v("Titanium.UI.iOS.AnimationStyle")]),e._v(" constant to use an animation.\nFor example, to flip right-to-left between two windows:")]),e._v(" "),t("p",[t("code",[e._v("app/views/index.xml")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v('<Alloy>\n    <Window backgroundColor="blue" onOpen="animateOpen">\n        <Label id="label">I am a blue window!</Label>\n    </Window>\n</Alloy>\n')])]),e._v(" "),t("p",[t("code",[e._v("app/controllers/index.js")])]),e._v(" "),t("pre",[t("code",[e._v("function animateOpen() {\n    Alloy.createController('win2').getView().open({\n        transition: Ti.UI.iOS.AnimationStyle.FLIP_FROM_LEFT\n    });\n}\n$.index.open();\n")])]),e._v(" "),t("p",[t("code",[e._v("app/views/win2.xml")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v('<Alloy>\n    <Window backgroundColor="red">\n        <Label id="label">I am a red window!</Label>\n    </Window>\n</Alloy>\n')])]),e._v(" "),t("p",[e._v("In the above example, the red window will be animated from the right-to-left over the blue window.")]),e._v(" "),t("p",[e._v("You can create transition animations when opening and closing windows in\neither a "),t("type-link",{attrs:{type:"Titanium.UI.iOS.NavigationWindow"}},[e._v("Titanium.UI.iOS.NavigationWindow")]),e._v(" or "),t("type-link",{attrs:{type:"Titanium.UI.Tab"}},[e._v("Titanium.UI.Tab")]),e._v(".")],1),e._v(" "),t("p",[e._v("Use the "),t("type-link",{attrs:{type:"Titanium.UI.iOS.createTransitionAnimation"}},[e._v("Titanium.UI.iOS.createTransitionAnimation")]),e._v(" method to specify an animation objects to hide and\nshow the window, then set the newly created TransitionAnimation object to the window's\n"),t("type-link",{attrs:{type:"Titanium.UI.Window.transitionAnimation"}},[e._v("Titanium.UI.Window.transitionAnimation")]),e._v(" property.")],1),e._v(" "),t("p",[e._v("In the example below, the windows are closed by rotating them upside down while simulatenously\nmaking them transparent:")]),e._v(" "),t("p",[t("code",[e._v("app/views/index.xml")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v('<Alloy>\n    <NavigationWindow platform="ios">\n        <Window id="redwin" title="Red Window" backgroundColor="red">\n            <Button id="button" onClick="openBlueWindow">Open Blue Window</Button>\n        </Window>\n    </NavigationWindow>\n</Alloy>\n')])]),e._v(" "),t("p",[t("code",[e._v("app/controllers/index.js")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v("function openBlueWindow(e) {\n    var bluewin = Alloy.createController('bluewin').getView();\n    $.index.openWindow(bluewin);\n}\n\n$.redwin.transitionAnimation = Ti.UI.iOS.createTransitionAnimation({\n    duration: 300,\n    // The show transition makes the window opaque and rotates it correctly\n    transitionTo: {\n        opacity: 1,\n        duration: 300,\n        transform: Ti.UI.create2DMatrix()\n    },\n    // The hide transition makes the window transparent and rotates it upside down\n    transitionFrom: {\n        opacity: 0,\n        duration: 300 / 2,\n        transform: Ti.UI.create2DMatrix().rotate(180),\n    }\n});\n\n$.index.open();\n")])]),e._v(" "),t("p",[t("code",[e._v("app/views/bluewin.xml")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v('<Alloy>\n    <Window title="Blue Window" backgroundColor="blue" opacity="0">\n        <Button onClick="closeWindow">Close Window</Button>\n    </Window>\n</Alloy>\n')])]),e._v(" "),t("p",[t("code",[e._v("app/controllers/bluewin.js")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v("function closeWindow(){\n    $.bluewin.close();\n}\n\n$.bluewin.transitionAnimation = Ti.UI.iOS.createTransitionAnimation({\n    duration: 300,\n    // The show transition makes the window opaque and rotates it correctly\n    transitionTo: {\n        opacity: 1,\n        duration: 300,\n        transform: Ti.UI.create2DMatrix()\n    },\n    // The hide transition makes the window transparent and rotates it upside down\n    transitionFrom: {\n        opacity: 0,\n        duration: 300 / 2,\n        transform: Ti.UI.create2DMatrix().rotate(180),\n    }\n});\n\n$.bluewin.transform = Ti.UI.create2DMatrix().rotate(180);\n")])]),e._v(" "),t("h3",{attrs:{id:"android-platform-notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android-platform-notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Android Platform Notes")]),e._v(" "),t("h3",{attrs:{id:"android-heavyweight-and-lightweight-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android-heavyweight-and-lightweight-windows","aria-hidden":"true"}},[e._v("#")]),e._v(" Android Heavyweight and Lightweight Windows")]),e._v(" "),t("p",[e._v("Prior to Release Titanium 3.2.0 in Android, Titanium windows can be heavyweight or lightweight:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("A "),t("em",[e._v("heavyweight")]),e._v(" window is associated with a new Android\n"),t("type-link",{attrs:{type:"Titanium.Android.Activity"}},[e._v("Activity")]),e._v(".")],1)]),e._v(" "),t("li",[t("p",[e._v("A "),t("em",[e._v("lightweight")]),e._v(" window is a fullscreen view, and runs in the current Android Activity.")])])]),e._v(" "),t("p",[e._v("The "),t("type-link",{attrs:{type:"Titanium.UI.createWindow"}},[e._v("createWindow")]),e._v(" call creates a heavyweight window\nif any of the following properties are defined (set to either "),t("code",[e._v("true")]),e._v(" or "),t("code",[e._v("false")]),e._v(")\non creation:")],1),e._v(" "),t("ul",[t("li",[t("code",[e._v("fullscreen")])]),e._v(" "),t("li",[t("code",[e._v("navBarHidden")])]),e._v(" "),t("li",[t("code",[e._v("modal")])]),e._v(" "),t("li",[t("code",[e._v("windowSoftInputMode")])])]),e._v(" "),t("p",[e._v("Starting with Release 3.2.0 in Android, all the windows are heavyweight. If you still want\nthe old behavior, you can enable the "),t("code",[e._v("ti.android.useLegacyWindow")]),e._v(" property in the "),t("code",[e._v("tiapp.xml")]),e._v(":")]),e._v(" "),t("pre",[t("code",[e._v('<property name="ti.android.useLegacyWindow" type="bool">true</property>\n')])]),e._v(" "),t("p",[e._v("Note that this property only works with Release 3.2.x. It has no effect on other releases.")]),e._v(" "),t("p",[e._v("A heavyweight window is always created when you open a new window from inside a\n"),t("type-link",{attrs:{type:"Titanium.UI.TabGroup"}},[e._v("TabGroup")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"heavyweight-window-transitions-in-android"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#heavyweight-window-transitions-in-android","aria-hidden":"true"}},[e._v("#")]),e._v(" Heavyweight Window Transitions in Android")]),e._v(" "),t("p",[e._v("As explained above, heavyweight windows are their own Android Activity. The only way\nto animate the opening or closing of an Activity in Android is to apply an animation "),t("em",[e._v("resource")]),e._v("\nto it.  Passing a "),t("type-link",{attrs:{type:"Titanium.UI.Animation"}},[e._v("Titanium.UI.Animation")]),e._v(" object as a parameter to "),t("type-link",{attrs:{type:"Titanium.UI.Window.open"}},[e._v("Titanium.UI.Window.open")]),e._v("\nor "),t("type-link",{attrs:{type:"Titanium.UI.Window.close"}},[e._v("Titanium.UI.Window.close")]),e._v(" will have no effect if the window being opened/closed is heavyweight\nand thus opens/closes its own Activity.")],1),e._v(" "),t("p",[e._v("Instead, in the parameter dictionary you pass to "),t("type-link",{attrs:{type:"Titanium.UI.Window.open"}},[e._v("Titanium.UI.Window.open")]),e._v(" or "),t("type-link",{attrs:{type:"Titanium.UI.Window.close"}},[e._v("Titanium.UI.Window.close")]),e._v(",\nyou should set the "),t("code",[e._v("activityEnterAnimation")]),e._v(" and "),t("code",[e._v("activityExitAnimation")]),e._v(" keys to\nanimation resources. "),t("code",[e._v("activityEnterAnimation")]),e._v(" should be set to the animation you want to run\non the incoming activity, while "),t("code",[e._v("activityExitAnimation")]),e._v(" should be set to the animation you\nwant to run on the outgoing activity that you are leaving.")],1),e._v(" "),t("p",[e._v("Animation resources are available through the "),t("code",[e._v("R")]),e._v(" object. Use either "),t("type-link",{attrs:{type:"Titanium.Android.R"}},[e._v("Titanium.Android.R")]),e._v(" for\nbuilt-in resources or "),t("type-link",{attrs:{type:"Titanium.App.Android.R"}},[e._v("Titanium.App.Android.R")]),e._v(" for resources that you package in your application.")],1),e._v(" "),t("p",[e._v("As an example, you may wish for the window that you are opening to fade in while the window\nyou are leaving should fade out:")]),e._v(" "),t("pre",[t("code",[e._v("var win2 = Ti.UI.createWindow({\n    fullscreen: false // Makes it heavyweight before Titanium 3.2.0\n});\n\nwin2.open({\n    activityEnterAnimation: Ti.Android.R.anim.fade_in,\n    activityExitAnimation: Ti.Android.R.anim.fade_out\n});\n")])]),e._v(" "),t("p",[e._v("See the official Android "),t("a",{attrs:{href:"https://developer.android.com/reference/android/R.anim.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("R.anim"),t("OutboundLink")],1),e._v(" documentation\nfor information about built-in animations.")]),e._v(" "),t("p",[e._v('For information on creating your own animation resource XML files, see\n"'),t("a",{attrs:{href:"https://developer.android.com/guide/topics/resources/animation-resource.html#View",target:"_blank",rel:"noopener noreferrer"}},[e._v("View Animation"),t("OutboundLink")],1),e._v("\"\nin Android's Resources documentation. After creating an animation resource file, you can place it under\n"),t("code",[e._v("platform/android/res/anim")]),e._v(" in your Titanium project folder and it will be packaged in your app's APK\nand then available via "),t("type-link",{attrs:{type:"Titanium.App.Android.R"}},[e._v("Titanium.App.Android.R")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"material-design-transitions-in-android"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#material-design-transitions-in-android","aria-hidden":"true"}},[e._v("#")]),e._v(" Material design transitions in Android")]),e._v(" "),t("p",[e._v("You can provide transition between common elements among participating activities. For example in a master-detail pattern,\nclicking on a row item animates the common elements of image, title smoothly into details activity as if they are part of\nthe same scene. This seamless animation is called shared element transition and can be achieved by the following steps.")]),e._v(" "),t("p",[e._v("Say window A is opening window B.\nFirstly, specify a unique "),t("code",[e._v("transitionName")]),e._v(" to the common UI elements between the two windows.\nNext use "),t("code",[e._v("addSharedElement")]),e._v(" method on window B passing the window A common UI element and the transition name. This tells the system\nwhich views are shared between windows and performs the transition between them. Note that we specify the UI elements of window A\nsince the system needs the source element and connects the destination element from the shared transition name once window B is created\nand shown.")]),e._v(" "),t("p",[e._v("For example to transition a title label in window A to a title label in window B.")]),e._v(" "),t("pre",[t("code",[e._v("// Create label in window A with a unique transitionName.\nvar titleInWinA = new Ti.UI.createLabel({\n    text:'Top 10 pics from Mars!',\n    left:70, top: 6,\n    width:200, height: 30,\n    transitionName: 'title'\n});\nwindowA.add(titleInWinA);\n\n// Creating label in window B, note that the same transitionName is used.\nvar titleInWinB = new Ti.UI.createLabel({\n    text:'Top 10 pics from Mars!',\n    left:50, top: 10,\n    width:200, height: 30,\n    transitionName: 'title'\n});\n\n// Before opening window B specify the common UI elements.\nwindowB.addSharedElement(titleInWinA, \"title\");\nwindowB.open();\n")])]),e._v(" "),t("p",[e._v("Further you can use "),t("code",[e._v("activityEnterTransition")]),e._v(", "),t("code",[e._v("activityExitTransition")]),e._v(", "),t("code",[e._v("activityReenterTransition")]),e._v(" and "),t("code",[e._v("activityReturnTransition")]),e._v(" to customize\nthe way activities transition into the scene. Currently activity transition will work only when atleast a shared element is used between the participating\nactivities.")]),e._v(" "),t("p",[e._v("Note that specifying the transitions is not mandatory. If not specified it defaults to Material theme transition.")]),e._v(" "),t("p",[e._v("See the official Android "),t("a",{attrs:{href:"https://developer.android.com/training/material/animations.html#Transitions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Activity Transitions"),t("OutboundLink")],1),e._v("\ndocumentation for more information and supported transitons.")]),e._v(" "),t("h3",{attrs:{id:"android-root-windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android-root-windows","aria-hidden":"true"}},[e._v("#")]),e._v(' Android "root" Windows')]),e._v(" "),t("p",[e._v("In Android, you may wish to specify that a window which you create (such as the first\nwindow) should be considered the root window and that the application should exit when\nthe back button is pressed from that window.  This is particularly useful if your application\nis not using a Tab Group and therefore the splash screen window is appearing whenever you\npress the back button from your lowest window on the stack.")]),e._v(" "),t("p",[e._v("To indicate that a particular window should cause an application to exit when the back\nbutton is pressed, pass "),t("code",[e._v("exitOnClose: true")]),e._v(" as one of the creation arguments, as shown here:")]),e._v(" "),t("pre",[t("code",[e._v("var win = Titanium.UI.createWindow({\n  title: 'My Root Window',\n  exitOnClose: true\n});\n")])]),e._v(" "),t("p",[e._v("Starting with Release 3.2.0, the root window's "),t("code",[e._v("exitOnClose")]),e._v(" property is set to "),t("code",[e._v("true")]),e._v(" by\ndefault.  Prior to Release 3.2.0, the default value of the property was "),t("code",[e._v("false")]),e._v(" for all windows.")]),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"full-screen-window-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-screen-window-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Full Screen Window example")]),e._v(" "),t("p",[e._v("Create a fullscreen window with a red background.")]),e._v(" "),t("pre",[t("code",[e._v("var window = Titanium.UI.createWindow({\n   backgroundColor:'red'\n});\nwindow.open({fullscreen:true});\n")])]),e._v(" "),t("h3",{attrs:{id:"alloy-xml-markup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),t("p",[e._v("Previous example as an Alloy view.")]),e._v(" "),t("pre",[t("code",[e._v('<Alloy>\n    <Window id="win" backgroundColor="red" fullscreen="true" />\n</Alloy>\n')])]),e._v(" "),t("ApiDocs")],1)},[],!1,null,null,null);o.options.__file="window.md";n.default=o.exports}}]);