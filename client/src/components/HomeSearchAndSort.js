import Grid from '@material-ui/core/Grid';

function HomeSearchAndSort ({onSearchChange, onSortBarChange, setShowItemPage}) {
   ;
    return (
        <Grid container className="search-sort-container">
            
            <Grid item xs={12} md={6} className="category-container">
                <h3 className="sText">Category: </h3>
                <button  className="category-btn" onClick={()=>{setShowItemPage("pressOn")}}>Press On</button>
                <button  className="homePageButton" onClick={()=>{setShowItemPage("glue")}}>Glue</button>
                <button  className="homePageButton"  onClick={()=>{setShowItemPage("handCare")}}>Hand Care</button>
            </Grid>
            


            <Grid item xs={12} md={3} >
                <input id="search-bar" className="search-sort-bar" type="text" placeholder="Search..." 
                    onChange={(e)=>{onSearchChange(e.target.value)}}/>
                    
            </Grid>

            <Grid item xs={12} md={3} >
                <select name="SortBy" className="search-sort-bar" id="SortBy" onChange={(e)=>{onSortBarChange(e.target.value)}}>
                    <option value="sortBy">Sort by</option>
                    <option value="priceLowtoHigh">Price: Low to High</option>
                    <option value="priceHightoLow">Price: High to Low</option>
                </select>
            </Grid>


        </Grid>
    )
  }
  
  export default HomeSearchAndSort;