import React from "react";
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import "./App.css";
import Crud from "./components/Crud";
import Header from "./components/Header";

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="App">
        <Header />
        <Crud />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
