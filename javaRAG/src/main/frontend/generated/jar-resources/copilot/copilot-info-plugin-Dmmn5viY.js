import { I as v, c as w, b as r, x as n, E as b, T as f, t as k, J as y, V as $, K as j } from "./copilot-DGrV1Juw.js";
import { r as g } from "./state-DHPRLrvM.js";
import { B as P } from "./base-panel-BnBe_7ob.js";
import { a as A } from "./copilot-notification-YGomF54M.js";
const C = "copilot-info-panel{--dev-tools-red-color: red;--dev-tools-grey-color: gray;--dev-tools-green-color: green;position:relative}copilot-info-panel div.info-tray{display:flex;flex-direction:column;gap:10px}copilot-info-panel dl{display:grid;grid-template-columns:auto auto;gap:0;margin:0}copilot-info-panel dl>dt,copilot-info-panel dl>dd{padding:3px 10px;margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}copilot-info-panel dd.live-reload-status>span{overflow:hidden;text-overflow:ellipsis;display:block;color:var(--status-color)}copilot-info-panel dd span.hidden{display:none}copilot-info-panel dd span.true{color:var(--dev-tools-green-color);font-size:large}copilot-info-panel dd span.false{color:var(--dev-tools-red-color);font-size:large}";
var x = Object.defineProperty, J = Object.getOwnPropertyDescriptor, c = (e, t, i, d) => {
  for (var s = d > 1 ? void 0 : d ? J(t, i) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (s = (d ? l(t, i, s) : l(s)) || s);
  return d && s && x(t, i, s), s;
};
const h = n`<a
  href="${y}"
  target="_blank"
  @click="${() => I("idea")}"
  title="Get IntelliJ plugin"
  >Get IntelliJ plugin</a
>`, m = n`<a
  href="${$}"
  target="_blank"
  @click="${() => I("vscode")}"
  title="Get VS Code plugin"
  >Get VS Code plugin</a
>`;
function I(e) {
  return j("get-plugin", e), !1;
}
let u = class extends P {
  constructor() {
    super(...arguments), this.serverInfo = [], this.clientInfo = [{ name: "Browser", version: navigator.userAgent }], this.handleServerInfoEvent = (e) => {
      const t = JSON.parse(e.data.info);
      this.serverInfo = t.versions, this.jdkInfo = t.jdkInfo, this.updateIdePluginInfo(), v().then((i) => {
        i && (this.clientInfo.unshift({ name: "Vaadin Employee", version: "true", more: void 0 }), this.requestUpdate("clientInfo"));
      });
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.onCommand("copilot-info", this.handleServerInfoEvent), this.onEventBus("get-system-info-for-feedback", () => {
      w.emit("system-info-for-feedback", this.getInfoForClipboard(!1));
    }), this.reaction(
      () => r.idePluginState,
      () => {
        this.updateIdePluginInfo(), this.requestUpdate("serverInfo");
      }
    );
  }
  updateIdePluginInfo() {
    const e = this.getIndex("Copilot IDE Plugin");
    let t = "false", i;
    r.idePluginState?.active ? t = `${r.idePluginState.version}-${r.idePluginState.ide}` : r.idePluginState?.ide === "vscode" ? i = m : r.idePluginState?.ide === "idea" ? i = h : i = n`${h} or ${m}`, this.serverInfo[e].version = t, this.serverInfo[e].more = i;
  }
  getIndex(e) {
    return this.serverInfo.findIndex((t) => t.name === e);
  }
  render() {
    return n`<style>
        ${C}
      </style>
      <copilot-copy .text=${() => this.getInfoForClipboard(!0)}></copilot-copy>
      <div class="info-tray">
        <dl>
          ${[...this.serverInfo, ...this.clientInfo].map(
      (e) => n`
              <dt>${e.name}</dt>
              <dd title="${e.version}" style="${e.name === "Java Hotswap" ? "white-space: normal" : ""}">
                ${this.renderVersion(e)} ${e.more}
              </dd>
            `
    )}
        </dl>
      </div>`;
  }
  renderVersion(e) {
    return e.name === "Java Hotswap" ? this.renderJavaHotswap() : this.renderValue(e.version);
  }
  renderValue(e) {
    return e === "false" ? a(!1) : e === "true" ? a(!0) : e;
  }
  getInfoForClipboard(e) {
    const t = this.renderRoot.querySelectorAll(".info-tray dt"), s = Array.from(t).map((o) => ({
      key: o.textContent.trim(),
      value: o.nextElementSibling.textContent.trim()
    })).filter((o) => o.key !== "Live reload").filter((o) => !o.key.startsWith("Vaadin Emplo")).map((o) => {
      const { key: l } = o;
      let { value: p } = o;
      return l === "Copilot IDE Plugin" && !r.idePluginState?.active ? p = "false" : l === "Java Hotswap" && (p = String(p.includes("JRebel is in use") || p.includes("HotswapAgent is in use"))), `${l}: ${p}`;
    }).join(`
`);
    return e && A({
      type: b.INFORMATION,
      message: "Environment information copied to clipboard",
      dismissId: "versionInfoCopied"
    }), s.trim();
  }
  renderJavaHotswap() {
    if (!this.jdkInfo)
      return f;
    const e = this.jdkInfo.extendedClassDefCapable && this.jdkInfo.runningWithExtendClassDef && this.jdkInfo.hotswapAgentFound && this.jdkInfo.runningWitHotswap && this.jdkInfo.hotswapAgentPluginsFound, t = this.jdkInfo.jrebel;
    return !this.jdkInfo.extendedClassDefCapable && !t ? n`<details>
        <summary>${a(!1)} No Hotswap solution in use</summary>
        <p>To enable hotswap for Java, you can either use HotswapAgent or JRebel.</p>
        <p>HotswapAgent is an open source project that utilizes the JetBrains Runtime (JDK).</p>
        <ul>
          <li>If you are running IntelliJ, edit the launch configuration to use the bundled JDK.</li>
          <li>
            Otherwise, download it from
            <a target="_blank" href="https://github.com/JetBrains/JetBrainsRuntime/releases"
              >the JetBrains release page</a
            >
            to get started.
          </li>
        </ul>
        <p>
          JRebel is a commercial solution available from
          <a target="_blank" href="https://www.jrebel.com/">jrebel.com</a>
        </p>
      </details>` : t ? n`${a(!0)} JRebel is in use` : e ? n`${a(!0)} HotswapAgent is in use` : n`<details>
      <summary>${a(!1)} HotswapAgent is partially enabled</summary>
      <ul style="margin:0;padding:0">
        <li>${a(this.jdkInfo.extendedClassDefCapable)} JDK supports hotswapping</li>
        <li>
          ${a(this.jdkInfo.runningWithExtendClassDef)} JDK hotswapping
          enabled${this.jdkInfo.runningWithExtendClassDef ? f : n`<br />Add the <code>-XX:+AllowEnhancedClassRedefinition</code> JVM argument when launching the
                application`}
        </li>
        <li>
          ${a(this.jdkInfo.hotswapAgentFound)} HotswapAgent
          installed${this.jdkInfo.hotswapAgentFound ? f : n`<br /><a target="_blank" href="https://github.com/HotswapProjects/HotswapAgent/releases"
                  >Download the latest HotswapAgent</a
                >
                and place it in <code>${this.jdkInfo.hotswapAgentLocation}</code>`}
        </li>
        <li>
          ${a(this.jdkInfo.runningWitHotswap)} HotswapAgent configured
          ${this.jdkInfo.runningWitHotswap ? f : n`<br />Add the <code>-XX:HotswapAgent=fatjar</code> JVM argument when launching the application`}
        </li>
        <li>
          ${a(this.jdkInfo.hotswapAgentPluginsFound)} Vaadin HotswapAgent plugin available
          ${this.jdkInfo.hotswapAgentPluginsFound ? f : n`<br />Add src/main/resources/hotswap-agent.properties containing
                <code class="codeblock"
                  ><copilot-copy></copilot-copy>pluginPackages=com.vaadin.hilla.devmode.hotswapagent
                  disabledPlugins=vaadin # The Vaadin/Flow plugin causes extra reloads if enabled</code
                >
                and restart the application`}
        </li>
      </ul>
    </details> `;
  }
};
c([
  g()
], u.prototype, "serverInfo", 2);
c([
  g()
], u.prototype, "clientInfo", 2);
c([
  g()
], u.prototype, "jdkInfo", 2);
u = c([
  k("copilot-info-panel")
], u);
const H = {
  header: "Info",
  expanded: !0,
  draggable: !0,
  panelOrder: 15,
  panel: "right",
  floating: !1,
  tag: "copilot-info-panel"
}, E = {
  init(e) {
    e.addPanel(H);
  }
};
window.Vaadin.copilot.plugins.push(E);
function a(e) {
  return e ? n`<span class="true">☑</span>` : n`<span class="false">☒</span>`;
}
export {
  u as CopilotInfoPanel
};
