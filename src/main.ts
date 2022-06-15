
import { geraCabecalho, geraFieldSets } from './arrays';
import { exibeResultado } from './resultado';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Conversor de Moedas</h1>
  <main>
  <form class="formulario">
  <fieldset id="moeda_digital">
  </fieldset>
  <fieldset id="moeda_fisica">
  </fieldset>
  <button id="buscar">Buscar</button>
  </form>
  <div class="tabela">
  <div id="cabecalho"></div>
  <div id="linha"></div>
  </div>
  </main>
`

geraFieldSets();
geraCabecalho();

document.querySelector<HTMLSelectElement>("#buscar")?.addEventListener("click", function (event) {
  event.preventDefault();
  try {
    exibeResultado()
  }
  catch (err) {
    return err;
  };
});