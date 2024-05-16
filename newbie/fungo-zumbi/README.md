
# Fungo Zumbi

Em um futuro distópico, o mundo vive uma pandemia causada pelo fungo cordyceps, que faz as pessoas virarem zumbis e leva a raça humana à beira da extinção. Como um dos guardas, você está encarregado de investigar se a pessoa está infectada ou não, de modo a proteger sua zona de quarentena.

Para isso, foi criado um dispositivo, que além de detectar a infecção, também identifica o número de dias desde a infecção.

Lembre-se: As pessoas que não foram infectadas poderão acessar livremente a ZQ, caso contrário, se o número de dias desde a infecção for maior ou igual à 30, isso quer dizer que a pessoa é imune, se for maior ou igual a 7 e menor que 30, a pessoa deve ficar em observação (sob suspeita de ser imune).

Em último caso, se o número for menor que 7, faz poucos dias que a pessoa foi mordida e ela deve ser imediatamente isolada.

## Entrada

A entrada é composta por um caracter “A”, que pode ser “S” ou “N”, representando respectivamente, se a pessoa está infectada ou não, seguido de um inteiro “B”, que representa o número de dias desde a infecção. Note que se a pessoa não estiver infectada, o número de dias será sempre zero. Saiba que 0 <= B <= 100.

## Saída

No caso da pessoa não estar infectada, a saída deverá ser “Acesso permitido!”. Já se a pessoa estiver infectada, sob suspeita de ser imune, a saída será “Acesso negado! Fique em observacao”, no caso da imunidade ser confirmada o programa deverá imprimir “Imune! Siga para um local seguro”. A saída só será “Acesso negado! Isolamento urgente” quando a infecção for confirmada e a quantidade de dias for menor que sete dias.

## Exemplo

| Entrada | Saída                              |
| ------- | ---------------------------------- |
| S 6     | Acesso negado! Isolamento urgente  |
| N 0     | Acesso permitido!                  |
| S 30    | Imune! Siga para um local seguro   |
| S 12    | Acesso negado! Fique em observacao |
