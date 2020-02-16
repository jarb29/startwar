import React, { useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import CardFavoritos from '../components/CardFavoritos';
import { Context }  from '../store/appContext';
import CardFavoritosPlanet from '../components/CardFavoritosPlanet';
import CardFavoritoVehicle from '../components/CardFavoritoVehicle';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function BodyFavorito() {
    const {store} = useContext(Context);
    return (
        <>
        <div>
        <h1 class="text-center">Character</h1>
        {
          store.favoritos.map((item, i) => {
             return <CardFavoritos key = {i} data = {item} />
          })
        }
        </div>
        <div>
        <h1 class="text-center">Planet</h1>
        {
          store.favoritosPlanet.map((item, i) => {
             return <CardFavoritosPlanet key = {i} data = {item} />

          })
        }
        </div>
        <div>
        <h1 class="text-center">Vehicles</h1>
        {
          store.favoritosVehicle.map((item, i) => {
             return <CardFavoritoVehicle key = {i} data = {item} />
          })
        }
        </div>
        </> 
    )
}



