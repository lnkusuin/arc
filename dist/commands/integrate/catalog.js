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
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var yaml_1 = __importDefault(require("yaml"));
var contentful_1 = require("../../api/contentful");
exports.default = (function (_path) { return __awaiter(void 0, void 0, void 0, function () {
    function getCatalogData() {
        console.log(_path);
        var file = fs_1.default.readFileSync(_path, 'utf8');
        return yaml_1.default.parse(file);
    }
    function getCatalogContentfulData() {
        var catalogData = getCatalogData();
        return {
            id: { 'ja': catalogData.id },
            title: { 'ja': catalogData.title },
            goal: { 'ja': catalogData.goal },
            effect: { 'ja': catalogData.effect },
            workload: { 'ja': catalogData.workload },
            stakeholders: { 'ja': catalogData.stakeholders },
            order: { 'ja': catalogData.order },
            status: { 'ja': catalogData.status },
            pined: { 'ja': catalogData.pined },
            resources: { 'ja': catalogData.resources },
            context: { 'ja': catalogData.context },
            contents: { 'ja': catalogData.contents },
        };
    }
    var contentfulEnv, contentfulData, encodedUUID62;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log('start a integrate catalog');
                _path = path_1.default.join(process.cwd(), _path);
                try {
                    fs_1.default.existsSync(_path);
                }
                catch (err) {
                    console.error(err);
                    process.kill(1);
                }
                return [4 /*yield*/, contentful_1.getEnv()];
            case 1:
                contentfulEnv = _a.sent();
                contentfulData = getCatalogContentfulData();
                encodedUUID62 = contentfulData.id['ja'];
                return [4 /*yield*/, contentfulEnv.getEntry(encodedUUID62).then(function (entry) {
                        console.log('----------- update entry -----------');
                        entry.fields = contentfulData;
                        entry.update()
                            .then(function (entry) { return entry.publish(); })
                            .then(function () { return console.log('published'); });
                    }).catch(function (err) { return __awaiter(void 0, void 0, void 0, function () {
                        var message, entry;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    message = JSON.parse(err.message);
                                    if (!(message.status === 404)) return [3 /*break*/, 3];
                                    console.log('----------- create entry -----------');
                                    return [4 /*yield*/, contentfulEnv.createEntryWithId('catalog', encodedUUID62, {
                                            fields: contentfulData
                                        })];
                                case 1:
                                    entry = _a.sent();
                                    return [4 /*yield*/, entry.publish()];
                                case 2:
                                    _a.sent();
                                    console.log('published');
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                _a.sent();
                console.log('Done!!');
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0YWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbW1hbmRzL2ludGVncmF0ZS9jYXRhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQW9CO0FBQ3BCLDhDQUF3QjtBQUN4Qiw4Q0FBd0I7QUFDeEIsbURBQTRDO0FBRTVDLG1CQUFlLFVBQU8sS0FBYTtJQWEvQixTQUFTLGNBQWM7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQixJQUFNLElBQUksR0FBRyxZQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtRQUMzQyxPQUFPLGNBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVELFNBQVMsd0JBQXdCO1FBQzdCLElBQU0sV0FBVyxHQUFHLGNBQWMsRUFBRSxDQUFBO1FBRXBDLE9BQU87WUFDSCxFQUFFLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUUsRUFBRTtZQUMzQixLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNqQyxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRTtZQUMvQixNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUN2QyxZQUFZLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFlBQVksRUFBRTtZQUMvQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNqQyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUNqQyxTQUFTLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUN6QyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUNyQyxRQUFRLEVBQUUsRUFBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRTtTQUMxQyxDQUFBO0lBQ0wsQ0FBQzs7Ozs7Z0JBbkNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtnQkFDeEMsS0FBSyxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUV2QyxJQUFJO29CQUNBLFlBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUE7aUJBQ3ZCO2dCQUFDLE9BQU0sR0FBRyxFQUFFO29CQUNULE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQ2xCO2dCQUVxQixxQkFBTSxtQkFBTSxFQUFFLEVBQUE7O2dCQUE5QixhQUFhLEdBQUcsU0FBYztnQkEyQjlCLGNBQWMsR0FBRyx3QkFBd0IsRUFBRSxDQUFBO2dCQUMzQyxhQUFhLEdBQUcsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFFN0MscUJBQU0sYUFBYSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLO3dCQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUE7d0JBRW5ELEtBQUssQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFBO3dCQUU3QixLQUFLLENBQUMsTUFBTSxFQUFFOzZCQUNULElBQUksQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBZixDQUFlLENBQUM7NkJBQ2hDLElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFBO29CQUc3QyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBTyxHQUFHOzs7OztvQ0FDVCxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7eUNBRXBDLENBQUEsT0FBTyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUEsRUFBdEIsd0JBQXNCO29DQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLENBQUE7b0NBQ3JDLHFCQUFNLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsYUFBYSxFQUFFOzRDQUMxRSxNQUFNLEVBQUUsY0FBYzt5Q0FDekIsQ0FBQyxFQUFBOztvQ0FGSSxLQUFLLEdBQUcsU0FFWjtvQ0FFRixxQkFBTSxLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUE7O29DQUFyQixTQUFxQixDQUFBO29DQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBOzs7Ozt5QkFFL0IsQ0FBQyxFQUFBOztnQkF0QkYsU0FzQkUsQ0FBQTtnQkFHRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBOzs7O0tBQ3hCLEVBQUEifQ==