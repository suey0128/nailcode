import UserInfo from "./UserInfo";
import UserPurchase from "./UserPurchase";

import {useEffect} from "react"

function User ({currentUser, setCurrentUser, setNeedFetch, needFetch}) {

 //fetch the shopping cart items  
  useEffect(() => {
    setNeedFetch(!needFetch)
  },[])

    return (
        <div className="profile-container">

            <UserInfo currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            
            <h2>Order History</h2>
            {
                currentUser.purchases.map(purchase=> <UserPurchase key={purchase.id} purchase={purchase}/>)
            }
        </div>
    )
  }
  
  export default User;