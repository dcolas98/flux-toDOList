// import React from "react";

// //include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

// //create your first component
// const Home = () => {
// 	return (
// 		<div>
// 			<h1 className="mt-5">Todos</h1>
//     <ul>
//         <li>Make bed</li>
//         <li>Wash my hands</li>
//         <li>Eat</li>
// 		<li>Walk the dog</li>
//     </ul>
// 		</div>
// 	);
// };

// function addTd = () => {
// 	return ( 
		
// 	)
// }

// export default Home;


import React from "react";
import ToDoList from "../component/ToDoList.jsx";


//create your first component
export const Home = () => {
	return (
		<>
		<ToDoList />
		</>
	);
};

