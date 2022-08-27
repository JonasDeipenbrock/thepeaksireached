import { axiosClient } from './clients';

export const fetchPeaks = async () => {
    const res = await axiosClient.get(
        'https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.swisstopo.swissnames3d&searchText=Gipfel&searchField=label&returnGeometry=false',
        {
            params: {
                layer: 'ch.swisstopo.swissnames3d',
                searchField: 'label',
                searchText: 'Gipfel',
            },
        }
    );
    return res.data;
};
