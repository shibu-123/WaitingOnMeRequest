import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { forwardRef } from "react";
import * as myLibrary from "ametek-library";
import styles from "./CmsMyPendingRequestGrid.module.scss";
import { ICmsMyPendingRequestGridProps } from "./ICmsMyPendingRequestGridProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { SPPermission } from "@microsoft/sp-page-context";
import { MaterialTable, MTableToolbar } from "ametek-library";
import {
  makeStyles,
  MuiCard,
  createMuiTheme,
  Add,
  Paper,
  Breadcrumbs,
  withStyles,
  emphasize,
  Chip,
  Theme,
  Home,
  Archive,
  Settings,
  HowToReg,
  List,
  ListAlt,
  LabAlert,
  AlertTitle,
  MuiThemeProvider,
} from "ametek-library";

import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
} from "ametek-library";

import CMSMyPendingRequestAction from "../Action/CmsMyPendingRequestAction";
import CMSMyPendingRequestStore from "../Store/CmsMyPendingRequestStore";

//global variables
let gAbsoluteUrl,
  gUserName,
  gUserEmail,
  gSiteTitle,
  gPathName,
  gCurrentUser,
  gGetUri,
  gWebTitle;
let gIsEdit, gIsSecurityAdmin, gIsAdmin;
let gData = [];

//....custom styles for Material UI--------------------START
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    backgroundColor: "#ea9623",
  },
}));
//....custom styles for Material UI--------------------START

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4caf50",
    },
    secondary: {
      main: "#cde6fe",
    },
  },
  overrides: {
    MuiTableRow: {
      root: {
        "&:hover": {
          backgroundColor: "rgba(33, 150, 243, 0.5)",
        },
      },
    },
  },
});

const tableIcons = {
  Add: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <AddBox {...props} ref={ref} />
  )),
  Check: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Check {...props} ref={ref} />
  )),
  Clear: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Clear {...props} ref={ref} />
  )),
  Delete: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <DeleteOutline {...props} ref={ref} />
  )),
  DetailPanel: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Edit {...props} ref={ref} />
  )),
  Export: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <SaveAlt {...props} ref={ref} />
  )),
  Filter: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <FilterList {...props} ref={ref} />
  )),
  FirstPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <FirstPage {...props} ref={ref} />
  )),
  LastPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <LastPage {...props} ref={ref} />
  )),
  NextPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ChevronRight {...props} ref={ref} />
  )),
  PreviousPage: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Clear {...props} ref={ref} />
  )),
  Search: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Search {...props} ref={ref} />
  )),
  SortArrow: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ArrowDownward {...props} ref={ref} />
  )),
  ThirdStateCheck: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <Remove {...props} ref={ref} />
  )),
  ViewColumn: forwardRef((props, ref: React.Ref<SVGSVGElement>) => (
    <ViewColumn {...props} ref={ref} />
  )),
};

export default function CmsMyPendingRequestGrid(
  props: ICmsMyPendingRequestGridProps
) {
  //.....declare state for function component
  //.....CMS Profile values......
  const [cmsProfile, setCMSProfile] = React.useState([]);
  const [cmsPage, setCMSPage] = React.useState("");
  const [allReportsPage, setallReportsPage] = React.useState("");
  const [fsEndPoint, setfsEndPoint] = React.useState("");
  const [fsAgentEndpoint, setFSAgentEndpoint] = React.useState("");
  const [fsAPIKey, setfsAPIKey] = React.useState("");
  const [fsBobyTemplate, setfsBobyTemplate] = React.useState("");
  const [powerAutomateURL, setpowerAutomateURL] = React.useState("");
  const [freshTicketURL, setfreshTicketURL] = React.useState("");
  const [auditReportPage, setAuditReportPage] = React.useState("");
  const [cmsAdvanceSearchPage, setCMSAdvanceSearchPage] = React.useState("");
  const [cmsObjectPageName, setCMSObjectPageName] = React.useState("");
  const [cmsTestingPageName, setCMSTestingPageName] = React.useState("");
  const [cmsProfilePageName, setCMSProfilePageName] = React.useState("");
  const [cmsRequestPageName, setCMSRequestPageName] = React.useState("");
  const [cmsLibraryPageName, setCMSLibraryPageName] = React.useState("");

  const [isAdmin, setAdmin] = React.useState(false);
  const [data, setCMSData] = React.useState([]);

  //...get handle of ametek library components
  const myInstance = new myLibrary.AmetekLibraryLibrary();
  //....get handle custom material-ui styles
  const classes = useStyles();

  //....initate all global variables-------------START
  gAbsoluteUrl = props.context.pageContext.web.absoluteUrl;
  gUserName = props.context.pageContext.user.displayName;
  gUserEmail = props.context.pageContext.user.email;
  gWebTitle = props.context.pageContext.web.title;
  gPathName = new URL(gAbsoluteUrl).pathname;
  gGetUri = gAbsoluteUrl.split(gPathName)[0];
  gSiteTitle = props.context.pageContext.web.absoluteUrl.substr(
    props.context.pageContext.web.absoluteUrl.lastIndexOf("/") + 1,
    props.context.pageContext.web.absoluteUrl.length
  );
  //....initate all global variables-------------END

  //...get handle of current moment
  let curMoment: any = myInstance.importMoment();
  //.....handle permissions-------------------------------------START
  let permission = new SPPermission(
    props.context.pageContext.web.permissions.value
  );

  gIsEdit = permission.hasPermission(SPPermission.manageLists);
  gIsSecurityAdmin = permission.hasPermission(SPPermission.manageWeb);

  //.....handle permissions-------------------------------------END

  const columns = [
    {
      title: "CR#",
      field: "ID",
      cellStyle: { width: "5px" },
      render: (rowData) => (
        <a
          href={
            gAbsoluteUrl + "/SitePages/" + cmsPage + "?EDITID=" + rowData.ID
          }
          target="_blank"
        >
          {rowData.ID}
        </a>
      ),
    },
    {
      title: "Submitted On",
      field: "Created",
      cellStyle: { width: "10px" },
      render: (rowData) => curMoment(rowData.Created).format("MMM DD YYYY"),
    },
    {
      title: "Requester",
      field: "requester.Title",
      render: (rowData) =>
        rowData.requester.Title == null ? "" : rowData.requester.Title,
    },
    {
      title: "Status",
      field: "formStatus",
    },
    {
      title: "Title",
      field: "Title",
    },
    {
      title: "Application",
      field: "Application",
    },
    {
      title: "Production Instance",
      field: "instance",
    },
  ];

  //....fetch all funding request and store the result in data state variable-----START
  const setCMSResults = () => {
    setCMSData(CMSMyPendingRequestStore.getCMSData());
    gData = CMSMyPendingRequestStore.getCMSData();
  };
  //....fetch all funding request and store the result in data state variable-----END

  //...Initialize CMSProfile state...
  const setCMSProfileData = () => {
    const CMSProfileArray = CMSMyPendingRequestStore.getCMSProfileResults();
    setCMSProfile(CMSProfileArray);
    setCMSPage(CMSProfileArray[0].CMSPage);
    setallReportsPage(CMSProfileArray[0].AllReportsPage);
    setfsEndPoint(CMSProfileArray[0].FreshAPIEndpoint);
    setFSAgentEndpoint(CMSProfileArray[0].FSEndpointAgent);
    setfsAPIKey(CMSProfileArray[0].FreshAPIAuthKey);
    setfsBobyTemplate(CMSProfileArray[0].FreshserviceAPIBodyTemplate);
    setpowerAutomateURL(CMSProfileArray[0].PowerAutomateURL);
    setfreshTicketURL(CMSProfileArray[0].FreshTicketURL);
    setAuditReportPage(CMSProfileArray[0].auditReportPage);
    setCMSAdvanceSearchPage(CMSProfileArray[0].cmsAdvanceSearchPage);
    setCMSObjectPageName(CMSProfileArray[0].cmsObjectPageName);
    setCMSTestingPageName(CMSProfileArray[0].cmsTestingPageName);
    setCMSProfilePageName(CMSProfileArray[0].cmsProfilePageName);
    setCMSRequestPageName(CMSProfileArray[0].cmsRequestPageName);
    setCMSLibraryPageName(CMSProfileArray[0].cmsLibraryPageName);
  };

  //......fetch all funding request using use Effect----------------------START
  React.useEffect(() => {
    CMSMyPendingRequestAction.fetchUserInfo(gUserEmail);
    CMSMyPendingRequestAction.getCMSProfileAction();
    CMSMyPendingRequestStore.on("onCMSProfileChange", setCMSProfileData);
    CMSMyPendingRequestAction.getCMSRequestAction();
    CMSMyPendingRequestStore.on("ongetCMSRequest", setCMSResults);
  }, []);

  //......fetch all funding request using use Effect----------------------END

  return (
    <div className={styles.cmsMyPendingRequestGrid}>
      <MuiCard style={{ height: "100%" }}>
        <MuiThemeProvider theme={theme}>
          <MaterialTable
            icons={tableIcons}
            title="Waiting On Me"
            columns={columns}
            data={data}
            options={{
              filtering: true,
              sorting: true,
              headerStyle: {
                backgroundColor: "#01579b",
                color: "#FFF",
              },
              exportButton: { csv: true },
              exportAllData: true,
            }}
            components={{
              Toolbar: (props) => (
                <div>
                  <MTableToolbar {...props} />
                  <div style={{ padding: "0px 10px" }}>
                    <Chip
                      label="New Request"
                      component="a"
                      color="secondary"
                      href={gAbsoluteUrl + "/SitePages/" + cmsPage}
                      target="_blank"
                      data-interception="off"
                      icon={<Add fontSize="small" />}
                      style={{ marginRight: 5, marginBottom: 5 }}
                    />
                    <Chip
                      label="Audit Report"
                      component="a"
                      color="secondary"
                      href={gAbsoluteUrl + "/SitePages/" + auditReportPage}
                      target="_blank"
                      data-interception="off"
                      icon={<ListAlt fontSize="small" />}
                      style={{ marginRight: 5, marginBottom: 5 }}
                    />
                    <Chip
                      label="Advanced Search"
                      component="a"
                      color="secondary"
                      href={gAbsoluteUrl + "/SitePages/" + cmsAdvanceSearchPage}
                      target="_blank"
                      data-interception="off"
                      icon={<ListAlt fontSize="small" />}
                      style={{ marginRight: 5, marginBottom: 5 }}
                    />
                    <Chip
                      label="CMS Profile"
                      component="a"
                      hidden={!gIsSecurityAdmin}
                      color="secondary"
                      href={
                        gAbsoluteUrl +
                        "/Lists/" +
                        cmsProfilePageName +
                        "/AllItems.aspx"
                      }
                      target="_blank"
                      data-interception="off"
                      icon={<Settings fontSize="small" />}
                      style={{ marginRight: 5, marginBottom: 5 }}
                    />
                    <Chip
                      label="CMS Object"
                      component="a"
                      hidden={!gIsSecurityAdmin}
                      color="secondary"
                      href={
                        gAbsoluteUrl +
                        "/Lists/" +
                        cmsObjectPageName +
                        "/AllItems.aspx"
                      }
                      target="_blank"
                      data-interception="off"
                      icon={<Settings fontSize="small" />}
                      style={{ marginRight: 5, marginBottom: 5 }}
                    />
                    <Chip
                      label="Testing Results"
                      component="a"
                      hidden={!gIsSecurityAdmin}
                      color="secondary"
                      href={
                        gAbsoluteUrl +
                        "/Lists/" +
                        cmsTestingPageName +
                        "/AllItems.aspx"
                      }
                      target="_blank"
                      data-interception="off"
                      icon={<Settings fontSize="small" />}
                      style={{ marginRight: 5, marginBottom: 5 }}
                    />
                    <Chip
                      label="CMS Request"
                      component="a"
                      hidden={!gIsSecurityAdmin}
                      color="secondary"
                      href={
                        gAbsoluteUrl +
                        "/Lists/" +
                        cmsRequestPageName +
                        "/AllItems.aspx"
                      }
                      target="_blank"
                      data-interception="off"
                      icon={<Settings fontSize="small" />}
                      style={{ marginRight: 5, marginBottom: 5 }}
                    />
                    <Chip
                      label="CR Library"
                      component="a"
                      hidden={!gIsSecurityAdmin}
                      color="secondary"
                      href={
                        gAbsoluteUrl +
                        "/" +
                        cmsLibraryPageName +
                        "/Forms/AllItems.aspx"
                      }
                      target="_blank"
                      data-interception="off"
                      icon={<Settings fontSize="small" />}
                      style={{ marginRight: 5, marginBottom: 5 }}
                    />
                  </div>
                </div>
              ),
            }}
          />
        </MuiThemeProvider>
      </MuiCard>
    </div>
  );
}
