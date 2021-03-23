import { Dispatcher } from "ametek-library";
import * as React from "react";
import { ContextualMenu } from "office-ui-fabric-react";
import { IWebPartContext } from "@microsoft/sp-webpart-base";
import { MSGraphClient } from "@microsoft/sp-http";

export class CMSMyPendingRequestAction {
  public getCMSProfileAction() {
    Dispatcher.dispatch({
      type: "getCMSProfileData",
    });
  }
  public getCMSRequestAction() {
    Dispatcher.dispatch({
      type: "getCMSData",
    });
  }
  public fetchUserInfo(userEmail) {
    Dispatcher.dispatch({
      type: "fetchUserData",
      userEmail: userEmail,
    });
  }
}

const cmsMyPendingReqActions: CMSMyPendingRequestAction = new CMSMyPendingRequestAction();
export default cmsMyPendingReqActions;
