import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {v4 as uuid} from "uuid"
import Form from "./components/Form"
import UserCard from "./components/UserCard"

// const initialUser = [
//   { id: uuid(), name: "charles", email: "fulano", role:"front end"}
// ]

function App() {

  const [teamMembers, setTeamMembers] = useState([{
    id: 0,
    name: 'Ben',
    email: 'gmail',
    role: 'full'
}]);

  const addTeamMember = card => {
    const newCard = {
        id: uuid,
        name: card.name,
        email: card.email,
        role: card.role
    };
    setTeamMembers([...teamMembers, newCard]);
}

  return (
    <div className="App">
      
      <Form addMember={addTeamMember}/>
      <UserCard teamMembers={teamMembers}/>
      
    </div>
  );
}

export default App;
