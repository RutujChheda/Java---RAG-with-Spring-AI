import { D as h, e as E, E as c, x as n, F as T, h as b, G as L, M as k, c as D, m as R, t as w } from "./copilot-DGrV1Juw.js";
import { r as x } from "./state-DHPRLrvM.js";
import { B as M } from "./base-panel-BnBe_7ob.js";
import { i as l } from "./icons-NjFuSzH6.js";
var S = Object.defineProperty, C = Object.getOwnPropertyDescriptor, g = (e, t, o, s) => {
  for (var i = s > 1 ? void 0 : s ? C(t, o) : t, d = e.length - 1, a; d >= 0; d--)
    (a = e[d]) && (i = (s ? a(t, o, i) : a(i)) || i);
  return s && i && S(t, o, i), i;
};
class _ {
  constructor() {
    this.showTimestamps = !1, this.showTypeLabels = !1, R(this);
  }
  toggleShowTimestamps() {
    this.showTimestamps = !this.showTimestamps;
  }
  toggleShowTypeLabels() {
    this.showTypeLabels = !this.showTypeLabels;
  }
}
const r = new _();
let p = class extends M {
  constructor() {
    super(), this.unreadErrors = !1, this.messages = [], this.nextMessageId = 1, this.transitionDuration = 0, this.catchErrors();
  }
  connectedCallback() {
    super.connectedCallback(), this.onCommand("log", (e) => {
      this.handleLogEventData({ type: e.data.type, message: e.data.message });
    }), this.onEventBus("log", (e) => this.handleLogEvent(e)), this.onEventBus("update-log", (e) => this.updateLog(e.detail)), this.onEventBus("notification-dismissed", (e) => this.handleNotification(e)), this.onEventBus("clear-log", () => this.clear()), this.transitionDuration = parseInt(
      window.getComputedStyle(this).getPropertyValue("--dev-tools-transition-duration"),
      10
    );
  }
  clear() {
    this.messages = [];
  }
  handleNotification(e) {
    this.log(e.detail.type, e.detail.message, !0, e.detail.details, e.detail.link, void 0);
  }
  handleLogEvent(e) {
    this.handleLogEventData(e.detail);
  }
  handleLogEventData(e) {
    this.log(
      e.type,
      e.message,
      !!e.internal,
      e.details,
      e.link,
      h(e.expandedMessage),
      h(e.expandedDetails),
      e.id
    );
  }
  activate() {
    this.unreadErrors = !1, this.updateComplete.then(() => {
      const e = this.renderRoot.querySelector(".message:last-child");
      e && e.scrollIntoView();
    });
  }
  format(e) {
    return e.message ? e.message.toString() : e.toString();
  }
  catchErrors() {
    const e = window.Vaadin.ConsoleErrors;
    window.Vaadin.ConsoleErrors = {
      push: (t) => {
        E.attentionRequiredPanelTag = y.tag, t[0].type !== void 0 && t[0].message !== void 0 ? this.log(t[0].type, t[0].message, !!t[0].internal, t[0].details, t[0].link) : this.log(c.ERROR, t.map((o) => this.format(o)).join(" "), !1), e.push(t);
      }
    };
  }
  render() {
    return n`<style>
        .copilot-log {
          overflow: hidden;
        }

        .copilot-log ol {
          margin: 0;
          padding: var(--space-50) 0;
        }
        .copilot-log .row {
          display: flex;
          align-items: flex-start;
          padding: var(--space-50) 0;
        }
        .copilot-log .message {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          gap: var(--space-25);
          overflow: hidden;
        }
        .copilot-log .message > * {
          white-space: nowrap;
        }
        .copilot-log .firstrow {
          display: flex;
          align-items: baseline;
          gap: 0.5em;
        }
        .copilot-log .firstrowmessage {
          flex-grow: 1;
          overflow: hidden;
        }
        copilot-log-panel button {
          padding: 0;
          border: 0;
          background: transparent;
        }
        .copilot-log .type {
          font-size: var(--font-size-1);
          padding-right: 4px;
        }
        .copilot-log svg {
          height: 12px;
          width: 12px;
        }
        .copilot-log .type > span {
          display: flex;
          align-items: center;
          gap: 4px;
          height: 16px;
        }
        .copilot-log .type.labels {
          width: 6em;
        }
        .copilot-log .type .error {
          fill: red;
          color: red;
        }
        .copilot-log .type .warning {
          fill: darkgoldenrod;
          color: darkgoldenrod;
        }
        .copilot-log .type .info {
          fill: black;
          color: black;
        }
        .copilot-log .secondrow,
        .copilot-log .timestamp {
          font-size: var(--font-size-0);
          line-height: var(--line-height-1);
        }
        .copilot-log .expand span {
          height: 12px;
          width: 12px;
        }
      </style>
      <section aria-labelledby="copilot-log" class="copilot-log">
        <ol>
          ${this.messages.map((e) => this.renderMessage(e))}
        </ol>
      </section> `;
  }
  renderMessage(e) {
    let t, o, s;
    return e.type === c.ERROR ? (t = "error", s = l.exclamationMark, o = "Error") : e.type === c.WARNING ? (t = "warning", s = l.warning, o = "Warning") : (t = "info", s = l.infoCircleO, o = "Info"), e.internal && (t += " internal"), n`
      <li>
        <div class="row ${e.type} ${e.details || e.link ? "has-details" : ""}">
          <button
            @click=${() => r.toggleShowTypeLabels()}
            aria-label="Status toggle"
            theme="icon tertiary"
            class="type ${r.showTypeLabels ? "labels" : ""}">
            <span class="${t}">${s} ${r.showTypeLabels ? o : ""}</span>
          </button>
          <div class="message" @click=${() => this.toggleExpanded(e)}>
            <span class="firstrow">
              <span class="firstrowmessage"
                >${e.expanded && e.expandedMessage ? e.expandedMessage : e.message}</span
              >
              <span class="timestamp" ?hidden=${!r.showTimestamps}>${q(e.timestamp)}</span>
            </span>
            ${e.expanded ? n` <span class="secondrow">${e.expandedDetails}</span>` : n`<span class="secondrow" ?hidden="${!e.details && !e.link}"
                  >${h(e.details)}
                  ${e.link ? n`<a class="ahreflike" href="${e.link}" target="_blank">Learn more</a>` : ""}</span
                >`}
          </div>
          <button
            aria-label="Expand details"
            theme="icon tertiary"
            class="expand"
            @click=${() => this.toggleExpanded(e)}
            ?hidden=${!e.expandedDetails}>
            <span>${e.expanded ? l.chevronDown : l.chevronRight}</span>
          </button>
        </div>
      </li>
    `;
  }
  log(e, t, o, s, i, d, a, v) {
    const $ = this.nextMessageId;
    this.nextMessageId += 1;
    const m = T(t, 200);
    for (m !== t && !a && (a = t), this.messages.push({
      id: $,
      type: e,
      message: m,
      details: s,
      link: i,
      dontShowAgain: !1,
      deleted: !1,
      expanded: !1,
      expandedMessage: d,
      expandedDetails: a,
      timestamp: /* @__PURE__ */ new Date(),
      internal: o,
      userId: v
    }); this.messages.length > p.MAX_LOG_ROWS; )
      this.messages.shift();
    this.requestUpdate(), this.updateComplete.then(() => {
      const f = this.renderRoot.querySelector(".message:last-child");
      f ? (setTimeout(() => f.scrollIntoView({ behavior: "smooth" }), this.transitionDuration), this.unreadErrors = !1) : e === c.ERROR && (this.unreadErrors = !0);
    });
  }
  updateLog(e) {
    const t = this.messages.find((o) => o.userId === e.id);
    if (!t) {
      b(`Unable to find message with id ${e.id}`);
      return;
    }
    Object.assign(t, e), L(t.expandedDetails) && (t.expandedDetails = h(t.expandedDetails)), this.requestUpdate();
  }
  toggleExpanded(e) {
    e.expandedDetails && (e.expanded = !e.expanded, this.requestUpdate());
  }
};
p.MAX_LOG_ROWS = 1e3;
g([
  x()
], p.prototype, "unreadErrors", 2);
g([
  x()
], p.prototype, "messages", 2);
p = g([
  w("copilot-log-panel")
], p);
let u = class extends k {
  createRenderRoot() {
    return this;
  }
  render() {
    return n`
      <button title="Clear log" aria-label="Clear log" theme="icon tertiary">
        <span
          @click=${() => {
      D.emit("clear-log", {});
    }}
          >${l.trash}</span
        >
      </button>
      <button title="Toggle timestamps" aria-label="Toggle timestamps" theme="icon tertiary">
        <span
          class="${r.showTimestamps ? "on" : "off"}"
          @click=${() => {
      r.toggleShowTimestamps();
    }}
          >${l.clock}</span
        >
      </button>
    `;
  }
};
u = g([
  w("copilot-log-panel-actions")
], u);
const y = {
  header: "Log",
  expanded: !0,
  draggable: !0,
  panelOrder: 0,
  panel: "bottom",
  floating: !1,
  tag: "copilot-log-panel",
  actionsTag: "copilot-log-panel-actions"
}, I = {
  init(e) {
    e.addPanel(y);
  }
};
window.Vaadin.copilot.plugins.push(I);
const P = { hour: "numeric", minute: "numeric", second: "numeric", fractionalSecondDigits: 3 }, B = new Intl.DateTimeFormat(void 0, P);
function q(e) {
  return B.format(e);
}
export {
  u as Actions,
  p as CopilotLogPanel
};
