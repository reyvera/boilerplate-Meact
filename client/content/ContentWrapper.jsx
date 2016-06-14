import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class ContentWrapper extends TrackerReact(React.Component) {
	render() {
		return (
			<div>
				<h1>Content goes here!</h1>
			</div>
		)
	}
}
