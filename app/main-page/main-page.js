import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack'


import {HomeScreen} from '../homePage/homePage';
import {UserScreen} from '../userMenu/userMenuPage';
import { DetailsScreen } from '../detailsPage/detailsPage';
import { MyNotificationsScreen } from '../notification/notification';
import { CustomDrawerContentComponent, DrawerContent } from '../drawer/drawer';
import { Navbar } from '../navbar/navbar';

const homeRouteConfig = {
    Home:HomeScreen,
    Notifications:MyNotificationsScreen,
    User:UserScreen,
    Details:DetailsScreen
}

const detailsRouteConfig = {
    Details:DetailsScreen
}


const appNavigatorConfig = {
    mode: 'modal',
    headerMode: 'float',
    headerTransitionPreset: 'face-in-place',
    defaultNavigationOptions: {
      header: props => <Navbar {...props} searchable />,
      headerStyle: {
        backgroundColor: "transparent"
      },
      gesturesEnabled: false
    },
}

const homeStackNavigator = createStackNavigator(homeRouteConfig,appNavigatorConfig);
// const detailsStackNavigator = createStackNavigator(detailsRouteConfig,appNavigatorConfig);

const drawerRouteConfig = {
    Home:homeStackNavigator,
}

const drawerNavigatorConfig = {
    drawerPosition:'left',
    initialRouteName:'Home',
    //drawerType:'slide',
    drawerWidth: 270,
    contentComponent:DrawerContent,
    mode:'modal'
}



export const DrawerNavigator = createDrawerNavigator(drawerRouteConfig,drawerNavigatorConfig);

