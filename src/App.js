import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QrScenner from './components/QrScenner';
import WebOdoo from './components/webOdoo';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Scenner" component={QrScenner} />
        <Tab.Screen name="Odoo" component={WebOdoo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
