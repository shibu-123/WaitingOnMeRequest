var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { forwardRef } from "react";
import * as myLibrary from "ametek-library";
import styles from "./CmsMyPendingRequestGrid.module.scss";
import { SPPermission } from "@microsoft/sp-page-context";
import { MaterialTable, MTableToolbar } from "ametek-library";
import { makeStyles, MuiCard, createMuiTheme, Add, Chip, Settings, ListAlt, MuiThemeProvider, } from "ametek-library";
import { AddBox, ArrowDownward, Check, ChevronLeft, ChevronRight, Clear, DeleteOutline, Edit, FilterList, FirstPage, LastPage, Remove, SaveAlt, Search, ViewColumn, } from "ametek-library";
import CMSMyPendingRequestAction from "../Action/CmsMyPendingRequestAction";
import CMSMyPendingRequestStore from "../Store/CmsMyPendingRequestStore";
//global variables
var gAbsoluteUrl, gUserName, gUserEmail, gSiteTitle, gPathName, gCurrentUser, gGetUri, gWebTitle;
var gIsEdit, gIsSecurityAdmin, gIsAdmin;
var gData = [];
//....custom styles for Material UI--------------------START
var useStyles = makeStyles(function (theme) { return ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
    button: {
        backgroundColor: "#ea9623",
    },
}); });
//....custom styles for Material UI--------------------START
var theme = createMuiTheme({
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
var tableIcons = {
    Add: forwardRef(function (props, ref) { return (React.createElement(AddBox, __assign({}, props, { ref: ref }))); }),
    Check: forwardRef(function (props, ref) { return (React.createElement(Check, __assign({}, props, { ref: ref }))); }),
    Clear: forwardRef(function (props, ref) { return (React.createElement(Clear, __assign({}, props, { ref: ref }))); }),
    Delete: forwardRef(function (props, ref) { return (React.createElement(DeleteOutline, __assign({}, props, { ref: ref }))); }),
    DetailPanel: forwardRef(function (props, ref) { return (React.createElement(ChevronRight, __assign({}, props, { ref: ref }))); }),
    Edit: forwardRef(function (props, ref) { return (React.createElement(Edit, __assign({}, props, { ref: ref }))); }),
    Export: forwardRef(function (props, ref) { return (React.createElement(SaveAlt, __assign({}, props, { ref: ref }))); }),
    Filter: forwardRef(function (props, ref) { return (React.createElement(FilterList, __assign({}, props, { ref: ref }))); }),
    FirstPage: forwardRef(function (props, ref) { return (React.createElement(FirstPage, __assign({}, props, { ref: ref }))); }),
    LastPage: forwardRef(function (props, ref) { return (React.createElement(LastPage, __assign({}, props, { ref: ref }))); }),
    NextPage: forwardRef(function (props, ref) { return (React.createElement(ChevronRight, __assign({}, props, { ref: ref }))); }),
    PreviousPage: forwardRef(function (props, ref) { return (React.createElement(ChevronLeft, __assign({}, props, { ref: ref }))); }),
    ResetSearch: forwardRef(function (props, ref) { return (React.createElement(Clear, __assign({}, props, { ref: ref }))); }),
    Search: forwardRef(function (props, ref) { return (React.createElement(Search, __assign({}, props, { ref: ref }))); }),
    SortArrow: forwardRef(function (props, ref) { return (React.createElement(ArrowDownward, __assign({}, props, { ref: ref }))); }),
    ThirdStateCheck: forwardRef(function (props, ref) { return (React.createElement(Remove, __assign({}, props, { ref: ref }))); }),
    ViewColumn: forwardRef(function (props, ref) { return (React.createElement(ViewColumn, __assign({}, props, { ref: ref }))); }),
};
export default function CmsMyPendingRequestGrid(props) {
    //.....declare state for function component
    //.....CMS Profile values......
    var _a = React.useState([]), cmsProfile = _a[0], setCMSProfile = _a[1];
    var _b = React.useState(""), cmsPage = _b[0], setCMSPage = _b[1];
    var _c = React.useState(""), allReportsPage = _c[0], setallReportsPage = _c[1];
    var _d = React.useState(""), fsEndPoint = _d[0], setfsEndPoint = _d[1];
    var _e = React.useState(""), fsAgentEndpoint = _e[0], setFSAgentEndpoint = _e[1];
    var _f = React.useState(""), fsAPIKey = _f[0], setfsAPIKey = _f[1];
    var _g = React.useState(""), fsBobyTemplate = _g[0], setfsBobyTemplate = _g[1];
    var _h = React.useState(""), powerAutomateURL = _h[0], setpowerAutomateURL = _h[1];
    var _j = React.useState(""), freshTicketURL = _j[0], setfreshTicketURL = _j[1];
    var _k = React.useState(""), auditReportPage = _k[0], setAuditReportPage = _k[1];
    var _l = React.useState(""), cmsAdvanceSearchPage = _l[0], setCMSAdvanceSearchPage = _l[1];
    var _m = React.useState(""), cmsObjectPageName = _m[0], setCMSObjectPageName = _m[1];
    var _o = React.useState(""), cmsTestingPageName = _o[0], setCMSTestingPageName = _o[1];
    var _p = React.useState(""), cmsProfilePageName = _p[0], setCMSProfilePageName = _p[1];
    var _q = React.useState(""), cmsRequestPageName = _q[0], setCMSRequestPageName = _q[1];
    var _r = React.useState(""), cmsLibraryPageName = _r[0], setCMSLibraryPageName = _r[1];
    var _s = React.useState(false), isAdmin = _s[0], setAdmin = _s[1];
    var _t = React.useState([]), data = _t[0], setCMSData = _t[1];
    //...get handle of ametek library components
    var myInstance = new myLibrary.AmetekLibraryLibrary();
    //....get handle custom material-ui styles
    var classes = useStyles();
    //....initate all global variables-------------START
    gAbsoluteUrl = props.context.pageContext.web.absoluteUrl;
    gUserName = props.context.pageContext.user.displayName;
    gUserEmail = props.context.pageContext.user.email;
    gWebTitle = props.context.pageContext.web.title;
    gPathName = new URL(gAbsoluteUrl).pathname;
    gGetUri = gAbsoluteUrl.split(gPathName)[0];
    gSiteTitle = props.context.pageContext.web.absoluteUrl.substr(props.context.pageContext.web.absoluteUrl.lastIndexOf("/") + 1, props.context.pageContext.web.absoluteUrl.length);
    //....initate all global variables-------------END
    //...get handle of current moment
    var curMoment = myInstance.importMoment();
    //.....handle permissions-------------------------------------START
    var permission = new SPPermission(props.context.pageContext.web.permissions.value);
    gIsEdit = permission.hasPermission(SPPermission.manageLists);
    gIsSecurityAdmin = permission.hasPermission(SPPermission.manageWeb);
    //.....handle permissions-------------------------------------END
    var columns = [
        {
            title: "CR#",
            field: "ID",
            cellStyle: { width: "5px" },
            render: function (rowData) { return (React.createElement("a", { href: gAbsoluteUrl + "/SitePages/" + cmsPage + "?EDITID=" + rowData.ID, target: "_blank" }, rowData.ID)); },
        },
        {
            title: "Submitted On",
            field: "Created",
            cellStyle: { width: "10px" },
            render: function (rowData) { return curMoment(rowData.Created).format("MMM DD YYYY"); },
        },
        {
            title: "Requester",
            field: "requester.Title",
            render: function (rowData) {
                return rowData.requester.Title == null ? "" : rowData.requester.Title;
            },
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
    var setCMSResults = function () {
        setCMSData(CMSMyPendingRequestStore.getCMSData());
        gData = CMSMyPendingRequestStore.getCMSData();
    };
    //....fetch all funding request and store the result in data state variable-----END
    //...Initialize CMSProfile state...
    var setCMSProfileData = function () {
        var CMSProfileArray = CMSMyPendingRequestStore.getCMSProfileResults();
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
    React.useEffect(function () {
        CMSMyPendingRequestAction.fetchUserInfo(gUserEmail);
        CMSMyPendingRequestAction.getCMSProfileAction();
        CMSMyPendingRequestStore.on("onCMSProfileChange", setCMSProfileData);
        CMSMyPendingRequestAction.getCMSRequestAction();
        CMSMyPendingRequestStore.on("ongetCMSRequest", setCMSResults);
    }, []);
    //......fetch all funding request using use Effect----------------------END
    return (React.createElement("div", { className: styles.cmsMyPendingRequestGrid },
        React.createElement(MuiCard, { style: { height: "100%" } },
            React.createElement(MuiThemeProvider, { theme: theme },
                React.createElement(MaterialTable, { icons: tableIcons, title: "Waiting On Me", columns: columns, data: data, options: {
                        filtering: true,
                        sorting: true,
                        headerStyle: {
                            backgroundColor: "#01579b",
                            color: "#FFF",
                        },
                        exportButton: { csv: true },
                        exportAllData: true,
                    }, components: {
                        Toolbar: function (props) { return (React.createElement("div", null,
                            React.createElement(MTableToolbar, __assign({}, props)),
                            React.createElement("div", { style: { padding: "0px 10px" } },
                                React.createElement(Chip, { label: "New Request", component: "a", color: "secondary", href: gAbsoluteUrl + "/SitePages/" + cmsPage, target: "_blank", "data-interception": "off", icon: React.createElement(Add, { fontSize: "small" }), style: { marginRight: 5, marginBottom: 5 } }),
                                React.createElement(Chip, { label: "Audit Report", component: "a", color: "secondary", href: gAbsoluteUrl + "/SitePages/" + auditReportPage, target: "_blank", "data-interception": "off", icon: React.createElement(ListAlt, { fontSize: "small" }), style: { marginRight: 5, marginBottom: 5 } }),
                                React.createElement(Chip, { label: "Advanced Search", component: "a", color: "secondary", href: gAbsoluteUrl + "/SitePages/" + cmsAdvanceSearchPage, target: "_blank", "data-interception": "off", icon: React.createElement(ListAlt, { fontSize: "small" }), style: { marginRight: 5, marginBottom: 5 } }),
                                React.createElement(Chip, { label: "CMS Profile", component: "a", hidden: !gIsSecurityAdmin, color: "secondary", href: gAbsoluteUrl +
                                        "/Lists/" +
                                        cmsProfilePageName +
                                        "/AllItems.aspx", target: "_blank", "data-interception": "off", icon: React.createElement(Settings, { fontSize: "small" }), style: { marginRight: 5, marginBottom: 5 } }),
                                React.createElement(Chip, { label: "CMS Object", component: "a", hidden: !gIsSecurityAdmin, color: "secondary", href: gAbsoluteUrl +
                                        "/Lists/" +
                                        cmsObjectPageName +
                                        "/AllItems.aspx", target: "_blank", "data-interception": "off", icon: React.createElement(Settings, { fontSize: "small" }), style: { marginRight: 5, marginBottom: 5 } }),
                                React.createElement(Chip, { label: "Testing Results", component: "a", hidden: !gIsSecurityAdmin, color: "secondary", href: gAbsoluteUrl +
                                        "/Lists/" +
                                        cmsTestingPageName +
                                        "/AllItems.aspx", target: "_blank", "data-interception": "off", icon: React.createElement(Settings, { fontSize: "small" }), style: { marginRight: 5, marginBottom: 5 } }),
                                React.createElement(Chip, { label: "CMS Request", component: "a", hidden: !gIsSecurityAdmin, color: "secondary", href: gAbsoluteUrl +
                                        "/Lists/" +
                                        cmsRequestPageName +
                                        "/AllItems.aspx", target: "_blank", "data-interception": "off", icon: React.createElement(Settings, { fontSize: "small" }), style: { marginRight: 5, marginBottom: 5 } }),
                                React.createElement(Chip, { label: "CR Library", component: "a", hidden: !gIsSecurityAdmin, color: "secondary", href: gAbsoluteUrl +
                                        "/" +
                                        cmsLibraryPageName +
                                        "/Forms/AllItems.aspx", target: "_blank", "data-interception": "off", icon: React.createElement(Settings, { fontSize: "small" }), style: { marginRight: 5, marginBottom: 5 } })))); },
                    } })))));
}
//# sourceMappingURL=CmsMyPendingRequestGrid.js.map