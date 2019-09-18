import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
    },
    userIconContainer:{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding: 10
    },
    menuContainer:{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    menuTab:{
       display: 'flex',
       flexDirection:'row',
       justifyContent:'space-around' 
    },


})