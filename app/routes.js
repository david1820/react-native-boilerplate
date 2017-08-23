import { StackNavigator } from 'react-navigation';
import Home from './containers/Home/index';

const Routes = {
  Home: { screen: Home },
};


const initialRouteName = 'Home';
const AppNavigator = StackNavigator(Routes, { initialRouteName });

export default AppNavigator;
