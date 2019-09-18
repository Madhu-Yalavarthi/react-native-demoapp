/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import firebase from '@react-native-firebase/app';

const firebaseConfig={
    apiKey: "AIzaSyDaQ5cLJOr7dq_b78NYgvJFRjT4SJYMDkk",
    authDomain: "ravifurnitures-e6e1b.firebaseapp.com",
    databaseURL: "https://ravifurnitures-e6e1b.firebaseio.com",
    projectId: "ravifurnitures-e6e1b",
    storageBucket: "ravifurnitures-e6e1b.appspot.com",
    messagingSenderId: "226623668400",
    appId: "1:226623668400:web:bc9bbcc451c4f338507b75"
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(appName, () => App);
