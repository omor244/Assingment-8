
import useApps from '../../Hooks/useApps';
import { useParams } from 'react-router';

const Details = () => {

    const {apps} = useApps()
    const {id} = useParams()
    console.log(apps, id)


    return (
        <div>
            this is details
        </div>
    );
};

export default Details;