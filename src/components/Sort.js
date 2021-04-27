import React from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function Sort() {
    return (
      <div>
  <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">A-Z</Button>
  <Button variant="secondary">Z-A</Button>
</ButtonGroup>
      </div>
    );
  }

  export default Sort;