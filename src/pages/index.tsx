import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} minH="100vh">
            <Flex direction="column">
                <Heading>Welcome!</Heading>
                <Text>Start your next tour now!</Text>
            </Flex>
            <Box borderRadius="20px" display={{ base: 'none', md: 'block' }}>
                <Image src="landing-1.jpg" h="full" w="full" />
            </Box>
        </SimpleGrid>
    );
};

export default Home;
