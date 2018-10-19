import React from "react";

import {connect} from "react-redux";
import {changeHandler,clearNewHouse} from "./../../ducks/reducer";
import {Link} from "react-router-dom";

function Add2(props){
    console.log(props)
    return(
        <div>
            <div>
                <h3>Add New Listing</h3>
                <button onClick={()=>{props.clearNewHouse();props.history.push("/")}}>Cancel</button>
            </div>
            <div>
                <div><strong>Image URL</strong></div>
                <input type="text" name="image" value={props.image} onChange={(e)=>props.changeHandler(e.target.name,e.target.value)}/>
            </div>
            <Link to="/step1"><button>Previous Step</button></Link>
            <Link to="/step3"><button>Next Step</button></Link>

        </div>
    )
}

function mapStateToProps(state){
    
    return{
        image: state.image
    }
}

export default connect(mapStateToProps,{changeHandler,clearNewHouse})(Add2);