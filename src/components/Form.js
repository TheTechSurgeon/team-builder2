import React,{useState} from "react";

const Form = (props)=>{

    const [user,setUser] = useState({
        name:"",
        email:"",
        role:""
    })



    
    const handleChange = (event) => {
        setUser({...user,[event.target.name]:event.target.value
        })
    }
    const submitForm = (event) =>{
        event.preventDefault()
        props.addMember(user)
        setUser({user});
    }
    return(
        <form onSubmit={submitForm}>
            <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={user.name}
                />
            <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={user.email}
                />
            <label htmlFor="role">Role</label>
            <input
                id="role"
                type="text"
                name="role"
                onChange={handleChange}
                value={user.role}
            />
            <button type="submit">Add New User</button>








        </form>
    )























return











}