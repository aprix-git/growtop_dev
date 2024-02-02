var Ye = function(t, e) {
  return Ye = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, s) {
    i.__proto__ = s;
  } || function(i, s) {
    for (var n in s)
      Object.prototype.hasOwnProperty.call(s, n) && (i[n] = s[n]);
  }, Ye(t, e);
};
function ce(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Ye(t, e);
  function i() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
function zt(t, e, i, s) {
  function n(r) {
    return r instanceof i ? r : new i(function(l) {
      l(r);
    });
  }
  return new (i || (i = Promise))(function(r, l) {
    function d(u) {
      try {
        o(s.next(u));
      } catch (c) {
        l(c);
      }
    }
    function a(u) {
      try {
        o(s.throw(u));
      } catch (c) {
        l(c);
      }
    }
    function o(u) {
      u.done ? r(u.value) : n(u.value).then(d, a);
    }
    o((s = s.apply(t, e || [])).next());
  });
}
function gt(t, e) {
  var i = { label: 0, sent: function() {
    if (r[0] & 1)
      throw r[1];
    return r[1];
  }, trys: [], ops: [] }, s, n, r, l;
  return l = { next: d(0), throw: d(1), return: d(2) }, typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function d(o) {
    return function(u) {
      return a([o, u]);
    };
  }
  function a(o) {
    if (s)
      throw new TypeError("Generator is already executing.");
    for (; l && (l = 0, o[0] && (i = 0)), i; )
      try {
        if (s = 1, n && (r = o[0] & 2 ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, o[1])).done)
          return r;
        switch (n = 0, r && (o = [o[0] & 2, r.value]), o[0]) {
          case 0:
          case 1:
            r = o;
            break;
          case 4:
            return i.label++, { value: o[1], done: !1 };
          case 5:
            i.label++, n = o[1], o = [0];
            continue;
          case 7:
            o = i.ops.pop(), i.trys.pop();
            continue;
          default:
            if (r = i.trys, !(r = r.length > 0 && r[r.length - 1]) && (o[0] === 6 || o[0] === 2)) {
              i = 0;
              continue;
            }
            if (o[0] === 3 && (!r || o[1] > r[0] && o[1] < r[3])) {
              i.label = o[1];
              break;
            }
            if (o[0] === 6 && i.label < r[1]) {
              i.label = r[1], r = o;
              break;
            }
            if (r && i.label < r[2]) {
              i.label = r[2], i.ops.push(o);
              break;
            }
            r[2] && i.ops.pop(), i.trys.pop();
            continue;
        }
        o = e.call(t, i);
      } catch (u) {
        o = [6, u], n = 0;
      } finally {
        s = r = 0;
      }
    if (o[0] & 5)
      throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
function ve(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, i = e && t[e], s = 0;
  if (i)
    return i.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && s >= t.length && (t = void 0), { value: t && t[s++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function te(t, e) {
  var i = typeof Symbol == "function" && t[Symbol.iterator];
  if (!i)
    return t;
  var s = i.call(t), n, r = [], l;
  try {
    for (; (e === void 0 || e-- > 0) && !(n = s.next()).done; )
      r.push(n.value);
  } catch (d) {
    l = { error: d };
  } finally {
    try {
      n && !n.done && (i = s.return) && i.call(s);
    } finally {
      if (l)
        throw l.error;
    }
  }
  return r;
}
function re(t, e, i) {
  if (i || arguments.length === 2)
    for (var s = 0, n = e.length, r; s < n; s++)
      (r || !(s in e)) && (r || (r = Array.prototype.slice.call(e, 0, s)), r[s] = e[s]);
  return t.concat(r || Array.prototype.slice.call(e));
}
function oe(t) {
  return this instanceof oe ? (this.v = t, this) : new oe(t);
}
function Ot(t, e, i) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var s = i.apply(t, e || []), n, r = [];
  return n = {}, l("next"), l("throw"), l("return"), n[Symbol.asyncIterator] = function() {
    return this;
  }, n;
  function l(f) {
    s[f] && (n[f] = function(p) {
      return new Promise(function(w, g) {
        r.push([f, p, w, g]) > 1 || d(f, p);
      });
    });
  }
  function d(f, p) {
    try {
      a(s[f](p));
    } catch (w) {
      c(r[0][3], w);
    }
  }
  function a(f) {
    f.value instanceof oe ? Promise.resolve(f.value.v).then(o, u) : c(r[0][2], f);
  }
  function o(f) {
    d("next", f);
  }
  function u(f) {
    d("throw", f);
  }
  function c(f, p) {
    f(p), r.shift(), r.length && d(r[0][0], r[0][1]);
  }
}
function kt(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], i;
  return e ? e.call(t) : (t = typeof ve == "function" ? ve(t) : t[Symbol.iterator](), i = {}, s("next"), s("throw"), s("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function s(r) {
    i[r] = t[r] && function(l) {
      return new Promise(function(d, a) {
        l = t[r](l), n(d, a, l.done, l.value);
      });
    };
  }
  function n(r, l, d, a) {
    Promise.resolve(a).then(function(o) {
      r({ value: o, done: d });
    }, l);
  }
}
function B(t) {
  return typeof t == "function";
}
function $t(t) {
  var e = function(s) {
    Error.call(s), s.stack = new Error().stack;
  }, i = t(e);
  return i.prototype = Object.create(Error.prototype), i.prototype.constructor = i, i;
}
var Ge = $t(function(t) {
  return function(i) {
    t(this), this.message = i ? i.length + ` errors occurred during unsubscription:
` + i.map(function(s, n) {
      return n + 1 + ") " + s.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = i;
  };
});
function Fe(t, e) {
  if (t) {
    var i = t.indexOf(e);
    0 <= i && t.splice(i, 1);
  }
}
var Ie = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, i, s, n, r;
    if (!this.closed) {
      this.closed = !0;
      var l = this._parentage;
      if (l)
        if (this._parentage = null, Array.isArray(l))
          try {
            for (var d = ve(l), a = d.next(); !a.done; a = d.next()) {
              var o = a.value;
              o.remove(this);
            }
          } catch (g) {
            e = { error: g };
          } finally {
            try {
              a && !a.done && (i = d.return) && i.call(d);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          l.remove(this);
      var u = this.initialTeardown;
      if (B(u))
        try {
          u();
        } catch (g) {
          r = g instanceof Ge ? g.errors : [g];
        }
      var c = this._finalizers;
      if (c) {
        this._finalizers = null;
        try {
          for (var f = ve(c), p = f.next(); !p.done; p = f.next()) {
            var w = p.value;
            try {
              at(w);
            } catch (g) {
              r = r ?? [], g instanceof Ge ? r = re(re([], te(r)), te(g.errors)) : r.push(g);
            }
          }
        } catch (g) {
          s = { error: g };
        } finally {
          try {
            p && !p.done && (n = f.return) && n.call(f);
          } finally {
            if (s)
              throw s.error;
          }
        }
      }
      if (r)
        throw new Ge(r);
    }
  }, t.prototype.add = function(e) {
    var i;
    if (e && e !== this)
      if (this.closed)
        at(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (i = this._finalizers) !== null && i !== void 0 ? i : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var i = this._parentage;
    return i === e || Array.isArray(i) && i.includes(e);
  }, t.prototype._addParent = function(e) {
    var i = this._parentage;
    this._parentage = Array.isArray(i) ? (i.push(e), i) : i ? [i, e] : e;
  }, t.prototype._removeParent = function(e) {
    var i = this._parentage;
    i === e ? this._parentage = null : Array.isArray(i) && Fe(i, e);
  }, t.prototype.remove = function(e) {
    var i = this._finalizers;
    i && Fe(i, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
Ie.EMPTY;
function vt(t) {
  return t instanceof Ie || t && "closed" in t && B(t.remove) && B(t.add) && B(t.unsubscribe);
}
function at(t) {
  B(t) ? t() : t.unsubscribe();
}
var wt = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Ne = {
  setTimeout: function(t, e) {
    for (var i = [], s = 2; s < arguments.length; s++)
      i[s - 2] = arguments[s];
    var n = Ne.delegate;
    return n != null && n.setTimeout ? n.setTimeout.apply(n, re([t, e], te(i))) : setTimeout.apply(void 0, re([t, e], te(i)));
  },
  clearTimeout: function(t) {
    var e = Ne.delegate;
    return ((e == null ? void 0 : e.clearTimeout) || clearTimeout)(t);
  },
  delegate: void 0
};
function yt(t) {
  Ne.setTimeout(function() {
    throw t;
  });
}
function lt() {
}
function Dt(t) {
  t();
}
var Ze = function(t) {
  ce(e, t);
  function e(i) {
    var s = t.call(this) || this;
    return s.isStopped = !1, i ? (s.destination = i, vt(i) && i.add(s)) : s.destination = _t, s;
  }
  return e.create = function(i, s, n) {
    return new We(i, s, n);
  }, e.prototype.next = function(i) {
    this.isStopped || this._next(i);
  }, e.prototype.error = function(i) {
    this.isStopped || (this.isStopped = !0, this._error(i));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(i) {
    this.destination.next(i);
  }, e.prototype._error = function(i) {
    try {
      this.destination.error(i);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(Ie), Gt = Function.prototype.bind;
function He(t, e) {
  return Gt.call(t, e);
}
var Ht = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var i = this.partialObserver;
    if (i.next)
      try {
        i.next(e);
      } catch (s) {
        Te(s);
      }
  }, t.prototype.error = function(e) {
    var i = this.partialObserver;
    if (i.error)
      try {
        i.error(e);
      } catch (s) {
        Te(s);
      }
    else
      Te(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (i) {
        Te(i);
      }
  }, t;
}(), We = function(t) {
  ce(e, t);
  function e(i, s, n) {
    var r = t.call(this) || this, l;
    if (B(i) || !i)
      l = {
        next: i ?? void 0,
        error: s ?? void 0,
        complete: n ?? void 0
      };
    else {
      var d;
      r && wt.useDeprecatedNextContext ? (d = Object.create(i), d.unsubscribe = function() {
        return r.unsubscribe();
      }, l = {
        next: i.next && He(i.next, d),
        error: i.error && He(i.error, d),
        complete: i.complete && He(i.complete, d)
      }) : l = i;
    }
    return r.destination = new Ht(l), r;
  }
  return e;
}(Ze);
function Te(t) {
  yt(t);
}
function Vt(t) {
  throw t;
}
var _t = {
  closed: !0,
  next: lt,
  error: Vt,
  complete: lt
}, Qe = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function bt(t) {
  return t;
}
function Bt(t) {
  return t.length === 0 ? bt : t.length === 1 ? t[0] : function(i) {
    return t.reduce(function(s, n) {
      return n(s);
    }, i);
  };
}
var ae = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var i = new t();
    return i.source = this, i.operator = e, i;
  }, t.prototype.subscribe = function(e, i, s) {
    var n = this, r = qt(e) ? e : new We(e, i, s);
    return Dt(function() {
      var l = n, d = l.operator, a = l.source;
      r.add(d ? d.call(r, a) : a ? n._subscribe(r) : n._trySubscribe(r));
    }), r;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (i) {
      e.error(i);
    }
  }, t.prototype.forEach = function(e, i) {
    var s = this;
    return i = ot(i), new i(function(n, r) {
      var l = new We({
        next: function(d) {
          try {
            e(d);
          } catch (a) {
            r(a), l.unsubscribe();
          }
        },
        error: r,
        complete: n
      });
      s.subscribe(l);
    });
  }, t.prototype._subscribe = function(e) {
    var i;
    return (i = this.source) === null || i === void 0 ? void 0 : i.subscribe(e);
  }, t.prototype[Qe] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], i = 0; i < arguments.length; i++)
      e[i] = arguments[i];
    return Bt(e)(this);
  }, t.prototype.toPromise = function(e) {
    var i = this;
    return e = ot(e), new e(function(s, n) {
      var r;
      i.subscribe(function(l) {
        return r = l;
      }, function(l) {
        return n(l);
      }, function() {
        return s(r);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function ot(t) {
  var e;
  return (e = t ?? wt.Promise) !== null && e !== void 0 ? e : Promise;
}
function Rt(t) {
  return t && B(t.next) && B(t.error) && B(t.complete);
}
function qt(t) {
  return t && t instanceof Ze || Rt(t) && vt(t);
}
function Xt(t) {
  return B(t == null ? void 0 : t.lift);
}
function Ae(t) {
  return function(e) {
    if (Xt(e))
      return e.lift(function(i) {
        try {
          return t(i, this);
        } catch (s) {
          this.error(s);
        }
      });
    throw new TypeError("Unable to lift unknown Observable type");
  };
}
function we(t, e, i, s, n) {
  return new Yt(t, e, i, s, n);
}
var Yt = function(t) {
  ce(e, t);
  function e(i, s, n, r, l, d) {
    var a = t.call(this, i) || this;
    return a.onFinalize = l, a.shouldUnsubscribe = d, a._next = s ? function(o) {
      try {
        s(o);
      } catch (u) {
        i.error(u);
      }
    } : t.prototype._next, a._error = r ? function(o) {
      try {
        r(o);
      } catch (u) {
        i.error(u);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, a._complete = n ? function() {
      try {
        n();
      } catch (o) {
        i.error(o);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, a;
  }
  return e.prototype.unsubscribe = function() {
    var i;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var s = this.closed;
      t.prototype.unsubscribe.call(this), !s && ((i = this.onFinalize) === null || i === void 0 || i.call(this));
    }
  }, e;
}(Ze), St = {
  now: function() {
    return (St.delegate || Date).now();
  },
  delegate: void 0
}, Ft = function(t) {
  ce(e, t);
  function e(i, s) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(i, s) {
    return this;
  }, e;
}(Ie), Pe = {
  setInterval: function(t, e) {
    for (var i = [], s = 2; s < arguments.length; s++)
      i[s - 2] = arguments[s];
    var n = Pe.delegate;
    return n != null && n.setInterval ? n.setInterval.apply(n, re([t, e], te(i))) : setInterval.apply(void 0, re([t, e], te(i)));
  },
  clearInterval: function(t) {
    var e = Pe.delegate;
    return ((e == null ? void 0 : e.clearInterval) || clearInterval)(t);
  },
  delegate: void 0
}, Nt = function(t) {
  ce(e, t);
  function e(i, s) {
    var n = t.call(this, i, s) || this;
    return n.scheduler = i, n.work = s, n.pending = !1, n;
  }
  return e.prototype.schedule = function(i, s) {
    var n;
    if (s === void 0 && (s = 0), this.closed)
      return this;
    this.state = i;
    var r = this.id, l = this.scheduler;
    return r != null && (this.id = this.recycleAsyncId(l, r, s)), this.pending = !0, this.delay = s, this.id = (n = this.id) !== null && n !== void 0 ? n : this.requestAsyncId(l, this.id, s), this;
  }, e.prototype.requestAsyncId = function(i, s, n) {
    return n === void 0 && (n = 0), Pe.setInterval(i.flush.bind(i, this), n);
  }, e.prototype.recycleAsyncId = function(i, s, n) {
    if (n === void 0 && (n = 0), n != null && this.delay === n && this.pending === !1)
      return s;
    s != null && Pe.clearInterval(s);
  }, e.prototype.execute = function(i, s) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var n = this._execute(i, s);
    if (n)
      return n;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(i, s) {
    var n = !1, r;
    try {
      this.work(i);
    } catch (l) {
      n = !0, r = l || new Error("Scheduled action threw falsy error");
    }
    if (n)
      return this.unsubscribe(), r;
  }, e.prototype.unsubscribe = function() {
    if (!this.closed) {
      var i = this, s = i.id, n = i.scheduler, r = n.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, Fe(r, this), s != null && (this.id = this.recycleAsyncId(n, s, null)), this.delay = null, t.prototype.unsubscribe.call(this);
    }
  }, e;
}(Ft), dt = function() {
  function t(e, i) {
    i === void 0 && (i = t.now), this.schedulerActionCtor = e, this.now = i;
  }
  return t.prototype.schedule = function(e, i, s) {
    return i === void 0 && (i = 0), new this.schedulerActionCtor(this, e).schedule(s, i);
  }, t.now = St.now, t;
}(), Wt = function(t) {
  ce(e, t);
  function e(i, s) {
    s === void 0 && (s = dt.now);
    var n = t.call(this, i, s) || this;
    return n.actions = [], n._active = !1, n;
  }
  return e.prototype.flush = function(i) {
    var s = this.actions;
    if (this._active) {
      s.push(i);
      return;
    }
    var n;
    this._active = !0;
    do
      if (n = i.execute(i.state, i.delay))
        break;
    while (i = s.shift());
    if (this._active = !1, n) {
      for (; i = s.shift(); )
        i.unsubscribe();
      throw n;
    }
  }, e;
}(dt), jt = new Wt(Nt), Et = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Ut(t) {
  return B(t == null ? void 0 : t.then);
}
function Kt(t) {
  return B(t[Qe]);
}
function Zt(t) {
  return Symbol.asyncIterator && B(t == null ? void 0 : t[Symbol.asyncIterator]);
}
function Qt(t) {
  return new TypeError("You provided " + (t !== null && typeof t == "object" ? "an invalid object" : "'" + t + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Jt() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var ei = Jt();
function ti(t) {
  return B(t == null ? void 0 : t[ei]);
}
function ii(t) {
  return Ot(this, arguments, function() {
    var i, s, n, r;
    return gt(this, function(l) {
      switch (l.label) {
        case 0:
          i = t.getReader(), l.label = 1;
        case 1:
          l.trys.push([1, , 9, 10]), l.label = 2;
        case 2:
          return [4, oe(i.read())];
        case 3:
          return s = l.sent(), n = s.value, r = s.done, r ? [4, oe(void 0)] : [3, 5];
        case 4:
          return [2, l.sent()];
        case 5:
          return [4, oe(n)];
        case 6:
          return [4, l.sent()];
        case 7:
          return l.sent(), [3, 2];
        case 8:
          return [3, 10];
        case 9:
          return i.releaseLock(), [7];
        case 10:
          return [2];
      }
    });
  });
}
function si(t) {
  return B(t == null ? void 0 : t.getReader);
}
function Je(t) {
  if (t instanceof ae)
    return t;
  if (t != null) {
    if (Kt(t))
      return ri(t);
    if (Et(t))
      return ni(t);
    if (Ut(t))
      return ai(t);
    if (Zt(t))
      return xt(t);
    if (ti(t))
      return li(t);
    if (si(t))
      return oi(t);
  }
  throw Qt(t);
}
function ri(t) {
  return new ae(function(e) {
    var i = t[Qe]();
    if (B(i.subscribe))
      return i.subscribe(e);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function ni(t) {
  return new ae(function(e) {
    for (var i = 0; i < t.length && !e.closed; i++)
      e.next(t[i]);
    e.complete();
  });
}
function ai(t) {
  return new ae(function(e) {
    t.then(function(i) {
      e.closed || (e.next(i), e.complete());
    }, function(i) {
      return e.error(i);
    }).then(null, yt);
  });
}
function li(t) {
  return new ae(function(e) {
    var i, s;
    try {
      for (var n = ve(t), r = n.next(); !r.done; r = n.next()) {
        var l = r.value;
        if (e.next(l), e.closed)
          return;
      }
    } catch (d) {
      i = { error: d };
    } finally {
      try {
        r && !r.done && (s = n.return) && s.call(n);
      } finally {
        if (i)
          throw i.error;
      }
    }
    e.complete();
  });
}
function xt(t) {
  return new ae(function(e) {
    di(t, e).catch(function(i) {
      return e.error(i);
    });
  });
}
function oi(t) {
  return xt(ii(t));
}
function di(t, e) {
  var i, s, n, r;
  return zt(this, void 0, void 0, function() {
    var l, d;
    return gt(this, function(a) {
      switch (a.label) {
        case 0:
          a.trys.push([0, 5, 6, 11]), i = kt(t), a.label = 1;
        case 1:
          return [4, i.next()];
        case 2:
          if (s = a.sent(), !!s.done)
            return [3, 4];
          if (l = s.value, e.next(l), e.closed)
            return [2];
          a.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [3, 11];
        case 5:
          return d = a.sent(), n = { error: d }, [3, 11];
        case 6:
          return a.trys.push([6, , 9, 10]), s && !s.done && (r = i.return) ? [4, r.call(i)] : [3, 8];
        case 7:
          a.sent(), a.label = 8;
        case 8:
          return [3, 10];
        case 9:
          if (n)
            throw n.error;
          return [7];
        case 10:
          return [7];
        case 11:
          return e.complete(), [2];
      }
    });
  });
}
function ci(t, e, i, s, n) {
  s === void 0 && (s = 0), n === void 0 && (n = !1);
  var r = e.schedule(function() {
    i(), n ? t.add(this.schedule(null, s)) : this.unsubscribe();
  }, s);
  if (t.add(r), !n)
    return r;
}
function Tt(t, e) {
  return Ae(function(i, s) {
    var n = 0;
    i.subscribe(we(s, function(r) {
      s.next(t.call(e, r, n++));
    }));
  });
}
var ui = Array.isArray;
function fi(t, e) {
  return ui(e) ? t.apply(void 0, re([], te(e))) : t(e);
}
function pi(t) {
  return Tt(function(e) {
    return fi(t, e);
  });
}
function mi(t, e, i, s, n, r, l, d) {
  var a = [], o = 0, u = 0, c = !1, f = function() {
    c && !a.length && !o && e.complete();
  }, p = function(g) {
    return o < s ? w(g) : a.push(g);
  }, w = function(g) {
    r && e.next(g), o++;
    var v = !1;
    Je(i(g, u++)).subscribe(we(e, function(y) {
      n == null || n(y), r ? p(y) : e.next(y);
    }, function() {
      v = !0;
    }, void 0, function() {
      if (v)
        try {
          o--;
          for (var y = function() {
            var h = a.shift();
            l ? ci(e, l, function() {
              return w(h);
            }) : w(h);
          }; a.length && o < s; )
            y();
          f();
        } catch (h) {
          e.error(h);
        }
    }));
  };
  return t.subscribe(we(e, p, function() {
    c = !0, f();
  })), function() {
    d == null || d();
  };
}
function Mt(t, e, i) {
  return i === void 0 && (i = 1 / 0), B(e) ? Mt(function(s, n) {
    return Tt(function(r, l) {
      return e(s, r, n, l);
    })(Je(t(s, n)));
  }, i) : (typeof e == "number" && (i = e), Ae(function(s, n) {
    return mi(s, n, t, i);
  }));
}
var hi = ["addListener", "removeListener"], gi = ["addEventListener", "removeEventListener"], vi = ["on", "off"];
function Q(t, e, i, s) {
  if (B(i) && (s = i, i = void 0), s)
    return Q(t, e, i).pipe(pi(s));
  var n = te(bi(t) ? gi.map(function(d) {
    return function(a) {
      return t[d](e, a, i);
    };
  }) : wi(t) ? hi.map(ct(t, e)) : yi(t) ? vi.map(ct(t, e)) : [], 2), r = n[0], l = n[1];
  if (!r && Et(t))
    return Mt(function(d) {
      return Q(d, e, i);
    })(Je(t));
  if (!r)
    throw new TypeError("Invalid event target");
  return new ae(function(d) {
    var a = function() {
      for (var o = [], u = 0; u < arguments.length; u++)
        o[u] = arguments[u];
      return d.next(1 < o.length ? o : o[0]);
    };
    return r(a), function() {
      return l(a);
    };
  });
}
function ct(t, e) {
  return function(i) {
    return function(s) {
      return t[i](e, s);
    };
  };
}
function wi(t) {
  return B(t.addListener) && B(t.removeListener);
}
function yi(t) {
  return B(t.on) && B(t.off);
}
function bi(t) {
  return B(t.addEventListener) && B(t.removeEventListener);
}
function Si(t, e) {
  return e === void 0 && (e = jt), Ae(function(i, s) {
    var n = null, r = null, l = null, d = function() {
      if (n) {
        n.unsubscribe(), n = null;
        var o = r;
        r = null, s.next(o);
      }
    };
    function a() {
      var o = l + t, u = e.now();
      if (u < o) {
        n = this.schedule(void 0, o - u), s.add(n);
        return;
      }
      d();
    }
    i.subscribe(we(s, function(o) {
      r = o, l = e.now(), n || (n = e.schedule(a, t), s.add(n));
    }, function() {
      d(), s.complete();
    }, void 0, function() {
      r = n = null;
    }));
  });
}
function Ei(t, e, i) {
  var s = B(t) || e || i ? { next: t, error: e, complete: i } : t;
  return s ? Ae(function(n, r) {
    var l;
    (l = s.subscribe) === null || l === void 0 || l.call(s);
    var d = !0;
    n.subscribe(we(r, function(a) {
      var o;
      (o = s.next) === null || o === void 0 || o.call(s, a), r.next(a);
    }, function() {
      var a;
      d = !1, (a = s.complete) === null || a === void 0 || a.call(s), r.complete();
    }, function(a) {
      var o;
      d = !1, (o = s.error) === null || o === void 0 || o.call(s, a), r.error(a);
    }, function() {
      var a, o;
      d && ((a = s.unsubscribe) === null || a === void 0 || a.call(s)), (o = s.finalize) === null || o === void 0 || o.call(s);
    }));
  }) : bt;
}
function xi(t) {
  const e = {
    tg: "https://tg",
    ws: "https://ws",
    vk: "https://vk",
    in: "https://in",
    yt: "https://yt"
  };
  if (e.hasOwnProperty(t)) {
    let i = e[t];
    alert(i), i = "", i && open(i, "_blank");
  }
  return !1;
}
function Ti(t) {
  var e = window.getComputedStyle(t).display;
  e === "none" ? (t.style.display = "block", t.style.height = t.scrollHeight + "px", setTimeout(function() {
    t.style.height = "", t.parentNode.classList.toggle("opened");
  }, 500)) : (t.style.height = t.scrollHeight + "px", setTimeout(function() {
    t.style.height = "0";
  }, 0), setTimeout(function() {
    t.style.display = "none", t.parentNode.classList.toggle("opened");
  }, 500));
}
function Mi(t) {
  let e = {};
  for (let i in t)
    e[String(i)] = {
      slidesPerView: t[i],
      slidesPerGroup: t[i]
    };
  return e;
}
function ut(t) {
  return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object;
}
function et(t, e) {
  t === void 0 && (t = {}), e === void 0 && (e = {}), Object.keys(e).forEach((i) => {
    typeof t[i] > "u" ? t[i] = e[i] : ut(e[i]) && ut(t[i]) && Object.keys(e[i]).length > 0 && et(t[i], e[i]);
  });
}
const Pt = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function F() {
  const t = typeof document < "u" ? document : {};
  return et(t, Pt), t;
}
const Pi = {
  document: Pt,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(t) {
    return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0);
  },
  cancelAnimationFrame(t) {
    typeof setTimeout > "u" || clearTimeout(t);
  }
};
function R() {
  const t = typeof window < "u" ? window : {};
  return et(t, Pi), t;
}
function J(t) {
  return t === void 0 && (t = ""), t.trim().split(" ").filter((e) => !!e.trim());
}
function Ci(t) {
  const e = t;
  Object.keys(e).forEach((i) => {
    try {
      e[i] = null;
    } catch {
    }
    try {
      delete e[i];
    } catch {
    }
  });
}
function ne(t, e) {
  return e === void 0 && (e = 0), setTimeout(t, e);
}
function U() {
  return Date.now();
}
function Li(t) {
  const e = R();
  let i;
  return e.getComputedStyle && (i = e.getComputedStyle(t, null)), !i && t.currentStyle && (i = t.currentStyle), i || (i = t.style), i;
}
function je(t, e) {
  e === void 0 && (e = "x");
  const i = R();
  let s, n, r;
  const l = Li(t);
  return i.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((d) => d.replace(",", ".")).join(", ")), r = new i.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), s = r.toString().split(",")), e === "x" && (i.WebKitCSSMatrix ? n = r.m41 : s.length === 16 ? n = parseFloat(s[12]) : n = parseFloat(s[4])), e === "y" && (i.WebKitCSSMatrix ? n = r.m42 : s.length === 16 ? n = parseFloat(s[13]) : n = parseFloat(s[5])), n || 0;
}
function me(t) {
  return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object";
}
function Ii(t) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11);
}
function N() {
  const t = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (s != null && !Ii(s)) {
      const n = Object.keys(Object(s)).filter((r) => e.indexOf(r) < 0);
      for (let r = 0, l = n.length; r < l; r += 1) {
        const d = n[r], a = Object.getOwnPropertyDescriptor(s, d);
        a !== void 0 && a.enumerable && (me(t[d]) && me(s[d]) ? s[d].__swiper__ ? t[d] = s[d] : N(t[d], s[d]) : !me(t[d]) && me(s[d]) ? (t[d] = {}, s[d].__swiper__ ? t[d] = s[d] : N(t[d], s[d])) : t[d] = s[d]);
      }
    }
  }
  return t;
}
function he(t, e, i) {
  t.style.setProperty(e, i);
}
function Ct(t) {
  let {
    swiper: e,
    targetPosition: i,
    side: s
  } = t;
  const n = R(), r = -e.translate;
  let l = null, d;
  const a = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
  const o = i > r ? "next" : "prev", u = (f, p) => o === "next" && f >= p || o === "prev" && f <= p, c = () => {
    d = (/* @__PURE__ */ new Date()).getTime(), l === null && (l = d);
    const f = Math.max(Math.min((d - l) / a, 1), 0), p = 0.5 - Math.cos(f * Math.PI) / 2;
    let w = r + p * (i - r);
    if (u(w, i) && (w = i), e.wrapperEl.scrollTo({
      [s]: w
    }), u(w, i)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [s]: w
        });
      }), n.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = n.requestAnimationFrame(c);
  };
  c();
}
function le(t) {
  return t.querySelector(".swiper-slide-transform") || t.shadowRoot && t.shadowRoot.querySelector(".swiper-slide-transform") || t;
}
function X(t, e) {
  return e === void 0 && (e = ""), [...t.children].filter((i) => i.matches(e));
}
function Ce(t) {
  try {
    console.warn(t);
    return;
  } catch {
  }
}
function W(t, e) {
  e === void 0 && (e = []);
  const i = document.createElement(t);
  return i.classList.add(...Array.isArray(e) ? e : J(e)), i;
}
function Le(t) {
  const e = R(), i = F(), s = t.getBoundingClientRect(), n = i.body, r = t.clientTop || n.clientTop || 0, l = t.clientLeft || n.clientLeft || 0, d = t === e ? e.scrollY : t.scrollTop, a = t === e ? e.scrollX : t.scrollLeft;
  return {
    top: s.top + d - r,
    left: s.left + a - l
  };
}
function Ai(t, e) {
  const i = [];
  for (; t.previousElementSibling; ) {
    const s = t.previousElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), t = s;
  }
  return i;
}
function zi(t, e) {
  const i = [];
  for (; t.nextElementSibling; ) {
    const s = t.nextElementSibling;
    e ? s.matches(e) && i.push(s) : i.push(s), t = s;
  }
  return i;
}
function ee(t, e) {
  return R().getComputedStyle(t, null).getPropertyValue(e);
}
function ye(t) {
  let e = t, i;
  if (e) {
    for (i = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (i += 1);
    return i;
  }
}
function se(t, e) {
  const i = [];
  let s = t.parentElement;
  for (; s; )
    e ? s.matches(e) && i.push(s) : i.push(s), s = s.parentElement;
  return i;
}
function ge(t, e) {
  function i(s) {
    s.target === t && (e.call(t, s), t.removeEventListener("transitionend", i));
  }
  e && t.addEventListener("transitionend", i);
}
function Ue(t, e, i) {
  const s = R();
  return i ? t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : t.offsetWidth;
}
let Ve;
function Oi() {
  const t = R(), e = F();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
  };
}
function Lt() {
  return Ve || (Ve = Oi()), Ve;
}
let _e;
function ki(t) {
  let {
    userAgent: e
  } = t === void 0 ? {} : t;
  const i = Lt(), s = R(), n = s.navigator.platform, r = e || s.navigator.userAgent, l = {
    ios: !1,
    android: !1
  }, d = s.screen.width, a = s.screen.height, o = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = r.match(/(iPad).*OS\s([\d_]+)/);
  const c = r.match(/(iPod)(.*OS\s([\d_]+))?/), f = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), p = n === "Win32";
  let w = n === "MacIntel";
  const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !u && w && i.touch && g.indexOf(`${d}x${a}`) >= 0 && (u = r.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), w = !1), o && !p && (l.os = "android", l.android = !0), (u || f || c) && (l.os = "ios", l.ios = !0), l;
}
function $i(t) {
  return t === void 0 && (t = {}), _e || (_e = ki(t)), _e;
}
let Be;
function Di() {
  const t = R();
  let e = !1;
  function i() {
    const s = t.navigator.userAgent.toLowerCase();
    return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0;
  }
  if (i()) {
    const s = String(t.navigator.userAgent);
    if (s.includes("Version/")) {
      const [n, r] = s.split("Version/")[1].split(" ")[0].split(".").map((l) => Number(l));
      e = n < 16 || n === 16 && r < 2;
    }
  }
  return {
    isSafari: e || i(),
    needPerspectiveFix: e,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
  };
}
function Gi() {
  return Be || (Be = Di()), Be;
}
function Hi(t) {
  let {
    swiper: e,
    on: i,
    emit: s
  } = t;
  const n = R();
  let r = null, l = null;
  const d = () => {
    !e || e.destroyed || !e.initialized || (s("beforeResize"), s("resize"));
  }, a = () => {
    !e || e.destroyed || !e.initialized || (r = new ResizeObserver((c) => {
      l = n.requestAnimationFrame(() => {
        const {
          width: f,
          height: p
        } = e;
        let w = f, g = p;
        c.forEach((v) => {
          let {
            contentBoxSize: y,
            contentRect: h,
            target: m
          } = v;
          m && m !== e.el || (w = h ? h.width : (y[0] || y).inlineSize, g = h ? h.height : (y[0] || y).blockSize);
        }), (w !== f || g !== p) && d();
      });
    }), r.observe(e.el));
  }, o = () => {
    l && n.cancelAnimationFrame(l), r && r.unobserve && e.el && (r.unobserve(e.el), r = null);
  }, u = () => {
    !e || e.destroyed || !e.initialized || s("orientationchange");
  };
  i("init", () => {
    if (e.params.resizeObserver && typeof n.ResizeObserver < "u") {
      a();
      return;
    }
    n.addEventListener("resize", d), n.addEventListener("orientationchange", u);
  }), i("destroy", () => {
    o(), n.removeEventListener("resize", d), n.removeEventListener("orientationchange", u);
  });
}
function Vi(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  const r = [], l = R(), d = function(u, c) {
    c === void 0 && (c = {});
    const f = l.MutationObserver || l.WebkitMutationObserver, p = new f((w) => {
      if (e.__preventObserver__)
        return;
      if (w.length === 1) {
        n("observerUpdate", w[0]);
        return;
      }
      const g = function() {
        n("observerUpdate", w[0]);
      };
      l.requestAnimationFrame ? l.requestAnimationFrame(g) : l.setTimeout(g, 0);
    });
    p.observe(u, {
      attributes: typeof c.attributes > "u" ? !0 : c.attributes,
      childList: typeof c.childList > "u" ? !0 : c.childList,
      characterData: typeof c.characterData > "u" ? !0 : c.characterData
    }), r.push(p);
  }, a = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const u = se(e.hostEl);
        for (let c = 0; c < u.length; c += 1)
          d(u[c]);
      }
      d(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), d(e.wrapperEl, {
        attributes: !1
      });
    }
  }, o = () => {
    r.forEach((u) => {
      u.disconnect();
    }), r.splice(0, r.length);
  };
  i({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), s("init", a), s("destroy", o);
}
var _i = {
  on(t, e, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function")
      return s;
    const n = i ? "unshift" : "push";
    return t.split(" ").forEach((r) => {
      s.eventsListeners[r] || (s.eventsListeners[r] = []), s.eventsListeners[r][n](e);
    }), s;
  },
  once(t, e, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof e != "function")
      return s;
    function n() {
      s.off(t, n), n.__emitterProxy && delete n.__emitterProxy;
      for (var r = arguments.length, l = new Array(r), d = 0; d < r; d++)
        l[d] = arguments[d];
      e.apply(s, l);
    }
    return n.__emitterProxy = e, s.on(t, n, i);
  },
  onAny(t, e) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof t != "function")
      return i;
    const s = e ? "unshift" : "push";
    return i.eventsAnyListeners.indexOf(t) < 0 && i.eventsAnyListeners[s](t), i;
  },
  offAny(t) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners)
      return e;
    const i = e.eventsAnyListeners.indexOf(t);
    return i >= 0 && e.eventsAnyListeners.splice(i, 1), e;
  },
  off(t, e) {
    const i = this;
    return !i.eventsListeners || i.destroyed || !i.eventsListeners || t.split(" ").forEach((s) => {
      typeof e > "u" ? i.eventsListeners[s] = [] : i.eventsListeners[s] && i.eventsListeners[s].forEach((n, r) => {
        (n === e || n.__emitterProxy && n.__emitterProxy === e) && i.eventsListeners[s].splice(r, 1);
      });
    }), i;
  },
  emit() {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners)
      return t;
    let e, i, s;
    for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
      r[l] = arguments[l];
    return typeof r[0] == "string" || Array.isArray(r[0]) ? (e = r[0], i = r.slice(1, r.length), s = t) : (e = r[0].events, i = r[0].data, s = r[0].context || t), i.unshift(s), (Array.isArray(e) ? e : e.split(" ")).forEach((a) => {
      t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((o) => {
        o.apply(s, [a, ...i]);
      }), t.eventsListeners && t.eventsListeners[a] && t.eventsListeners[a].forEach((o) => {
        o.apply(s, i);
      });
    }), t;
  }
};
function Bi() {
  const t = this;
  let e, i;
  const s = t.el;
  typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = s.clientWidth, typeof t.params.height < "u" && t.params.height !== null ? i = t.params.height : i = s.clientHeight, !(e === 0 && t.isHorizontal() || i === 0 && t.isVertical()) && (e = e - parseInt(ee(s, "padding-left") || 0, 10) - parseInt(ee(s, "padding-right") || 0, 10), i = i - parseInt(ee(s, "padding-top") || 0, 10) - parseInt(ee(s, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(i) && (i = 0), Object.assign(t, {
    width: e,
    height: i,
    size: t.isHorizontal() ? e : i
  }));
}
function Ri() {
  const t = this;
  function e(M, I) {
    return parseFloat(M.getPropertyValue(t.getDirectionLabel(I)) || 0);
  }
  const i = t.params, {
    wrapperEl: s,
    slidesEl: n,
    size: r,
    rtlTranslate: l,
    wrongRTL: d
  } = t, a = t.virtual && i.virtual.enabled, o = a ? t.virtual.slides.length : t.slides.length, u = X(n, `.${t.params.slideClass}, swiper-slide`), c = a ? t.virtual.slides.length : u.length;
  let f = [];
  const p = [], w = [];
  let g = i.slidesOffsetBefore;
  typeof g == "function" && (g = i.slidesOffsetBefore.call(t));
  let v = i.slidesOffsetAfter;
  typeof v == "function" && (v = i.slidesOffsetAfter.call(t));
  const y = t.snapGrid.length, h = t.slidesGrid.length;
  let m = i.spaceBetween, S = -g, T = 0, C = 0;
  if (typeof r > "u")
    return;
  typeof m == "string" && m.indexOf("%") >= 0 ? m = parseFloat(m.replace("%", "")) / 100 * r : typeof m == "string" && (m = parseFloat(m)), t.virtualSize = -m, u.forEach((M) => {
    l ? M.style.marginLeft = "" : M.style.marginRight = "", M.style.marginBottom = "", M.style.marginTop = "";
  }), i.centeredSlides && i.cssMode && (he(s, "--swiper-centered-offset-before", ""), he(s, "--swiper-centered-offset-after", ""));
  const D = i.grid && i.grid.rows > 1 && t.grid;
  D ? t.grid.initSlides(u) : t.grid && t.grid.unsetSlides();
  let O;
  const L = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter((M) => typeof i.breakpoints[M].slidesPerView < "u").length > 0;
  for (let M = 0; M < c; M += 1) {
    O = 0;
    let I;
    if (u[M] && (I = u[M]), D && t.grid.updateSlide(M, I, u), !(u[M] && ee(I, "display") === "none")) {
      if (i.slidesPerView === "auto") {
        L && (u[M].style[t.getDirectionLabel("width")] = "");
        const P = getComputedStyle(I), x = I.style.transform, b = I.style.webkitTransform;
        if (x && (I.style.transform = "none"), b && (I.style.webkitTransform = "none"), i.roundLengths)
          O = t.isHorizontal() ? Ue(I, "width", !0) : Ue(I, "height", !0);
        else {
          const E = e(P, "width"), $ = e(P, "padding-left"), k = e(P, "padding-right"), A = e(P, "margin-left"), z = e(P, "margin-right"), G = P.getPropertyValue("box-sizing");
          if (G && G === "border-box")
            O = E + A + z;
          else {
            const {
              clientWidth: V,
              offsetWidth: Y
            } = I;
            O = E + $ + k + A + z + (Y - V);
          }
        }
        x && (I.style.transform = x), b && (I.style.webkitTransform = b), i.roundLengths && (O = Math.floor(O));
      } else
        O = (r - (i.slidesPerView - 1) * m) / i.slidesPerView, i.roundLengths && (O = Math.floor(O)), u[M] && (u[M].style[t.getDirectionLabel("width")] = `${O}px`);
      u[M] && (u[M].swiperSlideSize = O), w.push(O), i.centeredSlides ? (S = S + O / 2 + T / 2 + m, T === 0 && M !== 0 && (S = S - r / 2 - m), M === 0 && (S = S - r / 2 - m), Math.abs(S) < 1 / 1e3 && (S = 0), i.roundLengths && (S = Math.floor(S)), C % i.slidesPerGroup === 0 && f.push(S), p.push(S)) : (i.roundLengths && (S = Math.floor(S)), (C - Math.min(t.params.slidesPerGroupSkip, C)) % t.params.slidesPerGroup === 0 && f.push(S), p.push(S), S = S + O + m), t.virtualSize += O + m, T = O, C += 1;
    }
  }
  if (t.virtualSize = Math.max(t.virtualSize, r) + v, l && d && (i.effect === "slide" || i.effect === "coverflow") && (s.style.width = `${t.virtualSize + m}px`), i.setWrapperSize && (s.style[t.getDirectionLabel("width")] = `${t.virtualSize + m}px`), D && t.grid.updateWrapperSize(O, f), !i.centeredSlides) {
    const M = [];
    for (let I = 0; I < f.length; I += 1) {
      let P = f[I];
      i.roundLengths && (P = Math.floor(P)), f[I] <= t.virtualSize - r && M.push(P);
    }
    f = M, Math.floor(t.virtualSize - r) - Math.floor(f[f.length - 1]) > 1 && f.push(t.virtualSize - r);
  }
  if (a && i.loop) {
    const M = w[0] + m;
    if (i.slidesPerGroup > 1) {
      const I = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup), P = M * i.slidesPerGroup;
      for (let x = 0; x < I; x += 1)
        f.push(f[f.length - 1] + P);
    }
    for (let I = 0; I < t.virtual.slidesBefore + t.virtual.slidesAfter; I += 1)
      i.slidesPerGroup === 1 && f.push(f[f.length - 1] + M), p.push(p[p.length - 1] + M), t.virtualSize += M;
  }
  if (f.length === 0 && (f = [0]), m !== 0) {
    const M = t.isHorizontal() && l ? "marginLeft" : t.getDirectionLabel("marginRight");
    u.filter((I, P) => !i.cssMode || i.loop ? !0 : P !== u.length - 1).forEach((I) => {
      I.style[M] = `${m}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let M = 0;
    w.forEach((P) => {
      M += P + (m || 0);
    }), M -= m;
    const I = M - r;
    f = f.map((P) => P <= 0 ? -g : P > I ? I + v : P);
  }
  if (i.centerInsufficientSlides) {
    let M = 0;
    if (w.forEach((I) => {
      M += I + (m || 0);
    }), M -= m, M < r) {
      const I = (r - M) / 2;
      f.forEach((P, x) => {
        f[x] = P - I;
      }), p.forEach((P, x) => {
        p[x] = P + I;
      });
    }
  }
  if (Object.assign(t, {
    slides: u,
    snapGrid: f,
    slidesGrid: p,
    slidesSizesGrid: w
  }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
    he(s, "--swiper-centered-offset-before", `${-f[0]}px`), he(s, "--swiper-centered-offset-after", `${t.size / 2 - w[w.length - 1] / 2}px`);
    const M = -t.snapGrid[0], I = -t.slidesGrid[0];
    t.snapGrid = t.snapGrid.map((P) => P + M), t.slidesGrid = t.slidesGrid.map((P) => P + I);
  }
  if (c !== o && t.emit("slidesLengthChange"), f.length !== y && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), p.length !== h && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !a && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
    const M = `${i.containerModifierClass}backface-hidden`, I = t.el.classList.contains(M);
    c <= i.maxBackfaceHiddenSlides ? I || t.el.classList.add(M) : I && t.el.classList.remove(M);
  }
}
function qi(t) {
  const e = this, i = [], s = e.virtual && e.params.virtual.enabled;
  let n = 0, r;
  typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
  const l = (d) => s ? e.slides[e.getSlideIndexByData(d)] : e.slides[d];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((d) => {
        i.push(d);
      });
    else
      for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
        const d = e.activeIndex + r;
        if (d > e.slides.length && !s)
          break;
        i.push(l(d));
      }
  else
    i.push(l(e.activeIndex));
  for (r = 0; r < i.length; r += 1)
    if (typeof i[r] < "u") {
      const d = i[r].offsetHeight;
      n = d > n ? d : n;
    }
  (n || n === 0) && (e.wrapperEl.style.height = `${n}px`);
}
function Xi() {
  const t = this, e = t.slides, i = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
  for (let s = 0; s < e.length; s += 1)
    e[s].swiperSlideOffset = (t.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) - i - t.cssOverflowAdjustment();
}
function Yi(t) {
  t === void 0 && (t = this && this.translate || 0);
  const e = this, i = e.params, {
    slides: s,
    rtlTranslate: n,
    snapGrid: r
  } = e;
  if (s.length === 0)
    return;
  typeof s[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let l = -t;
  n && (l = t), s.forEach((a) => {
    a.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass);
  }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let d = i.spaceBetween;
  typeof d == "string" && d.indexOf("%") >= 0 ? d = parseFloat(d.replace("%", "")) / 100 * e.size : typeof d == "string" && (d = parseFloat(d));
  for (let a = 0; a < s.length; a += 1) {
    const o = s[a];
    let u = o.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (u -= s[0].swiperSlideOffset);
    const c = (l + (i.centeredSlides ? e.minTranslate() : 0) - u) / (o.swiperSlideSize + d), f = (l - r[0] + (i.centeredSlides ? e.minTranslate() : 0) - u) / (o.swiperSlideSize + d), p = -(l - u), w = p + e.slidesSizesGrid[a], g = p >= 0 && p <= e.size - e.slidesSizesGrid[a];
    (p >= 0 && p < e.size - 1 || w > 1 && w <= e.size || p <= 0 && w >= e.size) && (e.visibleSlides.push(o), e.visibleSlidesIndexes.push(a), s[a].classList.add(i.slideVisibleClass)), g && s[a].classList.add(i.slideFullyVisibleClass), o.progress = n ? -c : c, o.originalProgress = n ? -f : f;
  }
}
function Fi(t) {
  const e = this;
  if (typeof t > "u") {
    const u = e.rtlTranslate ? -1 : 1;
    t = e && e.translate && e.translate * u || 0;
  }
  const i = e.params, s = e.maxTranslate() - e.minTranslate();
  let {
    progress: n,
    isBeginning: r,
    isEnd: l,
    progressLoop: d
  } = e;
  const a = r, o = l;
  if (s === 0)
    n = 0, r = !0, l = !0;
  else {
    n = (t - e.minTranslate()) / s;
    const u = Math.abs(t - e.minTranslate()) < 1, c = Math.abs(t - e.maxTranslate()) < 1;
    r = u || n <= 0, l = c || n >= 1, u && (n = 0), c && (n = 1);
  }
  if (i.loop) {
    const u = e.getSlideIndexByData(0), c = e.getSlideIndexByData(e.slides.length - 1), f = e.slidesGrid[u], p = e.slidesGrid[c], w = e.slidesGrid[e.slidesGrid.length - 1], g = Math.abs(t);
    g >= f ? d = (g - f) / w : d = (g + w - p) / w, d > 1 && (d -= 1);
  }
  Object.assign(e, {
    progress: n,
    progressLoop: d,
    isBeginning: r,
    isEnd: l
  }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && e.updateSlidesProgress(t), r && !a && e.emit("reachBeginning toEdge"), l && !o && e.emit("reachEnd toEdge"), (a && !r || o && !l) && e.emit("fromEdge"), e.emit("progress", n);
}
function Ni() {
  const t = this, {
    slides: e,
    params: i,
    slidesEl: s,
    activeIndex: n
  } = t, r = t.virtual && i.virtual.enabled, l = t.grid && i.grid && i.grid.rows > 1, d = (c) => X(s, `.${i.slideClass}${c}, swiper-slide${c}`)[0];
  e.forEach((c) => {
    c.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass);
  });
  let a, o, u;
  if (r)
    if (i.loop) {
      let c = n - t.virtual.slidesBefore;
      c < 0 && (c = t.virtual.slides.length + c), c >= t.virtual.slides.length && (c -= t.virtual.slides.length), a = d(`[data-swiper-slide-index="${c}"]`);
    } else
      a = d(`[data-swiper-slide-index="${n}"]`);
  else
    l ? (a = e.filter((c) => c.column === n)[0], u = e.filter((c) => c.column === n + 1)[0], o = e.filter((c) => c.column === n - 1)[0]) : a = e[n];
  a && (a.classList.add(i.slideActiveClass), l ? (u && u.classList.add(i.slideNextClass), o && o.classList.add(i.slidePrevClass)) : (u = zi(a, `.${i.slideClass}, swiper-slide`)[0], i.loop && !u && (u = e[0]), u && u.classList.add(i.slideNextClass), o = Ai(a, `.${i.slideClass}, swiper-slide`)[0], i.loop && !o === 0 && (o = e[e.length - 1]), o && o.classList.add(i.slidePrevClass))), t.emitSlidesClasses();
}
const Me = (t, e) => {
  if (!t || t.destroyed || !t.params)
    return;
  const i = () => t.isElement ? "swiper-slide" : `.${t.params.slideClass}`, s = e.closest(i());
  if (s) {
    let n = s.querySelector(`.${t.params.lazyPreloaderClass}`);
    !n && t.isElement && (s.shadowRoot ? n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      s.shadowRoot && (n = s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`), n && n.remove());
    })), n && n.remove();
  }
}, Re = (t, e) => {
  if (!t.slides[e])
    return;
  const i = t.slides[e].querySelector('[loading="lazy"]');
  i && i.removeAttribute("loading");
}, Ke = (t) => {
  if (!t || t.destroyed || !t.params)
    return;
  let e = t.params.lazyPreloadPrevNext;
  const i = t.slides.length;
  if (!i || !e || e < 0)
    return;
  e = Math.min(e, i);
  const s = t.params.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(t.params.slidesPerView), n = t.activeIndex;
  if (t.params.grid && t.params.grid.rows > 1) {
    const l = n, d = [l - e];
    d.push(...Array.from({
      length: e
    }).map((a, o) => l + s + o)), t.slides.forEach((a, o) => {
      d.includes(a.column) && Re(t, o);
    });
    return;
  }
  const r = n + s - 1;
  if (t.params.rewind || t.params.loop)
    for (let l = n - e; l <= r + e; l += 1) {
      const d = (l % i + i) % i;
      (d < n || d > r) && Re(t, d);
    }
  else
    for (let l = Math.max(n - e, 0); l <= Math.min(r + e, i - 1); l += 1)
      l !== n && (l > r || l < n) && Re(t, l);
};
function Wi(t) {
  const {
    slidesGrid: e,
    params: i
  } = t, s = t.rtlTranslate ? t.translate : -t.translate;
  let n;
  for (let r = 0; r < e.length; r += 1)
    typeof e[r + 1] < "u" ? s >= e[r] && s < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : s >= e[r] && s < e[r + 1] && (n = r + 1) : s >= e[r] && (n = r);
  return i.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n;
}
function ji(t) {
  const e = this, i = e.rtlTranslate ? e.translate : -e.translate, {
    snapGrid: s,
    params: n,
    activeIndex: r,
    realIndex: l,
    snapIndex: d
  } = e;
  let a = t, o;
  const u = (p) => {
    let w = p - e.virtual.slidesBefore;
    return w < 0 && (w = e.virtual.slides.length + w), w >= e.virtual.slides.length && (w -= e.virtual.slides.length), w;
  };
  if (typeof a > "u" && (a = Wi(e)), s.indexOf(i) >= 0)
    o = s.indexOf(i);
  else {
    const p = Math.min(n.slidesPerGroupSkip, a);
    o = p + Math.floor((a - p) / n.slidesPerGroup);
  }
  if (o >= s.length && (o = s.length - 1), a === r && !e.params.loop) {
    o !== d && (e.snapIndex = o, e.emit("snapIndexChange"));
    return;
  }
  if (a === r && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = u(a);
    return;
  }
  const c = e.grid && n.grid && n.grid.rows > 1;
  let f;
  if (e.virtual && n.virtual.enabled && n.loop)
    f = u(a);
  else if (c) {
    const p = e.slides.filter((g) => g.column === a)[0];
    let w = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(w) && (w = Math.max(e.slides.indexOf(p), 0)), f = Math.floor(w / n.grid.rows);
  } else if (e.slides[a]) {
    const p = e.slides[a].getAttribute("data-swiper-slide-index");
    p ? f = parseInt(p, 10) : f = a;
  } else
    f = a;
  Object.assign(e, {
    previousSnapIndex: d,
    snapIndex: o,
    previousRealIndex: l,
    realIndex: f,
    previousIndex: r,
    activeIndex: a
  }), e.initialized && Ke(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (l !== f && e.emit("realIndexChange"), e.emit("slideChange"));
}
function Ui(t, e) {
  const i = this, s = i.params;
  let n = t.closest(`.${s.slideClass}, swiper-slide`);
  !n && i.isElement && e && e.length > 1 && e.includes(t) && [...e.slice(e.indexOf(t) + 1, e.length)].forEach((d) => {
    !n && d.matches && d.matches(`.${s.slideClass}, swiper-slide`) && (n = d);
  });
  let r = !1, l;
  if (n) {
    for (let d = 0; d < i.slides.length; d += 1)
      if (i.slides[d] === n) {
        r = !0, l = d;
        break;
      }
  }
  if (n && r)
    i.clickedSlide = n, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : i.clickedIndex = l;
  else {
    i.clickedSlide = void 0, i.clickedIndex = void 0;
    return;
  }
  s.slideToClickedSlide && i.clickedIndex !== void 0 && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide();
}
var Ki = {
  updateSize: Bi,
  updateSlides: Ri,
  updateAutoHeight: qi,
  updateSlidesOffset: Xi,
  updateSlidesProgress: Yi,
  updateProgress: Fi,
  updateSlidesClasses: Ni,
  updateActiveIndex: ji,
  updateClickedSlide: Ui
};
function Zi(t) {
  t === void 0 && (t = this.isHorizontal() ? "x" : "y");
  const e = this, {
    params: i,
    rtlTranslate: s,
    translate: n,
    wrapperEl: r
  } = e;
  if (i.virtualTranslate)
    return s ? -n : n;
  if (i.cssMode)
    return n;
  let l = je(r, t);
  return l += e.cssOverflowAdjustment(), s && (l = -l), l || 0;
}
function Qi(t, e) {
  const i = this, {
    rtlTranslate: s,
    params: n,
    wrapperEl: r,
    progress: l
  } = i;
  let d = 0, a = 0;
  const o = 0;
  i.isHorizontal() ? d = s ? -t : t : a = t, n.roundLengths && (d = Math.floor(d), a = Math.floor(a)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? d : a, n.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -d : -a : n.virtualTranslate || (i.isHorizontal() ? d -= i.cssOverflowAdjustment() : a -= i.cssOverflowAdjustment(), r.style.transform = `translate3d(${d}px, ${a}px, ${o}px)`);
  let u;
  const c = i.maxTranslate() - i.minTranslate();
  c === 0 ? u = 0 : u = (t - i.minTranslate()) / c, u !== l && i.updateProgress(t), i.emit("setTranslate", i.translate, e);
}
function Ji() {
  return -this.snapGrid[0];
}
function es() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function ts(t, e, i, s, n) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), s === void 0 && (s = !0);
  const r = this, {
    params: l,
    wrapperEl: d
  } = r;
  if (r.animating && l.preventInteractionOnTransition)
    return !1;
  const a = r.minTranslate(), o = r.maxTranslate();
  let u;
  if (s && t > a ? u = a : s && t < o ? u = o : u = t, r.updateProgress(u), l.cssMode) {
    const c = r.isHorizontal();
    if (e === 0)
      d[c ? "scrollLeft" : "scrollTop"] = -u;
    else {
      if (!r.support.smoothScroll)
        return Ct({
          swiper: r,
          targetPosition: -u,
          side: c ? "left" : "top"
        }), !0;
      d.scrollTo({
        [c ? "left" : "top"]: -u,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return e === 0 ? (r.setTransition(0), r.setTranslate(u), i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(u), i && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(f) {
    !r || r.destroyed || f.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, i && r.emit("transitionEnd"));
  }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0;
}
var is = {
  getTranslate: Zi,
  setTranslate: Qi,
  minTranslate: Ji,
  maxTranslate: es,
  translateTo: ts
};
function ss(t, e) {
  const i = this;
  i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${t}ms`, i.wrapperEl.style.transitionDelay = t === 0 ? "0ms" : ""), i.emit("setTransition", t, e);
}
function It(t) {
  let {
    swiper: e,
    runCallbacks: i,
    direction: s,
    step: n
  } = t;
  const {
    activeIndex: r,
    previousIndex: l
  } = e;
  let d = s;
  if (d || (r > l ? d = "next" : r < l ? d = "prev" : d = "reset"), e.emit(`transition${n}`), i && r !== l) {
    if (d === "reset") {
      e.emit(`slideResetTransition${n}`);
      return;
    }
    e.emit(`slideChangeTransition${n}`), d === "next" ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`);
  }
}
function rs(t, e) {
  t === void 0 && (t = !0);
  const i = this, {
    params: s
  } = i;
  s.cssMode || (s.autoHeight && i.updateAutoHeight(), It({
    swiper: i,
    runCallbacks: t,
    direction: e,
    step: "Start"
  }));
}
function ns(t, e) {
  t === void 0 && (t = !0);
  const i = this, {
    params: s
  } = i;
  i.animating = !1, !s.cssMode && (i.setTransition(0), It({
    swiper: i,
    runCallbacks: t,
    direction: e,
    step: "End"
  }));
}
var as = {
  setTransition: ss,
  transitionStart: rs,
  transitionEnd: ns
};
function ls(t, e, i, s, n) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), typeof t == "string" && (t = parseInt(t, 10));
  const r = this;
  let l = t;
  l < 0 && (l = 0);
  const {
    params: d,
    snapGrid: a,
    slidesGrid: o,
    previousIndex: u,
    activeIndex: c,
    rtlTranslate: f,
    wrapperEl: p,
    enabled: w
  } = r;
  if (r.animating && d.preventInteractionOnTransition || !w && !s && !n)
    return !1;
  const g = Math.min(r.params.slidesPerGroupSkip, l);
  let v = g + Math.floor((l - g) / r.params.slidesPerGroup);
  v >= a.length && (v = a.length - 1);
  const y = -a[v];
  if (d.normalizeSlideIndex)
    for (let m = 0; m < o.length; m += 1) {
      const S = -Math.floor(y * 100), T = Math.floor(o[m] * 100), C = Math.floor(o[m + 1] * 100);
      typeof o[m + 1] < "u" ? S >= T && S < C - (C - T) / 2 ? l = m : S >= T && S < C && (l = m + 1) : S >= T && (l = m);
    }
  if (r.initialized && l !== c && (!r.allowSlideNext && (f ? y > r.translate && y > r.minTranslate() : y < r.translate && y < r.minTranslate()) || !r.allowSlidePrev && y > r.translate && y > r.maxTranslate() && (c || 0) !== l))
    return !1;
  l !== (u || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress(y);
  let h;
  if (l > c ? h = "next" : l < c ? h = "prev" : h = "reset", f && -y === r.translate || !f && y === r.translate)
    return r.updateActiveIndex(l), d.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), d.effect !== "slide" && r.setTranslate(y), h !== "reset" && (r.transitionStart(i, h), r.transitionEnd(i, h)), !1;
  if (d.cssMode) {
    const m = r.isHorizontal(), S = f ? y : -y;
    if (e === 0) {
      const T = r.virtual && r.params.virtual.enabled;
      T && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), T && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        p[m ? "scrollLeft" : "scrollTop"] = S;
      })) : p[m ? "scrollLeft" : "scrollTop"] = S, T && requestAnimationFrame(() => {
        r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1;
      });
    } else {
      if (!r.support.smoothScroll)
        return Ct({
          swiper: r,
          targetPosition: S,
          side: m ? "left" : "top"
        }), !0;
      p.scrollTo({
        [m ? "left" : "top"]: S,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return r.setTransition(e), r.setTranslate(y), r.updateActiveIndex(l), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, s), r.transitionStart(i, h), e === 0 ? r.transitionEnd(i, h) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(S) {
    !r || r.destroyed || S.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, h));
  }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0;
}
function os(t, e, i, s) {
  t === void 0 && (t = 0), e === void 0 && (e = this.params.speed), i === void 0 && (i = !0), typeof t == "string" && (t = parseInt(t, 10));
  const n = this, r = n.grid && n.params.grid && n.params.grid.rows > 1;
  let l = t;
  if (n.params.loop)
    if (n.virtual && n.params.virtual.enabled)
      l = l + n.virtual.slidesBefore;
    else {
      let d;
      if (r) {
        const f = l * n.params.grid.rows;
        d = n.slides.filter((p) => p.getAttribute("data-swiper-slide-index") * 1 === f)[0].column;
      } else
        d = n.getSlideIndexByData(l);
      const a = r ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length, {
        centeredSlides: o
      } = n.params;
      let u = n.params.slidesPerView;
      u === "auto" ? u = n.slidesPerViewDynamic() : (u = Math.ceil(parseFloat(n.params.slidesPerView, 10)), o && u % 2 === 0 && (u = u + 1));
      let c = a - d < u;
      if (o && (c = c || d < Math.ceil(u / 2)), c) {
        const f = o ? d < n.activeIndex ? "prev" : "next" : d - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
        n.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === "next" ? d + 1 : d - a + 1,
          slideRealIndex: f === "next" ? n.realIndex : void 0
        });
      }
      if (r) {
        const f = l * n.params.grid.rows;
        l = n.slides.filter((p) => p.getAttribute("data-swiper-slide-index") * 1 === f)[0].column;
      } else
        l = n.getSlideIndexByData(l);
    }
  return requestAnimationFrame(() => {
    n.slideTo(l, e, i, s);
  }), n;
}
function ds(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this, {
    enabled: n,
    params: r,
    animating: l
  } = s;
  if (!n)
    return s;
  let d = r.slidesPerGroup;
  r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (d = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const a = s.activeIndex < r.slidesPerGroupSkip ? 1 : d, o = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (l && !o && r.loopPreventsSliding)
      return !1;
    if (s.loopFix({
      direction: "next"
    }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && r.cssMode)
      return requestAnimationFrame(() => {
        s.slideTo(s.activeIndex + a, t, e, i);
      }), !0;
  }
  return r.rewind && s.isEnd ? s.slideTo(0, t, e, i) : s.slideTo(s.activeIndex + a, t, e, i);
}
function cs(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this, {
    params: n,
    snapGrid: r,
    slidesGrid: l,
    rtlTranslate: d,
    enabled: a,
    animating: o
  } = s;
  if (!a)
    return s;
  const u = s.virtual && n.virtual.enabled;
  if (n.loop) {
    if (o && !u && n.loopPreventsSliding)
      return !1;
    s.loopFix({
      direction: "prev"
    }), s._clientLeft = s.wrapperEl.clientLeft;
  }
  const c = d ? s.translate : -s.translate;
  function f(y) {
    return y < 0 ? -Math.floor(Math.abs(y)) : Math.floor(y);
  }
  const p = f(c), w = r.map((y) => f(y));
  let g = r[w.indexOf(p) - 1];
  if (typeof g > "u" && n.cssMode) {
    let y;
    r.forEach((h, m) => {
      p >= h && (y = m);
    }), typeof y < "u" && (g = r[y > 0 ? y - 1 : y]);
  }
  let v = 0;
  if (typeof g < "u" && (v = l.indexOf(g), v < 0 && (v = s.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (v = v - s.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), n.rewind && s.isBeginning) {
    const y = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
    return s.slideTo(y, t, e, i);
  } else if (n.loop && s.activeIndex === 0 && n.cssMode)
    return requestAnimationFrame(() => {
      s.slideTo(v, t, e, i);
    }), !0;
  return s.slideTo(v, t, e, i);
}
function us(t, e, i) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0);
  const s = this;
  return s.slideTo(s.activeIndex, t, e, i);
}
function fs(t, e, i, s) {
  t === void 0 && (t = this.params.speed), e === void 0 && (e = !0), s === void 0 && (s = 0.5);
  const n = this;
  let r = n.activeIndex;
  const l = Math.min(n.params.slidesPerGroupSkip, r), d = l + Math.floor((r - l) / n.params.slidesPerGroup), a = n.rtlTranslate ? n.translate : -n.translate;
  if (a >= n.snapGrid[d]) {
    const o = n.snapGrid[d], u = n.snapGrid[d + 1];
    a - o > (u - o) * s && (r += n.params.slidesPerGroup);
  } else {
    const o = n.snapGrid[d - 1], u = n.snapGrid[d];
    a - o <= (u - o) * s && (r -= n.params.slidesPerGroup);
  }
  return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, t, e, i);
}
function ps() {
  const t = this, {
    params: e,
    slidesEl: i
  } = t, s = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
  let n = t.clickedIndex, r;
  const l = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (t.animating)
      return;
    r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < t.loopedSlides - s / 2 || n > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), n = t.getSlideIndex(X(i, `${l}[data-swiper-slide-index="${r}"]`)[0]), ne(() => {
      t.slideTo(n);
    })) : t.slideTo(n) : n > t.slides.length - s ? (t.loopFix(), n = t.getSlideIndex(X(i, `${l}[data-swiper-slide-index="${r}"]`)[0]), ne(() => {
      t.slideTo(n);
    })) : t.slideTo(n);
  } else
    t.slideTo(n);
}
var ms = {
  slideTo: ls,
  slideToLoop: os,
  slideNext: ds,
  slidePrev: cs,
  slideReset: us,
  slideToClosest: fs,
  slideToClickedSlide: ps
};
function hs(t) {
  const e = this, {
    params: i,
    slidesEl: s
  } = e;
  if (!i.loop || e.virtual && e.params.virtual.enabled)
    return;
  const n = () => {
    X(s, `.${i.slideClass}, swiper-slide`).forEach((c, f) => {
      c.setAttribute("data-swiper-slide-index", f);
    });
  }, r = e.grid && i.grid && i.grid.rows > 1, l = i.slidesPerGroup * (r ? i.grid.rows : 1), d = e.slides.length % l !== 0, a = r && e.slides.length % i.grid.rows !== 0, o = (u) => {
    for (let c = 0; c < u; c += 1) {
      const f = e.isElement ? W("swiper-slide", [i.slideBlankClass]) : W("div", [i.slideClass, i.slideBlankClass]);
      e.slidesEl.append(f);
    }
  };
  if (d) {
    if (i.loopAddBlankSlides) {
      const u = l - e.slides.length % l;
      o(u), e.recalcSlides(), e.updateSlides();
    } else
      Ce("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    n();
  } else if (a) {
    if (i.loopAddBlankSlides) {
      const u = i.grid.rows - e.slides.length % i.grid.rows;
      o(u), e.recalcSlides(), e.updateSlides();
    } else
      Ce("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    n();
  } else
    n();
  e.loopFix({
    slideRealIndex: t,
    direction: i.centeredSlides ? void 0 : "next"
  });
}
function gs(t) {
  let {
    slideRealIndex: e,
    slideTo: i = !0,
    direction: s,
    setTranslate: n,
    activeSlideIndex: r,
    byController: l,
    byMousewheel: d
  } = t === void 0 ? {} : t;
  const a = this;
  if (!a.params.loop)
    return;
  a.emit("beforeLoopFix");
  const {
    slides: o,
    allowSlidePrev: u,
    allowSlideNext: c,
    slidesEl: f,
    params: p
  } = a, {
    centeredSlides: w
  } = p;
  if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && p.virtual.enabled) {
    i && (!p.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : p.centeredSlides && a.snapIndex < p.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = u, a.allowSlideNext = c, a.emit("loopFix");
    return;
  }
  let g = p.slidesPerView;
  g === "auto" ? g = a.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(p.slidesPerView, 10)), w && g % 2 === 0 && (g = g + 1));
  const v = p.slidesPerGroupAuto ? g : p.slidesPerGroup;
  let y = v;
  y % v !== 0 && (y += v - y % v), y += p.loopAdditionalSlides, a.loopedSlides = y;
  const h = a.grid && p.grid && p.grid.rows > 1;
  o.length < g + y ? Ce("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : h && p.grid.fill === "row" && Ce("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const m = [], S = [];
  let T = a.activeIndex;
  typeof r > "u" ? r = a.getSlideIndex(o.filter((x) => x.classList.contains(p.slideActiveClass))[0]) : T = r;
  const C = s === "next" || !s, D = s === "prev" || !s;
  let O = 0, L = 0;
  const M = h ? Math.ceil(o.length / p.grid.rows) : o.length, P = (h ? o[r].column : r) + (w && typeof n > "u" ? -g / 2 + 0.5 : 0);
  if (P < y) {
    O = Math.max(y - P, v);
    for (let x = 0; x < y - P; x += 1) {
      const b = x - Math.floor(x / M) * M;
      if (h) {
        const E = M - b - 1;
        for (let $ = o.length - 1; $ >= 0; $ -= 1)
          o[$].column === E && m.push($);
      } else
        m.push(M - b - 1);
    }
  } else if (P + g > M - y) {
    L = Math.max(P - (M - y * 2), v);
    for (let x = 0; x < L; x += 1) {
      const b = x - Math.floor(x / M) * M;
      h ? o.forEach((E, $) => {
        E.column === b && S.push($);
      }) : S.push(b);
    }
  }
  if (a.__preventObserver__ = !0, requestAnimationFrame(() => {
    a.__preventObserver__ = !1;
  }), D && m.forEach((x) => {
    o[x].swiperLoopMoveDOM = !0, f.prepend(o[x]), o[x].swiperLoopMoveDOM = !1;
  }), C && S.forEach((x) => {
    o[x].swiperLoopMoveDOM = !0, f.append(o[x]), o[x].swiperLoopMoveDOM = !1;
  }), a.recalcSlides(), p.slidesPerView === "auto" ? a.updateSlides() : h && (m.length > 0 && D || S.length > 0 && C) && a.slides.forEach((x, b) => {
    a.grid.updateSlide(b, x, a.slides);
  }), p.watchSlidesProgress && a.updateSlidesOffset(), i) {
    if (m.length > 0 && D) {
      if (typeof e > "u") {
        const x = a.slidesGrid[T], E = a.slidesGrid[T + O] - x;
        d ? a.setTranslate(a.translate - E) : (a.slideTo(T + O, 0, !1, !0), n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - E, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - E));
      } else if (n) {
        const x = h ? m.length / p.grid.rows : m.length;
        a.slideTo(a.activeIndex + x, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate;
      }
    } else if (S.length > 0 && C)
      if (typeof e > "u") {
        const x = a.slidesGrid[T], E = a.slidesGrid[T - L] - x;
        d ? a.setTranslate(a.translate - E) : (a.slideTo(T - L, 0, !1, !0), n && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - E, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - E));
      } else {
        const x = h ? S.length / p.grid.rows : S.length;
        a.slideTo(a.activeIndex - x, 0, !1, !0);
      }
  }
  if (a.allowSlidePrev = u, a.allowSlideNext = c, a.controller && a.controller.control && !l) {
    const x = {
      slideRealIndex: e,
      direction: s,
      setTranslate: n,
      activeSlideIndex: r,
      byController: !0
    };
    Array.isArray(a.controller.control) ? a.controller.control.forEach((b) => {
      !b.destroyed && b.params.loop && b.loopFix({
        ...x,
        slideTo: b.params.slidesPerView === p.slidesPerView ? i : !1
      });
    }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
      ...x,
      slideTo: a.controller.control.params.slidesPerView === p.slidesPerView ? i : !1
    });
  }
  a.emit("loopFix");
}
function vs() {
  const t = this, {
    params: e,
    slidesEl: i
  } = t;
  if (!e.loop || t.virtual && t.params.virtual.enabled)
    return;
  t.recalcSlides();
  const s = [];
  t.slides.forEach((n) => {
    const r = typeof n.swiperSlideIndex > "u" ? n.getAttribute("data-swiper-slide-index") * 1 : n.swiperSlideIndex;
    s[r] = n;
  }), t.slides.forEach((n) => {
    n.removeAttribute("data-swiper-slide-index");
  }), s.forEach((n) => {
    i.append(n);
  }), t.recalcSlides(), t.slideTo(t.realIndex, 0);
}
var ws = {
  loopCreate: hs,
  loopFix: gs,
  loopDestroy: vs
};
function ys(t) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode)
    return;
  const i = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  });
}
function bs() {
  const t = this;
  t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame(() => {
    t.__preventObserver__ = !1;
  }));
}
var Ss = {
  setGrabCursor: ys,
  unsetGrabCursor: bs
};
function Es(t, e) {
  e === void 0 && (e = this);
  function i(s) {
    if (!s || s === F() || s === R())
      return null;
    s.assignedSlot && (s = s.assignedSlot);
    const n = s.closest(t);
    return !n && !s.getRootNode ? null : n || i(s.getRootNode().host);
  }
  return i(e);
}
function ft(t, e, i) {
  const s = R(), {
    params: n
  } = t, r = n.edgeSwipeDetection, l = n.edgeSwipeThreshold;
  return r && (i <= l || i >= s.innerWidth - l) ? r === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
}
function xs(t) {
  const e = this, i = F();
  let s = t;
  s.originalEvent && (s = s.originalEvent);
  const n = e.touchEventsData;
  if (s.type === "pointerdown") {
    if (n.pointerId !== null && n.pointerId !== s.pointerId)
      return;
    n.pointerId = s.pointerId;
  } else
    s.type === "touchstart" && s.targetTouches.length === 1 && (n.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    ft(e, s, s.targetTouches[0].pageX);
    return;
  }
  const {
    params: r,
    touches: l,
    enabled: d
  } = e;
  if (!d || !r.simulateTouch && s.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition)
    return;
  !e.animating && r.cssMode && r.loop && e.loopFix();
  let a = s.target;
  if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(a) || "which" in s && s.which === 3 || "button" in s && s.button > 0 || n.isTouched && n.isMoved)
    return;
  const o = !!r.noSwipingClass && r.noSwipingClass !== "", u = s.composedPath ? s.composedPath() : s.path;
  o && s.target && s.target.shadowRoot && u && (a = u[0]);
  const c = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`, f = !!(s.target && s.target.shadowRoot);
  if (r.noSwiping && (f ? Es(c, a) : a.closest(c))) {
    e.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !a.closest(r.swipeHandler))
    return;
  l.currentX = s.pageX, l.currentY = s.pageY;
  const p = l.currentX, w = l.currentY;
  if (!ft(e, s, p))
    return;
  Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), l.startX = p, l.startY = w, n.touchStartTime = U(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1);
  let g = !0;
  a.matches(n.focusableElements) && (g = !1, a.nodeName === "SELECT" && (n.isTouched = !1)), i.activeElement && i.activeElement.matches(n.focusableElements) && i.activeElement !== a && i.activeElement.blur();
  const v = g && e.allowTouchMove && r.touchStartPreventDefault;
  (r.touchStartForcePreventDefault || v) && !a.isContentEditable && s.preventDefault(), r.freeMode && r.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", s);
}
function Ts(t) {
  const e = F(), i = this, s = i.touchEventsData, {
    params: n,
    touches: r,
    rtlTranslate: l,
    enabled: d
  } = i;
  if (!d || !n.simulateTouch && t.pointerType === "mouse")
    return;
  let a = t;
  if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (s.touchId !== null || a.pointerId !== s.pointerId))
    return;
  let o;
  if (a.type === "touchmove") {
    if (o = [...a.changedTouches].filter((C) => C.identifier === s.touchId)[0], !o || o.identifier !== s.touchId)
      return;
  } else
    o = a;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", a);
    return;
  }
  const u = o.pageX, c = o.pageY;
  if (a.preventedByNestedSwiper) {
    r.startX = u, r.startY = c;
    return;
  }
  if (!i.allowTouchMove) {
    a.target.matches(s.focusableElements) || (i.allowClick = !1), s.isTouched && (Object.assign(r, {
      startX: u,
      startY: c,
      currentX: u,
      currentY: c
    }), s.touchStartTime = U());
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop) {
    if (i.isVertical()) {
      if (c < r.startY && i.translate <= i.maxTranslate() || c > r.startY && i.translate >= i.minTranslate()) {
        s.isTouched = !1, s.isMoved = !1;
        return;
      }
    } else if (u < r.startX && i.translate <= i.maxTranslate() || u > r.startX && i.translate >= i.minTranslate())
      return;
  }
  if (e.activeElement && a.target === e.activeElement && a.target.matches(s.focusableElements)) {
    s.isMoved = !0, i.allowClick = !1;
    return;
  }
  s.allowTouchCallbacks && i.emit("touchMove", a), r.previousX = r.currentX, r.previousY = r.currentY, r.currentX = u, r.currentY = c;
  const f = r.currentX - r.startX, p = r.currentY - r.startY;
  if (i.params.threshold && Math.sqrt(f ** 2 + p ** 2) < i.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let C;
    i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : f * f + p * p >= 25 && (C = Math.atan2(Math.abs(p), Math.abs(f)) * 180 / Math.PI, s.isScrolling = i.isHorizontal() ? C > n.touchAngle : 90 - C > n.touchAngle);
  }
  if (s.isScrolling && i.emit("touchMoveOpposite", a), typeof s.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (s.startMoving = !0), s.isScrolling) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving)
    return;
  i.allowClick = !1, !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
  let w = i.isHorizontal() ? f : p, g = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  n.oneWayMovement && (w = Math.abs(w) * (l ? 1 : -1), g = Math.abs(g) * (l ? 1 : -1)), r.diff = w, w *= n.touchRatio, l && (w = -w, g = -g);
  const v = i.touchesDirection;
  i.swipeDirection = w > 0 ? "prev" : "next", i.touchesDirection = g > 0 ? "prev" : "next";
  const y = i.params.loop && !n.cssMode, h = i.touchesDirection === "next" && i.allowSlideNext || i.touchesDirection === "prev" && i.allowSlidePrev;
  if (!s.isMoved) {
    if (y && h && i.loopFix({
      direction: i.swipeDirection
    }), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating) {
      const C = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0
      });
      i.wrapperEl.dispatchEvent(C);
    }
    s.allowMomentumBounce = !1, n.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0), i.emit("sliderFirstMove", a);
  }
  let m;
  if ((/* @__PURE__ */ new Date()).getTime(), s.isMoved && s.allowThresholdMove && v !== i.touchesDirection && y && h && Math.abs(w) >= 1) {
    Object.assign(r, {
      startX: u,
      startY: c,
      currentX: u,
      currentY: c,
      startTranslate: s.currentTranslate
    }), s.loopSwapReset = !0, s.startTranslate = s.currentTranslate;
    return;
  }
  i.emit("sliderMove", a), s.isMoved = !0, s.currentTranslate = w + s.startTranslate;
  let S = !0, T = n.resistanceRatio;
  if (n.touchReleaseOnEdges && (T = 0), w > 0 ? (y && h && !m && s.allowThresholdMove && s.currentTranslate > (n.centeredSlides ? i.minTranslate() - i.slidesSizesGrid[i.activeIndex + 1] : i.minTranslate()) && i.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), s.currentTranslate > i.minTranslate() && (S = !1, n.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + w) ** T))) : w < 0 && (y && h && !m && s.allowThresholdMove && s.currentTranslate < (n.centeredSlides ? i.maxTranslate() + i.slidesSizesGrid[i.slidesSizesGrid.length - 1] : i.maxTranslate()) && i.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: i.slides.length - (n.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
  }), s.currentTranslate < i.maxTranslate() && (S = !1, n.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - w) ** T))), S && (a.preventedByNestedSwiper = !0), !i.allowSlideNext && i.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && i.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate), n.threshold > 0)
    if (Math.abs(w) > n.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && i.freeMode || n.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), n.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate));
}
function Ms(t) {
  const e = this, i = e.touchEventsData;
  let s = t;
  s.originalEvent && (s = s.originalEvent);
  let n;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (n = [...s.changedTouches].filter((T) => T.identifier === i.touchId)[0], !n || n.identifier !== i.touchId)
      return;
  } else {
    if (i.touchId !== null || s.pointerId !== i.pointerId)
      return;
    n = s;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(s.type) && !(["pointercancel", "contextmenu"].includes(s.type) && (e.browser.isSafari || e.browser.isWebView)))
    return;
  i.pointerId = null, i.touchId = null;
  const {
    params: l,
    touches: d,
    rtlTranslate: a,
    slidesGrid: o,
    enabled: u
  } = e;
  if (!u || !l.simulateTouch && s.pointerType === "mouse")
    return;
  if (i.allowTouchCallbacks && e.emit("touchEnd", s), i.allowTouchCallbacks = !1, !i.isTouched) {
    i.isMoved && l.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, i.startMoving = !1;
    return;
  }
  l.grabCursor && i.isMoved && i.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const c = U(), f = c - i.touchStartTime;
  if (e.allowClick) {
    const T = s.path || s.composedPath && s.composedPath();
    e.updateClickedSlide(T && T[0] || s.target, T), e.emit("tap click", s), f < 300 && c - i.lastClickTime < 300 && e.emit("doubleTap doubleClick", s);
  }
  if (i.lastClickTime = U(), ne(() => {
    e.destroyed || (e.allowClick = !0);
  }), !i.isTouched || !i.isMoved || !e.swipeDirection || d.diff === 0 && !i.loopSwapReset || i.currentTranslate === i.startTranslate && !i.loopSwapReset) {
    i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
    return;
  }
  i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
  let p;
  if (l.followFinger ? p = a ? e.translate : -e.translate : p = -i.currentTranslate, l.cssMode)
    return;
  if (l.freeMode && l.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: p
    });
    return;
  }
  const w = p >= -e.maxTranslate() && !e.params.loop;
  let g = 0, v = e.slidesSizesGrid[0];
  for (let T = 0; T < o.length; T += T < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
    const C = T < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
    typeof o[T + C] < "u" ? (w || p >= o[T] && p < o[T + C]) && (g = T, v = o[T + C] - o[T]) : (w || p >= o[T]) && (g = T, v = o[o.length - 1] - o[o.length - 2]);
  }
  let y = null, h = null;
  l.rewind && (e.isBeginning ? h = l.virtual && l.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (y = 0));
  const m = (p - o[g]) / v, S = g < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
  if (f > l.longSwipesMs) {
    if (!l.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (m >= l.longSwipesRatio ? e.slideTo(l.rewind && e.isEnd ? y : g + S) : e.slideTo(g)), e.swipeDirection === "prev" && (m > 1 - l.longSwipesRatio ? e.slideTo(g + S) : h !== null && m < 0 && Math.abs(m) > l.longSwipesRatio ? e.slideTo(h) : e.slideTo(g));
  } else {
    if (!l.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (s.target === e.navigation.nextEl || s.target === e.navigation.prevEl) ? s.target === e.navigation.nextEl ? e.slideTo(g + S) : e.slideTo(g) : (e.swipeDirection === "next" && e.slideTo(y !== null ? y : g + S), e.swipeDirection === "prev" && e.slideTo(h !== null ? h : g));
  }
}
function pt() {
  const t = this, {
    params: e,
    el: i
  } = t;
  if (i && i.offsetWidth === 0)
    return;
  e.breakpoints && t.setBreakpoint();
  const {
    allowSlideNext: s,
    allowSlidePrev: n,
    snapGrid: r
  } = t, l = t.virtual && t.params.virtual.enabled;
  t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
  const d = l && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !d ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.params.loop && !l ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(t.autoplay.resizeTimeout), t.autoplay.resizeTimeout = setTimeout(() => {
    t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume();
  }, 500)), t.allowSlidePrev = n, t.allowSlideNext = s, t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow();
}
function Ps(t) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())));
}
function Cs() {
  const t = this, {
    wrapperEl: e,
    rtlTranslate: i,
    enabled: s
  } = t;
  if (!s)
    return;
  t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, t.translate === 0 && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
  let n;
  const r = t.maxTranslate() - t.minTranslate();
  r === 0 ? n = 0 : n = (t.translate - t.minTranslate()) / r, n !== t.progress && t.updateProgress(i ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1);
}
function Ls(t) {
  const e = this;
  Me(e, t.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
function Is() {
  const t = this;
  t.documentTouchHandlerProceeded || (t.documentTouchHandlerProceeded = !0, t.params.touchReleaseOnEdges && (t.el.style.touchAction = "auto"));
}
const At = (t, e) => {
  const i = F(), {
    params: s,
    el: n,
    wrapperEl: r,
    device: l
  } = t, d = !!s.nested, a = e === "on" ? "addEventListener" : "removeEventListener", o = e;
  i[a]("touchstart", t.onDocumentTouchStart, {
    passive: !1,
    capture: d
  }), n[a]("touchstart", t.onTouchStart, {
    passive: !1
  }), n[a]("pointerdown", t.onTouchStart, {
    passive: !1
  }), i[a]("touchmove", t.onTouchMove, {
    passive: !1,
    capture: d
  }), i[a]("pointermove", t.onTouchMove, {
    passive: !1,
    capture: d
  }), i[a]("touchend", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointerup", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointercancel", t.onTouchEnd, {
    passive: !0
  }), i[a]("touchcancel", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointerout", t.onTouchEnd, {
    passive: !0
  }), i[a]("pointerleave", t.onTouchEnd, {
    passive: !0
  }), i[a]("contextmenu", t.onTouchEnd, {
    passive: !0
  }), (s.preventClicks || s.preventClicksPropagation) && n[a]("click", t.onClick, !0), s.cssMode && r[a]("scroll", t.onScroll), s.updateOnWindowResize ? t[o](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", pt, !0) : t[o]("observerUpdate", pt, !0), n[a]("load", t.onLoad, {
    capture: !0
  });
};
function As() {
  const t = this, {
    params: e
  } = t;
  t.onTouchStart = xs.bind(t), t.onTouchMove = Ts.bind(t), t.onTouchEnd = Ms.bind(t), t.onDocumentTouchStart = Is.bind(t), e.cssMode && (t.onScroll = Cs.bind(t)), t.onClick = Ps.bind(t), t.onLoad = Ls.bind(t), At(t, "on");
}
function zs() {
  At(this, "off");
}
var Os = {
  attachEvents: As,
  detachEvents: zs
};
const mt = (t, e) => t.grid && e.grid && e.grid.rows > 1;
function ks() {
  const t = this, {
    realIndex: e,
    initialized: i,
    params: s,
    el: n
  } = t, r = s.breakpoints;
  if (!r || r && Object.keys(r).length === 0)
    return;
  const l = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
  if (!l || t.currentBreakpoint === l)
    return;
  const a = (l in r ? r[l] : void 0) || t.originalParams, o = mt(t, s), u = mt(t, a), c = s.enabled;
  o && !u ? (n.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), t.emitContainerClasses()) : !o && u && (n.classList.add(`${s.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && n.classList.add(`${s.containerModifierClass}grid-column`), t.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((y) => {
    if (typeof a[y] > "u")
      return;
    const h = s[y] && s[y].enabled, m = a[y] && a[y].enabled;
    h && !m && t[y].disable(), !h && m && t[y].enable();
  });
  const f = a.direction && a.direction !== s.direction, p = s.loop && (a.slidesPerView !== s.slidesPerView || f), w = s.loop;
  f && i && t.changeDirection(), N(t.params, a);
  const g = t.params.enabled, v = t.params.loop;
  Object.assign(t, {
    allowTouchMove: t.params.allowTouchMove,
    allowSlideNext: t.params.allowSlideNext,
    allowSlidePrev: t.params.allowSlidePrev
  }), c && !g ? t.disable() : !c && g && t.enable(), t.currentBreakpoint = l, t.emit("_beforeBreakpoint", a), i && (p ? (t.loopDestroy(), t.loopCreate(e), t.updateSlides()) : !w && v ? (t.loopCreate(e), t.updateSlides()) : w && !v && t.loopDestroy()), t.emit("breakpoint", a);
}
function $s(t, e, i) {
  if (e === void 0 && (e = "window"), !t || e === "container" && !i)
    return;
  let s = !1;
  const n = R(), r = e === "window" ? n.innerHeight : i.clientHeight, l = Object.keys(t).map((d) => {
    if (typeof d == "string" && d.indexOf("@") === 0) {
      const a = parseFloat(d.substr(1));
      return {
        value: r * a,
        point: d
      };
    }
    return {
      value: d,
      point: d
    };
  });
  l.sort((d, a) => parseInt(d.value, 10) - parseInt(a.value, 10));
  for (let d = 0; d < l.length; d += 1) {
    const {
      point: a,
      value: o
    } = l[d];
    e === "window" ? n.matchMedia(`(min-width: ${o}px)`).matches && (s = a) : o <= i.clientWidth && (s = a);
  }
  return s || "max";
}
var Ds = {
  setBreakpoint: ks,
  getBreakpoint: $s
};
function Gs(t, e) {
  const i = [];
  return t.forEach((s) => {
    typeof s == "object" ? Object.keys(s).forEach((n) => {
      s[n] && i.push(e + n);
    }) : typeof s == "string" && i.push(e + s);
  }), i;
}
function Hs() {
  const t = this, {
    classNames: e,
    params: i,
    rtl: s,
    el: n,
    device: r
  } = t, l = Gs(["initialized", i.direction, {
    "free-mode": t.params.freeMode && i.freeMode.enabled
  }, {
    autoheight: i.autoHeight
  }, {
    rtl: s
  }, {
    grid: i.grid && i.grid.rows > 1
  }, {
    "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
  }, {
    android: r.android
  }, {
    ios: r.ios
  }, {
    "css-mode": i.cssMode
  }, {
    centered: i.cssMode && i.centeredSlides
  }, {
    "watch-progress": i.watchSlidesProgress
  }], i.containerModifierClass);
  e.push(...l), n.classList.add(...e), t.emitContainerClasses();
}
function Vs() {
  const t = this, {
    el: e,
    classNames: i
  } = t;
  e.classList.remove(...i), t.emitContainerClasses();
}
var _s = {
  addClasses: Hs,
  removeClasses: Vs
};
function Bs() {
  const t = this, {
    isLocked: e,
    params: i
  } = t, {
    slidesOffsetBefore: s
  } = i;
  if (s) {
    const n = t.slides.length - 1, r = t.slidesGrid[n] + t.slidesSizesGrid[n] + s * 2;
    t.isLocked = t.size > r;
  } else
    t.isLocked = t.snapGrid.length === 1;
  i.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked), i.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock");
}
var Rs = {
  checkOverflow: Bs
}, ht = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  eventsPrefix: "swiper",
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopAddBlankSlides: !0,
  loopAdditionalSlides: 0,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function qs(t, e) {
  return function(s) {
    s === void 0 && (s = {});
    const n = Object.keys(s)[0], r = s[n];
    if (typeof r != "object" || r === null) {
      N(e, s);
      return;
    }
    if (t[n] === !0 && (t[n] = {
      enabled: !0
    }), n === "navigation" && t[n] && t[n].enabled && !t[n].prevEl && !t[n].nextEl && (t[n].auto = !0), ["pagination", "scrollbar"].indexOf(n) >= 0 && t[n] && t[n].enabled && !t[n].el && (t[n].auto = !0), !(n in t && "enabled" in r)) {
      N(e, s);
      return;
    }
    typeof t[n] == "object" && !("enabled" in t[n]) && (t[n].enabled = !0), t[n] || (t[n] = {
      enabled: !1
    }), N(e, s);
  };
}
const qe = {
  eventsEmitter: _i,
  update: Ki,
  translate: is,
  transition: as,
  slide: ms,
  loop: ws,
  grabCursor: Ss,
  events: Os,
  breakpoints: Ds,
  checkOverflow: Rs,
  classes: _s
}, Xe = {};
class q {
  constructor() {
    let e, i;
    for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
      n[r] = arguments[r];
    n.length === 1 && n[0].constructor && Object.prototype.toString.call(n[0]).slice(8, -1) === "Object" ? i = n[0] : [e, i] = n, i || (i = {}), i = N({}, i), e && !i.el && (i.el = e);
    const l = F();
    if (i.el && typeof i.el == "string" && l.querySelectorAll(i.el).length > 1) {
      const u = [];
      return l.querySelectorAll(i.el).forEach((c) => {
        const f = N({}, i, {
          el: c
        });
        u.push(new q(f));
      }), u;
    }
    const d = this;
    d.__swiper__ = !0, d.support = Lt(), d.device = $i({
      userAgent: i.userAgent
    }), d.browser = Gi(), d.eventsListeners = {}, d.eventsAnyListeners = [], d.modules = [...d.__modules__], i.modules && Array.isArray(i.modules) && d.modules.push(...i.modules);
    const a = {};
    d.modules.forEach((u) => {
      u({
        params: i,
        swiper: d,
        extendParams: qs(i, a),
        on: d.on.bind(d),
        once: d.once.bind(d),
        off: d.off.bind(d),
        emit: d.emit.bind(d)
      });
    });
    const o = N({}, ht, a);
    return d.params = N({}, o, Xe, i), d.originalParams = N({}, d.params), d.passedParams = N({}, i), d.params && d.params.on && Object.keys(d.params.on).forEach((u) => {
      d.on(u, d.params.on[u]);
    }), d.params && d.params.onAny && d.onAny(d.params.onAny), Object.assign(d, {
      enabled: d.params.enabled,
      el: e,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return d.params.direction === "horizontal";
      },
      isVertical() {
        return d.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: d.params.allowSlideNext,
      allowSlidePrev: d.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: d.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: d.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), d.emit("_swiper"), d.params.init && d.init(), d;
  }
  getDirectionLabel(e) {
    return this.isHorizontal() ? e : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[e];
  }
  getSlideIndex(e) {
    const {
      slidesEl: i,
      params: s
    } = this, n = X(i, `.${s.slideClass}, swiper-slide`), r = ye(n[0]);
    return ye(e) - r;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.filter((i) => i.getAttribute("data-swiper-slide-index") * 1 === e)[0]);
  }
  recalcSlides() {
    const e = this, {
      slidesEl: i,
      params: s
    } = e;
    e.slides = X(i, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
  }
  setProgress(e, i) {
    const s = this;
    e = Math.min(Math.max(e, 0), 1);
    const n = s.minTranslate(), l = (s.maxTranslate() - n) * e + n;
    s.translateTo(l, typeof i > "u" ? 0 : i), s.updateActiveIndex(), s.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el)
      return;
    const i = e.el.className.split(" ").filter((s) => s.indexOf("swiper") === 0 || s.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", i.join(" "));
  }
  getSlideClasses(e) {
    const i = this;
    return i.destroyed ? "" : e.className.split(" ").filter((s) => s.indexOf("swiper-slide") === 0 || s.indexOf(i.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el)
      return;
    const i = [];
    e.slides.forEach((s) => {
      const n = e.getSlideClasses(s);
      i.push({
        slideEl: s,
        classNames: n
      }), e.emit("_slideClass", s, n);
    }), e.emit("_slideClasses", i);
  }
  slidesPerViewDynamic(e, i) {
    e === void 0 && (e = "current"), i === void 0 && (i = !1);
    const s = this, {
      params: n,
      slides: r,
      slidesGrid: l,
      slidesSizesGrid: d,
      size: a,
      activeIndex: o
    } = s;
    let u = 1;
    if (typeof n.slidesPerView == "number")
      return n.slidesPerView;
    if (n.centeredSlides) {
      let c = r[o] ? r[o].swiperSlideSize : 0, f;
      for (let p = o + 1; p < r.length; p += 1)
        r[p] && !f && (c += r[p].swiperSlideSize, u += 1, c > a && (f = !0));
      for (let p = o - 1; p >= 0; p -= 1)
        r[p] && !f && (c += r[p].swiperSlideSize, u += 1, c > a && (f = !0));
    } else if (e === "current")
      for (let c = o + 1; c < r.length; c += 1)
        (i ? l[c] + d[c] - l[o] < a : l[c] - l[o] < a) && (u += 1);
    else
      for (let c = o - 1; c >= 0; c -= 1)
        l[o] - l[c] < a && (u += 1);
    return u;
  }
  update() {
    const e = this;
    if (!e || e.destroyed)
      return;
    const {
      snapGrid: i,
      params: s
    } = e;
    s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((l) => {
      l.complete && Me(e, l);
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function n() {
      const l = e.rtlTranslate ? e.translate * -1 : e.translate, d = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
      e.setTranslate(d), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      n(), s.autoHeight && e.updateAutoHeight();
    else {
      if ((s.slidesPerView === "auto" || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
        const l = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
        r = e.slideTo(l.length - 1, 0, !1, !0);
      } else
        r = e.slideTo(e.activeIndex, 0, !1, !0);
      r || n();
    }
    s.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, i) {
    i === void 0 && (i = !0);
    const s = this, n = s.params.direction;
    return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${n}`), s.el.classList.add(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((r) => {
      e === "vertical" ? r.style.width = "" : r.style.height = "";
    }), s.emit("changeDirection"), i && s.update()), s;
  }
  changeLanguageDirection(e) {
    const i = this;
    i.rtl && e === "rtl" || !i.rtl && e === "ltr" || (i.rtl = e === "rtl", i.rtlTranslate = i.params.direction === "horizontal" && i.rtl, i.rtl ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`), i.el.dir = "rtl") : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`), i.el.dir = "ltr"), i.update());
  }
  mount(e) {
    const i = this;
    if (i.mounted)
      return !0;
    let s = e || i.params.el;
    if (typeof s == "string" && (s = document.querySelector(s)), !s)
      return !1;
    s.swiper = i, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === "SWIPER-CONTAINER" && (i.isElement = !0);
    const n = () => `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let l = (() => s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(n()) : X(s, n())[0])();
    return !l && i.params.createElements && (l = W("div", i.params.wrapperClass), s.append(l), X(s, `.${i.params.slideClass}`).forEach((d) => {
      l.append(d);
    })), Object.assign(i, {
      el: s,
      wrapperEl: l,
      slidesEl: i.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : l,
      hostEl: i.isElement ? s.parentNode.host : s,
      mounted: !0,
      // RTL
      rtl: s.dir.toLowerCase() === "rtl" || ee(s, "direction") === "rtl",
      rtlTranslate: i.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || ee(s, "direction") === "rtl"),
      wrongRTL: ee(l, "display") === "-webkit-box"
    }), !0;
  }
  init(e) {
    const i = this;
    if (i.initialized || i.mount(e) === !1)
      return i;
    i.emit("beforeInit"), i.params.breakpoints && i.setBreakpoint(), i.addClasses(), i.updateSize(), i.updateSlides(), i.params.watchOverflow && i.checkOverflow(), i.params.grabCursor && i.enabled && i.setGrabCursor(), i.params.loop && i.virtual && i.params.virtual.enabled ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0), i.params.loop && i.loopCreate(), i.attachEvents();
    const n = [...i.el.querySelectorAll('[loading="lazy"]')];
    return i.isElement && n.push(...i.hostEl.querySelectorAll('[loading="lazy"]')), n.forEach((r) => {
      r.complete ? Me(i, r) : r.addEventListener("load", (l) => {
        Me(i, l.target);
      });
    }), Ke(i), i.initialized = !0, Ke(i), i.emit("init"), i.emit("afterInit"), i;
  }
  destroy(e, i) {
    e === void 0 && (e = !0), i === void 0 && (i = !0);
    const s = this, {
      params: n,
      el: r,
      wrapperEl: l,
      slides: d
    } = s;
    return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), n.loop && s.loopDestroy(), i && (s.removeClasses(), r.removeAttribute("style"), l.removeAttribute("style"), d && d.length && d.forEach((a) => {
      a.classList.remove(n.slideVisibleClass, n.slideFullyVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index");
    })), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((a) => {
      s.off(a);
    }), e !== !1 && (s.el.swiper = null, Ci(s)), s.destroyed = !0), null;
  }
  static extendDefaults(e) {
    N(Xe, e);
  }
  static get extendedDefaults() {
    return Xe;
  }
  static get defaults() {
    return ht;
  }
  static installModule(e) {
    q.prototype.__modules__ || (q.prototype.__modules__ = []);
    const i = q.prototype.__modules__;
    typeof e == "function" && i.indexOf(e) < 0 && i.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((i) => q.installModule(i)), q) : (q.installModule(e), q);
  }
}
Object.keys(qe).forEach((t) => {
  Object.keys(qe[t]).forEach((e) => {
    q.prototype[e] = qe[t][e];
  });
});
q.use([Hi, Vi]);
function Xs(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  i({
    virtual: {
      enabled: !1,
      slides: [],
      cache: !0,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: !0,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let r;
  const l = F();
  e.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const d = l.createElement("div");
  function a(w, g) {
    const v = e.params.virtual;
    if (v.cache && e.virtual.cache[g])
      return e.virtual.cache[g];
    let y;
    return v.renderSlide ? (y = v.renderSlide.call(e, w, g), typeof y == "string" && (d.innerHTML = y, y = d.children[0])) : e.isElement ? y = W("swiper-slide") : y = W("div", e.params.slideClass), y.setAttribute("data-swiper-slide-index", g), v.renderSlide || (y.innerHTML = w), v.cache && (e.virtual.cache[g] = y), y;
  }
  function o(w) {
    const {
      slidesPerView: g,
      slidesPerGroup: v,
      centeredSlides: y,
      loop: h
    } = e.params, {
      addSlidesBefore: m,
      addSlidesAfter: S
    } = e.params.virtual, {
      from: T,
      to: C,
      slides: D,
      slidesGrid: O,
      offset: L
    } = e.virtual;
    e.params.cssMode || e.updateActiveIndex();
    const M = e.activeIndex || 0;
    let I;
    e.rtlTranslate ? I = "right" : I = e.isHorizontal() ? "left" : "top";
    let P, x;
    y ? (P = Math.floor(g / 2) + v + S, x = Math.floor(g / 2) + v + m) : (P = g + (v - 1) + S, x = (h ? g : v) + m);
    let b = M - x, E = M + P;
    h || (b = Math.max(b, 0), E = Math.min(E, D.length - 1));
    let $ = (e.slidesGrid[b] || 0) - (e.slidesGrid[0] || 0);
    h && M >= x ? (b -= x, y || ($ += e.slidesGrid[0])) : h && M < x && (b = -x, y && ($ += e.slidesGrid[0])), Object.assign(e.virtual, {
      from: b,
      to: E,
      offset: $,
      slidesGrid: e.slidesGrid,
      slidesBefore: x,
      slidesAfter: P
    });
    function k() {
      e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), n("virtualUpdate");
    }
    if (T === b && C === E && !w) {
      e.slidesGrid !== O && $ !== L && e.slides.forEach((H) => {
        H.style[I] = `${$ - Math.abs(e.cssOverflowAdjustment())}px`;
      }), e.updateProgress(), n("virtualUpdate");
      return;
    }
    if (e.params.virtual.renderExternal) {
      e.params.virtual.renderExternal.call(e, {
        offset: $,
        from: b,
        to: E,
        slides: function() {
          const _ = [];
          for (let j = b; j <= E; j += 1)
            _.push(D[j]);
          return _;
        }()
      }), e.params.virtual.renderExternalUpdate ? k() : n("virtualUpdate");
      return;
    }
    const A = [], z = [], G = (H) => {
      let _ = H;
      return H < 0 ? _ = D.length + H : _ >= D.length && (_ = _ - D.length), _;
    };
    if (w)
      e.slides.filter((H) => H.matches(`.${e.params.slideClass}, swiper-slide`)).forEach((H) => {
        H.remove();
      });
    else
      for (let H = T; H <= C; H += 1)
        if (H < b || H > E) {
          const _ = G(H);
          e.slides.filter((j) => j.matches(`.${e.params.slideClass}[data-swiper-slide-index="${_}"], swiper-slide[data-swiper-slide-index="${_}"]`)).forEach((j) => {
            j.remove();
          });
        }
    const V = h ? -D.length : 0, Y = h ? D.length * 2 : D.length;
    for (let H = V; H < Y; H += 1)
      if (H >= b && H <= E) {
        const _ = G(H);
        typeof C > "u" || w ? z.push(_) : (H > C && z.push(_), H < T && A.push(_));
      }
    if (z.forEach((H) => {
      e.slidesEl.append(a(D[H], H));
    }), h)
      for (let H = A.length - 1; H >= 0; H -= 1) {
        const _ = A[H];
        e.slidesEl.prepend(a(D[_], _));
      }
    else
      A.sort((H, _) => _ - H), A.forEach((H) => {
        e.slidesEl.prepend(a(D[H], H));
      });
    X(e.slidesEl, ".swiper-slide, swiper-slide").forEach((H) => {
      H.style[I] = `${$ - Math.abs(e.cssOverflowAdjustment())}px`;
    }), k();
  }
  function u(w) {
    if (typeof w == "object" && "length" in w)
      for (let g = 0; g < w.length; g += 1)
        w[g] && e.virtual.slides.push(w[g]);
    else
      e.virtual.slides.push(w);
    o(!0);
  }
  function c(w) {
    const g = e.activeIndex;
    let v = g + 1, y = 1;
    if (Array.isArray(w)) {
      for (let h = 0; h < w.length; h += 1)
        w[h] && e.virtual.slides.unshift(w[h]);
      v = g + w.length, y = w.length;
    } else
      e.virtual.slides.unshift(w);
    if (e.params.virtual.cache) {
      const h = e.virtual.cache, m = {};
      Object.keys(h).forEach((S) => {
        const T = h[S], C = T.getAttribute("data-swiper-slide-index");
        C && T.setAttribute("data-swiper-slide-index", parseInt(C, 10) + y), m[parseInt(S, 10) + y] = T;
      }), e.virtual.cache = m;
    }
    o(!0), e.slideTo(v, 0);
  }
  function f(w) {
    if (typeof w > "u" || w === null)
      return;
    let g = e.activeIndex;
    if (Array.isArray(w))
      for (let v = w.length - 1; v >= 0; v -= 1)
        e.params.virtual.cache && (delete e.virtual.cache[w[v]], Object.keys(e.virtual.cache).forEach((y) => {
          y > w && (e.virtual.cache[y - 1] = e.virtual.cache[y], e.virtual.cache[y - 1].setAttribute("data-swiper-slide-index", y - 1), delete e.virtual.cache[y]);
        })), e.virtual.slides.splice(w[v], 1), w[v] < g && (g -= 1), g = Math.max(g, 0);
    else
      e.params.virtual.cache && (delete e.virtual.cache[w], Object.keys(e.virtual.cache).forEach((v) => {
        v > w && (e.virtual.cache[v - 1] = e.virtual.cache[v], e.virtual.cache[v - 1].setAttribute("data-swiper-slide-index", v - 1), delete e.virtual.cache[v]);
      })), e.virtual.slides.splice(w, 1), w < g && (g -= 1), g = Math.max(g, 0);
    o(!0), e.slideTo(g, 0);
  }
  function p() {
    e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), o(!0), e.slideTo(0, 0);
  }
  s("beforeInit", () => {
    if (!e.params.virtual.enabled)
      return;
    let w;
    if (typeof e.passedParams.virtual.slides > "u") {
      const g = [...e.slidesEl.children].filter((v) => v.matches(`.${e.params.slideClass}, swiper-slide`));
      g && g.length && (e.virtual.slides = [...g], w = !0, g.forEach((v, y) => {
        v.setAttribute("data-swiper-slide-index", y), e.virtual.cache[y] = v, v.remove();
      }));
    }
    w || (e.virtual.slides = e.params.virtual.slides), e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, o();
  }), s("setTranslate", () => {
    e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(r), r = setTimeout(() => {
      o();
    }, 100)) : o());
  }), s("init update resize", () => {
    e.params.virtual.enabled && e.params.cssMode && he(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
  }), Object.assign(e.virtual, {
    appendSlide: u,
    prependSlide: c,
    removeSlide: f,
    removeAllSlides: p,
    update: o
  });
}
function Ys(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  const r = F(), l = R();
  e.keyboard = {
    enabled: !1
  }, i({
    keyboard: {
      enabled: !1,
      onlyInViewport: !0,
      pageUpDown: !0
    }
  });
  function d(u) {
    if (!e.enabled)
      return;
    const {
      rtlTranslate: c
    } = e;
    let f = u;
    f.originalEvent && (f = f.originalEvent);
    const p = f.keyCode || f.charCode, w = e.params.keyboard.pageUpDown, g = w && p === 33, v = w && p === 34, y = p === 37, h = p === 39, m = p === 38, S = p === 40;
    if (!e.allowSlideNext && (e.isHorizontal() && h || e.isVertical() && S || v) || !e.allowSlidePrev && (e.isHorizontal() && y || e.isVertical() && m || g))
      return !1;
    if (!(f.shiftKey || f.altKey || f.ctrlKey || f.metaKey) && !(r.activeElement && r.activeElement.nodeName && (r.activeElement.nodeName.toLowerCase() === "input" || r.activeElement.nodeName.toLowerCase() === "textarea"))) {
      if (e.params.keyboard.onlyInViewport && (g || v || y || h || m || S)) {
        let T = !1;
        if (se(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && se(e.el, `.${e.params.slideActiveClass}`).length === 0)
          return;
        const C = e.el, D = C.clientWidth, O = C.clientHeight, L = l.innerWidth, M = l.innerHeight, I = Le(C);
        c && (I.left -= C.scrollLeft);
        const P = [[I.left, I.top], [I.left + D, I.top], [I.left, I.top + O], [I.left + D, I.top + O]];
        for (let x = 0; x < P.length; x += 1) {
          const b = P[x];
          if (b[0] >= 0 && b[0] <= L && b[1] >= 0 && b[1] <= M) {
            if (b[0] === 0 && b[1] === 0)
              continue;
            T = !0;
          }
        }
        if (!T)
          return;
      }
      e.isHorizontal() ? ((g || v || y || h) && (f.preventDefault ? f.preventDefault() : f.returnValue = !1), ((v || h) && !c || (g || y) && c) && e.slideNext(), ((g || y) && !c || (v || h) && c) && e.slidePrev()) : ((g || v || m || S) && (f.preventDefault ? f.preventDefault() : f.returnValue = !1), (v || S) && e.slideNext(), (g || m) && e.slidePrev()), n("keyPress", p);
    }
  }
  function a() {
    e.keyboard.enabled || (r.addEventListener("keydown", d), e.keyboard.enabled = !0);
  }
  function o() {
    e.keyboard.enabled && (r.removeEventListener("keydown", d), e.keyboard.enabled = !1);
  }
  s("init", () => {
    e.params.keyboard.enabled && a();
  }), s("destroy", () => {
    e.keyboard.enabled && o();
  }), Object.assign(e.keyboard, {
    enable: a,
    disable: o
  });
}
function Fs(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  const r = R();
  i({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel"
    }
  }), e.mousewheel = {
    enabled: !1
  };
  let l, d = U(), a;
  const o = [];
  function u(m) {
    let D = 0, O = 0, L = 0, M = 0;
    return "detail" in m && (O = m.detail), "wheelDelta" in m && (O = -m.wheelDelta / 120), "wheelDeltaY" in m && (O = -m.wheelDeltaY / 120), "wheelDeltaX" in m && (D = -m.wheelDeltaX / 120), "axis" in m && m.axis === m.HORIZONTAL_AXIS && (D = O, O = 0), L = D * 10, M = O * 10, "deltaY" in m && (M = m.deltaY), "deltaX" in m && (L = m.deltaX), m.shiftKey && !L && (L = M, M = 0), (L || M) && m.deltaMode && (m.deltaMode === 1 ? (L *= 40, M *= 40) : (L *= 800, M *= 800)), L && !D && (D = L < 1 ? -1 : 1), M && !O && (O = M < 1 ? -1 : 1), {
      spinX: D,
      spinY: O,
      pixelX: L,
      pixelY: M
    };
  }
  function c() {
    e.enabled && (e.mouseEntered = !0);
  }
  function f() {
    e.enabled && (e.mouseEntered = !1);
  }
  function p(m) {
    return e.params.mousewheel.thresholdDelta && m.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && U() - d < e.params.mousewheel.thresholdTime ? !1 : m.delta >= 6 && U() - d < 60 ? !0 : (m.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), n("scroll", m.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), n("scroll", m.raw)), d = new r.Date().getTime(), !1);
  }
  function w(m) {
    const S = e.params.mousewheel;
    if (m.direction < 0) {
      if (e.isEnd && !e.params.loop && S.releaseOnEdges)
        return !0;
    } else if (e.isBeginning && !e.params.loop && S.releaseOnEdges)
      return !0;
    return !1;
  }
  function g(m) {
    let S = m, T = !0;
    if (!e.enabled || m.target.closest(`.${e.params.mousewheel.noMousewheelClass}`))
      return;
    const C = e.params.mousewheel;
    e.params.cssMode && S.preventDefault();
    let D = e.el;
    e.params.mousewheel.eventsTarget !== "container" && (D = document.querySelector(e.params.mousewheel.eventsTarget));
    const O = D && D.contains(S.target);
    if (!e.mouseEntered && !O && !C.releaseOnEdges)
      return !0;
    S.originalEvent && (S = S.originalEvent);
    let L = 0;
    const M = e.rtlTranslate ? -1 : 1, I = u(S);
    if (C.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(I.pixelX) > Math.abs(I.pixelY))
          L = -I.pixelX * M;
        else
          return !0;
      else if (Math.abs(I.pixelY) > Math.abs(I.pixelX))
        L = -I.pixelY;
      else
        return !0;
    else
      L = Math.abs(I.pixelX) > Math.abs(I.pixelY) ? -I.pixelX * M : -I.pixelY;
    if (L === 0)
      return !0;
    C.invert && (L = -L);
    let P = e.getTranslate() + L * C.sensitivity;
    if (P >= e.minTranslate() && (P = e.minTranslate()), P <= e.maxTranslate() && (P = e.maxTranslate()), T = e.params.loop ? !0 : !(P === e.minTranslate() || P === e.maxTranslate()), T && e.params.nested && S.stopPropagation(), !e.params.freeMode || !e.params.freeMode.enabled) {
      const x = {
        time: U(),
        delta: Math.abs(L),
        direction: Math.sign(L),
        raw: m
      };
      o.length >= 2 && o.shift();
      const b = o.length ? o[o.length - 1] : void 0;
      if (o.push(x), b ? (x.direction !== b.direction || x.delta > b.delta || x.time > b.time + 150) && p(x) : p(x), w(x))
        return !0;
    } else {
      const x = {
        time: U(),
        delta: Math.abs(L),
        direction: Math.sign(L)
      }, b = a && x.time < a.time + 500 && x.delta <= a.delta && x.direction === a.direction;
      if (!b) {
        a = void 0;
        let E = e.getTranslate() + L * C.sensitivity;
        const $ = e.isBeginning, k = e.isEnd;
        if (E >= e.minTranslate() && (E = e.minTranslate()), E <= e.maxTranslate() && (E = e.maxTranslate()), e.setTransition(0), e.setTranslate(E), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!$ && e.isBeginning || !k && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({
          direction: x.direction < 0 ? "next" : "prev",
          byMousewheel: !0
        }), e.params.freeMode.sticky) {
          clearTimeout(l), l = void 0, o.length >= 15 && o.shift();
          const A = o.length ? o[o.length - 1] : void 0, z = o[0];
          if (o.push(x), A && (x.delta > A.delta || x.direction !== A.direction))
            o.splice(0);
          else if (o.length >= 15 && x.time - z.time < 500 && z.delta - x.delta >= 1 && x.delta <= 6) {
            const G = L > 0 ? 0.8 : 0.2;
            a = x, o.splice(0), l = ne(() => {
              e.slideToClosest(e.params.speed, !0, void 0, G);
            }, 0);
          }
          l || (l = ne(() => {
            a = x, o.splice(0), e.slideToClosest(e.params.speed, !0, void 0, 0.5);
          }, 500));
        }
        if (b || n("scroll", S), e.params.autoplay && e.params.autoplayDisableOnInteraction && e.autoplay.stop(), C.releaseOnEdges && (E === e.minTranslate() || E === e.maxTranslate()))
          return !0;
      }
    }
    return S.preventDefault ? S.preventDefault() : S.returnValue = !1, !1;
  }
  function v(m) {
    let S = e.el;
    e.params.mousewheel.eventsTarget !== "container" && (S = document.querySelector(e.params.mousewheel.eventsTarget)), S[m]("mouseenter", c), S[m]("mouseleave", f), S[m]("wheel", g);
  }
  function y() {
    return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", g), !0) : e.mousewheel.enabled ? !1 : (v("addEventListener"), e.mousewheel.enabled = !0, !0);
  }
  function h() {
    return e.params.cssMode ? (e.wrapperEl.addEventListener(event, g), !0) : e.mousewheel.enabled ? (v("removeEventListener"), e.mousewheel.enabled = !1, !0) : !1;
  }
  s("init", () => {
    !e.params.mousewheel.enabled && e.params.cssMode && h(), e.params.mousewheel.enabled && y();
  }), s("destroy", () => {
    e.params.cssMode && y(), e.mousewheel.enabled && h();
  }), Object.assign(e.mousewheel, {
    enable: y,
    disable: h
  });
}
function tt(t, e, i, s) {
  return t.params.createElements && Object.keys(s).forEach((n) => {
    if (!i[n] && i.auto === !0) {
      let r = X(t.el, `.${s[n]}`)[0];
      r || (r = W("div", s[n]), r.className = s[n], t.el.append(r)), i[n] = r, e[n] = r;
    }
  }), i;
}
function Ns(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  i({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), e.navigation = {
    nextEl: null,
    prevEl: null
  };
  const r = (g) => (Array.isArray(g) ? g : [g]).filter((v) => !!v);
  function l(g) {
    let v;
    return g && typeof g == "string" && e.isElement && (v = e.el.querySelector(g), v) ? v : (g && (typeof g == "string" && (v = [...document.querySelectorAll(g)]), e.params.uniqueNavElements && typeof g == "string" && v.length > 1 && e.el.querySelectorAll(g).length === 1 && (v = e.el.querySelector(g))), g && !v ? g : v);
  }
  function d(g, v) {
    const y = e.params.navigation;
    g = r(g), g.forEach((h) => {
      h && (h.classList[v ? "add" : "remove"](...y.disabledClass.split(" ")), h.tagName === "BUTTON" && (h.disabled = v), e.params.watchOverflow && e.enabled && h.classList[e.isLocked ? "add" : "remove"](y.lockClass));
    });
  }
  function a() {
    const {
      nextEl: g,
      prevEl: v
    } = e.navigation;
    if (e.params.loop) {
      d(v, !1), d(g, !1);
      return;
    }
    d(v, e.isBeginning && !e.params.rewind), d(g, e.isEnd && !e.params.rewind);
  }
  function o(g) {
    g.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), n("navigationPrev"));
  }
  function u(g) {
    g.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), n("navigationNext"));
  }
  function c() {
    const g = e.params.navigation;
    if (e.params.navigation = tt(e, e.originalParams.navigation, e.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !(g.nextEl || g.prevEl))
      return;
    let v = l(g.nextEl), y = l(g.prevEl);
    Object.assign(e.navigation, {
      nextEl: v,
      prevEl: y
    }), v = r(v), y = r(y);
    const h = (m, S) => {
      m && m.addEventListener("click", S === "next" ? u : o), !e.enabled && m && m.classList.add(...g.lockClass.split(" "));
    };
    v.forEach((m) => h(m, "next")), y.forEach((m) => h(m, "prev"));
  }
  function f() {
    let {
      nextEl: g,
      prevEl: v
    } = e.navigation;
    g = r(g), v = r(v);
    const y = (h, m) => {
      h.removeEventListener("click", m === "next" ? u : o), h.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    g.forEach((h) => y(h, "next")), v.forEach((h) => y(h, "prev"));
  }
  s("init", () => {
    e.params.navigation.enabled === !1 ? w() : (c(), a());
  }), s("toEdge fromEdge lock unlock", () => {
    a();
  }), s("destroy", () => {
    f();
  }), s("enable disable", () => {
    let {
      nextEl: g,
      prevEl: v
    } = e.navigation;
    if (g = r(g), v = r(v), e.enabled) {
      a();
      return;
    }
    [...g, ...v].filter((y) => !!y).forEach((y) => y.classList.add(e.params.navigation.lockClass));
  }), s("click", (g, v) => {
    let {
      nextEl: y,
      prevEl: h
    } = e.navigation;
    y = r(y), h = r(h);
    const m = v.target;
    if (e.params.navigation.hideOnClick && !h.includes(m) && !y.includes(m)) {
      if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === m || e.pagination.el.contains(m)))
        return;
      let S;
      y.length ? S = y[0].classList.contains(e.params.navigation.hiddenClass) : h.length && (S = h[0].classList.contains(e.params.navigation.hiddenClass)), n(S === !0 ? "navigationShow" : "navigationHide"), [...y, ...h].filter((T) => !!T).forEach((T) => T.classList.toggle(e.params.navigation.hiddenClass));
    }
  });
  const p = () => {
    e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), c(), a();
  }, w = () => {
    e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), f();
  };
  Object.assign(e.navigation, {
    enable: p,
    disable: w,
    update: a,
    init: c,
    destroy: f
  });
}
function Z(t) {
  return t === void 0 && (t = ""), `.${t.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function Ws(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  const r = "swiper-pagination";
  i({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (h) => h,
      formatFractionTotal: (h) => h,
      bulletClass: `${r}-bullet`,
      bulletActiveClass: `${r}-bullet-active`,
      modifierClass: `${r}-`,
      currentClass: `${r}-current`,
      totalClass: `${r}-total`,
      hiddenClass: `${r}-hidden`,
      progressbarFillClass: `${r}-progressbar-fill`,
      progressbarOppositeClass: `${r}-progressbar-opposite`,
      clickableClass: `${r}-clickable`,
      lockClass: `${r}-lock`,
      horizontalClass: `${r}-horizontal`,
      verticalClass: `${r}-vertical`,
      paginationDisabledClass: `${r}-disabled`
    }
  }), e.pagination = {
    el: null,
    bullets: []
  };
  let l, d = 0;
  const a = (h) => (Array.isArray(h) ? h : [h]).filter((m) => !!m);
  function o() {
    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function u(h, m) {
    const {
      bulletActiveClass: S
    } = e.params.pagination;
    h && (h = h[`${m === "prev" ? "previous" : "next"}ElementSibling`], h && (h.classList.add(`${S}-${m}`), h = h[`${m === "prev" ? "previous" : "next"}ElementSibling`], h && h.classList.add(`${S}-${m}-${m}`)));
  }
  function c(h) {
    const m = h.target.closest(Z(e.params.pagination.bulletClass));
    if (!m)
      return;
    h.preventDefault();
    const S = ye(m) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === S)
        return;
      e.slideToLoop(S);
    } else
      e.slideTo(S);
  }
  function f() {
    const h = e.rtl, m = e.params.pagination;
    if (o())
      return;
    let S = e.pagination.el;
    S = a(S);
    let T, C;
    const D = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, O = e.params.loop ? Math.ceil(D / e.params.slidesPerGroup) : e.snapGrid.length;
    if (e.params.loop ? (C = e.previousRealIndex || 0, T = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (T = e.snapIndex, C = e.previousSnapIndex) : (C = e.previousIndex || 0, T = e.activeIndex || 0), m.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const L = e.pagination.bullets;
      let M, I, P;
      if (m.dynamicBullets && (l = Ue(L[0], e.isHorizontal() ? "width" : "height", !0), S.forEach((x) => {
        x.style[e.isHorizontal() ? "width" : "height"] = `${l * (m.dynamicMainBullets + 4)}px`;
      }), m.dynamicMainBullets > 1 && C !== void 0 && (d += T - (C || 0), d > m.dynamicMainBullets - 1 ? d = m.dynamicMainBullets - 1 : d < 0 && (d = 0)), M = Math.max(T - d, 0), I = M + (Math.min(L.length, m.dynamicMainBullets) - 1), P = (I + M) / 2), L.forEach((x) => {
        const b = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((E) => `${m.bulletActiveClass}${E}`)].map((E) => typeof E == "string" && E.includes(" ") ? E.split(" ") : E).flat();
        x.classList.remove(...b);
      }), S.length > 1)
        L.forEach((x) => {
          const b = ye(x);
          b === T ? x.classList.add(...m.bulletActiveClass.split(" ")) : e.isElement && x.setAttribute("part", "bullet"), m.dynamicBullets && (b >= M && b <= I && x.classList.add(...`${m.bulletActiveClass}-main`.split(" ")), b === M && u(x, "prev"), b === I && u(x, "next"));
        });
      else {
        const x = L[T];
        if (x && x.classList.add(...m.bulletActiveClass.split(" ")), e.isElement && L.forEach((b, E) => {
          b.setAttribute("part", E === T ? "bullet-active" : "bullet");
        }), m.dynamicBullets) {
          const b = L[M], E = L[I];
          for (let $ = M; $ <= I; $ += 1)
            L[$] && L[$].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
          u(b, "prev"), u(E, "next");
        }
      }
      if (m.dynamicBullets) {
        const x = Math.min(L.length, m.dynamicMainBullets + 4), b = (l * x - l) / 2 - P * l, E = h ? "right" : "left";
        L.forEach(($) => {
          $.style[e.isHorizontal() ? E : "top"] = `${b}px`;
        });
      }
    }
    S.forEach((L, M) => {
      if (m.type === "fraction" && (L.querySelectorAll(Z(m.currentClass)).forEach((I) => {
        I.textContent = m.formatFractionCurrent(T + 1);
      }), L.querySelectorAll(Z(m.totalClass)).forEach((I) => {
        I.textContent = m.formatFractionTotal(O);
      })), m.type === "progressbar") {
        let I;
        m.progressbarOpposite ? I = e.isHorizontal() ? "vertical" : "horizontal" : I = e.isHorizontal() ? "horizontal" : "vertical";
        const P = (T + 1) / O;
        let x = 1, b = 1;
        I === "horizontal" ? x = P : b = P, L.querySelectorAll(Z(m.progressbarFillClass)).forEach((E) => {
          E.style.transform = `translate3d(0,0,0) scaleX(${x}) scaleY(${b})`, E.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      m.type === "custom" && m.renderCustom ? (L.innerHTML = m.renderCustom(e, T + 1, O), M === 0 && n("paginationRender", L)) : (M === 0 && n("paginationRender", L), n("paginationUpdate", L)), e.params.watchOverflow && e.enabled && L.classList[e.isLocked ? "add" : "remove"](m.lockClass);
    });
  }
  function p() {
    const h = e.params.pagination;
    if (o())
      return;
    const m = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
    let S = e.pagination.el;
    S = a(S);
    let T = "";
    if (h.type === "bullets") {
      let C = e.params.loop ? Math.ceil(m / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && C > m && (C = m);
      for (let D = 0; D < C; D += 1)
        h.renderBullet ? T += h.renderBullet.call(e, D, h.bulletClass) : T += `<${h.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${h.bulletClass}"></${h.bulletElement}>`;
    }
    h.type === "fraction" && (h.renderFraction ? T = h.renderFraction.call(e, h.currentClass, h.totalClass) : T = `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`), h.type === "progressbar" && (h.renderProgressbar ? T = h.renderProgressbar.call(e, h.progressbarFillClass) : T = `<span class="${h.progressbarFillClass}"></span>`), e.pagination.bullets = [], S.forEach((C) => {
      h.type !== "custom" && (C.innerHTML = T || ""), h.type === "bullets" && e.pagination.bullets.push(...C.querySelectorAll(Z(h.bulletClass)));
    }), h.type !== "custom" && n("paginationRender", S[0]);
  }
  function w() {
    e.params.pagination = tt(e, e.originalParams.pagination, e.params.pagination, {
      el: "swiper-pagination"
    });
    const h = e.params.pagination;
    if (!h.el)
      return;
    let m;
    typeof h.el == "string" && e.isElement && (m = e.el.querySelector(h.el)), !m && typeof h.el == "string" && (m = [...document.querySelectorAll(h.el)]), m || (m = h.el), !(!m || m.length === 0) && (e.params.uniqueNavElements && typeof h.el == "string" && Array.isArray(m) && m.length > 1 && (m = [...e.el.querySelectorAll(h.el)], m.length > 1 && (m = m.filter((S) => se(S, ".swiper")[0] === e.el)[0])), Array.isArray(m) && m.length === 1 && (m = m[0]), Object.assign(e.pagination, {
      el: m
    }), m = a(m), m.forEach((S) => {
      h.type === "bullets" && h.clickable && S.classList.add(...(h.clickableClass || "").split(" ")), S.classList.add(h.modifierClass + h.type), S.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.type === "bullets" && h.dynamicBullets && (S.classList.add(`${h.modifierClass}${h.type}-dynamic`), d = 0, h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)), h.type === "progressbar" && h.progressbarOpposite && S.classList.add(h.progressbarOppositeClass), h.clickable && S.addEventListener("click", c), e.enabled || S.classList.add(h.lockClass);
    }));
  }
  function g() {
    const h = e.params.pagination;
    if (o())
      return;
    let m = e.pagination.el;
    m && (m = a(m), m.forEach((S) => {
      S.classList.remove(h.hiddenClass), S.classList.remove(h.modifierClass + h.type), S.classList.remove(e.isHorizontal() ? h.horizontalClass : h.verticalClass), h.clickable && (S.classList.remove(...(h.clickableClass || "").split(" ")), S.removeEventListener("click", c));
    })), e.pagination.bullets && e.pagination.bullets.forEach((S) => S.classList.remove(...h.bulletActiveClass.split(" ")));
  }
  s("changeDirection", () => {
    if (!e.pagination || !e.pagination.el)
      return;
    const h = e.params.pagination;
    let {
      el: m
    } = e.pagination;
    m = a(m), m.forEach((S) => {
      S.classList.remove(h.horizontalClass, h.verticalClass), S.classList.add(e.isHorizontal() ? h.horizontalClass : h.verticalClass);
    });
  }), s("init", () => {
    e.params.pagination.enabled === !1 ? y() : (w(), p(), f());
  }), s("activeIndexChange", () => {
    typeof e.snapIndex > "u" && f();
  }), s("snapIndexChange", () => {
    f();
  }), s("snapGridLengthChange", () => {
    p(), f();
  }), s("destroy", () => {
    g();
  }), s("enable disable", () => {
    let {
      el: h
    } = e.pagination;
    h && (h = a(h), h.forEach((m) => m.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
  }), s("lock unlock", () => {
    f();
  }), s("click", (h, m) => {
    const S = m.target, T = a(e.pagination.el);
    if (e.params.pagination.el && e.params.pagination.hideOnClick && T && T.length > 0 && !S.classList.contains(e.params.pagination.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && S === e.navigation.nextEl || e.navigation.prevEl && S === e.navigation.prevEl))
        return;
      const C = T[0].classList.contains(e.params.pagination.hiddenClass);
      n(C === !0 ? "paginationShow" : "paginationHide"), T.forEach((D) => D.classList.toggle(e.params.pagination.hiddenClass));
    }
  });
  const v = () => {
    e.el.classList.remove(e.params.pagination.paginationDisabledClass);
    let {
      el: h
    } = e.pagination;
    h && (h = a(h), h.forEach((m) => m.classList.remove(e.params.pagination.paginationDisabledClass))), w(), p(), f();
  }, y = () => {
    e.el.classList.add(e.params.pagination.paginationDisabledClass);
    let {
      el: h
    } = e.pagination;
    h && (h = a(h), h.forEach((m) => m.classList.add(e.params.pagination.paginationDisabledClass))), g();
  };
  Object.assign(e.pagination, {
    enable: v,
    disable: y,
    render: p,
    update: f,
    init: w,
    destroy: g
  });
}
function js(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  const r = F();
  let l = !1, d = null, a = null, o, u, c, f;
  i({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical"
    }
  }), e.scrollbar = {
    el: null,
    dragEl: null
  };
  function p() {
    if (!e.params.scrollbar.el || !e.scrollbar.el)
      return;
    const {
      scrollbar: P,
      rtlTranslate: x
    } = e, {
      dragEl: b,
      el: E
    } = P, $ = e.params.scrollbar, k = e.params.loop ? e.progressLoop : e.progress;
    let A = u, z = (c - u) * k;
    x ? (z = -z, z > 0 ? (A = u - z, z = 0) : -z + u > c && (A = c + z)) : z < 0 ? (A = u + z, z = 0) : z + u > c && (A = c - z), e.isHorizontal() ? (b.style.transform = `translate3d(${z}px, 0, 0)`, b.style.width = `${A}px`) : (b.style.transform = `translate3d(0px, ${z}px, 0)`, b.style.height = `${A}px`), $.hide && (clearTimeout(d), E.style.opacity = 1, d = setTimeout(() => {
      E.style.opacity = 0, E.style.transitionDuration = "400ms";
    }, 1e3));
  }
  function w(P) {
    !e.params.scrollbar.el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${P}ms`);
  }
  function g() {
    if (!e.params.scrollbar.el || !e.scrollbar.el)
      return;
    const {
      scrollbar: P
    } = e, {
      dragEl: x,
      el: b
    } = P;
    x.style.width = "", x.style.height = "", c = e.isHorizontal() ? b.offsetWidth : b.offsetHeight, f = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), e.params.scrollbar.dragSize === "auto" ? u = c * f : u = parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? x.style.width = `${u}px` : x.style.height = `${u}px`, f >= 1 ? b.style.display = "none" : b.style.display = "", e.params.scrollbar.hide && (b.style.opacity = 0), e.params.watchOverflow && e.enabled && P.el.classList[e.isLocked ? "add" : "remove"](e.params.scrollbar.lockClass);
  }
  function v(P) {
    return e.isHorizontal() ? P.clientX : P.clientY;
  }
  function y(P) {
    const {
      scrollbar: x,
      rtlTranslate: b
    } = e, {
      el: E
    } = x;
    let $;
    $ = (v(P) - Le(E)[e.isHorizontal() ? "left" : "top"] - (o !== null ? o : u / 2)) / (c - u), $ = Math.max(Math.min($, 1), 0), b && ($ = 1 - $);
    const k = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * $;
    e.updateProgress(k), e.setTranslate(k), e.updateActiveIndex(), e.updateSlidesClasses();
  }
  function h(P) {
    const x = e.params.scrollbar, {
      scrollbar: b,
      wrapperEl: E
    } = e, {
      el: $,
      dragEl: k
    } = b;
    l = !0, o = P.target === k ? v(P) - P.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, P.preventDefault(), P.stopPropagation(), E.style.transitionDuration = "100ms", k.style.transitionDuration = "100ms", y(P), clearTimeout(a), $.style.transitionDuration = "0ms", x.hide && ($.style.opacity = 1), e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"), n("scrollbarDragStart", P);
  }
  function m(P) {
    const {
      scrollbar: x,
      wrapperEl: b
    } = e, {
      el: E,
      dragEl: $
    } = x;
    l && (P.preventDefault ? P.preventDefault() : P.returnValue = !1, y(P), b.style.transitionDuration = "0ms", E.style.transitionDuration = "0ms", $.style.transitionDuration = "0ms", n("scrollbarDragMove", P));
  }
  function S(P) {
    const x = e.params.scrollbar, {
      scrollbar: b,
      wrapperEl: E
    } = e, {
      el: $
    } = b;
    l && (l = !1, e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "", E.style.transitionDuration = ""), x.hide && (clearTimeout(a), a = ne(() => {
      $.style.opacity = 0, $.style.transitionDuration = "400ms";
    }, 1e3)), n("scrollbarDragEnd", P), x.snapOnRelease && e.slideToClosest());
  }
  function T(P) {
    const {
      scrollbar: x,
      params: b
    } = e, E = x.el;
    if (!E)
      return;
    const $ = E, k = b.passiveListeners ? {
      passive: !1,
      capture: !1
    } : !1, A = b.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1;
    if (!$)
      return;
    const z = P === "on" ? "addEventListener" : "removeEventListener";
    $[z]("pointerdown", h, k), r[z]("pointermove", m, k), r[z]("pointerup", S, A);
  }
  function C() {
    !e.params.scrollbar.el || !e.scrollbar.el || T("on");
  }
  function D() {
    !e.params.scrollbar.el || !e.scrollbar.el || T("off");
  }
  function O() {
    const {
      scrollbar: P,
      el: x
    } = e;
    e.params.scrollbar = tt(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    const b = e.params.scrollbar;
    if (!b.el)
      return;
    let E;
    if (typeof b.el == "string" && e.isElement && (E = e.el.querySelector(b.el)), !E && typeof b.el == "string") {
      if (E = r.querySelectorAll(b.el), !E.length)
        return;
    } else
      E || (E = b.el);
    e.params.uniqueNavElements && typeof b.el == "string" && E.length > 1 && x.querySelectorAll(b.el).length === 1 && (E = x.querySelector(b.el)), E.length > 0 && (E = E[0]), E.classList.add(e.isHorizontal() ? b.horizontalClass : b.verticalClass);
    let $;
    E && ($ = E.querySelector(Z(e.params.scrollbar.dragClass)), $ || ($ = W("div", e.params.scrollbar.dragClass), E.append($))), Object.assign(P, {
      el: E,
      dragEl: $
    }), b.draggable && C(), E && E.classList[e.enabled ? "remove" : "add"](...J(e.params.scrollbar.lockClass));
  }
  function L() {
    const P = e.params.scrollbar, x = e.scrollbar.el;
    x && x.classList.remove(...J(e.isHorizontal() ? P.horizontalClass : P.verticalClass)), D();
  }
  s("init", () => {
    e.params.scrollbar.enabled === !1 ? I() : (O(), g(), p());
  }), s("update resize observerUpdate lock unlock", () => {
    g();
  }), s("setTranslate", () => {
    p();
  }), s("setTransition", (P, x) => {
    w(x);
  }), s("enable disable", () => {
    const {
      el: P
    } = e.scrollbar;
    P && P.classList[e.enabled ? "remove" : "add"](...J(e.params.scrollbar.lockClass));
  }), s("destroy", () => {
    L();
  });
  const M = () => {
    e.el.classList.remove(...J(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.remove(...J(e.params.scrollbar.scrollbarDisabledClass)), O(), g(), p();
  }, I = () => {
    e.el.classList.add(...J(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.add(...J(e.params.scrollbar.scrollbarDisabledClass)), L();
  };
  Object.assign(e.scrollbar, {
    enable: M,
    disable: I,
    updateSize: g,
    setTranslate: p,
    init: O,
    destroy: L
  });
}
function Us(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    parallax: {
      enabled: !1
    }
  });
  const n = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", r = (a, o) => {
    const {
      rtl: u
    } = e, c = u ? -1 : 1, f = a.getAttribute("data-swiper-parallax") || "0";
    let p = a.getAttribute("data-swiper-parallax-x"), w = a.getAttribute("data-swiper-parallax-y");
    const g = a.getAttribute("data-swiper-parallax-scale"), v = a.getAttribute("data-swiper-parallax-opacity"), y = a.getAttribute("data-swiper-parallax-rotate");
    if (p || w ? (p = p || "0", w = w || "0") : e.isHorizontal() ? (p = f, w = "0") : (w = f, p = "0"), p.indexOf("%") >= 0 ? p = `${parseInt(p, 10) * o * c}%` : p = `${p * o * c}px`, w.indexOf("%") >= 0 ? w = `${parseInt(w, 10) * o}%` : w = `${w * o}px`, typeof v < "u" && v !== null) {
      const m = v - (v - 1) * (1 - Math.abs(o));
      a.style.opacity = m;
    }
    let h = `translate3d(${p}, ${w}, 0px)`;
    if (typeof g < "u" && g !== null) {
      const m = g - (g - 1) * (1 - Math.abs(o));
      h += ` scale(${m})`;
    }
    if (y && typeof y < "u" && y !== null) {
      const m = y * o * -1;
      h += ` rotate(${m}deg)`;
    }
    a.style.transform = h;
  }, l = () => {
    const {
      el: a,
      slides: o,
      progress: u,
      snapGrid: c,
      isElement: f
    } = e, p = X(a, n);
    e.isElement && p.push(...X(e.hostEl, n)), p.forEach((w) => {
      r(w, u);
    }), o.forEach((w, g) => {
      let v = w.progress;
      e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto" && (v += Math.ceil(g / 2) - u * (c.length - 1)), v = Math.min(Math.max(v, -1), 1), w.querySelectorAll(`${n}, [data-swiper-parallax-rotate]`).forEach((y) => {
        r(y, v);
      });
    });
  }, d = function(a) {
    a === void 0 && (a = e.params.speed);
    const {
      el: o,
      hostEl: u
    } = e, c = [...o.querySelectorAll(n)];
    e.isElement && c.push(...u.querySelectorAll(n)), c.forEach((f) => {
      let p = parseInt(f.getAttribute("data-swiper-parallax-duration"), 10) || a;
      a === 0 && (p = 0), f.style.transitionDuration = `${p}ms`;
    });
  };
  s("beforeInit", () => {
    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
  }), s("init", () => {
    e.params.parallax.enabled && l();
  }), s("setTranslate", () => {
    e.params.parallax.enabled && l();
  }), s("setTransition", (a, o) => {
    e.params.parallax.enabled && d(o);
  });
}
function Ks(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n
  } = t;
  const r = R();
  i({
    zoom: {
      enabled: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  }), e.zoom = {
    enabled: !1
  };
  let l = 1, d = !1, a, o;
  const u = [], c = {
    originX: 0,
    originY: 0,
    slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    imageEl: void 0,
    imageWrapEl: void 0,
    maxRatio: 3
  }, f = {
    isTouched: void 0,
    isMoved: void 0,
    currentX: void 0,
    currentY: void 0,
    minX: void 0,
    minY: void 0,
    maxX: void 0,
    maxY: void 0,
    width: void 0,
    height: void 0,
    startX: void 0,
    startY: void 0,
    touchesStart: {},
    touchesCurrent: {}
  }, p = {
    x: void 0,
    y: void 0,
    prevPositionX: void 0,
    prevPositionY: void 0,
    prevTime: void 0
  };
  let w = 1;
  Object.defineProperty(e.zoom, "scale", {
    get() {
      return w;
    },
    set(k) {
      if (w !== k) {
        const A = c.imageEl, z = c.slideEl;
        n("zoomChange", k, A, z);
      }
      w = k;
    }
  });
  function g() {
    if (u.length < 2)
      return 1;
    const k = u[0].pageX, A = u[0].pageY, z = u[1].pageX, G = u[1].pageY;
    return Math.sqrt((z - k) ** 2 + (G - A) ** 2);
  }
  function v() {
    if (u.length < 2)
      return {
        x: null,
        y: null
      };
    const k = c.imageEl.getBoundingClientRect();
    return [(u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - k.x - r.scrollX) / l, (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - k.y - r.scrollY) / l];
  }
  function y() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function h(k) {
    const A = y();
    return !!(k.target.matches(A) || e.slides.filter((z) => z.contains(k.target)).length > 0);
  }
  function m(k) {
    const A = `.${e.params.zoom.containerClass}`;
    return !!(k.target.matches(A) || [...e.hostEl.querySelectorAll(A)].filter((z) => z.contains(k.target)).length > 0);
  }
  function S(k) {
    if (k.pointerType === "mouse" && u.splice(0, u.length), !h(k))
      return;
    const A = e.params.zoom;
    if (a = !1, o = !1, u.push(k), !(u.length < 2)) {
      if (a = !0, c.scaleStart = g(), !c.slideEl) {
        c.slideEl = k.target.closest(`.${e.params.slideClass}, swiper-slide`), c.slideEl || (c.slideEl = e.slides[e.activeIndex]);
        let z = c.slideEl.querySelector(`.${A.containerClass}`);
        if (z && (z = z.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), c.imageEl = z, z ? c.imageWrapEl = se(c.imageEl, `.${A.containerClass}`)[0] : c.imageWrapEl = void 0, !c.imageWrapEl) {
          c.imageEl = void 0;
          return;
        }
        c.maxRatio = c.imageWrapEl.getAttribute("data-swiper-zoom") || A.maxRatio;
      }
      if (c.imageEl) {
        const [z, G] = v();
        c.originX = z, c.originY = G, c.imageEl.style.transitionDuration = "0ms";
      }
      d = !0;
    }
  }
  function T(k) {
    if (!h(k))
      return;
    const A = e.params.zoom, z = e.zoom, G = u.findIndex((V) => V.pointerId === k.pointerId);
    G >= 0 && (u[G] = k), !(u.length < 2) && (o = !0, c.scaleMove = g(), c.imageEl && (z.scale = c.scaleMove / c.scaleStart * l, z.scale > c.maxRatio && (z.scale = c.maxRatio - 1 + (z.scale - c.maxRatio + 1) ** 0.5), z.scale < A.minRatio && (z.scale = A.minRatio + 1 - (A.minRatio - z.scale + 1) ** 0.5), c.imageEl.style.transform = `translate3d(0,0,0) scale(${z.scale})`));
  }
  function C(k) {
    if (!h(k) || k.pointerType === "mouse" && k.type === "pointerout")
      return;
    const A = e.params.zoom, z = e.zoom, G = u.findIndex((V) => V.pointerId === k.pointerId);
    G >= 0 && u.splice(G, 1), !(!a || !o) && (a = !1, o = !1, c.imageEl && (z.scale = Math.max(Math.min(z.scale, c.maxRatio), A.minRatio), c.imageEl.style.transitionDuration = `${e.params.speed}ms`, c.imageEl.style.transform = `translate3d(0,0,0) scale(${z.scale})`, l = z.scale, d = !1, z.scale > 1 && c.slideEl ? c.slideEl.classList.add(`${A.zoomedSlideClass}`) : z.scale <= 1 && c.slideEl && c.slideEl.classList.remove(`${A.zoomedSlideClass}`), z.scale === 1 && (c.originX = 0, c.originY = 0, c.slideEl = void 0)));
  }
  function D(k) {
    const A = e.device;
    if (!c.imageEl || f.isTouched)
      return;
    A.android && k.cancelable && k.preventDefault(), f.isTouched = !0;
    const z = u.length > 0 ? u[0] : k;
    f.touchesStart.x = z.pageX, f.touchesStart.y = z.pageY;
  }
  function O(k) {
    if (!h(k) || !m(k))
      return;
    const A = e.zoom;
    if (!c.imageEl || !f.isTouched || !c.slideEl)
      return;
    f.isMoved || (f.width = c.imageEl.offsetWidth, f.height = c.imageEl.offsetHeight, f.startX = je(c.imageWrapEl, "x") || 0, f.startY = je(c.imageWrapEl, "y") || 0, c.slideWidth = c.slideEl.offsetWidth, c.slideHeight = c.slideEl.offsetHeight, c.imageWrapEl.style.transitionDuration = "0ms");
    const z = f.width * A.scale, G = f.height * A.scale;
    if (z < c.slideWidth && G < c.slideHeight)
      return;
    if (f.minX = Math.min(c.slideWidth / 2 - z / 2, 0), f.maxX = -f.minX, f.minY = Math.min(c.slideHeight / 2 - G / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = u.length > 0 ? u[0].pageX : k.pageX, f.touchesCurrent.y = u.length > 0 ? u[0].pageY : k.pageY, Math.max(Math.abs(f.touchesCurrent.x - f.touchesStart.x), Math.abs(f.touchesCurrent.y - f.touchesStart.y)) > 5 && (e.allowClick = !1), !f.isMoved && !d) {
      if (e.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) {
        f.isTouched = !1;
        return;
      }
      if (!e.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) {
        f.isTouched = !1;
        return;
      }
    }
    k.cancelable && k.preventDefault(), k.stopPropagation(), f.isMoved = !0;
    const Y = (A.scale - l) / (c.maxRatio - e.params.zoom.minRatio), {
      originX: H,
      originY: _
    } = c;
    f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX + Y * (f.width - H * 2), f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY + Y * (f.height - _ * 2), f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8), p.prevPositionX || (p.prevPositionX = f.touchesCurrent.x), p.prevPositionY || (p.prevPositionY = f.touchesCurrent.y), p.prevTime || (p.prevTime = Date.now()), p.x = (f.touchesCurrent.x - p.prevPositionX) / (Date.now() - p.prevTime) / 2, p.y = (f.touchesCurrent.y - p.prevPositionY) / (Date.now() - p.prevTime) / 2, Math.abs(f.touchesCurrent.x - p.prevPositionX) < 2 && (p.x = 0), Math.abs(f.touchesCurrent.y - p.prevPositionY) < 2 && (p.y = 0), p.prevPositionX = f.touchesCurrent.x, p.prevPositionY = f.touchesCurrent.y, p.prevTime = Date.now(), c.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`;
  }
  function L() {
    const k = e.zoom;
    if (!c.imageEl)
      return;
    if (!f.isTouched || !f.isMoved) {
      f.isTouched = !1, f.isMoved = !1;
      return;
    }
    f.isTouched = !1, f.isMoved = !1;
    let A = 300, z = 300;
    const G = p.x * A, V = f.currentX + G, Y = p.y * z, H = f.currentY + Y;
    p.x !== 0 && (A = Math.abs((V - f.currentX) / p.x)), p.y !== 0 && (z = Math.abs((H - f.currentY) / p.y));
    const _ = Math.max(A, z);
    f.currentX = V, f.currentY = H;
    const j = f.width * k.scale, K = f.height * k.scale;
    f.minX = Math.min(c.slideWidth / 2 - j / 2, 0), f.maxX = -f.minX, f.minY = Math.min(c.slideHeight / 2 - K / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), c.imageWrapEl.style.transitionDuration = `${_}ms`, c.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`;
  }
  function M() {
    const k = e.zoom;
    c.slideEl && e.activeIndex !== e.slides.indexOf(c.slideEl) && (c.imageEl && (c.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), c.imageWrapEl && (c.imageWrapEl.style.transform = "translate3d(0,0,0)"), c.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`), k.scale = 1, l = 1, c.slideEl = void 0, c.imageEl = void 0, c.imageWrapEl = void 0, c.originX = 0, c.originY = 0);
  }
  function I(k) {
    const A = e.zoom, z = e.params.zoom;
    if (!c.slideEl) {
      k && k.target && (c.slideEl = k.target.closest(`.${e.params.slideClass}, swiper-slide`)), c.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? c.slideEl = X(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : c.slideEl = e.slides[e.activeIndex]);
      let pe = c.slideEl.querySelector(`.${z.containerClass}`);
      pe && (pe = pe.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), c.imageEl = pe, pe ? c.imageWrapEl = se(c.imageEl, `.${z.containerClass}`)[0] : c.imageWrapEl = void 0;
    }
    if (!c.imageEl || !c.imageWrapEl)
      return;
    e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), c.slideEl.classList.add(`${z.zoomedSlideClass}`);
    let G, V, Y, H, _, j, K, ie, it, st, rt, nt, Ee, xe, Oe, ke, $e, De;
    typeof f.touchesStart.x > "u" && k ? (G = k.pageX, V = k.pageY) : (G = f.touchesStart.x, V = f.touchesStart.y);
    const fe = typeof k == "number" ? k : null;
    l === 1 && fe && (G = void 0, V = void 0), A.scale = fe || c.imageWrapEl.getAttribute("data-swiper-zoom") || z.maxRatio, l = fe || c.imageWrapEl.getAttribute("data-swiper-zoom") || z.maxRatio, k && !(l === 1 && fe) ? ($e = c.slideEl.offsetWidth, De = c.slideEl.offsetHeight, Y = Le(c.slideEl).left + r.scrollX, H = Le(c.slideEl).top + r.scrollY, _ = Y + $e / 2 - G, j = H + De / 2 - V, it = c.imageEl.offsetWidth, st = c.imageEl.offsetHeight, rt = it * A.scale, nt = st * A.scale, Ee = Math.min($e / 2 - rt / 2, 0), xe = Math.min(De / 2 - nt / 2, 0), Oe = -Ee, ke = -xe, K = _ * A.scale, ie = j * A.scale, K < Ee && (K = Ee), K > Oe && (K = Oe), ie < xe && (ie = xe), ie > ke && (ie = ke)) : (K = 0, ie = 0), fe && A.scale === 1 && (c.originX = 0, c.originY = 0), c.imageWrapEl.style.transitionDuration = "300ms", c.imageWrapEl.style.transform = `translate3d(${K}px, ${ie}px,0)`, c.imageEl.style.transitionDuration = "300ms", c.imageEl.style.transform = `translate3d(0,0,0) scale(${A.scale})`;
  }
  function P() {
    const k = e.zoom, A = e.params.zoom;
    if (!c.slideEl) {
      e.params.virtual && e.params.virtual.enabled && e.virtual ? c.slideEl = X(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : c.slideEl = e.slides[e.activeIndex];
      let z = c.slideEl.querySelector(`.${A.containerClass}`);
      z && (z = z.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), c.imageEl = z, z ? c.imageWrapEl = se(c.imageEl, `.${A.containerClass}`)[0] : c.imageWrapEl = void 0;
    }
    !c.imageEl || !c.imageWrapEl || (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), k.scale = 1, l = 1, c.imageWrapEl.style.transitionDuration = "300ms", c.imageWrapEl.style.transform = "translate3d(0,0,0)", c.imageEl.style.transitionDuration = "300ms", c.imageEl.style.transform = "translate3d(0,0,0) scale(1)", c.slideEl.classList.remove(`${A.zoomedSlideClass}`), c.slideEl = void 0, c.originX = 0, c.originY = 0);
  }
  function x(k) {
    const A = e.zoom;
    A.scale && A.scale !== 1 ? P() : I(k);
  }
  function b() {
    const k = e.params.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1, A = e.params.passiveListeners ? {
      passive: !1,
      capture: !0
    } : !0;
    return {
      passiveListener: k,
      activeListenerWithCapture: A
    };
  }
  function E() {
    const k = e.zoom;
    if (k.enabled)
      return;
    k.enabled = !0;
    const {
      passiveListener: A,
      activeListenerWithCapture: z
    } = b();
    e.wrapperEl.addEventListener("pointerdown", S, A), e.wrapperEl.addEventListener("pointermove", T, z), ["pointerup", "pointercancel", "pointerout"].forEach((G) => {
      e.wrapperEl.addEventListener(G, C, A);
    }), e.wrapperEl.addEventListener("pointermove", O, z);
  }
  function $() {
    const k = e.zoom;
    if (!k.enabled)
      return;
    k.enabled = !1;
    const {
      passiveListener: A,
      activeListenerWithCapture: z
    } = b();
    e.wrapperEl.removeEventListener("pointerdown", S, A), e.wrapperEl.removeEventListener("pointermove", T, z), ["pointerup", "pointercancel", "pointerout"].forEach((G) => {
      e.wrapperEl.removeEventListener(G, C, A);
    }), e.wrapperEl.removeEventListener("pointermove", O, z);
  }
  s("init", () => {
    e.params.zoom.enabled && E();
  }), s("destroy", () => {
    $();
  }), s("touchStart", (k, A) => {
    e.zoom.enabled && D(A);
  }), s("touchEnd", (k, A) => {
    e.zoom.enabled && L();
  }), s("doubleTap", (k, A) => {
    !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && x(A);
  }), s("transitionEnd", () => {
    e.zoom.enabled && e.params.zoom.enabled && M();
  }), s("slideChange", () => {
    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && M();
  }), Object.assign(e.zoom, {
    enable: E,
    disable: $,
    in: I,
    out: P,
    toggle: x
  });
}
function Zs(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    controller: {
      control: void 0,
      inverse: !1,
      by: "slide"
      // or 'container'
    }
  }), e.controller = {
    control: void 0
  };
  function n(o, u) {
    const c = function() {
      let g, v, y;
      return (h, m) => {
        for (v = -1, g = h.length; g - v > 1; )
          y = g + v >> 1, h[y] <= m ? v = y : g = y;
        return g;
      };
    }();
    this.x = o, this.y = u, this.lastIndex = o.length - 1;
    let f, p;
    return this.interpolate = function(g) {
      return g ? (p = c(this.x, g), f = p - 1, (g - this.x[f]) * (this.y[p] - this.y[f]) / (this.x[p] - this.x[f]) + this.y[f]) : 0;
    }, this;
  }
  function r(o) {
    e.controller.spline = e.params.loop ? new n(e.slidesGrid, o.slidesGrid) : new n(e.snapGrid, o.snapGrid);
  }
  function l(o, u) {
    const c = e.controller.control;
    let f, p;
    const w = e.constructor;
    function g(v) {
      if (v.destroyed)
        return;
      const y = e.rtlTranslate ? -e.translate : e.translate;
      e.params.controller.by === "slide" && (r(v), p = -e.controller.spline.interpolate(-y)), (!p || e.params.controller.by === "container") && (f = (v.maxTranslate() - v.minTranslate()) / (e.maxTranslate() - e.minTranslate()), (Number.isNaN(f) || !Number.isFinite(f)) && (f = 1), p = (y - e.minTranslate()) * f + v.minTranslate()), e.params.controller.inverse && (p = v.maxTranslate() - p), v.updateProgress(p), v.setTranslate(p, e), v.updateActiveIndex(), v.updateSlidesClasses();
    }
    if (Array.isArray(c))
      for (let v = 0; v < c.length; v += 1)
        c[v] !== u && c[v] instanceof w && g(c[v]);
    else
      c instanceof w && u !== c && g(c);
  }
  function d(o, u) {
    const c = e.constructor, f = e.controller.control;
    let p;
    function w(g) {
      g.destroyed || (g.setTransition(o, e), o !== 0 && (g.transitionStart(), g.params.autoHeight && ne(() => {
        g.updateAutoHeight();
      }), ge(g.wrapperEl, () => {
        f && g.transitionEnd();
      })));
    }
    if (Array.isArray(f))
      for (p = 0; p < f.length; p += 1)
        f[p] !== u && f[p] instanceof c && w(f[p]);
    else
      f instanceof c && u !== f && w(f);
  }
  function a() {
    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
  }
  s("beforeInit", () => {
    if (typeof window < "u" && // eslint-disable-line
    (typeof e.params.controller.control == "string" || e.params.controller.control instanceof HTMLElement)) {
      const o = document.querySelector(e.params.controller.control);
      if (o && o.swiper)
        e.controller.control = o.swiper;
      else if (o) {
        const u = (c) => {
          e.controller.control = c.detail[0], e.update(), o.removeEventListener("init", u);
        };
        o.addEventListener("init", u);
      }
      return;
    }
    e.controller.control = e.params.controller.control;
  }), s("update", () => {
    a();
  }), s("resize", () => {
    a();
  }), s("observerUpdate", () => {
    a();
  }), s("setTranslate", (o, u, c) => {
    !e.controller.control || e.controller.control.destroyed || e.controller.setTranslate(u, c);
  }), s("setTransition", (o, u, c) => {
    !e.controller.control || e.controller.control.destroyed || e.controller.setTransition(u, c);
  }), Object.assign(e.controller, {
    setTranslate: l,
    setTransition: d
  });
}
function Qs(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null
    }
  }), e.a11y = {
    clicked: !1
  };
  let n = null;
  function r(b) {
    const E = n;
    E.length !== 0 && (E.innerHTML = "", E.innerHTML = b);
  }
  const l = (b) => (Array.isArray(b) ? b : [b]).filter((E) => !!E);
  function d(b) {
    b === void 0 && (b = 16);
    const E = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(b).replace(/x/g, E);
  }
  function a(b) {
    b = l(b), b.forEach((E) => {
      E.setAttribute("tabIndex", "0");
    });
  }
  function o(b) {
    b = l(b), b.forEach((E) => {
      E.setAttribute("tabIndex", "-1");
    });
  }
  function u(b, E) {
    b = l(b), b.forEach(($) => {
      $.setAttribute("role", E);
    });
  }
  function c(b, E) {
    b = l(b), b.forEach(($) => {
      $.setAttribute("aria-roledescription", E);
    });
  }
  function f(b, E) {
    b = l(b), b.forEach(($) => {
      $.setAttribute("aria-controls", E);
    });
  }
  function p(b, E) {
    b = l(b), b.forEach(($) => {
      $.setAttribute("aria-label", E);
    });
  }
  function w(b, E) {
    b = l(b), b.forEach(($) => {
      $.setAttribute("id", E);
    });
  }
  function g(b, E) {
    b = l(b), b.forEach(($) => {
      $.setAttribute("aria-live", E);
    });
  }
  function v(b) {
    b = l(b), b.forEach((E) => {
      E.setAttribute("aria-disabled", !0);
    });
  }
  function y(b) {
    b = l(b), b.forEach((E) => {
      E.setAttribute("aria-disabled", !1);
    });
  }
  function h(b) {
    if (b.keyCode !== 13 && b.keyCode !== 32)
      return;
    const E = e.params.a11y, $ = b.target;
    e.pagination && e.pagination.el && ($ === e.pagination.el || e.pagination.el.contains(b.target)) && !b.target.matches(Z(e.params.pagination.bulletClass)) || (e.navigation && e.navigation.nextEl && $ === e.navigation.nextEl && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? r(E.lastSlideMessage) : r(E.nextSlideMessage)), e.navigation && e.navigation.prevEl && $ === e.navigation.prevEl && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? r(E.firstSlideMessage) : r(E.prevSlideMessage)), e.pagination && $.matches(Z(e.params.pagination.bulletClass)) && $.click());
  }
  function m() {
    if (e.params.loop || e.params.rewind || !e.navigation)
      return;
    const {
      nextEl: b,
      prevEl: E
    } = e.navigation;
    E && (e.isBeginning ? (v(E), o(E)) : (y(E), a(E))), b && (e.isEnd ? (v(b), o(b)) : (y(b), a(b)));
  }
  function S() {
    return e.pagination && e.pagination.bullets && e.pagination.bullets.length;
  }
  function T() {
    return S() && e.params.pagination.clickable;
  }
  function C() {
    const b = e.params.a11y;
    S() && e.pagination.bullets.forEach((E) => {
      e.params.pagination.clickable && (a(E), e.params.pagination.renderBullet || (u(E, "button"), p(E, b.paginationBulletMessage.replace(/\{\{index\}\}/, ye(E) + 1)))), E.matches(Z(e.params.pagination.bulletActiveClass)) ? E.setAttribute("aria-current", "true") : E.removeAttribute("aria-current");
    });
  }
  const D = (b, E, $) => {
    a(b), b.tagName !== "BUTTON" && (u(b, "button"), b.addEventListener("keydown", h)), p(b, $), f(b, E);
  }, O = () => {
    e.a11y.clicked = !0;
  }, L = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        e.destroyed || (e.a11y.clicked = !1);
      });
    });
  }, M = (b) => {
    if (e.a11y.clicked)
      return;
    const E = b.target.closest(`.${e.params.slideClass}, swiper-slide`);
    if (!E || !e.slides.includes(E))
      return;
    const $ = e.slides.indexOf(E) === e.activeIndex, k = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(E);
    $ || k || b.sourceCapabilities && b.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, e.slideTo(e.slides.indexOf(E), 0));
  }, I = () => {
    const b = e.params.a11y;
    b.itemRoleDescriptionMessage && c(e.slides, b.itemRoleDescriptionMessage), b.slideRole && u(e.slides, b.slideRole);
    const E = e.slides.length;
    b.slideLabelMessage && e.slides.forEach(($, k) => {
      const A = e.params.loop ? parseInt($.getAttribute("data-swiper-slide-index"), 10) : k, z = b.slideLabelMessage.replace(/\{\{index\}\}/, A + 1).replace(/\{\{slidesLength\}\}/, E);
      p($, z);
    });
  }, P = () => {
    const b = e.params.a11y;
    e.el.append(n);
    const E = e.el;
    b.containerRoleDescriptionMessage && c(E, b.containerRoleDescriptionMessage), b.containerMessage && p(E, b.containerMessage);
    const $ = e.wrapperEl, k = b.id || $.getAttribute("id") || `swiper-wrapper-${d(16)}`, A = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
    w($, k), g($, A), I();
    let {
      nextEl: z,
      prevEl: G
    } = e.navigation ? e.navigation : {};
    z = l(z), G = l(G), z && z.forEach((V) => D(V, k, b.nextSlideMessage)), G && G.forEach((V) => D(V, k, b.prevSlideMessage)), T() && l(e.pagination.el).forEach((Y) => {
      Y.addEventListener("keydown", h);
    }), e.el.addEventListener("focus", M, !0), e.el.addEventListener("pointerdown", O, !0), e.el.addEventListener("pointerup", L, !0);
  };
  function x() {
    n && n.remove();
    let {
      nextEl: b,
      prevEl: E
    } = e.navigation ? e.navigation : {};
    b = l(b), E = l(E), b && b.forEach(($) => $.removeEventListener("keydown", h)), E && E.forEach(($) => $.removeEventListener("keydown", h)), T() && l(e.pagination.el).forEach((k) => {
      k.removeEventListener("keydown", h);
    }), e.el.removeEventListener("focus", M, !0), e.el.removeEventListener("pointerdown", O, !0), e.el.removeEventListener("pointerup", L, !0);
  }
  s("beforeInit", () => {
    n = W("span", e.params.a11y.notificationClass), n.setAttribute("aria-live", "assertive"), n.setAttribute("aria-atomic", "true");
  }), s("afterInit", () => {
    e.params.a11y.enabled && P();
  }), s("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    e.params.a11y.enabled && I();
  }), s("fromEdge toEdge afterInit lock unlock", () => {
    e.params.a11y.enabled && m();
  }), s("paginationUpdate", () => {
    e.params.a11y.enabled && C();
  }), s("destroy", () => {
    e.params.a11y.enabled && x();
  });
}
function Js(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    history: {
      enabled: !1,
      root: "",
      replaceState: !1,
      key: "slides",
      keepQuery: !1
    }
  });
  let n = !1, r = {};
  const l = (p) => p.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), d = (p) => {
    const w = R();
    let g;
    p ? g = new URL(p) : g = w.location;
    const v = g.pathname.slice(1).split("/").filter((S) => S !== ""), y = v.length, h = v[y - 2], m = v[y - 1];
    return {
      key: h,
      value: m
    };
  }, a = (p, w) => {
    const g = R();
    if (!n || !e.params.history.enabled)
      return;
    let v;
    e.params.url ? v = new URL(e.params.url) : v = g.location;
    const y = e.slides[w];
    let h = l(y.getAttribute("data-history"));
    if (e.params.history.root.length > 0) {
      let S = e.params.history.root;
      S[S.length - 1] === "/" && (S = S.slice(0, S.length - 1)), h = `${S}/${p ? `${p}/` : ""}${h}`;
    } else
      v.pathname.includes(p) || (h = `${p ? `${p}/` : ""}${h}`);
    e.params.history.keepQuery && (h += v.search);
    const m = g.history.state;
    m && m.value === h || (e.params.history.replaceState ? g.history.replaceState({
      value: h
    }, null, h) : g.history.pushState({
      value: h
    }, null, h));
  }, o = (p, w, g) => {
    if (w)
      for (let v = 0, y = e.slides.length; v < y; v += 1) {
        const h = e.slides[v];
        if (l(h.getAttribute("data-history")) === w) {
          const S = e.getSlideIndex(h);
          e.slideTo(S, p, g);
        }
      }
    else
      e.slideTo(0, p, g);
  }, u = () => {
    r = d(e.params.url), o(e.params.speed, r.value, !1);
  }, c = () => {
    const p = R();
    if (e.params.history) {
      if (!p.history || !p.history.pushState) {
        e.params.history.enabled = !1, e.params.hashNavigation.enabled = !0;
        return;
      }
      if (n = !0, r = d(e.params.url), !r.key && !r.value) {
        e.params.history.replaceState || p.addEventListener("popstate", u);
        return;
      }
      o(0, r.value, e.params.runCallbacksOnInit), e.params.history.replaceState || p.addEventListener("popstate", u);
    }
  }, f = () => {
    const p = R();
    e.params.history.replaceState || p.removeEventListener("popstate", u);
  };
  s("init", () => {
    e.params.history.enabled && c();
  }), s("destroy", () => {
    e.params.history.enabled && f();
  }), s("transitionEnd _freeModeNoMomentumRelease", () => {
    n && a(e.params.history.key, e.activeIndex);
  }), s("slideChange", () => {
    n && e.params.cssMode && a(e.params.history.key, e.activeIndex);
  });
}
function er(t) {
  let {
    swiper: e,
    extendParams: i,
    emit: s,
    on: n
  } = t, r = !1;
  const l = F(), d = R();
  i({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1,
      getSlideIndex(f, p) {
        if (e.virtual && e.params.virtual.enabled) {
          const w = e.slides.filter((v) => v.getAttribute("data-hash") === p)[0];
          return w ? parseInt(w.getAttribute("data-swiper-slide-index"), 10) : 0;
        }
        return e.getSlideIndex(X(e.slidesEl, `.${e.params.slideClass}[data-hash="${p}"], swiper-slide[data-hash="${p}"]`)[0]);
      }
    }
  });
  const a = () => {
    s("hashChange");
    const f = l.location.hash.replace("#", ""), p = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], w = p ? p.getAttribute("data-hash") : "";
    if (f !== w) {
      const g = e.params.hashNavigation.getSlideIndex(e, f);
      if (typeof g > "u" || Number.isNaN(g))
        return;
      e.slideTo(g);
    }
  }, o = () => {
    if (!r || !e.params.hashNavigation.enabled)
      return;
    const f = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], p = f ? f.getAttribute("data-hash") || f.getAttribute("data-history") : "";
    e.params.hashNavigation.replaceState && d.history && d.history.replaceState ? (d.history.replaceState(null, null, `#${p}` || ""), s("hashSet")) : (l.location.hash = p || "", s("hashSet"));
  }, u = () => {
    if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)
      return;
    r = !0;
    const f = l.location.hash.replace("#", "");
    if (f) {
      const w = e.params.hashNavigation.getSlideIndex(e, f);
      e.slideTo(w || 0, 0, e.params.runCallbacksOnInit, !0);
    }
    e.params.hashNavigation.watchState && d.addEventListener("hashchange", a);
  }, c = () => {
    e.params.hashNavigation.watchState && d.removeEventListener("hashchange", a);
  };
  n("init", () => {
    e.params.hashNavigation.enabled && u();
  }), n("destroy", () => {
    e.params.hashNavigation.enabled && c();
  }), n("transitionEnd _freeModeNoMomentumRelease", () => {
    r && o();
  }), n("slideChange", () => {
    r && e.params.cssMode && o();
  });
}
function tr(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s,
    emit: n,
    params: r
  } = t;
  e.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, i({
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !1,
      stopOnLastSlide: !1,
      reverseDirection: !1,
      pauseOnMouseEnter: !1
    }
  });
  let l, d, a = r && r.autoplay ? r.autoplay.delay : 3e3, o = r && r.autoplay ? r.autoplay.delay : 3e3, u, c = (/* @__PURE__ */ new Date()).getTime(), f, p, w, g, v, y, h;
  function m(A) {
    !e || e.destroyed || !e.wrapperEl || A.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", m), !h && M());
  }
  const S = () => {
    if (e.destroyed || !e.autoplay.running)
      return;
    e.autoplay.paused ? f = !0 : f && (o = u, f = !1);
    const A = e.autoplay.paused ? u : c + o - (/* @__PURE__ */ new Date()).getTime();
    e.autoplay.timeLeft = A, n("autoplayTimeLeft", A, A / a), d = requestAnimationFrame(() => {
      S();
    });
  }, T = () => {
    let A;
    return e.virtual && e.params.virtual.enabled ? A = e.slides.filter((G) => G.classList.contains("swiper-slide-active"))[0] : A = e.slides[e.activeIndex], A ? parseInt(A.getAttribute("data-swiper-autoplay"), 10) : void 0;
  }, C = (A) => {
    if (e.destroyed || !e.autoplay.running)
      return;
    cancelAnimationFrame(d), S();
    let z = typeof A > "u" ? e.params.autoplay.delay : A;
    a = e.params.autoplay.delay, o = e.params.autoplay.delay;
    const G = T();
    !Number.isNaN(G) && G > 0 && typeof A > "u" && (z = G, a = G, o = G), u = z;
    const V = e.params.speed, Y = () => {
      !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(V, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, V, !0, !0), n("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(V, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, V, !0, !0), n("autoplay")), e.params.cssMode && (c = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        C();
      })));
    };
    return z > 0 ? (clearTimeout(l), l = setTimeout(() => {
      Y();
    }, z)) : requestAnimationFrame(() => {
      Y();
    }), z;
  }, D = () => {
    c = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, C(), n("autoplayStart");
  }, O = () => {
    e.autoplay.running = !1, clearTimeout(l), cancelAnimationFrame(d), n("autoplayStop");
  }, L = (A, z) => {
    if (e.destroyed || !e.autoplay.running)
      return;
    clearTimeout(l), A || (y = !0);
    const G = () => {
      n("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", m) : M();
    };
    if (e.autoplay.paused = !0, z) {
      v && (u = e.params.autoplay.delay), v = !1, G();
      return;
    }
    u = (u || e.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - c), !(e.isEnd && u < 0 && !e.params.loop) && (u < 0 && (u = 0), G());
  }, M = () => {
    e.isEnd && u < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (c = (/* @__PURE__ */ new Date()).getTime(), y ? (y = !1, C(u)) : C(), e.autoplay.paused = !1, n("autoplayResume"));
  }, I = () => {
    if (e.destroyed || !e.autoplay.running)
      return;
    const A = F();
    A.visibilityState === "hidden" && (y = !0, L(!0)), A.visibilityState === "visible" && M();
  }, P = (A) => {
    A.pointerType === "mouse" && (y = !0, h = !0, !(e.animating || e.autoplay.paused) && L(!0));
  }, x = (A) => {
    A.pointerType === "mouse" && (h = !1, e.autoplay.paused && M());
  }, b = () => {
    e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", P), e.el.addEventListener("pointerleave", x));
  }, E = () => {
    e.el.removeEventListener("pointerenter", P), e.el.removeEventListener("pointerleave", x);
  }, $ = () => {
    F().addEventListener("visibilitychange", I);
  }, k = () => {
    F().removeEventListener("visibilitychange", I);
  };
  s("init", () => {
    e.params.autoplay.enabled && (b(), $(), D());
  }), s("destroy", () => {
    E(), k(), e.autoplay.running && O();
  }), s("_freeModeStaticRelease", () => {
    (w || y) && M();
  }), s("_freeModeNoMomentumRelease", () => {
    e.params.autoplay.disableOnInteraction ? O() : L(!0, !0);
  }), s("beforeTransitionStart", (A, z, G) => {
    e.destroyed || !e.autoplay.running || (G || !e.params.autoplay.disableOnInteraction ? L(!0, !0) : O());
  }), s("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (e.params.autoplay.disableOnInteraction) {
        O();
        return;
      }
      p = !0, w = !1, y = !1, g = setTimeout(() => {
        y = !0, w = !0, L(!0);
      }, 200);
    }
  }), s("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !p)) {
      if (clearTimeout(g), clearTimeout(l), e.params.autoplay.disableOnInteraction) {
        w = !1, p = !1;
        return;
      }
      w && e.params.cssMode && M(), w = !1, p = !1;
    }
  }), s("slideChange", () => {
    e.destroyed || !e.autoplay.running || (v = !0);
  }), Object.assign(e.autoplay, {
    start: D,
    stop: O,
    pause: L,
    resume: M
  });
}
function ir(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let n = !1, r = !1;
  e.thumbs = {
    swiper: null
  };
  function l() {
    const o = e.thumbs.swiper;
    if (!o || o.destroyed)
      return;
    const u = o.clickedIndex, c = o.clickedSlide;
    if (c && c.classList.contains(e.params.thumbs.slideThumbActiveClass) || typeof u > "u" || u === null)
      return;
    let f;
    o.params.loop ? f = parseInt(o.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : f = u, e.params.loop ? e.slideToLoop(f) : e.slideTo(f);
  }
  function d() {
    const {
      thumbs: o
    } = e.params;
    if (n)
      return !1;
    n = !0;
    const u = e.constructor;
    if (o.swiper instanceof u)
      e.thumbs.swiper = o.swiper, Object.assign(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), e.thumbs.swiper.update();
    else if (me(o.swiper)) {
      const c = Object.assign({}, o.swiper);
      Object.assign(c, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), e.thumbs.swiper = new u(c), r = !0;
    }
    return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", l), !0;
  }
  function a(o) {
    const u = e.thumbs.swiper;
    if (!u || u.destroyed)
      return;
    const c = u.params.slidesPerView === "auto" ? u.slidesPerViewDynamic() : u.params.slidesPerView;
    let f = 1;
    const p = e.params.thumbs.slideThumbActiveClass;
    if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (f = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (f = 1), f = Math.floor(f), u.slides.forEach((v) => v.classList.remove(p)), u.params.loop || u.params.virtual && u.params.virtual.enabled)
      for (let v = 0; v < f; v += 1)
        X(u.slidesEl, `[data-swiper-slide-index="${e.realIndex + v}"]`).forEach((y) => {
          y.classList.add(p);
        });
    else
      for (let v = 0; v < f; v += 1)
        u.slides[e.realIndex + v] && u.slides[e.realIndex + v].classList.add(p);
    const w = e.params.thumbs.autoScrollOffset, g = w && !u.params.loop;
    if (e.realIndex !== u.realIndex || g) {
      const v = u.activeIndex;
      let y, h;
      if (u.params.loop) {
        const m = u.slides.filter((S) => S.getAttribute("data-swiper-slide-index") === `${e.realIndex}`)[0];
        y = u.slides.indexOf(m), h = e.activeIndex > e.previousIndex ? "next" : "prev";
      } else
        y = e.realIndex, h = y > e.previousIndex ? "next" : "prev";
      g && (y += h === "next" ? w : -1 * w), u.visibleSlidesIndexes && u.visibleSlidesIndexes.indexOf(y) < 0 && (u.params.centeredSlides ? y > v ? y = y - Math.floor(c / 2) + 1 : y = y + Math.floor(c / 2) - 1 : y > v && u.params.slidesPerGroup, u.slideTo(y, o ? 0 : void 0));
    }
  }
  s("beforeInit", () => {
    const {
      thumbs: o
    } = e.params;
    if (!(!o || !o.swiper))
      if (typeof o.swiper == "string" || o.swiper instanceof HTMLElement) {
        const u = F(), c = () => {
          const p = typeof o.swiper == "string" ? u.querySelector(o.swiper) : o.swiper;
          if (p && p.swiper)
            o.swiper = p.swiper, d(), a(!0);
          else if (p) {
            const w = (g) => {
              o.swiper = g.detail[0], p.removeEventListener("init", w), d(), a(!0), o.swiper.update(), e.update();
            };
            p.addEventListener("init", w);
          }
          return p;
        }, f = () => {
          if (e.destroyed)
            return;
          c() || requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      } else
        d(), a(!0);
  }), s("slideChange update resize observerUpdate", () => {
    a();
  }), s("setTransition", (o, u) => {
    const c = e.thumbs.swiper;
    !c || c.destroyed || c.setTransition(u);
  }), s("beforeDestroy", () => {
    const o = e.thumbs.swiper;
    !o || o.destroyed || r && o.destroy();
  }), Object.assign(e.thumbs, {
    init: d,
    update: a
  });
}
function sr(t) {
  let {
    swiper: e,
    extendParams: i,
    emit: s,
    once: n
  } = t;
  i({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02
    }
  });
  function r() {
    if (e.params.cssMode)
      return;
    const a = e.getTranslate();
    e.setTranslate(a), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
      currentPos: e.rtl ? e.translate : -e.translate
    });
  }
  function l() {
    if (e.params.cssMode)
      return;
    const {
      touchEventsData: a,
      touches: o
    } = e;
    a.velocities.length === 0 && a.velocities.push({
      position: o[e.isHorizontal() ? "startX" : "startY"],
      time: a.touchStartTime
    }), a.velocities.push({
      position: o[e.isHorizontal() ? "currentX" : "currentY"],
      time: U()
    });
  }
  function d(a) {
    let {
      currentPos: o
    } = a;
    if (e.params.cssMode)
      return;
    const {
      params: u,
      wrapperEl: c,
      rtlTranslate: f,
      snapGrid: p,
      touchEventsData: w
    } = e, v = U() - w.touchStartTime;
    if (o < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (o > -e.maxTranslate()) {
      e.slides.length < p.length ? e.slideTo(p.length - 1) : e.slideTo(e.slides.length - 1);
      return;
    }
    if (u.freeMode.momentum) {
      if (w.velocities.length > 1) {
        const O = w.velocities.pop(), L = w.velocities.pop(), M = O.position - L.position, I = O.time - L.time;
        e.velocity = M / I, e.velocity /= 2, Math.abs(e.velocity) < u.freeMode.minimumVelocity && (e.velocity = 0), (I > 150 || U() - O.time > 300) && (e.velocity = 0);
      } else
        e.velocity = 0;
      e.velocity *= u.freeMode.momentumVelocityRatio, w.velocities.length = 0;
      let y = 1e3 * u.freeMode.momentumRatio;
      const h = e.velocity * y;
      let m = e.translate + h;
      f && (m = -m);
      let S = !1, T;
      const C = Math.abs(e.velocity) * 20 * u.freeMode.momentumBounceRatio;
      let D;
      if (m < e.maxTranslate())
        u.freeMode.momentumBounce ? (m + e.maxTranslate() < -C && (m = e.maxTranslate() - C), T = e.maxTranslate(), S = !0, w.allowMomentumBounce = !0) : m = e.maxTranslate(), u.loop && u.centeredSlides && (D = !0);
      else if (m > e.minTranslate())
        u.freeMode.momentumBounce ? (m - e.minTranslate() > C && (m = e.minTranslate() + C), T = e.minTranslate(), S = !0, w.allowMomentumBounce = !0) : m = e.minTranslate(), u.loop && u.centeredSlides && (D = !0);
      else if (u.freeMode.sticky) {
        let O;
        for (let L = 0; L < p.length; L += 1)
          if (p[L] > -m) {
            O = L;
            break;
          }
        Math.abs(p[O] - m) < Math.abs(p[O - 1] - m) || e.swipeDirection === "next" ? m = p[O] : m = p[O - 1], m = -m;
      }
      if (D && n("transitionEnd", () => {
        e.loopFix();
      }), e.velocity !== 0) {
        if (f ? y = Math.abs((-m - e.translate) / e.velocity) : y = Math.abs((m - e.translate) / e.velocity), u.freeMode.sticky) {
          const O = Math.abs((f ? -m : m) - e.translate), L = e.slidesSizesGrid[e.activeIndex];
          O < L ? y = u.speed : O < 2 * L ? y = u.speed * 1.5 : y = u.speed * 2.5;
        }
      } else if (u.freeMode.sticky) {
        e.slideToClosest();
        return;
      }
      u.freeMode.momentumBounce && S ? (e.updateProgress(T), e.setTransition(y), e.setTranslate(m), e.transitionStart(!0, e.swipeDirection), e.animating = !0, ge(c, () => {
        !e || e.destroyed || !w.allowMomentumBounce || (s("momentumBounce"), e.setTransition(u.speed), setTimeout(() => {
          e.setTranslate(T), ge(c, () => {
            !e || e.destroyed || e.transitionEnd();
          });
        }, 0));
      })) : e.velocity ? (s("_freeModeNoMomentumRelease"), e.updateProgress(m), e.setTransition(y), e.setTranslate(m), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, ge(c, () => {
        !e || e.destroyed || e.transitionEnd();
      }))) : e.updateProgress(m), e.updateActiveIndex(), e.updateSlidesClasses();
    } else if (u.freeMode.sticky) {
      e.slideToClosest();
      return;
    } else
      u.freeMode && s("_freeModeNoMomentumRelease");
    (!u.freeMode.momentum || v >= u.longSwipesMs) && (s("_freeModeStaticRelease"), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
  }
  Object.assign(e, {
    freeMode: {
      onTouchStart: r,
      onTouchMove: l,
      onTouchEnd: d
    }
  });
}
function rr(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    grid: {
      rows: 1,
      fill: "column"
    }
  });
  let n, r, l, d;
  const a = () => {
    let g = e.params.spaceBetween;
    return typeof g == "string" && g.indexOf("%") >= 0 ? g = parseFloat(g.replace("%", "")) / 100 * e.size : typeof g == "string" && (g = parseFloat(g)), g;
  }, o = (g) => {
    const {
      slidesPerView: v
    } = e.params, {
      rows: y,
      fill: h
    } = e.params.grid, m = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : g.length;
    l = Math.floor(m / y), Math.floor(m / y) === m / y ? n = m : n = Math.ceil(m / y) * y, v !== "auto" && h === "row" && (n = Math.max(n, v * y)), r = n / y;
  }, u = () => {
    e.slides && e.slides.forEach((g) => {
      g.swiperSlideGridSet && (g.style.height = "", g.style[e.getDirectionLabel("margin-top")] = "");
    });
  }, c = (g, v, y) => {
    const {
      slidesPerGroup: h
    } = e.params, m = a(), {
      rows: S,
      fill: T
    } = e.params.grid, C = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : y.length;
    let D, O, L;
    if (T === "row" && h > 1) {
      const M = Math.floor(g / (h * S)), I = g - S * h * M, P = M === 0 ? h : Math.min(Math.ceil((C - M * S * h) / S), h);
      L = Math.floor(I / P), O = I - L * P + M * h, D = O + L * n / S, v.style.order = D;
    } else
      T === "column" ? (O = Math.floor(g / S), L = g - O * S, (O > l || O === l && L === S - 1) && (L += 1, L >= S && (L = 0, O += 1))) : (L = Math.floor(g / r), O = g - L * r);
    v.row = L, v.column = O, v.style.height = `calc((100% - ${(S - 1) * m}px) / ${S})`, v.style[e.getDirectionLabel("margin-top")] = L !== 0 ? m && `${m}px` : "", v.swiperSlideGridSet = !0;
  }, f = (g, v) => {
    const {
      centeredSlides: y,
      roundLengths: h
    } = e.params, m = a(), {
      rows: S
    } = e.params.grid;
    if (e.virtualSize = (g + m) * n, e.virtualSize = Math.ceil(e.virtualSize / S) - m, e.params.cssMode || (e.wrapperEl.style[e.getDirectionLabel("width")] = `${e.virtualSize + m}px`), y) {
      const T = [];
      for (let C = 0; C < v.length; C += 1) {
        let D = v[C];
        h && (D = Math.floor(D)), v[C] < e.virtualSize + v[0] && T.push(D);
      }
      v.splice(0, v.length), v.push(...T);
    }
  }, p = () => {
    d = e.params.grid && e.params.grid.rows > 1;
  }, w = () => {
    const {
      params: g,
      el: v
    } = e, y = g.grid && g.grid.rows > 1;
    d && !y ? (v.classList.remove(`${g.containerModifierClass}grid`, `${g.containerModifierClass}grid-column`), l = 1, e.emitContainerClasses()) : !d && y && (v.classList.add(`${g.containerModifierClass}grid`), g.grid.fill === "column" && v.classList.add(`${g.containerModifierClass}grid-column`), e.emitContainerClasses()), d = y;
  };
  s("init", p), s("update", w), e.grid = {
    initSlides: o,
    unsetSlides: u,
    updateSlide: c,
    updateWrapperSize: f
  };
}
function nr(t) {
  const e = this, {
    params: i,
    slidesEl: s
  } = e;
  i.loop && e.loopDestroy();
  const n = (r) => {
    if (typeof r == "string") {
      const l = document.createElement("div");
      l.innerHTML = r, s.append(l.children[0]), l.innerHTML = "";
    } else
      s.append(r);
  };
  if (typeof t == "object" && "length" in t)
    for (let r = 0; r < t.length; r += 1)
      t[r] && n(t[r]);
  else
    n(t);
  e.recalcSlides(), i.loop && e.loopCreate(), (!i.observer || e.isElement) && e.update();
}
function ar(t) {
  const e = this, {
    params: i,
    activeIndex: s,
    slidesEl: n
  } = e;
  i.loop && e.loopDestroy();
  let r = s + 1;
  const l = (d) => {
    if (typeof d == "string") {
      const a = document.createElement("div");
      a.innerHTML = d, n.prepend(a.children[0]), a.innerHTML = "";
    } else
      n.prepend(d);
  };
  if (typeof t == "object" && "length" in t) {
    for (let d = 0; d < t.length; d += 1)
      t[d] && l(t[d]);
    r = s + t.length;
  } else
    l(t);
  e.recalcSlides(), i.loop && e.loopCreate(), (!i.observer || e.isElement) && e.update(), e.slideTo(r, 0, !1);
}
function lr(t, e) {
  const i = this, {
    params: s,
    activeIndex: n,
    slidesEl: r
  } = i;
  let l = n;
  s.loop && (l -= i.loopedSlides, i.loopDestroy(), i.recalcSlides());
  const d = i.slides.length;
  if (t <= 0) {
    i.prependSlide(e);
    return;
  }
  if (t >= d) {
    i.appendSlide(e);
    return;
  }
  let a = l > t ? l + 1 : l;
  const o = [];
  for (let u = d - 1; u >= t; u -= 1) {
    const c = i.slides[u];
    c.remove(), o.unshift(c);
  }
  if (typeof e == "object" && "length" in e) {
    for (let u = 0; u < e.length; u += 1)
      e[u] && r.append(e[u]);
    a = l > t ? l + e.length : l;
  } else
    r.append(e);
  for (let u = 0; u < o.length; u += 1)
    r.append(o[u]);
  i.recalcSlides(), s.loop && i.loopCreate(), (!s.observer || i.isElement) && i.update(), s.loop ? i.slideTo(a + i.loopedSlides, 0, !1) : i.slideTo(a, 0, !1);
}
function or(t) {
  const e = this, {
    params: i,
    activeIndex: s
  } = e;
  let n = s;
  i.loop && (n -= e.loopedSlides, e.loopDestroy());
  let r = n, l;
  if (typeof t == "object" && "length" in t) {
    for (let d = 0; d < t.length; d += 1)
      l = t[d], e.slides[l] && e.slides[l].remove(), l < r && (r -= 1);
    r = Math.max(r, 0);
  } else
    l = t, e.slides[l] && e.slides[l].remove(), l < r && (r -= 1), r = Math.max(r, 0);
  e.recalcSlides(), i.loop && e.loopCreate(), (!i.observer || e.isElement) && e.update(), i.loop ? e.slideTo(r + e.loopedSlides, 0, !1) : e.slideTo(r, 0, !1);
}
function dr() {
  const t = this, e = [];
  for (let i = 0; i < t.slides.length; i += 1)
    e.push(i);
  t.removeSlide(e);
}
function cr(t) {
  let {
    swiper: e
  } = t;
  Object.assign(e, {
    appendSlide: nr.bind(e),
    prependSlide: ar.bind(e),
    addSlide: lr.bind(e),
    removeSlide: or.bind(e),
    removeAllSlides: dr.bind(e)
  });
}
function ue(t) {
  const {
    effect: e,
    swiper: i,
    on: s,
    setTranslate: n,
    setTransition: r,
    overwriteParams: l,
    perspective: d,
    recreateShadows: a,
    getEffectParams: o
  } = t;
  s("beforeInit", () => {
    if (i.params.effect !== e)
      return;
    i.classNames.push(`${i.params.containerModifierClass}${e}`), d && d() && i.classNames.push(`${i.params.containerModifierClass}3d`);
    const c = l ? l() : {};
    Object.assign(i.params, c), Object.assign(i.originalParams, c);
  }), s("setTranslate", () => {
    i.params.effect === e && n();
  }), s("setTransition", (c, f) => {
    i.params.effect === e && r(f);
  }), s("transitionEnd", () => {
    if (i.params.effect === e && a) {
      if (!o || !o().slideShadows)
        return;
      i.slides.forEach((c) => {
        c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((f) => f.remove());
      }), a();
    }
  });
  let u;
  s("virtualUpdate", () => {
    i.params.effect === e && (i.slides.length || (u = !0), requestAnimationFrame(() => {
      u && i.slides && i.slides.length && (n(), u = !1);
    }));
  });
}
function be(t, e) {
  const i = le(e);
  return i !== e && (i.style.backfaceVisibility = "hidden", i.style["-webkit-backface-visibility"] = "hidden"), i;
}
function ze(t) {
  let {
    swiper: e,
    duration: i,
    transformElements: s,
    allSlides: n
  } = t;
  const {
    activeIndex: r
  } = e, l = (d) => d.parentElement ? d.parentElement : e.slides.filter((o) => o.shadowRoot && o.shadowRoot === d.parentNode)[0];
  if (e.params.virtualTranslate && i !== 0) {
    let d = !1, a;
    n ? a = s : a = s.filter((o) => {
      const u = o.classList.contains("swiper-slide-transform") ? l(o) : o;
      return e.getSlideIndex(u) === r;
    }), a.forEach((o) => {
      ge(o, () => {
        if (d || !e || e.destroyed)
          return;
        d = !0, e.animating = !1;
        const u = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        e.wrapperEl.dispatchEvent(u);
      });
    });
  }
}
function ur(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    fadeEffect: {
      crossFade: !1
    }
  }), ue({
    effect: "fade",
    swiper: e,
    on: s,
    setTranslate: () => {
      const {
        slides: l
      } = e, d = e.params.fadeEffect;
      for (let a = 0; a < l.length; a += 1) {
        const o = e.slides[a];
        let c = -o.swiperSlideOffset;
        e.params.virtualTranslate || (c -= e.translate);
        let f = 0;
        e.isHorizontal() || (f = c, c = 0);
        const p = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(o.progress), 0) : 1 + Math.min(Math.max(o.progress, -1), 0), w = be(d, o);
        w.style.opacity = p, w.style.transform = `translate3d(${c}px, ${f}px, 0px)`;
      }
    },
    setTransition: (l) => {
      const d = e.slides.map((a) => le(a));
      d.forEach((a) => {
        a.style.transitionDuration = `${l}ms`;
      }), ze({
        swiper: e,
        duration: l,
        transformElements: d,
        allSlides: !0
      });
    },
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode
    })
  });
}
function fr(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const n = (a, o, u) => {
    let c = u ? a.querySelector(".swiper-slide-shadow-left") : a.querySelector(".swiper-slide-shadow-top"), f = u ? a.querySelector(".swiper-slide-shadow-right") : a.querySelector(".swiper-slide-shadow-bottom");
    c || (c = W("div", `swiper-slide-shadow-cube swiper-slide-shadow-${u ? "left" : "top"}`.split(" ")), a.append(c)), f || (f = W("div", `swiper-slide-shadow-cube swiper-slide-shadow-${u ? "right" : "bottom"}`.split(" ")), a.append(f)), c && (c.style.opacity = Math.max(-o, 0)), f && (f.style.opacity = Math.max(o, 0));
  };
  ue({
    effect: "cube",
    swiper: e,
    on: s,
    setTranslate: () => {
      const {
        el: a,
        wrapperEl: o,
        slides: u,
        width: c,
        height: f,
        rtlTranslate: p,
        size: w,
        browser: g
      } = e, v = e.params.cubeEffect, y = e.isHorizontal(), h = e.virtual && e.params.virtual.enabled;
      let m = 0, S;
      v.shadow && (y ? (S = e.wrapperEl.querySelector(".swiper-cube-shadow"), S || (S = W("div", "swiper-cube-shadow"), e.wrapperEl.append(S)), S.style.height = `${c}px`) : (S = a.querySelector(".swiper-cube-shadow"), S || (S = W("div", "swiper-cube-shadow"), a.append(S))));
      for (let C = 0; C < u.length; C += 1) {
        const D = u[C];
        let O = C;
        h && (O = parseInt(D.getAttribute("data-swiper-slide-index"), 10));
        let L = O * 90, M = Math.floor(L / 360);
        p && (L = -L, M = Math.floor(-L / 360));
        const I = Math.max(Math.min(D.progress, 1), -1);
        let P = 0, x = 0, b = 0;
        O % 4 === 0 ? (P = -M * 4 * w, b = 0) : (O - 1) % 4 === 0 ? (P = 0, b = -M * 4 * w) : (O - 2) % 4 === 0 ? (P = w + M * 4 * w, b = w) : (O - 3) % 4 === 0 && (P = -w, b = 3 * w + w * 4 * M), p && (P = -P), y || (x = P, P = 0);
        const E = `rotateX(${y ? 0 : -L}deg) rotateY(${y ? L : 0}deg) translate3d(${P}px, ${x}px, ${b}px)`;
        I <= 1 && I > -1 && (m = O * 90 + I * 90, p && (m = -O * 90 - I * 90), e.browser && e.browser.isSafari && Math.abs(m) / 90 % 2 === 1 && (m += 1e-3)), D.style.transform = E, v.slideShadows && n(D, I, y);
      }
      if (o.style.transformOrigin = `50% 50% -${w / 2}px`, o.style["-webkit-transform-origin"] = `50% 50% -${w / 2}px`, v.shadow)
        if (y)
          S.style.transform = `translate3d(0px, ${c / 2 + v.shadowOffset}px, ${-c / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${v.shadowScale})`;
        else {
          const C = Math.abs(m) - Math.floor(Math.abs(m) / 90) * 90, D = 1.5 - (Math.sin(C * 2 * Math.PI / 360) / 2 + Math.cos(C * 2 * Math.PI / 360) / 2), O = v.shadowScale, L = v.shadowScale / D, M = v.shadowOffset;
          S.style.transform = `scale3d(${O}, 1, ${L}) translate3d(0px, ${f / 2 + M}px, ${-f / 2 / L}px) rotateX(-89.99deg)`;
        }
      const T = (g.isSafari || g.isWebView) && g.needPerspectiveFix ? -w / 2 : 0;
      o.style.transform = `translate3d(0px,0,${T}px) rotateX(${e.isHorizontal() ? 0 : m}deg) rotateY(${e.isHorizontal() ? -m : 0}deg)`, o.style.setProperty("--swiper-cube-translate-z", `${T}px`);
    },
    setTransition: (a) => {
      const {
        el: o,
        slides: u
      } = e;
      if (u.forEach((c) => {
        c.style.transitionDuration = `${a}ms`, c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((f) => {
          f.style.transitionDuration = `${a}ms`;
        });
      }), e.params.cubeEffect.shadow && !e.isHorizontal()) {
        const c = o.querySelector(".swiper-cube-shadow");
        c && (c.style.transitionDuration = `${a}ms`);
      }
    },
    recreateShadows: () => {
      const a = e.isHorizontal();
      e.slides.forEach((o) => {
        const u = Math.max(Math.min(o.progress, 1), -1);
        n(o, u, a);
      });
    },
    getEffectParams: () => e.params.cubeEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: !1,
      virtualTranslate: !0
    })
  });
}
function de(t, e, i) {
  const s = `swiper-slide-shadow${i ? `-${i}` : ""}${t ? ` swiper-slide-shadow-${t}` : ""}`, n = le(e);
  let r = n.querySelector(`.${s.split(" ").join(".")}`);
  return r || (r = W("div", s.split(" ")), n.append(r)), r;
}
function pr(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    flipEffect: {
      slideShadows: !0,
      limitRotation: !0
    }
  });
  const n = (a, o) => {
    let u = e.isHorizontal() ? a.querySelector(".swiper-slide-shadow-left") : a.querySelector(".swiper-slide-shadow-top"), c = e.isHorizontal() ? a.querySelector(".swiper-slide-shadow-right") : a.querySelector(".swiper-slide-shadow-bottom");
    u || (u = de("flip", a, e.isHorizontal() ? "left" : "top")), c || (c = de("flip", a, e.isHorizontal() ? "right" : "bottom")), u && (u.style.opacity = Math.max(-o, 0)), c && (c.style.opacity = Math.max(o, 0));
  };
  ue({
    effect: "flip",
    swiper: e,
    on: s,
    setTranslate: () => {
      const {
        slides: a,
        rtlTranslate: o
      } = e, u = e.params.flipEffect;
      for (let c = 0; c < a.length; c += 1) {
        const f = a[c];
        let p = f.progress;
        e.params.flipEffect.limitRotation && (p = Math.max(Math.min(f.progress, 1), -1));
        const w = f.swiperSlideOffset;
        let v = -180 * p, y = 0, h = e.params.cssMode ? -w - e.translate : -w, m = 0;
        e.isHorizontal() ? o && (v = -v) : (m = h, h = 0, y = -v, v = 0), e.browser && e.browser.isSafari && (Math.abs(v) / 90 % 2 === 1 && (v += 1e-3), Math.abs(y) / 90 % 2 === 1 && (y += 1e-3)), f.style.zIndex = -Math.abs(Math.round(p)) + a.length, u.slideShadows && n(f, p);
        const S = `translate3d(${h}px, ${m}px, 0px) rotateX(${y}deg) rotateY(${v}deg)`, T = be(u, f);
        T.style.transform = S;
      }
    },
    setTransition: (a) => {
      const o = e.slides.map((u) => le(u));
      o.forEach((u) => {
        u.style.transitionDuration = `${a}ms`, u.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((c) => {
          c.style.transitionDuration = `${a}ms`;
        });
      }), ze({
        swiper: e,
        duration: a,
        transformElements: o
      });
    },
    recreateShadows: () => {
      e.params.flipEffect, e.slides.forEach((a) => {
        let o = a.progress;
        e.params.flipEffect.limitRotation && (o = Math.max(Math.min(a.progress, 1), -1)), n(a, o);
      });
    },
    getEffectParams: () => e.params.flipEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode
    })
  });
}
function mr(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0
    }
  }), ue({
    effect: "coverflow",
    swiper: e,
    on: s,
    setTranslate: () => {
      const {
        width: l,
        height: d,
        slides: a,
        slidesSizesGrid: o
      } = e, u = e.params.coverflowEffect, c = e.isHorizontal(), f = e.translate, p = c ? -f + l / 2 : -f + d / 2, w = c ? u.rotate : -u.rotate, g = u.depth;
      for (let v = 0, y = a.length; v < y; v += 1) {
        const h = a[v], m = o[v], S = h.swiperSlideOffset, T = (p - S - m / 2) / m, C = typeof u.modifier == "function" ? u.modifier(T) : T * u.modifier;
        let D = c ? w * C : 0, O = c ? 0 : w * C, L = -g * Math.abs(C), M = u.stretch;
        typeof M == "string" && M.indexOf("%") !== -1 && (M = parseFloat(u.stretch) / 100 * m);
        let I = c ? 0 : M * C, P = c ? M * C : 0, x = 1 - (1 - u.scale) * Math.abs(C);
        Math.abs(P) < 1e-3 && (P = 0), Math.abs(I) < 1e-3 && (I = 0), Math.abs(L) < 1e-3 && (L = 0), Math.abs(D) < 1e-3 && (D = 0), Math.abs(O) < 1e-3 && (O = 0), Math.abs(x) < 1e-3 && (x = 0), e.browser && e.browser.isSafari && (Math.abs(D) / 90 % 2 === 1 && (D += 1e-3), Math.abs(O) / 90 % 2 === 1 && (O += 1e-3));
        const b = `translate3d(${P}px,${I}px,${L}px)  rotateX(${O}deg) rotateY(${D}deg) scale(${x})`, E = be(u, h);
        if (E.style.transform = b, h.style.zIndex = -Math.abs(Math.round(C)) + 1, u.slideShadows) {
          let $ = c ? h.querySelector(".swiper-slide-shadow-left") : h.querySelector(".swiper-slide-shadow-top"), k = c ? h.querySelector(".swiper-slide-shadow-right") : h.querySelector(".swiper-slide-shadow-bottom");
          $ || ($ = de("coverflow", h, c ? "left" : "top")), k || (k = de("coverflow", h, c ? "right" : "bottom")), $ && ($.style.opacity = C > 0 ? C : 0), k && (k.style.opacity = -C > 0 ? -C : 0);
        }
      }
    },
    setTransition: (l) => {
      e.slides.map((a) => le(a)).forEach((a) => {
        a.style.transitionDuration = `${l}ms`, a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((o) => {
          o.style.transitionDuration = `${l}ms`;
        });
      });
    },
    perspective: () => !0,
    overwriteParams: () => ({
      watchSlidesProgress: !0
    })
  });
}
function hr(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const n = (d) => typeof d == "string" ? d : `${d}px`;
  ue({
    effect: "creative",
    swiper: e,
    on: s,
    setTranslate: () => {
      const {
        slides: d,
        wrapperEl: a,
        slidesSizesGrid: o
      } = e, u = e.params.creativeEffect, {
        progressMultiplier: c
      } = u, f = e.params.centeredSlides;
      if (f) {
        const p = o[0] / 2 - e.params.slidesOffsetBefore || 0;
        a.style.transform = `translateX(calc(50% - ${p}px))`;
      }
      for (let p = 0; p < d.length; p += 1) {
        const w = d[p], g = w.progress, v = Math.min(Math.max(w.progress, -u.limitProgress), u.limitProgress);
        let y = v;
        f || (y = Math.min(Math.max(w.originalProgress, -u.limitProgress), u.limitProgress));
        const h = w.swiperSlideOffset, m = [e.params.cssMode ? -h - e.translate : -h, 0, 0], S = [0, 0, 0];
        let T = !1;
        e.isHorizontal() || (m[1] = m[0], m[0] = 0);
        let C = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        v < 0 ? (C = u.next, T = !0) : v > 0 && (C = u.prev, T = !0), m.forEach((x, b) => {
          m[b] = `calc(${x}px + (${n(C.translate[b])} * ${Math.abs(v * c)}))`;
        }), S.forEach((x, b) => {
          let E = C.rotate[b] * Math.abs(v * c);
          e.browser && e.browser.isSafari && Math.abs(E) / 90 % 2 === 1 && (E += 1e-3), S[b] = E;
        }), w.style.zIndex = -Math.abs(Math.round(g)) + d.length;
        const D = m.join(", "), O = `rotateX(${S[0]}deg) rotateY(${S[1]}deg) rotateZ(${S[2]}deg)`, L = y < 0 ? `scale(${1 + (1 - C.scale) * y * c})` : `scale(${1 - (1 - C.scale) * y * c})`, M = y < 0 ? 1 + (1 - C.opacity) * y * c : 1 - (1 - C.opacity) * y * c, I = `translate3d(${D}) ${O} ${L}`;
        if (T && C.shadow || !T) {
          let x = w.querySelector(".swiper-slide-shadow");
          if (!x && C.shadow && (x = de("creative", w)), x) {
            const b = u.shadowPerProgress ? v * (1 / u.limitProgress) : v;
            x.style.opacity = Math.min(Math.max(Math.abs(b), 0), 1);
          }
        }
        const P = be(u, w);
        P.style.transform = I, P.style.opacity = M, C.origin && (P.style.transformOrigin = C.origin);
      }
    },
    setTransition: (d) => {
      const a = e.slides.map((o) => le(o));
      a.forEach((o) => {
        o.style.transitionDuration = `${d}ms`, o.querySelectorAll(".swiper-slide-shadow").forEach((u) => {
          u.style.transitionDuration = `${d}ms`;
        });
      }), ze({
        swiper: e,
        duration: d,
        transformElements: a,
        allSlides: !0
      });
    },
    perspective: () => e.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !e.params.cssMode
    })
  });
}
function gr(t) {
  let {
    swiper: e,
    extendParams: i,
    on: s
  } = t;
  i({
    cardsEffect: {
      slideShadows: !0,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  }), ue({
    effect: "cards",
    swiper: e,
    on: s,
    setTranslate: () => {
      const {
        slides: l,
        activeIndex: d,
        rtlTranslate: a
      } = e, o = e.params.cardsEffect, {
        startTranslate: u,
        isTouched: c
      } = e.touchEventsData, f = a ? -e.translate : e.translate;
      for (let p = 0; p < l.length; p += 1) {
        const w = l[p], g = w.progress, v = Math.min(Math.max(g, -4), 4);
        let y = w.swiperSlideOffset;
        e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (y -= l[0].swiperSlideOffset);
        let h = e.params.cssMode ? -y - e.translate : -y, m = 0;
        const S = -100 * Math.abs(v);
        let T = 1, C = -o.perSlideRotate * v, D = o.perSlideOffset - Math.abs(v) * 0.75;
        const O = e.virtual && e.params.virtual.enabled ? e.virtual.from + p : p, L = (O === d || O === d - 1) && v > 0 && v < 1 && (c || e.params.cssMode) && f < u, M = (O === d || O === d + 1) && v < 0 && v > -1 && (c || e.params.cssMode) && f > u;
        if (L || M) {
          const b = (1 - Math.abs((Math.abs(v) - 0.5) / 0.5)) ** 0.5;
          C += -28 * v * b, T += -0.5 * b, D += 96 * b, m = `${-25 * b * Math.abs(v)}%`;
        }
        if (v < 0 ? h = `calc(${h}px ${a ? "-" : "+"} (${D * Math.abs(v)}%))` : v > 0 ? h = `calc(${h}px ${a ? "-" : "+"} (-${D * Math.abs(v)}%))` : h = `${h}px`, !e.isHorizontal()) {
          const b = m;
          m = h, h = b;
        }
        const I = v < 0 ? `${1 + (1 - T) * v}` : `${1 - (1 - T) * v}`, P = `
        translate3d(${h}, ${m}, ${S}px)
        rotateZ(${o.rotate ? a ? -C : C : 0}deg)
        scale(${I})
      `;
        if (o.slideShadows) {
          let b = w.querySelector(".swiper-slide-shadow");
          b || (b = de("cards", w)), b && (b.style.opacity = Math.min(Math.max((Math.abs(v) - 0.5) / 0.5, 0), 1));
        }
        w.style.zIndex = -Math.abs(Math.round(g)) + l.length;
        const x = be(o, w);
        x.style.transform = P;
      }
    },
    setTransition: (l) => {
      const d = e.slides.map((a) => le(a));
      d.forEach((a) => {
        a.style.transitionDuration = `${l}ms`, a.querySelectorAll(".swiper-slide-shadow").forEach((o) => {
          o.style.transitionDuration = `${l}ms`;
        });
      }), ze({
        swiper: e,
        duration: l,
        transformElements: d
      });
    },
    perspective: () => !0,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !e.params.cssMode
    })
  });
}
const vr = [Xs, Ys, Fs, Ns, Ws, js, Us, Ks, Zs, Qs, Js, er, tr, ir, sr, rr, cr, ur, fr, pr, mr, hr, gr];
q.use(vr);
const wr = () => {
  let t = document.querySelectorAll(".swiper");
  for (let e of t) {
    let i = e.parentNode.parentNode.querySelector(".custom_slider_buttons"), s = {
      speed: 400,
      slidesPerView: 3,
      spaceBetween: 1,
      navigation: {
        nextEl: i.querySelector(".custom_slider_right"),
        prevEl: i.querySelector(".custom_slider_left")
      },
      loop: !1,
      breakpoints: {
        1725: {
          slidesPerView: 6,
          slidesPerGroup: 6
        },
        1440: {
          slidesPerView: 5,
          slidesPerGroup: 5
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4
        },
        868: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        641: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        618: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        150: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1
        }
      }
    };
    if (e.hasAttribute("data-type"))
      switch (e.getAttribute("data-type")) {
        case "brand":
          s.breakpoints = {
            1725: {
              slidesPerView: 8,
              slidesPerGroup: 8
            },
            1440: {
              slidesPerView: 7,
              slidesPerGroup: 7
            },
            1200: {
              slidesPerView: 5,
              slidesPerGroup: 5
            },
            868: {
              slidesPerView: 4,
              slidesPerGroup: 4
            },
            0: {
              slidesPerView: 3,
              slidesPerGroup: 3
            }
          };
          break;
        case "main":
          s.spaceBetween = 0, s.slidesPerView = 1, s.breakpoints = {
            0: {
              slidesPerView: 1
            }
          }, s.pagination = {
            el: ".custom_slider_navs",
            type: "bullets",
            clickable: !0
          };
          break;
        case "footer":
          s.spaceBetween = 15, s.slidesPerView = 6, s.slidesPerGroup = 6, s.breakpoints = {
            1725: {
              slidesPerView: 6,
              slidesPerGroup: 6
            },
            1440: {
              slidesPerView: 5,
              slidesPerGroup: 5
            },
            1201: {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            990: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            870: {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            0: {
              slidesPerView: 2,
              slidesPerGroup: 2
            }
          };
          break;
        case "news":
          s.breakpoints = {
            1725: {
              slidesPerView: 8,
              slidesPerGroup: 8
            },
            1440: {
              slidesPerView: 6,
              slidesPerGroup: 6
            },
            1200: {
              slidesPerView: 5,
              slidesPerGroup: 5
            },
            868: {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            641: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            618: {
              slidesPerView: 3,
              slidesPerGroup: 3
            },
            150: {
              slidesPerView: 2,
              slidesPerGroup: 2
            },
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1
            }
          };
          break;
      }
    e instanceof HTMLElement && new q(e, s);
  }
}, yr = () => {
  let t = document.querySelector(".wrapp-gallery .thumbs .image-thumbs"), e = document.querySelector(".wrapp-gallery .thumbs"), i = {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: !0,
    watchSlidesProgress: !0,
    navigation: {
      nextEl: e.querySelector(".swiper-button-next"),
      prevEl: e.querySelector(".swiper-button-prev")
    }
  }, s;
  t instanceof HTMLElement && (s = new q(t, i));
  let n = document.querySelector(".wrapp-gallery .card-gallery"), r = {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 1,
    navigation: {
      nextEl: n.querySelector(".swiper-button-next"),
      prevEl: n.querySelector(".swiper-button-prev")
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: !0
    },
    thumbs: {
      swiper: s
    },
    loop: !1
  }, l;
  n instanceof HTMLElement && (l = new q(n, r)), l.on("click", function(S) {
    let T = S.clickedIndex;
    y.classList.add("active"), v.slideTo(T);
  });
  let d = document.querySelector(".overlay__thumbs"), a = document.querySelector(".overlay__thumbs .image-thumbs"), o = {
    spaceBetween: 10,
    slidesPerView: 8,
    watchSlidesProgress: !0,
    navigation: {
      nextEl: d.querySelector(".swiper-button-next"),
      prevEl: d.querySelector(".swiper-button-prev")
    }
  };
  const u = {
    3150: 20,
    2800: 19,
    2680: 18,
    2500: 18,
    2350: 16,
    2200: 15,
    2100: 14,
    1900: 13,
    1800: 12,
    1600: 11,
    1460: 10,
    1276: 9,
    1110: 8,
    995: 7,
    870: 6,
    869: 6,
    750: 7,
    567: 6,
    465: 5,
    375: 4,
    // 728: 5,
    // 592: 4,
    // 467: 4,
    // 100: 2,
    0: 3
  };
  o.breakpoints = Mi(u);
  const c = document.querySelector(".gallery-overlay .gallery-overlay__mobile-scrollbar");
  o.breakpoints[869].scrollbar = {
    enabled: !1
  }, o.breakpoints[0].scrollbar = {
    enabled: !0,
    el: c,
    draggable: !0
  }, console.log("breakpoints", o.breakpoints);
  let f;
  a instanceof HTMLElement && (f = new q(a, o));
  let p = document.querySelector(".overlay__card-gallery"), w = p.querySelector(".overlay__card-gallery__wrapp"), g = {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 1,
    thumbs: {
      swiper: f
    },
    navigation: {
      nextEl: p.querySelector(".swiper-button-next"),
      prevEl: p.querySelector(".swiper-button-prev")
    },
    loop: !1
  }, v;
  w instanceof HTMLElement && (v = new q(w, g));
  const y = document.querySelector(".gallery-overlay"), h = y.querySelector(".overlay__card-gallery__close a");
  Q(h, "click").subscribe((S) => {
    y.classList.remove("active"), S.preventDefault();
  });
}, Se = Q(window, "load"), br = Q(window, "resize");
Se.subscribe(() => {
  Q(document.querySelectorAll(".messenger_buttons"), "click").subscribe((t) => {
    if (t.preventDefault(), t.target instanceof HTMLElement) {
      let e = t.target.getAttribute("data-type");
      e && xi(e);
    }
    return !1;
  });
});
Se.subscribe(() => {
  let t = document.querySelectorAll("#popup_catalog .catalog_list .parent > a");
  Q(t, "click").pipe(
    Ei((e) => {
      e.preventDefault();
    })
  ).subscribe((e) => {
    if (e.target instanceof HTMLElement) {
      let s = e.target.parentNode.querySelector("ul");
      Ti(s);
    }
  });
});
Se.subscribe(() => {
  if (window.outerWidth <= 869) {
    const t = document.querySelector("#breadcrumb");
    t.querySelectorAll("ul li:not(.active_item)").forEach(function(i) {
      i.style.display = "none";
    }), t.classList.add("collapsed");
  }
});
Se.subscribe(wr);
Se.subscribe(yr);
br.pipe(Si(30)).subscribe(() => {
  const t = document.querySelector("#breadcrumb");
  if (t) {
    const e = window.outerWidth <= 869 ? "none" : "inline-block";
    console.log("liDisplay", e, window.outerWidth), t.querySelectorAll("ul li:not(.active_item)").forEach(function(n) {
      n.style.display = e;
    });
    const s = t.querySelector(".breadcrumb__more-link");
    window.outerWidth <= 869 ? (t.classList.add("collapsed"), s.style.display = "inline-block") : (t.classList.remove("collapsed"), s.style.display = "none");
  }
});
const Sr = document.querySelectorAll(".catalog-toggle-drawer"), Er = Q(Sr, "click");
Er.subscribe((t) => {
  document.querySelector("#popup_catalog").classList.toggle("opened"), document.querySelector(".blackscreen").classList.toggle("active"), document.querySelector("#fixmenu_cat").classList.toggle("bg"), document.querySelector("body").classList.toggle("open-popup-catalog"), t.preventDefault();
});
const xr = document.querySelector(".breadcrumb__more-link"), Tr = Q(xr, "click");
Tr.subscribe((t) => {
  const e = document.querySelector("#breadcrumb");
  if (e) {
    e.querySelectorAll("ul li:not(.active_item)").forEach(function(n) {
      n.style.display = "inline-block";
    }), e.classList.remove("collapsed");
    const s = e.querySelector(".breadcrumb__more-link");
    s.style.display = "none";
  }
  t.preventDefault();
});
