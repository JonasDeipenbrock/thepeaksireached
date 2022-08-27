import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Nav from '../components/Nav/Nav';
import { queryClient } from '../repository/clients';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <Nav>
                    <Component {...pageProps} />
                </Nav>
            </QueryClientProvider>
        </ChakraProvider>
    );
}

export default MyApp;
