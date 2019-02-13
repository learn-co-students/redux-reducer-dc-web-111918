export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      return({...state,friends: [...state.friends, action.friend]})

    case "REMOVE_FRIEND":
    const index = state.friends.findIndex(friend=> friend.id === action.id)
       let friendsCopy = [...state.friends]
       friendsCopy.splice(index, 1)
       return (
           {...state,
               friends: friendsCopy}
       )
    default:
      return state;
  }
}
