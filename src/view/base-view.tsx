import React from "react";

export class BaseView extends React.Component {
  get inputStyle(): any {
    return {
      backgroundColor: "lightgrey",
      color: "white",
      borderRadius: "2px",
      border: "1px solid darkgrey",
      flex: "14",
      cursor: "pointer",
      userSelect: "none"
    };
  }
}
