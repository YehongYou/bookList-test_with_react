// state is not appliaction state, only the state
// this reducer is reponsible for

export default function (state = null, action){ // if state undefine, set it null
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
      break;
    default:

  }
  return state
}
