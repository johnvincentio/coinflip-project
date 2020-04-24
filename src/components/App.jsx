//

import React from 'react';

import Coin from './Coin';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			heads: 0,
			tails: 0
		};
	}

	componentDidMount() {
		this.flipCoin();
	}

	flipCoin = () => {
		const coinHeads = Math.floor(Math.random() * 2) === 0;
		console.log('coinHeads ', coinHeads);

		this.setState(prevState => {
			if (coinHeads) {
				return ({ coinHeads, heads: prevState.heads + 1 });
			}
			return ({ coinHeads: false, tails: prevState.tails + 1 });
		});
	}

	render() {
		console.log('App::render(); this.state ', this.state, ' this.props ', this.props);
		const total = this.state.heads + this.state.tails
		const status = `Out of ${total} flips, there have been ${this.state.heads} heads and ${this.state.tails} tails`;
		return (
			<div className="app">
				<div className="app--title">Let&quot;s flip a coin</div>
				<Coin />
				<div>
					<button type="button" className="app--button" onClick={this.flipCoin}>
					Flip the Coin
					</button>
				</div>
				<div className="app-status">{status}</div>
			</div>
		);
	}
}

export default App;
