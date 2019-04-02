const raf = require("raf");
const render = require("./render");

function start(app) {
  function loop() {
    render(app);
    raf(loop);
  }
  raf(loop);
}

module.exports = start;
