import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const axiosClient = axios.create();

export const queryClient = new QueryClient();
