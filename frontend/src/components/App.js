import React from 'react';
import DoctorLogin from './components/DoctorLogin';
import AdmitPatientForm from './components/AdmitPatientForm';
import BookBedForm from './components/BookBedForm';

function App() {
  return (
    <div className="App">
      <DoctorLogin />
      <AdmitPatientForm />
      <BookBedForm />
      {/* Add more components for other functionalities */}
    </div>
  );
}

export default App;
