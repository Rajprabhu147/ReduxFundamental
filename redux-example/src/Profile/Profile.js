import React from 'react';
import { useSelector } from 'react-redux';



export default function Profile() {
  const userProfile = useSelector((state) => state.userProfile.value);
  const theme = useSelector((state) => state.theme.value);

  if(!userProfile.name) {
    return <h2> Please Enter Details to Login</h2>
  }
  return (
    <div style={{'color': theme}}>
        <h2>Welcome to your Profile, {userProfile.name}!</h2>
        <h3>Name : {userProfile.name} </h3>
        <h3>Age : {userProfile.age} </h3>
        <h3>Email : {userProfile.email} </h3>

    </div>
  )
}
