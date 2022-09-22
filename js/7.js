! function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
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
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function (e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 1)
}([function (t, e) {
    t.exports = jQuery
}, function (t, e, n) {
    n(2), n(6), t.exports = n(4)
}, function (t, e, n) {
    var r, i, u, s;
    /*!
     * @fileOverview TouchSwipe - jQuery Plugin @version 1.6.18 / SANDBOXED VERSION FOR TP
     * @author Matt Bryson http://www.github.com/mattbryson
     * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
     * @see http://labs.rampinteractive.co.uk/touchSwipe/
     * @see http://plugins.jquery.com/project/touchSwipe
     * @license
     * Copyright (c) 2010-2015 Matt Bryson
     * Dual licensed under the MIT or GPL Version 2 licenses.
     *
     */
    s = function (t) {
        "use strict";
        var e = "left",
            n = "right",
            r = "up",
            i = "down",
            u = "none",
            s = "doubletap",
            o = "longtap",
            a = "horizontal",
            l = "vertical",
            h = "all",
            f = "move",
            p = "end",
            c = "cancel",
            D = "ontouchstart" in window,
            d = window.navigator.msPointerEnabled && !window.PointerEvent && !D,
            g = (window.PointerEvent || window.navigator.msPointerEnabled) && !D,
            _ = "TouchSwipe";

        function m(m, v) {
            v = t.extend({}, v);
            var y = D || g || !v.fallbackToMouseEvents,
                C = y ? g ? d ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                x = y ? g ? d ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                F = y ? g ? d ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                w = y ? g ? "mouseleave" : null : "mouseleave",
                E = g ? d ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                T = 0,
                b = null,
                A = null,
                M = 0,
                O = 0,
                P = 0,
                S = 1,
                B = 0,
                k = 0,
                L = null,
                N = t(m),
                R = "start",
                I = 0,
                z = {},
                Y = 0,
                X = 0,
                j = 0,
                V = 0,
                U = 0,
                W = null,
                q = null;
            try {
                N.on(C, G), N.on(E, K)
            } catch (m) {
                t.error("events not supported " + C + "," + E + " on jQuery.swipe")
            }

            function G(u) {
                if (!0 !== N.data(_ + "_intouch") && !(0 < t(u.target).closest(v.excludedElements, N).length)) {
                    var s = u.originalEvent ? u.originalEvent : u;
                    if (!s.pointerType || "mouse" != s.pointerType || 0 != v.fallbackToMouseEvents) {
                        var o, a, l = s.touches,
                            f = l ? l[0] : s;
                        return R = "start", l ? I = l.length : !1 !== v.preventDefaultEvents && u.preventDefault(), k = A = b = null, S = 1, B = P = O = M = T = 0, (a = {})[e] = yt(e), a[n] = yt(n), a.up = yt(r), a[i] = yt(i), L = a, Dt(), _t(0, f), !l || I === v.fingers || v.fingers === h || st() ? (Y = wt(), 2 == I && (_t(1, l[1]), O = P = xt(z[0].start, z[1].start)), (v.swipeStatus || v.pinchStatus) && (o = tt(s, R))) : o = !1, !1 === o ? (tt(s, R = c), o) : (v.hold && (q = setTimeout(t.proxy((function () {
                            N.trigger("hold", [s.target]), v.hold && (o = v.hold.call(N, s, s.target))
                        }), this), v.longTapThreshold)), gt(!0), null)
                    }
                }
            }

            function H(s) {
                var o = s.originalEvent ? s.originalEvent : s;
                if (R !== p && R !== c && !dt()) {
                    var D, d, g, _, m, y, C, x = o.touches,
                        F = mt(x ? x[0] : o);
                    if (X = wt(), x && (I = x.length), v.hold && clearTimeout(q), R = f, 2 == I && (0 == O ? (_t(1, x[1]), O = P = xt(z[0].start, z[1].start)) : (mt(x[1]), P = xt(z[0].end, z[1].end), z[0].end, z[1].end, k = S < 1 ? "out" : "in"), S = (P / O * 1).toFixed(2), B = Math.abs(O - P)), I === v.fingers || v.fingers === h || !x || st()) {
                        if (b = Ft(F.start, F.end), function (t, s) {
                                if (!1 !== v.preventDefaultEvents)
                                    if (v.allowPageScroll === u) t.preventDefault();
                                    else {
                                        var o = "auto" === v.allowPageScroll;
                                        switch (s) {
                                            case e:
                                                (v.swipeLeft && o || !o && v.allowPageScroll != a) && t.preventDefault();
                                                break;
                                            case n:
                                                (v.swipeRight && o || !o && v.allowPageScroll != a) && t.preventDefault();
                                                break;
                                            case r:
                                                (v.swipeUp && o || !o && v.allowPageScroll != l) && t.preventDefault();
                                                break;
                                            case i:
                                                (v.swipeDown && o || !o && v.allowPageScroll != l) && t.preventDefault()
                                        }
                                    }
                            }(s, A = Ft(F.last, F.end)), y = F.start, C = F.end, T = Math.round(Math.sqrt(Math.pow(C.x - y.x, 2) + Math.pow(C.y - y.y, 2))), M = Ct(), function (t, e) {
                                t != u && (e = Math.max(e, vt(t)), L[t].distance = e)
                            }(b, T), D = tt(o, R), !v.triggerOnTouchEnd || v.triggerOnTouchLeave) {
                            var w = !0;
                            v.triggerOnTouchLeave && (g = {
                                left: (m = (_ = t(_ = this)).offset()).left,
                                right: m.left + _.outerWidth(),
                                top: m.top,
                                bottom: m.top + _.outerHeight()
                            }, w = (d = F.end).x > g.left && d.x < g.right && d.y > g.top && d.y < g.bottom), !v.triggerOnTouchEnd && w ? R = J(f) : v.triggerOnTouchLeave && !w && (R = J(p)), R != c && R != p || tt(o, R)
                        }
                    } else tt(o, R = c);
                    !1 === D && tt(o, R = c)
                }
            }

            function Q(t) {
                var e, n = t.originalEvent ? t.originalEvent : t,
                    r = n.touches;
                if (r) {
                    if (r.length && !dt()) return e = n, j = wt(), V = e.touches.length + 1, !0;
                    if (r.length && dt()) return !0
                }
                return dt() && (I = V), X = wt(), M = Ct(), rt() || !nt() ? tt(n, R = c) : v.triggerOnTouchEnd || !1 === v.triggerOnTouchEnd && R === f ? (!1 !== v.preventDefaultEvents && !1 !== t.cancelable && t.preventDefault(), tt(n, R = p)) : !v.triggerOnTouchEnd && ft() ? et(n, R = p, "tap") : R === f && tt(n, R = c), gt(!1), null
            }

            function K() {
                P = O = Y = X = I = 0, S = 1, Dt(), gt(!1)
            }

            function Z(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                v.triggerOnTouchLeave && tt(e, R = J(p))
            }

            function $() {
                N.off(C, G), N.off(E, K), N.off(x, H), N.off(F, Q), w && N.off(w, Z), gt(!1)
            }

            function J(t) {
                var e = t,
                    n = it(),
                    r = nt(),
                    i = rt();
                return !n || i ? e = c : !r || t != f || v.triggerOnTouchEnd && !v.triggerOnTouchLeave ? !r && t == p && v.triggerOnTouchLeave && (e = c) : e = p, e
            }

            function tt(t, e) {
                var n, r = t.touches;
                return (ot() && at() || at()) && (n = et(t, e, "swipe")), (ut() && st() || st()) && !1 !== n && (n = et(t, e, "pinch")), ct() && pt() && !1 !== n ? n = et(t, e, s) : M > v.longTapThreshold && T < 10 && v.longTap && !1 !== n ? n = et(t, e, o) : 1 !== I && D || !(isNaN(T) || T < v.threshold) || !ft() || !1 === n || (n = et(t, e, "tap")), e === c && K(), e === p && (r && r.length || K()), n
            }

            function et(u, a, l) {
                var h;
                if ("swipe" == l) {
                    if (N.trigger("swipeStatus", [a, b || null, T || 0, M || 0, I, z, A]), v.swipeStatus && !1 === (h = v.swipeStatus.call(N, u, a, b || null, T || 0, M || 0, I, z, A))) return !1;
                    if (a == p && ot()) {
                        if (clearTimeout(W), clearTimeout(q), N.trigger("swipe", [b, T, M, I, z, A]), v.swipe && !1 === (h = v.swipe.call(N, u, b, T, M, I, z, A))) return !1;
                        switch (b) {
                            case e:
                                N.trigger("swipeLeft", [b, T, M, I, z, A]), v.swipeLeft && (h = v.swipeLeft.call(N, u, b, T, M, I, z, A));
                                break;
                            case n:
                                N.trigger("swipeRight", [b, T, M, I, z, A]), v.swipeRight && (h = v.swipeRight.call(N, u, b, T, M, I, z, A));
                                break;
                            case r:
                                N.trigger("swipeUp", [b, T, M, I, z, A]), v.swipeUp && (h = v.swipeUp.call(N, u, b, T, M, I, z, A));
                                break;
                            case i:
                                N.trigger("swipeDown", [b, T, M, I, z, A]), v.swipeDown && (h = v.swipeDown.call(N, u, b, T, M, I, z, A))
                        }
                    }
                }
                if ("pinch" == l) {
                    if (N.trigger("pinchStatus", [a, k || null, B || 0, M || 0, I, S, z]), v.pinchStatus && !1 === (h = v.pinchStatus.call(N, u, a, k || null, B || 0, M || 0, I, S, z))) return !1;
                    if (a == p && ut()) switch (k) {
                        case "in":
                            N.trigger("pinchIn", [k || null, B || 0, M || 0, I, S, z]), v.pinchIn && (h = v.pinchIn.call(N, u, k || null, B || 0, M || 0, I, S, z));
                            break;
                        case "out":
                            N.trigger("pinchOut", [k || null, B || 0, M || 0, I, S, z]), v.pinchOut && (h = v.pinchOut.call(N, u, k || null, B || 0, M || 0, I, S, z))
                    }
                }
                return "tap" == l ? a !== c && a !== p || (clearTimeout(W), clearTimeout(q), pt() && !ct() ? (U = wt(), W = setTimeout(t.proxy((function () {
                    U = null, N.trigger("tap", [u.target]), v.tap && (h = v.tap.call(N, u, u.target))
                }), this), v.doubleTapThreshold)) : (U = null, N.trigger("tap", [u.target]), v.tap && (h = v.tap.call(N, u, u.target)))) : l == s ? a !== c && a !== p || (clearTimeout(W), clearTimeout(q), U = null, N.trigger("doubletap", [u.target]), v.doubleTap && (h = v.doubleTap.call(N, u, u.target))) : l == o && (a !== c && a !== p || (clearTimeout(W), U = null, N.trigger("longtap", [u.target]), v.longTap && (h = v.longTap.call(N, u, u.target)))), h
            }

            function nt() {
                var t = !0;
                return null !== v.threshold && (t = T >= v.threshold), t
            }

            function rt() {
                var t = !1;
                return null !== v.cancelThreshold && null !== b && (t = vt(b) - T >= v.cancelThreshold), t
            }

            function it() {
                return !(v.maxTimeThreshold && M >= v.maxTimeThreshold)
            }

            function ut() {
                var t = lt(),
                    e = ht(),
                    n = null === v.pinchThreshold || B >= v.pinchThreshold;
                return t && e && n
            }

            function st() {
                return v.pinchStatus || v.pinchIn || v.pinchOut
            }

            function ot() {
                var t = it(),
                    e = nt(),
                    n = lt(),
                    r = ht();
                return !rt() && r && n && e && t
            }

            function at() {
                return v.swipe || v.swipeStatus || v.swipeLeft || v.swipeRight || v.swipeUp || v.swipeDown
            }

            function lt() {
                return I === v.fingers || v.fingers === h || !D
            }

            function ht() {
                return 0 !== z[0].end.x
            }

            function ft() {
                return v.tap
            }

            function pt() {
                return !!v.doubleTap
            }

            function ct() {
                if (null == U) return !1;
                var t = wt();
                return pt() && t - U <= v.doubleTapThreshold
            }

            function Dt() {
                V = j = 0
            }

            function dt() {
                var t = !1;
                return j && wt() - j <= v.fingerReleaseThreshold && (t = !0), t
            }

            function gt(t) {
                N && (!0 === t ? (N.on(x, H), N.on(F, Q), w && N.on(w, Z)) : (N.off(x, H, !1), N.off(F, Q, !1), w && N.off(w, Z, !1)), N.data(_ + "_intouch", !0 === t))
            }

            function _t(t, e) {
                var n = {
                    start: {
                        x: 0,
                        y: 0
                    },
                    last: {
                        x: 0,
                        y: 0
                    },
                    end: {
                        x: 0,
                        y: 0
                    }
                };
                return n.start.x = n.last.x = n.end.x = e.pageX || e.clientX, n.start.y = n.last.y = n.end.y = e.pageY || e.clientY, z[t] = n
            }

            function mt(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0,
                    n = z[e] || null;
                return null === n && (n = _t(e, t)), n.last.x = n.end.x, n.last.y = n.end.y, n.end.x = t.pageX || t.clientX, n.end.y = t.pageY || t.clientY, n
            }

            function vt(t) {
                if (L[t]) return L[t].distance
            }

            function yt(t) {
                return {
                    direction: t,
                    distance: 0
                }
            }

            function Ct() {
                return X - Y
            }

            function xt(t, e) {
                var n = Math.abs(t.x - e.x),
                    r = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(n * n + r * r))
            }

            function Ft(t, s) {
                if (a = s, (o = t).x == a.x && o.y == a.y) return u;
                var o, a, l, h, f, p, c, D, d = (h = s, f = (l = t).x - h.x, p = h.y - l.y, c = Math.atan2(p, f), (D = Math.round(180 * c / Math.PI)) < 0 && (D = 360 - Math.abs(D)), D);
                return d <= 45 && 0 <= d || d <= 360 && 315 <= d ? e : 135 <= d && d <= 225 ? n : 45 < d && d < 135 ? i : r
            }

            function wt() {
                return (new Date).getTime()
            }
            this.enable = function () {
                return this.disable(), N.on(C, G), N.on(E, K), N
            }, this.disable = function () {
                return $(), N
            }, this.destroy = function () {
                $(), N.data(_, null), N = null
            }, this.option = function (e, n) {
                if ("object" == typeof e) v = t.extend(v, e);
                else if (void 0 !== v[e]) {
                    if (void 0 === n) return v[e];
                    v[e] = n
                } else {
                    if (!e) return v;
                    t.error("Option " + e + " does not exist on jQuery.swipe.options")
                }
                return null
            }
        }
        t.fn.rsswipe = function (e) {
            var n = t(this),
                r = n.data(_);
            if (r && "string" == typeof e) {
                if (r[e]) return r[e].apply(r, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + e + " does not exist on jQuery.rsswipe")
            } else if (r && "object" == typeof e) r.option.apply(r, arguments);
            else if (!(r || "object" != typeof e && e)) return function (e) {
                return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = u), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e = e || {}, e = t.extend({}, t.fn.rsswipe.defaults, e), this.each((function () {
                    var n = t(this),
                        r = n.data(_);
                    r || (r = new m(this, e), n.data(_, r))
                }))
            }.apply(this, arguments);
            return n
        }, t.fn.rsswipe.version = "1.6.18", t.fn.rsswipe.defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: ".noSwipe",
            preventDefaultEvents: !0
        }, t.fn.rsswipe.phases = {
            PHASE_START: "start",
            PHASE_MOVE: f,
            PHASE_END: p,
            PHASE_CANCEL: c
        }, t.fn.rsswipe.directions = {
            LEFT: e,
            RIGHT: n,
            UP: r,
            DOWN: i,
            IN: "in",
            OUT: "out"
        }, t.fn.rsswipe.pageScroll = {
            NONE: u,
            HORIZONTAL: a,
            VERTICAL: l,
            AUTO: "auto"
        }, t.fn.rsswipe.fingers = {
            ONE: 1,
            TWO: 2,
            THREE: 3,
            FOUR: 4,
            FIVE: 5,
            ALL: h
        }
    }, n(3).jQuery ? (i = [n(0)], void 0 === (u = "function" == typeof (r = s) ? r.apply(e, i) : r) || (t.exports = u)) : t.exports ? s(n(0)) : s(jQuery)
}, function (t, e) {
    (function (e) {
        t.exports = e
    }).call(this, {})
}, function (t, e) {
    var n;
    (n = jQuery).waitForImages = {
        hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
    }, n.expr.pseudos.uncached = function (t) {
        var e = document.createElement("img");
        return e.src = t.src, n(t).is('img[src!=""]') && !e.complete
    }, n.fn.waitForImages = function (t, e, r) {
        if (n.isPlainObject(t) && (e = t.each, r = t.waitForAll, t = t.finished), t = t || n.noop, e = e || n.noop, r = !!r, !n.isFunction(t) || !n.isFunction(e)) throw new TypeError("An invalid callback was supplied.");
        return this.each((function () {
            var i = n(this),
                u = [];
            if (r) {
                var s = n.waitForImages.hasImageProperties || [],
                    o = /url\((['"]?)(.*?)\1\)/g;
                i.find("*").each((function () {
                    var t = n(this);
                    t.is("img:uncached") && u.push({
                        src: t.attr("src"),
                        element: t[0]
                    }), n.each(s, (function (e, n) {
                        var r, i = t.css(n);
                        if (!i) return !0;
                        for (; r = o.exec(i);) u.push({
                            src: r[2],
                            element: t[0]
                        })
                    }))
                }))
            } else i.find("img:uncached").each((function () {
                u.push({
                    src: this.src,
                    element: this
                })
            }));
            var a = u.length,
                l = 0;
            0 == a && t.call(i[0]), n.each(u, (function (r, u) {
                var s = new Image;
                n(s).bind("load error", (function (n) {
                    if (l++, e.call(u.element, l, a, "load" == n.type), l == a) return t.call(i[0]), !1
                })), s.src = u.src
            }))
        }))
    }
}, , function (t, e, n) {
    "use strict";

    function r(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function i(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    /*!
     * GSAP 3.9.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    n.r(e);
    var u, s, o, a, l, h, f, p, c, D, d, g, _, m, v, y, C, x, F, w, E, T, b, A, M, O, P, S, B = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        k = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        L = 1e8,
        N = 2 * Math.PI,
        R = N / 4,
        I = 0,
        z = Math.sqrt,
        Y = Math.cos,
        X = Math.sin,
        j = function (t) {
            return "string" == typeof t
        },
        V = function (t) {
            return "function" == typeof t
        },
        U = function (t) {
            return "number" == typeof t
        },
        W = function (t) {
            return void 0 === t
        },
        q = function (t) {
            return "object" == typeof t
        },
        G = function (t) {
            return !1 !== t
        },
        H = function () {
            return "undefined" != typeof window
        },
        Q = function (t) {
            return V(t) || j(t)
        },
        K = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
        Z = Array.isArray,
        $ = /(?:-?\.?\d|\.)+/gi,
        J = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        et = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        nt = /[+-]=-?[.\d]+/,
        rt = /[^,'"\[\]\s]+/gi,
        it = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        ut = {},
        st = {},
        ot = function (t) {
            return (st = St(t, ut)) && mn
        },
        at = function (t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        lt = function (t, e) {
            return !e && console.warn(t)
        },
        ht = function (t, e) {
            return t && (ut[t] = e) && st && (st[t] = e) || ut
        },
        ft = function () {
            return 0
        },
        pt = {},
        ct = [],
        Dt = {},
        dt = {},
        gt = {},
        _t = 30,
        mt = [],
        vt = "",
        yt = function (t) {
            var e, n, r = t[0];
            if (q(r) || V(r) || (t = [t]), !(e = (r._gsap || {}).harness)) {
                for (n = mt.length; n-- && !mt[n].targetTest(r););
                e = mt[n]
            }
            for (n = t.length; n--;) t[n] && (t[n]._gsap || (t[n]._gsap = new Xe(t[n], e))) || t.splice(n, 1);
            return t
        },
        Ct = function (t) {
            return t._gsap || yt(oe(t))[0]._gsap
        },
        xt = function (t, e, n) {
            return (n = t[e]) && V(n) ? t[e]() : W(n) && t.getAttribute && t.getAttribute(e) || n
        },
        Ft = function (t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        wt = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        Et = function (t) {
            return Math.round(1e7 * t) / 1e7 || 0
        },
        Tt = function (t, e) {
            for (var n = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < n;);
            return r < n
        },
        bt = function () {
            var t, e, n = ct.length,
                r = ct.slice(0);
            for (Dt = {}, ct.length = 0, t = 0; t < n; t++)(e = r[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        At = function (t, e, n, r) {
            ct.length && bt(), t.render(e, n, r), ct.length && bt()
        },
        Mt = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(rt).length < 2 ? e : j(t) ? t.trim() : t
        },
        Ot = function (t) {
            return t
        },
        Pt = function (t, e) {
            for (var n in e) n in t || (t[n] = e[n]);
            return t
        },
        St = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t
        },
        Bt = function t(e, n) {
            for (var r in n) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (e[r] = q(n[r]) ? t(e[r] || (e[r] = {}), n[r]) : n[r]);
            return e
        },
        kt = function (t, e) {
            var n, r = {};
            for (n in t) n in e || (r[n] = t[n]);
            return r
        },
        Lt = function (t) {
            var e, n = t.parent || s,
                r = t.keyframes ? (e = Z(t.keyframes), function (t, n) {
                    for (var r in n) r in t || "duration" === r && e || "ease" === r || (t[r] = n[r])
                }) : Pt;
            if (G(t.inherit))
                for (; n;) r(t, n.vars.defaults), n = n.parent || n._dp;
            return t
        },
        Nt = function (t, e, n, r) {
            void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
            var i = e._prev,
                u = e._next;
            i ? i._next = u : t[n] === e && (t[n] = u), u ? u._prev = i : t[r] === e && (t[r] = i), e._next = e._prev = e.parent = null
        },
        Rt = function (t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
        },
        It = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var n = t; n;) n._dirty = 1, n = n.parent;
            return t
        },
        zt = function (t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        },
        Yt = function (t) {
            return t._repeat ? Xt(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        Xt = function (t, e) {
            var n = Math.floor(t /= e);
            return t && n === t ? n - 1 : n
        },
        jt = function (t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Vt = function (t) {
            return t._end = Et(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
        },
        Ut = function (t, e) {
            var n = t._dp;
            return n && n.smoothChildTiming && t._ts && (t._start = Et(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Vt(t), n._dirty || It(n, t)), t
        },
        Wt = function (t, e) {
            var n;
            if ((e._time || e._initted && !e._dur) && (n = jt(t.rawTime(), e), (!e._dur || ne(0, e.totalDuration(), n) - e._tTime > 1e-8) && e.render(n, !0)), It(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (n = t; n._dp;) n.rawTime() >= 0 && n.totalTime(n._tTime), n = n._dp;
                t._zTime = -1e-8
            }
        },
        qt = function (t, e, n, r) {
            return e.parent && Rt(e), e._start = Et((U(n) ? n : n || t !== s ? Jt(t, n, e) : t._time) + e._delay), e._end = Et(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function (t, e, n, r, i) {
                    void 0 === n && (n = "_first"), void 0 === r && (r = "_last");
                    var u, s = t[r];
                    if (i)
                        for (u = e[i]; s && s[i] > u;) s = s._prev;
                    s ? (e._next = s._next, s._next = e) : (e._next = t[n], t[n] = e), e._next ? e._next._prev = e : t[r] = e, e._prev = s, e.parent = e._dp = t
                }(t, e, "_first", "_last", t._sort ? "_start" : 0), Qt(e) || (t._recent = e), r || Wt(t, e), t
        },
        Gt = function (t, e) {
            return (ut.ScrollTrigger || at("scrollTrigger", e)) && ut.ScrollTrigger.create(e, t)
        },
        Ht = function (t, e, n, r) {
            return He(t, e), t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Ae.frame ? (ct.push(t), t._lazy = [e, r], 1) : void 0 : 1
        },
        Qt = function (t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        Kt = function (t, e, n, r) {
            var i = t._repeat,
                u = Et(e) || 0,
                s = t._tTime / t._tDur;
            return s && !r && (t._time *= u / t._dur), t._dur = u, t._tDur = i ? i < 0 ? 1e10 : Et(u * (i + 1) + t._rDelay * i) : u, s > 0 && !r ? Ut(t, t._tTime = t._tDur * s) : t.parent && Vt(t), n || It(t.parent, t), t
        },
        Zt = function (t) {
            return t instanceof Ve ? It(t) : Kt(t, t._dur)
        },
        $t = {
            _start: 0,
            endTime: ft,
            totalDuration: ft
        },
        Jt = function t(e, n, r) {
            var i, u, s, o = e.labels,
                a = e._recent || $t,
                l = e.duration() >= L ? a.endTime(!1) : e._dur;
            return j(n) && (isNaN(n) || n in o) ? (u = n.charAt(0), s = "%" === n.substr(-1), i = n.indexOf("="), "<" === u || ">" === u ? (i >= 0 && (n = n.replace(/=/, "")), ("<" === u ? a._start : a.endTime(a._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) * (s ? (i < 0 ? a : r).totalDuration() / 100 : 1)) : i < 0 ? (n in o || (o[n] = l), o[n]) : (u = parseFloat(n.charAt(i - 1) + n.substr(i + 1)), s && r && (u = u / 100 * (Z(r) ? r[0] : r).totalDuration()), i > 1 ? t(e, n.substr(0, i - 1), r) + u : l + u)) : null == n ? l : +n
        },
        te = function (t, e, n) {
            var r, i, u = U(e[1]),
                s = (u ? 2 : 1) + (t < 2 ? 0 : 1),
                o = e[s];
            if (u && (o.duration = e[1]), o.parent = n, t) {
                for (r = o, i = n; i && !("immediateRender" in r);) r = i.vars.defaults || {}, i = G(i.vars.inherit) && i.parent;
                o.immediateRender = G(r.immediateRender), t < 2 ? o.runBackwards = 1 : o.startAt = e[s - 1]
            }
            return new Je(e[0], o, e[s + 1])
        },
        ee = function (t, e) {
            return t || 0 === t ? e(t) : e
        },
        ne = function (t, e, n) {
            return n < t ? t : n > e ? e : n
        },
        re = function (t, e) {
            return j(t) && (e = it.exec(t)) ? t.substr(e.index + e[0].length) : ""
        },
        ie = [].slice,
        ue = function (t, e) {
            return t && q(t) && "length" in t && (!e && !t.length || t.length - 1 in t && q(t[0])) && !t.nodeType && t !== o
        },
        se = function (t, e, n) {
            return void 0 === n && (n = []), t.forEach((function (t) {
                var r;
                return j(t) && !e || ue(t, 1) ? (r = n).push.apply(r, oe(t)) : n.push(t)
            })) || n
        },
        oe = function (t, e, n) {
            return !j(t) || n || !a && Me() ? Z(t) ? se(t, n) : ue(t) ? ie.call(t, 0) : t ? [t] : [] : ie.call((e || l).querySelectorAll(t), 0)
        },
        ae = function (t) {
            return t.sort((function () {
                return .5 - Math.random()
            }))
        },
        le = function (t) {
            if (V(t)) return t;
            var e = q(t) ? t : {
                    each: t
                },
                n = Ne(e.ease),
                r = e.from || 0,
                i = parseFloat(e.base) || 0,
                u = {},
                s = r > 0 && r < 1,
                o = isNaN(r) || s,
                a = e.axis,
                l = r,
                h = r;
            return j(r) ? l = h = {
                    center: .5,
                    edges: .5,
                    end: 1
                } [r] || 0 : !s && o && (l = r[0], h = r[1]),
                function (t, s, f) {
                    var p, c, D, d, g, _, m, v, y, C = (f || e).length,
                        x = u[C];
                    if (!x) {
                        if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, L])[1])) {
                            for (m = -L; m < (m = f[y++].getBoundingClientRect().left) && y < C;);
                            y--
                        }
                        for (x = u[C] = [], p = o ? Math.min(y, C) * l - .5 : r % y, c = y === L ? 0 : o ? C * h / y - .5 : r / y | 0, m = 0, v = L, _ = 0; _ < C; _++) D = _ % y - p, d = c - (_ / y | 0), x[_] = g = a ? Math.abs("y" === a ? d : D) : z(D * D + d * d), g > m && (m = g), g < v && (v = g);
                        "random" === r && ae(x), x.max = m - v, x.min = v, x.v = C = (parseFloat(e.amount) || parseFloat(e.each) * (y > C ? C - 1 : a ? "y" === a ? C / y : y : Math.max(y, C / y)) || 0) * ("edges" === r ? -1 : 1), x.b = C < 0 ? i - C : i, x.u = re(e.amount || e.each) || 0, n = n && C < 0 ? ke(n) : n
                    }
                    return C = (x[t] - x.min) / x.max || 0, Et(x.b + (n ? n(C) : C) * x.v) + x.u
                }
        },
        he = function (t) {
            var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
            return function (n) {
                var r = Math.round(parseFloat(n) / t) * t * e;
                return (r - r % 1) / e + (U(n) ? 0 : re(n))
            }
        },
        fe = function (t, e) {
            var n, r, i = Z(t);
            return !i && q(t) && (n = i = t.radius || L, t.values ? (t = oe(t.values), (r = !U(t[0])) && (n *= n)) : t = he(t.increment)), ee(e, i ? V(t) ? function (e) {
                return r = t(e), Math.abs(r - e) <= n ? r : e
            } : function (e) {
                for (var i, u, s = parseFloat(r ? e.x : e), o = parseFloat(r ? e.y : 0), a = L, l = 0, h = t.length; h--;)(i = r ? (i = t[h].x - s) * i + (u = t[h].y - o) * u : Math.abs(t[h] - s)) < a && (a = i, l = h);
                return l = !n || a <= n ? t[l] : e, r || l === e || U(e) ? l : l + re(e)
            } : he(t))
        },
        pe = function (t, e, n, r) {
            return ee(Z(t) ? !e : !0 === n ? !!(n = 0) : !r, (function () {
                return Z(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (r = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * r) / r
            }))
        },
        ce = function (t, e, n) {
            return ee(n, (function (n) {
                return t[~~e(n)]
            }))
        },
        De = function (t) {
            for (var e, n, r, i, u = 0, s = ""; ~(e = t.indexOf("random(", u));) r = t.indexOf(")", e), i = "[" === t.charAt(e + 7), n = t.substr(e + 7, r - e - 7).match(i ? rt : $), s += t.substr(u, e - u) + pe(i ? n : +n[0], i ? 0 : +n[1], +n[2] || 1e-5), u = r + 1;
            return s + t.substr(u, t.length - u)
        },
        de = function (t, e, n, r, i) {
            var u = e - t,
                s = r - n;
            return ee(i, (function (e) {
                return n + ((e - t) / u * s || 0)
            }))
        },
        ge = function (t, e, n) {
            var r, i, u, s = t.labels,
                o = L;
            for (r in s)(i = s[r] - e) < 0 == !!n && i && o > (i = Math.abs(i)) && (u = r, o = i);
            return u
        },
        _e = function (t, e, n) {
            var r, i, u = t.vars,
                s = u[e];
            if (s) return r = u[e + "Params"], i = u.callbackScope || t, n && ct.length && bt(), r ? s.apply(i, r) : s.call(i)
        },
        me = function (t) {
            return Rt(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && _e(t, "onInterrupt"), t
        },
        ve = function (t) {
            var e = (t = !t.name && t.default || t).name,
                n = V(t),
                r = e && !n && t.init ? function () {
                    this._props = []
                } : t,
                i = {
                    init: ft,
                    render: ln,
                    add: qe,
                    kill: fn,
                    modifier: hn,
                    rawVars: 0
                },
                u = {
                    targetTest: 0,
                    get: 0,
                    getSetter: un,
                    aliases: {},
                    register: 0
                };
            if (Me(), t !== r) {
                if (dt[e]) return;
                Pt(r, Pt(kt(t, i), u)), St(r.prototype, St(i, kt(t, u))), dt[r.prop = e] = r, t.targetTest && (mt.push(r), pt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            ht(e, r), t.register && t.register(mn, r, Dn)
        },
        ye = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        Ce = function (t, e, n) {
            return 255 * (6 * (t += t < 0 ? 1 : t > 1 ? -1 : 0) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        xe = function (t, e, n) {
            var r, i, u, s, o, a, l, h, f, p, c = t ? U(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : ye.black;
            if (!c) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), ye[t]) c = ye[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (r = t.charAt(1), i = t.charAt(2), u = t.charAt(3), t = "#" + r + r + i + i + u + u + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(c = parseInt(t.substr(1, 6), 16)) >> 16, c >> 8 & 255, 255 & c, parseInt(t.substr(7), 16) / 255];
                    c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
                } else if ("hsl" === t.substr(0, 3))
                    if (c = p = t.match($), e) {
                        if (~t.indexOf("=")) return c = t.match(J), n && c.length < 4 && (c[3] = 1), c
                    } else s = +c[0] % 360 / 360, o = +c[1] / 100, r = 2 * (a = +c[2] / 100) - (i = a <= .5 ? a * (o + 1) : a + o - a * o), c.length > 3 && (c[3] *= 1), c[0] = Ce(s + 1 / 3, r, i), c[1] = Ce(s, r, i), c[2] = Ce(s - 1 / 3, r, i);
                else c = t.match($) || ye.transparent;
                c = c.map(Number)
            }
            return e && !p && (r = c[0] / 255, i = c[1] / 255, u = c[2] / 255, a = ((l = Math.max(r, i, u)) + (h = Math.min(r, i, u))) / 2, l === h ? s = o = 0 : (f = l - h, o = a > .5 ? f / (2 - l - h) : f / (l + h), s = l === r ? (i - u) / f + (i < u ? 6 : 0) : l === i ? (u - r) / f + 2 : (r - i) / f + 4, s *= 60), c[0] = ~~(s + .5), c[1] = ~~(100 * o + .5), c[2] = ~~(100 * a + .5)), n && c.length < 4 && (c[3] = 1), c
        },
        Fe = function (t) {
            var e = [],
                n = [],
                r = -1;
            return t.split(Ee).forEach((function (t) {
                var i = t.match(tt) || [];
                e.push.apply(e, i), n.push(r += i.length + 1)
            })), e.c = n, e
        },
        we = function (t, e, n) {
            var r, i, u, s, o = "",
                a = (t + o).match(Ee),
                l = e ? "hsla(" : "rgba(",
                h = 0;
            if (!a) return t;
            if (a = a.map((function (t) {
                    return (t = xe(t, e, 1)) && l + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                })), n && (u = Fe(t), (r = n.c).join(o) !== u.c.join(o)))
                for (s = (i = t.replace(Ee, "1").split(tt)).length - 1; h < s; h++) o += i[h] + (~r.indexOf(h) ? a.shift() || l + "0,0,0,0)" : (u.length ? u : a.length ? a : n).shift());
            if (!i)
                for (s = (i = t.split(Ee)).length - 1; h < s; h++) o += i[h] + a[h];
            return o + i[s]
        },
        Ee = function () {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in ye) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Te = /hsl[a]?\(/,
        be = function (t) {
            var e, n = t.join(" ");
            if (Ee.lastIndex = 0, Ee.test(n)) return e = Te.test(n), t[1] = we(t[1], e), t[0] = we(t[0], e, Fe(t[1])), !0
        },
        Ae = (y = Date.now, C = 500, x = 33, F = y(), w = F, T = E = 1e3 / 240, A = function t(e) {
            var n, r, i, u, s = y() - w,
                o = !0 === e;
            if (s > C && (F += s - x), ((n = (i = (w += s) - F) - T) > 0 || o) && (u = ++_.frame, m = i - 1e3 * _.time, _.time = i /= 1e3, T += n + (n >= E ? 4 : E - n), r = 1), o || (D = d(t)), r)
                for (v = 0; v < b.length; v++) b[v](i, m, u, e)
        }, _ = {
            time: 0,
            frame: 0,
            tick: function () {
                A(!0)
            },
            deltaRatio: function (t) {
                return m / (1e3 / (t || 60))
            },
            wake: function () {
                h && (!a && H() && (o = a = window, l = o.document || {}, ut.gsap = mn, (o.gsapVersions || (o.gsapVersions = [])).push(mn.version), ot(st || o.GreenSockGlobals || !o.gsap && o || {}), g = o.requestAnimationFrame), D && _.sleep(), d = g || function (t) {
                    return setTimeout(t, T - 1e3 * _.time + 1 | 0)
                }, c = 1, A(2))
            },
            sleep: function () {
                (g ? o.cancelAnimationFrame : clearTimeout)(D), c = 0, d = ft
            },
            lagSmoothing: function (t, e) {
                C = t || 1 / 1e-8, x = Math.min(e, C, 0)
            },
            fps: function (t) {
                E = 1e3 / (t || 240), T = 1e3 * _.time + E
            },
            add: function (t) {
                b.indexOf(t) < 0 && b.push(t), Me()
            },
            remove: function (t, e) {
                ~(e = b.indexOf(t)) && b.splice(e, 1) && v >= e && v--
            },
            _listeners: b = []
        }),
        Me = function () {
            return !c && Ae.wake()
        },
        Oe = {},
        Pe = /^[\d.\-M][\d.\-,\s]/,
        Se = /["']/g,
        Be = function (t) {
            for (var e, n, r, i = {}, u = t.substr(1, t.length - 3).split(":"), s = u[0], o = 1, a = u.length; o < a; o++) n = u[o], e = o !== a - 1 ? n.lastIndexOf(",") : n.length, r = n.substr(0, e), i[s] = isNaN(r) ? r.replace(Se, "").trim() : +r, s = n.substr(e + 1).trim();
            return i
        },
        ke = function (t) {
            return function (e) {
                return 1 - t(1 - e)
            }
        },
        Le = function t(e, n) {
            for (var r, i = e._first; i;) i instanceof Ve ? t(i, n) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === n || (i.timeline ? t(i.timeline, n) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = n)), i = i._next
        },
        Ne = function (t, e) {
            return t && (V(t) ? t : Oe[t] || function (t) {
                var e, n, r, i, u = (t + "").split("("),
                    s = Oe[u[0]];
                return s && u.length > 1 && s.config ? s.config.apply(null, ~t.indexOf("{") ? [Be(u[1])] : (e = t, n = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", n), e.substring(n, ~i && i < r ? e.indexOf(")", r + 1) : r)).split(",").map(Mt)) : Oe._CE && Pe.test(t) ? Oe._CE("", t) : s
            }(t)) || e
        },
        Re = function (t, e, n, r) {
            void 0 === n && (n = function (t) {
                return 1 - e(1 - t)
            }), void 0 === r && (r = function (t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var i, u = {
                easeIn: e,
                easeOut: n,
                easeInOut: r
            };
            return Ft(t, (function (t) {
                for (var e in Oe[t] = ut[t] = u, Oe[i = t.toLowerCase()] = n, u) Oe[i + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Oe[t + "." + e] = u[e]
            })), u
        },
        Ie = function (t) {
            return function (e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        ze = function t(e, n, r) {
            var i = n >= 1 ? n : 1,
                u = (r || (e ? .3 : .45)) / (n < 1 ? n : 1),
                s = u / N * (Math.asin(1 / i) || 0),
                o = function (t) {
                    return 1 === t ? 1 : i * Math.pow(2, -10 * t) * X((t - s) * u) + 1
                },
                a = "out" === e ? o : "in" === e ? function (t) {
                    return 1 - o(1 - t)
                } : Ie(o);
            return u = N / u, a.config = function (n, r) {
                return t(e, n, r)
            }, a
        },
        Ye = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var r = function (t) {
                    return t ? --t * t * ((n + 1) * t + n) + 1 : 0
                },
                i = "out" === e ? r : "in" === e ? function (t) {
                    return 1 - r(1 - t)
                } : Ie(r);
            return i.config = function (n) {
                return t(e, n)
            }, i
        };
    Ft("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
        var n = e < 5 ? e + 1 : e;
        Re(t + ",Power" + (n - 1), e ? function (t) {
            return Math.pow(t, n)
        } : function (t) {
            return t
        }, (function (t) {
            return 1 - Math.pow(1 - t, n)
        }), (function (t) {
            return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
        }))
    })), Oe.Linear.easeNone = Oe.none = Oe.Linear.easeIn, Re("Elastic", ze("in"), ze("out"), ze()), M = 7.5625, P = 1 / (O = 2.75), Re("Bounce", (function (t) {
        return 1 - S(1 - t)
    }), S = function (t) {
        return t < P ? M * t * t : t < .7272727272727273 ? M * Math.pow(t - 1.5 / O, 2) + .75 : t < .9090909090909092 ? M * (t -= 2.25 / O) * t + .9375 : M * Math.pow(t - 2.625 / O, 2) + .984375
    }), Re("Expo", (function (t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), Re("Circ", (function (t) {
        return -(z(1 - t * t) - 1)
    })), Re("Sine", (function (t) {
        return 1 === t ? 1 : 1 - Y(t * R)
    })), Re("Back", Ye("in"), Ye("out"), Ye()), Oe.SteppedEase = Oe.steps = ut.SteppedEase = {
        config: function (t, e) {
            void 0 === t && (t = 1);
            var n = 1 / t,
                r = t + (e ? 0 : 1),
                i = e ? 1 : 0;
            return function (t) {
                return ((r * ne(0, 1 - 1e-8, t) | 0) + i) * n
            }
        }
    }, k.ease = Oe["quad.out"], Ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
        return vt += t + "," + t + "Params,"
    }));
    var Xe = function (t, e) {
            this.id = I++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : xt, this.set = e ? e.getSetter : un
        },
        je = function () {
            function t(t) {
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Kt(this, +t.duration, 1, 1), this.data = t.data, c || Ae.wake()
            }
            var e = t.prototype;
            return e.delay = function (t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function (t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function (t) {
                return arguments.length ? (this._dirty = 0, Kt(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function (t, e) {
                if (Me(), !arguments.length) return this._tTime;
                var n = this._dp;
                if (n && n.smoothChildTiming && this._ts) {
                    for (Ut(this, t), !n._dp || n.parent || Wt(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && qt(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), At(this, t, e)), this
            }, e.time = function (t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Yt(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function (t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, e.progress = function (t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Yt(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, e.iteration = function (t, e) {
                var n = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? Xt(this._tTime, n) + 1 : 1
            }, e.timeScale = function (t) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var e = this.parent && this._ts ? jt(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, zt(this.totalTime(ne(-this._delay, this._tDur, e), !0)), Vt(this), this
            }, e.paused = function (t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Me(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
            }, e.startTime = function (t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && qt(e, this, t - this._delay), this
                }
                return this._start
            }, e.endTime = function (t) {
                return this._start + (G(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
            }, e.rawTime = function (t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? jt(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.globalTime = function (t) {
                for (var e = this, n = arguments.length ? t : e.rawTime(); e;) n = e._start + n / (e._ts || 1), e = e._dp;
                return n
            }, e.repeat = function (t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Zt(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, e.repeatDelay = function (t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t, Zt(this), e ? this.time(e) : this
                }
                return this._rDelay
            }, e.yoyo = function (t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function (t, e) {
                return this.totalTime(Jt(this, t), G(e))
            }, e.restart = function (t, e) {
                return this.play().totalTime(t ? -this._delay : 0, G(e))
            }, e.play = function (t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function (t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function (t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function () {
                return this.paused(!1)
            }, e.reversed = function (t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
            }, e.invalidate = function () {
                return this._initted = this._act = 0, this._zTime = -1e-8, this
            }, e.isActive = function () {
                var t, e = this.parent || this._dp,
                    n = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - 1e-8))
            }, e.eventCallback = function (t, e, n) {
                var r = this.vars;
                return arguments.length > 1 ? (e ? (r[t] = e, n && (r[t + "Params"] = n), "onUpdate" === t && (this._onUpdate = e)) : delete r[t], this) : r[t]
            }, e.then = function (t) {
                var e = this;
                return new Promise((function (n) {
                    var r = V(t) ? t : Ot,
                        i = function () {
                            var t = e.then;
                            e.then = null, V(r) && (r = r(e)) && (r.then || r === e) && (e.then = t), n(r), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? i() : e._prom = i
                }))
            }, e.kill = function () {
                me(this)
            }, t
        }();
    Pt(je.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Ve = function (t) {
        function e(e, n) {
            var i;
            return void 0 === e && (e = {}), (i = t.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = G(e.sortChildren), s && qt(e.parent || s, r(i), n), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Gt(r(i), e.scrollTrigger), i
        }
        i(e, t);
        var n = e.prototype;
        return n.to = function (t, e, n) {
            return te(0, arguments, this), this
        }, n.from = function (t, e, n) {
            return te(1, arguments, this), this
        }, n.fromTo = function (t, e, n, r) {
            return te(2, arguments, this), this
        }, n.set = function (t, e, n) {
            return e.duration = 0, e.parent = this, Lt(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Je(t, e, Jt(this, n), 1), this
        }, n.call = function (t, e, n) {
            return qt(this, Je.delayedCall(0, t, e), n)
        }, n.staggerTo = function (t, e, n, r, i, u, s) {
            return n.duration = e, n.stagger = n.stagger || r, n.onComplete = u, n.onCompleteParams = s, n.parent = this, new Je(t, n, Jt(this, i)), this
        }, n.staggerFrom = function (t, e, n, r, i, u, s) {
            return n.runBackwards = 1, Lt(n).immediateRender = G(n.immediateRender), this.staggerTo(t, e, n, r, i, u, s)
        }, n.staggerFromTo = function (t, e, n, r, i, u, s, o) {
            return r.startAt = n, Lt(r).immediateRender = G(r.immediateRender), this.staggerTo(t, e, r, i, u, s, o)
        }, n.render = function (t, e, n) {
            var r, i, u, o, a, l, h, f, p, c, D, d, g = this._time,
                _ = this._dirty ? this.totalDuration() : this._tDur,
                m = this._dur,
                v = t <= 0 ? 0 : Et(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !m);
            if (this !== s && v > _ && t >= 0 && (v = _), v !== this._tTime || n || y) {
                if (g !== this._time && m && (v += this._time - g, t += this._time - g), r = v, p = this._start, l = !(f = this._ts), y && (m || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (D = this._yoyo, a = m + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, n);
                    if (r = Et(v % a), v === _ ? (o = this._repeat, r = m) : ((o = ~~(v / a)) && o === v / a && (r = m, o--), r > m && (r = m)), c = Xt(this._tTime, a), !g && this._tTime && c !== o && (c = o), D && 1 & o && (r = m - r, d = 1), o !== c && !this._lock) {
                        var C = D && 1 & c,
                            x = C === (D && 1 & o);
                        if (o < c && (C = !C), g = C ? 0 : m, this._lock = 1, this.render(g || (d ? 0 : Et(o * a)), e, !m)._lock = 0, this._tTime = v, !e && this.parent && _e(this, "onRepeat"), this.vars.repeatRefresh && !d && (this.invalidate()._lock = 1), g && g !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (m = this._dur, _ = this._tDur, x && (this._lock = 2, g = C ? m : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !d && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                        Le(this, d)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function (t, e, n) {
                        var r;
                        if (n > e)
                            for (r = t._first; r && r._start <= n;) {
                                if ("isPause" === r.data && r._start > e) return r;
                                r = r._next
                            } else
                                for (r = t._last; r && r._start >= n;) {
                                    if ("isPause" === r.data && r._start < e) return r;
                                    r = r._prev
                                }
                    }(this, Et(g), Et(r))) && (v -= r - (r = h._start)), this._tTime = v, this._time = r, this._act = !f, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && r && !e && (_e(this, "onStart"), this._tTime !== v)) return this;
                if (r >= g && t >= 0)
                    for (i = this._first; i;) {
                        if (u = i._next, (i._act || r >= i._start) && i._ts && h !== i) {
                            if (i.parent !== this) return this.render(t, e, n);
                            if (i.render(i._ts > 0 ? (r - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (r - i._start) * i._ts, e, n), r !== this._time || !this._ts && !l) {
                                h = 0, u && (v += this._zTime = -1e-8);
                                break
                            }
                        }
                        i = u
                    } else {
                        i = this._last;
                        for (var F = t < 0 ? t : r; i;) {
                            if (u = i._prev, (i._act || F <= i._end) && i._ts && h !== i) {
                                if (i.parent !== this) return this.render(t, e, n);
                                if (i.render(i._ts > 0 ? (F - i._start) * i._ts : (i._dirty ? i.totalDuration() : i._tDur) + (F - i._start) * i._ts, e, n), r !== this._time || !this._ts && !l) {
                                    h = 0, u && (v += this._zTime = F ? -1e-8 : 1e-8);
                                    break
                                }
                            }
                            i = u
                        }
                    }
                if (h && !e && (this.pause(), h.render(r >= g ? 0 : -1e-8)._zTime = r >= g ? 1 : -1, this._ts)) return this._start = p, Vt(this), this.render(t, e, n);
                this._onUpdate && !e && _e(this, "onUpdate", !0), (v === _ && _ >= this.totalDuration() || !v && g) && (p !== this._start && Math.abs(f) === Math.abs(this._ts) || this._lock || ((t || !m) && (v === _ && this._ts > 0 || !v && this._ts < 0) && Rt(this, 1), e || t < 0 && !g || !v && !g && _ || (_e(this, v === _ && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(v < _ && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, n.add = function (t, e) {
            var n = this;
            if (U(e) || (e = Jt(this, e, t)), !(t instanceof je)) {
                if (Z(t)) return t.forEach((function (t) {
                    return n.add(t, e)
                })), this;
                if (j(t)) return this.addLabel(t, e);
                if (!V(t)) return this;
                t = Je.delayedCall(0, t)
            }
            return this !== t ? qt(this, t, e) : this
        }, n.getChildren = function (t, e, n, r) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === n && (n = !0), void 0 === r && (r = -L);
            for (var i = [], u = this._first; u;) u._start >= r && (u instanceof Je ? e && i.push(u) : (n && i.push(u), t && i.push.apply(i, u.getChildren(!0, e, n)))), u = u._next;
            return i
        }, n.getById = function (t) {
            for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                if (e[n].vars.id === t) return e[n]
        }, n.remove = function (t) {
            return j(t) ? this.removeLabel(t) : V(t) ? this.killTweensOf(t) : (Nt(this, t), t === this._recent && (this._recent = this._last), It(this))
        }, n.totalTime = function (e, n) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = Et(Ae.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, n), this._forcing = 0, this) : this._tTime
        }, n.addLabel = function (t, e) {
            return this.labels[t] = Jt(this, e), this
        }, n.removeLabel = function (t) {
            return delete this.labels[t], this
        }, n.addPause = function (t, e, n) {
            var r = Je.delayedCall(0, e || ft, n);
            return r.data = "isPause", this._hasPause = 1, qt(this, r, Jt(this, t))
        }, n.removePause = function (t) {
            var e = this._first;
            for (t = Jt(this, t); e;) e._start === t && "isPause" === e.data && Rt(e), e = e._next
        }, n.killTweensOf = function (t, e, n) {
            for (var r = this.getTweensOf(t, n), i = r.length; i--;) Ue !== r[i] && r[i].kill(t, e);
            return this
        }, n.getTweensOf = function (t, e) {
            for (var n, r = [], i = oe(t), u = this._first, s = U(e); u;) u instanceof Je ? Tt(u._targets, i) && (s ? (!Ue || u._initted && u._ts) && u.globalTime(0) <= e && u.globalTime(u.totalDuration()) > e : !e || u.isActive()) && r.push(u) : (n = u.getTweensOf(i, e)).length && r.push.apply(r, n), u = u._next;
            return r
        }, n.tweenTo = function (t, e) {
            e = e || {};
            var n, r = this,
                i = Jt(r, t),
                u = e,
                s = u.startAt,
                o = u.onStart,
                a = u.onStartParams,
                l = u.immediateRender,
                h = Je.to(r, Pt({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: i,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale()) || 1e-8,
                    onStart: function () {
                        if (r.pause(), !n) {
                            var t = e.duration || Math.abs((i - (s && "time" in s ? s.time : r._time)) / r.timeScale());
                            h._dur !== t && Kt(h, t, 0, 1).render(h._time, !0, !0), n = 1
                        }
                        o && o.apply(h, a || [])
                    }
                }, e));
            return l ? h.render(0) : h
        }, n.tweenFromTo = function (t, e, n) {
            return this.tweenTo(e, Pt({
                startAt: {
                    time: Jt(this, t)
                }
            }, n))
        }, n.recent = function () {
            return this._recent
        }, n.nextLabel = function (t) {
            return void 0 === t && (t = this._time), ge(this, Jt(this, t))
        }, n.previousLabel = function (t) {
            return void 0 === t && (t = this._time), ge(this, Jt(this, t), 1)
        }, n.currentLabel = function (t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }, n.shiftChildren = function (t, e, n) {
            void 0 === n && (n = 0);
            for (var r, i = this._first, u = this.labels; i;) i._start >= n && (i._start += t, i._end += t), i = i._next;
            if (e)
                for (r in u) u[r] >= n && (u[r] += t);
            return It(this)
        }, n.invalidate = function () {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, n.clear = function (t) {
            void 0 === t && (t = !0);
            for (var e, n = this._first; n;) e = n._next, this.remove(n), n = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), It(this)
        }, n.totalDuration = function (t) {
            var e, n, r, i = 0,
                u = this,
                o = u._last,
                a = L;
            if (arguments.length) return u.timeScale((u._repeat < 0 ? u.duration() : u.totalDuration()) / (u.reversed() ? -t : t));
            if (u._dirty) {
                for (r = u.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (n = o._start) > a && u._sort && o._ts && !u._lock ? (u._lock = 1, qt(u, o, n - o._delay, 1)._lock = 0) : a = n, n < 0 && o._ts && (i -= n, (!r && !u._dp || r && r.smoothChildTiming) && (u._start += n / u._ts, u._time -= n, u._tTime -= n), u.shiftChildren(-n, !1, -Infinity), a = 0), o._end > i && o._ts && (i = o._end), o = e;
                Kt(u, u === s && u._time > i ? u._time : i, 1, 1), u._dirty = 0
            }
            return u._tDur
        }, e.updateRoot = function (t) {
            if (s._ts && (At(s, jt(t, s)), f = Ae.frame), Ae.frame >= _t) {
                _t += B.autoSleep || 120;
                var e = s._first;
                if ((!e || !e._ts) && B.autoSleep && Ae._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Ae.sleep()
                }
            }
        }, e
    }(je);
    Pt(Ve.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Ue, We = function (t, e, n, r, i, u, s) {
            var o, a, l, h, f, p, c, D, d = new Dn(this._pt, t, e, 0, 1, an, null, i),
                g = 0,
                _ = 0;
            for (d.b = n, d.e = r, n += "", (c = ~(r += "").indexOf("random(")) && (r = De(r)), u && (u(D = [n, r], t, e), n = D[0], r = D[1]), a = n.match(et) || []; o = et.exec(r);) h = o[0], f = r.substring(g, o.index), l ? l = (l + 1) % 5 : "rgba(" === f.substr(-5) && (l = 1), h !== a[_++] && (p = parseFloat(a[_ - 1]) || 0, d._pt = {
                _next: d._pt,
                p: f || 1 === _ ? f : ",",
                s: p,
                c: "=" === h.charAt(1) ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1) : parseFloat(h) - p,
                m: l && l < 4 ? Math.round : 0
            }, g = et.lastIndex);
            return d.c = g < r.length ? r.substring(g, r.length) : "", d.fp = s, (nt.test(r) || c) && (d.e = 0), this._pt = d, d
        },
        qe = function (t, e, n, r, i, u, s, o, a) {
            V(r) && (r = r(i || 0, t, u));
            var l, h = t[e],
                f = "get" !== n ? n : V(h) ? a ? t[e.indexOf("set") || !V(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](a) : t[e]() : h,
                p = V(h) ? a ? nn : en : tn;
            if (j(r) && (~r.indexOf("random(") && (r = De(r)), "=" === r.charAt(1) && ((l = parseFloat(f) + parseFloat(r.substr(2)) * ("-" === r.charAt(0) ? -1 : 1) + (re(f) || 0)) || 0 === l) && (r = l)), f !== r) return isNaN(f * r) || "" === r ? (!h && !(e in t) && at(e, r), We.call(this, t, e, f, r, p, o || B.stringFilter, a)) : (l = new Dn(this._pt, t, e, +f || 0, r - (f || 0), "boolean" == typeof h ? on : sn, 0, p), a && (l.fp = a), s && l.modifier(s, this, t), this._pt = l)
        },
        Ge = function (t, e, n, r, i, u) {
            var s, o, a, l;
            if (dt[t] && !1 !== (s = new dt[t]).init(i, s.rawVars ? e[t] : function (t, e, n, r, i) {
                    if (V(t) && (t = Ke(t, i, e, n, r)), !q(t) || t.style && t.nodeType || Z(t) || K(t)) return j(t) ? Ke(t, i, e, n, r) : t;
                    var u, s = {};
                    for (u in t) s[u] = Ke(t[u], i, e, n, r);
                    return s
                }(e[t], r, i, u, n), n, r, u) && (n._pt = o = new Dn(n._pt, i, t, 0, 1, s.render, s, 0, s.priority), n !== p))
                for (a = n._ptLookup[n._targets.indexOf(i)], l = s._props.length; l--;) a[s._props[l]] = o;
            return s
        },
        He = function t(e, n) {
            var r, i, o, a, l, h, f, p, c, D, d, g, _, m = e.vars,
                v = m.ease,
                y = m.startAt,
                C = m.immediateRender,
                x = m.lazy,
                F = m.onUpdate,
                w = m.onUpdateParams,
                E = m.callbackScope,
                T = m.runBackwards,
                b = m.yoyoEase,
                A = m.keyframes,
                M = m.autoRevert,
                O = e._dur,
                P = e._startAt,
                S = e._targets,
                B = e.parent,
                N = B && "nested" === B.data ? B.parent._targets : S,
                R = "auto" === e._overwrite && !u,
                I = e.timeline;
            if (I && (!A || !v) && (v = "none"), e._ease = Ne(v, k.ease), e._yEase = b ? ke(Ne(!0 === b ? v : b, k.ease)) : 0, b && e._yoyo && !e._repeat && (b = e._yEase, e._yEase = e._ease, e._ease = b), e._from = !I && !!m.runBackwards, !I || A && !m.stagger) {
                if (g = (p = S[0] ? Ct(S[0]).harness : 0) && m[p.prop], r = kt(m, pt), P && Rt(P.render(-1, !0)), y)
                    if (Rt(e._startAt = Je.set(S, Pt({
                            data: "isStart",
                            overwrite: !1,
                            parent: B,
                            immediateRender: !0,
                            lazy: G(x),
                            startAt: null,
                            delay: 0,
                            onUpdate: F,
                            onUpdateParams: w,
                            callbackScope: E,
                            stagger: 0
                        }, y))), n < 0 && !C && !M && e._startAt.render(-1, !0), C) {
                        if (n > 0 && !M && (e._startAt = 0), O && n <= 0) return void(n && (e._zTime = n))
                    } else !1 === M && (e._startAt = 0);
                else if (T && O)
                    if (P) !M && (e._startAt = 0);
                    else if (n && (C = !1), o = Pt({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: C && G(x),
                        immediateRender: C,
                        stagger: 0,
                        parent: B
                    }, r), g && (o[p.prop] = g), Rt(e._startAt = Je.set(S, o)), n < 0 && e._startAt.render(-1, !0), e._zTime = n, C) {
                    if (!n) return
                } else t(e._startAt, 1e-8);
                for (e._pt = 0, x = O && G(x) || x && !O, i = 0; i < S.length; i++) {
                    if (f = (l = S[i])._gsap || yt(S)[i]._gsap, e._ptLookup[i] = D = {}, Dt[f.id] && ct.length && bt(), d = N === S ? i : N.indexOf(l), p && !1 !== (c = new p).init(l, g || r, e, d, N) && (e._pt = a = new Dn(e._pt, l, c.name, 0, 1, c.render, c, 0, c.priority), c._props.forEach((function (t) {
                            D[t] = a
                        })), c.priority && (h = 1)), !p || g)
                        for (o in r) dt[o] && (c = Ge(o, r, e, d, l, N)) ? c.priority && (h = 1) : D[o] = a = qe.call(e, l, o, "get", r[o], d, N, 0, m.stringFilter);
                    e._op && e._op[i] && e.kill(l, e._op[i]), R && e._pt && (Ue = e, s.killTweensOf(l, D, e.globalTime(n)), _ = !e.parent, Ue = 0), e._pt && x && (Dt[f.id] = 1)
                }
                h && cn(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = F, e._initted = (!e._op || e._pt) && !_, A && n <= 0 && I.render(L, !0, !0)
        },
        Qe = function (t, e, n, r) {
            var i, u, s = e.ease || r || "power1.inOut";
            if (Z(e)) u = n[t] || (n[t] = []), e.forEach((function (t, n) {
                return u.push({
                    t: n / (e.length - 1) * 100,
                    v: t,
                    e: s
                })
            }));
            else
                for (i in e) u = n[i] || (n[i] = []), "ease" === i || u.push({
                    t: parseFloat(t),
                    v: e[i],
                    e: s
                })
        },
        Ke = function (t, e, n, r, i) {
            return V(t) ? t.call(e, n, r, i) : j(t) && ~t.indexOf("random(") ? De(t) : t
        },
        Ze = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        $e = {};
    Ft(Ze + ",id,stagger,delay,duration,paused,scrollTrigger", (function (t) {
        return $e[t] = 1
    }));
    var Je = function (t) {
        function e(e, n, i, o) {
            var a;
            "number" == typeof n && (i.duration = n, n = i, i = null);
            var l, h, f, p, c, D, d, g, _ = (a = t.call(this, o ? n : Lt(n)) || this).vars,
                m = _.duration,
                v = _.delay,
                y = _.immediateRender,
                C = _.stagger,
                x = _.overwrite,
                F = _.keyframes,
                w = _.defaults,
                E = _.scrollTrigger,
                T = _.yoyoEase,
                b = n.parent || s,
                A = (Z(e) || K(e) ? U(e[0]) : "length" in n) ? [e] : oe(e);
            if (a._targets = A.length ? yt(A) : lt("GSAP target " + e + " not found. https://greensock.com", !B.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = x, F || C || Q(m) || Q(v)) {
                if (n = a.vars, (l = a.timeline = new Ve({
                        data: "nested",
                        defaults: w || {}
                    })).kill(), l.parent = l._dp = r(a), l._start = 0, C || Q(m) || Q(v)) {
                    if (p = A.length, d = C && le(C), q(C))
                        for (c in C) ~Ze.indexOf(c) && (g || (g = {}), g[c] = C[c]);
                    for (h = 0; h < p; h++)(f = kt(n, $e)).stagger = 0, T && (f.yoyoEase = T), g && St(f, g), D = A[h], f.duration = +Ke(m, r(a), h, D, A), f.delay = (+Ke(v, r(a), h, D, A) || 0) - a._delay, !C && 1 === p && f.delay && (a._delay = v = f.delay, a._start += v, f.delay = 0), l.to(D, f, d ? d(h, D, A) : 0), l._ease = Oe.none;
                    l.duration() ? m = v = 0 : a.timeline = 0
                } else if (F) {
                    Lt(Pt(l.vars.defaults, {
                        ease: "none"
                    })), l._ease = Ne(F.ease || n.ease || "none");
                    var M, O, P, S = 0;
                    if (Z(F)) F.forEach((function (t) {
                        return l.to(A, t, ">")
                    }));
                    else {
                        for (c in f = {}, F) "ease" === c || "easeEach" === c || Qe(c, F[c], f, F.easeEach);
                        for (c in f)
                            for (M = f[c].sort((function (t, e) {
                                    return t.t - e.t
                                })), S = 0, h = 0; h < M.length; h++)(P = {
                                ease: (O = M[h]).e,
                                duration: (O.t - (h ? M[h - 1].t : 0)) / 100 * m
                            })[c] = O.v, l.to(A, P, S), S += P.duration;
                        l.duration() < m && l.to({}, {
                            duration: m - l.duration()
                        })
                    }
                }
                m || a.duration(m = l.duration())
            } else a.timeline = 0;
            return !0 !== x || u || (Ue = r(a), s.killTweensOf(A), Ue = 0), qt(b, r(a), i), n.reversed && a.reverse(), n.paused && a.paused(!0), (y || !m && !F && a._start === Et(b._time) && G(y) && function t(e) {
                return !e || e._ts && t(e.parent)
            }(r(a)) && "nested" !== b.data) && (a._tTime = -1e-8, a.render(Math.max(0, -v))), E && Gt(r(a), E), a
        }
        i(e, t);
        var n = e.prototype;
        return n.render = function (t, e, n) {
            var r, i, u, s, o, a, l, h, f, p = this._time,
                c = this._tDur,
                D = this._dur,
                d = t > c - 1e-8 && t >= 0 ? c : t < 1e-8 ? 0 : t;
            if (D) {
                if (d !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if (r = d, h = this.timeline, this._repeat) {
                        if (s = D + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, n);
                        if (r = Et(d % s), d === c ? (u = this._repeat, r = D) : ((u = ~~(d / s)) && u === d / s && (r = D, u--), r > D && (r = D)), (a = this._yoyo && 1 & u) && (f = this._yEase, r = D - r), o = Xt(this._tTime, s), r === p && !n && this._initted) return this;
                        u !== o && (h && this._yEase && Le(h, a), !this.vars.repeatRefresh || a || this._lock || (this._lock = n = 1, this.render(Et(s * u), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Ht(this, t < 0 ? t : r, n, e)) return this._tTime = 0, this;
                        if (D !== this._dur) return this.render(t, e, n)
                    }
                    if (this._tTime = d, this._time = r, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = l = (f || this._ease)(r / D), this._from && (this.ratio = l = 1 - l), r && !p && !e && (_e(this, "onStart"), this._tTime !== d)) return this;
                    for (i = this._pt; i;) i.r(l, i.d), i = i._next;
                    h && h.render(t < 0 ? t : !r && a ? -1e-8 : h._dur * h._ease(r / this._dur), e, n) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n), _e(this, "onUpdate")), this._repeat && u !== o && this.vars.onRepeat && !e && this.parent && _e(this, "onRepeat"), d !== this._tDur && d || this._tTime !== d || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !D) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Rt(this, 1), e || t < 0 && !p || !d && !p || (_e(this, d === c ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < c && this.timeScale() > 0) && this._prom()))
                }
            } else ! function (t, e, n, r) {
                var i, u, s, o = t.ratio,
                    a = e < 0 || !e && (!t._start && function t(e) {
                        var n = e.parent;
                        return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
                    }(t) && (t._initted || !Qt(t)) || (t._ts < 0 || t._dp._ts < 0) && !Qt(t)) ? 0 : 1,
                    l = t._rDelay,
                    h = 0;
                if (l && t._repeat && (h = ne(0, t._tDur, e), u = Xt(h, l), t._yoyo && 1 & u && (a = 1 - a), u !== Xt(t._tTime, l) && (o = 1 - a, t.vars.repeatRefresh && t._initted && t.invalidate())), a !== o || r || 1e-8 === t._zTime || !e && t._zTime) {
                    if (!t._initted && Ht(t, e, r, n)) return;
                    for (s = t._zTime, t._zTime = e || (n ? 1e-8 : 0), n || (n = e && !s), t.ratio = a, t._from && (a = 1 - a), t._time = 0, t._tTime = h, i = t._pt; i;) i.r(a, i.d), i = i._next;
                    t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !n && _e(t, "onUpdate"), h && t._repeat && !n && t.parent && _e(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === a && (a && Rt(t, 1), n || (_e(t, a ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, n);
            return this
        }, n.targets = function () {
            return this._targets
        }, n.invalidate = function () {
            return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
        }, n.kill = function (t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? me(this) : this;
            if (this.timeline) {
                var n = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Ue && !0 !== Ue.vars.overwrite)._first || me(this), this.parent && n !== this.timeline.totalDuration() && Kt(this, this._dur * this.timeline._tDur / n, 0, 1), this
            }
            var r, i, u, s, o, a, l, h = this._targets,
                f = t ? oe(t) : h,
                p = this._ptLookup,
                c = this._pt;
            if ((!e || "all" === e) && function (t, e) {
                    for (var n = t.length, r = n === e.length; r && n-- && t[n] === e[n];);
                    return n < 0
                }(h, f)) return "all" === e && (this._pt = 0), me(this);
            for (r = this._op = this._op || [], "all" !== e && (j(e) && (o = {}, Ft(e, (function (t) {
                    return o[t] = 1
                })), e = o), e = function (t, e) {
                    var n, r, i, u, s = t[0] ? Ct(t[0]).harness : 0,
                        o = s && s.aliases;
                    if (!o) return e;
                    for (r in n = St({}, e), o)
                        if (r in n)
                            for (i = (u = o[r].split(",")).length; i--;) n[u[i]] = n[r];
                    return n
                }(h, e)), l = h.length; l--;)
                if (~f.indexOf(h[l]))
                    for (o in i = p[l], "all" === e ? (r[l] = e, s = i, u = {}) : (u = r[l] = r[l] || {}, s = e), s)(a = i && i[o]) && ("kill" in a.d && !0 !== a.d.kill(o) || Nt(this, a, "_pt"), delete i[o]), "all" !== u && (u[o] = 1);
            return this._initted && !this._pt && c && me(this), this
        }, e.to = function (t, n) {
            return new e(t, n, arguments[2])
        }, e.from = function (t, e) {
            return te(1, arguments)
        }, e.delayedCall = function (t, n, r, i) {
            return new e(n, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: n,
                onReverseComplete: n,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }, e.fromTo = function (t, e, n) {
            return te(2, arguments)
        }, e.set = function (t, n) {
            return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(t, n)
        }, e.killTweensOf = function (t, e, n) {
            return s.killTweensOf(t, e, n)
        }, e
    }(je);
    Pt(Je.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), Ft("staggerTo,staggerFrom,staggerFromTo", (function (t) {
        Je[t] = function () {
            var e = new Ve,
                n = ie.call(arguments, 0);
            return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, n)
        }
    }));
    var tn = function (t, e, n) {
            return t[e] = n
        },
        en = function (t, e, n) {
            return t[e](n)
        },
        nn = function (t, e, n, r) {
            return t[e](r.fp, n)
        },
        rn = function (t, e, n) {
            return t.setAttribute(e, n)
        },
        un = function (t, e) {
            return V(t[e]) ? en : W(t[e]) && t.setAttribute ? rn : tn
        },
        sn = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        on = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        an = function (t, e) {
            var n = e._pt,
                r = "";
            if (!t && e.b) r = e.b;
            else if (1 === t && e.e) r = e.e;
            else {
                for (; n;) r = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + r, n = n._next;
                r += e.c
            }
            e.set(e.t, e.p, r, e)
        },
        ln = function (t, e) {
            for (var n = e._pt; n;) n.r(t, n.d), n = n._next
        },
        hn = function (t, e, n, r) {
            for (var i, u = this._pt; u;) i = u._next, u.p === r && u.modifier(t, e, n), u = i
        },
        fn = function (t) {
            for (var e, n, r = this._pt; r;) n = r._next, r.p === t && !r.op || r.op === t ? Nt(this, r, "_pt") : r.dep || (e = 1), r = n;
            return !e
        },
        pn = function (t, e, n, r) {
            r.mSet(t, e, r.m.call(r.tween, n, r.mt), r)
        },
        cn = function (t) {
            for (var e, n, r, i, u = t._pt; u;) {
                for (e = u._next, n = r; n && n.pr > u.pr;) n = n._next;
                (u._prev = n ? n._prev : i) ? u._prev._next = u: r = u, (u._next = n) ? n._prev = u : i = u, u = e
            }
            t._pt = r
        },
        Dn = function () {
            function t(t, e, n, r, i, u, s, o, a) {
                this.t = e, this.s = r, this.c = i, this.p = n, this.r = u || sn, this.d = s || this, this.set = o || tn, this.pr = a || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function (t, e, n) {
                this.mSet = this.mSet || this.set, this.set = pn, this.m = t, this.mt = n, this.tween = e
            }, t
        }();
    Ft(vt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
        return pt[t] = 1
    })), ut.TweenMax = ut.TweenLite = Je, ut.TimelineLite = ut.TimelineMax = Ve, s = new Ve({
        sortChildren: !1,
        defaults: k,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), B.stringFilter = be;
    var dn = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            e.forEach((function (t) {
                return ve(t)
            }))
        },
        timeline: function (t) {
            return new Ve(t)
        },
        getTweensOf: function (t, e) {
            return s.getTweensOf(t, e)
        },
        getProperty: function (t, e, n, r) {
            j(t) && (t = oe(t)[0]);
            var i = Ct(t || {}).get,
                u = n ? Ot : Mt;
            return "native" === n && (n = ""), t ? e ? u((dt[e] && dt[e].get || i)(t, e, n, r)) : function (e, n, r) {
                return u((dt[e] && dt[e].get || i)(t, e, n, r))
            } : t
        },
        quickSetter: function (t, e, n) {
            if ((t = oe(t)).length > 1) {
                var r = t.map((function (t) {
                        return mn.quickSetter(t, e, n)
                    })),
                    i = r.length;
                return function (t) {
                    for (var e = i; e--;) r[e](t)
                }
            }
            t = t[0] || {};
            var u = dt[e],
                s = Ct(t),
                o = s.harness && (s.harness.aliases || {})[e] || e,
                a = u ? function (e) {
                    var r = new u;
                    p._pt = 0, r.init(t, n ? e + n : e, p, 0, [t]), r.render(1, r), p._pt && ln(1, p)
                } : s.set(t, o);
            return u ? a : function (e) {
                return a(t, o, n ? e + n : e, s, 1)
            }
        },
        isTweening: function (t) {
            return s.getTweensOf(t, !0).length > 0
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = Ne(t.ease, k.ease)), Bt(k, t || {})
        },
        config: function (t) {
            return Bt(B, t || {})
        },
        registerEffect: function (t) {
            var e = t.name,
                n = t.effect,
                r = t.plugins,
                i = t.defaults,
                u = t.extendTimeline;
            (r || "").split(",").forEach((function (t) {
                return t && !dt[t] && !ut[t] && lt(e + " effect requires " + t + " plugin.")
            })), gt[e] = function (t, e, r) {
                return n(oe(t), Pt(e || {}, i), r)
            }, u && (Ve.prototype[e] = function (t, n, r) {
                return this.add(gt[e](t, q(n) ? n : (r = n) && {}, this), r)
            })
        },
        registerEase: function (t, e) {
            Oe[t] = Ne(e)
        },
        parseEase: function (t, e) {
            return arguments.length ? Ne(t, e) : Oe
        },
        getById: function (t) {
            return s.getById(t)
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var n, r, i = new Ve(t);
            for (i.smoothChildTiming = G(t.smoothChildTiming), s.remove(i), i._dp = 0, i._time = i._tTime = s._time, n = s._first; n;) r = n._next, !e && !n._dur && n instanceof Je && n.vars.onComplete === n._targets[0] || qt(i, n, n._start - n._delay), n = r;
            return qt(s, i, 0), i
        },
        utils: {
            wrap: function t(e, n, r) {
                var i = n - e;
                return Z(e) ? ce(e, t(0, e.length), n) : ee(r, (function (t) {
                    return (i + (t - e) % i) % i + e
                }))
            },
            wrapYoyo: function t(e, n, r) {
                var i = n - e,
                    u = 2 * i;
                return Z(e) ? ce(e, t(0, e.length - 1), n) : ee(r, (function (t) {
                    return e + ((t = (u + (t - e) % u) % u || 0) > i ? u - t : t)
                }))
            },
            distribute: le,
            random: pe,
            snap: fe,
            normalize: function (t, e, n) {
                return de(t, e, 0, 1, n)
            },
            getUnit: re,
            clamp: function (t, e, n) {
                return ee(n, (function (n) {
                    return ne(t, e, n)
                }))
            },
            splitColor: xe,
            toArray: oe,
            selector: function (t) {
                return t = oe(t)[0] || lt("Invalid scope") || {},
                    function (e) {
                        var n = t.current || t.nativeElement || t;
                        return oe(e, n.querySelectorAll ? n : n === t ? lt("Invalid scope") || l.createElement("div") : t)
                    }
            },
            mapRange: de,
            pipe: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                return function (t) {
                    return e.reduce((function (t, e) {
                        return e(t)
                    }), t)
                }
            },
            unitize: function (t, e) {
                return function (n) {
                    return t(parseFloat(n)) + (e || re(n))
                }
            },
            interpolate: function t(e, n, r, i) {
                var u = isNaN(e + n) ? 0 : function (t) {
                    return (1 - t) * e + t * n
                };
                if (!u) {
                    var s, o, a, l, h, f = j(e),
                        p = {};
                    if (!0 === r && (i = 1) && (r = null), f) e = {
                        p: e
                    }, n = {
                        p: n
                    };
                    else if (Z(e) && !Z(n)) {
                        for (a = [], l = e.length, h = l - 2, o = 1; o < l; o++) a.push(t(e[o - 1], e[o]));
                        l--, u = function (t) {
                            t *= l;
                            var e = Math.min(h, ~~t);
                            return a[e](t - e)
                        }, r = n
                    } else i || (e = St(Z(e) ? [] : {}, e));
                    if (!a) {
                        for (s in n) qe.call(p, e, s, "get", n[s]);
                        u = function (t) {
                            return ln(t, p) || (f ? e.p : e)
                        }
                    }
                }
                return ee(r, u)
            },
            shuffle: ae
        },
        install: ot,
        effects: gt,
        ticker: Ae,
        updateRoot: Ve.updateRoot,
        plugins: dt,
        globalTimeline: s,
        core: {
            PropTween: Dn,
            globals: ht,
            Tween: Je,
            Timeline: Ve,
            Animation: je,
            getCache: Ct,
            _removeLinkedListItem: Nt,
            suppressOverwrites: function (t) {
                return u = t
            }
        }
    };
    Ft("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
        return dn[t] = Je[t]
    })), Ae.add(Ve.updateRoot), p = dn.to({}, {
        duration: 0
    });
    var gn = function (t, e) {
            for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;) n = n._next;
            return n
        },
        _n = function (t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function (t, n, r) {
                    r._onInit = function (t) {
                        var r, i;
                        if (j(n) && (r = {}, Ft(n, (function (t) {
                                return r[t] = 1
                            })), n = r), e) {
                            for (i in r = {}, n) r[i] = e(n[i]);
                            n = r
                        }! function (t, e) {
                            var n, r, i, u = t._targets;
                            for (n in e)
                                for (r = u.length; r--;)(i = t._ptLookup[r][n]) && (i = i.d) && (i._pt && (i = gn(i, n)), i && i.modifier && i.modifier(e[n], t, u[r], n))
                        }(t, n)
                    }
                }
            }
        },
        mn = dn.registerPlugin({
            name: "attr",
            init: function (t, e, n, r, i) {
                var u, s;
                for (u in e)(s = this.add(t, "setAttribute", (t.getAttribute(u) || 0) + "", e[u], r, i, 0, 0, u)) && (s.op = u), this._props.push(u)
            }
        }, {
            name: "endArray",
            init: function (t, e) {
                for (var n = e.length; n--;) this.add(t, n, t[n] || 0, e[n])
            }
        }, _n("roundProps", he), _n("modifiers"), _n("snap", fe)) || dn;
    Je.version = Ve.version = mn.version = "3.9.0", h = 1, H() && Me();
    Oe.Power0, Oe.Power1, Oe.Power2, Oe.Power3, Oe.Power4, Oe.Linear, Oe.Quad, Oe.Cubic, Oe.Quart, Oe.Quint, Oe.Strong, Oe.Elastic, Oe.Back, Oe.SteppedEase, Oe.Bounce, Oe.Sine, Oe.Expo, Oe.Circ;
    /*!
     * CSSPlugin 3.9.0
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var vn, yn, Cn, xn, Fn, wn, En, Tn = {},
        bn = 180 / Math.PI,
        An = Math.PI / 180,
        Mn = Math.atan2,
        On = /([A-Z])/g,
        Pn = /(?:left|right|width|margin|padding|x)/i,
        Sn = /[\s,\(]\S/,
        Bn = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        kn = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Ln = function (t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        Nn = function (t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        Rn = function (t, e) {
            var n = e.s + e.c * t;
            e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
        },
        In = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        zn = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        Yn = function (t, e, n) {
            return t.style[e] = n
        },
        Xn = function (t, e, n) {
            return t.style.setProperty(e, n)
        },
        jn = function (t, e, n) {
            return t._gsap[e] = n
        },
        Vn = function (t, e, n) {
            return t._gsap.scaleX = t._gsap.scaleY = n
        },
        Un = function (t, e, n, r, i) {
            var u = t._gsap;
            u.scaleX = u.scaleY = n, u.renderTransform(i, u)
        },
        Wn = function (t, e, n, r, i) {
            var u = t._gsap;
            u[e] = n, u.renderTransform(i, u)
        },
        qn = "transform",
        Gn = qn + "Origin",
        Hn = function (t, e) {
            var n = yn.createElementNS ? yn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : yn.createElement(t);
            return n.style ? n : yn.createElement(t)
        },
        Qn = function t(e, n, r) {
            var i = getComputedStyle(e);
            return i[n] || i.getPropertyValue(n.replace(On, "-$1").toLowerCase()) || i.getPropertyValue(n) || !r && t(e, Zn(n) || n, 1) || ""
        },
        Kn = "O,Moz,ms,Ms,Webkit".split(","),
        Zn = function (t, e, n) {
            var r = (e || Fn).style,
                i = 5;
            if (t in r && !n) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); i-- && !(Kn[i] + t in r););
            return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? Kn[i] : "") + t
        },
        $n = function () {
            "undefined" != typeof window && window.document && (vn = window, yn = vn.document, Cn = yn.documentElement, Fn = Hn("div") || {
                style: {}
            }, Hn("div"), qn = Zn(qn), Gn = qn + "Origin", Fn.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", En = !!Zn("perspective"), xn = 1)
        },
        Jn = function t(e) {
            var n, r = Hn("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                i = this.parentNode,
                u = this.nextSibling,
                s = this.style.cssText;
            if (Cn.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
                n = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {} else this._gsapBBox && (n = this._gsapBBox());
            return i && (u ? i.insertBefore(this, u) : i.appendChild(this)), Cn.removeChild(r), this.style.cssText = s, n
        },
        tr = function (t, e) {
            for (var n = e.length; n--;)
                if (t.hasAttribute(e[n])) return t.getAttribute(e[n])
        },
        er = function (t) {
            var e;
            try {
                e = t.getBBox()
            } catch (n) {
                e = Jn.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === Jn || (e = Jn.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +tr(t, ["x", "cx", "x1"]) || 0,
                y: +tr(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        nr = function (t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !er(t))
        },
        rr = function (t, e) {
            if (e) {
                var n = t.style;
                e in Tn && e !== Gn && (e = qn), n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), n.removeProperty(e.replace(On, "-$1").toLowerCase())) : n.removeAttribute(e)
            }
        },
        ir = function (t, e, n, r, i, u) {
            var s = new Dn(t._pt, e, n, 0, 1, u ? zn : In);
            return t._pt = s, s.b = r, s.e = i, t._props.push(n), s
        },
        ur = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        sr = function t(e, n, r, i) {
            var u, s, o, a, l = parseFloat(r) || 0,
                h = (r + "").trim().substr((l + "").length) || "px",
                f = Fn.style,
                p = Pn.test(n),
                c = "svg" === e.tagName.toLowerCase(),
                D = (c ? "client" : "offset") + (p ? "Width" : "Height"),
                d = "px" === i,
                g = "%" === i;
            return i === h || !l || ur[i] || ur[h] ? l : ("px" !== h && !d && (l = t(e, n, r, "px")), a = e.getCTM && nr(e), !g && "%" !== h || !Tn[n] && !~n.indexOf("adius") ? (f[p ? "width" : "height"] = 100 + (d ? h : i), s = ~n.indexOf("adius") || "em" === i && e.appendChild && !c ? e : e.parentNode, a && (s = (e.ownerSVGElement || {}).parentNode), s && s !== yn && s.appendChild || (s = yn.body), (o = s._gsap) && g && o.width && p && o.time === Ae.time ? wt(l / o.width * 100) : ((g || "%" === h) && (f.position = Qn(e, "position")), s === e && (f.position = "static"), s.appendChild(Fn), u = Fn[D], s.removeChild(Fn), f.position = "absolute", p && g && ((o = Ct(s)).time = Ae.time, o.width = s[D]), wt(d ? u * l / 100 : u && l ? 100 / u * l : 0))) : (u = a ? e.getBBox()[p ? "width" : "height"] : e[D], wt(g ? l / u * 100 : l / 100 * u)))
        },
        or = function (t, e, n, r) {
            var i;
            return xn || $n(), e in Bn && "transform" !== e && ~(e = Bn[e]).indexOf(",") && (e = e.split(",")[0]), Tn[e] && "transform" !== e ? (i = mr(t, r), i = "transformOrigin" !== e ? i[e] : i.svg ? i.origin : vr(Qn(t, Gn)) + " " + i.zOrigin + "px") : (!(i = t.style[e]) || "auto" === i || r || ~(i + "").indexOf("calc(")) && (i = fr[e] && fr[e](t, e, n) || Qn(t, e) || xt(t, e) || ("opacity" === e ? 1 : 0)), n && !~(i + "").trim().indexOf(" ") ? sr(t, e, i, n) + n : i
        },
        ar = function (t, e, n, r) {
            if (!n || "none" === n) {
                var i = Zn(e, t, 1),
                    u = i && Qn(t, i, 1);
                u && u !== n ? (e = i, n = u) : "borderColor" === e && (n = Qn(t, "borderTopColor"))
            }
            var s, o, a, l, h, f, p, c, D, d, g, _, m = new Dn(this._pt, t.style, e, 0, 1, an),
                v = 0,
                y = 0;
            if (m.b = n, m.e = r, n += "", "auto" === (r += "") && (t.style[e] = r, r = Qn(t, e) || r, t.style[e] = n), be(s = [n, r]), r = s[1], a = (n = s[0]).match(tt) || [], (r.match(tt) || []).length) {
                for (; o = tt.exec(r);) p = o[0], D = r.substring(v, o.index), h ? h = (h + 1) % 5 : "rgba(" !== D.substr(-5) && "hsla(" !== D.substr(-5) || (h = 1), p !== (f = a[y++] || "") && (l = parseFloat(f) || 0, g = f.substr((l + "").length), (_ = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)), c = parseFloat(p), d = p.substr((c + "").length), v = tt.lastIndex - d.length, d || (d = d || B.units[e] || g, v === r.length && (r += d, m.e += d)), g !== d && (l = sr(t, e, f, d) || 0), m._pt = {
                    _next: m._pt,
                    p: D || 1 === y ? D : ",",
                    s: l,
                    c: _ ? _ * c : c - l,
                    m: h && h < 4 || "zIndex" === e ? Math.round : 0
                });
                m.c = v < r.length ? r.substring(v, r.length) : ""
            } else m.r = "display" === e && "none" === r ? zn : In;
            return nt.test(r) && (m.e = 0), this._pt = m, m
        },
        lr = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        hr = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var n, r, i, u = e.t,
                    s = u.style,
                    o = e.u,
                    a = u._gsap;
                if ("all" === o || !0 === o) s.cssText = "", r = 1;
                else
                    for (i = (o = o.split(",")).length; --i > -1;) n = o[i], Tn[n] && (r = 1, n = "transformOrigin" === n ? Gn : qn), rr(u, n);
                r && (rr(u, qn), a && (a.svg && u.removeAttribute("transform"), mr(u, 1), a.uncache = 1))
            }
        },
        fr = {
            clearProps: function (t, e, n, r, i) {
                if ("isFromStart" !== i.data) {
                    var u = t._pt = new Dn(t._pt, e, n, 0, 0, hr);
                    return u.u = r, u.pr = -10, u.tween = i, t._props.push(n), 1
                }
            }
        },
        pr = [1, 0, 0, 1, 0, 0],
        cr = {},
        Dr = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        dr = function (t) {
            var e = Qn(t, qn);
            return Dr(e) ? pr : e.substr(7).match(J).map(wt)
        },
        gr = function (t, e) {
            var n, r, i, u, s = t._gsap || Ct(t),
                o = t.style,
                a = dr(t);
            return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (a = [(i = t.transform.baseVal.consolidate().matrix).a, i.b, i.c, i.d, i.e, i.f]).join(",") ? pr : a : (a !== pr || t.offsetParent || t === Cn || s.svg || (i = o.display, o.display = "block", (n = t.parentNode) && t.offsetParent || (u = 1, r = t.nextSibling, Cn.appendChild(t)), a = dr(t), i ? o.display = i : rr(t, "display"), u && (r ? n.insertBefore(t, r) : n ? n.appendChild(t) : Cn.removeChild(t))), e && a.length > 6 ? [a[0], a[1], a[4], a[5], a[12], a[13]] : a)
        },
        _r = function (t, e, n, r, i, u) {
            var s, o, a, l = t._gsap,
                h = i || gr(t, !0),
                f = l.xOrigin || 0,
                p = l.yOrigin || 0,
                c = l.xOffset || 0,
                D = l.yOffset || 0,
                d = h[0],
                g = h[1],
                _ = h[2],
                m = h[3],
                v = h[4],
                y = h[5],
                C = e.split(" "),
                x = parseFloat(C[0]) || 0,
                F = parseFloat(C[1]) || 0;
            n ? h !== pr && (o = d * m - g * _) && (a = x * (-g / o) + F * (d / o) - (d * y - g * v) / o, x = x * (m / o) + F * (-_ / o) + (_ * y - m * v) / o, F = a) : (x = (s = er(t)).x + (~C[0].indexOf("%") ? x / 100 * s.width : x), F = s.y + (~(C[1] || C[0]).indexOf("%") ? F / 100 * s.height : F)), r || !1 !== r && l.smooth ? (v = x - f, y = F - p, l.xOffset = c + (v * d + y * _) - v, l.yOffset = D + (v * g + y * m) - y) : l.xOffset = l.yOffset = 0, l.xOrigin = x, l.yOrigin = F, l.smooth = !!r, l.origin = e, l.originIsAbsolute = !!n, t.style[Gn] = "0px 0px", u && (ir(u, l, "xOrigin", f, x), ir(u, l, "yOrigin", p, F), ir(u, l, "xOffset", c, l.xOffset), ir(u, l, "yOffset", D, l.yOffset)), t.setAttribute("data-svg-origin", x + " " + F)
        },
        mr = function (t, e) {
            var n = t._gsap || new Xe(t);
            if ("x" in n && !e && !n.uncache) return n;
            var r, i, u, s, o, a, l, h, f, p, c, D, d, g, _, m, v, y, C, x, F, w, E, T, b, A, M, O, P, S, k, L, N = t.style,
                R = n.scaleX < 0,
                I = Qn(t, Gn) || "0";
            return r = i = u = a = l = h = f = p = c = 0, s = o = 1, n.svg = !(!t.getCTM || !nr(t)), g = gr(t, n.svg), n.svg && (T = (!n.uncache || "0px 0px" === I) && !e && t.getAttribute("data-svg-origin"), _r(t, T || I, !!T || n.originIsAbsolute, !1 !== n.smooth, g)), D = n.xOrigin || 0, d = n.yOrigin || 0, g !== pr && (y = g[0], C = g[1], x = g[2], F = g[3], r = w = g[4], i = E = g[5], 6 === g.length ? (s = Math.sqrt(y * y + C * C), o = Math.sqrt(F * F + x * x), a = y || C ? Mn(C, y) * bn : 0, (f = x || F ? Mn(x, F) * bn + a : 0) && (o *= Math.abs(Math.cos(f * An))), n.svg && (r -= D - (D * y + d * x), i -= d - (D * C + d * F))) : (L = g[6], S = g[7], M = g[8], O = g[9], P = g[10], k = g[11], r = g[12], i = g[13], u = g[14], l = (_ = Mn(L, P)) * bn, _ && (T = w * (m = Math.cos(-_)) + M * (v = Math.sin(-_)), b = E * m + O * v, A = L * m + P * v, M = w * -v + M * m, O = E * -v + O * m, P = L * -v + P * m, k = S * -v + k * m, w = T, E = b, L = A), h = (_ = Mn(-x, P)) * bn, _ && (m = Math.cos(-_), k = F * (v = Math.sin(-_)) + k * m, y = T = y * m - M * v, C = b = C * m - O * v, x = A = x * m - P * v), a = (_ = Mn(C, y)) * bn, _ && (T = y * (m = Math.cos(_)) + C * (v = Math.sin(_)), b = w * m + E * v, C = C * m - y * v, E = E * m - w * v, y = T, w = b), l && Math.abs(l) + Math.abs(a) > 359.9 && (l = a = 0, h = 180 - h), s = wt(Math.sqrt(y * y + C * C + x * x)), o = wt(Math.sqrt(E * E + L * L)), _ = Mn(w, E), f = Math.abs(_) > 2e-4 ? _ * bn : 0, c = k ? 1 / (k < 0 ? -k : k) : 0), n.svg && (T = t.getAttribute("transform"), n.forceCSS = t.setAttribute("transform", "") || !Dr(Qn(t, qn)), T && t.setAttribute("transform", T))), Math.abs(f) > 90 && Math.abs(f) < 270 && (R ? (s *= -1, f += a <= 0 ? 180 : -180, a += a <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), n.x = r - ((n.xPercent = r && (n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + "px", n.y = i - ((n.yPercent = i && (n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + "px", n.z = u + "px", n.scaleX = wt(s), n.scaleY = wt(o), n.rotation = wt(a) + "deg", n.rotationX = wt(l) + "deg", n.rotationY = wt(h) + "deg", n.skewX = f + "deg", n.skewY = p + "deg", n.transformPerspective = c + "px", (n.zOrigin = parseFloat(I.split(" ")[2]) || 0) && (N[Gn] = vr(I)), n.xOffset = n.yOffset = 0, n.force3D = B.force3D, n.renderTransform = n.svg ? Fr : En ? xr : Cr, n.uncache = 0, n
        },
        vr = function (t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        yr = function (t, e, n) {
            var r = re(e);
            return wt(parseFloat(e) + parseFloat(sr(t, "x", n + "px", r))) + r
        },
        Cr = function (t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, xr(t, e)
        },
        xr = function (t, e) {
            var n = e || this,
                r = n.xPercent,
                i = n.yPercent,
                u = n.x,
                s = n.y,
                o = n.z,
                a = n.rotation,
                l = n.rotationY,
                h = n.rotationX,
                f = n.skewX,
                p = n.skewY,
                c = n.scaleX,
                D = n.scaleY,
                d = n.transformPerspective,
                g = n.force3D,
                _ = n.target,
                m = n.zOrigin,
                v = "",
                y = "auto" === g && t && 1 !== t || !0 === g;
            if (m && ("0deg" !== h || "0deg" !== l)) {
                var C, x = parseFloat(l) * An,
                    F = Math.sin(x),
                    w = Math.cos(x);
                x = parseFloat(h) * An, C = Math.cos(x), u = yr(_, u, F * C * -m), s = yr(_, s, -Math.sin(x) * -m), o = yr(_, o, w * C * -m + m)
            }
            "0px" !== d && (v += "perspective(" + d + ") "), (r || i) && (v += "translate(" + r + "%, " + i + "%) "), (y || "0px" !== u || "0px" !== s || "0px" !== o) && (v += "0px" !== o || y ? "translate3d(" + u + ", " + s + ", " + o + ") " : "translate(" + u + ", " + s + ") "), "0deg" !== a && (v += "rotate(" + a + ") "), "0deg" !== l && (v += "rotateY(" + l + ") "), "0deg" !== h && (v += "rotateX(" + h + ") "), "0deg" === f && "0deg" === p || (v += "skew(" + f + ", " + p + ") "), 1 === c && 1 === D || (v += "scale(" + c + ", " + D + ") "), _.style[qn] = v || "translate(0, 0)"
        },
        Fr = function (t, e) {
            var n, r, i, u, s, o = e || this,
                a = o.xPercent,
                l = o.yPercent,
                h = o.x,
                f = o.y,
                p = o.rotation,
                c = o.skewX,
                D = o.skewY,
                d = o.scaleX,
                g = o.scaleY,
                _ = o.target,
                m = o.xOrigin,
                v = o.yOrigin,
                y = o.xOffset,
                C = o.yOffset,
                x = o.forceCSS,
                F = parseFloat(h),
                w = parseFloat(f);
            p = parseFloat(p), c = parseFloat(c), (D = parseFloat(D)) && (c += D = parseFloat(D), p += D), p || c ? (p *= An, c *= An, n = Math.cos(p) * d, r = Math.sin(p) * d, i = Math.sin(p - c) * -g, u = Math.cos(p - c) * g, c && (D *= An, s = Math.tan(c - D), i *= s = Math.sqrt(1 + s * s), u *= s, D && (s = Math.tan(D), n *= s = Math.sqrt(1 + s * s), r *= s)), n = wt(n), r = wt(r), i = wt(i), u = wt(u)) : (n = d, u = g, r = i = 0), (F && !~(h + "").indexOf("px") || w && !~(f + "").indexOf("px")) && (F = sr(_, "x", h, "px"), w = sr(_, "y", f, "px")), (m || v || y || C) && (F = wt(F + m - (m * n + v * i) + y), w = wt(w + v - (m * r + v * u) + C)), (a || l) && (s = _.getBBox(), F = wt(F + a / 100 * s.width), w = wt(w + l / 100 * s.height)), s = "matrix(" + n + "," + r + "," + i + "," + u + "," + F + "," + w + ")", _.setAttribute("transform", s), x && (_.style[qn] = s)
        },
        wr = function (t, e, n, r, i, u) {
            var s, o, a = j(i),
                l = parseFloat(i) * (a && ~i.indexOf("rad") ? bn : 1),
                h = u ? l * u : l - r,
                f = r + h + "deg";
            return a && ("short" === (s = i.split("_")[1]) && (h %= 360) !== h % 180 && (h += h < 0 ? 360 : -360), "cw" === s && h < 0 ? h = (h + 36e9) % 360 - 360 * ~~(h / 360) : "ccw" === s && h > 0 && (h = (h - 36e9) % 360 - 360 * ~~(h / 360))), t._pt = o = new Dn(t._pt, e, n, r, h, Ln), o.e = f, o.u = "deg", t._props.push(n), o
        },
        Er = function (t, e) {
            for (var n in e) t[n] = e[n];
            return t
        },
        Tr = function (t, e, n) {
            var r, i, u, s, o, a, l, h = Er({}, n._gsap),
                f = n.style;
            for (i in h.svg ? (u = n.getAttribute("transform"), n.setAttribute("transform", ""), f[qn] = e, r = mr(n, 1), rr(n, qn), n.setAttribute("transform", u)) : (u = getComputedStyle(n)[qn], f[qn] = e, r = mr(n, 1), f[qn] = u), Tn)(u = h[i]) !== (s = r[i]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) < 0 && (o = re(u) !== (l = re(s)) ? sr(n, i, u, l) : parseFloat(u), a = parseFloat(s), t._pt = new Dn(t._pt, r, i, o, a - o, kn), t._pt.u = l || 0, t._props.push(i));
            Er(r, h)
        };
    Ft("padding,margin,Width,Radius", (function (t, e) {
        var n = "Top",
            r = "Right",
            i = "Bottom",
            u = "Left",
            s = (e < 3 ? [n, r, i, u] : [n + u, n + r, i + r, i + u]).map((function (n) {
                return e < 2 ? t + n : "border" + n + t
            }));
        fr[e > 1 ? "border" + t : t] = function (t, e, n, r, i) {
            var u, o;
            if (arguments.length < 4) return u = s.map((function (e) {
                return or(t, e, n)
            })), 5 === (o = u.join(" ")).split(u[0]).length ? u[0] : o;
            u = (r + "").split(" "), o = {}, s.forEach((function (t, e) {
                return o[t] = u[e] = u[e] || u[(e - 1) / 2 | 0]
            })), t.init(e, o, i)
        }
    }));
    var br, Ar, Mr = {
        name: "css",
        register: $n,
        targetTest: function (t) {
            return t.style && t.nodeType
        },
        init: function (t, e, n, r, i) {
            var u, s, o, a, l, h, f, p, c, D, d, g, _, m, v, y, C, x, F, w = this._props,
                E = t.style,
                T = n.vars.startAt;
            for (f in xn || $n(), e)
                if ("autoRound" !== f && (s = e[f], !dt[f] || !Ge(f, e, n, r, t, i)))
                    if (l = typeof s, h = fr[f], "function" === l && (l = typeof (s = s.call(n, r, t, i))), "string" === l && ~s.indexOf("random(") && (s = De(s)), h) h(this, t, f, s, n) && (v = 1);
                    else if ("--" === f.substr(0, 2)) u = (getComputedStyle(t).getPropertyValue(f) + "").trim(), s += "", Ee.lastIndex = 0, Ee.test(u) || (p = re(u), c = re(s)), c ? p !== c && (u = sr(t, f, u, c) + c) : p && (s += p), this.add(E, "setProperty", u, s, r, i, 0, 0, f), w.push(f);
            else if ("undefined" !== l) {
                if (T && f in T ? (u = "function" == typeof T[f] ? T[f].call(n, r, t, i) : T[f], f in B.units && !re(u) && (u += B.units[f]), j(u) && ~u.indexOf("random(") && (u = De(u)), "=" === (u + "").charAt(1) && (u = or(t, f))) : u = or(t, f), a = parseFloat(u), (D = "string" === l && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in Bn && ("autoAlpha" === f && (1 === a && "hidden" === or(t, "visibility") && o && (a = 0), ir(this, E, "visibility", a ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Bn[f]).indexOf(",") && (f = f.split(",")[0])), d = f in Tn)
                    if (g || ((_ = t._gsap).renderTransform && !e.parseTransform || mr(t, e.parseTransform), m = !1 !== e.smoothOrigin && _.smooth, (g = this._pt = new Dn(this._pt, E, qn, 0, 1, _.renderTransform, _, 0, -1)).dep = 1), "scale" === f) this._pt = new Dn(this._pt, _, "scaleY", _.scaleY, (D ? D * o : o - _.scaleY) || 0), w.push("scaleY", f), f += "X";
                    else {
                        if ("transformOrigin" === f) {
                            C = void 0, x = void 0, F = void 0, C = (y = s).split(" "), x = C[0], F = C[1] || "50%", "top" !== x && "bottom" !== x && "left" !== F && "right" !== F || (y = x, x = F, F = y), C[0] = lr[x] || x, C[1] = lr[F] || F, s = C.join(" "), _.svg ? _r(t, s, 0, m, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== _.zOrigin && ir(this, _, "zOrigin", _.zOrigin, c), ir(this, E, f, vr(u), vr(s)));
                            continue
                        }
                        if ("svgOrigin" === f) {
                            _r(t, s, 1, m, 0, this);
                            continue
                        }
                        if (f in cr) {
                            wr(this, _, f, a, s, D);
                            continue
                        }
                        if ("smoothOrigin" === f) {
                            ir(this, _, "smooth", _.smooth, s);
                            continue
                        }
                        if ("force3D" === f) {
                            _[f] = s;
                            continue
                        }
                        if ("transform" === f) {
                            Tr(this, s, t);
                            continue
                        }
                    }
                else f in E || (f = Zn(f) || f);
                if (d || (o || 0 === o) && (a || 0 === a) && !Sn.test(s) && f in E) o || (o = 0), (p = (u + "").substr((a + "").length)) !== (c = re(s) || (f in B.units ? B.units[f] : p)) && (a = sr(t, f, u, c)), this._pt = new Dn(this._pt, d ? _ : E, f, a, D ? D * o : o - a, d || "px" !== c && "zIndex" !== f || !1 === e.autoRound ? kn : Rn), this._pt.u = c || 0, p !== c && "%" !== c && (this._pt.b = u, this._pt.r = Nn);
                else if (f in E) ar.call(this, t, f, u, s);
                else {
                    if (!(f in t)) {
                        at(f, s);
                        continue
                    }
                    this.add(t, f, u || t[f], s, r, i)
                }
                w.push(f)
            }
            v && cn(this)
        },
        get: or,
        aliases: Bn,
        getSetter: function (t, e, n) {
            var r = Bn[e];
            return r && r.indexOf(",") < 0 && (e = r), e in Tn && e !== Gn && (t._gsap.x || or(t, "x")) ? n && wn === n ? "scale" === e ? Vn : jn : (wn = n || {}) && ("scale" === e ? Un : Wn) : t.style && !W(t.style[e]) ? Yn : ~e.indexOf("-") ? Xn : un(t, e)
        },
        core: {
            _removeProperty: rr,
            _getMatrix: gr
        }
    };
    mn.utils.checkPrefix = Zn, Ar = Ft("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (br = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
        Tn[t] = 1
    })), Ft(br, (function (t) {
        B.units[t] = "deg", cr[t] = 1
    })), Bn[Ar[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + br, Ft("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
        var e = t.split(":");
        Bn[e[1]] = Ar[e[0]]
    })), Ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective,transformPerspective", (function (t) {
        B.units[t] = "px"
    })), mn.registerPlugin(Mr);
    var Or, Pr, Sr, Br = mn.registerPlugin(Mr) || mn,
        kr = Br.core.Tween,
        Lr = function () {
            return Or || "undefined" != typeof window && (Or = window.gsap) && Or.registerPlugin && Or
        },
        Nr = function (t) {
            Or = Lr(), (Sr = Or && Or.parseEase("_CE")) ? (Pr = 1, Or.parseEase("bounce").config = function (t) {
                return "object" == typeof t ? Ir("", t) : Ir("bounce(" + t + ")", {
                    strength: +t
                })
            }) : t && console.warn("Please gsap.registerPlugin(CustomEase, CustomBounce)")
        },
        Rr = function (t) {
            var e, n = t.length,
                r = 1 / t[n - 2];
            for (e = 2; e < n; e += 2) t[e] = ~~(t[e] * r * 1e3) / 1e3;
            t[n - 2] = 1
        },
        Ir = function (t, e) {
            Pr || Nr(1), e = e || {};
            var n, r, i, u, s, o, a, l = Math.min(.999, e.strength || .7),
                h = l,
                f = (e.squash || 0) / 100,
                p = f,
                c = 1 / .03,
                D = .2,
                d = 1,
                g = .1,
                _ = [0, 0, .07, 0, .1, 1, .1, 1],
                m = [0, 0, 0, 0, .1, 0, .1, 0];
            for (s = 0; s < 200 && (o = g + (D *= h * ((h + 1) / 2)), u = 1 - (d *= l * l), r = (i = g + .49 * D) + .8 * (i - (n = g + d / c)), f && (g += f, n += f, i += f, r += f, o += f, a = f / p, m.push(g - f, 0, g - f, a, g - f / 2, a, g, a, g, 0, g, 0, g, -.6 * a, g + (o - g) / 6, 0, o, 0), _.push(g - f, 1, g, 1, g, 1), f *= l * l), _.push(g, 1, n, u, i, u, r, u, o, 1, o, 1), l *= .95, c = d / (o - r), g = o, !(u > .999)); s++);
            if (e.endAtStart && "false" !== e.endAtStart) {
                if (i = -.1, _.unshift(i, 1, i, 1, -.07, 0), p)
                    for (i -= f = 2.5 * p, _.unshift(i, 1, i, 1, i, 1), m.splice(0, 6), m.unshift(i, 0, i, 0, i, 1, i + f / 2, 1, i + f, 1, i + f, 0, i + f, 0, i + f, -.6, i + f + .033, 0), s = 0; s < m.length; s += 2) m[s] -= i;
                for (s = 0; s < _.length; s += 2) _[s] -= i, _[s + 1] = 1 - _[s + 1]
            }
            return f && (Rr(m), m[2] = "C" + m[2], Sr(e.squashID || t + "-squash", "M" + m.join(","))), Rr(_), _[2] = "C" + _[2], Sr(t, "M" + _.join(","))
        },
        zr = function () {
            function t(t, e) {
                this.ease = Ir(t, e)
            }
            return t.create = function (t, e) {
                return Ir(t, e)
            }, t.register = function (t) {
                Or = t, Nr()
            }, t
        }();
    /*!
     * CustomBounce 3.9.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    Lr() && Or.registerPlugin(zr), zr.version = "3.9.0";
    /*!
     * paths 3.9.0
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Yr = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        Xr = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        jr = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
        Vr = /(^[#\.][a-z]|[a-y][a-z])/i,
        Ur = Math.PI / 180,
        Wr = 180 / Math.PI,
        qr = Math.sin,
        Gr = Math.cos,
        Hr = Math.abs,
        Qr = Math.sqrt,
        Kr = Math.atan2,
        Zr = function (t) {
            return "string" == typeof t
        },
        $r = function (t) {
            return "number" == typeof t
        },
        Jr = {},
        ti = {},
        ei = function (t) {
            return Math.round((t + 1e8) % 1 * 1e5) / 1e5 || (t < 0 ? 0 : 1)
        },
        ni = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        ri = function (t) {
            return Math.round(1e10 * t) / 1e10 || 0
        },
        ii = function (t, e, n, r) {
            var i = t[e],
                u = 1 === r ? 6 : gi(i, n, r);
            if (u && u + n + 2 < i.length) return t.splice(e, 0, i.slice(0, n + u + 2)), i.splice(0, n + u), 1
        },
        ui = function (t, e, n) {
            var r = t.length,
                i = ~~(n * r);
            if (t[i] > e)
                for (; --i && t[i] > e;);
            else
                for (; t[++i] < e && i < r;);
            return i < r ? i : r - 1
        },
        si = function (t, e) {
            return e.totalLength = t.totalLength, t.samples ? (e.samples = t.samples.slice(0), e.lookup = t.lookup.slice(0), e.minLength = t.minLength, e.resolution = t.resolution) : t.totalPoints && (e.totalPoints = t.totalPoints), e
        },
        oi = function (t, e) {
            var n = t.length,
                r = t[n - 1] || [],
                i = r.length;
            n && e[0] === r[i - 2] && e[1] === r[i - 1] && (e = r.concat(e.slice(2)), n--), t[n] = e
        };

    function ai(t) {
        var e, n = (t = Zr(t) && Vr.test(t) && document.querySelector(t) || t).getAttribute ? t : 0;
        return n && (t = t.getAttribute("d")) ? (n._gsPath || (n._gsPath = {}), (e = n._gsPath[t]) && !e._dirty ? e : n._gsPath[t] = Ci(t)) : t ? Zr(t) ? Ci(t) : $r(t[0]) ? [t] : t : console.warn("Expecting a <path> element or an SVG path data string")
    }

    function li(t) {
        var e, n = 0;
        for (t.reverse(); n < t.length; n += 2) e = t[n], t[n] = t[n + 1], t[n + 1] = e;
        t.reversed = !t.reversed
    }
    var hi = {
        rect: "rx,ry,x,y,width,height",
        circle: "r,cx,cy",
        ellipse: "rx,ry,cx,cy",
        line: "x1,x2,y1,y2"
    };

    function fi(t, e) {
        var n, r, i, u, s, o, a, l, h, f, p, c, D, d, g, _, m, v, y, C, x, F, w = t.tagName.toLowerCase(),
            E = .552284749831;
        return "path" !== w && t.getBBox ? (o = function (t, e) {
            var n, r = document.createElementNS("http://www.w3.org/2000/svg", "path"),
                i = [].slice.call(t.attributes),
                u = i.length;
            for (e = "," + e + ","; --u > -1;) n = i[u].nodeName.toLowerCase(), e.indexOf("," + n + ",") < 0 && r.setAttributeNS(null, n, i[u].nodeValue);
            return r
        }(t, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"), F = function (t, e) {
            for (var n = e ? e.split(",") : [], r = {}, i = n.length; --i > -1;) r[n[i]] = +t.getAttribute(n[i]) || 0;
            return r
        }(t, hi[w]), "rect" === w ? (u = F.rx, s = F.ry || u, r = F.x, i = F.y, f = F.width - 2 * u, p = F.height - 2 * s, n = u || s ? "M" + (_ = (d = (D = r + u) + f) + u) + "," + (v = i + s) + " V" + (y = v + p) + " C" + [_, C = y + s * E, g = d + u * E, x = y + s, d, x, d - (d - D) / 3, x, D + (d - D) / 3, x, D, x, c = r + u * (1 - E), x, r, C, r, y, r, y - (y - v) / 3, r, v + (y - v) / 3, r, v, r, m = i + s * (1 - E), c, i, D, i, D + (d - D) / 3, i, d - (d - D) / 3, i, d, i, g, i, _, m, _, v].join(",") + "z" : "M" + (r + f) + "," + i + " v" + p + " h" + -f + " v" + -p + " h" + f + "z") : "circle" === w || "ellipse" === w ? ("circle" === w ? l = (u = s = F.r) * E : (u = F.rx, l = (s = F.ry) * E), n = "M" + ((r = F.cx) + u) + "," + (i = F.cy) + " C" + [r + u, i + l, r + (a = u * E), i + s, r, i + s, r - a, i + s, r - u, i + l, r - u, i, r - u, i - l, r - a, i - s, r, i - s, r + a, i - s, r + u, i - l, r + u, i].join(",") + "z") : "line" === w ? n = "M" + F.x1 + "," + F.y1 + " L" + F.x2 + "," + F.y2 : "polyline" !== w && "polygon" !== w || (n = "M" + (r = (h = (t.getAttribute("points") + "").match(Xr) || []).shift()) + "," + (i = h.shift()) + " L" + h.join(","), "polygon" === w && (n += "," + r + "," + i + "z")), o.setAttribute("d", wi(o._gsRawPath = Ci(n))), e && t.parentNode && (t.parentNode.insertBefore(o, t), t.parentNode.removeChild(t)), o) : t
    }

    function pi(t, e, n) {
        var r, i = t[e],
            u = t[e + 2],
            s = t[e + 4];
        return i += (u - i) * n, i += ((u += (s - u) * n) - i) * n, r = u + (s + (t[e + 6] - s) * n - u) * n - i, i = t[e + 1], i += ((u = t[e + 3]) - i) * n, i += ((u += ((s = t[e + 5]) - u) * n) - i) * n, ni(Kr(u + (s + (t[e + 7] - s) * n - u) * n - i, r) * Wr)
    }

    function ci(t, e, n) {
        n = void 0 === n ? 1 : ri(n) || 0, e = ri(e) || 0;
        var r = Math.max(0, ~~(Hr(n - e) - 1e-8)),
            i = function (t) {
                for (var e = [], n = 0; n < t.length; n++) e[n] = si(t[n], t[n].slice(0));
                return si(t, e)
            }(t);
        if (e > n && (e = 1 - e, n = 1 - n, function (t, e) {
                var n = t.length;
                for (e || t.reverse(); n--;) t[n].reversed || li(t[n])
            }(i), i.totalLength = 0), e < 0 || n < 0) {
            var u = Math.abs(~~Math.min(e, n)) + 1;
            e += u, n += u
        }
        i.totalLength || di(i);
        var s, o, a, l, h, f, p, c, D = n > 1,
            d = _i(i, e, Jr, !0),
            g = _i(i, n, ti),
            _ = g.segment,
            m = d.segment,
            v = g.segIndex,
            y = d.segIndex,
            C = g.i,
            x = d.i,
            F = y === v,
            w = C === x && F;
        if (D || r) {
            for (s = v < y || F && C < x || w && g.t < d.t, ii(i, y, x, d.t) && (y++, s || (v++, w ? (g.t = (g.t - d.t) / (1 - d.t), C = 0) : F && (C -= x))), Math.abs(1 - (n - e)) < 1e-5 ? v = y - 1 : !g.t && v ? v-- : ii(i, v, C, g.t) && s && y++, 1 === d.t && (y = (y + 1) % i.length), h = [], p = 1 + (f = i.length) * r, c = y, p += (f - y + v) % f, l = 0; l < p; l++) oi(h, i[c++ % f]);
            i = h
        } else if (a = 1 === g.t ? 6 : gi(_, C, g.t), e !== n)
            for (o = gi(m, x, w ? d.t / g.t : d.t), F && (a += o), _.splice(C + a + 2), (o || x) && m.splice(0, x + o), l = i.length; l--;)(l < y || l > v) && i.splice(l, 1);
        else _.angle = pi(_, C + a, 0), d = _[C += a], g = _[C + 1], _.length = _.totalLength = 0, _.totalPoints = i.totalPoints = 8, _.push(d, g, d, g, d, g, d, g);
        return i.totalLength = 0, i
    }

    function Di(t, e, n) {
        e = e || 0, t.samples || (t.samples = [], t.lookup = []);
        var r, i, u, s, o, a, l, h, f, p, c, D, d, g, _, m, v, y = ~~t.resolution || 12,
            C = 1 / y,
            x = n ? e + 6 * n + 1 : t.length,
            F = t[e],
            w = t[e + 1],
            E = e ? e / 6 * y : 0,
            T = t.samples,
            b = t.lookup,
            A = (e ? t.minLength : 1e8) || 1e8,
            M = T[E + n * y - 1],
            O = e ? T[E - 1] : 0;
        for (T.length = b.length = 0, i = e + 2; i < x; i += 6) {
            if (u = t[i + 4] - F, s = t[i + 2] - F, o = t[i] - F, h = t[i + 5] - w, f = t[i + 3] - w, p = t[i + 1] - w, a = l = c = D = 0, Hr(u) < .01 && Hr(h) < .01 && Hr(o) + Hr(p) < .01) t.length > 8 && (t.splice(i, 6), i -= 6, x -= 6);
            else
                for (r = 1; r <= y; r++) a = l - (l = ((g = C * r) * g * u + 3 * (d = 1 - g) * (g * s + d * o)) * g), c = D - (D = (g * g * h + 3 * d * (g * f + d * p)) * g), (m = Qr(c * c + a * a)) < A && (A = m), O += m, T[E++] = O;
            F += u, w += h
        }
        if (M)
            for (M -= O; E < T.length; E++) T[E] += M;
        if (T.length && A) {
            if (t.totalLength = v = T[T.length - 1] || 0, t.minLength = A, v / A < 9999)
                for (m = _ = 0, r = 0; r < v; r += A) b[m++] = T[_] < r ? ++_ : _
        } else t.totalLength = T[0] = 0;
        return e ? O - T[e / 2 - 1] : O
    }

    function di(t, e) {
        var n, r, i;
        for (i = n = r = 0; i < t.length; i++) t[i].resolution = ~~e || 12, r += t[i].length, n += Di(t[i]);
        return t.totalPoints = r, t.totalLength = n, t
    }

    function gi(t, e, n) {
        if (n <= 0 || n >= 1) return 0;
        var r = t[e],
            i = t[e + 1],
            u = t[e + 2],
            s = t[e + 3],
            o = t[e + 4],
            a = t[e + 5],
            l = r + (u - r) * n,
            h = u + (o - u) * n,
            f = i + (s - i) * n,
            p = s + (a - s) * n,
            c = l + (h - l) * n,
            D = f + (p - f) * n,
            d = o + (t[e + 6] - o) * n,
            g = a + (t[e + 7] - a) * n;
        return h += (d - h) * n, p += (g - p) * n, t.splice(e + 2, 4, ni(l), ni(f), ni(c), ni(D), ni(c + (h - c) * n), ni(D + (p - D) * n), ni(h), ni(p), ni(d), ni(g)), t.samples && t.samples.splice(e / 6 * t.resolution | 0, 0, 0, 0, 0, 0, 0, 0), 6
    }

    function _i(t, e, n, r) {
        n = n || {}, t.totalLength || di(t), (e < 0 || e > 1) && (e = ei(e));
        var i, u, s, o, a, l, h, f = 0,
            p = t[0];
        if (e)
            if (1 === e) h = 1, l = (p = t[f = t.length - 1]).length - 8;
            else {
                if (t.length > 1) {
                    for (s = t.totalLength * e, a = l = 0;
                        (a += t[l++].totalLength) < s;) f = l;
                    e = (s - (o = a - (p = t[f]).totalLength)) / (a - o) || 0
                }
                i = p.samples, u = p.resolution, s = p.totalLength * e, o = (l = p.lookup.length ? p.lookup[~~(s / p.minLength)] || 0 : ui(i, s, e)) ? i[l - 1] : 0, (a = i[l]) < s && (o = a, a = i[++l]), h = 1 / u * ((s - o) / (a - o) + l % u), l = 6 * ~~(l / u), r && 1 === h && (l + 6 < p.length ? (l += 6, h = 0) : f + 1 < t.length && (l = h = 0, p = t[++f]))
            }
        else h = l = f = 0, p = t[0];
        return n.t = h, n.i = l, n.path = t, n.segment = p, n.segIndex = f, n
    }

    function mi(t, e, n, r) {
        var i, u, s, o, a, l, h, f, p, c = t[0],
            D = r || {};
        if ((e < 0 || e > 1) && (e = ei(e)), t.length > 1) {
            for (s = t.totalLength * e, a = l = 0;
                (a += t[l++].totalLength) < s;) c = t[l];
            e = (s - (o = a - c.totalLength)) / (a - o) || 0
        }
        return i = c.samples, u = c.resolution, s = c.totalLength * e, o = (l = c.lookup.length ? c.lookup[e < 1 ? ~~(s / c.minLength) : c.lookup.length - 1] || 0 : ui(i, s, e)) ? i[l - 1] : 0, (a = i[l]) < s && (o = a, a = i[++l]), p = 1 - (h = 1 / u * ((s - o) / (a - o) + l % u) || 0), f = c[l = 6 * ~~(l / u)], D.x = ni((h * h * (c[l + 6] - f) + 3 * p * (h * (c[l + 4] - f) + p * (c[l + 2] - f))) * h + f), D.y = ni((h * h * (c[l + 7] - (f = c[l + 1])) + 3 * p * (h * (c[l + 5] - f) + p * (c[l + 3] - f))) * h + f), n && (D.angle = c.totalLength ? pi(c, l, h >= 1 ? 1 - 1e-9 : h || 1e-9) : c.angle || 0), D
    }

    function vi(t, e, n, r, i, u, s) {
        for (var o, a, l, h, f, p = t.length; --p > -1;)
            for (a = (o = t[p]).length, l = 0; l < a; l += 2) h = o[l], f = o[l + 1], o[l] = h * e + f * r + u, o[l + 1] = h * n + f * i + s;
        return t._dirty = 1, t
    }

    function yi(t, e, n, r, i, u, s, o, a) {
        if (t !== o || e !== a) {
            n = Hr(n), r = Hr(r);
            var l = i % 360 * Ur,
                h = Gr(l),
                f = qr(l),
                p = Math.PI,
                c = 2 * p,
                D = (t - o) / 2,
                d = (e - a) / 2,
                g = h * D + f * d,
                _ = -f * D + h * d,
                m = g * g,
                v = _ * _,
                y = m / (n * n) + v / (r * r);
            y > 1 && (n = Qr(y) * n, r = Qr(y) * r);
            var C = n * n,
                x = r * r,
                F = (C * x - C * v - x * m) / (C * v + x * m);
            F < 0 && (F = 0);
            var w = (u === s ? -1 : 1) * Qr(F),
                E = w * (n * _ / r),
                T = w * (-r * g / n),
                b = (t + o) / 2 + (h * E - f * T),
                A = (e + a) / 2 + (f * E + h * T),
                M = (g - E) / n,
                O = (_ - T) / r,
                P = (-g - E) / n,
                S = (-_ - T) / r,
                B = M * M + O * O,
                k = (O < 0 ? -1 : 1) * Math.acos(M / Qr(B)),
                L = (M * S - O * P < 0 ? -1 : 1) * Math.acos((M * P + O * S) / Qr(B * (P * P + S * S)));
            isNaN(L) && (L = p), !s && L > 0 ? L -= c : s && L < 0 && (L += c), k %= c, L %= c;
            var N, R = Math.ceil(Hr(L) / (c / 4)),
                I = [],
                z = L / R,
                Y = 4 / 3 * qr(z / 2) / (1 + Gr(z / 2)),
                X = h * n,
                j = f * n,
                V = f * -r,
                U = h * r;
            for (N = 0; N < R; N++) g = Gr(i = k + N * z), _ = qr(i), M = Gr(i += z), O = qr(i), I.push(g - Y * _, _ + Y * g, M + Y * O, O - Y * M, M, O);
            for (N = 0; N < I.length; N += 2) g = I[N], _ = I[N + 1], I[N] = g * X + _ * V + b, I[N + 1] = g * j + _ * U + A;
            return I[N - 2] = o, I[N - 1] = a, I
        }
    }

    function Ci(t) {
        var e, n, r, i, u, s, o, a, l, h, f, p, c, D, d, g = (t + "").replace(jr, (function (t) {
                var e = +t;
                return e < 1e-4 && e > -1e-4 ? 0 : e
            })).match(Yr) || [],
            _ = [],
            m = 0,
            v = 0,
            y = g.length,
            C = 0,
            x = "ERROR: malformed path: " + t,
            F = function (t, e, n, r) {
                h = (n - t) / 3, f = (r - e) / 3, o.push(t + h, e + f, n - h, r - f, n, r)
            };
        if (!t || !isNaN(g[0]) || isNaN(g[1])) return console.log(x), _;
        for (e = 0; e < y; e++)
            if (c = u, isNaN(g[e]) ? s = (u = g[e].toUpperCase()) !== g[e] : e--, r = +g[e + 1], i = +g[e + 2], s && (r += m, i += v), e || (a = r, l = i), "M" === u) o && (o.length < 8 ? _.length -= 1 : C += o.length), m = a = r, v = l = i, o = [r, i], _.push(o), e += 2, u = "L";
            else if ("C" === u) o || (o = [0, 0]), s || (m = v = 0), o.push(r, i, m + 1 * g[e + 3], v + 1 * g[e + 4], m += 1 * g[e + 5], v += 1 * g[e + 6]), e += 6;
        else if ("S" === u) h = m, f = v, "C" !== c && "S" !== c || (h += m - o[o.length - 4], f += v - o[o.length - 3]), s || (m = v = 0), o.push(h, f, r, i, m += 1 * g[e + 3], v += 1 * g[e + 4]), e += 4;
        else if ("Q" === u) h = m + 2 / 3 * (r - m), f = v + 2 / 3 * (i - v), s || (m = v = 0), m += 1 * g[e + 3], v += 1 * g[e + 4], o.push(h, f, m + 2 / 3 * (r - m), v + 2 / 3 * (i - v), m, v), e += 4;
        else if ("T" === u) h = m - o[o.length - 4], f = v - o[o.length - 3], o.push(m + h, v + f, r + 2 / 3 * (m + 1.5 * h - r), i + 2 / 3 * (v + 1.5 * f - i), m = r, v = i), e += 2;
        else if ("H" === u) F(m, v, m = r, v), e += 1;
        else if ("V" === u) F(m, v, m, v = r + (s ? v - m : 0)), e += 1;
        else if ("L" === u || "Z" === u) "Z" === u && (r = a, i = l, o.closed = !0), ("L" === u || Hr(m - r) > .5 || Hr(v - i) > .5) && (F(m, v, r, i), "L" === u && (e += 2)), m = r, v = i;
        else if ("A" === u) {
            if (D = g[e + 4], d = g[e + 5], h = g[e + 6], f = g[e + 7], n = 7, D.length > 1 && (D.length < 3 ? (f = h, h = d, n--) : (f = d, h = D.substr(2), n -= 2), d = D.charAt(1), D = D.charAt(0)), p = yi(m, v, +g[e + 1], +g[e + 2], +g[e + 3], +D, +d, (s ? m : 0) + 1 * h, (s ? v : 0) + 1 * f), e += n, p)
                for (n = 0; n < p.length; n++) o.push(p[n]);
            m = o[o.length - 2], v = o[o.length - 1]
        } else console.log(x);
        return (e = o.length) < 6 ? (_.pop(), e = 0) : o[0] === o[e - 2] && o[1] === o[e - 1] && (o.closed = !0), _.totalPoints = C + e, _
    }

    function xi(t, e) {
        void 0 === e && (e = 1);
        for (var n = t[0], r = 0, i = [n, r], u = 2; u < t.length; u += 2) i.push(n, r, t[u], r = (t[u] - n) * e / 2, n = t[u], -r);
        return i
    }

    function Fi(t, e, n) {
        Hr(t[0] - t[2]) < 1e-4 && Hr(t[1] - t[3]) < 1e-4 && (t = t.slice(2));
        var r, i, u, s, o, a, l, h, f, p, c, D, d, g, _ = t.length - 2,
            m = +t[0],
            v = +t[1],
            y = +t[2],
            C = +t[3],
            x = [m, v, m, v],
            F = y - m,
            w = C - v,
            E = Math.abs(t[_] - m) < .001 && Math.abs(t[_ + 1] - v) < .001;
        for (isNaN(n) && (n = Math.PI / 10), E && (t.push(y, C), y = m, C = v, m = t[_ - 2], v = t[_ - 1], t.unshift(m, v), _ += 4), e = e || 0 === e ? +e : 1, o = 2; o < _; o += 2) r = m, i = v, m = y, v = C, y = +t[o + 2], C = +t[o + 3], m === y && v === C || (D = (a = F) * a + (h = w) * h, d = (F = y - m) * F + (w = C - v) * w, g = (l = y - r) * l + (f = C - i) * f, c = (u = Math.acos((D + d - g) / Qr(4 * D * d))) / Math.PI * e, p = Qr(D) * c, c *= Qr(d), m === r && v === i || (u > n ? (s = Kr(f, l), x.push(ni(m - Gr(s) * p), ni(v - qr(s) * p), ni(m), ni(v), ni(m + Gr(s) * c), ni(v + qr(s) * c))) : (s = Kr(h, a), x.push(ni(m - Gr(s) * p), ni(v - qr(s) * p)), s = Kr(w, F), x.push(ni(m), ni(v), ni(m + Gr(s) * c), ni(v + qr(s) * c)))));
        return m !== y || v !== C || x.length < 4 ? x.push(ni(y), ni(C), ni(y), ni(C)) : x.length -= 2, E && (x.splice(0, 6), x.length = x.length - 6), x
    }

    function wi(t) {
        $r(t[0]) && (t = [t]);
        var e, n, r, i, u = "",
            s = t.length;
        for (n = 0; n < s; n++) {
            for (i = t[n], u += "M" + ni(i[0]) + "," + ni(i[1]) + " C", e = i.length, r = 2; r < e; r++) u += ni(i[r++]) + "," + ni(i[r++]) + " " + ni(i[r++]) + "," + ni(i[r++]) + " " + ni(i[r++]) + "," + ni(i[r]) + " ";
            i.closed && (u += "z")
        }
        return u
    }
    /*!
     * CustomEase 3.9.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ei, Ti, bi = function () {
            return Ei || "undefined" != typeof window && (Ei = window.gsap) && Ei.registerPlugin && Ei
        },
        Ai = function () {
            (Ei = bi()) ? (Ei.registerEase("_CE", Bi.create), Ti = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
        },
        Mi = function (t) {
            return ~~(1e3 * t + (t < 0 ? -.5 : .5)) / 1e3
        },
        Oi = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        Pi = /[cLlsSaAhHvVtTqQ]/g,
        Si = function t(e, n, r, i, u, s, o, a, l, h, f) {
            var p, c = (e + r) / 2,
                D = (n + i) / 2,
                d = (r + u) / 2,
                g = (i + s) / 2,
                _ = (u + o) / 2,
                m = (s + a) / 2,
                v = (c + d) / 2,
                y = (D + g) / 2,
                C = (d + _) / 2,
                x = (g + m) / 2,
                F = (v + C) / 2,
                w = (y + x) / 2,
                E = o - e,
                T = a - n,
                b = Math.abs((r - o) * T - (i - a) * E),
                A = Math.abs((u - o) * T - (s - a) * E);
            return h || (h = [{
                x: e,
                y: n
            }, {
                x: o,
                y: a
            }], f = 1), h.splice(f || h.length - 1, 0, {
                x: F,
                y: w
            }), (b + A) * (b + A) > l * (E * E + T * T) && (p = h.length, t(e, n, c, D, v, y, F, w, l, h, f), t(F, w, C, x, _, m, o, a, l, h, f + 1 + (h.length - p))), h
        },
        Bi = function () {
            function t(t, e, n) {
                Ti || Ai(), this.id = t, this.setData(e, n)
            }
            var e = t.prototype;
            return e.setData = function (t, e) {
                e = e || {};
                var n, r, i, u, s, o, a, l, h, f = (t = t || "0,0,1,1").match(Oi),
                    p = 1,
                    c = [],
                    D = [],
                    d = e.precision || 1,
                    g = d <= 1;
                if (this.data = t, (Pi.test(t) || ~t.indexOf("M") && t.indexOf("C") < 0) && (f = Ci(t)[0]), 4 === (n = f.length)) f.unshift(0, 0), f.push(1, 1), n = 8;
                else if ((n - 2) % 6) throw "Invalid CustomEase";
                for (0 == +f[0] && 1 == +f[n - 2] || function (t, e, n) {
                        n || 0 === n || (n = Math.max(+t[t.length - 1], +t[1]));
                        var r, i = -1 * +t[0],
                            u = -n,
                            s = t.length,
                            o = 1 / (+t[s - 2] + i),
                            a = -e || (Math.abs(+t[s - 1] - +t[1]) < .01 * (+t[s - 2] - +t[0]) ? function (t) {
                                var e, n = t.length,
                                    r = 1e20;
                                for (e = 1; e < n; e += 6) + t[e] < r && (r = +t[e]);
                                return r
                            }(t) + u : +t[s - 1] + u);
                        for (a = a ? 1 / a : -o, r = 0; r < s; r += 2) t[r] = (+t[r] + i) * o, t[r + 1] = (+t[r + 1] + u) * a
                    }(f, e.height, e.originY), this.segment = f, u = 2; u < n; u += 6) r = {
                    x: +f[u - 2],
                    y: +f[u - 1]
                }, i = {
                    x: +f[u + 4],
                    y: +f[u + 5]
                }, c.push(r, i), Si(r.x, r.y, +f[u], +f[u + 1], +f[u + 2], +f[u + 3], i.x, i.y, 1 / (2e5 * d), c, c.length - 1);
                for (n = c.length, u = 0; u < n; u++) a = c[u], l = c[u - 1] || a, (a.x > l.x || l.y !== a.y && l.x === a.x || a === l) && a.x <= 1 ? (l.cx = a.x - l.x, l.cy = a.y - l.y, l.n = a, l.nx = a.x, g && u > 1 && Math.abs(l.cy / l.cx - c[u - 2].cy / c[u - 2].cx) > 2 && (g = 0), l.cx < p && (l.cx ? p = l.cx : (l.cx = .001, u === n - 1 && (l.x -= .001, p = Math.min(p, .001), g = 0)))) : (c.splice(u--, 1), n--);
                if (s = 1 / (n = 1 / p + 1 | 0), o = 0, a = c[0], g) {
                    for (u = 0; u < n; u++) h = u * s, a.nx < h && (a = c[++o]), r = a.y + (h - a.x) / a.cx * a.cy, D[u] = {
                        x: h,
                        cx: s,
                        y: r,
                        cy: 0,
                        nx: 9
                    }, u && (D[u - 1].cy = r - D[u - 1].y);
                    D[n - 1].cy = c[c.length - 1].y - r
                } else {
                    for (u = 0; u < n; u++) a.nx < u * s && (a = c[++o]), D[u] = a;
                    o < c.length - 1 && (D[u - 1] = c[c.length - 2])
                }
                return this.ease = function (t) {
                    var e = D[t * n | 0] || D[n - 1];
                    return e.nx < t && (e = e.n), e.y + (t - e.x) / e.cx * e.cy
                }, this.ease.custom = this, this.id && Ei && Ei.registerEase(this.id, this.ease), this
            }, e.getSVGData = function (e) {
                return t.getSVGData(this, e)
            }, t.create = function (e, n, r) {
                return new t(e, n, r).ease
            }, t.register = function (t) {
                Ei = t, Ai()
            }, t.get = function (t) {
                return Ei.parseEase(t)
            }, t.getSVGData = function (e, n) {
                var r, i, u, s, o, a, l, h, f, p, c = (n = n || {}).width || 100,
                    D = n.height || 100,
                    d = n.x || 0,
                    g = (n.y || 0) + D,
                    _ = Ei.utils.toArray(n.path)[0];
                if (n.invert && (D = -D, g = 0), "string" == typeof e && (e = Ei.parseEase(e)), e.custom && (e = e.custom), e instanceof t) r = wi(vi([e.segment], c, 0, 0, -D, d, g));
                else {
                    for (r = [d, g], s = 1 / (l = Math.max(5, 200 * (n.precision || 1))), h = 5 / (l += 2), f = Mi(d + s * c), i = ((p = Mi(g + e(s) * -D)) - g) / (f - d), u = 2; u < l; u++) o = Mi(d + u * s * c), a = Mi(g + e(u * s) * -D), (Math.abs((a - p) / (o - f) - i) > h || u === l - 1) && (r.push(f, p), i = (a - p) / (o - f)), f = o, p = a;
                    r = "M" + r.join(",")
                }
                return _ && _.setAttribute("d", r), r
            }, t
        }();
    bi() && Ei.registerPlugin(Bi), Bi.version = "3.9.0";
    /*!
     * CustomWiggle 3.9.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var ki, Li, Ni, Ri = function () {
            return ki || "undefined" != typeof window && (ki = window.gsap) && ki.registerPlugin && ki
        },
        Ii = {
            easeOut: "M0,1,C0.7,1,0.6,0,1,0",
            easeInOut: "M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0",
            anticipate: "M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1",
            uniform: "M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0"
        },
        zi = function (t) {
            return t
        },
        Yi = function (t) {
            if (!Li)
                if (ki = Ri(), Ni = ki && ki.parseEase("_CE")) {
                    for (var e in Ii) Ii[e] = Ni("", Ii[e]);
                    Li = 1, ji("wiggle").config = function (t) {
                        return "object" == typeof t ? ji("", t) : ji("wiggle(" + t + ")", {
                            wiggles: +t
                        })
                    }
                } else t && console.warn("Please gsap.registerPlugin(CustomEase, CustomWiggle)")
        },
        Xi = function (t, e) {
            return "function" != typeof t && (t = ki.parseEase(t) || Ni("", t)), t.custom || !e ? t : function (e) {
                return 1 - t(e)
            }
        },
        ji = function (t, e) {
            Li || Yi(1);
            var n, r, i, u, s, o, a, l, h, f = 0 | ((e = e || {}).wiggles || 10),
                p = 1 / f,
                c = p / 2,
                D = "anticipate" === e.type,
                d = Ii[e.type] || Ii.easeOut,
                g = zi;
            if (D && (g = d, d = Ii.easeOut), e.timingEase && (g = Xi(e.timingEase)), e.amplitudeEase && (d = Xi(e.amplitudeEase, !0)), l = [0, 0, (o = g(c)) / 4, 0, o / 2, a = D ? -d(c) : d(c), o, a], "random" === e.type) {
                for (l.length = 4, n = g(p), r = 2 * Math.random() - 1, h = 2; h < f; h++) c = n, a = r, n = g(p * h), r = 2 * Math.random() - 1, i = Math.atan2(r - l[l.length - 3], n - l[l.length - 4]), u = Math.cos(i) * p, s = Math.sin(i) * p, l.push(c - u, a - s, c, a, c + u, a + s);
                l.push(n, 0, 1, 0)
            } else {
                for (h = 1; h < f; h++) l.push(g(c + p / 2), a), c += p, a = (a > 0 ? -1 : 1) * d(h * p), o = g(c), l.push(g(c - p / 2), a, o, a);
                l.push(g(c + p / 4), a, g(c + p / 4), 0, 1, 0)
            }
            for (h = l.length; --h > -1;) l[h] = ~~(1e3 * l[h]) / 1e3;
            return l[2] = "C" + l[2], Ni(t, "M" + l.join(","))
        },
        Vi = function () {
            function t(t, e) {
                this.ease = ji(t, e)
            }
            return t.create = function (t, e) {
                return ji(t, e)
            }, t.register = function (t) {
                ki = t, Yi()
            }, t
        }();
    Ri() && ki.registerPlugin(Vi), Vi.version = "3.9.0";
    /*!
     * DrawSVGPlugin 3.9.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Ui, Wi, qi, Gi, Hi, Qi = function () {
            return "undefined" != typeof window
        },
        Ki = function () {
            return Ui || Qi() && (Ui = window.gsap) && Ui.registerPlugin && Ui
        },
        Zi = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        $i = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"]
        },
        Ji = function (t) {
            return Math.round(1e4 * t) / 1e4
        },
        tu = function (t) {
            return parseFloat(t) || 0
        },
        eu = function (t, e) {
            var n = tu(t);
            return ~t.indexOf("%") ? n / 100 * e : n
        },
        nu = function (t, e) {
            return tu(t.getAttribute(e))
        },
        ru = Math.sqrt,
        iu = function (t, e, n, r, i, u) {
            return ru(Math.pow((tu(n) - tu(t)) * i, 2) + Math.pow((tu(r) - tu(e)) * u, 2))
        },
        uu = function (t) {
            return console.warn(t)
        },
        su = function (t) {
            return "non-scaling-stroke" === t.getAttribute("vector-effect")
        },
        ou = function (t) {
            if (!(t = Wi(t)[0])) return 0;
            var e, n, r, i, u, s, o, a = t.tagName.toLowerCase(),
                l = t.style,
                h = 1,
                f = 1;
            su(t) && (f = t.getScreenCTM(), h = ru(f.a * f.a + f.b * f.b), f = ru(f.d * f.d + f.c * f.c));
            try {
                n = t.getBBox()
            } catch (t) {
                uu("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
            }
            var p = n || {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                c = p.x,
                D = p.y,
                d = p.width,
                g = p.height;
            if (n && (d || g) || !$i[a] || (d = nu(t, $i[a][0]), g = nu(t, $i[a][1]), "rect" !== a && "line" !== a && (d *= 2, g *= 2), "line" === a && (c = nu(t, "x1"), D = nu(t, "y1"), d = Math.abs(d - c), g = Math.abs(g - D))), "path" === a) i = l.strokeDasharray, l.strokeDasharray = "none", e = t.getTotalLength() || 0, h !== f && uu("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), e *= (h + f) / 2, l.strokeDasharray = i;
            else if ("rect" === a) e = 2 * d * h + 2 * g * f;
            else if ("line" === a) e = iu(c, D, c + d, D + g, h, f);
            else if ("polyline" === a || "polygon" === a)
                for (r = t.getAttribute("points").match(Zi) || [], "polygon" === a && r.push(r[0], r[1]), e = 0, u = 2; u < r.length; u += 2) e += iu(r[u - 2], r[u - 1], r[u], r[u + 1], h, f) || 0;
            else "circle" !== a && "ellipse" !== a || (s = d / 2 * h, o = g / 2 * f, e = Math.PI * (3 * (s + o) - ru((3 * s + o) * (s + 3 * o))));
            return e || 0
        },
        au = function (t, e) {
            if (!(t = Wi(t)[0])) return [0, 0];
            e || (e = ou(t) + 1);
            var n = qi.getComputedStyle(t),
                r = n.strokeDasharray || "",
                i = tu(n.strokeDashoffset),
                u = r.indexOf(",");
            return u < 0 && (u = r.indexOf(" ")), (r = u < 0 ? e : tu(r.substr(0, u))) > e && (r = e), [-i || 0, r - i || 0]
        },
        lu = function () {
            Qi() && (document, qi = window, Hi = Ui = Ki(), Wi = Ui.utils.toArray, Gi = -1 !== ((qi.navigator || {}).userAgent || "").indexOf("Edge"))
        },
        hu = {
            version: "3.9.0",
            name: "drawSVG",
            register: function (t) {
                Ui = t, lu()
            },
            init: function (t, e, n, r, i) {
                if (!t.getBBox) return !1;
                Hi || lu();
                var u, s, o, a = ou(t);
                return this._style = t.style, this._target = t, e + "" == "true" ? e = "0 100%" : e ? -1 === (e + "").indexOf(" ") && (e = "0 " + e) : e = "0 0", s = function (t, e, n) {
                    var r, i, u = t.indexOf(" ");
                    return u < 0 ? (r = void 0 !== n ? n + "" : t, i = t) : (r = t.substr(0, u), i = t.substr(u + 1)), (r = eu(r, e)) > (i = eu(i, e)) ? [i, r] : [r, i]
                }(e, a, (u = au(t, a))[0]), this._length = Ji(a), this._dash = Ji(u[1] - u[0]), this._offset = Ji(-u[0]), this._dashPT = this.add(this, "_dash", this._dash, Ji(s[1] - s[0])), this._offsetPT = this.add(this, "_offset", this._offset, Ji(-s[0])), Gi && (o = qi.getComputedStyle(t)).strokeLinecap !== o.strokeLinejoin && (s = tu(o.strokeMiterlimit), this.add(t.style, "strokeMiterlimit", s, s + .01)), this._live = su(t) || ~(e + "").indexOf("live"), this._nowrap = ~(e + "").indexOf("nowrap"), this._props.push("drawSVG"), 1
            },
            render: function (t, e) {
                var n, r, i, u, s = e._pt,
                    o = e._style;
                if (s) {
                    for (e._live && (n = ou(e._target)) !== e._length && (r = n / e._length, e._length = n, e._offsetPT && (e._offsetPT.s *= r, e._offsetPT.c *= r), e._dashPT ? (e._dashPT.s *= r, e._dashPT.c *= r) : e._dash *= r); s;) s.r(t, s.d), s = s._next;
                    i = e._dash || t && 1 !== t && 1e-4 || 0, n = e._length - i + .1, u = e._offset, i && u && i + Math.abs(u % e._length) > e._length - .2 && (u += u < 0 ? .1 : -.1) && (n += .1), o.strokeDashoffset = i ? u : u + .001, o.strokeDasharray = n < .2 ? "none" : i ? i + "px," + (e._nowrap ? 999999 : n) + "px" : "0px, 999999px"
                }
            },
            getLength: ou,
            getPosition: au
        };
    Ki() && Ui.registerPlugin(hu);
    /*!
     * matrix 3.9.0
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var fu, pu, cu, Du, du, gu, _u, mu, vu, yu = "transform",
        Cu = yu + "Origin",
        xu = function (t) {
            var e = t.ownerDocument || t;
            !(yu in t.style) && "msTransform" in t.style && (Cu = (yu = "msTransform") + "Origin");
            for (; e.parentNode && (e = e.parentNode););
            if (pu = window, _u = new Mu, e) {
                fu = e, cu = e.documentElement, Du = e.body, (mu = fu.createElementNS("http://www.w3.org/2000/svg", "g")).style.transform = "none";
                var n = e.createElement("div"),
                    r = e.createElement("div");
                Du.appendChild(n), n.appendChild(r), n.style.position = "static", n.style[yu] = "translate3d(0,0,1px)", vu = r.offsetParent !== n, Du.removeChild(n)
            }
            return e
        },
        Fu = [],
        wu = [],
        Eu = function (t) {
            return t.ownerSVGElement || ("svg" === (t.tagName + "").toLowerCase() ? t : null)
        },
        Tu = function t(e, n) {
            if (e.parentNode && (fu || xu(e))) {
                var r = Eu(e),
                    i = r ? r.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml",
                    u = r ? n ? "rect" : "g" : "div",
                    s = 2 !== n ? 0 : 100,
                    o = 3 === n ? 100 : 0,
                    a = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                    l = fu.createElementNS ? fu.createElementNS(i.replace(/^https/, "http"), u) : fu.createElement(u);
                return n && (r ? (gu || (gu = t(e)), l.setAttribute("width", .01), l.setAttribute("height", .01), l.setAttribute("transform", "translate(" + s + "," + o + ")"), gu.appendChild(l)) : (du || ((du = t(e)).style.cssText = a), l.style.cssText = a + "width:0.1px;height:0.1px;top:" + o + "px;left:" + s + "px", du.appendChild(l))), l
            }
            throw "Need document and parent."
        },
        bu = function (t, e) {
            var n, r, i, u, s, o, a = Eu(t),
                l = t === a,
                h = a ? Fu : wu,
                f = t.parentNode;
            if (t === pu) return t;
            if (h.length || h.push(Tu(t, 1), Tu(t, 2), Tu(t, 3)), n = a ? gu : du, a) l ? (u = -(i = function (t) {
                var e, n = t.getCTM();
                return n || (e = t.style[yu], t.style[yu] = "none", t.appendChild(mu), n = mu.getCTM(), t.removeChild(mu), e ? t.style[yu] = e : t.style.removeProperty(yu.replace(/([A-Z])/g, "-$1").toLowerCase())), n || _u.clone()
            }(t)).e / i.a, s = -i.f / i.d, r = _u) : (i = t.getBBox(), u = (r = (r = t.transform ? t.transform.baseVal : {}).numberOfItems ? r.numberOfItems > 1 ? function (t) {
                for (var e = new Mu, n = 0; n < t.numberOfItems; n++) e.multiply(t.getItem(n).matrix);
                return e
            }(r) : r.getItem(0).matrix : _u).a * i.x + r.c * i.y, s = r.b * i.x + r.d * i.y), e && "g" === t.tagName.toLowerCase() && (u = s = 0), (l ? a : f).appendChild(n), n.setAttribute("transform", "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + (r.e + u) + "," + (r.f + s) + ")");
            else {
                if (u = s = 0, vu)
                    for (r = t.offsetParent, i = t; i && (i = i.parentNode) && i !== r && i.parentNode;)(pu.getComputedStyle(i)[yu] + "").length > 4 && (u = i.offsetLeft, s = i.offsetTop, i = 0);
                if ("absolute" !== (o = pu.getComputedStyle(t)).position && "fixed" !== o.position)
                    for (r = t.offsetParent; f && f !== r;) u += f.scrollLeft || 0, s += f.scrollTop || 0, f = f.parentNode;
                (i = n.style).top = t.offsetTop - s + "px", i.left = t.offsetLeft - u + "px", i[yu] = o[yu], i[Cu] = o[Cu], i.position = "fixed" === o.position ? "fixed" : "absolute", t.parentNode.appendChild(n)
            }
            return n
        },
        Au = function (t, e, n, r, i, u, s) {
            return t.a = e, t.b = n, t.c = r, t.d = i, t.e = u, t.f = s, t
        },
        Mu = function () {
            function t(t, e, n, r, i, u) {
                void 0 === t && (t = 1), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === r && (r = 1), void 0 === i && (i = 0), void 0 === u && (u = 0), Au(this, t, e, n, r, i, u)
            }
            var e = t.prototype;
            return e.inverse = function () {
                var t = this.a,
                    e = this.b,
                    n = this.c,
                    r = this.d,
                    i = this.e,
                    u = this.f,
                    s = t * r - e * n || 1e-10;
                return Au(this, r / s, -e / s, -n / s, t / s, (n * u - r * i) / s, -(t * u - e * i) / s)
            }, e.multiply = function (t) {
                var e = this.a,
                    n = this.b,
                    r = this.c,
                    i = this.d,
                    u = this.e,
                    s = this.f,
                    o = t.a,
                    a = t.c,
                    l = t.b,
                    h = t.d,
                    f = t.e,
                    p = t.f;
                return Au(this, o * e + l * r, o * n + l * i, a * e + h * r, a * n + h * i, u + f * e + p * r, s + f * n + p * i)
            }, e.clone = function () {
                return new t(this.a, this.b, this.c, this.d, this.e, this.f)
            }, e.equals = function (t) {
                var e = this.a,
                    n = this.b,
                    r = this.c,
                    i = this.d,
                    u = this.e,
                    s = this.f;
                return e === t.a && n === t.b && r === t.c && i === t.d && u === t.e && s === t.f
            }, e.apply = function (t, e) {
                void 0 === e && (e = {});
                var n = t.x,
                    r = t.y,
                    i = this.a,
                    u = this.b,
                    s = this.c,
                    o = this.d,
                    a = this.e,
                    l = this.f;
                return e.x = n * i + r * s + a || 0, e.y = n * u + r * o + l || 0, e
            }, t
        }();

    function Ou(t, e, n, r) {
        if (!t || !t.parentNode || (fu || xu(t)).documentElement === t) return new Mu;
        var i = function (t) {
                for (var e, n; t && t !== Du;)(n = t._gsap) && n.uncache && n.get(t, "x"), n && !n.scaleX && !n.scaleY && n.renderTransform && (n.scaleX = n.scaleY = 1e-4, n.renderTransform(1, n), e ? e.push(n) : e = [n]), t = t.parentNode;
                return e
            }(t),
            u = Eu(t) ? Fu : wu,
            s = bu(t, n),
            o = u[0].getBoundingClientRect(),
            a = u[1].getBoundingClientRect(),
            l = u[2].getBoundingClientRect(),
            h = s.parentNode,
            f = !r && function t(e) {
                return "fixed" === pu.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? t(e) : void 0)
            }(t),
            p = new Mu((a.left - o.left) / 100, (a.top - o.top) / 100, (l.left - o.left) / 100, (l.top - o.top) / 100, o.left + (f ? 0 : pu.pageXOffset || fu.scrollLeft || cu.scrollLeft || Du.scrollLeft || 0), o.top + (f ? 0 : pu.pageYOffset || fu.scrollTop || cu.scrollTop || Du.scrollTop || 0));
        if (h.removeChild(s), i)
            for (o = i.length; o--;)(a = i[o]).scaleX = a.scaleY = 0, a.renderTransform(1, a);
        return e ? p.inverse() : p
    }
    /*!
     * MotionPathPlugin 3.9.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Pu, Su, Bu, ku, Lu = "x,translateX,left,marginLeft,xPercent".split(","),
        Nu = "y,translateY,top,marginTop,yPercent".split(","),
        Ru = Math.PI / 180,
        Iu = function (t, e, n, r) {
            for (var i = e.length, u = 2 === r ? 0 : r, s = 0; s < i; s++) t[u] = parseFloat(e[s][n]), 2 === r && (t[u + 1] = 0), u += 2;
            return t
        },
        zu = function (t, e, n) {
            return parseFloat(t._gsap.get(t, e, n || "px")) || 0
        },
        Yu = function (t) {
            var e, n = t[0],
                r = t[1];
            for (e = 2; e < t.length; e += 2) n = t[e] += n, r = t[e + 1] += r
        },
        Xu = function (t, e, n, r, i, u, s, o, a) {
            "cubic" === s.type ? e = [e] : (!1 !== s.fromCurrent && e.unshift(zu(n, r, o), i ? zu(n, i, a) : 0), s.relative && Yu(e), e = [(i ? Fi : xi)(e, s.curviness)]);
            return e = u(qu(e, n, s)), Gu(t, n, r, e, "x", o), i && Gu(t, n, i, e, "y", a), di(e, s.resolution || (0 === s.curviness ? 20 : 12))
        },
        ju = function (t) {
            return t
        },
        Vu = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
        Uu = function (t, e, n) {
            var r, i = Ou(t),
                u = 0,
                s = 0;
            return "svg" === (t.tagName + "").toLowerCase() ? (r = t.viewBox.baseVal).width || (r = {
                width: +t.getAttribute("width"),
                height: +t.getAttribute("height")
            }) : r = e && t.getBBox && t.getBBox(), e && "auto" !== e && (u = e.push ? e[0] * (r ? r.width : t.offsetWidth || 0) : e.x, s = e.push ? e[1] * (r ? r.height : t.offsetHeight || 0) : e.y), n.apply(u || s ? i.apply({
                x: u,
                y: s
            }) : {
                x: i.e,
                y: i.f
            })
        },
        Wu = function (t, e, n, r) {
            var i, u = Ou(t.parentNode, !0, !0),
                s = u.clone().multiply(Ou(e)),
                o = Uu(t, n, u),
                a = Uu(e, r, u),
                l = a.x,
                h = a.y;
            return s.e = s.f = 0, "auto" === r && e.getTotalLength && "path" === e.tagName.toLowerCase() && (i = e.getAttribute("d").match(Vu) || [], l += (i = s.apply({
                x: +i[0],
                y: +i[1]
            })).x, h += i.y), (i || e.getBBox && t.getBBox && e.ownerSVGElement === t.ownerSVGElement) && (l -= (i = s.apply(e.getBBox())).x, h -= i.y), s.e = l - o.x, s.f = h - o.y, s
        },
        qu = function (t, e, n) {
            var r, i, u, s = n.align,
                o = n.matrix,
                a = n.offsetX,
                l = n.offsetY,
                h = n.alignOrigin,
                f = t[0][0],
                p = t[0][1],
                c = zu(e, "x"),
                D = zu(e, "y");
            return t && t.length ? (s && ("self" === s || (r = ku(s)[0] || e) === e ? vi(t, 1, 0, 0, 1, c - f, D - p) : (h && !1 !== h[2] ? Pu.set(e, {
                transformOrigin: 100 * h[0] + "% " + 100 * h[1] + "%"
            }) : h = [zu(e, "xPercent") / -100, zu(e, "yPercent") / -100], u = (i = Wu(e, r, h, "auto")).apply({
                x: f,
                y: p
            }), vi(t, i.a, i.b, i.c, i.d, c + i.e - (u.x - i.e), D + i.f - (u.y - i.f)))), o ? vi(t, o.a, o.b, o.c, o.d, o.e, o.f) : (a || l) && vi(t, 1, 0, 0, 1, a || 0, l || 0), t) : ai("M0,0L0,0")
        },
        Gu = function (t, e, n, r, i, u) {
            var s = e._gsap,
                o = s.harness,
                a = o && o.aliases && o.aliases[n],
                l = a && a.indexOf(",") < 0 ? a : n,
                h = t._pt = new Su(t._pt, e, l, 0, 0, ju, 0, s.set(e, l, t));
            h.u = Bu(s.get(e, l, u)) || 0, h.path = r, h.pp = i, t._props.push(l)
        },
        Hu = {
            version: "3.9.0",
            name: "motionPath",
            register: function (t, e, n) {
                Bu = (Pu = t).utils.getUnit, ku = Pu.utils.toArray, Su = n
            },
            init: function (t, e) {
                if (!Pu) return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"), !1;
                "object" == typeof e && !e.style && e.path || (e = {
                    path: e
                });
                var n, r, i, u, s = [],
                    o = e,
                    a = o.path,
                    l = o.autoRotate,
                    h = o.unitX,
                    f = o.unitY,
                    p = o.x,
                    c = o.y,
                    D = a[0],
                    d = (i = e.start, u = "end" in e ? e.end : 1, function (t) {
                        return i || 1 !== u ? ci(t, i, u) : t
                    });
                if (this.rawPaths = s, this.target = t, (this.rotate = l || 0 === l) && (this.rOffset = parseFloat(l) || 0, this.radians = !!e.useRadians, this.rProp = e.rotation || "rotation", this.rSet = t._gsap.set(t, this.rProp, this), this.ru = Bu(t._gsap.get(t, this.rProp)) || 0), Array.isArray(a) && !("closed" in a) && "number" != typeof D) {
                    for (r in D) !p && ~Lu.indexOf(r) ? p = r : !c && ~Nu.indexOf(r) && (c = r);
                    for (r in p && c ? s.push(Xu(this, Iu(Iu([], a, p, 0), a, c, 1), t, p, c, d, e, h || Bu(a[0][p]), f || Bu(a[0][c]))) : p = c = 0, D) r !== p && r !== c && s.push(Xu(this, Iu([], a, r, 2), t, r, 0, d, e, Bu(a[0][r])))
                } else di(n = d(qu(ai(e.path), t, e)), e.resolution), s.push(n), Gu(this, t, e.x || "x", n, "x", e.unitX || "px"), Gu(this, t, e.y || "y", n, "y", e.unitY || "px")
            },
            render: function (t, e) {
                var n = e.rawPaths,
                    r = n.length,
                    i = e._pt;
                for (t > 1 ? t = 1 : t < 0 && (t = 0); r--;) mi(n[r], t, !r && e.rotate, n[r]);
                for (; i;) i.set(i.t, i.p, i.path[i.pp] + i.u, i.d, t), i = i._next;
                e.rotate && e.rSet(e.target, e.rProp, n[0].angle * (e.radians ? Ru : 1) + e.rOffset + e.ru, e, t)
            },
            getLength: function (t) {
                return di(ai(t)).totalLength
            },
            sliceRawPath: ci,
            getRawPath: ai,
            pointsToSegment: Fi,
            stringToRawPath: Ci,
            rawPathToString: wi,
            transformRawPath: vi,
            getGlobalMatrix: Ou,
            getPositionOnPath: mi,
            cacheRawPathMeasurements: di,
            convertToPath: function (t, e) {
                return ku(t).map((function (t) {
                    return fi(t, !1 !== e)
                }))
            },
            convertCoordinates: function (t, e, n) {
                var r = Ou(e, !0, !0).multiply(Ou(t));
                return n ? r.apply(n) : r
            },
            getAlignMatrix: Wu,
            getRelativePosition: function (t, e, n, r) {
                var i = Wu(t, e, n, r);
                return {
                    x: i.e,
                    y: i.f
                }
            },
            arrayToRawPath: function (t, e) {
                var n = Iu(Iu([], t, (e = e || {}).x || "x", 0), t, e.y || "y", 1);
                return e.relative && Yu(n), ["cubic" === e.type ? n : Fi(n, e.curviness)]
            }
        };
    (Pu || "undefined" != typeof window && (Pu = window.gsap) && Pu.registerPlugin && Pu) && Pu.registerPlugin(Hu);
    /*!
     * ScrollToPlugin 3.9.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Qu, Ku, Zu, $u, Ju, ts, es, ns = function () {
            return "undefined" != typeof window
        },
        rs = function () {
            return Qu || ns() && (Qu = window.gsap) && Qu.registerPlugin && Qu
        },
        is = function (t) {
            return "string" == typeof t
        },
        us = function (t) {
            return "function" == typeof t
        },
        ss = function (t, e) {
            var n = "x" === e ? "Width" : "Height",
                r = "scroll" + n,
                i = "client" + n;
            return t === Zu || t === $u || t === Ju ? Math.max($u[r], Ju[r]) - (Zu["inner" + n] || $u[i] || Ju[i]) : t[r] - t["offset" + n]
        },
        os = function (t, e) {
            var n = "scroll" + ("x" === e ? "Left" : "Top");
            return t === Zu && (null != t.pageXOffset ? n = "page" + e.toUpperCase() + "Offset" : t = null != $u[n] ? $u : Ju),
                function () {
                    return t[n]
                }
        },
        as = function (t, e) {
            if (!(t = ts(t)[0]) || !t.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
                x: 0,
                y: 0
            };
            var n = t.getBoundingClientRect(),
                r = !e || e === Zu || e === Ju,
                i = r ? {
                    top: $u.clientTop - (Zu.pageYOffset || $u.scrollTop || Ju.scrollTop || 0),
                    left: $u.clientLeft - (Zu.pageXOffset || $u.scrollLeft || Ju.scrollLeft || 0)
                } : e.getBoundingClientRect(),
                u = {
                    x: n.left - i.left,
                    y: n.top - i.top
                };
            return !r && e && (u.x += os(e, "x")(), u.y += os(e, "y")()), u
        },
        ls = function (t, e, n, r, i) {
            return isNaN(t) || "object" == typeof t ? is(t) && "=" === t.charAt(1) ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + r - i : "max" === t ? ss(e, n) - i : Math.min(ss(e, n), as(t, e)[n] - i) : parseFloat(t) - i
        },
        hs = function () {
            Qu = rs(), ns() && Qu && document.body && (Zu = window, Ju = document.body, $u = document.documentElement, ts = Qu.utils.toArray, Qu.config({
                autoKillThreshold: 7
            }), es = Qu.config(), Ku = 1)
        },
        fs = {
            version: "3.9.0",
            name: "scrollTo",
            rawVars: 1,
            register: function (t) {
                Qu = t, hs()
            },
            init: function (t, e, n, r, i) {
                Ku || hs();
                var u = Qu.getProperty(t, "scrollSnapType");
                this.isWin = t === Zu, this.target = t, this.tween = n, e = function (t, e, n, r) {
                    if (us(t) && (t = t(e, n, r)), "object" != typeof t) return is(t) && "max" !== t && "=" !== t.charAt(1) ? {
                        x: t,
                        y: t
                    } : {
                        y: t
                    };
                    if (t.nodeType) return {
                        y: t,
                        x: t
                    };
                    var i, u = {};
                    for (i in t) u[i] = "onAutoKill" !== i && us(t[i]) ? t[i](e, n, r) : t[i];
                    return u
                }(e, r, t, i), this.vars = e, this.autoKill = !!e.autoKill, this.getX = os(t, "x"), this.getY = os(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), u && "none" !== u && (this.snap = 1, this.snapInline = t.style.scrollSnapType, t.style.scrollSnapType = "none"), null != e.x ? (this.add(this, "x", this.x, ls(e.x, t, "x", this.x, e.offsetX || 0), r, i), this._props.push("scrollTo_x")) : this.skipX = 1, null != e.y ? (this.add(this, "y", this.y, ls(e.y, t, "y", this.y, e.offsetY || 0), r, i), this._props.push("scrollTo_y")) : this.skipY = 1
            },
            render: function (t, e) {
                for (var n, r, i, u, s, o = e._pt, a = e.target, l = e.tween, h = e.autoKill, f = e.xPrev, p = e.yPrev, c = e.isWin, D = e.snap, d = e.snapInline; o;) o.r(t, o.d), o = o._next;
                n = c || !e.skipX ? e.getX() : f, i = (r = c || !e.skipY ? e.getY() : p) - p, u = n - f, s = es.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), h && (!e.skipX && (u > s || u < -s) && n < ss(a, "x") && (e.skipX = 1), !e.skipY && (i > s || i < -s) && r < ss(a, "y") && (e.skipY = 1), e.skipX && e.skipY && (l.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(l, e.vars.onAutoKillParams || []))), c ? Zu.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y) : (e.skipY || (a.scrollTop = e.y), e.skipX || (a.scrollLeft = e.x)), !D || 1 !== t && 0 !== t || (r = a.scrollTop, n = a.scrollLeft, d ? a.style.scrollSnapType = d : a.style.removeProperty("scroll-snap-type"), a.scrollTop = r + 1, a.scrollLeft = n + 1, a.scrollTop = r, a.scrollLeft = n), e.xPrev = e.x, e.yPrev = e.y
            },
            kill: function (t) {
                var e = "scrollTo" === t;
                (e || "scrollTo_x" === t) && (this.skipX = 1), (e || "scrollTo_y" === t) && (this.skipY = 1)
            }
        };
    fs.max = ss, fs.getOffset = as, fs.buildGetter = os, rs() && Qu.registerPlugin(fs);
    /*!
     * strings: 3.9.0
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var ps = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    /*!
     * SplitText: 3.9.0
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var cs, Ds, ds, gs, _s = /(?:\r|\n|\t\t)/g,
        ms = /(?:\s\s+)/g,
        vs = function (t) {
            return Ds.getComputedStyle(t)
        },
        ys = Array.isArray,
        Cs = [].slice,
        xs = function (t, e) {
            var n;
            return ys(t) ? t : "string" == (n = typeof t) && !e && t ? Cs.call(cs.querySelectorAll(t), 0) : t && "object" === n && "length" in t ? Cs.call(t, 0) : t ? [t] : []
        },
        Fs = function (t) {
            return "absolute" === t.position || !0 === t.absolute
        },
        ws = function (t, e) {
            for (var n, r = e.length; --r > -1;)
                if (n = e[r], t.substr(0, n.length) === n) return n.length
        },
        Es = function (t, e) {
            void 0 === t && (t = "");
            var n = ~t.indexOf("++"),
                r = 1;
            return n && (t = t.split("++").join("")),
                function () {
                    return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (n ? r++ : "") + "'>" : ">")
                }
        },
        Ts = function t(e, n, r) {
            var i = e.nodeType;
            if (1 === i || 9 === i || 11 === i)
                for (e = e.firstChild; e; e = e.nextSibling) t(e, n, r);
            else 3 !== i && 4 !== i || (e.nodeValue = e.nodeValue.split(n).join(r))
        },
        bs = function (t, e) {
            for (var n = e.length; --n > -1;) t.push(e[n])
        },
        As = function (t, e, n) {
            for (var r; t && t !== e;) {
                if (r = t._next || t.nextSibling) return r.textContent.charAt(0) === n;
                t = t.parentNode || t._parent
            }
        },
        Ms = function t(e) {
            var n, r, i = xs(e.childNodes),
                u = i.length;
            for (n = 0; n < u; n++)(r = i[n])._isSplit ? t(r) : n && r.previousSibling && 3 === r.previousSibling.nodeType ? (r.previousSibling.nodeValue += 3 === r.nodeType ? r.nodeValue : r.firstChild.nodeValue, e.removeChild(r)) : 3 !== r.nodeType && (e.insertBefore(r.firstChild, r), e.removeChild(r))
        },
        Os = function (t, e) {
            return parseFloat(e[t]) || 0
        },
        Ps = function (t, e, n, r, i, u, s) {
            var o, a, l, h, f, p, c, D, d, g, _, m, v = vs(t),
                y = Os("paddingLeft", v),
                C = -999,
                x = Os("borderBottomWidth", v) + Os("borderTopWidth", v),
                F = Os("borderLeftWidth", v) + Os("borderRightWidth", v),
                w = Os("paddingTop", v) + Os("paddingBottom", v),
                E = Os("paddingLeft", v) + Os("paddingRight", v),
                T = Os("fontSize", v) * (e.lineThreshold || .2),
                b = v.textAlign,
                A = [],
                M = [],
                O = [],
                P = e.wordDelimiter || " ",
                S = e.tag ? e.tag : e.span ? "span" : "div",
                B = e.type || e.split || "chars,words,lines",
                k = i && ~B.indexOf("lines") ? [] : null,
                L = ~B.indexOf("words"),
                N = ~B.indexOf("chars"),
                R = Fs(e),
                I = e.linesClass,
                z = ~(I || "").indexOf("++"),
                Y = [],
                X = "flex" === v.display,
                j = t.style.display;
            for (z && (I = I.split("++").join("")), X && (t.style.display = "block"), l = (a = t.getElementsByTagName("*")).length, f = [], o = 0; o < l; o++) f[o] = a[o];
            if (k || R)
                for (o = 0; o < l; o++)((p = (h = f[o]).parentNode === t) || R || N && !L) && (m = h.offsetTop, k && p && Math.abs(m - C) > T && ("BR" !== h.nodeName || 0 === o) && (c = [], k.push(c), C = m), R && (h._x = h.offsetLeft, h._y = m, h._w = h.offsetWidth, h._h = h.offsetHeight), k && ((h._isSplit && p || !N && p || L && p || !L && h.parentNode.parentNode === t && !h.parentNode._isSplit) && (c.push(h), h._x -= y, As(h, t, P) && (h._wordEnd = !0)), "BR" === h.nodeName && (h.nextSibling && "BR" === h.nextSibling.nodeName || 0 === o) && k.push([])));
            for (o = 0; o < l; o++)
                if (p = (h = f[o]).parentNode === t, "BR" !== h.nodeName)
                    if (R && (d = h.style, L || p || (h._x += h.parentNode._x, h._y += h.parentNode._y), d.left = h._x + "px", d.top = h._y + "px", d.position = "absolute", d.display = "block", d.width = h._w + 1 + "px", d.height = h._h + "px"), !L && N)
                        if (h._isSplit)
                            for (h._next = a = h.nextSibling, h.parentNode.appendChild(h); a && 3 === a.nodeType && " " === a.textContent;) h._next = a.nextSibling, h.parentNode.appendChild(a), a = a.nextSibling;
                        else h.parentNode._isSplit ? (h._parent = h.parentNode, !h.previousSibling && h.firstChild && (h.firstChild._isFirst = !0), h.nextSibling && " " === h.nextSibling.textContent && !h.nextSibling.nextSibling && Y.push(h.nextSibling), h._next = h.nextSibling && h.nextSibling._isFirst ? null : h.nextSibling, h.parentNode.removeChild(h), f.splice(o--, 1), l--) : p || (m = !h.nextSibling && As(h.parentNode, t, P), h.parentNode._parent && h.parentNode._parent.appendChild(h), m && h.parentNode.appendChild(cs.createTextNode(" ")), "span" === S && (h.style.display = "inline"), A.push(h));
            else h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML ? M.push(h) : N && !h._isSplit && ("span" === S && (h.style.display = "inline"), A.push(h));
            else k || R ? (h.parentNode && h.parentNode.removeChild(h), f.splice(o--, 1), l--) : L || t.appendChild(h);
            for (o = Y.length; --o > -1;) Y[o].parentNode.removeChild(Y[o]);
            if (k) {
                for (R && (g = cs.createElement(S), t.appendChild(g), _ = g.offsetWidth + "px", m = g.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(g)), d = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (D = " " === P && (!R || !L && !N), o = 0; o < k.length; o++) {
                    for (c = k[o], (g = cs.createElement(S)).style.cssText = "display:block;text-align:" + b + ";position:" + (R ? "absolute;" : "relative;"), I && (g.className = I + (z ? o + 1 : "")), O.push(g), l = c.length, a = 0; a < l; a++) "BR" !== c[a].nodeName && (h = c[a], g.appendChild(h), D && h._wordEnd && g.appendChild(cs.createTextNode(" ")), R && (0 === a && (g.style.top = h._y + "px", g.style.left = y + m + "px"), h.style.top = "0px", m && (h.style.left = h._x - m + "px")));
                    0 === l ? g.innerHTML = "&nbsp;" : L || N || (Ms(g), Ts(g, String.fromCharCode(160), " ")), R && (g.style.width = _, g.style.height = h._h + "px"), t.appendChild(g)
                }
                t.style.cssText = d
            }
            R && (s > t.clientHeight && (t.style.height = s - w + "px", t.clientHeight < s && (t.style.height = s + x + "px")), u > t.clientWidth && (t.style.width = u - E + "px", t.clientWidth < u && (t.style.width = u + F + "px"))), X && (j ? t.style.display = j : t.style.removeProperty("display")), bs(n, A), L && bs(r, M), bs(i, O)
        },
        Ss = function (t, e, n, r) {
            var i, u, s, o, a, l, h, f, p = e.tag ? e.tag : e.span ? "span" : "div",
                c = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
                D = Fs(e),
                d = e.wordDelimiter || " ",
                g = " " !== d ? "" : D ? "&#173; " : " ",
                _ = "</" + p + ">",
                m = 1,
                v = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : ws : null,
                y = cs.createElement("div"),
                C = t.parentNode;
            for (C.insertBefore(y, t), y.textContent = t.nodeValue, C.removeChild(t), h = -1 !== (i = function t(e) {
                    var n = e.nodeType,
                        r = "";
                    if (1 === n || 9 === n || 11 === n) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) r += t(e)
                    } else if (3 === n || 4 === n) return e.nodeValue;
                    return r
                }(t = y)).indexOf("<"), !1 !== e.reduceWhiteSpace && (i = i.replace(ms, " ").replace(_s, "")), h && (i = i.split("<").join("{{LT}}")), a = i.length, u = (" " === i.charAt(0) ? g : "") + n(), s = 0; s < a; s++)
                if (l = i.charAt(s), v && (f = v(i.substr(s), e.specialChars))) l = i.substr(s, f || 1), u += c && " " !== l ? r() + l + "</" + p + ">" : l, s += f - 1;
                else if (l === d && i.charAt(s - 1) !== d && s) {
                for (u += m ? _ : "", m = 0; i.charAt(s + 1) === d;) u += g, s++;
                s === a - 1 ? u += g : ")" !== i.charAt(s + 1) && (u += g + n(), m = 1)
            } else "{" === l && "{{LT}}" === i.substr(s, 6) ? (u += c ? r() + "{{LT}}</" + p + ">" : "{{LT}}", s += 5) : l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319 || i.charCodeAt(s + 1) >= 65024 && i.charCodeAt(s + 1) <= 65039 ? (o = ((i.substr(s, 12).split(ps) || [])[1] || "").length || 2, u += c && " " !== l ? r() + i.substr(s, o) + "</" + p + ">" : i.substr(s, o), s += o - 1) : u += c && " " !== l ? r() + l + "</" + p + ">" : l;
            t.outerHTML = u + (m ? _ : ""), h && Ts(C, "{{LT}}", "<")
        },
        Bs = function t(e, n, r, i) {
            var u, s, o = xs(e.childNodes),
                a = o.length,
                l = Fs(n);
            if (3 !== e.nodeType || a > 1) {
                for (n.absolute = !1, u = 0; u < a; u++)(s = o[u])._next = s._isFirst = s._parent = s._wordEnd = null, (3 !== s.nodeType || /\S+/.test(s.nodeValue)) && (l && 3 !== s.nodeType && "inline" === vs(s).display && (s.style.display = "inline-block", s.style.position = "relative"), s._isSplit = !0, t(s, n, r, i));
                return n.absolute = l, void(e._isSplit = !0)
            }
            Ss(e, n, r, i)
        },
        ks = function () {
            function t(t, e) {
                ds || (cs = document, Ds = window, ds = 1), this.elements = xs(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
            }
            var e = t.prototype;
            return e.split = function (t) {
                this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var e, n, r, i = this.elements.length, u = t.tag ? t.tag : t.span ? "span" : "div", s = Es(t.wordsClass, u), o = Es(t.charsClass, u); --i > -1;) r = this.elements[i], this._originals[i] = r.innerHTML, e = r.clientHeight, n = r.clientWidth, Bs(r, t, s, o), Ps(r, t, this.chars, this.words, this.lines, n, e);
                return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
            }, e.revert = function () {
                var t = this._originals;
                if (!t) throw "revert() call wasn't scoped properly.";
                return this.elements.forEach((function (e, n) {
                    return e.innerHTML = t[n]
                })), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
            }, t.create = function (e, n) {
                return new t(e, n)
            }, t
        }();
    ks.version = "3.9.0", Br.registerPlugin(Je, kr, Ve, Ve, zr, Bi, Vi, hu, Hu, fs, Mr);
    var Ls = gs = window.punchgs = window.tpGS = {};
    for (var Ns in Ls.gsap = Br, Ls.TweenLite = Je, Ls.TweenMax = kr, Ls.TimelineLite = Ve, Ls.TimelineMax = Ve, Ls.CustomBounce = zr, Ls.CustomEase = Bi, Ls.CustomWiggle = Vi, Ls.DrawSVGPlugin = hu, Ls.MotionPathPlugin = Hu, Ls.ScrollToPlugin = fs, Ls.CSSPlugin = Mr,
            /*! Map SplitText to tpGS TPGSSPLITTEXT */
            Ls.SplitText = ks, Ls.RAD2DEG = 180 / Math.PI, Ls.DEG2RAD = Math.PI / 180,
            /*! REGISTER MOTION PATH (BEZIER) */
            Ls.gsap.registerPlugin(Ls.MotionPathPlugin), Ls.gsap.config({
                nullTargetWarn: !1
            }),
            /*!FallBack for old and new Eases*/
            Ls.eases = Ls.gsap.parseEase(), Ls.eases) Ls.eases.hasOwnProperty(Ns) && void 0 === Ls[Ns] && (Ls[Ns] = Ls.eases[Ns])
    /*! FallBack for Essential Grid */
    ;
    void 0 !== gs && void 0 !== gs.TweenLite && void 0 === gs.TweenLite.lagSmoothing && (gs.TweenLite.lagSmoothing = function () {});
    var Rs = [];

    function Is(t, e, n) {
        var r = document.createElement("canvas"),
            i = r.getContext("2d");
        if (r.width = 100, r.height = 200, 0 === t.length) i.fillStyle = n;
        else {
            for (var u = i.createLinearGradient(0, 0, 100, 0), s = 0; s < t.length; s++) u.addColorStop(t[s].stop / 100, t[s].color);
            i.fillStyle = u
        }
        i.fillRect(0, 0, 100, 200);
        var o = i.getImageData(0, 0, 100, 2).data,
            a = "";
        for (s = 0; s < e.length; s++) {
            var l = Math.ceil(e[s]),
                h = 4 * (0 !== l ? l - 1 : l);
            a += "rgba(" + o[h] + "," + o[h + 1] + "," + o[h + 2] + "," + o[h + 3] / 255 + ")", a += " " + l + (e.length - 1 === s ? "%" : "%,")
        }
        return r.remove(), a
    }

    function zs(t, e, n, r) {
        for (var i = "", u = Ls.gsap.utils.mapRange(0, r.length - 1, 0, t.length - 1), s = 0; s < r.length; s++) {
            var o = Math.round(u(s));
            i += t[o].color, i += " " + t[o].stop + (r.length - 1 === s ? "%" : "%,")
        }
        return i
    }

    function Ys(t) {
        var e = /rgb([\s\S]*?)%/g,
            n = [],
            r = [],
            i = [];
        do {
            (s = e.exec(t)) && n.push(s[0])
        } while (s);
        for (var u = 0; u < n.length; u++) {
            var s = n[u],
                o = (t = /rgb([\s\S]*?)\)/.exec(s), /\)([\s\S]*?)%/.exec(s));
            t[0] && (t = t[0]), o[1] && (o = o[1]), i.push(parseFloat(o)), r.push({
                color: t,
                stop: parseFloat(o)
            })
        }
        return 0 === r.length && (r.push({
            color: t,
            stop: 0
        }), i.push(0), r.push({
            color: t,
            stop: 100
        }), i.push(100)), {
            points: r,
            stops: i
        }
    }
    Ls.getSSGColors = function (t, e, n) {
        if (n = void 0 === n ? "fading" : n, -1 === t.indexOf("gradient") && -1 === e.indexOf("gradient")) return {
            from: t,
            to: e
        };
        for (var r = {
                from: t,
                to: e
            }, i = 0; i < Rs.length; i++) {
            if (Rs[i].from === t && Rs[i].to === e && Rs[i].type === n) return {
                from: Rs[i].rFrom,
                to: Rs[i].rTo
            };
            if (Rs[i].from === e && Rs[i].to === t && Rs[i].type === n) return {
                from: Rs[i].rTo,
                to: Rs[i].rFrom
            }
        }
        var u = Ys(t),
            s = Ys(e);
        if (u.stops.length === s.stops.length && -1 !== t.indexOf("gradient") && -1 !== e.indexOf("gradient")) return {
            from: t,
            to: e
        };
        var o, a, l = u.stops;
        for (i = 0; i < s.stops.length; i++) - 1 === l.indexOf(s.stops[i]) && l.push(s.stops[i]);
        if (l.sort((function (t, e) {
                return t - e
            })), -1 !== t.indexOf("gradient(")) {
            var h = -1 !== t.indexOf("deg,") ? t.indexOf("deg,") + 4 : -1 !== t.indexOf("at center,") ? t.indexOf("at center,") + 10 : t.indexOf("gradient(") + 9;
            o = t.substring(0, h), -1 === e.indexOf("gradient(") && (a = t.substring(0, h))
        }
        if (-1 !== e.indexOf("gradient(")) {
            h = -1 !== e.indexOf("deg,") ? e.indexOf("deg,") + 4 : -1 !== e.indexOf("at center,") ? e.indexOf("at center,") + 10 : e.indexOf("gradient(") + 9;
            a = e.substring(0, h), -1 === t.indexOf("gradient(") && (o = e.substring(0, h))
        }
        return "fading" === n ? (u.stops.length, s.stops.length, o += Is(u.points, l, t), a += Is(s.points, l, e)) : "sliding" === n && (u.stops.length > s.stops.length ? a += zs(s.points, l, e, u.points) : o += zs(u.points, l, t, s.points)), o += ")", a += ")", "sliding" === n && (u.stops.length > s.stops.length ? o = t : a = e), r.rFrom = o, r.rTo = a, r.tyep = n, Rs.push(r), {
            from: o,
            to: a
        }
    }
}]);

window.RS_MODULES = window.RS_MODULES || {};
window.RS_MODULES.tpGS = {
    loaded: true,
    version: "6.5.18"
};
if (window.RS_MODULES.checkMinimal) window.RS_MODULES.checkMinimal();