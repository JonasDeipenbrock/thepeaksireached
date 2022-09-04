import { axiosClient } from './clients';

type MountainNode = {
    geometry: { type: string; coordinates: [number, number] };
    id: string;
    properties: {
        '@id': string;
        ele: number;
        name: string;
        // natural: string,
        wikidata: string;
    };
    type: string;
};

export type Mountain = {
    name: string;
    elevation: number;
    id: string;
    geometry: { type: string; coordinates: [number, number] };
    metaData: {
        wikidata: string;
        type: string;
    };
};

const convertMountainNode = (node: MountainNode): Mountain => {
    return {
        name: node.properties.name,
        elevation: node.properties.ele,
        id: node.id,
        geometry: node.geometry,
        metaData: {
            wikidata: node.properties.wikidata,
            type: node.type,
        },
    };
};

const convertMountainNodes = (nodes: MountainNode[]): Mountain[] => {
    return nodes.map((node) => convertMountainNode(node));
};

const filterMountainNodes = (nodes: Partial<MountainNode>[]) => {
    return nodes.filter(
        (node) => node.properties?.name !== undefined
    ) as MountainNode[];
};
export const fetchPeaks = async (): Promise<Mountain[]> => {
    const res = await axiosClient.get('/api/peaks');
    const filteredRes = filterMountainNodes(res.data.features);
    return convertMountainNodes(filteredRes);
};
// export const fetchFromOverpass = async () => {
//     const res = await axiosClient.get(
//         'https://lz4.overpass-api.de/api/interpreter?data=[out:json];{{geocodeArea:Swiss}}->.searchArea;(node[amenity=school](area.searchArea);>;way[amenity=school](area.searchArea);>;relation[amenity=school](area.searchArea);>;);out;'
//     );
//     return res.data;
// };
