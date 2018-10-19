import React from "react";
import {connect} from "react-redux";
import {getHouses} from "./../../ducks/reducer";
import "./Dashboard.css"
import {Link} from "react-router-dom";
import axios from "axios";

class Dashboard extends React.Component{

    componentDidMount(){
        this.props.getHouses()
    }
    deleteHouse(id){
        axios.delete("http://localhost:4000/api/house/"+id).then(res=>{
            this.props.getHouses();
        }).catch(err=>alert(err))
    }
    render(){
        console.log(this.props)
        let listHouses = this.props.houses.map(house=>{
            return <div key={house.id} className="house_card">
                <img onClick={()=>this.props.history.push("./view/"+house.id)} src={house.img} alt="House picture"/>
                <div className="p_tag_container">
                    <div className="info_left">
                        <p><strong>Property Name:</strong> {house.name}</p>
                        <p><strong>Address:</strong> {house.address}</p>
                        <p><strong>City:</strong> {house.city}</p>
                        <p><strong>State:</strong> {house.state}</p>
                        <p><strong>Zip:</strong> {house.zip}</p>
                    </div>
                    <div className="info_right">
                        <p><strong>Monthly Mortgage:</strong> {house.mortgage}</p>
                        <p><strong>Desired Rent:</strong> {house.rent}</p>
                    </div>
                </div>
                <img className="delete_img" src="https://raw.githubusercontent.com/DevMountain/simulation-2/master/assets/delete_button.png" alt="delele x image" onClick={()=>this.deleteHouse(house.id)}/>
            </div>
        })
        return(
            <div className="dashboard_container">
                <div className="justify_space_between">
                    <div>Dashboard</div>
                    <Link to="/step1"><button>Add New Property</button></Link>
                </div>
                <h3>Home Listings</h3>
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