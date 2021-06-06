// import Libraries
import React from "react";
import {connect} from "react-redux";
import {hot} from "react-hot-loader";
import "./Header.scss";

export class Header extends React.Component {
  // render
  constructor(props){
    super(props);
    this.openMenu = this.openMenu.bind(this);
    this.state = {
        mobileMenu : false,
    }
  }
  componentDidMount(){
    
  }

  openMenu(){
    if(this.state.mobileMenu === false){
        this.setState({
            ...this.state,
            mobileMenu : true
        })
    }else{
        this.setState({
            ...this.state,
            mobileMenu : false
        })
    }
  }

  render() {
    return (
      <div className="header_page">
           
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {auth: state.auth}
}
export default hot(module)(connect(mapStateToProps)(Header))