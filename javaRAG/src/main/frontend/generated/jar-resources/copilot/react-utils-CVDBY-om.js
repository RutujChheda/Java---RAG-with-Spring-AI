var S = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function v(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function F(e) {
  if (e.__esModule)
    return e;
  var n = e.default;
  if (typeof n == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    t.prototype = n.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(r) {
    var u = Object.getOwnPropertyDescriptor(e, r);
    Object.defineProperty(t, r, u.get ? u : {
      enumerable: !0,
      get: function() {
        return e[r];
      }
    });
  }), t;
}
let i;
function j() {
  const e = /* @__PURE__ */ new Set();
  return Array.from(document.body.querySelectorAll("*")).flatMap(p).filter(f).forEach((t) => e.add(t.fileName)), Array.from(e);
}
function f(e) {
  return !!e && e.fileName;
}
function s(e) {
  return e?._debugSource || void 0;
}
function d(e) {
  if (e && e.type?.__debugSourceDefine)
    return e.type.__debugSourceDefine;
}
function p(e) {
  return s(a(e));
}
function g() {
  return `__reactFiber$${c()}`;
}
function m() {
  return `__reactContainer$${c()}`;
}
function c() {
  if (!(!i && (i = Array.from(document.querySelectorAll("*")).flatMap((e) => Object.keys(e)).filter((e) => e.startsWith("__reactFiber$")).map((e) => e.replace("__reactFiber$", "")).find((e) => e), !i)))
    return i;
}
function w() {
  const e = Array.from(document.querySelectorAll("body > *")).flatMap((t) => t[m()]).find((t) => t), n = o(e);
  return o(n?.child);
}
function y(e) {
  const n = [];
  let t = o(e.child);
  for (; t; )
    n.push(t), t = o(t.sibling);
  return n;
}
const h = (e) => {
  const n = y(e);
  if (n.length === 0)
    return [];
  const t = n.filter((r) => _(r) || b(r));
  return t.length === n.length ? n : n.flatMap((r) => t.includes(r) ? r : h(r));
};
function o(e) {
  const n = e?.stateNode?.current;
  if (n)
    return n;
  if (!e)
    return;
  if (!e.alternate)
    return e;
  const t = e.alternate, r = e?.actualStartTime, u = t?.actualStartTime;
  return u !== r && u > r ? t : e;
}
function a(e) {
  const n = g(), t = o(e[n]);
  if (t?._debugSource)
    return t;
  let r = t?.return || void 0;
  for (; r && !r._debugSource; )
    r = r.return || void 0;
  return r;
}
function l(e) {
  if (e.stateNode?.isConnected === !0)
    return e.stateNode;
  if (e.child)
    return l(e.child);
}
function _(e) {
  const n = l(e);
  return n && o(a(n)) === e;
}
function b(e) {
  return typeof e.type != "function" ? !1 : !!(e._debugSource || d(e));
}
export {
  v as a,
  p as b,
  S as c,
  l as d,
  h as e,
  w as f,
  F as g,
  o as h,
  _ as i,
  a as j,
  j as k
};
