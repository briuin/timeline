System.register([], function(e) {
  return {
    execute: function() {
      e(
        (function(e) {
          var t = {};
          function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
          }
          return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
              n.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function(e) {
              "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function(e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var r = Object.create(null);
              if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                  enumerable: !0,
                  value: e
                }),
                2 & t && "string" != typeof e)
              )
                for (var o in e)
                  n.d(
                    r,
                    o,
                    function(t) {
                      return e[t];
                    }.bind(null, o)
                  );
              return r;
            }),
            (n.n = function(e) {
              var t =
                e && e.__esModule
                  ? function() {
                      return e.default;
                    }
                  : function() {
                      return e;
                    };
              return n.d(t, "a", t), t;
            }),
            (n.o = function(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 21))
          );
        })({
          12: function(e, t, n) {
            "use strict";
            function r(e) {
              var t,
                n = e.Symbol;
              return (
                "function" == typeof n
                  ? n.observable
                    ? (t = n.observable)
                    : ((t = n("observable")), (n.observable = t))
                  : (t = "@@observable"),
                t
              );
            }
            n.d(t, "a", function() {
              return r;
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
            var n;
            n = (function() {
              return this;
            })();
            try {
              n = n || new Function("return this")();
            } catch (e) {
              "object" == typeof window && (n = window);
            }
            e.exports = n;
          },
          21: function(e, t, n) {
            "use strict";
            n.r(t),
              n.d(t, "storeInstance", function() {
                return p;
              });
            var r = n(6),
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
              var n = t && t.type;
              return (
                "Given " +
                ((n && 'action "' + String(n) + '"') || "an action") +
                ', reducer "' +
                e +
                '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
              );
            }
            var a = function e(t, n) {
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.year = t),
                (this.month = n);
            };
            function f(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                  (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                  })),
                  n.push.apply(n, r);
              }
              return n;
            }
            function s(e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? f(Object(n), !0).forEach(function(t) {
                      l(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : f(Object(n)).forEach(function(t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            }
            function l(e, t, n) {
              return (
                t in e
                  ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                    })
                  : (e[t] = n),
                e
              );
            }
            var d = {
              selectedTimeline: new a(
                new Date().getFullYear(),
                new Date().getMonth() + 1
              ),
              timelines: [
                new a(new Date().getFullYear(), new Date().getMonth() + 1)
              ]
            };
            var p = (function e(t, n, o) {
              var c;
              if (
                ("function" == typeof n && "function" == typeof o) ||
                ("function" == typeof o && "function" == typeof arguments[3])
              )
                throw new Error(
                  "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
                );
              if (
                ("function" == typeof n &&
                  void 0 === o &&
                  ((o = n), (n = void 0)),
                void 0 !== o)
              ) {
                if ("function" != typeof o)
                  throw new Error("Expected the enhancer to be a function.");
                return o(e)(t, n);
              }
              if ("function" != typeof t)
                throw new Error("Expected the reducer to be a function.");
              var a = t,
                f = n,
                s = [],
                l = s,
                d = !1;
              function p() {
                l === s && (l = s.slice());
              }
              function y() {
                if (d)
                  throw new Error(
                    "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
                  );
                return f;
              }
              function h(e) {
                if ("function" != typeof e)
                  throw new Error("Expected the listener to be a function.");
                if (d)
                  throw new Error(
                    "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                  );
                var t = !0;
                return (
                  p(),
                  l.push(e),
                  function() {
                    if (t) {
                      if (d)
                        throw new Error(
                          "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details."
                        );
                      (t = !1), p();
                      var n = l.indexOf(e);
                      l.splice(n, 1), (s = null);
                    }
                  }
                );
              }
              function b(e) {
                if (!u(e))
                  throw new Error(
                    "Actions must be plain objects. Use custom middleware for async actions."
                  );
                if (void 0 === e.type)
                  throw new Error(
                    'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                  );
                if (d) throw new Error("Reducers may not dispatch actions.");
                try {
                  (d = !0), (f = a(f, e));
                } finally {
                  d = !1;
                }
                for (var t = (s = l), n = 0; n < t.length; n++) {
                  (0, t[n])();
                }
                return e;
              }
              function w(e) {
                if ("function" != typeof e)
                  throw new Error("Expected the nextReducer to be a function.");
                (a = e), b({ type: i.REPLACE });
              }
              function v() {
                var e,
                  t = h;
                return (
                  ((e = {
                    subscribe: function(e) {
                      if ("object" != typeof e || null === e)
                        throw new TypeError(
                          "Expected the observer to be an object."
                        );
                      function n() {
                        e.next && e.next(y());
                      }
                      return n(), { unsubscribe: t(n) };
                    }
                  })[r.a] = function() {
                    return this;
                  }),
                  e
                );
              }
              return (
                b({ type: i.INIT }),
                ((c = {
                  dispatch: b,
                  subscribe: h,
                  getState: y,
                  replaceReducer: w
                })[r.a] = v),
                c
              );
            })(
              (function(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                  var o = t[r];
                  0, "function" == typeof e[o] && (n[o] = e[o]);
                }
                var u,
                  a = Object.keys(n);
                try {
                  !(function(e) {
                    Object.keys(e).forEach(function(t) {
                      var n = e[t];
                      if (void 0 === n(void 0, { type: i.INIT }))
                        throw new Error(
                          'Reducer "' +
                            t +
                            "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
                        );
                      if (
                        void 0 === n(void 0, { type: i.PROBE_UNKNOWN_ACTION() })
                      )
                        throw new Error(
                          'Reducer "' +
                            t +
                            "\" returned undefined when probed with a random type. Don't try to handle " +
                            i.INIT +
                            ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                        );
                    });
                  })(n);
                } catch (e) {
                  u = e;
                }
                return function(e, t) {
                  if ((void 0 === e && (e = {}), u)) throw u;
                  for (var r = !1, o = {}, i = 0; i < a.length; i++) {
                    var f = a[i],
                      s = n[f],
                      l = e[f],
                      d = s(l, t);
                    if (void 0 === d) {
                      var p = c(f, t);
                      throw new Error(p);
                    }
                    (o[f] = d), (r = r || d !== l);
                  }
                  return (r = r || a.length !== Object.keys(e).length) ? o : e;
                };
              })({
                namespace: function() {
                  return "timeline";
                },
                reducer: function() {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : d,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                  switch (t.type) {
                    case "CHANGE_TIME":
                      var n = t.payload;
                      return s({}, e, { year: n.year, month: n.month });
                    default:
                      return e;
                  }
                }
              })
            );
          },
          6: function(e, t, n) {
            "use strict";
            (function(e, r) {
              var o,
                i = n(12);
              o =
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : void 0 !== e
                  ? e
                  : r;
              var u = Object(i.a)(o);
              t.a = u;
            }.call(this, n(2), n(19)(e)));
          }
        })
      );
    }
  };
});
//# sourceMappingURL=store.js.map
