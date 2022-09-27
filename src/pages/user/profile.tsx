import { Box, Heading, Text } from '@chakra-ui/react';
import { User, withPageAuth } from '@supabase/auth-helpers-nextjs';
import { NextPage } from 'next';

type ProfilePageProps = {
    user: User;
};

const ProfilePage: NextPage<ProfilePageProps> = (props) => {
    return (
        <Box>
            <Heading>Profile</Heading>

            <Text>{props.user.email}</Text>
        </Box>
    );
};
export default ProfilePage;
export const getServerSideProps = withPageAuth({ redirectTo: '/' });
