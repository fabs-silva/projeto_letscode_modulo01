interface ConversaoMoeda {
  moedaDigital: string,
  moedaFisica: string,
  taxaCambio: number,
  ultimaAtualizacao: Date;
};

export const moedasFisicas: string[] = [
  "BRL",
  "USD",
  "EUR",
  "GBP",
  "CHF",
  "JPY",
  "CNY"
];

export const moedasDigitais: string[] = [
  "BTC",
  "ETH",
  "DOGE",
  "BUSD",
  "SHIB",
  "MIOTA",
  "LUNA"
];

export const cabecalhoTabela: string[] = [
  "Moeda Física",
  "Moeda Digital",
  "Taxa de Câmbio",
  "Última Atualização"
]

export async function resultado(moedaDigital: string, moedaFisica: string): Promise<ConversaoMoeda> {
  const response = await fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${moedaDigital}&to_currency=${moedaFisica}&apikey=${import.meta.env.VITE_API_KEY}`);
  const info: { [key: string]: any } = await response.json();
  return {
    moedaDigital: info["Realtime Currency Exchange Rate"]["2. From_Currency Name"],
    moedaFisica: info["Realtime Currency Exchange Rate"]["4. To_Currency Name"],
    taxaCambio: parseFloat(info["Realtime Currency Exchange Rate"]["5. Exchange Rate"]),
    ultimaAtualizacao: new Date(info["Realtime Currency Exchange Rate"]["6. Last Refreshed"])
  };
}

export const mapArrays = (array: string[], tagHtml?: string): string => {
  const mapDoArray = array.map(item => {
    return (tagHtml === 'option') ? `<option value=${item}>${item}</option>` : `<p>${item}</p>`
  });
  return mapDoArray.join(',').replace(/,/g, '');
}