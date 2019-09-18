import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import React from 'react';
import {ListItem} from 'react-native-elements';
import NavigationService from '../services/navigation';

const list = [
  {
      name: 'Home',
      icon: 'home',
      type: 'font-awesome',
      subtitle:'Products, Latest....'
  },
  {
      name: 'Details',
      icon:'details',
      type: 'material-icons',
  },
  {
      name: 'Notifications',
      icon:'exclamation-circle',
      type: 'font-awesome',
  },
  // {
  //     name:'Logout',
  //     icon:'sign-out',
  //     type:'font-awesome'
  // }
]

export const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <DrawerNavigatorItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

export const DrawerContent = (props) => (
  <SafeAreaView>
    <View>
      <View style={styles.header}>
        <Text style={{ color: 'white', fontSize: 30 }}>
          Header
        </Text>
      </View>
      <ScrollView>
        <View style={{}}>
        {
          list.map((doc, i)=>(
              <ListItem
                  key={i}
                  title={doc.name}
                  leftIcon={{name:doc.icon, type:doc.type}}
                  subtitle={doc.subtitle ? doc.subtitle : null}
                  bottomDivider
                  chevron
                  onPress={()=>NavigationService.navigate(doc.name)}
              />
          ))
        }
        </View>
      </ScrollView>
      {/* <DrawerNavigatorItems {...props} /> */}
  </View>
  </SafeAreaView>
  
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: '#f50057',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  }
});