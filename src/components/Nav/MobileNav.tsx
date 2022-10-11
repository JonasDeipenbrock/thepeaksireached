import { Flex, Link, Stack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { LinkItems } from './Nav';

const MobileNav = () => {
    return (
        <Stack bg="main.100" p={4} display={{ md: 'none' }}>
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
                            <Text fontWeight={600} color="text.800">
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
