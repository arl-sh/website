(self.webpackChunkaurelien_garnier_dev=self.webpackChunkaurelien_garnier_dev||[]).push([[691],{9662:function(e,t,n){var r=n(614),o=n(6330),i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not a function")}},9670:function(e,t,n){var r=n(111),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw i(o(e)+" is not an object")}},1318:function(e,t,n){var r=n(5656),o=n(1400),i=n(6244),a=function(e){return function(t,n,a){var u,c=r(t),l=i(c),f=o(a,l);if(e&&n!=n){for(;l>f;)if((u=c[f++])!=u)return!0}else for(;l>f;f++)if((e||f in c)&&c[f]===n)return e||f||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},4326:function(e,t,n){var r=n(1702),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},648:function(e,t,n){var r=n(1694),o=n(614),i=n(4326),a=n(5112)("toStringTag"),u=Object,c="Arguments"==i(function(){return arguments}());e.exports=r?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=u(e),a))?n:c?i(t):"Object"==(r=i(t))&&o(t.callee)?"Arguments":r}},9920:function(e,t,n){var r=n(2597),o=n(3887),i=n(1236),a=n(3070);e.exports=function(e,t,n){for(var u=o(t),c=a.f,l=i.f,f=0;f<u.length;f++){var s=u[f];r(e,s)||n&&r(n,s)||c(e,s,l(t,s))}}},8880:function(e,t,n){var r=n(9781),o=n(3070),i=n(9114);e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var r=n(614),o=n(3070),i=n(6339),a=n(3072);e.exports=function(e,t,n,u){u||(u={});var c=u.enumerable,l=void 0!==u.name?u.name:t;if(r(n)&&i(n,l,u),u.global)c?e[t]=n:a(t,n);else{try{u.unsafe?e[t]&&(c=!0):delete e[t]}catch(f){}c?e[t]=n:o.f(e,t,{value:n,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable})}return e}},3072:function(e,t,n){var r=n(7854),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},9781:function(e,t,n){var r=n(7293);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(e,t,n){var r=n(7854),o=n(111),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},8113:function(e,t,n){var r=n(5005);e.exports=r("navigator","userAgent")||""},7392:function(e,t,n){var r,o,i=n(7854),a=n(8113),u=i.process,c=i.Deno,l=u&&u.versions||c&&c.version,f=l&&l.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var r=n(7854),o=n(1236).f,i=n(8880),a=n(8052),u=n(3072),c=n(9920),l=n(4705);e.exports=function(e,t){var n,f,s,m,p,v=e.target,h=e.global,y=e.stat;if(n=h?r:y?r[v]||u(v,{}):(r[v]||{}).prototype)for(f in t){if(m=t[f],s=e.dontCallGetSet?(p=o(n,f))&&p.value:n[f],!l(h?f:v+(y?".":"#")+f,e.forced)&&void 0!==s){if(typeof m==typeof s)continue;c(m,s)}(e.sham||s&&s.sham)&&i(m,"sham",!0),a(n,f,m,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var r=n(7293);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var r=n(4374),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(e,t,n){var r=n(9781),o=n(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,l=u&&(!r||r&&a(i,"name").configurable);e.exports={EXISTS:u,PROPER:c,CONFIGURABLE:l}},1702:function(e,t,n){var r=n(4374),o=Function.prototype,i=o.bind,a=o.call,u=r&&i.bind(a,a);e.exports=r?function(e){return e&&u(e)}:function(e){return e&&function(){return a.apply(e,arguments)}}},5005:function(e,t,n){var r=n(7854),o=n(614),i=function(e){return o(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e]):r[e]&&r[e][t]}},8173:function(e,t,n){var r=n(9662);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},647:function(e,t,n){var r=n(1702),o=n(7908),i=Math.floor,a=r("".charAt),u=r("".replace),c=r("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,f=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,s,m){var p=n+e.length,v=r.length,h=f;return void 0!==s&&(s=o(s),h=l),u(m,h,(function(o,u){var l;switch(a(u,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,p);case"<":l=s[c(u,1,-1)];break;default:var f=+u;if(0===f)return o;if(f>v){var m=i(f/10);return 0===m?o:m<=v?void 0===r[m-1]?a(u,1):r[m-1]+a(u,1):o}l=r[f-1]}return void 0===l?"":l}))}},7854:function(e,t,n){var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var r=n(1702),o=n(7908),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var r=n(9781),o=n(7293),i=n(317);e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var r=n(1702),o=n(7293),i=n(4326),a=Object,u=r("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?u(e,""):a(e)}:a},2788:function(e,t,n){var r=n(1702),o=n(614),i=n(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(e){return a(e)}),e.exports=i.inspectSource},9909:function(e,t,n){var r,o,i,a=n(8536),u=n(7854),c=n(1702),l=n(111),f=n(8880),s=n(2597),m=n(5465),p=n(6200),v=n(3501),h="Object already initialized",y=u.TypeError,g=u.WeakMap;if(a||m.state){var d=m.state||(m.state=new g),b=c(d.get),x=c(d.has),w=c(d.set);r=function(e,t){if(x(d,e))throw new y(h);return t.facade=e,w(d,e,t),t},o=function(e){return b(d,e)||{}},i=function(e){return x(d,e)}}else{var S=p("state");v[S]=!0,r=function(e,t){if(s(e,S))throw new y(h);return t.facade=e,f(e,S,t),t},o=function(e){return s(e,S)?e[S]:{}},i=function(e){return s(e,S)}}e.exports={set:r,get:o,has:i,enforce:function(e){return i(e)?o(e):r(e,{})},getterFor:function(e){return function(t){var n;if(!l(t)||(n=o(t)).type!==e)throw y("Incompatible receiver, "+e+" required");return n}}}},614:function(e){e.exports=function(e){return"function"==typeof e}},4705:function(e,t,n){var r=n(7293),o=n(614),i=/#|\.prototype\./,a=function(e,t){var n=c[u(e)];return n==f||n!=l&&(o(t)?r(t):!!t)},u=a.normalize=function(e){return String(e).replace(i,".").toLowerCase()},c=a.data={},l=a.NATIVE="N",f=a.POLYFILL="P";e.exports=a},111:function(e,t,n){var r=n(614);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},1913:function(e){e.exports=!1},7850:function(e,t,n){var r=n(111),o=n(4326),i=n(5112)("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},2190:function(e,t,n){var r=n(5005),o=n(614),i=n(7976),a=n(3307),u=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,u(e))}},6244:function(e,t,n){var r=n(7466);e.exports=function(e){return r(e.length)}},6339:function(e,t,n){var r=n(7293),o=n(614),i=n(2597),a=n(9781),u=n(6530).CONFIGURABLE,c=n(2788),l=n(9909),f=l.enforce,s=l.get,m=Object.defineProperty,p=a&&!r((function(){return 8!==m((function(){}),"length",{value:8}).length})),v=String(String).split("String"),h=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!i(e,"name")||u&&e.name!==t)&&(a?m(e,"name",{value:t,configurable:!0}):e.name=t),p&&n&&i(n,"arity")&&e.length!==n.arity&&m(e,"length",{value:n.arity});try{n&&i(n,"constructor")&&n.constructor?a&&m(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(o){}var r=f(e);return i(r,"source")||(r.source=v.join("string"==typeof t?t:"")),e};Function.prototype.toString=h((function(){return o(this)&&s(this).source||c(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},133:function(e,t,n){var r=n(7392),o=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(e,t,n){var r=n(7854),o=n(614),i=n(2788),a=r.WeakMap;e.exports=o(a)&&/native code/.test(i(a))},3070:function(e,t,n){var r=n(9781),o=n(4664),i=n(3353),a=n(9670),u=n(4948),c=TypeError,l=Object.defineProperty,f=Object.getOwnPropertyDescriptor,s="enumerable",m="configurable",p="writable";t.f=r?i?function(e,t,n){if(a(e),t=u(t),a(n),"function"==typeof e&&"prototype"===t&&"value"in n&&p in n&&!n.writable){var r=f(e,t);r&&r.writable&&(e[t]=n.value,n={configurable:m in n?n.configurable:r.configurable,enumerable:s in n?n.enumerable:r.enumerable,writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=u(t),a(n),o)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var r=n(9781),o=n(6916),i=n(5296),a=n(9114),u=n(5656),c=n(4948),l=n(2597),f=n(4664),s=Object.getOwnPropertyDescriptor;t.f=r?s:function(e,t){if(e=u(e),t=c(t),f)try{return s(e,t)}catch(n){}if(l(e,t))return a(!o(i.f,e,t),e[t])}},8006:function(e,t,n){var r=n(6324),o=n(748).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var r=n(1702);e.exports=r({}.isPrototypeOf)},6324:function(e,t,n){var r=n(1702),o=n(2597),i=n(5656),a=n(1318).indexOf,u=n(3501),c=r([].push);e.exports=function(e,t){var n,r=i(e),l=0,f=[];for(n in r)!o(u,n)&&o(r,n)&&c(f,n);for(;t.length>l;)o(r,n=t[l++])&&(~a(f,n)||c(f,n));return f}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);t.f=o?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var r=n(6916),o=n(614),i=n(111),a=TypeError;e.exports=function(e,t){var n,u;if("string"===t&&o(n=e.toString)&&!i(u=r(n,e)))return u;if(o(n=e.valueOf)&&!i(u=r(n,e)))return u;if("string"!==t&&o(n=e.toString)&&!i(u=r(n,e)))return u;throw a("Can't convert object to primitive value")}},3887:function(e,t,n){var r=n(5005),o=n(1702),i=n(8006),a=n(5181),u=n(9670),c=o([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(u(e)),n=a.f;return n?c(t,n(e)):t}},7066:function(e,t,n){"use strict";var r=n(9670);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},4706:function(e,t,n){var r=n(6916),o=n(2597),i=n(7976),a=n(7066),u=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in u||o(e,"flags")||!i(u,e)?t:r(a,e)}},4488:function(e){var t=TypeError;e.exports=function(e){if(null==e)throw t("Can't call method on "+e);return e}},6200:function(e,t,n){var r=n(2309),o=n(9711),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},5465:function(e,t,n){var r=n(7854),o=n(3072),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},2309:function(e,t,n){var r=n(1913),o=n(5465);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.23.5",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.5/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(e,t,n){var r=n(9303),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},5656:function(e,t,n){var r=n(8361),o=n(4488);e.exports=function(e){return r(o(e))}},9303:function(e,t,n){var r=n(4758);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},7466:function(e,t,n){var r=n(9303),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},7908:function(e,t,n){var r=n(4488),o=Object;e.exports=function(e){return o(r(e))}},7593:function(e,t,n){var r=n(6916),o=n(111),i=n(2190),a=n(8173),u=n(2140),c=n(5112),l=TypeError,f=c("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,c=a(e,f);if(c){if(void 0===t&&(t="default"),n=r(c,e,t),!o(n)||i(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),u(e,t)}},4948:function(e,t,n){var r=n(7593),o=n(2190);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},1694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},1340:function(e,t,n){var r=n(648),o=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var r=n(1702),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},3307:function(e,t,n){var r=n(133);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var r=n(9781),o=n(7293);e.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(e,t,n){var r=n(7854),o=n(2309),i=n(2597),a=n(9711),u=n(133),c=n(3307),l=o("wks"),f=r.Symbol,s=f&&f.for,m=c?f:f&&f.withoutSetter||a;e.exports=function(e){if(!i(l,e)||!u&&"string"!=typeof l[e]){var t="Symbol."+e;u&&i(f,e)?l[e]=f[e]:l[e]=c&&s?s(t):m(t)}return l[e]}},8757:function(e,t,n){"use strict";var r=n(2109),o=n(6916),i=n(1702),a=n(4488),u=n(614),c=n(7850),l=n(1340),f=n(8173),s=n(4706),m=n(647),p=n(5112),v=n(1913),h=p("replace"),y=TypeError,g=i("".indexOf),d=i("".replace),b=i("".slice),x=Math.max,w=function(e,t,n){return n>e.length?-1:""===t?n:g(e,t,n)};r({target:"String",proto:!0},{replaceAll:function(e,t){var n,r,i,p,S,P,E,O,D,j=a(this),k=0,A=0,M="";if(null!=e){if((n=c(e))&&(r=l(a(s(e))),!~g(r,"g")))throw y("`.replaceAll` does not allow non-global regexes");if(i=f(e,h))return o(i,e,j,t);if(v&&n)return d(l(j),e,t)}for(p=l(j),S=l(e),(P=u(t))||(t=l(t)),E=S.length,O=x(1,E),k=w(p,S,0);-1!==k;)D=P?l(t(S,k,p)):m(S,p,k,[],void 0,t),M+=b(p,A,k)+D,A=k+E,k=w(p,S,k+O);return A<p.length&&(M+=b(p,A)),M}})},7207:function(e,t,n){n(8757)},2986:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});n(7207);var r=n(5785),o=n(7294),i=JSON.parse('[{"name":"Software Programming","timeline":[{"from":"2011-09-01","to":"2012-12-31","hoursPerDay":3},{"from":"2013-06-01","to":"2020-03-01","hoursPerDay":4}]},{"name":"DevOps","timeline":[{"from":"2013-09-01","to":"2018-12-31","hoursPerDay":1},{"from":"2019-11-01","to":"now","hoursPerDay":3}]},{"name":"Kubernetes Solutions","timeline":[{"from":"2021-09-01","to":"now","hoursPerDay":2}]},{"name":"Cybersecurity","timeline":[{"from":"2014-06-01","to":"2017-12-31","hoursPerDay":1},{"from":"2018-09-01","to":"2022-04-01","hoursPerDay":0.5}]},{"name":"Audits","timeline":[{"from":"2013-06-01","to":"2014-12-31","hoursPerDay":0.2},{"from":"2016-06-01","to":"2017-12-31","hoursPerDay":0.5},{"from":"2019-11-01","to":"2021-05-31","hoursPerDay":1}]},{"name":"CI Pipelines","timeline":[{"from":"2013-09-01","to":"2018-12-31","hoursPerDay":0.5},{"from":"2019-11-01","to":"now","hoursPerDay":1}]},{"name":"CD Workflows","timeline":[{"from":"2019-11-01","to":"now","hoursPerDay":2}]},{"name":"Cloud Native Apps","timeline":[{"from":"2016-06-01","to":"now","hoursPerDay":2}]},{"name":"Cloud Architecture","timeline":[{"from":"2018-09-01","to":"now","hoursPerDay":1.5}]},{"name":"Containerized Software","timeline":[{"from":"2018-09-01","to":"now","hoursPerDay":1.5}]},{"name":"Networking","timeline":[{"from":"2013-06-01","to":"now","hoursPerDay":2}]},{"name":"Server Orchestration","timeline":[{"from":"2013-09-01","to":"2018-12-31","hoursPerDay":1},{"from":"2019-11-01","to":"now","hoursPerDay":2}]},{"name":"Linux Administration","timeline":[{"from":"2012-09-01","to":"now","hoursPerDay":4}]},{"name":"Automation","timeline":[{"from":"2012-11-01","to":"now","hoursPerDay":1}]},{"name":"Scripts","timeline":[{"from":"2012-11-01","to":"now","hoursPerDay":1}]},{"name":"RESTful APIs","timeline":[{"from":"2012-11-01","to":"now","hoursPerDay":0.2}]},{"name":"Reverse Engineering","timeline":[{"from":"2014-06-01","to":"2017-12-31","hoursPerDay":0.8}]},{"name":"Game Plugins","timeline":[{"from":"2012-09-01","to":"2018-12-31","hoursPerDay":4}]},{"name":"Cross-Platform Apps","timeline":[{"from":"2017-06-01","to":"now","hoursPerDay":1}]},{"name":"macOS Apps","timeline":[{"from":"2017-06-01","to":"2021-12-31","hoursPerDay":0.2}]},{"name":"iOS Apps","timeline":[{"from":"2015-12-01","to":"now","hoursPerDay":0.8}]},{"name":"Websites","timeline":[{"from":"2012-11-01","to":"now","hoursPerDay":2}]},{"name":"Web 3 & Blockchain","timeline":[{"from":"2022-01-01","to":"now","hoursPerDay":0.5}]},{"name":"UI/UX","timeline":[{"from":"2019-11-01","to":"2021-05-31","hoursPerDay":0.2}]}]'),a="index-module--timeline--PYHSJ";function u(){var e=o.useMemo((function(){return new Date}),[]);function t(e,t){return void 0===t&&(t=new Date),"now"===e?t:new Date(e)}var n=o.useMemo((function(){return i.map((function(n){var r=n.timeline.map((function(n){var r=n.from,o=n.to,i=n.hoursPerDay;return{from:t(r,e),to:t(o,e),hoursPerDay:i,active:"now"===o}})),o=r.map((function(e){var t=e.from;return(e.to-t)/864e5*e.hoursPerDay})).reduce((function(e,t){return e+t}));return o-=o%Math.pow(10,Math.floor(Math.log10(o))),Object.assign({key:n.name.toLowerCase().replaceAll(/[^a-z0-9]+/g,"-").replaceAll(/(^-?[^a-z]|^-|-$)/g,"")},n,{hours:o,timeline:r})}))}),[i,e]),u=o.useMemo((function(){var t=Math.min.apply(Math,(0,r.Z)(n.map((function(e){return Math.min.apply(Math,(0,r.Z)(e.timeline.map((function(e){return e.from.getTime()}))))})))),o=new Date(t).getFullYear(),i=e.getFullYear();return(i-o)%2!=0&&--i,[o,(o+i)/2,i]}),[n,e]);function c(e){var t=new Date(u[0],0,1);return(e-t)/(new Date(u[u.length-1]+u[1]-u[0],0,0)-t)}function l(e){return e.toLocaleString("en-US",{dateStyle:"medium"})}function f(t){return o.createElement(o.Fragment,null,o.createElement("td",null,o.createElement("h3",null,t.name)),o.createElement("td",null),o.createElement("td",{colSpan:u.length,className:a},function(t,n){var r=c(e),i="timeline-appear-"+n+"-active";return o.createElement(o.Fragment,null,t.map((function(e){var t=e.from,r=e.to,i=e.active,a=c(t),u=c(r),f="timeline-appear-"+n+"-"+t.getTime();return o.createElement(o.Fragment,null,o.createElement("style",{key:t.getTime()+"-keyframes"},"\n              @keyframes "+f+" {\n                0%              { right: "+100*(1-a)+"%; }\n                "+100*a+"%  { right: "+100*(1-a)+"%; }\n                "+100*u+"% { right: "+100*(1-u)+"%; }\n                100%            { right: "+100*(1-u)+"%; }\n              }\n            "),o.createElement("div",{key:t.getTime()+"-rect",className:i?"index-module--active--qVgBB":null,style:{left:100*a+"%",right:100*(1-u)+"%",animation:f+" 1s linear forwards"},title:i?"Since "+l(t):"From "+l(t)+" to "+l(r)}))})),t.some((function(e){return e.active}))&&o.createElement(o.Fragment,null,o.createElement("style",null,"\n            @keyframes "+i+" {\n              0%                     { width: 0px; }\n              "+100*r+"% { width: 0px; }\n              100%                   { right: 4px; }\n            }\n          "),o.createElement("div",{className:"index-module--activeCap--QyRFr",style:{left:100*r+"%",width:4,animation:i+" 1s linear forwards"}})))}(t.timeline,t.key)),o.createElement("td",null,o.createElement("span",null,t.hours.toLocaleString("en-US"),"+")))}var s=o.useMemo((function(){return n.map((function(e){return{item:e,td:f(e)}}))}),[n,u,e]);return o.createElement(o.Fragment,null,o.createElement("title",null,"Aurélien Garnier"),o.createElement("div",{className:"index-module--heading--wr4+2"},o.createElement("h1",{className:"index-module--preHeading--A3uzp"},"Hi! I am"),o.createElement("h1",{className:"index-module--mainHeading--EXyjj"},"Aurélien Garnier"),o.createElement("p",{className:"index-module--subHeading--t6KW8"},"That’s /ɔ.ʁe.ljɛ̃/")),o.createElement("table",{className:a},o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null),o.createElement("th",null),o.createElement("th",{className:"index-module--spacing--8B4yq"}),u.map((function(e){return o.createElement("th",{key:e,className:"index-module--legend--SIdbG"},o.createElement("span",null,e))})),o.createElement("th",null,"Hours invested"))),o.createElement("tbody",null,o.createElement("tr",null,o.createElement("td",null,o.createElement("h2",null,"I do")),s[0].td),s.slice(1).map((function(e){var t=e.item,n=e.td;return o.createElement("tr",{key:t.key},o.createElement("td",null),n)})))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-03931cd90b6229429ba4.js.map