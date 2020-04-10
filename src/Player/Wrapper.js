import React, {Component} from 'react';
import ReactPlayer from 'react-player'


class Wrapper extends Component {

	constructor(props) {
		super(props);
		console.log('hello');
	}

	render() {
		return (
			<div style={this.props.style}>
				<ReactPlayer controls={true} url={this.props.url} playing/>
			</div>
		);
	}
}

export default Wrapper;



