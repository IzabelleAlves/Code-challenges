# Nível de maestria

Gustavo Costa e seus amiguinhos, Hiolanda e Danilo, gostam muito de jogar League of Legends. Eles vivem em busca do mais alto nível de maestria (habilidade com um personagem). Sendo assim, no jogo existem algumas metas a serem cumpridas para que este objetivo seja alcançado. No jogo obtêm-se pontos, os quais são representados pelas notas S+, S, S-, A+, A, A-, B+, B e B-, que determinam a habilidade do jogador com um determinado personagem. Para obter tais pontos e notas é necessário realizar algumas ações no jogo, sendo elas:

Número de sentinelas inseridas no mapa (N1)
Número de sentinelas inimigas destruídas no mapa (N2)
Número de abates realizados (N3)
Quantidade de vida curada (N4)
Número de monstros selvagens abatidos (N5)
Assistências em abates realizados (N6)

OBS: Para que se obtenha uma determinada nota, deve-se seguir os seguintes critérios de pontuação: S+ é necessário obter no mínimo 250 pontos; S no mínimo 200; S- no mínimo 180; A+ no mínimo 150; A no mínimo 100; A- no mínimo 80; B+ no mínimo 60; B no mínimo 40; B- no máximo 39.

Desta forma o professor Rubisley necessita que seus alunos construam um programa que dado a pontuação obtida, compute a nota.

## Entrada

A entrada consiste em seis variáveis inteiras N1, N2, N3, N4, N5, N6 (0 <= Ni <= 50), os quais determinam os seis critérios de avaliação de desempenho.

## Saída

A saída consiste da nota final entre S+ e B-, a qual determina a habilidade do jogador com o personagem.

| Entrada           | Saída |
| ----------------- | ----- |
| 50 45 20 30 50 40 | S     |
| 50 50 50 50 50 50 | S+    |
| 50 10 20 20 30 20 | A+    |
| 2 10 2 20 3 5     | B     |