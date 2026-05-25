import {
  __publicField,
  __spreadProps,
  __spreadValues
} from "./chunk-UKKUKST7.mjs";

// node_modules/prettier/plugins/angular.mjs
var Ci = Object.defineProperty;
var _i = Object.getPrototypeOf;
var Ti = Reflect.get;
var an = (t23) => {
  throw TypeError(t23);
};
var ln = (t23, e) => {
  for (var n in e) Ci(t23, n, { get: e[n], enumerable: true });
};
var nt = (t23, e, n) => e.has(t23) || an("Cannot " + n);
var U = (t23, e, n) => (nt(t23, e, "read from private field"), n ? n.call(t23) : e.get(t23));
var ke = (t23, e, n) => e.has(t23) ? an("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t23) : e.set(t23, n);
var st = (t23, e, n, s) => (nt(t23, e, "write to private field"), s ? s.call(t23, n) : e.set(t23, n), n);
var v = (t23, e, n) => (nt(t23, e, "access private method"), n);
var cn = (t23, e, n) => Ti(_i(t23), n, e);
var Ei = {};
ln(Ei, { parsers: () => sn });
var sn = {};
ln(sn, { __ng_action: () => Fr, __ng_binding: () => Vr, __ng_directive: () => Hr, __ng_interpolation: () => Ur });
function ki(t23) {
  return typeof t23 == "string" ? (e) => e === t23 : (e) => t23.test(e);
}
function pn(t23, e, n) {
  let s = ki(e);
  for (let i = n; i < t23.length; i++) {
    let r = t23[i];
    if (s(r)) return i;
  }
  throw new Error(`Cannot find character ${e} from index ${n} in ${JSON.stringify(t23)}`);
}
function hn(t23) {
  return t23.slice(0, 1).toLowerCase() + t23.slice(1);
}
function be(t23) {
  let { start: e, end: n } = t23;
  return { start: e, end: n, range: [e, n] };
}
function un(t23) {
  var _a7;
  return !!((_a7 = t23.extra) == null ? void 0 : _a7.parenthesized);
}
function ue(t23) {
  return t23.type === "TSNonNullExpression" && !un(t23) ? ue(t23.expression) : (t23.type === "OptionalCallExpression" || t23.type === "OptionalMemberExpression") && !un(t23);
}
var zr = new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`, "g");
var fn;
(function(t23) {
  t23[t23.Emulated = 0] = "Emulated", t23[t23.None = 2] = "None", t23[t23.ShadowDom = 3] = "ShadowDom", t23[t23.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom";
})(fn || (fn = {}));
var dn;
(function(t23) {
  t23[t23.OnPush = 0] = "OnPush", t23[t23.Default = 1] = "Default";
})(dn || (dn = {}));
var mn;
(function(t23) {
  t23[t23.None = 0] = "None", t23[t23.SignalBased = 1] = "SignalBased", t23[t23.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform";
})(mn || (mn = {}));
var N;
(function(t23) {
  t23[t23.NONE = 0] = "NONE", t23[t23.HTML = 1] = "HTML", t23[t23.STYLE = 2] = "STYLE", t23[t23.SCRIPT = 3] = "SCRIPT", t23[t23.URL = 4] = "URL", t23[t23.RESOURCE_URL = 5] = "RESOURCE_URL", t23[t23.ATTRIBUTE_NO_BINDING = 6] = "ATTRIBUTE_NO_BINDING";
})(N || (N = {}));
var gn;
(function(t23) {
  t23[t23.Error = 0] = "Error", t23[t23.Warning = 1] = "Warning", t23[t23.Ignore = 2] = "Ignore";
})(gn || (gn = {}));
var vn;
(function(t23) {
  t23[t23.Directive = 0] = "Directive", t23[t23.Component = 1] = "Component", t23[t23.Injectable = 2] = "Injectable", t23[t23.Pipe = 3] = "Pipe", t23[t23.NgModule = 4] = "NgModule";
})(vn || (vn = {}));
var xn;
(function(t23) {
  t23[t23.Directive = 0] = "Directive", t23[t23.Pipe = 1] = "Pipe", t23[t23.NgModule = 2] = "NgModule";
})(xn || (xn = {}));
var wn;
(function(t23) {
  t23[t23.Emulated = 0] = "Emulated", t23[t23.None = 2] = "None", t23[t23.ShadowDom = 3] = "ShadowDom", t23[t23.ExperimentalIsolatedShadowDom = 4] = "ExperimentalIsolatedShadowDom";
})(wn || (wn = {}));
var Sn;
(function(t23) {
  t23[t23.Little = 0] = "Little", t23[t23.Big = 1] = "Big";
})(Sn || (Sn = {}));
var En;
(function(t23) {
  t23[t23.None = 0] = "None", t23[t23.Const = 1] = "Const";
})(En || (En = {}));
var yn;
(function(t23) {
  t23[t23.Dynamic = 0] = "Dynamic", t23[t23.Bool = 1] = "Bool", t23[t23.String = 2] = "String", t23[t23.Int = 3] = "Int", t23[t23.Number = 4] = "Number", t23[t23.Function = 5] = "Function", t23[t23.Inferred = 6] = "Inferred", t23[t23.None = 7] = "None";
})(yn || (yn = {}));
var Cn;
(function(t23) {
  t23[t23.Minus = 0] = "Minus", t23[t23.Plus = 1] = "Plus";
})(Cn || (Cn = {}));
var c;
(function(t23) {
  t23[t23.Equals = 0] = "Equals", t23[t23.NotEquals = 1] = "NotEquals", t23[t23.Assign = 2] = "Assign", t23[t23.Identical = 3] = "Identical", t23[t23.NotIdentical = 4] = "NotIdentical", t23[t23.Minus = 5] = "Minus", t23[t23.Plus = 6] = "Plus", t23[t23.Divide = 7] = "Divide", t23[t23.Multiply = 8] = "Multiply", t23[t23.Modulo = 9] = "Modulo", t23[t23.And = 10] = "And", t23[t23.Or = 11] = "Or", t23[t23.BitwiseOr = 12] = "BitwiseOr", t23[t23.BitwiseAnd = 13] = "BitwiseAnd", t23[t23.Lower = 14] = "Lower", t23[t23.LowerEquals = 15] = "LowerEquals", t23[t23.Bigger = 16] = "Bigger", t23[t23.BiggerEquals = 17] = "BiggerEquals", t23[t23.NullishCoalesce = 18] = "NullishCoalesce", t23[t23.Exponentiation = 19] = "Exponentiation", t23[t23.In = 20] = "In", t23[t23.AdditionAssignment = 21] = "AdditionAssignment", t23[t23.SubtractionAssignment = 22] = "SubtractionAssignment", t23[t23.MultiplicationAssignment = 23] = "MultiplicationAssignment", t23[t23.DivisionAssignment = 24] = "DivisionAssignment", t23[t23.RemainderAssignment = 25] = "RemainderAssignment", t23[t23.ExponentiationAssignment = 26] = "ExponentiationAssignment", t23[t23.AndAssignment = 27] = "AndAssignment", t23[t23.OrAssignment = 28] = "OrAssignment", t23[t23.NullishCoalesceAssignment = 29] = "NullishCoalesceAssignment";
})(c || (c = {}));
function bi(t23, e) {
  return t23 == null || e == null ? t23 == e : t23.isEquivalent(e);
}
function Ai(t23, e, n) {
  let s = t23.length;
  if (s !== e.length) return false;
  for (let i = 0; i < s; i++) if (!n(t23[i], e[i])) return false;
  return true;
}
function Ge(t23, e) {
  return Ai(t23, e, (n, s) => n.isEquivalent(s));
}
var S = class {
  constructor(e, n) {
    __publicField(this, "type");
    __publicField(this, "sourceSpan");
    this.type = e || null, this.sourceSpan = n || null;
  }
  prop(e, n) {
    return new ht(this, e, null, n);
  }
  key(e, n, s) {
    return new ft(this, e, n, s);
  }
  callFn(e, n, s) {
    return new at(this, e, null, n, s);
  }
  instantiate(e, n, s) {
    return new lt(this, e, n, s);
  }
  conditional(e, n = null, s) {
    return new pt(this, e, n, null, s);
  }
  equals(e, n) {
    return new x(c.Equals, this, e, null, n);
  }
  notEquals(e, n) {
    return new x(c.NotEquals, this, e, null, n);
  }
  identical(e, n) {
    return new x(c.Identical, this, e, null, n);
  }
  notIdentical(e, n) {
    return new x(c.NotIdentical, this, e, null, n);
  }
  minus(e, n) {
    return new x(c.Minus, this, e, null, n);
  }
  plus(e, n) {
    return new x(c.Plus, this, e, null, n);
  }
  divide(e, n) {
    return new x(c.Divide, this, e, null, n);
  }
  multiply(e, n) {
    return new x(c.Multiply, this, e, null, n);
  }
  modulo(e, n) {
    return new x(c.Modulo, this, e, null, n);
  }
  power(e, n) {
    return new x(c.Exponentiation, this, e, null, n);
  }
  and(e, n) {
    return new x(c.And, this, e, null, n);
  }
  bitwiseOr(e, n) {
    return new x(c.BitwiseOr, this, e, null, n);
  }
  bitwiseAnd(e, n) {
    return new x(c.BitwiseAnd, this, e, null, n);
  }
  or(e, n) {
    return new x(c.Or, this, e, null, n);
  }
  lower(e, n) {
    return new x(c.Lower, this, e, null, n);
  }
  lowerEquals(e, n) {
    return new x(c.LowerEquals, this, e, null, n);
  }
  bigger(e, n) {
    return new x(c.Bigger, this, e, null, n);
  }
  biggerEquals(e, n) {
    return new x(c.BiggerEquals, this, e, null, n);
  }
  isBlank(e) {
    return this.equals(TYPED_NULL_EXPR, e);
  }
  nullishCoalesce(e, n) {
    return new x(c.NullishCoalesce, this, e, null, n);
  }
  toStmt() {
    return new wt(this, null);
  }
};
var rt = class t extends S {
  constructor(e, n, s) {
    super(n, s);
    __publicField(this, "name");
    this.name = e;
  }
  isEquivalent(e) {
    return e instanceof t && this.name === e.name;
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitReadVarExpr(this, n);
  }
  clone() {
    return new t(this.name, this.type, this.sourceSpan);
  }
  set(e) {
    return new x(c.Assign, this, e, null, this.sourceSpan);
  }
};
var ot = class t2 extends S {
  constructor(e, n, s) {
    super(n, s);
    __publicField(this, "expr");
    this.expr = e;
  }
  visitExpression(e, n) {
    return e.visitTypeofExpr(this, n);
  }
  isEquivalent(e) {
    return e instanceof t2 && e.expr.isEquivalent(this.expr);
  }
  isConstant() {
    return this.expr.isConstant();
  }
  clone() {
    return new t2(this.expr.clone());
  }
};
var at = class t3 extends S {
  constructor(e, n, s, i, r = false) {
    super(s, i);
    __publicField(this, "fn");
    __publicField(this, "args");
    __publicField(this, "pure");
    this.fn = e, this.args = n, this.pure = r;
  }
  get receiver() {
    return this.fn;
  }
  isEquivalent(e) {
    return e instanceof t3 && this.fn.isEquivalent(e.fn) && Ge(this.args, e.args) && this.pure === e.pure;
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitInvokeFunctionExpr(this, n);
  }
  clone() {
    return new t3(this.fn.clone(), this.args.map((e) => e.clone()), this.type, this.sourceSpan, this.pure);
  }
};
var lt = class t4 extends S {
  constructor(e, n, s, i) {
    super(s, i);
    __publicField(this, "classExpr");
    __publicField(this, "args");
    this.classExpr = e, this.args = n;
  }
  isEquivalent(e) {
    return e instanceof t4 && this.classExpr.isEquivalent(e.classExpr) && Ge(this.args, e.args);
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitInstantiateExpr(this, n);
  }
  clone() {
    return new t4(this.classExpr.clone(), this.args.map((e) => e.clone()), this.type, this.sourceSpan);
  }
};
var ct = class t5 extends S {
  constructor(e, n, s) {
    super(null, s);
    __publicField(this, "body");
    __publicField(this, "flags");
    this.body = e, this.flags = n;
  }
  isEquivalent(e) {
    return e instanceof t5 && this.body === e.body && this.flags === e.flags;
  }
  isConstant() {
    return true;
  }
  visitExpression(e, n) {
    return e.visitRegularExpressionLiteral(this, n);
  }
  clone() {
    return new t5(this.body, this.flags, this.sourceSpan);
  }
};
var Ne = class t6 extends S {
  constructor(e, n, s) {
    super(n, s);
    __publicField(this, "value");
    this.value = e;
  }
  isEquivalent(e) {
    return e instanceof t6 && this.value === e.value;
  }
  isConstant() {
    return true;
  }
  visitExpression(e, n) {
    return e.visitLiteralExpr(this, n);
  }
  clone() {
    return new t6(this.value, this.type, this.sourceSpan);
  }
};
var ut = class t7 extends S {
  constructor(e, n, s = null, i) {
    super(n, i);
    __publicField(this, "value");
    __publicField(this, "typeParams");
    this.value = e, this.typeParams = s;
  }
  isEquivalent(e) {
    return e instanceof t7 && this.value.name === e.value.name && this.value.moduleName === e.value.moduleName;
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitExternalExpr(this, n);
  }
  clone() {
    return new t7(this.value, this.type, this.typeParams, this.sourceSpan);
  }
};
var pt = class t8 extends S {
  constructor(e, n, s = null, i, r) {
    super(i || n.type, r);
    __publicField(this, "condition");
    __publicField(this, "falseCase");
    __publicField(this, "trueCase");
    this.condition = e, this.falseCase = s, this.trueCase = n;
  }
  isEquivalent(e) {
    return e instanceof t8 && this.condition.isEquivalent(e.condition) && this.trueCase.isEquivalent(e.trueCase) && bi(this.falseCase, e.falseCase);
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitConditionalExpr(this, n);
  }
  clone() {
    var _a7;
    return new t8(this.condition.clone(), this.trueCase.clone(), (_a7 = this.falseCase) == null ? void 0 : _a7.clone(), this.type, this.sourceSpan);
  }
};
var x = class t9 extends S {
  constructor(e, n, s, i, r) {
    super(i || n.type, r);
    __publicField(this, "operator");
    __publicField(this, "rhs");
    __publicField(this, "lhs");
    this.operator = e, this.rhs = s, this.lhs = n;
  }
  isEquivalent(e) {
    return e instanceof t9 && this.operator === e.operator && this.lhs.isEquivalent(e.lhs) && this.rhs.isEquivalent(e.rhs);
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitBinaryOperatorExpr(this, n);
  }
  clone() {
    return new t9(this.operator, this.lhs.clone(), this.rhs.clone(), this.type, this.sourceSpan);
  }
  isAssignment() {
    let e = this.operator;
    return e === c.Assign || e === c.AdditionAssignment || e === c.SubtractionAssignment || e === c.MultiplicationAssignment || e === c.DivisionAssignment || e === c.RemainderAssignment || e === c.ExponentiationAssignment || e === c.AndAssignment || e === c.OrAssignment || e === c.NullishCoalesceAssignment;
  }
};
var ht = class t10 extends S {
  constructor(e, n, s, i) {
    super(s, i);
    __publicField(this, "receiver");
    __publicField(this, "name");
    this.receiver = e, this.name = n;
  }
  get index() {
    return this.name;
  }
  isEquivalent(e) {
    return e instanceof t10 && this.receiver.isEquivalent(e.receiver) && this.name === e.name;
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitReadPropExpr(this, n);
  }
  set(e) {
    return new x(c.Assign, this.receiver.prop(this.name), e, null, this.sourceSpan);
  }
  clone() {
    return new t10(this.receiver.clone(), this.name, this.type, this.sourceSpan);
  }
};
var ft = class t11 extends S {
  constructor(e, n, s, i) {
    super(s, i);
    __publicField(this, "receiver");
    __publicField(this, "index");
    this.receiver = e, this.index = n;
  }
  isEquivalent(e) {
    return e instanceof t11 && this.receiver.isEquivalent(e.receiver) && this.index.isEquivalent(e.index);
  }
  isConstant() {
    return false;
  }
  visitExpression(e, n) {
    return e.visitReadKeyExpr(this, n);
  }
  set(e) {
    return new x(c.Assign, this.receiver.key(this.index), e, null, this.sourceSpan);
  }
  clone() {
    return new t11(this.receiver.clone(), this.index.clone(), this.type, this.sourceSpan);
  }
};
var dt = class t12 extends S {
  constructor(e, n, s) {
    super(n, s);
    __publicField(this, "entries");
    this.entries = e;
  }
  isConstant() {
    return this.entries.every((e) => e.isConstant());
  }
  isEquivalent(e) {
    return e instanceof t12 && Ge(this.entries, e.entries);
  }
  visitExpression(e, n) {
    return e.visitLiteralArrayExpr(this, n);
  }
  clone() {
    return new t12(this.entries.map((e) => e.clone()), this.type, this.sourceSpan);
  }
};
var mt = class t13 {
  constructor(e) {
    __publicField(this, "expression");
    this.expression = e;
  }
  isEquivalent(e) {
    return e instanceof t13 && this.expression.isEquivalent(e.expression);
  }
  clone() {
    return new t13(this.expression.clone());
  }
  isConstant() {
    return this.expression.isConstant();
  }
};
var gt = class t14 extends S {
  constructor(e, n, s) {
    super(n, s);
    __publicField(this, "entries");
    __publicField(this, "valueType", null);
    this.entries = e, n && (this.valueType = n.valueType);
  }
  isEquivalent(e) {
    return e instanceof t14 && Ge(this.entries, e.entries);
  }
  isConstant() {
    return this.entries.every((e) => e.isConstant());
  }
  visitExpression(e, n) {
    return e.visitLiteralMapExpr(this, n);
  }
  clone() {
    let e = this.entries.map((n) => n.clone());
    return new t14(e, this.type, this.sourceSpan);
  }
};
var vt = class t15 extends S {
  constructor(e, n) {
    super(null, n);
    __publicField(this, "expression");
    this.expression = e;
  }
  isEquivalent(e) {
    return e instanceof t15 && this.expression.isEquivalent(e.expression);
  }
  isConstant() {
    return this.expression.isConstant();
  }
  visitExpression(e, n) {
    return e.visitSpreadElementExpr(this, n);
  }
  clone() {
    return new t15(this.expression.clone(), this.sourceSpan);
  }
};
var Pe;
(function(t23) {
  t23[t23.None = 0] = "None", t23[t23.Final = 1] = "Final", t23[t23.Private = 2] = "Private", t23[t23.Exported = 4] = "Exported", t23[t23.Static = 8] = "Static";
})(Pe || (Pe = {}));
var xt = class {
  constructor(e = Pe.None, n = null, s) {
    __publicField(this, "modifiers");
    __publicField(this, "sourceSpan");
    __publicField(this, "leadingComments");
    this.modifiers = e, this.sourceSpan = n, this.leadingComments = s;
  }
  hasModifier(e) {
    return (this.modifiers & e) !== 0;
  }
  addLeadingComment(e) {
    var _a7;
    this.leadingComments = (_a7 = this.leadingComments) != null ? _a7 : [], this.leadingComments.push(e);
  }
};
var wt = class t16 extends xt {
  constructor(e, n, s) {
    super(Pe.None, n, s);
    __publicField(this, "expr");
    this.expr = e;
  }
  isEquivalent(e) {
    return e instanceof t16 && this.expr.isEquivalent(e.expr);
  }
  visitStatement(e, n) {
    return e.visitExpressionStmt(this, n);
  }
};
var _a;
var _n = (_a = class {
  keyOf(e) {
    var _a7;
    if (e instanceof Ne && typeof e.value == "string") return `"${e.value}"`;
    if (e instanceof Ne) return String(e.value);
    if (e instanceof ct) return `/${e.body}/${(_a7 = e.flags) != null ? _a7 : ""}`;
    if (e instanceof dt) {
      let n = [];
      for (let s of e.entries) n.push(this.keyOf(s));
      return `[${n.join(",")}]`;
    } else if (e instanceof gt) {
      let n = [];
      for (let s of e.entries) if (s instanceof mt) n.push("..." + this.keyOf(s.expression));
      else {
        let i = s.key;
        s.quoted && (i = `"${i}"`), n.push(i + ":" + this.keyOf(s.value));
      }
      return `{${n.join(",")}}`;
    } else {
      if (e instanceof ut) return `import("${e.value.moduleName}", ${e.value.name})`;
      if (e instanceof rt) return `read(${e.name})`;
      if (e instanceof ot) return `typeof(${this.keyOf(e.expr)})`;
      if (e instanceof vt) return `...${this.keyOf(e.expression)}`;
      throw new Error(`${this.constructor.name} does not handle expressions of type ${e.constructor.name}`);
    }
  }
}, __publicField(_a, "INSTANCE", new _a()), _a);
var o = "@angular/core";
var _a2;
var l = (_a2 = class {
}, __publicField(_a2, "NEW_METHOD", "factory"), __publicField(_a2, "TRANSFORM_METHOD", "transform"), __publicField(_a2, "PATCH_DEPS", "patchedDeps"), __publicField(_a2, "core", { name: null, moduleName: o }), __publicField(_a2, "namespaceHTML", { name: "\u0275\u0275namespaceHTML", moduleName: o }), __publicField(_a2, "namespaceMathML", { name: "\u0275\u0275namespaceMathML", moduleName: o }), __publicField(_a2, "namespaceSVG", { name: "\u0275\u0275namespaceSVG", moduleName: o }), __publicField(_a2, "element", { name: "\u0275\u0275element", moduleName: o }), __publicField(_a2, "elementStart", { name: "\u0275\u0275elementStart", moduleName: o }), __publicField(_a2, "elementEnd", { name: "\u0275\u0275elementEnd", moduleName: o }), __publicField(_a2, "domElement", { name: "\u0275\u0275domElement", moduleName: o }), __publicField(_a2, "domElementStart", { name: "\u0275\u0275domElementStart", moduleName: o }), __publicField(_a2, "domElementEnd", { name: "\u0275\u0275domElementEnd", moduleName: o }), __publicField(_a2, "domElementContainer", { name: "\u0275\u0275domElementContainer", moduleName: o }), __publicField(_a2, "domElementContainerStart", { name: "\u0275\u0275domElementContainerStart", moduleName: o }), __publicField(_a2, "domElementContainerEnd", { name: "\u0275\u0275domElementContainerEnd", moduleName: o }), __publicField(_a2, "domTemplate", { name: "\u0275\u0275domTemplate", moduleName: o }), __publicField(_a2, "domListener", { name: "\u0275\u0275domListener", moduleName: o }), __publicField(_a2, "advance", { name: "\u0275\u0275advance", moduleName: o }), __publicField(_a2, "syntheticHostProperty", { name: "\u0275\u0275syntheticHostProperty", moduleName: o }), __publicField(_a2, "syntheticHostListener", { name: "\u0275\u0275syntheticHostListener", moduleName: o }), __publicField(_a2, "attribute", { name: "\u0275\u0275attribute", moduleName: o }), __publicField(_a2, "classProp", { name: "\u0275\u0275classProp", moduleName: o }), __publicField(_a2, "elementContainerStart", { name: "\u0275\u0275elementContainerStart", moduleName: o }), __publicField(_a2, "elementContainerEnd", { name: "\u0275\u0275elementContainerEnd", moduleName: o }), __publicField(_a2, "elementContainer", { name: "\u0275\u0275elementContainer", moduleName: o }), __publicField(_a2, "styleMap", { name: "\u0275\u0275styleMap", moduleName: o }), __publicField(_a2, "classMap", { name: "\u0275\u0275classMap", moduleName: o }), __publicField(_a2, "styleProp", { name: "\u0275\u0275styleProp", moduleName: o }), __publicField(_a2, "interpolate", { name: "\u0275\u0275interpolate", moduleName: o }), __publicField(_a2, "interpolate1", { name: "\u0275\u0275interpolate1", moduleName: o }), __publicField(_a2, "interpolate2", { name: "\u0275\u0275interpolate2", moduleName: o }), __publicField(_a2, "interpolate3", { name: "\u0275\u0275interpolate3", moduleName: o }), __publicField(_a2, "interpolate4", { name: "\u0275\u0275interpolate4", moduleName: o }), __publicField(_a2, "interpolate5", { name: "\u0275\u0275interpolate5", moduleName: o }), __publicField(_a2, "interpolate6", { name: "\u0275\u0275interpolate6", moduleName: o }), __publicField(_a2, "interpolate7", { name: "\u0275\u0275interpolate7", moduleName: o }), __publicField(_a2, "interpolate8", { name: "\u0275\u0275interpolate8", moduleName: o }), __publicField(_a2, "interpolateV", { name: "\u0275\u0275interpolateV", moduleName: o }), __publicField(_a2, "nextContext", { name: "\u0275\u0275nextContext", moduleName: o }), __publicField(_a2, "resetView", { name: "\u0275\u0275resetView", moduleName: o }), __publicField(_a2, "templateCreate", { name: "\u0275\u0275template", moduleName: o }), __publicField(_a2, "defer", { name: "\u0275\u0275defer", moduleName: o }), __publicField(_a2, "deferWhen", { name: "\u0275\u0275deferWhen", moduleName: o }), __publicField(_a2, "deferOnIdle", { name: "\u0275\u0275deferOnIdle", moduleName: o }), __publicField(_a2, "deferOnImmediate", { name: "\u0275\u0275deferOnImmediate", moduleName: o }), __publicField(_a2, "deferOnTimer", { name: "\u0275\u0275deferOnTimer", moduleName: o }), __publicField(_a2, "deferOnHover", { name: "\u0275\u0275deferOnHover", moduleName: o }), __publicField(_a2, "deferOnInteraction", { name: "\u0275\u0275deferOnInteraction", moduleName: o }), __publicField(_a2, "deferOnViewport", { name: "\u0275\u0275deferOnViewport", moduleName: o }), __publicField(_a2, "deferPrefetchWhen", { name: "\u0275\u0275deferPrefetchWhen", moduleName: o }), __publicField(_a2, "deferPrefetchOnIdle", { name: "\u0275\u0275deferPrefetchOnIdle", moduleName: o }), __publicField(_a2, "deferPrefetchOnImmediate", { name: "\u0275\u0275deferPrefetchOnImmediate", moduleName: o }), __publicField(_a2, "deferPrefetchOnTimer", { name: "\u0275\u0275deferPrefetchOnTimer", moduleName: o }), __publicField(_a2, "deferPrefetchOnHover", { name: "\u0275\u0275deferPrefetchOnHover", moduleName: o }), __publicField(_a2, "deferPrefetchOnInteraction", { name: "\u0275\u0275deferPrefetchOnInteraction", moduleName: o }), __publicField(_a2, "deferPrefetchOnViewport", { name: "\u0275\u0275deferPrefetchOnViewport", moduleName: o }), __publicField(_a2, "deferHydrateWhen", { name: "\u0275\u0275deferHydrateWhen", moduleName: o }), __publicField(_a2, "deferHydrateNever", { name: "\u0275\u0275deferHydrateNever", moduleName: o }), __publicField(_a2, "deferHydrateOnIdle", { name: "\u0275\u0275deferHydrateOnIdle", moduleName: o }), __publicField(_a2, "deferHydrateOnImmediate", { name: "\u0275\u0275deferHydrateOnImmediate", moduleName: o }), __publicField(_a2, "deferHydrateOnTimer", { name: "\u0275\u0275deferHydrateOnTimer", moduleName: o }), __publicField(_a2, "deferHydrateOnHover", { name: "\u0275\u0275deferHydrateOnHover", moduleName: o }), __publicField(_a2, "deferHydrateOnInteraction", { name: "\u0275\u0275deferHydrateOnInteraction", moduleName: o }), __publicField(_a2, "deferHydrateOnViewport", { name: "\u0275\u0275deferHydrateOnViewport", moduleName: o }), __publicField(_a2, "deferEnableTimerScheduling", { name: "\u0275\u0275deferEnableTimerScheduling", moduleName: o }), __publicField(_a2, "conditionalCreate", { name: "\u0275\u0275conditionalCreate", moduleName: o }), __publicField(_a2, "conditionalBranchCreate", { name: "\u0275\u0275conditionalBranchCreate", moduleName: o }), __publicField(_a2, "conditional", { name: "\u0275\u0275conditional", moduleName: o }), __publicField(_a2, "repeater", { name: "\u0275\u0275repeater", moduleName: o }), __publicField(_a2, "repeaterCreate", { name: "\u0275\u0275repeaterCreate", moduleName: o }), __publicField(_a2, "repeaterTrackByIndex", { name: "\u0275\u0275repeaterTrackByIndex", moduleName: o }), __publicField(_a2, "repeaterTrackByIdentity", { name: "\u0275\u0275repeaterTrackByIdentity", moduleName: o }), __publicField(_a2, "componentInstance", { name: "\u0275\u0275componentInstance", moduleName: o }), __publicField(_a2, "text", { name: "\u0275\u0275text", moduleName: o }), __publicField(_a2, "enableBindings", { name: "\u0275\u0275enableBindings", moduleName: o }), __publicField(_a2, "disableBindings", { name: "\u0275\u0275disableBindings", moduleName: o }), __publicField(_a2, "getCurrentView", { name: "\u0275\u0275getCurrentView", moduleName: o }), __publicField(_a2, "textInterpolate", { name: "\u0275\u0275textInterpolate", moduleName: o }), __publicField(_a2, "textInterpolate1", { name: "\u0275\u0275textInterpolate1", moduleName: o }), __publicField(_a2, "textInterpolate2", { name: "\u0275\u0275textInterpolate2", moduleName: o }), __publicField(_a2, "textInterpolate3", { name: "\u0275\u0275textInterpolate3", moduleName: o }), __publicField(_a2, "textInterpolate4", { name: "\u0275\u0275textInterpolate4", moduleName: o }), __publicField(_a2, "textInterpolate5", { name: "\u0275\u0275textInterpolate5", moduleName: o }), __publicField(_a2, "textInterpolate6", { name: "\u0275\u0275textInterpolate6", moduleName: o }), __publicField(_a2, "textInterpolate7", { name: "\u0275\u0275textInterpolate7", moduleName: o }), __publicField(_a2, "textInterpolate8", { name: "\u0275\u0275textInterpolate8", moduleName: o }), __publicField(_a2, "textInterpolateV", { name: "\u0275\u0275textInterpolateV", moduleName: o }), __publicField(_a2, "restoreView", { name: "\u0275\u0275restoreView", moduleName: o }), __publicField(_a2, "pureFunction0", { name: "\u0275\u0275pureFunction0", moduleName: o }), __publicField(_a2, "pureFunction1", { name: "\u0275\u0275pureFunction1", moduleName: o }), __publicField(_a2, "pureFunction2", { name: "\u0275\u0275pureFunction2", moduleName: o }), __publicField(_a2, "pureFunction3", { name: "\u0275\u0275pureFunction3", moduleName: o }), __publicField(_a2, "pureFunction4", { name: "\u0275\u0275pureFunction4", moduleName: o }), __publicField(_a2, "pureFunction5", { name: "\u0275\u0275pureFunction5", moduleName: o }), __publicField(_a2, "pureFunction6", { name: "\u0275\u0275pureFunction6", moduleName: o }), __publicField(_a2, "pureFunction7", { name: "\u0275\u0275pureFunction7", moduleName: o }), __publicField(_a2, "pureFunction8", { name: "\u0275\u0275pureFunction8", moduleName: o }), __publicField(_a2, "pureFunctionV", { name: "\u0275\u0275pureFunctionV", moduleName: o }), __publicField(_a2, "pipeBind1", { name: "\u0275\u0275pipeBind1", moduleName: o }), __publicField(_a2, "pipeBind2", { name: "\u0275\u0275pipeBind2", moduleName: o }), __publicField(_a2, "pipeBind3", { name: "\u0275\u0275pipeBind3", moduleName: o }), __publicField(_a2, "pipeBind4", { name: "\u0275\u0275pipeBind4", moduleName: o }), __publicField(_a2, "pipeBindV", { name: "\u0275\u0275pipeBindV", moduleName: o }), __publicField(_a2, "domProperty", { name: "\u0275\u0275domProperty", moduleName: o }), __publicField(_a2, "ariaProperty", { name: "\u0275\u0275ariaProperty", moduleName: o }), __publicField(_a2, "property", { name: "\u0275\u0275property", moduleName: o }), __publicField(_a2, "control", { name: "\u0275\u0275control", moduleName: o }), __publicField(_a2, "controlCreate", { name: "\u0275\u0275controlCreate", moduleName: o }), __publicField(_a2, "animationEnterListener", { name: "\u0275\u0275animateEnterListener", moduleName: o }), __publicField(_a2, "animationLeaveListener", { name: "\u0275\u0275animateLeaveListener", moduleName: o }), __publicField(_a2, "animationEnter", { name: "\u0275\u0275animateEnter", moduleName: o }), __publicField(_a2, "animationLeave", { name: "\u0275\u0275animateLeave", moduleName: o }), __publicField(_a2, "i18n", { name: "\u0275\u0275i18n", moduleName: o }), __publicField(_a2, "i18nAttributes", { name: "\u0275\u0275i18nAttributes", moduleName: o }), __publicField(_a2, "i18nExp", { name: "\u0275\u0275i18nExp", moduleName: o }), __publicField(_a2, "i18nStart", { name: "\u0275\u0275i18nStart", moduleName: o }), __publicField(_a2, "i18nEnd", { name: "\u0275\u0275i18nEnd", moduleName: o }), __publicField(_a2, "i18nApply", { name: "\u0275\u0275i18nApply", moduleName: o }), __publicField(_a2, "i18nPostprocess", { name: "\u0275\u0275i18nPostprocess", moduleName: o }), __publicField(_a2, "pipe", { name: "\u0275\u0275pipe", moduleName: o }), __publicField(_a2, "projection", { name: "\u0275\u0275projection", moduleName: o }), __publicField(_a2, "projectionDef", { name: "\u0275\u0275projectionDef", moduleName: o }), __publicField(_a2, "reference", { name: "\u0275\u0275reference", moduleName: o }), __publicField(_a2, "inject", { name: "\u0275\u0275inject", moduleName: o }), __publicField(_a2, "injectAttribute", { name: "\u0275\u0275injectAttribute", moduleName: o }), __publicField(_a2, "directiveInject", { name: "\u0275\u0275directiveInject", moduleName: o }), __publicField(_a2, "invalidFactory", { name: "\u0275\u0275invalidFactory", moduleName: o }), __publicField(_a2, "invalidFactoryDep", { name: "\u0275\u0275invalidFactoryDep", moduleName: o }), __publicField(_a2, "templateRefExtractor", { name: "\u0275\u0275templateRefExtractor", moduleName: o }), __publicField(_a2, "forwardRef", { name: "forwardRef", moduleName: o }), __publicField(_a2, "resolveForwardRef", { name: "resolveForwardRef", moduleName: o }), __publicField(_a2, "replaceMetadata", { name: "\u0275\u0275replaceMetadata", moduleName: o }), __publicField(_a2, "getReplaceMetadataURL", { name: "\u0275\u0275getReplaceMetadataURL", moduleName: o }), __publicField(_a2, "\u0275\u0275defineInjectable", { name: "\u0275\u0275defineInjectable", moduleName: o }), __publicField(_a2, "declareInjectable", { name: "\u0275\u0275ngDeclareInjectable", moduleName: o }), __publicField(_a2, "InjectableDeclaration", { name: "\u0275\u0275InjectableDeclaration", moduleName: o }), __publicField(_a2, "resolveWindow", { name: "\u0275\u0275resolveWindow", moduleName: o }), __publicField(_a2, "resolveDocument", { name: "\u0275\u0275resolveDocument", moduleName: o }), __publicField(_a2, "resolveBody", { name: "\u0275\u0275resolveBody", moduleName: o }), __publicField(_a2, "getComponentDepsFactory", { name: "\u0275\u0275getComponentDepsFactory", moduleName: o }), __publicField(_a2, "defineComponent", { name: "\u0275\u0275defineComponent", moduleName: o }), __publicField(_a2, "declareComponent", { name: "\u0275\u0275ngDeclareComponent", moduleName: o }), __publicField(_a2, "setComponentScope", { name: "\u0275\u0275setComponentScope", moduleName: o }), __publicField(_a2, "ChangeDetectionStrategy", { name: "ChangeDetectionStrategy", moduleName: o }), __publicField(_a2, "ViewEncapsulation", { name: "ViewEncapsulation", moduleName: o }), __publicField(_a2, "ComponentDeclaration", { name: "\u0275\u0275ComponentDeclaration", moduleName: o }), __publicField(_a2, "FactoryDeclaration", { name: "\u0275\u0275FactoryDeclaration", moduleName: o }), __publicField(_a2, "declareFactory", { name: "\u0275\u0275ngDeclareFactory", moduleName: o }), __publicField(_a2, "FactoryTarget", { name: "\u0275\u0275FactoryTarget", moduleName: o }), __publicField(_a2, "defineDirective", { name: "\u0275\u0275defineDirective", moduleName: o }), __publicField(_a2, "declareDirective", { name: "\u0275\u0275ngDeclareDirective", moduleName: o }), __publicField(_a2, "DirectiveDeclaration", { name: "\u0275\u0275DirectiveDeclaration", moduleName: o }), __publicField(_a2, "InjectorDef", { name: "\u0275\u0275InjectorDef", moduleName: o }), __publicField(_a2, "InjectorDeclaration", { name: "\u0275\u0275InjectorDeclaration", moduleName: o }), __publicField(_a2, "defineInjector", { name: "\u0275\u0275defineInjector", moduleName: o }), __publicField(_a2, "declareInjector", { name: "\u0275\u0275ngDeclareInjector", moduleName: o }), __publicField(_a2, "NgModuleDeclaration", { name: "\u0275\u0275NgModuleDeclaration", moduleName: o }), __publicField(_a2, "ModuleWithProviders", { name: "ModuleWithProviders", moduleName: o }), __publicField(_a2, "defineNgModule", { name: "\u0275\u0275defineNgModule", moduleName: o }), __publicField(_a2, "declareNgModule", { name: "\u0275\u0275ngDeclareNgModule", moduleName: o }), __publicField(_a2, "setNgModuleScope", { name: "\u0275\u0275setNgModuleScope", moduleName: o }), __publicField(_a2, "registerNgModuleType", { name: "\u0275\u0275registerNgModuleType", moduleName: o }), __publicField(_a2, "PipeDeclaration", { name: "\u0275\u0275PipeDeclaration", moduleName: o }), __publicField(_a2, "definePipe", { name: "\u0275\u0275definePipe", moduleName: o }), __publicField(_a2, "declarePipe", { name: "\u0275\u0275ngDeclarePipe", moduleName: o }), __publicField(_a2, "declareClassMetadata", { name: "\u0275\u0275ngDeclareClassMetadata", moduleName: o }), __publicField(_a2, "declareClassMetadataAsync", { name: "\u0275\u0275ngDeclareClassMetadataAsync", moduleName: o }), __publicField(_a2, "setClassMetadata", { name: "\u0275setClassMetadata", moduleName: o }), __publicField(_a2, "setClassMetadataAsync", { name: "\u0275setClassMetadataAsync", moduleName: o }), __publicField(_a2, "setClassDebugInfo", { name: "\u0275setClassDebugInfo", moduleName: o }), __publicField(_a2, "queryRefresh", { name: "\u0275\u0275queryRefresh", moduleName: o }), __publicField(_a2, "viewQuery", { name: "\u0275\u0275viewQuery", moduleName: o }), __publicField(_a2, "loadQuery", { name: "\u0275\u0275loadQuery", moduleName: o }), __publicField(_a2, "contentQuery", { name: "\u0275\u0275contentQuery", moduleName: o }), __publicField(_a2, "viewQuerySignal", { name: "\u0275\u0275viewQuerySignal", moduleName: o }), __publicField(_a2, "contentQuerySignal", { name: "\u0275\u0275contentQuerySignal", moduleName: o }), __publicField(_a2, "queryAdvance", { name: "\u0275\u0275queryAdvance", moduleName: o }), __publicField(_a2, "twoWayProperty", { name: "\u0275\u0275twoWayProperty", moduleName: o }), __publicField(_a2, "twoWayBindingSet", { name: "\u0275\u0275twoWayBindingSet", moduleName: o }), __publicField(_a2, "twoWayListener", { name: "\u0275\u0275twoWayListener", moduleName: o }), __publicField(_a2, "declareLet", { name: "\u0275\u0275declareLet", moduleName: o }), __publicField(_a2, "storeLet", { name: "\u0275\u0275storeLet", moduleName: o }), __publicField(_a2, "readContextLet", { name: "\u0275\u0275readContextLet", moduleName: o }), __publicField(_a2, "attachSourceLocations", { name: "\u0275\u0275attachSourceLocations", moduleName: o }), __publicField(_a2, "NgOnChangesFeature", { name: "\u0275\u0275NgOnChangesFeature", moduleName: o }), __publicField(_a2, "InheritDefinitionFeature", { name: "\u0275\u0275InheritDefinitionFeature", moduleName: o }), __publicField(_a2, "ProvidersFeature", { name: "\u0275\u0275ProvidersFeature", moduleName: o }), __publicField(_a2, "HostDirectivesFeature", { name: "\u0275\u0275HostDirectivesFeature", moduleName: o }), __publicField(_a2, "ExternalStylesFeature", { name: "\u0275\u0275ExternalStylesFeature", moduleName: o }), __publicField(_a2, "listener", { name: "\u0275\u0275listener", moduleName: o }), __publicField(_a2, "getInheritedFactory", { name: "\u0275\u0275getInheritedFactory", moduleName: o }), __publicField(_a2, "sanitizeHtml", { name: "\u0275\u0275sanitizeHtml", moduleName: o }), __publicField(_a2, "sanitizeStyle", { name: "\u0275\u0275sanitizeStyle", moduleName: o }), __publicField(_a2, "validateAttribute", { name: "\u0275\u0275validateAttribute", moduleName: o }), __publicField(_a2, "sanitizeResourceUrl", { name: "\u0275\u0275sanitizeResourceUrl", moduleName: o }), __publicField(_a2, "sanitizeScript", { name: "\u0275\u0275sanitizeScript", moduleName: o }), __publicField(_a2, "sanitizeUrl", { name: "\u0275\u0275sanitizeUrl", moduleName: o }), __publicField(_a2, "sanitizeUrlOrResourceUrl", { name: "\u0275\u0275sanitizeUrlOrResourceUrl", moduleName: o }), __publicField(_a2, "trustConstantHtml", { name: "\u0275\u0275trustConstantHtml", moduleName: o }), __publicField(_a2, "trustConstantResourceUrl", { name: "\u0275\u0275trustConstantResourceUrl", moduleName: o }), __publicField(_a2, "inputDecorator", { name: "Input", moduleName: o }), __publicField(_a2, "outputDecorator", { name: "Output", moduleName: o }), __publicField(_a2, "viewChildDecorator", { name: "ViewChild", moduleName: o }), __publicField(_a2, "viewChildrenDecorator", { name: "ViewChildren", moduleName: o }), __publicField(_a2, "contentChildDecorator", { name: "ContentChild", moduleName: o }), __publicField(_a2, "contentChildrenDecorator", { name: "ContentChildren", moduleName: o }), __publicField(_a2, "InputSignalBrandWriteType", { name: "\u0275INPUT_SIGNAL_BRAND_WRITE_TYPE", moduleName: o }), __publicField(_a2, "UnwrapDirectiveSignalInputs", { name: "\u0275UnwrapDirectiveSignalInputs", moduleName: o }), __publicField(_a2, "unwrapWritableSignal", { name: "\u0275unwrapWritableSignal", moduleName: o }), __publicField(_a2, "assertType", { name: "\u0275assertType", moduleName: o }), _a2);
var St = class {
  constructor(e) {
    __publicField(this, "full");
    __publicField(this, "major");
    __publicField(this, "minor");
    __publicField(this, "patch");
    this.full = e;
    let n = e.split(".");
    this.major = n[0], this.minor = n[1], this.patch = n.slice(2).join(".");
  }
};
var Gr = /* @__PURE__ */ new Map([[c.And, "&&"], [c.Bigger, ">"], [c.BiggerEquals, ">="], [c.BitwiseOr, "|"], [c.BitwiseAnd, "&"], [c.Divide, "/"], [c.Assign, "="], [c.Equals, "=="], [c.Identical, "==="], [c.Lower, "<"], [c.LowerEquals, "<="], [c.Minus, "-"], [c.Modulo, "%"], [c.Exponentiation, "**"], [c.Multiply, "*"], [c.NotEquals, "!="], [c.NotIdentical, "!=="], [c.NullishCoalesce, "??"], [c.Or, "||"], [c.Plus, "+"], [c.In, "in"], [c.AdditionAssignment, "+="], [c.SubtractionAssignment, "-="], [c.MultiplicationAssignment, "*="], [c.DivisionAssignment, "/="], [c.RemainderAssignment, "%="], [c.ExponentiationAssignment, "**="], [c.AndAssignment, "&&="], [c.OrAssignment, "||="], [c.NullishCoalesceAssignment, "??="]]);
var Tn;
(function(t23) {
  t23[t23.Class = 0] = "Class", t23[t23.Function = 1] = "Function";
})(Tn || (Tn = {}));
var X = class {
  constructor(e, n) {
    __publicField(this, "start");
    __publicField(this, "end");
    this.start = e, this.end = n;
  }
  toAbsolute(e) {
    return new $(e + this.start, e + this.end);
  }
};
var g = class {
  constructor(e, n) {
    __publicField(this, "span");
    __publicField(this, "sourceSpan");
    this.span = e, this.sourceSpan = n;
  }
  toString() {
    return "AST";
  }
};
var Se = class extends g {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "nameSpan");
    this.nameSpan = s;
  }
};
var b = class extends g {
  visit(e, n = null) {
  }
};
var ne = class extends g {
  visit(e, n = null) {
    return e.visitImplicitReceiver(this, n);
  }
};
var Et = class extends g {
  visit(e, n = null) {
    var _a7;
    return (_a7 = e.visitThisReceiver) == null ? void 0 : _a7.call(e, this, n);
  }
};
var yt = class extends g {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "expressions");
    this.expressions = s;
  }
  visit(e, n = null) {
    return e.visitChain(this, n);
  }
};
var Ct = class extends g {
  constructor(e, n, s, i, r) {
    super(e, n);
    __publicField(this, "condition");
    __publicField(this, "trueExp");
    __publicField(this, "falseExp");
    this.condition = s, this.trueExp = i, this.falseExp = r;
  }
  visit(e, n = null) {
    return e.visitConditional(this, n);
  }
};
var de = class extends Se {
  constructor(e, n, s, i, r) {
    super(e, n, s);
    __publicField(this, "receiver");
    __publicField(this, "name");
    this.receiver = i, this.name = r;
  }
  visit(e, n = null) {
    return e.visitPropertyRead(this, n);
  }
};
var _t = class extends Se {
  constructor(e, n, s, i, r) {
    super(e, n, s);
    __publicField(this, "receiver");
    __publicField(this, "name");
    this.receiver = i, this.name = r;
  }
  visit(e, n = null) {
    return e.visitSafePropertyRead(this, n);
  }
};
var Le = class extends g {
  constructor(e, n, s, i) {
    super(e, n);
    __publicField(this, "receiver");
    __publicField(this, "key");
    this.receiver = s, this.key = i;
  }
  visit(e, n = null) {
    return e.visitKeyedRead(this, n);
  }
};
var Tt = class extends g {
  constructor(e, n, s, i) {
    super(e, n);
    __publicField(this, "receiver");
    __publicField(this, "key");
    this.receiver = s, this.key = i;
  }
  visit(e, n = null) {
    return e.visitSafeKeyedRead(this, n);
  }
};
var me;
(function(t23) {
  t23[t23.ReferencedByName = 0] = "ReferencedByName", t23[t23.ReferencedDirectly = 1] = "ReferencedDirectly";
})(me || (me = {}));
var kt = class extends Se {
  constructor(e, n, s, i, r, a, u) {
    super(e, n, u);
    __publicField(this, "exp");
    __publicField(this, "name");
    __publicField(this, "args");
    __publicField(this, "type");
    this.exp = s, this.name = i, this.args = r, this.type = a;
  }
  visit(e, n = null) {
    return e.visitPipe(this, n);
  }
};
var I = class extends g {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "value");
    this.value = s;
  }
  visit(e, n = null) {
    return e.visitLiteralPrimitive(this, n);
  }
};
var bt = class extends g {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "expressions");
    this.expressions = s;
  }
  visit(e, n = null) {
    return e.visitLiteralArray(this, n);
  }
};
var At = class extends g {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "expression");
    this.expression = s;
  }
  visit(e, n = null) {
    return e.visitSpreadElement(this, n);
  }
};
var It = class extends g {
  constructor(e, n, s, i) {
    super(e, n);
    __publicField(this, "keys");
    __publicField(this, "values");
    this.keys = s, this.values = i;
  }
  visit(e, n = null) {
    return e.visitLiteralMap(this, n);
  }
};
var Ii = class extends g {
  constructor(e, n, s, i) {
    super(e, n);
    __publicField(this, "strings");
    __publicField(this, "expressions");
    this.strings = s, this.expressions = i;
  }
  visit(e, n = null) {
    return e.visitInterpolation(this, n);
  }
};
var E = class extends g {
  constructor(e, n, s, i, r) {
    super(e, n);
    __publicField(this, "operation");
    __publicField(this, "left");
    __publicField(this, "right");
    this.operation = s, this.left = i, this.right = r;
  }
  visit(e, n = null) {
    return e.visitBinary(this, n);
  }
  static isAssignmentOperation(e) {
    return e === "=" || e === "+=" || e === "-=" || e === "*=" || e === "/=" || e === "%=" || e === "**=" || e === "&&=" || e === "||=" || e === "??=";
  }
};
var ge = class t17 extends E {
  constructor(e, n, s, i, r, a, u) {
    super(e, n, r, a, u);
    __publicField(this, "operator");
    __publicField(this, "expr");
    __publicField(this, "left", null);
    __publicField(this, "right", null);
    __publicField(this, "operation", null);
    this.operator = s, this.expr = i;
  }
  static createMinus(e, n, s) {
    return new t17(e, n, "-", s, "-", new I(e, n, 0), s);
  }
  static createPlus(e, n, s) {
    return new t17(e, n, "+", s, "-", s, new I(e, n, 0));
  }
  visit(e, n = null) {
    return e.visitUnary !== void 0 ? e.visitUnary(this, n) : e.visitBinary(this, n);
  }
};
var Me = class extends g {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "expression");
    this.expression = s;
  }
  visit(e, n = null) {
    return e.visitPrefixNot(this, n);
  }
};
var Re = class extends g {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "expression");
    this.expression = s;
  }
  visit(e, n = null) {
    return e.visitTypeofExpression(this, n);
  }
};
var $e = class extends g {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "expression");
    this.expression = s;
  }
  visit(e, n = null) {
    return e.visitVoidExpression(this, n);
  }
};
var Nt = class extends g {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "expression");
    this.expression = s;
  }
  visit(e, n = null) {
    return e.visitNonNullAssert(this, n);
  }
};
var Pt = class extends g {
  constructor(e, n, s, i, r) {
    super(e, n);
    __publicField(this, "receiver");
    __publicField(this, "args");
    __publicField(this, "argumentSpan");
    this.receiver = s, this.args = i, this.argumentSpan = r;
  }
  visit(e, n = null) {
    return e.visitCall(this, n);
  }
};
var Lt = class extends g {
  constructor(e, n, s, i, r) {
    super(e, n);
    __publicField(this, "receiver");
    __publicField(this, "args");
    __publicField(this, "argumentSpan");
    this.receiver = s, this.args = i, this.argumentSpan = r;
  }
  visit(e, n = null) {
    return e.visitSafeCall(this, n);
  }
};
var De = class extends g {
  constructor(e, n, s, i) {
    super(e, n);
    __publicField(this, "tag");
    __publicField(this, "template");
    this.tag = s, this.template = i;
  }
  visit(e, n) {
    return e.visitTaggedTemplateLiteral(this, n);
  }
};
var Be = class extends g {
  constructor(e, n, s, i) {
    super(e, n);
    __publicField(this, "elements");
    __publicField(this, "expressions");
    this.elements = s, this.expressions = i;
  }
  visit(e, n) {
    return e.visitTemplateLiteral(this, n);
  }
};
var Oe = class extends g {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "text");
    this.text = s;
  }
  visit(e, n) {
    return e.visitTemplateLiteralElement(this, n);
  }
};
var Ee = class extends g {
  constructor(e, n, s) {
    super(e, n);
    __publicField(this, "expression");
    this.expression = s;
  }
  visit(e, n) {
    return e.visitParenthesizedExpression(this, n);
  }
};
var Mt = class extends g {
  constructor(e, n, s, i) {
    super(e, n);
    __publicField(this, "body");
    __publicField(this, "flags");
    this.body = s, this.flags = i;
  }
  visit(e, n) {
    return e.visitRegularExpressionLiteral(this, n);
  }
};
var $ = class {
  constructor(e, n) {
    __publicField(this, "start");
    __publicField(this, "end");
    this.start = e, this.end = n;
  }
};
var O = class extends g {
  constructor(e, n, s, i, r) {
    super(new X(0, n === null ? 0 : n.length), new $(i, n === null ? i : i + n.length));
    __publicField(this, "ast");
    __publicField(this, "source");
    __publicField(this, "location");
    __publicField(this, "errors");
    this.ast = e, this.source = n, this.location = s, this.errors = r;
  }
  visit(e, n = null) {
    return e.visitASTWithSource ? e.visitASTWithSource(this, n) : this.ast.visit(e, n);
  }
  toString() {
    return `${this.source} in ${this.location}`;
  }
};
var se = class {
  constructor(e, n, s) {
    __publicField(this, "sourceSpan");
    __publicField(this, "key");
    __publicField(this, "value");
    this.sourceSpan = e, this.key = n, this.value = s;
  }
};
var ye = class {
  constructor(e, n, s) {
    __publicField(this, "sourceSpan");
    __publicField(this, "key");
    __publicField(this, "value");
    this.sourceSpan = e, this.key = n, this.value = s;
  }
};
var Rt = class {
  visit(e, n) {
    e.visit(this, n);
  }
  visitUnary(e, n) {
    this.visit(e.expr, n);
  }
  visitBinary(e, n) {
    this.visit(e.left, n), this.visit(e.right, n);
  }
  visitChain(e, n) {
    this.visitAll(e.expressions, n);
  }
  visitConditional(e, n) {
    this.visit(e.condition, n), this.visit(e.trueExp, n), this.visit(e.falseExp, n);
  }
  visitPipe(e, n) {
    this.visit(e.exp, n), this.visitAll(e.args, n);
  }
  visitImplicitReceiver(e, n) {
  }
  visitThisReceiver(e, n) {
  }
  visitInterpolation(e, n) {
    this.visitAll(e.expressions, n);
  }
  visitKeyedRead(e, n) {
    this.visit(e.receiver, n), this.visit(e.key, n);
  }
  visitLiteralArray(e, n) {
    this.visitAll(e.expressions, n);
  }
  visitLiteralMap(e, n) {
    this.visitAll(e.values, n);
  }
  visitLiteralPrimitive(e, n) {
  }
  visitPrefixNot(e, n) {
    this.visit(e.expression, n);
  }
  visitTypeofExpression(e, n) {
    this.visit(e.expression, n);
  }
  visitVoidExpression(e, n) {
    this.visit(e.expression, n);
  }
  visitNonNullAssert(e, n) {
    this.visit(e.expression, n);
  }
  visitPropertyRead(e, n) {
    this.visit(e.receiver, n);
  }
  visitSafePropertyRead(e, n) {
    this.visit(e.receiver, n);
  }
  visitSafeKeyedRead(e, n) {
    this.visit(e.receiver, n), this.visit(e.key, n);
  }
  visitCall(e, n) {
    this.visit(e.receiver, n), this.visitAll(e.args, n);
  }
  visitSafeCall(e, n) {
    this.visit(e.receiver, n), this.visitAll(e.args, n);
  }
  visitTemplateLiteral(e, n) {
    for (let s = 0; s < e.elements.length; s++) {
      this.visit(e.elements[s], n);
      let i = s < e.expressions.length ? e.expressions[s] : null;
      i !== null && this.visit(i, n);
    }
  }
  visitTemplateLiteralElement(e, n) {
  }
  visitTaggedTemplateLiteral(e, n) {
    this.visit(e.tag, n), this.visit(e.template, n);
  }
  visitParenthesizedExpression(e, n) {
    this.visit(e.expression, n);
  }
  visitRegularExpressionLiteral(e, n) {
  }
  visitSpreadElement(e, n) {
    this.visit(e.expression, n);
  }
  visitAll(e, n) {
    for (let s of e) this.visit(s, n);
  }
};
var kn;
(function(t23) {
  t23[t23.DEFAULT = 0] = "DEFAULT", t23[t23.LITERAL_ATTR = 1] = "LITERAL_ATTR", t23[t23.LEGACY_ANIMATION = 2] = "LEGACY_ANIMATION", t23[t23.TWO_WAY = 3] = "TWO_WAY", t23[t23.ANIMATION = 4] = "ANIMATION";
})(kn || (kn = {}));
var bn;
(function(t23) {
  t23[t23.Regular = 0] = "Regular", t23[t23.LegacyAnimation = 1] = "LegacyAnimation", t23[t23.TwoWay = 2] = "TwoWay", t23[t23.Animation = 3] = "Animation";
})(bn || (bn = {}));
var L;
(function(t23) {
  t23[t23.Property = 0] = "Property", t23[t23.Attribute = 1] = "Attribute", t23[t23.Class = 2] = "Class", t23[t23.Style = 3] = "Style", t23[t23.LegacyAnimation = 4] = "LegacyAnimation", t23[t23.TwoWay = 5] = "TwoWay", t23[t23.Animation = 6] = "Animation";
})(L || (L = {}));
var An;
(function(t23) {
  t23[t23.RAW_TEXT = 0] = "RAW_TEXT", t23[t23.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", t23[t23.PARSABLE_DATA = 2] = "PARSABLE_DATA";
})(An || (An = {}));
var pe = 0;
var os = 9;
var Ie = 10;
var Ni = 11;
var Pi = 12;
var Li = 13;
var as = 32;
var Mi = 33;
var ls = 34;
var Ri = 35;
var Wt = 36;
var $i = 37;
var In = 38;
var cs = 39;
var ve = 40;
var q = 41;
var Nn = 42;
var us = 43;
var Q = 44;
var ps = 45;
var H = 46;
var Fe = 47;
var j = 58;
var fe = 59;
var Di = 60;
var k = 61;
var Bi = 62;
var Pn = 63;
var Oi = 48;
var Fi = 57;
var qt = 65;
var Vi = 69;
var jt = 90;
var te = 91;
var it = 92;
var G = 93;
var Ui = 94;
var Xe = 95;
var hs = 97;
var Hi = 101;
var Wi = 102;
var qi = 110;
var ji = 114;
var zi = 116;
var Gi = 117;
var Xi = 118;
var fs = 122;
var Ve = 123;
var Ln = 124;
var K = 125;
var ds = 160;
var $t = 96;
function Ji(t23) {
  return t23 >= os && t23 <= as || t23 == ds;
}
function W(t23) {
  return Oi <= t23 && t23 <= Fi;
}
function Dt(t23) {
  return t23 >= hs && t23 <= fs || t23 >= qt && t23 <= jt;
}
function Mn(t23) {
  return t23 === cs || t23 === ls || t23 === $t;
}
var Ue = class t18 {
  constructor(e, n, s, i) {
    __publicField(this, "file");
    __publicField(this, "offset");
    __publicField(this, "line");
    __publicField(this, "col");
    this.file = e, this.offset = n, this.line = s, this.col = i;
  }
  toString() {
    return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
  }
  moveBy(e) {
    let n = this.file.content, s = n.length, i = this.offset, r = this.line, a = this.col;
    for (; i > 0 && e < 0; ) if (i--, e++, n.charCodeAt(i) == Ie) {
      r--;
      let p = n.substring(0, i - 1).lastIndexOf(String.fromCharCode(Ie));
      a = p > 0 ? i - p : i;
    } else a--;
    for (; i < s && e > 0; ) {
      let u = n.charCodeAt(i);
      i++, e--, u == Ie ? (r++, a = 0) : a++;
    }
    return new t18(this.file, i, r, a);
  }
  getContext(e, n) {
    let s = this.file.content, i = this.offset;
    if (i != null) {
      i > s.length - 1 && (i = s.length - 1);
      let r = i, a = 0, u = 0;
      for (; a < e && i > 0 && (i--, a++, !(s[i] == `
` && ++u == n)); ) ;
      for (a = 0, u = 0; a < e && r < s.length - 1 && (r++, a++, !(s[r] == `
` && ++u == n)); ) ;
      return { before: s.substring(i, this.offset), after: s.substring(this.offset, r + 1) };
    }
    return null;
  }
};
var He = class {
  constructor(e, n) {
    __publicField(this, "content");
    __publicField(this, "url");
    this.content = e, this.url = n;
  }
};
var We = class {
  constructor(e, n, s = e, i = null) {
    __publicField(this, "start");
    __publicField(this, "end");
    __publicField(this, "fullStart");
    __publicField(this, "details");
    this.start = e, this.end = n, this.fullStart = s, this.details = i;
  }
  toString() {
    return this.start.file.content.substring(this.start.offset, this.end.offset);
  }
};
var qe;
(function(t23) {
  t23[t23.WARNING = 0] = "WARNING", t23[t23.ERROR = 1] = "ERROR";
})(qe || (qe = {}));
var Ce = class extends Error {
  constructor(e, n, s = qe.ERROR, i) {
    super(n);
    __publicField(this, "span");
    __publicField(this, "msg");
    __publicField(this, "level");
    __publicField(this, "relatedError");
    this.span = e, this.msg = n, this.level = s, this.relatedError = i, Object.setPrototypeOf(this, new.target.prototype);
  }
  contextualMessage() {
    let e = this.span.start.getContext(100, 3);
    return e ? `${this.msg} ("${e.before}[${qe[this.level]} ->]${e.after}")` : this.msg;
  }
  toString() {
    let e = this.span.details ? `, ${this.span.details}` : "";
    return `${this.contextualMessage()}: ${this.span.start}${e}`;
  }
};
var Rn;
(function(t23) {
  t23[t23.Inline = 0] = "Inline", t23[t23.SideEffect = 1] = "SideEffect", t23[t23.Omit = 2] = "Omit";
})(Rn || (Rn = {}));
var $n;
(function(t23) {
  t23[t23.Global = 0] = "Global", t23[t23.Local = 1] = "Local";
})($n || ($n = {}));
var Dn;
(function(t23) {
  t23[t23.Directive = 0] = "Directive", t23[t23.Pipe = 1] = "Pipe", t23[t23.NgModule = 2] = "NgModule";
})(Dn || (Dn = {}));
var Yi = "(:(where|is)\\()?";
var ms = "-shadowcsshost";
var Qi = "-shadowcsscontext";
var Bt = "[^)(]*";
var Ki = `(?:\\(${Bt}\\)|${Bt})+?`;
var Zi = `(?:\\(${Ki}\\)|${Bt})+?`;
var zt = `(?:\\((${Zi})\\))`;
var Yr = new RegExp("(:nth-[-\\w]+)" + zt, "g");
var Qr = new RegExp(ms + zt + "?([^,{]*)", "gim");
var er = Qi + zt + "?([^{]*)";
var Kr = new RegExp(`${Yi}(${er})`, "gim");
var tr = ms + "-no-combinator";
var Zr = new RegExp(`${tr}(?![^(]*\\))`, "g");
var gs = "%COMMENT%";
var eo = new RegExp(gs, "g");
var to = new RegExp(`(\\s*(?:${gs}\\s*)*)([^;\\{\\}]+?)(\\s*)((?:{%BLOCK%}?\\s*;?)|(?:\\s*;))`, "g");
var nr = "%COMMA_IN_PLACEHOLDER%";
var sr = "%SEMI_IN_PLACEHOLDER%";
var ir = "%COLON_IN_PLACEHOLDER%";
var no = new RegExp(nr, "g");
var so = new RegExp(sr, "g");
var io = new RegExp(ir, "g");
var f;
(function(t23) {
  t23[t23.ListEnd = 0] = "ListEnd", t23[t23.Statement = 1] = "Statement", t23[t23.Variable = 2] = "Variable", t23[t23.ElementStart = 3] = "ElementStart", t23[t23.Element = 4] = "Element", t23[t23.Template = 5] = "Template", t23[t23.ElementEnd = 6] = "ElementEnd", t23[t23.ContainerStart = 7] = "ContainerStart", t23[t23.Container = 8] = "Container", t23[t23.ContainerEnd = 9] = "ContainerEnd", t23[t23.DisableBindings = 10] = "DisableBindings", t23[t23.ConditionalCreate = 11] = "ConditionalCreate", t23[t23.ConditionalBranchCreate = 12] = "ConditionalBranchCreate", t23[t23.Conditional = 13] = "Conditional", t23[t23.EnableBindings = 14] = "EnableBindings", t23[t23.Text = 15] = "Text", t23[t23.Listener = 16] = "Listener", t23[t23.InterpolateText = 17] = "InterpolateText", t23[t23.Binding = 18] = "Binding", t23[t23.Property = 19] = "Property", t23[t23.StyleProp = 20] = "StyleProp", t23[t23.ClassProp = 21] = "ClassProp", t23[t23.StyleMap = 22] = "StyleMap", t23[t23.ClassMap = 23] = "ClassMap", t23[t23.Advance = 24] = "Advance", t23[t23.Pipe = 25] = "Pipe", t23[t23.Attribute = 26] = "Attribute", t23[t23.ExtractedAttribute = 27] = "ExtractedAttribute", t23[t23.Defer = 28] = "Defer", t23[t23.DeferOn = 29] = "DeferOn", t23[t23.DeferWhen = 30] = "DeferWhen", t23[t23.I18nMessage = 31] = "I18nMessage", t23[t23.DomProperty = 32] = "DomProperty", t23[t23.Namespace = 33] = "Namespace", t23[t23.ProjectionDef = 34] = "ProjectionDef", t23[t23.Projection = 35] = "Projection", t23[t23.RepeaterCreate = 36] = "RepeaterCreate", t23[t23.Repeater = 37] = "Repeater", t23[t23.TwoWayProperty = 38] = "TwoWayProperty", t23[t23.TwoWayListener = 39] = "TwoWayListener", t23[t23.DeclareLet = 40] = "DeclareLet", t23[t23.StoreLet = 41] = "StoreLet", t23[t23.I18nStart = 42] = "I18nStart", t23[t23.I18n = 43] = "I18n", t23[t23.I18nEnd = 44] = "I18nEnd", t23[t23.I18nExpression = 45] = "I18nExpression", t23[t23.I18nApply = 46] = "I18nApply", t23[t23.IcuStart = 47] = "IcuStart", t23[t23.IcuEnd = 48] = "IcuEnd", t23[t23.IcuPlaceholder = 49] = "IcuPlaceholder", t23[t23.I18nContext = 50] = "I18nContext", t23[t23.I18nAttributes = 51] = "I18nAttributes", t23[t23.SourceLocation = 52] = "SourceLocation", t23[t23.Animation = 53] = "Animation", t23[t23.AnimationString = 54] = "AnimationString", t23[t23.AnimationBinding = 55] = "AnimationBinding", t23[t23.AnimationListener = 56] = "AnimationListener", t23[t23.Control = 57] = "Control", t23[t23.ControlCreate = 58] = "ControlCreate";
})(f || (f = {}));
var ie;
(function(t23) {
  t23[t23.LexicalRead = 0] = "LexicalRead", t23[t23.Context = 1] = "Context", t23[t23.TrackContext = 2] = "TrackContext", t23[t23.ReadVariable = 3] = "ReadVariable", t23[t23.NextContext = 4] = "NextContext", t23[t23.Reference = 5] = "Reference", t23[t23.StoreLet = 6] = "StoreLet", t23[t23.ContextLetReference = 7] = "ContextLetReference", t23[t23.GetCurrentView = 8] = "GetCurrentView", t23[t23.RestoreView = 9] = "RestoreView", t23[t23.ResetView = 10] = "ResetView", t23[t23.PureFunctionExpr = 11] = "PureFunctionExpr", t23[t23.PureFunctionParameterExpr = 12] = "PureFunctionParameterExpr", t23[t23.PipeBinding = 13] = "PipeBinding", t23[t23.PipeBindingVariadic = 14] = "PipeBindingVariadic", t23[t23.SafePropertyRead = 15] = "SafePropertyRead", t23[t23.SafeKeyedRead = 16] = "SafeKeyedRead", t23[t23.SafeInvokeFunction = 17] = "SafeInvokeFunction", t23[t23.SafeTernaryExpr = 18] = "SafeTernaryExpr", t23[t23.EmptyExpr = 19] = "EmptyExpr", t23[t23.AssignTemporaryExpr = 20] = "AssignTemporaryExpr", t23[t23.ReadTemporaryExpr = 21] = "ReadTemporaryExpr", t23[t23.SlotLiteralExpr = 22] = "SlotLiteralExpr", t23[t23.ConditionalCase = 23] = "ConditionalCase", t23[t23.ConstCollected = 24] = "ConstCollected", t23[t23.TwoWayBindingSet = 25] = "TwoWayBindingSet";
})(ie || (ie = {}));
var Bn;
(function(t23) {
  t23[t23.None = 0] = "None", t23[t23.AlwaysInline = 1] = "AlwaysInline";
})(Bn || (Bn = {}));
var On;
(function(t23) {
  t23[t23.Context = 0] = "Context", t23[t23.Identifier = 1] = "Identifier", t23[t23.SavedView = 2] = "SavedView", t23[t23.Alias = 3] = "Alias";
})(On || (On = {}));
var Fn;
(function(t23) {
  t23[t23.Normal = 0] = "Normal", t23[t23.TemplateDefinitionBuilder = 1] = "TemplateDefinitionBuilder";
})(Fn || (Fn = {}));
var M;
(function(t23) {
  t23[t23.Attribute = 0] = "Attribute", t23[t23.ClassName = 1] = "ClassName", t23[t23.StyleProperty = 2] = "StyleProperty", t23[t23.Property = 3] = "Property", t23[t23.Template = 4] = "Template", t23[t23.I18n = 5] = "I18n", t23[t23.LegacyAnimation = 6] = "LegacyAnimation", t23[t23.TwoWayProperty = 7] = "TwoWayProperty", t23[t23.Animation = 8] = "Animation";
})(M || (M = {}));
var Vn;
(function(t23) {
  t23[t23.Creation = 0] = "Creation", t23[t23.Postproccessing = 1] = "Postproccessing";
})(Vn || (Vn = {}));
var Un;
(function(t23) {
  t23[t23.I18nText = 0] = "I18nText", t23[t23.I18nAttribute = 1] = "I18nAttribute";
})(Un || (Un = {}));
var Hn;
(function(t23) {
  t23[t23.None = 0] = "None", t23[t23.ElementTag = 1] = "ElementTag", t23[t23.TemplateTag = 2] = "TemplateTag", t23[t23.OpenTag = 4] = "OpenTag", t23[t23.CloseTag = 8] = "CloseTag", t23[t23.ExpressionIndex = 16] = "ExpressionIndex";
})(Hn || (Hn = {}));
var Wn;
(function(t23) {
  t23[t23.HTML = 0] = "HTML", t23[t23.SVG = 1] = "SVG", t23[t23.Math = 2] = "Math";
})(Wn || (Wn = {}));
var R;
(function(t23) {
  t23[t23.Idle = 0] = "Idle", t23[t23.Immediate = 1] = "Immediate", t23[t23.Timer = 2] = "Timer", t23[t23.Hover = 3] = "Hover", t23[t23.Interaction = 4] = "Interaction", t23[t23.Viewport = 5] = "Viewport", t23[t23.Never = 6] = "Never";
})(R || (R = {}));
var qn;
(function(t23) {
  t23[t23.RootI18n = 0] = "RootI18n", t23[t23.Icu = 1] = "Icu", t23[t23.Attr = 2] = "Attr";
})(qn || (qn = {}));
var jn;
(function(t23) {
  t23[t23.NgTemplate = 0] = "NgTemplate", t23[t23.Structural = 1] = "Structural", t23[t23.Block = 2] = "Block";
})(jn || (jn = {}));
var rr = /* @__PURE__ */ Symbol("ConsumesSlot");
var vs = /* @__PURE__ */ Symbol("DependsOnSlotContext");
var Te = /* @__PURE__ */ Symbol("ConsumesVars");
var Gt = /* @__PURE__ */ Symbol("UsesVarOffset");
var ro = { [rr]: true, numSlotsUsed: 1 };
var oo = { [vs]: true };
var ao = { [Te]: true };
var je = class {
  constructor(e, n, s) {
    __publicField(this, "strings");
    __publicField(this, "expressions");
    __publicField(this, "i18nPlaceholders");
    if (this.strings = e, this.expressions = n, this.i18nPlaceholders = s, s.length !== 0 && s.length !== n.length) throw new Error(`Expected ${n.length} placeholders to match interpolation expression count, but got ${s.length}`);
  }
};
var re = class extends S {
  constructor(e = null) {
    super(null, e);
  }
};
var _a3, _b, _c;
var zn = class t19 extends (_c = re, _b = Te, _a3 = vs, _c) {
  constructor(e, n, s) {
    super();
    __publicField(this, "target");
    __publicField(this, "value");
    __publicField(this, "sourceSpan");
    __publicField(this, "kind", ie.StoreLet);
    __publicField(this, _b, true);
    __publicField(this, _a3, true);
    this.target = e, this.value = n, this.sourceSpan = s;
  }
  visitExpression() {
  }
  isEquivalent(e) {
    return e instanceof t19 && e.target === this.target && e.value.isEquivalent(this.value);
  }
  isConstant() {
    return false;
  }
  transformInternalExpressions(e, n) {
    this.value = (this.value, void 0);
  }
  clone() {
    return new t19(this.target, this.value, this.sourceSpan);
  }
};
var _a4, _b2, _c2;
var Gn = class t20 extends (_c2 = re, _b2 = Te, _a4 = Gt, _c2) {
  constructor(e, n) {
    super();
    __publicField(this, "kind", ie.PureFunctionExpr);
    __publicField(this, _b2, true);
    __publicField(this, _a4, true);
    __publicField(this, "varOffset", null);
    __publicField(this, "body");
    __publicField(this, "args");
    __publicField(this, "fn", null);
    this.body = e, this.args = n;
  }
  visitExpression(e, n) {
    var _a7;
    (_a7 = this.body) == null ? void 0 : _a7.visitExpression(e, n);
    for (let s of this.args) s.visitExpression(e, n);
  }
  isEquivalent(e) {
    return !(e instanceof t20) || e.args.length !== this.args.length ? false : e.body !== null && this.body !== null && e.body.isEquivalent(this.body) && e.args.every((n, s) => n.isEquivalent(this.args[s]));
  }
  isConstant() {
    return false;
  }
  transformInternalExpressions(e, n) {
    this.body !== null ? this.body = (this.body, n | Ot.InChildOperation, void 0) : this.fn !== null && (this.fn = (this.fn, void 0));
    for (let s = 0; s < this.args.length; s++) this.args[s] = (this.args[s], void 0);
  }
  clone() {
    var _a7, _b5, _c5, _d;
    let e = new t20((_b5 = (_a7 = this.body) == null ? void 0 : _a7.clone()) != null ? _b5 : null, this.args.map((n) => n.clone()));
    return e.fn = (_d = (_c5 = this.fn) == null ? void 0 : _c5.clone()) != null ? _d : null, e.varOffset = this.varOffset, e;
  }
};
var _a5, _b3, _c3;
var Xn = class t21 extends (_c3 = re, _b3 = Te, _a5 = Gt, _c3) {
  constructor(e, n, s, i) {
    super();
    __publicField(this, "target");
    __publicField(this, "targetSlot");
    __publicField(this, "name");
    __publicField(this, "args");
    __publicField(this, "kind", ie.PipeBinding);
    __publicField(this, _b3, true);
    __publicField(this, _a5, true);
    __publicField(this, "varOffset", null);
    this.target = e, this.targetSlot = n, this.name = s, this.args = i;
  }
  visitExpression(e, n) {
    for (let s of this.args) s.visitExpression(e, n);
  }
  isEquivalent() {
    return false;
  }
  isConstant() {
    return false;
  }
  transformInternalExpressions(e, n) {
    for (let s = 0; s < this.args.length; s++) this.args[s] = (this.args[s], void 0);
  }
  clone() {
    let e = new t21(this.target, this.targetSlot, this.name, this.args.map((n) => n.clone()));
    return e.varOffset = this.varOffset, e;
  }
};
var _a6, _b4, _c4;
var Jn = class t22 extends (_c4 = re, _b4 = Te, _a6 = Gt, _c4) {
  constructor(e, n, s, i, r) {
    super();
    __publicField(this, "target");
    __publicField(this, "targetSlot");
    __publicField(this, "name");
    __publicField(this, "args");
    __publicField(this, "numArgs");
    __publicField(this, "kind", ie.PipeBindingVariadic);
    __publicField(this, _b4, true);
    __publicField(this, _a6, true);
    __publicField(this, "varOffset", null);
    this.target = e, this.targetSlot = n, this.name = s, this.args = i, this.numArgs = r;
  }
  visitExpression(e, n) {
    this.args.visitExpression(e, n);
  }
  isEquivalent() {
    return false;
  }
  isConstant() {
    return false;
  }
  transformInternalExpressions(e, n) {
    this.args = (this.args, void 0);
  }
  clone() {
    let e = new t22(this.target, this.targetSlot, this.name, this.args.clone(), this.numArgs);
    return e.varOffset = this.varOffset, e;
  }
};
var Ot;
(function(t23) {
  t23[t23.None = 0] = "None", t23[t23.InChildOperation = 1] = "InChildOperation";
})(Ot || (Ot = {}));
var lo = /* @__PURE__ */ new Set([f.Element, f.ElementStart, f.Container, f.ContainerStart, f.Template, f.RepeaterCreate, f.ConditionalCreate, f.ConditionalBranchCreate]);
var Yn;
(function(t23) {
  t23[t23.Tmpl = 0] = "Tmpl", t23[t23.Host = 1] = "Host", t23[t23.Both = 2] = "Both";
})(Yn || (Yn = {}));
var Qn;
(function(t23) {
  t23[t23.Full = 0] = "Full", t23[t23.DomOnly = 1] = "DomOnly";
})(Qn || (Qn = {}));
var co = /* @__PURE__ */ new Map([[l.ariaProperty, l.ariaProperty], [l.attribute, l.attribute], [l.classProp, l.classProp], [l.element, l.element], [l.elementContainer, l.elementContainer], [l.elementContainerEnd, l.elementContainerEnd], [l.elementContainerStart, l.elementContainerStart], [l.elementEnd, l.elementEnd], [l.elementStart, l.elementStart], [l.domProperty, l.domProperty], [l.i18nExp, l.i18nExp], [l.listener, l.listener], [l.listener, l.listener], [l.property, l.property], [l.styleProp, l.styleProp], [l.syntheticHostListener, l.syntheticHostListener], [l.syntheticHostProperty, l.syntheticHostProperty], [l.templateCreate, l.templateCreate], [l.twoWayProperty, l.twoWayProperty], [l.twoWayListener, l.twoWayListener], [l.declareLet, l.declareLet], [l.conditionalCreate, l.conditionalBranchCreate], [l.conditionalBranchCreate, l.conditionalBranchCreate], [l.domElement, l.domElement], [l.domElementStart, l.domElementStart], [l.domElementEnd, l.domElementEnd], [l.domElementContainer, l.domElementContainer], [l.domElementContainerStart, l.domElementContainerStart], [l.domElementContainerEnd, l.domElementContainerEnd], [l.domListener, l.domListener], [l.domTemplate, l.domTemplate], [l.animationEnter, l.animationEnter], [l.animationLeave, l.animationLeave], [l.animationEnterListener, l.animationEnterListener], [l.animationLeaveListener, l.animationLeaveListener]]);
var uo = /* @__PURE__ */ new Map([["&&", c.And], [">", c.Bigger], [">=", c.BiggerEquals], ["|", c.BitwiseOr], ["&", c.BitwiseAnd], ["/", c.Divide], ["=", c.Assign], ["==", c.Equals], ["===", c.Identical], ["<", c.Lower], ["<=", c.LowerEquals], ["-", c.Minus], ["%", c.Modulo], ["**", c.Exponentiation], ["*", c.Multiply], ["!=", c.NotEquals], ["!==", c.NotIdentical], ["??", c.NullishCoalesce], ["||", c.Or], ["+", c.Plus], ["in", c.In], ["+=", c.AdditionAssignment], ["-=", c.SubtractionAssignment], ["*=", c.MultiplicationAssignment], ["/=", c.DivisionAssignment], ["%=", c.RemainderAssignment], ["**=", c.ExponentiationAssignment], ["&&=", c.AndAssignment], ["||=", c.OrAssignment], ["??=", c.NullishCoalesceAssignment]]);
var po = Object.freeze([]);
var ho = /* @__PURE__ */ new Map([[f.ElementEnd, [f.ElementStart, f.Element]], [f.ContainerEnd, [f.ContainerStart, f.Container]], [f.I18nEnd, [f.I18nStart, f.I18n]]]);
var fo = /* @__PURE__ */ new Set([f.Pipe]);
var or = {};
var ar = "\uE500";
or.ngsp = ar;
var Kn;
(function(t23) {
  t23.HEX = "hexadecimal", t23.DEC = "decimal";
})(Kn || (Kn = {}));
var xs = ` \f
\r	\v\u1680\u180E\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF`;
var mo = new RegExp(`[^${xs}]`);
var go = new RegExp(`[${xs}]{2,}`, "g");
var h;
(function(t23) {
  t23[t23.Character = 0] = "Character", t23[t23.Identifier = 1] = "Identifier", t23[t23.PrivateIdentifier = 2] = "PrivateIdentifier", t23[t23.Keyword = 3] = "Keyword", t23[t23.String = 4] = "String", t23[t23.Operator = 5] = "Operator", t23[t23.Number = 6] = "Number", t23[t23.RegExpBody = 7] = "RegExpBody", t23[t23.RegExpFlags = 8] = "RegExpFlags", t23[t23.Error = 9] = "Error";
})(h || (h = {}));
var F;
(function(t23) {
  t23[t23.Plain = 0] = "Plain", t23[t23.TemplateLiteralPart = 1] = "TemplateLiteralPart", t23[t23.TemplateLiteralEnd = 2] = "TemplateLiteralEnd";
})(F || (F = {}));
var lr = ["var", "let", "as", "null", "undefined", "true", "false", "if", "else", "this", "typeof", "void", "in"];
var _e = class {
  tokenize(e) {
    return new Ft(e).scan();
  }
};
var A = class {
  constructor(e, n, s, i, r) {
    __publicField(this, "index");
    __publicField(this, "end");
    __publicField(this, "type");
    __publicField(this, "numValue");
    __publicField(this, "strValue");
    this.index = e, this.end = n, this.type = s, this.numValue = i, this.strValue = r;
  }
  isCharacter(e) {
    return this.type === h.Character && this.numValue === e;
  }
  isNumber() {
    return this.type === h.Number;
  }
  isString() {
    return this.type === h.String;
  }
  isOperator(e) {
    return this.type === h.Operator && this.strValue === e;
  }
  isIdentifier() {
    return this.type === h.Identifier;
  }
  isPrivateIdentifier() {
    return this.type === h.PrivateIdentifier;
  }
  isKeyword() {
    return this.type === h.Keyword;
  }
  isKeywordLet() {
    return this.type === h.Keyword && this.strValue === "let";
  }
  isKeywordAs() {
    return this.type === h.Keyword && this.strValue === "as";
  }
  isKeywordNull() {
    return this.type === h.Keyword && this.strValue === "null";
  }
  isKeywordUndefined() {
    return this.type === h.Keyword && this.strValue === "undefined";
  }
  isKeywordTrue() {
    return this.type === h.Keyword && this.strValue === "true";
  }
  isKeywordFalse() {
    return this.type === h.Keyword && this.strValue === "false";
  }
  isKeywordThis() {
    return this.type === h.Keyword && this.strValue === "this";
  }
  isKeywordTypeof() {
    return this.type === h.Keyword && this.strValue === "typeof";
  }
  isKeywordVoid() {
    return this.type === h.Keyword && this.strValue === "void";
  }
  isKeywordIn() {
    return this.type === h.Keyword && this.strValue === "in";
  }
  isError() {
    return this.type === h.Error;
  }
  isRegExpBody() {
    return this.type === h.RegExpBody;
  }
  isRegExpFlags() {
    return this.type === h.RegExpFlags;
  }
  toNumber() {
    return this.type === h.Number ? this.numValue : -1;
  }
  isTemplateLiteralPart() {
    return this.isString() && this.kind === F.TemplateLiteralPart;
  }
  isTemplateLiteralEnd() {
    return this.isString() && this.kind === F.TemplateLiteralEnd;
  }
  isTemplateLiteralInterpolationStart() {
    return this.isOperator("${");
  }
  toString() {
    switch (this.type) {
      case h.Character:
      case h.Identifier:
      case h.Keyword:
      case h.Operator:
      case h.PrivateIdentifier:
      case h.String:
      case h.Error:
      case h.RegExpBody:
      case h.RegExpFlags:
        return this.strValue;
      case h.Number:
        return this.numValue.toString();
      default:
        return null;
    }
  }
};
var xe = class extends A {
  constructor(e, n, s, i) {
    super(e, n, h.String, 0, s);
    __publicField(this, "kind");
    this.kind = i;
  }
};
function he(t23, e, n) {
  return new A(t23, e, h.Character, n, String.fromCharCode(n));
}
function cr(t23, e, n) {
  return new A(t23, e, h.Identifier, 0, n);
}
function ur(t23, e, n) {
  return new A(t23, e, h.PrivateIdentifier, 0, n);
}
function pr(t23, e, n) {
  return new A(t23, e, h.Keyword, 0, n);
}
function Y(t23, e, n) {
  return new A(t23, e, h.Operator, 0, n);
}
function hr(t23, e, n) {
  return new A(t23, e, h.Number, n, "");
}
function fr(t23, e, n) {
  return new A(t23, e, h.Error, 0, n);
}
function dr(t23, e, n) {
  return new A(t23, e, h.RegExpBody, 0, n);
}
function mr(t23, e, n) {
  return new A(t23, e, h.RegExpFlags, 0, n);
}
var Ae = new A(-1, -1, h.Character, 0, "");
var Ft = class {
  constructor(e) {
    __publicField(this, "input");
    __publicField(this, "tokens", []);
    __publicField(this, "length");
    __publicField(this, "peek", 0);
    __publicField(this, "index", -1);
    __publicField(this, "braceStack", []);
    this.input = e, this.length = e.length, this.advance();
  }
  scan() {
    let e = this.scanToken();
    for (; e !== null; ) this.tokens.push(e), e = this.scanToken();
    return this.tokens;
  }
  advance() {
    this.peek = ++this.index >= this.length ? pe : this.input.charCodeAt(this.index);
  }
  scanToken() {
    let e = this.input, n = this.length, s = this.peek, i = this.index;
    for (; s <= as; ) if (++i >= n) {
      s = pe;
      break;
    } else s = e.charCodeAt(i);
    if (this.peek = s, this.index = i, i >= n) return null;
    if (Zn(s)) return this.scanIdentifier();
    if (W(s)) return this.scanNumber(i);
    let r = i;
    switch (s) {
      case H:
        return this.advance(), W(this.peek) ? this.scanNumber(r) : this.peek !== H ? he(r, this.index, H) : (this.advance(), this.peek === H ? (this.advance(), Y(r, this.index, "...")) : this.error(`Unexpected character [${String.fromCharCode(s)}]`, 0));
      case ve:
      case q:
      case te:
      case G:
      case Q:
      case j:
      case fe:
        return this.scanCharacter(r, s);
      case Ve:
        return this.scanOpenBrace(r, s);
      case K:
        return this.scanCloseBrace(r, s);
      case cs:
      case ls:
        return this.scanString();
      case $t:
        return this.advance(), this.scanTemplateLiteralPart(r);
      case Ri:
        return this.scanPrivateIdentifier();
      case us:
        return this.scanComplexOperator(r, "+", k, "=");
      case ps:
        return this.scanComplexOperator(r, "-", k, "=");
      case Fe:
        return this.isStartOfRegex() ? this.scanRegex(i) : this.scanComplexOperator(r, "/", k, "=");
      case $i:
        return this.scanComplexOperator(r, "%", k, "=");
      case Ui:
        return this.scanOperator(r, "^");
      case Nn:
        return this.scanStar(r);
      case Pn:
        return this.scanQuestion(r);
      case Di:
      case Bi:
        return this.scanComplexOperator(r, String.fromCharCode(s), k, "=");
      case Mi:
      case k:
        return this.scanComplexOperator(r, String.fromCharCode(s), k, "=", k, "=");
      case In:
        return this.scanComplexOperator(r, "&", In, "&", k, "=");
      case Ln:
        return this.scanComplexOperator(r, "|", Ln, "|", k, "=");
      case ds:
        for (; Ji(this.peek); ) this.advance();
        return this.scanToken();
    }
    return this.advance(), this.error(`Unexpected character [${String.fromCharCode(s)}]`, 0);
  }
  scanCharacter(e, n) {
    return this.advance(), he(e, this.index, n);
  }
  scanOperator(e, n) {
    return this.advance(), Y(e, this.index, n);
  }
  scanOpenBrace(e, n) {
    return this.braceStack.push("expression"), this.advance(), he(e, this.index, n);
  }
  scanCloseBrace(e, n) {
    return this.advance(), this.braceStack.pop() === "interpolation" ? (this.tokens.push(he(e, this.index, K)), this.scanTemplateLiteralPart(this.index)) : he(e, this.index, n);
  }
  scanComplexOperator(e, n, s, i, r, a) {
    this.advance();
    let u = n;
    return this.peek == s && (this.advance(), u += i), r != null && this.peek == r && (this.advance(), u += a), Y(e, this.index, u);
  }
  scanIdentifier() {
    let e = this.index;
    for (this.advance(); es(this.peek); ) this.advance();
    let n = this.input.substring(e, this.index);
    return lr.indexOf(n) > -1 ? pr(e, this.index, n) : cr(e, this.index, n);
  }
  scanPrivateIdentifier() {
    let e = this.index;
    if (this.advance(), !Zn(this.peek)) return this.error("Invalid character [#]", -1);
    for (; es(this.peek); ) this.advance();
    let n = this.input.substring(e, this.index);
    return ur(e, this.index, n);
  }
  scanNumber(e) {
    let n = this.index === e, s = false;
    for (this.advance(); ; ) {
      if (!W(this.peek)) if (this.peek === Xe) {
        if (!W(this.input.charCodeAt(this.index - 1)) || !W(this.input.charCodeAt(this.index + 1))) return this.error("Invalid numeric separator", 0);
        s = true;
      } else if (this.peek === H) n = false;
      else if (gr(this.peek)) {
        if (this.advance(), vr(this.peek) && this.advance(), !W(this.peek)) return this.error("Invalid exponent", -1);
        n = false;
      } else break;
      this.advance();
    }
    let i = this.input.substring(e, this.index);
    s && (i = i.replace(/_/g, ""));
    let r = n ? wr(i) : parseFloat(i);
    return hr(e, this.index, r);
  }
  scanString() {
    let e = this.index, n = this.peek;
    this.advance();
    let s = "", i = this.index, r = this.input;
    for (; this.peek != n; ) if (this.peek == it) {
      let u = this.scanStringBackslash(s, i);
      if (typeof u != "string") return u;
      s = u, i = this.index;
    } else {
      if (this.peek == pe) return this.error("Unterminated quote", 0);
      this.advance();
    }
    let a = r.substring(i, this.index);
    return this.advance(), new xe(e, this.index, s + a, F.Plain);
  }
  scanQuestion(e) {
    this.advance();
    let n = "?";
    return this.peek === Pn ? (n += "?", this.advance(), this.peek === k && (n += "=", this.advance())) : this.peek === H && (n += ".", this.advance()), Y(e, this.index, n);
  }
  scanTemplateLiteralPart(e) {
    let n = "", s = this.index;
    for (; this.peek !== $t; ) if (this.peek === it) {
      let r = this.scanStringBackslash(n, s);
      if (typeof r != "string") return r;
      n = r, s = this.index;
    } else if (this.peek === Wt) {
      let r = this.index;
      if (this.advance(), this.peek === Ve) return this.braceStack.push("interpolation"), this.tokens.push(new xe(e, r, n + this.input.substring(s, r), F.TemplateLiteralPart)), this.advance(), Y(r, this.index, this.input.substring(r, this.index));
    } else {
      if (this.peek === pe) return this.error("Unterminated template literal", 0);
      this.advance();
    }
    let i = this.input.substring(s, this.index);
    return this.advance(), new xe(e, this.index, n + i, F.TemplateLiteralEnd);
  }
  error(e, n) {
    let s = this.index + n;
    return fr(s, this.index, `Lexer Error: ${e} at column ${s} in expression [${this.input}]`);
  }
  scanStringBackslash(e, n) {
    e += this.input.substring(n, this.index);
    let s;
    if (this.advance(), this.peek === Gi) {
      let i = this.input.substring(this.index + 1, this.index + 5);
      if (/^[0-9a-f]+$/i.test(i)) s = parseInt(i, 16);
      else return this.error(`Invalid unicode escape [\\u${i}]`, 0);
      for (let r = 0; r < 5; r++) this.advance();
    } else s = xr(this.peek), this.advance();
    return e += String.fromCharCode(s), e;
  }
  scanStar(e) {
    this.advance();
    let n = "*";
    return this.peek === Nn ? (n += "*", this.advance(), this.peek === k && (n += "=", this.advance())) : this.peek === k && (n += "=", this.advance()), Y(e, this.index, n);
  }
  isStartOfRegex() {
    if (this.tokens.length === 0) return true;
    let e = this.tokens[this.tokens.length - 1];
    if (e.isOperator("!")) {
      let n = this.tokens.length > 1 ? this.tokens[this.tokens.length - 2] : null;
      return n === null || n.type !== h.Identifier && !n.isCharacter(q) && !n.isCharacter(G);
    }
    return e.type === h.Operator || e.isCharacter(ve) || e.isCharacter(te) || e.isCharacter(Q) || e.isCharacter(j);
  }
  scanRegex(e) {
    this.advance();
    let n = this.index, s = false, i = false;
    for (; ; ) {
      let p = this.peek;
      if (p === pe) return this.error("Unterminated regular expression", 0);
      if (s) s = false;
      else if (p === it) s = true;
      else if (p === te) i = true;
      else if (p === G) i = false;
      else if (p === Fe && !i) break;
      this.advance();
    }
    let r = this.input.substring(n, this.index);
    this.advance();
    let a = dr(e, this.index, r), u = this.scanRegexFlags(this.index);
    return u !== null ? (this.tokens.push(a), u) : a;
  }
  scanRegexFlags(e) {
    if (!Dt(this.peek)) return null;
    for (; Dt(this.peek); ) this.advance();
    return mr(e, this.index, this.input.substring(e, this.index));
  }
};
function Zn(t23) {
  return hs <= t23 && t23 <= fs || qt <= t23 && t23 <= jt || t23 == Xe || t23 == Wt;
}
function es(t23) {
  return Dt(t23) || W(t23) || t23 == Xe || t23 == Wt;
}
function gr(t23) {
  return t23 == Hi || t23 == Vi;
}
function vr(t23) {
  return t23 == ps || t23 == us;
}
function xr(t23) {
  switch (t23) {
    case qi:
      return Ie;
    case Wi:
      return Pi;
    case ji:
      return Li;
    case zi:
      return os;
    case Xi:
      return Ni;
    default:
      return t23;
  }
}
function wr(t23) {
  let e = parseInt(t23);
  if (isNaN(e)) throw new Error("Invalid integer literal when parsing " + t23);
  return e;
}
var Vt = class {
  constructor(e, n, s) {
    __publicField(this, "strings");
    __publicField(this, "expressions");
    __publicField(this, "offsets");
    this.strings = e, this.expressions = n, this.offsets = s;
  }
};
var Ut = class {
  constructor(e, n, s) {
    __publicField(this, "templateBindings");
    __publicField(this, "warnings");
    __publicField(this, "errors");
    this.templateBindings = e, this.warnings = n, this.errors = s;
  }
};
function B(t23) {
  return t23.start.toString() || "(unknown)";
}
var oe = class {
  constructor(e, n = false) {
    __publicField(this, "_lexer");
    __publicField(this, "_supportsDirectPipeReferences");
    this._lexer = e, this._supportsDirectPipeReferences = n;
  }
  parseAction(e, n, s) {
    let i = [];
    this._checkNoInterpolation(i, e, n);
    let { stripped: r } = this._stripComments(e), a = this._lexer.tokenize(r), u = new z(e, n, s, a, 1, i, 0, this._supportsDirectPipeReferences).parseChain();
    return new O(u, e, B(n), s, i);
  }
  parseBinding(e, n, s) {
    let i = [], r = this._parseBindingAst(e, n, s, i);
    return new O(r, e, B(n), s, i);
  }
  checkSimpleExpression(e) {
    let n = new Ht();
    return e.visit(n), n.errors;
  }
  parseSimpleBinding(e, n, s) {
    let i = [], r = this._parseBindingAst(e, n, s, i), a = this.checkSimpleExpression(r);
    return a.length > 0 && i.push(ee(`Host binding expression cannot contain ${a.join(" ")}`, e, "", n)), new O(r, e, B(n), s, i);
  }
  _parseBindingAst(e, n, s, i) {
    this._checkNoInterpolation(i, e, n);
    let { stripped: r } = this._stripComments(e), a = this._lexer.tokenize(r);
    return new z(e, n, s, a, 0, i, 0, this._supportsDirectPipeReferences).parseChain();
  }
  parseTemplateBindings(e, n, s, i, r) {
    let a = this._lexer.tokenize(n), u = [];
    return new z(n, s, r, a, 0, u, 0, this._supportsDirectPipeReferences).parseTemplateBindings({ source: e, span: new $(i, i + e.length) });
  }
  parseInterpolation(e, n, s, i) {
    var _a7;
    let r = [], { strings: a, expressions: u, offsets: p } = this.splitInterpolation(e, n, r, i);
    if (u.length === 0) return null;
    let d = [];
    for (let w = 0; w < u.length; ++w) {
      let D = (_a7 = i == null ? void 0 : i[w * 2 + 1]) == null ? void 0 : _a7.sourceSpan, _ = u[w].text, { stripped: T, hasComments: y } = this._stripComments(_), V = this._lexer.tokenize(T);
      if (y && T.trim().length === 0 && V.length === 0) {
        r.push(ee("Interpolation expression cannot only contain a comment", e, `at column ${u[w].start} in`, n));
        continue;
      }
      let ce = new z(D ? _ : e, D || n, s, V, 0, r, p[w], this._supportsDirectPipeReferences).parseChain();
      d.push(ce);
    }
    return this.createInterpolationAst(a.map((w) => w.text), d, e, B(n), s, r);
  }
  parseInterpolationExpression(e, n, s) {
    let { stripped: i } = this._stripComments(e), r = this._lexer.tokenize(i), a = [], u = new z(e, n, s, r, 0, a, 0, this._supportsDirectPipeReferences).parseChain(), p = ["", ""];
    return this.createInterpolationAst(p, [u], e, B(n), s, a);
  }
  createInterpolationAst(e, n, s, i, r, a) {
    let u = new X(0, s.length), p = new Ii(u, u.toAbsolute(r), e, n);
    return new O(p, s, i, r, a);
  }
  splitInterpolation(e, n, s, i) {
    var _a7;
    let r = [], a = [], u = [], p = i ? Sr(i) : null, d = 0, w = false, D = false, _ = "{{", T = "}}";
    for (; d < e.length; ) if (w) {
      let y = d, V = y + _.length, ce = this._getInterpolationEndIndex(e, T, V);
      if (ce === -1) {
        w = false, D = true;
        break;
      }
      let rn = ce + T.length, on = e.substring(V, ce);
      on.trim().length === 0 && s.push(ee("Blank expressions are not allowed in interpolated strings", e, `at column ${d} in`, n)), a.push({ text: on, start: y, end: rn });
      let yi = ((_a7 = p == null ? void 0 : p.get(y)) != null ? _a7 : y) + _.length;
      u.push(yi), d = rn, w = false;
    } else {
      let y = d;
      d = e.indexOf(_, d), d === -1 && (d = e.length);
      let V = e.substring(y, d);
      r.push({ text: V, start: y, end: d }), w = true;
    }
    if (!w) if (D) {
      let y = r[r.length - 1];
      y.text += e.substring(d), y.end = e.length;
    } else r.push({ text: e.substring(d), start: d, end: e.length });
    return new Vt(r, a, u);
  }
  wrapLiteralPrimitive(e, n, s) {
    let i = new X(0, e == null ? 0 : e.length);
    return new O(new I(i, i.toAbsolute(s), e), e, typeof n == "string" ? n : B(n), s, []);
  }
  _stripComments(e) {
    let n = this._commentStart(e);
    return n != null ? { stripped: e.substring(0, n), hasComments: true } : { stripped: e, hasComments: false };
  }
  _commentStart(e) {
    let n = null;
    for (let s = 0; s < e.length - 1; s++) {
      let i = e.charCodeAt(s), r = e.charCodeAt(s + 1);
      if (i === Fe && r == Fe && n == null) return s;
      n === i ? n = null : n == null && Mn(i) && (n = i);
    }
    return null;
  }
  _checkNoInterpolation(e, n, s) {
    let i = -1, r = -1;
    for (let a of this._forEachUnquotedChar(n, 0)) if (i === -1) n.startsWith("{{") && (i = a);
    else if (r = this._getInterpolationEndIndex(n, "}}", a), r > -1) break;
    i > -1 && r > -1 && e.push(ee("Got interpolation ({{}}) where expression was expected", n, `at column ${i} in`, s));
  }
  _getInterpolationEndIndex(e, n, s) {
    for (let i of this._forEachUnquotedChar(e, s)) {
      if (e.startsWith(n, i)) return i;
      if (e.startsWith("//", i)) return e.indexOf(n, i);
    }
    return -1;
  }
  *_forEachUnquotedChar(e, n) {
    let s = null, i = 0;
    for (let r = n; r < e.length; r++) {
      let a = e[r];
      Mn(e.charCodeAt(r)) && (s === null || s === a) && i % 2 === 0 ? s = s === null ? a : null : s === null && (yield r), i = a === "\\" ? i + 1 : 0;
    }
  }
};
var Z;
(function(t23) {
  t23[t23.None = 0] = "None", t23[t23.Writable = 1] = "Writable";
})(Z || (Z = {}));
var ts = /* @__PURE__ */ new Set(["d", "g", "i", "m", "s", "u", "v", "y"]);
var z = class {
  constructor(e, n, s, i, r, a, u, p) {
    __publicField(this, "input");
    __publicField(this, "parseSourceSpan");
    __publicField(this, "absoluteOffset");
    __publicField(this, "tokens");
    __publicField(this, "parseFlags");
    __publicField(this, "errors");
    __publicField(this, "offset");
    __publicField(this, "supportsDirectPipeReferences");
    __publicField(this, "rparensExpected", 0);
    __publicField(this, "rbracketsExpected", 0);
    __publicField(this, "rbracesExpected", 0);
    __publicField(this, "context", Z.None);
    __publicField(this, "sourceSpanCache", /* @__PURE__ */ new Map());
    __publicField(this, "index", 0);
    this.input = e, this.parseSourceSpan = n, this.absoluteOffset = s, this.tokens = i, this.parseFlags = r, this.errors = a, this.offset = u, this.supportsDirectPipeReferences = p;
  }
  peek(e) {
    let n = this.index + e;
    return n < this.tokens.length ? this.tokens[n] : Ae;
  }
  get next() {
    return this.peek(0);
  }
  get atEOF() {
    return this.index >= this.tokens.length;
  }
  get inputIndex() {
    return this.atEOF ? this.currentEndIndex : this.next.index + this.offset;
  }
  get currentEndIndex() {
    return this.index > 0 ? this.peek(-1).end + this.offset : this.tokens.length === 0 ? this.input.length + this.offset : this.next.index + this.offset;
  }
  get currentAbsoluteOffset() {
    return this.absoluteOffset + this.inputIndex;
  }
  span(e, n) {
    let s = this.currentEndIndex;
    if (n !== void 0 && n > this.currentEndIndex && (s = n), e > s) {
      let i = s;
      s = e, e = i;
    }
    return new X(e, s);
  }
  sourceSpan(e, n) {
    let s = `${e}@${this.inputIndex}:${n}`;
    return this.sourceSpanCache.has(s) || this.sourceSpanCache.set(s, this.span(e, n).toAbsolute(this.absoluteOffset)), this.sourceSpanCache.get(s);
  }
  advance() {
    this.index++;
  }
  withContext(e, n) {
    this.context |= e;
    let s = n();
    return this.context ^= e, s;
  }
  consumeOptionalCharacter(e) {
    return this.next.isCharacter(e) ? (this.advance(), true) : false;
  }
  peekKeywordLet() {
    return this.next.isKeywordLet();
  }
  peekKeywordAs() {
    return this.next.isKeywordAs();
  }
  expectCharacter(e) {
    this.consumeOptionalCharacter(e) || this.error(`Missing expected ${String.fromCharCode(e)}`);
  }
  consumeOptionalOperator(e) {
    return this.next.isOperator(e) ? (this.advance(), true) : false;
  }
  isAssignmentOperator(e) {
    return e.type === h.Operator && E.isAssignmentOperation(e.strValue);
  }
  expectOperator(e) {
    this.consumeOptionalOperator(e) || this.error(`Missing expected operator ${e}`);
  }
  prettyPrintToken(e) {
    return e === Ae ? "end of input" : `token ${e}`;
  }
  expectIdentifierOrKeyword() {
    let e = this.next;
    return !e.isIdentifier() && !e.isKeyword() ? (e.isPrivateIdentifier() ? this._reportErrorForPrivateIdentifier(e, "expected identifier or keyword") : this.error(`Unexpected ${this.prettyPrintToken(e)}, expected identifier or keyword`), null) : (this.advance(), e.toString());
  }
  expectIdentifierOrKeywordOrString() {
    let e = this.next;
    return !e.isIdentifier() && !e.isKeyword() && !e.isString() ? (e.isPrivateIdentifier() ? this._reportErrorForPrivateIdentifier(e, "expected identifier, keyword or string") : this.error(`Unexpected ${this.prettyPrintToken(e)}, expected identifier, keyword, or string`), "") : (this.advance(), e.toString());
  }
  parseChain() {
    let e = [], n = this.inputIndex;
    for (; this.index < this.tokens.length; ) {
      let s = this.parsePipe();
      if (e.push(s), this.consumeOptionalCharacter(fe)) for (this.parseFlags & 1 || this.error("Binding expression cannot contain chained expression"); this.consumeOptionalCharacter(fe); ) ;
      else if (this.index < this.tokens.length) {
        let i = this.index;
        if (this.error(`Unexpected token '${this.next}'`), this.index === i) break;
      }
    }
    if (e.length === 0) {
      let s = this.offset, i = this.offset + this.input.length;
      return new b(this.span(s, i), this.sourceSpan(s, i));
    }
    return e.length == 1 ? e[0] : new yt(this.span(n), this.sourceSpan(n), e);
  }
  parsePipe() {
    let e = this.inputIndex, n = this.parseExpression();
    if (this.consumeOptionalOperator("|")) {
      this.parseFlags & 1 && this.error("Cannot have a pipe in an action expression");
      do {
        let s = this.inputIndex, i = this.expectIdentifierOrKeyword(), r, a;
        i !== null ? r = this.sourceSpan(s) : (i = "", a = this.next.index !== -1 ? this.next.index : this.input.length + this.offset, r = new X(a, a).toAbsolute(this.absoluteOffset));
        let u = [];
        for (; this.consumeOptionalCharacter(j); ) u.push(this.parseExpression());
        let p;
        if (this.supportsDirectPipeReferences) {
          let d = i.charCodeAt(0);
          p = d === Xe || d >= qt && d <= jt ? me.ReferencedDirectly : me.ReferencedByName;
        } else p = me.ReferencedByName;
        n = new kt(this.span(e), this.sourceSpan(e, a), n, i, u, p, r);
      } while (this.consumeOptionalOperator("|"));
    }
    return n;
  }
  parseExpression() {
    return this.parseConditional();
  }
  parseConditional() {
    let e = this.inputIndex, n = this.parseLogicalOr();
    if (this.consumeOptionalOperator("?")) {
      let s = this.parsePipe(), i;
      if (this.consumeOptionalCharacter(j)) i = this.parsePipe();
      else {
        let r = this.inputIndex, a = this.input.substring(e, r);
        this.error(`Conditional expression ${a} requires all 3 expressions`), i = new b(this.span(e), this.sourceSpan(e));
      }
      return new Ct(this.span(e), this.sourceSpan(e), n, s, i);
    } else return n;
  }
  parseLogicalOr() {
    let e = this.inputIndex, n = this.parseLogicalAnd();
    for (; this.consumeOptionalOperator("||"); ) {
      let s = this.parseLogicalAnd();
      n = new E(this.span(e), this.sourceSpan(e), "||", n, s);
    }
    return n;
  }
  parseLogicalAnd() {
    let e = this.inputIndex, n = this.parseNullishCoalescing();
    for (; this.consumeOptionalOperator("&&"); ) {
      let s = this.parseNullishCoalescing();
      n = new E(this.span(e), this.sourceSpan(e), "&&", n, s);
    }
    return n;
  }
  parseNullishCoalescing() {
    let e = this.inputIndex, n = this.parseEquality();
    for (; this.consumeOptionalOperator("??"); ) {
      let s = this.parseEquality();
      n = new E(this.span(e), this.sourceSpan(e), "??", n, s);
    }
    return n;
  }
  parseEquality() {
    let e = this.inputIndex, n = this.parseRelational();
    for (; this.next.type == h.Operator; ) {
      let s = this.next.strValue;
      switch (s) {
        case "==":
        case "===":
        case "!=":
        case "!==":
          this.advance();
          let i = this.parseRelational();
          n = new E(this.span(e), this.sourceSpan(e), s, n, i);
          continue;
      }
      break;
    }
    return n;
  }
  parseRelational() {
    let e = this.inputIndex, n = this.parseAdditive();
    for (; this.next.type == h.Operator || this.next.isKeywordIn; ) {
      let s = this.next.strValue;
      switch (s) {
        case "<":
        case ">":
        case "<=":
        case ">=":
        case "in":
          this.advance();
          let i = this.parseAdditive();
          n = new E(this.span(e), this.sourceSpan(e), s, n, i);
          continue;
      }
      break;
    }
    return n;
  }
  parseAdditive() {
    let e = this.inputIndex, n = this.parseMultiplicative();
    for (; this.next.type == h.Operator; ) {
      let s = this.next.strValue;
      switch (s) {
        case "+":
        case "-":
          this.advance();
          let i = this.parseMultiplicative();
          n = new E(this.span(e), this.sourceSpan(e), s, n, i);
          continue;
      }
      break;
    }
    return n;
  }
  parseMultiplicative() {
    let e = this.inputIndex, n = this.parseExponentiation();
    for (; this.next.type == h.Operator; ) {
      let s = this.next.strValue;
      switch (s) {
        case "*":
        case "%":
        case "/":
          this.advance();
          let i = this.parseExponentiation();
          n = new E(this.span(e), this.sourceSpan(e), s, n, i);
          continue;
      }
      break;
    }
    return n;
  }
  parseExponentiation() {
    let e = this.inputIndex, n = this.parsePrefix();
    for (; this.next.type == h.Operator && this.next.strValue === "**"; ) {
      (n instanceof ge || n instanceof Me || n instanceof Re || n instanceof $e) && this.error("Unary operator used immediately before exponentiation expression. Parenthesis must be used to disambiguate operator precedence"), this.advance();
      let s = this.parseExponentiation();
      n = new E(this.span(e), this.sourceSpan(e), "**", n, s);
    }
    return n;
  }
  parsePrefix() {
    if (this.next.type == h.Operator) {
      let e = this.inputIndex, n = this.next.strValue, s;
      switch (n) {
        case "+":
          return this.advance(), s = this.parsePrefix(), ge.createPlus(this.span(e), this.sourceSpan(e), s);
        case "-":
          return this.advance(), s = this.parsePrefix(), ge.createMinus(this.span(e), this.sourceSpan(e), s);
        case "!":
          return this.advance(), s = this.parsePrefix(), new Me(this.span(e), this.sourceSpan(e), s);
      }
    } else if (this.next.isKeywordTypeof()) {
      let e = this.inputIndex;
      this.advance();
      let n = this.parsePrefix();
      return new Re(this.span(e), this.sourceSpan(e), n);
    } else if (this.next.isKeywordVoid()) {
      let e = this.inputIndex;
      this.advance();
      let n = this.parsePrefix();
      return new $e(this.span(e), this.sourceSpan(e), n);
    }
    return this.parseCallChain();
  }
  parseCallChain() {
    let e = this.inputIndex, n = this.parsePrimary();
    for (; ; ) if (this.consumeOptionalCharacter(H)) n = this.parseAccessMember(n, e, false);
    else if (this.consumeOptionalOperator("?.")) this.consumeOptionalCharacter(ve) ? n = this.parseCall(n, e, true) : n = this.consumeOptionalCharacter(te) ? this.parseKeyedReadOrWrite(n, e, true) : this.parseAccessMember(n, e, true);
    else if (this.consumeOptionalCharacter(te)) n = this.parseKeyedReadOrWrite(n, e, false);
    else if (this.consumeOptionalCharacter(ve)) n = this.parseCall(n, e, false);
    else if (this.consumeOptionalOperator("!")) n = new Nt(this.span(e), this.sourceSpan(e), n);
    else if (this.next.isTemplateLiteralEnd()) n = this.parseNoInterpolationTaggedTemplateLiteral(n, e);
    else if (this.next.isTemplateLiteralPart()) n = this.parseTaggedTemplateLiteral(n, e);
    else return n;
  }
  parsePrimary() {
    let e = this.inputIndex;
    if (this.consumeOptionalCharacter(ve)) {
      this.rparensExpected++;
      let n = this.parsePipe();
      return this.consumeOptionalCharacter(q) || (this.error("Missing closing parentheses"), this.consumeOptionalCharacter(q)), this.rparensExpected--, new Ee(this.span(e), this.sourceSpan(e), n);
    } else {
      if (this.next.isKeywordNull()) return this.advance(), new I(this.span(e), this.sourceSpan(e), null);
      if (this.next.isKeywordUndefined()) return this.advance(), new I(this.span(e), this.sourceSpan(e), void 0);
      if (this.next.isKeywordTrue()) return this.advance(), new I(this.span(e), this.sourceSpan(e), true);
      if (this.next.isKeywordFalse()) return this.advance(), new I(this.span(e), this.sourceSpan(e), false);
      if (this.next.isKeywordIn()) return this.advance(), new I(this.span(e), this.sourceSpan(e), "in");
      if (this.next.isKeywordThis()) return this.advance(), new Et(this.span(e), this.sourceSpan(e));
      if (this.consumeOptionalCharacter(te)) return this.parseLiteralArray(e);
      if (this.next.isCharacter(Ve)) return this.parseLiteralMap();
      if (this.next.isIdentifier()) return this.parseAccessMember(new ne(this.span(e), this.sourceSpan(e)), e, false);
      if (this.next.isNumber()) {
        let n = this.next.toNumber();
        return this.advance(), new I(this.span(e), this.sourceSpan(e), n);
      } else {
        if (this.next.isTemplateLiteralEnd()) return this.parseNoInterpolationTemplateLiteral();
        if (this.next.isTemplateLiteralPart()) return this.parseTemplateLiteral();
        if (this.next.isString() && this.next.kind === F.Plain) {
          let n = this.next.toString();
          return this.advance(), new I(this.span(e), this.sourceSpan(e), n);
        } else return this.next.isPrivateIdentifier() ? (this._reportErrorForPrivateIdentifier(this.next, null), new b(this.span(e), this.sourceSpan(e))) : this.next.isRegExpBody() ? this.parseRegularExpressionLiteral() : this.index >= this.tokens.length ? (this.error(`Unexpected end of expression: ${this.input}`), new b(this.span(e), this.sourceSpan(e))) : (this.error(`Unexpected token ${this.next}`), new b(this.span(e), this.sourceSpan(e)));
      }
    }
  }
  parseLiteralArray(e) {
    this.rbracketsExpected++;
    let n = [];
    do
      if (this.next.isOperator("...")) n.push(this.parseSpreadElement());
      else if (!this.next.isCharacter(G)) n.push(this.parsePipe());
      else break;
    while (this.consumeOptionalCharacter(Q));
    return this.rbracketsExpected--, this.expectCharacter(G), new bt(this.span(e), this.sourceSpan(e), n);
  }
  parseLiteralMap() {
    let e = [], n = [], s = this.inputIndex;
    if (this.expectCharacter(Ve), !this.consumeOptionalCharacter(K)) {
      this.rbracesExpected++;
      do {
        let i = this.inputIndex;
        if (this.next.isOperator("...")) {
          this.advance(), e.push({ kind: "spread", span: this.span(i), sourceSpan: this.sourceSpan(i) }), n.push(this.parsePipe());
          continue;
        }
        let r = this.next.isString(), a = this.expectIdentifierOrKeywordOrString(), u = this.span(i), p = this.sourceSpan(i), d = { kind: "property", key: a, quoted: r, span: u, sourceSpan: p };
        e.push(d), r ? (this.expectCharacter(j), n.push(this.parsePipe())) : this.consumeOptionalCharacter(j) ? n.push(this.parsePipe()) : (d.isShorthandInitialized = true, n.push(new de(u, p, p, new ne(u, p), a)));
      } while (this.consumeOptionalCharacter(Q) && !this.next.isCharacter(K));
      this.rbracesExpected--, this.expectCharacter(K);
    }
    return new It(this.span(s), this.sourceSpan(s), e, n);
  }
  parseAccessMember(e, n, s) {
    let i = this.inputIndex, r = this.withContext(Z.Writable, () => {
      var _a7;
      let u = (_a7 = this.expectIdentifierOrKeyword()) != null ? _a7 : "";
      return u.length === 0 && this.error("Expected identifier for property access", e.span.end), u;
    }), a = this.sourceSpan(i);
    if (s) return this.isAssignmentOperator(this.next) ? (this.advance(), this.error("The '?.' operator cannot be used in the assignment"), new b(this.span(n), this.sourceSpan(n))) : new _t(this.span(n), this.sourceSpan(n), a, e, r);
    if (this.isAssignmentOperator(this.next)) {
      let u = this.next.strValue;
      if (!(this.parseFlags & 1)) return this.advance(), this.error("Bindings cannot contain assignments"), new b(this.span(n), this.sourceSpan(n));
      let p = new de(this.span(n), this.sourceSpan(n), a, e, r);
      this.advance();
      let d = this.parseConditional();
      return new E(this.span(n), this.sourceSpan(n), u, p, d);
    } else return new de(this.span(n), this.sourceSpan(n), a, e, r);
  }
  parseCall(e, n, s) {
    let i = this.inputIndex;
    this.rparensExpected++;
    let r = this.parseCallArguments(), a = this.span(i, this.inputIndex).toAbsolute(this.absoluteOffset);
    this.expectCharacter(q), this.rparensExpected--;
    let u = this.span(n), p = this.sourceSpan(n);
    return s ? new Lt(u, p, e, r, a) : new Pt(u, p, e, r, a);
  }
  parseCallArguments() {
    if (this.next.isCharacter(q)) return [];
    let e = [];
    do
      e.push(this.next.isOperator("...") ? this.parseSpreadElement() : this.parsePipe());
    while (this.consumeOptionalCharacter(Q));
    return e;
  }
  parseSpreadElement() {
    this.next.isOperator("...") || this.error("Spread element must start with '...' operator");
    let e = this.inputIndex;
    this.advance();
    let n = this.parsePipe(), s = this.span(e), i = this.sourceSpan(e);
    return new At(s, i, n);
  }
  expectTemplateBindingKey() {
    let e = "", n = false, s = this.currentAbsoluteOffset;
    do
      e += this.expectIdentifierOrKeywordOrString(), n = this.consumeOptionalOperator("-"), n && (e += "-");
    while (n);
    return { source: e, span: new $(s, s + e.length) };
  }
  parseTemplateBindings(e) {
    let n = [];
    for (n.push(...this.parseDirectiveKeywordBindings(e)); this.index < this.tokens.length; ) {
      let s = this.parseLetBinding();
      if (s) n.push(s);
      else {
        let i = this.expectTemplateBindingKey(), r = this.parseAsBinding(i);
        r ? n.push(r) : (i.source = e.source + i.source.charAt(0).toUpperCase() + i.source.substring(1), n.push(...this.parseDirectiveKeywordBindings(i)));
      }
      this.consumeStatementTerminator();
    }
    return new Ut(n, [], this.errors);
  }
  parseKeyedReadOrWrite(e, n, s) {
    return this.withContext(Z.Writable, () => {
      this.rbracketsExpected++;
      let i = this.parsePipe();
      if (i instanceof b && this.error("Key access cannot be empty"), this.rbracketsExpected--, this.expectCharacter(G), this.isAssignmentOperator(this.next)) {
        let r = this.next.strValue;
        if (s) this.advance(), this.error("The '?.' operator cannot be used in the assignment");
        else {
          let a = new Le(this.span(n), this.sourceSpan(n), e, i);
          this.advance();
          let u = this.parseConditional();
          return new E(this.span(n), this.sourceSpan(n), r, a, u);
        }
      } else return s ? new Tt(this.span(n), this.sourceSpan(n), e, i) : new Le(this.span(n), this.sourceSpan(n), e, i);
      return new b(this.span(n), this.sourceSpan(n));
    });
  }
  parseDirectiveKeywordBindings(e) {
    let n = [];
    this.consumeOptionalCharacter(j);
    let s = this.getDirectiveBoundTarget(), i = this.currentAbsoluteOffset, r = this.parseAsBinding(e);
    r || (this.consumeStatementTerminator(), i = this.currentAbsoluteOffset);
    let a = new $(e.span.start, i);
    return n.push(new ye(a, e, s)), r && n.push(r), n;
  }
  getDirectiveBoundTarget() {
    if (this.next === Ae || this.peekKeywordAs() || this.peekKeywordLet()) return null;
    let e = this.parsePipe(), { start: n, end: s } = e.span, i = this.input.substring(n, s);
    return new O(e, i, B(this.parseSourceSpan), this.absoluteOffset + n, this.errors);
  }
  parseAsBinding(e) {
    if (!this.peekKeywordAs()) return null;
    this.advance();
    let n = this.expectTemplateBindingKey();
    this.consumeStatementTerminator();
    let s = new $(e.span.start, this.currentAbsoluteOffset);
    return new se(s, n, e);
  }
  parseLetBinding() {
    if (!this.peekKeywordLet()) return null;
    let e = this.currentAbsoluteOffset;
    this.advance();
    let n = this.expectTemplateBindingKey(), s = null;
    this.consumeOptionalOperator("=") && (s = this.expectTemplateBindingKey()), this.consumeStatementTerminator();
    let i = new $(e, this.currentAbsoluteOffset);
    return new se(i, n, s);
  }
  parseNoInterpolationTaggedTemplateLiteral(e, n) {
    let s = this.parseNoInterpolationTemplateLiteral();
    return new De(this.span(n), this.sourceSpan(n), e, s);
  }
  parseNoInterpolationTemplateLiteral() {
    let e = this.next.strValue, n = this.inputIndex;
    this.advance();
    let s = this.span(n), i = this.sourceSpan(n);
    return new Be(s, i, [new Oe(s, i, e)], []);
  }
  parseTaggedTemplateLiteral(e, n) {
    let s = this.parseTemplateLiteral();
    return new De(this.span(n), this.sourceSpan(n), e, s);
  }
  parseTemplateLiteral() {
    let e = [], n = [], s = this.inputIndex;
    for (; this.next !== Ae; ) {
      let i = this.next;
      if (i.isTemplateLiteralPart() || i.isTemplateLiteralEnd()) {
        let r = this.inputIndex;
        if (this.advance(), e.push(new Oe(this.span(r), this.sourceSpan(r), i.strValue)), i.isTemplateLiteralEnd()) break;
      } else if (i.isTemplateLiteralInterpolationStart()) {
        this.advance(), this.rbracesExpected++;
        let r = this.parsePipe();
        r instanceof b ? this.error("Template literal interpolation cannot be empty") : n.push(r), this.rbracesExpected--;
      } else this.advance();
    }
    return new Be(this.span(s), this.sourceSpan(s), e, n);
  }
  parseRegularExpressionLiteral() {
    let e = this.next;
    if (this.advance(), !e.isRegExpBody()) return new b(this.span(this.inputIndex), this.sourceSpan(this.inputIndex));
    let n = null;
    if (this.next.isRegExpFlags()) {
      n = this.next, this.advance();
      let r = /* @__PURE__ */ new Set();
      for (let a = 0; a < n.strValue.length; a++) {
        let u = n.strValue[a];
        ts.has(u) ? r.has(u) ? this.error(`Duplicate regular expression flag "${u}"`, n.index + a) : r.add(u) : this.error(`Unsupported regular expression flag "${u}". The supported flags are: ` + Array.from(ts, (p) => `"${p}"`).join(", "), n.index + a);
      }
    }
    let s = e.index, i = n ? n.end : e.end;
    return new Mt(this.span(s, i), this.sourceSpan(s, i), e.strValue, n ? n.strValue : null);
  }
  consumeStatementTerminator() {
    this.consumeOptionalCharacter(fe) || this.consumeOptionalCharacter(Q);
  }
  error(e, n = this.index) {
    this.errors.push(ee(e, this.input, this.getErrorLocationText(n), this.parseSourceSpan)), this.skip();
  }
  getErrorLocationText(e) {
    return e < this.tokens.length ? `at column ${this.tokens[e].index + 1} in` : "at the end of the expression";
  }
  _reportErrorForPrivateIdentifier(e, n) {
    let s = `Private identifiers are not supported. Unexpected private identifier: ${e}`;
    n !== null && (s += `, ${n}`), this.error(s);
  }
  skip() {
    let e = this.next;
    for (; this.index < this.tokens.length && !e.isCharacter(fe) && !e.isOperator("|") && (this.rparensExpected <= 0 || !e.isCharacter(q)) && (this.rbracesExpected <= 0 || !e.isCharacter(K)) && (this.rbracketsExpected <= 0 || !e.isCharacter(G)) && (!(this.context & Z.Writable) || !this.isAssignmentOperator(e)); ) this.next.isError() && this.errors.push(ee(this.next.toString(), this.input, this.getErrorLocationText(this.next.index), this.parseSourceSpan)), this.advance(), e = this.next;
  }
};
function ee(t23, e, n, s) {
  n.length > 0 && (n = ` ${n} `);
  let i = B(s), r = `Parser Error: ${t23}${n}[${e}] in ${i}`;
  return new Ce(s, r);
}
var Ht = class extends Rt {
  constructor() {
    super(...arguments);
    __publicField(this, "errors", []);
  }
  visitPipe() {
    this.errors.push("pipes");
  }
};
function Sr(t23) {
  let e = /* @__PURE__ */ new Map(), n = 0, s = 0, i = 0;
  for (; i < t23.length; ) {
    let r = t23[i];
    if (r.type === 9) {
      let [a, u] = r.parts;
      n += u.length, s += a.length;
    } else {
      let a = r.parts.reduce((u, p) => u + p.length, 0);
      s += a, n += a;
    }
    e.set(s, n), i++;
  }
  return e;
}
var Er = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex", "aria-activedescendant": "ariaActiveDescendantElement", "aria-atomic": "ariaAtomic", "aria-autocomplete": "ariaAutoComplete", "aria-busy": "ariaBusy", "aria-checked": "ariaChecked", "aria-colcount": "ariaColCount", "aria-colindex": "ariaColIndex", "aria-colindextext": "ariaColIndexText", "aria-colspan": "ariaColSpan", "aria-controls": "ariaControlsElements", "aria-current": "ariaCurrent", "aria-describedby": "ariaDescribedByElements", "aria-description": "ariaDescription", "aria-details": "ariaDetailsElements", "aria-disabled": "ariaDisabled", "aria-errormessage": "ariaErrorMessageElements", "aria-expanded": "ariaExpanded", "aria-flowto": "ariaFlowToElements", "aria-haspopup": "ariaHasPopup", "aria-hidden": "ariaHidden", "aria-invalid": "ariaInvalid", "aria-keyshortcuts": "ariaKeyShortcuts", "aria-label": "ariaLabel", "aria-labelledby": "ariaLabelledByElements", "aria-level": "ariaLevel", "aria-live": "ariaLive", "aria-modal": "ariaModal", "aria-multiline": "ariaMultiLine", "aria-multiselectable": "ariaMultiSelectable", "aria-orientation": "ariaOrientation", "aria-owns": "ariaOwnsElements", "aria-placeholder": "ariaPlaceholder", "aria-posinset": "ariaPosInSet", "aria-pressed": "ariaPressed", "aria-readonly": "ariaReadOnly", "aria-required": "ariaRequired", "aria-roledescription": "ariaRoleDescription", "aria-rowcount": "ariaRowCount", "aria-rowindex": "ariaRowIndex", "aria-rowindextext": "ariaRowIndexText", "aria-rowspan": "ariaRowSpan", "aria-selected": "ariaSelected", "aria-setsize": "ariaSetSize", "aria-sort": "ariaSort", "aria-valuemax": "ariaValueMax", "aria-valuemin": "ariaValueMin", "aria-valuenow": "ariaValueNow", "aria-valuetext": "ariaValueText" }));
var vo = Array.from(Er).reduce((t23, [e, n]) => (t23.set(e, n), t23), /* @__PURE__ */ new Map());
var xo = new oe(new _e());
function P(t23) {
  return (e) => e.kind === t23;
}
function we(t23, e) {
  return (n) => n.kind === t23 && e === n.expression instanceof je;
}
function yr(t23) {
  return (t23.kind === f.Property || t23.kind === f.TwoWayProperty) && !(t23.expression instanceof je);
}
var wo = [{ test: P(f.StyleMap), transform: ze }, { test: P(f.ClassMap), transform: ze }, { test: P(f.StyleProp) }, { test: P(f.ClassProp) }, { test: we(f.Attribute, true) }, { test: we(f.Property, true) }, { test: yr }, { test: we(f.Attribute, false) }, { test: P(f.Control) }];
var So = [{ test: we(f.DomProperty, true) }, { test: we(f.DomProperty, false) }, { test: P(f.Attribute) }, { test: P(f.StyleMap), transform: ze }, { test: P(f.ClassMap), transform: ze }, { test: P(f.StyleProp) }, { test: P(f.ClassProp) }];
var Eo = /* @__PURE__ */ new Set([f.Listener, f.TwoWayListener, f.AnimationListener, f.StyleMap, f.ClassMap, f.StyleProp, f.ClassProp, f.Property, f.TwoWayProperty, f.DomProperty, f.Attribute, f.Animation, f.Control]);
function ze(t23) {
  return t23.slice(t23.length - 1);
}
var yo = /* @__PURE__ */ new Map([[R.Idle, { none: l.deferOnIdle, prefetch: l.deferPrefetchOnIdle, hydrate: l.deferHydrateOnIdle }], [R.Immediate, { none: l.deferOnImmediate, prefetch: l.deferPrefetchOnImmediate, hydrate: l.deferHydrateOnImmediate }], [R.Timer, { none: l.deferOnTimer, prefetch: l.deferPrefetchOnTimer, hydrate: l.deferHydrateOnTimer }], [R.Hover, { none: l.deferOnHover, prefetch: l.deferPrefetchOnHover, hydrate: l.deferHydrateOnHover }], [R.Interaction, { none: l.deferOnInteraction, prefetch: l.deferPrefetchOnInteraction, hydrate: l.deferHydrateOnInteraction }], [R.Viewport, { none: l.deferOnViewport, prefetch: l.deferPrefetchOnViewport, hydrate: l.deferHydrateOnViewport }], [R.Never, { none: l.deferHydrateNever, prefetch: l.deferHydrateNever, hydrate: l.deferHydrateNever }]]);
var Co = [l.pipeBind1, l.pipeBind2, l.pipeBind3, l.pipeBind4];
var _o = { constant: [l.interpolate, l.interpolate1, l.interpolate2, l.interpolate3, l.interpolate4, l.interpolate5, l.interpolate6, l.interpolate7, l.interpolate8], variable: l.interpolateV, mapping: (t23) => {
  if (t23 % 2 === 0) throw new Error("Expected odd number of arguments");
  return (t23 - 1) / 2;
} };
var To = /* @__PURE__ */ new Map([["window", l.resolveWindow], ["document", l.resolveDocument], ["body", l.resolveBody]]);
var ko = /* @__PURE__ */ new Map([[N.HTML, l.sanitizeHtml], [N.RESOURCE_URL, l.sanitizeResourceUrl], [N.SCRIPT, l.sanitizeScript], [N.STYLE, l.sanitizeStyle], [N.URL, l.sanitizeUrl], [N.ATTRIBUTE_NO_BINDING, l.validateAttribute]]);
var bo = /* @__PURE__ */ new Map([[N.HTML, l.trustConstantHtml], [N.RESOURCE_URL, l.trustConstantResourceUrl]]);
var ns;
(function(t23) {
  t23[t23.None = 0] = "None", t23[t23.ViewContextRead = 1] = "ViewContextRead", t23[t23.ViewContextWrite = 2] = "ViewContextWrite", t23[t23.SideEffectful = 4] = "SideEffectful";
})(ns || (ns = {}));
var Ao = /* @__PURE__ */ new Map([[L.Property, M.Property], [L.TwoWay, M.TwoWayProperty], [L.Attribute, M.Attribute], [L.Class, M.ClassName], [L.Style, M.StyleProperty], [L.LegacyAnimation, M.LegacyAnimation], [L.Animation, M.Animation]]);
var ss;
(function(t23) {
  t23[t23.NG_CONTENT = 0] = "NG_CONTENT", t23[t23.STYLE = 1] = "STYLE", t23[t23.STYLESHEET = 2] = "STYLESHEET", t23[t23.SCRIPT = 3] = "SCRIPT", t23[t23.OTHER = 4] = "OTHER";
})(ss || (ss = {}));
var is;
(function(t23) {
  t23.IDLE = "idle", t23.TIMER = "timer", t23.INTERACTION = "interaction", t23.IMMEDIATE = "immediate", t23.HOVER = "hover", t23.VIEWPORT = "viewport", t23.NEVER = "never";
})(is || (is = {}));
var ws = "%COMP%";
var No = `_nghost-${ws}`;
var Po = `_ngcontent-${ws}`;
var rs;
(function(t23) {
  t23[t23.Extract = 0] = "Extract", t23[t23.Merge = 1] = "Merge";
})(rs || (rs = {}));
var Lo = new St("21.1.0");
var Cr = "test.html";
function Ss(t23) {
  let e = new He(t23, Cr), n = new Ue(e, 0, 0, 0), s = n.moveBy(t23.length);
  return { text: t23, file: e, start: n, end: s, sourceSpan: new We(n, s) };
}
var _r;
function Es() {
  return _r != null ? _r : _r = new oe(new _e());
}
var Tr = (t23) => oe.prototype._commentStart(t23);
function kr(t23) {
  let e = Tr(t23);
  return e === null ? [] : [__spreadValues({ type: "CommentLine", value: t23.slice(e + 2) }, be({ start: e, end: t23.length }))];
}
function ys(t23) {
  var _a7;
  let { result: e } = t23;
  if (e.errors.length !== 0) {
    let [n] = e.errors;
    if (!(n instanceof Ce)) throw n;
    let { message: s } = n;
    {
      let a = s.match(/ in .*?@\d+:\d+$/);
      a && (s = s.slice(0, a.index));
    }
    let i = t23.start;
    {
      let a = s.match(new RegExp("at column (?<index>\\d+)"));
      a && (s = s.slice(0, a.index), i = i.moveBy(Number(a.groups.index)));
    }
    let r = new SyntaxError(s.trim(), { cause: n });
    throw Object.assign(r, { location: i, span: n.span }), (_a7 = r.cause) != null ? _a7 : r.cause = n, r;
  }
  return t23;
}
var Je = (t23) => (e) => {
  let n = Ss(e);
  return ys(__spreadProps(__spreadValues({}, n), { result: Es()[t23](e, n.sourceSpan, 0), comments: kr(e) }));
};
var Cs = Je("parseAction");
var _s = Je("parseBinding");
var Ts = Je("parseSimpleBinding");
var ks = Je("parseInterpolationExpression");
var bs = (t23) => {
  let e = Ss(t23);
  return ys(__spreadProps(__spreadValues({}, e), { result: Es().parseTemplateBindings("", t23, e.sourceSpan, 0, 0), comments: [] }));
};
var Ye = class {
  constructor(t23) {
    __publicField(this, "text");
    this.text = t23;
  }
  getCharacterIndex(t23, e) {
    return pn(this.text, t23, e);
  }
  transformSpan(t23) {
    return be(t23);
  }
  createNode(t23, e) {
    var _a7;
    let n = t23.start, s = t23.end, i = t23.range;
    e && (Array.isArray(e) ? ([n, s] = e, i = e) : ({ start: n, end: s } = (_a7 = e.sourceSpan) != null ? _a7 : e, i = [n, s]));
    i ? [n, s] = i : typeof n == "number" && typeof s == "number" && (i = [n, s]);
    if (!(typeof n == "number" && typeof s == "number" && i)) throw new Error("Missing location information");
    let r = __spreadProps(__spreadValues({}, t23), { start: n, end: s, range: i });
    switch (r.type) {
      case "NumericLiteral":
      case "StringLiteral":
      case "RegExpLiteral": {
        let a = this.text.slice(n, s), { value: u } = r;
        r.extra = __spreadProps(__spreadValues({}, r.extra), { raw: a, rawValue: u });
        break;
      }
    }
    return r;
  }
};
var As = Object.defineProperty;
var Is = (t23, e) => {
  let n = {};
  for (var s in t23) As(n, s, { get: t23[s], enumerable: true });
  return e && As(n, Symbol.toStringTag, { value: "Module" }), n;
};
var Ns = (t23, e) => ({ type: "ArrayExpression", elements: e.transformChildren(t23.expressions) });
var Ps = (t23, e) => e.transformChild(t23.ast);
var br = (t23) => t23 === "&&" || t23 === "||" || t23 === "??";
var Ls = (t23, e) => {
  let { operation: n } = t23, [s, i] = e.transformChildren([t23.left, t23.right]);
  return br(n) ? { type: "LogicalExpression", operator: n, left: s, right: i } : E.isAssignmentOperation(n) ? { type: "AssignmentExpression", left: s, right: i, operator: n } : { left: s, right: i, type: "BinaryExpression", operator: n };
};
var Ar = { optional: false };
var Ir = { optional: true };
var Ms = ({ optional: t23 }) => (e, n) => {
  let s = n.transformChildren(e.args), i = n.transformChild(e.receiver);
  return t23 || ue(i) ? { type: "OptionalCallExpression", callee: i, arguments: s, optional: t23 } : { type: "CallExpression", callee: i, arguments: s };
};
var Rs = Ms(Ar);
var $s = Ms(Ir);
var Ds = (t23, e) => ({ type: "NGChainedExpression", expressions: e.transformChildren(t23.expressions) });
var Bs = (t23, e) => {
  let [n, s, i] = e.transformChildren([t23.condition, t23.trueExp, t23.falseExp]);
  return { type: "ConditionalExpression", test: n, consequent: s, alternate: i };
};
var Os = (t23, e) => {
  let { expressions: n } = t23;
  if (n.length !== 1) throw new Error("Unexpected 'Interpolation'");
  return e.transformChild(n[0]);
};
var Fs = (t23) => {
  let { value: e } = t23;
  switch (typeof e) {
    case "boolean":
      return { type: "BooleanLiteral", value: e };
    case "number":
      return { type: "NumericLiteral", value: e };
    case "object":
      return { type: "NullLiteral" };
    case "string":
      return { type: "StringLiteral", value: e };
    case "undefined":
      return { type: "Identifier", name: "undefined" };
    default:
      throw new Error(`Unexpected 'LiteralPrimitive' value type ${typeof e}`);
  }
};
var Vs = (t23) => {
  var _a7;
  return { type: "RegExpLiteral", pattern: t23.body, flags: (_a7 = t23.flags) != null ? _a7 : "" };
};
var Nr = { computed: true, optional: false };
var Pr = { computed: true, optional: true };
var Lr = { computed: false, optional: false };
var Mr = { computed: false, optional: true };
var Qe = ({ computed: t23, optional: e }) => (n, s) => {
  let { receiver: i } = n, r;
  if (t23) {
    let { key: u } = n;
    r = s.transformChild(u);
  } else {
    let u = i instanceof ne, { name: p, nameSpan: d } = n;
    if (r = s.create({ type: "Identifier", name: p }, d, u ? s.ancestors : []), u) return r;
  }
  let a = s.transformChild(i);
  return e || ue(a) ? { type: "OptionalMemberExpression", optional: e, property: r, object: a, computed: t23 } : { type: "MemberExpression", property: r, object: a, computed: t23 };
};
var Us = Qe(Nr);
var Hs = Qe(Pr);
var Ws = Qe(Lr);
var qs = Qe(Mr);
var js = (t23, e) => ({ type: "TSNonNullExpression", expression: e.transformChild(t23.expression) });
var zs = (t23, e) => {
  let { keys: n, values: s } = t23, i = (r, a = t23) => e.create(r, a, [t23, ...e.ancestors]);
  return { type: "ObjectExpression", properties: n.map((r, a) => {
    let u = s[a], p = [r.sourceSpan.start, u.sourceSpan.end];
    if (r.kind === "spread") return i({ type: "SpreadElement", argument: e.transformChild(u) }, p);
    let d = !!r.isShorthandInitialized;
    return i({ type: "ObjectProperty", key: i(r.quoted ? { type: "StringLiteral", value: r.key } : { type: "Identifier", name: r.key }, r.sourceSpan), value: e.transformChild(u), shorthand: d, computed: false, method: false }, p);
  }) };
};
var Gs = (t23, e) => e.transformChild(t23.expression);
var Xs = (t23, e) => ({ type: "NGPipeExpression", left: e.transformChild(t23.exp), right: e.create({ type: "Identifier", name: t23.name }, t23.nameSpan), arguments: e.transformChildren(t23.args) });
var Js = (t23, e) => ({ type: "SpreadElement", argument: e.transformChild(t23.expression) });
var Ys = (t23, e) => ({ type: "TaggedTemplateExpression", tag: e.transformChild(t23.tag), quasi: e.transformChild(t23.template) });
var Qs = (t23, e) => ({ type: "TemplateLiteral", quasis: e.transformChildren(t23.elements), expressions: e.transformChildren(t23.expressions) });
var Ks = (t23, e) => {
  let [n] = e.ancestors, { elements: s } = n, i = s.indexOf(t23), r = i === 0, a = i === s.length - 1, u = t23.sourceSpan.end - (a ? 1 : 0), p = t23.sourceSpan.start + (r ? 1 : 0), d = e.text.slice(p, u);
  return { type: "TemplateElement", value: { cooked: t23.text, raw: d }, tail: a, range: [p, u] };
};
var Zs = () => ({ type: "ThisExpression" });
var Xt = (t23) => (e, n) => ({ type: "UnaryExpression", prefix: true, operator: t23, argument: n.transformChild(e.expression) });
var ei = Xt("!");
var ti = Xt("typeof");
var ni = Xt("void");
var si = (t23, e) => ({ type: "UnaryExpression", prefix: true, argument: e.transformChild(t23.expr), operator: t23.operator });
var Rr = (t23) => {
  throw new Error(`Unexpected node type '${t23.constructor.name}'`);
};
var ii = Rr;
var ri = Is({ visitASTWithSource: () => Ps, visitBinary: () => Ls, visitCall: () => Rs, visitChain: () => Ds, visitConditional: () => Bs, visitImplicitReceiver: () => ii, visitInterpolation: () => Os, visitKeyedRead: () => Us, visitLiteralArray: () => Ns, visitLiteralMap: () => zs, visitLiteralPrimitive: () => Fs, visitNonNullAssert: () => js, visitParenthesizedExpression: () => Gs, visitPipe: () => Xs, visitPrefixNot: () => ei, visitPropertyRead: () => Ws, visitRegularExpressionLiteral: () => Vs, visitSafeCall: () => $s, visitSafeKeyedRead: () => Hs, visitSafePropertyRead: () => qs, visitSpreadElement: () => Js, visitTaggedTemplateLiteral: () => Ys, visitTemplateLiteral: () => Qs, visitTemplateLiteralElement: () => Ks, visitThisReceiver: () => Zs, visitTypeofExpression: () => ti, visitUnary: () => si, visitVoidExpression: () => ni });
var oi = ri;
var Ke = class Jt extends Ye {
  constructor({ node: e, text: n, ancestors: s = [] }) {
    super(n);
    __publicField(this, "node");
    __publicField(this, "ancestors");
    this.node = e, this.ancestors = s;
  }
  create(e, n, s = this.ancestors) {
    var _a7, _b5;
    return s[0] instanceof Ee && (e.extra = __spreadProps(__spreadValues({}, e.extra), { parenthesized: true })), super.createNode(e, (_b5 = (_a7 = e.range) != null ? _a7 : n) != null ? _b5 : this.node);
  }
  transformChild(e) {
    return new Jt({ node: e, ancestors: [this.node, ...this.ancestors], text: this.text }).transform();
  }
  transformChildren(e) {
    return e.map((n) => this.transformChild(n));
  }
  transform() {
    let { node: e } = this;
    if (e instanceof b) return this.create({ type: "NGEmptyExpression" });
    let n = e.visit(oi, this);
    return this.create(n, this.node);
  }
  static transform(e, n) {
    return new Jt({ node: e, text: n, ancestors: [] }).transform();
  }
};
var ai = class extends Ke {
  constructor(t23) {
    super({ node: t23, text: t23.source });
  }
};
var li = (t23, e) => Ke.transform(t23, e);
var ci = (t23) => new ai(t23).transform();
var ui = (t23, e) => (n, s, ...i) => {
  var _a7;
  return n | 1 && s == null ? void 0 : ((_a7 = e.call(s)) != null ? _a7 : s[t23]).apply(s, i);
};
function $r(t23) {
  return this[t23 < 0 ? this.length + t23 : t23];
}
var Dr = ui("at", function() {
  if (Array.isArray(this) || typeof this == "string") return $r;
});
var pi = Dr;
function hi(t23) {
  return t23 instanceof ye;
}
function fi(t23) {
  return t23 instanceof se;
}
var ae;
var J;
var m;
var di;
var C;
var Yt;
var Qt;
var Kt;
var mi;
var gi;
var vi;
var xi;
var le;
var Br = (le = class extends Ye {
  constructor(n, s) {
    super(s);
    ke(this, m);
    ke(this, ae);
    ke(this, J);
    st(this, ae, n), st(this, J, s);
    for (let i of n) v(this, m, mi).call(this, i);
  }
  get expressions() {
    return v(this, m, vi).call(this);
  }
}, ae = /* @__PURE__ */ new WeakMap(), J = /* @__PURE__ */ new WeakMap(), m = /* @__PURE__ */ new WeakSet(), di = function() {
  return U(this, ae)[0].key;
}, C = function(n, s) {
  return cn(le.prototype, this, "createNode").call(this, n, s);
}, Yt = function(n) {
  return li(n, this.text);
}, Qt = function(n) {
  return hn(n.slice(U(this, m, di).source.length));
}, Kt = function(n) {
  let s = U(this, J);
  if (s[n.start] !== '"' && s[n.start] !== "'") return;
  let i = s[n.start], r = false;
  for (let a = n.start + 1; a < s.length; a++) switch (s[a]) {
    case i:
      if (!r) {
        n.end = a + 1;
        return;
      }
    default:
      r = false;
      break;
    case "\\":
      r = !r;
      break;
  }
}, mi = function(n) {
  v(this, m, Kt).call(this, n.key.span), fi(n) && n.value && v(this, m, Kt).call(this, n.value.span);
}, gi = function(n) {
  if (!n.value || n.value.source) return n.value;
  let s = this.getCharacterIndex(/\S/, n.sourceSpan.start);
  return { source: "$implicit", span: { start: s, end: s } };
}, vi = function() {
  let n = U(this, ae), [s] = n, i = U(this, J).slice(s.sourceSpan.start, s.sourceSpan.end).trim().length === 0 ? n.slice(1) : n, r = [], a = null;
  for (let [u, p] of i.entries()) {
    if (a && hi(a) && fi(p) && p.value && p.value.source === a.key.source) {
      let d = v(this, m, C).call(this, { type: "NGMicrosyntaxKey", name: p.key.source }, p.key.span), w = (T, y) => __spreadValues(__spreadValues({}, T), this.transformSpan({ start: T.start, end: y })), D = (T) => __spreadProps(__spreadValues({}, w(T, d.end)), { alias: d }), _ = r.pop();
      if (_.type === "NGMicrosyntaxExpression") r.push(D(_));
      else if (_.type === "NGMicrosyntaxKeyedExpression") {
        let T = D(_.expression);
        r.push(w(__spreadProps(__spreadValues({}, _), { expression: T }), T.end));
      } else throw new Error(`Unexpected type ${_.type}`);
    } else r.push(v(this, m, xi).call(this, p, u));
    a = p;
  }
  return v(this, m, C).call(this, { type: "NGMicrosyntax", body: r }, r.length === 0 ? n[0].sourceSpan : { start: r[0].start, end: pi(0, r, -1).end });
}, xi = function(n, s) {
  if (hi(n)) {
    let { key: i, value: r } = n;
    return r ? s === 0 ? v(this, m, C).call(this, { type: "NGMicrosyntaxExpression", expression: v(this, m, Yt).call(this, r.ast), alias: null }, r) : v(this, m, C).call(this, { type: "NGMicrosyntaxKeyedExpression", key: v(this, m, C).call(this, { type: "NGMicrosyntaxKey", name: v(this, m, Qt).call(this, i.source) }, i.span), expression: v(this, m, C).call(this, { type: "NGMicrosyntaxExpression", expression: v(this, m, Yt).call(this, r.ast), alias: null }, r) }, [i.span.start, r.sourceSpan.end]) : v(this, m, C).call(this, { type: "NGMicrosyntaxKey", name: v(this, m, Qt).call(this, i.source) }, i.span);
  } else {
    let { key: i, sourceSpan: r } = n;
    if (/^let\s$/.test(U(this, J).slice(r.start, r.start + 4))) {
      let { value: a } = n;
      return v(this, m, C).call(this, { type: "NGMicrosyntaxLet", key: v(this, m, C).call(this, { type: "NGMicrosyntaxKey", name: i.source }, i.span), value: a ? v(this, m, C).call(this, { type: "NGMicrosyntaxKey", name: a.source }, a.span) : null }, [r.start, a ? a.span.end : i.span.end]);
    } else {
      let a = v(this, m, gi).call(this, n);
      return v(this, m, C).call(this, { type: "NGMicrosyntaxAs", key: v(this, m, C).call(this, { type: "NGMicrosyntaxKey", name: a.source }, a.span), alias: v(this, m, C).call(this, { type: "NGMicrosyntaxKey", name: i.source }, i.span) }, [a.span.start, i.span.end]);
    }
  }
}, le);
function wi(t23, e) {
  return new Br(t23, e).expressions;
}
var Ze = (t23) => (e) => {
  let { result: n, comments: s } = t23(e);
  return Object.assign(ci(n), { comments: s });
};
var et = Ze(Cs);
var Zt = Ze(_s);
var Or = Ze(Ts);
var en = Ze(ks);
var tn = (t23) => wi(bs(t23).result.templateBindings, t23);
function nn(t23) {
  var _a7, _b5, _c5, _d, _e2;
  let e = (_b5 = (_a7 = t23.range) == null ? void 0 : _a7[0]) != null ? _b5 : t23.start, n = (_e2 = (_d = (_c5 = t23.declaration) == null ? void 0 : _c5.decorators) != null ? _d : t23.decorators) == null ? void 0 : _e2[0];
  return n ? Math.min(nn(n), e) : e;
}
function Si(t23) {
  var _a7, _b5;
  return (_b5 = (_a7 = t23.range) == null ? void 0 : _a7[1]) != null ? _b5 : t23.end;
}
function tt(t23) {
  return { astFormat: "estree", parse(e) {
    let n = t23(e), { comments: s } = n;
    return delete n.comments, t23 === et && n.type !== "NGChainedExpression" && (n = __spreadProps(__spreadValues({}, n), { type: "NGChainedExpression", expressions: [n] })), { type: "NGRoot", node: n, comments: s };
  }, locStart: nn, locEnd: Si };
}
var Fr = tt(et);
var Vr = tt(Zt);
var Ur = tt(en);
var Hr = tt(tn);
export {
  Ei as default,
  sn as parsers
};
//# sourceMappingURL=angular-LKE4U4MN.mjs.map