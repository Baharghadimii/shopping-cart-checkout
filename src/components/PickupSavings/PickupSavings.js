import React from 'react';
import { Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

const styles = {
  pickupSavings: {
    textDecoration: 'underline'
  },
  totalSavings: {
    color: 'red',
    fontWeight: 800
  }
}

export default function PickupSavings(props) {
  return (
    <Row className="show-grid">
      <Col md={6}>
        <OverlayTrigger placement="bottom" overlay={
          <Tooltip id='tooltip'>
            <p>Picking up your order in the stores helps cut costs, and we pass the savings on to you.</p>
          </Tooltip>
        }>
          <div style={styles.pickupSavings}>Pickup Savings</div>
        </OverlayTrigger>

      </Col>
      <Col style={styles.totalSavings}>{`$${props.price}`}</Col>
    </Row>


  )
}

