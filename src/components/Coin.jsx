//

/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import PropTypes from 'prop-types';

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

Coin.propTypes = {
	heads: PropTypes.bool.isRequired
};

export default Coin;
