const input = require('prompt-sync')();

function main() {
  const credit = Number(input('Escolha a opção de empréstimo (R$40000,00 | R$60000,00 | R$81000,00): ')),
    installment = Number(input('Escolha a opção de parcela (R$1000,00 | R$1200,00 | R$1500,00): '));

  let bankBalance = credit,
    month = 0;

  while (bankBalance > 0) {
    interestValue = bankBalance * 0.01;

    console.log(`\n### Mês ${month} ###`);
    console.log(`Juros: R$${interestValue.toFixed(2)}`);

    if (bankBalance > installment) {
      console.log(`Parcela: R$${installment.toFixed(2)}`);
    } else {
      console.log(`Parcela: R$${bankBalance.toFixed(2)}`);
    }

    console.log(`Saldo anterior: R$${bankBalance.toFixed(2)}`);

    bankBalance = (bankBalance + interestValue - installment) > 0
      ? bankBalance + interestValue - installment
      : 0;

    console.log(`Saldo atual: R$${bankBalance.toFixed(2)}`);

    month++;
  }
}

main()