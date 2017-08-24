import { StackNavigator } from 'react-navigation';
import Home from './containers/Home';

const Routes = {
  Home: { screen: Home },
};


const initialRouteName = 'Home';
const AppNavigator = StackNavigator(Routes, { initialRouteName });

export default AppNavigator;
