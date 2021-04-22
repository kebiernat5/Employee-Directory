class NameFinder extends React.Component{
    state = {
      name: "",
      users: [],
      order: "ascend" 
    }
  }

  handleOrderFlip= () => {
    this.setState({ order: "descend" })
  }

  //do something to populate all the users