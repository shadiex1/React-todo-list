import React from "react";
import "./TodoItems.css";

const TodoItems = (props)=>{
    const {items , deleteItem}= props;
    let length =items.length;
    
    const listItem = length ? (
        items.map(item=>{
            return (
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={()=>deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (
        <p>Todo List is empty</p>
    )
    return(
        <div className="ListItems">
            <div >
                <span className="name title">name</span>
                <span className="age title">age</span>
                <span className="action title">action</span>
            </div>
            {listItem}
        </div>
    )
}

export default TodoItems;