import {
    Box,
    Container,
    Text,
    useBreakpointValue,
    useMediaQuery,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
    const [showPictureVariant] = useMediaQuery('(min-width: 768px)');
    const imageWidth = useBreakpointValue({ base: '768px', lg: '62em' });

    return (
        <>
            {showPictureVariant ? (
                <Box width="100vw" height="100vh">
                    <Image
                        src="/landing-1.jpg"
                        layout="fill"
                        style={{ zIndex: '-1' }}
                    />
                </Box>
            ) : (
                <Container>
                    <Text>Small!</Text>
                </Container>
            )}
        </>
    );
};

export default Home;
