# Cinema

Gru está comprando ingressos para ir ao cinema com sua namorada Lucy, mas a sessão está quase lotada e ele precisa de sua ajuda para escolher uma poltrona para se sentar. A atendente te informará quantas fileiras a sala de cinema tem, quantas cadeiras cada fileira tem e se cada lugar está ou não ocupado. Cabe a você encontrar dois assentos, um do lado do outro, para Gru e Lucy assistirem o filme dos Minions. No cinema as fileiras e os assentos são informados em ordem crescente, e são contados a partir de 1. Só há uma possibilidade de onde eles podem se sentar.

## Entrada

A primeira linha da entrada consiste de dois inteiros F (1 <= F <= 30) e C (2 <= C <= 30), a quantidade de fileiras e cadeiras em cada fileira, respectivamente. Cada uma das próximas F linhas contêm C inteiros que podem ser 0 para representar um assento vago ou 1 para representar um assento ocupado.

## Saída

Seu programa deve imprimir na primeira linha “Fileira: F”, onde F é a fileira escolhida. E na outra linha “Assentos: X e Y”, onde X e Y são os assentos escolhidos. Na saída, F, X e Y representam o cinema, sendo contados a partir de 1, mas cuidado ao tratar esses dados no seu programa (matriz). Além disso, tome cuidado para não acessar posições fora.

## Exemplo

| Entrada                     | Saída                      |
| --------------------------- | -------------------------- |
| 1 4 0 1 0 0                 | Fileira: 1 Assentos: 3 e 4 |
| 4 3 0 1 0 1 1 1 0 0 1 1 1 1 | Fileira: 3 Assentos: 1 e 2 |
| 2 6 0 1 1 1 0 1 1 1 0 0 1 1 | Fileira: 2 Assentos: 3 e 4 |
