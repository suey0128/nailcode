import UserInfoEdit from "./UserInfoEdit";
import Grid from '@material-ui/core/Grid';

import {useState } from "react"

function UserInfo ({currentUser, setCurrentUser}) {
  const [isEditing, setIsEditing] = useState(false)
  const [changingPassword, setChangingPassword] = useState(false)
  const [newPassword, setNewPassword] = useState("")
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("")

 

  const handlePasswordChange = (e) => {
    e.preventDefault()
    async function updateUser() {
        const res = await fetch(`/users/${currentUser.id}`, {
          method: "PATCH",
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ username:currentUser.username, password: newPassword, password_confirmation: newPasswordConfirmation})
        });
        if (res.ok) {
          const newProfile = await res.json();
          setCurrentUser(newProfile)
          console.log("dataBackFromPatch",newProfile)
          setChangingPassword(false)
        } else {
          const error = await res.json()
          alert(error.errors)
        }
      }
      updateUser();
  }

    return (

        <div className="profile-user-info-container">
        {isEditing ? null : <h2 className="userInfoTitle"> Profile </h2> }
        
        {isEditing ?
            <div>
                 <UserInfoEdit currentUser={currentUser} setCurrentUser={setCurrentUser} setIsEditing={setIsEditing}/> 
            </div>
            :
            <Grid container spacing={2} >
              <Grid item xs={12} md={10} >
                <p className="userinfo">Username: {currentUser.username}</p>
                <p className="userinfo">Default Shipping Address: </p>
                <p className="userinfo"> {currentUser.first_name} {currentUser.last_name}</p>
                <p className="userinfo">Address: {currentUser.address} {currentUser.city} {currentUser.state} {currentUser.country}</p>
              </Grid>

              <Grid item xs={12} md={2} className="profile-btn-container">
                <button className="profile-btn"  onClick={()=>{setIsEditing(true)}}>Edit profile</button>

                {changingPassword ? 
                null
                : 
                <button className="profile-btn" onClick={()=>{setChangingPassword(true)}}>Change password</button>
                }
             </Grid>

             {changingPassword ? 
             <Grid item xs={12} > 
                <form onSubmit={handlePasswordChange}>

                  <input className="pd-form-input"
                  type= "password"
                  placeholder="password"
                  name="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  />

                  <input className="pd-form-input"
                  type= "password"
                  placeholder="password_confirmation"
                  name="password_confirmation"
                  value={newPasswordConfirmation}
                  onChange={(e) => setNewPasswordConfirmation(e.target.value)}
                  />

                  <button type= "submit" value="Save"> Save </button>

                </form>
              </Grid >
              : null
              }
            </Grid>
        }
        </div>
     
    )
  }
  
  export default UserInfo;