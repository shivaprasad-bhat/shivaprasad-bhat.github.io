(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},i={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"327d":function(e,t,n){"use strict";var a=n("8fd0"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=(n("a481"),{install:function(e){e.mixin({methods:{publicPath:function(e){return"/"+e.replace(/^\/+/g,"")}}})}}),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",{style:{"text-align":"justify"}},[n("dark-template-container")],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"dark-template"}},[n("v-fade-transition",{attrs:{mode:"out-in",type:"animation"}},[n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{md10:"",sm12:""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{md4:""}},[n("sidebar-container",{staticClass:"fill-height"})],1),n("v-flex",{attrs:{md8:""}},[n("content-container",{staticClass:"fill-height"})],1)],1)],1)],1)],1)],1)],1)],1)},c=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{color:"grey darken-3",dark:""}},[n("v-card-text",[n("avatar"),n("div",{staticClass:"text-sm-center mb-4 mt-3"},[n("h1",[e._v("\n        Shivaprasad\n        "),n("span",{staticClass:"light-blue--text text--lighten-3"},[e._v("Bhat")])]),n("span",[e._v("\n        Former Software Engineer @ Envestnet | Yodlee\n        "),n("br"),e._v("MCA student at MIT, Manipal\n      ")])]),n("sidebar-section",{attrs:{options:e.sections.info}}),n("sidebar-section",{attrs:{options:e.sections.socials}}),n("sidebar-section",{attrs:{options:e.sections.skills},scopedSlots:e._u([{key:"item",fn:function(t){var a=t.item;return[n("v-chip",[n("v-avatar",[n("v-icon",[e._v(e._s(a.icon))])],1),e._v("\n          "+e._s(a.text)+"\n        ")],1)]}}])}),n("sidebar-section",{attrs:{options:e.sections.hobbies},scopedSlots:e._u([{key:"item",fn:function(t){var a=t.item;return[n("v-chip",[n("v-avatar",[n("v-icon",[e._v(e._s(a.icon))])],1),e._v("\n          "+e._s(a.text)+"\n        ")],1)]}}])}),n("sidebar-section",{attrs:{options:e.sections.languages},scopedSlots:e._u([{key:"items",fn:function(t){var a=t.items;return[n("v-container",{attrs:{"pa-0":""}},[n("v-layout",{staticClass:"text-xs-center",attrs:{wrap:""}},[e._l(a,(function(t,a){return[n("v-flex",{key:a,attrs:{md3:"",sm4:"",xs6:""}},[n("v-progress-circular",{staticClass:"ma-2",attrs:{rotate:"360",size:"65",width:"2",value:t.value,color:"white"}},[e._v("\n                  "+e._s(t.text)+"\n                ")])],1)]}))],2)],1)]}}])})],1)],1)},d=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-md-center"},[n("v-avatar",{attrs:{color:"grey lighten-4",size:"120"}},[n("img",{attrs:{src:e.publicPath("/img/My_Photo.jpg"),alt:"Shivaprasad Bhat"}})])],1)},p=[],m={name:"Avatar"},v=m,f=n("2877"),g=n("6544"),h=n.n(g),x=n("8212"),b=Object(f["a"])(v,u,p,!1,null,"45fe53d2",null),_=b.exports;h()(b,{VAvatar:x["a"]});var y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-4"},[n("div",{staticClass:"title mb-3"},[e._v("\n    "+e._s(e.options.title)+"\n  ")]),e.$slots.default?e._t("default"):e.$scopedSlots.items?[e._t("items",null,{items:e.options.items})]:e.$scopedSlots.item?[e._l(e.options.items,(function(t){return e._t("item",null,{item:t})}))]:e._l(e.options.items,(function(e,t){return n("sidebar-section-item",{key:t,attrs:{item:e}})}))],2)},S=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",[e.hasIcon?n("v-flex",{attrs:{xs2:""}},[n("v-icon",[e._v("\n      "+e._s(e.item.icon)+"\n    ")])],1):e._e(),n("v-flex",{attrs:{xs10:e.hasIcon,xs12:!e.hasIcon}},[n("div",[e._v("\n      "+e._s(e.item.name)+"\n    ")]),n("p",[e.item.link?n("a",{staticClass:"grey--text",attrs:{href:e.item.link,target:"_blank"}},[e._v("\n        "+e._s(e.item.text)+"\n      ")]):n("span",{staticClass:"grey--text"},[e._v("\n        "+e._s(e.item.text)+"\n      ")])])])],1)},M=[],k={name:"SidebarSectionItem",props:{item:{type:Object,default:function(){}}},computed:{hasIcon:function(){return!!this.item.icon}}},w=k,A=n("0e8f"),E=n("132d"),j=n("a722"),O=Object(f["a"])(w,C,M,!1,null,"a33bb200",null),V=O.exports;h()(O,{VFlex:A["a"],VIcon:E["a"],VLayout:j["a"]});var P={name:"SidebarSection",components:{SidebarSectionItem:V},props:{options:{type:Object,default:function(){}}}},T=P,I=(n("e822"),Object(f["a"])(T,y,S,!1,null,"51d3378f",null)),F=I.exports,B={name:"Sidebar",components:{SidebarSection:F,Avatar:_},data:function(){return{sections:{info:{title:"INFO",items:[{name:"Email",icon:"mdi-email",text:"shivaprasad.bhat@learner.manipal.edu"},{name:"Phone",icon:"mdi-phone",text:"+91 8747068436"},{name:"Website",icon:"mdi-web",text:"shivaprasad.tech"},{name:"Date of Birth",icon:"mdi-cake-variant",text:"Saturday, Apr 13, 1996"}]},experience:{title:"Experience"},socials:{title:"SOCIALS",items:[{icon:"mdi-github-circle",text:"github.com/shivaprasad-bhat",link:"https://github.com/shivaprasad-bhat"},{icon:"mdi-linkedin-box",text:"linkedin.com/in/svbneelmane",link:"https://linkedin.com/in/svbneelmane"},{icon:"mdi-twitter",text:"twitter.com/svbneelmane",link:"https://twitter.com/svbneelmane"},{icon:"mdi-instagram",text:"instagram.com/svbneelmane",link:"https://instagram.com/svbneelmane"},{icon:"mdi-facebook",text:"facebook.com/svbneelmane",link:"https://facebook.com/svbneelmane"}]},skills:{title:"Skills",items:[{icon:"mdi-language-java",text:"Java"},{icon:"mdi-language-cpp",text:"C and C ++"},{text:"JavaScript",icon:"mdi-language-javascript"},{text:"HTML5",icon:"mdi-language-html5"},{text:"CSS3",icon:"mdi-language-css3"},{text:"Python Basics",icon:"mdi-language-python"},{text:"SQL",icon:"mdi-database"},{text:"NoSQL Database",icon:"mdi-database"},{text:"PHP",icon:"mdi-language-php"},{text:"Vue.js Framework",icon:"mdi-vuejs"},{text:"Node.js Framework",icon:"mdi-nodejs"},{text:"Shell Scripting",icon:"mdi-console"},{text:"Server Management",icon:"mdi-linux"},{text:"AWS",icon:"mdi-amazon"},{text:"Test Driven Development",icon:"mdi-test-tube"},{text:"Git",icon:"mdi-git"},{text:"Office Suite",icon:"mdi-office"},{text:"IDE Handling",icon:"mdi-code-array"}]},hobbies:{title:"HOBBIES",items:[{icon:"mdi-bike",text:"Cycling"},{icon:"mdi-teach",text:"Teaching"},{icon:"mdi-music",text:"Music"},{icon:"mdi-blogger",text:"Blogging"},{icon:"mdi-speaker",text:"Debate / Speech"},{icon:"mdi-book-open-page-variant",text:"Books"}]},certificates:{title:"Certificates",items:[{icon:"mdi-certificate",text:"Coursera - Python Functions, Files, and Dictionaries",source:"http://coursera.org/verify/78MRSL8MXGUB"},{icon:"mdi-certificate",text:"Coursera - Python Files, Data Handl",source:"http://coursera.org/verify/CML688T4Y4US"}]},languages:{title:"LANGUAGES",items:[{text:"English",value:70},{text:"Kannada",value:90}]}}}}},L=B,D=(n("6c5d"),n("b0af")),$=n("99d9"),U=n("cc20"),G=n("a523"),J=n("490a"),H=Object(f["a"])(L,l,d,!1,null,"3eb4a526",null),K=H.exports;h()(H,{VAvatar:x["a"],VCard:D["a"],VCardText:$["a"],VChip:U["a"],VContainer:G["a"],VFlex:A["a"],VIcon:E["a"],VLayout:j["a"],VProgressCircular:J["a"]});var W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{color:"grey lighten-4",light:""}},[n("v-card-text",[n("content-section",{attrs:{title:"About"}},[n("v-layoyt",[n("v-flex",[n("strong",{attrs:{align:"justify"}},[e._v("Shivaprasad Bhat, a young and energetic software developer is from remote village called Muroor of Uttara Kannada district, Karnataka. After completing his early education in his home town, Kumata, he moved to SDM College Mangalore to pursue his bachelor degree in Computer Application. After securing graduation degree with appreciable grade, he started his profession as an associate software engineer at Envestnet Yodlee and worked there for 2 years. At present he is pursuing his Masters in Computer Application at MIT, Manipal. Mr Shivaprasad Bhat is a motivated and skilled software developer with excellent leadership and managerial qualities. Moreover he is flexible to adopt himself to any challenging environment and passionate to take new roles and responsibilities.")])])],1)],1),n("content-section",{attrs:{title:"Experience"}},[n("h3",[e._v("Software Engineer | Envestenet Yodle")]),n("h5",[e._v("(03-Jul-2017 to 12-Jul-2019)")]),n("span",[n("strong",[e._v("Teams")]),e._v(": Wellness Engineering, Automation COE\n      ")]),n("br"),n("span",[n("strong",[e._v("Technologies Worked On")]),e._v(": Java, XML, Selenium, HTML5, CSS3, Oracle SQL\n      ")]),n("br"),n("span",[n("strong",[e._v("Projects Worked")]),e._v(": PFM3.0, AIFincheck, Cobranding Tool\n      ")]),n("br"),n("span",[n("strong",[e._v("Tools Known")]),e._v(": Perforce, Git, VersionOne, Bugzilla, Jenkins\n      ")]),n("br"),n("span",[n("strong",[e._v("IDEs Experienced")]),e._v(": IntelliJ based IDEs, Eclipse, VSCode\n      ")])]),e.projects?n("content-section",{attrs:{title:"Projects"}},e._l(e.projects,(function(t,a){return n("v-layout",{key:a},[n("v-flex",{attrs:{md1:"",xs3:""}},[n("v-icon",{attrs:{right:""}},[e._v("\n            "+e._s(t.icon)+"\n          ")])],1),n("v-flex",{attrs:{md11:"",xs9:""}},[n("p",[n("strong",[e._v(e._s(t.text))]),n("br"),n("span",[e._v(e._s(t.source))])])])],1)})),1):e._e(),e.educations?n("content-section",{attrs:{title:"Education"}},e._l(e.educations,(function(t,a){return n("v-layout",{key:a},[n("v-flex",{attrs:{md4:""}},[e._v("\n          "+e._s(t.from)+" - "+e._s(t.to)+"\n        ")]),n("v-flex",{attrs:{md8:""}},[t.title?n("strong",[e._v(e._s(t.title))]):e._e(),t.location?n("div",[n("i",[e._v(e._s(t.location))])]):e._e(),t.description?n("div",[e._v("\n            "+e._s(t.description)+"\n          ")]):e._e()])],1)})),1):e._e(),e.certificates?n("content-section",{attrs:{title:"Certificates"}},e._l(e.certificates,(function(t,a){return n("v-layout",{key:a},[n("v-flex",{attrs:{md1:"",xs3:""}},[n("v-icon",{attrs:{right:""}},[e._v("\n            "+e._s(t.icon)+"\n          ")])],1),n("v-flex",{attrs:{md11:"",xs9:""}},[n("p",[n("strong",[e._v(e._s(t.text))]),n("br"),n("span",[e._v(e._s(t.source))])])])],1)})),1):e._e(),e.prouds?n("content-section",{attrs:{title:"Achievements"}},e._l(e.prouds,(function(t,a){return n("v-layout",{key:a},[n("v-flex",{attrs:{md1:"",xs3:""}},[n("v-icon",{attrs:{right:""}},[e._v("\n            "+e._s(t.icon)+"\n          ")])],1),n("v-flex",{attrs:{md11:"",xs9:""}},[n("p",[n("strong",[e._v(e._s(t.text))]),n("br"),n("small",[e._v(e._s(t.source))])])])],1)})),1):e._e()],1)],1)},Y=[],z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{flat:""}},[n("v-card-title",[n("h3",{staticClass:"title font-weight-light mb-1"},[e._v("\n      "+e._s(e.title)+"\n    ")]),n("v-spacer"),e._t("actions")],2),n("v-card-text",[e._t("default")],2)],1)},N=[],Q={name:"ContentSection",components:{},props:{title:{type:String,default:""}}},X=Q,q=(n("d1ae"),n("12b2")),R=n("9910"),Z=Object(f["a"])(X,z,N,!1,null,"331eb13e",null),ee=Z.exports;h()(Z,{VCard:D["a"],VCardText:$["a"],VCardTitle:q["a"],VSpacer:R["a"]});var te={name:"MainContent",components:{ContentSection:ee},data:function(){return{abc:[{a:"Shivaprasad Bhat, a young and energetic software developer is from remote village called Muroor of Uttara Kannada district. After completing his early education in his home town, Kumata moved to SDM College Mangalore to pursue his bachelor degree in Computer Application. After securing graduation degree with appreciable grade, he started his profession as an associate software engineer at Envestnet Yodlee and worked there for 2 years. At present he is pursuing his Masters in Computer Application at MIT, Manipal. Mr Shivaprasad Bhat is a motivated and skilled software developer with excellent leadership and managerial qualities. Moreover he is flexible to adopt himself to any challenging environment and passionate to take new roles and responsibilities."}],prouds:[{icon:"mdi-account-multiple",text:"Awarded as Best Outgoing Student 2017, by SDM College of Business Management, Mangaluru",source:"(For academic excellece and contribution to Sygma 2016)"},{icon:"mdi-account-multiple",text:"Served as CEO of Sygma 2016, a State level IT Fest for UG Students",source:"(Organised by SDMCBM, Mangaluru)"},{icon:"mdi-account-multiple",text:"Won several awards in various IT fests organized for UG Students.",source:"(Also participated in various technical/non-technical events.)"}],projects:[{icon:"mdi-git",text:"PFM 3.0 (2017 – 2019)",source:"PFM is one of the products developed by Envestnet® | Yodlee®. With Personal Financial Management (PFM) tools and user-friendly FinApps, customers can view all of their financial accounts in one place, manage expenses, set a budget, save for personal goals, view investments, calculate net worth, and improve their overall financial wellness."},{icon:"mdi-git",text:"ILIB - Library Management Application",source:"iLib is an online library management application developed for SDM College, Mangaluru, and is submitted to Mangalore University as final semester project"}],certificates:[{icon:"mdi-certificate",text:"Coursera - Python Functions, Files, and Dictionaries",source:"coursera.org/verify/78MRSL8MXGUB"},{icon:"mdi-certificate",text:"Coursera - Python Files, Data Handl",source:"coursera.org/verify/CML688T4Y4US"}],educations:[{from:"2019",to:"Present",title:"Master's degree, Computer Applications",location:"Manipal Academy of Higher Education, Manipal",description:"(10 CGPA, 1st Semester)"},{from:"2014",to:"2017",title:"Bachelor's degree, Computer Applications",location:"Mangalore University",description:"(8.8 CGPA)"}]}}},ne=te,ae=(n("c1df"),Object(f["a"])(ne,W,Y,!1,null,"1e87002c",null)),ie=ae.exports;h()(ae,{VCard:D["a"],VCardText:$["a"],VFlex:A["a"],VIcon:E["a"],VLayout:j["a"]});var oe=n("e2dd"),re={name:"DarkTemplateContainer",components:{ContentContainer:ie,SidebarContainer:K},mounted:function(){new oe["a"](document.getElementById("to-timeline"),document.getElementById("timeline"),{size:2,color:this.$vuetify.theme.primary,startLabel:oe["a"].captionLabel("To the Journey ...")})}},se=re,ce=(n("327d"),n("7496")),le=n("549c"),de=n("0789"),ue=Object(f["a"])(se,s,c,!1,null,"459eed95",null),pe=ue.exports;h()(ue,{VApp:ce["a"],VContainer:G["a"],VContent:le["a"],VFadeTransition:de["a"],VFlex:A["a"],VLayout:j["a"]});var me={name:"App",components:{DarkTemplateContainer:pe},data:function(){return{}}},ve=me,fe=Object(f["a"])(ve,o,r,!1,null,null,null),ge=fe.exports;h()(fe,{VApp:ce["a"],VContent:le["a"]});var he=n("bb71");n("da64");a["a"].use(he["a"],{iconfont:"mdi"});n("ac6a");var xe=n("8103"),be=n.n(xe),_e=n("bba4"),ye=n.n(_e),Se=n("ffe0");Se.keys().forEach((function(e){var t=Se(e),n=be()(ye()(e.replace(/^\.\//,"").replace(/\.\w+$/,"")));n="".concat(n),a["a"].component(n,t.default||t)})),a["a"].config.productionTip=!1,a["a"].use(i),new a["a"]({render:function(e){return e(ge)}}).$mount("#app")},"6c5d":function(e,t,n){"use strict";var a=n("9d23"),i=n.n(a);i.a},"7a6c":function(e,t,n){},"8e32":function(e,t,n){},"8fd0":function(e,t,n){},"9d23":function(e,t,n){},c1df:function(e,t,n){"use strict";var a=n("d2fd"),i=n.n(a);i.a},d1ae:function(e,t,n){"use strict";var a=n("7a6c"),i=n.n(a);i.a},d2fd:function(e,t,n){},e822:function(e,t,n){"use strict";var a=n("8e32"),i=n.n(a);i.a},ffe0:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="ffe0"}});
//# sourceMappingURL=app.3067380a.js.map