import React from "react";
import {store} from "Store";
import {connect} from "react-redux";

import "./stylesheets/sitemap.scss";

class Sitemap extends React.Component {
	// render
	constructor() {
		super();
	}

	componentDidMount() {

	}


	render() {
		return (
			<div>
				<h1>Sitemap</h1>
			</div>
		);
	}

}

// export the connected class
function mapStateToProps(state) {
	return {
		home: state.home,
		page: Number(state.routing.locationBeforeTransitions.query.page) || 1
	};
}

export default connect(mapStateToProps)(Sitemap);