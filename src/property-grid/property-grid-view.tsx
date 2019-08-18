import * as React from "react";

import { ControlType } from "../control";
import { IntegerControl } from "../control/integer-control";
import { IntegerView } from "../view/integer-view";
import { StringControl } from "../control/string-control";
import { StringView } from "../view/string-view";
import { BoolControl } from "../control/bool-control";
import { BoolView } from "../view/bool-view";
import { SubsetControl } from "../control/subset-control";
import { SingeSubsetView } from "../view/single-subset-view";
import { ObjectControl } from "../control/object-control";
import { ObjectView } from "../view/object-view";
import { BaseView } from "../view/base-view";
import { PropertyGridControl } from "./property-grid-control";
import { TreeNode } from "../tree/tree";
import { PropertyInfo } from "./property-info";

export class PropertyGridView extends BaseView<TreeNode<PropertyInfo>, PropertyGridControl> {

  render() {
    var renderedProps = this.state.value.children.map(propertyInfo => {
      const propertyRender = this.propertyToRenderer(
        propertyInfo.value.propertyValue,
        propertyInfo.value.control
      );
      return this.withLabel(propertyInfo.value.propertyKey, propertyRender);
    });
    return (
      <div>
        <div>
          <div style={{ color: "grey" }}>PropertyGrid</div>
          <SingeSubsetView
            control={
              new SubsetControl({
                set: ["DarkTheme", "LightTheme"],
                subset: ["DarkTheme"]
              })
            }
          />
        </div>
        <div>{renderedProps}</div>
      </div>
    );
  }

  private propertyToRenderer( propertyValue: any, controlInstance: ControlType ): React.ReactNode {
    if(controlInstance instanceof IntegerControl)
      return <IntegerView control={controlInstance} />;

    if(controlInstance instanceof StringControl)
      return <StringView control={controlInstance} />;

    if(controlInstance instanceof BoolControl)
      return <BoolView control={controlInstance} />;

    if(controlInstance instanceof ObjectControl)
      return <ObjectView control={controlInstance} />;

    throw new Error(`Unknown property control: ${controlInstance}`);
    // return <StringView control={new StringControl(""+propertyValue)} />;
  }

  private withLabel(text: string, node: React.ReactNode): React.ReactNode {
    return (
      <div style={{ display: "flex", flexDirection: "column", marginTop: "12px" }} >
        <label style={{ color: "grey" }}> {text} </label>
        {node}
      </div>
    );
  }
}
