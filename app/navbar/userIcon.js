
import React from 'react';
import { View, Text, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import NavigationService from '../services/navigation';

export class UserIcon extends React.Component {
    render() {
        const { user } = this.props;
        return (
            
            <View style={styles.userIcon}>
                {
                    user ? (user.photoURL ?
                    <Avatar rounded
                        source={{uri:user.photoURL}}
                        onPress={() => NavigationService.navigate('User',{uid:user.uid})}
                    /> :  <Avatar rounded
                    source={require("../../assets/userIcon.png")}
                    onPress={() => NavigationService.navigate('User',{uid:user.uid})}
                        /> )
                        :
                
                    <Icon style={styles.accountLogin} 
                    size={28} 
                    name="user-circle" 
                    type="font-awesome" 
                    color="#fff" 
                    onPress={()=>NavigationService.navigate('LoginSignup')}></Icon>
                
                }
               {/* <Text style={styles.textST} color="#fff" onPress={()=>this.props.navigation.navigate('UserLogin')}>Login/Signup</Text> */}
               
            </View>
                
        );
    }
}


const styles = StyleSheet.create({
    
    userIcon:{
        width:40,
        height:40,
        borderRadius:50,
        borderColor:'#fff',
        borderWidth:2,
        marginRight:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    },
    accountLogin:{
        alignSelf:'center'
    }
})