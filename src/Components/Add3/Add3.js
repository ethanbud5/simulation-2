import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {changeHandler,clearNewHouse} from "./../../ducks/reducer";
import {Link} from "react-router-dom";

class Add3 extends React.Component{
    constructor(props){
        super(props)
        this.addHouse = this.addHouse.bind(this)
    }
    addHouse(){
        let newHouse ={
            title:this.props.title,
            address:this.props.address,
            city:this.props.city,
            state:this.props.state,
            zip:this.props.zip,
            image:this.props.image,
            mortgage:this.props.mortgage,
            rent:this.props.rent
        }
        console.log(newHouse);
        axios.post("http://localhost:4000/api/house",newHouse).then(res=>{
            console.log(res.data);
            this.props.history.push("/")
        }).catch(err=>console.log(err))
    }
    render(){
        return(
            <div>
                <div className="add_new_listing_nav">
                    <h3>Add New Listing</h3>
                    <button onClick={()=>{this.props.clearNewHouse();this.props.history.push("/")}}>Cancel</button>
                </div>
                <div className="text_inputs_container text_center">
                    <div><strong>Monthly Mortgage Amount</strong></div>
                    <input type="number" value={this.props.mortgage} name="mortgage" onChange={(e)=>this.props.changeHandler(e.target.name,e.target.value)}/>
                    <div><strong>Desired Monthly Rent</strong></div>
                    <input type="number" value={this.props.rent} name="rent" onChange={(e)=>this.props.changeHandler(e.target.name,e.target.value)}/>
                </div>
                <div className="nav_btn_container_3 add_3_btns">
                    <Link to="/step2"><button className="nav_btn">Previous Step</button></Link>
                    <button onClick={()=>this.addHouse()} className="completed_btn">Complete</button>
                </div>
    
            </div>
        )
    }
}

function mapStateToProps(state){
    
    return state;
}

export default connect(mapStateToProps,{changeHandler,clearNewHouse})(Add3);