export default changeReducer = (text="Tap to change the text", action)=>{
  switch (action.type) {
    case 'CHANGE':
      return 'INCREASED';
    case 'UNCHANGE':
      return 'DECREASE';
    default:
      return text;
  }
}
