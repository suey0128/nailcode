import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

function ItemDetailPage ({showItemPage, onAddToCartClick, anchorEl, setAnchorEl}) {
    const [itemInfo, setItemInfo] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [addTocartQuantity, setAddTocartQuantity] = useState(1)



    const params = useParams();

    // fetch items 
    useEffect(() => {
        async function fetchItem(){
            const res = await fetch(`/${params.type}/${params.id}`)
            if (res.ok) {
                const itemData =  await res.json()
                setItemInfo(itemData)
                setIsLoaded(true);
            }
        }
        fetchItem()
    },[])

    if (!isLoaded) return <h2>Loading...</h2>;

    let showItemDetail; 
    if (showItemPage === "pressOn") {
        showItemDetail = <p>color: {itemInfo.color} <span>shape: {itemInfo.shape} </span> <span>add on: {itemInfo.add_on}</span></p>
    } else if (showItemPage ==="glue") {
        showItemDetail = <p>strength: {itemInfo.strength}</p>
    } 


    const handleClose = () => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'added-to-cart' : undefined;

    return (

        <Grid container spacing={5} className="product-detail-container">
            <Grid item xs={12} lg={6} className="product-detail-pic">
                <img src={itemInfo.image} className="detail-image"/>
            </Grid>

            <Grid item xs={12} lg={6} className="product-detail-info">
                <h2>{itemInfo.name}</h2>
                <p>$ {itemInfo.price}</p>
                <p>In Stock: {itemInfo.quantity} items</p> 
                {showItemDetail}
                <p>description: {itemInfo.description}</p>
                <form onSubmit={(e)=>{onAddToCartClick(e,addTocartQuantity, itemInfo)}}>
                    <select className="select-box" onChange={(e)=>{setAddTocartQuantity(Number(e.target.value))}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button aria-describedby={id} type="submit" value="ADD TO CART" > Add to cart</button>
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
                </form>
            </Grid>

        </Grid>
        
    )
  }
  
  export default ItemDetailPage;