/*! For license information please see da2f9819.66f1faa6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),s=a(9),o=(a(0),a(159)),r=a(164),c=a(163),i={id:"casting",title:"Casting Media",description:"How to use Assistant Relay Cast"},l={id:"cast/casting",title:"Casting Media",description:"How to use Assistant Relay Cast",source:"@site/..\\docs\\cast\\casting.mdx",permalink:"/assistant-relay/docs/cast/casting",editUrl:"https://github.com/greghesp/assistant-relay/../docs/cast/casting.mdx",sidebar:"docs",previous:{title:"Search for cast devices",permalink:"/assistant-relay/docs/cast/search"},next:{title:"Stop Casting",permalink:"/assistant-relay/docs/cast/stop"}},b=[{value:"Casting Remote Media",id:"casting-remote-media",children:[]},{value:"Casting Local Media",id:"casting-local-media",children:[]},{value:"Casting Custom Media",id:"casting-custom-media",children:[]},{value:"Casting Websites",id:"casting-websites",children:[]}],u={rightToc:b};function p(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This feature is currently a Work In Progress, and is only available in v3.3b at this time")),Object(o.b)("h2",{id:"casting-remote-media"},"Casting Remote Media"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"By definition, remote media includes items such as YouTube videos, Twitch streams etc")),Object(o.b)("p",null,"It is possible to cast media from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://ytdl-org.github.io/youtube-dl/supportedsites.html"}),"several hundred")," sites"),Object(o.b)("p",null,"To start casting, send a HTTP POST request to ",Object(o.b)("inlineCode",{parentName:"p"},"/cast")," with the following json-encoded body parameter:"),Object(o.b)(r.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"Schema",value:"schema"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "device": "192.168.1.11", // IP address or name\n    "source": "https://www.youtube.com/watch?v=6xSxXiHwMrg", // URL to media\n    "type": "remote" // Not needed for remote files\n}\n'))),Object(o.b)(c.a,{value:"schema",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"device: STRING\nsource: STRING\ntype: STRING\n"))),Object(o.b)(c.a,{value:"response",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "success": true\n}\n')))),Object(o.b)("p",null,"Once the media has finished playing, the cast will automatically close"),Object(o.b)("h2",{id:"casting-local-media"},"Casting Local Media"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Local Media files are those that are somewhere on the operating system.")),Object(o.b)("p",null,"Having the ability to cast local media, means that it is now possible to have Assistant Relay trigger a ringing sound when your doorbell is pressed, an alarm if someone\nbreaks into your house, or anything else you could think of."),Object(o.b)("p",null,"To cast a local file, send a HTTP POST request to ",Object(o.b)("inlineCode",{parentName:"p"},"/cast")," with the following json-encoded body:"),Object(o.b)(r.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"Schema",value:"schema"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "device": "192.168.1.11", // Device name or IP\n    "source": "C:\\Users\\Dave\\Downloads\\HelloWorld.mp3",\n    "type": "local"\n}\n'))),Object(o.b)(c.a,{value:"schema",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"device: STRING\nsource: STRING\ntype: STRING\n"))),Object(o.b)(c.a,{value:"response",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "success": true\n}\n')))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE"),":  There is a bug with Smart Speakers and Displays where the cast session stays in progress after local media has been played.  This can be seen by the black screen with the cast icon inside it.  With the latest version of CATT, there is a workaround that will kill the Cast session once finished. You may hear the cast sound again whilst the session is being killed.")),Object(o.b)("h2",{id:"casting-custom-media"},"Casting Custom Media"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Custom Media files are those that live within the ",Object(o.b)("inlineCode",{parentName:"p"},"/bin/media/")," folder inside Assistant Relay.")),Object(o.b)("p",null,"Having the ability to cast custom media, means that it is now possible to have Assistant Relay trigger a ringing sound when your doorbell is pressed, an alarm if someone\nbreaks into your house, or anything else you could think of."),Object(o.b)("p",null,"To cast a custom media file, send a HTTP POST request to ",Object(o.b)("inlineCode",{parentName:"p"},"/cast")," with the following json-encoded body:"),Object(o.b)(r.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"Schema",value:"schema"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "device": "192.168.1.11", // Device name or IP\n    "source": "doorbell.mp3", // Name of the file within /bin/media folder\n    "type": "custom"\n}\n'))),Object(o.b)(c.a,{value:"schema",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"device: STRING\nsource: STRING\ntype: STRING\n"))),Object(o.b)(c.a,{value:"response",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "success": true\n}\n')))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE"),":  There is a bug with Smart Speakers and Displays where the cast session stays in progress after local media has been played.  This can be seen by the black screen with the cast icon inside it.  With the latest version of CATT, there is a workaround that will kill the Cast session once finished. You may hear the cast sound again whilst the session is being killed.")),Object(o.b)("h2",{id:"casting-websites"},"Casting Websites"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"CATT")," also allows you to cast websites straight to your Chromecasts or Smart Displays"),Object(o.b)("p",null,"To cast a website, send a HTTP POST request to ",Object(o.b)("inlineCode",{parentName:"p"},"/cast")," with the following json-encoded body:"),Object(o.b)(r.a,{defaultValue:"json",values:[{label:"JSON",value:"json"},{label:"Schema",value:"schema"},{label:"Response",value:"response"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"json",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "device": "192.168.1.11", // Device name or IP\n    "source": "www.facebook.com",\n    "type": "website"\n}\n'))),Object(o.b)(c.a,{value:"schema",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"device: STRING\nsource: STRING\ntype: STRING\n"))),Object(o.b)(c.a,{value:"response",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),"// No response.... yet\n")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"NOTE"),":  Smart Displays have no keyboard interface, so a website must provide its own text entry method if needed")))}p.isMDXComponent=!0},159:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),s=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=s.a.createContext({}),b=function(e){var t=s.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=b(e.components);return s.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(r,".").concat(d)]||u[d]||p[d]||o;return a?s.a.createElement(m,c(c({ref:t},l),{},{components:a})):s.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<o;l++)r[l]=a[l];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},160:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var r=s.apply(null,n);r&&e.push(r)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(t,[]))||(e.exports=n)}()},162:function(e,t,a){"use strict";var n=a(0),s=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=s},163:function(e,t,a){"use strict";var n=a(0),s=a.n(n);t.a=function(e){return s.a.createElement("div",null,e.children)}},164:function(e,t,a){"use strict";a(23),a(17),a(18);var n=a(0),s=a.n(n),o=a(162);var r=function(){return Object(n.useContext)(o.a)},c=a(160),i=a.n(c),l=a(126),b=a.n(l),u=37,p=39;t.a=function(e){var t=e.block,a=e.children,o=e.defaultValue,c=e.values,l=e.groupId,d=r(),m=d.tabGroupChoices,h=d.setTabGroupChoices,j=Object(n.useState)(o),O=j[0],f=j[1];if(null!=l){var y=m[l];null!=y&&y!==O&&f(y)}var v=function(e){f(e),null!=l&&h(l,e)},g=[];return s.a.createElement("div",null,s.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:i()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,a=e.label;return s.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===t,className:i()("tabs__item",b.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(g,e.target,e)},onFocus:function(){return v(t)},onClick:function(){return v(t)}},a)}))),s.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}}}]);