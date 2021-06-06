// import Libraries
import React from "react";
import {connect} from "react-redux";
import {hot} from "react-hot-loader";

import BasicPage from "../home/index";
import constants from "../../../../constants";

class BasicMain extends React.Component {
  // render
  constructor(props){
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.state = {
        dimensions: {
            width: window.innerWidth,
            height: window.innerHeight
        },
    }
  }
  componentDidMount(){
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  render(){
    
    return (
      <div className="basic_main">
        <div className="basic_page_cont">
            <BasicPage
                state={this.state}
            />
        </div>
      </div>
    );
  }
    updateWindowDimensions() {
        this.setState({
            ...this.state,
            dimensions: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        });
    }
}

function mapStateToProps(state) {
    return {
      auth: state.auth,
    }
}
export default hot(module)(connect(mapStateToProps)(BasicMain))
