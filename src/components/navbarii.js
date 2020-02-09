import React from 'react'


export default function Navbarii() {
    return (
        <div className="container col-12 bg-dark">
            <div className="row  justify-content-md-center">
                 <ul class="nav justify-content-center col-9 text-center">
                    <li class="nav-item col-3 m-0 p-0 border">
                        <a class="nav-link active text-white" href="https://www.starwars.com/databank">Character</a>
                    </li>
                    <li class="nav-item col-3 m-0 p-0 border">
                        <a class="nav-link text-white" href="https://www.starwars.com/databank">Planet</a>
                    </li>
                    <li class="nav-item col-3 m-0 p-0 border">
                        <a class="nav-link text-white" href="https://www.starwars.com/databank">Vehicle</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}
