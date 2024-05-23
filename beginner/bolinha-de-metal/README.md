# Bolinha de Metal

Flíper é um tipo de jogo onde uma bolinha de metal cai por um labirinto de caminhos até chegar na parte de baixo do labirinto. A quantidade de pontos que o jogador ganha depende do caminho que a bolinha seguir. O jogador pode controlar o percurso da bolinha mudando a posição de algumas portinhas do labirinto.

Cada portinha pode estar na posição 0, que significa virada para a esquerda, ou na posição 1 que quer dizer virada para a direita. Considere o flíper da figura abaixo, que tem duas portinhas. A portinha P está na posição 1 e a portinha R, na posição 0. Desse jeito, a bolinha vai cair pelo caminho B.

![bolinhafliper](https://github-production-user-asset-6210df.s3.amazonaws.com/98062444/295739870-11f74c89-10c4-449d-9be3-a59eff99e7df.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240523%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240523T113539Z&X-Amz-Expires=300&X-Amz-Signature=80e12bb690f26eba978e5d27a9822636a75a0d1c5d0bdab0e681c31066c94d69&X-Amz-SignedHeaders=host&actor_id=166458348&key_id=0&repo_id=739466895)


Você deve escrever um programa que, dadas as posições das portinhas P e R, neste flíper da figura, diga por qual dos três caminhos, A, B ou C, a bolinha vai cair!

## Entrada

A entrada é composta por apenas uma linha contendo dois números P e R, indicando as posições das duas portinhas do flíper da figura.

## Saída

A saída do seu programa deve ser também apenas uma linha, contendo uma letra maiúscula que indica o caminho por onde a bolinha vai cair: ‘A’, ‘B’ ou ‘C’.

## Restrições

O número P pode ser 0 ou 1. O número R pode ser 0 ou 1.

## Exemplo

| Entrada | Saída |
| ------- | ----- |
| 1 0     | B     |
| 0 0     | C     |