import React, { useState } from 'react';
import { Button, Collapse, Form, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default function PromoCode(props) {
  const [state, setState] = useState({
    open: false,
    value: ''
  })
  return (
    <div>
      <Button
        className="promo-code-button"
        variant="link"
        onClick={() => setState({ open: !state.open })}>
        {state.open === false ? 'Apply ' : 'Hide '}promo code
        {state.open === false ? " +" : ' -'}
      </Button>

    </div>
  )
}
