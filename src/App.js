import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Subtotal from './components/Subtotal/Subtotal';
import './App.scss';


function App() {

  const [state, setstate] = useState({
    total: 100
  });
  return (
    <div className="container">
      <Container id="purchase-card">
        <Subtotal price={state.total.toFixed(2)} />
      </Container>

    </div>
  );
}

export default App;
