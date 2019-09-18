import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    homePage:{
        display:'flex',
        flexDirection:'column',
    },
    userIcon:{
        width:30,
        height:30
    },
    slide: {
        flex: 1,
        width:null,
        height:null,
        resizeMode:'stretch', // or 'stretch'
    }
})