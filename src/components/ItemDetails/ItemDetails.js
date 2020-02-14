import React, { useState } from 'react';
import { Button, Collapse, Media, Jumbotron, Row, Col } from 'react-bootstrap';
import './ItemDetails.scss'

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
          <Jumbotron className="jumb">
            <Media>
              <img
                width={100}
                height={100}
                className="jumb-img"
                alt='thumbnail'
                src="https://secure.img1-fg.wfcdn.com/im/43205765/resize-h800%5Ecompr-r85/9181/91814465/default_name.jpg">
              </img>
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
          </Jumbotron>

        </div>
      </Collapse>
    </div >
  )
}
