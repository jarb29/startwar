import React, { useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from '../components/card';
import { Context }  from '../store/appContext';





export default function BodyCard() {

  const {store, actions} = useContext(Context);

  useEffect(() => {
    actions.setPeople();
  }, [])

  

    return (
      <div>
      {
        store.people.map((item, i) => {
           return <Card key = {i} index= {i} data = {item} />
        })
      }
      </div>

    )
}



