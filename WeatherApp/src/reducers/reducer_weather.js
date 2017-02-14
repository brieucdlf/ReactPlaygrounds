import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // console.log('Action received', action);
  // Never manipulate the state with redux. This is
  // why we put the data in a new array
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ]; //- return state.concat([action.payload.data]);
  }
  return state;
}
