# Defesas do Nexus Inimigo

Em League of Legends, o Nexus é o coração da base de uma equipe. A equipe precisa avançar por pelo menos uma rota para chegar ao Nexus inimigo, contendo em seu caminho estruturas defensivas chamadas de torres e inibidores. São três rotas, cada rota tem três torres e um inibidor, e cada Nexus é protegido por duas torres. Sua tarefa é mostrar se sua equipe venceu, ao destruir as duas torres do Nexus inimigo, ou quantas defesas inimigas ainda existem, caso sua equipe não tenha vencido.

## Entrada

Considerando as três rotas até o Nexus do inimigo, a entrada consiste nas defesas inimigas que a sua equipe conseguiu derrubar, sendo três números inteiros ‘TR’ (0 <= TR <= 9), ‘I’ (0 <= I <= 3) e ‘TN’ (0 <= TN <= 2) representando, respectivamente, torres da rota, inibidores e torres do Nexus.

## Saída

A saída consiste em uma única linha. Caso sua equipe ainda não tenha vencido, deve ser impressa a quantidade de defesas que o inimigo ainda possui, sendo impressa primeiro a quantidade de torres das rotas, seguida pela quantidade de inibidores e por fim, a quantidade de torres no Nexus inimigo. Caso sua equipe tenha conseguido derrubar as torres do Nexus inimigo você deve imprimir a mensagem “VITORIA”.

## Exemplo

| Entrada | Saída   |
| ------- | ------- |
| 3 1 2   | VITORIA |
| 3 1 0   | 6 2 2   |
| 9 0 0   | 0 3 2   |