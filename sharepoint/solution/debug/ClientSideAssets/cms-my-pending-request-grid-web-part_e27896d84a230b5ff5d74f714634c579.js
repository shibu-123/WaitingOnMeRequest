define("14d39950-e61c-4e8c-ac7a-f41031b69463_0.0.1",["@microsoft/sp-property-pane","ametek-library","@microsoft/sp-core-library","@microsoft/sp-page-context","@microsoft/sp-webpart-base","react","react-dom","CmsMyPendingRequestGridWebPartStrings"],function(e,t,n,r,i,o,a,s){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="ocEY")}({"+qE3":function(e,t,n){"use strict";var r,i="object"==typeof Reflect?Reflect:null,o=i&&"function"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};r=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var a=Number.isNaN||function(e){return e!=e};function s(){s.init.call(this)}e.exports=s,e.exports.once=function(e,t){return new Promise(function(n,r){function i(){void 0!==o&&e.removeListener("error",o),n([].slice.call(arguments))}var o;"error"!==t&&(o=function(n){e.removeListener(t,i),r(n)},e.once("error",o)),e.once(t,i)})},s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var c=10;function u(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function l(e){return void 0===e._maxListeners?s.defaultMaxListeners:e._maxListeners}function f(e,t,n,r){var i,o,a,s;if(u(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),a=o[t]),void 0===a)a=o[t]=n,++e._eventsCount;else if("function"==typeof a?a=o[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),(i=l(e))>0&&a.length>i&&!a.warned){a.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=a.length,s=c,console&&console.warn&&console.warn(s)}return e}function p(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=function(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}.bind(r);return i.listener=n,r.wrapFn=i,i}function d(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"==typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):h(i,i.length)}function m(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function h(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");c=e}}),s.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||a(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},s.prototype.getMaxListeners=function(){return l(this)},s.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){var a;if(t.length>0&&(a=t[0]),a instanceof Error)throw a;var s=new Error("Unhandled error."+(a?" ("+a.message+")":""));throw s.context=a,s}var c=i[e];if(void 0===c)return!1;if("function"==typeof c)o(c,this,t);else{var u=c.length,l=h(c,u);for(n=0;n<u;++n)o(l[n],this,t)}return!0},s.prototype.addListener=function(e,t){return f(this,e,t,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(e,t){return f(this,e,t,!0)},s.prototype.once=function(e,t){return u(t),this.on(e,p(this,e,t)),this},s.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,p(this,e,t)),this},s.prototype.removeListener=function(e,t){var n,r,i,o,a;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){a=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,a||t)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},s.prototype.listeners=function(e){return d(this,e,!0)},s.prototype.rawListeners=function(e){return d(this,e,!1)},s.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):m.call(e,t)},s.prototype.listenerCount=m,s.prototype.eventNames=function(){return this._eventsCount>0?r(this._events):[]}},"26ea":function(t,n){t.exports=e},"95xj":function(e,n){e.exports=t},IUJJ:function(e,t,n){(e.exports=n("JPst")(!1)).push([e.i,'.cmsMyPendingRequestGrid_af740707 .container_af740707{max-width:700px;margin:0 auto;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1);box-shadow:0 2px 4px 0 rgba(0,0,0,.2),0 25px 50px 0 rgba(0,0,0,.1)}.cmsMyPendingRequestGrid_af740707 .row_af740707{margin:0 -8px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;background-color:#005a9e;padding:20px}.cmsMyPendingRequestGrid_af740707 .row_af740707:after,.cmsMyPendingRequestGrid_af740707 .row_af740707:before{display:table;content:"";line-height:0}.cmsMyPendingRequestGrid_af740707 .row_af740707:after{clear:both}.cmsMyPendingRequestGrid_af740707 .column_af740707{position:relative;min-height:1px;padding-left:8px;padding-right:8px;-webkit-box-sizing:border-box;box-sizing:border-box}[dir=ltr] .cmsMyPendingRequestGrid_af740707 .column_af740707{float:left}[dir=rtl] .cmsMyPendingRequestGrid_af740707 .column_af740707{float:right}.cmsMyPendingRequestGrid_af740707 .column_af740707 .ms-Grid_af740707{padding:0}@media (min-width:640px){.cmsMyPendingRequestGrid_af740707 .column_af740707{width:83.33333333333334%}}@media (min-width:1024px){.cmsMyPendingRequestGrid_af740707 .column_af740707{width:66.66666666666666%}}@media (min-width:1024px){[dir=ltr] .cmsMyPendingRequestGrid_af740707 .column_af740707{left:16.66667%}[dir=rtl] .cmsMyPendingRequestGrid_af740707 .column_af740707{right:16.66667%}}@media (min-width:640px){[dir=ltr] .cmsMyPendingRequestGrid_af740707 .column_af740707{left:8.33333%}[dir=rtl] .cmsMyPendingRequestGrid_af740707 .column_af740707{right:8.33333%}}.cmsMyPendingRequestGrid_af740707 .title_af740707{font-size:21px;font-weight:100;color:#fff}.cmsMyPendingRequestGrid_af740707 .description_af740707,.cmsMyPendingRequestGrid_af740707 .subTitle_af740707{font-size:17px;font-weight:300;color:#fff}.cmsMyPendingRequestGrid_af740707 .button_af740707{text-decoration:none;height:32px;min-width:80px;background-color:#0078d4;border-color:#0078d4;color:#fff;outline:transparent;position:relative;font-family:Segoe UI WestEuropean,Segoe UI,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;font-weight:400;border-width:0;text-align:center;cursor:pointer;display:inline-block;padding:0 16px}.cmsMyPendingRequestGrid_af740707 .button_af740707 .label_af740707{font-weight:600;font-size:14px;height:32px;line-height:32px;margin:0 4px;vertical-align:top;display:inline-block}',""])},JPst:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(o).concat([i]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},OIdg:function(e,t,n){var r=n("IUJJ"),i=n("ruv1");"string"==typeof r&&(r=[[e.i,r]]);for(var o=0;o<r.length;o++)i.loadStyles(r[o][1],!0);r.locals&&(e.exports=r.locals)},UWqr:function(e,t){e.exports=n},"X+PM":function(e,t){e.exports=r},br4S:function(e,t){e.exports=i},cDcd:function(e,t){e.exports=o},faye:function(e,t){e.exports=a},lGBi:function(e,t){e.exports=s},ocEY:function(e,t,n){"use strict";n.r(t);var r=n("cDcd"),i=n("faye"),o=n("UWqr"),a=n("26ea"),s=n("br4S"),c=n("lGBi"),u=n("95xj");n("OIdg");var l,f={cmsMyPendingRequestGrid:"cmsMyPendingRequestGrid_af740707",container:"container_af740707",row:"row_af740707",column:"column_af740707","ms-Grid":"ms-Grid_af740707",title:"title_af740707",subTitle:"subTitle_af740707",description:"description_af740707",button:"button_af740707",label:"label_af740707"},p=n("X+PM"),d=new(function(){function e(){}return e.prototype.getCMSProfileAction=function(){u.Dispatcher.dispatch({type:"getCMSProfileData"})},e.prototype.getCMSRequestAction=function(){u.Dispatcher.dispatch({type:"getCMSData"})},e.prototype.fetchUserInfo=function(e){u.Dispatcher.dispatch({type:"fetchUserData",userEmail:e})},e}()),m=n("+qE3"),h=(l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),g=function(e,t,n,r){return new(n||(n=Promise))(function(i,o){function a(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}c((r=r.apply(e,t||[])).next())})},y=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},b=function(e){function t(){var t=e.call(this)||this;return t._resCMSData=[],t._resCMSProfile=[],t._resCurrUserGroup=[],t.getCurrentUser=function(e){_._resUserEmail=e},t.setCMSProfile=function(){(new u.AmetekLibraryLibrary).loadPNPJS().then(function(e){e.web.lists.getByTitle("852581CCMSProfile").items.select("Title","FreshAPIEndpoint","FreshAPIAuthKey","FSEndpointAgent","PowerAutomateURL","FreshserviceAPIBodyTemplate","redirectPage","CMSPage","FreshTicketURL","auditReportPage","cmsAdvanceSearchPage","cmsObjectPageName","cmsTestingPageName","cmsProfilePageName","cmsRequestPageName","cmsLibraryPageName").get().then(function(e){_._resCMSProfile=e.map(function(e){return{AllReportsPage:e.redirectPage,CMSPage:e.CMSPage,FreshAPIAuthKey:e.FreshAPIAuthKey,FreshAPIEndpoint:e.FreshAPIEndpoint,FSEndpointAgent:e.FSEndpointAgent,FreshserviceAPIBodyTemplate:e.FreshserviceAPIBodyTemplate,PowerAutomateURL:e.PowerAutomateURL,Title:e.Title,FreshTicketURL:e.FreshTicketURL,auditReportPage:e.auditReportPage,cmsAdvanceSearchPage:e.cmsAdvanceSearchPage,cmsObjectPageName:e.cmsObjectPageName,cmsTestingPageName:e.cmsTestingPageName,cmsProfilePageName:e.cmsProfilePageName,cmsRequestPageName:e.cmsRequestPageName,cmsLibraryPageName:e.cmsLibraryPageName}}),_.emitChange("onCMSProfileChange")})})},t.getCurrentUserGroup=function(){return new Promise(function(e,n){t.myInstance.loadPNPJS().then(function(n){return g(t,void 0,void 0,function(){var t=this;return y(this,function(r){switch(r.label){case 0:return[4,n.web.currentUser.groups().then(function(e){e.map(function(e,n){t._resCurrUserGroup.push("or AssignedTo/Title eq '"+e.Title+"'")})})];case 1:return r.sent(),this._resFilterString=this._resCurrUserGroup.join(" "),e(this._resFilterString),[2]}})})})})},t.getCMSRequestResult=function(){return g(t,void 0,void 0,function(){var e=this;return y(this,function(t){switch(t.label){case 0:return[4,this.getCurrentUserGroup()];case 1:return t.sent(),this.myInstance.loadPNPJS().then(function(t){return g(e,void 0,void 0,function(){return y(this,function(e){switch(e.label){case 0:return[4,t.web.lists.getByTitle("9A7B915ECMS").items.select("ID","Title","formStatus","requester/Title","Created","AssignedTo/Title","AssignedTo/EMail","Application","instance").filter("AssignedTo/EMail eq '"+this._resUserEmail+"' "+this._resFilterString).expand("requester","AssignedTo").getAll().then(function(e){_._resCMSData=e,_.emitChange("ongetCMSRequest")}).catch(function(e){})];case 1:return e.sent(),[2]}})})}),[2]}})})},t.myInstance=new u.AmetekLibraryLibrary,t}return h(t,e),t.prototype.emitChange=function(e){this.emit(e)},t.prototype.getCMSProfileResults=function(){return this._resCMSProfile},t.prototype.getCMSData=function(){return this._resCMSData},t}(m.EventEmitter);u.Dispatcher.register(function(e){switch(e.action.type){case"getCMSProfileData":_.setCMSProfile();break;case"getCMSData":_.getCMSRequestResult();break;case"fetchUserData":_.getCurrentUser(e.action.userEmail)}});var v,S,P,w,_=new b,x=_,C=function(){return(C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},R=Object(u.makeStyles)(function(e){return{root:{"& > *":{margin:e.spacing(1)}},button:{backgroundColor:"#ea9623"}}}),E=Object(u.createMuiTheme)({palette:{primary:{main:"#4caf50"},secondary:{main:"#cde6fe"}},overrides:{MuiTableRow:{root:{"&:hover":{backgroundColor:"rgba(33, 150, 243, 0.5)"}}}}}),M={Add:Object(r.forwardRef)(function(e,t){return r.createElement(u.AddBox,C({},e,{ref:t}))}),Check:Object(r.forwardRef)(function(e,t){return r.createElement(u.Check,C({},e,{ref:t}))}),Clear:Object(r.forwardRef)(function(e,t){return r.createElement(u.Clear,C({},e,{ref:t}))}),Delete:Object(r.forwardRef)(function(e,t){return r.createElement(u.DeleteOutline,C({},e,{ref:t}))}),DetailPanel:Object(r.forwardRef)(function(e,t){return r.createElement(u.ChevronRight,C({},e,{ref:t}))}),Edit:Object(r.forwardRef)(function(e,t){return r.createElement(u.Edit,C({},e,{ref:t}))}),Export:Object(r.forwardRef)(function(e,t){return r.createElement(u.SaveAlt,C({},e,{ref:t}))}),Filter:Object(r.forwardRef)(function(e,t){return r.createElement(u.FilterList,C({},e,{ref:t}))}),FirstPage:Object(r.forwardRef)(function(e,t){return r.createElement(u.FirstPage,C({},e,{ref:t}))}),LastPage:Object(r.forwardRef)(function(e,t){return r.createElement(u.LastPage,C({},e,{ref:t}))}),NextPage:Object(r.forwardRef)(function(e,t){return r.createElement(u.ChevronRight,C({},e,{ref:t}))}),PreviousPage:Object(r.forwardRef)(function(e,t){return r.createElement(u.ChevronLeft,C({},e,{ref:t}))}),ResetSearch:Object(r.forwardRef)(function(e,t){return r.createElement(u.Clear,C({},e,{ref:t}))}),Search:Object(r.forwardRef)(function(e,t){return r.createElement(u.Search,C({},e,{ref:t}))}),SortArrow:Object(r.forwardRef)(function(e,t){return r.createElement(u.ArrowDownward,C({},e,{ref:t}))}),ThirdStateCheck:Object(r.forwardRef)(function(e,t){return r.createElement(u.Remove,C({},e,{ref:t}))}),ViewColumn:Object(r.forwardRef)(function(e,t){return r.createElement(u.ViewColumn,C({},e,{ref:t}))})};function L(e){var t=r.useState([]),n=(t[0],t[1]),i=r.useState(""),o=i[0],a=i[1],s=r.useState(""),c=(s[0],s[1]),l=r.useState(""),m=(l[0],l[1]),h=r.useState(""),g=(h[0],h[1]),y=r.useState(""),b=(y[0],y[1]),_=r.useState(""),L=(_[0],_[1]),A=r.useState(""),O=(A[0],A[1]),j=r.useState(""),T=(j[0],j[1]),q=r.useState(""),k=q[0],F=q[1],I=r.useState(""),N=I[0],U=I[1],G=r.useState(""),D=G[0],B=G[1],z=r.useState(""),J=z[0],W=z[1],K=r.useState(""),V=K[0],Y=K[1],H=r.useState(""),X=H[0],Q=H[1],Z=r.useState(""),$=Z[0],ee=Z[1],te=r.useState(!1),ne=(te[0],te[1],r.useState([])),re=ne[0],ie=ne[1],oe=new u.AmetekLibraryLibrary;R();v=e.context.pageContext.web.absoluteUrl,e.context.pageContext.user.displayName,S=e.context.pageContext.user.email,e.context.pageContext.web.title,P=new URL(v).pathname,v.split(P)[0],e.context.pageContext.web.absoluteUrl.substr(e.context.pageContext.web.absoluteUrl.lastIndexOf("/")+1,e.context.pageContext.web.absoluteUrl.length);var ae=oe.importMoment(),se=new p.SPPermission(e.context.pageContext.web.permissions.value);se.hasPermission(p.SPPermission.manageLists),w=se.hasPermission(p.SPPermission.manageWeb);var ce=[{title:"CR#",field:"ID",cellStyle:{width:"5px"},render:function(e){return r.createElement("a",{href:v+"/SitePages/"+o+"?EDITID="+e.ID,target:"_blank"},e.ID)}},{title:"Submitted On",field:"Created",cellStyle:{width:"10px"},render:function(e){return ae(e.Created).format("MMM DD YYYY")}},{title:"Requester",field:"requester.Title",render:function(e){return null==e.requester.Title?"":e.requester.Title}},{title:"Status",field:"formStatus"},{title:"Title",field:"Title"},{title:"Application",field:"Application"},{title:"Production Instance",field:"instance"}],ue=function(){ie(x.getCMSData()),x.getCMSData()},le=function(){var e=x.getCMSProfileResults();n(e),a(e[0].CMSPage),c(e[0].AllReportsPage),m(e[0].FreshAPIEndpoint),g(e[0].FSEndpointAgent),b(e[0].FreshAPIAuthKey),L(e[0].FreshserviceAPIBodyTemplate),O(e[0].PowerAutomateURL),T(e[0].FreshTicketURL),F(e[0].auditReportPage),U(e[0].cmsAdvanceSearchPage),B(e[0].cmsObjectPageName),W(e[0].cmsTestingPageName),Y(e[0].cmsProfilePageName),Q(e[0].cmsRequestPageName),ee(e[0].cmsLibraryPageName)};return r.useEffect(function(){d.fetchUserInfo(S),d.getCMSProfileAction(),x.on("onCMSProfileChange",le),d.getCMSRequestAction(),x.on("ongetCMSRequest",ue)},[]),r.createElement("div",{className:f.cmsMyPendingRequestGrid},r.createElement(u.MuiCard,{style:{height:"100%"}},r.createElement(u.MuiThemeProvider,{theme:E},r.createElement(u.MaterialTable,{icons:M,title:"Waiting On Me",columns:ce,data:re,options:{filtering:!0,sorting:!0,headerStyle:{backgroundColor:"#01579b",color:"#FFF"},exportButton:{csv:!0},exportAllData:!0},components:{Toolbar:function(e){return r.createElement("div",null,r.createElement(u.MTableToolbar,C({},e)),r.createElement("div",{style:{padding:"0px 10px"}},r.createElement(u.Chip,{label:"New Request",component:"a",color:"secondary",href:v+"/SitePages/"+o,target:"_blank","data-interception":"off",icon:r.createElement(u.Add,{fontSize:"small"}),style:{marginRight:5,marginBottom:5}}),r.createElement(u.Chip,{label:"Audit Report",component:"a",color:"secondary",href:v+"/SitePages/"+k,target:"_blank","data-interception":"off",icon:r.createElement(u.ListAlt,{fontSize:"small"}),style:{marginRight:5,marginBottom:5}}),r.createElement(u.Chip,{label:"Advanced Search",component:"a",color:"secondary",href:v+"/SitePages/"+N,target:"_blank","data-interception":"off",icon:r.createElement(u.ListAlt,{fontSize:"small"}),style:{marginRight:5,marginBottom:5}}),r.createElement(u.Chip,{label:"CMS Profile",component:"a",hidden:!w,color:"secondary",href:v+"/Lists/"+V+"/AllItems.aspx",target:"_blank","data-interception":"off",icon:r.createElement(u.Settings,{fontSize:"small"}),style:{marginRight:5,marginBottom:5}}),r.createElement(u.Chip,{label:"CMS Object",component:"a",hidden:!w,color:"secondary",href:v+"/Lists/"+D+"/AllItems.aspx",target:"_blank","data-interception":"off",icon:r.createElement(u.Settings,{fontSize:"small"}),style:{marginRight:5,marginBottom:5}}),r.createElement(u.Chip,{label:"Testing Results",component:"a",hidden:!w,color:"secondary",href:v+"/Lists/"+J+"/AllItems.aspx",target:"_blank","data-interception":"off",icon:r.createElement(u.Settings,{fontSize:"small"}),style:{marginRight:5,marginBottom:5}}),r.createElement(u.Chip,{label:"CMS Request",component:"a",hidden:!w,color:"secondary",href:v+"/Lists/"+X+"/AllItems.aspx",target:"_blank","data-interception":"off",icon:r.createElement(u.Settings,{fontSize:"small"}),style:{marginRight:5,marginBottom:5}}),r.createElement(u.Chip,{label:"CR Library",component:"a",hidden:!w,color:"secondary",href:v+"/"+$+"/Forms/AllItems.aspx",target:"_blank","data-interception":"off",icon:r.createElement(u.Settings,{fontSize:"small"}),style:{marginRight:5,marginBottom:5}})))}}}))))}var A=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return A(t,e),t.prototype.onInit=function(){var e=this;return(new u.AmetekLibraryLibrary).loadPNPJS().then(function(t){Object(u.pnpSetup)({spfxContext:e.context})}),Promise.resolve()},t.prototype.render=function(){var e=r.createElement(L,{description:this.properties.description,context:this.context});i.render(e,this.domElement)},t.prototype.onDispose=function(){i.unmountComponentAtNode(this.domElement)},Object.defineProperty(t.prototype,"dataVersion",{get:function(){return o.Version.parse("1.0")},enumerable:!0,configurable:!0}),t.prototype.getPropertyPaneConfiguration=function(){return{pages:[{header:{description:c.PropertyPaneDescription},groups:[{groupName:c.BasicGroupName,groupFields:[Object(a.PropertyPaneTextField)("description",{label:c.DescriptionFieldLabel})]}]}]}},t}(s.BaseClientSideWebPart);t.default=O},ruv1:function(e,t,n){"use strict";(function(e){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r="undefined"==typeof window?e:window,i=r&&r.CSPSettings&&r.CSPSettings.nonce,o=function(){var e=r.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};e.runState||(e=n({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}}));e.registeredThemableStyles||(e=n({},e,{registeredThemableStyles:[]}));return r.__themeState__=e,e}(),a=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,s=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function c(e){var t=s();e();var n=s();o.perf.duration+=n-t}function u(){c(function(){var e=o.runState.buffer.slice();o.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&l(t)})}function l(e,t){o.loadStyles?o.loadStyles(d(e).styleString,e):function(e){if("undefined"==typeof document)return;var t=document.getElementsByTagName("head")[0],n=document.createElement("style"),r=d(e),a=r.styleString,s=r.themable;n.setAttribute("data-load-themed-styles","true"),n.type="text/css",i&&n.setAttribute("nonce",i);n.appendChild(document.createTextNode(a)),o.perf.count++,t.appendChild(n);var c=document.createEvent("HTMLEvents");c.initEvent("styleinsert",!0,!1),c.args={newStyle:n},document.dispatchEvent(c);var u={styleElement:n,themableStyle:e};s?o.registeredThemableStyles.push(u):o.registeredStyles.push(u)}(e)}function f(e){void 0===e&&(e=3),3!==e&&2!==e||(p(o.registeredStyles),o.registeredStyles=[]),3!==e&&1!==e||(p(o.registeredThemableStyles),o.registeredThemableStyles=[])}function p(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function d(e){var t=o.theme,n=!1;return{styleString:(e||[]).map(function(e){var r=e.theme;if(r){n=!0;var i=t?t[r]:void 0,o=e.defaultValue||"inherit";return t&&!i&&console,i||o}return e.rawString}).join(""),themable:n}}function m(e){var t=[];if(e){for(var n=0,r=void 0;r=a.exec(e);){var i=r.index;i>n&&t.push({rawString:e.substring(n,i)}),t.push({theme:r[1],defaultValue:r[2]}),n=a.lastIndex}t.push({rawString:e.substring(n)})}return t}t.loadStyles=function(e,t){void 0===t&&(t=!1),c(function(){var n=Array.isArray(e)?e:m(e),r=o.runState,i=r.mode,a=r.buffer,s=r.flushTimer;t||1===i?(a.push(n),s||(o.runState.flushTimer=setTimeout(function(){o.runState.flushTimer=0,u()},0))):l(n)})},t.configureLoadStyles=function(e){o.loadStyles=e},t.configureRunMode=function(e){o.runState.mode=e},t.flush=u,t.loadTheme=function(e){o.theme=e,function(){if(o.theme){for(var e=[],t=0,n=o.registeredThemableStyles;t<n.length;t++){var r=n[t];e.push(r.themableStyle)}e.length>0&&(f(1),l([].concat.apply([],e)))}}()},t.clearStyles=f,t.detokenize=function(e){return e&&(e=d(m(e)).styleString),e},t.splitStyles=m}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}})});