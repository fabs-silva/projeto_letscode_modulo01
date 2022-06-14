import { cabecalhoTabela, mapArrays, moedasDigitais, moedasFisicas, resultado } from './logica';
import './style.css';
const app = document.querySelector<HTMLDivElement>('#app')!

const elementoMoedaDigital = document.querySelector<HTMLSelectElement>('#moeda_digital');
const selecaoMoedaDigital: string = elementoMoedaDigital ? elementoMoedaDigital.options[elementoMoedaDigital.selectedIndex].value : 'BTC';

const elementoMoedaFisica = document.querySelector<HTMLSelectElement>('#moeda_fisica');
const selecaoMoedaFisica: string = elementoMoedaFisica ? elementoMoedaFisica.options[elementoMoedaFisica.selectedIndex].value : 'BRL';
console.log(selecaoMoedaFisica)

const resultados = await resultado(selecaoMoedaDigital, selecaoMoedaFisica);

app.innerHTML = `
  <h1>Conversor de Moedas</h1>
  <form>
  <label>Selecione uma cryptomoeda: </label>
  <select id="moeda_digital">${mapArrays(moedasDigitais, 'option')}</select>
  <label>Selecione uma moeda física: </label>
  <select id="moeda_fisica">${mapArrays(moedasFisicas, 'option')}</select>
  <button onSubmit="#">Buscar</button>
  </form>
  <table border="0">
  <thead>
  <tr>
  ${mapArrays(cabecalhoTabela, 'td')}
  </tr>
  </thead>
  <tbody>
  <tr>
  <td>${resultados.moedaFisica}</td>
  <td>${resultados.moedaDigital}</td>
  <td>${new Intl.NumberFormat('pt-BR', { style: "currency", currency: `${selecaoMoedaFisica}` }).format(resultados.taxaCambio)}</td>
  <td>${resultados.ultimaAtualizacao.toLocaleDateString('pt-BR')}</td>
  </tr>
  </tbody>
  </table>
`



console.log(resultados);
