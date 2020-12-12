import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import StackNavigator from './Navigator/StackNavigator';
import {lightTheme} from './style/theme';

const App = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <StatusBar backgroundColor="#2B3B98" barStyle="light-content" />
            <StackNavigator />
        </ThemeProvider>
    );
};
export default App;
