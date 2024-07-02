# Vendas Online

Uma empresa de vendas online deseja calcular o valor total de uma compra realizada por um cliente. Escreva um programa que simule esse sistema de vendas online. O programa deve receber como entrada a quantidade de produtos diferentes adicionados ao carrinho (N) e, em seguida, os N pares de valores: a quantidade do produto (um número inteiro) e o preço do produto (um número real). Após receber os dados dos produtos, o programa deve calcular o valor total da compra considerando as quantidades de cada produto e exibir o resultado na tela.

## Entrada

A primeira linha da entrada contém um número inteiro N (1 <= N <= 100), representando a quantidade de produtos diferentes adicionados ao carrinho. Cada uma das próximas N linhas contém dois valores separados por espaço: um número inteiro C (1 <= C <= 20), representando a quantidade do produto, e um número real P (0.01 <= P <= 10000.0), representando o preço do produto.

## Saída

A saída será composta por apenas um número real, o valor total da compra considerando as quantidades de cada produto, mostrado com duas casas decimais de precisão.

## Exemplo

| Entrada                   | Saída  |
| ------------------------- | ------ |
| 3 2 10.99 2 5.50 1 15.75  | 48.73  |
| 3 2 10.99 2 5.50 10 15.75 | 190.48 |