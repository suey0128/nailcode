
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";


function HomeICPressOnFilter({onHandleColorCheckBoxChange, onHandleShapeCheckBoxChange, onHandleAddOnCheckBoxChange}) {

    // const colors = [
    //     "all", "white", "pink", "nude", "purple", "red", "green", "peach", "chrome", "black" 
    // ]

    // const shapes = [
    //     "coffin", "round", "stiletto", "square"
    // ]

    // const addOns = [
    //     "jewels", "others"
    // ]

    // const colorFilter = (colors) =>  (
    //     <>
    //     {colors.map(color => (
    //         <>
    //         <input type="checkbox" id={color} name={color} value={color}  onChange={onHandleColorCheckBoxChange}/>
    //         <label >{color === 'all' ? 'multi colors' : {color}}</label>
    //         </>
    //     ))}
    //        </>
    // )

    return (
        <div>
            <div className="color-filter">
                <p className="pressOnPageLabels">Color</p>
                <input type="checkbox" id="all" name="all" value="all"  onChange={onHandleColorCheckBoxChange}/>
                <label >multi colors</label>
                <input type="checkbox" id="white" name="white" value="white"  onChange={onHandleColorCheckBoxChange}/>
                <label >white</label>
                <input type="checkbox" id="pink" name="pink" value="pink"  onChange={onHandleColorCheckBoxChange}/>
                <label >pink</label>
                <input type="checkbox" id="nude" name="nude" value="nude"  onChange={onHandleColorCheckBoxChange}/>
                <label >nude</label>
                <input type="checkbox" id="purple" name="purple" value="purple"  onChange={onHandleColorCheckBoxChange}/>
                <label > purple</label>
                <input type="checkbox" id="red" name="red" value="red" onChange={onHandleColorCheckBoxChange}/>
                <label >red</label>
                <input type="checkbox" id="green" name="green" value="green" onChange={onHandleColorCheckBoxChange}/>
                <label >green</label>
                <input type="checkbox" id="peach" name="peach" value="peach" onChange={onHandleColorCheckBoxChange}/>
                <label >peach</label>
                <input type="checkbox" id="chrome" name="chrome" value="chrome" onChange={onHandleColorCheckBoxChange}/>
                <label >chrome</label>
                <input type="checkbox" id="black" name="black" value="black" onChange={onHandleColorCheckBoxChange}/>
                <label >black</label>
            </div>

            <div className="shape-filter">
                <p className="pressOnPageLabels">Shape</p>
                <input type="checkbox" id="coffin" name="coffin" value="coffin" onChange={onHandleShapeCheckBoxChange}/>
                <label >coffin</label>
                <input type="checkbox" id="round" name="round" value="round" onChange={onHandleShapeCheckBoxChange}/>
                <label >round</label>
                <input type="checkbox" id="stiletto" name="stiletto" value="stiletto" onChange={onHandleShapeCheckBoxChange}/>
                <label >stiletto</label>
                <input type="checkbox" id="square" name="square" value="square" onChange={onHandleShapeCheckBoxChange}/>
                <label >square</label>
            </div>

            <div className="add-on-filter">
                <p className="pressOnPageLabels">Add Ons</p>
                <input type="checkbox" id="jewels" name="jewels" value="jewels" onChange={onHandleAddOnCheckBoxChange}/>
                <label >jewels</label>
                <input type="checkbox" id="others" name="others" value="others" onChange={onHandleAddOnCheckBoxChange}/>
                <label >others</label>
            </div>

            <br></br>


        </div>
   
        // <Box
        //     sx={{ width: 250 }}
        //     role="filter"
        //     > 
        //     <div>
        //         <p className="pressOnPageLabels">Color</p>
        //         {colorFilter(colors)}
        //     </div>

        //     <Divider />

        //     <div>
        //         <p className="pressOnPageLabels">Shape</p>
        //         {shapes.map(shape => {
        //             <>
        //                 <input type="checkbox" id={shape} name={shape} value={shape}  onChange={onHandleShapeCheckBoxChange}/>
        //                 <label >{shape}</label>
        //             </>
        //         })}
        //     </div>

        //     <Divider />

        //     <div>
        //         <p className="pressOnPageLabels">Add ons</p>
        //         {addOns.map(addon => {
        //             <>
        //                 <input type="checkbox" id={addon} name={addon} value={addon}  onChange={onHandleAddOnCheckBoxChange}/>
        //                 <label >{addon}</label>
        //             </>
        //         })}
        //     </div>
            
        // </Box>


    )
  }
  
  export default HomeICPressOnFilter;


//   marble
//   clould designs
//   glow in the dark
//   jewels
//   chrome polish
//   french tip
//   sparkles