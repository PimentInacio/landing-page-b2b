# Estágio 1: Build da aplicação usando Node
FROM node:20-alpine as build
WORKDIR /app

# Copia os arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o resto do código e gera a versão de produção (pasta dist)
COPY . .
RUN npm run build

# Estágio 2: Servidor Web Nginx para rodar o site
FROM nginx:alpine

# Copia a pasta 'dist' gerada no Estágio 1 para a pasta pública do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80 (padrão web)
EXPOSE 80

# Inicia o Nginx
CMD ["nginx", "-g", "daemon off;"]