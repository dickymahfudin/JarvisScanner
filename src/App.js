import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import QrScenner from './components/QrScenner';
import WebOdoo from './components/webOdoo';
import {IdProvider} from './Context';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Scenner') {
                iconName = focused ? 'camera' : 'camerao';
              } else if (route.name === 'Page') {
                iconName = focused ? 'bars' : 'bars';
              }

              // You can return any component that you like here!
              return <AntDesign name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Scenner" component={QrScenner} />
          <Tab.Screen name="Page" component={parsOdoo} />
        </Tab.Navigator>
      </NavigationContainer>
    </IdProvider>
  );
};

export default App;
