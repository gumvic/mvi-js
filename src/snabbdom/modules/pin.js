function createOrUpdate(_, vnode) {
  const pin = vnode.data.pin;
  if (pin) {
    vnode.elm.$pin = pin;
  }
}

module.exports = {
  create: createOrUpdate,
  update: createOrUpdate
};
