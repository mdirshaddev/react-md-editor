(this["webpackJsonp@uiw/react-md-editor"]=this["webpackJsonp@uiw/react-md-editor"]||[]).push([[1],{83:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(38);function i(e){for(;!Object(r.a)(e););return e}},85:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=/[\0\t\n\r]/g;function i(){var e,n=1,t="",i=!0;return function(u,a,c){var o,s,f,l,d,v=[];u=t+u.toString(a),f=0,t="",i&&(65279===u.charCodeAt(0)&&f++,i=void 0);for(;f<u.length;){if(r.lastIndex=f,o=r.exec(u),l=o&&void 0!==o.index?o.index:u.length,d=u.charCodeAt(l),!o){t=u.slice(f);break}if(10===d&&f===l&&e)v.push(-3),e=void 0;else switch(e&&(v.push(-5),e=void 0),f<l&&(v.push(u.slice(f,l)),n+=l-f),d){case 0:v.push(65533),n++;break;case 9:for(s=4*Math.ceil(n/4),v.push(-2);n++<s;)v.push(-1);break;case 10:v.push(-4),n=1;break;default:e=!0,n=1}f=l+1}c&&(e&&v.push(-5),t&&v.push(t),v.push(null));return v}}},91:function(e,n,t){"use strict";t.d(n,"a",(function(){return ie}));var r={};t.r(r),t.d(r,"document",(function(){return W})),t.d(r,"contentInitial",(function(){return X})),t.d(r,"flowInitial",(function(){return Y})),t.d(r,"flow",(function(){return Z})),t.d(r,"string",(function(){return $})),t.d(r,"text",(function(){return ee})),t.d(r,"insideSpan",(function(){return ne})),t.d(r,"attentionMarkers",(function(){return te})),t.d(r,"disable",(function(){return re}));var i=t(27),u=t(3),a=t(1),c={tokenize:function(e){var n,t=e.attempt(this.parser.constructs.contentInitial,(function(n){if(null===n)return void e.consume(n);return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),Object(u.a)(e,t,"linePrefix")}),(function(n){return e.enter("paragraph"),r(n)}));return t;function r(t){var r=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=r),n=r,i(t)}function i(n){return null===n?(e.exit("chunkText"),e.exit("paragraph"),void e.consume(n)):Object(a.h)(n)?(e.consume(n),e.exit("chunkText"),r):(e.consume(n),i)}}};var o=t(8),s={tokenize:function(e){var n,t,r,i=this,u=[],c=0;return s;function s(n){if(c<u.length){var t=u[c];return i.containerState=t[1],e.attempt(t[0].continuation,l,d)(n)}return d(n)}function l(e){if(c++,i.containerState._closeFlow){i.containerState._closeFlow=void 0,n&&m();for(var t,r=i.events.length,u=r;u--;)if("exit"===i.events[u][0]&&"chunkFlow"===i.events[u][1].type){t=i.events[u][1].end;break}x(c);for(var a=r;a<i.events.length;)i.events[a][1].end=Object.assign({},t),a++;return Object(o.b)(i.events,u+1,0,i.events.slice(r)),i.events.length=a,d(e)}return s(e)}function d(t){if(c===u.length){if(!n)return h(t);if(n.currentConstruct&&n.currentConstruct.concrete)return j(t);i.interrupt=Boolean(n.currentConstruct)}return i.containerState={},e.check(f,v,b)(t)}function v(e){return n&&m(),x(c),h(e)}function b(e){return i.parser.lazy[i.now().line]=c!==u.length,r=i.now().offset,j(e)}function h(n){return i.containerState={},e.attempt(f,p,j)(n)}function p(e){return c++,u.push([i.currentConstruct,i.containerState]),h(e)}function j(r){return null===r?(n&&m(),x(0),void e.consume(r)):(n=n||i.parser.flow(i.now()),e.enter("chunkFlow",{contentType:"flow",previous:t,_tokenizer:n}),O(r))}function O(n){return null===n?(g(e.exit("chunkFlow"),!0),x(0),void e.consume(n)):Object(a.h)(n)?(e.consume(n),g(e.exit("chunkFlow")),c=0,i.interrupt=void 0,s):(e.consume(n),O)}function g(e,u){var a=i.sliceStream(e);if(u&&a.push(null),e.previous=t,t&&(t.next=e),t=e,n.defineSkip(e.start),n.write(a),i.parser.lazy[e.start.line]){for(var s=n.events.length;s--;)if(n.events[s][1].start.offset<r&&(!n.events[s][1].end||n.events[s][1].end.offset>r))return;for(var f,l,d=i.events.length,v=d;v--;)if("exit"===i.events[v][0]&&"chunkFlow"===i.events[v][1].type){if(f){l=i.events[v][1].end;break}f=!0}for(x(c),s=d;s<i.events.length;)i.events[s][1].end=Object.assign({},l),s++;Object(o.b)(i.events,v+1,0,i.events.slice(d)),i.events.length=s}}function x(n){for(var t=u.length;t-- >n;){var r=u[t];i.containerState=r[1],r[0].exit.call(i,e)}u.length=n}function m(){n.write([null]),t=void 0,n=void 0,i.containerState._closeFlow=void 0}}},f={tokenize:function(e,n,t){return Object(u.a)(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}};var l=t(28),d=t(459),v={tokenize:function(e){var n=this,t=e.attempt(l.a,(function(r){if(null===r)return void e.consume(r);return e.enter("lineEndingBlank"),e.consume(r),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}),e.attempt(this.parser.constructs.flowInitial,r,Object(u.a)(e,e.attempt(this.parser.constructs.flow,r,e.attempt(d.a,r)),"linePrefix")));return t;function r(r){if(null!==r)return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),n.currentConstruct=void 0,t;e.consume(r)}}};var b={resolveAll:O()},h=j("string"),p=j("text");function j(e){return{tokenize:function(n){var t=this,r=this.parser.constructs[e],i=n.attempt(r,u,a);return u;function u(e){return o(e)?i(e):a(e)}function a(e){if(null!==e)return n.enter("data"),n.consume(e),c;n.consume(e)}function c(e){return o(e)?(n.exit("data"),i(e)):(n.consume(e),c)}function o(e){if(null===e)return!0;var n=r[e],i=-1;if(n)for(;++i<n.length;){var u=n[i];if(!u.previous||u.previous.call(t,t.previous))return!0}return!1}},resolveAll:O("text"===e?g:void 0)}}function O(e){return function(n,t){var r,i=-1;for(;++i<=n.length;)void 0===r?n[i]&&"data"===n[i][1].type&&(r=i,i++):n[i]&&"data"===n[i][1].type||(i!==r+2&&(n[r][1].end=n[i-1][1].end,n.splice(r+2,i-r-2),i=r+2),r=void 0);return e?e(n,t):n}}function g(e,n){for(var t=-1;++t<=e.length;)if((t===e.length||"lineEnding"===e[t][1].type)&&"data"===e[t-1][1].type){for(var r=e[t-1][1],i=n.sliceStream(r),u=i.length,a=-1,c=0,o=void 0;u--;){var s=i[u];if("string"===typeof s){for(a=s.length;32===s.charCodeAt(a-1);)c++,a--;if(a)break;a=-1}else if(-2===s)o=!0,c++;else if(-1!==s){u++;break}}if(c){var f={type:t===e.length||o||c<2?"lineSuffix":"hardBreakTrailing",start:{line:r.end.line,column:r.end.column-c,offset:r.end.offset-c,_index:r.start._index+u,_bufferIndex:u?a:r.start._bufferIndex+a},end:Object.assign({},r.end)};r.end=Object.assign({},f.start),r.start.offset===r.end.offset?Object.assign(r,f):(e.splice(t,0,["enter",f,n],["exit",f,n]),t+=2)}t++}return e}var x=t(7),m=t(17);function k(e,n,t){var r=Object.assign(t?Object.assign({},t):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1}),i={},u=[],c=[],s=[],f={consume:function(e){Object(a.h)(e)?(r.line++,r.column=1,r.offset+=-3===e?2:1,k()):-1!==e&&(r.column++,r.offset++);r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===c[r._index].length&&(r._bufferIndex=-1,r._index++));l.previous=e,!0},enter:function(e,n){var t=n||{};return t.type=e,t.start=b(),l.events.push(["enter",t,l]),s.push(t),t},exit:function(e){var n=s.pop();return n.end=b(),l.events.push(["exit",n,l]),n},attempt:O((function(e,n){g(e,n.from)})),check:O(j),interrupt:O(j,{interrupt:!0})},l={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:v,sliceSerialize:function(e,n){return function(e,n){var t,r=-1,i=[];for(;++r<e.length;){var u=e[r],a=void 0;if("string"===typeof u)a=u;else switch(u){case-5:a="\r";break;case-4:a="\n";break;case-3:a="\r\n";break;case-2:a=n?" ":"\t";break;case-1:if(!n&&t)continue;a=" ";break;default:a=String.fromCharCode(u)}t=-2===u,i.push(a)}return i.join("")}(v(e),n)},now:b,defineSkip:function(e){i[e.line]=e.column,k()},write:function(e){if(c=Object(o.a)(c,e),h(),null!==c[c.length-1])return[];return g(n,0),l.events=Object(m.a)(u,l.events,l),l.events}},d=n.tokenize.call(l,f);return n.resolveAll&&u.push(n),l;function v(e){return function(e,n){var t,r=n.start._index,i=n.start._bufferIndex,u=n.end._index,a=n.end._bufferIndex;r===u?t=[e[r].slice(i,a)]:(t=e.slice(r,u),i>-1&&(t[0]=t[0].slice(i)),a>0&&t.push(e[u].slice(0,a)));return t}(c,e)}function b(){return Object.assign({},r)}function h(){for(var e;r._index<c.length;){var n=c[r._index];if("string"===typeof n)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<n.length;)p(n.charCodeAt(r._bufferIndex));else p(n)}}function p(e){void 0,e,d=d(e)}function j(e,n){n.restore()}function O(e,n){return function(t,i,u){var a,c,o,d;return Array.isArray(t)?v(t):"tokenize"in t?v([t]):function(e){return n;function n(n){var t=null!==n&&e[n],r=null!==n&&e.null;return v([].concat(Object(x.a)(Array.isArray(t)?t:t?[t]:[]),Object(x.a)(Array.isArray(r)?r:r?[r]:[])))(n)}}(t);function v(e){return a=e,c=0,0===e.length?u:h(e[c])}function h(e){return function(t){d=function(){var e=b(),n=l.previous,t=l.currentConstruct,i=l.events.length,u=Array.from(s);return{restore:a,from:i};function a(){r=e,l.previous=n,l.currentConstruct=t,l.events.length=i,s=u,k()}}(),o=e,e.partial||(l.currentConstruct=e);if(e.name&&l.parser.constructs.disable.null.includes(e.name))return j(t);return e.tokenize.call(n?Object.assign(Object.create(l),n):l,f,p,j)(t)}}function p(n){return!0,e(o,d),i}function j(e){return!0,d.restore(),++c<a.length?h(a[c]):u}}}function g(e,n){e.resolveAll&&!u.includes(e)&&u.push(e),e.resolve&&Object(o.b)(l.events,n,l.events.length-n,e.resolve(l.events.slice(n),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function k(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}var _,w,y,I,S,A=t(4),C=t(443),z=t(444),F=t(445),T=t(446),E=t(447),B=t(84),P=t(448),J=t(460),M=t(449),q=t(461),D=t(450),G=t(451),H=t(452),K=t(453),L=t(454),N=t(455),Q=t(456),R=t(457),U=t(42),V=t(458),W=(_={},Object(A.a)(_,42,C.a),Object(A.a)(_,43,C.a),Object(A.a)(_,45,C.a),Object(A.a)(_,48,C.a),Object(A.a)(_,49,C.a),Object(A.a)(_,50,C.a),Object(A.a)(_,51,C.a),Object(A.a)(_,52,C.a),Object(A.a)(_,53,C.a),Object(A.a)(_,54,C.a),Object(A.a)(_,55,C.a),Object(A.a)(_,56,C.a),Object(A.a)(_,57,C.a),Object(A.a)(_,62,z.a),_),X=Object(A.a)({},91,F.a),Y=(w={},Object(A.a)(w,-2,T.a),Object(A.a)(w,-1,T.a),Object(A.a)(w,32,T.a),w),Z=(y={},Object(A.a)(y,35,E.a),Object(A.a)(y,42,B.a),Object(A.a)(y,45,[P.a,B.a]),Object(A.a)(y,60,J.a),Object(A.a)(y,61,P.a),Object(A.a)(y,95,B.a),Object(A.a)(y,96,M.a),Object(A.a)(y,126,M.a),y),$=(I={},Object(A.a)(I,38,q.a),Object(A.a)(I,92,D.a),I),ee=(S={},Object(A.a)(S,-5,G.a),Object(A.a)(S,-4,G.a),Object(A.a)(S,-3,G.a),Object(A.a)(S,33,H.a),Object(A.a)(S,38,q.a),Object(A.a)(S,42,K.a),Object(A.a)(S,60,[L.a,N.a]),Object(A.a)(S,91,Q.a),Object(A.a)(S,92,[R.a,D.a]),Object(A.a)(S,93,U.a),Object(A.a)(S,95,K.a),Object(A.a)(S,96,V.a),S),ne={null:[K.a,b]},te={null:[42,95]},re={null:[]};function ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(i.a)([r].concat(e.extensions||[])),t={defined:[],lazy:{},constructs:n,content:u(c),document:u(s),flow:u(v),string:u(h),text:u(p)};return t;function u(e){return function(n){return k(t,e,n)}}}}}]);
//# sourceMappingURL=micromark-vendor.e713419e.chunk.js.map