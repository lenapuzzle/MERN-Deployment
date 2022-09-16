import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const PetAdd = (props) => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState([]);

    

    const handleNew = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/new', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then((res) => navigate("/pets"))
        .catch(err=>{
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        }) 
    }

    return(
        <div className='container-sm my-3 border border-success p-2 mb-2 border-opacity-75 rounded'>
            <h1>Pet Shelter</h1>
            <Link to="/Pets">
                <button className='btn btn-success'>Back to Home</button>
            </Link>
            <br/>
            <br/>
            <h3>Know a pet needing a home?</h3>
            <form className='my-3' onSubmit={handleNew}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <div>
                        <p>
                            <label>Name:</label>
                            <input type='text' name='name' value={name} onChange={e => setName(e.target.value)}/>
                        </p>
                        <p>
                            <label>Type:</label>
                            <input type='text' name='type' value={type} onChange={e => setType(e.target.value)}/>
                        </p>
                        <p>
                            <label>Description:</label>
                            <input type='text' name='description' value={description} onChange={e => setDescription(e.target.value)}/>
                        </p>
                    </div>
                    <div>
                        <p>Skills (optional):</p>
                        <p>
                            <label>Skill1:</label>
                            <input type='text' name='skill1' value={skill1} onChange={e => setSkill1(e.target.value)}/>
                        </p>
                        <p>
                            <label>Skill2:</label>
                            <input type='text' name='skill2' value={skill2} onChange={e => setSkill2(e.target.value)}/>
                        </p>
                        <p>
                            <label>Skill3:</label>
                            <input type='text' name='skill3' value={skill3} onChange={e => setSkill3(e.target.value)}/>
                        </p>
                    </div>
                </div>
            </form>
                <Link to="/pets">
                    <button className='btn btn-warning'>Cancel</button>
                </Link>
                <button className='btn btn-info' onClick={handleNew}>Add Pet</button>
        </div>
    )
};

export default PetAdd;