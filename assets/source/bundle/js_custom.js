const P = {
  tg: "https://tg",
  //линк на телегу
  ws: "https://ws",
  //линк на вацап
  vk: "https://vk",
  //линк на вк
  in: "https://in",
  //линк на инсту
  yt: "https://yt"
  //линк на ютуб
};
window.addEventListener("load", function() {
  const e = document.querySelectorAll(".messenger_buttons");
  let n = e.length;
  for (; n--; )
    e[n].addEventListener("click", function(r) {
      return r.preventDefault(), q(r.target.getAttribute("data-type")), !1;
    });
});
function q(e) {
  let n = P[e];
  return alert(n), n = "", n && open(n, "_blank"), !1;
}
window.addEventListener("load", function() {
  N(), D(), k(), I(), T(), M(), W(), F(), R(), $(), b();
});
window.addEventListener("resize", () => {
  window.timeoutResize && clearTimeout(window.timeoutResize), window.timeoutResize = setTimeout(b, 30);
});
function b() {
  g(), x(), G(), J();
  const e = document.querySelector("#product h1"), n = document.querySelector("#product .product_image"), t = document.querySelector("#product .product_description"), r = document.querySelector("#product .cost"), o = document.querySelector("#product .info>.tr"), i = document.querySelector("#product .characters"), a = document.querySelector("#product .product_description>div>button"), l = document.querySelector("#product .td.article"), s = document.querySelector("#product .add_favorite");
  e && n && o && r && (window.innerWidth <= 900 ? (e.parentNode.remove(), o.insertBefore(e.parentNode, n), a.parentNode.remove(), t.insertBefore(a.parentNode, i), s.parentNode.remove(), l.parentNode.insertBefore(s.parentNode, l), s.parentNode.classList.remove("right")) : (e.parentNode.remove(), t.insertBefore(e.parentNode, r), a.parentNode.remove(), t.insertBefore(a.parentNode, r.nextElementSibling), s.remove(), s.innerHTML ? l.parentNode.querySelector(".right").appendChild(s) : (e.appendChild(s), s.parentNode.classList.remove("right"))));
  const d = document.getElementById("my_index"), u = document.getElementById("my_city"), p = document.getElementById("my_appartament");
  d && u && p && (window.innerWidth <= 900 ? (d.parentNode.remove(), u.parentNode.parentNode.insertBefore(d.parentNode, u.parentNode.nextSibling)) : (d.parentNode.remove(), p.parentNode.parentNode.insertBefore(d.parentNode, p.parentNode.nextSibling)));
}
function N() {
  g();
}
function g() {
  const e = document.querySelector("footer");
  !e && !e.style || (document.documentElement.scrollHeight > document.documentElement.clientHeight ? (e.style.position = "relative", document.body.style.paddingBottom = 0) : (e.style.position = "", document.body.style.paddingBottom = ""));
}
function k() {
  const e = document.querySelectorAll("#topmenu a");
  let n = e.length;
  for (; n--; )
    e[n].addEventListener("click", function(r) {
      r.preventDefault();
    });
}
function x() {
  if (!document.querySelector("#left_side"))
    return;
  let n = document.querySelector(".filter_burger_button"), t = document.querySelector(".burger_menu_cover");
  if (window.innerWidth <= 800) {
    if (n || t)
      return;
    n = document.createElement("button"), n.innerHTML = "Фильтр", n.classList.add("filter_burger_button"), n.addEventListener("click", A);
    const r = document.querySelector(".burger_menu_button");
    r ? topmenu.insertBefore(n, r) : topmenu.querySelector("nav").appendChild(n);
  } else {
    n && n.remove(), t && t.remove();
    const r = document.querySelector(".burger_menu");
    r && document.getElementById("left_side").appendChild(r.firstChild);
  }
}
function A() {
  document.body.style.position = "relative";
  const e = document.createElement("div"), n = document.createElement("div");
  n.classList.add("burger_menu"), document.body.appendChild(n), n.classList.add("burger_menu_animation"), setTimeout((t) => {
    t && (t.style.right = 0);
  }, 200, n), e.addEventListener("click", V), n.appendChild(document.querySelector("#left_side .side.filter"));
}
function V(e) {
  B(e.target);
}
function B(e) {
  if (e.classList.contains("burger_menu"))
    return;
  const n = document.querySelector(".burger_menu");
  n.style.right = -n.clientWidth + "px", document.getElementById("left_side").appendChild(n.firstChild), setTimeout(C, 400);
}
function G() {
  document.querySelector("#topmenu > .content") && (document.querySelector(".burger_menu_cover"), document.querySelector(".burger_menu_button"));
}
function C() {
  const e = document.querySelectorAll(".burger_menu");
  if (e && e.length) {
    let t = e.length;
    for (; t--; )
      e[t].remove();
  }
  const n = document.querySelector(".burger_menu_cover");
  n && n.remove(), document.body.style.position = "";
}
function D() {
  const e = document.querySelectorAll("#breadcrumb a");
  let n = e.length;
  for (; n--; )
    e[n].addEventListener("click", function(r) {
      r.preventDefault();
    });
}
function I() {
  const e = document.querySelectorAll(".tab_control");
  let n = e.length;
  for (; n--; ) {
    const t = e[n], r = t.querySelectorAll(".tabs button");
    let o = r.length;
    for (; o--; )
      r[o].addEventListener("click", function(i) {
        if (i.preventDefault(), !i.target)
          return;
        const a = i.target.parentNode.querySelectorAll(".tabs button");
        let l = a.length;
        for (; l--; )
          a[l].classList.remove("active");
        i.target.classList.add("active"), v(i.target.closest(".tab_control"));
      });
    v(t);
  }
}
function v(e) {
  const n = e.querySelector("button.active");
  if (!n)
    return;
  const t = n.getAttribute("data-index"), r = e.querySelectorAll(".tab_item");
  let o = r.length;
  for (; o--; ) {
    const i = r[o];
    i.getAttribute("data-id") == t ? i.style.display = "block" : i.style.display = "";
  }
  g();
}
function M() {
  const e = document.querySelectorAll(".number_edit");
  let n = e.length;
  for (; n--; ) {
    const t = e[n];
    t.addEventListener("keypress", function(r) {
      if (!/^[0-9]*$/.test(r.key))
        return r.preventDefault(), !1;
    }), t.querySelector(".minus").addEventListener("click", function(r) {
      if (r.preventDefault(), !r.target)
        return;
      const o = r.target.parentNode.querySelector("input");
      let i = parseInt(o.value);
      o.value = isNaN(i) || !isFinite(i) ? 1 : Math.max(--i, 1);
    }), t.querySelector(".plus").addEventListener("click", function(r) {
      if (r.preventDefault(), !r.target)
        return;
      const o = r.target.parentNode.querySelector("input");
      let i = parseInt(o.value);
      o.value = isNaN(i) || !isFinite(i) ? 1 : ++i;
    });
  }
}
function T() {
  const e = document.querySelectorAll(".expander");
  if (e && e.length) {
    let n = e.length;
    for (; n--; ) {
      const t = document.createElement("div");
      t.className = "expand_button", e[n].appendChild(t), t.addEventListener(
        "click",
        (r) => {
          !r || !r.target || !r.target.parentNode.classList.contains("expander") || r.target.parentNode.classList.toggle("expanded");
        }
      );
    }
  }
}
function W() {
  const e = document.querySelectorAll(".filter .load_data_place>a");
  if (e && e.length) {
    let n = e.length;
    for (; n--; )
      e[n].addEventListener(
        "click",
        (t) => {
          t.preventDefault(), !(!t || !t.target) && (t.target.style.display = "none", t.target.parentNode.querySelector("div").style.display = "block");
        }
      );
  }
}
function F() {
  const e = document.querySelectorAll(".price_slider");
  if (e && e.length) {
    let n = e.length;
    for (; n--; ) {
      const t = e[n], r = t.querySelector(".length");
      r.getAttribute("data-min"), r.getAttribute("data-max");
      const o = t.querySelectorAll(".length>div");
      let i = o.length;
      for (; i--; ) {
        const l = o[i];
        h(l), l.addEventListener(
          "mousedown",
          (s) => {
            !s || !s.target || y(s.target, _);
          }
        ), l.addEventListener(
          "touchstart",
          (s) => {
            !s || !s.target || y(s.target, _);
          }
        );
      }
      const a = t.querySelectorAll(".values input");
      for (let l = 0; l < a.length; l++)
        a[l].addEventListener("change", (s) => {
          const d = document.querySelector(".start_value+input") == s.target ? 0 : 1, u = parseInt(s.target.value), p = t.querySelector(".length"), L = p.getAttribute("data-min"), E = p.getAttribute("data-max"), f = t.querySelectorAll(".length>div")[d];
          !isNaN(u) && isFinite(u) && u >= L && u <= E && (f.setAttribute("data-value", u), h(f));
        });
    }
  }
}
function h(e) {
  const n = e.parentNode;
  let t = parseInt(n.getAttribute("data-min")), r = parseInt(n.getAttribute("data-max"));
  if (t > r) {
    let a = r;
    r = t, t = a;
  }
  let o = n.clientWidth, i = parseInt(e.getAttribute("data-value"));
  i < t ? i = t : i > r && (i = r), e.style.left = o / (r - t) * (i - t) + "px";
}
function z(e) {
  const n = e.parentNode;
  let t = parseInt(n.getAttribute("data-min")), r = parseInt(n.getAttribute("data-max"));
  if (t > r) {
    let u = r;
    r = t, t = u;
  }
  let o = n.clientWidth, i = parseInt(e.style.left);
  const a = t + (r - t) / o * i;
  e.setAttribute("data-value", Math.round(a));
  const l = e.parentNode.children, s = e.closest(".price_slider").querySelectorAll(".values input");
  let d = s.length;
  for (; d--; )
    s[d].value = l[d].getAttribute("data-value");
}
function _(e) {
  if (e) {
    if (e.type === "mouseup" || e.type === "touchend") {
      X(e), j(this);
      return;
    }
    window.timeoutMove && clearTimeout(window.timeoutMove), window.timeoutMove = setTimeout(H, 0, e);
  }
}
function S(e) {
  if (!window.targetDrag)
    return;
  const n = window.targetDrag.clientWidth / 2, t = window.targetDrag.parentNode;
  if (!t)
    return;
  const r = t.getBoundingClientRect().x, o = t.clientWidth, i = t.children;
  let a = i.length;
  const l = [0, o];
  let s = !1;
  for (; a--; ) {
    const u = i[a];
    u.style.zIndex = 0, !s && u == window.targetDrag && (i[a + 1] && (l[1] = Math.min(parseInt(i[a + 1].style.left))), i[a - 1] && (l[0] = Math.max(parseInt(i[a - 1].style.left))), s = !0);
  }
  const d = Math.max(Math.min(e - n - r, l[1]), l[0]);
  window.targetDrag.style.left = d + "px", window.targetDrag.style.zIndex = 1;
}
function H(e) {
  e && S(e.clientX || e.targetTouches[0].clientX);
}
function X(e) {
  !e || !window.targetDrag || (S(e.clientX || e.changedTouches[0].clientX), z(window.targetDrag));
}
function R() {
  const e = document.querySelector(".show_mode");
  if (!e)
    return;
  const n = document.querySelector(".show_mode a.active"), t = document.querySelector(".products_result");
  let r = 1;
  t && (n.classList.contains("showFor3") ? r = 0 : n.classList.contains("showFor4") ? r = 1 : r = 2, t.setAttribute("data-show_mode", r)), e.addEventListener("click", (o) => {
    if (!o || !o.target || o.target.nodeName !== "A")
      return;
    o.preventDefault();
    const a = o.target.closest(".show_mode").querySelectorAll("li>a");
    let l = a.length, s = l;
    for (; l--; )
      a[l] == o.target ? (s = l, o.target.classList.add("active")) : a[l].classList.remove("active");
    const d = document.querySelector(".products_result");
    d && d.setAttribute("data-show_mode", s);
  });
}
function $() {
  const e = document.querySelectorAll(".close_button");
  if (e && e.length) {
    let n = e.length;
    for (; n--; ) {
      const t = e[n];
      t && t.addEventListener(
        "click",
        (r) => {
          if (r.preventDefault(), !r || !r.target)
            return;
          const o = r.target.closest(".tr");
          o && o.remove();
        }
      );
    }
  }
}
function y(e, n) {
  e && (window.targetDrag = e, document.documentElement.addEventListener("selectstart", (t) => {
    t.preventDefault();
  }), document.documentElement.addEventListener("touchend", n), document.documentElement.addEventListener("touchmove", n), document.documentElement.addEventListener("mousemove", n), document.documentElement.addEventListener("mouseup", n));
}
function j(e) {
  delete window.targetDrag, document.documentElement.removeEventListener("selectstart", e), document.documentElement.removeEventListener("touchmove", e), document.documentElement.removeEventListener("touchend", e), document.documentElement.removeEventListener("mousemove", e), document.documentElement.removeEventListener("mouseup", e);
}
function J() {
  const e = document.querySelector(".pagination");
  if (!e)
    return;
  const n = document.querySelector(".pagination__right-arrow");
  let t = n;
  for (; t = t.previousElementSibling; )
    t.style.display = "";
  for (t = n; (t = t.previousElementSibling) && e.clientHeight > 25; )
    t.classList.contains("active") || t.classList.contains("first_page") || (t.style.display = "none");
}
var w = document.querySelector(".pagination"), m = document.querySelectorAll(".pagination span"), K = m[1], O = m[m.length - 2], Q = m[0], U = m[m.length - 1], c = [];
m.forEach((e) => {
  c.push(e);
});
w && (w.addEventListener("click", (e) => {
  if (+(e.target.parentNode.innerText != 0 && isNaN(e.target.parentNode.innerText) == !1)) {
    for (var n = 0; n < c.length; n++)
      if (c[n].classList.contains("active")) {
        c[n].classList.remove("active");
        break;
      }
    e.target.parentNode.classList.add("active");
  }
}), O.addEventListener("click", () => {
  for (var e = 0; e < c.length; e++)
    if (c[e].classList.contains("active") && e + 1 < c.length - 2) {
      c[e].classList.remove("active"), c[e + 1].classList.add("active");
      break;
    }
}), K.addEventListener("click", () => {
  for (var e = 0; e < c.length; e++)
    if (c[e].classList.contains("active") && e - 1 > 1) {
      c[e].classList.remove("active"), c[e - 1].classList.add("active");
      break;
    }
}), Q.addEventListener("click", () => {
  for (var e = 0; e < c.length; e++)
    c[e].classList.contains("active") && (c[e].classList.remove("active"), c[2].classList.add("active"));
}), U.addEventListener("click", () => {
  for (var e = 0; e < c.length; e++)
    c[e].classList.contains("active") && (c[e].classList.remove("active"), c[c.length - 3].classList.add("active"));
}));
var Y = document.querySelectorAll("#manufacturers .product_item").length;
document.querySelector("#all") && (document.querySelector("#all").textContent = "Все " + Y);
let Z = document.getElementsByClassName("swiper");
for (let e of Z) {
  let n = e.parentNode.parentNode.getElementsByClassName("custom_slider_buttons"), t = {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: 1,
    navigation: {
      nextEl: n[0].getElementsByClassName("custom_slider_right")[0],
      prevEl: n[0].getElementsByClassName("custom_slider_left")[0]
    },
    loop: !0,
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
        t.breakpoints = {
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
        t.spaceBetween = 0, t.slidesPerView = 1, t.breakpoints = {
          0: {
            slidesPerView: 1
          }
        }, t.pagination = {
          el: ".custom_slider_navs",
          type: "bullets",
          clickable: !0
        };
        break;
      case "footer":
        t.spaceBetween = 15, t.slidesPerView = 6, t.slidesPerGroup = 6, t.breakpoints = {
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
        t.breakpoints = {
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
  new Swiper(e, t);
}
