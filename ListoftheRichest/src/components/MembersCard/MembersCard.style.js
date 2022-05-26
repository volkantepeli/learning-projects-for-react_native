import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container : {
        backgroundColor: 'white',
        margin:10,
        borderRadius:10,
    },
    image : { 
        height:Dimensions.get('window').height/4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    name : {
        fontWeight : 'bold',
        fontSize: 18,
        textAlign:'center',

    },
    fortune : {
        fontStyle:'italic',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center',
         
    
    },
    about : {
        marginTop: 3,

    },
    inner_container :{
        padding: 5
    },
    
});
