(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{106:function(t,e,n){var o=n(8),r=n(40),i=n(1)("species");t.exports=function(t,e){var n,s=o(t).constructor;return void 0===s||void 0==(n=o(s)[i])?e:r(n)}},107:function(t,e,n){var o,r,i,s=n(13),c=n(111),a=n(64),u=n(41),f=n(3),v=f.process,h=f.setImmediate,l=f.clearImmediate,d=f.MessageChannel,p=f.Dispatch,_=0,m={},y=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},w=function(t){y.call(t.data)};h&&l||(h=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return m[++_]=function(){c("function"==typeof t?t:Function(t),e)},o(_),_},l=function(t){delete m[t]},"process"==n(20)(v)?o=function(t){v.nextTick(s(y,t,1))}:p&&p.now?o=function(t){p.now(s(y,t,1))}:d?(i=(r=new d).port2,r.port1.onmessage=w,o=s(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(o=function(t){f.postMessage(t+"","*")},f.addEventListener("message",w,!1)):o="onreadystatechange"in u("script")?function(t){a.appendChild(u("script")).onreadystatechange=function(){a.removeChild(this),y.call(t)}}:function(t){setTimeout(s(y,t,1),0)}),t.exports={set:h,clear:l}},108:function(t,e,n){"use strict";var o=n(40);t.exports.f=function(t){return new function(t){var e,n;this.promise=new t(function(t,o){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=o}),this.resolve=o(e),this.reject=o(n)}(t)}},109:function(t,e,n){var o=n(8),r=n(2),i=n(108);t.exports=function(t,e){if(o(t),r(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},110:function(t,e,n){"use strict";var o,r,i,s,c=n(42),a=n(3),u=n(13),f=n(65),v=n(4),h=n(2),l=n(40),d=n(44),p=n(45),_=n(106),m=n(107).set,y=n(112)(),w=n(108),x=n(113),g=n(114),P=n(109),b=a.TypeError,k=a.process,M=k&&k.versions,j=M&&M.v8||"",C=a.Promise,O="process"==f(k),T=function(){},E=r=w.f,G=!!function(){try{var t=C.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(T,T)};return(O||"function"==typeof PromiseRejectionEvent)&&t.then(T)instanceof e&&0!==j.indexOf("6.6")&&-1===g.indexOf("Chrome/66")}catch(t){}}(),F=function(t){var e;return!(!h(t)||"function"!=typeof(e=t.then))&&e},R=function(t,e){if(!t._n){t._n=!0;var n=t._c;y(function(){for(var o=t._v,r=1==t._s,i=0,s=function(e){var n,i,s,c=r?e.ok:e.fail,a=e.resolve,u=e.reject,f=e.domain;try{c?(r||(2==t._h&&L(t),t._h=1),!0===c?n=o:(f&&f.enter(),n=c(o),f&&(f.exit(),s=!0)),n===e.promise?u(b("Promise-chain cycle")):(i=F(n))?i.call(n,a,u):a(n)):u(o)}catch(t){f&&!s&&f.exit(),u(t)}};n.length>i;)s(n[i++]);t._c=[],t._n=!1,e&&!t._h&&S(t)})}},S=function(t){m.call(a,function(){var e,n,o,r=t._v,i=D(t);if(i&&(e=x(function(){O?k.emit("unhandledRejection",r,t):(n=a.onunhandledrejection)?n({promise:t,reason:r}):(o=a.console)&&o.error&&o.error("Unhandled promise rejection",r)}),t._h=O||D(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},D=function(t){return 1!==t._h&&0===(t._a||t._c).length},L=function(t){m.call(a,function(){var e;O?k.emit("rejectionHandled",t):(e=a.onrejectionhandled)&&e({promise:t,reason:t._v})})},N=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),R(e,!0))},$=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw b("Promise can't be resolved itself");(e=F(t))?y(function(){var o={_w:n,_d:!1};try{e.call(t,u($,o,1),u(N,o,1))}catch(t){N.call(o,t)}}):(n._v=t,n._s=1,R(n,!1))}catch(t){N.call({_w:n,_d:!1},t)}}};G||(C=function(t){d(this,C,"Promise","_h"),l(t),o.call(this);try{t(u($,this,1),u(N,this,1))}catch(t){N.call(this,t)}},(o=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(43)(C.prototype,{then:function(t,e){var n=E(_(this,C));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=O?k.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&R(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new o;this.promise=t,this.resolve=u($,t,1),this.reject=u(N,t,1)},w.f=E=function(t){return t===C||t===s?new i(t):r(t)}),v(v.G+v.W+v.F*!G,{Promise:C}),n(32)(C,"Promise"),n(62)("Promise"),s=n(12).Promise,v(v.S+v.F*!G,"Promise",{reject:function(t){var e=E(this);return(0,e.reject)(t),e.promise}}),v(v.S+v.F*(c||!G),"Promise",{resolve:function(t){return P(c&&this===s?C:this,t)}}),v(v.S+v.F*!(G&&n(66)(function(t){C.all(t).catch(T)})),"Promise",{all:function(t){var e=this,n=E(e),o=n.resolve,r=n.reject,i=x(function(){var n=[],i=0,s=1;p(t,!1,function(t){var c=i++,a=!1;n.push(void 0),s++,e.resolve(t).then(function(t){a||(a=!0,n[c]=t,--s||o(n))},r)}),--s||o(n)});return i.e&&r(i.v),n.promise},race:function(t){var e=this,n=E(e),o=n.reject,r=x(function(){p(t,!1,function(t){e.resolve(t).then(n.resolve,o)})});return r.e&&o(r.v),n.promise}})},111:function(t,e){t.exports=function(t,e,n){var o=void 0===n;switch(e.length){case 0:return o?t():t.call(n);case 1:return o?t(e[0]):t.call(n,e[0]);case 2:return o?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return o?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return o?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},112:function(t,e,n){var o=n(3),r=n(107).set,i=o.MutationObserver||o.WebKitMutationObserver,s=o.process,c=o.Promise,a="process"==n(20)(s);t.exports=function(){var t,e,n,u=function(){var o,r;for(a&&(o=s.domain)&&o.exit();t;){r=t.fn,t=t.next;try{r()}catch(o){throw t?n():e=void 0,o}}e=void 0,o&&o.enter()};if(a)n=function(){s.nextTick(u)};else if(!i||o.navigator&&o.navigator.standalone)if(c&&c.resolve){var f=c.resolve(void 0);n=function(){f.then(u)}}else n=function(){r.call(o,u)};else{var v=!0,h=document.createTextNode("");new i(u).observe(h,{characterData:!0}),n=function(){h.data=v=!v}}return function(o){var r={fn:o,next:void 0};e&&(e.next=r),t||(t=r,n()),e=r}}},113:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},114:function(t,e,n){var o=n(3).navigator;t.exports=o&&o.userAgent||""},115:function(t,e,n){"use strict";var o=n(4),r=n(12),i=n(3),s=n(106),c=n(109);o(o.P+o.R,"Promise",{finally:function(t){var e=s(this,r.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return c(e,t()).then(function(){return n})}:t,n?function(n){return c(e,t()).then(function(){throw n})}:t)}})},183:function(t,e,n){"use strict";n.r(e);n(63),n(110),n(115);var o={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},r=n(5),i=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("p",[t._v("This guide is an up to date, comprehensive collection of information and resources related to the "),n("a",{attrs:{href:"https://omisego.network/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OMG Network"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("div",{staticClass:"features"},[n("div",{staticClass:"feature"},[n("h2",[t._v("Community-led")]),t._v(" "),n("p",[t._v("This guide is published by the OMG community to provide comprehensive, curated information and resources about the OMG Network.")])]),t._v(" "),n("div",{staticClass:"feature"},[n("h2",[t._v("Open source")]),t._v(" "),n("p",[t._v("Released on Github under the MIT License. Contributions welcome.")])]),t._v(" "),n("div",{staticClass:"feature"},[n("h2",[t._v("Up to date")]),t._v(" "),n("p",[t._v("Maintained by top community contributors, this collection is constantly updated to reflect the current status of the OMG Network.")])])])])},[],!1,null,null,null);i.options.__file="README.md";e.default=i.exports}}]);