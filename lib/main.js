/* jshint undef: true, unused: true, strict:true, moz:true */
/* global console */
/* global require */
var self = require("sdk/self");
var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

var activeTab = null;

/*var button = */buttons.ActionButton({
  id: "qrcodelogin-link",
  label: "qrcode login",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

// Show the panel when the user clicks the button.
function handleClick(/*state*/) {
  "use strict";
  activeTab = tabs.activeTab;
  activeTab.attach({
    contentScriptFile: self.data.url("pwd.js"),
    onMessage: function (message) {
      console.log("main.js onMessage found-password-form: " + JSON.stringify(message));
    },
    onError: function(error) {
        console.error(error.fileName+":"+error.lineNumber+": "+error);
    }
  });
}

