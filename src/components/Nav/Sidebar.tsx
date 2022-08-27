import {
    Box,
    BoxProps,
    CloseButton,
    Flex,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { LinkItems } from './Nav';
import NavItem from './NavItem';

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <>
                <Flex
                    h="20"
                    alignItems="center"
                    mx="8"
                    justifyContent="space-between"
                >
                    <Text
                        fontSize="2xl"
                        fontFamily="monospace"
                        fontWeight="bold"
                    >
                        {process.env.NEXT_PUBLIC_APP_TITLE}
                    </Text>
                    <CloseButton
                        display={{ base: 'flex', md: 'none' }}
                        onClick={onClose}
                    />
                </Flex>
                {LinkItems.map((item) => {
                    return (
                        <NavItem
                            key={item.name}
                            title={item.name}
                            icon={item.icon}
                            href={item.href}
                        />
                    );
                })}
            </>
        </Box>
    );
};
export default Sidebar;
