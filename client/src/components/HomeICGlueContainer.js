import HomeICItemCard from "./HomeICItemCard";


//import css from material ui
import Grid from '@material-ui/core/Grid';


function HomeICGlue({glueOnDisplay, onAddToCartClick, anchorEl, setAnchorEl}) {

    return (
      <div >
        <h1 className="product-page-title">Glue Products</h1>
        <Grid container spacing={5}>
            {glueOnDisplay.map((glueItem)=><HomeICItemCard key={glueItem.id} 
                                                           onAddToCartClick={onAddToCartClick} 
                                                           item={glueItem}
                                                           anchorEl={anchorEl}
                                                           setAnchorEl={setAnchorEl}
                                                           />)}

        </Grid>
      </div>

    )
  }
  
  export default HomeICGlue;