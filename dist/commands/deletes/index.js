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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../../index"));
var contentful_1 = require("../../api/contentful");
var common_1 = require("../../misc/common");
index_1.default
    .command('deletes')
    .action(function () { return __awaiter(void 0, void 0, void 0, function () {
    var contentfulEnv;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, contentful_1.getEnv()];
            case 1:
                contentfulEnv = _a.sent();
                contentfulEnv.getEntries().then(function (entries) {
                    entries.items.forEach(function (entry) {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log(entry.fields.title);
                                        console.log('削除');
                                        return [4 /*yield*/, common_1.sleep(1000)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, entry.unpublish()];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, entry.delete()];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        });
                    });
                });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvZGVsZXRlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFpQztBQUNqQyxtREFBNEM7QUFDNUMsNENBQXdDO0FBRXhDLGVBQU87S0FDRixPQUFPLENBQUMsU0FBUyxDQUFDO0tBQ2xCLE1BQU0sQ0FBQzs7OztvQkFDa0IscUJBQU0sbUJBQU0sRUFBRSxFQUFBOztnQkFBOUIsYUFBYSxHQUFHLFNBQWM7Z0JBRXBDLGFBQWEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO29CQUNuQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFnQixLQUFLOzs7Ozt3Q0FDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO3dDQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO3dDQUVqQixxQkFBTSxjQUFLLENBQUMsSUFBSSxDQUFDLEVBQUE7O3dDQUFqQixTQUFpQixDQUFBO3dDQUNqQixxQkFBTSxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUE7O3dDQUF2QixTQUF1QixDQUFBO3dDQUN2QixxQkFBTSxLQUFLLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dDQUFwQixTQUFvQixDQUFBOzs7OztxQkFDdkIsQ0FBQyxDQUFBO2dCQUNOLENBQUMsQ0FBQyxDQUFBOzs7O0tBRUwsQ0FBQyxDQUFBIn0=