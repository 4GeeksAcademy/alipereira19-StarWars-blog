const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			properties: [],
			vehicles: [],
			vehicleProperties: [],
			starships: [],
			starshipProperties: [],
			planets: [],
			planetsProperties: [],
			species: [],
			speciesProperties: [],
			favorites: [],
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
			getStarships: async (page) => {
				try {
					console.log("estoy en getStarships");

					const response = await fetch(`https://www.swapi.tech/api/starships?page=${page}&limit=10`)
					console.log("Este es el response de starships", response);

					if (!response.ok) {
						throw new Error("No sirvió")

					}
					const data = await response.json();
					console.log("esta es la data de starships", data);

					const store = getStore()
					setStore({ ...store, starships: data.results })
					console.log(data);

				} catch (error) {
					console.error(error);

				}
			},
			getMoreStarships: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/starships/${id}`)
					if (!response.ok) {
						throw new Error("No sirvió")
					}
					const data = await response.json();
					console.log("esta es la otra data de starships", data);

					const store = getStore()
					setStore({ ...store, starshipProperties: data.result })
					console.log(data);

				} catch (error) {
					console.error(error);

				}
			},
			getPlanets: async (page) => {
				try {
					console.log("estoy en planets");

					const response = await fetch(`https://www.swapi.tech/api/planets?page=${page}&limit=10`)
					console.log("Este es el response de planets", response);

					if (!response.ok) {
						throw new Error("No sirvió")

					}
					const data = await response.json();
					console.log("esta es la data de planets", data);

					const store = getStore()
					setStore({ ...store, planets: data.results })
					console.log(data);

				} catch (error) {
					console.error(error);

				}
			},
			getMorePlanets: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/planets/${id}`)
					if (!response.ok) {
						throw new Error("No sirvió")
					}
					const data = await response.json();
					console.log("esta es la otra data de planets", data);

					const store = getStore()
					setStore({ ...store, planetProperties: data.result })
					console.log(data);

				} catch (error) {
					console.error(error);

				}
			},
			getSpecies: async (page) => {
				try {
					console.log("estoy en planets");

					const response = await fetch(`https://www.swapi.tech/api/species?page=${page}&limit=10`)
					console.log("Este es el response de species", response);

					if (!response.ok) {
						throw new Error("No sirvió")

					}
					const data = await response.json();
					console.log("esta es la data de species", data);

					const store = getStore()
					setStore({ ...store, species: data.results })
					console.log(data);

				} catch (error) {
					console.error(error);

				}
			},
			getMoreSpecies: async (id) => {
				try {
					const response = await fetch(`https://www.swapi.tech/api/species/${id}`)
					if (!response.ok) {
						throw new Error("No sirvió")
					}
					const data = await response.json();
					console.log("esta es la otra data de species", data);

					const store = getStore()
					setStore({ ...store, speciesProperties: data.result })
					console.log(data);

				} catch (error) {
					console.error(error);

				}
			},
			addToFavorites: (item) => {
				const store = getStore();
				const exists = store.favorites.some((fav) => fav.uid === item.uid);
				if (!exists) {
					setStore({ favorites: [...store.favorites, item] });
				}
			},
			removeFromFavorites: (uid) => {
				const store = getStore();
				const updatedFavorites = store.favorites.filter((fav) => fav.uid !== uid);
				setStore({ favorites: updatedFavorites });
			},
		}
	};
};

export default getState;
