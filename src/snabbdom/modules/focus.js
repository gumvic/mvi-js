function patchFocus(el, focus) {
  if (focus) {
    el.focus();
  }
  else {
    el.blur();
  }
}

function create(_, vnode) {
  const focus = vnode.data.focus;
  if (focus) {
    patchFocus(vnode.elm, focus);
  }
}

function update(oldVnode, vnode) {
  const oldFocus = oldVnode.data.focus;
  const focus = vnode.data.focus;
  if (oldFocus !== focus) {
    patchFocus(vnode.elm, focus);
  }
}

module.exports = {
  create,
  update
};
