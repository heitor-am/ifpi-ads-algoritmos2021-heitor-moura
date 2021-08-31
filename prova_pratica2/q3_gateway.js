const input = require('prompt-sync')();

function main() {
  const value = Number(input('Valor da compra: ')),
    formOfPayment = Number(input('Forma de pagamento ([1] À vista | [2] Parcelado): '));

  let days = Number(input('Quantidade de dias (entre 2 e 31): ')),
    newValue = value,
    fee,
    installments;

  if (days >= 2 && days <= 31) {
    if (formOfPayment === 1) {
      if (days >= 2 && days < 14) {
        fee = newValue * 0.0439 + 0.4;
        dias = 2;
      } else if (days >= 14 && days < 30) {
        fee = newValue * 0.0349 + 0.4;
        days = 14;
      } else {
        fee = newValue * 0.0299 + 0.4;
        days = 31;
      }
    } else {
      installments = Number(input('Quantidade de parcelas: '));

      if (days >= 2 && days < 14) {
        fee = newValue * 0.0499 + 0.4 + (0.01 * installments);
        days = 2;
      } else if (days >= 14 && days < 30) {
        fee = newValue * 0.0399 + 0.4 + (0.01 * installments);
        days = 14;
      } else {
        fee = newValue * 0.0349 + 0.4 + (0.01 * installments);
        days = 31;
      }
    }

    console.log('\n##### Resultado #####');
    console.log(`Valor da compra: R$${newValue.toFixed(2)}`);

    if (formOfPayment === 1) {
      console.log(`Forma de pagamento: À vista`);
    } else {
      console.log(`Forma de pagamento: Em ${installments} parcelas`);
    }

    console.log(`Valor da taxa: R$${fee.toFixed(2)}`);
    console.log(`Valor líquido: R$${(newValue - fee).toFixed(2)}`);
    console.log(`Quantidade de dias: ${days}`);

  } else {
    console.log('\nQuantiade de dias inválido!')
  }
}

main();