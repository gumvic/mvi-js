const patch = require("./snabbdom/patch");
const sink = require("./sink");

function render(app) {
  const { view, lastRenderedState, state, vnode: lastRenderedVnode } = app;
  if (lastRenderedState !== state) {
    const vnode = view(state);
    vnode.data.sink = (evt) => sink(app, evt);
    patch(lastRenderedVnode, vnode);
    app.lastRenderedState = state;
    app.vnode = vnode;
  }
}

module.exports = render;
