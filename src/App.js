import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabulator from "tabulator-tables"; //import Tabulator library
import "tabulator-tables/dist/css/tabulator.min.css"; //import Tabulator stylesheet




class App extends React.Component {
  componentDidMount() {

    var table = new Tabulator("#example-table", {
      height: "311px",
      movableRows: true,
      groupBy: "Frequency",
      groupValues: [["Annual", "Monthly", "On-Demand"]],
      columns: [
        { rowHandle: true, formatter: "handle", headerSort: false, frozen: true, width: 30, minWidth: 30 },
        { title: "Name", field: "name", width: 150 },
        { title: "Category", field: "category" },
        { title: "Steps", field: "steps" },
        { title: "Info", field: "info", align: "center", width: 120 },
        // { title: "Favourite Color", field: "col" },
        // { title: "Date Of Birth", field: "dob", align: "center", sorter: "date" },
        // { title: "Driver", field: "car", align: "center", formatter: "tickCross" },
      ],
      data: data,
    });
  }

  render() {
    return (
      <div className="App" >
        <h1>Test</h1>
        <div id="example-table"></div>

      </div>
    )
  }
}


export default App;
