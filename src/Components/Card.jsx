import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardImage1 from '../images/card1(1).jpg';
import CardImage2 from '../images/card2(1).png';
import CardImage3 from '../images/card3(1).webp';
// import CardImage4 from '../images/card4.gif';
import CardImage5 from '../images/boult.png';
import CardImage6 from '../images/boat.avif';
import CardImage7 from '../images/noise.png';
import CardImage8 from '../images/realme.jpg';
import CardImage10 from '../images/puma1.jpg';
import CardImage11 from '../images/adidas.jpg';
import CardImage12 from '../images/fila.webp';
import CardImage13 from '../images/nike.jpg';
import CardImage14 from '../images/gymgloves.jpg';
import CardImage15 from '../images/gymdumbell.avif';
import CardImage16 from '../images/gymshoes.jpg';
import CardImage17 from '../images/gymbag.jpg';
import CardImage18 from '../images/nothing1.webp';
import CardImage19 from '../images/nothing2.jpg';
import CardImage20 from '../images/nothing2a.webp';
import CardImage21 from '../images/nothing2ap.webp';
import CardImage22 from '../images/sofaset.webp';
import CardImage23 from '../images/coffeetab.jpg';
import CardImage24 from '../images/diningtab.webp';
import CardImage25 from '../images/convertsofa.jpg';
import CardImage26 from '../images/rog8.webp';
import CardImage27 from '../images/nubia9.jpg';
import CardImage28 from '../images/iqoo9.jpg';
import CardImage29 from '../images/realme6t.jpg';

const Mycard = () => {
    return (<>
      <section aria-label="Carousel Row">

        <div className="row"> {/* Center the row vertically and horizontally */}
          <div className="col"> {/* Adjust column width */}
            <div id="carouselExampleAutoplaying" className="carousel slide" style={{ height: '400px' }} data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={CardImage1}
                    className="d-block w-100"
                    alt="First slide"
                    style={{ height: '500px', objectFit: 'cover' }} // Added objectFit to maintain aspect ratio
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={CardImage2}
                    className="d-block w-100"
                    alt="Second slide"
                    style={{ height: '500px', objectFit: 'cover' }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={CardImage3}
                    className="d-block w-100"
                    alt="Third slide"
                    style={{ height: '500px', objectFit: 'cover' }}
                  />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>


      <section className="container mt-5" aria-label="Cards Container">

        <div className="row g-5">
          {/* First Card Column */}
          <div className="col">
            {/* First Card */}
            <div className="card p-3 mx-auto" style={{ width: '400px', height: '500px' }}>
              <h4 className="title mt-2">Starting ₹899 | Headphones</h4>
              <div className="row mt-2">
                {/* First Image with Title */}
                <div className="col-6">
                  <a href="#link1">
                    <img
                      src={CardImage5}
                      className="img-fluid"
                      alt="exm1"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Boult Upto 50% Off</h6>
                </div>

                {/* Second Image with Title */}
                <div className="col-6">
                  <a href="#link2">
                    <img
                      src={CardImage6}
                      className="img-fluid"
                      alt="exm2"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Boat Upto 70% Off</h6>
                </div>

                {/* Third Image with Title */}
                <div className="col-6">
                  <a href="#link3">
                    <img
                      src={CardImage7}
                      className="img-fluid"
                      alt="exm3"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Noise Starting @899</h6>
                </div>

                {/* Fourth Image with Title */}
                <div className="col-6">
                  <a href="#link4">
                    <img
                      src={CardImage8}
                      className="img-fluid"
                      alt="exm4"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Realme Buds Starting @999</h6>
                </div>

                {/* "See More Offers" Link */}
                <a href="#link1">
                  <p className="mt-1">See more offers</p>
                </a>
              </div>
            </div>
          </div>

          {/* Second Card Column */}
          <div className="col">
            {/* Second Card */}
            <div className="card p-3 mx-auto" style={{ width: '400px', height:'500px' }}>
              <h4 className="title mt-2">Offers Upto 60% | Shoes</h4>
              <div className="row mt-2">
                {/* First Image with Title */}
                <div className="col-6">
                  <a href="#link5">
                    <img
                      src={CardImage10}  // Replace with new image
                      className="img-fluid"
                      alt="exm5"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Puma Shoes Upto 40% Off</h6>
                </div>

                {/* Second Image with Title */}
                <div className="col-6">
                  <a href="#link6">
                    <img
                      src={CardImage11}  // Replace with new image
                      className="img-fluid"
                      alt="exm6"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Adidas Upto 60% Off</h6>
                </div>

                {/* Third Image with Title */}
                <div className="col-6">
                  <a href="#link7">
                    <img
                      src={CardImage12}  // Replace with new image
                      className="img-fluid"
                      alt="exm7"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Fila starting @899</h6>
                </div>

                {/* Fourth Image with Title */}
                <div className="col-6">
                  <a href="#link8">
                    <img
                      src={CardImage13}  // Replace with new image
                      className="img-fluid"
                      alt="exm8"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Nike Starting @999</h6>
                </div>

                {/* "See More Offers" Link */}
                <a href="#link2">
                  <p className="mt-1">See more offers</p>
                </a>
              </div>
            </div>
          </div>

          {/* Third Card Column */}
          <div className="col">
            {/* Second Card */}
            <div className="card p-3 mx-auto" style={{ width: '400px', height:'500px' }}>
              <h4 className="title mt-2">Gym Accessories | ₹499 Onwards </h4>
              <div className="row mt-2">
                {/* First Image with Title */}
                <div className="col-6">
                  <a href="#link5">
                    <img
                      src={CardImage14}  // Replace with new image
                      className="img-fluid"
                      alt="exm5"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Gym Gloves @499</h6>
                </div>

                {/* Second Image with Title */}
                <div className="col-6">
                  <a href="#link6">
                    <img
                      src={CardImage15}  // Replace with new image
                      className="img-fluid"
                      alt="exm6"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Dumbell Upto 40% Off</h6>
                </div>

                {/* Third Image with Title */}
                <div className="col-6">
                  <a href="#link7">
                    <img
                      src={CardImage16}  // Replace with new image
                      className="img-fluid"
                      alt="exm7"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Gym Shoes Starting @699</h6>
                </div>

                {/* Fourth Image with Title */}
                <div className="col-6">
                  <a href="#link8">
                    <img
                      src={CardImage17}  // Replace with new image
                      className="img-fluid"
                      alt="exm8"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Gym Bags Upto 50% Off</h6>
                </div>

                {/* "See More Offers" Link */}
                <a href="#link2">
                  <p className="mt-1">See more offers</p>
                </a>
              </div>
            </div>
          </div>


          {/* Fourth Card Column */}
          <div className="col">
            {/* Second Card */}
            <div className="card p-3 mx-auto" style={{ width: '400px', height:'500px' }}>
              <h4 className="title mt-2">Nothing Phones | Midnight Sale </h4>
              <div className="row mt-2">
                {/* First Image with Title */}
                <div className="col-6">
                  <a href="#link5">
                    <img
                      src={CardImage18}  // Replace with new image
                      className="img-fluid"
                      alt="exm5"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Nothing Phone 1</h6>
                </div>

                {/* Second Image with Title */}
                <div className="col-6">
                  <a href="#link6">
                    <img
                      src={CardImage19}  // Replace with new image
                      className="img-fluid"
                      alt="exm6"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Nothing Phone 2</h6>
                </div>

                {/* Third Image with Title */}
                <div className="col-6">
                  <a href="#link7">
                    <img
                      src={CardImage20}  // Replace with new image
                      className="img-fluid"
                      alt="exm7"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Nothing Phone 2(a)</h6>
                </div>

                {/* Fourth Image with Title */}
                <div className="col-6">
                  <a href="#link8">
                    <img
                      src={CardImage21}  // Replace with new image
                      className="img-fluid"
                      alt="exm8"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Nothing Phone 2(a) Plus</h6>
                </div>

                {/* "See More Offers" Link */}
                <a href="#link2">
                  <p className="mt-1">See more offers</p>
                </a>
              </div>
            </div>
          </div>


          {/* Fifth Card Column */}
          <div className="col">
            {/* Second Card */}
            <div className="card p-3 mx-auto" style={{ width: '400px', height:'500px' }}>
              <h4 className="title mt-2">Home Accessories | Upto 55% Off</h4>
              <div className="row mt-2">
                {/* First Image with Title */}
                <div className="col-6">
                  <a href="#link5">
                    <img
                      src={CardImage22}  // Replace with new image
                      className="img-fluid"
                      alt="exm5"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Sofa Sets upto 40% Off</h6>
                </div>

                {/* Second Image with Title */}
                <div className="col-6">
                  <a href="#link6">
                    <img
                      src={CardImage23}  // Replace with new image
                      className="img-fluid"
                      alt="exm6"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Coffee Table Upto 60% Off</h6>
                </div>

                {/* Third Image with Title */}
                <div className="col-6">
                  <a href="#link7">
                    <img
                      src={CardImage24}  // Replace with new image
                      className="img-fluid"
                      alt="exm7"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Dining Table Starting @4999</h6>
                </div>

                {/* Fourth Image with Title */}
                <div className="col-6">
                  <a href="#link8">
                    <img
                      src={CardImage25}  // Replace with new image
                      className="img-fluid"
                      alt="exm8"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Convertable Sofa @50% Off</h6>
                </div>

                {/* "See More Offers" Link */}
                <a href="#link2">
                  <p className="mt-1">See more offers</p>
                </a>
              </div>
            </div>
          </div>



          {/* Sixth Card Column */}
          <div className="col">
            {/* Second Card */}
            <div className="card p-3 mx-auto" style={{ width: '400px', height:'500px' }}>
              <h4 className="title mt-2">Gaming Phones | Exciting Offers</h4>
              <div className="row mt-2">
                {/* First Image with Title */}
                <div className="col-6">
                  <a href="#link5">
                    <img
                      src={CardImage26}  // Replace with new image
                      className="img-fluid"
                      alt="exm5"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Rog 8 Pro</h6>
                </div>

                {/* Second Image with Title */}
                <div className="col-6">
                  <a href="#link6">
                    <img
                      src={CardImage27}  // Replace with new image
                      className="img-fluid"
                      alt="exm6"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Nubia Red Magic 9 Pro</h6>
                </div>

                {/* Third Image with Title */}
                <div className="col-6">
                  <a href="#link7">
                    <img
                      src={CardImage28}  // Replace with new image
                      className="img-fluid"
                      alt="exm7"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">IQOO 9 Pro</h6>
                </div>

                {/* Fourth Image with Title */}
                <div className="col-6">
                  <a href="#link8">
                    <img
                      src={CardImage29}  // Replace with new image
                      className="img-fluid"
                      alt="exm8"
                      style={{ height: '120px', width: '100%', objectFit: 'cover' }}
                    />
                  </a>
                  <h6 className="mt-2 text-center">Realme GT 6T</h6>
                </div>

                {/* "See More Offers" Link */}
                <a href="#link2">
                  <p className="mt-1">See more offers</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>);
  };

export default Mycard;
