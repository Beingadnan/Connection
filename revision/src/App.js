import React from "react";
import { useState } from "react";
import axios from 'react'

export default function App() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response=await axios.post("http://localhost:8000/",
       {user,email,pass},
       {headers : {"Content-Type":"application/json"}}
      )
      console.log(response.data)
    } catch (error) {
      console.log(error.message)
    }
    setUser("")
    setEmail("")
    setPass("")
  }
  function handleChange(e) {
    const check=e.target.name
    if(check==='user'){
      setUser(e.target.value);
    }else if(check==='email'){
      setEmail(e.target.value)
    }
    else if(check==='pass'){
      setPass(e.target.value)
    }
  }
  return (
    <div>
      <h1>Welcome to Namix</h1>
      <h4>Create Your Account</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="user"
          value={user}
          placeholder="Full Name"
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <input
          type="password"
          placeholder="Create password"
          name="pass"
          value={pass}
          onChange={handleChange}
        />
        <br />
        <br />
        <select name="gender">
          <option value="">Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <input type="date" id="Birtday" value="Birtday" />
        <br />
        <br />
        <button>sumbit</button>
      </form>
    </div>
  );
}
