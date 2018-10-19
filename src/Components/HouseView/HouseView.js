import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {changeHandler,clearNewHouse} from "./../../ducks/reducer";
import {Link} from "react-router-dom";

class HouseView extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        let listHouses = this.props.houses.filter(house=>+house.id ===+this.props.match.params.id).map(house=>{
            return <div key={house.id} className="house_card">
                <img src={house.img} alt="House picture"/>
                <div className="p_tag_container">
                    <div className="info_left">
                        <p>Property Name: {house.name}</p>
                        <p>Address: {house.address}</p>
                        <p>City: {house.city}</p>
                        <p>State: {house.state}</p>
                        <p>Zip: {house.zip}</p>
                    </div>
                    <div className="info_right">
                        <p>Monthly Mortgage: {house.mortgage}</p>
                        <p>Desired Rent: {house.rent}</p>
                    </div>
                </div>
            </div>
        })
        return(
            <div className="dashboard_container">
                <div className="justify_space_between">
                    <Link to="/"><button>Back</button></Link>
                </div>
                <div className="list_container">
                    {listHouses}
                </div>
            </div>
        )
    }

}
function mapStateToProps(state){
    
    return state;
}
export default connect(mapStateToProps,{changeHandler,clearNewHouse})(HouseView)