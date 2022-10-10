import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Stack,
} from '@chakra-ui/react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';
import { ChangeEvent, useState } from 'react';

type LoginModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const LoginModal = (props: LoginModalProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
        console.log(email, password);
        try {
            setLoading(true);
            const { error } = await supabaseClient.auth.signIn({
                email,
                password,
            });
            if (error) throw error;
            props.onClose();
        } catch (e: any) {
            // alert(e.message);
            console.error(e);
        } finally {
            console.log(loading);
            setLoading(false);
        }
    };

    return (
        <Modal
            isOpen={props.isOpen}
            onClose={props.onClose}
            isCentered
            size={{ base: 'xs', md: 'lg' }}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody padding="20px">
                    <Stack spacing={4}>
                        <Heading as="h2">Sign in with your email!</Heading>
                        <FormControl marginBottom="20px" marginTop="20px">
                            <FormLabel>Email</FormLabel>
                            <Input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{
                                    base: 'column',
                                    sm: 'row',
                                }}
                                align={'start'}
                                justify={'space-between'}
                            >
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
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
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
export default LoginModal;
