import AllExperiences from '../../components/allexperiences/AllExperiences';
import { getAxios } from '../../axiosCalls';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Experiences() {

    const [experienceSearch,setExperienceSearch] = useState([]);

    const location = useLocation();

    async function searchExperience() {
        try {
            const { data } = await getAxios(`http://localhost:8080/experiences${location.search && location.search}`);
            setExperienceSearch(data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        searchExperience();
    },[]);

    return (
        < >
            {experienceSearch && <AllExperiences data={experienceSearch}/>}
        </>
    )

}

export default Experiences;