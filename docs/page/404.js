define("page/404.js",["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pageInit = void 0;
    function pageInit() {
        //@ts-ignore
        document.getElementById('content').innerHTML = "404 not found";
    }
    exports.pageInit = pageInit;
});
