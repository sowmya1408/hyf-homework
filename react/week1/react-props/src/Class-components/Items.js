import React, { Component } from 'react';

class Items extends Component {
	render() {
		return (
			<ul>
				<li>
					* {this.props.description}, {this.props.deadlineDate}
				</li>
			</ul>
		);
	}
}

export default Items