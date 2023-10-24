import PropTypes from 'prop-types';
import React from "react";
import WebDataRocks from "@webdatarocks/webdatarocks";

export class Pivot extends React.Component {

	constructor(props) {
		super(props);
		// create a ref to store the DOM element	
	    this.DOMNodeRef = React.createRef();
	  }
	
	componentDidMount() {
		const DOMNode = this.DOMNodeRef.current;
		this.webdatarocks = new WebDataRocks({
			...this.props,
			container: DOMNode
		});
	}
	
	shouldComponentUpdate() {
		return false;
	}
	
	componentWillUnmount() {
		this.webdatarocks.dispose();
	}

	render() {
		return <div ref={this.DOMNodeRef}>Pivot</div>;
	}
}

Pivot.propTypes = {
	beforetoolbarcreated: PropTypes.func,
	cellclick: PropTypes.func,
	celldoubleclick: PropTypes.func,
	customizeCell: PropTypes.func,
	datachanged: PropTypes.func,
	dataerror: PropTypes.func,
	datafilecancelled: PropTypes.func,
	dataloaded: PropTypes.func,
	fieldslistclose: PropTypes.func,
	fieldslistopen: PropTypes.func,
	filteropen: PropTypes.func,
	fullscreen: PropTypes.func,
	global: PropTypes.object,
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	loadingdata: PropTypes.func,
	loadinglocalization: PropTypes.func,
	loadingreportfile: PropTypes.func,
	localizationerror: PropTypes.func,
	localizationloaded: PropTypes.func,
	openingreportfile: PropTypes.func,
	querycomplete: PropTypes.func,
	queryerror: PropTypes.func,
	ready: PropTypes.func,
	report: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	reportchange: PropTypes.func,
	reportcomplete: PropTypes.func,
	reportfilecancelled: PropTypes.func,
	reportfileerror: PropTypes.func,
	reportfileloaded: PropTypes.func,
	runningquery: PropTypes.func,
	toolbar: PropTypes.bool,
	update: PropTypes.func,
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Pivot;