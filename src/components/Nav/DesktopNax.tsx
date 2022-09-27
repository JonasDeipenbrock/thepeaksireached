import { Box, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LinkItems } from './Nav';

const DesktopNav = () => {
    return (
        <Stack direction="row">
            {LinkItems.map((item) => (
                <Box key={item.name} p={2} fontSize={'sm'}>
                    <NextLink href={item.href} passHref>
                        <Link
                            _hover={{
                                textDecoration: 'none',
                            }}
                        >
                            <Text
                                fontWeight={600}
                                color={useColorModeValue(
                                    'gray.600',
                                    'gray.200'
                                )}
                            >
                                {item.name}
                            </Text>
                        </Link>
                    </NextLink>
                </Box>
            ))}
        </Stack>
    );
};
export default DesktopNav;
