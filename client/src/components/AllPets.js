import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Pets = (props) => {
    const navigate = useNavigate();
    const { pets, setPets } = props;

    const handleDelete = (delId) => {
        axios.delete(`http://localhost:8000/api/pets/${delId}`)
        .then((res) => {
            const filteredPets = pets.filter((pet) => {
                return pet._id !== delId;
            });

            setPets(filteredPets);
        })
        .catch((err) => {
            console.error(err);
        })
    }

    return(
        
        <div className='container-sm'>
            <h1>Pet Shelter</h1>
            <Link to="/pets/new">Add a pet to the shelter</Link>
            <h3>These pets are looking for a good home</h3>
            <table className='table'>
                <thead className='table table-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {pets.map((pet, i) => {
                    return(
                        <tbody className='table-success table-striped' key={i}>
                            <tr>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <button className='btn btn-info' onClick={(e) => navigate(`${pet._id}`)}>Details</button>
                                    <button className='btn btn-info' onClick={(e) => navigate(`edit/${pet._id}`)}>Edit</button>
                                    <button className='btn btn-warning' onClick={(e) => handleDelete(pet._id)}>Adopt</button>
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </table>
        </div>
    );
}

export default Pets;