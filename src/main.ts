import { cabecalhoTabela, mapArrays, moedasDigitais, moedasFisicas, resultado } from './logica';
import './style.css';
const app = document.querySelector<HTMLDivElement>('#app')!

const elementoMoedaDigital = document.querySelector<HTMLSelectElement>('#moeda_digital');
const selecaoMoedaDigital: string = elementoMoedaDigital ? elementoMoedaDigital.options[elementoMoedaDigital.selectedIndex].value : 'BTC';

const elementoMoedaFisica = document.querySelector<HTMLSelectElement>('#moeda_fisica');
const selecaoMoedaFisica: string = elementoMoedaFisica ? elementoMoedaFisica.options[elementoMoedaFisica.selectedIndex].value : 'BRL';

const resultados = await resultado(selecaoMoedaDigital, selecaoMoedaFisica);

app.innerHTML = `
  <h1>Conversor de Moedas</h1>
  <main>
  <form class="formulario">
  <fieldset>
  <label>Selecione uma cryptomoeda: </label>
  <select id="moeda_digital">${mapArrays(moedasDigitais, 'option')}</select>
  </fieldset>
  <fieldset>
  <label>Selecione uma moeda física: </label>
  <select id="moeda_fisica">${mapArrays(moedasFisicas, 'option')}</select>
  </fieldset>
  <button class="buscar" onSubmit="#">Buscar</button>
  </form>
  <div class="tabela">
  <div class="cabecalho">
  ${mapArrays(cabecalhoTabela)}
  </div>
  <div class="linha">
  <p>${resultados.moedaFisica}</p>
  <p>${resultados.moedaDigital}</p>
  <p>${new Intl.NumberFormat('pt-BR', { style: "currency", currency: `${selecaoMoedaFisica}` }).format(resultados.taxaCambio)}</p>
  <p>${resultados.ultimaAtualizacao.toLocaleDateString('pt-BR')}</p>
  </div>
  </div>
  </main>
`