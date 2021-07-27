import { getAxios } from '../../axiosCalls';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import React, { Suspense } from 'react';
const FullExperience = React.lazy(() =>
  import('../../components/fullexperience/FullExperience')
);
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
      <Suspense fallback={<div>Loading...</div>}>
        <FullExperience comment={'Me gustó mucho.'} data={uniqueExp} />
      </Suspense>
    </div>
  );
}
export default UniqueExperiece;
