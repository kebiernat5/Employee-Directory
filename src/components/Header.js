import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <div>
      <Jumbotron>
        <h1>Employee Directory</h1>
        <p>
          Welcome to our employee database. You can search for our employees by name and sort them alphabetically.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default Header;
