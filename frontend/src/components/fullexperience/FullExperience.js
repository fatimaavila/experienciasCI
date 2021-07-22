import CarouselFS from './CarouselFS';
import StyledFullExperience from './StyledFullExperience';
import Button from '../button/Button';
import Comments from '../comments/Comments';

function FullExperience() {
  return (
    <StyledFullExperience>
      <div className="container-header-fs">
        <div className="carousel-photoexp">
          <CarouselFS className="carousel-fs" />
        </div>
        <div className="data-experience">
          <section className="info-experience-basic">
            <h1>NOMBRE DE LA EXPERIENCIA</h1>
            <div className="fs-interaction-client">
              <p>99,99€</p>
              <Button blue className="button-buy">
                Comprar
              </Button>
            </div>
          </section>
          <section className="include-experience">
            <div>
              <h2>Incluye:</h2>
              <br />
              <p>Bono de acceso a la actividad</p>
            </div>
            <br />
            <br />
            <h2>Condiciones de uso:</h2>
            <br />
            <ul>
              <li> · Debe reservar cita para el día solicitado</li>
              <li>
                {' '}
                · Deberá respetar las normas indicadas por el organizador
              </li>
              <li> · Acuda con ropa comoda y elástica a ser posible</li>
              <li> · Siga las indicaciones para un correcto uso</li>
              <li> · En caso de no acudir debe comunicar con el vendedor</li>
              <li> · La caducidad es de 12 meses desde la fecha de compra</li>
            </ul>
          </section>
        </div>
      </div>
      <div className="info-experience-extended">
        <section>
          <h2>Descripcion</h2>
          <p>Lorem ipsum dolor sit amet</p>
          <h2>mas info</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </section>
        <Comments />
      </div>
    </StyledFullExperience>
  );
}
export default FullExperience;
