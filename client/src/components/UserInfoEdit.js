import {Input, Form} from "./Styled";
import { useState } from 'react'

function UserInfoEdit ({ currentUser, setCurrentUser, setIsEditing }) {
    const [newUsername, setNewUsername] = useState(currentUser.username)
    const [newAddress, setNewAddress] = useState(currentUser.address)
    const [newEmail, setNewEmail] = useState(currentUser.email)
    const [newFirstName, setNewFirstName] = useState(currentUser.first_name)
    const [newLastName, setNewLastName] = useState(currentUser.last_name)
    const [newCity, setNewCity] = useState(currentUser.city)
    const [newState, setNewState] = useState(currentUser.state)
    const [newZip, setNewZip] = useState(currentUser.zip)
    const [newCountry, setNewCountry] = useState(currentUser.country)

    const handleProfileEdit = (e) => {
        e.preventDefault();
        //PATCH User
        let newUserInfo = {
            username: newUsername, first_name: newFirstName, last_name: newLastName, email: newEmail, 
            address: newAddress, city: newCity, state: newState, country: newCountry, zip: newZip
        } 
        async function updateUser() {
          const res = await fetch(`/users/${currentUser.id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newUserInfo)
          });
          if (res.ok) {
            const newProfile = await res.json();
            setCurrentUser(newProfile)
            setIsEditing(false)
          } else {
            const error = await res.json()
            alert(error.errors)
          }
        }
        updateUser();
    }

    return (
        <div>
            <h2 style={{ 'textAlign': 'center' }}>Edit profile</h2>
           <Form onSubmit={handleProfileEdit}>

                <Input
                type= "text"
                placeholder="Username"
                name="username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                />

                <Input
                type= "text"
                placeholder="Email"
                name="username"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                />

                <Input
                type= "text"
                placeholder="First name"
                name="username"
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
                />

                <Input
                type= "text"
                placeholder="Last name"
                name="address"
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
                /> 

                <Input
                type= "text"
                placeholder="Address"
                name="address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                /> 
                
                <Input
                type= "text"
                placeholder="City"
                name="address"
                value={newCity}
                onChange={(e) => setNewCity(e.target.value)}
                /> 
                                
                <Input
                type= "text"
                placeholder="State"
                name="username"
                value={newState}
                onChange={(e) => setNewState(e.target.value)}
                />

                <Input
                type= "text"
                placeholder="State"
                name="username"
                value={newZip}
                onChange={(e) => setNewZip(e.target.value)}
                />

                <Input
                type= "text"
                placeholder="County"
                name="address"
                value={newCountry}
                onChange={(e) => setNewCountry(e.target.value)}
                />              

                <div className="profile-edit-btn-container"> 
                <button onClick={()=>{setIsEditing(false)}}> Go Back </button>
                <button submit type ="submit"> Save </button>
              
                </div>
           </Form> 

           

        </div>
    )
  }
  
  export default UserInfoEdit;