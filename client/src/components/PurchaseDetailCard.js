import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

function PurchaseDetailCard ({purchasedItem}) {

    let history = useHistory();

    const handleItemPhotoClick = () => {
        if (purchasedItem.item.color) { //press_on
            history.push(`/items/press_ons/${purchasedItem.item.id}`);
        } else if (purchasedItem.item.strength) { //glue
            history.push(`/items/glues/${purchasedItem.itemid}`);
        } else { //hand_care
            history.push(`/items/hand_cares/${purchasedItem.item.id}`);
        }
    }

    return (
        <>
            <br></br>
            <Grid container spacing={2} className="purchase-detail-item-container">
                <Grid item xs={6} md={4}>
                    <img  className="img-in-cart" onClick={handleItemPhotoClick} src={purchasedItem.item.image} alt={purchasedItem.item.name}/> 
                </Grid>
                <Grid item xs={6} md={8}  className='shopping-cart-info-container'>
                <h3>{purchasedItem.item.name}</h3>
                <p>${purchasedItem.item.price}</p>
                <p>Quantity: {purchasedItem.quantity}</p>
                <p>Item total: ${purchasedItem.item_total}</p>
                </Grid>
            </Grid>
  
        </>
    )
  }
  
  export default PurchaseDetailCard;