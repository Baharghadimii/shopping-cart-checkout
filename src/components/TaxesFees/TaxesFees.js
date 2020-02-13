import React from 'react';
import { Row, Col } from 'react-bootstrap'

export default function TaxesFees(props) {
  return (
    <Row className="show-grid">
      <Col md={6}>Est. taxes & fees (based on 94085)</Col>
      <Col md={6}>{`$${props.taxes}`}</Col>
    </Row>
  )
}
