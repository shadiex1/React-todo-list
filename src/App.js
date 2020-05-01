import React from 'react';
import TodoItems from "./components/TodoItems/TodoItems"
import AddItem from "./components/AddItem/AddItem"

class App extends React.Component {
  state={
    items:[
      {id:1,name:"shady",age:20},
      {id:2,name:"amir",age:25},
      {id:3,name:"masl7y",age:30}
    ]
  }

  deleteItem=(id)=>{
    let items= this.state.items.filter(item=>{
      return item.id !== id 
    })
    this.setState({
      items:items
    })
  }
  addItem = (item)=>{
    item.id=Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items})
  }
  render(){
    return (
      <div className="App container">
        <h1 className="text-center"> todoList App</h1>
        
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}

export default App;


