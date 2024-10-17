import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import CardImg1 from '../images/nothing2(a).jpg'; // Replace with the path to your image
import CardImg2 from '../images/nordce4.jpg';
import CardImg3 from '../images/iqooz9x.jpg';
import CardImg4 from '../images/samsungs23(1).webp';
import CardImg5 from '../images/acer_aspire.jpg';
import CardImg6 from '../images/lenovo_slim3.jpg';
import CardImg7 from '../images/asus_tuf.jpg';
import CardImg8 from '../images/Tuf_F15.webp';

const MyDeals = () => {
    return (
        <div className="container mt-4" style={{ backgroundColor: "#FFD77D", padding: "20px"}}>
            <h4 className="title p-2 text-center">Blockbuster Deals</h4> {/* Title for the section */}
            <Carousel indicators={false} interval={3000}> {/* Carousel component */}
                
                {/* Carousel Item 1 */}
                <Carousel.Item>
                    <div className="row d-flex justify-content-center"> {/* Each row can hold multiple cards */}
                        <div className="card p-2 mb-3 mx-2" style={{ width: "18rem", border: "none", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                            <img src={CardImg1} className="card-img-top" style={{ width: "100%", height: "300px", objectFit: "contain" }} alt="Placeholder" /> {/* Fixed image size */}
                            <div className="card-body text-center">
                                <h5 className="card-title">Nothing Phone 2(a)</h5>
                                <div className="d-flex align-items-center">
                                    <p className="card-text bg-danger text-white p-1 rounded m-0">
                                        30% off
                                    </p>
                                    <p className="card-text text-danger m-0 ms-2">
                                        Ends in 4 days
                                    </p>
                                    <p className="card-text text-muted text-decoration-line-through m-0 ms-2">
                                        27,999
                                    </p>
                                </div>
                                <p className="Description fw-bold mt-2">
                                    Nothing Phone 2(a) 8GB 256GB
                                </p>
                            </div>
                        </div>

                        {/* Add more cards in the same row if needed */}
                        <div className="card p-2 mb-3 mx-2" style={{ width: "18rem", border: "none", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                            <img src={CardImg2} className="card-img-top" style={{ width: "100%", height: "300px", objectFit: "contain" }} alt="Placeholder" />
                            <div className="card-body text-center">
                                <h5 className="card-title">One Plus Nord CE 4</h5>
                                <div className="d-flex align-items-center">
                                    <p className="card-text bg-danger text-white p-1 rounded m-0">
                                        10% off
                                    </p>
                                    <p className="card-text text-danger m-0 ms-2">
                                        Ends in 4 days
                                    </p>
                                    <p className="card-text text-muted text-decoration-line-through m-0 ms-2">
                                        21,999
                                    </p>
                                </div>
                                <p className="Description fw-bold mt-2">
                                    One Plus Nord CE4 8GB 256GB
                                </p>
                            </div>
                        </div>
                        {/* Add more cards in the same row if needed */}
                        <div className="card p-2 mb-3 mx-2" style={{ width: "18rem", border: "none", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                            <img src={CardImg3} className="card-img-top" style={{ width: "100%", height: "300px", objectFit: "contain" }} alt="Placeholder" />
                            <div className="card-body text-center">
                                <h5 className="card-title">IQOO Z9x</h5>
                                <div className="d-flex align-items-center">
                                    <p className="card-text bg-danger text-white p-1 rounded m-0">
                                        30% off
                                    </p>
                                    <p className="card-text text-danger m-0 ms-2">
                                        Ends in 4 days
                                    </p>
                                    <p className="card-text text-muted text-decoration-line-through m-0 ms-2">
                                        23,999
                                    </p>
                                </div>
                                <p className="Description fw-bold mt-2">
                                    IQOO Z9x 8GB 128GB
                                </p>
                            </div>
                        </div>
                        {/* Add more cards in the same row if needed */}
                        <div className="card p-2 mb-3 mx-2" style={{ width: "18rem", border: "none", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                            <img src={CardImg4} className="card-img-top" style={{ width: "100%", height: "300px", objectFit: "containl" }} alt="Placeholder" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Samsung S23</h5>
                                <div className="d-flex align-items-center">
                                    <p className="card-text bg-danger text-white p-1 rounded m-0">
                                        30% off
                                    </p>
                                    <p className="card-text text-danger m-0 ms-2">
                                        Ends in 4 days
                                    </p>
                                    <p className="card-text text-muted text-decoration-line-through m-0 ms-2">
                                        23,999
                                    </p>
                                </div>
                                <p className="Description fw-bold mt-2">
                                    IQOO Z9x 8GB 128GB
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                {/* Carousel Item 2 */}
                <Carousel.Item>
                    <div className="row d-flex justify-content-center">
                        <div className="card p-2 mb-3 mx-2" style={{ width: "18rem", border: "none", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                            <img src={CardImg5} className="card-img-top" style={{ width: "100%", height: "180px", objectFit: "cover" }} alt="Placeholder" />
                            <div className="card-body text-center">
                            <h5 className="card-title">Acer Aspire 3</h5>
                                <div className="d-flex align-items-center">
                                    <p className="card-text bg-danger text-white p-1 rounded m-0">
                                        30% off
                                    </p>
                                    <p className="card-text text-danger m-0 ms-2">
                                        Ends in 5 days
                                    </p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="card-text fw-bold fs-5 text-muted text-decoration m-0">
                                        27,999
                                    </p>
                                    <p className="card-text text-muted text-decoration-line-through m-0 ms-5">
                                        M.R.P : 40,999
                                    </p>
                                </div>
                                
                                <p className="Description fw-bold mt-2">
                                    Acer Aspire 3 Intel Core i5 12th Gen
                                </p>
                            </div>
                        </div>

                        {/* Add more cards in the same row if needed */}
                        <div className="card p-2 mb-3 mx-2" style={{ width: "18rem", border: "none", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                            <img src={CardImg6} className="card-img-top" style={{ width: "100%", height: "180px", objectFit: "cover" }} alt="Placeholder" />
                            <div className="card-body text-center">
                            <h5 className="card-title">Lenovo Ideapad Slim3</h5>
                                <div className="d-flex align-items-center">
                                    <p className="card-text bg-danger text-white p-1 rounded m-0">
                                        40% off
                                    </p>
                                    <p className="card-text text-danger m-0 ms-2">
                                        Ends in 5 days
                                    </p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <p className="card-text fw-bold fs-5 text-muted text-decoration m-0">
                                        49,999
                                    </p>
                                    <p className="card-text text-muted text-decoration-line-through m-0 ms-5">
                                        M.R.P : 60,999
                                    </p>
                                </div>
                                <p className="Description fw-bold mt-2">
                                    Lenovo Ideapad Slim 3 Intel Core i7 12th Gen
                                </p>
                            </div>
                        </div>
                        {/* Add more cards in the same row if needed */}
                        <div className="card p-2 mb-3 mx-2" style={{ width: "18rem", border: "none", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                            <img src={CardImg7} className="card-img-top" style={{ width: "100%", height: "180px", objectFit: "cover" }} alt="Placeholder" />
                            <div className="card-body text-center">
                            <h5 className="card-title">Asus TUF A-15</h5>
                                <div className="d-flex align-items-center">
                                    <p className="card-text bg-danger text-white p-1 rounded m-0">
                                        40% off
                                    </p>
                                    <p className="card-text text-danger m-0 ms-5">
                                        Ends in 5 days
                                    </p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <p className="card-text fw-bold fs-5 text-muted text-decoration m-0">
                                        56,999
                                    </p>
                                    <p className="card-text text-muted text-decoration-line-through m-0 ms-5">
                                        M.R.P : 75,999
                                    </p>
                                </div>
                                <p className="Description fw-bold mt-2">
                                    Asus TUF A-15 Ryzen 5 NVIDEA GT-1650 GTX
                                </p>
                            </div>
                        </div>
                        {/* Add more cards in the same row if needed */}
                        <div className="card p-2 mb-3 mx-2" style={{ width: "18rem", border: "none", boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}>
                            <img src={CardImg8} className="card-img-top" style={{ width: "100%", height: "180px", objectFit: "cover" }} alt="Placeholder" />
                            <div className="card-body text-center">
                            <h5 className="card-title">Asus TUF F-15</h5>
                                <div className="d-flex align-items-center">
                                    <p className="card-text bg-danger text-white p-1 rounded m-0">
                                        40% off
                                    </p>
                                    <p className="card-text text-danger m-0 ms-5">
                                        Ends in 5 days
                                    </p>
                                </div>

                                <div className="d-flex align-items-center">
                                    <p className="card-text fw-bold fs-5 text-muted text-decoration m-0">
                                        59,999
                                    </p>
                                    <p className="card-text text-muted text-decoration-line-through m-0 ms-5">
                                        M.R.P : 77,999
                                    </p>
                                </div>
                                <p className="Description fw-bold mt-2">
                                    Asus TUF F-15 Intel Core i5 NVIDEA GT-1650 GTX
                                </p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>

                {/* Add more Carousel.Item for additional slides as needed */}

            </Carousel>
        </div>
    );
}

export default MyDeals;
