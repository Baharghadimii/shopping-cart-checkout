import React, { useState } from 'react';
import { Button, Collapse, Well, Media, Row, Col } from 'react-bootstrap';

export default function ItemDetails() {
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
    </div >
  )
}
