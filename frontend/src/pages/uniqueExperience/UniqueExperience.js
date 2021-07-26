import FullExperience from '../../components/fullexperience/FullExperience';
import { getAxios } from '../../axiosCalls';
import { useEffect, useState } from 'react';
function UniqueExperiece() {
  const [uniqueExp, setUniqueExp] = useState([]);
  const [commentExp, setCommentExp] = useState([]);

  const getUniqueExp = async () => {
    const { data } = await getAxios('http://localhost:8080/experiences/16');

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
      <FullExperience comment={commentExp.comentario} data={uniqueExp} />
    </div>
  );
}
export default UniqueExperiece;
