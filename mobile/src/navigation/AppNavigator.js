import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';
import { COLORS } from '../theme';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const { user } = useAuth();

    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: { backgroundColor: COLORS.bgDark },
                }}
            >
                {!user ? (
                    <Stack.Screen name="Login" component={LoginScreen} />
                ) : (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Events" component={PlaceholderScreen} />
                        <Stack.Screen name="EventDetail" component={PlaceholderScreen} />
                        <Stack.Screen name="Live" component={PlaceholderScreen} />
                        <Stack.Screen name="Speakers" component={PlaceholderScreen} />
                        <Stack.Screen name="Tickets" component={PlaceholderScreen} />
                        <Stack.Screen name="Profile" component={PlaceholderScreen} />
                        <Stack.Screen name="IFPortal" component={PlaceholderScreen} />
                        <Stack.Screen name="Contact" component={PlaceholderScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
