import * as React from "react";

export class BaseView<TProps, TState> extends React.Component<TProps, TState> {
  protected get inputStyle(): any {
    return {
      backgroundColor: "rgb(28, 32, 34)",
      color: "rgb(102, 185, 244)",
      borderRadius: "1px",
      border: "2px solid rgb(102, 185, 244, 0.3)",
    };
    //rgb(102, 185, 244)
  }
}
