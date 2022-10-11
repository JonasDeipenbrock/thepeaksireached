import { Center, Container, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <Container bg="main.200" minH="100vh">
            <Center>
                <Heading>Welcome!</Heading>
            </Center>
        </Container>
    );
};

export default Home;
