import { x as d, E as p, t as g } from "./copilot-DGrV1Juw.js";
import { r as u } from "./state-DHPRLrvM.js";
import { B as f } from "./base-panel-BnBe_7ob.js";
import { a as h } from "./copilot-notification-YGomF54M.js";
var b = Object.defineProperty, v = Object.getOwnPropertyDescriptor, c = (e, a, t, r) => {
  for (var s = r > 1 ? void 0 : r ? v(a, t) : a, l = e.length - 1, n; l >= 0; l--)
    (n = e[l]) && (s = (r ? n(a, t, s) : n(s)) || s);
  return r && s && b(a, t, s), s;
};
const o = window.Vaadin.devTools;
let i = class extends f {
  constructor() {
    super(...arguments), this.features = [], this.handleFeatureFlags = (e) => {
      this.features = e.data.features;
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.onCommand("featureFlags", this.handleFeatureFlags);
  }
  render() {
    return d` <div class="features-tray">
      ${this.features.map(
      (e) => d` <div class="feature">
            <label class="switch">
              <input
                class="feature-toggle"
                id="feature-toggle-${e.id}"
                type="checkbox"
                ?checked=${e.enabled}
                @change=${(a) => this.toggleFeatureFlag(a, e)} />
              <span class="slider"></span>
              ${e.title}
            </label>
            <a class="ahreflike" href="${e.moreInfoLink}" target="_blank">Learn more</a>
          </div>`
    )}
    </div>`;
  }
  toggleFeatureFlag(e, a) {
    const t = e.target.checked;
    o.frontendConnection ? (o.frontendConnection.send("setFeature", { featureId: a.id, enabled: t }), h({
      type: p.INFORMATION,
      message: `“${a.title}” ${t ? "enabled" : "disabled"}`,
      details: a.requiresServerRestart ? "This feature requires a server restart" : void 0,
      dismissId: `feature${a.id}${t ? "Enabled" : "Disabled"}`
    })) : o.log("error", `Unable to toggle feature ${a.title}: No server connection available`);
  }
};
c([
  u()
], i.prototype, "features", 2);
i = c([
  g("copilot-features-panel")
], i);
const m = {
  header: "Features",
  expanded: !0,
  draggable: !0,
  panelOrder: 20,
  panel: "right",
  floating: !1,
  tag: "copilot-features-panel"
}, F = {
  init(e) {
    e.addPanel(m);
  }
};
window.Vaadin.copilot.plugins.push(F);
export {
  i as CopilotFeaturesPanel
};
