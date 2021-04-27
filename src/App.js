import React from "react";
import API from "./utils/API";
import EmployeeCard from "./components/EmployeeCard";
import Header from "./components/Header";
import Search from "./components/Search";
import Sort from "./components/Sort";

class App extends React.Component {
  state = {
    employees: [],
    search: "",
    filteredEmployees: []
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    // console.log(data);
    const employees = data.results.map((item) => ({
      name: `${item.name.first} ${item.name.last}`,
      email: item.email,
      phone: item.cell,
      dob: item.dob.date,
      image: item.picture.large,
      thumbimage: item.picture.thumbnail,
    }));
    this.setState({ employees });
    this.setState({ filteredEmployees: employees });
  };

  
  filterEmployees = (employee) => {
    // console.log(employee)
    for (const key in employee) {
      if (key === "image") continue;
      if (employee.name.includes(this.state.search)) {
        return true;
      }
    }
    return false;
  };
  
  handleChange = async (event) => {
    await this.setState({search: event.target.value.toLowerCase()})
    const input = this.state.search
    const newArray = this.state.employees.filter(item => {
      console.log(item.name, input)
      return item.name.toLowerCase().includes(input)
    })
    console.log(newArray)
    this.setState({filteredEmployees: newArray})
  }

// if (this.state.sortParam !== prevState.sortParam){
//   this.sortEmployees();
// }

// if (this.state.sortDirection !== prevState.sortDirection){
//   this.sortEmployees();
// }

  // sortEmployees = () => {
  //   const sortParamArr = this.state.sortParam.split('.');
  //   const sortDirectionSwitch = this.state.sortDirection==="sortDown"? 1:-1;
  //   const sortedEmployees = this.state.employees.sort((a,b) => {
  //     return a[sortParamArr[0]][sortParamArr[1]] < b[sortParamArr[0]][sortParamArr[1]]? -1*sortDirectionSwitch: 1*sortDirectionSwitch;
  //   })
  //   const sortedFilteredEmployees = this.state.filterEmployees.sort((a,b) => {
  //     return a[sortParamArr[0]][sortParamArr[1]] < b[sortParamArr[0]][sortParamArr[1]]? -1*sortDirectionSwitch: 1*sortDirectionSwitch;
  //   })
  //   this.setState({...this.state, employees: sortedEmployees, filterEmployees: sortedFilteredEmployees})
  // }
  
  // sortEmployees = async () => {
  //   const newArray = this.state.employees.sort(lastname) => a.lastname.localeCompare(b.lastname)
  //   console.log(newArray)
  //   this.setState({filteredEmployees: newArray})
  // };



  // compareLastNames( lastname ) {
  //   const lastName = 
  //   users.sort((a, b) => a.lastname.localeCompare(b.lastname))
  //   if ()
  // }


  render() {
    const { employees } = this.state;
    console.log(this.state);
    const styles = {
      CardContainer:{
        // width: "90%",
        display: "flex",
        flexWrap: "wrap",
        backgroundColor: "blue",
        padding: "5px",
        justifyContent: "space-around"
      }
    }
    return (
      <>
     <Header />
     <Sort sortEmployees={this.sortEmployees}/>
      <Search handleChange={this.handleChange}/>
     <div style={styles.CardContainer}>
          {employees.length === 0 ? (
            <h2>No Employees!</h2>
          ) : (
            this.state.filteredEmployees.map((employee) => (
              <EmployeeCard employee={employee}/>
            ))
          )}{" "}
          </div>
     </>
    );
  }
  
  // render() {
    //   return (
      //     this.state.employees.map((emp) => {
        //       return <h1> {emp.gender}Employees go here and other components{emp.phone}</h1>
        
        //     })
        //   );
        // }
      }

export default App;
