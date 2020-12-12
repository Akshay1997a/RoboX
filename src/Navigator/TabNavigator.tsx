/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Dashboard from '../Pages/Dashboard';
import HomeIcon from '../Assets/icons/social-media.svg';
import InvestIcon from '../Assets/icons/Rupee.svg';
import InsightsIcon from '../Assets/icons/insight.svg';
import TaxCornerIcon from '../Assets/icons/tax.svg';
import GamesIcon from '../Assets/icons/game-controller.svg';

const Tab = createMaterialBottomTabNavigator();

export function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="dashboard"
            labeled={true}
            shifting={false}
            barStyle={{backgroundColor: '#ffff'}}>
            <Tab.Screen
                name="dashboard"
                component={Dashboard}
                options={{
                    title: 'Home',
                    tabBarIcon: () => <HomeIcon />,
                }}
            />
            <Tab.Screen
                name="invest"
                component={Dashboard}
                options={{
                    title: 'Invest',
                    tabBarIcon: () => <InvestIcon />,
                }}
            />
            <Tab.Screen
                name="insight"
                component={Dashboard}
                options={{
                    title: 'Insights',
                    tabBarIcon: () => <InsightsIcon />,
                }}
            />
            <Tab.Screen
                name="taxCorner"
                component={Dashboard}
                options={{
                    title: 'Tax Corner',
                    tabBarIcon: () => <TaxCornerIcon />,
                }}
            />
            <Tab.Screen
                name="games"
                component={Dashboard}
                options={{
                    title: 'Games',
                    tabBarIcon: () => <GamesIcon />,
                }}
            />
        </Tab.Navigator>
    );
}
