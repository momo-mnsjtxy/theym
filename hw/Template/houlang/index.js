var id = (e, t) => () => (t || e((t = {exports: {}}).exports, t), t.exports);
var vk = id((Gt, Xt) => {
    (function () {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
        new MutationObserver(r => {
            for (const s of r) if (s.type === "childList") for (const l of s.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && o(l)
        }).observe(document, {childList: !0, subtree: !0});

        function n(r) {
            const s = {};
            return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
        }

        function o(r) {
            if (r.ep) return;
            r.ep = !0;
            const s = n(r);
            fetch(r.href, s)
        }
    })();

    function il(e, t) {
        const n = Object.create(null), o = e.split(",");
        for (let r = 0; r < o.length; r++) n[o[r]] = !0;
        return t ? r => !!n[r.toLowerCase()] : r => !!n[r]
    }

    const Xe = {}, ao = [], qe = () => {
        }, ud = () => !1, cd = /^on[^a-z]/, zr = e => cd.test(e), ul = e => e.startsWith("onUpdate:"), ot = Object.assign,
        cl = (e, t) => {
            const n = e.indexOf(t);
            n > -1 && e.splice(n, 1)
        }, fd = Object.prototype.hasOwnProperty, Le = (e, t) => fd.call(e, t), ce = Array.isArray,
        io = e => tr(e) === "[object Map]", _o = e => tr(e) === "[object Set]", sa = e => tr(e) === "[object Date]",
        ye = e => typeof e == "function", Se = e => typeof e == "string", Fo = e => typeof e == "symbol",
        we = e => e !== null && typeof e == "object", mu = e => we(e) && ye(e.then) && ye(e.catch),
        gu = Object.prototype.toString, tr = e => gu.call(e), dd = e => tr(e).slice(8, -1),
        yu = e => tr(e) === "[object Object]",
        fl = e => Se(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
        Cr = il(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
        Kr = e => {
            const t = Object.create(null);
            return n => t[n] || (t[n] = e(n))
        }, pd = /-(\w)/g, Ot = Kr(e => e.replace(pd, (t, n) => n ? n.toUpperCase() : "")), hd = /\B([A-Z])/g,
        $n = Kr(e => e.replace(hd, "-$1").toLowerCase()), Ur = Kr(e => e.charAt(0).toUpperCase() + e.slice(1)),
        $r = Kr(e => e ? `on${Ur(e)}` : ""), Ho = (e, t) => !Object.is(e, t), Sr = (e, t) => {
            for (let n = 0; n < e.length; n++) e[n](t)
        }, Or = (e, t, n) => {
            Object.defineProperty(e, t, {configurable: !0, enumerable: !1, value: n})
        }, Ar = e => {
            const t = parseFloat(e);
            return isNaN(t) ? e : t
        }, vd = e => {
            const t = Se(e) ? Number(e) : NaN;
            return isNaN(t) ? e : t
        };
    let la;
    const Os = () => la || (la = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

    function Ie(e) {
        if (ce(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++) {
                const o = e[n], r = Se(o) ? bd(o) : Ie(o);
                if (r) for (const s in r) t[s] = r[s]
            }
            return t
        } else {
            if (Se(e)) return e;
            if (we(e)) return e
        }
    }

    const md = /;(?![^(]*\))/g, gd = /:([^]+)/, yd = /\/\*[^]*?\*\//g;

    function bd(e) {
        const t = {};
        return e.replace(yd, "").split(md).forEach(n => {
            if (n) {
                const o = n.split(gd);
                o.length > 1 && (t[o[0].trim()] = o[1].trim())
            }
        }), t
    }

    function x(e) {
        let t = "";
        if (Se(e)) t = e; else if (ce(e)) for (let n = 0; n < e.length; n++) {
            const o = x(e[n]);
            o && (t += o + " ")
        } else if (we(e)) for (const n in e) e[n] && (t += n + " ");
        return t.trim()
    }

    const _d = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", wd = il(_d);

    function bu(e) {
        return !!e || e === ""
    }

    function Cd(e, t) {
        if (e.length !== t.length) return !1;
        let n = !0;
        for (let o = 0; n && o < e.length; o++) n = jn(e[o], t[o]);
        return n
    }

    function jn(e, t) {
        if (e === t) return !0;
        let n = sa(e), o = sa(t);
        if (n || o) return n && o ? e.getTime() === t.getTime() : !1;
        if (n = Fo(e), o = Fo(t), n || o) return e === t;
        if (n = ce(e), o = ce(t), n || o) return n && o ? Cd(e, t) : !1;
        if (n = we(e), o = we(t), n || o) {
            if (!n || !o) return !1;
            const r = Object.keys(e).length, s = Object.keys(t).length;
            if (r !== s) return !1;
            for (const l in e) {
                const a = e.hasOwnProperty(l), u = t.hasOwnProperty(l);
                if (a && !u || !a && u || !jn(e[l], t[l])) return !1
            }
        }
        return String(e) === String(t)
    }

    function dl(e, t) {
        return e.findIndex(n => jn(n, t))
    }

    const ze = e => Se(e) ? e : e == null ? "" : ce(e) || we(e) && (e.toString === gu || !ye(e.toString)) ? JSON.stringify(e, _u, 2) : String(e),
        _u = (e, t) => t && t.__v_isRef ? _u(e, t.value) : io(t) ? {[`Map(${t.size})`]: [...t.entries()].reduce((n, [o, r]) => (n[`${o} =>`] = r, n), {})} : _o(t) ? {[`Set(${t.size})`]: [...t.values()]} : we(t) && !ce(t) && !yu(t) ? String(t) : t;
    let Ct;

    class wu {
        constructor(t = !1) {
            this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ct, !t && Ct && (this.index = (Ct.scopes || (Ct.scopes = [])).push(this) - 1)
        }

        get active() {
            return this._active
        }

        run(t) {
            if (this._active) {
                const n = Ct;
                try {
                    return Ct = this, t()
                } finally {
                    Ct = n
                }
            }
        }

        on() {
            Ct = this
        }

        off() {
            Ct = this.parent
        }

        stop(t) {
            if (this._active) {
                let n, o;
                for (n = 0, o = this.effects.length; n < o; n++) this.effects[n].stop();
                for (n = 0, o = this.cleanups.length; n < o; n++) this.cleanups[n]();
                if (this.scopes) for (n = 0, o = this.scopes.length; n < o; n++) this.scopes[n].stop(!0);
                if (!this.detached && this.parent && !t) {
                    const r = this.parent.scopes.pop();
                    r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
                }
                this.parent = void 0, this._active = !1
            }
        }
    }

    function Cu(e) {
        return new wu(e)
    }

    function $d(e, t = Ct) {
        t && t.active && t.effects.push(e)
    }

    function Wr() {
        return Ct
    }

    function qr(e) {
        Ct && Ct.cleanups.push(e)
    }

    const pl = e => {
        const t = new Set(e);
        return t.w = 0, t.n = 0, t
    }, $u = e => (e.w & bn) > 0, Su = e => (e.n & bn) > 0, Sd = ({deps: e}) => {
        if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= bn
    }, xd = e => {
        const {deps: t} = e;
        if (t.length) {
            let n = 0;
            for (let o = 0; o < t.length; o++) {
                const r = t[o];
                $u(r) && !Su(r) ? r.delete(e) : t[n++] = r, r.w &= ~bn, r.n &= ~bn
            }
            t.length = n
        }
    }, Ir = new WeakMap;
    let Oo = 0, bn = 1;
    const As = 30;
    let Mt;
    const Vn = Symbol(""), Is = Symbol("");

    class hl {
        constructor(t, n = null, o) {
            this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, $d(this, o)
        }

        run() {
            if (!this.active) return this.fn();
            let t = Mt, n = hn;
            for (; t;) {
                if (t === this) return;
                t = t.parent
            }
            try {
                return this.parent = Mt, Mt = this, hn = !0, bn = 1 << ++Oo, Oo <= As ? Sd(this) : aa(this), this.fn()
            } finally {
                Oo <= As && xd(this), bn = 1 << --Oo, Mt = this.parent, hn = n, this.parent = void 0, this.deferStop && this.stop()
            }
        }

        stop() {
            Mt === this ? this.deferStop = !0 : this.active && (aa(this), this.onStop && this.onStop(), this.active = !1)
        }
    }

    function aa(e) {
        const {deps: t} = e;
        if (t.length) {
            for (let n = 0; n < t.length; n++) t[n].delete(e);
            t.length = 0
        }
    }

    let hn = !0;
    const xu = [];

    function wo() {
        xu.push(hn), hn = !1
    }

    function Co() {
        const e = xu.pop();
        hn = e === void 0 ? !0 : e
    }

    function yt(e, t, n) {
        if (hn && Mt) {
            let o = Ir.get(e);
            o || Ir.set(e, o = new Map);
            let r = o.get(n);
            r || o.set(n, r = pl()), ku(r)
        }
    }

    function ku(e, t) {
        let n = !1;
        Oo <= As ? Su(e) || (e.n |= bn, n = !$u(e)) : n = !e.has(Mt), n && (e.add(Mt), Mt.deps.push(e))
    }

    function Jt(e, t, n, o, r, s) {
        const l = Ir.get(e);
        if (!l) return;
        let a = [];
        if (t === "clear") a = [...l.values()]; else if (n === "length" && ce(e)) {
            const u = Number(o);
            l.forEach((c, f) => {
                (f === "length" || f >= u) && a.push(c)
            })
        } else switch (n !== void 0 && a.push(l.get(n)), t) {
            case"add":
                ce(e) ? fl(n) && a.push(l.get("length")) : (a.push(l.get(Vn)), io(e) && a.push(l.get(Is)));
                break;
            case"delete":
                ce(e) || (a.push(l.get(Vn)), io(e) && a.push(l.get(Is)));
                break;
            case"set":
                io(e) && a.push(l.get(Vn));
                break
        }
        if (a.length === 1) a[0] && Ms(a[0]); else {
            const u = [];
            for (const c of a) c && u.push(...c);
            Ms(pl(u))
        }
    }

    function Ms(e, t) {
        const n = ce(e) ? e : [...e];
        for (const o of n) o.computed && ia(o);
        for (const o of n) o.computed || ia(o)
    }

    function ia(e, t) {
        (e !== Mt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
    }

    function kd(e, t) {
        var n;
        return (n = Ir.get(e)) == null ? void 0 : n.get(t)
    }

    const Td = il("__proto__,__v_isRef,__isVue"),
        Tu = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Fo)),
        Ed = vl(), Pd = vl(!1, !0), Od = vl(!0), ua = Ad();

    function Ad() {
        const e = {};
        return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
            e[t] = function (...n) {
                const o = Be(this);
                for (let s = 0, l = this.length; s < l; s++) yt(o, "get", s + "");
                const r = o[t](...n);
                return r === -1 || r === !1 ? o[t](...n.map(Be)) : r
            }
        }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
            e[t] = function (...n) {
                wo();
                const o = Be(this)[t].apply(this, n);
                return Co(), o
            }
        }), e
    }

    function Id(e) {
        const t = Be(this);
        return yt(t, "has", e), t.hasOwnProperty(e)
    }

    function vl(e = !1, t = !1) {
        return function (o, r, s) {
            if (r === "__v_isReactive") return !e;
            if (r === "__v_isReadonly") return e;
            if (r === "__v_isShallow") return t;
            if (r === "__v_raw" && s === (e ? t ? Yd : Iu : t ? Au : Ou).get(o)) return o;
            const l = ce(o);
            if (!e) {
                if (l && Le(ua, r)) return Reflect.get(ua, r, s);
                if (r === "hasOwnProperty") return Id
            }
            const a = Reflect.get(o, r, s);
            return (Fo(r) ? Tu.has(r) : Td(r)) || (e || yt(o, "get", r), t) ? a : Fe(a) ? l && fl(r) ? a : a.value : we(a) ? e ? nr(a) : pt(a) : a
        }
    }

    const Md = Eu(), Bd = Eu(!0);

    function Eu(e = !1) {
        return function (n, o, r, s) {
            let l = n[o];
            if (fo(l) && Fe(l) && !Fe(r)) return !1;
            if (!e && (!Mr(r) && !fo(r) && (l = Be(l), r = Be(r)), !ce(n) && Fe(l) && !Fe(r))) return l.value = r, !0;
            const a = ce(n) && fl(o) ? Number(o) < n.length : Le(n, o), u = Reflect.set(n, o, r, s);
            return n === Be(s) && (a ? Ho(r, l) && Jt(n, "set", o, r) : Jt(n, "add", o, r)), u
        }
    }

    function Ld(e, t) {
        const n = Le(e, t);
        e[t];
        const o = Reflect.deleteProperty(e, t);
        return o && n && Jt(e, "delete", t, void 0), o
    }

    function Rd(e, t) {
        const n = Reflect.has(e, t);
        return (!Fo(t) || !Tu.has(t)) && yt(e, "has", t), n
    }

    function Nd(e) {
        return yt(e, "iterate", ce(e) ? "length" : Vn), Reflect.ownKeys(e)
    }

    const Pu = {get: Ed, set: Md, deleteProperty: Ld, has: Rd, ownKeys: Nd}, Vd = {
        get: Od, set(e, t) {
            return !0
        }, deleteProperty(e, t) {
            return !0
        }
    }, Dd = ot({}, Pu, {get: Pd, set: Bd}), ml = e => e, Yr = e => Reflect.getPrototypeOf(e);

    function ur(e, t, n = !1, o = !1) {
        e = e.__v_raw;
        const r = Be(e), s = Be(t);
        n || (t !== s && yt(r, "get", t), yt(r, "get", s));
        const {has: l} = Yr(r), a = o ? ml : n ? bl : jo;
        if (l.call(r, t)) return a(e.get(t));
        if (l.call(r, s)) return a(e.get(s));
        e !== r && e.get(t)
    }

    function cr(e, t = !1) {
        const n = this.__v_raw, o = Be(n), r = Be(e);
        return t || (e !== r && yt(o, "has", e), yt(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r)
    }

    function fr(e, t = !1) {
        return e = e.__v_raw, !t && yt(Be(e), "iterate", Vn), Reflect.get(e, "size", e)
    }

    function ca(e) {
        e = Be(e);
        const t = Be(this);
        return Yr(t).has.call(t, e) || (t.add(e), Jt(t, "add", e, e)), this
    }

    function fa(e, t) {
        t = Be(t);
        const n = Be(this), {has: o, get: r} = Yr(n);
        let s = o.call(n, e);
        s || (e = Be(e), s = o.call(n, e));
        const l = r.call(n, e);
        return n.set(e, t), s ? Ho(t, l) && Jt(n, "set", e, t) : Jt(n, "add", e, t), this
    }

    function da(e) {
        const t = Be(this), {has: n, get: o} = Yr(t);
        let r = n.call(t, e);
        r || (e = Be(e), r = n.call(t, e)), o && o.call(t, e);
        const s = t.delete(e);
        return r && Jt(t, "delete", e, void 0), s
    }

    function pa() {
        const e = Be(this), t = e.size !== 0, n = e.clear();
        return t && Jt(e, "clear", void 0, void 0), n
    }

    function dr(e, t) {
        return function (o, r) {
            const s = this, l = s.__v_raw, a = Be(l), u = t ? ml : e ? bl : jo;
            return !e && yt(a, "iterate", Vn), l.forEach((c, f) => o.call(r, u(c), u(f), s))
        }
    }

    function pr(e, t, n) {
        return function (...o) {
            const r = this.__v_raw, s = Be(r), l = io(s), a = e === "entries" || e === Symbol.iterator && l,
                u = e === "keys" && l, c = r[e](...o), f = n ? ml : t ? bl : jo;
            return !t && yt(s, "iterate", u ? Is : Vn), {
                next() {
                    const {value: d, done: p} = c.next();
                    return p ? {value: d, done: p} : {value: a ? [f(d[0]), f(d[1])] : f(d), done: p}
                }, [Symbol.iterator]() {
                    return this
                }
            }
        }
    }

    function rn(e) {
        return function (...t) {
            return e === "delete" ? !1 : this
        }
    }

    function Fd() {
        const e = {
            get(s) {
                return ur(this, s)
            }, get size() {
                return fr(this)
            }, has: cr, add: ca, set: fa, delete: da, clear: pa, forEach: dr(!1, !1)
        }, t = {
            get(s) {
                return ur(this, s, !1, !0)
            }, get size() {
                return fr(this)
            }, has: cr, add: ca, set: fa, delete: da, clear: pa, forEach: dr(!1, !0)
        }, n = {
            get(s) {
                return ur(this, s, !0)
            }, get size() {
                return fr(this, !0)
            }, has(s) {
                return cr.call(this, s, !0)
            }, add: rn("add"), set: rn("set"), delete: rn("delete"), clear: rn("clear"), forEach: dr(!0, !1)
        }, o = {
            get(s) {
                return ur(this, s, !0, !0)
            }, get size() {
                return fr(this, !0)
            }, has(s) {
                return cr.call(this, s, !0)
            }, add: rn("add"), set: rn("set"), delete: rn("delete"), clear: rn("clear"), forEach: dr(!0, !0)
        };
        return ["keys", "values", "entries", Symbol.iterator].forEach(s => {
            e[s] = pr(s, !1, !1), n[s] = pr(s, !0, !1), t[s] = pr(s, !1, !0), o[s] = pr(s, !0, !0)
        }), [e, n, t, o]
    }

    const [Hd, jd, zd, Kd] = Fd();

    function gl(e, t) {
        const n = t ? e ? Kd : zd : e ? jd : Hd;
        return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(Le(n, r) && r in o ? n : o, r, s)
    }

    const Ud = {get: gl(!1, !1)}, Wd = {get: gl(!1, !0)}, qd = {get: gl(!0, !1)}, Ou = new WeakMap, Au = new WeakMap,
        Iu = new WeakMap, Yd = new WeakMap;

    function Gd(e) {
        switch (e) {
            case"Object":
            case"Array":
                return 1;
            case"Map":
            case"Set":
            case"WeakMap":
            case"WeakSet":
                return 2;
            default:
                return 0
        }
    }

    function Xd(e) {
        return e.__v_skip || !Object.isExtensible(e) ? 0 : Gd(dd(e))
    }

    function pt(e) {
        return fo(e) ? e : yl(e, !1, Pu, Ud, Ou)
    }

    function Mu(e) {
        return yl(e, !1, Dd, Wd, Au)
    }

    function nr(e) {
        return yl(e, !0, Vd, qd, Iu)
    }

    function yl(e, t, n, o, r) {
        if (!we(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
        const s = r.get(e);
        if (s) return s;
        const l = Xd(e);
        if (l === 0) return e;
        const a = new Proxy(e, l === 2 ? o : n);
        return r.set(e, a), a
    }

    function vn(e) {
        return fo(e) ? vn(e.__v_raw) : !!(e && e.__v_isReactive)
    }

    function fo(e) {
        return !!(e && e.__v_isReadonly)
    }

    function Mr(e) {
        return !!(e && e.__v_isShallow)
    }

    function Bu(e) {
        return vn(e) || fo(e)
    }

    function Be(e) {
        const t = e && e.__v_raw;
        return t ? Be(t) : e
    }

    function Dn(e) {
        return Or(e, "__v_skip", !0), e
    }

    const jo = e => we(e) ? pt(e) : e, bl = e => we(e) ? nr(e) : e;

    function Lu(e) {
        hn && Mt && (e = Be(e), ku(e.dep || (e.dep = pl())))
    }

    function _l(e, t) {
        e = Be(e);
        const n = e.dep;
        n && Ms(n)
    }

    function Fe(e) {
        return !!(e && e.__v_isRef === !0)
    }

    function ee(e) {
        return Ru(e, !1)
    }

    function wl(e) {
        return Ru(e, !0)
    }

    function Ru(e, t) {
        return Fe(e) ? e : new Zd(e, t)
    }

    class Zd {
        constructor(t, n) {
            this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : Be(t), this._value = n ? t : jo(t)
        }

        get value() {
            return Lu(this), this._value
        }

        set value(t) {
            const n = this.__v_isShallow || Mr(t) || fo(t);
            t = n ? t : Be(t), Ho(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : jo(t), _l(this))
        }
    }

    function ha(e) {
        _l(e)
    }

    function i(e) {
        return Fe(e) ? e.value : e
    }

    const Jd = {
        get: (e, t, n) => i(Reflect.get(e, t, n)), set: (e, t, n, o) => {
            const r = e[t];
            return Fe(r) && !Fe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o)
        }
    };

    function Nu(e) {
        return vn(e) ? e : new Proxy(e, Jd)
    }

    function Gr(e) {
        const t = ce(e) ? new Array(e.length) : {};
        for (const n in e) t[n] = Vu(e, n);
        return t
    }

    class Qd {
        constructor(t, n, o) {
            this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0
        }

        get value() {
            const t = this._object[this._key];
            return t === void 0 ? this._defaultValue : t
        }

        set value(t) {
            this._object[this._key] = t
        }

        get dep() {
            return kd(Be(this._object), this._key)
        }
    }

    class ep {
        constructor(t) {
            this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0
        }

        get value() {
            return this._getter()
        }
    }

    function Fn(e, t, n) {
        return Fe(e) ? e : ye(e) ? new ep(e) : we(e) && arguments.length > 1 ? Vu(e, t, n) : ee(e)
    }

    function Vu(e, t, n) {
        const o = e[t];
        return Fe(o) ? o : new Qd(e, t, n)
    }

    class tp {
        constructor(t, n, o, r) {
            this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new hl(t, () => {
                this._dirty || (this._dirty = !0, _l(this))
            }), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o
        }

        get value() {
            const t = Be(this);
            return Lu(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
        }

        set value(t) {
            this._setter(t)
        }
    }

    function Du(e, t, n = !1) {
        let o, r;
        const s = ye(e);
        return s ? (o = e, r = qe) : (o = e.get, r = e.set), new tp(o, r, s || !r, n)
    }

    function np(e, ...t) {
    }

    function mn(e, t, n, o) {
        let r;
        try {
            r = o ? e(...o) : e()
        } catch (s) {
            Xr(s, t, n)
        }
        return r
    }

    function Pt(e, t, n, o) {
        if (ye(e)) {
            const s = mn(e, t, n, o);
            return s && mu(s) && s.catch(l => {
                Xr(l, t, n)
            }), s
        }
        const r = [];
        for (let s = 0; s < e.length; s++) r.push(Pt(e[s], t, n, o));
        return r
    }

    function Xr(e, t, n, o = !0) {
        const r = t ? t.vnode : null;
        if (t) {
            let s = t.parent;
            const l = t.proxy, a = n;
            for (; s;) {
                const c = s.ec;
                if (c) {
                    for (let f = 0; f < c.length; f++) if (c[f](e, l, a) === !1) return
                }
                s = s.parent
            }
            const u = t.appContext.config.errorHandler;
            if (u) {
                mn(u, null, 10, [e, l, a]);
                return
            }
        }
        op(e, n, r, o)
    }

    function op(e, t, n, o = !0) {
        console.error(e)
    }

    let zo = !1, Bs = !1;
    const ft = [];
    let Ft = 0;
    const uo = [];
    let Wt = null, Mn = 0;
    const Fu = Promise.resolve();
    let Cl = null;

    function De(e) {
        const t = Cl || Fu;
        return e ? t.then(this ? e.bind(this) : e) : t
    }

    function rp(e) {
        let t = Ft + 1, n = ft.length;
        for (; t < n;) {
            const o = t + n >>> 1;
            Ko(ft[o]) < e ? t = o + 1 : n = o
        }
        return t
    }

    function $l(e) {
        (!ft.length || !ft.includes(e, zo && e.allowRecurse ? Ft + 1 : Ft)) && (e.id == null ? ft.push(e) : ft.splice(rp(e.id), 0, e), Hu())
    }

    function Hu() {
        !zo && !Bs && (Bs = !0, Cl = Fu.then(zu))
    }

    function sp(e) {
        const t = ft.indexOf(e);
        t > Ft && ft.splice(t, 1)
    }

    function lp(e) {
        ce(e) ? uo.push(...e) : (!Wt || !Wt.includes(e, e.allowRecurse ? Mn + 1 : Mn)) && uo.push(e), Hu()
    }

    function va(e, t = zo ? Ft + 1 : 0) {
        for (; t < ft.length; t++) {
            const n = ft[t];
            n && n.pre && (ft.splice(t, 1), t--, n())
        }
    }

    function ju(e) {
        if (uo.length) {
            const t = [...new Set(uo)];
            if (uo.length = 0, Wt) {
                Wt.push(...t);
                return
            }
            for (Wt = t, Wt.sort((n, o) => Ko(n) - Ko(o)), Mn = 0; Mn < Wt.length; Mn++) Wt[Mn]();
            Wt = null, Mn = 0
        }
    }

    const Ko = e => e.id == null ? 1 / 0 : e.id, ap = (e, t) => {
        const n = Ko(e) - Ko(t);
        if (n === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1
        }
        return n
    };

    function zu(e) {
        Bs = !1, zo = !0, ft.sort(ap);
        const t = qe;
        try {
            for (Ft = 0; Ft < ft.length; Ft++) {
                const n = ft[Ft];
                n && n.active !== !1 && mn(n, null, 14)
            }
        } finally {
            Ft = 0, ft.length = 0, ju(), zo = !1, Cl = null, (ft.length || uo.length) && zu()
        }
    }

    function ip(e, t, ...n) {
        if (e.isUnmounted) return;
        const o = e.vnode.props || Xe;
        let r = n;
        const s = t.startsWith("update:"), l = s && t.slice(7);
        if (l && l in o) {
            const f = `${l === "modelValue" ? "model" : l}Modifiers`, {number: d, trim: p} = o[f] || Xe;
            p && (r = n.map(h => Se(h) ? h.trim() : h)), d && (r = n.map(Ar))
        }
        let a, u = o[a = $r(t)] || o[a = $r(Ot(t))];
        !u && s && (u = o[a = $r($n(t))]), u && Pt(u, e, 6, r);
        const c = o[a + "Once"];
        if (c) {
            if (!e.emitted) e.emitted = {}; else if (e.emitted[a]) return;
            e.emitted[a] = !0, Pt(c, e, 6, r)
        }
    }

    function Ku(e, t, n = !1) {
        const o = t.emitsCache, r = o.get(e);
        if (r !== void 0) return r;
        const s = e.emits;
        let l = {}, a = !1;
        if (!ye(e)) {
            const u = c => {
                const f = Ku(c, t, !0);
                f && (a = !0, ot(l, f))
            };
            !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
        }
        return !s && !a ? (we(e) && o.set(e, null), null) : (ce(s) ? s.forEach(u => l[u] = null) : ot(l, s), we(e) && o.set(e, l), l)
    }

    function Zr(e, t) {
        return !e || !zr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Le(e, t[0].toLowerCase() + t.slice(1)) || Le(e, $n(t)) || Le(e, t))
    }

    let ut = null, Jr = null;

    function Br(e) {
        const t = ut;
        return ut = e, Jr = e && e.type.__scopeId || null, t
    }

    function Uu(e) {
        Jr = e
    }

    function Wu() {
        Jr = null
    }

    function ke(e, t = ut, n) {
        if (!t || e._n) return e;
        const o = (...r) => {
            o._d && Ea(-1);
            const s = Br(t);
            let l;
            try {
                l = e(...r)
            } finally {
                Br(s), o._d && Ea(1)
            }
            return l
        };
        return o._n = !0, o._c = !0, o._d = !0, o
    }

    function ps(e) {
        const {
            type: t,
            vnode: n,
            proxy: o,
            withProxy: r,
            props: s,
            propsOptions: [l],
            slots: a,
            attrs: u,
            emit: c,
            render: f,
            renderCache: d,
            data: p,
            setupState: h,
            ctx: m,
            inheritAttrs: v
        } = e;
        let S, P;
        const C = Br(e);
        try {
            if (n.shapeFlag & 4) {
                const D = r || o;
                S = Dt(f.call(D, D, d, s, h, p, m)), P = u
            } else {
                const D = t;
                S = Dt(D.length > 1 ? D(s, {attrs: u, slots: a, emit: c}) : D(s, null)), P = t.props ? u : up(u)
            }
        } catch (D) {
            Lo.length = 0, Xr(D, e, 1), S = fe(St)
        }
        let H = S;
        if (P && v !== !1) {
            const D = Object.keys(P), {shapeFlag: U} = H;
            D.length && U & 7 && (l && D.some(ul) && (P = cp(P, l)), H = Qt(H, P))
        }
        return n.dirs && (H = Qt(H), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && (H.transition = n.transition), S = H, Br(C), S
    }

    const up = e => {
        let t;
        for (const n in e) (n === "class" || n === "style" || zr(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    }, cp = (e, t) => {
        const n = {};
        for (const o in e) (!ul(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
        return n
    };

    function fp(e, t, n) {
        const {props: o, children: r, component: s} = e, {props: l, children: a, patchFlag: u} = t, c = s.emitsOptions;
        if (t.dirs || t.transition) return !0;
        if (n && u >= 0) {
            if (u & 1024) return !0;
            if (u & 16) return o ? ma(o, l, c) : !!l;
            if (u & 8) {
                const f = t.dynamicProps;
                for (let d = 0; d < f.length; d++) {
                    const p = f[d];
                    if (l[p] !== o[p] && !Zr(c, p)) return !0
                }
            }
        } else return (r || a) && (!a || !a.$stable) ? !0 : o === l ? !1 : o ? l ? ma(o, l, c) : !0 : !!l;
        return !1
    }

    function ma(e, t, n) {
        const o = Object.keys(t);
        if (o.length !== Object.keys(e).length) return !0;
        for (let r = 0; r < o.length; r++) {
            const s = o[r];
            if (t[s] !== e[s] && !Zr(n, s)) return !0
        }
        return !1
    }

    function dp({vnode: e, parent: t}, n) {
        for (; t && t.subTree === e;) (e = t.vnode).el = n, t = t.parent
    }

    const pp = e => e.__isSuspense;

    function hp(e, t) {
        t && t.pendingBranch ? ce(e) ? t.effects.push(...e) : t.effects.push(e) : lp(e)
    }

    function vp(e, t) {
        return Sl(e, null, t)
    }

    const hr = {};

    function $e(e, t, n) {
        return Sl(e, t, n)
    }

    function Sl(e, t, {immediate: n, deep: o, flush: r, onTrack: s, onTrigger: l} = Xe) {
        var a;
        const u = Wr() === ((a = st) == null ? void 0 : a.scope) ? st : null;
        let c, f = !1, d = !1;
        if (Fe(e) ? (c = () => e.value, f = Mr(e)) : vn(e) ? (c = () => e, o = !0) : ce(e) ? (d = !0, f = e.some(D => vn(D) || Mr(D)), c = () => e.map(D => {
            if (Fe(D)) return D.value;
            if (vn(D)) return Rn(D);
            if (ye(D)) return mn(D, u, 2)
        })) : ye(e) ? t ? c = () => mn(e, u, 2) : c = () => {
            if (!(u && u.isUnmounted)) return p && p(), Pt(e, u, 3, [h])
        } : c = qe, t && o) {
            const D = c;
            c = () => Rn(D())
        }
        let p, h = D => {
            p = C.onStop = () => {
                mn(D, u, 4)
            }
        }, m;
        if (Yo) if (h = qe, t ? n && Pt(t, u, 3, [c(), d ? [] : void 0, h]) : c(), r === "sync") {
            const D = ih();
            m = D.__watcherHandles || (D.__watcherHandles = [])
        } else return qe;
        let v = d ? new Array(e.length).fill(hr) : hr;
        const S = () => {
            if (C.active) if (t) {
                const D = C.run();
                (o || f || (d ? D.some((U, R) => Ho(U, v[R])) : Ho(D, v))) && (p && p(), Pt(t, u, 3, [D, v === hr ? void 0 : d && v[0] === hr ? [] : v, h]), v = D)
            } else C.run()
        };
        S.allowRecurse = !!t;
        let P;
        r === "sync" ? P = S : r === "post" ? P = () => gt(S, u && u.suspense) : (S.pre = !0, u && (S.id = u.uid), P = () => $l(S));
        const C = new hl(c, P);
        t ? n ? S() : v = C.run() : r === "post" ? gt(C.run.bind(C), u && u.suspense) : C.run();
        const H = () => {
            C.stop(), u && u.scope && cl(u.scope.effects, C)
        };
        return m && m.push(H), H
    }

    function mp(e, t, n) {
        const o = this.proxy, r = Se(e) ? e.includes(".") ? qu(o, e) : () => o[e] : e.bind(o, o);
        let s;
        ye(t) ? s = t : (s = t.handler, n = t);
        const l = st;
        po(this);
        const a = Sl(r, s.bind(o), n);
        return l ? po(l) : Hn(), a
    }

    function qu(e, t) {
        const n = t.split(".");
        return () => {
            let o = e;
            for (let r = 0; r < n.length && o; r++) o = o[n[r]];
            return o
        }
    }

    function Rn(e, t) {
        if (!we(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
        if (t.add(e), Fe(e)) Rn(e.value, t); else if (ce(e)) for (let n = 0; n < e.length; n++) Rn(e[n], t); else if (_o(e) || io(e)) e.forEach(n => {
            Rn(n, t)
        }); else if (yu(e)) for (const n in e) Rn(e[n], t);
        return e
    }

    function dt(e, t) {
        const n = ut;
        if (n === null) return e;
        const o = ns(n) || n.proxy, r = e.dirs || (e.dirs = []);
        for (let s = 0; s < t.length; s++) {
            let [l, a, u, c = Xe] = t[s];
            l && (ye(l) && (l = {mounted: l, updated: l}), l.deep && Rn(a), r.push({
                dir: l,
                instance: o,
                value: a,
                oldValue: void 0,
                arg: u,
                modifiers: c
            }))
        }
        return e
    }

    function kn(e, t, n, o) {
        const r = e.dirs, s = t && t.dirs;
        for (let l = 0; l < r.length; l++) {
            const a = r[l];
            s && (a.oldValue = s[l].value);
            let u = a.dir[o];
            u && (wo(), Pt(u, n, 8, [e.el, a, e, t]), Co())
        }
    }

    function gp() {
        const e = {isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map};
        return ht(() => {
            e.isMounted = !0
        }), qn(() => {
            e.isUnmounting = !0
        }), e
    }

    const Tt = [Function, Array], Yu = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: Tt,
        onEnter: Tt,
        onAfterEnter: Tt,
        onEnterCancelled: Tt,
        onBeforeLeave: Tt,
        onLeave: Tt,
        onAfterLeave: Tt,
        onLeaveCancelled: Tt,
        onBeforeAppear: Tt,
        onAppear: Tt,
        onAfterAppear: Tt,
        onAppearCancelled: Tt
    }, yp = {
        name: "BaseTransition", props: Yu, setup(e, {slots: t}) {
            const n = bt(), o = gp();
            let r;
            return () => {
                const s = t.default && Xu(t.default(), !0);
                if (!s || !s.length) return;
                let l = s[0];
                if (s.length > 1) {
                    for (const v of s) if (v.type !== St) {
                        l = v;
                        break
                    }
                }
                const a = Be(e), {mode: u} = a;
                if (o.isLeaving) return hs(l);
                const c = ga(l);
                if (!c) return hs(l);
                const f = Ls(c, a, o, n);
                Rs(c, f);
                const d = n.subTree, p = d && ga(d);
                let h = !1;
                const {getTransitionKey: m} = c.type;
                if (m) {
                    const v = m();
                    r === void 0 ? r = v : v !== r && (r = v, h = !0)
                }
                if (p && p.type !== St && (!Bn(c, p) || h)) {
                    const v = Ls(p, a, o, n);
                    if (Rs(p, v), u === "out-in") return o.isLeaving = !0, v.afterLeave = () => {
                        o.isLeaving = !1, n.update.active !== !1 && n.update()
                    }, hs(l);
                    u === "in-out" && c.type !== St && (v.delayLeave = (S, P, C) => {
                        const H = Gu(o, p);
                        H[String(p.key)] = p, S._leaveCb = () => {
                            P(), S._leaveCb = void 0, delete f.delayedLeave
                        }, f.delayedLeave = C
                    })
                }
                return l
            }
        }
    }, bp = yp;

    function Gu(e, t) {
        const {leavingVNodes: n} = e;
        let o = n.get(t.type);
        return o || (o = Object.create(null), n.set(t.type, o)), o
    }

    function Ls(e, t, n, o) {
        const {
            appear: r,
            mode: s,
            persisted: l = !1,
            onBeforeEnter: a,
            onEnter: u,
            onAfterEnter: c,
            onEnterCancelled: f,
            onBeforeLeave: d,
            onLeave: p,
            onAfterLeave: h,
            onLeaveCancelled: m,
            onBeforeAppear: v,
            onAppear: S,
            onAfterAppear: P,
            onAppearCancelled: C
        } = t, H = String(e.key), D = Gu(n, e), U = (k, _) => {
            k && Pt(k, o, 9, _)
        }, R = (k, _) => {
            const y = _[1];
            U(k, _), ce(k) ? k.every(K => K.length <= 1) && y() : k.length <= 1 && y()
        }, A = {
            mode: s, persisted: l, beforeEnter(k) {
                let _ = a;
                if (!n.isMounted) if (r) _ = v || a; else return;
                k._leaveCb && k._leaveCb(!0);
                const y = D[H];
                y && Bn(e, y) && y.el._leaveCb && y.el._leaveCb(), U(_, [k])
            }, enter(k) {
                let _ = u, y = c, K = f;
                if (!n.isMounted) if (r) _ = S || u, y = P || c, K = C || f; else return;
                let E = !1;
                const M = k._enterCb = I => {
                    E || (E = !0, I ? U(K, [k]) : U(y, [k]), A.delayedLeave && A.delayedLeave(), k._enterCb = void 0)
                };
                _ ? R(_, [k, M]) : M()
            }, leave(k, _) {
                const y = String(e.key);
                if (k._enterCb && k._enterCb(!0), n.isUnmounting) return _();
                U(d, [k]);
                let K = !1;
                const E = k._leaveCb = M => {
                    K || (K = !0, _(), M ? U(m, [k]) : U(h, [k]), k._leaveCb = void 0, D[y] === e && delete D[y])
                };
                D[y] = e, p ? R(p, [k, E]) : E()
            }, clone(k) {
                return Ls(k, t, n, o)
            }
        };
        return A
    }

    function hs(e) {
        if (Qr(e)) return e = Qt(e), e.children = null, e
    }

    function ga(e) {
        return Qr(e) ? e.children ? e.children[0] : void 0 : e
    }

    function Rs(e, t) {
        e.shapeFlag & 6 && e.component ? Rs(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
    }

    function Xu(e, t = !1, n) {
        let o = [], r = 0;
        for (let s = 0; s < e.length; s++) {
            let l = e[s];
            const a = n == null ? l.key : String(n) + String(l.key != null ? l.key : s);
            l.type === ve ? (l.patchFlag & 128 && r++, o = o.concat(Xu(l.children, t, a))) : (t || l.type !== St) && o.push(a != null ? Qt(l, {key: a}) : l)
        }
        if (r > 1) for (let s = 0; s < o.length; s++) o[s].patchFlag = -2;
        return o
    }

    function X(e, t) {
        return ye(e) ? (() => ot({name: e.name}, t, {setup: e}))() : e
    }

    const Io = e => !!e.type.__asyncLoader, Qr = e => e.type.__isKeepAlive;

    function _p(e, t) {
        Ju(e, "a", t)
    }

    function Zu(e, t) {
        Ju(e, "da", t)
    }

    function Ju(e, t, n = st) {
        const o = e.__wdc || (e.__wdc = () => {
            let r = n;
            for (; r;) {
                if (r.isDeactivated) return;
                r = r.parent
            }
            return e()
        });
        if (es(t, o, n), n) {
            let r = n.parent;
            for (; r && r.parent;) Qr(r.parent.vnode) && wp(o, t, n, r), r = r.parent
        }
    }

    function wp(e, t, n, o) {
        const r = es(t, e, o, !0);
        xl(() => {
            cl(o[t], r)
        }, n)
    }

    function es(e, t, n = st, o = !1) {
        if (n) {
            const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...l) => {
                if (n.isUnmounted) return;
                wo(), po(n);
                const a = Pt(t, n, e, l);
                return Hn(), Co(), a
            });
            return o ? r.unshift(s) : r.push(s), s
        }
    }

    const tn = e => (t, n = st) => (!Yo || e === "sp") && es(e, (...o) => t(...o), n), Qu = tn("bm"), ht = tn("m"),
        Cp = tn("bu"), ec = tn("u"), qn = tn("bum"), xl = tn("um"), $p = tn("sp"), Sp = tn("rtg"), xp = tn("rtc");

    function kp(e, t = st) {
        es("ec", e, t)
    }

    const kl = "components";

    function xr(e, t) {
        return nc(kl, e, !0, t) || e
    }

    const tc = Symbol.for("v-ndc");

    function gn(e) {
        return Se(e) ? nc(kl, e, !1) || e : e || tc
    }

    function nc(e, t, n = !0, o = !1) {
        const r = ut || st;
        if (r) {
            const s = r.type;
            if (e === kl) {
                const a = sh(s, !1);
                if (a && (a === t || a === Ot(t) || a === Ur(Ot(t)))) return s
            }
            const l = ya(r[e] || s[e], t) || ya(r.appContext[e], t);
            return !l && o ? s : l
        }
    }

    function ya(e, t) {
        return e && (e[t] || e[Ot(t)] || e[Ur(Ot(t))])
    }

    function zn(e, t, n, o) {
        let r;
        const s = n && n[o];
        if (ce(e) || Se(e)) {
            r = new Array(e.length);
            for (let l = 0, a = e.length; l < a; l++) r[l] = t(e[l], l, void 0, s && s[l])
        } else if (typeof e == "number") {
            r = new Array(e);
            for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, s && s[l])
        } else if (we(e)) if (e[Symbol.iterator]) r = Array.from(e, (l, a) => t(l, a, void 0, s && s[a])); else {
            const l = Object.keys(e);
            r = new Array(l.length);
            for (let a = 0, u = l.length; a < u; a++) {
                const c = l[a];
                r[a] = t(e[c], c, a, s && s[a])
            }
        } else r = [];
        return n && (n[o] = r), r
    }

    function ie(e, t, n = {}, o, r) {
        if (ut.isCE || ut.parent && Io(ut.parent) && ut.parent.isCE) return t !== "default" && (n.name = t), fe("slot", n, o && o());
        let s = e[t];
        s && s._c && (s._d = !1), w();
        const l = s && oc(s(n)),
            a = Me(ve, {key: n.key || l && l.key || `_${t}`}, l || (o ? o() : []), l && e._ === 1 ? 64 : -2);
        return !r && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = !0), a
    }

    function oc(e) {
        return e.some(t => qo(t) ? !(t.type === St || t.type === ve && !oc(t.children)) : !0) ? e : null
    }

    function Tp(e, t) {
        const n = {};
        for (const o in e) n[t && /[A-Z]/.test(o) ? `on:${o}` : $r(o)] = e[o];
        return n
    }

    const Ns = e => e ? vc(e) ? ns(e) || e.proxy : Ns(e.parent) : null, Mo = ot(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Ns(e.parent),
        $root: e => Ns(e.root),
        $emit: e => e.emit,
        $options: e => Tl(e),
        $forceUpdate: e => e.f || (e.f = () => $l(e.update)),
        $nextTick: e => e.n || (e.n = De.bind(e.proxy)),
        $watch: e => mp.bind(e)
    }), vs = (e, t) => e !== Xe && !e.__isScriptSetup && Le(e, t), Ep = {
        get({_: e}, t) {
            const {ctx: n, setupState: o, data: r, props: s, accessCache: l, type: a, appContext: u} = e;
            let c;
            if (t[0] !== "$") {
                const h = l[t];
                if (h !== void 0) switch (h) {
                    case 1:
                        return o[t];
                    case 2:
                        return r[t];
                    case 4:
                        return n[t];
                    case 3:
                        return s[t]
                } else {
                    if (vs(o, t)) return l[t] = 1, o[t];
                    if (r !== Xe && Le(r, t)) return l[t] = 2, r[t];
                    if ((c = e.propsOptions[0]) && Le(c, t)) return l[t] = 3, s[t];
                    if (n !== Xe && Le(n, t)) return l[t] = 4, n[t];
                    Vs && (l[t] = 0)
                }
            }
            const f = Mo[t];
            let d, p;
            if (f) return t === "$attrs" && yt(e, "get", t), f(e);
            if ((d = a.__cssModules) && (d = d[t])) return d;
            if (n !== Xe && Le(n, t)) return l[t] = 4, n[t];
            if (p = u.config.globalProperties, Le(p, t)) return p[t]
        }, set({_: e}, t, n) {
            const {data: o, setupState: r, ctx: s} = e;
            return vs(r, t) ? (r[t] = n, !0) : o !== Xe && Le(o, t) ? (o[t] = n, !0) : Le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0)
        }, has({_: {data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s}}, l) {
            let a;
            return !!n[l] || e !== Xe && Le(e, l) || vs(t, l) || (a = s[0]) && Le(a, l) || Le(o, l) || Le(Mo, l) || Le(r.config.globalProperties, l)
        }, defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : Le(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };

    function Yn() {
        return Pp().slots
    }

    function Pp() {
        const e = bt();
        return e.setupContext || (e.setupContext = gc(e))
    }

    function ba(e) {
        return ce(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
    }

    let Vs = !0;

    function Op(e) {
        const t = Tl(e), n = e.proxy, o = e.ctx;
        Vs = !1, t.beforeCreate && _a(t.beforeCreate, e, "bc");
        const {
            data: r,
            computed: s,
            methods: l,
            watch: a,
            provide: u,
            inject: c,
            created: f,
            beforeMount: d,
            mounted: p,
            beforeUpdate: h,
            updated: m,
            activated: v,
            deactivated: S,
            beforeDestroy: P,
            beforeUnmount: C,
            destroyed: H,
            unmounted: D,
            render: U,
            renderTracked: R,
            renderTriggered: A,
            errorCaptured: k,
            serverPrefetch: _,
            expose: y,
            inheritAttrs: K,
            components: E,
            directives: M,
            filters: I
        } = t;
        if (c && Ap(c, o, null), l) for (const V in l) {
            const j = l[V];
            ye(j) && (o[V] = j.bind(n))
        }
        if (r) {
            const V = r.call(n, n);
            we(V) && (e.data = pt(V))
        }
        if (Vs = !0, s) for (const V in s) {
            const j = s[V], Z = ye(j) ? j.bind(n, n) : ye(j.get) ? j.get.bind(n, n) : qe,
                _e = !ye(j) && ye(j.set) ? j.set.bind(n) : qe, xe = $({get: Z, set: _e});
            Object.defineProperty(o, V, {
                enumerable: !0,
                configurable: !0,
                get: () => xe.value,
                set: Ee => xe.value = Ee
            })
        }
        if (a) for (const V in a) rc(a[V], o, n, V);
        if (u) {
            const V = ye(u) ? u.call(n) : u;
            Reflect.ownKeys(V).forEach(j => {
                et(j, V[j])
            })
        }
        f && _a(f, e, "c");

        function W(V, j) {
            ce(j) ? j.forEach(Z => V(Z.bind(n))) : j && V(j.bind(n))
        }

        if (W(Qu, d), W(ht, p), W(Cp, h), W(ec, m), W(_p, v), W(Zu, S), W(kp, k), W(xp, R), W(Sp, A), W(qn, C), W(xl, D), W($p, _), ce(y)) if (y.length) {
            const V = e.exposed || (e.exposed = {});
            y.forEach(j => {
                Object.defineProperty(V, j, {get: () => n[j], set: Z => n[j] = Z})
            })
        } else e.exposed || (e.exposed = {});
        U && e.render === qe && (e.render = U), K != null && (e.inheritAttrs = K), E && (e.components = E), M && (e.directives = M)
    }

    function Ap(e, t, n = qe) {
        ce(e) && (e = Ds(e));
        for (const o in e) {
            const r = e[o];
            let s;
            we(r) ? "default" in r ? s = Ae(r.from || o, r.default, !0) : s = Ae(r.from || o) : s = Ae(r), Fe(s) ? Object.defineProperty(t, o, {
                enumerable: !0,
                configurable: !0,
                get: () => s.value,
                set: l => s.value = l
            }) : t[o] = s
        }
    }

    function _a(e, t, n) {
        Pt(ce(e) ? e.map(o => o.bind(t.proxy)) : e.bind(t.proxy), t, n)
    }

    function rc(e, t, n, o) {
        const r = o.includes(".") ? qu(n, o) : () => n[o];
        if (Se(e)) {
            const s = t[e];
            ye(s) && $e(r, s)
        } else if (ye(e)) $e(r, e.bind(n)); else if (we(e)) if (ce(e)) e.forEach(s => rc(s, t, n, o)); else {
            const s = ye(e.handler) ? e.handler.bind(n) : t[e.handler];
            ye(s) && $e(r, s, e)
        }
    }

    function Tl(e) {
        const t = e.type, {mixins: n, extends: o} = t, {
            mixins: r,
            optionsCache: s,
            config: {optionMergeStrategies: l}
        } = e.appContext, a = s.get(t);
        let u;
        return a ? u = a : !r.length && !n && !o ? u = t : (u = {}, r.length && r.forEach(c => Lr(u, c, l, !0)), Lr(u, t, l)), we(t) && s.set(t, u), u
    }

    function Lr(e, t, n, o = !1) {
        const {mixins: r, extends: s} = t;
        s && Lr(e, s, n, !0), r && r.forEach(l => Lr(e, l, n, !0));
        for (const l in t) if (!(o && l === "expose")) {
            const a = Ip[l] || n && n[l];
            e[l] = a ? a(e[l], t[l]) : t[l]
        }
        return e
    }

    const Ip = {
        data: wa,
        props: Ca,
        emits: Ca,
        methods: Ao,
        computed: Ao,
        beforeCreate: mt,
        created: mt,
        beforeMount: mt,
        mounted: mt,
        beforeUpdate: mt,
        updated: mt,
        beforeDestroy: mt,
        beforeUnmount: mt,
        destroyed: mt,
        unmounted: mt,
        activated: mt,
        deactivated: mt,
        errorCaptured: mt,
        serverPrefetch: mt,
        components: Ao,
        directives: Ao,
        watch: Bp,
        provide: wa,
        inject: Mp
    };

    function wa(e, t) {
        return t ? e ? function () {
            return ot(ye(e) ? e.call(this, this) : e, ye(t) ? t.call(this, this) : t)
        } : t : e
    }

    function Mp(e, t) {
        return Ao(Ds(e), Ds(t))
    }

    function Ds(e) {
        if (ce(e)) {
            const t = {};
            for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
            return t
        }
        return e
    }

    function mt(e, t) {
        return e ? [...new Set([].concat(e, t))] : t
    }

    function Ao(e, t) {
        return e ? ot(Object.create(null), e, t) : t
    }

    function Ca(e, t) {
        return e ? ce(e) && ce(t) ? [...new Set([...e, ...t])] : ot(Object.create(null), ba(e), ba(t ?? {})) : t
    }

    function Bp(e, t) {
        if (!e) return t;
        if (!t) return e;
        const n = ot(Object.create(null), e);
        for (const o in t) n[o] = mt(e[o], t[o]);
        return n
    }

    function sc() {
        return {
            app: null,
            config: {
                isNativeTag: ud,
                performance: !1,
                globalProperties: {},
                optionMergeStrategies: {},
                errorHandler: void 0,
                warnHandler: void 0,
                compilerOptions: {}
            },
            mixins: [],
            components: {},
            directives: {},
            provides: Object.create(null),
            optionsCache: new WeakMap,
            propsCache: new WeakMap,
            emitsCache: new WeakMap
        }
    }

    let Lp = 0;

    function Rp(e, t) {
        return function (o, r = null) {
            ye(o) || (o = ot({}, o)), r != null && !we(r) && (r = null);
            const s = sc(), l = new Set;
            let a = !1;
            const u = s.app = {
                _uid: Lp++,
                _component: o,
                _props: r,
                _container: null,
                _context: s,
                _instance: null,
                version: uh,
                get config() {
                    return s.config
                },
                set config(c) {
                },
                use(c, ...f) {
                    return l.has(c) || (c && ye(c.install) ? (l.add(c), c.install(u, ...f)) : ye(c) && (l.add(c), c(u, ...f))), u
                },
                mixin(c) {
                    return s.mixins.includes(c) || s.mixins.push(c), u
                },
                component(c, f) {
                    return f ? (s.components[c] = f, u) : s.components[c]
                },
                directive(c, f) {
                    return f ? (s.directives[c] = f, u) : s.directives[c]
                },
                mount(c, f, d) {
                    if (!a) {
                        const p = fe(o, r);
                        return p.appContext = s, f && t ? t(p, c) : e(p, c, d), a = !0, u._container = c, c.__vue_app__ = u, ns(p.component) || p.component.proxy
                    }
                },
                unmount() {
                    a && (e(null, u._container), delete u._container.__vue_app__)
                },
                provide(c, f) {
                    return s.provides[c] = f, u
                },
                runWithContext(c) {
                    Uo = u;
                    try {
                        return c()
                    } finally {
                        Uo = null
                    }
                }
            };
            return u
        }
    }

    let Uo = null;

    function et(e, t) {
        if (st) {
            let n = st.provides;
            const o = st.parent && st.parent.provides;
            o === n && (n = st.provides = Object.create(o)), n[e] = t
        }
    }

    function Ae(e, t, n = !1) {
        const o = st || ut;
        if (o || Uo) {
            const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Uo._context.provides;
            if (r && e in r) return r[e];
            if (arguments.length > 1) return n && ye(t) ? t.call(o && o.proxy) : t
        }
    }

    function Np() {
        return !!(st || ut || Uo)
    }

    function Vp(e, t, n, o = !1) {
        const r = {}, s = {};
        Or(s, ts, 1), e.propsDefaults = Object.create(null), lc(e, t, r, s);
        for (const l in e.propsOptions[0]) l in r || (r[l] = void 0);
        n ? e.props = o ? r : Mu(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s
    }

    function Dp(e, t, n, o) {
        const {props: r, attrs: s, vnode: {patchFlag: l}} = e, a = Be(r), [u] = e.propsOptions;
        let c = !1;
        if ((o || l > 0) && !(l & 16)) {
            if (l & 8) {
                const f = e.vnode.dynamicProps;
                for (let d = 0; d < f.length; d++) {
                    let p = f[d];
                    if (Zr(e.emitsOptions, p)) continue;
                    const h = t[p];
                    if (u) if (Le(s, p)) h !== s[p] && (s[p] = h, c = !0); else {
                        const m = Ot(p);
                        r[m] = Fs(u, a, m, h, e, !1)
                    } else h !== s[p] && (s[p] = h, c = !0)
                }
            }
        } else {
            lc(e, t, r, s) && (c = !0);
            let f;
            for (const d in a) (!t || !Le(t, d) && ((f = $n(d)) === d || !Le(t, f))) && (u ? n && (n[d] !== void 0 || n[f] !== void 0) && (r[d] = Fs(u, a, d, void 0, e, !0)) : delete r[d]);
            if (s !== a) for (const d in s) (!t || !Le(t, d)) && (delete s[d], c = !0)
        }
        c && Jt(e, "set", "$attrs")
    }

    function lc(e, t, n, o) {
        const [r, s] = e.propsOptions;
        let l = !1, a;
        if (t) for (let u in t) {
            if (Cr(u)) continue;
            const c = t[u];
            let f;
            r && Le(r, f = Ot(u)) ? !s || !s.includes(f) ? n[f] = c : (a || (a = {}))[f] = c : Zr(e.emitsOptions, u) || (!(u in o) || c !== o[u]) && (o[u] = c, l = !0)
        }
        if (s) {
            const u = Be(n), c = a || Xe;
            for (let f = 0; f < s.length; f++) {
                const d = s[f];
                n[d] = Fs(r, u, d, c[d], e, !Le(c, d))
            }
        }
        return l
    }

    function Fs(e, t, n, o, r, s) {
        const l = e[n];
        if (l != null) {
            const a = Le(l, "default");
            if (a && o === void 0) {
                const u = l.default;
                if (l.type !== Function && !l.skipFactory && ye(u)) {
                    const {propsDefaults: c} = r;
                    n in c ? o = c[n] : (po(r), o = c[n] = u.call(null, t), Hn())
                } else o = u
            }
            l[0] && (s && !a ? o = !1 : l[1] && (o === "" || o === $n(n)) && (o = !0))
        }
        return o
    }

    function ac(e, t, n = !1) {
        const o = t.propsCache, r = o.get(e);
        if (r) return r;
        const s = e.props, l = {}, a = [];
        let u = !1;
        if (!ye(e)) {
            const f = d => {
                u = !0;
                const [p, h] = ac(d, t, !0);
                ot(l, p), h && a.push(...h)
            };
            !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f)
        }
        if (!s && !u) return we(e) && o.set(e, ao), ao;
        if (ce(s)) for (let f = 0; f < s.length; f++) {
            const d = Ot(s[f]);
            $a(d) && (l[d] = Xe)
        } else if (s) for (const f in s) {
            const d = Ot(f);
            if ($a(d)) {
                const p = s[f], h = l[d] = ce(p) || ye(p) ? {type: p} : ot({}, p);
                if (h) {
                    const m = ka(Boolean, h.type), v = ka(String, h.type);
                    h[0] = m > -1, h[1] = v < 0 || m < v, (m > -1 || Le(h, "default")) && a.push(d)
                }
            }
        }
        const c = [l, a];
        return we(e) && o.set(e, c), c
    }

    function $a(e) {
        return e[0] !== "$"
    }

    function Sa(e) {
        const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
        return t ? t[2] : e === null ? "null" : ""
    }

    function xa(e, t) {
        return Sa(e) === Sa(t)
    }

    function ka(e, t) {
        return ce(t) ? t.findIndex(n => xa(n, e)) : ye(t) && xa(t, e) ? 0 : -1
    }

    const ic = e => e[0] === "_" || e === "$stable", El = e => ce(e) ? e.map(Dt) : [Dt(e)], Fp = (e, t, n) => {
        if (t._n) return t;
        const o = ke((...r) => El(t(...r)), n);
        return o._c = !1, o
    }, uc = (e, t, n) => {
        const o = e._ctx;
        for (const r in e) {
            if (ic(r)) continue;
            const s = e[r];
            if (ye(s)) t[r] = Fp(r, s, o); else if (s != null) {
                const l = El(s);
                t[r] = () => l
            }
        }
    }, cc = (e, t) => {
        const n = El(t);
        e.slots.default = () => n
    }, Hp = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const n = t._;
            n ? (e.slots = Be(t), Or(t, "_", n)) : uc(t, e.slots = {})
        } else e.slots = {}, t && cc(e, t);
        Or(e.slots, ts, 1)
    }, jp = (e, t, n) => {
        const {vnode: o, slots: r} = e;
        let s = !0, l = Xe;
        if (o.shapeFlag & 32) {
            const a = t._;
            a ? n && a === 1 ? s = !1 : (ot(r, t), !n && a === 1 && delete r._) : (s = !t.$stable, uc(t, r)), l = t
        } else t && (cc(e, t), l = {default: 1});
        if (s) for (const a in r) !ic(a) && !(a in l) && delete r[a]
    };

    function Hs(e, t, n, o, r = !1) {
        if (ce(e)) {
            e.forEach((p, h) => Hs(p, t && (ce(t) ? t[h] : t), n, o, r));
            return
        }
        if (Io(o) && !r) return;
        const s = o.shapeFlag & 4 ? ns(o.component) || o.component.proxy : o.el, l = r ? null : s, {i: a, r: u} = e,
            c = t && t.r, f = a.refs === Xe ? a.refs = {} : a.refs, d = a.setupState;
        if (c != null && c !== u && (Se(c) ? (f[c] = null, Le(d, c) && (d[c] = null)) : Fe(c) && (c.value = null)), ye(u)) mn(u, a, 12, [l, f]); else {
            const p = Se(u), h = Fe(u);
            if (p || h) {
                const m = () => {
                    if (e.f) {
                        const v = p ? Le(d, u) ? d[u] : f[u] : u.value;
                        r ? ce(v) && cl(v, s) : ce(v) ? v.includes(s) || v.push(s) : p ? (f[u] = [s], Le(d, u) && (d[u] = f[u])) : (u.value = [s], e.k && (f[e.k] = u.value))
                    } else p ? (f[u] = l, Le(d, u) && (d[u] = l)) : h && (u.value = l, e.k && (f[e.k] = l))
                };
                l ? (m.id = -1, gt(m, n)) : m()
            }
        }
    }

    const gt = hp;

    function zp(e) {
        return Kp(e)
    }

    function Kp(e, t) {
        const n = Os();
        n.__VUE__ = !0;
        const {
                insert: o,
                remove: r,
                patchProp: s,
                createElement: l,
                createText: a,
                createComment: u,
                setText: c,
                setElementText: f,
                parentNode: d,
                nextSibling: p,
                setScopeId: h = qe,
                insertStaticContent: m
            } = e, v = (g, b, O, F = null, Y = null, J = null, ae = !1, oe = null, le = !!b.dynamicChildren) => {
                if (g === b) return;
                g && !Bn(g, b) && (F = z(g), Ee(g, Y, J, !0), g = null), b.patchFlag === -2 && (le = !1, b.dynamicChildren = null);
                const {type: ne, ref: Q, shapeFlag: N} = b;
                switch (ne) {
                    case or:
                        S(g, b, O, F);
                        break;
                    case St:
                        P(g, b, O, F);
                        break;
                    case kr:
                        g == null && C(b, O, F, ae);
                        break;
                    case ve:
                        E(g, b, O, F, Y, J, ae, oe, le);
                        break;
                    default:
                        N & 1 ? U(g, b, O, F, Y, J, ae, oe, le) : N & 6 ? M(g, b, O, F, Y, J, ae, oe, le) : (N & 64 || N & 128) && ne.process(g, b, O, F, Y, J, ae, oe, le, te)
                }
                Q != null && Y && Hs(Q, g && g.ref, J, b || g, !b)
            }, S = (g, b, O, F) => {
                if (g == null) o(b.el = a(b.children), O, F); else {
                    const Y = b.el = g.el;
                    b.children !== g.children && c(Y, b.children)
                }
            }, P = (g, b, O, F) => {
                g == null ? o(b.el = u(b.children || ""), O, F) : b.el = g.el
            }, C = (g, b, O, F) => {
                [g.el, g.anchor] = m(g.children, b, O, F, g.el, g.anchor)
            }, H = ({el: g, anchor: b}, O, F) => {
                let Y;
                for (; g && g !== b;) Y = p(g), o(g, O, F), g = Y;
                o(b, O, F)
            }, D = ({el: g, anchor: b}) => {
                let O;
                for (; g && g !== b;) O = p(g), r(g), g = O;
                r(b)
            }, U = (g, b, O, F, Y, J, ae, oe, le) => {
                ae = ae || b.type === "svg", g == null ? R(b, O, F, Y, J, ae, oe, le) : _(g, b, Y, J, ae, oe, le)
            }, R = (g, b, O, F, Y, J, ae, oe) => {
                let le, ne;
                const {type: Q, props: N, shapeFlag: pe, transition: q, dirs: Te} = g;
                if (le = g.el = l(g.type, J, N && N.is, N), pe & 8 ? f(le, g.children) : pe & 16 && k(g.children, le, null, F, Y, J && Q !== "foreignObject", ae, oe), Te && kn(g, null, F, "created"), A(le, g, g.scopeId, ae, F), N) {
                    for (const He in N) He !== "value" && !Cr(He) && s(le, He, null, N[He], J, g.children, F, Y, Ve);
                    "value" in N && s(le, "value", null, N.value), (ne = N.onVnodeBeforeMount) && Vt(ne, F, g)
                }
                Te && kn(g, null, F, "beforeMount");
                const Ue = (!Y || Y && !Y.pendingBranch) && q && !q.persisted;
                Ue && q.beforeEnter(le), o(le, b, O), ((ne = N && N.onVnodeMounted) || Ue || Te) && gt(() => {
                    ne && Vt(ne, F, g), Ue && q.enter(le), Te && kn(g, null, F, "mounted")
                }, Y)
            }, A = (g, b, O, F, Y) => {
                if (O && h(g, O), F) for (let J = 0; J < F.length; J++) h(g, F[J]);
                if (Y) {
                    let J = Y.subTree;
                    if (b === J) {
                        const ae = Y.vnode;
                        A(g, ae, ae.scopeId, ae.slotScopeIds, Y.parent)
                    }
                }
            }, k = (g, b, O, F, Y, J, ae, oe, le = 0) => {
                for (let ne = le; ne < g.length; ne++) {
                    const Q = g[ne] = oe ? fn(g[ne]) : Dt(g[ne]);
                    v(null, Q, b, O, F, Y, J, ae, oe)
                }
            }, _ = (g, b, O, F, Y, J, ae) => {
                const oe = b.el = g.el;
                let {patchFlag: le, dynamicChildren: ne, dirs: Q} = b;
                le |= g.patchFlag & 16;
                const N = g.props || Xe, pe = b.props || Xe;
                let q;
                O && Tn(O, !1), (q = pe.onVnodeBeforeUpdate) && Vt(q, O, b, g), Q && kn(b, g, O, "beforeUpdate"), O && Tn(O, !0);
                const Te = Y && b.type !== "foreignObject";
                if (ne ? y(g.dynamicChildren, ne, oe, O, F, Te, J) : ae || j(g, b, oe, null, O, F, Te, J, !1), le > 0) {
                    if (le & 16) K(oe, b, N, pe, O, F, Y); else if (le & 2 && N.class !== pe.class && s(oe, "class", null, pe.class, Y), le & 4 && s(oe, "style", N.style, pe.style, Y), le & 8) {
                        const Ue = b.dynamicProps;
                        for (let He = 0; He < Ue.length; He++) {
                            const L = Ue[He], re = N[L], Oe = pe[L];
                            (Oe !== re || L === "value") && s(oe, L, re, Oe, Y, g.children, O, F, Ve)
                        }
                    }
                    le & 1 && g.children !== b.children && f(oe, b.children)
                } else !ae && ne == null && K(oe, b, N, pe, O, F, Y);
                ((q = pe.onVnodeUpdated) || Q) && gt(() => {
                    q && Vt(q, O, b, g), Q && kn(b, g, O, "updated")
                }, F)
            }, y = (g, b, O, F, Y, J, ae) => {
                for (let oe = 0; oe < b.length; oe++) {
                    const le = g[oe], ne = b[oe],
                        Q = le.el && (le.type === ve || !Bn(le, ne) || le.shapeFlag & 70) ? d(le.el) : O;
                    v(le, ne, Q, null, F, Y, J, ae, !0)
                }
            }, K = (g, b, O, F, Y, J, ae) => {
                if (O !== F) {
                    if (O !== Xe) for (const oe in O) !Cr(oe) && !(oe in F) && s(g, oe, O[oe], null, ae, b.children, Y, J, Ve);
                    for (const oe in F) {
                        if (Cr(oe)) continue;
                        const le = F[oe], ne = O[oe];
                        le !== ne && oe !== "value" && s(g, oe, ne, le, ae, b.children, Y, J, Ve)
                    }
                    "value" in F && s(g, "value", O.value, F.value)
                }
            }, E = (g, b, O, F, Y, J, ae, oe, le) => {
                const ne = b.el = g ? g.el : a(""), Q = b.anchor = g ? g.anchor : a("");
                let {patchFlag: N, dynamicChildren: pe, slotScopeIds: q} = b;
                q && (oe = oe ? oe.concat(q) : q), g == null ? (o(ne, O, F), o(Q, O, F), k(b.children, O, Q, Y, J, ae, oe, le)) : N > 0 && N & 64 && pe && g.dynamicChildren ? (y(g.dynamicChildren, pe, O, Y, J, ae, oe), (b.key != null || Y && b === Y.subTree) && Pl(g, b, !0)) : j(g, b, O, Q, Y, J, ae, oe, le)
            }, M = (g, b, O, F, Y, J, ae, oe, le) => {
                b.slotScopeIds = oe, g == null ? b.shapeFlag & 512 ? Y.ctx.activate(b, O, F, ae, le) : I(b, O, F, Y, J, ae, le) : B(g, b, le)
            }, I = (g, b, O, F, Y, J, ae) => {
                const oe = g.component = th(g, F, Y);
                if (Qr(g) && (oe.ctx.renderer = te), nh(oe), oe.asyncDep) {
                    if (Y && Y.registerDep(oe, W), !g.el) {
                        const le = oe.subTree = fe(St);
                        P(null, le, b, O)
                    }
                    return
                }
                W(oe, g, b, O, Y, J, ae)
            }, B = (g, b, O) => {
                const F = b.component = g.component;
                if (fp(g, b, O)) if (F.asyncDep && !F.asyncResolved) {
                    V(F, b, O);
                    return
                } else F.next = b, sp(F.update), F.update(); else b.el = g.el, F.vnode = b
            }, W = (g, b, O, F, Y, J, ae) => {
                const oe = () => {
                    if (g.isMounted) {
                        let {next: Q, bu: N, u: pe, parent: q, vnode: Te} = g, Ue = Q, He;
                        Tn(g, !1), Q ? (Q.el = Te.el, V(g, Q, ae)) : Q = Te, N && Sr(N), (He = Q.props && Q.props.onVnodeBeforeUpdate) && Vt(He, q, Q, Te), Tn(g, !0);
                        const L = ps(g), re = g.subTree;
                        g.subTree = L, v(re, L, d(re.el), z(re), g, Y, J), Q.el = L.el, Ue === null && dp(g, L.el), pe && gt(pe, Y), (He = Q.props && Q.props.onVnodeUpdated) && gt(() => Vt(He, q, Q, Te), Y)
                    } else {
                        let Q;
                        const {el: N, props: pe} = b, {bm: q, m: Te, parent: Ue} = g, He = Io(b);
                        if (Tn(g, !1), q && Sr(q), !He && (Q = pe && pe.onVnodeBeforeMount) && Vt(Q, Ue, b), Tn(g, !0), N && Ce) {
                            const L = () => {
                                g.subTree = ps(g), Ce(N, g.subTree, g, Y, null)
                            };
                            He ? b.type.__asyncLoader().then(() => !g.isUnmounted && L()) : L()
                        } else {
                            const L = g.subTree = ps(g);
                            v(null, L, O, F, g, Y, J), b.el = L.el
                        }
                        if (Te && gt(Te, Y), !He && (Q = pe && pe.onVnodeMounted)) {
                            const L = b;
                            gt(() => Vt(Q, Ue, L), Y)
                        }
                        (b.shapeFlag & 256 || Ue && Io(Ue.vnode) && Ue.vnode.shapeFlag & 256) && g.a && gt(g.a, Y), g.isMounted = !0, b = O = F = null
                    }
                }, le = g.effect = new hl(oe, () => $l(ne), g.scope), ne = g.update = () => le.run();
                ne.id = g.uid, Tn(g, !0), ne()
            }, V = (g, b, O) => {
                b.component = g;
                const F = g.vnode.props;
                g.vnode = b, g.next = null, Dp(g, b.props, F, O), jp(g, b.children, O), wo(), va(), Co()
            }, j = (g, b, O, F, Y, J, ae, oe, le = !1) => {
                const ne = g && g.children, Q = g ? g.shapeFlag : 0, N = b.children, {patchFlag: pe, shapeFlag: q} = b;
                if (pe > 0) {
                    if (pe & 128) {
                        _e(ne, N, O, F, Y, J, ae, oe, le);
                        return
                    } else if (pe & 256) {
                        Z(ne, N, O, F, Y, J, ae, oe, le);
                        return
                    }
                }
                q & 8 ? (Q & 16 && Ve(ne, Y, J), N !== ne && f(O, N)) : Q & 16 ? q & 16 ? _e(ne, N, O, F, Y, J, ae, oe, le) : Ve(ne, Y, J, !0) : (Q & 8 && f(O, ""), q & 16 && k(N, O, F, Y, J, ae, oe, le))
            }, Z = (g, b, O, F, Y, J, ae, oe, le) => {
                g = g || ao, b = b || ao;
                const ne = g.length, Q = b.length, N = Math.min(ne, Q);
                let pe;
                for (pe = 0; pe < N; pe++) {
                    const q = b[pe] = le ? fn(b[pe]) : Dt(b[pe]);
                    v(g[pe], q, O, null, Y, J, ae, oe, le)
                }
                ne > Q ? Ve(g, Y, J, !0, !1, N) : k(b, O, F, Y, J, ae, oe, le, N)
            }, _e = (g, b, O, F, Y, J, ae, oe, le) => {
                let ne = 0;
                const Q = b.length;
                let N = g.length - 1, pe = Q - 1;
                for (; ne <= N && ne <= pe;) {
                    const q = g[ne], Te = b[ne] = le ? fn(b[ne]) : Dt(b[ne]);
                    if (Bn(q, Te)) v(q, Te, O, null, Y, J, ae, oe, le); else break;
                    ne++
                }
                for (; ne <= N && ne <= pe;) {
                    const q = g[N], Te = b[pe] = le ? fn(b[pe]) : Dt(b[pe]);
                    if (Bn(q, Te)) v(q, Te, O, null, Y, J, ae, oe, le); else break;
                    N--, pe--
                }
                if (ne > N) {
                    if (ne <= pe) {
                        const q = pe + 1, Te = q < Q ? b[q].el : F;
                        for (; ne <= pe;) v(null, b[ne] = le ? fn(b[ne]) : Dt(b[ne]), O, Te, Y, J, ae, oe, le), ne++
                    }
                } else if (ne > pe) for (; ne <= N;) Ee(g[ne], Y, J, !0), ne++; else {
                    const q = ne, Te = ne, Ue = new Map;
                    for (ne = Te; ne <= pe; ne++) {
                        const Je = b[ne] = le ? fn(b[ne]) : Dt(b[ne]);
                        Je.key != null && Ue.set(Je.key, ne)
                    }
                    let He, L = 0;
                    const re = pe - Te + 1;
                    let Oe = !1, We = 0;
                    const nt = new Array(re);
                    for (ne = 0; ne < re; ne++) nt[ne] = 0;
                    for (ne = q; ne <= N; ne++) {
                        const Je = g[ne];
                        if (L >= re) {
                            Ee(Je, Y, J, !0);
                            continue
                        }
                        let kt;
                        if (Je.key != null) kt = Ue.get(Je.key); else for (He = Te; He <= pe; He++) if (nt[He - Te] === 0 && Bn(Je, b[He])) {
                            kt = He;
                            break
                        }
                        kt === void 0 ? Ee(Je, Y, J, !0) : (nt[kt - Te] = ne + 1, kt >= We ? We = kt : Oe = !0, v(Je, b[kt], O, null, Y, J, ae, oe, le), L++)
                    }
                    const wt = Oe ? Up(nt) : ao;
                    for (He = wt.length - 1, ne = re - 1; ne >= 0; ne--) {
                        const Je = Te + ne, kt = b[Je], ra = Je + 1 < Q ? b[Je + 1].el : F;
                        nt[ne] === 0 ? v(null, kt, O, ra, Y, J, ae, oe, le) : Oe && (He < 0 || ne !== wt[He] ? xe(kt, O, ra, 2) : He--)
                    }
                }
            }, xe = (g, b, O, F, Y = null) => {
                const {el: J, type: ae, transition: oe, children: le, shapeFlag: ne} = g;
                if (ne & 6) {
                    xe(g.component.subTree, b, O, F);
                    return
                }
                if (ne & 128) {
                    g.suspense.move(b, O, F);
                    return
                }
                if (ne & 64) {
                    ae.move(g, b, O, te);
                    return
                }
                if (ae === ve) {
                    o(J, b, O);
                    for (let N = 0; N < le.length; N++) xe(le[N], b, O, F);
                    o(g.anchor, b, O);
                    return
                }
                if (ae === kr) {
                    H(g, b, O);
                    return
                }
                if (F !== 2 && ne & 1 && oe) if (F === 0) oe.beforeEnter(J), o(J, b, O), gt(() => oe.enter(J), Y); else {
                    const {leave: N, delayLeave: pe, afterLeave: q} = oe, Te = () => o(J, b, O), Ue = () => {
                        N(J, () => {
                            Te(), q && q()
                        })
                    };
                    pe ? pe(J, Te, Ue) : Ue()
                } else o(J, b, O)
            }, Ee = (g, b, O, F = !1, Y = !1) => {
                const {
                    type: J,
                    props: ae,
                    ref: oe,
                    children: le,
                    dynamicChildren: ne,
                    shapeFlag: Q,
                    patchFlag: N,
                    dirs: pe
                } = g;
                if (oe != null && Hs(oe, null, O, g, !0), Q & 256) {
                    b.ctx.deactivate(g);
                    return
                }
                const q = Q & 1 && pe, Te = !Io(g);
                let Ue;
                if (Te && (Ue = ae && ae.onVnodeBeforeUnmount) && Vt(Ue, b, g), Q & 6) Qe(g.component, O, F); else {
                    if (Q & 128) {
                        g.suspense.unmount(O, F);
                        return
                    }
                    q && kn(g, null, b, "beforeUnmount"), Q & 64 ? g.type.remove(g, b, O, Y, te, F) : ne && (J !== ve || N > 0 && N & 64) ? Ve(ne, b, O, !1, !0) : (J === ve && N & 384 || !Y && Q & 16) && Ve(le, b, O), F && Ne(g)
                }
                (Te && (Ue = ae && ae.onVnodeUnmounted) || q) && gt(() => {
                    Ue && Vt(Ue, b, g), q && kn(g, null, b, "unmounted")
                }, O)
            }, Ne = g => {
                const {type: b, el: O, anchor: F, transition: Y} = g;
                if (b === ve) {
                    Ye(O, F);
                    return
                }
                if (b === kr) {
                    D(g);
                    return
                }
                const J = () => {
                    r(O), Y && !Y.persisted && Y.afterLeave && Y.afterLeave()
                };
                if (g.shapeFlag & 1 && Y && !Y.persisted) {
                    const {leave: ae, delayLeave: oe} = Y, le = () => ae(O, J);
                    oe ? oe(g.el, J, le) : le()
                } else J()
            }, Ye = (g, b) => {
                let O;
                for (; g !== b;) O = p(g), r(g), g = O;
                r(b)
            }, Qe = (g, b, O) => {
                const {bum: F, scope: Y, update: J, subTree: ae, um: oe} = g;
                F && Sr(F), Y.stop(), J && (J.active = !1, Ee(ae, g, b, O)), oe && gt(oe, b), gt(() => {
                    g.isUnmounted = !0
                }, b), b && b.pendingBranch && !b.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === b.pendingId && (b.deps--, b.deps === 0 && b.resolve())
            }, Ve = (g, b, O, F = !1, Y = !1, J = 0) => {
                for (let ae = J; ae < g.length; ae++) Ee(g[ae], b, O, F, Y)
            },
            z = g => g.shapeFlag & 6 ? z(g.component.subTree) : g.shapeFlag & 128 ? g.suspense.next() : p(g.anchor || g.el),
            se = (g, b, O) => {
                g == null ? b._vnode && Ee(b._vnode, null, null, !0) : v(b._vnode || null, g, b, null, null, null, O), va(), ju(), b._vnode = g
            }, te = {p: v, um: Ee, m: xe, r: Ne, mt: I, mc: k, pc: j, pbc: y, n: z, o: e};
        let ue, Ce;
        return t && ([ue, Ce] = t(te)), {render: se, hydrate: ue, createApp: Rp(se, ue)}
    }

    function Tn({effect: e, update: t}, n) {
        e.allowRecurse = t.allowRecurse = n
    }

    function Pl(e, t, n = !1) {
        const o = e.children, r = t.children;
        if (ce(o) && ce(r)) for (let s = 0; s < o.length; s++) {
            const l = o[s];
            let a = r[s];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = r[s] = fn(r[s]), a.el = l.el), n || Pl(l, a)), a.type === or && (a.el = l.el)
        }
    }

    function Up(e) {
        const t = e.slice(), n = [0];
        let o, r, s, l, a;
        const u = e.length;
        for (o = 0; o < u; o++) {
            const c = e[o];
            if (c !== 0) {
                if (r = n[n.length - 1], e[r] < c) {
                    t[o] = r, n.push(o);
                    continue
                }
                for (s = 0, l = n.length - 1; s < l;) a = s + l >> 1, e[n[a]] < c ? s = a + 1 : l = a;
                c < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o)
            }
        }
        for (s = n.length, l = n[s - 1]; s-- > 0;) n[s] = l, l = t[l];
        return n
    }

    const Wp = e => e.__isTeleport, Bo = e => e && (e.disabled || e.disabled === ""),
        Ta = e => typeof SVGElement < "u" && e instanceof SVGElement, js = (e, t) => {
            const n = e && e.to;
            return Se(n) ? t ? t(n) : null : n
        }, qp = {
            __isTeleport: !0, process(e, t, n, o, r, s, l, a, u, c) {
                const {mc: f, pc: d, pbc: p, o: {insert: h, querySelector: m, createText: v, createComment: S}} = c,
                    P = Bo(t.props);
                let {shapeFlag: C, children: H, dynamicChildren: D} = t;
                if (e == null) {
                    const U = t.el = v(""), R = t.anchor = v("");
                    h(U, n, o), h(R, n, o);
                    const A = t.target = js(t.props, m), k = t.targetAnchor = v("");
                    A && (h(k, A), l = l || Ta(A));
                    const _ = (y, K) => {
                        C & 16 && f(H, y, K, r, s, l, a, u)
                    };
                    P ? _(n, R) : A && _(A, k)
                } else {
                    t.el = e.el;
                    const U = t.anchor = e.anchor, R = t.target = e.target, A = t.targetAnchor = e.targetAnchor,
                        k = Bo(e.props), _ = k ? n : R, y = k ? U : A;
                    if (l = l || Ta(R), D ? (p(e.dynamicChildren, D, _, r, s, l, a), Pl(e, t, !0)) : u || d(e, t, _, y, r, s, l, a, !1), P) k || vr(t, n, U, c, 1); else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                        const K = t.target = js(t.props, m);
                        K && vr(t, K, null, c, 0)
                    } else k && vr(t, R, A, c, 1)
                }
                dc(t)
            }, remove(e, t, n, o, {um: r, o: {remove: s}}, l) {
                const {shapeFlag: a, children: u, anchor: c, targetAnchor: f, target: d, props: p} = e;
                if (d && s(f), (l || !Bo(p)) && (s(c), a & 16)) for (let h = 0; h < u.length; h++) {
                    const m = u[h];
                    r(m, t, n, !0, !!m.dynamicChildren)
                }
            }, move: vr, hydrate: Yp
        };

    function vr(e, t, n, {o: {insert: o}, m: r}, s = 2) {
        s === 0 && o(e.targetAnchor, t, n);
        const {el: l, anchor: a, shapeFlag: u, children: c, props: f} = e, d = s === 2;
        if (d && o(l, t, n), (!d || Bo(f)) && u & 16) for (let p = 0; p < c.length; p++) r(c[p], t, n, 2);
        d && o(a, t, n)
    }

    function Yp(e, t, n, o, r, s, {o: {nextSibling: l, parentNode: a, querySelector: u}}, c) {
        const f = t.target = js(t.props, u);
        if (f) {
            const d = f._lpa || f.firstChild;
            if (t.shapeFlag & 16) if (Bo(t.props)) t.anchor = c(l(e), t, a(e), n, o, r, s), t.targetAnchor = d; else {
                t.anchor = l(e);
                let p = d;
                for (; p;) if (p = l(p), p && p.nodeType === 8 && p.data === "teleport anchor") {
                    t.targetAnchor = p, f._lpa = t.targetAnchor && l(t.targetAnchor);
                    break
                }
                c(d, t, f, n, o, r, s)
            }
            dc(t)
        }
        return t.anchor && l(t.anchor)
    }

    const fc = qp;

    function dc(e) {
        const t = e.ctx;
        if (t && t.ut) {
            let n = e.children[0].el;
            for (; n !== e.targetAnchor;) n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
            t.ut()
        }
    }

    const ve = Symbol.for("v-fgt"), or = Symbol.for("v-txt"), St = Symbol.for("v-cmt"), kr = Symbol.for("v-stc"),
        Lo = [];
    let Bt = null;

    function w(e = !1) {
        Lo.push(Bt = e ? null : [])
    }

    function Gp() {
        Lo.pop(), Bt = Lo[Lo.length - 1] || null
    }

    let Wo = 1;

    function Ea(e) {
        Wo += e
    }

    function pc(e) {
        return e.dynamicChildren = Wo > 0 ? Bt || ao : null, Gp(), Wo > 0 && Bt && Bt.push(e), e
    }

    function T(e, t, n, o, r, s) {
        return pc(G(e, t, n, o, r, s, !0))
    }

    function Me(e, t, n, o, r) {
        return pc(fe(e, t, n, o, r, !0))
    }

    function qo(e) {
        return e ? e.__v_isVNode === !0 : !1
    }

    function Bn(e, t) {
        return e.type === t.type && e.key === t.key
    }

    const ts = "__vInternal", hc = ({key: e}) => e ?? null, Tr = ({
                                                                      ref: e,
                                                                      ref_key: t,
                                                                      ref_for: n
                                                                  }) => (typeof e == "number" && (e = "" + e), e != null ? Se(e) || Fe(e) || ye(e) ? {
        i: ut,
        r: e,
        k: t,
        f: !!n
    } : e : null);

    function G(e, t = null, n = null, o = 0, r = null, s = e === ve ? 0 : 1, l = !1, a = !1) {
        const u = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e,
            props: t,
            key: t && hc(t),
            ref: t && Tr(t),
            scopeId: Jr,
            slotScopeIds: null,
            children: n,
            component: null,
            suspense: null,
            ssContent: null,
            ssFallback: null,
            dirs: null,
            transition: null,
            el: null,
            anchor: null,
            target: null,
            targetAnchor: null,
            staticCount: 0,
            shapeFlag: s,
            patchFlag: o,
            dynamicProps: r,
            dynamicChildren: null,
            appContext: null,
            ctx: ut
        };
        return a ? (Ol(u, n), s & 128 && e.normalize(u)) : n && (u.shapeFlag |= Se(n) ? 8 : 16), Wo > 0 && !l && Bt && (u.patchFlag > 0 || s & 6) && u.patchFlag !== 32 && Bt.push(u), u
    }

    const fe = Xp;

    function Xp(e, t = null, n = null, o = 0, r = null, s = !1) {
        if ((!e || e === tc) && (e = St), qo(e)) {
            const a = Qt(e, t, !0);
            return n && Ol(a, n), Wo > 0 && !s && Bt && (a.shapeFlag & 6 ? Bt[Bt.indexOf(e)] = a : Bt.push(a)), a.patchFlag |= -2, a
        }
        if (lh(e) && (e = e.__vccOpts), t) {
            t = Zp(t);
            let {class: a, style: u} = t;
            a && !Se(a) && (t.class = x(a)), we(u) && (Bu(u) && !ce(u) && (u = ot({}, u)), t.style = Ie(u))
        }
        const l = Se(e) ? 1 : pp(e) ? 128 : Wp(e) ? 64 : we(e) ? 4 : ye(e) ? 2 : 0;
        return G(e, t, n, o, r, l, s, !0)
    }

    function Zp(e) {
        return e ? Bu(e) || ts in e ? ot({}, e) : e : null
    }

    function Qt(e, t, n = !1) {
        const {props: o, ref: r, patchFlag: s, children: l} = e, a = t ? rr(o || {}, t) : o;
        return {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: a,
            key: a && hc(a),
            ref: t && t.ref ? n && r ? ce(r) ? r.concat(Tr(t)) : [r, Tr(t)] : Tr(t) : r,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: l,
            target: e.target,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== ve ? s === -1 ? 16 : s | 16 : s,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: e.transition,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && Qt(e.ssContent),
            ssFallback: e.ssFallback && Qt(e.ssFallback),
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce
        }
    }

    function rt(e = " ", t = 0) {
        return fe(or, null, e, t)
    }

    function Jp(e, t) {
        const n = fe(kr, null, e);
        return n.staticCount = t, n
    }

    function de(e = "", t = !1) {
        return t ? (w(), Me(St, null, e)) : fe(St, null, e)
    }

    function Dt(e) {
        return e == null || typeof e == "boolean" ? fe(St) : ce(e) ? fe(ve, null, e.slice()) : typeof e == "object" ? fn(e) : fe(or, null, String(e))
    }

    function fn(e) {
        return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qt(e)
    }

    function Ol(e, t) {
        let n = 0;
        const {shapeFlag: o} = e;
        if (t == null) t = null; else if (ce(t)) n = 16; else if (typeof t == "object") if (o & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1), Ol(e, r()), r._c && (r._d = !0));
            return
        } else {
            n = 32;
            const r = t._;
            !r && !(ts in t) ? t._ctx = ut : r === 3 && ut && (ut.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        } else ye(t) ? (t = {default: t, _ctx: ut}, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [rt(t)]) : n = 8);
        e.children = t, e.shapeFlag |= n
    }

    function rr(...e) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const o = e[n];
            for (const r in o) if (r === "class") t.class !== o.class && (t.class = x([t.class, o.class])); else if (r === "style") t.style = Ie([t.style, o.style]); else if (zr(r)) {
                const s = t[r], l = o[r];
                l && s !== l && !(ce(s) && s.includes(l)) && (t[r] = s ? [].concat(s, l) : l)
            } else r !== "" && (t[r] = o[r])
        }
        return t
    }

    function Vt(e, t, n, o = null) {
        Pt(e, t, 7, [n, o])
    }

    const Qp = sc();
    let eh = 0;

    function th(e, t, n) {
        const o = e.type, r = (t ? t.appContext : e.appContext) || Qp, s = {
            uid: eh++,
            vnode: e,
            type: o,
            parent: t,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new wu(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(r.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: ac(o, r),
            emitsOptions: Ku(o, r),
            emit: null,
            emitted: null,
            propsDefaults: Xe,
            inheritAttrs: o.inheritAttrs,
            ctx: Xe,
            data: Xe,
            props: Xe,
            attrs: Xe,
            slots: Xe,
            refs: Xe,
            setupState: Xe,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
        return s.ctx = {_: s}, s.root = t ? t.root : s, s.emit = ip.bind(null, s), e.ce && e.ce(s), s
    }

    let st = null;
    const bt = () => st || ut;
    let Al, Qn, Pa = "__VUE_INSTANCE_SETTERS__";
    (Qn = Os()[Pa]) || (Qn = Os()[Pa] = []), Qn.push(e => st = e), Al = e => {
        Qn.length > 1 ? Qn.forEach(t => t(e)) : Qn[0](e)
    };
    const po = e => {
        Al(e), e.scope.on()
    }, Hn = () => {
        st && st.scope.off(), Al(null)
    };

    function vc(e) {
        return e.vnode.shapeFlag & 4
    }

    let Yo = !1;

    function nh(e, t = !1) {
        Yo = t;
        const {props: n, children: o} = e.vnode, r = vc(e);
        Vp(e, n, r, t), Hp(e, o);
        const s = r ? oh(e, t) : void 0;
        return Yo = !1, s
    }

    function oh(e, t) {
        const n = e.type;
        e.accessCache = Object.create(null), e.proxy = Dn(new Proxy(e.ctx, Ep));
        const {setup: o} = n;
        if (o) {
            const r = e.setupContext = o.length > 1 ? gc(e) : null;
            po(e), wo();
            const s = mn(o, e, 0, [e.props, r]);
            if (Co(), Hn(), mu(s)) {
                if (s.then(Hn, Hn), t) return s.then(l => {
                    Oa(e, l, t)
                }).catch(l => {
                    Xr(l, e, 0)
                });
                e.asyncDep = s
            } else Oa(e, s, t)
        } else mc(e, t)
    }

    function Oa(e, t, n) {
        ye(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : we(t) && (e.setupState = Nu(t)), mc(e, n)
    }

    let Aa;

    function mc(e, t, n) {
        const o = e.type;
        if (!e.render) {
            if (!t && Aa && !o.render) {
                const r = o.template || Tl(e).template;
                if (r) {
                    const {isCustomElement: s, compilerOptions: l} = e.appContext.config, {
                        delimiters: a,
                        compilerOptions: u
                    } = o, c = ot(ot({isCustomElement: s, delimiters: a}, l), u);
                    o.render = Aa(r, c)
                }
            }
            e.render = o.render || qe
        }
        po(e), wo(), Op(e), Co(), Hn()
    }

    function rh(e) {
        return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
            get(t, n) {
                return yt(e, "get", "$attrs"), t[n]
            }
        }))
    }

    function gc(e) {
        const t = n => {
            e.exposed = n || {}
        };
        return {
            get attrs() {
                return rh(e)
            }, slots: e.slots, emit: e.emit, expose: t
        }
    }

    function ns(e) {
        if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Nu(Dn(e.exposed)), {
            get(t, n) {
                if (n in t) return t[n];
                if (n in Mo) return Mo[n](e)
            }, has(t, n) {
                return n in t || n in Mo
            }
        }))
    }

    function sh(e, t = !0) {
        return ye(e) ? e.displayName || e.name : e.name || t && e.__name
    }

    function lh(e) {
        return ye(e) && "__vccOpts" in e
    }

    const $ = (e, t) => Du(e, t, Yo);

    function Et(e, t, n) {
        const o = arguments.length;
        return o === 2 ? we(t) && !ce(t) ? qo(t) ? fe(e, null, [t]) : fe(e, t) : fe(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && qo(n) && (n = [n]), fe(e, t, n))
    }

    const ah = Symbol.for("v-scx"), ih = () => Ae(ah), uh = "3.3.4", ch = "http://www.w3.org/2000/svg",
        Ln = typeof document < "u" ? document : null, Ia = Ln && Ln.createElement("template"), fh = {
            insert: (e, t, n) => {
                t.insertBefore(e, n || null)
            },
            remove: e => {
                const t = e.parentNode;
                t && t.removeChild(e)
            },
            createElement: (e, t, n, o) => {
                const r = t ? Ln.createElementNS(ch, e) : Ln.createElement(e, n ? {is: n} : void 0);
                return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r
            },
            createText: e => Ln.createTextNode(e),
            createComment: e => Ln.createComment(e),
            setText: (e, t) => {
                e.nodeValue = t
            },
            setElementText: (e, t) => {
                e.textContent = t
            },
            parentNode: e => e.parentNode,
            nextSibling: e => e.nextSibling,
            querySelector: e => Ln.querySelector(e),
            setScopeId(e, t) {
                e.setAttribute(t, "")
            },
            insertStaticContent(e, t, n, o, r, s) {
                const l = n ? n.previousSibling : t.lastChild;
                if (r && (r === s || r.nextSibling)) for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling));) ; else {
                    Ia.innerHTML = o ? `<svg>${e}</svg>` : e;
                    const a = Ia.content;
                    if (o) {
                        const u = a.firstChild;
                        for (; u.firstChild;) a.appendChild(u.firstChild);
                        a.removeChild(u)
                    }
                    t.insertBefore(a, n)
                }
                return [l ? l.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
            }
        };

    function dh(e, t, n) {
        const o = e._vtc;
        o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
    }

    function ph(e, t, n) {
        const o = e.style, r = Se(n);
        if (n && !r) {
            if (t && !Se(t)) for (const s in t) n[s] == null && zs(o, s, "");
            for (const s in n) zs(o, s, n[s])
        } else {
            const s = o.display;
            r ? t !== n && (o.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (o.display = s)
        }
    }

    const Ma = /\s*!important$/;

    function zs(e, t, n) {
        if (ce(n)) n.forEach(o => zs(e, t, o)); else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n); else {
            const o = hh(e, t);
            Ma.test(n) ? e.setProperty($n(o), n.replace(Ma, ""), "important") : e[o] = n
        }
    }

    const Ba = ["Webkit", "Moz", "ms"], ms = {};

    function hh(e, t) {
        const n = ms[t];
        if (n) return n;
        let o = Ot(t);
        if (o !== "filter" && o in e) return ms[t] = o;
        o = Ur(o);
        for (let r = 0; r < Ba.length; r++) {
            const s = Ba[r] + o;
            if (s in e) return ms[t] = s
        }
        return t
    }

    const La = "http://www.w3.org/1999/xlink";

    function vh(e, t, n, o, r) {
        if (o && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(La, t.slice(6, t.length)) : e.setAttributeNS(La, t, n); else {
            const s = wd(t);
            n == null || s && !bu(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n)
        }
    }

    function mh(e, t, n, o, r, s, l) {
        if (t === "innerHTML" || t === "textContent") {
            o && l(o, r, s), e[t] = n ?? "";
            return
        }
        const a = e.tagName;
        if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
            e._value = n;
            const c = a === "OPTION" ? e.getAttribute("value") : e.value, f = n ?? "";
            c !== f && (e.value = f), n == null && e.removeAttribute(t);
            return
        }
        let u = !1;
        if (n === "" || n == null) {
            const c = typeof e[t];
            c === "boolean" ? n = bu(n) : n == null && c === "string" ? (n = "", u = !0) : c === "number" && (n = 0, u = !0)
        }
        try {
            e[t] = n
        } catch {
        }
        u && e.removeAttribute(t)
    }

    function qt(e, t, n, o) {
        e.addEventListener(t, n, o)
    }

    function gh(e, t, n, o) {
        e.removeEventListener(t, n, o)
    }

    function yh(e, t, n, o, r = null) {
        const s = e._vei || (e._vei = {}), l = s[t];
        if (o && l) l.value = o; else {
            const [a, u] = bh(t);
            if (o) {
                const c = s[t] = Ch(o, r);
                qt(e, a, c, u)
            } else l && (gh(e, a, l, u), s[t] = void 0)
        }
    }

    const Ra = /(?:Once|Passive|Capture)$/;

    function bh(e) {
        let t;
        if (Ra.test(e)) {
            t = {};
            let o;
            for (; o = e.match(Ra);) e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0
        }
        return [e[2] === ":" ? e.slice(3) : $n(e.slice(2)), t]
    }

    let gs = 0;
    const _h = Promise.resolve(), wh = () => gs || (_h.then(() => gs = 0), gs = Date.now());

    function Ch(e, t) {
        const n = o => {
            if (!o._vts) o._vts = Date.now(); else if (o._vts <= n.attached) return;
            Pt($h(o, n.value), t, 5, [o])
        };
        return n.value = e, n.attached = wh(), n
    }

    function $h(e, t) {
        if (ce(t)) {
            const n = e.stopImmediatePropagation;
            return e.stopImmediatePropagation = () => {
                n.call(e), e._stopped = !0
            }, t.map(o => r => !r._stopped && o && o(r))
        } else return t
    }

    const Na = /^on[a-z]/, Sh = (e, t, n, o, r = !1, s, l, a, u) => {
        t === "class" ? dh(e, o, r) : t === "style" ? ph(e, n, o) : zr(t) ? ul(t) || yh(e, t, n, o, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : xh(e, t, o, r)) ? mh(e, t, o, s, l, a, u) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), vh(e, t, o, r))
    };

    function xh(e, t, n, o) {
        return o ? !!(t === "innerHTML" || t === "textContent" || t in e && Na.test(t) && ye(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Na.test(t) && Se(n) ? !1 : t in e
    }

    const sn = "transition", ko = "animation", Lt = (e, {slots: t}) => Et(bp, kh(e), t);
    Lt.displayName = "Transition";
    const yc = {
        name: String,
        type: String,
        css: {type: Boolean, default: !0},
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    };
    Lt.props = ot({}, Yu, yc);
    const En = (e, t = []) => {
        ce(e) ? e.forEach(n => n(...t)) : e && e(...t)
    }, Va = e => e ? ce(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

    function kh(e) {
        const t = {};
        for (const E in e) E in yc || (t[E] = e[E]);
        if (e.css === !1) return t;
        const {
            name: n = "v",
            type: o,
            duration: r,
            enterFromClass: s = `${n}-enter-from`,
            enterActiveClass: l = `${n}-enter-active`,
            enterToClass: a = `${n}-enter-to`,
            appearFromClass: u = s,
            appearActiveClass: c = l,
            appearToClass: f = a,
            leaveFromClass: d = `${n}-leave-from`,
            leaveActiveClass: p = `${n}-leave-active`,
            leaveToClass: h = `${n}-leave-to`
        } = e, m = Th(r), v = m && m[0], S = m && m[1], {
            onBeforeEnter: P,
            onEnter: C,
            onEnterCancelled: H,
            onLeave: D,
            onLeaveCancelled: U,
            onBeforeAppear: R = P,
            onAppear: A = C,
            onAppearCancelled: k = H
        } = t, _ = (E, M, I) => {
            Pn(E, M ? f : a), Pn(E, M ? c : l), I && I()
        }, y = (E, M) => {
            E._isLeaving = !1, Pn(E, d), Pn(E, h), Pn(E, p), M && M()
        }, K = E => (M, I) => {
            const B = E ? A : C, W = () => _(M, E, I);
            En(B, [M, W]), Da(() => {
                Pn(M, E ? u : s), ln(M, E ? f : a), Va(B) || Fa(M, o, v, W)
            })
        };
        return ot(t, {
            onBeforeEnter(E) {
                En(P, [E]), ln(E, s), ln(E, l)
            }, onBeforeAppear(E) {
                En(R, [E]), ln(E, u), ln(E, c)
            }, onEnter: K(!1), onAppear: K(!0), onLeave(E, M) {
                E._isLeaving = !0;
                const I = () => y(E, M);
                ln(E, d), Oh(), ln(E, p), Da(() => {
                    E._isLeaving && (Pn(E, d), ln(E, h), Va(D) || Fa(E, o, S, I))
                }), En(D, [E, I])
            }, onEnterCancelled(E) {
                _(E, !1), En(H, [E])
            }, onAppearCancelled(E) {
                _(E, !0), En(k, [E])
            }, onLeaveCancelled(E) {
                y(E), En(U, [E])
            }
        })
    }

    function Th(e) {
        if (e == null) return null;
        if (we(e)) return [ys(e.enter), ys(e.leave)];
        {
            const t = ys(e);
            return [t, t]
        }
    }

    function ys(e) {
        return vd(e)
    }

    function ln(e, t) {
        t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set)).add(t)
    }

    function Pn(e, t) {
        t.split(/\s+/).forEach(o => o && e.classList.remove(o));
        const {_vtc: n} = e;
        n && (n.delete(t), n.size || (e._vtc = void 0))
    }

    function Da(e) {
        requestAnimationFrame(() => {
            requestAnimationFrame(e)
        })
    }

    let Eh = 0;

    function Fa(e, t, n, o) {
        const r = e._endId = ++Eh, s = () => {
            r === e._endId && o()
        };
        if (n) return setTimeout(s, n);
        const {type: l, timeout: a, propCount: u} = Ph(e, t);
        if (!l) return o();
        const c = l + "end";
        let f = 0;
        const d = () => {
            e.removeEventListener(c, p), s()
        }, p = h => {
            h.target === e && ++f >= u && d()
        };
        setTimeout(() => {
            f < u && d()
        }, a + 1), e.addEventListener(c, p)
    }

    function Ph(e, t) {
        const n = window.getComputedStyle(e), o = m => (n[m] || "").split(", "), r = o(`${sn}Delay`),
            s = o(`${sn}Duration`), l = Ha(r, s), a = o(`${ko}Delay`), u = o(`${ko}Duration`), c = Ha(a, u);
        let f = null, d = 0, p = 0;
        t === sn ? l > 0 && (f = sn, d = l, p = s.length) : t === ko ? c > 0 && (f = ko, d = c, p = u.length) : (d = Math.max(l, c), f = d > 0 ? l > c ? sn : ko : null, p = f ? f === sn ? s.length : u.length : 0);
        const h = f === sn && /\b(transform|all)(,|$)/.test(o(`${sn}Property`).toString());
        return {type: f, timeout: d, propCount: p, hasTransform: h}
    }

    function Ha(e, t) {
        for (; e.length < t.length;) e = e.concat(e);
        return Math.max(...t.map((n, o) => ja(n) + ja(e[o])))
    }

    function ja(e) {
        return Number(e.slice(0, -1).replace(",", ".")) * 1e3
    }

    function Oh() {
        return document.body.offsetHeight
    }

    const _n = e => {
        const t = e.props["onUpdate:modelValue"] || !1;
        return ce(t) ? n => Sr(t, n) : t
    };

    function Ah(e) {
        e.target.composing = !0
    }

    function za(e) {
        const t = e.target;
        t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
    }

    const Rr = {
        created(e, {modifiers: {lazy: t, trim: n, number: o}}, r) {
            e._assign = _n(r);
            const s = o || r.props && r.props.type === "number";
            qt(e, t ? "change" : "input", l => {
                if (l.target.composing) return;
                let a = e.value;
                n && (a = a.trim()), s && (a = Ar(a)), e._assign(a)
            }), n && qt(e, "change", () => {
                e.value = e.value.trim()
            }), t || (qt(e, "compositionstart", Ah), qt(e, "compositionend", za), qt(e, "change", za))
        }, mounted(e, {value: t}) {
            e.value = t ?? ""
        }, beforeUpdate(e, {value: t, modifiers: {lazy: n, trim: o, number: r}}, s) {
            if (e._assign = _n(s), e.composing || document.activeElement === e && e.type !== "range" && (n || o && e.value.trim() === t || (r || e.type === "number") && Ar(e.value) === t)) return;
            const l = t ?? "";
            e.value !== l && (e.value = l)
        }
    }, bc = {
        deep: !0, created(e, t, n) {
            e._assign = _n(n), qt(e, "change", () => {
                const o = e._modelValue, r = ho(e), s = e.checked, l = e._assign;
                if (ce(o)) {
                    const a = dl(o, r), u = a !== -1;
                    if (s && !u) l(o.concat(r)); else if (!s && u) {
                        const c = [...o];
                        c.splice(a, 1), l(c)
                    }
                } else if (_o(o)) {
                    const a = new Set(o);
                    s ? a.add(r) : a.delete(r), l(a)
                } else l(wc(e, s))
            })
        }, mounted: Ka, beforeUpdate(e, t, n) {
            e._assign = _n(n), Ka(e, t, n)
        }
    };

    function Ka(e, {value: t, oldValue: n}, o) {
        e._modelValue = t, ce(t) ? e.checked = dl(t, o.props.value) > -1 : _o(t) ? e.checked = t.has(o.props.value) : t !== n && (e.checked = jn(t, wc(e, !0)))
    }

    const _c = {
        created(e, {value: t}, n) {
            e.checked = jn(t, n.props.value), e._assign = _n(n), qt(e, "change", () => {
                e._assign(ho(e))
            })
        }, beforeUpdate(e, {value: t, oldValue: n}, o) {
            e._assign = _n(o), t !== n && (e.checked = jn(t, o.props.value))
        }
    }, Ih = {
        deep: !0, created(e, {value: t, modifiers: {number: n}}, o) {
            const r = _o(t);
            qt(e, "change", () => {
                const s = Array.prototype.filter.call(e.options, l => l.selected).map(l => n ? Ar(ho(l)) : ho(l));
                e._assign(e.multiple ? r ? new Set(s) : s : s[0])
            }), e._assign = _n(o)
        }, mounted(e, {value: t}) {
            Ua(e, t)
        }, beforeUpdate(e, t, n) {
            e._assign = _n(n)
        }, updated(e, {value: t}) {
            Ua(e, t)
        }
    };

    function Ua(e, t) {
        const n = e.multiple;
        if (!(n && !ce(t) && !_o(t))) {
            for (let o = 0, r = e.options.length; o < r; o++) {
                const s = e.options[o], l = ho(s);
                if (n) ce(t) ? s.selected = dl(t, l) > -1 : s.selected = t.has(l); else if (jn(ho(s), t)) {
                    e.selectedIndex !== o && (e.selectedIndex = o);
                    return
                }
            }
            !n && e.selectedIndex !== -1 && (e.selectedIndex = -1)
        }
    }

    function ho(e) {
        return "_value" in e ? e._value : e.value
    }

    function wc(e, t) {
        const n = t ? "_trueValue" : "_falseValue";
        return n in e ? e[n] : t
    }

    const Mh = {
        created(e, t, n) {
            mr(e, t, n, null, "created")
        }, mounted(e, t, n) {
            mr(e, t, n, null, "mounted")
        }, beforeUpdate(e, t, n, o) {
            mr(e, t, n, o, "beforeUpdate")
        }, updated(e, t, n, o) {
            mr(e, t, n, o, "updated")
        }
    };

    function Bh(e, t) {
        switch (e) {
            case"SELECT":
                return Ih;
            case"TEXTAREA":
                return Rr;
            default:
                switch (t) {
                    case"checkbox":
                        return bc;
                    case"radio":
                        return _c;
                    default:
                        return Rr
                }
        }
    }

    function mr(e, t, n, o, r) {
        const l = Bh(e.tagName, n.props && n.props.type)[r];
        l && l(e, t, n, o)
    }

    const Lh = ["ctrl", "shift", "alt", "meta"], Rh = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => Lh.some(n => e[`${n}Key`] && !t.includes(n))
    }, $t = (e, t) => (n, ...o) => {
        for (let r = 0; r < t.length; r++) {
            const s = Rh[t[r]];
            if (s && s(n, t)) return
        }
        return e(n, ...o)
    }, Nh = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    }, ct = (e, t) => n => {
        if (!("key" in n)) return;
        const o = $n(n.key);
        if (t.some(r => r === o || Nh[r] === o)) return e(n)
    }, wn = {
        beforeMount(e, {value: t}, {transition: n}) {
            e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : To(e, t)
        }, mounted(e, {value: t}, {transition: n}) {
            n && t && n.enter(e)
        }, updated(e, {value: t, oldValue: n}, {transition: o}) {
            !t != !n && (o ? t ? (o.beforeEnter(e), To(e, !0), o.enter(e)) : o.leave(e, () => {
                To(e, !1)
            }) : To(e, t))
        }, beforeUnmount(e, {value: t}) {
            To(e, t)
        }
    };

    function To(e, t) {
        e.style.display = t ? e._vod : "none"
    }

    const Vh = ot({patchProp: Sh}, fh);
    let Wa;

    function Cc() {
        return Wa || (Wa = zp(Vh))
    }

    const $c = (...e) => {
        Cc().render(...e)
    }, Dh = (...e) => {
        const t = Cc().createApp(...e), {mount: n} = t;
        return t.mount = o => {
            const r = Fh(o);
            if (!r) return;
            const s = t._component;
            !ye(s) && !s.render && !s.template && (s.template = r.innerHTML), r.innerHTML = "";
            const l = n(r, !1, r instanceof SVGElement);
            return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l
        }, t
    };

    function Fh(e) {
        return Se(e) ? document.querySelector(e) : e
    }

    var Hh = !1;/*!
  * pinia v2.1.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
    let Sc;
    const os = e => Sc = e, xc = Symbol();

    function Ks(e) {
        return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
    }

    var Ro;
    (function (e) {
        e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
    })(Ro || (Ro = {}));

    function jh() {
        const e = Cu(!0), t = e.run(() => ee({}));
        let n = [], o = [];
        const r = Dn({
            install(s) {
                os(r), r._a = s, s.provide(xc, r), s.config.globalProperties.$pinia = r, o.forEach(l => n.push(l)), o = []
            }, use(s) {
                return !this._a && !Hh ? o.push(s) : n.push(s), this
            }, _p: n, _a: null, _e: e, _s: new Map, state: t
        });
        return r
    }

    const kc = () => {
    };

    function qa(e, t, n, o = kc) {
        e.push(t);
        const r = () => {
            const s = e.indexOf(t);
            s > -1 && (e.splice(s, 1), o())
        };
        return !n && Wr() && qr(r), r
    }

    function eo(e, ...t) {
        e.slice().forEach(n => {
            n(...t)
        })
    }

    const zh = e => e();

    function Us(e, t) {
        e instanceof Map && t instanceof Map && t.forEach((n, o) => e.set(o, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
        for (const n in t) {
            if (!t.hasOwnProperty(n)) continue;
            const o = t[n], r = e[n];
            Ks(r) && Ks(o) && e.hasOwnProperty(n) && !Fe(o) && !vn(o) ? e[n] = Us(r, o) : e[n] = o
        }
        return e
    }

    const Kh = Symbol();

    function Uh(e) {
        return !Ks(e) || !e.hasOwnProperty(Kh)
    }

    const {assign: un} = Object;

    function Wh(e) {
        return !!(Fe(e) && e.effect)
    }

    function qh(e, t, n, o) {
        const {state: r, actions: s, getters: l} = t, a = n.state.value[e];
        let u;

        function c() {
            a || (n.state.value[e] = r ? r() : {});
            const f = Gr(n.state.value[e]);
            return un(f, s, Object.keys(l || {}).reduce((d, p) => (d[p] = Dn($(() => {
                os(n);
                const h = n._s.get(e);
                return l[p].call(h, h)
            })), d), {}))
        }

        return u = Tc(e, c, t, n, o, !0), u
    }

    function Tc(e, t, n = {}, o, r, s) {
        let l;
        const a = un({actions: {}}, n), u = {deep: !0};
        let c, f, d = [], p = [], h;
        const m = o.state.value[e];
        !s && !m && (o.state.value[e] = {}), ee({});
        let v;

        function S(k) {
            let _;
            c = f = !1, typeof k == "function" ? (k(o.state.value[e]), _ = {
                type: Ro.patchFunction,
                storeId: e,
                events: h
            }) : (Us(o.state.value[e], k), _ = {type: Ro.patchObject, payload: k, storeId: e, events: h});
            const y = v = Symbol();
            De().then(() => {
                v === y && (c = !0)
            }), f = !0, eo(d, _, o.state.value[e])
        }

        const P = s ? function () {
            const {state: _} = n, y = _ ? _() : {};
            this.$patch(K => {
                un(K, y)
            })
        } : kc;

        function C() {
            l.stop(), d = [], p = [], o._s.delete(e)
        }

        function H(k, _) {
            return function () {
                os(o);
                const y = Array.from(arguments), K = [], E = [];

                function M(W) {
                    K.push(W)
                }

                function I(W) {
                    E.push(W)
                }

                eo(p, {args: y, name: k, store: U, after: M, onError: I});
                let B;
                try {
                    B = _.apply(this && this.$id === e ? this : U, y)
                } catch (W) {
                    throw eo(E, W), W
                }
                return B instanceof Promise ? B.then(W => (eo(K, W), W)).catch(W => (eo(E, W), Promise.reject(W))) : (eo(K, B), B)
            }
        }

        const D = {
            _p: o, $id: e, $onAction: qa.bind(null, p), $patch: S, $reset: P, $subscribe(k, _ = {}) {
                const y = qa(d, k, _.detached, () => K()), K = l.run(() => $e(() => o.state.value[e], E => {
                    (_.flush === "sync" ? f : c) && k({storeId: e, type: Ro.direct, events: h}, E)
                }, un({}, u, _)));
                return y
            }, $dispose: C
        }, U = pt(D);
        o._s.set(e, U);
        const R = o._a && o._a.runWithContext || zh, A = o._e.run(() => (l = Cu(), R(() => l.run(t))));
        for (const k in A) {
            const _ = A[k];
            if (Fe(_) && !Wh(_) || vn(_)) s || (m && Uh(_) && (Fe(_) ? _.value = m[k] : Us(_, m[k])), o.state.value[e][k] = _); else if (typeof _ == "function") {
                const y = H(k, _);
                A[k] = y, a.actions[k] = _
            }
        }
        return un(U, A), un(Be(U), A), Object.defineProperty(U, "$state", {
            get: () => o.state.value[e], set: k => {
                S(_ => {
                    un(_, k)
                })
            }
        }), o._p.forEach(k => {
            un(U, l.run(() => k({store: U, app: o._a, pinia: o, options: a})))
        }), m && s && n.hydrate && n.hydrate(U.$state, m), c = !0, f = !0, U
    }

    function Yh(e, t, n) {
        let o, r;
        const s = typeof t == "function";
        typeof e == "string" ? (o = e, r = s ? n : t) : (r = e, o = e.id);

        function l(a, u) {
            const c = Np();
            return a = a || (c ? Ae(xc, null) : null), a && os(a), a = Sc, a._s.has(o) || (s ? Tc(o, t, r, a) : qh(o, r, a)), a._s.get(o)
        }

        return l.$id = o, l
    }

    const Il = (e, t) => {
            const n = e.__vccOpts || e;
            for (const [o, r] of t) n[o] = r;
            return n
        }, Gh = {}, Ec = e => (Uu("data-v-83968640"), e = e(), Wu(), e), Xh = {class: "box"},
        Zh = Ec(() => G("div", null, [rt("鐢� "), G("a", {
            href: "https://forum.houlangs.com/d/14-newlangs-ming-xie-ming-dan",
            target: "_blank"
        }, "鍘氭氮寮€鍙戝洟闃�"), rt(" 寮€鍙�")], -1)), Jh = Ec(() => G("div", null, "Newlangs 4.3.6", -1)),
        Qh = [Zh, Jh];

    function ev(e, t) {
        return w(), T("div", Xh, Qh)
    }

    const tv = Il(Gh, [["render", ev], ["__scopeId", "data-v-83968640"]]),
        nv = Yh("nav", () => ({active: ee("home")}), {persist: !0}), ov = {class: "center example-nav"},
        rv = {class: "square"}, sv = {
            __name: "NavBar", setup(e) {
                return nv().active, (n, o) => {
                    const r = xr("router-view");
                    return w(), T("div", ov, [G("div", rv, [fe(r)]), fe(tv)])
                }
            }
        }, lv = Il(sv, [["__scopeId", "data-v-4c9a0228"]]), av = {
            __name: "App", setup(e) {
                return (t, n) => (w(), Me(lv))
            }
        };/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
    const no = typeof window < "u";

    function iv(e) {
        return e.__esModule || e[Symbol.toStringTag] === "Module"
    }

    const je = Object.assign;

    function bs(e, t) {
        const n = {};
        for (const o in t) {
            const r = t[o];
            n[o] = Rt(r) ? r.map(e) : e(r)
        }
        return n
    }

    const No = () => {
    }, Rt = Array.isArray, uv = /\/$/, cv = e => e.replace(uv, "");

    function _s(e, t, n = "/") {
        let o, r = {}, s = "", l = "";
        const a = t.indexOf("#");
        let u = t.indexOf("?");
        return a < u && a >= 0 && (u = -1), u > -1 && (o = t.slice(0, u), s = t.slice(u + 1, a > -1 ? a : t.length), r = e(s)), a > -1 && (o = o || t.slice(0, a), l = t.slice(a, t.length)), o = hv(o ?? t, n), {
            fullPath: o + (s && "?") + s + l,
            path: o,
            query: r,
            hash: l
        }
    }

    function fv(e, t) {
        const n = t.query ? e(t.query) : "";
        return t.path + (n && "?") + n + (t.hash || "")
    }

    function Ya(e, t) {
        return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
    }

    function dv(e, t, n) {
        const o = t.matched.length - 1, r = n.matched.length - 1;
        return o > -1 && o === r && vo(t.matched[o], n.matched[r]) && Pc(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
    }

    function vo(e, t) {
        return (e.aliasOf || e) === (t.aliasOf || t)
    }

    function Pc(e, t) {
        if (Object.keys(e).length !== Object.keys(t).length) return !1;
        for (const n in e) if (!pv(e[n], t[n])) return !1;
        return !0
    }

    function pv(e, t) {
        return Rt(e) ? Ga(e, t) : Rt(t) ? Ga(t, e) : e === t
    }

    function Ga(e, t) {
        return Rt(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t
    }

    function hv(e, t) {
        if (e.startsWith("/")) return e;
        if (!e) return t;
        const n = t.split("/"), o = e.split("/"), r = o[o.length - 1];
        (r === ".." || r === ".") && o.push("");
        let s = n.length - 1, l, a;
        for (l = 0; l < o.length; l++) if (a = o[l], a !== ".") if (a === "..") s > 1 && s--; else break;
        return n.slice(0, s).join("/") + "/" + o.slice(l - (l === o.length ? 1 : 0)).join("/")
    }

    var Go;
    (function (e) {
        e.pop = "pop", e.push = "push"
    })(Go || (Go = {}));
    var Vo;
    (function (e) {
        e.back = "back", e.forward = "forward", e.unknown = ""
    })(Vo || (Vo = {}));

    function vv(e) {
        if (!e) if (no) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
        return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), cv(e)
    }

    const mv = /^[^#]+#/;

    function gv(e, t) {
        return e.replace(mv, "#") + t
    }

    function yv(e, t) {
        const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
        return {behavior: t.behavior, left: o.left - n.left - (t.left || 0), top: o.top - n.top - (t.top || 0)}
    }

    const rs = () => ({left: window.pageXOffset, top: window.pageYOffset});

    function bv(e) {
        let t;
        if ("el" in e) {
            const n = e.el, o = typeof n == "string" && n.startsWith("#"),
                r = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
            if (!r) return;
            t = yv(r, e)
        } else t = e;
        "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
    }

    function Xa(e, t) {
        return (history.state ? history.state.position - t : -1) + e
    }

    const Ws = new Map;

    function _v(e, t) {
        Ws.set(e, t)
    }

    function wv(e) {
        const t = Ws.get(e);
        return Ws.delete(e), t
    }

    let Cv = () => location.protocol + "//" + location.host;

    function Oc(e, t) {
        const {pathname: n, search: o, hash: r} = t, s = e.indexOf("#");
        if (s > -1) {
            let a = r.includes(e.slice(s)) ? e.slice(s).length : 1, u = r.slice(a);
            return u[0] !== "/" && (u = "/" + u), Ya(u, "")
        }
        return Ya(n, e) + o + r
    }

    function $v(e, t, n, o) {
        let r = [], s = [], l = null;
        const a = ({state: p}) => {
            const h = Oc(e, location), m = n.value, v = t.value;
            let S = 0;
            if (p) {
                if (n.value = h, t.value = p, l && l === m) {
                    l = null;
                    return
                }
                S = v ? p.position - v.position : 0
            } else o(h);
            r.forEach(P => {
                P(n.value, m, {delta: S, type: Go.pop, direction: S ? S > 0 ? Vo.forward : Vo.back : Vo.unknown})
            })
        };

        function u() {
            l = n.value
        }

        function c(p) {
            r.push(p);
            const h = () => {
                const m = r.indexOf(p);
                m > -1 && r.splice(m, 1)
            };
            return s.push(h), h
        }

        function f() {
            const {history: p} = window;
            p.state && p.replaceState(je({}, p.state, {scroll: rs()}), "")
        }

        function d() {
            for (const p of s) p();
            s = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", f)
        }

        return window.addEventListener("popstate", a), window.addEventListener("beforeunload", f, {passive: !0}), {
            pauseListeners: u,
            listen: c,
            destroy: d
        }
    }

    function Za(e, t, n, o = !1, r = !1) {
        return {back: e, current: t, forward: n, replaced: o, position: window.history.length, scroll: r ? rs() : null}
    }

    function Sv(e) {
        const {history: t, location: n} = window, o = {value: Oc(e, n)}, r = {value: t.state};
        r.value || s(o.value, {
            back: null,
            current: o.value,
            forward: null,
            position: t.length - 1,
            replaced: !0,
            scroll: null
        }, !0);

        function s(u, c, f) {
            const d = e.indexOf("#"),
                p = d > -1 ? (n.host && document.querySelector("base") ? e : e.slice(d)) + u : Cv() + e + u;
            try {
                t[f ? "replaceState" : "pushState"](c, "", p), r.value = c
            } catch (h) {
                console.error(h), n[f ? "replace" : "assign"](p)
            }
        }

        function l(u, c) {
            const f = je({}, t.state, Za(r.value.back, u, r.value.forward, !0), c, {position: r.value.position});
            s(u, f, !0), o.value = u
        }

        function a(u, c) {
            const f = je({}, r.value, t.state, {forward: u, scroll: rs()});
            s(f.current, f, !0);
            const d = je({}, Za(o.value, u, null), {position: f.position + 1}, c);
            s(u, d, !1), o.value = u
        }

        return {location: o, state: r, push: a, replace: l}
    }

    function xv(e) {
        e = vv(e);
        const t = Sv(e), n = $v(e, t.state, t.location, t.replace);

        function o(s, l = !0) {
            l || n.pauseListeners(), history.go(s)
        }

        const r = je({location: "", base: e, go: o, createHref: gv.bind(null, e)}, t, n);
        return Object.defineProperty(r, "location", {
            enumerable: !0,
            get: () => t.location.value
        }), Object.defineProperty(r, "state", {enumerable: !0, get: () => t.state.value}), r
    }

    function kv(e) {
        return typeof e == "string" || e && typeof e == "object"
    }

    function Ac(e) {
        return typeof e == "string" || typeof e == "symbol"
    }

    const an = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    }, Ic = Symbol("");
    var Ja;
    (function (e) {
        e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
    })(Ja || (Ja = {}));

    function mo(e, t) {
        return je(new Error, {type: e, [Ic]: !0}, t)
    }

    function Ut(e, t) {
        return e instanceof Error && Ic in e && (t == null || !!(e.type & t))
    }

    const Qa = "[^/]+?", Tv = {sensitive: !1, strict: !1, start: !0, end: !0}, Ev = /[.+*?^${}()[\]/\\]/g;

    function Pv(e, t) {
        const n = je({}, Tv, t), o = [];
        let r = n.start ? "^" : "";
        const s = [];
        for (const c of e) {
            const f = c.length ? [] : [90];
            n.strict && !c.length && (r += "/");
            for (let d = 0; d < c.length; d++) {
                const p = c[d];
                let h = 40 + (n.sensitive ? .25 : 0);
                if (p.type === 0) d || (r += "/"), r += p.value.replace(Ev, "\\$&"), h += 40; else if (p.type === 1) {
                    const {value: m, repeatable: v, optional: S, regexp: P} = p;
                    s.push({name: m, repeatable: v, optional: S});
                    const C = P || Qa;
                    if (C !== Qa) {
                        h += 10;
                        try {
                            new RegExp(`(${C})`)
                        } catch (D) {
                            throw new Error(`Invalid custom RegExp for param "${m}" (${C}): ` + D.message)
                        }
                    }
                    let H = v ? `((?:${C})(?:/(?:${C}))*)` : `(${C})`;
                    d || (H = S && c.length < 2 ? `(?:/${H})` : "/" + H), S && (H += "?"), r += H, h += 20, S && (h += -8), v && (h += -20), C === ".*" && (h += -50)
                }
                f.push(h)
            }
            o.push(f)
        }
        if (n.strict && n.end) {
            const c = o.length - 1;
            o[c][o[c].length - 1] += .7000000000000001
        }
        n.strict || (r += "/?"), n.end ? r += "$" : n.strict && (r += "(?:/|$)");
        const l = new RegExp(r, n.sensitive ? "" : "i");

        function a(c) {
            const f = c.match(l), d = {};
            if (!f) return null;
            for (let p = 1; p < f.length; p++) {
                const h = f[p] || "", m = s[p - 1];
                d[m.name] = h && m.repeatable ? h.split("/") : h
            }
            return d
        }

        function u(c) {
            let f = "", d = !1;
            for (const p of e) {
                (!d || !f.endsWith("/")) && (f += "/"), d = !1;
                for (const h of p) if (h.type === 0) f += h.value; else if (h.type === 1) {
                    const {value: m, repeatable: v, optional: S} = h, P = m in c ? c[m] : "";
                    if (Rt(P) && !v) throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
                    const C = Rt(P) ? P.join("/") : P;
                    if (!C) if (S) p.length < 2 && (f.endsWith("/") ? f = f.slice(0, -1) : d = !0); else throw new Error(`Missing required param "${m}"`);
                    f += C
                }
            }
            return f || "/"
        }

        return {re: l, score: o, keys: s, parse: a, stringify: u}
    }

    function Ov(e, t) {
        let n = 0;
        for (; n < e.length && n < t.length;) {
            const o = t[n] - e[n];
            if (o) return o;
            n++
        }
        return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0
    }

    function Av(e, t) {
        let n = 0;
        const o = e.score, r = t.score;
        for (; n < o.length && n < r.length;) {
            const s = Ov(o[n], r[n]);
            if (s) return s;
            n++
        }
        if (Math.abs(r.length - o.length) === 1) {
            if (ei(o)) return 1;
            if (ei(r)) return -1
        }
        return r.length - o.length
    }

    function ei(e) {
        const t = e[e.length - 1];
        return e.length > 0 && t[t.length - 1] < 0
    }

    const Iv = {type: 0, value: ""}, Mv = /[a-zA-Z0-9_]/;

    function Bv(e) {
        if (!e) return [[]];
        if (e === "/") return [[Iv]];
        if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

        function t(h) {
            throw new Error(`ERR (${n})/"${c}": ${h}`)
        }

        let n = 0, o = n;
        const r = [];
        let s;

        function l() {
            s && r.push(s), s = []
        }

        let a = 0, u, c = "", f = "";

        function d() {
            c && (n === 0 ? s.push({
                type: 0,
                value: c
            }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (u === "*" || u === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), s.push({
                type: 1,
                value: c,
                regexp: f,
                repeatable: u === "*" || u === "+",
                optional: u === "*" || u === "?"
            })) : t("Invalid state to consume buffer"), c = "")
        }

        function p() {
            c += u
        }

        for (; a < e.length;) {
            if (u = e[a++], u === "\\" && n !== 2) {
                o = n, n = 4;
                continue
            }
            switch (n) {
                case 0:
                    u === "/" ? (c && d(), l()) : u === ":" ? (d(), n = 1) : p();
                    break;
                case 4:
                    p(), n = o;
                    break;
                case 1:
                    u === "(" ? n = 2 : Mv.test(u) ? p() : (d(), n = 0, u !== "*" && u !== "?" && u !== "+" && a--);
                    break;
                case 2:
                    u === ")" ? f[f.length - 1] == "\\" ? f = f.slice(0, -1) + u : n = 3 : f += u;
                    break;
                case 3:
                    d(), n = 0, u !== "*" && u !== "?" && u !== "+" && a--, f = "";
                    break;
                default:
                    t("Unknown state");
                    break
            }
        }
        return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), d(), l(), r
    }

    function Lv(e, t, n) {
        const o = Pv(Bv(e.path), n), r = je(o, {record: e, parent: t, children: [], alias: []});
        return t && !r.record.aliasOf == !t.record.aliasOf && t.children.push(r), r
    }

    function Rv(e, t) {
        const n = [], o = new Map;
        t = oi({strict: !1, end: !0, sensitive: !1}, t);

        function r(f) {
            return o.get(f)
        }

        function s(f, d, p) {
            const h = !p, m = Nv(f);
            m.aliasOf = p && p.record;
            const v = oi(t, f), S = [m];
            if ("alias" in f) {
                const H = typeof f.alias == "string" ? [f.alias] : f.alias;
                for (const D of H) S.push(je({}, m, {
                    components: p ? p.record.components : m.components,
                    path: D,
                    aliasOf: p ? p.record : m
                }))
            }
            let P, C;
            for (const H of S) {
                const {path: D} = H;
                if (d && D[0] !== "/") {
                    const U = d.record.path, R = U[U.length - 1] === "/" ? "" : "/";
                    H.path = d.record.path + (D && R + D)
                }
                if (P = Lv(H, d, v), p ? p.alias.push(P) : (C = C || P, C !== P && C.alias.push(P), h && f.name && !ni(P) && l(f.name)), m.children) {
                    const U = m.children;
                    for (let R = 0; R < U.length; R++) s(U[R], P, p && p.children[R])
                }
                p = p || P, (P.record.components && Object.keys(P.record.components).length || P.record.name || P.record.redirect) && u(P)
            }
            return C ? () => {
                l(C)
            } : No
        }

        function l(f) {
            if (Ac(f)) {
                const d = o.get(f);
                d && (o.delete(f), n.splice(n.indexOf(d), 1), d.children.forEach(l), d.alias.forEach(l))
            } else {
                const d = n.indexOf(f);
                d > -1 && (n.splice(d, 1), f.record.name && o.delete(f.record.name), f.children.forEach(l), f.alias.forEach(l))
            }
        }

        function a() {
            return n
        }

        function u(f) {
            let d = 0;
            for (; d < n.length && Av(f, n[d]) >= 0 && (f.record.path !== n[d].record.path || !Mc(f, n[d]));) d++;
            n.splice(d, 0, f), f.record.name && !ni(f) && o.set(f.record.name, f)
        }

        function c(f, d) {
            let p, h = {}, m, v;
            if ("name" in f && f.name) {
                if (p = o.get(f.name), !p) throw mo(1, {location: f});
                v = p.record.name, h = je(ti(d.params, p.keys.filter(C => !C.optional).map(C => C.name)), f.params && ti(f.params, p.keys.map(C => C.name))), m = p.stringify(h)
            } else if ("path" in f) m = f.path, p = n.find(C => C.re.test(m)), p && (h = p.parse(m), v = p.record.name); else {
                if (p = d.name ? o.get(d.name) : n.find(C => C.re.test(d.path)), !p) throw mo(1, {
                    location: f,
                    currentLocation: d
                });
                v = p.record.name, h = je({}, d.params, f.params), m = p.stringify(h)
            }
            const S = [];
            let P = p;
            for (; P;) S.unshift(P.record), P = P.parent;
            return {name: v, path: m, params: h, matched: S, meta: Dv(S)}
        }

        return e.forEach(f => s(f)), {addRoute: s, resolve: c, removeRoute: l, getRoutes: a, getRecordMatcher: r}
    }

    function ti(e, t) {
        const n = {};
        for (const o of t) o in e && (n[o] = e[o]);
        return n
    }

    function Nv(e) {
        return {
            path: e.path,
            redirect: e.redirect,
            name: e.name,
            meta: e.meta || {},
            aliasOf: void 0,
            beforeEnter: e.beforeEnter,
            props: Vv(e),
            children: e.children || [],
            instances: {},
            leaveGuards: new Set,
            updateGuards: new Set,
            enterCallbacks: {},
            components: "components" in e ? e.components || null : e.component && {default: e.component}
        }
    }

    function Vv(e) {
        const t = {}, n = e.props || !1;
        if ("component" in e) t.default = n; else for (const o in e.components) t[o] = typeof n == "object" ? n[o] : n;
        return t
    }

    function ni(e) {
        for (; e;) {
            if (e.record.aliasOf) return !0;
            e = e.parent
        }
        return !1
    }

    function Dv(e) {
        return e.reduce((t, n) => je(t, n.meta), {})
    }

    function oi(e, t) {
        const n = {};
        for (const o in e) n[o] = o in t ? t[o] : e[o];
        return n
    }

    function Mc(e, t) {
        return t.children.some(n => n === e || Mc(e, n))
    }

    const Bc = /#/g, Fv = /&/g, Hv = /\//g, jv = /=/g, zv = /\?/g, Lc = /\+/g, Kv = /%5B/g, Uv = /%5D/g, Rc = /%5E/g,
        Wv = /%60/g, Nc = /%7B/g, qv = /%7C/g, Vc = /%7D/g, Yv = /%20/g;

    function Ml(e) {
        return encodeURI("" + e).replace(qv, "|").replace(Kv, "[").replace(Uv, "]")
    }

    function Gv(e) {
        return Ml(e).replace(Nc, "{").replace(Vc, "}").replace(Rc, "^")
    }

    function qs(e) {
        return Ml(e).replace(Lc, "%2B").replace(Yv, "+").replace(Bc, "%23").replace(Fv, "%26").replace(Wv, "`").replace(Nc, "{").replace(Vc, "}").replace(Rc, "^")
    }

    function Xv(e) {
        return qs(e).replace(jv, "%3D")
    }

    function Zv(e) {
        return Ml(e).replace(Bc, "%23").replace(zv, "%3F")
    }

    function Jv(e) {
        return e == null ? "" : Zv(e).replace(Hv, "%2F")
    }

    function Nr(e) {
        try {
            return decodeURIComponent("" + e)
        } catch {
        }
        return "" + e
    }

    function Qv(e) {
        const t = {};
        if (e === "" || e === "?") return t;
        const o = (e[0] === "?" ? e.slice(1) : e).split("&");
        for (let r = 0; r < o.length; ++r) {
            const s = o[r].replace(Lc, " "), l = s.indexOf("="), a = Nr(l < 0 ? s : s.slice(0, l)),
                u = l < 0 ? null : Nr(s.slice(l + 1));
            if (a in t) {
                let c = t[a];
                Rt(c) || (c = t[a] = [c]), c.push(u)
            } else t[a] = u
        }
        return t
    }

    function ri(e) {
        let t = "";
        for (let n in e) {
            const o = e[n];
            if (n = Xv(n), o == null) {
                o !== void 0 && (t += (t.length ? "&" : "") + n);
                continue
            }
            (Rt(o) ? o.map(s => s && qs(s)) : [o && qs(o)]).forEach(s => {
                s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s))
            })
        }
        return t
    }

    function em(e) {
        const t = {};
        for (const n in e) {
            const o = e[n];
            o !== void 0 && (t[n] = Rt(o) ? o.map(r => r == null ? null : "" + r) : o == null ? o : "" + o)
        }
        return t
    }

    const tm = Symbol(""), si = Symbol(""), Bl = Symbol(""), Dc = Symbol(""), Ys = Symbol("");

    function Eo() {
        let e = [];

        function t(o) {
            return e.push(o), () => {
                const r = e.indexOf(o);
                r > -1 && e.splice(r, 1)
            }
        }

        function n() {
            e = []
        }

        return {add: t, list: () => e.slice(), reset: n}
    }

    function dn(e, t, n, o, r) {
        const s = o && (o.enterCallbacks[r] = o.enterCallbacks[r] || []);
        return () => new Promise((l, a) => {
            const u = d => {
                d === !1 ? a(mo(4, {from: n, to: t})) : d instanceof Error ? a(d) : kv(d) ? a(mo(2, {
                    from: t,
                    to: d
                })) : (s && o.enterCallbacks[r] === s && typeof d == "function" && s.push(d), l())
            }, c = e.call(o && o.instances[r], t, n, u);
            let f = Promise.resolve(c);
            e.length < 3 && (f = f.then(u)), f.catch(d => a(d))
        })
    }

    function ws(e, t, n, o) {
        const r = [];
        for (const s of e) for (const l in s.components) {
            let a = s.components[l];
            if (!(t !== "beforeRouteEnter" && !s.instances[l])) if (nm(a)) {
                const c = (a.__vccOpts || a)[t];
                c && r.push(dn(c, n, o, s, l))
            } else {
                let u = a();
                r.push(() => u.then(c => {
                    if (!c) return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${s.path}"`));
                    const f = iv(c) ? c.default : c;
                    s.components[l] = f;
                    const p = (f.__vccOpts || f)[t];
                    return p && dn(p, n, o, s, l)()
                }))
            }
        }
        return r
    }

    function nm(e) {
        return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
    }

    function li(e) {
        const t = Ae(Bl), n = Ae(Dc), o = $(() => t.resolve(i(e.to))), r = $(() => {
                const {matched: u} = o.value, {length: c} = u, f = u[c - 1], d = n.matched;
                if (!f || !d.length) return -1;
                const p = d.findIndex(vo.bind(null, f));
                if (p > -1) return p;
                const h = ai(u[c - 2]);
                return c > 1 && ai(f) === h && d[d.length - 1].path !== h ? d.findIndex(vo.bind(null, u[c - 2])) : p
            }), s = $(() => r.value > -1 && lm(n.params, o.value.params)),
            l = $(() => r.value > -1 && r.value === n.matched.length - 1 && Pc(n.params, o.value.params));

        function a(u = {}) {
            return sm(u) ? t[i(e.replace) ? "replace" : "push"](i(e.to)).catch(No) : Promise.resolve()
        }

        return {route: o, href: $(() => o.value.href), isActive: s, isExactActive: l, navigate: a}
    }

    const om = X({
        name: "RouterLink",
        compatConfig: {MODE: 3},
        props: {
            to: {type: [String, Object], required: !0},
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {type: String, default: "page"}
        },
        useLink: li,
        setup(e, {slots: t}) {
            const n = pt(li(e)), {options: o} = Ae(Bl), r = $(() => ({
                [ii(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
                [ii(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
            }));
            return () => {
                const s = t.default && t.default(n);
                return e.custom ? s : Et("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: r.value
                }, s)
            }
        }
    }), rm = om;

    function sm(e) {
        if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
            if (e.currentTarget && e.currentTarget.getAttribute) {
                const t = e.currentTarget.getAttribute("target");
                if (/\b_blank\b/i.test(t)) return
            }
            return e.preventDefault && e.preventDefault(), !0
        }
    }

    function lm(e, t) {
        for (const n in t) {
            const o = t[n], r = e[n];
            if (typeof o == "string") {
                if (o !== r) return !1
            } else if (!Rt(r) || r.length !== o.length || o.some((s, l) => s !== r[l])) return !1
        }
        return !0
    }

    function ai(e) {
        return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
    }

    const ii = (e, t, n) => e ?? t ?? n, am = X({
        name: "RouterView",
        inheritAttrs: !1,
        props: {name: {type: String, default: "default"}, route: Object},
        compatConfig: {MODE: 3},
        setup(e, {attrs: t, slots: n}) {
            const o = Ae(Ys), r = $(() => e.route || o.value), s = Ae(si, 0), l = $(() => {
                let c = i(s);
                const {matched: f} = r.value;
                let d;
                for (; (d = f[c]) && !d.components;) c++;
                return c
            }), a = $(() => r.value.matched[l.value]);
            et(si, $(() => l.value + 1)), et(tm, a), et(Ys, r);
            const u = ee();
            return $e(() => [u.value, a.value, e.name], ([c, f, d], [p, h, m]) => {
                f && (f.instances[d] = c, h && h !== f && c && c === p && (f.leaveGuards.size || (f.leaveGuards = h.leaveGuards), f.updateGuards.size || (f.updateGuards = h.updateGuards))), c && f && (!h || !vo(f, h) || !p) && (f.enterCallbacks[d] || []).forEach(v => v(c))
            }, {flush: "post"}), () => {
                const c = r.value, f = e.name, d = a.value, p = d && d.components[f];
                if (!p) return ui(n.default, {Component: p, route: c});
                const h = d.props[f], m = h ? h === !0 ? c.params : typeof h == "function" ? h(c) : h : null,
                    S = Et(p, je({}, m, t, {
                        onVnodeUnmounted: P => {
                            P.component.isUnmounted && (d.instances[f] = null)
                        }, ref: u
                    }));
                return ui(n.default, {Component: S, route: c}) || S
            }
        }
    });

    function ui(e, t) {
        if (!e) return null;
        const n = e(t);
        return n.length === 1 ? n[0] : n
    }

    const im = am;

    function um(e) {
        const t = Rv(e.routes, e), n = e.parseQuery || Qv, o = e.stringifyQuery || ri, r = e.history, s = Eo(),
            l = Eo(), a = Eo(), u = wl(an);
        let c = an;
        no && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
        const f = bs.bind(null, z => "" + z), d = bs.bind(null, Jv), p = bs.bind(null, Nr);

        function h(z, se) {
            let te, ue;
            return Ac(z) ? (te = t.getRecordMatcher(z), ue = se) : ue = z, t.addRoute(ue, te)
        }

        function m(z) {
            const se = t.getRecordMatcher(z);
            se && t.removeRoute(se)
        }

        function v() {
            return t.getRoutes().map(z => z.record)
        }

        function S(z) {
            return !!t.getRecordMatcher(z)
        }

        function P(z, se) {
            if (se = je({}, se || u.value), typeof z == "string") {
                const O = _s(n, z, se.path), F = t.resolve({path: O.path}, se), Y = r.createHref(O.fullPath);
                return je(O, F, {params: p(F.params), hash: Nr(O.hash), redirectedFrom: void 0, href: Y})
            }
            let te;
            if ("path" in z) te = je({}, z, {path: _s(n, z.path, se.path).path}); else {
                const O = je({}, z.params);
                for (const F in O) O[F] == null && delete O[F];
                te = je({}, z, {params: d(O)}), se.params = d(se.params)
            }
            const ue = t.resolve(te, se), Ce = z.hash || "";
            ue.params = f(p(ue.params));
            const g = fv(o, je({}, z, {hash: Gv(Ce), path: ue.path})), b = r.createHref(g);
            return je({
                fullPath: g,
                hash: Ce,
                query: o === ri ? em(z.query) : z.query || {}
            }, ue, {redirectedFrom: void 0, href: b})
        }

        function C(z) {
            return typeof z == "string" ? _s(n, z, u.value.path) : je({}, z)
        }

        function H(z, se) {
            if (c !== z) return mo(8, {from: se, to: z})
        }

        function D(z) {
            return A(z)
        }

        function U(z) {
            return D(je(C(z), {replace: !0}))
        }

        function R(z) {
            const se = z.matched[z.matched.length - 1];
            if (se && se.redirect) {
                const {redirect: te} = se;
                let ue = typeof te == "function" ? te(z) : te;
                return typeof ue == "string" && (ue = ue.includes("?") || ue.includes("#") ? ue = C(ue) : {path: ue}, ue.params = {}), je({
                    query: z.query,
                    hash: z.hash,
                    params: "path" in ue ? {} : z.params
                }, ue)
            }
        }

        function A(z, se) {
            const te = c = P(z), ue = u.value, Ce = z.state, g = z.force, b = z.replace === !0, O = R(te);
            if (O) return A(je(C(O), {
                state: typeof O == "object" ? je({}, Ce, O.state) : Ce,
                force: g,
                replace: b
            }), se || te);
            const F = te;
            F.redirectedFrom = se;
            let Y;
            return !g && dv(o, ue, te) && (Y = mo(16, {
                to: F,
                from: ue
            }), xe(ue, ue, !0, !1)), (Y ? Promise.resolve(Y) : y(F, ue)).catch(J => Ut(J) ? Ut(J, 2) ? J : _e(J) : j(J, F, ue)).then(J => {
                if (J) {
                    if (Ut(J, 2)) return A(je({replace: b}, C(J.to), {
                        state: typeof J.to == "object" ? je({}, Ce, J.to.state) : Ce,
                        force: g
                    }), se || F)
                } else J = E(F, ue, !0, b, Ce);
                return K(F, ue, J), J
            })
        }

        function k(z, se) {
            const te = H(z, se);
            return te ? Promise.reject(te) : Promise.resolve()
        }

        function _(z) {
            const se = Ye.values().next().value;
            return se && typeof se.runWithContext == "function" ? se.runWithContext(z) : z()
        }

        function y(z, se) {
            let te;
            const [ue, Ce, g] = cm(z, se);
            te = ws(ue.reverse(), "beforeRouteLeave", z, se);
            for (const O of ue) O.leaveGuards.forEach(F => {
                te.push(dn(F, z, se))
            });
            const b = k.bind(null, z, se);
            return te.push(b), Ve(te).then(() => {
                te = [];
                for (const O of s.list()) te.push(dn(O, z, se));
                return te.push(b), Ve(te)
            }).then(() => {
                te = ws(Ce, "beforeRouteUpdate", z, se);
                for (const O of Ce) O.updateGuards.forEach(F => {
                    te.push(dn(F, z, se))
                });
                return te.push(b), Ve(te)
            }).then(() => {
                te = [];
                for (const O of g) if (O.beforeEnter) if (Rt(O.beforeEnter)) for (const F of O.beforeEnter) te.push(dn(F, z, se)); else te.push(dn(O.beforeEnter, z, se));
                return te.push(b), Ve(te)
            }).then(() => (z.matched.forEach(O => O.enterCallbacks = {}), te = ws(g, "beforeRouteEnter", z, se), te.push(b), Ve(te))).then(() => {
                te = [];
                for (const O of l.list()) te.push(dn(O, z, se));
                return te.push(b), Ve(te)
            }).catch(O => Ut(O, 8) ? O : Promise.reject(O))
        }

        function K(z, se, te) {
            a.list().forEach(ue => _(() => ue(z, se, te)))
        }

        function E(z, se, te, ue, Ce) {
            const g = H(z, se);
            if (g) return g;
            const b = se === an, O = no ? history.state : {};
            te && (ue || b ? r.replace(z.fullPath, je({scroll: b && O && O.scroll}, Ce)) : r.push(z.fullPath, Ce)), u.value = z, xe(z, se, te, b), _e()
        }

        let M;

        function I() {
            M || (M = r.listen((z, se, te) => {
                if (!Qe.listening) return;
                const ue = P(z), Ce = R(ue);
                if (Ce) {
                    A(je(Ce, {replace: !0}), ue).catch(No);
                    return
                }
                c = ue;
                const g = u.value;
                no && _v(Xa(g.fullPath, te.delta), rs()), y(ue, g).catch(b => Ut(b, 12) ? b : Ut(b, 2) ? (A(b.to, ue).then(O => {
                    Ut(O, 20) && !te.delta && te.type === Go.pop && r.go(-1, !1)
                }).catch(No), Promise.reject()) : (te.delta && r.go(-te.delta, !1), j(b, ue, g))).then(b => {
                    b = b || E(ue, g, !1), b && (te.delta && !Ut(b, 8) ? r.go(-te.delta, !1) : te.type === Go.pop && Ut(b, 20) && r.go(-1, !1)), K(ue, g, b)
                }).catch(No)
            }))
        }

        let B = Eo(), W = Eo(), V;

        function j(z, se, te) {
            _e(z);
            const ue = W.list();
            return ue.length ? ue.forEach(Ce => Ce(z, se, te)) : console.error(z), Promise.reject(z)
        }

        function Z() {
            return V && u.value !== an ? Promise.resolve() : new Promise((z, se) => {
                B.add([z, se])
            })
        }

        function _e(z) {
            return V || (V = !z, I(), B.list().forEach(([se, te]) => z ? te(z) : se()), B.reset()), z
        }

        function xe(z, se, te, ue) {
            const {scrollBehavior: Ce} = e;
            if (!no || !Ce) return Promise.resolve();
            const g = !te && wv(Xa(z.fullPath, 0)) || (ue || !te) && history.state && history.state.scroll || null;
            return De().then(() => Ce(z, se, g)).then(b => b && bv(b)).catch(b => j(b, z, se))
        }

        const Ee = z => r.go(z);
        let Ne;
        const Ye = new Set, Qe = {
            currentRoute: u,
            listening: !0,
            addRoute: h,
            removeRoute: m,
            hasRoute: S,
            getRoutes: v,
            resolve: P,
            options: e,
            push: D,
            replace: U,
            go: Ee,
            back: () => Ee(-1),
            forward: () => Ee(1),
            beforeEach: s.add,
            beforeResolve: l.add,
            afterEach: a.add,
            onError: W.add,
            isReady: Z,
            install(z) {
                const se = this;
                z.component("RouterLink", rm), z.component("RouterView", im), z.config.globalProperties.$router = se, Object.defineProperty(z.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => i(u)
                }), no && !Ne && u.value === an && (Ne = !0, D(r.location).catch(Ce => {
                }));
                const te = {};
                for (const Ce in an) Object.defineProperty(te, Ce, {get: () => u.value[Ce], enumerable: !0});
                z.provide(Bl, se), z.provide(Dc, Mu(te)), z.provide(Ys, u);
                const ue = z.unmount;
                Ye.add(z), z.unmount = function () {
                    Ye.delete(z), Ye.size < 1 && (c = an, M && M(), M = null, u.value = an, Ne = !1, V = !1), ue()
                }
            }
        };

        function Ve(z) {
            return z.reduce((se, te) => se.then(() => _(te)), Promise.resolve())
        }

        return Qe
    }

    function cm(e, t) {
        const n = [], o = [], r = [], s = Math.max(t.matched.length, e.matched.length);
        for (let l = 0; l < s; l++) {
            const a = t.matched[l];
            a && (e.matched.find(c => vo(c, a)) ? o.push(a) : n.push(a));
            const u = e.matched[l];
            u && (t.matched.find(c => vo(c, u)) || r.push(u))
        }
        return [n, o, r]
    }

    const fm = "/assets/logo-94563452.svg", dm = {class: "search_box"}, pm = {class: "con-input"},
        hm = {class: "con-select"}, vm = {href: "https://app.houlangs.com/#/auth/register"},
        mm = Jp('<br><br><br><div class="btn"><a href="https://app.houlangs.com/#/auth/register"><button class="btn"><svg height="10" width="10" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle"><path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path></svg><span class="text">鍗冲埢瑙ｆ瀽锛�</span></button></a></div>', 4),
        gm = {
            __name: "SearchDomain", setup(e) {
                const t = ee(""), n = ee("");
                return (o, r) => {
                    const s = xr("vs-input"), l = xr("vs-option"), a = xr("vs-select");
                    return w(), T(ve, null, [G("div", dm, [G("div", pm, [fe(s, {
                        modelValue: t.value,
                        "onUpdate:modelValue": r[0] || (r[0] = u => t.value = u),
                        color: "primary",
                        placeholder: "鎮ㄦ兂瑕佺殑鍩熷悕鍓嶇紑"
                    }, null, 8, ["modelValue"])]), G("div", hm, [fe(a, {
                        modelValue: n.value,
                        "onUpdate:modelValue": r[1] || (r[1] = u => n.value = u),
                        placeholder: "鎮ㄦ兂浣跨敤鐨勪富鍩熷悕",
                        color: "primary"
                    }, {
                        default: ke(() => [fe(l, {
                            label: "669.ink",
                            value: "4"
                        }, {default: ke(() => [rt(" 猸愶笍669.ink锛堝凡澶囨锛� ")]), _: 1}), fe(l, {
                            label: "g6i.cn",
                            value: "1"
                        }, {default: ke(() => [rt(" g6i.cn ")]), _: 1}), fe(l, {
                            label: "o-4.cn",
                            value: "2"
                        }, {default: ke(() => [rt(" o-4.cn ")]), _: 1}), fe(l, {
                            label: "j2n.top",
                            value: "3"
                        }, {default: ke(() => [rt(" j2n.top ")]), _: 1}), fe(l, {
                            label: "sx7.top",
                            value: "5"
                        }, {default: ke(() => [rt(" sx7.top ")]), _: 1}), fe(l, {
                            label: "v2be.top",
                            value: "6"
                        }, {default: ke(() => [rt(" v2be.top ")]), _: 1}), fe(l, {
                            label: "rainyun.ink",
                            value: "7"
                        }, {default: ke(() => [rt(" rainyun.ink ")]), _: 1}), G("a", vm, [fe(l, {
                            label: "what's more",
                            value: "8"
                        }, {default: ke(() => [rt(" 鏇村30+鍙敤鍩熷悕路路路路馃コ")]), _: 1})])]), _: 1
                    }, 8, ["modelValue"])])]), mm], 64)
                }
            }
        }, sr = e => (Uu("data-v-624ee7de"), e = e(), Wu(), e), ym = {class: "home_content"},
        bm = sr(() => G("a", {href: "https://app.houlangs.com"}, [G("img", {
            src: fm,
            alt: "Logo",
            class: "logo"
        })], -1)), _m = sr(() => G("br", null, null, -1)), wm = sr(() => G("br", null, null, -1)),
        Cm = sr(() => G("div", {class: "description"}, "鏈€妫掔殑鍏嶈垂浜岀骇鍩熷悕锛�", -1)),
        $m = sr(() => G("br", null, null, -1)), Sm = {
            __name: "HomeView", setup(e) {
                return (t, n) => (w(), T("div", ym, [bm, _m, wm, Cm, fe(gm), $m]))
            }
        }, xm = Il(Sm, [["__scopeId", "data-v-624ee7de"]]),
        km = um({history: xv("/"), routes: [{path: "/", name: "home", component: xm}]});
    var Tm = typeof global == "object" && global && global.Object === Object && global;
    const Fc = Tm;
    var Em = typeof self == "object" && self && self.Object === Object && self,
        Pm = Fc || Em || Function("return this")();
    const Kt = Pm;
    var Om = Kt.Symbol;
    const zt = Om;
    var Hc = Object.prototype, Am = Hc.hasOwnProperty, Im = Hc.toString, Po = zt ? zt.toStringTag : void 0;

    function Mm(e) {
        var t = Am.call(e, Po), n = e[Po];
        try {
            e[Po] = void 0;
            var o = !0
        } catch {
        }
        var r = Im.call(e);
        return o && (t ? e[Po] = n : delete e[Po]), r
    }

    var Bm = Object.prototype, Lm = Bm.toString;

    function Rm(e) {
        return Lm.call(e)
    }

    var Nm = "[object Null]", Vm = "[object Undefined]", ci = zt ? zt.toStringTag : void 0;

    function Gn(e) {
        return e == null ? e === void 0 ? Vm : Nm : ci && ci in Object(e) ? Mm(e) : Rm(e)
    }

    function Kn(e) {
        return e != null && typeof e == "object"
    }

    var Dm = "[object Symbol]";

    function ss(e) {
        return typeof e == "symbol" || Kn(e) && Gn(e) == Dm
    }

    function Fm(e, t) {
        for (var n = -1, o = e == null ? 0 : e.length, r = Array(o); ++n < o;) r[n] = t(e[n], n, e);
        return r
    }

    var Hm = Array.isArray;
    const Nt = Hm;
    var jm = 1 / 0, fi = zt ? zt.prototype : void 0, di = fi ? fi.toString : void 0;

    function jc(e) {
        if (typeof e == "string") return e;
        if (Nt(e)) return Fm(e, jc) + "";
        if (ss(e)) return di ? di.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -jm ? "-0" : t
    }

    var zm = /\s/;

    function Km(e) {
        for (var t = e.length; t-- && zm.test(e.charAt(t));) ;
        return t
    }

    var Um = /^\s+/;

    function Wm(e) {
        return e && e.slice(0, Km(e) + 1).replace(Um, "")
    }

    function en(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function")
    }

    var pi = 0 / 0, qm = /^[-+]0x[0-9a-f]+$/i, Ym = /^0b[01]+$/i, Gm = /^0o[0-7]+$/i, Xm = parseInt;

    function hi(e) {
        if (typeof e == "number") return e;
        if (ss(e)) return pi;
        if (en(e)) {
            var t = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = en(t) ? t + "" : t
        }
        if (typeof e != "string") return e === 0 ? e : +e;
        e = Wm(e);
        var n = Ym.test(e);
        return n || Gm.test(e) ? Xm(e.slice(2), n ? 2 : 8) : qm.test(e) ? pi : +e
    }

    function Zm(e) {
        return e
    }

    var Jm = "[object AsyncFunction]", Qm = "[object Function]", eg = "[object GeneratorFunction]",
        tg = "[object Proxy]";

    function zc(e) {
        if (!en(e)) return !1;
        var t = Gn(e);
        return t == Qm || t == eg || t == Jm || t == tg
    }

    var ng = Kt["__core-js_shared__"];
    const Cs = ng;
    var vi = function () {
        var e = /[^.]+$/.exec(Cs && Cs.keys && Cs.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : ""
    }();

    function og(e) {
        return !!vi && vi in e
    }

    var rg = Function.prototype, sg = rg.toString;

    function Xn(e) {
        if (e != null) {
            try {
                return sg.call(e)
            } catch {
            }
            try {
                return e + ""
            } catch {
            }
        }
        return ""
    }

    var lg = /[\\^$.*+?()[\]{}|]/g, ag = /^\[object .+?Constructor\]$/, ig = Function.prototype, ug = Object.prototype,
        cg = ig.toString, fg = ug.hasOwnProperty,
        dg = RegExp("^" + cg.call(fg).replace(lg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

    function pg(e) {
        if (!en(e) || og(e)) return !1;
        var t = zc(e) ? dg : ag;
        return t.test(Xn(e))
    }

    function hg(e, t) {
        return e == null ? void 0 : e[t]
    }

    function Zn(e, t) {
        var n = hg(e, t);
        return pg(n) ? n : void 0
    }

    var vg = Zn(Kt, "WeakMap");
    const Gs = vg;

    function mg(e, t, n) {
        switch (n.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, n[0]);
            case 2:
                return e.call(t, n[0], n[1]);
            case 3:
                return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }

    var gg = 800, yg = 16, bg = Date.now;

    function _g(e) {
        var t = 0, n = 0;
        return function () {
            var o = bg(), r = yg - (o - n);
            if (n = o, r > 0) {
                if (++t >= gg) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }

    function wg(e) {
        return function () {
            return e
        }
    }

    var Cg = function () {
        try {
            var e = Zn(Object, "defineProperty");
            return e({}, "", {}), e
        } catch {
        }
    }();
    const Vr = Cg;
    var $g = Vr ? function (e, t) {
        return Vr(e, "toString", {configurable: !0, enumerable: !1, value: wg(t), writable: !0})
    } : Zm;
    const Sg = $g;
    var xg = _g(Sg);
    const kg = xg;
    var Tg = 9007199254740991, Eg = /^(?:0|[1-9]\d*)$/;

    function Ll(e, t) {
        var n = typeof e;
        return t = t ?? Tg, !!t && (n == "number" || n != "symbol" && Eg.test(e)) && e > -1 && e % 1 == 0 && e < t
    }

    function Pg(e, t, n) {
        t == "__proto__" && Vr ? Vr(e, t, {configurable: !0, enumerable: !0, value: n, writable: !0}) : e[t] = n
    }

    function Rl(e, t) {
        return e === t || e !== e && t !== t
    }

    var Og = Object.prototype, Ag = Og.hasOwnProperty;

    function Ig(e, t, n) {
        var o = e[t];
        (!(Ag.call(e, t) && Rl(o, n)) || n === void 0 && !(t in e)) && Pg(e, t, n)
    }

    var mi = Math.max;

    function Mg(e, t, n) {
        return t = mi(t === void 0 ? e.length - 1 : t, 0), function () {
            for (var o = arguments, r = -1, s = mi(o.length - t, 0), l = Array(s); ++r < s;) l[r] = o[t + r];
            r = -1;
            for (var a = Array(t + 1); ++r < t;) a[r] = o[r];
            return a[t] = n(l), mg(e, this, a)
        }
    }

    var Bg = 9007199254740991;

    function Nl(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Bg
    }

    function Lg(e) {
        return e != null && Nl(e.length) && !zc(e)
    }

    var Rg = Object.prototype;

    function Ng(e) {
        var t = e && e.constructor, n = typeof t == "function" && t.prototype || Rg;
        return e === n
    }

    function Vg(e, t) {
        for (var n = -1, o = Array(e); ++n < e;) o[n] = t(n);
        return o
    }

    var Dg = "[object Arguments]";

    function gi(e) {
        return Kn(e) && Gn(e) == Dg
    }

    var Kc = Object.prototype, Fg = Kc.hasOwnProperty, Hg = Kc.propertyIsEnumerable, jg = gi(function () {
        return arguments
    }()) ? gi : function (e) {
        return Kn(e) && Fg.call(e, "callee") && !Hg.call(e, "callee")
    };
    const Vl = jg;

    function zg() {
        return !1
    }

    var Uc = typeof Gt == "object" && Gt && !Gt.nodeType && Gt,
        yi = Uc && typeof Xt == "object" && Xt && !Xt.nodeType && Xt, Kg = yi && yi.exports === Uc,
        bi = Kg ? Kt.Buffer : void 0, Ug = bi ? bi.isBuffer : void 0, Wg = Ug || zg;
    const Xs = Wg;
    var qg = "[object Arguments]", Yg = "[object Array]", Gg = "[object Boolean]", Xg = "[object Date]",
        Zg = "[object Error]", Jg = "[object Function]", Qg = "[object Map]", ey = "[object Number]",
        ty = "[object Object]", ny = "[object RegExp]", oy = "[object Set]", ry = "[object String]",
        sy = "[object WeakMap]", ly = "[object ArrayBuffer]", ay = "[object DataView]", iy = "[object Float32Array]",
        uy = "[object Float64Array]", cy = "[object Int8Array]", fy = "[object Int16Array]", dy = "[object Int32Array]",
        py = "[object Uint8Array]", hy = "[object Uint8ClampedArray]", vy = "[object Uint16Array]",
        my = "[object Uint32Array]", Ge = {};
    Ge[iy] = Ge[uy] = Ge[cy] = Ge[fy] = Ge[dy] = Ge[py] = Ge[hy] = Ge[vy] = Ge[my] = !0;
    Ge[qg] = Ge[Yg] = Ge[ly] = Ge[Gg] = Ge[ay] = Ge[Xg] = Ge[Zg] = Ge[Jg] = Ge[Qg] = Ge[ey] = Ge[ty] = Ge[ny] = Ge[oy] = Ge[ry] = Ge[sy] = !1;

    function gy(e) {
        return Kn(e) && Nl(e.length) && !!Ge[Gn(e)]
    }

    function yy(e) {
        return function (t) {
            return e(t)
        }
    }

    var Wc = typeof Gt == "object" && Gt && !Gt.nodeType && Gt,
        Do = Wc && typeof Xt == "object" && Xt && !Xt.nodeType && Xt, by = Do && Do.exports === Wc,
        $s = by && Fc.process, _y = function () {
            try {
                var e = Do && Do.require && Do.require("util").types;
                return e || $s && $s.binding && $s.binding("util")
            } catch {
            }
        }();
    const _i = _y;
    var wi = _i && _i.isTypedArray, wy = wi ? yy(wi) : gy;
    const qc = wy;
    var Cy = Object.prototype, $y = Cy.hasOwnProperty;

    function Sy(e, t) {
        var n = Nt(e), o = !n && Vl(e), r = !n && !o && Xs(e), s = !n && !o && !r && qc(e), l = n || o || r || s,
            a = l ? Vg(e.length, String) : [], u = a.length;
        for (var c in e) (t || $y.call(e, c)) && !(l && (c == "length" || r && (c == "offset" || c == "parent") || s && (c == "buffer" || c == "byteLength" || c == "byteOffset") || Ll(c, u))) && a.push(c);
        return a
    }

    function xy(e, t) {
        return function (n) {
            return e(t(n))
        }
    }

    var ky = xy(Object.keys, Object);
    const Ty = ky;
    var Ey = Object.prototype, Py = Ey.hasOwnProperty;

    function Oy(e) {
        if (!Ng(e)) return Ty(e);
        var t = [];
        for (var n in Object(e)) Py.call(e, n) && n != "constructor" && t.push(n);
        return t
    }

    function Ay(e) {
        return Lg(e) ? Sy(e) : Oy(e)
    }

    var Iy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, My = /^\w*$/;

    function By(e, t) {
        if (Nt(e)) return !1;
        var n = typeof e;
        return n == "number" || n == "symbol" || n == "boolean" || e == null || ss(e) ? !0 : My.test(e) || !Iy.test(e) || t != null && e in Object(t)
    }

    var Ly = Zn(Object, "create");
    const Xo = Ly;

    function Ry() {
        this.__data__ = Xo ? Xo(null) : {}, this.size = 0
    }

    function Ny(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }

    var Vy = "__lodash_hash_undefined__", Dy = Object.prototype, Fy = Dy.hasOwnProperty;

    function Hy(e) {
        var t = this.__data__;
        if (Xo) {
            var n = t[e];
            return n === Vy ? void 0 : n
        }
        return Fy.call(t, e) ? t[e] : void 0
    }

    var jy = Object.prototype, zy = jy.hasOwnProperty;

    function Ky(e) {
        var t = this.__data__;
        return Xo ? t[e] !== void 0 : zy.call(t, e)
    }

    var Uy = "__lodash_hash_undefined__";

    function Wy(e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = Xo && t === void 0 ? Uy : t, this
    }

    function Un(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var o = e[t];
            this.set(o[0], o[1])
        }
    }

    Un.prototype.clear = Ry;
    Un.prototype.delete = Ny;
    Un.prototype.get = Hy;
    Un.prototype.has = Ky;
    Un.prototype.set = Wy;

    function qy() {
        this.__data__ = [], this.size = 0
    }

    function ls(e, t) {
        for (var n = e.length; n--;) if (Rl(e[n][0], t)) return n;
        return -1
    }

    var Yy = Array.prototype, Gy = Yy.splice;

    function Xy(e) {
        var t = this.__data__, n = ls(t, e);
        if (n < 0) return !1;
        var o = t.length - 1;
        return n == o ? t.pop() : Gy.call(t, n, 1), --this.size, !0
    }

    function Zy(e) {
        var t = this.__data__, n = ls(t, e);
        return n < 0 ? void 0 : t[n][1]
    }

    function Jy(e) {
        return ls(this.__data__, e) > -1
    }

    function Qy(e, t) {
        var n = this.__data__, o = ls(n, e);
        return o < 0 ? (++this.size, n.push([e, t])) : n[o][1] = t, this
    }

    function nn(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var o = e[t];
            this.set(o[0], o[1])
        }
    }

    nn.prototype.clear = qy;
    nn.prototype.delete = Xy;
    nn.prototype.get = Zy;
    nn.prototype.has = Jy;
    nn.prototype.set = Qy;
    var eb = Zn(Kt, "Map");
    const Zo = eb;

    function tb() {
        this.size = 0, this.__data__ = {hash: new Un, map: new (Zo || nn), string: new Un}
    }

    function nb(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
    }

    function as(e, t) {
        var n = e.__data__;
        return nb(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map
    }

    function ob(e) {
        var t = as(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }

    function rb(e) {
        return as(this, e).get(e)
    }

    function sb(e) {
        return as(this, e).has(e)
    }

    function lb(e, t) {
        var n = as(this, e), o = n.size;
        return n.set(e, t), this.size += n.size == o ? 0 : 1, this
    }

    function on(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var o = e[t];
            this.set(o[0], o[1])
        }
    }

    on.prototype.clear = tb;
    on.prototype.delete = ob;
    on.prototype.get = rb;
    on.prototype.has = sb;
    on.prototype.set = lb;
    var ab = "Expected a function";

    function Dl(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(ab);
        var n = function () {
            var o = arguments, r = t ? t.apply(this, o) : o[0], s = n.cache;
            if (s.has(r)) return s.get(r);
            var l = e.apply(this, o);
            return n.cache = s.set(r, l) || s, l
        };
        return n.cache = new (Dl.Cache || on), n
    }

    Dl.Cache = on;
    var ib = 500;

    function ub(e) {
        var t = Dl(e, function (o) {
            return n.size === ib && n.clear(), o
        }), n = t.cache;
        return t
    }

    var cb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        fb = /\\(\\)?/g, db = ub(function (e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""), e.replace(cb, function (n, o, r, s) {
                t.push(r ? s.replace(fb, "$1") : o || n)
            }), t
        });
    const pb = db;

    function hb(e) {
        return e == null ? "" : jc(e)
    }

    function is(e, t) {
        return Nt(e) ? e : By(e, t) ? [e] : pb(hb(e))
    }

    var vb = 1 / 0;

    function Fl(e) {
        if (typeof e == "string" || ss(e)) return e;
        var t = e + "";
        return t == "0" && 1 / e == -vb ? "-0" : t
    }

    function Yc(e, t) {
        t = is(t, e);
        for (var n = 0, o = t.length; e != null && n < o;) e = e[Fl(t[n++])];
        return n && n == o ? e : void 0
    }

    function mb(e, t, n) {
        var o = e == null ? void 0 : Yc(e, t);
        return o === void 0 ? n : o
    }

    function Gc(e, t) {
        for (var n = -1, o = t.length, r = e.length; ++n < o;) e[r + n] = t[n];
        return e
    }

    var Ci = zt ? zt.isConcatSpreadable : void 0;

    function gb(e) {
        return Nt(e) || Vl(e) || !!(Ci && e && e[Ci])
    }

    function Xc(e, t, n, o, r) {
        var s = -1, l = e.length;
        for (n || (n = gb), r || (r = []); ++s < l;) {
            var a = e[s];
            t > 0 && n(a) ? t > 1 ? Xc(a, t - 1, n, o, r) : Gc(r, a) : o || (r[r.length] = a)
        }
        return r
    }

    function yb(e) {
        var t = e == null ? 0 : e.length;
        return t ? Xc(e, 1) : []
    }

    function bb(e) {
        return kg(Mg(e, void 0, yb), e + "")
    }

    function _b() {
        this.__data__ = new nn, this.size = 0
    }

    function wb(e) {
        var t = this.__data__, n = t.delete(e);
        return this.size = t.size, n
    }

    function Cb(e) {
        return this.__data__.get(e)
    }

    function $b(e) {
        return this.__data__.has(e)
    }

    var Sb = 200;

    function xb(e, t) {
        var n = this.__data__;
        if (n instanceof nn) {
            var o = n.__data__;
            if (!Zo || o.length < Sb - 1) return o.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new on(o)
        }
        return n.set(e, t), this.size = n.size, this
    }

    function yn(e) {
        var t = this.__data__ = new nn(e);
        this.size = t.size
    }

    yn.prototype.clear = _b;
    yn.prototype.delete = wb;
    yn.prototype.get = Cb;
    yn.prototype.has = $b;
    yn.prototype.set = xb;

    function kb(e, t) {
        for (var n = -1, o = e == null ? 0 : e.length, r = 0, s = []; ++n < o;) {
            var l = e[n];
            t(l, n, e) && (s[r++] = l)
        }
        return s
    }

    function Tb() {
        return []
    }

    var Eb = Object.prototype, Pb = Eb.propertyIsEnumerable, $i = Object.getOwnPropertySymbols, Ob = $i ? function (e) {
        return e == null ? [] : (e = Object(e), kb($i(e), function (t) {
            return Pb.call(e, t)
        }))
    } : Tb;
    const Ab = Ob;

    function Ib(e, t, n) {
        var o = t(e);
        return Nt(e) ? o : Gc(o, n(e))
    }

    function Si(e) {
        return Ib(e, Ay, Ab)
    }

    var Mb = Zn(Kt, "DataView");
    const Zs = Mb;
    var Bb = Zn(Kt, "Promise");
    const Js = Bb;
    var Lb = Zn(Kt, "Set");
    const Qs = Lb;
    var xi = "[object Map]", Rb = "[object Object]", ki = "[object Promise]", Ti = "[object Set]",
        Ei = "[object WeakMap]", Pi = "[object DataView]", Nb = Xn(Zs), Vb = Xn(Zo), Db = Xn(Js), Fb = Xn(Qs),
        Hb = Xn(Gs), In = Gn;
    (Zs && In(new Zs(new ArrayBuffer(1))) != Pi || Zo && In(new Zo) != xi || Js && In(Js.resolve()) != ki || Qs && In(new Qs) != Ti || Gs && In(new Gs) != Ei) && (In = function (e) {
        var t = Gn(e), n = t == Rb ? e.constructor : void 0, o = n ? Xn(n) : "";
        if (o) switch (o) {
            case Nb:
                return Pi;
            case Vb:
                return xi;
            case Db:
                return ki;
            case Fb:
                return Ti;
            case Hb:
                return Ei
        }
        return t
    });
    const Oi = In;
    var jb = Kt.Uint8Array;
    const Ai = jb;
    var zb = "__lodash_hash_undefined__";

    function Kb(e) {
        return this.__data__.set(e, zb), this
    }

    function Ub(e) {
        return this.__data__.has(e)
    }

    function Dr(e) {
        var t = -1, n = e == null ? 0 : e.length;
        for (this.__data__ = new on; ++t < n;) this.add(e[t])
    }

    Dr.prototype.add = Dr.prototype.push = Kb;
    Dr.prototype.has = Ub;

    function Wb(e, t) {
        for (var n = -1, o = e == null ? 0 : e.length; ++n < o;) if (t(e[n], n, e)) return !0;
        return !1
    }

    function qb(e, t) {
        return e.has(t)
    }

    var Yb = 1, Gb = 2;

    function Zc(e, t, n, o, r, s) {
        var l = n & Yb, a = e.length, u = t.length;
        if (a != u && !(l && u > a)) return !1;
        var c = s.get(e), f = s.get(t);
        if (c && f) return c == t && f == e;
        var d = -1, p = !0, h = n & Gb ? new Dr : void 0;
        for (s.set(e, t), s.set(t, e); ++d < a;) {
            var m = e[d], v = t[d];
            if (o) var S = l ? o(v, m, d, t, e, s) : o(m, v, d, e, t, s);
            if (S !== void 0) {
                if (S) continue;
                p = !1;
                break
            }
            if (h) {
                if (!Wb(t, function (P, C) {
                    if (!qb(h, C) && (m === P || r(m, P, n, o, s))) return h.push(C)
                })) {
                    p = !1;
                    break
                }
            } else if (!(m === v || r(m, v, n, o, s))) {
                p = !1;
                break
            }
        }
        return s.delete(e), s.delete(t), p
    }

    function Xb(e) {
        var t = -1, n = Array(e.size);
        return e.forEach(function (o, r) {
            n[++t] = [r, o]
        }), n
    }

    function Zb(e) {
        var t = -1, n = Array(e.size);
        return e.forEach(function (o) {
            n[++t] = o
        }), n
    }

    var Jb = 1, Qb = 2, e0 = "[object Boolean]", t0 = "[object Date]", n0 = "[object Error]", o0 = "[object Map]",
        r0 = "[object Number]", s0 = "[object RegExp]", l0 = "[object Set]", a0 = "[object String]",
        i0 = "[object Symbol]", u0 = "[object ArrayBuffer]", c0 = "[object DataView]", Ii = zt ? zt.prototype : void 0,
        Ss = Ii ? Ii.valueOf : void 0;

    function f0(e, t, n, o, r, s, l) {
        switch (n) {
            case c0:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                e = e.buffer, t = t.buffer;
            case u0:
                return !(e.byteLength != t.byteLength || !s(new Ai(e), new Ai(t)));
            case e0:
            case t0:
            case r0:
                return Rl(+e, +t);
            case n0:
                return e.name == t.name && e.message == t.message;
            case s0:
            case a0:
                return e == t + "";
            case o0:
                var a = Xb;
            case l0:
                var u = o & Jb;
                if (a || (a = Zb), e.size != t.size && !u) return !1;
                var c = l.get(e);
                if (c) return c == t;
                o |= Qb, l.set(e, t);
                var f = Zc(a(e), a(t), o, r, s, l);
                return l.delete(e), f;
            case i0:
                if (Ss) return Ss.call(e) == Ss.call(t)
        }
        return !1
    }

    var d0 = 1, p0 = Object.prototype, h0 = p0.hasOwnProperty;

    function v0(e, t, n, o, r, s) {
        var l = n & d0, a = Si(e), u = a.length, c = Si(t), f = c.length;
        if (u != f && !l) return !1;
        for (var d = u; d--;) {
            var p = a[d];
            if (!(l ? p in t : h0.call(t, p))) return !1
        }
        var h = s.get(e), m = s.get(t);
        if (h && m) return h == t && m == e;
        var v = !0;
        s.set(e, t), s.set(t, e);
        for (var S = l; ++d < u;) {
            p = a[d];
            var P = e[p], C = t[p];
            if (o) var H = l ? o(C, P, p, t, e, s) : o(P, C, p, e, t, s);
            if (!(H === void 0 ? P === C || r(P, C, n, o, s) : H)) {
                v = !1;
                break
            }
            S || (S = p == "constructor")
        }
        if (v && !S) {
            var D = e.constructor, U = t.constructor;
            D != U && "constructor" in e && "constructor" in t && !(typeof D == "function" && D instanceof D && typeof U == "function" && U instanceof U) && (v = !1)
        }
        return s.delete(e), s.delete(t), v
    }

    var m0 = 1, Mi = "[object Arguments]", Bi = "[object Array]", gr = "[object Object]", g0 = Object.prototype,
        Li = g0.hasOwnProperty;

    function y0(e, t, n, o, r, s) {
        var l = Nt(e), a = Nt(t), u = l ? Bi : Oi(e), c = a ? Bi : Oi(t);
        u = u == Mi ? gr : u, c = c == Mi ? gr : c;
        var f = u == gr, d = c == gr, p = u == c;
        if (p && Xs(e)) {
            if (!Xs(t)) return !1;
            l = !0, f = !1
        }
        if (p && !f) return s || (s = new yn), l || qc(e) ? Zc(e, t, n, o, r, s) : f0(e, t, u, n, o, r, s);
        if (!(n & m0)) {
            var h = f && Li.call(e, "__wrapped__"), m = d && Li.call(t, "__wrapped__");
            if (h || m) {
                var v = h ? e.value() : e, S = m ? t.value() : t;
                return s || (s = new yn), r(v, S, n, o, s)
            }
        }
        return p ? (s || (s = new yn), v0(e, t, n, o, r, s)) : !1
    }

    function Jc(e, t, n, o, r) {
        return e === t ? !0 : e == null || t == null || !Kn(e) && !Kn(t) ? e !== e && t !== t : y0(e, t, n, o, Jc, r)
    }

    function b0(e, t) {
        return e != null && t in Object(e)
    }

    function _0(e, t, n) {
        t = is(t, e);
        for (var o = -1, r = t.length, s = !1; ++o < r;) {
            var l = Fl(t[o]);
            if (!(s = e != null && n(e, l))) break;
            e = e[l]
        }
        return s || ++o != r ? s : (r = e == null ? 0 : e.length, !!r && Nl(r) && Ll(l, r) && (Nt(e) || Vl(e)))
    }

    function w0(e, t) {
        return e != null && _0(e, t, b0)
    }

    var C0 = function () {
        return Kt.Date.now()
    };
    const xs = C0;
    var $0 = "Expected a function", S0 = Math.max, x0 = Math.min;

    function el(e, t, n) {
        var o, r, s, l, a, u, c = 0, f = !1, d = !1, p = !0;
        if (typeof e != "function") throw new TypeError($0);
        t = hi(t) || 0, en(n) && (f = !!n.leading, d = "maxWait" in n, s = d ? S0(hi(n.maxWait) || 0, t) : s, p = "trailing" in n ? !!n.trailing : p);

        function h(R) {
            var A = o, k = r;
            return o = r = void 0, c = R, l = e.apply(k, A), l
        }

        function m(R) {
            return c = R, a = setTimeout(P, t), f ? h(R) : l
        }

        function v(R) {
            var A = R - u, k = R - c, _ = t - A;
            return d ? x0(_, s - k) : _
        }

        function S(R) {
            var A = R - u, k = R - c;
            return u === void 0 || A >= t || A < 0 || d && k >= s
        }

        function P() {
            var R = xs();
            if (S(R)) return C(R);
            a = setTimeout(P, v(R))
        }

        function C(R) {
            return a = void 0, p && o ? h(R) : (o = r = void 0, l)
        }

        function H() {
            a !== void 0 && clearTimeout(a), c = 0, o = u = r = a = void 0
        }

        function D() {
            return a === void 0 ? l : C(xs())
        }

        function U() {
            var R = xs(), A = S(R);
            if (o = arguments, r = this, u = R, A) {
                if (a === void 0) return m(u);
                if (d) return clearTimeout(a), a = setTimeout(P, t), h(u)
            }
            return a === void 0 && (a = setTimeout(P, t)), l
        }

        return U.cancel = H, U.flush = D, U
    }

    function k0(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : void 0
    }

    function T0(e) {
        for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n;) {
            var r = e[t];
            o[r[0]] = r[1]
        }
        return o
    }

    var E0 = "[object Boolean]";

    function Ri(e) {
        return e === !0 || e === !1 || Kn(e) && Gn(e) == E0
    }

    function At(e, t) {
        return Jc(e, t)
    }

    function Cn(e) {
        return e == null
    }

    function P0(e, t, n, o) {
        if (!en(e)) return e;
        t = is(t, e);
        for (var r = -1, s = t.length, l = s - 1, a = e; a != null && ++r < s;) {
            var u = Fl(t[r]), c = n;
            if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
            if (r != l) {
                var f = a[u];
                c = o ? o(f, u, a) : void 0, c === void 0 && (c = en(f) ? f : Ll(t[r + 1]) ? [] : {})
            }
            Ig(a, u, c), a = a[u]
        }
        return e
    }

    function O0(e, t, n) {
        for (var o = -1, r = t.length, s = {}; ++o < r;) {
            var l = t[o], a = Yc(e, l);
            n(a, l) && P0(s, is(l, e), a)
        }
        return s
    }

    function A0(e, t) {
        return O0(e, t, function (n, o) {
            return w0(e, o)
        })
    }

    var I0 = bb(function (e, t) {
        return e == null ? {} : A0(e, t)
    });
    const M0 = I0;
    var B0 = "Expected a function";

    function Ni(e, t, n) {
        var o = !0, r = !0;
        if (typeof e != "function") throw new TypeError(B0);
        return en(n) && (o = "leading" in n ? !!n.leading : o, r = "trailing" in n ? !!n.trailing : r), el(e, t, {
            leading: o,
            maxWait: t,
            trailing: r
        })
    }

    const pn = (e, t, {checkForDefaultPrevented: n = !0} = {}) => r => {
        const s = e == null ? void 0 : e(r);
        if (n === !1 || !s) return t == null ? void 0 : t(r)
    };
    var Vi;
    const lt = typeof window < "u", at = e => typeof e == "boolean", Pe = e => typeof e == "number",
        L0 = e => typeof e == "string", Qc = () => {
        },
        R0 = lt && ((Vi = window == null ? void 0 : window.navigator) == null ? void 0 : Vi.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);

    function Hl(e) {
        return typeof e == "function" ? e() : i(e)
    }

    function N0(e) {
        return e
    }

    function us(e) {
        return Wr() ? (qr(e), !0) : !1
    }

    function V0(e, t = !0) {
        bt() ? ht(e) : t ? e() : De(e)
    }

    function D0(e, t, n = {}) {
        const {immediate: o = !0} = n, r = ee(!1);
        let s = null;

        function l() {
            s && (clearTimeout(s), s = null)
        }

        function a() {
            r.value = !1, l()
        }

        function u(...c) {
            l(), r.value = !0, s = setTimeout(() => {
                r.value = !1, s = null, e(...c)
            }, Hl(t))
        }

        return o && (r.value = !0, lt && u()), us(a), {isPending: nr(r), start: u, stop: a}
    }

    function jt(e) {
        var t;
        const n = Hl(e);
        return (t = n == null ? void 0 : n.$el) != null ? t : n
    }

    const jl = lt ? window : void 0;

    function Zt(...e) {
        let t, n, o, r;
        if (L0(e[0]) || Array.isArray(e[0]) ? ([n, o, r] = e, t = jl) : [t, n, o, r] = e, !t) return Qc;
        Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
        const s = [], l = () => {
                s.forEach(f => f()), s.length = 0
            }, a = (f, d, p, h) => (f.addEventListener(d, p, h), () => f.removeEventListener(d, p, h)),
            u = $e(() => [jt(t), Hl(r)], ([f, d]) => {
                l(), f && s.push(...n.flatMap(p => o.map(h => a(f, p, h, d))))
            }, {immediate: !0, flush: "post"}), c = () => {
                u(), l()
            };
        return us(c), c
    }

    let Di = !1;

    function F0(e, t, n = {}) {
        const {window: o = jl, ignore: r = [], capture: s = !0, detectIframe: l = !1} = n;
        if (!o) return;
        R0 && !Di && (Di = !0, Array.from(o.document.body.children).forEach(p => p.addEventListener("click", Qc)));
        let a = !0;
        const u = p => r.some(h => {
            if (typeof h == "string") return Array.from(o.document.querySelectorAll(h)).some(m => m === p.target || p.composedPath().includes(m));
            {
                const m = jt(h);
                return m && (p.target === m || p.composedPath().includes(m))
            }
        }), f = [Zt(o, "click", p => {
            const h = jt(e);
            if (!(!h || h === p.target || p.composedPath().includes(h))) {
                if (p.detail === 0 && (a = !u(p)), !a) {
                    a = !0;
                    return
                }
                t(p)
            }
        }, {passive: !0, capture: s}), Zt(o, "pointerdown", p => {
            const h = jt(e);
            h && (a = !p.composedPath().includes(h) && !u(p))
        }, {passive: !0}), l && Zt(o, "blur", p => {
            var h;
            const m = jt(e);
            ((h = o.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(m != null && m.contains(o.document.activeElement)) && t(p)
        })].filter(Boolean);
        return () => f.forEach(p => p())
    }

    function H0(e, t = !1) {
        const n = ee(), o = () => n.value = !!e();
        return o(), V0(o, t), n
    }

    const Fi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {},
        Hi = "__vueuse_ssr_handlers__";
    Fi[Hi] = Fi[Hi] || {};
    var ji = Object.getOwnPropertySymbols, j0 = Object.prototype.hasOwnProperty,
        z0 = Object.prototype.propertyIsEnumerable, K0 = (e, t) => {
            var n = {};
            for (var o in e) j0.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
            if (e != null && ji) for (var o of ji(e)) t.indexOf(o) < 0 && z0.call(e, o) && (n[o] = e[o]);
            return n
        };

    function ef(e, t, n = {}) {
        const o = n, {window: r = jl} = o, s = K0(o, ["window"]);
        let l;
        const a = H0(() => r && "ResizeObserver" in r), u = () => {
            l && (l.disconnect(), l = void 0)
        }, c = $e(() => jt(e), d => {
            u(), a.value && r && d && (l = new ResizeObserver(t), l.observe(d, s))
        }, {immediate: !0, flush: "post"}), f = () => {
            u(), c()
        };
        return us(f), {isSupported: a, stop: f}
    }

    var zi;
    (function (e) {
        e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE"
    })(zi || (zi = {}));
    var U0 = Object.defineProperty, Ki = Object.getOwnPropertySymbols, W0 = Object.prototype.hasOwnProperty,
        q0 = Object.prototype.propertyIsEnumerable,
        Ui = (e, t, n) => t in e ? U0(e, t, {enumerable: !0, configurable: !0, writable: !0, value: n}) : e[t] = n,
        Y0 = (e, t) => {
            for (var n in t || (t = {})) W0.call(t, n) && Ui(e, n, t[n]);
            if (Ki) for (var n of Ki(t)) q0.call(t, n) && Ui(e, n, t[n]);
            return e
        };
    const G0 = {
        easeInSine: [.12, 0, .39, 0],
        easeOutSine: [.61, 1, .88, 1],
        easeInOutSine: [.37, 0, .63, 1],
        easeInQuad: [.11, 0, .5, 0],
        easeOutQuad: [.5, 1, .89, 1],
        easeInOutQuad: [.45, 0, .55, 1],
        easeInCubic: [.32, 0, .67, 0],
        easeOutCubic: [.33, 1, .68, 1],
        easeInOutCubic: [.65, 0, .35, 1],
        easeInQuart: [.5, 0, .75, 0],
        easeOutQuart: [.25, 1, .5, 1],
        easeInOutQuart: [.76, 0, .24, 1],
        easeInQuint: [.64, 0, .78, 0],
        easeOutQuint: [.22, 1, .36, 1],
        easeInOutQuint: [.83, 0, .17, 1],
        easeInExpo: [.7, 0, .84, 0],
        easeOutExpo: [.16, 1, .3, 1],
        easeInOutExpo: [.87, 0, .13, 1],
        easeInCirc: [.55, 0, 1, .45],
        easeOutCirc: [0, .55, .45, 1],
        easeInOutCirc: [.85, 0, .15, 1],
        easeInBack: [.36, 0, .66, -.56],
        easeOutBack: [.34, 1.56, .64, 1],
        easeInOutBack: [.68, -.6, .32, 1.6]
    };
    Y0({linear: N0}, G0);
    const Wi = e => {
            let t = 0, n = e;
            for (; n;) t += n.offsetTop, n = n.offsetParent;
            return t
        }, X0 = (e, t) => Math.abs(Wi(e) - Wi(t)), Fr = e => e === void 0,
        tl = e => typeof Element > "u" ? !1 : e instanceof Element, Nn = e => Se(e) ? !Number.isNaN(Number(e)) : !1,
        Z0 = (e = "") => e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d"), nl = e => Object.keys(e),
        J0 = e => Object.entries(e);

    class Q0 extends Error {
        constructor(t) {
            super(t), this.name = "VuesaxAlphaError"
        }
    }

    function Sn(e, t) {
        throw new Q0(`[${e}] ${t}`)
    }

    const tf = (e = "") => e.split(" ").filter(t => !!t.trim()), Hr = (e, t) => {
        if (!e || !t) return !1;
        if (t.includes(" ")) throw new Error("className should not contain space.");
        return e.classList.contains(t)
    }, e_ = (e, t) => {
        !e || !t.trim() || e.classList.add(...tf(t))
    }, t_ = (e, t) => {
        !e || !t.trim() || e.classList.remove(...tf(t))
    }, nf = (e, t) => {
        var n;
        if (!lt || !e || !t) return "";
        let o = Ot(t);
        o === "float" && (o = "cssFloat");
        try {
            const r = e.style[o];
            if (r) return r;
            const s = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
            return s ? s[o] : ""
        } catch {
            return e.style[o]
        }
    }, zl = (e, t, n) => {
        if (!(!e || !t)) if (we(t)) J0(t).forEach(([o, r]) => zl(e, o, r)); else {
            const o = Ot(t);
            e.style[o] = n
        }
    }, of = (e, t) => {
        !e || !t || (we(t) ? nl(t).forEach(n => of(e, n)) : zl(e, t, ""))
    };

    function ol(e, t = "px") {
        if (!e) return "";
        if (Pe(e) || Nn(e)) return `${e}${t}`;
        if (Se(e)) return e
    }

    const n_ = (e, t) => {
        if (!lt) return !1;
        const n = {undefined: "overflow", true: "overflow-y", false: "overflow-x"}[String(t)], o = nf(e, n);
        return ["scroll", "auto", "overlay"].some(r => o.includes(r))
    }, o_ = (e, t) => {
        if (!lt) return;
        let n = e;
        for (; n;) {
            if ([window, document, document.documentElement].includes(n)) return window;
            if (n_(n, t)) return n;
            n = n.parentNode
        }
        return n
    };
    let yr;
    const r_ = e => {
        var t;
        if (!lt) return 0;
        if (yr !== void 0) return yr;
        const n = document.createElement("div");
        n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
        const o = n.offsetWidth;
        n.style.overflow = "scroll";
        const r = document.createElement("div");
        r.style.width = "100%", n.appendChild(r);
        const s = r.offsetWidth;
        return (t = n.parentNode) == null || t.removeChild(n), yr = o - s, yr
    };

    function s_(e, t) {
        if (!lt) return;
        if (!t) {
            e.scrollTop = 0;
            return
        }
        const n = [];
        let o = t.offsetParent;
        for (; o !== null && e !== o && e.contains(o);) n.push(o), o = o.offsetParent;
        const r = t.offsetTop + n.reduce((u, c) => u + c.offsetTop, 0), s = r + t.offsetHeight, l = e.scrollTop,
            a = l + e.clientHeight;
        r < l ? e.scrollTop = r : s > a && (e.scrollTop = s - e.clientHeight)
    }

    const rf = "__vsPropKey", he = e => e, l_ = e => we(e) && !!e[rf], lr = (e, t) => {
            if (!we(e) || l_(e)) return e;
            const {values: n, required: o, default: r, type: s, validator: l} = e, u = {
                type: s, required: !!o, validator: n || l ? c => {
                    let f = !1, d = [];
                    if (n && (d = Array.from(n), Le(e, "default") && d.push(r), f || (f = d.includes(c))), l && (f || (f = l(c))), !f && d.length > 0) {
                        const p = [...new Set(d)].map(h => JSON.stringify(h)).join(", ");
                        np(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${p}], got value ${JSON.stringify(c)}.`)
                    }
                    return f
                } : void 0, [rf]: !0
            };
            return Le(e, "default") && (u.default = r), u
        }, be = e => T0(Object.entries(e).map(([t, n]) => [t, lr(n, t)])), Wn = he([String, Object, Function]),
        Ke = (e, t) => {
            if (e.install = n => {
                for (const o of [e, ...Object.values(t ?? {})]) n.component(o.name, o)
            }, t) for (const [n, o] of Object.entries(t)) e[n] = o;
            return e
        }, a_ = (e, t) => (e.install = n => {
            e._context = n._context, n.config.globalProperties[t] = e
        }, e), xt = e => (e.install = qe, e), ro = {
            tab: "Tab",
            enter: "Enter",
            space: "Space",
            left: "ArrowLeft",
            up: "ArrowUp",
            right: "ArrowRight",
            down: "ArrowDown",
            esc: "Escape",
            delete: "Delete",
            backspace: "Backspace",
            numpadEnter: "NumpadEnter",
            pageUp: "PageUp",
            pageDown: "PageDown",
            home: "Home",
            end: "End"
        }, sf = /^(rgb|rgba)/,
        lf = /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)$/,
        af = /^(#)/, i_ = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, u_ = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
        c_ = ["primary", "success", "danger", "warn", "dark", "text"],
        ar = [...c_, "light", "secondary", "facebook", "twitter", "youtube", "pinterest", "linkedin", "snapchat", "whatsapp", "tumblr", "reddit", "spotify", "amazon", "medium", "vimeo", "skype", "dribbble", "slack", "yahoo", "twitch", "discord", "telegram", "google-plus", "messenger"],
        f_ = 2e3, Re = "update:modelValue", Jo = "change", rl = "input", qi = Symbol("INSTALLED_KEY"),
        Yi = {height: 40, width: 40}, d_ = .8,
        p_ = ["top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end", "right", "right-start", "right-end"],
        uf = ["", "default", "small", "large"], Kl = e => ar.includes(e),
        cf = e => af.test(e) && [4, 7, 5, 9].includes(e.length), ff = e => sf.test(e), h_ = e => lf.test(e), df = e => {
            e = e.replace(i_, (n, o, r, s) => o + o + r + r + s + s);
            const t = u_.exec(e);
            return t ? {r: Number.parseInt(t[1], 16), g: Number.parseInt(t[2], 16), b: Number.parseInt(t[3], 16)} : null
        }, Er = (e, t, n, o, r = "vs") => {
            let s;
            if (t == "dark" && n && o && n.classList.add(`${r}-component-dark`), ff(t)) {
                const l = t.replace(/[rgba()]/g, "").split(",");
                s = `${l[0]},${l[1]},${l[2]}`, so(e, s, n), o && n.classList.add(`${r}-change-color`)
            } else if (cf(t)) {
                const l = df(t);
                s = `${l.r},${l.g},${l.b}`, so(e, s, n), o && n.classList.add(`${r}-change-color`)
            } else Kl(t) ? (s = window.getComputedStyle(document.body).getPropertyValue(`--${r}-${t}`), so(e, s, n), o && n.classList.add(`${r}-change-color`)) : h_(t) && (so(e, t, n), o && n.classList.add(`${r}-change-color`))
        }, v_ = e => !!(Kl(e) || cf(e) || ff(e)), tt = (e, t = "vs") => {
            const n = i(e);
            if (!n) return "";
            const o = sf.test(n), r = lf.test(n), s = af.test(n);
            let l = "";
            if (o) {
                const a = n.replace(/[rgba()]/g, "").split(",");
                l = `${a[0]}, ${a[1]}, ${a[2]}`
            } else if (s) {
                const a = df(n);
                l = `${a == null ? void 0 : a.r}, ${a == null ? void 0 : a.g}, ${a == null ? void 0 : a.b}`
            } else Kl(n) ? l = `var(--${t}-${n})` : r && (l = n);
            return l
        }, so = (e, t, n, o = "vs") => {
            !n && (document != null && document.documentElement) ? document.documentElement.style.setProperty(`--${o}-${e}`, t) : (n == null ? void 0 : n.nodeName) !== "#comment" && (n == null || n.style.setProperty(`--${o}-${e}`, t))
        }, m_ = e => ["", ...uf].includes(e), Ul = e => v_(e), g_ = e => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),
        Gi = (e, t, n) => {
            const o = e.currentTarget, r = o.getBoundingClientRect(), s = e.clientX - r.left, l = e.clientY - r.top;
            let a = .6;
            o.clientWidth > 150 && (a = 1.2);
            const u = document.createElement("div");
            u.className = "vs-ripple", t || Er("color", "#fff", u);
            const c = document.createElement("div");
            c.className = "vs-ripple--default", n && c.classList.add("vs-ripple--solid"), c.style.transition = `all ${a}s ease`, c.style.left = `${s}px`, c.style.top = `${l}px`, u.appendChild(c), o.appendChild(u), c.style.width = `${o.clientWidth * 2.5}px`, c.style.height = `${o.clientWidth * 2.5}px`, c.style.opacity = "1";
            let f = !1;
            setTimeout(() => {
                f = !0
            }, 300);

            function d(p) {
                c.style.transition = `all 0.${a * 600}s ease`, setTimeout(() => {
                    c.style.opacity = "0", setTimeout(() => {
                        o.removeChild(u)
                    }, a * 300)
                }, f ? 0 : a * 400), p.target.removeEventListener("mouseup", d), p.target.removeEventListener("mouseleave", d)
            }

            e.target.addEventListener("mouseup", d), e.target.addEventListener("mouseleave", d)
        }, y_ = e => {
            const t = e.currentTarget, n = t.getBoundingClientRect(), o = e.clientX - n.left, r = e.clientY - n.top;
            let s = .6;
            t.clientWidth > 150 && (s = 1.2);
            const l = document.createElement("div");
            l.className = "vs-ripple";
            const a = document.createElement("div");
            a.className = "vs-ripple--invert", a.style.left = `${o}px`, a.style.top = `${r}px`, a.style.width = `${t.clientWidth * 2.5}px`, a.style.height = `${t.clientWidth * 2.5}px`, a.style.opacity = "0", l.appendChild(a), t.appendChild(l), setTimeout(() => {
                a.style.width = "0px", a.style.height = "0px", a.style.opacity = "0.5"
            }, 1);
            let u = !1;
            setTimeout(() => {
                u = !0
            }, 300);

            function c(f) {
                a.style.transition = `all 0.${s * 600}s ease`, setTimeout(() => {
                    a.style.opacity = "0", setTimeout(() => {
                        t.removeChild(l)
                    }, s * 300)
                }, u ? 0 : s * 400), f.target.removeEventListener("mouseup", c), f.target.removeEventListener("mouseleave", c)
            }

            e.target.addEventListener("mouseup", c), e.target.addEventListener("mouseleave", c)
        }, b_ = e => {
            const t = e.currentTarget, n = t.getBoundingClientRect(), o = e.clientX - n.left, r = e.clientY - n.top;
            let s = .6;
            t.clientWidth > 150 && (s = 1.2);
            const l = document.createElement("div");
            l.className = "vs-ripple";
            const a = document.createElement("div"), u = document.createElement("div");
            a.className = "vs-ripple--cut-1", u.className = "vs-ripple--cut-2", a.style.left = u.style.left = `${o}px`, a.style.top = u.style.top = `${r}px`, a.style.width = u.style.width = `${t.clientWidth * 2.5}px`, a.style.height = u.style.height = `${t.clientWidth * 2.5}px`, a.style.opacity = u.style.opacity = "1", l.appendChild(a), l.appendChild(u), t.appendChild(l), setTimeout(() => {
                a.style.left = `-${t.clientWidth * 1.3}px`, a.style.opacity = "1", u.style.left = `${t.clientWidth * 1.3}px`, u.style.opacity = "1"
            }, 1);
            let c = !1;
            setTimeout(() => {
                c = !0
            }, 300);

            function f(d) {
                a.style.transition = `all 0.${s * 600}s ease`, setTimeout(() => {
                    a.style.opacity = "0", setTimeout(() => {
                        t.removeChild(l)
                    }, s * 300)
                }, c ? 0 : s * 400), d.target.removeEventListener("mouseup", f), d.target.removeEventListener("mouseleave", f)
            }

            e.target.addEventListener("mouseup", f), e.target.addEventListener("mouseleave", f)
        }, Ht = e => e, go = "vs", __ = "is-", On = (e, t, n, o, r) => {
            let s = `${e}-${t}`;
            return n && (s += `-${n}`), o && (s += `__${o}`), r && (s += `--${r}`), s
        }, pf = Symbol("namespaceContextKey"), w_ = e => {
            const t = e || Ae(pf, ee(go));
            return $(() => i(t) || go)
        }, me = (e, t) => {
            const n = w_(t);
            return {
                namespace: n,
                b: (v = "") => On(n.value, e, v, "", ""),
                e: v => v ? On(n.value, e, "", v, "") : "",
                m: v => v ? On(n.value, e, "", "", v) : "",
                be: (v, S) => v && S ? On(n.value, e, v, S, "") : "",
                em: (v, S) => v && S ? On(n.value, e, "", v, S) : "",
                bm: (v, S) => v && S ? On(n.value, e, v, "", S) : "",
                bem: (v, S, P) => v && S && P ? On(n.value, e, v, S, P) : "",
                is: (v, ...S) => {
                    const P = S.length >= 1 ? S[0] : !0;
                    return v && P ? `${__}${v}` : ""
                },
                cssVar: v => {
                    const S = {};
                    for (const P in v) v[P] && (S[`--${n.value}-${P}`] = v[P]);
                    return S
                },
                cssVarName: v => `--${n.value}-${v}`,
                cssVarBlock: v => {
                    const S = {};
                    for (const P in v) v[P] && (S[`--${n.value}-${e}-${P}`] = v[P]);
                    return S
                },
                cssVarBlockName: v => `--${n.value}-${e}-${v}`
            }
        }, _t = e => {
            const t = me("component"), n = $(() => ar.includes(i(e)) ? t.m(i(e)) : ""),
                o = $(() => !!i(e) && t.m(t.is("color")) || "");
            return [i(n), i(o)]
        }, yo = e => {
            const t = bt();
            return $(() => {
                var n, o;
                return (o = i(((n = t.proxy) == null ? void 0 : n.$props)[e])) != null ? o : void 0
            })
        };
    lr({type: String, values: uf, required: !1});
    const C_ = (e, t = {}) => {
        const n = ee(void 0), o = t.prop ? n : yo("size");
        return $(() => o.value || i(e) || "")
    }, $_ = e => {
        const t = yo("disabled");
        return $(() => t.value || i(e) || !1)
    }, Ze = lr({type: String, values: ar, validator: Ul}), $o = e => {
        const t = yo("color");
        return $(() => t.value || i(e))
    };

    function S_() {
        let e;
        const t = (o, r) => {
            n(), e = setTimeout(o, r)
        }, n = () => clearTimeout(e);
        return us(() => n()), {registerTimeout: t, cancelTimeout: n}
    }

    const x_ = be({showAfter: {type: Number, default: 0}, hideAfter: {type: Number, default: 200}}),
        k_ = ({showAfter: e, hideAfter: t, open: n, close: o}) => {
            const {registerTimeout: r} = S_();
            return {
                onOpen: a => {
                    r(() => {
                        n(a)
                    }, i(e))
                }, onClose: a => {
                    r(() => {
                        o(a)
                    }, i(t))
                }
            }
        }, it = ({scope: e, type: t = "API", from: n, version: o, replacement: r, ref: s}, l) => {
            $e(() => i(l), a => {
            }, {immediate: !0})
        };

    function Xi(e) {
        return {...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height}
    }

    function br(e) {
        if (!e) return Xi({width: 0, height: 0, x: 0, y: 0});
        const t = e.getBoundingClientRect(), n = t.left, o = t.top, r = t.width, s = t.height;
        return Xi({width: r, height: s, x: n, y: o})
    }

    const T_ = e => e.split("-")[1], E_ = e => e === "y" ? "height" : "width", hf = e => e.split("-")[0], P_ = e => {
        let t = "x", n = "y";
        return ["top", "bottom"].includes(hf(e)) || (t = "y", n = "x"), {mainAxis: t, crossAxis: n}
    };

    function O_({reference: e, floating: t}, n, o) {
        const {offset: r = 0, rtl: s} = o, l = window.pageYOffset, a = window.pageXOffset,
            u = e.x + a + e.width / 2 - t.width / 2, c = e.y + l, {mainAxis: f, crossAxis: d} = P_(n), p = E_(f),
            h = e[p] / 2 - t[p] / 2, m = hf(n), v = f === "x";
        let S;
        switch (m) {
            case"top":
                S = {x: u, y: c - t.height}, S[d] -= r;
                break;
            case"bottom":
                S = {x: u, y: c + e.height}, S[d] += r;
                break;
            case"right":
                S = {x: e.x + e.width, y: c + e.height / 2 - t.height / 2}, S[d] += r;
                break;
            case"left":
                S = {x: e.x - t.width, y: c + e.height / 2 - t.height / 2}, S[d] -= r;
                break;
            default:
                S = {x: e.x, y: e.y}
        }
        switch (T_(n)) {
            case"start":
                S[f] -= h * (s && v ? -1 : 1);
                break;
            case"end":
                S[f] += h * (s && v ? -1 : 1);
                break
        }
        return S
    }

    function A_(e, t, n, o) {
        const {placement: r = "bottom", fit: s = !0, offset: l = 0, windowResize: a = !0, visible: u} = o ?? {},
            c = ee(r), f = () => {
                var p;
                (p = t.value) == null || p.remove()
            }, d = () => {
                const p = e.value, h = t.value;
                if (!h || !p) return;
                const m = br(p), v = h.style;
                s && (v.width = `${m.width}px`);
                const {x: S, y: P} = O_({reference: br(p), floating: br(h), arrow: br(n.value)}, c.value, {offset: l});
                v.left = `${S}px`, v.top = `${P}px`
            };
        return ht(() => {
            a && Zt("resize", d), $e(u, () => {
                De(d)
            }), $e(c, p => {
                var h;
                (h = t.value) == null || h.setAttribute("data-popper-placement", p)
            }), $e(e, p => {
                f(), p && u.value && De(d)
            }, {flush: "post"})
        }), {update: d, destroy: f, placement: c}
    }

    const vf = Symbol("ForwardRef"), I_ = e => {
            et(vf, {
                setForwardRef: n => {
                    e.value = n
                }
            })
        }, M_ = e => ({
            mounted(t) {
                e(t)
            }, updated(t) {
                e(t)
            }, unmounted() {
                e(null)
            }
        }), mf = Symbol("AvatarGroupContextKey"), Wl = Symbol("CheckboxGroupContextKey"), gf = Symbol(),
        yf = Symbol("PaginationKey"), ql = Symbol("popper"), bf = Symbol("RowContextKey"),
        _f = Symbol("ScrollbarContextKey"), Zi = Symbol("sidebar-group"), wf = Symbol("sidebar"),
        Cf = Symbol("table-context");
    var B_ = {
        name: "en", vs: {
            colorpicker: {
                confirm: "OK",
                clear: "Clear",
                defaultLabel: "color picker",
                description: "current color is {color}. press enter to select a new color."
            },
            datepicker: {
                now: "Now",
                today: "Today",
                cancel: "Cancel",
                clear: "Clear",
                confirm: "OK",
                dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
                monthTablePrompt: "Use the arrow keys and enter to select the month",
                yearTablePrompt: "Use the arrow keys and enter to select the year",
                selectedDate: "Selected date",
                selectDate: "Select date",
                selectTime: "Select time",
                startDate: "Start Date",
                startTime: "Start Time",
                endDate: "End Date",
                endTime: "End Time",
                prevYear: "Previous Year",
                nextYear: "Next Year",
                prevMonth: "Previous Month",
                nextMonth: "Next Month",
                year: "",
                month1: "January",
                month2: "February",
                month3: "March",
                month4: "April",
                month5: "May",
                month6: "June",
                month7: "July",
                month8: "August",
                month9: "September",
                month10: "October",
                month11: "November",
                month12: "December",
                week: "week",
                weeks: {sun: "Sun", mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat"},
                weeksFull: {
                    sun: "Sunday",
                    mon: "Monday",
                    tue: "Tuesday",
                    wed: "Wednesday",
                    thu: "Thursday",
                    fri: "Friday",
                    sat: "Saturday"
                },
                months: {
                    jan: "Jan",
                    feb: "Feb",
                    mar: "Mar",
                    apr: "Apr",
                    may: "May",
                    jun: "Jun",
                    jul: "Jul",
                    aug: "Aug",
                    sep: "Sep",
                    oct: "Oct",
                    nov: "Nov",
                    dec: "Dec"
                }
            },
            inputNumber: {decrease: "decrease number", increase: "increase number"},
            select: {loading: "Loading", noMatch: "No matching data", noData: "No data", placeholder: "Select"},
            dropdown: {toggleDropdown: "Toggle Dropdown"},
            cascader: {noMatch: "No matching data", loading: "Loading", placeholder: "Select", noData: "No data"},
            pagination: {
                goto: "Go to",
                pagesize: "/page",
                total: "Total {total}",
                pageClassifier: "",
                deprecationWarning: "Deprecated usages detected, please refer to the pagination documentation for more details"
            },
            dialog: {close: "Close this dialog"},
            drawer: {close: "Close this dialog"},
            messagebox: {
                title: "Message",
                confirm: "OK",
                cancel: "Cancel",
                error: "Illegal input",
                close: "Close this dialog"
            },
            upload: {deleteTip: "press delete to remove", delete: "Delete", preview: "Preview", continue: "Continue"},
            slider: {
                defaultLabel: "slider between {min} and {max}",
                defaultRangeStartLabel: "pick start value",
                defaultRangeEndLabel: "pick end value"
            },
            table: {
                noMatch: "No matching data",
                emptyText: "No Data",
                confirmFilter: "Confirm",
                resetFilter: "Reset",
                clearFilter: "All",
                sumText: "Sum"
            },
            tree: {emptyText: "No Data"},
            transfer: {
                noMatch: "No matching data",
                noData: "No data",
                titles: ["List 1", "List 2"],
                filterPlaceholder: "Enter keyword",
                noCheckedFormat: "{total} items",
                hasCheckedFormat: "{checked}/{total} checked"
            },
            image: {error: "FAILED"},
            pageHeader: {title: "Back"},
            popconfirm: {confirmButtonText: "Yes", cancelButtonText: "No"}
        }
    };
    const L_ = e => (t, n) => R_(t, n, i(e)), R_ = (e, t, n) => mb(n, e, e).replace(/\{(\w+)\}/g, (o, r) => {
        var s;
        return `${(s = t == null ? void 0 : t[r]) != null ? s : `{${r}}`}`
    }), N_ = e => {
        const t = $(() => i(e).name), n = Fe(e) ? e : ee(e);
        return {lang: t, locale: n, t: L_(e)}
    }, $f = Symbol("localeContextKey"), Yl = e => {
        const t = e || Ae($f, ee());
        return N_($(() => t.value || B_))
    }, Ji = ee(0), Sf = 2e3, xf = Symbol("zIndexContextKey"), Gl = e => {
        const t = e || Ae(xf, void 0), n = $(() => {
            const s = i(t);
            return Pe(s) ? s : Sf
        }), o = $(() => n.value + Ji.value);
        return {initialZIndex: n, currentZIndex: o, nextZIndex: () => (Ji.value++, o.value)}
    }, jr = ee();

    function ir(e, t = void 0) {
        const n = bt() ? Ae(gf, jr) : jr;
        return e ? $(() => {
            var o, r;
            return (r = (o = n.value) == null ? void 0 : o[e]) != null ? r : t
        }) : n
    }

    const Xl = e => {
            const t = ir(), n = me(e, $(() => {
                var s;
                return ((s = t.value) == null ? void 0 : s.namespace) || go
            })), o = Yl($(() => {
                var s;
                return (s = t.value) == null ? void 0 : s.locale
            })), r = Gl($(() => {
                var s;
                return ((s = t.value) == null ? void 0 : s.zIndex) || Sf
            }));
            return {ns: n, locale: o, zIndex: r}
        }, V_ = (e, t, n = !1) => {
            var o;
            const r = !!bt(), s = r ? ir() : void 0, l = (o = t == null ? void 0 : t.provide) != null ? o : r ? et : void 0;
            if (!l) return;
            const a = $(() => {
                const u = i(e);
                return s != null && s.value ? D_(s.value, u) : u
            });
            return l(gf, a), l($f, $(() => a.value.locale)), l(pf, $(() => a.value.namespace)), l(xf, $(() => a.value.zIndex)), (n || !jr.value) && (jr.value = a.value), a
        }, D_ = (e, t) => {
            var n;
            const o = [...new Set([...nl(e), ...nl(t)])], r = {};
            for (const s of o) r[s] = (n = t[s]) != null ? n : e[s];
            return r
        }, F_ = e => {
            const t = bt();
            if (!t) throw new Error("useInject hook must be called inside setup function or <script setup>");
            const n = Ae(e, void 0), o = $(() => (n == null ? void 0 : n.children.indexOf(t)) || 0);
            return n == null || n.insert(t), xl(() => {
                n == null || n.remove(t)
            }), n ? {...n, index: o} : void 0
        }, H_ = (e, t) => {
            const n = pt([]), o = s => {
                n.push(s)
            }, r = s => {
                const l = n.indexOf(s);
                n.splice(l, 1)
            };
            return et(e, {...t, children: n, insert: o, remove: r}), {children: n, insert: o, remove: r}
        }, Qi = {prefix: Math.floor(Math.random() * 1e4), current: 0}, j_ = Symbol("IdInjection"),
        Zl = () => bt() ? Ae(j_, Qi) : Qi, cs = e => {
            const t = Zl(), n = ir("namespace", go);
            return $(() => i(e) || `${n.value}-id-${t.prefix}-${t.current++}`)
        }, z_ = e => {
            Fe(e) || Sn("[useLockscreen]", "You need to pass a ref param to this function");
            const t = me("popup"), n = Du(() => t.bm("parent", "hidden"));
            if (!lt || Hr(document.body, n.value)) return;
            let o = 0, r = !1, s = "0";
            const l = () => {
                setTimeout(() => {
                    t_(document.body, n.value), r && (document.body.style.width = s)
                }, 200)
            };
            $e(e, a => {
                if (!a) {
                    l();
                    return
                }
                r = !Hr(document.body, n.value), r && (s = document.body.style.width), o = r_(t.namespace.value);
                const u = document.documentElement.clientHeight < document.body.scrollHeight,
                    c = nf(document.body, "overflowY");
                o > 0 && (u || c === "scroll") && r && (document.body.style.width = `calc(100% - ${o}px)`), e_(document.body, n.value)
            }), qr(() => l())
        }, co = [], K_ = e => {
            co.length !== 0 && e.code === ro.esc && (e.stopPropagation(), co[co.length - 1].handleClose())
        }, U_ = (e, t) => {
            $e(t, n => {
                n ? co.push(e) : co.splice(co.indexOf(e), 1)
            })
        };
    lt && Zt(document, "keydown", K_);
    const W_ = lr({type: he(Boolean), default: null}), q_ = lr({type: he(Function)}), kf = e => {
        const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {[e]: W_, [n]: q_};
        return {
            useModelToggle: ({
                                 indicator: l,
                                 toggleReason: a,
                                 shouldHideWhenRouteChanges: u,
                                 shouldProceed: c,
                                 processBeforeClosing: f,
                                 onShow: d,
                                 onHide: p
                             }) => {
                const h = bt(), {emit: m} = h, v = h.props, S = $(() => ye(v[n])), P = $(() => v[e] === null),
                    C = k => {
                        l.value !== !0 && (l.value = !0, a && (a.value = k), ye(d) && d(k))
                    }, H = k => {
                        l.value !== !1 && (l.value = !1, a && (a.value = k), ye(p) && p(k))
                    }, D = k => {
                        if (v.disabled === !0 || ye(c) && !c()) return;
                        const _ = S.value && lt;
                        _ && m(t, !0), (P.value || !_) && C(k)
                    }, U = k => {
                        if (v.disabled === !0 || !lt || ye(f) && !f()) return;
                        const _ = S.value && lt;
                        _ && m(t, !1), (P.value || !_) && H(k)
                    }, R = k => {
                        at(k) && (v.disabled && k ? S.value && m(t, !1) : l.value !== k && (k ? C() : H()))
                    }, A = () => {
                        l.value ? U() : D()
                    };
                return $e(() => v[e], R), u && h.appContext.config.globalProperties.$route !== void 0 && $e(() => ({...h.proxy.$route}), () => {
                    u.value && l.value && U()
                }), ht(() => {
                    R(v[e])
                }), {hide: U, show: D, toggle: A, hasUpdateHandler: S}
            }, useModelToggleProps: r, useModelToggleEmits: o
        }
    };
    kf("modelValue");
    let eu;
    const Jl = () => {
        const e = ir("namespace", go), t = Zl(), n = $(() => `${e.value}-popper-container-${t.prefix}`),
            o = $(() => `#${n.value}`);
        return {id: n, selector: o}
    }, Tf = e => {
        const t = document.createElement("div");
        return t.id = e, document.body.appendChild(t), t
    }, Ef = () => {
        const {id: e, selector: t} = Jl();
        return Qu(() => {
            lt && !eu && !document.body.querySelector(t.value) && (eu = Tf(e.value))
        }), {id: e, selector: t}
    }, Y_ = e => {
        if (!e) return {onClick: qe, onMousedown: qe, onMouseup: qe};
        let t = !1, n = !1;
        return {
            onClick: l => {
                t && n && e(l), t = n = !1
            }, onMousedown: l => {
                t = l.target === l.currentTarget
            }, onMouseup: l => {
                n = l.target === l.currentTarget
            }
        }
    }, G_ = "0.2.0-beta.26", X_ = (e = []) => ({
        version: G_, install: (n, o) => {
            n[qi] || (n[qi] = !0, e.forEach(r => n.use(r)), o && V_(o, n, !0))
        }
    }), Z_ = be({size: {type: he([Number, String])}, color: {type: String, values: ar, validator: Ul, default: ""}});
    var ge = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [o, r] of t) n[o] = r;
        return n
    };
    const J_ = X({name: "VsIcon"}), Q_ = X({
        ...J_, props: Z_, setup(e) {
            const t = e, n = me("icon"), o = $(() => {
                const {size: r, color: s} = t;
                return !r && !s ? {} : {
                    ...n.cssVar({color: tt(s)}),
                    color: `rgb(${n.cssVarName("color")})`,
                    fontSize: Fr(r) ? void 0 : ol(r)
                }
            });
            return (r, s) => (w(), T("i", {class: x(i(n).b()), style: Ie(i(o))}, [ie(r.$slots, "default")], 6))
        }
    });
    var e1 = ge(Q_, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/icon.vue"]]);
    const t1 = be({less: {type: Boolean}}), n1 = X({name: "IconArrow"}), o1 = X({
        ...n1, props: t1, setup(e) {
            const t = me("icon-arrow");
            return (n, o) => (w(), T("i", {class: x([i(t).b(), i(t).is("less", n.less)])}, null, 2))
        }
    });
    var r1 = ge(o1, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/arrow.vue"]]);
    const s1 = be({indeterminate: {type: Boolean}, active: {type: Boolean}}),
        l1 = G("span", null, [G("div", {class: "line1"}), G("div", {class: "line2"})], -1), a1 = [l1],
        i1 = X({name: "IconCheck"}), u1 = X({
            ...i1, props: s1, setup(e) {
                const t = me("icon-check");
                return (n, o) => (w(), T("i", {class: x([i(t).b(), i(t).is("indeterminate", n.indeterminate), i(t).is("active", n.active)])}, a1, 2))
            }
        });
    var c1 = ge(u1, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/check.vue"]]);
    const f1 = be({
        hover: {type: String},
        scale: {
            type: he([String, Number]),
            validator: e => (Nn(`${e}`) || Pe(e)) && Number(e) >= 0 && Number(e) <= 1,
            default: 1
        }
    }), d1 = X({name: "IconClose"}), p1 = X({
        ...d1, props: f1, setup(e) {
            const t = me("icon-close");
            return (n, o) => (w(), T("i", {
                class: x([i(t).b(), n.hover && i(t).bm("hover", n.hover)]),
                style: Ie({transform: `scale(${n.scale})`})
            }, null, 6))
        }
    });
    var h1 = ge(p1, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/close.vue"]]);
    const v1 = G("circle", {class: "path", cx: "25", cy: "25", r: "25"}, null, -1), m1 = [v1],
        g1 = G("circle", {class: "path", cx: "25", cy: "25", r: "25"}, null, -1), y1 = [g1],
        b1 = X({name: "IconLoading"}), _1 = X({
            ...b1, setup(e) {
                const t = me("icon-loading");
                return (n, o) => (w(), T("div", {class: x(i(t).b())}, [(w(), T("svg", {
                    viewBox: "0 0 50 50",
                    class: x([i(t).e("item"), i(t).e("1")])
                }, m1, 2)), (w(), T("svg", {viewBox: "0 0 50 50", class: x([i(t).e("item"), i(t).e("2")])}, y1, 2))], 2))
            }
        });
    var w1 = ge(_1, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/loading.vue"]]);
    const C1 = be({less: {type: Boolean}}), $1 = X({name: "IconPlus"}), S1 = X({
        ...$1, props: C1, setup(e) {
            const t = me("icon");
            return (n, o) => (w(), T("i", {class: x([i(t).b("plus"), i(t).is("less", n.less)])}, null, 2))
        }
    });
    var x1 = ge(S1, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/plus.vue"]]);
    const k1 = {name: "Star"}, T1 = {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024"}, E1 = G("path", {
        fill: "currentColor",
        d: "m512 747.84 228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72L512 747.84zM313.6 924.48a70.4 70.4 0 0 1-102.144-74.24l37.888-220.928L88.96 472.96A70.4 70.4 0 0 1 128 352.896l221.76-32.256 99.2-200.96a70.4 70.4 0 0 1 126.208 0l99.2 200.96 221.824 32.256a70.4 70.4 0 0 1 39.04 120.064L774.72 629.376l37.888 220.928a70.4 70.4 0 0 1-102.144 74.24L512 820.096l-198.4 104.32z"
    }, null, -1), P1 = [E1];

    function O1(e, t, n, o, r, s) {
        return w(), T("svg", T1, P1)
    }

    var A1 = ge(k1, [["render", O1], ["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/star.vue"]]);
    const I1 = {name: "StarFilled"}, M1 = {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1024 1024"},
        B1 = G("path", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "currentColor",
            d: "M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"
        }, null, -1), L1 = [B1];

    function R1(e, t, n, o, r, s) {
        return w(), T("svg", M1, L1)
    }

    var N1 = ge(I1, [["render", R1], ["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/icon/src/star-filled.vue"]]);
    const bo = Ke(e1), Qo = Ke(r1), V1 = Ke(c1), So = Ke(h1), xn = Ke(w1), D1 = Ke(x1), F1 = Ke(A1), _r = Ke(N1),
        H1 = X({name: "VsCollapseTransition"}), j1 = X({
            ...H1, setup(e) {
                const t = me("collapse-transition"), n = {
                    beforeEnter(o) {
                        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0
                    }, enter(o) {
                        o.dataset.oldOverflow = o.style.overflow, o.scrollHeight !== 0 ? (o.style.maxHeight = `${o.scrollHeight}px`, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom) : (o.style.maxHeight = 0, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom), o.style.overflow = "hidden"
                    }, afterEnter(o) {
                        o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow
                    }, beforeLeave(o) {
                        o.dataset || (o.dataset = {}), o.dataset.oldPaddingTop = o.style.paddingTop, o.dataset.oldPaddingBottom = o.style.paddingBottom, o.dataset.oldOverflow = o.style.overflow, o.style.maxHeight = `${o.scrollHeight}px`, o.style.overflow = "hidden"
                    }, leave(o) {
                        o.scrollHeight !== 0 && (o.style.maxHeight = 0, o.style.paddingTop = 0, o.style.paddingBottom = 0)
                    }, afterLeave(o) {
                        o.style.maxHeight = "", o.style.overflow = o.dataset.oldOverflow, o.style.paddingTop = o.dataset.oldPaddingTop, o.style.paddingBottom = o.dataset.oldPaddingBottom
                    }
                };
                return (o, r) => (w(), Me(Lt, rr({name: i(t).b()}, Tp(n)), {
                    default: ke(() => [ie(o.$slots, "default")]),
                    _: 3
                }, 16, ["name"]))
            }
        });
    var Pr = ge(j1, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/collapse-transition/src/collapse-transition.vue"]]);
    Pr.install = e => {
        e.component(Pr.name, Pr)
    };
    const Pf = Pr, er = Pf, z1 = be({
        color: {...Ze, default: "primary"},
        closable: {type: Boolean},
        hiddenContent: {type: Boolean, default: null},
        modelValue: {type: Boolean, default: !0},
        page: {type: Number, default: 0},
        progress: {type: [Number, String], default: 0},
        time: {type: [Number, String], default: 0},
        type: {type: String, values: ["", "border", "flat", "gradient", "relief", "shadow", "solid"], default: ""},
        border: Boolean,
        flat: Boolean,
        gradient: Boolean,
        relief: Boolean,
        shadow: Boolean,
        solid: Boolean
    }), K1 = {[Re]: e => at(e), "update:page": e => Pe(e), "update:hiddenContent": e => at(e)}, U1 = e => {
        it({
            scope: "vs-alert",
            type: "Prop",
            from: "border",
            version: "0.2.0",
            replacement: "type",
            ref: "https://vuesax.space/components/alert#props"
        }, $(() => !!e.border)), it({
            scope: "vs-alert",
            type: "Prop",
            from: "shadow",
            version: "0.2.0",
            replacement: "type",
            ref: "https://vuesax.space/components/alert#props"
        }, $(() => !!e.shadow)), it({
            scope: "vs-alert",
            type: "Prop",
            from: "relief",
            version: "0.2.0",
            replacement: "type",
            ref: "https://vuesax.space/components/alert#props"
        }, $(() => !!e.relief)), it({
            scope: "vs-alert",
            type: "Prop",
            from: "flat",
            version: "0.2.0",
            replacement: "type",
            ref: "https://vuesax.space/components/alert#props"
        }, $(() => !!e.flat)), it({
            scope: "vs-alert",
            type: "Prop",
            from: "gradient",
            version: "0.2.0",
            replacement: "type",
            ref: "https://vuesax.space/components/alert#props"
        }, $(() => !!e.gradient)), it({
            scope: "vs-alert",
            type: "Prop",
            from: "solid",
            version: "0.2.0",
            replacement: "type",
            ref: "https://vuesax.space/components/alert#props"
        }, $(() => !!e.solid))
    }, W1 = X({name: "VsAlert"}), q1 = X({
        ...W1, props: z1, emits: K1, setup(e, {emit: t}) {
            const n = e, o = Yn();
            U1(n);
            const r = me("alert"),
                s = $(() => [..._t(n.color), r.b(), n.type && r.m(n.type), u.value.length > 0 && r.m("pages")]),
                l = $(() => r.cssVar({color: tt(n.color)})),
                a = $(() => Object.keys(o).filter(m => m.includes("page-")).length), u = $(() => {
                    const h = Object.keys(o).filter(v => v.includes("page-")), m = [];
                    return h.forEach(v => {
                        m.push(`${n.page}` === v.split("-")[1] && o[v])
                    }), m
                }), c = () => {
                    t(Re, !n.modelValue)
                }, f = () => {
                    t("update:hiddenContent", !n.hiddenContent)
                }, d = () => {
                    n.page > 1 && t("update:page", n.page - 1)
                }, p = () => {
                    n.page < a.value && t("update:page", n.page + 1)
                };
            return (h, m) => (w(), Me(i(er), null, {
                default: ke(() => [h.modelValue ? (w(), T("div", {
                    key: 0,
                    class: x(i(s)),
                    style: Ie(i(l))
                }, [h.$slots.icon ? (w(), T("div", {
                    key: 0,
                    class: x(i(r).e("icon"))
                }, [ie(h.$slots, "icon")], 2)) : de("v-if", !0), h.$slots.title ? (w(), T("div", {
                    key: 1,
                    class: x([i(r).e("title"), i(Ri)(h.hiddenContent) && i(r).em("title", "click__hidden")]),
                    onClick: f
                }, [ie(h.$slots, "title"), !h.closable && i(Ri)(h.hiddenContent) ? (w(), Me(i(D1), {
                    key: 0,
                    less: !h.hiddenContent,
                    onClick: $t(f, ["stop"])
                }, null, 8, ["less", "onClick"])) : de("v-if", !0)], 2)) : de("v-if", !0), fe(i(er), null, {
                    default: ke(() => [h.hiddenContent ? de("v-if", !0) : (w(), T("div", {
                        key: 0,
                        class: x(i(r).e("content"))
                    }, [G("div", {class: x(i(r).em("content", "text"))}, [ie(h.$slots, "default"), ie(h.$slots, `page-${h.page}`)], 2)], 2))]),
                    _: 3
                }), h.closable ? (w(), T("button", {
                    key: 2,
                    class: x(i(r).e("close")),
                    onClick: c
                }, [fe(i(So), {hover: "less"})], 2)) : de("v-if", !0), h.$slots.footer ? (w(), T("div", {
                    key: 3,
                    class: x(i(r).e("footer"))
                }, [ie(h.$slots, "footer")], 2)) : de("v-if", !0), h.progress ? (w(), T("div", {
                    key: 4,
                    class: x(i(r).e("progress"))
                }, [G("div", {
                    class: x(i(r).em("progress", "bar")),
                    style: Ie({width: `${h.progress}%`})
                }, null, 6)], 2)) : de("v-if", !0), i(a) > 0 ? (w(), T("div", {
                    key: 5,
                    class: x(i(r).e("pagination"))
                }, [G("button", {
                    onClick: d,
                    textContent: "<"
                }), G("span", null, ze(h.page) + " / " + ze(i(a)), 1), G("button", {
                    onClick: p,
                    textContent: ">"
                })], 2)) : de("v-if", !0)], 6)) : de("v-if", !0)]), _: 3
            }))
        }
    });
    var Y1 = ge(q1, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/alert/src/alert.vue"]]);
    const G1 = Ke(Y1), X1 = be({
        color: Ze,
        badgePosition: {
            type: String,
            values: ["top-right", "bottom-right", "bottom-left", "top-left"],
            default: "bottom-right"
        },
        badgeColor: {type: String, values: ar, validator: Ul, default: "primary"},
        badge: {type: Boolean},
        history: {type: Boolean},
        historyGradient: {type: Boolean},
        loading: {type: Boolean},
        pointer: {type: Boolean},
        shape: {type: String, values: ["circle", "square", "default"], default: "default"},
        size: {type: [Number, String]},
        writing: {type: Boolean},
        circle: {type: Boolean},
        square: {type: Boolean}
    }), Z1 = e => {
        const t = F_(mf), n = $(() => t && t.index.value > t.max - 1),
            o = $(() => !!(t != null && t.max) && t.index.value === t.max - 1),
            r = $(() => t && t.children.length - t.index.value - 1),
            s = $(() => t && t.children.length - t.index.value - 1 != 0), l = $(() => {
                var a;
                const u = (a = e.text) == null ? void 0 : a.call(e);
                if (!u || u.length > 1) return "";
                const c = u[0];
                if (ce(c.children) || !c.children) return "";
                const f = c.children;
                let d = [f];
                return f.length > 5 && (d = f.split(/\s/g).map(p => p[0])), d.join("")
            });
        return {isHidden: n, isLastest: o, getText: l, moreNumber: r, showLastest: s}
    }, J1 = X({name: "VsAvatar"}), Q1 = X({
        ...J1, props: X1, setup(e) {
            const t = e, n = Yn(), o = me("avatar"), r = ee(), {
                    isHidden: s,
                    isLastest: l,
                    getText: a,
                    showLastest: u,
                    moreNumber: c
                } = Z1(n),
                f = $(() => [..._t(t.color), o.b("content"), t.history && "history", t.historyGradient && "history--gradient", t.shape != "default" && `${o.be("content", t.shape)}`, s.value && `${o.be("content", "hidden")}`, l.value && `${o.be("content", "latest")}`, n.icons && `${o.be("content", "hasIcons")}`]),
                d = $(() => ({
                    width: `${t.size}px`,
                    height: `${t.size}px`,
                    cursor: t.pointer ? "pointer" : "", ...o.cssVar({color: tt(t.color)})
                }));
            return $e(() => t.badgeColor, () => {
                var p;
                so("avatar-badge", tt(t.badgeColor), r.value), (p = r.value) == null || p.classList.add(o.em("badge", "change-color"))
            }), ht(() => {
                var p;
                (p = r.value) == null || p.classList.add(o.em("badge", "change-color")), so("avatar-badge", tt(t.badgeColor), r.value)
            }), (p, h) => (w(), T("div", {
                ref_key: "root$",
                ref: r,
                class: x(i(f)),
                style: Ie(i(d))
            }, [p.loading ? (w(), T("div", {
                key: 0,
                class: x(i(o).e("loading"))
            }, [G("div", {class: x(i(o).em("loading", "animate"))}, [fe(i(xn))], 2)], 2)) : (w(), T(ve, {key: 1}, [], 64)), G("div", {class: x([i(o).b(), i(a).length > 2 && i(o).em("letter", `${i(a).length}`)])}, [p.$slots.text ? (w(), T(ve, {key: 0}, [rt(ze(i(a)), 1)], 64)) : (w(), T(ve, {key: 1}, [], 64)), ie(p.$slots, "default")], 2), p.$slots.badge || p.badge ? (w(), T("div", {
                key: 2,
                class: x([i(o).e("badge"), i(o).is("slot", !!p.$slots.badge), i(o).is("writing", p.writing), p.badgePosition])
            }, [p.writing ? (w(), T("div", {
                key: 0,
                class: x(i(o).e("points"))
            }, [G("div", {class: x(i(o).em("points", "item"))}, null, 2), G("div", {class: x(i(o).em("points", "item"))}, null, 2), G("div", {class: x(i(o).em("points", "item"))}, null, 2)], 2)) : ie(p.$slots, "badge", {key: 1})], 2)) : (w(), T(ve, {key: 3}, [], 64)), i(l) ? dt((w(), T("div", {
                key: 4,
                class: x(i(o).e("lastest"))
            }, ze(`+${i(c)}`), 3)), [[wn, i(u)]]) : (w(), T(ve, {key: 5}, [], 64)), p.$slots.icons ? (w(), T("div", {
                key: 6,
                class: x(i(o).e("icons"))
            }, [ie(p.$slots, "icons")], 2)) : (w(), T(ve, {key: 7}, [], 64))], 6))
        }
    });
    var ew = ge(Q1, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/avatar/src/avatar.vue"]]);
    const tw = be({float: {type: Boolean}, max: {type: [String, Number]}}), nw = X({name: "VsAvatarGroup"}), ow = X({
        ...nw, props: tw, setup(e) {
            const t = e, n = me("avatar");
            return H_(mf, {max: t.max}), (o, r) => (w(), T("div", {class: x([i(n).e("group"), {float: o.float}])}, [ie(o.$slots, "default")], 2))
        }
    });
    var Of = ge(ow, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/avatar/src/avatar-group.vue"]]);
    const rw = Ke(ew, {AvatarGroup: Of}), sw = xt(Of), lw = X({name: "VsButtonGroup"}), aw = X({
        ...lw, setup(e) {
            const t = me("button");
            return (n, o) => (w(), T("div", {class: x(i(t).e("group"))}, [ie(n.$slots, "default")], 2))
        }
    });
    var Af = ge(aw, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/button/src/button-group.vue"]]);
    const iw = be({
        active: {type: Boolean},
        animateInactive: {type: Boolean},
        animationType: {type: String, values: ["scale", "rotate", "vertical"]},
        block: {type: Boolean},
        color: {...Ze, default: "primary"},
        icon: {type: Boolean},
        loading: {type: Boolean},
        shape: {type: String, values: ["circle", "square"]},
        size: {type: [Number, String], values: ["xl", "large", "default", "small", "mini"], default: "default"},
        ripple: {type: String, values: ["cut", "reverse"]},
        type: {
            type: String,
            values: ["default", "border", "flat", "floating", "gradient", "shadow", "relief", "transparent"],
            default: "default"
        },
        upload: {type: Boolean},
        border: {type: Boolean},
        flat: {type: Boolean},
        floating: {type: Boolean},
        gradient: {type: Boolean},
        shadow: {type: Boolean},
        relief: {type: Boolean},
        transparent: {type: Boolean},
        square: {type: Boolean},
        circle: {type: Boolean},
        to: {type: [String, Object]},
        href: {type: String},
        blank: {type: Boolean}
    }), uw = X({name: "VsButton"}), cw = X({
        ...uw, props: iw, setup(e) {
            const t = e, n = Yn(), o = me("button"), r = ee(),
                s = $(() => [o.b(), _t(t.color), t.shape && o.m(t.shape), t.active && o.m("active"), n.animate && o.m("animate"), t.animationType && o.m(`animate-${t.animationType}`), t.animateInactive && o.m("animate-inactive"), t.block && o.m("block"), t.icon && o.m("icon"), t.loading && o.m("loading"), o.bm("size", t.size), o.m(t.type), t.upload && o.m("upload")]),
                l = $(() => [o.cssVar({color: tt(t.color)})]), a = u => {
                    t.ripple === "reverse" ? y_(u) : t.ripple === "cut" ? b_(u) : t.type === "flat" ? Gi(u, !t.active && document.activeElement !== r.value ? "inherit" : void 0, !t.active && document.activeElement !== r.value) : Gi(u, void 0, !1)
                };
            return (u, c) => (w(), T("button", {
                ref_key: "root$",
                ref: r,
                class: x(i(s)),
                style: Ie(i(l)),
                onMousedown: a
            }, [G("div", {class: x(i(o).e("content"))}, [ie(u.$slots, "default")], 2), u.$slots.animate ? (w(), T("div", {
                key: 0,
                class: x([i(o).e("animate"), i(o).em("animate", u.animationType)])
            }, [ie(u.$slots, "animate")], 2)) : (w(), T(ve, {key: 1}, [], 64)), u.loading ? (w(), T("div", {
                key: 2,
                class: x(i(o).e("loading"))
            }, [fe(i(xn))], 2)) : (w(), T(ve, {key: 3}, [], 64))], 38))
        }
    });
    var fw = ge(cw, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/button/src/button.vue"]]);
    const dw = Ke(fw, {ButtonGroup: Af}), pw = xt(Af), tu = [1, "1", 2, "2", 3, "3", 4, "4", 5, "5"],
        hw = be({color: Ze, type: {type: [String, Number], values: tu, validator: e => tu.includes(e), default: 1}}),
        vw = X({inheritAttrs: !1, name: "VsCard"}), mw = X({
            ...vw, props: hw, setup(e) {
                const t = me("card");
                return (n, o) => (w(), T("div", {class: x([i(t).b("content"), `type-${n.type}`])}, [G("div", rr({class: i(t).b()}, n.$attrs), [n.$slots.img ? (w(), T("div", {
                    key: 0,
                    class: x(i(t).e("img"))
                }, [ie(n.$slots, "img"), n.$slots.interactions ? (w(), T("div", {
                    key: 0,
                    class: x(i(t).e("interactions"))
                }, [ie(n.$slots, "interactions")], 2)) : (w(), T(ve, {key: 1}, [], 64))], 2)) : (w(), T(ve, {key: 1}, [], 64)), n.$slots.text ? (w(), T("div", {
                    key: 2,
                    class: x(i(t).e("text"))
                }, [n.$slots.title ? (w(), T("div", {
                    key: 0,
                    class: x(i(t).e("title"))
                }, [ie(n.$slots, "title")], 2)) : (w(), T(ve, {key: 1}, [], 64)), ie(n.$slots, "text")], 2)) : (w(), T(ve, {key: 3}, [], 64)), n.$slots.buttons ? (w(), T("div", {
                    key: 4,
                    class: x(i(t).e("button"))
                }, [ie(n.$slots, "buttons")], 2)) : (w(), T(ve, {key: 5}, [], 64))], 16)], 2))
            }
        });
    var gw = ge(mw, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/card/src/card.vue"]]);
    const lo = 4, yw = {
            vertical: {
                offset: "offsetHeight",
                scroll: "scrollTop",
                scrollSize: "scrollHeight",
                size: "height",
                key: "vertical",
                axis: "Y",
                client: "clientY",
                direction: "top"
            },
            horizontal: {
                offset: "offsetWidth",
                scroll: "scrollLeft",
                scrollSize: "scrollWidth",
                size: "width",
                key: "horizontal",
                axis: "X",
                client: "clientX",
                direction: "left"
            }
        }, bw = ({move: e, size: t, bar: n}) => ({[n.size]: t, transform: `translate${n.axis}(${e}%)`}),
        _w = be({vertical: Boolean, size: String, move: Number, ratio: {type: Number, required: !0}, always: Boolean}),
        ww = "Thumb", Cw = X({
            __name: "thumb", props: _w, setup(e) {
                const t = e, n = Ae(_f), o = me("scrollbar");
                n || Sn(ww, "can not inject scrollbar context");
                const r = ee(), s = ee(), l = ee({}), a = ee(!1);
                let u = !1, c = !1, f = lt ? document.onselectstart : null;
                const d = $(() => yw[t.vertical ? "vertical" : "horizontal"]),
                    p = $(() => bw({size: t.size, move: t.move, bar: d.value})),
                    h = $(() => r.value[d.value.offset] ** 2 / n.wrapElement[d.value.scrollSize] / t.ratio / s.value[d.value.offset]),
                    m = R => {
                        var A;
                        if (R.ctrlKey || [1, 2].includes(R.button)) return;
                        (A = window.getSelection()) == null || A.removeAllRanges(), S(R);
                        const k = R.currentTarget;
                        k && (l.value[d.value.axis] = k[d.value.offset] - (R[d.value.client] - k.getBoundingClientRect()[d.value.direction]))
                    }, v = R => {
                        if (!s.value || !r.value || !n.wrapElement) return;
                        n.wrapElement.style.scrollBehavior = "smooth";
                        const A = Math.abs(R.target.getBoundingClientRect()[d.value.direction] - R[d.value.client]),
                            k = s.value[d.value.offset] / 2, _ = (A - k) * 100 * h.value / r.value[d.value.offset];
                        n.wrapElement[d.value.scroll] = _ * n.wrapElement[d.value.scrollSize] / 100, n.wrapElement.style.scrollBehavior = "unset"
                    }, S = R => {
                        R.stopImmediatePropagation(), u = !0, document.addEventListener("mousemove", P), document.addEventListener("mouseup", C), f = document.onselectstart, document.onselectstart = () => !1
                    }, P = R => {
                        if (!r.value || !s.value || u === !1) return;
                        const A = l.value[d.value.axis];
                        if (!A) return;
                        const k = (r.value.getBoundingClientRect()[d.value.direction] - R[d.value.client]) * -1,
                            _ = s.value[d.value.offset] - A, y = (k - _) * 100 * h.value / r.value[d.value.offset];
                        n.wrapElement[d.value.scroll] = y * n.wrapElement[d.value.scrollSize] / 100
                    }, C = () => {
                        u = !1, l.value[d.value.axis] = 0, document.removeEventListener("mousemove", P), document.removeEventListener("mouseup", C), U(), c && (a.value = !1)
                    }, H = () => {
                        c = !1, a.value = !!t.size
                    }, D = () => {
                        c = !0, a.value = u
                    };
                qn(() => {
                    U(), document.removeEventListener("mouseup", C)
                });
                const U = () => {
                    document.onselectstart !== f && (document.onselectstart = f)
                };
                return Zt(Fn(n, "scrollbarElement"), "mousemove", H), Zt(Fn(n, "scrollbarElement"), "mouseleave", D), (R, A) => (w(), Me(Lt, {
                    name: i(o).b("fade"),
                    persisted: ""
                }, {
                    default: ke(() => [dt(G("div", {
                        ref_key: "instance",
                        ref: r,
                        class: x([i(o).e("bar"), i(o).is(i(d).key)]),
                        onMousedown: v
                    }, [G("div", {
                        ref_key: "thumb",
                        ref: s,
                        class: x(i(o).e("thumb")),
                        style: Ie(i(p)),
                        onMousedown: m
                    }, null, 38)], 34), [[wn, R.always || a.value]])]), _: 1
                }, 8, ["name"]))
            }
        });
    var nu = ge(Cw, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/scrollbar/src/thumb.vue"]]);
    const $w = be({
        always: {type: Boolean, default: !0},
        width: String,
        height: String,
        ratioX: {type: Number, default: 1},
        ratioY: {type: Number, default: 1},
        thickness: {type: [Number, String], default: 6}
    }), Sw = X({
        __name: "bar", props: $w, setup(e, {expose: t}) {
            const n = e, o = ee(0), r = ee(0);
            return t({
                handleScroll: l => {
                    if (l) {
                        const a = l.offsetHeight - lo, u = l.offsetWidth - lo;
                        r.value = l.scrollTop * 100 / a * n.ratioY, o.value = l.scrollLeft * 100 / u * n.ratioX
                    }
                }
            }), (l, a) => (w(), T(ve, null, [fe(nu, {
                move: o.value,
                ratio: l.ratioX,
                size: l.width,
                always: l.always,
                style: Ie(`height: ${l.thickness}px`)
            }, null, 8, ["move", "ratio", "size", "always", "style"]), fe(nu, {
                move: r.value,
                ratio: l.ratioY,
                size: l.height,
                vertical: "",
                always: l.always,
                style: Ie(`width: ${l.thickness}px`)
            }, null, 8, ["move", "ratio", "size", "always", "style"])], 64))
        }
    });
    var xw = ge(Sw, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/scrollbar/src/bar.vue"]]);
    const kw = be({
            height: {type: [String, Number], default: ""},
            maxHeight: {type: [String, Number], default: ""},
            native: {type: Boolean, default: !1},
            wrapStyle: {type: he([String, Object, Array]), default: ""},
            wrapClass: {type: [String, Array], default: ""},
            viewClass: {type: [String, Array], default: ""},
            viewStyle: {type: [String, Array, Object], default: ""},
            noresize: Boolean,
            tag: {type: String, default: "div"},
            always: {type: Boolean, default: !0},
            minSize: {type: Number, default: 20},
            thickness: {type: [Number, String], default: 6}
        }), Tw = {scroll: ({scrollTop: e, scrollLeft: t}) => [e, t].every(Pe)}, Ew = "VsScrollbar", Pw = X({name: Ew}),
        Ow = X({
            ...Pw, props: kw, emits: Tw, setup(e, {expose: t, emit: n}) {
                const o = e, r = me("scrollbar");
                let s, l;
                const a = ee(), u = ee(), c = ee(), f = ee("0"), d = ee("0"), p = ee(), h = ee(1), m = ee(1),
                    v = $(() => {
                        const A = {};
                        return o.height && (A.height = ol(o.height)), o.maxHeight && (A.maxHeight = ol(o.maxHeight)), [o.wrapStyle, A]
                    }), S = $(() => [o.wrapClass, r.e("wrap"), {[r.em("wrap", "hidden-default")]: !o.native}]),
                    P = $(() => [r.e("view"), o.viewClass]), C = () => {
                        var A;
                        u.value && ((A = p.value) == null || A.handleScroll(u.value), n("scroll", {
                            scrollTop: u.value.scrollTop,
                            scrollLeft: u.value.scrollLeft
                        }))
                    };

                function H(A, k) {
                    we(A) ? u.value.scrollTo(A) : Pe(A) && Pe(k) && u.value.scrollTo(A, k)
                }

                const D = A => {
                    Pe(A) && (u.value.scrollTop = A)
                }, U = A => {
                    Pe(A) && (u.value.scrollLeft = A)
                }, R = () => {
                    if (!u.value) return;
                    const A = u.value.offsetHeight - lo, k = u.value.offsetWidth - lo,
                        _ = A ** 2 / u.value.scrollHeight, y = k ** 2 / u.value.scrollWidth, K = Math.max(_, o.minSize),
                        E = Math.max(y, o.minSize);
                    h.value = _ / (A - _) / (K / (A - K)), m.value = y / (k - y) / (E / (k - E)), d.value = K + lo < A ? `${K}px` : "", f.value = E + lo < k ? `${E}px` : ""
                };
                return $e(() => o.noresize, A => {
                    A ? (s == null || s(), l == null || l()) : ({stop: s} = ef(c, R), l = Zt("resize", R))
                }, {immediate: !0}), $e(() => [o.maxHeight, o.height], () => {
                    o.native || De(() => {
                        var A;
                        R(), u.value && ((A = p.value) == null || A.handleScroll(u.value))
                    })
                }), et(_f, pt({scrollbarElement: a, wrapElement: u})), ht(() => {
                    o.native || De(() => {
                        R()
                    })
                }), ec(() => R()), t({
                    wrapRef: u,
                    update: R,
                    scrollTo: H,
                    setScrollTop: D,
                    setScrollLeft: U,
                    handleScroll: C
                }), (A, k) => (w(), T("div", {
                    ref_key: "scrollbarRef",
                    ref: a,
                    class: x(i(r).b())
                }, [G("div", {
                    ref_key: "wrapRef",
                    ref: u,
                    class: x(i(S)),
                    style: Ie(i(v)),
                    onScroll: C
                }, [(w(), Me(gn(A.tag), {
                    ref_key: "resizeRef",
                    ref: c,
                    class: x(i(P)),
                    style: Ie(A.viewStyle)
                }, {
                    default: ke(() => [ie(A.$slots, "default")]),
                    _: 3
                }, 8, ["class", "style"]))], 38), A.native ? de("v-if", !0) : (w(), Me(xw, {
                    key: 0,
                    ref_key: "barRef",
                    ref: p,
                    height: d.value,
                    width: f.value,
                    always: A.always,
                    "ratio-x": m.value,
                    "ratio-y": h.value,
                    thickness: A.thickness
                }, null, 8, ["height", "width", "always", "ratio-x", "ratio-y", "thickness"]))], 2))
            }
        });
    var Aw = ge(Ow, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/scrollbar/src/scrollbar.vue"]]);
    const Ql = Ke(Aw), Iw = X({name: "VsCardGroup"}), Mw = X({
        ...Iw, setup(e) {
            const t = me("card"), n = ee(), o = ee({scrollTop: 0, scrollLeft: 0}),
                r = ({scrollTop: a, scrollLeft: u}) => {
                    o.value = {scrollTop: a, scrollLeft: u}
                }, s = () => {
                    const a = n.value;
                    a.wrapRef.style.scrollBehavior = "smooth", a.scrollTo(o.value.scrollLeft + a.wrapRef.clientWidth, 0), a.wrapRef.style.scrollBehavior = "unset"
                }, l = () => {
                    const a = n.value;
                    a.wrapRef.style.scrollBehavior = "smooth", a.scrollTo(o.value.scrollLeft - a.wrapRef.clientWidth, 0), a.wrapRef.style.scrollBehavior = "unset"
                };
            return (a, u) => (w(), T("div", {class: x(i(t).e("group"))}, [G("button", {
                class: x(i(t).em("group", "prev")),
                onClick: l
            }, [fe(i(Qo))], 2), fe(i(Ql), {
                ref_key: "scrollbarRef",
                ref: n,
                always: "",
                "view-class": i(t).em("group", "cards"),
                onScroll: r
            }, {
                default: ke(() => [ie(a.$slots, "default")]),
                _: 3
            }, 8, ["view-class"]), G("div", {class: x(i(t).em("group", "space"))}, null, 2), G("button", {
                class: x(i(t).em("group", "next")),
                onClick: s
            }, [fe(i(Qo))], 2)], 2))
        }
    });
    var If = ge(Mw, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/card/src/card-group.vue"]]);
    const Bw = Ke(gw, {CardGroup: If}), Lw = xt(If), Rw = be({
            color: Ze,
            modelValue: {type: [Boolean, String, Number], default: void 0},
            value: {type: [String, Boolean, Number, Object]},
            id: {type: String, default: null},
            indeterminate: Boolean,
            checked: Boolean,
            checkedForce: Boolean,
            disabled: Boolean,
            loading: Boolean,
            label: String,
            labelBefore: Boolean,
            lineThrough: Boolean,
            name: {type: String, default: void 0}
        }), Nw = {[Re]: e => Se(e) || Pe(e) || at(e), change: e => Se(e) || Pe(e) || at(e)},
        Vw = (e, {model: t, isLimitExceeded: n, hasOwnLabel: o, isDisabled: r}) => {
            const {emit: s} = bt();

            function l(f) {
                return f === e.value || f === !0
            }

            function a(f, d) {
                s("change", l(f), d)
            }

            function u(f) {
                if (n.value) return;
                const d = f.target;
                s("change", l(d.checked), f)
            }

            async function c(f) {
                n.value || !o.value && !r.value && (f.composedPath().some(h => h.tagName === "LABEL") || (t.value = l(t.value === !1), await De(), a(t.value, f)))
            }

            return {handleChange: u, onClickRoot: c}
        }, Dw = e => {
            const t = ee(!1), {emit: n} = bt(), o = Ae(Wl, void 0), r = $(() => Fr(o) === !1), s = ee(!1);
            return {
                model: $({
                    get() {
                        var a, u;
                        return r.value ? (a = o == null ? void 0 : o.modelValue) == null ? void 0 : a.value : (u = e.modelValue) != null ? u : t.value
                    }, set(a) {
                        var u, c;
                        if (r.value && ce(a)) {
                            s.value = ((u = o == null ? void 0 : o.max) == null ? void 0 : u.value) !== void 0 && a.length > (o == null ? void 0 : o.max.value), s.value === !1 && ((c = o == null ? void 0 : o.changeEvent) == null || c.call(o, a));
                            return
                        }
                        let f = a;
                        a && e.value && (f = e.value), n(Re, f), t.value = !!a
                    }
                }), isGroup: r, isLimitExceeded: s
            }
        }, Fw = (e, t, {model: n}) => {
            const o = ee(!1), r = $(() => {
                const c = n.value;
                return at(c) ? c : ce(c) ? we(e.value) ? c.map(Be).some(f => At(f, e.value)) : c.map(Be).includes(e.value) : c != null ? c === e.value : e.checkedForce ? !0 : !!c
            }), s = $(() => !!(t.default || e.label)), l = Ae(Wl, void 0), a = $(() => {
                var c, f;
                const d = (c = l == null ? void 0 : l.max) == null ? void 0 : c.value,
                    p = (f = l == null ? void 0 : l.min) == null ? void 0 : f.value;
                return !Fr(d) && n.value.length >= d && !r.value || !Fr(p) && n.value.length <= p && r.value
            }), u = $_($(() => (l == null ? void 0 : l.disabled.value) || a.value));
            return {isChecked: r, isFocused: o, isDisabled: u, isLimitDisabled: a, hasOwnLabel: s}
        }, Hw = (e, {model: t}) => {
            e.checked && (ce(t.value) && !t.value.includes(e.value) ? t.value.push(e.value) : t.value = e.value || !0)
        }, jw = (e, t) => {
            const {model: n, isLimitExceeded: o} = Dw(e), {
                isDisabled: r,
                isFocused: s,
                isChecked: l,
                hasOwnLabel: a
            } = Fw(e, t, {model: n}), {handleChange: u, onClickRoot: c} = Vw(e, {
                model: n,
                isLimitExceeded: o,
                hasOwnLabel: a,
                isDisabled: r
            });
            return Hw(e, {model: n}), {
                isChecked: l,
                isDisabled: r,
                isFocused: s,
                hasOwnLabel: a,
                model: n,
                handleChange: u,
                onClickRoot: c
            }
        }, zw = ["id", "value", "name", "disabled"], Kw = ["for"], Uw = X({inheritAttrs: !1, name: "VsCheckbox"}), Ww = X({
            ...Uw, props: Rw, emits: Nw, setup(e) {
                var t;
                const n = e, o = Yn(), r = me("checkbox"), s = (t = n.id) != null ? t : cs(), {
                        isChecked: l,
                        isDisabled: a,
                        model: u,
                        hasOwnLabel: c,
                        onClickRoot: f,
                        handleChange: d
                    } = jw(n, o),
                    p = $(() => [r.b(), _t(n.color), r.is("disabled", a.value), r.is("checked", l.value), r.is("label-before", n.labelBefore), r.is("loading", n.loading)]),
                    h = $(() => [r.cssVar({color: tt(n.color)})]);
                return (m, v) => (w(), T("div", {
                    class: x(i(p)),
                    style: Ie(i(h)),
                    onClick: v[2] || (v[2] = (...S) => i(f) && i(f)(...S))
                }, [G("div", {class: x(i(r).e("input"))}, [dt(G("input", rr(m.$attrs, {
                    id: i(s),
                    "onUpdate:modelValue": v[0] || (v[0] = S => Fe(u) ? u.value = S : null),
                    value: m.value,
                    name: m.name,
                    disabled: i(a),
                    type: "checkbox",
                    class: i(r).e("original"),
                    onChange: v[1] || (v[1] = (...S) => i(d) && i(d)(...S))
                }), null, 16, zw), [[bc, i(u)]]), G("div", {class: x(i(r).em("input", "mask"))}, [m.$slots.icon ? ie(m.$slots, "icon", {key: 1}) : (w(), Me(i(V1), {
                    key: 0,
                    indeterminate: m.indeterminate
                }, null, 8, ["indeterminate"]))], 2), m.loading ? (w(), Me(i(xn), {key: 0})) : (w(), T(ve, {key: 1}, [], 64))], 2), i(c) ? (w(), T("label", {
                    key: 0,
                    for: i(s),
                    class: x([i(r).e("label"), i(r).is("line-through", m.lineThrough)])
                }, [ie(m.$slots, "default"), m.$slots.default ? de("v-if", !0) : (w(), T(ve, {key: 0}, [rt(ze(m.label), 1)], 64))], 10, Kw)) : (w(), T(ve, {key: 1}, [], 64))], 6))
            }
        });
    var qw = ge(Ww, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/checkbox/src/checkbox.vue"]]);
    const Yw = be({modelValue: {type: he(Array), default: () => []}, disabled: Boolean, min: Number, max: Number}),
        Gw = {[Re]: e => ce(e), change: e => ce(e)}, Xw = X({name: "VsCheckboxGroup"}), Zw = X({
            ...Xw, props: Yw, emits: Gw, setup(e, {emit: t}) {
                const n = e, o = me("checkbox"), r = async l => {
                    t(Re, l), await De(), t("change", l)
                }, s = $({
                    get() {
                        return n.modelValue
                    }, set(l) {
                        r(l)
                    }
                });
                return et(Wl, {
                    ...M0(Gr(n), ["min", "max", "disabled"]),
                    modelValue: s,
                    changeEvent: r
                }), (l, a) => (w(), T("div", {class: x(i(o).b("group"))}, [ie(l.$slots, "default")], 2))
            }
        });
    var Mf = ge(Zw, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/checkbox/src/checkbox-group.vue"]]);
    const Jw = Ke(qw, {CheckboxGroup: Mf}), Qw = xt(Mf), eC = be({
        span: {type: Number, default: 12},
        offset: {type: Number, default: 0},
        pull: {type: Number, default: 0},
        push: {type: Number, default: 0},
        xs: {type: he([Number, Object]), default: () => Ht({})},
        sm: {type: he([Number, Object]), default: () => Ht({})},
        md: {type: he([Number, Object]), default: () => Ht({})},
        lg: {type: he([Number, Object]), default: () => Ht({})},
        xl: {type: he([Number, Object]), default: () => Ht({})}
    }), tC = X({name: "VsCol"}), nC = X({
        ...tC, props: eC, setup(e) {
            const t = e, n = me("col"), {gutter: o} = Ae(bf, {gutter: $(() => 0)}), r = $(() => {
                const l = [];
                return ["span", "offset", "pull", "push"].forEach(c => {
                    const f = t[c];
                    Pe(f) && (c === "span" ? l.push(n.b(`${t[c]}`)) : f > 0 && l.push(n.b(`${c}-${t[c]}`)))
                }), ["xs", "sm", "md", "lg", "xl"].forEach(c => {
                    Pe(t[c]) ? l.push(n.b(`${c}-${t[c]}`)) : we(t[c]) && Object.entries(t[c]).forEach(([f, d]) => {
                        l.push(f !== "span" ? n.b(`${c}-${f}-${d}`) : n.b(`${c}-${d}`))
                    })
                }), o.value && l.push(n.is("guttered")), [n.b(), l]
            }), s = $(() => {
                const l = {};
                return o.value && (l.paddingLeft = l.paddingRight = `${o.value / 2}px`), l
            });
            return (l, a) => (w(), T("div", {class: x(i(r)), style: Ie(i(s))}, [ie(l.$slots, "default")], 6))
        }
    });
    var oC = ge(nC, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/col/src/col.vue"]]);
    const rC = Ke(oC), sC = be({
        modelValue: {type: Boolean, default: !1},
        color: {...Ze, default: "primary"},
        overlayBlur: {default: !1, type: Boolean},
        beforeClose: {type: he(Function)},
        loading: {default: !1, type: Boolean},
        fullScreen: {default: !1, type: Boolean},
        notClose: {default: !1, type: Boolean},
        preventClose: {default: !1, type: Boolean},
        notPadding: {default: !1, type: Boolean},
        lockScroll: {default: !1, type: Boolean},
        shape: {type: String, values: ["square", "rounded"], default: "rounded"},
        autoWidth: {default: !1, type: Boolean},
        scroll: {default: !1, type: Boolean},
        notCenter: {default: !1, type: Boolean},
        width: {default: null, type: String},
        overflowHidden: Boolean,
        blur: Boolean
    }), lC = {open: () => !0, opened: () => !0, close: () => !0, closed: () => !0, [Re]: e => at(e)}, aC = (e, t) => {
        const n = ee(!1), o = ee(!1), r = ee(!1), s = me("dialog"), {nextZIndex: l} = Gl(), a = ee(l()), u = () => {
            t("opened")
        }, c = () => {
            t("close")
        }, f = () => {
            t("closed"), t(Re, !1)
        }, d = () => {
            lt && (o.value = !0)
        }, p = () => {
            o.value = !1
        }, h = () => {
            d()
        }, m = () => {
            const C = H => {
                H || (r.value = !0, o.value = !1)
            };
            e.beforeClose ? e.beforeClose(C) : p()
        }, v = () => {
            if (e.preventClose) {
                n.value = !0, D0(() => n.value = !1, 300);
                return
            }
            m()
        };
        e.lockScroll && z_(o), $e(() => e.modelValue, C => {
            C ? (r.value = !1, n.value = !0, h(), a.value = l(), e.lockScroll && (document.body.style.overflow = "hidden"), De(() => {
                t("open")
            })) : (n.value = !1, e.lockScroll && (document.body.style.overflow = ""), o.value && m())
        });
        const S = $(() => [s.b("original"), _t(e.color), s.m(e.shape), {
            [s.m("rebound")]: n.value,
            [s.m("not-padding")]: e.notPadding,
            [s.m("auto-width")]: e.autoWidth,
            [s.m("scroll")]: e.scroll,
            [s.m("loading")]: e.loading,
            [s.m("not-center")]: e.notCenter
        }]), P = $(() => ({width: e.width, ...s.cssVar({color: tt(e.color)})}));
        return ht(() => {
            e.modelValue && (o.value = !0, h())
        }), {
            afterEnter: u,
            afterLeave: f,
            beforeLeave: c,
            handleClose: v,
            close: m,
            doClose: p,
            zIndex: a,
            closed: r,
            visible: o,
            dialogKls: S,
            dialogStyles: P
        }
    }, iC = e => {
        it({
            from: "overflowHidden",
            scope: "vs-dialog",
            version: "v0.1.0",
            type: "Prop",
            ref: "https://vuesax.space/components/dialog#lockScroll",
            replacement: "lockScroll"
        }, $(() => !!e.overflowHidden))
    }, uC = X({name: "VsDialog"}), cC = X({
        ...uC, props: sC, emits: lC, setup(e, {expose: t, emit: n}) {
            const o = e;
            Ef();
            const {selector: r} = Jl(), s = me("dialog");
            iC(o);
            const {
                visible: l,
                zIndex: a,
                dialogKls: u,
                dialogStyles: c,
                close: f,
                afterEnter: d,
                afterLeave: p,
                beforeLeave: h,
                handleClose: m
            } = aC(o, n);
            U_({handleClose: m}, l);
            const v = Y_(m), S = $(() => [s.b(), s.is("full-screen", o.fullScreen), s.is("blur", o.overlayBlur)]);
            return t({visible: l, close: f}), (P, C) => (w(), Me(fc, {to: i(r)}, [fe(Lt, {
                name: i(s).b(),
                onAfterEnter: i(d),
                onAfterLeave: i(p),
                onBeforeLeave: i(h)
            }, {
                default: ke(() => [i(l) ? (w(), T("div", {
                    key: 0,
                    class: x(i(S)),
                    style: Ie({zIndex: i(a)}),
                    onClick: C[1] || (C[1] = (...H) => i(v).onClick && i(v).onClick(...H)),
                    onMousedown: C[2] || (C[2] = (...H) => i(v).onMousedown && i(v).onMousedown(...H)),
                    onMouseup: C[3] || (C[3] = (...H) => i(v).onMouseup && i(v).onMouseup(...H))
                }, [G("div", {style: Ie(i(c)), class: x(i(u))}, [P.loading ? (w(), T("div", {
                    key: 0,
                    class: x(i(s).e("loading"))
                }, [fe(i(xn))], 2)) : (w(), T(ve, {key: 1}, [], 64)), P.notClose ? (w(), T(ve, {key: 3}, [], 64)) : (w(), T("button", {
                    key: 2,
                    class: x(i(s).e("close")),
                    onClick: C[0] || (C[0] = (...H) => i(f) && i(f)(...H))
                }, [fe(i(So), {hover: "x"})], 2)), P.$slots.header ? (w(), T("div", {
                    key: 4,
                    class: x(i(s).e("header"))
                }, [ie(P.$slots, "header")], 2)) : (w(), T(ve, {key: 5}, [], 64)), G("div", {class: x([i(s).e("content"), {notFooter: !P.$slots.footer}])}, [ie(P.$slots, "default")], 2), P.$slots.footer ? (w(), T("div", {
                    key: 6,
                    class: x(i(s).e("footer"))
                }, [ie(P.$slots, "footer")], 2)) : (w(), T(ve, {key: 7}, [], 64))], 6)], 38)) : de("v-if", !0)]), _: 3
            }, 8, ["name", "onAfterEnter", "onAfterLeave", "onBeforeLeave"])], 8, ["to"]))
        }
    });
    var fC = ge(cC, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/dialog/src/dialog.vue"]]);
    const dC = Ke(fC), pC = be({
            clearable: {type: Boolean, default: !1},
            color: Ze,
            disabled: Boolean,
            iconAfter: Boolean,
            id: {type: String, default: null},
            inputStyle: {type: String, values: ["border", "shadow", "transparent"], default: null},
            labelFloat: {type: Boolean, default: !1},
            label: {type: String, default: null},
            loading: Boolean,
            modelValue: {type: he([String, Number]), default: ""},
            placeholder: {type: String, default: null},
            progress: Number,
            shape: {type: String, values: ["rounded", "square"], default: "rounded"},
            showPassword: {type: Boolean, default: !1},
            state: Ze,
            textWhite: Boolean,
            type: {type: String, default: "text"},
            wrapClasses: {type: String},
            wrapStyles: {type: he([String, Object, Array])},
            block: Boolean,
            border: Boolean,
            labelPlaceholder: String,
            shadow: Boolean,
            square: Boolean,
            transparent: Boolean
        }), hC = {
            [Re]: e => Se(e) || Pe(e) || Cn(e),
            clickIcon: e => e instanceof Event,
            mouseleave: e => e instanceof MouseEvent,
            mouseenter: e => e instanceof MouseEvent,
            clear: () => !0,
            input: e => !Cn(e),
            change: e => Se(e),
            focus: e => e instanceof FocusEvent,
            blur: e => e instanceof FocusEvent,
            keydown: e => e instanceof Event
        }, vC = (e, {hovering: t, focused: n}) => {
            const {emit: o} = bt(), r = () => {
                e.disabled || e.loading || (o(Re, ""), o("change", ""), o("clear"), o("input", ""))
            }, s = $(() => e.clearable && !e.disabled && !e.loading && String(e.modelValue) && (n.value || t.value));
            return {clear: r, showClear: s}
        }, mC = ({inputRef: e}) => {
            const {emit: t} = bt(), n = ee(!1);
            return {
                handleInput: d => {
                    t("input", d)
                }, handleChange: d => {
                    t("change", d.target.value)
                }, blur: () => {
                    var d;
                    return (d = e.value) == null ? void 0 : d.blur()
                }, handleBlur: d => {
                    n.value = !1, t("blur", d)
                }, focused: n, focus: async () => {
                    var d;
                    await De(), (d = e.value) == null || d.focus()
                }, handleFocus: d => {
                    n.value = !0, t("focus", d)
                }, handleKeydown: d => {
                    t("keydown", d)
                }, select: () => {
                    var d;
                    return (d = e.value) == null ? void 0 : d.select()
                }
            }
        }, gC = (e, t) => {
            const n = $({
                get: () => e.modelValue, set: A => {
                    e.disabled || e.loading || t(Re, A)
                }
            }), o = ee(!1), r = wl(), s = ee(!1), {
                blur: l,
                handleBlur: a,
                handleInput: u,
                handleChange: c,
                focused: f,
                focus: d,
                handleFocus: p,
                select: h,
                handleKeydown: m
            } = mC({inputRef: r}), {clear: v, showClear: S} = vC(e, {hovering: o, focused: f}), P = A => {
                o.value = !1, t("mouseleave", A)
            }, C = A => {
                o.value = !0, t("mouseenter", A)
            }, H = $(() => e.showPassword ? s.value ? "text" : "password" : e.type), D = A => {
                d(), t("clickIcon", A)
            }, U = $(() => e.showPassword && !e.disabled && !e.loading && String(e.modelValue));
            return {
                model: n,
                inputType: H,
                isVisiblePassword: s,
                inputRef: r,
                isShowPassword: U,
                focused: f,
                hovering: o,
                handleInput: u,
                focus: d,
                handleFocus: p,
                handleKeydown: m,
                blur: l,
                handleBlur: a,
                handleChange: c,
                select: h,
                clickIcon: D,
                handleShowPassword: () => {
                    e.disabled || e.loading || (s.value = !s.value)
                },
                handleMouseLeave: P,
                handleMouseEnter: C,
                clear: v,
                showClear: S
            }
        }, yC = ["id", "type", "disabled"], bC = ["for"], _C = ["for"], wC = X({inheritAttrs: !1, name: "VsInput"}),
        CC = X({
            ...wC, props: pC, emits: hC, setup(e, {expose: t, emit: n}) {
                var o;
                const r = e, s = Yn();
                it({
                    from: "border",
                    type: "Prop",
                    version: "VuesaxAlpha",
                    scope: "vs-input",
                    ref: "https://vuesax.space/components/input#style",
                    replacement: "inputStyle"
                }, $(() => r.border)), it({
                    from: "shadow",
                    type: "Prop",
                    version: "VuesaxAlpha",
                    scope: "vs-input",
                    ref: "https://vuesax.space/components/input#style",
                    replacement: "inputStyle"
                }, $(() => r.shadow)), it({
                    from: "transparent",
                    type: "Prop",
                    version: "VuesaxAlpha",
                    scope: "vs-input",
                    ref: "https://vuesax.space/components/input#style",
                    replacement: "inputStyle"
                }, $(() => r.transparent)), it({
                    from: "labelPlaceholder",
                    type: "Prop",
                    version: "VuesaxAlpha",
                    scope: "vs-input",
                    ref: "https://vuesax.space/components/input#label",
                    replacement: "labelFloat"
                }, $(() => !!r.labelPlaceholder)), it({
                    from: "block",
                    type: "Prop",
                    version: "VuesaxAlpha",
                    scope: "vs-input",
                    ref: "https://vuesax.space/components/input",
                    replacement: "parent style"
                }, $(() => !!r.block)), it({
                    from: "square",
                    type: "Prop",
                    version: "VuesaxAlpha",
                    scope: "vs-input",
                    ref: "https://vuesax.space/components/input#shape",
                    replacement: "shape"
                }, $(() => !!r.square));
                const l = me("input"), a = (o = r.id) != null ? o : cs(),
                    u = ["success", "warn", "danger", "primary", "dark"], {
                        model: c,
                        inputType: f,
                        isVisiblePassword: d,
                        isShowPassword: p,
                        focused: h,
                        hovering: m,
                        inputRef: v,
                        blur: S,
                        handleBlur: P,
                        handleKeydown: C,
                        focus: H,
                        handleFocus: D,
                        handleChange: U,
                        select: R,
                        clickIcon: A,
                        handleShowPassword: k,
                        handleMouseLeave: _,
                        handleMouseEnter: y,
                        handleInput: K,
                        showClear: E,
                        clear: M
                    } = gC(r, n),
                    I = $(() => [_t(r.color), l.b(), r.wrapClasses, {[l.is(r.inputStyle)]: !!r.inputStyle}, l.is("block", r.block), l.is("focus", h.value), l.is("hovering", m.value), l.is(r.shape), l.is("text-white", r.textWhite), {[l.m(`state-${r.state}`)]: !!r.state}, {[l.m("has-label")]: r.label || r.labelFloat}, {[l.m("has-color")]: r.color}, {[l.m("has-icon")]: s.icon}, {[l.m("icon-after")]: r.iconAfter}, {[l.m("icon-eye")]: r.showPassword}, {[l.m("icon-clearable")]: E.value}]),
                    B = $(() => [l.cssVar({color: tt(r.color)}), r.wrapStyles]), W = $(() => {
                        const V = yo("progress");
                        return !V.value || V.value <= 33 ? "danger" : V.value <= 66 ? "warn" : "success"
                    });
                return t({
                    focus: H,
                    blur: S,
                    select: R,
                    clear: M,
                    inputRef: v
                }), (V, j) => (w(), T("div", {
                    class: x(i(I)),
                    style: Ie(i(B))
                }, [G("div", {
                    class: x([i(l).e("wrapper"), i(l).is("disabled", V.disabled)]),
                    onMouseenter: j[13] || (j[13] = (...Z) => i(y) && i(y)(...Z)),
                    onMouseleave: j[14] || (j[14] = (...Z) => i(_) && i(_)(...Z))
                }, [dt(G("input", rr(V.$attrs, {
                    id: i(a),
                    ref_key: "inputRef",
                    ref: v,
                    "onUpdate:modelValue": j[0] || (j[0] = Z => Fe(c) ? c.value = Z : null),
                    type: i(f),
                    disabled: V.disabled,
                    class: [i(l).e("original"), i(l).is("disabled", V.disabled)],
                    placeholder: "",
                    onInput: j[1] || (j[1] = (...Z) => i(K) && i(K)(...Z)),
                    onFocus: j[2] || (j[2] = (...Z) => i(D) && i(D)(...Z)),
                    onBlur: j[3] || (j[3] = (...Z) => i(P) && i(P)(...Z)),
                    onChange: j[4] || (j[4] = (...Z) => i(U) && i(U)(...Z)),
                    onKeydown: j[5] || (j[5] = (...Z) => i(C) && i(C)(...Z))
                }), null, 16, yC), [[Mh, i(c)]]), V.placeholder || V.labelFloat ? (w(), T("label", {
                    key: 0,
                    for: i(a),
                    class: x([i(l).e("placeholder"), {[i(l).em("placeholder", "float")]: V.labelFloat}, {[i(l).em("placeholder", "hidden")]: i(c) || i(f) == "date" || i(f) == "time"}]),
                    onMousedown: j[6] || (j[6] = $t((...Z) => i(qe) && i(qe)(...Z), ["prevent"]))
                }, ze(V.placeholder || V.label), 43, bC)) : (w(), T(ve, {key: 1}, [], 64)), V.labelFloat ? (w(), T(ve, {key: 3}, [], 64)) : (w(), T("label", {
                    key: 2,
                    for: i(a),
                    class: x([i(l).e("label")]),
                    onMousedown: j[7] || (j[7] = $t((...Z) => i(qe) && i(qe)(...Z), ["prevent"]))
                }, ze(V.label), 43, _C)), V.$slots.icon ? (w(), T("span", {
                    key: 4,
                    class: x([i(l).e("icon")]),
                    onMousedown: j[8] || (j[8] = $t((...Z) => i(qe) && i(qe)(...Z), ["prevent"])),
                    onClick: j[9] || (j[9] = (...Z) => i(A) && i(A)(...Z))
                }, [ie(V.$slots, "icon")], 34)) : (w(), T(ve, {key: 5}, [], 64)), V.loading ? (w(), T("div", {
                    key: 6,
                    class: x(i(l).e("loading"))
                }, [fe(i(xn))], 2)) : (w(), T(ve, {key: 7}, [], 64)), fe(Lt, {name: "clearable-transition"}, {
                    default: ke(() => [i(E) ? (w(), T("div", {
                        key: 0,
                        class: x(i(l).e("clearable"))
                    }, [fe(i(So), {
                        onClick: i(M),
                        onMousedown: $t(i(qe), ["prevent"])
                    }, null, 8, ["onClick", "onMousedown"])], 2)) : de("v-if", !0)]), _: 1
                }), fe(Lt, {name: "clearable-transition"}, {
                    default: ke(() => [i(p) ? (w(), T("span", {
                        key: 0,
                        class: x(i(l).em("icon", "password")),
                        onClick: j[11] || (j[11] = (...Z) => i(k) && i(k)(...Z)),
                        onMousedown: j[12] || (j[12] = $t((...Z) => i(qe) && i(qe)(...Z), ["prevent"]))
                    }, [G("i", {
                        class: x(["bx", i(d) ? "bx-show-alt" : "bx-hide"]),
                        onMousedown: j[10] || (j[10] = $t((...Z) => i(qe) && i(qe)(...Z), ["prevent"]))
                    }, null, 34)], 34)) : de("v-if", !0)]), _: 1
                }), G("div", {class: x(i(l).e("affects"))}, [G("div", {class: x(i(l).em("affects", "1"))}, null, 2), G("div", {class: x(i(l).em("affects", "2"))}, null, 2)], 2)], 34), V.progress ? (w(), T("div", {
                    key: 0,
                    class: x([i(l).e("progress"), i(l).em("progress", i(W))])
                }, [G("div", {
                    class: x(i(l).em("progress", "bar")),
                    style: Ie({width: `${V.progress}%`})
                }, null, 6)], 2)) : (w(), T(ve, {key: 1}, [], 64)), (w(), T(ve, null, zn(u, Z => fe(i(er), {key: Z}, {
                    default: ke(() => [V.$slots[`message-${Z}`] ? (w(), T("div", {
                        key: 0,
                        class: x([i(l).e("message"), i(l).em("message", Z)])
                    }, [ie(V.$slots, `message-${Z}`)], 2)) : de("v-if", !0)]), _: 2
                }, 1024)), 64))], 6))
            }
        });
    var $C = ge(CC, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/input/src/input.vue"]]);
    const Bf = Ke($C), Lf = Symbol("navbar-register"), Rf = Symbol("navbar"), Nf = Symbol("navbar-register"), SC = be({
        modelValue: {type: String},
        color: Ze,
        fixed: {type: Boolean},
        shadow: {type: Boolean},
        shadowScroll: {type: Boolean},
        hideScroll: {type: Boolean},
        textWhite: {type: Boolean},
        square: {type: Boolean},
        paddingScroll: {type: Boolean},
        notLine: {type: Boolean},
        leftCollapsed: {type: Boolean},
        centerCollapsed: {type: Boolean},
        rightCollapsed: {type: Boolean},
        targetScroll: {type: String}
    }), xC = {collapsed: e => at(e), [Re]: e => Se(e)}, kC = X({name: "VsNavbar"}), TC = X({
        ...kC, props: SC, emits: xC, setup(e, {emit: t}) {
            const n = e, o = me("navbar"), r = ee(), s = ee(), l = ee(), a = ee(), u = pt(new Set), c = pt({
                    scrollTop: 0,
                    collapsedWidth: 0,
                    collapsedForced: !1,
                    hidden: !1,
                    shadowActive: !1,
                    paddingScrollActive: !1,
                    lineNotTransition: !1
                }),
                f = $(() => [o.b(), _t(n.color), o.is("fixed", n.fixed), o.is("shadow", n.shadow), o.is("not-line", n.notLine), o.is("hidden", c.hidden), o.is("shadow-active", c.shadowActive), o.is("text-white", n.textWhite), o.is("padding-scroll", n.paddingScroll), o.is("padding-scroll-active", c.paddingScrollActive), o.is("square", n.square)]),
                d = $(() => o.cssVar({color: tt(n.color)})), p = () => {
                    const C = n.targetScroll ? document.querySelector(n.targetScroll).scrollTop : window.pageYOffset;
                    n.hideScroll && (Math.sign(C - c.scrollTop) === 1 ? c.hidden = !0 : c.hidden = !1), n.shadowScroll && (C > 0 ? c.shadowActive = !0 : c.shadowActive = !1), n.paddingScroll && (C > 0 ? c.paddingScrollActive = !0 : c.paddingScrollActive = !1), c.scrollTop = C
                }, h = () => {
                    if (n.hideScroll || n.shadowScroll || n.paddingScroll) if (n.targetScroll) {
                        const C = document.querySelector(n.targetScroll);
                        C == null || C.addEventListener("scroll", p)
                    } else window.addEventListener("scroll", p)
                }, m = () => {
                    const C = r.value;
                    (n.leftCollapsed || n.centerCollapsed || n.rightCollapsed) && C.offsetWidth < c.collapsedWidth && (c.collapsedForced = !0), c.collapsedForced ? t("collapsed", !0) : t("collapsed", !1), C.offsetWidth < c.collapsedWidth ? t("collapsed", !0) : (t("collapsed", !1), c.collapsedForced = !1)
                }, v = $(() => n.leftCollapsed ? !c.collapsedForced : !0),
                S = $(() => n.rightCollapsed ? !c.collapsedForced : !0),
                P = $(() => n.centerCollapsed ? !c.collapsedForced : !0);
            return $e([() => n.hideScroll, () => n.paddingScroll, () => n.shadowScroll], h), et(Rf, {modelValue: $(() => n.modelValue)}), et(Lf, C => (u.add(C), {
                unregister: () => u.delete(C),
                onClick: () => t(Re, C),
                isActive: $(() => n.modelValue === C)
            })), ht(() => {
                De(() => {
                    if (r.value && s.value && a.value && l.value) {
                        const C = s.value, H = a.value, D = l.value, U = r.value, R = 120 + 30;
                        c.collapsedWidth = C.offsetWidth + H.offsetWidth + D.offsetWidth + R, U.offsetWidth < c.collapsedWidth && (c.collapsedForced = !0, t("collapsed", !0), m())
                    }
                }), h(), Zt(window, "resize", m)
            }), (C, H) => (w(), T("div", {
                ref_key: "navbarRef",
                ref: r,
                class: x(i(f)),
                style: Ie(i(d))
            }, [G("div", {class: x(i(o).e("content"))}, [i(v) ? (w(), T("div", {
                key: 0,
                ref_key: "navbarLeftRef",
                ref: s,
                class: x(i(o).e("left"))
            }, [ie(C.$slots, "left")], 2)) : de("v-if", !0), i(P) ? (w(), T("div", {
                key: 1,
                ref_key: "navbarCenterRef",
                ref: a,
                class: x(i(o).e("center"))
            }, [ie(C.$slots, "default")], 2)) : de("v-if", !0), i(S) ? (w(), T("div", {
                key: 2,
                ref_key: "navbarRightRef",
                ref: l,
                class: x(i(o).e("right"))
            }, [ie(C.$slots, "right")], 2)) : de("v-if", !0)], 2)], 6))
        }
    });
    var EC = ge(TC, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/navbar/src/navbar.vue"]]),
        ou;
    (function (e) {
        e.pop = "pop", e.push = "push"
    })(ou || (ou = {}));
    var ru;
    (function (e) {
        e.back = "back", e.forward = "forward", e.unknown = ""
    })(ru || (ru = {}));
    var su;
    (function (e) {
        e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
    })(su || (su = {}));
    const PC = Symbol("");

    function Vf() {
        return Ae(PC)
    }

    const OC = be({
        active: {type: Boolean},
        to: {type: he([String, Object])},
        link: {type: he([Object])},
        id: {type: String, required: !0}
    }), AC = X({name: "VsNavbarItem"}), IC = X({
        ...AC, props: OC, setup(e) {
            const t = e, n = Ae(Lf), o = Ae(Nf);
            n || Sn("navbar-item", "need to call inside navbar component");
            const r = Vf(), {unregister: s, onClick: l, isActive: a} = n(t.id), u = o == null ? void 0 : o(t.id),
                c = me("navbar-item"), f = () => {
                    l(), t.to ? r.push(t.to) : t.link && window.open(t.link.path, t.link.target)
                };
            return qn(() => {
                s(), u == null || u.unregister()
            }), (d, p) => (w(), T("button", {
                class: x([i(c).b(), i(c).is("active", d.active || i(a))]),
                onClick: f
            }, [ie(d.$slots, "default", {}, () => {
                var h;
                return [rt(ze((h = d.link) == null ? void 0 : h.text), 1)]
            })], 2))
        }
    });
    var Df = ge(IC, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/navbar/src/navbar-item.vue"]]);
    const MC = X({name: "VsNavbarGroup"}), BC = X({
        ...MC, setup(e) {
            const {modelValue: t} = Ae(Rf), n = me("navbar-group"), o = pt(new Set), r = $(() => o.has(`${t.value}`));
            return et(Nf, s => (o.add(s), {unregister: () => o.delete(s)})), (s, l) => (w(), T("div", {class: x([i(n).b(), i(n).is("active", i(r))])}, [G("div", {class: x(i(n).e("text"))}, [ie(s.$slots, "default")], 2), G("div", {class: x(i(n).e("items"))}, [ie(s.$slots, "items")], 2)], 2))
        }
    });
    var Ff = ge(BC, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/navbar/src/navbar-group.vue"]]);
    const LC = Ke(EC, {NavbarItem: Df, NavbarGroup: Ff}), RC = xt(Df), NC = xt(Ff);
    var xo = (e, t) => {
        let n = e.__vccOpts || e;
        for (let [o, r] of t) n[o] = r;
        return n
    }, VC = {name: "ChevronDown"}, DC = {viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg"}, FC = G("path", {
        d: "M12 16.8c-.7 0-1.4-.27-1.93-.8L3.55 9.48a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.48.48 1.26.48 1.74 0l6.52-6.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L13.93 16c-.53.53-1.23.8-1.93.8Z",
        fill: "currentColor"
    }, null, -1), HC = [FC];

    function jC(e, t, n, o, r, s) {
        return w(), T("svg", DC, HC)
    }

    var zC = xo(VC, [["render", jC], ["__file", "chevron-down.vue"]]), KC = {name: "ChevronLeftDouble"},
        UC = {viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg"}, WC = G("path", {
            d: "M18.0052 20.67C17.8152 20.67 17.6252 20.6 17.4752 20.45L10.9552 13.93C9.89516 12.87 9.89516 11.13 10.9552 10.07L17.4752 3.55002C17.7652 3.26002 18.2452 3.26002 18.5352 3.55002C18.8252 3.84002 18.8252 4.32002 18.5352 4.61002L12.0152 11.13C11.5352 11.61 11.5352 12.39 12.0152 12.87L18.5352 19.39C18.8252 19.68 18.8252 20.16 18.5352 20.45C18.3852 20.59 18.1952 20.67 18.0052 20.67Z",
            fill: "currentColor"
        }, null, -1), qC = G("path", {
            d: "M12.0052 20.67C11.8152 20.67 11.6252 20.6 11.4752 20.45L4.95516 13.93C3.89516 12.87 3.89516 11.13 4.95516 10.07L11.4752 3.55002C11.7652 3.26002 12.2452 3.26002 12.5352 3.55002C12.8252 3.84002 12.8252 4.32002 12.5352 4.61002L6.01516 11.13C5.53516 11.61 5.53516 12.39 6.01516 12.87L12.5352 19.39C12.8252 19.68 12.8252 20.16 12.5352 20.45C12.3852 20.59 12.1952 20.67 12.0052 20.67Z",
            fill: "currentColor"
        }, null, -1), YC = [WC, qC];

    function GC(e, t, n, o, r, s) {
        return w(), T("svg", UC, YC)
    }

    var XC = xo(KC, [["render", GC], ["__file", "chevron-left-double.vue"]]), ZC = {name: "ChevronLeft"},
        JC = {viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg"}, QC = G("path", {
            d: "M15 20.67c-.19 0-.38-.07-.53-.22l-6.52-6.52a2.74 2.74 0 0 1 0-3.86l6.52-6.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-6.52 6.52c-.48.48-.48 1.26 0 1.74l6.52 6.52c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22Z",
            fill: "currentColor"
        }, null, -1), e2 = [QC];

    function t2(e, t, n, o, r, s) {
        return w(), T("svg", JC, e2)
    }

    var n2 = xo(ZC, [["render", t2], ["__file", "chevron-left.vue"]]), o2 = {name: "ChevronRightDouble"},
        r2 = {viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg"}, s2 = G("path", {
            d: "M11.9077 20.67C11.7177 20.67 11.5277 20.6 11.3777 20.45C11.0877 20.16 11.0877 19.68 11.3777 19.39L17.8977 12.87C18.3777 12.39 18.3777 11.61 17.8977 11.13L11.3777 4.61002C11.0877 4.32002 11.0877 3.84002 11.3777 3.55002C11.6677 3.26002 12.1477 3.26002 12.4377 3.55002L18.9577 10.07C19.4677 10.58 19.7577 11.27 19.7577 12C19.7577 12.73 19.4777 13.42 18.9577 13.93L12.4377 20.45C12.2877 20.59 12.0977 20.67 11.9077 20.67Z",
            fill: "currentColor"
        }, null, -1), l2 = G("path", {
            d: "M5.90766 20.67C5.71766 20.67 5.52766 20.6 5.37766 20.45C5.08766 20.16 5.08766 19.68 5.37766 19.39L11.8977 12.87C12.3777 12.39 12.3777 11.61 11.8977 11.13L5.37766 4.61002C5.08766 4.32002 5.08766 3.84002 5.37766 3.55002C5.66766 3.26002 6.14766 3.26002 6.43766 3.55002L12.9577 10.07C13.4677 10.58 13.7577 11.27 13.7577 12C13.7577 12.73 13.4777 13.42 12.9577 13.93L6.43766 20.45C6.28766 20.59 6.09766 20.67 5.90766 20.67Z",
            fill: "currentColor"
        }, null, -1), a2 = [s2, l2];

    function i2(e, t, n, o, r, s) {
        return w(), T("svg", r2, a2)
    }

    var u2 = xo(o2, [["render", i2], ["__file", "chevron-right-double.vue"]]), c2 = {name: "ChevronRight"},
        f2 = {viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg"}, d2 = G("path", {
            d: "M8.91 20.67c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l6.52-6.52c.48-.48.48-1.26 0-1.74L8.38 4.61a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.52 6.52c.51.51.8 1.2.8 1.93s-.28 1.42-.8 1.93l-6.52 6.52c-.15.14-.34.22-.53.22Z",
            fill: "currentColor"
        }, null, -1), p2 = [d2];

    function h2(e, t, n, o, r, s) {
        return w(), T("svg", f2, p2)
    }

    var v2 = xo(c2, [["render", h2], ["__file", "chevron-right.vue"]]), m2 = {name: "CloseCircle"},
        g2 = {viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg"}, y2 = G("path", {
            d: "M12 22.75C6.07 22.75 1.25 17.93 1.25 12S6.07 1.25 12 1.25 22.75 6.07 22.75 12 17.93 22.75 12 22.75Zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75Z",
            fill: "currentColor"
        }, null, -1), b2 = G("path", {
            d: "M9.17 15.58c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.66-5.66c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.7 15.36c-.14.15-.34.22-.53.22Z",
            fill: "currentColor"
        }, null, -1), _2 = G("path", {
            d: "M14.83 15.58c-.19 0-.38-.07-.53-.22L8.64 9.7a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l5.66 5.66c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z",
            fill: "currentColor"
        }, null, -1), w2 = [y2, b2, _2];

    function C2(e, t, n, o, r, s) {
        return w(), T("svg", g2, w2)
    }

    var $2 = xo(m2, [["render", C2], ["__file", "close-circle.vue"]]);
    const Jn = () => Ae(yf), S2 = be({nextText: {type: String, default: ""}, nextIcon: {type: Wn}}),
        x2 = ["disabled", "aria-disabled"], k2 = {key: 0}, T2 = X({name: "VsPaginationNext"}), E2 = X({
            ...T2, props: S2, setup(e) {
                const {pageCount: t, disabled: n, currentPage: o, infinite: r} = Jn(),
                    s = $(() => n.value || o.value === t.value || t.value === 0);
                return (l, a) => (w(), T("button", {
                    type: "button",
                    class: "btn-next",
                    disabled: i(s) && !i(r),
                    "aria-disabled": i(s) && !i(r)
                }, [l.nextText ? (w(), T("span", k2, ze(l.nextText), 1)) : (w(), Me(i(bo), {key: 1}, {
                    default: ke(() => [(w(), Me(gn(l.nextIcon)))]),
                    _: 1
                }))], 8, x2))
            }
        });
    var P2 = ge(E2, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/pagination/src/components/next.vue"]]);
    const O2 = be({prevText: {type: String, default: ""}, prevIcon: {type: Wn}}), A2 = ["disabled", "aria-disabled"],
        I2 = {key: 0}, M2 = X({name: "VsPaginationPrev"}), B2 = X({
            ...M2, props: O2, setup(e) {
                const {disabled: t, currentPage: n, infinite: o} = Jn(), r = $(() => t.value || n.value <= 1);
                return (s, l) => (w(), T("button", {
                    type: "button",
                    class: "btn-prev",
                    disabled: i(r) && !i(o),
                    "aria-disabled": i(r) && !i(o)
                }, [s.prevText ? (w(), T("span", I2, ze(s.prevText), 1)) : (w(), Me(i(bo), {key: 1}, {
                    default: ke(() => [(w(), Me(gn(s.prevIcon)))]),
                    _: 1
                }))], 8, A2))
            }
        });
    var L2 = ge(B2, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/pagination/src/components/prev.vue"]]);
    const cn = new Map;
    let lu;
    lt && (document.addEventListener("mousedown", e => lu = e), document.addEventListener("mouseup", e => {
        for (const t of cn.values()) for (const {documentHandler: n} of t) n(e, lu)
    }));

    function au(e, t) {
        let n = [];
        return Array.isArray(t.arg) ? n = t.arg : tl(t.arg) && n.push(t.arg), function (o, r) {
            const s = t.instance.popperRef, l = o.target, a = r == null ? void 0 : r.target, u = !t || !t.instance,
                c = !l || !a, f = e.contains(l) || e.contains(a), d = e === l,
                p = n.length && n.some(m => m == null ? void 0 : m.contains(l)) || n.length && n.includes(a),
                h = s && (s.contains(l) || s.contains(a));
            u || c || f || d || p || h || t.value(o, r)
        }
    }

    const Hf = {
            beforeMount(e, t) {
                cn.has(e) || cn.set(e, []), cn.get(e).push({documentHandler: au(e, t), bindingFn: t.value})
            }, updated(e, t) {
                cn.has(e) || cn.set(e, []);
                const n = cn.get(e), o = n.findIndex(s => s.bindingFn === t.oldValue),
                    r = {documentHandler: au(e, t), bindingFn: t.value};
                o >= 0 ? n.splice(o, 1, r) : n.push(r)
            }, unmounted(e) {
                cn.delete(e)
            }
        }, R2 = ["fixed", "absolute"], jf = be({
            animation: {type: String, default: "fade-in-linear"},
            appendTo: {type: he(String)},
            visible: {type: he(Boolean), default: null},
            teleported: {type: Boolean, default: !0},
            disabled: Boolean,
            options: {type: he(Object)},
            strategy: {type: he(String), values: R2, default: "absolute"},
            fit: Boolean,
            placement: {type: he(String), values: p_, default: "bottom"},
            zIndex: {type: Number, default: f_},
            interactivity: {type: Boolean, default: !0},
            flip: Boolean,
            windowResize: {type: Boolean, default: !0},
            windowScroll: {type: Boolean, default: !0},
            showArrow: {type: Boolean, default: !0},
            offset: {type: Number, default: 12},
            content: String,
            rawContent: Boolean,
            popperClass: {type: he([String, Array, Object])},
            popperStyle: {type: he([String, Array, Object])},
            persistent: Boolean
        }), N2 = {
            mouseenter: e => e instanceof MouseEvent,
            mouseleave: e => e instanceof MouseEvent,
            focus: () => !0,
            blur: () => !0,
            close: () => !0
        }, An = {type: he(Function)}, zf = be({
            disabled: Boolean,
            trigger: {type: he([String, Array]), default: "hover"},
            virtualRef: {type: he(Object)},
            virtualTriggering: Boolean,
            onMouseenter: An,
            onMouseleave: An,
            onClick: An,
            onKeydown: An,
            onFocus: An,
            onBlur: An,
            onContextmenu: An,
            triggerClass: {type: he([String, Array, Object])},
            triggerStyle: {type: he([String, Array, Object])}
        }), {useModelToggleProps: V2, useModelToggleEmits: D2, useModelToggle: F2} = kf("visible"), Kf = be({
            ...x_, ...jf, ...zf, ...V2,
            processBeforeOpen: {type: he(Function), default: () => !0},
            processBeforeClose: {type: he(Function), default: () => !0},
            showArrow: {type: Boolean, default: !0},
            loading: Boolean
        }), H2 = [...D2, "before-show", "show", "before-hide", "hide"], j2 = ["data-popper-placement"], z2 = ["innerHTML"],
        K2 = X({name: "VsPopper"}), U2 = X({
            ...K2, props: jf, emits: N2, setup(e) {
                const t = e, n = me("popper"), {
                        contentRef: o,
                        controlled: r,
                        open: s,
                        trigger: l,
                        updatePopper: a,
                        onOpen: u,
                        onClose: c,
                        onShow: f,
                        onHide: d,
                        onBeforeShow: p,
                        onBeforeHide: h
                    } = Ae(ql, void 0), m = ee(!1), v = $(() => t.persistent), S = $(() => i(v) ? !0 : i(s)),
                    P = $(() => t.disabled ? !1 : i(s)),
                    C = $(() => [n.b(), n.is("not-arrow", !t.showArrow), t.popperClass]),
                    H = $(() => [t.popperStyle, {position: "absolute"}, {zIndex: t.zIndex}]), D = () => {
                        a(!1)
                    }, U = () => {
                        if (i(r)) return !0
                    }, R = pn(U, () => {
                        t.interactivity && i(l) === "hover" && u()
                    }), A = pn(U, () => {
                        i(l) === "hover" && c()
                    }), k = () => {
                        d()
                    }, _ = () => {
                        p == null || p()
                    }, y = () => {
                        h == null || h()
                    };
                let K;
                const E = () => {
                    f(), K = F0($(() => jt(o)), () => {
                        if (i(r)) return;
                        i(l) !== "hover" && c()
                    })
                };
                return ht(() => {
                    $e(() => t.visible, D, {immediate: !0})
                }), $e(() => i(s), M => {
                    M || K == null || K()
                }, {flush: "post"}), $e(() => t.content, () => {
                    a()
                }), qn(() => {
                    m.value = !0
                }), (M, I) => (w(), Me(fc, {to: M.appendTo, disabled: !M.teleported}, [fe(Lt, {
                    name: M.animation,
                    onAfterLeave: k,
                    onBeforeEnter: _,
                    onAfterEnter: E,
                    onBeforeLeave: y
                }, {
                    default: ke(() => [i(S) ? dt((w(), T("div", {
                        key: 0,
                        ref_key: "contentRef",
                        ref: o,
                        class: x(i(C)),
                        style: Ie(i(H)),
                        "data-popper-placement": M.placement,
                        onMouseenter: I[0] || (I[0] = (...B) => i(R) && i(R)(...B)),
                        onMouseleave: I[1] || (I[1] = (...B) => i(A) && i(A)(...B))
                    }, [m.value ? de("v-if", !0) : (w(), T(ve, {key: 0}, [M.content ? (w(), T(ve, {key: 0}, [M.rawContent ? (w(), T("div", {
                        key: 0,
                        innerHTML: M.content
                    }, null, 8, z2)) : (w(), T(ve, {key: 1}, [rt(ze(M.content), 1)], 64))], 64)) : ie(M.$slots, "default", {key: 1})], 64))], 46, j2)), [[wn, i(P)]]) : de("v-if", !0)]),
                    _: 3
                }, 8, ["name"])], 8, ["to", "disabled"]))
            }
        });
    var W2 = ge(U2, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/popper/src/content.vue"]]);
    const q2 = "VsOnlyChild", Y2 = X({
        name: q2, setup(e, {slots: t, attrs: n}) {
            return () => {
                var o, r;
                const s = Ae(vf, void 0), l = M_((o = s == null ? void 0 : s.setForwardRef) != null ? o : qe),
                    a = (r = t.default) == null ? void 0 : r.call(t, n);
                if (!a || a.length > 1) return null;
                const u = Uf(a);
                return u ? dt(Qt(u), [[l]]) : null
            }
        }
    });

    function Uf(e) {
        if (!e) return null;
        const t = e;
        for (const n of t) {
            if (we(n)) switch (n.type) {
                case St:
                    continue;
                case or:
                case"svg":
                    return iu(n);
                case ve:
                    return Uf(n.children);
                default:
                    return n
            }
            return iu(n)
        }
        return null
    }

    function iu(e) {
        const t = me("only-child");
        return Et("span", {className: t.e("content")}, e)
    }

    const G2 = (e, t) => ce(e) ? e.includes(t) : e === t, to = (e, t, n) => o => {
        G2(i(e), t) && n(o)
    }, X2 = X({
        __name: "trigger", props: zf, setup(e) {
            const t = e, n = me("popper"), {triggerRef: o, onOpen: r, onClose: s, onToggle: l} = Ae(ql, void 0);
            I_(o);
            const a = () => {
                    if (t.disabled) return !0
                }, u = Fn(t, "trigger"), c = pn(a, to(u, "hover", r)), f = pn(a, to(u, "hover", s)),
                d = pn(a, to(u, "click", v => {
                    v.button === 0 && l(v)
                })), p = pn(a, to(u, "focus", r)), h = pn(a, to(u, "focus", s)), m = pn(a, to(u, "contextmenu", v => {
                    v.preventDefault(), l(v)
                }));
            return (v, S) => (w(), Me(i(Y2), {
                ref_key: "triggerRef",
                ref: o,
                class: x(i(n).e("trigger")),
                onMouseenter: i(c),
                onMouseleave: i(f),
                onClick: i(d),
                onFocus: i(p),
                onBlur: i(h),
                onContextmenu: i(m)
            }, {
                default: ke(() => [ie(v.$slots, "default")]),
                _: 3
            }, 8, ["class", "onMouseenter", "onMouseleave", "onClick", "onFocus", "onBlur", "onContextmenu"]))
        }
    });
    var Z2 = ge(X2, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/popper/src/trigger.vue"]]);
    const J2 = X({name: "VsPopper", inheritAttrs: !1}), Q2 = X({
        ...J2, props: Kf, emits: H2, setup(e, {expose: t, emit: n}) {
            const o = e;
            Ef();
            const {selector: r, id: s} = Jl(), l = $(() => o.appendTo || r.value), {
                    currentZIndex: a,
                    nextZIndex: u
                } = Gl(), c = $(() => a.value), f = ee(), d = ee(), p = ee(), h = ee(!1), m = ee(), {
                    show: v,
                    hide: S,
                    hasUpdateHandler: P
                } = F2({
                    indicator: h,
                    toggleReason: m,
                    processBeforeClosing: o.processBeforeClose,
                    shouldProceed: o.processBeforeOpen
                }), {onOpen: C, onClose: H} = k_({
                    showAfter: Fn(o, "showAfter"),
                    hideAfter: Fn(o, "hideAfter"),
                    open: v,
                    close: S
                }), {update: D, placement: U} = A_(f, d, p, {...o, visible: h}), R = $(() => at(o.visible) && !P.value),
                A = (y = !0) => {
                    D(), y && u()
                }, k = () => {
                    o.virtualTriggering || H()
                }, _ = () => {
                    var y;
                    return !!((y = d.value) != null && y.contains(document.activeElement))
                };
            return $e(() => o.disabled, y => {
                y && h.value && (h.value = !1)
            }), Zu(() => h.value && S()), et(ql, {
                contentRef: d,
                triggerRef: f,
                arrowRef: p,
                referenceRef: f,
                controlled: R,
                id: s,
                open: nr(h),
                trigger: Fn(o, "trigger"),
                onOpen: C,
                onClose: H,
                onToggle: y => {
                    i(h) ? H(y) : C(y)
                },
                onShow: () => {
                    n("show", m.value)
                },
                onHide: () => {
                    n("hide", m.value)
                },
                onBeforeShow: () => {
                    n("before-show", m.value)
                },
                onBeforeHide: () => {
                    n("before-hide", m.value)
                },
                updatePopper: A
            }), t(pt({
                triggerRef: f,
                contentRef: d,
                isFocusInsideContent: _,
                updatePopper: A,
                onOpen: C,
                onClose: H,
                hide: S,
                popperPlacement: U
            })), (y, K) => (w(), T(ve, null, [fe(Z2, {
                disabled: y.disabled,
                trigger: y.trigger,
                "virtual-ref": y.virtualRef,
                "virtual-triggering": y.virtualTriggering,
                "on-mouseenter": y.onMouseenter,
                "on-mouseleave": y.onMouseleave,
                "on-click": y.onClick,
                "on-keydown": y.onKeydown,
                "on-focus": y.onFocus,
                "on-blur": k,
                "on-contextmenu": y.onContextmenu
            }, {
                default: ke(() => [ie(y.$slots, "default")]),
                _: 3
            }, 8, ["disabled", "trigger", "virtual-ref", "virtual-triggering", "on-mouseenter", "on-mouseleave", "on-click", "on-keydown", "on-focus", "on-contextmenu"]), fe(W2, {
                animation: y.animation,
                "append-to": i(l),
                teleported: y.teleported,
                options: y.options,
                strategy: y.strategy,
                fit: y.fit,
                persistent: y.persistent,
                placement: i(U),
                flip: y.flip,
                content: y.content,
                "z-index": i(c),
                interactivity: y.interactivity,
                offset: y.offset,
                "popper-class": y.popperClass,
                "popper-style": y.popperStyle,
                disabled: y.disabled,
                visible: y.visible,
                "window-resize": y.windowResize,
                "window-scroll": y.windowScroll,
                "show-arrow": y.showArrow,
                onBlur: k,
                onClose: i(H)
            }, {
                default: ke(() => [ie(y.$slots, "content")]),
                _: 3
            }, 8, ["animation", "append-to", "teleported", "options", "strategy", "fit", "persistent", "placement", "flip", "content", "z-index", "interactivity", "offset", "popper-class", "popper-style", "disabled", "visible", "window-resize", "window-scroll", "show-arrow", "onClose"])], 64))
        }
    });
    var e$ = ge(Q2, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/popper/src/popper.vue"]]);
    const Wf = Ke(e$), t$ = be({
            disabled: Boolean,
            hit: {type: Boolean, default: !1},
            shape: {type: String, values: ["square", "circle"], default: ""}
        }), n$ = {click: e => e instanceof Event, close: e => e instanceof Event}, fs = Symbol(), qf = Symbol(),
        o$ = Symbol(), Yf = Symbol(), r$ = X({name: "VsChip"}), s$ = X({
            ...r$, props: t$, emits: n$, setup(e, {emit: t}) {
                const n = e, o = me("chip"), r = Ae(fs),
                    s = $(() => [o.b(), o.is("disabled", n.disabled), o.is("hit", n.hit), o.is(n.shape)]), l = f => {
                        t("click", f)
                    }, a = f => {
                        t("close", f)
                    }, u = () => {
                        r.handleTarget("chip-close", !n.disabled)
                    }, c = () => {
                        r.handleTarget(null)
                    };
                return (f, d) => (w(), T("span", {
                    class: x(i(s)),
                    onClick: l
                }, [ie(f.$slots, "default"), f.disabled ? de("v-if", !0) : (w(), Me(i(So), {
                    key: 0,
                    hover: "less",
                    scale: "0.5",
                    onClick: a,
                    onMouseenter: u,
                    onMouseleave: c
                }))], 2))
            }
        });
    var l$ = ge(s$, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/select/src/chip.vue"]]);
    const a$ = be({
        showAfter: {type: Number, default: 0},
        hideAfter: {type: Number, default: 0},
        fit: {type: Boolean, default: !0},
        modelValue: {type: he([Array, String, Number, Object]), default: ""},
        notValue: {type: he([String, Number, Object]), default: ""},
        loadingText: String,
        noMatchText: String,
        noDataText: String,
        allowCreate: Boolean,
        multiple: Boolean,
        multipleLimit: {type: Number, default: 0},
        filter: Boolean,
        filterMethod: {type: he(Function)},
        collapseChips: Boolean,
        defaultFirstOption: Boolean,
        disabled: Boolean,
        loading: Boolean,
        color: {...Ze, default: "primary"},
        state: Ze,
        block: Boolean,
        hideScrollbar: Boolean,
        labelFloat: Boolean,
        label: {type: String, default: null},
        placeholder: {type: String, default: null},
        id: {type: String},
        nativeScrollbar: Boolean,
        clearable: Boolean
    }), i$ = {
        "update:modelValue": e => ce(e) || Se(e) || Pe(e) || at(e) || we(e) || Cn(e),
        "visible-change": e => at(e),
        "remove-tag": e => e,
        focus: e => e instanceof Event,
        blur: e => e instanceof Event,
        change: e => ce(e) || Se(e) || Pe(e) || at(e) || we(e) || Cn(e),
        clear: () => !0
    };

    function u$(e) {
        return pt({
            options: new Map,
            cachedOptions: new Map,
            selected: new Map,
            createdLabel: null,
            targetOnElement: null,
            createdSelected: !1,
            optionsCount: 0,
            filteredOptionsCount: 0,
            visible: !1,
            softFocus: !1,
            selectedLabel: "",
            hoverIndex: -1,
            query: "",
            previousQuery: null,
            cachedPlaceHolder: "",
            currentPlaceholder: e.placeholder,
            menuVisibleOnFocus: !1,
            isOnComposition: !1,
            isSilentBlur: !1,
            mouseEnter: !1
        })
    }

    const c$ = (e, t, n) => {
        const o = me("select"), {t: r} = Yl(), s = ee(), l = ee(), a = ee(), u = ee(), c = ee(), f = ee(), d = ee(),
            p = cs(e.id), h = wl(""), m = ee(0), v = $(() => !e.filter || e.multiple || !t.visible),
            S = $(() => e.disabled), P = $(() => {
                const L = e.multiple ? Array.isArray(e.modelValue) && e.modelValue.length > 0 : e.modelValue !== void 0 && e.modelValue !== null && e.modelValue !== "";
                return e.clearable && !S.value && t.mouseEnter && L
            }), C = $(() => Array.from(t.options.values())), H = $(() => Array.from(t.cachedOptions.values())),
            D = $(() => Array.from(t.selected.values())), U = $(() => {
                const L = C.value.filter(re => !re.userCreated).some(re => re.currentLabel === t.query);
                return e.filter && e.allowCreate && t.query !== "" && !L
            }), R = $({
                get() {
                    return t.visible
                }, set(L) {
                    t.visible = L
                }
            }),
            A = $(() => e.loading ? e.loadingText || r("vs.select.loading") : e.filter && t.query && t.options.size > 0 && t.filteredOptionsCount === 0 ? e.noMatchText || r("vs.select.noMatch") : t.options.size === 0 ? e.noDataText || r("vs.select.noData") : null);
        $e(() => e.placeholder, L => {
            t.cachedPlaceHolder = t.currentPlaceholder = L
        }), $e(() => e.modelValue, L => {
            e.multiple && (L && L.length > 0 || l.value && t.query !== "" ? t.currentPlaceholder = "" : t.currentPlaceholder = t.cachedPlaceHolder, e.filter && (t.query = "", k(t.query)), De(() => {
                s.value && u.value && (s.value.style.height = `${u.value.scrollHeight - 1}px`)
            })), K(), De(() => {
                var re;
                (re = a.value) == null || re.updatePopper()
            })
        }, {flush: "post", deep: !0}), $e(() => t.visible, L => {
            var re, Oe;
            L ? ((re = a.value) == null || re.updatePopper(), e.filter && (t.filteredOptionsCount = t.optionsCount, t.query = t.selectedLabel, e.multiple ? (Oe = l.value) == null || Oe.focus() : t.selectedLabel && (t.currentPlaceholder = `${t.selectedLabel}`, t.selectedLabel = ""), t.query && k(t.query), e.multiple || (h.value = "", ha(h)))) : (l.value && l.value.blur(), t.query = "", t.previousQuery = null, t.selectedLabel = "", t.menuVisibleOnFocus = !1, M(), De(() => {
                l.value && l.value.value === "" && D.value.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder)
            }), e.multiple || (D.value.length && (e.filter && e.allowCreate && t.createdSelected && t.createdLabel ? t.selectedLabel = t.createdLabel : t.selectedLabel = D.value[0].currentLabel, e.filter && (t.query = t.selectedLabel)), e.filter && (t.currentPlaceholder = t.cachedPlaceHolder))), n("visible-change", L)
        }), $e(() => t.options.entries(), () => {
            var L, re;
            if (!lt) return;
            (L = a.value) == null || L.updatePopper();
            const Oe = ((re = c.value) == null ? void 0 : re.querySelectorAll("input")) || [];
            Array.from(Oe).includes(document.activeElement) || K(), e.defaultFirstOption && e.filter && t.filteredOptionsCount && y()
        }, {flush: "post"}), $e(() => t.hoverIndex, L => {
            L > -1 ? d.value = C.value[L] : d.value = void 0, C.value.forEach(re => {
                re.hover = At(d.value, re)
            })
        });
        const k = L => {
                if (!(t.previousQuery === L || t.isOnComposition)) {
                    if (t.previousQuery === null && ye(e.filterMethod)) {
                        t.previousQuery = L;
                        return
                    }
                    t.previousQuery = L, De(() => {
                        var re;
                        t.visible && ((re = a.value) == null || re.updatePopper())
                    }), t.hoverIndex = -1, e.multiple && e.filter && De(() => {
                        _()
                    }), ye(e.filterMethod) ? e.filterMethod(L) : (t.filteredOptionsCount = t.optionsCount, h.value = L, ha(h)), e.defaultFirstOption && e.filter && t.filteredOptionsCount && De(() => {
                        y()
                    })
                }
            }, _ = () => {
                var L;
                t.currentPlaceholder !== "" && (t.currentPlaceholder = (L = l.value) != null && L.value ? "" : t.cachedPlaceHolder)
            }, y = () => {
                const L = C.value.filter(We => We.visible && !We.isDisabled && !We.groupDisabled),
                    re = L.find(We => We.userCreated), Oe = L[0];
                t.hoverIndex = Ne(C.value, Oe || re)
            }, K = () => {
                if (t.selected.clear(), !e.multiple) {
                    const L = E(e.modelValue);
                    L.userCreated ? (t.createdLabel = `${L.value}`, t.createdSelected = !0) : t.createdSelected = !1, t.selectedLabel = L.currentLabel, t.selected.set(L.value, L), e.filter && (t.query = t.selectedLabel);
                    return
                }
                t.selectedLabel = "", Array.isArray(e.modelValue) && e.modelValue.forEach(L => {
                    const re = E(L);
                    t.selected.set(re.value, re)
                })
            }, E = L => {
                let re = null;
                for (let nt = t.cachedOptions.size - 1; nt >= 0; nt--) {
                    const wt = H.value[nt];
                    if (we(L) ? At(wt.value, L) : wt.value === L) {
                        re = wt;
                        break
                    }
                }
                if (re) return re;
                const Oe = we(L) || Cn(L) ? "" : String(L), We = {value: L, currentLabel: Oe, label: Oe, hit: !0};
                return e.multiple && (We.hit = !1), We
            }, M = () => {
                setTimeout(() => {
                    if (!e.multiple) {
                        t.hoverIndex = C.value.findIndex(L => At(L, D.value[0]));
                        return
                    }
                    if (D.value.length > 0) {
                        t.hoverIndex = Math.min.apply(null, D.value.map(L => C.value.findIndex(re => At(re.value, L.value))));
                        return
                    }
                    t.hoverIndex = -1
                }, 300)
            }, I = () => {
                var L;
                s.value && u.value && (s.value.style.height = `${u.value.scrollHeight}px`), (L = a.value) == null || L.updatePopper()
            }, B = () => {
                e.filter && t.query !== t.selectedLabel && (t.query = t.selectedLabel, k(t.query || ""))
            }, W = el(() => {
                B()
            }, m.value), V = el(L => {
                k(L.target.value)
            }, m.value), j = L => {
                At(e.modelValue, L) || n("change", L)
            }, Z = L => {
                if (!e.multiple) return;
                const re = L.target.value;
                if (re.length <= 0 && !te()) {
                    const Oe = e.modelValue.slice();
                    Oe.pop(), n(Re, Oe), j(Oe)
                }
                re.length === 1 && e.modelValue.length === 0 && (t.currentPlaceholder = t.cachedPlaceHolder)
            }, _e = L => {
                const re = t.cachedOptions.get(L);
                if (!re) return;
                const Oe = Ne(D.value, re);
                if (Oe > -1 && !S.value) {
                    const We = e.modelValue.slice();
                    We.splice(Oe, 1), n(Re, We), j(We), n("remove-tag", L)
                }
            }, xe = () => {
                const L = e.multiple ? [] : e.notValue;
                if (Nt(L)) for (const re of D.value) re.isDisabled && L.push(re.value);
                n(Re, L), j(L), t.hoverIndex = -1, t.visible = !1, n("clear")
            }, Ee = (L, re) => {
                var Oe;
                if (e.multiple) {
                    let We = e.modelValue;
                    Nt(e.modelValue) || (t.options.has(We) ? We = [We] : We = []);
                    const nt = We.slice(), wt = Ne(D.value, L);
                    wt > -1 ? nt.splice(wt, 1) : (e.multipleLimit <= 0 || nt.length < e.multipleLimit) && nt.push(L.value), n(Re, nt), j(nt), L.userCreated && (t.query = "", k("")), e.filter && ((Oe = l.value) == null || Oe.focus())
                } else n(Re, L.value), j(L.value), t.visible = !1;
                t.isSilentBlur = re, Ye(), !t.visible && De(() => {
                    Qe(L)
                })
            }, Ne = (L, re) => {
                let Oe = -1;
                return L.some((We, nt) => At(We.value, re.value) ? (Oe = nt, !0) : !1), Oe
            }, Ye = () => {
                t.softFocus = !0;
                const L = l.value || s.value;
                L && (L == null || L.focus())
            }, Qe = L => {
                var re, Oe, We, nt;
                let wt;
                if (L != null && L.value) {
                    const Je = C.value.filter(kt => kt.value === L.value);
                    Je.length > 0 && (wt = Je[0].el)
                }
                if (a.value && wt) {
                    const Je = (We = (Oe = (re = a.value) == null ? void 0 : re.contentRef) == null ? void 0 : Oe.querySelector) == null ? void 0 : We.call(Oe, `.${o.e("options")}`);
                    Je && (zl(Je, "scroll-behavior", "smooth"), s_(Je, wt), of(Je, "scroll-behavior"))
                }
                (nt = f.value) == null || nt.handleScroll()
            }, Ve = (L, re) => {
                t.optionsCount++, t.filteredOptionsCount++, t.options.set(L, re), t.cachedOptions.set(L, re)
            }, z = (L, re) => {
                t.options.get(L) === re && (t.optionsCount--, t.filteredOptionsCount--, t.options.delete(L))
            }, se = L => {
                L.code !== ro.backspace && te(!1)
            }, te = L => {
                const re = k0(D.value);
                if (re) return at(L) ? (re.hit = L, L) : (re.hit = !re.hit, re.hit)
            }, ue = L => {
                var re;
                const Oe = (re = L.target) == null ? void 0 : re.value;
                if (L.type === "compositionend") t.isOnComposition = !1, De(() => k(Oe)); else {
                    const We = Oe[Oe.length - 1] || "";
                    t.isOnComposition = !g_(We)
                }
            }, Ce = (L, re = !0) => {
                re && (t.targetOnElement = L)
            }, g = () => {
                De(() => Qe(D.value[0]))
            }, b = () => {
                var L;
                t.visible = !0, (L = s.value) == null || L.focus()
            }, O = L => {
                t.softFocus ? t.softFocus = !1 : (e.filter && (t.visible || (t.menuVisibleOnFocus = !0)), n("focus", L))
            }, F = () => {
                var L;
                t.visible = !1, (L = s.value) == null || L.blur()
            }, Y = L => {
                De(() => {
                    t.isSilentBlur ? t.isSilentBlur = !1 : n("blur", L)
                }), t.softFocus = !1
            }, J = () => {
                xe()
            },
            ae = $(() => !e.clearable || e.disabled || e.loading || C.value.length === 0 || C.value.filter(re => re.isDisabled === !1).length === 0 ? !1 : t.mouseEnter),
            oe = () => {
                t.visible = !1
            }, le = L => {
                t.visible && (L.preventDefault(), L.stopPropagation(), t.visible = !1)
            }, ne = L => {
                var re;
                L && !t.mouseEnter || S.value || (t.menuVisibleOnFocus ? t.menuVisibleOnFocus = !1 : (!a.value || !a.value.isFocusInsideContent) && (t.visible = !t.visible), t.visible && ((re = l.value || s.value) == null || re.focus()))
            }, Q = () => {
                t.visible ? C.value[t.hoverIndex] && Ee(C.value[t.hoverIndex], !1) : ne()
            }, N = $(() => C.value.filter(L => L.visible).every(L => L.isDisabled)), pe = (L = "next") => {
                if (!t.visible) {
                    t.visible = !0;
                    return
                }
                if (!(t.options.size === 0 || t.filteredOptionsCount === 0) && !t.isOnComposition && !N.value) {
                    L === "next" ? (t.hoverIndex++, t.hoverIndex === t.options.size && (t.hoverIndex = 0)) : L === "prev" && (t.hoverIndex--, t.hoverIndex < 0 && (t.hoverIndex = t.options.size - 1));
                    const re = C.value[t.hoverIndex];
                    (re.isDisabled === !0 || re.groupDisabled === !0 || !re.visible) && pe(L), De(() => !Cn(d.value) && Qe(d.value))
                }
            };
        return {
            showNewOption: U,
            inputId: p,
            optionsArray: C,
            cachedOptionsArray: H,
            selectedArray: D,
            handleResize: I,
            debouncedOnInputChange: W,
            debouncedQueryChange: V,
            deletePrevTag: Z,
            deleteTag: _e,
            deleteSelected: xe,
            handleOptionSelect: Ee,
            scrollToOption: Qe,
            readonly: v,
            showClose: P,
            handleTarget: Ce,
            setSelected: K,
            managePlaceholder: _,
            selectDisabled: S,
            toggleLastOptionHitState: te,
            resetInputState: se,
            handleComposition: ue,
            onOptionCreate: Ve,
            onOptionDestroy: z,
            handleMenuEnter: g,
            focus: b,
            handleFocus: O,
            blur: F,
            handleBlur: Y,
            handleClearClick: J,
            showClearable: ae,
            handleClose: oe,
            handleKeydownEscape: le,
            toggleMenu: ne,
            selectOption: Q,
            navigateOptions: pe,
            dropMenuVisible: R,
            queryChange: h,
            reference: s,
            input: l,
            popperRef: a,
            chips: u,
            selectWrapper: c,
            scrollbar: f,
            handleMouseEnter: () => {
                t.mouseEnter = !0
            },
            handleMouseLeave: () => {
                t.mouseEnter = !1
            },
            processBeforeOpen: () => !0,
            processBeforeClose: () => t.targetOnElement == null ? !0 : !["chip-close", "input-filter"].includes(t.targetOnElement),
            emptyText: A,
            resetHoverIndex: M
        }
    }, f$ = ["placeholder", "disabled"], d$ = ["id", "readonly"], p$ = ["for"], h$ = X({name: "VsSelect"}), v$ = X({
        ...h$, props: a$, emits: i$, setup(e, {expose: t, emit: n}) {
            const o = e, r = ["success", "warn", "danger", "primary", "dark"], s = me("select"), l = u$(o),
                a = $o("primary"), u = $(() => s.cssVar({color: tt(a.value)})), c = $(() => s.b()), {
                    debouncedQueryChange: f,
                    managePlaceholder: d,
                    deletePrevTag: p,
                    deleteTag: h,
                    handleClearClick: m,
                    showClose: v,
                    inputId: S,
                    emptyText: P,
                    readonly: C,
                    input: H,
                    reference: D,
                    chips: U,
                    popperRef: R,
                    selectDisabled: A,
                    selectWrapper: k,
                    handleMouseEnter: _,
                    handleMouseLeave: y,
                    handleTarget: K,
                    selectOption: E,
                    handleComposition: M,
                    navigateOptions: I,
                    handleKeydownEscape: B,
                    dropMenuVisible: W,
                    debouncedOnInputChange: V,
                    handleFocus: j,
                    handleBlur: Z,
                    toggleMenu: _e,
                    handleMenuEnter: xe,
                    handleResize: Ee,
                    setSelected: Ne,
                    handleClose: Ye,
                    onOptionCreate: Qe,
                    onOptionDestroy: Ve,
                    handleOptionSelect: z,
                    focus: se,
                    blur: te,
                    processBeforeOpen: ue,
                    processBeforeClose: Ce,
                    queryChange: g,
                    optionsArray: b,
                    cachedOptionsArray: O,
                    selectedArray: F
                } = c$(o, l, n), {visible: Y, hoverIndex: J, query: ae} = Gr(l), oe = $(() => {
                    var Q;
                    return jt((Q = R.value) == null ? void 0 : Q.contentRef)
                });
            o.multiple && !Array.isArray(o.modelValue) && n(Re, []), !o.multiple && Array.isArray(o.modelValue) && n(Re, "");
            const le = $(() => {
                var Q, N;
                return [s.is("block", o.block), s.b(), s.em("state", o.state), s.is("open", W.value), s.is("hovering", l.mouseEnter), s.is("focus", l.softFocus), s.is("disabled", A.value), s.is("multiple", o.multiple), s.is("loading", o.loading), s.is((N = (Q = R.value) == null ? void 0 : Q.popperPlacement) != null ? N : "bottom"), {[s.m("has-label")]: o.label || o.labelFloat}]
            }), ne = $(() => [u.value]);
            return ht(() => {
                l.cachedPlaceHolder = l.currentPlaceholder = o.placeholder, o.multiple && Array.isArray(o.modelValue) && o.modelValue.length > 0 && (l.currentPlaceholder = ""), ef(k, Ee), Ne()
            }), et(fs, pt({
                props: o,
                states: l,
                queryChange: g,
                hoverIndex: J,
                selectWrapper: k,
                selectedArray: F,
                optionsArray: b,
                cachedOptionsArray: O,
                handleTarget: K,
                setSelected: Ne,
                handleOptionSelect: z
            })), et(qf, Q => (Q.index = l.optionsCount, Qe(Q.value, Q), {
                updateOption: N => {
                    Ve(Q.value, Q), Qe(N.value, N)
                }, unregister: () => {
                    const N = F.value.some(pe => pe.value == Q.value);
                    De(() => {
                        l.cachedOptions.get(Q.value) === Q && !N && l.cachedOptions.delete(Q.value)
                    }), Ve(Q.value, Q)
                }
            })), t({focus: se, blur: te}), (Q, N) => (w(), Me(i(Wf), {
                ref_key: "popperRef",
                ref: R,
                visible: i(W),
                "onUpdate:visible": N[36] || (N[36] = pe => Fe(W) ? W.value = pe : null),
                trigger: "click",
                placement: "bottom",
                animation: i(c),
                flip: !1,
                fit: Q.fit,
                "hide-after": Q.hideAfter,
                "show-after": Q.showAfter,
                loading: Q.loading,
                "popper-class": [i(s).e("content"), i(_t)(i(a))],
                "popper-style": i(u),
                "show-arrow": !1,
                offset: 0,
                "process-before-open": i(ue),
                "process-before-close": i(Ce),
                persistent: "",
                onShow: i(xe)
            }, {
                content: ke(() => [dt(fe(i(Ql), {
                    "max-height": "200",
                    thickness: "3",
                    "wrap-class": [i(s).e("options"), i(s).is("empty", !Q.allowCreate && !!i(ae) && i(l).filteredOptionsCount === 0)],
                    native: Q.nativeScrollbar,
                    onMouseleave: N[35] || (N[35] = pe => J.value = -1)
                }, {
                    default: ke(() => [ie(Q.$slots, "default")]),
                    _: 3
                }, 8, ["wrap-class", "native"]), [[wn, i(l).options.size > 0 && !Q.loading]]), i(P) && (!Q.allowCreate || Q.loading || Q.allowCreate && i(l).options.size === 0) ? (w(), T(ve, {key: 0}, [Q.$slots.empty ? ie(Q.$slots, "empty", {key: 0}) : (w(), T("p", {
                    key: 1,
                    class: x(i(s).em("options", "empty"))
                }, ze(i(P)), 3))], 64)) : de("v-if", !0)]), default: ke(() => {
                    var pe;
                    return [dt((w(), T("div", {
                        ref_key: "selectWrapper",
                        ref: k,
                        class: x(i(le)),
                        style: Ie(i(ne)),
                        onMouseenter: N[32] || (N[32] = (...q) => i(_) && i(_)(...q)),
                        onMouseleave: N[33] || (N[33] = (...q) => i(y) && i(y)(...q)),
                        onClick: N[34] || (N[34] = (...q) => i(_e) && i(_e)(...q))
                    }, [Q.multiple ? (w(), T("div", {
                        key: 0,
                        ref_key: "chips",
                        ref: U,
                        class: x([i(s).e("chips")])
                    }, [(w(!0), T(ve, null, zn(i(F), (q, Te) => (w(), Me(l$, {
                        key: Te + "chip",
                        closable: !i(A) && !q.isDisabled,
                        hit: q.hit,
                        onClose: Ue => i(h)(q.value)
                    }, {
                        default: ke(() => [rt(ze(q.currentLabel), 1)]),
                        _: 2
                    }, 1032, ["closable", "hit", "onClose"]))), 128)), Q.filter ? dt((w(), T("input", {
                        key: 0,
                        ref_key: "input",
                        ref: H,
                        "onUpdate:modelValue": N[0] || (N[0] = q => Fe(ae) ? ae.value = q : null),
                        type: "text",
                        class: x([i(s).e("input-filter"), i(s).is("disabled", i(A)), i(s).be("chips", "input")]),
                        placeholder: i(l).selectedLabel ? "" : (pe = i(l).query) != null ? pe : "",
                        disabled: i(A),
                        onFocus: N[1] || (N[1] = (...q) => i(j) && i(j)(...q)),
                        onBlur: N[2] || (N[2] = (...q) => i(Z) && i(Z)(...q)),
                        onMouseenter: N[3] || (N[3] = q => i(K)("input-filter")),
                        onMouseleave: N[4] || (N[4] = q => i(K)(null)),
                        onKeyup: N[5] || (N[5] = (...q) => i(d) && i(d)(...q)),
                        onKeydown: [N[6] || (N[6] = ct($t(q => i(I)("next"), ["prevent"]), ["down"])), N[7] || (N[7] = ct($t(q => i(I)("prev"), ["prevent"]), ["up"])), N[8] || (N[8] = ct((...q) => i(B) && i(B)(...q), ["esc"])), N[9] || (N[9] = ct($t((...q) => i(E) && i(E)(...q), ["stop", "prevent"]), ["enter"])), N[10] || (N[10] = ct((...q) => i(p) && i(p)(...q), ["delete"])), N[11] || (N[11] = ct(q => Y.value = !1, ["tab"]))],
                        onCompositionstart: N[12] || (N[12] = (...q) => i(M) && i(M)(...q)),
                        onCompositionupdate: N[13] || (N[13] = (...q) => i(M) && i(M)(...q)),
                        onCompositionend: N[14] || (N[14] = (...q) => i(M) && i(M)(...q)),
                        onInput: N[15] || (N[15] = (...q) => i(f) && i(f)(...q))
                    }, null, 42, f$)), [[Rr, i(ae)]]) : de("v-if", !0)], 2)) : de("v-if", !0), dt(G("input", {
                        id: i(S),
                        ref_key: "reference",
                        ref: D,
                        "onUpdate:modelValue": N[16] || (N[16] = q => i(l).selectedLabel = q),
                        class: x([i(s).e("input"), i(s).is("multiple", Q.multiple)]),
                        readonly: i(C),
                        onFocus: N[17] || (N[17] = (...q) => i(j) && i(j)(...q)),
                        onBlur: N[18] || (N[18] = (...q) => i(Z) && i(Z)(...q)),
                        onMouseenter: N[19] || (N[19] = q => i(K)("input-filter", !i(C))),
                        onMouseleave: N[20] || (N[20] = q => i(K)(null)),
                        onInput: N[21] || (N[21] = (...q) => i(V) && i(V)(...q)),
                        onPaste: N[22] || (N[22] = (...q) => i(V) && i(V)(...q)),
                        onCompositionstart: N[23] || (N[23] = (...q) => i(M) && i(M)(...q)),
                        onCompositionupdate: N[24] || (N[24] = (...q) => i(M) && i(M)(...q)),
                        onCompositionend: N[25] || (N[25] = (...q) => i(M) && i(M)(...q)),
                        onKeydown: [N[26] || (N[26] = ct($t(q => i(I)("next"), ["prevent"]), ["down"])), N[27] || (N[27] = ct($t(q => i(I)("prev"), ["prevent"]), ["up"])), N[28] || (N[28] = ct($t((...q) => i(E) && i(E)(...q), ["prevent"]), ["enter"])), N[29] || (N[29] = ct((...q) => i(B) && i(B)(...q), ["esc"])), N[30] || (N[30] = ct(q => i(l).visible = !1, ["tab"]))]
                    }, null, 42, d$), [[Rr, i(l).selectedLabel]]), Q.label ? (w(), T("label", {
                        key: 1,
                        for: i(S),
                        class: x([i(s).e("label"), i(s).is("placeholder", Q.labelFloat && !i(W) && (i(At)(Q.modelValue, Q.notValue) || !Q.modelValue && Q.modelValue != 0))])
                    }, ze(Q.label), 11, p$)) : de("v-if", !0), !Q.multiple && !Q.labelFloat && i(l).currentPlaceholder ? (w(), T("span", {
                        key: 2,
                        class: x([i(s).e("placeholder"), i(s).is("hidden", !!Q.modelValue)])
                    }, ze(i(l).currentPlaceholder), 3)) : de("v-if", !0), fe(i(bo), {
                        class: x(i(s).e("arrow")),
                        size: "14"
                    }, {
                        default: ke(() => [fe(i(zC))]),
                        _: 1
                    }, 8, ["class"]), fe(Lt, {name: "v-clearable"}, {
                        default: ke(() => [i(v) ? (w(), T("span", {
                            key: 0,
                            class: x(i(s).e("clearable")),
                            onClick: N[31] || (N[31] = (...q) => i(m) && i(m)(...q))
                        }, [fe(i(So), {hover: "less", scale: "0.675"})], 2)) : de("v-if", !0)]), _: 1
                    }), (w(), T(ve, null, zn(r, (q, Te) => fe(i(er), {key: Te}, {
                        default: ke(() => [Q.$slots[`message-${q}`] ? (w(), T("div", {
                            key: 0,
                            class: x([i(s).e("message"), i(s).em("message", q)])
                        }, [ie(Q.$slots, `message-${q}`)], 2)) : de("v-if", !0)]), _: 2
                    }, 1024)), 64))], 38)), [[i(Hf), i(Ye), i(oe)]])]
                }), _: 3
            }, 8, ["visible", "animation", "fit", "hide-after", "show-after", "loading", "popper-class", "popper-style", "process-before-open", "process-before-close", "onShow"]))
        }
    });
    var m$ = ge(v$, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/select/src/select.vue"]]);
    const g$ = be({
        value: {type: he([String, Number, Object]), default: null},
        disabled: {type: Boolean, default: !1},
        label: {type: String}
    }), y$ = X({name: "VsOption"}), b$ = X({
        ...y$, props: g$, setup(e) {
            const t = e, n = me("select"), o = Fn(t, "value"), r = Ae(fs), s = Ae(qf), l = Ae(Yf, void 0);
            (!r || !s) && Sn("Select Option", "`Option` component must be called inside `select` or `option-group` component");
            const a = Ae(o$, {disabled: !1}), u = ee(), c = $(() => en(t.value)), f = $(() => {
                    if (r.props.multiple && r.props.multipleLimit) {
                        const U = r.selectedArray;
                        return !h.value && U.length >= r.props.multipleLimit && r.props.multipleLimit > 0
                    }
                    return !1
                }), d = $(() => t.label || (c.value ? "" : `${t.value}`)),
                p = $(() => t.disabled || m.groupDisabled || f.value),
                h = $(() => r.selectedArray.some(U => U.value == m.value)), m = pt({
                    index: -1,
                    el: u,
                    value: o,
                    currentLabel: d,
                    isDisabled: p,
                    groupDisabled: !1,
                    visible: !0,
                    hit: !1,
                    hover: !1,
                    userCreated: !1
                }), {unregister: v, updateOption: S} = s(m), {unregister: P} = (l == null ? void 0 : l(m)) || {};
            qn(() => {
                v(), P == null || P()
            });
            const C = () => {
                !t.disabled && !a.disabled && (r.hoverIndex = r.optionsArray.indexOf(m))
            };
            $e(d, () => {
                m.userCreated || r.setSelected()
            }), $e(() => t.value, (U, R) => {
                Object.is(U, R) || S(m)
            }), $e(() => a.disabled, U => {
                m.groupDisabled = U
            }, {immediate: !0}), $e(() => r.queryChange, U => {
                const R = new RegExp(Z0(`${U}`), "i");
                m.visible = R.test(`${d.value}`), m.visible || r.states.filteredOptionsCount--
            });
            const H = $(() => [n.e("option"), n.is("hover", m.hover), n.is("active", h.value), n.is("disabled", p.value), n.is("hidden", !m.visible)]),
                D = () => {
                    t.disabled !== !0 && m.groupDisabled !== !0 && r.handleOptionSelect(m, !0)
                };
            return (U, R) => (w(), T("button", {
                ref_key: "el",
                ref: u,
                class: x(i(H)),
                onMouseenter: C,
                onClick: D
            }, [ie(U.$slots, "default", {}, () => [rt(ze(i(d)), 1)])], 34))
        }
    });
    var Gf = ge(b$, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/select/src/option.vue"]]);
    const _$ = be({label: {type: String, required: !0}}), w$ = X({name: "VsOptionGroup"}), C$ = X({
        ...w$, props: _$, setup(e) {
            const t = me("option-group"), n = Ae(fs);
            n || Sn("Option Group", "`option-group` component must be called inside `select` component");
            const o = ee(!0), r = ee(new Map), s = $(() => Array.from(r.value.values()));
            return $e(() => n.queryChange, () => {
                o.value = s.value.some(l => l.visible === !0)
            }, {flush: "post"}), et(Yf, l => (r.value.set(l.value, l), {
                unregister() {
                    r.value.delete(l.value)
                }
            })), (l, a) => (w(), T("div", {class: x([i(t).b(), i(t).is("hidden", !o.value)])}, [G("h5", null, ze(l.label), 1), ie(l.$slots, "default")], 2))
        }
    });
    var Xf = ge(C$, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/select/src/option-group.vue"]]);
    const ea = Ke(m$, {Option: Gf, OptionGroup: Xf}), ta = xt(Gf), $$ = xt(Xf), S$ = be({
        pageSize: {type: Number, required: !0},
        pageSizes: {type: he(Array), default: () => Ht([10, 20, 30, 40, 50, 100])}
    }), x$ = {"page-size-change": e => Pe(e)}, k$ = X({name: "VsPaginationSizes"}), T$ = X({
        ...k$, props: S$, emits: x$, setup(e, {emit: t}) {
            const n = e, o = me("pagination"), {disabled: r, handleSizeChange: s} = Jn(), l = ee(n.pageSize);
            $e(() => n.pageSizes, (c, f) => {
                if (!At(c, f) && Array.isArray(c)) {
                    const d = c.includes(n.pageSize) ? n.pageSize : n.pageSizes[0];
                    t("page-size-change", d)
                }
            }), $e(() => n.pageSize, c => {
                l.value = c
            });
            const a = $(() => n.pageSizes);

            function u(c) {
                c !== l.value && typeof c == "number" && (l.value = c, s(Number(c)))
            }

            return (c, f) => (w(), T("span", {class: x(i(o).e("sizes"))}, [fe(i(ea), {
                "model-value": l.value,
                disabled: i(r),
                onChange: u
            }, {
                default: ke(() => [(w(!0), T(ve, null, zn(i(a), d => (w(), Me(i(ta), {
                    key: d,
                    value: d,
                    label: `${d} / page`
                }, null, 8, ["value", "label"]))), 128))]), _: 1
            }, 8, ["model-value", "disabled"])], 2))
        }
    });
    var E$ = ge(T$, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/pagination/src/components/sizes.vue"]]);
    const P$ = ["disabled"], O$ = X({name: "VsPaginationJumper"}), A$ = X({
        ...O$, setup(e) {
            const t = me("pagination"), {pageCount: n, disabled: o, currentPage: r, changeEvent: s} = Jn(), l = ee(),
                a = $(() => {
                    var f;
                    return (f = l.value) != null ? f : r.value
                });

            function u(f) {
                l.value = Number(f)
            }

            function c(f) {
                f = Math.trunc(+f), s(+f), l.value = void 0
            }

            return (f, d) => (w(), T("span", {
                class: x(i(t).e("jump")),
                disabled: i(o)
            }, [G("span", {class: x(i(t).e("goto"))}, "Goto", 2), fe(i(Bf), {
                type: "number",
                class: x([i(t).e("editor"), i(t).is("in-pagination")]),
                min: 1,
                max: i(n),
                disabled: i(o),
                "model-value": i(a),
                onChange: c,
                "onUpdate:modelValue": u
            }, null, 8, ["class", "max", "disabled", "model-value"])], 10, P$))
        }
    });
    var I$ = ge(A$, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/pagination/src/components/jumper.vue"]]);
    const M$ = be({total: Number}), B$ = ["disabled"], L$ = X({name: "VsPaginationTotal"}), R$ = X({
        ...L$, props: M$, setup(e) {
            const t = me("pagination"), {disabled: n} = Jn();
            return (o, r) => (w(), T("span", {
                class: x(i(t).e("total")),
                disabled: i(n)
            }, " Total " + ze(o.total), 11, B$))
        }
    });
    var N$ = ge(R$, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/pagination/src/components/total.vue"]]);
    const V$ = be({pagerCount: {type: Number, default: 7}, color: Ze, progress: Boolean}), D$ = X({
        __name: "progress", setup(e) {
            const {pageCount: t, currentPage: n} = Jn(), o = me("pagination"), r = $(() => n.value * 100 / t.value);
            return (s, l) => (w(), T("div", {class: x(i(o).e("progress"))}, [G("div", {
                class: "progress",
                style: Ie({width: `${i(r)}%`})
            }, null, 4)], 2))
        }
    });
    var F$ = ge(D$, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/pagination/src/components/progress.vue"]]);
    const H$ = ["aria-current", "tabindex"], j$ = ["tabindex"], z$ = G("span", null, "...", -1),
        K$ = ["aria-label", "aria-current", "tabindex", "onClick", "onKeyup"], U$ = ["tabindex"],
        W$ = G("span", null, "...", -1), q$ = ["aria-current", "aria-label", "tabindex"],
        Y$ = X({name: "VsPaginationPager"}), G$ = X({
            ...Y$, props: V$, emits: ["change"], setup(e, {emit: t}) {
                const n = e, o = me("pager"), r = me("icon"), {
                        currentPage: s,
                        disabled: l,
                        pageCount: a,
                        buttonsDotted: u
                    } = Jn(), c = ee(), f = ee(!1), d = ee(!1), p = ee(!1), h = ee(!1), m = ee(!1), v = ee(!1), S = ee(!1),
                    P = pt({left: 0}), C = $(() => {
                        const _ = n.pagerCount, y = (_ - 1) / 2;
                        let K = !1, E = !1;
                        a.value > _ && (s.value > _ - y && (K = !0), s.value < a.value - y && (E = !0));
                        const M = [];
                        if (K && !E) {
                            const I = a.value - (_ - 2);
                            for (let B = I; B < a.value; B++) M.push(B)
                        } else if (!K && E) for (let I = 2; I < _; I++) M.push(I); else if (K && E) {
                            const I = Math.floor(_ / 2) - 1;
                            for (let B = s.value - I; B <= s.value + I; B++) M.push(B)
                        } else for (let I = 2; I < a.value; I++) M.push(I);
                        return M
                    }), H = $(() => l.value ? -1 : 0);
                vp(() => {
                    const _ = (n.pagerCount - 1) / 2;
                    f.value = !1, d.value = !1, a.value > n.pagerCount && (s.value > n.pagerCount - _ && (f.value = !0), s.value < a.value - _ && (d.value = !0))
                }), $e([c, s], () => {
                    De(() => {
                        var _;
                        const y = (_ = c.value) == null ? void 0 : _.querySelector(`[aria-label="${s.value}"]`);
                        if (Cn(y) || Cn(c.value)) {
                            P.left = 0;
                            return
                        }
                        S.value = !0;
                        const K = y.offsetLeft;
                        P.left = K, setTimeout(() => S.value = !1, 300)
                    })
                });

                function D(_ = !1) {
                    l.value || (_ ? p.value = !0 : h.value = !0)
                }

                function U(_ = !1) {
                    _ ? m.value = !0 : v.value = !0
                }

                function R(_) {
                    let y = s.value;
                    const K = n.pagerCount - 2;
                    _ == "prev" ? y = s.value - K : _ == "next" && (y = s.value + K), k(y)
                }

                function A(_) {
                    Number.isNaN(+_) || (_ < 1 && (_ = 1), _ > a.value && (_ = a.value)), _ != s.value && k(_)
                }

                function k(_) {
                    l.value || Number.isNaN(+_) || t("change", _)
                }

                return (_, y) => (w(), T("div", {
                    ref_key: "pagerRef",
                    ref: c,
                    class: x(i(o).b())
                }, [i(a) > 0 ? (w(), T("button", {
                    key: 0,
                    class: x([[i(o).is("active", i(s) === 1), i(o).is("disabled", i(l))], "number"]),
                    "aria-current": i(s) === 1,
                    "aria-label": "1",
                    tabindex: i(H),
                    onClick: y[0] || (y[0] = K => A(1)),
                    onKeyup: y[1] || (y[1] = ct(K => A(1), ["enter"]))
                }, ze(i(u) ? "" : 1), 43, H$)) : de("v-if", !0), f.value && !i(u) ? (w(), T("button", {
                    key: 1,
                    class: x(["more", "btn-quickprev", i(r).b(), i(o).is("disabled", i(l))]),
                    tabindex: i(H),
                    onMouseenter: y[2] || (y[2] = K => D(!0)),
                    onMouseleave: y[3] || (y[3] = K => p.value = !1),
                    onFocus: y[4] || (y[4] = K => U(!0)),
                    onBlur: y[5] || (y[5] = K => m.value = !1),
                    onClick: y[6] || (y[6] = K => R("prev")),
                    onKeyup: y[7] || (y[7] = ct(K => R("prev"), ["enter"]))
                }, [fe(i(XC)), z$], 42, j$)) : de("v-if", !0), (w(!0), T(ve, null, zn(i(C), K => (w(), T("button", {
                    key: K,
                    class: x([[i(o).is("active", i(s) === K), i(o).is("disabled", i(l))], "number"]),
                    "aria-label": `${K}`,
                    "aria-current": i(s) === K,
                    tabindex: i(H),
                    onClick: E => A(K),
                    onKeyup: ct(E => A(K), ["enter"])
                }, ze(i(u) ? "" : K), 43, K$))), 128)), d.value && !i(u) ? (w(), T("button", {
                    key: 2,
                    class: x(["more", "btn-quicknext", i(r).b(), i(o).is("disabled", i(l))]),
                    tabindex: i(H),
                    onMouseenter: y[8] || (y[8] = K => D()),
                    onMouseleave: y[9] || (y[9] = K => h.value = !1),
                    onFocus: y[10] || (y[10] = K => U()),
                    onBlur: y[11] || (y[11] = K => v.value = !1),
                    onClick: y[12] || (y[12] = K => R("next")),
                    onKeyup: y[13] || (y[13] = ct(K => R("next"), ["enter"]))
                }, [fe(i(u2)), W$], 42, U$)) : de("v-if", !0), i(a) > 1 ? (w(), T("button", {
                    key: 3,
                    class: x([[i(o).is("active", i(s) === i(a)), i(o).is("disabled", i(l))], "number"]),
                    "aria-current": i(s) === i(a),
                    "aria-label": `${i(a)}`,
                    tabindex: i(H),
                    onClick: y[14] || (y[14] = K => A(i(a))),
                    onKeyup: y[15] || (y[15] = ct(K => A(i(a)), ["enter"]))
                }, ze(i(u) ? "" : i(a)), 43, q$)) : de("v-if", !0), G("div", {
                    class: x([i(o).e("aria-active"), i(o).is("change", S.value)]),
                    style: Ie({left: `${P.left}px`})
                }, ze(i(u) ? "" : i(s)), 7), _.progress ? (w(), Me(F$, {key: 4})) : de("v-if", !0)], 2))
            }
        });
    var X$ = ge(G$, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/pagination/src/components/pager.vue"]]);
    const vt = e => typeof e != "number", Z$ = be({
        color: Ze,
        total: Number,
        defaultCurrentPage: Number,
        currentPage: Number,
        defaultPageSize: Number,
        pageSize: Number,
        pageCount: Number,
        pagerCount: {
            type: Number,
            validator: e => Pe(e) && Math.trunc(e) === e && e > 4 && e < 22 && e % 2 === 1,
            default: 7
        },
        layout: {
            type: he([String, Array]),
            default: () => Ht(["prev", "pager", "next", "jumper", "->", "total", "slot", "sizes"])
        },
        pageSizes: {type: he(Array), default: () => Ht([10, 20, 30, 40, 50, 100])},
        hideOnSinglePage: Boolean,
        prevText: {type: String, default: ""},
        prevIcon: {type: Wn, default: () => n2},
        nextText: {type: String, default: ""},
        nextIcon: {type: Wn, default: () => v2},
        infinite: Boolean,
        progress: Boolean,
        notMargin: Boolean,
        buttonsDotted: Boolean,
        shape: {type: String, values: ["circle", "square"], default: ""},
        disabled: Boolean,
        disabledItems: {type: he(Array), default: () => []},
        loadingItems: {type: he(Array), default: () => []}
    }), J$ = {
        "update:current-page": e => Pe(e),
        "update:page-size": e => Pe(e),
        "size-change": e => Pe(e),
        "page-change": e => Pe(e),
        "prev-click": e => Pe(e),
        "next-click": e => Pe(e)
    }, uu = "VsPagination";
    var Q$ = X({
        name: uu, props: Z$, emits: J$, setup(e, {emit: t, slots: n}) {
            const o = me("pagination"), r = bt().vnode.props || {},
                s = "onUpdate:currentPage" in r || "onUpdate:current-page" in r || "onCurrentChange" in r,
                l = "onUpdate:pageSize" in r || "onUpdate:page-size" in r || "onSizeChange" in r, a = $(() => {
                    if (vt(e.total) && vt(e.pageCount)) return "need to set props `total` or `pageCount`, otherwise count of pages cannot be determined.";
                    if (!vt(e.currentPage) && !s) return "You have to use v-model binding of `currentPage`.\nIf you just want to provide a default value, `defaultCurrentPage` is here for you.";
                    if (e.layout.includes("sizes")) {
                        if (vt(e.pageCount)) {
                            if (!vt(e.total) && !vt(e.pageSize) && !l) return "Your layout having `sizes`. If you have `pageSize` defined, meaning you want to have `pageSize` controlled yourself from component. Thus page size `listener` is required, you are account for `pageSize` changed."
                        } else if (!l) return "Your layout having `sizes`. If `pageCount` is assign, then you have to watch `pageSize` change and recalculate `pageCount`."
                    }
                    return !0
                }), u = ee(vt(e.defaultPageSize) ? 10 : e.defaultPageSize),
                c = ee(vt(e.defaultCurrentPage) ? 1 : e.defaultCurrentPage), f = $({
                    get() {
                        return vt(e.pageSize) ? u.value : e.pageSize
                    }, set(C) {
                        vt(e.pageSize) && (u.value = C), l && (t("update:page-size", C), t("size-change", C))
                    }
                }), d = $(() => {
                    let C = 0;
                    return vt(e.pageCount) ? vt(e.total) || (C = Math.max(1, Math.ceil(e.total / f.value))) : C = e.pageCount, C
                }), p = $({
                    get() {
                        return vt(e.currentPage) ? c.value : e.currentPage
                    }, set(C) {
                        let H = C;
                        C < 1 ? H = e.infinite ? d.value : 1 : C > d.value && (H = e.infinite ? 1 : d.value), vt(e.currentPage) && (c.value = H), s && (t("update:current-page", H), t("page-change", H))
                    }
                });
            $e(d, C => {
                p.value > C && (p.value = C)
            });

            function h(C) {
                p.value = C
            }

            function m(C) {
                f.value = C;
                const H = d.value;
                p.value > H && (p.value = H)
            }

            function v() {
                e.disabled || (p.value -= 1, t("prev-click", p.value))
            }

            function S() {
                e.disabled || (p.value += 1, t("next-click", p.value))
            }

            function P(C, H) {
                C && (C.props || (C.props = {}), C.props.class = [C.props.class, H].join(" "))
            }

            return et(yf, {
                pageCount: d,
                disabled: $(() => e.disabled),
                currentPage: p,
                buttonsDotted: $(() => e.buttonsDotted),
                infinite: $(() => e.infinite),
                changeEvent: h,
                handleSizeChange: m
            }), () => {
                var C, H;
                if (a.value != !0) return a.value, null;
                if (!e.layout.length || e.hideOnSinglePage && d.value <= 1) return null;
                const D = [], U = [], R = Et("div", {class: o.e("rightwrapper")}, U), A = {
                    prev: Et(L2, {prevText: e.prevText, prevIcon: e.prevIcon, onClick: v}),
                    jumper: Et(I$),
                    pager: Et(X$, {color: e.color, progress: e.progress, pagerCount: e.pagerCount, onChange: h}),
                    next: Et(P2, {nextText: e.nextText, nextIcon: e.nextIcon, onClick: S}),
                    sizes: Et(E$, {pageSize: f.value, pageSizes: e.pageSizes}),
                    slot: (H = (C = n == null ? void 0 : n.default) == null ? void 0 : C.call(n, {
                        currentPage: p.value,
                        total: e.total,
                        pageSize: f.value,
                        pageSizes: e.pageSizes,
                        pagerCount: e.pagerCount
                    })) != null ? H : null,
                    total: Et(N$, {total: vt(e.total) ? 0 : e.total})
                }, k = e.layout.toString().split(",").map(y => y.trim());
                let _ = !1;
                return k.forEach(y => {
                    if (y === "->") {
                        _ = !0;
                        return
                    }
                    _ ? U.push(A[y]) : D.push(A[y])
                }), P(D[0], o.is("first")), P(D[D.length - 1], o.is("last")), _ && U.length > 0 && (P(U[0], o.is("first")), P(U[U.length - 1], o.is("last")), D.push(R)), Et("div", {
                    role: "pagination",
                    "aria-label": "pagination",
                    class: [o.b(), o.is(e.shape), o.is("buttons-dotted", e.buttonsDotted), o.is("not-margin", e.notMargin)],
                    style: o.cssVar({color: tt(e.color)})
                }, D)
            }
        }
    });
    const eS = Ke(Q$), tS = be({
        color: Ze,
        modelValue: {type: [Boolean, String, Number], default: null},
        value: {type: [Boolean, String, Number], default: ""},
        disabled: Boolean,
        label: {type: [String, Number, Boolean], default: ""},
        name: String,
        loading: {type: Boolean, default: !1},
        labelBefore: {type: Boolean, default: !1}
    }), nS = {[Re]: e => Se(e) || Pe(e) || at(e), [Jo]: e => Se(e) || Pe(e) || at(e)}, oS = (e, t) => {
        const n = $({
            get: () => e.modelValue, set: () => {
                t(Re, e.value)
            }
        }), {disabled: o, loading: r} = Gr(e), s = $(() => o.value || r.value), l = $(() => e.modelValue === e.value);
        return {focus: ee(!1), disabled: o, isDisabled: s, checked: l, loading: r, model: n}
    }, rS = ["id", "disabled", "readonly", "name"], sS = ["for"], lS = X({name: "VsRadio"}), aS = X({
        ...lS, props: tS, emits: nS, setup(e, {emit: t}) {
            const n = e, o = me("radio"), r = cs(), {
                    isDisabled: s,
                    loading: l,
                    model: a,
                    focus: u,
                    checked: c
                } = oS(n, t), f = $o("primary"),
                d = $(() => [_t(), o.b("wrapper"), o.is("loading", l.value), o.is("disabled", s.value), o.is("active", c.value), o.is("label-before", n.labelBefore)]),
                p = $(() => [o.cssVar({color: tt(f.value)})]);
            return (h, m) => (w(), T("div", {
                class: x(i(d)),
                style: Ie(i(p))
            }, [G("div", {class: x(i(o).b())}, [dt(G("input", {
                id: i(r),
                "onUpdate:modelValue": m[0] || (m[0] = v => Fe(a) ? a.value = v : null),
                type: "radio",
                disabled: i(s),
                readonly: i(s),
                name: h.name,
                onFocus: m[1] || (m[1] = v => u.value = !0),
                onBlur: m[2] || (m[2] = v => u.value = !1)
            }, null, 40, rS), [[_c, i(a)]]), G("span", {class: x(i(o).e("effect"))}, [h.$slots.icon ? (w(), T("span", {
                key: 0,
                class: x(i(o).em("effect", "icon"))
            }, [ie(h.$slots, "icon")], 2)) : de("v-if", !0), i(l) ? (w(), T("span", {
                key: 1,
                class: x(i(o).em("effect", "loading"))
            }, [fe(i(xn))], 2)) : de("v-if", !0)], 2)], 2), h.$slots.default ? (w(), T("label", {
                key: 0,
                for: i(r),
                class: x(i(o).e("label"))
            }, [ie(h.$slots, "default", {}, () => [rt(ze(h.label), 1)])], 10, sS)) : de("v-if", !0)], 6))
        }
    });
    var iS = ge(aS, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/radio/src/radio.vue"]]);
    const uS = Ke(iS), cS = be({
            modelValue: {type: Number, default: 0},
            id: {type: String, default: void 0},
            lowThreshold: {type: Number, default: 2},
            highThreshold: {type: Number, default: 4},
            max: {type: Number, default: 5},
            colors: {type: he([Array, Object]), default: () => Ht(["", "", ""])},
            voidColor: {type: String, default: ""},
            disabledVoidColor: {type: String, default: ""},
            icons: {type: he([Array, Object]), default: () => [_r, _r, _r]},
            voidIcon: {type: Wn, default: () => F1},
            disabledVoidIcon: {type: Wn, default: () => _r},
            disabled: {type: Boolean},
            allowHalf: {type: Boolean},
            showText: {type: Boolean},
            showScore: {type: Boolean},
            textColor: {type: String, default: ""},
            texts: {type: he(Array), default: () => Ht(["Extremely bad", "Disappointed", "Fair", "Satisfied", "Surprise"])},
            scoreTemplate: {type: String, default: "{value}"},
            size: {type: String, validator: m_},
            label: {type: String, default: void 0},
            clearable: {type: Boolean, default: !1}
        }), fS = {[Jo]: e => Pe(e), [Re]: e => Pe(e)},
        dS = ["aria-label", "aria-valuenow", "aria-valuetext", "aria-valuemax"], pS = ["onMousemove", "onClick"],
        hS = X({name: "VsRate"}), vS = X({
            ...hS, props: cS, emits: fS, setup(e, {expose: t, emit: n}) {
                const o = e;

                function r(E, M) {
                    const I = V => we(V), B = Object.keys(M).map(V => +V).filter(V => {
                        const j = M[V];
                        return (I(j) ? j.excluded : !1) ? E < V : E <= V
                    }).sort((V, j) => V - j), W = M[B[0]];
                    return I(W) && W.value || W
                }

                const s = C_(), l = me("rate"), a = ee(o.modelValue), u = ee(-1), c = ee(!0),
                    f = $(() => [l.b(), l.m(s.value)]), d = $(() => o.disabled), p = $(() => l.cssVarBlock({
                        "void-color": o.voidColor,
                        "disabled-void-color": o.disabledVoidColor,
                        "fill-color": S.value
                    })), h = $(() => {
                        let E = "";
                        return o.showScore ? E = o.scoreTemplate.replace(/\{\s*value\s*\}/, d.value ? `${o.modelValue}` : `${a.value}`) : o.showText && (E = o.texts[Math.ceil(a.value) - 1]), E
                    }), m = $(() => o.modelValue * 100 - Math.floor(o.modelValue) * 100), v = $(() => ce(o.colors) ? {
                        [o.lowThreshold]: o.colors[0],
                        [o.highThreshold]: {value: o.colors[1], excluded: !0},
                        [o.max]: o.colors[2]
                    } : o.colors), S = $(() => {
                        const E = r(a.value, v.value);
                        return we(E) ? "" : E
                    }), P = $(() => {
                        let E = "";
                        return d.value ? E = `${m.value}%` : o.allowHalf && (E = "50%"), {color: S.value, width: E}
                    }), C = $(() => {
                        let E = ce(o.icons) ? [...o.icons] : {...o.icons};
                        return E = Dn(E), ce(E) ? {
                            [o.lowThreshold]: E[0],
                            [o.highThreshold]: {value: E[1], excluded: !0},
                            [o.max]: E[2]
                        } : E
                    }), H = $(() => r(o.modelValue, C.value)),
                    D = $(() => d.value ? Se(o.disabledVoidIcon) ? o.disabledVoidIcon : Dn(o.disabledVoidIcon) : Se(o.voidIcon) ? o.voidIcon : Dn(o.voidIcon)),
                    U = $(() => r(a.value, C.value));

                function R(E) {
                    const M = d.value && m.value > 0 && E - 1 < o.modelValue && E > o.modelValue,
                        I = o.allowHalf && c.value && E - .5 <= a.value && E > a.value;
                    return M || I
                }

                function A(E) {
                    o.clearable && E === o.modelValue && (E = 0), n(Re, E), o.modelValue !== E && n("change", E)
                }

                function k(E) {
                    d.value || (o.allowHalf && c.value ? A(a.value) : A(E))
                }

                function _(E) {
                    if (d.value) return;
                    let M = a.value;
                    const I = E.code;
                    return I === ro.up || I === ro.right ? (o.allowHalf ? M += .5 : M += 1, E.stopPropagation(), E.preventDefault()) : (I === ro.left || I === ro.down) && (o.allowHalf ? M -= .5 : M -= 1, E.stopPropagation(), E.preventDefault()), M = M < 0 ? 0 : M, M = M > o.max ? o.max : M, n(Re, M), n("change", M), M
                }

                function y(E, M) {
                    if (!d.value) {
                        if (o.allowHalf) {
                            let I = M.target;
                            Hr(I, l.e("item")) && (I = I.querySelector(`.${l.e("icon")}`)), (I.clientWidth === 0 || Hr(I, l.e("decimal"))) && (I = I.parentNode), c.value = M.offsetX * 2 <= I.clientWidth, a.value = c.value ? E - .5 : E
                        } else a.value = E;
                        u.value = E
                    }
                }

                function K() {
                    d.value || (o.allowHalf && (c.value = o.modelValue !== Math.floor(o.modelValue)), a.value = o.modelValue, u.value = -1)
                }

                return $e(() => o.modelValue, E => {
                    a.value = E, c.value = o.modelValue !== Math.floor(o.modelValue)
                }), o.modelValue || n(Re, 0), t({
                    setCurrentValue: y,
                    resetCurrentValue: K
                }), (E, M) => (w(), T("div", {
                    class: x([i(f), i(l).is("disabled", i(d))]),
                    role: "slider",
                    "aria-label": E.label || "rating",
                    "aria-valuenow": a.value,
                    "aria-valuetext": i(h) || void 0,
                    "aria-valuemin": "0",
                    "aria-valuemax": E.max,
                    tabindex: "0",
                    style: Ie(i(p)),
                    onKeydown: _
                }, [(w(!0), T(ve, null, zn(E.max, (I, B) => (w(), T("span", {
                    key: B,
                    class: x(i(l).e("item")),
                    onMousemove: W => y(I, W),
                    onMouseleave: K,
                    onClick: W => k(I)
                }, [fe(i(bo), {class: x([i(l).e("icon"), {hover: u.value === I}, i(l).is("active", I <= a.value)])}, {
                    default: ke(() => [R(I) ? de("v-if", !0) : (w(), T(ve, {key: 0}, [dt((w(), Me(gn(i(U)), null, null, 512)), [[wn, I <= a.value]]), dt((w(), Me(gn(i(D)), null, null, 512)), [[wn, !(I <= a.value)]])], 64)), R(I) ? (w(), Me(i(bo), {
                        key: 1,
                        style: Ie(i(P)),
                        class: x([i(l).e("icon"), i(l).e("decimal")])
                    }, {default: ke(() => [(w(), Me(gn(i(H))))]), _: 1}, 8, ["style", "class"])) : de("v-if", !0)]), _: 2
                }, 1032, ["class"])], 42, pS))), 128)), E.showText || E.showScore ? (w(), T("span", {
                    key: 0,
                    class: x(i(l).e("text"))
                }, ze(i(h)), 3)) : de("v-if", !0)], 46, dS))
            }
        });
    var mS = ge(vS, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/rate/src/rate.vue"]]);
    const gS = Ke(mS), yS = ["start", "center", "end", "space-around", "space-between", "space-evenly"],
        bS = ["top", "middle", "bottom"], _S = ["row", "row-reverse", "column", "column-reverse"], wS = be({
            gutter: {type: Number, default: 0},
            justify: {type: String, values: yS, default: "start"},
            direction: {type: String, values: _S, default: "row"},
            align: {type: String, values: bS, default: "top"}
        }), CS = X({name: "VsRow"}), $S = X({
            ...CS, props: wS, setup(e) {
                const t = e, n = me("row"), o = $(() => t.gutter);
                et(bf, {gutter: o});
                const r = $(() => {
                        const l = {};
                        return t.gutter && (l.marginRight = l.marginLeft = `-${t.gutter / 2}px`), l
                    }),
                    s = $(() => [n.b(), n.is(`justify-${t.justify}`, t.justify !== "start"), n.is(`align-${t.align}`, t.align !== "top"), n.is(`direction-${t.direction}`, t.direction !== "row")]);
                return (l, a) => (w(), T("div", {class: x(i(s)), style: Ie(i(r))}, [ie(l.$slots, "default")], 6))
            }
        });
    var SS = ge($S, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/row/src/row.vue"]]);
    const xS = Ke(SS), kS = be({open: Boolean}), TS = X({name: "VsSidebarGroup"}), ES = X({
        ...TS, props: kS, setup(e) {
            const t = e, n = me("sidebar-group"), o = Ae(Zi), r = ee(), s = ee(), l = ee(!1), a = () => {
                l.value = !l.value
            };
            return $e(() => t.open, u => {
                De(() => {
                    var c;
                    const f = ((c = s.value) == null ? void 0 : c.scrollHeight) || 0;
                    if (o) {
                        const d = o.contentRef.value;
                        u ? d.style.height = `${d.scrollHeight + f - 1}px` : d.style.height = `${d.scrollHeight - f + 1}px`
                    }
                })
            }), et(Zi, {contentRef: s, groupRef: r}), ht(() => {
                t.open && (l.value = !0)
            }), (u, c) => (w(), T("div", {
                ref_key: "groupRef",
                ref: r,
                class: x([i(n).b(), i(n).is("open", l.value)])
            }, [G("div", {
                class: x(i(n).e("header")),
                onClick: a
            }, [ie(u.$slots, "header")], 2), fe(i(Pf), null, {
                default: ke(() => [dt(G("div", {
                    ref_key: "contentRef",
                    ref: s,
                    class: x(i(n).e("content"))
                }, [ie(u.$slots, "default")], 2), [[wn, l.value]])]), _: 3
            })], 2))
        }
    });
    var Zf = ge(ES, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/sidebar/src/sidebar-group.vue"]]);
    const PS = be({to: String, href: String, target: {type: String, default: "_blank"}, id: String, arrow: Boolean}),
        OS = X({name: "VsSidebarItem"}), AS = X({
            ...OS, props: PS, setup(e) {
                const t = e, n = Vf(), o = Yn(), r = me("sidebar-item"), s = Ae(wf);
                s || Sn("sidebar-item", "need to call inside the sidebar component");
                const l = () => {
                    t.id && s.handleClickItem(t.id), t.to ? n.push(t.to) : t.href && window.open(t.href, t.target)
                }, a = $(() => [r.b(), r.is("active", s.modelValue.value == t.id), r.is("has-icon", !!o.icon)]);
                return (u, c) => (w(), T("button", {class: x(i(a)), onClick: l}, [u.$slots.icon ? (w(), T("div", {
                    key: 0,
                    class: x(i(r).e("icon"))
                }, [ie(u.$slots, "icon")], 2)) : de("v-if", !0), G("div", {class: x(i(r).e("text"))}, [ie(u.$slots, "default")], 2), G("div", {class: x(i(r).e("text-tooltip"))}, [ie(u.$slots, "default")], 2), u.$slots.arrow ? ie(u.$slots, "arrow", {key: 1}) : u.arrow ? (w(), T("div", {
                    key: 2,
                    class: x(i(r).e("arrow"))
                }, [fe(i(Qo))], 2)) : de("v-if", !0)], 2))
            }
        });
    var Jf = ge(AS, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/sidebar/src/sidebar-item.vue"]]);
    const IS = be({
        color: Ze,
        background: Ze,
        modelValue: {type: String, default: null},
        reduce: {type: Boolean, default: !1},
        hoverExpand: {type: Boolean, default: !1},
        open: {type: Boolean, default: !1},
        notLineActive: {type: Boolean, default: !1},
        shape: {type: String, values: ["square"], default: ""},
        textWhite: {type: Boolean, default: !1},
        notShadow: {type: Boolean, default: !1},
        absolute: Boolean,
        right: {type: Boolean, default: !1}
    }), MS = {[Re]: e => Se(e), "update:open": e => at(e)}, BS = X({name: "VsSidebar"}), LS = X({
        ...BS, props: IS, emits: MS, setup(e, {emit: t}) {
            const n = e, o = me("sidebar"), r = $o("primary"), s = ee(), l = ee(260), a = ee(!1),
                u = $(() => [o.b(), _t(), o.is("reduce", a.value), o.is("open", n.open), o.is("not-line-active", n.notLineActive), o.is("not-shadow", n.notShadow), o.is("text-white", n.textWhite), o.is("absolute", n.absolute), o.is(n.shape, !!n.shape), o.is("right", n.right)]),
                c = $(() => [o.cssVar({color: tt(r.value)})]), f = () => {
                    n.hoverExpand && (a.value = !1)
                }, d = () => {
                    n.hoverExpand && (a.value = !0)
                }, p = () => {
                    t("update:open", !1)
                }, h = m => {
                    t("update:modelValue", m), p()
                };
            return $e(() => n.reduce, m => {
                const v = s.value;
                v && (a.value = m, m ? v.style.width = "50px" : v.style.width = `${l.value}px`)
            }), $e(a, m => {
                const v = s.value;
                v && (m ? v.style.width = "50px" : v.style.width = `${l.value}px`)
            }), $e(() => n.background, () => {
                Er("background", n.background || "", s.value, !0, o.namespace.value)
            }), et(wf, {modelValue: $(() => n.modelValue), reduce: $(() => n.reduce), handleClickItem: h}), ht(() => {
                l.value = s.value.offsetWidth, a.value = n.reduce, Er("background", n.background || "", s.value, !0, o.namespace.value), n.textWhite && Er("text", "#fff", s.value, !0, o.namespace.value)
            }), (m, v) => dt((w(), T("div", {
                ref_key: "sidebarRef",
                ref: s,
                class: x(i(u)),
                style: Ie(i(c)),
                onMouseenter: f,
                onMouseleave: d
            }, [m.$slots.logo ? (w(), T("div", {
                key: 0,
                class: x(i(o).e("logo"))
            }, [ie(m.$slots, "logo")], 2)) : de("v-if", !0), m.$slots.header ? (w(), T("div", {
                key: 1,
                class: x(i(o).e("header"))
            }, [ie(m.$slots, "header")], 2)) : de("v-if", !0), G("div", {class: x(i(o).e("body"))}, [ie(m.$slots, "default")], 2), m.$slots.footer ? (w(), T("div", {
                key: 2,
                class: x(i(o).e("footer"))
            }, [ie(m.$slots, "footer")], 2)) : de("v-if", !0)], 38)), [[i(Hf), p]])
        }
    });
    var RS = ge(LS, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/sidebar/src/sidebar.vue"]]);
    const NS = Ke(RS, {SidebarGroup: Zf, SidebarItem: Jf}), VS = xt(Zf), DS = xt(Jf), FS = be({
        color: Ze,
        modelValue: {type: [Boolean, String, Number], default: !1},
        activeValue: {type: [Boolean, String, Number], default: !0},
        inactiveValue: {type: [Boolean, String, Number], default: !1},
        disabled: {type: Boolean, default: !1},
        loading: {type: Boolean, default: !1},
        shape: {type: String, values: ["square"], default: null},
        indeterminate: {type: Boolean, default: !1},
        icon: {type: Boolean, default: !1}
    }), HS = {
        [Re]: e => at(e) || Se(e) || Pe(e),
        [Jo]: e => at(e) || Se(e) || Pe(e),
        [rl]: e => at(e) || Se(e) || Pe(e)
    }, jS = (e, t) => {
        const n = $(() => e.modelValue === e.activeValue), o = $(() => e.loading), r = $(() => e.disabled || o.value);
        [e.activeValue, e.inactiveValue].includes(e.modelValue) || (t(Re, e.inactiveValue), t(Jo, e.inactiveValue), t(rl, e.inactiveValue));
        const s = () => {
            const a = n.value ? e.inactiveValue : e.activeValue;
            t(Re, a), t(Jo, a), t(rl, a)
        };
        return {
            checked: n, isDisabled: r, isLoading: o, handleChange: s, switchValue: () => {
                r.value || s()
            }
        }
    }, zS = ["checked", "disabled", "readonly"], KS = X({name: "VsSwitch", inheritAttrs: !1}), US = X({
        ...KS, props: FS, emits: HS, setup(e, {expose: t, emit: n}) {
            const o = e, r = me("switch"), s = $o("primary"), {
                    isLoading: l,
                    checked: a,
                    isDisabled: u,
                    handleChange: c,
                    switchValue: f
                } = jS(o, n),
                d = $(() => [_t(), r.b(), r.is("loading", l.value), r.is(o.shape), r.is("indeterminate", o.indeterminate), r.is("icon", o.icon), r.is("disabled", u.value)]),
                p = $(() => [r.cssVar({color: tt(s.value)})]);
            return t({checked: a}), (h, m) => (w(), T("div", {
                type: "checkbox",
                class: x(i(d)),
                style: Ie(i(p)),
                onClick: m[1] || (m[1] = (...v) => i(f) && i(f)(...v))
            }, [G("input", {
                type: "checkbox",
                checked: i(a),
                disabled: i(u),
                readonly: i(u),
                class: x(i(r).e("input")),
                onChange: m[0] || (m[0] = (...v) => i(c) && i(c)(...v))
            }, null, 42, zS), G("div", {class: x(i(r).e("circle"))}, [ie(h.$slots, "circle"), i(l) ? (w(), Me(i(xn), {key: 0})) : de("v-if", !0)], 2), h.$slots.on || h.$slots.default ? (w(), T("div", {
                key: 0,
                class: x([i(r).e("text"), i(r).is("on")])
            }, [h.$slots.on ? ie(h.$slots, "on", {key: 0}) : h.$slots.default ? ie(h.$slots, "default", {key: 1}) : de("v-if", !0)], 2)) : de("v-if", !0), h.$slots.off || h.$slots.default ? (w(), T("div", {
                key: 1,
                class: x([i(r).e("text"), i(r).is("off")])
            }, [h.$slots.off ? ie(h.$slots, "off", {key: 0}) : h.$slots.default ? ie(h.$slots, "default", {key: 1}) : de("v-if", !0)], 2)) : de("v-if", !0), G("div", {class: x(i(r).e("background"))}, null, 2)], 6))
        }
    });
    var WS = ge(US, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/switch/src/switch.vue"]]);
    const qS = Ke(WS), YS = be({
        modelValue: {type: he([Array, String, Number, Object]), default: null},
        striped: Boolean,
        loading: Boolean,
        multiple: Boolean
    }), GS = {[Re]: e => ce(e) || Se(e) || Pe(e) || we(e)}, XS = (e, t) => {
        const n = me("table"), o = ee(0), r = ee(), s = $(() => e.multiple && ce(e.modelValue)),
            l = $(() => [n.b(), n.is("striped", e.striped), n.is("multiple", e.multiple)]), a = c => {
                const f = e.modelValue;
                e.modelValue.includes(c) ? f.splice(e.modelValue.indexOf(c), 1) : f.push(c), t(Re, f)
            }, u = c => {
                s.value ? a(c) : t(Re, c)
            };
        return ht(() => {
            var c;
            if (e.multiple && !ce(e.modelValue)) {
                const d = e.modelValue ? [e.modelValue] : [];
                t(Re, [...d])
            }
            const f = (c = r.value) == null ? void 0 : c.querySelectorAll("th");
            o.value = (f == null ? void 0 : f.length) || 0
        }), {tableKls: l, colspan: o, isMultipleSelected: s, selected: u, theadRef: r}
    }, ZS = ["colspan"], JS = X({name: "VsTable"}), QS = X({
        ...JS, props: YS, emits: GS, setup(e, {emit: t}) {
            const n = e, o = me("table"), {t: r} = Yl(), {tableKls: s, colspan: l, selected: a} = XS(n, t);
            return et(Cf, {
                selected: a,
                colspan: l,
                multiple: $(() => n.multiple),
                modelValue: $(() => n.modelValue)
            }), (u, c) => (w(), T("div", {class: x(i(o).b("wrapper"))}, [u.$slots.header ? (w(), T("div", {
                key: 0,
                class: x(i(o).be("wrapper", "header"))
            }, [ie(u.$slots, "header")], 2)) : de("v-if", !0), G("div", {class: x(i(s))}, [G("table", null, [G("thead", {
                ref: "theadRef",
                class: x(i(o).e("thead"))
            }, [ie(u.$slots, "thead")], 2), G("tbody", {class: x(i(o).e("tbody"))}, [ie(u.$slots, "tbody")], 2), G("tbody", {class: x(i(o).e("not-found"))}, [G("tr", null, [G("td", {colspan: i(l)}, [ie(u.$slots, "notFound", {}, () => [rt(ze(i(r)("vs.table.noMatch")), 1)])], 8, ZS)])], 2)])], 2), u.$slots.footer ? (w(), T("div", {
                key: 1,
                class: x(i(o).e("footer"))
            }, [ie(u.$slots, "footer")], 2)) : de("v-if", !0)], 2))
        }
    });
    var ex = ge(QS, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/table/src/table.vue"]]);
    const tx = be({checkbox: Boolean, edit: Boolean}), nx = {click: e => e instanceof Event}, ox = X({name: "VsTd"}),
        rx = X({
            ...ox, props: tx, emits: nx, setup(e, {emit: t}) {
                const n = e, o = me("table"),
                    r = $(() => [o.b("td"), o.is("has-checkbox", n.checkbox), o.is("edit", n.edit)]), s = l => {
                        t("click", l)
                    };
                return (l, a) => (w(), T("td", {class: x(i(r)), onClick: s}, [ie(l.$slots, "default")], 2))
            }
        });
    var Qf = ge(rx, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/table/src/td.vue"]]);
    const sx = be({sort: Boolean}), lx = X({name: "VsTh"}), ax = X({
        ...lx, props: sx, setup(e) {
            const t = e, n = me("table"), o = ee(), r = $(() => [n.b("th"), n.is("sort", t.sort)]);
            return ht(() => {
                o.value.style.width = `${o.value.scrollWidth}px`
            }), (s, l) => (w(), T("th", {
                ref_key: "thRef",
                ref: o,
                class: x(i(r))
            }, [G("div", {class: x(i(n).be("th", "content"))}, [ie(s.$slots, "default"), s.sort ? (w(), T("div", {
                key: 0,
                class: x(i(n).be("th", "icon"))
            }, [fe(i(Qo), {class: "icon-sort-1"}), fe(i(Qo), {class: "icon-sort-2"})], 2)) : de("v-if", !0)], 2)], 2))
        }
    });
    var ed = ge(ax, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/table/src/th.vue"]]);
    const ix = be({
            color: Ze,
            data: {type: he([String, Number, Object]), default: null},
            notClickSelected: Boolean,
            openExpandOnlyTd: Boolean
        }), ux = {click: e => e instanceof Event, selected: e => Se(e) || Pe(e) || we(e)}, cx = ["colspan"],
        fx = X({name: "VsTr"}), dx = X({
            ...fx, props: ix, emits: ux, setup(e, {emit: t}) {
                const n = e, o = me("table"), r = Yn(), s = Ae(Cf);
                s || Sn("vs-tr", "component must be called inside table component");
                const l = ee(), a = ee(), u = ee(!1),
                    c = $(() => (ce(s.modelValue.value) ? s.modelValue.value : [s.modelValue.value]).includes(m => At(m, n.data))),
                    f = $(() => [_t(n.color), o.b("tr"), o.is("selected", c.value), o.is("expand", u.value), o.is("has-expand-slot", !!r.expand)]),
                    d = $(() => [o.cssVar({color: tt(n.color)})]), p = h => {
                        r.expand && (h.target.className.includes(o.is("edit")) || (u.value = !u.value)), h.target.nodeName == "TD" && !n.notClickSelected && (s.selected(n.data), t("selected", n.data)), t("click", h)
                    };
                return $e(u, h => {
                    h && De(() => {
                        const m = a.value;
                        m && (m.style.height = `${m.scrollHeight}px`)
                    })
                }), $e(() => n.data, () => {
                    var h;
                    (h = l.value) == null || h.style.removeProperty(o.cssVarName("color")), u.value = !1
                }), (h, m) => (w(), T(ve, null, [G("tr", {
                    ref_key: "trRef",
                    ref: l,
                    class: x(i(f)),
                    style: Ie(i(d)),
                    onClick: p
                }, [ie(h.$slots, "default")], 6), h.$slots.expand ? (w(), Me(Lt, {
                    key: 0,
                    name: "fade-expand"
                }, {
                    default: ke(() => [u.value ? (w(), T("tr", {
                        key: 0,
                        ref_key: "trRef",
                        ref: l,
                        class: x(i(o).be("tr-expand", "row"))
                    }, [G("td", {
                        class: x(i(o).be("tr-expand", "td")),
                        colspan: i(i(s).colspan)
                    }, [G("div", {
                        ref: "contentRef",
                        class: x(i(o).be("tr-expand", "content"))
                    }, [G("div", {class: x(i(o).bem("tr-expand", "content", "inner"))}, [ie(h.$slots, "default")], 2)], 2)], 10, cx)], 2)) : de("v-if", !0)]),
                    _: 3
                })) : de("v-if", !0)], 64))
            }
        });
    var td = ge(dx, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/table/src/tr.vue"]]);
    const px = Ke(ex, {Td: Qf, Th: ed, Tr: td}), hx = xt(Qf), vx = xt(ed), mx = xt(td);
    var nd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

    function od(e) {
        return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
    }

    var rd = {exports: {}};
    (function (e, t) {
        (function (n, o) {
            e.exports = o()
        })(nd, function () {
            var n = 1e3, o = 6e4, r = 36e5, s = "millisecond", l = "second", a = "minute", u = "hour", c = "day",
                f = "week", d = "month", p = "quarter", h = "year", m = "date", v = "Invalid Date",
                S = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                P = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    ordinal: function (M) {
                        var I = ["th", "st", "nd", "rd"], B = M % 100;
                        return "[" + M + (I[(B - 20) % 10] || I[B] || I[0]) + "]"
                    }
                }, H = function (M, I, B) {
                    var W = String(M);
                    return !W || W.length >= I ? M : "" + Array(I + 1 - W.length).join(B) + M
                }, D = {
                    s: H, z: function (M) {
                        var I = -M.utcOffset(), B = Math.abs(I), W = Math.floor(B / 60), V = B % 60;
                        return (I <= 0 ? "+" : "-") + H(W, 2, "0") + ":" + H(V, 2, "0")
                    }, m: function M(I, B) {
                        if (I.date() < B.date()) return -M(B, I);
                        var W = 12 * (B.year() - I.year()) + (B.month() - I.month()), V = I.clone().add(W, d),
                            j = B - V < 0, Z = I.clone().add(W + (j ? -1 : 1), d);
                        return +(-(W + (B - V) / (j ? V - Z : Z - V)) || 0)
                    }, a: function (M) {
                        return M < 0 ? Math.ceil(M) || 0 : Math.floor(M)
                    }, p: function (M) {
                        return {
                            M: d,
                            y: h,
                            w: f,
                            d: c,
                            D: m,
                            h: u,
                            m: a,
                            s: l,
                            ms: s,
                            Q: p
                        }[M] || String(M || "").toLowerCase().replace(/s$/, "")
                    }, u: function (M) {
                        return M === void 0
                    }
                }, U = "en", R = {};
            R[U] = C;
            var A = function (M) {
                return M instanceof K
            }, k = function M(I, B, W) {
                var V;
                if (!I) return U;
                if (typeof I == "string") {
                    var j = I.toLowerCase();
                    R[j] && (V = j), B && (R[j] = B, V = j);
                    var Z = I.split("-");
                    if (!V && Z.length > 1) return M(Z[0])
                } else {
                    var _e = I.name;
                    R[_e] = I, V = _e
                }
                return !W && V && (U = V), V || !W && U
            }, _ = function (M, I) {
                if (A(M)) return M.clone();
                var B = typeof I == "object" ? I : {};
                return B.date = M, B.args = arguments, new K(B)
            }, y = D;
            y.l = k, y.i = A, y.w = function (M, I) {
                return _(M, {locale: I.$L, utc: I.$u, x: I.$x, $offset: I.$offset})
            };
            var K = function () {
                function M(B) {
                    this.$L = k(B.locale, null, !0), this.parse(B)
                }

                var I = M.prototype;
                return I.parse = function (B) {
                    this.$d = function (W) {
                        var V = W.date, j = W.utc;
                        if (V === null) return new Date(NaN);
                        if (y.u(V)) return new Date;
                        if (V instanceof Date) return new Date(V);
                        if (typeof V == "string" && !/Z$/i.test(V)) {
                            var Z = V.match(S);
                            if (Z) {
                                var _e = Z[2] - 1 || 0, xe = (Z[7] || "0").substring(0, 3);
                                return j ? new Date(Date.UTC(Z[1], _e, Z[3] || 1, Z[4] || 0, Z[5] || 0, Z[6] || 0, xe)) : new Date(Z[1], _e, Z[3] || 1, Z[4] || 0, Z[5] || 0, Z[6] || 0, xe)
                            }
                        }
                        return new Date(V)
                    }(B), this.$x = B.x || {}, this.init()
                }, I.init = function () {
                    var B = this.$d;
                    this.$y = B.getFullYear(), this.$M = B.getMonth(), this.$D = B.getDate(), this.$W = B.getDay(), this.$H = B.getHours(), this.$m = B.getMinutes(), this.$s = B.getSeconds(), this.$ms = B.getMilliseconds()
                }, I.$utils = function () {
                    return y
                }, I.isValid = function () {
                    return this.$d.toString() !== v
                }, I.isSame = function (B, W) {
                    var V = _(B);
                    return this.startOf(W) <= V && V <= this.endOf(W)
                }, I.isAfter = function (B, W) {
                    return _(B) < this.startOf(W)
                }, I.isBefore = function (B, W) {
                    return this.endOf(W) < _(B)
                }, I.$g = function (B, W, V) {
                    return y.u(B) ? this[W] : this.set(V, B)
                }, I.unix = function () {
                    return Math.floor(this.valueOf() / 1e3)
                }, I.valueOf = function () {
                    return this.$d.getTime()
                }, I.startOf = function (B, W) {
                    var V = this, j = !!y.u(W) || W, Z = y.p(B), _e = function (se, te) {
                        var ue = y.w(V.$u ? Date.UTC(V.$y, te, se) : new Date(V.$y, te, se), V);
                        return j ? ue : ue.endOf(c)
                    }, xe = function (se, te) {
                        return y.w(V.toDate()[se].apply(V.toDate("s"), (j ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(te)), V)
                    }, Ee = this.$W, Ne = this.$M, Ye = this.$D, Qe = "set" + (this.$u ? "UTC" : "");
                    switch (Z) {
                        case h:
                            return j ? _e(1, 0) : _e(31, 11);
                        case d:
                            return j ? _e(1, Ne) : _e(0, Ne + 1);
                        case f:
                            var Ve = this.$locale().weekStart || 0, z = (Ee < Ve ? Ee + 7 : Ee) - Ve;
                            return _e(j ? Ye - z : Ye + (6 - z), Ne);
                        case c:
                        case m:
                            return xe(Qe + "Hours", 0);
                        case u:
                            return xe(Qe + "Minutes", 1);
                        case a:
                            return xe(Qe + "Seconds", 2);
                        case l:
                            return xe(Qe + "Milliseconds", 3);
                        default:
                            return this.clone()
                    }
                }, I.endOf = function (B) {
                    return this.startOf(B, !1)
                }, I.$set = function (B, W) {
                    var V, j = y.p(B), Z = "set" + (this.$u ? "UTC" : ""),
                        _e = (V = {}, V[c] = Z + "Date", V[m] = Z + "Date", V[d] = Z + "Month", V[h] = Z + "FullYear", V[u] = Z + "Hours", V[a] = Z + "Minutes", V[l] = Z + "Seconds", V[s] = Z + "Milliseconds", V)[j],
                        xe = j === c ? this.$D + (W - this.$W) : W;
                    if (j === d || j === h) {
                        var Ee = this.clone().set(m, 1);
                        Ee.$d[_e](xe), Ee.init(), this.$d = Ee.set(m, Math.min(this.$D, Ee.daysInMonth())).$d
                    } else _e && this.$d[_e](xe);
                    return this.init(), this
                }, I.set = function (B, W) {
                    return this.clone().$set(B, W)
                }, I.get = function (B) {
                    return this[y.p(B)]()
                }, I.add = function (B, W) {
                    var V, j = this;
                    B = Number(B);
                    var Z = y.p(W), _e = function (Ne) {
                        var Ye = _(j);
                        return y.w(Ye.date(Ye.date() + Math.round(Ne * B)), j)
                    };
                    if (Z === d) return this.set(d, this.$M + B);
                    if (Z === h) return this.set(h, this.$y + B);
                    if (Z === c) return _e(1);
                    if (Z === f) return _e(7);
                    var xe = (V = {}, V[a] = o, V[u] = r, V[l] = n, V)[Z] || 1, Ee = this.$d.getTime() + B * xe;
                    return y.w(Ee, this)
                }, I.subtract = function (B, W) {
                    return this.add(-1 * B, W)
                }, I.format = function (B) {
                    var W = this, V = this.$locale();
                    if (!this.isValid()) return V.invalidDate || v;
                    var j = B || "YYYY-MM-DDTHH:mm:ssZ", Z = y.z(this), _e = this.$H, xe = this.$m, Ee = this.$M,
                        Ne = V.weekdays, Ye = V.months, Qe = V.meridiem, Ve = function (te, ue, Ce, g) {
                            return te && (te[ue] || te(W, j)) || Ce[ue].slice(0, g)
                        }, z = function (te) {
                            return y.s(_e % 12 || 12, te, "0")
                        }, se = Qe || function (te, ue, Ce) {
                            var g = te < 12 ? "AM" : "PM";
                            return Ce ? g.toLowerCase() : g
                        };
                    return j.replace(P, function (te, ue) {
                        return ue || function (Ce) {
                            switch (Ce) {
                                case"YY":
                                    return String(W.$y).slice(-2);
                                case"YYYY":
                                    return y.s(W.$y, 4, "0");
                                case"M":
                                    return Ee + 1;
                                case"MM":
                                    return y.s(Ee + 1, 2, "0");
                                case"MMM":
                                    return Ve(V.monthsShort, Ee, Ye, 3);
                                case"MMMM":
                                    return Ve(Ye, Ee);
                                case"D":
                                    return W.$D;
                                case"DD":
                                    return y.s(W.$D, 2, "0");
                                case"d":
                                    return String(W.$W);
                                case"dd":
                                    return Ve(V.weekdaysMin, W.$W, Ne, 2);
                                case"ddd":
                                    return Ve(V.weekdaysShort, W.$W, Ne, 3);
                                case"dddd":
                                    return Ne[W.$W];
                                case"H":
                                    return String(_e);
                                case"HH":
                                    return y.s(_e, 2, "0");
                                case"h":
                                    return z(1);
                                case"hh":
                                    return z(2);
                                case"a":
                                    return se(_e, xe, !0);
                                case"A":
                                    return se(_e, xe, !1);
                                case"m":
                                    return String(xe);
                                case"mm":
                                    return y.s(xe, 2, "0");
                                case"s":
                                    return String(W.$s);
                                case"ss":
                                    return y.s(W.$s, 2, "0");
                                case"SSS":
                                    return y.s(W.$ms, 3, "0");
                                case"Z":
                                    return Z
                            }
                            return null
                        }(te) || Z.replace(":", "")
                    })
                }, I.utcOffset = function () {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }, I.diff = function (B, W, V) {
                    var j, Z = this, _e = y.p(W), xe = _(B), Ee = (xe.utcOffset() - this.utcOffset()) * o,
                        Ne = this - xe, Ye = function () {
                            return y.m(Z, xe)
                        };
                    switch (_e) {
                        case h:
                            j = Ye() / 12;
                            break;
                        case d:
                            j = Ye();
                            break;
                        case p:
                            j = Ye() / 3;
                            break;
                        case f:
                            j = (Ne - Ee) / 6048e5;
                            break;
                        case c:
                            j = (Ne - Ee) / 864e5;
                            break;
                        case u:
                            j = Ne / r;
                            break;
                        case a:
                            j = Ne / o;
                            break;
                        case l:
                            j = Ne / n;
                            break;
                        default:
                            j = Ne
                    }
                    return V ? j : y.a(j)
                }, I.daysInMonth = function () {
                    return this.endOf(d).$D
                }, I.$locale = function () {
                    return R[this.$L]
                }, I.locale = function (B, W) {
                    if (!B) return this.$L;
                    var V = this.clone(), j = k(B, W, !0);
                    return j && (V.$L = j), V
                }, I.clone = function () {
                    return y.w(this.$d, this)
                }, I.toDate = function () {
                    return new Date(this.valueOf())
                }, I.toJSON = function () {
                    return this.isValid() ? this.toISOString() : null
                }, I.toISOString = function () {
                    return this.$d.toISOString()
                }, I.toString = function () {
                    return this.$d.toUTCString()
                }, M
            }(), E = K.prototype;
            return _.prototype = E, [["$ms", s], ["$s", l], ["$m", a], ["$H", u], ["$W", c], ["$M", d], ["$y", h], ["$D", m]].forEach(function (M) {
                E[M[1]] = function (I) {
                    return this.$g(I, M[0], M[1])
                }
            }), _.extend = function (M, I) {
                return M.$i || (M(I, K, _), M.$i = !0), _
            }, _.locale = k, _.isDayjs = A, _.unix = function (M) {
                return _(1e3 * M)
            }, _.en = R[U], _.Ls = R, _.p = {}, _
        })
    })(rd);
    var gx = rd.exports;
    const ks = od(gx);
    var sd = {exports: {}};
    (function (e, t) {
        (function (n, o) {
            e.exports = o()
        })(nd, function () {
            var n = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                }, o = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
                r = /\d\d/, s = /\d\d?/, l = /\d*[^-_:/,()\s\d]+/, a = {}, u = function (v) {
                    return (v = +v) + (v > 68 ? 1900 : 2e3)
                }, c = function (v) {
                    return function (S) {
                        this[v] = +S
                    }
                }, f = [/[+-]\d\d:?(\d\d)?|Z/, function (v) {
                    (this.zone || (this.zone = {})).offset = function (S) {
                        if (!S || S === "Z") return 0;
                        var P = S.match(/([+-]|\d\d)/g), C = 60 * P[1] + (+P[2] || 0);
                        return C === 0 ? 0 : P[0] === "+" ? -C : C
                    }(v)
                }], d = function (v) {
                    var S = a[v];
                    return S && (S.indexOf ? S : S.s.concat(S.f))
                }, p = function (v, S) {
                    var P, C = a.meridiem;
                    if (C) {
                        for (var H = 1; H <= 24; H += 1) if (v.indexOf(C(H, 0, S)) > -1) {
                            P = H > 12;
                            break
                        }
                    } else P = v === (S ? "pm" : "PM");
                    return P
                }, h = {
                    A: [l, function (v) {
                        this.afternoon = p(v, !1)
                    }],
                    a: [l, function (v) {
                        this.afternoon = p(v, !0)
                    }],
                    S: [/\d/, function (v) {
                        this.milliseconds = 100 * +v
                    }],
                    SS: [r, function (v) {
                        this.milliseconds = 10 * +v
                    }],
                    SSS: [/\d{3}/, function (v) {
                        this.milliseconds = +v
                    }],
                    s: [s, c("seconds")],
                    ss: [s, c("seconds")],
                    m: [s, c("minutes")],
                    mm: [s, c("minutes")],
                    H: [s, c("hours")],
                    h: [s, c("hours")],
                    HH: [s, c("hours")],
                    hh: [s, c("hours")],
                    D: [s, c("day")],
                    DD: [r, c("day")],
                    Do: [l, function (v) {
                        var S = a.ordinal, P = v.match(/\d+/);
                        if (this.day = P[0], S) for (var C = 1; C <= 31; C += 1) S(C).replace(/\[|\]/g, "") === v && (this.day = C)
                    }],
                    M: [s, c("month")],
                    MM: [r, c("month")],
                    MMM: [l, function (v) {
                        var S = d("months"), P = (d("monthsShort") || S.map(function (C) {
                            return C.slice(0, 3)
                        })).indexOf(v) + 1;
                        if (P < 1) throw new Error;
                        this.month = P % 12 || P
                    }],
                    MMMM: [l, function (v) {
                        var S = d("months").indexOf(v) + 1;
                        if (S < 1) throw new Error;
                        this.month = S % 12 || S
                    }],
                    Y: [/[+-]?\d+/, c("year")],
                    YY: [r, function (v) {
                        this.year = u(v)
                    }],
                    YYYY: [/\d{4}/, c("year")],
                    Z: f,
                    ZZ: f
                };

            function m(v) {
                var S, P;
                S = v, P = a && a.formats;
                for (var C = (v = S.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function (_, y, K) {
                    var E = K && K.toUpperCase();
                    return y || P[K] || n[K] || P[E].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function (M, I, B) {
                        return I || B.slice(1)
                    })
                })).match(o), H = C.length, D = 0; D < H; D += 1) {
                    var U = C[D], R = h[U], A = R && R[0], k = R && R[1];
                    C[D] = k ? {regex: A, parser: k} : U.replace(/^\[|\]$/g, "")
                }
                return function (_) {
                    for (var y = {}, K = 0, E = 0; K < H; K += 1) {
                        var M = C[K];
                        if (typeof M == "string") E += M.length; else {
                            var I = M.regex, B = M.parser, W = _.slice(E), V = I.exec(W)[0];
                            B.call(y, V), _ = _.replace(V, "")
                        }
                    }
                    return function (j) {
                        var Z = j.afternoon;
                        if (Z !== void 0) {
                            var _e = j.hours;
                            Z ? _e < 12 && (j.hours += 12) : _e === 12 && (j.hours = 0), delete j.afternoon
                        }
                    }(y), y
                }
            }

            return function (v, S, P) {
                P.p.customParseFormat = !0, v && v.parseTwoDigitYear && (u = v.parseTwoDigitYear);
                var C = S.prototype, H = C.parse;
                C.parse = function (D) {
                    var U = D.date, R = D.utc, A = D.args;
                    this.$u = R;
                    var k = A[1];
                    if (typeof k == "string") {
                        var _ = A[2] === !0, y = A[3] === !0, K = _ || y, E = A[2];
                        y && (E = A[2]), a = this.$locale(), !_ && E && (a = P.Ls[E]), this.$d = function (W, V, j) {
                            try {
                                if (["x", "X"].indexOf(V) > -1) return new Date((V === "X" ? 1e3 : 1) * W);
                                var Z = m(V)(W), _e = Z.year, xe = Z.month, Ee = Z.day, Ne = Z.hours, Ye = Z.minutes,
                                    Qe = Z.seconds, Ve = Z.milliseconds, z = Z.zone, se = new Date,
                                    te = Ee || (_e || xe ? 1 : se.getDate()), ue = _e || se.getFullYear(), Ce = 0;
                                _e && !xe || (Ce = xe > 0 ? xe - 1 : se.getMonth());
                                var g = Ne || 0, b = Ye || 0, O = Qe || 0, F = Ve || 0;
                                return z ? new Date(Date.UTC(ue, Ce, te, g, b, O, F + 60 * z.offset * 1e3)) : j ? new Date(Date.UTC(ue, Ce, te, g, b, O, F)) : new Date(ue, Ce, te, g, b, O, F)
                            } catch {
                                return new Date("")
                            }
                        }(U, k, R), this.init(), E && E !== !0 && (this.$L = this.locale(E).$L), K && U != this.format(k) && (this.$d = new Date("")), a = {}
                    } else if (k instanceof Array) for (var M = k.length, I = 1; I <= M; I += 1) {
                        A[1] = k[I - 1];
                        var B = P.apply(this, A);
                        if (B.isValid()) {
                            this.$d = B.$d, this.$L = B.$L, this.init();
                            break
                        }
                        I === M && (this.$d = new Date(""))
                    } else H.call(this, D)
                }
            }
        })
    })(sd);
    var yx = sd.exports;
    const bx = od(yx), Yt = e => {
        const t = (e || "").split(":");
        if (t.length >= 2) {
            let n = Number.parseInt(t[0], 10);
            const o = Number.parseInt(t[1], 10), r = e.toUpperCase();
            return r.includes("AM") && n === 12 ? n = 0 : r.includes("PM") && n !== 12 && (n += 12), {
                hours: n,
                minutes: o
            }
        }
        return null
    }, Ts = (e, t) => {
        const n = Yt(e);
        if (!n) return -1;
        const o = Yt(t);
        if (!o) return -1;
        const r = n.minutes + n.hours * 60, s = o.minutes + o.hours * 60;
        return r === s ? 0 : r > s ? 1 : -1
    }, cu = e => `${e}`.padStart(2, "0"), oo = e => `${cu(e.hours)}:${cu(e.minutes)}`, _x = (e, t) => {
        const n = Yt(e);
        if (!n) return "";
        const o = Yt(t);
        if (!o) return "";
        const r = {hours: n.hours, minutes: n.minutes};
        return r.minutes += o.minutes, r.hours += o.hours, r.hours += Math.floor(r.minutes / 60), r.minutes = r.minutes % 60, oo(r)
    }, wx = {
        format: {type: String, default: "HH:mm"},
        modelValue: String,
        disabled: Boolean,
        editable: {type: Boolean, default: !0},
        effect: {type: String, default: null},
        clearable: {type: Boolean, default: !0},
        placeholder: String,
        start: {type: String, default: "09:00"},
        end: {type: String, default: "18:00"},
        step: {type: String, default: "00:30"},
        minTime: String,
        maxTime: String,
        name: String,
        clearIcon: {type: he([String, Object]), default: () => $2},
        disabledItems: {type: he(Array), default: () => []}
    }, Cx = X({name: "VsTimeSelect"}), $x = X({
        ...Cx, props: wx, emits: ["change", "blur", "focus", Re], setup(e, {expose: t}) {
            const n = e;
            ks.extend(bx);
            const o = ee(), r = $(() => ks(n.modelValue || s.value, "HH:mm").format(n.format)), s = $(() => {
                const h = Yt(n.start);
                return h ? oo(h) : null
            }), l = $(() => {
                const h = Yt(n.end);
                return h ? oo(h) : null
            }), a = $(() => {
                const h = Yt(n.step);
                return h ? oo(h) : null
            }), u = $(() => {
                const h = Yt(n.minTime || "");
                return h ? oo(h) : null
            }), c = $(() => {
                const h = Yt(n.maxTime || "");
                return h ? oo(h) : null
            }), f = $(() => {
                const h = [];
                if (n.start && n.end && n.step) {
                    let m = s.value, v;
                    for (; m && l.value && Ts(m, l.value) <= 0;) v = ks(m, "HH:mm").format(n.format), h.push({
                        value: v,
                        disabled: n.disabledItems.includes(m) || Ts(m, u.value || "-1:-1") <= 0 || Ts(m, c.value || "100:100") >= 0
                    }), m = _x(m, a.value)
                }
                return h
            });
            return t({
                focus: () => {
                    var h;
                    (h = o.value) == null || h.focus()
                }, blur: () => {
                    var h;
                    (h = o.value) == null || h.blur()
                }
            }), (h, m) => (w(), Me(i(ea), {
                ref_key: "selectInstance",
                ref: o,
                "model-value": i(r),
                disabled: h.disabled,
                clearable: h.clearable,
                "clear-icon": h.clearIcon,
                effect: h.effect,
                placeholder: h.placeholder,
                "default-first-option": "",
                filter: h.editable,
                "onUpdate:modelValue": m[0] || (m[0] = v => h.$emit("update:modelValue", v)),
                onChange: m[1] || (m[1] = v => h.$emit("change", v)),
                onBlur: m[2] || (m[2] = v => h.$emit("blur", v)),
                onFocus: m[3] || (m[3] = v => h.$emit("focus", v))
            }, {
                default: ke(() => [(w(!0), T(ve, null, zn(i(f), v => (w(), Me(i(ta), {
                    key: v.value,
                    label: v.value,
                    value: v.value,
                    disabled: v.disabled
                }, null, 8, ["label", "value", "disabled"]))), 128))]), _: 1
            }, 8, ["model-value", "disabled", "clearable", "clear-icon", "effect", "placeholder", "filter"]))
        }
    });
    var Sx = ge($x, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/time-select/src/time-select.vue"]]);
    const xx = Ke(Sx), kx = be({
        ...Kf,
        color: Ze,
        animation: {type: String, default: "tooltip"},
        interactivity: {type: Boolean, default: !1},
        appendTo: {type: he(String)},
        type: {type: String, values: ["shadow", "border", "border-thick"], default: ""},
        shape: {type: String, values: ["circle", "square", "default"], default: ""},
        effect: {type: String, values: ["light", "dark"], default: "dark"},
        showArrow: {type: Boolean, default: !0},
        loading: Boolean,
        offset: {type: Number, default: 8},
        bottom: Boolean,
        left: Boolean,
        right: Boolean,
        top: Boolean,
        notHover: Boolean,
        shadow: Boolean,
        border: Boolean,
        borderThick: Boolean,
        square: Boolean,
        circle: Boolean
    }), Tx = e => {
        it({
            scope: "vs-tooltip",
            type: "Prop",
            from: "[top, right, bottom, left]",
            version: "0.0.2",
            replacement: "placement",
            ref: "https://vuesax.space/components/tooltip#props"
        }, $(() => e.top || e.right || e.bottom || e.left)), it({
            scope: "vs-tooltip",
            type: "Prop",
            from: "notHover",
            version: "0.0.2",
            replacement: "trigger",
            ref: "https://vuesax.space/components/tooltip#props"
        }, $(() => e.notHover)), it({
            scope: "vs-tooltip",
            type: "Prop",
            from: "[border, borderThick]",
            version: "0.0.2",
            replacement: "type",
            ref: "https://vuesax.space/components/tooltip#props"
        }, $(() => e.border || e.borderThick)), it({
            scope: "vs-tooltip",
            type: "Prop",
            from: "shadow",
            version: "0.0.2",
            replacement: "type",
            ref: "https://vuesax.space/components/tooltip#props"
        }, $(() => e.shadow)), it({
            scope: "vs-tooltip",
            type: "Prop",
            from: "square | circle",
            version: "0.0.2",
            replacement: "shape",
            ref: "https://vuesax.space/components/tooltip#props"
        }, $(() => e.square || e.circle))
    }, Ex = X({name: "VsTooltip"}), Px = X({
        ...Ex, props: kx, setup(e, {expose: t}) {
            const n = e, o = me("tooltip"), r = ee(), s = $(() => [o.cssVar({color: tt(n.color)})]),
                l = $(() => [o.b(), _t(n.color), o.is("loading", n.loading), o.is(n.type, !!n.type), o.is(n.shape, !!n.shape), o.is("not-arrow", !n.showArrow), o.is(n.effect)]);
            return Tx(n), t(pt({...r.value})), (a, u) => {
                var c, f;
                return w(), Me(i(Wf), {
                    ref_key: "popperRef",
                    ref: r,
                    interactivity: a.interactivity,
                    "popper-class": [i(l), (c = a.popperClass) != null ? c : ""],
                    "popper-style": [(f = a.popperStyle) != null ? f : "", i(s)],
                    animation: a.animation,
                    "append-to": a.appendTo,
                    flip: a.flip,
                    "window-resize": a.windowResize,
                    "window-scroll": a.windowScroll,
                    disabled: a.disabled,
                    fit: a.fit,
                    loading: a.loading,
                    "hide-after": a.hideAfter,
                    offset: a.offset,
                    placement: a.placement,
                    options: a.options,
                    "show-after": a.showAfter,
                    "show-arrow": a.showArrow,
                    strategy: a.strategy,
                    teleported: a.teleported,
                    trigger: a.trigger,
                    "trigger-class": a.triggerClass,
                    "trigger-style": a.triggerStyle,
                    "virtual-ref": a.virtualRef,
                    "virtual-triggering": a.virtualTriggering,
                    "z-index": a.zIndex,
                    "on-blur": a.onBlur,
                    "on-click": a.onClick,
                    "on-focus": a.onFocus,
                    "on-keydown": a.onKeydown,
                    "on-contextmenu": a.onContextmenu,
                    "on-mouseenter": a.onMouseenter,
                    "on-mouseleave": a.onMouseleave
                }, {
                    content: ke(() => [ie(a.$slots, "content")]),
                    default: ke(() => [ie(a.$slots, "default")]),
                    _: 3
                }, 8, ["interactivity", "popper-class", "popper-style", "animation", "append-to", "flip", "window-resize", "window-scroll", "disabled", "fit", "loading", "hide-after", "offset", "placement", "options", "show-after", "show-arrow", "strategy", "teleported", "trigger", "trigger-class", "trigger-style", "virtual-ref", "virtual-triggering", "z-index", "on-blur", "on-click", "on-focus", "on-keydown", "on-contextmenu", "on-mouseenter", "on-mouseleave"])
            }
        }
    });
    var Ox = ge(Px, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/tooltip/src/tooltip.vue"]]);
    const Ax = Ke(Ox);
    var Ix = [G1, rw, sw, dw, pw, Bw, Lw, Jw, Qw, rC, er, dC, bo, Bf, $$, ta, LC, NC, RC, eS, uS, gS, xS, Ql, ea, qS, NS, VS, DS, px, hx, vx, mx, xx, Ax];
    const It = "VsInfiniteScroll", Mx = 50, Bx = 200, Lx = 0, Rx = {
        delay: {type: Number, default: Bx},
        distance: {type: Number, default: Lx},
        disabled: {type: Boolean, default: !1},
        immediate: {type: Boolean, default: !0}
    }, na = (e, t) => Object.entries(Rx).reduce((n, [o, r]) => {
        var s, l;
        const {type: a, default: u} = r, c = e.getAttribute(`infinite-scroll-${o}`);
        let f = (l = (s = t[c]) != null ? s : c) != null ? l : u;
        return f = f === "false" ? !1 : f, f = a(f), n[o] = Number.isNaN(f) ? u : f, n
    }, {}), ld = e => {
        const {observer: t} = e[It];
        t && (t.disconnect(), delete e[It].observer)
    }, Nx = (e, t) => {
        const {container: n, containerEl: o, instance: r, observer: s, lastScrollTop: l} = e[It], {
            disabled: a,
            distance: u
        } = na(e, r), {clientHeight: c, scrollHeight: f, scrollTop: d} = o, p = d - l;
        if (e[It].lastScrollTop = d, s || a || p < 0) return;
        let h = !1;
        if (n === e) h = f - (c + d) <= u; else {
            const {clientTop: m, scrollHeight: v} = e, S = X0(e, o);
            h = d + c >= S + m + v - u
        }
        h && t.call(r)
    };

    function Es(e, t) {
        const {containerEl: n, instance: o} = e[It], {disabled: r} = na(e, o);
        r || n.clientHeight === 0 || (n.scrollHeight <= n.clientHeight ? t.call(o) : ld(e))
    }

    const Vx = {
        async mounted(e, t) {
            const {instance: n, value: o} = t;
            ye(o) || Sn(It, "'v-infinite-scroll' binding value must be a function"), await De();
            const {delay: r, immediate: s} = na(e, n), l = o_(e, !0), a = l === window ? document.documentElement : l,
                u = Ni(Nx.bind(null, e, o), r);
            if (l) {
                if (e[It] = {
                    instance: n,
                    container: l,
                    containerEl: a,
                    delay: r,
                    cb: o,
                    onScroll: u,
                    lastScrollTop: a.scrollTop
                }, s) {
                    const c = new MutationObserver(Ni(Es.bind(null, e, o), Mx));
                    e[It].observer = c, c.observe(e, {childList: !0, subtree: !0}), Es(e, o)
                }
                l.addEventListener("scroll", u)
            }
        }, unmounted(e) {
            const {container: t, onScroll: n} = e[It];
            t == null || t.removeEventListener("scroll", n), ld(e)
        }, async updated(e) {
            e[It] || await De();
            const {containerEl: t, cb: n, observer: o} = e[It];
            t.clientHeight && o && Es(e, n)
        }
    }, sl = Vx;
    sl.install = e => {
        e.directive("InfiniteScroll", sl)
    };
    const Dx = sl;
    var fu;
    const oa = typeof window < "u";
    oa && ((fu = window == null ? void 0 : window.navigator) != null && fu.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);

    function Fx(e) {
        return typeof e == "function" ? e() : i(e)
    }

    function Hx(e) {
        return Wr() ? (qr(e), !0) : !1
    }

    function jx(e, t, n = {}) {
        const {immediate: o = !0} = n, r = ee(!1);
        let s = null;

        function l() {
            s && (clearTimeout(s), s = null)
        }

        function a() {
            r.value = !1, l()
        }

        function u(...c) {
            l(), r.value = !0, s = setTimeout(() => {
                r.value = !1, s = null, e(...c)
            }, Fx(t))
        }

        return o && (r.value = !0, oa && u()), Hx(a), {isPending: nr(r), start: u, stop: a}
    }

    const zx = ["atom", "ball", "scale", "waves", "border", "points", "square", "circles", "corners", "default", "gradient", "rectangle", "square-rotate"],
        Kx = be({
            type: {type: he(String), values: zx, default: "default"},
            text: String,
            scale: {type: he([String, Number]), validator: e => Pe(e) || Nn(e), default: 1},
            color: Ze,
            target: {type: he([String, Object])},
            opacity: {type: he([String, Number]), validator: e => Pe(e) || Nn(e), default: .6},
            percent: {type: he([String, Number]), validator: e => Pe(e) || Nn(e)},
            progress: {type: he([String, Number]), validator: e => Pe(e) || Nn(e)},
            background: Ze
        }), Ux = X({name: "VsLoading"}), Wx = X({
            ...Ux, props: Kx, setup(e, {expose: t}) {
                const n = e, {ns: o, zIndex: r} = Xl("loading"), {currentZIndex: s} = r, l = ee(), a = $o("primary"),
                    u = yo("background"), c = yo("type"),
                    f = $(() => [o.b(), c.value && o.m(c.value), o.is("has-target", !!i(n.target))]),
                    d = $(() => [o.cssVar({color: tt(a), background: tt(u), opacity: `${i(n.opacity)}`}), {zIndex: i(s)}]);
                return t({
                    close: () => {
                        var h;
                        (h = l.value) == null || h.remove()
                    }
                }), (h, m) => (w(), T("div", {
                    ref_key: "loadingRef",
                    ref: l,
                    class: x(i(f)),
                    style: Ie(i(d))
                }, [G("div", {
                    class: x(i(o).e("load")),
                    style: Ie([{transform: `scale(${i(h.scale)})`}])
                }, [G("div", {class: x(i(o).e("animation"))}, [i(h.percent) ? (w(), T("div", {
                    key: 0,
                    class: x(i(o).em("load", "percent"))
                }, ze(i(h.percent)), 3)) : de("v-if", !0), i(i(c)) === "default" ? (w(), Me(i(xn), {key: 1})) : de("v-if", !0), G("div", {class: x([i(o).em("animation", "item"), i(o).em("animation", "item-1")])}, null, 2), G("div", {class: x([i(o).em("animation", "item"), i(o).em("animation", "item-2")])}, null, 2), G("div", {class: x([i(o).em("animation", "item"), i(o).em("animation", "item-3")])}, null, 2), i(i(c)) === "ball" ? (w(), T(ve, {key: 2}, [G("div", {class: x([i(o).em("animation", "shadow"), i(o).em("animation", "shadow-1")])}, null, 2), G("div", {class: x([i(o).em("animation", "shadow"), i(o).em("animation", "shadow-2")])}, null, 2), G("div", {class: x([i(o).em("animation", "shadow"), i(o).em("animation", "shadow-3")])}, null, 2)], 64)) : de("v-if", !0)], 2), i(h.text) ? (w(), T("div", {
                    key: 0,
                    class: x(i(o).e("text"))
                }, ze(i(h.text)), 3)) : de("v-if", !0)], 6), i(h.progress) ? (w(), T("div", {
                    key: 0,
                    class: x(i(o).e("progress"))
                }, [G("div", {
                    class: x(i(o).e("progress-bar")),
                    style: Ie([{width: `${i(h.progress)}%`}])
                }, null, 6)], 2)) : de("v-if", !0)], 6))
            }
        });
    var qx = ge(Wx, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/loading/src/loading.vue"]]);
    const ll = (e = {}) => {
        if (!e) return {
            setPercent: () => {
            }, setProgress: () => {
            }, close: () => {
            }, setText: () => {
            }
        };
        if (!oa) return {
            setPercent: () => {
            }, setProgress: () => {
            }, close: () => {
            }, setText: () => {
            }
        };
        const t = f => {
            const d = (e == null ? void 0 : e[f]) || f;
            return i(d) ? ee(d) : d
        }, n = {};
        Object.keys(e).forEach(f => {
            n[f] = t(f)
        });
        let o = document.body;
        if (tl(jt(n.target)) ? o = jt(n.target) : Se(i(n.target)) && (o = document.querySelector(i(n.target))), tl(o) || (o = document.body, n.target.value = void 0), o.clientHeight < Yi.height) {
            const d = o.clientHeight * d_ / Yi.height;
            n.scale.value = d
        }
        const r = fe(qx, n), s = document.createElement("div");
        return $c(r, s), o.appendChild(s.firstChild), {
            close: () => {
                r.component.exposed.close()
            }, setText: f => {
                n.text.value = f
            }, setProgress: f => {
                n.progress.value = f
            }, setPercent: f => {
                n.percent.value = f
            }
        }
    }, al = Symbol("VsLoading"), Ps = (e, t) => {
        var n;
        const o = t.instance, r = u => we(t.value) ? t.value[u] : void 0, s = u => {
            const c = Se(u) && (o == null ? void 0 : o[u]) || u;
            return c && ee(c)
        }, l = (u, c) => {
            var f, d;
            return s((d = (f = r(u)) != null ? f : e.getAttribute(`element-loading-${$n(u)}`)) != null ? d : c)
        }, a = {
            text: l("text"),
            color: l("color"),
            background: l("background"),
            target: (n = r("target")) != null ? n : e,
            opacity: l("opacity"),
            progress: l("progress"),
            percent: l("percent"),
            scale: l("scale"),
            type: l("type")
        };
        e[al] = {options: a, instance: ll(a)}
    }, Yx = (e, t) => {
        for (const n of Object.keys(t)) Fe(t[n]) && (t[n].value = e[n])
    }, du = {
        mounted(e, t) {
            (t.value == !0 || we(t.value) && t.value.visible) && Ps(e, t)
        }, updated(e, t) {
            var n;
            const o = e[al];
            At(t.value, t.oldValue) || (we(t.value) ? t.value.visible ? ((n = t.oldValue) != null && n.visible || Ps(e, t), o && Yx(t.value, o.options)) : o == null || o.instance.close() : t.value ? Ps(e, t) : o == null || o.instance.close())
        }, unmounted(e) {
            var t;
            (t = e[al]) == null || t.instance.close()
        }
    }, Gx = {
        install(e) {
            e.directive("loading", du), e.config.globalProperties.$loading = ll
        }, directive: du, service: ll
    }, Xx = ["top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left"], Zx = be({
        border: Ze,
        color: Ze,
        customClass: {type: String, default: ""},
        duration: {type: Number, default: 4500},
        flat: Boolean,
        icon: {type: Wn},
        id: {type: String, default: ""},
        content: {type: he([String, Object]), default: ""},
        loading: Boolean,
        notPadding: Boolean,
        offset: {type: Number, default: 0},
        onClick: {
            type: he(Function), default: () => {
            }
        },
        onClickClose: {type: he(Function), default: () => !0},
        onClose: {type: he(Function), required: !0},
        position: {type: he(String), values: Xx, default: "bottom-right"},
        progressAuto: Boolean,
        shape: {type: String, values: ["square", ""], default: ""},
        showClose: {type: Boolean, default: !0},
        sticky: Boolean,
        title: {type: String, default: ""},
        text: {type: String, default: ""},
        zIndex: Number,
        width: {
            type: he([String, Number]),
            validator: e => ["auto", "full"].includes(e) || Pe(e) || Nn(e),
            default: null
        }
    }), Jx = ["innerHTML"], Qx = ["innerHTML"], ek = X({name: "VsNotification"}), tk = X({
        ...ek, props: Zx, setup(e, {expose: t}) {
            const n = e, {ns: o, zIndex: r} = Xl("notification"), {currentZIndex: s, nextZIndex: l} = r, a = $o(),
                u = ee(), c = ee(!1);
            let f;
            const d = $(() => [o.b(), _t(a), o.is("flat", n.flat), o.is("sticky", n.sticky), o.is("border", !!n.border), o.is("color", !!a.value), o.is("icon", !!n.icon), o.is("on-click", !!n.onClick), o.is("on-click-close", !!n.onClickClose), n.shape && o.is(n.shape), o.is("loading", n.loading), o.is("not-padding", n.notPadding), o.is("width-full", n.width == "full"), o.is("width-auto", n.width == "auto")]),
                p = $(() => [{zIndex: i(s)}, o.cssVar({color: tt(a), border: tt(n.border)})]), h = () => {
                    var _;
                    (_ = n.onClick) == null || _.call(n)
                }, m = () => {
                    var _, y;
                    (_ = n.onClickClose) != null && _.call(n) && (c.value = !1, (y = n.onClose) == null || y.call(n))
                }, v = _ => {
                    l();
                    const y = _;
                    y.style.maxHeight = "0", y.style.padding = "0 20px"
                }, S = (_, y) => {
                    const K = _.scrollHeight, E = _;
                    E.style.maxHeight = `${K + 40}px`, window.innerWidth < 600 ? E.style.padding = "15px" : E.style.padding = "20px", y()
                }, P = (_, y) => {
                    setTimeout(() => {
                        var K, E;
                        (K = u.value) == null || K.remove(), y(), (E = n.onClose) == null || E.call(n)
                    }, 150)
                }, C = () => {
                    n.duration > 0 && ({stop: f} = jx(() => {
                        c.value && U()
                    }, n.duration))
                }, H = () => {
                    f == null || f()
                }, D = () => {
                    H(), C(), l(), c.value = !0
                }, U = () => {
                    c.value = !1
                };
            let R = 0;
            const A = ee(0), k = () => {
                n.progressAuto && n.duration > 0 && (R = setInterval(() => {
                    A.value += 1
                }, n.duration / 100))
            };
            return ht(() => {
                D(), k()
            }), qn(() => {
                clearInterval(R)
            }), t({visible: c, close: U, open: D}), (_, y) => (w(), Me(Lt, {
                name: "vs-notification",
                onBeforeEnter: v,
                onEnter: S,
                onLeave: P,
                persisted: ""
            }, {
                default: ke(() => [dt(G("div", {
                    ref_key: "notifyRef",
                    ref: u,
                    class: x(i(d)),
                    style: Ie(i(p)),
                    onClick: h
                }, [_.loading ? (w(), T("div", {
                    key: 1,
                    class: x(i(o).e("loading"))
                }, null, 2)) : (w(), T(ve, {key: 0}, [_.icon ? (w(), T(ve, {key: 0}, [typeof _.icon == "string" ? (w(), T("div", {
                    key: 0,
                    class: x(i(o).e("icon")),
                    innerHTML: _.icon
                }, null, 10, Jx)) : (w(), Me(gn(_.icon), {
                    key: 1,
                    class: x(i(o).e("icon"))
                }, null, 8, ["class"]))], 64)) : de("v-if", !0), G("div", {class: x(i(o).e("content"))}, [_.title ? (w(), T("div", {
                    key: 0,
                    class: x(i(o).e("title"))
                }, [G("h4", null, ze(_.title), 1)], 2)) : de("v-if", !0), _.text ? (w(), T("div", {
                    key: 1,
                    class: x(i(o).e("text"))
                }, [G("p", null, ze(_.text), 1)], 2)) : de("v-if", !0), typeof _.content == "string" ? (w(), T("div", {
                    key: 2,
                    innerHTML: _.content
                }, null, 8, Qx)) : _.content ? (w(), Me(gn(_.content), {key: 3})) : de("v-if", !0)], 2)], 64)), _.showClose ? (w(), T("button", {
                    key: 2,
                    class: x(i(o).e("close")),
                    onClick: m
                }, [fe(i(So), {hover: "less"})], 2)) : de("v-if", !0), _.progressAuto ? (w(), T("div", {
                    key: 3,
                    class: x(i(o).e("progress")),
                    style: Ie({width: `${A.value}%`})
                }, null, 6)) : de("v-if", !0)], 6), [[wn, c.value]])]), _: 1
            }))
        }
    });
    var nk = ge(tk, [["__file", "/home/runner/work/vuesax-alpha/vuesax-alpha/packages/components/notification/src/notification.vue"]]);
    const ok = () => {
        const e = ir("namespace", go), t = Zl(), n = $(() => `${e.value}-notification-container-${t.prefix}`),
            o = $(() => `#${n.value}`);
        return {id: n, selector: o}
    }, wr = {
        "top-right": null,
        "top-center": null,
        "top-left": null,
        "bottom-right": null,
        "bottom-center": null,
        "bottom-left": null
    }, rk = (e = {}) => {
        var t, n;
        if (!lt) return {
            close: () => {
            }
        };
        (typeof e == "string" || qo(e)) && (e = {content: e});
        const o = e.position || "bottom-right", {id: r, selector: s} = ok();
        if (!wr[o] && !document.body.querySelector(s.value)) {
            wr[o] = Tf(`${r.value}-${o}`);
            const {ns: c} = Xl("notification");
            (t = wr[o]) == null || t.classList.add(c.is(o))
        }
        const l = fe(nk, {...e, position: o}), a = document.createElement("div");
        return $c(l, a), (n = wr[o]) == null || n.appendChild(a.firstChild), {
            close: () => {
                l.component.exposed.close()
            }
        }
    }, sk = a_(rk, "$notification");
    var lk = [Dx, Gx, sk], ak = X_([...Ix, ...lk]);

    function ik(e) {
        return typeof e == "object" && e !== null
    }

    function pu(e, t) {
        return e = ik(e) ? e : Object.create(null), new Proxy(e, {
            get(n, o, r) {
                return o === "key" ? Reflect.get(n, o, r) : Reflect.get(n, o, r) || Reflect.get(t, o, r)
            }
        })
    }

    function uk(e, t) {
        return t.reduce((n, o) => n == null ? void 0 : n[o], e)
    }

    function ck(e, t, n) {
        return t.slice(0, -1).reduce((o, r) => /^(__proto__)$/.test(r) ? {} : o[r] = o[r] || {}, e)[t[t.length - 1]] = n, e
    }

    function fk(e, t) {
        return t.reduce((n, o) => {
            const r = o.split(".");
            return ck(n, r, uk(e, r))
        }, {})
    }

    function hu(e, {storage: t, serializer: n, key: o, debug: r}) {
        try {
            const s = t == null ? void 0 : t.getItem(o);
            s && e.$patch(n == null ? void 0 : n.deserialize(s))
        } catch (s) {
            r && console.error(s)
        }
    }

    function vu(e, {storage: t, serializer: n, key: o, paths: r, debug: s}) {
        try {
            const l = Array.isArray(r) ? fk(e, r) : e;
            t.setItem(o, n.serialize(l))
        } catch (l) {
            s && console.error(l)
        }
    }

    function dk(e = {}) {
        return t => {
            const {auto: n = !1} = e, {options: {persist: o = n}, store: r} = t;
            if (!o) return;
            const s = (Array.isArray(o) ? o.map(l => pu(l, e)) : [pu(o, e)]).map(({
                                                                                      storage: l = localStorage,
                                                                                      beforeRestore: a = null,
                                                                                      afterRestore: u = null,
                                                                                      serializer: c = {
                                                                                          serialize: JSON.stringify,
                                                                                          deserialize: JSON.parse
                                                                                      },
                                                                                      key: f = r.$id,
                                                                                      paths: d = null,
                                                                                      debug: p = !1
                                                                                  }) => {
                var h;
                return {
                    storage: l,
                    beforeRestore: a,
                    afterRestore: u,
                    serializer: c,
                    key: ((h = e.key) != null ? h : m => m)(f),
                    paths: d,
                    debug: p
                }
            });
            r.$persist = () => {
                s.forEach(l => {
                    vu(r.$state, l)
                })
            }, r.$hydrate = ({runHooks: l = !0} = {}) => {
                s.forEach(a => {
                    const {beforeRestore: u, afterRestore: c} = a;
                    l && (u == null || u(t)), hu(r, a), l && (c == null || c(t))
                })
            }, s.forEach(l => {
                const {beforeRestore: a, afterRestore: u} = l;
                a == null || a(t), hu(r, l), u == null || u(t), r.$subscribe((c, f) => {
                    vu(f, l)
                }, {detached: !0})
            })
        }
    }

    var pk = dk(), hk = {exports: {}};
    (function (e, t) {
        (function (n, o, r, s, l) {
            if ("customElements" in r) l(); else {
                if (r.AWAITING_WEB_COMPONENTS_POLYFILL) return void r.AWAITING_WEB_COMPONENTS_POLYFILL.then(l);
                var a = r.AWAITING_WEB_COMPONENTS_POLYFILL = f();
                a.then(l);
                var u = r.WEB_COMPONENTS_POLYFILL || "//cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.0.2/webcomponents-bundle.js",
                    c = r.ES6_CORE_POLYFILL || "//cdnjs.cloudflare.com/ajax/libs/core-js/2.5.3/core.min.js";
                "Promise" in r ? d(u).then(function () {
                    a.isDone = !0, a.exec()
                }) : d(c).then(function () {
                    d(u).then(function () {
                        a.isDone = !0, a.exec()
                    })
                })
            }

            function f() {
                var p = [];
                return p.isDone = !1, p.exec = function () {
                    p.splice(0).forEach(function (h) {
                        h()
                    })
                }, p.then = function (h) {
                    return p.isDone ? h() : p.push(h), p
                }, p
            }

            function d(p) {
                var h = f(), m = s.createElement("script");
                return m.type = "text/javascript", m.readyState ? m.onreadystatechange = function () {
                    m.readyState != "loaded" && m.readyState != "complete" || (m.onreadystatechange = null, h.isDone = !0, h.exec())
                } : m.onload = function () {
                    h.isDone = !0, h.exec()
                }, m.src = p, s.getElementsByTagName("head")[0].appendChild(m), m.then = h.then, m
            }
        })(0, 0, window, document, function () {
            var n;
            n = function () {
                return function (o) {
                    var r = {};

                    function s(l) {
                        if (r[l]) return r[l].exports;
                        var a = r[l] = {i: l, l: !1, exports: {}};
                        return o[l].call(a.exports, a, a.exports, s), a.l = !0, a.exports
                    }

                    return s.m = o, s.c = r, s.d = function (l, a, u) {
                        s.o(l, a) || Object.defineProperty(l, a, {enumerable: !0, get: u})
                    }, s.r = function (l) {
                        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(l, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(l, "__esModule", {value: !0})
                    }, s.t = function (l, a) {
                        if (1 & a && (l = s(l)), 8 & a || 4 & a && typeof l == "object" && l && l.__esModule) return l;
                        var u = Object.create(null);
                        if (s.r(u), Object.defineProperty(u, "default", {
                            enumerable: !0,
                            value: l
                        }), 2 & a && typeof l != "string") for (var c in l) s.d(u, c, (function (f) {
                            return l[f]
                        }).bind(null, c));
                        return u
                    }, s.n = function (l) {
                        var a = l && l.__esModule ? function () {
                            return l.default
                        } : function () {
                            return l
                        };
                        return s.d(a, "a", a), a
                    }, s.o = function (l, a) {
                        return Object.prototype.hasOwnProperty.call(l, a)
                    }, s.p = "", s(s.s = 5)
                }([function (o, r) {
                    o.exports = function (s) {
                        var l = [];
                        return l.toString = function () {
                            return this.map(function (a) {
                                var u = function (c, f) {
                                    var d, p = c[1] || "", h = c[3];
                                    if (!h) return p;
                                    if (f && typeof btoa == "function") {
                                        var m = (d = h, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(d)))) + " */"),
                                            v = h.sources.map(function (S) {
                                                return "/*# sourceURL=" + h.sourceRoot + S + " */"
                                            });
                                        return [p].concat(v).concat([m]).join(`
`)
                                    }
                                    return [p].join(`
`)
                                }(a, s);
                                return a[2] ? "@media " + a[2] + "{" + u + "}" : u
                            }).join("")
                        }, l.i = function (a, u) {
                            typeof a == "string" && (a = [[null, a, ""]]);
                            for (var c = {}, f = 0; f < this.length; f++) {
                                var d = this[f][0];
                                typeof d == "number" && (c[d] = !0)
                            }
                            for (f = 0; f < a.length; f++) {
                                var p = a[f];
                                typeof p[0] == "number" && c[p[0]] || (u && !p[2] ? p[2] = u : u && (p[2] = "(" + p[2] + ") and (" + u + ")"), l.push(p))
                            }
                        }, l
                    }
                }, function (o, r, s) {
                    var l = s(3);
                    o.exports = typeof l == "string" ? l : l.toString()
                }, function (o, r, s) {
                    var l = s(4);
                    o.exports = typeof l == "string" ? l : l.toString()
                }, function (o, r, s) {
                    (o.exports = s(0)(!1)).push([o.i, "@-webkit-keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@keyframes burst{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}90%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:0}}@-webkit-keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@keyframes flashing{0%{opacity:1}45%{opacity:0}90%{opacity:1}}@-webkit-keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@keyframes fade-left{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(-20px);transform:translateX(-20px);opacity:0}}@-webkit-keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@keyframes fade-right{0%{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}75%{-webkit-transform:translateX(20px);transform:translateX(20px);opacity:0}}@-webkit-keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@keyframes fade-up{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(-20px);transform:translateY(-20px);opacity:0}}@-webkit-keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@keyframes fade-down{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}75%{-webkit-transform:translateY(20px);transform:translateY(20px);opacity:0}}@-webkit-keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:scaleX(1) rotate(-10deg);transform:scaleX(1) rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes tada{0%{-webkit-transform:scaleX(1);transform:scaleX(1)}10%,20%{-webkit-transform:scale3d(.95,.95,.95) rotate(-10deg);transform:scale3d(.95,.95,.95) rotate(-10deg)}30%,50%,70%,90%{-webkit-transform:scaleX(1) rotate(10deg);transform:scaleX(1) rotate(10deg)}40%,60%,80%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}to{-webkit-transform:scaleX(1);transform:scaleX(1)}}.bx-spin,.bx-spin-hover:hover{-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}.bx-tada,.bx-tada-hover:hover{-webkit-animation:tada 1.5s ease infinite;animation:tada 1.5s ease infinite}.bx-flashing,.bx-flashing-hover:hover{-webkit-animation:flashing 1.5s infinite linear;animation:flashing 1.5s infinite linear}.bx-burst,.bx-burst-hover:hover{-webkit-animation:burst 1.5s infinite linear;animation:burst 1.5s infinite linear}.bx-fade-up,.bx-fade-up-hover:hover{-webkit-animation:fade-up 1.5s infinite linear;animation:fade-up 1.5s infinite linear}.bx-fade-down,.bx-fade-down-hover:hover{-webkit-animation:fade-down 1.5s infinite linear;animation:fade-down 1.5s infinite linear}.bx-fade-left,.bx-fade-left-hover:hover{-webkit-animation:fade-left 1.5s infinite linear;animation:fade-left 1.5s infinite linear}.bx-fade-right,.bx-fade-right-hover:hover{-webkit-animation:fade-right 1.5s infinite linear;animation:fade-right 1.5s infinite linear}", ""])
                }, function (o, r, s) {
                    (o.exports = s(0)(!1)).push([o.i, '.bx-rotate-90{transform:rotate(90deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)"}.bx-rotate-180{transform:rotate(180deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)"}.bx-rotate-270{transform:rotate(270deg);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)"}.bx-flip-horizontal{transform:scaleX(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)"}.bx-flip-vertical{transform:scaleY(-1);-ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)"}', ""])
                }, function (o, r, s) {
                    s.r(r), s.d(r, "BoxIconElement", function () {
                        return U
                    });
                    var l, a, u, c, f = s(1), d = s.n(f), p = s(2), h = s.n(p),
                        m = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (R) {
                            return typeof R
                        } : function (R) {
                            return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype ? "symbol" : typeof R
                        }, v = function () {
                            function R(A, k) {
                                for (var _ = 0; _ < k.length; _++) {
                                    var y = k[_];
                                    y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(A, y.key, y)
                                }
                            }

                            return function (A, k, _) {
                                return k && R(A.prototype, k), _ && R(A, _), A
                            }
                        }(), S = (a = (l = Object).getPrototypeOf || function (R) {
                            return R.__proto__
                        }, u = l.setPrototypeOf || function (R, A) {
                            return R.__proto__ = A, R
                        }, c = (typeof Reflect > "u" ? "undefined" : m(Reflect)) === "object" ? Reflect.construct : function (R, A, k) {
                            var _, y = [null];
                            return y.push.apply(y, A), _ = R.bind.apply(R, y), u(new _, k.prototype)
                        }, function (R) {
                            var A = a(R);
                            return u(R, u(function () {
                                return c(A, arguments, a(this).constructor)
                            }, A))
                        }), P = window, C = {}, H = document.createElement("template"), D = function () {
                            return !!P.ShadyCSS
                        };
                    H.innerHTML = `
<style>
:host {
  display: inline-block;
  font-size: initial;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
}
:host([size=xs]) {
    width: 0.8rem;
    height: 0.8rem;
}
:host([size=sm]) {
    width: 1.55rem;
    height: 1.55rem;
}
:host([size=md]) {
    width: 2.25rem;
    height: 2.25rem;
}
:host([size=lg]) {
    width: 3.0rem;
    height: 3.0rem;
}

:host([size]:not([size=""]):not([size=xs]):not([size=sm]):not([size=md]):not([size=lg])) {
    width: auto;
    height: auto;
}
:host([pull=left]) #icon {
    float: left;
    margin-right: .3em!important;
}
:host([pull=right]) #icon {
    float: right;
    margin-left: .3em!important;
}
:host([border=square]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: .25em;
}
:host([border=circle]) #icon {
    padding: .25em;
    border: .07em solid rgba(0,0,0,.1);
    border-radius: 50%;
}
#icon,
svg {
  width: 100%;
  height: 100%;
}
#icon {
    box-sizing: border-box;
} 
` + d.a + `
` + h.a + `
</style>
<div id="icon"></div>`;
                    var U = S(function (R) {
                        function A() {
                            (function (_, y) {
                                if (!(_ instanceof y)) throw new TypeError("Cannot call a class as a function")
                            })(this, A);
                            var k = function (_, y) {
                                if (!_) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !y || typeof y != "object" && typeof y != "function" ? _ : y
                            }(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this));
                            return k.$ui = k.attachShadow({mode: "open"}), k.$ui.appendChild(k.ownerDocument.importNode(H.content, !0)), D() && P.ShadyCSS.styleElement(k), k._state = {
                                $iconHolder: k.$ui.getElementById("icon"),
                                type: k.getAttribute("type")
                            }, k
                        }

                        return function (k, _) {
                            if (typeof _ != "function" && _ !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof _);
                            k.prototype = Object.create(_ && _.prototype, {
                                constructor: {
                                    value: k,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(k, _) : k.__proto__ = _)
                        }(A, HTMLElement), v(A, null, [{
                            key: "getIconSvg", value: function (k, _) {
                                var y = this.cdnUrl + "/regular/bx-" + k + ".svg";
                                return _ === "solid" ? y = this.cdnUrl + "/solid/bxs-" + k + ".svg" : _ === "logo" && (y = this.cdnUrl + "/logos/bxl-" + k + ".svg"), y && C[y] || (C[y] = new Promise(function (K, E) {
                                    var M = new XMLHttpRequest;
                                    M.addEventListener("load", function () {
                                        this.status < 200 || this.status >= 300 ? E(new Error(this.status + " " + this.responseText)) : K(this.responseText)
                                    }), M.onerror = E, M.onabort = E, M.open("GET", y), M.send()
                                })), C[y]
                            }
                        }, {
                            key: "define", value: function (k) {
                                k = k || this.tagName, D() && P.ShadyCSS.prepareTemplate(H, k), customElements.define(k, this)
                            }
                        }, {
                            key: "cdnUrl", get: function () {
                                return "//unpkg.com/boxicons@2.1.4/svg"
                            }
                        }, {
                            key: "tagName", get: function () {
                                return "box-icon"
                            }
                        }, {
                            key: "observedAttributes", get: function () {
                                return ["type", "name", "color", "size", "rotate", "flip", "animation", "border", "pull"]
                            }
                        }]), v(A, [{
                            key: "attributeChangedCallback", value: function (k, _, y) {
                                var K = this._state.$iconHolder;
                                switch (k) {
                                    case"type":
                                        (function (E, M, I) {
                                            var B = E._state;
                                            B.$iconHolder.textContent = "", B.type && (B.type = null), B.type = !I || I !== "solid" && I !== "logo" ? "regular" : I, B.currentName !== void 0 && E.constructor.getIconSvg(B.currentName, B.type).then(function (W) {
                                                B.type === I && (B.$iconHolder.innerHTML = W)
                                            }).catch(function (W) {
                                                console.error("Failed to load icon: " + B.currentName + `
` + W)
                                            })
                                        })(this, 0, y);
                                        break;
                                    case"name":
                                        (function (E, M, I) {
                                            var B = E._state;
                                            B.currentName = I, B.$iconHolder.textContent = "", I && B.type !== void 0 && E.constructor.getIconSvg(I, B.type).then(function (W) {
                                                B.currentName === I && (B.$iconHolder.innerHTML = W)
                                            }).catch(function (W) {
                                                console.error("Failed to load icon: " + I + `
` + W)
                                            })
                                        })(this, 0, y);
                                        break;
                                    case"color":
                                        K.style.fill = y || "";
                                        break;
                                    case"size":
                                        (function (E, M, I) {
                                            var B = E._state;
                                            B.size && (B.$iconHolder.style.width = B.$iconHolder.style.height = "", B.size = B.sizeType = null), I && !/^(xs|sm|md|lg)$/.test(B.size) && (B.size = I.trim(), B.$iconHolder.style.width = B.$iconHolder.style.height = B.size)
                                        })(this, 0, y);
                                        break;
                                    case"rotate":
                                        _ && K.classList.remove("bx-rotate-" + _), y && K.classList.add("bx-rotate-" + y);
                                        break;
                                    case"flip":
                                        _ && K.classList.remove("bx-flip-" + _), y && K.classList.add("bx-flip-" + y);
                                        break;
                                    case"animation":
                                        _ && K.classList.remove("bx-" + _), y && K.classList.add("bx-" + y)
                                }
                            }
                        }, {
                            key: "connectedCallback", value: function () {
                                D() && P.ShadyCSS.styleElement(this)
                            }
                        }]), A
                    }());
                    r.default = U, U.define()
                }])
            }, e.exports = n()
        })
    })(hk);
    const ad = jh();
    ad.use(pk);
    const ds = Dh(av);
    ds.use(ad);
    ds.use(km);
    ds.use(ak);
    ds.mount("#app")
});
export default vk();