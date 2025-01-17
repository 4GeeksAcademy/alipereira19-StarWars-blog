const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			properties: [],
		},
		actions: {
			getPeople: async (page) => {
				try {
					console.log("estoy en getPeople");

					const response = await fetch(`https://www.swapi.tech/api/people?page=${page}&limit=10`)
					console.log("Este es el response", response);

					if (!response.ok) {
						throw new Error("No sirvió")

					}
					const data = await response.json();
					console.log("esta es la data", data);

					const store = getStore()
					setStore({ ...store, people: data.results })
					console.log(data);

				} catch (error) {
					console.error(error);

				}
			},
			getMorePeople: async () => {
				try {
					const response = await fetch("https://www.swapi.tech/api/people/1")
					if (!response.ok) {
						throw new Error("No sirvió")
					}
					const data = await response.json();
					console.log("esta es la otra data", data);

					const store = getStore()
					setStore({ ...store, properties: data.results })
					console.log(data);

				} catch (error) {
					console.error(error);

				}
			},
		}
	};
};

export default getState;
