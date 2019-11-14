import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
  });

  const handleChanges = event => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    });
  };

  return (
    <div className="App">
      <h1>Add Team Member</h1>
      <form>
        <label>First Name: <input type="text" id="firstName" onChange={handleChanges} /></label><br />
        <label>Last Name: <input type="text" id="lastName" onChange={handleChanges}/></label><br />
        <label>Email:<input type="email" id="email" onChange={handleChanges} /></label><br />
        <label>Role: <input type="text" id="role" onChange={handleChanges} /></label><br /> 
        <input type="submit" />
      </form><br /><br /><br />
      <h2>Team Members</h2>
      <h3>{formData.lastName}, {formData.firstName}</h3>
    </div>
  );
}

export default App;
