import CarouselFS from './CarouselFS';
import StyledFullExperience from './StyledFullExperience';

function FullExperience() {
  return (
    <StyledFullExperience>
      <div className="carousel-photoexp">
        <CarouselFS />
        aqui va el carrusel
      </div>
      <div className="data-experience">
        <section className="info-experience-basic">
          <h1>NOMBRE DE LA EXPERIENCIA</h1>
          <p>99,99€</p>
          <button>Comprar</button>
          <h2>Incluye</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <h2>Condiciones de uso</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </section>
        <section className="info-experience-extended">
          <h2>Descripcion</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <h2>mas info</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </section>
      </div>
    </StyledFullExperience>
  );
}
export default FullExperience;
