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

- Accès initial : Page web vulnérable permettant d'accéder a une première VM.
- Progression : escalade de privilège et pivot entre plusieurs machine.
- Reverse Engineering & OSINT : Analyse d’un binaire sur la dernière machine + OSINT pour s'aider.
- Exploitation finale : Analyse sous GDB pour exposer le dernier FLAG.
- FLAG bonus : Trouver une information pour justifier le fait qu'on a utilisé l'OSINT pour s'aider au débug.

## G2 Aurélien POUILLES, Leandro RODRIGUEZ, Killian MARTY

Tuteur : à venir

**Challenges THCON 2026**

Le projet consiste en la création une série de quatre challenges (pour la THCON2026) simulant une opération d’infiltration physique réaliste suivie d’une phase d’analyse technique. L’objectif est de lier des compétences physiques, logicielles et d’investigation.

- Challenge 1 : Infiltration Physique. Les participants doivent s’introduire dans un bureau sécurisé (capteurs, caméras, etc.) en un temps limité. Ils devront détourner le flux vidéo, crocheter un coffre-fort pour récupérer des documents, trouver du matériel, et extraire les données d’un poste de travail via une clé USB bootable.
- Challenge 2 : Analyse Forensic. À partir des données extraites du PC, les participants devront récupérer des identifiants de connexion SSH via une analyse forensique.
- Challenge 3 : Investigation OSINT En utilisant les documents physiques photographiés dans le coffre-fort et les mails trouvés sur l’ordinateur, les participants devront mener une recherche en sources ouvertes pour identifier des complices extérieurs et localiser d’autres menaces.
- Challenge 4 : Escalade de Privilèges. Une fois l’accès au serveur obtenu, l’étape finale consiste à exploiter une vulnérabilité pour escalader des privilèges et éradiquer la menace.

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

## G5 Antoine LEBEAULT, Antoine REY

Tuteur : à venir

**Développement d'un Linux Security Module**

Nous souhaitons améliorer notre compréhension des mécanismes de protection qui existent dans le noyau Linux. Historiquement, le noyau Linux ne support que des mécanismes de contrôle d’accès dit « discret », c’est-à-dire ne reposant que sur l’identité de l’utilisateur et de ses groupes.

Le framework Linux Security Module (LSM) du noyau permet d’étendre ces capacités de contrôle d’accès, et d’implémenter un contrôle plus fin ou plus strict, tel que du MAC. Ce framework est notamment celui sur lequel repose par exemple SELinux, AppArmor ou encore Tomoyo, qui sont largement déployées.

Nous proposons d’implémenter un LSM basique, permettant par exemple initialement de restreindre l’accès de certains programmes à certains fichier uniquement.
L’objectif ambitieux serait ensuite d’étendre le module autant que possible afin de le rendre plus polyvalent, avec par exemple des restrictions à l’accès réseau, etc.

## G6  Zacharie Igor TENE FOGANG, Aissata DIENG

Tuteur : à venir

**Développement d'un antimalware avec détection comportementale**

Le projet vise à développer un outil de détection de malwares combinant plusieurs approches complémentaires :

- Détection par signatures : Construction d'une base de données de hash (SHA256/MD5) issues de sources publiques (MalwareBazaar, VirusTotal) ; scan rapide par comparaison de hash
- Analyse heuristique (statique) : Analyse du format Executable ; Détection d'imports d'API/syscalls suspects ; Identification de strings et métadonnées suspectes
- Détection comportementale OU Machine Learning (selon avancement) :
  - Option 1 : Détection comportementale (monitoring temps réel) : Monitoring des processus et connexions réseau ; Surveillance des mécanismes de persistance ; Détection de comportements malveillants (ransomware, injection)
  - Option 2 : Machine Learning : Entraînement d'un classificateur Random Forest ; Utilisation d'un dataset

L'outil intégrera un système de quarantaine, un logging détaillé et une interface CLI. Des tests comparatifs seront effectués avec des antivirus existant pour évaluer l'efficacité.

## G7 Natalia MYASNIKOVA, Kais SELLAMI

Tuteur : à venir

**Rétro-ingénierie et évaluation offensive de la sécurité d’ampoules connectées**

Notre objectif sera d’analyser la sécurité d’objets connectés de type ampoules intelligentes.
Le travail consistera à dumper la mémoire de l’équipement, analyser le firmware, identifier d’éventuelles clés cryptographiques et mécanismes de protection, analyse du protocole de communication sans fil utilisé puis tester des scénarios d’attaque réalistes dans un cadre maîtrisé.
Une phase de modification du firmware pourra être menée afin de contourner certaines limitations fonctionnelles imposées par le fabricant, notamment l’activation de fonctionnalités non accessibles par défaut comme des modes de couleurs étendus ou un changement dynamique de couleurs.

## G8 Thomas CHIARBONELLO, Mathis DUFRENOIS,  Majdi SI SALAH

Tuteur : à venir

**Design and Implementation of Educational Capture The Flag Challenges for Security Awareness Training**

This project focuses on the design, implementation, and pedagogical
evaluation of Capture The Flag (CTF) challenges aimed at students following
the SSI minor at ENAC. The objective is to create realistic, progressive,
and educational challenges covering two complementary domains:

- *OSINT (Open Source Intelligence)*: investigation scenarios involving public data collection, correlation, and analysis, highlighting common pitfalls and privacy risks.
- *Prompt Injection Attacks on AI Agents*: hands-on challenges demonstrating how large language model–based agents can be manipulated, bypass safeguards, or leak sensitive information through crafted prompts.

The project will emphasize learning objectives, difficulty progression, and
reproducibility, with the goal of producing reusable CTF challenges
suitable for academic training and potentially for integration into larger
security events.

## G9 Ambre LIABAT, Léna SEVELY

Tuteur : à venir

**Ingénierie sociale**

Le projet porte sur l'ingénierie sociale. Pour cela, nous aimerions étudier
les différents biais cognitifs et comment des personnes malveillantes
peuvent en profiter. L’idée principale est de créer une campagne de
phishing si la dsi nous y autorise. Ainsi que d’élargir le cercle d’étude en
dehors du cadre étudiant et notamment étudier différentes tranches d’âge de
différents milieux sociaux (entourages personnels, micro trottoirs..).
L’objectif serait d’étudier les biais et leur importance, statistiquement
parlant.

Un autre pan du projet pourrait être sur la construction de “jeux” de
sensibilisation de phishing/sécurité en général destiné à un public qui n’y
est pas forcément sensible. Une étude statistique pourra également être
faite sur ce sujet.

## G10 Julie BOURGEAIS, Léa de LA BOURDONNAYE, Célia LAVERGNE

Tuteur : à venir

**sécurité des communications en champ proche**

Dans le cadre du projet long, nous souhaitons explorer la sécurité des communications en champ proche (NFC). Notre objectif serait d'analyser en profondeur les mécanismes de ce protocole pour identifier et documenter ses failles potentielles.
Possibles axes d'études (modifiables) :

- modification de donnée
- Usurpation d'identité
- sécurité des transactions
- respects de la réglementation DORA

## G11 Hermas OBOU, Corentin COUSTY

Tuteur : à venir

**Développement d’une plateforme ZTNA : accès par ressource, révocation temps réel, audit**

Nous proposons de développer une plateforme ZTNA (Zero Trust Network Access) comme alternative aux VPN classiques. L’accès distant sera « par ressource » : l’utilisateur ne rejoint pas le réseau interne ; il demande l’accès à une ressource nommée (web interne, SSH de maintenance, service applicatif) et une passerelle placée en DMZ applique la décision et relaie uniquement vers la ressource autorisée. L’objectif est de réduire la surface d’attaque (pas de pivot/mouvement latéral vers le LAN) tout en offrant une gestion opérationnelle de l’accès (durée limitée, révocation, traçabilité).

Ce que nous comptons implémenter

- Environnement virtualisé reproduisant une segmentation type WAN/DMZ/LAN (dimensionné selon l’avancement).
- Control-plane : gestion des ressources et des politiques, délivrance d’accès temporaires.
- Passerelle ZTNA (point d’entrée) : application des décisions d’accès et exposition contrôlée des services internes, avec gestion de sessions et audit.

Si le temps le permet

- Révocation temps réel avec propagation rapide vers la passerelle, y compris sur sessions actives.
- Cache de décisions côté passerelle et invalidation lors des mises à jour de politiques.
- Plusieurs passerelles (scalabilité/HA).

## G12 Pierre DUROLLET, Ysabel FALLOT

Tuteur : à venir

**Développement d'un outil d'aide à l'analyse Forensic d'une machine**

L'analyse forensic étant centrale afin de comprendre ce qui a été fait sur une machine compromise, celle-ci doit être menée au plus vite afin de pouvoir sécuriser le reste du SI. Mais cela peut également être fastidieux lorsque celui-ci est volumineux. L'idée est donc de développer un outil qui va lire des fichiers clés et qui affiche les informations obtenues.

Le projet pourrait se dérouler de la manière suivante :

- étude de l'art des outils existants afin de centrer les besoins ainsi que des idées techniques de solution et des distribitions les plus attaquées (Linux, Windows, éventuellement MAC OS).
- Détermination des informations utiles à l'analyse forensic (OS avec version, processus tournant au moment de l'attaque dont les processus réseaux, extrait de logs utiles ,...) et développement d'un programme allant chercher ces informations en fonction des demandes de l'utilisateur (via des options en ligne de commnde), pour une distribution donnée (par exemple celle qui ressort de l'état de l'art)
- Rédaction d'un petit wiki donnant les informations nécessaires à la bonne utilisation de l'outil.
- Étendre le scope de l'outil pour d'autres distributions.
- Création d'un interface graphique de l'outil pour rendre l'experience utilisateur plus agréable.
- Extension pour l'analyse sur des réseaux? ou pas?
- Mise en place de messages d'accompagnement

## G13 Haakon BOGEN, Maxime DEJEAN, Nathan DOS-REIS-RUBA

Tuteur : à venir

**Sécurité de matériel audio non-filaires**

- Analyser les mécanismes de communications et d'appairage
- Analyser la surface d'attaque, pour lister des attaques passives et actives
- Etude de la mémoire embarquée, évaluation de la possibilité de dump rom, injection de code dans le firmware.

Le tout dans le but de réaliser différentes attaques expérimentales sur ces
appareils.

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
