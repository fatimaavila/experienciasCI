import { useEffect, useState } from 'react';
import { getAxios } from '../../axiosCalls';
import AdminExperiencesItem from './AdminExperienceItem';

function AdminExperiences() {
  const [experienceInfo, setExperienceInfo] = useState();

  useEffect(() => {
    async function getInfoExperiences() {
      try {
        const { data } = await getAxios('http://localhost:8080/experiences');
        setExperienceInfo(data);
      } catch (error) {
        console.error(error.response.data.message);
      }
    }

    getInfoExperiences();
  }, []);

  return (
    <table className="tableData">
      <tbody>
        {experienceInfo?.map((experience) => (
          <AdminExperiencesItem key={experience.id} experience={experience} />
        ))}
      </tbody>
    </table>
  );
}

export default AdminExperiences;
