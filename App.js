import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './LoginPage';
import DetailsPage from './DetailsPage';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Spritle Software">
        <Stack.Screen name="Spritle Software" component={LoginPage} />
        <Stack.Screen name="Details" component={DetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;









