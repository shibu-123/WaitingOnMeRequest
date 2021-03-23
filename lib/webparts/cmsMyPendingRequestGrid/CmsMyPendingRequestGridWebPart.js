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
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'CmsMyPendingRequestGridWebPartStrings';
import CmsMyPendingRequestGrid from './components/CmsMyPendingRequestGrid';
import * as myLibrary from "ametek-library";
import { pnpSetup } from "ametek-library";
var CmsMyPendingRequestGridWebPart = /** @class */ (function (_super) {
    __extends(CmsMyPendingRequestGridWebPart, _super);
    function CmsMyPendingRequestGridWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CmsMyPendingRequestGridWebPart.prototype.onInit = function () {
        var _this = this;
        var myInstance = new myLibrary.AmetekLibraryLibrary();
        myInstance.loadPNPJS().then(function (sp) {
            pnpSetup({
                spfxContext: _this.context,
            });
        });
        return Promise.resolve();
    };
    CmsMyPendingRequestGridWebPart.prototype.render = function () {
        var element = React.createElement(CmsMyPendingRequestGrid, {
            description: this.properties.description,
            context: this.context,
        });
        ReactDom.render(element, this.domElement);
    };
    CmsMyPendingRequestGridWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(CmsMyPendingRequestGridWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    CmsMyPendingRequestGridWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                }),
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return CmsMyPendingRequestGridWebPart;
}(BaseClientSideWebPart));
export default CmsMyPendingRequestGridWebPart;
//# sourceMappingURL=CmsMyPendingRequestGridWebPart.js.map