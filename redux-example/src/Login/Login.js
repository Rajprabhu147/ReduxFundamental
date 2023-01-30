import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/userProfile";
import { useSelector } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const userProfile = useSelector((state) => state.userProfile.value);

  return (
    <div>
      {!userProfile.name && (
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          <input value={age} onChange={(e) => setAge(e.target.value)} />
          <br />
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
        </div>
      )}
      <div>
        {!userProfile.name ? 
        <button
          onClick={() =>
            dispatch(
              login({
                name,
                age,
                email,
              })
            )
          }
        >
          Login
        </button> : 
        <button onClick={() => dispatch(logout())}>Logout</button>
        }
      </div>
    </div>
  );
}
