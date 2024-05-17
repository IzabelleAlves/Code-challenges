# Cai pro X1

Lucas está jogando x1 contra seu amigo Pedro no Counter Strike, porém ele está com dificuldade em saber quem obteve a maior pontuação geral de abates. Considerando que eles jogaram 3 partidas, sua tarefa é elaborar um programa que, dada a pontuação de Pedro e Lucas em cada uma das 3 partidas, diga quem obteve o maior número de abates total.

## Entrada

3 linhas contendo 2 inteiros 'L', 'P' (1 <= 'L', 'P' <= 100) em cada uma, onde 'L' indica a pontuação de Lucas e 'P' indica a pontuação de Pedro.

## Saída

Uma linha contendo a palavra "Empate" caso os dois empatem, o nome "Pedro" caso Pedro tenha obtido uma pontuação de abates total maior que a de Lucas, ou o nome "Lucas" caso Lucas tenha abates total maior que Pedro.

## Exemplo

| Entrada           | Saída  |
| ----------------- | ------ |
| 20 32 16 50 100 0 | Lucas  |
| 20 32 14 54 10 0  | Pedro  |
| 16 0 0 8 4 12     | Empate |