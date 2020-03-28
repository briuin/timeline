System.register([], function(e) {
  return {
    execute: function() {
      e(
        (function(e) {
          var t = {};
          function r(n) {
            if (t[n]) return t[n].exports;
            var o = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function(e, t, n) {
              r.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (r.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.t = function(e, t) {
              if ((1 & t && (e = r(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var n = Object.create(null);
              if (
                (r.r(n),
                Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  r.d(
                    n,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return n;
            }),
            (r.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return r.d(t, "a", t), t;
            }),
            (r.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (r.p = ""),
            r((r.s = 21))
          );
        })({
          13: function(e, t, r) {
            "use strict";
            function n(e) {
              var t,
                r = e.Symbol;
              return (
                "function" == typeof r
                  ? r.observable
                    ? (t = r.observable)
                    : ((t = r("observable")), (r.observable = t))
                  : (t = "@@observable"),
                t
              );
            }
            r.d(t, "a", function() {
              return n;
            });
          },
          19: function(e, t) {
            e.exports = function(e) {
              if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []),
                  Object.defineProperty(t, "loaded", {
                    enumerable: !0,
                    get: function() {
                      return t.l;
                    }
                  }),
                  Object.defineProperty(t, "id", {
                    enumerable: !0,
                    get: function() {
                      return t.i;
                    }
                  }),
                  Object.defineProperty(t, "exports", { enumerable: !0 }),
                  (t.webpackPolyfill = 1);
              }
              return t;
            };
          },
          2: function(e, t) {
            var r;
            r = (function() {
              return this;
            })();
            try {
              r = r || new Function("return this")();
            } catch (e) {
              "object" == typeof window && (r = window);
            }
            e.exports = r;
          },
          21: function(e, t, r) {
            "use strict";
            r.r(t),
              r.d(t, "storeInstance", function() {
                return l;
              });
            var n = r(6),
              o = function() {
                return Math.random()
                  .toString(36)
                  .substring(7)
                  .split("")
                  .join(".");
              },
              i = {
                INIT: "@@redux/INIT" + o(),
                REPLACE: "@@redux/REPLACE" + o(),
                PROBE_UNKNOWN_ACTION: function() {
                  return "@@redux/PROBE_UNKNOWN_ACTION" + o();
                }
              };
            function u(e) {
              if ("object" != typeof e || null === e) return !1;
              for (var t = e; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
              return Object.getPrototypeOf(e) === t;
            }
            function c(e, t) {
              var r = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                  (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  r.push.apply(r, n);
              }
              return r;
            }
            function f(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? c(Object(r), !0).forEach(function(t) {
                      a(e, t, r[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(r)
                    )
                  : c(Object(r)).forEach(function(t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(r, t)
                      );
                    });
              }
              return e;
            }
            function a(e, t, r) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (e[t] = r),
                e
              );
            }
            var s = {
              year: new Date().getFullYear(),
              month: new Date().getMonth() + 1
            };
            var l = (function e(t, r, o) {
              var c;
              if (
                ("function" == typeof r && "function" == typeof o) ||
                ("function" == typeof o && "function" == typeof arguments[3])
              )
                throw new Error(
                  "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
                );
              if (
                ("function" == typeof r &&
                  void 0 === o &&
                  ((o = r), (r = void 0)),
                void 0 !== o)
              ) {
                if ("function" != typeof o)
                  throw new Error("Expected the enhancer to be a function.");
                return o(e)(t, r);
              }
              if ("function" != typeof t)
                throw new Error("Expected the reducer to be a function.");
              var f = t,
                a = r,
                s = [],
                l = s,
                p = !1;
              function d() {
                l === s && (l = s.slice());
              }
              function b() {
                if (p)
                  throw new Error(
                    "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
                  );
                return a;
              }
              function y(e) {
                if ("function" != typeof e)
                  throw new Error("Expected the listener to be a function.");
                if (p)
                  throw new Error(
                    "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                  );
                var t = !0;
                return (
                  d(),
                  l.push(e),
                  function() {
                    if (t) {
                      if (p)
                        throw new Error(
                          "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                        );
                      (t = !1), d();
                      var r = l.indexOf(e);
                      l.splice(r, 1), (s = null);
                    }
                  }
                );
              }
              function h(e) {
                if (!u(e))
                  throw new Error(
                    "Actions must be plain objects. Use custom middleware for async actions."
                  );
                if (void 0 === e.type)
                  throw new Error(
                    'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                  );
                if (p) throw new Error("Reducers may not dispatch actions.");
                try {
                  (p = !0), (a = f(a, e));
                } finally {
                  p = !1;
                }
                for (var t = (s = l), r = 0; r < t.length; r++) {
                  (0, t[r])();
                }
                return e;
              }
              function w(e) {
                if ("function" != typeof e)
                  throw new Error("Expected the nextReducer to be a function.");
                (f = e), h({ type: i.REPLACE });
              }
              function v() {
                var e,
                  t = y;
                return (
                  ((e = {
                    subscribe: function(e) {
                      if ("object" != typeof e || null === e)
                        throw new TypeError(
                          "Expected the observer to be an object."
                        );
                      function r() {
                        e.next && e.next(b());
                      }
                      return r(), { unsubscribe: t(r) };
                    }
                  })[n.a] = function() {
                    return this;
                  }),
                  e
                );
              }
              return (
                h({ type: i.INIT }),
                ((c = {
                  dispatch: h,
                  subscribe: y,
                  getState: b,
                  replaceReducer: w
                })[n.a] = v),
                c
              );
            })(function() {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : s,
                t = arguments.length > 1 ? arguments[1] : void 0;
              switch (t.type) {
                case "CHANGE_TIME":
                  var r = t.payload;
                  return f({}, e, { year: r.year, month: r.month });
                default:
                  return e;
              }
            });
          },
          6: function(e, t, r) {
            "use strict";
            (function(e, n) {
              var o,
                i = r(13);
              o =
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : void 0 !== e
                  ? e
                  : n;
              var u = Object(i.a)(o);
              t.a = u;
            }.call(this, r(2), r(19)(e)));
          }
        })
      );
    }
  };
});
//# sourceMappingURL=store.js.map
