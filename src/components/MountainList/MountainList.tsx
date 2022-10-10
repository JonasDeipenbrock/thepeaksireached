import { Accordion, Spinner } from '@chakra-ui/react';
import { Mountain } from '../../repository/peaks';
import MountainListRow from './MountainListRow';

type MountainListProps = {
    mountains?: Mountain[];
    loading: boolean;
};

const MountainList = (props: MountainListProps) => {
    if (props.loading || !props.mountains) {
        return <Spinner size="xl" />;
    } else {
        return (
            <Accordion allowToggle>
                {props.mountains
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((mountain) => (
                        <MountainListRow
                            mountain={mountain}
                            key={mountain.name}
                        />
                    ))}
            </Accordion>
        );
    }
};
export default MountainList;
