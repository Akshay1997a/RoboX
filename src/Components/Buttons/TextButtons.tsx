import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled, {useTheme} from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface TextButtonProps extends TouchableOpacityProps {
    title?: string;
}

export default function TextButtons(props: TextButtonProps) {
    const {PRIMARY_BACKGROUND_COLOR} = useTheme();
    return (
        <TextButtonContainer {...props}>
            <Text>{props.title}</Text>
            <FontAwesome
                name="angle-right"
                size={25}
                color={PRIMARY_BACKGROUND_COLOR}
            />
        </TextButtonContainer>
    );
}

const TextButtonContainer = styled.TouchableOpacity({
    flexDirection: 'row',
    alignItems: 'center',
});

const Text = styled.Text((props) => ({
    color: props.theme.PRIMARY_BACKGROUND_COLOR,
    fontSize: props.theme.FONT_SIZE_MEDIUM,
    marginRight: 10,
}));
