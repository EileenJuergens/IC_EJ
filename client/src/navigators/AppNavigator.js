import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MainScreen from '../screens/MainScreen';
import ContentScreen from '../screens/ContentScreen';

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Content: ContentScreen,
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      title: `Eileen's App`
    }
  }
);

export default createAppContainer(AppNavigator);
