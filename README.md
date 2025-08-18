# App UnMep - Sistema de Gestão de Alunos

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

![chrome-capture-2025-08-18](https://github.com/user-attachments/assets/4d3813c1-8682-4c11-978c-f3fb69670219)

## Descrição

App de Gestão de Alunos desenvolvido como parte da atividade prática para a seleção UnMep 2025.2. Criado com NodeJS, TypeScript, React, Tailwind, Vite, Jotai e Framer Motion, o aplicativo lê um arquivo JSON com 1000 registros de alunos e permite visualizar, filtrar e organizar esses dados de forma simples e intuitiva.

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
git clone https://github.com/DAN-3200/node-unmep-app.git
```

```bash
# Instalando as dependências no diretório
cd node-unmep-app
pnpm install
```

```bash
# Executando a aplicação em ambiente de desenvolvimento
pnpm run dev
```

#### Método via Docker

```bash
# Executar a imagem Docker
docker build -t unmep-app .
```

```bash
# Executar a imagem Docker
docker run -it --rm -p 5173:5173 unmep-app
```

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
