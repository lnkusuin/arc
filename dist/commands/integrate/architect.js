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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJjaGl0ZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tbWFuZHMvaW50ZWdyYXRlL2FyY2hpdGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBRXZDLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUM1QixJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7QUFFbEMsbURBQTRDO0FBQzVDLDRDQUF3QztBQUN4Qyw4Q0FBd0I7QUFHeEIsbUJBQWUsVUFBTyxLQUFhO0lBSy9CLFNBQWdCLFFBQVE7Ozs7Ozt3QkFDZCxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFDLENBQUMsQ0FBQTt3QkFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFFbkIsSUFBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7NEJBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBOzRCQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO3lCQUNsQjs4QkFFdUIsRUFBTCxlQUFLOzs7NkJBQUwsQ0FBQSxtQkFBSyxDQUFBO3dCQUFiLElBQUk7d0JBQ0UsNkJBQU0sWUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxHQUFBOzt3QkFBaEQsSUFBSSxHQUFHLFNBQXlDO3dCQUNoRCxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO3FEQUNsQixFQUFFLElBQUksTUFBQSxFQUFFLE9BQU8sU0FBQSxFQUFFOzRCQUF2QixnQ0FBdUI7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