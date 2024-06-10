# Onde está o navio

Suponha que você é o novo pirata no bando do Chapéu de palha, no mundo de One Piece, e precisa localizar o seu navio pirata, em uma ilha deserta. Portanto, você irá precisar verificar se a localização da sua bússola, também conhecida como log pose, está correta, para então saber a direção para retornar ao navio. O log pose fornece duas coordenadas, e ambas precisam ser maiores que 0 e menores que 100 para estarem corretas. Além disso, caso as coordenadas sejam válidas e alguma delas for maior que 70, o barco está longe.

## Entrada

Seu programa receberá dois valores inteiros "X" e "Y" (-50 <= X, Y <= 150), representando a localização fornecida pela bússola.

## Saída

Imprima "Coordenada válida e o navio está perto", caso as coordenadas estejam corretas e ambas sejam menores que 71, "Coordenada válida e o navio está longe", se as coordenadas estiverem corretas e pelo menos uma delas for maior que 70, ou "Coordenada inválida", caso as coordenadas estejam erradas.

## Exemplo

| Entrada | Saída                                  |
| ------- | -------------------------------------- |
| 115 25  | Coordenada invalida                    |
| -43 49  | Coordenada invalida                    |
| 71 34   | Coordenada valida e o navio esta longe |
| 35 70   | Coordenada valida e o navio esta perto |