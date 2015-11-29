!
function(a, b) {
    function c(a) {
        return J.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: !1
    }
    function d(a) {
        if (!rb[a]) {
            var b = G.body,
            c = J("<" + a + ">").appendTo(b),
            d = c.css("display");
            c.remove(),
            ("none" === d || "" === d) && (nb || (nb = G.createElement("iframe"), nb.frameBorder = nb.width = nb.height = 0), b.appendChild(nb), ob && nb.createElement || (ob = (nb.contentWindow || nb.contentDocument).document, ob.write(("CSS1Compat" === G.compatMode ? "<!doctype html>": "") + "<html><body>"), ob.close()), c = ob.createElement(a), ob.body.appendChild(c), d = J.css(c, "display"), b.removeChild(nb)),
            rb[a] = d
        }
        return rb[a]
    }
    function e(a, b) {
        var c = {};
        return J.each(ub.concat.apply([], ub.slice(0, b)),
        function() {
            c[this] = a
        }),
        c
    }
    function f() {
        qb = b
    }
    function g() {
        return setTimeout(f, 0),
        qb = J.now()
    }
    function h() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch(b) {}
    }
    function i() {
        try {
            return new a.XMLHttpRequest
        } catch(b) {}
    }
    function j(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d, e, f, g, h, i, j, k, l = a.dataTypes,
        m = {},
        n = l.length,
        o = l[0];
        for (d = 1; n > d; d++) {
            if (1 === d) for (e in a.converters)"string" == typeof e && (m[e.toLowerCase()] = a.converters[e]);
            if (g = o, o = l[d], "*" === o) o = g;
            else if ("*" !== g && g !== o) {
                if (h = g + " " + o, i = m[h] || m["* " + o], !i) {
                    k = b;
                    for (j in m) if (f = j.split(" "), (f[0] === g || "*" === f[0]) && (k = m[f[1] + " " + o])) {
                        j = m[j],
                        j === !0 ? i = k: k === !0 && (i = j);
                        break
                    }
                } ! i && !k && J.error("No conversion from " + h.replace(" ", " to ")),
                i !== !0 && (c = i ? i(c) : k(j(c)))
            }
        }
        return c
    }
    function k(a, c, d) {
        var e, f, g, h, i = a.contents,
        j = a.dataTypes,
        k = a.responseFields;
        for (f in k) f in d && (c[k[f]] = d[f]);
        for (;
        "*" === j[0];) j.shift(),
        e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
        if (e) for (f in i) if (i[f] && i[f].test(e)) {
            j.unshift(f);
            break
        }
        if (j[0] in d) g = j[0];
        else {
            for (f in d) {
                if (!j[0] || a.converters[f + " " + j[0]]) {
                    g = f;
                    break
                }
                h || (h = f)
            }
            g = g || h
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0
    }
    function l(a, b, c, d) {
        if (J.isArray(b)) J.each(b,
        function(b, e) {
            c || Ra.test(a) ? d(a, e) : l(a + "[" + ("object" == typeof e || J.isArray(e) ? b: "") + "]", e, c, d)
        });
        else if (c || null == b || "object" != typeof b) d(a, b);
        else for (var e in b) l(a + "[" + e + "]", b[e], c, d)
    }
    function m(a, c) {
        var d, e, f = J.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((f[d] ? a: e || (e = {}))[d] = c[d]);
        e && J.extend(!0, a, e)
    }
    function n(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
        g = g || {},
        g[f] = !0;
        for (var h, i = a[f], j = 0, k = i ? i.length: 0, l = a === eb; k > j && (l || !h); j++) h = i[j](c, d, e),
        "string" == typeof h && (!l || g[h] ? h = b: (c.dataTypes.unshift(h), h = n(a, c, d, e, h, g)));
        return (l || !h) && !g["*"] && (h = n(a, c, d, e, "*", g)),
        h
    }
    function o(a) {
        return function(b, c) {
            if ("string" != typeof b && (c = b, b = "*"), J.isFunction(c)) for (var d, e, f, g = b.toLowerCase().split(ab), h = 0, i = g.length; i > h; h++) d = g[h],
            f = /^\+/.test(d),
            f && (d = d.substr(1) || "*"),
            e = a[d] = a[d] || [],
            e[f ? "unshift": "push"](c)
        }
    }
    function p(a, b, c) {
        var d = "width" === b ? a.offsetWidth: a.offsetHeight,
        e = "width" === b ? Ma: Na;
        return d > 0 ? ("border" !== c && J.each(e,
        function() {
            c || (d -= parseFloat(J.css(a, "padding" + this)) || 0),
            "margin" === c ? d += parseFloat(J.css(a, c + this)) || 0 : d -= parseFloat(J.css(a, "border" + this + "Width")) || 0
        }), d + "px") : (d = Ca(a, b, b), (0 > d || null == d) && (d = a.style[b] || 0), d = parseFloat(d) || 0, c && J.each(e,
        function() {
            d += parseFloat(J.css(a, "padding" + this)) || 0,
            "padding" !== c && (d += parseFloat(J.css(a, "border" + this + "Width")) || 0),
            "margin" === c && (d += parseFloat(J.css(a, c + this)) || 0)
        }), d + "px")
    }
    function q(a, b) {
        b.src ? J.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : J.globalEval((b.text || b.textContent || b.innerHTML || "").replace(za, "/*$0*/")),
        b.parentNode && b.parentNode.removeChild(b)
    }
    function r(a) {
        var b = (a.nodeName || "").toLowerCase();
        "input" === b ? s(a) : "script" !== b && "undefined" != typeof a.getElementsByTagName && J.grep(a.getElementsByTagName("input"), s)
    }
    function s(a) { ("checkbox" === a.type || "radio" === a.type) && (a.defaultChecked = a.checked)
    }
    function t(a) {
        return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : []
    }
    function u(a, b) {
        var c;
        1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? b.outerHTML = a.outerHTML: "input" !== c || "checkbox" !== a.type && "radio" !== a.type ? "option" === c ? b.selected = a.defaultSelected: ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(J.expando))
    }
    function v(a, b) {
        if (1 === b.nodeType && J.hasData(a)) {
            var c, d, e, f = J._data(a),
            g = J._data(b, f),
            h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) J.event.add(b, c + (h[c][d].namespace ? ".": "") + h[c][d].namespace, h[c][d], h[c][d].data)
            }
            g.data && (g.data = J.extend({},
            g.data))
        }
    }
    function w(a, b) {
        return J.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function x(a) {
        var b = na.split(" "),
        c = a.createDocumentFragment();
        if (c.createElement) for (; b.length;) c.createElement(b.pop());
        return c
    }
    function y(a, b, c) {
        if (b = b || 0, J.isFunction(b)) return J.grep(a,
        function(a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return J.grep(a,
        function(a, d) {
            return a === b === c
        });
        if ("string" == typeof b) {
            var d = J.grep(a,
            function(a) {
                return 1 === a.nodeType
            });
            if (ja.test(b)) return J.filter(b, d, !c);
            b = J.filter(b, d)
        }
        return J.grep(a,
        function(a, d) {
            return J.inArray(a, b) >= 0 === c
        })
    }
    function z(a) {
        return ! a || !a.parentNode || 11 === a.parentNode.nodeType
    }
    function A() {
        return ! 0
    }
    function B() {
        return ! 1
    }
    function C(a, b, c) {
        var d = b + "defer",
        e = b + "queue",
        f = b + "mark",
        g = J._data(a, d);
        g && ("queue" === c || !J._data(a, e)) && ("mark" === c || !J._data(a, f)) && setTimeout(function() { ! J._data(a, e) && !J._data(a, f) && (J.removeData(a, d, !0), g.fire())
        },
        0)
    }
    function D(a) {
        for (var b in a) if (("data" !== b || !J.isEmptyObject(a[b])) && "toJSON" !== b) return ! 1;
        return ! 0
    }
    function E(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(N, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null: J.isNumeric(d) ? parseFloat(d) : M.test(d) ? J.parseJSON(d) : d
                } catch(f) {}
                J.data(a, c, d)
            } else d = b
        }
        return d
    }
    function F(a) {
        var b, c, d = K[a] = {};
        for (a = a.split(/\s+/), b = 0, c = a.length; c > b; b++) d[a[b]] = !0;
        return d
    }
    var G = a.document,
    H = a.navigator,
    I = a.location,
    J = function() {
        function c() {
            if (!h.isReady) {
                try {
                    G.documentElement.doScroll("left")
                } catch(a) {
                    return void setTimeout(c, 1)
                }
                h.ready()
            }
        }
        var d, e, f, g, h = function(a, b) {
            return new h.fn.init(a, b, d)
        },
        i = a.jQuery,
        j = a.$,
        k = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        l = /\S/,
        m = /^\s+/,
        n = /\s+$/,
        o = /\d/,
        p = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        q = /^[\],:{}\s]*$/,
        r = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        s = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        t = /(?:^|:|,)(?:\s*\[)+/g,
        u = /(webkit)[ \/]([\w.]+)/,
        v = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        w = /(msie) ([\w.]+)/,
        x = /(mozilla)(?:.*? rv:([\w.]+))?/,
        y = /-([a-z]|[0-9])/gi,
        z = /^-ms-/,
        A = function(a, b) {
            return (b + "").toUpperCase()
        },
        B = H.userAgent,
        C = Object.prototype.toString,
        D = Object.prototype.hasOwnProperty,
        E = Array.prototype.push,
        F = Array.prototype.slice,
        I = String.prototype.trim,
        J = Array.prototype.indexOf,
        K = {};
        return h.fn = h.prototype = {
            constructor: h,
            init: function(a, c, d) {
                var e, f, g, i;
                if (!a) return this;
                if (a.nodeType) return this.context = this[0] = a,
                this.length = 1,
                this;
                if ("body" === a && !c && G.body) return this.context = G,
                this[0] = G.body,
                this.selector = a,
                this.length = 1,
                this;
                if ("string" == typeof a) {
                    if (e = "<" !== a.charAt(0) || ">" !== a.charAt(a.length - 1) || a.length < 3 ? k.exec(a) : [null, a, null], e && (e[1] || !c)) {
                        if (e[1]) return c = c instanceof h ? c[0] : c,
                        i = c ? c.ownerDocument || c: G,
                        g = p.exec(a),
                        g ? h.isPlainObject(c) ? (a = [G.createElement(g[1])], h.fn.attr.call(a, c, !0)) : a = [i.createElement(g[1])] : (g = h.buildFragment([e[1]], [i]), a = (g.cacheable ? h.clone(g.fragment) : g.fragment).childNodes),
                        h.merge(this, a);
                        if (f = G.getElementById(e[2]), f && f.parentNode) {
                            if (f.id !== e[2]) return d.find(a);
                            this.length = 1,
                            this[0] = f
                        }
                        return this.context = G,
                        this.selector = a,
                        this
                    }
                    return ! c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a)
                }
                return h.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), h.makeArray(a, this))
            },
            selector: "",
            jquery: "1.7",
            length: 0,
            size: function() {
                return this.length
            },
            toArray: function() {
                return F.call(this, 0)
            },
            get: function(a) {
                return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a]
            },
            pushStack: function(a, b, c) {
                var d = this.constructor();
                return h.isArray(a) ? E.apply(d, a) : h.merge(d, a),
                d.prevObject = this,
                d.context = this.context,
                "find" === b ? d.selector = this.selector + (this.selector ? " ": "") + c: b && (d.selector = this.selector + "." + b + "(" + c + ")"),
                d
            },
            each: function(a, b) {
                return h.each(this, a, b)
            },
            ready: function(a) {
                return h.bindReady(),
                f.add(a),
                this
            },
            eq: function(a) {
                return - 1 === a ? this.slice(a) : this.slice(a, +a + 1)
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq( - 1)
            },
            slice: function() {
                return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
            },
            map: function(a) {
                return this.pushStack(h.map(this,
                function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: E,
            sort: [].sort,
            splice: [].splice
        },
        h.fn.init.prototype = h.fn,
        h.extend = h.fn.extend = function() {
            var a, c, d, e, f, g, i = arguments[0] || {},
            j = 1,
            k = arguments.length,
            l = !1;
            for ("boolean" == typeof i && (l = i, i = arguments[1] || {},
            j = 2), "object" != typeof i && !h.isFunction(i) && (i = {}), k === j && (i = this, --j); k > j; j++) if (null != (a = arguments[j])) for (c in a) d = i[c],
            e = a[c],
            i !== e && (l && e && (h.isPlainObject(e) || (f = h.isArray(e))) ? (f ? (f = !1, g = d && h.isArray(d) ? d: []) : g = d && h.isPlainObject(d) ? d: {},
            i[c] = h.extend(l, g, e)) : e !== b && (i[c] = e));
            return i
        },
        h.extend({
            noConflict: function(b) {
                return a.$ === h && (a.$ = j),
                b && a.jQuery === h && (a.jQuery = i),
                h
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? h.readyWait++:h.ready(!0)
            },
            ready: function(a) {
                if (a === !0 && !--h.readyWait || a !== !0 && !h.isReady) {
                    if (!G.body) return setTimeout(h.ready, 1);
                    if (h.isReady = !0, a !== !0 && --h.readyWait > 0) return;
                    f.fireWith(G, [h]),
                    h.fn.trigger && h(G).trigger("ready").unbind("ready")
                }
            },
            bindReady: function() {
                if (!f) {
                    if (f = h.Callbacks("once memory"), "complete" === G.readyState) return setTimeout(h.ready, 1);
                    if (G.addEventListener) G.addEventListener("DOMContentLoaded", g, !1),
                    a.addEventListener("load", h.ready, !1);
                    else if (G.attachEvent) {
                        G.attachEvent("onreadystatechange", g),
                        a.attachEvent("onload", h.ready);
                        var b = !1;
                        try {
                            b = null == a.frameElement
                        } catch(d) {}
                        G.documentElement.doScroll && b && c()
                    }
                }
            },
            isFunction: function(a) {
                return "function" === h.type(a)
            },
            isArray: Array.isArray ||
            function(a) {
                return "array" === h.type(a)
            },
            isWindow: function(a) {
                return a && "object" == typeof a && "setInterval" in a
            },
            isNumeric: function(a) {
                return null != a && o.test(a) && !isNaN(a)
            },
            type: function(a) {
                return null == a ? String(a) : K[C.call(a)] || "object"
            },
            isPlainObject: function(a) {
                if (!a || "object" !== h.type(a) || a.nodeType || h.isWindow(a)) return ! 1;
                try {
                    if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return ! 1
                } catch(c) {
                    return ! 1
                }
                var d;
                for (d in a);
                return d === b || D.call(a, d)
            },
            isEmptyObject: function(a) {
                for (var b in a) return ! 1;
                return ! 0
            },
            error: function(a) {
                throw a
            },
            parseJSON: function(b) {
                return "string" == typeof b && b ? (b = h.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : q.test(b.replace(r, "@").replace(s, "]").replace(t, "")) ? new Function("return " + b)() : void h.error("Invalid JSON: " + b)) : null
            },
            parseXML: function(c) {
                var d, e;
                try {
                    a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch(f) {
                    d = b
                }
                return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && h.error("Invalid XML: " + c),
                d
            },
            noop: function() {},
            globalEval: function(b) {
                b && l.test(b) && (a.execScript ||
                function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(z, "ms-").replace(y, A)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            },
            each: function(a, c, d) {
                var e, f = 0,
                g = a.length,
                i = g === b || h.isFunction(a);
                if (d) if (i) {
                    for (e in a) if (c.apply(a[e], d) === !1) break
                } else for (; g > f && c.apply(a[f++], d) !== !1;);
                else if (i) {
                    for (e in a) if (c.call(a[e], e, a[e]) === !1) break
                } else for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
                return a
            },
            trim: I ?
            function(a) {
                return null == a ? "": I.call(a)
            }: function(a) {
                return null == a ? "": (a + "").replace(m, "").replace(n, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                if (null != a) {
                    var d = h.type(a);
                    null == a.length || "string" === d || "function" === d || "regexp" === d || h.isWindow(a) ? E.call(c, a) : h.merge(c, a)
                }
                return c
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (J) return J.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c: 0; d > c; c++) if (c in b && b[c] === a) return c
                }
                return - 1
            },
            merge: function(a, c) {
                var d = a.length,
                e = 0;
                if ("number" == typeof c.length) for (var f = c.length; f > e; e++) a[d++] = c[e];
                else for (; c[e] !== b;) a[d++] = c[e++];
                return a.length = d,
                a
            },
            grep: function(a, b, c) {
                var d, e = [];
                c = !!c;
                for (var f = 0,
                g = a.length; g > f; f++) d = !!b(a[f], f),
                c !== d && e.push(a[f]);
                return e
            },
            map: function(a, c, d) {
                var e, f, g = [],
                i = 0,
                j = a.length,
                k = a instanceof h || j !== b && "number" == typeof j && (j > 0 && a[0] && a[j - 1] || 0 === j || h.isArray(a));
                if (k) for (; j > i; i++) e = c(a[i], i, d),
                null != e && (g[g.length] = e);
                else for (f in a) e = c(a[f], f, d),
                null != e && (g[g.length] = e);
                return g.concat.apply([], g)
            },
            guid: 1,
            proxy: function(a, c) {
                if ("string" == typeof c) {
                    var d = a[c];
                    c = a,
                    a = d
                }
                if (!h.isFunction(a)) return b;
                var e = F.call(arguments, 2),
                f = function() {
                    return a.apply(c, e.concat(F.call(arguments)))
                };
                return f.guid = a.guid = a.guid || f.guid || h.guid++,
                f
            },
            access: function(a, c, d, e, f, g) {
                var i = a.length;
                if ("object" == typeof c) {
                    for (var j in c) h.access(a, j, c[j], e, f, d);
                    return a
                }
                if (d !== b) {
                    e = !g && e && h.isFunction(d);
                    for (var k = 0; i > k; k++) f(a[k], c, e ? d.call(a[k], k, f(a[k], c)) : d, g);
                    return a
                }
                return i ? f(a[0], c) : b
            },
            now: function() {
                return (new Date).getTime()
            },
            uaMatch: function(a) {
                a = a.toLowerCase();
                var b = u.exec(a) || v.exec(a) || w.exec(a) || a.indexOf("compatible") < 0 && x.exec(a) || [];
                return {
                    browser: b[1] || "",
                    version: b[2] || "0"
                }
            },
            sub: function() {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }
                h.extend(!0, a, this),
                a.superclass = this,
                a.fn = a.prototype = this(),
                a.fn.constructor = a,
                a.sub = this.sub,
                a.fn.init = function(c, d) {
                    return d && d instanceof h && !(d instanceof a) && (d = a(d)),
                    h.fn.init.call(this, c, d, b)
                },
                a.fn.init.prototype = a.fn;
                var b = a(G);
                return a
            },
            browser: {}
        }),
        h.each("Boolean Number String Function Array Date RegExp Object".split(" "),
        function(a, b) {
            K["[object " + b + "]"] = b.toLowerCase()
        }),
        e = h.uaMatch(B),
        e.browser && (h.browser[e.browser] = !0, h.browser.version = e.version),
        h.browser.webkit && (h.browser.safari = !0),
        l.test(" ") && (m = /^[\s\xA0]+/, n = /[\s\xA0]+$/),
        d = h(G),
        G.addEventListener ? g = function() {
            G.removeEventListener("DOMContentLoaded", g, !1),
            h.ready()
        }: G.attachEvent && (g = function() {
            "complete" === G.readyState && (G.detachEvent("onreadystatechange", g), h.ready())
        }),
        "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [],
        function() {
            return h
        }),
        h
    } (),
    K = {};
    J.Callbacks = function(a) {
        a = a ? K[a] || F(a) : {};
        var c, d, e, f, g, h = [],
        i = [],
        j = function(b) {
            var c, d, e, f;
            for (c = 0, d = b.length; d > c; c++) e = b[c],
            f = J.type(e),
            "array" === f ? j(e) : "function" === f && (!a.unique || !l.has(e)) && h.push(e)
        },
        k = function(b, j) {
            for (j = j || [], c = !a.memory || [b, j], d = !0, g = e || 0, e = 0, f = h.length; h && f > g; g++) if (h[g].apply(b, j) === !1 && a.stopOnFalse) {
                c = !0;
                break
            }
            d = !1,
            h && (a.once ? c === !0 ? l.disable() : h = [] : i && i.length && (c = i.shift(), l.fireWith(c[0], c[1])))
        },
        l = {
            add: function() {
                if (h) {
                    var a = h.length;
                    j(arguments),
                    d ? f = h.length: c && c !== !0 && (e = a, k(c[0], c[1]))
                }
                return this
            },
            remove: function() {
                if (h) for (var b = arguments,
                c = 0,
                e = b.length; e > c; c++) for (var i = 0; i < h.length && (b[c] !== h[i] || (d && f >= i && (f--, g >= i && g--), h.splice(i--, 1), !a.unique)); i++);
                return this
            },
            has: function(a) {
                if (h) for (var b = 0,
                c = h.length; c > b; b++) if (a === h[b]) return ! 0;
                return ! 1
            },
            empty: function() {
                return h = [],
                this
            },
            disable: function() {
                return h = i = c = b,
                this
            },
            disabled: function() {
                return ! h
            },
            lock: function() {
                return i = b,
                (!c || c === !0) && l.disable(),
                this
            },
            locked: function() {
                return ! i
            },
            fireWith: function(b, e) {
                return i && (d ? a.once || i.push([b, e]) : (!a.once || !c) && k(b, e)),
                this
            },
            fire: function() {
                return l.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! c
            }
        };
        return l
    };
    var L = [].slice;
    J.extend({
        Deferred: function(a) {
            var b, c = J.Callbacks("once memory"),
            d = J.Callbacks("once memory"),
            e = J.Callbacks("memory"),
            f = "pending",
            g = {
                resolve: c,
                reject: d,
                notify: e
            },
            h = {
                done: c.add,
                fail: d.add,
                progress: e.add,
                state: function() {
                    return f
                },
                isResolved: c.fired,
                isRejected: d.fired,
                then: function(a, b, c) {
                    return i.done(a).fail(b).progress(c),
                    this
                },
                always: function() {
                    return i.done.apply(i, arguments).fail.apply(i, arguments)
                },
                pipe: function(a, b, c) {
                    return J.Deferred(function(d) {
                        J.each({
                            done: [a, "resolve"],
                            fail: [b, "reject"],
                            progress: [c, "notify"]
                        },
                        function(a, b) {
                            var c, e = b[0],
                            f = b[1];
                            J.isFunction(e) ? i[a](function() {
                                c = e.apply(this, arguments),
                                c && J.isFunction(c.promise) ? c.promise().then(d.resolve, d.reject, d.notify) : d[f + "With"](this === i ? d: this, [c])
                            }) : i[a](d[f])
                        })
                    }).promise()
                },
                promise: function(a) {
                    if (null == a) a = h;
                    else for (var b in h) a[b] = h[b];
                    return a
                }
            },
            i = h.promise({});
            for (b in g) i[b] = g[b].fire,
            i[b + "With"] = g[b].fireWith;
            return i.done(function() {
                f = "resolved"
            },
            d.disable, e.lock).fail(function() {
                f = "rejected"
            },
            c.disable, e.lock),
            a && a.call(i, i),
            i
        },
        when: function(a) {
            function b(a) {
                return function(b) {
                    g[a] = arguments.length > 1 ? L.call(arguments, 0) : b,
                    i.notifyWith(j, g)
                }
            }
            function c(a) {
                return function(b) {
                    d[a] = arguments.length > 1 ? L.call(arguments, 0) : b,
                    --h || i.resolveWith(i, d)
                }
            }
            var d = L.call(arguments, 0),
            e = 0,
            f = d.length,
            g = Array(f),
            h = f,
            i = 1 >= f && a && J.isFunction(a.promise) ? a: J.Deferred(),
            j = i.promise();
            if (f > 1) {
                for (; f > e; e++) d[e] && d[e].promise && J.isFunction(d[e].promise) ? d[e].promise().then(c(e), i.reject, b(e)) : --h;
                h || i.resolveWith(i, d)
            } else i !== a && i.resolveWith(i, f ? [a] : []);
            return j
        }
    }),
    J.support = function() {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q = G.createElement("div"),
        r = G.documentElement;
        if (q.setAttribute("className", "t"), q.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/><nav></nav>", a = q.getElementsByTagName("*"), b = q.getElementsByTagName("a")[0], !a || !a.length || !b) return {};
        c = G.createElement("select"),
        d = c.appendChild(G.createElement("option")),
        e = q.getElementsByTagName("input")[0],
        g = {
            leadingWhitespace: 3 === q.firstChild.nodeType,
            tbody: !q.getElementsByTagName("tbody").length,
            htmlSerialize: !!q.getElementsByTagName("link").length,
            style: /top/.test(b.getAttribute("style")),
            hrefNormalized: "/a" === b.getAttribute("href"),
            opacity: /^0.55/.test(b.style.opacity),
            cssFloat: !!b.style.cssFloat,
            unknownElems: !!q.getElementsByTagName("nav").length,
            checkOn: "on" === e.value,
            optSelected: d.selected,
            getSetAttribute: "t" !== q.className,
            enctype: !!G.createElement("form").enctype,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        },
        e.checked = !0,
        g.noCloneChecked = e.cloneNode(!0).checked,
        c.disabled = !0,
        g.optDisabled = !d.disabled;
        try {
            delete q.test
        } catch(s) {
            g.deleteExpando = !1
        } ! q.addEventListener && q.attachEvent && q.fireEvent && (q.attachEvent("onclick",
        function() {
            g.noCloneEvent = !1
        }), q.cloneNode(!0).fireEvent("onclick")),
        e = G.createElement("input"),
        e.value = "t",
        e.setAttribute("type", "radio"),
        g.radioValue = "t" === e.value,
        e.setAttribute("checked", "checked"),
        q.appendChild(e),
        h = G.createDocumentFragment(),
        h.appendChild(q.lastChild),
        g.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked,
        q.innerHTML = "",
        q.style.width = q.style.paddingLeft = "1px",
        i = G.getElementsByTagName("body")[0],
        k = G.createElement(i ? "div": "body"),
        l = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        },
        i && J.extend(l, {
            position: "absolute",
            left: "-999px",
            top: "-999px"
        });
        for (o in l) k.style[o] = l[o];
        if (k.appendChild(q), j = i || r, j.insertBefore(k, j.firstChild), g.appendChecked = e.checked, g.boxModel = 2 === q.offsetWidth, "zoom" in q.style && (q.style.display = "inline", q.style.zoom = 1, g.inlineBlockNeedsLayout = 2 === q.offsetWidth, q.style.display = "", q.innerHTML = "<div style='width:4px;'></div>", g.shrinkWrapBlocks = 2 !== q.offsetWidth), q.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", m = q.getElementsByTagName("td"), p = 0 === m[0].offsetHeight, m[0].style.display = "", m[1].style.display = "none", g.reliableHiddenOffsets = p && 0 === m[0].offsetHeight, q.innerHTML = "", G.defaultView && G.defaultView.getComputedStyle && (f = G.createElement("div"), f.style.width = "0", f.style.marginRight = "0", q.appendChild(f), g.reliableMarginRight = 0 === (parseInt((G.defaultView.getComputedStyle(f, null) || {
            marginRight: 0
        }).marginRight, 10) || 0)), q.attachEvent) for (o in {
            submit: 1,
            change: 1,
            focusin: 1
        }) n = "on" + o,
        p = n in q,
        p || (q.setAttribute(n, "return;"), p = "function" == typeof q[n]),
        g[o + "Bubbles"] = p;
        return J(function() {
            var a, b, c, d, e, f = 1,
            h = "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",
            j = "visibility:hidden;border:0;",
            l = "style='" + h + "border:5px solid #000;padding:0;'",
            m = "<div " + l + "><div></div></div><table " + l + " cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            i = G.getElementsByTagName("body")[0],
            !i || (a = G.createElement("div"), a.style.cssText = j + "width:0;height:0;position:static;top:0;margin-top:" + f + "px", i.insertBefore(a, i.firstChild), k = G.createElement("div"), k.style.cssText = h + j, k.innerHTML = m, a.appendChild(k), b = k.firstChild, c = b.firstChild, d = b.nextSibling.firstChild.firstChild, e = {
                doesNotAddBorder: 5 !== c.offsetTop,
                doesAddBorderForTableAndCells: 5 === d.offsetTop
            },
            c.style.position = "fixed", c.style.top = "20px", e.fixedPosition = 20 === c.offsetTop || 15 === c.offsetTop, c.style.position = c.style.top = "", b.style.overflow = "hidden", b.style.position = "relative", e.subtractsBorderForOverflowNotVisible = -5 === c.offsetTop, e.doesNotIncludeMarginInBodyOffset = i.offsetTop !== f, i.removeChild(a), k = a = null, J.extend(g, e))
        }),
        k.innerHTML = "",
        j.removeChild(k),
        k = h = c = d = i = f = q = e = null,
        g
    } (),
    J.boxModel = J.support.boxModel;
    var M = /^(?:\{.*\}|\[.*\])$/,
    N = /([A-Z])/g;
    J.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            return a = a.nodeType ? J.cache[a[J.expando]] : a[J.expando],
            !!a && !D(a)
        },
        data: function(a, c, d, e) {
            if (J.acceptData(a)) {
                var f, g, h, i = (J.expando, "string" == typeof c),
                j = a.nodeType,
                k = j ? J.cache: a,
                l = j ? a[J.expando] : a[J.expando] && J.expando,
                m = "events" === c;
                if ((!l || !k[l] || !m && !e && !k[l].data) && i && d === b) return;
                return l || (j ? a[J.expando] = l = ++J.uuid: l = J.expando),
                k[l] || (k[l] = {},
                j || (k[l].toJSON = J.noop)),
                ("object" == typeof c || "function" == typeof c) && (e ? k[l] = J.extend(k[l], c) : k[l].data = J.extend(k[l].data, c)),
                f = g = k[l],
                e || (g.data || (g.data = {}), g = g.data),
                d !== b && (g[J.camelCase(c)] = d),
                m && !g[c] ? f.events: (i ? (h = g[c], null == h && (h = g[J.camelCase(c)])) : h = g, h)
            }
        },
        removeData: function(a, b, c) {
            if (J.acceptData(a)) {
                var d, e, f, g = (J.expando, a.nodeType),
                h = g ? J.cache: a,
                i = g ? a[J.expando] : J.expando;
                if (!h[i]) return;
                if (b && (d = c ? h[i] : h[i].data)) {
                    J.isArray(b) ? b = b: b in d ? b = [b] : (b = J.camelCase(b), b = b in d ? [b] : b.split(" "));
                    for (e = 0, f = b.length; f > e; e++) delete d[b[e]];
                    if (! (c ? D: J.isEmptyObject)(d)) return
                }
                if (!c && (delete h[i].data, !D(h[i]))) return;
                J.support.deleteExpando || !h.setInterval ? delete h[i] : h[i] = null,
                g && (J.support.deleteExpando ? delete a[J.expando] : a.removeAttribute ? a.removeAttribute(J.expando) : a[J.expando] = null)
            }
        },
        _data: function(a, b, c) {
            return J.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = J.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return ! 0
        }
    }),
    J.fn.extend({
        data: function(a, c) {
            var d, e, f, g = null;
            if ("undefined" == typeof a) {
                if (this.length && (g = J.data(this[0]), 1 === this[0].nodeType && !J._data(this[0], "parsedAttrs"))) {
                    e = this[0].attributes;
                    for (var h = 0,
                    i = e.length; i > h; h++) f = e[h].name,
                    0 === f.indexOf("data-") && (f = J.camelCase(f.substring(5)), E(this[0], f, g[f]));
                    J._data(this[0], "parsedAttrs", !0)
                }
                return g
            }
            return "object" == typeof a ? this.each(function() {
                J.data(this, a)
            }) : (d = a.split("."), d[1] = d[1] ? "." + d[1] : "", c === b ? (g = this.triggerHandler("getData" + d[1] + "!", [d[0]]), g === b && this.length && (g = J.data(this[0], a), g = E(this[0], a, g)), g === b && d[1] ? this.data(d[0]) : g) : this.each(function() {
                var b = J(this),
                e = [d[0], c];
                b.triggerHandler("setData" + d[1] + "!", e),
                J.data(this, a, c),
                b.triggerHandler("changeData" + d[1] + "!", e)
            }))
        },
        removeData: function(a) {
            return this.each(function() {
                J.removeData(this, a)
            })
        }
    }),
    J.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", J._data(a, b, (J._data(a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            if (a !== !0 && (c = b, b = a, a = !1), b) {
                c = c || "fx";
                var d = c + "mark",
                e = a ? 0 : (J._data(b, d) || 1) - 1;
                e ? J._data(b, d, e) : (J.removeData(b, d, !0), C(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = J._data(a, b), c && (!d || J.isArray(c) ? d = J._data(a, b, J.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = J.queue(a, b),
            d = c.shift(),
            e = {};
            "inprogress" === d && (d = c.shift()),
            d && ("fx" === b && c.unshift("inprogress"), J._data(a, b + ".run", e), d.call(a,
            function() {
                J.dequeue(a, b)
            },
            e)),
            c.length || (J.removeData(a, b + "queue " + b + ".run", !0), C(a, b, "queue"))
        }
    }),
    J.fn.extend({
        queue: function(a, c) {
            return "string" != typeof a && (c = a, a = "fx"),
            c === b ? J.queue(this[0], a) : this.each(function() {
                var b = J.queue(this, a, c);
                "fx" === a && "inprogress" !== b[0] && J.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                J.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            return a = J.fx ? J.fx.speeds[a] || a: a,
            b = b || "fx",
            this.queue(b,
            function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function d() {--i || f.resolveWith(g, [g])
            }
            "string" != typeof a && (c = a, a = b),
            a = a || "fx";
            for (var e, f = J.Deferred(), g = this, h = g.length, i = 1, j = a + "defer", k = a + "queue", l = a + "mark"; h--;)(e = J.data(g[h], j, b, !0) || (J.data(g[h], k, b, !0) || J.data(g[h], l, b, !0)) && J.data(g[h], j, J.Callbacks("once memory"), !0)) && (i++, e.add(d));
            return d(),
            f.promise()
        }
    });
    var O, P, Q, R = /[\n\t\r]/g,
    S = /\s+/,
    T = /\r/g,
    U = /^(?:button|input)$/i,
    V = /^(?:button|input|object|select|textarea)$/i,
    W = /^a(?:rea)?$/i,
    X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    Y = J.support.getSetAttribute;
    J.fn.extend({
        attr: function(a, b) {
            return J.access(this, a, b, !0, J.attr)
        },
        removeAttr: function(a) {
            return this.each(function() {
                J.removeAttr(this, a)
            })
        },
        prop: function(a, b) {
            return J.access(this, a, b, !0, J.prop)
        },
        removeProp: function(a) {
            return a = J.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = b,
                    delete this[a]
                } catch(c) {}
            })
        },
        addClass: function(a) {
            var b, c, d, e, f, g, h;
            if (J.isFunction(a)) return this.each(function(b) {
                J(this).addClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a) for (b = a.split(S), c = 0, d = this.length; d > c; c++) if (e = this[c], 1 === e.nodeType) if (e.className || 1 !== b.length) {
                for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++)~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                e.className = J.trim(f)
            } else e.className = a;
            return this
        },
        removeClass: function(a) {
            var c, d, e, f, g, h, i;
            if (J.isFunction(a)) return this.each(function(b) {
                J(this).removeClass(a.call(this, b, this.className))
            });
            if (a && "string" == typeof a || a === b) for (c = (a || "").split(S), d = 0, e = this.length; e > d; d++) if (f = this[d], 1 === f.nodeType && f.className) if (a) {
                for (g = (" " + f.className + " ").replace(R, " "), h = 0, i = c.length; i > h; h++) g = g.replace(" " + c[h] + " ", " ");
                f.className = J.trim(g)
            } else f.className = "";
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a,
            d = "boolean" == typeof b;
            return J.isFunction(a) ? this.each(function(c) {
                J(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c) for (var e, f = 0,
                g = J(this), h = b, i = a.split(S); e = i[f++];) h = d ? h: !g.hasClass(e),
                g[h ? "addClass": "removeClass"](e);
                else("undefined" === c || "boolean" === c) && (this.className && J._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "": J._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ",
            c = 0,
            d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(R, " ").indexOf(b) > -1) return ! 0;
            return ! 1
        },
        val: function(a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = J.isFunction(a), this.each(function(d) {
                var f, g = J(this);
                1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "": "number" == typeof f ? f += "": J.isArray(f) && (f = J.map(f,
                function(a) {
                    return null == a ? "": a + ""
                })), c = J.valHooks[this.nodeName.toLowerCase()] || J.valHooks[this.type], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f))
            })) : f ? (c = J.valHooks[f.nodeName.toLowerCase()] || J.valHooks[f.type], c && "get" in c && (d = c.get(f, "value")) !== b ? d: (d = f.value, "string" == typeof d ? d.replace(T, "") : null == d ? "": d)) : b
        }
    }),
    J.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = a.attributes.value;
                    return ! b || b.specified ? a.value: a.text
                }
            },
            select: {
                get: function(a) {
                    var b, c, d, e, f = a.selectedIndex,
                    g = [],
                    h = a.options,
                    i = "select-one" === a.type;
                    if (0 > f) return null;
                    for (c = i ? f: 0, d = i ? f + 1 : h.length; d > c; c++) if (e = h[c], e.selected && (J.support.optDisabled ? !e.disabled: null === e.getAttribute("disabled")) && (!e.parentNode.disabled || !J.nodeName(e.parentNode, "optgroup"))) {
                        if (b = J(e).val(), i) return b;
                        g.push(b)
                    }
                    return i && !g.length && h.length ? J(h[f]).val() : g
                },
                set: function(a, b) {
                    var c = J.makeArray(b);
                    return J(a).find("option").each(function() {
                        this.selected = J.inArray(J(this).val(), c) >= 0
                    }),
                    c.length || (a.selectedIndex = -1),
                    c
                }
            }
        },
        attrFn: {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0
        },
        attr: function(a, c, d, e) {
            var f, g, h, i = a.nodeType;
            return a && 3 !== i && 8 !== i && 2 !== i ? e && c in J.attrFn ? J(a)[c](d) : "getAttribute" in a ? (h = 1 !== i || !J.isXMLDoc(a), h && (c = c.toLowerCase(), g = J.attrHooks[c] || (X.test(c) ? P: O)), d !== b ? null === d ? (J.removeAttr(a, c), b) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f: (a.setAttribute(c, "" + d), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f: (f = a.getAttribute(c), null === f ? b: f)) : J.prop(a, c, d) : b
        },
        removeAttr: function(a, b) {
            var c, d, e, f, g = 0;
            if (1 === a.nodeType) for (d = (b || "").split(S), f = d.length; f > g; g++) e = d[g].toLowerCase(),
            c = J.propFix[e] || e,
            J.attr(a, e, ""),
            a.removeAttribute(Y ? e: c),
            X.test(e) && c in a && (a[c] = !1)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (U.test(a.nodeName) && a.parentNode) J.error("type property can't be changed");
                    else if (!J.support.radioValue && "radio" === b && J.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            },
            value: {
                get: function(a, b) {
                    return O && J.nodeName(a, "button") ? O.get(a, b) : b in a ? a.value: null
                },
                set: function(a, b, c) {
                    return O && J.nodeName(a, "button") ? O.set(a, b, c) : void(a.value = b)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !J.isXMLDoc(a), g && (c = J.propFix[c] || c, f = J.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e: a[c] = d: f && "get" in f && null !== (e = f.get(a, c)) ? e: a[c]) : b
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : V.test(a.nodeName) || W.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }),
    J.attrHooks.tabindex = J.propHooks.tabIndex,
    P = {
        get: function(a, c) {
            var d, e = J.prop(a, c);
            return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        },
        set: function(a, b, c) {
            var d;
            return b === !1 ? J.removeAttr(a, c) : (d = J.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())),
            c
        }
    },
    Y || (Q = {
        name: !0,
        id: !0
    },
    O = J.valHooks.button = {
        get: function(a, c) {
            var d;
            return d = a.getAttributeNode(c),
            d && (Q[c] ? "" !== d.nodeValue: d.specified) ? d.nodeValue: b
        },
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || (d = G.createAttribute(c), a.setAttributeNode(d)),
            d.nodeValue = b + ""
        }
    },
    J.attrHooks.tabindex.set = O.set, J.each(["width", "height"],
    function(a, b) {
        J.attrHooks[b] = J.extend(J.attrHooks[b], {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        })
    }), J.attrHooks.contenteditable = {
        get: O.get,
        set: function(a, b, c) {
            "" === b && (b = "false"),
            O.set(a, b, c)
        }
    }),
    J.support.hrefNormalized || J.each(["href", "src", "width", "height"],
    function(a, c) {
        J.attrHooks[c] = J.extend(J.attrHooks[c], {
            get: function(a) {
                var d = a.getAttribute(c, 2);
                return null === d ? b: d
            }
        })
    }),
    J.support.style || (J.attrHooks.style = {
        get: function(a) {
            return a.style.cssText.toLowerCase() || b
        },
        set: function(a, b) {
            return a.style.cssText = "" + b
        }
    }),
    J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
        }
    })),
    J.support.enctype || (J.propFix.enctype = "encoding"),
    J.support.checkOn || J.each(["radio", "checkbox"],
    function() {
        J.valHooks[this] = {
            get: function(a) {
                return null === a.getAttribute("value") ? "on": a.value
            }
        }
    }),
    J.each(["radio", "checkbox"],
    function() {
        J.valHooks[this] = J.extend(J.valHooks[this], {
            set: function(a, b) {
                return J.isArray(b) ? a.checked = J.inArray(J(a).val(), b) >= 0 : void 0
            }
        })
    });
    var Z = /^(?:textarea|input|select)$/i,
    $ = /^([^\.]*)?(?:\.(.+))?$/,
    _ = /\bhover(\.\S+)?/,
    aa = /^key/,
    ba = /^(?:mouse|contextmenu)|click/,
    ca = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    da = function(a) {
        var b = ca.exec(a);
        return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")),
        b
    },
    ea = function(a, b) {
        return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || a.id === b[2]) && (!b[3] || b[3].test(a.className))
    },
    fa = function(a) {
        return J.event.special.hover ? a: a.replace(_, "mouseenter$1 mouseleave$1")
    };
    J.event = {
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q;
            if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = J._data(a))) {
                for (d.handler && (o = d, d = o.handler), d.guid || (d.guid = J.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                    return "undefined" == typeof J || a && J.event.triggered === a.type ? b: J.event.dispatch.apply(h.elem, arguments)
                },
                h.elem = a), c = fa(c).split(" "), j = 0; j < c.length; j++) k = $.exec(c[j]) || [],
                l = k[1],
                m = (k[2] || "").split(".").sort(),
                q = J.event.special[l] || {},
                l = (f ? q.delegateType: q.bindType) || l,
                q = J.event.special[l] || {},
                n = J.extend({
                    type: l,
                    origType: k[1],
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    namespace: m.join(".")
                },
                o),
                f && (n.quick = da(f), !n.quick && J.expr.match.POS.test(f) && (n.isPositional = !0)),
                p = i[l],
                p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))),
                q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)),
                f ? p.splice(p.delegateCount++, 0, n) : p.push(n),
                J.event.global[l] = !0;
                a = null
            }
        },
        global: {},
        remove: function(a, b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p = J.hasData(a) && J._data(a);
            if (p && (k = p.events)) {
                for (b = fa(b || "").split(" "), e = 0; e < b.length; e++) {
                    if (f = $.exec(b[e]) || [], g = f[1], h = f[2], !g) {
                        h = h ? "." + h: "";
                        for (j in k) J.event.remove(a, j + h, c, d);
                        return
                    }
                    if (l = J.event.special[g] || {},
                    g = (d ? l.delegateType: l.bindType) || g, n = k[g] || [], i = n.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, c || h || d || l.remove) for (j = 0; j < n.length; j++) o = n[j],
                    c && c.guid !== o.guid || (!h || h.test(o.namespace)) && (!d || d === o.selector || "**" === d && o.selector) && (n.splice(j--, 1), o.selector && n.delegateCount--, l.remove && l.remove.call(a, o));
                    else n.length = 0;
                    0 === n.length && i !== n.length && ((!l.teardown || l.teardown.call(a, h) === !1) && J.removeEvent(a, g, p.handle), delete k[g])
                }
                J.isEmptyObject(k) && (m = p.handle, m && (m.elem = null), J.removeData(a, ["events", "handle"], !0))
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function(c, d, e, f) {
            if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                var g, h, i, j, k, l, m, n, o, p, q = c.type || c,
                r = [];
                if (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), (!e || J.event.customEvent[q]) && !J.event.global[q]) return;
                if (c = "object" == typeof c ? c[J.expando] ? c: new J.Event(q, c) : new J.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q: "", (f || !e) && c.preventDefault(), !e) {
                    g = J.cache;
                    for (i in g) g[i].events && g[i].events[q] && J.event.trigger(c, d, g[i].handle.elem, !0);
                    return
                }
                if (c.result = b, c.target || (c.target = e), d = null != d ? J.makeArray(d) : [], d.unshift(c), m = J.event.special[q] || {},
                m.trigger && m.trigger.apply(e, d) === !1) return;
                if (o = [[e, m.bindType || q]], !f && !m.noBubble && !J.isWindow(e)) {
                    for (p = m.delegateType || q, k = null, j = e.parentNode; j; j = j.parentNode) o.push([j, p]),
                    k = j;
                    k && k === e.ownerDocument && o.push([k.defaultView || k.parentWindow || a, p])
                }
                for (i = 0; i < o.length && (j = o[i][0], c.type = o[i][1], n = (J._data(j, "events") || {})[c.type] && J._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && J.acceptData(j) && n.apply(j, d), !c.isPropagationStopped()); i++);
                return c.type = q,
                c.isDefaultPrevented() || (!m._default || m._default.apply(e.ownerDocument, d) === !1) && ("click" !== q || !J.nodeName(e, "a")) && J.acceptData(e) && l && e[q] && ("focus" !== q && "blur" !== q || 0 !== c.target.offsetWidth) && !J.isWindow(e) && (k = e[l], k && (e[l] = null), J.event.triggered = q, e[q](), J.event.triggered = b, k && (e[l] = k)),
                c.result
            }
        },
        dispatch: function(c) {
            c = J.event.fix(c || a.event);
            var d, e, f, g, h, i, j, k, l, m, n = (J._data(this, "events") || {})[c.type] || [],
            o = n.delegateCount,
            p = [].slice.call(arguments, 0),
            q = !c.exclusive && !c.namespace,
            r = (J.event.special[c.type] || {}).handle,
            s = [];
            if (p[0] = c, c.delegateTarget = this, o && !c.target.disabled && (!c.button || "click" !== c.type)) for (f = c.target; f != this; f = f.parentNode || this) {
                for (h = {},
                j = [], d = 0; o > d; d++) k = n[d],
                l = k.selector,
                m = h[l],
                k.isPositional ? m = (m || (h[l] = J(l))).index(f) >= 0 : m === b && (m = h[l] = k.quick ? ea(f, k.quick) : J(f).is(l)),
                m && j.push(k);
                j.length && s.push({
                    elem: f,
                    matches: j
                })
            }
            for (n.length > o && s.push({
                elem: this,
                matches: n.slice(o)
            }), d = 0; d < s.length && !c.isPropagationStopped(); d++) for (i = s[d], c.currentTarget = i.elem, e = 0; e < i.matches.length && !c.isImmediatePropagationStopped(); e++) k = i.matches[e],
            (q || !c.namespace && !k.namespace || c.namespace_re && c.namespace_re.test(k.namespace)) && (c.data = k.data, c.handleObj = k, g = (r || k.handler).apply(i.elem, p), g !== b && (c.result = g, g === !1 && (c.preventDefault(), c.stopPropagation())));
            return c.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode: b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement wheelDelta".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button,
                h = c.fromElement;
                return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || G, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)),
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement: h),
                !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0),
                a
            }
        },
        fix: function(a) {
            if (a[J.expando]) return a;
            var c, d, e = a,
            f = J.event.fixHooks[a.type] || {},
            g = f.props ? this.props.concat(f.props) : this.props;
            for (a = J.Event(e), c = g.length; c;) d = g[--c],
            a[d] = e[d];
            return a.target || (a.target = e.srcElement || G),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey === b && (a.metaKey = a.ctrlKey),
            f.filter ? f.filter(a, e) : a
        },
        special: {
            ready: {
                setup: J.bindReady
            },
            focus: {
                delegateType: "focusin",
                noBubble: !0
            },
            blur: {
                delegateType: "focusout",
                noBubble: !0
            },
            beforeunload: {
                setup: function(a, b, c) {
                    J.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function(a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = J.extend(new J.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? J.event.trigger(e, null, b) : J.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    J.event.handle = J.event.dispatch,
    J.removeEvent = G.removeEventListener ?
    function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }: function(a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    },
    J.Event = function(a, b) {
        return this instanceof J.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? A: B) : this.type = a, b && J.extend(this, b), this.timeStamp = a && a.timeStamp || J.now(), this[J.expando] = !0, void 0) : new J.Event(a, b)
    },
    J.Event.prototype = {
        preventDefault: function() {
            this.isDefaultPrevented = A;
            var a = this.originalEvent; ! a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            this.isPropagationStopped = A;
            var a = this.originalEvent; ! a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = A,
            this.stopPropagation()
        },
        isDefaultPrevented: B,
        isPropagationStopped: B,
        isImmediatePropagationStopped: B
    },
    J.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(a, b) {
        J.event.special[a] = J.event.special[b] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var b, c, d = this,
                e = a.relatedTarget,
                f = a.handleObj;
                f.selector;
                return (!e || f.origType === a.type || e !== d && !J.contains(d, e)) && (b = a.type, a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
                c
            }
        }
    }),
    J.support.submitBubbles || (J.event.special.submit = {
        setup: function() {
            return J.nodeName(this, "form") ? !1 : void J.event.add(this, "click._submit keypress._submit",
            function(a) {
                var c = a.target,
                d = J.nodeName(c, "input") || J.nodeName(c, "button") ? c.form: b;
                d && !d._submit_attached && (J.event.add(d, "submit._submit",
                function(a) {
                    this.parentNode && J.event.simulate("submit", this.parentNode, a, !0)
                }), d._submit_attached = !0)
            })
        },
        teardown: function() {
            return J.nodeName(this, "form") ? !1 : void J.event.remove(this, "._submit")
        }
    }),
    J.support.changeBubbles || (J.event.special.change = {
        setup: function() {
            return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change",
            function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }), J.event.add(this, "click._change",
            function(a) {
                this._just_changed && (this._just_changed = !1, J.event.simulate("change", this, a, !0))
            })), !1) : void J.event.add(this, "beforeactivate._change",
            function(a) {
                var b = a.target;
                Z.test(b.nodeName) && !b._change_attached && (J.event.add(b, "change._change",
                function(a) {
                    this.parentNode && !a.isSimulated && J.event.simulate("change", this.parentNode, a, !0)
                }), b._change_attached = !0)
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return J.event.remove(this, "._change"),
            Z.test(this.nodeName)
        }
    }),
    J.support.focusinBubbles || J.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(a, b) {
        var c = 0,
        d = function(a) {
            J.event.simulate(b, a.target, J.event.fix(a), !0)
        };
        J.event.special[b] = {
            setup: function() {
                0 === c++&&G.addEventListener(a, d, !0)
            },
            teardown: function() {
                0 === --c && G.removeEventListener(a, d, !0)
            }
        }
    }),
    J.fn.extend({
        on: function(a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = c, c = b);
                for (h in a) this.on(h, c, d, a[h], f);
                return this
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = B;
            else if (!e) return this;
            return 1 === f && (g = e, e = function(a) {
                return J().off(a),
                g.apply(this, arguments)
            },
            e.guid = g.guid || (g.guid = J.guid++)),
            this.each(function() {
                J.event.add(this, a, e, d, c)
            })
        },
        one: function(a, b, c, d) {
            return this.on.call(this, a, b, c, d, 1)
        },
        off: function(a, c, d) {
            if (a && a.preventDefault && a.handleObj) {
                var e = a.handleObj;
                return J(a.delegateTarget).off(e.namespace ? e.type + "." + e.namespace: e.type, e.selector, e.handler),
                this
            }
            if ("object" == typeof a) {
                for (var f in a) this.off(f, c, a[f]);
                return this
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b),
            d === !1 && (d = B),
            this.each(function() {
                J.event.remove(this, a, d, c)
            })
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        live: function(a, b, c) {
            return J(this.context).on(a, this.selector, b, c),
            this
        },
        die: function(a, b) {
            return J(this.context).off(a, this.selector || "**", b),
            this
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c)
        },
        trigger: function(a, b) {
            return this.each(function() {
                J.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            return this[0] ? J.event.trigger(a, b, this[0], !0) : void 0
        },
        toggle: function(a) {
            var b = arguments,
            c = a.guid || J.guid++,
            d = 0,
            e = function(c) {
                var e = (J._data(this, "lastToggle" + a.guid) || 0) % d;
                return J._data(this, "lastToggle" + a.guid, e + 1),
                c.preventDefault(),
                b[e].apply(this, arguments) || !1
            };
            for (e.guid = c; d < b.length;) b[d++].guid = c;
            return this.click(e)
        },
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    }),
    J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(a, b) {
        J.fn[b] = function(a, c) {
            return null == c && (c = a, a = null),
            arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
        },
        J.attrFn && (J.attrFn[b] = !0),
        aa.test(b) && (J.event.fixHooks[b] = J.event.keyHooks),
        ba.test(b) && (J.event.fixHooks[b] = J.event.mouseHooks)
    }),
    function() {
        function a(a, b, c, d, f, g) {
            for (var h = 0,
            i = d.length; i > h; h++) {
                var j = d[h];
                if (j) {
                    var k = !1;
                    for (j = j[a]; j;) {
                        if (j[e] === c) {
                            k = d[j.sizset];
                            break
                        }
                        if (1 === j.nodeType) if (g || (j[e] = c, j.sizset = h), "string" != typeof b) {
                            if (j === b) {
                                k = !0;
                                break
                            }
                        } else if (m.filter(b, [j]).length > 0) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    d[h] = k
                }
            }
        }
        function c(a, b, c, d, f, g) {
            for (var h = 0,
            i = d.length; i > h; h++) {
                var j = d[h];
                if (j) {
                    var k = !1;
                    for (j = j[a]; j;) {
                        if (j[e] === c) {
                            k = d[j.sizset];
                            break
                        }
                        if (1 === j.nodeType && !g && (j[e] = c, j.sizset = h), j.nodeName.toLowerCase() === b) {
                            k = j;
                            break
                        }
                        j = j[a]
                    }
                    d[h] = k
                }
            }
        }
        var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        e = "sizcache" + (Math.random() + "").replace(".", ""),
        f = 0,
        g = Object.prototype.toString,
        h = !1,
        i = !0,
        j = /\\/g,
        k = /\r\n/g,
        l = /\W/; [0, 0].sort(function() {
            return i = !1,
            0
        });
        var m = function(a, b, c, e) {
            c = c || [],
            b = b || G;
            var f = b;
            if (1 !== b.nodeType && 9 !== b.nodeType) return [];
            if (!a || "string" != typeof a) return c;
            var h, i, j, k, l, n, q, r, t = !0,
            u = m.isXML(b),
            v = [],
            x = a;
            do
            if (d.exec(""), h = d.exec(x), h && (x = h[3], v.push(h[1]), h[2])) {
                k = h[3];
                break
            }
            while (h);
            if (v.length > 1 && p.exec(a)) if (2 === v.length && o.relative[v[0]]) i = w(v[0] + v[1], b, e);
            else for (i = o.relative[v[0]] ? [b] : m(v.shift(), b); v.length;) a = v.shift(),
            o.relative[a] && (a += v.shift()),
            i = w(a, i, e);
            else if (!e && v.length > 1 && 9 === b.nodeType && !u && o.match.ID.test(v[0]) && !o.match.ID.test(v[v.length - 1]) && (l = m.find(v.shift(), b, u), b = l.expr ? m.filter(l.expr, l.set)[0] : l.set[0]), b) for (l = e ? {
                expr: v.pop(),
                set: s(e)
            }: m.find(v.pop(), 1 !== v.length || "~" !== v[0] && "+" !== v[0] || !b.parentNode ? b: b.parentNode, u), i = l.expr ? m.filter(l.expr, l.set) : l.set, v.length > 0 ? j = s(i) : t = !1; v.length;) n = v.pop(),
            q = n,
            o.relative[n] ? q = v.pop() : n = "",
            null == q && (q = b),
            o.relative[n](j, q, u);
            else j = v = [];
            if (j || (j = i), j || m.error(n || a), "[object Array]" === g.call(j)) if (t) if (b && 1 === b.nodeType) for (r = 0; null != j[r]; r++) j[r] && (j[r] === !0 || 1 === j[r].nodeType && m.contains(b, j[r])) && c.push(i[r]);
            else for (r = 0; null != j[r]; r++) j[r] && 1 === j[r].nodeType && c.push(i[r]);
            else c.push.apply(c, j);
            else s(j, c);
            return k && (m(k, f, c, e), m.uniqueSort(c)),
            c
        };
        m.uniqueSort = function(a) {
            if (u && (h = i, a.sort(u), h)) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
            return a
        },
        m.matches = function(a, b) {
            return m(a, null, null, b)
        },
        m.matchesSelector = function(a, b) {
            return m(b, null, null, [a]).length > 0
        },
        m.find = function(a, b, c) {
            var d, e, f, g, h, i;
            if (!a) return [];
            for (e = 0, f = o.order.length; f > e; e++) if (h = o.order[e], (g = o.leftMatch[h].exec(a)) && (i = g[1], g.splice(1, 1), "\\" !== i.substr(i.length - 1) && (g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c), null != d))) {
                a = a.replace(o.match[h], "");
                break
            }
            return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []),
            {
                set: d,
                expr: a
            }
        },
        m.filter = function(a, c, d, e) {
            for (var f, g, h, i, j, k, l, n, p, q = a,
            r = [], s = c, t = c && c[0] && m.isXML(c[0]); a && c.length;) {
                for (h in o.filter) if (null != (f = o.leftMatch[h].exec(a)) && f[2]) {
                    if (k = o.filter[h], l = f[1], g = !1, f.splice(1, 1), "\\" === l.substr(l.length - 1)) continue;
                    if (s === r && (r = []), o.preFilter[h]) if (f = o.preFilter[h](f, s, d, r, e, t)) {
                        if (f === !0) continue
                    } else g = i = !0;
                    if (f) for (n = 0; null != (j = s[n]); n++) j && (i = k(j, f, n, s), p = e ^ i, d && null != i ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                    if (i !== b) {
                        if (d || (s = r), a = a.replace(o.match[h], ""), !g) return [];
                        break
                    }
                }
                if (a === q) {
                    if (null != g) break;
                    m.error(a)
                }
                q = a
            }
            return s
        },
        m.error = function(a) {
            throw "Syntax error, unrecognized expression: " + a
        };
        var n = m.getText = function(a) {
            var b, c, d = a.nodeType,
            e = "";
            if (d) {
                if (1 === d) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    if ("string" == typeof a.innerText) return a.innerText.replace(k, "");
                    for (a = a.firstChild; a; a = a.nextSibling) e += n(a)
                } else if (3 === d || 4 === d) return a.nodeValue
            } else for (b = 0; c = a[b]; b++) 8 !== c.nodeType && (e += n(c));
            return e
        },
        o = m.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function(a) {
                    return a.getAttribute("href")
                },
                type: function(a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function(a, b) {
                    var c = "string" == typeof b,
                    d = c && !l.test(b),
                    e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f, g = 0,
                    h = a.length; h > g; g++) if (f = a[g]) {
                        for (; (f = f.previousSibling) && 1 !== f.nodeType;);
                        a[g] = e || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b
                    }
                    e && m.filter(b, a, !0)
                },
                ">": function(a, b) {
                    var c, d = "string" == typeof b,
                    e = 0,
                    f = a.length;
                    if (d && !l.test(b)) {
                        for (b = b.toLowerCase(); f > e; e++) if (c = a[e]) {
                            var g = c.parentNode;
                            a[e] = g.nodeName.toLowerCase() === b ? g: !1
                        }
                    } else {
                        for (; f > e; e++) c = a[e],
                        c && (a[e] = d ? c.parentNode: c.parentNode === b);
                        d && m.filter(b, a, !0)
                    }
                },
                "": function(b, d, e) {
                    var g, h = f++,
                    i = a;
                    "string" == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c),
                    i("parentNode", d, h, b, g, e)
                },
                "~": function(b, d, e) {
                    var g, h = f++,
                    i = a;
                    "string" == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c),
                    i("previousSibling", d, h, b, g, e)
                }
            },
            find: {
                ID: function(a, b, c) {
                    if ("undefined" != typeof b.getElementById && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                },
                NAME: function(a, b) {
                    if ("undefined" != typeof b.getElementsByName) {
                        for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return 0 === c.length ? null: c
                    }
                },
                TAG: function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1]) : void 0
                }
            },
            preFilter: {
                CLASS: function(a, b, c, d, e, f) {
                    if (a = " " + a[1].replace(j, "") + " ", f) return a;
                    for (var g, h = 0; null != (g = b[h]); h++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
                    return ! 1
                },
                ID: function(a) {
                    return a[1].replace(j, "")
                },
                TAG: function(a, b) {
                    return a[1].replace(j, "").toLowerCase()
                },
                CHILD: function(a) {
                    if ("nth" === a[1]) {
                        a[2] || m.error(a[0]),
                        a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0,
                        a[3] = b[3] - 0
                    } else a[2] && m.error(a[0]);
                    return a[0] = f++,
                    a
                },
                ATTR: function(a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(j, "");
                    return ! f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                    a[4] = (a[4] || a[5] || "").replace(j, ""),
                    "~=" === a[2] && (a[4] = " " + a[4] + " "),
                    a
                },
                PSEUDO: function(a, b, c, e, f) {
                    if ("not" === a[1]) {
                        if (! ((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
                            var g = m.filter(a[3], b, c, !0 ^ f);
                            return c || e.push.apply(e, g),
                            !1
                        }
                        a[3] = m(a[3], null, null, b)
                    } else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0])) return ! 0;
                    return a
                },
                POS: function(a) {
                    return a.unshift(!0),
                    a
                }
            },
            filters: {
                enabled: function(a) {
                    return a.disabled === !1 && "hidden" !== a.type
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    return a.checked === !0
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                parent: function(a) {
                    return !! a.firstChild
                },
                empty: function(a) {
                    return ! a.firstChild
                },
                has: function(a, b, c) {
                    return !! m(c[3], a).length
                },
                header: function(a) {
                    return /h\d/i.test(a.nodeName)
                },
                text: function(a) {
                    var b = a.getAttribute("type"),
                    c = a.type;
                    return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b)
                },
                radio: function(a) {
                    return "input" === a.nodeName.toLowerCase() && "radio" === a.type
                },
                checkbox: function(a) {
                    return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type
                },
                file: function(a) {
                    return "input" === a.nodeName.toLowerCase() && "file" === a.type
                },
                password: function(a) {
                    return "input" === a.nodeName.toLowerCase() && "password" === a.type
                },
                submit: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return ("input" === b || "button" === b) && "submit" === a.type
                },
                image: function(a) {
                    return "input" === a.nodeName.toLowerCase() && "image" === a.type
                },
                reset: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return ("input" === b || "button" === b) && "reset" === a.type
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                input: function(a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                },
                focus: function(a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function(a, b) {
                    return 0 === b
                },
                last: function(a, b, c, d) {
                    return b === d.length - 1
                },
                even: function(a, b) {
                    return b % 2 === 0
                },
                odd: function(a, b) {
                    return b % 2 === 1
                },
                lt: function(a, b, c) {
                    return b < c[3] - 0
                },
                gt: function(a, b, c) {
                    return b > c[3] - 0
                },
                nth: function(a, b, c) {
                    return c[3] - 0 === b
                },
                eq: function(a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function(a, b, c, d) {
                    var e = b[1],
                    f = o.filters[e];
                    if (f) return f(a, c, b, d);
                    if ("contains" === e) return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                    if ("not" === e) {
                        for (var g = b[3], h = 0, i = g.length; i > h; h++) if (g[h] === a) return ! 1;
                        return ! 0
                    }
                    m.error(e)
                },
                CHILD: function(a, b) {
                    var c, d, f, g, h, i, j = b[1],
                    k = a;
                    switch (j) {
                    case "only":
                    case "first":
                        for (; k = k.previousSibling;) if (1 === k.nodeType) return ! 1;
                        if ("first" === j) return ! 0;
                        k = a;
                    case "last":
                        for (; k = k.nextSibling;) if (1 === k.nodeType) return ! 1;
                        return ! 0;
                    case "nth":
                        if (c = b[2], d = b[3], 1 === c && 0 === d) return ! 0;
                        if (f = b[0], g = a.parentNode, g && (g[e] !== f || !a.nodeIndex)) {
                            for (h = 0, k = g.firstChild; k; k = k.nextSibling) 1 === k.nodeType && (k.nodeIndex = ++h);
                            g[e] = f
                        }
                        return i = a.nodeIndex - d,
                        0 === c ? 0 === i: i % c === 0 && i / c >= 0
                    }
                },
                ID: function(a, b) {
                    return 1 === a.nodeType && a.getAttribute("id") === b
                },
                TAG: function(a, b) {
                    return "*" === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b
                },
                CLASS: function(a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                },
                ATTR: function(a, b) {
                    var c = b[1],
                    d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                    e = d + "",
                    f = b[2],
                    g = b[4];
                    return null == d ? "!=" === f: !f && m.attr ? null != d: "=" === f ? e === g: "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g: "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g: "|=" === f ? e === g || e.substr(0, g.length + 1) === g + "-": !1 : e && d !== !1
                },
                POS: function(a, b, c, d) {
                    var e = b[2],
                    f = o.setFilters[e];
                    return f ? f(a, c, b, d) : void 0
                }
            }
        },
        p = o.match.POS,
        q = function(a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source),
        o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
        var s = function(a, b) {
            return a = Array.prototype.slice.call(a, 0),
            b ? (b.push.apply(b, a), b) : a
        };
        try {
            Array.prototype.slice.call(G.documentElement.childNodes, 0)[0].nodeType
        } catch(t) {
            s = function(a, b) {
                var c = 0,
                d = b || [];
                if ("[object Array]" === g.call(a)) Array.prototype.push.apply(d, a);
                else if ("number" == typeof a.length) for (var e = a.length; e > c; c++) d.push(a[c]);
                else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var u, v;
        G.documentElement.compareDocumentPosition ? u = function(a, b) {
            return a === b ? (h = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1
        }: (u = function(a, b) {
            if (a === b) return h = !0,
            0;
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [],
            f = [],
            g = a.parentNode,
            i = b.parentNode,
            j = g;
            if (g === i) return v(a, b);
            if (!g) return - 1;
            if (!i) return 1;
            for (; j;) e.unshift(j),
            j = j.parentNode;
            for (j = i; j;) f.unshift(j),
            j = j.parentNode;
            c = e.length,
            d = f.length;
            for (var k = 0; c > k && d > k; k++) if (e[k] !== f[k]) return v(e[k], f[k]);
            return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
        },
        v = function(a, b, c) {
            if (a === b) return c;
            for (var d = a.nextSibling; d;) {
                if (d === b) return - 1;
                d = d.nextSibling
            }
            return 1
        }),
        function() {
            var a = G.createElement("div"),
            c = "script" + (new Date).getTime(),
            d = G.documentElement;
            a.innerHTML = "<a name='" + c + "'/>",
            d.insertBefore(a, d.firstChild),
            G.getElementById(c) && (o.find.ID = function(a, c, d) {
                if ("undefined" != typeof c.getElementById && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b: []
                }
            },
            o.filter.ID = function(a, b) {
                var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                return 1 === a.nodeType && c && c.nodeValue === b
            }),
            d.removeChild(a),
            d = a = null
        } (),
        function() {
            var a = G.createElement("div");
            a.appendChild(G.createComment("")),
            a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                var c = b.getElementsByTagName(a[1]);
                if ("*" === a[1]) {
                    for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                    c = d
                }
                return c
            }),
            a.innerHTML = "<a href='#'></a>",
            a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (o.attrHandle.href = function(a) {
                return a.getAttribute("href", 2)
            }),
            a = null
        } (),
        G.querySelectorAll &&
        function() {
            var a = m,
            b = G.createElement("div"),
            c = "__sizzle__";
            if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) {
                m = function(b, d, e, f) {
                    if (d = d || G, !f && !m.isXML(d)) {
                        var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (g && (1 === d.nodeType || 9 === d.nodeType)) {
                            if (g[1]) return s(d.getElementsByTagName(b), e);
                            if (g[2] && o.find.CLASS && d.getElementsByClassName) return s(d.getElementsByClassName(g[2]), e)
                        }
                        if (9 === d.nodeType) {
                            if ("body" === b && d.body) return s([d.body], e);
                            if (g && g[3]) {
                                var h = d.getElementById(g[3]);
                                if (!h || !h.parentNode) return s([], e);
                                if (h.id === g[3]) return s([h], e)
                            }
                            try {
                                return s(d.querySelectorAll(b), e)
                            } catch(i) {}
                        } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                            var j = d,
                            k = d.getAttribute("id"),
                            l = k || c,
                            n = d.parentNode,
                            p = /^\s*[+~]/.test(b);
                            k ? l = l.replace(/'/g, "\\$&") : d.setAttribute("id", l),
                            p && n && (d = d.parentNode);
                            try {
                                if (!p || n) return s(d.querySelectorAll("[id='" + l + "'] " + b), e)
                            } catch(q) {} finally {
                                k || j.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, d, e, f)
                };
                for (var d in a) m[d] = a[d];
                b = null
            }
        } (),
        function() {
            var a = G.documentElement,
            b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var c = !b.call(G.createElement("div"), "div"),
                d = !1;
                try {
                    b.call(G.documentElement, "[test!='']:sizzle")
                } catch(e) {
                    d = !0
                }
                m.matchesSelector = function(a, e) {
                    if (e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !m.isXML(a)) try {
                        if (d || !o.match.PSEUDO.test(e) && !/!=/.test(e)) {
                            var f = b.call(a, e);
                            if (f || !c || a.document && 11 !== a.document.nodeType) return f
                        }
                    } catch(g) {}
                    return m(e, null, null, [a]).length > 0
                }
            }
        } (),
        function() {
            var a = G.createElement("div");
            if (a.innerHTML = "<div class='test e'></div><div class='test'></div>", a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length) {
                if (a.lastChild.className = "e", 1 === a.getElementsByClassName("e").length) return;
                o.order.splice(1, 0, "CLASS"),
                o.find.CLASS = function(a, b, c) {
                    return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1])
                },
                a = null
            }
        } (),
        G.documentElement.contains ? m.contains = function(a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        }: G.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
            return !! (16 & a.compareDocumentPosition(b))
        }: m.contains = function() {
            return ! 1
        },
        m.isXML = function(a) {
            var b = (a ? a.ownerDocument || a: 0).documentElement;
            return b ? "HTML" !== b.nodeName: !1
        };
        var w = function(a, b, c) {
            for (var d, e = [], f = "", g = b.nodeType ? [b] : b; d = o.match.PSEUDO.exec(a);) f += d[0],
            a = a.replace(o.match.PSEUDO, "");
            a = o.relative[a] ? a + "*": a;
            for (var h = 0,
            i = g.length; i > h; h++) m(a, g[h], e, c);
            return m.filter(f, e)
        };
        m.attr = J.attr,
        m.selectors.attrMap = {},
        J.find = m,
        J.expr = m.selectors,
        J.expr[":"] = J.expr.filters,
        J.unique = m.uniqueSort,
        J.text = m.getText,
        J.isXMLDoc = m.isXML,
        J.contains = m.contains
    } ();
    var ga = /Until$/,
    ha = /^(?:parents|prevUntil|prevAll)/,
    ia = /,/,
    ja = /^.[^:#\[\.,]*$/,
    ka = Array.prototype.slice,
    la = J.expr.match.POS,
    ma = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    J.fn.extend({
        find: function(a) {
            var b, c, d = this;
            if ("string" != typeof a) return J(a).filter(function() {
                for (b = 0, c = d.length; c > b; b++) if (J.contains(d[b], this)) return ! 0
            });
            var e, f, g, h = this.pushStack("", "find", a);
            for (b = 0, c = this.length; c > b; b++) if (e = h.length, J.find(a, this[b], h), b > 0) for (f = e; f < h.length; f++) for (g = 0; e > g; g++) if (h[g] === h[f]) {
                h.splice(f--, 1);
                break
            }
            return h
        },
        has: function(a) {
            var b = J(a);
            return this.filter(function() {
                for (var a = 0,
                c = b.length; c > a; a++) if (J.contains(this, b[a])) return ! 0
            })
        },
        not: function(a) {
            return this.pushStack(y(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(y(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !! a && ("string" == typeof a ? la.test(a) ? J(a, this.context).index(this[0]) >= 0 : J.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function(a, b) {
            var c, d, e = [],
            f = this[0];
            if (J.isArray(a)) {
                for (var g = 1; f && f.ownerDocument && f !== b;) {
                    for (c = 0; c < a.length; c++) J(f).is(a[c]) && e.push({
                        selector: a[c],
                        elem: f,
                        level: g
                    });
                    f = f.parentNode,
                    g++
                }
                return e
            }
            var h = la.test(a) || "string" != typeof a ? J(a, b || this.context) : 0;
            for (c = 0, d = this.length; d > c; c++) for (f = this[c]; f;) {
                if (h ? h.index(f) > -1 : J.find.matchesSelector(f, a)) {
                    e.push(f);
                    break
                }
                if (f = f.parentNode, !f || !f.ownerDocument || f === b || 11 === f.nodeType) break
            }
            return e = e.length > 1 ? J.unique(e) : e,
            this.pushStack(e, "closest", a)
        },
        index: function(a) {
            return a ? "string" == typeof a ? J.inArray(this[0], J(a)) : J.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length: -1
        },
        add: function(a, b) {
            var c = "string" == typeof a ? J(a, b) : J.makeArray(a && a.nodeType ? [a] : a),
            d = J.merge(this.get(), c);
            return this.pushStack(z(c[0]) || z(d[0]) ? d: J.unique(d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }),
    J.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b: null
        },
        parents: function(a) {
            return J.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return J.dir(a, "parentNode", c)
        },
        next: function(a) {
            return J.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return J.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return J.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return J.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return J.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return J.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return J.sibling(a.parentNode.firstChild, a)
        },
        children: function(a) {
            return J.sibling(a.firstChild)
        },
        contents: function(a) {
            return J.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: J.makeArray(a.childNodes)
        }
    },
    function(a, b) {
        J.fn[a] = function(c, d) {
            var e = J.map(this, b, c),
            f = ka.call(arguments);
            return ga.test(a) || (d = c),
            d && "string" == typeof d && (e = J.filter(d, e)),
            e = this.length > 1 && !ma[a] ? J.unique(e) : e,
            (this.length > 1 || ia.test(d)) && ha.test(a) && (e = e.reverse()),
            this.pushStack(e, a, f.join(","))
        }
    }),
    J.extend({
        filter: function(a, b, c) {
            return c && (a = ":not(" + a + ")"),
            1 === b.length ? J.find.matchesSelector(b[0], a) ? [b[0]] : [] : J.find.matches(a, b)
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !J(f).is(d));) 1 === f.nodeType && e.push(f),
            f = f[c];
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            for (var e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
            return a
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    var na = "abbr article aside audio canvas datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
    oa = / jQuery\d+="(?:\d+|null)"/g,
    pa = /^\s+/,
    qa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    ra = /<([\w:]+)/,
    sa = /<tbody/i,
    ta = /<|&#?\w+;/,
    ua = /<(?:script|style)/i,
    va = /<(?:script|object|embed|option|style)/i,
    wa = new RegExp("<(?:" + na.replace(" ", "|") + ")", "i"),
    xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ya = /\/(java|ecma)script/i,
    za = /^\s*<!(?:\[CDATA\[|\-\-)/,
    Aa = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    },
    Ba = x(G);
    Aa.optgroup = Aa.option,
    Aa.tbody = Aa.tfoot = Aa.colgroup = Aa.caption = Aa.thead,
    Aa.th = Aa.td,
    J.support.htmlSerialize || (Aa._default = [1, "div<div>", "</div>"]),
    J.fn.extend({
        text: function(a) {
            return J.isFunction(a) ? this.each(function(b) {
                var c = J(this);
                c.text(a.call(this, b, c.text()))
            }) : "object" != typeof a && a !== b ? this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(a)) : J.text(this)
        },
        wrapAll: function(a) {
            if (J.isFunction(a)) return this.each(function(b) {
                J(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = J(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return J.isFunction(a) ? this.each(function(b) {
                J(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = J(this),
                c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            return this.each(function() {
                J(this).wrapAll(a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0,
            function(a) {
                1 === this.nodeType && this.appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0,
            function(a) {
                1 === this.nodeType && this.insertBefore(a, this.firstChild)
            })
        },
        before: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = J(arguments[0]);
                return a.push.apply(a, this.toArray()),
                this.pushStack(a, "before", arguments)
            }
        },
        after: function() {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1,
            function(a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                return a.push.apply(a, J(arguments[0]).toArray()),
                a
            }
        },
        remove: function(a, b) {
            for (var c, d = 0; null != (c = this[d]); d++)(!a || J.filter(a, [c]).length) && (!b && 1 === c.nodeType && (J.cleanData(c.getElementsByTagName("*")), J.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) for (1 === a.nodeType && J.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a: b,
            this.map(function() {
                return J.clone(this, a, b)
            })
        },
        html: function(a) {
            if (a === b) return this[0] && 1 === this[0].nodeType ? this[0].innerHTML.replace(oa, "") : null;
            if ("string" != typeof a || ua.test(a) || !J.support.leadingWhitespace && pa.test(a) || Aa[(ra.exec(a) || ["", ""])[1].toLowerCase()]) J.isFunction(a) ? this.each(function(b) {
                var c = J(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            else {
                a = a.replace(qa, "<$1></$2>");
                try {
                    for (var c = 0,
                    d = this.length; d > c; c++) 1 === this[c].nodeType && (J.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch(e) {
                    this.empty().append(a)
                }
            }
            return this
        },
        replaceWith: function(a) {
            return this[0] && this[0].parentNode ? J.isFunction(a) ? this.each(function(b) {
                var c = J(this),
                d = c.html();
                c.replaceWith(a.call(this, b, d))
            }) : ("string" != typeof a && (a = J(a).detach()), this.each(function() {
                var b = this.nextSibling,
                c = this.parentNode;
                J(this).remove(),
                b ? J(b).before(a) : J(c).append(a)
            })) : this.length ? this.pushStack(J(J.isFunction(a) ? a() : a), "replaceWith", a) : this
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, c, d) {
            var e, f, g, h, i = a[0],
            j = [];
            if (!J.support.checkClone && 3 === arguments.length && "string" == typeof i && xa.test(i)) return this.each(function() {
                J(this).domManip(a, c, d, !0)
            });
            if (J.isFunction(i)) return this.each(function(e) {
                var f = J(this);
                a[0] = i.call(this, e, c ? f.html() : b),
                f.domManip(a, c, d)
            });
            if (this[0]) {
                if (h = i && i.parentNode, e = J.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? {
                    fragment: h
                }: J.buildFragment(a, this, j), g = e.fragment, f = 1 === g.childNodes.length ? g = g.firstChild: g.firstChild, f) {
                    c = c && J.nodeName(f, "tr");
                    for (var k = 0,
                    l = this.length,
                    m = l - 1; l > k; k++) d.call(c ? w(this[k], f) : this[k], e.cacheable || l > 1 && m > k ? J.clone(g, !0, !0) : g)
                }
                j.length && J.each(j, q)
            }
            return this
        }
    }),
    J.buildFragment = function(a, b, c) {
        var d, e, f, g, h = a[0];
        return b && b[0] && (g = b[0].ownerDocument || b[0]),
        g.createDocumentFragment || (g = G),
        1 === a.length && "string" == typeof h && h.length < 512 && g === G && "<" === h.charAt(0) && !va.test(h) && (J.support.checkClone || !xa.test(h)) && !J.support.unknownElems && wa.test(h) && (e = !0, f = J.fragments[h], f && 1 !== f && (d = f)),
        d || (d = g.createDocumentFragment(), J.clean(a, g, d, c)),
        e && (J.fragments[h] = f ? d: 1),
        {
            fragment: d,
            cacheable: e
        }
    },
    J.fragments = {},
    J.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(a, b) {
        J.fn[a] = function(c) {
            var d = [],
            e = J(c),
            f = 1 === this.length && this[0].parentNode;
            if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length) return e[b](this[0]),
            this;
            for (var g = 0,
            h = e.length; h > g; g++) {
                var i = (g > 0 ? this.clone(!0) : this).get();
                J(e[g])[b](i),
                d = d.concat(i)
            }
            return this.pushStack(d, a, e.selector)
        }
    }),
    J.extend({
        clone: function(a, b, c) {
            var d, e, f, g = a.cloneNode(!0);
            if (! (J.support.noCloneEvent && J.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || J.isXMLDoc(a))) for (u(a, g), d = t(a), e = t(g), f = 0; d[f]; ++f) e[f] && u(d[f], e[f]);
            if (b && (v(a, g), c)) for (d = t(a), e = t(g), f = 0; d[f]; ++f) v(d[f], e[f]);
            return d = e = null,
            g
        },
        clean: function(a, b, c, d) {
            var e;
            b = b || G,
            "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || G);
            for (var f, g, h = [], i = 0; null != (g = a[i]); i++) if ("number" == typeof g && (g += ""), g) {
                if ("string" == typeof g) if (ta.test(g)) {
                    g = g.replace(qa, "<$1></$2>");
                    var j = (ra.exec(g) || ["", ""])[1].toLowerCase(),
                    k = Aa[j] || Aa._default,
                    l = k[0],
                    m = b.createElement("div");
                    for (b === G ? Ba.appendChild(m) : x(b).appendChild(m), m.innerHTML = k[1] + g + k[2]; l--;) m = m.lastChild;
                    if (!J.support.tbody) {
                        var n = sa.test(g),
                        o = "table" !== j || n ? "<table>" !== k[1] || n ? [] : m.childNodes: m.firstChild && m.firstChild.childNodes;
                        for (f = o.length - 1; f >= 0; --f) J.nodeName(o[f], "tbody") && !o[f].childNodes.length && o[f].parentNode.removeChild(o[f])
                    } ! J.support.leadingWhitespace && pa.test(g) && m.insertBefore(b.createTextNode(pa.exec(g)[0]), m.firstChild),
                    g = m.childNodes
                } else g = b.createTextNode(g);
                var p;
                if (!J.support.appendChecked) if (g[0] && "number" == typeof(p = g.length)) for (f = 0; p > f; f++) r(g[f]);
                else r(g);
                g.nodeType ? h.push(g) : h = J.merge(h, g)
            }
            if (c) for (e = function(a) {
                return ! a.type || ya.test(a.type)
            },
            i = 0; h[i]; i++) if (!d || !J.nodeName(h[i], "script") || h[i].type && "text/javascript" !== h[i].type.toLowerCase()) {
                if (1 === h[i].nodeType) {
                    var q = J.grep(h[i].getElementsByTagName("script"), e);
                    h.splice.apply(h, [i + 1, 0].concat(q))
                }
                c.appendChild(h[i])
            } else d.push(h[i].parentNode ? h[i].parentNode.removeChild(h[i]) : h[i]);
            return h
        },
        cleanData: function(a) {
            for (var b, c, d, e = J.cache,
            f = J.event.special,
            g = J.support.deleteExpando,
            h = 0; null != (d = a[h]); h++) if ((!d.nodeName || !J.noData[d.nodeName.toLowerCase()]) && (c = d[J.expando])) {
                if (b = e[c], b && b.events) {
                    for (var i in b.events) f[i] ? J.event.remove(d, i) : J.removeEvent(d, i, b.handle);
                    b.handle && (b.handle.elem = null)
                }
                g ? delete d[J.expando] : d.removeAttribute && d.removeAttribute(J.expando),
                delete e[c]
            }
        }
    });
    var Ca, Da, Ea, Fa = /alpha\([^)]*\)/i,
    Ga = /opacity=([^)]*)/,
    Ha = /([A-Z]|^ms)/g,
    Ia = /^-?\d+(?:px)?$/i,
    Ja = /^-?\d/,
    Ka = /^([\-+])=([\-+.\de]+)/,
    La = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Ma = ["Left", "Right"],
    Na = ["Top", "Bottom"];
    J.fn.css = function(a, c) {
        return 2 === arguments.length && c === b ? this: J.access(this, a, c, !0,
        function(a, c, d) {
            return d !== b ? J.style(a, c, d) : J.css(a, c)
        })
    },
    J.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ca(a, "opacity", "opacity");
                        return "" === c ? "1": c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": J.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h = J.camelCase(c),
                i = a.style,
                j = J.cssHooks[h];
                if (c = J.cssProps[h] || h, d === b) return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f: i[c];
                if (g = typeof d, "string" === g && (f = Ka.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(J.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d)) return;
                if ("number" === g && !J.cssNumber[h] && (d += "px"), !(j && "set" in j && (d = j.set(a, d)) === b)) try {
                    i[c] = d
                } catch(k) {}
            }
        },
        css: function(a, c, d) {
            var e, f;
            return c = J.camelCase(c),
            f = J.cssHooks[c],
            c = J.cssProps[c] || c,
            "cssFloat" === c && (c = "float"),
            f && "get" in f && (e = f.get(a, !0, d)) !== b ? e: Ca ? Ca(a, c) : void 0
        },
        swap: function(a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e],
            a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }),
    J.curCSS = J.css,
    J.each(["height", "width"],
    function(a, b) {
        J.cssHooks[b] = {
            get: function(a, c, d) {
                var e;
                return c ? 0 !== a.offsetWidth ? p(a, b, d) : (J.swap(a, La,
                function() {
                    e = p(a, b, d)
                }), e) : void 0
            },
            set: function(a, b) {
                return Ia.test(b) ? (b = parseFloat(b), b >= 0 ? b + "px": void 0) : b
            }
        }
    }),
    J.support.opacity || (J.cssHooks.opacity = {
        get: function(a, b) {
            return Ga.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "": b ? "1": ""
        },
        set: function(a, b) {
            var c = a.style,
            d = a.currentStyle,
            e = J.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "",
            f = d && d.filter || c.filter || "";
            c.zoom = 1,
            b >= 1 && "" === J.trim(f.replace(Fa, "")) && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = Fa.test(f) ? f.replace(Fa, e) : f + " " + e)
        }
    }),
    J(function() {
        J.support.reliableMarginRight || (J.cssHooks.marginRight = {
            get: function(a, b) {
                var c;
                return J.swap(a, {
                    display: "inline-block"
                },
                function() {
                    c = b ? Ca(a, "margin-right", "marginRight") : a.style.marginRight
                }),
                c
            }
        })
    }),
    G.defaultView && G.defaultView.getComputedStyle && (Da = function(a, c) {
        var d, e, f;
        return c = c.replace(Ha, "-$1").toLowerCase(),
        (e = a.ownerDocument.defaultView) ? ((f = e.getComputedStyle(a, null)) && (d = f.getPropertyValue(c), "" === d && !J.contains(a.ownerDocument.documentElement, a) && (d = J.style(a, c))), d) : b
    }),
    G.documentElement.currentStyle && (Ea = function(a, b) {
        var c, d, e, f = a.currentStyle && a.currentStyle[b],
        g = a.style;
        return null === f && g && (e = g[b]) && (f = e),
        !Ia.test(f) && Ja.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em": f || 0, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)),
        "" === f ? "auto": f
    }),
    Ca = Da || Ea,
    J.expr && J.expr.filters && (J.expr.filters.hidden = function(a) {
        var b = a.offsetWidth,
        c = a.offsetHeight;
        return 0 === b && 0 === c || !J.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || J.css(a, "display"))
    },
    J.expr.filters.visible = function(a) {
        return ! J.expr.filters.hidden(a)
    });
    var Oa, Pa, Qa = /%20/g,
    Ra = /\[\]$/,
    Sa = /\r?\n/g,
    Ta = /#.*$/,
    Ua = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Va = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    Wa = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    Xa = /^(?:GET|HEAD)$/,
    Ya = /^\/\//,
    Za = /\?/,
    $a = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    _a = /^(?:select|textarea)/i,
    ab = /\s+/,
    bb = /([?&])_=[^&]*/,
    cb = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    db = J.fn.load,
    eb = {},
    fb = {},
    gb = ["*/"] + ["*"];
    try {
        Oa = I.href
    } catch(hb) {
        Oa = G.createElement("a"),
        Oa.href = "",
        Oa = Oa.href
    }
    Pa = cb.exec(Oa.toLowerCase()) || [],
    J.fn.extend({
        load: function(a, c, d) {
            if ("string" != typeof a && db) return db.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var f = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var g = "GET";
            c && (J.isFunction(c) ? (d = c, c = b) : "object" == typeof c && (c = J.param(c, J.ajaxSettings.traditional), g = "POST"));
            var h = this;
            return J.ajax({
                url: a,
                type: g,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText,
                    a.isResolved() && (a.done(function(a) {
                        c = a
                    }), h.html(f ? J("<div>").append(c.replace($a, "")).find(f) : c)),
                    d && h.each(d, [c, b, a])
                }
            }),
            this
        },
        serialize: function() {
            return J.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? J.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || _a.test(this.nodeName) || Va.test(this.type))
            }).map(function(a, b) {
                var c = J(this).val();
                return null == c ? null: J.isArray(c) ? J.map(c,
                function(a, c) {
                    return {
                        name: b.name,
                        value: a.replace(Sa, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sa, "\r\n")
                }
            }).get()
        }
    }),
    J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
    function(a, b) {
        J.fn[b] = function(a) {
            return this.bind(b, a)
        }
    }),
    J.each(["get", "post"],
    function(a, c) {
        J[c] = function(a, d, e, f) {
            return J.isFunction(d) && (f = f || e, e = d, d = b),
            J.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: f
            })
        }
    }),
    J.extend({
        getScript: function(a, c) {
            return J.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return J.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            return b ? m(a, J.ajaxSettings) : (b = a, a = J.ajaxSettings),
            m(a, b),
            a
        },
        ajaxSettings: {
            url: Oa,
            isLocal: Wa.test(Pa[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": gb
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": J.parseJSON,
                "text xml": J.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: o(eb),
        ajaxTransport: o(fb),
        ajax: function(a, c) {
            function d(a, c, d, g) {
                if (2 !== x) {
                    x = 2,
                    i && clearTimeout(i),
                    h = b,
                    f = g || "",
                    y.readyState = a > 0 ? 4 : 0;
                    var l, n, o, v, w, z = c,
                    A = d ? k(p, y, d) : b;
                    if (a >= 200 && 300 > a || 304 === a) if (p.ifModified && ((v = y.getResponseHeader("Last-Modified")) && (J.lastModified[e] = v), (w = y.getResponseHeader("Etag")) && (J.etag[e] = w)), 304 === a) z = "notmodified",
                    l = !0;
                    else try {
                        n = j(p, A),
                        z = "success",
                        l = !0
                    } catch(B) {
                        z = "parsererror",
                        o = B
                    } else o = z,
                    (!z || a) && (z = "error", 0 > a && (a = 0));
                    y.status = a,
                    y.statusText = "" + (c || z),
                    l ? s.resolveWith(q, [n, z, y]) : s.rejectWith(q, [y, z, o]),
                    y.statusCode(u),
                    u = b,
                    m && r.trigger("ajax" + (l ? "Success": "Error"), [y, p, l ? n: o]),
                    t.fireWith(q, [y, z]),
                    m && (r.trigger("ajaxComplete", [y, p]), --J.active || J.event.trigger("ajaxStop"))
                }
            }
            "object" == typeof a && (c = a, a = b),
            c = c || {};
            var e, f, g, h, i, l, m, o, p = J.ajaxSetup({},
            c),
            q = p.context || p,
            r = q !== p && (q.nodeType || q instanceof J) ? J(q) : J.event,
            s = J.Deferred(),
            t = J.Callbacks("once memory"),
            u = p.statusCode || {},
            v = {},
            w = {},
            x = 0,
            y = {
                readyState: 0,
                setRequestHeader: function(a, b) {
                    if (!x) {
                        var c = a.toLowerCase();
                        a = w[c] = w[c] || a,
                        v[a] = b
                    }
                    return this
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? f: null
                },
                getResponseHeader: function(a) {
                    var c;
                    if (2 === x) {
                        if (!g) for (g = {}; c = Ua.exec(f);) g[c[1].toLowerCase()] = c[2];
                        c = g[a.toLowerCase()]
                    }
                    return c === b ? null: c
                },
                overrideMimeType: function(a) {
                    return x || (p.mimeType = a),
                    this
                },
                abort: function(a) {
                    return a = a || "abort",
                    h && h.abort(a),
                    d(0, a),
                    this
                }
            };
            if (s.promise(y), y.success = y.done, y.error = y.fail, y.complete = t.add, y.statusCode = function(a) {
                if (a) {
                    var b;
                    if (2 > x) for (b in a) u[b] = [u[b], a[b]];
                    else b = a[y.status],
                    y.then(b, b)
                }
                return this
            },
            p.url = ((a || p.url) + "").replace(Ta, "").replace(Ya, Pa[1] + "//"), p.dataTypes = J.trim(p.dataType || "*").toLowerCase().split(ab), null == p.crossDomain && (l = cb.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] == Pa[1] && l[2] == Pa[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (Pa[3] || ("http:" === Pa[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = J.param(p.data, p.traditional)), n(eb, p, c, y), 2 === x) return ! 1;
            if (m = p.global, p.type = p.type.toUpperCase(), p.hasContent = !Xa.test(p.type), m && 0 === J.active++&&J.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += (Za.test(p.url) ? "&": "?") + p.data, delete p.data), e = p.url, p.cache === !1)) {
                var z = J.now(),
                A = p.url.replace(bb, "$1_=" + z);
                p.url = A + (A === p.url ? (Za.test(p.url) ? "&": "?") + "_=" + z: "")
            } (p.data && p.hasContent && p.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", p.contentType),
            p.ifModified && (e = e || p.url, J.lastModified[e] && y.setRequestHeader("If-Modified-Since", J.lastModified[e]), J.etag[e] && y.setRequestHeader("If-None-Match", J.etag[e])),
            y.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + gb + "; q=0.01": "") : p.accepts["*"]);
            for (o in p.headers) y.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(q, y, p) === !1 || 2 === x)) return y.abort(),
            !1;
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) y[o](p[o]);
            if (h = n(fb, p, c, y)) {
                y.readyState = 1,
                m && r.trigger("ajaxSend", [y, p]),
                p.async && p.timeout > 0 && (i = setTimeout(function() {
                    y.abort("timeout")
                },
                p.timeout));
                try {
                    x = 1,
                    h.send(v, d)
                } catch(B) {
                    2 > x ? d( - 1, B) : J.error(B)
                }
            } else d( - 1, "No Transport");
            return y
        },
        param: function(a, c) {
            var d = [],
            e = function(a, b) {
                b = J.isFunction(b) ? b() : b,
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            if (c === b && (c = J.ajaxSettings.traditional), J.isArray(a) || a.jquery && !J.isPlainObject(a)) J.each(a,
            function() {
                e(this.name, this.value)
            });
            else for (var f in a) l(f, a[f], c, e);
            return d.join("&").replace(Qa, "+")
        }
    }),
    J.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var ib = J.now(),
    jb = /(\=)\?(&|$)|\?\?/i;
    J.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return J.expando + "_" + ib++
        }
    }),
    J.ajaxPrefilter("json jsonp",
    function(b, c, d) {
        var e = "application/x-www-form-urlencoded" === b.contentType && "string" == typeof b.data;
        if ("jsonp" === b.dataTypes[0] || b.jsonp !== !1 && (jb.test(b.url) || e && jb.test(b.data))) {
            var f, g = b.jsonpCallback = J.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            h = a[g],
            i = b.url,
            j = b.data,
            k = "$1" + g + "$2";
            return b.jsonp !== !1 && (i = i.replace(jb, k), b.url === i && (e && (j = j.replace(jb, k)), b.data === j && (i += (/\?/.test(i) ? "&": "?") + b.jsonp + "=" + g))),
            b.url = i,
            b.data = j,
            a[g] = function(a) {
                f = [a]
            },
            d.always(function() {
                a[g] = h,
                f && J.isFunction(h) && a[g](f[0])
            }),
            b.converters["script json"] = function() {
                return f || J.error(g + " was not called"),
                f[0]
            },
            b.dataTypes[0] = "json",
            "script"
        }
    }),
    J.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                return J.globalEval(a),
                a
            }
        }
    }),
    J.ajaxPrefilter("script",
    function(a) {
        a.cache === b && (a.cache = !1),
        a.crossDomain && (a.type = "GET", a.global = !1)
    }),
    J.ajaxTransport("script",
    function(a) {
        if (a.crossDomain) {
            var c, d = G.head || G.getElementsByTagName("head")[0] || G.documentElement;
            return {
                send: function(e, f) {
                    c = G.createElement("script"),
                    c.async = "async",
                    a.scriptCharset && (c.charset = a.scriptCharset),
                    c.src = a.url,
                    c.onload = c.onreadystatechange = function(a, e) { (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success"))
                    },
                    d.insertBefore(c, d.firstChild)
                },
                abort: function() {
                    c && c.onload(0, 1)
                }
            }
        }
    });
    var kb, lb = a.ActiveXObject ?
    function() {
        for (var a in kb) kb[a](0, 1)
    }: !1,
    mb = 0;
    J.ajaxSettings.xhr = a.ActiveXObject ?
    function() {
        return ! this.isLocal && i() || h()
    }: i,
    function(a) {
        J.extend(J.support, {
            ajax: !!a,
            cors: !!a && "withCredentials" in a
        })
    } (J.ajaxSettings.xhr()),
    J.support.ajax && J.ajaxTransport(function(c) {
        if (!c.crossDomain || J.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType),
                    !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h])
                    } catch(j) {}
                    i.send(c.hasContent && c.data || null),
                    d = function(a, e) {
                        var h, j, k, l, m;
                        try {
                            if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = J.noop, lb && delete kb[g]), e) 4 !== i.readyState && i.abort();
                            else {
                                h = i.status,
                                k = i.getAllResponseHeaders(),
                                l = {},
                                m = i.responseXML,
                                m && m.documentElement && (l.xml = m),
                                l.text = i.responseText;
                                try {
                                    j = i.statusText
                                } catch(n) {
                                    j = ""
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404
                            }
                        } catch(o) {
                            e || f( - 1, o)
                        }
                        l && f(h, j, l, k)
                    },
                    c.async && 4 !== i.readyState ? (g = ++mb, lb && (kb || (kb = {},
                    J(a).unload(lb)), kb[g] = d), i.onreadystatechange = d) : d()
                },
                abort: function() {
                    d && d(0, 1)
                }
            }
        }
    });
    var nb, ob, pb, qb, rb = {},
    sb = /^(?:toggle|show|hide)$/,
    tb = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    ub = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    J.fn.extend({
        show: function(a, b, c) {
            var f, g;
            if (a || 0 === a) return this.animate(e("show", 3), a, b, c);
            for (var h = 0,
            i = this.length; i > h; h++) f = this[h],
            f.style && (g = f.style.display, !J._data(f, "olddisplay") && "none" === g && (g = f.style.display = ""), "" === g && "none" === J.css(f, "display") && J._data(f, "olddisplay", d(f.nodeName)));
            for (h = 0; i > h; h++) f = this[h],
            f.style && (g = f.style.display, ("" === g || "none" === g) && (f.style.display = J._data(f, "olddisplay") || ""));
            return this
        },
        hide: function(a, b, c) {
            if (a || 0 === a) return this.animate(e("hide", 3), a, b, c);
            for (var d, f, g = 0,
            h = this.length; h > g; g++) d = this[g],
            d.style && (f = J.css(d, "display"), "none" !== f && !J._data(d, "olddisplay") && J._data(d, "olddisplay", f));
            for (g = 0; h > g; g++) this[g].style && (this[g].style.display = "none");
            return this
        },
        _toggle: J.fn.toggle,
        toggle: function(a, b, c) {
            var d = "boolean" == typeof a;
            return J.isFunction(a) && J.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
                var b = d ? a: J(this).is(":hidden");
                J(this)[b ? "show": "hide"]()
            }) : this.animate(e("toggle", 3), a, b, c),
            this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function(a, b, c, e) {
            function f() {
                g.queue === !1 && J._mark(this);
                var b, c, e, f, h, i, j, k, l, m = J.extend({},
                g),
                n = 1 === this.nodeType,
                o = n && J(this).is(":hidden");
                m.animatedProperties = {};
                for (e in a) {
                    if (b = J.camelCase(e), e !== b && (a[b] = a[e], delete a[e]), c = a[b], J.isArray(c) ? (m.animatedProperties[b] = c[1], c = a[b] = c[0]) : m.animatedProperties[b] = m.specialEasing && m.specialEasing[b] || m.easing || "swing", "hide" === c && o || "show" === c && !o) return m.complete.call(this);
                    n && ("height" === b || "width" === b) && (m.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === J.css(this, "display") && "none" === J.css(this, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== d(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block"))
                }
                null != m.overflow && (this.style.overflow = "hidden");
                for (e in a) f = new J.fx(this, m, e),
                c = a[e],
                sb.test(c) ? (l = J._data(this, "toggle" + e) || ("toggle" === c ? o ? "show": "hide": 0), l ? (J._data(this, "toggle" + e, "show" === l ? "hide": "show"), f[l]()) : f[c]()) : (h = tb.exec(c), i = f.cur(), h ? (j = parseFloat(h[2]), k = h[3] || (J.cssNumber[e] ? "": "px"), "px" !== k && (J.style(this, e, (j || 1) + k), i = (j || 1) / f.cur() * i, J.style(this, e, i + k)), h[1] && (j = ("-=" === h[1] ? -1 : 1) * j + i), f.custom(i, j, k)) : f.custom(i, c, ""));
                return ! 0
            }
            var g = J.speed(b, c, e);
            return J.isEmptyObject(a) ? this.each(g.complete, [!1]) : (a = J.extend({},
            a), g.queue === !1 ? this.each(f) : this.queue(g.queue, f))
        },
        stop: function(a, c, d) {
            return "string" != typeof a && (d = c, c = a, a = b),
            c && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                function b(a, b, c) {
                    var e = b[c];
                    J.removeData(a, c, !0),
                    e.stop(d)
                }
                var c, e = !1,
                f = J.timers,
                g = J._data(this);
                if (d || J._unmark(!0, this), null == a) for (c in g) g[c].stop && c.indexOf(".run") === c.length - 4 && b(this, g, c);
                else g[c = a + ".run"] && g[c].stop && b(this, g, c);
                for (c = f.length; c--;) f[c].elem === this && (null == a || f[c].queue === a) && (d ? f[c](!0) : f[c].saveState(), e = !0, f.splice(c, 1)); (!d || !e) && J.dequeue(this, a)
            })
        }
    }),
    J.each({
        slideDown: e("show", 1),
        slideUp: e("hide", 1),
        slideToggle: e("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(a, b) {
        J.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    J.extend({
        speed: function(a, b, c) {
            var d = a && "object" == typeof a ? J.extend({},
            a) : {
                complete: c || !c && b || J.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !J.isFunction(b) && b
            };
            return d.duration = J.fx.off ? 0 : "number" == typeof d.duration ? d.duration: d.duration in J.fx.speeds ? J.fx.speeds[d.duration] : J.fx.speeds._default,
            (null == d.queue || d.queue === !0) && (d.queue = "fx"),
            d.old = d.complete,
            d.complete = function(a) {
                J.isFunction(d.old) && d.old.call(this),
                d.queue ? J.dequeue(this, d.queue) : a !== !1 && J._unmark(this)
            },
            d
        },
        easing: {
            linear: function(a, b, c, d) {
                return c + d * a
            },
            swing: function(a, b, c, d) {
                return ( - Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b,
            this.elem = a,
            this.prop = c,
            b.orig = b.orig || {}
        }
    }),
    J.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem, this.now, this),
            (J.fx.step[this.prop] || J.fx.step._default)(this)
        },
        cur: function() {
            if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
            var a, b = J.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b: 0 : a
        },
        custom: function(a, c, d) {
            function e(a) {
                return f.step(a)
            }
            var f = this,
            h = J.fx;
            this.startTime = qb || g(),
            this.end = c,
            this.now = this.start = a,
            this.pos = this.state = 0,
            this.unit = d || this.unit || (J.cssNumber[this.prop] ? "": "px"),
            e.queue = this.options.queue,
            e.elem = this.elem,
            e.saveState = function() {
                f.options.hide && J._data(f.elem, "fxshow" + f.prop) === b && J._data(f.elem, "fxshow" + f.prop, f.start)
            },
            e() && J.timers.push(e) && !pb && (pb = setInterval(h.tick, h.interval))
        },
        show: function() {
            var a = J._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || J.style(this.elem, this.prop),
            this.options.show = !0,
            a !== b ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()),
            J(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = J._data(this.elem, "fxshow" + this.prop) || J.style(this.elem, this.prop),
            this.options.hide = !0,
            this.custom(this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = qb || g(),
            f = !0,
            h = this.elem,
            i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end,
                this.pos = this.state = 1,
                this.update(),
                i.animatedProperties[this.prop] = !0;
                for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (f = !1);
                if (f) {
                    if (null != i.overflow && !J.support.shrinkWrapBlocks && J.each(["", "X", "Y"],
                    function(a, b) {
                        h.style["overflow" + b] = i.overflow[a]
                    }), i.hide && J(h).hide(), i.hide || i.show) for (b in i.animatedProperties) J.style(h, b, i.orig[b]),
                    J.removeData(h, "fxshow" + b, !0),
                    J.removeData(h, "toggle" + b, !0);
                    d = i.complete,
                    d && (i.complete = !1, d.call(h))
                }
                return ! 1
            }
            return i.duration == 1 / 0 ? this.now = e: (c = e - this.startTime, this.state = c / i.duration, this.pos = J.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos),
            this.update(),
            !0
        }
    },
    J.extend(J.fx, {
        tick: function() {
            for (var a, b = J.timers,
            c = 0; c < b.length; c++) a = b[c],
            !a() && b[c] === a && b.splice(c--, 1);
            b.length || J.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(pb),
            pb = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                J.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit: a.elem[a.prop] = a.now
            }
        }
    }),
    J.each(["width", "height"],
    function(a, b) {
        J.fx.step[b] = function(a) {
            J.style(a.elem, b, Math.max(0, a.now))
        }
    }),
    J.expr && J.expr.filters && (J.expr.filters.animated = function(a) {
        return J.grep(J.timers,
        function(b) {
            return a === b.elem
        }).length
    });
    var vb = /^t(?:able|d|h)$/i,
    wb = /^(?:body|html)$/i;
    "getBoundingClientRect" in G.documentElement ? J.fn.offset = function(a) {
        var b, d = this[0];
        if (a) return this.each(function(b) {
            J.offset.setOffset(this, a, b)
        });
        if (!d || !d.ownerDocument) return null;
        if (d === d.ownerDocument.body) return J.offset.bodyOffset(d);
        try {
            b = d.getBoundingClientRect()
        } catch(e) {}
        var f = d.ownerDocument,
        g = f.documentElement;
        if (!b || !J.contains(g, d)) return b ? {
            top: b.top,
            left: b.left
        }: {
            top: 0,
            left: 0
        };
        var h = f.body,
        i = c(f),
        j = g.clientTop || h.clientTop || 0,
        k = g.clientLeft || h.clientLeft || 0,
        l = i.pageYOffset || J.support.boxModel && g.scrollTop || h.scrollTop,
        m = i.pageXOffset || J.support.boxModel && g.scrollLeft || h.scrollLeft,
        n = b.top + l - j,
        o = b.left + m - k;
        return {
            top: n,
            left: o
        }
    }: J.fn.offset = function(a) {
        var b = this[0];
        if (a) return this.each(function(b) {
            J.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return J.offset.bodyOffset(b);
        for (var c, d = b.offsetParent,
        e = b,
        f = b.ownerDocument,
        g = f.documentElement,
        h = f.body,
        i = f.defaultView,
        j = i ? i.getComputedStyle(b, null) : b.currentStyle, k = b.offsetTop, l = b.offsetLeft; (b = b.parentNode) && b !== h && b !== g && (!J.support.fixedPosition || "fixed" !== j.position);) c = i ? i.getComputedStyle(b, null) : b.currentStyle,
        k -= b.scrollTop,
        l -= b.scrollLeft,
        b === d && (k += b.offsetTop, l += b.offsetLeft, J.support.doesNotAddBorder && (!J.support.doesAddBorderForTableAndCells || !vb.test(b.nodeName)) && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent),
        J.support.subtractsBorderForOverflowNotVisible && "visible" !== c.overflow && (k += parseFloat(c.borderTopWidth) || 0, l += parseFloat(c.borderLeftWidth) || 0),
        j = c;
        return ("relative" === j.position || "static" === j.position) && (k += h.offsetTop, l += h.offsetLeft),
        J.support.fixedPosition && "fixed" === j.position && (k += Math.max(g.scrollTop, h.scrollTop), l += Math.max(g.scrollLeft, h.scrollLeft)),
        {
            top: k,
            left: l
        }
    },
    J.offset = {
        bodyOffset: function(a) {
            var b = a.offsetTop,
            c = a.offsetLeft;
            return J.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(J.css(a, "marginTop")) || 0, c += parseFloat(J.css(a, "marginLeft")) || 0),
            {
                top: b,
                left: c
            }
        },
        setOffset: function(a, b, c) {
            var d = J.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = J(a),
            h = g.offset(),
            i = J.css(a, "top"),
            j = J.css(a, "left"),
            k = ("absolute" === d || "fixed" === d) && J.inArray("auto", [i, j]) > -1,
            l = {},
            m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0),
            J.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (l.top = b.top - h.top + e),
            null != b.left && (l.left = b.left - h.left + f),
            "using" in b ? b.using.call(a, l) : g.css(l)
        }
    },
    J.fn.extend({
        position: function() {
            if (!this[0]) return null;
            var a = this[0],
            b = this.offsetParent(),
            c = this.offset(),
            d = wb.test(b[0].nodeName) ? {
                top: 0,
                left: 0
            }: b.offset();
            return c.top -= parseFloat(J.css(a, "marginTop")) || 0,
            c.left -= parseFloat(J.css(a, "marginLeft")) || 0,
            d.top += parseFloat(J.css(b[0], "borderTopWidth")) || 0,
            d.left += parseFloat(J.css(b[0], "borderLeftWidth")) || 0,
            {
                top: c.top - d.top,
                left: c.left - d.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || G.body; a && !wb.test(a.nodeName) && "static" === J.css(a, "position");) a = a.offsetParent;
                return a
            })
        }
    }),
    J.each(["Left", "Top"],
    function(a, d) {
        var e = "scroll" + d;
        J.fn[e] = function(d) {
            var f, g;
            return d === b ? (f = this[0]) ? (g = c(f), g ? "pageXOffset" in g ? g[a ? "pageYOffset": "pageXOffset"] : J.support.boxModel && g.document.documentElement[e] || g.document.body[e] : f[e]) : null: this.each(function() {
                g = c(this),
                g ? g.scrollTo(a ? J(g).scrollLeft() : d, a ? d: J(g).scrollTop()) : this[e] = d
            })
        }
    }),
    J.each(["Height", "Width"],
    function(a, c) {
        var d = c.toLowerCase();
        J.fn["inner" + c] = function() {
            var a = this[0];
            return a ? a.style ? parseFloat(J.css(a, d, "padding")) : this[d]() : null
        },
        J.fn["outer" + c] = function(a) {
            var b = this[0];
            return b ? b.style ? parseFloat(J.css(b, d, a ? "margin": "border")) : this[d]() : null
        },
        J.fn[d] = function(a) {
            var e = this[0];
            if (!e) return null == a ? null: this;
            if (J.isFunction(a)) return this.each(function(b) {
                var c = J(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (J.isWindow(e)) {
                var f = e.document.documentElement["client" + c],
                g = e.document.body;
                return "CSS1Compat" === e.document.compatMode && f || g && g["client" + c] || f
            }
            if (9 === e.nodeType) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var h = J.css(e, d),
                i = parseFloat(h);
                return J.isNumeric(i) ? i: h
            }
            return this.css(d, "string" == typeof a ? a: a + "px")
        }
    }),
    a.jQuery = a.$ = J
} (window),
function(a, b, c, d) {
    function e(a) {
        return parseFloat(a)
    }
    function f() {
        var a = {
            transformProperty: "",
            MozTransform: "-moz-",
            WebkitTransform: "-webkit-",
            OTransform: "-o-",
            msTransform: "-ms-"
        };
        for (var b in a) if ("undefined" != typeof n[b]) return a[b];
        return null
    }
    function g() {
        if ("undefined" != typeof b.Modernizr) return Modernizr.csstransforms;
        var a = ["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"];
        for (var c in a) if (n[a[c]] !== d) return ! 0
    }
    function h(b, c) {
        var d = k.exec(a.trim(c));
        if (d[3] && "px" !== d[3]) {
            var e = "paddingBottom",
            f = a.style(b, e);
            return a.style(b, e, c),
            c = i(b, e),
            a.style(b, e, f),
            c
        }
        return parseFloat(c)
    }
    function i(b, c) {
        if (null != b[c] && (!b.style || null == b.style[c])) return b[c];
        var d = parseFloat(a.css(b, c));
        return d && d > -1e4 ? d: 0
    }
    var j = /progid:DXImageTransform\.Microsoft\.Matrix\(.*?\)/,
    k = /^([\+\-]=)?([\d+.\-]+)(.*)$/,
    l = /%/,
    m = c.createElement("modernizr"),
    n = m.style,
    o = f(),
    p = null !== o ? o + "transform": !1,
    q = null !== o ? o + "transform-origin": !1;
    a.support.csstransforms = g(),
    "-ms-" == o && (p = "msTransform", q = "msTransformOrigin"),
    a.extend({
        transform: function(b) {
            b.transform = this,
            this.$elem = a(b),
            this.applyingMatrix = !1,
            this.matrix = null,
            this.height = null,
            this.width = null,
            this.outerHeight = null,
            this.outerWidth = null,
            this.boxSizingValue = null,
            this.boxSizingProperty = null,
            this.attr = null,
            this.transformProperty = p,
            this.transformOriginProperty = q
        }
    }),
    a.extend(a.transform, {
        funcs: ["matrix", "origin", "reflect", "reflectX", "reflectXY", "reflectY", "rotate", "scale", "scaleX", "scaleY", "skew", "skewX", "skewY", "translate", "translateX", "translateY"]
    }),
    a.fn.transform = function(b, c) {
        return this.each(function() {
            var d = this.transform || new a.transform(this);
            b && d.exec(b, c)
        })
    },
    a.transform.prototype = {
        exec: function(b, c) {
            return c = a.extend(!0, {
                forceMatrix: !1,
                preserve: !1
            },
            c),
            this.attr = null,
            b = c.preserve ? a.extend(!0, this.getAttrs(!0, !0), b) : a.extend(!0, {},
            b),
            this.setAttrs(b),
            a.support.csstransforms && !c.forceMatrix ? this.execFuncs(b) : a.browser.msie || a.support.csstransforms && c.forceMatrix ? this.execMatrix(b) : !1
        },
        execFuncs: function(b) {
            var c = [];
            for (var d in b)"origin" == d ? this[d].apply(this, a.isArray(b[d]) ? b[d] : [b[d]]) : -1 !== a.inArray(d, a.transform.funcs) && c.push(this.createTransformFunc(d, b[d]));
            return this.$elem.css(p, c.join(" ")),
            !0
        },
        execMatrix: function(b) {
            function c(a, b) {
                return l.test(a) ? parseFloat(a) / 100 * k["safeOuter" + (b ? "Height": "Width")]() : h(i, a)
            }
            var d, f, g, i = this.$elem[0],
            k = this,
            m = /translate[X|Y]?/,
            n = [];
            for (var q in b) {
                switch (a.type(b[q])) {
                case "array":
                    g = b[q];
                    break;
                case "string":
                    g = a.map(b[q].split(","), a.trim);
                    break;
                default:
                    g = [b[q]]
                }
                a.matrix[q] ? (g = a.cssAngle[q] ? a.map(g, a.angle.toDegree) : a.cssNumber[q] ? a.map(g, e) : a.map(g, c), f = a.matrix[q].apply(this, g), m.test(q) ? n.push(f) : d = d ? d.x(f) : f) : "origin" == q && this[q].apply(this, g)
            }
            d = d || a.matrix.identity(),
            a.each(n,
            function(a, b) {
                d = d.x(b)
            });
            var r = parseFloat(d.e(1, 1).toFixed(6)),
            s = parseFloat(d.e(2, 1).toFixed(6)),
            t = parseFloat(d.e(1, 2).toFixed(6)),
            u = parseFloat(d.e(2, 2).toFixed(6)),
            v = 3 === d.rows ? parseFloat(d.e(1, 3).toFixed(6)) : 0,
            w = 3 === d.rows ? parseFloat(d.e(2, 3).toFixed(6)) : 0;
            if (a.support.csstransforms && "-moz-" === o) this.$elem.css(p, "matrix(" + r + ", " + s + ", " + t + ", " + u + ", " + v + "px, " + w + "px)");
            else if (a.support.csstransforms) this.$elem.css(p, "matrix(" + r + ", " + s + ", " + t + ", " + u + ", " + v + ", " + w + ")");
            else if (a.browser.msie) {
                var x = ", FilterType='nearest neighbor'",
                y = this.$elem[0].style,
                z = "progid:DXImageTransform.Microsoft.Matrix(M11=" + r + ", M12=" + t + ", M21=" + s + ", M22=" + u + ", sizingMethod='auto expand'" + x + ")",
                A = y.filter || a.curCSS(this.$elem[0], "filter") || "";
                y.filter = j.test(A) ? A.replace(j, z) : A ? A + " " + z: z,
                this.applyingMatrix = !0,
                this.matrix = d,
                this.fixPosition(d, v, w),
                this.applyingMatrix = !1,
                this.matrix = null
            }
            return ! 0
        },
        origin: function(b, c) {
            if (a.support.csstransforms) return "undefined" == typeof c ? this.$elem.css(q, b) : this.$elem.css(q, b + " " + c),
            !0;
            switch (b) {
            case "left":
                b = "0";
                break;
            case "right":
                b = "100%";
                break;
            case "center":
            case d:
                b = "50%"
            }
            switch (c) {
            case "top":
                c = "0";
                break;
            case "bottom":
                c = "100%";
                break;
            case "center":
            case d:
                c = "50%"
            }
            return this.setAttr("origin", [l.test(b) ? b: h(this.$elem[0], b) + "px", l.test(c) ? c: h(this.$elem[0], c) + "px"]),
            !0
        },
        createTransformFunc: function(b, c) {
            if ("reflect" === b.substr(0, 7)) {
                var d = c ? a.matrix[b]() : a.matrix.identity();
                return "matrix(" + d.e(1, 1) + ", " + d.e(2, 1) + ", " + d.e(1, 2) + ", " + d.e(2, 2) + ", 0, 0)"
            }
            return "matrix" == b && "-moz-" === o && (c[4] = c[4] ? c[4] + "px": 0, c[5] = c[5] ? c[5] + "px": 0),
            b + "(" + (a.isArray(c) ? c.join(", ") : c) + ")"
        },
        fixPosition: function(b, c, d, e, f) {
            var g = new a.matrix.calc(b, this.safeOuterHeight(), this.safeOuterWidth()),
            h = this.getAttr("origin"),
            i = g.originOffset(new a.matrix.V2(l.test(h[0]) ? parseFloat(h[0]) / 100 * g.outerWidth: parseFloat(h[0]), l.test(h[1]) ? parseFloat(h[1]) / 100 * g.outerHeight: parseFloat(h[1]))),
            j = g.sides(),
            k = this.$elem.css("position");
            "static" == k && (k = "relative");
            var m = {
                top: 0,
                left: 0
            },
            n = {
                position: k,
                top: i.top + d + j.top + m.top + "px",
                left: i.left + c + j.left + m.left + "px",
                zoom: 1
            };
            this.$elem.css(n)
        }
    }
} (jQuery, this, this.document),
function(a, b, c, d) {
    function e() {
        if (f) return f;
        var a = {
            boxSizing: "box-sizing",
            MozBoxSizing: "-moz-box-sizing",
            WebkitBoxSizing: "-webkit-box-sizing",
            OBoxSizing: "-o-box-sizing"
        },
        b = c.body;
        for (var d in a) if ("undefined" != typeof b.style[d]) return f = a[d];
        return null
    }
    a.extend(a.transform.prototype, {
        safeOuterHeight: function() {
            return this.safeOuterLength("height")
        },
        safeOuterWidth: function() {
            return this.safeOuterLength("width")
        },
        safeOuterLength: function(b) {
            var c = "outer" + ("width" == b ? "Width": "Height");
            if (!a.support.csstransforms && a.browser.msie) {
                if (b = "width" == b ? "width": "height", this.applyingMatrix && !this[c] && this.matrix) {
                    var d = new a.matrix.calc(this.matrix, 1, 1),
                    f = d.offset(),
                    g = this.$elem[c]() / f[b];
                    return this[c] = g,
                    g
                }
                if (this.applyingMatrix && this[c]) return this[c];
                var h = {
                    height: ["top", "bottom"],
                    width: ["left", "right"]
                },
                i = this.$elem[0],
                j = parseFloat(a.curCSS(i, b, !0)),
                k = this.boxSizingProperty,
                l = this.boxSizingValue;
                return this.boxSizingProperty || (k = this.boxSizingProperty = e() || "box-sizing", l = this.boxSizingValue = this.$elem.css(k) || "content-box"),
                this[c] && this[b] == j ? this[c] : (this[b] = j, !k || "padding-box" != l && "content-box" != l || (j += parseFloat(a.curCSS(i, "padding-" + h[b][0], !0)) || 0 + parseFloat(a.curCSS(i, "padding-" + h[b][1], !0)) || 0), k && "content-box" == l && (j += parseFloat(a.curCSS(i, "border-" + h[b][0] + "-width", !0)) || 0 + parseFloat(a.curCSS(i, "border-" + h[b][1] + "-width", !0)) || 0), this[c] = j, j)
            }
            return this.$elem[c]()
        }
    });
    var f = null
} (jQuery, this, this.document),
function(a, b, c, d) {
    var e = /([\w\-]*?)\((.*?)\)/g,
    f = "data-transform",
    g = /\s/,
    h = /,\s?/;
    a.extend(a.transform.prototype, {
        setAttrs: function(b) {
            var c, d = "";
            for (var e in b) c = b[e],
            a.isArray(c) && (c = c.join(", ")),
            d += " " + e + "(" + c + ")";
            this.attr = a.trim(d),
            this.$elem.attr(f, this.attr)
        },
        setAttr: function(b, c) {
            a.isArray(c) && (c = c.join(", "));
            var d = this.attr || this.$elem.attr(f);
            if (d && -1 != d.indexOf(b)) {
                var g, h = [];
                for (e.lastIndex = 0; g = e.exec(d);) b == g[1] ? h.push(b + "(" + c + ")") : h.push(g[0]);
                this.attr = h.join(" "),
                this.$elem.attr(f, this.attr)
            } else this.attr = a.trim(d + " " + b + "(" + c + ")"),
            this.$elem.attr(f, this.attr)
        },
        getAttrs: function() {
            var a = this.attr || this.$elem.attr(f);
            if (!a) return {};
            var b, c, d = {};
            for (e.lastIndex = 0; null !== (b = e.exec(a));) b && (c = b[2].split(h), d[b[1]] = 1 == c.length ? c[0] : c);
            return d
        },
        getAttr: function(b) {
            var c = this.getAttrs();
            return "undefined" != typeof c[b] ? c[b] : "origin" === b && a.support.csstransforms ? this.$elem.css(this.transformOriginProperty).split(g) : "origin" === b ? ["50%", "50%"] : a.cssDefault[b] || 0
        }
    }),
    "undefined" == typeof a.cssAngle && (a.cssAngle = {}),
    a.extend(a.cssAngle, {
        rotate: !0,
        skew: !0,
        skewX: !0,
        skewY: !0
    }),
    "undefined" == typeof a.cssDefault && (a.cssDefault = {}),
    a.extend(a.cssDefault, {
        scale: [1, 1],
        scaleX: 1,
        scaleY: 1,
        matrix: [1, 0, 0, 1, 0, 0],
        origin: ["50%", "50%"],
        reflect: [1, 0, 0, 1, 0, 0],
        reflectX: [1, 0, 0, 1, 0, 0],
        reflectXY: [1, 0, 0, 1, 0, 0],
        reflectY: [1, 0, 0, 1, 0, 0]
    }),
    "undefined" == typeof a.cssMultipleValues && (a.cssMultipleValues = {}),
    a.extend(a.cssMultipleValues, {
        matrix: 6,
        origin: {
            length: 2,
            duplicate: !0
        },
        reflect: 6,
        reflectX: 6,
        reflectXY: 6,
        reflectY: 6,
        scale: {
            length: 2,
            duplicate: !0
        },
        skew: 2,
        translate: 2
    }),
    a.extend(a.cssNumber, {
        matrix: !0,
        reflect: !0,
        reflectX: !0,
        reflectXY: !0,
        reflectY: !0,
        scale: !0,
        scaleX: !0,
        scaleY: !0
    }),
    a.each(a.transform.funcs,
    function(b, c) {
        a.cssHooks[c] = {
            set: function(b, d) {
                var e = b.transform || new a.transform(b),
                f = {};
                f[c] = d,
                e.exec(f, {
                    preserve: !0
                })
            },
            get: function(b, d) {
                var e = b.transform || new a.transform(b);
                return e.getAttr(c)
            }
        }
    }),
    a.each(["reflect", "reflectX", "reflectXY", "reflectY"],
    function(b, c) {
        a.cssHooks[c].get = function(b, d) {
            var e = b.transform || new a.transform(b);
            return e.getAttr("matrix") || a.cssDefault[c]
        }
    })
} (jQuery, this, this.document),
function(a, b, c, d) {
    function e(b, c) {
        null != b[c] && (!b.style || null == b.style[c]);
        var d = parseFloat(a.css(b, c));
        return d && d > -1e4 ? d: 0
    }
    var f = /^([+\-]=)?([\d+.\-]+)(.*)$/,
    g = a.fn.animate;
    a.fn.animate = function(b, c, d, e) {
        var f = a.speed(c, d, e),
        h = a.cssMultipleValues;
        return f.complete = f.old,
        a.isEmptyObject(b) || ("undefined" == typeof f.original && (f.original = {}), a.each(b,
        function(c, d) {
            if (h[c] || a.cssAngle[c] || !a.cssNumber[c] && -1 !== a.inArray(c, a.transform.funcs)) {
                var e = null;
                if (jQuery.isArray(b[c])) {
                    var g = 1,
                    i = d.length;
                    h[c] && (g = "undefined" == typeof h[c].length ? h[c] : h[c].length),
                    (i > g || g > i && 2 == i || 2 == i && 2 == g && isNaN(parseFloat(d[i - 1]))) && (e = d[i - 1], d.splice(i - 1, 1))
                }
                f.original[c] = d.toString(),
                b[c] = parseFloat(d)
            }
        })),
        g.apply(this, [arguments[0], f])
    };
    var h = "paddingBottom",
    i = a.fx.prototype.custom;
    a.fx.prototype.custom = function(b, c, d) {
        var g = a.cssMultipleValues[this.prop],
        j = a.cssAngle[this.prop];
        if (g || !a.cssNumber[this.prop] && -1 !== a.inArray(this.prop, a.transform.funcs)) {
            this.values = [],
            g || (g = 1);
            var k = this.options.original[this.prop],
            l = a(this.elem).css(this.prop),
            m = a.cssDefault[this.prop] || 0;
            a.isArray(l) || (l = [l]),
            a.isArray(k) || (k = "string" === a.type(k) ? k.split(",") : [k]);
            for (var n = g.length || g,
            o = 0; k.length < n;) k.push(g.duplicate ? k[0] : m[o] || 0),
            o++;
            var p, q, r, s = this,
            t = s.elem.transform;
            orig = a.style(s.elem, h),
            a.each(k,
            function(b, c) {
                p = l[b] ? l[b] : m[b] && !g.duplicate ? m[b] : g.duplicate ? l[0] : 0,
                j ? p = a.angle.toDegree(p) : a.cssNumber[s.prop] || (q = f.exec(a.trim(p)), q[3] && "px" !== q[3] && ("%" === q[3] ? p = parseFloat(q[2]) / 100 * t["safeOuter" + (b ? "Height": "Width")]() : (a.style(s.elem, h, p), p = e(s.elem, h), a.style(s.elem, h, orig)))),
                p = parseFloat(p),
                q = f.exec(a.trim(c)),
                q ? (r = parseFloat(q[2]), d = q[3] || "px", j ? (r = a.angle.toDegree(r + d), d = "deg") : a.cssNumber[s.prop] || "%" !== d ? a.cssNumber[s.prop] || "px" === d || (a.style(s.elem, h, (r || 1) + d), p = (r || 1) / e(s.elem, h) * p, a.style(s.elem, h, orig)) : p = p / t["safeOuter" + (b ? "Height": "Width")]() * 100, q[1] && (r = ("-=" === q[1] ? -1 : 1) * r + p)) : (r = c, d = ""),
                s.values.push({
                    start: p,
                    end: r,
                    unit: d
                })
            })
        }
        return i.apply(this, arguments)
    },
    a.fx.multipleValueStep = {
        _default: function(b) {
            a.each(b.values,
            function(a, c) {
                b.values[a].now = c.start + (c.end - c.start) * b.pos
            })
        }
    },
    a.each(["matrix", "reflect", "reflectX", "reflectXY", "reflectY"],
    function(b, c) {
        a.fx.multipleValueStep[c] = function(b) {
            var c = b.decomposed,
            d = a.matrix;
            m = d.identity(),
            c.now = {},
            a.each(c.start,
            function(a) {
                return c.now[a] = parseFloat(c.start[a]) + (parseFloat(c.end[a]) - parseFloat(c.start[a])) * b.pos,
                ("scaleX" === a || "scaleY" === a) && 1 === c.now[a] || "scaleX" !== a && "scaleY" !== a && 0 === c.now[a] ? !0 : void(m = m.x(d[a](c.now[a])))
            });
            var e;
            a.each(b.values,
            function(a) {
                switch (a) {
                case 0:
                    e = parseFloat(m.e(1, 1).toFixed(6));
                    break;
                case 1:
                    e = parseFloat(m.e(2, 1).toFixed(6));
                    break;
                case 2:
                    e = parseFloat(m.e(1, 2).toFixed(6));
                    break;
                case 3:
                    e = parseFloat(m.e(2, 2).toFixed(6));
                    break;
                case 4:
                    e = parseFloat(m.e(1, 3).toFixed(6));
                    break;
                case 5:
                    e = parseFloat(m.e(2, 3).toFixed(6))
                }
                b.values[a].now = e
            })
        }
    }),
    a.each(a.transform.funcs,
    function(b, c) {
        a.fx.step[c] = function(b) {
            var d = b.elem.transform || new a.transform(b.elem),
            e = {};
            a.cssMultipleValues[c] || !a.cssNumber[c] && -1 !== a.inArray(c, a.transform.funcs) ? ((a.fx.multipleValueStep[b.prop] || a.fx.multipleValueStep._default)(b), e[b.prop] = [], a.each(b.values,
            function(c, d) {
                e[b.prop].push(d.now + (a.cssNumber[b.prop] ? "": d.unit))
            })) : e[b.prop] = b.now + (a.cssNumber[b.prop] ? "": b.unit),
            d.exec(e, {
                preserve: !0
            })
        }
    }),
    a.each(["matrix", "reflect", "reflectX", "reflectXY", "reflectY"],
    function(b, c) {
        a.fx.step[c] = function(b) {
            var d = b.elem.transform || new a.transform(b.elem),
            e = {};
            if (!b.initialized) {
                if (b.initialized = !0, "matrix" !== c) {
                    var f, g = a.matrix[c]().elements;
                    a.each(b.values,
                    function(a) {
                        switch (a) {
                        case 0:
                            f = g[0];
                            break;
                        case 1:
                            f = g[2];
                            break;
                        case 2:
                            f = g[1];
                            break;
                        case 3:
                            f = g[3];
                            break;
                        default:
                            f = 0
                        }
                        b.values[a].end = f
                    })
                }
                b.decomposed = {};
                var h = b.values;
                b.decomposed.start = a.matrix.matrix(h[0].start, h[1].start, h[2].start, h[3].start, h[4].start, h[5].start).decompose(),
                b.decomposed.end = a.matrix.matrix(h[0].end, h[1].end, h[2].end, h[3].end, h[4].end, h[5].end).decompose()
            } (a.fx.multipleValueStep[b.prop] || a.fx.multipleValueStep._default)(b),
            e.matrix = [],
            a.each(b.values,
            function(a, b) {
                e.matrix.push(b.now)
            }),
            d.exec(e, {
                preserve: !0
            })
        }
    })
} (jQuery, this, this.document),
function(a, b, c, d) {
    var e = 180 / Math.PI,
    f = 200 / Math.PI,
    g = Math.PI / 180,
    h = 2 / 1.8,
    i = .9,
    j = Math.PI / 200,
    k = /^([+\-]=)?([\d+.\-]+)(.*)$/;
    a.extend({
        angle: {
            runit: /(deg|g?rad)/,
            radianToDegree: function(a) {
                return a * e
            },
            radianToGrad: function(a) {
                return a * f
            },
            degreeToRadian: function(a) {
                return a * g
            },
            degreeToGrad: function(a) {
                return a * h
            },
            gradToDegree: function(a) {
                return a * i
            },
            gradToRadian: function(a) {
                return a * j
            },
            toDegree: function(b) {
                var c = k.exec(b);
                if (c) {
                    switch (b = parseFloat(c[2]), c[3] || "deg") {
                    case "grad":
                        b = a.angle.gradToDegree(b);
                        break;
                    case "rad":
                        b = a.angle.radianToDegree(b)
                    }
                    return b
                }
                return 0
            }
        }
    })
} (jQuery, this, this.document),
function(a, b, c, d) {
    "undefined" == typeof a.matrix && a.extend({
        matrix: {}
    });
    var e = a.matrix;
    a.extend(e, {
        V2: function(b, c) {
            a.isArray(arguments[0]) ? this.elements = arguments[0].slice(0, 2) : this.elements = [b, c],
            this.length = 2
        },
        V3: function(b, c, d) {
            a.isArray(arguments[0]) ? this.elements = arguments[0].slice(0, 3) : this.elements = [b, c, d],
            this.length = 3
        },
        M2x2: function(b, c, d, e) {
            a.isArray(arguments[0]) ? this.elements = arguments[0].slice(0, 4) : this.elements = Array.prototype.slice.call(arguments).slice(0, 4),
            this.rows = 2,
            this.cols = 2
        },
        M3x3: function(b, c, d, e, f, g, h, i, j) {
            a.isArray(arguments[0]) ? this.elements = arguments[0].slice(0, 9) : this.elements = Array.prototype.slice.call(arguments).slice(0, 9),
            this.rows = 3,
            this.cols = 3
        }
    });
    var f = {
        e: function(a, b) {
            var c = this.rows,
            d = this.cols;
            return a > c || b > c || 1 > a || 1 > b ? 0 : this.elements[(a - 1) * d + b - 1]
        },
        decompose: function() {
            var b = this.e(1, 1),
            c = this.e(2, 1),
            d = this.e(1, 2),
            e = this.e(2, 2),
            f = this.e(1, 3),
            g = this.e(2, 3);
            if (Math.abs(b * e - c * d) < .01) return {
                rotate: "0deg",
                skewX: "0deg",
                scaleX: 1,
                scaleY: 1,
                translateX: "0px",
                translateY: "0px"
            };
            var h = f,
            i = g,
            j = Math.sqrt(b * b + c * c);
            b /= j,
            c /= j;
            var k = b * d + c * e;
            d -= b * k,
            e -= c * k;
            var l = Math.sqrt(d * d + e * e);
            d /= l,
            e /= l,
            k /= l,
            0 > b * e - c * d && (b = -b, c = -c, j = -j);
            var m = a.angle.radianToDegree,
            n = m(Math.atan2(c, b));
            return k = m(Math.atan(k)),
            {
                rotate: n + "deg",
                skewX: k + "deg",
                scaleX: j,
                scaleY: l,
                translateX: h + "px",
                translateY: i + "px"
            }
        }
    };
    a.extend(e.M2x2.prototype, f, {
        toM3x3: function() {
            var a = this.elements;
            return new e.M3x3(a[0], a[1], 0, a[2], a[3], 0, 0, 0, 1)
        },
        x: function(a) {
            var b = "undefined" == typeof a.rows;
            if (!b && 3 == a.rows) return this.toM3x3().x(a);
            var c = this.elements,
            d = a.elements;
            return b && 2 == d.length ? new e.V2(c[0] * d[0] + c[1] * d[1], c[2] * d[0] + c[3] * d[1]) : d.length == c.length ? new e.M2x2(c[0] * d[0] + c[1] * d[2], c[0] * d[1] + c[1] * d[3], c[2] * d[0] + c[3] * d[2], c[2] * d[1] + c[3] * d[3]) : !1
        },
        inverse: function() {
            var a = 1 / this.determinant(),
            b = this.elements;
            return new e.M2x2(a * b[3], a * -b[1], a * -b[2], a * b[0])
        },
        determinant: function() {
            var a = this.elements;
            return a[0] * a[3] - a[1] * a[2]
        }
    }),
    a.extend(e.M3x3.prototype, f, {
        x: function(a) {
            var b = "undefined" == typeof a.rows; ! b && a.rows < 3 && (a = a.toM3x3());
            var c = this.elements,
            d = a.elements;
            return b && 3 == d.length ? new e.V3(c[0] * d[0] + c[1] * d[1] + c[2] * d[2], c[3] * d[0] + c[4] * d[1] + c[5] * d[2], c[6] * d[0] + c[7] * d[1] + c[8] * d[2]) : d.length == c.length ? new e.M3x3(c[0] * d[0] + c[1] * d[3] + c[2] * d[6], c[0] * d[1] + c[1] * d[4] + c[2] * d[7], c[0] * d[2] + c[1] * d[5] + c[2] * d[8], c[3] * d[0] + c[4] * d[3] + c[5] * d[6], c[3] * d[1] + c[4] * d[4] + c[5] * d[7], c[3] * d[2] + c[4] * d[5] + c[5] * d[8], c[6] * d[0] + c[7] * d[3] + c[8] * d[6], c[6] * d[1] + c[7] * d[4] + c[8] * d[7], c[6] * d[2] + c[7] * d[5] + c[8] * d[8]) : !1
        },
        inverse: function() {
            var a = 1 / this.determinant(),
            b = this.elements;
            return new e.M3x3(a * (b[8] * b[4] - b[7] * b[5]), a * -(b[8] * b[1] - b[7] * b[2]), a * (b[5] * b[1] - b[4] * b[2]), a * -(b[8] * b[3] - b[6] * b[5]), a * (b[8] * b[0] - b[6] * b[2]), a * -(b[5] * b[0] - b[3] * b[2]), a * (b[7] * b[3] - b[6] * b[4]), a * -(b[7] * b[0] - b[6] * b[1]), a * (b[4] * b[0] - b[3] * b[1]))
        },
        determinant: function() {
            var a = this.elements;
            return a[0] * (a[8] * a[4] - a[7] * a[5]) - a[3] * (a[8] * a[1] - a[7] * a[2]) + a[6] * (a[5] * a[1] - a[4] * a[2])
        }
    });
    var g = {
        e: function(a) {
            return this.elements[a - 1]
        }
    };
    a.extend(e.V2.prototype, g),
    a.extend(e.V3.prototype, g)
} (jQuery, this, this.document),
function(a, b, c, d) {
    "undefined" == typeof a.matrix && a.extend({
        matrix: {}
    }),
    a.extend(a.matrix, {
        calc: function(a, b, c) {
            this.matrix = a,
            this.outerHeight = b,
            this.outerWidth = c
        }
    }),
    a.matrix.calc.prototype = {
        coord: function(b, c, d) {
            d = "undefined" != typeof d ? d: 0;
            var e, f = this.matrix;
            switch (f.rows) {
            case 2:
                e = f.x(new a.matrix.V2(b, c));
                break;
            case 3:
                e = f.x(new a.matrix.V3(b, c, d))
            }
            return e
        },
        corners: function(a, b) {
            var c, d = !("undefined" != typeof a || "undefined" != typeof b);
            return this.c && d ? c = this.c: (b = b || this.outerHeight, a = a || this.outerWidth, c = {
                tl: this.coord(0, 0),
                bl: this.coord(0, b),
                tr: this.coord(a, 0),
                br: this.coord(a, b)
            }),
            d && (this.c = c),
            c
        },
        sides: function(a) {
            var b = a || this.corners();
            return {
                top: Math.min(b.tl.e(2), b.tr.e(2), b.br.e(2), b.bl.e(2)),
                bottom: Math.max(b.tl.e(2), b.tr.e(2), b.br.e(2), b.bl.e(2)),
                left: Math.min(b.tl.e(1), b.tr.e(1), b.br.e(1), b.bl.e(1)),
                right: Math.max(b.tl.e(1), b.tr.e(1), b.br.e(1), b.bl.e(1))
            }
        },
        offset: function(a) {
            var b = this.sides(a);
            return {
                height: Math.abs(b.bottom - b.top),
                width: Math.abs(b.right - b.left)
            }
        },
        area: function(a) {
            var b = a || this.corners(),
            c = {
                x: b.tr.e(1) - b.tl.e(1) + b.br.e(1) - b.bl.e(1),
                y: b.tr.e(2) - b.tl.e(2) + b.br.e(2) - b.bl.e(2)
            },
            d = {
                x: b.bl.e(1) - b.tl.e(1) + b.br.e(1) - b.tr.e(1),
                y: b.bl.e(2) - b.tl.e(2) + b.br.e(2) - b.tr.e(2)
            };
            return.25 * Math.abs(c.e(1) * d.e(2) - c.e(2) * d.e(1))
        },
        nonAffinity: function() {
            var a = this.sides(),
            b = a.top - a.bottom,
            c = a.left - a.right;
            return parseFloat(parseFloat(Math.abs((Math.pow(b, 2) + Math.pow(c, 2)) / (a.top * a.bottom + a.left * a.right))).toFixed(8))
        },
        originOffset: function(b, c) {
            b = b ? b: new a.matrix.V2(.5 * this.outerWidth, .5 * this.outerHeight),
            c = c ? c: new a.matrix.V2(0, 0);
            var d = this.coord(b.e(1), b.e(2)),
            e = this.coord(c.e(1), c.e(2));
            return {
                top: e.e(2) - c.e(2) - (d.e(2) - b.e(2)),
                left: e.e(1) - c.e(1) - (d.e(1) - b.e(1))
            }
        }
    }
} (jQuery, this, this.document),
function(a, b, c, d) {
    "undefined" == typeof a.matrix && a.extend({
        matrix: {}
    });
    var e = a.matrix,
    f = e.M2x2,
    g = e.M3x3;
    a.extend(e, {
        identity: function(a) {
            a = a || 2;
            for (var b = a * a,
            c = new Array(b), d = a + 1, f = 0; b > f; f++) c[f] = f % d === 0 ? 1 : 0;
            return new e["M" + a + "x" + a](c)
        },
        matrix: function() {
            var a = Array.prototype.slice.call(arguments);
            switch (arguments.length) {
            case 4:
                return new f(a[0], a[2], a[1], a[3]);
            case 6:
                return new g(a[0], a[2], a[4], a[1], a[3], a[5], 0, 0, 1)
            }
        },
        reflect: function() {
            return new f( - 1, 0, 0, -1)
        },
        reflectX: function() {
            return new f(1, 0, 0, -1)
        },
        reflectXY: function() {
            return new f(0, 1, 1, 0)
        },
        reflectY: function() {
            return new f( - 1, 0, 0, 1)
        },
        rotate: function(b) {
            var c = a.angle.degreeToRadian(b),
            d = Math.cos(c),
            e = Math.sin(c),
            g = d,
            h = e,
            i = -e,
            j = d;
            return new f(g, i, h, j)
        },
        scale: function(a, b) {
            return a = a || 0 === a ? a: 1,
            b = b || 0 === b ? b: a,
            new f(a, 0, 0, b)
        },
        scaleX: function(a) {
            return e.scale(a, 1)
        },
        scaleY: function(a) {
            return e.scale(1, a)
        },
        skew: function(b, c) {
            b = b || 0,
            c = c || 0;
            var d = a.angle.degreeToRadian(b),
            e = a.angle.degreeToRadian(c),
            g = Math.tan(d),
            h = Math.tan(e);
            return new f(1, g, h, 1)
        },
        skewX: function(a) {
            return e.skew(a)
        },
        skewY: function(a) {
            return e.skew(0, a)
        },
        translate: function(a, b) {
            return a = a || 0,
            b = b || 0,
            new g(1, 0, a, 0, 1, b, 0, 0, 1)
        },
        translateX: function(a) {
            return e.translate(a)
        },
        translateY: function(a) {
            return e.translate(0, a)
        }
    })
} (jQuery, this, this.document),
void
function(a) {
    var b = a.document;
    if (1 !== a.afwealth_tracker) {
        a.afwealth_tracker = 1;
        var c = function(a, b) {
            function c(a) {
                var b = [];
                for (var c in a) a.hasOwnProperty(c) && b.push(c + "=" + a[c]);
                return b.join("&")
            }
            var d = "http://kcart.alipay.com/web/bi.do?BIProfile=merge&d=",
            e = {
                queue: [],
                imgIndex: 0,
                init: function() {
                    var c = this;
                    "loading" === b.readyState && a.addEventListener("load",
                    function() {
                        c.sendList()
                    },
                    !1)
                },
                add: function(a) {
                    var c = toString,
                    d = {},
                    e = c.call(a);
                    "[object String]" === e ? d = {
                        seed: a
                    }: "[object Object]" === e && (d = a),
                    "loading" !== b.readyState ? this.send(d) : this.queue.push(d)
                },
                sendList: function() {
                    for (var a = this.queue; a.length;) this.send(a.shift())
                },
                send: function(b) {
                    var e = {};
                    e.page_type = "clk",
                    e.pg = location.href.split(/\?|#|;jsessionid=/)[0] + "?" + c(b || {}),
                    e.r = Date.now();
                    var f = new Image,
                    g = "hl_log_name" + this.imgIndex++;
                    a[g] = f,
                    f.onload = f.onerror = function() {
                        a[g] = null
                    },
                    f.src = d + encodeURIComponent(JSON.stringify([e])),
                    f = null
                }
            };
            return e.init(),
            function(a) {
                e.add(a)
            }
        } (a, b);
        window.afwTracker = c
    }
} (window),
$(document).ready(function() {
    function a() {
        this.indexNextBtn = $("#J_IndexNextBtn"),
        this.indexPage = $("#J_IndexPage"),
        this.indexBg = $("#J_IndexBg"),
        this.pageCtn = $("#J_PageCtn"),
        this.pageWrap = $("#J_PageWrap"),
        this.bannerBtns = $("#J_IndexBannerBtns"),
        this.bannerCtn = $("#J_IndexBannerCtn"),
        this.rightQrcode = $("#J_RightQrcode"),
        this.navBtns = $("#J_NavBtns"),
        this.footer = $("#J_Footer"),
        this.historyBtn = $("#J_HistoryBtn"),
        this.historyCtn = $("#J_HistoryCtn"),
        this.firstPage = $("#J_FirstPage"),
        this.page1Car = $("#J_Pic1Car"),
        this.page1Speed = 8e3,
        this.page2Square = $("#J_Page2Square"),
        this.page2Circle1 = $("#J_Page2Circle1"),
        this.page2Circle2 = $("#J_Page2Circle2"),
        this.page3Heart1 = $("#J_Page3Heart1"),
        this.page3Heart2 = $("#J_Page3Heart2"),
        this.page3Heart3 = $("#J_Page3Heart3"),
        this.pic1Wrap = $("#J_Pic1Wrap"),
        this.pic2Wrap = $("#J_Pic2Wrap"),
        this.pic3Wrap = $("#J_Pic3Wrap"),
        this.lastPage = $("#J_LastPage"),
        this.indexCtn = $("#J_IndexCtn"),
        this.iosDownload = $("#J_IosDownload"),
        this.androidDownload = $("#J_AndroidDownload"),
        this.period = 1e3,
        this.wheelDelta = 100,
        this.beginTime = (new Date).getTime(),
        this.animate1 = 0,
        this.animate2 = 0,
        this.animate3 = 0,
        this.windowHeight = $(window).height() > 800 ? 800 : $(window).height()
    }
    function b(a) {
        this.btns = a.btns,
        this.btn = a.btn,
        this.ctn = a.ctn,
        this.offset = a.offset,
        this.currentIndex = 1,
        this.animateState = !1,
        this.speed = a.speed || 300,
        this.autoPlay = a.autoPlay || !1,
        this.timer = 0,
        this.direction = a.direction || "left",
        this.directionOffset = a.directionOffset || "",
        this.btnActiveClass = a.btnActiveClass || "current",
        this.pageActiveClass = a.pageActiveClass || "current",
        this.total = a.total || this.btns.children().length,
        this.beforeRenderPage = a.beforeRenderPage || null,
        this.afterRenderPage = a.afterRenderPage || null
    }
    a.prototype = {
        init: function() {
            this._fixBug(),
            this._resetPosition(),
            this._bind(),
            this._initIndexBanner(),
            this._initNav()
        },
        _bind: function() {
            this._bindDownloadLog(),
            this._bindIndexNextBtn(),
            this._bindMouseNav(),
            this._bindResizePage(),
            this._bindHistoryBtn(),
            this._bindRightQrcodeBtn()
        },
        _bindDownloadLog: function() {
            this.iosDownload.on("click",
            function() {
                afwTracker({
                    caseid: "MY-1201-1186",
                    seed: "clicked",
                    appid: "MY1000011",
                    logid: "pc_download_ios"
                })
            }),
            this.androidDownload.on("click",
            function() {
                afwTracker({
                    caseid: "MY-1201-1187",
                    seed: "clicked",
                    appid: "MY1000011",
                    logid: "pc_download_android"
                })
            })
        },
        _fixBug: function() {
            var a = /iPad/,
            b = this;
            window.navigator.appVersion.match(a) && (this.navBtns.width(30), this.navBtns.children().each(function(a, b) {
                $(b).addClass("ipad-btn").removeClass("btn")
            }), this.historyBtn.on("touchstart",
            function() {
                "none" == b.historyCtn.css("display") ? b.historyCtn.show() : b.historyCtn.hide()
            }), $(document).on("touchstart",
            function(a) {
                for (var c = a.srcElement,
                d = !1; c;) {
                    if (c == b.historyCtn[0] || c == b.historyBtn[0]) {
                        d = !0;
                        break
                    }
                    c = c.parentNode
                }
                d || "none" == b.historyCtn.css("display") || b.historyCtn.hide()
            }))
        },
        _resetPosition: function() {
            this._setFirstPageWidth(),
            this.pageWrap.css({
                height: this.windowHeight
            })
        },
        _initPage1Animate: function() {
            var a = this,
            b = 1,
            c = 0,
            d = a.page1Speed / 16,
            e = 411 / d;
            this._setCarPosition(),
            this.animate1 = setInterval(function() {
                1 == b ? (c += e, c >= 411 && (b = 0)) : (c -= e, 0 >= c && (b = 1)),
                a.page1Car.css({
                    translateX: c + "px"
                })
            },
            16)
        },
        _initPage2Animate: function() {
            this.page2Square.css({
                rotate: "10deg"
            });
            var a = 1,
            b = this,
            c = 3e3,
            d = -10,
            e = 0,
            f = 0,
            g = Math.floor(c / 16),
            h = 20 / g,
            i = 80 / g,
            j = 54 / g;
            if ($.browser.msie && 8 == $.browser.version.substr(0, 1) && (i = 75 / g, this.pic3Wrap.css({
                bottom: "74px"
            }), this.pic1Wrap.css({
                bottom: "7px"
            })), $.browser.msie && 7 == $.browser.version.substr(0, 1)) {
                i = 78 / g,
                this.pic1Wrap.css({
                    bottom: "10px"
                });
                var k = $(window).height() - 55;
                this.pic2Wrap.css({
                    top: k + "px"
                })
            }
            this.animate2 = setInterval(function() {
                1 == a ? (d += h, e -= i, f += j, d >= 10 && (a = 0)) : (d -= h, e += i, f -= j, -10 >= d && (a = 1)),
                b.page2Square.css({
                    rotate: d + "deg"
                }),
                b.page2Circle1.css({
                    translateY: e + "px"
                }),
                b.page2Circle2.css({
                    translateY: f + "px"
                })
            },
            16)
        },
        _initPage3Animate: function() {
            function a(a) {
                a.frame = Math.floor(a.time / 16),
                a.beginFrame = Math.floor(a.begin / 16),
                a.action1.frame = Math.floor(a.action1.time / 16),
                a.action2.frame = Math.floor(a.action2.time / 16),
                a.current = {
                    scaleX: a.init.scaleX,
                    scaleY: a.init.scaleY,
                    rotate: a.init.rotate,
                    translateX: a.init.translateX,
                    translateY: a.init.translateY,
                    opacity: a.init.opacity
                },
                a.action1.scaleXRate = (a.action1.scaleX - a.init.scaleX) / a.action1.frame,
                a.action1.scaleYRate = (a.action1.scaleY - a.init.scaleY) / a.action1.frame,
                a.action1.rotateRate = (a.action1.rotate - a.init.rotate) / a.action1.frame,
                a.action1.translateXRate = (a.action1.translateX - a.init.translateX) / a.action1.frame,
                a.action1.translateYRate = (a.action1.translateY - a.init.translateY) / a.action1.frame,
                a.action1.opacityRate = (a.action1.opacity - a.init.opacity) / a.action1.frame,
                a.action2.scaleXRate = (a.end.scaleX - a.action1.scaleX) / a.action2.frame,
                a.action2.scaleYRate = (a.end.scaleY - a.action1.scaleY) / a.action2.frame,
                a.action2.rotateRate = (a.end.rotate - a.action1.rotate) / a.action2.frame,
                a.action2.translateXRate = (a.end.translateX - a.action1.translateX) / a.action2.frame,
                a.action2.translateYRate = (a.end.translateY - a.action1.translateY) / a.action2.frame,
                a.action2.opacityRate = (a.end.opacity - a.action1.opacity) / a.action2.frame
            }
            var b = this,
            c = 1,
            d = 5600,
            e = Math.floor(d / 16),
            f = {
                begin: 0,
                frame: 0,
                time: 4e3,
                action1: {
                    time: 2e3,
                    frame: 0,
                    scaleX: .7,
                    scaleY: .7,
                    rotate: -100,
                    translateX: 0,
                    translateY: -60,
                    opacity: 1
                },
                action2: {
                    time: 2e3,
                    frame: 0
                },
                init: {
                    rotate: -70,
                    scaleX: .1,
                    scaleY: .1,
                    translateX: 0,
                    translateY: 0,
                    opacity: 0
                },
                end: {
                    rotate: -45,
                    scaleX: 1,
                    scaleY: 1,
                    translateX: 0,
                    translateY: -90,
                    opacity: 0
                },
                current: {}
            },
            g = {
                begin: 1600,
                frame: 0,
                time: 3e3,
                action1: {
                    time: 1500,
                    frame: 0,
                    scaleX: .7,
                    scaleY: .7,
                    rotate: -10,
                    translateX: 0,
                    translateY: -60,
                    opacity: 1
                },
                action2: {
                    time: 1500,
                    frame: 0
                },
                init: {
                    rotate: -40,
                    scaleX: .1,
                    scaleY: .1,
                    translateX: 0,
                    translateY: 0,
                    opacity: 0
                },
                end: {
                    rotate: -45,
                    scaleX: 1,
                    scaleY: 1,
                    translateX: 0,
                    translateY: -80,
                    opacity: 0
                },
                current: {}
            },
            h = {
                begin: 2600,
                frame: 0,
                time: 3e3,
                action1: {
                    time: 1300,
                    frame: 0,
                    scaleX: .7,
                    scaleY: .7,
                    rotate: 20,
                    translateX: 20,
                    translateY: -60,
                    opacity: 1
                },
                action2: {
                    time: 1300,
                    frame: 0
                },
                init: {
                    rotate: 45,
                    scaleX: .1,
                    scaleY: .1,
                    translateX: 0,
                    translateY: 0,
                    opacity: 0
                },
                end: {
                    rotate: -25,
                    scaleX: 1,
                    scaleY: 1,
                    translateX: 20,
                    translateY: -110,
                    opacity: 0
                },
                current: {}
            };
            a(f),
            a(g),
            a(h),
            this.animate3 = setInterval(function() {
                function a(a, b) {
                    c < a.frame + a.beginFrame && c >= a.beginFrame && (c < a.action1.frame + a.beginFrame && c > a.beginFrame ? (a.current.scaleX += a.action1.scaleXRate, a.current.scaleY += a.action1.scaleYRate, a.current.rotate += a.action1.rotateRate, a.current.translateX += a.action1.translateXRate, a.current.translateY += a.action1.translateYRate, a.current.opacity += a.action1.opacityRate) : c >= a.action1.frame + a.beginFrame && c <= a.action2.frame + a.action1.frame + a.beginFrame && (a.current.scaleX += a.action2.scaleXRate, a.current.scaleY += a.action2.scaleYRate, a.current.rotate += a.action2.rotateRate, a.current.translateX += a.action2.translateXRate, a.current.translateY += a.action2.translateYRate, a.current.opacity += a.action2.opacityRate)),
                    b.css({
                        scaleX: a.current.scaleX,
                        scaleY: a.current.scaleY,
                        rotate: a.current.rotate + "deg",
                        translateX: a.current.translateX + "px",
                        translateY: a.current.translateY + "px",
                        opacity: a.current.opacity
                    })
                }
                c >= e && clearInterval(b.animate3),
                c++,
                a(f, b.page3Heart1),
                a(g, b.page3Heart2),
                a(h, b.page3Heart3)
            },
            16)
        },
        _initIndexBanner: function() {
            var a = new b({
                btns: this.bannerBtns,
                btn: "span",
                ctn: this.bannerCtn,
                offset: 700,
                speed: 300,
                autoPlay: 3e3,
                direction: "left",
                directionOffset: "-",
                pageActiveClass: ""
            });
            a.init(),
            this.bannerObj = a
        },
        _initNav: function() {
            var a = this,
            c = new b({
                btns: this.navBtns,
                btn: "span",
                ctn: this.pageWrap,
                offset: this.windowHeight,
                speed: 300,
                direction: "bottom",
                directionOffset: "",
                beforeRenderPage: function(b) {
                    a._clearAnimation(),
                    a._setBgColor(b),
                    a._renderFooter(b),
                    a._renderQrcode(b),
                    a._renderRightNav(b),
                    a._setPageHeight(b),
                    a._renderAnimation(b)
                },
                afterRenderPage: function(b) {
                    a._resetLastPageHeight(b)
                }
            });
            c.init(),
            this.pageObj = c
        },
        _setBgColor: function(a) {
            2 == a.currentIndex ? this.pageWrap.css({
                backgroundColor: "#fff"
            }) : this.pageWrap.css({
                backgroundColor: "#1ba0ea"
            })
        },
        _clearAnimation: function() {
            this.animate1 && clearInterval(this.animate1),
            this.animate2 && clearInterval(this.animate2),
            this.animate3 && clearInterval(this.animate3)
        },
        _resetLastPageHeight: function(a) {
            if (this.pageCtn.css({
                "overflow-x": "hidden",
                "overflow-y": "hidden"
            }), a.currentIndex == a.total) {
                var b = 500 + this.footer.outerHeight();
                if ($(window).height() < b) {
                    var c = b - $(window).height();
                    this.footer.css({
                        bottom: "-" + c + "px"
                    }),
                    this.lastPage.height(b),
                    this.pageCtn.css({
                        "overflow-y": "scroll",
                        "overflow-x": "hidden"
                    })
                } else this.footer.css({
                    bottom: 0
                })
            }
        },
        _renderFooter: function(a) {
            if (a.currentIndex == a.total) {
                var b = 500 + this.footer.outerHeight();
                if ($(window).height() < b) {
                    this.footer.css({
                        bottom: "-" + b + "px"
                    });
                    var c = b - $(window).height();
                    this.footer.animate({
                        bottom: "-" + c + "px"
                    },
                    300),
                    this.footer.show()
                } else this.footer.css({
                    bottom: "-" + $(window).height() + "px"
                }),
                this.footer.animate({
                    bottom: 0
                },
                300),
                this.footer.show()
            } else this.footer.hide()
        },
        _renderQrcode: function(a) {
            1 == a.currentIndex ? this.rightQrcode.hide() : this.rightQrcode.show()
        },
        _renderRightNav: function(a) {
            1 == a.currentIndex ? this.navBtns.hide() : this.navBtns.show()
        },
        _setPageHeight: function(a) {
            var b = this;
            $(".page").each(function(c) {
                if (c != a.currentIndex - 1 || $(this).hasClass("first")) $(this).css({
                    height: "100%"
                });
                else {
                    $(this).css({
                        height: $(window).height()
                    });
                    var d;
                    c != a.total - 1 ? d = ($(window).height() - 500) / 2 : (d = ($(window).height() - 656) / 2 + b.footer.outerHeight(), d = d > b.footer.outerHeight() ? d: b.footer.outerHeight()),
                    $(this).css({
                        bottom: d + "px"
                    })
                }
            });
            var c = $(window).height() > 800 ? 800 : $(window).height(),
            d = c * (a.currentIndex - 1);
            this.pageWrap.css({
                height: c,
                bottom: d + "px"
            }),
            this.pageObj.offset = c
        },
        _renderAnimation: function(a) {
            switch (a.currentIndex - 1) {
            case 1:
                this._initPage1Animate();
                break;
            case 2:
                this._initPage2Animate();
                break;
            case 3:
                this._initPage3Animate()
            }
        },
        _bindIndexNextBtn: function() {
            var a = this;
            this.indexNextBtn.bind("click",
            function() {
                afwTracker({
                    caseid: "MY-1201-1189",
                    seed: "slided",
                    appid: "MY1000011",
                    logid: "pc_download_pagedown"
                }),
                a.pageObj.nextPage()
            })
        },
        _bindRightQrcodeBtn: function() {
            var a = this;
            this.rightQrcode.bind("click",
            function() {
                afwTracker({
                    caseid: "MY-1201-1188",
                    seed: "clicked",
                    appid: "MY1000011",
                    logid: "pc_download_sidecode"
                }),
                a.pageObj.render(1)
            })
        },
        _bindMouseNav: function() {
            function a(a, b) {
                var c = a.originalEvent,
                e = (new Date).getTime();
                "undefined" != typeof c.wheelDelta ? Math.abs(c.wheelDelta) > b.wheelDelta && e - b.beginTime > b.period && (d && (clearTimeout(d), d = 0), b.currentWheelDelta = c.wheelDelta, d = setTimeout(function() {
                    b.beginTime = (new Date).getTime(),
                    b.currentWheelDelta > 0 && 1 != b.pageObj.currentIndex ? b.pageObj.render(--b.pageObj.currentIndex) : b.currentWheelDelta < 0 && b.pageObj.currentIndex != b.pageObj.total && (b.pageObj.render(++b.pageObj.currentIndex), afwTracker({
                        caseid: "MY-1201-1189",
                        seed: "slided",
                        appid: "MY1000011",
                        logid: "pc_download_pagedown"
                    }))
                },
                0)) : "undefined" != typeof c.detail && e - b.beginTime > b.period && (d && (clearTimeout(d), d = 0), d = setTimeout(function() {
                    b.beginTime = (new Date).getTime(),
                    c.detail > 0 && b.pageObj.currentIndex != b.pageObj.total ? (b.pageObj.nextPage(), afwTracker({
                        caseid: "MY-1201-1189",
                        seed: "slided",
                        appid: "MY1000011",
                        logid: "pc_download_pagedown"
                    })) : c.detail < 0 && 1 != b.pageObj.currentIndex && b.pageObj.prevPage()
                },
                0))
            }
            function b(a, b, c) {
                var d, e, f = a.originalEvent,
                g = (new Date).getTime(),
                h = function(a, c) {
                    var d = a.originalEvent;
                    console.log(d),
                    Math.abs(d.changedTouches[0].pageY - e) > 50 && g - c.beginTime > 500 && (c.beginTime = (new Date).getTime(), d.changedTouches[0].pageY - e < 0 && c.pageObj.currentIndex != c.pageObj.total ? (c.pageObj.nextPage(), afwTracker({
                        caseid: "MY-1201-1189",
                        seed: "slided",
                        appid: "MY1000011",
                        logid: "pc_download_pagedown"
                    })) : d.changedTouches[0].pageY - e > 0 && 1 != c.pageObj.currentIndex && c.pageObj.prevPage()),
                    b.off("touchend")
                };
                f.touches && f.touches.length && (d = f.touches[0].pageX, e = f.touches[0].pageY, b.on("touchend",
                function(a) {
                    h(a, c)
                }))
            }
            var c = this,
            d = 0;
            this.pageCtn.on("mousewheel",
            function(b) {
                a(b, c)
            }),
            this.pageCtn.on("DOMMouseScroll",
            function(b) {
                a(b, c)
            }),
            this.pageCtn.on("touchstart",
            function(a) {
                b(a, c.pageCtn, c)
            })
        },
        _bindResizePage: function() {
            var a = this;
            $(window).resize(function() {
                a._setCarPosition(),
                a._setPageHeight(a.pageObj),
                a._setFirstPageWidth(),
                a._resetLastPageHeight(a.pageObj)
            })
        },
        _setCarPosition: function() {
            var a = $(window).height() - 50;
            this.page1Car.css({
                translateY: a + "px"
            })
        },
        _setFirstPageWidth: function() {
            var a = $(window).width() > 1920 ? 1920 : $(window).width();
            this.firstPage.css({
                width: a
            })
        },
        _bindHistoryBtn: function() {
            var a = this,
            b = !1;
            this.historyBtn.hover(function() {
                a.historyCtn.show(),
                afwTracker({
                    caseid: "MY-1201-1190",
                    seed: "clicked",
                    appid: "MY1000011",
                    logid: "pc_download_history"
                })
            },
            function() {
                setTimeout(function() {
                    b || a.historyCtn.hide()
                },
                0)
            }),
            this.historyCtn.hover(function() {
                b = !0
            },
            function() {
                b = !1,
                a.historyCtn.hide()
            })
        }
    },
    b.prototype = {
        init: function() {
            this._bind(),
            this._setTimer()
        },
        _bind: function() {
            this._bindPageBtn(),
            this._bindBeforeRenderPage(),
            this._bindAfterRenderPage()
        },
        _setTimer: function() {
            if (this.autoPlay) {
                var a = this; ! this.timer && (this.timer = setInterval(function() {
                    a.nextPage()
                },
                a.autoPlay))
            }
        },
        _bindPageBtn: function() {
            var a = this;
            this.btns.delegate(a.btn, "click",
            function(b) {
                b.preventDefault();
                var c = $(this).index() + 1;
                a._scrollIsValidate(c) && (a._clearTimer(), a.render(c), a._setTimer())
            })
        },
        _bindAfterRenderPage: function() {
            this.ctn.on("afterRenderPageEvent",
            function(a, b) {
                b.afterRenderPage(b)
            })
        },
        _bindBeforeRenderPage: function() {
            this.ctn.on("beforeRenderPageEvent",
            function(a, b) {
                b.beforeRenderPage(b)
            })
        },
        _clearTimer: function() {
            this.autoPlay && this.timer && (clearInterval(this.timer), this.timer = 0)
        },
        render: function(a) {
            var b = this,
            c = this.direction,
            d = this.directionOffset + (a - 1) * this.offset + "px",
            e = new Object;
            this.animateState = !0,
            e[c] = d,
            this.ctn.animate(e, this.speed,
            function() {
                b.animateState = !1,
                b.afterRenderPage && b.ctn.trigger("afterRenderPageEvent", [b])
            }),
            this.currentIndex = a,
            this.renderBtn(),
            this.renderPage()
        },
        renderBtn: function() {
            this.resetBtns(),
            $(this.btns.children().get(this.currentIndex - 1)).addClass(this.btnActiveClass)
        },
        resetBtns: function() {
            var a = this.btnActiveClass;
            $.each(this.btns.children(),
            function(b, c) {
                $(c).removeClass(a)
            })
        },
        renderPage: function() {
            this.beforeRenderPage && this.ctn.trigger("beforeRenderPageEvent", [this]),
            this.resetPages(),
            $(this.ctn.children().get(this.currentIndex - 1)).addClass(this.pageActiveClass)
        },
        resetPages: function() {
            var a = this.pageActiveClass;
            $.each(this.ctn.children(),
            function(b, c) {
                $(c).removeClass(a)
            })
        },
        _scrollIsValidate: function(a) {
            return this.currentIndex == a ? !1 : this.animateState ? !1 : !0
        },
        nextPage: function() {
            var a = this.currentIndex == this.total ? 1 : ++this.currentIndex;
            this.render(a)
        },
        prevPage: function() {
            var a = 1 == this.currentIndex ? this.total: --this.currentIndex;
            0 == this.ctn.scrollTop() && this.render(a)
        },
        resetOffset: function(a) {
            this.offset = a
        },
        fixRenderPage: function() {
            var a = this.direction,
            b = this.directionOffset + (this.currentIndex - 1) * this.offset + "px",
            c = new Object;
            c[a] = b,
            this.ctn.css(c)
        }
    };
    var c = new a;
    c.init()
});