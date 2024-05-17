# Dilema do Prisioneiro

Você foi contratado para simular o dilema do prisioneiro entre dois prisioneiros, A e B, em um programa de computador.

Sua tarefa é implementar a lógica para que os prisioneiros possam decidir se cooperam ou traem um ao outro, levando em consideração as consequências de suas escolhas. Sendo elas:

Sentença ('livre', 'sentença leve (1 ano)', 'sentença moderada (5 anos)' ou 'sentença pesada (10 anos)' ).

### Regras

- Se ambos os prisioneiros cooperarem, ambos receberão uma sentença leve.
- Se um prisioneiro cooperar enquanto o outro trair, o traidor será solto e o cooperador receberá uma sentença pesada.
- Se ambos os prisioneiros traírem um ao outro, ambos receberão uma sentença moderada.

## Entrada

A primeira linha da entrada contém dois valores, A e B, indicando as escolhas de cooperação ou traição dos prisioneiros A e B, respectivamente. Cada valor pode ser 0 (indicando traição) ou 1 (indicando cooperação).

## Saída

A saída consiste em duas linhas, uma para cada prisioneiro, indicando o resultado de sua decisão e o número de anos de sua sentença. Cada linha começa com "Resultado para o Prisioneiro", seguido da letra do prisioneiro. Em seguida, é indicada a decisão do prisioneiro "livre", "sentença leve (1 ano)", "sentença moderada (5 anos)" ou "sentença pesada (10 anos)".

## Exemplo

| Entrada | Saída                                                                                                       |
| ------- | ----------------------------------------------------------------------------------------------------------- |
| 1 1     | Resultado para o Prisioneiro A: sentença leve (1 ano) Resultado para o Prisioneiro B: sentença leve (1 ano) |
| 0 1     | Resultado para o Prisioneiro A: livre Resultado para o Prisioneiro B: sentença pesada (10 anos)             |
| 1 0     | Resultado para o Prisioneiro A: sentença pesada (10 anos) Resultado para o Prisioneiro B: livre             |