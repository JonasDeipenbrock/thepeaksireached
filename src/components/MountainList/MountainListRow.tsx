import {
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from '@chakra-ui/react';
import { Mountain } from '../../repository/peaks';

type MountainListRowProps = {
    mountain: Mountain;
};

const MountainListRow = (props: MountainListRowProps) => {
    console.log(props.mountain);
    // if (props.mountain.name === '') return null;
    return (
        <AccordionItem>
            <AccordionButton>
                <Box flex="1" textAlign="left">
                    {props.mountain.name}
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>{props.mountain.elevation}</AccordionPanel>
        </AccordionItem>
    );
};
export default MountainListRow;
