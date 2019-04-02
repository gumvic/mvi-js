const dispatch = require("./dispatch");

function stopEvent(evt) {
  evt.preventDefault();
  evt.stopPropagation();
}

function sink(app, evt) {
  const { intent } = app;
  let pin = {};
  let node = evt.target;
  do {
    const nodePin = node.$pin;
    if (nodePin) {
      pin = { ...pin, ...nodePin };
      const msg = intent(evt, pin);
      if (msg) {
        stopEvent(evt);
        dispatch(app, msg);
        break;
      }
    }
  } while (node = node.parentNode);
}

module.exports = sink;
