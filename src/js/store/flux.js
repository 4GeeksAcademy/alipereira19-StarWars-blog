const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			properties: [],
			vehicles: [],
			vehicleProperties: [],
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
			getMorePeople: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/people/${id}`)
					if (!response.ok) {
						throw new Error("No sirvió")
					}
					const data = await response.json();
					console.log("esta es la otra data", data);

					const store = getStore()
					setStore({ ...store, properties: data.result })
					console.log(data);

				} catch (error) {
					console.error(error);

				}
			},
			getVehicle: async (page) => {
				try {
					console.log("estoy en getVehicle");

					const response = await fetch(`https://www.swapi.tech/api/vehicles?page=${page}&limit=10`)
					console.log("Este es el response de vehiculos", response);

					if (!response.ok) {
						throw new Error("No sirvió")

					}
					const data = await response.json();
					console.log("esta es la data de vehiculos", data);

					const store = getStore()
					setStore({ ...store, vehicles: data.results })
					console.log("estos son los vehiculos", store.vehicules)

				} catch (error) {
					console.error(error);

				}
			},
			getMoreVehicles: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`)
					if (!response.ok) {
						throw new Error("No sirvió")
					}
					const data = await response.json();
					console.log("esta es la otra data", data);

					const store = getStore()
					setStore({ ...store, vehicleProperties: data.result })
					console.log(data);

				} catch (error) {
					console.error(error);

				}
			},

		}
	};
};

export default getState;
