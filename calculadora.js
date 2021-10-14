function calculadora() {
    const operacao = Number(prompt('Escolha uma função:\n\n1 - Soma (+);\n2 - Subtração (-);\n3 - Multiplicação (*);\n4 - Divisão Real (/);\n5 - Divisão Inteira (%);\n6 - Potência (**);\n\n'));

    if (!operacao || operacao >= 7) {
        alert('Erro! Operação Inválida!')
        calculadora();
    }
    else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2) {
            alert('Entrada inválida! Tente novamente!')
            calculadora();
        }
        else {
            function soma() {
                resultado = n1 + n2;
                alert(n1 + ' + ' + n2 + ' = ' + resultado);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(n1 + ' - ' + n2 + ' = ' + resultado);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(n1 + ' * ' + n2 + ' = ' + resultado);
                novaOperacao();
            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(n1 + ' / ' + n2 + ' = ' + resultado);
                novaOperacao();
            }
            function divisaoInteira() {
                resultado = n1 % n2;
                alert(n1 + ' % ' + n2 + ' = ' + resultado);
                novaOperacao();
            }
            function potencia() {
                resultado = n1 ** n2;
                alert(n1 + ' ** ' + n2 + ' = ' + resultado);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = Number(prompt('Deseja realizar uma nova operação?:\n\n1 - Sim;\n2 - Não;\n\n'));
        
                if(opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Adeus!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }
    
        switch(operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potencia();
                break;
        }
    }
}
calculadora();