import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function EstimatedTotal(props) {
  return (
    <Row>
      <Col md={6}>
        <h2>Est. Total</h2>
      </Col>
      <Col md={6}>
        <h2>{`$${props.price}`}</h2>
      </Col>
    </Row>
  )
}
