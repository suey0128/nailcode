// react-router-dom Imports
import { useHistory } from "react-router-dom";

import Grid from '@material-ui/core/Grid';


function HomeICItemCard({item, onAddToCartClick}) {

    let history = useHistory();

    const handleItemPhotoClick = () => {
        if (item.color) { //press_on
            history.push(`/items/press_ons/${item.id}`);
        } else if (item.strength) { //glue
            history.push(`/items/glues/${item.id}`);
        } else { //hand_care
            history.push(`/items/hand_cares/${item.id}`);
        }
    }

    return (
 
        <Grid item xs={12} sm={6} md={3}>
            <div >
                <img onClick={handleItemPhotoClick} className="img-in-card" src={item.image} alt={item.name}/>

                <div className="info-container">
                    <div>
                    <h3 >{item.name}</h3>
                    <p>$ {item.price}</p>
                    </div>
                    <button onClick={(e)=> onAddToCartClick(e,1,item)}>Add to Cart</button>
                </div>
                
            </div>
        </Grid>

    )
  }
  
  export default HomeICItemCard;