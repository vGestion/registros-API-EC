# Establecer la imagen base de Node.js
FROM node:16.3.0-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de la aplicación
COPY package*.json ./
COPY . .

# Instalar las dependencias
RUN npm install

# Exponer el puerto de la aplicación
EXPOSE 3001

# Establecer las variables de entorno
ENV PORT=3001
ENV DB_URL=mongodb://mongodb:27017/Datalat

# Iniciar la aplicación
CMD ["npm", "run", "start"]
