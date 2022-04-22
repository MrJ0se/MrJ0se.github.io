var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define("common/so.base.js",["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.init = void 0;
    function init() {
        return __awaiter(this, void 0, void 0, function* () {
            document.body.innerHTML =
                `
<div id="sows">
	<div id="content">
	</div>
	<div id="fixed">
	</div>
	<div id="sobar">
	</div>
</div>
<div id="soapp">
</div>
<div id="soapp_evervisible">
</div>
<div id="so_ctxmenu">
</div>
`;
        });
    }
    exports.init = init;
});
