import { ADD_HERO, UPDATE_HERO, DELETE_HERO } from "./actions.types";
import { generateHero} from "../utils/generator";

export default (state, action)=>{
    switch (action.type) {
        case ADD_HERO:
           return [...state, generateHero()];
             
        case UPDATE_HERO:
            return state.map(hero => {return hero.id === action.payload.id ?  action.payload : hero });

        case DELETE_HERO:
            return state.filter(hero =>{return hero.id !== action.payload});        
            
        default:
          return state;
      }

    
}