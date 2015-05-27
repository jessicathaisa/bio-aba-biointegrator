// Including ngCookies module
(function (m, f, l) {
    'use strict';
    f.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser", function (d, c) {
            var b = {}, g = {}, h, i = !1, j = f.copy, k = f.isUndefined;
            c.addPollFn(function () {
                var a = c.cookies();
                h !== a && (h = a, j(a, g), j(a, b), i && d.$apply());
            })();
            i = !0;
            d.$watch(function () {
                var a, e, d;
                for (a in g)
                    k(b[a]) && c.cookies(a, l);
                for (a in b)
                    e = b[a], f.isString(e) ? e !== g[a] && (c.cookies(a, e), d = !0) : f.isDefined(g[a]) ? b[a] = g[a] : delete b[a];
                if (d)
                    for (a in e = c.cookies(), b)
                        b[a] !== e[a] && (k(e[a]) ? delete b[a] : b[a] = e[a]);
            });
            return b
        }]).factory("$cookieStore", ["$cookies", function (d) {
            return{
                get: function (c) {
                    return f.fromJson(d[c]);
                }, put: function (c, b) {
                    d[c] = f.toJson(b);
                }, remove: function (c) {
                    delete d[c];
                }
            }
        }])
})(window, window.angular);

// Including ngTranslate
angular.module("ngTranslate", ["ng", "ngCookies"]).run(["$translate", "$COOKIE_KEY", "$cookieStore", function (n, t, r) {
        n.rememberLanguage() && (r.get(t) ? n.uses(r.get(t)) : r.put(t, n.uses()));
    }]);
angular.module("ngTranslate").directive("translate", ["$filter", "$interpolate", function (n, t) {
        var r = n("translate");
        return{
            restrict: "A", scope: !0, link: function (n, a, e) {
                e.$observe("translate", function (r) {
                    n.translationId = angular.equals(r, "") ? t(a.text())(n.$parent) : r;
                }), e.$observe("values", function (t) {
                    n.interpolateParams = t;
                }), n.$watch("translationId + interpolateParams", function () {
                    a.html(r(n.translationId, n.interpolateParams));
                });
            }
        }
    }]);
angular.module("ngTranslate").filter("translate", ["$parse", "$translate", function (n, t) {
        return function (r, a) {
            return angular.isObject(a) || (a = n(a)()), t(r, a);
        };
    }]);
angular.module("ngTranslate").constant("$COOKIE_KEY", "NG_TRANSLATE_LANG_KEY");
angular.module("ngTranslate").provider("$translate", function () {
    var n, t = {}, r = !1;
    this.translations = function (n, r) {
        if (!n && !r)
            return t;
        if (n && !r) {
            if (angular.isString(n))
                return t[n];
            t = n;
        } else
            t[n] = r;
    }, this.uses = function (r) {
        if (!r)
            return n;
        if (!t[r])
            throw Error("$translateProvider couldn't find translationTable for langKey: '" + r + "'");
        n = r
    }, this.rememberLanguage = function (n) {
        return angular.isUndefined(n) ? r : (r = n, void 0);
    }, this.$get = ["$interpolate", "$log", "$cookieStore", "$COOKIE_KEY", function (a, e, i, o) {
            return $translate = function (r, i) {
                var o = n ? t[n][r] : t[r];
                return o ? a(o)(i) : (e.warn("Translation for " + r + " doesn't exist"), r);
            }, $translate.uses = function (t) {
                return t ? (n = t, r && i.put(o, n), void 0) : n;
            }, $translate.rememberLanguage = function () {
                return r;
            }, $translate;
        }];
});