/*
  Import libraries for making a component
  Make a component
  Make the component available to other parts of the app
*/

import Home from './pages/Home';
import Components from './pages/Components';
import Pull from './pages/Pull';
import Rom from './pages/Rom';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Home: { screen: Home },
  Components: { screen: Components },
  Pull: { screen: Pull },
  Rom: { screen: Rom }
});


export default App;
