import {
    Avatar,
    Button,
    ButtonGroup,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useDisclosure,
} from '@chakra-ui/react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { useUser } from '@supabase/auth-helpers-react';
import NextLink from 'next/link';
import { useEffect } from 'react';
import LoginModal from './LoginModal';

const AvatarGroup = () => {
    const { user } = useUser();
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        if (user) console.log(user);
    }, [user]);

    const handleSignOut = () => {
        supabaseClient.auth.signOut();
        console.log('signed out');
    };

    if (!user) {
        return (
            <>
                <ButtonGroup>
                    <Button>
                        <NextLink href={'/auth/register'} passHref>
                            <Link color="text.800">Register</Link>
                        </NextLink>
                    </Button>
                    <Button onClick={onOpen} color="text.800">
                        Log In
                    </Button>
                </ButtonGroup>

                <LoginModal isOpen={isOpen} onClose={onClose} />
            </>
        );
    }

    return (
        <Menu>
            <MenuButton
                as={Avatar}
                size={'sm'}
                src="https://randomuser.me/api/portraits/men/75.jpg"
                cursor="pointer"
            ></MenuButton>
            <MenuList>
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
            </MenuList>
        </Menu>
    );
};

export default AvatarGroup;
