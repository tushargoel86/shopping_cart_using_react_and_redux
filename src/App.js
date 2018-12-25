import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import {connect} from 'react-redux';

import './App.css';
import SubTotal from './components/SubTotal';
import PickupSavings from './components/PickupSavings';
import TaxesAndFees from './components/TaxesAndFees';
import EstimatedTotal from './components/EstimatedTotal';
import ItemDetails from './components/ItemDetails'
import Promocode from './components/Promocode';

import { applyPromocode, savings } from './actions/promoCodeActions';

class App extends Component {

  constructor() {
    super();
    this.state = {
      price: 1000,
      totalSavings: -140,
      taxesAndFees: 0,
      estimatedTotal: 0,
      disablePromoButton: false
    }
  }


  componentDidMount() {
    let taxes = (.05 * (this.state.price + this.state.totalSavings));
    this.setState({ taxesAndFees: taxes },
      function () {
        this.setState({
          estimatedTotal: (this.state.price + this.state.totalSavings
            - this.state.taxesAndFees)
        })
      });
  }

  applyDiscount() {
    if (this.props.promocode === 'DISCOUNT') {
      this.setState({estimatedTotal: (this.state.estimatedTotal * .9)},
        function() {
          this.setState({disablePromoButton : true})
        });
    }
  }

  render() {
    return (
      <div className="container">
          <Grid className="purchase-cart">
            <SubTotal price={this.state.price.toFixed(2)} />
            <br />
            <PickupSavings totalSavings={this.state.totalSavings.toFixed(2)} />
            <TaxesAndFees taxesAndFees={this.state.taxesAndFees.toFixed(2)} />
            <hr />
            <EstimatedTotal estimatedTotal={this.state.estimatedTotal.toFixed(2)} />
            <ItemDetails price={this.state.price} estimatedTotal={this.state.estimatedTotal.toFixed(2)} />
            <br />
            <Promocode
              giveDiscount={this.applyDiscount.bind(this)}
              isDisabled={this.state.disablePromoButton}
            />
          </Grid>
      </div>
    );
  }
}

const mapStateToProp = state => ({
  promocode : state.promoCode.value,
  totalSavings : state.promoCode.savings
});

export default connect(mapStateToProp, { applyPromocode, savings })(App);
