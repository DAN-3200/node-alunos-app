# App AlunosSystem - Sistema de Gestão de Alunos

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

![chrome-capture-2025-08-26 (1)](https://github.com/user-attachments/assets/1d43b6ff-f56f-422e-8fd2-e7c3288e4d9e)

## Descrição

App desenvolvido para monitoramento de notas escolares. Criado com NodeJS, TypeScript, React, Tailwind, Vite, Jotai e Framer Motion, o aplicativo lê um arquivo JSON com 1000 registros de alunos e permite visualizar, filtrar e organizar esses dados de forma simples e intuitiva.

## Tecnologia

- `NodeJS 22.17.1`
- `TypeScript`
- `React`
- `Vite`
- `Jotai`
- `Framer Motion`

## Instalação e Execução

#### Método Convencional

```bash
# Clonando repositório
git clone https://github.com/DAN-3200/node-alunos-app.git
```

```bash
# Instalando as dependências no diretório
cd node-alunos-app
pnpm install
```

```bash
# Executando a aplicação em ambiente de desenvolvimento
pnpm run dev
```

#### Método via Docker

```bash
# Criar a imagem Docker
docker build -t alunos-app .
```

```bash
# Executar a imagem Docker
docker run -it --rm -p 5173:5173 alunos-app
```

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
