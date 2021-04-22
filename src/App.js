import React from "react";
import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    this.setState({ employees: data.results });
  };

  render() {
    console.log(this.state);
    return (
      this.state.employees.map((emp) => {
        return <h1> {emp.gender}Employees go here and other components{emp.phone}</h1>
        
      })
    );
  }
}

export default App;