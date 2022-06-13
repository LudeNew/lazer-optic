(() => {
    var e, t = {
            716: (e, t, n) => {
                "use strict";
                n.r(t);
                var o = n(273),
                    i = {};
                for (const e in o) "default" !== e && (i[e] = () => o[e]);
                n.d(t, i)
            },
            273: e => {
                e.exports = {
                    "xl-min": "(min-width: 1640px)",
                    "lg-only": "(min-width: 1260px) and (max-width: 1639px)",
                    "lg-max": "(max-width: 1639px)",
                    "lg-min": "(min-width: 1260px)",
                    "md-only": "(min-width: 992px) and (max-width: 1259px)",
                    "md-max": "(max-width: 1259px)",
                    "md-min": "(min-width: 992px)",
                    "sm-only": "(min-width: 768px) and (max-width: 991px)",
                    "sm-max": "(max-width: 991px)",
                    "sm-min": "(min-width: 768px)",
                    "xs-only": "(min-width: 425px) and (max-width: 767px)",
                    "xs-max": "(max-width: 767px)",
                    "xs-min": "(min-width: 425px)",
                    "xxs-max": "(max-width: 424px)"
                }
            },
            448: () => {},
            413: (e, t, n) => {
                "use strict";
                n(601);
                var o = n(205),
                    i = n(296),
                    r = n(403),
                    c = n(967);

                function a(e) {
                    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, a(e)
                }

                function s(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }

                function l(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                var u = function() {
                    function e(t, n) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var o = JSON.parse(t.getAttribute("data-js") || "{}");
                        !o[n] && (o[n] = {}), o[n].id = (0, c.x0)(), t.setAttribute("data-js", JSON.stringify(o)), this.className = n, this.domElem = t, this.params = o[n], this._modCache = {}, this.constructor.instances[this.params.id] = this, this.setMod("js", "inited")
                    }
                    var t, n, o;
                    return t = e, n = [{
                        key: "getElemNode",
                        value: function(t) {
                            return this.domElem.querySelector(".".concat(this.constructor.className).concat(e.ELEM_DELIM).concat(t))
                        }
                    }, {
                        key: "getElemsNode",
                        value: function(t) {
                            return this.domElem.querySelectorAll(".".concat(this.constructor.className).concat(e.ELEM_DELIM).concat(t))
                        }
                    }, {
                        key: "getId",
                        value: function() {
                            return this.params.id
                        }
                    }, {
                        key: "getMod",
                        value: function(e) {
                            var t = this._modCache;
                            return e in t ? t[e] || "" : t[e] = this._extractModVal(e)
                        }
                    }, {
                        key: "delMod",
                        value: function(e) {
                            this.setMod(e, !1)
                        }
                    }, {
                        key: "setMod",
                        value: function(t, n) {
                            var o = a(n),
                                i = this.className,
                                r = i + e.MOD_DELIM + t,
                                c = this.getMod(t);
                            if ("undefined" === o ? n = !0 : "boolean" === o ? !1 === n && (n = "") : "" !== (n = n.toString()) && (r += e.MOD_DELIM + n), c != n) {
                                if (c) {
                                    var s = "boolean" == typeof c;
                                    "" === n ? !s && (r += e.MOD_DELIM + c) : this.domElem.classList.remove(i + e.MOD_DELIM + t + (s ? "" : e.MOD_DELIM + c))
                                }
                                return this.domElem.classList[n ? "add" : "remove"](r), this._modCache[t] = n, this._emit("modChange", {
                                    modName: t,
                                    modVal: n,
                                    oldModVal: c
                                }), this
                            }
                        }
                    }, {
                        key: "hasMod",
                        value: function(e, t) {
                            var n = a(t),
                                o = this.className + "_" + e;
                            return "undefined" === n ? t = !0 : "boolean" === n ? !1 === t && (t = "") : o += "_" + (t = t.toString()), this.domElem.classList.contains(o)
                        }
                    }, {
                        key: "toggleMod",
                        value: function(e) {
                            this.setMod(e, !this.hasMod(e))
                        }
                    }, {
                        key: "_extractModVal",
                        value: function(e) {
                            var t, n = this.domElem;
                            return n && (t = n.className.match(this._buildModValRE(e))), t ? t[2] || !0 : ""
                        }
                    }, {
                        key: "_buildModValRE",
                        value: function(t) {
                            return new RegExp("(\\s|^)" + this._buildModClassNamePrefix(t) + "(?:" + e.MOD_DELIM + "(" + e.NAME_PATTERN + "))?(?=\\s|$)")
                        }
                    }, {
                        key: "_buildModClassNamePrefix",
                        value: function(t) {
                            return this.getEntityName() + e.MOD_DELIM + t
                        }
                    }, {
                        key: "getEntityName",
                        value: function() {
                            return this.className
                        }
                    }, {
                        key: "_emit",
                        value: function(e, t) {
                            var n = t || {};
                            !n.target && (n.target = this), this.domElem.dispatchEvent(new CustomEvent(e, {
                                detail: n,
                                bubbles: !0,
                                cancelable: !0
                            }))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e = this.constructor.instances;
                            for (var t in e) e.hasOwnProperty(t) && e[t] == this && delete e[t];
                            this.delMod("js", "inited")
                        }
                    }], o = [{
                        key: "getInstance",
                        value: function(e) {
                            var t = this.prototype.constructor.instances;
                            return e ? t[(JSON.parse(e.getAttribute("data-js") || "{}")[this.prototype.constructor.className] || {}).id] : null
                        }
                    }, {
                        key: "getInstanceCollection",
                        value: function(e) {
                            return Array.prototype.map.call(e, (function(e) {
                                return this.getInstance(e)
                            }), this)
                        }
                    }], n && s(t.prototype, n), o && s(t, o), e
                }();
                l(u, "MOD_DELIM", "_"), l(u, "ELEM_DELIM", "__"), l(u, "NAME_PATTERN", "[a-zA-Z0-9-]+");
                var f = n(716),
                    d = function() {
                        var e = "breakpoints",
                            t = document.querySelector(".".concat(e)),
                            n = {},
                            o = {},
                            i = ["xl-min", "lg-only", "lg-max", "lg-min", "md-only", "md-max", "md-min", "sm-only", "sm-max", "sm-min", "xs-max"];

                        function r(n, o) {
                            t.classList[o ? "add" : "remove"]("".concat(e, "_").concat(n))
                        }

                        function c() {
                            o = i.reduce((function(e, t) {
                                return e[t] = !!(n[t] || {}).matches, r(t, e[t]), e
                            }), {});
                            var e = new CustomEvent("mediaChange", {
                                detail: {
                                    matches: o
                                }
                            });
                            t.dispatchEvent(e)
                        }
                        return {
                            domElem: t,
                            getMatches: function() {
                                return o
                            },
                            init: function() {
                                if (!t) throw "Breakpoints: not found element .".concat(e);
                                i.forEach((function(e) {
                                    var t = f[e];
                                    if (t) {
                                        var i = n[e] = window.matchMedia(t);
                                        o[e] = i.matches, r(e, i.matches), i.addEventListener ? i.addEventListener("change", c) : i.addListener(c)
                                    }
                                }))
                            }
                        }
                    }();

                function h(e) {
                    return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, h(e)
                }

                function p(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }

                function y(e, t) {
                    return y = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, y(e, t)
                }

                function m(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, o = g(e);
                        if (t) {
                            var i = g(this).constructor;
                            n = Reflect.construct(o, arguments, i)
                        } else n = o.apply(this, arguments);
                        return _(this, n)
                    }
                }

                function _(e, t) {
                    if (t && ("object" === h(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return v(e)
                }

                function v(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function g(e) {
                    return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, g(e)
                }

                function b(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                d.init(), o.Z.use([i.Z, r.Z]);
                var E, w, S, k = "carousel",
                    L = k + u.ELEM_DELIM,
                    C = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && y(e, t)
                        }(c, e);
                        var t, n, i, r = m(c);

                        function c(e) {
                            var t;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, c), (t = r.call(this, e, k))._activeIndex = -1, t._items = t.getElemsNode("item"), t._inner = t.getElemNode("inner"), t._container = t.getElemNode("container"), t._counter = t.getElemNode("counter-val"), t._length = t.getElemNode("length");
                            var n, o, i, a = t.params.mq;
                            return a ? (d.getMatches()[a] && t._initSwiper(), d.domElem.addEventListener("mediaChange", (n = t._onMediaChange.bind(v(t)), o = 200, function() {
                                var e = arguments,
                                    t = this;
                                clearTimeout(i), i = setTimeout((function() {
                                    return n.apply(t, e)
                                }), o)
                            }))) : t._initSwiper(), t
                        }
                        return t = c, n = [{
                            key: "getActiveIndex",
                            value: function() {
                                return this._swiper.activeIndex
                            }
                        }, {
                            key: "update",
                            value: function() {
                                this._swiper.update()
                            }
                        }, {
                            key: "_updateConter",
                            value: function() {
                                var e = function(e) {
                                    return e > 9 ? e : "0" + e
                                };
                                this._counter && (this._counter.textContent = e(this._swiper.activeIndex + 1)), this._length && (this._length.textContent = e(this._items.length))
                            }
                        }, {
                            key: "_getOptions",
                            value: function() {
                                var e = this.params.options;
                                return e.pagination && (e.pagination = this._getPaginationOptions()), e.navigation && (e.navigation = this._getNavigationOptions()), e
                            }
                        }, {
                            key: "_getPaginationOptions",
                            value: function() {
                                return {
                                    el: this.domElem.querySelector(".".concat(L, "dot-group")),
                                    bulletClass: "".concat(L, "dot"),
                                    bulletActiveClass: "".concat(L, "dot_active"),
                                    modifierClass: "".concat(L, "dot_"),
                                    currentClass: "".concat(L, "dot_current"),
                                    totalClass: "".concat(L, "dot_total"),
                                    hiddenClass: "".concat(L, "dot_hidden"),
                                    clickable: !0
                                }
                            }
                        }, {
                            key: "_getNavigationOptions",
                            value: function() {
                                var e = document.querySelector(".img-gallery"),
                                    t = e || this.domElem;
                                return {
                                    nextEl: t.querySelector(".".concat(L, "arrow_dir_next")),
                                    prevEl: t.querySelector(".".concat(L, "arrow_dir_prev")),
                                    disabledClass: "".concat(L, "arrow_disabled"),
                                    hiddenClass: "".concat(L, "arrow_hidden")
                                }
                            }
                        }, {
                            key: "_onMediaChange",
                            value: function(e) {
                                var t = this.hasMod("lib", "inited");
                                e.detail.matches[this.params.mq] ? t || this._initSwiper() : t && this._destroySwiper()
                            }
                        }, {
                            key: "_initSwiper",
                            value: function() {
                                this._toggleSwiperClasses(!0), (this._swiper = new o.Z(this._container ? this._container : this.domElem, Object.assign(this._getOptions(), {
                                    init: !1,
                                    on: {
                                        init: this._onInit.bind(this),
                                        destroy: this._onDestroy.bind(this)
                                    }
                                }))).init()
                            }
                        }, {
                            key: "_destroySwiper",
                            value: function(e, t) {
                                this._swiper.destroy(void 0 === e || e, void 0 === t || t)
                            }
                        }, {
                            key: "_onInit",
                            value: function() {
                                this._swiper.on("slideChangeTransitionStart", this._onBeforeChange.bind(this)), this._swiper.on("slideChangeTransitionEnd", this._onChange.bind(this)), this._swiper.on("touchStart", this._onTouchStart.bind(this)), this._swiper.on("touchMove", this._onTouchMove.bind(this)), this._swiper.on("touchEnd", this._onTouchEnd.bind(this)), this._updateConter(), this.setMod("lib", "inited")
                            }
                        }, {
                            key: "_toggleSwiperClasses",
                            value: function(e) {
                                var t = e ? "add" : "remove",
                                    n = this._container;
                                (n || this.domElem).classList[t]("swiper-container"), this.setMod("non-interacting", e), this._inner.classList[t]("swiper-wrapper"), this._items.forEach((function(e) {
                                    return e.classList[t]("swiper-slide")
                                }))
                            }
                        }, {
                            key: "_onDestroy",
                            value: function() {
                                this._toggleSwiperClasses(!1), this.delMod("lib", "inited")
                            }
                        }, {
                            key: "_onBeforeChange",
                            value: function() {
                                this.delMod("non-interacting")
                            }
                        }, {
                            key: "_onChange",
                            value: function() {
                                this._updateConter()
                            }
                        }, {
                            key: "_onTouchStart",
                            value: function() {}
                        }, {
                            key: "_onTouchMove",
                            value: function() {}
                        }, {
                            key: "_onTouchEnd",
                            value: function() {}
                        }], n && p(t.prototype, n), i && p(t, i), c
                    }(u);

                function x(e) {
                    return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, x(e)
                }

                function O(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }

                function A(e, t) {
                    return A = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, A(e, t)
                }

                function M(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, o = q(e);
                        if (t) {
                            var i = q(this).constructor;
                            n = Reflect.construct(o, arguments, i)
                        } else n = o.apply(this, arguments);
                        return j(this, n)
                    }
                }

                function j(e, t) {
                    if (t && ("object" === x(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return Z(e)
                }

                function Z(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function q(e) {
                    return q = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, q(e)
                }

                function N(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                b(C, "className", k), b(C, "instances", {}), document.querySelectorAll(".".concat(C.className)).forEach((function(e) {
                    return new C(e)
                })), document.querySelector(".open-menu").addEventListener("scroll", (function() {
                    var e = document.querySelector(".header__inner");
                    document.querySelector(".open-menu__row").getBoundingClientRect().top < 50 ? e.classList.add("hide") : e.classList.remove("hide")
                })), document.querySelector(".header__sandwich") && (E = document.querySelector(".header__sandwich"), w = document.querySelector(".open-menu"), S = document.querySelector(".header_color_white"), E.onclick = function() {
                    w.classList.toggle("view"), document.querySelector(".page__body").classList.toggle("view"), S && document.querySelector(".header").classList.toggle("header_color_white")
                });
                var P = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && A(e, t)
                    }(r, e);
                    var t, n, o, i = M(r);

                    function r(e, t) {
                        var n;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), (n = i.call(this, e, t))._val = e.value, e.addEventListener("change", n._onInput.bind(Z(n))), e.addEventListener("input", n._onInput.bind(Z(n))), n
                    }
                    return t = r, (n = [{
                        key: "_onInput",
                        value: function(e) {
                            (e.detail || {}).target == this || e.stopPropagation(), this.setVal(this.domElem.value)
                        }
                    }, {
                        key: "setVal",
                        value: function(e) {
                            return void 0 === e || (e = String(e)), this._val !== e && (this._val = e, this.domElem.value !== e && (this.domElem.value = e), this._emit("change")), this
                        }
                    }, {
                        key: "getVal",
                        value: function() {
                            return this._val
                        }
                    }, {
                        key: "getName",
                        value: function() {
                            return this.domElem.getAttribute("name")
                        }
                    }]) && O(t.prototype, n), o && O(t, o), r
                }(u);

                function R(e) {
                    return R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, R(e)
                }

                function I(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }

                function B(e, t) {
                    return B = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, B(e, t)
                }

                function T(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, o = V(e);
                        if (t) {
                            var i = V(this).constructor;
                            n = Reflect.construct(o, arguments, i)
                        } else n = o.apply(this, arguments);
                        return D(this, n)
                    }
                }

                function D(e, t) {
                    if (t && ("object" === R(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }

                function V(e) {
                    return V = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, V(e)
                }

                function F(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                N(P, "className", "input"), N(P, "instances", {}), document.querySelectorAll(".".concat(P.className)).forEach((function(e) {
                    return new P(e, P.className)
                }));
                var H = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && B(e, t)
                    }(n, e);
                    var t = T(n);

                    function n() {
                        return I(this, n), t.apply(this, arguments)
                    }
                    return n
                }(P);
                F(H, "className", "textarea"), F(H, "instances", {}), document.querySelectorAll(".".concat(H.className)).forEach((function(e) {
                    return new H(e, H.className)
                }));
                var z = n(847);

                function W(e) {
                    return W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, W(e)
                }

                function X(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }

                function G(e, t) {
                    return G = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, G(e, t)
                }

                function J(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, o = Y(e);
                        if (t) {
                            var i = Y(this).constructor;
                            n = Reflect.construct(o, arguments, i)
                        } else n = o.apply(this, arguments);
                        return U(this, n)
                    }
                }

                function U(e, t) {
                    if (t && ("object" === W(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }

                function Y(e) {
                    return Y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, Y(e)
                }

                function $(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                var K = {
                        onShow: function(e) {
                            Q.getInstance(e)._onShow()
                        },
                        onClose: function(e) {
                            Q.getInstance(e)._onClose()
                        },
                        openTrigger: "data-modal-open",
                        closeTrigger: "data-modal-close",
                        openClass: "modal_visible",
                        disableScroll: !0,
                        disableFocus: !1,
                        awaitOpenAnimation: !0,
                        awaitCloseAnimation: !0,
                        debugMode: !1
                    },
                    Q = function(e) {
                        ! function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && G(e, t)
                        }(r, e);
                        var t, n, o, i = J(r);

                        function r(e) {
                            var t;
                            ! function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, r);
                            var n = r.className;
                            return (t = i.call(this, e, n))._isAttachedToScope = !1, t
                        }
                        return t = r, (n = [{
                            key: "_getTitleElem",
                            value: function() {
                                return this._title || (this._title = this.getElemNode("title"))
                            }
                        }, {
                            key: "_getContentElem",
                            value: function() {
                                return this._content || (this._content = this.getElemNode("content"))
                            }
                        }, {
                            key: "setContent",
                            value: function(e) {
                                var t = (e || {}).title,
                                    n = (e || {}).content;
                                return void 0 !== t && (this._getTitleElem().innerHTML = t), void 0 !== n && (this._getContentElem().innerHTML = n), this
                            }
                        }, {
                            key: "show",
                            value: function() {
                                return z.Z.show(this.domElem.id, Object.assign(K, {
                                    onShow: this._onShow.bind(this),
                                    onClose: this._onClose.bind(this)
                                })), this
                            }
                        }, {
                            key: "close",
                            value: function() {
                                return z.Z.close(this.domElem.id), this
                            }
                        }, {
                            key: "_onShow",
                            value: function() {
                                this._isAttachedToScope || (document.querySelector("body").append(this.domElem), this._isAttachedToScope = !0), this._emit("open")
                            }
                        }, {
                            key: "_onClose",
                            value: function() {
                                this._emit("close")
                            }
                        }]) && X(t.prototype, n), o && X(t, o), r
                    }(u);
                $(Q, "className", "modal"), $(Q, "instances", {}), document.querySelectorAll(".".concat(Q.className)).forEach((function(e) {
                    return new Q(e)
                })), z.Z.init(K);
                const ee = Q.getInstance(document.querySelector(".notification"));
                var te = {
                    title: "",
                    content: ""
                };
                var ne = {
                    get: function(e) {
                        return "error" === e ? {
                            title: "Ошибка",
                            content: "<p>При отправке произошла ошибка, обратитесь к администратору сайта или попробуйте отправить форму снова.</p>"
                        } : te
                    }
                };

                function oe(e) {
                    return oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, oe(e)
                }

                function ie(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }

                function re(e, t) {
                    return re = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, re(e, t)
                }

                function ce(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, o = le(e);
                        if (t) {
                            var i = le(this).constructor;
                            n = Reflect.construct(o, arguments, i)
                        } else n = o.apply(this, arguments);
                        return ae(this, n)
                    }
                }

                function ae(e, t) {
                    if (t && ("object" === oe(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return se(e)
                }

                function se(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function le(e) {
                    return le = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, le(e)
                }

                function ue(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                var fe = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && re(e, t)
                    }(r, e);
                    var t, n, o, i = ce(r);

                    function r(e) {
                        var t;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r);
                        var n = r.className;
                        return (t = i.call(this, e, n))._url = new URL(t.params.url || window.location), t._controls = t.getElemsNode("control"), t._container = t.getElemNode("container"), t._controls.forEach((function(e) {
                            return e.addEventListener("change", t._onChange.bind(se(t)))
                        })), t
                    }
                    return t = r, (n = [{
                        key: "_onChange",
                        value: function(e) {
                            var t = e.detail.target;
                            this._url.searchParams.set(t.getName(), t.getVal()), this._sendRequest()
                        }
                    }, {
                        key: "_sendRequest",
                        value: function() {
                            var e = this,
                                t = new XMLHttpRequest;
                            t.open("POST", this._url), t.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), t.send(), t.onload = function() {
                                e[200 == t.status ? "_onSuccess" : "_onError"](t)
                            }, t.onerror = this._onError
                        }
                    }, {
                        key: "_onSuccess",
                        value: function(e) {
                            var t = JSON.parse(e.responseText);
                            "success" == t.result ? (this._setContent(t.html), window.history.pushState({}, "", this._url), this._emit("success", e)) : this._onError()
                        }
                    }, {
                        key: "_onError",
                        value: function() {
                            ee.setContent(ne.get("error")).show(), this.delMod("loading"), this._emit("error")
                        }
                    }, {
                        key: "_setContent",
                        value: function(e) {
                            this._container.innerHTML = e
                        }
                    }]) && ie(t.prototype, n), o && ie(t, o), r
                }(u);
                ue(fe, "className", "dynamic-content"), ue(fe, "instances", {}), document.querySelectorAll(".".concat(fe.className)).forEach((function(e) {
                    return new fe(e)
                }));
                var de = n(121),
                    he = n(448),
                    pe = n.n(he),
                    ye = {
                        '"': "&quot;",
                        "'": "&apos;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;"
                    };

                function me(e) {
                    return ye[e] || e
                }

                function _e(e) {
                    return e = new RegExp(e, "g"),
                        function(t) {
                            return ("" + t).replace(e, me)
                        }
                }
                const ve = {
                    xml: _e("[&<>]"),
                    html: _e("[&<>]"),
                    attr: _e("[\"'&<>]")
                };

                function ge(e) {
                    return ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, ge(e)
                }

                function be(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }

                function Ee(e, t) {
                    return Ee = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, Ee(e, t)
                }

                function we(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, o = Le(e);
                        if (t) {
                            var i = Le(this).constructor;
                            n = Reflect.construct(o, arguments, i)
                        } else n = o.apply(this, arguments);
                        return Se(this, n)
                    }
                }

                function Se(e, t) {
                    if (t && ("object" === ge(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return ke(e)
                }

                function ke(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function Le(e) {
                    return Le = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, Le(e)
                }

                function Ce(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                var xe = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Ee(e, t)
                    }(r, e);
                    var t, n, o, i = we(r);

                    function r(e) {
                        var t;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r);
                        var n = r.className;
                        return (t = i.call(this, e, n))._control = t.getElemNode("control"), t._onClearClickCtx = t._onClearClick.bind(ke(t)), t._control.addEventListener("change", t._onChange.bind(ke(t))), t
                    }
                    return t = r, (n = [{
                        key: "_onChange",
                        value: function(e) {
                            e.stopPropagation(), this.getVal() ? this._updateFileElem()._emit("change") : this._clear()
                        }
                    }, {
                        key: "_updateFileElem",
                        value: function() {
                            var e, t = this.getElemNode("file"),
                                n = r.className + r.ELEM_DELIM;
                            return t && t.remove(), (t = document.createElement("span")).classList.add("".concat(n, "file")), t.innerHTML = ['<span class="'.concat(n, 'text">'), ve.html((e = this.getVal(), e.split("\\").pop())), "</span>", '<span class="'.concat(n, 'clear"></span>')].join(""), this.domElem.appendChild(t), this._clearElem = this.getElemNode("clear").addEventListener("click", this._onClearClickCtx), this
                        }
                    }, {
                        key: "_onClearClick",
                        value: function(e) {
                            this.clear()
                        }
                    }, {
                        key: "_clear",
                        value: function() {
                            var e = this,
                                t = document.createElement("input"),
                                n = this.getElemNode("file"),
                                o = this._clearElem,
                                i = this._control.parentNode;
                            return o && o.removeEventListener("click", this._onClearClickCtx), n && n.remove(), t.setAttribute("type", "file"), ["name", "class"].forEach((function(n) {
                                return t.setAttribute(n, e._control.getAttribute(n))
                            })), this._control.removeEventListener("change", this._onChange.bind(this)), i.replaceChild(t, this._control), this._control = t, this._control.addEventListener("change", this._onChange.bind(this)), this._emit("change"), this
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            return this.getVal() ? this._clear() : this
                        }
                    }, {
                        key: "getVal",
                        value: function() {
                            return this._control.value
                        }
                    }, {
                        key: "getName",
                        value: function() {
                            return this._control.getAttribute("name")
                        }
                    }]) && be(t.prototype, n), o && be(t, o), r
                }(u);

                function Oe(e) {
                    return Oe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, Oe(e)
                }

                function Ae(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }

                function Me(e, t) {
                    return Me = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, Me(e, t)
                }

                function je(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, o = Ne(e);
                        if (t) {
                            var i = Ne(this).constructor;
                            n = Reflect.construct(o, arguments, i)
                        } else n = o.apply(this, arguments);
                        return Ze(this, n)
                    }
                }

                function Ze(e, t) {
                    if (t && ("object" === Oe(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return qe(e)
                }

                function qe(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function Ne(e) {
                    return Ne = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, Ne(e)
                }

                function Pe(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                Ce(xe, "className", "attach"), Ce(xe, "instances", {}), document.querySelectorAll(".".concat(xe.className)).forEach((function(e) {
                    return new xe(e)
                }));
                var Re = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && Me(e, t)
                    }(r, e);
                    var t, n, o, i = je(r);

                    function r(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r), t = i.call(this, e, r.className), e.addEventListener("modChange", t._onModChange.bind(qe(t))), t
                    }
                    return t = r, n = [{
                        key: "_onModChange",
                        value: function(e) {
                            e.type;
                            var t = e.detail,
                                n = t.modName;
                            "invalid" === n && this.getControl().setMod(n, t.modVal)
                        }
                    }, {
                        key: "_buildMessage",
                        value: function() {
                            var e = document.createElement("div");
                            return e.classList.add("".concat(r.className).concat(r.ELEM_DELIM, "message")), this.domElem.append(e), this._message = e
                        }
                    }, {
                        key: "_getMessage",
                        value: function() {
                            return this._message || this._buildMessage()
                        }
                    }, {
                        key: "setValidationMessage",
                        value: function(e) {
                            return this._getMessage().textContent = e, this
                        }
                    }, {
                        key: "getControl",
                        value: function() {
                            return this._control || (this._control = function(e, t) {
                                switch (t) {
                                    case "input":
                                        return P.getInstance(e);
                                    case "textarea":
                                        return H.getInstance(e);
                                    case "select":
                                        return pe().getInstance(e);
                                    case "attach":
                                        return xe.getInstance(e);
                                    default:
                                        throw "No found form-field__control. Type: ".concat(t)
                                }
                            }(this.getElemNode("control"), this.getMod("type")))
                        }
                    }, {
                        key: "getVal",
                        value: function() {
                            return this.getControl().getVal()
                        }
                    }, {
                        key: "getName",
                        value: function() {
                            return this.domElem.getAttribute("data-name")
                        }
                    }], n && Ae(t.prototype, n), o && Ae(t, o), r
                }(u);
                Pe(Re, "className", "form-field"), Pe(Re, "instances", {}), document.querySelectorAll(".".concat(Re.className)).forEach((function(e) {
                    return new Re(e)
                }));
                var Ie = n(419);

                function Be(e) {
                    return Be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, Be(e)
                }

                function Te(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }

                function De(e, t) {
                    return De = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, De(e, t)
                }

                function Ve(e) {
                    var t = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, o = ze(e);
                        if (t) {
                            var i = ze(this).constructor;
                            n = Reflect.construct(o, arguments, i)
                        } else n = o.apply(this, arguments);
                        return Fe(this, n)
                    }
                }

                function Fe(e, t) {
                    if (t && ("object" === Be(t) || "function" == typeof t)) return t;
                    if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                    return He(e)
                }

                function He(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function ze(e) {
                    return ze = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, ze(e)
                }

                function We(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
                n.n(Ie)()().mask(document.querySelectorAll(".inputmask"));
                var Xe = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && De(e, t)
                    }(r, e);
                    var t, n, o, i = Ve(r);

                    function r(e) {
                        var t;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, r);
                        var n = r.className;
                        return (t = i.call(this, e, n)).hasMod("has-validation") && t._setValidation(), e.addEventListener("change", t._onChange.bind(He(t))), e.addEventListener("submit", t._onSubmit.bind(He(t))), t
                    }
                    return t = r, (n = [{
                        key: "getFields",
                        value: function() {
                            return Re.getInstanceCollection(this.domElem.querySelectorAll(".".concat(Re.className)))
                        }
                    }, {
                        key: "getVal",
                        value: function() {
                            return this.getFields().reduce((function(e, t) {
                                var n = t.getName();
                                return n && (e[n] = t.getVal()), e
                            }), {})
                        }
                    }, {
                        key: "_setValidation",
                        value: function() {
                            var e = {};
                            this.getFields().forEach((function(t) {
                                var n = t.getMod("validate");
                                e[t.getName()] = {
                                    type: "email" === n ? n : "string",
                                    required: t.hasMod("required")
                                }
                            })), this._validator = new de.Z(e), this._validator.messages({
                                required: "Поле обязательно для заполнения",
                                email: "Введите корректный адрес"
                            })
                        }
                    }, {
                        key: "_onValidationErrors",
                        value: function(e, t, n) {
                            this.getFields().forEach((function(e) {
                                var o = e.getName(),
                                    i = t[o];
                                void 0 !== n[o] && (i ? e.setValidationMessage(i[0].message).setMod("invalid") : e.delMod("invalid"))
                            }))
                        }
                    }, {
                        key: "_onChange",
                        value: function(e) {
                            var t = e.detail.target,
                                n = {};
                            n[t.getName()] = t.getVal(), this._validation(n)
                        }
                    }, {
                        key: "_validation",
                        value: function(e) {
                            var t = this;
                            this._validator && this._validator.validate(e, (function(n, o) {
                                if (n) return t._onValidationErrors(n, o, e);
                                t.getFields().forEach((function(t) {
                                    void 0 !== e[t.getName()] && t.delMod("invalid")
                                }))
                            }))
                        }
                    }, {
                        key: "_onSubmit",
                        value: function(e) {
                            this.getMod("no-ajax") ? (this._validation(this.getVal()), this.getFields().some((function(e) {
                                return e.hasMod("invalid")
                            })) && e.preventDefault()) : (e.preventDefault(), this._validation(this.getVal()), this.getFields().some((function(e) {
                                return e.hasMod("invalid")
                            })) || this._sendRequest())
                        }
                    }, {
                        key: "_sendRequest",
                        value: function() {
                            var e = this,
                                t = new XMLHttpRequest,
                                n = this.domElem,
                                o = new FormData(n);
                            t.open(n.getAttribute("method") || "POST", n.getAttribute("action")), t.setRequestHeader("X-Requested-With", "XMLHttpRequest"), t.send(o), t.onload = function() {
                                e[200 == t.status ? "_onSuccess" : "_onError"](t)
                            }, t.onerror = this._onError
                        }
                    }, {
                        key: "_onSuccess",
                        value: function(e) {
                            var t = JSON.parse(e.responseText);
                            "success" == t.result ? (this.hasMod("has-thanks") && ee.setContent({
                                title: t.title,
                                content: t.text
                            }).show(), this._emit("success", t)) : this._onError()
                        }
                    }, {
                        key: "_onError",
                        value: function() {
                            ee.setContent(ne.get("error")).show(), this._emit("error")
                        }
                    }]) && Te(t.prototype, n), o && Te(t, o), r
                }(u);
                We(Xe, "className", "form"), We(Xe, "instances", {}), document.querySelectorAll(".".concat(Xe.className)).forEach((function(e) {
                    return new Xe(e)
                }));
                var Ge = n(655),
                    Je = document.querySelector("body"),
                    Ue = Je.querySelector(".page__inner"),
                    Ye = document.querySelector(".can_see__main-control"),
                    $e = document.querySelector(".can_see__more-control"),
                    Ke = document.getElementById("CecutientBtn"),
                    Qe = document.getElementById("CecutientOff"),
                    et = document.getElementById("ImageOn"),
                    tt = document.getElementById("ImageOff"),
                    nt = document.getElementById("VideoOn"),
                    ot = document.getElementById("VideoOff"),
                    it = document.getElementById("SmallFonts"),
                    rt = document.getElementById("MediumFonts"),
                    ct = document.getElementById("BigFonts"),
                    at = document.getElementById("WhiteStyle"),
                    st = document.getElementById("BlackStyle"),
                    lt = document.getElementById("BlueStyle"),
                    ut = document.getElementById("GreenStyle"),
                    ft = document.getElementById("can_see__line_height_100"),
                    dt = document.getElementById("can_see__line_height_150"),
                    ht = document.getElementById("can_see__line_height_200"),
                    pt = document.querySelectorAll(".can_see__letter_spacing"),
                    yt = document.getElementById("can_see__letter_spacing_1"),
                    mt = document.getElementById("can_see__letter_spacing_2"),
                    _t = document.getElementById("can_see__letter_spacing_3"),
                    vt = document.getElementById("can_see__sans_serif"),
                    gt = document.getElementById("can_see__serif"),
                    bt = document.querySelectorAll(".can_see__serifs"),
                    Et = document.getElementById("can_see__option_settings"),
                    wt = Ue.querySelector(".header"),
                    St = 0;

                function kt() {
                    return Ke.style.display = "none", wt.style.backgroundColor = "inherit", Ge.Z.set("CecutientCookie", "on", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Lt() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_font-size_s", "can-see_font-size_m", "can-see_font-size_l"), Je.classList.add("can-see_font-size_s"), document.querySelectorAll(".FontSize").forEach((function(e) {
                        e.classList.remove("A_FontSize")
                    })), it.classList.add("A_FontSize"), Ge.Z.set("fonts", "small", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Ct() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_font-size_s", "can-see_font-size_m", "can-see_font-size_l"), Je.classList.add("can-see_font-size_m"), document.querySelectorAll(".FontSize").forEach((function(e) {
                        e.classList.remove("A_FontSize")
                    })), rt.classList.add("A_FontSize"), Ge.Z.set("fonts", "medium", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function xt() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_font-size_s", "can-see_font-size_m", "can-see_font-size_l"), Je.classList.add("can-see_font-size_l"), document.querySelectorAll(".FontSize").forEach((function(e) {
                        e.classList.remove("A_FontSize")
                    })), ct.classList.add("A_FontSize"), Ge.Z.set("fonts", "big", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Ot() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_hidden-image"), tt.style.display = "inline-block", et.style.display = "none", Ge.Z.set("image", "on", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function At() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.add("can-see_hidden-image"), tt.style.display = "none", et.style.display = " inline-block", Ge.Z.set("image", "off", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Mt() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return ot.style.display = "inline-block", nt.style.display = "none", document.querySelectorAll("iframe, video").forEach((function(e) {
                        e.style.display = "inline-block"
                    })), Ge.Z.set("video", "on", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function jt() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return ot.style.display = "none", nt.style.display = "inline-block", document.querySelectorAll("iframe, video").forEach((function(e) {
                        e.style.display = "none"
                    })), Ge.Z.set("video", "off", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Zt() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_color_white", "can-see_color_black", "can-see_color_blue", "can-see_color_green"), Je.classList.add("can-see_color_white"), document.querySelectorAll(".ColorStyle").forEach((function(e) {
                        e.classList.remove("A_WhiteStyle", "A_BlackStyle", "A_BlueStyle", "A_GreenStyle")
                    })), at.classList.add("A_WhiteStyle"), Ge.Z.set("style", "white", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function qt() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_color_white", "can-see_color_black", "can-see_color_blue", "can-see_color_green"), Je.classList.add("can-see_color_black"), document.querySelectorAll(".ColorStyle").forEach((function(e) {
                        e.classList.remove("A_WhiteStyle", "A_BlackStyle", "A_BlueStyle", "A_GreenStyle")
                    })), st.classList.add("A_BlackStyle"), Ge.Z.set("style", "black", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Nt() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_color_white", "can-see_color_black", "can-see_color_blue", "can-see_color_green"), Je.classList.add("can-see_color_blue"), document.querySelectorAll(".ColorStyle").forEach((function(e) {
                        e.classList.remove("A_WhiteStyle", "A_BlackStyle", "A_BlueStyle", "A_GreenStyle")
                    })), lt.classList.add("A_BlueStyle"), Ge.Z.set("style", "blue", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Pt() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_color_white", "can-see_color_black", "can-see_color_blue", "can-see_color_green"), Je.classList.add("can-see_color_green"), document.querySelectorAll(".ColorStyle").forEach((function(e) {
                        e.classList.remove("A_WhiteStyle", "A_BlackStyle", "A_BlueStyle", "A_GreenStyle")
                    })), ut.classList.add("A_GreenStyle"), Ge.Z.set("style", "green", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Rt() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_line-height_1", "can-see_line-height_1-5", "can-see_line-height_2"), Je.classList.add("can-see_line-height_1"), document.querySelectorAll(".can_see__line_height").forEach((function(e) {
                        e.classList.remove("A_line_height")
                    })), ft.classList.add("A_line_height"), Ge.Z.set("line_height", "100", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function It() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_line-height_1", "can-see_line-height_1-5", "can-see_line-height_2"), Je.classList.add("can-see_line-height_1-5"), document.querySelectorAll(".can_see__line_height").forEach((function(e) {
                        e.classList.remove("A_line_height")
                    })), dt.classList.add("A_line_height"), Ge.Z.set("line_height", "150", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Bt() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_line-height_1", "can-see_line-height_1-5", "can-see_line-height_2"), Je.classList.add("can-see_line-height_2"), document.querySelectorAll(".can_see__line_height").forEach((function(e) {
                        e.classList.remove("A_line_height")
                    })), ht.classList.add("A_line_height"), Ge.Z.set("line_height", "200", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Tt() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_letter-spacing_l", "can-see_letter-spacing_2", "can-see_letter-spacing_3"), Je.classList.add("can-see_letter-spacing_l"), pt.forEach((function(e) {
                        e.classList.remove("A_letter_spacing")
                    })), yt.classList.add("A_letter_spacing"), Ge.Z.set("spacing", "1", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Dt() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_letter-spacing_1", "can-see_letter-spacing_2", "can-see_letter-spacing_3"), Je.classList.add("can-see_letter-spacing_2"), pt.forEach((function(e) {
                        e.classList.remove("A_letter_spacing")
                    })), mt.classList.add("A_letter_spacing"), Ge.Z.set("spacing", "2", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Vt() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_letter-spacing_1", "can-see_letter-spacing_2", "can-see_letter-spacing_3"), Je.classList.add("can-see_letter-spacing_3"), pt.forEach((function(e) {
                        e.classList.remove("A_letter_spacing")
                    })), _t.classList.add("A_letter_spacing"), Ge.Z.set("spacing", "3", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Ft() {
                    if (Je.classList.remove("can-see_font-family_serif", "can-see_font-family_sans-serif"), Je.classList.add("can-see_font-family_sans-serif"), "on" === Ge.Z.get("CecutientCookie")) return bt.forEach((function(e) {
                        e.classList.remove("A_serifs")
                    })), vt.classList.add("A_serifs"), Ge.Z.set("type", "sans-serif", {
                        expires: 365,
                        path: "/"
                    }), !1
                }

                function Ht() {
                    if ("on" === Ge.Z.get("CecutientCookie")) return Je.classList.remove("can-see_font-family_serif", "can-see_font-family_sans-serif"), Je.classList.add("can-see_font-family_serif"), bt.forEach((function(e) {
                        e.classList.remove("A_serifs")
                    })), gt.classList.add("A_serifs"), Ge.Z.set("type", "serif", {
                        expires: 365,
                        path: "/"
                    }), !1
                }
                Ke.addEventListener("click", (function() {
                    return kt(), Ge.Z.set("CecutientCookie", "on", {
                        expires: 365,
                        path: "/"
                    }), Lt(), Zt(), Ot(), jt(), Rt(), Tt(), Ft(), Ge.Z.set("settings", "off", {
                        expires: 365,
                        path: "/"
                    }), wt.style.position = "unset", $e.classList.add("shadow"), Je.classList.add("can-see_init"), 0 === St ? (Ye.style.maxHeight = "1000px", St = 1) : (Ye.style.maxHeight = "0px", St = 0), !1
                })), "on" === Ge.Z.get("CecutientCookie") && (Ye.style.maxHeight = "1000px", wt.style.position = "unset", $e.classList.add("shadow"), Je.classList.add("can-see_init"), "on" === Ge.Z.get("settings") ? $e.style.maxHeight = "1000px" : $e.style.maxHeight = "0px"), "on" === Ge.Z.get("CecutientCookie") && (kt(), "small" === Ge.Z.get("fonts") && Lt(), "medium" === Ge.Z.get("fonts") && Ct(), "big" === Ge.Z.get("fonts") && xt(), "white" === Ge.Z.get("style") && Zt(), "black" === Ge.Z.get("style") && qt(), "blue" === Ge.Z.get("style") && Nt(), "green" === Ge.Z.get("style") && Pt(), "on" === Ge.Z.get("image") && Ot(), "off" === Ge.Z.get("image") && At(), "on" === Ge.Z.get("video") && Mt(), "off" === Ge.Z.get("video") && jt(), "100" === Ge.Z.get("line_height") && Rt(), "150" === Ge.Z.get("line_height") && It(), "200" === Ge.Z.get("line_height") && Bt(), "1" === Ge.Z.get("spacing") && Tt(), "2" === Ge.Z.get("spacing") && Dt(), "3" === Ge.Z.get("spacing") && Vt(), "sans-serif" === Ge.Z.get("type") && Ft(), "serif" === Ge.Z.get("type") && Ht()), Et.addEventListener("click", (function() {
                    ! function() {
                        if ("on" === Ge.Z.get("CecutientCookie")) "on" === Ge.Z.get("settings") ? ($e.style.maxHeight = "0", wt.style.position = "unset", Ge.Z.set("settings", "off", {
                            expires: 365,
                            path: "/"
                        })) : ($e.style.maxHeight = "1000px", Ge.Z.set("settings", "on", {
                            expires: 365,
                            path: "/"
                        }))
                    }()
                })), et.addEventListener("click", (function() {
                    Ot()
                })), tt.addEventListener("click", (function() {
                    At()
                })), nt.addEventListener("click", (function() {
                    Mt()
                })), ot.addEventListener("click", (function() {
                    jt()
                })), it.addEventListener("click", (function() {
                    Lt()
                })), rt.addEventListener("click", (function() {
                    Ct()
                })), ct.addEventListener("click", (function() {
                    xt()
                })), at.addEventListener("click", (function() {
                    Zt()
                })), st.addEventListener("click", (function() {
                    qt()
                })), lt.addEventListener("click", (function() {
                    Nt()
                })), ut.addEventListener("click", (function() {
                    Pt()
                })), ft.addEventListener("click", (function() {
                    Rt()
                })), dt.addEventListener("click", (function() {
                    It()
                })), ht.addEventListener("click", (function() {
                    Bt()
                })), yt.addEventListener("click", (function() {
                    Tt()
                })), mt.addEventListener("click", (function() {
                    Dt()
                })), _t.addEventListener("click", (function() {
                    Vt()
                })), vt.addEventListener("click", (function() {
                    Ft()
                })), gt.addEventListener("click", (function() {
                    Ht()
                })), Qe.addEventListener("click", (function() {
                    return Ge.Z.set("CecutientCookie", "null", {
                        expires: 365,
                        path: "/"
                    }), Ge.Z.set("settings", "null", {
                        expires: 365,
                        path: "/"
                    }), Ge.Z.set("style", "null", {
                        expires: 365,
                        path: "/"
                    }), Ge.Z.set("image", "null", {
                        expires: 365,
                        path: "/"
                    }), Ge.Z.set("video", "null", {
                        expires: 365,
                        path: "/"
                    }), Ge.Z.set("fonts", "null", {
                        expires: 365,
                        path: "/"
                    }), Ge.Z.set("line_height", "null", {
                        expires: 365,
                        path: "/"
                    }), Ge.Z.set("spacing", "null", {
                        expires: 365,
                        path: "/"
                    }), Ge.Z.set("type", "null", {
                        expires: 365,
                        path: "/"
                    }), window.location.reload(), !1
                }));
                var zt = n(809),
                    Wt = n.n(zt),
                    Xt = new o.Z(".mySwiper", {
                        autoplay: {
                            delay: 2500,
                            disableOnInteraction: !1
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: !0
                        },
                        loop: !0
                    });
                Xt.on("slideChange", (function() {
                    if (document.querySelector(".section__animation")) {
                        Jt.pause();
                        var e = Xt.activeIndex > Jt.slide ? 1 : -1;
                        Jt.setDirection(e), Jt.slide = Xt.activeIndex, Jt.play()
                    }
                }));
                var Gt, Jt = Wt().loadAnimation({
                    container: document.querySelector(".section__animation"),
                    renderer: "svg",
                    loop: !1,
                    autoplay: !1,
                    path: "/templates/lazeroptic/assets/block1-animation2.json"
                });
                window.onload = function(e) {
                    Jt.slide = Xt.activeIndex, Jt.play()
                }, Jt.addEventListener("enterFrame", (function() {
                    1 === Jt.playDirection ? Jt.currentFrame > Jt.markers[Jt.slide - 1].time ? Jt.pause() : Jt.play() : Jt.currentFrame < Jt.markers[Jt.slide - 1].time && Jt.pause()
                })), document.querySelector(".add-animation") && (Gt = function() {
                    document.querySelectorAll(".add-animation").forEach((function(e) {
                        e.getBoundingClientRect().top < window.innerHeight / 1.3 && (e.classList.contains("has-animation") || e.classList.add("has-animation"))
                    }))
                }, window.addEventListener("scroll", (function() {
                    Gt()
                })));
                var Ut, Yt, $t, Kt;
                document.querySelector(".youtubeVideoFrame") && document.querySelectorAll(".youtubeVideoFrame").forEach((function(e) {
                    ! function(e) {
                        var t = e.dataset.src;

                        function n() {
                            e.src = t
                        }
                        window.addEventListener ? window.addEventListener("load", n, !1) : window.attachEvent ? window.attachEvent("onload", n) : n()
                    }(e)
                }));
                ! function() {
                    var e, t = document.getElementsByClassName("accordion");
                    for (e = 0; e < t.length; e++) t[e].addEventListener("click", (function() {
                        this.classList.toggle("active");
                        var e = this.nextElementSibling;
                        e.style.maxHeight ? e.style.maxHeight = null : e.style.maxHeight = e.scrollHeight + "px"
                    }))
                }(), document.querySelector(".add-parallax") && function() {
                    document.addEventListener("mousemove", (function(t) {
                        var n = window.innerWidth / 2,
                            o = window.innerHeight / 2;
                        if (n > 500) {
                            var i = t.clientX,
                                r = t.clientY,
                                c = "".concat(56 - .001 * (i - n), "% ").concat(70 - .003 * (r - o), "%"),
                                a = "".concat(63 - .002 * (i - n), "% ").concat(48 - .002 * (r - o), "%"),
                                s = "".concat(-76 - .003 * (i - n), "% ").concat(70 - 1e-4 * (r - o), "%"),
                                l = "".concat(c, ", ").concat(a, ", ").concat(s);
                            e.style.setProperty("--bg-position", l)
                        }
                    }));
                    var e = document.querySelector(".add-parallax")
                }(), document.querySelector(".section_view_map") && (Ut = document.querySelector(".section__cities").querySelectorAll(".section__city"), Yt = document.querySelectorAll(".section__maps iframe"), $t = document.querySelectorAll(".section__adresses .section__adress"), Ut.forEach((function(e, t) {
                    e.addEventListener("click", (function() {
                        e.classList.contains("active") || (Ut.forEach((function(e) {
                            e.classList.remove("active")
                        })), e.classList.add("active"), Yt.forEach((function(e) {
                            e.classList.remove("active")
                        })), Yt[t].classList.add("active"), $t.forEach((function(e) {
                            e.classList.remove("active")
                        })), $t[t].classList.add("active"))
                    }), !1)
                }))), document.querySelector(".section_view_contacts") && function() {
                    var e = document.querySelectorAll(".section_view_contacts .section__item"),
                        t = document.querySelectorAll(".section__maps iframe");
                    e.forEach((function(n) {
                        n.addEventListener("click", (function() {
                            n.classList.contains("active") || (e.forEach((function(e) {
                                return e.classList.toggle("active")
                            })), t.forEach((function(e) {
                                return e.classList.toggle("active")
                            })))
                        }), !1)
                    }))
                }(), document.querySelector(".cookie") && (Kt = document.querySelector(".cookie"), "yes" === Ge.Z.get("CookiesAgree") ? Kt.remove() : Kt.querySelector("button").onclick = function() {
                    Kt.remove()
                })
            }
        },
        n = {};

    function o(e) {
        var i = n[e];
        if (void 0 !== i) return i.exports;
        var r = n[e] = {
            exports: {}
        };
        return t[e].call(r.exports, r, r.exports, o), r.exports
    }
    o.m = t, e = [], o.O = (t, n, i, r) => {
        if (!n) {
            var c = 1 / 0;
            for (u = 0; u < e.length; u++) {
                for (var [n, i, r] = e[u], a = !0, s = 0; s < n.length; s++)(!1 & r || c >= r) && Object.keys(o.O).every((e => o.O[e](n[s]))) ? n.splice(s--, 1) : (a = !1, r < c && (c = r));
                if (a) {
                    e.splice(u--, 1);
                    var l = i();
                    void 0 !== l && (t = l)
                }
            }
            return t
        }
        r = r || 0;
        for (var u = e.length; u > 0 && e[u - 1][2] > r; u--) e[u] = e[u - 1];
        e[u] = [n, i, r]
    }, o.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, {
            a: t
        }), t
    }, o.d = (e, t) => {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e = {
            826: 0
        };
        o.O.j = t => 0 === e[t];
        var t = (t, n) => {
                var i, r, [c, a, s] = n,
                    l = 0;
                if (c.some((t => 0 !== e[t]))) {
                    for (i in a) o.o(a, i) && (o.m[i] = a[i]);
                    if (s) var u = s(o)
                }
                for (t && t(n); l < c.length; l++) r = c[l], o.o(e, r) && e[r] && e[r][0](), e[c[l]] = 0;
                return o.O(u)
            },
            n = self.webpackChunk = self.webpackChunk || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })();
    var i = o.O(void 0, [592], (() => o(413)));
    i = o.O(i)
})();