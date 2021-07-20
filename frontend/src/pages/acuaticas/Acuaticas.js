import AllExperiences from '../../components/allexperiences/AllExperiences';

function Acuaticas() {
  const acuaticas = {
    name: 'alejandro',
    apellido: 'Fandiño',
  };
  return (
    <div>
      <AllExperiences data={acuaticas} />
    </div>
  );
}
export default Acuaticas;
