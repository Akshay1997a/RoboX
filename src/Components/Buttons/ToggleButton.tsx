import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {colors, metrics} from '../../style';

interface ToggleButtonGroupProps {
    children: React.ReactNode;
}

interface ToggleButtonProps extends TouchableOpacityProps {
    title?: string;
    active?: boolean;
}

export const ToggleButton = {
    Group: (props: ToggleButtonGroupProps) => {
        return <ToggleButtonsGroup>{props.children}</ToggleButtonsGroup>;
    },
    Button: (props: ToggleButtonProps) => {
        const butonStyle = props.active && [{backgroundColor: colors.green}];
        const buttonTextStyle = props.active && [{color: '#fff'}];

        return (
            <ToggleButtonContainer {...props} style={butonStyle}>
                <ButtonTitle style={buttonTextStyle}>{props.title}</ButtonTitle>
            </ToggleButtonContainer>
        );
    },
};

const ToggleButtonsGroup = styled.View({
    flexDirection: 'row',
    justifyContent: 'space-around',
});

const ToggleButtonContainer = styled.TouchableOpacity((props) => ({
    borderWidth: 1,
    borderColor: props.theme.FONT_COLOR_LIGHT,
    borderRadius: metrics.baseRadius * 2,
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
}));

const ButtonTitle = styled.Text((props) => ({
    color: props.theme.FONT_COLOR_LIGHT,
    fontSize: props.theme.FONT_SIZE_MEDIUM,
}));
