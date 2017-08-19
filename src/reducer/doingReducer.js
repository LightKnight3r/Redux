var doingReducer = (temp = 30, action)=>{
  switch (action.type) {
    case 'INCREASE_TEMP':
      return ++temp;
    case 'DECREASE_TEMP':
      return --temp;
    default:
      return temp;
  }
}
module.exports = doingReducer;
