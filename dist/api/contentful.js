"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentTypeCatalog = exports.getContentTypeArchitect = exports.getEnv = exports.getSpace = void 0;
var contentful_management_1 = require("contentful-management");
var env = process.env;
if (!env.ARC_CONTENT_FUL_MANAGE_ACCESS_TOKEN) {
    console.error('アクセストークン: ARC_CONTENT_FUL_MANAGE_ACCESS_TOKEN を設定してください。');
    process.exit(1);
}
if (!env.ARC_SPACE_ID) {
    console.error('スペースID: ARC_SPACE_ID を設定してください。');
    process.exit(1);
}
var client = contentful_management_1.createClient({
    // This is the access token for this space. Normally you get the token in the Contentful web app
    accessToken: env.ARC_CONTENT_FUL_MANAGE_ACCESS_TOKEN,
});
var getSpace = function () {
    return client.getSpace(env.ARC_SPACE_ID || "");
};
exports.getSpace = getSpace;
var getEnv = function () { return __awaiter(void 0, void 0, void 0, function () {
    var space;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.getSpace()];
            case 1:
                space = _a.sent();
                return [2 /*return*/, space.getEnvironment('master')];
        }
    });
}); };
exports.getEnv = getEnv;
var getContentTypeArchitect = function () { return __awaiter(void 0, void 0, void 0, function () {
    var env;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.getEnv()];
            case 1:
                env = _a.sent();
                return [2 /*return*/, env.getContentType('architect')];
        }
    });
}); };
exports.getContentTypeArchitect = getContentTypeArchitect;
var getContentTypeCatalog = function () { return __awaiter(void 0, void 0, void 0, function () {
    var env;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, exports.getEnv()];
            case 1:
                env = _a.sent();
                return [2 /*return*/, env.getContentType('catalog')];
        }
    });
}); };
exports.getContentTypeCatalog = getContentTypeCatalog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2FwaS9jb250ZW50ZnVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUFvRDtBQUVwRCxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFBO0FBRXZCLElBQUcsQ0FBQyxHQUFHLENBQUMsbUNBQW1DLEVBQUU7SUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFBO0lBQ3pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FDbEI7QUFFRCxJQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRTtJQUNsQixPQUFPLENBQUMsS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUE7SUFDaEQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtDQUNsQjtBQUVELElBQU0sTUFBTSxHQUFHLG9DQUFZLENBQUM7SUFDeEIsZ0dBQWdHO0lBQ2hHLFdBQVcsRUFBRSxHQUFHLENBQUMsbUNBQW1DO0NBQ3ZELENBQUMsQ0FBQTtBQUVLLElBQU0sUUFBUSxHQUFHO0lBQ3BCLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLEVBQUUsQ0FBQyxDQUFBO0FBQ2xELENBQUMsQ0FBQTtBQUZZLFFBQUEsUUFBUSxZQUVwQjtBQUdNLElBQU0sTUFBTSxHQUFHOzs7O29CQUNKLHFCQUFNLGdCQUFRLEVBQUUsRUFBQTs7Z0JBQXhCLEtBQUssR0FBRyxTQUFnQjtnQkFFOUIsc0JBQU8sS0FBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBQTs7O0tBQ3hDLENBQUE7QUFKWSxRQUFBLE1BQU0sVUFJbEI7QUFHTSxJQUFNLHVCQUF1QixHQUFHOzs7O29CQUN2QixxQkFBTSxjQUFNLEVBQUUsRUFBQTs7Z0JBQXBCLEdBQUcsR0FBRyxTQUFjO2dCQUUxQixzQkFBTyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUFBOzs7S0FDekMsQ0FBQTtBQUpZLFFBQUEsdUJBQXVCLDJCQUluQztBQUdNLElBQU0scUJBQXFCLEdBQUc7Ozs7b0JBQ3JCLHFCQUFNLGNBQU0sRUFBRSxFQUFBOztnQkFBcEIsR0FBRyxHQUFHLFNBQWM7Z0JBRTFCLHNCQUFPLEdBQUcsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLEVBQUE7OztLQUN2QyxDQUFBO0FBSlksUUFBQSxxQkFBcUIseUJBSWpDIn0=