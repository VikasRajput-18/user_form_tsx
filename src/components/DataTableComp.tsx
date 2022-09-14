import  { useEffect } from "react";
import $ from "jquery";
import { dataList } from "./data";
import DataList from "./DataList";

const DataTableComp = ({id}: {id:number}) => {
  useEffect(() => {
    $(document).ready(function () {
      $(`#example${id}`).DataTable();
    });
  }, []);

  return (
    <div className="MainDiv mt-5">
      <div className="jumbotron text-center bg-sky"></div>

      <div className="container">
        <table id={`example${id}`} className="display">
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
            {dataList?.map((data, ind: number) => {
              return <DataList key={ind} data={data} />;
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
};
export default DataTableComp;
