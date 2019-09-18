/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   Button,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';


import NavigationService from './app/services/navigation';

import AppContainer from './app/app.routing';

import React from 'react';
import {Provider} from 'react-redux';
import store from './store';



export default class App extends React.Component {
  
  render() {
    
    return (
      <Provider store={store}>
        <AppContainer ref={navigation=>{NavigationService.setTopLevelNavigator(navigation)}} />
      </Provider>
    );
  }
}




