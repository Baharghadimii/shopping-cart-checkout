import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees from './components/TaxesFees/TaxesFees';
import './App.scss';


function App() {

  const [state, setstate] = useState({
    total: 100,
    pickupSavings: -3.85,
    taxes: 0
  });
  return (
    <div className="container">
      <Container id="purchase-card">
        <Subtotal price={state.total.toFixed(2)} />
        <PickupSavings price={state.pickupSavings} />
        <TaxesFees taxes={state.taxes.toFixed(2)} />
      </Container>

    </div>
  );
}

export default App;
