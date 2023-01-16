import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

function HotelButton() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Book Now</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Book on your favorite platform</h2>
        <Link to='https://www.airbnb.com'>Airbnb</Link>
        <Link to='https://www.expedia.com'>Expedia</Link>
        <Link to='https://www.booking.com'>Booking</Link>
        <button onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </div>
  );
}

export default HotelButton;
