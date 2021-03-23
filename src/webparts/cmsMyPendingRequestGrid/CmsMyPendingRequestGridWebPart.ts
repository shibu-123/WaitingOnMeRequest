import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'CmsMyPendingRequestGridWebPartStrings';
import CmsMyPendingRequestGrid from './components/CmsMyPendingRequestGrid';
import { ICmsMyPendingRequestGridProps } from './components/ICmsMyPendingRequestGridProps';
import * as myLibrary from "ametek-library";
import { pnpSetup } from "ametek-library";
export interface ICmsMyPendingRequestGridWebPartProps {
  description: string;
 
}

export default class CmsMyPendingRequestGridWebPart extends BaseClientSideWebPart<ICmsMyPendingRequestGridWebPartProps> {

  public onInit(): Promise<void> {
    const myInstance = new myLibrary.AmetekLibraryLibrary();
    myInstance.loadPNPJS().then((sp) => {
      pnpSetup({
        spfxContext: this.context,
      });
    });
    return Promise.resolve();
  }

  public render(): void {
    const element: React.ReactElement<ICmsMyPendingRequestGridProps> = React.createElement(
      CmsMyPendingRequestGrid,
      {
        description: this.properties.description,
        context: this.context,
      
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
