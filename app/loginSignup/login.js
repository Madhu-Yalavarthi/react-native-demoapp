import React from 'react';
import LoginForm from '../forms/loginForm';
import auth from '@react-native-firebase/auth';
import NavigationService from '../services/navigation';
const handleSubmit = values => {
    //alert(`Email:${values.email}, password:${values.password}`);
    //console.log('values',values);
    auth().signInWithEmailAndPassword(values.email,values.password)
    .then(()=>NavigationService.navigate('Home'))
    .catch(error=>console.warn(error))
}



const Fields = [
    {
        field:'email',
        secure:false,
        type:'emailAddress',
        placeholder:'Enter email Address..'
    },
    {
        field:'password',
        secure:true,
        type:'password',
        placeholder:'Enter password..'
    }
]


export class LoginScreen extends React.Component {

    render(){
        return (
            <LoginForm handleSubmit={handleSubmit} Fields={Fields} />   
        );
    }
}


