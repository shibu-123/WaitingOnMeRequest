var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
import { Dispatcher } from "ametek-library";
import { EventEmitter } from "events";
import * as myLibrary from "ametek-library";
var CMSMyPendingRequestStore = /** @class */ (function (_super) {
    __extends(CMSMyPendingRequestStore, _super);
    function CMSMyPendingRequestStore() {
        var _this = _super.call(this) || this;
        _this._resCMSData = [];
        _this._resCMSProfile = [];
        _this._resCurrUserGroup = [];
        _this.getCurrentUser = function (email) {
            cmsMyPendingReqStore._resUserEmail = email;
        };
        // Get CMSProfile values from Sharepoint List
        _this.setCMSProfile = function () {
            var myInstance1 = new myLibrary.AmetekLibraryLibrary();
            myInstance1.loadPNPJS().then(function (sp) {
                sp.web.lists
                    .getByTitle("852581CCMSProfile")
                    .items.select("Title", "FreshAPIEndpoint", "FreshAPIAuthKey", "FSEndpointAgent", "PowerAutomateURL", "FreshserviceAPIBodyTemplate", "redirectPage", "CMSPage", "FreshTicketURL", "auditReportPage", "cmsAdvanceSearchPage", "cmsObjectPageName", "cmsTestingPageName", "cmsProfilePageName", "cmsRequestPageName", "cmsLibraryPageName")
                    .get()
                    .then(function (data) {
                    cmsMyPendingReqStore._resCMSProfile = data.map(function (res) {
                        return {
                            AllReportsPage: res.redirectPage,
                            CMSPage: res.CMSPage,
                            FreshAPIAuthKey: res.FreshAPIAuthKey,
                            FreshAPIEndpoint: res.FreshAPIEndpoint,
                            FSEndpointAgent: res.FSEndpointAgent,
                            FreshserviceAPIBodyTemplate: res.FreshserviceAPIBodyTemplate,
                            PowerAutomateURL: res.PowerAutomateURL,
                            Title: res.Title,
                            FreshTicketURL: res.FreshTicketURL,
                            auditReportPage: res.auditReportPage,
                            cmsAdvanceSearchPage: res.cmsAdvanceSearchPage,
                            cmsObjectPageName: res.cmsObjectPageName,
                            cmsTestingPageName: res.cmsTestingPageName,
                            cmsProfilePageName: res.cmsProfilePageName,
                            cmsRequestPageName: res.cmsRequestPageName,
                            cmsLibraryPageName: res.cmsLibraryPageName,
                        };
                    });
                    cmsMyPendingReqStore.emitChange("onCMSProfileChange");
                });
            });
        };
        _this.getCurrentUserGroup = function () {
            return new Promise(function (resolve, reject) {
                _this.myInstance.loadPNPJS().then(function (sp) { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, sp.web.currentUser.groups().then(function (res) {
                                    res.map(function (response, idx) {
                                        _this._resCurrUserGroup.push("or AssignedTo/Title eq '" + response.Title + "'");
                                    });
                                })];
                            case 1:
                                _a.sent();
                                this._resFilterString = this._resCurrUserGroup.join(" ");
                                resolve(this._resFilterString);
                                return [2 /*return*/];
                        }
                    });
                }); });
            });
        };
        _this.getCMSRequestResult = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCurrentUserGroup()];
                    case 1:
                        _a.sent();
                        this.myInstance.loadPNPJS().then(function (sp) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, sp.web.lists
                                            .getByTitle("9A7B915ECMS")
                                            .items.select("ID", "Title", "formStatus", "requester/Title", "Created", "AssignedTo/Title", "AssignedTo/EMail", "Application", "instance")
                                            .filter("AssignedTo/EMail eq '" + this._resUserEmail + "' " + this._resFilterString)
                                            .expand("requester", "AssignedTo")
                                            .getAll()
                                            .then(function (res) {
                                            cmsMyPendingReqStore._resCMSData = res;
                                            cmsMyPendingReqStore.emitChange("ongetCMSRequest");
                                        })
                                            .catch(function (err) { })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.myInstance = new myLibrary.AmetekLibraryLibrary();
        return _this;
    }
    CMSMyPendingRequestStore.prototype.emitChange = function (CHANGE_EVENT) {
        this.emit(CHANGE_EVENT);
    };
    CMSMyPendingRequestStore.prototype.getCMSProfileResults = function () {
        return this._resCMSProfile;
    };
    CMSMyPendingRequestStore.prototype.getCMSData = function () {
        return this._resCMSData;
    };
    return CMSMyPendingRequestStore;
}(EventEmitter));
Dispatcher.register(function (sr) {
    switch (sr.action.type) {
        case "getCMSProfileData":
            cmsMyPendingReqStore.setCMSProfile();
            break;
        case "getCMSData":
            cmsMyPendingReqStore.getCMSRequestResult();
            break;
        case "fetchUserData":
            cmsMyPendingReqStore.getCurrentUser(sr.action.userEmail);
    }
});
var cmsMyPendingReqStore = new CMSMyPendingRequestStore();
export default cmsMyPendingReqStore;
//# sourceMappingURL=CmsMyPendingRequestStore.js.map