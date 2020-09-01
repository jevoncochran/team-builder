import React, { useState } from "react";

const TeamForm = props => {
    const[individual, setIndividual] = useState({
        firstName: "",
        lastName: "",
        email: "", 
        role: "",
    });

    const handleChanges = e => {
       setIndividual({
           ...individual,
           [e.target.name]: e.target.value
       });
    };

    const submitForm = e => {
        e.preventDefault();
        props.addIndividual(individual);
        setIndividual({
            firstName: "",
            lastName: "",
            email: '',
            role: "",
        });
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="firstName">First Name:</label>
            <input 
                id="firstName"
                type="text"
                name="firstName"
                onChange={handleChanges}
                value={individual.firstName}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input 
                id="lastName"
                type="text"
                name="lastName"
                onChange={handleChanges}
                value={individual.lastName}
            />
            <label htmlFor="email">Email:</label>
            <input 
                id="email"
                type="email"
                name="email"
                onChange={handleChanges}
                value={individual.email}
            />
            <label htmlFor="role">Role:</label>
            <input 
                id="role"
                type="text"
                name="role"
                onChange={handleChanges}
                value={individual.role}
            />
            <button type="submit">Add Team Member</button>
        </form>
    )
}

export default TeamForm;