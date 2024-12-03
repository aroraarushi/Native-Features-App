import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import { Colors } from '../constants/colors';

// Import screens
import AllPlaces from '../screens/AllPlaces';
import AddPlace from '../screens/AddPlace';
import IconButton from '../components/UI/IconButton';
import Map from '../screens/Map';

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: Colors.gray700,
        contentStyle: { backgroundColor: Colors.gray700 },
      }}>
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({navigation}) => ({
            title:'Your Favourite Places',
            headerRight: () => (
              <TouchableOpacity onPress={()=>navigation.navigate('AddPlace')}>
              <Text style={{color: 'blue', paddingRight: 10}}>Add</Text>
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlace}
          options={{
            title:'Add a new Place'
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
         
        />

        {/* Other screens can be added here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
