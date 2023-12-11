import React, { useState } from 'react';

const AdmitPatientForm = () => {
  const [name, setName] = useState('');
  const [condition, setCondition] = useState('');

  const handleAdmitPatient = () => {
    console.log('Admitting patient with:', name, condition);
  };

  return (
    <div>
      <h2>Admit Patient</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Condition:
        <input type="text" value={condition} onChange={(e) => setCondition(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAdmitPatient}>Admit Patient</button>
    </div>
  );
};

export default AdmitPatientForm;
