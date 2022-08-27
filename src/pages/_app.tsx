import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Nav from '../components/Nav/Nav';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Nav>
                <Component {...pageProps} />
            </Nav>
        </ChakraProvider>
    );
}

export default MyApp;
