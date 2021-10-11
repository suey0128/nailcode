
import HomeICGlueContainer from './HomeICGlueContainer';
import HomeICPressOnContainer from './HomeICPressOnContainer';
import HomeICHandCareContainer from './HomeICHandCareContainer';


function HomeItemContainer({showItemPage, pressOnOnDisplay, glueOnDisplay, handCareOnDisplay, setPressOnOnDisplay, pressOnArr, onAddToCartClick, anchorEl, setAnchorEl}) {



    const displayItemPage = () => {
        if (showItemPage === "pressOn") {
        return <HomeICPressOnContainer pressOnOnDisplay={pressOnOnDisplay}
                                        setPressOnOnDisplay={setPressOnOnDisplay}
                                        pressOnArr={pressOnArr}
                                        onAddToCartClick={onAddToCartClick}
                                        anchorEl={anchorEl}
                                        setAnchorEl={setAnchorEl}
                                        />
        } else if (showItemPage === "glue") {
        return <HomeICGlueContainer glueOnDisplay={glueOnDisplay}
                                    onAddToCartClick={onAddToCartClick}
                                    anchorEl={anchorEl}
                                    setAnchorEl={setAnchorEl}
        
        
                />
        } else {
        return <HomeICHandCareContainer handCareOnDisplay={handCareOnDisplay}
                                        onAddToCartClick={onAddToCartClick}
                                        anchorEl={anchorEl}
                                        setAnchorEl={setAnchorEl}
        
        />
        }
    }

    return (
        <div>
            {displayItemPage()}
        </div>
    )
  }
  
  export default HomeItemContainer;