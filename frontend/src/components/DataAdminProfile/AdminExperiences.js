import { useEffect, useState } from 'react';
import { getAxios } from '../../axiosCalls';
import AdminExperiencesItem from './AdminExperienceItem';

function AdminExperiences() {

  const [experienceInfo,setExperienceInfo] = useState();

  useEffect(() => {

    async function getInfoExperiences() {

      const { data } = await getAxios('http://localhost:8080/experiences');
      setExperienceInfo(data);
    }

    getInfoExperiences();

  },[])

  return (
    <table className='tableData'>
      <tbody>
        {experienceInfo && experienceInfo.map((experience) => <AdminExperiencesItem key={experience.id} experience={experience}/>)}
      </tbody>
    </table>
  );
}

export default AdminExperiences;
