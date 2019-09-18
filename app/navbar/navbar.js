import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import {UserIcon} from './userIcon';
import { Icon } from 'react-native-elements';
import NavigationService from '../services/navigation';
import auth from '@react-native-firebase/auth';
//import firebaseApp from '../../Firebase';


export class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:{}
        };
    }
    onAuthStateChanged = (doc)=>{
        this.setState({user:doc});
    }
    componentDidMount(){
        auth().onAuthStateChanged(this.onAuthStateChanged)
    }
    render(){

        return (
            <View style={styles.navbarContainer}>
                <View style={styles.appMenu}>
                    <Icon name='menu' color="#fff" onPress={()=>NavigationService.toggleDrawer() }/>
                </View>
                <Image source={require('../../assets/appLogo.png')} style={{width:75,height:40}} />
                <UserIcon user={this.state.user}></UserIcon>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navbarContainer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        height:60,
        backgroundColor:'#f4511e',
        alignItems:'center',
    },
    textST:{
        fontSize:20,
        fontWeight: '600',
        color:'#fff'
    },
    appMenu:{
        marginLeft:20,
    }
    
})