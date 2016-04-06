var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

var win = Ti.UI.createWindow({
    backgroundColor: "red"
});

var viewOne = Ti.UI.createView({
    backgroundColor: "blue",
    width: "20dpi",
    height: "30dpi"
});

win.add(viewOne);

win.open();

Alloy.createController("index");