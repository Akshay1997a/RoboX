import React from 'react';
import {ViewProps} from 'react-native';
import styled from 'styled-components/native';

interface ContainerProps extends ViewProps {
    children?: React.ReactNode;
    scrollable?: boolean;
}

export default function Container(props: ContainerProps) {
    if (props.scrollable) {
        return <ScrollableContainer>{props.children}</ScrollableContainer>;
    }
    return <ContainerView>{props.children}</ContainerView>;
}

const ContainerView = styled.View((props) => ({
    flex: 1,
    backgroundColor: props.theme.SECONDARY_BACKGROUND_COLOR,
}));

const ScrollableContainer = styled.ScrollView((props) => ({
    padding: 10,
    backgroundColor: props.theme.SECONDARY_BACKGROUND_COLOR,
}));
