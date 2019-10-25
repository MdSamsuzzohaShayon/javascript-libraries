/*!
 * Editor.js
 * 
 * @version 2.15.1
 * 
 * @licence Apache-2.0
 * @author CodeX <https://codex.so>
 * 
 * @uses html-janitor
 * @licence Apache-2.0 (https://github.com/guardian/html-janitor/blob/master/LICENSE)
 */
! function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.EditorJS = e() : t.EditorJS = e()
}(window, function () {
    return function (t) {
        var e = {};

        function n(o) {
            if (e[o]) return e[o].exports;
            var r = e[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
        }
        return n.m = t, n.c = e, n.d = function (t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: o
            })
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" != typeof t)
                for (var r in t) n.d(o, r, function (e) {
                    return t[e]
                }.bind(null, r));
            return o
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 163)
    }([function (t, e, n) {
        var o = n(9),
            r = n(17),
            i = n(22),
            a = n(19),
            s = n(32),
            c = function (t, e, n) {
                var l, u, f, d, p = t & c.F,
                    h = t & c.G,
                    v = t & c.S,
                    g = t & c.P,
                    y = t & c.B,
                    m = h ? o : v ? o[e] || (o[e] = {}) : (o[e] || {}).prototype,
                    b = h ? r : r[e] || (r[e] = {}),
                    k = b.prototype || (b.prototype = {});
                for (l in h && (n = e), n) f = ((u = !p && m && void 0 !== m[l]) ? m : n)[l], d = y && u ? s(f, o) : g && "function" == typeof f ? s(Function.call, f) : f, m && a(m, l, f, t & c.U), b[l] != f && i(b, l, d), g && k[l] != f && (k[l] = f)
            };
        o.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    }, function (t, e) {
        t.exports = function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
    }, function (t, e) {
        function n(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
            }
        }
        t.exports = function (t, e, o) {
            return e && n(t.prototype, e), o && n(t, o), t
        }
    }, function (t, e) {
        t.exports = function (t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
    }, function (t, e, n) {
        var o = n(55),
            r = n(344);
        t.exports = function (t, e) {
            return !e || "object" !== o(e) && "function" != typeof e ? r(t) : e
        }
    }, function (t, e) {
        function n(e) {
            return t.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            }, n(e)
        }
        t.exports = n
    }, function (t, e, n) {
        var o = n(345);
        t.exports = function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && o(t, e)
        }
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2)], void 0 === (i = "function" == typeof (o = function (o, r, i) {
            "use strict";
            var a = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = a(r), i = a(i);
            var s = function () {
                function t(e) {
                    var n = e.config;
                    if ((0, r.default)(this, t), (this instanceof t ? this.constructor : void 0) === t) throw new TypeError("Constructors for abstract class Module are not allowed.");
                    this.config = n
                }
                return (0, i.default)(t, [{
                    key: "state",
                    set: function (t) {
                        this.Editor = t
                    }
                }]), t
            }();
            o.default = s, s.displayName = "Module", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function (t, e, n) {
        var o = n(10);
        t.exports = function (t) {
            if (!o(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(55), n(99), n(1), n(2)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s) {
            "use strict";
            var c = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = c(r), i = c(i), a = c(a), s = c(s);
            var l = function () {
                function t() {
                    (0, a.default)(this, t)
                }
                return (0, s.default)(t, null, [{
                    key: "isSingleTag",
                    value: function (t) {
                        return t.tagName && ["AREA", "BASE", "BR", "COL", "COMMAND", "EMBED", "HR", "IMG", "INPUT", "KEYGEN", "LINK", "META", "PARAM", "SOURCE", "TRACK", "WBR"].includes(t.tagName)
                    }
                }, {
                    key: "isLineBreakTag",
                    value: function (t) {
                        return t && t.tagName && ["BR", "WBR"].includes(t.tagName)
                    }
                }, {
                    key: "make",
                    value: function (t) {
                        var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = document.createElement(t);
                        for (var a in Array.isArray(n) ? (e = r.classList).add.apply(e, (0, i.default)(n)) : n && r.classList.add(n), o) o.hasOwnProperty(a) && (r[a] = o[a]);
                        return r
                    }
                }, {
                    key: "text",
                    value: function (t) {
                        return document.createTextNode(t)
                    }
                }, {
                    key: "svg",
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 14,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 14,
                            o = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        return o.classList.add("icon", "icon--" + t), o.setAttribute("width", e + "px"), o.setAttribute("height", n + "px"), o.innerHTML = '<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#'.concat(t, '"></use>'), o
                    }
                }, {
                    key: "append",
                    value: function (t, e) {
                        Array.isArray(e) ? e.forEach(function (e) {
                            return t.appendChild(e)
                        }) : t.appendChild(e)
                    }
                }, {
                    key: "prepend",
                    value: function (t, e) {
                        Array.isArray(e) ? (e = e.reverse()).forEach(function (e) {
                            return t.prepend(e)
                        }) : t.prepend(e)
                    }
                }, {
                    key: "swap",
                    value: function (t, e) {
                        var n = document.createElement("div"),
                            o = t.parentNode;
                        o.insertBefore(n, t), o.insertBefore(t, e), o.insertBefore(e, n), o.removeChild(n)
                    }
                }, {
                    key: "find",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        return t.querySelector(e)
                    }
                }, {
                    key: "get",
                    value: function (t) {
                        return document.getElementById(t)
                    }
                }, {
                    key: "findAll",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
                            e = arguments.length > 1 ? arguments[1] : void 0;
                        return t.querySelectorAll(e)
                    }
                }, {
                    key: "getDeepestNode",
                    value: function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            o = n ? "lastChild" : "firstChild",
                            r = n ? "previousSibling" : "nextSibling";
                        if (e && e.nodeType === Node.ELEMENT_NODE && e[o]) {
                            var i = e[o];
                            if (t.isSingleTag(i) && !t.isNativeInput(i) && !t.isLineBreakTag(i))
                                if (i[r]) i = i[r];
                                else {
                                    if (!i.parentNode[r]) return i.parentNode;
                                    i = i.parentNode[r]
                                } return this.getDeepestNode(i, n)
                        }
                        return e
                    }
                }, {
                    key: "isElement",
                    value: function (t) {
                        return t && "object" === (0, r.default)(t) && t.nodeType && t.nodeType === Node.ELEMENT_NODE
                    }
                }, {
                    key: "isFragment",
                    value: function (t) {
                        return t && "object" === (0, r.default)(t) && t.nodeType && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE
                    }
                }, {
                    key: "isContentEditable",
                    value: function (t) {
                        return "true" === t.contentEditable
                    }
                }, {
                    key: "isNativeInput",
                    value: function (t) {
                        return !(!t || !t.tagName) && ["INPUT", "TEXTAREA"].includes(t.tagName)
                    }
                }, {
                    key: "canSetCaret",
                    value: function (e) {
                        var n = !0;
                        if (t.isNativeInput(e)) {
                            var o = e;
                            switch (o.type) {
                                case "file":
                                case "checkbox":
                                case "radio":
                                case "hidden":
                                case "submit":
                                case "button":
                                case "image":
                                case "reset":
                                    n = !1
                            }
                        } else n = t.isContentEditable(e);
                        return n
                    }
                }, {
                    key: "isNodeEmpty",
                    value: function (t) {
                        return !(this.isSingleTag(t) && !this.isLineBreakTag(t)) && 0 === (this.isElement(t) && this.isNativeInput(t) ? t.value : t.textContent.replace("​", "")).trim().length
                    }
                }, {
                    key: "isLeaf",
                    value: function (t) {
                        return !!t && 0 === t.childNodes.length
                    }
                }, {
                    key: "isEmpty",
                    value: function (t) {
                        var e = this,
                            n = [],
                            o = [];
                        if (!t) return !0;
                        if (!t.childNodes.length) return this.isNodeEmpty(t);
                        for (n.push(t.firstChild); n.length > 0;)
                            if (t = n.shift()) {
                                for (this.isLeaf(t) ? o.push(t) : n.push(t.firstChild); t && t.nextSibling;)(t = t.nextSibling) && n.push(t);
                                if (t && !this.isNodeEmpty(t)) return !1
                            } return o.every(function (t) {
                            return e.isNodeEmpty(t)
                        })
                    }
                }, {
                    key: "isHTMLString",
                    value: function (e) {
                        var n = t.make("div");
                        return n.innerHTML = e, n.childElementCount > 0
                    }
                }, {
                    key: "getContentLength",
                    value: function (e) {
                        return t.isNativeInput(e) ? e.value.length : e.nodeType === Node.TEXT_NODE ? e.length : e.textContent.length
                    }
                }, {
                    key: "containsOnlyInlineElements",
                    value: function (e) {
                        var n;
                        return "string" == typeof e ? (n = document.createElement("div")).innerHTML = e : n = e, Array.from(n.children).every(function e(n) {
                            return !t.blockElements.includes(n.tagName.toLowerCase()) && Array.from(n.children).every(e)
                        })
                    }
                }, {
                    key: "getDeepestBlockElements",
                    value: function (e) {
                        return t.containsOnlyInlineElements(e) ? [e] : Array.from(e.children).reduce(function (e, n) {
                            return [].concat((0, i.default)(e), (0, i.default)(t.getDeepestBlockElements(n)))
                        }, [])
                    }
                }, {
                    key: "getHolder",
                    value: function (t) {
                        return "string" == typeof t ? document.getElementById(t) : t
                    }
                }, {
                    key: "blockElements",
                    get: function () {
                        return ["address", "article", "aside", "blockquote", "canvas", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "li", "main", "nav", "noscript", "ol", "output", "p", "pre", "ruby", "section", "table", "tr", "tfoot", "ul", "video"]
                    }
                }]), t
            }();
            o.default = l, l.displayName = "Dom", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o = n(75)("wks"),
            r = n(41),
            i = n(9).Symbol,
            a = "function" == typeof i;
        (t.exports = function (t) {
            return o[t] || (o[t] = a && i[t] || (a ? i : r)("Symbol." + t))
        }).store = o
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(342), n(26), n(27), n(1), n(2), n(12)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l) {
            "use strict";
            var u = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c), l = u(l);
            var f = function () {
                function t() {
                    (0, s.default)(this, t)
                }
                var e;
                return (0, c.default)(t, null, [{
                    key: "log",
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log",
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "color: inherit";
                        if ("console" in window && window.console[e]) {
                            var r = "Editor.js ".concat("2.15.1"),
                                i = "line-height: 1em;\n            color: #006FEA;\n            display: inline-block;\n            font-size: 11px;\n            line-height: 1em;\n            background-color: #fff;\n            padding: 4px 9px;\n            border-radius: 30px;\n            border: 1px solid rgba(56, 138, 229, 0.16);\n            margin: 4px 5px 4px 0;";
                            try {
                                ["time", "timeEnd"].includes(e) ? console[e]("( ".concat(r, " ) ").concat(t)) : n ? console[e]("%c".concat(r, "%c ").concat(t, " %o"), i, o, n) : console[e]("%c".concat(r, "%c ").concat(t), i, o)
                            } catch (t) {}
                        }
                    }
                }, {
                    key: "isPrintableKey",
                    value: function (t) {
                        return t > 47 && t < 58 || 32 === t || 13 === t || t > 64 && t < 91 || t > 95 && t < 112 || t > 185 && t < 193 || t > 218 && t < 223
                    }
                }, {
                    key: "sequence",
                    value: (e = (0, a.default)(i.default.mark(function t(e) {
                        var n, o, r, s, c = arguments;
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return s = function () {
                                        return (s = (0, a.default)(i.default.mark(function t(e, n, o) {
                                            return i.default.wrap(function (t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.prev = 0, t.next = 3, e.function(e.data);
                                                    case 3:
                                                        return t.next = 5, n(void 0 !== e.data ? e.data : {});
                                                    case 5:
                                                        t.next = 10;
                                                        break;
                                                    case 7:
                                                        t.prev = 7, t.t0 = t.catch(0), o(void 0 !== e.data ? e.data : {});
                                                    case 10:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }, t, null, [
                                                [0, 7]
                                            ])
                                        }))).apply(this, arguments)
                                    }, r = function (t, e, n) {
                                        return s.apply(this, arguments)
                                    }, n = c.length > 1 && void 0 !== c[1] ? c[1] : function () {}, o = c.length > 2 && void 0 !== c[2] ? c[2] : function () {}, t.next = 6, e.reduce(function () {
                                        var t = (0, a.default)(i.default.mark(function t(e, a) {
                                            return i.default.wrap(function (t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, e;
                                                    case 2:
                                                        return t.abrupt("return", r(a, n, o));
                                                    case 3:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }, t)
                                        }));
                                        return function (e, n) {
                                            return t.apply(this, arguments)
                                        }
                                    }(), Promise.resolve());
                                case 6:
                                    return t.abrupt("return", t.sent);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    })), function (t) {
                        return e.apply(this, arguments)
                    })
                }, {
                    key: "array",
                    value: function (t) {
                        return Array.prototype.slice.call(t)
                    }
                }, {
                    key: "isFunction",
                    value: function (t) {
                        return "function" == typeof t
                    }
                }, {
                    key: "isClass",
                    value: function (t) {
                        return "function" == typeof t && /^\s*class\s+/.test(t.toString())
                    }
                }, {
                    key: "isEmpty",
                    value: function (t) {
                        return !t || 0 === Object.keys(t).length && t.constructor === Object
                    }
                }, {
                    key: "isPromise",
                    value: function (t) {
                        return Promise.resolve(t) === t
                    }
                }, {
                    key: "delay",
                    value: function (t, e) {
                        return function () {
                            var n = this,
                                o = arguments;
                            window.setTimeout(function () {
                                return t.apply(n, o)
                            }, e)
                        }
                    }
                }, {
                    key: "getFileExtension",
                    value: function (t) {
                        return t.name.split(".").pop()
                    }
                }, {
                    key: "isValidMimeType",
                    value: function (t) {
                        return /^[-\w]+\/([-+\w]+|\*)$/.test(t)
                    }
                }, {
                    key: "debounce",
                    value: function (t, e, n) {
                        var o, r = this,
                            i = arguments;
                        return function () {
                            var a = r,
                                s = i,
                                c = n && !o;
                            window.clearTimeout(o), o = window.setTimeout(function () {
                                o = null, n || t.apply(a, s)
                            }, e), c && t.apply(a, s)
                        }
                    }
                }, {
                    key: "copyTextToClipboard",
                    value: function (t) {
                        var e = l.default.make("div", "codex-editor-clipboard", {
                            innerHTML: t
                        });
                        document.body.appendChild(e);
                        var n = window.getSelection(),
                            o = document.createRange();
                        o.selectNode(e), window.getSelection().removeAllRanges(), n.addRange(o), document.execCommand("copy"), document.body.removeChild(e)
                    }
                }, {
                    key: "getUserOS",
                    value: function () {
                        var t = {
                                win: !1,
                                mac: !1,
                                x11: !1,
                                linux: !1
                            },
                            e = Object.keys(t).find(function (t) {
                                return -1 !== navigator.appVersion.toLowerCase().indexOf(t)
                            });
                        return e ? (t[e] = !0, t) : t
                    }
                }, {
                    key: "capitalize",
                    value: function (t) {
                        return t[0].toUpperCase() + t.slice(1)
                    }
                }, {
                    key: "deepMerge",
                    value: function (e) {
                        for (var n = function (e) {
                                return e && "object" === t.typeof(e)
                            }, o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
                        if (!i.length) return e;
                        var s = i.shift();
                        if (n(e) && n(s))
                            for (var c in s) n(s[c]) ? (e[c] || Object.assign(e, (0, r.default)({}, c, {})), t.deepMerge(e[c], s[c])) : Object.assign(e, (0, r.default)({}, c, s[c]));
                        return t.deepMerge.apply(t, [e].concat(i))
                    }
                }, {
                    key: "isTouchSupported",
                    value: function () {
                        return "ontouchstart" in document.documentElement
                    }
                }, {
                    key: "typeof",
                    value: function (t) {
                        return Object.prototype.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
                    }
                }, {
                    key: "keyCodes",
                    get: function () {
                        return {
                            BACKSPACE: 8,
                            TAB: 9,
                            ENTER: 13,
                            SHIFT: 16,
                            CTRL: 17,
                            ALT: 18,
                            ESC: 27,
                            SPACE: 32,
                            LEFT: 37,
                            UP: 38,
                            DOWN: 40,
                            RIGHT: 39,
                            DELETE: 46,
                            META: 91
                        }
                    }
                }, {
                    key: "mouseButtons",
                    get: function () {
                        return {
                            LEFT: 0,
                            WHEEL: 1,
                            RIGHT: 2,
                            BACKWARD: 3,
                            FORWARD: 4
                        }
                    }
                }]), t
            }();
            o.default = f, f.displayName = "Util", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o = n(11),
            r = n(100),
            i = n(38),
            a = Object.defineProperty;
        e.f = n(16) ? Object.defineProperty : function (t, e, n) {
            if (o(t), e = i(e, !0), o(n), r) try {
                return a(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function (t, e, n) {
        t.exports = !n(8)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e) {
        var n = t.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = n)
    }, function (t, e, n) {
        var o = n(36),
            r = Math.min;
        t.exports = function (t) {
            return t > 0 ? r(o(t), 9007199254740991) : 0
        }
    }, function (t, e, n) {
        var o = n(9),
            r = n(22),
            i = n(21),
            a = n(41)("src"),
            s = Function.toString,
            c = ("" + s).split("toString");
        n(17).inspectSource = function (t) {
            return s.call(t)
        }, (t.exports = function (t, e, n, s) {
            var l = "function" == typeof n;
            l && (i(n, "name") || r(n, "name", e)), t[e] !== n && (l && (i(n, a) || r(n, a, t[e] ? "" + t[e] : c.join(String(e)))), t === o ? t[e] = n : s ? t[e] ? t[e] = n : r(t, e, n) : (delete t[e], r(t, e, n)))
        })(Function.prototype, "toString", function () {
            return "function" == typeof this && this[a] || s.call(this)
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(8),
            i = n(35),
            a = /"/g,
            s = function (t, e, n, o) {
                var r = String(i(t)),
                    s = "<" + e;
                return "" !== n && (s += " " + n + '="' + String(o).replace(a, "&quot;") + '"'), s + ">" + r + "</" + e + ">"
            };
        t.exports = function (t, e) {
            var n = {};
            n[t] = e(s), o(o.P + o.F * r(function () {
                var e = "" [t]('"');
                return e !== e.toLowerCase() || e.split('"').length > 3
            }), "String", n)
        }
    }, function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    }, function (t, e, n) {
        var o = n(15),
            r = n(40);
        t.exports = n(16) ? function (t, e, n) {
            return o.f(t, e, r(1, n))
        } : function (t, e, n) {
            return t[e] = n, t
        }
    }, function (t, e, n) {
        var o = n(56),
            r = n(35);
        t.exports = function (t) {
            return o(r(t))
        }
    }, function (t, e, n) {
        var o = n(35);
        t.exports = function (t) {
            return Object(o(t))
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(8);
        t.exports = function (t, e) {
            return !!t && o(function () {
                e ? t.call(null, function () {}, 1) : t.call(null)
            })
        }
    }, function (t, e, n) {
        t.exports = n(338)
    }, function (t, e) {
        function n(t, e, n, o, r, i, a) {
            try {
                var s = t[i](a),
                    c = s.value
            } catch (t) {
                return void n(t)
            }
            s.done ? e(c) : Promise.resolve(c).then(o, r)
        }
        t.exports = function (t) {
            return function () {
                var e = this,
                    o = arguments;
                return new Promise(function (r, i) {
                    var a = t.apply(e, o);

                    function s(t) {
                        n(a, r, i, s, c, "next", t)
                    }

                    function c(t) {
                        n(a, r, i, s, c, "throw", t)
                    }
                    s(void 0)
                })
            }
        }
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(14), n(12)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s) {
            "use strict";
            var c = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = c(r), i = c(i), a = c(a), s = c(s);
            var l = function () {
                function t() {
                    (0, r.default)(this, t), this.instance = null, this.selection = null, this.savedSelectionRange = null, this.isFakeBackgroundEnabled = !1, this.commandBackground = "backColor", this.commandRemoveFormat = "removeFormat"
                }
                return (0, i.default)(t, [{
                    key: "removeFakeBackground",
                    value: function () {
                        this.isFakeBackgroundEnabled && (this.isFakeBackgroundEnabled = !1, document.execCommand(this.commandRemoveFormat))
                    }
                }, {
                    key: "setFakeBackground",
                    value: function () {
                        document.execCommand(this.commandBackground, !1, "#a8d6ff"), this.isFakeBackgroundEnabled = !0
                    }
                }, {
                    key: "save",
                    value: function () {
                        this.savedSelectionRange = t.range
                    }
                }, {
                    key: "restore",
                    value: function () {
                        if (this.savedSelectionRange) {
                            var t = window.getSelection();
                            t.removeAllRanges(), t.addRange(this.savedSelectionRange)
                        }
                    }
                }, {
                    key: "clearSaved",
                    value: function () {
                        this.savedSelectionRange = null
                    }
                }, {
                    key: "collapseToEnd",
                    value: function () {
                        var t = window.getSelection(),
                            e = document.createRange();
                        e.selectNodeContents(t.focusNode), e.collapse(!1), t.removeAllRanges(), t.addRange(e)
                    }
                }, {
                    key: "findParentTag",
                    value: function (t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                            o = window.getSelection(),
                            r = null;
                        if (!o || !o.anchorNode || !o.focusNode) return null;
                        var i = [o.anchorNode, o.focusNode];
                        return i.forEach(function (o) {
                            for (var i = n; i > 0 && o.parentNode && (o.tagName !== t || (r = o, e && o.classList && !o.classList.contains(e) && (r = null), !r));) o = o.parentNode, i--
                        }), r
                    }
                }, {
                    key: "expandToTag",
                    value: function (t) {
                        var e = window.getSelection();
                        e.removeAllRanges();
                        var n = document.createRange();
                        n.selectNodeContents(t), e.addRange(n)
                    }
                }], [{
                    key: "almostAllSelected",
                    value: function (e) {
                        var n = t.range;
                        if (!n) return !1;
                        var o = n.cloneContents(),
                            r = e.length,
                            i = o.textContent.length;
                        return i / r > .85
                    }
                }, {
                    key: "get",
                    value: function () {
                        return window.getSelection()
                    }
                }, {
                    key: "CSS",
                    get: function () {
                        return {
                            editorWrapper: "codex-editor",
                            editorZone: "codex-editor__redactor"
                        }
                    }
                }, {
                    key: "anchorNode",
                    get: function () {
                        var t = window.getSelection();
                        return t ? t.anchorNode : null
                    }
                }, {
                    key: "anchorElement",
                    get: function () {
                        var t = window.getSelection();
                        if (!t) return null;
                        var e = t.anchorNode;
                        return e ? s.default.isElement(e) ? e : e.parentElement : null
                    }
                }, {
                    key: "anchorOffset",
                    get: function () {
                        var t = window.getSelection();
                        return t ? t.anchorOffset : null
                    }
                }, {
                    key: "isCollapsed",
                    get: function () {
                        var t = window.getSelection();
                        return t ? t.isCollapsed : null
                    }
                }, {
                    key: "isAtEditor",
                    get: function () {
                        var e = t.get(),
                            n = e.anchorNode || e.focusNode;
                        n && n.nodeType === Node.TEXT_NODE && (n = n.parentNode);
                        var o = null;
                        return n && (o = n.closest(".".concat(t.CSS.editorZone))), o && o.nodeType === Node.ELEMENT_NODE
                    }
                }, {
                    key: "range",
                    get: function () {
                        var t = window.getSelection();
                        return t && t.rangeCount ? t.getRangeAt(0) : null
                    }
                }, {
                    key: "rect",
                    get: function () {
                        var t, e = document.selection,
                            n = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0
                            };
                        if (e && "Control" !== e.type) return t = (e = e).createRange(), n.x = t.boundingLeft, n.y = t.boundingTop, n.width = t.boundingWidth, n.height = t.boundingHeight, n;
                        if (!window.getSelection) return a.default.log("Method window.getSelection is not supported", "warn"), n;
                        if (null === (e = window.getSelection()).rangeCount || isNaN(e.rangeCount)) return a.default.log("Method SelectionUtils.rangeCount is not supported", "warn"), n;
                        if ((t = e.getRangeAt(0).cloneRange()).getBoundingClientRect && (n = t.getBoundingClientRect()), 0 === n.x && 0 === n.y) {
                            var o = document.createElement("span");
                            if (o.getBoundingClientRect) {
                                o.appendChild(document.createTextNode("​")), t.insertNode(o), n = o.getBoundingClientRect();
                                var r = o.parentNode;
                                r.removeChild(o), r.normalize()
                            }
                        }
                        return n
                    }
                }, {
                    key: "text",
                    get: function () {
                        return window.getSelection ? window.getSelection().toString() : ""
                    }
                }]), t
            }();
            o.default = l, l.displayName = "SelectionUtils", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o = n(57),
            r = n(40),
            i = n(23),
            a = n(38),
            s = n(21),
            c = n(100),
            l = Object.getOwnPropertyDescriptor;
        e.f = n(16) ? l : function (t, e) {
            if (t = i(t), e = a(e, !0), c) try {
                return l(t, e)
            } catch (t) {}
            if (s(t, e)) return r(!o.f.call(t, e), t[e])
        }
    }, function (t, e, n) {
        var o = n(0),
            r = n(17),
            i = n(8);
        t.exports = function (t, e) {
            var n = (r.Object || {})[t] || Object[t],
                a = {};
            a[t] = e(n), o(o.S + o.F * i(function () {
                n(1)
            }), "Object", a)
        }
    }, function (t, e, n) {
        var o = n(32),
            r = n(56),
            i = n(24),
            a = n(18),
            s = n(258);
        t.exports = function (t, e) {
            var n = 1 == t,
                c = 2 == t,
                l = 3 == t,
                u = 4 == t,
                f = 6 == t,
                d = 5 == t || f,
                p = e || s;
            return function (e, s, h) {
                for (var v, g, y = i(e), m = r(y), b = o(s, h, 3), k = a(m.length), x = 0, S = n ? p(e, k) : c ? p(e, 0) : void 0; k > x; x++)
                    if ((d || x in m) && (g = b(v = m[x], x, y), t))
                        if (n) S[x] = g;
                        else if (g) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return v;
                    case 6:
                        return x;
                    case 2:
                        S.push(v)
                } else if (u) return !1;
                return f ? -1 : l || u ? u : S
            }
        }
    }, function (t, e, n) {
        var o = n(33);
        t.exports = function (t, e, n) {
            if (o(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, o) {
                        return t.call(e, n, o)
                    };
                case 3:
                    return function (n, o, r) {
                        return t.call(e, n, o, r)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function (t, e) {
        var n = Math.ceil,
            o = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t)
        }
    }, function (t, e, n) {
        "use strict";
        if (n(16)) {
            var o = n(42),
                r = n(9),
                i = n(8),
                a = n(0),
                s = n(70),
                c = n(98),
                l = n(32),
                u = n(52),
                f = n(40),
                d = n(22),
                p = n(53),
                h = n(36),
                v = n(18),
                g = n(125),
                y = n(44),
                m = n(38),
                b = n(21),
                k = n(62),
                x = n(10),
                S = n(24),
                w = n(91),
                E = n(45),
                T = n(47),
                B = n(46).f,
                C = n(93),
                _ = n(41),
                I = n(13),
                N = n(31),
                O = n(60),
                M = n(67),
                L = n(95),
                A = n(49),
                P = n(64),
                R = n(51),
                z = n(94),
                j = n(117),
                F = n(15),
                D = n(29),
                U = F.f,
                H = D.f,
                G = r.RangeError,
                W = r.TypeError,
                X = r.Uint8Array,
                Y = Array.prototype,
                V = c.ArrayBuffer,
                K = c.DataView,
                Z = N(0),
                q = N(2),
                J = N(3),
                $ = N(4),
                Q = N(5),
                tt = N(6),
                et = O(!0),
                nt = O(!1),
                ot = L.values,
                rt = L.keys,
                it = L.entries,
                at = Y.lastIndexOf,
                st = Y.reduce,
                ct = Y.reduceRight,
                lt = Y.join,
                ut = Y.sort,
                ft = Y.slice,
                dt = Y.toString,
                pt = Y.toLocaleString,
                ht = I("iterator"),
                vt = I("toStringTag"),
                gt = _("typed_constructor"),
                yt = _("def_constructor"),
                mt = s.CONSTR,
                bt = s.TYPED,
                kt = s.VIEW,
                xt = N(1, function (t, e) {
                    return Bt(M(t, t[yt]), e)
                }),
                St = i(function () {
                    return 1 === new X(new Uint16Array([1]).buffer)[0]
                }),
                wt = !!X && !!X.prototype.set && i(function () {
                    new X(1).set({})
                }),
                Et = function (t, e) {
                    var n = h(t);
                    if (n < 0 || n % e) throw G("Wrong offset!");
                    return n
                },
                Tt = function (t) {
                    if (x(t) && bt in t) return t;
                    throw W(t + " is not a typed array!")
                },
                Bt = function (t, e) {
                    if (!(x(t) && gt in t)) throw W("It is not a typed array constructor!");
                    return new t(e)
                },
                Ct = function (t, e) {
                    return _t(M(t, t[yt]), e)
                },
                _t = function (t, e) {
                    for (var n = 0, o = e.length, r = Bt(t, o); o > n;) r[n] = e[n++];
                    return r
                },
                It = function (t, e, n) {
                    U(t, e, {
                        get: function () {
                            return this._d[n]
                        }
                    })
                },
                Nt = function (t) {
                    var e, n, o, r, i, a, s = S(t),
                        c = arguments.length,
                        u = c > 1 ? arguments[1] : void 0,
                        f = void 0 !== u,
                        d = C(s);
                    if (null != d && !w(d)) {
                        for (a = d.call(s), o = [], e = 0; !(i = a.next()).done; e++) o.push(i.value);
                        s = o
                    }
                    for (f && c > 2 && (u = l(u, arguments[2], 2)), e = 0, n = v(s.length), r = Bt(this, n); n > e; e++) r[e] = f ? u(s[e], e) : s[e];
                    return r
                },
                Ot = function () {
                    for (var t = 0, e = arguments.length, n = Bt(this, e); e > t;) n[t] = arguments[t++];
                    return n
                },
                Mt = !!X && i(function () {
                    pt.call(new X(1))
                }),
                Lt = function () {
                    return pt.apply(Mt ? ft.call(Tt(this)) : Tt(this), arguments)
                },
                At = {
                    copyWithin: function (t, e) {
                        return j.call(Tt(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
                    },
                    every: function (t) {
                        return $(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    fill: function (t) {
                        return z.apply(Tt(this), arguments)
                    },
                    filter: function (t) {
                        return Ct(this, q(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0))
                    },
                    find: function (t) {
                        return Q(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    findIndex: function (t) {
                        return tt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    forEach: function (t) {
                        Z(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    indexOf: function (t) {
                        return nt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    includes: function (t) {
                        return et(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    join: function (t) {
                        return lt.apply(Tt(this), arguments)
                    },
                    lastIndexOf: function (t) {
                        return at.apply(Tt(this), arguments)
                    },
                    map: function (t) {
                        return xt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    reduce: function (t) {
                        return st.apply(Tt(this), arguments)
                    },
                    reduceRight: function (t) {
                        return ct.apply(Tt(this), arguments)
                    },
                    reverse: function () {
                        for (var t, e = Tt(this).length, n = Math.floor(e / 2), o = 0; o < n;) t = this[o], this[o++] = this[--e], this[e] = t;
                        return this
                    },
                    some: function (t) {
                        return J(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    sort: function (t) {
                        return ut.call(Tt(this), t)
                    },
                    subarray: function (t, e) {
                        var n = Tt(this),
                            o = n.length,
                            r = y(t, o);
                        return new(M(n, n[yt]))(n.buffer, n.byteOffset + r * n.BYTES_PER_ELEMENT, v((void 0 === e ? o : y(e, o)) - r))
                    }
                },
                Pt = function (t, e) {
                    return Ct(this, ft.call(Tt(this), t, e))
                },
                Rt = function (t) {
                    Tt(this);
                    var e = Et(arguments[1], 1),
                        n = this.length,
                        o = S(t),
                        r = v(o.length),
                        i = 0;
                    if (r + e > n) throw G("Wrong length!");
                    for (; i < r;) this[e + i] = o[i++]
                },
                zt = {
                    entries: function () {
                        return it.call(Tt(this))
                    },
                    keys: function () {
                        return rt.call(Tt(this))
                    },
                    values: function () {
                        return ot.call(Tt(this))
                    }
                },
                jt = function (t, e) {
                    return x(t) && t[bt] && "symbol" != typeof e && e in t && String(+e) == String(e)
                },
                Ft = function (t, e) {
                    return jt(t, e = m(e, !0)) ? f(2, t[e]) : H(t, e)
                },
                Dt = function (t, e, n) {
                    return !(jt(t, e = m(e, !0)) && x(n) && b(n, "value")) || b(n, "get") || b(n, "set") || n.configurable || b(n, "writable") && !n.writable || b(n, "enumerable") && !n.enumerable ? U(t, e, n) : (t[e] = n.value, t)
                };
            mt || (D.f = Ft, F.f = Dt), a(a.S + a.F * !mt, "Object", {
                getOwnPropertyDescriptor: Ft,
                defineProperty: Dt
            }), i(function () {
                dt.call({})
            }) && (dt = pt = function () {
                return lt.call(this)
            });
            var Ut = p({}, At);
            p(Ut, zt), d(Ut, ht, zt.values), p(Ut, {
                slice: Pt,
                set: Rt,
                constructor: function () {},
                toString: dt,
                toLocaleString: Lt
            }), It(Ut, "buffer", "b"), It(Ut, "byteOffset", "o"), It(Ut, "byteLength", "l"), It(Ut, "length", "e"), U(Ut, vt, {
                get: function () {
                    return this[bt]
                }
            }), t.exports = function (t, e, n, c) {
                var l = t + ((c = !!c) ? "Clamped" : "") + "Array",
                    f = "get" + t,
                    p = "set" + t,
                    h = r[l],
                    y = h || {},
                    m = h && T(h),
                    b = !h || !s.ABV,
                    S = {},
                    w = h && h.prototype,
                    C = function (t, n) {
                        U(t, n, {
                            get: function () {
                                return function (t, n) {
                                    var o = t._d;
                                    return o.v[f](n * e + o.o, St)
                                }(this, n)
                            },
                            set: function (t) {
                                return function (t, n, o) {
                                    var r = t._d;
                                    c && (o = (o = Math.round(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), r.v[p](n * e + r.o, o, St)
                                }(this, n, t)
                            },
                            enumerable: !0
                        })
                    };
                b ? (h = n(function (t, n, o, r) {
                    u(t, h, l, "_d");
                    var i, a, s, c, f = 0,
                        p = 0;
                    if (x(n)) {
                        if (!(n instanceof V || "ArrayBuffer" == (c = k(n)) || "SharedArrayBuffer" == c)) return bt in n ? _t(h, n) : Nt.call(h, n);
                        i = n, p = Et(o, e);
                        var y = n.byteLength;
                        if (void 0 === r) {
                            if (y % e) throw G("Wrong length!");
                            if ((a = y - p) < 0) throw G("Wrong length!")
                        } else if ((a = v(r) * e) + p > y) throw G("Wrong length!");
                        s = a / e
                    } else s = g(n), i = new V(a = s * e);
                    for (d(t, "_d", {
                            b: i,
                            o: p,
                            l: a,
                            e: s,
                            v: new K(i)
                        }); f < s;) C(t, f++)
                }), w = h.prototype = E(Ut), d(w, "constructor", h)) : i(function () {
                    h(1)
                }) && i(function () {
                    new h(-1)
                }) && P(function (t) {
                    new h, new h(null), new h(1.5), new h(t)
                }, !0) || (h = n(function (t, n, o, r) {
                    var i;
                    return u(t, h, l), x(n) ? n instanceof V || "ArrayBuffer" == (i = k(n)) || "SharedArrayBuffer" == i ? void 0 !== r ? new y(n, Et(o, e), r) : void 0 !== o ? new y(n, Et(o, e)) : new y(n) : bt in n ? _t(h, n) : Nt.call(h, n) : new y(g(n))
                }), Z(m !== Function.prototype ? B(y).concat(B(m)) : B(y), function (t) {
                    t in h || d(h, t, y[t])
                }), h.prototype = w, o || (w.constructor = h));
                var _ = w[ht],
                    I = !!_ && ("values" == _.name || null == _.name),
                    N = zt.values;
                d(h, gt, !0), d(w, bt, l), d(w, kt, !0), d(w, yt, h), (c ? new h(1)[vt] == l : vt in w) || U(w, vt, {
                    get: function () {
                        return l
                    }
                }), S[l] = h, a(a.G + a.W + a.F * (h != y), S), a(a.S, l, {
                    BYTES_PER_ELEMENT: e
                }), a(a.S + a.F * i(function () {
                    y.of.call(h, 1)
                }), l, {
                    from: Nt,
                    of: Ot
                }), "BYTES_PER_ELEMENT" in w || d(w, "BYTES_PER_ELEMENT", e), a(a.P, l, At), R(l), a(a.P + a.F * wt, l, {
                    set: Rt
                }), a(a.P + a.F * !I, l, zt), o || w.toString == dt || (w.toString = dt), a(a.P + a.F * i(function () {
                    new h(1).slice()
                }), l, {
                    slice: Pt
                }), a(a.P + a.F * (i(function () {
                    return [1, 2].toLocaleString() != new h([1, 2]).toLocaleString()
                }) || !i(function () {
                    w.toLocaleString.call([1, 2])
                })), l, {
                    toLocaleString: Lt
                }), A[l] = I ? _ : N, o || I || d(w, ht, N)
            }
        } else t.exports = function () {}
    }, function (t, e, n) {
        var o = n(10);
        t.exports = function (t, e) {
            if (!o(t)) return t;
            var n, r;
            if (e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
            if ("function" == typeof (n = t.valueOf) && !o(r = n.call(t))) return r;
            if (!e && "function" == typeof (n = t.toString) && !o(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function (t, e, n) {
        var o = n(41)("meta"),
            r = n(10),
            i = n(21),
            a = n(15).f,
            s = 0,
            c = Object.isExtensible || function () {
                return !0
            },
            l = !n(8)(function () {
                return c(Object.preventExtensions({}))
            }),
            u = function (t) {
                a(t, o, {
                    value: {
                        i: "O" + ++s,
                        w: {}
                    }
                })
            },
            f = t.exports = {
                KEY: o,
                NEED: !1,
                fastKey: function (t, e) {
                    if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!i(t, o)) {
                        if (!c(t)) return "F";
                        if (!e) return "E";
                        u(t)
                    }
                    return t[o].i
                },
                getWeak: function (t, e) {
                    if (!i(t, o)) {
                        if (!c(t)) return !0;
                        if (!e) return !1;
                        u(t)
                    }
                    return t[o].w
                },
                onFreeze: function (t) {
                    return l && f.NEED && c(t) && !i(t, o) && u(t), t
                }
            }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function (t, e) {
        var n = 0,
            o = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36))
        }
    }, function (t, e) {
        t.exports = !1
    }, function (t, e, n) {
        var o = n(102),
            r = n(78);
        t.exports = Object.keys || function (t) {
            return o(t, r)
        }
    }, function (t, e, n) {
        var o = n(36),
            r = Math.max,
            i = Math.min;
        t.exports = function (t, e) {
            return (t = o(t)) < 0 ? r(t + e, 0) : i(t, e)
        }
    }, function (t, e, n) {
        var o = n(11),
            r = n(103),
            i = n(78),
            a = n(77)("IE_PROTO"),
            s = function () {},
            c = function () {
                var t, e = n(74)("iframe"),
                    o = i.length;
                for (e.style.display = "none", n(80).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; o--;) delete c.prototype[i[o]];
                return c()
            };
        t.exports = Object.create || function (t, e) {
            var n;
            return null !== t ? (s.prototype = o(t), n = new s, s.prototype = null, n[a] = t) : n = c(), void 0 === e ? n : r(n, e)
        }
    }, function (t, e, n) {
        var o = n(102),
            r = n(78).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function (t) {
            return o(t, r)
        }
    }, function (t, e, n) {
        var o = n(21),
            r = n(24),
            i = n(77)("IE_PROTO"),
            a = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = r(t), o(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
        }
    }, function (t, e, n) {
        var o = n(15).f,
            r = n(21),
            i = n(13)("toStringTag");
        t.exports = function (t, e, n) {
            t && !r(t = n ? t : t.prototype, i) && o(t, i, {
                configurable: !0,
                value: e
            })
        }
    }, function (t, e) {
        t.exports = {}
    }, function (t, e, n) {
        var o = n(13)("unscopables"),
            r = Array.prototype;
        null == r[o] && n(22)(r, o, {}), t.exports = function (t) {
            r[o][t] = !0
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(9),
            r = n(15),
            i = n(16),
            a = n(13)("species");
        t.exports = function (t) {
            var e = o[t];
            i && e && !e[a] && r.f(e, a, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }
    }, function (t, e) {
        t.exports = function (t, e, n, o) {
            if (!(t instanceof e) || void 0 !== o && o in t) throw TypeError(n + ": incorrect invocation!");
            return t
        }
    }, function (t, e, n) {
        var o = n(19);
        t.exports = function (t, e, n) {
            for (var r in e) o(t, r, e[r], n);
            return t
        }
    }, function (t, e, n) {
        var o = n(10);
        t.exports = function (t, e) {
            if (!o(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
            return t
        }
    }, function (t, e) {
        function n(t) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                return typeof t
            } : function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function o(e) {
            return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = o = function (t) {
                return n(t)
            } : t.exports = o = function (t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
            }, o(e)
        }
        t.exports = o
    }, function (t, e, n) {
        var o = n(34);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == o(t) ? t.split("") : Object(t)
        }
    }, function (t, e) {
        e.f = {}.propertyIsEnumerable
    }, function (t, e, n) {
        var o = n(331),
            r = n(332),
            i = n(333);
        t.exports = function (t, e) {
            return o(t) || r(t, e) || i()
        }
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(346), n(14)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s) {
            "use strict";
            var c = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = c(r), i = c(i), a = c(a), s = c(s);
            var l = function () {
                function t(e) {
                    var n = this;
                    (0, r.default)(this, t), this.iterator = null, this.activated = !1, this.allowArrows = !0, this.allowArrows = "boolean" != typeof e.allowArrows || e.allowArrows, this.iterator = new a.default(e.items, e.focusedItemClass), this.activateCallback = e.activateCallback, document.addEventListener("keydown", function (e) {
                        var o = n.isEventReadyForHandling(e);
                        if (o) switch (t.usedKeys.includes(e.keyCode) && e.preventDefault(), e.keyCode) {
                            case s.default.keyCodes.TAB:
                                n.handleTabPress(e);
                                break;
                            case s.default.keyCodes.LEFT:
                                n.flipLeft();
                                break;
                            case s.default.keyCodes.RIGHT:
                                n.flipRight();
                                break;
                            case s.default.keyCodes.ENTER:
                                n.handleEnterPress(e)
                        }
                    }, !1)
                }
                return (0, i.default)(t, [{
                    key: "activate",
                    value: function (t) {
                        this.activated = !0, t && this.iterator.setItems(t)
                    }
                }, {
                    key: "deactivate",
                    value: function () {
                        this.activated = !1, this.dropCursor()
                    }
                }, {
                    key: "focusFirst",
                    value: function () {
                        this.dropCursor(), this.flipRight()
                    }
                }, {
                    key: "dropCursor",
                    value: function () {
                        this.iterator.dropCursor()
                    }
                }, {
                    key: "isEventReadyForHandling",
                    value: function (t) {
                        var e = [s.default.keyCodes.TAB, s.default.keyCodes.ENTER];
                        return this.allowArrows && e.push(s.default.keyCodes.LEFT, s.default.keyCodes.RIGHT), !(!this.activated || -1 === e.indexOf(t.keyCode))
                    }
                }, {
                    key: "handleTabPress",
                    value: function (t) {
                        var e = t.shiftKey,
                            n = e ? a.default.directions.LEFT : a.default.directions.RIGHT;
                        switch (n) {
                            case a.default.directions.RIGHT:
                                this.flipRight();
                                break;
                            case a.default.directions.LEFT:
                                this.flipLeft()
                        }
                    }
                }, {
                    key: "flipLeft",
                    value: function () {
                        this.iterator.previous()
                    }
                }, {
                    key: "flipRight",
                    value: function () {
                        this.iterator.next()
                    }
                }, {
                    key: "handleEnterPress",
                    value: function (t) {
                        this.activated && (this.iterator.currentItem && this.iterator.currentItem.click(), "function" == typeof this.activateCallback && this.activateCallback(), t.preventDefault(), t.stopPropagation())
                    }
                }, {
                    key: "currentItem",
                    get: function () {
                        return this.iterator.currentItem
                    }
                }], [{
                    key: "usedKeys",
                    get: function () {
                        return [s.default.keyCodes.TAB, s.default.keyCodes.LEFT, s.default.keyCodes.RIGHT, s.default.keyCodes.ENTER]
                    }
                }]), t
            }();
            o.default = l, l.displayName = "Flipper", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o = n(23),
            r = n(18),
            i = n(44);
        t.exports = function (t) {
            return function (e, n, a) {
                var s, c = o(e),
                    l = r(c.length),
                    u = i(a, l);
                if (t && n != n) {
                    for (; l > u;)
                        if ((s = c[u++]) != s) return !0
                } else
                    for (; l > u; u++)
                        if ((t || u in c) && c[u] === n) return t || u || 0;
                return !t && -1
            }
        }
    }, function (t, e) {
        e.f = Object.getOwnPropertySymbols
    }, function (t, e, n) {
        var o = n(34),
            r = n(13)("toStringTag"),
            i = "Arguments" == o(function () {
                return arguments
            }());
        t.exports = function (t) {
            var e, n, a;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                try {
                    return t[e]
                } catch (t) {}
            }(e = Object(t), r)) ? n : i ? o(e) : "Object" == (a = o(e)) && "function" == typeof e.callee ? "Arguments" : a
        }
    }, function (t, e, n) {
        var o = n(0),
            r = n(35),
            i = n(8),
            a = n(82),
            s = "[" + a + "]",
            c = RegExp("^" + s + s + "*"),
            l = RegExp(s + s + "*$"),
            u = function (t, e, n) {
                var r = {},
                    s = i(function () {
                        return !!a[t]() || "​" != "​" [t]()
                    }),
                    c = r[t] = s ? e(f) : a[t];
                n && (r[n] = c), o(o.P + o.F * s, "String", r)
            },
            f = u.trim = function (t, e) {
                return t = String(r(t)), 1 & e && (t = t.replace(c, "")), 2 & e && (t = t.replace(l, "")), t
            };
        t.exports = u
    }, function (t, e, n) {
        var o = n(13)("iterator"),
            r = !1;
        try {
            var i = [7][o]();
            i.return = function () {
                r = !0
            }, Array.from(i, function () {
                throw 2
            })
        } catch (t) {}
        t.exports = function (t, e) {
            if (!e && !r) return !1;
            var n = !1;
            try {
                var i = [7],
                    a = i[o]();
                a.next = function () {
                    return {
                        done: n = !0
                    }
                }, i[o] = function () {
                    return a
                }, t(i)
            } catch (t) {}
            return n
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(22),
            r = n(19),
            i = n(8),
            a = n(35),
            s = n(13);
        t.exports = function (t, e, n) {
            var c = s(t),
                l = n(a, c, "" [t]),
                u = l[0],
                f = l[1];
            i(function () {
                var e = {};
                return e[c] = function () {
                    return 7
                }, 7 != "" [t](e)
            }) && (r(String.prototype, t, u), o(RegExp.prototype, c, 2 == e ? function (t, e) {
                return f.call(t, this, e)
            } : function (t) {
                return f.call(t, this)
            }))
        }
    }, function (t, e, n) {
        var o = n(32),
            r = n(115),
            i = n(91),
            a = n(11),
            s = n(18),
            c = n(93),
            l = {},
            u = {};
        (e = t.exports = function (t, e, n, f, d) {
            var p, h, v, g, y = d ? function () {
                    return t
                } : c(t),
                m = o(n, f, e ? 2 : 1),
                b = 0;
            if ("function" != typeof y) throw TypeError(t + " is not iterable!");
            if (i(y)) {
                for (p = s(t.length); p > b; b++)
                    if ((g = e ? m(a(h = t[b])[0], h[1]) : m(t[b])) === l || g === u) return g
            } else
                for (v = y.call(t); !(h = v.next()).done;)
                    if ((g = r(v, m, h.value, e)) === l || g === u) return g
        }).BREAK = l, e.RETURN = u
    }, function (t, e, n) {
        var o = n(11),
            r = n(33),
            i = n(13)("species");
        t.exports = function (t, e) {
            var n, a = o(t).constructor;
            return void 0 === a || null == (n = o(a)[i]) ? e : r(n)
        }
    }, function (t, e, n) {
        var o = n(9).navigator;
        t.exports = o && o.userAgent || ""
    }, function (t, e, n) {
        "use strict";
        var o = n(9),
            r = n(0),
            i = n(19),
            a = n(53),
            s = n(39),
            c = n(66),
            l = n(52),
            u = n(10),
            f = n(8),
            d = n(64),
            p = n(48),
            h = n(83);
        t.exports = function (t, e, n, v, g, y) {
            var m = o[t],
                b = m,
                k = g ? "set" : "add",
                x = b && b.prototype,
                S = {},
                w = function (t) {
                    var e = x[t];
                    i(x, t, "delete" == t ? function (t) {
                        return !(y && !u(t)) && e.call(this, 0 === t ? 0 : t)
                    } : "has" == t ? function (t) {
                        return !(y && !u(t)) && e.call(this, 0 === t ? 0 : t)
                    } : "get" == t ? function (t) {
                        return y && !u(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
                    } : "add" == t ? function (t) {
                        return e.call(this, 0 === t ? 0 : t), this
                    } : function (t, n) {
                        return e.call(this, 0 === t ? 0 : t, n), this
                    })
                };
            if ("function" == typeof b && (y || x.forEach && !f(function () {
                    (new b).entries().next()
                }))) {
                var E = new b,
                    T = E[k](y ? {} : -0, 1) != E,
                    B = f(function () {
                        E.has(1)
                    }),
                    C = d(function (t) {
                        new b(t)
                    }),
                    _ = !y && f(function () {
                        for (var t = new b, e = 5; e--;) t[k](e, e);
                        return !t.has(-0)
                    });
                C || ((b = e(function (e, n) {
                    l(e, b, t);
                    var o = h(new m, e, b);
                    return null != n && c(n, g, o[k], o), o
                })).prototype = x, x.constructor = b), (B || _) && (w("delete"), w("has"), g && w("get")), (_ || T) && w(k), y && x.clear && delete x.clear
            } else b = v.getConstructor(e, t, g, k), a(b.prototype, n), s.NEED = !0;
            return p(b, t), S[t] = b, r(r.G + r.W + r.F * (b != m), S), y || v.setStrong(b, t, g), b
        }
    }, function (t, e, n) {
        for (var o, r = n(9), i = n(22), a = n(41), s = a("typed_array"), c = a("view"), l = !(!r.ArrayBuffer || !r.DataView), u = l, f = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(o = r[d[f++]]) ? (i(o.prototype, s, !0), i(o.prototype, c, !0)) : u = !1;
        t.exports = {
            ABV: l,
            CONSTR: u,
            TYPED: s,
            VIEW: c
        }
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l) {
            "use strict";
            var u = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c);
            var f = function (t) {
                function e() {
                    return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments))
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "methods",
                    get: function () {
                        return {
                            blocks: this.Editor.BlocksAPI.methods,
                            caret: this.Editor.CaretAPI.methods,
                            events: this.Editor.EventsAPI.methods,
                            listeners: this.Editor.ListenersAPI.methods,
                            notifier: this.Editor.NotifierAPI.methods,
                            sanitizer: this.Editor.SanitizerAPI.methods,
                            saver: this.Editor.SaverAPI.methods,
                            selection: this.Editor.SelectionAPI.methods,
                            styles: this.Editor.StylesAPI.classes,
                            toolbar: this.Editor.ToolbarAPI.methods,
                            inlineToolbar: this.Editor.InlineToolbarAPI.methods
                        }
                    }
                }]), e
            }((l = u(l)).default);
            o.default = f, f.displayName = "API", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(99), n(26), n(27), n(1), n(2), n(12), n(14), n(347), n(348), n(349), n(28)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d, p, h) {
            "use strict";
            var v = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = v(r), i = v(i), a = v(a), s = v(s), c = v(c), l = v(l), u = v(u), f = v(f), d = v(d), p = v(p), h = v(h);
            var g = function () {
                function t(e, n, o, r, i) {
                    var a = this;
                    (0, s.default)(this, t), this.cachedInputs = [], this.inputIndex = 0, this.didMutated = function () {
                        a.cachedInputs = [], a.updateCurrentInput()
                    }, this.name = e, this.tool = n, this.class = o, this.settings = r, this.api = i, this.holder = this.compose(), this.mutationObserver = new MutationObserver(this.didMutated), this.tunes = this.makeTunes()
                }
                var e, n, o;
                return (0, c.default)(t, [{
                    key: "call",
                    value: function (t, e) {
                        this.tool[t] && this.tool[t] instanceof Function && this.tool[t].call(this.tool, e)
                    }
                }, {
                    key: "mergeWith",
                    value: (o = (0, a.default)(i.default.mark(function t(e) {
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.tool.merge(e);
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "save",
                    value: (n = (0, a.default)(i.default.mark(function t() {
                        var e, n, o, r = this;
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.tool.save(this.pluginsContent);
                                case 2:
                                    return e = t.sent, n = window.performance.now(), t.abrupt("return", Promise.resolve(e).then(function (t) {
                                        return o = window.performance.now(), {
                                            tool: r.name,
                                            data: t,
                                            time: o - n
                                        }
                                    }).catch(function (t) {
                                        u.default.log("Saving proccess for ".concat(r.name, " tool failed due to the ").concat(t), "log", "red")
                                    }));
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "validate",
                    value: (e = (0, a.default)(i.default.mark(function t(e) {
                        var n;
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = !0, !(this.tool.validate instanceof Function)) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 4, this.tool.validate(e);
                                case 4:
                                    n = t.sent;
                                case 5:
                                    return t.abrupt("return", n);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return e.apply(this, arguments)
                    })
                }, {
                    key: "makeTunes",
                    value: function () {
                        var t = this,
                            e = [f.default, d.default, p.default];
                        return e.map(function (e) {
                            return new e({
                                api: t.api,
                                settings: t.settings
                            })
                        })
                    }
                }, {
                    key: "renderTunes",
                    value: function () {
                        var t = document.createDocumentFragment();
                        return this.tunes.forEach(function (e) {
                            l.default.append(t, e.render())
                        }), t
                    }
                }, {
                    key: "updateCurrentInput",
                    value: function () {
                        this.currentInput = h.default.anchorNode
                    }
                }, {
                    key: "willSelect",
                    value: function () {
                        this.mutationObserver.observe(this.holder, {
                            childList: !0,
                            subtree: !0
                        })
                    }
                }, {
                    key: "willUnselect",
                    value: function () {
                        this.mutationObserver.disconnect()
                    }
                }, {
                    key: "compose",
                    value: function () {
                        var e = l.default.make("div", t.CSS.wrapper),
                            n = l.default.make("div", t.CSS.content),
                            o = this.tool.render();
                        return n.appendChild(o), e.appendChild(n), e
                    }
                }, {
                    key: "inputs",
                    get: function () {
                        if (0 !== this.cachedInputs.length) return this.cachedInputs;
                        var t = this.holder,
                            e = "[contenteditable], textarea, input:not([type]), " + ["text", "password", "email", "number", "search", "tel", "url"].map(function (t) {
                                return 'input[type="'.concat(t, '"]')
                            }).join(", "),
                            n = u.default.array(t.querySelectorAll(e));
                        return n = n.reduce(function (t, e) {
                            return l.default.isNativeInput(e) || l.default.containsOnlyInlineElements(e) ? [].concat((0, r.default)(t), [e]) : [].concat((0, r.default)(t), (0, r.default)(l.default.getDeepestBlockElements(e)))
                        }, []), this.inputIndex > n.length - 1 && (this.inputIndex = n.length - 1), this.cachedInputs = n, n
                    }
                }, {
                    key: "currentInput",
                    get: function () {
                        return this.inputs[this.inputIndex]
                    },
                    set: function (t) {
                        var e = this.inputs.findIndex(function (e) {
                            return e === t || e.contains(t)
                        }); - 1 !== e && (this.inputIndex = e)
                    }
                }, {
                    key: "firstInput",
                    get: function () {
                        return this.inputs[0]
                    }
                }, {
                    key: "lastInput",
                    get: function () {
                        var t = this.inputs;
                        return t[t.length - 1]
                    }
                }, {
                    key: "nextInput",
                    get: function () {
                        return this.inputs[this.inputIndex + 1]
                    }
                }, {
                    key: "previousInput",
                    get: function () {
                        return this.inputs[this.inputIndex - 1]
                    }
                }, {
                    key: "pluginsContent",
                    get: function () {
                        var e = this.holder.querySelector(".".concat(t.CSS.content));
                        return e && e.childNodes.length ? e.childNodes[0] : null
                    }
                }, {
                    key: "data",
                    get: function () {
                        return this.save().then(function (t) {
                            return t && !u.default.isEmpty(t.data) ? t.data : {}
                        })
                    }
                }, {
                    key: "sanitize",
                    get: function () {
                        return this.tool.sanitize
                    }
                }, {
                    key: "mergeable",
                    get: function () {
                        return "function" == typeof this.tool.merge
                    }
                }, {
                    key: "isEmpty",
                    get: function () {
                        var t = l.default.isEmpty(this.pluginsContent),
                            e = !this.hasMedia;
                        return t && e
                    }
                }, {
                    key: "hasMedia",
                    get: function () {
                        return !!this.holder.querySelector(["img", "iframe", "video", "audio", "source", "input", "textarea", "twitterwidget"].join(","))
                    }
                }, {
                    key: "focused",
                    set: function (e) {
                        this.holder.classList.toggle(t.CSS.focused, e)
                    }
                }, {
                    key: "selected",
                    set: function (e) {
                        e ? this.holder.classList.add(t.CSS.selected) : this.holder.classList.remove(t.CSS.selected)
                    },
                    get: function () {
                        return this.holder.classList.contains(t.CSS.selected)
                    }
                }, {
                    key: "stretched",
                    set: function (e) {
                        this.holder.classList.toggle(t.CSS.wrapperStretched, e)
                    }
                }, {
                    key: "dropTarget",
                    set: function (e) {
                        this.holder.classList.toggle(t.CSS.dropTarget, e)
                    }
                }], [{
                    key: "CSS",
                    get: function () {
                        return {
                            wrapper: "ce-block",
                            wrapperStretched: "ce-block--stretched",
                            content: "ce-block__content",
                            focused: "ce-block--focused",
                            selected: "ce-block--selected",
                            dropTarget: "ce-block--drop-target"
                        }
                    }
                }]), t
            }();
            o.default = g, g.displayName = "Block", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(12), n(14)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f) {
            "use strict";
            var d = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), c = d(c), l = d(l), u = d(u), f = d(f);
            var p = function (t) {
                function e() {
                    var t;
                    return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).nodes = {
                        wrapper: null,
                        content: null,
                        actions: null,
                        plusButton: null,
                        blockActionsButtons: null,
                        settingsToggler: null
                    }, t
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "make",
                    value: function () {
                        var t = this;
                        this.nodes.wrapper = u.default.make("div", this.CSS.toolbar), ["content", "actions"].forEach(function (e) {
                            t.nodes[e] = u.default.make("div", t.CSS[e]), u.default.append(t.nodes.wrapper, t.nodes[e])
                        }), this.nodes.plusButton = u.default.make("div", this.CSS.plusButton), this.Editor.Listeners.on(this.nodes.plusButton, "mouseenter", function () {
                            var e = t.Editor.Toolbox.nodes.tooltip,
                                n = document.createDocumentFragment();
                            n.appendChild(document.createTextNode("Add")), n.appendChild(u.default.make("div", t.Editor.Toolbox.CSS.tooltipShortcut, {
                                textContent: "⇥ Tab"
                            })), e.style.left = "-17px", e.innerHTML = "", e.appendChild(n), e.classList.add(t.Editor.Toolbox.CSS.tooltipShown)
                        }), this.Editor.Listeners.on(this.nodes.plusButton, "mouseleave", function () {
                            t.Editor.Toolbox.hideTooltip()
                        }), u.default.append(this.nodes.plusButton, u.default.svg("plus", 14, 14)), u.default.append(this.nodes.content, this.nodes.plusButton), this.Editor.Listeners.on(this.nodes.plusButton, "click", function () {
                            return t.plusButtonClicked()
                        }, !1), this.Editor.Toolbox.make(), this.nodes.blockActionsButtons = u.default.make("div", this.CSS.blockActionsButtons), this.nodes.settingsToggler = u.default.make("span", this.CSS.settingsToggler);
                        var e = u.default.svg("dots", 18, 4);
                        u.default.append(this.nodes.settingsToggler, e), u.default.append(this.nodes.blockActionsButtons, this.nodes.settingsToggler), u.default.append(this.nodes.actions, this.nodes.blockActionsButtons), this.Editor.BlockSettings.make(), u.default.append(this.nodes.actions, this.Editor.BlockSettings.nodes.wrapper), u.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.bindEvents()
                    }
                }, {
                    key: "move",
                    value: function () {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        t && (this.Editor.Toolbox.close(), this.Editor.BlockSettings.close());
                        var e = this.Editor.BlockManager.currentBlock.holder;
                        if (e) {
                            var n = this.Editor.UI.isMobile,
                                o = e.offsetHeight,
                                r = e.offsetTop;
                            if (n) r += o;
                            else {
                                var i = Math.floor(o / 2);
                                this.nodes.plusButton.style.transform = "translate3d(0, calc(".concat(i, "px - 50%), 0)"), this.Editor.Toolbox.nodes.toolbox.style.transform = "translate3d(0, calc(".concat(i, "px - 50%), 0)")
                            }
                            this.nodes.wrapper.style.transform = "translate3D(0, ".concat(Math.floor(r), "px, 0)")
                        }
                    }
                }, {
                    key: "open",
                    value: function () {
                        var t = this,
                            e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        f.default.delay(function () {
                            t.move(n), t.nodes.wrapper.classList.add(t.CSS.toolbarOpened), e ? t.blockActions.show() : t.blockActions.hide()
                        }, 50)()
                    }
                }, {
                    key: "close",
                    value: function () {
                        this.nodes.wrapper.classList.remove(this.CSS.toolbarOpened), this.blockActions.hide(), this.Editor.Toolbox.close(), this.Editor.BlockSettings.close()
                    }
                }, {
                    key: "plusButtonClicked",
                    value: function () {
                        this.Editor.Toolbox.toggle()
                    }
                }, {
                    key: "bindEvents",
                    value: function () {
                        var t = this;
                        this.Editor.Listeners.on(this.nodes.settingsToggler, "click", function () {
                            return t.settingsTogglerClicked()
                        })
                    }
                }, {
                    key: "settingsTogglerClicked",
                    value: function () {
                        this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.BlockSettings.open()
                    }
                }, {
                    key: "CSS",
                    get: function () {
                        return {
                            toolbar: "ce-toolbar",
                            content: "ce-toolbar__content",
                            actions: "ce-toolbar__actions",
                            actionsOpened: "ce-toolbar__actions--opened",
                            toolbarOpened: "ce-toolbar--opened",
                            plusButton: "ce-toolbar__plus",
                            plusButtonHidden: "ce-toolbar__plus--hidden",
                            blockActionsButtons: "ce-toolbar__actions-buttons",
                            settingsToggler: "ce-toolbar__settings-btn"
                        }
                    }
                }, {
                    key: "opened",
                    get: function () {
                        return this.nodes.wrapper.classList.contains(this.CSS.toolbarOpened)
                    }
                }, {
                    key: "plusButton",
                    get: function () {
                        var t = this;
                        return {
                            hide: function () {
                                return t.nodes.plusButton.classList.add(t.CSS.plusButtonHidden)
                            },
                            show: function () {
                                t.Editor.Toolbox.isEmpty || t.nodes.plusButton.classList.remove(t.CSS.plusButtonHidden)
                            }
                        }
                    }
                }, {
                    key: "blockActions",
                    get: function () {
                        var t = this;
                        return {
                            hide: function () {
                                t.nodes.actions.classList.remove(t.CSS.actionsOpened)
                            },
                            show: function () {
                                t.nodes.actions.classList.add(t.CSS.actionsOpened)
                            }
                        }
                    }
                }]), e
            }(l.default);
            o.default = p, p.displayName = "Toolbar", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o = n(10),
            r = n(9).document,
            i = o(r) && o(r.createElement);
        t.exports = function (t) {
            return i ? r.createElement(t) : {}
        }
    }, function (t, e, n) {
        var o = n(17),
            r = n(9),
            i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        (t.exports = function (t, e) {
            return i[t] || (i[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: o.version,
            mode: n(42) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function (t, e, n) {
        e.f = n(13)
    }, function (t, e, n) {
        var o = n(75)("keys"),
            r = n(41);
        t.exports = function (t) {
            return o[t] || (o[t] = r(t))
        }
    }, function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function (t, e, n) {
        var o = n(34);
        t.exports = Array.isArray || function (t) {
            return "Array" == o(t)
        }
    }, function (t, e, n) {
        var o = n(9).document;
        t.exports = o && o.documentElement
    }, function (t, e, n) {
        var o = n(10),
            r = n(11),
            i = function (t, e) {
                if (r(t), !o(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
            };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, e, o) {
                try {
                    (o = n(32)(Function.call, n(29).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
                } catch (t) {
                    e = !0
                }
                return function (t, n) {
                    return i(t, n), e ? t.__proto__ = n : o(t, n), t
                }
            }({}, !1) : void 0),
            check: i
        }
    }, function (t, e) {
        t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    }, function (t, e, n) {
        var o = n(10),
            r = n(81).set;
        t.exports = function (t, e, n) {
            var i, a = e.constructor;
            return a !== n && "function" == typeof a && (i = a.prototype) !== n.prototype && o(i) && r && r(t, i), t
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(36),
            r = n(35);
        t.exports = function (t) {
            var e = String(r(this)),
                n = "",
                i = o(t);
            if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
            for (; i > 0;
                (i >>>= 1) && (e += e)) 1 & i && (n += e);
            return n
        }
    }, function (t, e) {
        t.exports = Math.sign || function (t) {
            return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
        }
    }, function (t, e) {
        var n = Math.expm1;
        t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function (t) {
            return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
        } : n
    }, function (t, e, n) {
        "use strict";
        var o = n(42),
            r = n(0),
            i = n(19),
            a = n(22),
            s = n(49),
            c = n(114),
            l = n(48),
            u = n(47),
            f = n(13)("iterator"),
            d = !([].keys && "next" in [].keys()),
            p = function () {
                return this
            };
        t.exports = function (t, e, n, h, v, g, y) {
            c(n, e, h);
            var m, b, k, x = function (t) {
                    if (!d && t in T) return T[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, t)
                            }
                    }
                    return function () {
                        return new n(this, t)
                    }
                },
                S = e + " Iterator",
                w = "values" == v,
                E = !1,
                T = t.prototype,
                B = T[f] || T["@@iterator"] || v && T[v],
                C = B || x(v),
                _ = v ? w ? x("entries") : C : void 0,
                I = "Array" == e && T.entries || B;
            if (I && (k = u(I.call(new t))) !== Object.prototype && k.next && (l(k, S, !0), o || "function" == typeof k[f] || a(k, f, p)), w && B && "values" !== B.name && (E = !0, C = function () {
                    return B.call(this)
                }), o && !y || !d && !E && T[f] || a(T, f, C), s[e] = C, s[S] = p, v)
                if (m = {
                        values: w ? C : x("values"),
                        keys: g ? C : x("keys"),
                        entries: _
                    }, y)
                    for (b in m) b in T || i(T, b, m[b]);
                else r(r.P + r.F * (d || E), e, m);
            return m
        }
    }, function (t, e, n) {
        var o = n(89),
            r = n(35);
        t.exports = function (t, e, n) {
            if (o(e)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(r(t))
        }
    }, function (t, e, n) {
        var o = n(10),
            r = n(34),
            i = n(13)("match");
        t.exports = function (t) {
            var e;
            return o(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == r(t))
        }
    }, function (t, e, n) {
        var o = n(13)("match");
        t.exports = function (t) {
            var e = /./;
            try {
                "/./" [t](e)
            } catch (n) {
                try {
                    return e[o] = !1, !"/./" [t](e)
                } catch (t) {}
            }
            return !0
        }
    }, function (t, e, n) {
        var o = n(49),
            r = n(13)("iterator"),
            i = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (o.Array === t || i[r] === t)
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(15),
            r = n(40);
        t.exports = function (t, e, n) {
            e in t ? o.f(t, e, r(0, n)) : t[e] = n
        }
    }, function (t, e, n) {
        var o = n(62),
            r = n(13)("iterator"),
            i = n(49);
        t.exports = n(17).getIteratorMethod = function (t) {
            if (null != t) return t[r] || t["@@iterator"] || i[o(t)]
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(24),
            r = n(44),
            i = n(18);
        t.exports = function (t) {
            for (var e = o(this), n = i(e.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, n), c = a > 2 ? arguments[2] : void 0, l = void 0 === c ? n : r(c, n); l > s;) e[s++] = t;
            return e
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(50),
            r = n(118),
            i = n(49),
            a = n(23);
        t.exports = n(87)(Array, "Array", function (t, e) {
            this._t = a(t), this._i = 0, this._k = e
        }, function () {
            var t = this._t,
                e = this._k,
                n = this._i++;
            return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
        }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
    }, function (t, e, n) {
        "use strict";
        var o = n(11);
        t.exports = function () {
            var t = o(this),
                e = "";
            return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
        }
    }, function (t, e, n) {
        var o, r, i, a = n(32),
            s = n(107),
            c = n(80),
            l = n(74),
            u = n(9),
            f = u.process,
            d = u.setImmediate,
            p = u.clearImmediate,
            h = u.MessageChannel,
            v = u.Dispatch,
            g = 0,
            y = {},
            m = function () {
                var t = +this;
                if (y.hasOwnProperty(t)) {
                    var e = y[t];
                    delete y[t], e()
                }
            },
            b = function (t) {
                m.call(t.data)
            };
        d && p || (d = function (t) {
            for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
            return y[++g] = function () {
                s("function" == typeof t ? t : Function(t), e)
            }, o(g), g
        }, p = function (t) {
            delete y[t]
        }, "process" == n(34)(f) ? o = function (t) {
            f.nextTick(a(m, t, 1))
        } : v && v.now ? o = function (t) {
            v.now(a(m, t, 1))
        } : h ? (i = (r = new h).port2, r.port1.onmessage = b, o = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (o = function (t) {
            u.postMessage(t + "", "*")
        }, u.addEventListener("message", b, !1)) : o = "onreadystatechange" in l("script") ? function (t) {
            c.appendChild(l("script")).onreadystatechange = function () {
                c.removeChild(this), m.call(t)
            }
        } : function (t) {
            setTimeout(a(m, t, 1), 0)
        }), t.exports = {
            set: d,
            clear: p
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(9),
            r = n(16),
            i = n(42),
            a = n(70),
            s = n(22),
            c = n(53),
            l = n(8),
            u = n(52),
            f = n(36),
            d = n(18),
            p = n(125),
            h = n(46).f,
            v = n(15).f,
            g = n(94),
            y = n(48),
            m = "prototype",
            b = "Wrong index!",
            k = o.ArrayBuffer,
            x = o.DataView,
            S = o.Math,
            w = o.RangeError,
            E = o.Infinity,
            T = k,
            B = S.abs,
            C = S.pow,
            _ = S.floor,
            I = S.log,
            N = S.LN2,
            O = r ? "_b" : "buffer",
            M = r ? "_l" : "byteLength",
            L = r ? "_o" : "byteOffset";

        function A(t, e, n) {
            var o, r, i, a = new Array(n),
                s = 8 * n - e - 1,
                c = (1 << s) - 1,
                l = c >> 1,
                u = 23 === e ? C(2, -24) - C(2, -77) : 0,
                f = 0,
                d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for ((t = B(t)) != t || t === E ? (r = t != t ? 1 : 0, o = c) : (o = _(I(t) / N), t * (i = C(2, -o)) < 1 && (o--, i *= 2), (t += o + l >= 1 ? u / i : u * C(2, 1 - l)) * i >= 2 && (o++, i /= 2), o + l >= c ? (r = 0, o = c) : o + l >= 1 ? (r = (t * i - 1) * C(2, e), o += l) : (r = t * C(2, l - 1) * C(2, e), o = 0)); e >= 8; a[f++] = 255 & r, r /= 256, e -= 8);
            for (o = o << e | r, s += e; s > 0; a[f++] = 255 & o, o /= 256, s -= 8);
            return a[--f] |= 128 * d, a
        }

        function P(t, e, n) {
            var o, r = 8 * n - e - 1,
                i = (1 << r) - 1,
                a = i >> 1,
                s = r - 7,
                c = n - 1,
                l = t[c--],
                u = 127 & l;
            for (l >>= 7; s > 0; u = 256 * u + t[c], c--, s -= 8);
            for (o = u & (1 << -s) - 1, u >>= -s, s += e; s > 0; o = 256 * o + t[c], c--, s -= 8);
            if (0 === u) u = 1 - a;
            else {
                if (u === i) return o ? NaN : l ? -E : E;
                o += C(2, e), u -= a
            }
            return (l ? -1 : 1) * o * C(2, u - e)
        }

        function R(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        }

        function z(t) {
            return [255 & t]
        }

        function j(t) {
            return [255 & t, t >> 8 & 255]
        }

        function F(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        }

        function D(t) {
            return A(t, 52, 8)
        }

        function U(t) {
            return A(t, 23, 4)
        }

        function H(t, e, n) {
            v(t[m], e, {
                get: function () {
                    return this[n]
                }
            })
        }

        function G(t, e, n, o) {
            var r = p(+n);
            if (r + e > t[M]) throw w(b);
            var i = t[O]._b,
                a = r + t[L],
                s = i.slice(a, a + e);
            return o ? s : s.reverse()
        }

        function W(t, e, n, o, r, i) {
            var a = p(+n);
            if (a + e > t[M]) throw w(b);
            for (var s = t[O]._b, c = a + t[L], l = o(+r), u = 0; u < e; u++) s[c + u] = l[i ? u : e - u - 1]
        }
        if (a.ABV) {
            if (!l(function () {
                    k(1)
                }) || !l(function () {
                    new k(-1)
                }) || l(function () {
                    return new k, new k(1.5), new k(NaN), "ArrayBuffer" != k.name
                })) {
                for (var X, Y = (k = function (t) {
                        return u(this, k), new T(p(t))
                    })[m] = T[m], V = h(T), K = 0; V.length > K;)(X = V[K++]) in k || s(k, X, T[X]);
                i || (Y.constructor = k)
            }
            var Z = new x(new k(2)),
                q = x[m].setInt8;
            Z.setInt8(0, 2147483648), Z.setInt8(1, 2147483649), !Z.getInt8(0) && Z.getInt8(1) || c(x[m], {
                setInt8: function (t, e) {
                    q.call(this, t, e << 24 >> 24)
                },
                setUint8: function (t, e) {
                    q.call(this, t, e << 24 >> 24)
                }
            }, !0)
        } else k = function (t) {
            u(this, k, "ArrayBuffer");
            var e = p(t);
            this._b = g.call(new Array(e), 0), this[M] = e
        }, x = function (t, e, n) {
            u(this, x, "DataView"), u(t, k, "DataView");
            var o = t[M],
                r = f(e);
            if (r < 0 || r > o) throw w("Wrong offset!");
            if (r + (n = void 0 === n ? o - r : d(n)) > o) throw w("Wrong length!");
            this[O] = t, this[L] = r, this[M] = n
        }, r && (H(k, "byteLength", "_l"), H(x, "buffer", "_b"), H(x, "byteLength", "_l"), H(x, "byteOffset", "_o")), c(x[m], {
            getInt8: function (t) {
                return G(this, 1, t)[0] << 24 >> 24
            },
            getUint8: function (t) {
                return G(this, 1, t)[0]
            },
            getInt16: function (t) {
                var e = G(this, 2, t, arguments[1]);
                return (e[1] << 8 | e[0]) << 16 >> 16
            },
            getUint16: function (t) {
                var e = G(this, 2, t, arguments[1]);
                return e[1] << 8 | e[0]
            },
            getInt32: function (t) {
                return R(G(this, 4, t, arguments[1]))
            },
            getUint32: function (t) {
                return R(G(this, 4, t, arguments[1])) >>> 0
            },
            getFloat32: function (t) {
                return P(G(this, 4, t, arguments[1]), 23, 4)
            },
            getFloat64: function (t) {
                return P(G(this, 8, t, arguments[1]), 52, 8)
            },
            setInt8: function (t, e) {
                W(this, 1, t, z, e)
            },
            setUint8: function (t, e) {
                W(this, 1, t, z, e)
            },
            setInt16: function (t, e) {
                W(this, 2, t, j, e, arguments[2])
            },
            setUint16: function (t, e) {
                W(this, 2, t, j, e, arguments[2])
            },
            setInt32: function (t, e) {
                W(this, 4, t, F, e, arguments[2])
            },
            setUint32: function (t, e) {
                W(this, 4, t, F, e, arguments[2])
            },
            setFloat32: function (t, e) {
                W(this, 4, t, U, e, arguments[2])
            },
            setFloat64: function (t, e) {
                W(this, 8, t, D, e, arguments[2])
            }
        });
        y(k, "ArrayBuffer"), y(x, "DataView"), s(x[m], a.VIEW, !0), e.ArrayBuffer = k, e.DataView = x
    }, function (t, e, n) {
        var o = n(339),
            r = n(340),
            i = n(341);
        t.exports = function (t) {
            return o(t) || r(t) || i()
        }
    }, function (t, e, n) {
        t.exports = !n(16) && !n(8)(function () {
            return 7 != Object.defineProperty(n(74)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    }, function (t, e, n) {
        var o = n(9),
            r = n(17),
            i = n(42),
            a = n(76),
            s = n(15).f;
        t.exports = function (t) {
            var e = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
            "_" == t.charAt(0) || t in e || s(e, t, {
                value: a.f(t)
            })
        }
    }, function (t, e, n) {
        var o = n(21),
            r = n(23),
            i = n(60)(!1),
            a = n(77)("IE_PROTO");
        t.exports = function (t, e) {
            var n, s = r(t),
                c = 0,
                l = [];
            for (n in s) n != a && o(s, n) && l.push(n);
            for (; e.length > c;) o(s, n = e[c++]) && (~i(l, n) || l.push(n));
            return l
        }
    }, function (t, e, n) {
        var o = n(15),
            r = n(11),
            i = n(43);
        t.exports = n(16) ? Object.defineProperties : function (t, e) {
            r(t);
            for (var n, a = i(e), s = a.length, c = 0; s > c;) o.f(t, n = a[c++], e[n]);
            return t
        }
    }, function (t, e, n) {
        var o = n(23),
            r = n(46).f,
            i = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function (t) {
            return a && "[object Window]" == i.call(t) ? function (t) {
                try {
                    return r(t)
                } catch (t) {
                    return a.slice()
                }
            }(t) : r(o(t))
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(43),
            r = n(61),
            i = n(57),
            a = n(24),
            s = n(56),
            c = Object.assign;
        t.exports = !c || n(8)(function () {
            var t = {},
                e = {},
                n = Symbol(),
                o = "abcdefghijklmnopqrst";
            return t[n] = 7, o.split("").forEach(function (t) {
                e[t] = t
            }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != o
        }) ? function (t, e) {
            for (var n = a(t), c = arguments.length, l = 1, u = r.f, f = i.f; c > l;)
                for (var d, p = s(arguments[l++]), h = u ? o(p).concat(u(p)) : o(p), v = h.length, g = 0; v > g;) f.call(p, d = h[g++]) && (n[d] = p[d]);
            return n
        } : c
    }, function (t, e, n) {
        "use strict";
        var o = n(33),
            r = n(10),
            i = n(107),
            a = [].slice,
            s = {};
        t.exports = Function.bind || function (t) {
            var e = o(this),
                n = a.call(arguments, 1),
                c = function () {
                    var o = n.concat(a.call(arguments));
                    return this instanceof c ? function (t, e, n) {
                        if (!(e in s)) {
                            for (var o = [], r = 0; r < e; r++) o[r] = "a[" + r + "]";
                            s[e] = Function("F,a", "return new F(" + o.join(",") + ")")
                        }
                        return s[e](t, n)
                    }(e, o.length, o) : i(e, o, t)
                };
            return r(e.prototype) && (c.prototype = e.prototype), c
        }
    }, function (t, e) {
        t.exports = function (t, e, n) {
            var o = void 0 === n;
            switch (e.length) {
                case 0:
                    return o ? t() : t.call(n);
                case 1:
                    return o ? t(e[0]) : t.call(n, e[0]);
                case 2:
                    return o ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                case 3:
                    return o ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
                case 4:
                    return o ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
            }
            return t.apply(n, e)
        }
    }, function (t, e, n) {
        var o = n(9).parseInt,
            r = n(63).trim,
            i = n(82),
            a = /^[-+]?0[xX]/;
        t.exports = 8 !== o(i + "08") || 22 !== o(i + "0x16") ? function (t, e) {
            var n = r(String(t), 3);
            return o(n, e >>> 0 || (a.test(n) ? 16 : 10))
        } : o
    }, function (t, e, n) {
        var o = n(9).parseFloat,
            r = n(63).trim;
        t.exports = 1 / o(n(82) + "-0") != -1 / 0 ? function (t) {
            var e = r(String(t), 3),
                n = o(e);
            return 0 === n && "-" == e.charAt(0) ? -0 : n
        } : o
    }, function (t, e, n) {
        var o = n(34);
        t.exports = function (t, e) {
            if ("number" != typeof t && "Number" != o(t)) throw TypeError(e);
            return +t
        }
    }, function (t, e, n) {
        var o = n(10),
            r = Math.floor;
        t.exports = function (t) {
            return !o(t) && isFinite(t) && r(t) === t
        }
    }, function (t, e) {
        t.exports = Math.log1p || function (t) {
            return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
        }
    }, function (t, e, n) {
        var o = n(36),
            r = n(35);
        t.exports = function (t) {
            return function (e, n) {
                var i, a, s = String(r(e)),
                    c = o(n),
                    l = s.length;
                return c < 0 || c >= l ? t ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === l || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : i : t ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536
            }
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(45),
            r = n(40),
            i = n(48),
            a = {};
        n(22)(a, n(13)("iterator"), function () {
            return this
        }), t.exports = function (t, e, n) {
            t.prototype = o(a, {
                next: r(1, n)
            }), i(t, e + " Iterator")
        }
    }, function (t, e, n) {
        var o = n(11);
        t.exports = function (t, e, n, r) {
            try {
                return r ? e(o(n)[0], n[1]) : e(n)
            } catch (e) {
                var i = t.return;
                throw void 0 !== i && o(i.call(t)), e
            }
        }
    }, function (t, e, n) {
        var o = n(33),
            r = n(24),
            i = n(56),
            a = n(18);
        t.exports = function (t, e, n, s, c) {
            o(e);
            var l = r(t),
                u = i(l),
                f = a(l.length),
                d = c ? f - 1 : 0,
                p = c ? -1 : 1;
            if (n < 2)
                for (;;) {
                    if (d in u) {
                        s = u[d], d += p;
                        break
                    }
                    if (d += p, c ? d < 0 : f <= d) throw TypeError("Reduce of empty array with no initial value")
                }
            for (; c ? d >= 0 : f > d; d += p) d in u && (s = e(s, u[d], d, l));
            return s
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(24),
            r = n(44),
            i = n(18);
        t.exports = [].copyWithin || function (t, e) {
            var n = o(this),
                a = i(n.length),
                s = r(t, a),
                c = r(e, a),
                l = arguments.length > 2 ? arguments[2] : void 0,
                u = Math.min((void 0 === l ? a : r(l, a)) - c, a - s),
                f = 1;
            for (c < s && s < c + u && (f = -1, c += u - 1, s += u - 1); u-- > 0;) c in n ? n[s] = n[c] : delete n[s], s += f, c += f;
            return n
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            return {
                value: e,
                done: !!t
            }
        }
    }, function (t, e, n) {
        n(16) && "g" != /./g.flags && n(15).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: n(96)
        })
    }, function (t, e, n) {
        "use strict";
        var o, r, i, a, s = n(42),
            c = n(9),
            l = n(32),
            u = n(62),
            f = n(0),
            d = n(10),
            p = n(33),
            h = n(52),
            v = n(66),
            g = n(67),
            y = n(97).set,
            m = n(279)(),
            b = n(121),
            k = n(280),
            x = n(68),
            S = n(122),
            w = c.TypeError,
            E = c.process,
            T = E && E.versions,
            B = T && T.v8 || "",
            C = c.Promise,
            _ = "process" == u(E),
            I = function () {},
            N = r = b.f,
            O = !! function () {
                try {
                    var t = C.resolve(1),
                        e = (t.constructor = {})[n(13)("species")] = function (t) {
                            t(I, I)
                        };
                    return (_ || "function" == typeof PromiseRejectionEvent) && t.then(I) instanceof e && 0 !== B.indexOf("6.6") && -1 === x.indexOf("Chrome/66")
                } catch (t) {}
            }(),
            M = function (t) {
                var e;
                return !(!d(t) || "function" != typeof (e = t.then)) && e
            },
            L = function (t, e) {
                if (!t._n) {
                    t._n = !0;
                    var n = t._c;
                    m(function () {
                        for (var o = t._v, r = 1 == t._s, i = 0, a = function (e) {
                                var n, i, a, s = r ? e.ok : e.fail,
                                    c = e.resolve,
                                    l = e.reject,
                                    u = e.domain;
                                try {
                                    s ? (r || (2 == t._h && R(t), t._h = 1), !0 === s ? n = o : (u && u.enter(), n = s(o), u && (u.exit(), a = !0)), n === e.promise ? l(w("Promise-chain cycle")) : (i = M(n)) ? i.call(n, c, l) : c(n)) : l(o)
                                } catch (t) {
                                    u && !a && u.exit(), l(t)
                                }
                            }; n.length > i;) a(n[i++]);
                        t._c = [], t._n = !1, e && !t._h && A(t)
                    })
                }
            },
            A = function (t) {
                y.call(c, function () {
                    var e, n, o, r = t._v,
                        i = P(t);
                    if (i && (e = k(function () {
                            _ ? E.emit("unhandledRejection", r, t) : (n = c.onunhandledrejection) ? n({
                                promise: t,
                                reason: r
                            }) : (o = c.console) && o.error && o.error("Unhandled promise rejection", r)
                        }), t._h = _ || P(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
                })
            },
            P = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            },
            R = function (t) {
                y.call(c, function () {
                    var e;
                    _ ? E.emit("rejectionHandled", t) : (e = c.onrejectionhandled) && e({
                        promise: t,
                        reason: t._v
                    })
                })
            },
            z = function (t) {
                var e = this;
                e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), L(e, !0))
            },
            j = function (t) {
                var e, n = this;
                if (!n._d) {
                    n._d = !0, n = n._w || n;
                    try {
                        if (n === t) throw w("Promise can't be resolved itself");
                        (e = M(t)) ? m(function () {
                            var o = {
                                _w: n,
                                _d: !1
                            };
                            try {
                                e.call(t, l(j, o, 1), l(z, o, 1))
                            } catch (t) {
                                z.call(o, t)
                            }
                        }): (n._v = t, n._s = 1, L(n, !1))
                    } catch (t) {
                        z.call({
                            _w: n,
                            _d: !1
                        }, t)
                    }
                }
            };
        O || (C = function (t) {
            h(this, C, "Promise", "_h"), p(t), o.call(this);
            try {
                t(l(j, this, 1), l(z, this, 1))
            } catch (t) {
                z.call(this, t)
            }
        }, (o = function (t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = n(53)(C.prototype, {
            then: function (t, e) {
                var n = N(g(this, C));
                return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = _ ? E.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && L(this, !1), n.promise
            },
            catch: function (t) {
                return this.then(void 0, t)
            }
        }), i = function () {
            var t = new o;
            this.promise = t, this.resolve = l(j, t, 1), this.reject = l(z, t, 1)
        }, b.f = N = function (t) {
            return t === C || t === a ? new i(t) : r(t)
        }), f(f.G + f.W + f.F * !O, {
            Promise: C
        }), n(48)(C, "Promise"), n(51)("Promise"), a = n(17).Promise, f(f.S + f.F * !O, "Promise", {
            reject: function (t) {
                var e = N(this);
                return (0, e.reject)(t), e.promise
            }
        }), f(f.S + f.F * (s || !O), "Promise", {
            resolve: function (t) {
                return S(s && this === a ? C : this, t)
            }
        }), f(f.S + f.F * !(O && n(64)(function (t) {
            C.all(t).catch(I)
        })), "Promise", {
            all: function (t) {
                var e = this,
                    n = N(e),
                    o = n.resolve,
                    r = n.reject,
                    i = k(function () {
                        var n = [],
                            i = 0,
                            a = 1;
                        v(t, !1, function (t) {
                            var s = i++,
                                c = !1;
                            n.push(void 0), a++, e.resolve(t).then(function (t) {
                                c || (c = !0, n[s] = t, --a || o(n))
                            }, r)
                        }), --a || o(n)
                    });
                return i.e && r(i.v), n.promise
            },
            race: function (t) {
                var e = this,
                    n = N(e),
                    o = n.reject,
                    r = k(function () {
                        v(t, !1, function (t) {
                            e.resolve(t).then(n.resolve, o)
                        })
                    });
                return r.e && o(r.v), n.promise
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(33);

        function r(t) {
            var e, n;
            this.promise = new t(function (t, o) {
                if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
                e = t, n = o
            }), this.resolve = o(e), this.reject = o(n)
        }
        t.exports.f = function (t) {
            return new r(t)
        }
    }, function (t, e, n) {
        var o = n(11),
            r = n(10),
            i = n(121);
        t.exports = function (t, e) {
            if (o(t), r(e) && e.constructor === t) return e;
            var n = i.f(t);
            return (0, n.resolve)(e), n.promise
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(15).f,
            r = n(45),
            i = n(53),
            a = n(32),
            s = n(52),
            c = n(66),
            l = n(87),
            u = n(118),
            f = n(51),
            d = n(16),
            p = n(39).fastKey,
            h = n(54),
            v = d ? "_s" : "size",
            g = function (t, e) {
                var n, o = p(e);
                if ("F" !== o) return t._i[o];
                for (n = t._f; n; n = n.n)
                    if (n.k == e) return n
            };
        t.exports = {
            getConstructor: function (t, e, n, l) {
                var u = t(function (t, o) {
                    s(t, u, e, "_i"), t._t = e, t._i = r(null), t._f = void 0, t._l = void 0, t[v] = 0, null != o && c(o, n, t[l], t)
                });
                return i(u.prototype, {
                    clear: function () {
                        for (var t = h(this, e), n = t._i, o = t._f; o; o = o.n) o.r = !0, o.p && (o.p = o.p.n = void 0), delete n[o.i];
                        t._f = t._l = void 0, t[v] = 0
                    },
                    delete: function (t) {
                        var n = h(this, e),
                            o = g(n, t);
                        if (o) {
                            var r = o.n,
                                i = o.p;
                            delete n._i[o.i], o.r = !0, i && (i.n = r), r && (r.p = i), n._f == o && (n._f = r), n._l == o && (n._l = i), n[v]--
                        }
                        return !!o
                    },
                    forEach: function (t) {
                        h(this, e);
                        for (var n, o = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                            for (o(n.v, n.k, this); n && n.r;) n = n.p
                    },
                    has: function (t) {
                        return !!g(h(this, e), t)
                    }
                }), d && o(u.prototype, "size", {
                    get: function () {
                        return h(this, e)[v]
                    }
                }), u
            },
            def: function (t, e, n) {
                var o, r, i = g(t, e);
                return i ? i.v = n : (t._l = i = {
                    i: r = p(e, !0),
                    k: e,
                    v: n,
                    p: o = t._l,
                    n: void 0,
                    r: !1
                }, t._f || (t._f = i), o && (o.n = i), t[v]++, "F" !== r && (t._i[r] = i)), t
            },
            getEntry: g,
            setStrong: function (t, e, n) {
                l(t, e, function (t, n) {
                    this._t = h(t, e), this._k = n, this._l = void 0
                }, function () {
                    for (var t = this._k, e = this._l; e && e.r;) e = e.p;
                    return this._t && (this._l = e = e ? e.n : this._t._f) ? u(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, u(1))
                }, n ? "entries" : "values", !n, !0), f(e)
            }
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(53),
            r = n(39).getWeak,
            i = n(11),
            a = n(10),
            s = n(52),
            c = n(66),
            l = n(31),
            u = n(21),
            f = n(54),
            d = l(5),
            p = l(6),
            h = 0,
            v = function (t) {
                return t._l || (t._l = new g)
            },
            g = function () {
                this.a = []
            },
            y = function (t, e) {
                return d(t.a, function (t) {
                    return t[0] === e
                })
            };
        g.prototype = {
            get: function (t) {
                var e = y(this, t);
                if (e) return e[1]
            },
            has: function (t) {
                return !!y(this, t)
            },
            set: function (t, e) {
                var n = y(this, t);
                n ? n[1] = e : this.a.push([t, e])
            },
            delete: function (t) {
                var e = p(this.a, function (e) {
                    return e[0] === t
                });
                return ~e && this.a.splice(e, 1), !!~e
            }
        }, t.exports = {
            getConstructor: function (t, e, n, i) {
                var l = t(function (t, o) {
                    s(t, l, e, "_i"), t._t = e, t._i = h++, t._l = void 0, null != o && c(o, n, t[i], t)
                });
                return o(l.prototype, {
                    delete: function (t) {
                        if (!a(t)) return !1;
                        var n = r(t);
                        return !0 === n ? v(f(this, e)).delete(t) : n && u(n, this._i) && delete n[this._i]
                    },
                    has: function (t) {
                        if (!a(t)) return !1;
                        var n = r(t);
                        return !0 === n ? v(f(this, e)).has(t) : n && u(n, this._i)
                    }
                }), l
            },
            def: function (t, e, n) {
                var o = r(i(e), !0);
                return !0 === o ? v(t).set(e, n) : o[t._i] = n, t
            },
            ufstore: v
        }
    }, function (t, e, n) {
        var o = n(36),
            r = n(18);
        t.exports = function (t) {
            if (void 0 === t) return 0;
            var e = o(t),
                n = r(e);
            if (e !== n) throw RangeError("Wrong length!");
            return n
        }
    }, function (t, e, n) {
        var o = n(46),
            r = n(61),
            i = n(11),
            a = n(9).Reflect;
        t.exports = a && a.ownKeys || function (t) {
            var e = o.f(i(t)),
                n = r.f;
            return n ? e.concat(n(t)) : e
        }
    }, function (t, e, n) {
        var o = n(18),
            r = n(84),
            i = n(35);
        t.exports = function (t, e, n, a) {
            var s = String(i(t)),
                c = s.length,
                l = void 0 === n ? " " : String(n),
                u = o(e);
            if (u <= c || "" == l) return s;
            var f = u - c,
                d = r.call(l, Math.ceil(f / l.length));
            return d.length > f && (d = d.slice(0, f)), a ? d + s : s + d
        }
    }, function (t, e, n) {
        var o = n(43),
            r = n(23),
            i = n(57).f;
        t.exports = function (t) {
            return function (e) {
                for (var n, a = r(e), s = o(a), c = s.length, l = 0, u = []; c > l;) i.call(a, n = s[l++]) && u.push(t ? [n, a[n]] : a[n]);
                return u
            }
        }
    }, function (t, e) {
        ! function (e) {
            "use strict";
            var n, o = Object.prototype,
                r = o.hasOwnProperty,
                i = "function" == typeof Symbol ? Symbol : {},
                a = i.iterator || "@@iterator",
                s = i.asyncIterator || "@@asyncIterator",
                c = i.toStringTag || "@@toStringTag",
                l = "object" == typeof t,
                u = e.regeneratorRuntime;
            if (u) l && (t.exports = u);
            else {
                (u = e.regeneratorRuntime = l ? t.exports : {}).wrap = k;
                var f = "suspendedStart",
                    d = "suspendedYield",
                    p = "executing",
                    h = "completed",
                    v = {},
                    g = {};
                g[a] = function () {
                    return this
                };
                var y = Object.getPrototypeOf,
                    m = y && y(y(O([])));
                m && m !== o && r.call(m, a) && (g = m);
                var b = E.prototype = S.prototype = Object.create(g);
                w.prototype = b.constructor = E, E.constructor = w, E[c] = w.displayName = "GeneratorFunction", u.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
                }, u.mark = function (t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, E) : (t.__proto__ = E, c in t || (t[c] = "GeneratorFunction")), t.prototype = Object.create(b), t
                }, u.awrap = function (t) {
                    return {
                        __await: t
                    }
                }, T(B.prototype), B.prototype[s] = function () {
                    return this
                }, u.AsyncIterator = B, u.async = function (t, e, n, o) {
                    var r = new B(k(t, e, n, o));
                    return u.isGeneratorFunction(e) ? r : r.next().then(function (t) {
                        return t.done ? t.value : r.next()
                    })
                }, T(b), b[c] = "Generator", b[a] = function () {
                    return this
                }, b.toString = function () {
                    return "[object Generator]"
                }, u.keys = function (t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var o = e.pop();
                                if (o in t) return n.value = o, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, u.values = O, N.prototype = {
                    constructor: N,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(I), !t)
                            for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function o(o, r) {
                            return s.type = "throw", s.arg = t, e.next = o, r && (e.method = "next", e.arg = n), !!r
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    l = r.call(a, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!l) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), I(n), v
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var o = n.completion;
                                if ("throw" === o.type) {
                                    var r = o.arg;
                                    I(n)
                                }
                                return r
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, e, o) {
                        return this.delegate = {
                            iterator: O(t),
                            resultName: e,
                            nextLoc: o
                        }, "next" === this.method && (this.arg = n), v
                    }
                }
            }

            function k(t, e, n, o) {
                var r = e && e.prototype instanceof S ? e : S,
                    i = Object.create(r.prototype),
                    a = new N(o || []);
                return i._invoke = function (t, e, n) {
                    var o = f;
                    return function (r, i) {
                        if (o === p) throw new Error("Generator is already running");
                        if (o === h) {
                            if ("throw" === r) throw i;
                            return M()
                        }
                        for (n.method = r, n.arg = i;;) {
                            var a = n.delegate;
                            if (a) {
                                var s = C(a, n);
                                if (s) {
                                    if (s === v) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === f) throw o = h, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = p;
                            var c = x(t, e, n);
                            if ("normal" === c.type) {
                                if (o = n.done ? h : d, c.arg === v) continue;
                                return {
                                    value: c.arg,
                                    done: n.done
                                }
                            }
                            "throw" === c.type && (o = h, n.method = "throw", n.arg = c.arg)
                        }
                    }
                }(t, n, a), i
            }

            function x(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }

            function S() {}

            function w() {}

            function E() {}

            function T(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    t[e] = function (t) {
                        return this._invoke(e, t)
                    }
                })
            }

            function B(t) {
                var e;
                this._invoke = function (n, o) {
                    function i() {
                        return new Promise(function (e, i) {
                            ! function e(n, o, i, a) {
                                var s = x(t[n], t, o);
                                if ("throw" !== s.type) {
                                    var c = s.arg,
                                        l = c.value;
                                    return l && "object" == typeof l && r.call(l, "__await") ? Promise.resolve(l.__await).then(function (t) {
                                        e("next", t, i, a)
                                    }, function (t) {
                                        e("throw", t, i, a)
                                    }) : Promise.resolve(l).then(function (t) {
                                        c.value = t, i(c)
                                    }, function (t) {
                                        return e("throw", t, i, a)
                                    })
                                }
                                a(s.arg)
                            }(n, o, e, i)
                        })
                    }
                    return e = e ? e.then(i, i) : i()
                }
            }

            function C(t, e) {
                var o = t.iterator[e.method];
                if (o === n) {
                    if (e.delegate = null, "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return", e.arg = n, C(t, e), "throw" === e.method)) return v;
                        e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return v
                }
                var r = x(o, t.iterator, e.arg);
                if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, v;
                var i = r.arg;
                return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, v) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, v)
            }

            function _(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function I(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function N(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(_, this), this.reset(!0)
            }

            function O(t) {
                if (t) {
                    var e = t[a];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var o = -1,
                            i = function e() {
                                for (; ++o < t.length;)
                                    if (r.call(t, o)) return e.value = t[o], e.done = !1, e;
                                return e.value = n, e.done = !0, e
                            };
                        return i.next = i
                    }
                }
                return {
                    next: M
                }
            }

            function M() {
                return {
                    value: n,
                    done: !0
                }
            }
        }(function () {
            return this || "object" == typeof self && self
        }() || Function("return this")())
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(14)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u) {
            "use strict";
            var f = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), c = f(c), l = f(l), u = f(u);
            var d = function (t) {
                function e() {
                    var t;
                    return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).insert = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.config.initialBlock,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = arguments.length > 3 ? arguments[3] : void 0,
                            i = arguments.length > 4 ? arguments[4] : void 0;
                        t.Editor.BlockManager.insert(e, n, o, r, i)
                    }, t
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "getBlocksCount",
                    value: function () {
                        return this.Editor.BlockManager.blocks.length
                    }
                }, {
                    key: "getCurrentBlockIndex",
                    value: function () {
                        return this.Editor.BlockManager.currentBlockIndex
                    }
                }, {
                    key: "getBlockByIndex",
                    value: function (t) {
                        var e = this.Editor.BlockManager.getBlockByIndex(t);
                        return e.holder
                    }
                }, {
                    key: "swap",
                    value: function (t, e) {
                        this.Editor.BlockManager.swap(t, e), this.Editor.Toolbar.move(!1)
                    }
                }, {
                    key: "delete",
                    value: function (t) {
                        this.Editor.BlockManager.removeBlock(t), 0 === this.Editor.BlockManager.blocks.length && this.Editor.BlockManager.insert(), 0 === this.Editor.BlockManager.currentBlockIndex ? this.Editor.Caret.setToBlock(this.Editor.BlockManager.currentBlock) : this.Editor.Caret.navigatePrevious(!0), this.Editor.Toolbar.close()
                    }
                }, {
                    key: "clear",
                    value: function () {
                        this.Editor.BlockManager.clear(!0), this.Editor.InlineToolbar.close()
                    }
                }, {
                    key: "render",
                    value: function (t) {
                        return this.Editor.BlockManager.clear(), this.Editor.Renderer.render(t.blocks)
                    }
                }, {
                    key: "renderFromHTML",
                    value: function (t) {
                        return this.Editor.BlockManager.clear(), this.Editor.Paste.processText(t, !0)
                    }
                }, {
                    key: "stretchBlock",
                    value: function (t) {
                        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                            n = this.Editor.BlockManager.getBlockByIndex(t);
                        n && (n.stretched = e)
                    }
                }, {
                    key: "insertNewBlock",
                    value: function () {
                        u.default.log("Method blocks.insertNewBlock() is deprecated and it will be removed in next major release. Use blocks.insert() instead.", "warn"), this.insert()
                    }
                }, {
                    key: "methods",
                    get: function () {
                        var t = this;
                        return {
                            clear: function () {
                                return t.clear()
                            },
                            render: function (e) {
                                return t.render(e)
                            },
                            renderFromHTML: function (e) {
                                return t.renderFromHTML(e)
                            },
                            delete: function () {
                                return t.delete()
                            },
                            swap: function (e, n) {
                                return t.swap(e, n)
                            },
                            getBlockByIndex: function (e) {
                                return t.getBlockByIndex(e)
                            },
                            getCurrentBlockIndex: function () {
                                return t.getCurrentBlockIndex()
                            },
                            getBlocksCount: function () {
                                return t.getBlocksCount()
                            },
                            stretchBlock: function (e) {
                                var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                return t.stretchBlock(e, n)
                            },
                            insertNewBlock: function () {
                                return t.insertNewBlock()
                            },
                            insert: this.insert
                        }
                    }
                }]), e
            }(l.default);
            o.default = d, d.displayName = "BlocksAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l) {
            "use strict";
            var u = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c);
            var f = function (t) {
                function e() {
                    var t;
                    return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).setToFirstBlock = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return !!t.Editor.BlockManager.firstBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.firstBlock, e, n), !0)
                    }, t.setToLastBlock = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return !!t.Editor.BlockManager.lastBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.lastBlock, e, n), !0)
                    }, t.setToPreviousBlock = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return !!t.Editor.BlockManager.previousBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.previousBlock, e, n), !0)
                    }, t.setToNextBlock = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.Editor.Caret.positions.DEFAULT,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return !!t.Editor.BlockManager.nextBlock && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.nextBlock, e, n), !0)
                    }, t.setToBlock = function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.Editor.Caret.positions.DEFAULT,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        return !!t.Editor.BlockManager.blocks[e] && (t.Editor.Caret.setToBlock(t.Editor.BlockManager.blocks[e], n, o), !0)
                    }, t.focus = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return e ? t.setToLastBlock(t.Editor.Caret.positions.END) : t.setToFirstBlock(t.Editor.Caret.positions.START)
                    }, t
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "methods",
                    get: function () {
                        return {
                            setToFirstBlock: this.setToFirstBlock,
                            setToLastBlock: this.setToLastBlock,
                            setToPreviousBlock: this.setToPreviousBlock,
                            setToNextBlock: this.setToNextBlock,
                            setToBlock: this.setToBlock,
                            focus: this.focus
                        }
                    }
                }]), e
            }((l = u(l)).default);
            o.default = f, f.displayName = "CaretAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l) {
            "use strict";
            var u = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c);
            var f = function (t) {
                function e() {
                    return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments))
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "on",
                    value: function (t, e) {
                        this.Editor.Events.on(t, e)
                    }
                }, {
                    key: "emit",
                    value: function (t, e) {
                        this.Editor.Events.emit(t, e)
                    }
                }, {
                    key: "off",
                    value: function (t, e) {
                        this.Editor.Events.off(t, e)
                    }
                }, {
                    key: "methods",
                    get: function () {
                        var t = this;
                        return {
                            emit: function (e, n) {
                                return t.emit(e, n)
                            },
                            off: function (e, n) {
                                return t.off(e, n)
                            },
                            on: function (e, n) {
                                return t.on(e, n)
                            }
                        }
                    }
                }]), e
            }((l = u(l)).default);
            o.default = f, f.displayName = "EventsAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l) {
            "use strict";
            var u = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c);
            var f = function (t) {
                function e() {
                    return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments))
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "open",
                    value: function () {
                        this.Editor.InlineToolbar.tryToShow()
                    }
                }, {
                    key: "close",
                    value: function () {
                        this.Editor.InlineToolbar.close()
                    }
                }, {
                    key: "methods",
                    get: function () {
                        var t = this;
                        return {
                            close: function () {
                                return t.close()
                            },
                            open: function () {
                                return t.open()
                            }
                        }
                    }
                }]), e
            }((l = u(l)).default);
            o.default = f, f.displayName = "InlineToolbarAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l) {
            "use strict";
            var u = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c);
            var f = function (t) {
                function e() {
                    return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments))
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "on",
                    value: function (t, e, n, o) {
                        this.Editor.Listeners.on(t, e, n, o)
                    }
                }, {
                    key: "off",
                    value: function (t, e, n) {
                        this.Editor.Listeners.off(t, e, n)
                    }
                }, {
                    key: "methods",
                    get: function () {
                        var t = this;
                        return {
                            on: function (e, n, o, r) {
                                return t.on(e, n, o, r)
                            },
                            off: function (e, n, o) {
                                return t.off(e, n, o)
                            }
                        }
                    }
                }]), e
            }((l = u(l)).default);
            o.default = f, f.displayName = "ListenersAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l) {
            "use strict";
            var u = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c);
            var f = function (t) {
                function e() {
                    return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments))
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "show",
                    value: function (t) {
                        return this.Editor.Notifier.show(t)
                    }
                }, {
                    key: "methods",
                    get: function () {
                        var t = this;
                        return {
                            show: function (e) {
                                return t.show(e)
                            }
                        }
                    }
                }]), e
            }((l = u(l)).default);
            o.default = f, f.displayName = "NotifierAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l) {
            "use strict";
            var u = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c);
            var f = function (t) {
                function e() {
                    return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments))
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "clean",
                    value: function (t, e) {
                        return this.Editor.Sanitizer.clean(t, e)
                    }
                }, {
                    key: "methods",
                    get: function () {
                        var t = this;
                        return {
                            clean: function (e, n) {
                                return t.clean(e, n)
                            }
                        }
                    }
                }]), e
            }((l = u(l)).default);
            o.default = f, f.displayName = "SanitizerAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l) {
            "use strict";
            var u = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c);
            var f = function (t) {
                function e() {
                    return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments))
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "save",
                    value: function () {
                        return this.Editor.Saver.save()
                    }
                }, {
                    key: "methods",
                    get: function () {
                        var t = this;
                        return {
                            save: function () {
                                return t.save()
                            }
                        }
                    }
                }]), e
            }((l = u(l)).default);
            o.default = f, f.displayName = "SaverAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(28)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u) {
            "use strict";
            var f = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), c = f(c), l = f(l), u = f(u);
            var d = function (t) {
                function e() {
                    return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments))
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "findParentTag",
                    value: function (t, e) {
                        return (new u.default).findParentTag(t, e)
                    }
                }, {
                    key: "expandToTag",
                    value: function (t) {
                        (new u.default).expandToTag(t)
                    }
                }, {
                    key: "methods",
                    get: function () {
                        var t = this;
                        return {
                            findParentTag: function (e, n) {
                                return t.findParentTag(e, n)
                            },
                            expandToTag: function (e) {
                                return t.expandToTag(e)
                            }
                        }
                    }
                }]), e
            }(l.default);
            o.default = d, d.displayName = "SelectionAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l) {
            "use strict";
            var u = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c);
            var f = function (t) {
                function e() {
                    return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments))
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "classes",
                    get: function () {
                        return {
                            block: "cdx-block",
                            inlineToolButton: "ce-inline-tool",
                            inlineToolButtonActive: "ce-inline-tool--active",
                            input: "cdx-input",
                            loader: "cdx-loader",
                            button: "cdx-button",
                            settingsButton: "cdx-settings-button",
                            settingsButtonActive: "cdx-settings-button--active"
                        }
                    }
                }]), e
            }((l = u(l)).default);
            o.default = f, f.displayName = "StylesAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l) {
            "use strict";
            var u = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c);
            var f = function (t) {
                function e() {
                    return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments))
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "open",
                    value: function () {
                        this.Editor.Toolbar.open()
                    }
                }, {
                    key: "close",
                    value: function () {
                        this.Editor.Toolbar.close()
                    }
                }, {
                    key: "methods",
                    get: function () {
                        var t = this;
                        return {
                            close: function () {
                                return t.close()
                            },
                            open: function () {
                                return t.open()
                            }
                        }
                    }
                }]), e
            }((l = u(l)).default);
            o.default = f, f.displayName = "ToolbarAPI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(14), n(28), n(59)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), c = p(c), l = p(l), u = p(u), f = p(f), d = p(d);
            var h = function (t) {
                function e() {
                    return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments))
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "keydown",
                    value: function (t) {
                        switch (this.beforeKeydownProcessing(t), t.keyCode) {
                            case u.default.keyCodes.BACKSPACE:
                                this.backspace(t);
                                break;
                            case u.default.keyCodes.ENTER:
                                this.enter(t);
                                break;
                            case u.default.keyCodes.DOWN:
                            case u.default.keyCodes.RIGHT:
                                this.arrowRightAndDown(t);
                                break;
                            case u.default.keyCodes.UP:
                            case u.default.keyCodes.LEFT:
                                this.arrowLeftAndUp(t);
                                break;
                            case u.default.keyCodes.TAB:
                                this.tabPressed(t);
                                break;
                            case u.default.keyCodes.ESC:
                                this.escapePressed(t);
                                break;
                            default:
                                this.defaultHandler()
                        }
                    }
                }, {
                    key: "beforeKeydownProcessing",
                    value: function (t) {
                        if (this.needToolbarClosing(t) && u.default.isPrintableKey(t.keyCode)) {
                            this.Editor.Toolbar.close(), this.Editor.ConversionToolbar.close();
                            var e = t.ctrlKey || t.metaKey || t.altKey || t.shiftKey;
                            e || (this.Editor.BlockManager.clearFocused(), this.Editor.BlockSelection.clearSelection(t))
                        }
                    }
                }, {
                    key: "keyup",
                    value: function (t) {
                        if (!t.shiftKey) {
                            var e = this.Editor,
                                n = e.InlineToolbar,
                                o = e.ConversionToolbar,
                                r = e.UI,
                                i = e.BlockManager,
                                a = e.BlockSettings,
                                s = i.getBlock(t.target);
                            f.default.almostAllSelected(s.pluginsContent.textContent) ? (n.close(), a.close(), o.tryToShow(s)) : (o.close(), n.tryToShow(!0)), r.checkEmptiness()
                        }
                    }
                }, {
                    key: "mouseUp",
                    value: function (t) {
                        var e = this.Editor,
                            n = e.InlineToolbar,
                            o = e.ConversionToolbar,
                            r = e.BlockManager,
                            i = e.BlockSelection,
                            a = r.getBlock(t.target);
                        u.default.delay(function () {
                            f.default.almostAllSelected(a.pluginsContent.textContent) ? (n.close(), o.tryToShow(a)) : f.default.isCollapsed ? (n.close(), 1 !== i.selectedBlocks.length && o.close()) : (n.tryToShow(), o.close())
                        }, 30)()
                    }
                }, {
                    key: "mouseDown",
                    value: function (t) {
                        f.default.isCollapsed || this.Editor.BlockSelection.clearSelection(t), this.Editor.CrossBlockSelection.watchSelection(t)
                    }
                }, {
                    key: "tabPressed",
                    value: function (t) {
                        this.Editor.BlockSelection.clearSelection(t);
                        var e = this.Editor,
                            n = e.BlockManager,
                            o = e.Tools,
                            r = e.InlineToolbar,
                            i = e.ConversionToolbar,
                            a = n.currentBlock;
                        if (a) {
                            var s = o.isInitial(a.tool) && a.isEmpty,
                                c = !a.isEmpty && i.opened,
                                l = !a.isEmpty && !f.default.isCollapsed && r.opened;
                            s ? this.activateToolbox() : c || l || this.activateBlockSettings()
                        }
                    }
                }, {
                    key: "escapePressed",
                    value: function (t) {
                        this.Editor.BlockSelection.clearSelection(t), this.Editor.Toolbox.opened ? this.Editor.Toolbox.close() : this.Editor.BlockSettings.opened ? this.Editor.BlockSettings.close() : this.Editor.InlineToolbar.opened ? this.Editor.InlineToolbar.close() : this.Editor.ConversionToolbar.opened ? this.Editor.ConversionToolbar.close() : this.Editor.Toolbar.close()
                    }
                }, {
                    key: "dragOver",
                    value: function (t) {
                        var e = this.Editor.BlockManager.getBlockByChildNode(t.target);
                        e.dropTarget = !0
                    }
                }, {
                    key: "dragLeave",
                    value: function (t) {
                        var e = this.Editor.BlockManager.getBlockByChildNode(t.target);
                        e.dropTarget = !1
                    }
                }, {
                    key: "handleCommandC",
                    value: function (t) {
                        var e = this.Editor.BlockSelection;
                        e.anyBlockSelected && (t.preventDefault(), e.copySelectedBlocks())
                    }
                }, {
                    key: "handleCommandX",
                    value: function (t) {
                        var e = this.Editor,
                            n = e.BlockSelection,
                            o = e.BlockManager,
                            r = e.Caret;
                        if (n.anyBlockSelected) {
                            t.preventDefault(), n.copySelectedBlocks();
                            var i = o.removeSelectedBlocks();
                            r.setToBlock(o.insertInitialBlockAtIndex(i, !0), r.positions.START), n.clearSelection(t)
                        }
                    }
                }, {
                    key: "enter",
                    value: function (t) {
                        var e = this.Editor,
                            n = e.BlockManager,
                            o = e.Tools,
                            r = e.UI,
                            i = n.currentBlock,
                            a = o.available[i.name];
                        if (!(a && a[o.INTERNAL_SETTINGS.IS_ENABLED_LINE_BREAKS] || r.someToolbarOpened || t.shiftKey)) {
                            var s = this.Editor.BlockManager.currentBlock;
                            this.Editor.Caret.isAtStart && !this.Editor.BlockManager.currentBlock.hasMedia ? this.Editor.BlockManager.insertInitialBlockAtIndex(this.Editor.BlockManager.currentBlockIndex) : s = this.Editor.BlockManager.split(), this.Editor.Caret.setToBlock(s), this.Editor.Tools.isInitial(s.tool) && s.isEmpty && (this.Editor.Toolbar.open(!1), this.Editor.Toolbar.plusButton.show()), t.preventDefault()
                        }
                    }
                }, {
                    key: "backspace",
                    value: function (t) {
                        var e = this.Editor,
                            n = e.BlockManager,
                            o = e.BlockSelection,
                            r = e.Caret,
                            i = n.currentBlock,
                            a = this.Editor.Tools.available[i.name];
                        if (i.selected || i.isEmpty && i.currentInput === i.firstInput) {
                            t.preventDefault();
                            var s = n.currentBlockIndex;
                            return n.previousBlock && 0 === n.previousBlock.inputs.length ? n.removeBlock(s - 1) : n.removeBlock(), r.setToBlock(n.currentBlock, s ? r.positions.END : r.positions.START), this.Editor.Toolbar.close(), void o.clearSelection(t)
                        }
                        if (!a || !a[this.Editor.Tools.INTERNAL_SETTINGS.IS_ENABLED_LINE_BREAKS] || r.isAtStart) {
                            var c = 0 === n.currentBlockIndex,
                                l = r.isAtStart && i.currentInput === i.firstInput && !c;
                            l && (t.preventDefault(), this.mergeBlocks())
                        }
                    }
                }, {
                    key: "mergeBlocks",
                    value: function () {
                        var t = this.Editor,
                            e = t.BlockManager,
                            n = t.Caret,
                            o = t.Toolbar,
                            r = e.previousBlock,
                            i = e.currentBlock;
                        if (i.name !== r.name || !r.mergeable) return 0 === r.inputs.length || r.isEmpty ? (e.removeBlock(e.currentBlockIndex - 1), n.setToBlock(e.currentBlock), void o.close()) : void(n.navigatePrevious() && o.close());
                        n.createShadow(r.pluginsContent), e.mergeBlocks(r, i).then(function () {
                            n.restoreCaret(r.pluginsContent), r.pluginsContent.normalize(), o.close()
                        })
                    }
                }, {
                    key: "arrowRightAndDown",
                    value: function (t) {
                        var e = this;
                        if (!this.Editor.UI.someToolbarOpened || !d.default.usedKeys.includes(t.keyCode)) {
                            this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                            var n = this.Editor.Caret.isAtEnd || this.Editor.BlockSelection.anyBlockSelected;
                            t.shiftKey && t.keyCode === u.default.keyCodes.DOWN && n ? this.Editor.CrossBlockSelection.toggleBlockSelectedState() : (this.Editor.Caret.navigateNext() ? t.preventDefault() : u.default.delay(function () {
                                e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput()
                            }, 20)(), this.Editor.BlockSelection.clearSelection(t))
                        }
                    }
                }, {
                    key: "arrowLeftAndUp",
                    value: function (t) {
                        var e = this;
                        if (!this.Editor.UI.someToolbarOpened || !d.default.usedKeys.includes(t.keyCode)) {
                            this.Editor.BlockManager.clearFocused(), this.Editor.Toolbar.close();
                            var n = this.Editor.Caret.isAtStart || this.Editor.BlockSelection.anyBlockSelected;
                            t.shiftKey && t.keyCode === u.default.keyCodes.UP && n ? this.Editor.CrossBlockSelection.toggleBlockSelectedState(!1) : (this.Editor.Caret.navigatePrevious() ? t.preventDefault() : u.default.delay(function () {
                                e.Editor.BlockManager.currentBlock && e.Editor.BlockManager.currentBlock.updateCurrentInput()
                            }, 20)(), this.Editor.BlockSelection.clearSelection(t))
                        }
                    }
                }, {
                    key: "defaultHandler",
                    value: function () {}
                }, {
                    key: "needToolbarClosing",
                    value: function (t) {
                        var e = t.keyCode === u.default.keyCodes.ENTER && this.Editor.Toolbox.opened,
                            n = t.keyCode === u.default.keyCodes.ENTER && this.Editor.BlockSettings.opened,
                            o = t.keyCode === u.default.keyCodes.ENTER && this.Editor.InlineToolbar.opened,
                            r = t.keyCode === u.default.keyCodes.ENTER && this.Editor.ConversionToolbar.opened,
                            i = t.keyCode === u.default.keyCodes.TAB;
                        return !(t.shiftKey || i || e || n || o || r)
                    }
                }, {
                    key: "activateToolbox",
                    value: function () {
                        this.Editor.Toolbar.opened || (this.Editor.Toolbar.open(!1, !1), this.Editor.Toolbar.plusButton.show()), this.Editor.Toolbox.open()
                    }
                }, {
                    key: "activateBlockSettings",
                    value: function () {
                        this.Editor.Toolbar.opened || (this.Editor.BlockManager.currentBlock.focused = !0, this.Editor.Toolbar.open(!0, !1), this.Editor.Toolbar.plusButton.hide()), this.Editor.BlockSettings.opened || this.Editor.BlockSettings.open()
                    }
                }]), e
            }(l.default);
            o.default = h, h.displayName = "BlockEvents", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(26), n(27), n(1), n(2), n(4), n(5), n(6), n(72), n(7), n(12), n(14), n(350)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d, p, h, v) {
            "use strict";
            var g = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = g(r), i = g(i), a = g(a), s = g(s), c = g(c), l = g(l), u = g(u), f = g(f), d = g(d), p = g(p), h = g(h), v = g(v);
            var y = function (t) {
                function e() {
                    var t;
                    return (0, a.default)(this, e), (t = (0, c.default)(this, (0, l.default)(e).apply(this, arguments)))._currentBlockIndex = -1, t._blocks = null, t
                }
                var n, o;
                return (0, u.default)(e, t), (0, s.default)(e, [{
                    key: "prepare",
                    value: (o = (0, i.default)(r.default.mark(function t() {
                        var e, n, o, i;
                        return r.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    e = new v.default(this.Editor.UI.nodes.redactor), n = this.Editor, o = n.BlockEvents, i = n.Shortcuts, this._blocks = new Proxy(e, {
                                        set: v.default.set,
                                        get: v.default.get
                                    }), i.add({
                                        name: "CMD+C",
                                        handler: function (t) {
                                            o.handleCommandC(t)
                                        }
                                    }), i.add({
                                        name: "CMD+X",
                                        handler: function (t) {
                                            o.handleCommandX(t)
                                        }
                                    });
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "composeBlock",
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = this.Editor.Tools.construct(t, e),
                            r = this.Editor.Tools.available[t],
                            i = new f.default(t, o, r, n, this.Editor.API.methods);
                        return this.bindEvents(i), i
                    }
                }, {
                    key: "insert",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.initialBlock,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.currentBlockIndex + 1,
                            r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                            i = this.composeBlock(t, e, n);
                        return this._blocks[o] = i, r && (this.currentBlockIndex = o), i
                    }
                }, {
                    key: "paste",
                    value: function (t, e) {
                        var n, o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        n = o ? this.replace(t) : this.insert(t);
                        try {
                            n.call("onPaste", e)
                        } catch (e) {
                            h.default.log("".concat(t, ": onPaste callback call is failed"), "error", e)
                        }
                        return n
                    }
                }, {
                    key: "insertInitialBlockAtIndex",
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = this.composeBlock(this.config.initialBlock, {}, {});
                        return this._blocks[t] = n, e ? this.currentBlockIndex = t : t <= this.currentBlockIndex && this.currentBlockIndex++, n
                    }
                }, {
                    key: "insertAtEnd",
                    value: function () {
                        return this.currentBlockIndex = this.blocks.length - 1, this.insert()
                    }
                }, {
                    key: "mergeBlocks",
                    value: (n = (0, i.default)(r.default.mark(function t(e, n) {
                        var o, i;
                        return r.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (o = this._blocks.indexOf(n), !n.isEmpty) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return t.next = 5, n.data;
                                case 5:
                                    if (i = t.sent, h.default.isEmpty(i)) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 9, e.mergeWith(i);
                                case 9:
                                    this.removeBlock(o), this.currentBlockIndex = this._blocks.indexOf(e);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t, e) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "removeBlock",
                    value: function (t) {
                        if (void 0 === t && (t = this.currentBlockIndex), this._blocks.remove(t), this.currentBlockIndex >= t && this.currentBlockIndex--, !this.blocks.length) return this.currentBlockIndex = -1, void this.insert();
                        0 === t && (this.currentBlockIndex = 0)
                    }
                }, {
                    key: "removeSelectedBlocks",
                    value: function () {
                        for (var t, e = this.blocks.length - 1; e >= 0; e--) this.blocks[e].selected && (this.removeBlock(e), t = e);
                        return t
                    }
                }, {
                    key: "removeAllBlocks",
                    value: function () {
                        for (var t = this.blocks.length - 1; t >= 0; t--) this._blocks.remove(t);
                        this.currentBlockIndex = -1, this.insert(), this.currentBlock.firstInput.focus()
                    }
                }, {
                    key: "split",
                    value: function () {
                        var t = this.Editor.Caret.extractFragmentFromCaretPosition(),
                            e = p.default.make("div");
                        e.appendChild(t);
                        var n = {
                            text: p.default.isEmpty(e) ? "" : e.innerHTML
                        };
                        return this.insert(this.config.initialBlock, n)
                    }
                }, {
                    key: "replace",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.config.initialBlock,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = this.composeBlock(t, e);
                        return this._blocks.insert(this.currentBlockIndex, n, !0), n
                    }
                }, {
                    key: "getBlockByIndex",
                    value: function (t) {
                        return this._blocks[t]
                    }
                }, {
                    key: "getBlock",
                    value: function (t) {
                        p.default.isElement(t) || (t = t.parentNode);
                        var e = this._blocks.nodes,
                            n = t.closest(".".concat(f.default.CSS.wrapper)),
                            o = e.indexOf(n);
                        if (o >= 0) return this._blocks[o]
                    }
                }, {
                    key: "highlightCurrentNode",
                    value: function () {
                        this.clearFocused(), this.currentBlock.focused = !0
                    }
                }, {
                    key: "clearFocused",
                    value: function () {
                        this.blocks.forEach(function (t) {
                            return t.focused = !1
                        })
                    }
                }, {
                    key: "setCurrentBlockByChildNode",
                    value: function (t) {
                        p.default.isElement(t) || (t = t.parentNode);
                        var e = t.closest(".".concat(f.default.CSS.wrapper));
                        if (e) return this.currentBlockIndex = this._blocks.nodes.indexOf(e), this.currentBlock;
                        throw new Error("Can not find a Block from this child Node")
                    }
                }, {
                    key: "getBlockByChildNode",
                    value: function (t) {
                        p.default.isElement(t) || (t = t.parentNode);
                        var e = t.closest(".".concat(f.default.CSS.wrapper));
                        return this.blocks.find(function (t) {
                            return t.holder === e
                        })
                    }
                }, {
                    key: "swap",
                    value: function (t, e) {
                        this._blocks.swap(t, e), this.currentBlockIndex = e
                    }
                }, {
                    key: "dropPointer",
                    value: function () {
                        this.currentBlockIndex = -1, this.clearFocused()
                    }
                }, {
                    key: "clear",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this._blocks.removeAll(), this.dropPointer(), t && this.insert(this.config.initialBlock), this.Editor.UI.checkEmptiness()
                    }
                }, {
                    key: "bindEvents",
                    value: function (t) {
                        var e = this.Editor,
                            n = e.BlockEvents,
                            o = e.Listeners;
                        o.on(t.holder, "keydown", function (t) {
                            return n.keydown(t)
                        }, !0), o.on(t.holder, "mouseup", function (t) {
                            return n.mouseUp(t)
                        }), o.on(t.holder, "mousedown", function (t) {
                            return n.mouseDown(t)
                        }), o.on(t.holder, "keyup", function (t) {
                            return n.keyup(t)
                        }), o.on(t.holder, "dragover", function (t) {
                            return n.dragOver(t)
                        }), o.on(t.holder, "dragleave", function (t) {
                            return n.dragLeave(t)
                        })
                    }
                }, {
                    key: "currentBlockIndex",
                    get: function () {
                        return this._currentBlockIndex
                    },
                    set: function (t) {
                        this._blocks[this._currentBlockIndex] && this._blocks[this._currentBlockIndex].willUnselect(), this._blocks[t] && this._blocks[t].willSelect(), this._currentBlockIndex = t
                    }
                }, {
                    key: "firstBlock",
                    get: function () {
                        return this._blocks[0]
                    }
                }, {
                    key: "lastBlock",
                    get: function () {
                        return this._blocks[this._blocks.length - 1]
                    }
                }, {
                    key: "currentBlock",
                    get: function () {
                        return this._blocks[this.currentBlockIndex]
                    }
                }, {
                    key: "nextBlock",
                    get: function () {
                        var t = this.currentBlockIndex === this._blocks.length - 1;
                        return t ? null : this._blocks[this.currentBlockIndex + 1]
                    }
                }, {
                    key: "nextContentfulBlock",
                    get: function () {
                        var t = this.blocks.slice(this.currentBlockIndex + 1);
                        return t.find(function (t) {
                            return !!t.inputs.length
                        })
                    }
                }, {
                    key: "previousContentfulBlock",
                    get: function () {
                        var t = this.blocks.slice(0, this.currentBlockIndex).reverse();
                        return t.find(function (t) {
                            return !!t.inputs.length
                        })
                    }
                }, {
                    key: "previousBlock",
                    get: function () {
                        var t = 0 === this.currentBlockIndex;
                        return t ? null : this._blocks[this.currentBlockIndex - 1]
                    }
                }, {
                    key: "blocks",
                    get: function () {
                        return this._blocks.array
                    }
                }, {
                    key: "isEditorEmpty",
                    get: function () {
                        return this.blocks.every(function (t) {
                            return t.isEmpty
                        })
                    }
                }]), e
            }(d.default);
            o.default = y, y.displayName = "BlockManager", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(14), n(12), n(28)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), c = p(c), l = p(l), u = p(u), f = p(f), d = p(d);
            var h = function (t) {
                function e() {
                    var t;
                    return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).needToSelectAll = !1, t.nativeInputSelected = !1, t.readyToBlockSelection = !1, t
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "prepare",
                    value: function () {
                        var t = this,
                            e = this.Editor.Shortcuts;
                        e.add({
                            name: "CMD+A",
                            handler: function (e) {
                                var n = t.Editor.BlockManager;
                                n.currentBlock && t.handleCommandA(e)
                            }
                        }), this.selection = new d.default
                    }
                }, {
                    key: "unSelectBlockByIndex",
                    value: function (t) {
                        var e = this.Editor.BlockManager;
                        (isNaN(t) ? e.currentBlock : e.getBlockByIndex(t)).selected = !1
                    }
                }, {
                    key: "clearSelection",
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = this.Editor,
                            o = n.BlockManager,
                            r = n.Caret,
                            i = n.RectangleSelection;
                        if (this.needToSelectAll = !1, this.nativeInputSelected = !1, this.readyToBlockSelection = !1, this.anyBlockSelected && t && t instanceof KeyboardEvent && u.default.isPrintableKey(t.keyCode)) {
                            var a = o.removeSelectedBlocks();
                            o.insertInitialBlockAtIndex(a, !0), r.setToBlock(o.currentBlock), u.default.delay(function () {
                                r.insertContentAtCaretPosition(t.key)
                            }, 20)()
                        }
                        this.Editor.CrossBlockSelection.clear(t), this.anyBlockSelected && !i.isRectActivated() ? (e && this.selection.restore(), this.allBlocksSelected = !1) : this.Editor.RectangleSelection.clearSelection()
                    }
                }, {
                    key: "copySelectedBlocks",
                    value: function () {
                        var t = this,
                            e = f.default.make("div");
                        this.selectedBlocks.forEach(function (n) {
                            var o = t.Editor.Sanitizer.clean(n.holder.innerHTML, t.sanitizerConfig),
                                r = f.default.make("p");
                            r.innerHTML = o, e.appendChild(r)
                        }), u.default.copyTextToClipboard(e.innerHTML)
                    }
                }, {
                    key: "selectBlockByIndex",
                    value: function (t) {
                        var e, n = this.Editor.BlockManager;
                        n.clearFocused(), e = isNaN(t) ? n.currentBlock : n.getBlockByIndex(t), this.selection.save(), d.default.get().removeAllRanges(), e.selected = !0
                    }
                }, {
                    key: "handleCommandA",
                    value: function (t) {
                        if (this.Editor.RectangleSelection.clearSelection(), !f.default.isNativeInput(t.target) || this.readyToBlockSelection) {
                            var e = this.Editor.BlockManager.getBlock(t.target),
                                n = e.inputs;
                            n.length > 1 && !this.readyToBlockSelection ? this.readyToBlockSelection = !0 : 1 !== n.length || this.needToSelectAll ? this.needToSelectAll ? (t.preventDefault(), this.selectAllBlocks(), this.needToSelectAll = !1, this.readyToBlockSelection = !1, this.Editor.ConversionToolbar.close()) : this.readyToBlockSelection && (this.selectBlockByIndex(), this.needToSelectAll = !0) : this.needToSelectAll = !0
                        } else this.readyToBlockSelection = !0
                    }
                }, {
                    key: "selectAllBlocks",
                    value: function () {
                        this.selection.save(), d.default.get().removeAllRanges(), this.allBlocksSelected = !0
                    }
                }, {
                    key: "sanitizerConfig",
                    get: function () {
                        return {
                            p: {},
                            h1: {},
                            h2: {},
                            h3: {},
                            h4: {},
                            h5: {},
                            h6: {},
                            ol: {},
                            ul: {},
                            li: {},
                            br: !0,
                            img: {
                                src: !0,
                                width: !0,
                                height: !0
                            },
                            a: {
                                href: !0
                            },
                            b: {},
                            i: {},
                            u: {}
                        }
                    }
                }, {
                    key: "allBlocksSelected",
                    get: function () {
                        var t = this.Editor.BlockManager;
                        return t.blocks.every(function (t) {
                            return !0 === t.selected
                        })
                    },
                    set: function (t) {
                        var e = this.Editor.BlockManager;
                        e.blocks.forEach(function (e) {
                            return e.selected = t
                        })
                    }
                }, {
                    key: "anyBlockSelected",
                    get: function () {
                        var t = this.Editor.BlockManager;
                        return t.blocks.some(function (t) {
                            return !0 === t.selected
                        })
                    }
                }, {
                    key: "selectedBlocks",
                    get: function () {
                        return this.Editor.BlockManager.blocks.filter(function (t) {
                            return t.selected
                        })
                    }
                }]), e
            }(l.default);
            o.default = h, h.displayName = "BlockSelection", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(28), n(7), n(12), n(14)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), c = p(c), l = p(l), u = p(u), f = p(f), d = p(d);
            var h = function (t) {
                function e() {
                    return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments))
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "setToBlock",
                    value: function (t) {
                        var e, n = this,
                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            i = this.Editor.BlockManager;
                        switch (o) {
                            case this.positions.START:
                                e = t.firstInput;
                                break;
                            case this.positions.END:
                                e = t.lastInput;
                                break;
                            default:
                                e = t.currentInput
                        }
                        if (e) {
                            var a = f.default.getDeepestNode(e, o === this.positions.END),
                                s = f.default.getContentLength(a);
                            switch (!0) {
                                case o === this.positions.START:
                                    r = 0;
                                    break;
                                case o === this.positions.END:
                                case r > s:
                                    r = s
                            }
                            d.default.delay(function () {
                                n.set(a, r)
                            }, 20)(), i.setCurrentBlockByChildNode(t.holder), i.currentBlock.currentInput = e
                        }
                    }
                }, {
                    key: "setToInput",
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.positions.DEFAULT,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            o = this.Editor.BlockManager.currentBlock,
                            r = f.default.getDeepestNode(t);
                        switch (e) {
                            case this.positions.START:
                                this.set(r, 0);
                                break;
                            case this.positions.END:
                                var i = f.default.getContentLength(r);
                                this.set(r, i);
                                break;
                            default:
                                n && this.set(r, n)
                        }
                        o.currentInput = t
                    }
                }, {
                    key: "set",
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = document.createRange(),
                            o = l.default.get();
                        if (f.default.isNativeInput(t)) {
                            if (!f.default.canSetCaret(t)) return;
                            return t.focus(), void(t.selectionStart = t.selectionEnd = e)
                        }
                        n.setStart(t, e), n.setEnd(t, e), o.removeAllRanges(), o.addRange(n);
                        var r = t.nodeType === Node.ELEMENT_NODE ? t.getBoundingClientRect() : n.getBoundingClientRect(),
                            i = r.top,
                            a = r.bottom,
                            s = window,
                            c = s.innerHeight;
                        i < 0 && window.scrollBy(0, i), a > c && window.scrollBy(0, a - c)
                    }
                }, {
                    key: "setToTheLastBlock",
                    value: function () {
                        var t = this.Editor.BlockManager.lastBlock;
                        if (t)
                            if (this.Editor.Tools.isInitial(t.tool) && t.isEmpty) this.setToBlock(t);
                            else {
                                var e = this.Editor.BlockManager.insertAtEnd();
                                this.setToBlock(e)
                            }
                    }
                }, {
                    key: "extractFragmentFromCaretPosition",
                    value: function () {
                        var t = l.default.get();
                        if (t.rangeCount) {
                            var e = t.getRangeAt(0),
                                n = this.Editor.BlockManager.currentBlock.currentInput;
                            if (e.deleteContents(), n) {
                                var o = e.cloneRange();
                                return o.selectNodeContents(n), o.setStart(e.endContainer, e.endOffset), o.extractContents()
                            }
                        }
                    }
                }, {
                    key: "navigateNext",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = this.Editor.BlockManager,
                            n = e.currentBlock,
                            o = e.nextContentfulBlock,
                            r = n.nextInput;
                        return !(!o && !r || !t && !this.isAtEnd || (r ? this.setToInput(r, this.positions.START) : this.setToBlock(o, this.positions.START), 0))
                    }
                }, {
                    key: "navigatePrevious",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = this.Editor.BlockManager,
                            n = e.currentBlock,
                            o = e.previousContentfulBlock;
                        if (!n) return !1;
                        var r = n.previousInput;
                        return !(!o && !r || !t && !this.isAtStart || (r ? this.setToInput(r, this.positions.END) : this.setToBlock(o, this.positions.END), 0))
                    }
                }, {
                    key: "createShadow",
                    value: function (t) {
                        var n = document.createElement("span");
                        n.classList.add(e.CSS.shadowCaret), t.insertAdjacentElement("beforeEnd", n)
                    }
                }, {
                    key: "restoreCaret",
                    value: function (t) {
                        var n = t.querySelector(".".concat(e.CSS.shadowCaret));
                        if (n) {
                            var o = new l.default;
                            o.expandToTag(n), setTimeout(function () {
                                var t = document.createRange();
                                t.selectNode(n), t.extractContents()
                            }, 50)
                        }
                    }
                }, {
                    key: "insertContentAtCaretPosition",
                    value: function (t) {
                        var e = document.createDocumentFragment(),
                            n = document.createElement("div"),
                            o = l.default.get(),
                            r = l.default.range;
                        n.innerHTML = t, Array.from(n.childNodes).forEach(function (t) {
                            return e.appendChild(t)
                        });
                        var i = e.lastChild;
                        r.deleteContents(), r.insertNode(e);
                        var a = document.createRange();
                        a.setStart(i, i.textContent.length), o.removeAllRanges(), o.addRange(a)
                    }
                }, {
                    key: "getHigherLevelSiblings",
                    value: function (t, e) {
                        for (var n = t, o = []; n.parentNode && "true" !== n.parentNode.contentEditable;) n = n.parentNode;
                        for (var r = "left" === e ? "previousSibling" : "nextSibling"; n[r];) n = n[r], o.push(n);
                        return o
                    }
                }, {
                    key: "positions",
                    get: function () {
                        return {
                            START: "start",
                            END: "end",
                            DEFAULT: "default"
                        }
                    }
                }, {
                    key: "isAtStart",
                    get: function () {
                        var t = l.default.get(),
                            e = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput),
                            n = t.focusNode;
                        if (f.default.isNativeInput(e)) return 0 === e.selectionEnd;
                        if (!t.anchorNode) return !1;
                        var o = n.textContent.search(/\S/); - 1 === o && (o = 0);
                        var r = t.focusOffset;
                        if (n.nodeType !== Node.TEXT_NODE && n.childNodes.length && (n.childNodes[r] ? (n = n.childNodes[r], r = 0) : (n = n.childNodes[r - 1], r = n.textContent.length)), f.default.isLineBreakTag(e) || f.default.isEmpty(e)) {
                            var i = this.getHigherLevelSiblings(n, "left"),
                                a = i.every(function (t) {
                                    var e = f.default.isLineBreakTag(t),
                                        n = 1 === t.children.length && f.default.isLineBreakTag(t.children[0]),
                                        o = e || n;
                                    return f.default.isEmpty(t) && !o
                                });
                            if (a && r === o) return !0
                        }
                        return null === e || n === e && r <= o
                    }
                }, {
                    key: "isAtEnd",
                    get: function () {
                        var t = l.default.get(),
                            e = t.focusNode,
                            n = f.default.getDeepestNode(this.Editor.BlockManager.currentBlock.currentInput, !0);
                        if (f.default.isNativeInput(n)) return n.selectionEnd === n.value.length;
                        if (!t.focusNode) return !1;
                        var o = t.focusOffset;
                        if (e.nodeType !== Node.TEXT_NODE && e.childNodes.length && (e.childNodes[o - 1] ? (e = e.childNodes[o - 1], o = e.textContent.length) : (e = e.childNodes[0], o = 0)), f.default.isLineBreakTag(n) || f.default.isEmpty(n)) {
                            var r = this.getHigherLevelSiblings(e, "right"),
                                i = r.every(function (t, e) {
                                    var n = e === r.length - 1 && f.default.isLineBreakTag(t);
                                    return n || f.default.isEmpty(t) && !f.default.isLineBreakTag(t)
                                });
                            if (i && o === e.textContent.length) return !0
                        }
                        var a = n.textContent.replace(/\s+$/, "");
                        return e === n && o >= a.length
                    }
                }], [{
                    key: "CSS",
                    get: function () {
                        return {
                            shadowCaret: "cdx-shadow-caret"
                        }
                    }
                }]), e
            }(u.default);
            o.default = h, h.displayName = "Caret", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(28), n(14)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f) {
            "use strict";
            var d = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), c = d(c), l = d(l), u = d(u), f = d(f);
            var p = function (t) {
                function e() {
                    var t;
                    return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).onMouseUp = function () {
                        var e = t.Editor.Listeners;
                        e.off(document, "mouseover", t.onMouseOver), e.off(document, "mouseup", t.onMouseUp)
                    }, t.onMouseOver = function (e) {
                        var n = t.Editor.BlockManager,
                            o = n.getBlockByChildNode(e.relatedTarget) || t.lastSelectedBlock,
                            r = n.getBlockByChildNode(e.target);
                        if (o && r && r !== o) {
                            if (o === t.firstSelectedBlock) return u.default.get().removeAllRanges(), o.selected = !0, void(r.selected = !0);
                            if (r === t.firstSelectedBlock) return o.selected = !1, void(r.selected = !1);
                            t.toggleBlocksSelectedState(o, r), t.lastSelectedBlock = r
                        }
                    }, t
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "watchSelection",
                    value: function (t) {
                        if (t.button === f.default.mouseButtons.LEFT) {
                            var e = this.Editor,
                                n = e.BlockManager,
                                o = (e.UI, e.Listeners);
                            this.firstSelectedBlock = n.getBlock(t.target), this.lastSelectedBlock = this.firstSelectedBlock, o.on(document, "mouseover", this.onMouseOver), o.on(document, "mouseup", this.onMouseUp)
                        }
                    }
                }, {
                    key: "toggleBlockSelectedState",
                    value: function () {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            e = this.Editor.BlockManager;
                        this.lastSelectedBlock || (this.lastSelectedBlock = this.firstSelectedBlock = e.currentBlock), this.firstSelectedBlock === this.lastSelectedBlock && (this.firstSelectedBlock.selected = !0, u.default.get().removeAllRanges());
                        var n = e.blocks.indexOf(this.lastSelectedBlock) + (t ? 1 : -1),
                            o = e.blocks[n];
                        o && (this.lastSelectedBlock.selected !== o.selected ? o.selected = !0 : this.lastSelectedBlock.selected = !1, this.lastSelectedBlock = o)
                    }
                }, {
                    key: "clear",
                    value: function (t) {
                        var e = this.Editor,
                            n = e.BlockManager,
                            o = e.BlockSelection,
                            r = e.Caret,
                            i = n.blocks.indexOf(this.firstSelectedBlock),
                            a = n.blocks.indexOf(this.lastSelectedBlock);
                        if (o.anyBlockSelected && i > -1 && a > -1)
                            if (t && t instanceof KeyboardEvent) switch (t.keyCode) {
                                case f.default.keyCodes.DOWN:
                                case f.default.keyCodes.RIGHT:
                                    r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                                    break;
                                case f.default.keyCodes.UP:
                                case f.default.keyCodes.LEFT:
                                    r.setToBlock(n.blocks[Math.min(i, a)], r.positions.START);
                                    break;
                                default:
                                    r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END)
                            } else r.setToBlock(n.blocks[Math.max(i, a)], r.positions.END);
                        this.firstSelectedBlock = this.lastSelectedBlock = null
                    }
                }, {
                    key: "toggleBlocksSelectedState",
                    value: function (t, e) {
                        for (var n = this.Editor.BlockManager, o = n.blocks.indexOf(t), r = n.blocks.indexOf(e), i = t.selected !== e.selected, a = Math.min(o, r); a <= Math.max(o, r); a++) {
                            var s = n.blocks[a];
                            s !== this.firstSelectedBlock && s !== (i ? t : e) && (n.blocks[a].selected = !n.blocks[a].selected)
                        }
                    }
                }]), e
            }(l.default);
            o.default = p, p.displayName = "CrossBlockSelection", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(26), n(27), n(1), n(2), n(4), n(5), n(6), n(28), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), c = p(c), l = p(l), u = p(u), f = p(f);
            var h = function (t) {
                function e() {
                    var t, n;
                    return (0, a.default)(this, e), (t = (0, c.default)(this, (0, l.default)(e).apply(this, arguments))).isStartedAtEditor = !1, t.processDrop = (n = (0, i.default)(r.default.mark(function e(n) {
                        var o, i, a, s, c, l;
                        return r.default.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    o = t.Editor, i = o.BlockManager, a = o.Caret, s = o.Paste, n.preventDefault(), i.blocks.forEach(function (t) {
                                        return t.dropTarget = !1
                                    }), f.default.isAtEditor && !f.default.isCollapsed && t.isStartedAtEditor && document.execCommand("delete"), t.isStartedAtEditor = !1;
                                    try {
                                        c = i.setCurrentBlockByChildNode(n.target), t.Editor.Caret.setToBlock(c, a.positions.END)
                                    } catch (e) {
                                        l = i.setCurrentBlockByChildNode(i.lastBlock.holder), t.Editor.Caret.setToBlock(l, a.positions.END)
                                    }
                                    s.processDataTransfer(n.dataTransfer, !0);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function (t) {
                        return n.apply(this, arguments)
                    }), t
                }
                return (0, u.default)(e, t), (0, s.default)(e, [{
                    key: "prepare",
                    value: function () {
                        this.bindEvents()
                    }
                }, {
                    key: "bindEvents",
                    value: function () {
                        var t = this;
                        this.Editor.Listeners.on(this.Editor.UI.nodes.holder, "drop", this.processDrop, !0), this.Editor.Listeners.on(this.Editor.UI.nodes.holder, "dragstart", function (e) {
                            f.default.isAtEditor && !f.default.isCollapsed && (t.isStartedAtEditor = !0), t.Editor.InlineToolbar.close()
                        }), this.Editor.Listeners.on(this.Editor.UI.nodes.holder, "dragover", function (t) {
                            return t.preventDefault()
                        }, !0)
                    }
                }]), e
            }((d = p(d)).default);
            o.default = h, h.displayName = "DragNDrop", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l) {
            "use strict";
            var u = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c);
            var f = function (t) {
                function e() {
                    var t;
                    return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).subscribers = {}, t
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "on",
                    value: function (t, e) {
                        t in this.subscribers || (this.subscribers[t] = []), this.subscribers[t].push(e)
                    }
                }, {
                    key: "emit",
                    value: function (t, e) {
                        this.subscribers[t] && this.subscribers[t].reduce(function (t, e) {
                            var n = e(t);
                            return n || t
                        }, e)
                    }
                }, {
                    key: "off",
                    value: function (t, e) {
                        for (var n = 0; n < this.subscribers[t].length; n++)
                            if (this.subscribers[t][n] === e) {
                                delete this.subscribers[t][n];
                                break
                            }
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.subscribers = null
                    }
                }]), e
            }((l = u(l)).default);
            o.default = f, f.displayName = "Events", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l) {
            "use strict";
            var u = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = u(r), i = u(i), a = u(a), s = u(s), c = u(c);
            var f = function (t) {
                function e() {
                    var t;
                    return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).allListeners = [], t
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "on",
                    value: function (t, e, n) {
                        var o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                            r = {
                                element: t,
                                eventType: e,
                                handler: n,
                                options: o
                            },
                            i = this.findOne(t, e, n);
                        i || (this.allListeners.push(r), t.addEventListener(e, n, o))
                    }
                }, {
                    key: "off",
                    value: function (t, e, n, o) {
                        var r = this,
                            i = this.findAll(t, e, n);
                        i.forEach(function (t, e) {
                            var n = r.allListeners.indexOf(i[e]);
                            n > 0 && (r.allListeners.splice(n, 1), t.element.removeEventListener(t.eventType, t.handler, t.options))
                        })
                    }
                }, {
                    key: "findOne",
                    value: function (t, e, n) {
                        var o = this.findAll(t, e, n);
                        return o.length > 0 ? o[0] : null
                    }
                }, {
                    key: "findAll",
                    value: function (t, e, n) {
                        var o = t ? this.findByEventTarget(t) : [];
                        return t && e && n ? o.filter(function (t) {
                            return t.eventType === e && t.handler === n
                        }) : t && e ? o.filter(function (t) {
                            return t.eventType === e
                        }) : o
                    }
                }, {
                    key: "removeAll",
                    value: function () {
                        this.allListeners.map(function (t) {
                            t.element.removeEventListener(t.eventType, t.handler)
                        }), this.allListeners = []
                    }
                }, {
                    key: "findByEventTarget",
                    value: function (t) {
                        return this.allListeners.filter(function (e) {
                            if (e.element === t) return e
                        })
                    }
                }, {
                    key: "findByType",
                    value: function (t) {
                        return this.allListeners.filter(function (e) {
                            if (e.eventType === t) return e
                        })
                    }
                }, {
                    key: "findByHandler",
                    value: function (t) {
                        return this.allListeners.filter(function (e) {
                            if (e.handler === t) return e
                        })
                    }
                }]), e
            }((l = u(l)).default);
            o.default = f, f.displayName = "Listeners", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(26), n(27), n(1), n(2), n(4), n(5), n(6), n(7), n(14), n(72)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d, p) {
            "use strict";
            var h = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = h(r), i = h(i), a = h(a), s = h(s), c = h(c), l = h(l), u = h(u), f = h(f), d = h(d), p = h(p);
            var v = function (t) {
                function e() {
                    var t;
                    return (0, a.default)(this, e), (t = (0, c.default)(this, (0, l.default)(e).apply(this, arguments))).mutationDebouncer = d.default.debounce(function () {
                        t.updateNativeInputs(), t.config.onChange()
                    }, e.DebounceTimer), t.nativeInputs = [], t
                }
                var n;
                return (0, u.default)(e, t), (0, s.default)(e, [{
                    key: "destroy",
                    value: function () {
                        var t = this;
                        this.mutationDebouncer = null, this.observer && this.observer.disconnect(), this.observer = null, this.nativeInputs.forEach(function (e) {
                            return t.Editor.Listeners.off(e, "input", t.mutationDebouncer)
                        })
                    }
                }, {
                    key: "prepare",
                    value: (n = (0, i.default)(r.default.mark(function t() {
                        var e = this;
                        return r.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    window.setTimeout(function () {
                                        e.setObserver()
                                    }, 1e3);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    })), function () {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "disable",
                    value: function () {
                        this.disabled = !0
                    }
                }, {
                    key: "enable",
                    value: function () {
                        this.disabled = !1
                    }
                }, {
                    key: "setObserver",
                    value: function () {
                        var t = this,
                            e = this.Editor.UI;
                        this.observer = new MutationObserver(function (e, n) {
                            t.mutationHandler(e, n)
                        }), this.observer.observe(e.nodes.redactor, {
                            childList: !0,
                            attributes: !0,
                            subtree: !0,
                            characterData: !0,
                            characterDataOldValue: !0
                        })
                    }
                }, {
                    key: "mutationHandler",
                    value: function (t, e) {
                        if (!this.disabled) {
                            var n = !1;
                            t.forEach(function (t) {
                                switch (t.type) {
                                    case "childList":
                                    case "subtree":
                                    case "characterData":
                                    case "characterDataOldValue":
                                        n = !0;
                                        break;
                                    case "attributes":
                                        var e = t.target;
                                        if (!e.classList.contains(p.default.CSS.wrapper)) return void(n = !0)
                                }
                            }), n && this.mutationDebouncer()
                        }
                    }
                }, {
                    key: "updateNativeInputs",
                    value: function () {
                        var t = this;
                        this.nativeInputs && this.nativeInputs.forEach(function (e) {
                            t.Editor.Listeners.off(e, "input")
                        }), this.nativeInputs = Array.from(this.Editor.UI.nodes.redactor.querySelectorAll("textarea, input, select")), this.nativeInputs.forEach(function (e) {
                            return t.Editor.Listeners.on(e, "input", t.mutationDebouncer)
                        })
                    }
                }]), e
            }(f.default);
            o.default = v, v.displayName = "ModificationsObserver", v.DebounceTimer = 450, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(351)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u) {
            "use strict";
            var f = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), c = f(c), l = f(l), u = f(u);
            var d = function (t) {
                function e() {
                    return (0, r.default)(this, e), (0, a.default)(this, (0, s.default)(e).apply(this, arguments))
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "show",
                    value: function (t) {
                        u.default.show(t)
                    }
                }]), e
            }(l.default);
            o.default = d, d.displayName = "Notifier", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(99), n(26), n(27), n(58), n(1), n(2), n(4), n(5), n(6), n(7), n(12), n(14)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d, p, h, v) {
            "use strict";
            var g = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = g(r), i = g(i), a = g(a), s = g(s), c = g(c), l = g(l), u = g(u), f = g(f), d = g(d), p = g(p), h = g(h), v = g(v);
            var y = function (t) {
                function e() {
                    var t, n;
                    return (0, c.default)(this, e), (t = (0, u.default)(this, (0, f.default)(e).apply(this, arguments))).toolsTags = {}, t.tagsByTool = {}, t.toolsPatterns = [], t.toolsFiles = {}, t.exceptionList = [], t.processTool = function (e) {
                        var n = (0, s.default)(e, 2),
                            o = n[0],
                            r = n[1];
                        try {
                            var i = new t.Editor.Tools.blockTools[o]({
                                api: t.Editor.API.methods,
                                config: {},
                                data: {}
                            });
                            if (!1 === r.pasteConfig) return void t.exceptionList.push(o);
                            if ("function" != typeof i.onPaste) return;
                            var a = r.pasteConfig || {};
                            t.getTagsConfig(o, a), t.getFilesConfig(o, a), t.getPatternsConfig(o, a)
                        } catch (t) {
                            v.default.log("Paste handling for «".concat(o, "» Tool hasn't been set up because of the error"), "warn", t)
                        }
                    }, t.handlePasteEvent = (n = (0, a.default)(i.default.mark(function e(n) {
                        var o, r, a;
                        return i.default.wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (o = t.Editor, r = o.BlockManager, a = o.Toolbar, r.currentBlock && (!t.isNativeBehaviour(n.target) || n.clipboardData.types.includes("Files"))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (!r.currentBlock || !t.exceptionList.includes(r.currentBlock.name)) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    n.preventDefault(), t.processDataTransfer(n.clipboardData), r.clearFocused(), a.close();
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function (t) {
                        return n.apply(this, arguments)
                    }), t
                }
                var n, o, p, g, y, m, b, k, x;
                return (0, d.default)(e, t), (0, l.default)(e, [{
                    key: "prepare",
                    value: (x = (0, a.default)(i.default.mark(function t() {
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    this.setCallback(), this.processTools();
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return x.apply(this, arguments)
                    })
                }, {
                    key: "processDataTransfer",
                    value: (k = (0, a.default)(i.default.mark(function t(e) {
                        var n, o, r, a, s, c, l, u, f = arguments;
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = f.length > 1 && void 0 !== f[1] && f[1], o = this.Editor.Sanitizer, !((r = e.types).includes ? r.includes("Files") : r.contains("Files"))) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 7, this.processFiles(e.files);
                                case 7:
                                    return t.abrupt("return");
                                case 8:
                                    if (a = e.getData("text/plain"), s = e.getData("text/html"), n && a.trim() && s.trim() && (s = "<p>" + (s.trim() ? s : a) + "</p>"), c = Object.keys(this.toolsTags).reduce(function (t, e) {
                                            return t[e.toLowerCase()] = !0, t
                                        }, {}), l = Object.assign({}, c, o.getAllInlineToolsConfig(), {
                                            br: {}
                                        }), (u = o.clean(s, l)).trim() && u.trim() !== a && h.default.isHTMLString(u)) {
                                        t.next = 19;
                                        break
                                    }
                                    return t.next = 17, this.processText(a);
                                case 17:
                                    t.next = 21;
                                    break;
                                case 19:
                                    return t.next = 21, this.processText(u, !0);
                                case 21:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return k.apply(this, arguments)
                    })
                }, {
                    key: "processText",
                    value: (b = (0, a.default)(i.default.mark(function t(e) {
                        var n, o, r, s, c, l, u, f, d = this,
                            p = arguments;
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = p.length > 1 && void 0 !== p[1] && p[1], o = this.Editor, r = o.Caret, s = o.BlockManager, c = o.Tools, (l = n ? this.processHTML(e) : this.processPlain(e)).length) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 5:
                                    if (1 !== l.length) {
                                        t.next = 8;
                                        break
                                    }
                                    return l[0].isBlock ? this.processSingleBlock(l.pop()) : this.processInlinePaste(l.pop()), t.abrupt("return");
                                case 8:
                                    return u = s.currentBlock && c.isInitial(s.currentBlock.tool), f = u && s.currentBlock.isEmpty, t.next = 12, Promise.all(l.map(function () {
                                        var t = (0, a.default)(i.default.mark(function t(e, n) {
                                            return i.default.wrap(function (t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.next = 2, d.insertBlock(e, 0 === n && f);
                                                    case 2:
                                                        return t.abrupt("return", t.sent);
                                                    case 3:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }, t)
                                        }));
                                        return function (e, n) {
                                            return t.apply(this, arguments)
                                        }
                                    }()));
                                case 12:
                                    s.currentBlock && r.setToBlock(s.currentBlock, r.positions.END);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return b.apply(this, arguments)
                    })
                }, {
                    key: "setCallback",
                    value: function () {
                        var t = this.Editor.Listeners;
                        t.on(document, "paste", this.handlePasteEvent)
                    }
                }, {
                    key: "processTools",
                    value: function () {
                        var t = this.Editor.Tools.blockTools;
                        Object.entries(t).forEach(this.processTool)
                    }
                }, {
                    key: "getTagsConfig",
                    value: function (t, e) {
                        var n = this,
                            o = e.tags || [];
                        o.forEach(function (e) {
                            n.toolsTags.hasOwnProperty(e) ? v.default.log("Paste handler for «".concat(t, "» Tool on «").concat(e, "» tag is skipped ") + "because it is already used by «".concat(n.toolsTags[e].tool, "» Tool."), "warn") : n.toolsTags[e.toUpperCase()] = {
                                tool: t
                            }
                        }), this.tagsByTool[t] = o.map(function (t) {
                            return t.toUpperCase()
                        })
                    }
                }, {
                    key: "getFilesConfig",
                    value: function (t, e) {
                        var n = e.files,
                            o = void 0 === n ? {} : n,
                            r = o.extensions,
                            i = o.mimeTypes;
                        (r || i) && (r && !Array.isArray(r) && (v.default.log("«extensions» property of the onDrop config for «".concat(t, "» Tool should be an array")), r = []), i && !Array.isArray(i) && (v.default.log("«mimeTypes» property of the onDrop config for «".concat(t, "» Tool should be an array")), i = []), i && (i = i.filter(function (e) {
                            return !!v.default.isValidMimeType(e) || (v.default.log("MIME type value «".concat(e, "» for the «").concat(t, "» Tool is not a valid MIME type"), "warn"), !1)
                        })), this.toolsFiles[t] = {
                            extensions: r || [],
                            mimeTypes: i || []
                        })
                    }
                }, {
                    key: "getPatternsConfig",
                    value: function (t, e) {
                        var n = this;
                        e.patterns && !v.default.isEmpty(e.patterns) && Object.entries(e.patterns).forEach(function (e) {
                            var o = (0, s.default)(e, 2),
                                r = o[0],
                                i = o[1];
                            i instanceof RegExp || v.default.log("Pattern ".concat(i, " for «").concat(t, "» Tool is skipped because it should be a Regexp instance."), "warn"), n.toolsPatterns.push({
                                key: r,
                                pattern: i,
                                tool: t
                            })
                        })
                    }
                }, {
                    key: "isNativeBehaviour",
                    value: function (t) {
                        return h.default.isNativeInput(t)
                    }
                }, {
                    key: "processFiles",
                    value: (m = (0, a.default)(i.default.mark(function t(e) {
                        var n, o, r, a, s, c, l = this;
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = this.Editor, o = n.BlockManager, r = n.Tools, t.next = 3, Promise.all(Array.from(e).map(function (t) {
                                        return l.processFile(t)
                                    }));
                                case 3:
                                    a = (a = t.sent).filter(function (t) {
                                        return !!t
                                    }), s = r.isInitial(o.currentBlock.tool), c = s && o.currentBlock.isEmpty, a.forEach(function (t, e) {
                                        o.paste(t.type, t.event, 0 === e && c)
                                    });
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return m.apply(this, arguments)
                    })
                }, {
                    key: "processFile",
                    value: (y = (0, a.default)(i.default.mark(function t(e) {
                        var n, o, r, a, c;
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = v.default.getFileExtension(e), o = Object.entries(this.toolsFiles).find(function (t) {
                                            var o = (0, s.default)(t, 2),
                                                r = (o[0], o[1]),
                                                i = r.mimeTypes,
                                                a = r.extensions,
                                                c = e.type.split("/"),
                                                l = (0, s.default)(c, 2),
                                                u = l[0],
                                                f = l[1],
                                                d = a.find(function (t) {
                                                    return t.toLowerCase() === n.toLowerCase()
                                                }),
                                                p = i.find(function (t) {
                                                    var e = t.split("/"),
                                                        n = (0, s.default)(e, 2),
                                                        o = n[0],
                                                        r = n[1];
                                                    return o === u && (r === f || "*" === r)
                                                });
                                            return !!d || !!p
                                        })) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 4:
                                    return r = (0, s.default)(o, 1), a = r[0], c = this.composePasteEvent("file", {
                                        file: e
                                    }), t.abrupt("return", {
                                        event: c,
                                        type: a
                                    });
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return y.apply(this, arguments)
                    })
                }, {
                    key: "processHTML",
                    value: function (t) {
                        var e = this,
                            n = this.Editor,
                            o = n.Tools,
                            r = n.Sanitizer,
                            i = this.config.initialBlock,
                            a = h.default.make("DIV");
                        a.innerHTML = t;
                        var s = this.getNodes(a);
                        return s.map(function (t) {
                            var n, a = i,
                                s = !1;
                            switch (t.nodeType) {
                                case Node.DOCUMENT_FRAGMENT_NODE:
                                    (n = h.default.make("div")).appendChild(t);
                                    break;
                                case Node.ELEMENT_NODE:
                                    n = t, s = !0, e.toolsTags[n.tagName] && (a = e.toolsTags[n.tagName].tool)
                            }
                            var c = o.blockTools[a].pasteConfig.tags,
                                l = c.reduce(function (t, e) {
                                    return t[e.toLowerCase()] = {}, t
                                }, {}),
                                u = Object.assign({}, l, r.getInlineToolsConfig(a));
                            n.innerHTML = r.clean(n.innerHTML, u);
                            var f = e.composePasteEvent("tag", {
                                data: n
                            });
                            return {
                                content: n,
                                isBlock: s,
                                tool: a,
                                event: f
                            }
                        }).filter(function (t) {
                            return !h.default.isNodeEmpty(t.content) || h.default.isSingleTag(t.content)
                        })
                    }
                }, {
                    key: "processPlain",
                    value: function (t) {
                        var e = this,
                            n = this.config.initialBlock;
                        if (this.Editor.Tools, !t) return [];
                        var o = n;
                        return t.split(/\r?\n/).filter(function (t) {
                            return t.trim()
                        }).map(function (t) {
                            var n = h.default.make("div");
                            n.innerHTML = t;
                            var r = e.composePasteEvent("tag", {
                                data: n
                            });
                            return {
                                content: n,
                                tool: o,
                                isBlock: !1,
                                event: r
                            }
                        })
                    }
                }, {
                    key: "processSingleBlock",
                    value: (g = (0, a.default)(i.default.mark(function t(e) {
                        var n, o, r, a, s;
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = this.Editor, o = n.Caret, r = n.BlockManager, a = n.Tools, (s = r.currentBlock) && e.tool === s.name && h.default.containsOnlyInlineElements(e.content.innerHTML)) {
                                        t.next = 5;
                                        break
                                    }
                                    return this.insertBlock(e, s && a.isInitial(s.tool) && s.isEmpty), t.abrupt("return");
                                case 5:
                                    o.insertContentAtCaretPosition(e.content.innerHTML);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return g.apply(this, arguments)
                    })
                }, {
                    key: "processInlinePaste",
                    value: (p = (0, a.default)(i.default.mark(function t(n) {
                        var o, r, a, s, c, l, u, f, d, p;
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (o = this.Editor, r = o.BlockManager, a = o.Caret, s = o.Sanitizer, c = o.Tools, l = n.content, n.tool, !(r.currentBlock && c.isInitial(r.currentBlock.tool) && l.textContent.length < e.PATTERN_PROCESSING_MAX_LENGTH)) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.next = 6, this.processPattern(l.textContent);
                                case 6:
                                    if (!(u = t.sent)) {
                                        t.next = 12;
                                        break
                                    }
                                    return d = r.currentBlock && c.isInitial(r.currentBlock.tool) && r.currentBlock.isEmpty, f = r.paste(u.tool, u.event, d), a.setToBlock(f, a.positions.END), t.abrupt("return");
                                case 12:
                                    r.currentBlock && r.currentBlock.currentInput ? (p = s.getInlineToolsConfig(r.currentBlock.name), document.execCommand("insertHTML", !1, s.clean(l.innerHTML, p))) : this.insertBlock(n);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return p.apply(this, arguments)
                    })
                }, {
                    key: "processPattern",
                    value: (o = (0, a.default)(i.default.mark(function t(e) {
                        var n, o;
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = this.toolsPatterns.find(function (t) {
                                            var n = t.pattern.exec(e);
                                            return !!n && e === n.shift()
                                        })) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 3:
                                    return o = this.composePasteEvent("pattern", {
                                        key: n.key,
                                        data: e
                                    }), t.abrupt("return", {
                                        event: o,
                                        tool: n.tool
                                    });
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "insertBlock",
                    value: (n = (0, a.default)(i.default.mark(function t(e) {
                        var n, o, r, a, s, c, l = arguments;
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = l.length > 1 && void 0 !== l[1] && l[1], o = this.Editor, r = o.BlockManager, a = o.Caret, s = r.currentBlock, !(n && s && s.isEmpty)) {
                                        t.next = 7;
                                        break
                                    }
                                    return c = r.paste(e.tool, e.event, !0), a.setToBlock(c, a.positions.END), t.abrupt("return");
                                case 7:
                                    c = r.paste(e.tool, e.event), a.setToBlock(c, a.positions.END);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "getNodes",
                    value: function (t) {
                        var e = this,
                            n = Array.from(t.childNodes),
                            o = Object.keys(this.toolsTags);
                        return n.reduce(function t(n, i) {
                            if (h.default.isEmpty(i) && !h.default.isSingleTag(i)) return n;
                            var a = n[n.length - 1],
                                s = new DocumentFragment;
                            switch (a && h.default.isFragment(a) && (s = n.pop()), i.nodeType) {
                                case Node.ELEMENT_NODE:
                                    var c = i;
                                    if ("BR" === c.tagName) return [].concat((0, r.default)(n), [s, new DocumentFragment]);
                                    var l = e.toolsTags[c.tagName] || {},
                                        u = l.tool,
                                        f = void 0 === u ? "" : u,
                                        d = e.tagsByTool[f] || [],
                                        p = o.includes(c.tagName),
                                        v = h.default.blockElements.includes(c.tagName.toLowerCase()),
                                        g = Array.from(c.children).some(function (t) {
                                            var e = t.tagName;
                                            return o.includes(e) && !d.includes(e)
                                        }),
                                        y = Array.from(c.children).some(function (t) {
                                            var e = t.tagName;
                                            return h.default.blockElements.includes(e.toLowerCase())
                                        });
                                    if (!v && !p && !g) return s.appendChild(c), [].concat((0, r.default)(n), [s]);
                                    if (p && !g || v && !y && !g) return [].concat((0, r.default)(n), [s, c]);
                                    break;
                                case Node.TEXT_NODE:
                                    return s.appendChild(i), [].concat((0, r.default)(n), [s]);
                                default:
                                    return [].concat((0, r.default)(n), [s])
                            }
                            return [].concat((0, r.default)(n), (0, r.default)(Array.from(i.childNodes).reduce(t, [])))
                        }, [])
                    }
                }, {
                    key: "composePasteEvent",
                    value: function (t, e) {
                        return new CustomEvent(t, {
                            detail: e
                        })
                    }
                }]), e
            }(p.default);
            o.default = y, y.displayName = "Paste", y.PATTERN_PROCESSING_MAX_LENGTH = 450, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(12), n(28), n(72)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), c = p(c), l = p(l), u = p(u), f = p(f), d = p(d);
            var h = function (t) {
                function e() {
                    var t;
                    return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).isRectSelectionActivated = !1, t.SCROLL_SPEED = 3, t.HEIGHT_OF_SCROLL_ZONE = 40, t.BOTTOM_SCROLL_ZONE = 1, t.TOP_SCROLL_ZONE = 2, t.MAIN_MOUSE_BUTTON = 0, t.mousedown = !1, t.isScrolling = !1, t.inScrollZone = null, t.startX = 0, t.startY = 0, t.mouseX = 0, t.mouseY = 0, t.stackOfSelected = [], t
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "prepare",
                    value: function () {
                        var t = this,
                            e = this.Editor.Listeners,
                            n = this.genHTML(),
                            o = n.container;
                        e.on(o, "mousedown", function (e) {
                            e.button === t.MAIN_MOUSE_BUTTON && t.startSelection(e.pageX, e.pageY)
                        }, !1), e.on(document.body, "mousemove", function (e) {
                            t.changingRectangle(e), t.scrollByZones(e.clientY)
                        }, !1), e.on(document.body, "mouseleave", function () {
                            t.clearSelection(), t.endSelection()
                        }), e.on(window, "scroll", function (e) {
                            t.changingRectangle(e)
                        }, !1), e.on(document.body, "mouseup", function () {
                            t.endSelection()
                        }, !1)
                    }
                }, {
                    key: "startSelection",
                    value: function (t, e) {
                        this.Editor.BlockSelection.allBlocksSelected = !1, this.clearSelection(), this.stackOfSelected = [];
                        var n = document.elementFromPoint(t - window.pageXOffset, e - window.pageYOffset),
                            o = [".".concat(d.default.CSS.content), ".".concat(this.Editor.Toolbar.CSS.toolbar), ".".concat(this.Editor.InlineToolbar.CSS.inlineToolbar)],
                            r = n.closest("." + this.Editor.UI.CSS.editorWrapper),
                            i = o.some(function (t) {
                                return !!n.closest(t)
                            });
                        r && !i && (this.mousedown = !0, this.startX = t, this.startY = e)
                    }
                }, {
                    key: "endSelection",
                    value: function () {
                        this.mousedown = !1, this.startX = 0, this.startY = 0, this.overlayRectangle.style.display = "none";
                        var t = this.Editor.BlockSelection.selectedBlocks;
                        1 === t.length && this.Editor.ConversionToolbar.tryToShow(t[0])
                    }
                }, {
                    key: "isRectActivated",
                    value: function () {
                        return this.isRectSelectionActivated
                    }
                }, {
                    key: "clearSelection",
                    value: function () {
                        this.isRectSelectionActivated = !1
                    }
                }, {
                    key: "scrollByZones",
                    value: function (t) {
                        this.inScrollZone = null, t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.TOP_SCROLL_ZONE), document.documentElement.clientHeight - t <= this.HEIGHT_OF_SCROLL_ZONE && (this.inScrollZone = this.BOTTOM_SCROLL_ZONE), this.inScrollZone ? this.isScrolling || (this.scrollVertical(this.inScrollZone === this.TOP_SCROLL_ZONE ? -this.SCROLL_SPEED : this.SCROLL_SPEED), this.isScrolling = !0) : this.isScrolling = !1
                    }
                }, {
                    key: "genHTML",
                    value: function () {
                        var t = this.Editor.UI,
                            n = t.nodes.holder.querySelector("." + t.CSS.editorWrapper),
                            o = u.default.make("div", e.CSS.overlay, {}),
                            r = u.default.make("div", e.CSS.overlayContainer, {}),
                            i = u.default.make("div", e.CSS.rect, {});
                        return r.appendChild(i), o.appendChild(r), n.appendChild(o), this.overlayRectangle = i, {
                            container: n,
                            overlay: o
                        }
                    }
                }, {
                    key: "scrollVertical",
                    value: function (t) {
                        var e = this;
                        if (this.inScrollZone && this.mousedown) {
                            var n = window.pageYOffset;
                            window.scrollBy(0, t), this.mouseY += window.pageYOffset - n, setTimeout(function () {
                                e.scrollVertical(t)
                            }, 0)
                        }
                    }
                }, {
                    key: "changingRectangle",
                    value: function (t) {
                        if (this.mousedown) {
                            void 0 !== t.pageY && (this.mouseX = t.pageX, this.mouseY = t.pageY);
                            var e = this.genInfoForMouseSelection(),
                                n = e.rightPos,
                                o = e.leftPos,
                                r = e.index,
                                i = this.startX > n && this.mouseX > n,
                                a = this.startX < o && this.mouseX < o;
                            this.rectCrossesBlocks = !(i || a), this.isRectSelectionActivated || (this.rectCrossesBlocks = !1, this.isRectSelectionActivated = !0, this.shrinkRectangleToPoint(), this.overlayRectangle.style.display = "block"), this.updateRectangleSize(), void 0 !== r && (this.trySelectNextBlock(r), this.inverseSelection(), f.default.get().removeAllRanges(), t.preventDefault())
                        }
                    }
                }, {
                    key: "shrinkRectangleToPoint",
                    value: function () {
                        this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px")
                    }
                }, {
                    key: "inverseSelection",
                    value: function () {
                        var t = this.Editor.BlockManager.getBlockByIndex(this.stackOfSelected[0]),
                            e = t.selected;
                        if (this.rectCrossesBlocks && !e) {
                            var n = !0,
                                o = !1,
                                r = void 0;
                            try {
                                for (var i, a = this.stackOfSelected[Symbol.iterator](); !(n = (i = a.next()).done); n = !0) {
                                    var s = i.value;
                                    this.Editor.BlockSelection.selectBlockByIndex(s)
                                }
                            } catch (t) {
                                o = !0, r = t
                            } finally {
                                try {
                                    n || null == a.return || a.return()
                                } finally {
                                    if (o) throw r
                                }
                            }
                        }
                        if (!this.rectCrossesBlocks && e) {
                            var c = !0,
                                l = !1,
                                u = void 0;
                            try {
                                for (var f, d = this.stackOfSelected[Symbol.iterator](); !(c = (f = d.next()).done); c = !0) {
                                    var p = f.value;
                                    this.Editor.BlockSelection.unSelectBlockByIndex(p)
                                }
                            } catch (t) {
                                l = !0, u = t
                            } finally {
                                try {
                                    c || null == d.return || d.return()
                                } finally {
                                    if (l) throw u
                                }
                            }
                        }
                    }
                }, {
                    key: "updateRectangleSize",
                    value: function () {
                        this.mouseY >= this.startY ? (this.overlayRectangle.style.top = "".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.mouseY - window.pageYOffset, "px")) : (this.overlayRectangle.style.bottom = "calc(100% - ".concat(this.startY - window.pageYOffset, "px"), this.overlayRectangle.style.top = "".concat(this.mouseY - window.pageYOffset, "px")), this.mouseX >= this.startX ? (this.overlayRectangle.style.left = "".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.right = "calc(100% - ".concat(this.mouseX - window.pageXOffset, "px")) : (this.overlayRectangle.style.right = "calc(100% - ".concat(this.startX - window.pageXOffset, "px"), this.overlayRectangle.style.left = "".concat(this.mouseX - window.pageXOffset, "px"))
                    }
                }, {
                    key: "genInfoForMouseSelection",
                    value: function () {
                        var t, e = document.body.offsetWidth,
                            n = e / 2,
                            o = this.mouseY - window.pageYOffset,
                            r = document.elementFromPoint(n, o),
                            i = this.Editor.BlockManager.getBlockByChildNode(r);
                        void 0 !== i && (t = this.Editor.BlockManager.blocks.findIndex(function (t) {
                            return t.holder === i.holder
                        }));
                        var a = this.Editor.BlockManager.lastBlock.holder.querySelector("." + d.default.CSS.content),
                            s = Number.parseInt(window.getComputedStyle(a).width, 10) / 2,
                            c = n - s,
                            l = n + s;
                        return {
                            index: t,
                            leftPos: c,
                            rightPos: l
                        }
                    }
                }, {
                    key: "addBlockInSelection",
                    value: function (t) {
                        this.rectCrossesBlocks && this.Editor.BlockSelection.selectBlockByIndex(t), this.stackOfSelected.push(t)
                    }
                }, {
                    key: "trySelectNextBlock",
                    value: function (t) {
                        var e = this,
                            n = this.stackOfSelected[this.stackOfSelected.length - 1] === t,
                            o = this.stackOfSelected.length;
                        if (!n) {
                            var r = this.stackOfSelected[o - 1] - this.stackOfSelected[o - 2] > 0,
                                i = o <= 1 ? 0 : r ? 1 : -1,
                                a = t > this.stackOfSelected[o - 1] && 1 === i,
                                s = t < this.stackOfSelected[o - 1] && -1 === i,
                                c = a || s || 0 === i,
                                l = !c;
                            if (l || !(t > this.stackOfSelected[o - 1] || void 0 === this.stackOfSelected[o - 1])) {
                                if (!l && t < this.stackOfSelected[o - 1])
                                    for (var u = this.stackOfSelected[o - 1] - 1; u >= t; u--) this.addBlockInSelection(u);
                                else if (l) {
                                    var f, d = o - 1;
                                    for (f = t > this.stackOfSelected[o - 1] ? function () {
                                            return t > e.stackOfSelected[d]
                                        } : function () {
                                            return t < e.stackOfSelected[d]
                                        }; f();) this.rectCrossesBlocks && this.Editor.BlockSelection.unSelectBlockByIndex(this.stackOfSelected[d]), this.stackOfSelected.pop(), d--
                                }
                            } else
                                for (var p = this.stackOfSelected[o - 1] + 1 || t; p <= t; p++) this.addBlockInSelection(p)
                        }
                    }
                }], [{
                    key: "CSS",
                    get: function () {
                        return {
                            overlay: "codex-editor-overlay",
                            overlayContainer: "codex-editor-overlay__container",
                            rect: "codex-editor-overlay__rectangle",
                            topScrollZone: "codex-editor-overlay__scroll-zone--top",
                            bottomScrollZone: "codex-editor-overlay__scroll-zone--bottom"
                        }
                    }
                }]), e
            }(l.default);
            o.default = h, h.displayName = "RectangleSelection", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(26), n(27), n(1), n(2), n(4), n(5), n(6), n(7), n(14)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), c = p(c), l = p(l), u = p(u), f = p(f), d = p(d);
            var h = function (t) {
                function e() {
                    return (0, a.default)(this, e), (0, c.default)(this, (0, l.default)(e).apply(this, arguments))
                }
                var n, o;
                return (0, u.default)(e, t), (0, s.default)(e, [{
                    key: "render",
                    value: (o = (0, i.default)(r.default.mark(function t(e) {
                        var n, o, i = this;
                        return r.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.map(function (t) {
                                        return {
                                            function: function () {
                                                return i.insertBlock(t)
                                            }
                                        }
                                    }), t.next = 3, d.default.sequence(n);
                                case 3:
                                    return o = t.sent, this.Editor.UI.checkEmptiness(), t.abrupt("return", o);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "insertBlock",
                    value: (n = (0, i.default)(r.default.mark(function t(e) {
                        var n, o, i, a, s, c, l, u, f;
                        return r.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = this.Editor, o = n.Tools, i = n.BlockManager, a = e.type, s = e.data, c = e.settings, !(a in o.available)) {
                                        t.next = 15;
                                        break
                                    }
                                    t.prev = 5, i.insert(a, s, c), t.next = 13;
                                    break;
                                case 9:
                                    throw t.prev = 9, t.t0 = t.catch(5), d.default.log("Block «".concat(a, "» skipped because of plugins error"), "warn", s), Error(t.t0);
                                case 13:
                                    t.next = 20;
                                    break;
                                case 15:
                                    l = {
                                        savedData: {
                                            type: a,
                                            data: s
                                        },
                                        title: a
                                    }, a in o.unavailable && (u = o.unavailable[a].toolbox, f = o.getToolSettings(a).toolbox, l.title = u.title || f.title || l.title), i.insert(o.stubTool, l, c).stretched = !0, d.default.log("Tool «".concat(a, "» is not found. Check 'tools' property at your initial Editor.js config."), "warn");
                                case 20:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this, [
                            [5, 9]
                        ])
                    })), function (t) {
                        return n.apply(this, arguments)
                    })
                }]), e
            }(f.default);
            o.default = h, h.displayName = "Renderer", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(58), n(55), n(1), n(2), n(4), n(5), n(6), n(7), n(14), n(352)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d, p) {
            "use strict";
            var h = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = h(r), i = h(i), a = h(a), s = h(s), c = h(c), l = h(l), u = h(u), f = h(f), d = h(d), p = h(p);
            var v = function (t) {
                function e() {
                    var t;
                    return (0, a.default)(this, e), (t = (0, c.default)(this, (0, l.default)(e).apply(this, arguments))).configCache = {}, t.inlineToolsConfigCache = null, t
                }
                return (0, u.default)(e, t), (0, s.default)(e, [{
                    key: "sanitizeBlocks",
                    value: function (t) {
                        var e = this;
                        return t.map(function (t) {
                            var n = e.composeToolConfig(t.tool);
                            return d.default.isEmpty(n) ? t : (t.data = e.deepSanitize(t.data, n), t)
                        })
                    }
                }, {
                    key: "deepSanitize",
                    value: function (t, e) {
                        return Array.isArray(t) ? this.cleanArray(t, e) : "object" === (0, i.default)(t) ? this.cleanObject(t, e) : "string" == typeof t ? this.cleanOneItem(t, e) : t
                    }
                }, {
                    key: "clean",
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = {
                                tags: e
                            },
                            o = this.createHTMLJanitorInstance(n);
                        return o.clean(t)
                    }
                }, {
                    key: "composeToolConfig",
                    value: function (t) {
                        if (this.configCache[t]) return this.configCache[t];
                        var e = this.Editor.Tools.INTERNAL_SETTINGS.SANITIZE_CONFIG,
                            n = this.Editor.Tools.available[t],
                            o = this.getInlineToolsConfig(t);
                        if (!n.sanitize || n[e] && d.default.isEmpty(n[e])) return o;
                        var r = n.sanitize,
                            a = {};
                        for (var s in r)
                            if (r.hasOwnProperty(s)) {
                                var c = r[s];
                                "object" === (0, i.default)(c) ? a[s] = Object.assign({}, o, c): a[s] = c
                            } return this.configCache[t] = a, a
                    }
                }, {
                    key: "getInlineToolsConfig",
                    value: function (t) {
                        var e = this.Editor.Tools,
                            n = e.getToolSettings(t),
                            o = n.inlineToolbar || [],
                            r = {};
                        return "boolean" == typeof o && o ? r = this.getAllInlineToolsConfig() : o.map(function (t) {
                            r = Object.assign(r, e.inline[t][e.INTERNAL_SETTINGS.SANITIZE_CONFIG])
                        }), r
                    }
                }, {
                    key: "getAllInlineToolsConfig",
                    value: function () {
                        var t = this.Editor.Tools;
                        if (this.inlineToolsConfigCache) return this.inlineToolsConfigCache;
                        var e = {};
                        return Object.entries(t.inline).forEach(function (n) {
                            var o = (0, r.default)(n, 2),
                                i = (o[0], o[1]);
                            Object.assign(e, i[t.INTERNAL_SETTINGS.SANITIZE_CONFIG])
                        }), this.inlineToolsConfigCache = e, this.inlineToolsConfigCache
                    }
                }, {
                    key: "cleanArray",
                    value: function (t, e) {
                        var n = this;
                        return t.map(function (t) {
                            return n.deepSanitize(t, e)
                        })
                    }
                }, {
                    key: "cleanObject",
                    value: function (t, e) {
                        var n = {};
                        for (var o in t)
                            if (t.hasOwnProperty(o)) {
                                var r = t[o],
                                    i = this.isRule(e[o]) ? e[o] : e;
                                n[o] = this.deepSanitize(r, i)
                            } return n
                    }
                }, {
                    key: "cleanOneItem",
                    value: function (t, e) {
                        return "object" === (0, i.default)(e) ? this.clean(t, e) : !1 === e ? this.clean(t, {}) : t
                    }
                }, {
                    key: "isRule",
                    value: function (t) {
                        return "object" === (0, i.default)(t) || "boolean" == typeof t || "function" == typeof t
                    }
                    /**
                     * If developer uses editor's API, then he can customize sanitize restrictions.
                     * Or, sanitizing config can be defined globally in editors initialization. That config will be used everywhere
                     * At least, if there is no config overrides, that API uses Default configuration
                     *
                     * @uses https://www.npmjs.com/package/html-janitor
                     * @license https://github.com/guardian/html-janitor/blob/master/LICENSE
                     *
                     * @param {SanitizerConfig} config - sanitizer extension
                     */
                }, {
                    key: "createHTMLJanitorInstance",
                    value: function (t) {
                        return t ? new p.default(t) : null
                    }
                }]), e
            }(f.default);
            o.default = v, v.displayName = "Sanitizer", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(26), n(27), n(1), n(2), n(4), n(5), n(6), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f) {
            "use strict";
            var d = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = d(r), i = d(i), a = d(a), s = d(s), c = d(c), l = d(l), u = d(u);
            var p = function (t) {
                function e() {
                    return (0, a.default)(this, e), (0, c.default)(this, (0, l.default)(e).apply(this, arguments))
                }
                var n, o;
                return (0, u.default)(e, t), (0, s.default)(e, [{
                    key: "save",
                    value: (o = (0, i.default)(r.default.mark(function t() {
                        var e, n, o, i, a, s, c, l, u = this;
                        return r.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e = this.Editor, n = e.BlockManager, o = e.Sanitizer, i = e.ModificationsObserver, a = n.blocks, s = [], i.disable(), a.forEach(function (t) {
                                        s.push(u.getSavedData(t))
                                    }), t.next = 6, Promise.all(s);
                                case 6:
                                    return c = t.sent, t.next = 9, o.sanitizeBlocks(c);
                                case 9:
                                    return l = t.sent, i.enable(), t.abrupt("return", this.makeOutput(l));
                                case 12:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "getSavedData",
                    value: (n = (0, i.default)(r.default.mark(function t(e) {
                        var n, o;
                        return r.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, e.save();
                                case 2:
                                    if (n = t.sent, t.t0 = n, !t.t0) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.next = 7, e.validate(n.data);
                                case 7:
                                    t.t0 = t.sent;
                                case 8:
                                    return o = t.t0, t.abrupt("return", Object.assign({}, n, {
                                        isValid: o
                                    }));
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    })), function (t) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "makeOutput",
                    value: function (t) {
                        var e = this,
                            n = 0,
                            o = [];
                        return console.groupCollapsed("[Editor.js saving]:"), t.forEach(function (t) {
                            var r = t.tool,
                                i = t.data,
                                a = t.time,
                                s = t.isValid;
                            if (n += a, console.group("".concat(r.charAt(0).toUpperCase() + r.slice(1))), !s) return console.log("Block «".concat(r, "» skipped because saved data is invalid")), void console.groupEnd();
                            console.log(i), console.groupEnd(), r !== e.Editor.Tools.stubTool ? o.push({
                                type: r,
                                data: i
                            }) : o.push(i)
                        }), console.log("Total", n), console.groupEnd(), {
                            time: +new Date,
                            blocks: o,
                            version: "2.15.1"
                        }
                    }
                }]), e
            }((f = d(f)).default);
            o.default = p, p.displayName = "Saver", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(353), n(7)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u) {
            "use strict";
            var f = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), c = f(c), l = f(l);
            var d = function (t) {
                function e() {
                    var t;
                    return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).registeredShortcuts = [], t
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "add",
                    value: function (t) {
                        var e = new l.default({
                            name: t.name,
                            on: document,
                            callback: t.handler
                        });
                        this.registeredShortcuts.push(e)
                    }
                }, {
                    key: "remove",
                    value: function (t) {
                        var e = this.registeredShortcuts.findIndex(function (e) {
                            return e.name === t
                        });
                        this.registeredShortcuts[e].remove(), this.registeredShortcuts.splice(e, 1)
                    }
                }]), e
            }((u = f(u)).default);
            o.default = d, d.displayName = "Shortcuts", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(12), n(59), n(14)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), c = p(c), l = p(l), u = p(u), f = p(f), d = p(d);
            var h = function (t) {
                function e() {
                    var t;
                    return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).nodes = {
                        wrapper: null,
                        toolSettings: null,
                        defaultSettings: null
                    }, t.buttons = [], t.flipper = null, t
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "make",
                    value: function () {
                        this.nodes.wrapper = u.default.make("div", this.CSS.wrapper), this.nodes.toolSettings = u.default.make("div", this.CSS.toolSettings), this.nodes.defaultSettings = u.default.make("div", this.CSS.defaultSettings), u.default.append(this.nodes.wrapper, [this.nodes.toolSettings, this.nodes.defaultSettings]), this.enableFlipper()
                    }
                }, {
                    key: "open",
                    value: function () {
                        this.nodes.wrapper.classList.add(this.CSS.wrapperOpened), this.addToolSettings(), this.addDefaultSettings(), this.Editor.Events.emit(this.events.opened), this.flipper.activate(this.blockTunesButtons)
                    }
                }, {
                    key: "close",
                    value: function () {
                        this.nodes.wrapper.classList.remove(this.CSS.wrapperOpened), this.nodes.toolSettings.innerHTML = "", this.nodes.defaultSettings.innerHTML = "", this.Editor.Events.emit(this.events.closed), this.buttons = [], this.flipper.deactivate()
                    }
                }, {
                    key: "addToolSettings",
                    value: function () {
                        "function" == typeof this.Editor.BlockManager.currentBlock.tool.renderSettings && u.default.append(this.nodes.toolSettings, this.Editor.BlockManager.currentBlock.tool.renderSettings())
                    }
                }, {
                    key: "addDefaultSettings",
                    value: function () {
                        u.default.append(this.nodes.defaultSettings, this.Editor.BlockManager.currentBlock.renderTunes())
                    }
                }, {
                    key: "enableFlipper",
                    value: function () {
                        var t = this;
                        this.flipper = new f.default({
                            focusedItemClass: this.CSS.focusedButton,
                            activateCallback: function () {
                                d.default.delay(function () {
                                    t.Editor.Caret.setToBlock(t.Editor.BlockManager.currentBlock)
                                }, 10)()
                            }
                        })
                    }
                }, {
                    key: "events",
                    get: function () {
                        return {
                            opened: "block-settings-opened",
                            closed: "block-settings-closed"
                        }
                    }
                }, {
                    key: "CSS",
                    get: function () {
                        return {
                            wrapper: "ce-settings",
                            wrapperOpened: "ce-settings--opened",
                            toolSettings: "ce-settings__plugin-zone",
                            defaultSettings: "ce-settings__default-zone",
                            button: "ce-settings__button",
                            focusedButton: "ce-settings__button--focused",
                            focusedButtonAnimated: "ce-settings__button--focused-animated"
                        }
                    }
                }, {
                    key: "opened",
                    get: function () {
                        return this.nodes.wrapper.classList.contains(this.CSS.wrapperOpened)
                    }
                }, {
                    key: "blockTunesButtons",
                    get: function () {
                        var t = this;
                        if (0 !== this.buttons.length) return this.buttons;
                        var e = this.nodes.toolSettings.querySelectorAll(".".concat(this.Editor.StylesAPI.classes.settingsButton)),
                            n = this.nodes.defaultSettings.querySelectorAll(".".concat(this.CSS.button));
                        return e.forEach(function (e) {
                            t.buttons.push(e)
                        }), n.forEach(function (e) {
                            t.buttons.push(e)
                        }), this.buttons
                    }
                }]), e
            }(l.default);
            o.default = h, h.displayName = "BlockSettings", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(26), n(27), n(1), n(2), n(4), n(5), n(6), n(7), n(12), n(14), n(59)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d, p, h) {
            "use strict";
            var v = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = v(r), i = v(i), a = v(a), s = v(s), c = v(c), l = v(l), u = v(u), f = v(f), d = v(d), p = v(p), h = v(h);
            var g = function (t) {
                function e() {
                    var t;
                    return (0, a.default)(this, e), (t = (0, c.default)(this, (0, l.default)(e).apply(this, arguments))).nodes = {
                        wrapper: null,
                        tools: null
                    }, t.opened = !1, t.tools = {}, t.flipper = null, t
                }
                var n;
                return (0, u.default)(e, t), (0, s.default)(e, [{
                    key: "make",
                    value: function () {
                        this.nodes.wrapper = d.default.make("div", e.CSS.conversionToolbarWrapper), this.nodes.tools = d.default.make("div", e.CSS.conversionToolbarTools), this.addTools(), this.enableFlipper(), d.default.append(this.nodes.wrapper, this.nodes.tools), d.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper)
                    }
                }, {
                    key: "tryToShow",
                    value: function (t) {
                        var e = t.class.conversionConfig && t.class.conversionConfig.export;
                        e && (this.move(t), this.opened || this.open(), this.highlightActiveTool(t.name))
                    }
                }, {
                    key: "open",
                    value: function () {
                        this.opened = !0, this.flipper.activate(Object.values(this.tools)), this.flipper.focusFirst(), this.nodes.wrapper.classList.add(e.CSS.conversionToolbarShowed)
                    }
                }, {
                    key: "close",
                    value: function () {
                        this.opened = !1, this.flipper.deactivate(), this.nodes.wrapper.classList.remove(e.CSS.conversionToolbarShowed)
                    }
                }, {
                    key: "replaceWithBlock",
                    value: (n = (0, i.default)(r.default.mark(function t(e) {
                        var n, o, i, a, s, c, l, u, f, d, h = this;
                        return r.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return n = this.Editor.BlockManager.currentBlock.class, o = this.Editor.BlockManager.currentBlock.name, t.next = 4, this.Editor.BlockManager.currentBlock.save();
                                case 4:
                                    if (i = t.sent, a = i.data, o === e && (e = this.config.initialBlock), s = this.Editor.Tools.toolsClasses[e], c = "", "function" != typeof (l = n.conversionConfig.export)) {
                                        t.next = 14;
                                        break
                                    }
                                    c = l(a), t.next = 20;
                                    break;
                                case 14:
                                    if ("string" != typeof l) {
                                        t.next = 18;
                                        break
                                    }
                                    c = a[l], t.next = 20;
                                    break;
                                case 18:
                                    return p.default.log("Conversion «export» property must be a string or function. String means key of saved data object to export. Function should export processed string to export."), t.abrupt("return");
                                case 20:
                                    if (u = this.Editor.Sanitizer.clean(c, s.sanitize), f = {}, "function" != typeof (d = s.conversionConfig.import)) {
                                        t.next = 27;
                                        break
                                    }
                                    f = d(u), t.next = 33;
                                    break;
                                case 27:
                                    if ("string" != typeof d) {
                                        t.next = 31;
                                        break
                                    }
                                    f[d] = u, t.next = 33;
                                    break;
                                case 31:
                                    return p.default.log("Conversion «import» property must be a string or function. String means key of tool data to import. Function accepts a imported string and return composed tool data."), t.abrupt("return");
                                case 33:
                                    this.Editor.BlockManager.replace(e, f), this.Editor.BlockSelection.clearSelection(), this.close(), p.default.delay(function () {
                                        h.Editor.Caret.setToBlock(h.Editor.BlockManager.currentBlock)
                                    }, 10)();
                                case 37:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "move",
                    value: function (t) {
                        var e = t.pluginsContent.getBoundingClientRect(),
                            n = this.Editor.UI.nodes.wrapper.getBoundingClientRect(),
                            o = {
                                x: e.left - n.left,
                                y: e.top + e.height - n.top
                            };
                        this.nodes.wrapper.style.left = Math.floor(o.x) + "px", this.nodes.wrapper.style.top = Math.floor(o.y) + "px"
                    }
                }, {
                    key: "addTools",
                    value: function () {
                        var t = this.Editor.Tools.blockTools;
                        for (var e in t)
                            if (t.hasOwnProperty(e)) {
                                var n = this.Editor.Tools.INTERNAL_SETTINGS,
                                    o = t[e],
                                    r = o[n.TOOLBOX],
                                    i = o[n.CONVERSION_CONFIG];
                                !p.default.isEmpty(r) && r.icon && i && i.import && this.addTool(e, r.icon)
                            }
                    }
                }, {
                    key: "addTool",
                    value: function (t, n) {
                        var o = this,
                            a = d.default.make("div", [e.CSS.conversionTool]);
                        a.dataset.tool = t, a.innerHTML = n, d.default.append(this.nodes.tools, a), this.tools[t] = a, this.Editor.Listeners.on(a, "click", (0, i.default)(r.default.mark(function e() {
                            return r.default.wrap(function (e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, o.replaceWithBlock(t);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }, e)
                        })))
                    }
                }, {
                    key: "highlightActiveTool",
                    value: function (t) {
                        this.tools[t] && (Object.values(this.tools).forEach(function (t) {
                            t.classList.remove(e.CSS.conversionToolActive)
                        }), this.tools[t].classList.add(e.CSS.conversionToolActive))
                    }
                }, {
                    key: "enableFlipper",
                    value: function () {
                        this.flipper = new h.default({
                            focusedItemClass: e.CSS.conversionToolFocused
                        })
                    }
                }], [{
                    key: "CSS",
                    get: function () {
                        return {
                            conversionToolbarWrapper: "ce-conversion-toolbar",
                            conversionToolbarShowed: "ce-conversion-toolbar--showed",
                            conversionToolbarTools: "ce-conversion-toolbar__tools",
                            conversionTool: "ce-conversion-tool",
                            conversionToolFocused: "ce-conversion-tool--focused",
                            conversionToolActive: "ce-conversion-tool--active"
                        }
                    }
                }]), e
            }(f.default);
            o.default = g, g.displayName = "ConversionToolbar", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(58), n(1), n(2), n(4), n(5), n(6), n(7), n(12), n(28), n(14), n(59)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d, p, h) {
            "use strict";
            var v = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = v(r), i = v(i), a = v(a), s = v(s), c = v(c), l = v(l), u = v(u), f = v(f), d = v(d), p = v(p), h = v(h);
            var g = function (t) {
                function e() {
                    var t;
                    return (0, i.default)(this, e), (t = (0, s.default)(this, (0, c.default)(e).apply(this, arguments))).CSS = {
                        inlineToolbar: "ce-inline-toolbar",
                        inlineToolbarShowed: "ce-inline-toolbar--showed",
                        inlineToolbarLeftOriented: "ce-inline-toolbar--left-oriented",
                        inlineToolbarRightOriented: "ce-inline-toolbar--right-oriented",
                        buttonsWrapper: "ce-inline-toolbar__buttons",
                        actionsWrapper: "ce-inline-toolbar__actions",
                        inlineToolButton: "ce-inline-tool",
                        inlineToolButtonLast: "ce-inline-tool--last",
                        inputField: "cdx-input",
                        focusedButton: "ce-inline-tool--focused"
                    }, t.opened = !1, t.nodes = {
                        wrapper: null,
                        buttons: null,
                        actions: null
                    }, t.toolbarVerticalMargin = 20, t.buttonsList = null, t.width = 0, t.flipper = null, t
                }
                return (0, l.default)(e, t), (0, a.default)(e, [{
                    key: "make",
                    value: function () {
                        var t = this;
                        this.nodes.wrapper = f.default.make("div", this.CSS.inlineToolbar), this.nodes.buttons = f.default.make("div", this.CSS.buttonsWrapper), this.nodes.actions = f.default.make("div", this.CSS.actionsWrapper), this.Editor.Listeners.on(this.nodes.wrapper, "mousedown", function (e) {
                            var n = e.target.closest(".".concat(t.CSS.actionsWrapper));
                            n || e.preventDefault()
                        }), f.default.append(this.nodes.wrapper, [this.nodes.buttons, this.nodes.actions]), f.default.append(this.Editor.UI.nodes.wrapper, this.nodes.wrapper), this.addTools(), this.recalculateWidth(), this.enableFlipper()
                    }
                }, {
                    key: "tryToShow",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.allowedToShow() ? (this.move(), this.open(), this.Editor.Toolbar.close(), this.checkToolsState(), this.Editor.BlockSelection.clearSelection()) : t && this.close()
                    }
                }, {
                    key: "move",
                    value: function () {
                        var t = d.default.rect,
                            e = this.Editor.UI.nodes.wrapper.getBoundingClientRect(),
                            n = {
                                x: t.x - e.left,
                                y: t.y + t.height - e.top + this.toolbarVerticalMargin
                            };
                        t.width && (n.x += Math.floor(t.width / 2));
                        var o = n.x - this.width / 2,
                            r = n.x + this.width / 2;
                        this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarLeftOriented, o < this.Editor.UI.contentRect.left), this.nodes.wrapper.classList.toggle(this.CSS.inlineToolbarRightOriented, r > this.Editor.UI.contentRect.right), this.nodes.wrapper.style.left = Math.floor(n.x) + "px", this.nodes.wrapper.style.top = Math.floor(n.y) + "px"
                    }
                }, {
                    key: "close",
                    value: function () {
                        this.nodes.wrapper.classList.remove(this.CSS.inlineToolbarShowed), this.tools.forEach(function (t) {
                            "function" == typeof t.clear && t.clear()
                        }), this.opened = !1, this.flipper.deactivate()
                    }
                }, {
                    key: "open",
                    value: function () {
                        this.filterTools(), this.nodes.wrapper.classList.add(this.CSS.inlineToolbarShowed), this.tools.forEach(function (t) {
                            "function" == typeof t.clear && t.clear()
                        }), this.buttonsList = this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)), this.opened = !0;
                        var t = Array.from(this.buttonsList).filter(function (t) {
                            return !t.hidden
                        });
                        this.flipper.activate(t)
                    }
                }, {
                    key: "allowedToShow",
                    value: function () {
                        var t = d.default.get(),
                            e = d.default.text;
                        if (!t || !t.anchorNode) return !1;
                        if (t.isCollapsed || e.length < 1) return !1;
                        var n = f.default.isElement(t.anchorNode) ? t.anchorNode : t.anchorNode.parentElement;
                        if (t && ["IMG", "INPUT"].includes(n.tagName)) return !1;
                        var o = n.closest('[contenteditable="true"]');
                        if (null === o) return !1;
                        var r = this.Editor.BlockManager.getBlock(t.anchorNode);
                        if (!r) return !1;
                        var i = this.Editor.Tools.getToolSettings(r.name);
                        return i && i[this.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS]
                    }
                }, {
                    key: "filterTools",
                    value: function () {
                        var t = this,
                            e = d.default.get(),
                            n = this.Editor.BlockManager.getBlock(e.anchorNode),
                            o = this.Editor.Tools.getToolSettings(n.name),
                            r = o && o[this.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS],
                            i = Array.from(this.nodes.buttons.querySelectorAll(".".concat(this.CSS.inlineToolButton)));
                        i.forEach(function (e) {
                            e.hidden = !1, e.classList.remove(t.CSS.inlineToolButtonLast)
                        }), Array.isArray(r) && i.forEach(function (t) {
                            t.hidden = !r.includes(t.dataset.tool)
                        });
                        var a = i.filter(function (t) {
                            return !t.hidden
                        }).pop();
                        a && a.classList.add(this.CSS.inlineToolButtonLast), this.recalculateWidth()
                    }
                }, {
                    key: "recalculateWidth",
                    value: function () {
                        this.width = this.nodes.wrapper.offsetWidth
                    }
                }, {
                    key: "addTools",
                    value: function () {
                        var t = this;
                        this.tools.forEach(function (e, n) {
                            t.addTool(n, e)
                        })
                    }
                }, {
                    key: "addTool",
                    value: function (t, e) {
                        var n = this,
                            o = this.Editor,
                            i = o.Listeners,
                            a = o.Tools,
                            s = e.render();
                        if (s) {
                            if (s.dataset.tool = t, this.nodes.buttons.appendChild(s), "function" == typeof e.renderActions) {
                                var c = e.renderActions();
                                this.nodes.actions.appendChild(c)
                            }
                            i.on(s, "click", function (t) {
                                n.toolClicked(e), t.preventDefault()
                            });
                            var l = a.getToolSettings(t),
                                u = null,
                                f = Object.entries(a.internalTools).filter(function (t) {
                                    var e = (0, r.default)(t, 2),
                                        n = (e[0], e[1]);
                                    return p.default.isFunction(n) ? n[a.INTERNAL_SETTINGS.IS_INLINE] : n.class[a.INTERNAL_SETTINGS.IS_INLINE]
                                }).map(function (t) {
                                    var e = (0, r.default)(t, 1),
                                        n = e[0];
                                    return n
                                });
                            f.includes(t) ? u = this.inlineTools[t][a.INTERNAL_SETTINGS.SHORTCUT] : l && l[a.USER_SETTINGS.SHORTCUT] && (u = l[a.USER_SETTINGS.SHORTCUT]), u && this.enableShortcuts(e, u)
                        } else p.default.log("Render method must return an instance of Node", "warn", t)
                    }
                }, {
                    key: "enableShortcuts",
                    value: function (t, e) {
                        var n = this;
                        this.Editor.Shortcuts.add({
                            name: e,
                            handler: function (e) {
                                var o = n.Editor.BlockManager.currentBlock;
                                if (o) {
                                    var r = n.Editor.Tools.getToolSettings(o.name);
                                    r && r[n.Editor.Tools.USER_SETTINGS.ENABLED_INLINE_TOOLS] && (e.preventDefault(), n.toolClicked(t))
                                }
                            }
                        })
                    }
                }, {
                    key: "toolClicked",
                    value: function (t) {
                        var e = d.default.range;
                        t.surround(e), this.checkToolsState()
                    }
                }, {
                    key: "checkToolsState",
                    value: function () {
                        this.tools.forEach(function (t) {
                            t.checkState(d.default.get())
                        })
                    }
                }, {
                    key: "enableFlipper",
                    value: function () {
                        this.flipper = new h.default({
                            focusedItemClass: this.CSS.focusedButton,
                            allowArrows: !1
                        })
                    }
                }, {
                    key: "tools",
                    get: function () {
                        if (!this.toolsInstances || 0 === this.toolsInstances.size) {
                            var t = this.inlineTools;
                            for (var e in this.toolsInstances = new Map, t) t.hasOwnProperty(e) && this.toolsInstances.set(e, t[e])
                        }
                        return this.toolsInstances
                    }
                }, {
                    key: "inlineTools",
                    get: function () {
                        var t = {};
                        for (var e in this.Editor.Tools.inline)
                            if (this.Editor.Tools.inline.hasOwnProperty(e)) {
                                var n = this.Editor.Tools.getToolSettings(e);
                                t[e] = this.Editor.Tools.constructInline(this.Editor.Tools.inline[e], n)
                            } return t
                    }
                }]), e
            }(u.default);
            o.default = g, g.displayName = "InlineToolbar", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(4), n(5), n(6), n(7), n(12), n(14), n(59)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d) {
            "use strict";
            var p = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = p(r), i = p(i), a = p(a), s = p(s), c = p(c), l = p(l), u = p(u), f = p(f), d = p(d);
            var h = function (t) {
                function e() {
                    var t;
                    return (0, r.default)(this, e), (t = (0, a.default)(this, (0, s.default)(e).apply(this, arguments))).opened = !1, t.nodes = {
                        toolbox: null,
                        tooltip: null,
                        buttons: []
                    }, t.displayedToolsCount = 0, t.flipper = null, t
                }
                return (0, c.default)(e, t), (0, i.default)(e, [{
                    key: "make",
                    value: function () {
                        this.nodes.toolbox = u.default.make("div", this.CSS.toolbox), u.default.append(this.Editor.Toolbar.nodes.content, this.nodes.toolbox), this.addTools(), this.addTooltip(), this.enableFlipper()
                    }
                }, {
                    key: "toolButtonActivate",
                    value: function (t, e) {
                        var n = this.Editor.Tools.toolsClasses[e];
                        this.insertNewBlock(n, e)
                    }
                }, {
                    key: "open",
                    value: function () {
                        this.isEmpty || (this.Editor.UI.nodes.wrapper.classList.add(this.CSS.openedToolbarHolderModifier), this.nodes.toolbox.classList.add(this.CSS.toolboxOpened), this.opened = !0, this.flipper.activate())
                    }
                }, {
                    key: "close",
                    value: function () {
                        this.hideTooltip(), this.nodes.toolbox.classList.remove(this.CSS.toolboxOpened), this.Editor.UI.nodes.wrapper.classList.remove(this.CSS.openedToolbarHolderModifier), this.opened = !1, this.flipper.deactivate()
                    }
                }, {
                    key: "toggle",
                    value: function () {
                        this.opened ? this.close() : this.open()
                    }
                }, {
                    key: "hideTooltip",
                    value: function () {
                        this.nodes.tooltip.classList.remove(this.CSS.tooltipShown)
                    }
                }, {
                    key: "addTools",
                    value: function () {
                        var t = this.Editor.Tools.available;
                        for (var e in t) t.hasOwnProperty(e) && this.addTool(e, t[e])
                    }
                }, {
                    key: "addTool",
                    value: function (t, e) {
                        var n = this,
                            o = this.Editor.Tools.INTERNAL_SETTINGS,
                            r = this.Editor.Tools.USER_SETTINGS,
                            i = e[o.TOOLBOX];
                        if (!f.default.isEmpty(i))
                            if (!i || i.icon) {
                                var a = this.Editor.Tools.getToolSettings(t)[r.TOOLBOX] || {},
                                    s = u.default.make("li", [this.CSS.toolboxButton]);
                                s.dataset.tool = t, s.innerHTML = a.icon || i.icon, u.default.append(this.nodes.toolbox, s), this.nodes.toolbox.appendChild(s), this.nodes.buttons.push(s), this.Editor.Listeners.on(s, "click", function (e) {
                                    n.toolButtonActivate(e, t)
                                }), this.Editor.Listeners.on(s, "mouseenter", function () {
                                    n.showTooltip(s, t)
                                }), this.Editor.Listeners.on(s, "mouseleave", function () {
                                    n.hideTooltip()
                                });
                                var c = this.Editor.Tools.getToolSettings(t);
                                c && c[this.Editor.Tools.USER_SETTINGS.SHORTCUT] && this.enableShortcut(e, t, c[this.Editor.Tools.USER_SETTINGS.SHORTCUT]), this.displayedToolsCount++
                            } else f.default.log("Toolbar icon is missed. Tool %o skipped", "warn", t)
                    }
                }, {
                    key: "addTooltip",
                    value: function () {
                        this.nodes.tooltip = u.default.make("div", this.CSS.tooltip, {
                            innerHTML: ""
                        }), u.default.append(this.Editor.Toolbar.nodes.content, this.nodes.tooltip)
                    }
                }, {
                    key: "showTooltip",
                    value: function (t, e) {
                        var n = this.Editor.Tools.getToolSettings(e),
                            o = this.Editor.Tools.available[e][this.Editor.Tools.INTERNAL_SETTINGS.TOOLBOX] || {},
                            r = n.toolbox || {},
                            i = r.title || o.title || e,
                            a = n[this.Editor.Tools.USER_SETTINGS.SHORTCUT],
                            s = document.createDocumentFragment(),
                            c = document.createTextNode(f.default.capitalize(i));
                        if (s.appendChild(c), a) {
                            var l = f.default.getUserOS();
                            a = a.replace(/shift/gi, "⇧").replace(/backspace/gi, "⌫").replace(/enter/gi, "⏎").replace(/up/gi, "↑").replace(/left/gi, "→").replace(/down/gi, "↓").replace(/right/gi, "←").replace(/escape/gi, "⎋").replace(/insert/gi, "Ins").replace(/delete/gi, "␡").replace(/\+/gi, " + "), a = l.mac ? a.replace(/ctrl|cmd/gi, "⌘").replace(/alt/gi, "⌥") : a.replace(/cmd/gi, "Ctrl").replace(/windows/gi, "WIN"), s.appendChild(u.default.make("div", this.CSS.tooltipShortcut, {
                                textContent: a
                            }))
                        }
                        var d = t.offsetLeft,
                            p = Math.floor(this.Editor.BlockManager.currentBlock.holder.offsetHeight / 2);
                        this.nodes.tooltip.innerHTML = "", this.nodes.tooltip.appendChild(s), this.nodes.tooltip.style.left = "".concat(d + 16, "px"), this.nodes.tooltip.style.transform = "translate3d(-50%, ".concat(p, "px, 0)"), this.nodes.tooltip.classList.add(this.CSS.tooltipShown)
                    }
                }, {
                    key: "enableShortcut",
                    value: function (t, e, n) {
                        var o = this;
                        this.Editor.Shortcuts.add({
                            name: n,
                            handler: function (n) {
                                n.preventDefault(), o.insertNewBlock(t, e)
                            }
                        })
                    }
                }, {
                    key: "enableFlipper",
                    value: function () {
                        var t = Array.from(this.nodes.toolbox.childNodes);
                        this.flipper = new d.default({
                            items: t,
                            focusedItemClass: this.CSS.toolboxButtonActive
                        })
                    }
                }, {
                    key: "insertNewBlock",
                    value: function (t, e) {
                        var n, o = this.Editor,
                            r = o.BlockManager,
                            i = o.Caret,
                            a = r.currentBlock;
                        (n = a.isEmpty ? r.replace(e) : r.insert(e)).call("appendCallback", {}), this.Editor.Caret.setToBlock(n), 0 === n.inputs.length && (n === r.lastBlock ? (r.insertAtEnd(), i.setToBlock(r.lastBlock)) : i.setToBlock(r.nextBlock)), this.Editor.Toolbar.close()
                    }
                }, {
                    key: "CSS",
                    get: function () {
                        return {
                            toolbox: "ce-toolbox",
                            toolboxButton: "ce-toolbox__button",
                            toolboxButtonActive: "ce-toolbox__button--active",
                            toolboxOpened: "ce-toolbox--opened",
                            tooltip: "ce-toolbox__tooltip",
                            tooltipShown: "ce-toolbox__tooltip--shown",
                            tooltipShortcut: "ce-toolbox__tooltip-shortcut",
                            openedToolbarHolderModifier: "codex-editor--toolbox-opened"
                        }
                    }
                }, {
                    key: "isEmpty",
                    get: function () {
                        return 0 === this.displayedToolsCount
                    }
                }]), e
            }(l.default);
            o.default = h, h.displayName = "Toolbox", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(58), n(55), n(1), n(2), n(4), n(5), n(6), n(354), n(7), n(14), n(355), n(356), n(357), n(358)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d, p, h, v, g, y) {
            "use strict";
            var m = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = m(r), i = m(i), a = m(a), s = m(s), c = m(c), l = m(l), u = m(u), f = m(f), d = m(d), p = m(p), h = m(h), v = m(v), g = m(g), y = m(y);
            var b = function (t) {
                function e(t) {
                    var n, o = t.config;
                    return (0, a.default)(this, e), (n = (0, c.default)(this, (0, l.default)(e).call(this, {
                        config: o
                    }))).stubTool = "stub", n.toolsClasses = {}, n.toolsAvailable = {}, n.toolsUnavailable = {}, n.toolsSettings = {}, n._inlineTools = {}, n.toolsClasses = {}, n.toolsSettings = {}, n.toolsAvailable = {}, n.toolsUnavailable = {}, n._inlineTools = null, n
                }
                return (0, u.default)(e, t), (0, s.default)(e, [{
                    key: "prepare",
                    value: function () {
                        var t = this;
                        if (this.validateTools(), this.config.tools = p.default.deepMerge({}, this.internalTools, this.config.tools), !this.config.hasOwnProperty("tools") || 0 === Object.keys(this.config.tools).length) throw Error("Can't start without tools");
                        for (var e in this.config.tools) "object" === (0, i.default)(this.config.tools[e]) ? (this.toolsClasses[e] = this.config.tools[e].class, this.toolsSettings[e] = this.config.tools[e], delete this.toolsSettings[e].class) : (this.toolsClasses[e] = this.config.tools[e], this.toolsSettings[e] = {
                            class: this.config.tools[e]
                        });
                        var n = this.getListOfPrepareFunctions();
                        return 0 === n.length ? Promise.resolve() : p.default.sequence(n, function (e) {
                            t.success(e)
                        }, function (e) {
                            t.fallback(e)
                        })
                    }
                }, {
                    key: "success",
                    value: function (t) {
                        this.toolsAvailable[t.toolName] = this.toolsClasses[t.toolName]
                    }
                }, {
                    key: "fallback",
                    value: function (t) {
                        this.toolsUnavailable[t.toolName] = this.toolsClasses[t.toolName]
                    }
                }, {
                    key: "construct",
                    value: function (t, e) {
                        var n = this.toolsClasses[t],
                            o = this.toolsSettings[t][this.USER_SETTINGS.CONFIG] || {};
                        t !== this.config.initialBlock || o.placeholder || (o.placeholder = this.config.placeholder);
                        var r = {
                            api: this.Editor.API.methods,
                            config: o,
                            data: e
                        };
                        return new n(r)
                    }
                }, {
                    key: "constructInline",
                    value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = {
                                api: this.Editor.API.methods,
                                config: e[this.USER_SETTINGS.CONFIG] || {}
                            };
                        return new t(n)
                    }
                }, {
                    key: "isInitial",
                    value: function (t) {
                        return t instanceof this.available[this.config.initialBlock]
                    }
                }, {
                    key: "getToolSettings",
                    value: function (t) {
                        return this.toolsSettings[t]
                    }
                }, {
                    key: "getListOfPrepareFunctions",
                    value: function () {
                        var t = [];
                        for (var e in this.toolsClasses)
                            if (this.toolsClasses.hasOwnProperty(e)) {
                                var n = this.toolsClasses[e];
                                "function" == typeof n.prepare ? t.push({
                                    function: n.prepare,
                                    data: {
                                        toolName: e,
                                        config: this.toolsSettings[e][this.USER_SETTINGS.CONFIG]
                                    }
                                }) : this.toolsAvailable[e] = n
                            } return t
                    }
                }, {
                    key: "validateTools",
                    value: function () {
                        for (var t in this.config.tools)
                            if (this.config.tools.hasOwnProperty(t)) {
                                if (t in this.internalTools) return;
                                var e = this.config.tools[t];
                                if (!p.default.isFunction(e) && !p.default.isFunction(e.class)) throw Error("Tool «".concat(t, "» must be a constructor function or an object with function in the «class» property"))
                            }
                    }
                }, {
                    key: "available",
                    get: function () {
                        return this.toolsAvailable
                    }
                }, {
                    key: "unavailable",
                    get: function () {
                        return this.toolsUnavailable
                    }
                }, {
                    key: "inline",
                    get: function () {
                        var t = this;
                        if (this._inlineTools) return this._inlineTools;
                        var e = Object.entries(this.available).filter(function (e) {
                                var n = (0, r.default)(e, 2),
                                    o = (n[0], n[1]);
                                if (!o[t.INTERNAL_SETTINGS.IS_INLINE]) return !1;
                                var i = ["render", "surround", "checkState"].filter(function (e) {
                                    return !t.constructInline(o)[e]
                                });
                                return !i.length || (p.default.log("Incorrect Inline Tool: ".concat(o.name, ". Some of required methods is not implemented %o"), "warn", i), !1)
                            }),
                            n = {};
                        return e.forEach(function (t) {
                            var e = (0, r.default)(t, 2),
                                o = e[0],
                                i = e[1];
                            return n[o] = i
                        }), this._inlineTools = n, this._inlineTools
                    }
                }, {
                    key: "blockTools",
                    get: function () {
                        var t = this,
                            e = Object.entries(this.available).filter(function (e) {
                                var n = (0, r.default)(e, 2),
                                    o = (n[0], n[1]);
                                return !o[t.INTERNAL_SETTINGS.IS_INLINE]
                            }),
                            n = {};
                        return e.forEach(function (t) {
                            var e = (0, r.default)(t, 2),
                                o = e[0],
                                i = e[1];
                            return n[o] = i
                        }), n
                    }
                }, {
                    key: "INTERNAL_SETTINGS",
                    get: function () {
                        return {
                            IS_ENABLED_LINE_BREAKS: "enableLineBreaks",
                            IS_INLINE: "isInline",
                            SHORTCUT: "shortcut",
                            TOOLBOX: "toolbox",
                            SANITIZE_CONFIG: "sanitize",
                            CONVERSION_CONFIG: "conversionConfig"
                        }
                    }
                }, {
                    key: "USER_SETTINGS",
                    get: function () {
                        return {
                            SHORTCUT: "shortcut",
                            TOOLBOX: "toolbox",
                            ENABLED_INLINE_TOOLS: "inlineToolbar",
                            CONFIG: "config"
                        }
                    }
                }, {
                    key: "internalTools",
                    get: function () {
                        return {
                            bold: {
                                class: h.default
                            },
                            italic: {
                                class: v.default
                            },
                            link: {
                                class: g.default
                            },
                            paragraph: {
                                class: f.default,
                                inlineToolbar: !0
                            },
                            stub: {
                                class: y.default
                            }
                        }
                    }
                }]), e
            }(d.default);
            o.default = b, b.displayName = "Tools", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(26), n(27), n(1), n(2), n(4), n(5), n(6), n(359), n(7), n(12), n(14), n(28), n(72)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u, f, d, p, h, v, g) {
            "use strict";
            var y = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = y(r), i = y(i), a = y(a), s = y(s), c = y(c), l = y(l), u = y(u), f = y(f), d = y(d), p = y(p), h = y(h), v = y(v), g = y(g);
            var m = function (t) {
                function e() {
                    var t;
                    return (0, a.default)(this, e), (t = (0, c.default)(this, (0, l.default)(e).apply(this, arguments))).isMobile = !1, t.nodes = {
                        holder: null,
                        wrapper: null,
                        redactor: null
                    }, t.contentRectCache = void 0, t.resizeDebouncer = h.default.debounce(function () {
                        t.windowResize()
                    }, 200), t
                }
                var o, d;
                return (0, u.default)(e, t), (0, s.default)(e, [{
                    key: "addLoader",
                    value: function () {
                        this.nodes.loader = p.default.make("div", this.CSS.editorLoader), this.nodes.wrapper.prepend(this.nodes.loader), this.nodes.redactor.classList.add(this.CSS.editorZoneHidden)
                    }
                }, {
                    key: "removeLoader",
                    value: function () {
                        this.nodes.loader.remove(), this.nodes.redactor.classList.remove(this.CSS.editorZoneHidden)
                    }
                }, {
                    key: "prepare",
                    value: (d = (0, i.default)(r.default.mark(function t() {
                        return r.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return this.checkIsMobile(), t.next = 3, this.make();
                                case 3:
                                    return this.addLoader(), t.next = 6, this.appendSVGSprite();
                                case 6:
                                    return t.next = 8, this.Editor.Toolbar.make();
                                case 8:
                                    return t.next = 10, this.Editor.InlineToolbar.make();
                                case 10:
                                    return t.next = 12, this.Editor.ConversionToolbar.make();
                                case 12:
                                    return t.next = 14, this.loadStyles();
                                case 14:
                                    return t.next = 16, this.bindEvents();
                                case 16:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return d.apply(this, arguments)
                    })
                }, {
                    key: "checkEmptiness",
                    value: function () {
                        var t = this.Editor.BlockManager;
                        this.nodes.wrapper.classList.toggle(this.CSS.editorEmpty, t.isEditorEmpty)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        this.nodes.holder.innerHTML = ""
                    }
                }, {
                    key: "checkIsMobile",
                    value: function () {
                        this.isMobile = window.innerWidth < 650
                    }
                }, {
                    key: "make",
                    value: (o = (0, i.default)(r.default.mark(function t() {
                        return r.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    this.nodes.holder = p.default.getHolder(this.config.holder), this.nodes.wrapper = p.default.make("div", this.CSS.editorWrapper), this.nodes.redactor = p.default.make("div", this.CSS.editorZone), this.nodes.holder.offsetWidth < this.contentRect.width && this.nodes.wrapper.classList.add(this.CSS.editorWrapperNarrow), this.nodes.redactor.style.paddingBottom = this.config.minHeight + "px", this.nodes.wrapper.appendChild(this.nodes.redactor), this.nodes.holder.appendChild(this.nodes.wrapper);
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "loadStyles",
                    value: function () {
                        var t = n(360),
                            e = p.default.make("style", null, {
                                textContent: t.toString()
                            });
                        p.default.prepend(document.head, e)
                    }
                }, {
                    key: "bindEvents",
                    value: function () {
                        var t = this;
                        this.Editor.Listeners.on(this.nodes.redactor, "click", function (e) {
                            return t.redactorClicked(e)
                        }, !1), this.Editor.Listeners.on(document, "keydown", function (e) {
                            return t.documentKeydown(e)
                        }, !0), this.Editor.Listeners.on(document, "click", function (e) {
                            return t.documentClicked(e)
                        }, !0), h.default.isTouchSupported() && this.Editor.Listeners.on(document, "selectionchange", function (e) {
                            t.selectionChanged(e)
                        }, !0), this.Editor.Listeners.on(window, "resize", function () {
                            t.resizeDebouncer()
                        }, {
                            passive: !0
                        })
                    }
                }, {
                    key: "windowResize",
                    value: function () {
                        this.contentRectCache = null, this.checkIsMobile()
                    }
                }, {
                    key: "documentKeydown",
                    value: function (t) {
                        switch (t.keyCode) {
                            case h.default.keyCodes.ENTER:
                                this.enterPressed(t);
                                break;
                            case h.default.keyCodes.BACKSPACE:
                                this.backspacePressed(t);
                                break;
                            default:
                                this.defaultBehaviour(t)
                        }
                    }
                }, {
                    key: "defaultBehaviour",
                    value: function (t) {
                        var e = t.target.closest(".".concat(this.CSS.editorWrapper)),
                            n = this.Editor.BlockManager.currentBlock,
                            o = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                        e || n && o || (this.Editor.BlockManager.dropPointer(), this.Editor.Toolbar.close())
                    }
                }, {
                    key: "backspacePressed",
                    value: function (t) {
                        var e = this.Editor,
                            n = e.BlockManager,
                            o = e.BlockSelection,
                            r = e.Caret;
                        if (o.anyBlockSelected) {
                            var i = n.removeSelectedBlocks();
                            r.setToBlock(n.insertInitialBlockAtIndex(i, !0), r.positions.START), o.clearSelection(t), t.stopPropagation(), t.stopImmediatePropagation()
                        }
                    }
                }, {
                    key: "enterPressed",
                    value: function (t) {
                        var e = this.Editor,
                            n = e.BlockManager,
                            o = e.BlockSelection,
                            r = e.Caret,
                            i = n.currentBlockIndex >= 0;
                        if (o.anyBlockSelected) {
                            var a = n.removeSelectedBlocks();
                            return r.setToBlock(n.insertInitialBlockAtIndex(a, !0), r.positions.START), o.clearSelection(t), t.preventDefault(), t.stopImmediatePropagation(), void t.stopPropagation()
                        }
                        if (!this.someToolbarOpened && i && "BODY" === t.target.tagName) {
                            var s = this.Editor.BlockManager.insert();
                            this.Editor.Caret.setToBlock(s), this.Editor.BlockManager.highlightCurrentNode(), this.Editor.Toolbar.move(), this.Editor.Toolbar.plusButton.show()
                        }
                        this.Editor.BlockSelection.clearSelection(t)
                    }
                }, {
                    key: "documentClicked",
                    value: function (t) {
                        if (t.isTrusted) {
                            var e = t.target,
                                n = this.nodes.holder.contains(e) || v.default.isAtEditor;
                            n || (this.Editor.BlockManager.dropPointer(), this.Editor.InlineToolbar.close(), this.Editor.Toolbar.close(), this.Editor.BlockSelection.clearSelection(t), this.Editor.ConversionToolbar.close()), v.default.isAtEditor && (v.default.anchorNode === this.nodes.redactor ? this.Editor.Caret.setToTheLastBlock() : this.Editor.BlockManager.setCurrentBlockByChildNode(v.default.anchorNode))
                        }
                    }
                }, {
                    key: "redactorClicked",
                    value: function (t) {
                        if (v.default.isCollapsed) {
                            var e = t.target;
                            e === this.nodes.redactor && (e = document.elementFromPoint(t.clientX, t.clientY));
                            try {
                                this.Editor.BlockManager.setCurrentBlockByChildNode(e), this.Editor.BlockManager.highlightCurrentNode()
                            } catch (t) {
                                this.Editor.RectangleSelection.isRectActivated() || this.Editor.Caret.setToTheLastBlock()
                            }
                            t.stopImmediatePropagation(), t.stopPropagation(), this.Editor.Toolbar.open(), this.Editor.Toolbar.plusButton.hide(), this.Editor.BlockManager.currentBlock || this.Editor.BlockManager.insert();
                            var n = this.Editor.Tools.isInitial(this.Editor.BlockManager.currentBlock.tool);
                            if (n) {
                                var o = this.Editor.BlockManager.currentBlock.isEmpty;
                                o && this.Editor.Toolbar.plusButton.show()
                            }
                        }
                    }
                }, {
                    key: "selectionChanged",
                    value: function (t) {
                        var e = v.default.anchorElement;
                        e && e.closest(".".concat(g.default.CSS.content)) && this.Editor.InlineToolbar.tryToShow()
                    }
                }, {
                    key: "appendSVGSprite",
                    value: function () {
                        var t = p.default.make("div");
                        t.hidden = !0, t.style.display = "none", t.innerHTML = f.default, p.default.append(this.nodes.wrapper, t)
                    }
                }, {
                    key: "CSS",
                    get: function () {
                        return {
                            editorWrapper: "codex-editor",
                            editorWrapperNarrow: "codex-editor--narrow",
                            editorZone: "codex-editor__redactor",
                            editorZoneHidden: "codex-editor__redactor--hidden",
                            editorLoader: "codex-editor__loader",
                            editorEmpty: "codex-editor--empty"
                        }
                    }
                }, {
                    key: "contentRect",
                    get: function () {
                        if (this.contentRectCache) return this.contentRectCache;
                        var t = this.nodes.wrapper.querySelector(".".concat(g.default.CSS.content));
                        return t ? (this.contentRectCache = t.getBoundingClientRect(), this.contentRectCache) : {
                            width: 650,
                            left: 0,
                            right: 0
                        }
                    }
                }, {
                    key: "someToolbarOpened",
                    get: function () {
                        var t = this.Editor,
                            e = t.Toolbox,
                            n = t.BlockSettings,
                            o = t.InlineToolbar,
                            r = t.ConversionToolbar;
                        return n.opened || o.opened || r.opened || e.opened
                    }
                }]), e
            }(d.default);
            o.default = m, m.displayName = "UI", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        n(164), t.exports = n(330)
    }, function (t, e, n) {
        n(165)
    }, function (t, e, n) {
        "use strict";
        n(166), n(310), n(312), n(314), n(316), n(318), n(320), n(322), n(324), n(326), n(129)
    }, function (t, e, n) {
        n(167), n(169), n(170), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(180), n(181), n(182), n(183), n(185), n(186), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(213), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(237), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(248), n(249), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(271), n(272), n(95), n(273), n(274), n(119), n(275), n(276), n(277), n(278), n(120), n(281), n(282), n(283), n(284), n(285), n(286), n(287), n(288), n(289), n(290), n(291), n(292), n(293), n(294), n(295), n(296), n(297), n(298), n(299), n(300), n(301), n(302), n(303), n(304), n(305), n(306), n(307), n(308), n(309), t.exports = n(17)
    }, function (t, e, n) {
        "use strict";
        var o = n(9),
            r = n(21),
            i = n(16),
            a = n(0),
            s = n(19),
            c = n(39).KEY,
            l = n(8),
            u = n(75),
            f = n(48),
            d = n(41),
            p = n(13),
            h = n(76),
            v = n(101),
            g = n(168),
            y = n(79),
            m = n(11),
            b = n(10),
            k = n(23),
            x = n(38),
            S = n(40),
            w = n(45),
            E = n(104),
            T = n(29),
            B = n(15),
            C = n(43),
            _ = T.f,
            I = B.f,
            N = E.f,
            O = o.Symbol,
            M = o.JSON,
            L = M && M.stringify,
            A = p("_hidden"),
            P = p("toPrimitive"),
            R = {}.propertyIsEnumerable,
            z = u("symbol-registry"),
            j = u("symbols"),
            F = u("op-symbols"),
            D = Object.prototype,
            U = "function" == typeof O,
            H = o.QObject,
            G = !H || !H.prototype || !H.prototype.findChild,
            W = i && l(function () {
                return 7 != w(I({}, "a", {
                    get: function () {
                        return I(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function (t, e, n) {
                var o = _(D, e);
                o && delete D[e], I(t, e, n), o && t !== D && I(D, e, o)
            } : I,
            X = function (t) {
                var e = j[t] = w(O.prototype);
                return e._k = t, e
            },
            Y = U && "symbol" == typeof O.iterator ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                return t instanceof O
            },
            V = function (t, e, n) {
                return t === D && V(F, e, n), m(t), e = x(e, !0), m(n), r(j, e) ? (n.enumerable ? (r(t, A) && t[A][e] && (t[A][e] = !1), n = w(n, {
                    enumerable: S(0, !1)
                })) : (r(t, A) || I(t, A, S(1, {})), t[A][e] = !0), W(t, e, n)) : I(t, e, n)
            },
            K = function (t, e) {
                m(t);
                for (var n, o = g(e = k(e)), r = 0, i = o.length; i > r;) V(t, n = o[r++], e[n]);
                return t
            },
            Z = function (t) {
                var e = R.call(this, t = x(t, !0));
                return !(this === D && r(j, t) && !r(F, t)) && (!(e || !r(this, t) || !r(j, t) || r(this, A) && this[A][t]) || e)
            },
            q = function (t, e) {
                if (t = k(t), e = x(e, !0), t !== D || !r(j, e) || r(F, e)) {
                    var n = _(t, e);
                    return !n || !r(j, e) || r(t, A) && t[A][e] || (n.enumerable = !0), n
                }
            },
            J = function (t) {
                for (var e, n = N(k(t)), o = [], i = 0; n.length > i;) r(j, e = n[i++]) || e == A || e == c || o.push(e);
                return o
            },
            $ = function (t) {
                for (var e, n = t === D, o = N(n ? F : k(t)), i = [], a = 0; o.length > a;) !r(j, e = o[a++]) || n && !r(D, e) || i.push(j[e]);
                return i
            };
        U || (s((O = function () {
            if (this instanceof O) throw TypeError("Symbol is not a constructor!");
            var t = d(arguments.length > 0 ? arguments[0] : void 0),
                e = function (n) {
                    this === D && e.call(F, n), r(this, A) && r(this[A], t) && (this[A][t] = !1), W(this, t, S(1, n))
                };
            return i && G && W(D, t, {
                configurable: !0,
                set: e
            }), X(t)
        }).prototype, "toString", function () {
            return this._k
        }), T.f = q, B.f = V, n(46).f = E.f = J, n(57).f = Z, n(61).f = $, i && !n(42) && s(D, "propertyIsEnumerable", Z, !0), h.f = function (t) {
            return X(p(t))
        }), a(a.G + a.W + a.F * !U, {
            Symbol: O
        });
        for (var Q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Q.length > tt;) p(Q[tt++]);
        for (var et = C(p.store), nt = 0; et.length > nt;) v(et[nt++]);
        a(a.S + a.F * !U, "Symbol", {
            for: function (t) {
                return r(z, t += "") ? z[t] : z[t] = O(t)
            },
            keyFor: function (t) {
                if (!Y(t)) throw TypeError(t + " is not a symbol!");
                for (var e in z)
                    if (z[e] === t) return e
            },
            useSetter: function () {
                G = !0
            },
            useSimple: function () {
                G = !1
            }
        }), a(a.S + a.F * !U, "Object", {
            create: function (t, e) {
                return void 0 === e ? w(t) : K(w(t), e)
            },
            defineProperty: V,
            defineProperties: K,
            getOwnPropertyDescriptor: q,
            getOwnPropertyNames: J,
            getOwnPropertySymbols: $
        }), M && a(a.S + a.F * (!U || l(function () {
            var t = O();
            return "[null]" != L([t]) || "{}" != L({
                a: t
            }) || "{}" != L(Object(t))
        })), "JSON", {
            stringify: function (t) {
                for (var e, n, o = [t], r = 1; arguments.length > r;) o.push(arguments[r++]);
                if (n = e = o[1], (b(e) || void 0 !== t) && !Y(t)) return y(e) || (e = function (t, e) {
                    if ("function" == typeof n && (e = n.call(this, t, e)), !Y(e)) return e
                }), o[1] = e, L.apply(M, o)
            }
        }), O.prototype[P] || n(22)(O.prototype, P, O.prototype.valueOf), f(O, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0)
    }, function (t, e, n) {
        var o = n(43),
            r = n(61),
            i = n(57);
        t.exports = function (t) {
            var e = o(t),
                n = r.f;
            if (n)
                for (var a, s = n(t), c = i.f, l = 0; s.length > l;) c.call(t, a = s[l++]) && e.push(a);
            return e
        }
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Object", {
            create: n(45)
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S + o.F * !n(16), "Object", {
            defineProperty: n(15).f
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S + o.F * !n(16), "Object", {
            defineProperties: n(103)
        })
    }, function (t, e, n) {
        var o = n(23),
            r = n(29).f;
        n(30)("getOwnPropertyDescriptor", function () {
            return function (t, e) {
                return r(o(t), e)
            }
        })
    }, function (t, e, n) {
        var o = n(24),
            r = n(47);
        n(30)("getPrototypeOf", function () {
            return function (t) {
                return r(o(t))
            }
        })
    }, function (t, e, n) {
        var o = n(24),
            r = n(43);
        n(30)("keys", function () {
            return function (t) {
                return r(o(t))
            }
        })
    }, function (t, e, n) {
        n(30)("getOwnPropertyNames", function () {
            return n(104).f
        })
    }, function (t, e, n) {
        var o = n(10),
            r = n(39).onFreeze;
        n(30)("freeze", function (t) {
            return function (e) {
                return t && o(e) ? t(r(e)) : e
            }
        })
    }, function (t, e, n) {
        var o = n(10),
            r = n(39).onFreeze;
        n(30)("seal", function (t) {
            return function (e) {
                return t && o(e) ? t(r(e)) : e
            }
        })
    }, function (t, e, n) {
        var o = n(10),
            r = n(39).onFreeze;
        n(30)("preventExtensions", function (t) {
            return function (e) {
                return t && o(e) ? t(r(e)) : e
            }
        })
    }, function (t, e, n) {
        var o = n(10);
        n(30)("isFrozen", function (t) {
            return function (e) {
                return !o(e) || !!t && t(e)
            }
        })
    }, function (t, e, n) {
        var o = n(10);
        n(30)("isSealed", function (t) {
            return function (e) {
                return !o(e) || !!t && t(e)
            }
        })
    }, function (t, e, n) {
        var o = n(10);
        n(30)("isExtensible", function (t) {
            return function (e) {
                return !!o(e) && (!t || t(e))
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S + o.F, "Object", {
            assign: n(105)
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Object", {
            is: n(184)
        })
    }, function (t, e) {
        t.exports = Object.is || function (t, e) {
            return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
        }
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Object", {
            setPrototypeOf: n(81).set
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(62),
            r = {};
        r[n(13)("toStringTag")] = "z", r + "" != "[object z]" && n(19)(Object.prototype, "toString", function () {
            return "[object " + o(this) + "]"
        }, !0)
    }, function (t, e, n) {
        var o = n(0);
        o(o.P, "Function", {
            bind: n(106)
        })
    }, function (t, e, n) {
        var o = n(15).f,
            r = Function.prototype,
            i = /^\s*function ([^ (]*)/;
        "name" in r || n(16) && o(r, "name", {
            configurable: !0,
            get: function () {
                try {
                    return ("" + this).match(i)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(10),
            r = n(47),
            i = n(13)("hasInstance"),
            a = Function.prototype;
        i in a || n(15).f(a, i, {
            value: function (t) {
                if ("function" != typeof this || !o(t)) return !1;
                if (!o(this.prototype)) return t instanceof this;
                for (; t = r(t);)
                    if (this.prototype === t) return !0;
                return !1
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(108);
        o(o.G + o.F * (parseInt != r), {
            parseInt: r
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(109);
        o(o.G + o.F * (parseFloat != r), {
            parseFloat: r
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(9),
            r = n(21),
            i = n(34),
            a = n(83),
            s = n(38),
            c = n(8),
            l = n(46).f,
            u = n(29).f,
            f = n(15).f,
            d = n(63).trim,
            p = o.Number,
            h = p,
            v = p.prototype,
            g = "Number" == i(n(45)(v)),
            y = "trim" in String.prototype,
            m = function (t) {
                var e = s(t, !1);
                if ("string" == typeof e && e.length > 2) {
                    var n, o, r, i = (e = y ? e.trim() : d(e, 3)).charCodeAt(0);
                    if (43 === i || 45 === i) {
                        if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
                    } else if (48 === i) {
                        switch (e.charCodeAt(1)) {
                            case 66:
                            case 98:
                                o = 2, r = 49;
                                break;
                            case 79:
                            case 111:
                                o = 8, r = 55;
                                break;
                            default:
                                return +e
                        }
                        for (var a, c = e.slice(2), l = 0, u = c.length; l < u; l++)
                            if ((a = c.charCodeAt(l)) < 48 || a > r) return NaN;
                        return parseInt(c, o)
                    }
                }
                return +e
            };
        if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
            p = function (t) {
                var e = arguments.length < 1 ? 0 : t,
                    n = this;
                return n instanceof p && (g ? c(function () {
                    v.valueOf.call(n)
                }) : "Number" != i(n)) ? a(new h(m(e)), n, p) : m(e)
            };
            for (var b, k = n(16) ? l(h) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), x = 0; k.length > x; x++) r(h, b = k[x]) && !r(p, b) && f(p, b, u(h, b));
            p.prototype = v, v.constructor = p, n(19)(o, "Number", p)
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(36),
            i = n(110),
            a = n(84),
            s = 1..toFixed,
            c = Math.floor,
            l = [0, 0, 0, 0, 0, 0],
            u = "Number.toFixed: incorrect invocation!",
            f = function (t, e) {
                for (var n = -1, o = e; ++n < 6;) o += t * l[n], l[n] = o % 1e7, o = c(o / 1e7)
            },
            d = function (t) {
                for (var e = 6, n = 0; --e >= 0;) n += l[e], l[e] = c(n / t), n = n % t * 1e7
            },
            p = function () {
                for (var t = 6, e = ""; --t >= 0;)
                    if ("" !== e || 0 === t || 0 !== l[t]) {
                        var n = String(l[t]);
                        e = "" === e ? n : e + a.call("0", 7 - n.length) + n
                    } return e
            },
            h = function (t, e, n) {
                return 0 === e ? n : e % 2 == 1 ? h(t, e - 1, n * t) : h(t * t, e / 2, n)
            };
        o(o.P + o.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !n(8)(function () {
            s.call({})
        })), "Number", {
            toFixed: function (t) {
                var e, n, o, s, c = i(this, u),
                    l = r(t),
                    v = "",
                    g = "0";
                if (l < 0 || l > 20) throw RangeError(u);
                if (c != c) return "NaN";
                if (c <= -1e21 || c >= 1e21) return String(c);
                if (c < 0 && (v = "-", c = -c), c > 1e-21)
                    if (n = (e = function (t) {
                            for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
                            for (; n >= 2;) e += 1, n /= 2;
                            return e
                        }(c * h(2, 69, 1)) - 69) < 0 ? c * h(2, -e, 1) : c / h(2, e, 1), n *= 4503599627370496, (e = 52 - e) > 0) {
                        for (f(0, n), o = l; o >= 7;) f(1e7, 0), o -= 7;
                        for (f(h(10, o, 1), 0), o = e - 1; o >= 23;) d(1 << 23), o -= 23;
                        d(1 << o), f(1, 1), d(2), g = p()
                    } else f(0, n), f(1 << -e, 0), g = p() + a.call("0", l);
                return g = l > 0 ? v + ((s = g.length) <= l ? "0." + a.call("0", l - s) + g : g.slice(0, s - l) + "." + g.slice(s - l)) : v + g
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(8),
            i = n(110),
            a = 1..toPrecision;
        o(o.P + o.F * (r(function () {
            return "1" !== a.call(1, void 0)
        }) || !r(function () {
            a.call({})
        })), "Number", {
            toPrecision: function (t) {
                var e = i(this, "Number#toPrecision: incorrect invocation!");
                return void 0 === t ? a.call(e) : a.call(e, t)
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Number", {
            EPSILON: Math.pow(2, -52)
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(9).isFinite;
        o(o.S, "Number", {
            isFinite: function (t) {
                return "number" == typeof t && r(t)
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Number", {
            isInteger: n(111)
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Number", {
            isNaN: function (t) {
                return t != t
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(111),
            i = Math.abs;
        o(o.S, "Number", {
            isSafeInteger: function (t) {
                return r(t) && i(t) <= 9007199254740991
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Number", {
            MAX_SAFE_INTEGER: 9007199254740991
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Number", {
            MIN_SAFE_INTEGER: -9007199254740991
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(109);
        o(o.S + o.F * (Number.parseFloat != r), "Number", {
            parseFloat: r
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(108);
        o(o.S + o.F * (Number.parseInt != r), "Number", {
            parseInt: r
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(112),
            i = Math.sqrt,
            a = Math.acosh;
        o(o.S + o.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
            acosh: function (t) {
                return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : r(t - 1 + i(t - 1) * i(t + 1))
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = Math.asinh;
        o(o.S + o.F * !(r && 1 / r(0) > 0), "Math", {
            asinh: function t(e) {
                return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = Math.atanh;
        o(o.S + o.F * !(r && 1 / r(-0) < 0), "Math", {
            atanh: function (t) {
                return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(85);
        o(o.S, "Math", {
            cbrt: function (t) {
                return r(t = +t) * Math.pow(Math.abs(t), 1 / 3)
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Math", {
            clz32: function (t) {
                return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = Math.exp;
        o(o.S, "Math", {
            cosh: function (t) {
                return (r(t = +t) + r(-t)) / 2
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(86);
        o(o.S + o.F * (r != Math.expm1), "Math", {
            expm1: r
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Math", {
            fround: n(212)
        })
    }, function (t, e, n) {
        var o = n(85),
            r = Math.pow,
            i = r(2, -52),
            a = r(2, -23),
            s = r(2, 127) * (2 - a),
            c = r(2, -126);
        t.exports = Math.fround || function (t) {
            var e, n, r = Math.abs(t),
                l = o(t);
            return r < c ? l * (r / c / a + 1 / i - 1 / i) * c * a : (n = (e = (1 + a / i) * r) - (e - r)) > s || n != n ? l * (1 / 0) : l * n
        }
    }, function (t, e, n) {
        var o = n(0),
            r = Math.abs;
        o(o.S, "Math", {
            hypot: function (t, e) {
                for (var n, o, i = 0, a = 0, s = arguments.length, c = 0; a < s;) c < (n = r(arguments[a++])) ? (i = i * (o = c / n) * o + 1, c = n) : i += n > 0 ? (o = n / c) * o : n;
                return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(i)
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = Math.imul;
        o(o.S + o.F * n(8)(function () {
            return -5 != r(4294967295, 5) || 2 != r.length
        }), "Math", {
            imul: function (t, e) {
                var n = +t,
                    o = +e,
                    r = 65535 & n,
                    i = 65535 & o;
                return 0 | r * i + ((65535 & n >>> 16) * i + r * (65535 & o >>> 16) << 16 >>> 0)
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Math", {
            log10: function (t) {
                return Math.log(t) * Math.LOG10E
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Math", {
            log1p: n(112)
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Math", {
            log2: function (t) {
                return Math.log(t) / Math.LN2
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Math", {
            sign: n(85)
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(86),
            i = Math.exp;
        o(o.S + o.F * n(8)(function () {
            return -2e-17 != !Math.sinh(-2e-17)
        }), "Math", {
            sinh: function (t) {
                return Math.abs(t = +t) < 1 ? (r(t) - r(-t)) / 2 : (i(t - 1) - i(-t - 1)) * (Math.E / 2)
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(86),
            i = Math.exp;
        o(o.S, "Math", {
            tanh: function (t) {
                var e = r(t = +t),
                    n = r(-t);
                return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (i(t) + i(-t))
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Math", {
            trunc: function (t) {
                return (t > 0 ? Math.floor : Math.ceil)(t)
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(44),
            i = String.fromCharCode,
            a = String.fromCodePoint;
        o(o.S + o.F * (!!a && 1 != a.length), "String", {
            fromCodePoint: function (t) {
                for (var e, n = [], o = arguments.length, a = 0; o > a;) {
                    if (e = +arguments[a++], r(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
                    n.push(e < 65536 ? i(e) : i(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
                }
                return n.join("")
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(23),
            i = n(18);
        o(o.S, "String", {
            raw: function (t) {
                for (var e = r(t.raw), n = i(e.length), o = arguments.length, a = [], s = 0; n > s;) a.push(String(e[s++])), s < o && a.push(String(arguments[s]));
                return a.join("")
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(63)("trim", function (t) {
            return function () {
                return t(this, 3)
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(113)(!0);
        n(87)(String, "String", function (t) {
            this._t = String(t), this._i = 0
        }, function () {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = o(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(113)(!1);
        o(o.P, "String", {
            codePointAt: function (t) {
                return r(this, t)
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(18),
            i = n(88),
            a = "".endsWith;
        o(o.P + o.F * n(90)("endsWith"), "String", {
            endsWith: function (t) {
                var e = i(this, t, "endsWith"),
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    o = r(e.length),
                    s = void 0 === n ? o : Math.min(r(n), o),
                    c = String(t);
                return a ? a.call(e, c, s) : e.slice(s - c.length, s) === c
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(88);
        o(o.P + o.F * n(90)("includes"), "String", {
            includes: function (t) {
                return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.P, "String", {
            repeat: n(84)
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(18),
            i = n(88),
            a = "".startsWith;
        o(o.P + o.F * n(90)("startsWith"), "String", {
            startsWith: function (t) {
                var e = i(this, t, "startsWith"),
                    n = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
                    o = String(t);
                return a ? a.call(e, o, n) : e.slice(n, n + o.length) === o
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(20)("anchor", function (t) {
            return function (e) {
                return t(this, "a", "name", e)
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(20)("big", function (t) {
            return function () {
                return t(this, "big", "", "")
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(20)("blink", function (t) {
            return function () {
                return t(this, "blink", "", "")
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(20)("bold", function (t) {
            return function () {
                return t(this, "b", "", "")
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(20)("fixed", function (t) {
            return function () {
                return t(this, "tt", "", "")
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(20)("fontcolor", function (t) {
            return function (e) {
                return t(this, "font", "color", e)
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(20)("fontsize", function (t) {
            return function (e) {
                return t(this, "font", "size", e)
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(20)("italics", function (t) {
            return function () {
                return t(this, "i", "", "")
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(20)("link", function (t) {
            return function (e) {
                return t(this, "a", "href", e)
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(20)("small", function (t) {
            return function () {
                return t(this, "small", "", "")
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(20)("strike", function (t) {
            return function () {
                return t(this, "strike", "", "")
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(20)("sub", function (t) {
            return function () {
                return t(this, "sub", "", "")
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(20)("sup", function (t) {
            return function () {
                return t(this, "sup", "", "")
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Date", {
            now: function () {
                return (new Date).getTime()
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(24),
            i = n(38);
        o(o.P + o.F * n(8)(function () {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function () {
                    return 1
                }
            })
        }), "Date", {
            toJSON: function (t) {
                var e = r(this),
                    n = i(e);
                return "number" != typeof n || isFinite(n) ? e.toISOString() : null
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(247);
        o(o.P + o.F * (Date.prototype.toISOString !== r), "Date", {
            toISOString: r
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(8),
            r = Date.prototype.getTime,
            i = Date.prototype.toISOString,
            a = function (t) {
                return t > 9 ? t : "0" + t
            };
        t.exports = o(function () {
            return "0385-07-25T07:06:39.999Z" != i.call(new Date(-5e13 - 1))
        }) || !o(function () {
            i.call(new Date(NaN))
        }) ? function () {
            if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
            var t = this,
                e = t.getUTCFullYear(),
                n = t.getUTCMilliseconds(),
                o = e < 0 ? "-" : e > 9999 ? "+" : "";
            return o + ("00000" + Math.abs(e)).slice(o ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + a(n)) + "Z"
        } : i
    }, function (t, e, n) {
        var o = Date.prototype,
            r = o.toString,
            i = o.getTime;
        new Date(NaN) + "" != "Invalid Date" && n(19)(o, "toString", function () {
            var t = i.call(this);
            return t == t ? r.call(this) : "Invalid Date"
        })
    }, function (t, e, n) {
        var o = n(13)("toPrimitive"),
            r = Date.prototype;
        o in r || n(22)(r, o, n(250))
    }, function (t, e, n) {
        "use strict";
        var o = n(11),
            r = n(38);
        t.exports = function (t) {
            if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
            return r(o(this), "number" != t)
        }
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Array", {
            isArray: n(79)
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(32),
            r = n(0),
            i = n(24),
            a = n(115),
            s = n(91),
            c = n(18),
            l = n(92),
            u = n(93);
        r(r.S + r.F * !n(64)(function (t) {
            Array.from(t)
        }), "Array", {
            from: function (t) {
                var e, n, r, f, d = i(t),
                    p = "function" == typeof this ? this : Array,
                    h = arguments.length,
                    v = h > 1 ? arguments[1] : void 0,
                    g = void 0 !== v,
                    y = 0,
                    m = u(d);
                if (g && (v = o(v, h > 2 ? arguments[2] : void 0, 2)), null == m || p == Array && s(m))
                    for (n = new p(e = c(d.length)); e > y; y++) l(n, y, g ? v(d[y], y) : d[y]);
                else
                    for (f = m.call(d), n = new p; !(r = f.next()).done; y++) l(n, y, g ? a(f, v, [r.value, y], !0) : r.value);
                return n.length = y, n
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(92);
        o(o.S + o.F * n(8)(function () {
            function t() {}
            return !(Array.of.call(t) instanceof t)
        }), "Array", {
            of: function () {
                for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) r(n, t, arguments[t++]);
                return n.length = e, n
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(23),
            i = [].join;
        o(o.P + o.F * (n(56) != Object || !n(25)(i)), "Array", {
            join: function (t) {
                return i.call(r(this), void 0 === t ? "," : t)
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(80),
            i = n(34),
            a = n(44),
            s = n(18),
            c = [].slice;
        o(o.P + o.F * n(8)(function () {
            r && c.call(r)
        }), "Array", {
            slice: function (t, e) {
                var n = s(this.length),
                    o = i(this);
                if (e = void 0 === e ? n : e, "Array" == o) return c.call(this, t, e);
                for (var r = a(t, n), l = a(e, n), u = s(l - r), f = new Array(u), d = 0; d < u; d++) f[d] = "String" == o ? this.charAt(r + d) : this[r + d];
                return f
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(33),
            i = n(24),
            a = n(8),
            s = [].sort,
            c = [1, 2, 3];
        o(o.P + o.F * (a(function () {
            c.sort(void 0)
        }) || !a(function () {
            c.sort(null)
        }) || !n(25)(s)), "Array", {
            sort: function (t) {
                return void 0 === t ? s.call(i(this)) : s.call(i(this), r(t))
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(31)(0),
            i = n(25)([].forEach, !0);
        o(o.P + o.F * !i, "Array", {
            forEach: function (t) {
                return r(this, t, arguments[1])
            }
        })
    }, function (t, e, n) {
        var o = n(259);
        t.exports = function (t, e) {
            return new(o(t))(e)
        }
    }, function (t, e, n) {
        var o = n(10),
            r = n(79),
            i = n(13)("species");
        t.exports = function (t) {
            var e;
            return r(t) && ("function" != typeof (e = t.constructor) || e !== Array && !r(e.prototype) || (e = void 0), o(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(31)(1);
        o(o.P + o.F * !n(25)([].map, !0), "Array", {
            map: function (t) {
                return r(this, t, arguments[1])
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(31)(2);
        o(o.P + o.F * !n(25)([].filter, !0), "Array", {
            filter: function (t) {
                return r(this, t, arguments[1])
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(31)(3);
        o(o.P + o.F * !n(25)([].some, !0), "Array", {
            some: function (t) {
                return r(this, t, arguments[1])
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(31)(4);
        o(o.P + o.F * !n(25)([].every, !0), "Array", {
            every: function (t) {
                return r(this, t, arguments[1])
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(116);
        o(o.P + o.F * !n(25)([].reduce, !0), "Array", {
            reduce: function (t) {
                return r(this, t, arguments.length, arguments[1], !1)
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(116);
        o(o.P + o.F * !n(25)([].reduceRight, !0), "Array", {
            reduceRight: function (t) {
                return r(this, t, arguments.length, arguments[1], !0)
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(60)(!1),
            i = [].indexOf,
            a = !!i && 1 / [1].indexOf(1, -0) < 0;
        o(o.P + o.F * (a || !n(25)(i)), "Array", {
            indexOf: function (t) {
                return a ? i.apply(this, arguments) || 0 : r(this, t, arguments[1])
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(23),
            i = n(36),
            a = n(18),
            s = [].lastIndexOf,
            c = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
        o(o.P + o.F * (c || !n(25)(s)), "Array", {
            lastIndexOf: function (t) {
                if (c) return s.apply(this, arguments) || 0;
                var e = r(this),
                    n = a(e.length),
                    o = n - 1;
                for (arguments.length > 1 && (o = Math.min(o, i(arguments[1]))), o < 0 && (o = n + o); o >= 0; o--)
                    if (o in e && e[o] === t) return o || 0;
                return -1
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.P, "Array", {
            copyWithin: n(117)
        }), n(50)("copyWithin")
    }, function (t, e, n) {
        var o = n(0);
        o(o.P, "Array", {
            fill: n(94)
        }), n(50)("fill")
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(31)(5),
            i = !0;
        "find" in [] && Array(1).find(function () {
            i = !1
        }), o(o.P + o.F * i, "Array", {
            find: function (t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(50)("find")
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(31)(6),
            i = "findIndex",
            a = !0;
        i in [] && Array(1)[i](function () {
            a = !1
        }), o(o.P + o.F * a, "Array", {
            findIndex: function (t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(50)(i)
    }, function (t, e, n) {
        n(51)("Array")
    }, function (t, e, n) {
        var o = n(9),
            r = n(83),
            i = n(15).f,
            a = n(46).f,
            s = n(89),
            c = n(96),
            l = o.RegExp,
            u = l,
            f = l.prototype,
            d = /a/g,
            p = /a/g,
            h = new l(d) !== d;
        if (n(16) && (!h || n(8)(function () {
                return p[n(13)("match")] = !1, l(d) != d || l(p) == p || "/a/i" != l(d, "i")
            }))) {
            l = function (t, e) {
                var n = this instanceof l,
                    o = s(t),
                    i = void 0 === e;
                return !n && o && t.constructor === l && i ? t : r(h ? new u(o && !i ? t.source : t, e) : u((o = t instanceof l) ? t.source : t, o && i ? c.call(t) : e), n ? this : f, l)
            };
            for (var v = function (t) {
                    t in l || i(l, t, {
                        configurable: !0,
                        get: function () {
                            return u[t]
                        },
                        set: function (e) {
                            u[t] = e
                        }
                    })
                }, g = a(u), y = 0; g.length > y;) v(g[y++]);
            f.constructor = l, l.prototype = f, n(19)(o, "RegExp", l)
        }
        n(51)("RegExp")
    }, function (t, e, n) {
        "use strict";
        n(119);
        var o = n(11),
            r = n(96),
            i = n(16),
            a = /./.toString,
            s = function (t) {
                n(19)(RegExp.prototype, "toString", t, !0)
            };
        n(8)(function () {
            return "/a/b" != a.call({
                source: "a",
                flags: "b"
            })
        }) ? s(function () {
            var t = o(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? r.call(t) : void 0)
        }) : "toString" != a.name && s(function () {
            return a.call(this)
        })
    }, function (t, e, n) {
        n(65)("match", 1, function (t, e, n) {
            return [function (n) {
                "use strict";
                var o = t(this),
                    r = null == n ? void 0 : n[e];
                return void 0 !== r ? r.call(n, o) : new RegExp(n)[e](String(o))
            }, n]
        })
    }, function (t, e, n) {
        n(65)("replace", 2, function (t, e, n) {
            return [function (o, r) {
                "use strict";
                var i = t(this),
                    a = null == o ? void 0 : o[e];
                return void 0 !== a ? a.call(o, i, r) : n.call(String(i), o, r)
            }, n]
        })
    }, function (t, e, n) {
        n(65)("search", 1, function (t, e, n) {
            return [function (n) {
                "use strict";
                var o = t(this),
                    r = null == n ? void 0 : n[e];
                return void 0 !== r ? r.call(n, o) : new RegExp(n)[e](String(o))
            }, n]
        })
    }, function (t, e, n) {
        n(65)("split", 2, function (t, e, o) {
            "use strict";
            var r = n(89),
                i = o,
                a = [].push;
            if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
                var s = void 0 === /()??/.exec("")[1];
                o = function (t, e) {
                    var n = String(this);
                    if (void 0 === t && 0 === e) return [];
                    if (!r(t)) return i.call(n, t, e);
                    var o, c, l, u, f, d = [],
                        p = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                        h = 0,
                        v = void 0 === e ? 4294967295 : e >>> 0,
                        g = new RegExp(t.source, p + "g");
                    for (s || (o = new RegExp("^" + g.source + "$(?!\\s)", p));
                        (c = g.exec(n)) && !((l = c.index + c[0].length) > h && (d.push(n.slice(h, c.index)), !s && c.length > 1 && c[0].replace(o, function () {
                            for (f = 1; f < arguments.length - 2; f++) void 0 === arguments[f] && (c[f] = void 0)
                        }), c.length > 1 && c.index < n.length && a.apply(d, c.slice(1)), u = c[0].length, h = l, d.length >= v));) g.lastIndex === c.index && g.lastIndex++;
                    return h === n.length ? !u && g.test("") || d.push("") : d.push(n.slice(h)), d.length > v ? d.slice(0, v) : d
                }
            } else "0".split(void 0, 0).length && (o = function (t, e) {
                return void 0 === t && 0 === e ? [] : i.call(this, t, e)
            });
            return [function (n, r) {
                var i = t(this),
                    a = null == n ? void 0 : n[e];
                return void 0 !== a ? a.call(n, i, r) : o.call(String(i), n, r)
            }, o]
        })
    }, function (t, e, n) {
        var o = n(9),
            r = n(97).set,
            i = o.MutationObserver || o.WebKitMutationObserver,
            a = o.process,
            s = o.Promise,
            c = "process" == n(34)(a);
        t.exports = function () {
            var t, e, n, l = function () {
                var o, r;
                for (c && (o = a.domain) && o.exit(); t;) {
                    r = t.fn, t = t.next;
                    try {
                        r()
                    } catch (o) {
                        throw t ? n() : e = void 0, o
                    }
                }
                e = void 0, o && o.enter()
            };
            if (c) n = function () {
                a.nextTick(l)
            };
            else if (!i || o.navigator && o.navigator.standalone)
                if (s && s.resolve) {
                    var u = s.resolve(void 0);
                    n = function () {
                        u.then(l)
                    }
                } else n = function () {
                    r.call(o, l)
                };
            else {
                var f = !0,
                    d = document.createTextNode("");
                new i(l).observe(d, {
                    characterData: !0
                }), n = function () {
                    d.data = f = !f
                }
            }
            return function (o) {
                var r = {
                    fn: o,
                    next: void 0
                };
                e && (e.next = r), t || (t = r, n()), e = r
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    }, function (t, e, n) {
        "use strict";
        var o = n(123),
            r = n(54);
        t.exports = n(69)("Map", function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            get: function (t) {
                var e = o.getEntry(r(this, "Map"), t);
                return e && e.v
            },
            set: function (t, e) {
                return o.def(r(this, "Map"), 0 === t ? 0 : t, e)
            }
        }, o, !0)
    }, function (t, e, n) {
        "use strict";
        var o = n(123),
            r = n(54);
        t.exports = n(69)("Set", function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function (t) {
                return o.def(r(this, "Set"), t = 0 === t ? 0 : t, t)
            }
        }, o)
    }, function (t, e, n) {
        "use strict";
        var o, r = n(31)(0),
            i = n(19),
            a = n(39),
            s = n(105),
            c = n(124),
            l = n(10),
            u = n(8),
            f = n(54),
            d = a.getWeak,
            p = Object.isExtensible,
            h = c.ufstore,
            v = {},
            g = function (t) {
                return function () {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            },
            y = {
                get: function (t) {
                    if (l(t)) {
                        var e = d(t);
                        return !0 === e ? h(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
                    }
                },
                set: function (t, e) {
                    return c.def(f(this, "WeakMap"), t, e)
                }
            },
            m = t.exports = n(69)("WeakMap", g, y, c, !0, !0);
        u(function () {
            return 7 != (new m).set((Object.freeze || Object)(v), 7).get(v)
        }) && (s((o = c.getConstructor(g, "WeakMap")).prototype, y), a.NEED = !0, r(["delete", "has", "get", "set"], function (t) {
            var e = m.prototype,
                n = e[t];
            i(e, t, function (e, r) {
                if (l(e) && !p(e)) {
                    this._f || (this._f = new o);
                    var i = this._f[t](e, r);
                    return "set" == t ? this : i
                }
                return n.call(this, e, r)
            })
        }))
    }, function (t, e, n) {
        "use strict";
        var o = n(124),
            r = n(54);
        n(69)("WeakSet", function (t) {
            return function () {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function (t) {
                return o.def(r(this, "WeakSet"), t, !0)
            }
        }, o, !1, !0)
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(70),
            i = n(98),
            a = n(11),
            s = n(44),
            c = n(18),
            l = n(10),
            u = n(9).ArrayBuffer,
            f = n(67),
            d = i.ArrayBuffer,
            p = i.DataView,
            h = r.ABV && u.isView,
            v = d.prototype.slice,
            g = r.VIEW;
        o(o.G + o.W + o.F * (u !== d), {
            ArrayBuffer: d
        }), o(o.S + o.F * !r.CONSTR, "ArrayBuffer", {
            isView: function (t) {
                return h && h(t) || l(t) && g in t
            }
        }), o(o.P + o.U + o.F * n(8)(function () {
            return !new d(2).slice(1, void 0).byteLength
        }), "ArrayBuffer", {
            slice: function (t, e) {
                if (void 0 !== v && void 0 === e) return v.call(a(this), t);
                for (var n = a(this).byteLength, o = s(t, n), r = s(void 0 === e ? n : e, n), i = new(f(this, d))(c(r - o)), l = new p(this), u = new p(i), h = 0; o < r;) u.setUint8(h++, l.getUint8(o++));
                return i
            }
        }), n(51)("ArrayBuffer")
    }, function (t, e, n) {
        var o = n(0);
        o(o.G + o.W + o.F * !n(70).ABV, {
            DataView: n(98).DataView
        })
    }, function (t, e, n) {
        n(37)("Int8", 1, function (t) {
            return function (e, n, o) {
                return t(this, e, n, o)
            }
        })
    }, function (t, e, n) {
        n(37)("Uint8", 1, function (t) {
            return function (e, n, o) {
                return t(this, e, n, o)
            }
        })
    }, function (t, e, n) {
        n(37)("Uint8", 1, function (t) {
            return function (e, n, o) {
                return t(this, e, n, o)
            }
        }, !0)
    }, function (t, e, n) {
        n(37)("Int16", 2, function (t) {
            return function (e, n, o) {
                return t(this, e, n, o)
            }
        })
    }, function (t, e, n) {
        n(37)("Uint16", 2, function (t) {
            return function (e, n, o) {
                return t(this, e, n, o)
            }
        })
    }, function (t, e, n) {
        n(37)("Int32", 4, function (t) {
            return function (e, n, o) {
                return t(this, e, n, o)
            }
        })
    }, function (t, e, n) {
        n(37)("Uint32", 4, function (t) {
            return function (e, n, o) {
                return t(this, e, n, o)
            }
        })
    }, function (t, e, n) {
        n(37)("Float32", 4, function (t) {
            return function (e, n, o) {
                return t(this, e, n, o)
            }
        })
    }, function (t, e, n) {
        n(37)("Float64", 8, function (t) {
            return function (e, n, o) {
                return t(this, e, n, o)
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(33),
            i = n(11),
            a = (n(9).Reflect || {}).apply,
            s = Function.apply;
        o(o.S + o.F * !n(8)(function () {
            a(function () {})
        }), "Reflect", {
            apply: function (t, e, n) {
                var o = r(t),
                    c = i(n);
                return a ? a(o, e, c) : s.call(o, e, c)
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(45),
            i = n(33),
            a = n(11),
            s = n(10),
            c = n(8),
            l = n(106),
            u = (n(9).Reflect || {}).construct,
            f = c(function () {
                function t() {}
                return !(u(function () {}, [], t) instanceof t)
            }),
            d = !c(function () {
                u(function () {})
            });
        o(o.S + o.F * (f || d), "Reflect", {
            construct: function (t, e) {
                i(t), a(e);
                var n = arguments.length < 3 ? t : i(arguments[2]);
                if (d && !f) return u(t, e, n);
                if (t == n) {
                    switch (e.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(e[0]);
                        case 2:
                            return new t(e[0], e[1]);
                        case 3:
                            return new t(e[0], e[1], e[2]);
                        case 4:
                            return new t(e[0], e[1], e[2], e[3])
                    }
                    var o = [null];
                    return o.push.apply(o, e), new(l.apply(t, o))
                }
                var c = n.prototype,
                    p = r(s(c) ? c : Object.prototype),
                    h = Function.apply.call(t, p, e);
                return s(h) ? h : p
            }
        })
    }, function (t, e, n) {
        var o = n(15),
            r = n(0),
            i = n(11),
            a = n(38);
        r(r.S + r.F * n(8)(function () {
            Reflect.defineProperty(o.f({}, 1, {
                value: 1
            }), 1, {
                value: 2
            })
        }), "Reflect", {
            defineProperty: function (t, e, n) {
                i(t), e = a(e, !0), i(n);
                try {
                    return o.f(t, e, n), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(29).f,
            i = n(11);
        o(o.S, "Reflect", {
            deleteProperty: function (t, e) {
                var n = r(i(t), e);
                return !(n && !n.configurable) && delete t[e]
            }
        })
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(11),
            i = function (t) {
                this._t = r(t), this._i = 0;
                var e, n = this._k = [];
                for (e in t) n.push(e)
            };
        n(114)(i, "Object", function () {
            var t, e = this._k;
            do {
                if (this._i >= e.length) return {
                    value: void 0,
                    done: !0
                }
            } while (!((t = e[this._i++]) in this._t));
            return {
                value: t,
                done: !1
            }
        }), o(o.S, "Reflect", {
            enumerate: function (t) {
                return new i(t)
            }
        })
    }, function (t, e, n) {
        var o = n(29),
            r = n(47),
            i = n(21),
            a = n(0),
            s = n(10),
            c = n(11);
        a(a.S, "Reflect", {
            get: function t(e, n) {
                var a, l, u = arguments.length < 3 ? e : arguments[2];
                return c(e) === u ? e[n] : (a = o.f(e, n)) ? i(a, "value") ? a.value : void 0 !== a.get ? a.get.call(u) : void 0 : s(l = r(e)) ? t(l, n, u) : void 0
            }
        })
    }, function (t, e, n) {
        var o = n(29),
            r = n(0),
            i = n(11);
        r(r.S, "Reflect", {
            getOwnPropertyDescriptor: function (t, e) {
                return o.f(i(t), e)
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(47),
            i = n(11);
        o(o.S, "Reflect", {
            getPrototypeOf: function (t) {
                return r(i(t))
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Reflect", {
            has: function (t, e) {
                return e in t
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(11),
            i = Object.isExtensible;
        o(o.S, "Reflect", {
            isExtensible: function (t) {
                return r(t), !i || i(t)
            }
        })
    }, function (t, e, n) {
        var o = n(0);
        o(o.S, "Reflect", {
            ownKeys: n(126)
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(11),
            i = Object.preventExtensions;
        o(o.S, "Reflect", {
            preventExtensions: function (t) {
                r(t);
                try {
                    return i && i(t), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function (t, e, n) {
        var o = n(15),
            r = n(29),
            i = n(47),
            a = n(21),
            s = n(0),
            c = n(40),
            l = n(11),
            u = n(10);
        s(s.S, "Reflect", {
            set: function t(e, n, s) {
                var f, d, p = arguments.length < 4 ? e : arguments[3],
                    h = r.f(l(e), n);
                if (!h) {
                    if (u(d = i(e))) return t(d, n, s, p);
                    h = c(0)
                }
                if (a(h, "value")) {
                    if (!1 === h.writable || !u(p)) return !1;
                    if (f = r.f(p, n)) {
                        if (f.get || f.set || !1 === f.writable) return !1;
                        f.value = s, o.f(p, n, f)
                    } else o.f(p, n, c(0, s));
                    return !0
                }
                return void 0 !== h.set && (h.set.call(p, s), !0)
            }
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(81);
        r && o(o.S, "Reflect", {
            setPrototypeOf: function (t, e) {
                r.check(t, e);
                try {
                    return r.set(t, e), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function (t, e, n) {
        n(311), t.exports = n(17).Array.includes
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(60)(!0);
        o(o.P, "Array", {
            includes: function (t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), n(50)("includes")
    }, function (t, e, n) {
        n(313), t.exports = n(17).String.padStart
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(127),
            i = n(68);
        o(o.P + o.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(i), "String", {
            padStart: function (t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
            }
        })
    }, function (t, e, n) {
        n(315), t.exports = n(17).String.padEnd
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(127),
            i = n(68);
        o(o.P + o.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(i), "String", {
            padEnd: function (t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
            }
        })
    }, function (t, e, n) {
        n(317), t.exports = n(76).f("asyncIterator")
    }, function (t, e, n) {
        n(101)("asyncIterator")
    }, function (t, e, n) {
        n(319), t.exports = n(17).Object.getOwnPropertyDescriptors
    }, function (t, e, n) {
        var o = n(0),
            r = n(126),
            i = n(23),
            a = n(29),
            s = n(92);
        o(o.S, "Object", {
            getOwnPropertyDescriptors: function (t) {
                for (var e, n, o = i(t), c = a.f, l = r(o), u = {}, f = 0; l.length > f;) void 0 !== (n = c(o, e = l[f++])) && s(u, e, n);
                return u
            }
        })
    }, function (t, e, n) {
        n(321), t.exports = n(17).Object.values
    }, function (t, e, n) {
        var o = n(0),
            r = n(128)(!1);
        o(o.S, "Object", {
            values: function (t) {
                return r(t)
            }
        })
    }, function (t, e, n) {
        n(323), t.exports = n(17).Object.entries
    }, function (t, e, n) {
        var o = n(0),
            r = n(128)(!0);
        o(o.S, "Object", {
            entries: function (t) {
                return r(t)
            }
        })
    }, function (t, e, n) {
        "use strict";
        n(120), n(325), t.exports = n(17).Promise.finally
    }, function (t, e, n) {
        "use strict";
        var o = n(0),
            r = n(17),
            i = n(9),
            a = n(67),
            s = n(122);
        o(o.P + o.R, "Promise", {
            finally: function (t) {
                var e = a(this, r.Promise || i.Promise),
                    n = "function" == typeof t;
                return this.then(n ? function (n) {
                    return s(e, t()).then(function () {
                        return n
                    })
                } : t, n ? function (n) {
                    return s(e, t()).then(function () {
                        throw n
                    })
                } : t)
            }
        })
    }, function (t, e, n) {
        n(327), n(328), n(329), t.exports = n(17)
    }, function (t, e, n) {
        var o = n(9),
            r = n(0),
            i = n(68),
            a = [].slice,
            s = /MSIE .\./.test(i),
            c = function (t) {
                return function (e, n) {
                    var o = arguments.length > 2,
                        r = !!o && a.call(arguments, 2);
                    return t(o ? function () {
                        ("function" == typeof e ? e : Function(e)).apply(this, r)
                    } : e, n)
                }
            };
        r(r.G + r.B + r.F * s, {
            setTimeout: c(o.setTimeout),
            setInterval: c(o.setInterval)
        })
    }, function (t, e, n) {
        var o = n(0),
            r = n(97);
        o(o.G + o.B, {
            setImmediate: r.set,
            clearImmediate: r.clear
        })
    }, function (t, e, n) {
        for (var o = n(95), r = n(43), i = n(19), a = n(9), s = n(22), c = n(49), l = n(13), u = l("iterator"), f = l("toStringTag"), d = c.Array, p = {
                CSSRuleList: !0,
                CSSStyleDeclaration: !1,
                CSSValueList: !1,
                ClientRectList: !1,
                DOMRectList: !1,
                DOMStringList: !1,
                DOMTokenList: !0,
                DataTransferItemList: !1,
                FileList: !1,
                HTMLAllCollection: !1,
                HTMLCollection: !1,
                HTMLFormElement: !1,
                HTMLSelectElement: !1,
                MediaList: !0,
                MimeTypeArray: !1,
                NamedNodeMap: !1,
                NodeList: !0,
                PaintRequestList: !1,
                Plugin: !1,
                PluginArray: !1,
                SVGLengthList: !1,
                SVGNumberList: !1,
                SVGPathSegList: !1,
                SVGPointList: !1,
                SVGStringList: !1,
                SVGTransformList: !1,
                SourceBufferList: !1,
                StyleSheetList: !0,
                TextTrackCueList: !1,
                TextTrackList: !1,
                TouchList: !1
            }, h = r(p), v = 0; v < h.length; v++) {
            var g, y = h[v],
                m = p[y],
                b = a[y],
                k = b && b.prototype;
            if (k && (k[u] || s(k, u, d), k[f] || s(k, f, y), c[y] = d, m))
                for (g in o) k[g] || i(k, g, o[g], !0)
        }
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(58), n(55), n(1), n(2), n(334), n(336), n(337)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u) {
            "use strict";
            var f = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), u = f(u);
            var d = function () {
                function t(e) {
                    var n = this;
                    (0, a.default)(this, t);
                    var o = function () {};
                    "object" === (0, i.default)(e) && "function" == typeof e.onReady && (o = e.onReady);
                    var r = new u.default(e);
                    this.isReady = r.isReady.then(function () {
                        n.exportAPI(r), o()
                    })
                }
                return (0, s.default)(t, null, [{
                    key: "version",
                    get: function () {
                        return "2.15.1"
                    }
                }]), (0, s.default)(t, [{
                    key: "exportAPI",
                    value: function (t) {
                        var e = this;
                        ["configuration"].forEach(function (n) {
                            e[n] = t[n]
                        }), this.destroy = function () {
                            for (var n in t.moduleInstances.Listeners.removeAll(), t.moduleInstances.UI.destroy(), t.moduleInstances.ModificationsObserver.destroy(), t = null, e) e.hasOwnProperty(n) && delete e[n];
                            Object.setPrototypeOf(e, null)
                        }, Object.setPrototypeOf(this, t.moduleInstances.API.methods), delete this.exportAPI, Object.entries({
                            blocks: {
                                clear: "clear",
                                render: "render"
                            },
                            caret: {
                                focus: "focus"
                            },
                            events: {
                                on: "on",
                                off: "off",
                                emit: "emit"
                            },
                            saver: {
                                save: "save"
                            }
                        }).forEach(function (n) {
                            var o = (0, r.default)(n, 2),
                                i = o[0],
                                a = o[1];
                            Object.entries(a).forEach(function (n) {
                                var o = (0, r.default)(n, 2),
                                    a = o[0],
                                    s = o[1];
                                e[s] = t.moduleInstances.API.methods[i][a]
                            })
                        })
                    }
                }]), t
            }();
            o.default = d, d.displayName = "EditorJS", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e) {
        t.exports = function (t) {
            if (Array.isArray(t)) return t
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            var n = [],
                o = !0,
                r = !1,
                i = void 0;
            try {
                for (var a, s = t[Symbol.iterator](); !(o = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); o = !0);
            } catch (t) {
                r = !0, i = t
            } finally {
                try {
                    o || null == s.return || s.return()
                } finally {
                    if (r) throw i
                }
            }
            return n
        }
    }, function (t, e) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }, function (t, e, n) {
        (e = t.exports = function (...t) {
            return r(...t)
        }).__esModule = !0;
        const o = n(335),
            r = o.default;
        Object.assign(e, o)
    }, function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = function () {}, e.revert = function () {}
    }, function (t, e, n) {
        var o, r, i;
        r = [], void 0 === (i = "function" == typeof (o = function () {
            "use strict";
            Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (t) {
                for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;);
                return n > -1
            }), Element.prototype.closest || (Element.prototype.closest = function (t) {
                var e = this;
                if (!document.documentElement.contains(e)) return null;
                do {
                    if (e.matches(t)) return e;
                    e = e.parentElement || e.parentNode
                } while (null !== e);
                return null
            }), Element.prototype.prepend || (Element.prototype.prepend = function (t) {
                var e = document.createDocumentFragment();
                Array.isArray(t) || (t = [t]), t.forEach(function (t) {
                    var n = t instanceof Node;
                    e.appendChild(n ? t : document.createTextNode(String(t)))
                }), this.insertBefore(e, this.firstChild)
            })
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(55), n(26), n(27), n(1), n(2), n(12), n(14)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c, l, u) {
            "use strict";
            var f = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = f(r), i = f(i), a = f(a), s = f(s), c = f(c), l = f(l), u = f(u);
            var d = n(343),
                p = [];
            d.keys().forEach(function (t) {
                t.match(/^\.\/[^_][\w\/]*\.([tj])s$/) && p.push(d(t))
            });
            var h = function () {
                function t(e) {
                    var n, o, r = this;
                    (0, s.default)(this, t), this.moduleInstances = {}, this.isReady = new Promise(function (t, e) {
                        n = t, o = e
                    }), Promise.resolve().then((0, a.default)(i.default.mark(function t() {
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return r.configuration = e, t.next = 3, r.validate();
                                case 3:
                                    return t.next = 5, r.init();
                                case 5:
                                    return t.next = 7, r.start();
                                case 7:
                                    u.default.log("I'm ready! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "log", "", "color: #E24A75"), setTimeout(function () {
                                        if (r.configuration.autofocus) {
                                            var t = r.moduleInstances,
                                                e = t.BlockManager,
                                                o = t.Caret;
                                            o.setToBlock(e.blocks[0], o.positions.START)
                                        }
                                        r.moduleInstances.UI.removeLoader(), n()
                                    }, 500);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }))).catch(function (t) {
                        u.default.log("Editor.js is not ready because of ".concat(t), "error"), o(t)
                    })
                }
                var e, n;
                return (0, c.default)(t, [{
                    key: "validate",
                    value: (n = (0, a.default)(i.default.mark(function t() {
                        var e, n, o;
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = this.config, n = e.holderId, o = e.holder, !n || !o) {
                                        t.next = 3;
                                        break
                                    }
                                    throw Error("«holderId» and «holder» param can't assign at the same time.");
                                case 3:
                                    if ("string" != typeof o || l.default.get(o)) {
                                        t.next = 5;
                                        break
                                    }
                                    throw Error("element with ID «".concat(o, "» is missing. Pass correct holder's ID."));
                                case 5:
                                    if (!o || "object" !== (0, r.default)(o) || l.default.isElement(o)) {
                                        t.next = 7;
                                        break
                                    }
                                    throw Error("holder as HTMLElement if provided must be inherit from Element class.");
                                case 7:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "init",
                    value: function () {
                        this.constructModules(), this.configureModules()
                    }
                }, {
                    key: "start",
                    value: (e = (0, a.default)(i.default.mark(function t() {
                        var e, n = this;
                        return i.default.wrap(function (t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e = ["Tools", "UI", "BlockManager", "Paste", "DragNDrop", "ModificationsObserver", "BlockSelection", "RectangleSelection"], t.next = 3, e.reduce(function (t, e) {
                                        return t.then((0, a.default)(i.default.mark(function t() {
                                            return i.default.wrap(function (t) {
                                                for (;;) switch (t.prev = t.next) {
                                                    case 0:
                                                        return t.prev = 0, t.next = 3, n.moduleInstances[e].prepare();
                                                    case 3:
                                                        t.next = 8;
                                                        break;
                                                    case 5:
                                                        t.prev = 5, t.t0 = t.catch(0), u.default.log("Module ".concat(e, " was skipped because of %o"), "warn", t.t0);
                                                    case 8:
                                                    case "end":
                                                        return t.stop()
                                                }
                                            }, t, null, [
                                                [0, 5]
                                            ])
                                        })))
                                    }, Promise.resolve());
                                case 3:
                                    return t.abrupt("return", this.moduleInstances.Renderer.render(this.config.data.blocks));
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return e.apply(this, arguments)
                    })
                }, {
                    key: "constructModules",
                    value: function () {
                        var t = this;
                        p.forEach(function (e) {
                            try {
                                t.moduleInstances[e.displayName] = new e({
                                    config: t.configuration
                                })
                            } catch (t) {
                                u.default.log("Module ".concat(e.displayName, " skipped because"), "warn", t)
                            }
                        })
                    }
                }, {
                    key: "configureModules",
                    value: function () {
                        for (var t in this.moduleInstances) this.moduleInstances.hasOwnProperty(t) && (this.moduleInstances[t].state = this.getModulesDiff(t))
                    }
                }, {
                    key: "getModulesDiff",
                    value: function (t) {
                        var e = {};
                        for (var n in this.moduleInstances) n !== t && (e[n] = this.moduleInstances[n]);
                        return e
                    }
                }, {
                    key: "configuration",
                    set: function (t) {
                        "object" !== (0, r.default)(t) && (t = {
                            holder: t
                        }), t.holderId && !t.holder && (t.holder = t.holderId, t.holderId = null, u.default.log("holderId property will deprecated in next major release, use holder property instead.", "warn")), this.config = t, null == this.config.holder && (this.config.holder = "editorjs"), this.config.initialBlock = this.config.initialBlock || "paragraph", this.config.minHeight = this.config.minHeight || 300;
                        var e = {
                            type: this.config.initialBlock,
                            data: {}
                        };
                        this.config.placeholder = this.config.placeholder || !1, this.config.sanitizer = this.config.sanitizer || {
                            p: !0,
                            b: !0,
                            a: !0
                        }, this.config.hideToolbar = !!this.config.hideToolbar && this.config.hideToolbar, this.config.tools = this.config.tools || {}, this.config.data = this.config.data || {}, this.config.onReady = this.config.onReady || function () {}, this.config.onChange = this.config.onChange || function () {}, u.default.isEmpty(this.config.data) ? (this.config.data = {}, this.config.data.blocks = [e]) : this.config.data.blocks && 0 !== this.config.data.blocks.length || (this.config.data.blocks = [e])
                    },
                    get: function () {
                        return this.config
                    }
                }]), t
            }();
            o.default = h, h.displayName = "Core", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o = function () {
                return this || "object" == typeof self && self
            }() || Function("return this")(),
            r = o.regeneratorRuntime && Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime") >= 0,
            i = r && o.regeneratorRuntime;
        if (o.regeneratorRuntime = void 0, t.exports = n(129), r) o.regeneratorRuntime = i;
        else try {
            delete o.regeneratorRuntime
        } catch (t) {
            o.regeneratorRuntime = void 0
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }
    }, function (t, e) {
        t.exports = function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }
    }, function (t, e) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }
    }, function (t, e) {
        t.exports = function (t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }
    }, function (t, e, n) {
        var o = {
            "./api": 71,
            "./api/": 71,
            "./api/blocks": 130,
            "./api/blocks.ts": 130,
            "./api/caret": 131,
            "./api/caret.ts": 131,
            "./api/events": 132,
            "./api/events.ts": 132,
            "./api/index": 71,
            "./api/index.ts": 71,
            "./api/inlineToolbar": 133,
            "./api/inlineToolbar.ts": 133,
            "./api/listeners": 134,
            "./api/listeners.ts": 134,
            "./api/notifier": 135,
            "./api/notifier.ts": 135,
            "./api/sanitizer": 136,
            "./api/sanitizer.ts": 136,
            "./api/saver": 137,
            "./api/saver.ts": 137,
            "./api/selection": 138,
            "./api/selection.ts": 138,
            "./api/styles": 139,
            "./api/styles.ts": 139,
            "./api/toolbar": 140,
            "./api/toolbar.ts": 140,
            "./blockEvents": 141,
            "./blockEvents.ts": 141,
            "./blockManager": 142,
            "./blockManager.ts": 142,
            "./blockSelection": 143,
            "./blockSelection.ts": 143,
            "./caret": 144,
            "./caret.ts": 144,
            "./crossBlockSelection": 145,
            "./crossBlockSelection.ts": 145,
            "./dragNDrop": 146,
            "./dragNDrop.ts": 146,
            "./events": 147,
            "./events.ts": 147,
            "./listeners": 148,
            "./listeners.ts": 148,
            "./modificationsObserver": 149,
            "./modificationsObserver.ts": 149,
            "./notifier": 150,
            "./notifier.ts": 150,
            "./paste": 151,
            "./paste.ts": 151,
            "./rectangleSelection": 152,
            "./rectangleSelection.ts": 152,
            "./renderer": 153,
            "./renderer.ts": 153,
            "./sanitizer": 154,
            "./sanitizer.ts": 154,
            "./saver": 155,
            "./saver.ts": 155,
            "./shortcuts": 156,
            "./shortcuts.ts": 156,
            "./toolbar": 73,
            "./toolbar/": 73,
            "./toolbar/blockSettings": 157,
            "./toolbar/blockSettings.ts": 157,
            "./toolbar/conversion": 158,
            "./toolbar/conversion.ts": 158,
            "./toolbar/index": 73,
            "./toolbar/index.ts": 73,
            "./toolbar/inline": 159,
            "./toolbar/inline.ts": 159,
            "./toolbar/toolbox": 160,
            "./toolbar/toolbox.ts": 160,
            "./tools": 161,
            "./tools.ts": 161,
            "./ui": 162,
            "./ui.ts": 162
        };

        function r(t) {
            var e = i(t);
            return n(e)
        }

        function i(t) {
            if (!n.o(o, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }
            return o[t]
        }
        r.keys = function () {
            return Object.keys(o)
        }, r.resolve = i, t.exports = r, r.id = 343
    }, function (t, e) {
        t.exports = function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }
    }, function (t, e) {
        function n(e, o) {
            return t.exports = n = Object.setPrototypeOf || function (t, e) {
                return t.__proto__ = e, t
            }, n(e, o)
        }
        t.exports = n
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(12)], void 0 === (i = "function" == typeof (o = function (o, r, i, a) {
            "use strict";
            var s = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var c = function () {
                function t(e, n) {
                    (0, r.default)(this, t), this.cursor = -1, this.items = [], this.items = e || [], this.focusedCssClass = n
                }
                return (0, i.default)(t, [{
                    key: "setItems",
                    value: function (t) {
                        this.items = t
                    }
                }, {
                    key: "next",
                    value: function () {
                        this.cursor = this.leafNodesAndReturnIndex(t.directions.RIGHT)
                    }
                }, {
                    key: "previous",
                    value: function () {
                        this.cursor = this.leafNodesAndReturnIndex(t.directions.LEFT)
                    }
                }, {
                    key: "dropCursor",
                    value: function () {
                        -1 !== this.cursor && (this.items[this.cursor].classList.remove(this.focusedCssClass), this.cursor = -1)
                    }
                }, {
                    key: "leafNodesAndReturnIndex",
                    value: function (e) {
                        var n = this.cursor;
                        return -1 === n ? n = e === t.directions.RIGHT ? -1 : 0 : this.items[n].classList.remove(this.focusedCssClass), n = e === t.directions.RIGHT ? (n + 1) % this.items.length : (this.items.length + n - 1) % this.items.length, a.default.isNativeInput(this.items[n]) && this.items[n].focus(), this.items[n].classList.add(this.focusedCssClass), n
                    }
                }, {
                    key: "currentItem",
                    get: function () {
                        return -1 === this.cursor ? null : this.items[this.cursor]
                    }
                }]), t
            }();
            o.default = c, c.displayName = "DomIterator", c.directions = {
                RIGHT: "right",
                LEFT: "left"
            }, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(12)], void 0 === (i = "function" == typeof (o = function (o, r, i, a) {
            "use strict";
            var s = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var c = function () {
                function t(e) {
                    var n = e.api;
                    (0, r.default)(this, t), this.CSS = {
                        button: "ce-settings__button",
                        wrapper: "ce-tune-move-up",
                        animation: "wobble"
                    }, this.api = n
                }
                return (0, i.default)(t, [{
                    key: "render",
                    value: function () {
                        var t = this,
                            e = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
                        return e.appendChild(a.default.svg("arrow-up", 14, 14)), this.api.listeners.on(e, "click", function (n) {
                            return t.handleClick(n, e)
                        }, !1), e
                    }
                }, {
                    key: "handleClick",
                    value: function (t, e) {
                        var n = this,
                            o = this.api.blocks.getCurrentBlockIndex();
                        if (0 === o) return e.classList.add(this.CSS.animation), void window.setTimeout(function () {
                            e.classList.remove(n.CSS.animation)
                        }, 500);
                        var r, i = this.api.blocks.getBlockByIndex(o),
                            a = this.api.blocks.getBlockByIndex(o - 1),
                            s = i.getBoundingClientRect(),
                            c = a.getBoundingClientRect();
                        r = c.top > 0 ? Math.abs(s.top) - Math.abs(c.top) : window.innerHeight - Math.abs(s.top) + Math.abs(c.top), window.scrollBy(0, -1 * r), this.api.blocks.swap(o, o - 1)
                    }
                }]), t
            }();
            o.default = c, c.displayName = "MoveUpTune", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(12)], void 0 === (i = "function" == typeof (o = function (o, r, i, a) {
            "use strict";
            var s = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var c = function () {
                function t(e) {
                    var n = this,
                        o = e.api;
                    (0, r.default)(this, t), this.CSS = {
                        wrapper: "ass",
                        button: "ce-settings__button",
                        buttonDelete: "ce-settings__button--delete",
                        buttonConfirm: "ce-settings__button--confirm"
                    }, this.nodes = {
                        button: null
                    }, this.api = o, this.resetConfirmation = function () {
                        n.setConfirmation(!1)
                    }
                }
                return (0, i.default)(t, [{
                    key: "render",
                    value: function () {
                        var t = this;
                        return this.nodes.button = a.default.make("div", [this.CSS.button, this.CSS.buttonDelete], {}), this.nodes.button.appendChild(a.default.svg("cross", 12, 12)), this.api.listeners.on(this.nodes.button, "click", function (e) {
                            return t.handleClick(e)
                        }, !1), this.nodes.button
                    }
                }, {
                    key: "handleClick",
                    value: function (t) {
                        this.needConfirmation ? (this.api.events.off("block-settings-closed", this.resetConfirmation), this.api.blocks.delete(), this.api.toolbar.close(), t.stopPropagation()) : (this.setConfirmation(!0), this.api.events.on("block-settings-closed", this.resetConfirmation))
                    }
                }, {
                    key: "setConfirmation",
                    value: function (t) {
                        this.needConfirmation = t, this.nodes.button.classList.add(this.CSS.buttonConfirm)
                    }
                }]), t
            }();
            o.default = c, c.displayName = "DeleteTune", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(12)], void 0 === (i = "function" == typeof (o = function (o, r, i, a) {
            "use strict";
            var s = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var c = function () {
                function t(e) {
                    var n = e.api;
                    (0, r.default)(this, t), this.CSS = {
                        button: "ce-settings__button",
                        wrapper: "ce-tune-move-down",
                        animation: "wobble"
                    }, this.api = n
                }
                return (0, i.default)(t, [{
                    key: "render",
                    value: function () {
                        var t = this,
                            e = a.default.make("div", [this.CSS.button, this.CSS.wrapper], {});
                        return e.appendChild(a.default.svg("arrow-down", 14, 14)), this.api.listeners.on(e, "click", function (n) {
                            return t.handleClick(n, e)
                        }, !1), e
                    }
                }, {
                    key: "handleClick",
                    value: function (t, e) {
                        var n = this,
                            o = this.api.blocks.getCurrentBlockIndex();
                        if (o === this.api.blocks.getBlocksCount() - 1) return e.classList.add(this.CSS.animation), void window.setTimeout(function () {
                            e.classList.remove(n.CSS.animation)
                        }, 500);
                        var r = this.api.blocks.getBlockByIndex(o + 1),
                            i = r.getBoundingClientRect(),
                            a = Math.abs(window.innerHeight - r.offsetHeight);
                        i.top < window.innerHeight && (a = window.scrollY + r.offsetHeight), window.scrollTo(0, a), this.api.blocks.swap(o, o + 1)
                    }
                }]), t
            }();
            o.default = c, c.displayName = "MoveDownTune", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(14), n(12)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s) {
            "use strict";
            var c = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = c(r), i = c(i), a = c(a), s = c(s);
            var l = function () {
                function t(e) {
                    (0, r.default)(this, t), this.blocks = [], this.workingArea = e
                }
                return (0, i.default)(t, [{
                    key: "length",
                    get: function () {
                        return this.blocks.length
                    }
                }, {
                    key: "array",
                    get: function () {
                        return this.blocks
                    }
                }, {
                    key: "nodes",
                    get: function () {
                        return a.default.array(this.workingArea.children)
                    }
                }], [{
                    key: "set",
                    value: function (t, e, n) {
                        return !isNaN(Number(e)) && (t.insert(+e, n), !0)
                    }
                }, {
                    key: "get",
                    value: function (t, e) {
                        return isNaN(Number(e)) ? t[e] : t.get(+e)
                    }
                }]), (0, i.default)(t, [{
                    key: "push",
                    value: function (t) {
                        this.blocks.push(t), this.workingArea.appendChild(t.holder)
                    }
                }, {
                    key: "swap",
                    value: function (t, e) {
                        var n = this.blocks[e];
                        s.default.swap(this.blocks[t].holder, n.holder), this.blocks[e] = this.blocks[t], this.blocks[t] = n
                    }
                }, {
                    key: "insert",
                    value: function (t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        if (this.length) {
                            t > this.length && (t = this.length), n && this.blocks[t].holder.remove();
                            var o = n ? 1 : 0;
                            if (this.blocks.splice(t, o, e), t > 0) {
                                var r = this.blocks[t - 1];
                                r.holder.insertAdjacentElement("afterend", e.holder)
                            } else {
                                var i = this.blocks[t + 1];
                                i ? i.holder.insertAdjacentElement("beforebegin", e.holder) : this.workingArea.appendChild(e.holder)
                            }
                        } else this.push(e)
                    }
                }, {
                    key: "remove",
                    value: function (t) {
                        isNaN(t) && (t = this.length - 1), this.blocks[t].holder.remove(), this.blocks.splice(t, 1)
                    }
                }, {
                    key: "removeAll",
                    value: function () {
                        this.workingArea.innerHTML = "", this.blocks.length = 0
                    }
                }, {
                    key: "insertAfter",
                    value: function (t, e) {
                        var n = this.blocks.indexOf(t);
                        this.insert(n + 1, e)
                    }
                }, {
                    key: "get",
                    value: function (t) {
                        return this.blocks[t]
                    }
                }, {
                    key: "indexOf",
                    value: function (t) {
                        return this.blocks.indexOf(t)
                    }
                }]), t
            }();
            o.default = l, l.displayName = "Blocks", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        window,
        t.exports = function (t) {
            var e = {};

            function n(o) {
                if (e[o]) return e[o].exports;
                var r = e[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
            }
            return n.m = t, n.c = e, n.d = function (t, e, o) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: o
                })
            }, n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, n.t = function (t, e) {
                if (1 & e && (t = n(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var r in t) n.d(o, r, function (e) {
                        return t[e]
                    }.bind(null, r));
                return o
            }, n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return n.d(e, "a", e), e
            }, n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, n.p = "/", n(n.s = 0)
        }([function (t, e, n) {
            "use strict";
            n(1),
                /*!
                 * Codex JavaScript Notification module
                 * https://github.com/codex-team/js-notifier
                 */
                t.exports = function () {
                    var t = n(6),
                        e = null;
                    return {
                        show: function (n) {
                            if (n.message) {
                                ! function () {
                                    if (e) return !0;
                                    e = t.getWrapper(), document.body.appendChild(e)
                                }();
                                var o = null,
                                    r = n.time || 8e3;
                                switch (n.type) {
                                    case "confirm":
                                        o = t.confirm(n);
                                        break;
                                    case "prompt":
                                        o = t.prompt(n);
                                        break;
                                    default:
                                        o = t.alert(n), window.setTimeout(function () {
                                            o.remove()
                                        }, r)
                                }
                                e.appendChild(o), o.classList.add("cdx-notify--bounce-in")
                            }
                        }
                    }
                }()
        }, function (t, e, n) {
            var o = n(2);
            "string" == typeof o && (o = [
                [t.i, o, ""]
            ]), n(4)(o, {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            }), o.locals && (t.exports = o.locals)
        }, function (t, e, n) {
            (t.exports = n(3)(!1)).push([t.i, '.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}', ""])
        }, function (t, e) {
            t.exports = function (t) {
                var e = [];
                return e.toString = function () {
                    return this.map(function (e) {
                        var n = function (t, e) {
                            var n, o = t[1] || "",
                                r = t[3];
                            if (!r) return o;
                            if (e && "function" == typeof btoa) {
                                var i = (n = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                                    a = r.sources.map(function (t) {
                                        return "/*# sourceURL=" + r.sourceRoot + t + " */"
                                    });
                                return [o].concat(a).concat([i]).join("\n")
                            }
                            return [o].join("\n")
                        }(e, t);
                        return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                    }).join("")
                }, e.i = function (t, n) {
                    "string" == typeof t && (t = [
                        [null, t, ""]
                    ]);
                    for (var o = {}, r = 0; r < this.length; r++) {
                        var i = this[r][0];
                        "number" == typeof i && (o[i] = !0)
                    }
                    for (r = 0; r < t.length; r++) {
                        var a = t[r];
                        "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                    }
                }, e
            }
        }, function (t, e, n) {
            var o, r, i = {},
                a = (o = function () {
                    return window && document && document.all && !window.atob
                }, function () {
                    return void 0 === r && (r = o.apply(this, arguments)), r
                }),
                s = function (t) {
                    var e = {};
                    return function (t) {
                        if ("function" == typeof t) return t();
                        if (void 0 === e[t]) {
                            var n = function (t) {
                                return document.querySelector(t)
                            }.call(this, t);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                n = n.contentDocument.head
                            } catch (t) {
                                n = null
                            }
                            e[t] = n
                        }
                        return e[t]
                    }
                }(),
                c = null,
                l = 0,
                u = [],
                f = n(5);

            function d(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n],
                        r = i[o.id];
                    if (r) {
                        r.refs++;
                        for (var a = 0; a < r.parts.length; a++) r.parts[a](o.parts[a]);
                        for (; a < o.parts.length; a++) r.parts.push(m(o.parts[a], e))
                    } else {
                        var s = [];
                        for (a = 0; a < o.parts.length; a++) s.push(m(o.parts[a], e));
                        i[o.id] = {
                            id: o.id,
                            refs: 1,
                            parts: s
                        }
                    }
                }
            }

            function p(t, e) {
                for (var n = [], o = {}, r = 0; r < t.length; r++) {
                    var i = t[r],
                        a = e.base ? i[0] + e.base : i[0],
                        s = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3]
                        };
                    o[a] ? o[a].parts.push(s) : n.push(o[a] = {
                        id: a,
                        parts: [s]
                    })
                }
                return n
            }

            function h(t, e) {
                var n = s(t.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var o = u[u.length - 1];
                if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);
                else if ("bottom" === t.insertAt) n.appendChild(e);
                else {
                    if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var r = s(t.insertInto + " " + t.insertAt.before);
                    n.insertBefore(e, r)
                }
            }

            function v(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = u.indexOf(t);
                e >= 0 && u.splice(e, 1)
            }

            function g(t) {
                var e = document.createElement("style");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e
            }

            function y(t, e) {
                Object.keys(e).forEach(function (n) {
                    t.setAttribute(n, e[n])
                })
            }

            function m(t, e) {
                var n, o, r, i;
                if (e.transform && t.css) {
                    if (!(i = e.transform(t.css))) return function () {};
                    t.css = i
                }
                if (e.singleton) {
                    var a = l++;
                    n = c || (c = g(e)), o = x.bind(null, n, a, !1), r = x.bind(null, n, a, !0)
                } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
                    var e = document.createElement("link");
                    return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e
                }(e), o = function (t, e, n) {
                    var o = n.css,
                        r = n.sourceMap,
                        i = void 0 === e.convertToAbsoluteUrls && r;
                    (e.convertToAbsoluteUrls || i) && (o = f(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                    var a = new Blob([o], {
                            type: "text/css"
                        }),
                        s = t.href;
                    t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
                }.bind(null, n, e), r = function () {
                    v(n), n.href && URL.revokeObjectURL(n.href)
                }) : (n = g(e), o = function (t, e) {
                    var n = e.css,
                        o = e.media;
                    if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;
                    else {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(n))
                    }
                }.bind(null, n), r = function () {
                    v(n)
                });
                return o(t),
                    function (e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                            o(t = e)
                        } else r()
                    }
            }
            t.exports = function (t, e) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                var n = p(t, e);
                return d(n, e),
                    function (t) {
                        for (var o = [], r = 0; r < n.length; r++) {
                            var a = n[r];
                            (s = i[a.id]).refs--, o.push(s)
                        }
                        for (t && d(p(t, e), e), r = 0; r < o.length; r++) {
                            var s;
                            if (0 === (s = o[r]).refs) {
                                for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                                delete i[s.id]
                            }
                        }
                    }
            };
            var b, k = (b = [], function (t, e) {
                return b[t] = e, b.filter(Boolean).join("\n")
            });

            function x(t, e, n, o) {
                var r = n ? "" : o.css;
                if (t.styleSheet) t.styleSheet.cssText = k(e, r);
                else {
                    var i = document.createTextNode(r),
                        a = t.childNodes;
                    a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
                }
            }
        }, function (t, e) {
            t.exports = function (t) {
                var e = "undefined" != typeof window && window.location;
                if (!e) throw new Error("fixUrls requires window.location");
                if (!t || "string" != typeof t) return t;
                var n = e.protocol + "//" + e.host,
                    o = n + e.pathname.replace(/\/[^\/]*$/, "/");
                return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                    var r, i = e.trim().replace(/^"(.*)"$/, function (t, e) {
                        return e
                    }).replace(/^'(.*)'$/, function (t, e) {
                        return e
                    });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
                })
            }
        }, function (t, e, n) {
            "use strict";
            var o, r, i, a, s, c;
            t.exports = (o = "cdx-notify", r = "cdx-notify__cross", i = "cdx-notify__button--confirm", a = "cdx-notify__button", s = "cdx-notify__btns-wrapper", {
                alert: c = function (t) {
                    var e = document.createElement("DIV"),
                        n = document.createElement("DIV"),
                        i = t.message,
                        a = t.style;
                    return e.classList.add(o), a && e.classList.add(o + "--" + a), e.innerHTML = i, n.classList.add(r), n.addEventListener("click", e.remove.bind(e)), e.appendChild(n), e
                },
                confirm: function (t) {
                    var e = c(t),
                        n = document.createElement("div"),
                        o = document.createElement("button"),
                        l = document.createElement("button"),
                        u = e.querySelector("." + r),
                        f = t.cancelHandler,
                        d = t.okHandler;
                    return n.classList.add(s), o.innerHTML = t.okText || "Confirm", l.innerHTML = t.cancelText || "Cancel", o.classList.add(a), l.classList.add(a), o.classList.add(i), l.classList.add("cdx-notify__button--cancel"), f && "function" == typeof f && (l.addEventListener("click", f), u.addEventListener("click", f)), d && "function" == typeof d && o.addEventListener("click", d), o.addEventListener("click", e.remove.bind(e)), l.addEventListener("click", e.remove.bind(e)), n.appendChild(o), n.appendChild(l), e.appendChild(n), e
                },
                prompt: function (t) {
                    var e = c(t),
                        n = document.createElement("div"),
                        o = document.createElement("button"),
                        l = document.createElement("input"),
                        u = e.querySelector("." + r),
                        f = t.cancelHandler,
                        d = t.okHandler;
                    return n.classList.add(s), o.innerHTML = t.okText || "Ok", o.classList.add(a), o.classList.add(i), l.classList.add("cdx-notify__input"), t.placeholder && l.setAttribute("placeholder", t.placeholder), t.default && (l.value = t.default), t.inputType && (l.type = t.inputType), f && "function" == typeof f && u.addEventListener("click", f), d && "function" == typeof d && o.addEventListener("click", function () {
                        d(l.value)
                    }), o.addEventListener("click", e.remove.bind(e)), n.appendChild(l), n.appendChild(o), e.appendChild(n), e
                },
                getWrapper: function () {
                    var t = document.createElement("DIV");
                    return t.classList.add("cdx-notifies"), t
                }
            })
        }])
    }, function (t, e, n) {
        var o, r;
        void 0 === (r = "function" == typeof (o = function () {
            function t(t) {
                var e = t.tags,
                    n = Object.keys(e),
                    o = n.map(function (t) {
                        return typeof e[t]
                    }).every(function (t) {
                        return "object" === t || "boolean" === t || "function" === t
                    });
                if (!o) throw new Error("The configuration was invalid");
                this.config = t
            }
            var e = ["P", "LI", "TD", "TH", "DIV", "H1", "H2", "H3", "H4", "H5", "H6", "PRE"];

            function n(t) {
                return -1 !== e.indexOf(t.nodeName)
            }
            var o = ["A", "B", "STRONG", "I", "EM", "SUB", "SUP", "U", "STRIKE"];

            function r(t) {
                return -1 !== o.indexOf(t.nodeName)
            }

            function i(t, e, n) {
                return "function" == typeof t.tags[e] ? t.tags[e](n) : t.tags[e]
            }

            function a(t, e) {
                return void 0 === e || "boolean" == typeof e && !e
            }

            function s(t, e, n) {
                var o = t.name.toLowerCase();
                return !0 !== e && ("function" == typeof e[o] ? !e[o](t.value, n) : void 0 === e[o] || !1 === e[o] || "string" == typeof e[o] && e[o] !== t.value)
            }
            return t.prototype.clean = function (t) {
                const e = document.implementation.createHTMLDocument(),
                    n = e.createElement("div");
                return n.innerHTML = t, this._sanitize(e, n), n.innerHTML
            }, t.prototype._sanitize = function (t, e) {
                var o = function (t, e) {
                        return t.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT, null, !1)
                    }(t, e),
                    c = o.firstChild();
                if (c)
                    do {
                        if (c.nodeType !== Node.TEXT_NODE) {
                            if (c.nodeType === Node.COMMENT_NODE) {
                                e.removeChild(c), this._sanitize(t, e);
                                break
                            }
                            var l, u = r(c);
                            u && (l = Array.prototype.some.call(c.childNodes, n));
                            var f = !!e.parentNode,
                                d = n(e) && n(c) && f,
                                p = c.nodeName.toLowerCase(),
                                h = i(this.config, p, c);
                            if (u && l || a(0, h) || !this.config.keepNestedBlockElements && d) {
                                if ("SCRIPT" !== c.nodeName && "STYLE" !== c.nodeName)
                                    for (; c.childNodes.length > 0;) e.insertBefore(c.childNodes[0], c);
                                e.removeChild(c), this._sanitize(t, e);
                                break
                            }
                            for (var v = 0; v < c.attributes.length; v += 1) {
                                var g = c.attributes[v];
                                s(g, h, c) && (c.removeAttribute(g.name), v -= 1)
                            }
                            this._sanitize(t, c)
                        } else if ("" === c.data.trim() && (c.previousElementSibling && n(c.previousElementSibling) || c.nextElementSibling && n(c.nextElementSibling))) {
                            e.removeChild(c), this._sanitize(t, e);
                            break
                        }
                    } while (c = o.nextSibling())
            }, t
        }) ? o.call(e, n, e, t) : o) || (t.exports = r)
    }, function (t, e, n) {
        /*!
         * Library for handling keyboard shortcuts
         * @copyright CodeX (https://codex.so)
         * @license MIT
         * @author CodeX (https://codex.so)
         * @version 1.1.1
         */
        window,
        t.exports = function (t) {
            var e = {};

            function n(o) {
                if (e[o]) return e[o].exports;
                var r = e[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
            }
            return n.m = t, n.c = e, n.d = function (t, e, o) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: o
                })
            }, n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, n.t = function (t, e) {
                if (1 & e && (t = n(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var r in t) n.d(o, r, function (e) {
                        return t[e]
                    }.bind(null, r));
                return o
            }, n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return n.d(e, "a", e), e
            }, n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, n.p = "", n(n.s = 0)
        }([function (t, e, n) {
            "use strict";

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function r(t, e, n) {
                return e && o(t.prototype, e), n && o(t, n), t
            }
            n.r(e);
            var i = function () {
                function t(e) {
                    var n = this;
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.commands = {}, this.keys = {}, this.name = e.name, this.parseShortcutName(e.name), this.element = e.on, this.callback = e.callback, this.executeShortcut = function (t) {
                        n.execute(t)
                    }, this.element.addEventListener("keydown", this.executeShortcut, !1)
                }
                return r(t, null, [{
                    key: "supportedCommands",
                    get: function () {
                        return {
                            SHIFT: ["SHIFT"],
                            CMD: ["CMD", "CONTROL", "COMMAND", "WINDOWS", "CTRL"],
                            ALT: ["ALT", "OPTION"]
                        }
                    }
                }, {
                    key: "keyCodes",
                    get: function () {
                        return {
                            0: 48,
                            1: 49,
                            2: 50,
                            3: 51,
                            4: 52,
                            5: 53,
                            6: 54,
                            7: 55,
                            8: 56,
                            9: 57,
                            A: 65,
                            B: 66,
                            C: 67,
                            D: 68,
                            E: 69,
                            F: 70,
                            G: 71,
                            H: 72,
                            I: 73,
                            J: 74,
                            K: 75,
                            L: 76,
                            M: 77,
                            N: 78,
                            O: 79,
                            P: 80,
                            Q: 81,
                            R: 82,
                            S: 83,
                            T: 84,
                            U: 85,
                            V: 86,
                            W: 87,
                            X: 88,
                            Y: 89,
                            Z: 90,
                            BACKSPACE: 8,
                            ENTER: 13,
                            ESCAPE: 27,
                            LEFT: 37,
                            UP: 38,
                            RIGHT: 39,
                            DOWN: 40,
                            INSERT: 45,
                            DELETE: 46
                        }
                    }
                }]), r(t, [{
                    key: "parseShortcutName",
                    value: function (e) {
                        e = e.split("+");
                        for (var n = 0; n < e.length; n++) {
                            e[n] = e[n].toUpperCase();
                            var o = !1;
                            for (var r in t.supportedCommands)
                                if (t.supportedCommands[r].includes(e[n])) {
                                    o = this.commands[r] = !0;
                                    break
                                } o || (this.keys[e[n]] = !0)
                        }
                        for (var i in t.supportedCommands) this.commands[i] || (this.commands[i] = !1)
                    }
                }, {
                    key: "execute",
                    value: function (e) {
                        var n, o = {
                                CMD: e.ctrlKey || e.metaKey,
                                SHIFT: e.shiftKey,
                                ALT: e.altKey
                            },
                            r = !0;
                        for (n in this.commands) this.commands[n] !== o[n] && (r = !1);
                        var i, a = !0;
                        for (i in this.keys) a = a && e.keyCode === t.keyCodes[i];
                        r && a && this.callback(e)
                    }
                }, {
                    key: "remove",
                    value: function () {
                        this.element.removeEventListener("keydown", this.executeShortcut)
                    }
                }]), t
            }();
            e.default = i
        }]).default
    }, function (t, e, n) {
        window,
        t.exports = function (t) {
            var e = {};

            function n(o) {
                if (e[o]) return e[o].exports;
                var r = e[o] = {
                    i: o,
                    l: !1,
                    exports: {}
                };
                return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
            }
            return n.m = t, n.c = e, n.d = function (t, e, o) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: o
                })
            }, n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }, n.t = function (t, e) {
                if (1 & e && (t = n(t)), 8 & e) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var o = Object.create(null);
                if (n.r(o), Object.defineProperty(o, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var r in t) n.d(o, r, function (e) {
                        return t[e]
                    }.bind(null, r));
                return o
            }, n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default
                } : function () {
                    return t
                };
                return n.d(e, "a", e), e
            }, n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }, n.p = "/", n(n.s = 0)
        }([function (t, e, n) {
            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function r(t, e, n) {
                return e && o(t.prototype, e), n && o(t, n), t
            }
            n(1).toString();
            /**
             * Base Paragraph Block for the Editor.js.
             * Represents simple paragraph
             *
             * @author CodeX (team@ifmo.su)
             * @copyright CodeX 2018
             * @license The MIT License (MIT)
             * @version 2.0.0
             */
            var i = function () {
                function t(e) {
                    var n = e.data,
                        o = e.config,
                        r = e.api;
                    ! function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.api = r, this._CSS = {
                        block: this.api.styles.block,
                        wrapper: "ce-paragraph"
                    }, this.onKeyUp = this.onKeyUp.bind(this), this._placeholder = o.placeholder ? o.placeholder : t.DEFAULT_PLACEHOLDER, this._data = {}, this._element = this.drawView(), this.data = n
                }
                return r(t, null, [{
                    key: "DEFAULT_PLACEHOLDER",
                    get: function () {
                        return ""
                    }
                }]), r(t, [{
                    key: "onKeyUp",
                    value: function (t) {
                        "Backspace" !== t.code && "Delete" !== t.code || "" === this._element.textContent && (this._element.innerHTML = "")
                    }
                }, {
                    key: "drawView",
                    value: function () {
                        var t = document.createElement("DIV");
                        return t.classList.add(this._CSS.wrapper, this._CSS.block), t.contentEditable = !0, t.dataset.placeholder = this._placeholder, t.addEventListener("keyup", this.onKeyUp), t
                    }
                }, {
                    key: "render",
                    value: function () {
                        return this._element
                    }
                }, {
                    key: "merge",
                    value: function (t) {
                        var e = {
                            text: this.data.text + t.text
                        };
                        this.data = e
                    }
                }, {
                    key: "validate",
                    value: function (t) {
                        return "" !== t.text.trim()
                    }
                }, {
                    key: "save",
                    value: function (t) {
                        return {
                            text: t.innerHTML
                        }
                    }
                }, {
                    key: "onPaste",
                    value: function (t) {
                        var e = {
                            text: t.detail.data.innerHTML
                        };
                        this.data = e
                    }
                }, {
                    key: "data",
                    get: function () {
                        var t = this._element.innerHTML;
                        return this._data.text = t, this._data
                    },
                    set: function (t) {
                        this._data = t || {}, this._element.innerHTML = this._data.text || ""
                    }
                }], [{
                    key: "conversionConfig",
                    get: function () {
                        return {
                            export: "text",
                            import: "text"
                        }
                    }
                }, {
                    key: "sanitize",
                    get: function () {
                        return {
                            text: {
                                br: !0
                            }
                        }
                    }
                }, {
                    key: "pasteConfig",
                    get: function () {
                        return {
                            tags: ["P"]
                        }
                    }
                }]), t
            }();
            t.exports = i
        }, function (t, e, n) {
            var o = n(2);
            "string" == typeof o && (o = [
                [t.i, o, ""]
            ]), n(4)(o, {
                hmr: !0,
                transform: void 0,
                insertInto: void 0
            }), o.locals && (t.exports = o.locals)
        }, function (t, e, n) {
            (t.exports = n(3)(!1)).push([t.i, ".ce-paragraph {\n    line-height: 1.6em;\n    outline: none;\n}\n\n.ce-paragraph[data-placeholder]:empty::before{\n  content: attr(data-placeholder);\n  color: #707684;\n  font-weight: normal;\n  opacity: 0;\n}\n\n/** Show placeholder at the first paragraph if Editor is empty */\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before {\n  opacity: 1;\n}\n\n.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty::before,\n.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus::before {\n  opacity: 0;\n}\n\n.ce-paragraph p:first-of-type{\n    margin-top: 0;\n}\n\n.ce-paragraph p:last-of-type{\n    margin-bottom: 0;\n}\n", ""])
        }, function (t, e) {
            t.exports = function (t) {
                var e = [];
                return e.toString = function () {
                    return this.map(function (e) {
                        var n = function (t, e) {
                            var n, o = t[1] || "",
                                r = t[3];
                            if (!r) return o;
                            if (e && "function" == typeof btoa) {
                                var i = (n = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */"),
                                    a = r.sources.map(function (t) {
                                        return "/*# sourceURL=" + r.sourceRoot + t + " */"
                                    });
                                return [o].concat(a).concat([i]).join("\n")
                            }
                            return [o].join("\n")
                        }(e, t);
                        return e[2] ? "@media " + e[2] + "{" + n + "}" : n
                    }).join("")
                }, e.i = function (t, n) {
                    "string" == typeof t && (t = [
                        [null, t, ""]
                    ]);
                    for (var o = {}, r = 0; r < this.length; r++) {
                        var i = this[r][0];
                        "number" == typeof i && (o[i] = !0)
                    }
                    for (r = 0; r < t.length; r++) {
                        var a = t[r];
                        "number" == typeof a[0] && o[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), e.push(a))
                    }
                }, e
            }
        }, function (t, e, n) {
            var o, r, i = {},
                a = (o = function () {
                    return window && document && document.all && !window.atob
                }, function () {
                    return void 0 === r && (r = o.apply(this, arguments)), r
                }),
                s = function (t) {
                    var e = {};
                    return function (t) {
                        if ("function" == typeof t) return t();
                        if (void 0 === e[t]) {
                            var n = function (t) {
                                return document.querySelector(t)
                            }.call(this, t);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                n = n.contentDocument.head
                            } catch (t) {
                                n = null
                            }
                            e[t] = n
                        }
                        return e[t]
                    }
                }(),
                c = null,
                l = 0,
                u = [],
                f = n(5);

            function d(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n],
                        r = i[o.id];
                    if (r) {
                        r.refs++;
                        for (var a = 0; a < r.parts.length; a++) r.parts[a](o.parts[a]);
                        for (; a < o.parts.length; a++) r.parts.push(m(o.parts[a], e))
                    } else {
                        var s = [];
                        for (a = 0; a < o.parts.length; a++) s.push(m(o.parts[a], e));
                        i[o.id] = {
                            id: o.id,
                            refs: 1,
                            parts: s
                        }
                    }
                }
            }

            function p(t, e) {
                for (var n = [], o = {}, r = 0; r < t.length; r++) {
                    var i = t[r],
                        a = e.base ? i[0] + e.base : i[0],
                        s = {
                            css: i[1],
                            media: i[2],
                            sourceMap: i[3]
                        };
                    o[a] ? o[a].parts.push(s) : n.push(o[a] = {
                        id: a,
                        parts: [s]
                    })
                }
                return n
            }

            function h(t, e) {
                var n = s(t.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var o = u[u.length - 1];
                if ("top" === t.insertAt) o ? o.nextSibling ? n.insertBefore(e, o.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), u.push(e);
                else if ("bottom" === t.insertAt) n.appendChild(e);
                else {
                    if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var r = s(t.insertInto + " " + t.insertAt.before);
                    n.insertBefore(e, r)
                }
            }

            function v(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = u.indexOf(t);
                e >= 0 && u.splice(e, 1)
            }

            function g(t) {
                var e = document.createElement("style");
                return void 0 === t.attrs.type && (t.attrs.type = "text/css"), y(e, t.attrs), h(t, e), e
            }

            function y(t, e) {
                Object.keys(e).forEach(function (n) {
                    t.setAttribute(n, e[n])
                })
            }

            function m(t, e) {
                var n, o, r, i;
                if (e.transform && t.css) {
                    if (!(i = e.transform(t.css))) return function () {};
                    t.css = i
                }
                if (e.singleton) {
                    var a = l++;
                    n = c || (c = g(e)), o = x.bind(null, n, a, !1), r = x.bind(null, n, a, !0)
                } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
                    var e = document.createElement("link");
                    return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", y(e, t.attrs), h(t, e), e
                }(e), o = function (t, e, n) {
                    var o = n.css,
                        r = n.sourceMap,
                        i = void 0 === e.convertToAbsoluteUrls && r;
                    (e.convertToAbsoluteUrls || i) && (o = f(o)), r && (o += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
                    var a = new Blob([o], {
                            type: "text/css"
                        }),
                        s = t.href;
                    t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
                }.bind(null, n, e), r = function () {
                    v(n), n.href && URL.revokeObjectURL(n.href)
                }) : (n = g(e), o = function (t, e) {
                    var n = e.css,
                        o = e.media;
                    if (o && t.setAttribute("media", o), t.styleSheet) t.styleSheet.cssText = n;
                    else {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(n))
                    }
                }.bind(null, n), r = function () {
                    v(n)
                });
                return o(t),
                    function (e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                            o(t = e)
                        } else r()
                    }
            }
            t.exports = function (t, e) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                var n = p(t, e);
                return d(n, e),
                    function (t) {
                        for (var o = [], r = 0; r < n.length; r++) {
                            var a = n[r];
                            (s = i[a.id]).refs--, o.push(s)
                        }
                        for (t && d(p(t, e), e), r = 0; r < o.length; r++) {
                            var s;
                            if (0 === (s = o[r]).refs) {
                                for (var c = 0; c < s.parts.length; c++) s.parts[c]();
                                delete i[s.id]
                            }
                        }
                    }
            };
            var b, k = (b = [], function (t, e) {
                return b[t] = e, b.filter(Boolean).join("\n")
            });

            function x(t, e, n, o) {
                var r = n ? "" : o.css;
                if (t.styleSheet) t.styleSheet.cssText = k(e, r);
                else {
                    var i = document.createTextNode(r),
                        a = t.childNodes;
                    a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i)
                }
            }
        }, function (t, e) {
            t.exports = function (t) {
                var e = "undefined" != typeof window && window.location;
                if (!e) throw new Error("fixUrls requires window.location");
                if (!t || "string" != typeof t) return t;
                var n = e.protocol + "//" + e.host,
                    o = n + e.pathname.replace(/\/[^\/]*$/, "/");
                return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                    var r, i = e.trim().replace(/^"(.*)"$/, function (t, e) {
                        return e
                    }).replace(/^'(.*)'$/, function (t, e) {
                        return e
                    });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (r = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(r) + ")")
                })
            }
        }])
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(12)], void 0 === (i = "function" == typeof (o = function (o, r, i, a) {
            "use strict";
            var s = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var c = function () {
                function t() {
                    (0, r.default)(this, t), this.commandName = "bold", this.CSS = {
                        button: "ce-inline-tool",
                        buttonActive: "ce-inline-tool--active",
                        buttonModifier: "ce-inline-tool--bold"
                    }, this.nodes = {
                        button: void 0
                    }
                }
                return (0, i.default)(t, [{
                    key: "render",
                    value: function () {
                        return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("bold", 12, 14)), this.nodes.button
                    }
                }, {
                    key: "surround",
                    value: function (t) {
                        document.execCommand(this.commandName)
                    }
                }, {
                    key: "checkState",
                    value: function (t) {
                        var e = document.queryCommandState(this.commandName);
                        return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e
                    }
                }, {
                    key: "shortcut",
                    get: function () {
                        return "CMD+B"
                    }
                }], [{
                    key: "sanitize",
                    get: function () {
                        return {
                            b: {}
                        }
                    }
                }]), t
            }();
            o.default = c, c.displayName = "BoldInlineTool", c.isInline = !0, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(12)], void 0 === (i = "function" == typeof (o = function (o, r, i, a) {
            "use strict";
            var s = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var c = function () {
                function t() {
                    (0, r.default)(this, t), this.commandName = "italic", this.CSS = {
                        button: "ce-inline-tool",
                        buttonActive: "ce-inline-tool--active",
                        buttonModifier: "ce-inline-tool--italic"
                    }, this.nodes = {
                        button: null
                    }
                }
                return (0, i.default)(t, [{
                    key: "render",
                    value: function () {
                        return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(a.default.svg("italic", 34, 34)), this.nodes.button
                    }
                }, {
                    key: "surround",
                    value: function (t) {
                        document.execCommand(this.commandName)
                    }
                }, {
                    key: "checkState",
                    value: function (t) {
                        var e = document.queryCommandState(this.commandName);
                        return this.nodes.button.classList.toggle(this.CSS.buttonActive, e), e
                    }
                }, {
                    key: "shortcut",
                    get: function () {
                        return "CMD+I"
                    }
                }], [{
                    key: "sanitize",
                    get: function () {
                        return {
                            i: {}
                        }
                    }
                }]), t
            }();
            o.default = c, c.displayName = "ItalicInlineTool", c.isInline = !0, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(28), n(12), n(14)], void 0 === (i = "function" == typeof (o = function (o, r, i, a, s, c) {
            "use strict";
            var l = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = l(r), i = l(i), a = l(a), s = l(s), c = l(c);
            var u = function () {
                function t(e) {
                    var n = e.api;
                    (0, r.default)(this, t), this.commandLink = "createLink", this.commandUnlink = "unlink", this.ENTER_KEY = 13, this.CSS = {
                        button: "ce-inline-tool",
                        buttonActive: "ce-inline-tool--active",
                        buttonModifier: "ce-inline-tool--link",
                        buttonUnlink: "ce-inline-tool--unlink",
                        input: "ce-inline-tool-input",
                        inputShowed: "ce-inline-tool-input--showed"
                    }, this.nodes = {
                        button: null,
                        input: null
                    }, this.inputOpened = !1, this.toolbar = n.toolbar, this.inlineToolbar = n.inlineToolbar, this.notifier = n.notifier, this.selection = new a.default
                }
                return (0, i.default)(t, [{
                    key: "render",
                    value: function () {
                        return this.nodes.button = document.createElement("button"), this.nodes.button.type = "button", this.nodes.button.classList.add(this.CSS.button, this.CSS.buttonModifier), this.nodes.button.appendChild(s.default.svg("link", 34, 34)), this.nodes.button.appendChild(s.default.svg("unlink", 16, 18)), this.nodes.button
                    }
                }, {
                    key: "renderActions",
                    value: function () {
                        var t = this;
                        return this.nodes.input = document.createElement("input"), this.nodes.input.placeholder = "Add a link", this.nodes.input.classList.add(this.CSS.input), this.nodes.input.addEventListener("keydown", function (e) {
                            e.keyCode === t.ENTER_KEY && t.enterPressed(e)
                        }), this.nodes.input
                    }
                }, {
                    key: "surround",
                    value: function (t) {
                        if (t) {
                            this.inputOpened ? (this.selection.restore(), this.selection.removeFakeBackground()) : (this.selection.setFakeBackground(), this.selection.save());
                            var e = this.selection.findParentTag("A");
                            if (e) return this.selection.expandToTag(e), this.unlink(), this.closeActions(), this.checkState(), void this.toolbar.close()
                        }
                        this.toggleActions()
                    }
                }, {
                    key: "checkState",
                    value: function (t) {
                        var e = this.selection.findParentTag("A");
                        if (e) {
                            this.nodes.button.classList.add(this.CSS.buttonUnlink), this.nodes.button.classList.add(this.CSS.buttonActive), this.openActions();
                            var n = e.getAttribute("href");
                            this.nodes.input.value = "null" !== n ? n : "", this.selection.save()
                        } else this.nodes.button.classList.remove(this.CSS.buttonUnlink), this.nodes.button.classList.remove(this.CSS.buttonActive);
                        return !!e
                    }
                }, {
                    key: "clear",
                    value: function () {
                        this.closeActions()
                    }
                }, {
                    key: "toggleActions",
                    value: function () {
                        this.inputOpened ? this.closeActions(!1) : this.openActions(!0)
                    }
                }, {
                    key: "openActions",
                    value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.nodes.input.classList.add(this.CSS.inputShowed), t && this.nodes.input.focus(), this.inputOpened = !0
                    }
                }, {
                    key: "closeActions",
                    value: function () {
                        var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        if (this.selection.isFakeBackgroundEnabled) {
                            var e = new a.default;
                            e.save(), this.selection.restore(), this.selection.removeFakeBackground(), e.restore()
                        }
                        this.nodes.input.classList.remove(this.CSS.inputShowed), this.nodes.input.value = "", t && this.selection.clearSaved(), this.inputOpened = !1
                    }
                }, {
                    key: "enterPressed",
                    value: function (t) {
                        var e = this.nodes.input.value || "";
                        if (e.trim() || (this.selection.restore(), this.unlink(), t.preventDefault(), this.closeActions()), !this.validateURL(e)) return this.notifier.show({
                            message: "Pasted link is not valid.",
                            style: "error"
                        }), void c.default.log("Incorrect Link pasted", "warn", e);
                        e = this.prepareLink(e), this.selection.restore(), this.selection.removeFakeBackground(), this.insertLink(e), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), this.selection.collapseToEnd(), this.inlineToolbar.close()
                    }
                }, {
                    key: "validateURL",
                    value: function (t) {
                        return !/\s/.test(t)
                    }
                }, {
                    key: "prepareLink",
                    value: function (t) {
                        return t = t.trim(), t = this.addProtocol(t)
                    }
                }, {
                    key: "addProtocol",
                    value: function (t) {
                        if (/^(\w+):(\/\/)?/.test(t)) return t;
                        var e = /^\/[^\/\s]/.test(t),
                            n = "#" === t.substring(0, 1),
                            o = /^\/\/[^\/\s]/.test(t);
                        return e || n || o || (t = "http://" + t), t
                    }
                }, {
                    key: "insertLink",
                    value: function (t) {
                        var e = this.selection.findParentTag("A");
                        e && this.selection.expandToTag(e), document.execCommand(this.commandLink, !1, t)
                    }
                }, {
                    key: "unlink",
                    value: function () {
                        document.execCommand(this.commandUnlink)
                    }
                }, {
                    key: "shortcut",
                    get: function () {
                        return "CMD+K"
                    }
                }], [{
                    key: "sanitize",
                    get: function () {
                        return {
                            a: {
                                href: !0,
                                target: "_blank",
                                rel: "nofollow"
                            }
                        }
                    }
                }]), t
            }();
            o.default = u, u.displayName = "LinkInlineTool", u.isInline = !0, t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e, n) {
        var o, r, i;
        r = [e, n(1), n(2), n(12)], void 0 === (i = "function" == typeof (o = function (o, r, i, a) {
            "use strict";
            var s = n(3);
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0, r = s(r), i = s(i), a = s(a);
            var c = function () {
                function t(e) {
                    var n = e.data;
                    e.config, e.api, (0, r.default)(this, t), this.CSS = {
                        wrapper: "ce-stub",
                        info: "ce-stub__info",
                        title: "ce-stub__title",
                        subtitle: "ce-stub__subtitle"
                    }, this.title = n.title || "Error", this.subtitle = "The block can not be displayed correctly.", this.savedData = n.savedData, this.wrapper = this.make()
                }
                return (0, i.default)(t, [{
                    key: "render",
                    value: function () {
                        return this.wrapper
                    }
                }, {
                    key: "save",
                    value: function () {
                        return this.savedData
                    }
                }, {
                    key: "make",
                    value: function () {
                        var t = a.default.make("div", this.CSS.wrapper),
                            e = a.default.svg("sad-face", 52, 52),
                            n = a.default.make("div", this.CSS.info),
                            o = a.default.make("div", this.CSS.title, {
                                textContent: this.title
                            }),
                            r = a.default.make("div", this.CSS.subtitle, {
                                textContent: this.subtitle
                            });
                        return t.appendChild(e), n.appendChild(o), n.appendChild(r), t.appendChild(n), t
                    }
                }]), t
            }();
            o.default = c, c.displayName = "Stub", t.exports = e.default
        }) ? o.apply(e, r) : o) || (t.exports = i)
    }, function (t, e) {
        t.exports = '<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns="http://www.w3.org/2000/svg">\n<symbol id="arrow-down" viewBox="0 0 14 14">\n  <path transform="matrix(1 0 0 -1 0 14)" d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="arrow-up" viewBox="0 0 14 14">\n    <path d="M8.024 4.1v8.6a1.125 1.125 0 0 1-2.25 0V4.1L2.18 7.695A1.125 1.125 0 1 1 .59 6.104L6.103.588c.44-.439 1.151-.439 1.59 0l5.516 5.516a1.125 1.125 0 0 1-1.59 1.59L8.023 4.1z"/>\n\n</symbol>\n<symbol id="bold"><path d="M5.997 14H1.72c-.618 0-1.058-.138-1.323-.415C.132 13.308 0 12.867 0 12.262V1.738C0 1.121.135.676.406.406.676.136 1.114 0 1.719 0h4.536c.669 0 1.248.041 1.738.124.49.083.93.242 1.318.478a3.458 3.458 0 0 1 1.461 1.752c.134.366.2.753.2 1.16 0 1.401-.7 2.426-2.1 3.075 1.84.586 2.76 1.726 2.76 3.42 0 .782-.2 1.487-.602 2.114a3.61 3.61 0 0 1-1.623 1.39 5.772 5.772 0 0 1-1.471.377c-.554.073-1.2.11-1.939.11zm-.21-6.217h-2.95v4.087h3.046c1.916 0 2.874-.69 2.874-2.072 0-.707-.248-1.22-.745-1.537-.496-.319-1.238-.478-2.225-.478zM2.837 2.13v3.619h2.597c.707 0 1.252-.067 1.638-.2.385-.134.68-.389.883-.765.16-.267.239-.566.239-.897 0-.707-.252-1.176-.755-1.409-.503-.232-1.27-.348-2.301-.348H2.836z"/>\n</symbol>\n<symbol id="cross" viewBox="0 0 237 237">\n  <path transform="rotate(45 280.675 51.325)" d="M191 191V73c0-5.523 4.477-10 10-10h25c5.523 0 10 4.477 10 10v118h118c5.523 0 10 4.477 10 10v25c0 5.523-4.477 10-10 10H236v118c0 5.523-4.477 10-10 10h-25c-5.523 0-10-4.477-10-10V236H73c-5.523 0-10-4.477-10-10v-25c0-5.523 4.477-10 10-10h118z"/>\n\n</symbol>\n<symbol id="dots" viewBox="0 0 18 4">\n  <g fill-rule="evenodd">\n    <circle cx="9" cy="2" r="2"/>\n    <circle cx="2" cy="2" r="2"/>\n    <circle cx="16" cy="2" r="2"/>\n  </g>\n\n</symbol>\n<symbol id="italic">\n  <path d="M19.211 15.326l-1.44 7.108c-.1.493-.305.865-.615 1.117a1.64 1.64 0 0 1-1.064.379c-.4 0-.697-.13-.894-.388-.197-.258-.247-.627-.15-1.108l1.426-7.036c.098-.486.297-.853.597-1.1.299-.245.648-.368 1.047-.368.399 0 .703.123.912.369.21.246.27.588.181 1.027zm-.831-2.663c-.38 0-.682-.116-.909-.35-.227-.232-.301-.561-.223-.987.07-.385.266-.703.588-.952.322-.25.665-.374 1.03-.374.353 0 .645.113.876.34.232.225.308.554.229.986-.077.42-.27.747-.58.983-.308.236-.646.354-1.011.354z"/>\n\n</symbol>\n<symbol id="link"><path d="M15.439 21.153a4.202 4.202 0 0 0 2.72.63l-.985.986a4.202 4.202 0 1 1-5.943-5.945l2.093-2.093a4.202 4.202 0 0 1 5.934-.009l-1.655 1.656a5.886 5.886 0 0 1-.02.019 1.835 1.835 0 0 0-2.585.009l-2.093 2.093a1.836 1.836 0 0 0 2.534 2.654zm3.122-8.306a4.202 4.202 0 0 0-2.72-.63l.985-.986a4.202 4.202 0 1 1 5.943 5.945l-2.093 2.093a4.202 4.202 0 0 1-5.934.009l1.655-1.656.02-.019a1.835 1.835 0 0 0 2.585-.009l2.093-2.093a1.836 1.836 0 0 0-2.534-2.654z"/>\n</symbol>\n<symbol id="plus" viewBox="0 0 14 14">\n    <path d="M8.05 5.8h4.625a1.125 1.125 0 0 1 0 2.25H8.05v4.625a1.125 1.125 0 0 1-2.25 0V8.05H1.125a1.125 1.125 0 0 1 0-2.25H5.8V1.125a1.125 1.125 0 0 1 2.25 0V5.8z"/>\n\n</symbol>\n<symbol id="sad-face" viewBox="0 0 52 52">\n    <path fill="#D76B6B" fill-rule="nonzero" d="M26 52C11.64 52 0 40.36 0 26S11.64 0 26 0s26 11.64 26 26-11.64 26-26 26zm0-3.25c12.564 0 22.75-10.186 22.75-22.75S38.564 3.25 26 3.25 3.25 13.436 3.25 26 13.436 48.75 26 48.75zM15.708 33.042a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm23.834 0a2.167 2.167 0 1 1 0-4.334 2.167 2.167 0 0 1 0 4.334zm-15.875 5.452a1.083 1.083 0 1 1-1.834-1.155c1.331-2.114 3.49-3.179 6.334-3.179 2.844 0 5.002 1.065 6.333 3.18a1.083 1.083 0 1 1-1.833 1.154c-.913-1.45-2.366-2.167-4.5-2.167s-3.587.717-4.5 2.167z"/>\n\n</symbol>\n<symbol id="unlink" viewBox="0 0 16 18">\n    <path transform="rotate(-45 8.358 11.636)" d="M9.14 9.433c.008-.12-.087-.686-.112-.81a1.4 1.4 0 0 0-1.64-1.106l-3.977.772a1.4 1.4 0 0 0 .535 2.749l.935-.162s.019 1.093.592 2.223l-1.098.148A3.65 3.65 0 1 1 2.982 6.08l3.976-.773c1.979-.385 3.838.919 4.28 2.886.51 2.276-1.084 2.816-1.073 2.935.011.12-.394-1.59-1.026-1.696zm3.563-.875l2.105 3.439a3.65 3.65 0 0 1-6.19 3.868L6.47 12.431c-1.068-1.71-.964-2.295-.49-3.07.067-.107 1.16-1.466 1.48-.936-.12.036.9 1.33.789 1.398-.656.41-.28.76.13 1.415l2.145 3.435a1.4 1.4 0 0 0 2.375-1.484l-1.132-1.941c.42-.435 1.237-1.054.935-2.69zm1.88-2.256h3.4a1.125 1.125 0 0 1 0 2.25h-3.4a1.125 1.125 0 0 1 0-2.25zM11.849.038c.62 0 1.125.503 1.125 1.125v3.4a1.125 1.125 0 0 1-2.25 0v-3.4c0-.622.503-1.125 1.125-1.125z"/>\n\n</symbol></svg>'
    }, function (t, e) {
        t.exports = '.codex-editor{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;z-index:1}.codex-editor .hide,.codex-editor__redactor--hidden{display:none}@media (min-width:651px){.codex-editor--narrow .codex-editor__redactor{margin-right:50px}}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__actions{right:-5px}}.codex-editor__loader{position:relative;height:30vh}.codex-editor__loader:before{content:"";position:absolute;left:50%;top:50%;width:30px;height:30px;margin-top:-15px;margin-left:-15px;border-radius:50%;border:2px solid rgba(201,201,204,.48);border-top-color:transparent;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;-webkit-animation:editor-loader-spin .8s linear infinite;-moz-animation:editor-loader-spin .8s infinite linear;animation:editor-loader-spin .8s linear infinite;will-change:transform}.codex-editor-copyable{position:absolute;height:1px;width:1px;top:-400%;opacity:.001}.codex-editor-overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:999;pointer-events:none;overflow:hidden}.codex-editor-overlay__container{position:relative;pointer-events:auto;z-index:0}.codex-editor-overlay__rectangle{position:absolute;pointer-events:none;background-color:rgba(46,170,220,.2);border:1px solid transparent}.codex-editor svg{fill:currentColor;vertical-align:middle;max-height:100%}::-moz-selection{background-color:#d4ecff}::selection{background-color:#d4ecff}.codex-editor--toolbox-opened [contentEditable=true][data-placeholder]:focus:before{opacity:0!important}@-webkit-keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-moz-keyframes editor-loader-spin{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-moz-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes editor-loader-spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);-moz-transform:rotate(1turn);transform:rotate(1turn)}}.ce-toolbar{position:absolute;left:0;right:0;top:0;-webkit-transition:opacity .1s ease;-moz-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity,transform;display:none}@media (max-width:650px){.ce-toolbar{position:absolute;background-color:#fff;-webkit-box-shadow:0 8px 23px -6px rgba(21,40,54,.31),22px -14px 34px -18px rgba(33,48,73,.26);box-shadow:0 8px 23px -6px rgba(21,40,54,.31),22px -14px 34px -18px rgba(33,48,73,.26);border-radius:4px;z-index:2}}@media (max-width:650px) and (max-width:650px){.ce-toolbar{-webkit-box-shadow:0 5px 9px -5px rgba(21,40,54,.49),6px 15px 34px -6px rgba(33,48,73,.54);box-shadow:0 5px 9px -5px rgba(21,40,54,.49),6px 15px 34px -6px rgba(33,48,73,.54)}}@media (max-width:650px){.ce-toolbar:before{content:"";width:15px;height:15px;position:absolute;top:-7px;left:50%;margin-left:-7px;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);transform:rotate(-45deg);background-color:#fff;z-index:-1}.ce-toolbar{padding:3px;margin-top:5px}.ce-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}}.ce-toolbar--opened{display:block}@media (max-width:650px){.ce-toolbar--opened{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex}}.ce-toolbar__content{max-width:650px;margin:0 auto;position:relative}@media (max-width:650px){.ce-toolbar__content{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;margin:0;max-width:-moz-calc(100% - 40px);max-width:calc(100% - 40px)}}.ce-toolbar__plus{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:-34px;-ms-flex-negative:0;flex-shrink:0}.ce-toolbar__plus--active,.ce-toolbar__plus:hover{color:#388ae5}.ce-toolbar__plus--active{-webkit-animation:bounceIn .75s 1;-moz-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbar__plus--hidden{display:none}@media (max-width:650px){.ce-toolbar__plus{display:-webkit-inline-box!important;display:-moz-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important;position:static;-webkit-transform:none!important;-moz-transform:none!important;transform:none!important}}.ce-toolbar .ce-toolbox,.ce-toolbar__plus{top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);transform:translateY(-50%)}.ce-toolbar__actions{position:absolute;right:0;top:10px;padding-right:16px;opacity:0}@media (max-width:650px){.ce-toolbar__actions{position:static;margin-left:auto;padding-right:10px;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}}.ce-toolbar__actions--opened{opacity:1}.ce-toolbar__actions-buttons{text-align:right}.ce-toolbar__settings-btn{display:inline-block;width:24px;height:24px;color:#707684;cursor:pointer}@media (min-width:651px){.codex-editor--narrow .ce-toolbar__plus{left:5px}}.ce-toolbox{position:absolute;visibility:hidden;-webkit-transition:opacity .1s ease;-moz-transition:opacity .1s ease;transition:opacity .1s ease;will-change:opacity;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row}@media (max-width:650px){.ce-toolbox{position:static;-webkit-transform:none!important;-moz-transform:none!important;transform:none!important;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:auto}}.ce-toolbox--opened{opacity:1;visibility:visible}.ce-toolbox__button{color:#707684;cursor:pointer;width:34px;height:34px;display:-webkit-inline-box;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0}.ce-toolbox__button--active,.ce-toolbox__button:hover{color:#388ae5}.ce-toolbox__button--active{-webkit-animation:bounceIn .75s 1;-moz-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-toolbox__tooltip{position:absolute;top:25px;padding:6px 10px;border-radius:5px;opacity:0;background:#eff2f5;-webkit-box-shadow:0 10px 12px -9px rgba(26,39,54,.32),0 3px 2px -2px rgba(33,48,73,.05);box-shadow:0 10px 12px -9px rgba(26,39,54,.32),0 3px 2px -2px rgba(33,48,73,.05);color:#5c6174;font-size:12px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-transition:opacity .15s ease-in,left .1s linear;-moz-transition:opacity .15s ease-in,left .1s linear;transition:opacity .15s ease-in,left .1s linear;will-change:opacity,left;letter-spacing:.02em;line-height:1em}@media (max-width:650px){.ce-toolbox__tooltip{display:none}}.ce-toolbox__tooltip-shortcut{color:rgba(100,105,122,.6);word-spacing:-2px;margin-top:5px}.ce-toolbox__tooltip--shown{opacity:1;-webkit-transition-delay:.1s,0s;-moz-transition-delay:.1s,0s;transition-delay:.1s,0s}.ce-toolbox__tooltip:before{content:"";width:10px;height:10px;position:absolute;top:-5px;left:50%;margin-left:-5px;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);transform:rotate(-45deg);background-color:#eff2f5;z-index:-1}@media (min-width:651px){.codex-editor--narrow .ce-toolbox{background:#fff;z-index:2}}.ce-inline-toolbar{position:absolute;background-color:#fff;-webkit-box-shadow:0 8px 23px -6px rgba(21,40,54,.31),22px -14px 34px -18px rgba(33,48,73,.26);box-shadow:0 8px 23px -6px rgba(21,40,54,.31),22px -14px 34px -18px rgba(33,48,73,.26);border-radius:4px;z-index:2}@media (max-width:650px){.ce-inline-toolbar{-webkit-box-shadow:0 5px 9px -5px rgba(21,40,54,.49),6px 15px 34px -6px rgba(33,48,73,.54);box-shadow:0 5px 9px -5px rgba(21,40,54,.49),6px 15px 34px -6px rgba(33,48,73,.54)}}.ce-inline-toolbar:before{content:"";width:15px;height:15px;position:absolute;top:-7px;left:50%;margin-left:-7px;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);transform:rotate(-45deg);background-color:#fff;z-index:-1}.ce-inline-toolbar{padding:3px;-webkit-transform:translateX(-50%) translateY(8px) scale(.9);-moz-transform:translateX(-50%) translateY(8px) scale(.9);transform:translateX(-50%) translateY(8px) scale(.9);-webkit-box-shadow:0 6px 12px -6px rgba(131,147,173,.46),5px -12px 34px -13px rgba(97,105,134,.6),0 26px 52px 3px rgba(147,165,186,.24);box-shadow:0 6px 12px -6px rgba(131,147,173,.46),5px -12px 34px -13px rgba(97,105,134,.6),0 26px 52px 3px rgba(147,165,186,.24);opacity:0;visibility:hidden;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;-moz-transition:transform .15s ease,opacity .25s ease,-moz-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease,-moz-transform .15s ease;will-change:transform,opacity}.ce-inline-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-inline-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-inline-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);transform:translateX(-50%)}.ce-inline-toolbar--left-oriented{-webkit-transform:translateX(-23px) translateY(8px) scale(.9);-moz-transform:translateX(-23px) translateY(8px) scale(.9);transform:translateX(-23px) translateY(8px) scale(.9)}.ce-inline-toolbar--left-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-23px);-moz-transform:translateX(-23px);transform:translateX(-23px)}.ce-inline-toolbar--right-oriented{-webkit-transform:translateX(-100%) translateY(8px) scale(.9);-moz-transform:translateX(-100%) translateY(8px) scale(.9);transform:translateX(-100%) translateY(8px) scale(.9);margin-left:23px}.ce-inline-toolbar--right-oriented.ce-inline-toolbar--showed{-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);transform:translateX(-100%)}.ce-inline-toolbar [hidden]{display:none!important}.ce-inline-toolbar__buttons{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex}.ce-inline-tool{display:-webkit-inline-box;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#707684}.ce-inline-tool:hover{background-color:#eff2f5}.ce-inline-tool{line-height:normal}.ce-inline-tool .icon,.ce-inline-tool>svg{margin:auto}.ce-inline-tool--active{color:#388ae5}.ce-inline-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-inline-tool--focused-animated{-webkit-animation-name:buttonClicked;-moz-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;-moz-animation-duration:.25s;animation-duration:.25s}.ce-inline-tool:not(:last-of-type){margin-right:2px}.ce-inline-tool--last{margin-right:0!important}.ce-inline-tool--link .icon--unlink,.ce-inline-tool--unlink .icon--link{display:none}.ce-inline-tool--unlink .icon--unlink{display:inline-block}.ce-inline-tool-input{background-color:#eff2f5;outline:none;border:0;border-radius:3px;margin:3px 0 0;font-size:13px;padding:8px;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:none}.ce-inline-tool-input::-webkit-input-placeholder{color:#707684}.ce-inline-tool-input:-ms-input-placeholder{color:#707684}.ce-inline-tool-input::-ms-input-placeholder{color:#707684}.ce-inline-tool-input::placeholder{color:#707684}.ce-inline-tool-input--showed{display:block}.ce-conversion-toolbar{position:absolute;background-color:#fff;-webkit-box-shadow:0 8px 23px -6px rgba(21,40,54,.31),22px -14px 34px -18px rgba(33,48,73,.26);box-shadow:0 8px 23px -6px rgba(21,40,54,.31),22px -14px 34px -18px rgba(33,48,73,.26);border-radius:4px;z-index:2}@media (max-width:650px){.ce-conversion-toolbar{-webkit-box-shadow:0 5px 9px -5px rgba(21,40,54,.49),6px 15px 34px -6px rgba(33,48,73,.54);box-shadow:0 5px 9px -5px rgba(21,40,54,.49),6px 15px 34px -6px rgba(33,48,73,.54)}}.ce-conversion-toolbar:before{content:"";width:15px;height:15px;position:absolute;top:-7px;left:50%;margin-left:-7px;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);transform:rotate(-45deg);background-color:#fff;z-index:-1}.ce-conversion-toolbar{padding:3px;-webkit-box-shadow:0 6px 12px -6px rgba(131,147,173,.46),5px -12px 34px -13px rgba(97,105,134,.6),0 26px 52px 3px rgba(147,165,186,.24);box-shadow:0 6px 12px -6px rgba(131,147,173,.46),5px -12px 34px -13px rgba(97,105,134,.6),0 26px 52px 3px rgba(147,165,186,.24);opacity:0;visibility:hidden;will-change:transform,opacity;-webkit-transition:opacity .25s ease,-webkit-transform .15s ease;transition:opacity .25s ease,-webkit-transform .15s ease;-moz-transition:transform .15s ease,opacity .25s ease,-moz-transform .15s ease;transition:transform .15s ease,opacity .25s ease;transition:transform .15s ease,opacity .25s ease,-webkit-transform .15s ease,-moz-transform .15s ease;-webkit-transform:translateY(8px) scale(.9);-moz-transform:translateY(8px) scale(.9);transform:translateY(8px) scale(.9)}.ce-conversion-toolbar--left-oriented:before{left:15px;margin-left:0}.ce-conversion-toolbar--right-oriented:before{left:auto;right:15px;margin-left:0}.ce-conversion-toolbar:before{left:20px}.ce-conversion-toolbar--showed{opacity:1;visibility:visible;-webkit-transform:none;-moz-transform:none;transform:none}.ce-conversion-toolbar [hidden]{display:none!important}.ce-conversion-toolbar__buttons{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex}.ce-conversion-tool{display:-webkit-inline-box;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#707684}.ce-conversion-tool:hover{background-color:#eff2f5}.ce-conversion-tool{line-height:normal}.ce-conversion-tool .icon,.ce-conversion-tool>svg{margin:auto}.ce-conversion-tool--active{color:#388ae5}.ce-conversion-tool--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-conversion-tool--focused-animated{-webkit-animation-name:buttonClicked;-moz-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;-moz-animation-duration:.25s;animation-duration:.25s}.ce-conversion-tool:not(:last-of-type){margin-right:2px}.ce-conversion-tool--last{margin-right:0!important}.ce-conversion-tool--active,.ce-conversion-tool:hover{color:#388ae5!important}.ce-conversion-tool--active{-webkit-animation:bounceIn .75s 1;-moz-animation:bounceIn .75s 1;animation:bounceIn .75s 1;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards}.ce-settings{position:absolute;background-color:#fff;-webkit-box-shadow:0 8px 23px -6px rgba(21,40,54,.31),22px -14px 34px -18px rgba(33,48,73,.26);box-shadow:0 8px 23px -6px rgba(21,40,54,.31),22px -14px 34px -18px rgba(33,48,73,.26);border-radius:4px;z-index:2}@media (max-width:650px){.ce-settings{-webkit-box-shadow:0 5px 9px -5px rgba(21,40,54,.49),6px 15px 34px -6px rgba(33,48,73,.54);box-shadow:0 5px 9px -5px rgba(21,40,54,.49),6px 15px 34px -6px rgba(33,48,73,.54)}}.ce-settings:before{content:"";width:15px;height:15px;position:absolute;top:-7px;left:50%;margin-left:-7px;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);transform:rotate(-45deg);background-color:#fff;z-index:-1}.ce-settings{right:5px;top:35px;min-width:114px}.ce-settings--left-oriented:before{left:15px;margin-left:0}.ce-settings--right-oriented:before{left:auto;right:15px;margin-left:0}@media (max-width:650px){.ce-settings{bottom:50px;top:auto}}.ce-settings:before{left:auto;right:12px}@media (max-width:650px){.ce-settings:before{bottom:-5px;top:auto}}.ce-settings{display:none}.ce-settings--opened{display:block;-webkit-animation-duration:.1s;-moz-animation-duration:.1s;animation-duration:.1s;-webkit-animation-name:panelShowing;-moz-animation-name:panelShowing;animation-name:panelShowing}.ce-settings__plugin-zone:not(:empty){padding:3px 3px 0}.ce-settings__default-zone:not(:empty){padding:3px}.ce-settings__button{display:-webkit-inline-box;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#707684}.ce-settings__button:hover{background-color:#eff2f5}.ce-settings__button .icon,.ce-settings__button>svg{margin:auto}.ce-settings__button--active{color:#388ae5}.ce-settings__button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.ce-settings__button--focused-animated{-webkit-animation-name:buttonClicked;-moz-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;-moz-animation-duration:.25s;animation-duration:.25s}.ce-settings__button:not(:nth-child(3n+3)){margin-right:3px}.ce-settings__button:nth-child(n+4){margin-top:3px}.ce-settings__button{line-height:32px}.ce-settings__button--disabled{cursor:not-allowed!important;opacity:.3}.ce-settings__button--selected{color:#388ae5}.ce-settings__button--delete{-webkit-transition:background-color .3s ease;-moz-transition:background-color .3s ease;transition:background-color .3s ease;will-change:background-color}.ce-settings__button--delete .icon{-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;-moz-transition:transform .2s ease-out,-moz-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out,-moz-transform .2s ease-out;will-change:transform}.ce-settings__button--confirm{background-color:#e24a4a!important;color:#fff}.ce-settings__button--confirm:hover{background-color:#d54a4a!important}.ce-settings__button--confirm .icon{-webkit-transform:rotate(90deg);-moz-transform:rotate(90deg);transform:rotate(90deg)}.ce-block:first-of-type{margin-top:0}.ce-block--focused{background-image:-moz-linear-gradient(73deg,rgba(243,248,255,.03) 63.45%,rgba(207,214,229,.27) 98%);background-image:linear-gradient(17deg,rgba(243,248,255,.03) 63.45%,rgba(207,214,229,.27) 98%);border-radius:3px}@media (max-width:650px){.ce-block--focused{background-image:none;background-color:rgba(200,199,219,.17);margin:0 -10px;padding:0 10px}}.ce-block--selected .ce-block__content{background:#e1f2ff}.ce-block--selected .ce-block__content [contenteditable]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ce-block--selected .ce-block__content .ce-stub,.ce-block--selected .ce-block__content img{opacity:.55}.ce-block--stretched .ce-block__content{max-width:none}.ce-block__content{position:relative;max-width:650px;margin:0 auto;-webkit-transition:background-color .15s ease;-moz-transition:background-color .15s ease;transition:background-color .15s ease}.ce-block--drop-target .ce-block__content:before{content:"";position:absolute;top:100%;left:-20px;margin-top:-1px;height:8px;width:8px;border:solid #388ae5;border-width:1px 1px 0 0;-webkit-transform-origin:right;-moz-transform-origin:right;transform-origin:right;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);transform:rotate(45deg)}.ce-block--drop-target .ce-block__content:after{content:"";position:absolute;top:100%;height:1px;width:100%;color:#388ae5;background:-moz-repeating-linear-gradient(left,#388ae5,#388ae5 1px,#fff 1px,#fff 6px);background:repeating-linear-gradient(90deg,#388ae5,#388ae5 1px,#fff 0,#fff 6px)}.ce-block a{cursor:pointer;text-decoration:underline}.ce-block b{font-weight:700}.ce-block i{font-style:italic}@media (min-width:651px){.codex-editor--narrow .ce-block--focused{margin-right:-50px;padding-right:50px}}.wobble{-webkit-animation-name:wobble;-moz-animation-name:wobble;animation-name:wobble;-webkit-animation-duration:.4s;-moz-animation-duration:.4s;animation-duration:.4s}@-webkit-keyframes wobble{0%{-webkit-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);transform:translateZ(0)}}@-moz-keyframes wobble{0%{-moz-transform:translateZ(0);transform:translateZ(0)}15%{-moz-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-moz-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-moz-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-moz-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-moz-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-moz-transform:translateZ(0);transform:translateZ(0)}}@keyframes wobble{0%{-webkit-transform:translateZ(0);-moz-transform:translateZ(0);transform:translateZ(0)}15%{-webkit-transform:translate3d(-5%,0,0) rotate(-5deg);-moz-transform:translate3d(-5%,0,0) rotate(-5deg);transform:translate3d(-5%,0,0) rotate(-5deg)}30%{-webkit-transform:translate3d(2%,0,0) rotate(3deg);-moz-transform:translate3d(2%,0,0) rotate(3deg);transform:translate3d(2%,0,0) rotate(3deg)}45%{-webkit-transform:translate3d(-3%,0,0) rotate(-3deg);-moz-transform:translate3d(-3%,0,0) rotate(-3deg);transform:translate3d(-3%,0,0) rotate(-3deg)}60%{-webkit-transform:translate3d(2%,0,0) rotate(2deg);-moz-transform:translate3d(2%,0,0) rotate(2deg);transform:translate3d(2%,0,0) rotate(2deg)}75%{-webkit-transform:translate3d(-1%,0,0) rotate(-1deg);-moz-transform:translate3d(-1%,0,0) rotate(-1deg);transform:translate3d(-1%,0,0) rotate(-1deg)}to{-webkit-transform:translateZ(0);-moz-transform:translateZ(0);transform:translateZ(0)}}@-webkit-keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-moz-keyframes bounceIn{0%,20%,40%,60%,80%,to{-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-moz-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-moz-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-moz-transform:scaleX(1);transform:scaleX(1)}}@keyframes bounceIn{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.9,.9,.9);-moz-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}20%{-webkit-transform:scale3d(1.03,1.03,1.03);-moz-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}60%{-webkit-transform:scaleX(1);-moz-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-moz-keyframes selectionBounce{0%,20%,40%,60%,80%,to{-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-moz-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-moz-transform:scaleX(1);transform:scaleX(1)}}@keyframes selectionBounce{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}50%{-webkit-transform:scale3d(1.01,1.01,1.01);-moz-transform:scale3d(1.01,1.01,1.01);transform:scale3d(1.01,1.01,1.01)}70%{-webkit-transform:scaleX(1);-moz-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-moz-keyframes buttonClicked{0%,20%,40%,60%,80%,to{-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-moz-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-moz-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-moz-transform:scaleX(1);transform:scaleX(1)}}@keyframes buttonClicked{0%,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);-moz-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{-webkit-transform:scale3d(.95,.95,.95);-moz-transform:scale3d(.95,.95,.95);transform:scale3d(.95,.95,.95)}60%{-webkit-transform:scale3d(1.02,1.02,1.02);-moz-transform:scale3d(1.02,1.02,1.02);transform:scale3d(1.02,1.02,1.02)}80%{-webkit-transform:scaleX(1);-moz-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);transform:translateY(0)}}@-moz-keyframes panelShowing{0%{opacity:0;-moz-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-moz-transform:translateY(2px);transform:translateY(2px)}to{-moz-transform:translateY(0);transform:translateY(0)}}@keyframes panelShowing{0%{opacity:0;-webkit-transform:translateY(-8px) scale(.9);-moz-transform:translateY(-8px) scale(.9);transform:translateY(-8px) scale(.9)}70%{opacity:1;-webkit-transform:translateY(2px);-moz-transform:translateY(2px);transform:translateY(2px)}to{-webkit-transform:translateY(0);-moz-transform:translateY(0);transform:translateY(0)}}.cdx-block{padding:.7em 0}.cdx-input{border:1px solid rgba(201,201,204,.48);-webkit-box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);box-shadow:inset 0 1px 2px 0 rgba(35,44,72,.06);border-radius:3px;padding:10px 12px;outline:none;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.cdx-settings-button{display:-webkit-inline-box;display:-moz-inline-box;display:-ms-inline-flexbox;display:inline-flex;width:34px;height:34px;line-height:34px;padding:0!important;text-align:center;border-radius:3px;cursor:pointer;border:0;outline:none;background-color:transparent;vertical-align:bottom;color:#707684}.cdx-settings-button:hover{background-color:#eff2f5}.cdx-settings-button .icon,.cdx-settings-button>svg{margin:auto}.cdx-settings-button--focused{-webkit-box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);box-shadow:inset 0 0 0 1px rgba(7,161,227,.08);background:rgba(34,186,255,.08)!important}.cdx-settings-button--focused-animated{-webkit-animation-name:buttonClicked;-moz-animation-name:buttonClicked;animation-name:buttonClicked;-webkit-animation-duration:.25s;-moz-animation-duration:.25s;animation-duration:.25s}.cdx-settings-button:not(:nth-child(3n+3)){margin-right:3px}.cdx-settings-button:nth-child(n+4){margin-top:3px}.cdx-settings-button--active{color:#388ae5}.cdx-loader{position:relative;border:1px solid rgba(201,201,204,.48)}.cdx-loader:before{content:"";position:absolute;left:50%;top:50%;width:18px;height:18px;margin:-11px 0 0 -11px;border:2px solid rgba(201,201,204,.48);border-left-color:#388ae5;border-radius:50%;-webkit-animation:cdxRotation 1.2s linear infinite;-moz-animation:cdxRotation 1.2s infinite linear;animation:cdxRotation 1.2s linear infinite}@-webkit-keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-moz-keyframes cdxRotation{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-moz-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cdxRotation{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);-moz-transform:rotate(1turn);transform:rotate(1turn)}}.cdx-button{padding:13px;border-radius:3px;border:1px solid rgba(201,201,204,.48);font-size:14.9px;background:#fff;-webkit-box-shadow:0 2px 2px 0 rgba(18,30,57,.04);box-shadow:0 2px 2px 0 rgba(18,30,57,.04);color:#707684;text-align:center;cursor:pointer}.cdx-button:hover{background:#fbfcfe;-webkit-box-shadow:0 1px 3px 0 rgba(18,30,57,.08);box-shadow:0 1px 3px 0 rgba(18,30,57,.08)}.cdx-button svg{height:20px;margin-right:.2em;margin-top:-2px}.ce-stub{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:3.5em 0;margin:17px 0;border-radius:3px;background:#fcf7f7;color:#b46262}.ce-stub__info{margin-left:20px}.ce-stub__title{margin-bottom:3px;font-weight:600;font-size:18px;text-transform:capitalize}.ce-stub__subtitle{font-size:16px}'
    }])
});