import { ChakraProvider } from '@chakra-ui/react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { UserProvider } from '@supabase/auth-helpers-react';
import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Nav from '../components/Nav/Nav';
import { queryClient } from '../repository/clients';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <UserProvider supabaseClient={supabaseClient}>
                    <Nav>
                        <Component {...pageProps} />
                    </Nav>
                </UserProvider>
            </QueryClientProvider>
        </ChakraProvider>
    );
}

export default MyApp;
