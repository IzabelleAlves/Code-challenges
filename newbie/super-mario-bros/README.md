# Super Mario Bros

No New Super Mario Bros você entra no Mushroom Kingdom, e persegue o Bowser Jr. e a princesa Peach que foi raptada! Você precisa explorar oito mundos para encontrar todas as 240 Star Coins. Para isto, é preciso pôr em prática as tuas habilidades e usar ajudas adicionais como o Mega Mushroom, a Carapaça Koopa Azul e o Mini Mushroom para que nada fique por descobrir. Em um determinado mundo, sabe-se que temos 3 áreas secretas, onde é possível encontrar em cada uma, 10 Star Coins, 2 Mega Mushrooms e 1 Carapaça Koopa Azul. Para ir ao próximo mundo você deve encontrar todas as Star Coins deste mundo.

## Entrada

Considerando as três áreas secretas, a entrada consiste nos itens que você conseguiu encontrar, sendo três números inteiros 'SC' (0 <= SC <= 30), 'MM' (0 <= MM <= 6) e 'CK' (0 <= CK <= 3) representando, respectivamente, Star Coins, Mega Mushrooms e Carapaças Koopa Azul.

## Saída

A saída consiste em uma única linha.
Caso você não tenha encontrado todas as Star Coins, deve ser impresso a quantidade de itens ainda por serem descobertos no mundo atual, sendo impresso primeiro a quantidade de Star Coins, seguido pela quantidade de Mega Mushrooms e por fim, a quantidade de Carapaças Koopa Azul. Caso você tenha conseguido encontrar todas as Star Coins você deve imprimir a mensagem "PROXIMO MUNDO".

## Exemplo

| Entrada | Saída         |
| ------- | ------------- |
| 30 1 2  | PROXIMO MUNDO |
| 3 1 0   | 27 5 3        |
| 10 4 0  | 20 2 3        |