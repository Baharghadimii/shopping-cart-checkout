import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode';

import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions'

import './App.scss';
import { func } from 'prop-types';


function App(props) {

  const [state, setState] = useState({
    total: 200,
    pickupSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0,
    disabledPromoButton: false,
  });
  useEffect(() => {
    setState({
      ...state,
      taxes: (state.total + state.pickupSavings) * 0.0875,
      estimatedTotal: state.total + state.pickupSavings + ((state.total + state.pickupSavings) * 0.0875)
    })
  })
  const giveDiscountHandler = () => {
    if (this.props.promoCode === 'DISCOUNT') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      }, function () {
        this.setState({
          disabledPromoButton: true
        })
      })
    }
  }
  return (
    <div className="container">
      <Container id="purchase-card">
        <Subtotal price={state.total.toFixed(2)} />
        <PickupSavings price={state.pickupSavings} />
        <TaxesFees taxes={state.taxes.toFixed(2)} />
        <hr />
        <EstimatedTotal price={state.estimatedTotal.toFixed(2)} />
        <ItemDetails price={state.estimatedTotal.toFixed(2)} />
        <hr />
        <PromoCode promoCode={''} isDisabled={state.disabledPromoButton} giveDiscount={giveDiscountHandler} />
      </Container>
    </div>
  );
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { handleChange })(App);
