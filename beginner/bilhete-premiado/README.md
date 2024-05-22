# Bilhete premiado

Esse problema antes era chamado "Idade Premiada".

A sua empresa foi contratada para construir um programa que vai determinar a pessoa vencedora de um sorteio em uma viagem de trem e você ficou com a tarefa de escrever a primeira versão (MVP) do programa.

O sorteio é feito da seguinte maneira:
Durante a viagem é sorteado um número X entre 1 e 1000. Se tiver um passageiro com o bilhete com a numeração X, então esse passageiro é o vencedor.

Seu programa precisa informar o número da poltrona da pessoa vencedora, ou caso ninguém ganhou, informar que não há vencedor.

As poltronas são numeradas a partir de 0, e o trem é organizado de forma que todas as poltronas da frente estejam preenchidas.

## Entrada

A entrada consiste de 3 linhas:

- Na primeira linha é dado um inteiro N que indica a quantidade de pessoas que embarcaram no trem.
- Na segunda linha é informado os números dos bilhetes de cada uma das pessoas, já na ordem da sua poltrona.
- A terceira linha contém um inteiro X, indicando o bilhete premiado.

## Saída

Seu programa deve imprimir somente uma linha.
Caso exista uma pessoa vencedora, seu programa deve imprimir o texto "Número da poltrona do vencedor: ", seguido do número da poltrona.
Caso contrário, seu programa deve imprimir o texto "Não há vencedor";

## Restrições

1 <= N <= 500
1 <= X <= 1000

## Exemplo

| Entrada               | Saída                             |
| --------------------- | --------------------------------- |
| 5 12 14 1 101 102 101 | Número da poltrona do vencedor: 3 |
| 4 10 11 12 1 5        | Não há vencedor                   |

## Explicação:

No primeiro caso, a primeira linha da entrada diz que temos 5 passageiros, na próxima linha temos a lista dos bilhetes na ordem em que estão sentada:

- a pessoa sentada na poltrona de número 0 tem o bilhete com número 12
- a pessoa sentada na poltrona 1 tem o bilhete com número 14
- a pessoa na poltrona 2 tem o bilhete com número 1
- a pessoa da poltrona 3 tem o bilhete número 101
- e por fim, a pessoa sentada na poltrona 4 tem o bilhete com número 102

Na terceira linha temos o bilhete premiado informado número 101, então a resposta indica que o vencedor está na poltrona 3.

No segundo caso, não temos nenhuma pessoa com o bilhete 5, portanto não há vencedor.