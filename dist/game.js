(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a, prop, b2[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
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

  // node_modules/kaboom/dist/kaboom.mjs
  var Vt = Object.defineProperty;
  var As = /* @__PURE__ */ __name((i, r, a) => r in i ? Vt(i, r, { enumerable: true, configurable: true, writable: true, value: a }) : i[r] = a, "As");
  var l = /* @__PURE__ */ __name((i, r) => Vt(i, "name", { value: r, configurable: true }), "l");
  var Os = /* @__PURE__ */ __name((i, r) => {
    for (var a in r)
      Vt(i, a, { get: r[a], enumerable: true });
  }, "Os");
  var Q = /* @__PURE__ */ __name((i, r, a) => (As(i, typeof r != "symbol" ? r + "" : r, a), a), "Q");
  var Rs = (() => {
    for (var i = new Uint8Array(128), r = 0; r < 64; r++)
      i[r < 26 ? r + 65 : r < 52 ? r + 71 : r < 62 ? r - 4 : r * 4 - 205] = r;
    return (a) => {
      for (var o = a.length, v = new Uint8Array((o - (a[o - 1] == "=") - (a[o - 2] == "=")) * 3 / 4 | 0), E = 0, B = 0; E < o; ) {
        var g = i[a.charCodeAt(E++)], O = i[a.charCodeAt(E++)], F = i[a.charCodeAt(E++)], T = i[a.charCodeAt(E++)];
        v[B++] = g << 2 | O >> 4, v[B++] = O << 4 | F >> 2, v[B++] = F << 6 | T;
      }
      return v;
    };
  })();
  function ce(i) {
    return i * Math.PI / 180;
  }
  __name(ce, "ce");
  l(ce, "deg2rad");
  function ft(i) {
    return i * 180 / Math.PI;
  }
  __name(ft, "ft");
  l(ft, "rad2deg");
  function re(i, r, a) {
    return r > a ? re(i, a, r) : Math.min(Math.max(i, r), a);
  }
  __name(re, "re");
  l(re, "clamp");
  function Ge(i, r, a) {
    return i + (r - i) * a;
  }
  __name(Ge, "Ge");
  l(Ge, "lerp");
  function mt(i, r, a, o, v) {
    return o + (i - r) / (a - r) * (v - o);
  }
  __name(mt, "mt");
  l(mt, "map");
  function Ln(i, r, a, o, v) {
    return re(mt(i, r, a, o, v), o, v);
  }
  __name(Ln, "Ln");
  l(Ln, "mapc");
  var X = /* @__PURE__ */ __name(class {
    constructor(r = 0, a = r) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      this.x = r, this.y = a;
    }
    static fromAngle(r) {
      let a = ce(r);
      return new X(Math.cos(a), Math.sin(a));
    }
    clone() {
      return new X(this.x, this.y);
    }
    add(...r) {
      let a = b(...r);
      return new X(this.x + a.x, this.y + a.y);
    }
    sub(...r) {
      let a = b(...r);
      return new X(this.x - a.x, this.y - a.y);
    }
    scale(...r) {
      let a = b(...r);
      return new X(this.x * a.x, this.y * a.y);
    }
    dist(...r) {
      let a = b(...r);
      return this.sub(a).len();
    }
    sdist(...r) {
      let a = b(...r);
      return this.sub(a).slen();
    }
    len() {
      return Math.sqrt(this.dot(this));
    }
    slen() {
      return this.dot(this);
    }
    unit() {
      let r = this.len();
      return r === 0 ? new X(0) : this.scale(1 / r);
    }
    normal() {
      return new X(this.y, -this.x);
    }
    reflect(r) {
      return this.sub(r.scale(2 * this.dot(r)));
    }
    project(r) {
      return r.scale(r.dot(this) / r.len());
    }
    reject(r) {
      return this.sub(this.project(r));
    }
    dot(r) {
      return this.x * r.x + this.y * r.y;
    }
    cross(r) {
      return this.x * r.y - this.y * r.x;
    }
    angle(...r) {
      let a = b(...r);
      return ft(Math.atan2(this.y - a.y, this.x - a.x));
    }
    angleBetween(...r) {
      let a = b(...r);
      return ft(Math.atan2(this.cross(a), this.dot(a)));
    }
    lerp(r, a) {
      return new X(Ge(this.x, r.x, a), Ge(this.y, r.y, a));
    }
    slerp(r, a) {
      let o = this.dot(r), v = this.cross(r), E = Math.atan2(v, o);
      return this.scale(Math.sin((1 - a) * E)).add(r.scale(Math.sin(a * E))).scale(1 / v);
    }
    isZero() {
      return this.x === 0 && this.y === 0;
    }
    toFixed(r) {
      return new X(Number(this.x.toFixed(r)), Number(this.y.toFixed(r)));
    }
    transform(r) {
      return r.multVec2(this);
    }
    eq(r) {
      return this.x === r.x && this.y === r.y;
    }
    bbox() {
      return new V(this, 0, 0);
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  }, "X");
  var w = X;
  l(w, "Vec2"), Q(w, "LEFT", new X(-1, 0)), Q(w, "RIGHT", new X(1, 0)), Q(w, "UP", new X(0, -1)), Q(w, "DOWN", new X(0, 1));
  function b(...i) {
    if (i.length === 1) {
      if (i[0] instanceof w)
        return new w(i[0].x, i[0].y);
      if (Array.isArray(i[0]) && i[0].length === 2)
        return new w(...i[0]);
    }
    return new w(...i);
  }
  __name(b, "b");
  l(b, "vec2");
  var ue = /* @__PURE__ */ __name(class {
    constructor(r, a, o) {
      __publicField(this, "r", 255);
      __publicField(this, "g", 255);
      __publicField(this, "b", 255);
      this.r = re(r, 0, 255), this.g = re(a, 0, 255), this.b = re(o, 0, 255);
    }
    static fromArray(r) {
      return new ue(r[0], r[1], r[2]);
    }
    static fromHex(r) {
      if (typeof r == "number")
        return new ue(r >> 16 & 255, r >> 8 & 255, r >> 0 & 255);
      {
        let a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);
        return new ue(parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16));
      }
    }
    static fromHSL(r, a, o) {
      if (a == 0)
        return S(255 * o, 255 * o, 255 * o);
      let v = l((T, R, D) => (D < 0 && (D += 1), D > 1 && (D -= 1), D < 1 / 6 ? T + (R - T) * 6 * D : D < 1 / 2 ? R : D < 2 / 3 ? T + (R - T) * (2 / 3 - D) * 6 : T), "hue2rgb"), E = o < 0.5 ? o * (1 + a) : o + a - o * a, B = 2 * o - E, g = v(B, E, r + 1 / 3), O = v(B, E, r), F = v(B, E, r - 1 / 3);
      return new ue(Math.round(g * 255), Math.round(O * 255), Math.round(F * 255));
    }
    clone() {
      return new ue(this.r, this.g, this.b);
    }
    lighten(r) {
      return new ue(this.r + r, this.g + r, this.b + r);
    }
    darken(r) {
      return this.lighten(-r);
    }
    invert() {
      return new ue(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(r) {
      return new ue(this.r * r.r / 255, this.g * r.g / 255, this.b * r.b / 255);
    }
    eq(r) {
      return this.r === r.r && this.g === r.g && this.b === r.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
  }, "ue");
  var C = ue;
  l(C, "Color"), Q(C, "RED", S(255, 0, 0)), Q(C, "GREEN", S(0, 255, 0)), Q(C, "BLUE", S(0, 0, 255)), Q(C, "YELLOW", S(255, 255, 0)), Q(C, "MAGENTA", S(255, 0, 255)), Q(C, "CYAN", S(0, 255, 255)), Q(C, "WHITE", S(255, 255, 255)), Q(C, "BLACK", S(0, 0, 0));
  function S(...i) {
    if (i.length === 0)
      return new C(255, 255, 255);
    if (i.length === 1) {
      if (i[0] instanceof C)
        return i[0].clone();
      if (Array.isArray(i[0]) && i[0].length === 3)
        return C.fromArray(i[0]);
    }
    return new C(...i);
  }
  __name(S, "S");
  l(S, "rgb");
  var In = l((i, r, a) => C.fromHSL(i, r, a), "hsl2rgb");
  var G = /* @__PURE__ */ __name(class {
    constructor(r, a, o, v) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "w", 1);
      __publicField(this, "h", 1);
      this.x = r, this.y = a, this.w = o, this.h = v;
    }
    scale(r) {
      return new G(this.x + this.w * r.x, this.y + this.h * r.y, this.w * r.w, this.h * r.h);
    }
    clone() {
      return new G(this.x, this.y, this.w, this.h);
    }
    eq(r) {
      return this.x === r.x && this.y === r.y && this.w === r.w && this.h === r.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  }, "G");
  l(G, "Quad");
  function Gn(i, r, a, o) {
    return new G(i, r, a, o);
  }
  __name(Gn, "Gn");
  l(Gn, "quad");
  var I = /* @__PURE__ */ __name(class {
    constructor(r) {
      __publicField(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      r && (this.m = r);
    }
    static translate(r) {
      return new I([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r.x, r.y, 0, 1]);
    }
    static scale(r) {
      return new I([r.x, 0, 0, 0, 0, r.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(r) {
      r = ce(-r);
      let a = Math.cos(r), o = Math.sin(r);
      return new I([1, 0, 0, 0, 0, a, -o, 0, 0, o, a, 0, 0, 0, 0, 1]);
    }
    static rotateY(r) {
      r = ce(-r);
      let a = Math.cos(r), o = Math.sin(r);
      return new I([a, 0, o, 0, 0, 1, 0, 0, -o, 0, a, 0, 0, 0, 0, 1]);
    }
    static rotateZ(r) {
      r = ce(-r);
      let a = Math.cos(r), o = Math.sin(r);
      return new I([a, -o, 0, 0, o, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(r) {
      return this.m[12] += this.m[0] * r.x + this.m[4] * r.y, this.m[13] += this.m[1] * r.x + this.m[5] * r.y, this.m[14] += this.m[2] * r.x + this.m[6] * r.y, this.m[15] += this.m[3] * r.x + this.m[7] * r.y, this;
    }
    scale(r) {
      return this.m[0] *= r.x, this.m[4] *= r.y, this.m[1] *= r.x, this.m[5] *= r.y, this.m[2] *= r.x, this.m[6] *= r.y, this.m[3] *= r.x, this.m[7] *= r.y, this;
    }
    rotate(r) {
      r = ce(-r);
      let a = Math.cos(r), o = Math.sin(r), v = this.m[0], E = this.m[1], B = this.m[4], g = this.m[5];
      return this.m[0] = v * a + E * o, this.m[1] = -v * o + E * a, this.m[4] = B * a + g * o, this.m[5] = -B * o + g * a, this;
    }
    mult(r) {
      let a = [];
      for (let o = 0; o < 4; o++)
        for (let v = 0; v < 4; v++)
          a[o * 4 + v] = this.m[0 * 4 + v] * r.m[o * 4 + 0] + this.m[1 * 4 + v] * r.m[o * 4 + 1] + this.m[2 * 4 + v] * r.m[o * 4 + 2] + this.m[3 * 4 + v] * r.m[o * 4 + 3];
      return new I(a);
    }
    multVec2(r) {
      return new w(r.x * this.m[0] + r.y * this.m[4] + this.m[12], r.x * this.m[1] + r.y * this.m[5] + this.m[13]);
    }
    invert() {
      let r = [], a = this.m[10] * this.m[15] - this.m[14] * this.m[11], o = this.m[9] * this.m[15] - this.m[13] * this.m[11], v = this.m[9] * this.m[14] - this.m[13] * this.m[10], E = this.m[8] * this.m[15] - this.m[12] * this.m[11], B = this.m[8] * this.m[14] - this.m[12] * this.m[10], g = this.m[8] * this.m[13] - this.m[12] * this.m[9], O = this.m[6] * this.m[15] - this.m[14] * this.m[7], F = this.m[5] * this.m[15] - this.m[13] * this.m[7], T = this.m[5] * this.m[14] - this.m[13] * this.m[6], R = this.m[4] * this.m[15] - this.m[12] * this.m[7], D = this.m[4] * this.m[14] - this.m[12] * this.m[6], x = this.m[5] * this.m[15] - this.m[13] * this.m[7], d = this.m[4] * this.m[13] - this.m[12] * this.m[5], z = this.m[6] * this.m[11] - this.m[10] * this.m[7], oe = this.m[5] * this.m[11] - this.m[9] * this.m[7], et = this.m[5] * this.m[10] - this.m[9] * this.m[6], xe = this.m[4] * this.m[11] - this.m[8] * this.m[7], Se = this.m[4] * this.m[10] - this.m[8] * this.m[6], tt = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      r[0] = this.m[5] * a - this.m[6] * o + this.m[7] * v, r[4] = -(this.m[4] * a - this.m[6] * E + this.m[7] * B), r[8] = this.m[4] * o - this.m[5] * E + this.m[7] * g, r[12] = -(this.m[4] * v - this.m[5] * B + this.m[6] * g), r[1] = -(this.m[1] * a - this.m[2] * o + this.m[3] * v), r[5] = this.m[0] * a - this.m[2] * E + this.m[3] * B, r[9] = -(this.m[0] * o - this.m[1] * E + this.m[3] * g), r[13] = this.m[0] * v - this.m[1] * B + this.m[2] * g, r[2] = this.m[1] * O - this.m[2] * F + this.m[3] * T, r[6] = -(this.m[0] * O - this.m[2] * R + this.m[3] * D), r[10] = this.m[0] * x - this.m[1] * R + this.m[3] * d, r[14] = -(this.m[0] * T - this.m[1] * D + this.m[2] * d), r[3] = -(this.m[1] * z - this.m[2] * oe + this.m[3] * et), r[7] = this.m[0] * z - this.m[2] * xe + this.m[3] * Se, r[11] = -(this.m[0] * oe - this.m[1] * xe + this.m[3] * tt), r[15] = this.m[0] * et - this.m[1] * Se + this.m[2] * tt;
      let Ut = this.m[0] * r[0] + this.m[1] * r[4] + this.m[2] * r[8] + this.m[3] * r[12];
      for (let fe = 0; fe < 4; fe++)
        for (let Ne = 0; Ne < 4; Ne++)
          r[fe * 4 + Ne] *= 1 / Ut;
      return new I(r);
    }
    clone() {
      return new I([...this.m]);
    }
    toString() {
      return this.m.toString();
    }
  }, "I");
  l(I, "Mat4");
  function kt(i, r, a, o = Math.sin) {
    return i + (o(a) + 1) / 2 * (r - i);
  }
  __name(kt, "kt");
  l(kt, "wave");
  var Ps = 1103515245;
  var Ds = 12345;
  var Bn = 2147483648;
  var Ie = /* @__PURE__ */ __name(class {
    constructor(r) {
      __publicField(this, "seed");
      this.seed = r;
    }
    gen() {
      return this.seed = (Ps * this.seed + Ds) % Bn, this.seed / Bn;
    }
    genNumber(r, a) {
      return r + this.gen() * (a - r);
    }
    genVec2(r, a) {
      return new w(this.genNumber(r.x, a.x), this.genNumber(r.y, a.y));
    }
    genColor(r, a) {
      return new C(this.genNumber(r.r, a.r), this.genNumber(r.g, a.g), this.genNumber(r.b, a.b));
    }
    genAny(...r) {
      if (r.length === 0)
        return this.gen();
      if (r.length === 1) {
        if (typeof r[0] == "number")
          return this.genNumber(0, r[0]);
        if (r[0] instanceof w)
          return this.genVec2(b(0, 0), r[0]);
        if (r[0] instanceof C)
          return this.genColor(S(0, 0, 0), r[0]);
      } else if (r.length === 2) {
        if (typeof r[0] == "number" && typeof r[1] == "number")
          return this.genNumber(r[0], r[1]);
        if (r[0] instanceof w && r[1] instanceof w)
          return this.genVec2(r[0], r[1]);
        if (r[0] instanceof C && r[1] instanceof C)
          return this.genColor(r[0], r[1]);
      }
    }
  }, "Ie");
  l(Ie, "RNG");
  var jt = new Ie(Date.now());
  function Vn(i) {
    return i != null && (jt.seed = i), jt.seed;
  }
  __name(Vn, "Vn");
  l(Vn, "randSeed");
  function Qe(...i) {
    return jt.genAny(...i);
  }
  __name(Qe, "Qe");
  l(Qe, "rand");
  function _t(...i) {
    return Math.floor(Qe(...i));
  }
  __name(_t, "_t");
  l(_t, "randi");
  function jn(i) {
    return Qe() <= i;
  }
  __name(jn, "jn");
  l(jn, "chance");
  function kn(i) {
    return i[_t(i.length)];
  }
  __name(kn, "kn");
  l(kn, "choose");
  function _n(i, r) {
    return i.pos.x + i.width > r.pos.x && i.pos.x < r.pos.x + r.width && i.pos.y + i.height > r.pos.y && i.pos.y < r.pos.y + r.height;
  }
  __name(_n, "_n");
  l(_n, "testRectRect");
  function Ms(i, r) {
    if (i.p1.x === i.p2.x && i.p1.y === i.p2.y || r.p1.x === r.p2.x && r.p1.y === r.p2.y)
      return null;
    let a = (r.p2.y - r.p1.y) * (i.p2.x - i.p1.x) - (r.p2.x - r.p1.x) * (i.p2.y - i.p1.y);
    if (a === 0)
      return null;
    let o = ((r.p2.x - r.p1.x) * (i.p1.y - r.p1.y) - (r.p2.y - r.p1.y) * (i.p1.x - r.p1.x)) / a, v = ((i.p2.x - i.p1.x) * (i.p1.y - r.p1.y) - (i.p2.y - i.p1.y) * (i.p1.x - r.p1.x)) / a;
    return o < 0 || o > 1 || v < 0 || v > 1 ? null : o;
  }
  __name(Ms, "Ms");
  l(Ms, "testLineLineT");
  function Le(i, r) {
    let a = Ms(i, r);
    return a ? b(i.p1.x + a * (i.p2.x - i.p1.x), i.p1.y + a * (i.p2.y - i.p1.y)) : null;
  }
  __name(Le, "Le");
  l(Le, "testLineLine");
  function Nn(i, r) {
    if (Ve(i, r.p1) || Ve(i, r.p2))
      return true;
    let a = i.points();
    return !!Le(r, new ne(a[0], a[1])) || !!Le(r, new ne(a[1], a[2])) || !!Le(r, new ne(a[2], a[3])) || !!Le(r, new ne(a[3], a[0]));
  }
  __name(Nn, "Nn");
  l(Nn, "testRectLine");
  function Ve(i, r) {
    return r.x > i.pos.x && r.x < i.pos.x + i.width && r.y > i.pos.y && r.y < i.pos.y + i.height;
  }
  __name(Ve, "Ve");
  l(Ve, "testRectPoint");
  function Hn(i, r) {
    return i.center.sdist(r) < i.radius * i.radius;
  }
  __name(Hn, "Hn");
  l(Hn, "testCirclePoint");
  function qn(i, r) {
    let a = false, o = i.pts;
    for (let v = 0, E = o.length - 1; v < o.length; E = v++)
      o[v].y > r.y != o[E].y > r.y && r.x < (o[E].x - o[v].x) * (r.y - o[v].y) / (o[E].y - o[v].y) + o[v].x && (a = !a);
    return a;
  }
  __name(qn, "qn");
  l(qn, "testPolygonPoint");
  var ne = /* @__PURE__ */ __name(class {
    constructor(r, a) {
      __publicField(this, "p1");
      __publicField(this, "p2");
      this.p1 = r.clone(), this.p2 = a.clone();
    }
    transform(r) {
      return new ne(r.multVec2(this.p1), r.multVec2(this.p2));
    }
    bbox() {
      return V.fromPoints(this.p1, this.p2);
    }
    area() {
      return this.p1.dist(this.p2);
    }
    clone() {
      return new ne(this.p1, this.p2);
    }
  }, "ne");
  l(ne, "Line");
  var V = /* @__PURE__ */ __name(class {
    constructor(r, a, o) {
      __publicField(this, "pos");
      __publicField(this, "width");
      __publicField(this, "height");
      this.pos = r.clone(), this.width = a, this.height = o;
    }
    static fromPoints(r, a) {
      return new V(r.clone(), a.x - r.x, a.y - r.y);
    }
    center() {
      return new w(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    points() {
      return [this.pos, this.pos.add(this.width, 0), this.pos.add(this.width, this.height), this.pos.add(0, this.height)];
    }
    transform(r) {
      return new se(this.points().map((a) => r.multVec2(a)));
    }
    bbox() {
      return this.clone();
    }
    area() {
      return this.width * this.height;
    }
    clone() {
      return new V(this.pos.clone(), this.width, this.height);
    }
    distToPoint(r) {
      return Math.sqrt(this.sdistToPoint(r));
    }
    sdistToPoint(r) {
      let a = this.pos, o = this.pos.add(this.width, this.height), v = Math.max(a.x - r.x, 0, r.x - o.x), E = Math.max(a.y - r.y, 0, r.y - o.y);
      return v * v + E * E;
    }
  }, "V");
  l(V, "Rect");
  var de = /* @__PURE__ */ __name(class {
    constructor(r, a) {
      __publicField(this, "center");
      __publicField(this, "radius");
      this.center = r.clone(), this.radius = a;
    }
    transform(r) {
      return new Ue(this.center, this.radius, this.radius).transform(r);
    }
    bbox() {
      return V.fromPoints(this.center.sub(b(this.radius)), this.center.add(b(this.radius)));
    }
    area() {
      return this.radius * this.radius * Math.PI;
    }
    clone() {
      return new de(this.center, this.radius);
    }
  }, "de");
  l(de, "Circle");
  var Ue = /* @__PURE__ */ __name(class {
    constructor(r, a, o) {
      __publicField(this, "center");
      __publicField(this, "radiusX");
      __publicField(this, "radiusY");
      this.center = r.clone(), this.radiusX = a, this.radiusY = o;
    }
    transform(r) {
      return new Ue(r.multVec2(this.center), r.m[0] * this.radiusX, r.m[5] * this.radiusY);
    }
    bbox() {
      return V.fromPoints(this.center.sub(b(this.radiusX, this.radiusY)), this.center.add(b(this.radiusX, this.radiusY)));
    }
    area() {
      return this.radiusX * this.radiusY * Math.PI;
    }
    clone() {
      return new Ue(this.center, this.radiusX, this.radiusY);
    }
  }, "Ue");
  l(Ue, "Ellipse");
  var se = /* @__PURE__ */ __name(class {
    constructor(r) {
      __publicField(this, "pts");
      if (r.length < 3)
        throw new Error("Polygons should have at least 3 vertices");
      this.pts = r;
    }
    transform(r) {
      return new se(this.pts.map((a) => r.multVec2(a)));
    }
    bbox() {
      let r = b(Number.MAX_VALUE), a = b(-Number.MAX_VALUE);
      for (let o of this.pts)
        r.x = Math.min(r.x, o.x), a.x = Math.max(a.x, o.x), r.y = Math.min(r.y, o.y), a.y = Math.max(a.y, o.y);
      return V.fromPoints(r, a);
    }
    area() {
      let r = 0, a = this.pts.length;
      for (let o = 0; o < a; o++) {
        let v = this.pts[o], E = this.pts[(o + 1) % a];
        r += v.x * E.y * 0.5, r -= E.x * v.y * 0.5;
      }
      return Math.abs(r);
    }
    clone() {
      return new se(this.pts.map((r) => r.clone()));
    }
  }, "se");
  l(se, "Polygon");
  function $n(i, r) {
    let a = Number.MAX_VALUE, o = b(0);
    for (let v of [i, r])
      for (let E = 0; E < v.pts.length; E++) {
        let B = v.pts[E], O = v.pts[(E + 1) % v.pts.length].sub(B).normal().unit(), F = Number.MAX_VALUE, T = -Number.MAX_VALUE;
        for (let d = 0; d < i.pts.length; d++) {
          let z = i.pts[d].dot(O);
          F = Math.min(F, z), T = Math.max(T, z);
        }
        let R = Number.MAX_VALUE, D = -Number.MAX_VALUE;
        for (let d = 0; d < r.pts.length; d++) {
          let z = r.pts[d].dot(O);
          R = Math.min(R, z), D = Math.max(D, z);
        }
        let x = Math.min(T, D) - Math.max(F, R);
        if (x < 0)
          return null;
        if (x < Math.abs(a)) {
          let d = D - F, z = R - T;
          a = Math.abs(d) < Math.abs(z) ? d : z, o = O.scale(a);
        }
      }
    return o;
  }
  __name($n, "$n");
  l($n, "sat");
  var pt = 2.5949095;
  var zn = 1.70158 + 1;
  var Yn = 2 * Math.PI / 3;
  var Xn = 2 * Math.PI / 4.5;
  var gt = { linear: (i) => i, easeInSine: (i) => 1 - Math.cos(i * Math.PI / 2), easeOutSine: (i) => Math.sin(i * Math.PI / 2), easeInOutSine: (i) => -(Math.cos(Math.PI * i) - 1) / 2, easeInQuad: (i) => i * i, easeOutQuad: (i) => 1 - (1 - i) * (1 - i), easeInOutQuad: (i) => i < 0.5 ? 2 * i * i : 1 - Math.pow(-2 * i + 2, 2) / 2, easeInCubic: (i) => i * i * i, easeOutCubic: (i) => 1 - Math.pow(1 - i, 3), easeInOutCubic: (i) => i < 0.5 ? 4 * i * i * i : 1 - Math.pow(-2 * i + 2, 3) / 2, easeInQuart: (i) => i * i * i * i, easeOutQuart: (i) => 1 - Math.pow(1 - i, 4), easeInOutQuart: (i) => i < 0.5 ? 8 * i * i * i * i : 1 - Math.pow(-2 * i + 2, 4) / 2, easeInQuint: (i) => i * i * i * i * i, easeOutQuint: (i) => 1 - Math.pow(1 - i, 5), easeInOutQuint: (i) => i < 0.5 ? 16 * i * i * i * i * i : 1 - Math.pow(-2 * i + 2, 5) / 2, easeInExpo: (i) => i === 0 ? 0 : Math.pow(2, 10 * i - 10), easeOutExpo: (i) => i === 1 ? 1 : 1 - Math.pow(2, -10 * i), easeInOutExpo: (i) => i === 0 ? 0 : i === 1 ? 1 : i < 0.5 ? Math.pow(2, 20 * i - 10) / 2 : (2 - Math.pow(2, -20 * i + 10)) / 2, easeInCirc: (i) => 1 - Math.sqrt(1 - Math.pow(i, 2)), easeOutCirc: (i) => Math.sqrt(1 - Math.pow(i - 1, 2)), easeInOutCirc: (i) => i < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * i, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * i + 2, 2)) + 1) / 2, easeInBack: (i) => zn * i * i * i - 1.70158 * i * i, easeOutBack: (i) => 1 + zn * Math.pow(i - 1, 3) + 1.70158 * Math.pow(i - 1, 2), easeInOutBack: (i) => i < 0.5 ? Math.pow(2 * i, 2) * ((pt + 1) * 2 * i - pt) / 2 : (Math.pow(2 * i - 2, 2) * ((pt + 1) * (i * 2 - 2) + pt) + 2) / 2, easeInElastic: (i) => i === 0 ? 0 : i === 1 ? 1 : -Math.pow(2, 10 * i - 10) * Math.sin((i * 10 - 10.75) * Yn), easeOutElastic: (i) => i === 0 ? 0 : i === 1 ? 1 : Math.pow(2, -10 * i) * Math.sin((i * 10 - 0.75) * Yn) + 1, easeInOutElastic: (i) => i === 0 ? 0 : i === 1 ? 1 : i < 0.5 ? -(Math.pow(2, 20 * i - 10) * Math.sin((20 * i - 11.125) * Xn)) / 2 : Math.pow(2, -20 * i + 10) * Math.sin((20 * i - 11.125) * Xn) / 2 + 1, easeInBounce: (i) => 1 - gt.easeOutBounce(1 - i), easeOutBounce: (i) => i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375 : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375, easeInOutBounce: (i) => i < 0.5 ? (1 - gt.easeOutBounce(1 - 2 * i)) / 2 : (1 + gt.easeOutBounce(2 * i - 1)) / 2 };
  var Ze = gt;
  var Ee = /* @__PURE__ */ __name(class extends Map {
    constructor(...r) {
      super(...r);
      __publicField(this, "lastID");
      this.lastID = 0;
    }
    push(r) {
      let a = this.lastID;
      return this.set(a, r), this.lastID++, a;
    }
    pushd(r) {
      let a = this.push(r);
      return () => this.delete(a);
    }
  }, "Ee");
  l(Ee, "IDList");
  var Z = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "handlers", new Ee());
    }
    add(r) {
      let o = { paused: false, cancel: this.handlers.pushd((...v) => {
        o.paused || r(...v);
      }) };
      return o;
    }
    addOnce(r) {
      let a = this.add((...o) => {
        a.cancel(), r(...o);
      });
      return a;
    }
    next() {
      return new Promise((r) => this.addOnce(r));
    }
    trigger(...r) {
      this.handlers.forEach((a) => a(...r));
    }
    numListeners() {
      return this.handlers.size;
    }
  }, "Z");
  l(Z, "Event");
  var he = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "handlers", /* @__PURE__ */ new Map());
    }
    on(r, a) {
      return this.handlers.get(r) || this.handlers.set(r, new Z()), this.handlers.get(r).add(a);
    }
    onOnce(r, a) {
      let o = this.on(r, (...v) => {
        o.cancel(), a(...v);
      });
      return o;
    }
    next(r) {
      return new Promise((a) => {
        this.onOnce(r, a);
      });
    }
    trigger(r, ...a) {
      this.handlers.get(r) && this.handlers.get(r).trigger(...a);
    }
    remove(r) {
      this.handlers.delete(r);
    }
    clear() {
      this.handlers = /* @__PURE__ */ new Map();
    }
    numListeners(r) {
      var _a, _b;
      return (_b = (_a = this.handlers.get(r)) == null ? void 0 : _a.numListeners()) != null ? _b : 0;
    }
  }, "he");
  l(he, "EventHandler");
  function Nt(i, r) {
    let a = typeof i, o = typeof r;
    if (a !== o)
      return false;
    if (a === "object" && o === "object" && i !== null && r !== null) {
      let v = Object.keys(i), E = Object.keys(r);
      if (v.length !== E.length)
        return false;
      for (let B of v) {
        let g = i[B], O = r[B];
        if (!(typeof g == "function" && typeof O == "function") && !Nt(g, O))
          return false;
      }
      return true;
    }
    return i === r;
  }
  __name(Nt, "Nt");
  l(Nt, "deepEq");
  function Fs(i) {
    let r = window.atob(i), a = r.length, o = new Uint8Array(a);
    for (let v = 0; v < a; v++)
      o[v] = r.charCodeAt(v);
    return o.buffer;
  }
  __name(Fs, "Fs");
  l(Fs, "base64ToArrayBuffer");
  function Kn(i) {
    return Fs(i.split(",")[1]);
  }
  __name(Kn, "Kn");
  l(Kn, "dataURLToArrayBuffer");
  function wt(i, r) {
    let a = document.createElement("a");
    a.href = r, a.download = i, a.click();
  }
  __name(wt, "wt");
  l(wt, "download");
  function Ht(i, r) {
    wt(i, "data:text/plain;charset=utf-8," + r);
  }
  __name(Ht, "Ht");
  l(Ht, "downloadText");
  function Wn(i, r) {
    Ht(i, JSON.stringify(r));
  }
  __name(Wn, "Wn");
  l(Wn, "downloadJSON");
  function qt(i, r) {
    let a = URL.createObjectURL(r);
    wt(i, a), URL.revokeObjectURL(a);
  }
  __name(qt, "qt");
  l(qt, "downloadBlob");
  function $t(i) {
    return i.match(/^data:\w+\/\w+;base64,.+/);
  }
  __name($t, "$t");
  l($t, "isDataURL");
  var Jn = (() => {
    let i = 0;
    return () => i++;
  })();
  var je = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "dts", []);
      __publicField(this, "timer", 0);
      __publicField(this, "fps", 0);
    }
    tick(r) {
      this.dts.push(r), this.timer += r, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((a, o) => a + o) / this.dts.length)), this.dts = []);
    }
  }, "je");
  l(je, "FPSCounter");
  var pe = /* @__PURE__ */ __name(class {
    constructor(r, a) {
      __publicField(this, "time");
      __publicField(this, "action");
      __publicField(this, "finished", false);
      __publicField(this, "paused", false);
      this.time = r, this.action = a;
    }
    tick(r) {
      return this.finished || this.paused ? false : (this.time -= r, this.time <= 0 ? (this.action(), this.finished = true, this.time = 0, true) : false);
    }
    reset(r) {
      this.time = r, this.finished = false;
    }
  }, "pe");
  l(pe, "Timer");
  var Qn = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
  var Ls = {};
  Os(Ls, { default: () => zt });
  var zt = Rs("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L5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  var Zn = "data:image/png;base64,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";
  var er = "data:image/png;base64,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";
  var js = "3000.0.0-alpha.23";
  var tr = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
  var ks = /* @__PURE__ */ new Set([" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"]);
  var nr = ["left", "middle", "right", "back", "forward"];
  var rr = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var ir = 0;
  var sr = 3;
  var _s = 0;
  var Ns = 3;
  var Hs = -1200;
  var qs = 1200;
  var bt = "topleft";
  var or = 64;
  var $s = "monospace";
  var vt = "monospace";
  var zs = 36;
  var ar = 64;
  var ur = 256;
  var cr = 2048;
  var hr = 2048;
  var lr = 2048;
  var dr = 2048;
  var fr = 0.1;
  var Ys = 1;
  var gr = [{ name: "a_pos", size: 2 }, { name: "a_uv", size: 2 }, { name: "a_color", size: 4 }];
  var yt = gr.reduce((i, r) => i + r.size, 0);
  var wr = 2048;
  var mr = wr * 4 * yt;
  var pr = wr * 6;
  var Xs = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 0.0, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
  var Ks = `
precision mediump float;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
  var Yt = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var Xt = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var Ws = /* @__PURE__ */ new Set(["id", "require"]);
  var Js = /* @__PURE__ */ new Set(["add", "update", "draw", "destroy", "inspect", "drawInspect"]);
  function Qs(i) {
    i.requestFullscreen ? i.requestFullscreen() : i.webkitRequestFullscreen && i.webkitRequestFullscreen();
  }
  __name(Qs, "Qs");
  l(Qs, "enterFullscreen");
  function Zs() {
    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
  }
  __name(Zs, "Zs");
  l(Zs, "exitFullscreen");
  function eo() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  }
  __name(eo, "eo");
  l(eo, "getFullscreenElement");
  function ke(i) {
    switch (i) {
      case "topleft":
        return new w(-1, -1);
      case "top":
        return new w(0, -1);
      case "topright":
        return new w(1, -1);
      case "left":
        return new w(-1, 0);
      case "center":
        return new w(0, 0);
      case "right":
        return new w(1, 0);
      case "botleft":
        return new w(-1, 1);
      case "bot":
        return new w(0, 1);
      case "botright":
        return new w(1, 1);
      default:
        return i;
    }
  }
  __name(ke, "ke");
  l(ke, "anchorPt");
  function to(i) {
    switch (i) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  __name(to, "to");
  l(to, "alignPt");
  function Kt(i) {
    return i.createBuffer(1, 1, 44100);
  }
  __name(Kt, "Kt");
  l(Kt, "createEmptyAudioBuffer");
  var _e = /* @__PURE__ */ __name(class {
    constructor() {
      __publicField(this, "pressed", /* @__PURE__ */ new Set([]));
      __publicField(this, "pressedRepeat", /* @__PURE__ */ new Set([]));
      __publicField(this, "released", /* @__PURE__ */ new Set([]));
      __publicField(this, "down", /* @__PURE__ */ new Set([]));
    }
    update() {
      this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
    }
    press(r) {
      this.pressed.add(r), this.pressedRepeat.add(r), this.down.add(r);
    }
    pressRepeat(r) {
      this.pressedRepeat.add(r);
    }
    release(r) {
      this.down.delete(r), this.pressed.delete(r), this.released.add(r);
    }
  }, "_e");
  l(_e, "ButtonState");
  var Oo = l((i = {}) => {
    let r = [], a = (() => {
      var _a, _b, _c;
      let e = (_a = i.root) != null ? _a : document.body;
      e === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
      let t = (_b = i.canvas) != null ? _b : (() => {
        let M = document.createElement("canvas");
        return e.appendChild(M), M;
      })(), n = (_c = i.scale) != null ? _c : 1, u = !(i.width && i.height && !i.stretch && !i.letterbox), h = t.parentElement.offsetWidth, s = t.parentElement.offsetHeight;
      u ? (t.width = h, t.height = s) : (t.width = i.width * n, t.height = i.height * n);
      let c = t.width, f = t.height, m = i.pixelDensity || window.devicePixelRatio;
      t.width *= m, t.height *= m;
      let p = [`width: ${c}px`, `height: ${f}px`, "outline: none", "cursor: default"];
      i.crisp && (p.push("image-rendering: pixelated"), p.push("image-rendering: crisp-edges")), t.style.cssText = p.join(";"), t.tabIndex = 0;
      let y = document.createElement("canvas");
      y.width = ur, y.height = ur;
      let U = y.getContext("2d", { willReadFrequently: true });
      return { canvas: t, pixelDensity: m, fontCacheCanvas: y, fontCacheCtx: U, stretchToParent: u, lastParentWidth: h, lastParentHeight: s, keyState: new _e(), mouseState: new _e(), virtualButtonState: new _e(), charInputted: [], isMouseMoved: false, mouseStarted: false, mousePos: new w(0, 0), mouseDeltaPos: new w(0, 0), time: 0, realTime: 0, skipTime: false, dt: 0, numFrames: 0, isTouchScreen: "ontouchstart" in window || navigator.maxTouchPoints > 0, loopID: null, stopped: false, paused: false, fpsCounter: new je() };
    })(), o = a.canvas.getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
    class v {
      constructor(t, n, u = {}) {
        __publicField(this, "src", null);
        __publicField(this, "glTex");
        __publicField(this, "width");
        __publicField(this, "height");
        this.glTex = o.createTexture(), r.push(() => this.free()), this.bind(), t && n && o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, t, n, 0, o.RGBA, o.UNSIGNED_BYTE, null), this.width = t, this.height = n;
        let h = (() => {
          var _a;
          switch ((_a = u.filter) != null ? _a : i.texFilter) {
            case "linear":
              return o.LINEAR;
            case "nearest":
              return o.NEAREST;
            default:
              return o.NEAREST;
          }
        })(), s = (() => {
          switch (u.wrap) {
            case "repeat":
              return o.REPEAT;
            case "clampToEdge":
              return o.CLAMP_TO_EDGE;
            default:
              return o.CLAMP_TO_EDGE;
          }
        })();
        o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, h), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, h), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, s), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, s), this.unbind();
      }
      static fromImage(t, n = {}) {
        let u = new v(0, 0, n);
        return u.bind(), o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, t), u.width = t.width, u.height = t.height, u.unbind(), u.src = t, u;
      }
      update(t, n = 0, u = 0) {
        this.bind(), o.texSubImage2D(o.TEXTURE_2D, 0, n, u, o.RGBA, o.UNSIGNED_BYTE, t), this.unbind();
      }
      bind() {
        o.bindTexture(o.TEXTURE_2D, this.glTex);
      }
      unbind() {
        o.bindTexture(o.TEXTURE_2D, null);
      }
      free() {
        o.deleteTexture(this.glTex);
      }
    }
    __name(v, "v");
    l(v, "Texture");
    class E {
      constructor(t, n) {
        __publicField(this, "tex");
        __publicField(this, "canvas");
        __publicField(this, "ctx");
        __publicField(this, "x", 0);
        __publicField(this, "y", 0);
        __publicField(this, "curHeight", 0);
        this.canvas = document.createElement("canvas"), this.canvas.width = t, this.canvas.height = n, this.tex = v.fromImage(this.canvas), this.ctx = this.canvas.getContext("2d");
      }
      add(t) {
        if (t.width > this.canvas.width || t.height > this.canvas.height)
          throw new Error(`Texture size (${t.width} x ${t.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`);
        this.x + t.width > this.canvas.width && (this.x = 0, this.y += this.curHeight, this.curHeight = 0), this.y + t.height > this.canvas.height && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.tex = v.fromImage(this.canvas), this.x = 0, this.y = 0, this.curHeight = 0);
        let n = new w(this.x, this.y);
        return this.x += t.width, t.height > this.curHeight && (this.curHeight = t.height), t instanceof ImageData ? this.ctx.putImageData(t, n.x, n.y) : this.ctx.drawImage(t, n.x, n.y), this.tex.update(this.canvas), [this.tex, new G(n.x / this.canvas.width, n.y / this.canvas.height, t.width / this.canvas.width, t.height / this.canvas.height)];
      }
    }
    __name(E, "E");
    l(E, "TexPacker");
    class B {
      constructor(t, n, u = {}) {
        __publicField(this, "tex");
        __publicField(this, "glFrameBuffer");
        __publicField(this, "glRenderBuffer");
        this.tex = new v(t, n, u), this.glFrameBuffer = o.createFramebuffer(), this.glRenderBuffer = o.createRenderbuffer(), r.push(() => this.free()), this.bind(), o.renderbufferStorage(o.RENDERBUFFER, o.DEPTH_STENCIL, t, n), o.framebufferTexture2D(o.FRAMEBUFFER, o.COLOR_ATTACHMENT0, o.TEXTURE_2D, this.tex.glTex, 0), o.framebufferRenderbuffer(o.FRAMEBUFFER, o.DEPTH_STENCIL_ATTACHMENT, o.RENDERBUFFER, this.glRenderBuffer), this.unbind();
      }
      bind() {
        o.bindFramebuffer(o.FRAMEBUFFER, this.glFrameBuffer), o.bindRenderbuffer(o.RENDERBUFFER, this.glRenderBuffer);
      }
      unbind() {
        o.bindFramebuffer(o.FRAMEBUFFER, null), o.bindRenderbuffer(o.RENDERBUFFER, null);
      }
      free() {
        o.deleteFramebuffer(this.glFrameBuffer), o.deleteRenderbuffer(this.glRenderBuffer);
      }
    }
    __name(B, "B");
    l(B, "FrameBuffer");
    let g = (() => {
      var _a;
      let e = Et(Yt, Xt), t = v.fromImage(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), n = new B(o.drawingBufferWidth, o.drawingBufferHeight);
      if (i.background) {
        let c = C.fromArray(i.background);
        o.clearColor(c.r / 255, c.g / 255, c.b / 255, ((_a = i.background[3]) != null ? _a : 255) / 255);
      }
      o.enable(o.BLEND), o.enable(o.SCISSOR_TEST), o.blendFuncSeparate(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA, o.ONE, o.ONE_MINUS_SRC_ALPHA);
      let u = o.createBuffer();
      o.bindBuffer(o.ARRAY_BUFFER, u), o.bufferData(o.ARRAY_BUFFER, mr * 4, o.DYNAMIC_DRAW), gr.reduce((c, f, m) => (o.vertexAttribPointer(m, f.size, o.FLOAT, false, yt * 4, c), o.enableVertexAttribArray(m), c + f.size * 4), 0), o.bindBuffer(o.ARRAY_BUFFER, null);
      let h = o.createBuffer();
      o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, h), o.bufferData(o.ELEMENT_ARRAY_BUFFER, pr * 4, o.DYNAMIC_DRAW), o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, null);
      let s = v.fromImage(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { drawCalls: 0, lastDrawCalls: 0, defShader: e, curShader: e, frameBuffer: n, postShader: null, postShaderUniform: null, defTex: t, curTex: t, curUniform: {}, vbuf: u, ibuf: h, vqueue: [], iqueue: [], transform: new I(), transformStack: [], bgTex: s, width: i.width, height: i.height, viewport: { x: 0, y: 0, width: o.drawingBufferWidth, height: o.drawingBufferHeight } };
    })();
    class O {
      constructor(t, n, u = {}) {
        __publicField(this, "tex");
        __publicField(this, "frames", [new G(0, 0, 1, 1)]);
        __publicField(this, "anims", {});
        this.tex = t, n && (this.frames = n), this.anims = u;
      }
      static from(t, n = {}) {
        return typeof t == "string" ? O.fromURL(t, n) : Promise.resolve(O.fromImage(t, n));
      }
      static fromImage(t, n = {}) {
        var _a;
        let [u, h] = x.packer.add(t), s = n.frames ? n.frames.map((c) => new G(h.x + c.x * h.w, h.y + c.y * h.h, c.w * h.w, c.h * h.h)) : Wt(n.sliceX || 1, n.sliceY || 1, h.x, h.y, h.w, h.h);
        return new O(u, s, (_a = n.anims) != null ? _a : {});
      }
      static fromURL(t, n = {}) {
        return fe(t).then((u) => O.fromImage(u, n));
      }
    }
    __name(O, "O");
    l(O, "SpriteData");
    class F {
      constructor(t) {
        __publicField(this, "buf");
        this.buf = t;
      }
      static fromArrayBuffer(t) {
        return new Promise((n, u) => T.ctx.decodeAudioData(t, n, u)).then((n) => new F(n));
      }
      static fromURL(t) {
        return $t(t) ? F.fromArrayBuffer(Kn(t)) : Ut(t).then((n) => F.fromArrayBuffer(n));
      }
    }
    __name(F, "F");
    l(F, "SoundData");
    let T = (() => {
      let e = new (window.AudioContext || window.webkitAudioContext)(), t = e.createGain();
      t.connect(e.destination);
      let n = new F(Kt(e));
      return e.decodeAudioData(zt.buffer.slice(0)).then((u) => {
        n.buf = u;
      }).catch((u) => {
        console.error("Failed to load burp: ", u);
      }), { ctx: e, masterNode: t, burpSnd: n };
    })();
    class R {
      constructor(t) {
        __publicField(this, "done", false);
        __publicField(this, "data", null);
        __publicField(this, "error", null);
        __publicField(this, "onLoadEvents", new Z());
        __publicField(this, "onErrorEvents", new Z());
        __publicField(this, "onFinishEvents", new Z());
        t.then((n) => {
          this.data = n, this.onLoadEvents.trigger(n);
        }).catch((n) => {
          if (this.error = n, this.onErrorEvents.numListeners() > 0)
            this.onErrorEvents.trigger(n);
          else
            throw n;
        }).finally(() => {
          this.onFinishEvents.trigger(), this.done = true;
        });
      }
      static loaded(t) {
        let n = new R(Promise.resolve(t));
        return n.data = t, n.done = true, n;
      }
      onLoad(t) {
        return this.onLoadEvents.add(t), this;
      }
      onError(t) {
        return this.onErrorEvents.add(t), this;
      }
      onFinish(t) {
        return this.onFinishEvents.add(t), this;
      }
      then(t) {
        return this.onLoad(t);
      }
      catch(t) {
        return this.onError(t);
      }
      finally(t) {
        return this.onFinish(t);
      }
    }
    __name(R, "R");
    l(R, "Asset");
    class D {
      constructor() {
        __publicField(this, "assets", /* @__PURE__ */ new Map());
        __publicField(this, "lastUID", 0);
      }
      add(t, n) {
        let u = t != null ? t : this.lastUID++ + "", h = new R(n);
        return this.assets.set(u, h), h;
      }
      addLoaded(t, n) {
        let u = t != null ? t : this.lastUID++ + "", h = R.loaded(n);
        return this.assets.set(u, h), h;
      }
      get(t) {
        return this.assets.get(t);
      }
      progress() {
        if (this.assets.size === 0)
          return 1;
        let t = 0;
        return this.assets.forEach((n) => {
          n.done && t++;
        }), t / this.assets.size;
      }
    }
    __name(D, "D");
    l(D, "AssetBucket");
    let x = { urlPrefix: "", sprites: new D(), fonts: new D(), bitmapFonts: new D(), sounds: new D(), shaders: new D(), custom: new D(), packer: new E(lr, dr), loaded: false }, d = { ev: new he(), objEvents: new he(), root: bn([]), gravity: 0, scenes: {}, logs: [], cam: { pos: null, scale: new w(1), angle: 0, shake: 0, transform: new I() } };
    function z(e) {
      return x.custom.add(null, e);
    }
    __name(z, "z");
    l(z, "load");
    function oe() {
      let e = [x.sprites, x.sounds, x.shaders, x.fonts, x.bitmapFonts, x.custom];
      return e.reduce((t, n) => t + n.progress(), 0) / e.length;
    }
    __name(oe, "oe");
    l(oe, "loadProgress");
    function et(e) {
      return e !== void 0 && (x.urlPrefix = e), x.urlPrefix;
    }
    __name(et, "et");
    l(et, "loadRoot");
    function xe(e) {
      let t = x.urlPrefix + e;
      return fetch(t).then((n) => {
        if (!n.ok)
          throw new Error(`Failed to fetch ${t}`);
        return n;
      });
    }
    __name(xe, "xe");
    l(xe, "fetchURL");
    function Se(e) {
      return xe(e).then((t) => t.json());
    }
    __name(Se, "Se");
    l(Se, "fetchJSON");
    function tt(e) {
      return xe(e).then((t) => t.text());
    }
    __name(tt, "tt");
    l(tt, "fetchText");
    function Ut(e) {
      return xe(e).then((t) => t.arrayBuffer());
    }
    __name(Ut, "Ut");
    l(Ut, "fetchArrayBuffer");
    function fe(e) {
      let t = new Image();
      return t.crossOrigin = "anonymous", t.src = $t(e) ? e : x.urlPrefix + e, new Promise((n, u) => {
        t.onload = () => n(t), t.onerror = () => u(new Error(`Failed to load image from "${e}"`));
      });
    }
    __name(fe, "fe");
    l(fe, "loadImg");
    function Ne(e, t, n = {}) {
      let u = new FontFace(e, typeof t == "string" ? `url(${t})` : t);
      return document.fonts.add(u), x.fonts.add(e, u.load().catch((h) => {
        throw new Error(`Failed to load font from "${t}": ${h}`);
      }));
    }
    __name(Ne, "Ne");
    l(Ne, "loadFont");
    function br(e, t, n, u, h = {}) {
      return x.bitmapFonts.add(e, fe(t).then((s) => {
        var _a;
        return Rr(v.fromImage(s, h), n, u, (_a = h.chars) != null ? _a : rr);
      }));
    }
    __name(br, "br");
    l(br, "loadBitmapFont");
    function Wt(e = 1, t = 1, n = 0, u = 0, h = 1, s = 1) {
      let c = [], f = h / e, m = s / t;
      for (let p = 0; p < t; p++)
        for (let y = 0; y < e; y++)
          c.push(new G(n + y * f, u + p * m, f, m));
      return c;
    }
    __name(Wt, "Wt");
    l(Wt, "slice");
    function Jt(e, t) {
      return z(typeof t == "string" ? new Promise((n, u) => {
        Se(t).then((h) => {
          Jt(e, h).then(n).catch(u);
        });
      }) : O.from(e).then((n) => {
        let u = {};
        for (let h in t) {
          let s = t[h], c = n.frames[0], f = lr * c.w, m = dr * c.h, p = s.frames ? s.frames.map((U) => new G(c.x + (s.x + U.x) / f * c.w, c.y + (s.y + U.y) / m * c.h, U.w / f * c.w, U.h / m * c.h)) : Wt(s.sliceX || 1, s.sliceY || 1, c.x + s.x / f * c.w, c.y + s.y / m * c.h, s.width / f * c.w, s.height / m * c.h), y = new O(n.tex, p, s.anims);
          x.sprites.addLoaded(h, y), u[h] = y;
        }
        return u;
      }));
    }
    __name(Jt, "Jt");
    l(Jt, "loadSpriteAtlas");
    function Qt(e, t = {}) {
      let n = document.createElement("canvas"), u = e[0].width, h = e[0].height;
      n.width = u * e.length, n.height = h;
      let s = n.getContext("2d");
      e.forEach((f, m) => {
        f instanceof ImageData ? s.putImageData(f, m * u, 0) : s.drawImage(f, m * u, 0);
      });
      let c = s.getImageData(0, 0, e.length * u, h);
      return O.fromImage(c, __spreadProps(__spreadValues({}, t), { sliceX: e.length, sliceY: 1 }));
    }
    __name(Qt, "Qt");
    l(Qt, "createSpriteSheet");
    function Ce(e, t, n = { sliceX: 1, sliceY: 1, anims: {} }) {
      return Array.isArray(t) ? t.some((u) => typeof u == "string") ? x.sprites.add(e, Promise.all(t.map((u) => typeof u == "string" ? fe(u) : Promise.resolve(u))).then((u) => Qt(u, n))) : x.sprites.addLoaded(e, Qt(t, n)) : typeof t == "string" ? x.sprites.add(e, O.from(t, n)) : x.sprites.addLoaded(e, O.fromImage(t, n));
    }
    __name(Ce, "Ce");
    l(Ce, "loadSprite");
    function vr(e, t) {
      return x.sprites.add(e, new Promise((n) => __async(this, null, function* () {
        let u = typeof t == "string" ? yield Se(t) : t, h = yield Promise.all(u.frames.map(fe)), s = document.createElement("canvas");
        s.width = u.width, s.height = u.height * u.frames.length;
        let c = s.getContext("2d");
        h.forEach((m, p) => {
          c.drawImage(m, 0, p * u.height);
        });
        let f = yield Ce(null, s, { sliceY: u.frames.length, anims: u.anims });
        n(f);
      })));
    }
    __name(vr, "vr");
    l(vr, "loadPedit");
    function yr(e, t, n) {
      return x.sprites.add(e, new Promise((u) => __async(this, null, function* () {
        let h = yield Ce(null, t), s = typeof n == "string" ? yield Se(n) : n, c = s.meta.size;
        h.frames = s.frames.map((f) => new G(f.frame.x / c.w, f.frame.y / c.h, f.frame.w / c.w, f.frame.h / c.h));
        for (let f of s.meta.frameTags)
          f.from === f.to ? h.anims[f.name] = f.from : h.anims[f.name] = { from: f.from, to: f.to, speed: 10, loop: true, pingpong: f.direction === "pingpong" };
        u(h);
      })));
    }
    __name(yr, "yr");
    l(yr, "loadAseprite");
    function Ur(e, t, n) {
      return x.shaders.addLoaded(e, Et(t, n));
    }
    __name(Ur, "Ur");
    l(Ur, "loadShader");
    function Er(e, t, n) {
      return x.shaders.add(e, new Promise((u) => {
        let h = l((s) => s ? tt(s) : new Promise((c) => c(null)), "resolveUrl");
        return Promise.all([h(t), h(n)]).then(([s, c]) => {
          u(Et(s, c));
        });
      }));
    }
    __name(Er, "Er");
    l(Er, "loadShaderURL");
    function xr(e, t) {
      return x.sounds.add(e, typeof t == "string" ? F.fromURL(t) : F.fromArrayBuffer(t));
    }
    __name(xr, "xr");
    l(xr, "loadSound");
    function Sr(e = "bean") {
      return Ce(e, Qn);
    }
    __name(Sr, "Sr");
    l(Sr, "loadBean");
    function Zt(e) {
      return x.sprites.get(e);
    }
    __name(Zt, "Zt");
    l(Zt, "getSprite");
    function en(e) {
      return x.sounds.get(e);
    }
    __name(en, "en");
    l(en, "getSound");
    function Cr(e) {
      return x.fonts.get(e);
    }
    __name(Cr, "Cr");
    l(Cr, "getFont");
    function tn(e) {
      return x.bitmapFonts.get(e);
    }
    __name(tn, "tn");
    l(tn, "getBitmapFont");
    function nn(e) {
      return x.shaders.get(e);
    }
    __name(nn, "nn");
    l(nn, "getShader");
    function rn(e) {
      if (typeof e == "string") {
        let t = Zt(e);
        if (t)
          return t;
        if (oe() < 1)
          return null;
        throw new Error(`Sprite not found: ${e}`);
      } else {
        if (e instanceof O)
          return R.loaded(e);
        if (e instanceof R)
          return e;
        throw new Error(`Invalid sprite: ${e}`);
      }
    }
    __name(rn, "rn");
    l(rn, "resolveSprite");
    function Tr(e) {
      if (typeof e == "string") {
        let t = en(e);
        if (t)
          return t.data ? t.data : t;
        if (oe() < 1)
          return null;
        throw new Error(`Sound not found: ${e}`);
      } else {
        if (e instanceof F)
          return e;
        if (e instanceof R)
          return e.data ? e.data : e;
        throw new Error(`Invalid sound: ${e}`);
      }
    }
    __name(Tr, "Tr");
    l(Tr, "resolveSound");
    function Ar(e) {
      if (!e)
        return g.defShader;
      if (typeof e == "string") {
        let t = nn(e);
        if (t)
          return t.data ? t.data : t;
        if (oe() < 1)
          return null;
        throw new Error(`Shader not found: ${e}`);
      } else if (e instanceof R)
        return e.data ? e.data : e;
      return e;
    }
    __name(Ar, "Ar");
    l(Ar, "resolveShader");
    function sn(e) {
      var _a;
      if (!e)
        return sn((_a = i.font) != null ? _a : $s);
      if (typeof e == "string") {
        let t = tn(e);
        if (t)
          return t.data ? t.data : t;
        if (document.fonts.check(`${ar}px ${e}`))
          return e;
        if (oe() < 1)
          return null;
        throw new Error(`Font not found: ${e}`);
      } else if (e instanceof R)
        return e.data ? e.data : e;
      return e;
    }
    __name(sn, "sn");
    l(sn, "resolveFont");
    function Or(e) {
      return e !== void 0 && (T.masterNode.gain.value = re(e, ir, sr)), T.masterNode.gain.value;
    }
    __name(Or, "Or");
    l(Or, "volume");
    function He(e, t = { loop: false, volume: 1, speed: 1, detune: 0, seek: 0 }) {
      var _a;
      let n = Tr(e);
      if (n instanceof R) {
        let U = He(new F(Kt(T.ctx))), M = l((P) => {
          let H = He(P, t);
          for (let $ in H)
            U[$] = H[$];
        }, "doPlay");
        return n.onLoad(M), U;
      } else if (n === null) {
        let U = He(new F(Kt(T.ctx)));
        return Bt(() => {
        }), U;
      }
      let u = T.ctx, h = false, s = u.createBufferSource();
      s.buffer = n.buf, s.loop = !!t.loop;
      let c = u.createGain();
      s.connect(c), c.connect(T.masterNode);
      let f = (_a = t.seek) != null ? _a : 0;
      s.start(0, f);
      let m = u.currentTime - f, p = null, y = { stop() {
        h || (this.pause(), m = u.currentTime);
      }, play(U) {
        if (!h)
          return;
        let M = s;
        s = u.createBufferSource(), s.buffer = M.buffer, s.loop = M.loop, s.playbackRate.value = M.playbackRate.value, s.detune && (s.detune.value = M.detune.value), s.connect(c);
        let P = U != null ? U : this.time();
        s.start(0, P), m = u.currentTime - P, h = false, p = null;
      }, pause() {
        h || (s.stop(), h = true, p = u.currentTime);
      }, isPaused() {
        return h;
      }, isStopped() {
        return h;
      }, speed(U) {
        return U !== void 0 && (s.playbackRate.value = re(U, _s, Ns)), s.playbackRate.value;
      }, detune(U) {
        return s.detune ? (U !== void 0 && (s.detune.value = re(U, Hs, qs)), s.detune.value) : 0;
      }, volume(U) {
        return U !== void 0 && (c.gain.value = re(U, ir, sr)), c.gain.value;
      }, loop() {
        s.loop = true;
      }, unloop() {
        s.loop = false;
      }, duration() {
        return n.buf.duration;
      }, time() {
        return h ? p - m : u.currentTime - m;
      } };
      return y.speed(t.speed), y.detune(t.detune), y.volume(t.volume), y;
    }
    __name(He, "He");
    l(He, "play");
    function on(e) {
      return He(T.burpSnd, e);
    }
    __name(on, "on");
    l(on, "burp");
    function Et(e = Yt, t = Xt) {
      let n = Xs.replace("{{user}}", e != null ? e : Yt), u = Ks.replace("{{user}}", t != null ? t : Xt), h = o.createShader(o.VERTEX_SHADER), s = o.createShader(o.FRAGMENT_SHADER);
      o.shaderSource(h, n), o.shaderSource(s, u), o.compileShader(h), o.compileShader(s);
      let c = o.createProgram();
      if (r.push(() => o.deleteProgram(c)), o.attachShader(c, h), o.attachShader(c, s), o.bindAttribLocation(c, 0, "a_pos"), o.bindAttribLocation(c, 1, "a_uv"), o.bindAttribLocation(c, 2, "a_color"), o.linkProgram(c), !o.getProgramParameter(c, o.LINK_STATUS)) {
        let f = l((U) => {
          let M = new RegExp("^ERROR:\\s0:(?<line>\\d+):\\s(?<msg>.+)"), P = U.match(M);
          return { line: Number(P.groups.line), msg: P.groups.msg.replace(/\n\0$/, "") };
        }, "formatShaderError"), m = o.getShaderInfoLog(h), p = o.getShaderInfoLog(s), y = "";
        if (m) {
          let U = f(m);
          y += `Vertex shader line ${U.line - 14}: ${U.msg}`;
        }
        if (p) {
          let U = f(p);
          y += `Fragment shader line ${U.line - 14}: ${U.msg}`;
        }
        throw new Error(y);
      }
      return o.deleteShader(h), o.deleteShader(s), { bind() {
        o.useProgram(c);
      }, unbind() {
        o.useProgram(null);
      }, free() {
        o.deleteProgram(c);
      }, send(f) {
        for (let m in f) {
          let p = f[m], y = o.getUniformLocation(c, m);
          typeof p == "number" ? o.uniform1f(y, p) : p instanceof I ? o.uniformMatrix4fv(y, false, new Float32Array(p.m)) : p instanceof C ? o.uniform3f(y, p.r, p.g, p.b) : p instanceof w && o.uniform2f(y, p.x, p.y);
        }
      } };
    }
    __name(Et, "Et");
    l(Et, "makeShader");
    function Rr(e, t, n, u) {
      let h = e.width / t, s = {}, c = u.split("").entries();
      for (let [f, m] of c)
        s[m] = new G(f % h * t, Math.floor(f / h) * n, t, n);
      return { tex: e, map: s, size: n };
    }
    __name(Rr, "Rr");
    l(Rr, "makeFont");
    function xt(e, t, n, u = g.defTex, h = g.defShader, s = {}) {
      let c = Ar(h);
      if (!c || c instanceof R)
        return;
      (u !== g.curTex || c !== g.curShader || !Nt(g.curUniform, s) || g.vqueue.length + e.length * yt > mr || g.iqueue.length + t.length > pr) && le();
      let f = n ? g.transform : d.cam.transform.mult(g.transform);
      for (let m of e) {
        let p = Fr(f.multVec2(m.pos));
        g.vqueue.push(p.x, p.y, m.uv.x, m.uv.y, m.color.r / 255, m.color.g / 255, m.color.b / 255, m.opacity);
      }
      for (let m of t)
        g.iqueue.push(m + g.vqueue.length / yt - e.length);
      g.curTex = u, g.curShader = c, g.curUniform = s;
    }
    __name(xt, "xt");
    l(xt, "drawRaw");
    function le() {
      !g.curTex || !g.curShader || g.vqueue.length === 0 || g.iqueue.length === 0 || (o.bindBuffer(o.ARRAY_BUFFER, g.vbuf), o.bufferSubData(o.ARRAY_BUFFER, 0, new Float32Array(g.vqueue)), o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, g.ibuf), o.bufferSubData(o.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(g.iqueue)), g.curShader.bind(), g.curShader.send(g.curUniform), g.curTex.bind(), o.drawElements(o.TRIANGLES, g.iqueue.length, o.UNSIGNED_SHORT, 0), g.curTex.unbind(), g.curShader.unbind(), o.bindBuffer(o.ARRAY_BUFFER, null), o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, null), g.vqueue.length = 0, g.iqueue.length = 0, g.drawCalls++);
    }
    __name(le, "le");
    l(le, "flush");
    function Pr() {
      o.clear(o.COLOR_BUFFER_BIT), g.frameBuffer.bind(), o.clear(o.COLOR_BUFFER_BIT), jr(), i.background || ae(() => {
        Oe({ width: N(), height: j(), quad: new G(0, 0, N() / or, j() / or), tex: g.bgTex, fixed: true });
      }), g.drawCalls = 0, g.transformStack.length = 0, g.transform = new I();
    }
    __name(Pr, "Pr");
    l(Pr, "frameStart");
    function Dr(e, t) {
      g.postShader = e, g.postShaderUniform = t != null ? t : null;
    }
    __name(Dr, "Dr");
    l(Dr, "usePostEffect");
    function Mr() {
      le(), g.frameBuffer.unbind(), ae(() => {
        St({ flipY: true, tex: g.frameBuffer.tex, scale: new w(1 / a.pixelDensity), shader: g.postShader, uniform: g.postShaderUniform, fixed: true });
      }), le(), g.lastDrawCalls = g.drawCalls;
    }
    __name(Mr, "Mr");
    l(Mr, "frameEnd");
    function Fr(e) {
      return new w(e.x / N() * 2 - 1, -e.y / j() * 2 + 1);
    }
    __name(Fr, "Fr");
    l(Fr, "screen2ndc");
    function Br(e) {
      g.transform = e.clone();
    }
    __name(Br, "Br");
    l(Br, "pushMatrix");
    function k3(...e) {
      if (e[0] === void 0)
        return;
      let t = b(...e);
      t.x === 0 && t.y === 0 || g.transform.translate(t);
    }
    __name(k3, "k");
    l(k3, "pushTranslate");
    function Te(...e) {
      if (e[0] === void 0)
        return;
      let t = b(...e);
      t.x === 1 && t.y === 1 || g.transform.scale(t);
    }
    __name(Te, "Te");
    l(Te, "pushScale");
    function Ae(e) {
      !e || g.transform.rotate(e);
    }
    __name(Ae, "Ae");
    l(Ae, "pushRotate");
    function ee() {
      g.transformStack.push(g.transform.clone());
    }
    __name(ee, "ee");
    l(ee, "pushTransform");
    function K() {
      g.transformStack.length > 0 && (g.transform = g.transformStack.pop());
    }
    __name(K, "K");
    l(K, "popTransform");
    function Oe(e) {
      var _a;
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let t = e.width, n = e.height, h = ke(e.anchor || bt).scale(new w(t, n).scale(-0.5)), s = e.quad || new G(0, 0, 1, 1), c = e.color || S(255, 255, 255), f = (_a = e.opacity) != null ? _a : 1, m = e.tex ? fr / e.tex.width : 0, p = e.tex ? fr / e.tex.height : 0, y = s.x + m, U = s.y + p, M = s.w - m * 2, P = s.h - p * 2;
      ee(), k3(e.pos), Ae(e.angle), Te(e.scale), k3(h), xt([{ pos: new w(-t / 2, n / 2), uv: new w(e.flipX ? y + M : y, e.flipY ? U : U + P), color: c, opacity: f }, { pos: new w(-t / 2, -n / 2), uv: new w(e.flipX ? y + M : y, e.flipY ? U + P : U), color: c, opacity: f }, { pos: new w(t / 2, -n / 2), uv: new w(e.flipX ? y : y + M, e.flipY ? U + P : U), color: c, opacity: f }, { pos: new w(t / 2, n / 2), uv: new w(e.flipX ? y : y + M, e.flipY ? U : U + P), color: c, opacity: f }], [0, 1, 3, 1, 2, 3], e.fixed, e.tex, e.shader, e.uniform), K();
    }
    __name(Oe, "Oe");
    l(Oe, "drawUVQuad");
    function St(e) {
      var _a;
      if (!e.tex)
        throw new Error('drawTexture() requires property "tex".');
      let t = (_a = e.quad) != null ? _a : new G(0, 0, 1, 1), n = e.tex.width * t.w, u = e.tex.height * t.h, h = new w(1);
      if (e.tiled) {
        let s = Math.ceil((e.width || n) / n), c = Math.ceil((e.height || u) / u), m = ke(e.anchor || bt).add(new w(1, 1)).scale(0.5).scale(s * n, c * u);
        for (let p = 0; p < s; p++)
          for (let y = 0; y < c; y++)
            Oe(Object.assign(e, { pos: (e.pos || new w(0)).add(new w(n * p, u * y)).sub(m), scale: h.scale(e.scale || new w(1)), tex: e.tex, quad: t, width: n, height: u, anchor: "topleft" }));
      } else
        e.width && e.height ? (h.x = e.width / n, h.y = e.height / u) : e.width ? (h.x = e.width / n, h.y = h.x) : e.height && (h.y = e.height / u, h.x = h.y), Oe(Object.assign(e, { scale: h.scale(e.scale || new w(1)), tex: e.tex, quad: t, width: n, height: u }));
    }
    __name(St, "St");
    l(St, "drawTexture");
    function Lr(e) {
      var _a, _b;
      if (!e.sprite)
        throw new Error('drawSprite() requires property "sprite"');
      let t = rn(e.sprite);
      if (!t || !t.data)
        return;
      let n = t.data.frames[(_a = e.frame) != null ? _a : 0];
      if (!n)
        throw new Error(`Frame not found: ${(_b = e.frame) != null ? _b : 0}`);
      St(Object.assign(e, { tex: t.data.tex, quad: n.scale(e.quad || new G(0, 0, 1, 1)) }));
    }
    __name(Lr, "Lr");
    l(Lr, "drawSprite");
    function qe(e, t, n, u, h, s = 1) {
      u = ce(u % 360), h = ce(h % 360), h <= u && (h += Math.PI * 2);
      let c = [], f = Math.ceil((h - u) / ce(8) * s), m = (h - u) / f;
      for (let p = u; p < h; p += m)
        c.push(e.add(t * Math.cos(p), n * Math.sin(p)));
      return c.push(e.add(t * Math.cos(h), n * Math.sin(h))), c;
    }
    __name(qe, "qe");
    l(qe, "getArcPts");
    function W(e) {
      if (e.width === void 0 || e.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (e.width <= 0 || e.height <= 0)
        return;
      let t = e.width, n = e.height, h = ke(e.anchor || bt).add(1, 1).scale(new w(t, n).scale(-0.5)), s = [new w(0, 0), new w(t, 0), new w(t, n), new w(0, n)];
      if (e.radius) {
        let c = Math.min(Math.min(t, n) / 2, e.radius);
        s = [new w(c, 0), new w(t - c, 0), ...qe(new w(t - c, c), c, c, 270, 360), new w(t, c), new w(t, n - c), ...qe(new w(t - c, n - c), c, c, 0, 90), new w(t - c, n), new w(c, n), ...qe(new w(c, n - c), c, c, 90, 180), new w(0, n - c), new w(0, c), ...qe(new w(c, c), c, c, 180, 270)];
      }
      we(Object.assign(e, __spreadValues({ offset: h, pts: s }, e.gradient ? { colors: e.horizontal ? [e.gradient[0], e.gradient[1], e.gradient[1], e.gradient[0]] : [e.gradient[0], e.gradient[0], e.gradient[1], e.gradient[1]] } : {})));
    }
    __name(W, "W");
    l(W, "drawRect");
    function $e(e) {
      let { p1: t, p2: n } = e;
      if (!t || !n)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let u = e.width || 1, h = n.sub(t).unit().normal().scale(u * 0.5), s = [t.sub(h), t.add(h), n.add(h), n.sub(h)].map((c) => {
        var _a, _b;
        return { pos: new w(c.x, c.y), uv: new w(0), color: (_a = e.color) != null ? _a : C.WHITE, opacity: (_b = e.opacity) != null ? _b : 1 };
      });
      xt(s, [0, 1, 3, 1, 2, 3], e.fixed, g.defTex, e.shader, e.uniform);
    }
    __name($e, "$e");
    l($e, "drawLine");
    function an(e) {
      let t = e.pts;
      if (!t)
        throw new Error('drawLines() requires property "pts".');
      if (!(t.length < 2))
        if (e.radius && t.length >= 3) {
          let n = t[0].sdist(t[1]);
          for (let h = 1; h < t.length - 1; h++)
            n = Math.min(t[h].sdist(t[h + 1]), n);
          let u = Math.min(e.radius, Math.sqrt(n) / 2);
          $e(Object.assign(e, { p1: t[0], p2: t[1] }));
          for (let h = 1; h < t.length - 2; h++) {
            let s = t[h], c = t[h + 1];
            $e(Object.assign(e, { p1: s, p2: c }));
          }
          $e(Object.assign(e, { p1: t[t.length - 2], p2: t[t.length - 1] }));
        } else
          for (let n = 0; n < t.length - 1; n++)
            $e(Object.assign(e, { p1: t[n], p2: t[n + 1] })), e.join !== "none" && ge(Object.assign(e, { pos: t[n], radius: e.width / 2 }));
    }
    __name(an, "an");
    l(an, "drawLines");
    function un(e) {
      if (!e.p1 || !e.p2 || !e.p3)
        throw new Error('drawPolygon() requires properties "p1", "p2" and "p3".');
      return we(Object.assign(e, { pts: [e.p1, e.p2, e.p3] }));
    }
    __name(un, "un");
    l(un, "drawTriangle");
    function ge(e) {
      if (!e.radius)
        throw new Error('drawCircle() requires property "radius".');
      e.radius !== 0 && cn(Object.assign(e, { radiusX: e.radius, radiusY: e.radius, angle: 0 }));
    }
    __name(ge, "ge");
    l(ge, "drawCircle");
    function cn(e) {
      var _a, _b, _c;
      if (e.radiusX === void 0 || e.radiusY === void 0)
        throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
      if (e.radiusX === 0 || e.radiusY === 0)
        return;
      let t = (_a = e.start) != null ? _a : 0, n = (_b = e.end) != null ? _b : 360, u = ke((_c = e.anchor) != null ? _c : "center").scale(new w(-e.radiusX, -e.radiusY)), h = qe(u, e.radiusX, e.radiusY, t, n, e.resolution);
      h.unshift(u);
      let s = Object.assign(e, __spreadValues({ pts: h, radius: 0 }, e.gradient ? { colors: [e.gradient[0], ...Array(h.length - 1).fill(e.gradient[1])] } : {}));
      if (n - t >= 360 && e.outline) {
        e.fill !== false && we(Object.assign(s, { outline: null })), we(Object.assign(s, { pts: h.slice(1), fill: false }));
        return;
      }
      we(s);
    }
    __name(cn, "cn");
    l(cn, "drawEllipse");
    function we(e) {
      var _a, _b;
      if (!e.pts)
        throw new Error('drawPolygon() requires property "pts".');
      let t = e.pts.length;
      if (!(t < 3)) {
        if (ee(), k3(e.pos), Te(e.scale), Ae(e.angle), k3(e.offset), e.fill !== false) {
          let n = (_a = e.color) != null ? _a : C.WHITE, u = e.pts.map((s, c) => {
            var _a2, _b2;
            return { pos: new w(s.x, s.y), uv: new w(0, 0), color: e.colors ? (_a2 = e.colors[c]) != null ? _a2 : n : n, opacity: (_b2 = e.opacity) != null ? _b2 : 1 };
          }), h = [...Array(t - 2).keys()].map((s) => [0, s + 1, s + 2]).flat();
          xt(u, (_b = e.indices) != null ? _b : h, e.fixed, g.defTex, e.shader, e.uniform);
        }
        e.outline && an({ pts: [...e.pts, e.pts[0]], radius: e.radius, width: e.outline.width, color: e.outline.color, join: e.outline.join, uniform: e.uniform, fixed: e.fixed, opacity: e.opacity }), K();
      }
    }
    __name(we, "we");
    l(we, "drawPolygon");
    function hn(e, t, n) {
      le(), o.clear(o.STENCIL_BUFFER_BIT), o.enable(o.STENCIL_TEST), o.stencilFunc(o.NEVER, 1, 255), o.stencilOp(o.REPLACE, o.REPLACE, o.REPLACE), t(), le(), o.stencilFunc(n, 1, 255), o.stencilOp(o.KEEP, o.KEEP, o.KEEP), e(), le(), o.disable(o.STENCIL_TEST);
    }
    __name(hn, "hn");
    l(hn, "drawStenciled");
    function Ir(e, t) {
      hn(e, t, o.EQUAL);
    }
    __name(Ir, "Ir");
    l(Ir, "drawMasked");
    function Gr(e, t) {
      hn(e, t, o.NOTEQUAL);
    }
    __name(Gr, "Gr");
    l(Gr, "drawSubtracted");
    function ln() {
      return (g.viewport.width + g.viewport.height) / (g.width + g.height);
    }
    __name(ln, "ln");
    l(ln, "getViewportScale");
    function ae(e) {
      le();
      let t = g.width, n = g.height;
      g.width = g.viewport.width, g.height = g.viewport.height, e(), le(), g.width = t, g.height = n;
    }
    __name(ae, "ae");
    l(ae, "drawUnscaled");
    function dn(e, t) {
      t.pos && (e.pos = e.pos.add(t.pos)), t.scale && (e.scale = e.scale.scale(b(t.scale))), t.angle && (e.angle += t.angle), t.color && (e.color = e.color.mult(t.color)), t.opacity && (e.opacity *= t.opacity);
    }
    __name(dn, "dn");
    l(dn, "applyCharTransform");
    let fn = new RegExp("\\[(?<text>[^\\]]*)\\]\\.(?<style>[\\w\\.]+)+", "g");
    function Vr(e) {
      let t = {}, n = e.replace(fn, "$1"), u = 0;
      for (let h of e.matchAll(fn)) {
        let s = h.groups.style.split("."), c = h.index - u;
        for (let f = c; f < h.index + h.groups.text.length; f++)
          t[f] = { localIdx: f - c, styles: s };
        u += 3 + h.groups.style.length;
      }
      return { charStyleMap: t, text: n };
    }
    __name(Vr, "Vr");
    l(Vr, "compileStyledText");
    let Ct = {};
    function be(e) {
      var _a, _b, _c, _d, _e2, _f, _g;
      if (e.text === void 0)
        throw new Error('formatText() requires property "text".');
      let t = sn(e.font);
      if (e.text === "" || t instanceof R || !t)
        return { width: 0, height: 0, chars: [], opt: e };
      let { charStyleMap: n, text: u } = Vr(e.text + ""), h = u.split("");
      if (t instanceof FontFace || typeof t == "string") {
        let q = t instanceof FontFace ? t.family : t, A = (_a = Ct[q]) != null ? _a : { font: { tex: new v(cr, hr), map: {}, size: ar }, cursor: new w(0) };
        Ct[q] || (Ct[q] = A), t = A.font;
        for (let _ of h)
          if (!A.font.map[_]) {
            let ie = a.fontCacheCtx;
            ie.font = `${t.size}px ${q}`, ie.clearRect(0, 0, a.fontCacheCanvas.width, a.fontCacheCanvas.height), ie.textBaseline = "top", ie.textAlign = "left", ie.fillStyle = "rgb(255, 255, 255)", ie.fillText(_, 0, 0);
            let Je = ie.measureText(_), Fe = Math.ceil(Je.width), Be = ie.getImageData(0, 0, Fe, t.size);
            if (A.cursor.x + Fe > cr && (A.cursor.x = 0, A.cursor.y += t.size, A.cursor.y > hr))
              throw new Error("Font atlas exceeds character limit");
            t.tex.update(Be, A.cursor.x, A.cursor.y), t.map[_] = new G(A.cursor.x, A.cursor.y, Fe, t.size), A.cursor.x += Fe;
          }
      }
      let s = e.size || t.size, c = b((_b = e.scale) != null ? _b : 1).scale(s / t.size), f = (_c = e.lineSpacing) != null ? _c : 0, m = (_d = e.letterSpacing) != null ? _d : 0, p = 0, y = 0, U = 0, M = [], P = [], H = 0, $ = null, ye = null;
      for (; H < h.length; ) {
        let q = h[H];
        if (q === `
`)
          U += s + f, M.push({ width: p - m, chars: P }), $ = null, ye = null, p = 0, P = [];
        else {
          let A = t.map[q];
          if (A) {
            let _ = A.w * c.x;
            e.width && p + _ > e.width && (U += s + f, $ != null && (H -= P.length - $, q = h[H], A = t.map[q], _ = A.w * c.x, P = P.slice(0, $ - 1), p = ye), $ = null, ye = null, M.push({ width: p - m, chars: P }), p = 0, P = []), P.push({ tex: t.tex, width: A.w, height: A.h, quad: new G(A.x / t.tex.width, A.y / t.tex.height, A.w / t.tex.width, A.h / t.tex.height), ch: q, pos: new w(p, U), opacity: (_e2 = e.opacity) != null ? _e2 : 1, color: (_f = e.color) != null ? _f : C.WHITE, scale: b(c), angle: 0 }), q === " " && ($ = P.length, ye = p), p += _, y = Math.max(y, p), p += m;
          }
        }
        H++;
      }
      M.push({ width: p - m, chars: P }), U += s, e.width && (y = e.width);
      let J = [];
      for (let q of M) {
        let A = (y - q.width) * to((_g = e.align) != null ? _g : "left");
        for (let _ of q.chars) {
          let ie = t.map[_.ch], Je = J.length, Fe = new w(ie.w * c.x * 0.5, ie.h * c.y * 0.5);
          if (_.pos = _.pos.add(A, 0).add(Fe), e.transform) {
            let Be = typeof e.transform == "function" ? e.transform(Je, _.ch) : e.transform;
            Be && dn(_, Be);
          }
          if (n[Je]) {
            let { styles: Be, localIdx: Cs } = n[Je];
            for (let Ts of Be) {
              let Gt = e.styles[Ts], Fn = typeof Gt == "function" ? Gt(Cs, _.ch) : Gt;
              Fn && dn(_, Fn);
            }
          }
          J.push(_);
        }
      }
      return { width: y, height: U, chars: J, opt: e };
    }
    __name(be, "be");
    l(be, "formatText");
    function nt(e) {
      ve(be(e));
    }
    __name(nt, "nt");
    l(nt, "drawText");
    function ve(e) {
      var _a;
      ee(), k3(e.opt.pos), Ae(e.opt.angle), k3(ke((_a = e.opt.anchor) != null ? _a : "topleft").add(1, 1).scale(e.width, e.height).scale(-0.5)), e.chars.forEach((t) => {
        Oe({ tex: t.tex, width: t.width, height: t.height, pos: t.pos, scale: t.scale, angle: t.angle, color: t.color, opacity: t.opacity, quad: t.quad, anchor: "center", uniform: e.opt.uniform, shader: e.opt.shader, fixed: e.opt.fixed });
      }), K();
    }
    __name(ve, "ve");
    l(ve, "drawFormattedText");
    function jr() {
      var _a;
      if (a.stretchToParent && !Rt()) {
        let h = a.canvas.parentElement.offsetWidth, s = a.canvas.parentElement.offsetHeight;
        if (h !== a.lastParentWidth || s !== a.lastParentHeight) {
          a.canvas.width = h * a.pixelDensity, a.canvas.height = s * a.pixelDensity, a.canvas.style.width = h + "px", a.canvas.style.height = s + "px";
          let c = N(), f = j();
          d.ev.onOnce("frameEnd", () => {
            d.ev.trigger("resize", c, f, N(), j());
          });
        }
        a.lastParentWidth = h, a.lastParentHeight = s;
      }
      let e = a.pixelDensity, t = o.drawingBufferWidth / e, n = o.drawingBufferHeight / e;
      if (Rt()) {
        let h = window.innerWidth, s = window.innerHeight, c = h / s, f = t / n;
        if (c > f) {
          let m = window.innerHeight * f;
          g.viewport = { x: (h - m) / 2, y: 0, width: m, height: s };
        } else {
          let m = window.innerWidth / f;
          g.viewport = { x: 0, y: (s - m) / 2, width: h, height: m };
        }
        return;
      }
      if (i.letterbox) {
        if (!i.width || !i.height)
          throw new Error("Letterboxing requires width and height defined.");
        let h = t / n, s = i.width / i.height;
        if (h > s) {
          i.stretch || (g.width = n * s, g.height = n);
          let c = n * s, f = n, m = (t - c) / 2;
          o.scissor(m * e, 0, c * e, f * e), o.viewport(m * e, 0, c * e, n * e), g.viewport = { x: m, y: 0, width: c, height: n };
        } else {
          i.stretch || (g.width = t, g.height = t / s);
          let c = t, f = t / s, m = (n - f) / 2;
          o.scissor(0, m * e, c * e, f * e), o.viewport(0, m * e, t * e, f * e), g.viewport = { x: 0, y: m, width: t, height: f };
        }
        return;
      }
      if (i.stretch) {
        if (!i.width || !i.height)
          throw new Error("Stretching requires width and height defined.");
        o.viewport(0, 0, t * e, n * e), g.viewport = { x: 0, y: 0, width: t, height: n };
        return;
      }
      let u = (_a = i.scale) != null ? _a : 1;
      g.width = t / u, g.height = n / u, o.viewport(0, 0, t * e, n * e), g.viewport = { x: 0, y: 0, width: t, height: n };
    }
    __name(jr, "jr");
    l(jr, "updateViewport");
    function N() {
      return g.width;
    }
    __name(N, "N");
    l(N, "width");
    function j() {
      return g.height;
    }
    __name(j, "j");
    l(j, "height");
    let Y = {}, ze = {}, Re = {};
    function Ye(e) {
      return new w((e.x - g.viewport.x) * N() / g.viewport.width, (e.y - g.viewport.y) * j() / g.viewport.height);
    }
    __name(Ye, "Ye");
    l(Ye, "windowToContent");
    function kr(e) {
      return new w(e.x * g.viewport.width / g.width, e.y * g.viewport.height / g.height);
    }
    __name(kr, "kr");
    l(kr, "contentToView");
    function Tt(e, t) {
      let n = Ye(new w(e, t));
      a.mouseStarted && (a.mouseDeltaPos = n.sub(a.mousePos)), a.mousePos = n, a.mouseStarted = true, a.isMouseMoved = true;
    }
    __name(Tt, "Tt");
    l(Tt, "setMousePos"), Y.mousemove = (e) => {
      let [t, n] = [e.offsetX, e.offsetY];
      d.ev.onOnce("input", () => {
        Tt(t, n), d.ev.trigger("mouseMove");
      });
    }, Y.mousedown = (e) => {
      d.ev.onOnce("input", () => {
        let t = nr[e.button];
        t && a.mouseState.press(t), d.ev.trigger("mousePress", t);
      });
    }, Y.mouseup = (e) => {
      d.ev.onOnce("input", () => {
        let t = nr[e.button];
        t && a.mouseState.release(t), d.ev.trigger("mouseRelease", t);
      });
    }, Y.keydown = (e) => {
      ks.has(e.key) && e.preventDefault(), d.ev.onOnce("input", () => {
        let t = tr[e.key] || e.key.toLowerCase();
        t.length === 1 ? (d.ev.trigger("charInput", t), a.charInputted.push(t)) : t === "space" && (d.ev.trigger("charInput", " "), a.charInputted.push(" ")), e.repeat ? (a.keyState.pressRepeat(t), d.ev.trigger("keyPressRepeat", t)) : (a.keyState.press(t), d.ev.trigger("keyPressRepeat", t), d.ev.trigger("keyPress", t));
      });
    }, Y.keyup = (e) => {
      d.ev.onOnce("input", () => {
        let t = tr[e.key] || e.key.toLowerCase();
        a.keyState.release(t), d.ev.trigger("keyRelease", t);
      });
    }, Y.touchstart = (e) => {
      e.preventDefault(), d.ev.onOnce("input", () => {
        let t = [...e.changedTouches];
        t.forEach((n) => {
          d.ev.trigger("onTouchStart", Ye(new w(n.clientX, n.clientY)), n);
        }), i.touchToMouse !== false && (Tt(t[0].clientX, t[0].clientY), a.mouseState.press("left"), d.ev.trigger("mousePress", "left"));
      });
    }, Y.touchmove = (e) => {
      e.preventDefault(), d.ev.onOnce("input", () => {
        let t = [...e.changedTouches];
        t.forEach((n) => {
          d.ev.trigger("onTouchMove", Ye(new w(n.clientX, n.clientY)), n);
        }), i.touchToMouse !== false && (d.ev.trigger("mouseMove", "left"), Tt(t[0].clientX, t[0].clientY));
      });
    }, Y.touchend = (e) => {
      d.ev.onOnce("input", () => {
        [...e.changedTouches].forEach((n) => {
          d.ev.trigger("onTouchEnd", Ye(new w(n.clientX, n.clientY)), n);
        }), i.touchToMouse !== false && (a.mouseState.release("left"), d.ev.trigger("mouseRelease", "left"));
      });
    }, Y.touchcancel = (e) => {
      d.ev.onOnce("input", () => {
        [...e.changedTouches].forEach((n) => {
          d.ev.trigger("onTouchEnd", Ye(new w(n.clientX, n.clientY)), n);
        }), i.touchToMouse !== false && (a.mouseState.release("left"), d.ev.trigger("mouseRelease", "left"));
      });
    }, Y.wheel = (e) => {
      e.preventDefault(), d.ev.onOnce("input", () => {
        d.ev.trigger("scroll", new w(e.deltaX, e.deltaY));
      });
    }, Y.contextmenu = (e) => e.preventDefault(), ze.visibilitychange = () => {
      switch (document.visibilityState) {
        case "visible":
          a.skipTime = true, L.paused || T.ctx.resume();
          break;
        case "hidden":
          i.backgroundAudio || T.ctx.suspend();
          break;
      }
    }, Re.error = (e) => {
      e.error ? Lt(e.error) : Lt(new Error(e.message));
    }, Re.unhandledrejection = (e) => Lt(e.reason);
    for (let e in Y)
      a.canvas.addEventListener(e, Y[e]);
    for (let e in ze)
      document.addEventListener(e, ze[e]);
    for (let e in Re)
      window.addEventListener(e, Re[e]);
    function Pe() {
      return a.mousePos.clone();
    }
    __name(Pe, "Pe");
    l(Pe, "mousePos");
    function mn() {
      return a.mouseDeltaPos.clone();
    }
    __name(mn, "mn");
    l(mn, "mouseDeltaPos");
    function rt(e = "left") {
      return a.mouseState.pressed.has(e);
    }
    __name(rt, "rt");
    l(rt, "isMousePressed");
    function _r(e = "left") {
      return a.mouseState.down.has(e);
    }
    __name(_r, "_r");
    l(_r, "isMouseDown");
    function At(e = "left") {
      return a.mouseState.released.has(e);
    }
    __name(At, "At");
    l(At, "isMouseReleased");
    function Nr() {
      return a.isMouseMoved;
    }
    __name(Nr, "Nr");
    l(Nr, "isMouseMoved");
    function Hr(e) {
      return e === void 0 ? a.keyState.pressed.size > 0 : a.keyState.pressed.has(e);
    }
    __name(Hr, "Hr");
    l(Hr, "isKeyPressed");
    function qr(e) {
      return e === void 0 ? a.keyState.pressedRepeat.size > 0 : a.keyState.pressedRepeat.has(e);
    }
    __name(qr, "qr");
    l(qr, "isKeyPressedRepeat");
    function $r(e) {
      return e === void 0 ? a.keyState.down.size > 0 : a.keyState.down.has(e);
    }
    __name($r, "$r");
    l($r, "isKeyDown");
    function zr(e) {
      return e === void 0 ? a.keyState.released.size > 0 : a.keyState.released.has(e);
    }
    __name(zr, "zr");
    l(zr, "isKeyReleased");
    function Yr(e) {
      return a.virtualButtonState.pressed.has(e);
    }
    __name(Yr, "Yr");
    l(Yr, "isVirtualButtonPressed");
    function Xr(e) {
      return a.virtualButtonState.down.has(e);
    }
    __name(Xr, "Xr");
    l(Xr, "isVirtualButtonDown");
    function Kr(e) {
      return a.virtualButtonState.released.has(e);
    }
    __name(Kr, "Kr");
    l(Kr, "isVirtualButtonReleased");
    function Wr() {
      return [...a.charInputted];
    }
    __name(Wr, "Wr");
    l(Wr, "charInputted");
    function Ot() {
      return a.time;
    }
    __name(Ot, "Ot");
    l(Ot, "time");
    function Jr() {
      return a.canvas.toDataURL();
    }
    __name(Jr, "Jr");
    l(Jr, "screenshot");
    function pn(e) {
      return e && (a.canvas.style.cursor = e), a.canvas.style.cursor;
    }
    __name(pn, "pn");
    l(pn, "setCursor");
    function Qr(e = true) {
      e ? Qs(a.canvas) : Zs();
    }
    __name(Qr, "Qr");
    l(Qr, "setFullscreen");
    function Rt() {
      return Boolean(eo());
    }
    __name(Rt, "Rt");
    l(Rt, "isFullscreen");
    function gn() {
      return a.isTouchScreen;
    }
    __name(gn, "gn");
    l(gn, "isTouchScreen");
    let L = { inspect: false, timeScale: 1, showLog: true, fps: () => a.fpsCounter.fps, numFrames: () => a.numFrames, stepFrame: Pn, drawCalls: () => g.drawCalls, clearLog: () => d.logs = [], log: (e) => {
      var _a;
      let t = (_a = i.logMax) != null ? _a : Ys;
      d.logs.unshift(`${`[${Ot().toFixed(2)}].time `}[${(e == null ? void 0 : e.toString) ? e.toString() : e}].${e instanceof Error ? "error" : "info"}`), d.logs.length > t && (d.logs = d.logs.slice(0, t));
    }, error: (e) => L.log(new Error(e.toString ? e.toString() : e)), curRecording: null, get paused() {
      return a.paused;
    }, set paused(e) {
      a.paused = e, e ? T.ctx.suspend() : T.ctx.resume();
    } };
    function te() {
      return a.dt * L.timeScale;
    }
    __name(te, "te");
    l(te, "dt");
    function Zr(...e) {
      return e.length > 0 && (d.cam.pos = b(...e)), d.cam.pos ? d.cam.pos.clone() : ht();
    }
    __name(Zr, "Zr");
    l(Zr, "camPos");
    function ei(...e) {
      return e.length > 0 && (d.cam.scale = b(...e)), d.cam.scale.clone();
    }
    __name(ei, "ei");
    l(ei, "camScale");
    function ti(e) {
      return e !== void 0 && (d.cam.angle = e), d.cam.angle;
    }
    __name(ti, "ti");
    l(ti, "camRot");
    function ni(e = 12) {
      d.cam.shake = e;
    }
    __name(ni, "ni");
    l(ni, "shake");
    function Pt(e) {
      return d.cam.transform.multVec2(e);
    }
    __name(Pt, "Pt");
    l(Pt, "toScreen");
    function wn(e) {
      return d.cam.transform.invert().multVec2(e);
    }
    __name(wn, "wn");
    l(wn, "toWorld");
    function it(e) {
      let t = new I();
      return e.pos && t.translate(e.pos), e.scale && t.scale(e.scale), e.angle && t.rotate(e.angle), e.parent ? t.mult(e.parent.transform) : t;
    }
    __name(it, "it");
    l(it, "calcTransform");
    function bn(e) {
      let t = /* @__PURE__ */ new Map(), n = {}, u = new he(), h = { id: Jn(), hidden: false, paused: false, transform: new I(), children: [], parent: null, add(s) {
        let c = (() => {
          if (Array.isArray(s))
            return bn(s);
          if (s.parent)
            throw new Error("Cannot add a game obj that already has a parent.");
          return s;
        })();
        return c.parent = this, c.transform = it(c), this.children.push(c), c.trigger("add", this), d.ev.trigger("add", this), c;
      }, readd(s) {
        let c = this.children.indexOf(s);
        return c !== -1 && (this.children.splice(c, 1), this.children.push(s)), s;
      }, remove(s) {
        let c = this.children.indexOf(s);
        c !== -1 && (s.parent = null, s.trigger("destroy"), d.ev.trigger("destroy", s), this.children.splice(c, 1));
      }, removeAll(s) {
        this.get(s).forEach((c) => this.remove(c));
      }, update() {
        this.paused || (this.get().forEach((s) => s.update()), this.trigger("update"));
      }, draw() {
        this.hidden || (ee(), k3(this.pos), Te(this.scale), Ae(this.angle), this.trigger("draw"), this.get().forEach((s) => s.draw()), K());
      }, drawInspect() {
        this.hidden || (ee(), k3(this.pos), Te(this.scale), Ae(this.angle), this.get().forEach((s) => s.drawInspect()), this.trigger("drawInspect"), K());
      }, use(s) {
        if (!s)
          return;
        if (typeof s == "string")
          return this.use({ id: s });
        s.id && (this.unuse(s.id), t.set(s.id, { cleanups: [] }));
        let c = s.id ? t.get(s.id) : n, f = s.id ? c.cleanups : [], m = l(() => {
          if (s.require) {
            for (let p of s.require)
              if (!this.c(p))
                throw new Error(`Component "${s.id}" requires component "${p}"`);
          }
        }, "checkDeps");
        s.destroy && f.push(s.destroy), s.require && !this.exists() && c.cleanups && f.push(this.on("add", m));
        for (let p in s)
          if (!Ws.has(p)) {
            if (typeof s[p] == "function") {
              let y = s[p].bind(this);
              if (Js.has(p)) {
                f.push(this.on(p, y)), c[p] = y;
                continue;
              } else
                c[p] = y;
            } else
              c[p] = s[p];
            if (this[p] === void 0)
              Object.defineProperty(this, p, { get: () => c[p], set: (y) => c[p] = y, configurable: true, enumerable: true });
            else
              throw new Error(`Duplicate component property: "${p}"`);
          }
        this.exists() && (m(), s.add && s.add.call(this));
      }, unuse(s) {
        if (t.has(s)) {
          let c = t.get(s);
          c.cleanups.forEach((f) => f.cancel());
          for (let f in c)
            delete c[f];
        }
        t.delete(s);
      }, c(s) {
        return t.get(s);
      }, get(s) {
        return this.children.filter((c) => s ? c.is(s) : true).sort((c, f) => {
          var _a, _b;
          return ((_a = c.z) != null ? _a : 0) - ((_b = f.z) != null ? _b : 0);
        });
      }, getAll(s) {
        return this.children.sort((c, f) => {
          var _a, _b;
          return ((_a = c.z) != null ? _a : 0) - ((_b = f.z) != null ? _b : 0);
        }).flatMap((c) => [c, ...c.getAll(s)]).filter((c) => s ? c.is(s) : true);
      }, isAncestorOf(s) {
        return s.parent ? s.parent === this || this.isAncestorOf(s.parent) : false;
      }, exists() {
        return d.root.isAncestorOf(this);
      }, is(s) {
        if (s === "*")
          return true;
        if (Array.isArray(s)) {
          for (let c of s)
            if (!this.c(c))
              return false;
          return true;
        } else
          return this.c(s) != null;
      }, on(s, c) {
        return u.on(s, c.bind(this));
      }, trigger(s, ...c) {
        u.trigger(s, ...c), d.objEvents.trigger(s, this, ...c);
      }, destroy() {
        this.parent && this.parent.remove(this);
      }, inspect() {
        let s = {};
        for (let [c, f] of t)
          s[c] = f.inspect ? f.inspect() : null;
        return s;
      }, onAdd(s) {
        return this.on("add", s);
      }, onUpdate(s) {
        return this.on("update", s);
      }, onDraw(s) {
        return this.on("draw", s);
      }, onDestroy(s) {
        return this.on("destroy", s);
      }, clearEvents() {
        u.clear();
      } };
      for (let s of e)
        h.use(s);
      return h;
    }
    __name(bn, "bn");
    l(bn, "make");
    function De(e, t, n) {
      return d.objEvents[e] || (d.objEvents[e] = new Ee()), d.objEvents.on(e, (u, ...h) => {
        u.is(t) && n(u, ...h);
      });
    }
    __name(De, "De");
    l(De, "on");
    let Dt = l((e, t) => {
      if (typeof e == "function" && t === void 0) {
        let n = We([{ update: e }]);
        return { get paused() {
          return n.paused;
        }, set paused(u) {
          n.paused = u;
        }, cancel: () => n.destroy() };
      } else if (typeof e == "string")
        return De("update", e, t);
    }, "onUpdate"), ri = l((e, t) => {
      if (typeof e == "function" && t === void 0) {
        let n = We([{ draw: e }]);
        return { get paused() {
          return n.hidden;
        }, set paused(u) {
          n.hidden = u;
        }, cancel: () => n.destroy() };
      } else if (typeof e == "string")
        return De("draw", e, t);
    }, "onDraw");
    function vn(e, t) {
      if (typeof e == "function" && t === void 0)
        return d.ev.on("add", e);
      if (typeof e == "string")
        return De("add", e, t);
    }
    __name(vn, "vn");
    l(vn, "onAdd");
    function ii(e, t) {
      if (typeof e == "function" && t === void 0)
        return d.ev.on("destroy", e);
      if (typeof e == "string")
        return De("destroy", e, t);
    }
    __name(ii, "ii");
    l(ii, "onDestroy");
    function si(e, t, n) {
      return De("collide", e, (u, h, s) => h.is(t) && n(u, h, s));
    }
    __name(si, "si");
    l(si, "onCollide");
    function st(e, t) {
      An(e).forEach(t), vn(e, t);
    }
    __name(st, "st");
    l(st, "forAllCurrentAndFuture");
    function oi(e, t) {
      if (typeof e == "function")
        return yn(e);
      {
        let n = [];
        return st(e, (u) => {
          if (!u.area)
            throw new Error("onClick() requires the object to have area() component");
          n.push(u.onClick(() => t(u)));
        }), at(n);
      }
    }
    __name(oi, "oi");
    l(oi, "onClick");
    function ai(e, t) {
      let n = [];
      return st(e, (u) => {
        if (!u.area)
          throw new Error("onHover() requires the object to have area() component");
        n.push(u.onHover(() => t(u)));
      }), at(n);
    }
    __name(ai, "ai");
    l(ai, "onHover");
    function ui(e, t) {
      let n = [];
      return st(e, (u) => {
        if (!u.area)
          throw new Error("onHoverUpdate() requires the object to have area() component");
        n.push(u.onHoverUpdate(() => t(u)));
      }), at(n);
    }
    __name(ui, "ui");
    l(ui, "onHoverUpdate");
    function ci(e, t) {
      let n = [];
      return st(e, (u) => {
        if (!u.area)
          throw new Error("onHoverEnd() requires the object to have area() component");
        n.push(u.onHoverEnd(() => t(u)));
      }), at(n);
    }
    __name(ci, "ci");
    l(ci, "onHoverEnd");
    function ot(e, t) {
      let n = 0, u = [];
      t && u.push(t);
      let h = Dt(() => {
        n += te(), n >= e && (h.cancel(), u.forEach((s) => s()));
      });
      return { paused: h.paused, cancel: h.cancel, onFinish(s) {
        u.push(s);
      }, then(s) {
        return this.onFinish(s), this;
      } };
    }
    __name(ot, "ot");
    l(ot, "wait");
    function hi(e, t) {
      let n = null, u = l(() => {
        n = ot(e, u), t();
      }, "newAction");
      return n = ot(0, u), { get paused() {
        return n.paused;
      }, set paused(h) {
        n.paused = h;
      }, cancel: () => n.cancel() };
    }
    __name(hi, "hi");
    l(hi, "loop");
    function at(e) {
      return { get paused() {
        return e[0].paused;
      }, set paused(t) {
        e.forEach((n) => n.paused = t);
      }, cancel: () => e.forEach((t) => t.cancel()) };
    }
    __name(at, "at");
    l(at, "joinEventControllers");
    let li = l((e, t) => {
      if (typeof e == "function")
        return d.ev.on("keyDown", e);
      if (typeof e == "string" && typeof t == "function")
        return d.ev.on("keyDown", (n) => n === e && t(e));
    }, "onKeyDown"), me = l((e, t) => {
      if (typeof e == "function")
        return d.ev.on("keyPress", e);
      if (typeof e == "string" && typeof t == "function")
        return d.ev.on("keyPress", (n) => n === e && t(e));
    }, "onKeyPress"), di = l((e, t) => {
      if (typeof e == "function")
        return d.ev.on("keyPressRepeat", e);
      if (typeof e == "string" && typeof t == "function")
        return d.ev.on("keyPressRepeat", (n) => n === e && t(e));
    }, "onKeyPressRepeat"), fi = l((e, t) => {
      if (typeof e == "function")
        return d.ev.on("keyRelease", e);
      if (typeof e == "string" && typeof t == "function")
        return d.ev.on("keyRelease", (n) => n === e && t(e));
    }, "onKeyRelease");
    function mi(e, t) {
      return typeof e == "function" ? d.ev.on("mouseDown", (n) => e(n)) : d.ev.on("mouseDown", (n) => n === e && t(n));
    }
    __name(mi, "mi");
    l(mi, "onMouseDown");
    function yn(e, t) {
      return typeof e == "function" ? d.ev.on("mousePress", (n) => e(n)) : d.ev.on("mousePress", (n) => n === e && t(n));
    }
    __name(yn, "yn");
    l(yn, "onMousePress");
    function pi(e, t) {
      return typeof e == "function" ? d.ev.on("mouseRelease", (n) => e(n)) : d.ev.on("mouseRelease", (n) => n === e && t(n));
    }
    __name(pi, "pi");
    l(pi, "onMouseRelease");
    function gi(e) {
      return d.ev.on("mouseMove", () => e(Pe(), mn()));
    }
    __name(gi, "gi");
    l(gi, "onMouseMove");
    function wi(e) {
      return d.ev.on("charInput", e);
    }
    __name(wi, "wi");
    l(wi, "onCharInput");
    function bi(e) {
      return d.ev.on("onTouchStart", e);
    }
    __name(bi, "bi");
    l(bi, "onTouchStart");
    function vi(e) {
      return d.ev.on("onTouchMove", e);
    }
    __name(vi, "vi");
    l(vi, "onTouchMove");
    function yi(e) {
      return d.ev.on("onTouchEnd", e);
    }
    __name(yi, "yi");
    l(yi, "onTouchEnd");
    function Ui(e) {
      return d.ev.on("scroll", e);
    }
    __name(Ui, "Ui");
    l(Ui, "onScroll");
    function Ei(e, t) {
      return d.ev.on("virtualButtonDown", (n) => n === e && t());
    }
    __name(Ei, "Ei");
    l(Ei, "onVirtualButtonDown");
    function xi(e, t) {
      return d.ev.on("virtualButtonPress", (n) => n === e && t());
    }
    __name(xi, "xi");
    l(xi, "onVirtualButtonPress");
    function Si(e, t) {
      return d.ev.on("virtualButtonRelease", (n) => n === e && t());
    }
    __name(Si, "Si");
    l(Si, "onVirtualButtonRelease");
    function Ci(e, t) {
      if (typeof e == "function")
        return d.ev.on("gamepadButtonDown", e);
      if (typeof e == "string" && typeof t == "function")
        return d.ev.on("gamepadButtonDown", (n) => n === e && t(e));
    }
    __name(Ci, "Ci");
    l(Ci, "onGamepadButtonDown");
    function Ti(e, t) {
      if (typeof e == "function")
        return d.ev.on("gamepadButtonPress", e);
      if (typeof e == "string" && typeof t == "function")
        return d.ev.on("gamepadButtonPress", (n) => n === e && t(e));
    }
    __name(Ti, "Ti");
    l(Ti, "onGamepadButtonPress");
    function Ai(e, t) {
      if (typeof e == "function")
        return d.ev.on("gamepadButtonRelease", e);
      if (typeof e == "string" && typeof t == "function")
        return d.ev.on("gamepadButtonRelease", (n) => n === e && t(e));
    }
    __name(Ai, "Ai");
    l(Ai, "onGamepadButtonRelease");
    function Un() {
      me("f1", () => {
        L.inspect = !L.inspect;
      }), me("f2", () => {
        L.clearLog();
      }), me("f8", () => {
        L.paused = !L.paused;
      }), me("f7", () => {
        L.timeScale = Xe(re(L.timeScale - 0.2, 0, 2), 1);
      }), me("f9", () => {
        L.timeScale = Xe(re(L.timeScale + 0.2, 0, 2), 1);
      }), me("f10", () => {
        L.stepFrame();
      });
    }
    __name(Un, "Un");
    l(Un, "enterDebugMode");
    function En() {
      me("b", () => on());
    }
    __name(En, "En");
    l(En, "enterBurpMode");
    function Oi(e) {
      return e !== void 0 && (d.gravity = e), d.gravity;
    }
    __name(Oi, "Oi");
    l(Oi, "gravity");
    function ut(...e) {
      return { id: "pos", pos: b(...e), moveBy(...t) {
        this.pos = this.pos.add(b(...t));
      }, move(...t) {
        this.moveBy(b(...t).scale(te()));
      }, moveTo(...t) {
        if (typeof t[0] == "number" && typeof t[1] == "number")
          return this.moveTo(b(t[0], t[1]), t[2]);
        let n = t[0], u = t[1];
        if (u === void 0) {
          this.pos = b(n);
          return;
        }
        let h = n.sub(this.pos);
        if (h.len() <= u * te()) {
          this.pos = b(n);
          return;
        }
        this.move(h.unit().scale(u));
      }, worldPos() {
        return this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
      }, screenPos() {
        return this.fixed ? this.pos : Pt(this.pos);
      }, inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      }, drawInspect() {
        ge({ color: S(255, 0, 0), radius: 4 / ln() });
      } };
    }
    __name(ut, "ut");
    l(ut, "pos");
    function ct(...e) {
      return e.length === 0 ? ct(1) : { id: "scale", scale: b(...e), scaleTo(...t) {
        this.scale = b(...t);
      }, scaleBy(...t) {
        this.scale.scale(b(...t));
      }, inspect() {
        return `(${Xe(this.scale.x, 2)}, ${Xe(this.scale.y, 2)})`;
      } };
    }
    __name(ct, "ct");
    l(ct, "scale");
    function Ri(e) {
      return { id: "rotate", angle: e != null ? e : 0, rotateBy(t) {
        this.angle += t;
      }, rotateTo(t) {
        this.angle = t;
      }, inspect() {
        return `${Math.round(this.angle)}`;
      } };
    }
    __name(Ri, "Ri");
    l(Ri, "rotate");
    function Pi(...e) {
      return { id: "color", color: S(...e), inspect() {
        return this.color.toString();
      } };
    }
    __name(Pi, "Pi");
    l(Pi, "color");
    function Xe(e, t) {
      return Number(e.toFixed(t));
    }
    __name(Xe, "Xe");
    l(Xe, "toFixed");
    function Di(e) {
      return { id: "opacity", opacity: e != null ? e : 1, inspect() {
        return `${Xe(this.opacity, 1)}`;
      }, fadeOut(t = 1, n = Ze.linear) {
        return It(this.opacity, 0, t, (u) => this.opacity = u, n);
      } };
    }
    __name(Di, "Di");
    l(Di, "opacity");
    function Mt(e) {
      if (!e)
        throw new Error("Please define an anchor");
      return { id: "anchor", anchor: e, inspect() {
        return typeof this.anchor == "string" ? this.anchor : this.anchor.toString();
      } };
    }
    __name(Mt, "Mt");
    l(Mt, "anchor");
    function Mi(e) {
      return { id: "z", z: e, inspect() {
        return `${this.z}`;
      } };
    }
    __name(Mi, "Mi");
    l(Mi, "z");
    function Fi(e, t) {
      return { id: "follow", require: ["pos"], follow: { obj: e, offset: t != null ? t : b(0) }, add() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }, update() {
        e.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      } };
    }
    __name(Fi, "Fi");
    l(Fi, "follow");
    function Bi(e, t) {
      let n = typeof e == "number" ? w.fromAngle(e) : e.unit();
      return { id: "move", require: ["pos"], update() {
        this.move(n.scale(t));
      } };
    }
    __name(Bi, "Bi");
    l(Bi, "move");
    let Li = 200;
    function Ii(e = {}) {
      var _a;
      let t = (_a = e.distance) != null ? _a : Li, n = false;
      return { id: "offscreen", require: ["pos"], isOffScreen() {
        let u = Pt(this.pos), h = new V(b(0), N(), j());
        return !Ve(h, u) && h.sdistToPoint(u) > t * t;
      }, onExitScreen(u) {
        return this.on("exitView", u);
      }, onEnterScreen(u) {
        return this.on("enterView", u);
      }, update() {
        this.isOffScreen() ? (n || (this.trigger("exitView"), n = true), e.hide && (this.hidden = true), e.pause && (this.paused = true), e.destroy && this.destroy()) : (n && (this.trigger("enterView"), n = false), e.hide && (this.hidden = false), e.pause && (this.paused = false));
      }, inspect() {
        return `${this.isOffScreen()}`;
      } };
    }
    __name(Ii, "Ii");
    l(Ii, "offscreen");
    function Gi(e = {}) {
      var _a, _b, _c, _d, _e2;
      let t = [], n = {}, u = /* @__PURE__ */ new Set();
      return { id: "area", collisionIgnore: (_a = e.collisionIgnore) != null ? _a : [], add() {
        this.area.cursor && t.push(this.onHover(() => pn(this.area.cursor))), t.push(this.onCollideUpdate((h, s) => {
          n[h.id] || this.trigger("collide", h, s), n[h.id] = s, u.add(h.id);
        }));
      }, update() {
        for (let h in n)
          u.has(Number(h)) || (this.trigger("collideEnd", n[h].target), delete n[h]);
        u.clear();
      }, drawInspect() {
        let h = this.localArea();
        ee(), Te(this.area.scale), k3(this.area.offset);
        let s = { outline: { width: 4 / ln(), color: S(0, 0, 255) }, anchor: this.anchor, fill: false, fixed: this.fixed };
        h instanceof V ? W(__spreadProps(__spreadValues({}, s), { pos: h.pos, width: h.width, height: h.height })) : h instanceof se ? we(__spreadProps(__spreadValues({}, s), { pts: h.pts })) : h instanceof de && ge(__spreadProps(__spreadValues({}, s), { pos: h.center, radius: h.radius })), K();
      }, destroy() {
        t.forEach((h) => h.cancel());
      }, area: { shape: (_b = e.shape) != null ? _b : null, scale: (_c = e.scale) != null ? _c : b(1), offset: (_d = e.offset) != null ? _d : b(0), cursor: (_e2 = e.cursor) != null ? _e2 : null }, isClicked() {
        return rt() && this.isHovering();
      }, isHovering() {
        let h = this.fixed ? Pe() : wn(Pe());
        return this.hasPoint(h);
      }, checkCollision(h) {
        var _a2;
        return (_a2 = this.colliding[h.id]) != null ? _a2 : null;
      }, isColliding(h) {
        return Boolean(n[h.id]);
      }, isOverlapping(h) {
        let s = n[h.id];
        return s && s.hasOverlap();
      }, onClick(h) {
        return this.onUpdate(() => {
          this.isClicked() && h();
        });
      }, onHover(h) {
        let s = false;
        return this.onUpdate(() => {
          s ? s = this.isHovering() : this.isHovering() && (s = true, h());
        });
      }, onHoverUpdate(h) {
        return this.onUpdate(() => {
          this.isHovering() && h();
        });
      }, onHoverEnd(h) {
        let s = false;
        return this.onUpdate(() => {
          s ? this.isHovering() || (s = false, h()) : s = this.isHovering();
        });
      }, onCollide(h, s) {
        if (typeof h == "function" && s === void 0)
          return this.on("collide", h);
        if (typeof h == "string")
          return this.onCollide((c, f) => {
            c.is(h) && s(c, f);
          });
      }, onCollideUpdate(h, s) {
        if (typeof h == "function" && s === void 0)
          return this.on("collideUpdate", h);
        if (typeof h == "string")
          return this.on("collideUpdate", (c, f) => c.is(h) && s(c, f));
      }, onCollideEnd(h, s) {
        if (typeof h == "function" && s === void 0)
          return this.on("collideEnd", h);
        if (typeof h == "string")
          return this.on("collideEnd", (c) => c.is(h) && s(c));
      }, hasPoint(h) {
        return qn(this.worldArea(), h);
      }, pushOut(h) {
        let s = this.checkCollision(h);
        s && (this.pos = this.pos.add(s.displacement));
      }, pushOutAll() {
        d.root.getAll().forEach(this.pushOut);
      }, localArea() {
        return this.area.shape ? this.area.shape : this.renderArea();
      }, worldArea() {
        var _a2;
        let h = this.localArea();
        if (!(h instanceof se || h instanceof V))
          throw new Error("Only support polygon and rect shapes for now");
        let s = this.transform.clone().scale(b((_a2 = this.area.scale) != null ? _a2 : 1)).translate(this.area.offset);
        if (h instanceof V) {
          let c = ke(this.anchor || bt).add(1, 1).scale(-0.5).scale(h.width, h.height);
          s.translate(c);
        }
        return h.transform(s);
      }, screenArea() {
        let h = this.worldArea();
        return this.fixed ? h : h.transform(d.cam.transform);
      } };
    }
    __name(Gi, "Gi");
    l(Gi, "area");
    function Ke(e) {
      return { color: e.color, opacity: e.opacity, anchor: e.anchor, outline: e.outline, fixed: e.fixed, shader: e.shader, uniform: e.uniform };
    }
    __name(Ke, "Ke");
    l(Ke, "getRenderProps");
    function Ft(e, t = {}) {
      var _a, _b, _c;
      let n = null, u = null;
      if (!e)
        throw new Error("Please pass the resource name or data to sprite()");
      let h = l((s, c, f, m) => {
        let p = b(1, 1);
        return f && m ? (p.x = f / (s.width * c.w), p.y = m / (s.height * c.h)) : f ? (p.x = f / (s.width * c.w), p.y = p.x) : m && (p.y = m / (s.height * c.h), p.x = p.y), p;
      }, "calcTexScale");
      return { id: "sprite", width: 0, height: 0, frame: t.frame || 0, quad: t.quad || new G(0, 0, 1, 1), animSpeed: (_a = t.animSpeed) != null ? _a : 1, flipX: (_b = t.flipX) != null ? _b : false, flipY: (_c = t.flipY) != null ? _c : false, draw() {
        var _a2, _b2;
        if (!n)
          return;
        let s = n.frames[(_a2 = this.frame) != null ? _a2 : 0];
        if (!s)
          throw new Error(`Frame not found: ${(_b2 = this.frame) != null ? _b2 : 0}`);
        St(Object.assign(Ke(this), { tex: n.tex, quad: s, flipX: this.flipX, flipY: this.flipY, tiled: t.tiled, width: t.width, height: t.height }));
      }, update() {
        if (!n) {
          let c = rn(e);
          if (!c || !c.data)
            return;
          let f = c.data.frames[0].clone();
          t.quad && (f = f.scale(t.quad));
          let m = h(c.data.tex, f, t.width, t.height);
          this.width = c.data.tex.width * f.w * m.x, this.height = c.data.tex.height * f.h * m.y, t.anim && this.play(t.anim), n = c.data, this.trigger("spriteLoaded", n);
        }
        if (!u)
          return;
        let s = n.anims[u.name];
        if (typeof s == "number") {
          this.frame = s;
          return;
        }
        if (s.speed === 0)
          throw new Error("Sprite anim speed cannot be 0");
        u.timer += te() * this.animSpeed, u.timer >= 1 / u.speed && (u.timer = 0, s.from > s.to ? (this.frame--, this.frame < s.to && (u.loop ? this.frame = s.from : (this.frame++, u.onEnd(), this.stop()))) : (this.frame++, this.frame > s.to && (u.loop ? this.frame = s.from : (this.frame--, u.onEnd(), this.stop()))));
      }, play(s, c = {}) {
        var _a2, _b2, _c2, _d, _e2, _f, _g;
        if (!n) {
          this.on("spriteLoaded", () => {
            this.play(s, c);
          });
          return;
        }
        let f = n.anims[s];
        if (!f)
          throw new Error(`Anim not found: ${s}`);
        u && this.stop(), u = typeof f == "number" ? { name: s, timer: 0, loop: false, pingpong: false, speed: 0, onEnd: () => {
        } } : { name: s, timer: 0, loop: (_b2 = (_a2 = c.loop) != null ? _a2 : f.loop) != null ? _b2 : false, pingpong: (_d = (_c2 = c.pingpong) != null ? _c2 : f.pingpong) != null ? _d : false, speed: (_f = (_e2 = c.speed) != null ? _e2 : f.speed) != null ? _f : 10, onEnd: (_g = c.onEnd) != null ? _g : () => {
        } }, this.frame = typeof f == "number" ? f : f.from, this.trigger("animStart", s);
      }, stop() {
        if (!u)
          return;
        let s = u.name;
        u = null, this.trigger("animEnd", s);
      }, numFrames() {
        return n ? n.frames.length : 0;
      }, curAnim() {
        return u == null ? void 0 : u.name;
      }, onAnimEnd(s, c) {
        return this.on("animEnd", (f) => {
          f === s && c();
        });
      }, onAnimStart(s, c) {
        return this.on("animStart", (f) => {
          f === s && c();
        });
      }, renderArea() {
        return new V(b(0), this.width, this.height);
      }, inspect() {
        if (typeof e == "string")
          return `"${e}"`;
      } };
    }
    __name(Ft, "Ft");
    l(Ft, "sprite");
    function Vi(e, t = {}) {
      var _a;
      function n(u) {
        var _a2, _b;
        let h = be(Object.assign(Ke(u), { text: u.text + "", size: u.textSize, font: u.font, width: t.width && u.width, align: u.align, letterSpacing: u.letterSpacing, lineSpacing: u.lineSpacing, transform: u.textTransform, styles: u.textStyles }));
        return t.width || (u.width = h.width / (((_a2 = u.scale) == null ? void 0 : _a2.x) || 1)), u.height = h.height / (((_b = u.scale) == null ? void 0 : _b.y) || 1), h;
      }
      __name(n, "n");
      return l(n, "update"), { id: "text", text: e, textSize: (_a = t.size) != null ? _a : zs, font: t.font, width: t.width, height: 0, align: t.align, lineSpacing: t.lineSpacing, letterSpacing: t.letterSpacing, textTransform: t.transform, textStyles: t.styles, add() {
        Bt(() => n(this));
      }, draw() {
        ve(n(this));
      }, renderArea() {
        return new V(b(0), this.width, this.height);
      } };
    }
    __name(Vi, "Vi");
    l(Vi, "text");
    function ji(e, t, n = {}) {
      return { id: "rect", width: e, height: t, radius: n.radius || 0, draw() {
        W(Object.assign(Ke(this), { width: this.width, height: this.height, radius: this.radius }));
      }, renderArea() {
        return new V(b(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(ji, "ji");
    l(ji, "rect");
    function ki(e, t) {
      return { id: "rect", width: e, height: t, draw() {
        Oe(Object.assign(Ke(this), { width: this.width, height: this.height }));
      }, renderArea() {
        return new V(b(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(ki, "ki");
    l(ki, "uvquad");
    function _i(e) {
      return { id: "circle", radius: e, draw() {
        ge(Object.assign(Ke(this), { radius: this.radius }));
      }, renderArea() {
        return new V(new w(this.anchor ? 0 : -this.radius), this.radius * 2, this.radius * 2);
      }, inspect() {
        return `${Math.ceil(this.radius)}`;
      } };
    }
    __name(_i, "_i");
    l(_i, "circle");
    function Ni(e = 1, t = S(0, 0, 0)) {
      return { id: "outline", outline: { width: e, color: t } };
    }
    __name(Ni, "Ni");
    l(Ni, "outline");
    function xn(e, t) {
      let n = new Ee();
      return e && t && n.pushd(new pe(e, t)), { id: "timer", wait(u, h) {
        let s = [h], c = new pe(u, () => s.forEach((m) => m())), f = n.pushd(c);
        return { get paused() {
          return c.paused;
        }, set paused(m) {
          c.paused = m;
        }, cancel: f, onFinish(m) {
          s.push(m);
        }, then(m) {
          return this.onFinish(m), this;
        } };
      }, update() {
        n.forEach((u, h) => {
          u.tick(te()) && n.delete(h);
        });
      } };
    }
    __name(xn, "xn");
    l(xn, "timer");
    let Hi = 640, qi = 65536;
    function $i(e = {}) {
      var _a, _b, _c, _d;
      let t = 0, n = null, u = null, h = false, s = [];
      return { id: "body", require: ["pos", "area"], jumpForce: (_a = e.jumpForce) != null ? _a : Hi, gravityScale: (_b = e.gravityScale) != null ? _b : 1, isStatic: (_c = e.isStatic) != null ? _c : false, mass: (_d = e.mass) != null ? _d : 1, add() {
        if (this.mass === 0)
          throw new Error("Can't set body mass to 0");
        s.push(this.onCollideUpdate((c, f) => {
          if (!!c.is("body") && !f.resolved && (this.trigger("beforePhysicsResolve", f), c.trigger("beforePhysicsResolve", f.reverse()), !f.resolved && !(this.isStatic && c.isStatic))) {
            if (!this.isStatic && !c.isStatic) {
              let m = this.mass + c.mass;
              this.pos = this.pos.add(f.displacement.scale(c.mass / m)), c.pos = c.pos.add(f.displacement.scale(-this.mass / m)), this.transform = it(this), c.transform = it(c);
            } else {
              let m = !this.isStatic && c.isStatic ? f : f.reverse();
              m.source.pos = m.source.pos.add(m.displacement), m.source.transform = it(m.source);
            }
            f.resolved = true, this.trigger("physicsResolve", f), c.trigger("physicsResolve", f.reverse());
          }
        })), s.push(this.onPhysicsResolve((c) => {
          d.gravity && (c.isBottom() && this.isFalling() ? (t = 0, n = c.target, u = c.target.pos, h ? h = false : this.trigger("ground", n)) : c.isTop() && this.isJumping() && (t = 0, this.trigger("headbutt", c.target)));
        }));
      }, update() {
        var _a2;
        if (!d.gravity || this.isStatic)
          return;
        if (h && (n = null, u = null, this.trigger("fallOff"), h = false), n)
          if (!this.isColliding(n) || !n.exists() || !n.is("body"))
            h = true;
          else {
            !n.pos.eq(u) && e.stickToPlatform !== false && this.moveBy(n.pos.sub(u)), u = n.pos;
            return;
          }
        let c = t;
        t += d.gravity * this.gravityScale * te(), t = Math.min(t, (_a2 = e.maxVelocity) != null ? _a2 : qi), c < 0 && t >= 0 && this.trigger("fall"), this.move(0, t);
      }, destroy() {
        s.forEach((c) => c.cancel());
      }, onPhysicsResolve(c) {
        return this.on("physicsResolve", c);
      }, onBeforePhysicsResolve(c) {
        return this.on("beforePhysicsResolve", c);
      }, curPlatform() {
        return n;
      }, isGrounded() {
        return n !== null;
      }, isFalling() {
        return t > 0;
      }, isJumping() {
        return t < 0;
      }, jump(c) {
        n = null, u = null, t = -c || -this.jumpForce;
      }, onGround(c) {
        return this.on("ground", c);
      }, onFall(c) {
        return this.on("fall", c);
      }, onFallOff(c) {
        return this.on("fallOff", c);
      }, onHeadbutt(c) {
        return this.on("headbutt", c);
      } };
    }
    __name($i, "$i");
    l($i, "body");
    function zi(e = 2) {
      let t = e, n = [];
      return { id: "doubleJump", require: ["body"], numJumps: e, add() {
        n.push(this.onGround(() => {
          t = this.numJumps;
        }));
      }, destroy() {
        n.forEach((u) => u.cancel());
      }, doubleJump(u) {
        t <= 0 || (t < this.numJumps && this.trigger("doubleJump"), t--, this.jump(u));
      }, onDoubleJump(u) {
        return this.on("doubleJump", u);
      }, inspect() {
        return `${t}`;
      } };
    }
    __name(zi, "zi");
    l(zi, "doubleJump");
    function Yi(e, t = {}) {
      return { id: "shader", shader: e, uniform: t };
    }
    __name(Yi, "Yi");
    l(Yi, "shader");
    function Xi() {
      return { id: "fixed", fixed: true };
    }
    __name(Xi, "Xi");
    l(Xi, "fixed");
    function Sn(e) {
      return { id: "stay", stay: true, scenesToStay: e };
    }
    __name(Sn, "Sn");
    l(Sn, "stay");
    function Ki(e) {
      if (e == null)
        throw new Error("health() requires the initial amount of hp");
      return { id: "health", hurt(t = 1) {
        this.setHP(e - t), this.trigger("hurt");
      }, heal(t = 1) {
        this.setHP(e + t), this.trigger("heal");
      }, hp() {
        return e;
      }, setHP(t) {
        e = t, e <= 0 && this.trigger("death");
      }, onHurt(t) {
        return this.on("hurt", t);
      }, onHeal(t) {
        return this.on("heal", t);
      }, onDeath(t) {
        return this.on("death", t);
      }, inspect() {
        return `${e}`;
      } };
    }
    __name(Ki, "Ki");
    l(Ki, "health");
    function Wi(e, t = {}) {
      var _a;
      if (e == null)
        throw new Error("lifespan() requires time");
      let n = (_a = t.fade) != null ? _a : 0;
      return { id: "lifespan", add() {
        return __async(this, null, function* () {
          yield ot(e), n > 0 && this.opacity && (yield It(this.opacity, 0, n, (u) => this.opacity = u, Ze.linear)), this.destroy();
        });
      } };
    }
    __name(Wi, "Wi");
    l(Wi, "lifespan");
    function Ji(e, t, n) {
      if (!e)
        throw new Error("state() requires an initial state");
      let u = {};
      function h(m) {
        u[m] || (u[m] = { enter: new Z(), end: new Z(), update: new Z(), draw: new Z() });
      }
      __name(h, "h");
      l(h, "initStateEvents");
      function s(m, p, y) {
        return h(p), u[p][m].add(y);
      }
      __name(s, "s");
      l(s, "on");
      function c(m, p, ...y) {
        h(p), u[p][m].trigger(...y);
      }
      __name(c, "c");
      l(c, "trigger");
      let f = false;
      return { id: "state", state: e, enterState(m, ...p) {
        if (f = true, t && !t.includes(m))
          throw new Error(`State not found: ${m}`);
        let y = this.state;
        if (n) {
          if (!(n == null ? void 0 : n[y]))
            return;
          let U = typeof n[y] == "string" ? [n[y]] : n[y];
          if (!U.includes(m))
            throw new Error(`Cannot transition state from "${y}" to "${m}". Available transitions: ${U.map((M) => `"${M}"`).join(", ")}`);
        }
        c("end", y, ...p), this.state = m, c("enter", m, ...p), c("enter", `${y} -> ${m}`, ...p);
      }, onStateTransition(m, p, y) {
        return s("enter", `${m} -> ${p}`, y);
      }, onStateEnter(m, p) {
        return s("enter", m, p);
      }, onStateUpdate(m, p) {
        return s("update", m, p);
      }, onStateDraw(m, p) {
        return s("draw", m, p);
      }, onStateEnd(m, p) {
        return s("end", m, p);
      }, update() {
        f || (c("enter", e), f = true), c("update", this.state);
      }, draw() {
        c("draw", this.state);
      }, inspect() {
        return this.state;
      } };
    }
    __name(Ji, "Ji");
    l(Ji, "state");
    function Qi(e = 1) {
      let t = 0, n = false;
      return { require: ["opacity"], add() {
        this.opacity = 0;
      }, update() {
        n || (t += te(), this.opacity = mt(t, 0, e, 0, 1), t >= e && (this.opacity = 1, n = true));
      } };
    }
    __name(Qi, "Qi");
    l(Qi, "fadeIn");
    function Bt(e) {
      x.loaded ? e() : d.ev.on("load", e);
    }
    __name(Bt, "Bt");
    l(Bt, "onLoad");
    function Zi(e, t) {
      d.scenes[e] = t;
    }
    __name(Zi, "Zi");
    l(Zi, "scene");
    function es(e, ...t) {
      if (!d.scenes[e])
        throw new Error(`Scene not found: ${e}`);
      d.ev.onOnce("frameEnd", () => {
        d.ev = new he(), d.objEvents = new he(), d.root.get().forEach((n) => {
          (!n.stay || n.scenesToStay && !n.scenesToStay.includes(e)) && d.root.remove(n);
        }), d.root.clearEvents(), d.cam = { pos: null, scale: b(1), angle: 0, shake: 0, transform: new I() }, d.gravity = 0, d.scenes[e](...t), i.debug !== false && Un(), i.burp && En();
      });
    }
    __name(es, "es");
    l(es, "go");
    function ts(e, t) {
      try {
        return JSON.parse(window.localStorage[e]);
      } catch (e2) {
        return t ? (Cn(e, t), t) : null;
      }
    }
    __name(ts, "ts");
    l(ts, "getData");
    function Cn(e, t) {
      window.localStorage[e] = JSON.stringify(t);
    }
    __name(Cn, "Cn");
    l(Cn, "setData");
    function Tn(e) {
      let t = e(Me);
      for (let n in t)
        Me[n] = t[n], i.global !== false && (window[n] = t[n]);
      return Me;
    }
    __name(Tn, "Tn");
    l(Tn, "plug");
    function ht() {
      return b(N() / 2, j() / 2);
    }
    __name(ht, "ht");
    l(ht, "center");
    function ns(e, t) {
      return { id: "tile", tilePos: t.clone(), setTilePos(...n) {
        let u = b(...n);
        this.tilePos = u.clone(), this.pos = b(this.tilePos.x * e.tileWidth(), this.tilePos.y * e.tileHeight());
      }, moveLeft() {
        this.setTilePos(this.tilePos.add(b(-1, 0)));
      }, moveRight() {
        this.setTilePos(this.tilePos.add(b(1, 0)));
      }, moveUp() {
        this.setTilePos(this.tilePos.add(b(0, -1)));
      }, moveDown() {
        this.setTilePos(this.tilePos.add(b(0, 1)));
      } };
    }
    __name(ns, "ns");
    l(ns, "tile");
    function rs() {
      return { id: "obstacle", require: ["tile"], isObstacle: true };
    }
    __name(rs, "rs");
    l(rs, "obstacle");
    function is(e, t) {
      var _a;
      if (!t.tileWidth || !t.tileHeight)
        throw new Error("Must provide tileWidth and tileHeight.");
      let n = We([ut((_a = t.pos) != null ? _a : b(0))]), u = e.length, h = 0, s = { id: "level", tileWidth() {
        return t.tileWidth;
      }, tileHeight() {
        return t.tileHeight;
      }, getPos(...c) {
        let f = b(...c);
        return b(f.x * t.tileWidth, f.y * t.tileHeight);
      }, spawn(c, ...f) {
        let m = b(...f), p = (() => {
          if (t.tiles[c]) {
            if (typeof t.tiles[c] != "function")
              throw new Error("Level symbol def must be a function returning a component list");
            return t.tiles[c](m);
          } else if (t.wildcardTile)
            return t.wildcardTile(c, m);
        })();
        if (!p)
          return;
        let y = b(m.x * t.tileWidth, m.y * t.tileHeight);
        for (let U of p)
          if (U.id === "pos") {
            y.x += U.pos.x, y.y += U.pos.y;
            break;
          }
        return p.push(ut(y)), p.push(ns(this, m)), n.add(p);
      }, numColumns() {
        return h;
      }, numRows() {
        return u;
      }, levelWidth() {
        return h * t.tileWidth;
      }, levelHeight() {
        return u * t.tileHeight;
      } };
      return n.use(s), e.forEach((c, f) => {
        let m = c.split("");
        h = Math.max(m.length, h), m.forEach((p, y) => {
          n.spawn(p, b(y, f));
        });
      }), n;
    }
    __name(is, "is");
    l(is, "addLevel");
    function ss(e) {
      let t = a.canvas.captureStream(e), n = T.ctx.createMediaStreamDestination();
      T.masterNode.connect(n);
      let u = new MediaRecorder(t), h = [];
      return u.ondataavailable = (s) => {
        s.data.size > 0 && h.push(s.data);
      }, u.onerror = () => {
        T.masterNode.disconnect(n), t.getTracks().forEach((s) => s.stop());
      }, u.start(), { resume() {
        u.resume();
      }, pause() {
        u.pause();
      }, stop() {
        return u.stop(), T.masterNode.disconnect(n), t.getTracks().forEach((s) => s.stop()), new Promise((s) => {
          u.onstop = () => {
            s(new Blob(h, { type: "video/mp4" }));
          };
        });
      }, download(s = "kaboom.mp4") {
        this.stop().then((c) => qt(s, c));
      } };
    }
    __name(ss, "ss");
    l(ss, "record");
    function os() {
      return document.activeElement === a.canvas;
    }
    __name(os, "os");
    l(os, "isFocused");
    function as(e) {
      e.destroy();
    }
    __name(as, "as");
    l(as, "destroy");
    let We = d.root.add.bind(d.root), us = d.root.readd.bind(d.root), cs = d.root.removeAll.bind(d.root), An = d.root.get.bind(d.root), On = d.root.getAll.bind(d.root);
    function Rn(e = 2, t = 1) {
      let n = 0;
      return { id: "boom", require: ["scale"], update() {
        let u = Math.sin(n * e) * t;
        u < 0 && this.destroy(), this.scale = b(u), n += te();
      } };
    }
    __name(Rn, "Rn");
    l(Rn, "boom");
    let hs = Ce(null, Zn), ls = Ce(null, er);
    function ds(e, t = {}) {
      var _a, _b;
      let n = We([ut(e), Sn()]), u = (t.speed || 1) * 5, h = t.scale || 1;
      n.add([Ft(ls), ct(0), Mt("center"), Rn(u, h), ...(_a = t.comps) != null ? _a : []]);
      let s = n.add([Ft(hs), ct(0), Mt("center"), xn(0.4 / u, () => s.use(Rn(u, h))), ...(_b = t.comps) != null ? _b : []]);
      return s.onDestroy(() => n.destroy()), n;
    }
    __name(ds, "ds");
    l(ds, "addKaboom");
    function fs() {
      d.ev.trigger("input"), a.keyState.down.forEach((e) => d.ev.trigger("keyDown", e)), a.mouseState.down.forEach((e) => d.ev.trigger("mouseDown", e)), a.virtualButtonState.down.forEach((e) => d.ev.trigger("virtualButtonDown", e));
      for (let e of navigator.getGamepads())
        ;
    }
    __name(fs, "fs");
    l(fs, "inputFrame");
    function Pn() {
      d.root.update();
    }
    __name(Pn, "Pn");
    l(Pn, "updateFrame");
    let ms = 64;
    class lt {
      constructor(t, n, u, h = false) {
        __publicField(this, "source");
        __publicField(this, "target");
        __publicField(this, "displacement");
        __publicField(this, "resolved", false);
        this.source = t, this.target = n, this.displacement = u, this.resolved = h;
      }
      reverse() {
        return new lt(this.target, this.source, this.displacement.scale(-1), this.resolved);
      }
      hasOverlap() {
        return !this.displacement.isZero();
      }
      isLeft() {
        return this.displacement.x > 0;
      }
      isRight() {
        return this.displacement.x < 0;
      }
      isTop() {
        return this.displacement.y > 0;
      }
      isBottom() {
        return this.displacement.y < 0;
      }
      preventResolution() {
        this.resolved = true;
      }
    }
    __name(lt, "lt");
    l(lt, "Collision");
    function ps() {
      let e = {}, t = i.hashGridSize || ms, n = new I(), u = [];
      function h(s) {
        if (u.push(n.clone()), s.pos && n.translate(s.pos), s.scale && n.scale(s.scale), s.angle && n.rotate(s.angle), s.transform = n.clone(), s.c("area") && !s.paused) {
          let c = s, m = c.worldArea().bbox(), p = Math.floor(m.pos.x / t), y = Math.floor(m.pos.y / t), U = Math.ceil((m.pos.x + m.width) / t), M = Math.ceil((m.pos.y + m.height) / t), P = /* @__PURE__ */ new Set();
          for (let H = p; H <= U; H++)
            for (let $ = y; $ <= M; $++)
              if (!e[H])
                e[H] = {}, e[H][$] = [c];
              else if (!e[H][$])
                e[H][$] = [c];
              else {
                let ye = e[H][$];
                e:
                  for (let J of ye) {
                    if (!J.exists() || P.has(J.id))
                      continue;
                    for (let A of c.collisionIgnore)
                      if (J.is(A))
                        continue e;
                    for (let A of J.collisionIgnore)
                      if (c.is(A))
                        continue e;
                    let q = $n(c.worldArea(), J.worldArea());
                    if (q) {
                      let A = new lt(c, J, q);
                      c.trigger("collideUpdate", J, A);
                      let _ = A.reverse();
                      _.resolved = A.resolved, J.trigger("collideUpdate", c, _);
                    }
                    P.add(J.id);
                  }
                ye.push(c);
              }
        }
        s.get().forEach(h), n = u.pop();
      }
      __name(h, "h");
      l(h, "checkObj"), h(d.root);
    }
    __name(ps, "ps");
    l(ps, "checkFrame");
    function gs() {
      var _a;
      let e = d.cam, t = w.fromAngle(Qe(0, 360)).scale(e.shake);
      e.shake = Ge(e.shake, 0, 5 * te()), e.transform = new I().translate(ht()).scale(e.scale).rotate(e.angle).translate(((_a = e.pos) != null ? _a : ht()).scale(-1).add(t)), d.root.draw(), le();
    }
    __name(gs, "gs");
    l(gs, "drawFrame");
    function ws() {
      let e = oe();
      ae(() => {
        let t = N() / 2, n = 24, u = b(N() / 2, j() / 2).sub(b(t / 2, n / 2));
        W({ pos: b(0), width: N(), height: j(), color: S(0, 0, 0) }), W({ pos: u, width: t, height: n, fill: false, outline: { width: 4 } }), W({ pos: u, width: t * e, height: n });
      }), d.ev.trigger("loading", e);
    }
    __name(ws, "ws");
    l(ws, "drawLoadScreen");
    function Dn(e, t) {
      ae(() => {
        let n = b(8);
        ee(), k3(e);
        let u = be({ text: t, font: vt, size: 16, pos: n, color: S(255, 255, 255), fixed: true }), h = u.width + n.x * 2, s = u.height + n.x * 2;
        e.x + h >= N() && k3(b(-h, 0)), e.y + s >= j() && k3(b(0, -s)), W({ width: h, height: s, color: S(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), ve(u), K();
      });
    }
    __name(Dn, "Dn");
    l(Dn, "drawInspectText");
    function bs() {
      if (L.inspect) {
        let e = null;
        for (let t of On())
          if (t.c("area") && t.isHovering()) {
            e = t;
            break;
          }
        if (d.root.drawInspect(), e) {
          let t = [], n = e.inspect();
          for (let u in n)
            n[u] ? t.push(`${u}: ${n[u]}`) : t.push(`${u}`);
          Dn(kr(Pe()), t.join(`
`));
        }
        Dn(b(8), `FPS: ${L.fps()}`);
      }
      L.paused && ae(() => {
        ee(), k3(N(), 0), k3(-8, 8);
        let e = 32;
        W({ width: e, height: e, anchor: "topright", color: S(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let t = 1; t <= 2; t++)
          W({ width: 4, height: e * 0.6, anchor: "center", pos: b(-e / 3 * t, e * 0.5), color: S(255, 255, 255), radius: 2, fixed: true });
        K();
      }), L.timeScale !== 1 && ae(() => {
        ee(), k3(N(), j()), k3(-8, -8);
        let e = 8, t = be({ text: L.timeScale.toFixed(1), font: vt, size: 16, color: S(255, 255, 255), pos: b(-e), anchor: "botright", fixed: true });
        W({ width: t.width + e * 2 + e * 4, height: t.height + e * 2, anchor: "botright", color: S(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let n = 0; n < 2; n++) {
          let u = L.timeScale < 1;
          un({ p1: b(-t.width - e * (u ? 2 : 3.5), -e), p2: b(-t.width - e * (u ? 2 : 3.5), -e - t.height), p3: b(-t.width - e * (u ? 3.5 : 2), -e - t.height / 2), pos: b(-n * e * 1 + (u ? -e * 0.5 : 0), 0), color: S(255, 255, 255), fixed: true });
        }
        ve(t), K();
      }), L.curRecording && ae(() => {
        ee(), k3(0, j()), k3(24, -24), ge({ radius: 12, color: S(255, 0, 0), opacity: kt(0, 1, Ot() * 4), fixed: true }), K();
      }), L.showLog && d.logs.length > 0 && ae(() => {
        ee(), k3(0, j()), k3(8, -8);
        let e = 8, t = be({ text: d.logs.join(`
`), font: vt, pos: b(e, -e), anchor: "botleft", size: 16, width: N() * 0.6, lineSpacing: e / 2, fixed: true, styles: { time: { color: S(127, 127, 127) }, info: { color: S(255, 255, 255) }, error: { color: S(255, 0, 127) } } });
        W({ width: t.width + e * 2, height: t.height + e * 2, anchor: "botleft", color: S(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), ve(t), K();
      });
    }
    __name(bs, "bs");
    l(bs, "drawDebug");
    function vs() {
      let e = Pe(), t = l((u, h, s) => {
        ge({ radius: 80 / 2, pos: u, outline: { width: 4, color: S(0, 0, 0) }, opacity: 0.5, fixed: true }), s && nt({ text: s, pos: u, color: S(0, 0, 0), size: 40, anchor: "center", opacity: 0.5, fixed: true }), rt("left") && Hn(new de(u, 80 / 2), e) && d.ev.onOnce("input", () => {
          a.virtualButtonState.press(h), d.ev.trigger("virtualButtonPress", h), a.keyState.press(h), d.ev.trigger("keyPress", h);
        }), At("left") && d.ev.onOnce("input", () => {
          a.virtualButtonState.release(h), d.ev.trigger("virtualButtonRelease", h), a.keyState.release(h), d.ev.trigger("keyRelease", h);
        });
      }, "drawCircleButton"), n = l((u, h, s) => {
        W({ width: 64, height: 64, pos: u, outline: { width: 4, color: S(0, 0, 0) }, radius: 4, anchor: "center", opacity: 0.5, fixed: true }), s && nt({ text: s, pos: u, color: S(0, 0, 0), size: 40, anchor: "center", opacity: 0.5, fixed: true }), rt("left") && Ve(new V(u.add(-64 / 2, -64 / 2), 64, 64), e) && d.ev.onOnce("input", () => {
          a.virtualButtonState.press(h), d.ev.trigger("virtualButtonPress", h), a.keyState.press(h), d.ev.trigger("keyPress", h);
        }), At("left") && d.ev.onOnce("input", () => {
          a.virtualButtonState.release(h), d.ev.trigger("virtualButtonRelease", h), a.keyState.release(h), d.ev.trigger("keyRelease", h);
        });
      }, "drawSquareButton");
      ae(() => {
        t(b(N() - 80, j() - 160), "a"), t(b(N() - 160, j() - 80), "b"), n(b(60, j() - 124), "left"), n(b(188, j() - 124), "right"), n(b(124, j() - 188), "up"), n(b(124, j() - 60), "down");
      });
    }
    __name(vs, "vs");
    l(vs, "drawVirtualControls"), i.debug !== false && Un(), i.burp && En();
    function ys(e) {
      d.ev.on("loading", e);
    }
    __name(ys, "ys");
    l(ys, "onLoadUpdate");
    function Us(e) {
      d.ev.on("resize", e);
    }
    __name(Us, "Us");
    l(Us, "onResize");
    function Es(e) {
      d.ev.on("error", e);
    }
    __name(Es, "Es");
    l(Es, "onError");
    function Lt(e) {
      Mn(() => {
        ae(() => {
          let u = N(), h = j(), s = { size: 36, width: u - 32 * 2, letterSpacing: 4, lineSpacing: 4, font: vt, fixed: true };
          W({ width: u, height: h, color: S(0, 0, 255), fixed: true });
          let c = be(__spreadProps(__spreadValues({}, s), { text: e.name, pos: b(32), color: S(255, 128, 0), fixed: true }));
          ve(c), nt(__spreadProps(__spreadValues({}, s), { text: e.message, pos: b(32, 32 + c.height + 16), fixed: true })), K(), d.ev.trigger("error", e);
        });
      });
    }
    __name(Lt, "Lt");
    l(Lt, "handleErr");
    function xs() {
      a.keyState.update(), a.mouseState.update(), a.virtualButtonState.update(), a.charInputted = [], a.isMouseMoved = false;
    }
    __name(xs, "xs");
    l(xs, "resetInputState");
    function Mn(e) {
      a.loopID !== null && cancelAnimationFrame(a.loopID);
      let t = l((n) => {
        if (a.stopped)
          return;
        if (document.visibilityState !== "visible") {
          a.loopID = requestAnimationFrame(t);
          return;
        }
        let u = n / 1e3, h = u - a.realTime;
        a.realTime = u, a.skipTime || (a.dt = h, a.time += te(), a.fpsCounter.tick(a.dt)), a.skipTime = false, a.numFrames++, Pr(), e(), Mr(), xs(), d.ev.trigger("frameEnd"), a.loopID = requestAnimationFrame(t);
      }, "frame");
      t(0);
    }
    __name(Mn, "Mn");
    l(Mn, "run");
    function Ss() {
      d.ev.onOnce("frameEnd", () => {
        a.stopped = true, o.clear(o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT | o.STENCIL_BUFFER_BIT);
        let e = o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS);
        for (let t = 0; t < e; t++)
          o.activeTexture(o.TEXTURE0 + t), o.bindTexture(o.TEXTURE_2D, null), o.bindTexture(o.TEXTURE_CUBE_MAP, null);
        o.bindBuffer(o.ARRAY_BUFFER, null), o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, null), o.bindRenderbuffer(o.RENDERBUFFER, null), o.bindFramebuffer(o.FRAMEBUFFER, null), r.forEach((t) => t()), o.deleteBuffer(g.vbuf), o.deleteBuffer(g.ibuf);
        for (let t in Y)
          a.canvas.removeEventListener(t, Y[t]);
        for (let t in ze)
          document.removeEventListener(t, ze[t]);
        for (let t in Re)
          window.removeEventListener(t, Re[t]);
      });
    }
    __name(Ss, "Ss");
    l(Ss, "quit");
    function It(e, t, n, u, h = Ze.linear) {
      let s = 0, c = [], f = Dt(() => {
        s += te();
        let m = Math.min(s / n, 1);
        u(Ge(e, t, h(m))), m === 1 && (f.cancel(), u(t), c.forEach((p) => p()));
      });
      return { get paused() {
        return f.paused;
      }, set paused(m) {
        f.paused = m;
      }, onFinish(m) {
        c.push(m);
      }, then(m) {
        return this.onFinish(m), this;
      }, cancel() {
        f.cancel();
      }, finish() {
        f.cancel(), u(t), c.forEach((m) => m());
      } };
    }
    __name(It, "It");
    l(It, "tween");
    let dt = true;
    Mn(() => {
      x.loaded || oe() === 1 && !dt && (x.loaded = true, d.ev.trigger("load")), !x.loaded && i.loadingScreen !== false || dt ? ws() : (fs(), L.paused || Pn(), ps(), gs(), i.debug !== false && bs(), i.virtualControls && gn() && vs()), dt && (dt = false);
    });
    let Me = { VERSION: js, loadRoot: et, loadProgress: oe, loadSprite: Ce, loadSpriteAtlas: Jt, loadSound: xr, loadBitmapFont: br, loadFont: Ne, loadShader: Ur, loadShaderURL: Er, loadAseprite: yr, loadPedit: vr, loadBean: Sr, load: z, getSprite: Zt, getSound: en, getFont: Cr, getBitmapFont: tn, getShader: nn, Asset: R, SpriteData: O, SoundData: F, width: N, height: j, center: ht, dt: te, time: Ot, screenshot: Jr, record: ss, isFocused: os, setCursor: pn, setFullscreen: Qr, isFullscreen: Rt, isTouchScreen: gn, onLoad: Bt, onLoadUpdate: ys, onResize: Us, onError: Es, camPos: Zr, camScale: ei, camRot: ti, shake: ni, toScreen: Pt, toWorld: wn, gravity: Oi, add: We, destroy: as, destroyAll: cs, get: An, getAll: On, readd: us, pos: ut, scale: ct, rotate: Ri, color: Pi, opacity: Di, anchor: Mt, area: Gi, sprite: Ft, text: Vi, rect: ji, circle: _i, uvquad: ki, outline: Ni, body: $i, doubleJump: zi, shader: Yi, timer: xn, fixed: Xi, stay: Sn, health: Ki, lifespan: Wi, z: Mi, move: Bi, offscreen: Ii, follow: Fi, state: Ji, fadeIn: Qi, obstacle: rs, on: De, onUpdate: Dt, onDraw: ri, onAdd: vn, onDestroy: ii, onCollide: si, onClick: oi, onHover: ai, onHoverUpdate: ui, onHoverEnd: ci, onKeyDown: li, onKeyPress: me, onKeyPressRepeat: di, onKeyRelease: fi, onMouseDown: mi, onMousePress: yn, onMouseRelease: pi, onMouseMove: gi, onCharInput: wi, onTouchStart: bi, onTouchMove: vi, onTouchEnd: yi, onScroll: Ui, onVirtualButtonPress: xi, onVirtualButtonDown: Ei, onVirtualButtonRelease: Si, onGamepadButtonDown: Ci, onGamepadButtonPress: Ti, onGamepadButtonRelease: Ai, mousePos: Pe, mouseDeltaPos: mn, isKeyDown: $r, isKeyPressed: Hr, isKeyPressedRepeat: qr, isKeyReleased: zr, isMouseDown: _r, isMousePressed: rt, isMouseReleased: At, isMouseMoved: Nr, isVirtualButtonPressed: Yr, isVirtualButtonDown: Xr, isVirtualButtonReleased: Kr, charInputted: Wr, loop: hi, wait: ot, play: He, volume: Or, burp: on, audioCtx: T.ctx, Timer: pe, Line: ne, Rect: V, Circle: de, Polygon: se, Vec2: w, Color: C, Mat4: I, Quad: G, RNG: Ie, rand: Qe, randi: _t, randSeed: Vn, vec2: b, rgb: S, hsl2rgb: In, quad: Gn, choose: kn, chance: jn, lerp: Ge, tween: It, easings: Ze, map: mt, mapc: Ln, wave: kt, deg2rad: ce, rad2deg: ft, testLineLine: Le, testRectRect: _n, testRectLine: Nn, testRectPoint: Ve, drawSprite: Lr, drawText: nt, formatText: be, drawRect: W, drawLine: $e, drawLines: an, drawTriangle: un, drawCircle: ge, drawEllipse: cn, drawUVQuad: Oe, drawPolygon: we, drawFormattedText: ve, drawMasked: Ir, drawSubtracted: Gr, pushTransform: ee, popTransform: K, pushTranslate: k3, pushScale: Te, pushRotate: Ae, pushMatrix: Br, usePostEffect: Dr, debug: L, scene: Zi, go: es, addLevel: is, getData: ts, setData: Cn, download: wt, downloadJSON: Wn, downloadText: Ht, downloadBlob: qt, plug: Tn, ASCII_CHARS: rr, canvas: a.canvas, addKaboom: ds, LEFT: w.LEFT, RIGHT: w.RIGHT, UP: w.UP, DOWN: w.DOWN, RED: C.RED, GREEN: C.GREEN, BLUE: C.BLUE, YELLOW: C.YELLOW, MAGENTA: C.MAGENTA, CYAN: C.CYAN, WHITE: C.WHITE, BLACK: C.BLACK, quit: Ss, Event: Z, EventHandler: he };
    if (i.plugins && i.plugins.forEach(Tn), i.global !== false)
      for (let e in Me)
        window[e] = Me[e];
    return a.canvas.focus(), Me;
  }, "default");

  // editor/plugins/gridObject.js
  var GridObject = class {
    constructor(grid, x, y) {
      this.grid = grid;
      this.x = x;
      this.y = y;
      this.value = null;
    }
    setValue(value) {
      this.destroy();
      this.value = value;
      this.value.pos = this.getWorldPos();
      this.scale = 0.25;
    }
    getValue() {
      return this.value;
    }
    destroy() {
      if (this.value != null) {
        this.value.destroy();
        this.value = null;
      }
    }
    toString() {
      return this.x + ", " + this.y;
    }
    getWorldPos() {
      return vec2(this.x * this.grid.cellSize, this.y * this.grid.cellSize).add(this.grid.pos);
    }
  };
  __name(GridObject, "GridObject");

  // editor/plugins/grid.js
  function GridClass() {
    return {
      createGrid(width, height, cellSize, origin, createGridObject) {
        if (createGridObject === void 0)
          return new Grid(width, height, cellSize, origin);
        else
          return new Grid(width, height, cellSize, origin, createGridObject);
      }
    };
  }
  __name(GridClass, "GridClass");
  var Grid = class {
    constructor(width, height, cellSize, origin, createGridObject = (g, x, y) => new GridObject(g, x, y)) {
      this.width = width;
      this.height = height;
      this.cellSize = cellSize;
      this.origin = origin;
      this.createGridObject = createGridObject;
      this.gridArray = [];
      for (var i = 0; i < this.width; i++) {
        this.gridArray.push([]);
        for (var j = 0; j < this.height; j++) {
          var o = createGridObject(this, i, j);
          o.setValue(add([
            pos(),
            sprite("a"),
            scale(0.25)
          ]));
          this.gridArray[i].push(o);
        }
      }
    }
    getGridXY(pos2) {
      var worldPos = toWorld(pos2);
      worldPos.x = Math.floor(worldPos.sub(this.origin).x / this.cellSize);
      worldPos.y = Math.floor(worldPos.sub(this.origin).y / this.cellSize);
      return worldPos;
    }
    getWorldPos(x, y) {
      var vector2 = vec2(x * this.cellSize, y * this.cellSize).add(this.origin);
      return vector2;
    }
    setGridObjectXY(x, y, value) {
      if (x < this.width && x >= 0 && y < this.height && y >= 0)
        this.gridArray[x][y] = value;
    }
    setGridObjectWP(worldPosition, value) {
      var gridXY = this.getGridXY(worldPosition);
      this.setGridObjectXY(gridXY.x, gridXY.y, value);
    }
    getGridObjectXY(x, y) {
      if (x < this.width && x >= 0 && y < this.height && y >= 0)
        return this.gridArray[x][y];
      else
        return null;
    }
    getGridObjectWP(worldPosition) {
      var gridXY = this.getGridXY(worldPosition);
      this.getGridObjectXY(gridXY.x, gridXY.y);
    }
    triggerGridObjectChanged(x, y) {
      debug.log("Placed @" + x + "," + y + "!");
    }
    displayGridOutlines() {
      for (var i = 0; i <= this.height; i++) {
        var v1 = vec2(0, i * this.cellSize).add(this.origin);
        var v2 = vec2(this.width * this.cellSize, i * this.cellSize).add(this.origin);
        drawLine({
          p1: v1,
          p2: v2,
          width: 2,
          color: rgb(77, 155, 230)
        });
      }
      for (var j = 0; j <= this.width; j++) {
        var v1 = vec2(j * this.cellSize, 0).add(this.origin);
        var v2 = vec2(j * this.cellSize, this.height * this.cellSize).add(this.origin);
        drawLine({
          p1: v1,
          p2: v2,
          width: 2,
          color: rgb(77, 155, 230)
        });
      }
    }
  };
  __name(Grid, "Grid");

  // editor/editorScene.js
  var k;
  function editorScene(kab) {
    k = kab;
    const canvas = document.getElementById("kCan");
    var ASB = document.getElementById("add-square-btn");
    ASB.onclick = () => {
      add([
        pos(center()),
        anchor("center"),
        rect(16, 16),
        color(255, 255, 255),
        area(),
        rotate(),
        scale()
      ]);
    };
    var editMode = "translate";
    var selectedObject = null;
    onKeyPress("1", () => {
      editMode = "translate";
    });
    onKeyPress("2", () => {
      editMode = "rotate";
    });
    onKeyPress("3", () => {
      editMode = "scale";
    });
    onMousePress(() => {
      var u = false;
      for (const o of get("area").reverse()) {
        if (o.isHovering()) {
          console.log(o);
          if (o.is("adjustment_arrow")) {
            console.log("arrow clicked!");
            break;
          }
          u = true;
          selectedObject = o;
          displayObjectDetails(o);
          showAdjustmentArrows(o);
          break;
        }
      }
      if (!u)
        selectedObject = null;
    });
    onMouseDown(() => {
    });
    plug(GridClass);
    debug.inspect = true;
    onDraw(() => {
      if (!debug.inspect)
        return;
      console.log(k.width() + ", " + k.height() + " -> " + center());
    });
  }
  __name(editorScene, "editorScene");
  function showAdjustmentArrows(obj) {
    if (obj.children.length > 0)
      return;
    obj.add([
      pos(),
      anchor("right"),
      rect(16, 6),
      area(),
      color(RED),
      opacity(0.25),
      "adjustment_arrow"
    ]);
  }
  __name(showAdjustmentArrows, "showAdjustmentArrows");
  function displayObjectDetails(obj) {
    for (const comp in obj.inspect()) {
      var objComp = obj.c(comp);
      console.log(comp);
      console.log(objComp);
      for (const compVar in objComp) {
        if (typeof objComp[compVar] == "function" || compVar == "cleanups") {
          continue;
        }
        console.log("	- " + compVar + " -> " + objComp[compVar]);
        switch (typeof objComp[compVar]) {
          case "boolean":
            break;
          case "number":
            break;
          case "bigint":
            break;
          case "string":
            break;
          case "symbol":
            break;
          default:
          case "object":
            break;
        }
      }
      console.log("---------------");
    }
  }
  __name(displayObjectDetails, "displayObjectDetails");

  // code/main.js
  var k2 = Oo({
    width: 640,
    height: 480,
    background: [119, 67, 96],
    canvas: document.getElementById("kCan")
  });
  loadSprite("bean", "sprites/bean.png");
  scene("editor", editorScene);
  go("editor", k2);
})();
//# sourceMappingURL=game.js.map
