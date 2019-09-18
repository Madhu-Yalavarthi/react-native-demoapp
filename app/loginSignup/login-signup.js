import React from 'react';
import { StyleSheet, View, Text, Image,  } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen } from './login';
import { SignupScreen } from './signup'
import {Button} from 'react-native-elements';
import auth, {firebase} from '@react-native-firebase/auth';
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import NavigationService from '../services/navigation';


export class LoginSignupScreen extends React.Component {

    
    
    render(){
        return (
            <View style={styles.container}>
                <View style={[styles.loginSignup,styles.boxWithShadow]}>
                    <View style={styles.header}>
                        <Text style={{alignSelf:'center',fontSize:25}}>LOGIN/SIGNUP</Text>
                    </View>
                    
                    <View style={styles.appIconContainer}>
                        <Image style={styles.appIcon} source={require('../../assets/lockIcon.png')} />
                    </View>

                    <View style={styles.actions}>
                        <View style={{}}>
                        <LoginButton
                            onLoginFinished={(error, result) =>{
                                if (error) {
                                    console.log("login has error: " + result.error);
                                } else if (result.isCancelled) {
                                    console.log("login is cancelled.");
                                } else {
                                    AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        
                                        //console.log(data.accessToken.toString())
                                        let credentials = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                                        alert(`Credentials: ${credentials}`)
                                        // auth().signInWithCredential(credentials)
                                        // .then(()=>NavigationService.navigate('Home'))
                                        // .catch(error=>console.warn(error.message))
                                    }
                                    )
                                }
                            } }
                            onLogoutFinished={() => console.log("logout.")}/>
                        </View>
                        <View style={styles.loginWithGoogle}>
                            <Button title="Login With Google"></Button>
                        </View>
                        <View style={styles.loginWithEmail}>
                            <Button title="Login With Email" buttonStyle={{backgroundColor:'#4ea53e'}} onPress={()=>this.props.navigation.navigate('Login')}></Button>
                        </View>
                    </View>

                    <View style={styles.footer}>
                        <Text >Don't have Account?</Text>
                        <Text style={{color:'blue',marginLeft:10,textDecorationLine:'underline'}} onPress={()=>this.props.navigation.navigate('Signup')}>Create One!</Text>
                    </View>
                    
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        height:'100%',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        padding:20
    },
    loginSignup:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        //padding:20,
       // elevation:3   
    },
    boxWithShadow: {
        shadowColor: 'rgba(0,0,0,0.2)',
        //shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOpacity:1.0,  
        elevation: 5
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:10
    },
    appIconContainer:{
        marginBottom:20
    },
    appIcon:{
        width:100,
        height:100,
        alignSelf:'center'
    },
    actions:{
        display:'flex',
        flexDirection:'column',
        marginBottom:10
    },
    loginWithGoogle:{
        marginBottom:10
    },
    loginWithEmail:{},
    footer:{
        display:'flex',
        flexDirection:'row',
    }
});



export const LoginSignupNavigator = createStackNavigator(
    {
        LoginSignup:{
            screen:LoginSignupScreen
        },
        Login:{
            screen:LoginScreen
        },
        Signup:{
            screen:SignupScreen
        }
    },
    {
        initialRouteName:'LoginSignup',
        headerMode:'none'
    }
)