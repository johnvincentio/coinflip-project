//

/* eslint-disable react/prefer-stateless-function */

import React from 'react';

class Coin extends React.Component {

	render() {
		console.log('Coin::render(); this.props ', this.props);

		return (
			<div>
				Coin
			</div>
		);
	}
}

export default Coin;
