import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const theme = extendTheme(
    {
        colors: {
            main: {
                50: '#f6f8e6',
                100: '#e4e6c9',
                200: '#d3d5aa', //default
                300: '#c1c488',
                400: '#afb368',
                500: '#969a4f',
                600: '#74783c',
                700: '#53552a',
                800: '#323317',
                900: '#121200',
            },
            contrastMain: {
                50: '#ffefe2',
                100: '#f1d4c0',
                200: '#e3b99b',
                300: '#d79c75',
                400: '#ca804f',
                500: '#b06735',
                600: '#8a5028', //default
                700: '#64391c',
                800: '#3d210e',
                900: '#1b0800',
            },
            text: {
                50: '#ffe4ff',
                100: '#fbb3ff',
                200: '#f781fd',
                300: '#f350fd',
                400: '#f025fc',
                500: '#d714e3',
                600: '#a70cb1',
                700: '#77057f',
                800: '#48004d', //default
                900: '#1a001c',
            },
            contrastText: {
                50: '#ffe5ff', //default
                100: '#fcb5fc',
                200: '#fb84fb',
                300: '#fb55fa',
                400: '#fa2ff9',
                500: '#e121e0',
                600: '#af18ad',
                700: '#7d0f7b',
                800: '#4b054a',
                900: '#1a0019',
            },
            darkText: {
                50: '#ecf5f0',
                100: '#d6dcd8',
                200: '#bcc3bf',
                300: '#a2aba6',
                400: '#88948d',
                500: '#6e7a73',
                600: '#565f59',
                700: '#3d4440',
                800: '#232926', //default
                900: '#06100b',
            },
        },
        config: {
            //TODO remove when color modes actually exist
            initialColorMode: 'light',
            useSystemColorMode: false,
        },
    },
    withDefaultColorScheme({ colorScheme: 'main' })
);
export default theme;
