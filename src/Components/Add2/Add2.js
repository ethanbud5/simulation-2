import React from "react";

import {connect} from "react-redux";
import {changeHandler,clearNewHouse} from "./../../ducks/reducer";
import {Link} from "react-router-dom";

function Add2(props){
    console.log(props)
    return(
        <div>
            <div className="add_new_listing_nav">
                <h3>Add New Listing</h3>
                <button onClick={()=>{props.clearNewHouse();props.history.push("/")}}>Cancel</button>
            </div>
            <div className="text_inputs_container text_center">
                <div><strong>Image URL</strong></div>
                <input className="image_input" type="text" name="image" value={props.image} onChange={(e)=>props.changeHandler(e.target.name,e.target.value)}/>
            </div>
            <div className="nav_btn_container_2">
                <Link to="/step1"><button className="nav_btn">Previous Step</button></Link>
                <Link to="/step3"><button className="nav_btn">Next Step</button></Link>
            </div>

        </div>
    )
}

function mapStateToProps(state){
    
    return{
        image: state.image
    }
}

export default connect(mapStateToProps,{changeHandler,clearNewHouse})(Add2);