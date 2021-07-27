import AllExperiences from '../../components/allexperiences/AllExperiences';
import { getAxios } from '../../axiosCalls';
import { useEffect, useState } from 'react';

function Experiences({ querySearch }) {

    const [experienceSearch,setExperienceSearch] = useState([]);

    async function searchExperience() {
        try {
            const { data } = await getAxios(`ttp://localhost:8080/experiences?search=${querySearch}`);
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