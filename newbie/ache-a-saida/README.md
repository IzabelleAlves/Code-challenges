# Ache a saída

Em um mundo pós-apocalíptico, Thomas acorda sem memória em uma comunidade com outros garotos que também tiveram suas memórias apagadas. Pouco tempo depois, ele descobre que está preso em um enorme labirinto cheio de criaturas mortais, os verdugos, e que a única forma de se salvar é encontrando a saída. Trabalhando em equipe, Thomas e os garotos conseguiram desvendar parte do labirinto e estão prestes a escapar. No entanto, eles não têm muito tempo antes que as criaturas os encontrem, por isso eles precisam da sua ajuda para encontrar a saída.

![labirinto](https://github-production-user-asset-6210df.s3.amazonaws.com/98062444/317085358-c777645a-bcd2-4847-bf63-bcc45de042c9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240520%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240520T133752Z&X-Amz-Expires=300&X-Amz-Signature=2d3db5cf6f7506687fecee1d99d4988904111505850b233d42d32ec5d222d386&X-Amz-SignedHeaders=host&actor_id=166458348&key_id=0&repo_id=739466895)

## Tarefa

Sua tarefa é: sabendo que o ponto verde na imagem representa Thomas, e o vermelho um verdugo, faça um programa que indique se a direção informada por Thomas representa a saída do labirinto, a partir da imagem acima.

## Entrada

Duas strings, "A" e "B", que podem ser apenas "esquerda" ou "direita", representando respectivamente as diferentes direções que Thomas poderá seguir.

## Saída

"Achou" caso as direções representem o caminho da saída. "Morreu" caso as direções levem a um verdugo. "Tente novamente" caso as direções não levem a nenhum dos dois.

| Entrada           | Saída           |
| ----------------- | --------------- |
| direita esquerda  | Achou           |
| direita direita   | Tente novamente |
| esquerda esquerda | Morreu          |
| esquerda direita  | Tente novamente |