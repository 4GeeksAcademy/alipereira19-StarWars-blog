const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],

		},
		actions: {
			getPeople: async () => {
				try {
					console.log("estoy en getPeople");

					const response = await fetch("https://www.swapi.tech/api/people")
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
		}
	};
};

export default getState;
