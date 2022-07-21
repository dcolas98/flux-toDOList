const getState = ({
	getStore,
	getActions,
	setStore
}) => {
	return {
		store: {
			list: []
		},
		actions: {
			removeTodo: (index) => {
				const store = getStore();
				const removeArr = store.list.filter((list, i) => index !== i)
				fetch("https://assets.breatheco.de/apis/fake/todos/user/dcolas",{
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(removeArr),
				})
				.then((response) => {
					response.status === 200 ? setStore({list: removeArr})
					: "";
				})
				.catch((error) => console.log("error", error));

			},
			addItem: (list) => {
				fetch("https://assets.breatheco.de/apis/fake/todos/user/dcolas",{
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(list),
				})
				.then((response) => {
					response.status === 200 ? setStore({list: list}) : "";
				})
				.catch((error) => console.log("error", error));

			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({
					demo: demo
				});
			}
		}
	};
};

export default getState;