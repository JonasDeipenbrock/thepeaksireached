import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Select,
    Slider,
    SliderFilledTrack,
    SliderMark,
    SliderThumb,
    SliderTrack,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import type { NextPage } from 'next';
import { useState } from 'react';
import { IoRefresh } from 'react-icons/io5';
import MountainList from '../components/MountainList/MountainList';
import { fetchPeaks } from '../repository/peaks';

type Country = {
    name: string;
    short: string;
};

const countries: Country[] = [
    {
        name: 'Germany',
        short: 'DE',
    },
    {
        name: 'Swiss',
        short: 'CH',
    },
    {
        name: 'Austria',
        short: 'AT',
    },
];

const ListPage: NextPage = () => {
    //always value between 1 and 100
    const [country, setCountry] = useState<Country>(countries[0]);
    const [minHeight, setMinHeight] = useState(30);

    const { isLoading, isError, data, error } = useQuery(
        ['peaks'],
        fetchPeaks,
        { retry: false }
    );

    const onSelect = (country: string) => {
        setCountry(countries.find((c) => c.name === country)!);
    };

    const onRefresh = () => {
        console.log(country, minHeight * 100);
    };

    // const fetchMountains = () => {
    //     // const result = useQuery()
    // }

    if (isLoading) {
        console.log(isLoading);
    } else if (isError) {
        console.error(error);
    } else {
        console.log(data);
    }

    return (
        <>
            <Box paddingBottom="10px">
                <Flex align="center" gap={10} width="50%">
                    <FormControl>
                        <FormLabel>Country</FormLabel>
                        <Select
                            value={country.name}
                            onChange={(e) => onSelect(e.target.value)}
                        >
                            {countries.map((country) => {
                                return (
                                    <option
                                        key={country.name}
                                        value={country.name}
                                    >
                                        {country.name}
                                    </option>
                                );
                            })}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Minimum Height</FormLabel>
                        <Slider
                            colorScheme="whiteAlpha"
                            min={20}
                            max={50}
                            onChange={(val) => setMinHeight(val)}
                        >
                            <SliderMark value={20}>2000</SliderMark>
                            <SliderMark value={30}>3000</SliderMark>
                            <SliderMark value={40}>4000</SliderMark>
                            <SliderMark
                                value={minHeight}
                                textAlign="center"
                                color="white"
                                mt="-10"
                                ml="-5"
                                w="12"
                            >
                                {minHeight * 100}
                            </SliderMark>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </FormControl>
                    <Box>
                        <Button leftIcon={<IoRefresh />} onClick={onRefresh}>
                            Refresh
                        </Button>
                    </Box>
                </Flex>
            </Box>
            <MountainList mountains={data} loading={isLoading} />
        </>
    );
};

export default ListPage;
