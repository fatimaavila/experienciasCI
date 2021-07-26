import FullExperience from '../../components/fullexperience/FullExperience';
import { getAxios } from '../../axiosCalls';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
function UniqueExperiece() {
  const [uniqueExp, setUniqueExp] = useState([]);
  const [commentExp, setCommentExp] = useState([]);

  const urlExp = useParams();
  console.log(urlExp);

  const getUniqueExp = async () => {
    const { data } = await getAxios(
      `http://localhost:8080/experiences/${Number(urlExp.idExp)}`
    );

    setUniqueExp(data);
  };
  /*   const getComment = async () => {
    const { data } = await getAxios('http://localhost:8080/bookings/1');

    setCommentExp(data);
  }; */
  console.log(commentExp);
  useEffect(() => {
    getUniqueExp();
    /*  getComment(); */
  }, []);
  return (
    <div>
      <FullExperience
        comment={'me puedes comer lo shuevoos'}
        data={uniqueExp}
      />
    </div>
  );
}
export default UniqueExperiece;
