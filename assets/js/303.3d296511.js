(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{627:function(e,t,n){"use strict";n.r(t);var a=n(14),i=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-media-videoplayer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-media-videoplayer","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.Media.VideoPlayer")]),e._v(" "),n("ProxySummary"),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The video player is a native view that can be used to play videos, either stored\nlocally or streamed from a web server. The player can occupy the full screen, or can\nbe used as a view that can be added to other views.")]),e._v(" "),n("p",[e._v("Use the "),n("type-link",{attrs:{type:"Titanium.Media.createVideoPlayer"}},[e._v("Titanium.Media.createVideoPlayer")]),e._v(" method to create a video player.")],1),e._v(" "),n("p",[e._v("All platforms support specifying the video content as a URL, either to a local file or\na remote stream. This is done by setting the "),n("type-link",{attrs:{type:"Titanium.Media.VideoPlayer.url"}},[e._v("url")]),e._v(" property.")],1),e._v(" "),n("h3",{attrs:{id:"ios-implementation-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ios-implementation-notes","aria-hidden":"true"}},[e._v("#")]),e._v(" iOS Implementation Notes")]),e._v(" "),n("p",[e._v("On iOS, video content can also be specified as a "),n("type-link",{attrs:{type:"Titanium.Blob"}},[e._v("Blob")]),e._v(" or\n"),n("type-link",{attrs:{type:"Titanium.Filesystem.File"}},[e._v("File")]),e._v(" object using the\n"),n("type-link",{attrs:{type:"Titanium.Media.VideoPlayer.media"}},[e._v("media")]),e._v(" property.")],1),e._v(" "),n("p",[e._v("On iOS, a video player can dynamically switch back and forth between fullscreen mode\nand standard mode. If the native video controls are displayed, the user can use them\nto switch between standard and fullscreen mode.")]),e._v(" "),n("h3",{attrs:{id:"android-implementation-notes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#android-implementation-notes","aria-hidden":"true"}},[e._v("#")]),e._v(" Android Implementation Notes")]),e._v(" "),n("p",[e._v("On Android, the video player cannot switch modes. To create a fullscreen player, you\nmust specify "),n("code",[e._v("fullscreen: true")]),e._v(" when you create the player. This fullscreen player\ncreates its own Android "),n("type-link",{attrs:{type:"Titanium.Android.Activity"}},[e._v("Activity")]),e._v(" on top of the activity stack.\nUnlike a normal view, this fullscreen video player appears as soon as it is created.\nThe user can close the player by pressing the "),n("strong",[e._v("Back")]),e._v(" button. See the code examples for\na sample using the fullscreen player on Android.")],1),e._v(" "),n("p",[e._v("There are several known issues with clipping on the Android video player.")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("When used with "),n("code",[e._v("scalingMode")]),e._v(" set to VIDEO_SCALING_ASPECT_FILL or VIDEO_SCALING_NONE,\nthe video content is not correctly clipped to the boundaries of the view.\n("),n("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-7628",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-7628"),n("OutboundLink")],1),e._v(")")])]),e._v(" "),n("li",[n("p",[e._v("When a border is set on the view, the video content does not take the border width\ninto account, so the video content covers the border.\n("),n("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-7628",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-7628"),n("OutboundLink")],1),e._v(")")])]),e._v(" "),n("li",[n("p",[e._v("If a borderRadius is specified, the video content is not clipped to the rounded\ncorners. ("),n("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-7629",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-7629"),n("OutboundLink")],1),e._v(")")])])]),e._v(" "),n("p",[e._v("On Android, using a video player inside a scroll view is not recommended. When scrolling,\nblack bars may appear over the video content.")]),e._v(" "),n("p",[e._v("This is because the video player is rendered on a special Android UI element called a SurfaceView.\nAndroid renders the SurfaceView behind the main window and punches a hole in the window\nto reveal the video.  Because the content of the SurfaceView does not reside in the application\nwindow, the video content cannot be transformed (moved, scaled or rotated) with the window.\nThis makes it difficult for the content to render properly inside a ScrollView.")]),e._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),n("h3",{attrs:{id:"simple-video-player-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-video-player-example","aria-hidden":"true"}},[e._v("#")]),e._v(" Simple Video Player Example")]),e._v(" "),n("p",[e._v("The following code creates a simple video player to play a local video file.")]),e._v(" "),n("pre",[n("code",[e._v("var vidWin = Titanium.UI.createWindow({\n    title : 'Video View Demo',\n    backgroundColor : '#fff'\n});\n\nvar videoPlayer = Titanium.Media.createVideoPlayer({\n    top : 2,\n    autoplay : true,\n    backgroundColor : 'blue',\n    height : 300,\n    width : 300,\n    mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,\n    scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FIT\n});\n\nvideoPlayer.url = 'movie.mp4';\nvidWin.add(videoPlayer);\nvidWin.open();\n")])]),e._v(" "),n("h3",{attrs:{id:"android-fullscreen-video-player"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#android-fullscreen-video-player","aria-hidden":"true"}},[e._v("#")]),e._v(" Android Fullscreen Video Player")]),e._v(" "),n("p",[e._v("The Android fullscreen video player operates differently from other video players.\nThe following example shows how to create, show, and close a fullscreen video\nplayer.")]),e._v(" "),n("p",[e._v("Note that in this example, a button is included to close the player, to\ndemonstrate a method for dismissing the player programmatically. In practice, the user\ncan always dismiss the player by using the "),n("strong",[e._v("Back")]),e._v(" button, so an on-screen\ncontrol would not be required.")]),e._v(" "),n("pre",[n("code",[e._v('Titanium.UI.setBackgroundColor(\'#000\');\nvar win = Titanium.UI.createWindow({\n    title : \'Test\',\n    backgroundColor : \'#fff\',\n    exitOnClose : true\n});\n\n// Change to a valid URL\nvar contentURL = "http://www.example.com/stream.mp4";\n\nvar openButton = Ti.UI.createButton({\n    title : "Start Video",\n    top : "0dp",\n    height : "40dp",\n    left : "10dp",\n    right : "10dp"\n});\n\nopenButton.addEventListener(\'click\', function() {\n    var activeMovie = Titanium.Media.createVideoPlayer({\n        url : contentURL,\n        backgroundColor : \'blue\',\n        mediaControlStyle : Titanium.Media.VIDEO_CONTROL_DEFAULT,\n        scalingMode : Titanium.Media.VIDEO_SCALING_ASPECT_FILL,\n        fullscreen : true,\n        autoplay : true\n    });\n\n    var closeButton = Ti.UI.createButton({\n        title : "Exit Video",\n        top : "0dp",\n        height : "40dp",\n        left : "10dp",\n        right : "10dp"\n    });\n\n    closeButton.addEventListener(\'click\', function() {\n        activeMovie.hide();\n        activeMovie.release();\n        activeMovie = null;\n    });\n\n    activeMovie.add(closeButton);\n});\nwin.add(openButton);\nwin.open();\n')])]),e._v(" "),n("h3",{attrs:{id:"alloy-xml-markup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup","aria-hidden":"true"}},[e._v("#")]),e._v(" Alloy XML Markup")]),e._v(" "),n("p",[e._v("Previous simple example as an Alloy view.")]),e._v(" "),n("p",[e._v("simplevideoplayer.xml:")]),e._v(" "),n("pre",[n("code",[e._v('<Alloy>\n    <Window id="vidWin" title="Video View Demo" backgroundColor="#fff">\n        <VideoPlayer id="videoPlayer" ns="Ti.Media" top="2" url="/movie.mp4"\n                     height="300" width="300" backgroundColor="blue" autoplay="true" />\n    </Window>\n</Alloy>\n')])]),e._v(" "),n("ApiDocs")],1)},[],!1,null,null,null);i.options.__file="videoplayer.md";t.default=i.exports}}]);