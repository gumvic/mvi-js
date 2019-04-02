const snabbdom = require("snabbdom");

const patch = snabbdom.init([
  require("snabbdom/modules/attributes").default,
  require("snabbdom/modules/props").default,
  require("snabbdom/modules/style").default,
  require("snabbdom/modules/class").default,
  require("./modules/pin"),
  require("./modules/sink"),
  require("./modules/focus")
]);

module.exports = patch;
