import React from "react";
// import {store} from "Store";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import {hot} from "react-hot-loader";



class Root extends React.Component {
	// render
	constructor() {
		super();
	}

	render() {
		return (
			<div className="approot" id="approot">
				{this.props.children}
				<div className="root_main_classs"/>
			</div>
		);
	}

}

export default hot(module)(Root);