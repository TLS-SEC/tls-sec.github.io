---
layout: post
title: "Projets longs"
category: [2025-2026]
---

Vous trouverez ici la liste des projets longs de l'année scolaire 2025-2026.

[Modalités du projet long]({{ site.url }}/documents/projet_long_2025-2026.pdf)

# Goupes de projets longs 2025-2026

## G1 Baptiste Rébillard, Ignacio ARROYO GARZA

Tuteur : à venir

**Challenge THCON 2026**

Challenge THCON articulé en plusieurs étapes :

- Accès initial : Page web vulnérable (panel admin) permettant d'obtenir un reverse shell.
- Progression : Pivoting entre plusieurs machines via SSH et escalades de privilèges (il faudra contourner un SIEM style "Wazuh" en plus de pivoter/monter en privilèges).
- Reverse Engineering & OSINT : Analyse d'un binaire sur la dernière machine. Le code source serait à retrouver via OSINT (ex: un post Reddit fictif).
- Exploitation finale : Analyse sous GDB (buffer overflow ou attaque matérielle) pour exposer le dernier FLAG.
- FLAG bonus : Utilisation de Web Archive pour récupérer une information sensible supprimée/modifié sur le même message Reddit.

## G2 Aurélien POUILLES, Leandro RODRIGUEZ, Killian MARTY

Tuteur : à venir

**Challenges THCON 2026**

Notre projet consiste en la création une série de quatre challenges
(pour la THCON2026) simulant une opération d'infiltration physique
réaliste suivie d'une phase d'analyse technique. L'objectif est de lier
des compétences physiques, logicielles et d'investigation.

- Challenge 1 : Infiltration Physique. Les participants doivent
s'introduire dans un bureau sécurisé (capteurs, caméras, etc.) en un
temps limité. Ils devront détourner le flux vidéo, crocheter un
coffre-fort pour récupérer des documents et une bombe factice à
désamorcer (en exploitant une documentation trouvée dans le coffre), et
extraire les données d'un poste de travail via une clé USB bootable.

- Challenge 2 : Analyse Forensic. À partir des données extraites du PC,
les participants devront identifier la présence d'un enregistreur de
frappe (keylogger) sur /dev/input. L'objectif est de développer un
script pour décoder les entrées clavier et récupérer des identifiants de
connexion SSH.

- Challenge 3 : Investigation OSINT En utilisant les documents physiques
photographiés dans le coffre-fort et les mails trouvés sur l'ordinateur,
les participants devront mener une recherche en sources ouvertes pour
identifier des complices extérieurs et localiser d'autres menaces.

- Challenge 4 : Escalade de Privilèges (Linux) Une fois l'accès au
serveur de contrôle des bombes obtenu (grâce au challenge 2), l'étape
finale consiste à exploiter une vulnérabilité système pour passer "root"
et exécuter le script de désactivation globale.

## G3 Pierre SAUSSEREAU, Nathan WALLART

Tuteur : Jonathan Roux ?

**Honeypots**

Notre sujet concerne les honeypots, c'est-à-dire une partie d'un système d'information (machine, service, appli, base de données...) qui est volontairement non-sécurisé et facilement repérable par un attaquant pour être visé. L'objectif est que l'attaquant s'y connecte en premier lors de son intrusion dans un SI pour qu'une alerte soit levée par les outils de détection d'intrusion et qu'il soit repéré avant qu'il n'attaque d'autres éléments du système vraiment sensible.

Notre projet comporterait tout d'abord une analyse de l'état de l'art des types d'honeypots. Ensuite, nous analyserons comment intégrer un honeypot dans un SI en fonction du type d'organisation, de sa taille, de son activité et des propriétés de son SI. Enfin, nous essaierons de construire un honeypot pour une organisation spécifique.

L'objectif en somme de notre projet est de déterminer les éléments à prendre en considération dans la construction d'un honeypot pour qu'il soit le plus efficacement trouvé par un attaquant sans laisser paraitre qu'il est un piège.

## G4 Evann DREUMONT, Quentin POINTEAU

Tuteur : à venir

**Extending BGP Security**

Ce projet aborde la sécurité du protocole BGP (Border Gateway Protocol), brique principale d'internet, qui permet l’échange d’informations de routage entre les systèmes autonomes (AS). Conçu à une époque où la confiance était implicite, le protocole présente des vulnérabilités majeures, comme le détournement de préfixes IP, les fuites de routes ou la manipulation de l'AS_PATH.

Pour remédier à ces failles, des extensions de sécurité basées sur l’infrastructure RPKI (Resource Public Key Infrastructure) ont été introduites, notamment les ROA (Route Origin Authorization), qui valident l’AS origine d’un préfixe IP, et les ASPA (Autonomous System Provider Authorization), qui vérifient les relations entre AS. Cependant, ces mécanismes ne couvrent pas tous les risques.

Le projet étudiera une nouvelle approche : la vérification des origines de routes basée sur des listes de préfixes signées (SPL), qui complète les ROA en permettant de valider les préfixes qu’un AS est autorisé à annoncer. L’objectif du projet est d’étudier cette proposition, d'écrire une implémentation de cette nouvelle solution, et d’évaluer son efficacité face à des scénarios d’attaques non entièrement résolus par les mécanismes existants.

## Gx XXX

Tuteur : à venir

**Titre**

Description

# Soutenances 12/03/2025 matin

5 minutes d'installation, 20 minutes de présentation, 10 minutes de question, 10 minutes de délibération.

Jurés :

- BM : Benoît Morgan
- JCD : Jean-Christophe Deneuville
- JR : Jonathan Roux
- PQ : Philippe Queinnec
- RC : Romain Cayre
- VM : Vincent Migliore
- VN : Vincent Nicomette

Enseignants anglais : à définir

### Jury 1 : Salle N7

| Heure | Groupe | Tuteur                     | Jurés       |
|-------|--------|----------------------------|-------------|

### Jury 2 : Salle N7

| Heure | Groupe | Tuteur           | Jurés       |
|-------|--------|------------------|-------------|

### Jury 3 : Salle N7

| Heure | Groupe | Tuteur            | Jurés          |
|-------|--------|-------------------|----------------|
