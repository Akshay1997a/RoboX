import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();
//enableScreens();

export default function StackNavigator() {
    const {PRIMARY_BACKGROUND_COLOR} = useTheme();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: PRIMARY_BACKGROUND_COLOR,
                    },
                    headerTintColor: '#fff',
                }}>
                <Stack.Screen
                    name="dashboard"
                    component={DrawerNavigator}
                    options={{
                        title: 'Home',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
