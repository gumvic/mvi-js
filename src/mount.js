const start = require("./start");

function mount(app, el) {
  app.vnode = el;
  start(app);
}

module.exports = mount;
