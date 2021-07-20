import AllExperiences from '../../components/allexperiences/AllExperiences';

function Aventuras() {
  const pepe = {
    name: 'Nacho',
    apellido: 'Rodriguez',
  };
  return (
    <div>
      <AllExperiences data={pepe} />
    </div>
  );
}
export default Aventuras;
