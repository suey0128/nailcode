import PurchaseDetailCard from "./PurchaseDetailCard"

import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'

function PurchaseDetail () {
    const [isPurchaseLoaded, setIsPurchaseLoaded] = useState(false)
    const [oderDetails, setOrderDetails] = useState(null)

    const params = useParams();

// fetch the purchase
  useEffect(() => {
    async function fetchPurchase(){
        const res = await fetch(`http://localhost:3000/shopping_carts/${params.purchase_id}`)
        if (res.ok) {
            const order =  await res.json()
            setOrderDetails(order)
            setIsPurchaseLoaded(true)
        }
    }
    fetchPurchase()
  },[])

  if (!isPurchaseLoaded) return <h2>Loading...</h2>;

    return (
        <div className="purchase-detail-container">
            <h2>Order #{oderDetails.id}</h2>
            <p>Order date: {oderDetails.updated_at.slice(0,10)}</p>
            <p>Payment:</p>
            <p>Total: ${oderDetails.payment.total.toFixed(2)}</p>
            <p>Subtotal: ${oderDetails.payment.subtotal}</p>
            <p>Tax: ${oderDetails.payment.tax}</p>
            <p>Shipping: ${oderDetails.payment.shipping}</p>
              {
              oderDetails.all_items_in_cart.map(i =>  <PurchaseDetailCard key={i.id} purchasedItem={i}/>)  
              }
        </div>
    )
  }
  
  export default PurchaseDetail;