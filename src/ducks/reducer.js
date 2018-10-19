import axios from "axios";
let initialState = {
    houses:[],
    
        title:"",
        address:"",
        city:"",
        state:"",
        zip:0,
        image:"",
        mortgage:0,
        rent:0
    
}

const GET_HOUSES = "GET_HOUSES";
const CHANGE_HANDLER = "CHANGE_HANDLER";
const CLEAR_HOUSE_STATE = "CLEAR_HOUSE_STATE";

export function getHouses(){
    
    return{
        type:GET_HOUSES,
        payload:axios.get("http://localhost:4000/api/houses")
    }
}
export function changeHandler(name,value){
    console.log(initialState)
    return{
        type:CHANGE_HANDLER,
        payload:{
            name,
            value
        }
    }
}
export function clearNewHouse(){
    return{
        type:CLEAR_HOUSE_STATE
    }
}



export default function reducer(state=initialState,action){
    switch (action.type) {
 
        case `${GET_HOUSES}_PENDING`:
        console.log(action.type);
        return {
            ...state,
            isLoading: true
        };
        case `${GET_HOUSES}_FULFILLED`:
        console.log(action.type);
        return {
            ...state,
            isLoading: false,
            houses: action.payload.data
        };
        case `${GET_HOUSES}_REJECTED`:
        console.log(action.type);
      return {
        ...state,
        isLoading: false,
      }
      case CHANGE_HANDLER:
    //   let copyOfState = {...state};
    //   copyOfState =copyOfState.houseToAdd[action.payload.name] = action.payload.value;
        return{
            // copyOfState
            ...state,
            [action.payload.name]:action.payload.value
        }
      case CLEAR_HOUSE_STATE:
        return{
            ...state,
                title:"",
                address:"",
                city:"",
                state:"",
                zip:0,
                image:"",
                mortgage:0,
                rent:0
        }
        default:
            return state;
    }
}