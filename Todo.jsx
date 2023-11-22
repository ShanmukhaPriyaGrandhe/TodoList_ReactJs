import React from "react";
import { useState } from "react";

const Todo = () => {
  let [state, setState] = useState();
  let [todos, setTodos] = useState([]);
  let[edited, setEdited] = useState(true);
  let [ind,setInd] = useState(0)

  let handleClick = () => {
    if(edited){
        setTodos(todos.concat(state));
        setState("");
    }
    else{
        todos.splice(ind,1,state)
        setEdited(true)
        setState("");
    }
    // setTodos([...todos,state ])
  };

  let handleDelete = (index) => {
    setTodos(
      todos.filter((element, ind) => {
        console.log(element);
        return index != ind;
    }));
  };

  let handleEdit = (index)=>{
    setState(todos[index])
    setEdited(false)
    setInd(index)
  }

  return (
    <div >
      <input
        type="text"
        placeholder="Enter todo"
        name="task"
        value={state}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <button onClick={handleClick}> Add</button>
      <div>
        <ul>
          {todos.map((ele, index) => {
            return (
              <div key={index}>
                <li>{ele}</li>
                <button onClick={()=>{handleDelete(index)}}>Delete</button>&nbsp;
                <button onClick={()=>{handleEdit(index)}}>Edit</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;