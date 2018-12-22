(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{645:function(e,a,t){"use strict";t.r(a);var n=t(14),i=Object(n.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"titanium-media-audioplayer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#titanium-media-audioplayer","aria-hidden":"true"}},[e._v("#")]),e._v(" Titanium.Media.AudioPlayer")]),e._v(" "),t("ProxySummary"),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("On Android, when you are done playing a given audio file, you must call the\n"),t("type-link",{attrs:{type:"Titanium.Media.AudioPlayer.release"}},[e._v("release")]),e._v(" method to stop buffering audio data and\nrelease associated system resources. Since 7.5.0, this method is available on iOS as well\nand will release all audio-player related resources. After this method has been called,\nthe object should not be accessed anymore.")],1),e._v(" "),t("p",[e._v("On iOS, you can control how the audio stream interacts with other system sounds\nby setting "),t("type-link",{attrs:{type:"Titanium.Media.audioSessionCategory"}},[e._v("Titanium.Media.audioSessionCategory")]),e._v(". Since Titanium 7.5.0, this API\nuses the "),t("a",{attrs:{href:"https://developer.apple.com/documentation/avfoundation/avplayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("AVPlayer API"),t("OutboundLink")],1),e._v(" for a more modern\nand performant audio playback.")],1),e._v(" "),t("p",[e._v("Use the "),t("type-link",{attrs:{type:"Titanium.Media.createAudioPlayer"}},[e._v("Titanium.Media.createAudioPlayer")]),e._v(" method to create an audio player.")],1),e._v(" "),t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),t("h3",{attrs:{id:"audio-streaming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#audio-streaming","aria-hidden":"true"}},[e._v("#")]),e._v(" Audio Streaming")]),e._v(" "),t("p",[e._v("The following example demonstrates using the "),t("code",[e._v("AudioPlayer")]),e._v(" object to stream audio.")]),e._v(" "),t("pre",[t("code",[e._v("var win = Ti.UI.createWindow({\n    title: 'Audio Test',\n    backgroundColor: '#fff',\n    layout: 'vertical'\n});\n\nvar startStopButton = Ti.UI.createButton({\n    title: 'Start/Stop Streaming',\n    top: 10,\n    width: 200,\n    height: 40\n});\n\nvar pauseResumeButton = Ti.UI.createButton({\n    title: 'Pause/Resume Streaming',\n    top: 10,\n    width: 200,\n    height: 40,\n    enabled: false\n});\n\nwin.add(startStopButton);\nwin.add(pauseResumeButton);\n\n// allowBackground: true on Android allows the\n// player to keep playing when the app is in the\n// background.\nvar audioPlayer = Ti.Media.createAudioPlayer({\n    url: 'www.example.com/podcast.mp3',\n    allowBackground: true\n});\n\nstartStopButton.addEventListener('click', function() {\n    // When paused, playing returns false.\n    // If both are false, playback is stopped.\n    if (audioPlayer.playing || audioPlayer.paused) {\n        audioPlayer.stop();\n        pauseResumeButton.enabled = false;\n        audioPlayer.release();\n    } else {\n        audioPlayer.start();\n        pauseResumeButton.enabled = true;\n    }\n});\n\npauseResumeButton.addEventListener('click', function() {\n    if (audioPlayer.paused) {\n        audioPlayer.start();\n    } else {\n        audioPlayer.pause();\n    }\n});\n\naudioPlayer.addEventListener('progress', function(e) {\n    Ti.API.info('Time Played: ' + Math.round(e.progress) + ' milliseconds');\n});\n\naudioPlayer.addEventListener('change', function(e) {\n    Ti.API.info('State: ' + e.description + ' (' + e.state + ')');\n});\n\nwin.addEventListener('close', function() {\n    audioPlayer.stop();\n    audioPlayer.release();\n});\n\nwin.open();\n")])]),e._v(" "),t("ApiDocs")],1)},[],!1,null,null,null);i.options.__file="audioplayer.md";a.default=i.exports}}]);