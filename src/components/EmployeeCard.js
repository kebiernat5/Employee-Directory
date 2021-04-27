import React from "react";
import Card from "react-bootstrap/Card";

function EmployeeCard({ employee }) {
  const styles = {
    CardContainer:{
      padding: "10px",
    }
  }
  return (
    
    <div style={styles.CardContainer}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={employee.image} />
        <Card.Body>
          <Card.Title>{employee.name}</Card.Title>
          <Card.Text>
            {employee.phone}<br></br>
            {employee.email}<br></br>
            {employee.dob}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  
  );
}

export default EmployeeCard;


