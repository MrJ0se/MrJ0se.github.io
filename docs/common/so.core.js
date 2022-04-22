var __awaiter=this&&this.__awaiter||function(e,s,r,l){return new(r=r||Promise)(function(i,t){function a(e){try{n(l.next(e))}catch(e){t(e)}}function o(e){try{n(l.throw(e))}catch(e){t(e)}}function n(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(a,o)}n((l=l.apply(e,s||[])).next())})};define("common/so.core.js",["require","exports","./so.base"],function(s,o,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.runTool=o.runPage=o.toolList=o.currentPage=o.toolInstances=o.download=o.ensurePackage=o.prefs=o.SOBool=o.SOStyle=o.SOGraphicsQuality=o.SOAListStyle=o.SOTheme=o.SOLanguage=void 0,(t=e=o.SOLanguage||(o.SOLanguage={}))[t.EN=1]="EN",t[t.PT=2]="PT",(t=a=o.SOTheme||(o.SOTheme={}))[t.LIGHT=1]="LIGHT",t[t.DARK=2]="DARK",(t=n=o.SOAListStyle||(o.SOAListStyle={}))[t.MINIMAL=1]="MINIMAL",t[t.BAR=2]="BAR",t[t.DOCK=3]="DOCK",(t=r=o.SOGraphicsQuality||(o.SOGraphicsQuality={}))[t.MIN=1]="MIN",t[t.MID=2]="MID",t[t.MAX=3]="MAX",(t=l=o.SOStyle||(o.SOStyle={}))[t.DESKTOP=1]="DESKTOP",t[t.MOBILE=2]="MOBILE",t[t.TABLET=3]="TABLET",(p=t=o.SOBool||(o.SOBool={}))[p.ON=1]="ON",p[p.OFF=2]="OFF";var e,a,n,r,l,t,c=new Map,d=0;var p,m={};function u(i){return __awaiter(this,void 0,void 0,function*(){for(;0==i.indexOf(".")||0==i.indexOf("\\")||0==i.indexOf("/");)i=i.substr(1);if(i=pathResolve(i),s("../"+i))return!0;var e,t=yield h("/"+i);return 200==t.code&&((e=document.createElement("script")).innerHTML=t.txt,document.head.appendChild(e),defines_solve(),!0)})}o.prefs={rastered:{},page:{},user:{},default:{language:e.EN,theme:a.LIGHT,style:l.DESKTOP,acrillic:t.ON,autoHiddenMenu:t.OFF,appListStyle:n.MINIMAL,graphics:r.MID,cookies:t.OFF,incookieTmp:t.ON},invalid:function(){var t,i,a={},e=([o.prefs.default,o.prefs.user,o.prefs.page].forEach(e=>{e.language&&(a.language=e.language),e.theme&&(a.theme=e.theme),e.style&&(a.style=e.style),e.acrillic&&(a.acrillic=e.acrillic),e.autoHiddenMenu&&(a.autoHiddenMenu=e.autoHiddenMenu),e.appListStyle&&(a.appListStyle=e.appListStyle),e.graphics&&(a.graphics=e.graphics),e.cookies&&(a.cookies=e.cookies),e.incookieTmp&&(a.incookieTmp=e.incookieTmp)}),{});m.language!=a.language&&(e.language=a.language),m.theme!=a.theme&&(e.theme=a.theme),m.style!=a.style&&(e.style=a.style),m.acrillic!=a.acrillic&&(e.acrillic=a.acrillic),m.autoHiddenMenu!=a.autoHiddenMenu&&(e.autoHiddenMenu=a.autoHiddenMenu),m.appListStyle!=a.appListStyle&&(e.appListStyle=a.appListStyle),m.graphics!=a.graphics&&(e.graphics=a.graphics),m.cookies!=a.cookies&&(e.cookies=a.cookies),m.incookieTmp!=a.incookieTmp&&(e.incookieTmp=a.incookieTmp),m=a,o.prefs.rastered=m,t=e,i=a,[...c.values()].forEach(e=>e(t,i))},addEvent:function(e){return d++,c.set(d,e),d},removeEvent:function(e){c.delete(e)}},o.prefs.addEvent(e=>{var t=(document.body.getAttribute("class")||"").split(" ").filter(e=>""!=e);if(e.theme&&(t=t.filter(e=>0!=e.indexOf("so_t_"))).push("so_t_"+(e.theme==a.LIGHT?"light":"dark")),e.graphics)switch(t=t.filter(e=>0!=e.indexOf("so_gl_")),e.graphics){case r.MIN:t.push("so_gl_min");break;case r.MID:t.push("so_gl_mid");break;case r.MAX:t.push("so_gl_max")}if(e.appListStyle)switch(t=t.filter(e=>0!=e.indexOf("so_bs_")),e.appListStyle){case n.MINIMAL:t.push("so_bs_minimal");break;case n.BAR:t.push("so_bs_bar");break;case n.DOCK:t.push("so_bs_dock")}if(e.style)switch(t=t.filter(e=>0!=e.indexOf("so_ss_")),e.style){case l.DESKTOP:t.push("so_ss_desktop");break;case l.MOBILE:t.push("so_ss_mobile");break;case l.TABLET:t.push("so_ss_tablet")}console.log(t),document.body.setAttribute("class",t.join(" "))}),window.matchMedia&&(window.matchMedia("(prefers-color-scheme: dark)").matches&&(o.prefs.default.theme=a.DARK),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{o.prefs.default.theme=e.matches?a.DARK:a.LIGHT})),function(){let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,e=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))?!0:e}()||navigator&&navigator.userAgentData&&navigator.userAgentData.mobile&&window.innerWidth<=800?(o.prefs.default.style=l.MOBILE,o.prefs.default.graphics=r.MIN):!function(){let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,e=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))?!0:e}()?window.innerWidth<=800&&window.innerHeight<=600?(o.prefs.default.graphics=r.MIN,o.prefs.default.style=l.MOBILE):window.innerWidth<=1e3?o.prefs.default.style=l.TABLET:o.prefs.default.style=l.DESKTOP:o.prefs.default.style=l.TABLET,window.localStorage&&"true"==window.localStorage.getItem("enabled")&&(p=window.localStorage.getItem("userPreferences"))&&(o.prefs.user=JSON.parse(p)),o.prefs.invalid(),o.ensurePackage=u;var g=new Map;function h(i,a){return __awaiter(this,void 0,void 0,function*(){return g.has(i)?{code:200,txt:g.get(i)}:yield new Promise(e=>{var t=new XMLHttpRequest;t.onreadystatechange=function(){4==this.readyState&&(200==this.status?(a&&g.set(i,t.responseText),e({code:200,txt:t.responseText})):e({code:this.status,txt:""}))},t.open("GET",i,!0),t.send()})})}function f(n){return __awaiter(this,void 0,void 0,function*(){var e=(n="index.html"==n?"":n).lastIndexOf("index.html");for(0<=e&&e+10==n.length&&(n=n.substring(0,e));0==n.indexOf("/");)n=n.substr(1);for(;0<n.length&&n.lastIndexOf("/")==n.length-1;)n=n.substr(0,n.length-1);var e="page/"+(""==n?"index":n).replace(/\//g,"_")+".js",t=n,t=("index.html"!=(t=0!=t.indexOf("/")?"/"+t:t)&&(t.length<11||t.length-11!=t.lastIndexOf("/index.html"))&&((t.length<1||t.lastIndexOf("/")!=t.length-1)&&(t+="/"),t+="index.html"),console.log("[SO]runPage: "+n+" => "+t+" : "+e),yield h(t,!0));if(200!=t.code)return!1;i=t.txt,a=i.indexOf("\x3c!--page.body--\x3e"),o=i.indexOf("\x3c!--page./body--\x3e",a),0<a&&0<o&&i.substring(a+16,o);if(!(yield u(e)))return!1;var i=0<=(i=t.txt.indexOf("\x3c!--page.body--\x3e"))?i+16:0,a=t.txt.indexOf("\x3c!--page./body--\x3e"),o=(a<0&&(a=t.txt.length),s("../"+e));return o?yield o.pageInit(t.txt.substring(i,a).trim()):document.getElementById("content").innerHTML=t.txt.substring(i,a).trim(),!0})}o.download=h,o.toolInstances=[],o.currentPage=null,o.toolList=[],o.runPage=f,o.runTool=function(e){return __awaiter(this,void 0,void 0,function*(){return!!(yield u(e))&&(yield s("../"+e).toolInit())})},function(){__awaiter(this,void 0,void 0,function*(){var e=(t=window.location.href).indexOf("/",0==t.indexOf("https://")?8:0==t.indexOf("http://")?7:0),t=e<0?"":t.substr(e);(0,i.init)(),(yield f(t))||f("/404")})}()});