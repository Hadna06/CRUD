#  APLICAÇÃO RESTful

Aplicativo simples desenvolvido para realizar operações básicas.

C - Criar

R - Ler

U - Atualizar

D - Delertar

# FUNCIONALIDADE

1 Criar: Adicionar novos registros ao banco de dados.
2 Ler: Recuperar e visualizar imformações do banco de dados.
3 Atualizar: Modificar registros existentes no banco de dados.
4 Deletar: Remove registros do banco de dados.

# PRIMEIRO INICIALIZA- SE NO TERMINAL DO COMPUTADOR OS SEGUINTES COMANDOS:
  
  cd desktop ou Área de trabalho 
  
  mkdir (nome da pasta)
  
  cd (nome da pasta)
  
  code . (para abrir o terminal)

# FORAM INTALADOS : 

/O Prisma no terminal integrado com o seguinte comando : \

- 1 Inicialização: 
   npm init -y;
- 2 Instalar typescirpt:
   npm install typescript ts-node @types/node --save-dev;
- 3 Inciando o comando do typescript:
   npx tsc --init;
- 4 Instalando o prisma:
  npm install prisma --save-dev;
- 5 inicializar o prisma:
  npx prisma init;

/Executando migrates para as tabelas banco de dados com Prisma Migrate\

- Criar o banco de dados SQLite e as Usertabelas Post:
  npx prisma migrate dev

/ Prisma Studio\

 - npx prisma studio
 - localhost:5555

/ Dentro de server.ts\

 - npm install express;
 -  import express from 'express'
 -  Fazendo as tabelas CRUD
   
  / Utilza-se o neon-tech\

  - Neon é um Postgres totalmente gerenciado e sem servidor. Ele separa o armazenamento e a computação para oferecer recursos modernos de desenvolvimento, como serverless, ramificação, armazenamento sem fundo e muito mais. Ele também fornece uma API para gerenciar seus projetos, ramificações e a maioria das outras operações suportadas pelo Console Neon.




# AUTOR

- Hadna Jady de Araújo Oliveira
  
# CONTATO

- Email: h.a.d.n.a17jady@gmail.com
