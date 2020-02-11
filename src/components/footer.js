import React from 'react';
import './footer.css';

export default function Footer() {

    const image = {

        imageOne: 'https://starwarsblog.starwars.com/wp-content/uploads/2020/02/vader-immortal-vote-tall-b.jpg'
    }


    return (
        <div className="row col-12 text-white ">
          <img src={image.imageOne} className="alex" alt="..."/>
          <div className="card-img-overlay">
                <h5 className="card-title text-center">Follow US</h5>
            </div>
        </div>
           
            )
        }
