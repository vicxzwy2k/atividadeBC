Arquivos do módulo inicial de Node + Typescript, da estrutura MVC aplicada.

### Pré-requisitos globais:
`npm i --save-dev nodemon typescript ts-node`

### Instalação
`npm install`

### Para rodar o projeto
`npm run start-dev`

### Banco de Dados:
create database cliente;

use cliente;

create table usuarios (
	id int auto_increment key not null,
    name varchar(100) not null,
    age int default 18 not null,
    email varchar(255) not null,
    endereco varchar(255) not null,
    bairro varchar(50) not null,
    CEP varchar(8) not null
)
select * from usuarios;

insert into usuarios (name,age,email,endereco,bairro,CEP)
values ('matuê',29,'tuezin@gmail.com','Av. Paulista','São Paulo',40324567) ,('Mari Maria',35, 'mariasma@gmail.com','Av. Servidão','Rio de Janeiro',98789234) ,('anitta',25,'anira@gmail.com','Morro do Bombom','RJ',25384736) ;

