import {GET_MOBS,SUCCEED,FAILED,FETCHING} from "../actionTypes";
const initalState = {
    isLoading:false,
    statusMessage: "",
    mobs:[],
};
const minecraftReducer = (state = initalState ,action) => {
    switch(action.type){
        case GET_MOBS + FETCHING:
            state = {...state,mobs:action.payload}
            return state;
        case GET_MOBS + SUCCEED:
            console.log(2);
            return state;
        default:
            return state;

    }
    return state;
};

export default minecraftReducer;