import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import {styles} from './detailsStyles';
import { Icon } from 'react-native-elements';

export class DetailsScreen extends React.Component {
  
    static navigationOptions =  {
      drawerLabel:'Details',
      drawerIcon: ({ tintColor }) =>(
        <Icon name="info" type="font-awesome" style={[styles.userIcon,{tintColor:tintColor}]} />
        //<Image source={require('../../assets/userIcon.png') } style={[styles.userIcon,{tintColor:tintColor}]}/>
      )
    };
    render() {
      const { navigation } = this.props;
      const itemName = navigation.getParam('itemName','USER');
      const itemId = navigation.getParam('itemId','NO-ID');
      return (
        <View style={styles.detailsPage}>
          <Text>Details Screen</Text>
          <Text>ItemName: {JSON.stringify(itemName)}</Text>
          <Button title="Go back" onPress={()=>this.props.navigation.goBack()}></Button>
        </View>
      );
    }
}