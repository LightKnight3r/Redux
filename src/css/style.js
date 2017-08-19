import{StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex:1,
    flexDirection: 'column',
    marginTop: 100,
  },
  increase: {
    width: 30,
    height:30,
    backgroundColor: 'red',
    borderRadius: 15,
    marginTop: 20,
    marginBottom:20,
  },
  text: {
    fontSize: 18,
    textAlign:'center',
    color: 'white',
    fontWeight:'bold',
  },
  temp:{
    fontSize: 30,
    fontWeight:'bold',
  }
});
module.exports=styles;
