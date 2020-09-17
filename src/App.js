import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QrScenner from './components/QrScenner';
import WebOdoo from './components/webOdoo';
import {IdProvider} from './Context';

const Tab = createBottomTabNavigator();

const App = () => {
  const [id, setId] = useState('http://192.168.2.8:8069');
  const changeId = (e) => setId(e);
  const idState = {id, changeId};
  const parsOdoo = () => {
    return <WebOdoo url={id} />;
  };
  return (
    <IdProvider value={idState}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Scenner" component={QrScenner} />
          <Tab.Screen name="Odoo" component={parsOdoo} />
        </Tab.Navigator>
      </NavigationContainer>
    </IdProvider>
  );
};

export default App;
