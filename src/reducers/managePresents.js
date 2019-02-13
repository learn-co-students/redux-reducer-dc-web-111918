//function has state and action. set state value and initial point, action will be passed in.
//action = {
//   type: "INCREASE"
// }

export function managePresents(state = {numberOfPresents: 0}, action){
  //switch will give us choices of what gets passed in with the action argument. Action.type: "INCREASE"
  switch(action.type){
    //not sure whats going on with the case. We have object, the state then the modification of state.
    case "INCREASE":
      return Object.assign({}, state, {
      numberOfPresents: state.numberOfPresents + 1
    })
    default: return state;
  }



}
