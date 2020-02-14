import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import EstimatedTotal from './components/EstimatedTotal/EstimatedTotal';
import ItemDetails from './components/ItemDetails/ItemDetails';
import PromoCode from './components/PromoCode/PromoCode';
import './App.scss';


function App() {

  const [state, setstate] = useState({
    total: 100,
    pickupSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0
  });
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
        <PromoCode />
      </Container>
    </div>
  );
}

export default App;
