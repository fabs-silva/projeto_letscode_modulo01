const moedasFisicas: string[] = [
    "BRL",
    "USD",
    "EUR",
    "GBP",
    "CHF",
    "JPY",
    "CNY"
];

const moedasDigitais: string[] = [
    "BTC",
    "ETH",
    "DOGE",
    "BUSD",
    "SHIB",
    "MIOTA",
    "LUNA"
];

const cabecalhoTabela: string[] = [
    "Moeda Física",
    "Moeda Digital",
    "Taxa de Câmbio",
    "Última Atualização"
];

const mapArrays = (array: string[], tagHtml?: string): string => {
    const mapDoArray = array.map(item => {
        return (tagHtml === 'option') ? `<option value="${item}">${item}</option>` : `<p>${item}</p>`
    });
    return mapDoArray.join('');
}

export const geraFieldSets = () => {
    const fieldsetDigital = document.querySelector<HTMLFieldSetElement>('#moeda_digital')!
    const fieldsetFisico = document.querySelector<HTMLFieldSetElement>('#moeda_fisica')!

    fieldsetDigital.innerHTML = ` <label>Selecione uma cryptomoeda: </label>
<select id="moeda_digital_select">${mapArrays(moedasDigitais, 'option')}</select>`;

    fieldsetFisico.innerHTML = `<label>Selecione uma moeda física: </label>
<select id="moeda_fisica_select">${mapArrays(moedasFisicas, 'option')}</select>`;

}

export const geraCabecalho = () => {
    const cabecalho = document.querySelector<HTMLDivElement>('#cabecalho')!

    cabecalho.innerHTML = `
    ${mapArrays(cabecalhoTabela)}
    `
}