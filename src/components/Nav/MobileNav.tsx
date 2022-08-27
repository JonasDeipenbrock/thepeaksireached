import {
    Avatar,
    Flex,
    IconButton,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { ImMenu } from 'react-icons/im';

type MobileNavProps = {
    onOpen: () => void;
};

const MobileNav = (props: MobileNavProps) => {
    return (
        <>
            <Flex
                ml={{ base: 0, md: 60 }}
                px={{ base: 4, md: 4 }}
                height="20"
                alignItems="center"
                bg={useColorModeValue('white', 'gray.900')}
                borderBottomWidth="1px"
                borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
                justifyContent={{ base: 'space-between', md: 'flex-end' }}
            >
                <IconButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={props.onOpen}
                    variant="outline"
                    aria-label="open menu"
                    icon={<ImMenu />}
                />

                <Text
                    display={{ base: 'flex', md: 'none' }}
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold"
                >
                    {process.env.NEXT_PUBLIC_APP_TITLE}
                </Text>

                <Avatar
                    size={'sm'}
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                />
            </Flex>
        </>
    );
};
export default MobileNav;
