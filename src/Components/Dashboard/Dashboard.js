import React from "react";
import {connect} from "react-redux";
import {getHouses} from "./../../ducks/reducer";
import "./Dashboard.css"
import {Link} from "react-router-dom";

class Dashboard extends React.Component{

    componentDidMount(){
        this.props.getHouses()
    }
    render(){
        console.log(this.props)
        let listHouses = this.props.houses.map(house=>{
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
                    <h1>Dashboard</h1>
                    <Link to=""><button>Add New Property</button></Link>
                </div>
                <div className="list_container">
                    {listHouses}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        houses:state.houses
    }
}

export default connect(mapStateToProps,{getHouses})(Dashboard);