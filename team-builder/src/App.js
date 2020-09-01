import React, { useState } from 'react';
import TeamForm from "./components/TeamForm";
import TeamMembers from "./components/TeamMembers";
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      firstName: 'Jevon',
      lastName: 'Cochran',
      email: 'jevon.cochran@gmail.com',
      role: 'Web Developer',
    },
    {
      firstName: 'Kianna',
      lastName: 'Pinkney',
      email: 'k.pinkney90@gmail.com',
      role: 'IT',
    }
  ]);

  const addIndividual = individual => {
    const newIndividual = {
      id: Date.now(),
      firstName: individual.firstName,
      lastName: individual.lastName,
      email: individual.email,
      role: individual.role
    }
    setTeamMembers([...teamMembers, newIndividual]);
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <TeamForm addIndividual={addIndividual} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
