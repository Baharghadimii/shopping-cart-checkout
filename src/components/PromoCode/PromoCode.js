import React, { useState } from 'react';
import { Button, Collapse, Form, Row, Col, Jumbotron, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './PromoCode.scss';
export default function PromoCode(props) {
  const [state, setState] = useState({
    open: false,
    value: ''
  })
  const handleChange = () => {

  }
  return (
    <div>
      <Button
        className="promo-code-button"
        variant="link"
        onClick={() => setState({ open: !state.open })}>
        {state.open === false ? 'Apply ' : 'Hide '}promo code
        {state.open === false ? " +" : ' -'}
      </Button>
      <Collapse in={state.open}>
        <div className="div">
          {/* <Jumbotron > */}
          <Row className="show-grid">
            <Form className="form">
              <FormGroup controlId="formInlineName">
                <Form.Label style={{ fontWeight: '700' }}>Promo Code</Form.Label>
                <FormControl
                  type="text"
                  placeholder='Enter Promo Code'
                  value={props.promoCode}
                  onChange={handleChange}>
                </FormControl>
                <Button
                  block
                  variant='success'
                  className='btn-round btn-f'
                  disabled={props.isDisabled}
                  onClick={props.giveDiscount}>
                  Apply
                  </Button>
              </FormGroup>
            </Form>
          </Row>
          {/* </Jumbotron> */}
        </div>
      </Collapse>
    </div>
  )
}
