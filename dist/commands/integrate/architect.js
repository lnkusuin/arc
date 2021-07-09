"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importStar(require("fs"));
var glob = require("glob");
var fm = require('front-matter');
var contentful_1 = require("../../api/contentful");
var common_1 = require("../../misc/common");
var path_1 = __importDefault(require("path"));
exports.default = (function (_path) { return __awaiter(void 0, void 0, void 0, function () {
    function getFiles() {
        return __asyncGenerator(this, arguments, function getFiles_1() {
            var files, _i, files_1, file, buff, content;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        files = glob.sync(_path, { ignore: ["**/node_modules/**"] });
                        console.info(files);
                        if (!files.length) {
                            console.info('指定のフォルダが存在しません');
                            process.kill(1);
                        }
                        _i = 0, files_1 = files;
                        _a.label = 1;
                    case 1:
                        if (!(_i < files_1.length)) return [3 /*break*/, 6];
                        file = files_1[_i];
                        return [4 /*yield*/, __await(fs_1.default.promises.readFile(file, "utf-8"))];
                    case 2:
                        buff = _a.sent();
                        content = fm(buff);
                        return [4 /*yield*/, __await({ file: file, content: content })];
                    case 3: return [4 /*yield*/, _a.sent()];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    function getContentfulArchitectData(item) {
        return __awaiter(this, void 0, void 0, function () {
            var attributes;
            return __generator(this, function (_a) {
                attributes = item.content.attributes;
                return [2 /*return*/, {
                        id: { 'ja': attributes === null || attributes === void 0 ? void 0 : attributes.id },
                        title: { 'ja': attributes === null || attributes === void 0 ? void 0 : attributes.title },
                        stakeholder: { 'ja': attributes === null || attributes === void 0 ? void 0 : attributes.stakeholder },
                        goal: { 'ja': attributes === null || attributes === void 0 ? void 0 : attributes.goal },
                        effect: { 'ja': attributes === null || attributes === void 0 ? void 0 : attributes.effect },
                        workload: { 'ja': attributes === null || attributes === void 0 ? void 0 : attributes.workload },
                        relations: { 'ja': attributes === null || attributes === void 0 ? void 0 : attributes.relations },
                        order: { 'ja': attributes === null || attributes === void 0 ? void 0 : attributes.order },
                        templateType: { 'ja': attributes === null || attributes === void 0 ? void 0 : attributes.templateType },
                        body: { 'ja': item.content.body },
                        category: { 'ja': 'Portal' },
                        design: { 'ja': attributes === null || attributes === void 0 ? void 0 : attributes.design },
                        source: { 'ja': attributes === null || attributes === void 0 ? void 0 : attributes.source },
                    }];
            });
        });
    }
    function getOverviewStr(item) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var path, targetPath, stat;
            return __generator(this, function (_b) {
                path = require('path');
                targetPath = path.join(path.dirname(item.file), ((_a = item.content.attributes) === null || _a === void 0 ? void 0 : _a.overview) || '');
                try {
                    stat = fs_1.default.statSync(targetPath);
                    if (stat.isFile()) {
                        // 実体ファイルパスの解決
                        return [2 /*return*/, targetPath];
                    }
                }
                catch (err) {
                    console.log(err);
                }
                return [2 /*return*/, ''];
            });
        });
    }
    var contentfulEnv, _a, _b, item, data, overviewStr, asset, processedAsset, e_1_1;
    var e_1, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                console.log('start a integrate architect');
                _path = path_1.default.join(process.cwd(), _path);
                return [4 /*yield*/, contentful_1.getEnv()];
            case 1:
                contentfulEnv = _d.sent();
                _d.label = 2;
            case 2:
                _d.trys.push([2, 16, 17, 22]);
                _a = __asyncValues(getFiles());
                _d.label = 3;
            case 3: return [4 /*yield*/, _a.next()];
            case 4:
                if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 15];
                item = _b.value;
                return [4 /*yield*/, common_1.sleep(250)];
            case 5:
                _d.sent();
                console.info('250ミリ秒遅延');
                return [4 /*yield*/, getContentfulArchitectData(item)];
            case 6:
                data = _d.sent();
                return [4 /*yield*/, getOverviewStr(item)];
            case 7:
                overviewStr = _d.sent();
                console.log(overviewStr);
                if (!overviewStr) return [3 /*break*/, 12];
                console.log('upload---: ' + overviewStr);
                return [4 /*yield*/, contentfulEnv.getAssets({
                        'fields.title': data.id['ja'],
                    })];
            case 8:
                (_d.sent())
                    .items.forEach(function (item) {
                    item.unpublish().then(function (entry) {
                        entry.delete();
                    });
                });
                return [4 /*yield*/, contentfulEnv.createAssetFromFiles({
                        fields: {
                            title: {
                                'ja': data.id['ja']
                            },
                            description: {
                                'ja': ''
                            },
                            file: {
                                'ja': {
                                    contentType: 'image/svg+xml',
                                    fileName: data.title['ja'] + ".svg",
                                    file: fs_1.createReadStream(overviewStr)
                                },
                            }
                        }
                    })];
            case 9:
                asset = _d.sent();
                return [4 /*yield*/, asset.processForAllLocales()];
            case 10:
                processedAsset = _d.sent();
                return [4 /*yield*/, processedAsset.publish()
                    // @ts-ignore
                ];
            case 11:
                _d.sent();
                // @ts-ignore
                data.overview = {
                    ja: {
                        sys: { type: 'Link', linkType: 'Asset', id: asset.sys.id }
                    }
                };
                _d.label = 12;
            case 12: return [4 /*yield*/, contentfulEnv.getEntry(data.id['ja']).then(function (entry) {
                    console.log('------ update entry ------');
                    entry.fields = data;
                    entry.update().then(function (entry) {
                        entry.publish();
                    });
                    console.log('published');
                }).catch(function (err) { return __awaiter(void 0, void 0, void 0, function () {
                    var message;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                message = JSON.parse(err.message);
                                if (!(message.status === 404)) return [3 /*break*/, 2];
                                console.log('create entry');
                                return [4 /*yield*/, contentfulEnv.createEntryWithId('architect', data.id['ja'], {
                                        fields: data
                                    }).then(function (entry) { return __awaiter(void 0, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, entry.publish()];
                                                case 1:
                                                    _a.sent();
                                                    console.log('published');
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }).catch(function (err) {
                                        var message = JSON.parse(err.message);
                                        console.log('====== error ======');
                                        console.log(data);
                                        console.log(message);
                                        console.log(message.details);
                                    })];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); })];
            case 13:
                _d.sent();
                _d.label = 14;
            case 14: return [3 /*break*/, 3];
            case 15: return [3 /*break*/, 22];
            case 16:
                e_1_1 = _d.sent();
                e_1 = { error: e_1_1 };
                return [3 /*break*/, 22];
            case 17:
                _d.trys.push([17, , 20, 21]);
                if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 19];
                return [4 /*yield*/, _c.call(_a)];
            case 18:
                _d.sent();
                _d.label = 19;
            case 19: return [3 /*break*/, 21];
            case 20:
                if (e_1) throw e_1.error;
                return [7 /*endfinally*/];
            case 21: return [7 /*endfinally*/];
            case 22:
                console.log('done');
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl0ZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1hbmRzL2ludGVncmF0ZS9hcmNoaXRlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUV2QyxJQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDNUIsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBRWxDLG1EQUE0QztBQUM1Qyw0Q0FBd0M7QUFDeEMsOENBQXdCO0FBR3hCLG1CQUFlLFVBQU8sS0FBYTtJQUsvQixTQUFnQixRQUFROzs7Ozs7d0JBQ2QsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBQyxDQUFDLENBQUE7d0JBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7d0JBRW5CLElBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFOzRCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTs0QkFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTt5QkFDbEI7OEJBRXVCLEVBQUwsZUFBSzs7OzZCQUFMLENBQUEsbUJBQUssQ0FBQTt3QkFBYixJQUFJO3dCQUNFLDZCQUFNLFlBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsR0FBQTs7d0JBQWhELElBQUksR0FBRyxTQUF5Qzt3QkFDaEQsT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtxREFDbEIsRUFBRSxJQUFJLE1BQUEsRUFBRSxPQUFPLFNBQUEsRUFBRTs0QkFBdkIsZ0NB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