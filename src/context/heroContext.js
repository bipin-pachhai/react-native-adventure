import React, {useReducer} from "react";
import createDataContext from "./createDataContext";
import gameReducer from "../utils/Reducer";
import { generateHero} from "../utils/generator";
import {ADD_HERO, UPDATE_HERO, DELETE_HERO} from "../utils/actions.types";



// initial state with two heroes...
let initial_state = [];
for(let i = 0 ; i < 2; i++){
    initial_state[i] = generateHero();
};


//dispatcher methods
const addHero = (dispatch)=>{
    return  ()=>{
    dispatch({type: ADD_HERO});
    }
};

const updateHero = (dispatch) =>{
    return (hero, callback )=>{
      //  console.log(hero);
        dispatch({type: UPDATE_HERO, payload : hero});
        //console.log("Successfully saved");
        callback();
    }
};

const deleteHero = (dispatch) =>{
    return (id)=>{
        dispatch({type: DELETE_HERO, payload : id});
        //console.log("Successfully deleted");
    }
}




export const {Context, Provider} = createDataContext(gameReducer, {addHero: addHero , updateHero :updateHero, deleteHero: deleteHero}, initial_state);
