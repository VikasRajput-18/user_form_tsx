import React from "react";
import $, { data } from "jquery";
import { dataList } from "./data";

class DataTableComp extends React.Component {
  componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }
  render() {
    //Datatable HTML
    return (
      <div className="MainDiv mt-5">
        <div className="jumbotron text-center bg-sky"></div>

        <div className="container">
          <table id="example" className="display">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {dataList.map((data, ind : number) => {
                return (
                  <tr key={ind}>
                    <td>{data.name}</td>
                    <td>{data.position}</td>
                    <td>{data.office}</td>
                    <td>{data.age}</td>
                    <td>{data.start_date}</td>
                    <td>{data.salary}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
export default DataTableComp;
