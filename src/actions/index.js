export function selectBook (book){
  // slectBook is a actioncreator, it need to creat a action,
  // an object with type property
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}
