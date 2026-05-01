var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop2 in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop2))
      __defNormalProp(a2, prop2, b2[prop2]);
  if (__getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop2))
        __defNormalProp(a2, prop2, b2[prop2]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop2 in source)
    if (__hasOwnProp.call(source, prop2) && exclude.indexOf(prop2) < 0)
      target[prop2] = source[prop2];
  if (source != null && __getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop2) < 0 && __propIsEnum.call(source, prop2))
        target[prop2] = source[prop2];
    }
  return target;
};
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
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/color-name/index.js
var require_color_name = __commonJS({
  "node_modules/color-name/index.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      "aliceblue": [240, 248, 255],
      "antiquewhite": [250, 235, 215],
      "aqua": [0, 255, 255],
      "aquamarine": [127, 255, 212],
      "azure": [240, 255, 255],
      "beige": [245, 245, 220],
      "bisque": [255, 228, 196],
      "black": [0, 0, 0],
      "blanchedalmond": [255, 235, 205],
      "blue": [0, 0, 255],
      "blueviolet": [138, 43, 226],
      "brown": [165, 42, 42],
      "burlywood": [222, 184, 135],
      "cadetblue": [95, 158, 160],
      "chartreuse": [127, 255, 0],
      "chocolate": [210, 105, 30],
      "coral": [255, 127, 80],
      "cornflowerblue": [100, 149, 237],
      "cornsilk": [255, 248, 220],
      "crimson": [220, 20, 60],
      "cyan": [0, 255, 255],
      "darkblue": [0, 0, 139],
      "darkcyan": [0, 139, 139],
      "darkgoldenrod": [184, 134, 11],
      "darkgray": [169, 169, 169],
      "darkgreen": [0, 100, 0],
      "darkgrey": [169, 169, 169],
      "darkkhaki": [189, 183, 107],
      "darkmagenta": [139, 0, 139],
      "darkolivegreen": [85, 107, 47],
      "darkorange": [255, 140, 0],
      "darkorchid": [153, 50, 204],
      "darkred": [139, 0, 0],
      "darksalmon": [233, 150, 122],
      "darkseagreen": [143, 188, 143],
      "darkslateblue": [72, 61, 139],
      "darkslategray": [47, 79, 79],
      "darkslategrey": [47, 79, 79],
      "darkturquoise": [0, 206, 209],
      "darkviolet": [148, 0, 211],
      "deeppink": [255, 20, 147],
      "deepskyblue": [0, 191, 255],
      "dimgray": [105, 105, 105],
      "dimgrey": [105, 105, 105],
      "dodgerblue": [30, 144, 255],
      "firebrick": [178, 34, 34],
      "floralwhite": [255, 250, 240],
      "forestgreen": [34, 139, 34],
      "fuchsia": [255, 0, 255],
      "gainsboro": [220, 220, 220],
      "ghostwhite": [248, 248, 255],
      "gold": [255, 215, 0],
      "goldenrod": [218, 165, 32],
      "gray": [128, 128, 128],
      "green": [0, 128, 0],
      "greenyellow": [173, 255, 47],
      "grey": [128, 128, 128],
      "honeydew": [240, 255, 240],
      "hotpink": [255, 105, 180],
      "indianred": [205, 92, 92],
      "indigo": [75, 0, 130],
      "ivory": [255, 255, 240],
      "khaki": [240, 230, 140],
      "lavender": [230, 230, 250],
      "lavenderblush": [255, 240, 245],
      "lawngreen": [124, 252, 0],
      "lemonchiffon": [255, 250, 205],
      "lightblue": [173, 216, 230],
      "lightcoral": [240, 128, 128],
      "lightcyan": [224, 255, 255],
      "lightgoldenrodyellow": [250, 250, 210],
      "lightgray": [211, 211, 211],
      "lightgreen": [144, 238, 144],
      "lightgrey": [211, 211, 211],
      "lightpink": [255, 182, 193],
      "lightsalmon": [255, 160, 122],
      "lightseagreen": [32, 178, 170],
      "lightskyblue": [135, 206, 250],
      "lightslategray": [119, 136, 153],
      "lightslategrey": [119, 136, 153],
      "lightsteelblue": [176, 196, 222],
      "lightyellow": [255, 255, 224],
      "lime": [0, 255, 0],
      "limegreen": [50, 205, 50],
      "linen": [250, 240, 230],
      "magenta": [255, 0, 255],
      "maroon": [128, 0, 0],
      "mediumaquamarine": [102, 205, 170],
      "mediumblue": [0, 0, 205],
      "mediumorchid": [186, 85, 211],
      "mediumpurple": [147, 112, 219],
      "mediumseagreen": [60, 179, 113],
      "mediumslateblue": [123, 104, 238],
      "mediumspringgreen": [0, 250, 154],
      "mediumturquoise": [72, 209, 204],
      "mediumvioletred": [199, 21, 133],
      "midnightblue": [25, 25, 112],
      "mintcream": [245, 255, 250],
      "mistyrose": [255, 228, 225],
      "moccasin": [255, 228, 181],
      "navajowhite": [255, 222, 173],
      "navy": [0, 0, 128],
      "oldlace": [253, 245, 230],
      "olive": [128, 128, 0],
      "olivedrab": [107, 142, 35],
      "orange": [255, 165, 0],
      "orangered": [255, 69, 0],
      "orchid": [218, 112, 214],
      "palegoldenrod": [238, 232, 170],
      "palegreen": [152, 251, 152],
      "paleturquoise": [175, 238, 238],
      "palevioletred": [219, 112, 147],
      "papayawhip": [255, 239, 213],
      "peachpuff": [255, 218, 185],
      "peru": [205, 133, 63],
      "pink": [255, 192, 203],
      "plum": [221, 160, 221],
      "powderblue": [176, 224, 230],
      "purple": [128, 0, 128],
      "rebeccapurple": [102, 51, 153],
      "red": [255, 0, 0],
      "rosybrown": [188, 143, 143],
      "royalblue": [65, 105, 225],
      "saddlebrown": [139, 69, 19],
      "salmon": [250, 128, 114],
      "sandybrown": [244, 164, 96],
      "seagreen": [46, 139, 87],
      "seashell": [255, 245, 238],
      "sienna": [160, 82, 45],
      "silver": [192, 192, 192],
      "skyblue": [135, 206, 235],
      "slateblue": [106, 90, 205],
      "slategray": [112, 128, 144],
      "slategrey": [112, 128, 144],
      "snow": [255, 250, 250],
      "springgreen": [0, 255, 127],
      "steelblue": [70, 130, 180],
      "tan": [210, 180, 140],
      "teal": [0, 128, 128],
      "thistle": [216, 191, 216],
      "tomato": [255, 99, 71],
      "turquoise": [64, 224, 208],
      "violet": [238, 130, 238],
      "wheat": [245, 222, 179],
      "white": [255, 255, 255],
      "whitesmoke": [245, 245, 245],
      "yellow": [255, 255, 0],
      "yellowgreen": [154, 205, 50]
    };
  }
});

// node_modules/simple-swizzle/node_modules/is-arrayish/index.js
var require_is_arrayish = __commonJS({
  "node_modules/simple-swizzle/node_modules/is-arrayish/index.js"(exports2, module2) {
    module2.exports = function isArrayish(obj) {
      if (!obj || typeof obj === "string") {
        return false;
      }
      return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
    };
  }
});

// node_modules/simple-swizzle/index.js
var require_simple_swizzle = __commonJS({
  "node_modules/simple-swizzle/index.js"(exports2, module2) {
    "use strict";
    var isArrayish = require_is_arrayish();
    var concat = Array.prototype.concat;
    var slice = Array.prototype.slice;
    var swizzle = module2.exports = function swizzle2(args) {
      var results = [];
      for (var i2 = 0, len = args.length; i2 < len; i2++) {
        var arg = args[i2];
        if (isArrayish(arg)) {
          results = concat.call(results, slice.call(arg));
        } else {
          results.push(arg);
        }
      }
      return results;
    };
    swizzle.wrap = function(fn) {
      return function() {
        return fn(swizzle(arguments));
      };
    };
  }
});

// node_modules/color-string/index.js
var require_color_string = __commonJS({
  "node_modules/color-string/index.js"(exports2, module2) {
    var colorNames = require_color_name();
    var swizzle = require_simple_swizzle();
    var hasOwnProperty = Object.hasOwnProperty;
    var reverseNames = /* @__PURE__ */ Object.create(null);
    for (name in colorNames) {
      if (hasOwnProperty.call(colorNames, name)) {
        reverseNames[colorNames[name]] = name;
      }
    }
    var name;
    var cs = module2.exports = {
      to: {},
      get: {}
    };
    cs.get = function(string) {
      var prefix = string.substring(0, 3).toLowerCase();
      var val;
      var model;
      switch (prefix) {
        case "hsl":
          val = cs.get.hsl(string);
          model = "hsl";
          break;
        case "hwb":
          val = cs.get.hwb(string);
          model = "hwb";
          break;
        default:
          val = cs.get.rgb(string);
          model = "rgb";
          break;
      }
      if (!val) {
        return null;
      }
      return { model, value: val };
    };
    cs.get.rgb = function(string) {
      if (!string) {
        return null;
      }
      var abbr = /^#([a-f0-9]{3,4})$/i;
      var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
      var rgba = /^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/;
      var keyword = /^(\w+)$/;
      var rgb = [0, 0, 0, 1];
      var match;
      var i2;
      var hexAlpha;
      if (match = string.match(hex)) {
        hexAlpha = match[2];
        match = match[1];
        for (i2 = 0; i2 < 3; i2++) {
          var i22 = i2 * 2;
          rgb[i2] = parseInt(match.slice(i22, i22 + 2), 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha, 16) / 255;
        }
      } else if (match = string.match(abbr)) {
        match = match[1];
        hexAlpha = match[3];
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = parseInt(match[i2] + match[i2], 16);
        }
        if (hexAlpha) {
          rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
        }
      } else if (match = string.match(rgba)) {
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = parseInt(match[i2 + 1], 0);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(per)) {
        for (i2 = 0; i2 < 3; i2++) {
          rgb[i2] = Math.round(parseFloat(match[i2 + 1]) * 2.55);
        }
        if (match[4]) {
          if (match[5]) {
            rgb[3] = parseFloat(match[4]) * 0.01;
          } else {
            rgb[3] = parseFloat(match[4]);
          }
        }
      } else if (match = string.match(keyword)) {
        if (match[1] === "transparent") {
          return [0, 0, 0, 0];
        }
        if (!hasOwnProperty.call(colorNames, match[1])) {
          return null;
        }
        rgb = colorNames[match[1]];
        rgb[3] = 1;
        return rgb;
      } else {
        return null;
      }
      for (i2 = 0; i2 < 3; i2++) {
        rgb[i2] = clamp(rgb[i2], 0, 255);
      }
      rgb[3] = clamp(rgb[3], 0, 1);
      return rgb;
    };
    cs.get.hsl = function(string) {
      if (!string) {
        return null;
      }
      var hsl = /^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hsl);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h2 = (parseFloat(match[1]) % 360 + 360) % 360;
        var s2 = clamp(parseFloat(match[2]), 0, 100);
        var l2 = clamp(parseFloat(match[3]), 0, 100);
        var a2 = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h2, s2, l2, a2];
      }
      return null;
    };
    cs.get.hwb = function(string) {
      if (!string) {
        return null;
      }
      var hwb = /^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/;
      var match = string.match(hwb);
      if (match) {
        var alpha = parseFloat(match[4]);
        var h2 = (parseFloat(match[1]) % 360 + 360) % 360;
        var w2 = clamp(parseFloat(match[2]), 0, 100);
        var b2 = clamp(parseFloat(match[3]), 0, 100);
        var a2 = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
        return [h2, w2, b2, a2];
      }
      return null;
    };
    cs.to.hex = function() {
      var rgba = swizzle(arguments);
      return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
    };
    cs.to.rgb = function() {
      var rgba = swizzle(arguments);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
    };
    cs.to.rgb.percent = function() {
      var rgba = swizzle(arguments);
      var r3 = Math.round(rgba[0] / 255 * 100);
      var g2 = Math.round(rgba[1] / 255 * 100);
      var b2 = Math.round(rgba[2] / 255 * 100);
      return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r3 + "%, " + g2 + "%, " + b2 + "%)" : "rgba(" + r3 + "%, " + g2 + "%, " + b2 + "%, " + rgba[3] + ")";
    };
    cs.to.hsl = function() {
      var hsla = swizzle(arguments);
      return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
    };
    cs.to.hwb = function() {
      var hwba = swizzle(arguments);
      var a2 = "";
      if (hwba.length >= 4 && hwba[3] !== 1) {
        a2 = ", " + hwba[3];
      }
      return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a2 + ")";
    };
    cs.to.keyword = function(rgb) {
      return reverseNames[rgb.slice(0, 3)];
    };
    function clamp(num, min, max) {
      return Math.min(Math.max(min, num), max);
    }
    function hexDouble(num) {
      var str = Math.round(num).toString(16).toUpperCase();
      return str.length < 2 ? "0" + str : str;
    }
  }
});

// node_modules/color-convert/conversions.js
var require_conversions = __commonJS({
  "node_modules/color-convert/conversions.js"(exports2, module2) {
    var cssKeywords = require_color_name();
    var reverseKeywords = {};
    for (const key of Object.keys(cssKeywords)) {
      reverseKeywords[cssKeywords[key]] = key;
    }
    var convert = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    module2.exports = convert;
    for (const model of Object.keys(convert)) {
      if (!("channels" in convert[model])) {
        throw new Error("missing channels property: " + model);
      }
      if (!("labels" in convert[model])) {
        throw new Error("missing channel labels property: " + model);
      }
      if (convert[model].labels.length !== convert[model].channels) {
        throw new Error("channel and label counts mismatch: " + model);
      }
      const { channels, labels } = convert[model];
      delete convert[model].channels;
      delete convert[model].labels;
      Object.defineProperty(convert[model], "channels", { value: channels });
      Object.defineProperty(convert[model], "labels", { value: labels });
    }
    convert.rgb.hsl = function(rgb) {
      const r3 = rgb[0] / 255;
      const g2 = rgb[1] / 255;
      const b2 = rgb[2] / 255;
      const min = Math.min(r3, g2, b2);
      const max = Math.max(r3, g2, b2);
      const delta = max - min;
      let h2;
      let s2;
      if (max === min) {
        h2 = 0;
      } else if (r3 === max) {
        h2 = (g2 - b2) / delta;
      } else if (g2 === max) {
        h2 = 2 + (b2 - r3) / delta;
      } else if (b2 === max) {
        h2 = 4 + (r3 - g2) / delta;
      }
      h2 = Math.min(h2 * 60, 360);
      if (h2 < 0) {
        h2 += 360;
      }
      const l2 = (min + max) / 2;
      if (max === min) {
        s2 = 0;
      } else if (l2 <= 0.5) {
        s2 = delta / (max + min);
      } else {
        s2 = delta / (2 - max - min);
      }
      return [h2, s2 * 100, l2 * 100];
    };
    convert.rgb.hsv = function(rgb) {
      let rdif;
      let gdif;
      let bdif;
      let h2;
      let s2;
      const r3 = rgb[0] / 255;
      const g2 = rgb[1] / 255;
      const b2 = rgb[2] / 255;
      const v2 = Math.max(r3, g2, b2);
      const diff = v2 - Math.min(r3, g2, b2);
      const diffc = function(c) {
        return (v2 - c) / 6 / diff + 1 / 2;
      };
      if (diff === 0) {
        h2 = 0;
        s2 = 0;
      } else {
        s2 = diff / v2;
        rdif = diffc(r3);
        gdif = diffc(g2);
        bdif = diffc(b2);
        if (r3 === v2) {
          h2 = bdif - gdif;
        } else if (g2 === v2) {
          h2 = 1 / 3 + rdif - bdif;
        } else if (b2 === v2) {
          h2 = 2 / 3 + gdif - rdif;
        }
        if (h2 < 0) {
          h2 += 1;
        } else if (h2 > 1) {
          h2 -= 1;
        }
      }
      return [
        h2 * 360,
        s2 * 100,
        v2 * 100
      ];
    };
    convert.rgb.hwb = function(rgb) {
      const r3 = rgb[0];
      const g2 = rgb[1];
      let b2 = rgb[2];
      const h2 = convert.rgb.hsl(rgb)[0];
      const w2 = 1 / 255 * Math.min(r3, Math.min(g2, b2));
      b2 = 1 - 1 / 255 * Math.max(r3, Math.max(g2, b2));
      return [h2, w2 * 100, b2 * 100];
    };
    convert.rgb.cmyk = function(rgb) {
      const r3 = rgb[0] / 255;
      const g2 = rgb[1] / 255;
      const b2 = rgb[2] / 255;
      const k2 = Math.min(1 - r3, 1 - g2, 1 - b2);
      const c = (1 - r3 - k2) / (1 - k2) || 0;
      const m2 = (1 - g2 - k2) / (1 - k2) || 0;
      const y2 = (1 - b2 - k2) / (1 - k2) || 0;
      return [c * 100, m2 * 100, y2 * 100, k2 * 100];
    };
    function comparativeDistance(x2, y2) {
      return __pow(x2[0] - y2[0], 2) + __pow(x2[1] - y2[1], 2) + __pow(x2[2] - y2[2], 2);
    }
    convert.rgb.keyword = function(rgb) {
      const reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }
      let currentClosestDistance = Infinity;
      let currentClosestKeyword;
      for (const keyword of Object.keys(cssKeywords)) {
        const value = cssKeywords[keyword];
        const distance = comparativeDistance(rgb, value);
        if (distance < currentClosestDistance) {
          currentClosestDistance = distance;
          currentClosestKeyword = keyword;
        }
      }
      return currentClosestKeyword;
    };
    convert.keyword.rgb = function(keyword) {
      return cssKeywords[keyword];
    };
    convert.rgb.xyz = function(rgb) {
      let r3 = rgb[0] / 255;
      let g2 = rgb[1] / 255;
      let b2 = rgb[2] / 255;
      r3 = r3 > 0.04045 ? __pow((r3 + 0.055) / 1.055, 2.4) : r3 / 12.92;
      g2 = g2 > 0.04045 ? __pow((g2 + 0.055) / 1.055, 2.4) : g2 / 12.92;
      b2 = b2 > 0.04045 ? __pow((b2 + 0.055) / 1.055, 2.4) : b2 / 12.92;
      const x2 = r3 * 0.4124 + g2 * 0.3576 + b2 * 0.1805;
      const y2 = r3 * 0.2126 + g2 * 0.7152 + b2 * 0.0722;
      const z2 = r3 * 0.0193 + g2 * 0.1192 + b2 * 0.9505;
      return [x2 * 100, y2 * 100, z2 * 100];
    };
    convert.rgb.lab = function(rgb) {
      const xyz = convert.rgb.xyz(rgb);
      let x2 = xyz[0];
      let y2 = xyz[1];
      let z2 = xyz[2];
      x2 /= 95.047;
      y2 /= 100;
      z2 /= 108.883;
      x2 = x2 > 8856e-6 ? __pow(x2, 1 / 3) : 7.787 * x2 + 16 / 116;
      y2 = y2 > 8856e-6 ? __pow(y2, 1 / 3) : 7.787 * y2 + 16 / 116;
      z2 = z2 > 8856e-6 ? __pow(z2, 1 / 3) : 7.787 * z2 + 16 / 116;
      const l2 = 116 * y2 - 16;
      const a2 = 500 * (x2 - y2);
      const b2 = 200 * (y2 - z2);
      return [l2, a2, b2];
    };
    convert.hsl.rgb = function(hsl) {
      const h2 = hsl[0] / 360;
      const s2 = hsl[1] / 100;
      const l2 = hsl[2] / 100;
      let t2;
      let t3;
      let val;
      if (s2 === 0) {
        val = l2 * 255;
        return [val, val, val];
      }
      if (l2 < 0.5) {
        t2 = l2 * (1 + s2);
      } else {
        t2 = l2 + s2 - l2 * s2;
      }
      const t1 = 2 * l2 - t2;
      const rgb = [0, 0, 0];
      for (let i2 = 0; i2 < 3; i2++) {
        t3 = h2 + 1 / 3 * -(i2 - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }
        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }
        rgb[i2] = val * 255;
      }
      return rgb;
    };
    convert.hsl.hsv = function(hsl) {
      const h2 = hsl[0];
      let s2 = hsl[1] / 100;
      let l2 = hsl[2] / 100;
      let smin = s2;
      const lmin = Math.max(l2, 0.01);
      l2 *= 2;
      s2 *= l2 <= 1 ? l2 : 2 - l2;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      const v2 = (l2 + s2) / 2;
      const sv = l2 === 0 ? 2 * smin / (lmin + smin) : 2 * s2 / (l2 + s2);
      return [h2, sv * 100, v2 * 100];
    };
    convert.hsv.rgb = function(hsv) {
      const h2 = hsv[0] / 60;
      const s2 = hsv[1] / 100;
      let v2 = hsv[2] / 100;
      const hi = Math.floor(h2) % 6;
      const f2 = h2 - Math.floor(h2);
      const p2 = 255 * v2 * (1 - s2);
      const q2 = 255 * v2 * (1 - s2 * f2);
      const t2 = 255 * v2 * (1 - s2 * (1 - f2));
      v2 *= 255;
      switch (hi) {
        case 0:
          return [v2, t2, p2];
        case 1:
          return [q2, v2, p2];
        case 2:
          return [p2, v2, t2];
        case 3:
          return [p2, q2, v2];
        case 4:
          return [t2, p2, v2];
        case 5:
          return [v2, p2, q2];
      }
    };
    convert.hsv.hsl = function(hsv) {
      const h2 = hsv[0];
      const s2 = hsv[1] / 100;
      const v2 = hsv[2] / 100;
      const vmin = Math.max(v2, 0.01);
      let sl;
      let l2;
      l2 = (2 - s2) * v2;
      const lmin = (2 - s2) * vmin;
      sl = s2 * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l2 /= 2;
      return [h2, sl * 100, l2 * 100];
    };
    convert.hwb.rgb = function(hwb) {
      const h2 = hwb[0] / 360;
      let wh = hwb[1] / 100;
      let bl = hwb[2] / 100;
      const ratio = wh + bl;
      let f2;
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }
      const i2 = Math.floor(6 * h2);
      const v2 = 1 - bl;
      f2 = 6 * h2 - i2;
      if ((i2 & 1) !== 0) {
        f2 = 1 - f2;
      }
      const n2 = wh + f2 * (v2 - wh);
      let r3;
      let g2;
      let b2;
      switch (i2) {
        default:
        case 6:
        case 0:
          r3 = v2;
          g2 = n2;
          b2 = wh;
          break;
        case 1:
          r3 = n2;
          g2 = v2;
          b2 = wh;
          break;
        case 2:
          r3 = wh;
          g2 = v2;
          b2 = n2;
          break;
        case 3:
          r3 = wh;
          g2 = n2;
          b2 = v2;
          break;
        case 4:
          r3 = n2;
          g2 = wh;
          b2 = v2;
          break;
        case 5:
          r3 = v2;
          g2 = wh;
          b2 = n2;
          break;
      }
      return [r3 * 255, g2 * 255, b2 * 255];
    };
    convert.cmyk.rgb = function(cmyk) {
      const c = cmyk[0] / 100;
      const m2 = cmyk[1] / 100;
      const y2 = cmyk[2] / 100;
      const k2 = cmyk[3] / 100;
      const r3 = 1 - Math.min(1, c * (1 - k2) + k2);
      const g2 = 1 - Math.min(1, m2 * (1 - k2) + k2);
      const b2 = 1 - Math.min(1, y2 * (1 - k2) + k2);
      return [r3 * 255, g2 * 255, b2 * 255];
    };
    convert.xyz.rgb = function(xyz) {
      const x2 = xyz[0] / 100;
      const y2 = xyz[1] / 100;
      const z2 = xyz[2] / 100;
      let r3;
      let g2;
      let b2;
      r3 = x2 * 3.2406 + y2 * -1.5372 + z2 * -0.4986;
      g2 = x2 * -0.9689 + y2 * 1.8758 + z2 * 0.0415;
      b2 = x2 * 0.0557 + y2 * -0.204 + z2 * 1.057;
      r3 = r3 > 31308e-7 ? 1.055 * __pow(r3, 1 / 2.4) - 0.055 : r3 * 12.92;
      g2 = g2 > 31308e-7 ? 1.055 * __pow(g2, 1 / 2.4) - 0.055 : g2 * 12.92;
      b2 = b2 > 31308e-7 ? 1.055 * __pow(b2, 1 / 2.4) - 0.055 : b2 * 12.92;
      r3 = Math.min(Math.max(0, r3), 1);
      g2 = Math.min(Math.max(0, g2), 1);
      b2 = Math.min(Math.max(0, b2), 1);
      return [r3 * 255, g2 * 255, b2 * 255];
    };
    convert.xyz.lab = function(xyz) {
      let x2 = xyz[0];
      let y2 = xyz[1];
      let z2 = xyz[2];
      x2 /= 95.047;
      y2 /= 100;
      z2 /= 108.883;
      x2 = x2 > 8856e-6 ? __pow(x2, 1 / 3) : 7.787 * x2 + 16 / 116;
      y2 = y2 > 8856e-6 ? __pow(y2, 1 / 3) : 7.787 * y2 + 16 / 116;
      z2 = z2 > 8856e-6 ? __pow(z2, 1 / 3) : 7.787 * z2 + 16 / 116;
      const l2 = 116 * y2 - 16;
      const a2 = 500 * (x2 - y2);
      const b2 = 200 * (y2 - z2);
      return [l2, a2, b2];
    };
    convert.lab.xyz = function(lab) {
      const l2 = lab[0];
      const a2 = lab[1];
      const b2 = lab[2];
      let x2;
      let y2;
      let z2;
      y2 = (l2 + 16) / 116;
      x2 = a2 / 500 + y2;
      z2 = y2 - b2 / 200;
      const y22 = __pow(y2, 3);
      const x22 = __pow(x2, 3);
      const z22 = __pow(z2, 3);
      y2 = y22 > 8856e-6 ? y22 : (y2 - 16 / 116) / 7.787;
      x2 = x22 > 8856e-6 ? x22 : (x2 - 16 / 116) / 7.787;
      z2 = z22 > 8856e-6 ? z22 : (z2 - 16 / 116) / 7.787;
      x2 *= 95.047;
      y2 *= 100;
      z2 *= 108.883;
      return [x2, y2, z2];
    };
    convert.lab.lch = function(lab) {
      const l2 = lab[0];
      const a2 = lab[1];
      const b2 = lab[2];
      let h2;
      const hr = Math.atan2(b2, a2);
      h2 = hr * 360 / 2 / Math.PI;
      if (h2 < 0) {
        h2 += 360;
      }
      const c = Math.sqrt(a2 * a2 + b2 * b2);
      return [l2, c, h2];
    };
    convert.lch.lab = function(lch) {
      const l2 = lch[0];
      const c = lch[1];
      const h2 = lch[2];
      const hr = h2 / 360 * 2 * Math.PI;
      const a2 = c * Math.cos(hr);
      const b2 = c * Math.sin(hr);
      return [l2, a2, b2];
    };
    convert.rgb.ansi16 = function(args, saturation = null) {
      const [r3, g2, b2] = args;
      let value = saturation === null ? convert.rgb.hsv(args)[2] : saturation;
      value = Math.round(value / 50);
      if (value === 0) {
        return 30;
      }
      let ansi = 30 + (Math.round(b2 / 255) << 2 | Math.round(g2 / 255) << 1 | Math.round(r3 / 255));
      if (value === 2) {
        ansi += 60;
      }
      return ansi;
    };
    convert.hsv.ansi16 = function(args) {
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };
    convert.rgb.ansi256 = function(args) {
      const r3 = args[0];
      const g2 = args[1];
      const b2 = args[2];
      if (r3 === g2 && g2 === b2) {
        if (r3 < 8) {
          return 16;
        }
        if (r3 > 248) {
          return 231;
        }
        return Math.round((r3 - 8) / 247 * 24) + 232;
      }
      const ansi = 16 + 36 * Math.round(r3 / 255 * 5) + 6 * Math.round(g2 / 255 * 5) + Math.round(b2 / 255 * 5);
      return ansi;
    };
    convert.ansi16.rgb = function(args) {
      let color = args % 10;
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }
        color = color / 10.5 * 255;
        return [color, color, color];
      }
      const mult = (~~(args > 50) + 1) * 0.5;
      const r3 = (color & 1) * mult * 255;
      const g2 = (color >> 1 & 1) * mult * 255;
      const b2 = (color >> 2 & 1) * mult * 255;
      return [r3, g2, b2];
    };
    convert.ansi256.rgb = function(args) {
      if (args >= 232) {
        const c = (args - 232) * 10 + 8;
        return [c, c, c];
      }
      args -= 16;
      let rem;
      const r3 = Math.floor(args / 36) / 5 * 255;
      const g2 = Math.floor((rem = args % 36) / 6) / 5 * 255;
      const b2 = rem % 6 / 5 * 255;
      return [r3, g2, b2];
    };
    convert.rgb.hex = function(args) {
      const integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.hex.rgb = function(args) {
      const match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }
      let colorString = match[0];
      if (match[0].length === 3) {
        colorString = colorString.split("").map((char) => {
          return char + char;
        }).join("");
      }
      const integer = parseInt(colorString, 16);
      const r3 = integer >> 16 & 255;
      const g2 = integer >> 8 & 255;
      const b2 = integer & 255;
      return [r3, g2, b2];
    };
    convert.rgb.hcg = function(rgb) {
      const r3 = rgb[0] / 255;
      const g2 = rgb[1] / 255;
      const b2 = rgb[2] / 255;
      const max = Math.max(Math.max(r3, g2), b2);
      const min = Math.min(Math.min(r3, g2), b2);
      const chroma = max - min;
      let grayscale;
      let hue;
      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }
      if (chroma <= 0) {
        hue = 0;
      } else if (max === r3) {
        hue = (g2 - b2) / chroma % 6;
      } else if (max === g2) {
        hue = 2 + (b2 - r3) / chroma;
      } else {
        hue = 4 + (r3 - g2) / chroma;
      }
      hue /= 6;
      hue %= 1;
      return [hue * 360, chroma * 100, grayscale * 100];
    };
    convert.hsl.hcg = function(hsl) {
      const s2 = hsl[1] / 100;
      const l2 = hsl[2] / 100;
      const c = l2 < 0.5 ? 2 * s2 * l2 : 2 * s2 * (1 - l2);
      let f2 = 0;
      if (c < 1) {
        f2 = (l2 - 0.5 * c) / (1 - c);
      }
      return [hsl[0], c * 100, f2 * 100];
    };
    convert.hsv.hcg = function(hsv) {
      const s2 = hsv[1] / 100;
      const v2 = hsv[2] / 100;
      const c = s2 * v2;
      let f2 = 0;
      if (c < 1) {
        f2 = (v2 - c) / (1 - c);
      }
      return [hsv[0], c * 100, f2 * 100];
    };
    convert.hcg.rgb = function(hcg) {
      const h2 = hcg[0] / 360;
      const c = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      if (c === 0) {
        return [g2 * 255, g2 * 255, g2 * 255];
      }
      const pure = [0, 0, 0];
      const hi = h2 % 1 * 6;
      const v2 = hi % 1;
      const w2 = 1 - v2;
      let mg = 0;
      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v2;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w2;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v2;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w2;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v2;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w2;
      }
      mg = (1 - c) * g2;
      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255
      ];
    };
    convert.hcg.hsv = function(hcg) {
      const c = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      const v2 = c + g2 * (1 - c);
      let f2 = 0;
      if (v2 > 0) {
        f2 = c / v2;
      }
      return [hcg[0], f2 * 100, v2 * 100];
    };
    convert.hcg.hsl = function(hcg) {
      const c = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      const l2 = g2 * (1 - c) + 0.5 * c;
      let s2 = 0;
      if (l2 > 0 && l2 < 0.5) {
        s2 = c / (2 * l2);
      } else if (l2 >= 0.5 && l2 < 1) {
        s2 = c / (2 * (1 - l2));
      }
      return [hcg[0], s2 * 100, l2 * 100];
    };
    convert.hcg.hwb = function(hcg) {
      const c = hcg[1] / 100;
      const g2 = hcg[2] / 100;
      const v2 = c + g2 * (1 - c);
      return [hcg[0], (v2 - c) * 100, (1 - v2) * 100];
    };
    convert.hwb.hcg = function(hwb) {
      const w2 = hwb[1] / 100;
      const b2 = hwb[2] / 100;
      const v2 = 1 - b2;
      const c = v2 - w2;
      let g2 = 0;
      if (c < 1) {
        g2 = (v2 - c) / (1 - c);
      }
      return [hwb[0], c * 100, g2 * 100];
    };
    convert.apple.rgb = function(apple) {
      return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
    };
    convert.rgb.apple = function(rgb) {
      return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
    };
    convert.gray.rgb = function(args) {
      return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
    };
    convert.gray.hsl = function(args) {
      return [0, 0, args[0]];
    };
    convert.gray.hsv = convert.gray.hsl;
    convert.gray.hwb = function(gray) {
      return [0, 100, gray[0]];
    };
    convert.gray.cmyk = function(gray) {
      return [0, 0, 0, gray[0]];
    };
    convert.gray.lab = function(gray) {
      return [gray[0], 0, 0];
    };
    convert.gray.hex = function(gray) {
      const val = Math.round(gray[0] / 100 * 255) & 255;
      const integer = (val << 16) + (val << 8) + val;
      const string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };
    convert.rgb.gray = function(rgb) {
      const val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [val / 255 * 100];
    };
  }
});

// node_modules/color-convert/route.js
var require_route = __commonJS({
  "node_modules/color-convert/route.js"(exports2, module2) {
    var conversions = require_conversions();
    function buildGraph() {
      const graph = {};
      const models = Object.keys(conversions);
      for (let len = models.length, i2 = 0; i2 < len; i2++) {
        graph[models[i2]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      }
      return graph;
    }
    function deriveBFS(fromModel) {
      const graph = buildGraph();
      const queue = [fromModel];
      graph[fromModel].distance = 0;
      while (queue.length) {
        const current = queue.pop();
        const adjacents = Object.keys(conversions[current]);
        for (let len = adjacents.length, i2 = 0; i2 < len; i2++) {
          const adjacent = adjacents[i2];
          const node = graph[adjacent];
          if (node.distance === -1) {
            node.distance = graph[current].distance + 1;
            node.parent = current;
            queue.unshift(adjacent);
          }
        }
      }
      return graph;
    }
    function link(from, to) {
      return function(args) {
        return to(from(args));
      };
    }
    function wrapConversion(toModel, graph) {
      const path = [graph[toModel].parent, toModel];
      let fn = conversions[graph[toModel].parent][toModel];
      let cur = graph[toModel].parent;
      while (graph[cur].parent) {
        path.unshift(graph[cur].parent);
        fn = link(conversions[graph[cur].parent][cur], fn);
        cur = graph[cur].parent;
      }
      fn.conversion = path;
      return fn;
    }
    module2.exports = function(fromModel) {
      const graph = deriveBFS(fromModel);
      const conversion = {};
      const models = Object.keys(graph);
      for (let len = models.length, i2 = 0; i2 < len; i2++) {
        const toModel = models[i2];
        const node = graph[toModel];
        if (node.parent === null) {
          continue;
        }
        conversion[toModel] = wrapConversion(toModel, graph);
      }
      return conversion;
    };
  }
});

// node_modules/color-convert/index.js
var require_color_convert = __commonJS({
  "node_modules/color-convert/index.js"(exports2, module2) {
    var conversions = require_conversions();
    var route = require_route();
    var convert = {};
    var models = Object.keys(conversions);
    function wrapRaw(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        return fn(args);
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    function wrapRounded(fn) {
      const wrappedFn = function(...args) {
        const arg0 = args[0];
        if (arg0 === void 0 || arg0 === null) {
          return arg0;
        }
        if (arg0.length > 1) {
          args = arg0;
        }
        const result = fn(args);
        if (typeof result === "object") {
          for (let len = result.length, i2 = 0; i2 < len; i2++) {
            result[i2] = Math.round(result[i2]);
          }
        }
        return result;
      };
      if ("conversion" in fn) {
        wrappedFn.conversion = fn.conversion;
      }
      return wrappedFn;
    }
    models.forEach((fromModel) => {
      convert[fromModel] = {};
      Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
      Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
      const routes = route(fromModel);
      const routeModels = Object.keys(routes);
      routeModels.forEach((toModel) => {
        const fn = routes[toModel];
        convert[fromModel][toModel] = wrapRounded(fn);
        convert[fromModel][toModel].raw = wrapRaw(fn);
      });
    });
    module2.exports = convert;
  }
});

// node_modules/color/index.js
var require_color = __commonJS({
  "node_modules/color/index.js"(exports2, module2) {
    var colorString = require_color_string();
    var convert = require_color_convert();
    var skippedModels = [
      // To be honest, I don't really feel like keyword belongs in color convert, but eh.
      "keyword",
      // Gray conflicts with some method names, and has its own method defined.
      "gray",
      // Shouldn't really be in color-convert either...
      "hex"
    ];
    var hashedModelKeys = {};
    for (const model of Object.keys(convert)) {
      hashedModelKeys[[...convert[model].labels].sort().join("")] = model;
    }
    var limiters = {};
    function Color10(object, model) {
      if (!(this instanceof Color10)) {
        return new Color10(object, model);
      }
      if (model && model in skippedModels) {
        model = null;
      }
      if (model && !(model in convert)) {
        throw new Error("Unknown model: " + model);
      }
      let i2;
      let channels;
      if (object == null) {
        this.model = "rgb";
        this.color = [0, 0, 0];
        this.valpha = 1;
      } else if (object instanceof Color10) {
        this.model = object.model;
        this.color = [...object.color];
        this.valpha = object.valpha;
      } else if (typeof object === "string") {
        const result = colorString.get(object);
        if (result === null) {
          throw new Error("Unable to parse color from string: " + object);
        }
        this.model = result.model;
        channels = convert[this.model].channels;
        this.color = result.value.slice(0, channels);
        this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
      } else if (object.length > 0) {
        this.model = model || "rgb";
        channels = convert[this.model].channels;
        const newArray = Array.prototype.slice.call(object, 0, channels);
        this.color = zeroArray(newArray, channels);
        this.valpha = typeof object[channels] === "number" ? object[channels] : 1;
      } else if (typeof object === "number") {
        this.model = "rgb";
        this.color = [
          object >> 16 & 255,
          object >> 8 & 255,
          object & 255
        ];
        this.valpha = 1;
      } else {
        this.valpha = 1;
        const keys = Object.keys(object);
        if ("alpha" in object) {
          keys.splice(keys.indexOf("alpha"), 1);
          this.valpha = typeof object.alpha === "number" ? object.alpha : 0;
        }
        const hashedKeys = keys.sort().join("");
        if (!(hashedKeys in hashedModelKeys)) {
          throw new Error("Unable to parse color from object: " + JSON.stringify(object));
        }
        this.model = hashedModelKeys[hashedKeys];
        const { labels } = convert[this.model];
        const color = [];
        for (i2 = 0; i2 < labels.length; i2++) {
          color.push(object[labels[i2]]);
        }
        this.color = zeroArray(color);
      }
      if (limiters[this.model]) {
        channels = convert[this.model].channels;
        for (i2 = 0; i2 < channels; i2++) {
          const limit = limiters[this.model][i2];
          if (limit) {
            this.color[i2] = limit(this.color[i2]);
          }
        }
      }
      this.valpha = Math.max(0, Math.min(1, this.valpha));
      if (Object.freeze) {
        Object.freeze(this);
      }
    }
    Color10.prototype = {
      toString() {
        return this.string();
      },
      toJSON() {
        return this[this.model]();
      },
      string(places) {
        let self2 = this.model in colorString.to ? this : this.rgb();
        self2 = self2.round(typeof places === "number" ? places : 1);
        const args = self2.valpha === 1 ? self2.color : [...self2.color, this.valpha];
        return colorString.to[self2.model](args);
      },
      percentString(places) {
        const self2 = this.rgb().round(typeof places === "number" ? places : 1);
        const args = self2.valpha === 1 ? self2.color : [...self2.color, this.valpha];
        return colorString.to.rgb.percent(args);
      },
      array() {
        return this.valpha === 1 ? [...this.color] : [...this.color, this.valpha];
      },
      object() {
        const result = {};
        const { channels } = convert[this.model];
        const { labels } = convert[this.model];
        for (let i2 = 0; i2 < channels; i2++) {
          result[labels[i2]] = this.color[i2];
        }
        if (this.valpha !== 1) {
          result.alpha = this.valpha;
        }
        return result;
      },
      unitArray() {
        const rgb = this.rgb().color;
        rgb[0] /= 255;
        rgb[1] /= 255;
        rgb[2] /= 255;
        if (this.valpha !== 1) {
          rgb.push(this.valpha);
        }
        return rgb;
      },
      unitObject() {
        const rgb = this.rgb().object();
        rgb.r /= 255;
        rgb.g /= 255;
        rgb.b /= 255;
        if (this.valpha !== 1) {
          rgb.alpha = this.valpha;
        }
        return rgb;
      },
      round(places) {
        places = Math.max(places || 0, 0);
        return new Color10([...this.color.map(roundToPlace(places)), this.valpha], this.model);
      },
      alpha(value) {
        if (value !== void 0) {
          return new Color10([...this.color, Math.max(0, Math.min(1, value))], this.model);
        }
        return this.valpha;
      },
      // Rgb
      red: getset("rgb", 0, maxfn(255)),
      green: getset("rgb", 1, maxfn(255)),
      blue: getset("rgb", 2, maxfn(255)),
      hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, (value) => (value % 360 + 360) % 360),
      saturationl: getset("hsl", 1, maxfn(100)),
      lightness: getset("hsl", 2, maxfn(100)),
      saturationv: getset("hsv", 1, maxfn(100)),
      value: getset("hsv", 2, maxfn(100)),
      chroma: getset("hcg", 1, maxfn(100)),
      gray: getset("hcg", 2, maxfn(100)),
      white: getset("hwb", 1, maxfn(100)),
      wblack: getset("hwb", 2, maxfn(100)),
      cyan: getset("cmyk", 0, maxfn(100)),
      magenta: getset("cmyk", 1, maxfn(100)),
      yellow: getset("cmyk", 2, maxfn(100)),
      black: getset("cmyk", 3, maxfn(100)),
      x: getset("xyz", 0, maxfn(95.047)),
      y: getset("xyz", 1, maxfn(100)),
      z: getset("xyz", 2, maxfn(108.833)),
      l: getset("lab", 0, maxfn(100)),
      a: getset("lab", 1),
      b: getset("lab", 2),
      keyword(value) {
        if (value !== void 0) {
          return new Color10(value);
        }
        return convert[this.model].keyword(this.color);
      },
      hex(value) {
        if (value !== void 0) {
          return new Color10(value);
        }
        return colorString.to.hex(this.rgb().round().color);
      },
      hexa(value) {
        if (value !== void 0) {
          return new Color10(value);
        }
        const rgbArray = this.rgb().round().color;
        let alphaHex = Math.round(this.valpha * 255).toString(16).toUpperCase();
        if (alphaHex.length === 1) {
          alphaHex = "0" + alphaHex;
        }
        return colorString.to.hex(rgbArray) + alphaHex;
      },
      rgbNumber() {
        const rgb = this.rgb().color;
        return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
      },
      luminosity() {
        const rgb = this.rgb().color;
        const lum = [];
        for (const [i2, element] of rgb.entries()) {
          const chan = element / 255;
          lum[i2] = chan <= 0.04045 ? chan / 12.92 : __pow((chan + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
      },
      contrast(color2) {
        const lum1 = this.luminosity();
        const lum2 = color2.luminosity();
        if (lum1 > lum2) {
          return (lum1 + 0.05) / (lum2 + 0.05);
        }
        return (lum2 + 0.05) / (lum1 + 0.05);
      },
      level(color2) {
        const contrastRatio = this.contrast(color2);
        if (contrastRatio >= 7) {
          return "AAA";
        }
        return contrastRatio >= 4.5 ? "AA" : "";
      },
      isDark() {
        const rgb = this.rgb().color;
        const yiq = (rgb[0] * 2126 + rgb[1] * 7152 + rgb[2] * 722) / 1e4;
        return yiq < 128;
      },
      isLight() {
        return !this.isDark();
      },
      negate() {
        const rgb = this.rgb();
        for (let i2 = 0; i2 < 3; i2++) {
          rgb.color[i2] = 255 - rgb.color[i2];
        }
        return rgb;
      },
      lighten(ratio) {
        const hsl = this.hsl();
        hsl.color[2] += hsl.color[2] * ratio;
        return hsl;
      },
      darken(ratio) {
        const hsl = this.hsl();
        hsl.color[2] -= hsl.color[2] * ratio;
        return hsl;
      },
      saturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] += hsl.color[1] * ratio;
        return hsl;
      },
      desaturate(ratio) {
        const hsl = this.hsl();
        hsl.color[1] -= hsl.color[1] * ratio;
        return hsl;
      },
      whiten(ratio) {
        const hwb = this.hwb();
        hwb.color[1] += hwb.color[1] * ratio;
        return hwb;
      },
      blacken(ratio) {
        const hwb = this.hwb();
        hwb.color[2] += hwb.color[2] * ratio;
        return hwb;
      },
      grayscale() {
        const rgb = this.rgb().color;
        const value = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
        return Color10.rgb(value, value, value);
      },
      fade(ratio) {
        return this.alpha(this.valpha - this.valpha * ratio);
      },
      opaquer(ratio) {
        return this.alpha(this.valpha + this.valpha * ratio);
      },
      rotate(degrees) {
        const hsl = this.hsl();
        let hue = hsl.color[0];
        hue = (hue + degrees) % 360;
        hue = hue < 0 ? 360 + hue : hue;
        hsl.color[0] = hue;
        return hsl;
      },
      mix(mixinColor, weight) {
        if (!mixinColor || !mixinColor.rgb) {
          throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
        }
        const color1 = mixinColor.rgb();
        const color2 = this.rgb();
        const p2 = weight === void 0 ? 0.5 : weight;
        const w2 = 2 * p2 - 1;
        const a2 = color1.alpha() - color2.alpha();
        const w1 = ((w2 * a2 === -1 ? w2 : (w2 + a2) / (1 + w2 * a2)) + 1) / 2;
        const w22 = 1 - w1;
        return Color10.rgb(
          w1 * color1.red() + w22 * color2.red(),
          w1 * color1.green() + w22 * color2.green(),
          w1 * color1.blue() + w22 * color2.blue(),
          color1.alpha() * p2 + color2.alpha() * (1 - p2)
        );
      }
    };
    for (const model of Object.keys(convert)) {
      if (skippedModels.includes(model)) {
        continue;
      }
      const { channels } = convert[model];
      Color10.prototype[model] = function(...args) {
        if (this.model === model) {
          return new Color10(this);
        }
        if (args.length > 0) {
          return new Color10(args, model);
        }
        return new Color10([...assertArray(convert[this.model][model].raw(this.color)), this.valpha], model);
      };
      Color10[model] = function(...args) {
        let color = args[0];
        if (typeof color === "number") {
          color = zeroArray(args, channels);
        }
        return new Color10(color, model);
      };
    }
    function roundTo(number, places) {
      return Number(number.toFixed(places));
    }
    function roundToPlace(places) {
      return function(number) {
        return roundTo(number, places);
      };
    }
    function getset(model, channel, modifier) {
      model = Array.isArray(model) ? model : [model];
      for (const m2 of model) {
        (limiters[m2] || (limiters[m2] = []))[channel] = modifier;
      }
      model = model[0];
      return function(value) {
        let result;
        if (value !== void 0) {
          if (modifier) {
            value = modifier(value);
          }
          result = this[model]();
          result.color[channel] = value;
          return result;
        }
        result = this[model]().color[channel];
        if (modifier) {
          result = modifier(result);
        }
        return result;
      };
    }
    function maxfn(max) {
      return function(v2) {
        return Math.max(0, Math.min(max, v2));
      };
    }
    function assertArray(value) {
      return Array.isArray(value) ? value : [value];
    }
    function zeroArray(array, length) {
      for (let i2 = 0; i2 < length; i2++) {
        if (typeof array[i2] !== "number") {
          array[i2] = 0;
        }
      }
      return array;
    }
    module2.exports = Color10;
  }
});

// trabecula/components/index.ts
var components_exports = {};
__export(components_exports, {
  Accordion: () => Accordion,
  Button: () => Button,
  Card: () => Card,
  CardGrid: () => CardGrid,
  CenteredText: () => CenteredText,
  Checkbox: () => Checkbox,
  Chip: () => Chip,
  ColorPicker: () => ColorPicker,
  Comp: () => Comp,
  ConditionalWrap: () => ConditionalWrap,
  ConfirmModal: () => ConfirmModal,
  ContextMenu: () => ContextMenu,
  DateDetail: () => DateDetail,
  DateInput: () => DateInput,
  DateRange: () => DateRange,
  Detail: () => Detail,
  DetailRows: () => DetailRows,
  Divider: () => Divider,
  Dropdown: () => Dropdown,
  HeaderWrapper: () => HeaderWrapper,
  Icon: () => Icon,
  IconButton: () => IconButton,
  IconPicker: () => IconPicker,
  Input: () => Input,
  ListItem: () => ListItem,
  LoadingOverlay: () => LoadingOverlay,
  LogOpsInput: () => LogOpsInput,
  MULTI_INPUT_ROW_HEIGHT: () => MULTI_INPUT_ROW_HEIGHT,
  MenuButton: () => MenuButton,
  Modal: () => Modal,
  MultiInput: () => MultiInput,
  MultiInputList: () => MultiInputList,
  MultiInputRow: () => MultiInputRow,
  NumInput: () => NumInput,
  NumRange: () => NumRange,
  Pagination: () => Pagination,
  ProgressBar: () => ProgressBar,
  ProgressCircle: () => ProgressCircle,
  RangeWrapper: () => RangeWrapper,
  SideScroller: () => SideScroller,
  SortMenu: () => SortMenu,
  SortRow: () => SortRow,
  Table: () => Table,
  Text: () => Text,
  Tooltip: () => Tooltip,
  TooltipWrapper: () => TooltipWrapper,
  UniformList: () => UniformList,
  View: () => View
});
module.exports = __toCommonJS(components_exports);

// trabecula/components/comp.tsx
var import_react = require("react");
var import_mobx_react_lite = require("mobx-react-lite");
function Comp(component) {
  const Wrapped = (0, import_react.forwardRef)((props, ref) => component(props, ref));
  return (0, import_mobx_react_lite.observer)(Wrapped);
}

// trabecula/components/buttons/button.tsx
var import_material3 = require("@mui/material");
var import_color2 = __toESM(require_color());

// trabecula/utils/client/css.ts
var import_material = require("@mui/material");
var import_styles = require("@mui/material/styles");
var import_color = __toESM(require_color());
var import_tss_react = require("tss-react");
var makeBorders = (props) => ({
  border: props == null ? void 0 : props.all,
  borderTop: props == null ? void 0 : props.top,
  borderBottom: props == null ? void 0 : props.bottom,
  borderRight: props == null ? void 0 : props.right,
  borderLeft: props == null ? void 0 : props.left
});
var makeBorderRadiuses = (radiuses) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  return {
    borderTopLeftRadius: (_c = (_b = (_a = radiuses == null ? void 0 : radiuses.topLeft) != null ? _a : radiuses == null ? void 0 : radiuses.top) != null ? _b : radiuses == null ? void 0 : radiuses.left) != null ? _c : radiuses == null ? void 0 : radiuses.all,
    borderTopRightRadius: (_f = (_e = (_d = radiuses == null ? void 0 : radiuses.topRight) != null ? _d : radiuses == null ? void 0 : radiuses.top) != null ? _e : radiuses == null ? void 0 : radiuses.right) != null ? _f : radiuses == null ? void 0 : radiuses.all,
    borderBottomLeftRadius: (_i = (_h = (_g = radiuses == null ? void 0 : radiuses.bottomLeft) != null ? _g : radiuses == null ? void 0 : radiuses.bottom) != null ? _h : radiuses == null ? void 0 : radiuses.left) != null ? _i : radiuses == null ? void 0 : radiuses.all,
    borderBottomRightRadius: (_l = (_k = (_j = radiuses == null ? void 0 : radiuses.bottomRight) != null ? _j : radiuses == null ? void 0 : radiuses.bottom) != null ? _k : radiuses == null ? void 0 : radiuses.right) != null ? _l : radiuses == null ? void 0 : radiuses.all
  };
};
var makeMargins = (props) => ({
  margin: props == null ? void 0 : props.all,
  marginTop: props == null ? void 0 : props.top,
  marginBottom: props == null ? void 0 : props.bottom,
  marginRight: props == null ? void 0 : props.right,
  marginLeft: props == null ? void 0 : props.left
});
var makePadding = (props) => ({
  padding: props == null ? void 0 : props.all,
  paddingTop: props == null ? void 0 : props.top,
  paddingBottom: props == null ? void 0 : props.bottom,
  paddingRight: props == null ? void 0 : props.right,
  paddingLeft: props == null ? void 0 : props.left
});
var { makeStyles } = (0, import_tss_react.createMakeAndWithStyles)({ useTheme: import_styles.useTheme });
var makeClasses = (fnOrObj) => {
  return (params) => {
    const { classes: css, cx } = makeStyles()(
      (props, theme) => typeof fnOrObj === "function" ? fnOrObj(theme, props) : fnOrObj
    )(params);
    return { css, cx };
  };
};
var customColors = {
  black: "#131313",
  blue: "#2866c5",
  blueGrey: "#546e7a",
  brown: "#6d4c41",
  darkGrey: "#2b2b2b",
  green: "#2e7d32",
  grey: "#4b4b4b",
  lightBlue: "#578cdd",
  lightGrey: "#bdbdbd",
  orange: "#ad6a27",
  purple: "#683980",
  red: "#982525",
  white: "#f5f5f5",
  yellow: "#e3c648"
};
var tagCategories = [
  customColors.red,
  customColors.orange,
  customColors.yellow,
  customColors.green,
  customColors.blue,
  customColors.blueGrey,
  customColors.purple
].map((c) => [
  (0, import_color.default)(c).lighten(0.4).hex(),
  (0, import_color.default)(c).lighten(0.2).hex(),
  (0, import_color.default)(c).hex(),
  (0, import_color.default)(c).darken(0.2).hex(),
  (0, import_color.default)(c).darken(0.4).hex()
]);
var colors = {
  background: "#1E1E1E",
  custom: customColors,
  foreground: "#2C2C2C",
  foregroundCard: "#343434",
  mui: import_material.colors,
  tagCategories
};

// trabecula/utils/client/hooks.ts
var import_react2 = require("react");
var import_mobx_keystone = require("mobx-keystone");

// trabecula/utils/common/arrays.ts
var chunkArray = (arr, size2) => [...Array(Math.ceil(arr.length / size2))].map((_2, i2) => arr.slice(i2 * size2, i2 * size2 + size2));

// trabecula/utils/common/constants.ts
var AUDIO_CODECS_COMMON = [
  "None",
  "aac_he",
  "aac_ld",
  "aac",
  "ac3",
  "aiff",
  "alac",
  "avc",
  "dts",
  "flac",
  "mp2",
  "mp3",
  "mp4als",
  "opus",
  "pcm_alaw",
  "pcm_bluray",
  "pcm_dvd",
  "pcm_s16be",
  "pcm_s16le",
  "pcm_s24le",
  "pcm_s32le",
  "pcm_u8",
  "pcm",
  "tta",
  "vorbis",
  "wav",
  "wmapro",
  "wmav1",
  "wmav2"
];
var AUDIO_CODECS_UNCOMMON = [
  "aac_latm",
  "alac",
  "ape",
  "aptx_hd",
  "aptx",
  "avs",
  "binkaudio_dct",
  "binkaudio_rdft",
  "cavs",
  "cook",
  "hcom",
  "iac",
  "mace3",
  "mace6",
  "paf_audio",
  "ra_144",
  "ra_288",
  "ralf",
  "sipr",
  "tak",
  "westwood_snd1",
  "wmalossless",
  "wmavoice",
  "xma1",
  "xma2"
];
var AUDIO_CODECS = [...AUDIO_CODECS_COMMON, ...AUDIO_CODECS_UNCOMMON];
var IMAGE_EXTS_COMMON = ["gif", "heic", "jpeg", "jpg", "png", "webp"];
var IMAGE_EXTS_UNCOMMON = [
  "apng",
  "avif",
  "bmp",
  "jfif",
  "jif",
  "jiff",
  "svg",
  "tiff"
];
var IMAGE_EXTS = [...IMAGE_EXTS_COMMON, ...IMAGE_EXTS_UNCOMMON];
var VIDEO_CODECS_COMMON = [
  "av1",
  "h264",
  "hevc",
  "mpeg4",
  "prores",
  "vp8",
  "vp9",
  "wmv1"
];
var VIDEO_CODECS_UNCOMMON = [
  "amv",
  "asv1",
  "asv2",
  "auravision",
  "binkvideo",
  "camstudio",
  "cinepak",
  "dirac",
  "dnxhd",
  "dnxhr",
  "dvvideo",
  "ffv1",
  "flv1",
  "h263",
  "h263p",
  "huffyuv",
  "indeo3",
  "indeo5",
  "jpeg2000",
  "jpegls",
  "lagarith",
  "mjpeg",
  "mjpegb",
  "mpeg1video",
  "mpeg2video",
  "msmpeg4v1",
  "msmpeg4v2",
  "msmpeg4v3",
  "rawvideo",
  "rv10",
  "rv20",
  "rv30",
  "rv40",
  "smacker",
  "snow",
  "sp5x",
  "svq1",
  "svq3",
  "theora",
  "tscc",
  "utvideo",
  "uyvy422",
  "v210",
  "vixl",
  "vp6",
  "vp6f",
  "wmv2",
  "wmv3",
  "yuyv422",
  "zlib",
  "zmbv"
];
var VIDEO_CODECS = [...VIDEO_CODECS_COMMON, ...VIDEO_CODECS_UNCOMMON];
var VIDEO_EXTS_COMMON = [
  "3gp",
  "avi",
  "f4v",
  "flv",
  "m4v",
  "mkv",
  "mov",
  "mp4",
  "ts",
  "webm",
  "wmv"
];
var VIDEO_EXTS_UNCOMMON = [
  "3gp2",
  "3gpp",
  "amv",
  "asf",
  "avi",
  "divx",
  "m2t",
  "m2ts",
  "m2v",
  "m4b",
  "m4p",
  "mpeg",
  "mpg",
  "mts",
  "ogv",
  "qt",
  "vob",
  "wm",
  "wmp"
];
var VIDEO_EXTS = [...VIDEO_EXTS_COMMON, ...VIDEO_EXTS_UNCOMMON];
var _CONSTANTS = {
  IMAGE_EXTS,
  TOOLTIP: {
    ENTER_DELAY: 1e3,
    ENTER_NEXT_DELAY: 500
  },
  VIDEO_CODECS,
  VIDEO_EXTS
};

// trabecula/utils/common/date-and-time.ts
var import_dayjs = __toESM(require("dayjs"));
var import_customParseFormat = __toESM(require("dayjs/plugin/customParseFormat"));
var import_duration = __toESM(require("dayjs/plugin/duration"));
var import_relativeTime = __toESM(require("dayjs/plugin/relativeTime"));
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.extend(import_duration.default);
import_dayjs.default.extend(import_relativeTime.default);

// trabecula/utils/common/formatting.ts
var abbrevNum = (num) => Intl.NumberFormat("en", { notation: "compact" }).format(num);
var bytes = (bytes2) => {
  if (bytes2 < 1) return "0 B";
  const power = Math.floor(Math.log2(bytes2) / 10);
  return `${(bytes2 / __pow(1024, power)).toFixed(2)} ${"KMGTPEZY"[power - 1] || ""}B`;
};
var camelCase = (str) => `${str[0].toLowerCase()}${str.slice(1)}`;
var capitalize = (str, restLower = false) => str[0].toUpperCase() + (restLower ? str.substring(1).toLocaleLowerCase() : str.substring(1));
var commas = (num) => Intl.NumberFormat().format(num);
var decodeHtmlEntities = (s2) => s2.replace(htmlEntityRegex, (m2) => {
  var _a;
  if (m2.startsWith("&#x") || m2.startsWith("&#X"))
    return String.fromCharCode(parseInt(m2.slice(3, -1), 16));
  if (m2.startsWith("&#")) return String.fromCharCode(parseInt(m2.slice(2, -1), 10));
  return (_a = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" }[m2.slice(1, -1)]) != null ? _a : m2;
});
var duration2 = (val, isMs = false) => !isNaN(val) ? import_dayjs.default.duration(val, isMs ? "ms" : "s").format("HH:mm:ss") : null;
var frameToSec = (frame, frameRate) => round(frame / frameRate, 3);
var htmlEntityRegex = /&(#\d+|#[xX][0-9a-fA-F]+|[a-zA-Z]+);/g;
var jstr = (val) => JSON.stringify(val, null, 2);
var leadZeros = (num, places) => String(num).padStart(places, "0");
var pascalToSnake = (str) => !(str == null ? void 0 : str.length) ? "" : str.split(/(?=[A-Z])/).join("_").toLowerCase();
var regexEscape = (string, replacementOnly = false) => string ? replacementOnly ? String(string).replace(/\\/g, "\\\\") : String(string).replace(/[.*+?^${}()|[\]\\]/g, "\\$&") : string;
var sanitizeWinPath = (winPath, isBasename = false) => {
  if (!winPath) return winPath;
  const sanitize = (part) => part.replace(/[\\:*?"<>|]/g, "-").replace(/[. ]+$/, "").replace(isBasename ? "/" : "", "").trim();
  return isBasename ? sanitize(winPath) : winPath.split(/[/\\]/).map((part, idx) => idx === 0 && /^[a-zA-Z]:$/.test(part) ? part : sanitize(part)).join("\\");
};
var snakeToPascal = (str) => !(str == null ? void 0 : str.length) ? "" : str.split("_").map((s2) => capitalize(s2)).join("");
var Fmt = {
  abbrevNum,
  bytes,
  camelCase,
  capitalize,
  commas,
  decodeHtmlEntities,
  duration: duration2,
  frameToSec,
  htmlEntityRegex,
  jstr,
  leadZeros,
  pascalToSnake,
  regexEscape,
  sanitizeWinPath,
  snakeToPascal
};

// trabecula/utils/common/math.ts
var LOGICAL_OPS = ["=", "!=", ">", ">=", "<", "<="];
var round = (num, decimals = 2) => {
  const n2 = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * n2) / n2;
};

// node_modules/es-toolkit/dist/function/debounce.mjs
function debounce(func, debounceMs, { signal, edges } = {}) {
  let pendingThis = void 0;
  let pendingArgs = null;
  const leading = edges != null && edges.includes("leading");
  const trailing = edges == null || edges.includes("trailing");
  const invoke = () => {
    if (pendingArgs !== null) {
      func.apply(pendingThis, pendingArgs);
      pendingThis = void 0;
      pendingArgs = null;
    }
  };
  const onTimerEnd = () => {
    if (trailing) {
      invoke();
    }
    cancel();
  };
  let timeoutId = null;
  const schedule = () => {
    if (timeoutId != null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      onTimerEnd();
    }, debounceMs);
  };
  const cancelTimer = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };
  const cancel = () => {
    cancelTimer();
    pendingThis = void 0;
    pendingArgs = null;
  };
  const flush = () => {
    invoke();
  };
  const debounced = function(...args) {
    if (signal == null ? void 0 : signal.aborted) {
      return;
    }
    pendingThis = this;
    pendingArgs = args;
    const isFirstCall = timeoutId == null;
    schedule();
    if (leading && isFirstCall) {
      invoke();
    }
  };
  debounced.schedule = schedule;
  debounced.cancel = cancel;
  debounced.flush = flush;
  signal == null ? void 0 : signal.addEventListener("abort", cancel, { once: true });
  return debounced;
}

// node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
function isPrimitive(value) {
  return value == null || typeof value !== "object" && typeof value !== "function";
}

// node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
function isTypedArray(x2) {
  return ArrayBuffer.isView(x2) && !(x2 instanceof DataView);
}

// node_modules/es-toolkit/dist/object/clone.mjs
function clone(obj) {
  if (isPrimitive(obj)) {
    return obj;
  }
  if (Array.isArray(obj) || isTypedArray(obj) || obj instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && obj instanceof SharedArrayBuffer) {
    return obj.slice(0);
  }
  const prototype = Object.getPrototypeOf(obj);
  if (prototype == null) {
    return Object.assign(Object.create(prototype), obj);
  }
  const Constructor = prototype.constructor;
  if (obj instanceof Date || obj instanceof Map || obj instanceof Set) {
    return new Constructor(obj);
  }
  if (obj instanceof RegExp) {
    const newRegExp = new Constructor(obj);
    newRegExp.lastIndex = obj.lastIndex;
    return newRegExp;
  }
  if (obj instanceof DataView) {
    return new Constructor(obj.buffer.slice(0));
  }
  if (obj instanceof Error) {
    let newError;
    if (obj instanceof AggregateError) {
      newError = new Constructor(obj.errors, obj.message, { cause: obj.cause });
    } else {
      newError = new Constructor(obj.message, { cause: obj.cause });
    }
    newError.stack = obj.stack;
    Object.assign(newError, obj);
    return newError;
  }
  if (typeof File !== "undefined" && obj instanceof File) {
    const newFile = new Constructor([obj], obj.name, { type: obj.type, lastModified: obj.lastModified });
    return newFile;
  }
  if (typeof obj === "object") {
    const newObject = Object.create(prototype);
    return Object.assign(newObject, obj);
  }
  return obj;
}

// node_modules/es-toolkit/dist/predicate/isPlainObject.mjs
function isPlainObject(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  const proto = Object.getPrototypeOf(value);
  const hasObjectPrototype = proto === null || proto === Object.prototype || Object.getPrototypeOf(proto) === null;
  if (!hasObjectPrototype) {
    return false;
  }
  return Object.prototype.toString.call(value) === "[object Object]";
}

// node_modules/es-toolkit/dist/_internal/isUnsafeProperty.mjs
function isUnsafeProperty(key) {
  return key === "__proto__";
}

// node_modules/es-toolkit/dist/object/mergeWith.mjs
function mergeWith(target, source, merge) {
  const sourceKeys = Object.keys(source);
  for (let i2 = 0; i2 < sourceKeys.length; i2++) {
    const key = sourceKeys[i2];
    if (isUnsafeProperty(key)) {
      continue;
    }
    const sourceValue = source[key];
    const targetValue = target[key];
    const merged = merge(targetValue, sourceValue, key, target, source);
    if (merged !== void 0) {
      target[key] = merged;
    } else if (Array.isArray(sourceValue)) {
      if (Array.isArray(targetValue)) {
        target[key] = mergeWith(targetValue, sourceValue, merge);
      } else {
        target[key] = mergeWith([], sourceValue, merge);
      }
    } else if (isPlainObject(sourceValue)) {
      if (isPlainObject(targetValue)) {
        target[key] = mergeWith(targetValue, sourceValue, merge);
      } else {
        target[key] = mergeWith({}, sourceValue, merge);
      }
    } else if (targetValue === void 0 || sourceValue !== void 0) {
      target[key] = sourceValue;
    }
  }
  return target;
}

// node_modules/es-toolkit/dist/object/toMerged.mjs
function toMerged(target, source) {
  return mergeWith(clone(target), source, function mergeRecursively(targetValue, sourceValue) {
    if (Array.isArray(sourceValue)) {
      if (Array.isArray(targetValue)) {
        return mergeWith(clone(targetValue), sourceValue, mergeRecursively);
      } else {
        return mergeWith([], sourceValue, mergeRecursively);
      }
    } else if (isPlainObject(sourceValue)) {
      if (isPlainObject(targetValue)) {
        return mergeWith(clone(targetValue), sourceValue, mergeRecursively);
      } else {
        return mergeWith({}, sourceValue, mergeRecursively);
      }
    }
  });
}

// trabecula/utils/common/miscellaneous.ts
var debounce2 = debounce;
var deepMerge = toMerged;

// trabecula/utils/client/hooks.ts
var useElementResize = (ref, condition) => {
  const [dimensions, setDimensions] = (0, import_react2.useState)({ width: 0, height: 0 });
  const [absPosition, setAbsPosition] = (0, import_react2.useState)({ top: 0, left: 0 });
  (0, import_react2.useEffect)(() => {
    const nodeRef = ref == null ? void 0 : ref.current;
    const getDimensions = () => ({
      width: (nodeRef == null ? void 0 : nodeRef.offsetWidth) || 0,
      height: (nodeRef == null ? void 0 : nodeRef.offsetHeight) || 0
    });
    const getPosition = () => {
      var _a;
      const rect = (_a = nodeRef == null ? void 0 : nodeRef.getBoundingClientRect) == null ? void 0 : _a.call(nodeRef);
      return { top: (rect == null ? void 0 : rect.top) || 0, left: (rect == null ? void 0 : rect.left) || 0 };
    };
    const handleResize = () => {
      setDimensions(getDimensions());
      setAbsPosition(getPosition());
    };
    if (nodeRef) handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref, condition]);
  return __spreadValues(__spreadValues({}, dimensions), absPosition);
};

// trabecula/utils/client/scrolling.ts
var import_react3 = require("react");

// trabecula/utils/client/store.ts
var import_mobx_keystone2 = require("mobx-keystone");

// node_modules/react-toastify/dist/react-toastify.esm.mjs
var import_react4 = __toESM(require("react"), 1);

// node_modules/react-toastify/node_modules/clsx/dist/clsx.m.js
function r(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2) n2 += e2;
  else if ("object" == typeof e2) if (Array.isArray(e2)) for (t2 = 0; t2 < e2.length; t2++) e2[t2] && (f2 = r(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
  else for (t2 in e2) e2[t2] && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = ""; f2 < arguments.length; ) (e2 = arguments[f2++]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
var clsx_m_default = clsx;

// node_modules/react-toastify/dist/react-toastify.esm.mjs
var u = (t2) => "number" == typeof t2 && !isNaN(t2);
var d = (t2) => "string" == typeof t2;
var p = (t2) => "function" == typeof t2;
var m = (t2) => d(t2) || p(t2) ? t2 : null;
var f = (t2) => (0, import_react4.isValidElement)(t2) || d(t2) || p(t2) || u(t2);
function g(t2, e2, n2) {
  void 0 === n2 && (n2 = 300);
  const { scrollHeight: o2, style: s2 } = t2;
  requestAnimationFrame(() => {
    s2.minHeight = "initial", s2.height = o2 + "px", s2.transition = `all ${n2}ms`, requestAnimationFrame(() => {
      s2.height = "0", s2.padding = "0", s2.margin = "0", setTimeout(e2, n2);
    });
  });
}
function h(e2) {
  let { enter: a2, exit: r3, appendPosition: i2 = false, collapse: l2 = true, collapseDuration: c = 300 } = e2;
  return function(e3) {
    let { children: u2, position: d2, preventExitTransition: p2, done: m2, nodeRef: f2, isIn: h2 } = e3;
    const y2 = i2 ? `${a2}--${d2}` : a2, v2 = i2 ? `${r3}--${d2}` : r3, T2 = (0, import_react4.useRef)(0);
    return (0, import_react4.useLayoutEffect)(() => {
      const t2 = f2.current, e4 = y2.split(" "), n2 = (o2) => {
        o2.target === f2.current && (t2.dispatchEvent(new Event("d")), t2.removeEventListener("animationend", n2), t2.removeEventListener("animationcancel", n2), 0 === T2.current && "animationcancel" !== o2.type && t2.classList.remove(...e4));
      };
      t2.classList.add(...e4), t2.addEventListener("animationend", n2), t2.addEventListener("animationcancel", n2);
    }, []), (0, import_react4.useEffect)(() => {
      const t2 = f2.current, e4 = () => {
        t2.removeEventListener("animationend", e4), l2 ? g(t2, m2, c) : m2();
      };
      h2 || (p2 ? e4() : (T2.current = 1, t2.className += ` ${v2}`, t2.addEventListener("animationend", e4)));
    }, [h2]), import_react4.default.createElement(import_react4.default.Fragment, null, u2);
  };
}
function y(t2, e2) {
  return null != t2 ? { content: t2.content, containerId: t2.props.containerId, id: t2.props.toastId, theme: t2.props.theme, type: t2.props.type, data: t2.props.data || {}, isLoading: t2.props.isLoading, icon: t2.props.icon, status: e2 } : {};
}
var v = { list: /* @__PURE__ */ new Map(), emitQueue: /* @__PURE__ */ new Map(), on(t2, e2) {
  return this.list.has(t2) || this.list.set(t2, []), this.list.get(t2).push(e2), this;
}, off(t2, e2) {
  if (e2) {
    const n2 = this.list.get(t2).filter((t3) => t3 !== e2);
    return this.list.set(t2, n2), this;
  }
  return this.list.delete(t2), this;
}, cancelEmit(t2) {
  const e2 = this.emitQueue.get(t2);
  return e2 && (e2.forEach(clearTimeout), this.emitQueue.delete(t2)), this;
}, emit(t2) {
  this.list.has(t2) && this.list.get(t2).forEach((e2) => {
    const n2 = setTimeout(() => {
      e2(...[].slice.call(arguments, 1));
    }, 0);
    this.emitQueue.has(t2) || this.emitQueue.set(t2, []), this.emitQueue.get(t2).push(n2);
  });
} };
var T = (e2) => {
  let _a = e2, { theme: n2, type: o2 } = _a, s2 = __objRest(_a, ["theme", "type"]);
  return import_react4.default.createElement("svg", __spreadValues({ viewBox: "0 0 24 24", width: "100%", height: "100%", fill: "colored" === n2 ? "currentColor" : `var(--toastify-icon-color-${o2})` }, s2));
};
var E = { info: function(e2) {
  return import_react4.default.createElement(T, __spreadValues({}, e2), import_react4.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
}, warning: function(e2) {
  return import_react4.default.createElement(T, __spreadValues({}, e2), import_react4.default.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
}, success: function(e2) {
  return import_react4.default.createElement(T, __spreadValues({}, e2), import_react4.default.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
}, error: function(e2) {
  return import_react4.default.createElement(T, __spreadValues({}, e2), import_react4.default.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
}, spinner: function() {
  return import_react4.default.createElement("div", { className: "Toastify__spinner" });
} };
function C(t2) {
  const [, o2] = (0, import_react4.useReducer)((t3) => t3 + 1, 0), [l2, c] = (0, import_react4.useState)([]), g2 = (0, import_react4.useRef)(null), h2 = (0, import_react4.useRef)(/* @__PURE__ */ new Map()).current, T2 = (t3) => -1 !== l2.indexOf(t3), C2 = (0, import_react4.useRef)({ toastKey: 1, displayedToast: 0, count: 0, queue: [], props: t2, containerId: null, isToastActive: T2, getToast: (t3) => h2.get(t3) }).current;
  function b2(t3) {
    let { containerId: e2 } = t3;
    const { limit: n2 } = C2.props;
    !n2 || e2 && C2.containerId !== e2 || (C2.count -= C2.queue.length, C2.queue = []);
  }
  function I2(t3) {
    c((e2) => null == t3 ? [] : e2.filter((e3) => e3 !== t3));
  }
  function _2() {
    const { toastContent: t3, toastProps: e2, staleId: n2 } = C2.queue.shift();
    O2(t3, e2, n2);
  }
  function L2(t3, n2) {
    let _a = n2, { delay: s2, staleId: r3 } = _a, i2 = __objRest(_a, ["delay", "staleId"]);
    if (!f(t3) || (function(t4) {
      return !g2.current || C2.props.enableMultiContainer && t4.containerId !== C2.props.containerId || h2.has(t4.toastId) && null == t4.updateId;
    })(i2)) return;
    const { toastId: l3, updateId: c2, data: T3 } = i2, { props: b3 } = C2, L3 = () => I2(l3), N2 = null == c2;
    N2 && C2.count++;
    const M2 = __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, b3), { style: b3.toastStyle, key: C2.toastKey++ }), Object.fromEntries(Object.entries(i2).filter((t4) => {
      let [e2, n3] = t4;
      return null != n3;
    }))), { toastId: l3, updateId: c2, data: T3, closeToast: L3, isIn: false, className: m(i2.className || b3.toastClassName), bodyClassName: m(i2.bodyClassName || b3.bodyClassName), progressClassName: m(i2.progressClassName || b3.progressClassName), autoClose: !i2.isLoading && (R2 = i2.autoClose, w2 = b3.autoClose, false === R2 || u(R2) && R2 > 0 ? R2 : w2), deleteToast() {
      const t4 = y(h2.get(l3), "removed");
      h2.delete(l3), v.emit(4, t4);
      const e2 = C2.queue.length;
      if (C2.count = null == l3 ? C2.count - C2.displayedToast : C2.count - 1, C2.count < 0 && (C2.count = 0), e2 > 0) {
        const t5 = null == l3 ? C2.props.limit : 1;
        if (1 === e2 || 1 === t5) C2.displayedToast++, _2();
        else {
          const n3 = t5 > e2 ? e2 : t5;
          C2.displayedToast = n3;
          for (let t6 = 0; t6 < n3; t6++) _2();
        }
      } else o2();
    } });
    var R2, w2;
    M2.iconOut = (function(t4) {
      let { theme: n3, type: o3, isLoading: s3, icon: r4 } = t4, i3 = null;
      const l4 = { theme: n3, type: o3 };
      return false === r4 || (p(r4) ? i3 = r4(l4) : (0, import_react4.isValidElement)(r4) ? i3 = (0, import_react4.cloneElement)(r4, l4) : d(r4) || u(r4) ? i3 = r4 : s3 ? i3 = E.spinner() : ((t5) => t5 in E)(o3) && (i3 = E[o3](l4))), i3;
    })(M2), p(i2.onOpen) && (M2.onOpen = i2.onOpen), p(i2.onClose) && (M2.onClose = i2.onClose), M2.closeButton = b3.closeButton, false === i2.closeButton || f(i2.closeButton) ? M2.closeButton = i2.closeButton : true === i2.closeButton && (M2.closeButton = !f(b3.closeButton) || b3.closeButton);
    let x2 = t3;
    (0, import_react4.isValidElement)(t3) && !d(t3.type) ? x2 = (0, import_react4.cloneElement)(t3, { closeToast: L3, toastProps: M2, data: T3 }) : p(t3) && (x2 = t3({ closeToast: L3, toastProps: M2, data: T3 })), b3.limit && b3.limit > 0 && C2.count > b3.limit && N2 ? C2.queue.push({ toastContent: x2, toastProps: M2, staleId: r3 }) : u(s2) ? setTimeout(() => {
      O2(x2, M2, r3);
    }, s2) : O2(x2, M2, r3);
  }
  function O2(t3, e2, n2) {
    const { toastId: o3 } = e2;
    n2 && h2.delete(n2);
    const s2 = { content: t3, props: e2 };
    h2.set(o3, s2), c((t4) => [...t4, o3].filter((t5) => t5 !== n2)), v.emit(4, y(s2, null == s2.props.updateId ? "added" : "updated"));
  }
  return (0, import_react4.useEffect)(() => (C2.containerId = t2.containerId, v.cancelEmit(3).on(0, L2).on(1, (t3) => g2.current && I2(t3)).on(5, b2).emit(2, C2), () => {
    h2.clear(), v.emit(3, C2);
  }), []), (0, import_react4.useEffect)(() => {
    C2.props = t2, C2.isToastActive = T2, C2.displayedToast = l2.length;
  }), { getToastToRender: function(e2) {
    const n2 = /* @__PURE__ */ new Map(), o3 = Array.from(h2.values());
    return t2.newestOnTop && o3.reverse(), o3.forEach((t3) => {
      const { position: e3 } = t3.props;
      n2.has(e3) || n2.set(e3, []), n2.get(e3).push(t3);
    }), Array.from(n2, (t3) => e2(t3[0], t3[1]));
  }, containerRef: g2, isToastActive: T2 };
}
function b(t2) {
  return t2.targetTouches && t2.targetTouches.length >= 1 ? t2.targetTouches[0].clientX : t2.clientX;
}
function I(t2) {
  return t2.targetTouches && t2.targetTouches.length >= 1 ? t2.targetTouches[0].clientY : t2.clientY;
}
function _(t2) {
  const [o2, a2] = (0, import_react4.useState)(false), [r3, l2] = (0, import_react4.useState)(false), c = (0, import_react4.useRef)(null), u2 = (0, import_react4.useRef)({ start: 0, x: 0, y: 0, delta: 0, removalDistance: 0, canCloseOnClick: true, canDrag: false, boundingRect: null, didMove: false }).current, d2 = (0, import_react4.useRef)(t2), { autoClose: m2, pauseOnHover: f2, closeToast: g2, onClick: h2, closeOnClick: y2 } = t2;
  function v2(e2) {
    if (t2.draggable) {
      "touchstart" === e2.nativeEvent.type && e2.nativeEvent.preventDefault(), u2.didMove = false, document.addEventListener("mousemove", _2), document.addEventListener("mouseup", L2), document.addEventListener("touchmove", _2), document.addEventListener("touchend", L2);
      const n2 = c.current;
      u2.canCloseOnClick = true, u2.canDrag = true, u2.boundingRect = n2.getBoundingClientRect(), n2.style.transition = "", u2.x = b(e2.nativeEvent), u2.y = I(e2.nativeEvent), "x" === t2.draggableDirection ? (u2.start = u2.x, u2.removalDistance = n2.offsetWidth * (t2.draggablePercent / 100)) : (u2.start = u2.y, u2.removalDistance = n2.offsetHeight * (80 === t2.draggablePercent ? 1.5 * t2.draggablePercent : t2.draggablePercent / 100));
    }
  }
  function T2(e2) {
    if (u2.boundingRect) {
      const { top: n2, bottom: o3, left: s2, right: a3 } = u2.boundingRect;
      "touchend" !== e2.nativeEvent.type && t2.pauseOnHover && u2.x >= s2 && u2.x <= a3 && u2.y >= n2 && u2.y <= o3 ? C2() : E2();
    }
  }
  function E2() {
    a2(true);
  }
  function C2() {
    a2(false);
  }
  function _2(e2) {
    const n2 = c.current;
    u2.canDrag && n2 && (u2.didMove = true, o2 && C2(), u2.x = b(e2), u2.y = I(e2), u2.delta = "x" === t2.draggableDirection ? u2.x - u2.start : u2.y - u2.start, u2.start !== u2.x && (u2.canCloseOnClick = false), n2.style.transform = `translate${t2.draggableDirection}(${u2.delta}px)`, n2.style.opacity = "" + (1 - Math.abs(u2.delta / u2.removalDistance)));
  }
  function L2() {
    document.removeEventListener("mousemove", _2), document.removeEventListener("mouseup", L2), document.removeEventListener("touchmove", _2), document.removeEventListener("touchend", L2);
    const e2 = c.current;
    if (u2.canDrag && u2.didMove && e2) {
      if (u2.canDrag = false, Math.abs(u2.delta) > u2.removalDistance) return l2(true), void t2.closeToast();
      e2.style.transition = "transform 0.2s, opacity 0.2s", e2.style.transform = `translate${t2.draggableDirection}(0)`, e2.style.opacity = "1";
    }
  }
  (0, import_react4.useEffect)(() => {
    d2.current = t2;
  }), (0, import_react4.useEffect)(() => (c.current && c.current.addEventListener("d", E2, { once: true }), p(t2.onOpen) && t2.onOpen((0, import_react4.isValidElement)(t2.children) && t2.children.props), () => {
    const t3 = d2.current;
    p(t3.onClose) && t3.onClose((0, import_react4.isValidElement)(t3.children) && t3.children.props);
  }), []), (0, import_react4.useEffect)(() => (t2.pauseOnFocusLoss && (document.hasFocus() || C2(), window.addEventListener("focus", E2), window.addEventListener("blur", C2)), () => {
    t2.pauseOnFocusLoss && (window.removeEventListener("focus", E2), window.removeEventListener("blur", C2));
  }), [t2.pauseOnFocusLoss]);
  const O2 = { onMouseDown: v2, onTouchStart: v2, onMouseUp: T2, onTouchEnd: T2 };
  return m2 && f2 && (O2.onMouseEnter = C2, O2.onMouseLeave = E2), y2 && (O2.onClick = (t3) => {
    h2 && h2(t3), u2.canCloseOnClick && g2();
  }), { playToast: E2, pauseToast: C2, isRunning: o2, preventExitTransition: r3, toastRef: c, eventHandlers: O2 };
}
function L(e2) {
  let { closeToast: n2, theme: o2, ariaLabel: s2 = "close" } = e2;
  return import_react4.default.createElement("button", { className: `Toastify__close-button Toastify__close-button--${o2}`, type: "button", onClick: (t2) => {
    t2.stopPropagation(), n2(t2);
  }, "aria-label": s2 }, import_react4.default.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, import_react4.default.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
}
function O(e2) {
  let { delay: n2, isRunning: o2, closeToast: s2, type: a2 = "default", hide: r3, className: i2, style: l2, controlledProgress: u2, progress: d2, rtl: m2, isIn: f2, theme: g2 } = e2;
  const h2 = r3 || u2 && 0 === d2, y2 = __spreadProps(__spreadValues({}, l2), { animationDuration: `${n2}ms`, animationPlayState: o2 ? "running" : "paused", opacity: h2 ? 0 : 1 });
  u2 && (y2.transform = `scaleX(${d2})`);
  const v2 = clsx_m_default("Toastify__progress-bar", u2 ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g2}`, `Toastify__progress-bar--${a2}`, { "Toastify__progress-bar--rtl": m2 }), T2 = p(i2) ? i2({ rtl: m2, type: a2, defaultClassName: v2 }) : clsx_m_default(v2, i2);
  return import_react4.default.createElement("div", { role: "progressbar", "aria-hidden": h2 ? "true" : "false", "aria-label": "notification timer", className: T2, style: y2, [u2 && d2 >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: u2 && d2 < 1 ? null : () => {
    f2 && s2();
  } });
}
var N = (n2) => {
  const { isRunning: o2, preventExitTransition: s2, toastRef: r3, eventHandlers: i2 } = _(n2), { closeButton: l2, children: u2, autoClose: d2, onClick: m2, type: f2, hideProgressBar: g2, closeToast: h2, transition: y2, position: v2, className: T2, style: E2, bodyClassName: C2, bodyStyle: b2, progressClassName: I2, progressStyle: N2, updateId: M2, role: R2, progress: w2, rtl: x2, toastId: $2, deleteToast: k2, isIn: P2, isLoading: B2, iconOut: D2, closeOnClick: A2, theme: z2 } = n2, F2 = clsx_m_default("Toastify__toast", `Toastify__toast-theme--${z2}`, `Toastify__toast--${f2}`, { "Toastify__toast--rtl": x2 }, { "Toastify__toast--close-on-click": A2 }), H2 = p(T2) ? T2({ rtl: x2, position: v2, type: f2, defaultClassName: F2 }) : clsx_m_default(F2, T2), S2 = !!w2 || !d2, q2 = { closeToast: h2, type: f2, theme: z2 };
  let Q2 = null;
  return false === l2 || (Q2 = p(l2) ? l2(q2) : (0, import_react4.isValidElement)(l2) ? (0, import_react4.cloneElement)(l2, q2) : L(q2)), import_react4.default.createElement(y2, { isIn: P2, done: k2, position: v2, preventExitTransition: s2, nodeRef: r3 }, import_react4.default.createElement("div", __spreadProps(__spreadValues({ id: $2, onClick: m2, className: H2 }, i2), { style: E2, ref: r3 }), import_react4.default.createElement("div", __spreadProps(__spreadValues({}, P2 && { role: R2 }), { className: p(C2) ? C2({ type: f2 }) : clsx_m_default("Toastify__toast-body", C2), style: b2 }), null != D2 && import_react4.default.createElement("div", { className: clsx_m_default("Toastify__toast-icon", { "Toastify--animate-icon Toastify__zoom-enter": !B2 }) }, D2), import_react4.default.createElement("div", null, u2)), Q2, import_react4.default.createElement(O, __spreadProps(__spreadValues({}, M2 && !S2 ? { key: `pb-${M2}` } : {}), { rtl: x2, theme: z2, delay: d2, isRunning: o2, isIn: P2, closeToast: h2, hide: g2, type: f2, style: N2, className: I2, controlledProgress: S2, progress: w2 || 0 }))));
};
var M = function(t2, e2) {
  return void 0 === e2 && (e2 = false), { enter: `Toastify--animate Toastify__${t2}-enter`, exit: `Toastify--animate Toastify__${t2}-exit`, appendPosition: e2 };
};
var R = h(M("bounce", true));
var w = h(M("slide", true));
var x = h(M("zoom"));
var $ = h(M("flip"));
var k = (0, import_react4.forwardRef)((e2, n2) => {
  const { getToastToRender: o2, containerRef: a2, isToastActive: r3 } = C(e2), { className: i2, style: l2, rtl: u2, containerId: d2 } = e2;
  function f2(t2) {
    const e3 = clsx_m_default("Toastify__toast-container", `Toastify__toast-container--${t2}`, { "Toastify__toast-container--rtl": u2 });
    return p(i2) ? i2({ position: t2, rtl: u2, defaultClassName: e3 }) : clsx_m_default(e3, m(i2));
  }
  return (0, import_react4.useEffect)(() => {
    n2 && (n2.current = a2.current);
  }, []), import_react4.default.createElement("div", { ref: a2, className: "Toastify", id: d2 }, o2((e3, n3) => {
    const o3 = n3.length ? __spreadValues({}, l2) : __spreadProps(__spreadValues({}, l2), { pointerEvents: "none" });
    return import_react4.default.createElement("div", { className: f2(e3), style: o3, key: `container-${e3}` }, n3.map((e4, o4) => {
      let { content: s2, props: a3 } = e4;
      return import_react4.default.createElement(N, __spreadProps(__spreadValues({}, a3), { isIn: r3(a3.toastId), style: __spreadProps(__spreadValues({}, a3.style), { "--nth": o4 + 1, "--len": n3.length }), key: `toast-${a3.key}` }), s2);
    }));
  }));
});
k.displayName = "ToastContainer", k.defaultProps = { position: "top-right", transition: R, autoClose: 5e3, closeButton: L, pauseOnHover: true, pauseOnFocusLoss: true, closeOnClick: true, draggable: true, draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light" };
var P;
var B = /* @__PURE__ */ new Map();
var D = [];
var A = 1;
function z() {
  return "" + A++;
}
function F(t2) {
  return t2 && (d(t2.toastId) || u(t2.toastId)) ? t2.toastId : z();
}
function H(t2, e2) {
  return B.size > 0 ? v.emit(0, t2, e2) : D.push({ content: t2, options: e2 }), e2.toastId;
}
function S(t2, e2) {
  return __spreadProps(__spreadValues({}, e2), { type: e2 && e2.type || t2, toastId: F(e2) });
}
function q(t2) {
  return (e2, n2) => H(e2, S(t2, n2));
}
function Q(t2, e2) {
  return H(t2, S("default", e2));
}
Q.loading = (t2, e2) => H(t2, S("default", __spreadValues({ isLoading: true, autoClose: false, closeOnClick: false, closeButton: false, draggable: false }, e2))), Q.promise = function(t2, e2, n2) {
  let o2, { pending: s2, error: a2, success: r3 } = e2;
  s2 && (o2 = d(s2) ? Q.loading(s2, n2) : Q.loading(s2.render, __spreadValues(__spreadValues({}, n2), s2)));
  const i2 = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, l2 = (t3, e3, s3) => {
    if (null == e3) return void Q.dismiss(o2);
    const a3 = __spreadProps(__spreadValues(__spreadValues({ type: t3 }, i2), n2), { data: s3 }), r4 = d(e3) ? { render: e3 } : e3;
    return o2 ? Q.update(o2, __spreadValues(__spreadValues({}, a3), r4)) : Q(r4.render, __spreadValues(__spreadValues({}, a3), r4)), s3;
  }, c = p(t2) ? t2() : t2;
  return c.then((t3) => l2("success", r3, t3)).catch((t3) => l2("error", a2, t3)), c;
}, Q.success = q("success"), Q.info = q("info"), Q.error = q("error"), Q.warning = q("warning"), Q.warn = Q.warning, Q.dark = (t2, e2) => H(t2, S("default", __spreadValues({ theme: "dark" }, e2))), Q.dismiss = (t2) => {
  B.size > 0 ? v.emit(1, t2) : D = D.filter((e2) => null != t2 && e2.options.toastId !== t2);
}, Q.clearWaitingQueue = function(t2) {
  return void 0 === t2 && (t2 = {}), v.emit(5, t2);
}, Q.isActive = (t2) => {
  let e2 = false;
  return B.forEach((n2) => {
    n2.isToastActive && n2.isToastActive(t2) && (e2 = true);
  }), e2;
}, Q.update = function(t2, e2) {
  void 0 === e2 && (e2 = {}), setTimeout(() => {
    const n2 = (function(t3, e3) {
      let { containerId: n3 } = e3;
      const o2 = B.get(n3 || P);
      return o2 && o2.getToast(t3);
    })(t2, e2);
    if (n2) {
      const { props: o2, content: s2 } = n2, a2 = __spreadProps(__spreadValues(__spreadValues({ delay: 100 }, o2), e2), { toastId: e2.toastId || t2, updateId: z() });
      a2.toastId !== t2 && (a2.staleId = t2);
      const r3 = a2.render || s2;
      delete a2.render, H(r3, a2);
    }
  }, 0);
}, Q.done = (t2) => {
  Q.update(t2, { progress: 1 });
}, Q.onChange = (t2) => (v.on(4, t2), () => {
  v.off(4, t2);
}), Q.POSITION = { TOP_LEFT: "top-left", TOP_RIGHT: "top-right", TOP_CENTER: "top-center", BOTTOM_LEFT: "bottom-left", BOTTOM_RIGHT: "bottom-right", BOTTOM_CENTER: "bottom-center" }, Q.TYPE = { INFO: "info", SUCCESS: "success", WARNING: "warning", ERROR: "error", DEFAULT: "default" }, v.on(2, (t2) => {
  P = t2.containerId || t2, B.set(P, t2), D.forEach((t3) => {
    v.emit(0, t3.content, t3.options);
  }), D = [];
}).on(3, (t2) => {
  B.delete(t2.containerId || t2), 0 === B.size && v.off(0).off(1).off(5);
});

// trabecula/utils/client/toast.tsx
var import_material2 = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var toast = {
  error: Q.error,
  info: Q.info,
  success: Q.success,
  warn: Q.warn
};
var STATUSES = {
  default: {
    color: colors.custom.blue,
    icon: "CircleNotifications"
  },
  error: {
    color: colors.custom.red,
    icon: "Error"
  },
  info: {
    color: colors.custom.blue,
    icon: "Info"
  },
  success: {
    color: colors.custom.green,
    icon: "CheckCircle"
  },
  warning: {
    color: colors.custom.orange,
    icon: "NewReleases"
  }
};
var useClasses = makeClasses({
  toast: {
    "& .Toastify__toast": {
      border: "none",
      color: colors.custom.white,
      "&-body": {
        display: "flex",
        alignItems: "center",
        fontFamily: "Roboto",
        fontSize: "1.1em",
        fontWeight: 400,
        whiteSpace: "break-spaces"
      },
      "&-icon": { marginRight: "1em" },
      "&--default": { backgroundColor: STATUSES.default.color },
      "&--error": { backgroundColor: STATUSES.error.color },
      "&--info": { backgroundColor: STATUSES.info.color },
      "&--success": { backgroundColor: STATUSES.success.color },
      "&--warning": { backgroundColor: STATUSES.warning.color },
      "& .Toastify__close-button": {
        margin: 0,
        lineHeight: 1,
        color: colors.custom.lightGrey,
        "&:hover": {
          backgroundColor: "transparent",
          color: colors.custom.red
        }
      }
    }
  }
});

// trabecula/components/buttons/button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Button = (_a) => {
  var _b = _a, {
    borderRadiuses = { all: "0.3rem" },
    boxShadow,
    children,
    className,
    color = colors.custom.grey,
    colorOnHover,
    endNode,
    fontSize = "1.15em",
    fontWeight = 400,
    href,
    icon,
    iconProps,
    iconRight,
    iconSize = "1.15em",
    justify = "center",
    loading = false,
    margins,
    onClick,
    outlined = false,
    outlineFill = "transparent",
    padding,
    size: size2 = "small",
    startNode,
    text,
    textColor,
    textTransform = "none",
    tooltip,
    tooltipProps,
    type = "button",
    width
  } = _b, props = __objRest(_b, [
    "borderRadiuses",
    "boxShadow",
    "children",
    "className",
    "color",
    "colorOnHover",
    "endNode",
    "fontSize",
    "fontWeight",
    "href",
    "icon",
    "iconProps",
    "iconRight",
    "iconSize",
    "justify",
    "loading",
    "margins",
    "onClick",
    "outlined",
    "outlineFill",
    "padding",
    "size",
    "startNode",
    "text",
    "textColor",
    "textTransform",
    "tooltip",
    "tooltipProps",
    "type",
    "width"
  ]);
  const { css, cx } = useClasses2({
    borderRadiuses,
    boxShadow,
    color,
    colorOnHover,
    isLink: type === "link",
    justify,
    margins,
    outlined,
    outlineFill,
    padding: __spreadValues({ all: !(text == null ? void 0 : text.length) ? "0.4em" : "0.4em 0.8em" }, padding),
    textColor,
    textTransform,
    width
  });
  const handleClick = (event) => {
    onClick == null ? void 0 : onClick(event);
    if (href) window.open(href, "_blank");
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TooltipWrapper, __spreadProps(__spreadValues({}, { tooltip, tooltipProps }), { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_material3.Button,
    __spreadProps(__spreadValues(__spreadValues({}, props), { size: size2 }), {
      onClick: handleClick,
      variant: "contained",
      className: cx(css.root, className),
      children: [
        startNode,
        icon && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(View, { margins: text || iconRight ? { right: "0.3em" } : void 0, children: !loading ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, __spreadValues({ name: icon, size: iconSize, color: textColor }, iconProps)) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material3.CircularProgress, { color: "inherit", size: iconSize }) }),
        text && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          Text,
          __spreadProps(__spreadValues({}, { fontSize, fontWeight, tooltip, tooltipProps }), {
            color: textColor,
            className: cx(css.text, className),
            children: text
          })
        ),
        children,
        iconRight && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(View, { margins: text || icon ? { left: "0.3em" } : void 0, children: !loading ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { name: iconRight, size: iconSize }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material3.CircularProgress, { color: "inherit", size: iconSize }) }),
        endNode
      ]
    })
  ) }));
};
var useClasses2 = makeClasses((props) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  return {
    root: __spreadProps(__spreadValues(__spreadValues({
      display: "flex",
      flexDirection: "row",
      justifyContent: props.justify,
      alignItems: "center",
      border: `1px solid ${props.outlined ? props.color : "transparent"}`
    }, makeBorderRadiuses(props.borderRadiuses)), makeMargins(props.margins)), {
      padding: (_a = props.padding) == null ? void 0 : _a.all,
      paddingTop: (_c = (_b = props.padding) == null ? void 0 : _b.top) != null ? _c : props.isLink ? 0 : void 0,
      paddingBottom: (_e = (_d = props.padding) == null ? void 0 : _d.bottom) != null ? _e : props.isLink ? 0 : void 0,
      paddingRight: (_g = (_f = props.padding) == null ? void 0 : _f.right) != null ? _g : props.isLink ? 0 : void 0,
      paddingLeft: (_i = (_h = props.padding) == null ? void 0 : _h.left) != null ? _i : props.isLink ? 0 : void 0,
      minWidth: "fit-content",
      width: props.width,
      backgroundColor: props.isLink ? "transparent" : props.outlined ? props.outlineFill : props.color,
      boxShadow: (_j = props.boxShadow) != null ? _j : "none",
      color: props.outlined ? props.color : (_k = props.textColor) != null ? _k : props.isLink ? colors.custom.lightBlue : props.outlined ? props.color : colors.custom.white,
      textTransform: props.textTransform,
      "&:hover": {
        background: props.isLink ? "transparent" : props.colorOnHover || (0, import_color2.default)(props.outlined ? props.outlineFill : props.color).lighten(0.1).string(),
        boxShadow: props.isLink ? "none" : void 0,
        textDecoration: props.isLink ? "underline" : void 0
      }
    }),
    text: {
      lineHeight: 1.1,
      overflow: "hidden",
      textOverflow: "ellipsis",
      transition: "all 100ms ease-in-out",
      textTransform: props.textTransform
    }
  };
});

// trabecula/components/buttons/color-picker.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var ColorPicker = Comp(
  (_a) => {
    var _b = _a, {
      color = colors.custom.black,
      label = "Color",
      menuProps = {},
      noIcon = false,
      setValue,
      swatches = [],
      value,
      viewProps = {},
      width = "fit-content"
    } = _b, buttonProps = __objRest(_b, [
      "color",
      "label",
      "menuProps",
      "noIcon",
      "setValue",
      "swatches",
      "value",
      "viewProps",
      "width"
    ]);
    const handleNoColor = () => setValue(null);
    const renderButton = (onOpen) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      Button,
      __spreadProps(__spreadValues({
        onClick: onOpen,
        color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width
      }, buttonProps), {
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(View, { row: true, spacing: "0.5rem", align: "center", children: [
          noIcon ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(View, {}) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "Palette", size: "1.15em" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Text, { lineHeight: 1, children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { name: "Circle", color: value === null ? "transparent" : value })
        ] })
      })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(MenuButton, __spreadProps(__spreadValues({ button: renderButton, keepMounted: false }, menuProps), { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Button,
        {
          text: "No Color",
          icon: "Close",
          onClick: handleNoColor,
          color: value === null ? colors.custom.black : colors.background,
          textColor: value === null ? colors.custom.white : colors.custom.lightGrey
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(View, { column: true, children: swatches.map((swatch, i2) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(View, { row: true, children: swatch.map((c) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        IconButton,
        {
          name: "Circle",
          iconProps: { color: c, size: "1.4em" },
          sx: { border: `3px solid ${value === c ? c : "transparent"}` },
          onClick: () => setValue(c)
        },
        c
      )) }, i2)) })
    ] })) }));
  }
);

// trabecula/components/buttons/icon.tsx
var import_material4 = require("@mui/material");
var import_jsx_runtime4 = require("react/jsx-runtime");
var IconButton = (_a) => {
  var _b = _a, {
    children,
    className,
    disabled,
    iconProps = {},
    margins,
    name,
    onClick,
    size: size2,
    tooltip,
    tooltipProps
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "disabled",
    "iconProps",
    "margins",
    "name",
    "onClick",
    "size",
    "tooltip",
    "tooltipProps"
  ]);
  const { css, cx } = useClasses3({ disabled, margins });
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TooltipWrapper, __spreadProps(__spreadValues({}, { tooltip, tooltipProps }), { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    import_material4.IconButton,
    __spreadProps(__spreadValues(__spreadValues({}, props), { disabled, onClick, size: size2 }), {
      className: cx(css.root, className),
      children: [
        name && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, __spreadProps(__spreadValues({}, iconProps), { name })),
        children
      ]
    })
  ) }));
};
var useClasses3 = makeClasses((props) => ({
  root: __spreadProps(__spreadValues({}, makeMargins(props.margins)), {
    opacity: props.disabled ? 0.5 : 1,
    transition: "all 100ms ease-in-out"
  })
}));

// trabecula/components/buttons/icon-picker.tsx
var import_react5 = require("react");
var import_material5 = require("@mui/material");

// trabecula/_generated/client/icons.ts
var MUI_ICONS = [
  "10k",
  "10mp",
  "11mp",
  "123",
  "12mp",
  "13mp",
  "14mp",
  "15mp",
  "16mp",
  "17mp",
  "18UpRating",
  "18mp",
  "19mp",
  "1k",
  "1kPlus",
  "1xMobiledata",
  "20mp",
  "21mp",
  "22mp",
  "23mp",
  "24mp",
  "2k",
  "2kPlus",
  "2mp",
  "30fps",
  "30fpsSelect",
  "360",
  "3dRotation",
  "3gMobiledata",
  "3k",
  "3kPlus",
  "3mp",
  "3p",
  "4gMobiledata",
  "4gPlusMobiledata",
  "4k",
  "4kPlus",
  "4mp",
  "5g",
  "5k",
  "5kPlus",
  "5mp",
  "60fps",
  "60fpsSelect",
  "6FtApart",
  "6k",
  "6kPlus",
  "6mp",
  "7k",
  "7kPlus",
  "7mp",
  "8k",
  "8kPlus",
  "8mp",
  "9k",
  "9kPlus",
  "9mp",
  "Abc",
  "AcUnit",
  "AccessAlarm",
  "AccessAlarms",
  "AccessTime",
  "AccessTimeFilled",
  "Accessibility",
  "AccessibilityNew",
  "Accessible",
  "AccessibleForward",
  "AccountBalance",
  "AccountBalanceWallet",
  "AccountBox",
  "AccountCircle",
  "AccountTree",
  "AdUnits",
  "Adb",
  "Add",
  "AddAPhoto",
  "AddAlarm",
  "AddAlert",
  "AddBox",
  "AddBusiness",
  "AddCard",
  "AddChart",
  "AddCircle",
  "AddCircleOutline",
  "AddComment",
  "AddHome",
  "AddHomeWork",
  "AddIcCall",
  "AddLink",
  "AddLocation",
  "AddLocationAlt",
  "AddModerator",
  "AddPhotoAlternate",
  "AddReaction",
  "AddRoad",
  "AddShoppingCart",
  "AddTask",
  "AddToDrive",
  "AddToHomeScreen",
  "AddToPhotos",
  "AddToQueue",
  "Addchart",
  "AdfScanner",
  "Adjust",
  "AdminPanelSettings",
  "Adobe",
  "AdsClick",
  "Agriculture",
  "Air",
  "AirlineSeatFlat",
  "AirlineSeatFlatAngled",
  "AirlineSeatIndividualSuite",
  "AirlineSeatLegroomExtra",
  "AirlineSeatLegroomNormal",
  "AirlineSeatLegroomReduced",
  "AirlineSeatReclineExtra",
  "AirlineSeatReclineNormal",
  "AirlineStops",
  "Airlines",
  "AirplaneTicket",
  "AirplanemodeActive",
  "AirplanemodeInactive",
  "AirplanemodeOff",
  "AirplanemodeOn",
  "Airplay",
  "AirportShuttle",
  "Alarm",
  "AlarmAdd",
  "AlarmOff",
  "AlarmOn",
  "Album",
  "AlignHorizontalCenter",
  "AlignHorizontalLeft",
  "AlignHorizontalRight",
  "AlignVerticalBottom",
  "AlignVerticalCenter",
  "AlignVerticalTop",
  "AllInbox",
  "AllInclusive",
  "AllOut",
  "AltRoute",
  "AlternateEmail",
  "AmpStories",
  "Analytics",
  "Anchor",
  "Android",
  "Animation",
  "Announcement",
  "Aod",
  "Apartment",
  "Api",
  "AppBlocking",
  "AppRegistration",
  "AppSettingsAlt",
  "AppShortcut",
  "Apple",
  "Approval",
  "Apps",
  "AppsOutage",
  "Architecture",
  "Archive",
  "AreaChart",
  "ArrowBack",
  "ArrowBackIos",
  "ArrowBackIosNew",
  "ArrowCircleDown",
  "ArrowCircleLeft",
  "ArrowCircleRight",
  "ArrowCircleUp",
  "ArrowDownward",
  "ArrowDropDown",
  "ArrowDropDownCircle",
  "ArrowDropUp",
  "ArrowForward",
  "ArrowForwardIos",
  "ArrowLeft",
  "ArrowOutward",
  "ArrowRight",
  "ArrowRightAlt",
  "ArrowUpward",
  "ArtTrack",
  "Article",
  "AspectRatio",
  "Assessment",
  "Assignment",
  "AssignmentInd",
  "AssignmentLate",
  "AssignmentReturn",
  "AssignmentReturned",
  "AssignmentTurnedIn",
  "AssistWalker",
  "Assistant",
  "AssistantDirection",
  "AssistantPhoto",
  "AssuredWorkload",
  "Atm",
  "AttachEmail",
  "AttachFile",
  "AttachMoney",
  "Attachment",
  "Attractions",
  "Attribution",
  "AudioFile",
  "Audiotrack",
  "AutoAwesome",
  "AutoAwesomeMosaic",
  "AutoAwesomeMotion",
  "AutoDelete",
  "AutoFixHigh",
  "AutoFixNormal",
  "AutoFixOff",
  "AutoGraph",
  "AutoMode",
  "AutoStories",
  "AutofpsSelect",
  "Autorenew",
  "AvTimer",
  "BabyChangingStation",
  "BackHand",
  "Backpack",
  "Backspace",
  "Backup",
  "BackupTable",
  "Badge",
  "BakeryDining",
  "Balance",
  "Balcony",
  "Ballot",
  "BarChart",
  "BatchPrediction",
  "Bathroom",
  "Bathtub",
  "Battery0Bar",
  "Battery1Bar",
  "Battery2Bar",
  "Battery3Bar",
  "Battery4Bar",
  "Battery5Bar",
  "Battery6Bar",
  "BatteryAlert",
  "BatteryChargingFull",
  "BatteryFull",
  "BatterySaver",
  "BatteryStd",
  "BatteryUnknown",
  "BeachAccess",
  "Bed",
  "BedroomBaby",
  "BedroomChild",
  "BedroomParent",
  "Bedtime",
  "BedtimeOff",
  "Beenhere",
  "Bento",
  "BikeScooter",
  "Biotech",
  "Blender",
  "Blind",
  "Blinds",
  "BlindsClosed",
  "Block",
  "Bloodtype",
  "Bluetooth",
  "BluetoothAudio",
  "BluetoothConnected",
  "BluetoothDisabled",
  "BluetoothDrive",
  "BluetoothSearching",
  "BlurCircular",
  "BlurLinear",
  "BlurOff",
  "BlurOn",
  "Bolt",
  "Book",
  "BookOnline",
  "Bookmark",
  "BookmarkAdd",
  "BookmarkAdded",
  "BookmarkBorder",
  "BookmarkOutline",
  "BookmarkRemove",
  "Bookmarks",
  "BorderAll",
  "BorderBottom",
  "BorderClear",
  "BorderColor",
  "BorderHorizontal",
  "BorderInner",
  "BorderLeft",
  "BorderOuter",
  "BorderRight",
  "BorderStyle",
  "BorderTop",
  "BorderVertical",
  "Boy",
  "BrandingWatermark",
  "BreakfastDining",
  "Brightness1",
  "Brightness2",
  "Brightness3",
  "Brightness4",
  "Brightness5",
  "Brightness6",
  "Brightness7",
  "BrightnessAuto",
  "BrightnessHigh",
  "BrightnessLow",
  "BrightnessMedium",
  "BroadcastOnHome",
  "BroadcastOnPersonal",
  "BrokenImage",
  "BrowseGallery",
  "BrowserNotSupported",
  "BrowserUpdated",
  "BrunchDining",
  "Brush",
  "BubbleChart",
  "BugReport",
  "Build",
  "BuildCircle",
  "Bungalow",
  "BurstMode",
  "BusAlert",
  "Business",
  "BusinessCenter",
  "Cabin",
  "Cable",
  "Cached",
  "Cake",
  "Calculate",
  "CalendarMonth",
  "CalendarToday",
  "CalendarViewDay",
  "CalendarViewMonth",
  "CalendarViewWeek",
  "Call",
  "CallEnd",
  "CallMade",
  "CallMerge",
  "CallMissed",
  "CallMissedOutgoing",
  "CallReceived",
  "CallSplit",
  "CallToAction",
  "Camera",
  "CameraAlt",
  "CameraEnhance",
  "CameraFront",
  "CameraIndoor",
  "CameraOutdoor",
  "CameraRear",
  "CameraRoll",
  "Cameraswitch",
  "Campaign",
  "Cancel",
  "CancelPresentation",
  "CancelScheduleSend",
  "CandlestickChart",
  "CarCrash",
  "CarRental",
  "CarRepair",
  "CardGiftcard",
  "CardMembership",
  "CardTravel",
  "Carpenter",
  "Cases",
  "Casino",
  "Cast",
  "CastConnected",
  "CastForEducation",
  "Castle",
  "CatchingPokemon",
  "Category",
  "Celebration",
  "CellTower",
  "CellWifi",
  "CenterFocusStrong",
  "CenterFocusWeak",
  "Chair",
  "ChairAlt",
  "Chalet",
  "ChangeCircle",
  "ChangeHistory",
  "ChargingStation",
  "Chat",
  "ChatBubble",
  "ChatBubbleOutline",
  "Check",
  "CheckBox",
  "CheckBoxOutlineBlank",
  "CheckCircle",
  "CheckCircleOutline",
  "Checklist",
  "ChecklistRtl",
  "Checkroom",
  "ChevronLeft",
  "ChevronRight",
  "ChildCare",
  "ChildFriendly",
  "ChromeReaderMode",
  "Church",
  "Circle",
  "CircleNotifications",
  "Class",
  "CleanHands",
  "CleaningServices",
  "Clear",
  "ClearAll",
  "Close",
  "CloseFullscreen",
  "ClosedCaption",
  "ClosedCaptionDisabled",
  "ClosedCaptionOff",
  "Cloud",
  "CloudCircle",
  "CloudDone",
  "CloudDownload",
  "CloudOff",
  "CloudQueue",
  "CloudSync",
  "CloudUpload",
  "Co2",
  "CoPresent",
  "Code",
  "CodeOff",
  "Coffee",
  "CoffeeMaker",
  "Collections",
  "CollectionsBookmark",
  "ColorLens",
  "Colorize",
  "Comment",
  "CommentBank",
  "CommentsDisabled",
  "Commit",
  "Commute",
  "Compare",
  "CompareArrows",
  "CompassCalibration",
  "Compost",
  "Compress",
  "Computer",
  "ConfirmationNum",
  "ConfirmationNumber",
  "ConnectWithoutContact",
  "ConnectedTv",
  "ConnectingAirports",
  "Construction",
  "ContactEmergency",
  "ContactMail",
  "ContactPage",
  "ContactPhone",
  "ContactSupport",
  "Contactless",
  "Contacts",
  "ContentCopy",
  "ContentCut",
  "ContentPaste",
  "ContentPasteGo",
  "ContentPasteOff",
  "ContentPasteSearch",
  "Contrast",
  "ControlCamera",
  "ControlPoint",
  "ControlPointDuplicate",
  "Cookie",
  "Copy",
  "CopyAll",
  "Copyright",
  "Coronavirus",
  "CorporateFare",
  "Cottage",
  "Countertops",
  "Create",
  "CreateNewFolder",
  "CreditCard",
  "CreditCardOff",
  "CreditScore",
  "Crib",
  "CrisisAlert",
  "Crop",
  "Crop169",
  "Crop32",
  "Crop54",
  "Crop75",
  "CropDin",
  "CropFree",
  "CropLandscape",
  "CropOriginal",
  "CropPortrait",
  "CropRotate",
  "CropSquare",
  "CrueltyFree",
  "Css",
  "CurrencyBitcoin",
  "CurrencyExchange",
  "CurrencyFranc",
  "CurrencyLira",
  "CurrencyPound",
  "CurrencyRuble",
  "CurrencyRupee",
  "CurrencyYen",
  "CurrencyYuan",
  "Curtains",
  "CurtainsClosed",
  "Cut",
  "Cyclone",
  "Dangerous",
  "DarkMode",
  "Dashboard",
  "DashboardCustomize",
  "DataArray",
  "DataExploration",
  "DataObject",
  "DataSaverOff",
  "DataSaverOn",
  "DataThresholding",
  "DataUsage",
  "Dataset",
  "DatasetLinked",
  "DateRange",
  "Deblur",
  "Deck",
  "Dehaze",
  "Delete",
  "DeleteForever",
  "DeleteOutline",
  "DeleteSweep",
  "DeliveryDining",
  "DensityLarge",
  "DensityMedium",
  "DensitySmall",
  "DepartureBoard",
  "Description",
  "Deselect",
  "DesignServices",
  "Desk",
  "DesktopAccessDisabled",
  "DesktopMac",
  "DesktopWindows",
  "Details",
  "DeveloperBoard",
  "DeveloperBoardOff",
  "DeveloperMode",
  "DeviceHub",
  "DeviceThermostat",
  "DeviceUnknown",
  "Devices",
  "DevicesFold",
  "DevicesOther",
  "DialerSip",
  "Dialpad",
  "Diamond",
  "Difference",
  "Dining",
  "DinnerDining",
  "Directions",
  "DirectionsBike",
  "DirectionsBoat",
  "DirectionsBoatFilled",
  "DirectionsBus",
  "DirectionsBusFilled",
  "DirectionsCar",
  "DirectionsCarFilled",
  "DirectionsFerry",
  "DirectionsOff",
  "DirectionsRailway",
  "DirectionsRailwayFilled",
  "DirectionsRun",
  "DirectionsSubway",
  "DirectionsSubwayFilled",
  "DirectionsTrain",
  "DirectionsTransit",
  "DirectionsTransitFilled",
  "DirectionsWalk",
  "DirtyLens",
  "DisabledByDefault",
  "DisabledVisible",
  "DiscFull",
  "Discord",
  "Discount",
  "DisplaySettings",
  "Diversity1",
  "Diversity2",
  "Diversity3",
  "DndForwardslash",
  "Dns",
  "DoDisturb",
  "DoDisturbAlt",
  "DoDisturbOff",
  "DoDisturbOn",
  "DoNotDisturb",
  "DoNotDisturbAlt",
  "DoNotDisturbOff",
  "DoNotDisturbOn",
  "DoNotDisturbOnTotalSilence",
  "DoNotStep",
  "DoNotTouch",
  "Dock",
  "DocumentScanner",
  "Domain",
  "DomainAdd",
  "DomainDisabled",
  "DomainVerification",
  "Done",
  "DoneAll",
  "DoneOutline",
  "DonutLarge",
  "DonutSmall",
  "DoorBack",
  "DoorFront",
  "DoorSliding",
  "Doorbell",
  "DoubleArrow",
  "DownhillSkiing",
  "Download",
  "DownloadDone",
  "DownloadForOffline",
  "Downloading",
  "Drafts",
  "DragHandle",
  "DragIndicator",
  "Draw",
  "DriveEta",
  "DriveFileMove",
  "DriveFileMoveRtl",
  "DriveFileRenameOutline",
  "DriveFolderUpload",
  "Dry",
  "DryCleaning",
  "Duo",
  "Dvr",
  "DynamicFeed",
  "DynamicForm",
  "EMobiledata",
  "Earbuds",
  "EarbudsBattery",
  "East",
  "Eco",
  "EdgesensorHigh",
  "EdgesensorLow",
  "Edit",
  "EditAttributes",
  "EditCalendar",
  "EditLocation",
  "EditLocationAlt",
  "EditNote",
  "EditNotifications",
  "EditOff",
  "EditRoad",
  "Egg",
  "EggAlt",
  "Eject",
  "Elderly",
  "ElderlyWoman",
  "ElectricBike",
  "ElectricBolt",
  "ElectricCar",
  "ElectricMeter",
  "ElectricMoped",
  "ElectricRickshaw",
  "ElectricScooter",
  "ElectricalServices",
  "Elevator",
  "Email",
  "Emergency",
  "EmergencyRecording",
  "EmergencyShare",
  "EmojiEmotions",
  "EmojiEvents",
  "EmojiFlags",
  "EmojiFoodBeverage",
  "EmojiNature",
  "EmojiObjects",
  "EmojiPeople",
  "EmojiSymbols",
  "EmojiTransportation",
  "EnergySavingsLeaf",
  "Engineering",
  "EnhancePhotoTranslate",
  "EnhancedEncryption",
  "Equalizer",
  "Error",
  "ErrorOutline",
  "Escalator",
  "EscalatorWarning",
  "Euro",
  "EuroSymbol",
  "EvStation",
  "Event",
  "EventAvailable",
  "EventBusy",
  "EventNote",
  "EventRepeat",
  "EventSeat",
  "ExitToApp",
  "Expand",
  "ExpandCircleDown",
  "ExpandLess",
  "ExpandMore",
  "Explicit",
  "Explore",
  "ExploreOff",
  "Exposure",
  "ExposureMinus1",
  "ExposureMinus2",
  "ExposureNeg1",
  "ExposureNeg2",
  "ExposurePlus1",
  "ExposurePlus2",
  "ExposureZero",
  "Extension",
  "ExtensionOff",
  "Face",
  "Face2",
  "Face3",
  "Face4",
  "Face5",
  "Face6",
  "FaceRetouchingNatural",
  "FaceRetouchingOff",
  "FaceUnlock",
  "Facebook",
  "FactCheck",
  "Factory",
  "FamilyRestroom",
  "FastForward",
  "FastRewind",
  "Fastfood",
  "Favorite",
  "FavoriteBorder",
  "FavoriteOutline",
  "Fax",
  "FeaturedPlayList",
  "FeaturedVideo",
  "Feed",
  "Feedback",
  "Female",
  "Fence",
  "Festival",
  "FiberDvr",
  "FiberManualRecord",
  "FiberNew",
  "FiberPin",
  "FiberSmartRecord",
  "FileCopy",
  "FileDownload",
  "FileDownloadDone",
  "FileDownloadOff",
  "FileOpen",
  "FilePresent",
  "FileUpload",
  "Filter",
  "Filter1",
  "Filter2",
  "Filter3",
  "Filter4",
  "Filter5",
  "Filter6",
  "Filter7",
  "Filter8",
  "Filter9",
  "Filter9Plus",
  "FilterAlt",
  "FilterAltOff",
  "FilterBAndW",
  "FilterCenterFocus",
  "FilterDrama",
  "FilterFrames",
  "FilterHdr",
  "FilterList",
  "FilterListOff",
  "FilterNone",
  "FilterTiltShift",
  "FilterVintage",
  "FindInPage",
  "FindReplace",
  "Fingerprint",
  "FireExtinguisher",
  "FireHydrantAlt",
  "FireTruck",
  "Fireplace",
  "FirstPage",
  "FitScreen",
  "Fitbit",
  "FitnessCenter",
  "Flag",
  "FlagCircle",
  "Flaky",
  "Flare",
  "FlashAuto",
  "FlashOff",
  "FlashOn",
  "FlashlightOff",
  "FlashlightOn",
  "Flatware",
  "Flight",
  "FlightClass",
  "FlightLand",
  "FlightTakeoff",
  "Flip",
  "FlipCameraAndroid",
  "FlipCameraIos",
  "FlipToBack",
  "FlipToFront",
  "Flood",
  "Flourescent",
  "Fluorescent",
  "FlutterDash",
  "FmdBad",
  "FmdGood",
  "Folder",
  "FolderCopy",
  "FolderDelete",
  "FolderOff",
  "FolderOpen",
  "FolderShared",
  "FolderSpecial",
  "FolderZip",
  "FollowTheSigns",
  "FontDownload",
  "FontDownloadOff",
  "FoodBank",
  "Forest",
  "ForkLeft",
  "ForkRight",
  "FormatAlignCenter",
  "FormatAlignJustify",
  "FormatAlignLeft",
  "FormatAlignRight",
  "FormatBold",
  "FormatClear",
  "FormatColorFill",
  "FormatColorReset",
  "FormatColorText",
  "FormatIndentDecrease",
  "FormatIndentIncrease",
  "FormatItalic",
  "FormatLineSpacing",
  "FormatListBulleted",
  "FormatListNumbered",
  "FormatListNumberedRtl",
  "FormatOverline",
  "FormatPaint",
  "FormatQuote",
  "FormatShapes",
  "FormatSize",
  "FormatStrikethrough",
  "FormatTextdirectionLToR",
  "FormatTextdirectionRToL",
  "FormatUnderline",
  "FormatUnderlined",
  "Fort",
  "Forum",
  "Forward",
  "Forward10",
  "Forward30",
  "Forward5",
  "ForwardToInbox",
  "Foundation",
  "FreeBreakfast",
  "FreeCancellation",
  "FrontHand",
  "Fullscreen",
  "FullscreenExit",
  "Functions",
  "GMobiledata",
  "GTranslate",
  "Gamepad",
  "Games",
  "Garage",
  "GasMeter",
  "Gavel",
  "GeneratingTokens",
  "Gesture",
  "GetApp",
  "Gif",
  "GifBox",
  "Girl",
  "Gite",
  "GolfCourse",
  "GppBad",
  "GppGood",
  "GppMaybe",
  "GpsFixed",
  "GpsNotFixed",
  "GpsOff",
  "Grade",
  "Gradient",
  "Grading",
  "Grain",
  "GraphicEq",
  "Grass",
  "Grid3x3",
  "Grid4x4",
  "GridGoldenratio",
  "GridOff",
  "GridOn",
  "GridView",
  "Group",
  "GroupAdd",
  "GroupOff",
  "GroupRemove",
  "GroupWork",
  "Groups",
  "Groups2",
  "Groups3",
  "HMobiledata",
  "HPlusMobiledata",
  "Hail",
  "Handshake",
  "Handyman",
  "Hardware",
  "Hd",
  "HdrAuto",
  "HdrAutoSelect",
  "HdrEnhancedSelect",
  "HdrOff",
  "HdrOffSelect",
  "HdrOn",
  "HdrOnSelect",
  "HdrPlus",
  "HdrStrong",
  "HdrWeak",
  "Headphones",
  "HeadphonesBattery",
  "Headset",
  "HeadsetMic",
  "HeadsetOff",
  "Healing",
  "HealthAndSafety",
  "Hearing",
  "HearingDisabled",
  "HeartBroken",
  "HeatPump",
  "Height",
  "Help",
  "HelpCenter",
  "HelpOutline",
  "Hevc",
  "Hexagon",
  "HideImage",
  "HideSource",
  "HighQuality",
  "Highlight",
  "HighlightAlt",
  "HighlightOff",
  "HighlightRemove",
  "Hiking",
  "History",
  "HistoryEdu",
  "HistoryToggleOff",
  "Hive",
  "Hls",
  "HlsOff",
  "HolidayVillage",
  "Home",
  "HomeMax",
  "HomeMini",
  "HomeRepairService",
  "HomeWork",
  "HorizontalDistribute",
  "HorizontalRule",
  "HorizontalSplit",
  "HotTub",
  "Hotel",
  "HotelClass",
  "HourglassBottom",
  "HourglassDisabled",
  "HourglassEmpty",
  "HourglassFull",
  "HourglassTop",
  "House",
  "HouseSiding",
  "Houseboat",
  "HowToReg",
  "HowToVote",
  "Html",
  "Http",
  "Https",
  "Hub",
  "Hvac",
  "IceSkating",
  "Icecream",
  "Image",
  "ImageAspectRatio",
  "ImageNotSupported",
  "ImageSearch",
  "ImagesearchRoller",
  "ImportContacts",
  "ImportExport",
  "ImportantDevices",
  "Inbox",
  "IncompleteCircle",
  "IndeterminateCheckBox",
  "Info",
  "InfoOutline",
  "Input",
  "InsertChart",
  "InsertChartOutlined",
  "InsertComment",
  "InsertDriveFile",
  "InsertEmoticon",
  "InsertInvitation",
  "InsertLink",
  "InsertPageBreak",
  "InsertPhoto",
  "Insights",
  "InstallDesktop",
  "InstallMobile",
  "IntegrationInstructions",
  "Interests",
  "InterpreterMode",
  "Inventory",
  "Inventory2",
  "InvertColors",
  "InvertColorsOff",
  "InvertColorsOn",
  "IosShare",
  "Iron",
  "Iso",
  "Javascript",
  "JoinFull",
  "JoinInner",
  "JoinLeft",
  "JoinRight",
  "Kayaking",
  "KebabDining",
  "Key",
  "KeyOff",
  "Keyboard",
  "KeyboardAlt",
  "KeyboardArrowDown",
  "KeyboardArrowLeft",
  "KeyboardArrowRight",
  "KeyboardArrowUp",
  "KeyboardBackspace",
  "KeyboardCapslock",
  "KeyboardCommandKey",
  "KeyboardControl",
  "KeyboardControlKey",
  "KeyboardDoubleArrowDown",
  "KeyboardDoubleArrowLeft",
  "KeyboardDoubleArrowRight",
  "KeyboardDoubleArrowUp",
  "KeyboardHide",
  "KeyboardOptionKey",
  "KeyboardReturn",
  "KeyboardTab",
  "KeyboardVoice",
  "KingBed",
  "Kitchen",
  "Kitesurfing",
  "Label",
  "LabelImportant",
  "LabelImportantOutline",
  "LabelOff",
  "LabelOutline",
  "Lan",
  "Landscape",
  "Landslide",
  "Language",
  "Laptop",
  "LaptopChromebook",
  "LaptopMac",
  "LaptopWindows",
  "LastPage",
  "Launch",
  "Layers",
  "LayersClear",
  "Leaderboard",
  "LeakAdd",
  "LeakRemove",
  "LeaveBagsAtHome",
  "LegendToggle",
  "Lens",
  "LensBlur",
  "LibraryAdd",
  "LibraryAddCheck",
  "LibraryBooks",
  "LibraryMusic",
  "Light",
  "LightMode",
  "Lightbulb",
  "LightbulbCircle",
  "LightbulbOutline",
  "LineAxis",
  "LineStyle",
  "LineWeight",
  "LinearScale",
  "Link",
  "LinkOff",
  "LinkedCamera",
  "Liquor",
  "List",
  "ListAlt",
  "LiveHelp",
  "LiveTv",
  "Living",
  "LocalActivity",
  "LocalAirport",
  "LocalAtm",
  "LocalAttraction",
  "LocalBar",
  "LocalCafe",
  "LocalCarWash",
  "LocalConvenienceStore",
  "LocalDining",
  "LocalDrink",
  "LocalFireDepartment",
  "LocalFlorist",
  "LocalGasStation",
  "LocalGroceryStore",
  "LocalHospital",
  "LocalHotel",
  "LocalLaundryService",
  "LocalLibrary",
  "LocalMall",
  "LocalMovies",
  "LocalOffer",
  "LocalParking",
  "LocalPharmacy",
  "LocalPhone",
  "LocalPizza",
  "LocalPlay",
  "LocalPolice",
  "LocalPostOffice",
  "LocalPrintShop",
  "LocalPrintshop",
  "LocalRestaurant",
  "LocalSee",
  "LocalShipping",
  "LocalTaxi",
  "LocationCity",
  "LocationDisabled",
  "LocationHistory",
  "LocationOff",
  "LocationOn",
  "LocationSearching",
  "Lock",
  "LockClock",
  "LockOpen",
  "LockOutline",
  "LockPerson",
  "LockReset",
  "Login",
  "LogoDev",
  "Logout",
  "Looks",
  "Looks3",
  "Looks4",
  "Looks5",
  "Looks6",
  "LooksOne",
  "LooksTwo",
  "Loop",
  "Loupe",
  "LowPriority",
  "Loyalty",
  "LteMobiledata",
  "LtePlusMobiledata",
  "Luggage",
  "LunchDining",
  "Lyrics",
  "MacroOff",
  "Mail",
  "MailLock",
  "MailOutline",
  "Male",
  "Man",
  "Man2",
  "Man3",
  "Man4",
  "ManageAccounts",
  "ManageHistory",
  "ManageSearch",
  "Map",
  "MapsHomeWork",
  "MapsUgc",
  "Margin",
  "MarkAsUnread",
  "MarkChatRead",
  "MarkChatUnread",
  "MarkEmailRead",
  "MarkEmailUnread",
  "MarkUnreadChatAlt",
  "Markunread",
  "MarkunreadMailbox",
  "Masks",
  "Maximize",
  "MediaBluetoothOff",
  "MediaBluetoothOn",
  "Mediation",
  "MedicalInformation",
  "MedicalServices",
  "Medication",
  "MedicationLiquid",
  "MeetingRoom",
  "Memory",
  "Menu",
  "MenuBook",
  "MenuOpen",
  "Merge",
  "MergeType",
  "Message",
  "Messenger",
  "MessengerOutline",
  "Mic",
  "MicExternalOff",
  "MicExternalOn",
  "MicNone",
  "MicOff",
  "Microwave",
  "MilitaryTech",
  "Minimize",
  "MinorCrash",
  "MiscellaneousServices",
  "MissedVideoCall",
  "Mms",
  "MobileFriendly",
  "MobileOff",
  "MobileScreenShare",
  "MobiledataOff",
  "Mode",
  "ModeComment",
  "ModeEdit",
  "ModeEditOutline",
  "ModeFanOff",
  "ModeNight",
  "ModeOfTravel",
  "ModeStandby",
  "ModelTraining",
  "MonetizationOn",
  "Money",
  "MoneyOff",
  "MoneyOffCsred",
  "Monitor",
  "MonitorHeart",
  "MonitorWeight",
  "MonochromePhotos",
  "Mood",
  "MoodBad",
  "Moped",
  "More",
  "MoreHoriz",
  "MoreTime",
  "MoreVert",
  "Mosque",
  "MotionPhotosAuto",
  "MotionPhotosOff",
  "MotionPhotosOn",
  "MotionPhotosPause",
  "MotionPhotosPaused",
  "Motorcycle",
  "Mouse",
  "MoveDown",
  "MoveToInbox",
  "MoveUp",
  "Movie",
  "MovieCreation",
  "MovieFilter",
  "Moving",
  "Mp",
  "MultilineChart",
  "MultipleStop",
  "MultitrackAudio",
  "Museum",
  "MusicNote",
  "MusicOff",
  "MusicVideo",
  "MyLibraryAdd",
  "MyLibraryBooks",
  "MyLibraryMusic",
  "MyLocation",
  "Nat",
  "Nature",
  "NaturePeople",
  "NavigateBefore",
  "NavigateNext",
  "Navigation",
  "NearMe",
  "NearMeDisabled",
  "NearbyError",
  "NearbyOff",
  "NestCamWiredStand",
  "NetworkCell",
  "NetworkCheck",
  "NetworkLocked",
  "NetworkPing",
  "NetworkWifi",
  "NetworkWifi1Bar",
  "NetworkWifi2Bar",
  "NetworkWifi3Bar",
  "NewLabel",
  "NewReleases",
  "Newspaper",
  "NextPlan",
  "NextWeek",
  "Nfc",
  "NightShelter",
  "Nightlife",
  "Nightlight",
  "NightlightRound",
  "NightsStay",
  "NoAccounts",
  "NoAdultContent",
  "NoBackpack",
  "NoCell",
  "NoCrash",
  "NoDrinks",
  "NoEncryption",
  "NoEncryptionGmailerrorred",
  "NoFlash",
  "NoFood",
  "NoLuggage",
  "NoMeals",
  "NoMeetingRoom",
  "NoPhotography",
  "NoSim",
  "NoStroller",
  "NoTransfer",
  "NoiseAware",
  "NoiseControlOff",
  "NordicWalking",
  "North",
  "NorthEast",
  "NorthWest",
  "NotAccessible",
  "NotInterested",
  "NotListedLocation",
  "NotStarted",
  "Note",
  "NoteAdd",
  "NoteAlt",
  "Notes",
  "NotificationAdd",
  "NotificationImportant",
  "Notifications",
  "NotificationsActive",
  "NotificationsNone",
  "NotificationsOff",
  "NotificationsOn",
  "NotificationsPaused",
  "NowWallpaper",
  "NowWidgets",
  "Numbers",
  "OfflineBolt",
  "OfflinePin",
  "OfflineShare",
  "OilBarrel",
  "OnDeviceTraining",
  "OndemandVideo",
  "OnlinePrediction",
  "Opacity",
  "OpenInBrowser",
  "OpenInFull",
  "OpenInNew",
  "OpenInNewOff",
  "OpenWith",
  "OtherHouses",
  "Outbond",
  "Outbound",
  "Outbox",
  "OutdoorGrill",
  "Outlet",
  "OutlinedFlag",
  "Output",
  "Padding",
  "Pages",
  "Pageview",
  "Paid",
  "Palette",
  "PanTool",
  "PanToolAlt",
  "Panorama",
  "PanoramaFishEye",
  "PanoramaFisheye",
  "PanoramaHorizontal",
  "PanoramaHorizontalSelect",
  "PanoramaPhotosphere",
  "PanoramaPhotosphereSelect",
  "PanoramaVertical",
  "PanoramaVerticalSelect",
  "PanoramaWideAngle",
  "PanoramaWideAngleSelect",
  "Paragliding",
  "Park",
  "PartyMode",
  "Password",
  "Paste",
  "Pattern",
  "Pause",
  "PauseCircle",
  "PauseCircleFilled",
  "PauseCircleOutline",
  "PausePresentation",
  "Payment",
  "Payments",
  "Paypal",
  "PedalBike",
  "Pending",
  "PendingActions",
  "Pentagon",
  "People",
  "PeopleAlt",
  "PeopleOutline",
  "Percent",
  "PermCameraMic",
  "PermContactCal",
  "PermContactCalendar",
  "PermDataSetting",
  "PermDeviceInfo",
  "PermDeviceInformation",
  "PermIdentity",
  "PermMedia",
  "PermPhoneMsg",
  "PermScanWifi",
  "Person",
  "Person2",
  "Person3",
  "Person4",
  "PersonAdd",
  "PersonAddAlt",
  "PersonAddAlt1",
  "PersonAddDisabled",
  "PersonOff",
  "PersonOutline",
  "PersonPin",
  "PersonPinCircle",
  "PersonRemove",
  "PersonRemoveAlt1",
  "PersonSearch",
  "PersonalInjury",
  "PersonalVideo",
  "PestControl",
  "PestControlRodent",
  "Pets",
  "Phishing",
  "Phone",
  "PhoneAndroid",
  "PhoneBluetoothSpeaker",
  "PhoneCallback",
  "PhoneDisabled",
  "PhoneEnabled",
  "PhoneForwarded",
  "PhoneInTalk",
  "PhoneIphone",
  "PhoneLocked",
  "PhoneMissed",
  "PhonePaused",
  "Phonelink",
  "PhonelinkErase",
  "PhonelinkLock",
  "PhonelinkOff",
  "PhonelinkRing",
  "PhonelinkSetup",
  "Photo",
  "PhotoAlbum",
  "PhotoCamera",
  "PhotoCameraBack",
  "PhotoCameraFront",
  "PhotoFilter",
  "PhotoLibrary",
  "PhotoSizeSelectActual",
  "PhotoSizeSelectLarge",
  "PhotoSizeSelectSmall",
  "Php",
  "Piano",
  "PianoOff",
  "PictureAsPdf",
  "PictureInPicture",
  "PictureInPictureAlt",
  "PieChart",
  "PieChartOutline",
  "Pin",
  "PinDrop",
  "PinEnd",
  "PinInvoke",
  "Pinch",
  "PivotTableChart",
  "Pix",
  "Place",
  "Plagiarism",
  "PlayArrow",
  "PlayCircle",
  "PlayCircleFill",
  "PlayCircleFilled",
  "PlayCircleOutline",
  "PlayDisabled",
  "PlayForWork",
  "PlayLesson",
  "PlaylistAdd",
  "PlaylistAddCheck",
  "PlaylistAddCheckCircle",
  "PlaylistAddCircle",
  "PlaylistPlay",
  "PlaylistRemove",
  "Plumbing",
  "PlusOne",
  "Podcasts",
  "PointOfSale",
  "Policy",
  "Poll",
  "Polyline",
  "Polymer",
  "Pool",
  "PortableWifiOff",
  "Portrait",
  "PostAdd",
  "Power",
  "PowerInput",
  "PowerOff",
  "PowerSettingsNew",
  "PrecisionManufacturing",
  "PregnantWoman",
  "PresentToAll",
  "Preview",
  "PriceChange",
  "PriceCheck",
  "Print",
  "PrintDisabled",
  "PriorityHigh",
  "PrivacyTip",
  "PrivateConnectivity",
  "ProductionQuantityLimits",
  "Propane",
  "PropaneTank",
  "Psychology",
  "PsychologyAlt",
  "Public",
  "PublicOff",
  "Publish",
  "PublishedWithChanges",
  "PunchClock",
  "PushPin",
  "QrCode",
  "QrCode2",
  "QrCodeScanner",
  "QueryBuilder",
  "QueryStats",
  "QuestionAnswer",
  "QuestionMark",
  "Queue",
  "QueueMusic",
  "QueuePlayNext",
  "QuickContactsDialer",
  "QuickContactsMail",
  "Quickreply",
  "Quiz",
  "Quora",
  "RMobiledata",
  "Radar",
  "Radio",
  "RadioButtonChecked",
  "RadioButtonOff",
  "RadioButtonOn",
  "RadioButtonUnchecked",
  "RailwayAlert",
  "RamenDining",
  "RampLeft",
  "RampRight",
  "RateReview",
  "RawOff",
  "RawOn",
  "ReadMore",
  "RealEstateAgent",
  "Receipt",
  "ReceiptLong",
  "RecentActors",
  "Recommend",
  "RecordVoiceOver",
  "Rectangle",
  "Recycling",
  "Reddit",
  "Redeem",
  "Redo",
  "ReduceCapacity",
  "Refresh",
  "RememberMe",
  "Remove",
  "RemoveCircle",
  "RemoveCircleOutline",
  "RemoveDone",
  "RemoveFromQueue",
  "RemoveModerator",
  "RemoveRedEye",
  "RemoveRoad",
  "RemoveShoppingCart",
  "Reorder",
  "Repartition",
  "Repeat",
  "RepeatOn",
  "RepeatOne",
  "RepeatOneOn",
  "Replay",
  "Replay10",
  "Replay30",
  "Replay5",
  "ReplayCircleFilled",
  "Reply",
  "ReplyAll",
  "Report",
  "ReportGmailerrorred",
  "ReportOff",
  "ReportProblem",
  "RequestPage",
  "RequestQuote",
  "ResetTv",
  "RestartAlt",
  "Restaurant",
  "RestaurantMenu",
  "Restore",
  "RestoreFromTrash",
  "RestorePage",
  "Reviews",
  "RiceBowl",
  "RingVolume",
  "Rocket",
  "RocketLaunch",
  "RollerShades",
  "RollerShadesClosed",
  "RollerSkating",
  "Roofing",
  "Room",
  "RoomPreferences",
  "RoomService",
  "Rotate90DegreesCcw",
  "Rotate90DegreesCw",
  "RotateLeft",
  "RotateRight",
  "RoundaboutLeft",
  "RoundaboutRight",
  "RoundedCorner",
  "Route",
  "Router",
  "Rowing",
  "RssFeed",
  "Rsvp",
  "Rtt",
  "Rule",
  "RuleFolder",
  "RunCircle",
  "RunningWithErrors",
  "RvHookup",
  "SafetyCheck",
  "SafetyDivider",
  "Sailing",
  "Sanitizer",
  "Satellite",
  "SatelliteAlt",
  "Save",
  "SaveAlt",
  "SaveAs",
  "SavedSearch",
  "Savings",
  "Scale",
  "Scanner",
  "ScatterPlot",
  "Schedule",
  "ScheduleSend",
  "Schema",
  "School",
  "Science",
  "Score",
  "Scoreboard",
  "ScreenLockLandscape",
  "ScreenLockPortrait",
  "ScreenLockRotation",
  "ScreenRotation",
  "ScreenRotationAlt",
  "ScreenSearchDesktop",
  "ScreenShare",
  "Screenshot",
  "ScreenshotMonitor",
  "ScubaDiving",
  "Sd",
  "SdCard",
  "SdCardAlert",
  "SdStorage",
  "Search",
  "SearchOff",
  "Security",
  "SecurityUpdate",
  "SecurityUpdateGood",
  "SecurityUpdateWarning",
  "Segment",
  "SelectAll",
  "SelfImprovement",
  "Sell",
  "Send",
  "SendAndArchive",
  "SendTimeExtension",
  "SendToMobile",
  "SensorDoor",
  "SensorOccupied",
  "SensorWindow",
  "Sensors",
  "SensorsOff",
  "SentimentDissatisfied",
  "SentimentNeutral",
  "SentimentSatisfied",
  "SentimentSatisfiedAlt",
  "SentimentVeryDissatisfied",
  "SentimentVerySatisfied",
  "SetMeal",
  "Settings",
  "SettingsAccessibility",
  "SettingsApplications",
  "SettingsBackupRestore",
  "SettingsBluetooth",
  "SettingsBrightness",
  "SettingsCell",
  "SettingsDisplay",
  "SettingsEthernet",
  "SettingsInputAntenna",
  "SettingsInputComponent",
  "SettingsInputComposite",
  "SettingsInputHdmi",
  "SettingsInputSvideo",
  "SettingsOverscan",
  "SettingsPhone",
  "SettingsPower",
  "SettingsRemote",
  "SettingsSuggest",
  "SettingsSystemDaydream",
  "SettingsVoice",
  "SevereCold",
  "ShapeLine",
  "Share",
  "ShareArrivalTime",
  "ShareLocation",
  "Shield",
  "ShieldMoon",
  "Shop",
  "Shop2",
  "ShopTwo",
  "Shopify",
  "ShoppingBag",
  "ShoppingBasket",
  "ShoppingCart",
  "ShoppingCartCheckout",
  "ShortText",
  "Shortcut",
  "ShowChart",
  "Shower",
  "Shuffle",
  "ShuffleOn",
  "ShutterSpeed",
  "Sick",
  "SignLanguage",
  "SignalCellular0Bar",
  "SignalCellular4Bar",
  "SignalCellularAlt",
  "SignalCellularAlt1Bar",
  "SignalCellularAlt2Bar",
  "SignalCellularConnectedNoInternet0Bar",
  "SignalCellularConnectedNoInternet4Bar",
  "SignalCellularNoSim",
  "SignalCellularNodata",
  "SignalCellularNull",
  "SignalCellularOff",
  "SignalWifi0Bar",
  "SignalWifi4Bar",
  "SignalWifi4BarLock",
  "SignalWifiBad",
  "SignalWifiConnectedNoInternet4",
  "SignalWifiOff",
  "SignalWifiStatusbar4Bar",
  "SignalWifiStatusbarConnectedNoInternet4",
  "SignalWifiStatusbarNull",
  "Signpost",
  "SimCard",
  "SimCardAlert",
  "SimCardDownload",
  "SingleBed",
  "Sip",
  "Skateboarding",
  "SkipNext",
  "SkipPrevious",
  "Sledding",
  "Slideshow",
  "SlowMotionVideo",
  "SmartButton",
  "SmartDisplay",
  "SmartScreen",
  "SmartToy",
  "Smartphone",
  "SmokeFree",
  "SmokingRooms",
  "Sms",
  "SmsFailed",
  "Snapchat",
  "SnippetFolder",
  "Snooze",
  "Snowboarding",
  "Snowmobile",
  "Snowshoeing",
  "Soap",
  "SocialDistance",
  "SolarPower",
  "Sort",
  "SortByAlpha",
  "Sos",
  "SoupKitchen",
  "Source",
  "South",
  "SouthAmerica",
  "SouthEast",
  "SouthWest",
  "Spa",
  "SpaceBar",
  "SpaceDashboard",
  "SpatialAudio",
  "SpatialAudioOff",
  "SpatialTracking",
  "Speaker",
  "SpeakerGroup",
  "SpeakerNotes",
  "SpeakerNotesOff",
  "SpeakerPhone",
  "Speed",
  "Spellcheck",
  "Splitscreen",
  "Spoke",
  "Sports",
  "SportsBar",
  "SportsBaseball",
  "SportsBasketball",
  "SportsCricket",
  "SportsEsports",
  "SportsFootball",
  "SportsGolf",
  "SportsGymnastics",
  "SportsHandball",
  "SportsHockey",
  "SportsKabaddi",
  "SportsMartialArts",
  "SportsMma",
  "SportsMotorsports",
  "SportsRugby",
  "SportsScore",
  "SportsSoccer",
  "SportsTennis",
  "SportsVolleyball",
  "Square",
  "SquareFoot",
  "SsidChart",
  "StackedBarChart",
  "StackedLineChart",
  "Stadium",
  "Stairs",
  "Star",
  "StarBorder",
  "StarBorderPurple500",
  "StarHalf",
  "StarOutline",
  "StarPurple500",
  "StarRate",
  "Stars",
  "Start",
  "StayCurrentLandscape",
  "StayCurrentPortrait",
  "StayPrimaryLandscape",
  "StayPrimaryPortrait",
  "StickyNote2",
  "Stop",
  "StopCircle",
  "StopScreenShare",
  "Storage",
  "Store",
  "StoreMallDirectory",
  "Storefront",
  "Storm",
  "Straight",
  "Straighten",
  "Stream",
  "Streetview",
  "StrikethroughS",
  "Stroller",
  "Style",
  "SubdirectoryArrowLeft",
  "SubdirectoryArrowRight",
  "Subject",
  "Subscript",
  "Subscriptions",
  "Subtitles",
  "SubtitlesOff",
  "Subway",
  "Summarize",
  "Superscript",
  "SupervisedUserCircle",
  "SupervisorAccount",
  "Support",
  "SupportAgent",
  "Surfing",
  "SurroundSound",
  "SwapCalls",
  "SwapHoriz",
  "SwapHorizontalCircle",
  "SwapVert",
  "SwapVertCircle",
  "SwapVerticalCircle",
  "Swipe",
  "SwipeDown",
  "SwipeDownAlt",
  "SwipeLeft",
  "SwipeLeftAlt",
  "SwipeRight",
  "SwipeRightAlt",
  "SwipeUp",
  "SwipeUpAlt",
  "SwipeVertical",
  "SwitchAccessShortcut",
  "SwitchAccessShortcutAdd",
  "SwitchAccount",
  "SwitchCamera",
  "SwitchLeft",
  "SwitchRight",
  "SwitchVideo",
  "Synagogue",
  "Sync",
  "SyncAlt",
  "SyncDisabled",
  "SyncLock",
  "SyncProblem",
  "SystemSecurityUpdate",
  "SystemSecurityUpdateGood",
  "SystemSecurityUpdateWarning",
  "SystemUpdate",
  "SystemUpdateAlt",
  "SystemUpdateTv",
  "Tab",
  "TabUnselected",
  "TableBar",
  "TableChart",
  "TableRestaurant",
  "TableRows",
  "TableView",
  "Tablet",
  "TabletAndroid",
  "TabletMac",
  "Tag",
  "TagFaces",
  "TakeoutDining",
  "TapAndPlay",
  "Tapas",
  "Task",
  "TaskAlt",
  "TaxiAlert",
  "Telegram",
  "TempleBuddhist",
  "TempleHindu",
  "Terminal",
  "Terrain",
  "TextDecrease",
  "TextFields",
  "TextFormat",
  "TextIncrease",
  "TextRotateUp",
  "TextRotateVertical",
  "TextRotationAngledown",
  "TextRotationAngleup",
  "TextRotationDown",
  "TextRotationNone",
  "TextSnippet",
  "Textsms",
  "Texture",
  "TheaterComedy",
  "Theaters",
  "Thermostat",
  "ThermostatAuto",
  "ThumbDown",
  "ThumbDownAlt",
  "ThumbDownOffAlt",
  "ThumbUp",
  "ThumbUpAlt",
  "ThumbUpOffAlt",
  "ThumbsUpDown",
  "Thunderstorm",
  "Tiktok",
  "TimeToLeave",
  "Timelapse",
  "Timeline",
  "Timer",
  "Timer10",
  "Timer10Select",
  "Timer3",
  "Timer3Select",
  "TimerOff",
  "TipsAndUpdates",
  "TireRepair",
  "Title",
  "Toc",
  "Today",
  "ToggleOff",
  "ToggleOn",
  "Token",
  "Toll",
  "Tonality",
  "Topic",
  "Tornado",
  "TouchApp",
  "Tour",
  "Toys",
  "TrackChanges",
  "Traffic",
  "Train",
  "Tram",
  "Transcribe",
  "TransferWithinAStation",
  "Transform",
  "Transgender",
  "TransitEnterexit",
  "Translate",
  "TravelExplore",
  "TrendingDown",
  "TrendingFlat",
  "TrendingNeutral",
  "TrendingUp",
  "TripOrigin",
  "Troubleshoot",
  "Try",
  "Tsunami",
  "Tty",
  "Tune",
  "Tungsten",
  "TurnLeft",
  "TurnRight",
  "TurnSharpLeft",
  "TurnSharpRight",
  "TurnSlightLeft",
  "TurnSlightRight",
  "TurnedIn",
  "TurnedInNot",
  "Tv",
  "TvOff",
  "TwoWheeler",
  "TypeSpecimen",
  "UTurnLeft",
  "UTurnRight",
  "Umbrella",
  "Unarchive",
  "Undo",
  "UnfoldLess",
  "UnfoldLessDouble",
  "UnfoldMore",
  "UnfoldMoreDouble",
  "Unpublished",
  "Unsubscribe",
  "Upcoming",
  "Update",
  "UpdateDisabled",
  "Upgrade",
  "Upload",
  "UploadFile",
  "Usb",
  "UsbOff",
  "Vaccines",
  "VapeFree",
  "VapingRooms",
  "Verified",
  "VerifiedUser",
  "VerticalAlignBottom",
  "VerticalAlignCenter",
  "VerticalAlignTop",
  "VerticalDistribute",
  "VerticalShades",
  "VerticalShadesClosed",
  "VerticalSplit",
  "Vibration",
  "VideoCall",
  "VideoCameraBack",
  "VideoCameraFront",
  "VideoChat",
  "VideoCollection",
  "VideoFile",
  "VideoLabel",
  "VideoLibrary",
  "VideoSettings",
  "VideoStable",
  "Videocam",
  "VideocamOff",
  "VideogameAsset",
  "VideogameAssetOff",
  "ViewAgenda",
  "ViewArray",
  "ViewCarousel",
  "ViewColumn",
  "ViewComfortable",
  "ViewComfy",
  "ViewComfyAlt",
  "ViewCompact",
  "ViewCompactAlt",
  "ViewCozy",
  "ViewDay",
  "ViewHeadline",
  "ViewInAr",
  "ViewKanban",
  "ViewList",
  "ViewModule",
  "ViewQuilt",
  "ViewSidebar",
  "ViewStream",
  "ViewTimeline",
  "ViewWeek",
  "Vignette",
  "Villa",
  "Visibility",
  "VisibilityOff",
  "VoiceChat",
  "VoiceOverOff",
  "Voicemail",
  "Volcano",
  "VolumeDown",
  "VolumeMute",
  "VolumeOff",
  "VolumeUp",
  "VolunteerActivism",
  "VpnKey",
  "VpnKeyOff",
  "VpnLock",
  "Vrpano",
  "Wallet",
  "WalletGiftcard",
  "WalletMembership",
  "WalletTravel",
  "Wallpaper",
  "Warehouse",
  "Warning",
  "WarningAmber",
  "Wash",
  "Watch",
  "WatchLater",
  "WatchOff",
  "Water",
  "WaterDamage",
  "WaterDrop",
  "WaterfallChart",
  "Waves",
  "WavingHand",
  "WbAuto",
  "WbCloudy",
  "WbIncandescent",
  "WbIridescent",
  "WbShade",
  "WbSunny",
  "WbTwilight",
  "Wc",
  "Web",
  "WebAsset",
  "WebAssetOff",
  "WebStories",
  "Webhook",
  "Wechat",
  "Weekend",
  "West",
  "Whatshot",
  "WheelchairPickup",
  "WhereToVote",
  "Widgets",
  "WidthFull",
  "WidthNormal",
  "WidthWide",
  "Wifi",
  "Wifi1Bar",
  "Wifi2Bar",
  "WifiCalling",
  "WifiCalling3",
  "WifiChannel",
  "WifiFind",
  "WifiLock",
  "WifiOff",
  "WifiPassword",
  "WifiProtectedSetup",
  "WifiTethering",
  "WifiTetheringError",
  "WifiTetheringErrorRounded",
  "WifiTetheringOff",
  "WindPower",
  "Window",
  "WineBar",
  "Woman",
  "Woman2",
  "WooCommerce",
  "Wordpress",
  "Work",
  "WorkHistory",
  "WorkOff",
  "WorkOutline",
  "WorkspacePremium",
  "Workspaces",
  "WrapText",
  "WrongLocation",
  "Wysiwyg",
  "Yard",
  "YoutubeSearchedFor",
  "ZoomIn",
  "ZoomInMap",
  "ZoomOut",
  "ZoomOutMap"
];

// trabecula/components/buttons/icon-picker.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var SEARCH_STYLES = ["Filled", "Outlined", "Rounded", "TwoTone", "Sharp"];
var SEARCH_STYLES_UNFILLED = SEARCH_STYLES.filter((s2) => s2 !== "Filled");
var IconPicker = Comp(
  (_a) => {
    var _b = _a, {
      color = colors.custom.black,
      label = "Icon",
      menuProps = {},
      setValue,
      value,
      viewProps = {},
      width = "fit-content",
      withStylePicker = false
    } = _b, buttonProps = __objRest(_b, [
      "color",
      "label",
      "menuProps",
      "setValue",
      "value",
      "viewProps",
      "width",
      "withStylePicker"
    ]);
    const [page, setPage] = (0, import_react5.useState)(1);
    const [searchStyle, setSearchStyle] = (0, import_react5.useState)("Filled");
    const [searchVal, setSearchVal] = (0, import_react5.useState)("");
    const searchTerms = searchVal.split(" ").filter((t2) => t2.length > 0);
    const filteredIcons = MUI_ICONS.filter((icon) => {
      const name = icon.toLowerCase();
      if ((value == null ? void 0 : value.length) && name.includes(value.toLowerCase())) return false;
      if (searchStyle === "Filled") {
        if (SEARCH_STYLES_UNFILLED.some((s2) => name.includes(s2.toLowerCase()))) return false;
      } else if (!name.includes(searchStyle.toLowerCase())) return false;
      if (!searchTerms.length) return true;
      return searchTerms.every((term) => name.includes(term.toLowerCase()));
    });
    const pageSize = 25 - ((value == null ? void 0 : value.length) ? 1 : 0);
    const pageCount = Math.ceil(filteredIcons.length / pageSize);
    const pageIcons = [
      (value == null ? void 0 : value.length) ? value : null,
      ...filteredIcons.slice(pageSize * (page - 1), pageSize * page)
    ].filter(Boolean);
    (0, import_react5.useEffect)(() => {
      if (page > pageCount) setPage(1);
    }, [pageCount, page]);
    const handleNoIcon = () => setValue(null);
    const handleSearchStyleChange = (event) => setSearchStyle(event.target.value);
    const renderButton = (onOpen) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      Button,
      __spreadProps(__spreadValues({
        onClick: onOpen,
        color,
        justify: "space-between",
        padding: { left: "0.5em", right: "0.5em" },
        width
      }, buttonProps), {
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(View, { row: true, spacing: "0.5rem", align: "center", padding: { left: "0.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, { lineHeight: 1, children: label }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Icon, { name: value })
        ] })
      })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MenuButton, __spreadProps(__spreadValues({ button: renderButton, keepMounted: false }, menuProps), { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(View, __spreadProps(__spreadValues({ column: true, padding: { all: "0.5rem" }, spacing: "0.5rem", overflow: "auto" }, viewProps), { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Input, { header: "Search", value: searchVal, setValue: setSearchVal }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        Button,
        {
          text: "No Icon",
          icon: "Close",
          onClick: handleNoIcon,
          color: value === null ? colors.custom.black : colors.background,
          textColor: value === null ? colors.custom.white : colors.custom.lightGrey
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(View, { row: true, position: "relative", spacing: "0.5rem", children: [
        !withStylePicker ? null : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Card, { column: true, header: "Style", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_material5.RadioGroup, { value: searchStyle, onChange: handleSearchStyleChange, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.FormControlLabel, { label: "Filled", value: "Filled", control: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.Radio, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.FormControlLabel, { label: "Outlined", value: "Outlined", control: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.Radio, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.FormControlLabel, { label: "Rounded", value: "Rounded", control: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.Radio, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.FormControlLabel, { label: "Two Tone", value: "TwoTone", control: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.Radio, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.FormControlLabel, { label: "Sharp", value: "Sharp", control: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_material5.Radio, {}) })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(View, { column: true, width: "16rem", height: "19rem", children: chunkArray(pageIcons, 5).map((swatch, i2) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(View, { row: true, children: swatch.map((icon) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          IconButton,
          {
            name: icon,
            tooltip: icon,
            iconProps: { size: "1.4em" },
            sx: {
              border: `3px solid ${value === icon ? colors.custom.white : "transparent"}`
            },
            onClick: () => setValue(icon)
          },
          icon
        )) }, i2)) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          Pagination,
          {
            count: pageCount,
            page,
            onChange: setPage,
            siblingCount: 0,
            boundaryCount: withStylePicker ? 1 : 0
          }
        )
      ] })
    ] })) }));
  }
);

// trabecula/components/buttons/menu-button.tsx
var import_react6 = require("react");
var import_material6 = require("@mui/material");
var import_jsx_runtime6 = require("react/jsx-runtime");
var MenuButton = (_a) => {
  var _b = _a, {
    bgColor = colors.background,
    button,
    children,
    color,
    icon = "MoreVert",
    keepMounted = true,
    menuWidth
  } = _b, props = __objRest(_b, [
    "bgColor",
    "button",
    "children",
    "color",
    "icon",
    "keepMounted",
    "menuWidth"
  ]);
  const { css } = useClasses4({ bgColor, menuWidth });
  const [anchorEl, setAnchorEl] = (0, import_react6.useState)(null);
  const handleClose = () => setAnchorEl(null);
  const handleOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    button ? button(handleOpen) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(IconButton, __spreadValues({ name: icon, onClick: handleOpen, iconProps: { color } }, props)),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_material6.Menu,
      __spreadProps(__spreadValues({}, { anchorEl, keepMounted }), {
        open: Boolean(anchorEl),
        onClose: handleClose,
        anchorOrigin: { horizontal: "right", vertical: "bottom" },
        transformOrigin: { horizontal: "right", vertical: "top" },
        className: css.menu,
        children
      })
    )
  ] });
};
var useClasses4 = makeClasses((props) => {
  var _a;
  return {
    menu: {
      "& .MuiPaper-root": {
        background: props.bgColor,
        minWidth: (_a = props.menuWidth) != null ? _a : "10rem",
        width: props.menuWidth
      },
      "& .MuiList-root": {
        padding: "4px 0"
      }
    }
  };
});

// trabecula/components/buttons/sort-menu.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var import_react7 = require("react");
var SortMenu = (_a) => {
  var _b = _a, {
    color = colors.custom.black,
    hasHeader,
    rows,
    setValue,
    value,
    width = "fit-content"
  } = _b, buttonProps = __objRest(_b, [
    "color",
    "hasHeader",
    "rows",
    "setValue",
    "value",
    "width"
  ]);
  const { css, cx } = useClasses5({ hasHeader, width });
  const activeRow = rows.find(({ attribute }) => attribute === (value == null ? void 0 : value.key));
  const renderButton = (onOpen) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    Button,
    __spreadProps(__spreadValues({
      onClick: onOpen,
      color,
      justify: "space-between",
      padding: { left: "0.5em", right: "0.5em" },
      className: cx(css.button, buttonProps == null ? void 0 : buttonProps.className)
    }, buttonProps), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(View, { row: true, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Icon, { name: "Sort", size: "1.15em" }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(View, { column: true, align: "flex-start", margins: { left: "0.5em", right: "0.5em" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { className: css.topText, children: "Sort By" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { className: css.label, children: activeRow == null ? void 0 : activeRow.label })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Icon, { name: (value == null ? void 0 : value.isDesc) ? "ArrowDownward" : "ArrowUpward", size: "1.15em" })
      ]
    })
  );
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(MenuButton, { button: renderButton, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(View, { column: true, children: rows.map((rowProps) => /* @__PURE__ */ (0, import_react7.createElement)(SortRow, __spreadProps(__spreadValues(__spreadValues({}, rowProps), { setValue, value }), { key: rowProps.attribute }))) }) });
};
var useClasses5 = makeClasses((props) => ({
  button: __spreadProps(__spreadValues({}, makeBorderRadiuses(__spreadValues({ all: "0.3rem" }, props.hasHeader ? { top: 0 } : {}))), {
    height: "inherit",
    width: props.width,
    boxShadow: "none"
  }),
  label: {
    fontSize: "0.9em",
    lineHeight: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    textAlign: "left",
    whiteSpace: "nowrap"
  },
  topText: {
    color: colors.custom.lightGrey,
    fontSize: "0.7em",
    fontWeight: 600,
    lineHeight: 1
  }
}));

// trabecula/components/buttons/sort-row.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var SortRow = ({
  attribute,
  label,
  icon,
  iconProps = {},
  setValue,
  value
}) => {
  const { css } = useClasses6(null);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(View, { className: css.row, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Icon, __spreadValues({ name: icon }, iconProps)),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Text, { className: css.label, children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SortButton, __spreadProps(__spreadValues({}, { attribute, setValue, value }), { isDesc: true })),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SortButton, __spreadValues({}, { attribute, setValue, value }))
  ] });
};
var SortButton = ({ attribute, isDesc = false, setValue, value }) => {
  const isActive = attribute === (value == null ? void 0 : value.key) && isDesc === (value == null ? void 0 : value.isDesc);
  const color = isActive ? colors.custom.blue : colors.custom.lightGrey;
  const updateSort = () => setValue({ key: attribute, isDesc });
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    IconButton,
    {
      name: isDesc ? "ArrowDownward" : "ArrowUpward",
      onClick: updateSort,
      iconProps: { color },
      margins: { left: "0.5rem" },
      size: "small"
    }
  );
};
var useClasses6 = makeClasses({
  label: {
    flex: 1,
    whiteSpace: "nowrap",
    padding: "0 0.5rem"
  },
  row: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    padding: "0.5rem 0.8rem"
  }
});

// trabecula/components/inputs/date-input.tsx
var import_react8 = require("react");
var import_AdapterDayjs = require("@mui/x-date-pickers/AdapterDayjs");
var import_DatePicker = require("@mui/x-date-pickers/DatePicker");
var import_LocalizationProvider = require("@mui/x-date-pickers/LocalizationProvider");
var import_jsx_runtime9 = require("react/jsx-runtime");
var DateInput = (_a) => {
  var _b = _a, {
    header,
    headerProps = {},
    inputProps = {},
    setValue,
    value,
    width
  } = _b, datePickerProps = __objRest(_b, [
    "header",
    "headerProps",
    "inputProps",
    "setValue",
    "value",
    "width"
  ]);
  const { css } = useClasses7({ width });
  const [dateValue, setDateValue] = (0, import_react8.useState)((value == null ? void 0 : value.length) ? (0, import_dayjs.default)(value) : null);
  (0, import_react8.useEffect)(() => {
    setDateValue((value == null ? void 0 : value.length) ? (0, import_dayjs.default)(value) : null);
  }, [value]);
  const handleChange = (val) => setValue == null ? void 0 : setValue(val == null ? void 0 : val.format("YYYY-MM-DD"));
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(HeaderWrapper, { header, headerProps, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_LocalizationProvider.LocalizationProvider, { dateAdapter: import_AdapterDayjs.AdapterDayjs, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    import_DatePicker.DatePicker,
    __spreadProps(__spreadValues({}, datePickerProps), {
      value: dateValue,
      onChange: handleChange,
      slots: {
        textField: (props) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          Input,
          __spreadProps(__spreadValues(__spreadValues({}, props), inputProps), {
            color: inputProps.color,
            value: props == null ? void 0 : props.value
          })
        )
      },
      slotProps: { actionBar: { actions: ["cancel", "clear", "today"] } },
      className: css.datePicker
    })
  ) }) });
};
var useClasses7 = makeClasses((props) => ({
  datePicker: {
    width: props.width,
    "& .MuiInputBase-input": {
      padding: "0.5rem 0 0.5rem 0.5rem"
    },
    "& .MuiIconButton-root": {
      padding: "0.2rem"
    },
    "& input": {
      fontSize: "0.9em"
    }
  }
}));

// trabecula/components/inputs/date-range.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var DateRange = ({
  dateInputProps = {},
  endDate,
  header,
  headerProps,
  setEndDate,
  setStartDate,
  startDate
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    RangeWrapper,
    {
      header,
      headerProps,
      startInput: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        DateInput,
        __spreadProps(__spreadValues({}, dateInputProps), {
          value: startDate,
          setValue: setStartDate,
          inputProps: { borderRadiuses: { top: 0, right: 0 } }
        })
      ),
      endInput: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        DateInput,
        __spreadProps(__spreadValues({}, dateInputProps), {
          value: endDate,
          setValue: setEndDate,
          inputProps: { borderRadiuses: { top: 0, left: 0 } }
        })
      )
    }
  );
};

// trabecula/components/inputs/dropdown.tsx
var import_material7 = require("@mui/material");
var import_jsx_runtime11 = require("react/jsx-runtime");
var Dropdown = (_a) => {
  var _b = _a, { options, value } = _b, props = __objRest(_b, ["options", "value"]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Input, __spreadProps(__spreadValues({}, props), { value, select: true, children: options.map((o2, i2) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_material7.MenuItem, { value: o2.value, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Text, { children: o2.label }) }, i2)) }));
};

// trabecula/components/inputs/input.tsx
var import_material8 = require("@mui/material");
var import_color3 = __toESM(require_color());
var import_jsx_runtime12 = require("react/jsx-runtime");
var DEFAULT_HEADER_PROPS = {
  fontSize: "0.8em",
  padding: { all: "0.15rem 0.3rem" }
};
var Input = Comp(
  (_a, ref) => {
    var _b = _a, {
      adornment,
      adornmentPosition = "end",
      borders,
      borderRadiuses,
      children,
      className,
      color,
      dense = false,
      flex,
      hasHelper = false,
      header,
      headerProps = {},
      helperText,
      inputProps,
      margins = {},
      maxLength,
      minWidth,
      onClick,
      onKeyDown,
      setValue,
      textAlign,
      value,
      variant = "outlined",
      width = "100%"
    } = _b, props = __objRest(_b, [
      "adornment",
      "adornmentPosition",
      "borders",
      "borderRadiuses",
      "children",
      "className",
      "color",
      "dense",
      "flex",
      "hasHelper",
      "header",
      "headerProps",
      "helperText",
      "inputProps",
      "margins",
      "maxLength",
      "minWidth",
      "onClick",
      "onKeyDown",
      "setValue",
      "textAlign",
      "value",
      "variant",
      "width"
    ]);
    headerProps = deepMerge(DEFAULT_HEADER_PROPS, headerProps);
    const { css, cx } = useClasses8({
      borders,
      borderRadiuses,
      color,
      dense,
      flex,
      hasHeader: header !== void 0,
      hasHelper,
      hasHelperText: !!helperText,
      hasOnClick: !!onClick,
      margins,
      minWidth,
      textAlign,
      width
    });
    const handleChange = (event) => setValue == null ? void 0 : setValue(event.target.value);
    const handleKeyDown = (event) => {
      event.stopPropagation();
      onKeyDown == null ? void 0 : onKeyDown(event);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      HeaderWrapper,
      __spreadProps(__spreadValues({}, { flex, header, headerProps, width }), {
        overflow: "initial",
        "aria-label": "input-wrapper",
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          import_material8.TextField,
          __spreadProps(__spreadValues(__spreadValues({}, props), { onClick, ref, value, variant }), {
            onChange: handleChange,
            onKeyDown: handleKeyDown,
            helperText: helperText ? typeof helperText === "string" ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { children: helperText }) : helperText : void 0,
            FormHelperTextProps: { component: "div" },
            inputProps: __spreadProps(__spreadValues({}, inputProps), { maxLength, value: value != null ? value : "" }),
            InputProps: __spreadValues({
              endAdornment: adornmentPosition === "end" && adornment ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_material8.InputAdornment, { position: "end", children: typeof adornment === "string" ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { fontSize: "0.9em", color: colors.custom.grey, children: adornment }) : adornment }) : null,
              startAdornment: adornmentPosition === "start" ? adornment : null
            }, props.InputProps),
            size: "small",
            className: cx(css.input, className),
            "aria-label": "input",
            children
          })
        )
      })
    );
  }
);
var useClasses8 = makeClasses((props) => {
  var _a, _b, _c;
  return {
    input: __spreadProps(__spreadValues({
      flex: props.flex
    }, makeMargins(__spreadProps(__spreadValues({}, props.margins), {
      bottom: (_b = (_a = props.margins) == null ? void 0 : _a.bottom) != null ? _b : props.hasHelper && !props.hasHelperText ? "1.3em" : 0
    }))), {
      minWidth: props.minWidth,
      width: "100%",
      "& input": {
        borderRadius: "inherit",
        padding: props.dense ? "0.2em 0.5em" : void 0,
        textAlign: props.textAlign,
        cursor: props.hasOnClick ? "pointer" : void 0
      },
      "& .MuiTypography-root": {
        display: "inline-grid",
        width: "100%",
        textAlign: props.textAlign
      },
      "& .MuiOutlinedInput-root": {
        background: "rgb(0 0 0 / 0.2)",
        "& fieldset": __spreadValues(__spreadValues({
          transition: "all 200ms ease-in-out",
          borderColor: props.color,
          borderStyle: "dotted"
        }, makeBorders(props.borders)), makeBorderRadiuses(
          deepMerge(props.hasHeader ? { top: 0 } : {}, (_c = props.borderRadiuses) != null ? _c : {})
        )),
        "&:hover fieldset": {
          borderColor: props.color ? (0, import_color3.default)(props.color).lighten(0.3).toString() : void 0
        },
        "&.Mui-focused fieldset": {
          borderColor: props.color
        }
      },
      "& .MuiSelect-select": {
        fontSize: "0.9em"
      },
      "& .MuiFormHelperText-root": {
        margin: "0.3em 0 0 0",
        color: props.color,
        fontSize: "0.75em",
        lineHeight: 1,
        textAlign: "center"
      }
    })
  };
});

// trabecula/components/inputs/log-ops-input.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var LOG_OPS_OPTS = [
  { label: "Any", value: "" },
  ...LOGICAL_OPS.map((op) => ({ label: op, value: op }))
];
var LogOpsInput = (_a) => {
  var _b = _a, {
    dropdownProps = {},
    header,
    headerProps,
    logOpValue,
    numInputProps,
    numValue,
    numValueDisplay,
    setLogOpValue,
    setNumValue,
    setNumValueDisplay
  } = _b, props = __objRest(_b, [
    "dropdownProps",
    "header",
    "headerProps",
    "logOpValue",
    "numInputProps",
    "numValue",
    "numValueDisplay",
    "setLogOpValue",
    "setNumValue",
    "setNumValueDisplay"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(HeaderWrapper, __spreadProps(__spreadValues(__spreadValues({ row: true, overflow: "hidden" }, { header, headerProps }), props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      Dropdown,
      __spreadValues({
        value: logOpValue,
        setValue: setLogOpValue,
        options: LOG_OPS_OPTS,
        minWidth: "3.7em",
        borderRadiuses: { top: 0, right: 0 },
        textAlign: "center"
      }, dropdownProps)
    ),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      NumInput,
      __spreadValues({
        value: numValue,
        valueDisplay: numValueDisplay,
        setValue: setNumValue,
        setValueDisplay: setNumValueDisplay,
        disabled: logOpValue === "",
        width: "100%",
        textAlign: "center",
        hasHelper: false,
        borderRadiuses: { top: 0, left: 0 }
      }, numInputProps)
    )
  ] }));
};

// trabecula/components/inputs/multi-input.tsx
var import_react12 = require("react");

// trabecula/components/inputs/multi-input-list.tsx
var import_react11 = require("react");

// node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js
var import_react9 = require("react");
var windowObject;
if (typeof window !== "undefined") {
  windowObject = window;
} else if (typeof self !== "undefined") {
  windowObject = self;
} else {
  windowObject = global;
}
var cancelFrame = null;
var requestFrame = null;
var TIMEOUT_DURATION = 20;
var clearTimeoutFn = windowObject.clearTimeout;
var setTimeoutFn = windowObject.setTimeout;
var cancelAnimationFrameFn = windowObject.cancelAnimationFrame || windowObject.mozCancelAnimationFrame || windowObject.webkitCancelAnimationFrame;
var requestAnimationFrameFn = windowObject.requestAnimationFrame || windowObject.mozRequestAnimationFrame || windowObject.webkitRequestAnimationFrame;
if (cancelAnimationFrameFn == null || requestAnimationFrameFn == null) {
  cancelFrame = clearTimeoutFn;
  requestFrame = function requestAnimationFrameViaSetTimeout(callback) {
    return setTimeoutFn(callback, TIMEOUT_DURATION);
  };
} else {
  cancelFrame = function cancelFrame2([animationFrameID, timeoutID]) {
    cancelAnimationFrameFn(animationFrameID);
    clearTimeoutFn(timeoutID);
  };
  requestFrame = function requestAnimationFrameWithSetTimeoutFallback(callback) {
    const animationFrameID = requestAnimationFrameFn(function animationFrameCallback() {
      clearTimeoutFn(timeoutID);
      callback();
    });
    const timeoutID = setTimeoutFn(function timeoutCallback() {
      cancelAnimationFrameFn(animationFrameID);
      callback();
    }, TIMEOUT_DURATION);
    return [animationFrameID, timeoutID];
  };
}
function createDetectElementResize(nonce) {
  let animationKeyframes;
  let animationName;
  let animationStartEvent;
  let animationStyle;
  let checkTriggers;
  let resetTriggers;
  let scrollListener;
  const attachEvent = typeof document !== "undefined" && document.attachEvent;
  if (!attachEvent) {
    resetTriggers = function(element) {
      const triggers = element.__resizeTriggers__, expand = triggers.firstElementChild, contract = triggers.lastElementChild, expandChild = expand.firstElementChild;
      contract.scrollLeft = contract.scrollWidth;
      contract.scrollTop = contract.scrollHeight;
      expandChild.style.width = expand.offsetWidth + 1 + "px";
      expandChild.style.height = expand.offsetHeight + 1 + "px";
      expand.scrollLeft = expand.scrollWidth;
      expand.scrollTop = expand.scrollHeight;
    };
    checkTriggers = function(element) {
      return element.offsetWidth !== element.__resizeLast__.width || element.offsetHeight !== element.__resizeLast__.height;
    };
    scrollListener = function(e2) {
      if (e2.target.className && typeof e2.target.className.indexOf === "function" && e2.target.className.indexOf("contract-trigger") < 0 && e2.target.className.indexOf("expand-trigger") < 0) {
        return;
      }
      const element = this;
      resetTriggers(this);
      if (this.__resizeRAF__) {
        cancelFrame(this.__resizeRAF__);
      }
      this.__resizeRAF__ = requestFrame(function animationFrame() {
        if (checkTriggers(element)) {
          element.__resizeLast__.width = element.offsetWidth;
          element.__resizeLast__.height = element.offsetHeight;
          element.__resizeListeners__.forEach(function forEachResizeListener(fn) {
            fn.call(element, e2);
          });
        }
      });
    };
    let animation = false;
    let keyframeprefix = "";
    animationStartEvent = "animationstart";
    const domPrefixes = "Webkit Moz O ms".split(" ");
    let startEvents = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");
    let pfx = "";
    {
      const elm = document.createElement("fakeelement");
      if (elm.style.animationName !== void 0) {
        animation = true;
      }
      if (animation === false) {
        for (let i2 = 0; i2 < domPrefixes.length; i2++) {
          if (elm.style[domPrefixes[i2] + "AnimationName"] !== void 0) {
            pfx = domPrefixes[i2];
            keyframeprefix = "-" + pfx.toLowerCase() + "-";
            animationStartEvent = startEvents[i2];
            animation = true;
            break;
          }
        }
      }
    }
    animationName = "resizeanim";
    animationKeyframes = "@" + keyframeprefix + "keyframes " + animationName + " { from { opacity: 0; } to { opacity: 0; } } ";
    animationStyle = keyframeprefix + "animation: 1ms " + animationName + "; ";
  }
  const createStyles = function(doc) {
    if (!doc.getElementById("detectElementResize")) {
      const css = (animationKeyframes ? animationKeyframes : "") + ".resize-triggers { " + (animationStyle ? animationStyle : "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }', head = doc.head || doc.getElementsByTagName("head")[0], style = doc.createElement("style");
      style.id = "detectElementResize";
      style.type = "text/css";
      if (nonce != null) {
        style.setAttribute("nonce", nonce);
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }
      head.appendChild(style);
    }
  };
  const addResizeListener = function(element, fn) {
    if (attachEvent) {
      element.attachEvent("onresize", fn);
    } else {
      if (!element.__resizeTriggers__) {
        const doc = element.ownerDocument;
        const elementStyle = windowObject.getComputedStyle(element);
        if (elementStyle && elementStyle.position === "static") {
          element.style.position = "relative";
        }
        createStyles(doc);
        element.__resizeLast__ = {};
        element.__resizeListeners__ = [];
        (element.__resizeTriggers__ = doc.createElement("div")).className = "resize-triggers";
        const expandTrigger = doc.createElement("div");
        expandTrigger.className = "expand-trigger";
        expandTrigger.appendChild(doc.createElement("div"));
        const contractTrigger = doc.createElement("div");
        contractTrigger.className = "contract-trigger";
        element.__resizeTriggers__.appendChild(expandTrigger);
        element.__resizeTriggers__.appendChild(contractTrigger);
        element.appendChild(element.__resizeTriggers__);
        resetTriggers(element);
        element.addEventListener("scroll", scrollListener, true);
        if (animationStartEvent) {
          element.__resizeTriggers__.__animationListener__ = function animationListener(e2) {
            if (e2.animationName === animationName) {
              resetTriggers(element);
            }
          };
          element.__resizeTriggers__.addEventListener(animationStartEvent, element.__resizeTriggers__.__animationListener__);
        }
      }
      element.__resizeListeners__.push(fn);
    }
  };
  const removeResizeListener = function(element, fn) {
    if (attachEvent) {
      element.detachEvent("onresize", fn);
    } else {
      element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
      if (!element.__resizeListeners__.length) {
        element.removeEventListener("scroll", scrollListener, true);
        if (element.__resizeTriggers__.__animationListener__) {
          element.__resizeTriggers__.removeEventListener(animationStartEvent, element.__resizeTriggers__.__animationListener__);
          element.__resizeTriggers__.__animationListener__ = null;
        }
        try {
          element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
        } catch (e2) {
        }
      }
    }
  };
  return {
    addResizeListener,
    removeResizeListener
  };
}
var AutoSizer = class extends import_react9.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      height: this.props.defaultHeight || 0,
      width: this.props.defaultWidth || 0
    };
    this._autoSizer = null;
    this._detectElementResize = null;
    this._didLogDeprecationWarning = false;
    this._parentNode = null;
    this._resizeObserver = null;
    this._timeoutId = null;
    this._onResize = () => {
      this._timeoutId = null;
      const {
        disableHeight,
        disableWidth,
        onResize
      } = this.props;
      if (this._parentNode) {
        const style = window.getComputedStyle(this._parentNode) || {};
        const paddingLeft = parseFloat(style.paddingLeft || "0");
        const paddingRight = parseFloat(style.paddingRight || "0");
        const paddingTop = parseFloat(style.paddingTop || "0");
        const paddingBottom = parseFloat(style.paddingBottom || "0");
        const rect = this._parentNode.getBoundingClientRect();
        const height = rect.height - paddingTop - paddingBottom;
        const width = rect.width - paddingLeft - paddingRight;
        if (!disableHeight && this.state.height !== height || !disableWidth && this.state.width !== width) {
          this.setState({
            height,
            width
          });
          const maybeLogDeprecationWarning = () => {
            if (!this._didLogDeprecationWarning) {
              this._didLogDeprecationWarning = true;
              console.warn("scaledWidth and scaledHeight parameters have been deprecated; use width and height instead");
            }
          };
          if (typeof onResize === "function") {
            onResize({
              height,
              width,
              // TODO Remove these params in the next major release
              get scaledHeight() {
                maybeLogDeprecationWarning();
                return height;
              },
              get scaledWidth() {
                maybeLogDeprecationWarning();
                return width;
              }
            });
          }
        }
      }
    };
    this._setRef = (autoSizer) => {
      this._autoSizer = autoSizer;
    };
  }
  componentDidMount() {
    const {
      nonce
    } = this.props;
    const parentNode = this._autoSizer ? this._autoSizer.parentNode : null;
    if (parentNode != null && parentNode.ownerDocument && parentNode.ownerDocument.defaultView && parentNode instanceof parentNode.ownerDocument.defaultView.HTMLElement) {
      this._parentNode = parentNode;
      const ResizeObserverInstance = parentNode.ownerDocument.defaultView.ResizeObserver;
      if (ResizeObserverInstance != null) {
        this._resizeObserver = new ResizeObserverInstance(() => {
          this._timeoutId = setTimeout(this._onResize, 0);
        });
        this._resizeObserver.observe(parentNode);
      } else {
        this._detectElementResize = createDetectElementResize(nonce);
        this._detectElementResize.addResizeListener(parentNode, this._onResize);
      }
      this._onResize();
    }
  }
  componentWillUnmount() {
    if (this._parentNode) {
      if (this._detectElementResize) {
        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
      }
      if (this._timeoutId !== null) {
        clearTimeout(this._timeoutId);
      }
      if (this._resizeObserver) {
        this._resizeObserver.disconnect();
      }
    }
  }
  render() {
    const _a = this.props, {
      children,
      defaultHeight,
      defaultWidth,
      disableHeight = false,
      disableWidth = false,
      doNotBailOutOnEmptyChildren = false,
      nonce,
      onResize,
      style = {},
      tagName = "div"
    } = _a, rest = __objRest(_a, [
      "children",
      "defaultHeight",
      "defaultWidth",
      "disableHeight",
      "disableWidth",
      "doNotBailOutOnEmptyChildren",
      "nonce",
      "onResize",
      "style",
      "tagName"
    ]);
    const {
      height,
      width
    } = this.state;
    const outerStyle = {
      overflow: "visible"
    };
    const childParams = {};
    let bailoutOnChildren = false;
    if (!disableHeight) {
      if (height === 0) {
        bailoutOnChildren = true;
      }
      outerStyle.height = 0;
      childParams.height = height;
      childParams.scaledHeight = height;
    }
    if (!disableWidth) {
      if (width === 0) {
        bailoutOnChildren = true;
      }
      outerStyle.width = 0;
      childParams.width = width;
      childParams.scaledWidth = width;
    }
    if (doNotBailOutOnEmptyChildren) {
      bailoutOnChildren = false;
    }
    return (0, import_react9.createElement)(tagName, __spreadValues({
      ref: this._setRef,
      style: __spreadValues(__spreadValues({}, outerStyle), style)
    }, rest), !bailoutOnChildren && children(childParams));
  }
};

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var t2 = arguments[e2];
      for (var r3 in t2) ({}).hasOwnProperty.call(t2, r3) && (n2[r3] = t2[r3]);
    }
    return n2;
  }, _extends.apply(null, arguments);
}

// node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e2) {
  if (void 0 === e2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e2;
}

// node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t2, e2) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, _setPrototypeOf(t2, e2);
}

// node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t2, o2) {
  t2.prototype = Object.create(o2.prototype), t2.prototype.constructor = t2, _setPrototypeOf(t2, o2);
}

// node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual2(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i2 = 0; i2 < newInputs.length; i2++) {
    if (!isEqual2(newInputs[i2], lastInputs[i2])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual3) {
  if (isEqual3 === void 0) {
    isEqual3 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual3(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var memoize_one_esm_default = memoizeOne;

// node_modules/react-window/dist/index.esm.js
var import_react10 = require("react");
var hasNativePerformanceNow = typeof performance === "object" && typeof performance.now === "function";
var now = hasNativePerformanceNow ? function() {
  return performance.now();
} : function() {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();
  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }
  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}
var size = -1;
function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (size === -1 || recalculate) {
    var div = document.createElement("div");
    var style = div.style;
    style.width = "50px";
    style.height = "50px";
    style.overflow = "scroll";
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }
  return size;
}
var cachedRTLResult = null;
function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }
  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement("div");
    var outerStyle = outerDiv.style;
    outerStyle.width = "50px";
    outerStyle.height = "50px";
    outerStyle.overflow = "scroll";
    outerStyle.direction = "rtl";
    var innerDiv = document.createElement("div");
    var innerStyle = innerDiv.style;
    innerStyle.width = "100px";
    innerStyle.height = "100px";
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);
    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = "positive-descending";
    } else {
      outerDiv.scrollLeft = 1;
      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = "negative";
      } else {
        cachedRTLResult = "positive-ascending";
      }
    }
    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }
  return cachedRTLResult;
}
var devWarningsOverscanCount = null;
var devWarningsOverscanRowsColumnsCount = null;
var devWarningsTagName = null;
if (process.env.NODE_ENV !== "production") {
  if (typeof window !== "undefined" && typeof window.WeakSet !== "undefined") {
    devWarningsOverscanCount = /* @__PURE__ */ new WeakSet();
    devWarningsOverscanRowsColumnsCount = /* @__PURE__ */ new WeakSet();
    devWarningsTagName = /* @__PURE__ */ new WeakSet();
  }
}
var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;
var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
};
var devWarningsDirection = null;
var devWarningsTagName$1 = null;
if (process.env.NODE_ENV !== "production") {
  if (typeof window !== "undefined" && typeof window.WeakSet !== "undefined") {
    devWarningsDirection = /* @__PURE__ */ new WeakSet();
    devWarningsTagName$1 = /* @__PURE__ */ new WeakSet();
  }
}
function createListComponent(_ref) {
  var _class;
  var getItemOffset2 = _ref.getItemOffset, getEstimatedTotalSize2 = _ref.getEstimatedTotalSize, getItemSize2 = _ref.getItemSize, getOffsetForIndexAndAlignment2 = _ref.getOffsetForIndexAndAlignment, getStartIndexForOffset2 = _ref.getStartIndexForOffset, getStopIndexForStartIndex2 = _ref.getStopIndexForStartIndex, initInstanceProps2 = _ref.initInstanceProps, shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange, validateProps2 = _ref.validateProps;
  return _class = /* @__PURE__ */ (function(_PureComponent) {
    _inheritsLoose(List, _PureComponent);
    function List(props) {
      var _this;
      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps2(_this.props, _assertThisInitialized(_this));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: _assertThisInitialized(_this),
        isScrolling: false,
        scrollDirection: "forward",
        scrollOffset: typeof _this.props.initialScrollOffset === "number" ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = memoize_one_esm_default(function(overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex,
          overscanStopIndex,
          visibleStartIndex,
          visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = memoize_one_esm_default(function(scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection,
          scrollOffset,
          scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;
      _this._getItemStyle = function(index) {
        var _this$props = _this.props, direction = _this$props.direction, itemSize = _this$props.itemSize, layout = _this$props.layout;
        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);
        var style;
        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset2(_this.props, index, _this._instanceProps);
          var size2 = getItemSize2(_this.props, index, _this._instanceProps);
          var isHorizontal = direction === "horizontal" || layout === "horizontal";
          var isRtl = direction === "rtl";
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: "absolute",
            left: isRtl ? void 0 : offsetHorizontal,
            right: isRtl ? offsetHorizontal : void 0,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size2 : "100%",
            width: isHorizontal ? size2 : "100%"
          };
        }
        return style;
      };
      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = memoize_one_esm_default(function(_2, __, ___) {
        return {};
      });
      _this._onScrollHorizontal = function(event) {
        var _event$currentTarget = event.currentTarget, clientWidth = _event$currentTarget.clientWidth, scrollLeft = _event$currentTarget.scrollLeft, scrollWidth = _event$currentTarget.scrollWidth;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            return null;
          }
          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                scrollOffset = -scrollLeft;
                break;
              case "positive-descending":
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          }
          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._onScrollVertical = function(event) {
        var _event$currentTarget2 = event.currentTarget, clientHeight = _event$currentTarget2.clientHeight, scrollHeight = _event$currentTarget2.scrollHeight, scrollTop = _event$currentTarget2.scrollTop;
        _this.setState(function(prevState) {
          if (prevState.scrollOffset === scrollTop) {
            return null;
          }
          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
            scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };
      _this._outerRefSetter = function(ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;
        if (typeof outerRef === "function") {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === "object" && outerRef.hasOwnProperty("current")) {
          outerRef.current = ref;
        }
      };
      _this._resetIsScrollingDebounced = function() {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }
        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };
      _this._resetIsScrolling = function() {
        _this._resetIsScrollingTimeoutId = null;
        _this.setState({
          isScrolling: false
        }, function() {
          _this._getItemStyleCache(-1, null);
        });
      };
      return _this;
    }
    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps2(nextProps);
      return null;
    };
    var _proto = List.prototype;
    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function(prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }
        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? "forward" : "backward",
          scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };
    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = "auto";
      }
      var _this$props2 = this.props, itemCount = _this$props2.itemCount, layout = _this$props2.layout;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      var scrollbarSize = 0;
      if (this._outerRef) {
        var outerRef = this._outerRef;
        if (layout === "vertical") {
          scrollbarSize = outerRef.scrollWidth > outerRef.clientWidth ? getScrollbarSize() : 0;
        } else {
          scrollbarSize = outerRef.scrollHeight > outerRef.clientHeight ? getScrollbarSize() : 0;
        }
      }
      this.scrollTo(getOffsetForIndexAndAlignment2(this.props, index, align, scrollOffset, this._instanceProps, scrollbarSize));
    };
    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props, direction = _this$props3.direction, initialScrollOffset = _this$props3.initialScrollOffset, layout = _this$props3.layout;
      if (typeof initialScrollOffset === "number" && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props4 = this.props, direction = _this$props4.direction, layout = _this$props4.layout;
      var _this$state = this.state, scrollOffset = _this$state.scrollOffset, scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;
      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef;
        if (direction === "horizontal" || layout === "horizontal") {
          if (direction === "rtl") {
            switch (getRTLOffsetType()) {
              case "negative":
                outerRef.scrollLeft = -scrollOffset;
                break;
              case "positive-ascending":
                outerRef.scrollLeft = scrollOffset;
                break;
              default:
                var clientWidth = outerRef.clientWidth, scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }
      this._callPropsCallbacks();
    };
    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };
    _proto.render = function render() {
      var _this$props5 = this.props, children = _this$props5.children, className = _this$props5.className, direction = _this$props5.direction, height = _this$props5.height, innerRef = _this$props5.innerRef, innerElementType = _this$props5.innerElementType, innerTagName = _this$props5.innerTagName, itemCount = _this$props5.itemCount, itemData = _this$props5.itemData, _this$props5$itemKey = _this$props5.itemKey, itemKey = _this$props5$itemKey === void 0 ? defaultItemKey$1 : _this$props5$itemKey, layout = _this$props5.layout, outerElementType = _this$props5.outerElementType, outerTagName = _this$props5.outerTagName, style = _this$props5.style, useIsScrolling = _this$props5.useIsScrolling, width = _this$props5.width;
      var isScrolling = this.state.isScrolling;
      var isHorizontal = direction === "horizontal" || layout === "horizontal";
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;
      var _this$_getRangeToRend = this._getRangeToRender(), startIndex = _this$_getRangeToRend[0], stopIndex = _this$_getRangeToRend[1];
      var items = [];
      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push((0, import_react10.createElement)(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : void 0,
            style: this._getItemStyle(_index)
          }));
        }
      }
      var estimatedTotalSize = getEstimatedTotalSize2(this.props, this._instanceProps);
      return (0, import_react10.createElement)(outerElementType || outerTagName || "div", {
        className,
        onScroll,
        ref: this._outerRefSetter,
        style: _extends({
          position: "relative",
          height,
          width,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction
        }, style)
      }, (0, import_react10.createElement)(innerElementType || innerTagName || "div", {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? "100%" : estimatedTotalSize,
          pointerEvents: isScrolling ? "none" : void 0,
          width: isHorizontal ? estimatedTotalSize : "100%"
        }
      }));
    };
    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === "function") {
        var itemCount = this.props.itemCount;
        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(), _overscanStartIndex = _this$_getRangeToRend2[0], _overscanStopIndex = _this$_getRangeToRend2[1], _visibleStartIndex = _this$_getRangeToRend2[2], _visibleStopIndex = _this$_getRangeToRend2[3];
          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }
      if (typeof this.props.onScroll === "function") {
        var _this$state2 = this.state, _scrollDirection = _this$state2.scrollDirection, _scrollOffset = _this$state2.scrollOffset, _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;
        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    };
    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props6 = this.props, itemCount = _this$props6.itemCount, overscanCount = _this$props6.overscanCount;
      var _this$state3 = this.state, isScrolling = _this$state3.isScrolling, scrollDirection = _this$state3.scrollDirection, scrollOffset = _this$state3.scrollOffset;
      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }
      var startIndex = getStartIndexForOffset2(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex2(this.props, startIndex, scrollOffset, this._instanceProps);
      var overscanBackward = !isScrolling || scrollDirection === "backward" ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === "forward" ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };
    return List;
  })(import_react10.PureComponent), _class.defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: false
  }, _class;
}
var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children, direction = _ref2.direction, height = _ref2.height, layout = _ref2.layout, innerTagName = _ref2.innerTagName, outerTagName = _ref2.outerTagName, width = _ref2.width;
  var instance = _ref3.instance;
  if (process.env.NODE_ENV !== "production") {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn("The innerTagName and outerTagName props have been deprecated. Please use the innerElementType and outerElementType props instead.");
      }
    }
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    switch (direction) {
      case "horizontal":
      case "vertical":
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }
        break;
      case "ltr":
      case "rtl":
        break;
      default:
        throw Error('An invalid "direction" prop has been specified. Value should be either "ltr" or "rtl". ' + ('"' + direction + '" was specified.'));
    }
    switch (layout) {
      case "horizontal":
      case "vertical":
        break;
      default:
        throw Error('An invalid "layout" prop has been specified. Value should be either "horizontal" or "vertical". ' + ('"' + layout + '" was specified.'));
    }
    if (children == null) {
      throw Error('An invalid "children" prop has been specified. Value should be a React component. ' + ('"' + (children === null ? "null" : typeof children) + '" was specified.'));
    }
    if (isHorizontal && typeof width !== "number") {
      throw Error('An invalid "width" prop has been specified. Horizontal lists must specify a number for width. ' + ('"' + (width === null ? "null" : typeof width) + '" was specified.'));
    } else if (!isHorizontal && typeof height !== "number") {
      throw Error('An invalid "height" prop has been specified. Vertical lists must specify a number for height. ' + ('"' + (height === null ? "null" : typeof height) + '" was specified.'));
    }
  }
};
var FixedSizeList = /* @__PURE__ */ createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount, itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset, instanceProps, scrollbarSize) {
    var direction = _ref4.direction, height = _ref4.height, itemCount = _ref4.itemCount, itemSize = _ref4.itemSize, layout = _ref4.layout, width = _ref4.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var size2 = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size2);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size2 + itemSize + scrollbarSize);
    if (align === "smart") {
      if (scrollOffset >= minOffset - size2 && scrollOffset <= maxOffset + size2) {
        align = "auto";
      } else {
        align = "center";
      }
    }
    switch (align) {
      case "start":
        return maxOffset;
      case "end":
        return minOffset;
      case "center": {
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);
        if (middleOffset < Math.ceil(size2 / 2)) {
          return 0;
        } else if (middleOffset > lastItemOffset + Math.floor(size2 / 2)) {
          return lastItemOffset;
        } else {
          return middleOffset;
        }
      }
      case "auto":
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }
    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount, itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction, height = _ref6.height, itemCount = _ref6.itemCount, itemSize = _ref6.itemSize, layout = _ref6.layout, width = _ref6.width;
    var isHorizontal = direction === "horizontal" || layout === "horizontal";
    var offset = startIndex * itemSize;
    var size2 = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size2 + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(
      itemCount - 1,
      startIndex + numVisibleItems - 1
      // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;
    if (process.env.NODE_ENV !== "production") {
      if (typeof itemSize !== "number") {
        throw Error('An invalid "itemSize" prop has been specified. Value should be a number. ' + ('"' + (itemSize === null ? "null" : typeof itemSize) + '" was specified.'));
      }
    }
  }
});

// trabecula/components/inputs/multi-input-row.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var MULTI_INPUT_ROW_HEIGHT = 35;
var MultiInputRow = (_a) => {
  var _b = _a, { bgColor } = _b, props = __objRest(_b, ["bgColor"]);
  var _a2, _b2;
  bgColor = bgColor || colors.foreground;
  const hasClick = !!props.onClick;
  const { css } = useClasses9({ bgColor, hasClick });
  const value = (_b2 = (_a2 = props.valueExtractor) == null ? void 0 : _a2.call(props, props.value)) != null ? _b2 : props.value;
  const handleClick = () => {
    var _a3;
    return (_a3 = props.onClick) == null ? void 0 : _a3.call(props, props.value);
  };
  const handleDelete = () => props.search.onChange(
    props.search.value.filter((v2) => {
      var _a3, _b3;
      return ((_b3 = (_a3 = props.valueExtractor) == null ? void 0 : _a3.call(props, v2)) != null ? _b3 : v2) !== value;
    })
  );
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(View, { row: true, className: css.root, style: props.style, children: [
    props.leftNode,
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      View,
      {
        onClick: hasClick ? handleClick : null,
        row: true,
        flex: 1,
        overflow: "hidden",
        padding: { all: "0 0.3rem" },
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          Text,
          {
            tooltip: value,
            tooltipProps: {
              enterDelay: _CONSTANTS.TOOLTIP.ENTER_DELAY,
              enterNextDelay: _CONSTANTS.TOOLTIP.ENTER_NEXT_DELAY,
              flexShrink: 1
            },
            className: css.label,
            children: value
          }
        )
      }
    ),
    props.rightNode,
    props.hasDelete && /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      Button,
      {
        onClick: handleDelete,
        icon: "Close",
        color: "transparent",
        colorOnHover: colors.custom.red,
        boxShadow: "none"
      }
    )
  ] });
};
var useClasses9 = makeClasses((props) => ({
  label: {
    padding: "0 0.3rem",
    fontSize: "0.8em",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  root: {
    alignItems: "center",
    borderBottom: `1px solid ${colors.custom.black}`,
    height: MULTI_INPUT_ROW_HEIGHT,
    width: "100%",
    backgroundColor: props.bgColor,
    cursor: props.hasClick ? "pointer" : void 0
  }
}));

// trabecula/components/inputs/multi-input-list.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var MultiInputList = (0, import_react11.forwardRef)(
  (_a, ref) => {
    var _b = _a, {
      hasDeleteAll = false,
      hasInput,
      renderRow,
      search,
      viewProps = {}
    } = _b, props = __objRest(_b, [
      "hasDeleteAll",
      "hasInput",
      "renderRow",
      "search",
      "viewProps"
    ]);
    const { css } = useClasses10({ hasDeleteAll, hasInput });
    const handleDeleteAll = () => search.onChange([]);
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(View, { column: true, height: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        View,
        __spreadProps(__spreadValues({}, viewProps), {
          column: true,
          height: "100%",
          borderRadiuses: {
            all: "0.3rem",
            top: hasInput ? 0 : void 0,
            bottom: hasDeleteAll ? 0 : void 0
          },
          className: css.listContainer,
          children: !search.value.length ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(CenteredText, { text: "No items", color: colors.custom.grey }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(View, { flex: 1, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(AutoSizer, { disableWidth: true, children: ({ height }) => /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            FixedSizeList,
            {
              ref,
              height,
              width: "100%",
              layout: "vertical",
              itemSize: MULTI_INPUT_ROW_HEIGHT,
              itemCount: search.value.length,
              children: ({ index, style }) => renderRow ? renderRow(index, style) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
                MultiInputRow,
                __spreadValues(__spreadValues({
                  value: search.value[index]
                }, { search, style }), props),
                index
              )
            }
          ) }) })
        })
      ),
      hasDeleteAll && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        Button,
        {
          text: "Delete All",
          icon: "Close",
          onClick: handleDeleteAll,
          colorOnHover: colors.custom.red,
          textColor: colors.custom.lightGrey,
          outlined: true,
          width: "100%",
          borderRadiuses: { top: 0 }
        }
      )
    ] });
  }
);
var useClasses10 = makeClasses((props) => ({
  listContainer: {
    border: `1px dotted ${colors.custom.grey}`,
    borderTop: props.hasInput ? "none" : void 0,
    borderBottom: props.hasDeleteAll ? "none" : void 0,
    minHeight: "2.5rem",
    backgroundColor: "rgb(0 0 0 / 0.2)",
    overflowY: "auto"
  }
}));

// trabecula/components/inputs/multi-input.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var MultiInput = Comp(
  ({
    hasDelete = true,
    hasDeleteAll = false,
    hasHelper = false,
    hasList = true,
    header,
    headerProps = {},
    inputProps,
    max,
    onChange,
    single,
    value = []
  }, inputRef) => {
    const isMax = max > -1 && value.length >= max;
    const disabled = (inputProps == null ? void 0 : inputProps.disabled) || isMax;
    const [inputValue, setInputValue] = (0, import_react12.useState)("");
    const onKeyDown = (e2) => {
      if (e2.key === "Enter" && !isMax) {
        e2.preventDefault();
        if (!value.includes(inputValue)) onChange([...value, inputValue]);
        setInputValue("");
      }
    };
    const renderList = () => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(MultiInputList, __spreadProps(__spreadValues({}, { hasDelete, hasDeleteAll }), { search: { onChange, value }, hasInput: true }));
    return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(View, { column: true, height: "100%", width: "100%", children: single && value.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(HeaderWrapper, __spreadProps(__spreadValues({}, { header, headerProps }), { children: renderList() })) : /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        Input,
        __spreadProps(__spreadValues(__spreadValues({}, { disabled, hasHelper, header, headerProps }), inputProps), {
          onKeyDown,
          ref: inputRef,
          value: inputValue,
          setValue: setInputValue,
          borderRadiuses: { bottom: !single && hasList ? 0 : void 0 }
        })
      ),
      !single && hasList && renderList()
    ] }) });
  }
);

// trabecula/components/inputs/num-input.tsx
var import_react13 = require("react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var NumInput = Comp(
  (_a, ref) => {
    var _b = _a, {
      hasHelper,
      maxValue,
      minValue,
      setValue,
      setValueDisplay,
      value,
      valueDisplay
    } = _b, props = __objRest(_b, [
      "hasHelper",
      "maxValue",
      "minValue",
      "setValue",
      "setValueDisplay",
      "value",
      "valueDisplay"
    ]);
    const [error, setError] = (0, import_react13.useState)(null);
    const handleChange = (val) => {
      if (!val) {
        setValue == null ? void 0 : setValue(null);
        setValueDisplay == null ? void 0 : setValueDisplay(null);
        setError(null);
      } else if (setValueDisplay) {
        setValueDisplay(val);
      } else if (isNaN(+val)) {
        toast.error("Must be a number");
      } else {
        setValue == null ? void 0 : setValue(+val);
        if (maxValue && +val > maxValue)
          hasHelper ? setError(`Max: ${maxValue}`) : toast.error(`Max: ${maxValue}`);
        else if (minValue && +val < minValue)
          hasHelper ? setError(`Min: ${minValue}`) : toast.error(`Min: ${minValue}`);
        else setError(null);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      Input,
      __spreadValues({
        ref,
        value: valueDisplay != null ? valueDisplay : value !== null && !isNaN(+value) ? String(value) : "",
        setValue: handleChange,
        error: hasHelper && !!error,
        helperText: hasHelper ? error : null,
        hasHelper
      }, props)
    );
  }
);

// trabecula/components/inputs/num-range.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var NumRange = ({
  hasHelper = false,
  header,
  headerProps,
  max,
  min,
  numInputProps = {},
  setMax,
  setMin
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    RangeWrapper,
    {
      header,
      headerProps,
      startInput: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        NumInput,
        __spreadProps(__spreadValues(__spreadValues({}, numInputProps), { hasHelper }), {
          value: min,
          setValue: setMin,
          placeholder: "Min",
          textAlign: "center",
          borderRadiuses: { top: 0, right: 0 }
        })
      ),
      endInput: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
        NumInput,
        __spreadProps(__spreadValues(__spreadValues({}, numInputProps), { hasHelper }), {
          value: max,
          setValue: setMax,
          placeholder: "Max",
          textAlign: "center",
          borderRadiuses: { top: 0, left: 0 }
        })
      )
    }
  );
};

// trabecula/components/inputs/range-wrapper.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var RangeWrapper = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(HeaderWrapper, { row: true, header: props.header, headerProps: props.headerProps, children: [
    props.startInput,
    /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
      View,
      {
        column: true,
        justify: "center",
        bgColor: "rgb(0 0 0 / 0.2)",
        padding: { all: "0 0.4rem" },
        borders: {
          top: `1px dotted ${colors.custom.grey}`,
          bottom: `1px dotted ${colors.custom.grey}`
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Text, { flexShrink: 0, fontSize: "0.8em", fontWeight: 600, children: "\u2014" })
      }
    ),
    props.endInput
  ] });
};

// trabecula/components/list/detail-rows.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
var DetailRows = ({ labelWidth = "8rem", rows }) => {
  const { css } = useClasses11({ labelWidth });
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(View, { className: css.table, children: rows.map(({ label, value }, i2) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(View, { className: css.row, children: [
    typeof label === "string" ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Text, { className: css.label, children: label }) : label,
    typeof value === "string" ? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Text, { noWrap: true, tooltip: value, children: value }) : value
  ] }, `${i2}-${label}`)) });
};
var useClasses11 = makeClasses((props) => ({
  label: {
    flexShrink: 0,
    marginRight: "1rem",
    width: props.labelWidth,
    color: colors.custom.blue,
    fontWeight: "bold",
    whiteSpace: "nowrap"
  },
  row: {
    display: "flex",
    flexFlow: "row nowrap"
  },
  table: {
    display: "flex",
    flexFlow: "column nowrap",
    padding: "0.5rem"
  }
}));

// trabecula/components/list/list-item.tsx
var import_material9 = require("@mui/material");
var import_color4 = __toESM(require_color());
var import_jsx_runtime21 = require("react/jsx-runtime");
var DEFAULT_ICON_END_MARGINS = { left: "1em" };
var DEFAULT_ICON_MARGINS = { right: "1em" };
var ListItem = (_a) => {
  var _b = _a, {
    children,
    color,
    icon,
    iconProps,
    iconEnd,
    iconEndMargins,
    iconMargins,
    onClick,
    text
  } = _b, props = __objRest(_b, [
    "children",
    "color",
    "icon",
    "iconProps",
    "iconEnd",
    "iconEndMargins",
    "iconMargins",
    "onClick",
    "text"
  ]);
  iconMargins = __spreadValues(__spreadValues({}, DEFAULT_ICON_MARGINS), iconMargins);
  iconEndMargins = __spreadValues(__spreadValues({}, DEFAULT_ICON_END_MARGINS), iconEndMargins);
  const { css, cx } = useClasses12({ color });
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    TooltipWrapper,
    {
      tooltip: children,
      tooltipProps: {
        arrow: false,
        bgColor: (0, import_color4.default)(colors.custom.black).fade(0.03).hex(),
        classes: { tooltip: css.tooltip },
        placement: "right-start",
        PopperProps: { className: css.tooltipPopper }
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
        import_material9.ListItem,
        __spreadProps(__spreadValues({
          button: Boolean(onClick),
          onClick,
          className: cx(css.root, props.className)
        }, props), {
          children: [
            icon && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_material9.ListItemIcon, { className: css.icon, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icon, __spreadProps(__spreadValues({}, iconProps), { name: icon, margins: iconMargins })) }),
            /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_material9.ListItemText, { className: css.text, children: text }),
            iconEnd && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_material9.ListItemIcon, { className: css.icon, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(Icon, { name: iconEnd, margins: iconEndMargins }) })
          ]
        })
      )
    }
  );
};
var useClasses12 = makeClasses((props) => ({
  icon: {
    minWidth: 0
  },
  root: {
    padding: "0.1rem 0.8rem",
    "&:not(:last-child)": {
      borderBottom: `1px solid ${colors.custom.darkGrey}`
    }
  },
  text: {
    color: props.color
  },
  tooltip: {
    margin: 0,
    padding: 0
  },
  tooltipPopper: {
    marginLeft: "-0.75rem !important"
  }
}));

// trabecula/components/media/icon.tsx
var import_material10 = require("@mui/material");
var import_jsx_runtime22 = require("react/jsx-runtime");
var Icon = (_a) => {
  var _b = _a, {
    className,
    color,
    margins,
    name,
    rotation,
    size: size2,
    viewProps = {}
  } = _b, props = __objRest(_b, [
    "className",
    "color",
    "margins",
    "name",
    "rotation",
    "size",
    "viewProps"
  ]);
  const { css, cx } = useClasses13({ rotation });
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(View, __spreadProps(__spreadValues({ column: true, className: cx(css.root, className), margins }, viewProps), { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_material10.Icon, __spreadProps(__spreadValues({}, props), { style: { color, fontSize: size2 }, children: Fmt.pascalToSnake(name) })) }));
};
var useClasses13 = makeClasses((props) => ({
  root: {
    justifyContent: "center",
    transform: props.rotation !== void 0 ? `rotate(${props.rotation}deg)` : void 0,
    transition: "all 200ms ease-in-out"
  }
}));

// trabecula/components/modals/confirm-modal.tsx
var import_react14 = require("react");
var import_jsx_runtime23 = require("react/jsx-runtime");
var ConfirmModal = ({
  cancelColor = colors.custom.grey,
  cancelIcon = "Close",
  cancelText = "Cancel",
  children,
  confirmColor = colors.custom.red,
  confirmIcon = "Delete",
  confirmText = "Delete",
  headerText = "Confirm Delete",
  height = "25rem",
  onCancel,
  onConfirm,
  setVisible,
  subText,
  width = "25rem"
}) => {
  const [isLoading, setIsLoading] = (0, import_react14.useState)(false);
  const handleClose = () => setVisible(false);
  const handleCancel = () => {
    onCancel == null ? void 0 : onCancel();
    handleClose();
  };
  const handleConfirm = () => __async(null, null, function* () {
    setIsLoading(true);
    const success = yield onConfirm();
    setIsLoading(false);
    if (success) handleClose();
  });
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(Modal.Container, { isLoading, onClose: handleCancel, height, width, children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Modal.Header, { children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Text, { preset: "title", children: headerText }) }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(Modal.Content, { align: "center", justify: "center", children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Icon, { name: "Delete", color: colors.custom.red, size: "5rem" }),
      (subText == null ? void 0 : subText.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(Text, { fontSize: "1.3em", textAlign: "center", children: subText }) : null,
      children
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(Modal.Footer, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        Button,
        {
          text: cancelText,
          icon: cancelIcon,
          color: cancelColor,
          onClick: handleCancel,
          disabled: isLoading
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
        Button,
        {
          text: confirmText,
          icon: confirmIcon,
          color: confirmColor,
          onClick: handleConfirm,
          disabled: isLoading
        }
      )
    ] })
  ] });
};

// trabecula/components/modals/modal/container.tsx
var import_react15 = require("react");
var import_react_draggable = __toESM(require("react-draggable"));
var import_material11 = require("@mui/material");
var import_jsx_runtime24 = require("react/jsx-runtime");
var Container = (_a) => {
  var _b = _a, {
    children,
    className,
    closeOnBackdrop = true,
    draggable = false,
    height,
    isLoading,
    maxHeight,
    maxWidth = "none",
    onClose,
    scroll = "paper",
    visible = true,
    width
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "closeOnBackdrop",
    "draggable",
    "height",
    "isLoading",
    "maxHeight",
    "maxWidth",
    "onClose",
    "scroll",
    "visible",
    "width"
  ]);
  const { css, cx } = useClasses14({ height, maxHeight, maxWidth, width });
  const handleClose = (_2, reason) => (reason === "backdropClick" ? closeOnBackdrop : true) && (onClose == null ? void 0 : onClose());
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    import_material11.Dialog,
    __spreadProps(__spreadValues(__spreadValues({}, props), { scroll }), {
      PaperComponent: draggable ? DraggablePaper : void 0,
      open: visible,
      onClose: handleClose,
      className: cx(css.modal, className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(LoadingOverlay, __spreadValues({}, { isLoading })),
        children
      ]
    })
  );
};
var DraggablePaper = (props) => {
  const { css, cx } = useDraggableClasses(null);
  const ref = (0, import_react15.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_react_draggable.default, { nodeRef: ref, cancel: '[class*="MuiDialogContent-root"]', children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_material11.Paper, __spreadProps(__spreadValues({}, props), { ref, className: cx(props.className, css.draggable) })) });
};
var useClasses14 = makeClasses((props) => ({
  modal: {
    "& .MuiDialog-paper": {
      position: "relative",
      maxHeight: props.maxHeight,
      maxWidth: props.maxWidth,
      height: props.height,
      width: props.width,
      background: colors.background
    }
  }
}));
var useDraggableClasses = makeClasses({
  draggable: {
    cursor: "grab",
    "& .MuiDialogContent-root": {
      cursor: "initial"
    }
  }
});

// trabecula/components/modals/modal/content.tsx
var import_material12 = require("@mui/material");
var import_jsx_runtime25 = require("react/jsx-runtime");
var Content = (_a) => {
  var _b = _a, {
    children,
    className,
    dividers = true,
    overflow = "auto",
    padding,
    position = "relative"
  } = _b, viewProps = __objRest(_b, [
    "children",
    "className",
    "dividers",
    "overflow",
    "padding",
    "position"
  ]);
  const { css } = useClasses15(null);
  padding = __spreadValues({ all: `${dividers ? "0.5rem" : "0.2rem"} 1rem` }, padding);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_material12.DialogContent, __spreadProps(__spreadValues({}, { dividers }), { className: css.content, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    View,
    __spreadProps(__spreadValues(__spreadValues({
      column: true,
      flex: 1,
      spacing: "0.5rem",
      width: "100%",
      height: "100%"
    }, { className, overflow, padding, position }), viewProps), {
      children
    })
  ) }));
};
var useClasses15 = makeClasses({
  content: {
    display: "flex",
    padding: 0
  }
});

// trabecula/components/modals/modal/footer.tsx
var import_material13 = require("@mui/material");
var import_jsx_runtime26 = require("react/jsx-runtime");
var Footer = (_a) => {
  var _b = _a, { children, uniformWidth = "10rem" } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_material13.DialogActions, { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    UniformList,
    __spreadProps(__spreadValues(__spreadValues({
      row: true,
      justify: "center",
      spacing: "0.5rem",
      width: "100%"
    }, { uniformWidth }), props), {
      children
    })
  ) });
};

// trabecula/components/modals/modal/header.tsx
var import_material14 = require("@mui/material");
var import_jsx_runtime27 = require("react/jsx-runtime");
var Header = ({
  children,
  className,
  justify = "center",
  leftNode,
  rightNode
}) => {
  const { css, cx } = useClasses16({ justify });
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_material14.DialogTitle, { className: cx(css.root, className), children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    ConditionalWrap,
    {
      condition: leftNode !== void 0 || rightNode !== void 0,
      wrap: (wrappedChildren) => /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(UniformList, { row: true, flex: 1, align: "center", children: [
        leftNode ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(View, { row: true, align: "center", justify: "flex-start", children: leftNode }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(View, {}),
        wrappedChildren,
        rightNode ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(View, { row: true, align: "center", justify: "flex-end", children: rightNode }) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(View, {})
      ] }),
      children
    }
  ) });
};
var useClasses16 = makeClasses((props) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: props.justify,
    alignItems: "center",
    padding: "0.5rem 1rem",
    textAlign: "center"
  }
}));

// trabecula/components/modals/modal/index.ts
var Modal = {
  Container,
  Content,
  Footer,
  Header
};

// trabecula/components/progress/bar.tsx
var import_material15 = require("@mui/material");
var import_color5 = __toESM(require_color());
var import_jsx_runtime28 = require("react/jsx-runtime");
var ProgressBar = Comp((props) => {
  var _a, _b, _c, _d;
  const minWidth = (props == null ? void 0 : props.minWidth) || "2em";
  const { css } = useClasses17(null);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(View, __spreadProps(__spreadValues({ row: true, flex: 1, align: "center", spacing: "1rem" }, props.viewProps), { children: [
    props.withText ? /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(View, { row: true, spacing: "0.5rem", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Text, { minWidth, textAlign: "center", children: props.numerator > -1 ? (_b = (_a = props.numeratorFormatter) == null ? void 0 : _a.call(props, props.numerator)) != null ? _b : props.numerator : "--" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Text, { children: "/" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Text, { minWidth, textAlign: "center", color: colors.custom.lightGrey, children: props.denominator > -1 ? (_d = (_c = props.denominatorFormatter) == null ? void 0 : _c.call(props, props.denominator)) != null ? _d : props.denominator : "--" })
    ] }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      import_material15.LinearProgress,
      {
        variant: "determinate",
        value: (props.numerator || 0) / (props.denominator || 1) * 100,
        className: css.progressBar
      }
    )
  ] }));
});
var useClasses17 = makeClasses({
  progressBar: {
    flex: 1,
    backgroundColor: (0, import_color5.default)(colors.custom.blue).fade(0.5).string(),
    "& .MuiLinearProgress-bar": {
      backgroundColor: colors.custom.blue
    }
  }
});

// trabecula/components/progress/circle.tsx
var import_material16 = require("@mui/material");
var import_color6 = __toESM(require_color());
var import_jsx_runtime29 = require("react/jsx-runtime");
var ProgressCircle = Comp((props) => {
  const color = props.color || colors.custom.white;
  const { css } = useClasses18({
    bgColor: props.bgColor || (0, import_color6.default)(color).fade(0.5).hex(),
    color
  });
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(View, { column: true, position: "relative", justify: "center", align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(View, { column: true, position: "absolute", children: props.children }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      import_material16.CircularProgress,
      {
        value: props.percent || 0,
        variant: "determinate",
        size: props.size,
        className: css.circle
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(View, { column: true, position: "absolute", children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
      import_material16.CircularProgress,
      {
        value: 100,
        variant: "determinate",
        size: props.size,
        className: css.bgCircle
      }
    ) })
  ] });
});
var useClasses18 = makeClasses((props) => ({
  bgCircle: {
    zIndex: 1,
    "& circle": { color: props.bgColor }
  },
  circle: {
    zIndex: 10,
    "& circle": { color: props.color }
  }
}));

// trabecula/components/table/pagination.tsx
var import_material17 = require("@mui/material");
var import_jsx_runtime30 = require("react/jsx-runtime");
var Pagination = (_a) => {
  var _b = _a, {
    className,
    count,
    isLoading,
    onChange,
    onFullLoad,
    viewProps = {}
  } = _b, props = __objRest(_b, [
    "className",
    "count",
    "isLoading",
    "onChange",
    "onFullLoad",
    "viewProps"
  ]);
  const { css, cx } = useClasses19(null);
  const handleChange = (_2, page) => onChange(page);
  const handleLastPageClick = (event, item) => {
    var _a2;
    if (onFullLoad) event.preventDefault(), onFullLoad();
    else (_a2 = item.onClick) == null ? void 0 : _a2.call(item, event);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(View, __spreadProps(__spreadValues({}, viewProps), { className: cx(css.root, viewProps == null ? void 0 : viewProps.className), children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(View, { position: "relative", overflow: "hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(LoadingOverlay, { isLoading }),
    /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
      import_material17.Pagination,
      __spreadValues({
        onChange: handleChange,
        showFirstButton: true,
        showLastButton: true,
        siblingCount: 4,
        boundaryCount: 2,
        count,
        className: cx(css.pagination, className),
        renderItem: (item) => /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
          import_material17.PaginationItem,
          __spreadProps(__spreadValues({}, item), {
            onClick: item.type === "last" ? (e2) => handleLastPageClick(e2, item) : item.onClick
          })
        )
      }, props)
    )
  ] }) }));
};
var useClasses19 = makeClasses({
  pagination: {
    borderRadius: 0,
    borderTop: "0.2rem solid #1b58a7",
    margin: 0,
    padding: "0.2rem 0.5rem 0.2rem",
    width: "100%",
    backgroundColor: colors.background,
    "& .MuiPagination-ul": { flexWrap: "nowrap" },
    "& > ul": { justifyContent: "center" },
    "& li button": { borderRadius: "0.2rem" }
  },
  root: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%"
  }
});

// trabecula/components/table/table.tsx
var import_react16 = require("react");
var import_material18 = require("@mui/material");
var import_jsx_runtime31 = require("react/jsx-runtime");
var MUI_TABLE_ROW_HEIGHT = 33;
var Table = ({
  className,
  columns,
  hasEmptyRows = false,
  hasPagination = false,
  rowCountOptions = [10, 25, 50],
  rows,
  paginationClassName
}) => {
  const { css, cx } = useClasses20(null);
  const [page, setPage] = (0, import_react16.useState)(0);
  const [rowsPerPage, setRowsPerPage] = (0, import_react16.useState)(rowCountOptions[0]);
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const displayedRows = (0, import_react16.useMemo)(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, rows]
  );
  const emptyRows = rowsPerPage - displayedRows.length;
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_jsx_runtime31.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material18.TableContainer, { component: import_material18.Paper, className, children: /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_material18.Table, { size: "small", children: [
      /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material18.TableHead, { children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material18.TableRow, { className: css.tableHeader, children: columns.map((column, i2) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material18.TableCell, { className: css.tableHeaderCell, children: column.header }, `${i2}-${column.header}`)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(import_material18.TableBody, { children: [
        displayedRows.map((row, rowKey) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material18.TableRow, { className: css.tableRowAlt, children: columns.map((column, cellKey) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          TableCellTrunc,
          {
            value: column.valueFunc(row),
            wrap: column.wrap,
            className: column.className
          },
          `${rowKey}-${cellKey}`
        )) }, `displayed-${rowKey}`)),
        hasEmptyRows && emptyRows > 0 && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          import_material18.TableRow,
          {
            className: css.tableRowAlt,
            style: { height: MUI_TABLE_ROW_HEIGHT * emptyRows },
            children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material18.TableCell, { colSpan: columns.length })
          }
        )
      ] })
    ] }) }),
    hasPagination && /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
      import_material18.TablePagination,
      {
        count: rows.length,
        page,
        onPageChange: (_2, p2) => setPage(p2),
        labelRowsPerPage: "Row count :",
        rowsPerPage,
        rowsPerPageOptions: rowCountOptions,
        onRowsPerPageChange: handleRowsPerPageChange,
        className: cx(css.pagination, paginationClassName)
      }
    )
  ] });
};
var TableCellTrunc = ({ className, value, wrap = false }) => {
  const { css, cx } = useClasses20(null);
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_material18.TableCell, { className: cx(css.tableCell, className), title: String(value), children: wrap ? /* @__PURE__ */ (0, import_jsx_runtime31.jsx)("span", { className: css.wrapped, children: value }) : value });
};
var useClasses20 = makeClasses({
  pagination: {
    borderBottom: "none",
    padding: 0
  },
  tableHeader: {
    backgroundColor: colors.custom.blue
  },
  tableHeaderCell: {
    color: colors.custom.white,
    fontWeight: 400,
    fontSize: "1em",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  tableCell: {
    maxWidth: "10em",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  tableRowAlt: {
    "&:nth-of-type(even) > td": { backgroundColor: colors.custom.grey },
    "&:nth-of-type(odd) > td": { backgroundColor: colors.foreground }
  },
  wrapped: {
    display: "-webkit-inline-box",
    overflow: "hidden",
    whiteSpace: "normal",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2
  }
});

// trabecula/components/text/centered-text.tsx
var import_jsx_runtime32 = require("react/jsx-runtime");
var CenteredText = (_a) => {
  var _b = _a, {
    color = colors.custom.lightGrey,
    text,
    viewProps = {}
  } = _b, props = __objRest(_b, [
    "color",
    "text",
    "viewProps"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(View, __spreadProps(__spreadValues({ row: true, justify: "center", align: "center", flex: 1 }, viewProps), { children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Text, __spreadProps(__spreadValues(__spreadValues({}, props), { color }), { children: text })) }));
};

// trabecula/components/text/date-detail.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
var DateDetail = (props) => {
  var _a;
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    Detail,
    __spreadProps(__spreadValues({}, props), {
      value: ((_a = props.value) == null ? void 0 : _a.length) ? (0, import_dayjs.default)(props.value).format("MMM D, YYYY [@] hh:mm:ss A") : null
    })
  );
};

// trabecula/components/text/detail.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
var Detail = (_a) => {
  var _b = _a, {
    emptyValueText = "--",
    label,
    labelProps = {},
    overflowX = "auto",
    overflowY = "hidden",
    row = false,
    tooltip,
    value,
    valueProps,
    withTooltip
  } = _b, props = __objRest(_b, [
    "emptyValueText",
    "label",
    "labelProps",
    "overflowX",
    "overflowY",
    "row",
    "tooltip",
    "value",
    "valueProps",
    "withTooltip"
  ]);
  const { css, cx } = useClasses21({ overflowX, overflowY });
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(View, __spreadProps(__spreadValues({ column: !row, row, spacing: row ? "0.5rem" : null }, props), { children: [
    typeof label === "string" ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Text, __spreadProps(__spreadValues({ preset: "detail-label" }, labelProps), { children: label })) : label,
    !value || typeof value === "string" ? /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
      Text,
      __spreadProps(__spreadValues({
        tooltip: tooltip != null ? tooltip : withTooltip ? value : void 0,
        className: cx(css.value, valueProps == null ? void 0 : valueProps.className)
      }, valueProps), {
        children: value || emptyValueText
      })
    ) : value
  ] }));
};
var useClasses21 = makeClasses((props) => ({
  value: {
    overflowX: props.overflowX,
    overflowY: props.overflowY,
    whiteSpace: "nowrap"
  }
}));

// trabecula/components/text/text.tsx
var import_material19 = require("@mui/material");
var import_jsx_runtime35 = require("react/jsx-runtime");
var PRESETS = {
  default: {
    fontSize: "1em",
    fontWeight: 400,
    overflow: "hidden"
  },
  "detail-label": {
    color: colors.custom.lightBlue,
    fontWeight: 500,
    whiteSpace: "nowrap"
  },
  "label-glow": {
    color: colors.custom.white,
    fontSize: "0.8em",
    textAlign: "center",
    textShadow: `0 0 10px ${colors.custom.blue}`,
    overflow: "visible"
  },
  "sub-text": {
    color: colors.custom.grey,
    fontSize: "0.7em",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  },
  title: {
    color: colors.custom.white,
    fontSize: "1.1em",
    fontWeight: 500,
    textAlign: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  }
};
var Text = (_a) => {
  var _b = _a, {
    children,
    className,
    color,
    component = "span",
    fontSize,
    fontWeight,
    overflow,
    preset = "default",
    tooltip,
    tooltipProps
  } = _b, props = __objRest(_b, [
    "children",
    "className",
    "color",
    "component",
    "fontSize",
    "fontWeight",
    "overflow",
    "preset",
    "tooltip",
    "tooltipProps"
  ]);
  const { css, cx } = useClasses22({ color, fontSize, fontWeight, overflow, preset });
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(TooltipWrapper, __spreadProps(__spreadValues({}, { tooltip, tooltipProps }), { children: /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_material19.Typography, __spreadProps(__spreadValues(__spreadValues({}, { component }), props), { className: cx(css.root, className), children })) }));
};
var useClasses22 = makeClasses((props) => {
  var _a, _b, _c, _d;
  const preset = PRESETS[props.preset];
  return {
    root: __spreadProps(__spreadValues({}, preset), {
      color: (_a = props.color) != null ? _a : preset == null ? void 0 : preset.color,
      fontSize: (_b = props.fontSize) != null ? _b : preset == null ? void 0 : preset.fontSize,
      fontWeight: (_c = props.fontWeight) != null ? _c : preset == null ? void 0 : preset.fontWeight,
      overflow: (_d = props.overflow) != null ? _d : preset == null ? void 0 : preset.overflow
    })
  };
});

// trabecula/components/toggles/accordion.tsx
var import_react17 = require("react");
var import_material20 = require("@mui/material");
var import_jsx_runtime36 = require("react/jsx-runtime");
var Accordion = ({
  children,
  className,
  color = "transparent",
  dense = false,
  expanded = false,
  fullWidth = false,
  header,
  setExpanded
}) => {
  const [isExpanded, setIsExpanded] = (0, import_react17.useState)(expanded);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
    setExpanded == null ? void 0 : setExpanded(!isExpanded);
  };
  const { css, cx } = useClasses23({ dense, expanded: isExpanded, fullWidth });
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(
    import_material20.Accordion,
    {
      expanded: isExpanded,
      disableGutters: true,
      TransitionProps: { unmountOnExit: true },
      className: cx(css.accordion, className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
          Button,
          {
            onClick: handleClick,
            endNode: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Icon, { name: "ExpandMore", rotation: expanded ? 180 : 0 }),
            color,
            width: "100%",
            className: css.button,
            children: header
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(View, { column: true, children })
      ]
    }
  );
};
var useClasses23 = makeClasses((props) => ({
  accordion: {
    margin: 0,
    padding: 0,
    width: props.fullWidth ? "100%" : "auto",
    background: "transparent",
    boxShadow: "none",
    "& button": {
      boxShadow: "none"
    },
    "&:before": {
      display: "none"
    }
  },
  button: {
    justifyContent: "space-between",
    borderBottomRightRadius: props.expanded ? 0 : void 0,
    borderBottomLeftRadius: props.expanded ? 0 : void 0,
    padding: props.dense ? "0.2rem 0.6rem" : "0.5rem 1rem",
    fontSize: "1em",
    textTransform: "capitalize"
  }
}));

// trabecula/components/toggles/checkbox.tsx
var import_material21 = require("@mui/material");
var import_color7 = __toESM(require_color());
var import_jsx_runtime37 = require("react/jsx-runtime");
var Checkbox = ({
  center,
  checked,
  className,
  color = colors.custom.blue,
  disabled,
  flex = 1,
  fullWidth = true,
  indeterminate,
  label,
  margins = { left: 0, right: 0 },
  padding = { all: "0.3rem" },
  setChecked
}) => {
  const { css, cx } = useClasses24({ center, color, disabled, flex, fullWidth, margins, padding });
  const toggleChecked = () => !disabled && setChecked(!checked);
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
    import_material21.FormControlLabel,
    __spreadProps(__spreadValues({}, { disabled, label }), {
      control: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
        import_material21.Checkbox,
        __spreadProps(__spreadValues({}, { checked, disabled, indeterminate }), {
          onClick: toggleChecked,
          className: css.checkbox
        })
      ),
      className: cx(css.label, className)
    })
  );
};
var useClasses24 = makeClasses((props) => ({
  checkbox: __spreadProps(__spreadValues({}, makePadding(props.padding)), {
    color: `${props.color} !important`,
    opacity: props.disabled ? 0.5 : 1
  }),
  label: __spreadProps(__spreadValues({
    display: "flex",
    flex: props.flex,
    justifyContent: props.center ? "center" : void 0,
    borderRadius: "0.5rem"
  }, makeMargins(props.margins)), {
    width: props.fullWidth ? "100%" : "auto",
    whiteSpace: "nowrap",
    transition: "all 200ms ease-in-out",
    userSelect: "none",
    "&:hover": {
      backgroundColor: (0, import_color7.default)(colors.custom.blue).fade(0.8).string()
    },
    "& .MuiFormControlLabel-label": {
      paddingRight: "0.4em"
    }
  })
}));

// trabecula/components/tooltip/tooltip.tsx
var import_material22 = require("@mui/material");
var import_color8 = __toESM(require_color());
var import_jsx_runtime38 = require("react/jsx-runtime");
var Tooltip = (_a) => {
  var _b = _a, {
    arrow = true,
    bgColor = colors.background,
    borderColor = colors.custom.blue,
    children,
    color,
    flexShrink = 0,
    fontSize = "0.95em",
    minWidth,
    maxWidth = "25rem",
    padding = "0.4rem 0.8rem",
    placement = "bottom-start",
    title,
    viewProps = {}
  } = _b, props = __objRest(_b, [
    "arrow",
    "bgColor",
    "borderColor",
    "children",
    "color",
    "flexShrink",
    "fontSize",
    "minWidth",
    "maxWidth",
    "padding",
    "placement",
    "title",
    "viewProps"
  ]);
  const { css } = useClasses25({
    borderColor,
    bgColor,
    color,
    flexShrink,
    fontSize,
    maxWidth,
    minWidth,
    padding
  });
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    import_material22.Tooltip,
    __spreadProps(__spreadValues(__spreadValues({}, props), { arrow, placement, title }), {
      classes: { arrow: css.arrow, popper: css.popper, tooltip: css.tooltip },
      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(View, __spreadProps(__spreadValues({}, viewProps), { className: css.container, children }))
    })
  );
};
var useClasses25 = makeClasses((props) => ({
  arrow: {
    color: props.borderColor
  },
  container: {
    display: "flex",
    flexShrink: props.flexShrink,
    overflow: "hidden",
    textOverflow: "ellipsis",
    userSelect: "auto"
  },
  tooltip: {
    border: `3px solid ${props.borderColor}`,
    maxWidth: props.maxWidth,
    minWidth: props.minWidth,
    padding: props.padding,
    backgroundColor: (0, import_color8.default)(props.bgColor).fade(0.03).string(),
    color: props.color,
    fontSize: props.fontSize,
    whiteSpace: "pre-wrap",
    boxShadow: "rgb(0 0 0 / 97%) 0px 0px 2px 0px"
  },
  popper: {
    zIndex: 1e6
  }
}));

// trabecula/components/tooltip/tooltip-wrapper.tsx
var import_jsx_runtime39 = require("react/jsx-runtime");
var TooltipWrapper = ({ children, tooltip, tooltipProps = {} }) => {
  const wrap = (c) => /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Tooltip, __spreadProps(__spreadValues({ title: tooltip }, tooltipProps), { children: c }));
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    ConditionalWrap,
    {
      wrap,
      condition: tooltip !== void 0 && !(typeof tooltip === "string" && !(tooltip == null ? void 0 : tooltip.length)),
      children
    }
  );
};

// trabecula/components/wrappers/card.tsx
var import_jsx_runtime40 = require("react/jsx-runtime");
var Card = Comp(
  (_a, ref) => {
    var _b = _a, {
      bgColor = colors.foreground,
      borderRadiuses = {},
      children,
      column = true,
      display = "flex",
      header,
      height,
      headerProps,
      overflow,
      padding = {},
      row = false,
      spacing,
      width
    } = _b, viewProps = __objRest(_b, [
      "bgColor",
      "borderRadiuses",
      "children",
      "column",
      "display",
      "header",
      "height",
      "headerProps",
      "overflow",
      "padding",
      "row",
      "spacing",
      "width"
    ]);
    borderRadiuses = deepMerge({ bottom: "0.5rem", top: !!header ? 0 : "0.5rem" }, borderRadiuses);
    padding = deepMerge({ all: "0.5rem" }, padding);
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
      HeaderWrapper,
      __spreadProps(__spreadValues(__spreadValues({}, viewProps), { borderRadiuses, display, header, headerProps, height, overflow, width }), {
        children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
          View,
          __spreadProps(__spreadValues(__spreadValues({
            position: "relative",
            column: column && !row,
            flex: 1
          }, { bgColor, borderRadiuses, height, overflow, padding, ref, row, spacing, width }), viewProps), {
            "aria-label": "card",
            children
          })
        )
      })
    );
  }
);

// trabecula/components/wrappers/card-grid.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
var CardGrid = Comp(
  (_a, ref) => {
    var _b = _a, {
      cards,
      cardsProps,
      children,
      className,
      flexFlow = "row wrap",
      maxCards = 6,
      noResultsText = "No results found",
      padding = { all: "0.3rem 0.3rem 7rem" },
      position = "relative"
    } = _b, props = __objRest(_b, [
      "cards",
      "cardsProps",
      "children",
      "className",
      "flexFlow",
      "maxCards",
      "noResultsText",
      "padding",
      "position"
    ]);
    const { css, cx } = useClasses26({ hasCards: cards.length > 0, flexFlow, maxCards, position });
    return /* @__PURE__ */ (0, import_jsx_runtime41.jsxs)(View, __spreadProps(__spreadValues({}, props), { className: cx(css.root, className), children: [
      cards.length ? /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        View,
        __spreadProps(__spreadValues(__spreadValues({}, cardsProps), { padding, ref }), {
          className: cx(css.cards, cardsProps == null ? void 0 : cardsProps.className),
          children: cards
        })
      ) : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(View, { column: true, flex: 1, children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(CenteredText, { text: noResultsText }) }),
      children
    ] }));
  }
);
var useClasses26 = makeClasses((props, theme) => ({
  cards: __spreadProps(__spreadValues({
    display: "flex",
    flexFlow: props.flexFlow,
    flex: "initial",
    overflowY: "auto"
  }, !props.hasCards ? { height: "-webkit-fill-available" } : {}), {
    "& > *": {
      overflow: "hidden",
      flexBasis: `calc(100% / ${props.maxCards})`,
      [theme.breakpoints.down("xl")]: {
        flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 1)})`
      },
      [theme.breakpoints.down("lg")]: {
        flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 2)})`
      },
      [theme.breakpoints.down("md")]: {
        flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 3)})`
      },
      [theme.breakpoints.down("sm")]: {
        flexBasis: `calc(100% / ${Math.max(1, props.maxCards - 4)})`
      }
    }
  }),
  root: {
    position: props.position,
    display: "flex",
    flexDirection: "column",
    flex: 1,
    overflowY: "auto"
  }
}));

// trabecula/components/wrappers/chip.tsx
var import_material23 = require("@mui/material");
var import_jsx_runtime42 = require("react/jsx-runtime");
var Chip = (_a) => {
  var _b = _a, {
    bgColor,
    className,
    color,
    height,
    icon,
    iconColor,
    iconProps,
    label,
    padding,
    width
  } = _b, props = __objRest(_b, [
    "bgColor",
    "className",
    "color",
    "height",
    "icon",
    "iconColor",
    "iconProps",
    "label",
    "padding",
    "width"
  ]);
  const { css, cx } = useClasses27({ bgColor, color, height, padding, width });
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    import_material23.Chip,
    __spreadProps(__spreadValues(__spreadValues({}, props), { label }), {
      icon: icon ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
        Icon,
        __spreadValues({
          name: icon,
          color: iconColor,
          size: "inherit",
          margins: { left: "0.5rem !important" }
        }, iconProps)
      ) : void 0,
      className: cx(css.chip, className)
    })
  );
};
var useClasses27 = makeClasses((props) => ({
  chip: {
    height: props.height,
    backgroundColor: props.bgColor,
    color: props.color,
    transition: "all 200ms ease-in-out",
    width: props.width,
    "& > .MuiChip-label": __spreadValues({}, makePadding(props.padding))
  }
}));

// trabecula/components/wrappers/conditional.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
var ConditionalWrap = ({
  condition,
  wrap,
  children
}) => condition ? wrap(children) : /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_jsx_runtime43.Fragment, { children });

// trabecula/components/wrappers/context-menu.tsx
var import_react18 = require("react");
var import_material24 = require("@mui/material");
var import_color9 = __toESM(require_color());
var import_jsx_runtime44 = require("react/jsx-runtime");
var ContextMenu = (_a) => {
  var _b = _a, { children, disabled, id, menuItems } = _b, props = __objRest(_b, ["children", "disabled", "id", "menuItems"]);
  const { css } = useClasses28(null);
  const [mouseX, setMouseX] = (0, import_react18.useState)(null);
  const [mouseY, setMouseY] = (0, import_react18.useState)(null);
  const handleContext = (event) => {
    event.preventDefault();
    if (disabled) return;
    setMouseX(event.clientX - 2);
    setMouseY(event.clientY - 4);
  };
  const handleClose = () => {
    setMouseX(null);
    setMouseY(null);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(View, __spreadProps(__spreadValues({}, props), { id, onContextMenu: handleContext, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
      import_material24.Menu,
      {
        open: mouseY !== null,
        onClose: handleClose,
        anchorReference: "anchorPosition",
        anchorPosition: mouseX !== null && mouseY !== null ? { top: mouseY, left: mouseX } : void 0,
        PopoverClasses: { paper: css.contextMenu },
        MenuListProps: { className: css.contextMenuInner },
        children: menuItems.filter(Boolean).map((item) => [
          item.divider === "top" ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Divider, {}) : null,
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Item, { item, onClose: handleClose }),
          item.divider === "bottom" ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(Divider, {}) : null
        ])
      }
    )
  ] }));
};
var Item = ({
  item,
  onClose
}) => {
  var _a, _b, _c;
  const { css } = useClasses28(null);
  const color = item.color || colors.custom.lightGrey;
  const handleClick = item.onClick ? () => {
    item.onClick();
    onClose();
  } : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    ListItem,
    {
      text: item.label,
      icon: item.icon,
      iconProps: __spreadValues({ color }, (_a = item.iconProps) != null ? _a : {}),
      color,
      iconEnd: ((_b = item.subItems) == null ? void 0 : _b.length) ? "ChevronRight" : null,
      onClick: handleClick,
      className: css.item,
      children: ((_c = item.subItems) == null ? void 0 : _c.length) ? /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(View, { column: true, children: item.subItems.map((subItem) => /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SubItem, __spreadValues({}, { subItem, onClose }), subItem.label)) }) : null
    },
    item.label
  );
};
var SubItem = ({
  onClose,
  subItem
}) => {
  const handleClick = () => {
    subItem.onClick();
    onClose();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(ListItem, { text: subItem.label, icon: subItem.icon, onClick: handleClick });
};
var useClasses28 = makeClasses({
  contextMenu: {
    background: (0, import_color9.default)(colors.custom.black).fade(0.03).string()
  },
  contextMenuInner: {
    padding: 0
  },
  item: {
    padding: "0.35rem 1rem 0.35rem 0.7rem"
  }
});

// trabecula/components/wrappers/divider.tsx
var import_material25 = require("@mui/material");
var import_jsx_runtime45 = require("react/jsx-runtime");
var Divider = (_a) => {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_material25.Divider, __spreadValues({ flexItem: true }, props));
};

// trabecula/components/wrappers/header.tsx
var import_jsx_runtime46 = require("react/jsx-runtime");
var DEFAULT_HEADER_PROPS2 = {
  bgColor: colors.custom.black,
  borderRadiuses: { top: "0.5rem" },
  fontSize: "0.8em",
  justify: "center",
  padding: { all: "0.15rem 0.3rem" },
  row: true
};
var HeaderWrapper = (_a) => {
  var _b = _a, {
    children,
    display,
    header,
    height = "auto",
    headerProps = {},
    position = "relative",
    row,
    spacing
  } = _b, viewProps = __objRest(_b, [
    "children",
    "display",
    "header",
    "height",
    "headerProps",
    "position",
    "row",
    "spacing"
  ]);
  headerProps = deepMerge(DEFAULT_HEADER_PROPS2, headerProps);
  const wrap = (c) => /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(View, __spreadProps(__spreadValues({}, viewProps), { column: true, height, "aria-label": "header-wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(View, __spreadProps(__spreadValues({}, headerProps), { "aria-label": "header", children: typeof header === "string" ? /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(Text, { flex: 1, fontSize: headerProps.fontSize, textAlign: "center", children: header }) : header })),
    c
  ] }));
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(ConditionalWrap, { condition: !!header, wrap, children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    View,
    __spreadProps(__spreadValues(__spreadValues({
      overflow: "auto"
    }, viewProps), { display, height, position, row, spacing }), {
      "aria-label": "header-wrapper-content",
      children
    })
  ) });
};

// trabecula/components/wrappers/loading-overlay.tsx
var import_material26 = require("@mui/material");
var import_jsx_runtime47 = require("react/jsx-runtime");
var LoadingOverlay = ({ children, isLoading, sub }) => {
  const { css } = useClasses29({ isLoading });
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(import_jsx_runtime47.Fragment, { children: [
    children,
    /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(
      View,
      {
        column: true,
        align: "center",
        justify: "center",
        spacing: "1rem",
        height: "100%",
        width: "100%",
        opacity: isLoading ? 1 : 0,
        className: css.loadingOverlay,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_material26.CircularProgress, { color: "inherit" }),
          typeof sub === "string" ? /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(Text, { preset: "title", fontSize: "0.9em", children: sub }) : sub
        ]
      }
    )
  ] });
};
var useClasses29 = makeClasses((props) => ({
  loadingOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 100,
    transition: "all 225ms ease-in-out",
    pointerEvents: props.isLoading ? "auto" : "none"
  }
}));

// trabecula/components/wrappers/side-scroller.tsx
var import_react19 = require("react");
var import_jsx_runtime48 = require("react/jsx-runtime");
var SideScroller = ({ children, className, innerClassName }) => {
  const ref = (0, import_react19.useRef)(null);
  const { width } = useElementResize(ref);
  const [isLeftButtonVisible, setIsLeftButtonVisible] = (0, import_react19.useState)(false);
  const [isRightButtonVisible, setIsRightButtonVisible] = (0, import_react19.useState)(false);
  const [scrollPos, setScrollPos] = (0, import_react19.useState)(0);
  const { css, cx } = useClasses30({ isLeftButtonVisible, isRightButtonVisible });
  const getButtonVisibility = () => {
    if (!ref.current) return [false, false];
    const { clientWidth, scrollWidth, scrollLeft } = ref.current;
    if (!(clientWidth < scrollWidth)) return [false, false];
    return [scrollLeft > 0, clientWidth + scrollLeft < scrollWidth - 5];
  };
  const handleScroll = (direction) => {
    if (!ref.current) return false;
    const maxLeft = ref.current.clientWidth;
    const scrollAmount = (direction === "left" ? -1 : 1) * width / 2;
    const newScrollPos = direction === "left" ? Math.max(ref.current.scrollLeft - width / 2, 0) : Math.min(ref.current.scrollLeft + width / 2, maxLeft);
    ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setScrollPos(newScrollPos);
  };
  (0, import_react19.useEffect)(() => {
    const node = ref.current;
    const scrollListener = debounce2(setScrollPos.bind(node.scrollLeft), 50);
    node.addEventListener("scroll", scrollListener);
    return () => node.removeEventListener("scroll", scrollListener);
  }, []);
  (0, import_react19.useEffect)(() => {
    const [left, right] = getButtonVisibility();
    setIsLeftButtonVisible(left);
    setIsRightButtonVisible(right);
  }, [scrollPos]);
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsxs)(View, { className: cx(css.root, className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      IconButton,
      {
        name: "ChevronLeft",
        onClick: () => handleScroll("left"),
        className: cx(css.scrollButton, "left"),
        size: "large"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(View, { ref, className: cx(css.items, innerClassName), children }),
    /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
      IconButton,
      {
        name: "ChevronRight",
        onClick: () => handleScroll("right"),
        className: cx(css.scrollButton, "right"),
        size: "large"
      }
    )
  ] });
};
var useClasses30 = makeClasses((props) => ({
  items: {
    display: "flex",
    flexFlow: "row nowrap",
    flex: 1,
    overflowX: "auto",
    overflowY: "hidden",
    "& > *:last-child": {
      marginRight: "1rem"
    },
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  root: {
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    minWidth: 0,
    overflowX: "auto",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  scrollButton: {
    margin: "0 0.2rem",
    width: "1rem",
    height: "1rem",
    backgroundColor: colors.custom.blue,
    "&:hover": {
      backgroundColor: colors.custom.blue
    },
    "& svg": {
      width: "0.6em",
      height: "0.6em"
    },
    "&.left": {
      display: props.isLeftButtonVisible ? "flex" : "none"
    },
    "&.right": {
      display: props.isRightButtonVisible ? "flex" : "none"
    }
  }
}));

// trabecula/components/wrappers/uniform-list.tsx
var import_jsx_runtime49 = require("react/jsx-runtime");
var UniformList = (_a) => {
  var _b = _a, { children, uniformWidth } = _b, props = __objRest(_b, ["children", "uniformWidth"]);
  const { css, cx } = useClasses31({ uniformWidth });
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(View, __spreadProps(__spreadValues({}, props), { className: cx(css.uniform, props == null ? void 0 : props.className), children }));
};
var useClasses31 = makeClasses((props) => ({
  uniform: {
    "& > *": {
      flexBasis: "100%",
      maxWidth: props.uniformWidth
    }
  }
}));

// trabecula/components/wrappers/view.tsx
var import_jsx_runtime50 = require("react/jsx-runtime");
var View = Comp(
  (_a, ref) => {
    var _b = _a, {
      align,
      bgColor,
      borders,
      borderRadiuses,
      children,
      className,
      column,
      display,
      flex,
      height,
      justify,
      margins,
      opacity,
      overflow,
      padding,
      position,
      row,
      spacing,
      width,
      wrap
    } = _b, props = __objRest(_b, [
      "align",
      "bgColor",
      "borders",
      "borderRadiuses",
      "children",
      "className",
      "column",
      "display",
      "flex",
      "height",
      "justify",
      "margins",
      "opacity",
      "overflow",
      "padding",
      "position",
      "row",
      "spacing",
      "width",
      "wrap"
    ]);
    if (row) column = false;
    const { css, cx } = useClasses32({
      align,
      bgColor,
      borders,
      borderRadiuses,
      column,
      display,
      flex,
      height,
      justify,
      margins,
      opacity,
      overflow,
      padding,
      position,
      row,
      spacing,
      width,
      wrap
    });
    return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", __spreadProps(__spreadValues({}, props), { ref, className: cx(className, css.view), children }));
  }
);
var useClasses32 = makeClasses((props) => {
  var _a;
  return {
    view: __spreadValues(__spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues({
      position: props.position,
      display: (_a = props.display) != null ? _a : props.column || props.row ? "flex" : void 0,
      flexDirection: props.column ? "column" : props.row ? "row" : void 0,
      flex: props.flex,
      flexWrap: props.wrap,
      alignItems: props.align,
      justifyContent: props.justify
    }, makeBorders(props.borders)), makeBorderRadiuses(props.borderRadiuses)), makeMargins(props.margins)), makePadding(props.padding)), {
      height: props.height,
      width: props.width,
      backgroundColor: props.bgColor,
      opacity: props.opacity,
      overflow: props.overflow
    }), props.spacing ? {
      "& > *:not(:last-child)": {
        [props.column ? "marginBottom" : "marginRight"]: props.spacing
      }
    } : {})
  };
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  Button,
  Card,
  CardGrid,
  CenteredText,
  Checkbox,
  Chip,
  ColorPicker,
  Comp,
  ConditionalWrap,
  ConfirmModal,
  ContextMenu,
  DateDetail,
  DateInput,
  DateRange,
  Detail,
  DetailRows,
  Divider,
  Dropdown,
  HeaderWrapper,
  Icon,
  IconButton,
  IconPicker,
  Input,
  ListItem,
  LoadingOverlay,
  LogOpsInput,
  MULTI_INPUT_ROW_HEIGHT,
  MenuButton,
  Modal,
  MultiInput,
  MultiInputList,
  MultiInputRow,
  NumInput,
  NumRange,
  Pagination,
  ProgressBar,
  ProgressCircle,
  RangeWrapper,
  SideScroller,
  SortMenu,
  SortRow,
  Table,
  Text,
  Tooltip,
  TooltipWrapper,
  UniformList,
  View
});
//# sourceMappingURL=index.js.map