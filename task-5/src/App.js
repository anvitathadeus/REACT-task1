import React, { useState } from 'react';
import './index.css';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const timeDiff = currentDate - birthDate;
    const ageInYears = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000));
    setAge(ageInYears);
  };

  return (
    <div className="age-calculator">
      <h1>Age Calculator</h1>
      <p>Enter your date of birth</p>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <br />
      <button className="calculate-button" onClick={calculateAge}>
        Calculate Age
      </button>
      {age !== null && <p>You are {age} years old</p>}
    </div>
  );
};

export default AgeCalculator;

