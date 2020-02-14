import React, { useState } from 'react';
import { Button, Collapse, Form, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './PromoCode.scss';
import { connect } from 'react-redux';
import { handleChange } from '../../actions/promoCodeActions';

function PromoCode(props) {
  const [state, setState] = useState({
    open: false
  })

  const handleChange = e => {
    props.handleChange(e)
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
          <Row className="show-grid">
            <Col md={12}>
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
            </Col>
          </Row>
        </div>
      </Collapse>
    </div>
  )
}
const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps, { handleChange })(PromoCode)

