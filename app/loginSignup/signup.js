import React from 'react';
import { StyleSheet} from 'react-native';
import SignupForm from '../forms/signupForm';

const Fields = [
    {
        field:'firstName',
        placeholder:'First name',
        type:'name',
        secure:false
    },
    {
        field:'lastName',
        placeholder:'Last Name',
        secure:false,
        type:'name',

    },
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
    },
    {
        field:'confirmPassword',
        secure:true,
        type:'password',
        placeholder:'Confirm password..'
    }
]

const handleSubmit = values =>{
    alert(`UserName:${values.firstName} ${values.lastName}
        Email:${values.email}
        password:${values.password}
    `);
}

export class SignupScreen extends React.Component {

    render(){
        return (
            
            <SignupForm handleSubmit={handleSubmit} Fields={Fields} />
        );
    }
}


const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        padding:20
    },
    nameView:{
        display:'flex',
        flexDirection:'row',
    }
});