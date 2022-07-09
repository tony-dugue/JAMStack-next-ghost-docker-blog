# JAMStack : NextJS / Typescript avec Ghost en headless CMS (avec Docker)

## Présentation
***

Test d'une application en Nextjs / TypeScript combiné à Ghost en tant que headless CMS (serveur local avec Docker)

Projet [Next.js](https://nextjs.org/) crée avec [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 🚀 Installation
***

- récupération du projet sur Github par HTTPS :

```shell script
$ https://github.com/tony-dugue/JAMStack-next-ghost-docker-blog.git
```

- installer les dépendances du projet :
```bash
$ yarn install
# ou
$ npm install
```

- installer Ghost en local avec Docker

démarrer l'application Docker Desktop sur le mac

installer les images dans Docker :

```bash
$ docker compose up
```

Si une erreur de ce type se produit, aller dans Préferences / Ressources / File Sharing et faire + pour ajouter manuellement le dossier database se trouvant dans le projet  

```bash
Error response from daemon: Mounts denied: 
The path /Applications/MAMP/xxx/next-ghost-docker-blog/database is not shared from the host and is not known to Docker.
You can configure shared paths from Docker -> Preferences... -> Resources -> File Sharing.
See https://docs.docker.com/desktop/mac for more info.
```

## Démarrer l'application
***

- Démarrer le serveur de Ghost via Docker Desktop (ou avec un docker compose up dans le terminal) et dans le terminal, accéder à l'admin de Ghost : [http://localhost:3001/ghost](http://localhost:3001/ghost)

`email: john@doe.com et password : johndoe666`

si le projet Ghost a été réinitialisé, remplacer le dossier database par celui du dépôt Github du projet (contenant la bdd à jour)

- Démarrer le serveur de développement :

```bash
$ npm run dev
# ou
$ yarn dev
```

- Dans le terminal, accéder à : [http://localhost:3000](http://localhost:3000)

## Informations complémentaires
***

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
