# projeto-PTAC

# Painel de Ideias

O Painel de Ideias é uma aplicação desenvolvida em React para registrar,
organizar e acompanhar ideias de projetos.

## Funcionalidades

- Adicionar novas ideias
- Listar todas as ideias
- Marcar ideias como concluídas
- Remover ideias
- Mostrar a quantidade total de ideias
- Mostrar a quantidade de ideias concluídas
- Validar o campo antes de adicionar uma ideia

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS

## Como executar

Primeiro, instale as dependências:

npm install

Depois, execute o projeto:

npm run dev

Após executar o comando, abra o endereço informado pelo Vite no navegador.

## Decisões do projeto

Foi utilizado useState para controlar a lista de ideias,
o texto digitado no formulário e a mensagem de erro.

Cada ideia possui um id, um texto e uma propriedade feita,
que indica se a ideia foi concluída.

A lista é atualizada sem modificar diretamente o estado anterior.
Foram utilizados map para atualizar as ideias e filter para removê-las.

O contador é calculado diretamente a partir da lista de ideias,
sem criar um segundo estado para armazenar essa informação.

As ideias não são salvas após recarregar a página porque o trabalho
não utiliza localStorage.

## Estrutura

src/
- App.jsx
- App.css
- main.jsx