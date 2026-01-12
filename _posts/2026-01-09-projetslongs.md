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
