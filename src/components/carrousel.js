import React from 'react'

export default function Carrousel() {

    const videos = {

        videoOne : 'https://starwarsblog.starwars.com/wp-content/uploads/2020/02/clone-wars-character-quiz-tall.jpg',
        videoTwo : 'https://lumiere-a.akamaihd.net/v1/images/dual-lightsaber_bec9d839.jpeg?width=666',
        videoThree : 'https://lumiere-a.akamaihd.net/v1/images/dual-lightsaber_bec9d839.jpeg?width=666',

    };



    return (
        <div className = "container">
            <div className = "row col-12 justify-content-md-center">
             <div className="bd-example col-8 ">
                <div id="carouselExampleCaptions" className="carousel slide " data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={videos.videoOne} className="d-block w-100" alt="..."/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </div>
                        </div>
                        <div className="carousel-item">
                            <img src={videos.videoTwo} className="d-block w-100" alt="..."/>
                                  <div className="carousel-caption d-none d-md-block">
                                       <h5>Second slide label</h5>
                                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                  </div>
                        </div>
                        <div className="carousel-item">
                                <img src={videos.videoThree} className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                       <h5>Third slide label</h5>
                                       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </div>
                        </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                           <span className="sr-only">Next</span>
                        </a>
                 </div>
              </div>
            </div>
        </div>
                    )
                }
