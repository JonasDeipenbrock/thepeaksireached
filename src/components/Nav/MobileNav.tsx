import { Flex, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LinkItems } from './Nav';

const MobileNav = () => {
    const backgroundColor = useColorModeValue('white', 'gray.800');
    const textColor = useColorModeValue('gray.600', 'gray.200');
    return (
        <Stack bg={backgroundColor} p={4} display={{ md: 'none' }}>
            {LinkItems.map((navItem) => (
                <Flex
                    key={navItem.name}
                    py={2}
                    justify={'space-between'}
                    align={'center'}
                    _hover={{
                        textDecoration: 'none',
                    }}
                >
                    <NextLink href={navItem.href} passHref>
                        <Link>
                            <Text fontWeight={600} color={textColor}>
                                {navItem.name}
                            </Text>
                        </Link>
                    </NextLink>
                </Flex>
            ))}
        </Stack>
    );
};
export default MobileNav;
