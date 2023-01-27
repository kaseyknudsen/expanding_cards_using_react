import Annemiek from "./images/Annemiek.png";
import Demi from "./images/Demi.png";
import Juliette from "./images/Juliette_Labous.png";
import Kasia from "./images/Kasia_Niewiadoma.png";
import Silvia from "./images/Silvia_Persico.png";

function DisplayRiders() {
  return (
    <>
      <div class="container">
        <div
          className="panel active"
          style={{ backgroundImage: `url(${Annemiek})` }}
        >
          <h3>Annemiek van Vleuten</h3>
        </div>

        <div class="panel" style={{ backgroundImage: `url(${Demi})` }}>
          <h3>Demi Vollering</h3>
        </div>
        <div class="panel" style={{ backgroundImage: `url(${Silvia})` }}>
          <h3>Kasia Niewiadoma</h3>
        </div>
        <div class="panel" style={{ backgroundImage: `url(${Juliette})` }}>
          <h3>Juliette Labous</h3>
        </div>
        <div class="panel" style={{ backgroundImage: `url(${Kasia})` }}>
          <h3>Silvia Persico</h3>
        </div>
      </div>
    </>
  );
}

export default DisplayRiders;
