(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f8bd6de"],{"0cb2":function(t,e,n){var i=n("7b0b"),r=Math.floor,s="".replace,a=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,l,f){var u=n+t.length,p=c.length,d=o;return void 0!==l&&(l=i(l),d=a),s.call(f,d,(function(i,s){var a;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(u);case"<":a=l[s.slice(1,-1)];break;default:var o=+s;if(0===o)return i;if(o>p){var f=r(o/10);return 0===f?i:f<=p?void 0===c[f-1]?s.charAt(1):c[f-1]+s.charAt(1):i}a=c[o-1]}return void 0===a?"":a}))}},"3af2":function(t,e,n){"use strict";n("9f5c")},"415d":function(t,e,n){"use strict";n("8f0f")},"466d":function(t,e,n){"use strict";var i=n("d784"),r=n("825a"),s=n("50c4"),a=n("1d80"),o=n("8aa5"),c=n("14c3");i("match",1,(function(t,e,n){return[function(e){var n=a(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var a=r(t),l=String(this);if(!a.global)return c(a,l);var f=a.unicode;a.lastIndex=0;var u,p=[],d=0;while(null!==(u=c(a,l))){var _=String(u[0]);p[d]=_,""===_&&(a.lastIndex=o(l,s(a.lastIndex),f)),d++}return 0===d?null:p}]}))},"498a":function(t,e,n){"use strict";var i=n("23e7"),r=n("58a8").trim,s=n("c8d2");i({target:"String",proto:!0,forced:s("trim")},{trim:function(){return r(this)}})},"4d63":function(t,e,n){var i=n("83ab"),r=n("da84"),s=n("94ca"),a=n("7156"),o=n("9bf2").f,c=n("241c").f,l=n("44e7"),f=n("ad6d"),u=n("9f7f"),p=n("6eeb"),d=n("d039"),_=n("69f3").set,h=n("2626"),g=n("b622"),m=g("match"),v=r.RegExp,x=v.prototype,b=/a/g,k=/a/g,y=new v(b)!==b,w=u.UNSUPPORTED_Y,S=i&&s("RegExp",!y||w||d((function(){return k[m]=!1,v(b)!=b||v(k)==k||"/a/i"!=v(b,"i")})));if(S){var $=function(t,e){var n,i=this instanceof $,r=l(t),s=void 0===e;if(!i&&r&&t.constructor===$&&s)return t;y?r&&!s&&(t=t.source):t instanceof $&&(s&&(e=f.call(t)),t=t.source),w&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var o=a(y?new v(t,e):v(t,e),i?this:x,$);return w&&n&&_(o,{sticky:n}),o},E=function(t){t in $||o($,t,{configurable:!0,get:function(){return v[t]},set:function(e){v[t]=e}})},I=c(v),R=0;while(I.length>R)E(I[R++]);x.constructor=$,$.prototype=x,p(r,"RegExp",$)}h("RegExp")},5319:function(t,e,n){"use strict";var i=n("d784"),r=n("825a"),s=n("50c4"),a=n("a691"),o=n("1d80"),c=n("8aa5"),l=n("0cb2"),f=n("14c3"),u=Math.max,p=Math.min,d=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,n,i){var _=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,h=i.REPLACE_KEEPS_$0,g=_?"$":"$0";return[function(n,i){var r=o(this),s=void 0==n?void 0:n[t];return void 0!==s?s.call(n,r,i):e.call(String(r),n,i)},function(t,i){if(!_&&h||"string"===typeof i&&-1===i.indexOf(g)){var o=n(e,t,this,i);if(o.done)return o.value}var m=r(t),v=String(this),x="function"===typeof i;x||(i=String(i));var b=m.global;if(b){var k=m.unicode;m.lastIndex=0}var y=[];while(1){var w=f(m,v);if(null===w)break;if(y.push(w),!b)break;var S=String(w[0]);""===S&&(m.lastIndex=c(v,s(m.lastIndex),k))}for(var $="",E=0,I=0;I<y.length;I++){w=y[I];for(var R=String(w[0]),T=u(p(a(w.index),v.length),0),M=[],O=1;O<w.length;O++)M.push(d(w[O]));var D=w.groups;if(x){var Y=[R].concat(M,T,v);void 0!==D&&Y.push(D);var L=String(i.apply(void 0,Y))}else L=l(R,v,T,M,D,i);T>=E&&($+=v.slice(E,T)+L,E=T+R.length)}return $+v.slice(E)}]}))},7795:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".ant-collapse{margin:10px}.ant-collapse-content-box{padding:24px!important}",""]),t.exports=e},"8f0f":function(t,e,n){var i=n("7795");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("521f5e89",i,!0,{sourceMap:!1,shadowMode:!1})},"9f5c":function(t,e,n){var i=n("b51a");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("499e").default;r("d28de982",i,!0,{sourceMap:!1,shadowMode:!1})},b51a:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,".ant-card[data-v-d3bb064c]{margin:10px}@media (max-width:512px){.ant-card[data-v-d3bb064c]{margin:10px 0}}",""]),t.exports=e},c8d2:function(t,e,n){var i=n("d039"),r=n("5899"),s="​᠎";t.exports=function(t){return i((function(){return!!r[t]()||s[t]()!=s||r[t].name!==t}))}},fd48:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-collapse",{attrs:{bordered:!1,"default-active-key":"1"}},[n("a-collapse-panel",{key:"1",attrs:{header:t.name?"编辑站点："+t.name:"添加站点"}},[n("p",[t._v("您的配置文件中应当有对应的字段时，下列表单中的设置才能生效，配置文件名称创建后不可修改。")]),n("std-data-entry",{attrs:{"data-list":t.columns},model:{value:t.config,callback:function(e){t.config=e},expression:"config"}}),t.name?n("cert-info",{ref:"cert-info",attrs:{domain:t.name}}):t._e(),n("br"),n("a-space",[n("a-button",{attrs:{type:"primary",ghost:""},on:{click:t.issue_cert}},[t._v(" 自动申请 Let's Encrypt 证书 ")])],1)],1)],1),n("a-card",{attrs:{title:"配置文件编辑"}},[n("vue-itextarea",{model:{value:t.configText,callback:function(e){t.configText=e},expression:"configText"}})],1),n("footer-tool-bar",[n("a-space",[n("a-button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")]),n("a-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("保存")])],1)],1)],1)},r=[],s=n("1da1"),a=(n("96cf"),n("b0c0"),n("466d"),n("ac1f"),n("498a"),n("5319"),n("4d63"),n("25f0"),n("cb07")),o=n("9c70"),c=n("a002"),l=[{title:"配置文件名称",dataIndex:"name",edit:{type:"input"}},{title:"网站域名 (server_name)",dataIndex:"server_name",edit:{type:"input"}},{title:"网站根目录 (root)",dataIndex:"root",edit:{type:"input"}},{title:"网站首页 (index)",dataIndex:"index",edit:{type:"input"}},{title:"http 监听端口",dataIndex:"http_listen_port",edit:{type:"number",min:80}},{title:"支持 SSL",dataIndex:"support_ssl",edit:{type:"switch",event:"change_support_ssl"}},{title:"https 监听端口",dataIndex:"https_listen_port",edit:{type:"number",min:443}},{title:"SSL 证书路径 (ssl_certificate)",dataIndex:"ssl_certificate",edit:{type:"input"}},{title:"SSL 证书私钥路径 (ssl_certificate_key)",dataIndex:"ssl_certificate_key",edit:{type:"input"}}],f=l,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ok?n("div",[n("h3",[t._v("证书状态")]),n("p",[t._v("中级证书颁发机构："+t._s(t.cert.issuer_name))]),n("p",[t._v("证书名称："+t._s(t.cert.subject_name))]),n("p",[t._v("过期时间："+t._s(t.moment(t.cert.not_after).format("YYYY-MM-DD HH:mm:ss")))]),n("p",[t._v("在此之前无效："+t._s(t.moment(t.cert.not_before).format("YYYY-MM-DD HH:mm:ss")))]),(new Date).toISOString()<t.cert.not_before||(new Date).toISOString()>t.cert.not_after?[n("a-icon",{style:{color:"red"},attrs:{type:"close-circle"}}),t._v(" 此证书已过期 ")]:[n("a-icon",{style:{color:"green"},attrs:{type:"check-circle"}}),t._v(" 证书处在有效期内 ")]],2):t._e()},p=[],d=n("c1df"),_=n.n(d),h={name:"CertInfo",data:function(){return{ok:!1,cert:{},moment:_.a}},props:{domain:String},created:function(){this.get()},watch:{domain:function(){this.get()}},methods:{get:function(){var t=this;this.$api.domain.cert_info(this.domain).then((function(e){t.cert=e,t.ok=!0})).catch((function(){t.ok=!1}))}}},g=h,m=n("2877"),v=Object(m["a"])(g,u,p,!1,null,"70bbb47a",null),x=v.exports,b={name:"DomainEdit",components:{CertInfo:x,FooterToolBar:o["a"],StdDataEntry:a["a"],VueItextarea:c["a"]},data:function(){return{name:this.$route.params.name,columns:f,config:{http_listen_port:80,https_listen_port:null,server_name:"",index:"",root:"",ssl_certificate:"",ssl_certificate_key:"",support_ssl:!1},configText:"",ws:null,ok:!1}},watch:{$route:function(){this.init()},config:{handler:function(){this.unparse()},deep:!0},"config.support_ssl":function(){this.ok&&this.change_support_ssl()}},created:function(){this.init()},destroyed:function(){null!==this.ws&&this.ws.close()},methods:{init:function(){var t=this;this.name?this.$api.domain.get(this.name).then((function(e){t.configText=e.config,t.parse(e).then((function(){t.ok=!0}))})).catch((function(e){console.log(e),t.$message.error("服务器错误")})):(this.config={http_listen_port:80,https_listen_port:null,server_name:"",index:"",root:"",ssl_certificate:"",ssl_certificate_key:"",support_ssl:!1},this.get_template())},parse:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var i,r,s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:for(s in i=t.config,r={http_listen_port:/listen[\s](.*);/i,https_listen_port:/listen[\s](.*) ssl/i,server_name:/server_name[\s](.*);/i,index:/index[\s](.*);/i,root:/root[\s](.*);/i,ssl_certificate:/ssl_certificate[\s](.*);/i,ssl_certificate_key:/ssl_certificate_key[\s](.*);/i},e.config["name"]=t.name,r)a=i.match(r[s]),null!==a&&(void 0!==a[1]?e.config[s]=a[1].trim():e.config[s]=a[0].trim());e.config.https_listen_port&&(e.config.support_ssl=!0);case 5:case"end":return n.stop()}}),n)})))()},unparse:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r in n=t.configText,i={server_name:/server_name[\s](.*);/gi,index:/index[\s](.*);/i,root:/root[\s](.*);/i,ssl_certificate:/ssl_certificate[\s](.*);/i,ssl_certificate_key:/ssl_certificate_key[\s](.*);/i},n=n.replace(/listen[\s](.*);/i,"listen\t"+t.config["http_listen_port"]+";"),n=n.replace(/listen[\s](.*) ssl/i,"listen\t"+t.config["https_listen_port"]+" ssl"),n=n.replace(/listen(.*):(.*);/i,"listen\t[::]:"+t.config["http_listen_port"]+";"),n=n.replace(/listen(.*):(.*) ssl/i,"listen\t[::]:"+t.config["https_listen_port"]+" ssl"),i)n=n.replace(new RegExp(i[r]),r+"\t"+(void 0!==t.config[r]?t.config[r]:" ")+";");t.configText=n;case 8:case"end":return e.stop()}}),e)})))()},get_template:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.config.support_ssl){e.next=5;break}return e.next=3,t.$api.domain.get_template("https-conf").then((function(e){t.configText=e.template}));case 3:e.next=7;break;case 5:return e.next=7,t.$api.domain.get_template("http-conf").then((function(e){t.configText=e.template}));case 7:return e.next=9,t.unparse();case 9:case"end":return e.stop()}}),e)})))()},change_support_ssl:function(){var t=this;this.$confirm({title:"您已修改 SSL 支持状态，是否需要更换配置文件模板？",content:"更换配置文件模板将会丢失自定义配置",onOk:function(){t.get_template()},onCancel:function(){}})},save:function(){var t=this;this.$api.domain.save(this.name?this.name:this.config.name,{content:this.configText}).then((function(e){t.parse(e),t.$message.success("保存成功"),t.name&&t.$refs["cert-info"].get()})).catch((function(e){console.log(e),t.$message.error("保存错误"+e.message!==void 0?" "+e.message:null,10)}))},issue_cert:function(){var t=this;this.$message.info("请注意，当前配置中 server_name 必须为需要申请证书的域名，否则无法申请",15),this.$message.info("正在申请，请稍后",15),this.ws=new WebSocket(this.getWebSocketRoot()+"/cert/issue/"+this.config.server_name+"?token="+btoa(this.$store.state.user.token)),this.ws.onopen=function(){t.ws.send("go")},this.ws.onmessage=function(e){var n=JSON.parse(e.data);switch(n.status){case"success":t.$message.success(n.message,10);break;case"info":t.$message.info(n.message,10);break;case"error":t.$message.error(n.message,10);break}"success"===n.status&&void 0!==n.ssl_certificate&&void 0!==n.ssl_certificate_key&&(t.config.ssl_certificate=n.ssl_certificate,t.config.ssl_certificate_key=n.ssl_certificate_key,t.$refs["cert-info"].get())}}}},k=b,y=(n("415d"),n("3af2"),Object(m["a"])(k,i,r,!1,null,"d3bb064c",null));e["default"]=y.exports}}]);