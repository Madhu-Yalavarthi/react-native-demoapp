import React from 'react';
import { TextInput, View, Keyboard, Text, StyleSheet } from 'react-native';


export class FieldForm extends React.Component {
    constructor(props){
        super(props);
    }

    handleChange = (value) =>{
        const text = value;
        this.props.onChange(this.props.id, text);
    }

    render(){
        const { value, secure, placeholder, type, id } = this.props;

        return(
            <View style={styles.container}>
                <Text style={styles.label}>{id}</Text>
                <TextInput  
                        style={styles.bordClr}
                        placeholder={placeholder}
                        textContentType={type}
                        secureTextEntry={secure}
                        style={{borderColor:'steelblue'}}
                        onChangeText={this.handleChange}
                        value={value}
                        onBlur={Keyboard.dismiss} 
                ></TextInput>
                {/* <Input label={name} onChangeText={submit}></Input> */}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column'
    },
    label:{
        fontSize:17,
    },
    bordClr:{
        borderColor:'blue',
        borderWidth:3
    }
})