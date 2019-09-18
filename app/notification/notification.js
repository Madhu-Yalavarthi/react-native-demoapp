import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Icon, Button} from 'react-native-elements';

export class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
      drawerLabel: 'Notifications',
      drawerIcon: ({ tintColor }) => (
        <Icon name="bell" type="font-awesome" style={[styles.userIcon, { tintColor: tintColor }]}></Icon>
      ),
    };
  
    render() {
      return (
        <View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        ></Button>
        <Button
        onPress={() => this.props.navigation.openDrawer()}
        title="open drawer"
        ></Button>
        </View>
        
      );
    }
  }


  const styles = StyleSheet.create({
      userIcon:{
          width:30,
          height:30,
      }
  })
