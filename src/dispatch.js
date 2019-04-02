function dispatch(app, msg) {
  const { model, state } = app;
  app.state = model(state, msg);
}

module.exports = dispatch;
