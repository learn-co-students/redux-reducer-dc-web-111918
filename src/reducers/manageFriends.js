export function manageFriends(state, action){
  switch(action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      let copy = [...state.friends]
      let idToRemove = action.id
      let updatedFriends = copy.filter(friend => friend.id !== idToRemove)
      return {friends: updatedFriends}
    default:
      return state
  }
}
