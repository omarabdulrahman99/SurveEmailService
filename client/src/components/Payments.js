import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {

	render(){

		return (

			<StripeCheckout 
				name="EServe"
				description="$5 for 5 email credits"
				amount={500}//amount required to pay. takes in cents. so $5.
				token={token => this.props.handleToken(token)}//this is the token stripe sends back to us.
				stripeKey={'pk_test_hUB40ustFiWaQnMCdG9fokVM'}
			>

				<button className="btn">
					Add Credits
				</button>
			</StripeCheckout>

			);
	}

}


export default connect(null, actions)(Payments);