import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
import Person from './Person';

import Persons from './Persons';
import CreatePerson from './CreatePerson';

import axios from 'axios';
import Header from './Header';
import Login from './Login';

function App() {

  const initialState = {
    persons: []}
// { id:'' , firstName: '', lastName: '', zip: '' },
//       { id:'' , firstName: '', lastName: '', zip: '' },
//             { id:'' , firstName: '', lastName: '', zip: '' },
//     ]
//   }


  const fetchPersons =async ()=>{
      let response =await axios.get('http://localhost:8080/persons');
      console.log(response.data);
      //update the state
     setPersonState({persons:response.data})
  }

  useEffect(()=>{
    fetchPersons();
  },[])


  let [personState, setPersonState] = useState(initialState);

  return (
    <div className='App'>
     <Header/>
     <Login/>
      <CreatePerson />
      <Persons persons={personState.persons} />

    </div>

  )
}




export default App;
