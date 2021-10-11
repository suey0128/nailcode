import React, { useState } from "react";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


function ShoppingCartItemCard ({itemInfo, setNeedFetch, needFetch}) {
    const [quantityInput, setQuantityInput] = useState(itemInfo.quantity)
    const [isEditingQuantity, setisEditingQuantity] = useState(false)

    const handleQuantityChange = (e) => {
        e.preventDefault();
        //patch
        // if quantity === 0, destroy the cart_item instance, fetch again  for display 
        if (parseInt(quantityInput) === 0 ){
            console.log('its 0')
           async function deleteItemInCart() {
               const res = await fetch(`cart_items/${itemInfo.cart_item_id}`,{
                   method: 'DELETE'
               })
               if (res.ok) {
                // if item is destroy in the database, this state var will trigger the fetch to display what's in the cart in the datatbase
                setNeedFetch(!needFetch);
              }
           }
           deleteItemInCart() 

        }
        else if (parseInt(quantityInput) > 0 && parseInt(quantityInput) <= itemInfo.item.quantity){ 
        // if the quantity > 0 and <= instock quantity patch the cart_item instance, fetch again for display 
            async function updateCartItem() {
                const res = await fetch(`/cart_items/${itemInfo.cart_item_id}`, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({in_cart_quantity: quantityInput })
                });
                if (res.ok) {
                    setNeedFetch(!needFetch);
                    setisEditingQuantity(false)
                } else {
                const error = await res.json()
                alert(error.message)
                }
            }
            updateCartItem();

        } else if (parseInt(quantityInput) > itemInfo.item.quantity) {
            alert(`Sorry, we only have ${itemInfo.item.quantity} of ${itemInfo.item.name} in stock. Please adjust your amount.`)
        }
        else {
            alert("Invalid input! Input must be an integer equal or greater than 0")
        }
    }

    const subtotal = itemInfo.item.price * quantityInput

    return (
        <>
            <Grid container spacing={2} >
                <Grid item xs={6} md={4}>
                <img className="img-in-cart" src={itemInfo.item.image} alt={itemInfo.item.name}/>
                </Grid>

                <Grid item xs={6} md={8}  className='shopping-cart-info-container'>
                    <h3 >{itemInfo.item.name}</h3>
                    <p> ${itemInfo.item.price}</p>
                    { isEditingQuantity ? 
                    (
                    <form  onSubmit={handleQuantityChange} >
                        <div className="shopping-cart-quantity-edit">
                            <label >Quantity: </label>
                            <input  name="quantityInCart" type="text" value={quantityInput} onChange={(e)=> {setQuantityInput(e.target.value)}}/>
                        </div>
                        <button className="shopping-cart-quantity-btn" type="submit" > Save </button>
                    </form>
                    )
                    :
                    (<div >
                        <p>Quantity: {quantityInput}</p>
                        <button className="shopping-cart-quantity-btn" onClick={()=>{setisEditingQuantity(true)}}>Edit quantity</button>
                    </div>)
                    }
                    <p className='shopping-cart-subtotal'>Subtotal: $ {subtotal}</p>

                </Grid>
            </Grid>
            <Divider />
            <br></br>
        </>                        
    )
  }
  
  export default ShoppingCartItemCard;