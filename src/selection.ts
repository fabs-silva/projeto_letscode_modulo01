export const selecaoMoedas = () => {
    const elementoMoedaDigital = document.querySelector<HTMLSelectElement>('#moeda_digital')!
    const selecaoMoedaDigital: string = elementoMoedaDigital.options[elementoMoedaDigital.selectedIndex].value;

    const elementoMoedaFisica = document.querySelector<HTMLSelectElement>('#moeda_fisica')!
    const selecaoMoedaFisica: string = elementoMoedaFisica.options[elementoMoedaFisica.selectedIndex].value;
    console.log(selecaoMoedaDigital, selecaoMoedaFisica);

    return { selecaoMoedaDigital, selecaoMoedaFisica };
}