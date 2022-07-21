import React, {useState, useContext, useEffect} from 'react'
import { Context } from "../store/appContext";

export const ToDoList = () => {
	const { store, actions } = useContext(Context);
	const [todos, setTodos] = useState([]);
	const [item, setItem] = useState("");
	return (
		<div className="bigDiv">
	<div className="todo-container">
		<h1>To Do List</h1>
		<input type="text" onChange={(e) => setItem(e.target.value) }/>
		<button onClick={() => {
				actions.addItem([...store.list, { label: item, done: false} ])

		}}>click me</button>
			<div>
                {store.list.map((item, index) => {
                    return (
                        <div key = {index}>
                            {item.label}
							<button onClick={()=> actions.removeTodo(index)}>delete</button>
                        </div>
						
                    )
                })}
                </div> 

	</div>
	</div>
  );

}


export default ToDoList;