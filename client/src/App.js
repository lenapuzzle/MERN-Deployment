import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import PetAdd from './views/PetAdd';
import PetShow from './views/PetShow';
import PetEdit from './views/PetEdit';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route element={<Main/>} path="/pets/" /> 
          <Route element={<PetAdd/>} path="/pets/new" /> 
          <Route element={<PetShow/>} path="/pets/:id" />
          <Route element={<PetEdit/>} path="/pets/edit/:id" />
      </Routes>
    </div>
  );
}

export default App;
