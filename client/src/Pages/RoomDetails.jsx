import React, { useState } from 'react';
import { Modal, Button, Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom';

function RoomDetails({ room, fromdate, todate }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="room-card">
            <div className="room-content">
                <div className="image-container">
                    <img className="room-image" src={room.imageurls[0]} alt="" />
                </div>
                <div className="text-container">
                    <h5 className="room-name"><span className="highlight-text">{room.name}</span></h5>
                    <p className="room-info">
                        <span className="highlitext">Max Count:</span> {room.maxcount}<br />
                        <span className="highlight-text">Phone Number:</span> {room.phonenumber}<br />
                        <span className="highlight-text">Type:</span> {room.type}<br />
                        <span className="highlight-text">Description:</span> {room.description}
                    </p>
                    {(fromdate && todate)&&(
                     <Link to={`/rooms/${room._id}/${fromdate}/${todate}`}>

                     <button className='btn btn-primary'>Book Now</button>
                        </Link>
                    
                    )}
                    <button className='btn view-details-btn' onClick={handleShow}>View Details</button>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{room.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Carousel prevLabel="" nextLabel="">
                            {room.imageurls.map((url, index) => (
                                <Carousel.Item key={index}>
                                    <img src={url} alt={`Room ${index}`} />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <p>{room.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default RoomDetails;
