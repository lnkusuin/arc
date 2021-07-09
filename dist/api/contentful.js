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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudGZ1bC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvY29udGVudGZ1bC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBb0Q7QUFFcEQsSUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQTtBQUV2QixJQUFHLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFO0lBQ3pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQTtJQUN6RSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0NBQ2xCO0FBRUQsSUFBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUU7SUFDbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0lBQ2hELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FDbEI7QUFFRCxJQUFNLE1BQU0sR0FBRyxvQ0FBWSxDQUFDO0lBQ3hCLGdHQUFnRztJQUNoRyxXQUFXLEVBQUUsR0FBRyxDQUFDLG1DQUFtQztDQUN2RCxDQUFDLENBQUE7QUFFSyxJQUFNLFFBQVEsR0FBRztJQUNwQixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUNsRCxDQUFDLENBQUE7QUFGWSxRQUFBLFFBQVEsWUFFcEI7QUFHTSxJQUFNLE1BQU0sR0FBRzs7OztvQkFDSixxQkFBTSxnQkFBUSxFQUFFLEVBQUE7O2dCQUF4QixLQUFLLEdBQUcsU0FBZ0I7Z0JBRTlCLHNCQUFPLEtBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUE7OztLQUN4QyxDQUFBO0FBSlksUUFBQSxNQUFNLFVBSWxCO0FBR00sSUFBTSx1QkFBdUIsR0FBRzs7OztvQkFDdkIscUJBQU0sY0FBTSxFQUFFLEVBQUE7O2dCQUFwQixHQUFHLEdBQUcsU0FBYztnQkFFMUIsc0JBQU8sR0FBRyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBQTs7O0tBQ3pDLENBQUE7QUFKWSxRQUFBLHVCQUF1QiwyQkFJbkM7QUFHTSxJQUFNLHFCQUFxQixHQUFHOzs7O29CQUNyQixxQkFBTSxjQUFNLEVBQUUsRUFBQTs7Z0JBQXBCLEdBQUcsR0FBRyxTQUFjO2dCQUUxQixzQkFBTyxHQUFHLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFBOzs7S0FDdkMsQ0FBQTtBQUpZLFFBQUEscUJBQXFCLHlCQUlqQyJ9