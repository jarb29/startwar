const getState = ({ getStore, getActions, setStore }) => {


	return {

		store: {
			people:[],
			planets:[],
			vehicles:[],
			favoritos:[],
			favoritosPlanet:[],
			favoritosVehicle:[],
			
		},

		actions: {

			setPeople: ( ) => {
				fetch("https://swapi.co/api/people/")
				.then(response => response.json())
				.then(data => {setStore({people : data.results})})
				.catch(error => console.log(error))
			},

			setPlanets: ( ) => {
				fetch("https://swapi.co/api/planets/")
				.then(response => response.json())
				.then(data => {setStore({planets : data.results}); })
				.catch(error => console.log(error))
			},

			setVehicles: ( ) => {
				fetch("https://swapi.co/api/vehicles/")
				.then(response => response.json())
				.then(data => {setStore({vehicles : data.results}); })
				.catch(error => console.log(error))
			},

			favoriteItems: (e, nombre) => {

				const store = getStore();
				const b = store.people.find(item => item.name === nombre);
			

				if(store.favoritos.length === 0){
					let concatfavoritos = store.favoritos.concat(b);
					setStore({favoritos: concatfavoritos });
				} else {
					const c = store.favoritos.find(item => item.name === b.name);
					if (c === undefined) {
					
						let concatfavoritos = store.favoritos.concat(b);
						setStore({favoritos: concatfavoritos });
					}
				};
					
			},

			favoriteItemsPlanet: (e, nombre) => {

				const store = getStore();
				const b = store.planets.find(item => item.name === nombre);
			

				if(store.favoritosPlanet.length === 0){
					let concatfavoritos = store.favoritosPlanet.concat(b);
					setStore({favoritosPlanet: concatfavoritos });
				} else {
					const c = store.favoritosPlanet.find(item => item.name === b.name);
					if (c === undefined) {
					
						let concatfavoritos = store.favoritosPlanet.concat(b);
						setStore({favoritosPlanet: concatfavoritos });
					}
				};
					
			},

			favoriteItemsVehicle: (e, nombre) => {

				const store = getStore();
				const b = store.vehicles.find(item => item.name === nombre);
			

				if(store.favoritosVehicle.length === 0){
					let concatfavoritos = store.favoritosVehicle.concat(b);
					setStore({favoritosVehicle: concatfavoritos });
				} else {
					const c = store.favoritosVehicle.find(item => item.name === b.name);
					if (c === undefined) {
					
						let concatfavoritos = store.favoritosVehicle.concat(b);
						setStore({favoritosVehicle: concatfavoritos });
					}
				};
					
			},











		},
	};
};

export default getState;
