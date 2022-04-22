define("page/index.js",["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pageInit = void 0;
    function pageInit(body) {
        //@ts-ignore
        document.getElementById('content').innerHTML = body;
    }
    exports.pageInit = pageInit;
});
