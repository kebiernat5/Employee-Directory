import axios from "axios";

export default {
  // Gets all users
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  }
};

// reduceEmployeeTo1(){
//   //filter here, make a variable
//   this.state.employees.filter
//   this.setState({employees: filteredArrayvariable })
// }

// render() {
//   console.log(this.state);
//   return (
//     this.state.employees.map((emp) => {
//       return <h1> {emp.gender}Employees go here and other components</h1>
      
//     })
//   );
// }
// }
