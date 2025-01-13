---
layout: post
title: "Projets longs"
category: [2024-2025]
---

Vous trouverez ici la liste des projets longs de l'année scolaire 2024-2025.

[Modalités du projet long]({{ site.url }}/documents/projet_long_2024-2025.pdf)

# Goupes de projets longs 2024-2025

## G1 Armand CARRAZ-BILLAT, Daniel HENNIG

**OSINT et Social Engineering**

L'idée est de réaliser un challenge OSINT en plusieurs étapes (un peu à la manière des chal Ozint.eu), pour permettre de mettre en perspective toutes les techniques d'OSINT existantes, quels biais humains elles utilisent, comment les utiliser d'un point de vue technique, comment s'en protéger etc...
Nous pourrons tourner cette création sur la simulation d'un cas réel d'investigation, comme si nous retrouvons des pistes pour traquer quelqu'un qui s'est introduit dans un système.

## G2 Mathis HYOUNET, Leonardo BLAVIGNAC, Apollinaire CRIQUET

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

**Automatisation des tests de pénétration WEB**

Le but du projet est de développer un outil permettant d’automatiser les tests de pénétration de sites web en python3.

1) Reconnaissance automatisée :
    - Scraper les pages du site web
    - identifier les formulaires
    - identifier les endpoints
2) Vulnérabilités visées :
    - Injection SQL : envoie de payloads (SQL) dans les champs de saisie et les URL, détecte les réponses anormales
    - XSS (Cross-Site Scripting) : envoie de payloads (scripts/malwares exécutables) dans les champs de saisie et les URL, vérifier l’exécution des payloads
    - Analyse des en-têtes HTTP : vérifier si certaines protections sont utilisées (Content-Security-Policy ou X-Frame-Options)
3) Rapport automatisé

## G4 Achraf BENSEBAA, Laurent POUDROUX, Téo PISENTI 

Tuteur : Romain Cayre

**Recherche de vulnérabilité sur la Smart Keybox 3**

La Smart Keybox 3 est une boite à clé connectée à destination des propriétaires qui veulent louer un bien à courte durée. Il leur permet de partager les clés du logement de façon sécurisée et pratique avec leurs locataires sans intervention humaine. 

La Smart Keybox 3 est contrôlée à l'aide d'une application mobile via Bluetooth Low Energie (BLE) ou en tapant un code PIN sur son écran tactile. Le propriétaire a juste à communiquer un code PIN au locataire pour qu'il puisse déverrouiller le cadenas et récupérer la clé du logement. 

Nous nous proposons d'étudier les communication Bluetooth entre la boite et le smartphone afin de rechercher des vulnérabilités permettant à un attaquant de déverrouiller la Keybox sans le code PIN. 

Nous essaierons également, à l'aide de techniques de rétro-ingénierie, de récupérer le firmware du cadenas pour en étudier le fonctionnement à la recherche de vulnérabilités permettant l'ouverture à un attaquant. 

## G5 Nolan CORBELLARI, Lucas THIETART, Yanis GUIRENE

**Malware avec de l'extraction de donnée par Stéganographie**

Nous allons mettre en place un malware pour de l'exfiltration de donnée et des mises à jour basé sur le principe de stéganographie. L'objectif est de démontrer comment la stéganographie peut être intégrée dans un cycle complet de fonctionnement d’un malware tout en évitant la détection par les outils de sécurité traditionnels.

## G6 Nathan LASCHON, Hugo BOUYER, Antoine GUILLERMIN

**Développement d'un outil d’analyse statique de vulnérabilité pour le langage C**

Cet outil consisterait en :

  - une interface graphique (ou une extension VSCode)
  - un analyseur de vulnérabilités statiques basé sur les CVE les plus connues/importantes
  - éventuellement, une ouverture de l’outil permettant aux développeurs d’ajouter d’autres vulnérabilités et/ou langage à analyser (via une forme de standard)

## G7 Robin DIDENOT, Thomas EPAILLY, Nicolas PONTOIZEAU

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

**Challenges pour le CTF de la THCON**

- Challenge forensic qui se base sur un dump memoire windows. 
- Challenge Web (CSRF, sérialisation) + élévation de privilège d'un système unix. 
- Challenge physique d'un réseau Wifi dans la salle à casser (WPA2) .


# Soutenances 10/03/2025 après-midi

20 minutes de présentation, 10 minutes de question.

Jurés :

  * BM : Benoît Morgan
  * EA : Éric Alata
  * JCD : Jean-Christophe Deneuville
  * JR : Jonathan Roux
  * LH : Ladislas Hajnal
  * PQ : Philippe Queinnec
  * RC : Romain Cayre
  * VM : Vincent Migliore
  * VN : Vincent Nicomette

Enseignants anglais :

### Jury 1 : Salle XXX

| Heure | Groupe | Tuteur          | Jurés |
|-------|--------|-----------------|-------|
|       |        |                 |       |

### Jury 2 : Salle XXX

| Heure | Groupe | Tuteur | Jurés |
|-------|--------|--------|-------|
|       |        |        |       |

### Jury 3 : Salle B209

| Heure | Groupe | Tuteur | Jurés |
|-------|--------|--------|-------|
|       |        |        |       |
