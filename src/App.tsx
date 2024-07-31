import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from './Screens/HomePage/HomePage';
import LoginPage from './Screens/LoginScreen/LoginPage';
import LaunchPage from './Screens/LaunchPage/LaunchPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const myIcon = <MaterialIcons name="rocket" size={30} color="#900" />;
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      initialRouteName="HomeNavigation">
        <Stack.Screen name="Launch" component={LaunchPage} />
        <Stack.Screen name="HomeNavigation" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: '#FF724C',
        tabBarInactiveTintColor:'grey'
      }}
      >
      <Tab.Screen options={{
        tabBarIcon: ({color}) => {
          return <MaterialIcons name='delivery-dining' size={30} color={color}/>;
        }        
      }} name='Delivery' component={HomePage} ></Tab.Screen>
      <Tab.Screen options={{
        tabBarIcon: ({color}) => {
          return <Entypo name='shop' size={30} color={color}/>;
        }        
      }} name='Take Away' component={HomePage} ></Tab.Screen>
      <Tab.Screen options={{
        tabBarIcon: ({color}) => {
          return <MaterialCommunityIcons name='account-circle-outline' size={30} color={color}/>;
        }        
      }} name='Account' component={HomePage} ></Tab.Screen>
    </Tab.Navigator>
  )
}
export default App;

const styles = StyleSheet.create({});
