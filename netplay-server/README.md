# Serveur Netplay — Élio Game Room

Serveur de connexion pour jouer à 2 téléphones sur la même partie (netplay EmulatorJS).

## Déploiement sur Render (gratuit)

1. Va sur https://render.com et crée un compte (gratuit, connecte ton compte GitHub).
2. Clique **New +** → **Web Service**.
3. Choisis le repo **architechfr/ELIO-anniversaire**.
4. Configure :
   - **Root Directory** : `netplay-server`
   - **Runtime / Environment** : `Docker`
   - **Instance Type** : Free
5. Clique **Create Web Service**. Le premier build (Rust) prend ~5-10 min.
6. Une fois déployé, Render te donne une URL du type :
   `https://elio-netplay.onrender.com`
7. Donne-moi cette URL — je configurerai l'app pour l'utiliser.

> Note : sur le plan gratuit, le serveur "s'endort" après 15 min d'inactivité.
> La première connexion après une pause prend ~30 s à se réveiller, c'est normal.
