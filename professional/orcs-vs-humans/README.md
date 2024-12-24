# Orcs vs Humans

![orcsvshuman](https://github.com/gaabrieltorres7/congenial-code-challenges/assets/98062444/c9511415-8f17-45de-afcb-6515da28d912)

Os Orcs viviam em Draenor, um mundo em ruínas. Mas quando Gul’dan e o Conselho da Sombra ofereceram aos chefes dos clãs orcs o Sangue de Mannoroth o resultado foi a corrupção dos orcs que se transformaram em sanguinários assassinos. Após atestar a força da horda, Gul’dan abriu um portal entre Draenor e Azeroth, o mundo dos Humanos, iniciando uma guerra lendária contra as raças de Azeroth.

Após algumas derrotas, os humanos fugiram para norte do continente, para o reino de Lordaeron, onde se juntaram ao rei Terenas Menethil de Lordaeron, aos anões de Khaz Modan e aos elfos de Quel’Thalas para combater a Horda. Sua tarefa é: dado um campo de batalha representado por uma matriz 10x10, determinar quem será o grande vencedor da batalha através da contabilização do poder das tropas. A metade da matriz à esquerda contém as tropas dos Orcs e a metade da direita a dos Humanos.

Assim, cada orc e humano representa 1 unidade de poder. Mas o poder deles pode ser amplificado pela presença de um mago que faz com que cada indivíduo tenha o seu poder acrescido pelo poder dos aliados que estão a sua frente, atrás, a sua direita ou a sua esquerda. Assim, se um humano está cercado por 4 humanos, então o poder dele será 5 se houver a presença de um mago no lado humano do campo de batalha.

Da mesma forma, por influência de um mago no lado orc do campo de batalha, um orc terá poder 3 se houver 2 outros orcs em quaisquer das 4 possíveis posições ao seu redor. O mago também faz parte da tropa, representa uma unidade de poder e também sofre a influência de sua mágica.

## Entrada

A entrada é composta por uma matriz de caracteres de dimensão 10 X 10, representando o campo de batalha e sua composição. Os caracteres ‘o’ na matriz representam os orcs, os humanos são representados pelo caractere ‘h’, já os magos são representados pelo caracter ‘m’. O caracter ‘\*’ representa um espaço vazio.

## Saída

A saída será composta por uma linha contendo a frase “Loktar Ogar!!!”, caso os orcs possuam a maior quantidade de poder de tropa, pela frase “Pela aliança!”, caso os humanos possuam a maior quantidade de poder. Em caso de empate a saída será: “Batalha lendária!”.

## Exemplo

![](https://github.com/gaabrieltorres7/congenial-code-challenges/assets/98062444/6ad1c156-95a4-4c43-87ea-bc7678901430)
