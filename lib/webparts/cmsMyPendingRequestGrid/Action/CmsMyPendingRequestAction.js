import { Dispatcher } from "ametek-library";
var CMSMyPendingRequestAction = /** @class */ (function () {
    function CMSMyPendingRequestAction() {
    }
    CMSMyPendingRequestAction.prototype.getCMSProfileAction = function () {
        Dispatcher.dispatch({
            type: "getCMSProfileData",
        });
    };
    CMSMyPendingRequestAction.prototype.getCMSRequestAction = function () {
        Dispatcher.dispatch({
            type: "getCMSData",
        });
    };
    CMSMyPendingRequestAction.prototype.fetchUserInfo = function (userEmail) {
        Dispatcher.dispatch({
            type: "fetchUserData",
            userEmail: userEmail,
        });
    };
    return CMSMyPendingRequestAction;
}());
export { CMSMyPendingRequestAction };
var cmsMyPendingReqActions = new CMSMyPendingRequestAction();
export default cmsMyPendingReqActions;
//# sourceMappingURL=CmsMyPendingRequestAction.js.map