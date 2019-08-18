import { TreeNode } from "../tree/tree";
import { PropertyInfo } from "./property-info";
import { IntegerControl } from "../control/integer-control";
import { StringControl } from "../control/string-control";
import { BoolControl } from "../control/bool-control";
import { SubsetControl } from "../control/subset-control";
import { ObjectControl } from "../control/object-control";
import { BaseControl } from "../control/base";

export class PropertyGridControl extends BaseControl<TreeNode<PropertyInfo>> {
  private _root: TreeNode<PropertyInfo>;

  constructor() {
    //hacky: needs find another way
    const rootNode = new TreeNode(new PropertyInfo("", "/", null, new IntegerControl(0)), null);

    super(rootNode);

    this._root = rootNode;

    this.toPropertyInfo = this.toPropertyInfo.bind(this);
  }

  public bind(props: object) {
    const propertyInfos = Object.entries(props).map(this.toPropertyInfo);

    //connect to root
    propertyInfos.forEach(propertyInfo =>
      this._root.add(new TreeNode<PropertyInfo>(propertyInfo, this._root))
    );

    this.emit("changed", this._root);
  }

  private toPropertyInfo([key, value]: [string, any]): PropertyInfo {
    const controlInstance = this.getResolvedControlInstance(value);
    return new PropertyInfo(key, "/", value, controlInstance);
  }

  private chooseControlType(propertyValue: any) {
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
