import FullExperience from '../../components/fullexperience/FullExperience';
import { getAxios } from '../../axiosCalls';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
function UniqueExperiece() {
  const [uniqueExp, setUniqueExp] = useState([]);

  const urlExp = useParams();

  useEffect(() => {
    const getUniqueExp = async () => {
      const { data } = await getAxios(
        `http://localhost:8080/experiences/${Number(urlExp.idExp)}`
      );

      setUniqueExp(data);
    };
    getUniqueExp();
  }, [urlExp.idExp]);
  return (
    <div>
      {uniqueExp && (
        <FullExperience comment={'Me gustó mucho.'} data={uniqueExp} />
      )}
    </div>
  );
}
export default UniqueExperiece;
