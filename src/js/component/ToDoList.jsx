import React, {useState, useContext, useEffect} from 'react'
import { Context } from "../store/appContext";

export const ToDoList = () => {
	const [todos, setTodos] = useState([]);
	const [item, setItem] = useState("");
	const removeTodo =(index) =>{
		const removeArr = todos.filter((todos, i) => index !== i)
				setTodos(removeArr);
	}
	return (
		<div className="bigDiv">
	<div className="todo-container">
		<h1>To Do List</h1>
		<input type="text" value={item} onChange={(e) => setItem(e.target.value) }/>
		<button onClick={() => {
			if(item !== "") {
				setTodos([...todos, item])
				setItem("")
			}
		}}>click me</button>
			<div>
                {todos.map((item, index) => {
                    return (
                        <div key = {index}>
                            {item}
							<button onClick={()=> removeTodo(index)}>delete</button>
                        </div>
						
                    )
                })}
                </div> 

	</div>
	</div>
  );

}


export default ToDoList;