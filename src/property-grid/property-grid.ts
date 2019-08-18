import { TreeNode } from "../tree/tree";
import { PropertyInfo } from "./property-info";
import { IntegerControl } from "../control/integer-control";
import { StringControl } from "../control/string-control";
import { BoolControl } from "../control/bool-control";
import { SubsetControl } from "../control/subset-control";
import { ObjectControl } from "../control/object-control";
import { BaseControl } from "../control/base";

export class PropertyGrid {
  private _root: TreeNode<PropertyInfo>;

  constructor() {
    this._root = new TreeNode(null, null);

    this.toPropertyInfo = this.toPropertyInfo.bind(this);
  }

  public bind(props : object) {
    const entries = Object.entries(props)
    .map(entry =>
      this.toPropertyInfo(entry, this._root)
    );
  }

  private toPropertyInfo([key, value]: [string, any],parent: TreeNode<PropertyInfo>): PropertyInfo {
    const controlInstance = this.getResolvedControlInstance(value);
    return new PropertyInfo(key, "/", value, controlInstance);
    // return new TreeNode(propertyInfo, parent);
  }

  private chooseControlType(propertyValue : any) {
    switch (typeof propertyValue) {
      case "number":
        return IntegerControl;
      case "string":
        return StringControl;
      case "boolean":
        return BoolControl;
      case "object":
        return ObjectControl;
      default:
        return StringControl;
    }
  }

  private getResolvedControlInstance(value: any) {
    const ControlType = this.chooseControlType(value);
    const controlInstance = new ControlType(value);
    return controlInstance;
  }
}
