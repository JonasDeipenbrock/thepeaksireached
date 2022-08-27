import { Flex, Icon, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { IconType } from 'react-icons';

type NavItemProps = {
    icon: IconType;
    title: string;
    href: string;
};

const NavItem = (props: NavItemProps) => {
    return (
        <NextLink href={props.href} passHref>
            <Link>
                <Flex
                    align="center"
                    p="4"
                    mx="4"
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                        bg: 'cyan.400',
                        color: 'white',
                    }}
                >
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={props.icon}
                    />
                    {props.title}
                </Flex>
            </Link>
        </NextLink>
    );
};
export default NavItem;
