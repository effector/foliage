/* eslint-disable */
var e = '-ms-';
var r = '-moz-';
var a = '-webkit-';
var c = 'comm';
var n = 'rule';
var t = 'decl';
var s = '@page';
var u = '@media';
var i = '@import';
var f = '@charset';
var o = '@viewport';
var l = '@supports';
var v = '@document';
var h = '@namespace';
var p = '@keyframes';
var b = '@font-face';
var w = '@counter-style';
var $ = '@font-feature-values';
var k = Math.abs;
var d = String.fromCharCode;
function m(e, r) {
  return (
    (((((((r << 2) ^ z(e, 0)) << 2) ^ z(e, 1)) << 2) ^ z(e, 2)) << 2) ^ z(e, 3)
  );
}
function g(e) {
  return e.trim();
}
function x(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function y(e, r, a) {
  return e.replace(r, a);
}
function j(e, r) {
  return e.indexOf(r);
}
function z(e, r) {
  return e.charCodeAt(r) | 0;
}
function C(e, r, a) {
  return e.slice(r, a);
}
function A(e) {
  return e.length;
}
function M(e) {
  return e.length;
}
function O(e, r) {
  return r.push(e), e;
}
function S(e, r) {
  return e.map(r).join('');
}
var q = 1;
var B = 1;
var D = 0;
var E = 0;
var F = 0;
var G = '';
function H(e, r, a, c, n, t, s) {
  return {
    value: e,
    root: r,
    parent: a,
    type: c,
    props: n,
    children: t,
    line: q,
    column: B,
    length: s,
    return: '',
  };
}
function I(e, r, a) {
  return H(e, r.root, r.parent, a, r.props, r.children, 0);
}
function J() {
  return F;
}
function K() {
  F = E > 0 ? z(G, --E) : 0;
  if ((B--, F === 10)) (B = 1), q--;
  return F;
}
function L() {
  F = E < D ? z(G, E++) : 0;
  if ((B++, F === 10)) (B = 1), q++;
  return F;
}
function N() {
  return z(G, E);
}
function P() {
  return E;
}
function Q(e, r) {
  return C(G, e, r);
}
function R(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function T(e) {
  return (q = B = 1), (D = A((G = e))), (E = 0), [];
}
function U(e) {
  return (G = ''), e;
}
function V(e) {
  return g(Q(E - 1, _(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function W(e) {
  return U(Y(T(e)));
}
function X(e) {
  while ((F = N()))
    if (F < 33) L();
    else break;
  return R(e) > 2 || R(F) > 3 ? '' : ' ';
}
function Y(e) {
  while (L())
    switch (R(F)) {
      case 0:
        O(re(E - 1), e);
        break;
      case 2:
        O(V(F), e);
        break;
      default:
        O(d(F), e);
    }
  return e;
}
function Z(e, r) {
  while (--r && L())
    if (F < 48 || F > 102 || (F > 57 && F < 65) || (F > 70 && F < 97)) break;
  return Q(e, P() + (r < 6 && N() == 32 && L() == 32));
}
function _(e) {
  while (L())
    switch (F) {
      case e:
        return E;
      case 34:
      case 39:
        return _(e === 34 || e === 39 ? e : F);
      case 40:
        if (e === 41) _(e);
        break;
      case 92:
        L();
        break;
    }
  return E;
}
function ee(e, r) {
  while (L())
    if (e + F === 47 + 10) break;
    else if (e + F === 42 + 42 && N() === 47) break;
  return '/*' + Q(r, E - 1) + '*' + d(e === 47 ? e : L());
}
function re(e) {
  while (!R(N())) L();
  return Q(e, E);
}
function ae(e) {
  return U(ce('', null, null, null, [''], (e = T(e)), 0, [0], e));
}
function ce(e, r, a, c, n, t, s, u, i) {
  var f = 0;
  var o = 0;
  var l = s;
  var v = 0;
  var h = 0;
  var p = 0;
  var b = 1;
  var w = 1;
  var $ = 1;
  var k = 0;
  var m = '';
  var g = n;
  var x = t;
  var j = c;
  var z = m;
  while (w)
    switch (((p = k), (k = L()))) {
      case 34:
      case 39:
      case 91:
      case 40:
        z += V(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        z += X(p);
        break;
      case 92:
        z += Z(P() - 1, 7);
        continue;
      case 47:
        switch (N()) {
          case 42:
          case 47:
            O(te(ee(L(), P()), r, a), i);
            break;
          default:
            z += '/';
        }
        break;
      case 123 * b:
        u[f++] = A(z) * $;
      case 125 * b:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            w = 0;
          case 59 + o:
            if (h > 0 && A(z) - l)
              O(
                h > 32
                  ? se(z + ';', c, a, l - 1)
                  : se(y(z, ' ', '') + ';', c, a, l - 2),
                i,
              );
            break;
          case 59:
            z += ';';
          default:
            O((j = ne(z, r, a, f, o, n, u, m, (g = []), (x = []), l)), t);
            if (k === 123)
              if (o === 0) ce(z, r, j, j, g, t, l, u, x);
              else
                switch (v) {
                  case 100:
                  case 109:
                  case 115:
                    ce(
                      e,
                      j,
                      j,
                      c && O(ne(e, j, j, 0, 0, n, u, m, n, (g = []), l), x),
                      n,
                      x,
                      l,
                      u,
                      c ? g : x,
                    );
                    break;
                  default:
                    ce(z, j, j, j, [''], x, l, u, x);
                }
        }
        (f = o = h = 0), (b = $ = 1), (m = z = ''), (l = s);
        break;
      case 58:
        (l = 1 + A(z)), (h = p);
      default:
        if (b < 1)
          if (k == 123) --b;
          else if (k == 125 && b++ == 0 && K() == 125) continue;
        switch (((z += d(k)), k * b)) {
          case 38:
            $ = o > 0 ? 1 : ((z += '\f'), -1);
            break;
          case 44:
            (u[f++] = (A(z) - 1) * $), ($ = 1);
            break;
          case 64:
            if (N() === 45) z += V(L());
            (v = N()), (o = A((m = z += re(P())))), k++;
            break;
          case 45:
            if (p === 45 && A(z) == 2) b = 0;
        }
    }
  return t;
}
function ne(e, r, a, c, t, s, u, i, f, o, l) {
  var v = t - 1;
  var h = t === 0 ? s : [''];
  var p = M(h);
  for (var b = 0, w = 0, $ = 0; b < c; ++b)
    for (var d = 0, m = C(e, v + 1, (v = k((w = u[b])))), x = e; d < p; ++d)
      if ((x = g(w > 0 ? h[d] + ' ' + m : y(m, /&\f/g, h[d])))) f[$++] = x;
  return H(e, r, a, t === 0 ? n : i, f, o, l);
}
function te(e, r, a) {
  return H(e, r, a, c, d(J()), C(e, 2, -2), 0);
}
function se(e, r, a, c) {
  return H(e, r, a, t, C(e, 0, c), C(e, c + 1, -1), c);
}
function ue(c, n) {
  switch (m(c, n)) {
    case 5103:
      return a + 'print-' + c + c;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return a + c + c;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return a + c + r + c + e + c + c;
    case 6828:
    case 4268:
      return a + c + e + c + c;
    case 6165:
      return a + c + e + 'flex-' + c + c;
    case 5187:
      return (
        a + c + y(c, /(\w+).+(:[^]+)/, a + 'box-$1$2' + e + 'flex-$1$2') + c
      );
    case 5443:
      return a + c + e + 'flex-item-' + y(c, /flex-|-self/, '') + c;
    case 4675:
      return (
        a + c + e + 'flex-line-pack' + y(c, /align-content|flex-|-self/, '') + c
      );
    case 5548:
      return a + c + e + y(c, 'shrink', 'negative') + c;
    case 5292:
      return a + c + e + y(c, 'basis', 'preferred-size') + c;
    case 6060:
      return (
        a +
        'box-' +
        y(c, '-grow', '') +
        a +
        c +
        e +
        y(c, 'grow', 'positive') +
        c
      );
    case 4554:
      return a + y(c, /([^-])(transform)/g, '$1' + a + '$2') + c;
    case 6187:
      return (
        y(y(y(c, /(zoom-|grab)/, a + '$1'), /(image-set)/, a + '$1'), c, '') + c
      );
    case 5495:
    case 3959:
      return y(c, /(image-set\([^]*)/, a + '$1' + '$`$1');
    case 4968:
      return (
        y(
          y(c, /(.+:)(flex-)?(.*)/, a + 'box-pack:$3' + e + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify',
        ) +
        a +
        c +
        c
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(c, /(.+)-inline(.+)/, a + '$1$2') + c;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (A(c) - 1 - n > 6)
        switch (z(c, n + 1)) {
          case 109:
            if (z(c, n + 4) !== 45) break;
          case 102:
            return (
              y(
                c,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  a +
                  '$2-$3' +
                  '$1' +
                  r +
                  (z(c, n + 3) == 108 ? '$3' : '$2-$3'),
              ) + c
            );
          case 115:
            return ~j(c, 'stretch')
              ? ue(y(c, 'stretch', 'fill-available'), n) + c
              : c;
        }
      break;
    case 4949:
      if (z(c, n + 1) !== 115) break;
    case 6444:
      switch (z(c, A(c) - 3 - (~j(c, '!important') && 10))) {
        case 107:
          return y(c, ':', ':' + a) + c;
        case 101:
          return (
            y(
              c,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                a +
                (z(c, 14) === 45 ? 'inline-' : '') +
                'box$3' +
                '$1' +
                a +
                '$2$3' +
                '$1' +
                e +
                '$2box$3',
            ) + c
          );
      }
      break;
    case 5936:
      switch (z(c, n + 11)) {
        case 114:
          return a + c + e + y(c, /[svh]\w+-[tblr]{2}/, 'tb') + c;
        case 108:
          return a + c + e + y(c, /[svh]\w+-[tblr]{2}/, 'tb-rl') + c;
        case 45:
          return a + c + e + y(c, /[svh]\w+-[tblr]{2}/, 'lr') + c;
      }
      return a + c + e + c + c;
  }
  return c;
}
function ie(e, r) {
  var a = '';
  var c = M(e);
  for (var n = 0; n < c; n++) a += r(e[n], n, e, r) || '';
  return a;
}
function fe(e, r, a, s) {
  switch (e.type) {
    case i:
    case t:
      return (e.return = e.return || e.value);
    case c:
      return '';
    case n:
      e.value = e.props.join(',');
  }
  return A((a = ie(e.children, s))) ? (e.return = e.value + '{' + a + '}') : '';
}
function oe(e) {
  var r = M(e);
  return function (a, c, n, t) {
    var s = '';
    for (var u = 0; u < r; u++) s += e[u](a, c, n, t) || '';
    return s;
  };
}
function le(e) {
  return function (r) {
    if (!r.root) if ((r = r.return)) e(r);
  };
}
function ve(c, s, u, i) {
  if (!c.return)
    switch (c.type) {
      case t:
        c.return = ue(c.value, c.length);
        break;
      case p:
        return ie([I(y(c.value, '@', '@' + a), c, '')], i);
      case n:
        if (c.length)
          return S(c.props, function (n) {
            switch (x(n, /(::plac\w+|:read-\w+)/)) {
              case ':read-only':
              case ':read-write':
                return ie([I(y(n, /:(read-\w+)/, ':' + r + '$1'), c, '')], i);
              case '::placeholder':
                return ie(
                  [
                    I(y(n, /:(plac\w+)/, ':' + a + 'input-$1'), c, ''),
                    I(y(n, /:(plac\w+)/, ':' + r + '$1'), c, ''),
                    I(y(n, /:(plac\w+)/, e + 'input-$1'), c, ''),
                  ],
                  i,
                );
            }
            return '';
          });
    }
}
function he(e) {
  switch (e.type) {
    case n:
      e.props = e.props.map(function (r) {
        return S(W(r), function (r, a, c) {
          switch (z(r, 0)) {
            case 12:
              return C(r, 1, A(r));
            case 0:
            case 40:
            case 43:
            case 62:
            case 126:
              return r;
            case 58:
              if (c[++a] === 'global')
                (c[a] = ''), (c[++a] = '\f' + C(c[a], (a = 1), -1));
            case 32:
              return a === 1 ? '' : r;
            default:
              switch (a) {
                case 0:
                  e = r;
                  return M(c) > 1 ? '' : r;
                case (a = M(c) - 1):
                case 2:
                  return a === 2 ? r + e + e : r + e;
                default:
                  return r;
              }
          }
        });
      });
  }
}
export {
  f as CHARSET,
  c as COMMENT,
  w as COUNTER_STYLE,
  t as DECLARATION,
  v as DOCUMENT,
  b as FONT_FACE,
  $ as FONT_FEATURE_VALUES,
  i as IMPORT,
  p as KEYFRAMES,
  u as MEDIA,
  r as MOZ,
  e as MS,
  h as NAMESPACE,
  s as PAGE,
  n as RULESET,
  l as SUPPORTS,
  o as VIEWPORT,
  a as WEBKIT,
  k as abs,
  T as alloc,
  O as append,
  P as caret,
  J as char,
  F as character,
  G as characters,
  z as charat,
  B as column,
  S as combine,
  te as comment,
  ee as commenter,
  ae as compile,
  I as copy,
  U as dealloc,
  se as declaration,
  V as delimit,
  _ as delimiter,
  Z as escaping,
  d as from,
  m as hash,
  re as identifier,
  j as indexof,
  D as length,
  q as line,
  x as match,
  oe as middleware,
  he as namespace,
  L as next,
  H as node,
  ce as parse,
  N as peek,
  E as position,
  ue as prefix,
  ve as prefixer,
  K as prev,
  y as replace,
  ne as ruleset,
  le as rulesheet,
  ie as serialize,
  M as sizeof,
  Q as slice,
  fe as stringify,
  A as strlen,
  C as substr,
  R as token,
  W as tokenize,
  Y as tokenizer,
  g as trim,
  X as whitespace,
};
//# sourceMappingURL=stylis.mjs.map
