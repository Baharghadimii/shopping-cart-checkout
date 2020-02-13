import React, { useState } from 'react';
import { Button, Collapse, Media, Row, Col } from 'react-bootstrap';

export default function ItemDetails(props) {
  const [state, setState] = useState({
    open: false
  })
  return (
    <div>
      <Button
        className="item-details-button"
        variant='link'
        onClick={() => setState({ open: !state.open })}>
        {state.open === false ? 'See' : 'Hide'} item Details
        {state.open === false ? ' +' : ' -'}
      </Button>
      <Collapse in={state.open}>
        <div>
          <Media>
            <Media.Left>
              <img
                width={100}
                height={100}
                alt='thumbnail'
                src="">
              </img>
            </Media.Left>
            <Media.Body>
              <p>Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red</p>
              <Row className="show-grid">
                <Col md={6}>
                  <strong>{`$${props.price}`}</strong>
                  <br />
                  <strong className='price-strike'>{`$${props.price}`}</strong>
                </Col>
                <Col md={6}> Qty: 1</Col>
              </Row>
            </Media.Body>
          </Media>
        </div>
      </Collapse>
    </div >
  )
}
