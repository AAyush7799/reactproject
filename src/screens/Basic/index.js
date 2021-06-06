// import Libraries
import React from "react";
// app component
import BasicMain from "./components/main/index";
import {hot} from "react-hot-loader";

class Basic extends React.Component {
  // render
  render() {
    return (
      <div className="basic_main_cont" id="basic_main_cont">
		    <BasicMain/>
      </div>
    );
  }
}
export default hot(module)(Basic)
