---
layout: post
title: "Projets longs"
category: [2024-2025]
---

Vous trouverez ici la liste des projets longs de l'année scolaire 2024-2025.

[Modalités du projet long]({{ site.url }}/documents/projet_long_2024-2025.pdf)

# Goupes de projets longs 2024-2025

## G1 Armand CARRAZ-BILLAT, Daniel HENNIG, Samy SAAD CHAOUCH

Tuteur : Jonathan Roux

**OSINT et Social Engineering**

L'idée est de concevoir un challenge OSINT en plusieurs étapes, inspiré des formats tels que ceux proposés par Ozint.eu. Ce challenge permettrait d'explorer de manière pratique et progressive l'ensemble des techniques OSINT disponibles. Il mettrait en lumière les biais cognitifs exploités, les approches techniques utilisées, ainsi que les moyens de se prémunir contre ces techniques. L'ensemble pourrait être structuré autour d'une simulation réaliste d'enquête, où les participants devraient suivre des indices pour traquer un individu ayant infiltré un système.

## G2 Mathis HYOUNET, Leonardo BLAVIGNAC, Apollinaire CRIQUET

Tuteur : Vincent Migliore

**Implantation d'un algorithme de cryptographie post-quantique**

Nous souhaitons améliorer notre connaissance en cryptographie post-quantique en implémentant l'un des finalistes de la compétition du NIST. Nous souhaitons réaliser cette implémentation en C, et ajouter une composante HDL. Afin de sélectionner l'algorithme que nous implémenterons, nous commencerons par réaliser un état de l'art rapide.

Pour la phase d'implémentation, comme la difficulté nous est incertaine, nous proposons différents objectifs à atteindre de plus en plus les ambitieux:

- Objectif minimal :
  - Implémentation des primitives principales de l'algorithme en C
  - Implémentation d'une des fonctions mathématiques sous adjacent en HDL
- Objectif modéré :
  - Implémentation d'une fonctionnalité de l'algorithme (keygen, decrypt...) en C
  - Implémentation de toutes les fonctions mathématiques "essentiels" utilisé par cette fonctionnalité en HDL
- Objectif ambitieux :
  - Implémentation de plusieurs fonctionnalités de l'algorithme en C
  - Implémentation de toutes les fonctions mathématiques "essentiels" utilisé par ces fonctionnalités en HDL et les tester sur un FPGA
- Objectif optimiste :
  - Mise en place d'une librairie en C avec l'implémentation totale de cet algorithme
  - Intégrer l'implémentation HDL avec notre implémentation C sur FPGA

## G3 Mathieu ZEIDLER, Mathieu MALAK

Tuteur : Éric Alata

**Automatisation des tests de pénétration WEB**

Le but du projet est de développer un outil permettant d’automatiser les tests de pénétration de sites web en python3.

1. Reconnaissance automatisée :
    - Scraper les pages du site web
    - identifier les formulaires
    - identifier les endpoints
2. Vulnérabilités visées :
    - Injection SQL : envoie de payloads (SQL) dans les champs de saisie et les URL, détecte les réponses anormales
    - XSS (Cross-Site Scripting) : envoie de payloads (scripts/malwares exécutables) dans les champs de saisie et les URL, vérifier l’exécution des payloads
    - Analyse des en-têtes HTTP : vérifier si certaines protections sont utilisées (Content-Security-Policy ou X-Frame-Options)
3. Rapport automatisé

## G4 Achraf BENSEBAA, Laurent POUDROUX, Téo PISENTI 

Tuteur : Romain Cayre

**Recherche de vulnérabilité sur la Smart Keybox 3**

La Smart Keybox 3 est une boite à clé connectée à destination des propriétaires qui veulent louer un bien à courte durée. Il leur permet de partager les clés du logement de façon sécurisée et pratique avec leurs locataires sans intervention humaine. 

La Smart Keybox 3 est contrôlée à l'aide d'une application mobile via Bluetooth Low Energie (BLE) ou en tapant un code PIN sur son écran tactile. Le propriétaire a juste à communiquer un code PIN au locataire pour qu'il puisse déverrouiller le cadenas et récupérer la clé du logement. 

Nous nous proposons d'étudier les communication Bluetooth entre la boite et le smartphone afin de rechercher des vulnérabilités permettant à un attaquant de déverrouiller la Keybox sans le code PIN. 

Nous essaierons également, à l'aide de techniques de rétro-ingénierie, de récupérer le firmware du cadenas pour en étudier le fonctionnement à la recherche de vulnérabilités permettant l'ouverture à un attaquant. 

## G5 Nolan CORBELLARI, Lucas THIETART, Yanis GUIRENE

Tuteur : Jonathan Roux

**Malware avec de l'extraction de donnée par Stéganographie**

Nous allons mettre en place un malware pour de l'exfiltration de donnée et des mises à jour basé sur le principe de stéganographie. L'objectif est de démontrer comment la stéganographie peut être intégrée dans un cycle complet de fonctionnement d’un malware tout en évitant la détection par les outils de sécurité traditionnels.

## G6 Nathan LASCHON, Hugo BOUYER, Antoine GUILLERMIN

Tuteur : Éric Alata

**Développement d'un outil d’analyse statique de vulnérabilité pour le langage C**

Cet outil consisterait en :

  - une interface graphique (ou une extension VSCode)
  - un analyseur de vulnérabilités statiques basé sur les CVE les plus connues/importantes
  - éventuellement, une ouverture de l’outil permettant aux développeurs d’ajouter d’autres vulnérabilités et/ou langage à analyser (via une forme de standard)

## G7 Robin DIDENOT, Thomas EPAILLY, Nicolas PONTOIZEAU

Tuteur : Jean-Christophe Deneuville

**Ensuring data integrity and authenticity in commercial aviation flight recorders**

Commercial aviation relies heavily on flight recorders, such as Cockpit
Voice Recorders (CVR) and Flight Data Recorders (FDR), to investigate
accidents and improve aviation safety. These recorders provide critical
insights into the events leading to an incident. However, concerns
regarding the potential tampering or alteration of flight recorder
data—either intentionally or unintentionally—threaten the reliability and
credibility of investigations.

While aviation standards and regulations define clear guidelines for the
handling and analysis of flight recorder data, there are insufficient
safeguards to ensure the digital integrity and authenticity of the data once
retrieved. In the absence of strong protections, the following risks may
occur:

   - Data tampering: The possibility of intentional or accidental modification of flight recorder data could compromise investigation outcomes, potentially obscuring the root causes of accidents.
   - Loss of credibility: Allegations of data manipulation can undermine the credibility of investigative findings, resulting in public distrust.
   - Legal and ethical challenges: Inaccurate or tampered data can lead to unjust liability assessments, prolonged legal disputes, and reputational damage.

Objectives

  - Analyze current procedures in CVR and FDR data handling.
  - Explore technical solutions (cryptographic techniques, SATCOM...).
  - Simulate or implement the most promising solution to validate its feasibility and effectiveness in the context of the sector

## G8 Jules-Ian BARNAVON, Matis RAMARA

Tuteur : Benoît Morgan

**Challenges pour le CTF de la THCON**

- Challenge forensic qui se base sur un dump memoire windows. 
- Challenge Web (CSRF, sérialisation) + élévation de privilège d'un système unix. 
- Challenge physique d'un réseau Wifi dans la salle à casser (WPA2) .

## G9 Alexis DUVERNEIX, Arthur MURARO

Tuteur : Benoît Morgan

**Recherche de vulnérabilités sur des implémentations RISC V**

Un papier sorti récemment (Ghostwriter) a annoncé des vulnérabilités
majeures dans les différentes implémentations de processeurs sous
architecture RISC V. Ils ont pour cela créé un système de fuzzing
différentiel sur différents processeurs de différents fabricants et ont
permis de remonter à la fois des bugs, comme des problème d'implémentation
de la norme RISC V et des vulnérabilités. (cf : https://ghostwriteattack.com/ )
Nous aimerions tenter nous aussi de mettre en place du fuzzing et tenter de
trouver des bugs.

## G10 Robin AUGEREAU, Yohan TESTEMALE, Mathieu BENZERROUK

Tuteur : Philippe Queinnec

**Création d'une architecture de cloud hybride Zero Trust avec une distribution Debian personnalisée**

Ce projet vise à concevoir et mettre en œuvre une infrastructure cloud hybride sécurisée basée sur le modèle Zero Trust. L’objectif est de développer une distribution Debian adaptée à un environnement professionnel et d’intégrer les services nécessaires au fonctionnement sécurisé des applications métiers.

  - Développement d’une distribution Debian personnalisée
      - Intégration des logiciels professionnels tels qu’une suite bureautique, des applications de messagerie (instantanée et e-mails) et un client VPN.
      - Configuration des services essentiels pour répondre aux besoins d’un environnement d’entreprise.
  - Mise en place d’une infrastructure Kubernetes
      - Déploiement d’une architecture cloud hybride avec orchestration via Kubernetes pour assurer la scalabilité, la résilience et une gestion centralisée des services.
      - Intégration des principes de sécurité Zero Trust, notamment : Authentification forte et continue ; Micro-segmentation pour limiter les privilèges ; Surveillance active des flux réseau et des activités des utilisateurs.
  - Prise en compte des contraintes de sauvegarde et de récupération
      - Mise en place de solutions de sauvegarde des données et des configurations avec des temps de retour (RTO) et points de reprise (RPO) clairement définis.
      - Simulation de scénarios de panne pour tester et valider les procédures de reprise.
      
## G11 Nino GAUTHIER, Mathieu BAUDON, Hugo SIMON

Tuteur : Vincent Nicomette

**Challenges pour la THCon 2025**

  - Un premier challenge de rétro-ingénierie qui serait écrit en Zig. L'idée
     est d’avoir un challenge assez accessible.
  - Un second challenge plus costaud en rétro-ingénierie basé sur la
    technique d'anti analyse dynamique: les nanomites.
  - Une sorte de coffre-fort permettant de stocker de manière "chiffrée" des
     mots de passe (dont le FLAG). Les joueurs devront alors inverser la
     fonction qui s’occupe du chiffrement.
  - Challenges forensiques

## G12 Daniel AUNAN, Alexandre CLERMONT-PEZOUS, Mohamed AITTALEB

Tuteur : Romain Cayre

**Vulnérabilités dans les infrastructures dites "cloud-native"**

Nous partons du constat suivant : de plus en plus d'entreprises déploient leurs applications et leurs SI sur des ressources cloud, ou des infrastructures dites "hybrides".  Il nous semble donc pertinent de se questionner sur l'évolution des surfaces d'attaques dans ce contexte.

Le sujet de notre projet long prendra la forme d'un état de l’art des surfaces d'attaques dans le domaine du cloud, nous envisagerons possiblement la mise en œuvre d'un prototype d'architecture vulnérable, ainsi qu'une ou plusieurs attaques.

## G13 Julien MAIGNAN

Tuteur : Philippe Queinnec

**Création d'un réseau domotique sécurisé**

  - Analyse de risque pour déterminer les points à sécuriser en priorité. 
  - Sécurité matériel : 
    - Voir dans les documentations quels sont les sécurité matériel proposé par chaque composant 
    - Vérifier si des attaques vue en cours peuvent être effectué sur le matériel et le cas échéant appliquer les contremesures 
    - Communiquer de façon sécurisé avec les capteurs 
    - Si c'est possible mettre en place une communication chiffré entre les capteurs et l'ESP32 
    - Reconnaitre chaque capteur de manière unique 
  - Cryptographie : 
    - Stocké de manières sécuriser les données des capteurs 
    - Sur la raspbery PI sécuriser les données, cloisonner les communications avec chaque ESP 32 
    - Génération sécurisé de clés ou certificat pour la communication sécurisé. 
    - Mise à jours périodique des secrets partagé. 
  - Réseau : 
    - Mettre en place un tunnel IPV4 ou 6 entre le serveur et les ESP32 
    - Mettre en place un pare-feu vers l'extérieur 
    - Mettre en place une architecture réseau sécurisé (DMZ, routeur, parefeu), cloisonner le réseau. 
    - Les différents éléments du réseau (parefeu, routeur, serveur) serai hébergé sur la Raspbery dans différents conteneur. 
  - Mettre en place un système de versionnage et de mise à jours pour tous les programmes.
  - S'il y a le temps faire de la sécurisation d'OS sur la Raspbery PI 
  - S'il y a le temps faire passer des tests statistiques au code. 

## G14 Sanim GHARBI, Leopold LANARD, Alan DUTEMS

Tuteur : Benoît Morgan

**CTF sous une forme de cyber enquête**

L'idée est de concevoir une enquête autour d'un enchainement de défis amenant à des flags et par extension des indices sur un cyberattaquant. Les participants seraient dans un role play d'enquêteurs chargés de résoudre le mystère autour de ce cyberattaquant. Des éléments les guideraient dans leur enquête comme des emails, logs, fichiers corrompus par exemple afin d'avancer vers la résolution finale.
Les outils qu'on utiliserait seraient entre autre Wireshark, Nmap, Burp et potentiellement tout autre outils cyber qui nous semblerait pertinent d'integrer au défi.
Mise en place d'un serveur pour heberger les défis si le temps le permet.


# Soutenances 10/03/2025 après-midi

5 minutes d'installation, 20 minutes de présentation, 10 minutes de question, 10 minutes de délibération.

Jurés :

  * BM : Benoît Morgan
  * EA : Éric Alata
  * JCD : Jean-Christophe Deneuville
  * JR : Jonathan Roux
  * PQ : Philippe Queinnec
  * RC : Romain Cayre
  * VM : Vincent Migliore
  * VN : Vincent Nicomette

Enseignants anglais : Anne Bradshaw (AB), Emma Nelson-Levrero (ENL), Stephen Ryan (SR)

### Jury 1 : Salle B006

| Heure | Groupe | Tuteur                     | Jurés       |
|-------|--------|----------------------------|-------------|
| 13:30 | G3     | Éric Alata                 | EA, JCD, AB |
| 14:15 | G5     | Jonathan Roux              |             |
| 15:00 | G6     | Éric Alata                 |             |
| 15:45 | G1     | Jonathan Roux              |             |
| 16:30 | G7     | Jean-Christophe Deneuville |             |
| 17:15 | fin    |                            |             |

### Jury 2 : Salle B007

| Heure | Groupe | Tuteur           | Jurés       |
|-------|--------|------------------|-------------|
| 13:30 | G8     | Benoît Morgan    | BM, VM, ENL |
| 14:15 | G9     | Benoît Morgan    |             |
| 15:00 | G12    | Vincent Migliore |             |
| 15:45 | G14    | Benoît Morgan    |             |
| 16:30 | fin    |                  |             |

### Jury 3 : Salle C002

| Heure | Groupe | Tuteur            | Jurés          |
|-------|--------|-------------------|----------------|
| 13:30 | G12    | Romain Cayre      | PQ, RC, VN, SR |
| 14:15 | G10    | Philippe Queinnec |                |
| 15:00 | G11    | Vincent Nicomette |                |
| 15:45 | G4     | Romain Cayre      |                |
| 16:30 | G13    | Philippe Queinnec |                |
| 17:15 | fin    |                   |                |

