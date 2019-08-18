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
import { PropertyNode } from "../tree/tree";
import { PropertyInfo } from "./property-info";

export class PropertyGridView extends BaseView<
  PropertyNode<PropertyInfo>,
  PropertyGridControl
> {
  render() {
    const renderedProps = this.state.value.children.map(propertyInfo => {
      const propertyRender = this.propertyToRenderer(
        propertyInfo.property.value,
        propertyInfo.property.control
      );
      return this.withLabel(propertyInfo.property.key, propertyRender);
    });

    const currentPath = this.traceCurrentPath();

    return (
      <div>
        <div>
          <div style={{ color: "grey" }}>PropertyGrid [{currentPath}]</div>
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

  private traceCurrentPath() {
    var path: string = "";

    for (var node = this.state.value; node.parent !== null; node = node.parent)
      path += node.property.key;

    return `${path}/${this.state.value.property.key}`;
  }

  private propertyToRenderer(
    propertyValue: any,
    controlInstance: ControlType
  ): React.ReactNode {
    if (controlInstance instanceof IntegerControl)
      return <IntegerView control={controlInstance} />;

    if (controlInstance instanceof StringControl)
      return <StringView control={controlInstance} />;

    if (controlInstance instanceof BoolControl)
      return <BoolView control={controlInstance} />;

    if (controlInstance instanceof ObjectControl)
      return <ObjectView control={controlInstance} />;

    throw new Error(`Unknown property control: ${controlInstance}`);
    // return <StringView control={new StringControl(""+propertyValue)} />;
  }

  private withLabel(text: string, node: React.ReactNode): React.ReactNode {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "12px" }}
      >
        <label style={{ color: "grey" }}> {text} </label>
        {node}
      </div>
    );
  }
}
