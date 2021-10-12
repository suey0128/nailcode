import HomeICItemCard from "./HomeICItemCard";

//import css from material ui
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));


function HomeICHandCareContainer({handCareOnDisplay, onAddToCartClick, anchorEl, setAnchorEl}) {

    //material ui thing
    const classes = useStyles();


        

    return (
        <div className={classes.root}>
            <h1 className="product-page-title">Hand Care Products</h1>
            <Grid container spacing={5}>
                {handCareOnDisplay.map((handCareItem)=><HomeICItemCard key={handCareItem.id} 
                                                                        onAddToCartClick={onAddToCartClick}
                                                                        item={handCareItem}
                                                                        anchorEl={anchorEl}
                                                                        setAnchorEl={setAnchorEl}
                                                                        />)}
            </Grid>
        </div>
    )
  }
  
  export default HomeICHandCareContainer;