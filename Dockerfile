# Utiliser une image officielle de Node.js
FROM node:20

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le projet
COPY . .

# Exposer le port utilisé par Express (dans bin/www, souvent 3000)
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
