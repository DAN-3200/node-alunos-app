FROM node:22.17.1-alpine
WORKDIR /app

# Copia package.json e package-lock.json
COPY package.json ./

# Instala dependências
RUN npm install

# Copia o restante do código
COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
