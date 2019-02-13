export function manageFriends(state, action){
  switch(action.type) {
    case "ADD_FRIEND":
      return ({...state, friends:
        [...state.friends, action.friend]
      })

    case "REMOVE_FRIEND":
      let index = state.friends.findIndex(friend => friend.id === action.id)
      let copyOfFriendsArr = [...state.friends]
      copyOfFriendsArr.splice(index, 1)
      return({
        ...state, friends: copyOfFriendsArr
      })

      default: return state;
  }
}
