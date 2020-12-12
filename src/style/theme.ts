import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        PRIMARY_BACKGROUND_COLOR: string;
        SECONDARY_BACKGROUND_COLOR: string;
        FONT_COLOR?: string;
        FONT_COLOR_LIGHT?: string;
        FONT_SIZE_MEDIUM?: number;
        FONT_SIZE_REGULAR?: number;
        FONT_SIZE_SMALL?: number;
    }
}

export const lightTheme: DefaultTheme = {
    PRIMARY_BACKGROUND_COLOR: '#3041A7',
    SECONDARY_BACKGROUND_COLOR: '#FCFCFC',
    FONT_COLOR: '#393D54',
    FONT_COLOR_LIGHT: '#98A2B0',
    FONT_SIZE_REGULAR: 20,
    FONT_SIZE_SMALL: 12,
    FONT_SIZE_MEDIUM: 16,
};
