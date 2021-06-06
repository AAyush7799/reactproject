// import Libraries
import React from "react";
import {connect} from "react-redux";
import {hot} from "react-hot-loader";
import "./Popup.scss";
import constants from "../../constants";

export class Popup extends React.Component {
  // render
  constructor(props){
    super(props);
    this.redirect = this.redirect.bind(this);
    this.yesFunc = this.yesFunc.bind(this);
    this.state = {
        mobileMenu : false,
    }
  }
  componentDidMount(){
    
  }

  redirect(){
    this.props.dispatch({
        type: constants("profile").reducers.isBuilderVisible.loading,
    });
    window.location.href = this.props.profile.popupUrl
  }
  yesFunc(){
    this.props.dispatch({
        type: constants("profile").reducers.isPopupShow.success,
        payload : {
            show : false,
            popupUrl : "",
        }
    });
    location.reload();
  }

  render() {
    let menuDisplay = {
        display : (this.props.profile.isPopupShow === true)  ? "block" : "none"
    }
    return (
      <div className="popup_page" style={menuDisplay}>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
        profile:  state.profile,
    }
}
export default hot(module)(connect(mapStateToProps)(Popup))