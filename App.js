import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import DetailScreen from './src/screens/DetailScreen';
import DetailSreen from './src/screens/DetailScreen';

const navigator = createStackNavigator (
  {
    Search: SearchScreen,
    Details: DetailSreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Foodie App"
    }
  }
);

export default createAppContainer(navigator);

