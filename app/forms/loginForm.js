import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Keyboard, TouchableOpacity, Button, keyboard } from 'react-native';
// import { Input, FormValidationMessage, Button } from 'react-native-elements';
import {reduxForm} from 'redux-form';
import {FieldForm} from './fieldForm';

class LoginComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    handleFieldChange = (fieldId, value)=>{
        this.setState({[fieldId]:value});
    }

    render() {
    const {handleSubmit, Fields} = this.props;
   
    const fields = Fields.map(doc=>(
        <FieldForm
            key={doc.field}
            id={doc.field}
            onChange={this.handleFieldChange}
            secure={doc.secure}
            placeholder={doc.placeholder}
            type={doc.type}
            value={this.state[doc.field]}
        ></FieldForm>
    ));
    
    return (
        <View style={styles.container}>
            <Text style={{fontSize:20,alignSelf:'center'}}>LOGIN FORM</Text>
            {fields}
            <Button onPress={()=>handleSubmit(this.state)} title="SUBMIT"></Button>
            {this.state.email ? <Text style={{padding:10}}>{JSON.stringify(this.state)}</Text> : null}
        </View>
        )
    }
}


const LoginForm = reduxForm ({
    form:'login'
})(LoginComponent);

export default LoginForm;


const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        padding:20,
        alignContent:'center',
    },
    header:{
        display:'flex',
        justifyContent:'center',
        marginBottom:10
    },
    loginForm:{
        display:'flex',
        flexDirection:'column'
    }
});