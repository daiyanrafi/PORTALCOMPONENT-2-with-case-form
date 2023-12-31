import React = require("react");
import { IInputs } from "./generated/ManifestTypes";
import Dashboard from "./modules/portal-member/Dashboard";
import CaseSummary from "./modules/portal-member/CaseSummary";
import CaseView from "./modules/portal-member/CaseView";
import ColumnPage from "./modules/portal-form/ColumnPage";
import App from "./modules/case-form/App";

export default class HelloWorld extends React.Component<
  ComponentFramework.Context<IInputs>,
  {}
> {
  private _props: ComponentFramework.Context<IInputs>;
  constructor(props: ComponentFramework.Context<IInputs>) {
    super(props);

    this._props = props;
  }

  public render() {
    return (
      <div>
        <Dashboard />
        <CaseSummary/>
        <CaseView/>
        <ColumnPage/>
        <App/>
      </div>
    );
  }
}
