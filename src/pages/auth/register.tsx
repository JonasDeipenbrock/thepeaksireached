import {
    Button,
    Center,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    VStack,
} from '@chakra-ui/react';
import { supabaseClient, User } from '@supabase/auth-helpers-nextjs';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

const RegisterPage: NextPage = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleRepeatPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.target.value);
    };

    const handleFirstnameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstname(e.target.value);
    };

    const handleLastnameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLastname(e.target.value);
    };

    const handleSubmit = async () => {
        console.log(email, password, firstname, lastname);
        try {
            setLoading(true);
            const { error, user } = await supabaseClient.auth.signUp({
                email,
                password,
            });
            if (error) throw error;
            if (user) handleUpdateProfile(user);
            // props.onClose();
            // TODO redirect back to home
        } catch (e: any) {
            // alert(e.message);
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateProfile = async (user: User) => {
        const updates = {
            id: user.id,
            firstname,
            lastname,
        };
        const { error } = await supabaseClient.from('profiles').upsert(
            {
                id: user.id,
                firstname,
                lastname,
            },
            { returning: 'minimal' }
        );
    };

    return (
        <Center>
            <VStack>
                <Heading as={'h2'}>Register now!</Heading>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        value={firstname}
                        onChange={handleFirstnameChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Surname</FormLabel>
                    <Input
                        type="text"
                        value={lastname}
                        onChange={handleLastnameChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <InputGroup size="md">
                        <Input
                            type={showPassword ? 'test' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <InputRightElement width="4.5rem">
                            <Button
                                h="1.75rem"
                                size="sm"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>Repeat Password</FormLabel>
                    <InputGroup size="md">
                        <Input
                            type={showRepeatPassword ? 'test' : 'password'}
                            value={repeatPassword}
                            onChange={handleRepeatPasswordChange}
                        />
                        <InputRightElement width="4.5rem">
                            <Button
                                h="1.75rem"
                                size="sm"
                                onClick={() =>
                                    setShowRepeatPassword(!showPassword)
                                }
                            >
                                {showRepeatPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Stack>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={handleSubmit}
                    >
                        Sign in
                    </Button>
                </Stack>
            </VStack>
        </Center>
    );
};
export default RegisterPage;
