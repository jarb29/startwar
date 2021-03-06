import React, { useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import CardTwo from '../components/cardTwo';
import { Context }  from '../store/appContext';





export default function BodyCardTwo() {

    const {store, actions} = useContext(Context);

  useEffect(() => {
    actions.setPlanets();
  }, [])


    return (
        <div>
        {
          store.planets.map((item, i) => {
          
             return <CardTwo key = {i} data = {item} />
          })
        }
        </div>
    
    )
}





