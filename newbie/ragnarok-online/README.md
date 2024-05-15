# Ragnarok Online

Ragnarok Online é um antigo MMORPG que ficou muito famoso em sua época. Hoje em dia, grande parte da sua comunidade está espalhada em diferentes servidores pelo mundo, cada um deles possuindo suas próprias regras e, muitas vezes, seus próprios eventos customizados.

Lucas está criando seu próprio servidor de Ragnarok e nesse servidor ele quer criar um evento chamado "Caça aos Monstros", onde um jogador, junto com um grupo de amigos, deve embarcar em uma ilha com o intuito de derrotar um poderoso monstro. Completando essa missão, o jogador será recompensado com uma quantidade randômica de "partes" diferentes desse monstro que serão utilizadas para criar poderosos equipamentos. Além disso, será possível pagar uma boa quantidade de zenys (moeda do jogo) para multiplicar a quantidade de todas as partes ganhas naquela caça. Essa multiplicação será feita a partir de um número sorteado.

Lucas está querendo sua ajuda para criar um programa que, dado a quantidade de cada uma das partes recebidas pelo jogador, multiplique cada uma delas pelo número sorteado.

## Entrada

- A primeira linha da entrada consiste de um inteiro 'X' (1 ≤ X ≤ 300) representando a quantidade de partes diferentes adquiridas.
- A segunda linha contém 'X' inteiros 'Z' (1 ≤ Z ≤ 300) onde cada inteiro representa a quantidade adquirida de uma das determinadas partes do monstro.
- A terceira linha deve ser um inteiro 'Y' (1 ≤ Y ≤ 100) representando o número sorteado para a multiplicação.

## Saída

A saída consiste de uma linha mostrando a quantidade recebida de cada uma das partes após a multiplicação.

## Exemplo

| Entrada        | Saída        |
| -------------- | ------------ |
| 5 3 10 7 8 2 2 | 6 20 14 16 4 |
| 2 15 12 3      | 45 36        |