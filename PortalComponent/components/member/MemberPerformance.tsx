import * as React from "react";
// import { Bar } from 'react-chartjs-2'
//import jsonData from './data.json';
//import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { IInputs } from "../../generated/ManifestTypes";

import axios from "axios";
import { ChoiceGroup, ThemeProvider, } from "@fluentui/react";

export interface IState {
  sourcereport: IData[];
  currentreport: IData[];
  report: IData[];
  options: IOption[];
  labels: string[];
}



export default class MemberPerformance extends React.Component<
  ComponentFramework.Context<IInputs>,
  IState
> {
  constructor(props: ComponentFramework.Context<IInputs>) {
    super(props);
    this._onChange = this._onChange.bind(this);

    //var entityId = "";
    if (window.location.hostname != "localhost") {
      // @ts-ignore
      //entityId = Xrm.Page.data.entity._entityId.guid;
    }

    this.state = {
      sourcereport: [],
      currentreport: [],
      report: [],
      options: [],
      labels: []
    };

  }



  private _getIncomesAndExpenses() {

  }



  public componentDidMount() {
    axios.get('/_api/sabs_annualreports').then(result => {
      var rept: IData[];
      var sourcereport: IData[];
      var currentreport: IData[];
      var lables: string[];
      var options: IOption[];
      var member: string;
      var producttype: string;
      var noofcases: number;
      //axios.get('/_api/incidents').then(result => {
      //axios.get("/_api/incidents")
      console.log(result.data.value);
      rept = [];
      sourcereport = [];
      currentreport = [];
      options = [];
      lables = [];
      options.push({ key: 'All', text: 'All' });
      result.data.value.map((item: any) => {
        if (item['_sabs_member_value']) {
          member = item['_sabs_member_value@OData.Community.Display.V1.FormattedValue'];
          producttype = item['_sabs_producttype_value@OData.Community.Display.V1.FormattedValue'];
          noofcases = item['sabs_noofcases'];

          var memberitem = sourcereport.find((r: IData) => r.label == member && r.type == producttype);
          if (memberitem)
            memberitem.value += noofcases;
          else
            sourcereport.push({ label: member, type: producttype, value: noofcases });

        }
        console.log(item);
      });
      console.log(sourcereport);

      sourcereport.map(item => {
        var memberitem = currentreport.find((r: IData) => r.label == item.label);
        if (memberitem)
          memberitem.value += item.value;
        else
          currentreport.push({ label: item.label, value: item.value });
        console.log(rept);

        var option = options.find((r: IOption) => r.key == item.type);
        if (!option)
          options.push({ key: item.type ? item.type : '', text: item.type ? item.type : '' });
      });

      currentreport.map(item => {
        lables.push(item.label);
      });
      console.log(currentreport);

      this.setState({ sourcereport: sourcereport, currentreport: currentreport, report: rept, options: options, labels: lables });
    });
  }

  // _onChange = (ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption) => {
  //   console.dir(option);
  // }

  _onChange = (
    event: { target: HTMLInputElement },
    option: IOption
  ) => {
    let { sourcereport } = this.state;
    var data = [];
    if (option.key == 'All')
      data = sourcereport;
    else
      data = sourcereport.filter(item => item.type == option.key);
    this.setState({ currentreport: data });
    console.log(data);
    console.log(event);

  };

  public render() {
    //let { options, currentreport } = this.state;
    let { options } = this.state;
    return (

      <ThemeProvider>        
        <table>
          <tr><td>
            Chart will display here
            {/* { currentreport.length > 0 &&
            <Bar data={
              // {
              //   labels,
              //   datasets: [
              //     {
              //       label: 'Dataset 1',
              //       data: currentreport.map((item) => item.value),
              //       borderColor: 'rgb(255, 99, 132)',
              //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
              //     },
              //     {
              //       label: 'Dataset 2',
              //       data: currentreport.map((item) => item.value),
              //       borderColor: 'rgb(53, 162, 235)',
              //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
              //     },
              //   ],
              // }

              {
                labels: currentreport.map((entry) => entry.label),
                datasets: [
                  {
                    label: '2022-2023',
                    data: currentreport.map((entry) => entry.value),
                    borderColor: 'rgb(54, 162, 235)', // Blue color
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                  },
                ],
              }
            }
            />
          } */}
          </td><td>Legend 1 <br />
              <ChoiceGroup
                name="Category"
                //className={styles.inlineflex}
                //electedKey={this.state.Category}
                options={options}

                onChange={(e: any, option: any) => {
                  console.log(e);
                  console.log(option);
                  this._onChange(e, option)
                }}
                required={true}
              />
            </td></tr>
        </table>
      </ThemeProvider>
    );
  }
}

interface IData {
  label: string;
  type?: string;
  value: number;
}

interface IOption {
  key: string;
  text: string;
}
