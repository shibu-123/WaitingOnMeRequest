import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
export interface ICmsMyPendingRequestGridWebPartProps {
    description: string;
}
export default class CmsMyPendingRequestGridWebPart extends BaseClientSideWebPart<ICmsMyPendingRequestGridWebPartProps> {
    onInit(): Promise<void>;
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=CmsMyPendingRequestGridWebPart.d.ts.map