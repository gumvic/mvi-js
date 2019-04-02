const EVENTS = [
  "readystatechange",
  "pointerlockchange",
  "pointerlockerror",
  "beforecopy",
  "beforecut",
  "beforepaste",
  "copy",
  "cut",
  "paste",
  "search",
  "selectionchange",
  "selectstart",
  "visibilitychange",
  "abort",
  "blur",
  "cancel",
  "canplay",
  "canplaythrough",
  "change",
  "click",
  "close",
  "contextmenu",
  "cuechange",
  "dblclick",
  "drag",
  "dragend",
  "dragenter",
  "dragleave",
  "dragover",
  "dragstart",
  "drop",
  "durationchange",
  "emptied",
  "ended",
  "error",
  "focus",
  "input",
  "invalid",
  "keydown",
  "keypress",
  "keyup",
  "load",
  "loadeddata",
  "loadedmetadata",
  "loadstart",
  "mousedown",
  "mouseenter",
  "mouseleave",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "mousewheel",
  "pause",
  "play",
  "playing",
  "progress",
  "ratechange",
  "reset",
  "resize",
  "scroll",
  "seeked",
  "seeking",
  "select",
  "stalled",
  "submit",
  "suspend",
  "timeupdate",
  "toggle",
  "volumechange",
  "waiting",
  "wheel",
  "auxclick",
  "gotpointercapture",
  "lostpointercapture",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointercancel",
  "pointerover",
  "pointerout",
  "pointerenter",
  "pointerleave",
  "webkitfullscreenchange",
  "webkitfullscreenerror",
  "freeze",
  "resume"
];

function create(_, vnode) {
  const sink = vnode.data.sink;
  if (sink) {
    const elm = vnode.elm;
    for (let event of EVENTS) {
      elm.addEventListener(event, sink, true);
    }
  }
}

module.exports = {
  create
};