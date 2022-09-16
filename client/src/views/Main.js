import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pets from "../components/AllPets";

const Main = () => {
    const [ pets, setPets ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then((res) => {
            setPets(res.data);
        })
        .catch((err) => {
            console.error(err);
        })
    }, []);

    return(
        <div>
            <Pets pets={pets} setPets={setPets} />
        </div>
    )
}

export default Main;