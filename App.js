import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SearchScreens from './src/screens/SearchScreens'

const navigator = createStackNavigator(
  {
  search:SearchScreens
},{
  initialRouteName:'search',
  defaultNavigationOptions:{
    title:'Restaurant Search'
  }
});

export default createAppContainer(navigator);