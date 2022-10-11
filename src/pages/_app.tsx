import { ChakraProvider } from '@chakra-ui/react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { UserProvider } from '@supabase/auth-helpers-react';
import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Nav from '../components/Nav/Nav';
import { queryClient } from '../repository/clients';
import theme from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <UserProvider supabaseClient={supabaseClient}>
                    <Nav />
                    <Component {...pageProps} />
                </UserProvider>
            </QueryClientProvider>
        </ChakraProvider>
    );
}

export default MyApp;
