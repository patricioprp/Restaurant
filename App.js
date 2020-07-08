import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import SearchScreens from './src/screens/SearchScreens';
import ResultsShowScreens from './src/screens/ResultsShowScreens';

const navigator = createStackNavigator(
  {
  search: SearchScreens,
  ResultsShow: ResultsShowScreens
},{
  initialRouteName:'search',
  defaultNavigationOptions:{
    title:'Restaurant Search'
  }
});

export default createAppContainer(navigator);