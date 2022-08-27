import { Box, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { ImHome, ImList2, ImMap } from 'react-icons/im';
import MobileNav from './MobileNav';
import Sidebar from './Sidebar';

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

type NavProps = {
    children: ReactNode;
};

const Nav = (props: NavProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Sidebar
                onClose={() => onClose()}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <Sidebar onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {props.children}
            </Box>
        </>
    );
};
export default Nav;
