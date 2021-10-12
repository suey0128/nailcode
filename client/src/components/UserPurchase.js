import {  Link } from "react-router-dom";


function UserPurchase ({purchase}) {



    return (
        <div>

            <Link to={`/purchase/${purchase.id}`}>
                <h3 >order: #{purchase.id}</h3>
            </Link>
            <p>order date: {purchase.updated_at.slice(0,10)}</p>
            <br></br>
        </div>
    )
  }
  
  export default UserPurchase;