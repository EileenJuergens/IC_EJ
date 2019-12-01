import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: `Eileen's App`
    }
  }
);

export default createAppContainer(AppNavigator);
