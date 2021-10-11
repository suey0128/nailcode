// react-router-dom Imports
import { useHistory } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';


function HomeICItemCard({item, onAddToCartClick, anchorEl, setAnchorEl}) {

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

    const handleClose = () => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'added-to-cart' : undefined;

    return (
 
        <Grid item xs={12} sm={6} md={3}>
            <div >
                <img onClick={handleItemPhotoClick} className="img-in-card" src={item.image} alt={item.name}/>

                <div className="info-container">
                    <div>
                    <h3 >{item.name}</h3>
                    <p>$ {item.price}</p>
                    </div>
                    <button aria-describedby={id} onClick={(e)=> onAddToCartClick(e,1,item)}>Add to Cart</button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                    >
                        <Typography sx={{ p: 5 }}>Added to cart.</Typography>
                    </Popover>
                </div>
                
            </div>
        </Grid>

    )
  }
  
  export default HomeICItemCard;