import React from "react";
import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setUserAction } from "./actions";
import Profile from "./Profile/Profile";
import Login from "./Login/Login";
import ColorSelector from "./ColorSelector/ColorSelector";

function App() {
  const counter = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux Fundamentals!</h1>
      <div>
        <h2>Counter - {counter} </h2>
        <p>[global state value stored in Redux]</p>
        <div>
          <button onClick={() => dispatch(increment())}> + </button>
          <br />
          <button onClick={() => dispatch(decrement())}> - </button>
        </div>
        <br />
        {!user && (
          <div>
            <button
              onClick={() =>
                dispatch(setUserAction({ id: 1, name: "Raj Prabhu" }))
              }
            >
              SET_USER
            </button>
            <p>[click this inject values in Redux store]</p>
          </div>
        )}
        {user && <p>{user.name}</p>}
      </div>
      <Profile />
      <br />
      <Login />
      <br />
      <ColorSelector />
      <br />
      <h4>This Tutorial is done by Raj Prabhu Rajasekaran.</h4>
    </div>
  );
}

export default App;
