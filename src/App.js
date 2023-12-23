import React,{Component} from "react";
import Todolistitems from "./Components/Todolistitems/Todolistitems";
import Additems from "./Components/Additems/Additems";

class App extends Component {
  state={
    items:[
      {id:1,name:'mohamed',age:23},
      {id:2,name:'ahmed',age:25},
      {id:3,name:'ali',age:27},
    ]
  }
  deleteItem=(id)=>{
    //  let items=this.state.items.filter((item)=> 
    //  {return item.id!==id}
    //  );
    //  this.setState({items:items});

    let items=this.state.items;
    let i=items.findIndex((item)=> item.id===id);
    items.splice(i,1);
     this.setState({items:items});

  }

  addItem=(item)=>{
    item.id=Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items:items});
  }
  render() {
  return (
    <div className="App container">
      <h1 className="text-center">ToDo List</h1>
       <Todolistitems items={this.state.items} deleteItem={this.deleteItem}  />
       <Additems  addItem={this.addItem}/>
   
    </div>
  );
  }
}

export default App;
