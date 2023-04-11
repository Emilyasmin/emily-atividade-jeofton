# Node JS com Docker

## Sobre
Este projeto realiza a criação de uma imagem para container node.js utilizando um arquivo Dockerfile. Depois de gerada a imagem, deve ser possível abrir qualquer navegador de internet e ao se digitar localhost:3000 na barra de navegação, deve ser possível ler a mensagem "Hello Sistemas para Internet - P3 - Noite. A melhor turma."


## Instalando
Para instalá-lo em sua máquina faça os comandos a seguir:

``` bash
  git clone git@github.com:Emilyasmin/emily-atividade-jeofton main docker-node
  npm i express --save
  docker build -t emily/dockernode:alpine docker-node
  docker run -p 3000:3000 -d emily/dockernode
  docker run --name docker-node --rm -p 3000:3000 emily/dockernode:alpine
```

E depois acesse no seu navegador o endereço: http://localhost:3000

## Autor
Emily Yasmin do Nascimento Mendes