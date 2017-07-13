
import ACTION_TYPES from '../constants/actionTypes';
export default function memberReducer(state={},action){
  switch(action.type){
    case ACTION_TYPES.BASE_ACTION:
          return Object.assign({},state,action.memberObject);
    case ACTION_TYPES.SECOND_BASE_ACTION:
          return Object.assign({},state,action.memberObject);
    
    default: return state;
  }
}
