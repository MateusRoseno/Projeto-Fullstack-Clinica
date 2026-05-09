# Projeto fullstack de um sistema de uma Clinica

## 👨‍💻 Desenvolvido por

- [@Mateus Roseno](https://github.com/MateusRoseno)
- [@Lucas Silva](https://github.com/lukazesz)
- [@Miguel Ferreira](https://github.com/miguelsfrds)

## Observações

### Preparação
Antes de tentar colocar o site para executar recomendo execultar o seguinte comando:
```bash
npm install
```

### Rodar API
```bash
node --watch server.js
```

### Rodar React
```bash
npm run dev
```

Apos executar o servidor react precione ```o + ENTER```

## Notas e estrutura

```
        API DE USUARIOS

    OBJETIVOS

CRIAR USUARIOS
LISTAR USUARIOS
EDITAR USUARIOS
DELETAR USUARIOS

    METODOS HTTP

GET -> BUSCAR
POST -> CRIAR
PUT -> EDITAR VARIOS
PATCH -> EDITAR UM
DELETE -> DELETAR

    ROTAS

1- TIPO DE ROTA / METODO
2- ENDEREÇO

res response
req request

        PRISMA

    ATUALIZAR BANCO DE DADOS

npx prisma db push

npx prisma generate

    MODELO DE DADOS ATUAL

model User {
    id    String @id @default(auto()) @map("_id") @db.ObjectId <ID UNICO>
    name  String
}

    MODELO DE DADOS EXEMPLO

model User {
    id    String @id @default(auto()) @map("_id") @db.ObjectId <ID UNICO>
    name  String <NOME OBRIGATORIO>
    nome? String <NOME NÃO OBRIGATORIO>
}
```
