import React from 'react'
import ButtonBases from '../Butt0nBases/ButtonBases'
import './HomePage.css'

export default function HomePage() {
  return (
    <div>
        
        <div class="container user-carousel my-4">
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="./assets/caro7.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>NatWest Bank</h3>
                        <p>Looking for a Current Account?.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./assets/caro2.JPG" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>NatWest Digital</h3>
                        <p>World's fastest and safest digital technology.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="./assets/caro1.jpg" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h3>NatWest Services</h3>
                        <p>Loan, Credit Cards and Mortgages without a visit to the branch.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

<ButtonBases/>
    </div>
  )
}
