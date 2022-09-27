import {
    Box,
    Collapse,
    Flex,
    IconButton,
    Link,
    Text,
    useBreakpointValue,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { IconType } from 'react-icons';
import { ImHome, ImList2, ImMap, ImMenu } from 'react-icons/im';
import { IoClose } from 'react-icons/io5';
import AvatarGroup from '../User/AvatarGroup';
import DesktopNav from './DesktopNax';
import MobileNav from './MobileNav';

export type LinkItem = {
    name: string;
    icon: IconType;
    href: string;
};

export const LinkItems: LinkItem[] = [
    {
        name: 'Home',
        icon: ImHome,
        href: '/',
    },
    {
        name: 'Karte',
        icon: ImMap,
        href: '/card',
    },
    {
        name: 'Liste',
        icon: ImList2,
        href: '/list',
    },
];

const Nav = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
            >
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}
                >
                    <IconButton
                        onClick={onToggle}
                        icon={isOpen ? <IoClose /> : <ImMenu />}
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex
                    flex={{ base: 1 }}
                    justify={{ base: 'center', md: 'start' }}
                >
                    {/* App Name button */}
                    <Box p={2}>
                        <NextLink href="/" passHref>
                            <Link
                                _hover={{
                                    textDecoration: 'none',
                                }}
                            >
                                <Text
                                    textAlign={useBreakpointValue({
                                        base: 'center',
                                        md: 'left',
                                    })}
                                    fontFamily={'heading'}
                                    fontWeight={600}
                                    color={useColorModeValue(
                                        'gray.600',
                                        'gray.200'
                                    )}
                                    fontSize={'sm'}
                                >
                                    {process.env.NEXT_PUBLIC_APP_TITLE}
                                </Text>
                            </Link>
                        </NextLink>
                    </Box>

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>
                <AvatarGroup />
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </>
    );
};
export default Nav;
