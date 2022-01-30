# TeaAppIHM

Ce projet est une application angular permettant de consulter le stock de thé d'une entreprise et de gérer les entrées/sorties avec un historique.
Une démo en ligne est disponible à l'adresse suivante : https://valentinbordy.fr/tea

## Liste des fonctionnalités: 

### Global
- Message d'erreur ou de succès sur les différentes opéartions
- Indicateur de chargement sur les opérations d'ajout, de modification ou de suppression

### Ecran d'accueil
- Liste des thés en stock avec pagination et tri
- Detail des thés en cliquant sur une ligne du tableau
- Filtre de la liste de thé 

### Page détail du thé
- Modification du thé et de ses informations
- Consultation de l'historique d'opération
- Consultation du stock
- Suppression du thé

### Page ajouter un thé
- Permet d'ajouter du stock à un thé existant
- Permet d'ajouter un thé

### Page sortir du stock 
- Permet la consultation du stock en cours
- Permet de sortir une quantité d'unité du stock du thé voulu 

### Page historique 
- Permet de consulter la liste des opérations sur les différents thés
- - Permet de consulter la création d'un nouveau utilisateur
- Pagination coté serveur

### Page authentification
- Inscription
- Connexion
- Sauvegarde du JWT dans le cache 
- Vérification de la date de validité du JWT
- Redirection sur la page demandé avant la connection (param retUrl dans la requête)

### Page profil
- Ajout des thés par défaut
- Suppression de tout les thés
- Suppression de tout les logs
- Déconnexion

## Consigne d'installation en local

Lancer la commande `npm i` à la racine du projet puis `ng serve`pour avoir un serveur de developpement.
Le serveur sera disponible à l'adresse suivante : `http://localhost:4200/`.
