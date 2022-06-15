import { ConversaoMoeda } from './types';

async function resultado(selecaoMoedaDigital: string, selecaoMoedaFisica: string) {
    const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${selecaoMoedaDigital}&to_currency=${selecaoMoedaFisica}&apikey=${import.meta.env.VITE_API_KEY}`);
    const info: { [key: string]: any } = await response.json();
    const resultados: ConversaoMoeda = {
        moedaDigital: info["Realtime Currency Exchange Rate"]["2. From_Currency Name"],
        moedaFisica: info["Realtime Currency Exchange Rate"]["4. To_Currency Name"],
        taxaCambio: parseFloat(info["Realtime Currency Exchange Rate"]["5. Exchange Rate"]),
        ultimaAtualizacao: new Date(info["Realtime Currency Exchange Rate"]["6. Last Refreshed"])
    };
    return resultados;
}

export async function exibeResultado() {
    const moedaDigitalSelector = document.querySelector<HTMLSelectElement>('#moeda_digital_select')!
    const moedaFisicaSelector = document.querySelector<HTMLSelectElement>('#moeda_fisica_select')!
    const moedaDigital = moedaDigitalSelector.options[moedaDigitalSelector.selectedIndex].value;
    const moedaFisica = moedaFisicaSelector.options[moedaFisicaSelector.selectedIndex].value;
    const resultadoFuncao = await resultado(moedaDigital, moedaFisica);

    const exibicaoResultado = document.querySelector<HTMLDivElement>('#linha')!

    exibicaoResultado.innerHTML = `<p> ${resultadoFuncao.moedaFisica} </p>
    <p> ${resultadoFuncao.moedaDigital} </p>
    <p> ${new Intl.NumberFormat('pt-BR', { style: "currency", currency: `${moedaFisica}` }).format(resultadoFuncao.taxaCambio)} </p>
    <p> ${resultadoFuncao.ultimaAtualizacao.toLocaleDateString('pt-BR')}</p>`;
}