# React TypeScript Dashboard

## 🚀 Introduction
Ce projet est un **Dashboard d'Administration** développé avec **React + TypeScript**. Il inclut :
- **React Router** (Navigation entre pages)
- **Redux Toolkit** (Gestion d'état globale)
- **Axios** (Requêtes API)
- **Tailwind CSS** & **shadcn/ui** (Interface utilisateur moderne)
- **Framer Motion** (Animations)
- **React Hook Form + Yup** (Formulaires et validation)
- **Chart.js** (Visualisation des données)
- **Authentification JWT** (Gestion des utilisateurs)

## 📂 Structure du projet
```
react-ts-dashboard/
│── src/
│   ├── components/      # Composants réutilisables
│   ├── pages/           # Pages principales (Dashboard, Login...)
│   ├── routers/         # Les differentes routes de navigation entre pages
│   ├── redux/           # Store Redux et slices
│   ├── services/        # Requêtes API via Axios
│   ├── utils/           # Fonctions utilitaires
│   ├── App.tsx          # Point d'entrée principal
│   ├── main.tsx         # Fichier d'initialisation
│   ├── index.css        # Styles globaux
│── public/              # Fichiers statiques
│── package.json         # Dépendances et scripts
│── README.md            # Documentation
```

## 🛠 Installation et démarrage
### 1️⃣ Cloner le projet
```sh
git clone https://github.com/Zeh-Eox/react-ts-dashboard.git
cd react-ts-dashboard
```
### 2️⃣ Installer les dépendances
```sh
yarn install  # ou npm install
```
### 3️⃣ Lancer le serveur
```sh
yarn dev  # ou npm run dev
```

## 🔐 Authentification JWT
- Un utilisateur doit se connecter via la page **/login**.
- Après authentification, il est redirigé vers **/dashboard**.
- Un **ProtectedRoute** empêche l'accès aux pages sans connexion.

## 🏗 Fonctionnalités principales
- **Login & Logout** avec Redux et JWT
- **Dashboard interactif** avec graphiques et statistiques
- **Gestion des utilisateurs** avec des rôles et permissions
- **UI moderne et responsive** avec Tailwind et shadcn/ui
- **Animations fluides** avec Framer Motion

## 🔄 API et Requêtes
Les requêtes vers l'API sont gérées avec **Axios**. Exemple :
```ts
import axios from 'axios';

const API_URL = 'https://api.example.com';

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};
```

## 📊 Visualisation des données
Le projet utilise **Chart.js** pour afficher des graphiques dynamiques dans le dashboard.
Exemple :
```tsx
import { Line } from 'react-chartjs-2';
const data = { labels: [...], datasets: [...] };
return <Line data={data} />;
```

## 🎨 UI avec Tailwind et shadcn/ui
L'interface est construite avec **Tailwind CSS** et **shadcn/ui**.
Exemple d'un **bouton personnalisé** :
```tsx
import { Button } from "@/components/ui/button";
<Button className="bg-blue-500 hover:bg-blue-600">Cliquez-moi</Button>
```

## 🎯 Améliorations possibles
- Ajouter un mode sombre
- Implémenter des notifications en temps réel
- Ajouter des rôles et permissions avancées

## 📜 Licence
Ce projet est sous licence MIT.

