import { t as $, M, C as B, e as a, f as xe, g as W, k as T, b as l, O as ce, A as m, x as c, l as Pe, P as he, n as ue, o as ke, p as Z, T as b, q as Ae, u as K, c as g, s as ze, w as _, y as $e, z as Ce, B as Ee, D as De, E as Ie } from "./copilot-DGrV1Juw.js";
import { n as O, r as P } from "./state-DHPRLrvM.js";
import { s as te, d as _e, a as Le } from "./copilot-notification-YGomF54M.js";
import { i as L } from "./icons-NjFuSzH6.js";
import { k as Se, a as Re } from "./react-utils-CVDBY-om.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ie = (e, t, i) => (i.configurable = !0, i.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(e, t, i), i);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function k(e, t) {
  return (i, o, n) => {
    const s = (r) => r.renderRoot?.querySelector(e) ?? null;
    if (t) {
      const { get: r, set: u } = typeof o == "object" ? i : n ?? (() => {
        const d = Symbol();
        return { get() {
          return this[d];
        }, set(v) {
          this[d] = v;
        } };
      })();
      return ie(i, o, { get() {
        let d = r.call(this);
        return d === void 0 && (d = s(this), (d !== null || this.hasUpdated) && u.call(this, d)), d;
      } });
    }
    return ie(i, o, { get() {
      return s(this);
    } });
  };
}
const Q = "@keyframes bounce{0%{transform:scale(.8)}50%{transform:scale(1.5)}to{transform:scale(1)}}@keyframes pulse{0%{box-shadow:0 0 calc(var(--pulse-size) * 2) 0 transparent}25%{box-shadow:0 0 calc(var(--pulse-size) * 2) 0 var(--pulse-first-color, var(--selection-color))}50%{box-shadow:0 0 calc(var(--pulse-size) * 2) 0 transparent}75%{box-shadow:0 0 calc(var(--pulse-size) * 2) 0 var(--pulse-second-color, var(--accent-color))}to{box-shadow:0 0 calc(var(--pulse-size) * 2) 0 transparent}}@keyframes around-we-go-again{0%{background-position:0 0,0 0,calc(var(--glow-size) * -.5) calc(var(--glow-size) * -.5),calc(100% + calc(var(--glow-size) * .5)) calc(100% + calc(var(--glow-size) * .5))}25%{background-position:0 0,0 0,calc(100% + calc(var(--glow-size) * .5)) calc(var(--glow-size) * -.5),calc(var(--glow-size) * -.5) calc(100% + calc(var(--glow-size) * .5))}50%{background-position:0 0,0 0,calc(100% + calc(var(--glow-size) * .5)) calc(100% + calc(var(--glow-size) * .5)),calc(var(--glow-size) * -.5) calc(var(--glow-size) * -.5)}75%{background-position:0 0,0 0,calc(var(--glow-size) * -.5) calc(100% + calc(var(--glow-size) * .5)),calc(100% + calc(var(--glow-size) * .5)) calc(var(--glow-size) * -.5)}to{background-position:0 0,0 0,calc(var(--glow-size) * -.5) calc(var(--glow-size) * -.5),calc(100% + calc(var(--glow-size) * .5)) calc(100% + calc(var(--glow-size) * .5))}}@keyframes swirl{0%{rotate:0deg;filter:hue-rotate(20deg)}50%{filter:hue-rotate(-30deg)}to{rotate:360deg;filter:hue-rotate(20deg)}}";
var Me = Object.defineProperty, Te = Object.getOwnPropertyDescriptor, C = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? Te(t, i) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (n = (o ? r(t, i, n) : r(n)) || n);
  return o && n && Me(t, i, n), n;
};
const V = "data-drag-initial-index", N = "data-drag-final-index";
let y = class extends M {
  constructor() {
    super(...arguments), this.position = "right", this.opened = !1, this.keepOpen = !1, this.resizing = !1, this.closingForcefully = !1, this.draggingSectionPanel = null, this.resizingMouseMoveListener = (e) => {
      if (!this.resizing)
        return;
      const { x: t, y: i } = e;
      e.stopPropagation(), e.preventDefault(), requestAnimationFrame(() => {
        let o;
        if (this.position === "right") {
          const n = document.body.clientWidth - t;
          this.style.setProperty("--size", `${n}px`), B.saveDrawerSize(this.position, n), o = { width: n };
        } else if (this.position === "left") {
          const n = t;
          this.style.setProperty("--size", `${n}px`), B.saveDrawerSize(this.position, n), o = { width: n };
        } else if (this.position === "bottom") {
          const n = document.body.clientHeight - i;
          this.style.setProperty("--size", `${n}px`), B.saveDrawerSize(this.position, n), o = { height: n };
        }
        a.panels.filter((n) => !n.floating && n.panel === this.position).forEach((n) => {
          a.updatePanel(n.tag, o);
        });
      });
    }, this.sectionPanelDraggingStarted = (e, t) => {
      this.draggingSectionPanel = e, this.draggingSectionPointerStartY = t.clientY, e.toggleAttribute("dragging", !0), e.style.zIndex = "1000", Array.from(this.querySelectorAll("copilot-section-panel-wrapper")).forEach((i, o) => {
        i.setAttribute(V, `${o}`);
      }), document.addEventListener("mousemove", this.sectionPanelDragging), document.addEventListener("mouseup", this.sectionPanelDraggingFinished);
    }, this.sectionPanelDragging = (e) => {
      if (!this.draggingSectionPanel)
        return;
      const { clientX: t, clientY: i } = e;
      if (!xe(this.getBoundingClientRect(), t, i)) {
        this.cleanUpDragging();
        return;
      }
      const o = i - this.draggingSectionPointerStartY;
      this.draggingSectionPanel.style.transform = `translateY(${o}px)`, this.updateSectionPanelPositionsWhileDragging();
    }, this.sectionPanelDraggingFinished = () => {
      if (!this.draggingSectionPanel)
        return;
      const e = this.getAllPanels().filter(
        (t) => t.panelInfo?.panelOrder !== Number.parseInt(t.getAttribute(N), 10)
      ).map((t) => ({
        tag: t.panelTag,
        order: Number.parseInt(t.getAttribute(N), 10)
      }));
      this.cleanUpDragging(), a.updateOrders(e), document.removeEventListener("mouseup", this.sectionPanelDraggingFinished), document.removeEventListener("mousemove", this.sectionPanelDragging);
    }, this.updateSectionPanelPositionsWhileDragging = () => {
      const e = this.draggingSectionPanel.getBoundingClientRect().height;
      this.getAllPanels().sort((t, i) => {
        const o = t.getBoundingClientRect(), n = i.getBoundingClientRect(), s = (o.top + o.bottom) / 2, r = (n.top + n.bottom) / 2;
        return s - r;
      }).forEach((t, i) => {
        if (t.setAttribute(N, `${i}`), t.panelTag !== this.draggingSectionPanel?.panelTag) {
          const o = Number.parseInt(t.getAttribute(V), 10);
          o > i ? t.style.transform = `translateY(${-e}px)` : o < i ? t.style.transform = `translateY(${e}px)` : t.style.removeProperty("transform");
        }
      });
    };
  }
  static get styles() {
    return [
      W(Q),
      T`
        :host {
          --size: 350px;
          --min-size: 20%;
          --max-size: 80%;
          --default-content-height: 300px;
          --transition-duration: var(--duration-2);
          --opening-delay: var(--duration-2);
          --closing-delay: var(--duration-3);
          --hover-size: 18px;
          --pulse-size: var(--hover-size);
          --pulse-animation-duration: 8s;
          position: absolute;
          z-index: var(--z-index-drawer);
          transition: translate var(--transition-duration) var(--closing-delay);
        }

        :host(:is([position='left'], [position='right'])) {
          width: var(--size);
          min-width: var(--min-size);
          max-width: var(--max-size);
          top: 0;
          bottom: 0;
        }

        :host([position='left']) {
          left: 0;
          translate: calc(-100% + var(--hover-size)) 0%;
          padding-right: var(--hover-size);
        }

        :host([position='right']) {
          right: 0;
          translate: calc(100% - var(--hover-size)) 0%;
          padding-left: var(--hover-size);
        }

        :host([position='bottom']) {
          height: var(--size);
          min-height: var(--min-size);
          max-height: var(--max-size);
          bottom: 0;
          left: 0;
          right: 0;
          translate: 0% calc(100% - var(--hover-size));
          padding-top: var(--hover-size);
        }

        /* The visible container. Needed to have extra space for hover and resize handle outside it. */

        .container {
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
          height: 100%;
          background: var(--surface);
          -webkit-backdrop-filter: var(--surface-backdrop-filter);
          backdrop-filter: var(--surface-backdrop-filter);
          overflow-y: auto;
          overflow-x: hidden;
          box-shadow: var(--surface-box-shadow-2);
          transition:
            opacity var(--transition-duration) var(--closing-delay),
            visibility calc(var(--transition-duration) * 2) var(--closing-delay);
          opacity: 0;
          /* For accessibility (restored when open) */
          visibility: hidden;
        }

        :host([position='left']) .container {
          border-right: 1px solid var(--surface-border-color);
        }

        :host([position='right']) .container {
          border-left: 1px solid var(--surface-border-color);
        }

        :host([position='bottom']) .container {
          border-top: 1px solid var(--surface-border-color);
        }

        /* Opened state */

        :host(:is([opened], [keepopen])) {
          translate: 0% 0%;
          transition-delay: var(--opening-delay);
        }

        :host(:is([opened], [keepopen])) .container {
          transition-delay: var(--opening-delay);
          visibility: visible;
          opacity: 1;
        }

        .resize {
          position: absolute;
          z-index: 10;
          inset: 0;
        }

        :host(:is([position='left'], [position='right'])) .resize {
          width: var(--hover-size);
          cursor: col-resize;
        }

        :host([position='left']) .resize {
          left: auto;
          right: calc(var(--hover-size) * 0.5);
        }

        :host([position='right']) .resize {
          right: auto;
          left: calc(var(--hover-size) * 0.5);
        }

        :host([position='bottom']) .resize {
          height: var(--hover-size);
          bottom: auto;
          top: calc(var(--hover-size) * 0.5);
          cursor: row-resize;
        }

        :host([resizing]) .container {
          /* vaadin-grid (used in the outline) blocks the mouse events */
          pointer-events: none;
        }

        /* Visual indication of the drawer */

        :host::before {
          content: '';
          position: absolute;
          pointer-events: none;
          z-index: -1;
          inset: var(--hover-size);
          transition: opacity var(--transition-duration) var(--closing-delay);
          animation: pulse var(--pulse-animation-duration) infinite;
        }

        :host([attention-required]) {
          --pulse-animation-duration: 2s;
          --pulse-first-color: var(--red-500);
          --pulse-second-color: var(--red-800);
        }

        :host(:is([opened], [keepopen]))::before {
          transition-delay: var(--opening-delay);
          opacity: 0;
        }
      `
    ];
  }
  connectedCallback() {
    super.connectedCallback(), this.reaction(
      () => a.panels,
      () => this.requestUpdate()
    ), this.reaction(
      () => l.operationInProgress,
      (t) => {
        t === ce.DragAndDrop && !this.opened && !this.keepOpen ? this.style.setProperty("pointer-events", "none") : this.style.setProperty("pointer-events", "auto");
      }
    ), this.reaction(
      () => a.getAttentionRequiredPanelConfiguration(),
      () => {
        const t = a.getAttentionRequiredPanelConfiguration();
        t && !t.floating && this.toggleAttribute(m, t.panel === this.position);
      }
    ), document.addEventListener("mouseup", () => {
      this.resizing = !1, this.removeAttribute("resizing");
    });
    const e = B.getDrawerSize(this.position);
    e && this.style.setProperty("--size", `${e}px`), document.addEventListener("mousemove", this.resizingMouseMoveListener), this.addEventListener("mouseenter", this.mouseEnterListener);
  }
  firstUpdated(e) {
    super.firstUpdated(e), this.resizeElement.addEventListener("mousedown", (t) => {
      t.button === 0 && (this.resizing = !0, this.setAttribute("resizing", ""));
    });
  }
  updated(e) {
    super.updated(e), e.has("opened") && this.opened && this.hasAttribute(m) && (this.removeAttribute(m), a.clearAttention());
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("mousemove", this.resizingMouseMoveListener), this.removeEventListener("mouseenter", this.mouseEnterListener);
  }
  /**
   * Cleans up attributes/styles etc... for dragging operations
   * @private
   */
  cleanUpDragging() {
    this.draggingSectionPanel && (l.setSectionPanelDragging(!1), this.draggingSectionPanel.style.zIndex = "", Array.from(this.querySelectorAll("copilot-section-panel-wrapper")).forEach((e) => {
      e.style.removeProperty("transform"), e.removeAttribute(N), e.removeAttribute(V);
    }), this.draggingSectionPanel.removeAttribute("dragging"), this.draggingSectionPanel = null);
  }
  getAllPanels() {
    return Array.from(this.querySelectorAll("copilot-section-panel-wrapper"));
  }
  /**
   * Closes the drawer and disables mouse enter event for a while.
   */
  forceClose() {
    this.closingForcefully = !0, this.opened = !1, setTimeout(() => {
      this.closingForcefully = !1;
    }, 0.5);
  }
  mouseEnterListener(e) {
    this.closingForcefully || (this.opened = !0);
  }
  render() {
    return c`
      <div class="container">
        <slot></slot>
      </div>
      <div class="resize"></div>
    `;
  }
};
C([
  O({ reflect: !0, attribute: !0 })
], y.prototype, "position", 2);
C([
  O({ reflect: !0, type: Boolean })
], y.prototype, "opened", 2);
C([
  O({ reflect: !0, type: Boolean })
], y.prototype, "keepOpen", 2);
C([
  k(".container")
], y.prototype, "container", 2);
C([
  k(".resize")
], y.prototype, "resizeElement", 2);
y = C([
  $("copilot-drawer-panel")
], y);
var Oe = Object.defineProperty, Be = Object.getOwnPropertyDescriptor, pe = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? Be(t, i) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (n = (o ? r(t, i, n) : r(n)) || n);
  return o && n && Oe(t, i, n), n;
};
let H = class extends Pe {
  constructor() {
    super(...arguments), this.checked = !1;
  }
  static get styles() {
    return T`
      :host {
        --bg-border-color: rgba(27, 43, 65, 0.69);
        --toggle-button-size: 14px;
        --toggle-button-margin: 1px;
        --transition-duration: 180ms;
        height: auto;
        display: flex;
        align-items: center;
      }

      .switch {
        display: inline-flex;
        align-items: center;
      }

      .switch input {
        opacity: 0;
        width: 0;
        height: 0;
        position: absolute;
      }

      .switch .slider {
        pointer-events: none;
        display: block;
        flex: none;
        width: 28px;
        height: var(--toggle-button-size);
        border-radius: 9px;
        border: 1px solid var(--bg-border-color);
        transition: var(--transition-duration);
        margin-right: 0.5rem;
        box-sizing: border-box;
      }

      .switch:focus-within .slider,
      .switch .slider:hover {
        background-color: rgba(255, 255, 255, 0.35);
        transition: none;
      }

      .switch input:focus-visible ~ .slider {
        box-shadow:
          0 0 0 2px var(--dev-tools-background-color-active),
          0 0 0 4px var(--dev-tools-blue-color);
      }

      .switch .slider::before {
        content: '';
        display: block;
        margin: var(--toggle-button-margin);
        width: calc(var(--toggle-button-size) - var(--toggle-button-margin) * 2);
        height: calc(var(--toggle-button-size) - var(--toggle-button-margin) * 2);
        background-color: #fff;
        transition: var(--transition-duration);
        border-radius: 50%;
        border: 1px solid var(--bg-border-color);
        box-sizing: border-box;
        margin-top: 0;
      }

      .switch input:checked + .slider {
        background-color: rgba(27, 43, 65, 0.69);
      }

      .switch input:checked + .slider::before {
        transform: translateX(10px);
      }

      .switch input:disabled + .slider::before {
        background-color: hsl(0, 0%, 50%);
      }
    `;
  }
  render() {
    return c`
      <label
        class="switch"
        @click="${(e) => {
      e.preventDefault(), this.dispatchEvent(
        new CustomEvent("on-change", {
          detail: !this.checked
        })
      );
    }}">
        <input class="feature-toggle" id="toggle-${this.id}" type="checkbox" ?checked="${this.checked}" />
        <span class="slider"></span>
        ${this.title}
      </label>
    `;
  }
  //  @change=${(e: InputEvent) => this.toggleFeatureFlag(e, feature)}
};
pe([
  O({ reflect: !0 })
], H.prototype, "checked", 2);
H = pe([
  $("copilot-toggle-button")
], H);
function J(e) {
  e.querySelectorAll(
    "vaadin-context-menu, vaadin-menu-bar, vaadin-menu-bar-submenu, vaadin-select, vaadin-combo-box, vaadin-tooltip, vaadin-dialog"
  ).forEach((t) => {
    let i = t.shadowRoot?.querySelector(
      `${t.localName}-overlay, ${t.localName}-submenu, vaadin-menu-bar-overlay`
    );
    i?.localName === "vaadin-menu-bar-submenu" && (i = i.shadowRoot.querySelector("vaadin-menu-bar-overlay")), i ? i._attachOverlay = oe.bind(i) : t.$?.overlay && (t.$.overlay._attachOverlay = oe.bind(t.$.overlay));
  });
}
function ge() {
  return document.querySelector(`${he}main`).shadowRoot;
}
const Ne = () => Array.from(ge().children).filter((t) => t._hasOverlayStackMixin && !t.hasAttribute("closing")).sort((t, i) => t.__zIndex - i.__zIndex || 0), Ue = (e) => e === Ne().pop();
function oe() {
  const e = this;
  e._placeholder = document.createComment("vaadin-overlay-placeholder"), e.parentNode.insertBefore(e._placeholder, e), ge().appendChild(e), e.hasOwnProperty("_last") || Object.defineProperty(e, "_last", {
    // Only returns odd die sides
    get() {
      return Ue(this);
    }
  }), e.bringToFront(), requestAnimationFrame(() => J(e));
}
function A(e, t) {
  const i = document.createElement(e);
  if (t.style && (i.className = t.style), t.icon) {
    const o = document.createElement("vaadin-icon");
    o.setAttribute("icon", t.icon), i.append(o);
  }
  if (t.label) {
    const o = document.createElement("span");
    o.className = "label", o.innerHTML = t.label, i.append(o);
  }
  if (t.hint) {
    const o = document.createElement("span");
    o.className = "hint", o.innerHTML = t.hint, i.append(o);
  }
  return i;
}
function qe() {
  const e = window.navigator.userAgent;
  return e.indexOf("Windows") !== -1 ? "Windows" : e.indexOf("Mac") !== -1 ? "Mac" : e.indexOf("Linux") !== -1 ? "Linux" : null;
}
function Fe() {
  return qe() === "Mac";
}
function je() {
  return Fe() ? "⌘" : "Ctrl";
}
class Ve {
  constructor() {
    this.offsetX = 0, this.offsetY = 0;
  }
  draggingStarts(t, i) {
    this.offsetX = i.clientX - t.getBoundingClientRect().left, this.offsetY = i.clientY - t.getBoundingClientRect().top;
  }
  dragging(t, i) {
    const o = i.clientX, n = i.clientY, s = o - this.offsetX, r = o - this.offsetX + t.getBoundingClientRect().width, u = n - this.offsetY, d = n - this.offsetY + t.getBoundingClientRect().height;
    return this.adjust(t, s, u, r, d);
  }
  adjust(t, i, o, n, s) {
    let r, u, d, v;
    const f = document.documentElement.getBoundingClientRect().width, h = document.documentElement.getBoundingClientRect().height;
    return (n + i) / 2 < f / 2 ? (t.style.setProperty("--left", `${i}px`), t.style.setProperty("--right", ""), v = void 0, r = Math.max(0, i)) : (t.style.removeProperty("--left"), t.style.setProperty("--right", `${f - n}px`), r = void 0, v = Math.max(0, f - n)), (o + s) / 2 < h / 2 ? (t.style.setProperty("--top", `${o}px`), t.style.setProperty("--bottom", ""), d = void 0, u = Math.max(0, o)) : (t.style.setProperty("--top", ""), t.style.setProperty("--bottom", `${h - s}px`), u = void 0, d = Math.max(0, h - s)), {
      left: r,
      right: v,
      top: u,
      bottom: d
    };
  }
  anchor(t) {
    const { left: i, top: o, bottom: n, right: s } = t.getBoundingClientRect();
    return this.adjust(t, i, o, s, n);
  }
  anchorLeftTop(t) {
    const { left: i, top: o } = t.getBoundingClientRect();
    return t.style.setProperty("--left", `${i}px`), t.style.setProperty("--right", ""), t.style.setProperty("--top", `${o}px`), t.style.setProperty("--bottom", ""), {
      left: i,
      top: o
    };
  }
}
const p = new Ve();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
let ne = 0, ve = 0;
const z = [];
let X = !1;
function Ye() {
  X = !1;
  const e = z.length;
  for (let t = 0; t < e; t++) {
    const i = z[t];
    if (i)
      try {
        i();
      } catch (o) {
        setTimeout(() => {
          throw o;
        });
      }
  }
  z.splice(0, e), ve += e;
}
const He = {
  /**
   * Enqueues a function called at microtask timing.
   *
   * @memberof microTask
   * @param {!Function=} callback Callback to run
   * @return {number} Handle used for canceling task
   */
  run(e) {
    X || (X = !0, queueMicrotask(() => Ye())), z.push(e);
    const t = ne;
    return ne += 1, t;
  },
  /**
   * Cancels a previously enqueued `microTask` callback.
   *
   * @memberof microTask
   * @param {number} handle Handle returned from `run` of callback to cancel
   * @return {void}
   */
  cancel(e) {
    const t = e - ve;
    if (t >= 0) {
      if (!z[t])
        throw new Error(`invalid async handle: ${e}`);
      z[t] = null;
    }
  }
};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
const se = /* @__PURE__ */ new Set();
class U {
  /**
   * Creates a debouncer if no debouncer is passed as a parameter
   * or it cancels an active debouncer otherwise. The following
   * example shows how a debouncer can be called multiple times within a
   * microtask and "debounced" such that the provided callback function is
   * called once. Add this method to a custom element:
   *
   * ```js
   * import {microTask} from '@vaadin/component-base/src/async.js';
   * import {Debouncer} from '@vaadin/component-base/src/debounce.js';
   * // ...
   *
   * _debounceWork() {
   *   this._debounceJob = Debouncer.debounce(this._debounceJob,
   *       microTask, () => this._doWork());
   * }
   * ```
   *
   * If the `_debounceWork` method is called multiple times within the same
   * microtask, the `_doWork` function will be called only once at the next
   * microtask checkpoint.
   *
   * Note: In testing it is often convenient to avoid asynchrony. To accomplish
   * this with a debouncer, you can use `enqueueDebouncer` and
   * `flush`. For example, extend the above example by adding
   * `enqueueDebouncer(this._debounceJob)` at the end of the
   * `_debounceWork` method. Then in a test, call `flush` to ensure
   * the debouncer has completed.
   *
   * @param {Debouncer?} debouncer Debouncer object.
   * @param {!AsyncInterface} asyncModule Object with Async interface
   * @param {function()} callback Callback to run.
   * @return {!Debouncer} Returns a debouncer object.
   */
  static debounce(t, i, o) {
    return t instanceof U ? t._cancelAsync() : t = new U(), t.setConfig(i, o), t;
  }
  constructor() {
    this._asyncModule = null, this._callback = null, this._timer = null;
  }
  /**
   * Sets the scheduler; that is, a module with the Async interface,
   * a callback and optional arguments to be passed to the run function
   * from the async module.
   *
   * @param {!AsyncInterface} asyncModule Object with Async interface.
   * @param {function()} callback Callback to run.
   * @return {void}
   */
  setConfig(t, i) {
    this._asyncModule = t, this._callback = i, this._timer = this._asyncModule.run(() => {
      this._timer = null, se.delete(this), this._callback();
    });
  }
  /**
   * Cancels an active debouncer and returns a reference to itself.
   *
   * @return {void}
   */
  cancel() {
    this.isActive() && (this._cancelAsync(), se.delete(this));
  }
  /**
   * Cancels a debouncer's async callback.
   *
   * @return {void}
   */
  _cancelAsync() {
    this.isActive() && (this._asyncModule.cancel(
      /** @type {number} */
      this._timer
    ), this._timer = null);
  }
  /**
   * Flushes an active debouncer and returns a reference to itself.
   *
   * @return {void}
   */
  flush() {
    this.isActive() && (this.cancel(), this._callback());
  }
  /**
   * Returns true if the debouncer is active.
   *
   * @return {boolean} True if active.
   */
  isActive() {
    return this._timer != null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S = (e, t) => {
  const i = e._$AN;
  if (i === void 0)
    return !1;
  for (const o of i)
    o._$AO?.(t, !1), S(o, t);
  return !0;
}, q = (e) => {
  let t, i;
  do {
    if ((t = e._$AM) === void 0)
      break;
    i = t._$AN, i.delete(e), e = t;
  } while (i?.size === 0);
}, fe = (e) => {
  for (let t; t = e._$AM; e = t) {
    let i = t._$AN;
    if (i === void 0)
      t._$AN = i = /* @__PURE__ */ new Set();
    else if (i.has(e))
      break;
    i.add(e), We(t);
  }
};
function Xe(e) {
  this._$AN !== void 0 ? (q(this), this._$AM = e, fe(this)) : this._$AM = e;
}
function Ge(e, t = !1, i = 0) {
  const o = this._$AH, n = this._$AN;
  if (n !== void 0 && n.size !== 0)
    if (t)
      if (Array.isArray(o))
        for (let s = i; s < o.length; s++)
          S(o[s], !1), q(o[s]);
      else
        o != null && (S(o, !1), q(o));
    else
      S(this, e);
}
const We = (e) => {
  e.type == Z.CHILD && (e._$AP ??= Ge, e._$AQ ??= Xe);
};
class Ze extends ue {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t, i, o) {
    super._$AT(t, i, o), fe(this), this.isConnected = t._$AU;
  }
  _$AO(t, i = !0) {
    t !== this.isConnected && (this.isConnected = t, t ? this.reconnected?.() : this.disconnected?.()), i && (S(this, t), q(this));
  }
  setValue(t) {
    if (ke(this._$Ct))
      this._$Ct._$AI(t, this);
    else {
      const i = [...this._$Ct._$AH];
      i[this._$Ci] = t, this._$Ct._$AI(i, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
 * @license
 * Copyright (c) 2016 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const re = Symbol("valueNotInitialized");
class Ke extends Ze {
  constructor(t) {
    if (super(t), t.type !== Z.ELEMENT)
      throw new Error(`\`${this.constructor.name}\` must be bound to an element.`);
    this.previousValue = re;
  }
  /** @override */
  render(t, i) {
    return b;
  }
  /** @override */
  update(t, [i, o]) {
    return this.hasChanged(o) ? (this.host = t.options && t.options.host, this.element = t.element, this.renderer = i, this.previousValue === re ? this.addRenderer() : this.runRenderer(), this.previousValue = Array.isArray(o) ? [...o] : o, b) : b;
  }
  /** @override */
  reconnected() {
    this.addRenderer();
  }
  /** @override */
  disconnected() {
    this.removeRenderer();
  }
  /** @abstract */
  addRenderer() {
    throw new Error("The `addRenderer` method must be implemented.");
  }
  /** @abstract */
  runRenderer() {
    throw new Error("The `runRenderer` method must be implemented.");
  }
  /** @abstract */
  removeRenderer() {
    throw new Error("The `removeRenderer` method must be implemented.");
  }
  /** @protected */
  renderRenderer(t, ...i) {
    const o = this.renderer.call(this.host, ...i);
    Ae(o, t, { host: this.host });
  }
  /** @protected */
  hasChanged(t) {
    return Array.isArray(t) ? !Array.isArray(this.previousValue) || this.previousValue.length !== t.length ? !0 : t.some((i, o) => i !== this.previousValue[o]) : this.previousValue !== t;
  }
}
/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
const Y = Symbol("contentUpdateDebouncer");
class me extends Ke {
  /**
   * A property to that the renderer callback will be assigned.
   *
   * @abstract
   */
  get rendererProperty() {
    throw new Error("The `rendererProperty` getter must be implemented.");
  }
  /**
   * Adds the renderer callback to the dialog.
   */
  addRenderer() {
    this.element[this.rendererProperty] = (t, i) => {
      this.renderRenderer(t, i);
    };
  }
  /**
   * Runs the renderer callback on the dialog.
   */
  runRenderer() {
    this.element[Y] = U.debounce(
      this.element[Y],
      He,
      () => {
        this.element.requestContentUpdate();
      }
    );
  }
  /**
   * Removes the renderer callback from the dialog.
   */
  removeRenderer() {
    this.element[this.rendererProperty] = null, delete this.element[Y];
  }
}
class Qe extends me {
  get rendererProperty() {
    return "renderer";
  }
}
class Je extends me {
  get rendererProperty() {
    return "footerRenderer";
  }
}
const et = K(Qe), tt = K(Je);
var it = Object.defineProperty, ot = Object.getOwnPropertyDescriptor, E = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? ot(t, i) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (n = (o ? r(t, i, n) : r(n)) || n);
  return o && n && it(t, i, n), n;
};
const ae = "https://github.com/vaadin/copilot/issues/new", nt = "?template=feature_request.md&title=%5BFEATURE%5D", st = "A short, concise description of the bug and why you consider it a bug. Any details like exceptions and logs can be helpful as well.", rt = "Please provide as many details as possible, this will help us deliver a fix as soon as possible.%0AThank you!%0A%0A%23%23%23 Description of the Bug%0A%0A{description}%0A%0A%23%23%23 Expected Behavior%0A%0AA description of what you would expect to happen. (Sometimes it is clear what the expected outcome is if something does not work, other times, it is not super clear.)%0A%0A%23%23%23 Minimal Reproducible Example%0A%0AWe would appreciate the minimum code with which we can reproduce the issue.%0A%0A%23%23%23 Versions%0A{versionsInfo}";
let w = class extends M {
  constructor() {
    super(), this.#e = [
      {
        label: "🐞 Report a Bug",
        value: "bug",
        ghTitle: "[BUG]"
      },
      {
        label: "❓ Ask a Question",
        value: "question",
        ghTitle: "[QUESTION]"
      },
      {
        label: "💡 Share an Idea",
        value: "idea",
        ghTitle: "[FEATURE]"
      }
    ], this.renderDialog = () => this.message === void 0 ? c`
          <vaadin-vertical-layout style="width: 40em; height: 30em; align-items: stretch;">
            <p>
              Your insights are incredibly valuable to us. Whether you’ve encountered a hiccup, have questions, or ideas
              to make our platform better, we're all ears! If you wish, leave your email and we’ll get back to you. You
              can even share your code snippet with us for a clearer picture.
            </p>
            <vaadin-select
              label="What's on your mind?"
              .items="${this.items}"
              .value="${this.items[0].value}"
              @value-changed=${(e) => {
      this.type = e.detail.value;
    }}>
            </vaadin-select>
            <vaadin-text-area
              .value="${this.description}"
              @keydown=${this.keyDown}
              @value-changed=${(e) => {
      this.description = e.detail.value;
    }}
              style="flex: 1; max-height: 100%; overflow-y: auto;"
              label="Tell Us More"
              helper-text="Describe what you're experiencing, wondering about, or envisioning. The more you share, the better we can understand and act on your feedback"></vaadin-text-area>
            <vaadin-text-field
              @keydown=${this.keyDown}
              @value-changed=${(e) => {
      this.email = e.detail.value;
    }}
              id="email"
              label="Your Email (Optional)"
              helper-text="Leave your email if you’d like us to follow up. Totally optional, but we’d love to keep the conversation going."></vaadin-text-field>
          </vaadin-vertical-layout>
        ` : c`<p>${this.message}</p>`, this.renderFooter = () => this.message === void 0 ? c`
          <vaadin-button @click="${() => g.emit("get-system-info-for-feedback", null)}">
            <span style="display: flex" slot="prefix">${L.github}</span>
            Create GitHub issue
          </vaadin-button>
          <vaadin-button @click="${this.close}">Cancel</vaadin-button>
          <vaadin-button theme="primary" @click="${this.submit}">Submit</vaadin-button>
        ` : c` <vaadin-button @click="${this.close}">Close</vaadin-button>`, this.description = "";
  }
  #e;
  get items() {
    return this.#e;
  }
  set items(e) {
    this.#e = e;
  }
  connectedCallback() {
    super.connectedCallback(), g.on("system-info-for-feedback", (e) => {
      this.openGithubCallback(e);
    });
  }
  firstUpdated() {
    J(this.shadowRoot);
  }
  render() {
    return c` <vaadin-dialog
      header-title="Help Us improve!"
      draggable
      .opened="${l.feedbackOpened}"
      .noCloseOnOutsideClick="${!0}"
      @opened-changed="${(e) => {
      l.feedbackOpened && (this.message = void 0), l.setFeedbackOpened(e.detail.value);
    }}"
      ${et(this.renderDialog, [this.message, this.description])}
      ${tt(this.renderFooter, [this.message])}></vaadin-dialog>`;
  }
  close() {
    l.setFeedbackOpened(!1);
  }
  submit() {
    const e = {
      description: this.description,
      email: this.email,
      type: this.type
    };
    ze(`${he}feedback`, e), this.message = "Thank you for sharing feedback.";
  }
  keyDown(e) {
    (e.key === "Backspace" || e.key === "Delete") && e.stopPropagation();
  }
  openGithubCallback(e) {
    if (this.type === "idea") {
      window.open(`${ae}${nt}`);
      return;
    }
    const t = e.detail.replace(/\n/g, "%0A"), i = `${this.items.find((s) => s.value === this.type)?.ghTitle}`, o = this.description !== "" ? this.description : st, n = rt.replace("{description}", o).replace("{versionsInfo}", t);
    window.open(`${ae}?title=${i}&body=${n}`, "_blank")?.focus();
  }
};
E([
  P()
], w.prototype, "description", 2);
E([
  P()
], w.prototype, "type", 2);
E([
  P()
], w.prototype, "email", 2);
E([
  P()
], w.prototype, "message", 2);
E([
  P()
], w.prototype, "items", 1);
w = E([
  $("copilot-feedback")
], w);
var at = Object.defineProperty, lt = Object.getOwnPropertyDescriptor, F = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? lt(t, i) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (n = (o ? r(t, i, n) : r(n)) || n);
  return o && n && at(t, i, n), n;
};
const dt = 8;
let R = class extends M {
  constructor() {
    super(...arguments), this.initialMouseDownPosition = null, this.dragging = !1, this.mouseDownListener = (e) => {
      this.initialMouseDownPosition = { x: e.clientX, y: e.clientY }, p.draggingStarts(this, e), document.addEventListener("mousemove", this.documentDraggingMouseMoveEventListener);
    }, this.documentDraggingMouseMoveEventListener = (e) => {
      if (this.initialMouseDownPosition && !this.dragging) {
        const { clientX: t, clientY: i } = e;
        this.dragging = Math.abs(t - this.initialMouseDownPosition.x) + Math.abs(i - this.initialMouseDownPosition.y) > dt;
      }
      this.dragging && (this.setOverlayVisibility(!1), p.dragging(this, e));
    }, this.documentMouseUpListener = (e) => {
      if (this.dragging) {
        const t = p.dragging(this, e);
        te.setActivationButtonPosition(t), this.setOverlayVisibility(!0);
      }
      this.dragging = !1, this.initialMouseDownPosition = null, document.removeEventListener("mousemove", this.documentDraggingMouseMoveEventListener), this.setMenuBarOnClick();
    }, this.dispatchSpotlightActivationEvent = (e) => {
      this.dispatchEvent(
        new CustomEvent("spotlight-activation-changed", {
          detail: e
        })
      );
    }, this.activationBtnClicked = (e) => {
      if (this.dragging) {
        e?.stopPropagation(), this.dragging = !1;
        return;
      }
      if (l.active && this.handleAttentionRequiredOnClick()) {
        e?.stopPropagation(), e?.preventDefault();
        return;
      }
      e?.stopPropagation(), this.dispatchEvent(new CustomEvent("activation-btn-clicked"));
    }, this.handleAttentionRequiredOnClick = () => {
      const e = a.getAttentionRequiredPanelConfiguration();
      return e ? e.panel && !e.floating ? (g.emit("open-attention-required-drawer", null), !0) : (a.clearAttention(), !0) : !1;
    }, this.setMenuBarOnClick = () => {
      const e = this.shadowRoot.querySelector("vaadin-menu-bar-button");
      e && (e.onclick = this.activationBtnClicked);
    };
  }
  static get styles() {
    return [
      W(Q),
      T`
        :host {
          --space: 8px;
          --height: 28px;
          --width: 28px;
          position: absolute;
          top: clamp(var(--space), var(--top), calc(100vh - var(--height) - var(--space)));
          left: clamp(var(--space), var(--left), calc(100vw - var(--width) - var(--space)));
          bottom: clamp(var(--space), var(--bottom), calc(100vh - var(--height) - var(--space)));
          right: clamp(var(--space), var(--right), calc(100vw - var(--width) - var(--space)));
          user-select: none;
          -ms-user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          /* Don't add a z-index or anything else that creates a stacking context */
        }

        .menu-button::part(container) {
          overflow: visible;
        }

        .menu-button vaadin-menu-bar-button {
          all: initial;
          display: block;
          position: relative;
          z-index: var(--z-index-activation-button);
          width: var(--width);
          height: var(--height);
          overflow: hidden;
          color: transparent;
          background: hsl(0 0% 0% / 0.25);
          border-radius: 8px;
          box-shadow: 0 0 0 1px hsl(0 0% 100% / 0.1);
          cursor: default;
          -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
          transition:
            box-shadow 0.2s,
            background-color 0.2s;
        }

        /* pointer-events property is set when the menu is open */

        .menu-button[style*='pointer-events'] + .monkey-patch-close-on-hover {
          position: fixed; /* escapes the host positioning context */
          inset: 0;
          bottom: 40px;
          z-index: calc(var(--z-index-popover) - 1);
          pointer-events: auto;
        }

        /* visual effect when active */

        .menu-button vaadin-menu-bar-button::before {
          all: initial;
          content: '';
          position: absolute;
          inset: -6px;
          background-image: radial-gradient(circle at 50% -10%, hsl(221 100% 55% / 0.6) 0%, transparent 60%),
            radial-gradient(circle at 25% 40%, hsl(303 71% 64%) 0%, transparent 70%),
            radial-gradient(circle at 80% 10%, hsla(262, 38%, 9%, 0.5) 0%, transparent 80%),
            radial-gradient(circle at 110% 50%, hsla(147, 100%, 77%, 1) 20%, transparent 100%);
          animation: 5s swirl linear infinite;
          animation-play-state: paused;
          opacity: 0;
          transition: opacity 0.5s;
        }

        /* vaadin symbol */

        .menu-button vaadin-menu-bar-button::after {
          all: initial;
          content: '';
          position: absolute;
          inset: 1px;
          background: url('data:image/svg+xml;utf8,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.7407 9.70401C12.7407 9.74417 12.7378 9.77811 12.7335 9.81479C12.7111 10.207 12.3897 10.5195 11.9955 10.5195C11.6014 10.5195 11.2801 10.209 11.2577 9.8169C11.2534 9.7801 11.2504 9.74417 11.2504 9.70401C11.2504 9.31225 11.1572 8.90867 10.2102 8.90867H7.04307C5.61481 8.90867 5 8.22698 5 6.86345V5.70358C5 5.31505 5.29521 5 5.68008 5C6.06495 5 6.35683 5.31505 6.35683 5.70358V6.09547C6.35683 6.53423 6.655 6.85413 7.307 6.85413H10.4119C11.8248 6.85413 11.9334 7.91255 11.98 8.4729H12.0111C12.0577 7.91255 12.1663 6.85413 13.5791 6.85413H16.6841C17.3361 6.85413 17.614 6.54529 17.614 6.10641L17.6158 5.70358C17.6158 5.31505 17.9246 5 18.3095 5C18.6943 5 19 5.31505 19 5.70358V6.86345C19 8.22698 18.3763 8.90867 16.9481 8.90867H13.7809C12.8338 8.90867 12.7407 9.31225 12.7407 9.70401Z" fill="white"/><path d="M12.7536 17.7785C12.6267 18.0629 12.3469 18.2608 12.0211 18.2608C11.6907 18.2608 11.4072 18.0575 11.2831 17.7668C11.2817 17.7643 11.2803 17.7619 11.279 17.7595C11.2761 17.7544 11.2732 17.7495 11.2704 17.744L8.45986 12.4362C8.3821 12.2973 8.34106 12.1399 8.34106 11.9807C8.34106 11.4732 8.74546 11.0603 9.24238 11.0603C9.64162 11.0603 9.91294 11.2597 10.0985 11.6922L12.0216 15.3527L13.9468 11.6878C14.1301 11.2597 14.4014 11.0603 14.8008 11.0603C15.2978 11.0603 15.7021 11.4732 15.7021 11.9807C15.7021 12.1399 15.6611 12.2973 15.5826 12.4374L12.7724 17.7446C12.7683 17.7524 12.7642 17.7597 12.7601 17.767C12.7579 17.7708 12.7557 17.7746 12.7536 17.7785Z" fill="white"/></svg>');
          background-size: 100%;
        }

        .menu-button vaadin-menu-bar-button[focus-ring] {
          outline: 2px solid var(--selection-color);
          outline-offset: 2px;
        }

        .menu-button vaadin-menu-bar-button:hover {
          background: hsl(0 0% 0% / 0.8);
          box-shadow:
            0 0 0 1px hsl(0 0% 100% / 0.1),
            0 2px 8px -1px hsl(0 0% 0% / 0.3);
        }

        :host([active]) .menu-button vaadin-menu-bar-button {
          background-color: transparent;
          box-shadow:
            inset 0 0 0 1px hsl(0 0% 0% / 0.2),
            0 2px 8px -1px hsl(0 0% 0% / 0.3);
        }

        :host([active]) .menu-button vaadin-menu-bar-button::before {
          opacity: 1;
          animation-play-state: running;
        }

        :host([attention-required]) {
          animation: bounce 0.5s;
          animation-iteration-count: 2;
        }

        :host([attention-required]) [part='attention-required-indicator'] {
          top: -1px;
          right: -1px;
          width: 6px;
          height: 6px;
          box-sizing: border-box;
          border-radius: 100%;
          position: absolute;
          background: var(--red-500);
          z-index: calc(var(--z-index-activation-button) + 1);
        }
      `
    ];
  }
  connectedCallback() {
    super.connectedCallback(), this.reaction(
      () => a.attentionRequiredPanelTag,
      () => {
        this.toggleAttribute(m, a.attentionRequiredPanelTag !== null);
      }
    ), this.reaction(
      () => l.active,
      () => {
        this.toggleAttribute("active", l.active);
      },
      { fireImmediately: !0 }
    ), this.addEventListener("mousedown", this.mouseDownListener), document.addEventListener("mouseup", this.documentMouseUpListener);
    const e = te.getActivationButtonPosition();
    e ? (this.style.setProperty("--left", `${e.left}px`), this.style.setProperty("--bottom", `${e.bottom}px`), this.style.setProperty("--right", `${e.right}px`), this.style.setProperty("--top", `${e.top}px`)) : (this.style.setProperty("--bottom", "var(--space)"), this.style.setProperty("--right", "var(--space)"));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("mousedown", this.mouseDownListener), document.removeEventListener("mouseup", this.documentMouseUpListener);
  }
  /**
   * To hide overlay while dragging
   * @param visible
   */
  setOverlayVisibility(e) {
    const t = this.shadowRoot.querySelector("vaadin-menu-bar-button").__overlay;
    e ? (t?.style.setProperty("display", "flex"), t?.style.setProperty("visibility", "visible")) : (t?.style.setProperty("display", "none"), t?.style.setProperty("visibility", "invisible"));
  }
  render() {
    const e = je(), t = [
      {
        text: "Vaadin Copilot",
        children: [
          {
            component: A("vaadin-menu-bar-item", {
              label: _.activationShortcutEnabled ? "Shortcut enabled" : "Shortcut disabled",
              hint: _.activationShortcutEnabled ? "✓" : void 0
            }),
            action: "shortcut"
          },
          {
            component: A("vaadin-menu-bar-item", {
              label: '<span class="deactivate">Deactivate</span><span class="activate">Activate</span> Copilot',
              hint: _.activationShortcutEnabled ? `<kbd>⇧</kbd> + <kbd>${e}</kbd> <kbd>${e}</kbd>` : void 0
            }),
            action: "copilot"
          },
          {
            component: A("vaadin-menu-bar-item", {
              label: "Toggle Spotlight",
              hint: "<kbd>⇧</kbd> + <kbd>Space</kbd>",
              style: "toggle-spotlight"
            }),
            action: "spotlight"
          }
        ]
      }
    ];
    return l.active && (l.idePluginState?.supportedActions?.find((i) => i === "undo") && (t[0].children = [
      {
        component: A("vaadin-menu-bar-item", {
          label: "Undo",
          hint: `<kbd>${e}</kbd> + <kbd>Z</kbd>`
        }),
        action: "undo"
      },
      {
        component: A("vaadin-menu-bar-item", {
          label: "Redo",
          hint: `<kbd>${e}</kbd> + <kbd>⇧</kbd> + <kbd>Z</kbd>`
        }),
        action: "redo"
      },
      ...t[0].children
    ]), t[0].children.push(
      {
        component: "hr"
      },
      {
        component: A("vaadin-menu-bar-item", {
          label: "Tell us what you think"
        }),
        action: "feedback"
      }
    )), c`
      <vaadin-menu-bar
        class="menu-button"
        .items="${t}"
        @item-selected="${(i) => {
      this.handleMenuItemClick(i.detail.value);
    }}"
        ?open-on-hover=${!this.dragging}
        overlay-class="activation-button-menu">
      </vaadin-menu-bar>
      <div class="monkey-patch-close-on-hover" @mouseenter="${this.closeMenu}"></div>
      <div part="attention-required-indicator"></div>
      <copilot-feedback></copilot-feedback>
    `;
  }
  closeMenu() {
    this.menubar._close();
  }
  handleMenuItemClick(e) {
    switch (e.action) {
      case "copilot":
        this.activationBtnClicked();
        break;
      case "spotlight":
        l.setSpotlightActive(!l.spotlightActive);
        break;
      case "shortcut":
        _.setActivationShortcutEnabled(!_.activationShortcutEnabled);
        break;
      case "undo":
      case "redo":
        g.emit("undoRedo", { undo: e.action === "undo" });
        break;
      case "feedback":
        l.setFeedbackOpened(!0);
        break;
    }
  }
  firstUpdated() {
    this.setMenuBarOnClick(), J(this.shadowRoot);
  }
};
F([
  k("vaadin-menu-bar")
], R.prototype, "menubar", 2);
F([
  P()
], R.prototype, "dragging", 2);
F([
  k("copilot-feedback")
], R.prototype, "feedback", 2);
R = F([
  $("copilot-activation-button")
], R);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class G extends ue {
  constructor(t) {
    if (super(t), this.it = b, t.type !== Z.CHILD)
      throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === b || t == null)
      return this._t = void 0, this.it = t;
    if (t === $e)
      return t;
    if (typeof t != "string")
      throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it)
      return this._t;
    this.it = t;
    const i = [t];
    return i.raw = i, this._t = { _$litType$: this.constructor.resultType, strings: i, values: [] };
  }
}
G.directiveName = "unsafeHTML", G.resultType = 1;
const ct = K(G);
var ht = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, D = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? ut(t, i) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (n = (o ? r(t, i, n) : r(n)) || n);
  return o && n && ht(t, i, n), n;
};
let x = class extends M {
  constructor() {
    super(...arguments), this.panelTag = "", this.resizingStarted = !1, this.resizingInDrawerStarted = !1, this.toggling = !1, this.transitionEndEventListener = () => {
      this.toggling && (this.toggling = !1, p.anchor(this));
    }, this.resizeEventListenerCallback = () => {
      if (this.panelInfo?.floating && this.panelInfo?.floatingPosition && this.panelInfo?.expanded && this.resizingStarted) {
        const e = this.getBoundingClientRect(), t = e.height - this.headerDraggableArea.clientHeight, { left: i, top: o, bottom: n, right: s, width: r } = e;
        a.updatePanel(this.panelInfo.tag, {
          width: r,
          height: t,
          floatingPosition: {
            ...this.panelInfo.floatingPosition,
            left: i,
            top: o,
            bottom: n,
            right: s
          }
        }), this.requestUpdate();
      }
    }, this.resizeInDrawerMouseDownListener = (e) => {
      e.button === 0 && (this.resizingInDrawerStarted = !0, this.setAttribute("resizing", ""));
    }, this.resizeInDrawerMouseMoveListener = (e) => {
      if (!this.resizingInDrawerStarted)
        return;
      const { y: t } = e;
      e.stopPropagation(), e.preventDefault();
      const i = t - this.getBoundingClientRect().top - this.headerDraggableArea.getBoundingClientRect().height;
      this.style.setProperty("--content-height", `${i}px`), a.updatePanel(this.panelInfo.tag, {
        height: i
      });
    }, this.resizeInDrawerMouseUpListener = () => {
      this.resizingInDrawerStarted = !1, this.removeAttribute("resizing"), this.style.setProperty("--section-height", `${this.getBoundingClientRect().height}px`);
    }, this.sectionPanelMouseEnterListener = () => {
      this.hasAttribute(m) && (this.removeAttribute(m), a.clearAttention());
    }, this.contentAreaMouseUpListener = () => {
      if (this.resizingStarted && this.panelInfo?.floatingPosition) {
        const e = this.getBoundingClientRect(), t = p.adjust(
          this,
          e.left,
          e.top,
          e.right,
          e.bottom
        ), { left: i, top: o, bottom: n, right: s } = t;
        a.updatePanel(this.panelInfo.tag, {
          floatingPosition: {
            ...this.panelInfo.floatingPosition,
            left: i,
            top: o,
            bottom: n,
            right: s
          }
        }), this.setCssSizePositionProperties(), this.resizingStarted = !1;
      }
    }, this.contentAreaMouseDownListener = (e) => {
      const { clientX: t, clientY: i } = e;
      a.addFocusedFloatingPanel(this.panelInfo);
      const o = this.getBoundingClientRect();
      this.panelInfo?.floating && t >= o.right - 20 && i >= o.bottom - 20 && (this.resizingStarted = !0, p.anchorLeftTop(this));
    }, this.contentAreaMouseMoveListener = (e) => {
      this.resizingStarted && e.stopPropagation();
    }, this.documentMouseUpEventListener = () => {
      document.removeEventListener("mousemove", this.draggingEventListener), this.panelInfo?.floating && (this.toggleAttribute("dragging", !1), l.setSectionPanelDragging(!1));
    }, this.panelHeaderMouseDownEventListener = (e) => {
      e.button === 0 && (e.target instanceof HTMLButtonElement && e.target.getAttribute("part") === "title-button" || (a.addFocusedFloatingPanel(this.panelInfo), p.draggingStarts(this, e), document.addEventListener("mousemove", this.draggingEventListener), l.setSectionPanelDragging(!0), this.panelInfo?.floating ? this.toggleAttribute("dragging", !0) : this.parentElement.sectionPanelDraggingStarted(this, e), e.preventDefault(), e.stopPropagation()));
    }, this.draggingEventListener = (e) => {
      const t = p.dragging(this, e);
      if (this.panelInfo?.floating && this.panelInfo?.floatingPosition) {
        e.preventDefault();
        const { left: i, top: o, bottom: n, right: s } = t;
        a.updatePanel(this.panelInfo.tag, {
          floatingPosition: {
            ...this.panelInfo.floatingPosition,
            left: i,
            top: o,
            bottom: n,
            right: s
          }
        });
      }
    }, this.setCssSizePositionProperties = () => {
      const e = a.getPanelByTag(this.panelTag);
      if (e && (e.height !== void 0 && (this.panelInfo?.floating || e.panel === "left" || e.panel === "right" ? this.style.setProperty("--content-height", `${e.height}px`) : this.style.removeProperty("--content-height")), e.width !== void 0 && (e.floating || e.panel === "bottom" ? this.style.setProperty("--content-width", `${e.width}px`) : this.style.removeProperty("--content-width")), e.floating && e.floatingPosition)) {
        const { left: t, top: i, bottom: o, right: n } = e.floatingPosition;
        this.style.setProperty("--left", t !== void 0 ? `${t}px` : "auto"), this.style.setProperty("--top", i !== void 0 ? `${i}px` : "auto"), this.style.setProperty("--bottom", o !== void 0 ? `${o}px` : ""), this.style.setProperty("--right", n !== void 0 ? `${n}px` : "");
      }
    }, this.changePanelFloating = (e) => {
      if (this.panelInfo)
        if (e.stopPropagation(), Ce(this), this.panelInfo?.floating)
          a.updatePanel(this.panelInfo?.tag, { floating: !1 });
        else {
          let t;
          if (this.panelInfo.floatingPosition)
            t = this.panelInfo?.floatingPosition;
          else {
            const { left: n, top: s } = this.getBoundingClientRect();
            t = {
              left: n,
              top: s
            };
          }
          let i = this.panelInfo?.height;
          i === void 0 && this.panelInfo.expanded && (i = Number.parseInt(window.getComputedStyle(this).height, 10)), this.parentElement.forceClose(), a.updatePanel(this.panelInfo?.tag, {
            floating: !0,
            width: this.panelInfo?.width || Number.parseInt(window.getComputedStyle(this).width, 10),
            height: i,
            floatingPosition: t
          }), a.addFocusedFloatingPanel(this.panelInfo);
        }
    }, this.toggleExpand = (e) => {
      this.panelInfo && (e.stopPropagation(), p.anchorLeftTop(this), a.updatePanel(this.panelInfo.tag, {
        expanded: !this.panelInfo.expanded
      }), this.toggling = !0, this.toggleAttribute("expanded", this.panelInfo.expanded), this.requestUpdate());
    };
  }
  static get styles() {
    return [
      W(Q),
      T`
        :host {
          flex: none;
          display: grid;
          align-content: start;
          grid-template-rows: auto 1fr;
          transition: grid-template-rows var(--duration-2);
          overflow: hidden;
          cursor: default;
          --min-width: 10em;
          position: relative;
        }

        :host(:not([expanded])) {
          grid-template-rows: auto 0fr;
          --content-height: 0px !important;
        }

        [part='header'] {
          align-items: center;
          color: var(--color-high-contrast);
          display: flex;
          flex: none;
          font: var(--font-small-bold);
          justify-content: space-between;
          min-width: 100%;
          user-select: none;
          -webkit-user-select: none;
          width: var(--min-width);
        }

        [part='header'] {
          border-bottom: 1px solid var(--border-color);
        }

        :host([floating]) [part='header'] {
          transition: border-color var(--duration-2);
        }

        :host([floating]:not([expanded])) [part='header'] {
          border-color: transparent;
        }

        [part='title'] {
          flex: auto;
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        [part='content'] {
          height: var(--content-height);
          overflow: auto;
          transition:
            height var(--duration-2),
            width var(--duration-2),
            opacity var(--duration-2),
            visibility calc(var(--duration-2) * 2);
        }

        [part='drawer-resize'] {
          resize: vertical;
          cursor: row-resize;
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 10px;
        }

        :host([floating]) [part='drawer-resize'] {
          display: none;
        }

        :host(:not([expanded])) [part='drawer-resize'] {
          display: none;
        }

        :host(:not([floating]):not(:last-child)) {
          border-bottom: 1px solid var(--border-color);
        }

        :host(:not([expanded])) [part='content'] {
          opacity: 0;
          visibility: hidden;
        }

        :host([floating]:not([expanded])) [part='content'] {
          width: 0;
          height: 0;
        }

        :host(:not([expanded])) [part='content'][style*='height'] {
          height: 0 !important;
        }

        :host(:not([expanded])) [part='content'][style*='width'] {
          width: 0 !important;
        }

        :host([floating]) {
          position: fixed;
          overflow: hidden;
          min-width: 0;
          min-height: 0;
          z-index: calc(var(--z-index-floating-panel) + var(--z-index-focus, 0));
          box-shadow: var(--surface-box-shadow-2);
          background: var(--surface);
          border: 1px solid var(--surface-border-color);
          -webkit-backdrop-filter: var(--surface-backdrop-filter);
          backdrop-filter: var(--surface-backdrop-filter);
          border-radius: var(--radius-2);
          top: clamp(0px, var(--top), calc(100vh - var(--section-height) * 0.5));
          left: clamp(calc(var(--content-width) * -0.5), var(--left), calc(100vw - var(--content-width) * 0.5));
          bottom: clamp(calc(var(--section-height) * -0.5), var(--bottom), calc(100vh - var(--section-height) * 0.5));
          right: clamp(calc(var(--content-width) * -0.5), var(--right), calc(100vw - var(--content-width) * 0.5));
        }

        :host([floating]) .drag-handle {
          cursor: move;
        }

        :host([floating][expanded]) [part='content'] {
          resize: both;
          min-width: var(--min-width);
          min-height: 0;
          max-height: 85vh;
          max-width: 90vw;
          width: var(--content-width);
        }

        /* :hover for Firefox, :active for others */

        :host([floating][expanded]) [part='content']:is(:hover, :active) {
          transition: none;
        }

        [part='header'] button {
          align-items: center;
          appearance: none;
          background: transparent;
          border: 0px;
          border-radius: var(--radius-1);
          color: var(--color);
          display: flex;
          flex: 0 0 auto;
          height: 2.25rem;
          justify-content: center;
          margin: 0px;
          padding: 0px;
          width: 2.25rem;
        }

        [part='title'] button {
          font: var(--font-small-bold);
          color: var(--color-high-contrast);
          width: auto;
        }

        [part='header'] button:hover {
          color: var(--color-high-contrast);
        }

        [part='header'] button:focus-visible {
          outline: 2px solid var(--blue-500);
          outline-offset: 2px;
        }

        [part='header'] button svg {
          display: block;
        }

        ::slotted(*) {
          display: block;
          width: 100%;
          padding: var(--space-150);
          height: var(--content-height, var(--default-content-height, 100%));
          box-sizing: border-box;
        }

        :host(:not([floating])) ::slotted(*) {
          padding-top: var(--space-50);
        }

        :host([dragging]) {
          opacity: 0.4;
        }

        :host([dragging]) [part='content'] {
          pointer-events: none;
        }

        :host([attention-required]) {
          --pulse-animation-duration: 2s;
          --pulse-first-color: var(--red-500);
          --pulse-second-color: var(--red-800);
          --pulse-size: 12px;
          animation: pulse 2s infinite;
        }

        :host([resizing]),
        :host([resizing]) [part='content'] {
          transition: none;
        }

        :host([hiding-while-drag-and-drop]) {
          display: none;
        }

        // dragging in drawer

        :host(:not([floating])) .drag-handle {
          cursor: grab;
        }

        :host(:not([floating])[dragging]) .drag-handle {
          cursor: grabbing;
        }
      `
    ];
  }
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "region"), this.resizeObserver = new ResizeObserver(this.resizeEventListenerCallback), this.resizeObserver.observe(this), this.reaction(
      () => a.getAttentionRequiredPanelConfiguration(),
      () => {
        const e = a.getAttentionRequiredPanelConfiguration();
        this.toggleAttribute(m, e?.tag === this.panelTag && e?.floating);
      }
    ), this.addEventListener("mouseenter", this.sectionPanelMouseEnterListener), document.addEventListener("mousemove", this.resizeInDrawerMouseMoveListener), document.addEventListener("mouseup", this.resizeInDrawerMouseUpListener), this.reaction(
      () => l.operationInProgress,
      () => {
        requestAnimationFrame(() => {
          this.toggleAttribute(
            "hiding-while-drag-and-drop",
            l.operationInProgress === ce.DragAndDrop && this.panelInfo?.floating && !this.panelInfo.showWhileDragging
          );
        });
      }
    ), this.reaction(
      () => a.floatingPanelsZIndexOrder,
      () => {
        this.style.setProperty("--z-index-focus", `${a.getFloatingPanelZIndex(this.panelTag)}`);
      },
      { fireImmediately: !0 }
    ), this.addEventListener("transitionend", this.transitionEndEventListener);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.resizeObserver != null && this.resizeObserver.disconnect(), this.removeEventListener("mouseenter", this.sectionPanelMouseEnterListener), this.drawerResizeElement.removeEventListener("mousedown", this.resizeInDrawerMouseDownListener), document.removeEventListener("mousemove", this.resizeInDrawerMouseMoveListener), document.removeEventListener("mouseup", this.resizeInDrawerMouseUpListener);
  }
  willUpdate(e) {
    super.willUpdate(e), e.has("panelTag") && (this.panelInfo = a.getPanelByTag(this.panelTag), this.setAttribute("aria-labelledby", this.panelInfo.tag.concat("-title"))), this.toggleAttribute("floating", this.panelInfo?.floating);
  }
  updated(e) {
    super.updated(e), this.style.setProperty("--section-height", `${this.getBoundingClientRect().height}px`);
  }
  firstUpdated(e) {
    super.firstUpdated(e), document.addEventListener("mouseup", this.documentMouseUpEventListener), this.headerDraggableArea.addEventListener("mousedown", this.panelHeaderMouseDownEventListener), this.toggleAttribute("expanded", this.panelInfo?.expanded), Ee(this), this.setCssSizePositionProperties(), this.contentArea.addEventListener("mousedown", this.contentAreaMouseDownListener), this.contentArea.addEventListener("mousemove", this.contentAreaMouseMoveListener, { capture: !0 }), this.contentArea.addEventListener("mouseup", this.contentAreaMouseUpListener), this.drawerResizeElement.addEventListener("mousedown", this.resizeInDrawerMouseDownListener);
  }
  render() {
    return this.panelInfo ? c`
      <div part="header" class="drag-handle">
        <button
          part="toggle-button"
          @mousedown="${(e) => e.stopPropagation()}"
          @click="${(e) => this.toggleExpand(e)}"
          aria-expanded="${this.panelInfo.expanded}"
          aria-controls="content"
          aria-label="Expand ${this.panelInfo.header}">
          ${this.panelInfo.expanded ? L.chevronDown : L.chevronRight}
        </button>
        <h2 id="${this.panelInfo.tag}-title" part="title">
          <button part="title-button" @dblclick="${(e) => this.toggleExpand(e)}">
            ${this.panelInfo.header}
          </button>
        </h2>
        <button class="actions" @mousedown="${(e) => e.stopPropagation()}">${this.renderActions()}</button>
        <button
          part="popup-button"
          @click="${(e) => this.changePanelFloating(e)}"
          @mousedown="${(e) => e.stopPropagation()}"
          aria-label=${this.panelInfo.floating ? `Close the ${this.panelInfo.header} popup` : `Open ${this.panelInfo.header} as a popup`}>
          ${this.panelInfo.floating ? L.close : L.popup}
        </button>
      </div>
      <div part="content" id="content">
        <slot name="content"></slot>
      </div>
      <div part="drawer-resize"></div>
    ` : b;
  }
  renderActions() {
    if (!this.panelInfo?.actionsTag)
      return b;
    const e = this.panelInfo.actionsTag;
    return ct(`<${e}></${e}>`);
  }
};
D([
  O()
], x.prototype, "panelTag", 2);
D([
  k(".drag-handle")
], x.prototype, "headerDraggableArea", 2);
D([
  k("#content")
], x.prototype, "contentArea", 2);
D([
  k('[part="drawer-resize"]')
], x.prototype, "drawerResizeElement", 2);
D([
  P()
], x.prototype, "resizingStarted", 2);
x = D([
  $("copilot-section-panel-wrapper")
], x);
g.on("undoRedo", (e) => {
  const t = e.detail.files ?? Se();
  e.detail.undo ? g.send("copilot-plugin-undo", { files: t }) : g.send("copilot-plugin-redo", { files: t });
});
var pt = Object.defineProperty, gt = Object.getOwnPropertyDescriptor, vt = (e, t, i, o) => {
  for (var n = o > 1 ? void 0 : o ? gt(t, i) : t, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (n = (o ? r(t, i, n) : r(n)) || n);
  return o && n && pt(t, i, n), n;
};
let le = class extends M {
  static get styles() {
    return T`
      :host {
        position: fixed;
        bottom: 2.5rem;
        right: 0rem;
        visibility: visible; /* Always show, even if copilot is off */
        user-select: none;
        z-index: 10000;

        --dev-tools-text-color: rgba(255, 255, 255, 0.8);

        --dev-tools-text-color-secondary: rgba(255, 255, 255, 0.65);
        --dev-tools-text-color-emphasis: rgba(255, 255, 255, 0.95);
        --dev-tools-text-color-active: rgba(255, 255, 255, 1);

        --dev-tools-background-color-inactive: rgba(45, 45, 45, 0.25);
        --dev-tools-background-color-active: rgba(45, 45, 45, 0.98);
        --dev-tools-background-color-active-blurred: rgba(45, 45, 45, 0.85);

        --dev-tools-border-radius: 0.5rem;
        --dev-tools-box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 12px -2px rgba(0, 0, 0, 0.4);

        --dev-tools-blue-hsl: 206, 100%, 70%;
        --dev-tools-blue-color: hsl(var(--dev-tools-blue-hsl));
        --dev-tools-green-hsl: 145, 80%, 42%;
        --dev-tools-green-color: hsl(var(--dev-tools-green-hsl));
        --dev-tools-grey-hsl: 0, 0%, 50%;
        --dev-tools-grey-color: hsl(var(--dev-tools-grey-hsl));
        --dev-tools-yellow-hsl: 38, 98%, 64%;
        --dev-tools-yellow-color: hsl(var(--dev-tools-yellow-hsl));
        --dev-tools-red-hsl: 355, 100%, 68%;
        --dev-tools-red-color: hsl(var(--dev-tools-red-hsl));

        /* Needs to be in ms, used in JavaScript as well */
        --dev-tools-transition-duration: 180ms;
      }

      .notification-tray {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;
        margin: 0.5rem;
        flex: none;
      }

      @supports (backdrop-filter: blur(1px)) {
        .notification-tray div.message {
          backdrop-filter: blur(8px);
        }

        .notification-tray div.message {
          background-color: var(--dev-tools-background-color-active-blurred);
        }
      }

      .notification-tray .message {
        pointer-events: auto;
        background-color: var(--dev-tools-background-color-active);
        color: var(--dev-tools-text-color);
        max-width: 30rem;
        box-sizing: border-box;
        border-radius: var(--dev-tools-border-radius);
        margin-top: 0.5rem;
        transition: var(--dev-tools-transition-duration);
        transform-origin: bottom right;
        animation: slideIn var(--dev-tools-transition-duration);
        box-shadow: var(--dev-tools-box-shadow);
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
      }

      .notification-tray .message.animate-out {
        animation: slideOut forwards var(--dev-tools-transition-duration);
      }

      .notification-tray .message .message-details {
        max-height: 10em;
        overflow: hidden;
      }

      .message.information {
        --dev-tools-notification-color: var(--dev-tools-blue-color);
      }

      .message.warning {
        --dev-tools-notification-color: var(--dev-tools-yellow-color);
      }

      .message.error {
        --dev-tools-notification-color: var(--dev-tools-red-color);
      }

      .message {
        display: flex;
        padding: 0.1875rem 0.75rem 0.1875rem 2rem;
        background-clip: padding-box;
      }

      .message.log {
        padding-left: 0.75rem;
      }

      .message-content {
        margin-right: 0.5rem;
        -webkit-user-select: text;
        -moz-user-select: text;
        user-select: text;
      }

      .message-heading {
        position: relative;
        display: flex;
        align-items: center;
        margin: 0.125rem 0;
      }

      .message .message-details {
        font-weight: 400;
        color: var(--dev-tools-text-color-secondary);
        margin: 0.25rem 0;
      }

      .message .message-details[hidden] {
        display: none;
      }

      .message .message-details p {
        display: inline;
        margin: 0;
        margin-right: 0.375em;
        word-break: break-word;
      }

      .message .persist {
        color: var(--dev-tools-text-color-secondary);
        white-space: nowrap;
        margin: 0.375rem 0;
        display: flex;
        align-items: center;
        position: relative;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      .message .persist::before {
        content: '';
        width: 1em;
        height: 1em;
        border-radius: 0.2em;
        margin-right: 0.375em;
        background-color: rgba(255, 255, 255, 0.3);
      }

      .message .persist:hover::before {
        background-color: rgba(255, 255, 255, 0.4);
      }

      .message .persist.on::before {
        background-color: rgba(255, 255, 255, 0.9);
      }

      .message .persist.on::after {
        content: '';
        order: -1;
        position: absolute;
        width: 0.75em;
        height: 0.25em;
        border: 2px solid var(--dev-tools-background-color-active);
        border-width: 0 0 2px 2px;
        transform: translate(0.05em, -0.05em) rotate(-45deg) scale(0.8, 0.9);
      }

      .message .dismiss-message {
        font-weight: 600;
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 0.25rem;
        margin-left: 0.5rem;
        color: var(--dev-tools-text-color-secondary);
      }

      .message .dismiss-message:hover {
        color: var(--dev-tools-text-color);
      }

      .message.log {
        color: var(--dev-tools-text-color-secondary);
      }

      .message:not(.log) .message-heading {
        font-weight: 500;
      }

      .message.has-details .message-heading {
        color: var(--dev-tools-text-color-emphasis);
        font-weight: 600;
      }

      .message-heading::before {
        position: absolute;
        margin-left: -1.5rem;
        display: inline-block;
        text-align: center;
        font-size: 0.875em;
        font-weight: 600;
        line-height: calc(1.25em - 2px);
        width: 14px;
        height: 14px;
        box-sizing: border-box;
        border: 1px solid transparent;
        border-radius: 50%;
      }

      .message.information .message-heading::before {
        content: 'i';
        border-color: currentColor;
        color: var(--dev-tools-notification-color);
      }

      .message.warning .message-heading::before,
      .message.error .message-heading::before {
        content: '!';
        color: var(--dev-tools-background-color-active);
        background-color: var(--dev-tools-notification-color);
      }

      .ahreflike {
        font-weight: 500;
        color: var(--dev-tools-text-color-secondary);
        text-decoration: underline;
        cursor: pointer;
      }

      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0%);
          opacity: 1;
        }
      }

      @keyframes slideOut {
        from {
          transform: translateX(0%);
          opacity: 1;
        }
        to {
          transform: translateX(100%);
          opacity: 0;
        }
      }

      @keyframes fade-in {
        0% {
          opacity: 0;
        }
      }

      @keyframes bounce {
        0% {
          transform: scale(0.8);
        }
        50% {
          transform: scale(1.5);
          background-color: hsla(var(--dev-tools-red-hsl), 1);
        }
        100% {
          transform: scale(1);
        }
      }
    `;
  }
  render() {
    return c`<div class="notification-tray">
      ${l.notifications.map((e) => this.renderNotification(e))}
    </div>`;
  }
  renderNotification(e) {
    return c`
      <div
        class="message ${e.type} ${e.animatingOut ? "animate-out" : ""} ${e.details || e.link ? "has-details" : ""}"
        data-testid="message">
        <div class="message-content">
          <div class="message-heading">${e.message}</div>
          <div class="message-details" ?hidden="${!e.details && !e.link}">
            ${De(e.details)}
            ${e.link ? c`<a class="ahreflike" href="${e.link}" target="_blank">Learn more</a>` : ""}
          </div>
          ${e.dismissId ? c`<div
                class="persist ${e.dontShowAgain ? "on" : "off"}"
                @click=${() => {
      this.toggleDontShowAgain(e);
    }}>
                ${ft(e)}
              </div>` : ""}
        </div>
        <div
          class="dismiss-message"
          @click=${(t) => {
      _e(e), t.stopPropagation();
    }}>
          Dismiss
        </div>
      </div>
    `;
  }
  toggleDontShowAgain(e) {
    e.dontShowAgain = !e.dontShowAgain, this.requestUpdate();
  }
};
le = vt([
  $("copilot-notifications-container")
], le);
function ft(e) {
  return e.dontShowAgainMessage ? e.dontShowAgainMessage : e.dismissTarget === "machine" ? "Do not show this again on this machine" : `Do not show this again for ${location.host}`;
}
Le({
  type: Ie.WARNING,
  message: "Development Mode",
  details: "This application is running in development mode.",
  dismissId: "devmode",
  dismissTarget: "machine"
});
var ee = { exports: {} };
function be(e, t = 100, i = {}) {
  if (typeof e != "function")
    throw new TypeError(`Expected the first parameter to be a function, got \`${typeof e}\`.`);
  if (t < 0)
    throw new RangeError("`wait` must not be negative.");
  const { immediate: o } = typeof i == "boolean" ? { immediate: i } : i;
  let n, s, r, u, d;
  function v() {
    const h = Date.now() - u;
    if (h < t && h >= 0)
      r = setTimeout(v, t - h);
    else if (r = void 0, !o) {
      const I = n, j = s;
      n = void 0, s = void 0, d = e.apply(I, j);
    }
  }
  const f = function(...h) {
    if (n && this !== n)
      throw new Error("Debounced method called with different contexts.");
    n = this, s = h, u = Date.now();
    const I = o && !r;
    if (r || (r = setTimeout(v, t)), I) {
      const j = n, we = s;
      n = void 0, s = void 0, d = e.apply(j, we);
    }
    return d;
  };
  return f.clear = () => {
    r && (clearTimeout(r), r = void 0);
  }, f.flush = () => {
    if (!r)
      return;
    const h = n, I = s;
    n = void 0, s = void 0, d = e.apply(h, I), clearTimeout(r), r = void 0;
  }, f;
}
ee.exports.debounce = be;
ee.exports = be;
var mt = ee.exports;
const bt = /* @__PURE__ */ Re(mt), ye = bt(() => {
  g.emit("component-tree-updated", {});
});
g.on("vite-after-update", () => {
  ye();
});
const de = window?.Vaadin?.connectionState?.stateChangeListeners;
de ? de.add((e, t) => {
  e === "loading" && t === "connected" && l.active && ye();
}) : console.warn("Unable to add listener for connection state changes");
