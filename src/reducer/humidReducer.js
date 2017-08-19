export default humidReducer = (humid = 60, action)=>{
  switch (action.type) {
    case 'INCREASE_HUMID':
      return humid+2;
    case 'DECREASE_HUMID':
      return humid-2;
    default:
      return humid;
  }
}
