/* @ds-bundle: {"format":4,"namespace":"SuDuAI","components":[{"name":"Logo"},{"name":"LogoIcon"},{"name":"BrandMark"},{"name":"Icon"},{"name":"Button"},{"name":"IconButton"},{"name":"Chip"},{"name":"Badge"},{"name":"StatusPill"},{"name":"Input"},{"name":"Checkbox"},{"name":"Radio"},{"name":"PromptConsole"},{"name":"Card"},{"name":"Disclosure"},{"name":"CodeBlock"},{"name":"NavItem"},{"name":"Breadcrumb"},{"name":"TabBar"},{"name":"MetricCapsule"},{"name":"ProgressRing"},{"name":"Sparkline"},{"name":"UserMessage"},{"name":"AgentMessage"},{"name":"ReasoningStep"},{"name":"ConnectorRow"}]} */
window.SuDuAI = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // react-shim.js
  var require_react_shim = __commonJS({
    "react-shim.js"(exports, module) {
      module.exports = window.React;
    }
  });

  // entry.js
  var entry_exports = {};
  __export(entry_exports, {
    AgentMessage: () => AgentMessage,
    Badge: () => Badge,
    BrandMark: () => BrandMark,
    Breadcrumb: () => Breadcrumb,
    Button: () => Button,
    Card: () => Card,
    Checkbox: () => Checkbox,
    Chip: () => Chip,
    CodeBlock: () => CodeBlock,
    ConnectorRow: () => ConnectorRow,
    Disclosure: () => Disclosure,
    Icon: () => Icon,
    IconButton: () => IconButton,
    Input: () => Input,
    Logo: () => Logo,
    LogoIcon: () => LogoIcon,
    MetricCapsule: () => MetricCapsule,
    NavItem: () => NavItem,
    ProgressRing: () => ProgressRing,
    PromptConsole: () => PromptConsole,
    Radio: () => Radio,
    ReasoningStep: () => ReasoningStep,
    Sparkline: () => Sparkline,
    StatusPill: () => StatusPill,
    TabBar: () => TabBar,
    UserMessage: () => UserMessage
  });

  // ../ds/components/brand/Logo.jsx
  var import_react = __toESM(require_react_shim());
  var FULL = { viewBox: "0 0 205.68 50.79", paths: ["M61.26,29.72c-1.84-.24-3.81-.66-5.58-.86-2.57-.38-4.65-.46-8.94-.69-6.09-.18-12.85.99-17.56,2.04-.94.23-1.98.73-2.13,1.91-.14,1.09-.2,2.21-.14,3.31.13,2.24.81,4.31,2.4,5.97,4.4,4.59,12.62,3.05,15.09-2.88.52-1.24.68-2.63,1.04-3.94.17-.63.41-1.25.67-2.01.17.27.23.34.27.42.06.13.11.26.14.4.41,2.51.85,5.01.45,7.56-.24,1.54-.87,2.7-2.5,3.13-.52.13-1,.39-1.49.63-.21.1-.39.28-.58.43.02.09.03.18.05.28,1.23.04,2.46.21,3.67.1,1.51-.14,2.16-.95,2.26-2.49.04-.56,0-1.13-.06-1.69-.08-.71-.21-1.41-.33-2.18.44.46.79.91,1.22,1.26.45.37.95.71,1.47.96,3.06,1.49,7.04.52,9.31-2.25,2.05-2.5,2.47-5.42,2.21-8.51-.05-.54-.39-.8-.93-.88Z", "M38.84,47.42c.3,1.64,1.29,2.56,2.79,3.01,1.38.42,2.73.53,3.97.05-1.12-.31-2.34-.5-3.43-.99-1.18-.53-2.22-1.39-3.33-2.07Z", "M75.85,18.9c-.31-.75-.6-1.24-1.16-1.89-1.95-2.23-4.72-3.4-7.23-4.32-3.46-1.1-8.06-1.9-13.42-2.56-.2-.05-.21-.12-.39-.41-.86-1.37-1.71-2.77-2.75-4.01C46.28.22,39.14-1.51,32.84,1.39c-5.92,2.73-9.38,7.52-10.91,13.77-3.14,1.91-16.9,8.55-21.16,16.83-.44.74-.66,1.04-.74,1.62-.23,1.56.7,2.01,2.32,2.81,2.22.68,4.48,1.27,6.77,1.64,3.94.63,7.93.63,11.91.54,1.64-.04,3.28-.13,5.06-.21-.4-.53-.72-.96-1.04-1.38-1.12-1.47-1.05-3.56.21-4.91,1.22-1.31,2.69-2.27,4.29-3.04,7.36-3.55,15.16-5.17,23.31-5.15,2.24,0,4.47.25,6.55,1.19,1.61.73,2.82,1.85,2.83,3.75,0,.11-.02.22-.02.45.67-.3,1.26-.54,1.83-.81,3.38-1.56,6-3.1,9.27-5.52.77-.6,1.74-1.35,2.36-2.12.45-.56.43-1.3.15-1.98ZM49.66,5.13c1.52,1.59,2.56,2.98,3.7,4.97-8.43-.69-16.5.65-25.93,3.17C31.66-1.86,45.29.58,49.66,5.13ZM17.76,30.76c-.7,1.57-2.73,2.84-4.54,2.81-1.52.02-3.66-.99-2.72-2.92.43-.89,1.71-2.49,3.85-2.85.73-.12,2.05-.14,2.72.18,1.01.48,1.19,1.64.68,2.78ZM30.35,23.39c-.62,1.25-2.32,2.21-3.78,2.13-1.24-.03-2.94-.93-2.11-2.47.38-.71,1.48-1.96,3.23-2.18.6-.07,1.67-.04,2.21.24.8.42.91,1.38.46,2.28ZM45.02,19.55c-.72,1.13-2.43,1.88-3.82,1.66-1.18-.15-2.72-1.18-1.77-2.56.43-.64,1.6-1.73,3.3-1.76.58-.01,1.6.12,2.09.44.73.48.73,1.4.21,2.22ZM59.3,18.96c-.84.88-2.44,1.25-3.57.8-.96-.35-2.05-1.54-.97-2.61.5-.49,1.71-1.26,3.15-.98.49.09,1.33.4,1.67.77.51.56.33,1.39-.28,2.02ZM69.39,22.52c-.78.68-2.16.87-3.08.4-.79-.37-1.62-1.46-.62-2.28.46-.38,1.55-.93,2.74-.59.41.12,1.09.44,1.35.78.39.51.17,1.2-.39,1.69ZM7.05,26.85c1.28-1.18,3.67-2.67,5.01-3.55,7.29-4.33,11.62-6.54,20.35-9.36,5.21-1.41,11.07-2.68,20.42-2.66,10.12.52,16.57,1.84,20.98,5.19.18.14.41.34.56.52.06.07.13.15.18.23-11.36-5.62-37.16-7.48-67.51,9.63Z", "M96.31,34.21c1.24,0,2.25-.14,3.03-.41,1.47-.52,2.21-1.5,2.21-2.93,0-.83-.37-1.48-1.1-1.93-.73-.44-1.88-.84-3.44-1.18l-2.67-.6c-2.62-.59-4.44-1.24-5.44-1.93-1.7-1.16-2.55-2.98-2.55-5.46,0-2.26.82-4.13,2.46-5.63,1.64-1.49,4.05-2.24,7.24-2.24,2.66,0,4.92.7,6.8,2.11,1.88,1.41,2.86,3.45,2.95,6.13h-5.06c-.09-1.52-.75-2.59-1.98-3.23-.82-.42-1.84-.63-3.06-.63-1.36,0-2.44.27-3.25.82-.81.55-1.21,1.31-1.21,2.29,0,.9.4,1.57,1.2,2.02.51.3,1.61.64,3.28,1.04l4.35,1.04c1.9.46,3.34,1.07,4.31,1.83,1.51,1.19,2.26,2.9,2.26,5.15s-.88,4.22-2.64,5.74c-1.76,1.52-4.25,2.28-7.47,2.28s-5.87-.75-7.75-2.25c-1.88-1.5-2.82-3.56-2.82-6.18h5.03c.16,1.15.47,2.01.94,2.58.86,1.04,2.32,1.56,4.4,1.56Z", "M119.99,35.22c-.05.06-.16.23-.34.51-.18.29-.4.54-.65.75-.76.68-1.5,1.15-2.22,1.4-.71.25-1.55.38-2.51.38-2.76,0-4.62-.99-5.58-2.98-.54-1.1-.8-2.71-.8-4.84v-11.24h5v11.24c0,1.06.13,1.86.38,2.4.44.95,1.32,1.42,2.62,1.42,1.67,0,2.81-.67,3.42-2.02.32-.73.48-1.69.48-2.89v-10.15h4.94v18.65h-4.74v-2.63Z", "M138.59,37.86h-10.86V12.64h10.86c1.56.02,2.86.21,3.9.55,1.77.58,3.2,1.65,4.29,3.2.88,1.25,1.48,2.61,1.8,4.07.32,1.46.48,2.85.48,4.17,0,3.35-.67,6.19-2.02,8.52-1.82,3.14-4.64,4.7-8.45,4.7ZM142.5,19.07c-.81-1.37-2.41-2.05-4.81-2.05h-4.86v16.46h4.86c2.49,0,4.22-1.23,5.2-3.68.54-1.35.8-2.95.8-4.81,0-2.57-.4-4.54-1.2-5.92Z", "M162.49,35.22c-.05.06-.16.23-.34.51-.18.29-.4.54-.65.75-.76.68-1.5,1.15-2.22,1.4-.71.25-1.55.38-2.51.38-2.76,0-4.62-.99-5.58-2.98-.54-1.1-.8-2.71-.8-4.84v-11.24h5v11.24c0,1.06.13,1.86.38,2.4.44.95,1.32,1.42,2.62,1.42,1.67,0,2.81-.67,3.42-2.02.32-.73.48-1.69.48-2.89v-10.15h4.94v18.65h-4.74v-2.63Z", "M192.62,32.67h-9.29l-1.75,5.18h-5.51l9-25.22h5.95l8.93,25.22h-5.71l-1.63-5.18ZM191.15,28.33l-3.15-9.92-3.25,9.92h6.4Z", "M205.68,12.48v4.5h-4.94v-4.5h4.94ZM205.68,19.21v18.65h-4.94v-18.65h4.94Z"] };
  var ICON = { viewBox: "0 0 76.05 50.79", paths: ["M61.26,29.72c-1.84-.24-3.81-.66-5.58-.86-2.57-.38-4.65-.46-8.94-.69-6.09-.18-12.85.99-17.56,2.04-.94.23-1.98.73-2.13,1.91-.14,1.09-.2,2.21-.14,3.31.13,2.24.81,4.31,2.4,5.97,4.4,4.59,12.62,3.05,15.09-2.88.52-1.24.68-2.63,1.04-3.94.17-.63.41-1.25.67-2.01.17.27.23.34.27.42.06.13.11.26.14.4.41,2.51.85,5.01.45,7.56-.24,1.54-.87,2.7-2.5,3.13-.52.13-1,.39-1.49.63-.21.1-.39.28-.58.43.02.09.03.18.05.28,1.23.04,2.46.21,3.67.1,1.51-.14,2.16-.95,2.26-2.49.04-.56,0-1.13-.06-1.69-.08-.71-.21-1.41-.33-2.18.44.46.79.91,1.22,1.26.45.37.95.71,1.47.96,3.06,1.49,7.04.52,9.31-2.25,2.05-2.5,2.47-5.42,2.21-8.51-.05-.54-.39-.8-.93-.88Z", "M38.84,47.42c.3,1.64,1.29,2.56,2.79,3.01,1.38.42,2.73.53,3.97.05-1.12-.31-2.34-.5-3.43-.99-1.18-.53-2.22-1.39-3.33-2.07Z", "M75.85,18.9c-.31-.75-.6-1.24-1.16-1.89-1.95-2.23-4.72-3.4-7.23-4.32-3.46-1.1-8.06-1.9-13.42-2.56-.2-.05-.21-.12-.39-.41-.86-1.37-1.71-2.77-2.75-4.01C46.28.22,39.14-1.51,32.84,1.39c-5.92,2.73-9.38,7.52-10.91,13.77-3.14,1.91-16.9,8.55-21.16,16.83-.44.74-.66,1.04-.74,1.62-.23,1.56.7,2.01,2.32,2.81,2.22.68,4.48,1.27,6.77,1.64,3.94.63,7.93.63,11.91.54,1.64-.04,3.28-.13,5.06-.21-.4-.53-.72-.96-1.04-1.38-1.12-1.47-1.05-3.56.21-4.91,1.22-1.31,2.69-2.27,4.29-3.04,7.36-3.55,15.16-5.17,23.31-5.15,2.24,0,4.47.25,6.55,1.19,1.61.73,2.82,1.85,2.83,3.75,0,.11-.02.22-.02.45.67-.3,1.26-.54,1.83-.81,3.38-1.56,6-3.1,9.27-5.52.77-.6,1.74-1.35,2.36-2.12.45-.56.43-1.3.15-1.98ZM49.66,5.13c1.52,1.59,2.56,2.98,3.7,4.97-8.43-.69-16.5.65-25.93,3.17C31.66-1.86,45.29.58,49.66,5.13ZM17.76,30.76c-.7,1.57-2.73,2.84-4.54,2.81-1.52.02-3.66-.99-2.72-2.92.43-.89,1.71-2.49,3.85-2.85.73-.12,2.05-.14,2.72.18,1.01.48,1.19,1.64.68,2.78ZM30.35,23.39c-.62,1.25-2.32,2.21-3.78,2.13-1.24-.03-2.94-.93-2.11-2.47.38-.71,1.48-1.96,3.23-2.18.6-.07,1.67-.04,2.21.24.8.42.91,1.38.46,2.28ZM45.02,19.55c-.72,1.13-2.43,1.88-3.82,1.66-1.18-.15-2.72-1.18-1.77-2.56.43-.64,1.6-1.73,3.3-1.76.58-.01,1.6.12,2.09.44.73.48.73,1.4.21,2.22ZM59.3,18.96c-.84.88-2.44,1.25-3.57.8-.96-.35-2.05-1.54-.97-2.61.5-.49,1.71-1.26,3.15-.98.49.09,1.33.4,1.67.77.51.56.33,1.39-.28,2.02ZM69.39,22.52c-.78.68-2.16.87-3.08.4-.79-.37-1.62-1.46-.62-2.28.46-.38,1.55-.93,2.74-.59.41.12,1.09.44,1.35.78.39.51.17,1.2-.39,1.69ZM7.05,26.85c1.28-1.18,3.67-2.67,5.01-3.55,7.29-4.33,11.62-6.54,20.35-9.36,5.21-1.41,11.07-2.68,20.42-2.66,10.12.52,16.57,1.84,20.98,5.19.18.14.41.34.56.52.06.07.13.15.18.23-11.36-5.62-37.16-7.48-67.51,9.63Z"] };
  function render(art, { height, color, title, style, rest }) {
    const [w, h] = art.viewBox.split(" ").slice(2).map(Number);
    return /* @__PURE__ */ import_react.default.createElement(
      "svg",
      {
        viewBox: art.viewBox,
        role: "img",
        "aria-label": title || "SuDu AI",
        fill: "currentColor",
        style: { height, width: height * w / h, display: "block", color, flexShrink: 0, ...style },
        ...rest
      },
      art.paths.map((d, i) => /* @__PURE__ */ import_react.default.createElement("path", { key: i, d }))
    );
  }
  function Logo({ height = 28, color = "var(--on-surface)", title, style, ...rest }) {
    return render(FULL, { height, color, title, style, rest });
  }
  function LogoIcon({ height = 28, color = "var(--on-surface)", title, style, ...rest }) {
    return render(ICON, { height, color, title, style, rest });
  }

  // ../ds/components/brand/BrandMark.jsx
  var import_react2 = __toESM(require_react_shim());
  var MARKS = {
    "07": {
      viewBox: "0 0 50 50",
      paths: ["M32.15,0h17.85v17.35h-17.57c-8.32,0-15.08,6.77-15.08,15.08v17.57H0v-17.57C0,14.64,14.4.15,32.15,0h0Z"]
    },
    "08": {
      viewBox: "0 0 50 50",
      paths: [
        "M39.02,19h10.98v10.8h-10.8c-5.18,0-9.39,4.21-9.39,9.39v10.8h-10.8v-10.8c0-11.08,8.97-20.1,20.02-20.2h0Z",
        "M10.98,31H0v-10.8h10.8c5.18,0,9.39-4.21,9.39-9.39V0h10.8v10.8c0,11.08-8.97,20.1-20.02,20.2h0Z"
      ]
    },
    "09": {
      viewBox: "0 0 50 50",
      paths: [
        "M32.15,0h17.85v17.35h-17.57c-8.32,0-15.08,6.77-15.08,15.08v17.57H0v-17.57C0,14.64,14.4.15,32.15,0h0Z",
        "M33.15,50h-9.09v-9.09h8.94c4.36,0,7.9-3.55,7.9-7.9v-9.09h9.09v9.09c0,9.32-7.54,16.91-16.85,16.99h0Z"
      ]
    },
    "10": {
      viewBox: "0 0 57.99 58.39",
      paths: [
        "M45.67,23.03h6.16s6.16,0,6.16,0v12.32h-12.12c-2.95,0-5.63,1.2-7.57,3.14s-3.14,4.62-3.14,7.57v12.32h-6.16s-6.16,0-6.16,0v-12.32c0-6.32,2.56-12.05,6.69-16.21,4.13-4.17,9.84-6.77,16.15-6.82h0Z",
        "M12.32,35.36H0s0-12.32,0-12.32h12.12c5.91,0,10.71-4.81,10.71-10.71V0s12.32,0,12.32,0v12.32c0,12.63-10.23,22.93-22.84,23.03h0Z"
      ],
      rects: [{ x: 0, y: 23.03, width: 57.99, height: 12.32 }]
    },
    "11": {
      viewBox: "0 0 50 50",
      paths: [
        "M25.95,50h-12.97v-12.92h12.76c6.22,0,11.28-5.04,11.28-11.23v-12.92h12.97v12.92c0,13.25-10.77,24.04-24.05,24.15h0Z",
        "M24.06,0h12.98v12.93h-12.77c-6.23,0-11.29,5.04-11.29,11.24v12.93H0v-12.93C0,10.91,10.78.11,24.06,0h0Z"
      ]
    },
    "12": {
      viewBox: "0 0 50 50",
      paths: [
        "M37,13l6.45-6.45L37,.1l-6.34,6.34c-3.09,3.09-8.12,3.09-11.21,0L13,0l-6.45,6.45,6.45,6.45c6.61,6.61,17.35,6.65,24,.1h0Z",
        "M13,37l-6.45,6.45,6.45,6.45,6.34-6.34c3.09-3.09,8.12-3.09,11.21,0l6.45,6.45,6.45-6.45-6.45-6.45c-6.61-6.61-17.35-6.65-24-.1h0Z",
        "M13,37l-6.45,6.45L.1,37l6.34-6.34c3.09-3.09,3.09-8.12,0-11.21L0,13l6.45-6.45,6.45,6.45c6.61,6.61,6.65,17.35.1,24h0Z",
        "M37,37l6.45,6.45,6.45-6.45-6.34-6.34c-3.09-3.09-3.09-8.12,0-11.21l6.45-6.45-6.45-6.45-6.45,6.45c-6.61,6.61-6.65,17.35-.1,24h0Z"
      ]
    }
  };
  function BrandMark({ mark = "07", size = 28, color = "var(--primary-container)", title, style, ...rest }) {
    const m = MARKS[mark];
    if (!m) {
      console.warn('[SuDu AI] BrandMark: unknown mark "' + mark + '". Expected one of ' + Object.keys(MARKS).join(", ") + ".");
      return null;
    }
    return /* @__PURE__ */ import_react2.default.createElement(
      "svg",
      {
        viewBox: m.viewBox,
        role: "img",
        "aria-label": title || "SuDu AI",
        style: { width: size, height: size, display: "block", color, flexShrink: 0, ...style },
        fill: "currentColor",
        ...rest
      },
      m.paths.map((d, i) => /* @__PURE__ */ import_react2.default.createElement("path", { key: i, d })),
      (m.rects || []).map((r, i) => /* @__PURE__ */ import_react2.default.createElement("rect", { key: "r" + i, ...r }))
    );
  }

  // ../ds/components/core/Icon.jsx
  var import_react3 = __toESM(require_react_shim());
  function Icon({ name, size = 20, fill = 0, weight = 400, color = "currentColor", style, ...rest }) {
    return /* @__PURE__ */ import_react3.default.createElement(
      "span",
      {
        className: "material-symbols-outlined",
        "aria-hidden": "true",
        style: {
          fontFamily: "Material Symbols Outlined",
          fontSize: size + "px",
          lineHeight: 1,
          color,
          fontVariationSettings: '"FILL" ' + fill + ', "wght" ' + weight + ', "GRAD" 0, "opsz" ' + size,
          userSelect: "none",
          ...style
        },
        ...rest
      },
      name
    );
  }

  // ../ds/components/core/Button.jsx
  var import_react4 = __toESM(require_react_shim());
  var SIZES = {
    sm: { padding: "0.25rem 0.5rem", font: "var(--label-sm-size)", line: "var(--label-sm-line)", tracking: "var(--label-sm-tracking)", weight: 600, icon: 15 },
    md: { padding: "0.5rem 1rem", font: "var(--label-lg-size)", line: "var(--label-lg-line)", tracking: "var(--label-lg-tracking)", weight: 600, icon: 18 },
    lg: { padding: "0.75rem 1.5rem", font: "var(--label-lg-size)", line: "var(--label-lg-line)", tracking: "var(--label-lg-tracking)", weight: 700, icon: 20 }
  };
  var VARIANTS = {
    primary: {
      base: { background: "var(--primary-container)", color: "var(--on-primary-container)", border: "1px solid transparent", boxShadow: "var(--glow-sm)" },
      hover: { filter: "brightness(1.05)", boxShadow: "var(--glow-md)" }
    },
    secondary: {
      base: { background: "var(--layer-1-bg)", color: "var(--on-surface)", border: "1px solid var(--edge-hairline-strong)", boxShadow: "none" },
      hover: { background: "rgba(95,255,213,.1)", borderColor: "var(--brand-teal)" }
    },
    ghost: {
      base: { background: "transparent", color: "var(--text-accent)", border: "1px solid transparent", boxShadow: "none" },
      hover: { background: "rgba(95,255,213,.08)" }
    },
    danger: {
      base: { background: "var(--error-container)", color: "var(--on-error-container)", border: "1px solid transparent", boxShadow: "none" },
      hover: { filter: "brightness(1.08)" }
    }
  };
  function Button({
    children,
    variant = "primary",
    size = "md",
    icon,
    trailingIcon,
    fullWidth = false,
    disabled = false,
    onClick,
    style,
    type = "button",
    ...rest
  }) {
    const [hover, setHover] = import_react4.default.useState(false);
    const [press, setPress] = import_react4.default.useState(false);
    const s = SIZES[size] || SIZES.md;
    const v = VARIANTS[variant] || VARIANTS.primary;
    return /* @__PURE__ */ import_react4.default.createElement(
      "button",
      {
        type,
        disabled,
        onClick,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => {
          setHover(false);
          setPress(false);
        },
        onMouseDown: () => setPress(true),
        onMouseUp: () => setPress(false),
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: trailingIcon ? "space-between" : "center",
          gap: "var(--space-xs)",
          width: fullWidth ? "100%" : "auto",
          padding: s.padding,
          borderRadius: "var(--radius-control)",
          fontFamily: "var(--font-core)",
          fontSize: s.font,
          lineHeight: s.line,
          letterSpacing: s.tracking,
          fontWeight: s.weight,
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.38 : 1,
          transition: "all var(--dur-base) var(--ease-standard)",
          transform: press && !disabled ? "scale(var(--press-scale))" : "none",
          ...v.base,
          ...hover && !disabled ? v.hover : null,
          ...style
        },
        ...rest
      },
      icon ? /* @__PURE__ */ import_react4.default.createElement(Icon, { name: icon, size: s.icon }) : null,
      /* @__PURE__ */ import_react4.default.createElement("span", null, children),
      trailingIcon ? /* @__PURE__ */ import_react4.default.createElement(Icon, { name: trailingIcon, size: s.icon }) : null
    );
  }

  // ../ds/components/core/IconButton.jsx
  var import_react5 = __toESM(require_react_shim());
  function IconButton({ icon, size = 18, variant = "surface", active = false, title, onClick, disabled = false, style, ...rest }) {
    const [hover, setHover] = import_react5.default.useState(false);
    const bg = variant === "bare" ? "transparent" : "var(--surface-container)";
    const hoverBg = variant === "bare" ? "rgba(95,255,213,.08)" : "var(--surface-container-high)";
    return /* @__PURE__ */ import_react5.default.createElement(
      "button",
      {
        type: "button",
        title,
        "aria-label": title || icon,
        disabled,
        onClick,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 8,
          border: "none",
          borderRadius: "var(--radius-control)",
          background: active ? "var(--surface-container-high)" : hover && !disabled ? hoverBg : bg,
          color: active ? "var(--text-accent)" : hover && !disabled ? "var(--on-surface)" : "var(--on-surface-variant)",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.38 : 1,
          transition: "all var(--dur-fast) var(--ease-standard)",
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ import_react5.default.createElement(Icon, { name: icon, size })
    );
  }

  // ../ds/components/status/Chip.jsx
  var import_react6 = __toESM(require_react_shim());
  function Chip({ children, icon, selected = false, onClick, style, ...rest }) {
    const [hover, setHover] = import_react6.default.useState(false);
    const interactive = typeof onClick === "function";
    return /* @__PURE__ */ import_react6.default.createElement(
      "button",
      {
        type: "button",
        onClick,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "0.25rem 0.5rem",
          borderRadius: "var(--radius-pill)",
          background: selected ? "var(--accent-wash)" : "var(--surface-container-high)",
          color: selected ? "var(--text-accent)" : hover ? "var(--on-surface)" : "var(--on-surface-variant)",
          border: selected ? "1px solid var(--edge-hairline-strong)" : "1px solid transparent",
          fontFamily: "var(--font-core)",
          fontSize: "var(--label-sm-size)",
          lineHeight: "var(--label-sm-line)",
          letterSpacing: "var(--label-sm-tracking)",
          fontWeight: selected ? 600 : 500,
          cursor: interactive ? "pointer" : "default",
          transition: "all var(--dur-fast) var(--ease-standard)",
          ...style
        },
        ...rest
      },
      icon ? /* @__PURE__ */ import_react6.default.createElement(Icon, { name: icon, size: 15 }) : null,
      /* @__PURE__ */ import_react6.default.createElement("span", null, children)
    );
  }

  // ../ds/components/status/Badge.jsx
  var import_react7 = __toESM(require_react_shim());
  var TONES = {
    neutral: { background: "var(--surface-variant)", color: "var(--secondary)" },
    accent: { background: "var(--accent-wash)", color: "var(--text-accent)" },
    tertiary: { background: "var(--surface-container-highest)", color: "var(--badge-tertiary-ink)" },
    error: { background: "var(--surface-container-highest)", color: "var(--error)" }
  };
  function Badge({ children, tone = "neutral", shape = "pill", style, ...rest }) {
    const t = TONES[tone] || TONES.neutral;
    return /* @__PURE__ */ import_react7.default.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          padding: shape === "pill" ? "0.125rem 0.5rem" : "0.125rem 0.375rem",
          borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-sm)",
          fontFamily: "var(--font-core)",
          fontSize: "var(--label-sm-size)",
          lineHeight: "var(--label-sm-line)",
          letterSpacing: "var(--label-sm-tracking)",
          fontWeight: 600,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          ...t,
          ...style
        },
        ...rest
      },
      children
    );
  }

  // ../ds/components/status/StatusPill.jsx
  var import_react8 = __toESM(require_react_shim());
  var DOT = {
    ok: "var(--primary-container)",
    warn: "var(--tertiary-fixed-dim)",
    error: "var(--error)",
    idle: "var(--outline)"
  };
  function StatusPill({ children, status = "ok", pulse = false, style, ...rest }) {
    const dot = DOT[status] || DOT.ok;
    return /* @__PURE__ */ import_react8.default.createElement(
      "span",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "0.125rem 0.5rem",
          borderRadius: "var(--radius-pill)",
          background: "var(--surface-container-high)",
          color: status === "error" ? "var(--error)" : "var(--text-accent)",
          fontFamily: "var(--font-core)",
          fontSize: "var(--label-sm-size)",
          lineHeight: "var(--label-sm-line)",
          letterSpacing: "var(--label-sm-tracking)",
          fontWeight: 500,
          whiteSpace: "nowrap",
          ...style
        },
        ...rest
      },
      /* @__PURE__ */ import_react8.default.createElement("span", { style: { position: "relative", display: "inline-flex", width: 6, height: 6 } }, pulse ? /* @__PURE__ */ import_react8.default.createElement("span", { style: { position: "absolute", inset: 0, borderRadius: "50%", background: dot, opacity: 0.75, animation: "sudu-ping 1.6s cubic-bezier(0,0,.2,1) infinite" } }) : null, /* @__PURE__ */ import_react8.default.createElement("span", { style: { position: "relative", width: 6, height: 6, borderRadius: "50%", background: dot, boxShadow: "0 0 6px " + dot } })),
      /* @__PURE__ */ import_react8.default.createElement("span", null, children),
      /* @__PURE__ */ import_react8.default.createElement("style", null, "@keyframes sudu-ping{75%,100%{transform:scale(2.2);opacity:0}}")
    );
  }

  // ../ds/components/forms/Input.jsx
  var import_react9 = __toESM(require_react_shim());
  function Input({
    value,
    onChange,
    placeholder,
    icon,
    type = "text",
    disabled = false,
    invalid = false,
    fullWidth = true,
    style,
    ...rest
  }) {
    const [focus, setFocus] = import_react9.default.useState(false);
    const borderColor = invalid ? "var(--error)" : focus ? "var(--edge-focus)" : "var(--edge-hairline)";
    return /* @__PURE__ */ import_react9.default.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      width: fullWidth ? "100%" : "auto",
      padding: "0.5rem 0.75rem",
      borderRadius: "var(--radius-control)",
      background: "var(--field-fill)",
      border: "1px solid " + borderColor,
      boxShadow: focus && !invalid ? "var(--focus-ring)" : "none",
      opacity: disabled ? 0.38 : 1,
      transition: "border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard)",
      ...style
    } }, icon ? /* @__PURE__ */ import_react9.default.createElement(Icon, { name: icon, size: 18, color: "var(--on-surface-variant)" }) : null, /* @__PURE__ */ import_react9.default.createElement(
      "input",
      {
        type,
        value,
        onChange,
        placeholder,
        disabled,
        onFocus: () => setFocus(true),
        onBlur: () => setFocus(false),
        style: {
          flex: 1,
          minWidth: 0,
          background: "transparent",
          border: "none",
          outline: "none",
          color: "var(--field-ink)",
          fontFamily: "var(--font-core)",
          fontSize: "var(--body-md-size)",
          lineHeight: "var(--body-md-line)"
        },
        ...rest
      }
    ));
  }

  // ../ds/components/forms/Checkbox.jsx
  var import_react10 = __toESM(require_react_shim());
  function Checkbox({ checked = false, onChange, label, disabled = false, style, ...rest }) {
    return /* @__PURE__ */ import_react10.default.createElement("label", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      fontFamily: "var(--font-core)",
      fontSize: "var(--body-md-size)",
      lineHeight: "var(--body-md-line)",
      color: "var(--on-surface)",
      ...style
    }, ...rest }, /* @__PURE__ */ import_react10.default.createElement(
      "input",
      {
        type: "checkbox",
        checked,
        disabled,
        onChange: (e) => onChange && onChange(e.target.checked, e),
        style: { position: "absolute", opacity: 0, width: 0, height: 0 }
      }
    ), /* @__PURE__ */ import_react10.default.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      borderRadius: 4,
      flexShrink: 0,
      background: checked ? "var(--brand-neon)" : "transparent",
      border: checked ? "1.5px solid var(--brand-neon)" : "1.5px solid rgba(95,255,213,.3)",
      transition: "all var(--dur-fast) var(--ease-standard)"
    } }, checked ? /* @__PURE__ */ import_react10.default.createElement(Icon, { name: "check", size: 14, weight: 700, color: "var(--brand-obsidian)" }) : null), label ? /* @__PURE__ */ import_react10.default.createElement("span", null, label) : null);
  }

  // ../ds/components/forms/Radio.jsx
  var import_react11 = __toESM(require_react_shim());
  function Radio({ checked = false, onChange, label, name, value, disabled = false, style, ...rest }) {
    return /* @__PURE__ */ import_react11.default.createElement("label", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.38 : 1,
      fontFamily: "var(--font-core)",
      fontSize: "var(--body-md-size)",
      lineHeight: "var(--body-md-line)",
      color: "var(--on-surface)",
      ...style
    }, ...rest }, /* @__PURE__ */ import_react11.default.createElement(
      "input",
      {
        type: "radio",
        name,
        value,
        checked,
        disabled,
        onChange: (e) => onChange && onChange(value, e),
        style: { position: "absolute", opacity: 0, width: 0, height: 0 }
      }
    ), /* @__PURE__ */ import_react11.default.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 18,
      height: 18,
      borderRadius: "50%",
      flexShrink: 0,
      border: checked ? "1.5px solid var(--brand-neon)" : "1.5px solid rgba(95,255,213,.3)",
      transition: "all var(--dur-fast) var(--ease-standard)"
    } }, checked ? /* @__PURE__ */ import_react11.default.createElement("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "var(--brand-neon)" } }) : null), label ? /* @__PURE__ */ import_react11.default.createElement("span", null, label) : null);
  }

  // ../ds/components/forms/PromptConsole.jsx
  var import_react12 = __toESM(require_react_shim());
  function PromptConsole({
    value,
    onChange,
    onSubmit,
    placeholder = "Ask SuDu to query data, execute scripts, or orchestrate agents...",
    capabilities = [],
    onToggleCapability,
    guardrail = "SuDu Safety Mesh: Enterprise Sandbox Active",
    hint = "Press Shift + Enter for newline",
    style
  }) {
    const [hover, setHover] = import_react12.default.useState(false);
    return /* @__PURE__ */ import_react12.default.createElement("div", { style: {
      maxWidth: "var(--container-dashboard)",
      width: "100%",
      margin: "0 auto",
      borderRadius: "var(--radius-panel)",
      background: "var(--layer-2-bg)",
      backdropFilter: "blur(var(--blur-layer-2))",
      WebkitBackdropFilter: "blur(var(--blur-layer-2))",
      boxShadow: "0 12px 40px rgba(0,0,0,.6)",
      padding: "var(--space-md)",
      ...style
    } }, capabilities.length ? /* @__PURE__ */ import_react12.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-xs)", paddingBottom: "var(--space-sm)", overflowX: "auto" } }, capabilities.map((c) => /* @__PURE__ */ import_react12.default.createElement(Chip, { key: c.id, icon: c.icon, selected: c.active, onClick: () => onToggleCapability && onToggleCapability(c.id) }, c.label))) : null, /* @__PURE__ */ import_react12.default.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: "var(--space-sm)" } }, /* @__PURE__ */ import_react12.default.createElement(
      "textarea",
      {
        rows: 2,
        value,
        onChange,
        placeholder,
        onKeyDown: (e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            onSubmit && onSubmit();
          }
        },
        style: {
          width: "100%",
          background: "transparent",
          resize: "none",
          outline: "none",
          border: "none",
          fontFamily: "var(--font-core)",
          fontSize: "var(--body-md-size)",
          lineHeight: 1.625,
          color: "var(--on-surface)"
        }
      }
    ), /* @__PURE__ */ import_react12.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-xs)", paddingBottom: 4 } }, /* @__PURE__ */ import_react12.default.createElement(IconButton, { icon: "attach_file", size: 20, title: "Attach telemetry logs or files" }), /* @__PURE__ */ import_react12.default.createElement(IconButton, { icon: "mic", size: 20, title: "Voice prompt mode" }), /* @__PURE__ */ import_react12.default.createElement(
      "button",
      {
        type: "button",
        onClick: onSubmit,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          border: "none",
          borderRadius: "var(--radius-control)",
          background: "var(--primary-container)",
          color: "var(--on-primary-container)",
          boxShadow: "0 0 16px rgba(0,245,169,.4)",
          cursor: "pointer",
          filter: hover ? "brightness(1.1)" : "none",
          transition: "all var(--dur-base) var(--ease-standard)"
        }
      },
      /* @__PURE__ */ import_react12.default.createElement(Icon, { name: "arrow_upward", size: 20, weight: 700 })
    ))), /* @__PURE__ */ import_react12.default.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: "var(--space-xs)",
      marginTop: 4,
      color: "var(--on-surface-variant)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--label-sm-size)",
      lineHeight: "var(--label-sm-line)",
      letterSpacing: "var(--label-sm-tracking)"
    } }, /* @__PURE__ */ import_react12.default.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 } }, /* @__PURE__ */ import_react12.default.createElement("span", { style: { width: 6, height: 6, borderRadius: "50%", background: "var(--primary-container)" } }), guardrail), /* @__PURE__ */ import_react12.default.createElement("span", { style: { fontFamily: "var(--font-mono)" } }, hint)));
  }

  // ../ds/components/surfaces/Card.jsx
  var import_react13 = __toESM(require_react_shim());
  function Card({
    children,
    title,
    subtitle,
    icon,
    actions,
    level = 1,
    interactive = false,
    padding = "var(--space-lg)",
    style,
    ...rest
  }) {
    const [hover, setHover] = import_react13.default.useState(false);
    const levels = {
      1: { background: "var(--surface-container)", border: "var(--layer-1-border)", boxShadow: "var(--layer-1-shadow)" },
      2: { background: "var(--layer-2-bg)", border: "var(--layer-2-border)", boxShadow: "var(--layer-2-shadow)", backdropFilter: "blur(var(--blur-layer-2))" },
      3: { background: "var(--surface-container-high)", border: "var(--layer-3-border)", boxShadow: "var(--layer-3-shadow)" }
    };
    return /* @__PURE__ */ import_react13.default.createElement(
      "section",
      {
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          borderRadius: "var(--radius-card)",
          padding,
          position: "relative",
          overflow: "hidden",
          transition: "transform var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)",
          ...levels[level],
          ...interactive && hover ? { borderColor: "rgba(0,245,169,.4)", transform: "var(--lift-hover)" } : null,
          ...style
        },
        ...rest
      },
      title || actions ? /* @__PURE__ */ import_react13.default.createElement("header", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-md)", paddingBottom: "var(--space-sm)" } }, /* @__PURE__ */ import_react13.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-sm)", minWidth: 0 } }, icon ? /* @__PURE__ */ import_react13.default.createElement("div", { style: { padding: 8, borderRadius: "var(--radius-default)", background: "var(--surface-container-high)", display: "flex" } }, /* @__PURE__ */ import_react13.default.createElement(Icon, { name: icon, size: 20, color: "var(--text-accent)" })) : null, /* @__PURE__ */ import_react13.default.createElement("div", { style: { minWidth: 0 } }, title ? /* @__PURE__ */ import_react13.default.createElement("div", { style: {
        fontFamily: "var(--font-core)",
        fontSize: "var(--label-lg-size)",
        lineHeight: "var(--label-lg-line)",
        letterSpacing: "var(--label-lg-tracking)",
        fontWeight: 700,
        color: "var(--on-surface)"
      } }, title) : null, subtitle ? /* @__PURE__ */ import_react13.default.createElement("div", { style: {
        fontFamily: "var(--font-core)",
        fontSize: "var(--body-sm-size)",
        lineHeight: "var(--body-sm-line)",
        color: "var(--on-surface-variant)",
        marginTop: 2
      } }, subtitle) : null)), actions ? /* @__PURE__ */ import_react13.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-sm)", flexShrink: 0 } }, actions) : null) : null,
      children
    );
  }

  // ../ds/components/surfaces/Disclosure.jsx
  var import_react14 = __toESM(require_react_shim());
  function Disclosure({ title, meta, icon = "psychology_alt", children, defaultOpen = true, style }) {
    const [open, setOpen] = import_react14.default.useState(defaultOpen);
    const [hover, setHover] = import_react14.default.useState(false);
    return /* @__PURE__ */ import_react14.default.createElement("div", { style: {
      width: "100%",
      borderRadius: "var(--radius-control)",
      overflow: "hidden",
      background: "color-mix(in srgb,var(--surface-container-low) 70%,transparent)",
      ...style
    } }, /* @__PURE__ */ import_react14.default.createElement(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-md)",
          padding: "var(--space-sm) var(--space-md)",
          border: "none",
          background: hover ? "var(--surface-container)" : "var(--surface-container-low)",
          textAlign: "left",
          cursor: "pointer",
          transition: "background var(--dur-fast) var(--ease-standard)"
        }
      },
      /* @__PURE__ */ import_react14.default.createElement("span", { style: { display: "inline-flex", alignItems: "center", gap: "var(--space-sm)", minWidth: 0 } }, /* @__PURE__ */ import_react14.default.createElement(Icon, { name: icon, size: 18, color: "var(--text-accent)" }), /* @__PURE__ */ import_react14.default.createElement("span", { style: {
        fontFamily: "var(--font-core)",
        fontSize: "var(--label-md-size)",
        lineHeight: "var(--label-md-line)",
        letterSpacing: "var(--label-md-tracking)",
        fontWeight: 600,
        color: "var(--on-surface)"
      } }, title), meta ? /* @__PURE__ */ import_react14.default.createElement("span", { style: {
        fontFamily: "var(--font-core)",
        fontSize: "var(--label-sm-size)",
        lineHeight: "var(--label-sm-line)",
        letterSpacing: "var(--label-sm-tracking)",
        color: "var(--on-surface-variant)"
      } }, meta) : null),
      /* @__PURE__ */ import_react14.default.createElement(
        Icon,
        {
          name: "expand_more",
          size: 18,
          color: "var(--on-surface-variant)",
          style: { transform: open ? "rotate(180deg)" : "none", transition: "transform var(--dur-base) var(--ease-standard)" }
        }
      )
    ), open ? /* @__PURE__ */ import_react14.default.createElement("div", { style: {
      padding: "var(--space-md)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--body-sm-size)",
      lineHeight: "var(--body-sm-line)",
      color: "var(--on-surface-variant)"
    } }, children) : null);
  }

  // ../ds/components/surfaces/CodeBlock.jsx
  var import_react15 = __toESM(require_react_shim());
  function CodeBlock({ filename, code = "", onCopy, style }) {
    const [hover, setHover] = import_react15.default.useState(false);
    return /* @__PURE__ */ import_react15.default.createElement("div", { style: {
      width: "100%",
      borderRadius: "var(--radius-control)",
      overflow: "hidden",
      background: "var(--surface-container-lowest)",
      boxShadow: "var(--layer-1-shadow)",
      ...style
    } }, /* @__PURE__ */ import_react15.default.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "var(--space-xs) var(--space-md)",
      background: "color-mix(in srgb,var(--surface-container-high) 80%,transparent)",
      color: "var(--on-surface-variant)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--label-sm-size)",
      lineHeight: "var(--label-sm-line)",
      letterSpacing: "var(--label-sm-tracking)"
    } }, /* @__PURE__ */ import_react15.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ import_react15.default.createElement("span", { style: { width: 10, height: 10, borderRadius: "50%", background: "var(--error)" } }), /* @__PURE__ */ import_react15.default.createElement("span", { style: { width: 10, height: 10, borderRadius: "50%", background: "var(--primary-container)" } }), /* @__PURE__ */ import_react15.default.createElement("span", { style: { width: 10, height: 10, borderRadius: "50%", background: "var(--secondary)" } }), /* @__PURE__ */ import_react15.default.createElement("span", { style: { fontFamily: "var(--font-mono)", color: "var(--on-surface)", fontWeight: 500, marginLeft: 8 } }, filename)), /* @__PURE__ */ import_react15.default.createElement(
      "button",
      {
        type: "button",
        onClick: onCopy,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 4,
          border: "none",
          background: "transparent",
          color: hover ? "var(--text-accent)" : "inherit",
          cursor: "pointer",
          font: "inherit",
          letterSpacing: "inherit",
          transition: "color var(--dur-fast) var(--ease-standard)"
        }
      },
      /* @__PURE__ */ import_react15.default.createElement(Icon, { name: "content_copy", size: 15 }),
      /* @__PURE__ */ import_react15.default.createElement("span", null, "Copy Code")
    )), /* @__PURE__ */ import_react15.default.createElement("pre", { style: {
      margin: 0,
      padding: "var(--space-md)",
      overflowX: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--mono-size)",
      lineHeight: 1.625,
      color: "var(--text-code)"
    } }, code));
  }

  // ../ds/components/navigation/NavItem.jsx
  var import_react16 = __toESM(require_react_shim());
  function NavItem({ icon, label, active = false, onClick, href = "#", trailing, style }) {
    const [hover, setHover] = import_react16.default.useState(false);
    return /* @__PURE__ */ import_react16.default.createElement(
      "a",
      {
        href,
        onClick,
        "aria-current": active ? "page" : void 0,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          display: "flex",
          alignItems: "center",
          gap: "var(--space-sm)",
          padding: "var(--space-sm) var(--space-md)",
          borderRadius: "var(--radius-control)",
          textDecoration: "none",
          background: active ? "var(--surface-container)" : hover ? "var(--surface-container-high)" : "transparent",
          color: active ? "var(--text-accent)" : hover ? "var(--on-surface)" : "var(--on-surface-variant)",
          fontFamily: "var(--font-core)",
          fontSize: "var(--label-lg-size)",
          lineHeight: "var(--label-lg-line)",
          letterSpacing: "var(--label-lg-tracking)",
          fontWeight: 600,
          transition: "all var(--dur-base) var(--ease-standard)",
          ...style
        }
      },
      /* @__PURE__ */ import_react16.default.createElement(Icon, { name: icon, size: 20 }),
      /* @__PURE__ */ import_react16.default.createElement("span", { style: { flex: 1 } }, label),
      trailing
    );
  }

  // ../ds/components/navigation/Breadcrumb.jsx
  var import_react17 = __toESM(require_react_shim());
  function Breadcrumb({ items = [], style }) {
    return /* @__PURE__ */ import_react17.default.createElement("nav", { style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-xs)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--label-md-size)",
      lineHeight: "var(--label-md-line)",
      letterSpacing: "var(--label-md-tracking)",
      color: "var(--on-surface-variant)",
      ...style
    } }, items.map((it, i) => {
      const last = i === items.length - 1;
      return /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, { key: i }, /* @__PURE__ */ import_react17.default.createElement("span", { style: {
        color: last ? "var(--text-accent)" : "inherit",
        fontWeight: last ? 500 : "inherit",
        cursor: last ? "default" : "pointer"
      } }, typeof it === "string" ? it : it.label), last ? null : /* @__PURE__ */ import_react17.default.createElement(Icon, { name: "chevron_right", size: 14 }));
    }));
  }

  // ../ds/components/navigation/TabBar.jsx
  var import_react18 = __toESM(require_react_shim());
  function TabBar({ tabs = [], value, onChange, style }) {
    return /* @__PURE__ */ import_react18.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-xs)", ...style } }, tabs.map((t) => {
      const id = typeof t === "string" ? t : t.id;
      const label = typeof t === "string" ? t : t.label;
      const active = id === value;
      return /* @__PURE__ */ import_react18.default.createElement(
        "button",
        {
          key: id,
          type: "button",
          onClick: () => onChange && onChange(id),
          style: {
            flex: 1,
            padding: "8px 0",
            border: "none",
            borderRadius: "var(--radius-default)",
            background: active ? "var(--surface-container)" : "transparent",
            color: active ? "var(--text-accent)" : "var(--on-surface-variant)",
            fontFamily: "var(--font-core)",
            fontSize: "var(--label-md-size)",
            lineHeight: "var(--label-md-line)",
            letterSpacing: "var(--label-md-tracking)",
            fontWeight: active ? 600 : 400,
            textAlign: "center",
            cursor: "pointer",
            boxShadow: active ? "var(--shadow-hairline)" : "none",
            transition: "all var(--dur-fast) var(--ease-standard)"
          }
        },
        label
      );
    }));
  }

  // ../ds/components/data/MetricCapsule.jsx
  var import_react19 = __toESM(require_react_shim());
  function MetricCapsule({ icon, label, value, iconColor = "var(--tertiary-fixed-dim)", style, ...rest }) {
    return /* @__PURE__ */ import_react19.default.createElement("div", { style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-xs)",
      padding: "0.375rem 0.5rem",
      borderRadius: "var(--radius-control)",
      background: "var(--surface-container)",
      color: "var(--on-surface-variant)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--label-md-size)",
      lineHeight: "var(--label-md-line)",
      letterSpacing: "var(--label-md-tracking)",
      whiteSpace: "nowrap",
      ...style
    }, ...rest }, icon ? /* @__PURE__ */ import_react19.default.createElement(Icon, { name: icon, size: 16, color: iconColor }) : null, label ? /* @__PURE__ */ import_react19.default.createElement("span", null, label) : null, value != null ? /* @__PURE__ */ import_react19.default.createElement("span", { style: { color: "var(--on-surface)", fontWeight: 500 } }, value) : null);
  }

  // ../ds/components/data/ProgressRing.jsx
  var import_react20 = __toESM(require_react_shim());
  function ProgressRing({ value = 0, size = 48, stroke = 3, color = "var(--brand-neon)", showLabel = true, style }) {
    const r = 15;
    const c = 2 * Math.PI * r;
    const pct = Math.max(0, Math.min(100, value));
    return /* @__PURE__ */ import_react20.default.createElement("div", { style: { position: "relative", width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center", ...style } }, /* @__PURE__ */ import_react20.default.createElement("svg", { viewBox: "0 0 36 36", style: { width: "100%", height: "100%", transform: "rotate(-90deg)" } }, /* @__PURE__ */ import_react20.default.createElement("circle", { cx: "18", cy: "18", r, fill: "none", stroke: "var(--surface-variant)", strokeWidth: stroke }), /* @__PURE__ */ import_react20.default.createElement(
      "circle",
      {
        cx: "18",
        cy: "18",
        r,
        fill: "none",
        stroke: color,
        strokeWidth: stroke,
        strokeDasharray: c.toFixed(1),
        strokeDashoffset: (c * (1 - pct / 100)).toFixed(1),
        strokeLinecap: "round"
      }
    )), showLabel ? /* @__PURE__ */ import_react20.default.createElement("span", { style: {
      position: "absolute",
      fontFamily: "var(--font-core)",
      fontSize: "var(--label-sm-size)",
      lineHeight: "var(--label-sm-line)",
      letterSpacing: "var(--label-sm-tracking)",
      fontWeight: 700,
      color: "var(--on-surface)"
    } }, Math.round(pct), "%") : null);
  }

  // ../ds/components/data/Sparkline.jsx
  var import_react21 = __toESM(require_react_shim());
  function Sparkline({
    points = [],
    threshold,
    height = 96,
    color = "var(--primary-container)",
    thresholdColor = "var(--error)",
    markPeak = true,
    style
  }) {
    const W = 700, H = 80;
    const vals = points.length ? points : [0];
    const max = Math.max(...vals), min = Math.min(...vals);
    const span = max - min || 1;
    const x = (i) => vals.length === 1 ? 0 : i / (vals.length - 1) * W;
    const y = (v) => H - 8 - (v - min) / span * (H - 20);
    const path = vals.map((v, i) => (i ? "L" : "M") + x(i).toFixed(1) + "," + y(v).toFixed(1)).join(" ");
    const peak = vals.indexOf(max);
    return /* @__PURE__ */ import_react21.default.createElement("div", { style: { width: "100%", height, position: "relative", ...style } }, /* @__PURE__ */ import_react21.default.createElement("svg", { viewBox: "0 0 " + W + " " + H, preserveAspectRatio: "none", fill: "none", style: { width: "100%", height: "100%", color } }, /* @__PURE__ */ import_react21.default.createElement("line", { x1: "0", x2: W, y1: "20", y2: "20", stroke: "currentColor", strokeDasharray: "4 4", strokeOpacity: ".08" }), /* @__PURE__ */ import_react21.default.createElement("line", { x1: "0", x2: W, y1: "50", y2: "50", stroke: "currentColor", strokeDasharray: "4 4", strokeOpacity: ".08" }), threshold != null ? /* @__PURE__ */ import_react21.default.createElement("line", { x1: "0", x2: W, y1: y(threshold), y2: y(threshold), stroke: thresholdColor, strokeDasharray: "2 2", strokeOpacity: ".4", strokeWidth: "1.5" }) : null, /* @__PURE__ */ import_react21.default.createElement("path", { d: path + " L" + W + "," + H + " L0," + H + " Z", fill: "currentColor", fillOpacity: ".08" }), /* @__PURE__ */ import_react21.default.createElement("path", { d: path, stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }), markPeak && vals.length > 1 ? /* @__PURE__ */ import_react21.default.createElement("circle", { cx: x(peak), cy: y(max), r: "4.5", fill: "var(--brand-neon)" }) : null));
  }

  // ../ds/components/ai/UserMessage.jsx
  var import_react22 = __toESM(require_react_shim());
  function UserMessage({ children, author, timestamp, style }) {
    return /* @__PURE__ */ import_react22.default.createElement("div", { style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-md)",
      maxWidth: 768,
      marginLeft: "auto",
      flexDirection: "row-reverse",
      ...style
    } }, /* @__PURE__ */ import_react22.default.createElement("div", { style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-control)",
      flexShrink: 0,
      background: "var(--surface-container-high)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--layer-1-shadow)"
    } }, /* @__PURE__ */ import_react22.default.createElement(Icon, { name: "person", size: 20, color: "var(--secondary)" })), /* @__PURE__ */ import_react22.default.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 } }, author || timestamp ? /* @__PURE__ */ import_react22.default.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--on-surface-variant)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--label-sm-size)",
      lineHeight: "var(--label-sm-line)",
      letterSpacing: "var(--label-sm-tracking)"
    } }, timestamp ? /* @__PURE__ */ import_react22.default.createElement("span", null, timestamp) : null, author ? /* @__PURE__ */ import_react22.default.createElement("span", { style: { fontWeight: 600, color: "var(--secondary)" } }, author) : null) : null, /* @__PURE__ */ import_react22.default.createElement("div", { style: {
      padding: "var(--space-sm) var(--space-md)",
      borderRadius: "var(--radius-lg)",
      borderTopRightRadius: 0,
      background: "var(--surface-container-high)",
      color: "var(--on-surface)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--body-md-size)",
      lineHeight: "var(--body-md-line)",
      boxShadow: "var(--layer-1-shadow)"
    } }, children)));
  }

  // ../ds/components/ai/AgentMessage.jsx
  var import_react23 = __toESM(require_react_shim());
  function AgentMessage({ children, name = "SuDu Autonomous Engine", mode, duration, actions = true, style }) {
    return /* @__PURE__ */ import_react23.default.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: "var(--space-md)", maxWidth: 1024, marginRight: "auto", ...style } }, /* @__PURE__ */ import_react23.default.createElement("div", { style: {
      width: 36,
      height: 36,
      borderRadius: "var(--radius-control)",
      flexShrink: 0,
      background: "var(--surface-container-lowest)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 12px rgba(0,245,169,.2)"
    } }, /* @__PURE__ */ import_react23.default.createElement(Icon, { name: "terminal", size: 20, color: "var(--primary-container)" })), /* @__PURE__ */ import_react23.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: "var(--space-md)", flex: 1, minWidth: 0 } }, /* @__PURE__ */ import_react23.default.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      color: "var(--on-surface-variant)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--label-sm-size)",
      lineHeight: "var(--label-sm-line)",
      letterSpacing: "var(--label-sm-tracking)"
    } }, /* @__PURE__ */ import_react23.default.createElement("span", { style: { fontWeight: 600, color: "var(--text-accent)" } }, name), mode ? /* @__PURE__ */ import_react23.default.createElement(Badge, { tone: "accent", shape: "square" }, mode) : null, duration ? /* @__PURE__ */ import_react23.default.createElement("span", null, "• ", duration) : null), children, actions ? /* @__PURE__ */ import_react23.default.createElement("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-xs)", paddingTop: 4 } }, /* @__PURE__ */ import_react23.default.createElement(IconButton, { icon: "content_copy", size: 16, title: "Copy" }), /* @__PURE__ */ import_react23.default.createElement(IconButton, { icon: "replay", size: 16, title: "Retry" }), /* @__PURE__ */ import_react23.default.createElement("span", { style: { width: 1, height: 16, background: "var(--surface-variant)", margin: "0 4px" } }), /* @__PURE__ */ import_react23.default.createElement(IconButton, { icon: "thumb_up", size: 16, title: "Helpful" }), /* @__PURE__ */ import_react23.default.createElement(IconButton, { icon: "thumb_down", size: 16, title: "Not helpful" }), /* @__PURE__ */ import_react23.default.createElement(IconButton, { icon: "alt_route", size: 16, title: "Branch Context", style: { marginLeft: "auto" } })) : null));
  }

  // ../ds/components/ai/ReasoningStep.jsx
  var import_react24 = __toESM(require_react_shim());
  function ReasoningStep({ label, children, icon = "check_circle", style }) {
    return /* @__PURE__ */ import_react24.default.createElement("div", { style: { display: "flex", alignItems: "flex-start", gap: 10, ...style } }, /* @__PURE__ */ import_react24.default.createElement(Icon, { name: icon, size: 16, color: "var(--text-accent)", style: { marginTop: 2, flexShrink: 0 } }), /* @__PURE__ */ import_react24.default.createElement("div", { style: {
      fontFamily: "var(--font-core)",
      fontSize: "var(--body-sm-size)",
      lineHeight: "var(--body-sm-line)",
      color: "var(--on-surface-variant)"
    } }, label ? /* @__PURE__ */ import_react24.default.createElement("span", { style: { color: "var(--on-surface)", fontWeight: 500 } }, label, " ") : null, children));
  }

  // ../ds/components/ai/ConnectorRow.jsx
  var import_react25 = __toESM(require_react_shim());
  function ConnectorRow({ icon, name, detail, meta = [], state, stateTone = "accent", iconColor = "var(--text-accent)", style }) {
    const [hover, setHover] = import_react25.default.useState(false);
    return /* @__PURE__ */ import_react25.default.createElement(
      "div",
      {
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: "var(--space-sm)",
          padding: "var(--space-sm)",
          borderRadius: "var(--radius-control)",
          background: hover ? "var(--surface-container-high)" : "var(--surface-container)",
          transition: "background var(--dur-fast) var(--ease-standard)",
          ...style
        }
      },
      /* @__PURE__ */ import_react25.default.createElement("div", { style: { padding: 8, borderRadius: "var(--radius-default)", background: "var(--surface-container-high)", display: "flex" } }, /* @__PURE__ */ import_react25.default.createElement(Icon, { name: icon, size: 18, color: iconColor })),
      /* @__PURE__ */ import_react25.default.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ import_react25.default.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 } }, /* @__PURE__ */ import_react25.default.createElement("span", { style: {
        fontFamily: "var(--font-core)",
        fontSize: "var(--label-md-size)",
        lineHeight: "var(--label-md-line)",
        letterSpacing: "var(--label-md-tracking)",
        fontWeight: 600,
        color: "var(--on-surface)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      } }, name), state ? /* @__PURE__ */ import_react25.default.createElement(Badge, { tone: stateTone, shape: "square" }, state) : null), detail ? /* @__PURE__ */ import_react25.default.createElement("p", { style: {
        margin: 0,
        fontFamily: "var(--font-core)",
        fontSize: "var(--body-sm-size)",
        lineHeight: "var(--body-sm-line)",
        color: "var(--on-surface-variant)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      } }, detail) : null, meta.length ? /* @__PURE__ */ import_react25.default.createElement("div", { style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginTop: 4,
        color: "var(--on-surface-variant)",
        fontFamily: "var(--font-core)",
        fontSize: "var(--label-sm-size)",
        lineHeight: "var(--label-sm-line)",
        letterSpacing: "var(--label-sm-tracking)"
      } }, meta.map((m, i) => /* @__PURE__ */ import_react25.default.createElement(import_react25.default.Fragment, { key: i }, i ? /* @__PURE__ */ import_react25.default.createElement("span", null, "•") : null, /* @__PURE__ */ import_react25.default.createElement("span", null, m)))) : null)
    );
  }
  return __toCommonJS(entry_exports);
})();
