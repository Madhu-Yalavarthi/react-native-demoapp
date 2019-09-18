
import React from 'react';
import { StyleSheet, View, Text, ScrollView, TextInput, Keyboard, } from 'react-native';
import {Button} from 'react-native-elements';
import {reduxForm} from 'redux-form';
import { FieldForm } from './fieldForm';



export class SignupComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    handleFieldChange = (fieldId, value) =>{
        this.setState({[fieldId]:value});
    }
        
    render(){
        const {handleSubmit, Fields} = this.props;
        const fieldForm = Fields.map(doc=>(
            <FieldForm
                key={doc.field}
                id={doc.field}
                onChange={this.handleFieldChange}
                secure={doc.secure}
                placeholder={doc.placeholder}
                type={doc.type}
            ></FieldForm>
        ))
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{fontSize:20,alignSelf:'center'}}>SIGNUP FORM</Text>
                </View>
                <View style={styles.signupForm}>
                    {fieldForm}
                    <Button title="submit" onPress={()=>handleSubmit(this.state)}></Button>
                    {this.state.firstName ? <Text style={{padding:10}}>{JSON.stringify(this.state)}</Text> : null}
                </View>
                
            </View>
            </ScrollView>
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
    signupForm:{
        display:'flex',
        flexDirection:'column',
    }
});


const SignupForm = reduxForm({
    form:'signup'
})(SignupComponent);

export default SignupForm;