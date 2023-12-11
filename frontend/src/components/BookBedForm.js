import React, { useState } from 'react';

const BookBedForm = () => {
  const [bedNumber, setBedNumber] = useState('');

  const handleBookBed = () => {
    console.log('Booking bed with number:', bedNumber);
  };

  return (
    <div>
      <h2>Book Bed</h2>
      <label>
        Bed Number:
        <input type="text" value={bedNumber} onChange={(e) => setBedNumber(e.target.value)} />
      </label>
      <br />
      <button onClick={handleBookBed}>Book Bed</button>
    </div>
  );
};

export default BookBedForm;
