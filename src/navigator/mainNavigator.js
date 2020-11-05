import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen414015Navigator from '../features/BlankScreen414015/navigator';
import BlankScreen114007Navigator from '../features/BlankScreen114007/navigator';
import BlankScreen014006Navigator from '../features/BlankScreen014006/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen414015: { screen: BlankScreen414015Navigator },
BlankScreen114007: { screen: BlankScreen114007Navigator },
BlankScreen014006: { screen: BlankScreen014006Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
