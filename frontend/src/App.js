import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const [userPass, setUserPass] = useState("");
  const [err, setErr] = useState("");
  async function handleclick() {
    try {
      const response = await axios.get("http://localhost:8000/");
      console.log(response.data);
      console.log(response);

      alert("excuted");
    } catch (err) {
      console.log(err);
    }
  }

  const handleSumbit = async (e) => {
    e.preventDefault();
    if (!user) {
      setErr("Enter your name");
      return;
    }
    if (!userPass) {
      setErr("Enter your password");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:8000/createuser",
        { user, userPass },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
    setUser("");
    setUserPass("");
  };

  function handleChange(e) {
    e.preventDefault();
    const check = e.target.name;
    if (check === "user") {
      setUser(e.target.value);
    } else if (check === "password") {
      setUserPass(e.target.value);
    }
  }

  return (
    <div>
      <button onClick={handleclick}>get data</button>
      {err && <h2 style={{ color: "red" }}>{err}</h2>}
      <form onSubmit={handleSumbit}>
        <input
          type="text"
          value={user}
          name="user"
          placeholder="enter your name"
          onChange={handleChange}
        />
        <input
          type="password"
          value={userPass}
          name="password"
          placeholder="enter your password"
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import axios from "axios";
// export default function App() {
//   const [user, setUser] = useState("");
//   const [pass, setPass] = useState("");
//    function handleChange(e) {
//     e.preventDefault();
//     try {
//       const check=e.target.name
//       if(check==="name"){
//         setUser(e.target.value)
//       }
//       else if(check==="password"){
//         setPass(e.target.value)
//       }
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   async function handleSumbit(e) {
//     e.preventDefault();

//     try {
//             const response = await axios.post(
//               "http://localhost:8000/",
//               { user, pass },
//               { headers: { "Content-Type": "application/json" } }
//             );
//             console.log(response.data);
//           } catch (error) {
//             console.log(error);
//           }
//           setUser("");
//           setPass("");
   
//   }
//   return (
//     <div>
//       <form onSubmit={handleSumbit}>
//         <input type="text" value={user} name="name" onChange={handleChange} />
//         <input
//           type="password"
//           value={pass}
//           name="password"
//           onChange={handleChange}
//         />
//         <button>submit</button>
//       </form>
//     </div>
//   );
// }
