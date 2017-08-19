/*
 AngularJS v1.6.5
 (c) 2010-2017 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (x) {
    'use strict';
    function pe(a) {
        if (G(a)) t(a.objectMaxDepth) && (Lc.objectMaxDepth = Tb(a.objectMaxDepth) ? a.objectMaxDepth : NaN); else return Lc
    }

    function Tb(a) {
        return W(a) && 0 < a
    }

    function K(a, b) {
        b = b || Error;
        return function () {
            var d = arguments[0], c;
            c = "[" + (a ? a + ":" : "") + d + "] http://errors.angularjs.org/1.6.5/" + (a ? a + "/" : "") + d;
            for (d = 1; d < arguments.length; d++) {
                c = c + (1 == d ? "?" : "&") + "p" + (d - 1) + "=";
                var e = encodeURIComponent, f;
                f = arguments[d];
                f = "function" == typeof f ? f.toString().replace(/ \{[\s\S]*$/, "") : "undefined" ==
                typeof f ? "undefined" : "string" != typeof f ? JSON.stringify(f) : f;
                c += e(f)
            }
            return new b(c)
        }
    }

    function oa(a) {
        if (null == a || Za(a))return !1;
        if (I(a) || C(a) || z && a instanceof z)return !0;
        var b = "length" in Object(a) && a.length;
        return W(b) && (0 <= b && (b - 1 in a || a instanceof Array) || "function" === typeof a.item)
    }

    function p(a, b, d) {
        var c, e;
        if (a)if (E(a))for (c in a)"prototype" !== c && "length" !== c && "name" !== c && a.hasOwnProperty(c) && b.call(d, a[c], c, a); else if (I(a) || oa(a)) {
            var f = "object" !== typeof a;
            c = 0;
            for (e = a.length; c < e; c++)(f || c in
            a) && b.call(d, a[c], c, a)
        } else if (a.forEach && a.forEach !== p) a.forEach(b, d, a); else if (Mc(a))for (c in a)b.call(d, a[c], c, a); else if ("function" === typeof a.hasOwnProperty)for (c in a)a.hasOwnProperty(c) && b.call(d, a[c], c, a); else for (c in a)wa.call(a, c) && b.call(d, a[c], c, a);
        return a
    }

    function Nc(a, b, d) {
        for (var c = Object.keys(a).sort(), e = 0; e < c.length; e++)b.call(d, a[c[e]], c[e]);
        return c
    }

    function Ub(a) {
        return function (b, d) {
            a(d, b)
        }
    }

    function qe() {
        return ++sb
    }

    function Vb(a, b, d) {
        for (var c = a.$$hashKey, e = 0, f = b.length; e < f; ++e) {
            var g =
                b[e];
            if (G(g) || E(g))for (var k = Object.keys(g), h = 0, l = k.length; h < l; h++) {
                var m = k[h], n = g[m];
                d && G(n) ? ia(n) ? a[m] = new Date(n.valueOf()) : $a(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : Wb(n) ? a[m] = n.clone() : (G(a[m]) || (a[m] = I(n) ? [] : {}), Vb(a[m], [n], !0)) : a[m] = n
            }
        }
        c ? a.$$hashKey = c : delete a.$$hashKey;
        return a
    }

    function O(a) {
        return Vb(a, xa.call(arguments, 1), !1)
    }

    function re(a) {
        return Vb(a, xa.call(arguments, 1), !0)
    }

    function Q(a) {
        return parseInt(a, 10)
    }

    function Xb(a, b) {
        return O(Object.create(a), b)
    }

    function B() {
    }

    function ab(a) {
        return a
    }

    function aa(a) {
        return function () {
            return a
        }
    }

    function Yb(a) {
        return E(a.toString) && a.toString !== la
    }

    function v(a) {
        return "undefined" === typeof a
    }

    function t(a) {
        return "undefined" !== typeof a
    }

    function G(a) {
        return null !== a && "object" === typeof a
    }

    function Mc(a) {
        return null !== a && "object" === typeof a && !Oc(a)
    }

    function C(a) {
        return "string" === typeof a
    }

    function W(a) {
        return "number" === typeof a
    }

    function ia(a) {
        return "[object Date]" === la.call(a)
    }

    function Zb(a) {
        switch (la.call(a)) {
            case "[object Error]":
                return !0;
            case "[object Exception]":
                return !0;
            case "[object DOMException]":
                return !0;
            default:
                return a instanceof Error
        }
    }

    function E(a) {
        return "function" === typeof a
    }

    function $a(a) {
        return "[object RegExp]" === la.call(a)
    }

    function Za(a) {
        return a && a.window === a
    }

    function bb(a) {
        return a && a.$evalAsync && a.$watch
    }

    function La(a) {
        return "boolean" === typeof a
    }

    function se(a) {
        return a && W(a.length) && te.test(la.call(a))
    }

    function Wb(a) {
        return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function ue(a) {
        var b = {};
        a = a.split(",");
        var d;
        for (d =
                 0; d < a.length; d++)b[a[d]] = !0;
        return b
    }

    function ya(a) {
        return N(a.nodeName || a[0] && a[0].nodeName)
    }

    function cb(a, b) {
        var d = a.indexOf(b);
        0 <= d && a.splice(d, 1);
        return d
    }

    function Ia(a, b, d) {
        function c(a, b, c) {
            c--;
            if (0 > c)return "...";
            var d = b.$$hashKey, g;
            if (I(a)) {
                g = 0;
                for (var f = a.length; g < f; g++)b.push(e(a[g], c))
            } else if (Mc(a))for (g in a)b[g] = e(a[g], c); else if (a && "function" === typeof a.hasOwnProperty)for (g in a)a.hasOwnProperty(g) && (b[g] = e(a[g], c)); else for (g in a)wa.call(a, g) && (b[g] = e(a[g], c));
            d ? b.$$hashKey = d : delete b.$$hashKey;
            return b
        }

        function e(a, b) {
            if (!G(a))return a;
            var d = g.indexOf(a);
            if (-1 !== d)return k[d];
            if (Za(a) || bb(a))throw za("cpws");
            var d = !1, e = f(a);
            void 0 === e && (e = I(a) ? [] : Object.create(Oc(a)), d = !0);
            g.push(a);
            k.push(e);
            return d ? c(a, e, b) : e
        }

        function f(a) {
            switch (la.call(a)) {
                case "[object Int8Array]":
                case "[object Int16Array]":
                case "[object Int32Array]":
                case "[object Float32Array]":
                case "[object Float64Array]":
                case "[object Uint8Array]":
                case "[object Uint8ClampedArray]":
                case "[object Uint16Array]":
                case "[object Uint32Array]":
                    return new a.constructor(e(a.buffer),
                        a.byteOffset, a.length);
                case "[object ArrayBuffer]":
                    if (!a.slice) {
                        var b = new ArrayBuffer(a.byteLength);
                        (new Uint8Array(b)).set(new Uint8Array(a));
                        return b
                    }
                    return a.slice(0);
                case "[object Boolean]":
                case "[object Number]":
                case "[object String]":
                case "[object Date]":
                    return new a.constructor(a.valueOf());
                case "[object RegExp]":
                    return b = new RegExp(a.source, a.toString().match(/[^/]*$/)[0]), b.lastIndex = a.lastIndex, b;
                case "[object Blob]":
                    return new a.constructor([a], {type: a.type})
            }
            if (E(a.cloneNode))return a.cloneNode(!0)
        }

        var g = [], k = [];
        d = Tb(d) ? d : NaN;
        if (b) {
            if (se(b) || "[object ArrayBuffer]" === la.call(b))throw za("cpta");
            if (a === b)throw za("cpi");
            I(b) ? b.length = 0 : p(b, function (a, c) {
                "$$hashKey" !== c && delete b[c]
            });
            g.push(a);
            k.push(b);
            return c(a, b, d)
        }
        return e(a, d)
    }

    function $b(a, b) {
        return a === b || a !== a && b !== b
    }

    function sa(a, b) {
        if (a === b)return !0;
        if (null === a || null === b)return !1;
        if (a !== a && b !== b)return !0;
        var d = typeof a, c;
        if (d === typeof b && "object" === d)if (I(a)) {
            if (!I(b))return !1;
            if ((d = a.length) === b.length) {
                for (c = 0; c < d; c++)if (!sa(a[c],
                        b[c]))return !1;
                return !0
            }
        } else {
            if (ia(a))return ia(b) ? $b(a.getTime(), b.getTime()) : !1;
            if ($a(a))return $a(b) ? a.toString() === b.toString() : !1;
            if (bb(a) || bb(b) || Za(a) || Za(b) || I(b) || ia(b) || $a(b))return !1;
            d = R();
            for (c in a)if ("$" !== c.charAt(0) && !E(a[c])) {
                if (!sa(a[c], b[c]))return !1;
                d[c] = !0
            }
            for (c in b)if (!(c in d) && "$" !== c.charAt(0) && t(b[c]) && !E(b[c]))return !1;
            return !0
        }
        return !1
    }

    function db(a, b, d) {
        return a.concat(xa.call(b, d))
    }

    function Qa(a, b) {
        var d = 2 < arguments.length ? xa.call(arguments, 2) : [];
        return !E(b) || b instanceof
        RegExp ? b : d.length ? function () {
            return arguments.length ? b.apply(a, db(d, arguments, 0)) : b.apply(a, d)
        } : function () {
            return arguments.length ? b.apply(a, arguments) : b.call(a)
        }
    }

    function Pc(a, b) {
        var d = b;
        "string" === typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? d = void 0 : Za(b) ? d = "$WINDOW" : b && x.document === b ? d = "$DOCUMENT" : bb(b) && (d = "$SCOPE");
        return d
    }

    function eb(a, b) {
        if (!v(a))return W(b) || (b = b ? 2 : null), JSON.stringify(a, Pc, b)
    }

    function Qc(a) {
        return C(a) ? JSON.parse(a) : a
    }

    function Rc(a, b) {
        a = a.replace(ve, "");
        var d = Date.parse("Jan 01, 1970 00:00:00 " +
                a) / 6E4;
        return ba(d) ? b : d
    }

    function ac(a, b, d) {
        d = d ? -1 : 1;
        var c = a.getTimezoneOffset();
        b = Rc(b, c);
        d *= b - c;
        a = new Date(a.getTime());
        a.setMinutes(a.getMinutes() + d);
        return a
    }

    function Aa(a) {
        a = z(a).clone().empty();
        var b = z("<div>").append(a).html();
        try {
            return a[0].nodeType === Ma ? N(b) : b.match(/^(<[^>]+>)/)[1].replace(/^<([\w-]+)/, function (a, b) {
                return "<" + N(b)
            })
        } catch (d) {
            return N(b)
        }
    }

    function Sc(a) {
        try {
            return decodeURIComponent(a)
        } catch (b) {
        }
    }

    function Tc(a) {
        var b = {};
        p((a || "").split("&"), function (a) {
            var c, e, f;
            a && (e = a =
                a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (e = a.substring(0, c), f = a.substring(c + 1)), e = Sc(e), t(e) && (f = t(f) ? Sc(f) : !0, wa.call(b, e) ? I(b[e]) ? b[e].push(f) : b[e] = [b[e], f] : b[e] = f))
        });
        return b
    }

    function bc(a) {
        var b = [];
        p(a, function (a, c) {
            I(a) ? p(a, function (a) {
                b.push(ma(c, !0) + (!0 === a ? "" : "=" + ma(a, !0)))
            }) : b.push(ma(c, !0) + (!0 === a ? "" : "=" + ma(a, !0)))
        });
        return b.length ? b.join("&") : ""
    }

    function fb(a) {
        return ma(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function ma(a, b) {
        return encodeURIComponent(a).replace(/%40/gi,
            "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function we(a, b) {
        var d, c, e = Na.length;
        for (c = 0; c < e; ++c)if (d = Na[c] + b, C(d = a.getAttribute(d)))return d;
        return null
    }

    function xe(a, b) {
        var d, c, e = {};
        p(Na, function (b) {
            b += "app";
            !d && a.hasAttribute && a.hasAttribute(b) && (d = a, c = a.getAttribute(b))
        });
        p(Na, function (b) {
            b += "app";
            var e;
            !d && (e = a.querySelector("[" + b.replace(":", "\\:") + "]")) && (d = e, c = e.getAttribute(b))
        });
        d && (ye ? (e.strictDi = null !== we(d, "strict-di"),
            b(d, c ? [c] : [], e)) : x.console.error("Angular: disabling automatic bootstrap. <script> protocol indicates an extension, document.location.href does not match."))
    }

    function Uc(a, b, d) {
        G(d) || (d = {});
        d = O({strictDi: !1}, d);
        var c = function () {
            a = z(a);
            if (a.injector()) {
                var c = a[0] === x.document ? "document" : Aa(a);
                throw za("btstrpd", c.replace(/</, "&lt;").replace(/>/, "&gt;"));
            }
            b = b || [];
            b.unshift(["$provide", function (b) {
                b.value("$rootElement", a)
            }]);
            d.debugInfoEnabled && b.push(["$compileProvider", function (a) {
                a.debugInfoEnabled(!0)
            }]);
            b.unshift("ng");
            c = gb(b, d.strictDi);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector", d);
                    c(b)(a)
                })
            }]);
            return c
        }, e = /^NG_ENABLE_DEBUG_INFO!/, f = /^NG_DEFER_BOOTSTRAP!/;
        x && e.test(x.name) && (d.debugInfoEnabled = !0, x.name = x.name.replace(e, ""));
        if (x && !f.test(x.name))return c();
        x.name = x.name.replace(f, "");
        fa.resumeBootstrap = function (a) {
            p(a, function (a) {
                b.push(a)
            });
            return c()
        };
        E(fa.resumeDeferredBootstrap) && fa.resumeDeferredBootstrap()
    }

    function ze() {
        x.name =
            "NG_ENABLE_DEBUG_INFO!" + x.name;
        x.location.reload()
    }

    function Ae(a) {
        a = fa.element(a).injector();
        if (!a)throw za("test");
        return a.get("$$testability")
    }

    function Vc(a, b) {
        b = b || "_";
        return a.replace(Be, function (a, c) {
            return (c ? b : "") + a.toLowerCase()
        })
    }

    function Ce() {
        var a;
        if (!Wc) {
            var b = tb();
            (ta = v(b) ? x.jQuery : b ? x[b] : void 0) && ta.fn.on ? (z = ta, O(ta.fn, {
                scope: Ra.scope,
                isolateScope: Ra.isolateScope,
                controller: Ra.controller,
                injector: Ra.injector,
                inheritedData: Ra.inheritedData
            }), a = ta.cleanData, ta.cleanData = function (b) {
                for (var c,
                         e = 0,
                         f; null != (f = b[e]); e++)(c = ta._data(f, "events")) && c.$destroy && ta(f).triggerHandler("$destroy");
                a(b)
            }) : z = S;
            fa.element = z;
            Wc = !0
        }
    }

    function hb(a, b, d) {
        if (!a)throw za("areq", b || "?", d || "required");
        return a
    }

    function ub(a, b, d) {
        d && I(a) && (a = a[a.length - 1]);
        hb(E(a), b, "not a function, got " + (a && "object" === typeof a ? a.constructor.name || "Object" : typeof a));
        return a
    }

    function Oa(a, b) {
        if ("hasOwnProperty" === a)throw za("badname", b);
    }

    function Xc(a, b, d) {
        if (!b)return a;
        b = b.split(".");
        for (var c, e = a, f = b.length, g = 0; g < f; g++)c =
            b[g], a && (a = (e = a)[c]);
        return !d && E(a) ? Qa(e, a) : a
    }

    function vb(a) {
        for (var b = a[0], d = a[a.length - 1], c,
                 e = 1; b !== d && (b = b.nextSibling); e++)if (c || a[e] !== b) c || (c = z(xa.call(a, 0, e))), c.push(b);
        return c || a
    }

    function R() {
        return Object.create(null)
    }

    function cc(a) {
        if (null == a)return "";
        switch (typeof a) {
            case "string":
                break;
            case "number":
                a = "" + a;
                break;
            default:
                a = !Yb(a) || I(a) || ia(a) ? eb(a) : a.toString()
        }
        return a
    }

    function De(a) {
        function b(a, b, c) {
            return a[b] || (a[b] = c())
        }

        var d = K("$injector"), c = K("ng");
        a = b(a, "angular", Object);
        a.$$minErr =
            a.$$minErr || K;
        return b(a, "module", function () {
            var a = {};
            return function (f, g, k) {
                var h = {};
                if ("hasOwnProperty" === f)throw c("badname", "module");
                g && a.hasOwnProperty(f) && (a[f] = null);
                return b(a, f, function () {
                    function a(b, c, d, g) {
                        g || (g = e);
                        return function () {
                            g[d || "push"]([b, c, arguments]);
                            return p
                        }
                    }

                    function b(a, c, d) {
                        d || (d = e);
                        return function (b, e) {
                            e && E(e) && (e.$$moduleName = f);
                            d.push([a, c, arguments]);
                            return p
                        }
                    }

                    if (!g)throw d("nomod", f);
                    var e = [], q = [], F = [], M = a("$injector", "invoke", "push", q), p = {
                        _invokeQueue: e,
                        _configBlocks: q,
                        _runBlocks: F,
                        info: function (a) {
                            if (t(a)) {
                                if (!G(a))throw c("aobj", "value");
                                h = a;
                                return this
                            }
                            return h
                        },
                        requires: g,
                        name: f,
                        provider: b("$provide", "provider"),
                        factory: b("$provide", "factory"),
                        service: b("$provide", "service"),
                        value: a("$provide", "value"),
                        constant: a("$provide", "constant", "unshift"),
                        decorator: b("$provide", "decorator", q),
                        animation: b("$animateProvider", "register"),
                        filter: b("$filterProvider", "register"),
                        controller: b("$controllerProvider", "register"),
                        directive: b("$compileProvider", "directive"),
                        component: b("$compileProvider",
                            "component"),
                        config: M,
                        run: function (a) {
                            F.push(a);
                            return this
                        }
                    };
                    k && M(k);
                    return p
                })
            }
        })
    }

    function ra(a, b) {
        if (I(a)) {
            b = b || [];
            for (var d = 0, c = a.length; d < c; d++)b[d] = a[d]
        } else if (G(a))for (d in b = b || {}, a)if ("$" !== d.charAt(0) || "$" !== d.charAt(1)) b[d] = a[d];
        return b || a
    }

    function Ee(a, b) {
        var d = [];
        Tb(b) && (a = fa.copy(a, null, b));
        return JSON.stringify(a, function (a, b) {
            b = Pc(a, b);
            if (G(b)) {
                if (0 <= d.indexOf(b))return "...";
                d.push(b)
            }
            return b
        })
    }

    function Fe(a) {
        O(a, {
            errorHandlingConfig: pe,
            bootstrap: Uc,
            copy: Ia,
            extend: O,
            merge: re,
            equals: sa,
            element: z,
            forEach: p,
            injector: gb,
            noop: B,
            bind: Qa,
            toJson: eb,
            fromJson: Qc,
            identity: ab,
            isUndefined: v,
            isDefined: t,
            isString: C,
            isFunction: E,
            isObject: G,
            isNumber: W,
            isElement: Wb,
            isArray: I,
            version: Ge,
            isDate: ia,
            lowercase: N,
            uppercase: wb,
            callbacks: {$$counter: 0},
            getTestability: Ae,
            reloadWithDebugInfo: ze,
            $$minErr: K,
            $$csp: Ja,
            $$encodeUriSegment: fb,
            $$encodeUriQuery: ma,
            $$stringify: cc
        });
        dc = De(x);
        dc("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: He});
            a.provider("$compile", Yc).directive({
                a: Ie,
                input: Zc,
                textarea: Zc,
                form: Je,
                script: Ke,
                select: Le,
                option: Me,
                ngBind: Ne,
                ngBindHtml: Oe,
                ngBindTemplate: Pe,
                ngClass: Qe,
                ngClassEven: Re,
                ngClassOdd: Se,
                ngCloak: Te,
                ngController: Ue,
                ngForm: Ve,
                ngHide: We,
                ngIf: Xe,
                ngInclude: Ye,
                ngInit: Ze,
                ngNonBindable: $e,
                ngPluralize: af,
                ngRepeat: bf,
                ngShow: cf,
                ngStyle: df,
                ngSwitch: ef,
                ngSwitchWhen: ff,
                ngSwitchDefault: gf,
                ngOptions: hf,
                ngTransclude: jf,
                ngModel: kf,
                ngList: lf,
                ngChange: mf,
                pattern: $c,
                ngPattern: $c,
                required: ad,
                ngRequired: ad,
                minlength: bd,
                ngMinlength: bd,
                maxlength: cd,
                ngMaxlength: cd,
                ngValue: nf,
                ngModelOptions: of
            }).directive({ngInclude: pf}).directive(xb).directive(dd);
            a.provider({
                $anchorScroll: qf,
                $animate: rf,
                $animateCss: sf,
                $$animateJs: tf,
                $$animateQueue: uf,
                $$AnimateRunner: vf,
                $$animateAsyncRun: wf,
                $browser: xf,
                $cacheFactory: yf,
                $controller: zf,
                $document: Af,
                $$isDocumentHidden: Bf,
                $exceptionHandler: Cf,
                $filter: ed,
                $$forceReflow: Df,
                $interpolate: Ef,
                $interval: Ff,
                $http: Gf,
                $httpParamSerializer: Hf,
                $httpParamSerializerJQLike: If,
                $httpBackend: Jf,
                $xhrFactory: Kf,
                $jsonpCallbacks: Lf,
                $location: Mf,
                $log: Nf,
                $parse: Of,
                $rootScope: Pf,
                $q: Qf,
                $$q: Rf,
                $sce: Sf,
                $sceDelegate: Tf,
                $sniffer: Uf,
                $templateCache: Vf,
                $templateRequest: Wf,
                $$testability: Xf,
                $timeout: Yf,
                $window: Zf,
                $$rAF: $f,
                $$jqLite: ag,
                $$Map: bg,
                $$cookieReader: cg
            })
        }]).info({angularVersion: "1.6.5"})
    }

    function ib(a, b) {
        return b.toUpperCase()
    }

    function yb(a) {
        return a.replace(dg, ib)
    }

    function ec(a) {
        a = a.nodeType;
        return 1 === a || !a || 9 === a
    }

    function fd(a, b) {
        var d, c, e = b.createDocumentFragment(), f = [];
        if (fc.test(a)) {
            d = e.appendChild(b.createElement("div"));
            c = (eg.exec(a) || ["", ""])[1].toLowerCase();
            c = pa[c] || pa._default;
            d.innerHTML = c[1] + a.replace(fg, "<$1></$2>") + c[2];
            for (c = c[0]; c--;)d = d.lastChild;
            f = db(f, d.childNodes);
            d = e.firstChild;
            d.textContent = ""
        } else f.push(b.createTextNode(a));
        e.textContent = "";
        e.innerHTML = "";
        p(f, function (a) {
            e.appendChild(a)
        });
        return e
    }

    function S(a) {
        if (a instanceof S)return a;
        var b;
        C(a) && (a = P(a), b = !0);
        if (!(this instanceof S)) {
            if (b && "<" !== a.charAt(0))throw gc("nosel");
            return new S(a)
        }
        if (b) {
            b = x.document;
            var d;
            a = (d = gg.exec(a)) ? [b.createElement(d[1])] : (d = fd(a, b)) ? d.childNodes :
                [];
            hc(this, a)
        } else E(a) ? gd(a) : hc(this, a)
    }

    function ic(a) {
        return a.cloneNode(!0)
    }

    function zb(a, b) {
        !b && ec(a) && z.cleanData([a]);
        a.querySelectorAll && z.cleanData(a.querySelectorAll("*"))
    }

    function hd(a, b, d, c) {
        if (t(c))throw gc("offargs");
        var e = (c = Ab(a)) && c.events, f = c && c.handle;
        if (f)if (b) {
            var g = function (b) {
                var c = e[b];
                t(d) && cb(c || [], d);
                t(d) && c && 0 < c.length || (a.removeEventListener(b, f), delete e[b])
            };
            p(b.split(" "), function (a) {
                g(a);
                Bb[a] && g(Bb[a])
            })
        } else for (b in e)"$destroy" !== b && a.removeEventListener(b, f), delete e[b]
    }

    function jc(a, b) {
        var d = a.ng339, c = d && jb[d];
        c && (b ? delete c.data[b] : (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), hd(a)), delete jb[d], a.ng339 = void 0))
    }

    function Ab(a, b) {
        var d = a.ng339, d = d && jb[d];
        b && !d && (a.ng339 = d = ++hg, d = jb[d] = {events: {}, data: {}, handle: void 0});
        return d
    }

    function kc(a, b, d) {
        if (ec(a)) {
            var c, e = t(d), f = !e && b && !G(b), g = !b;
            a = (a = Ab(a, !f)) && a.data;
            if (e) a[yb(b)] = d; else {
                if (g)return a;
                if (f)return a && a[yb(b)];
                for (c in b)a[yb(c)] = b[c]
            }
        }
    }

    function Cb(a, b) {
        return a.getAttribute ? -1 < (" " + (a.getAttribute("class") ||
            "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") : !1
    }

    function Db(a, b) {
        b && a.setAttribute && p(b.split(" "), function (b) {
            a.setAttribute("class", P((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + P(b) + " ", " ")))
        })
    }

    function Eb(a, b) {
        if (b && a.setAttribute) {
            var d = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            p(b.split(" "), function (a) {
                a = P(a);
                -1 === d.indexOf(" " + a + " ") && (d += a + " ")
            });
            a.setAttribute("class", P(d))
        }
    }

    function hc(a, b) {
        if (b)if (b.nodeType) a[a.length++] = b; else {
            var d =
                b.length;
            if ("number" === typeof d && b.window !== b) {
                if (d)for (var c = 0; c < d; c++)a[a.length++] = b[c]
            } else a[a.length++] = b
        }
    }

    function id(a, b) {
        return Fb(a, "$" + (b || "ngController") + "Controller")
    }

    function Fb(a, b, d) {
        9 === a.nodeType && (a = a.documentElement);
        for (b = I(b) ? b : [b]; a;) {
            for (var c = 0, e = b.length; c < e; c++)if (t(d = z.data(a, b[c])))return d;
            a = a.parentNode || 11 === a.nodeType && a.host
        }
    }

    function jd(a) {
        for (zb(a, !0); a.firstChild;)a.removeChild(a.firstChild)
    }

    function Gb(a, b) {
        b || zb(a);
        var d = a.parentNode;
        d && d.removeChild(a)
    }

    function ig(a,
                b) {
        b = b || x;
        if ("complete" === b.document.readyState) b.setTimeout(a); else z(b).on("load", a)
    }

    function gd(a) {
        function b() {
            x.document.removeEventListener("DOMContentLoaded", b);
            x.removeEventListener("load", b);
            a()
        }

        "complete" === x.document.readyState ? x.setTimeout(a) : (x.document.addEventListener("DOMContentLoaded", b), x.addEventListener("load", b))
    }

    function kd(a, b) {
        var d = Hb[b.toLowerCase()];
        return d && ld[ya(a)] && d
    }

    function jg(a, b) {
        var d = function (c, d) {
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            var f =
                b[d || c.type], g = f ? f.length : 0;
            if (g) {
                if (v(c.immediatePropagationStopped)) {
                    var k = c.stopImmediatePropagation;
                    c.stopImmediatePropagation = function () {
                        c.immediatePropagationStopped = !0;
                        c.stopPropagation && c.stopPropagation();
                        k && k.call(c)
                    }
                }
                c.isImmediatePropagationStopped = function () {
                    return !0 === c.immediatePropagationStopped
                };
                var h = f.specialHandlerWrapper || kg;
                1 < g && (f = ra(f));
                for (var l = 0; l < g; l++)c.isImmediatePropagationStopped() || h(a, c, f[l])
            }
        };
        d.elem = a;
        return d
    }

    function kg(a, b, d) {
        d.call(a, b)
    }

    function lg(a, b, d) {
        var c =
            b.relatedTarget;
        c && (c === a || mg.call(a, c)) || d.call(a, b)
    }

    function ag() {
        this.$get = function () {
            return O(S, {
                hasClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return Cb(a, b)
                }, addClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return Eb(a, b)
                }, removeClass: function (a, b) {
                    a.attr && (a = a[0]);
                    return Db(a, b)
                }
            })
        }
    }

    function Sa(a, b) {
        var d = a && a.$$hashKey;
        if (d)return "function" === typeof d && (d = a.$$hashKey()), d;
        d = typeof a;
        return d = "function" === d || "object" === d && null !== a ? a.$$hashKey = d + ":" + (b || qe)() : d + ":" + a
    }

    function md() {
        this._keys = [];
        this._values =
            [];
        this._lastKey = NaN;
        this._lastIndex = -1
    }

    function nd(a) {
        a = Function.prototype.toString.call(a).replace(ng, "");
        return a.match(og) || a.match(pg)
    }

    function qg(a) {
        return (a = nd(a)) ? "function(" + (a[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function gb(a, b) {
        function d(a) {
            return function (b, c) {
                if (G(b)) p(b, Ub(a)); else return a(b, c)
            }
        }

        function c(a, b) {
            Oa(a, "service");
            if (E(b) || I(b)) b = q.instantiate(b);
            if (!b.$get)throw Ka("pget", a);
            return n[a + "Provider"] = b
        }

        function e(a, b) {
            return function () {
                var c = w.invoke(b, this);
                if (v(c))throw Ka("undef",
                    a);
                return c
            }
        }

        function f(a, b, d) {
            return c(a, {$get: !1 !== d ? e(a, b) : b})
        }

        function g(a) {
            hb(v(a) || I(a), "modulesToLoad", "not an array");
            var b = [], c;
            p(a, function (a) {
                function d(a) {
                    var b, c;
                    b = 0;
                    for (c = a.length; b < c; b++) {
                        var e = a[b], g = q.get(e[0]);
                        g[e[1]].apply(g, e[2])
                    }
                }

                if (!m.get(a)) {
                    m.set(a, !0);
                    try {
                        C(a) ? (c = dc(a), w.modules[a] = c, b = b.concat(g(c.requires)).concat(c._runBlocks), d(c._invokeQueue), d(c._configBlocks)) : E(a) ? b.push(q.invoke(a)) : I(a) ? b.push(q.invoke(a)) : ub(a, "module")
                    } catch (e) {
                        throw I(a) && (a = a[a.length - 1]), e.message &&
                        e.stack && -1 === e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Ka("modulerr", a, e.stack || e.message || e);
                    }
                }
            });
            return b
        }

        function k(a, c) {
            function d(b, e) {
                if (a.hasOwnProperty(b)) {
                    if (a[b] === h)throw Ka("cdep", b + " <- " + l.join(" <- "));
                    return a[b]
                }
                try {
                    return l.unshift(b), a[b] = h, a[b] = c(b, e), a[b]
                } catch (g) {
                    throw a[b] === h && delete a[b], g;
                } finally {
                    l.shift()
                }
            }

            function e(a, c, g) {
                var f = [];
                a = gb.$$annotate(a, b, g);
                for (var h = 0, k = a.length; h < k; h++) {
                    var l = a[h];
                    if ("string" !== typeof l)throw Ka("itkn", l);
                    f.push(c && c.hasOwnProperty(l) ?
                        c[l] : d(l, g))
                }
                return f
            }

            return {
                invoke: function (a, b, c, d) {
                    "string" === typeof c && (d = c, c = null);
                    c = e(a, c, d);
                    I(a) && (a = a[a.length - 1]);
                    d = a;
                    if (Ba || "function" !== typeof d) d = !1; else {
                        var g = d.$$ngIsClass;
                        La(g) || (g = d.$$ngIsClass = /^(?:class\b|constructor\()/.test(Function.prototype.toString.call(d)));
                        d = g
                    }
                    return d ? (c.unshift(null), new (Function.prototype.bind.apply(a, c))) : a.apply(b, c)
                }, instantiate: function (a, b, c) {
                    var d = I(a) ? a[a.length - 1] : a;
                    a = e(a, b, c);
                    a.unshift(null);
                    return new (Function.prototype.bind.apply(d, a))
                }, get: d,
                annotate: gb.$$annotate, has: function (b) {
                    return n.hasOwnProperty(b + "Provider") || a.hasOwnProperty(b)
                }
            }
        }

        b = !0 === b;
        var h = {}, l = [], m = new Ib, n = {
                $provide: {
                    provider: d(c), factory: d(f), service: d(function (a, b) {
                        return f(a, ["$injector", function (a) {
                            return a.instantiate(b)
                        }])
                    }), value: d(function (a, b) {
                        return f(a, aa(b), !1)
                    }), constant: d(function (a, b) {
                        Oa(a, "constant");
                        n[a] = b;
                        F[a] = b
                    }), decorator: function (a, b) {
                        var c = q.get(a + "Provider"), d = c.$get;
                        c.$get = function () {
                            var a = w.invoke(d, c);
                            return w.invoke(b, null, {$delegate: a})
                        }
                    }
                }
            },
            q = n.$injector = k(n, function (a, b) {
                fa.isString(b) && l.push(b);
                throw Ka("unpr", l.join(" <- "));
            }), F = {}, M = k(F, function (a, b) {
                var c = q.get(a + "Provider", b);
                return w.invoke(c.$get, c, void 0, a)
            }), w = M;
        n.$injectorProvider = {$get: aa(M)};
        w.modules = q.modules = R();
        var u = g(a), w = M.get("$injector");
        w.strictDi = b;
        p(u, function (a) {
            a && w.invoke(a)
        });
        return w
    }

    function qf() {
        var a = !0;
        this.disableAutoScrolling = function () {
            a = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (b, d, c) {
            function e(a) {
                var b = null;
                Array.prototype.some.call(a,
                    function (a) {
                        if ("a" === ya(a))return b = a, !0
                    });
                return b
            }

            function f(a) {
                if (a) {
                    a.scrollIntoView();
                    var c;
                    c = g.yOffset;
                    E(c) ? c = c() : Wb(c) ? (c = c[0], c = "fixed" !== b.getComputedStyle(c).position ? 0 : c.getBoundingClientRect().bottom) : W(c) || (c = 0);
                    c && (a = a.getBoundingClientRect().top, b.scrollBy(0, a - c))
                } else b.scrollTo(0, 0)
            }

            function g(a) {
                a = C(a) ? a : W(a) ? a.toString() : d.hash();
                var b;
                a ? (b = k.getElementById(a)) ? f(b) : (b = e(k.getElementsByName(a))) ? f(b) : "top" === a && f(null) : f(null)
            }

            var k = b.document;
            a && c.$watch(function () {
                    return d.hash()
                },
                function (a, b) {
                    a === b && "" === a || ig(function () {
                        c.$evalAsync(g)
                    })
                });
            return g
        }]
    }

    function kb(a, b) {
        if (!a && !b)return "";
        if (!a)return b;
        if (!b)return a;
        I(a) && (a = a.join(" "));
        I(b) && (b = b.join(" "));
        return a + " " + b
    }

    function rg(a) {
        C(a) && (a = a.split(" "));
        var b = R();
        p(a, function (a) {
            a.length && (b[a] = !0)
        });
        return b
    }

    function Ca(a) {
        return G(a) ? a : {}
    }

    function sg(a, b, d, c) {
        function e(a) {
            try {
                a.apply(null, xa.call(arguments, 1))
            } finally {
                if (M--, 0 === M)for (; w.length;)try {
                    w.pop()()
                } catch (b) {
                    d.error(b)
                }
            }
        }

        function f() {
            y = null;
            k()
        }

        function g() {
            u =
                D();
            u = v(u) ? null : u;
            sa(u, L) && (u = L);
            A = L = u
        }

        function k() {
            var a = A;
            g();
            if (na !== h.url() || a !== u) na = h.url(), A = u, p(H, function (a) {
                a(h.url(), u)
            })
        }

        var h = this, l = a.location, m = a.history, n = a.setTimeout, q = a.clearTimeout, F = {};
        h.isMock = !1;
        var M = 0, w = [];
        h.$$completeOutstandingRequest = e;
        h.$$incOutstandingRequestCount = function () {
            M++
        };
        h.notifyWhenNoOutstandingRequests = function (a) {
            0 === M ? a() : w.push(a)
        };
        var u, A, na = l.href, s = b.find("base"), y = null, D = c.history ? function () {
            try {
                return m.state
            } catch (a) {
            }
        } : B;
        g();
        h.url = function (b, d, e) {
            v(e) &&
            (e = null);
            l !== a.location && (l = a.location);
            m !== a.history && (m = a.history);
            if (b) {
                var f = A === e;
                if (na === b && (!c.history || f))return h;
                var k = na && ja(na) === ja(b);
                na = b;
                A = e;
                !c.history || k && f ? (k || (y = b), d ? l.replace(b) : k ? (d = l, e = b.indexOf("#"), e = -1 === e ? "" : b.substr(e), d.hash = e) : l.href = b, l.href !== b && (y = b)) : (m[d ? "replaceState" : "pushState"](e, "", b), g());
                y && (y = b);
                return h
            }
            return y || l.href.replace(/%27/g, "'")
        };
        h.state = function () {
            return u
        };
        var H = [], Z = !1, L = null;
        h.onUrlChange = function (b) {
            if (!Z) {
                if (c.history) z(a).on("popstate",
                    f);
                z(a).on("hashchange", f);
                Z = !0
            }
            H.push(b);
            return b
        };
        h.$$applicationDestroyed = function () {
            z(a).off("hashchange popstate", f)
        };
        h.$$checkUrlChange = k;
        h.baseHref = function () {
            var a = s.attr("href");
            return a ? a.replace(/^(https?:)?\/\/[^/]*/, "") : ""
        };
        h.defer = function (a, b) {
            var c;
            M++;
            c = n(function () {
                delete F[c];
                e(a)
            }, b || 0);
            F[c] = !0;
            return c
        };
        h.defer.cancel = function (a) {
            return F[a] ? (delete F[a], q(a), e(B), !0) : !1
        }
    }

    function xf() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (a, b, d, c) {
            return new sg(a, c, b, d)
        }]
    }

    function yf() {
        this.$get = function () {
            function a(a, c) {
                function e(a) {
                    a !== n && (q ? q === a && (q = a.n) : q = a, f(a.n, a.p), f(a, n), n = a, n.n = null)
                }

                function f(a, b) {
                    a !== b && (a && (a.p = b), b && (b.n = a))
                }

                if (a in b)throw K("$cacheFactory")("iid", a);
                var g = 0, k = O({}, c, {id: a}), h = R(), l = c && c.capacity || Number.MAX_VALUE, m = R(), n = null,
                    q = null;
                return b[a] = {
                    put: function (a, b) {
                        if (!v(b)) {
                            if (l < Number.MAX_VALUE) {
                                var c = m[a] || (m[a] = {key: a});
                                e(c)
                            }
                            a in h || g++;
                            h[a] = b;
                            g > l && this.remove(q.key);
                            return b
                        }
                    }, get: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b)return;
                            e(b)
                        }
                        return h[a]
                    }, remove: function (a) {
                        if (l < Number.MAX_VALUE) {
                            var b = m[a];
                            if (!b)return;
                            b === n && (n = b.p);
                            b === q && (q = b.n);
                            f(b.n, b.p);
                            delete m[a]
                        }
                        a in h && (delete h[a], g--)
                    }, removeAll: function () {
                        h = R();
                        g = 0;
                        m = R();
                        n = q = null
                    }, destroy: function () {
                        m = k = h = null;
                        delete b[a]
                    }, info: function () {
                        return O({}, k, {size: g})
                    }
                }
            }

            var b = {};
            a.info = function () {
                var a = {};
                p(b, function (b, e) {
                    a[e] = b.info()
                });
                return a
            };
            a.get = function (a) {
                return b[a]
            };
            return a
        }
    }

    function Vf() {
        this.$get = ["$cacheFactory", function (a) {
            return a("templates")
        }]
    }

    function Yc(a, b) {
        function d(a, b, c) {
            var d = /^\s*([@&<]|=(\*?))(\??)\s*([\w$]*)\s*$/, e = R();
            p(a, function (a, g) {
                if (a in n) e[g] = n[a]; else {
                    var f = a.match(d);
                    if (!f)throw ga("iscp", b, g, a, c ? "controller bindings definition" : "isolate scope definition");
                    e[g] = {mode: f[1][0], collection: "*" === f[2], optional: "?" === f[3], attrName: f[4] || g};
                    f[4] && (n[a] = e[g])
                }
            });
            return e
        }

        function c(a) {
            var b = a.charAt(0);
            if (!b || b !== N(b))throw ga("baddir", a);
            if (a !== a.trim())throw ga("baddir", a);
        }

        function e(a) {
            var b = a.require || a.controller && a.name;
            !I(b) && G(b) && p(b, function (a, c) {
                var d = a.match(l);
                a.substring(d[0].length) || (b[c] = d[0] + c)
            });
            return b
        }

        var f = {}, g = /^\s*directive:\s*([\w-]+)\s+(.*)$/, k = /(([\w-]+)(?::([^;]+))?;?)/,
            h = ue("ngSrc,ngSrcset,src,srcset"), l = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/, m = /^(on[a-z]+|formaction)$/,
            n = R();
        this.directive = function na(b, d) {
            hb(b, "name");
            Oa(b, "directive");
            C(b) ? (c(b), hb(d, "directiveFactory"), f.hasOwnProperty(b) || (f[b] = [], a.factory(b + "Directive", ["$injector", "$exceptionHandler", function (a, c) {
                var d = [];
                p(f[b], function (g,
                                  f) {
                    try {
                        var h = a.invoke(g);
                        E(h) ? h = {compile: aa(h)} : !h.compile && h.link && (h.compile = aa(h.link));
                        h.priority = h.priority || 0;
                        h.index = f;
                        h.name = h.name || b;
                        h.require = e(h);
                        var k = h, l = h.restrict;
                        if (l && (!C(l) || !/[EACM]/.test(l)))throw ga("badrestrict", l, b);
                        k.restrict = l || "EA";
                        h.$$moduleName = g.$$moduleName;
                        d.push(h)
                    } catch (m) {
                        c(m)
                    }
                });
                return d
            }])), f[b].push(d)) : p(b, Ub(na));
            return this
        };
        this.component = function s(a, b) {
            function c(a) {
                function e(b) {
                    return E(b) || I(b) ? function (c, d) {
                        return a.invoke(b, this, {$element: c, $attrs: d})
                    } :
                        b
                }

                var g = b.template || b.templateUrl ? b.template : "", f = {
                    controller: d,
                    controllerAs: tg(b.controller) || b.controllerAs || "$ctrl",
                    template: e(g),
                    templateUrl: e(b.templateUrl),
                    transclude: b.transclude,
                    scope: {},
                    bindToController: b.bindings || {},
                    restrict: "E",
                    require: b.require
                };
                p(b, function (a, b) {
                    "$" === b.charAt(0) && (f[b] = a)
                });
                return f
            }

            if (!C(a))return p(a, Ub(Qa(this, s))), this;
            var d = b.controller || function () {
                };
            p(b, function (a, b) {
                "$" === b.charAt(0) && (c[b] = a, E(d) && (d[b] = a))
            });
            c.$inject = ["$injector"];
            return this.directive(a,
                c)
        };
        this.aHrefSanitizationWhitelist = function (a) {
            return t(a) ? (b.aHrefSanitizationWhitelist(a), this) : b.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function (a) {
            return t(a) ? (b.imgSrcSanitizationWhitelist(a), this) : b.imgSrcSanitizationWhitelist()
        };
        var q = !0;
        this.debugInfoEnabled = function (a) {
            return t(a) ? (q = a, this) : q
        };
        var F = !1;
        this.preAssignBindingsEnabled = function (a) {
            return t(a) ? (F = a, this) : F
        };
        var M = 10;
        this.onChangesTtl = function (a) {
            return arguments.length ? (M = a, this) : M
        };
        var w = !0;
        this.commentDirectivesEnabled =
            function (a) {
                return arguments.length ? (w = a, this) : w
            };
        var u = !0;
        this.cssClassDirectivesEnabled = function (a) {
            return arguments.length ? (u = a, this) : u
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (a, b, c, e, n, L, T, J, U, Y) {
            function r() {
                try {
                    if (!--Ca)throw ja = void 0, ga("infchng", M);
                    T.$apply(function () {
                        for (var a = [], b = 0, c = ja.length; b < c; ++b)try {
                            ja[b]()
                        } catch (d) {
                            a.push(d)
                        }
                        ja = void 0;
                        if (a.length)throw a;
                    })
                } finally {
                    Ca++
                }
            }

            function ca(a, b) {
                if (b) {
                    var c = Object.keys(b), d, e, g;
                    d = 0;
                    for (e = c.length; d < e; d++)g = c[d], this[g] = b[g]
                } else this.$attr = {};
                this.$$element = a
            }

            function Ta(a, b, c) {
                za.innerHTML = "<span " + b + ">";
                b = za.firstChild.attributes;
                var d = b[0];
                b.removeNamedItem(d.name);
                d.value = c;
                a.attributes.setNamedItem(d)
            }

            function Da(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function da(a, b, c, d, e) {
                a instanceof z || (a = z(a));
                var g = K(a, b, a, c, d, e);
                da.$$addScopeClass(a);
                var f = null;
                return function (b, c, d) {
                    if (!a)throw ga("multilink");
                    hb(b, "scope");
                    e && e.needsNewScope &&
                    (b = b.$parent.$new());
                    d = d || {};
                    var h = d.parentBoundTranscludeFn, k = d.transcludeControllers;
                    d = d.futureParentElement;
                    h && h.$$boundTransclude && (h = h.$$boundTransclude);
                    f || (f = (d = d && d[0]) ? "foreignobject" !== ya(d) && la.call(d).match(/SVG/) ? "svg" : "html" : "html");
                    d = "html" !== f ? z(ka(f, z("<div>").append(a).html())) : c ? Ra.clone.call(a) : a;
                    if (k)for (var l in k)d.data("$" + l + "Controller", k[l].instance);
                    da.$$addScopeInfo(d, b);
                    c && c(d, b);
                    g && g(b, d, d, h);
                    c || (a = g = null);
                    return d
                }
            }

            function K(a, b, c, d, e, g) {
                function f(a, c, d, e) {
                    var g, k,
                        l, m, q, n, D;
                    if (H)for (D = Array(c.length), m = 0; m < h.length; m += 3)g = h[m], D[g] = c[g]; else D = c;
                    m = 0;
                    for (q = h.length; m < q;)k = D[h[m++]], c = h[m++], g = h[m++], c ? (c.scope ? (l = a.$new(), da.$$addScopeInfo(z(k), l)) : l = a, n = c.transcludeOnThisElement ? V(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? V(a, b) : null, c(g, l, k, d, n)) : g && g(a, k.childNodes, void 0, e)
                }

                for (var h = [], k = I(a) || a instanceof z, l, m, q, n, H, D = 0; D < a.length; D++) {
                    l = new ca;
                    11 === Ba && lb(a, D, k);
                    m = mc(a[D], [], l, 0 === D ? d : void 0, e);
                    (g = m.length ? X(m, a[D], l, b, c, null, [], [], g) : null) &&
                    g.scope && da.$$addScopeClass(l.$$element);
                    l = g && g.terminal || !(q = a[D].childNodes) || !q.length ? null : K(q, g ? (g.transcludeOnThisElement || !g.templateOnThisElement) && g.transclude : b);
                    if (g || l) h.push(D, g, l), n = !0, H = H || g;
                    g = null
                }
                return n ? f : null
            }

            function lb(a, b, c) {
                var d = a[b], e = d.parentNode, g;
                if (d.nodeType === Ma)for (; ;) {
                    g = e ? d.nextSibling : a[b + 1];
                    if (!g || g.nodeType !== Ma)break;
                    d.nodeValue += g.nodeValue;
                    g.parentNode && g.parentNode.removeChild(g);
                    c && g === a[b + 1] && a.splice(b + 1, 1)
                }
            }

            function V(a, b, c) {
                function d(e, g, f, h, k) {
                    e || (e =
                        a.$new(!1, k), e.$$transcluded = !0);
                    return b(e, g, {parentBoundTranscludeFn: c, transcludeControllers: f, futureParentElement: h})
                }

                var e = d.$$slots = R(), g;
                for (g in b.$$slots)e[g] = b.$$slots[g] ? V(a, b.$$slots[g], c) : null;
                return d
            }

            function mc(a, b, c, d, e) {
                var g = c.$attr, f;
                switch (a.nodeType) {
                    case 1:
                        f = ya(a);
                        Q(b, Ea(f), "E", d, e);
                        for (var h, l, m, q, n = a.attributes, H = 0, D = n && n.length; H < D; H++) {
                            var F = !1, u = !1;
                            h = n[H];
                            l = h.name;
                            m = h.value;
                            h = Ea(l);
                            (q = Na.test(h)) && (l = l.replace(od, "").substr(8).replace(/_(.)/g, function (a, b) {
                                return b.toUpperCase()
                            }));
                            (h = h.match(Oa)) && ba(h[1]) && (F = l, u = l.substr(0, l.length - 5) + "end", l = l.substr(0, l.length - 6));
                            h = Ea(l.toLowerCase());
                            g[h] = l;
                            if (q || !c.hasOwnProperty(h)) c[h] = m, kd(a, h) && (c[h] = !0);
                            va(a, b, m, h, q);
                            Q(b, h, "A", d, e, F, u)
                        }
                        "input" === f && "hidden" === a.getAttribute("type") && a.setAttribute("autocomplete", "off");
                        if (!Ka)break;
                        g = a.className;
                        G(g) && (g = g.animVal);
                        if (C(g) && "" !== g)for (; a = k.exec(g);)h = Ea(a[2]), Q(b, h, "C", d, e) && (c[h] = P(a[3])), g = g.substr(a.index + a[0].length);
                        break;
                    case Ma:
                        pa(b, a.nodeValue);
                        break;
                    case 8:
                        if (!Ja)break;
                        nc(a, b, c, d, e)
                }
                b.sort(ma);
                return b
            }

            function nc(a, b, c, d, e) {
                try {
                    var f = g.exec(a.nodeValue);
                    if (f) {
                        var h = Ea(f[1]);
                        Q(b, h, "M", d, e) && (c[h] = P(f[2]))
                    }
                } catch (k) {
                }
            }

            function pd(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a)throw ga("uterdir", b, c);
                        1 === a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return z(d)
            }

            function qd(a, b, c) {
                return function (d, e, g, f, h) {
                    e = pd(e[0], b, c);
                    return a(d, e, g, f, h)
                }
            }

            function S(a, b, c, d, e, g) {
                var f;
                return a ?
                    da(b, c, d, e, g) : function () {
                        f || (f = da(b, c, d, e, g), b = c = g = null);
                        return f.apply(this, arguments)
                    }
            }

            function X(a, b, d, e, g, f, h, k, l) {
                function m(a, b, c, d) {
                    if (a) {
                        c && (a = qd(a, c, d));
                        a.require = s.require;
                        a.directiveName = Y;
                        if (L === s || s.$$isolateScope) a = ta(a, {isolateScope: !0});
                        h.push(a)
                    }
                    if (b) {
                        c && (b = qd(b, c, d));
                        b.require = s.require;
                        b.directiveName = Y;
                        if (L === s || s.$$isolateScope) b = ta(b, {isolateScope: !0});
                        k.push(b)
                    }
                }

                function q(a, e, g, f, l) {
                    function m(a, b, c, d) {
                        var e;
                        bb(a) || (d = c, c = b, b = a, a = void 0);
                        U && (e = T);
                        c || (c = U ? ha.parent() : ha);
                        if (d) {
                            var g =
                                l.$$slots[d];
                            if (g)return g(a, b, e, c, t);
                            if (v(g))throw ga("noslot", d, Aa(ha));
                        } else return l(a, b, e, c, t)
                    }

                    var n, s, J, y, Z, T, w, ha;
                    b === g ? (f = d, ha = d.$$element) : (ha = z(g), f = new ca(ha, d));
                    Z = e;
                    L ? y = e.$new(!0) : H && (Z = e.$parent);
                    l && (w = m, w.$$boundTransclude = l, w.isSlotFilled = function (a) {
                        return !!l.$$slots[a]
                    });
                    u && (T = ea(ha, f, w, u, y, e, L));
                    L && (da.$$addScopeInfo(ha, y, !0, !(M && (M === L || M === L.$$originalDirective))), da.$$addScopeClass(ha, !0), y.$$isolateBindings = L.$$isolateBindings, s = qa(e, f, y, y.$$isolateBindings, L), s.removeWatches &&
                    y.$on("$destroy", s.removeWatches));
                    for (n in T) {
                        s = u[n];
                        J = T[n];
                        var Y = s.$$bindings.bindToController;
                        if (F) {
                            J.bindingInfo = Y ? qa(Z, f, J.instance, Y, s) : {};
                            var r = J();
                            r !== J.instance && (J.instance = r, ha.data("$" + s.name + "Controller", r), J.bindingInfo.removeWatches && J.bindingInfo.removeWatches(), J.bindingInfo = qa(Z, f, J.instance, Y, s))
                        } else J.instance = J(), ha.data("$" + s.name + "Controller", J.instance), J.bindingInfo = qa(Z, f, J.instance, Y, s)
                    }
                    p(u, function (a, b) {
                        var c = a.require;
                        a.bindToController && !I(c) && G(c) && O(T[b].instance,
                            W(b, c, ha, T))
                    });
                    p(T, function (a) {
                        var b = a.instance;
                        if (E(b.$onChanges))try {
                            b.$onChanges(a.bindingInfo.initialChanges)
                        } catch (d) {
                            c(d)
                        }
                        if (E(b.$onInit))try {
                            b.$onInit()
                        } catch (e) {
                            c(e)
                        }
                        E(b.$doCheck) && (Z.$watch(function () {
                            b.$doCheck()
                        }), b.$doCheck());
                        E(b.$onDestroy) && Z.$on("$destroy", function () {
                            b.$onDestroy()
                        })
                    });
                    n = 0;
                    for (s = h.length; n < s; n++)J = h[n], ua(J, J.isolateScope ? y : e, ha, f, J.require && W(J.directiveName, J.require, ha, T), w);
                    var t = e;
                    L && (L.template || null === L.templateUrl) && (t = y);
                    a && a(t, g.childNodes, void 0, l);
                    for (n =
                             k.length - 1; 0 <= n; n--)J = k[n], ua(J, J.isolateScope ? y : e, ha, f, J.require && W(J.directiveName, J.require, ha, T), w);
                    p(T, function (a) {
                        a = a.instance;
                        E(a.$postLink) && a.$postLink()
                    })
                }

                l = l || {};
                for (var n = -Number.MAX_VALUE, H = l.newScopeDirective, u = l.controllerDirectives,
                         L = l.newIsolateScopeDirective, M = l.templateDirective, J = l.nonTlbTranscludeDirective,
                         Z = !1, T = !1, U = l.hasElementTranscludeDirective, y = d.$$element = z(b), s, Y, w, r = e, t,
                         Pa = !1, Ta = !1, V, x = 0, Da = a.length; x < Da; x++) {
                    s = a[x];
                    var B = s.$$start, C = s.$$end;
                    B && (y = pd(b, B, C));
                    w = void 0;
                    if (n > s.priority)break;
                    if (V = s.scope) s.templateUrl || (G(V) ? (aa("new/isolated scope", L || H, s, y), L = s) : aa("new/isolated scope", L, s, y)), H = H || s;
                    Y = s.name;
                    if (!Pa && (s.replace && (s.templateUrl || s.template) || s.transclude && !s.$$tlb)) {
                        for (V = x + 1; Pa = a[V++];)if (Pa.transclude && !Pa.$$tlb || Pa.replace && (Pa.templateUrl || Pa.template)) {
                            Ta = !0;
                            break
                        }
                        Pa = !0
                    }
                    !s.templateUrl && s.controller && (u = u || R(), aa("'" + Y + "' controller", u[Y], s, y), u[Y] = s);
                    if (V = s.transclude)if (Z = !0, s.$$tlb || (aa("transclusion", J, s, y), J = s), "element" === V) U = !0, n = s.priority,
                        w = y, y = d.$$element = z(da.$$createComment(Y, d[Y])), b = y[0], oa(g, xa.call(w, 0), b), w[0].$$parentNode = w[0].parentNode, r = S(Ta, w, e, n, f && f.name, {nonTlbTranscludeDirective: J}); else {
                        var K = R();
                        if (G(V)) {
                            w = [];
                            var N = R(), lb = R();
                            p(V, function (a, b) {
                                var c = "?" === a.charAt(0);
                                a = c ? a.substring(1) : a;
                                N[a] = b;
                                K[b] = null;
                                lb[b] = c
                            });
                            p(y.contents(), function (a) {
                                var b = N[Ea(ya(a))];
                                b ? (lb[b] = !0, K[b] = K[b] || [], K[b].push(a)) : w.push(a)
                            });
                            p(lb, function (a, b) {
                                if (!a)throw ga("reqslot", b);
                            });
                            for (var lc in K)K[lc] && (K[lc] = S(Ta, K[lc], e))
                        } else w = z(ic(b)).contents();
                        y.empty();
                        r = S(Ta, w, e, void 0, void 0, {needsNewScope: s.$$isolateScope || s.$$newScope});
                        r.$$slots = K
                    }
                    if (s.template)if (T = !0, aa("template", M, s, y), M = s, V = E(s.template) ? s.template(y, d) : s.template, V = Ha(V), s.replace) {
                        f = s;
                        w = fc.test(V) ? rd(ka(s.templateNamespace, P(V))) : [];
                        b = w[0];
                        if (1 !== w.length || 1 !== b.nodeType)throw ga("tplrt", Y, "");
                        oa(g, y, b);
                        Da = {$attr: {}};
                        V = mc(b, [], Da);
                        var nc = a.splice(x + 1, a.length - (x + 1));
                        (L || H) && $(V, L, H);
                        a = a.concat(V).concat(nc);
                        fa(d, Da);
                        Da = a.length
                    } else y.html(V);
                    if (s.templateUrl) T = !0, aa("template",
                        M, s, y), M = s, s.replace && (f = s), q = ia(a.splice(x, a.length - x), y, d, g, Z && r, h, k, {
                        controllerDirectives: u,
                        newScopeDirective: H !== s && H,
                        newIsolateScopeDirective: L,
                        templateDirective: M,
                        nonTlbTranscludeDirective: J
                    }), Da = a.length; else if (s.compile)try {
                        t = s.compile(y, d, r);
                        var Q = s.$$originalDirective || s;
                        E(t) ? m(null, Qa(Q, t), B, C) : t && m(Qa(Q, t.pre), Qa(Q, t.post), B, C)
                    } catch (ba) {
                        c(ba, Aa(y))
                    }
                    s.terminal && (q.terminal = !0, n = Math.max(n, s.priority))
                }
                q.scope = H && !0 === H.scope;
                q.transcludeOnThisElement = Z;
                q.templateOnThisElement = T;
                q.transclude =
                    r;
                l.hasElementTranscludeDirective = U;
                return q
            }

            function W(a, b, c, d) {
                var e;
                if (C(b)) {
                    var g = b.match(l);
                    b = b.substring(g[0].length);
                    var f = g[1] || g[3], g = "?" === g[2];
                    "^^" === f ? c = c.parent() : e = (e = d && d[b]) && e.instance;
                    if (!e) {
                        var h = "$" + b + "Controller";
                        e = f ? c.inheritedData(h) : c.data(h)
                    }
                    if (!e && !g)throw ga("ctreq", b, a);
                } else if (I(b))for (e = [], f = 0, g = b.length; f < g; f++)e[f] = W(a, b[f], c, d); else G(b) && (e = {}, p(b, function (b, g) {
                    e[g] = W(a, b, c, d)
                }));
                return e || null
            }

            function ea(a, b, c, d, e, g, f) {
                var h = R(), k;
                for (k in d) {
                    var l = d[k], m = {
                        $scope: l ===
                        f || l.$$isolateScope ? e : g, $element: a, $attrs: b, $transclude: c
                    }, n = l.controller;
                    "@" === n && (n = b[l.name]);
                    m = L(n, m, !0, l.controllerAs);
                    h[l.name] = m;
                    a.data("$" + l.name + "Controller", m.instance)
                }
                return h
            }

            function $(a, b, c) {
                for (var d = 0, e = a.length; d < e; d++)a[d] = Xb(a[d], {$$isolateScope: b, $$newScope: c})
            }

            function Q(b, c, e, g, h, k, l) {
                if (c === h)return null;
                var m = null;
                if (f.hasOwnProperty(c)) {
                    h = a.get(c + "Directive");
                    for (var n = 0,
                             q = h.length; n < q; n++)if (c = h[n], (v(g) || g > c.priority) && -1 !== c.restrict.indexOf(e)) {
                        k && (c = Xb(c, {
                            $$start: k,
                            $$end: l
                        }));
                        if (!c.$$bindings) {
                            var H = m = c, D = c.name, F = {isolateScope: null, bindToController: null};
                            G(H.scope) && (!0 === H.bindToController ? (F.bindToController = d(H.scope, D, !0), F.isolateScope = {}) : F.isolateScope = d(H.scope, D, !1));
                            G(H.bindToController) && (F.bindToController = d(H.bindToController, D, !0));
                            if (F.bindToController && !H.controller)throw ga("noctrl", D);
                            m = m.$$bindings = F;
                            G(m.isolateScope) && (c.$$isolateBindings = m.isolateScope)
                        }
                        b.push(c);
                        m = c
                    }
                }
                return m
            }

            function ba(b) {
                if (f.hasOwnProperty(b))for (var c = a.get(b + "Directive"),
                                                 d = 0, e = c.length; d < e; d++)if (b = c[d], b.multiElement)return !0;
                return !1
            }

            function fa(a, b) {
                var c = b.$attr, d = a.$attr;
                p(a, function (d, e) {
                    "$" !== e.charAt(0) && (b[e] && b[e] !== d && (d = d.length ? d + (("style" === e ? ";" : " ") + b[e]) : b[e]), a.$set(e, d, !0, c[e]))
                });
                p(b, function (b, e) {
                    a.hasOwnProperty(e) || "$" === e.charAt(0) || (a[e] = b, "class" !== e && "style" !== e && (d[e] = c[e]))
                })
            }

            function ia(a, b, d, g, f, h, k, l) {
                var m = [], n, q, F = b[0], s = a.shift(),
                    L = Xb(s, {templateUrl: null, transclude: null, replace: null, $$originalDirective: s}),
                    J = E(s.templateUrl) ? s.templateUrl(b,
                        d) : s.templateUrl, u = s.templateNamespace;
                b.empty();
                e(J).then(function (c) {
                    var e, H;
                    c = Ha(c);
                    if (s.replace) {
                        c = fc.test(c) ? rd(ka(u, P(c))) : [];
                        e = c[0];
                        if (1 !== c.length || 1 !== e.nodeType)throw ga("tplrt", s.name, J);
                        c = {$attr: {}};
                        oa(g, b, e);
                        var D = mc(e, [], c);
                        G(s.scope) && $(D, !0);
                        a = D.concat(a);
                        fa(d, c)
                    } else e = F, b.html(c);
                    a.unshift(L);
                    n = X(a, e, d, f, b, s, h, k, l);
                    p(g, function (a, c) {
                        a === e && (g[c] = b[0])
                    });
                    for (q = K(b[0].childNodes, f); m.length;) {
                        c = m.shift();
                        H = m.shift();
                        var y = m.shift(), M = m.shift(), D = b[0];
                        if (!c.$$destroyed) {
                            if (H !== F) {
                                var Z =
                                    H.className;
                                l.hasElementTranscludeDirective && s.replace || (D = ic(e));
                                oa(y, z(H), D);
                                Da(z(D), Z)
                            }
                            H = n.transcludeOnThisElement ? V(c, n.transclude, M) : M;
                            n(q, c, D, g, H)
                        }
                    }
                    m = null
                }).catch(function (a) {
                    Zb(a) && c(a)
                });
                return function (a, b, c, d, e) {
                    a = e;
                    b.$$destroyed || (m ? m.push(b, c, d, a) : (n.transcludeOnThisElement && (a = V(b, n.transclude, e)), n(q, b, c, d, a)))
                }
            }

            function ma(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function aa(a, b, c, d) {
                function e(a) {
                    return a ? " (module: " + a + ")" :
                        ""
                }

                if (b)throw ga("multidir", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, Aa(d));
            }

            function pa(a, c) {
                var d = b(c, !0);
                d && a.push({
                    priority: 0, compile: function (a) {
                        a = a.parent();
                        var b = !!a.length;
                        b && da.$$addBindingClass(a);
                        return function (a, c) {
                            var e = c.parent();
                            b || da.$$addBindingClass(e);
                            da.$$addBindingInfo(e, d.expressions);
                            a.$watch(d, function (a) {
                                c[0].nodeValue = a
                            })
                        }
                    }
                })
            }

            function ka(a, b) {
                a = N(a || "html");
                switch (a) {
                    case "svg":
                    case "math":
                        var c = x.document.createElement("div");
                        c.innerHTML = "<" + a + ">" + b + "</" + a + ">";
                        return c.childNodes[0].childNodes;
                    default:
                        return b
                }
            }

            function ra(a, b) {
                if ("srcdoc" === b)return J.HTML;
                var c = ya(a);
                if ("src" === b || "ngSrc" === b) {
                    if (-1 === ["img", "video", "audio", "source", "track"].indexOf(c))return J.RESOURCE_URL
                } else if ("xlinkHref" === b || "form" === c && "action" === b || "link" === c && "href" === b)return J.RESOURCE_URL
            }

            function va(a, c, d, e, g) {
                var f = ra(a, e), k = h[e] || g, l = b(d, !g, f, k);
                if (l) {
                    if ("multiple" === e && "select" === ya(a))throw ga("selmulti", Aa(a));
                    if (m.test(e))throw ga("nodomevents");
                    c.push({
                        priority: 100,
                        compile: function () {
                            return {
                                pre: function (a, c, g) {
                                    c = g.$$observers || (g.$$observers = R());
                                    var h = g[e];
                                    h !== d && (l = h && b(h, !0, f, k), d = h);
                                    l && (g[e] = l(a), (c[e] || (c[e] = [])).$$inter = !0, (g.$$observers && g.$$observers[e].$$scope || a).$watch(l, function (a, b) {
                                        "class" === e && a !== b ? g.$updateClass(a, b) : g.$set(e, a)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function oa(a, b, c) {
                var d = b[0], e = b.length, g = d.parentNode, f, h;
                if (a)for (f = 0, h = a.length; f < h; f++)if (a[f] === d) {
                    a[f++] = c;
                    h = f + e - 1;
                    for (var k = a.length; f < k; f++, h++)h < k ? a[f] = a[h] : delete a[f];
                    a.length -= e - 1;
                    a.context === d &&
                    (a.context = c);
                    break
                }
                g && g.replaceChild(c, d);
                a = x.document.createDocumentFragment();
                for (f = 0; f < e; f++)a.appendChild(b[f]);
                z.hasData(d) && (z.data(c, z.data(d)), z(d).off("$destroy"));
                z.cleanData(a.querySelectorAll("*"));
                for (f = 1; f < e; f++)delete b[f];
                b[0] = c;
                b.length = 1
            }

            function ta(a, b) {
                return O(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }

            function ua(a, b, d, e, g, f) {
                try {
                    a(b, d, e, g, f)
                } catch (h) {
                    c(h, Aa(d))
                }
            }

            function qa(a, c, d, e, g) {
                function f(b, c, e) {
                    E(d.$onChanges) && !$b(c, e) && (ja || (a.$$postDigest(r), ja = []), m || (m = {},
                        ja.push(h)), m[b] && (e = m[b].previousValue), m[b] = new Jb(e, c))
                }

                function h() {
                    d.$onChanges(m);
                    m = void 0
                }

                var k = [], l = {}, m;
                p(e, function (e, h) {
                    var m = e.attrName, q = e.optional, H, D, F, s;
                    switch (e.mode) {
                        case "@":
                            q || wa.call(c, m) || (d[h] = c[m] = void 0);
                            q = c.$observe(m, function (a) {
                                if (C(a) || La(a)) f(h, a, d[h]), d[h] = a
                            });
                            c.$$observers[m].$$scope = a;
                            H = c[m];
                            C(H) ? d[h] = b(H)(a) : La(H) && (d[h] = H);
                            l[h] = new Jb(oc, d[h]);
                            k.push(q);
                            break;
                        case "=":
                            if (!wa.call(c, m)) {
                                if (q)break;
                                c[m] = void 0
                            }
                            if (q && !c[m])break;
                            D = n(c[m]);
                            s = D.literal ? sa : $b;
                            F = D.assign ||
                                function () {
                                    H = d[h] = D(a);
                                    throw ga("nonassign", c[m], m, g.name);
                                };
                            H = d[h] = D(a);
                            q = function (b) {
                                s(b, d[h]) || (s(b, H) ? F(a, b = d[h]) : d[h] = b);
                                return H = b
                            };
                            q.$stateful = !0;
                            q = e.collection ? a.$watchCollection(c[m], q) : a.$watch(n(c[m], q), null, D.literal);
                            k.push(q);
                            break;
                        case "<":
                            if (!wa.call(c, m)) {
                                if (q)break;
                                c[m] = void 0
                            }
                            if (q && !c[m])break;
                            D = n(c[m]);
                            var L = D.literal, J = d[h] = D(a);
                            l[h] = new Jb(oc, d[h]);
                            q = a.$watch(D, function (a, b) {
                                if (b === a) {
                                    if (b === J || L && sa(b, J))return;
                                    b = J
                                }
                                f(h, a, b);
                                d[h] = a
                            }, L);
                            k.push(q);
                            break;
                        case "&":
                            D = c.hasOwnProperty(m) ?
                                n(c[m]) : B;
                            if (D === B && q)break;
                            d[h] = function (b) {
                                return D(a, b)
                            }
                    }
                });
                return {
                    initialChanges: l, removeWatches: k.length && function () {
                        for (var a = 0, b = k.length; a < b; ++a)k[a]()
                    }
                }
            }

            var Ia = /^\w/, za = x.document.createElement("div"), Ja = w, Ka = u, Ca = M, ja;
            ca.prototype = {
                $normalize: Ea, $addClass: function (a) {
                    a && 0 < a.length && U.addClass(this.$$element, a)
                }, $removeClass: function (a) {
                    a && 0 < a.length && U.removeClass(this.$$element, a)
                }, $updateClass: function (a, b) {
                    var c = sd(a, b);
                    c && c.length && U.addClass(this.$$element, c);
                    (c = sd(b, a)) && c.length &&
                    U.removeClass(this.$$element, c)
                }, $set: function (a, b, d, e) {
                    var g = kd(this.$$element[0], a), f = td[a], h = a;
                    g ? (this.$$element.prop(a, b), e = g) : f && (this[f] = b, h = f);
                    this[a] = b;
                    e ? this.$attr[a] = e : (e = this.$attr[a]) || (this.$attr[a] = e = Vc(a, "-"));
                    g = ya(this.$$element);
                    if ("a" === g && ("href" === a || "xlinkHref" === a) || "img" === g && "src" === a) this[a] = b = Y(b, "src" === a); else if ("img" === g && "srcset" === a && t(b)) {
                        for (var g = "", f = P(b), k = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,
                                 k = /\s/.test(f) ? k : /(,)/, f = f.split(k), k = Math.floor(f.length / 2), l = 0; l <
                             k; l++)var m = 2 * l, g = g + Y(P(f[m]), !0), g = g + (" " + P(f[m + 1]));
                        f = P(f[2 * l]).split(/\s/);
                        g += Y(P(f[0]), !0);
                        2 === f.length && (g += " " + P(f[1]));
                        this[a] = b = g
                    }
                    !1 !== d && (null === b || v(b) ? this.$$element.removeAttr(e) : Ia.test(e) ? this.$$element.attr(e, b) : Ta(this.$$element[0], e, b));
                    (a = this.$$observers) && p(a[h], function (a) {
                        try {
                            a(b)
                        } catch (d) {
                            c(d)
                        }
                    })
                }, $observe: function (a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = R()), e = d[a] || (d[a] = []);
                    e.push(b);
                    T.$evalAsync(function () {
                        e.$$inter || !c.hasOwnProperty(a) || v(c[a]) || b(c[a])
                    });
                    return function () {
                        cb(e,
                            b)
                    }
                }
            };
            var Fa = b.startSymbol(), Ga = b.endSymbol(), Ha = "{{" === Fa && "}}" === Ga ? ab : function (a) {
                return a.replace(/\{\{/g, Fa).replace(/}}/g, Ga)
            }, Na = /^ngAttr[A-Z]/, Oa = /^(.+)Start$/;
            da.$$addBindingInfo = q ? function (a, b) {
                var c = a.data("$binding") || [];
                I(b) ? c = c.concat(b) : c.push(b);
                a.data("$binding", c)
            } : B;
            da.$$addBindingClass = q ? function (a) {
                Da(a, "ng-binding")
            } : B;
            da.$$addScopeInfo = q ? function (a, b, c, d) {
                a.data(c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", b)
            } : B;
            da.$$addScopeClass = q ? function (a, b) {
                Da(a, b ? "ng-isolate-scope" :
                    "ng-scope")
            } : B;
            da.$$createComment = function (a, b) {
                var c = "";
                q && (c = " " + (a || "") + ": ", b && (c += b + " "));
                return x.document.createComment(c)
            };
            return da
        }]
    }

    function Jb(a, b) {
        this.previousValue = a;
        this.currentValue = b
    }

    function Ea(a) {
        return a.replace(od, "").replace(ug, ib)
    }

    function sd(a, b) {
        var d = "", c = a.split(/\s+/), e = b.split(/\s+/), f = 0;
        a:for (; f < c.length; f++) {
            for (var g = c[f], k = 0; k < e.length; k++)if (g === e[k])continue a;
            d += (0 < d.length ? " " : "") + g
        }
        return d
    }

    function rd(a) {
        a = z(a);
        var b = a.length;
        if (1 >= b)return a;
        for (; b--;) {
            var d =
                a[b];
            (8 === d.nodeType || d.nodeType === Ma && "" === d.nodeValue.trim()) && vg.call(a, b, 1)
        }
        return a
    }

    function tg(a, b) {
        if (b && C(b))return b;
        if (C(a)) {
            var d = ud.exec(a);
            if (d)return d[3]
        }
    }

    function zf() {
        var a = {}, b = !1;
        this.has = function (b) {
            return a.hasOwnProperty(b)
        };
        this.register = function (b, c) {
            Oa(b, "controller");
            G(b) ? O(a, b) : a[b] = c
        };
        this.allowGlobals = function () {
            b = !0
        };
        this.$get = ["$injector", "$window", function (d, c) {
            function e(a, b, c, d) {
                if (!a || !G(a.$scope))throw K("$controller")("noscp", d, b);
                a.$scope[b] = c
            }

            return function (f,
                             g, k, h) {
                var l, m, n;
                k = !0 === k;
                h && C(h) && (n = h);
                if (C(f)) {
                    h = f.match(ud);
                    if (!h)throw vd("ctrlfmt", f);
                    m = h[1];
                    n = n || h[3];
                    f = a.hasOwnProperty(m) ? a[m] : Xc(g.$scope, m, !0) || (b ? Xc(c, m, !0) : void 0);
                    if (!f)throw vd("ctrlreg", m);
                    ub(f, m, !0)
                }
                if (k)return k = (I(f) ? f[f.length - 1] : f).prototype, l = Object.create(k || null), n && e(g, n, l, m || f.name), O(function () {
                    var a = d.invoke(f, l, g, m);
                    a !== l && (G(a) || E(a)) && (l = a, n && e(g, n, l, m || f.name));
                    return l
                }, {instance: l, identifier: n});
                l = d.instantiate(f, g, m);
                n && e(g, n, l, m || f.name);
                return l
            }
        }]
    }

    function Af() {
        this.$get =
            ["$window", function (a) {
                return z(a.document)
            }]
    }

    function Bf() {
        this.$get = ["$document", "$rootScope", function (a, b) {
            function d() {
                e = c.hidden
            }

            var c = a[0], e = c && c.hidden;
            a.on("visibilitychange", d);
            b.$on("$destroy", function () {
                a.off("visibilitychange", d)
            });
            return function () {
                return e
            }
        }]
    }

    function Cf() {
        this.$get = ["$log", function (a) {
            return function (b, d) {
                a.error.apply(a, arguments)
            }
        }]
    }

    function pc(a) {
        return G(a) ? ia(a) ? a.toISOString() : eb(a) : a
    }

    function Hf() {
        this.$get = function () {
            return function (a) {
                if (!a)return "";
                var b =
                    [];
                Nc(a, function (a, c) {
                    null === a || v(a) || (I(a) ? p(a, function (a) {
                        b.push(ma(c) + "=" + ma(pc(a)))
                    }) : b.push(ma(c) + "=" + ma(pc(a))))
                });
                return b.join("&")
            }
        }
    }

    function If() {
        this.$get = function () {
            return function (a) {
                function b(a, e, f) {
                    null === a || v(a) || (I(a) ? p(a, function (a, c) {
                        b(a, e + "[" + (G(a) ? c : "") + "]")
                    }) : G(a) && !ia(a) ? Nc(a, function (a, c) {
                        b(a, e + (f ? "" : "[") + c + (f ? "" : "]"))
                    }) : d.push(ma(e) + "=" + ma(pc(a))))
                }

                if (!a)return "";
                var d = [];
                b(a, "", !0);
                return d.join("&")
            }
        }
    }

    function qc(a, b) {
        if (C(a)) {
            var d = a.replace(wg, "").trim();
            if (d) {
                var c =
                    b("Content-Type");
                (c = c && 0 === c.indexOf(wd)) || (c = (c = d.match(xg)) && yg[c[0]].test(d));
                if (c)try {
                    a = Qc(d)
                } catch (e) {
                    throw rc("baddata", a, e);
                }
            }
        }
        return a
    }

    function xd(a) {
        var b = R(), d;
        C(a) ? p(a.split("\n"), function (a) {
            d = a.indexOf(":");
            var e = N(P(a.substr(0, d)));
            a = P(a.substr(d + 1));
            e && (b[e] = b[e] ? b[e] + ", " + a : a)
        }) : G(a) && p(a, function (a, d) {
                var f = N(d), g = P(a);
                f && (b[f] = b[f] ? b[f] + ", " + g : g)
            });
        return b
    }

    function yd(a) {
        var b;
        return function (d) {
            b || (b = xd(a));
            return d ? (d = b[N(d)], void 0 === d && (d = null), d) : b
        }
    }

    function zd(a, b, d, c) {
        if (E(c))return c(a,
            b, d);
        p(c, function (c) {
            a = c(a, b, d)
        });
        return a
    }

    function Gf() {
        var a = this.defaults = {
            transformResponse: [qc],
            transformRequest: [function (a) {
                return G(a) && "[object File]" !== la.call(a) && "[object Blob]" !== la.call(a) && "[object FormData]" !== la.call(a) ? eb(a) : a
            }],
            headers: {common: {Accept: "application/json, text/plain, */*"}, post: ra(sc), put: ra(sc), patch: ra(sc)},
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            paramSerializer: "$httpParamSerializer",
            jsonpCallbackParam: "callback"
        }, b = !1;
        this.useApplyAsync = function (a) {
            return t(a) ?
                (b = !!a, this) : b
        };
        var d = this.interceptors = [];
        this.$get = ["$browser", "$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", "$sce", function (c, e, f, g, k, h, l, m) {
            function n(b) {
                function d(a, b) {
                    for (var c = 0, e = b.length; c < e;) {
                        var g = b[c++], f = b[c++];
                        a = a.then(g, f)
                    }
                    b.length = 0;
                    return a
                }

                function e(a, b) {
                    var c, d = {};
                    p(a, function (a, e) {
                        E(a) ? (c = a(b), null != c && (d[e] = c)) : d[e] = a
                    });
                    return d
                }

                function g(a) {
                    var b = O({}, a);
                    b.data = zd(a.data, a.headers, a.status, f.transformResponse);
                    a = a.status;
                    return 200 <= a && 300 >
                    a ? b : h.reject(b)
                }

                if (!G(b))throw K("$http")("badreq", b);
                if (!C(m.valueOf(b.url)))throw K("$http")("badreq", b.url);
                var f = O({
                    method: "get",
                    transformRequest: a.transformRequest,
                    transformResponse: a.transformResponse,
                    paramSerializer: a.paramSerializer,
                    jsonpCallbackParam: a.jsonpCallbackParam
                }, b);
                f.headers = function (b) {
                    var c = a.headers, d = O({}, b.headers), g, f, h, c = O({}, c.common, c[N(b.method)]);
                    a:for (g in c) {
                        f = N(g);
                        for (h in d)if (N(h) === f)continue a;
                        d[g] = c[g]
                    }
                    return e(d, ra(b))
                }(b);
                f.method = wb(f.method);
                f.paramSerializer =
                    C(f.paramSerializer) ? l.get(f.paramSerializer) : f.paramSerializer;
                c.$$incOutstandingRequestCount();
                var k = [], n = [];
                b = h.resolve(f);
                p(u, function (a) {
                    (a.request || a.requestError) && k.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && n.push(a.response, a.responseError)
                });
                b = d(b, k);
                b = b.then(function (b) {
                    var c = b.headers, d = zd(b.data, yd(c), void 0, b.transformRequest);
                    v(d) && p(c, function (a, b) {
                        "content-type" === N(b) && delete c[b]
                    });
                    v(b.withCredentials) && !v(a.withCredentials) && (b.withCredentials = a.withCredentials);
                    return q(b, d).then(g, g)
                });
                b = d(b, n);
                return b = b.finally(function () {
                    c.$$completeOutstandingRequest(B)
                })
            }

            function q(c, d) {
                function g(a) {
                    if (a) {
                        var c = {};
                        p(a, function (a, d) {
                            c[d] = function (c) {
                                function d() {
                                    a(c)
                                }

                                b ? k.$applyAsync(d) : k.$$phase ? d() : k.$apply(d)
                            }
                        });
                        return c
                    }
                }

                function l(a, c, d, e) {
                    function g() {
                        q(c, a, d, e)
                    }

                    J && (200 <= a && 300 > a ? J.put(ca, [a, c, xd(d), e]) : J.remove(ca));
                    b ? k.$applyAsync(g) : (g(), k.$$phase || k.$apply())
                }

                function q(a, b, d, e) {
                    b = -1 <= b ? b : 0;
                    (200 <= b && 300 > b ? L.resolve : L.reject)({
                        data: a, status: b, headers: yd(d),
                        config: c, statusText: e
                    })
                }

                function H(a) {
                    q(a.data, a.status, ra(a.headers()), a.statusText)
                }

                function u() {
                    var a = n.pendingRequests.indexOf(c);
                    -1 !== a && n.pendingRequests.splice(a, 1)
                }

                var L = h.defer(), T = L.promise, J, U, Y = c.headers, r = "jsonp" === N(c.method), ca = c.url;
                r ? ca = m.getTrustedResourceUrl(ca) : C(ca) || (ca = m.valueOf(ca));
                ca = F(ca, c.paramSerializer(c.params));
                r && (ca = M(ca, c.jsonpCallbackParam));
                n.pendingRequests.push(c);
                T.then(u, u);
                !c.cache && !a.cache || !1 === c.cache || "GET" !== c.method && "JSONP" !== c.method || (J = G(c.cache) ?
                    c.cache : G(a.cache) ? a.cache : w);
                J && (U = J.get(ca), t(U) ? U && E(U.then) ? U.then(H, H) : I(U) ? q(U[1], U[0], ra(U[2]), U[3]) : q(U, 200, {}, "OK") : J.put(ca, T));
                v(U) && ((U = Ad(c.url) ? f()[c.xsrfCookieName || a.xsrfCookieName] : void 0) && (Y[c.xsrfHeaderName || a.xsrfHeaderName] = U), e(c.method, ca, d, l, Y, c.timeout, c.withCredentials, c.responseType, g(c.eventHandlers), g(c.uploadEventHandlers)));
                return T
            }

            function F(a, b) {
                0 < b.length && (a += (-1 === a.indexOf("?") ? "?" : "&") + b);
                return a
            }

            function M(a, b) {
                if (/[&?][^=]+=JSON_CALLBACK/.test(a))throw rc("badjsonp",
                    a);
                if ((new RegExp("[&?]" + b + "=")).test(a))throw rc("badjsonp", b, a);
                return a += (-1 === a.indexOf("?") ? "?" : "&") + b + "=JSON_CALLBACK"
            }

            var w = g("$http");
            a.paramSerializer = C(a.paramSerializer) ? l.get(a.paramSerializer) : a.paramSerializer;
            var u = [];
            p(d, function (a) {
                u.unshift(C(a) ? l.get(a) : l.invoke(a))
            });
            n.pendingRequests = [];
            (function (a) {
                p(arguments, function (a) {
                    n[a] = function (b, c) {
                        return n(O({}, c || {}, {method: a, url: b}))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function (a) {
                p(arguments, function (a) {
                    n[a] = function (b, c, d) {
                        return n(O({},
                            d || {}, {method: a, url: b, data: c}))
                    }
                })
            })("post", "put", "patch");
            n.defaults = a;
            return n
        }]
    }

    function Kf() {
        this.$get = function () {
            return function () {
                return new x.XMLHttpRequest
            }
        }
    }

    function Jf() {
        this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function (a, b, d, c) {
            return zg(a, c, a.defer, b, d[0])
        }]
    }

    function zg(a, b, d, c, e) {
        function f(a, b, d) {
            a = a.replace("JSON_CALLBACK", b);
            var f = e.createElement("script"), m = null;
            f.type = "text/javascript";
            f.src = a;
            f.async = !0;
            m = function (a) {
                f.removeEventListener("load", m);
                f.removeEventListener("error",
                    m);
                e.body.removeChild(f);
                f = null;
                var g = -1, F = "unknown";
                a && ("load" !== a.type || c.wasCalled(b) || (a = {type: "error"}), F = a.type, g = "error" === a.type ? 404 : 200);
                d && d(g, F)
            };
            f.addEventListener("load", m);
            f.addEventListener("error", m);
            e.body.appendChild(f);
            return m
        }

        return function (e, k, h, l, m, n, q, F, M, w) {
            function u() {
                na && na();
                s && s.abort()
            }

            k = k || a.url();
            if ("jsonp" === N(e))var A = c.createCallback(k), na = f(k, A, function (a, b) {
                var e = 200 === a && c.getResponse(A);
                t(D) && d.cancel(D);
                na = s = null;
                l(a, e, "", b);
                c.removeCallback(A)
            }); else {
                var s =
                    b(e, k);
                s.open(e, k, !0);
                p(m, function (a, b) {
                    t(a) && s.setRequestHeader(b, a)
                });
                s.onload = function () {
                    var a = s.statusText || "", b = "response" in s ? s.response : s.responseText,
                        c = 1223 === s.status ? 204 : s.status;
                    0 === c && (c = b ? 200 : "file" === ua(k).protocol ? 404 : 0);
                    var e = s.getAllResponseHeaders();
                    t(D) && d.cancel(D);
                    na = s = null;
                    l(c, b, e, a)
                };
                e = function () {
                    t(D) && d.cancel(D);
                    na = s = null;
                    l(-1, null, null, "")
                };
                s.onerror = e;
                s.onabort = e;
                s.ontimeout = e;
                p(M, function (a, b) {
                    s.addEventListener(b, a)
                });
                p(w, function (a, b) {
                    s.upload.addEventListener(b, a)
                });
                q && (s.withCredentials = !0);
                if (F)try {
                    s.responseType = F
                } catch (y) {
                    if ("json" !== F)throw y;
                }
                s.send(v(h) ? null : h)
            }
            if (0 < n)var D = d(u, n); else n && E(n.then) && n.then(u)
        }
    }

    function Ef() {
        var a = "{{", b = "}}";
        this.startSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.endSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (d, c, e) {
            function f(a) {
                return "\\\\\\" + a
            }

            function g(c) {
                return c.replace(n, a).replace(q, b)
            }

            function k(a, b, c, d) {
                var e = a.$watch(function (a) {
                    e();
                    return d(a)
                }, b, c);
                return e
            }

            function h(f, h, q, n) {
                function A(a) {
                    try {
                        var b = a;
                        a = q ? e.getTrusted(q, b) : e.valueOf(b);
                        return n && !t(a) ? a : cc(a)
                    } catch (d) {
                        c(Fa.interr(f, d))
                    }
                }

                if (!f.length || -1 === f.indexOf(a)) {
                    var p;
                    h || (h = g(f), p = aa(h), p.exp = f, p.expressions = [], p.$$watchDelegate = k);
                    return p
                }
                n = !!n;
                var s, y, D = 0, H = [], Z = [];
                p = f.length;
                for (var L = [],
                         T = []; D < p;)if (-1 !== (s = f.indexOf(a, D)) && -1 !== (y = f.indexOf(b, s + l))) D !== s && L.push(g(f.substring(D, s))), D = f.substring(s + l, y), H.push(D), Z.push(d(D, A)), D = y + m, T.push(L.length), L.push(""); else {
                    D !== p && L.push(g(f.substring(D)));
                    break
                }
                q && 1 < L.length && Fa.throwNoconcat(f);
                if (!h || H.length) {
                    var J = function (a) {
                        for (var b = 0, c = H.length; b < c; b++) {
                            if (n && v(a[b]))return;
                            L[T[b]] = a[b]
                        }
                        return L.join("")
                    };
                    return O(function (a) {
                        var b = 0, d = H.length, e = Array(d);
                        try {
                            for (; b < d; b++)e[b] = Z[b](a);
                            return J(e)
                        } catch (g) {
                            c(Fa.interr(f, g))
                        }
                    }, {
                        exp: f, expressions: H, $$watchDelegate: function (a, b) {
                            var c;
                            return a.$watchGroup(Z, function (d, e) {
                                var g = J(d);
                                E(b) && b.call(this, g, d !== e ? c : g, a);
                                c = g
                            })
                        }
                    })
                }
            }

            var l = a.length, m = b.length, n = new RegExp(a.replace(/./g, f), "g"), q = new RegExp(b.replace(/./g,
                f), "g");
            h.startSymbol = function () {
                return a
            };
            h.endSymbol = function () {
                return b
            };
            return h
        }]
    }

    function Ff() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (a, b, d, c, e) {
            function f(f, h, l, m) {
                function n() {
                    q ? f.apply(null, F) : f(u)
                }

                var q = 4 < arguments.length, F = q ? xa.call(arguments, 4) : [], p = b.setInterval,
                    w = b.clearInterval, u = 0, A = t(m) && !m, r = (A ? c : d).defer(), s = r.promise;
                l = t(l) ? l : 0;
                s.$$intervalId = p(function () {
                    A ? e.defer(n) : a.$evalAsync(n);
                    r.notify(u++);
                    0 < l && u >= l && (r.resolve(u), w(s.$$intervalId), delete g[s.$$intervalId]);
                    A || a.$apply()
                }, h);
                g[s.$$intervalId] = r;
                return s
            }

            var g = {};
            f.cancel = function (a) {
                return a && a.$$intervalId in g ? (g[a.$$intervalId].promise.$$state.pur = !0, g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1
            };
            return f
        }]
    }

    function tc(a) {
        a = a.split("/");
        for (var b = a.length; b--;)a[b] = fb(a[b]);
        return a.join("/")
    }

    function Bd(a, b) {
        var d = ua(a);
        b.$$protocol = d.protocol;
        b.$$host = d.hostname;
        b.$$port = Q(d.port) || Ag[d.protocol] || null
    }

    function Cd(a, b) {
        if (Bg.test(a))throw mb("badpath",
            a);
        var d = "/" !== a.charAt(0);
        d && (a = "/" + a);
        var c = ua(a);
        b.$$path = decodeURIComponent(d && "/" === c.pathname.charAt(0) ? c.pathname.substring(1) : c.pathname);
        b.$$search = Tc(c.search);
        b.$$hash = decodeURIComponent(c.hash);
        b.$$path && "/" !== b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function uc(a, b) {
        return a.slice(0, b.length) === b
    }

    function va(a, b) {
        if (uc(b, a))return b.substr(a.length)
    }

    function ja(a) {
        var b = a.indexOf("#");
        return -1 === b ? a : a.substr(0, b)
    }

    function nb(a) {
        return a.replace(/(#.+)|#$/, "$1")
    }

    function vc(a, b, d) {
        this.$$html5 =
            !0;
        d = d || "";
        Bd(a, this);
        this.$$parse = function (a) {
            var d = va(b, a);
            if (!C(d))throw mb("ipthprfx", a, b);
            Cd(d, this);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var a = bc(this.$$search), d = this.$$hash ? "#" + fb(this.$$hash) : "";
            this.$$url = tc(this.$$path) + (a ? "?" + a : "") + d;
            this.$$absUrl = b + this.$$url.substr(1);
            this.$$urlUpdatedByLocation = !0
        };
        this.$$parseLinkUrl = function (c, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            t(f = va(a, c)) ? (g = f, g = d && t(f = va(d, f)) ? b + (va("/", f) || f) : a + g) :
                t(f = va(b, c)) ? g = b + f : b === c + "/" && (g = b);
            g && this.$$parse(g);
            return !!g
        }
    }

    function wc(a, b, d) {
        Bd(a, this);
        this.$$parse = function (c) {
            var e = va(a, c) || va(b, c), f;
            v(e) || "#" !== e.charAt(0) ? this.$$html5 ? f = e : (f = "", v(e) && (a = c, this.replace())) : (f = va(d, e), v(f) && (f = e));
            Cd(f, this);
            c = this.$$path;
            var e = a, g = /^\/[A-Z]:(\/.*)/;
            uc(f, e) && (f = f.replace(e, ""));
            g.exec(f) || (c = (f = g.exec(c)) ? f[1] : c);
            this.$$path = c;
            this.$$compose()
        };
        this.$$compose = function () {
            var b = bc(this.$$search), e = this.$$hash ? "#" + fb(this.$$hash) : "";
            this.$$url = tc(this.$$path) +
                (b ? "?" + b : "") + e;
            this.$$absUrl = a + (this.$$url ? d + this.$$url : "");
            this.$$urlUpdatedByLocation = !0
        };
        this.$$parseLinkUrl = function (b, d) {
            return ja(a) === ja(b) ? (this.$$parse(b), !0) : !1
        }
    }

    function Dd(a, b, d) {
        this.$$html5 = !0;
        wc.apply(this, arguments);
        this.$$parseLinkUrl = function (c, e) {
            if (e && "#" === e[0])return this.hash(e.slice(1)), !0;
            var f, g;
            a === ja(c) ? f = c : (g = va(b, c)) ? f = a + d + g : b === c + "/" && (f = b);
            f && this.$$parse(f);
            return !!f
        };
        this.$$compose = function () {
            var b = bc(this.$$search), e = this.$$hash ? "#" + fb(this.$$hash) : "";
            this.$$url =
                tc(this.$$path) + (b ? "?" + b : "") + e;
            this.$$absUrl = a + d + this.$$url;
            this.$$urlUpdatedByLocation = !0
        }
    }

    function Kb(a) {
        return function () {
            return this[a]
        }
    }

    function Ed(a, b) {
        return function (d) {
            if (v(d))return this[a];
            this[a] = b(d);
            this.$$compose();
            return this
        }
    }

    function Mf() {
        var a = "!", b = {enabled: !1, requireBase: !0, rewriteLinks: !0};
        this.hashPrefix = function (b) {
            return t(b) ? (a = b, this) : a
        };
        this.html5Mode = function (a) {
            if (La(a))return b.enabled = a, this;
            if (G(a)) {
                La(a.enabled) && (b.enabled = a.enabled);
                La(a.requireBase) && (b.requireBase =
                    a.requireBase);
                if (La(a.rewriteLinks) || C(a.rewriteLinks)) b.rewriteLinks = a.rewriteLinks;
                return this
            }
            return b
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (d, c, e, f, g) {
            function k(a, b, d) {
                var e = l.url(), g = l.$$state;
                try {
                    c.url(a, b, d), l.$$state = c.state()
                } catch (f) {
                    throw l.url(e), l.$$state = g, f;
                }
            }

            function h(a, b) {
                d.$broadcast("$locationChangeSuccess", l.absUrl(), a, l.$$state, b)
            }

            var l, m;
            m = c.baseHref();
            var n = c.url(), q;
            if (b.enabled) {
                if (!m && b.requireBase)throw mb("nobase");
                q = n.substring(0,
                        n.indexOf("/", n.indexOf("//") + 2)) + (m || "/");
                m = e.history ? vc : Dd
            } else q = ja(n), m = wc;
            var F = q.substr(0, ja(q).lastIndexOf("/") + 1);
            l = new m(q, F, "#" + a);
            l.$$parseLinkUrl(n, n);
            l.$$state = c.state();
            var p = /^\s*(javascript|mailto):/i;
            f.on("click", function (a) {
                var e = b.rewriteLinks;
                if (e && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 !== a.which && 2 !== a.button) {
                    for (var h = z(a.target); "a" !== ya(h[0]);)if (h[0] === f[0] || !(h = h.parent())[0])return;
                    if (!C(e) || !v(h.attr(e))) {
                        var e = h.prop("href"), k = h.attr("href") || h.attr("xlink:href");
                        G(e) &&
                        "[object SVGAnimatedString]" === e.toString() && (e = ua(e.animVal).href);
                        p.test(e) || !e || h.attr("target") || a.isDefaultPrevented() || !l.$$parseLinkUrl(e, k) || (a.preventDefault(), l.absUrl() !== c.url() && (d.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                    }
                }
            });
            nb(l.absUrl()) !== nb(n) && c.url(l.absUrl(), !0);
            var w = !0;
            c.onUrlChange(function (a, b) {
                uc(a, F) ? (d.$evalAsync(function () {
                    var c = l.absUrl(), e = l.$$state, g;
                    a = nb(a);
                    l.$$parse(a);
                    l.$$state = b;
                    g = d.$broadcast("$locationChangeStart", a, c, b, e).defaultPrevented;
                    l.absUrl() ===
                    a && (g ? (l.$$parse(c), l.$$state = e, k(c, !1, e)) : (w = !1, h(c, e)))
                }), d.$$phase || d.$digest()) : g.location.href = a
            });
            d.$watch(function () {
                if (w || l.$$urlUpdatedByLocation) {
                    l.$$urlUpdatedByLocation = !1;
                    var a = nb(c.url()), b = nb(l.absUrl()), g = c.state(), f = l.$$replace,
                        m = a !== b || l.$$html5 && e.history && g !== l.$$state;
                    if (w || m) w = !1, d.$evalAsync(function () {
                        var b = l.absUrl(),
                            c = d.$broadcast("$locationChangeStart", b, a, l.$$state, g).defaultPrevented;
                        l.absUrl() === b && (c ? (l.$$parse(a), l.$$state = g) : (m && k(b, f, g === l.$$state ? null : l.$$state),
                            h(a, g)))
                    })
                }
                l.$$replace = !1
            });
            return l
        }]
    }

    function Nf() {
        var a = !0, b = this;
        this.debugEnabled = function (b) {
            return t(b) ? (a = b, this) : a
        };
        this.$get = ["$window", function (d) {
            function c(a) {
                Zb(a) && (a.stack && f ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = d.console || {}, e = b[a] || b.log || B;
                return function () {
                    var a = [];
                    p(arguments, function (b) {
                        a.push(c(b))
                    });
                    return Function.prototype.apply.call(e, b, a)
                }
            }

            var f = Ba || /\bEdge\//.test(d.navigator && d.navigator.userAgent);
            return {
                log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                    var c = e("debug");
                    return function () {
                        a && c.apply(b, arguments)
                    }
                }()
            }
        }]
    }

    function Cg(a) {
        return a + ""
    }

    function Dg(a, b) {
        return "undefined" !== typeof a ? a : b
    }

    function Fd(a, b) {
        return "undefined" === typeof a ? b : "undefined" === typeof b ? a : a + b
    }

    function Eg(a, b) {
        switch (a.type) {
            case r.MemberExpression:
                if (a.computed)return !1;
                break;
            case r.UnaryExpression:
                return 1;
            case r.BinaryExpression:
                return "+" !==
                a.operator ? 1 : !1;
            case r.CallExpression:
                return !1
        }
        return void 0 === b ? Gd : b
    }

    function X(a, b, d) {
        var c, e, f = a.isPure = Eg(a, d);
        switch (a.type) {
            case r.Program:
                c = !0;
                p(a.body, function (a) {
                    X(a.expression, b, f);
                    c = c && a.expression.constant
                });
                a.constant = c;
                break;
            case r.Literal:
                a.constant = !0;
                a.toWatch = [];
                break;
            case r.UnaryExpression:
                X(a.argument, b, f);
                a.constant = a.argument.constant;
                a.toWatch = a.argument.toWatch;
                break;
            case r.BinaryExpression:
                X(a.left, b, f);
                X(a.right, b, f);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch =
                    a.left.toWatch.concat(a.right.toWatch);
                break;
            case r.LogicalExpression:
                X(a.left, b, f);
                X(a.right, b, f);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case r.ConditionalExpression:
                X(a.test, b, f);
                X(a.alternate, b, f);
                X(a.consequent, b, f);
                a.constant = a.test.constant && a.alternate.constant && a.consequent.constant;
                a.toWatch = a.constant ? [] : [a];
                break;
            case r.Identifier:
                a.constant = !1;
                a.toWatch = [a];
                break;
            case r.MemberExpression:
                X(a.object, b, f);
                a.computed && X(a.property, b, f);
                a.constant = a.object.constant &&
                    (!a.computed || a.property.constant);
                a.toWatch = [a];
                break;
            case r.CallExpression:
                c = d = a.filter ? !b(a.callee.name).$stateful : !1;
                e = [];
                p(a.arguments, function (a) {
                    X(a, b, f);
                    c = c && a.constant;
                    a.constant || e.push.apply(e, a.toWatch)
                });
                a.constant = c;
                a.toWatch = d ? e : [a];
                break;
            case r.AssignmentExpression:
                X(a.left, b, f);
                X(a.right, b, f);
                a.constant = a.left.constant && a.right.constant;
                a.toWatch = [a];
                break;
            case r.ArrayExpression:
                c = !0;
                e = [];
                p(a.elements, function (a) {
                    X(a, b, f);
                    c = c && a.constant;
                    a.constant || e.push.apply(e, a.toWatch)
                });
                a.constant =
                    c;
                a.toWatch = e;
                break;
            case r.ObjectExpression:
                c = !0;
                e = [];
                p(a.properties, function (a) {
                    X(a.value, b, f);
                    c = c && a.value.constant && !a.computed;
                    a.value.constant || e.push.apply(e, a.value.toWatch);
                    a.computed && (X(a.key, b, f), a.key.constant || e.push.apply(e, a.key.toWatch))
                });
                a.constant = c;
                a.toWatch = e;
                break;
            case r.ThisExpression:
                a.constant = !1;
                a.toWatch = [];
                break;
            case r.LocalsExpression:
                a.constant = !1, a.toWatch = []
        }
    }

    function Hd(a) {
        if (1 === a.length) {
            a = a[0].expression;
            var b = a.toWatch;
            return 1 !== b.length ? b : b[0] !== a ? b : void 0
        }
    }

    function Id(a) {
        return a.type === r.Identifier || a.type === r.MemberExpression
    }

    function Jd(a) {
        if (1 === a.body.length && Id(a.body[0].expression))return {
            type: r.AssignmentExpression,
            left: a.body[0].expression,
            right: {type: r.NGValueParameter},
            operator: "="
        }
    }

    function Kd(a) {
        this.$filter = a
    }

    function Ld(a) {
        this.$filter = a
    }

    function xc(a, b, d) {
        this.ast = new r(a, d);
        this.astCompiler = d.csp ? new Ld(b) : new Kd(b)
    }

    function yc(a) {
        return E(a.valueOf) ? a.valueOf() : Fg.call(a)
    }

    function Of() {
        var a = R(), b = {
            "true": !0, "false": !1, "null": null,
            undefined: void 0
        }, d, c;
        this.addLiteral = function (a, c) {
            b[a] = c
        };
        this.setIdentifierFns = function (a, b) {
            d = a;
            c = b;
            return this
        };
        this.$get = ["$filter", function (e) {
            function f(a, b, c) {
                return null == a || null == b ? a === b : "object" !== typeof a || (a = yc(a), "object" !== typeof a || c) ? a === b || a !== a && b !== b : !1
            }

            function g(a, b, c, d, e) {
                var g = d.inputs, h;
                if (1 === g.length) {
                    var k = f, g = g[0];
                    return a.$watch(function (a) {
                        var b = g(a);
                        f(b, k, g.isPure) || (h = d(a, void 0, void 0, [b]), k = b && yc(b));
                        return h
                    }, b, c, e)
                }
                for (var l = [], m = [], n = 0, p = g.length; n < p; n++)l[n] =
                    f, m[n] = null;
                return a.$watch(function (a) {
                    for (var b = !1, c = 0, e = g.length; c < e; c++) {
                        var k = g[c](a);
                        if (b || (b = !f(k, l[c], g[c].isPure))) m[c] = k, l[c] = k && yc(k)
                    }
                    b && (h = d(a, void 0, void 0, m));
                    return h
                }, b, c, e)
            }

            function k(a, b, c, d, e) {
                function f(a) {
                    return d(a)
                }

                function h(a, c, d) {
                    l = a;
                    E(b) && b(a, c, d);
                    t(a) && d.$$postDigest(function () {
                        t(l) && k()
                    })
                }

                var k, l;
                return k = d.inputs ? g(a, h, c, d, e) : a.$watch(f, h, c)
            }

            function h(a, b, c, d) {
                function e(a) {
                    var b = !0;
                    p(a, function (a) {
                        t(a) || (b = !1)
                    });
                    return b
                }

                var g, f;
                return g = a.$watch(function (a) {
                        return d(a)
                    },
                    function (a, c, d) {
                        f = a;
                        E(b) && b(a, c, d);
                        e(a) && d.$$postDigest(function () {
                            e(f) && g()
                        })
                    }, c)
            }

            function l(a, b, c, d) {
                var e = a.$watch(function (a) {
                    e();
                    return d(a)
                }, b, c);
                return e
            }

            function m(a, b) {
                if (!b)return a;
                var c = a.$$watchDelegate, d = !1, e = c !== h && c !== k ? function (c, e, g, f) {
                    g = d && f ? f[0] : a(c, e, g, f);
                    return b(g, c, e)
                } : function (c, d, e, g) {
                    e = a(c, d, e, g);
                    c = b(e, c, d);
                    return t(e) ? c : e
                }, d = !a.inputs;
                c && c !== g ? (e.$$watchDelegate = c, e.inputs = a.inputs) : b.$stateful || (e.$$watchDelegate = g, e.inputs = a.inputs ? a.inputs : [a]);
                e.inputs && (e.inputs = e.inputs.map(function (a) {
                    return a.isPure ===
                    Gd ? function (b) {
                        return a(b)
                    } : a
                }));
                return e
            }

            var n = {
                csp: Ja().noUnsafeEval,
                literals: Ia(b),
                isIdentifierStart: E(d) && d,
                isIdentifierContinue: E(c) && c
            };
            return function (b, c) {
                var d, f, p;
                switch (typeof b) {
                    case "string":
                        return p = b = b.trim(), d = a[p], d || (":" === b.charAt(0) && ":" === b.charAt(1) && (f = !0, b = b.substring(2)), d = new zc(n), d = (new xc(d, e, n)).parse(b), d.constant ? d.$$watchDelegate = l : f ? d.$$watchDelegate = d.literal ? h : k : d.inputs && (d.$$watchDelegate = g), a[p] = d), m(d, c);
                    case "function":
                        return m(b, c);
                    default:
                        return m(B, c)
                }
            }
        }]
    }

    function Qf() {
        var a = !0;
        this.$get = ["$rootScope", "$exceptionHandler", function (b, d) {
            return Md(function (a) {
                b.$evalAsync(a)
            }, d, a)
        }];
        this.errorOnUnhandledRejections = function (b) {
            return t(b) ? (a = b, this) : a
        }
    }

    function Rf() {
        var a = !0;
        this.$get = ["$browser", "$exceptionHandler", function (b, d) {
            return Md(function (a) {
                b.defer(a)
            }, d, a)
        }];
        this.errorOnUnhandledRejections = function (b) {
            return t(b) ? (a = b, this) : a
        }
    }

    function Md(a, b, d) {
        function c() {
            return new e
        }

        function e() {
            var a = this.promise = new f;
            this.resolve = function (b) {
                h(a, b)
            };
            this.reject = function (b) {
                m(a, b)
            };
            this.notify = function (b) {
                q(a, b)
            }
        }

        function f() {
            this.$$state = {status: 0}
        }

        function g() {
            for (; !t && s.length;) {
                var a = s.shift();
                if (!a.pur) {
                    a.pur = !0;
                    var c = a.value,
                        c = "Possibly unhandled rejection: " + ("function" === typeof c ? c.toString().replace(/ \{[\s\S]*$/, "") : v(c) ? "undefined" : "string" !== typeof c ? Ee(c, void 0) : c);
                    Zb(a.value) ? b(a.value, c) : b(c)
                }
            }
        }

        function k(b) {
            !d || b.pending || 2 !== b.status || b.pur || (0 === t && 0 === s.length && a(g), s.push(b));
            !b.processScheduled && b.pending && (b.processScheduled =
                !0, ++t, a(function () {
                var c, e, f;
                f = b.pending;
                b.processScheduled = !1;
                b.pending = void 0;
                try {
                    for (var k = 0, l = f.length; k < l; ++k) {
                        b.pur = !0;
                        e = f[k][0];
                        c = f[k][b.status];
                        try {
                            E(c) ? h(e, c(b.value)) : 1 === b.status ? h(e, b.value) : m(e, b.value)
                        } catch (n) {
                            m(e, n)
                        }
                    }
                } finally {
                    --t, d && 0 === t && a(g)
                }
            }))
        }

        function h(a, b) {
            a.$$state.status || (b === a ? n(a, A("qcycle", b)) : l(a, b))
        }

        function l(a, b) {
            function c(b) {
                f || (f = !0, l(a, b))
            }

            function d(b) {
                f || (f = !0, n(a, b))
            }

            function e(b) {
                q(a, b)
            }

            var g, f = !1;
            try {
                if (G(b) || E(b)) g = b.then;
                E(g) ? (a.$$state.status = -1, g.call(b,
                    c, d, e)) : (a.$$state.value = b, a.$$state.status = 1, k(a.$$state))
            } catch (h) {
                d(h)
            }
        }

        function m(a, b) {
            a.$$state.status || n(a, b)
        }

        function n(a, b) {
            a.$$state.value = b;
            a.$$state.status = 2;
            k(a.$$state)
        }

        function q(c, d) {
            var e = c.$$state.pending;
            0 >= c.$$state.status && e && e.length && a(function () {
                for (var a, c, g = 0, f = e.length; g < f; g++) {
                    c = e[g][0];
                    a = e[g][3];
                    try {
                        q(c, E(a) ? a(d) : d)
                    } catch (h) {
                        b(h)
                    }
                }
            })
        }

        function F(a) {
            var b = new f;
            m(b, a);
            return b
        }

        function r(a, b, c) {
            var d = null;
            try {
                E(c) && (d = c())
            } catch (e) {
                return F(e)
            }
            return d && E(d.then) ? d.then(function () {
                    return b(a)
                },
                F) : b(a)
        }

        function w(a, b, c, d) {
            var e = new f;
            h(e, a);
            return e.then(b, c, d)
        }

        function u(a) {
            if (!E(a))throw A("norslvr", a);
            var b = new f;
            a(function (a) {
                h(b, a)
            }, function (a) {
                m(b, a)
            });
            return b
        }

        var A = K("$q", TypeError), t = 0, s = [];
        O(f.prototype, {
            then: function (a, b, c) {
                if (v(a) && v(b) && v(c))return this;
                var d = new f;
                this.$$state.pending = this.$$state.pending || [];
                this.$$state.pending.push([d, a, b, c]);
                0 < this.$$state.status && k(this.$$state);
                return d
            }, "catch": function (a) {
                return this.then(null, a)
            }, "finally": function (a, b) {
                return this.then(function (b) {
                    return r(b,
                        y, a)
                }, function (b) {
                    return r(b, F, a)
                }, b)
            }
        });
        var y = w;
        u.prototype = f.prototype;
        u.defer = c;
        u.reject = F;
        u.when = w;
        u.resolve = y;
        u.all = function (a) {
            var b = new f, c = 0, d = I(a) ? [] : {};
            p(a, function (a, e) {
                c++;
                w(a).then(function (a) {
                    d[e] = a;
                    --c || h(b, d)
                }, function (a) {
                    m(b, a)
                })
            });
            0 === c && h(b, d);
            return b
        };
        u.race = function (a) {
            var b = c();
            p(a, function (a) {
                w(a).then(b.resolve, b.reject)
            });
            return b.promise
        };
        return u
    }

    function $f() {
        this.$get = ["$window", "$timeout", function (a, b) {
            var d = a.requestAnimationFrame || a.webkitRequestAnimationFrame, c = a.cancelAnimationFrame ||
                a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame, e = !!d, f = e ? function (a) {
                var b = d(a);
                return function () {
                    c(b)
                }
            } : function (a) {
                var c = b(a, 16.66, !1);
                return function () {
                    b.cancel(c)
                }
            };
            f.supported = e;
            return f
        }]
    }

    function Pf() {
        function a(a) {
            function b() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$id = ++sb;
                this.$$ChildScope = null
            }

            b.prototype = a;
            return b
        }

        var b = 10, d = K("$rootScope"), c = null, e = null;
        this.digestTtl =
            function (a) {
                arguments.length && (b = a);
                return b
            };
        this.$get = ["$exceptionHandler", "$parse", "$browser", function (f, g, k) {
            function h(a) {
                a.currentScope.$$destroyed = !0
            }

            function l(a) {
                9 === Ba && (a.$$childHead && l(a.$$childHead), a.$$nextSibling && l(a.$$nextSibling));
                a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
            }

            function m() {
                this.$id = ++sb;
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this.$root =
                    this;
                this.$$destroyed = !1;
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$watchersCount = 0;
                this.$$isolateBindings = null
            }

            function n(a) {
                if (A.$$phase)throw d("inprog", A.$$phase);
                A.$$phase = a
            }

            function q(a, b) {
                do a.$$watchersCount += b; while (a = a.$parent)
            }

            function F(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function r() {
            }

            function w() {
                for (; y.length;)try {
                    y.shift()()
                } catch (a) {
                    f(a)
                }
                e = null
            }

            function u() {
                null === e && (e = k.defer(function () {
                    A.$apply(w)
                }))
            }

            m.prototype = {
                constructor: m, $new: function (b, c) {
                    var d;
                    c = c || this;
                    b ? (d = new m, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope);
                    d.$parent = c;
                    d.$$prevSibling = c.$$childTail;
                    c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d;
                    (b || c !== this) && d.$on("$destroy", h);
                    return d
                }, $watch: function (a, b, d, e) {
                    var f = g(a);
                    if (f.$$watchDelegate)return f.$$watchDelegate(this, b, d, f, a);
                    var h = this, k = h.$$watchers, l = {fn: b, last: r, get: f, exp: e || a, eq: !!d};
                    c = null;
                    E(b) || (l.fn = B);
                    k || (k = h.$$watchers = [], k.$$digestWatchIndex = -1);
                    k.unshift(l);
                    k.$$digestWatchIndex++;
                    q(this, 1);
                    return function () {
                        var a = cb(k, l);
                        0 <= a && (q(h, -1), a < k.$$digestWatchIndex && k.$$digestWatchIndex--);
                        c = null
                    }
                }, $watchGroup: function (a, b) {
                    function c() {
                        h = !1;
                        k ? (k = !1, b(e, e, f)) : b(e, d, f)
                    }

                    var d = Array(a.length), e = Array(a.length), g = [], f = this, h = !1, k = !0;
                    if (!a.length) {
                        var l = !0;
                        f.$evalAsync(function () {
                            l && b(e, e, f)
                        });
                        return function () {
                            l = !1
                        }
                    }
                    if (1 === a.length)return this.$watch(a[0], function (a, c, g) {
                        e[0] = a;
                        d[0] =
                            c;
                        b(e, a === c ? e : d, g)
                    });
                    p(a, function (a, b) {
                        var k = f.$watch(a, function (a, g) {
                            e[b] = a;
                            d[b] = g;
                            h || (h = !0, f.$evalAsync(c))
                        });
                        g.push(k)
                    });
                    return function () {
                        for (; g.length;)g.shift()()
                    }
                }, $watchCollection: function (a, b) {
                    function c(a) {
                        e = a;
                        var b, d, g, h;
                        if (!v(e)) {
                            if (G(e))if (oa(e))for (f !== n && (f = n, s = f.length = 0, l++), a = e.length, s !== a && (l++, f.length = s = a), b = 0; b < a; b++)h = f[b], g = e[b], d = h !== h && g !== g, d || h === g || (l++, f[b] = g); else {
                                f !== q && (f = q = {}, s = 0, l++);
                                a = 0;
                                for (b in e)wa.call(e, b) && (a++, g = e[b], h = f[b], b in f ? (d = h !== h && g !== g, d || h ===
                                g || (l++, f[b] = g)) : (s++, f[b] = g, l++));
                                if (s > a)for (b in l++, f)wa.call(e, b) || (s--, delete f[b])
                            } else f !== e && (f = e, l++);
                            return l
                        }
                    }

                    c.$stateful = !0;
                    var d = this, e, f, h, k = 1 < b.length, l = 0, m = g(a, c), n = [], q = {}, p = !0, s = 0;
                    return this.$watch(m, function () {
                        p ? (p = !1, b(e, e, d)) : b(e, h, d);
                        if (k)if (G(e))if (oa(e)) {
                            h = Array(e.length);
                            for (var a = 0; a < e.length; a++)h[a] = e[a]
                        } else for (a in h = {}, e)wa.call(e, a) && (h[a] = e[a]); else h = e
                    })
                }, $digest: function () {
                    var a, g, h, l, m, q, p, F = b, y, u = [], v, x;
                    n("$digest");
                    k.$$checkUrlChange();
                    this === A && null !== e && (k.defer.cancel(e),
                        w());
                    c = null;
                    do {
                        p = !1;
                        y = this;
                        for (q = 0; q < t.length; q++) {
                            try {
                                x = t[q], l = x.fn, l(x.scope, x.locals)
                            } catch (z) {
                                f(z)
                            }
                            c = null
                        }
                        t.length = 0;
                        a:do {
                            if (q = y.$$watchers)for (q.$$digestWatchIndex = q.length; q.$$digestWatchIndex--;)try {
                                if (a = q[q.$$digestWatchIndex])if (m = a.get, (g = m(y)) !== (h = a.last) && !(a.eq ? sa(g, h) : ba(g) && ba(h))) p = !0, c = a, a.last = a.eq ? Ia(g, null) : g, l = a.fn, l(g, h === r ? g : h, y), 5 > F && (v = 4 - F, u[v] || (u[v] = []), u[v].push({
                                    msg: E(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                                    newVal: g,
                                    oldVal: h
                                })); else if (a === c) {
                                    p = !1;
                                    break a
                                }
                            } catch (B) {
                                f(B)
                            }
                            if (!(q =
                                    y.$$watchersCount && y.$$childHead || y !== this && y.$$nextSibling))for (; y !== this && !(q = y.$$nextSibling);)y = y.$parent
                        } while (y = q);
                        if ((p || t.length) && !F--)throw A.$$phase = null, d("infdig", b, u);
                    } while (p || t.length);
                    for (A.$$phase = null; D < s.length;)try {
                        s[D++]()
                    } catch (G) {
                        f(G)
                    }
                    s.length = D = 0;
                    k.$$checkUrlChange()
                }, $destroy: function () {
                    if (!this.$$destroyed) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        this === A && k.$$applicationDestroyed();
                        q(this, -this.$$watchersCount);
                        for (var b in this.$$listenerCount)F(this,
                            this.$$listenerCount[b], b);
                        a && a.$$childHead === this && (a.$$childHead = this.$$nextSibling);
                        a && a.$$childTail === this && (a.$$childTail = this.$$prevSibling);
                        this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling);
                        this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling);
                        this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = B;
                        this.$on = this.$watch = this.$watchGroup = function () {
                            return B
                        };
                        this.$$listeners = {};
                        this.$$nextSibling = null;
                        l(this)
                    }
                }, $eval: function (a, b) {
                    return g(a)(this,
                        b)
                }, $evalAsync: function (a, b) {
                    A.$$phase || t.length || k.defer(function () {
                        t.length && A.$digest()
                    });
                    t.push({scope: this, fn: g(a), locals: b})
                }, $$postDigest: function (a) {
                    s.push(a)
                }, $apply: function (a) {
                    try {
                        n("$apply");
                        try {
                            return this.$eval(a)
                        } finally {
                            A.$$phase = null
                        }
                    } catch (b) {
                        f(b)
                    } finally {
                        try {
                            A.$digest()
                        } catch (c) {
                            throw f(c), c;
                        }
                    }
                }, $applyAsync: function (a) {
                    function b() {
                        c.$eval(a)
                    }

                    var c = this;
                    a && y.push(b);
                    a = g(a);
                    u()
                }, $on: function (a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    var d = this;
                    do d.$$listenerCount[a] ||
                    (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                    var e = this;
                    return function () {
                        var d = c.indexOf(b);
                        -1 !== d && (c[d] = null, F(e, 1, a))
                    }
                }, $emit: function (a, b) {
                    var c = [], d, e = this, g = !1, h = {
                        name: a, targetScope: e, stopPropagation: function () {
                            g = !0
                        }, preventDefault: function () {
                            h.defaultPrevented = !0
                        }, defaultPrevented: !1
                    }, k = db([h], arguments, 1), l, m;
                    do {
                        d = e.$$listeners[a] || c;
                        h.currentScope = e;
                        l = 0;
                        for (m = d.length; l < m; l++)if (d[l])try {
                            d[l].apply(null, k)
                        } catch (n) {
                            f(n)
                        } else d.splice(l, 1), l--, m--;
                        if (g)return h.currentScope =
                            null, h;
                        e = e.$parent
                    } while (e);
                    h.currentScope = null;
                    return h
                }, $broadcast: function (a, b) {
                    var c = this, d = this, e = {
                        name: a, targetScope: this, preventDefault: function () {
                            e.defaultPrevented = !0
                        }, defaultPrevented: !1
                    };
                    if (!this.$$listenerCount[a])return e;
                    for (var g = db([e], arguments, 1), h, k; c = d;) {
                        e.currentScope = c;
                        d = c.$$listeners[a] || [];
                        h = 0;
                        for (k = d.length; h < k; h++)if (d[h])try {
                            d[h].apply(null, g)
                        } catch (l) {
                            f(l)
                        } else d.splice(h, 1), h--, k--;
                        if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))for (; c !== this && !(d =
                            c.$$nextSibling);)c = c.$parent
                    }
                    e.currentScope = null;
                    return e
                }
            };
            var A = new m, t = A.$$asyncQueue = [], s = A.$$postDigestQueue = [], y = A.$$applyAsyncQueue = [], D = 0;
            return A
        }]
    }

    function He() {
        var a = /^\s*(https?|ftp|mailto|tel|file):/, b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (b) {
            return t(b) ? (a = b, this) : a
        };
        this.imgSrcSanitizationWhitelist = function (a) {
            return t(a) ? (b = a, this) : b
        };
        this.$get = function () {
            return function (d, c) {
                var e = c ? b : a, f;
                f = ua(d).href;
                return "" === f || f.match(e) ? d : "unsafe:" +
                    f
            }
        }
    }

    function Gg(a) {
        if ("self" === a)return a;
        if (C(a)) {
            if (-1 < a.indexOf("***"))throw qa("iwcard", a);
            a = Nd(a).replace(/\\\*\\\*/g, ".*").replace(/\\\*/g, "[^:/.?&;]*");
            return new RegExp("^" + a + "$")
        }
        if ($a(a))return new RegExp("^" + a.source + "$");
        throw qa("imatcher");
    }

    function Od(a) {
        var b = [];
        t(a) && p(a, function (a) {
            b.push(Gg(a))
        });
        return b
    }

    function Tf() {
        this.SCE_CONTEXTS = ka;
        var a = ["self"], b = [];
        this.resourceUrlWhitelist = function (b) {
            arguments.length && (a = Od(b));
            return a
        };
        this.resourceUrlBlacklist = function (a) {
            arguments.length &&
            (b = Od(a));
            return b
        };
        this.$get = ["$injector", function (d) {
            function c(a, b) {
                return "self" === a ? Ad(b) : !!a.exec(b.href)
            }

            function e(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }

            var f = function (a) {
                throw qa("unsafe");
            };
            d.has("$sanitize") && (f = d.get("$sanitize"));
            var g = e(), k = {};
            k[ka.HTML] = e(g);
            k[ka.CSS] = e(g);
            k[ka.URL] =
                e(g);
            k[ka.JS] = e(g);
            k[ka.RESOURCE_URL] = e(k[ka.URL]);
            return {
                trustAs: function (a, b) {
                    var c = k.hasOwnProperty(a) ? k[a] : null;
                    if (!c)throw qa("icontext", a, b);
                    if (null === b || v(b) || "" === b)return b;
                    if ("string" !== typeof b)throw qa("itype", a);
                    return new c(b)
                }, getTrusted: function (d, e) {
                    if (null === e || v(e) || "" === e)return e;
                    var g = k.hasOwnProperty(d) ? k[d] : null;
                    if (g && e instanceof g)return e.$$unwrapTrustedValue();
                    if (d === ka.RESOURCE_URL) {
                        var g = ua(e.toString()), n, q, p = !1;
                        n = 0;
                        for (q = a.length; n < q; n++)if (c(a[n], g)) {
                            p = !0;
                            break
                        }
                        if (p)for (n =
                                       0, q = b.length; n < q; n++)if (c(b[n], g)) {
                            p = !1;
                            break
                        }
                        if (p)return e;
                        throw qa("insecurl", e.toString());
                    }
                    if (d === ka.HTML)return f(e);
                    throw qa("unsafe");
                }, valueOf: function (a) {
                    return a instanceof g ? a.$$unwrapTrustedValue() : a
                }
            }
        }]
    }

    function Sf() {
        var a = !0;
        this.enabled = function (b) {
            arguments.length && (a = !!b);
            return a
        };
        this.$get = ["$parse", "$sceDelegate", function (b, d) {
            if (a && 8 > Ba)throw qa("iequirks");
            var c = ra(ka);
            c.isEnabled = function () {
                return a
            };
            c.trustAs = d.trustAs;
            c.getTrusted = d.getTrusted;
            c.valueOf = d.valueOf;
            a || (c.trustAs =
                c.getTrusted = function (a, b) {
                    return b
                }, c.valueOf = ab);
            c.parseAs = function (a, d) {
                var e = b(d);
                return e.literal && e.constant ? e : b(d, function (b) {
                    return c.getTrusted(a, b)
                })
            };
            var e = c.parseAs, f = c.getTrusted, g = c.trustAs;
            p(ka, function (a, b) {
                var d = N(b);
                c[("parse_as_" + d).replace(Ac, ib)] = function (b) {
                    return e(a, b)
                };
                c[("get_trusted_" + d).replace(Ac, ib)] = function (b) {
                    return f(a, b)
                };
                c[("trust_as_" + d).replace(Ac, ib)] = function (b) {
                    return g(a, b)
                }
            });
            return c
        }]
    }

    function Uf() {
        this.$get = ["$window", "$document", function (a, b) {
            var d = {},
                c = !((!a.nw || !a.nw.process) && a.chrome && (a.chrome.app && a.chrome.app.runtime || !a.chrome.app && a.chrome.runtime && a.chrome.runtime.id)) && a.history && a.history.pushState,
                e = Q((/android (\d+)/.exec(N((a.navigator || {}).userAgent)) || [])[1]),
                f = /Boxee/i.test((a.navigator || {}).userAgent), g = b[0] || {}, k = g.body && g.body.style, h = !1,
                l = !1;
            k && (h = !!("transition" in k || "webkitTransition" in k), l = !!("animation" in k || "webkitAnimation" in k));
            return {
                history: !(!c || 4 > e || f), hasEvent: function (a) {
                    if ("input" === a && Ba)return !1;
                    if (v(d[a])) {
                        var b =
                            g.createElement("div");
                        d[a] = "on" + a in b
                    }
                    return d[a]
                }, csp: Ja(), transitions: h, animations: l, android: e
            }
        }]
    }

    function Wf() {
        var a;
        this.httpOptions = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$exceptionHandler", "$templateCache", "$http", "$q", "$sce", function (b, d, c, e, f) {
            function g(k, h) {
                g.totalPendingRequests++;
                if (!C(k) || v(d.get(k))) k = f.getTrustedResourceUrl(k);
                var l = c.defaults && c.defaults.transformResponse;
                I(l) ? l = l.filter(function (a) {
                    return a !== qc
                }) : l === qc && (l = null);
                return c.get(k, O({cache: d, transformResponse: l},
                    a)).finally(function () {
                    g.totalPendingRequests--
                }).then(function (a) {
                    d.put(k, a.data);
                    return a.data
                }, function (a) {
                    h || (a = Hg("tpload", k, a.status, a.statusText), b(a));
                    return e.reject(a)
                })
            }

            g.totalPendingRequests = 0;
            return g
        }]
    }

    function Xf() {
        this.$get = ["$rootScope", "$browser", "$location", function (a, b, d) {
            return {
                findBindings: function (a, b, d) {
                    a = a.getElementsByClassName("ng-binding");
                    var g = [];
                    p(a, function (a) {
                        var c = fa.element(a).data("$binding");
                        c && p(c, function (c) {
                            d ? (new RegExp("(^|\\s)" + Nd(b) + "(\\s|\\||$)")).test(c) &&
                                g.push(a) : -1 !== c.indexOf(b) && g.push(a)
                        })
                    });
                    return g
                }, findModels: function (a, b, d) {
                    for (var g = ["ng-", "data-ng-", "ng\\:"], k = 0; k < g.length; ++k) {
                        var h = a.querySelectorAll("[" + g[k] + "model" + (d ? "=" : "*=") + '"' + b + '"]');
                        if (h.length)return h
                    }
                }, getLocation: function () {
                    return d.url()
                }, setLocation: function (b) {
                    b !== d.url() && (d.url(b), a.$digest())
                }, whenStable: function (a) {
                    b.notifyWhenNoOutstandingRequests(a)
                }
            }
        }]
    }

    function Yf() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (a, b, d, c, e) {
            function f(f,
                       h, l) {
                E(f) || (l = h, h = f, f = B);
                var m = xa.call(arguments, 3), n = t(l) && !l, q = (n ? c : d).defer(), p = q.promise, r;
                r = b.defer(function () {
                    try {
                        q.resolve(f.apply(null, m))
                    } catch (b) {
                        q.reject(b), e(b)
                    } finally {
                        delete g[p.$$timeoutId]
                    }
                    n || a.$apply()
                }, h);
                p.$$timeoutId = r;
                g[r] = q;
                return p
            }

            var g = {};
            f.cancel = function (a) {
                return a && a.$$timeoutId in g ? (g[a.$$timeoutId].promise.$$state.pur = !0, g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
            };
            return f
        }]
    }

    function ua(a) {
        Ba && (ea.setAttribute("href",
            a), a = ea.href);
        ea.setAttribute("href", a);
        return {
            href: ea.href,
            protocol: ea.protocol ? ea.protocol.replace(/:$/, "") : "",
            host: ea.host,
            search: ea.search ? ea.search.replace(/^\?/, "") : "",
            hash: ea.hash ? ea.hash.replace(/^#/, "") : "",
            hostname: ea.hostname,
            port: ea.port,
            pathname: "/" === ea.pathname.charAt(0) ? ea.pathname : "/" + ea.pathname
        }
    }

    function Ad(a) {
        a = C(a) ? ua(a) : a;
        return a.protocol === Pd.protocol && a.host === Pd.host
    }

    function Zf() {
        this.$get = aa(x)
    }

    function Qd(a) {
        function b(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {
                return a
            }
        }

        var d = a[0] || {}, c = {}, e = "";
        return function () {
            var a, g, k, h, l;
            try {
                a = d.cookie || ""
            } catch (m) {
                a = ""
            }
            if (a !== e)for (e = a, a = e.split("; "), c = {}, k = 0; k < a.length; k++)g = a[k], h = g.indexOf("="), 0 < h && (l = b(g.substring(0, h)), v(c[l]) && (c[l] = b(g.substring(h + 1))));
            return c
        }
    }

    function cg() {
        this.$get = Qd
    }

    function ed(a) {
        function b(d, c) {
            if (G(d)) {
                var e = {};
                p(d, function (a, c) {
                    e[c] = b(c, a)
                });
                return e
            }
            return a.factory(d + "Filter", c)
        }

        this.register = b;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + "Filter")
            }
        }];
        b("currency",
            Rd);
        b("date", Sd);
        b("filter", Ig);
        b("json", Jg);
        b("limitTo", Kg);
        b("lowercase", Lg);
        b("number", Td);
        b("orderBy", Ud);
        b("uppercase", Mg)
    }

    function Ig() {
        return function (a, b, d, c) {
            if (!oa(a)) {
                if (null == a)return a;
                throw K("filter")("notarray", a);
            }
            c = c || "$";
            var e;
            switch (Bc(b)) {
                case "function":
                    break;
                case "boolean":
                case "null":
                case "number":
                case "string":
                    e = !0;
                case "object":
                    b = Ng(b, d, c, e);
                    break;
                default:
                    return a
            }
            return Array.prototype.filter.call(a, b)
        }
    }

    function Ng(a, b, d, c) {
        var e = G(a) && d in a;
        !0 === b ? b = sa : E(b) || (b = function (a,
                                                   b) {
                if (v(a))return !1;
                if (null === a || null === b)return a === b;
                if (G(b) || G(a) && !Yb(a))return !1;
                a = N("" + a);
                b = N("" + b);
                return -1 !== a.indexOf(b)
            });
        return function (f) {
            return e && !G(f) ? Ga(f, a[d], b, d, !1) : Ga(f, a, b, d, c)
        }
    }

    function Ga(a, b, d, c, e, f) {
        var g = Bc(a), k = Bc(b);
        if ("string" === k && "!" === b.charAt(0))return !Ga(a, b.substring(1), d, c, e);
        if (I(a))return a.some(function (a) {
            return Ga(a, b, d, c, e)
        });
        switch (g) {
            case "object":
                var h;
                if (e) {
                    for (h in a)if (h.charAt && "$" !== h.charAt(0) && Ga(a[h], b, d, c, !0))return !0;
                    return f ? !1 : Ga(a, b, d, c, !1)
                }
                if ("object" ===
                    k) {
                    for (h in b)if (f = b[h], !E(f) && !v(f) && (g = h === c, !Ga(g ? a : a[h], f, d, c, g, g)))return !1;
                    return !0
                }
                return d(a, b);
            case "function":
                return !1;
            default:
                return d(a, b)
        }
    }

    function Bc(a) {
        return null === a ? "null" : typeof a
    }

    function Rd(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c, e) {
            v(c) && (c = b.CURRENCY_SYM);
            v(e) && (e = b.PATTERNS[1].maxFrac);
            return null == a ? a : Vd(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, e).replace(/\u00A4/g, c)
        }
    }

    function Td(a) {
        var b = a.NUMBER_FORMATS;
        return function (a, c) {
            return null == a ? a : Vd(a, b.PATTERNS[0], b.GROUP_SEP,
                b.DECIMAL_SEP, c)
        }
    }

    function Og(a) {
        var b = 0, d, c, e, f, g;
        -1 < (c = a.indexOf(Wd)) && (a = a.replace(Wd, ""));
        0 < (e = a.search(/e/i)) ? (0 > c && (c = e), c += +a.slice(e + 1), a = a.substring(0, e)) : 0 > c && (c = a.length);
        for (e = 0; a.charAt(e) === Cc; e++);
        if (e === (g = a.length)) d = [0], c = 1; else {
            for (g--; a.charAt(g) === Cc;)g--;
            c -= e;
            d = [];
            for (f = 0; e <= g; e++, f++)d[f] = +a.charAt(e)
        }
        c > Xd && (d = d.splice(0, Xd - 1), b = c - 1, c = 1);
        return {d: d, e: b, i: c}
    }

    function Pg(a, b, d, c) {
        var e = a.d, f = e.length - a.i;
        b = v(b) ? Math.min(Math.max(d, f), c) : +b;
        d = b + a.i;
        c = e[d];
        if (0 < d) {
            e.splice(Math.max(a.i,
                d));
            for (var g = d; g < e.length; g++)e[g] = 0
        } else for (f = Math.max(0, f), a.i = 1, e.length = Math.max(1, d = b + 1), e[0] = 0, g = 1; g < d; g++)e[g] = 0;
        if (5 <= c)if (0 > d - 1) {
            for (c = 0; c > d; c--)e.unshift(0), a.i++;
            e.unshift(1);
            a.i++
        } else e[d - 1]++;
        for (; f < Math.max(0, b); f++)e.push(0);
        if (b = e.reduceRight(function (a, b, c, d) {
                b += a;
                d[c] = b % 10;
                return Math.floor(b / 10)
            }, 0)) e.unshift(b), a.i++
    }

    function Vd(a, b, d, c, e) {
        if (!C(a) && !W(a) || isNaN(a))return "";
        var f = !isFinite(a), g = !1, k = Math.abs(a) + "", h = "";
        if (f) h = "\u221e"; else {
            g = Og(k);
            Pg(g, e, b.minFrac, b.maxFrac);
            h = g.d;
            k = g.i;
            e = g.e;
            f = [];
            for (g = h.reduce(function (a, b) {
                return a && !b
            }, !0); 0 > k;)h.unshift(0), k++;
            0 < k ? f = h.splice(k, h.length) : (f = h, h = [0]);
            k = [];
            for (h.length >= b.lgSize && k.unshift(h.splice(-b.lgSize, h.length).join("")); h.length > b.gSize;)k.unshift(h.splice(-b.gSize, h.length).join(""));
            h.length && k.unshift(h.join(""));
            h = k.join(d);
            f.length && (h += c + f.join(""));
            e && (h += "e+" + e)
        }
        return 0 > a && !g ? b.negPre + h + b.negSuf : b.posPre + h + b.posSuf
    }

    function Lb(a, b, d, c) {
        var e = "";
        if (0 > a || c && 0 >= a) c ? a = -a + 1 : (a = -a, e = "-");
        for (a = "" + a; a.length <
        b;)a = Cc + a;
        d && (a = a.substr(a.length - b));
        return e + a
    }

    function $(a, b, d, c, e) {
        d = d || 0;
        return function (f) {
            f = f["get" + a]();
            if (0 < d || f > -d) f += d;
            0 === f && -12 === d && (f = 12);
            return Lb(f, b, c, e)
        }
    }

    function ob(a, b, d) {
        return function (c, e) {
            var f = c["get" + a](), g = wb((d ? "STANDALONE" : "") + (b ? "SHORT" : "") + a);
            return e[g][f]
        }
    }

    function Yd(a) {
        var b = (new Date(a, 0, 1)).getDay();
        return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function Zd(a) {
        return function (b) {
            var d = Yd(b.getFullYear());
            b = +new Date(b.getFullYear(), b.getMonth(), b.getDate() + (4 - b.getDay())) -
                +d;
            b = 1 + Math.round(b / 6048E5);
            return Lb(b, a)
        }
    }

    function Dc(a, b) {
        return 0 >= a.getFullYear() ? b.ERAS[0] : b.ERAS[1]
    }

    function Sd(a) {
        function b(a) {
            var b;
            if (b = a.match(d)) {
                a = new Date(0);
                var f = 0, g = 0, k = b[8] ? a.setUTCFullYear : a.setFullYear, h = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (f = Q(b[9] + b[10]), g = Q(b[9] + b[11]));
                k.call(a, Q(b[1]), Q(b[2]) - 1, Q(b[3]));
                f = Q(b[4] || 0) - f;
                g = Q(b[5] || 0) - g;
                k = Q(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                h.call(a, f, g, k, b)
            }
            return a
        }

        var d = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, d, f) {
            var g = "", k = [], h, l;
            d = d || "mediumDate";
            d = a.DATETIME_FORMATS[d] || d;
            C(c) && (c = Qg.test(c) ? Q(c) : b(c));
            W(c) && (c = new Date(c));
            if (!ia(c) || !isFinite(c.getTime()))return c;
            for (; d;)(l = Rg.exec(d)) ? (k = db(k, l, 1), d = k.pop()) : (k.push(d), d = null);
            var m = c.getTimezoneOffset();
            f && (m = Rc(f, m), c = ac(c, f, !0));
            p(k, function (b) {
                h = Sg[b];
                g += h ? h(c, a.DATETIME_FORMATS, m) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function Jg() {
        return function (a, b) {
            v(b) && (b = 2);
            return eb(a, b)
        }
    }

    function Kg() {
        return function (a,
                         b, d) {
            b = Infinity === Math.abs(Number(b)) ? Number(b) : Q(b);
            if (ba(b))return a;
            W(a) && (a = a.toString());
            if (!oa(a))return a;
            d = !d || isNaN(d) ? 0 : Q(d);
            d = 0 > d ? Math.max(0, a.length + d) : d;
            return 0 <= b ? Ec(a, d, d + b) : 0 === d ? Ec(a, b, a.length) : Ec(a, Math.max(0, d + b), d)
        }
    }

    function Ec(a, b, d) {
        return C(a) ? a.slice(b, d) : xa.call(a, b, d)
    }

    function Ud(a) {
        function b(b) {
            return b.map(function (b) {
                var c = 1, d = ab;
                if (E(b)) d = b; else if (C(b)) {
                    if ("+" === b.charAt(0) || "-" === b.charAt(0)) c = "-" === b.charAt(0) ? -1 : 1, b = b.substring(1);
                    if ("" !== b && (d = a(b), d.constant))var e =
                        d(), d = function (a) {
                        return a[e]
                    }
                }
                return {get: d, descending: c}
            })
        }

        function d(a) {
            switch (typeof a) {
                case "number":
                case "boolean":
                case "string":
                    return !0;
                default:
                    return !1
            }
        }

        function c(a, b) {
            var c = 0, d = a.type, h = b.type;
            if (d === h) {
                var h = a.value, l = b.value;
                "string" === d ? (h = h.toLowerCase(), l = l.toLowerCase()) : "object" === d && (G(h) && (h = a.index), G(l) && (l = b.index));
                h !== l && (c = h < l ? -1 : 1)
            } else c = d < h ? -1 : 1;
            return c
        }

        return function (a, f, g, k) {
            if (null == a)return a;
            if (!oa(a))throw K("orderBy")("notarray", a);
            I(f) || (f = [f]);
            0 === f.length &&
            (f = ["+"]);
            var h = b(f), l = g ? -1 : 1, m = E(k) ? k : c;
            a = Array.prototype.map.call(a, function (a, b) {
                return {
                    value: a,
                    tieBreaker: {value: b, type: "number", index: b},
                    predicateValues: h.map(function (c) {
                        var e = c.get(a);
                        c = typeof e;
                        if (null === e) c = "string", e = "null"; else if ("object" === c)a:{
                            if (E(e.valueOf) && (e = e.valueOf(), d(e)))break a;
                            Yb(e) && (e = e.toString(), d(e))
                        }
                        return {value: e, type: c, index: b}
                    })
                }
            });
            a.sort(function (a, b) {
                for (var d = 0, e = h.length; d < e; d++) {
                    var g = m(a.predicateValues[d], b.predicateValues[d]);
                    if (g)return g * h[d].descending *
                        l
                }
                return (m(a.tieBreaker, b.tieBreaker) || c(a.tieBreaker, b.tieBreaker)) * l
            });
            return a = a.map(function (a) {
                return a.value
            })
        }
    }

    function Ua(a) {
        E(a) && (a = {link: a});
        a.restrict = a.restrict || "AC";
        return aa(a)
    }

    function Mb(a, b, d, c, e) {
        this.$$controls = [];
        this.$error = {};
        this.$$success = {};
        this.$pending = void 0;
        this.$name = e(b.name || b.ngForm || "")(d);
        this.$dirty = !1;
        this.$valid = this.$pristine = !0;
        this.$submitted = this.$invalid = !1;
        this.$$parentForm = Nb;
        this.$$element = a;
        this.$$animate = c;
        $d(this)
    }

    function $d(a) {
        a.$$classCache = {};
        a.$$classCache[ae] = !(a.$$classCache[pb] = a.$$element.hasClass(pb))
    }

    function be(a) {
        function b(a, b, c) {
            c && !a.$$classCache[b] ? (a.$$animate.addClass(a.$$element, b), a.$$classCache[b] = !0) : !c && a.$$classCache[b] && (a.$$animate.removeClass(a.$$element, b), a.$$classCache[b] = !1)
        }

        function d(a, c, d) {
            c = c ? "-" + Vc(c, "-") : "";
            b(a, pb + c, !0 === d);
            b(a, ae + c, !1 === d)
        }

        var c = a.set, e = a.unset;
        a.clazz.prototype.$setValidity = function (a, g, k) {
            v(g) ? (this.$pending || (this.$pending = {}), c(this.$pending, a, k)) : (this.$pending && e(this.$pending,
                a, k), ce(this.$pending) && (this.$pending = void 0));
            La(g) ? g ? (e(this.$error, a, k), c(this.$$success, a, k)) : (c(this.$error, a, k), e(this.$$success, a, k)) : (e(this.$error, a, k), e(this.$$success, a, k));
            this.$pending ? (b(this, "ng-pending", !0), this.$valid = this.$invalid = void 0, d(this, "", null)) : (b(this, "ng-pending", !1), this.$valid = ce(this.$error), this.$invalid = !this.$valid, d(this, "", this.$valid));
            g = this.$pending && this.$pending[a] ? void 0 : this.$error[a] ? !1 : this.$$success[a] ? !0 : null;
            d(this, a, g);
            this.$$parentForm.$setValidity(a,
                g, this)
        }
    }

    function ce(a) {
        if (a)for (var b in a)if (a.hasOwnProperty(b))return !1;
        return !0
    }

    function Fc(a) {
        a.$formatters.push(function (b) {
            return a.$isEmpty(b) ? b : b.toString()
        })
    }

    function Va(a, b, d, c, e, f) {
        var g = N(b[0].type);
        if (!e.android) {
            var k = !1;
            b.on("compositionstart", function () {
                k = !0
            });
            b.on("compositionend", function () {
                k = !1;
                l()
            })
        }
        var h, l = function (a) {
            h && (f.defer.cancel(h), h = null);
            if (!k) {
                var e = b.val();
                a = a && a.type;
                "password" === g || d.ngTrim && "false" === d.ngTrim || (e = P(e));
                (c.$viewValue !== e || "" === e && c.$$hasNativeValidators) &&
                c.$setViewValue(e, a)
            }
        };
        if (e.hasEvent("input")) b.on("input", l); else {
            var m = function (a, b, c) {
                h || (h = f.defer(function () {
                    h = null;
                    b && b.value === c || l(a)
                }))
            };
            b.on("keydown", function (a) {
                var b = a.keyCode;
                91 === b || 15 < b && 19 > b || 37 <= b && 40 >= b || m(a, this, this.value)
            });
            if (e.hasEvent("paste")) b.on("paste cut", m)
        }
        b.on("change", l);
        if (de[g] && c.$$hasNativeValidators && g === d.type) b.on("keydown wheel mousedown", function (a) {
            if (!h) {
                var b = this.validity, c = b.badInput, d = b.typeMismatch;
                h = f.defer(function () {
                    h = null;
                    b.badInput === c && b.typeMismatch ===
                    d || l(a)
                })
            }
        });
        c.$render = function () {
            var a = c.$isEmpty(c.$viewValue) ? "" : c.$viewValue;
            b.val() !== a && b.val(a)
        }
    }

    function Ob(a, b) {
        return function (d, c) {
            var e, f;
            if (ia(d))return d;
            if (C(d)) {
                '"' === d.charAt(0) && '"' === d.charAt(d.length - 1) && (d = d.substring(1, d.length - 1));
                if (Tg.test(d))return new Date(d);
                a.lastIndex = 0;
                if (e = a.exec(d))return e.shift(), f = c ? {
                    yyyy: c.getFullYear(),
                    MM: c.getMonth() + 1,
                    dd: c.getDate(),
                    HH: c.getHours(),
                    mm: c.getMinutes(),
                    ss: c.getSeconds(),
                    sss: c.getMilliseconds() / 1E3
                } : {
                    yyyy: 1970, MM: 1, dd: 1, HH: 0, mm: 0,
                    ss: 0, sss: 0
                }, p(e, function (a, c) {
                    c < b.length && (f[b[c]] = +a)
                }), new Date(f.yyyy, f.MM - 1, f.dd, f.HH, f.mm, f.ss || 0, 1E3 * f.sss || 0)
            }
            return NaN
        }
    }

    function qb(a, b, d, c) {
        return function (e, f, g, k, h, l, m) {
            function n(a) {
                return a && !(a.getTime && a.getTime() !== a.getTime())
            }

            function q(a) {
                return t(a) && !ia(a) ? d(a) || void 0 : a
            }

            Gc(e, f, g, k);
            Va(e, f, g, k, h, l);
            var p = k && k.$options.getOption("timezone"), r;
            k.$$parserName = a;
            k.$parsers.push(function (a) {
                if (k.$isEmpty(a))return null;
                if (b.test(a))return a = d(a, r), p && (a = ac(a, p)), a
            });
            k.$formatters.push(function (a) {
                if (a &&
                    !ia(a))throw rb("datefmt", a);
                if (n(a))return (r = a) && p && (r = ac(r, p, !0)), m("date")(a, c, p);
                r = null;
                return ""
            });
            if (t(g.min) || g.ngMin) {
                var w;
                k.$validators.min = function (a) {
                    return !n(a) || v(w) || d(a) >= w
                };
                g.$observe("min", function (a) {
                    w = q(a);
                    k.$validate()
                })
            }
            if (t(g.max) || g.ngMax) {
                var u;
                k.$validators.max = function (a) {
                    return !n(a) || v(u) || d(a) <= u
                };
                g.$observe("max", function (a) {
                    u = q(a);
                    k.$validate()
                })
            }
        }
    }

    function Gc(a, b, d, c) {
        (c.$$hasNativeValidators = G(b[0].validity)) && c.$parsers.push(function (a) {
            var c = b.prop("validity") || {};
            return c.badInput || c.typeMismatch ? void 0 : a
        })
    }

    function ee(a) {
        a.$$parserName = "number";
        a.$parsers.push(function (b) {
            if (a.$isEmpty(b))return null;
            if (Ug.test(b))return parseFloat(b)
        });
        a.$formatters.push(function (b) {
            if (!a.$isEmpty(b)) {
                if (!W(b))throw rb("numfmt", b);
                b = b.toString()
            }
            return b
        })
    }

    function Wa(a) {
        t(a) && !W(a) && (a = parseFloat(a));
        return ba(a) ? void 0 : a
    }

    function Hc(a) {
        var b = a.toString(), d = b.indexOf(".");
        return -1 === d ? -1 < a && 1 > a && (a = /e-(\d+)$/.exec(b)) ? Number(a[1]) : 0 : b.length - d - 1
    }

    function fe(a, b, d) {
        a = Number(a);
        var c = (a | 0) !== a, e = (b | 0) !== b, f = (d | 0) !== d;
        if (c || e || f) {
            var g = c ? Hc(a) : 0, k = e ? Hc(b) : 0, h = f ? Hc(d) : 0, g = Math.max(g, k, h), g = Math.pow(10, g);
            a *= g;
            b *= g;
            d *= g;
            c && (a = Math.round(a));
            e && (b = Math.round(b));
            f && (d = Math.round(d))
        }
        return 0 === (a - b) % d
    }

    function ge(a, b, d, c, e) {
        if (t(c)) {
            a = a(c);
            if (!a.constant)throw rb("constexpr", d, c);
            return a(b)
        }
        return e
    }

    function Ic(a, b) {
        function d(a, b) {
            if (!a || !a.length)return [];
            if (!b || !b.length)return a;
            var c = [], d = 0;
            a:for (; d < a.length; d++) {
                for (var e = a[d], f = 0; f < b.length; f++)if (e === b[f])continue a;
                c.push(e)
            }
            return c
        }

        function c(a) {
            var b = a;
            I(a) ? b = a.map(c).join(" ") : G(a) && (b = Object.keys(a).filter(function (b) {
                    return a[b]
                }).join(" "));
            return b
        }

        function e(a) {
            var b = a;
            if (I(a)) b = a.map(e); else if (G(a)) {
                var c = !1, b = Object.keys(a).filter(function (b) {
                    b = a[b];
                    !c && v(b) && (c = !0);
                    return b
                });
                c && b.push(void 0)
            }
            return b
        }

        a = "ngClass" + a;
        var f;
        return ["$parse", function (g) {
            return {
                restrict: "AC", link: function (k, h, l) {
                    function m(a, b) {
                        var c = [];
                        p(a, function (a) {
                            if (0 < b || A[a]) A[a] = (A[a] || 0) + b, A[a] === +(0 < b) && c.push(a)
                        });
                        return c.join(" ")
                    }

                    function n(a) {
                        if (a === b) {
                            var c = s, c = m(c && c.split(" "), 1);
                            l.$addClass(c)
                        } else c = s, c = m(c && c.split(" "), -1), l.$removeClass(c);
                        v = a
                    }

                    function q(a) {
                        a = c(a);
                        a !== s && r(a)
                    }

                    function r(a) {
                        if (v === b) {
                            var c = s && s.split(" "), e = a && a.split(" "), g = d(c, e), c = d(e, c), g = m(g, -1),
                                c = m(c, 1);
                            l.$addClass(c);
                            l.$removeClass(g)
                        }
                        s = a
                    }

                    var t = l[a].trim(), w = ":" === t.charAt(0) && ":" === t.charAt(1), t = g(t, w ? e : c),
                        u = w ? q : r, A = h.data("$classCounts"), v = !0, s;
                    A || (A = R(), h.data("$classCounts", A));
                    "ngClass" !== a && (f || (f = g("$index", function (a) {
                        return a & 1
                    })),
                        k.$watch(f, n));
                    k.$watch(t, u, w)
                }
            }
        }]
    }

    function Pb(a, b, d, c, e, f, g, k, h) {
        this.$modelValue = this.$viewValue = Number.NaN;
        this.$$rawModelValue = void 0;
        this.$validators = {};
        this.$asyncValidators = {};
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$untouched = !0;
        this.$touched = !1;
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$error = {};
        this.$$success = {};
        this.$pending = void 0;
        this.$name = h(d.name || "", !1)(a);
        this.$$parentForm = Nb;
        this.$options = Qb;
        this.$$parsedNgModel = e(d.ngModel);
        this.$$parsedNgModelAssign = this.$$parsedNgModel.assign;
        this.$$ngModelGet = this.$$parsedNgModel;
        this.$$ngModelSet = this.$$parsedNgModelAssign;
        this.$$pendingDebounce = null;
        this.$$parserValid = void 0;
        this.$$currentValidationRunId = 0;
        Object.defineProperty(this, "$$scope", {value: a});
        this.$$attr = d;
        this.$$element = c;
        this.$$animate = f;
        this.$$timeout = g;
        this.$$parse = e;
        this.$$q = k;
        this.$$exceptionHandler = b;
        $d(this);
        Vg(this)
    }

    function Vg(a) {
        a.$$scope.$watch(function (b) {
            b = a.$$ngModelGet(b);
            if (b !== a.$modelValue && (a.$modelValue ===
                a.$modelValue || b === b)) {
                a.$modelValue = a.$$rawModelValue = b;
                a.$$parserValid = void 0;
                for (var d = a.$formatters, c = d.length, e = b; c--;)e = d[c](e);
                a.$viewValue !== e && (a.$$updateEmptyClasses(e), a.$viewValue = a.$$lastCommittedViewValue = e, a.$render(), a.$$runValidators(a.$modelValue, a.$viewValue, B))
            }
            return b
        })
    }

    function Jc(a) {
        this.$$options = a
    }

    function he(a, b) {
        p(b, function (b, c) {
            t(a[c]) || (a[c] = b)
        })
    }

    function Ha(a, b) {
        a.prop("selected", b);
        a.attr("selected", b)
    }

    var Lc = {objectMaxDepth: 5}, Wg = /^\/(.+)\/([a-z]*)$/, wa = Object.prototype.hasOwnProperty,
        N = function (a) {
            return C(a) ? a.toLowerCase() : a
        }, wb = function (a) {
            return C(a) ? a.toUpperCase() : a
        }, Ba, z, ta, xa = [].slice, vg = [].splice, Xg = [].push, la = Object.prototype.toString,
        Oc = Object.getPrototypeOf, za = K("ng"), fa = x.angular || (x.angular = {}), dc, sb = 0;
    Ba = x.document.documentMode;
    var ba = Number.isNaN || function (a) {
            return a !== a
        };
    B.$inject = [];
    ab.$inject = [];
    var I = Array.isArray,
        te = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array]$/,
        P = function (a) {
            return C(a) ? a.trim() : a
        }, Nd = function (a) {
            return a.replace(/([-()[\]{}+?*.$^|,:#<!\\])/g,
                "\\$1").replace(/\x08/g, "\\x08")
        }, Ja = function () {
            if (!t(Ja.rules)) {
                var a = x.document.querySelector("[ng-csp]") || x.document.querySelector("[data-ng-csp]");
                if (a) {
                    var b = a.getAttribute("ng-csp") || a.getAttribute("data-ng-csp");
                    Ja.rules = {
                        noUnsafeEval: !b || -1 !== b.indexOf("no-unsafe-eval"),
                        noInlineStyle: !b || -1 !== b.indexOf("no-inline-style")
                    }
                } else {
                    a = Ja;
                    try {
                        new Function(""), b = !1
                    } catch (d) {
                        b = !0
                    }
                    a.rules = {noUnsafeEval: b, noInlineStyle: !1}
                }
            }
            return Ja.rules
        }, tb = function () {
            if (t(tb.name_))return tb.name_;
            var a, b, d = Na.length,
                c, e;
            for (b = 0; b < d; ++b)if (c = Na[b], a = x.document.querySelector("[" + c.replace(":", "\\:") + "jq]")) {
                e = a.getAttribute(c + "jq");
                break
            }
            return tb.name_ = e
        }, ve = /:/g, Na = ["ng-", "data-ng-", "ng:", "x-ng-"], ye = function (a) {
            var b = a.currentScript;
            if (!b)return !0;
            if (!(b instanceof x.HTMLScriptElement || b instanceof x.SVGScriptElement))return !1;
            b = b.attributes;
            return [b.getNamedItem("src"), b.getNamedItem("href"), b.getNamedItem("xlink:href")].every(function (b) {
                if (!b)return !0;
                if (!b.value)return !1;
                var c = a.createElement("a");
                c.href =
                    b.value;
                if (a.location.origin === c.origin)return !0;
                switch (c.protocol) {
                    case "http:":
                    case "https:":
                    case "ftp:":
                    case "blob:":
                    case "file:":
                    case "data:":
                        return !0;
                    default:
                        return !1
                }
            })
        }(x.document), Be = /[A-Z]/g, Wc = !1, Ma = 3,
        Ge = {full: "1.6.5", major: 1, minor: 6, dot: 5, codeName: "toffee-salinization"};
    S.expando = "ng339";
    var jb = S.cache = {}, hg = 1;
    S._data = function (a) {
        return this.cache[a[this.expando]] || {}
    };
    var dg = /-([a-z])/g, Yg = /^-ms-/, Bb = {mouseleave: "mouseout", mouseenter: "mouseover"}, gc = K("jqLite"),
        gg = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        fc = /<|&#?\w+;/, eg = /<([\w:-]+)/,
        fg = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, pa = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    pa.optgroup = pa.option;
    pa.tbody = pa.tfoot = pa.colgroup = pa.caption = pa.thead;
    pa.th = pa.td;
    var mg = x.Node.prototype.contains || function (a) {
            return !!(this.compareDocumentPosition(a) &
            16)
        }, Ra = S.prototype = {
        ready: gd, toString: function () {
            var a = [];
            p(this, function (b) {
                a.push("" + b)
            });
            return "[" + a.join(", ") + "]"
        }, eq: function (a) {
            return 0 <= a ? z(this[a]) : z(this[this.length + a])
        }, length: 0, push: Xg, sort: [].sort, splice: [].splice
    }, Hb = {};
    p("multiple selected checked disabled readOnly required open".split(" "), function (a) {
        Hb[N(a)] = a
    });
    var ld = {};
    p("input select option textarea button form details".split(" "), function (a) {
        ld[a] = !0
    });
    var td = {
        ngMinlength: "minlength", ngMaxlength: "maxlength", ngMin: "min", ngMax: "max",
        ngPattern: "pattern", ngStep: "step"
    };
    p({
        data: kc, removeData: jc, hasData: function (a) {
            for (var b in jb[a.ng339])return !0;
            return !1
        }, cleanData: function (a) {
            for (var b = 0, d = a.length; b < d; b++)jc(a[b])
        }
    }, function (a, b) {
        S[b] = a
    });
    p({
        data: kc, inheritedData: Fb, scope: function (a) {
            return z.data(a, "$scope") || Fb(a.parentNode || a, ["$isolateScope", "$scope"])
        }, isolateScope: function (a) {
            return z.data(a, "$isolateScope") || z.data(a, "$isolateScopeNoTemplate")
        }, controller: id, injector: function (a) {
            return Fb(a, "$injector")
        }, removeAttr: function (a,
                                 b) {
            a.removeAttribute(b)
        }, hasClass: Cb, css: function (a, b, d) {
            b = yb(b.replace(Yg, "ms-"));
            if (t(d)) a.style[b] = d; else return a.style[b]
        }, attr: function (a, b, d) {
            var c = a.nodeType;
            if (c !== Ma && 2 !== c && 8 !== c && a.getAttribute) {
                var c = N(b), e = Hb[c];
                if (t(d)) null === d || !1 === d && e ? a.removeAttribute(b) : a.setAttribute(b, e ? c : d); else return a = a.getAttribute(b), e && null !== a && (a = c), null === a ? void 0 : a
            }
        }, prop: function (a, b, d) {
            if (t(d)) a[b] = d; else return a[b]
        }, text: function () {
            function a(a, d) {
                if (v(d)) {
                    var c = a.nodeType;
                    return 1 === c || c === Ma ?
                        a.textContent : ""
                }
                a.textContent = d
            }

            a.$dv = "";
            return a
        }(), val: function (a, b) {
            if (v(b)) {
                if (a.multiple && "select" === ya(a)) {
                    var d = [];
                    p(a.options, function (a) {
                        a.selected && d.push(a.value || a.text)
                    });
                    return d
                }
                return a.value
            }
            a.value = b
        }, html: function (a, b) {
            if (v(b))return a.innerHTML;
            zb(a, !0);
            a.innerHTML = b
        }, empty: jd
    }, function (a, b) {
        S.prototype[b] = function (b, c) {
            var e, f, g = this.length;
            if (a !== jd && v(2 === a.length && a !== Cb && a !== id ? b : c)) {
                if (G(b)) {
                    for (e = 0; e < g; e++)if (a === kc) a(this[e], b); else for (f in b)a(this[e], f, b[f]);
                    return this
                }
                e =
                    a.$dv;
                g = v(e) ? Math.min(g, 1) : g;
                for (f = 0; f < g; f++) {
                    var k = a(this[f], b, c);
                    e = e ? e + k : k
                }
                return e
            }
            for (e = 0; e < g; e++)a(this[e], b, c);
            return this
        }
    });
    p({
        removeData: jc, on: function (a, b, d, c) {
            if (t(c))throw gc("onargs");
            if (ec(a)) {
                c = Ab(a, !0);
                var e = c.events, f = c.handle;
                f || (f = c.handle = jg(a, e));
                c = 0 <= b.indexOf(" ") ? b.split(" ") : [b];
                for (var g = c.length, k = function (b, c, g) {
                    var k = e[b];
                    k || (k = e[b] = [], k.specialHandlerWrapper = c, "$destroy" === b || g || a.addEventListener(b, f));
                    k.push(d)
                }; g--;)b = c[g], Bb[b] ? (k(Bb[b], lg), k(b, void 0, !0)) : k(b)
            }
        },
        off: hd, one: function (a, b, d) {
            a = z(a);
            a.on(b, function e() {
                a.off(b, d);
                a.off(b, e)
            });
            a.on(b, d)
        }, replaceWith: function (a, b) {
            var d, c = a.parentNode;
            zb(a);
            p(new S(b), function (b) {
                d ? c.insertBefore(b, d.nextSibling) : c.replaceChild(b, a);
                d = b
            })
        }, children: function (a) {
            var b = [];
            p(a.childNodes, function (a) {
                1 === a.nodeType && b.push(a)
            });
            return b
        }, contents: function (a) {
            return a.contentDocument || a.childNodes || []
        }, append: function (a, b) {
            var d = a.nodeType;
            if (1 === d || 11 === d) {
                b = new S(b);
                for (var d = 0, c = b.length; d < c; d++)a.appendChild(b[d])
            }
        },
        prepend: function (a, b) {
            if (1 === a.nodeType) {
                var d = a.firstChild;
                p(new S(b), function (b) {
                    a.insertBefore(b, d)
                })
            }
        }, wrap: function (a, b) {
            var d = z(b).eq(0).clone()[0], c = a.parentNode;
            c && c.replaceChild(d, a);
            d.appendChild(a)
        }, remove: Gb, detach: function (a) {
            Gb(a, !0)
        }, after: function (a, b) {
            var d = a, c = a.parentNode;
            if (c) {
                b = new S(b);
                for (var e = 0, f = b.length; e < f; e++) {
                    var g = b[e];
                    c.insertBefore(g, d.nextSibling);
                    d = g
                }
            }
        }, addClass: Eb, removeClass: Db, toggleClass: function (a, b, d) {
            b && p(b.split(" "), function (b) {
                var e = d;
                v(e) && (e = !Cb(a, b));
                (e ? Eb : Db)(a, b)
            })
        }, parent: function (a) {
            return (a = a.parentNode) && 11 !== a.nodeType ? a : null
        }, next: function (a) {
            return a.nextElementSibling
        }, find: function (a, b) {
            return a.getElementsByTagName ? a.getElementsByTagName(b) : []
        }, clone: ic, triggerHandler: function (a, b, d) {
            var c, e, f = b.type || b, g = Ab(a);
            if (g = (g = g && g.events) && g[f]) c = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                }, isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                }, stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                }, isImmediatePropagationStopped: function () {
                    return !0 ===
                        this.immediatePropagationStopped
                }, stopPropagation: B, type: f, target: a
            }, b.type && (c = O(c, b)), b = ra(g), e = d ? [c].concat(d) : [c], p(b, function (b) {
                c.isImmediatePropagationStopped() || b.apply(a, e)
            })
        }
    }, function (a, b) {
        S.prototype[b] = function (b, c, e) {
            for (var f, g = 0,
                     k = this.length; g < k; g++)v(f) ? (f = a(this[g], b, c, e), t(f) && (f = z(f))) : hc(f, a(this[g], b, c, e));
            return t(f) ? f : this
        }
    });
    S.prototype.bind = S.prototype.on;
    S.prototype.unbind = S.prototype.off;
    var Zg = Object.create(null);
    md.prototype = {
        _idx: function (a) {
            if (a === this._lastKey)return this._lastIndex;
            this._lastKey = a;
            return this._lastIndex = this._keys.indexOf(a)
        }, _transformKey: function (a) {
            return ba(a) ? Zg : a
        }, get: function (a) {
            a = this._transformKey(a);
            a = this._idx(a);
            if (-1 !== a)return this._values[a]
        }, set: function (a, b) {
            a = this._transformKey(a);
            var d = this._idx(a);
            -1 === d && (d = this._lastIndex = this._keys.length);
            this._keys[d] = a;
            this._values[d] = b
        }, delete: function (a) {
            a = this._transformKey(a);
            a = this._idx(a);
            if (-1 === a)return !1;
            this._keys.splice(a, 1);
            this._values.splice(a, 1);
            this._lastKey = NaN;
            this._lastIndex = -1;
            return !0
        }
    };
    var Ib = md, bg = [function () {
            this.$get = [function () {
                return Ib
            }]
        }], og = /^([^(]+?)=>/, pg = /^[^(]*\(\s*([^)]*)\)/m, $g = /,/, ah = /^\s*(_?)(\S+?)\1\s*$/,
        ng = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Ka = K("$injector");
    gb.$$annotate = function (a, b, d) {
        var c;
        if ("function" === typeof a) {
            if (!(c = a.$inject)) {
                c = [];
                if (a.length) {
                    if (b)throw C(d) && d || (d = a.name || qg(a)), Ka("strictdi", d);
                    b = nd(a);
                    p(b[1].split($g), function (a) {
                        a.replace(ah, function (a, b, d) {
                            c.push(d)
                        })
                    })
                }
                a.$inject = c
            }
        } else I(a) ? (b = a.length - 1, ub(a[b], "fn"), c = a.slice(0, b)) : ub(a, "fn",
            !0);
        return c
    };
    var ie = K("$animate"), tf = function () {
        this.$get = B
    }, uf = function () {
        var a = new Ib, b = [];
        this.$get = ["$$AnimateRunner", "$rootScope", function (d, c) {
            function e(a, b, c) {
                var d = !1;
                b && (b = C(b) ? b.split(" ") : I(b) ? b : [], p(b, function (b) {
                    b && (d = !0, a[b] = c)
                }));
                return d
            }

            function f() {
                p(b, function (b) {
                    var c = a.get(b);
                    if (c) {
                        var d = rg(b.attr("class")), e = "", f = "";
                        p(c, function (a, b) {
                            a !== !!d[b] && (a ? e += (e.length ? " " : "") + b : f += (f.length ? " " : "") + b)
                        });
                        p(b, function (a) {
                            e && Eb(a, e);
                            f && Db(a, f)
                        });
                        a.delete(b)
                    }
                });
                b.length = 0
            }

            return {
                enabled: B,
                on: B, off: B, pin: B, push: function (g, k, h, l) {
                    l && l();
                    h = h || {};
                    h.from && g.css(h.from);
                    h.to && g.css(h.to);
                    if (h.addClass || h.removeClass)if (k = h.addClass, l = h.removeClass, h = a.get(g) || {}, k = e(h, k, !0), l = e(h, l, !1), k || l) a.set(g, h), b.push(g), 1 === b.length && c.$$postDigest(f);
                    g = new d;
                    g.complete();
                    return g
                }
            }
        }]
    }, rf = ["$provide", function (a) {
        var b = this, d = null, c = null;
        this.$$registeredAnimations = Object.create(null);
        this.register = function (c, d) {
            if (c && "." !== c.charAt(0))throw ie("notcsel", c);
            var g = c + "-animation";
            b.$$registeredAnimations[c.substr(1)] =
                g;
            a.factory(g, d)
        };
        this.customFilter = function (a) {
            1 === arguments.length && (c = E(a) ? a : null);
            return c
        };
        this.classNameFilter = function (a) {
            if (1 === arguments.length && (d = a instanceof RegExp ? a : null) && /[(\s|\/)]ng-animate[(\s|\/)]/.test(d.toString()))throw d = null, ie("nongcls", "ng-animate");
            return d
        };
        this.$get = ["$$animateQueue", function (a) {
            function b(a, c, d) {
                if (d) {
                    var e;
                    a:{
                        for (e = 0; e < d.length; e++) {
                            var f = d[e];
                            if (1 === f.nodeType) {
                                e = f;
                                break a
                            }
                        }
                        e = void 0
                    }
                    !e || e.parentNode || e.previousElementSibling || (d = null)
                }
                d ? d.after(a) :
                    c.prepend(a)
            }

            return {
                on: a.on, off: a.off, pin: a.pin, enabled: a.enabled, cancel: function (a) {
                    a.end && a.end()
                }, enter: function (c, d, h, l) {
                    d = d && z(d);
                    h = h && z(h);
                    d = d || h.parent();
                    b(c, d, h);
                    return a.push(c, "enter", Ca(l))
                }, move: function (c, d, h, l) {
                    d = d && z(d);
                    h = h && z(h);
                    d = d || h.parent();
                    b(c, d, h);
                    return a.push(c, "move", Ca(l))
                }, leave: function (b, c) {
                    return a.push(b, "leave", Ca(c), function () {
                        b.remove()
                    })
                }, addClass: function (b, c, d) {
                    d = Ca(d);
                    d.addClass = kb(d.addclass, c);
                    return a.push(b, "addClass", d)
                }, removeClass: function (b, c, d) {
                    d = Ca(d);
                    d.removeClass = kb(d.removeClass, c);
                    return a.push(b, "removeClass", d)
                }, setClass: function (b, c, d, f) {
                    f = Ca(f);
                    f.addClass = kb(f.addClass, c);
                    f.removeClass = kb(f.removeClass, d);
                    return a.push(b, "setClass", f)
                }, animate: function (b, c, d, f, m) {
                    m = Ca(m);
                    m.from = m.from ? O(m.from, c) : c;
                    m.to = m.to ? O(m.to, d) : d;
                    m.tempClasses = kb(m.tempClasses, f || "ng-inline-animate");
                    return a.push(b, "animate", m)
                }
            }
        }]
    }], wf = function () {
        this.$get = ["$$rAF", function (a) {
            function b(b) {
                d.push(b);
                1 < d.length || a(function () {
                    for (var a = 0; a < d.length; a++)d[a]();
                    d =
                        []
                })
            }

            var d = [];
            return function () {
                var a = !1;
                b(function () {
                    a = !0
                });
                return function (d) {
                    a ? d() : b(d)
                }
            }
        }]
    }, vf = function () {
        this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$$isDocumentHidden", "$timeout", function (a, b, d, c, e) {
            function f(a) {
                this.setHost(a);
                var b = d();
                this._doneCallbacks = [];
                this._tick = function (a) {
                    c() ? e(a, 0, !1) : b(a)
                };
                this._state = 0
            }

            f.chain = function (a, b) {
                function c() {
                    if (d === a.length) b(!0); else a[d](function (a) {
                        !1 === a ? b(!1) : (d++, c())
                    })
                }

                var d = 0;
                c()
            };
            f.all = function (a, b) {
                function c(f) {
                    e = e && f;
                    ++d === a.length &&
                    b(e)
                }

                var d = 0, e = !0;
                p(a, function (a) {
                    a.done(c)
                })
            };
            f.prototype = {
                setHost: function (a) {
                    this.host = a || {}
                }, done: function (a) {
                    2 === this._state ? a() : this._doneCallbacks.push(a)
                }, progress: B, getPromise: function () {
                    if (!this.promise) {
                        var b = this;
                        this.promise = a(function (a, c) {
                            b.done(function (b) {
                                !1 === b ? c() : a()
                            })
                        })
                    }
                    return this.promise
                }, then: function (a, b) {
                    return this.getPromise().then(a, b)
                }, "catch": function (a) {
                    return this.getPromise()["catch"](a)
                }, "finally": function (a) {
                    return this.getPromise()["finally"](a)
                }, pause: function () {
                    this.host.pause &&
                    this.host.pause()
                }, resume: function () {
                    this.host.resume && this.host.resume()
                }, end: function () {
                    this.host.end && this.host.end();
                    this._resolve(!0)
                }, cancel: function () {
                    this.host.cancel && this.host.cancel();
                    this._resolve(!1)
                }, complete: function (a) {
                    var b = this;
                    0 === b._state && (b._state = 1, b._tick(function () {
                        b._resolve(a)
                    }))
                }, _resolve: function (a) {
                    2 !== this._state && (p(this._doneCallbacks, function (b) {
                        b(a)
                    }), this._doneCallbacks.length = 0, this._state = 2)
                }
            };
            return f
        }]
    }, sf = function () {
        this.$get = ["$$rAF", "$q", "$$AnimateRunner",
            function (a, b, d) {
                return function (b, e) {
                    function f() {
                        a(function () {
                            g.addClass && (b.addClass(g.addClass), g.addClass = null);
                            g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null);
                            g.to && (b.css(g.to), g.to = null);
                            k || h.complete();
                            k = !0
                        });
                        return h
                    }

                    var g = e || {};
                    g.$$prepared || (g = Ia(g));
                    g.cleanupStyles && (g.from = g.to = null);
                    g.from && (b.css(g.from), g.from = null);
                    var k, h = new d;
                    return {start: f, end: f}
                }
            }]
    }, ga = K("$compile"), oc = new function () {
    };
    Yc.$inject = ["$provide", "$$sanitizeUriProvider"];
    Jb.prototype.isFirstChange =
        function () {
            return this.previousValue === oc
        };
    var od = /^((?:x|data)[:\-_])/i, ug = /[:\-_]+(.)/g, vd = K("$controller"), ud = /^(\S+)(\s+as\s+([\w$]+))?$/,
        Df = function () {
            this.$get = ["$document", function (a) {
                return function (b) {
                    b ? !b.nodeType && b instanceof z && (b = b[0]) : b = a[0].body;
                    return b.offsetWidth + 1
                }
            }]
        }, wd = "application/json", sc = {"Content-Type": wd + ";charset=utf-8"}, xg = /^\[|^\{(?!\{)/,
        yg = {"[": /]$/, "{": /}$/}, wg = /^\)]\}',?\n/, rc = K("$http"),
        Fa = fa.$interpolateMinErr = K("$interpolate");
    Fa.throwNoconcat = function (a) {
        throw Fa("noconcat",
            a);
    };
    Fa.interr = function (a, b) {
        return Fa("interr", a, b.toString())
    };
    var Lf = function () {
            this.$get = function () {
                function a(a) {
                    var b = function (a) {
                        b.data = a;
                        b.called = !0
                    };
                    b.id = a;
                    return b
                }

                var b = fa.callbacks, d = {};
                return {
                    createCallback: function (c) {
                        c = "_" + (b.$$counter++).toString(36);
                        var e = "angular.callbacks." + c, f = a(c);
                        d[e] = b[c] = f;
                        return e
                    }, wasCalled: function (a) {
                        return d[a].called
                    }, getResponse: function (a) {
                        return d[a].data
                    }, removeCallback: function (a) {
                        delete b[d[a].id];
                        delete d[a]
                    }
                }
            }
        }, bh = /^([^?#]*)(\?([^#]*))?(#(.*))?$/,
        Ag = {http: 80, https: 443, ftp: 21}, mb = K("$location"), Bg = /^\s*[\\/]{2,}/, ch = {
            $$absUrl: "", $$html5: !1, $$replace: !1, absUrl: Kb("$$absUrl"), url: function (a) {
                if (v(a))return this.$$url;
                var b = bh.exec(a);
                (b[1] || "" === a) && this.path(decodeURIComponent(b[1]));
                (b[2] || b[1] || "" === a) && this.search(b[3] || "");
                this.hash(b[5] || "");
                return this
            }, protocol: Kb("$$protocol"), host: Kb("$$host"), port: Kb("$$port"), path: Ed("$$path", function (a) {
                a = null !== a ? a.toString() : "";
                return "/" === a.charAt(0) ? a : "/" + a
            }), search: function (a, b) {
                switch (arguments.length) {
                    case 0:
                        return this.$$search;
                    case 1:
                        if (C(a) || W(a)) a = a.toString(), this.$$search = Tc(a); else if (G(a)) a = Ia(a, {}), p(a, function (b, c) {
                            null == b && delete a[c]
                        }), this.$$search = a; else throw mb("isrcharg");
                        break;
                    default:
                        v(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
                }
                this.$$compose();
                return this
            }, hash: Ed("$$hash", function (a) {
                return null !== a ? a.toString() : ""
            }), replace: function () {
                this.$$replace = !0;
                return this
            }
        };
    p([Dd, wc, vc], function (a) {
        a.prototype = Object.create(ch);
        a.prototype.state = function (b) {
            if (!arguments.length)return this.$$state;
            if (a !== vc || !this.$$html5)throw mb("nostate");
            this.$$state = v(b) ? null : b;
            this.$$urlUpdatedByLocation = !0;
            return this
        }
    });
    var Xa = K("$parse"), Fg = {}.constructor.prototype.valueOf, Rb = R();
    p("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (a) {
        Rb[a] = !0
    });
    var dh = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, zc = function (a) {
        this.options = a
    };
    zc.prototype = {
        constructor: zc, lex: function (a) {
            this.text = a;
            this.index = 0;
            for (this.tokens = []; this.index < this.text.length;)if (a = this.text.charAt(this.index),
                '"' === a || "'" === a) this.readString(a); else if (this.isNumber(a) || "." === a && this.isNumber(this.peek())) this.readNumber(); else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent(); else if (this.is(a, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: a
            }), this.index++; else if (this.isWhitespace(a)) this.index++; else {
                var b = a + this.peek(), d = b + this.peek(2), c = Rb[b], e = Rb[d];
                Rb[a] || c || e ? (a = e ? d : c ? b : a, this.tokens.push({
                    index: this.index,
                    text: a,
                    operator: !0
                }), this.index += a.length) : this.throwError("Unexpected next character ",
                    this.index, this.index + 1)
            }
            return this.tokens
        }, is: function (a, b) {
            return -1 !== b.indexOf(a)
        }, peek: function (a) {
            a = a || 1;
            return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
        }, isNumber: function (a) {
            return "0" <= a && "9" >= a && "string" === typeof a
        }, isWhitespace: function (a) {
            return " " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
        }, isIdentifierStart: function (a) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a)
        }, isValidIdentifierStart: function (a) {
            return "a" <=
                a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
        }, isIdentifierContinue: function (a) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a)
        }, isValidIdentifierContinue: function (a, b) {
            return this.isValidIdentifierStart(a, b) || this.isNumber(a)
        }, codePointAt: function (a) {
            return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888
        }, peekMultichar: function () {
            var a = this.text.charAt(this.index), b = this.peek();
            if (!b)return a;
            var d = a.charCodeAt(0), c = b.charCodeAt(0);
            return 55296 <= d && 56319 >= d && 56320 <= c && 57343 >= c ? a + b : a
        }, isExpOperator: function (a) {
            return "-" === a || "+" === a || this.isNumber(a)
        }, throwError: function (a, b, d) {
            d = d || this.index;
            b = t(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, d) + "]" : " " + d;
            throw Xa("lexerr", a, b, this.text);
        }, readNumber: function () {
            for (var a = "", b = this.index; this.index < this.text.length;) {
                var d = N(this.text.charAt(this.index));
                if ("." === d || this.isNumber(d)) a += d; else {
                    var c = this.peek();
                    if ("e" === d && this.isExpOperator(c)) a +=
                        d; else if (this.isExpOperator(d) && c && this.isNumber(c) && "e" === a.charAt(a.length - 1)) a += d; else if (!this.isExpOperator(d) || c && this.isNumber(c) || "e" !== a.charAt(a.length - 1))break; else this.throwError("Invalid exponent")
                }
                this.index++
            }
            this.tokens.push({index: b, text: a, constant: !0, value: Number(a)})
        }, readIdent: function () {
            var a = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var b = this.peekMultichar();
                if (!this.isIdentifierContinue(b))break;
                this.index += b.length
            }
            this.tokens.push({
                index: a,
                text: this.text.slice(a, this.index), identifier: !0
            })
        }, readString: function (a) {
            var b = this.index;
            this.index++;
            for (var d = "", c = a, e = !1; this.index < this.text.length;) {
                var f = this.text.charAt(this.index), c = c + f;
                if (e) "u" === f ? (e = this.text.substring(this.index + 1, this.index + 5), e.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + e + "]"), this.index += 4, d += String.fromCharCode(parseInt(e, 16))) : d += dh[f] || f, e = !1; else if ("\\" === f) e = !0; else {
                    if (f === a) {
                        this.index++;
                        this.tokens.push({
                            index: b, text: c, constant: !0,
                            value: d
                        });
                        return
                    }
                    d += f
                }
                this.index++
            }
            this.throwError("Unterminated quote", b)
        }
    };
    var r = function (a, b) {
        this.lexer = a;
        this.options = b
    };
    r.Program = "Program";
    r.ExpressionStatement = "ExpressionStatement";
    r.AssignmentExpression = "AssignmentExpression";
    r.ConditionalExpression = "ConditionalExpression";
    r.LogicalExpression = "LogicalExpression";
    r.BinaryExpression = "BinaryExpression";
    r.UnaryExpression = "UnaryExpression";
    r.CallExpression = "CallExpression";
    r.MemberExpression = "MemberExpression";
    r.Identifier = "Identifier";
    r.Literal =
        "Literal";
    r.ArrayExpression = "ArrayExpression";
    r.Property = "Property";
    r.ObjectExpression = "ObjectExpression";
    r.ThisExpression = "ThisExpression";
    r.LocalsExpression = "LocalsExpression";
    r.NGValueParameter = "NGValueParameter";
    r.prototype = {
        ast: function (a) {
            this.text = a;
            this.tokens = this.lexer.lex(a);
            a = this.program();
            0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
            return a
        }, program: function () {
            for (var a = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()),
                    !this.expect(";"))return {type: r.Program, body: a}
        }, expressionStatement: function () {
            return {type: r.ExpressionStatement, expression: this.filterChain()}
        }, filterChain: function () {
            for (var a = this.expression(); this.expect("|");)a = this.filter(a);
            return a
        }, expression: function () {
            return this.assignment()
        }, assignment: function () {
            var a = this.ternary();
            if (this.expect("=")) {
                if (!Id(a))throw Xa("lval");
                a = {type: r.AssignmentExpression, left: a, right: this.assignment(), operator: "="}
            }
            return a
        }, ternary: function () {
            var a = this.logicalOR(),
                b, d;
            return this.expect("?") && (b = this.expression(), this.consume(":")) ? (d = this.expression(), {
                type: r.ConditionalExpression,
                test: a,
                alternate: b,
                consequent: d
            }) : a
        }, logicalOR: function () {
            for (var a = this.logicalAND(); this.expect("||");)a = {
                type: r.LogicalExpression,
                operator: "||",
                left: a,
                right: this.logicalAND()
            };
            return a
        }, logicalAND: function () {
            for (var a = this.equality(); this.expect("&&");)a = {
                type: r.LogicalExpression,
                operator: "&&",
                left: a,
                right: this.equality()
            };
            return a
        }, equality: function () {
            for (var a = this.relational(),
                     b; b = this.expect("==", "!=", "===", "!==");)a = {
                type: r.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.relational()
            };
            return a
        }, relational: function () {
            for (var a = this.additive(), b; b = this.expect("<", ">", "<=", ">=");)a = {
                type: r.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.additive()
            };
            return a
        }, additive: function () {
            for (var a = this.multiplicative(), b; b = this.expect("+", "-");)a = {
                type: r.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.multiplicative()
            };
            return a
        }, multiplicative: function () {
            for (var a = this.unary(),
                     b; b = this.expect("*", "/", "%");)a = {
                type: r.BinaryExpression,
                operator: b.text,
                left: a,
                right: this.unary()
            };
            return a
        }, unary: function () {
            var a;
            return (a = this.expect("+", "-", "!")) ? {
                type: r.UnaryExpression,
                operator: a.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        }, primary: function () {
            var a;
            this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = Ia(this.selfReferential[this.consume().text]) :
                this.options.literals.hasOwnProperty(this.peek().text) ? a = {
                    type: r.Literal,
                    value: this.options.literals[this.consume().text]
                } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var b; b = this.expect("(", "[", ".");)"(" === b.text ? (a = {
                type: r.CallExpression,
                callee: a,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === b.text ? (a = {
                type: r.MemberExpression,
                object: a,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) :
                "." === b.text ? a = {
                    type: r.MemberExpression,
                    object: a,
                    property: this.identifier(),
                    computed: !1
                } : this.throwError("IMPOSSIBLE");
            return a
        }, filter: function (a) {
            a = [a];
            for (var b = {
                type: r.CallExpression,
                callee: this.identifier(),
                arguments: a,
                filter: !0
            }; this.expect(":");)a.push(this.expression());
            return b
        }, parseArguments: function () {
            var a = [];
            if (")" !== this.peekToken().text) {
                do a.push(this.filterChain()); while (this.expect(","))
            }
            return a
        }, identifier: function () {
            var a = this.consume();
            a.identifier || this.throwError("is not a valid identifier",
                a);
            return {type: r.Identifier, name: a.text}
        }, constant: function () {
            return {type: r.Literal, value: this.consume().value}
        }, arrayDeclaration: function () {
            var a = [];
            if ("]" !== this.peekToken().text) {
                do {
                    if (this.peek("]"))break;
                    a.push(this.expression())
                } while (this.expect(","))
            }
            this.consume("]");
            return {type: r.ArrayExpression, elements: a}
        }, object: function () {
            var a = [], b;
            if ("}" !== this.peekToken().text) {
                do {
                    if (this.peek("}"))break;
                    b = {type: r.Property, kind: "init"};
                    this.peek().constant ? (b.key = this.constant(), b.computed = !1, this.consume(":"),
                        b.value = this.expression()) : this.peek().identifier ? (b.key = this.identifier(), b.computed = !1, this.peek(":") ? (this.consume(":"), b.value = this.expression()) : b.value = b.key) : this.peek("[") ? (this.consume("["), b.key = this.expression(), this.consume("]"), b.computed = !0, this.consume(":"), b.value = this.expression()) : this.throwError("invalid key", this.peek());
                    a.push(b)
                } while (this.expect(","))
            }
            this.consume("}");
            return {type: r.ObjectExpression, properties: a}
        }, throwError: function (a, b) {
            throw Xa("syntax", b.text, a, b.index +
                1, this.text, this.text.substring(b.index));
        }, consume: function (a) {
            if (0 === this.tokens.length)throw Xa("ueoe", this.text);
            var b = this.expect(a);
            b || this.throwError("is unexpected, expecting [" + a + "]", this.peek());
            return b
        }, peekToken: function () {
            if (0 === this.tokens.length)throw Xa("ueoe", this.text);
            return this.tokens[0]
        }, peek: function (a, b, d, c) {
            return this.peekAhead(0, a, b, d, c)
        }, peekAhead: function (a, b, d, c, e) {
            if (this.tokens.length > a) {
                a = this.tokens[a];
                var f = a.text;
                if (f === b || f === d || f === c || f === e || !(b || d || c || e))return a
            }
            return !1
        },
        expect: function (a, b, d, c) {
            return (a = this.peek(a, b, d, c)) ? (this.tokens.shift(), a) : !1
        }, selfReferential: {"this": {type: r.ThisExpression}, $locals: {type: r.LocalsExpression}}
    };
    var Gd = 2;
    Kd.prototype = {
        compile: function (a) {
            var b = this;
            this.state = {
                nextId: 0,
                filters: {},
                fn: {vars: [], body: [], own: {}},
                assign: {vars: [], body: [], own: {}},
                inputs: []
            };
            X(a, b.$filter);
            var d = "", c;
            this.stage = "assign";
            if (c = Jd(a)) this.state.computing = "assign", d = this.nextId(), this.recurse(c, d), this.return_(d), d = "fn.assign=" + this.generateFunction("assign",
                    "s,v,l");
            c = Hd(a.body);
            b.stage = "inputs";
            p(c, function (a, c) {
                var d = "fn" + c;
                b.state[d] = {vars: [], body: [], own: {}};
                b.state.computing = d;
                var k = b.nextId();
                b.recurse(a, k);
                b.return_(k);
                b.state.inputs.push({name: d, isPure: a.isPure});
                a.watchId = c
            });
            this.state.computing = "fn";
            this.stage = "main";
            this.recurse(a);
            a = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + d + this.watchFns() + "return fn;";
            a = (new Function("$filter", "getStringValue", "ifDefined", "plus", a))(this.$filter,
                Cg, Dg, Fd);
            this.state = this.stage = void 0;
            return a
        }, USE: "use", STRICT: "strict", watchFns: function () {
            var a = [], b = this.state.inputs, d = this;
            p(b, function (b) {
                a.push("var " + b.name + "=" + d.generateFunction(b.name, "s"));
                b.isPure && a.push(b.name, ".isPure=" + JSON.stringify(b.isPure) + ";")
            });
            b.length && a.push("fn.inputs=[" + b.map(function (a) {
                    return a.name
                }).join(",") + "];");
            return a.join("")
        }, generateFunction: function (a, b) {
            return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
        }, filterPrefix: function () {
            var a = [], b = this;
            p(this.state.filters, function (d, c) {
                a.push(d + "=$filter(" + b.escape(c) + ")")
            });
            return a.length ? "var " + a.join(",") + ";" : ""
        }, varsPrefix: function (a) {
            return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
        }, body: function (a) {
            return this.state[a].body.join("")
        }, recurse: function (a, b, d, c, e, f) {
            var g, k, h = this, l, m, n;
            c = c || B;
            if (!f && t(a.watchId)) b = b || this.nextId(), this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, d, c, e, !0)); else switch (a.type) {
                case r.Program:
                    p(a.body,
                        function (b, c) {
                            h.recurse(b.expression, void 0, void 0, function (a) {
                                k = a
                            });
                            c !== a.body.length - 1 ? h.current().body.push(k, ";") : h.return_(k)
                        });
                    break;
                case r.Literal:
                    m = this.escape(a.value);
                    this.assign(b, m);
                    c(b || m);
                    break;
                case r.UnaryExpression:
                    this.recurse(a.argument, void 0, void 0, function (a) {
                        k = a
                    });
                    m = a.operator + "(" + this.ifDefined(k, 0) + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case r.BinaryExpression:
                    this.recurse(a.left, void 0, void 0, function (a) {
                        g = a
                    });
                    this.recurse(a.right, void 0, void 0, function (a) {
                        k = a
                    });
                    m = "+" === a.operator ?
                        this.plus(g, k) : "-" === a.operator ? this.ifDefined(g, 0) + a.operator + this.ifDefined(k, 0) : "(" + g + ")" + a.operator + "(" + k + ")";
                    this.assign(b, m);
                    c(m);
                    break;
                case r.LogicalExpression:
                    b = b || this.nextId();
                    h.recurse(a.left, b);
                    h.if_("&&" === a.operator ? b : h.not(b), h.lazyRecurse(a.right, b));
                    c(b);
                    break;
                case r.ConditionalExpression:
                    b = b || this.nextId();
                    h.recurse(a.test, b);
                    h.if_(b, h.lazyRecurse(a.alternate, b), h.lazyRecurse(a.consequent, b));
                    c(b);
                    break;
                case r.Identifier:
                    b = b || this.nextId();
                    d && (d.context = "inputs" === h.stage ? "s" : this.assign(this.nextId(),
                        this.getHasOwnProperty("l", a.name) + "?l:s"), d.computed = !1, d.name = a.name);
                    h.if_("inputs" === h.stage || h.not(h.getHasOwnProperty("l", a.name)), function () {
                        h.if_("inputs" === h.stage || "s", function () {
                            e && 1 !== e && h.if_(h.isNull(h.nonComputedMember("s", a.name)), h.lazyAssign(h.nonComputedMember("s", a.name), "{}"));
                            h.assign(b, h.nonComputedMember("s", a.name))
                        })
                    }, b && h.lazyAssign(b, h.nonComputedMember("l", a.name)));
                    c(b);
                    break;
                case r.MemberExpression:
                    g = d && (d.context = this.nextId()) || this.nextId();
                    b = b || this.nextId();
                    h.recurse(a.object,
                        g, void 0, function () {
                            h.if_(h.notNull(g), function () {
                                a.computed ? (k = h.nextId(), h.recurse(a.property, k), h.getStringValue(k), e && 1 !== e && h.if_(h.not(h.computedMember(g, k)), h.lazyAssign(h.computedMember(g, k), "{}")), m = h.computedMember(g, k), h.assign(b, m), d && (d.computed = !0, d.name = k)) : (e && 1 !== e && h.if_(h.isNull(h.nonComputedMember(g, a.property.name)), h.lazyAssign(h.nonComputedMember(g, a.property.name), "{}")), m = h.nonComputedMember(g, a.property.name), h.assign(b, m), d && (d.computed = !1, d.name = a.property.name))
                            }, function () {
                                h.assign(b,
                                    "undefined")
                            });
                            c(b)
                        }, !!e);
                    break;
                case r.CallExpression:
                    b = b || this.nextId();
                    a.filter ? (k = h.filter(a.callee.name), l = [], p(a.arguments, function (a) {
                        var b = h.nextId();
                        h.recurse(a, b);
                        l.push(b)
                    }), m = k + "(" + l.join(",") + ")", h.assign(b, m), c(b)) : (k = h.nextId(), g = {}, l = [], h.recurse(a.callee, k, g, function () {
                        h.if_(h.notNull(k), function () {
                            p(a.arguments, function (b) {
                                h.recurse(b, a.constant ? void 0 : h.nextId(), void 0, function (a) {
                                    l.push(a)
                                })
                            });
                            m = g.name ? h.member(g.context, g.name, g.computed) + "(" + l.join(",") + ")" : k + "(" + l.join(",") +
                                ")";
                            h.assign(b, m)
                        }, function () {
                            h.assign(b, "undefined")
                        });
                        c(b)
                    }));
                    break;
                case r.AssignmentExpression:
                    k = this.nextId();
                    g = {};
                    this.recurse(a.left, void 0, g, function () {
                        h.if_(h.notNull(g.context), function () {
                            h.recurse(a.right, k);
                            m = h.member(g.context, g.name, g.computed) + a.operator + k;
                            h.assign(b, m);
                            c(b || m)
                        })
                    }, 1);
                    break;
                case r.ArrayExpression:
                    l = [];
                    p(a.elements, function (b) {
                        h.recurse(b, a.constant ? void 0 : h.nextId(), void 0, function (a) {
                            l.push(a)
                        })
                    });
                    m = "[" + l.join(",") + "]";
                    this.assign(b, m);
                    c(b || m);
                    break;
                case r.ObjectExpression:
                    l =
                        [];
                    n = !1;
                    p(a.properties, function (a) {
                        a.computed && (n = !0)
                    });
                    n ? (b = b || this.nextId(), this.assign(b, "{}"), p(a.properties, function (a) {
                        a.computed ? (g = h.nextId(), h.recurse(a.key, g)) : g = a.key.type === r.Identifier ? a.key.name : "" + a.key.value;
                        k = h.nextId();
                        h.recurse(a.value, k);
                        h.assign(h.member(b, g, a.computed), k)
                    })) : (p(a.properties, function (b) {
                        h.recurse(b.value, a.constant ? void 0 : h.nextId(), void 0, function (a) {
                            l.push(h.escape(b.key.type === r.Identifier ? b.key.name : "" + b.key.value) + ":" + a)
                        })
                    }), m = "{" + l.join(",") + "}", this.assign(b,
                        m));
                    c(b || m);
                    break;
                case r.ThisExpression:
                    this.assign(b, "s");
                    c(b || "s");
                    break;
                case r.LocalsExpression:
                    this.assign(b, "l");
                    c(b || "l");
                    break;
                case r.NGValueParameter:
                    this.assign(b, "v"), c(b || "v")
            }
        }, getHasOwnProperty: function (a, b) {
            var d = a + "." + b, c = this.current().own;
            c.hasOwnProperty(d) || (c[d] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")"));
            return c[d]
        }, assign: function (a, b) {
            if (a)return this.current().body.push(a, "=", b, ";"), a
        }, filter: function (a) {
            this.state.filters.hasOwnProperty(a) || (this.state.filters[a] =
                this.nextId(!0));
            return this.state.filters[a]
        }, ifDefined: function (a, b) {
            return "ifDefined(" + a + "," + this.escape(b) + ")"
        }, plus: function (a, b) {
            return "plus(" + a + "," + b + ")"
        }, return_: function (a) {
            this.current().body.push("return ", a, ";")
        }, if_: function (a, b, d) {
            if (!0 === a) b(); else {
                var c = this.current().body;
                c.push("if(", a, "){");
                b();
                c.push("}");
                d && (c.push("else{"), d(), c.push("}"))
            }
        }, not: function (a) {
            return "!(" + a + ")"
        }, isNull: function (a) {
            return a + "==null"
        }, notNull: function (a) {
            return a + "!=null"
        }, nonComputedMember: function (a,
                                        b) {
            var d = /[^$_a-zA-Z0-9]/g;
            return /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
        }, computedMember: function (a, b) {
            return a + "[" + b + "]"
        }, member: function (a, b, d) {
            return d ? this.computedMember(a, b) : this.nonComputedMember(a, b)
        }, getStringValue: function (a) {
            this.assign(a, "getStringValue(" + a + ")")
        }, lazyRecurse: function (a, b, d, c, e, f) {
            var g = this;
            return function () {
                g.recurse(a, b, d, c, e, f)
            }
        }, lazyAssign: function (a, b) {
            var d = this;
            return function () {
                d.assign(a, b)
            }
        }, stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function (a) {
            return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }, escape: function (a) {
            if (C(a))return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (W(a))return a.toString();
            if (!0 === a)return "true";
            if (!1 === a)return "false";
            if (null === a)return "null";
            if ("undefined" === typeof a)return "undefined";
            throw Xa("esc");
        }, nextId: function (a, b) {
            var d = "v" + this.state.nextId++;
            a || this.current().vars.push(d + (b ? "=" + b : ""));
            return d
        }, current: function () {
            return this.state[this.state.computing]
        }
    };
    Ld.prototype = {
        compile: function (a) {
            var b = this;
            X(a, b.$filter);
            var d, c;
            if (d = Jd(a)) c = this.recurse(d);
            d = Hd(a.body);
            var e;
            d && (e = [], p(d, function (a, c) {
                var d = b.recurse(a);
                d.isPure = a.isPure;
                a.input = d;
                e.push(d);
                a.watchId = c
            }));
            var f = [];
            p(a.body, function (a) {
                f.push(b.recurse(a.expression))
            });
            a = 0 === a.body.length ? B : 1 === a.body.length ? f[0] : function (a, b) {
                var c;
                p(f, function (d) {
                    c = d(a, b)
                });
                return c
            };
            c && (a.assign = function (a, b, d) {
                return c(a, d, b)
            });
            e && (a.inputs = e);
            return a
        }, recurse: function (a, b, d) {
            var c, e, f = this, g;
            if (a.input)return this.inputs(a.input,
                a.watchId);
            switch (a.type) {
                case r.Literal:
                    return this.value(a.value, b);
                case r.UnaryExpression:
                    return e = this.recurse(a.argument), this["unary" + a.operator](e, b);
                case r.BinaryExpression:
                    return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
                case r.LogicalExpression:
                    return c = this.recurse(a.left), e = this.recurse(a.right), this["binary" + a.operator](c, e, b);
                case r.ConditionalExpression:
                    return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent),
                        b);
                case r.Identifier:
                    return f.identifier(a.name, b, d);
                case r.MemberExpression:
                    return c = this.recurse(a.object, !1, !!d), a.computed || (e = a.property.name), a.computed && (e = this.recurse(a.property)), a.computed ? this.computedMember(c, e, b, d) : this.nonComputedMember(c, e, b, d);
                case r.CallExpression:
                    return g = [], p(a.arguments, function (a) {
                        g.push(f.recurse(a))
                    }), a.filter && (e = this.$filter(a.callee.name)), a.filter || (e = this.recurse(a.callee, !0)), a.filter ? function (a, c, d, f) {
                        for (var n = [], q = 0; q < g.length; ++q)n.push(g[q](a, c,
                            d, f));
                        a = e.apply(void 0, n, f);
                        return b ? {context: void 0, name: void 0, value: a} : a
                    } : function (a, c, d, f) {
                        var n = e(a, c, d, f), q;
                        if (null != n.value) {
                            q = [];
                            for (var p = 0; p < g.length; ++p)q.push(g[p](a, c, d, f));
                            q = n.value.apply(n.context, q)
                        }
                        return b ? {value: q} : q
                    };
                case r.AssignmentExpression:
                    return c = this.recurse(a.left, !0, 1), e = this.recurse(a.right), function (a, d, f, g) {
                        var n = c(a, d, f, g);
                        a = e(a, d, f, g);
                        n.context[n.name] = a;
                        return b ? {value: a} : a
                    };
                case r.ArrayExpression:
                    return g = [], p(a.elements, function (a) {
                        g.push(f.recurse(a))
                    }), function (a,
                                  c, d, e) {
                        for (var f = [], q = 0; q < g.length; ++q)f.push(g[q](a, c, d, e));
                        return b ? {value: f} : f
                    };
                case r.ObjectExpression:
                    return g = [], p(a.properties, function (a) {
                        a.computed ? g.push({
                            key: f.recurse(a.key),
                            computed: !0,
                            value: f.recurse(a.value)
                        }) : g.push({
                            key: a.key.type === r.Identifier ? a.key.name : "" + a.key.value,
                            computed: !1,
                            value: f.recurse(a.value)
                        })
                    }), function (a, c, d, e) {
                        for (var f = {},
                                 q = 0; q < g.length; ++q)g[q].computed ? f[g[q].key(a, c, d, e)] = g[q].value(a, c, d, e) : f[g[q].key] = g[q].value(a, c, d, e);
                        return b ? {value: f} : f
                    };
                case r.ThisExpression:
                    return function (a) {
                        return b ?
                            {value: a} : a
                    };
                case r.LocalsExpression:
                    return function (a, c) {
                        return b ? {value: c} : c
                    };
                case r.NGValueParameter:
                    return function (a, c, d) {
                        return b ? {value: d} : d
                    }
            }
        }, "unary+": function (a, b) {
            return function (d, c, e, f) {
                d = a(d, c, e, f);
                d = t(d) ? +d : 0;
                return b ? {value: d} : d
            }
        }, "unary-": function (a, b) {
            return function (d, c, e, f) {
                d = a(d, c, e, f);
                d = t(d) ? -d : -0;
                return b ? {value: d} : d
            }
        }, "unary!": function (a, b) {
            return function (d, c, e, f) {
                d = !a(d, c, e, f);
                return b ? {value: d} : d
            }
        }, "binary+": function (a, b, d) {
            return function (c, e, f, g) {
                var k = a(c, e, f, g);
                c = b(c,
                    e, f, g);
                k = Fd(k, c);
                return d ? {value: k} : k
            }
        }, "binary-": function (a, b, d) {
            return function (c, e, f, g) {
                var k = a(c, e, f, g);
                c = b(c, e, f, g);
                k = (t(k) ? k : 0) - (t(c) ? c : 0);
                return d ? {value: k} : k
            }
        }, "binary*": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) * b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary/": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) / b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary%": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) % b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary===": function (a, b, d) {
            return function (c,
                             e, f, g) {
                c = a(c, e, f, g) === b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary!==": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) !== b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary==": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) == b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary!=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) != b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary<": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) < b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary>": function (a, b, d) {
            return function (c, e,
                             f, g) {
                c = a(c, e, f, g) > b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary<=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) <= b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary>=": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) >= b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary&&": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) && b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "binary||": function (a, b, d) {
            return function (c, e, f, g) {
                c = a(c, e, f, g) || b(c, e, f, g);
                return d ? {value: c} : c
            }
        }, "ternary?:": function (a, b, d, c) {
            return function (e, f,
                             g, k) {
                e = a(e, f, g, k) ? b(e, f, g, k) : d(e, f, g, k);
                return c ? {value: e} : e
            }
        }, value: function (a, b) {
            return function () {
                return b ? {context: void 0, name: void 0, value: a} : a
            }
        }, identifier: function (a, b, d) {
            return function (c, e, f, g) {
                c = e && a in e ? e : c;
                d && 1 !== d && c && null == c[a] && (c[a] = {});
                e = c ? c[a] : void 0;
                return b ? {context: c, name: a, value: e} : e
            }
        }, computedMember: function (a, b, d, c) {
            return function (e, f, g, k) {
                var h = a(e, f, g, k), l, m;
                null != h && (l = b(e, f, g, k), l += "", c && 1 !== c && h && !h[l] && (h[l] = {}), m = h[l]);
                return d ? {context: h, name: l, value: m} : m
            }
        }, nonComputedMember: function (a,
                                        b, d, c) {
            return function (e, f, g, k) {
                e = a(e, f, g, k);
                c && 1 !== c && e && null == e[b] && (e[b] = {});
                f = null != e ? e[b] : void 0;
                return d ? {context: e, name: b, value: f} : f
            }
        }, inputs: function (a, b) {
            return function (d, c, e, f) {
                return f ? f[b] : a(d, c, e)
            }
        }
    };
    xc.prototype = {
        constructor: xc, parse: function (a) {
            a = this.ast.ast(a);
            var b = this.astCompiler.compile(a);
            b.literal = 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === r.Literal || a.body[0].expression.type === r.ArrayExpression || a.body[0].expression.type === r.ObjectExpression);
            b.constant =
                a.constant;
            return b
        }
    };
    var qa = K("$sce"), ka = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"},
        Ac = /_([a-z])/g, Hg = K("$compile"), ea = x.document.createElement("a"), Pd = ua(x.location.href);
    Qd.$inject = ["$document"];
    ed.$inject = ["$provide"];
    var Xd = 22, Wd = ".", Cc = "0";
    Rd.$inject = ["$locale"];
    Td.$inject = ["$locale"];
    var Sg = {
            yyyy: $("FullYear", 4, 0, !1, !0),
            yy: $("FullYear", 2, 0, !0, !0),
            y: $("FullYear", 1, 0, !1, !0),
            MMMM: ob("Month"),
            MMM: ob("Month", !0),
            MM: $("Month", 2, 1),
            M: $("Month", 1, 1),
            LLLL: ob("Month", !1, !0),
            dd: $("Date", 2),
            d: $("Date", 1),
            HH: $("Hours", 2),
            H: $("Hours", 1),
            hh: $("Hours", 2, -12),
            h: $("Hours", 1, -12),
            mm: $("Minutes", 2),
            m: $("Minutes", 1),
            ss: $("Seconds", 2),
            s: $("Seconds", 1),
            sss: $("Milliseconds", 3),
            EEEE: ob("Day"),
            EEE: ob("Day", !0),
            a: function (a, b) {
                return 12 > a.getHours() ? b.AMPMS[0] : b.AMPMS[1]
            },
            Z: function (a, b, d) {
                a = -1 * d;
                return a = (0 <= a ? "+" : "") + (Lb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Lb(Math.abs(a % 60), 2))
            },
            ww: Zd(2),
            w: Zd(1),
            G: Dc,
            GG: Dc,
            GGG: Dc,
            GGGG: function (a, b) {
                return 0 >= a.getFullYear() ? b.ERANAMES[0] : b.ERANAMES[1]
            }
        },
        Rg = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))([\s\S]*)/,
        Qg = /^-?\d+$/;
    Sd.$inject = ["$locale"];
    var Lg = aa(N), Mg = aa(wb);
    Ud.$inject = ["$parse"];
    var Ie = aa({
        restrict: "E", compile: function (a, b) {
            if (!b.href && !b.xlinkHref)return function (a, b) {
                if ("a" === b[0].nodeName.toLowerCase()) {
                    var e = "[object SVGAnimatedString]" === la.call(b.prop("href")) ? "xlink:href" : "href";
                    b.on("click", function (a) {
                        b.attr(e) || a.preventDefault()
                    })
                }
            }
        }
    }), xb = {};
    p(Hb, function (a, b) {
        function d(a, d, e) {
            a.$watch(e[c],
                function (a) {
                    e.$set(b, !!a)
                })
        }

        if ("multiple" !== a) {
            var c = Ea("ng-" + b), e = d;
            "checked" === a && (e = function (a, b, e) {
                e.ngModel !== e[c] && d(a, b, e)
            });
            xb[c] = function () {
                return {restrict: "A", priority: 100, link: e}
            }
        }
    });
    p(td, function (a, b) {
        xb[b] = function () {
            return {
                priority: 100, link: function (a, c, e) {
                    if ("ngPattern" === b && "/" === e.ngPattern.charAt(0) && (c = e.ngPattern.match(Wg))) {
                        e.$set("ngPattern", new RegExp(c[1], c[2]));
                        return
                    }
                    a.$watch(e[b], function (a) {
                        e.$set(b, a)
                    })
                }
            }
        }
    });
    p(["src", "srcset", "href"], function (a) {
        var b = Ea("ng-" + a);
        xb[b] =
            function () {
                return {
                    priority: 99, link: function (d, c, e) {
                        var f = a, g = a;
                        "href" === a && "[object SVGAnimatedString]" === la.call(c.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null);
                        e.$observe(b, function (b) {
                            b ? (e.$set(g, b), Ba && f && c.prop(f, e[g])) : "href" === a && e.$set(g, null)
                        })
                    }
                }
            }
    });
    var Nb = {
        $addControl: B, $$renameControl: function (a, b) {
            a.$name = b
        }, $removeControl: B, $setValidity: B, $setDirty: B, $setPristine: B, $setSubmitted: B
    };
    Mb.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    Mb.prototype = {
        $rollbackViewValue: function () {
            p(this.$$controls,
                function (a) {
                    a.$rollbackViewValue()
                })
        }, $commitViewValue: function () {
            p(this.$$controls, function (a) {
                a.$commitViewValue()
            })
        }, $addControl: function (a) {
            Oa(a.$name, "input");
            this.$$controls.push(a);
            a.$name && (this[a.$name] = a);
            a.$$parentForm = this
        }, $$renameControl: function (a, b) {
            var d = a.$name;
            this[d] === a && delete this[d];
            this[b] = a;
            a.$name = b
        }, $removeControl: function (a) {
            a.$name && this[a.$name] === a && delete this[a.$name];
            p(this.$pending, function (b, d) {
                this.$setValidity(d, null, a)
            }, this);
            p(this.$error, function (b, d) {
                this.$setValidity(d,
                    null, a)
            }, this);
            p(this.$$success, function (b, d) {
                this.$setValidity(d, null, a)
            }, this);
            cb(this.$$controls, a);
            a.$$parentForm = Nb
        }, $setDirty: function () {
            this.$$animate.removeClass(this.$$element, Ya);
            this.$$animate.addClass(this.$$element, Sb);
            this.$dirty = !0;
            this.$pristine = !1;
            this.$$parentForm.$setDirty()
        }, $setPristine: function () {
            this.$$animate.setClass(this.$$element, Ya, Sb + " ng-submitted");
            this.$dirty = !1;
            this.$pristine = !0;
            this.$submitted = !1;
            p(this.$$controls, function (a) {
                a.$setPristine()
            })
        }, $setUntouched: function () {
            p(this.$$controls,
                function (a) {
                    a.$setUntouched()
                })
        }, $setSubmitted: function () {
            this.$$animate.addClass(this.$$element, "ng-submitted");
            this.$submitted = !0;
            this.$$parentForm.$setSubmitted()
        }
    };
    be({
        clazz: Mb, set: function (a, b, d) {
            var c = a[b];
            c ? -1 === c.indexOf(d) && c.push(d) : a[b] = [d]
        }, unset: function (a, b, d) {
            var c = a[b];
            c && (cb(c, d), 0 === c.length && delete a[b])
        }
    });
    var je = function (a) {
            return ["$timeout", "$parse", function (b, d) {
                function c(a) {
                    return "" === a ? d('this[""]').assign : d(a).assign || B
                }

                return {
                    name: "form", restrict: a ? "EAC" : "E", require: ["form",
                        "^^?form"], controller: Mb, compile: function (d, f) {
                        d.addClass(Ya).addClass(pb);
                        var g = f.name ? "name" : a && f.ngForm ? "ngForm" : !1;
                        return {
                            pre: function (a, d, e, f) {
                                var n = f[0];
                                if (!("action" in e)) {
                                    var q = function (b) {
                                        a.$apply(function () {
                                            n.$commitViewValue();
                                            n.$setSubmitted()
                                        });
                                        b.preventDefault()
                                    };
                                    d[0].addEventListener("submit", q);
                                    d.on("$destroy", function () {
                                        b(function () {
                                            d[0].removeEventListener("submit", q)
                                        }, 0, !1)
                                    })
                                }
                                (f[1] || n.$$parentForm).$addControl(n);
                                var p = g ? c(n.$name) : B;
                                g && (p(a, n), e.$observe(g, function (b) {
                                    n.$name !==
                                    b && (p(a, void 0), n.$$parentForm.$$renameControl(n, b), p = c(n.$name), p(a, n))
                                }));
                                d.on("$destroy", function () {
                                    n.$$parentForm.$removeControl(n);
                                    p(a, void 0);
                                    O(n, Nb)
                                })
                            }
                        }
                    }
                }
            }]
        }, Je = je(), Ve = je(!0), Tg = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        eh = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        fh = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        Ug = /^\s*(-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/, ke = /^(\d{4,})-(\d{2})-(\d{2})$/,
        le = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, Kc = /^(\d{4,})-W(\d\d)$/,
        me = /^(\d{4,})-(\d\d)$/, ne = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/, de = R();
    p(["date", "datetime-local", "month", "time", "week"], function (a) {
        de[a] = !0
    });
    var oe = {
        text: function (a, b, d, c, e, f) {
            Va(a, b, d, c, e, f);
            Fc(c)
        },
        date: qb("date", ke, Ob(ke, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": qb("datetimelocal", le, Ob(le, "yyyy MM dd HH mm ss sss".split(" ")),
            "yyyy-MM-ddTHH:mm:ss.sss"),
        time: qb("time", ne, Ob(ne, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: qb("week", Kc, function (a, b) {
            if (ia(a))return a;
            if (C(a)) {
                Kc.lastIndex = 0;
                var d = Kc.exec(a);
                if (d) {
                    var c = +d[1], e = +d[2], f = d = 0, g = 0, k = 0, h = Yd(c), e = 7 * (e - 1);
                    b && (d = b.getHours(), f = b.getMinutes(), g = b.getSeconds(), k = b.getMilliseconds());
                    return new Date(c, 0, h.getDate() + e, d, f, g, k)
                }
            }
            return NaN
        }, "yyyy-Www"),
        month: qb("month", me, Ob(me, ["yyyy", "MM"]), "yyyy-MM"),
        number: function (a, b, d, c, e, f) {
            Gc(a, b, d, c);
            ee(c);
            Va(a, b, d, c, e, f);
            var g,
                k;
            if (t(d.min) || d.ngMin) c.$validators.min = function (a) {
                return c.$isEmpty(a) || v(g) || a >= g
            }, d.$observe("min", function (a) {
                g = Wa(a);
                c.$validate()
            });
            if (t(d.max) || d.ngMax) c.$validators.max = function (a) {
                return c.$isEmpty(a) || v(k) || a <= k
            }, d.$observe("max", function (a) {
                k = Wa(a);
                c.$validate()
            });
            if (t(d.step) || d.ngStep) {
                var h;
                c.$validators.step = function (a, b) {
                    return c.$isEmpty(b) || v(h) || fe(b, g || 0, h)
                };
                d.$observe("step", function (a) {
                    h = Wa(a);
                    c.$validate()
                })
            }
        },
        url: function (a, b, d, c, e, f) {
            Va(a, b, d, c, e, f);
            Fc(c);
            c.$$parserName =
                "url";
            c.$validators.url = function (a, b) {
                var d = a || b;
                return c.$isEmpty(d) || eh.test(d)
            }
        },
        email: function (a, b, d, c, e, f) {
            Va(a, b, d, c, e, f);
            Fc(c);
            c.$$parserName = "email";
            c.$validators.email = function (a, b) {
                var d = a || b;
                return c.$isEmpty(d) || fh.test(d)
            }
        },
        radio: function (a, b, d, c) {
            var e = !d.ngTrim || "false" !== P(d.ngTrim);
            v(d.name) && b.attr("name", ++sb);
            b.on("click", function (a) {
                var g;
                b[0].checked && (g = d.value, e && (g = P(g)), c.$setViewValue(g, a && a.type))
            });
            c.$render = function () {
                var a = d.value;
                e && (a = P(a));
                b[0].checked = a === c.$viewValue
            };
            d.$observe("value", c.$render)
        },
        range: function (a, b, d, c, e, f) {
            function g(a, c) {
                b.attr(a, d[a]);
                d.$observe(a, c)
            }

            function k(a) {
                n = Wa(a);
                ba(c.$modelValue) || (m ? (a = b.val(), n > a && (a = n, b.val(a)), c.$setViewValue(a)) : c.$validate())
            }

            function h(a) {
                q = Wa(a);
                ba(c.$modelValue) || (m ? (a = b.val(), q < a && (b.val(q), a = q < n ? n : q), c.$setViewValue(a)) : c.$validate())
            }

            function l(a) {
                p = Wa(a);
                ba(c.$modelValue) || (m && c.$viewValue !== b.val() ? c.$setViewValue(b.val()) : c.$validate())
            }

            Gc(a, b, d, c);
            ee(c);
            Va(a, b, d, c, e, f);
            var m = c.$$hasNativeValidators &&
                "range" === b[0].type, n = m ? 0 : void 0, q = m ? 100 : void 0, p = m ? 1 : void 0, r = b[0].validity;
            a = t(d.min);
            e = t(d.max);
            f = t(d.step);
            var w = c.$render;
            c.$render = m && t(r.rangeUnderflow) && t(r.rangeOverflow) ? function () {
                w();
                c.$setViewValue(b.val())
            } : w;
            a && (c.$validators.min = m ? function () {
                return !0
            } : function (a, b) {
                return c.$isEmpty(b) || v(n) || b >= n
            }, g("min", k));
            e && (c.$validators.max = m ? function () {
                return !0
            } : function (a, b) {
                return c.$isEmpty(b) || v(q) || b <= q
            }, g("max", h));
            f && (c.$validators.step = m ? function () {
                return !r.stepMismatch
            } : function (a,
                          b) {
                return c.$isEmpty(b) || v(p) || fe(b, n || 0, p)
            }, g("step", l))
        },
        checkbox: function (a, b, d, c, e, f, g, k) {
            var h = ge(k, a, "ngTrueValue", d.ngTrueValue, !0), l = ge(k, a, "ngFalseValue", d.ngFalseValue, !1);
            b.on("click", function (a) {
                c.$setViewValue(b[0].checked, a && a.type)
            });
            c.$render = function () {
                b[0].checked = c.$viewValue
            };
            c.$isEmpty = function (a) {
                return !1 === a
            };
            c.$formatters.push(function (a) {
                return sa(a, h)
            });
            c.$parsers.push(function (a) {
                return a ? h : l
            })
        },
        hidden: B,
        button: B,
        submit: B,
        reset: B,
        file: B
    }, Zc = ["$browser", "$sniffer", "$filter",
        "$parse", function (a, b, d, c) {
            return {
                restrict: "E", require: ["?ngModel"], link: {
                    pre: function (e, f, g, k) {
                        k[0] && (oe[N(g.type)] || oe.text)(e, f, g, k[0], b, a, d, c)
                    }
                }
            }
        }], gh = /^(true|false|\d+)$/, nf = function () {
        function a(a, d, c) {
            var e = t(c) ? c : 9 === Ba ? "" : null;
            a.prop("value", e);
            d.$set("value", c)
        }

        return {
            restrict: "A", priority: 100, compile: function (b, d) {
                return gh.test(d.ngValue) ? function (b, d, f) {
                    b = b.$eval(f.ngValue);
                    a(d, f, b)
                } : function (b, d, f) {
                    b.$watch(f.ngValue, function (b) {
                        a(d, f, b)
                    })
                }
            }
        }
    }, Ne = ["$compile", function (a) {
        return {
            restrict: "AC",
            compile: function (b) {
                a.$$addBindingClass(b);
                return function (b, c, e) {
                    a.$$addBindingInfo(c, e.ngBind);
                    c = c[0];
                    b.$watch(e.ngBind, function (a) {
                        c.textContent = cc(a)
                    })
                }
            }
        }
    }], Pe = ["$interpolate", "$compile", function (a, b) {
        return {
            compile: function (d) {
                b.$$addBindingClass(d);
                return function (c, d, f) {
                    c = a(d.attr(f.$attr.ngBindTemplate));
                    b.$$addBindingInfo(d, c.expressions);
                    d = d[0];
                    f.$observe("ngBindTemplate", function (a) {
                        d.textContent = v(a) ? "" : a
                    })
                }
            }
        }
    }], Oe = ["$sce", "$parse", "$compile", function (a, b, d) {
        return {
            restrict: "A", compile: function (c,
                                              e) {
                var f = b(e.ngBindHtml), g = b(e.ngBindHtml, function (b) {
                    return a.valueOf(b)
                });
                d.$$addBindingClass(c);
                return function (b, c, e) {
                    d.$$addBindingInfo(c, e.ngBindHtml);
                    b.$watch(g, function () {
                        var d = f(b);
                        c.html(a.getTrustedHtml(d) || "")
                    })
                }
            }
        }
    }], mf = aa({
        restrict: "A", require: "ngModel", link: function (a, b, d, c) {
            c.$viewChangeListeners.push(function () {
                a.$eval(d.ngChange)
            })
        }
    }), Qe = Ic("", !0), Se = Ic("Odd", 0), Re = Ic("Even", 1), Te = Ua({
        compile: function (a, b) {
            b.$set("ngCloak", void 0);
            a.removeClass("ng-cloak")
        }
    }), Ue = [function () {
        return {
            restrict: "A",
            scope: !0, controller: "@", priority: 500
        }
    }], dd = {}, hh = {blur: !0, focus: !0};
    p("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var b = Ea("ng-" + a);
        dd[b] = ["$parse", "$rootScope", function (d, c) {
            return {
                restrict: "A", compile: function (e, f) {
                    var g = d(f[b]);
                    return function (b, d) {
                        d.on(a, function (d) {
                            var e = function () {
                                g(b, {$event: d})
                            };
                            hh[a] && c.$$phase ? b.$evalAsync(e) : b.$apply(e)
                        })
                    }
                }
            }
        }]
    });
    var Xe = ["$animate", "$compile",
        function (a, b) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (d, c, e, f, g) {
                    var k, h, l;
                    d.$watch(e.ngIf, function (d) {
                        d ? h || g(function (d, f) {
                                h = f;
                                d[d.length++] = b.$$createComment("end ngIf", e.ngIf);
                                k = {clone: d};
                                a.enter(d, c.parent(), c)
                            }) : (l && (l.remove(), l = null), h && (h.$destroy(), h = null), k && (l = vb(k.clone), a.leave(l).done(function (a) {
                            !1 !== a && (l = null)
                        }), k = null))
                    })
                }
            }
        }], Ye = ["$templateRequest", "$anchorScroll", "$animate", function (a, b, d) {
        return {
            restrict: "ECA", priority: 400,
            terminal: !0, transclude: "element", controller: fa.noop, compile: function (c, e) {
                var f = e.ngInclude || e.src, g = e.onload || "", k = e.autoscroll;
                return function (c, e, m, n, q) {
                    var p = 0, r, w, u, A = function () {
                        w && (w.remove(), w = null);
                        r && (r.$destroy(), r = null);
                        u && (d.leave(u).done(function (a) {
                            !1 !== a && (w = null)
                        }), w = u, u = null)
                    };
                    c.$watch(f, function (f) {
                        var m = function (a) {
                            !1 === a || !t(k) || k && !c.$eval(k) || b()
                        }, y = ++p;
                        f ? (a(f, !0).then(function (a) {
                            if (!c.$$destroyed && y === p) {
                                var b = c.$new();
                                n.template = a;
                                a = q(b, function (a) {
                                    A();
                                    d.enter(a, null, e).done(m)
                                });
                                r = b;
                                u = a;
                                r.$emit("$includeContentLoaded", f);
                                c.$eval(g)
                            }
                        }, function () {
                            c.$$destroyed || y !== p || (A(), c.$emit("$includeContentError", f))
                        }), c.$emit("$includeContentRequested", f)) : (A(), n.template = null)
                    })
                }
            }
        }
    }], pf = ["$compile", function (a) {
        return {
            restrict: "ECA", priority: -400, require: "ngInclude", link: function (b, d, c, e) {
                la.call(d[0]).match(/SVG/) ? (d.empty(), a(fd(e.template, x.document).childNodes)(b, function (a) {
                    d.append(a)
                }, {futureParentElement: d})) : (d.html(e.template), a(d.contents())(b))
            }
        }
    }], Ze = Ua({
        priority: 450, compile: function () {
            return {
                pre: function (a,
                               b, d) {
                    a.$eval(d.ngInit)
                }
            }
        }
    }), lf = function () {
        return {
            restrict: "A", priority: 100, require: "ngModel", link: function (a, b, d, c) {
                var e = d.ngList || ", ", f = "false" !== d.ngTrim, g = f ? P(e) : e;
                c.$parsers.push(function (a) {
                    if (!v(a)) {
                        var b = [];
                        a && p(a.split(g), function (a) {
                            a && b.push(f ? P(a) : a)
                        });
                        return b
                    }
                });
                c.$formatters.push(function (a) {
                    if (I(a))return a.join(e)
                });
                c.$isEmpty = function (a) {
                    return !a || !a.length
                }
            }
        }
    }, pb = "ng-valid", ae = "ng-invalid", Ya = "ng-pristine", Sb = "ng-dirty", rb = K("ngModel");
    Pb.$inject = "$scope $exceptionHandler $attrs $element $parse $animate $timeout $q $interpolate".split(" ");
    Pb.prototype = {
        $$initGetterSetters: function () {
            if (this.$options.getOption("getterSetter")) {
                var a = this.$$parse(this.$$attr.ngModel + "()"), b = this.$$parse(this.$$attr.ngModel + "($$$p)");
                this.$$ngModelGet = function (b) {
                    var c = this.$$parsedNgModel(b);
                    E(c) && (c = a(b));
                    return c
                };
                this.$$ngModelSet = function (a, c) {
                    E(this.$$parsedNgModel(a)) ? b(a, {$$$p: c}) : this.$$parsedNgModelAssign(a, c)
                }
            } else if (!this.$$parsedNgModel.assign)throw rb("nonassign", this.$$attr.ngModel, Aa(this.$$element));
        }, $render: B, $isEmpty: function (a) {
            return v(a) ||
                "" === a || null === a || a !== a
        }, $$updateEmptyClasses: function (a) {
            this.$isEmpty(a) ? (this.$$animate.removeClass(this.$$element, "ng-not-empty"), this.$$animate.addClass(this.$$element, "ng-empty")) : (this.$$animate.removeClass(this.$$element, "ng-empty"), this.$$animate.addClass(this.$$element, "ng-not-empty"))
        }, $setPristine: function () {
            this.$dirty = !1;
            this.$pristine = !0;
            this.$$animate.removeClass(this.$$element, Sb);
            this.$$animate.addClass(this.$$element, Ya)
        }, $setDirty: function () {
            this.$dirty = !0;
            this.$pristine = !1;
            this.$$animate.removeClass(this.$$element,
                Ya);
            this.$$animate.addClass(this.$$element, Sb);
            this.$$parentForm.$setDirty()
        }, $setUntouched: function () {
            this.$touched = !1;
            this.$untouched = !0;
            this.$$animate.setClass(this.$$element, "ng-untouched", "ng-touched")
        }, $setTouched: function () {
            this.$touched = !0;
            this.$untouched = !1;
            this.$$animate.setClass(this.$$element, "ng-touched", "ng-untouched")
        }, $rollbackViewValue: function () {
            this.$$timeout.cancel(this.$$pendingDebounce);
            this.$viewValue = this.$$lastCommittedViewValue;
            this.$render()
        }, $validate: function () {
            if (!ba(this.$modelValue)) {
                var a =
                        this.$$lastCommittedViewValue, b = this.$$rawModelValue, d = this.$valid, c = this.$modelValue,
                    e = this.$options.getOption("allowInvalid"), f = this;
                this.$$runValidators(b, a, function (a) {
                    e || d === a || (f.$modelValue = a ? b : void 0, f.$modelValue !== c && f.$$writeModelToScope())
                })
            }
        }, $$runValidators: function (a, b, d) {
            function c() {
                var c = !0;
                p(h.$validators, function (d, e) {
                    var g = Boolean(d(a, b));
                    c = c && g;
                    f(e, g)
                });
                return c ? !0 : (p(h.$asyncValidators, function (a, b) {
                    f(b, null)
                }), !1)
            }

            function e() {
                var c = [], d = !0;
                p(h.$asyncValidators, function (e,
                                                g) {
                    var h = e(a, b);
                    if (!h || !E(h.then))throw rb("nopromise", h);
                    f(g, void 0);
                    c.push(h.then(function () {
                        f(g, !0)
                    }, function () {
                        d = !1;
                        f(g, !1)
                    }))
                });
                c.length ? h.$$q.all(c).then(function () {
                    g(d)
                }, B) : g(!0)
            }

            function f(a, b) {
                k === h.$$currentValidationRunId && h.$setValidity(a, b)
            }

            function g(a) {
                k === h.$$currentValidationRunId && d(a)
            }

            this.$$currentValidationRunId++;
            var k = this.$$currentValidationRunId, h = this;
            (function () {
                var a = h.$$parserName || "parse";
                if (v(h.$$parserValid)) f(a, null); else return h.$$parserValid || (p(h.$validators, function (a,
                                                                                                               b) {
                    f(b, null)
                }), p(h.$asyncValidators, function (a, b) {
                    f(b, null)
                })), f(a, h.$$parserValid), h.$$parserValid;
                return !0
            })() ? c() ? e() : g(!1) : g(!1)
        }, $commitViewValue: function () {
            var a = this.$viewValue;
            this.$$timeout.cancel(this.$$pendingDebounce);
            if (this.$$lastCommittedViewValue !== a || "" === a && this.$$hasNativeValidators) this.$$updateEmptyClasses(a), this.$$lastCommittedViewValue = a, this.$pristine && this.$setDirty(), this.$$parseAndValidate()
        }, $$parseAndValidate: function () {
            var a = this.$$lastCommittedViewValue, b = this;
            if (this.$$parserValid =
                    v(a) ? void 0 : !0)for (var d = 0; d < this.$parsers.length; d++)if (a = this.$parsers[d](a), v(a)) {
                this.$$parserValid = !1;
                break
            }
            ba(this.$modelValue) && (this.$modelValue = this.$$ngModelGet(this.$$scope));
            var c = this.$modelValue, e = this.$options.getOption("allowInvalid");
            this.$$rawModelValue = a;
            e && (this.$modelValue = a, b.$modelValue !== c && b.$$writeModelToScope());
            this.$$runValidators(a, this.$$lastCommittedViewValue, function (d) {
                e || (b.$modelValue = d ? a : void 0, b.$modelValue !== c && b.$$writeModelToScope())
            })
        }, $$writeModelToScope: function () {
            this.$$ngModelSet(this.$$scope,
                this.$modelValue);
            p(this.$viewChangeListeners, function (a) {
                try {
                    a()
                } catch (b) {
                    this.$$exceptionHandler(b)
                }
            }, this)
        }, $setViewValue: function (a, b) {
            this.$viewValue = a;
            this.$options.getOption("updateOnDefault") && this.$$debounceViewValueCommit(b)
        }, $$debounceViewValueCommit: function (a) {
            var b = this.$options.getOption("debounce");
            W(b[a]) ? b = b[a] : W(b["default"]) && (b = b["default"]);
            this.$$timeout.cancel(this.$$pendingDebounce);
            var d = this;
            0 < b ? this.$$pendingDebounce = this.$$timeout(function () {
                d.$commitViewValue()
            }, b) : this.$$scope.$root.$$phase ?
                this.$commitViewValue() : this.$$scope.$apply(function () {
                    d.$commitViewValue()
                })
        }, $overrideModelOptions: function (a) {
            this.$options = this.$options.createChild(a)
        }
    };
    be({
        clazz: Pb, set: function (a, b) {
            a[b] = !0
        }, unset: function (a, b) {
            delete a[b]
        }
    });
    var kf = ["$rootScope", function (a) {
        return {
            restrict: "A",
            require: ["ngModel", "^?form", "^?ngModelOptions"],
            controller: Pb,
            priority: 1,
            compile: function (b) {
                b.addClass(Ya).addClass("ng-untouched").addClass(pb);
                return {
                    pre: function (a, b, e, f) {
                        var g = f[0];
                        b = f[1] || g.$$parentForm;
                        if (f = f[2]) g.$options =
                            f.$options;
                        g.$$initGetterSetters();
                        b.$addControl(g);
                        e.$observe("name", function (a) {
                            g.$name !== a && g.$$parentForm.$$renameControl(g, a)
                        });
                        a.$on("$destroy", function () {
                            g.$$parentForm.$removeControl(g)
                        })
                    }, post: function (b, c, e, f) {
                        function g() {
                            k.$setTouched()
                        }

                        var k = f[0];
                        if (k.$options.getOption("updateOn")) c.on(k.$options.getOption("updateOn"), function (a) {
                            k.$$debounceViewValueCommit(a && a.type)
                        });
                        c.on("blur", function () {
                            k.$touched || (a.$$phase ? b.$evalAsync(g) : b.$apply(g))
                        })
                    }
                }
            }
        }
    }], Qb, ih = /(\s+|^)default(\s+|$)/;
    Jc.prototype =
        {
            getOption: function (a) {
                return this.$$options[a]
            }, createChild: function (a) {
            var b = !1;
            a = O({}, a);
            p(a, function (d, c) {
                "$inherit" === d ? "*" === c ? b = !0 : (a[c] = this.$$options[c], "updateOn" === c && (a.updateOnDefault = this.$$options.updateOnDefault)) : "updateOn" === c && (a.updateOnDefault = !1, a[c] = P(d.replace(ih, function () {
                        a.updateOnDefault = !0;
                        return " "
                    })))
            }, this);
            b && (delete a["*"], he(a, this.$$options));
            he(a, Qb.$$options);
            return new Jc(a)
        }
        };
    Qb = new Jc({
        updateOn: "", updateOnDefault: !0, debounce: 0, getterSetter: !1, allowInvalid: !1,
        timezone: null
    });
    var of = function () {
            function a(a, d) {
                this.$$attrs = a;
                this.$$scope = d
            }

            a.$inject = ["$attrs", "$scope"];
            a.prototype = {
                $onInit: function () {
                    var a = this.parentCtrl ? this.parentCtrl.$options : Qb,
                        d = this.$$scope.$eval(this.$$attrs.ngModelOptions);
                    this.$options = a.createChild(d)
                }
            };
            return {
                restrict: "A",
                priority: 10,
                require: {parentCtrl: "?^^ngModelOptions"},
                bindToController: !0,
                controller: a
            }
        }, $e = Ua({terminal: !0, priority: 1E3}), jh = K("ngOptions"),
        kh = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([$\w][$\w]*)|(?:\(\s*([$\w][$\w]*)\s*,\s*([$\w][$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        hf = ["$compile", "$document", "$parse", function (a, b, d) {
            function c(a, b, c) {
                function e(a, b, c, d, f) {
                    this.selectValue = a;
                    this.viewValue = b;
                    this.label = c;
                    this.group = d;
                    this.disabled = f
                }

                function f(a) {
                    var b;
                    if (!p && oa(a)) b = a; else {
                        b = [];
                        for (var c in a)a.hasOwnProperty(c) && "$" !== c.charAt(0) && b.push(c)
                    }
                    return b
                }

                var n = a.match(kh);
                if (!n)throw jh("iexp", a, Aa(b));
                var q = n[5] || n[7], p = n[6];
                a = / as /.test(n[0]) && n[1];
                var r = n[9];
                b = d(n[2] ? n[1] : q);
                var w = a && d(a) || b, t = r && d(r), A = r ? function (a, b) {
                        return t(c, b)
                    } : function (a) {
                        return Sa(a)
                    },
                    v = function (a, b) {
                        return A(a, z(a, b))
                    }, s = d(n[2] || n[1]), y = d(n[3] || ""), D = d(n[4] || ""), H = d(n[8]), x = {},
                    z = p ? function (a, b) {
                        x[p] = b;
                        x[q] = a;
                        return x
                    } : function (a) {
                        x[q] = a;
                        return x
                    };
                return {
                    trackBy: r, getTrackByValue: v, getWatchables: d(H, function (a) {
                        var b = [];
                        a = a || [];
                        for (var d = f(a), e = d.length, g = 0; g < e; g++) {
                            var k = a === d ? g : d[g], l = a[k], k = z(l, k), l = A(l, k);
                            b.push(l);
                            if (n[2] || n[1]) l = s(c, k), b.push(l);
                            n[4] && (k = D(c, k), b.push(k))
                        }
                        return b
                    }), getOptions: function () {
                        for (var a = [], b = {}, d = H(c) || [], g = f(d), k = g.length, n = 0; n < k; n++) {
                            var q = d ===
                                g ? n : g[n], p = z(d[q], q), t = w(c, p), q = A(t, p), u = s(c, p), F = y(c, p),
                                p = D(c, p), t = new e(q, t, u, F, p);
                            a.push(t);
                            b[q] = t
                        }
                        return {
                            items: a, selectValueMap: b, getOptionFromViewValue: function (a) {
                                return b[v(a)]
                            }, getViewValueFromOption: function (a) {
                                return r ? Ia(a.viewValue) : a.viewValue
                            }
                        }
                    }
                }
            }

            var e = x.document.createElement("option"), f = x.document.createElement("optgroup");
            return {
                restrict: "A", terminal: !0, require: ["select", "ngModel"], link: {
                    pre: function (a, b, c, d) {
                        d[0].registerOption = B
                    }, post: function (d, k, h, l) {
                        function m(a) {
                            var b = (a = A.getOptionFromViewValue(a)) &&
                                a.element;
                            b && !b.selected && (b.selected = !0);
                            return a
                        }

                        function n(a, b) {
                            a.element = b;
                            b.disabled = a.disabled;
                            a.label !== b.label && (b.label = a.label, b.textContent = a.label);
                            b.value = a.selectValue
                        }

                        var q = l[0], r = l[1], v = h.multiple;
                        l = 0;
                        for (var w = k.children(), u = w.length; l < u; l++)if ("" === w[l].value) {
                            q.hasEmptyOption = !0;
                            q.emptyOption = w.eq(l);
                            break
                        }
                        k.empty();
                        l = !!q.emptyOption;
                        z(e.cloneNode(!1)).val("?");
                        var A, x = c(h.ngOptions, k, d), s = b[0].createDocumentFragment();
                        q.generateUnknownOptionValue = function (a) {
                            return "?"
                        };
                        v ? (q.writeValue =
                            function (a) {
                                if (A) {
                                    var b = a && a.map(m) || [];
                                    A.items.forEach(function (a) {
                                        a.element.selected && -1 === Array.prototype.indexOf.call(b, a) && (a.element.selected = !1)
                                    })
                                }
                            }, q.readValue = function () {
                            var a = k.val() || [], b = [];
                            p(a, function (a) {
                                (a = A.selectValueMap[a]) && !a.disabled && b.push(A.getViewValueFromOption(a))
                            });
                            return b
                        }, x.trackBy && d.$watchCollection(function () {
                            if (I(r.$viewValue))return r.$viewValue.map(function (a) {
                                return x.getTrackByValue(a)
                            })
                        }, function () {
                            r.$render()
                        })) : (q.writeValue = function (a) {
                            if (A) {
                                var b = k[0].options[k[0].selectedIndex],
                                    c = A.getOptionFromViewValue(a);
                                b && b.removeAttribute("selected");
                                c ? (k[0].value !== c.selectValue && (q.removeUnknownOption(), k[0].value = c.selectValue, c.element.selected = !0), c.element.setAttribute("selected", "selected")) : q.selectUnknownOrEmptyOption(a)
                            }
                        }, q.readValue = function () {
                            var a = A.selectValueMap[k.val()];
                            return a && !a.disabled ? (q.unselectEmptyOption(), q.removeUnknownOption(), A.getViewValueFromOption(a)) : null
                        }, x.trackBy && d.$watch(function () {
                            return x.getTrackByValue(r.$viewValue)
                        }, function () {
                            r.$render()
                        }));
                        l && (a(q.emptyOption)(d), k.prepend(q.emptyOption), 8 === q.emptyOption[0].nodeType ? (q.hasEmptyOption = !1, q.registerOption = function (a, b) {
                            "" === b.val() && (q.hasEmptyOption = !0, q.emptyOption = b, q.emptyOption.removeClass("ng-scope"), r.$render(), b.on("$destroy", function () {
                                var a = q.$isEmptyOptionSelected();
                                q.hasEmptyOption = !1;
                                q.emptyOption = void 0;
                                a && r.$render()
                            }))
                        }) : q.emptyOption.removeClass("ng-scope"));
                        d.$watchCollection(x.getWatchables, function () {
                            var a = A && q.readValue();
                            if (A)for (var b = A.items.length - 1; 0 <= b; b--) {
                                var c =
                                    A.items[b];
                                t(c.group) ? Gb(c.element.parentNode) : Gb(c.element)
                            }
                            A = x.getOptions();
                            var d = {};
                            A.items.forEach(function (a) {
                                var b;
                                if (t(a.group)) {
                                    b = d[a.group];
                                    b || (b = f.cloneNode(!1), s.appendChild(b), b.label = null === a.group ? "null" : a.group, d[a.group] = b);
                                    var c = e.cloneNode(!1);
                                    b.appendChild(c);
                                    n(a, c)
                                } else b = e.cloneNode(!1), s.appendChild(b), n(a, b)
                            });
                            k[0].appendChild(s);
                            r.$render();
                            r.$isEmpty(a) || (b = q.readValue(), (x.trackBy || v ? sa(a, b) : a === b) || (r.$setViewValue(b), r.$render()))
                        })
                    }
                }
            }
        }], af = ["$locale", "$interpolate", "$log",
            function (a, b, d) {
                var c = /{}/g, e = /^when(Minus)?(.+)$/;
                return {
                    link: function (f, g, k) {
                        function h(a) {
                            g.text(a || "")
                        }

                        var l = k.count, m = k.$attr.when && g.attr(k.$attr.when), n = k.offset || 0, q = f.$eval(m) || {},
                            r = {}, t = b.startSymbol(), w = b.endSymbol(), u = t + l + "-" + n + w, A = fa.noop, x;
                        p(k, function (a, b) {
                            var c = e.exec(b);
                            c && (c = (c[1] ? "-" : "") + N(c[2]), q[c] = g.attr(k.$attr[b]))
                        });
                        p(q, function (a, d) {
                            r[d] = b(a.replace(c, u))
                        });
                        f.$watch(l, function (b) {
                            var c = parseFloat(b), e = ba(c);
                            e || c in q || (c = a.pluralCat(c - n));
                            c === x || e && ba(x) || (A(), e = r[c], v(e) ?
                                (null != b && d.debug("ngPluralize: no rule defined for '" + c + "' in " + m), A = B, h()) : A = f.$watch(e, h), x = c)
                        })
                    }
                }
            }], bf = ["$parse", "$animate", "$compile", function (a, b, d) {
            var c = K("ngRepeat"), e = function (a, b, c, d, e, m, n) {
                a[c] = d;
                e && (a[e] = m);
                a.$index = b;
                a.$first = 0 === b;
                a.$last = b === n - 1;
                a.$middle = !(a.$first || a.$last);
                a.$odd = !(a.$even = 0 === (b & 1))
            };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1E3,
                terminal: !0,
                $$tlb: !0,
                compile: function (f, g) {
                    var k = g.ngRepeat, h = d.$$createComment("end ngRepeat", k),
                        l = k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!l)throw c("iexp", k);
                    var m = l[1], n = l[2], q = l[3], r = l[4],
                        l = m.match(/^(?:(\s*[$\w]+)|\(\s*([$\w]+)\s*,\s*([$\w]+)\s*\))$/);
                    if (!l)throw c("iidexp", m);
                    var t = l[3] || l[1], w = l[2];
                    if (q && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(q) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(q)))throw c("badident", q);
                    var u, v, x, s, y = {$id: Sa};
                    r ? u = a(r) : (x = function (a, b) {
                        return Sa(b)
                    }, s = function (a) {
                        return a
                    });
                    return function (a, d, f, g, l) {
                        u && (v = function (b, c, d) {
                            w && (y[w] = b);
                            y[t] = c;
                            y.$index =
                                d;
                            return u(a, y)
                        });
                        var m = R();
                        a.$watchCollection(n, function (f) {
                            var g, n, r = d[0], u, y = R(), F, z, E, B, G, C, I;
                            q && (a[q] = f);
                            if (oa(f)) G = f, n = v || x; else for (I in n = v || s, G = [], f)wa.call(f, I) && "$" !== I.charAt(0) && G.push(I);
                            F = G.length;
                            I = Array(F);
                            for (g = 0; g < F; g++)if (z = f === G ? g : G[g], E = f[z], B = n(z, E, g), m[B]) C = m[B], delete m[B], y[B] = C, I[g] = C; else {
                                if (y[B])throw p(I, function (a) {
                                    a && a.scope && (m[a.id] = a)
                                }), c("dupes", k, B, E);
                                I[g] = {id: B, scope: void 0, clone: void 0};
                                y[B] = !0
                            }
                            for (u in m) {
                                C = m[u];
                                B = vb(C.clone);
                                b.leave(B);
                                if (B[0].parentNode)for (g =
                                                             0, n = B.length; g < n; g++)B[g].$$NG_REMOVED = !0;
                                C.scope.$destroy()
                            }
                            for (g = 0; g < F; g++)if (z = f === G ? g : G[g], E = f[z], C = I[g], C.scope) {
                                u = r;
                                do u = u.nextSibling; while (u && u.$$NG_REMOVED);
                                C.clone[0] !== u && b.move(vb(C.clone), null, r);
                                r = C.clone[C.clone.length - 1];
                                e(C.scope, g, t, E, w, z, F)
                            } else l(function (a, c) {
                                C.scope = c;
                                var d = h.cloneNode(!1);
                                a[a.length++] = d;
                                b.enter(a, null, r);
                                r = d;
                                C.clone = a;
                                y[C.id] = C;
                                e(C.scope, g, t, E, w, z, F)
                            });
                            m = y
                        })
                    }
                }
            }
        }], cf = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (b, d, c) {
                    b.$watch(c.ngShow,
                        function (b) {
                            a[b ? "removeClass" : "addClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                        })
                }
            }
        }], We = ["$animate", function (a) {
            return {
                restrict: "A", multiElement: !0, link: function (b, d, c) {
                    b.$watch(c.ngHide, function (b) {
                        a[b ? "addClass" : "removeClass"](d, "ng-hide", {tempClasses: "ng-hide-animate"})
                    })
                }
            }
        }], df = Ua(function (a, b, d) {
            a.$watch(d.ngStyle, function (a, d) {
                d && a !== d && p(d, function (a, c) {
                    b.css(c, "")
                });
                a && b.css(a)
            }, !0)
        }), ef = ["$animate", "$compile", function (a, b) {
            return {
                require: "ngSwitch", controller: ["$scope", function () {
                    this.cases =
                        {}
                }], link: function (d, c, e, f) {
                    var g = [], k = [], h = [], l = [], m = function (a, b) {
                        return function (c) {
                            !1 !== c && a.splice(b, 1)
                        }
                    };
                    d.$watch(e.ngSwitch || e.on, function (c) {
                        for (var d, e; h.length;)a.cancel(h.pop());
                        d = 0;
                        for (e = l.length; d < e; ++d) {
                            var r = vb(k[d].clone);
                            l[d].$destroy();
                            (h[d] = a.leave(r)).done(m(h, d))
                        }
                        k.length = 0;
                        l.length = 0;
                        (g = f.cases["!" + c] || f.cases["?"]) && p(g, function (c) {
                            c.transclude(function (d, e) {
                                l.push(e);
                                var f = c.element;
                                d[d.length++] = b.$$createComment("end ngSwitchWhen");
                                k.push({clone: d});
                                a.enter(d, f.parent(),
                                    f)
                            })
                        })
                    })
                }
            }
        }], ff = Ua({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, d, c, e) {
                a = d.ngSwitchWhen.split(d.ngSwitchWhenSeparator).sort().filter(function (a, b, c) {
                    return c[b - 1] !== a
                });
                p(a, function (a) {
                    c.cases["!" + a] = c.cases["!" + a] || [];
                    c.cases["!" + a].push({transclude: e, element: b})
                })
            }
        }), gf = Ua({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (a, b, d, c, e) {
                c.cases["?"] = c.cases["?"] || [];
                c.cases["?"].push({transclude: e, element: b})
            }
        }), lh = K("ngTransclude"),
        jf = ["$compile", function (a) {
            return {
                restrict: "EAC", terminal: !0, compile: function (b) {
                    var d = a(b.contents());
                    b.empty();
                    return function (a, b, f, g, k) {
                        function h() {
                            d(a, function (a) {
                                b.append(a)
                            })
                        }

                        if (!k)throw lh("orphan", Aa(b));
                        f.ngTransclude === f.$attr.ngTransclude && (f.ngTransclude = "");
                        f = f.ngTransclude || f.ngTranscludeSlot;
                        k(function (a, c) {
                            var d;
                            if (d = a.length)a:{
                                d = 0;
                                for (var f = a.length; d < f; d++) {
                                    var g = a[d];
                                    if (g.nodeType !== Ma || g.nodeValue.trim()) {
                                        d = !0;
                                        break a
                                    }
                                }
                                d = void 0
                            }
                            d ? b.append(a) : (h(), c.$destroy())
                        }, null, f);
                        f && !k.isSlotFilled(f) &&
                        h()
                    }
                }
            }
        }], Ke = ["$templateCache", function (a) {
            return {
                restrict: "E", terminal: !0, compile: function (b, d) {
                    "text/ng-template" === d.type && a.put(d.id, b[0].text)
                }
            }
        }], mh = {$setViewValue: B, $render: B}, nh = ["$element", "$scope", function (a, b) {
            function d() {
                g || (g = !0, b.$$postDigest(function () {
                    g = !1;
                    e.ngModelCtrl.$render()
                }))
            }

            function c(a) {
                k || (k = !0, b.$$postDigest(function () {
                    b.$$destroyed || (k = !1, e.ngModelCtrl.$setViewValue(e.readValue()), a && e.ngModelCtrl.$render())
                }))
            }

            var e = this, f = new Ib;
            e.selectValueMap = {};
            e.ngModelCtrl = mh;
            e.multiple = !1;
            e.unknownOption = z(x.document.createElement("option"));
            e.hasEmptyOption = !1;
            e.emptyOption = void 0;
            e.renderUnknownOption = function (b) {
                b = e.generateUnknownOptionValue(b);
                e.unknownOption.val(b);
                a.prepend(e.unknownOption);
                Ha(e.unknownOption, !0);
                a.val(b)
            };
            e.updateUnknownOption = function (b) {
                b = e.generateUnknownOptionValue(b);
                e.unknownOption.val(b);
                Ha(e.unknownOption, !0);
                a.val(b)
            };
            e.generateUnknownOptionValue = function (a) {
                return "? " + Sa(a) + " ?"
            };
            e.removeUnknownOption = function () {
                e.unknownOption.parent() &&
                e.unknownOption.remove()
            };
            e.selectEmptyOption = function () {
                e.emptyOption && (a.val(""), Ha(e.emptyOption, !0))
            };
            e.unselectEmptyOption = function () {
                e.hasEmptyOption && Ha(e.emptyOption, !1)
            };
            b.$on("$destroy", function () {
                e.renderUnknownOption = B
            });
            e.readValue = function () {
                var b = a.val(), b = b in e.selectValueMap ? e.selectValueMap[b] : b;
                return e.hasOption(b) ? b : null
            };
            e.writeValue = function (b) {
                var c = a[0].options[a[0].selectedIndex];
                c && Ha(z(c), !1);
                e.hasOption(b) ? (e.removeUnknownOption(), c = Sa(b), a.val(c in e.selectValueMap ?
                    c : b), Ha(z(a[0].options[a[0].selectedIndex]), !0)) : e.selectUnknownOrEmptyOption(b)
            };
            e.addOption = function (a, b) {
                if (8 !== b[0].nodeType) {
                    Oa(a, '"option value"');
                    "" === a && (e.hasEmptyOption = !0, e.emptyOption = b);
                    var c = f.get(a) || 0;
                    f.set(a, c + 1);
                    d()
                }
            };
            e.removeOption = function (a) {
                var b = f.get(a);
                b && (1 === b ? (f.delete(a), "" === a && (e.hasEmptyOption = !1, e.emptyOption = void 0)) : f.set(a, b - 1))
            };
            e.hasOption = function (a) {
                return !!f.get(a)
            };
            e.$hasEmptyOption = function () {
                return e.hasEmptyOption
            };
            e.$isUnknownOptionSelected = function () {
                return a[0].options[0] ===
                    e.unknownOption[0]
            };
            e.$isEmptyOptionSelected = function () {
                return e.hasEmptyOption && a[0].options[a[0].selectedIndex] === e.emptyOption[0]
            };
            e.selectUnknownOrEmptyOption = function (a) {
                null == a && e.emptyOption ? (e.removeUnknownOption(), e.selectEmptyOption()) : e.unknownOption.parent().length ? e.updateUnknownOption(a) : e.renderUnknownOption(a)
            };
            var g = !1, k = !1;
            e.registerOption = function (a, b, f, g, k) {
                if (f.$attr.ngValue) {
                    var p, r = NaN;
                    f.$observe("value", function (a) {
                        var d, f = b.prop("selected");
                        t(r) && (e.removeOption(p), delete e.selectValueMap[r],
                            d = !0);
                        r = Sa(a);
                        p = a;
                        e.selectValueMap[r] = a;
                        e.addOption(a, b);
                        b.attr("value", r);
                        d && f && c()
                    })
                } else g ? f.$observe("value", function (a) {
                    e.readValue();
                    var d, f = b.prop("selected");
                    t(p) && (e.removeOption(p), d = !0);
                    p = a;
                    e.addOption(a, b);
                    d && f && c()
                }) : k ? a.$watch(k, function (a, d) {
                    f.$set("value", a);
                    var g = b.prop("selected");
                    d !== a && e.removeOption(d);
                    e.addOption(a, b);
                    d && g && c()
                }) : e.addOption(f.value, b);
                f.$observe("disabled", function (a) {
                    if ("true" === a || a && b.prop("selected")) e.multiple ? c(!0) : (e.ngModelCtrl.$setViewValue(null), e.ngModelCtrl.$render())
                });
                b.on("$destroy", function () {
                    var a = e.readValue(), b = f.value;
                    e.removeOption(b);
                    d();
                    (e.multiple && a && -1 !== a.indexOf(b) || a === b) && c(!0)
                })
            }
        }], Le = function () {
            return {
                restrict: "E", require: ["select", "?ngModel"], controller: nh, priority: 1, link: {
                    pre: function (a, b, d, c) {
                        var e = c[0], f = c[1];
                        if (f) {
                            if (e.ngModelCtrl = f, b.on("change", function () {
                                    e.removeUnknownOption();
                                    a.$apply(function () {
                                        f.$setViewValue(e.readValue())
                                    })
                                }), d.multiple) {
                                e.multiple = !0;
                                e.readValue = function () {
                                    var a = [];
                                    p(b.find("option"), function (b) {
                                        b.selected && !b.disabled &&
                                        (b = b.value, a.push(b in e.selectValueMap ? e.selectValueMap[b] : b))
                                    });
                                    return a
                                };
                                e.writeValue = function (a) {
                                    p(b.find("option"), function (b) {
                                        var c = !!a && (-1 !== Array.prototype.indexOf.call(a, b.value) || -1 !== Array.prototype.indexOf.call(a, e.selectValueMap[b.value]));
                                        c !== b.selected && Ha(z(b), c)
                                    })
                                };
                                var g, k = NaN;
                                a.$watch(function () {
                                    k !== f.$viewValue || sa(g, f.$viewValue) || (g = ra(f.$viewValue), f.$render());
                                    k = f.$viewValue
                                });
                                f.$isEmpty = function (a) {
                                    return !a || 0 === a.length
                                }
                            }
                        } else e.registerOption = B
                    }, post: function (a, b, d, c) {
                        var e =
                            c[1];
                        if (e) {
                            var f = c[0];
                            e.$render = function () {
                                f.writeValue(e.$viewValue)
                            }
                        }
                    }
                }
            }
        }, Me = ["$interpolate", function (a) {
            return {
                restrict: "E", priority: 100, compile: function (b, d) {
                    var c, e;
                    t(d.ngValue) || (t(d.value) ? c = a(d.value, !0) : (e = a(b.text(), !0)) || d.$set("value", b.text()));
                    return function (a, b, d) {
                        var h = b.parent();
                        (h = h.data("$selectController") || h.parent().data("$selectController")) && h.registerOption(a, b, d, c, e)
                    }
                }
            }
        }], ad = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    c && (d.required = !0, c.$validators.required =
                        function (a, b) {
                            return !d.required || !c.$isEmpty(b)
                        }, d.$observe("required", function () {
                        c.$validate()
                    }))
                }
            }
        }, $c = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    if (c) {
                        var e, f = d.ngPattern || d.pattern;
                        d.$observe("pattern", function (a) {
                            C(a) && 0 < a.length && (a = new RegExp("^" + a + "$"));
                            if (a && !a.test)throw K("ngPattern")("noregexp", f, a, Aa(b));
                            e = a || void 0;
                            c.$validate()
                        });
                        c.$validators.pattern = function (a, b) {
                            return c.$isEmpty(b) || v(e) || e.test(b)
                        }
                    }
                }
            }
        }, cd = function () {
            return {
                restrict: "A", require: "?ngModel",
                link: function (a, b, d, c) {
                    if (c) {
                        var e = -1;
                        d.$observe("maxlength", function (a) {
                            a = Q(a);
                            e = ba(a) ? -1 : a;
                            c.$validate()
                        });
                        c.$validators.maxlength = function (a, b) {
                            return 0 > e || c.$isEmpty(b) || b.length <= e
                        }
                    }
                }
            }
        }, bd = function () {
            return {
                restrict: "A", require: "?ngModel", link: function (a, b, d, c) {
                    if (c) {
                        var e = 0;
                        d.$observe("minlength", function (a) {
                            e = Q(a) || 0;
                            c.$validate()
                        });
                        c.$validators.minlength = function (a, b) {
                            return c.$isEmpty(b) || b.length >= e
                        }
                    }
                }
            }
        };
    x.angular.bootstrap ? x.console && console.log("WARNING: Tried to load angular more than once.") :
        (Ce(), Fe(fa), fa.module("ngLocale", [], ["$provide", function (a) {
            function b(a) {
                a += "";
                var b = a.indexOf(".");
                return -1 == b ? 0 : a.length - b - 1
            }

            a.value("$locale", {
                DATETIME_FORMATS: {
                    AMPMS: ["AM", "PM"],
                    DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                    ERANAMES: ["Before Christ", "Anno Domini"],
                    ERAS: ["BC", "AD"],
                    FIRSTDAYOFWEEK: 6,
                    MONTH: "January February March April May June July August September October November December".split(" "),
                    SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                    SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                    STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                    WEEKENDRANGE: [5, 6],
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    medium: "MMM d, y h:mm:ss a",
                    mediumDate: "MMM d, y",
                    mediumTime: "h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    shortDate: "M/d/yy",
                    shortTime: "h:mm a"
                }, NUMBER_FORMATS: {
                    CURRENCY_SYM: "$",
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        gSize: 3,
                        lgSize: 3,
                        maxFrac: 3,
                        minFrac: 0,
                        minInt: 1,
                        negPre: "-",
                        negSuf: "",
                        posPre: "",
                        posSuf: ""
                    }, {
                        gSize: 3, lgSize: 3, maxFrac: 2,
                        minFrac: 2, minInt: 1, negPre: "-\u00a4", negSuf: "", posPre: "\u00a4", posSuf: ""
                    }]
                }, id: "en-us", localeID: "en_US", pluralCat: function (a, c) {
                    var e = a | 0, f = c;
                    void 0 === f && (f = Math.min(b(a), 3));
                    Math.pow(10, f);
                    return 1 == e && 0 == f ? "one" : "other"
                }
            })
        }]), z(function () {
            xe(x.document, Uc)
        }))
})(window);
!window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map
