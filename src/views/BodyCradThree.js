import React, { useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import CardThree from '../components/cardThree';
import { Context }  from '../store/appContext';





export default function BodyCardThree() {

    const {store, actions} = useContext(Context);

  useEffect(() => {
    actions.setVehicles();
  }, [])


    return (
        <div>
        {
          store.vehicles.map((item, i) => {
             
             return <CardThree key = {i} data = {item} />
          })
        }
        </div>
    
    )
}



