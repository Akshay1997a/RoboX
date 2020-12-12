import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from './TabNavigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import {Pressable} from 'react-native';
import {DrawerActions} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(props: any) {
    console.log(props);
    const {setOptions, dispatch} = props.navigation;
    React.useEffect(() => {
        const DrawerButton = () => (
            <ButtonWrapper
                onPress={() => {
                    dispatch(DrawerActions.toggleDrawer());
                }}>
                <FontAwesome name="bars" size={25} color="#fff" />
            </ButtonWrapper>
        );

        const NotificationButton = () => (
            <ButtonWrapper>
                <FontAwesome name="bell" size={25} color="#fff" />
            </ButtonWrapper>
        );

        setOptions({
            headerLeft: DrawerButton,
            headerRight: NotificationButton,
        });
    });

    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="home"
                component={TabNavigator}
                options={{
                    title: 'Home',
                }}
            />
        </Drawer.Navigator>
    );
}

const ButtonWrapper = styled(Pressable)({
    marginLeft: 20,
    marginRight: 20,
});
