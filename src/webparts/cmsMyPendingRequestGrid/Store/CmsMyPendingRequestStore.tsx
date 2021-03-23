import * as React from "react";
import { Dispatcher } from "ametek-library";
import { EventEmitter } from "events";
import { IWebPartContext } from "@microsoft/sp-webpart-base";
import {
  IHttpClientOptions,
  HttpClientResponse,
  HttpClient,
} from "@microsoft/sp-http";
import * as myLibrary from "ametek-library";

class CMSMyPendingRequestStore extends EventEmitter {
  private _resCMSData: Array<string> = [];
  private _resCMSProfile: Array<string> = [];
  private _resUserEmail: string;
  private _resFilterString: string;
  private _resCurrUserGroup: Array<string> = [];

  private myInstance;
  constructor() {
    super();
    this.myInstance = new myLibrary.AmetekLibraryLibrary();
  }
  public emitChange(CHANGE_EVENT: string): void {
    this.emit(CHANGE_EVENT);
  }
  public getCMSProfileResults(): any {
    return this._resCMSProfile;
  }
  public getCMSData(): any {
    return this._resCMSData;
  }

  public getCurrentUser = (email) => {
    cmsMyPendingReqStore._resUserEmail = email;
  };

  // Get CMSProfile values from Sharepoint List
  public setCMSProfile = () => {
    const myInstance1 = new myLibrary.AmetekLibraryLibrary();
    myInstance1.loadPNPJS().then((sp) => {
      sp.web.lists
        .getByTitle("852581CCMSProfile")
        .items.select(
          "Title",
          "FreshAPIEndpoint",
          "FreshAPIAuthKey",
          "FSEndpointAgent",
          "PowerAutomateURL",
          "FreshserviceAPIBodyTemplate",
          "redirectPage",
          "CMSPage",
          "FreshTicketURL",
          "auditReportPage",
          "cmsAdvanceSearchPage",
          "cmsObjectPageName",
          "cmsTestingPageName",
          "cmsProfilePageName",
          "cmsRequestPageName",
          "cmsLibraryPageName"
        )

        .get()
        .then(function (data) {
          cmsMyPendingReqStore._resCMSProfile = data.map((res) => {
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

  public getCurrentUserGroup = () => {
    return new Promise((resolve, reject) => {
      this.myInstance.loadPNPJS().then(async (sp) => {
        await sp.web.currentUser.groups().then((res) => {
          res.map((response, idx) => {
            this._resCurrUserGroup.push(
              `or AssignedTo/Title eq '${response.Title}'`
            );
          });
        });
        this._resFilterString = this._resCurrUserGroup.join(" ");
        resolve(this._resFilterString);
      });
    });
  };

  public getCMSRequestResult = async () => {
    await this.getCurrentUserGroup();
    this.myInstance.loadPNPJS().then(async (sp) => {
      await sp.web.lists
        .getByTitle("9A7B915ECMS")
        .items.select(
          "ID",
          "Title",
          "formStatus",
          "requester/Title",
          "Created",
          "AssignedTo/Title",
          "AssignedTo/EMail",
          "Application",
          "instance"
        )
        .filter(
          `AssignedTo/EMail eq '${this._resUserEmail}' ${this._resFilterString}`
        )
        .expand("requester", "AssignedTo")
        .getAll()
        .then((res) => {
          cmsMyPendingReqStore._resCMSData = res;
          cmsMyPendingReqStore.emitChange("ongetCMSRequest");
        })
        .catch((err) => {});
      // getCurrentUserEffectivePermissions
    });
  };
}

Dispatcher.register((sr) => {
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
const cmsMyPendingReqStore: CMSMyPendingRequestStore = new CMSMyPendingRequestStore();
export default cmsMyPendingReqStore;
