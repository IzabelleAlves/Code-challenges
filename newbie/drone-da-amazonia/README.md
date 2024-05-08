# Drone da Amazônia

A loja virtual e mundialmente famosa Amazônia decidiu fazer suas entregas utilizando drones. Porém, ainda é necessário implementar a parte do código que irá dizer ao drone se ele está na coordenada determinada para a entrega ou não. Você deve escrever um programa que dadas as coordenadas para a entrega e as coordenadas atuais do drone, diga se o drone pode ou não soltar o pacote.

## Entrada

A primeira linha da entrada consiste de dois inteiros, X1 e Y1, que correspondem às coordenadas para a entrega. A segunda linha consiste de dois inteiros, X2 e Y2, correspondentes às coordenadas atuais do drone. Saiba que 1 <= X1, Y1, X2, Y2 <= 1000.

## Saída

Seu programa deve imprimir em uma única linha "Soltar pacote", caso as coordenadas da entrega e do drone sejam iguais, ou "Nao soltar pacote" , caso as coordenadas sejam diferentes.

## Exemplo

| Entrada   | Saída             |
| --------- | ----------------- |
| 5 20 5 20 | Soltar pacote     |
| 3 4 2 4   | Nao soltar pacote |