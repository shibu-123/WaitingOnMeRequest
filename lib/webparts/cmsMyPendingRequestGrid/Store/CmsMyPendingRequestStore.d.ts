import { EventEmitter } from "events";
declare class CMSMyPendingRequestStore extends EventEmitter {
    private _resCMSData;
    private _resCMSProfile;
    private _resUserEmail;
    private _resFilterString;
    private _resCurrUserGroup;
    private myInstance;
    constructor();
    emitChange(CHANGE_EVENT: string): void;
    getCMSProfileResults(): any;
    getCMSData(): any;
    getCurrentUser: (email: any) => void;
    setCMSProfile: () => void;
    getCurrentUserGroup: () => Promise<{}>;
    getCMSRequestResult: () => Promise<void>;
}
declare const cmsMyPendingReqStore: CMSMyPendingRequestStore;
export default cmsMyPendingReqStore;
//# sourceMappingURL=CmsMyPendingRequestStore.d.ts.map