import React from "react";

const TeamMembers = props => {
    return (
        <div>
            {props.teamMembers.map(individual => (
                <div key={individual.id}>
                    <h2>First Name: {individual.firstName}</h2>
                    <h2>Last Name: {individual.lastName}</h2>
                    <h2>Email: {individual.email}</h2>
                    <h2>Role: {individual.role}</h2><br />
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;