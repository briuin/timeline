System.register(["react", "react-dom"], function(e) {
  var t, n;
  return {
    setters: [
      function(e) {
        t = e;
      },
      function(e) {
        n = e;
      }
    ],
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
            n((n.s = 19))
          );
        })([
          function(e, n) {
            e.exports = t;
          },
          function(e, t, n) {
            "use strict";
            (function(e, r) {
              var o,
                i = n(4);
              o =
                "undefined" != typeof self
                  ? self
                  : "undefined" != typeof window
                  ? window
                  : void 0 !== e
                  ? e
                  : r;
              var a = Object(i.a)(o);
              t.a = a;
            }.call(this, n(6), n(10)(e)));
          },
          function(e, t, n) {
            e.exports = n(15)();
          },
          function(e, t, n) {
            "use strict";
            n.d(t, "a", function() {
              return l;
            }),
              n.d(t, "b", function() {
                return s;
              }),
              n.d(t, "c", function() {
                return c;
              });
            var r = n(1),
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
            function a(e) {
              if ("object" != typeof e || null === e) return !1;
              for (var t = e; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
              return Object.getPrototypeOf(e) === t;
            }
            function c(e, t, n) {
              var o;
              if (
                ("function" == typeof t && "function" == typeof n) ||
                ("function" == typeof n && "function" == typeof arguments[3])
              )
                throw new Error(
                  "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function."
                );
              if (
                ("function" == typeof t &&
                  void 0 === n &&
                  ((n = t), (t = void 0)),
                void 0 !== n)
              ) {
                if ("function" != typeof n)
                  throw new Error("Expected the enhancer to be a function.");
                return n(c)(e, t);
              }
              if ("function" != typeof e)
                throw new Error("Expected the reducer to be a function.");
              var u = e,
                s = t,
                f = [],
                l = f,
                p = !1;
              function d() {
                l === f && (l = f.slice());
              }
              function h() {
                if (p)
                  throw new Error(
                    "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store."
                  );
                return s;
              }
              function m(e) {
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
                      var n = l.indexOf(e);
                      l.splice(n, 1), (f = null);
                    }
                  }
                );
              }
              function v(e) {
                if (!a(e))
                  throw new Error(
                    "Actions must be plain objects. Use custom middleware for async actions."
                  );
                if (void 0 === e.type)
                  throw new Error(
                    'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                  );
                if (p) throw new Error("Reducers may not dispatch actions.");
                try {
                  (p = !0), (s = u(s, e));
                } finally {
                  p = !1;
                }
                for (var t = (f = l), n = 0; n < t.length; n++) {
                  (0, t[n])();
                }
                return e;
              }
              function y(e) {
                if ("function" != typeof e)
                  throw new Error("Expected the nextReducer to be a function.");
                (u = e), v({ type: i.REPLACE });
              }
              function b() {
                var e,
                  t = m;
                return (
                  ((e = {
                    subscribe: function(e) {
                      if ("object" != typeof e || null === e)
                        throw new TypeError(
                          "Expected the observer to be an object."
                        );
                      function n() {
                        e.next && e.next(h());
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
                v({ type: i.INIT }),
                ((o = {
                  dispatch: v,
                  subscribe: m,
                  getState: h,
                  replaceReducer: y
                })[r.a] = b),
                o
              );
            }
            function u(e, t) {
              var n = t && t.type;
              return (
                "Given " +
                ((n && 'action "' + String(n) + '"') || "an action") +
                ', reducer "' +
                e +
                '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
              );
            }
            function s(e) {
              for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var o = t[r];
                0, "function" == typeof e[o] && (n[o] = e[o]);
              }
              var a,
                c = Object.keys(n);
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
                a = e;
              }
              return function(e, t) {
                if ((void 0 === e && (e = {}), a)) throw a;
                for (var r = !1, o = {}, i = 0; i < c.length; i++) {
                  var s = c[i],
                    f = n[s],
                    l = e[s],
                    p = f(l, t);
                  if (void 0 === p) {
                    var d = u(s, t);
                    throw new Error(d);
                  }
                  (o[s] = p), (r = r || p !== l);
                }
                return (r = r || c.length !== Object.keys(e).length) ? o : e;
              };
            }
            function f(e, t) {
              return function() {
                return t(e.apply(this, arguments));
              };
            }
            function l(e, t) {
              if ("function" == typeof e) return f(e, t);
              if ("object" != typeof e || null === e)
                throw new Error(
                  "bindActionCreators expected an object or a function, instead received " +
                    (null === e ? "null" : typeof e) +
                    '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
                );
              var n = {};
              for (var r in e) {
                var o = e[r];
                "function" == typeof o && (n[r] = f(o, t));
              }
              return n;
            }
          },
          function(e, t, n) {
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
          function(e, t, n) {
            "use strict";
            var r = n(8),
              o = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
              },
              i = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
              },
              a = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
              },
              c = {};
            function u(e) {
              return r.isMemo(e) ? a : c[e.$$typeof] || o;
            }
            (c[r.ForwardRef] = {
              $$typeof: !0,
              render: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0
            }),
              (c[r.Memo] = a);
            var s = Object.defineProperty,
              f = Object.getOwnPropertyNames,
              l = Object.getOwnPropertySymbols,
              p = Object.getOwnPropertyDescriptor,
              d = Object.getPrototypeOf,
              h = Object.prototype;
            e.exports = function e(t, n, r) {
              if ("string" != typeof n) {
                if (h) {
                  var o = d(n);
                  o && o !== h && e(t, o, r);
                }
                var a = f(n);
                l && (a = a.concat(l(n)));
                for (var c = u(t), m = u(n), v = 0; v < a.length; ++v) {
                  var y = a[v];
                  if (!(i[y] || (r && r[y]) || (m && m[y]) || (c && c[y]))) {
                    var b = p(n, y);
                    try {
                      s(t, y, b);
                    } catch (e) {}
                  }
                }
              }
              return t;
            };
          },
          function(e, t) {
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
          function(e, t) {
            e.exports = n;
          },
          function(e, t, n) {
            "use strict";
            e.exports = n(17);
          },
          ,
          function(e, t) {
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
          function(e, t) {
            e.exports = function(e, t) {
              (e.prototype = Object.create(t.prototype)),
                (e.prototype.constructor = e),
                (e.__proto__ = t);
            };
          },
          function(e, t, n) {
            var r = n(18);
            (e.exports = d),
              (e.exports.parse = i),
              (e.exports.compile = function(e, t) {
                return c(i(e, t), t);
              }),
              (e.exports.tokensToFunction = c),
              (e.exports.tokensToRegExp = p);
            var o = new RegExp(
              [
                "(\\\\.)",
                "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
              ].join("|"),
              "g"
            );
            function i(e, t) {
              for (
                var n,
                  r = [],
                  i = 0,
                  a = 0,
                  c = "",
                  f = (t && t.delimiter) || "/";
                null != (n = o.exec(e));

              ) {
                var l = n[0],
                  p = n[1],
                  d = n.index;
                if (((c += e.slice(a, d)), (a = d + l.length), p)) c += p[1];
                else {
                  var h = e[a],
                    m = n[2],
                    v = n[3],
                    y = n[4],
                    b = n[5],
                    g = n[6],
                    w = n[7];
                  c && (r.push(c), (c = ""));
                  var O = null != m && null != h && h !== m,
                    E = "+" === g || "*" === g,
                    P = "?" === g || "*" === g,
                    x = n[2] || f,
                    S = y || b;
                  r.push({
                    name: v || i++,
                    prefix: m || "",
                    delimiter: x,
                    optional: P,
                    repeat: E,
                    partial: O,
                    asterisk: !!w,
                    pattern: S ? s(S) : w ? ".*" : "[^" + u(x) + "]+?"
                  });
                }
              }
              return a < e.length && (c += e.substr(a)), c && r.push(c), r;
            }
            function a(e) {
              return encodeURI(e).replace(/[\/?#]/g, function(e) {
                return (
                  "%" +
                  e
                    .charCodeAt(0)
                    .toString(16)
                    .toUpperCase()
                );
              });
            }
            function c(e, t) {
              for (var n = new Array(e.length), o = 0; o < e.length; o++)
                "object" == typeof e[o] &&
                  (n[o] = new RegExp("^(?:" + e[o].pattern + ")$", l(t)));
              return function(t, o) {
                for (
                  var i = "",
                    c = t || {},
                    u = (o || {}).pretty ? a : encodeURIComponent,
                    s = 0;
                  s < e.length;
                  s++
                ) {
                  var f = e[s];
                  if ("string" != typeof f) {
                    var l,
                      p = c[f.name];
                    if (null == p) {
                      if (f.optional) {
                        f.partial && (i += f.prefix);
                        continue;
                      }
                      throw new TypeError(
                        'Expected "' + f.name + '" to be defined'
                      );
                    }
                    if (r(p)) {
                      if (!f.repeat)
                        throw new TypeError(
                          'Expected "' +
                            f.name +
                            '" to not repeat, but received `' +
                            JSON.stringify(p) +
                            "`"
                        );
                      if (0 === p.length) {
                        if (f.optional) continue;
                        throw new TypeError(
                          'Expected "' + f.name + '" to not be empty'
                        );
                      }
                      for (var d = 0; d < p.length; d++) {
                        if (((l = u(p[d])), !n[s].test(l)))
                          throw new TypeError(
                            'Expected all "' +
                              f.name +
                              '" to match "' +
                              f.pattern +
                              '", but received `' +
                              JSON.stringify(l) +
                              "`"
                          );
                        i += (0 === d ? f.prefix : f.delimiter) + l;
                      }
                    } else {
                      if (
                        ((l = f.asterisk
                          ? encodeURI(p).replace(/[?#]/g, function(e) {
                              return (
                                "%" +
                                e
                                  .charCodeAt(0)
                                  .toString(16)
                                  .toUpperCase()
                              );
                            })
                          : u(p)),
                        !n[s].test(l))
                      )
                        throw new TypeError(
                          'Expected "' +
                            f.name +
                            '" to match "' +
                            f.pattern +
                            '", but received "' +
                            l +
                            '"'
                        );
                      i += f.prefix + l;
                    }
                  } else i += f;
                }
                return i;
              };
            }
            function u(e) {
              return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
            }
            function s(e) {
              return e.replace(/([=!:$\/()])/g, "\\$1");
            }
            function f(e, t) {
              return (e.keys = t), e;
            }
            function l(e) {
              return e && e.sensitive ? "" : "i";
            }
            function p(e, t, n) {
              r(t) || ((n = t || n), (t = []));
              for (
                var o = (n = n || {}).strict, i = !1 !== n.end, a = "", c = 0;
                c < e.length;
                c++
              ) {
                var s = e[c];
                if ("string" == typeof s) a += u(s);
                else {
                  var p = u(s.prefix),
                    d = "(?:" + s.pattern + ")";
                  t.push(s),
                    s.repeat && (d += "(?:" + p + d + ")*"),
                    (a += d = s.optional
                      ? s.partial
                        ? p + "(" + d + ")?"
                        : "(?:" + p + "(" + d + "))?"
                      : p + "(" + d + ")");
                }
              }
              var h = u(n.delimiter || "/"),
                m = a.slice(-h.length) === h;
              return (
                o ||
                  (a = (m ? a.slice(0, -h.length) : a) + "(?:" + h + "(?=$))?"),
                (a += i ? "$" : o && m ? "" : "(?=" + h + "|$)"),
                f(new RegExp("^" + a, l(n)), t)
              );
            }
            function d(e, t, n) {
              return (
                r(t) || ((n = t || n), (t = [])),
                (n = n || {}),
                e instanceof RegExp
                  ? (function(e, t) {
                      var n = e.source.match(/\((?!\?)/g);
                      if (n)
                        for (var r = 0; r < n.length; r++)
                          t.push({
                            name: r,
                            prefix: null,
                            delimiter: null,
                            optional: !1,
                            repeat: !1,
                            partial: !1,
                            asterisk: !1,
                            pattern: null
                          });
                      return f(e, t);
                    })(e, t)
                  : r(e)
                  ? (function(e, t, n) {
                      for (var r = [], o = 0; o < e.length; o++)
                        r.push(d(e[o], t, n).source);
                      return f(new RegExp("(?:" + r.join("|") + ")", l(n)), t);
                    })(e, t, n)
                  : (function(e, t, n) {
                      return p(i(e, n), t, n);
                    })(e, t, n)
              );
            }
          },
          function(e, t, n) {
            var r, o, i;
            (o = [t]),
              void 0 ===
                (i =
                  "function" ==
                  typeof (r = function(e) {
                    "use strict";
                    function t(e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t &&
                          (r = r.filter(function(t) {
                            return Object.getOwnPropertyDescriptor(
                              e,
                              t
                            ).enumerable;
                          })),
                          n.push.apply(n, r);
                      }
                      return n;
                    }
                    function n(e, t, n) {
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
                    function r(e) {
                      return (r =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                          ? function(e) {
                              return typeof e;
                            }
                          : function(e) {
                              return e &&
                                "function" == typeof Symbol &&
                                e.constructor === Symbol &&
                                e !== Symbol.prototype
                                ? "symbol"
                                : typeof e;
                            })(e);
                    }
                    Object.defineProperty(e, "__esModule", { value: !0 }),
                      (e.default = function(f) {
                        if ("object" !== r(f))
                          throw new Error(
                            "single-spa-react requires a configuration object"
                          );
                        var l = (function(e) {
                          for (var r = 1; r < arguments.length; r++) {
                            var o = null != arguments[r] ? arguments[r] : {};
                            r % 2
                              ? t(o, !0).forEach(function(t) {
                                  n(e, t, o[t]);
                                })
                              : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(o)
                                )
                              : t(o).forEach(function(t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(o, t)
                                  );
                                });
                          }
                          return e;
                        })({}, i, {}, f);
                        if (!l.React)
                          throw new Error(
                            "single-spa-react must be passed opts.React"
                          );
                        if (!l.ReactDOM)
                          throw new Error(
                            "single-spa-react must be passed opts.ReactDOM"
                          );
                        if (!l.rootComponent && !l.loadRootComponent)
                          throw new Error(
                            "single-spa-react must be passed opts.rootComponent or opts.loadRootComponent"
                          );
                        !o &&
                          l.React.createContext &&
                          (e.SingleSpaContext = o = l.React.createContext());
                        var p = {
                          bootstrap: a.bind(null, l),
                          mount: c.bind(null, l),
                          unmount: u.bind(null, l)
                        };
                        return (
                          l.parcelCanUpdate && (p.update = s.bind(null, l)), p
                        );
                      }),
                      (e.SingleSpaContext = void 0);
                    var o = null;
                    e.SingleSpaContext = o;
                    var i = {
                      React: null,
                      ReactDOM: null,
                      rootComponent: null,
                      loadRootComponent: null,
                      suppressComponentDidCatchWarning: !1,
                      domElements: {},
                      domElementGetter: null,
                      parcelCanUpdate: !0
                    };
                    function a(e, t) {
                      return e.rootComponent
                        ? Promise.resolve()
                        : e.loadRootComponent(t).then(function(t) {
                            e.rootComponent = t;
                          });
                    }
                    function c(e, t) {
                      return new Promise(function(n, r) {
                        !e.suppressComponentDidCatchWarning &&
                          (function(e) {
                            if (
                              !(
                                e &&
                                "string" == typeof e.version &&
                                e.version.indexOf(".") >= 0
                              )
                            )
                              return !1;
                            var t = e.version.slice(0, e.version.indexOf("."));
                            try {
                              return Number(t) >= 16;
                            } catch (e) {
                              return !1;
                            }
                          })(e.React) &&
                          (e.rootComponent.prototype
                            ? e.rootComponent.prototype.componentDidCatch ||
                              console.warn(
                                "single-spa-react: ".concat(
                                  t.name || t.appName || t.childAppName,
                                  "'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application."
                                )
                              )
                            : console.warn(
                                "single-spa-react: ".concat(
                                  t.name || t.appName || t.childAppName,
                                  "'s rootComponent does not have a prototype.  If using a functional component, wrap it in an error boundary or other class that implements componentDidCatch to avoid accidentally unmounting the entire single-spa application"
                                )
                              ));
                        var i = (function(e, t) {
                          return (t = t && t.customProps ? t.customProps : t)
                            .domElement
                            ? function() {
                                return t.domElement;
                              }
                            : t.domElementGetter
                            ? t.domElementGetter
                            : e.domElementGetter
                            ? e.domElementGetter
                            : (function(e) {
                                var t = e.appName || e.name;
                                if (!t)
                                  throw Error(
                                    "single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application"
                                  );
                                var n = "single-spa-application:".concat(t);
                                return function() {
                                  var e = document.getElementById(n);
                                  return (
                                    e ||
                                      (((e = document.createElement(
                                        "div"
                                      )).id = n),
                                      document.body.appendChild(e)),
                                    e
                                  );
                                };
                              })(t);
                        })(e, t);
                        if ("function" != typeof i)
                          throw new Error(
                            "single-spa-react: the domElementGetter for react application '".concat(
                              t.appName || t.name,
                              "' is not a function"
                            )
                          );
                        var a = e.React.createElement(e.rootComponent, t),
                          c = o
                            ? e.React.createElement(o.Provider, { value: t }, a)
                            : a,
                          u = (function(e, t) {
                            var n = e();
                            if (!n)
                              throw new Error(
                                "single-spa-react: domElementGetter function for application '".concat(
                                  t.appName || t.name,
                                  "' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"
                                )
                              );
                            return n;
                          })(i, t);
                        f({
                          elementToRender: c,
                          domElement: u,
                          whenFinished: function() {
                            n(this);
                          },
                          opts: e
                        }),
                          (e.domElements[t.name] = u);
                      });
                    }
                    function u(e, t) {
                      return Promise.resolve().then(function() {
                        e.ReactDOM.unmountComponentAtNode(
                          e.domElements[t.name]
                        ),
                          delete e.domElements[t.name];
                      });
                    }
                    function s(e, t) {
                      return new Promise(function(n, r) {
                        var i = e.React.createElement(e.rootComponent, t);
                        f({
                          elementToRender: o
                            ? e.React.createElement(o.Provider, { value: t }, i)
                            : i,
                          domElement: e.domElements[t.name],
                          whenFinished: function() {
                            n(this);
                          },
                          opts: e
                        });
                      });
                    }
                    function f(e) {
                      var t = e.opts,
                        n = e.elementToRender,
                        r = e.domElement,
                        o = e.whenFinished;
                      return "createRoot" === t.renderType
                        ? t.ReactDOM.createRoot(r).render(n, o)
                        : "createBlockingRoot" === t.renderType
                        ? t.ReactDOM.createBlockingRoot(r).render(n, o)
                        : "hydrate" === t.renderType
                        ? t.ReactDOM.hydrate(n, r, o)
                        : t.ReactDOM.render(n, r, o);
                    }
                  })
                    ? r.apply(t, o)
                    : r) || (e.exports = i);
          },
          function(e, t, n) {
            "use strict";
            (function(t) {
              var n = "__global_unique_id__";
              e.exports = function() {
                return (t[n] = (t[n] || 0) + 1);
              };
            }.call(this, n(6)));
          },
          function(e, t, n) {
            "use strict";
            var r = n(16);
            function o() {}
            function i() {}
            (i.resetWarningCache = o),
              (e.exports = function() {
                function e(e, t, n, o, i, a) {
                  if (a !== r) {
                    var c = new Error(
                      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                    throw ((c.name = "Invariant Violation"), c);
                  }
                }
                function t() {
                  return e;
                }
                e.isRequired = e;
                var n = {
                  array: e,
                  bool: e,
                  func: e,
                  number: e,
                  object: e,
                  string: e,
                  symbol: e,
                  any: e,
                  arrayOf: t,
                  element: e,
                  elementType: e,
                  instanceOf: t,
                  node: e,
                  objectOf: t,
                  oneOf: t,
                  oneOfType: t,
                  shape: t,
                  exact: t,
                  checkPropTypes: i,
                  resetWarningCache: o
                };
                return (n.PropTypes = n), n;
              });
          },
          function(e, t, n) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          },
          function(e, t, n) {
            "use strict";
            /** @license React v16.13.1
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ var r = "function" == typeof Symbol && Symbol.for,
              o = r ? Symbol.for("react.element") : 60103,
              i = r ? Symbol.for("react.portal") : 60106,
              a = r ? Symbol.for("react.fragment") : 60107,
              c = r ? Symbol.for("react.strict_mode") : 60108,
              u = r ? Symbol.for("react.profiler") : 60114,
              s = r ? Symbol.for("react.provider") : 60109,
              f = r ? Symbol.for("react.context") : 60110,
              l = r ? Symbol.for("react.async_mode") : 60111,
              p = r ? Symbol.for("react.concurrent_mode") : 60111,
              d = r ? Symbol.for("react.forward_ref") : 60112,
              h = r ? Symbol.for("react.suspense") : 60113,
              m = r ? Symbol.for("react.suspense_list") : 60120,
              v = r ? Symbol.for("react.memo") : 60115,
              y = r ? Symbol.for("react.lazy") : 60116,
              b = r ? Symbol.for("react.block") : 60121,
              g = r ? Symbol.for("react.fundamental") : 60117,
              w = r ? Symbol.for("react.responder") : 60118,
              O = r ? Symbol.for("react.scope") : 60119;
            function E(e) {
              if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                  case o:
                    switch ((e = e.type)) {
                      case l:
                      case p:
                      case a:
                      case u:
                      case c:
                      case h:
                        return e;
                      default:
                        switch ((e = e && e.$$typeof)) {
                          case f:
                          case d:
                          case y:
                          case v:
                          case s:
                            return e;
                          default:
                            return t;
                        }
                    }
                  case i:
                    return t;
                }
              }
            }
            function P(e) {
              return E(e) === p;
            }
            (t.AsyncMode = l),
              (t.ConcurrentMode = p),
              (t.ContextConsumer = f),
              (t.ContextProvider = s),
              (t.Element = o),
              (t.ForwardRef = d),
              (t.Fragment = a),
              (t.Lazy = y),
              (t.Memo = v),
              (t.Portal = i),
              (t.Profiler = u),
              (t.StrictMode = c),
              (t.Suspense = h),
              (t.isAsyncMode = function(e) {
                return P(e) || E(e) === l;
              }),
              (t.isConcurrentMode = P),
              (t.isContextConsumer = function(e) {
                return E(e) === f;
              }),
              (t.isContextProvider = function(e) {
                return E(e) === s;
              }),
              (t.isElement = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === o;
              }),
              (t.isForwardRef = function(e) {
                return E(e) === d;
              }),
              (t.isFragment = function(e) {
                return E(e) === a;
              }),
              (t.isLazy = function(e) {
                return E(e) === y;
              }),
              (t.isMemo = function(e) {
                return E(e) === v;
              }),
              (t.isPortal = function(e) {
                return E(e) === i;
              }),
              (t.isProfiler = function(e) {
                return E(e) === u;
              }),
              (t.isStrictMode = function(e) {
                return E(e) === c;
              }),
              (t.isSuspense = function(e) {
                return E(e) === h;
              }),
              (t.isValidElementType = function(e) {
                return (
                  "string" == typeof e ||
                  "function" == typeof e ||
                  e === a ||
                  e === p ||
                  e === u ||
                  e === c ||
                  e === h ||
                  e === m ||
                  ("object" == typeof e &&
                    null !== e &&
                    (e.$$typeof === y ||
                      e.$$typeof === v ||
                      e.$$typeof === s ||
                      e.$$typeof === f ||
                      e.$$typeof === d ||
                      e.$$typeof === g ||
                      e.$$typeof === w ||
                      e.$$typeof === O ||
                      e.$$typeof === b))
                );
              }),
              (t.typeOf = E);
          },
          function(e, t) {
            e.exports =
              Array.isArray ||
              function(e) {
                return "[object Array]" == Object.prototype.toString.call(e);
              };
          },
          function(e, t, n) {
            "use strict";
            n.r(t),
              n.d(t, "bootstrap", function() {
                return it;
              }),
              n.d(t, "mount", function() {
                return at;
              }),
              n.d(t, "unmount", function() {
                return ct;
              }),
              (function(e, t) {
                if (
                  (t || (t = 1), "string" != typeof e || 0 === e.trim().length)
                )
                  throw Error(
                    "systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'"
                  );
                if ("number" != typeof t || t <= 0 || !Number.isInteger(t))
                  throw Error(
                    "systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'"
                  );
                let r;
                try {
                  if (((r = window.System.resolve(e)), !r)) throw Error();
                } catch (t) {
                  throw Error(
                    "systemjs-webpack-interop: There is no such module '" +
                      e +
                      "' in the SystemJS registry. Did you misspell the name of your module?"
                  );
                }
                n.p = (function(e, t) {
                  const n = new URL(e),
                    r = new URL(e).pathname;
                  let o = 0,
                    i = r.length;
                  for (; o !== t && i >= 0; ) {
                    "/" === r[--i] && o++;
                  }
                  if (o !== t)
                    throw Error(
                      "systemjs-webpack-interop: rootDirectoryLevel (" +
                        t +
                        ") is greater than the number of directories (" +
                        o +
                        ") in the URL path " +
                        fullUrl
                    );
                  return (n.pathname = n.pathname.slice(0, i + 1)), n.href;
                })(r, t);
              })("@briuin/timeline");
            var r = n(0),
              o = n.n(r),
              i = n(7),
              a = n.n(i),
              c = n(13),
              u = n.n(c);
            function s(e, t) {
              (e.prototype = Object.create(t.prototype)),
                (e.prototype.constructor = e),
                (e.__proto__ = t);
            }
            var f = n(2),
              l = n.n(f);
            function p() {
              return (p =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }).apply(this, arguments);
            }
            function d(e) {
              return "/" === e.charAt(0);
            }
            function h(e, t) {
              for (var n = t, r = n + 1, o = e.length; r < o; n += 1, r += 1)
                e[n] = e[r];
              e.pop();
            }
            var m = function(e, t) {
              void 0 === t && (t = "");
              var n,
                r = (e && e.split("/")) || [],
                o = (t && t.split("/")) || [],
                i = e && d(e),
                a = t && d(t),
                c = i || a;
              if (
                (e && d(e) ? (o = r) : r.length && (o.pop(), (o = o.concat(r))),
                !o.length)
              )
                return "/";
              if (o.length) {
                var u = o[o.length - 1];
                n = "." === u || ".." === u || "" === u;
              } else n = !1;
              for (var s = 0, f = o.length; f >= 0; f--) {
                var l = o[f];
                "." === l
                  ? h(o, f)
                  : ".." === l
                  ? (h(o, f), s++)
                  : s && (h(o, f), s--);
              }
              if (!c) for (; s--; s) o.unshift("..");
              !c || "" === o[0] || (o[0] && d(o[0])) || o.unshift("");
              var p = o.join("/");
              return n && "/" !== p.substr(-1) && (p += "/"), p;
            };
            var v = function(e, t) {
              if (!e) throw new Error("Invariant failed");
            };
            function y(e) {
              return "/" === e.charAt(0) ? e : "/" + e;
            }
            function b(e) {
              return "/" === e.charAt(0) ? e.substr(1) : e;
            }
            function g(e, t) {
              return (function(e, t) {
                return (
                  0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
                  -1 !== "/?#".indexOf(e.charAt(t.length))
                );
              })(e, t)
                ? e.substr(t.length)
                : e;
            }
            function w(e) {
              return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
            }
            function O(e) {
              var t = e.pathname,
                n = e.search,
                r = e.hash,
                o = t || "/";
              return (
                n && "?" !== n && (o += "?" === n.charAt(0) ? n : "?" + n),
                r && "#" !== r && (o += "#" === r.charAt(0) ? r : "#" + r),
                o
              );
            }
            function E(e, t, n, r) {
              var o;
              "string" == typeof e
                ? ((o = (function(e) {
                    var t = e || "/",
                      n = "",
                      r = "",
                      o = t.indexOf("#");
                    -1 !== o && ((r = t.substr(o)), (t = t.substr(0, o)));
                    var i = t.indexOf("?");
                    return (
                      -1 !== i && ((n = t.substr(i)), (t = t.substr(0, i))),
                      {
                        pathname: t,
                        search: "?" === n ? "" : n,
                        hash: "#" === r ? "" : r
                      }
                    );
                  })(e)).state = t)
                : (void 0 === (o = p({}, e)).pathname && (o.pathname = ""),
                  o.search
                    ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search)
                    : (o.search = ""),
                  o.hash
                    ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash)
                    : (o.hash = ""),
                  void 0 !== t && void 0 === o.state && (o.state = t));
              try {
                o.pathname = decodeURI(o.pathname);
              } catch (e) {
                throw e instanceof URIError
                  ? new URIError(
                      'Pathname "' +
                        o.pathname +
                        '" could not be decoded. This is likely caused by an invalid percent-encoding.'
                    )
                  : e;
              }
              return (
                n && (o.key = n),
                r
                  ? o.pathname
                    ? "/" !== o.pathname.charAt(0) &&
                      (o.pathname = m(o.pathname, r.pathname))
                    : (o.pathname = r.pathname)
                  : o.pathname || (o.pathname = "/"),
                o
              );
            }
            function P() {
              var e = null;
              var t = [];
              return {
                setPrompt: function(t) {
                  return (
                    (e = t),
                    function() {
                      e === t && (e = null);
                    }
                  );
                },
                confirmTransitionTo: function(t, n, r, o) {
                  if (null != e) {
                    var i = "function" == typeof e ? e(t, n) : e;
                    "string" == typeof i
                      ? "function" == typeof r
                        ? r(i, o)
                        : o(!0)
                      : o(!1 !== i);
                  } else o(!0);
                },
                appendListener: function(e) {
                  var n = !0;
                  function r() {
                    n && e.apply(void 0, arguments);
                  }
                  return (
                    t.push(r),
                    function() {
                      (n = !1),
                        (t = t.filter(function(e) {
                          return e !== r;
                        }));
                    }
                  );
                },
                notifyListeners: function() {
                  for (
                    var e = arguments.length, n = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    n[r] = arguments[r];
                  t.forEach(function(e) {
                    return e.apply(void 0, n);
                  });
                }
              };
            }
            var x = !(
              "undefined" == typeof window ||
              !window.document ||
              !window.document.createElement
            );
            function S(e, t) {
              t(window.confirm(e));
            }
            function C() {
              try {
                return window.history.state || {};
              } catch (e) {
                return {};
              }
            }
            function j(e) {
              void 0 === e && (e = {}), x || v(!1);
              var t,
                n = window.history,
                r =
                  ((-1 ===
                    (t = window.navigator.userAgent).indexOf("Android 2.") &&
                    -1 === t.indexOf("Android 4.0")) ||
                    -1 === t.indexOf("Mobile Safari") ||
                    -1 !== t.indexOf("Chrome") ||
                    -1 !== t.indexOf("Windows Phone")) &&
                  window.history &&
                  "pushState" in window.history,
                o = !(-1 === window.navigator.userAgent.indexOf("Trident")),
                i = e,
                a = i.forceRefresh,
                c = void 0 !== a && a,
                u = i.getUserConfirmation,
                s = void 0 === u ? S : u,
                f = i.keyLength,
                l = void 0 === f ? 6 : f,
                d = e.basename ? w(y(e.basename)) : "";
              function h(e) {
                var t = e || {},
                  n = t.key,
                  r = t.state,
                  o = window.location,
                  i = o.pathname + o.search + o.hash;
                return d && (i = g(i, d)), E(i, r, n);
              }
              function m() {
                return Math.random()
                  .toString(36)
                  .substr(2, l);
              }
              var b = P();
              function j(e) {
                p(U, e),
                  (U.length = n.length),
                  b.notifyListeners(U.location, U.action);
              }
              function R(e) {
                (function(e) {
                  return (
                    void 0 === e.state &&
                    -1 === navigator.userAgent.indexOf("CriOS")
                  );
                })(e) || N(h(e.state));
              }
              function T() {
                N(h(C()));
              }
              var k = !1;
              function N(e) {
                if (k) (k = !1), j();
                else {
                  b.confirmTransitionTo(e, "POP", s, function(t) {
                    t
                      ? j({ action: "POP", location: e })
                      : (function(e) {
                          var t = U.location,
                            n = A.indexOf(t.key);
                          -1 === n && (n = 0);
                          var r = A.indexOf(e.key);
                          -1 === r && (r = 0);
                          var o = n - r;
                          o && ((k = !0), D(o));
                        })(e);
                  });
                }
              }
              var M = h(C()),
                A = [M.key];
              function _(e) {
                return d + O(e);
              }
              function D(e) {
                n.go(e);
              }
              var L = 0;
              function $(e) {
                1 === (L += e) && 1 === e
                  ? (window.addEventListener("popstate", R),
                    o && window.addEventListener("hashchange", T))
                  : 0 === L &&
                    (window.removeEventListener("popstate", R),
                    o && window.removeEventListener("hashchange", T));
              }
              var I = !1;
              var U = {
                length: n.length,
                action: "POP",
                location: M,
                createHref: _,
                push: function(e, t) {
                  var o = E(e, t, m(), U.location);
                  b.confirmTransitionTo(o, "PUSH", s, function(e) {
                    if (e) {
                      var t = _(o),
                        i = o.key,
                        a = o.state;
                      if (r)
                        if ((n.pushState({ key: i, state: a }, null, t), c))
                          window.location.href = t;
                        else {
                          var u = A.indexOf(U.location.key),
                            s = A.slice(0, u + 1);
                          s.push(o.key),
                            (A = s),
                            j({ action: "PUSH", location: o });
                        }
                      else window.location.href = t;
                    }
                  });
                },
                replace: function(e, t) {
                  var o = E(e, t, m(), U.location);
                  b.confirmTransitionTo(o, "REPLACE", s, function(e) {
                    if (e) {
                      var t = _(o),
                        i = o.key,
                        a = o.state;
                      if (r)
                        if ((n.replaceState({ key: i, state: a }, null, t), c))
                          window.location.replace(t);
                        else {
                          var u = A.indexOf(U.location.key);
                          -1 !== u && (A[u] = o.key),
                            j({ action: "REPLACE", location: o });
                        }
                      else window.location.replace(t);
                    }
                  });
                },
                go: D,
                goBack: function() {
                  D(-1);
                },
                goForward: function() {
                  D(1);
                },
                block: function(e) {
                  void 0 === e && (e = !1);
                  var t = b.setPrompt(e);
                  return (
                    I || ($(1), (I = !0)),
                    function() {
                      return I && ((I = !1), $(-1)), t();
                    }
                  );
                },
                listen: function(e) {
                  var t = b.appendListener(e);
                  return (
                    $(1),
                    function() {
                      $(-1), t();
                    }
                  );
                }
              };
              return U;
            }
            var R = {
              hashbang: {
                encodePath: function(e) {
                  return "!" === e.charAt(0) ? e : "!/" + b(e);
                },
                decodePath: function(e) {
                  return "!" === e.charAt(0) ? e.substr(1) : e;
                }
              },
              noslash: { encodePath: b, decodePath: y },
              slash: { encodePath: y, decodePath: y }
            };
            function T(e) {
              var t = e.indexOf("#");
              return -1 === t ? e : e.slice(0, t);
            }
            function k() {
              var e = window.location.href,
                t = e.indexOf("#");
              return -1 === t ? "" : e.substring(t + 1);
            }
            function N(e) {
              window.location.replace(T(window.location.href) + "#" + e);
            }
            function M(e) {
              void 0 === e && {}, x || v(!1);
              var t = window.history,
                n = (window.navigator.userAgent.indexOf("Firefox"), e),
                r = n.getUserConfirmation,
                o = void 0 === r ? S : r,
                i = n.hashType,
                a = void 0 === i ? "slash" : i,
                c = e.basename ? w(y(e.basename)) : "",
                u = R[a],
                s = u.encodePath,
                f = u.decodePath;
              function l() {
                var e = f(k());
                return c && g(e, c), E(e);
              }
              var d = P();
              function h(e) {
                p(U, e),
                  (U.length = t.length),
                  d.notifyListeners(U.location, U.action);
              }
              var m = !1,
                b = null;
              function C() {
                var e,
                  t,
                  n = k(),
                  r = s(n);
                if (n !== r) N(r);
                else {
                  var i = l(),
                    a = U.location;
                  if (
                    !m &&
                    (i,
                    a.pathname === t.pathname &&
                      e.search === t.search &&
                      e.hash === t.hash)
                  )
                    return;
                  if (b === O(i)) return;
                  null,
                    (function(e) {
                      if (m) !1, h();
                      else {
                        d.confirmTransitionTo(e, "POP", o, function(t) {
                          t
                            ? h({ action: "POP", location: e })
                            : (function(e) {
                                var t = U.location,
                                  n = _.lastIndexOf(O(t));
                                -1 === n && 0;
                                var r = _.lastIndexOf(O(e));
                                -1 === r && 0;
                                var o = n - r;
                                o && (!0, D(o));
                              })(e);
                        });
                      }
                    })(i);
                }
              }
              var j = k(),
                M = s(j);
              j !== M && N(M);
              var A = l(),
                _ = [O(A)];
              function D(e) {
                t.go(e);
              }
              var L = 0;
              function $(e) {
                1 === (L += e) && 1 === e
                  ? window.addEventListener("hashchange", C)
                  : 0 === L && window.removeEventListener("hashchange", C);
              }
              var I = !1;
              var U = {
                length: t.length,
                action: "POP",
                location: A,
                createHref: function(e) {
                  var t = document.querySelector("base"),
                    n = "";
                  return (
                    t && t.getAttribute("href") && T(window.location.href),
                    n + "#" + s(c + O(e))
                  );
                },
                push: function(e, t) {
                  var n = E(e, void 0, void 0, U.location);
                  d.confirmTransitionTo(n, "PUSH", o, function(e) {
                    if (e) {
                      var t = O(n),
                        r = s(c + t);
                      if (k() !== r) {
                        t,
                          (function(e) {
                            window.location.hash = e;
                          })(r);
                        var o = _.lastIndexOf(O(U.location)),
                          i = _.slice(0, o + 1);
                        i.push(t), i, h({ action: "PUSH", location: n });
                      } else h();
                    }
                  });
                },
                replace: function(e, t) {
                  var n = E(e, void 0, void 0, U.location);
                  d.confirmTransitionTo(n, "REPLACE", o, function(e) {
                    if (e) {
                      var t = O(n),
                        r = s(c + t);
                      k() !== r && (t, N(r));
                      var o = _.indexOf(O(U.location));
                      -1 !== o && (_[o] = t),
                        h({ action: "REPLACE", location: n });
                    }
                  });
                },
                go: D,
                goBack: function() {
                  D(-1);
                },
                goForward: function() {
                  D(1);
                },
                block: function(e) {
                  void 0 === e && !1;
                  var t = d.setPrompt(e);
                  return (
                    I || ($(1), !0),
                    function() {
                      return I && (!1, $(-1)), t();
                    }
                  );
                },
                listen: function(e) {
                  var t = d.appendListener(e);
                  return (
                    $(1),
                    function() {
                      $(-1), t();
                    }
                  );
                }
              };
              return U;
            }
            function A(e, t, n) {
              return Math.min(Math.max(e, t), n);
            }
            function _(e) {
              void 0 === e && {};
              var t = e,
                n = t.getUserConfirmation,
                r = t.initialEntries,
                o = void 0 === r ? ["/"] : r,
                i = t.initialIndex,
                a = void 0 === i ? 0 : i,
                c = t.keyLength,
                u = void 0 === c ? 6 : c,
                s = P();
              function f(e) {
                p(y, e),
                  (y.length = y.entries.length),
                  s.notifyListeners(y.location, y.action);
              }
              function l() {
                return Math.random()
                  .toString(36)
                  .substr(2, u);
              }
              var d = A(a, 0, o.length - 1),
                h = o.map(function(e) {
                  return E(
                    e,
                    void 0,
                    "string" == typeof e ? l() : e.key || l()
                  );
                }),
                m = O;
              function v(e) {
                var t = A(y.index + e, 0, y.entries.length - 1),
                  r = y.entries[t];
                s.confirmTransitionTo(r, "POP", n, function(e) {
                  e ? f({ action: "POP", location: r, index: t }) : f();
                });
              }
              var y = {
                length: h.length,
                action: "POP",
                location: h[d],
                index: d,
                entries: h,
                createHref: m,
                push: function(e, t) {
                  var r = E(e, t, l(), y.location);
                  s.confirmTransitionTo(r, "PUSH", n, function(e) {
                    if (e) {
                      var t = y.index + 1,
                        n = y.entries.slice(0);
                      n.length > t ? n.splice(t, n.length - t, r) : n.push(r),
                        f({
                          action: "PUSH",
                          location: r,
                          index: t,
                          entries: n
                        });
                    }
                  });
                },
                replace: function(e, t) {
                  var r = E(e, t, l(), y.location);
                  s.confirmTransitionTo(r, "REPLACE", n, function(e) {
                    e &&
                      ((y.entries[y.index] = r),
                      f({ action: "REPLACE", location: r }));
                  });
                },
                go: v,
                goBack: function() {
                  v(-1);
                },
                goForward: function() {
                  v(1);
                },
                canGo: function(e) {
                  var t = y.index + e;
                  return t >= 0 && t < y.entries.length;
                },
                block: function(e) {
                  return void 0 === e && !1, s.setPrompt(e);
                },
                listen: function(e) {
                  return s.appendListener(e);
                }
              };
              return y;
            }
            var D = n(11),
              L = n.n(D),
              $ = n(14),
              I = n.n($);
            function U(e) {
              var t = [];
              return {
                on: function(e) {
                  t.push(e);
                },
                off: function(e) {
                  t = t.filter(function(t) {
                    return t !== e;
                  });
                },
                get: function() {
                  return e;
                },
                set: function(n, r) {
                  (e = n),
                    t.forEach(function(t) {
                      return t(e, r);
                    });
                }
              };
            }
            var B =
                o.a.createContext ||
                function(e, t) {
                  var n,
                    o,
                    i = "__create-react-context-" + I()() + "__",
                    a = (function(e) {
                      function n() {
                        var t;
                        return (
                          ((t = e.apply(this, arguments) || this).emitter = U(
                            t.props.value
                          )),
                          t
                        );
                      }
                      L()(n, e);
                      var r = n.prototype;
                      return (
                        (r.getChildContext = function() {
                          var e;
                          return ((e = {})[i] = this.emitter), e;
                        }),
                        (r.componentWillReceiveProps = function(e) {
                          if (this.props.value !== e.value) {
                            var n,
                              r = this.props.value,
                              o = e.value;
                            ((i = r) === (a = o)
                            ? 0 !== i || 1 / i == 1 / a
                            : i != i && a != a)
                              ? (n = 0)
                              : ((n =
                                  "function" == typeof t
                                    ? t(r, o)
                                    : 1073741823),
                                0 !== (n |= 0) && this.emitter.set(e.value, n));
                          }
                          var i, a;
                        }),
                        (r.render = function() {
                          return this.props.children;
                        }),
                        n
                      );
                    })(r.Component);
                  a.childContextTypes =
                    (((n = {})[i] = l.a.object.isRequired), n);
                  var c = (function(t) {
                    function n() {
                      var e;
                      return (
                        ((e = t.apply(this, arguments) || this).state = {
                          value: e.getValue()
                        }),
                        (e.onUpdate = function(t, n) {
                          0 != ((0 | e.observedBits) & n) &&
                            e.setState({ value: e.getValue() });
                        }),
                        e
                      );
                    }
                    L()(n, t);
                    var r = n.prototype;
                    return (
                      (r.componentWillReceiveProps = function(e) {
                        var t = e.observedBits;
                        this.observedBits = null == t ? 1073741823 : t;
                      }),
                      (r.componentDidMount = function() {
                        this.context[i] && this.context[i].on(this.onUpdate);
                        var e = this.props.observedBits;
                        this.observedBits = null == e ? 1073741823 : e;
                      }),
                      (r.componentWillUnmount = function() {
                        this.context[i] && this.context[i].off(this.onUpdate);
                      }),
                      (r.getValue = function() {
                        return this.context[i] ? this.context[i].get() : e;
                      }),
                      (r.render = function() {
                        return ((e = this.props.children),
                        Array.isArray(e) ? e[0] : e)(this.state.value);
                        var e;
                      }),
                      n
                    );
                  })(r.Component);
                  return (
                    (c.contextTypes = (((o = {})[i] = l.a.object), o)),
                    { Provider: a, Consumer: c }
                  );
                },
              q = n(12),
              F = n.n(q),
              W = n(8);
            function H(e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                i = Object.keys(e);
              for (r = 0; r < i.length; r++)
                (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            }
            var G = n(5),
              K = n.n(G),
              V = (function(e) {
                var t = B();
                return (t.displayName = e), t;
              })("Router"),
              z = (function(e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this, t) || this).state = {
                      location: t.history.location
                    }),
                    (n._isMounted = !1),
                    (n._pendingLocation = null),
                    t.staticContext ||
                      (n.unlisten = t.history.listen(function(e) {
                        n._isMounted
                          ? n.setState({ location: e })
                          : (n._pendingLocation = e);
                      })),
                    n
                  );
                }
                s(t, e),
                  (t.computeRootMatch = function(e) {
                    return {
                      path: "/",
                      url: "/",
                      params: {},
                      isExact: "/" === e
                    };
                  });
                var n = t.prototype;
                return (
                  (n.componentDidMount = function() {
                    (this._isMounted = !0),
                      this._pendingLocation &&
                        this.setState({ location: this._pendingLocation });
                  }),
                  (n.componentWillUnmount = function() {
                    this.unlisten && this.unlisten();
                  }),
                  (n.render = function() {
                    return o.a.createElement(V.Provider, {
                      children: this.props.children || null,
                      value: {
                        history: this.props.history,
                        location: this.state.location,
                        match: t.computeRootMatch(this.state.location.pathname),
                        staticContext: this.props.staticContext
                      }
                    });
                  }),
                  t
                );
              })(o.a.Component);
            o.a.Component;
            o.a.Component;
            var Y = {},
              J = 0;
            function Q(e, t) {
              void 0 === t && (t = {}),
                ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
              var n = t,
                r = n.path,
                o = n.exact,
                i = void 0 !== o && o,
                a = n.strict,
                c = void 0 !== a && a,
                u = n.sensitive,
                s = void 0 !== u && u;
              return [].concat(r).reduce(function(t, n) {
                if (!n && "" !== n) return null;
                if (t) return t;
                var r = (function(e, t) {
                    var n = "" + t.end + t.strict + t.sensitive,
                      r = Y[n] || (Y[n] = {});
                    if (r[e]) return r[e];
                    var o = [],
                      i = { regexp: F()(e, o, t), keys: o };
                    return J < 1e4 && ((r[e] = i), J++), i;
                  })(n, { end: i, strict: c, sensitive: s }),
                  o = r.regexp,
                  a = r.keys,
                  u = o.exec(e);
                if (!u) return null;
                var f = u[0],
                  l = u.slice(1),
                  p = e === f;
                return i && !p
                  ? null
                  : {
                      path: n,
                      url: "/" === n && "" === f ? "/" : f,
                      isExact: p,
                      params: a.reduce(function(e, t, n) {
                        return (e[t.name] = l[n]), e;
                      }, {})
                    };
              }, null);
            }
            var X = (function(e) {
              function t() {
                return e.apply(this, arguments) || this;
              }
              return (
                s(t, e),
                (t.prototype.render = function() {
                  var e = this;
                  return o.a.createElement(V.Consumer, null, function(t) {
                    t || v(!1);
                    var n = e.props.location || t.location,
                      r = p({}, t, {
                        location: n,
                        match: e.props.computedMatch
                          ? e.props.computedMatch
                          : e.props.path
                          ? Q(n.pathname, e.props)
                          : t.match
                      }),
                      i = e.props,
                      a = i.children,
                      c = i.component,
                      u = i.render;
                    return (
                      Array.isArray(a) && 0 === a.length && (a = null),
                      o.a.createElement(
                        V.Provider,
                        { value: r },
                        r.match
                          ? a
                            ? "function" == typeof a
                              ? a(r)
                              : a
                            : c
                            ? o.a.createElement(c, r)
                            : u
                            ? u(r)
                            : null
                          : "function" == typeof a
                          ? a(r)
                          : null
                      )
                    );
                  });
                }),
                t
              );
            })(o.a.Component);
            function Z(e) {
              return "/" === e.charAt(0) ? e : "/" + e;
            }
            function ee(e, t) {
              if (!e) return t;
              var n = Z(e);
              return 0 !== t.pathname.indexOf(n)
                ? t
                : p({}, t, { pathname: t.pathname.substr(n.length) });
            }
            function te(e) {
              return "string" == typeof e ? e : O(e);
            }
            function ne(e) {
              return function() {
                v(!1);
              };
            }
            function re() {}
            o.a.Component;
            o.a.Component;
            o.a.useContext;
            var oe = (function(e) {
              function t() {
                for (
                  var t, n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                return (
                  ((t = e.call.apply(e, [this].concat(r)) || this).history = j(
                    t.props
                  )),
                  t
                );
              }
              return (
                s(t, e),
                (t.prototype.render = function() {
                  return o.a.createElement(z, {
                    history: this.history,
                    children: this.props.children
                  });
                }),
                t
              );
            })(o.a.Component);
            o.a.Component;
            var ie = function(e, t) {
                return "function" == typeof e ? e(t) : e;
              },
              ae = function(e, t) {
                return "string" == typeof e ? E(e, null, null, t) : e;
              },
              ce = function(e) {
                return e;
              },
              ue = o.a.forwardRef;
            void 0 === ue && (ue = ce);
            var se = ue(function(e, t) {
              var n = e.innerRef,
                r = e.navigate,
                i = e.onClick,
                a = H(e, ["innerRef", "navigate", "onClick"]),
                c = a.target,
                u = p({}, a, {
                  onClick: function(e) {
                    try {
                      i && i(e);
                    } catch (t) {
                      throw (e.preventDefault(), t);
                    }
                    e.defaultPrevented ||
                      0 !== e.button ||
                      (c && "_self" !== c) ||
                      (function(e) {
                        return !!(
                          e.metaKey ||
                          e.altKey ||
                          e.ctrlKey ||
                          e.shiftKey
                        );
                      })(e) ||
                      (e.preventDefault(), r());
                  }
                });
              return (u.ref = (ce !== ue && t) || n), o.a.createElement("a", u);
            });
            var fe = ue(function(e, t) {
                var n = e.component,
                  r = void 0 === n ? se : n,
                  i = e.replace,
                  a = e.to,
                  c = e.innerRef,
                  u = H(e, ["component", "replace", "to", "innerRef"]);
                return o.a.createElement(V.Consumer, null, function(e) {
                  e || v(!1);
                  var n = e.history,
                    s = ae(ie(a, e.location), e.location),
                    f = s ? n.createHref(s) : "",
                    l = p({}, u, {
                      href: f,
                      navigate: function() {
                        var t = ie(a, e.location);
                        (i ? n.replace : n.push)(t);
                      }
                    });
                  return (
                    ce !== ue ? (l.ref = t || c) : (l.innerRef = c),
                    o.a.createElement(r, l)
                  );
                });
              }),
              le = function(e) {
                return e;
              },
              pe = o.a.forwardRef;
            void 0 === pe && (pe = le);
            pe(function(e, t) {
              var n = e["aria-current"],
                r = void 0 === n ? "page" : n,
                i = e.activeClassName,
                a = void 0 === i ? "active" : i,
                c = e.activeStyle,
                u = e.className,
                s = e.exact,
                f = e.isActive,
                l = e.location,
                d = e.strict,
                h = e.style,
                m = e.to,
                y = e.innerRef,
                b = H(e, [
                  "aria-current",
                  "activeClassName",
                  "activeStyle",
                  "className",
                  "exact",
                  "isActive",
                  "location",
                  "strict",
                  "style",
                  "to",
                  "innerRef"
                ]);
              return o.a.createElement(V.Consumer, null, function(e) {
                e || v(!1);
                var n = l || e.location,
                  i = ae(ie(m, n), n),
                  g = i.pathname,
                  w = g && g.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
                  O = w
                    ? Q(n.pathname, { path: w, exact: s, strict: d })
                    : null,
                  E = !!(f ? f(O, n) : O),
                  P = E
                    ? (function() {
                        for (
                          var e = arguments.length, t = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          t[n] = arguments[n];
                        return t
                          .filter(function(e) {
                            return e;
                          })
                          .join(" ");
                      })(u, a)
                    : u,
                  x = E ? p({}, h, {}, c) : h,
                  S = p(
                    {
                      "aria-current": (E && r) || null,
                      className: P,
                      style: x,
                      to: i
                    },
                    b
                  );
                return (
                  le !== pe ? (S.ref = t || y) : (S.innerRef = y),
                  o.a.createElement(fe, S)
                );
              });
            });
            var de = o.a.createContext(null);
            var he = function(e) {
                e();
              },
              me = { notify: function() {} };
            function ve() {
              var e = he,
                t = null,
                n = null;
              return {
                clear: function() {
                  (t = null), (n = null);
                },
                notify: function() {
                  e(function() {
                    for (var e = t; e; ) e.callback(), (e = e.next);
                  });
                },
                get: function() {
                  for (var e = [], n = t; n; ) e.push(n), (n = n.next);
                  return e;
                },
                subscribe: function(e) {
                  var r = !0,
                    o = (n = { callback: e, next: null, prev: n });
                  return (
                    o.prev ? (o.prev.next = o) : (t = o),
                    function() {
                      r &&
                        null !== t &&
                        ((r = !1),
                        o.next ? (o.next.prev = o.prev) : (n = o.prev),
                        o.prev ? (o.prev.next = o.next) : (t = o.next));
                    }
                  );
                }
              };
            }
            var ye = (function() {
              function e(e, t) {
                (this.store = e),
                  (this.parentSub = t),
                  (this.unsubscribe = null),
                  (this.listeners = me),
                  (this.handleChangeWrapper = this.handleChangeWrapper.bind(
                    this
                  ));
              }
              var t = e.prototype;
              return (
                (t.addNestedSub = function(e) {
                  return this.trySubscribe(), this.listeners.subscribe(e);
                }),
                (t.notifyNestedSubs = function() {
                  this.listeners.notify();
                }),
                (t.handleChangeWrapper = function() {
                  this.onStateChange && this.onStateChange();
                }),
                (t.isSubscribed = function() {
                  return Boolean(this.unsubscribe);
                }),
                (t.trySubscribe = function() {
                  this.unsubscribe ||
                    ((this.unsubscribe = this.parentSub
                      ? this.parentSub.addNestedSub(this.handleChangeWrapper)
                      : this.store.subscribe(this.handleChangeWrapper)),
                    (this.listeners = ve()));
                }),
                (t.tryUnsubscribe = function() {
                  this.unsubscribe &&
                    (this.unsubscribe(),
                    (this.unsubscribe = null),
                    this.listeners.clear(),
                    (this.listeners = me));
                }),
                e
              );
            })();
            var be = function(e) {
                var t = e.store,
                  n = e.context,
                  i = e.children,
                  a = Object(r.useMemo)(
                    function() {
                      var e = new ye(t);
                      return (
                        (e.onStateChange = e.notifyNestedSubs),
                        { store: t, subscription: e }
                      );
                    },
                    [t]
                  ),
                  c = Object(r.useMemo)(
                    function() {
                      return t.getState();
                    },
                    [t]
                  );
                Object(r.useEffect)(
                  function() {
                    var e = a.subscription;
                    return (
                      e.trySubscribe(),
                      c !== t.getState() && e.notifyNestedSubs(),
                      function() {
                        e.tryUnsubscribe(), (e.onStateChange = null);
                      }
                    );
                  },
                  [a, c]
                );
                var u = n || de;
                return o.a.createElement(u.Provider, { value: a }, i);
              },
              ge =
                "undefined" != typeof window &&
                void 0 !== window.document &&
                void 0 !== window.document.createElement
                  ? r.useLayoutEffect
                  : r.useEffect,
              we = [],
              Oe = [null, null];
            function Ee(e, t) {
              var n = e[1];
              return [t.payload, n + 1];
            }
            function Pe(e, t, n) {
              ge(function() {
                return e.apply(void 0, t);
              }, n);
            }
            function xe(e, t, n, r, o, i, a) {
              (e.current = r),
                (t.current = o),
                (n.current = !1),
                i.current && ((i.current = null), a());
            }
            function Se(e, t, n, r, o, i, a, c, u, s) {
              if (e) {
                var f = !1,
                  l = null,
                  p = function() {
                    if (!f) {
                      var e,
                        n,
                        p = t.getState();
                      try {
                        e = r(p, o.current);
                      } catch (e) {
                        (n = e), (l = e);
                      }
                      n || (l = null),
                        e === i.current
                          ? a.current || u()
                          : ((i.current = e),
                            (c.current = e),
                            (a.current = !0),
                            s({
                              type: "STORE_UPDATED",
                              payload: { error: n }
                            }));
                    }
                  };
                (n.onStateChange = p), n.trySubscribe(), p();
                return function() {
                  if (
                    ((f = !0), n.tryUnsubscribe(), (n.onStateChange = null), l)
                  )
                    throw l;
                };
              }
            }
            var Ce = function() {
              return [null, 0];
            };
            function je(e, t) {
              void 0 === t && (t = {});
              var n = t,
                i = n.getDisplayName,
                a =
                  void 0 === i
                    ? function(e) {
                        return "ConnectAdvanced(" + e + ")";
                      }
                    : i,
                c = n.methodName,
                u = void 0 === c ? "connectAdvanced" : c,
                s = n.renderCountProp,
                f = void 0 === s ? void 0 : s,
                l = n.shouldHandleStateChanges,
                d = void 0 === l || l,
                h = n.storeKey,
                m = void 0 === h ? "store" : h,
                v = (n.withRef, n.forwardRef),
                y = void 0 !== v && v,
                b = n.context,
                g = void 0 === b ? de : b,
                w = H(n, [
                  "getDisplayName",
                  "methodName",
                  "renderCountProp",
                  "shouldHandleStateChanges",
                  "storeKey",
                  "withRef",
                  "forwardRef",
                  "context"
                ]),
                O = g;
              return function(t) {
                var n = t.displayName || t.name || "Component",
                  i = a(n),
                  c = p({}, w, {
                    getDisplayName: a,
                    methodName: u,
                    renderCountProp: f,
                    shouldHandleStateChanges: d,
                    storeKey: m,
                    displayName: i,
                    wrappedComponentName: n,
                    WrappedComponent: t
                  }),
                  s = w.pure;
                var l = s
                  ? r.useMemo
                  : function(e) {
                      return e();
                    };
                function h(n) {
                  var i = Object(r.useMemo)(
                      function() {
                        var e = n.forwardedRef,
                          t = H(n, ["forwardedRef"]);
                        return [n.context, e, t];
                      },
                      [n]
                    ),
                    a = i[0],
                    u = i[1],
                    s = i[2],
                    f = Object(r.useMemo)(
                      function() {
                        return a &&
                          a.Consumer &&
                          Object(W.isContextConsumer)(
                            o.a.createElement(a.Consumer, null)
                          )
                          ? a
                          : O;
                      },
                      [a, O]
                    ),
                    h = Object(r.useContext)(f),
                    m =
                      Boolean(n.store) &&
                      Boolean(n.store.getState) &&
                      Boolean(n.store.dispatch);
                  Boolean(h) && Boolean(h.store);
                  var v = m ? n.store : h.store,
                    y = Object(r.useMemo)(
                      function() {
                        return (function(t) {
                          return e(t.dispatch, c);
                        })(v);
                      },
                      [v]
                    ),
                    b = Object(r.useMemo)(
                      function() {
                        if (!d) return Oe;
                        var e = new ye(v, m ? null : h.subscription),
                          t = e.notifyNestedSubs.bind(e);
                        return [e, t];
                      },
                      [v, m, h]
                    ),
                    g = b[0],
                    w = b[1],
                    E = Object(r.useMemo)(
                      function() {
                        return m ? h : p({}, h, { subscription: g });
                      },
                      [m, h, g]
                    ),
                    P = Object(r.useReducer)(Ee, we, Ce),
                    x = P[0][0],
                    S = P[1];
                  if (x && x.error) throw x.error;
                  var C = Object(r.useRef)(),
                    j = Object(r.useRef)(s),
                    R = Object(r.useRef)(),
                    T = Object(r.useRef)(!1),
                    k = l(
                      function() {
                        return R.current && s === j.current
                          ? R.current
                          : y(v.getState(), s);
                      },
                      [v, x, s]
                    );
                  Pe(xe, [j, C, T, s, k, R, w]),
                    Pe(Se, [d, v, g, y, j, C, T, R, w, S], [v, g, y]);
                  var N = Object(r.useMemo)(
                    function() {
                      return o.a.createElement(t, p({}, k, { ref: u }));
                    },
                    [u, t, k]
                  );
                  return Object(r.useMemo)(
                    function() {
                      return d
                        ? o.a.createElement(f.Provider, { value: E }, N)
                        : N;
                    },
                    [f, N, E]
                  );
                }
                var v = s ? o.a.memo(h) : h;
                if (((v.WrappedComponent = t), (v.displayName = i), y)) {
                  var b = o.a.forwardRef(function(e, t) {
                    return o.a.createElement(v, p({}, e, { forwardedRef: t }));
                  });
                  return (
                    (b.displayName = i), (b.WrappedComponent = t), K()(b, t)
                  );
                }
                return K()(v, t);
              };
            }
            function Re(e, t) {
              return e === t
                ? 0 !== e || 0 !== t || 1 / e == 1 / t
                : e != e && t != t;
            }
            function Te(e, t) {
              if (Re(e, t)) return !0;
              if (
                "object" != typeof e ||
                null === e ||
                "object" != typeof t ||
                null === t
              )
                return !1;
              var n = Object.keys(e),
                r = Object.keys(t);
              if (n.length !== r.length) return !1;
              for (var o = 0; o < n.length; o++)
                if (
                  !Object.prototype.hasOwnProperty.call(t, n[o]) ||
                  !Re(e[n[o]], t[n[o]])
                )
                  return !1;
              return !0;
            }
            var ke = n(3);
            function Ne(e) {
              return function(t, n) {
                var r = e(t, n);
                function o() {
                  return r;
                }
                return (o.dependsOnOwnProps = !1), o;
              };
            }
            function Me(e) {
              return null !== e.dependsOnOwnProps &&
                void 0 !== e.dependsOnOwnProps
                ? Boolean(e.dependsOnOwnProps)
                : 1 !== e.length;
            }
            function Ae(e, t) {
              return function(t, n) {
                n.displayName;
                var r = function(e, t) {
                  return r.dependsOnOwnProps
                    ? r.mapToProps(e, t)
                    : r.mapToProps(e);
                };
                return (
                  (r.dependsOnOwnProps = !0),
                  (r.mapToProps = function(t, n) {
                    (r.mapToProps = e), (r.dependsOnOwnProps = Me(e));
                    var o = r(t, n);
                    return (
                      "function" == typeof o &&
                        ((r.mapToProps = o),
                        (r.dependsOnOwnProps = Me(o)),
                        (o = r(t, n))),
                      o
                    );
                  }),
                  r
                );
              };
            }
            var _e = [
              function(e) {
                return "function" == typeof e ? Ae(e) : void 0;
              },
              function(e) {
                return e
                  ? void 0
                  : Ne(function(e) {
                      return { dispatch: e };
                    });
              },
              function(e) {
                return e && "object" == typeof e
                  ? Ne(function(t) {
                      return Object(ke.a)(e, t);
                    })
                  : void 0;
              }
            ];
            var De = [
              function(e) {
                return "function" == typeof e ? Ae(e) : void 0;
              },
              function(e) {
                return e
                  ? void 0
                  : Ne(function() {
                      return {};
                    });
              }
            ];
            function Le(e, t, n) {
              return p({}, n, {}, e, {}, t);
            }
            var $e = [
              function(e) {
                return "function" == typeof e
                  ? (function(e) {
                      return function(t, n) {
                        n.displayName;
                        var r,
                          o = n.pure,
                          i = n.areMergedPropsEqual,
                          a = !1;
                        return function(t, n, c) {
                          var u = e(t, n, c);
                          return (
                            a ? (o && i(u, r)) || (r = u) : ((a = !0), (r = u)),
                            r
                          );
                        };
                      };
                    })(e)
                  : void 0;
              },
              function(e) {
                return e
                  ? void 0
                  : function() {
                      return Le;
                    };
              }
            ];
            function Ie(e, t, n, r) {
              return function(o, i) {
                return n(e(o, i), t(r, i), i);
              };
            }
            function Ue(e, t, n, r, o) {
              var i,
                a,
                c,
                u,
                s,
                f = o.areStatesEqual,
                l = o.areOwnPropsEqual,
                p = o.areStatePropsEqual,
                d = !1;
              function h(o, d) {
                var h,
                  m,
                  v = !l(d, a),
                  y = !f(o, i);
                return (
                  (i = o),
                  (a = d),
                  v && y
                    ? ((c = e(i, a)),
                      t.dependsOnOwnProps && (u = t(r, a)),
                      (s = n(c, u, a)))
                    : v
                    ? (e.dependsOnOwnProps && (c = e(i, a)),
                      t.dependsOnOwnProps && (u = t(r, a)),
                      (s = n(c, u, a)))
                    : y
                    ? ((h = e(i, a)),
                      (m = !p(h, c)),
                      (c = h),
                      m && (s = n(c, u, a)),
                      s)
                    : s
                );
              }
              return function(o, f) {
                return d
                  ? h(o, f)
                  : ((c = e((i = o), (a = f))),
                    (u = t(r, a)),
                    (s = n(c, u, a)),
                    (d = !0),
                    s);
              };
            }
            function Be(e, t) {
              var n = t.initMapStateToProps,
                r = t.initMapDispatchToProps,
                o = t.initMergeProps,
                i = H(t, [
                  "initMapStateToProps",
                  "initMapDispatchToProps",
                  "initMergeProps"
                ]),
                a = n(e, i),
                c = r(e, i),
                u = o(e, i);
              return (i.pure ? Ue : Ie)(a, c, u, e, i);
            }
            function qe(e, t, n) {
              for (var r = t.length - 1; r >= 0; r--) {
                var o = t[r](e);
                if (o) return o;
              }
              return function(t, r) {
                throw new Error(
                  "Invalid value of type " +
                    typeof e +
                    " for " +
                    n +
                    " argument when connecting component " +
                    r.wrappedComponentName +
                    "."
                );
              };
            }
            function Fe(e, t) {
              return e === t;
            }
            function We(e) {
              var t = void 0 === e ? {} : e,
                n = t.connectHOC,
                r = void 0 === n ? je : n,
                o = t.mapStateToPropsFactories,
                i = void 0 === o ? De : o,
                a = t.mapDispatchToPropsFactories,
                c = void 0 === a ? _e : a,
                u = t.mergePropsFactories,
                s = void 0 === u ? $e : u,
                f = t.selectorFactory,
                l = void 0 === f ? Be : f;
              return function(e, t, n, o) {
                void 0 === o && (o = {});
                var a = o,
                  u = a.pure,
                  f = void 0 === u || u,
                  d = a.areStatesEqual,
                  h = void 0 === d ? Fe : d,
                  m = a.areOwnPropsEqual,
                  v = void 0 === m ? Te : m,
                  y = a.areStatePropsEqual,
                  b = void 0 === y ? Te : y,
                  g = a.areMergedPropsEqual,
                  w = void 0 === g ? Te : g,
                  O = H(a, [
                    "pure",
                    "areStatesEqual",
                    "areOwnPropsEqual",
                    "areStatePropsEqual",
                    "areMergedPropsEqual"
                  ]),
                  E = qe(e, i, "mapStateToProps"),
                  P = qe(t, c, "mapDispatchToProps"),
                  x = qe(n, s, "mergeProps");
                return r(
                  l,
                  p(
                    {
                      methodName: "connect",
                      getDisplayName: function(e) {
                        return "Connect(" + e + ")";
                      },
                      shouldHandleStateChanges: Boolean(e),
                      initMapStateToProps: E,
                      initMapDispatchToProps: P,
                      initMergeProps: x,
                      pure: f,
                      areStatesEqual: h,
                      areOwnPropsEqual: v,
                      areStatePropsEqual: b,
                      areMergedPropsEqual: w
                    },
                    O
                  )
                );
              };
            }
            var He = We();
            var Ge;
            (Ge = i.unstable_batchedUpdates), (he = Ge);
            var Ke = He(function(e) {
              return { selectedTimeline: e.reducer.selectedTimeline };
            })(function(e) {
              var t = e.store.getState().reducer,
                n = t.selectedTimeline,
                r = t.timelines.map(function(e) {
                  return o.a.createElement(
                    "span",
                    { key: "".concat(e.year, "-").concat(e.month) },
                    e.year,
                    " - ",
                    e.month,
                    ", selected: ",
                    n.year,
                    " -",
                    " ",
                    n.month
                  );
                });
              return o.a.createElement(
                "div",
                { className: "flex" },
                o.a.createElement("div", { className: "p-6 w-1/3" }, r)
              );
            });
            function Ve(e) {
              return (Ve =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function(e) {
                      return typeof e;
                    }
                  : function(e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    })(e);
            }
            function ze() {
              return (ze =
                Object.assign ||
                function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }).apply(this, arguments);
            }
            function Ye(e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            }
            function Je(e, t) {
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                (r.enumerable = r.enumerable || !1),
                  (r.configurable = !0),
                  "value" in r && (r.writable = !0),
                  Object.defineProperty(e, r.key, r);
              }
            }
            function Qe(e, t) {
              return !t || ("object" !== Ve(t) && "function" != typeof t)
                ? Xe(e)
                : t;
            }
            function Xe(e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return e;
            }
            function Ze() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Date.prototype.toString.call(
                    Reflect.construct(Date, [], function() {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            }
            function et(e) {
              return (et = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
            }
            function tt(e, t) {
              return (tt =
                Object.setPrototypeOf ||
                function(e, t) {
                  return (e.__proto__ = t), e;
                })(e, t);
            }
            function nt(e, t, n) {
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
            var rt = (function(e) {
                !(function(e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: { value: e, writable: !0, configurable: !0 }
                  })),
                    t && tt(e, t);
                })(c, e);
                var t,
                  n,
                  r,
                  i,
                  a =
                    ((t = c),
                    function() {
                      var e,
                        n = et(t);
                      if (Ze()) {
                        var r = et(this).constructor;
                        e = Reflect.construct(n, arguments, r);
                      } else e = n.apply(this, arguments);
                      return Qe(this, e);
                    });
                function c() {
                  var e;
                  Ye(this, c);
                  for (
                    var t = arguments.length, n = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    n[r] = arguments[r];
                  return (
                    nt(Xe((e = a.call.apply(a, [this].concat(n)))), "state", {
                      hasError: !1,
                      store: e.props.store,
                      globalEventDistributor: e.props.globalEventDistributor
                    }),
                    e
                  );
                }
                return (
                  (n = c),
                  (r = [
                    {
                      key: "componentDidCatch",
                      value: function(e, t) {
                        this.setState({ hasError: !0 });
                      }
                    },
                    {
                      key: "render",
                      value: function() {
                        var e = this;
                        return this.state.hasError
                          ? o.a.createElement("div", null, "Error")
                          : o.a.createElement(
                              "div",
                              { className: "mt-16" },
                              o.a.createElement(
                                be,
                                { store: this.state.store },
                                o.a.createElement(
                                  oe,
                                  null,
                                  o.a.createElement(X, {
                                    path: "/",
                                    render: function(t) {
                                      return o.a.createElement(
                                        Ke,
                                        ze({}, t, e.props)
                                      );
                                    }
                                  })
                                )
                              )
                            );
                      }
                    }
                  ]) && Je(n.prototype, r),
                  i && Je(n, i),
                  c
                );
              })(o.a.Component),
              ot = u()({ React: o.a, ReactDOM: a.a, rootComponent: rt }),
              it = ot.bootstrap,
              at = ot.mount,
              ct = ot.unmount;
          }
        ])
      );
    }
  };
});
//# sourceMappingURL=app.js.map
