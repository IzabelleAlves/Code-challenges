# Caçando Pokémons

Ash e seus amigos estão em uma aventura em busca de novos pokémons. Além disso, decidiram ver ao final da busca quem conseguiu mais pokémons de um certo tipo. Sua tarefa é criar um programa que diga quantos pokémons de um certo tipo Ash pegou. Para isso será dada uma matriz representando a área onde ele está. Para cada posição (x ; y) da matriz, se o valor for 0 (zero), significa que não tem nenhum pokémon naquela posição e se o valor for um número ‘T’, diferente de zero, significa que tem um pokémon do tipo ‘T’ naquela posição que pode ser pego por Ash.

## Entrada

Na primeira linha serão dados dois inteiros ‘N’ e ‘M’ (1 <= N, M <= 100) que dizem a quantidade de linhas e colunas da matriz, respectivamente. As próximas ‘N’ linhas terão ‘M’ inteiros ‘T’ (0 <= T <= 100) em cada, representando o tipo do pokémon ou se não há pokémon. Por fim, na última linha, será dado um inteiro ‘P’ (1 <= P <= 100), representando o tipo do pokémon a ser pego por Ash.

## Saída

A saída consiste em 1 linha contendo a frase “Ash pegou ‘Q’ pokemon” onde ‘Q’ deve ser a quantidade de pokémons do tipo ‘P’ pegos por Ash, podendo ser inclusive 0 (zero).

## Exemplo

| Entrada                                                                                                    | Saída               |
| ---------------------------------------------------------------------------------------------------------- | ------------------- |
| 4 4 0 1 0 0 2 0 2 0 0 1 0 0 0 0 0 2 2                                                                      | Ash pegou 3 pokemon |
| 5 10 0 1 0 0 0 3 0 0 0 0 0 2 0 0 0 1 0 0 0 2 0 3 0 0 0 0 2 0 0 0 8 0 1 0 0 3 0 8 0 0 0 0 0 0 0 0 0 0 1 0 1 | Ash pegou 4 pokemon |
