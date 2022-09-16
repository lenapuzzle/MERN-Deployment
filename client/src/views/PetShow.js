import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
    
const PetShow = (props) => {
    const [pet, setPet] = useState({})
    const {pets, setPets} = props;
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => setPet(res.data))
            .catch(err => console.log(err));
    }, [id]);

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

    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <Link to="/Pets">
                    <button className='btn btn-success'>Back to Home</button>
                </Link>
                <br/>
                <br/>
                <h3>Details about: {pet.name}</h3>
                <p>Pet type: {pet.type}</p>
                <p>Description: {pet.description}</p>
                <p> Skills: 
                    <ul>
                        <li>{pet.skill1}</li>
                        <li>{pet.skill2}</li>
                        <li>{pet.skill3}</li>
                    </ul>
                </p>
            </div>
            <br/>
            <button className='btn btn-warning' onClick={(e) => handleDelete(pet._id)}>Adopt {pet.name}</button>
        </div>
    )
}
    
export default PetShow;