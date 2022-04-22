var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define("common/so.core.js",["require", "exports", "./so.base"], function (require, exports, so_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.runTool = exports.runPage = exports.toolList = exports.currentPage = exports.toolInstances = exports.download = exports.ensurePackage = exports.prefs = exports.SOBool = exports.SOStyle = exports.SOGraphicsQuality = exports.SOAListStyle = exports.SOTheme = exports.SOLanguage = void 0;
    /////////////////
    // Preferences //
    /////////////////
    var SOLanguage;
    (function (SOLanguage) {
        SOLanguage[SOLanguage["EN"] = 0] = "EN";
        SOLanguage[SOLanguage["PT"] = 1] = "PT";
    })(SOLanguage = exports.SOLanguage || (exports.SOLanguage = {}));
    var SOTheme;
    (function (SOTheme) {
        SOTheme[SOTheme["LIGHT"] = 0] = "LIGHT";
        SOTheme[SOTheme["DARK"] = 1] = "DARK";
    })(SOTheme = exports.SOTheme || (exports.SOTheme = {}));
    var SOAListStyle;
    (function (SOAListStyle) {
        SOAListStyle[SOAListStyle["MINIMAL"] = 0] = "MINIMAL";
        SOAListStyle[SOAListStyle["BAR"] = 1] = "BAR";
        SOAListStyle[SOAListStyle["DOCK"] = 2] = "DOCK";
    })(SOAListStyle = exports.SOAListStyle || (exports.SOAListStyle = {}));
    var SOGraphicsQuality;
    (function (SOGraphicsQuality) {
        SOGraphicsQuality[SOGraphicsQuality["MIN"] = 0] = "MIN";
        SOGraphicsQuality[SOGraphicsQuality["MID"] = 1] = "MID";
        SOGraphicsQuality[SOGraphicsQuality["MAX"] = 2] = "MAX";
    })(SOGraphicsQuality = exports.SOGraphicsQuality || (exports.SOGraphicsQuality = {}));
    var SOStyle;
    (function (SOStyle) {
        SOStyle[SOStyle["DESKTOP"] = 0] = "DESKTOP";
        SOStyle[SOStyle["MOBILE"] = 1] = "MOBILE";
        SOStyle[SOStyle["TABLET"] = 2] = "TABLET";
    })(SOStyle = exports.SOStyle || (exports.SOStyle = {}));
    ;
    var SOBool;
    (function (SOBool) {
        SOBool[SOBool["ON"] = 0] = "ON";
        SOBool[SOBool["OFF"] = 1] = "OFF";
    })(SOBool = exports.SOBool || (exports.SOBool = {}));
    ;
    var prefCBs = new Map();
    var prefCBID = 0;
    function prefChange(vnew, vall) {
    }
    function prefAddEvent(cb) {
        prefCBID++;
        prefCBs.set(prefCBID, cb);
        return prefCBID;
    }
    function prefRemoveEvent(id) {
        prefCBs.delete(id);
    }
    var prefLast = {};
    function prefInvalid() {
        var raster = {};
        var it = [exports.prefs.default, exports.prefs.user, exports.prefs.page];
        it.forEach((p) => {
            if (p.language)
                raster.language = p.language;
            if (p.theme)
                raster.theme = p.theme;
            if (p.style)
                raster.style = p.style;
            if (p.acrillic)
                raster.acrillic = p.acrillic;
            if (p.autoHiddenMenu)
                raster.autoHiddenMenu = p.autoHiddenMenu;
            if (p.appListStyle)
                raster.appListStyle = p.appListStyle;
            if (p.graphics)
                raster.graphics = p.graphics;
            if (p.cookies)
                raster.cookies = p.cookies;
            if (p.incookieTmp)
                raster.incookieTmp = p.incookieTmp;
        });
        var vnew = {};
        if (prefLast.language != raster.language)
            vnew.language = raster.language;
        if (prefLast.theme != raster.theme)
            vnew.theme = raster.theme;
        if (prefLast.style != raster.style)
            vnew.style = raster.style;
        if (prefLast.acrillic != raster.acrillic)
            vnew.acrillic = raster.acrillic;
        if (prefLast.autoHiddenMenu != raster.autoHiddenMenu)
            vnew.autoHiddenMenu = raster.autoHiddenMenu;
        if (prefLast.appListStyle != raster.appListStyle)
            vnew.appListStyle = raster.appListStyle;
        if (prefLast.graphics != raster.graphics)
            vnew.graphics = raster.graphics;
        if (prefLast.cookies != raster.cookies)
            vnew.cookies = raster.cookies;
        if (prefLast.incookieTmp != raster.incookieTmp)
            vnew.incookieTmp = raster.incookieTmp;
        prefLast = raster;
        exports.prefs.rastered = prefLast;
        prefChange(vnew, raster);
    }
    exports.prefs = {
        rastered: {},
        page: {},
        user: {},
        default: {
            language: SOLanguage.EN,
            theme: SOTheme.LIGHT,
            style: SOStyle.DESKTOP,
            acrillic: SOBool.ON,
            autoHiddenMenu: SOBool.OFF,
            appListStyle: SOAListStyle.MINIMAL,
            graphics: SOGraphicsQuality.MID,
            cookies: SOBool.OFF,
            incookieTmp: SOBool.ON,
        },
        invalid: prefInvalid,
        addEvent: prefAddEvent,
        removeEvent: prefRemoveEvent,
    };
    ////////////////////
    // prefs.defaults //
    ////////////////////
    function isMob() {
        let check = false;
        //@ts-ignore
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }
    ;
    function isMobTablet() {
        let check = false;
        //@ts-ignore
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }
    ;
    if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches)
            exports.prefs.default.theme = SOTheme.DARK;
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            exports.prefs.default.theme = event.matches ? SOTheme.DARK : SOTheme.LIGHT;
        });
    }
    //@ts-ignore
    if (isMob() || (navigator && navigator.userAgentData && navigator.userAgentData.mobile && window.innerWidth <= 800)) {
        exports.prefs.default.style = SOStyle.MOBILE;
        exports.prefs.default.graphics = SOGraphicsQuality.MIN;
    }
    else if (isMobTablet())
        exports.prefs.default.style = SOStyle.TABLET;
    else if (window.innerWidth <= 800 && window.innerHeight <= 600) {
        exports.prefs.default.graphics = SOGraphicsQuality.MIN;
        exports.prefs.default.style = SOStyle.MOBILE;
    }
    else if (window.innerWidth <= 1000)
        exports.prefs.default.style = SOStyle.TABLET;
    else
        exports.prefs.default.style = SOStyle.DESKTOP;
    if (window.localStorage && window.localStorage.getItem("enabled") == "true") {
        var uprefs = window.localStorage.getItem("userPreferences");
        if (uprefs) {
            //@ts-ignore
            exports.prefs.user = JSON.parse(uprefs);
        }
    }
    exports.prefs.invalid();
    ;
    ;
    function ensurePackage(name) {
        return __awaiter(this, void 0, void 0, function* () {
            while (name.indexOf(".") == 0 || name.indexOf('\\') == 0 || name.indexOf('\/') == 0)
                name = name.substr(1);
            //@ts-ignore
            name = pathResolve(name);
            if (require('../' + name))
                return true;
            var file = yield download('/' + name);
            if (file.code == 200) {
                var ns = document.createElement('script');
                ns.innerHTML = file.txt;
                document.head.appendChild(ns);
                //@ts-ignore Call amd to resolve
                defines_solve();
                return true;
            }
            return false;
        });
    }
    exports.ensurePackage = ensurePackage;
    var download_cache = new Map();
    function download(url, cache) {
        return __awaiter(this, void 0, void 0, function* () {
            if (download_cache.has(url))
                return { code: 200, txt: download_cache.get(url) };
            return yield (new Promise((resolve) => {
                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            if (cache)
                                download_cache.set(url, xhttp.responseText);
                            resolve({ code: 200, txt: xhttp.responseText });
                        }
                        else
                            resolve({ code: this.status, txt: '' });
                    }
                };
                xhttp.open("GET", url, true);
                xhttp.send();
            }));
        });
    }
    exports.download = download;
    function extractBodyFromPage(txt) {
        var i = txt.indexOf('<!--page.body-->');
        var e = txt.indexOf('<!--page./body-->', i);
        if (i > 0 && e > 0)
            return txt.substring(i + 16, e);
        return txt;
    }
    exports.toolInstances = [];
    exports.currentPage = null;
    exports.toolList = [];
    function pageUrlToPackage(p) {
        p = p.trim();
        while (p.indexOf('/') == 0)
            p = p.substr(1);
        if (p == 'index.html')
            p = '';
        else if (p.length >= 11 && p.length - 11 == p.lastIndexOf('/index.html'))
            p = p.substring(0, p.length - 11);
        return p == '' ? 'page/index' : 'page/' + p.replace(/\//g, '_');
    }
    function runPage(pageURL) {
        return __awaiter(this, void 0, void 0, function* () {
            while (pageURL.indexOf('/') == 0)
                pageURL = pageURL.substr(1);
            var packageURL = 'page/' + (pageURL == '' ? 'index' : pageURL).replace(/\//g, '_') + ".js";
            var dataURL = pageURL;
            if (dataURL.indexOf('/') != 0)
                dataURL = '/' + dataURL;
            if (dataURL != 'index.html' && (dataURL.length < 11 || dataURL.length - 11 != dataURL.lastIndexOf('/index.html'))) {
                if (dataURL.length < 1 || dataURL.lastIndexOf('/') != dataURL.length - 1)
                    dataURL += '/';
                dataURL += 'index.html';
            }
            console.log("[SO]runPage: " + pageURL + " => " + dataURL + " : " + packageURL);
            var page_html = yield download(dataURL, true);
            if (page_html.code != 200)
                return false;
            var page_content = extractBodyFromPage(page_html.txt);
            if (!(yield ensurePackage(packageURL)))
                return false;
            var rt = require('../' + packageURL);
            console.log(packageURL);
            console.log(rt);
            yield (rt.pageInit(page_html.txt));
            return true;
        });
    }
    exports.runPage = runPage;
    //> pageInit(body:string)
    function runTool(packageURL) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(yield ensurePackage(packageURL)))
                return false;
            return (yield (require('../' + packageURL).toolInit()));
        });
    }
    exports.runTool = runTool;
    //> toolInit(pref?:ToolInitPref):boolean
    // run current page with local body data or 404
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            var url = window.location.href;
            var i = url.indexOf('/', url.indexOf('https://') == 0 ? 8 : (url.indexOf('http://') == 0 ? 7 : 0));
            url = i < 0 ? '' : url.substr(i);
            var content = document.body.innerHTML.replace('<!--page.body-->', '').replace('<!--page./body-->', '');
            (0, so_base_1.init)();
            if (!(yield runPage(url))) {
                runPage('/404');
            }
        });
    }
    main();
});
