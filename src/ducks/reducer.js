import axios from "axios";
let initialState = {
    houses:[]
}

const GET_HOUSES = "GET_HOUSES";

export function getHouses(){
    return{
        type:GET_HOUSES,
        payload:axios.get("http://localhost:4000/api/houses")
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
        default:
            return state;
    }
}