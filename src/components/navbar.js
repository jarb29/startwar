import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTumblr, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
    <div className="row sticky-top">
             <nav className="navbar col-12  navbar-expand-lg navbar-light text-center bg-light">
                <ul className="navbar-nav col-3  fixed-top">
                    <li className="nav-item active mt-0 pt-0 ">
                        <a className="nav-link" href="https://www.wikipedia.org"><FontAwesomeIcon icon={faFacebook} size = '2x' color= 'gray'/></a>
                    </li>
                    <li className="nav-item mt-0">
                        <a className="nav-link" href="https://www.wikipedia.org"><FontAwesomeIcon icon={faInstagram} size = '2x'color= 'gray'/></a>
                    </li>
                    <li className="nav-item mt-0">
                        <a className="nav-link" href="https://www.wikipedia.org"><FontAwesomeIcon icon={faTumblr} size = '2x'color= 'gray'/></a>
                    </li>
                    <li className="nav-item mt-0">
                        <a className="nav-link" href="https://www.wikipedia.org"><FontAwesomeIcon icon={faTwitter} size = '2x'color= 'gray'/></a>
                    </li>
                    <li className="nav-item mt-0">
                        <a className="nav-link" href="https://www.wikipedia.org"><FontAwesomeIcon icon={faYoutube} size = '2x'color= 'gray'/></a>
                    </li>
                </ul> 
                <div className="col-3 offset-md-4">
                    <img src="https://logosmarcas.com/wp-content/uploads/2018/05/Star-Wars-Logo.png" className="img-fluid" alt="Responsive" />
                </div>
                <div className="col-3 offset-md-9  mt-1 border-success pt-0 fixed-top">
                    <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search ......" aria-label="Recipient's username" />
                        <div className="input-group-append">
                            <span className="input-group-text"><FontAwesomeIcon icon={faSearch} /></span>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container col-12 bg-dark">
            <div className="row  justify-content-md-center">
                 <ul className="nav justify-content-center col-9 text-center">
                    <li className="nav-item col-3 m-0 p-0 border">
                        <Link to='/character' className="nav-link active text-white" href="https://www.starwars.com/databank">Character</Link>
                    </li>
                    <li className="nav-item col-3 m-0 p-0 border">
                        <Link to='/planet' className="nav-link text-white" href="https://www.starwars.com/databank">Planet</Link>
                    </li>
                    <li className="nav-item col-3 m-0 p-0 border">
                        <Link to='/vehicles' className="nav-link text-white" href="https://www.starwars.com/databank">Vehicle</Link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
    )
}
