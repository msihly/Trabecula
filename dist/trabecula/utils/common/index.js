var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "node_modules/dayjs/dayjs.min.js"(exports2, module2) {
    !(function(t, e) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    })(exports2, (function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = (function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = (function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          })(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, (function(t3, r3) {
            return r3 || (function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            })(t3) || i2.replace(":", "");
          }));
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      })(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach((function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      })), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    }));
  }
});

// node_modules/dayjs/plugin/customParseFormat.js
var require_customParseFormat = __commonJS({
  "node_modules/dayjs/plugin/customParseFormat.js"(exports2, module2) {
    !(function(e, t) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_customParseFormat = t();
    })(exports2, (function() {
      "use strict";
      var e = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, n = /\d/, r = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, s = {}, a = function(e2) {
        return (e2 = +e2) + (e2 > 68 ? 1900 : 2e3);
      };
      var f = function(e2) {
        return function(t2) {
          this[e2] = +t2;
        };
      }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(e2) {
        (this.zone || (this.zone = {})).offset = (function(e3) {
          if (!e3) return 0;
          if ("Z" === e3) return 0;
          var t2 = e3.match(/([+-]|\d\d)/g), n2 = 60 * t2[1] + (+t2[2] || 0);
          return 0 === n2 ? 0 : "+" === t2[0] ? -n2 : n2;
        })(e2);
      }], u = function(e2) {
        var t2 = s[e2];
        return t2 && (t2.indexOf ? t2 : t2.s.concat(t2.f));
      }, d = function(e2, t2) {
        var n2, r2 = s.meridiem;
        if (r2) {
          for (var i2 = 1; i2 <= 24; i2 += 1) if (e2.indexOf(r2(i2, 0, t2)) > -1) {
            n2 = i2 > 12;
            break;
          }
        } else n2 = e2 === (t2 ? "pm" : "PM");
        return n2;
      }, c = { A: [o, function(e2) {
        this.afternoon = d(e2, false);
      }], a: [o, function(e2) {
        this.afternoon = d(e2, true);
      }], Q: [n, function(e2) {
        this.month = 3 * (e2 - 1) + 1;
      }], S: [n, function(e2) {
        this.milliseconds = 100 * +e2;
      }], SS: [r, function(e2) {
        this.milliseconds = 10 * +e2;
      }], SSS: [/\d{3}/, function(e2) {
        this.milliseconds = +e2;
      }], s: [i, f("seconds")], ss: [i, f("seconds")], m: [i, f("minutes")], mm: [i, f("minutes")], H: [i, f("hours")], h: [i, f("hours")], HH: [i, f("hours")], hh: [i, f("hours")], D: [i, f("day")], DD: [r, f("day")], Do: [o, function(e2) {
        var t2 = s.ordinal, n2 = e2.match(/\d+/);
        if (this.day = n2[0], t2) for (var r2 = 1; r2 <= 31; r2 += 1) t2(r2).replace(/\[|\]/g, "") === e2 && (this.day = r2);
      }], w: [i, f("week")], ww: [r, f("week")], M: [i, f("month")], MM: [r, f("month")], MMM: [o, function(e2) {
        var t2 = u("months"), n2 = (u("monthsShort") || t2.map((function(e3) {
          return e3.slice(0, 3);
        }))).indexOf(e2) + 1;
        if (n2 < 1) throw new Error();
        this.month = n2 % 12 || n2;
      }], MMMM: [o, function(e2) {
        var t2 = u("months").indexOf(e2) + 1;
        if (t2 < 1) throw new Error();
        this.month = t2 % 12 || t2;
      }], Y: [/[+-]?\d+/, f("year")], YY: [r, function(e2) {
        this.year = a(e2);
      }], YYYY: [/\d{4}/, f("year")], Z: h, ZZ: h };
      function l(n2) {
        var r2, i2;
        r2 = n2, i2 = s && s.formats;
        for (var o2 = (n2 = r2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t2, n3, r3) {
          var o3 = r3 && r3.toUpperCase();
          return n3 || i2[r3] || e[r3] || i2[o3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e2, t3, n4) {
            return t3 || n4.slice(1);
          }));
        }))).match(t), a2 = o2.length, f2 = 0; f2 < a2; f2 += 1) {
          var h2 = o2[f2], u2 = c[h2], d2 = u2 && u2[0], l2 = u2 && u2[1];
          o2[f2] = l2 ? { regex: d2, parser: l2 } : h2.replace(/^\[|\]$/g, "");
        }
        return function(e2) {
          for (var t2 = {}, n3 = 0, r3 = 0; n3 < a2; n3 += 1) {
            var i3 = o2[n3];
            if ("string" == typeof i3) r3 += i3.length;
            else {
              var s2 = i3.regex, f3 = i3.parser, h3 = e2.slice(r3), u3 = s2.exec(h3)[0];
              f3.call(t2, u3), e2 = e2.replace(u3, "");
            }
          }
          return (function(e3) {
            var t3 = e3.afternoon;
            if (void 0 !== t3) {
              var n4 = e3.hours;
              t3 ? n4 < 12 && (e3.hours += 12) : 12 === n4 && (e3.hours = 0), delete e3.afternoon;
            }
          })(t2), t2;
        };
      }
      return function(e2, t2, n2) {
        n2.p.customParseFormat = true, e2 && e2.parseTwoDigitYear && (a = e2.parseTwoDigitYear);
        var r2 = t2.prototype, i2 = r2.parse;
        r2.parse = function(e3) {
          var t3 = e3.date, r3 = e3.utc, o2 = e3.args;
          this.$u = r3;
          var a2 = o2[1];
          if ("string" == typeof a2) {
            var f2 = true === o2[2], h2 = true === o2[3], u2 = f2 || h2, d2 = o2[2];
            h2 && (d2 = o2[2]), s = this.$locale(), !f2 && d2 && (s = n2.Ls[d2]), this.$d = (function(e4, t4, n3, r4) {
              try {
                if (["x", "X"].indexOf(t4) > -1) return new Date(("X" === t4 ? 1e3 : 1) * e4);
                var i3 = l(t4)(e4), o3 = i3.year, s2 = i3.month, a3 = i3.day, f3 = i3.hours, h3 = i3.minutes, u3 = i3.seconds, d3 = i3.milliseconds, c3 = i3.zone, m2 = i3.week, M2 = /* @__PURE__ */ new Date(), Y = a3 || (o3 || s2 ? 1 : M2.getDate()), p = o3 || M2.getFullYear(), v = 0;
                o3 && !s2 || (v = s2 > 0 ? s2 - 1 : M2.getMonth());
                var D, w = f3 || 0, g = h3 || 0, y = u3 || 0, L = d3 || 0;
                return c3 ? new Date(Date.UTC(p, v, Y, w, g, y, L + 60 * c3.offset * 1e3)) : n3 ? new Date(Date.UTC(p, v, Y, w, g, y, L)) : (D = new Date(p, v, Y, w, g, y, L), m2 && (D = r4(D).week(m2).toDate()), D);
              } catch (e5) {
                return /* @__PURE__ */ new Date("");
              }
            })(t3, a2, r3, n2), this.init(), d2 && true !== d2 && (this.$L = this.locale(d2).$L), u2 && t3 != this.format(a2) && (this.$d = /* @__PURE__ */ new Date("")), s = {};
          } else if (a2 instanceof Array) for (var c2 = a2.length, m = 1; m <= c2; m += 1) {
            o2[1] = a2[m - 1];
            var M = n2.apply(this, o2);
            if (M.isValid()) {
              this.$d = M.$d, this.$L = M.$L, this.init();
              break;
            }
            m === c2 && (this.$d = /* @__PURE__ */ new Date(""));
          }
          else i2.call(this, e3);
        };
      };
    }));
  }
});

// node_modules/dayjs/plugin/duration.js
var require_duration = __commonJS({
  "node_modules/dayjs/plugin/duration.js"(exports2, module2) {
    !(function(t, s) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = s() : "function" == typeof define && define.amd ? define(s) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs_plugin_duration = s();
    })(exports2, (function() {
      "use strict";
      var t, s, n = 1e3, i = 6e4, e = 36e5, r = 864e5, o = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, u = 31536e6, d = 2628e6, a = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, h = { years: u, months: d, days: r, hours: e, minutes: i, seconds: n, milliseconds: 1, weeks: 6048e5 }, c = function(t2) {
        return t2 instanceof g;
      }, f = function(t2, s2, n2) {
        return new g(t2, n2, s2.$l);
      }, m = function(t2) {
        return s.p(t2) + "s";
      }, l = function(t2) {
        return t2 < 0;
      }, $ = function(t2) {
        return l(t2) ? Math.ceil(t2) : Math.floor(t2);
      }, y = function(t2) {
        return Math.abs(t2);
      }, v = function(t2, s2) {
        return t2 ? l(t2) ? { negative: true, format: "" + y(t2) + s2 } : { negative: false, format: "" + t2 + s2 } : { negative: false, format: "" };
      }, g = (function() {
        function l2(t2, s2, n2) {
          var i2 = this;
          if (this.$d = {}, this.$l = n2, void 0 === t2 && (this.$ms = 0, this.parseFromMilliseconds()), s2) return f(t2 * h[m(s2)], this);
          if ("number" == typeof t2) return this.$ms = t2, this.parseFromMilliseconds(), this;
          if ("object" == typeof t2) return Object.keys(t2).forEach((function(s3) {
            i2.$d[m(s3)] = t2[s3];
          })), this.calMilliseconds(), this;
          if ("string" == typeof t2) {
            var e2 = t2.match(a);
            if (e2) {
              var r2 = e2.slice(2).map((function(t3) {
                return null != t3 ? Number(t3) : 0;
              }));
              return this.$d.years = r2[0], this.$d.months = r2[1], this.$d.weeks = r2[2], this.$d.days = r2[3], this.$d.hours = r2[4], this.$d.minutes = r2[5], this.$d.seconds = r2[6], this.calMilliseconds(), this;
            }
          }
          return this;
        }
        var y2 = l2.prototype;
        return y2.calMilliseconds = function() {
          var t2 = this;
          this.$ms = Object.keys(this.$d).reduce((function(s2, n2) {
            return s2 + (t2.$d[n2] || 0) * h[n2];
          }), 0);
        }, y2.parseFromMilliseconds = function() {
          var t2 = this.$ms;
          this.$d.years = $(t2 / u), t2 %= u, this.$d.months = $(t2 / d), t2 %= d, this.$d.days = $(t2 / r), t2 %= r, this.$d.hours = $(t2 / e), t2 %= e, this.$d.minutes = $(t2 / i), t2 %= i, this.$d.seconds = $(t2 / n), t2 %= n, this.$d.milliseconds = t2;
        }, y2.toISOString = function() {
          var t2 = v(this.$d.years, "Y"), s2 = v(this.$d.months, "M"), n2 = +this.$d.days || 0;
          this.$d.weeks && (n2 += 7 * this.$d.weeks);
          var i2 = v(n2, "D"), e2 = v(this.$d.hours, "H"), r2 = v(this.$d.minutes, "M"), o2 = this.$d.seconds || 0;
          this.$d.milliseconds && (o2 += this.$d.milliseconds / 1e3, o2 = Math.round(1e3 * o2) / 1e3);
          var u2 = v(o2, "S"), d2 = t2.negative || s2.negative || i2.negative || e2.negative || r2.negative || u2.negative, a2 = e2.format || r2.format || u2.format ? "T" : "", h2 = (d2 ? "-" : "") + "P" + t2.format + s2.format + i2.format + a2 + e2.format + r2.format + u2.format;
          return "P" === h2 || "-P" === h2 ? "P0D" : h2;
        }, y2.toJSON = function() {
          return this.toISOString();
        }, y2.format = function(t2) {
          var n2 = t2 || "YYYY-MM-DDTHH:mm:ss", i2 = { Y: this.$d.years, YY: s.s(this.$d.years, 2, "0"), YYYY: s.s(this.$d.years, 4, "0"), M: this.$d.months, MM: s.s(this.$d.months, 2, "0"), D: this.$d.days, DD: s.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: s.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: s.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: s.s(this.$d.seconds, 2, "0"), SSS: s.s(this.$d.milliseconds, 3, "0") };
          return n2.replace(o, (function(t3, s2) {
            return s2 || String(i2[t3]);
          }));
        }, y2.as = function(t2) {
          return this.$ms / h[m(t2)];
        }, y2.get = function(t2) {
          var s2 = this.$ms, n2 = m(t2);
          return "milliseconds" === n2 ? s2 %= 1e3 : s2 = "weeks" === n2 ? $(s2 / h[n2]) : this.$d[n2], s2 || 0;
        }, y2.add = function(t2, s2, n2) {
          var i2;
          return i2 = s2 ? t2 * h[m(s2)] : c(t2) ? t2.$ms : f(t2, this).$ms, f(this.$ms + i2 * (n2 ? -1 : 1), this);
        }, y2.subtract = function(t2, s2) {
          return this.add(t2, s2, true);
        }, y2.locale = function(t2) {
          var s2 = this.clone();
          return s2.$l = t2, s2;
        }, y2.clone = function() {
          return f(this.$ms, this);
        }, y2.humanize = function(s2) {
          return t().add(this.$ms, "ms").locale(this.$l).fromNow(!s2);
        }, y2.valueOf = function() {
          return this.asMilliseconds();
        }, y2.milliseconds = function() {
          return this.get("milliseconds");
        }, y2.asMilliseconds = function() {
          return this.as("milliseconds");
        }, y2.seconds = function() {
          return this.get("seconds");
        }, y2.asSeconds = function() {
          return this.as("seconds");
        }, y2.minutes = function() {
          return this.get("minutes");
        }, y2.asMinutes = function() {
          return this.as("minutes");
        }, y2.hours = function() {
          return this.get("hours");
        }, y2.asHours = function() {
          return this.as("hours");
        }, y2.days = function() {
          return this.get("days");
        }, y2.asDays = function() {
          return this.as("days");
        }, y2.weeks = function() {
          return this.get("weeks");
        }, y2.asWeeks = function() {
          return this.as("weeks");
        }, y2.months = function() {
          return this.get("months");
        }, y2.asMonths = function() {
          return this.as("months");
        }, y2.years = function() {
          return this.get("years");
        }, y2.asYears = function() {
          return this.as("years");
        }, l2;
      })(), p = function(t2, s2, n2) {
        return t2.add(s2.years() * n2, "y").add(s2.months() * n2, "M").add(s2.days() * n2, "d").add(s2.hours() * n2, "h").add(s2.minutes() * n2, "m").add(s2.seconds() * n2, "s").add(s2.milliseconds() * n2, "ms");
      };
      return function(n2, i2, e2) {
        t = e2, s = e2().$utils(), e2.duration = function(t2, s2) {
          var n3 = e2.locale();
          return f(t2, { $l: n3 }, s2);
        }, e2.isDuration = c;
        var r2 = i2.prototype.add, o2 = i2.prototype.subtract;
        i2.prototype.add = function(t2, s2) {
          return c(t2) ? p(this, t2, 1) : r2.bind(this)(t2, s2);
        }, i2.prototype.subtract = function(t2, s2) {
          return c(t2) ? p(this, t2, -1) : o2.bind(this)(t2, s2);
        };
      };
    }));
  }
});

// node_modules/dayjs/plugin/relativeTime.js
var require_relativeTime = __commonJS({
  "node_modules/dayjs/plugin/relativeTime.js"(exports2, module2) {
    !(function(r, e) {
      "object" == typeof exports2 && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (r = "undefined" != typeof globalThis ? globalThis : r || self).dayjs_plugin_relativeTime = e();
    })(exports2, (function() {
      "use strict";
      return function(r, e, t) {
        r = r || {};
        var n = e.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
        function i(r2, e2, t2, o2) {
          return n.fromToBase(r2, e2, t2, o2);
        }
        t.en.relativeTime = o, n.fromToBase = function(e2, n2, i2, d2, u) {
          for (var f, a, s, l = i2.$locale().relativeTime || o, h = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h.length, c = 0; c < m; c += 1) {
            var y = h[c];
            y.d && (f = d2 ? t(e2).diff(i2, y.d, true) : i2.diff(e2, y.d, true));
            var p = (r.rounding || Math.round)(Math.abs(f));
            if (s = f > 0, p <= y.r || !y.r) {
              p <= 1 && c > 0 && (y = h[c - 1]);
              var v = l[y.l];
              u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n2, y.l, s);
              break;
            }
          }
          if (n2) return a;
          var M = s ? l.future : l.past;
          return "function" == typeof M ? M(a) : M.replace("%s", a);
        }, n.to = function(r2, e2) {
          return i(r2, e2, this, true);
        }, n.from = function(r2, e2) {
          return i(r2, e2, this);
        };
        var d = function(r2) {
          return r2.$u ? t.utc() : t();
        };
        n.toNow = function(r2) {
          return this.to(d(this), r2);
        }, n.fromNow = function(r2) {
          return this.from(d(this), r2);
        };
      };
    }));
  }
});

// trabecula/utils/common/index.ts
var common_exports = {};
__export(common_exports, {
  AUDIO_CODECS: () => AUDIO_CODECS,
  AUDIO_CODECS_COMMON: () => AUDIO_CODECS_COMMON,
  AUDIO_CODECS_UNCOMMON: () => AUDIO_CODECS_UNCOMMON,
  CONSTANTS: () => CONSTANTS,
  Fmt: () => Fmt,
  IMAGE_EXTS: () => IMAGE_EXTS,
  IMAGE_EXTS_COMMON: () => IMAGE_EXTS_COMMON,
  IMAGE_EXTS_UNCOMMON: () => IMAGE_EXTS_UNCOMMON,
  LOGICAL_OPS: () => LOGICAL_OPS,
  PromiseQueue: () => PromiseQueue,
  VIDEO_CODECS: () => VIDEO_CODECS,
  VIDEO_CODECS_COMMON: () => VIDEO_CODECS_COMMON,
  VIDEO_CODECS_UNCOMMON: () => VIDEO_CODECS_UNCOMMON,
  VIDEO_EXTS: () => VIDEO_EXTS,
  VIDEO_EXTS_COMMON: () => VIDEO_EXTS_COMMON,
  VIDEO_EXTS_UNCOMMON: () => VIDEO_EXTS_UNCOMMON,
  WEB_VIDEO_CODECS: () => WEB_VIDEO_CODECS,
  WEB_VIDEO_EXTS: () => WEB_VIDEO_EXTS,
  arrayIntersect: () => arrayIntersect,
  attempt: () => attempt,
  bisectArrayChanges: () => bisectArrayChanges,
  centeredSlice: () => centeredSlice,
  chunkArray: () => chunkArray,
  compareLogic: () => compareLogic,
  compareLogicOps: () => compareLogicOps,
  convertNestedKeys: () => convertNestedKeys,
  countItems: () => countItems,
  dateWithTzToIso: () => dateWithTzToIso,
  dayjs: () => import_dayjs.default,
  debounce: () => debounce2,
  deepClone: () => deepClone,
  deepMerge: () => deepMerge,
  durationToSeconds: () => durationToSeconds,
  fractionStringToNumber: () => fractionStringToNumber,
  getArrayDiff: () => getArrayDiff,
  handleErrors: () => handleErrors,
  isArchive: () => isArchive,
  isArchiveFirstPart: () => isArchiveFirstPart,
  isArchivePart: () => isArchivePart,
  isDeepEqual: () => isDeepEqual,
  isObject: () => isObject2,
  logicOpsToMongo: () => logicOpsToMongo,
  objectToFloat32Array: () => objectToFloat32Array,
  range: () => range,
  rng: () => rng,
  rotateArrayPos: () => rotateArrayPos,
  round: () => round,
  setObj: () => setObj,
  sleep: () => sleep,
  sortArray: () => sortArray,
  splitArray: () => splitArray,
  sumArray: () => sumArray,
  throttle: () => throttle2,
  uniqueArrayFilter: () => uniqueArrayFilter,
  uniqueArrayMerge: () => uniqueArrayMerge,
  uuid: () => uuid
});
module.exports = __toCommonJS(common_exports);

// trabecula/utils/common/arrays.ts
var arrayIntersect = (...arrays) => [...arrays].reduce((acc, cur) => acc.filter((e) => cur.includes(e)));
var bisectArrayChanges = (oldArr, newArr) => {
  if (!oldArr || !newArr) return { added: [], removed: [] };
  else
    return getArrayDiff(oldArr, newArr).reduce(
      (acc, cur) => {
        acc[newArr.includes(cur) ? "added" : "removed"].push(cur);
        return acc;
      },
      { added: [], removed: [] }
    );
};
var centeredSlice = (arr, indexToCenter, maxCount) => {
  if (!arr || indexToCenter < 0 || indexToCenter > arr.length - 1) return null;
  const count = Math.min(arr.length, maxCount != null ? maxCount : arr.length);
  const delta = Math.floor(count / 2);
  const isEven = count % 2 === 0;
  const startIndex = indexToCenter - delta;
  const left = startIndex < 0 ? [...arr.slice(startIndex), ...arr.slice(0, indexToCenter)] : arr.slice(startIndex, indexToCenter);
  const endIndex = indexToCenter + delta;
  const right = endIndex > arr.length - 1 ? [
    ...arr.slice(indexToCenter + 1, arr.length),
    ...arr.slice(0, Math.abs(arr.length - (isEven ? 0 : 1) - endIndex))
  ] : arr.slice(indexToCenter + 1, endIndex + (isEven ? 0 : 1));
  return [...left, arr[indexToCenter], ...right];
};
var chunkArray = (arr, size) => [...Array(Math.ceil(arr.length / size))].map((_, i) => arr.slice(i * size, i * size + size));
var countItems = (arr) => {
  const map = arr.reduce((acc, cur) => {
    const group = acc.find((e) => e.value === cur);
    if (!group) acc.push({ value: cur, count: 1 });
    else group.count += 1;
    return acc;
  }, []);
  return sortArray(map, "count", true, true);
};
var getArrayDiff = (a, b) => [
  ...a.filter((e) => !b.includes(e)),
  ...b.filter((e) => !a.includes(e))
];
var objectToFloat32Array = (obj) => new Float32Array(Object.values(obj));
var range = (length) => [...Array(length).keys()];
var rotateArrayPos = (direction, current, length) => {
  if (direction === "next") return current + 1 < length ? current + 1 : 0;
  else if (direction === "prev") return current - 1 >= 0 ? current - 1 : length - 1;
};
var sortArray = (arr, key, isDesc = true, isNumber = false) => {
  if (!(arr == null ? void 0 : arr.length)) return [];
  const sortFn = (a, b) => {
    var _a, _b;
    const first = (_a = a[key]) != null ? _a : isNumber ? 0 : "";
    const second = (_b = b[key]) != null ? _b : isNumber ? 0 : "";
    const comparison = isNumber ? second - first : String(second).localeCompare(String(first));
    return isDesc ? comparison : comparison * -1;
  };
  return [...arr].sort(sortFn);
};
var splitArray = (arr, filterFn) => arr.reduce((acc, cur) => (acc[+!filterFn(cur)].push(cur), acc), [[], []]);
var sumArray = (arr, fn) => arr.reduce((acc, cur) => acc += fn(cur), 0);
var uniqueArrayFilter = (...arrays) => {
  const all = [].concat(...arrays);
  const nonUnique = all.filter(
    /* @__PURE__ */ ((set2) => (value) => set2.has(value) || !set2.add(value))(/* @__PURE__ */ new Set())
  );
  return all.filter((e) => !nonUnique.includes(e));
};
var uniqueArrayMerge = (oldArray, newArrays) => [
  .../* @__PURE__ */ new Set([...new Set(oldArray), ...[].concat(...newArrays)])
];

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
var WEB_VIDEO_CODECS = ["h264", "hevc", "vp8", "vp9", "theora", "av1"];
var WEB_VIDEO_EXTS = ["mp4", "webm", "ogv", "wav"];
var CONSTANTS = {
  IMAGE_EXTS,
  TOOLTIP: {
    ENTER_DELAY: 1e3,
    ENTER_NEXT_DELAY: 500
  },
  VIDEO_CODECS,
  VIDEO_EXTS
};

// trabecula/utils/common/date-and-time.ts
var import_dayjs = __toESM(require_dayjs_min());
var import_customParseFormat = __toESM(require_customParseFormat());
var import_duration = __toESM(require_duration());
var import_relativeTime = __toESM(require_relativeTime());
import_dayjs.default.extend(import_customParseFormat.default);
import_dayjs.default.extend(import_duration.default);
import_dayjs.default.extend(import_relativeTime.default);
var dateWithTzToIso = (dateStr) => {
  const timezone = dateStr.split(" ")[4];
  const dateWithoutTz = dateStr.replace(timezone, "").trim();
  const date = (0, import_dayjs.default)(dateWithoutTz, "ddd MMM DD HH:mm:ss YYYY");
  if (date.isValid()) {
    const hours = parseInt(timezone.slice(1, 3));
    const minutes = parseInt(timezone.slice(3));
    const offsetMinutes = (timezone[0] === "-" ? 1 : -1) * (hours * 60 + minutes);
    return date.add(offsetMinutes, "minute").toISOString();
  } else {
    console.error("Invalid date:", dateStr, date);
    return null;
  }
};

// trabecula/utils/common/files.ts
var isArchive = (filePath) => /\.(7z|rar|zip)$/.test(filePath);
var isArchivePart = (filePath) => /\.(part)?(?!0*1\b)\d+\.(7z|rar|zip)$/.test(filePath);
var isArchiveFirstPart = (filePath) => /\.(part)?(0*1\b)\.(7z|rar|zip)/.test(filePath);

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
var decodeHtmlEntities = (s) => s.replace(htmlEntityRegex, (m) => {
  var _a;
  if (m.startsWith("&#x") || m.startsWith("&#X"))
    return String.fromCharCode(parseInt(m.slice(3, -1), 16));
  if (m.startsWith("&#")) return String.fromCharCode(parseInt(m.slice(2, -1), 10));
  return (_a = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" }[m.slice(1, -1)]) != null ? _a : m;
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
var snakeToPascal = (str) => !(str == null ? void 0 : str.length) ? "" : str.split("_").map((s) => capitalize(s)).join("");
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
var compareLogicOps = (operator, a, b) => {
  switch (operator) {
    case "=":
      return a === b;
    case "!=":
      return a !== b;
    case ">":
      return a > b;
    case ">=":
      return a >= b;
    case "<":
      return a < b;
    case "<=":
      return a <= b;
    default:
      return false;
  }
};
var compareLogic = (type, ...items) => type === "AND" ? items.every(Boolean) : type === "OR" ? items.some(Boolean) : null;
var durationToSeconds = (input) => {
  let total = 0;
  let match;
  const regex = /(\d+)([hms])/g;
  while ((match = regex.exec(input)) !== null) {
    const value = Number(match[1]);
    if (match[2] === "h") total += value * 3600;
    else if (match[2] === "m") total += value * 60;
    else if (match[2] === "s") total += value;
  }
  return total;
};
var fractionStringToNumber = (str) => str.split("/").map((s) => +s).reduce((a, b) => a / b);
var logicOpsToMongo = (op) => {
  switch (op) {
    case "=":
      return "$eq";
    case "!=":
      return "$ne";
    case ">":
      return "$gt";
    case ">=":
      return "$gte";
    case "<":
      return "$lt";
    case "<=":
      return "$lte";
    default:
      return null;
  }
};
var round = (num, decimals = 2) => {
  const n = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * n) / n;
};

// node_modules/es-toolkit/dist/compat/predicate/isSymbol.mjs
function isSymbol(value) {
  return typeof value === "symbol" || value instanceof Symbol;
}

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

// node_modules/es-toolkit/dist/function/noop.mjs
function noop() {
}

// node_modules/es-toolkit/dist/function/throttle.mjs
function throttle(func, throttleMs, { signal, edges = ["leading", "trailing"] } = {}) {
  let pendingAt = null;
  const debounced = debounce(function(...args) {
    pendingAt = Date.now();
    func.apply(this, args);
  }, throttleMs, { signal, edges });
  const throttled = function(...args) {
    if (pendingAt == null) {
      pendingAt = Date.now();
    }
    if (Date.now() - pendingAt >= throttleMs) {
      pendingAt = Date.now();
      func.apply(this, args);
      debounced.cancel();
      debounced.schedule();
      return;
    }
    debounced.apply(this, args);
  };
  throttled.cancel = debounced.cancel;
  throttled.flush = debounced.flush;
  return throttled;
}

// node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
function isPrimitive(value) {
  return value == null || typeof value !== "object" && typeof value !== "function";
}

// node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
function isTypedArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
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

// node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
function getSymbols(object) {
  return Object.getOwnPropertySymbols(object).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object, symbol));
}

// node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
function getTag(value) {
  if (value == null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}

// node_modules/es-toolkit/dist/compat/_internal/tags.mjs
var regexpTag = "[object RegExp]";
var stringTag = "[object String]";
var numberTag = "[object Number]";
var booleanTag = "[object Boolean]";
var argumentsTag = "[object Arguments]";
var symbolTag = "[object Symbol]";
var dateTag = "[object Date]";
var mapTag = "[object Map]";
var setTag = "[object Set]";
var arrayTag = "[object Array]";
var functionTag = "[object Function]";
var arrayBufferTag = "[object ArrayBuffer]";
var objectTag = "[object Object]";
var errorTag = "[object Error]";
var dataViewTag = "[object DataView]";
var uint8ArrayTag = "[object Uint8Array]";
var uint8ClampedArrayTag = "[object Uint8ClampedArray]";
var uint16ArrayTag = "[object Uint16Array]";
var uint32ArrayTag = "[object Uint32Array]";
var bigUint64ArrayTag = "[object BigUint64Array]";
var int8ArrayTag = "[object Int8Array]";
var int16ArrayTag = "[object Int16Array]";
var int32ArrayTag = "[object Int32Array]";
var bigInt64ArrayTag = "[object BigInt64Array]";
var float32ArrayTag = "[object Float32Array]";
var float64ArrayTag = "[object Float64Array]";

// node_modules/es-toolkit/dist/object/cloneDeepWith.mjs
function cloneDeepWithImpl(valueToClone, keyToClone, objectToClone, stack = /* @__PURE__ */ new Map(), cloneValue = void 0) {
  const cloned = cloneValue == null ? void 0 : cloneValue(valueToClone, keyToClone, objectToClone, stack);
  if (cloned !== void 0) {
    return cloned;
  }
  if (isPrimitive(valueToClone)) {
    return valueToClone;
  }
  if (stack.has(valueToClone)) {
    return stack.get(valueToClone);
  }
  if (Array.isArray(valueToClone)) {
    const result = new Array(valueToClone.length);
    stack.set(valueToClone, result);
    for (let i = 0; i < valueToClone.length; i++) {
      result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
    }
    if (Object.hasOwn(valueToClone, "index")) {
      result.index = valueToClone.index;
    }
    if (Object.hasOwn(valueToClone, "input")) {
      result.input = valueToClone.input;
    }
    return result;
  }
  if (valueToClone instanceof Date) {
    return new Date(valueToClone.getTime());
  }
  if (valueToClone instanceof RegExp) {
    const result = new RegExp(valueToClone.source, valueToClone.flags);
    result.lastIndex = valueToClone.lastIndex;
    return result;
  }
  if (valueToClone instanceof Map) {
    const result = /* @__PURE__ */ new Map();
    stack.set(valueToClone, result);
    for (const [key, value] of valueToClone) {
      result.set(key, cloneDeepWithImpl(value, key, objectToClone, stack, cloneValue));
    }
    return result;
  }
  if (valueToClone instanceof Set) {
    const result = /* @__PURE__ */ new Set();
    stack.set(valueToClone, result);
    for (const value of valueToClone) {
      result.add(cloneDeepWithImpl(value, void 0, objectToClone, stack, cloneValue));
    }
    return result;
  }
  if (typeof Buffer !== "undefined" && Buffer.isBuffer(valueToClone)) {
    return valueToClone.subarray();
  }
  if (isTypedArray(valueToClone)) {
    const result = new (Object.getPrototypeOf(valueToClone)).constructor(valueToClone.length);
    stack.set(valueToClone, result);
    for (let i = 0; i < valueToClone.length; i++) {
      result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
    }
    return result;
  }
  if (valueToClone instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && valueToClone instanceof SharedArrayBuffer) {
    return valueToClone.slice(0);
  }
  if (valueToClone instanceof DataView) {
    const result = new DataView(valueToClone.buffer.slice(0), valueToClone.byteOffset, valueToClone.byteLength);
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (typeof File !== "undefined" && valueToClone instanceof File) {
    const result = new File([valueToClone], valueToClone.name, {
      type: valueToClone.type
    });
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (typeof Blob !== "undefined" && valueToClone instanceof Blob) {
    const result = new Blob([valueToClone], { type: valueToClone.type });
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (valueToClone instanceof Error) {
    const result = structuredClone(valueToClone);
    stack.set(valueToClone, result);
    result.message = valueToClone.message;
    result.name = valueToClone.name;
    result.stack = valueToClone.stack;
    result.cause = valueToClone.cause;
    result.constructor = valueToClone.constructor;
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (valueToClone instanceof Boolean) {
    const result = new Boolean(valueToClone.valueOf());
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (valueToClone instanceof Number) {
    const result = new Number(valueToClone.valueOf());
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (valueToClone instanceof String) {
    const result = new String(valueToClone.valueOf());
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  if (typeof valueToClone === "object" && isCloneableObject(valueToClone)) {
    const result = Object.create(Object.getPrototypeOf(valueToClone));
    stack.set(valueToClone, result);
    copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
    return result;
  }
  return valueToClone;
}
function copyProperties(target, source, objectToClone = target, stack, cloneValue) {
  const keys = [...Object.keys(source), ...getSymbols(source)];
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const descriptor = Object.getOwnPropertyDescriptor(target, key);
    if (descriptor == null || descriptor.writable) {
      target[key] = cloneDeepWithImpl(source[key], key, objectToClone, stack, cloneValue);
    }
  }
}
function isCloneableObject(object) {
  switch (getTag(object)) {
    case argumentsTag:
    case arrayTag:
    case arrayBufferTag:
    case dataViewTag:
    case booleanTag:
    case dateTag:
    case float32ArrayTag:
    case float64ArrayTag:
    case int8ArrayTag:
    case int16ArrayTag:
    case int32ArrayTag:
    case mapTag:
    case numberTag:
    case objectTag:
    case regexpTag:
    case setTag:
    case stringTag:
    case symbolTag:
    case uint8ArrayTag:
    case uint8ClampedArrayTag:
    case uint16ArrayTag:
    case uint32ArrayTag: {
      return true;
    }
    default: {
      return false;
    }
  }
}

// node_modules/es-toolkit/dist/object/cloneDeep.mjs
function cloneDeep(obj) {
  return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), void 0);
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
  for (let i = 0; i < sourceKeys.length; i++) {
    const key = sourceKeys[i];
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

// node_modules/es-toolkit/dist/_internal/isEqualsSameValueZero.mjs
function isEqualsSameValueZero(value, other) {
  return value === other || Number.isNaN(value) && Number.isNaN(other);
}

// node_modules/es-toolkit/dist/predicate/isEqualWith.mjs
function isEqualWith(a, b, areValuesEqual) {
  return isEqualWithImpl(a, b, void 0, void 0, void 0, void 0, areValuesEqual);
}
function isEqualWithImpl(a, b, property, aParent, bParent, stack, areValuesEqual) {
  const result = areValuesEqual(a, b, property, aParent, bParent, stack);
  if (result !== void 0) {
    return result;
  }
  if (typeof a === typeof b) {
    switch (typeof a) {
      case "bigint":
      case "string":
      case "boolean":
      case "symbol":
      case "undefined": {
        return a === b;
      }
      case "number": {
        return a === b || Object.is(a, b);
      }
      case "function": {
        return a === b;
      }
      case "object": {
        return areObjectsEqual(a, b, stack, areValuesEqual);
      }
    }
  }
  return areObjectsEqual(a, b, stack, areValuesEqual);
}
function areObjectsEqual(a, b, stack, areValuesEqual) {
  if (Object.is(a, b)) {
    return true;
  }
  let aTag = getTag(a);
  let bTag = getTag(b);
  if (aTag === argumentsTag) {
    aTag = objectTag;
  }
  if (bTag === argumentsTag) {
    bTag = objectTag;
  }
  if (aTag !== bTag) {
    return false;
  }
  switch (aTag) {
    case stringTag:
      return a.toString() === b.toString();
    case numberTag: {
      const x = a.valueOf();
      const y = b.valueOf();
      return isEqualsSameValueZero(x, y);
    }
    case booleanTag:
    case dateTag:
    case symbolTag:
      return Object.is(a.valueOf(), b.valueOf());
    case regexpTag: {
      return a.source === b.source && a.flags === b.flags;
    }
    case functionTag: {
      return a === b;
    }
  }
  stack = stack != null ? stack : /* @__PURE__ */ new Map();
  const aStack = stack.get(a);
  const bStack = stack.get(b);
  if (aStack != null && bStack != null) {
    return aStack === b;
  }
  stack.set(a, b);
  stack.set(b, a);
  try {
    switch (aTag) {
      case mapTag: {
        if (a.size !== b.size) {
          return false;
        }
        for (const [key, value] of a.entries()) {
          if (!b.has(key) || !isEqualWithImpl(value, b.get(key), key, a, b, stack, areValuesEqual)) {
            return false;
          }
        }
        return true;
      }
      case setTag: {
        if (a.size !== b.size) {
          return false;
        }
        const aValues = Array.from(a.values());
        const bValues = Array.from(b.values());
        for (let i = 0; i < aValues.length; i++) {
          const aValue = aValues[i];
          const index = bValues.findIndex((bValue) => {
            return isEqualWithImpl(aValue, bValue, void 0, a, b, stack, areValuesEqual);
          });
          if (index === -1) {
            return false;
          }
          bValues.splice(index, 1);
        }
        return true;
      }
      case arrayTag:
      case uint8ArrayTag:
      case uint8ClampedArrayTag:
      case uint16ArrayTag:
      case uint32ArrayTag:
      case bigUint64ArrayTag:
      case int8ArrayTag:
      case int16ArrayTag:
      case int32ArrayTag:
      case bigInt64ArrayTag:
      case float32ArrayTag:
      case float64ArrayTag: {
        if (typeof Buffer !== "undefined" && Buffer.isBuffer(a) !== Buffer.isBuffer(b)) {
          return false;
        }
        if (a.length !== b.length) {
          return false;
        }
        for (let i = 0; i < a.length; i++) {
          if (!isEqualWithImpl(a[i], b[i], i, a, b, stack, areValuesEqual)) {
            return false;
          }
        }
        return true;
      }
      case arrayBufferTag: {
        if (a.byteLength !== b.byteLength) {
          return false;
        }
        return areObjectsEqual(new Uint8Array(a), new Uint8Array(b), stack, areValuesEqual);
      }
      case dataViewTag: {
        if (a.byteLength !== b.byteLength || a.byteOffset !== b.byteOffset) {
          return false;
        }
        return areObjectsEqual(new Uint8Array(a), new Uint8Array(b), stack, areValuesEqual);
      }
      case errorTag: {
        return a.name === b.name && a.message === b.message;
      }
      case objectTag: {
        const areEqualInstances = areObjectsEqual(a.constructor, b.constructor, stack, areValuesEqual) || isPlainObject(a) && isPlainObject(b);
        if (!areEqualInstances) {
          return false;
        }
        const aKeys = [...Object.keys(a), ...getSymbols(a)];
        const bKeys = [...Object.keys(b), ...getSymbols(b)];
        if (aKeys.length !== bKeys.length) {
          return false;
        }
        for (let i = 0; i < aKeys.length; i++) {
          const propKey = aKeys[i];
          const aProp = a[propKey];
          if (!Object.hasOwn(b, propKey)) {
            return false;
          }
          const bProp = b[propKey];
          if (!isEqualWithImpl(aProp, bProp, propKey, a, b, stack, areValuesEqual)) {
            return false;
          }
        }
        return true;
      }
      default: {
        return false;
      }
    }
  } finally {
    stack.delete(a);
    stack.delete(b);
  }
}

// node_modules/es-toolkit/dist/predicate/isEqual.mjs
function isEqual(a, b) {
  return isEqualWith(a, b, noop);
}

// node_modules/es-toolkit/dist/compat/_internal/isDeepKey.mjs
function isDeepKey(key) {
  switch (typeof key) {
    case "number":
    case "symbol": {
      return false;
    }
    case "string": {
      return key.includes(".") || key.includes("[") || key.includes("]");
    }
  }
}

// node_modules/es-toolkit/dist/compat/_internal/toKey.mjs
function toKey(value) {
  var _a;
  if (typeof value === "string" || typeof value === "symbol") {
    return value;
  }
  if (Object.is((_a = value == null ? void 0 : value.valueOf) == null ? void 0 : _a.call(value), -0)) {
    return "-0";
  }
  return String(value);
}

// node_modules/es-toolkit/dist/compat/util/toString.mjs
function toString(value) {
  if (value == null) {
    return "";
  }
  if (typeof value === "string") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(toString).join(",");
  }
  const result = String(value);
  if (result === "0" && Object.is(Number(value), -0)) {
    return "-0";
  }
  return result;
}

// node_modules/es-toolkit/dist/compat/util/toPath.mjs
function toPath(deepKey) {
  if (Array.isArray(deepKey)) {
    return deepKey.map(toKey);
  }
  if (typeof deepKey === "symbol") {
    return [deepKey];
  }
  deepKey = toString(deepKey);
  const result = [];
  const length = deepKey.length;
  if (length === 0) {
    return result;
  }
  let index = 0;
  let key = "";
  let quoteChar = "";
  let bracket = false;
  if (deepKey.charCodeAt(0) === 46) {
    result.push("");
    index++;
  }
  while (index < length) {
    const char = deepKey[index];
    if (quoteChar) {
      if (char === "\\" && index + 1 < length) {
        index++;
        key += deepKey[index];
      } else if (char === quoteChar) {
        quoteChar = "";
      } else {
        key += char;
      }
    } else if (bracket) {
      if (char === '"' || char === "'") {
        quoteChar = char;
      } else if (char === "]") {
        bracket = false;
        result.push(key);
        key = "";
      } else {
        key += char;
      }
    } else {
      if (char === "[") {
        bracket = true;
        if (key) {
          result.push(key);
          key = "";
        }
      } else if (char === ".") {
        if (key) {
          result.push(key);
          key = "";
        }
      } else {
        key += char;
      }
    }
    index++;
  }
  if (key) {
    result.push(key);
  }
  return result;
}

// node_modules/es-toolkit/dist/compat/object/get.mjs
function get(object, path, defaultValue) {
  if (object == null) {
    return defaultValue;
  }
  switch (typeof path) {
    case "string": {
      if (isUnsafeProperty(path)) {
        return defaultValue;
      }
      const result = object[path];
      if (result === void 0) {
        if (isDeepKey(path)) {
          return get(object, toPath(path), defaultValue);
        } else {
          return defaultValue;
        }
      }
      return result;
    }
    case "number":
    case "symbol": {
      if (typeof path === "number") {
        path = toKey(path);
      }
      const result = object[path];
      if (result === void 0) {
        return defaultValue;
      }
      return result;
    }
    default: {
      if (Array.isArray(path)) {
        return getWithPath(object, path, defaultValue);
      }
      if (Object.is(path == null ? void 0 : path.valueOf(), -0)) {
        path = "-0";
      } else {
        path = String(path);
      }
      if (isUnsafeProperty(path)) {
        return defaultValue;
      }
      const result = object[path];
      if (result === void 0) {
        return defaultValue;
      }
      return result;
    }
  }
}
function getWithPath(object, path, defaultValue) {
  if (path.length === 0) {
    return defaultValue;
  }
  let current = object;
  for (let index = 0; index < path.length; index++) {
    if (current == null) {
      return defaultValue;
    }
    if (isUnsafeProperty(path[index])) {
      return defaultValue;
    }
    current = current[path[index]];
  }
  if (current === void 0) {
    return defaultValue;
  }
  return current;
}

// node_modules/es-toolkit/dist/compat/predicate/isObject.mjs
function isObject(value) {
  return value !== null && (typeof value === "object" || typeof value === "function");
}

// node_modules/es-toolkit/dist/compat/_internal/isIndex.mjs
var IS_UNSIGNED_INTEGER = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length = Number.MAX_SAFE_INTEGER) {
  switch (typeof value) {
    case "number": {
      return Number.isInteger(value) && value >= 0 && value < length;
    }
    case "symbol": {
      return false;
    }
    case "string": {
      return IS_UNSIGNED_INTEGER.test(value);
    }
  }
}

// node_modules/es-toolkit/dist/compat/_internal/isKey.mjs
var regexIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var regexIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (Array.isArray(value)) {
    return false;
  }
  if (typeof value === "number" || typeof value === "boolean" || value == null || isSymbol(value)) {
    return true;
  }
  return typeof value === "string" && (regexIsPlainProp.test(value) || !regexIsDeepProp.test(value)) || object != null && Object.hasOwn(object, value);
}

// node_modules/es-toolkit/dist/compat/_internal/assignValue.mjs
var assignValue = (object, key, value) => {
  const objValue = object[key];
  if (!(Object.hasOwn(object, key) && isEqualsSameValueZero(objValue, value)) || value === void 0 && !(key in object)) {
    object[key] = value;
  }
};

// node_modules/es-toolkit/dist/compat/object/updateWith.mjs
function updateWith(obj, path, updater, customizer) {
  if (obj == null && !isObject(obj)) {
    return obj;
  }
  let resolvedPath;
  if (isKey(path, obj)) {
    resolvedPath = [path];
  } else if (Array.isArray(path)) {
    resolvedPath = path;
  } else {
    resolvedPath = toPath(path);
  }
  const updateValue = updater(get(obj, resolvedPath));
  let current = obj;
  for (let i = 0; i < resolvedPath.length && current != null; i++) {
    const key = toKey(resolvedPath[i]);
    if (isUnsafeProperty(key)) {
      continue;
    }
    let newValue;
    if (i === resolvedPath.length - 1) {
      newValue = updateValue;
    } else {
      const objValue = current[key];
      const customizerResult = customizer == null ? void 0 : customizer(objValue, key, obj);
      newValue = customizerResult !== void 0 ? customizerResult : isObject(objValue) ? objValue : isIndex(resolvedPath[i + 1]) ? [] : {};
    }
    assignValue(current, key, newValue);
    current = current[key];
  }
  return obj;
}

// node_modules/es-toolkit/dist/compat/object/set.mjs
function set(obj, path, value) {
  return updateWith(obj, path, () => value, () => void 0);
}

// trabecula/utils/common/miscellaneous.ts
var attempt = (fn, retries = 2, delay = 1e3) => __async(null, null, function* () {
  return retries > 0 ? yield fn().catch((error) => __async(null, null, function* () {
    console.error(`Function failed, error: ${error}. Retrying after ${delay}ms...`);
    return sleep(delay).then(() => attempt(fn, retries - 1, delay));
  })) : fn();
});
var convertNestedKeys = (updates) => {
  return Object.entries(updates).reduce((acc, [key, value]) => {
    key.split(".").reduce((nested, k, i, arr) => {
      return nested[k] || (nested[k] = i === arr.length - 1 ? value : {});
    }, acc);
    return acc;
  }, {});
};
var debounce2 = debounce;
var deepClone = cloneDeep;
var deepMerge = toMerged;
var handleErrors = (fn) => __async(null, null, function* () {
  var _a;
  try {
    return { success: true, data: yield fn() };
  } catch (err) {
    const errorStr = err instanceof Error ? (_a = err.stack) != null ? _a : err.message : String(err);
    console.error(errorStr);
    return { success: false, error: errorStr };
  }
});
var isDeepEqual = isEqual;
var isObject2 = (item) => item && typeof item === "object" && !Array.isArray(item);
var rng = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
var setObj = set;
var sleep = (min, max) => new Promise((resolve) => setTimeout(resolve, max > 0 ? rng(min, max) : min));
var throttle2 = throttle;
var uuid = () => crypto.randomUUID();

// trabecula/utils/common/queue.ts
var CancelledError = class extends Error {
  constructor() {
    super("PromiseQueue cancelled");
    this.name = "CancelledError";
  }
};
var PromiseQueue = class {
  constructor({ concurrency, delayRange } = {}) {
    __publicField(this, "cancelled", false);
    __publicField(this, "concurrency");
    __publicField(this, "delayRange");
    __publicField(this, "promise", null);
    __publicField(this, "queue", []);
    __publicField(this, "resolver", null);
    __publicField(this, "runningCount", 0);
    this.concurrency = concurrency != null ? concurrency : 1;
    this.delayRange = delayRange;
  }
  add(fn) {
    if (this.cancelled) return Promise.reject(new CancelledError());
    if (!this.promise) this.promise = new Promise((res) => this.resolver = res);
    return new Promise((resolve, reject) => {
      const task = () => __async(this, null, function* () {
        try {
          if (this.cancelled) return reject(new CancelledError());
          this.runningCount++;
          const result = yield fn();
          resolve(result);
        } catch (err) {
          reject(err);
        } finally {
          if (this.delayRange) yield sleep(...this.delayRange);
          this.runningCount--;
          this.next();
        }
      });
      this.queue.push(task);
      this.next();
    });
  }
  cancel() {
    var _a;
    if (this.cancelled) return;
    this.cancelled = true;
    while (this.queue.length) (_a = this.queue.shift()) == null ? void 0 : _a();
    if (this.runningCount === 0 && this.resolver) {
      this.resolver();
      this.promise = null;
      this.resolver = null;
    }
  }
  next() {
    var _a;
    while (!this.cancelled && this.runningCount < this.concurrency && this.queue.length)
      (_a = this.queue.shift()) == null ? void 0 : _a();
    if (!this.queue.length && this.runningCount === 0 && this.resolver) {
      this.resolver();
      this.promise = null;
      this.resolver = null;
    }
  }
  resolve() {
    return __async(this, null, function* () {
      if (this.promise) yield this.promise;
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AUDIO_CODECS,
  AUDIO_CODECS_COMMON,
  AUDIO_CODECS_UNCOMMON,
  CONSTANTS,
  Fmt,
  IMAGE_EXTS,
  IMAGE_EXTS_COMMON,
  IMAGE_EXTS_UNCOMMON,
  LOGICAL_OPS,
  PromiseQueue,
  VIDEO_CODECS,
  VIDEO_CODECS_COMMON,
  VIDEO_CODECS_UNCOMMON,
  VIDEO_EXTS,
  VIDEO_EXTS_COMMON,
  VIDEO_EXTS_UNCOMMON,
  WEB_VIDEO_CODECS,
  WEB_VIDEO_EXTS,
  arrayIntersect,
  attempt,
  bisectArrayChanges,
  centeredSlice,
  chunkArray,
  compareLogic,
  compareLogicOps,
  convertNestedKeys,
  countItems,
  dateWithTzToIso,
  dayjs,
  debounce,
  deepClone,
  deepMerge,
  durationToSeconds,
  fractionStringToNumber,
  getArrayDiff,
  handleErrors,
  isArchive,
  isArchiveFirstPart,
  isArchivePart,
  isDeepEqual,
  isObject,
  logicOpsToMongo,
  objectToFloat32Array,
  range,
  rng,
  rotateArrayPos,
  round,
  setObj,
  sleep,
  sortArray,
  splitArray,
  sumArray,
  throttle,
  uniqueArrayFilter,
  uniqueArrayMerge,
  uuid
});
//# sourceMappingURL=index.js.map