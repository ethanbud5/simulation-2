import React from "react";

import {connect} from "react-redux";
import {changeHandler,clearNewHouse} from "./../../ducks/reducer";
import {Link} from "react-router-dom";

function Add1(props){
    console.log(props)
    return(
        <div>
            <div>
                <h3>Add New Listing</h3>
                <button onClick={()=>{props.clearNewHouse();props.history.push("/")}}>Cancel</button>
            </div>
            <div>
                <div><strong>Property Name</strong></div>
                <input type="text" value={props.title} name="title" onChange={(e)=>props.changeHandler(e.target.name,e.target.value)}/>
                <div><strong>Address</strong></div>
                <input type="text" value={props.address} name="address" onChange={(e)=>props.changeHandler(e.target.name,e.target.value)}/>
                <div className="display_inline_inputs">
                    <div><strong>City</strong></div>
                    <input type="text" value={props.city} name="city" onChange={(e)=>props.changeHandler(e.target.name,e.target.value)}/>
                    <div><strong>State</strong></div>
                    <input type="text" maxLength="2" value={props.state.toUpperCase()} name="state" onChange={(e)=>props.changeHandler(e.target.name,e.target.value)}/>
                    <div><strong>Zip</strong></div>
                    <input type="number" value={props.zip} name="zip" onChange={(e)=>props.changeHandler(e.target.name,e.target.value)}/>
                </div>
            </div>
            <Link to="/step2"><button>Next Step</button></Link>

        </div>
    )
}

function mapStateToProps(state){
    
    return{
        title: state.title,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps,{changeHandler,clearNewHouse})(Add1);