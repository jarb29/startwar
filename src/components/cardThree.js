import React, {useContext} from 'react'
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { Context }  from '../store/appContext';

export default function CardTwo(props) {
    const {actions} = useContext(Context);



  
    const pictures = {
        imageOne: 'https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711',
        imagesTwo: 'https://lumiere-a.akamaihd.net/v1/images/star-wars-the-rise-of-skywalker-theatrical-poster-1000_ebc74357.jpeg?region=0%2C0%2C891%2C1372&width=480'


    };

    return (
        <>
        <div className="row justify-content-md-center bg-dark">
            <div id="card" className="card mb-3" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={pictures.imageOne} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Name: {props.data.name}</h5>
                            <p className="card-text">Model: {props.data.model}</p>
                            <p className="card-text"><small className="text-muted">Manufacture: {props.data.manufacturer}</small></p>
                        </div>
                    </div>
                    <div className="nav-item mt-0">
                        <a className="nav-link" onClick={(e) => actions.favoriteItemsVehicle(e, props.data.name)} ><FontAwesomeIcon icon={faThumbsUp} size = '2x'color= 'gray'/></a>
                    </div>
                </div>
            </div>

        </div>

      
        </>
            )
}
