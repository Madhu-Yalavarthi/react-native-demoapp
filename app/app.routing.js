import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {LoginSignupNavigator} from './loginSignup/login-signup';
import {DrawerNavigator} from './main-page/main-page';


const RootNavigator = createStackNavigator(
    {
      Main:{
        screen:DrawerNavigator
      },
      LoginSignup:{
        screen:LoginSignupNavigator
      }
    },
    {
      mode:'modal',
      headerMode:'none',
    }
  )
  
  
  
  const AppContainer = createAppContainer(RootNavigator);

  export default AppContainer;