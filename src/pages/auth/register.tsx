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
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

const RegisterPage: NextPage = () => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSurname(e.target.value);
    };

    const handleSubmit = async () => {
        console.log(email, password, name, surname);
        try {
            setLoading(true);
            const { error } = await supabaseClient.auth.signUp(
                {
                    email,
                    password,
                },
                {
                    data: {
                        username: name + surname,
                    },
                }
            );
            if (error) throw error;
            // props.onClose();
            // TODO redirect back to home
        } catch (e: any) {
            // alert(e.message);
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Center>
            <VStack>
                <Heading as={'h2'}>Register now!</Heading>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Surname</FormLabel>
                    <Input
                        type="text"
                        value={surname}
                        onChange={handleSurnameChange}
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
