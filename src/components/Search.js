import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function Search ({ handleChange }) {
  return (<InputGroup className="mb-3">
  <Form.Control
    placeholder="Recipient's username"
    aria-label="Recipient's username"
    aria-describedby="basic-addon2"
    onChange={handleChange}
  />
</InputGroup>)
}


export default Search;