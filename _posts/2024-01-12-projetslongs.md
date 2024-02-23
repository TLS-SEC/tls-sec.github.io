---
layout: post
title: "Projets longs"
category: [2023-2024]
---

Vous trouverez ici la liste des projets longs de l'année scolaire 2023-2024.

[Modalités du projet long]({{ site.url }}/documents/projet_long_2023-2024.pdf)

# Goupes de projets longs 2023-2024

## G1 Édouard LEFIZELIER, Nathan MAILLET

Tuteur : Jean-Christophe Deneuville

**Side channel et cryptographie post quantique**

Étude des Side Chanel Attack sur une implémentation d’un algorithme de chiffrement post-quantique. Pour cela, nous allons d'abord sélectionner un type de Side Channel à étudier (cache attack, timing attack, power supply attack).

Une étude préliminaire des crypto systèmes Kyber et HQC permettra de décider sur lequel nous allons réaliser notre étude.

## G2 Matthis RAVEAU, Célian DEBETHUNE, Kilian SOUAL

Tuteur : Julien Fasson

**Réalisation d'un framework de pentest "haut niveau"**

Le but du projet est de se baser sur le framework ATT&CK (MItre) pour
réaliser un utilitaire (en Python) qui automatise les premières phases
CLASSIQUES d'une attaque (Recon, Accès initial, ... à définir lors du
projet). Par exemple :

- Découverte des hôtes
- Lister les services
- Rechercher les CVE associées aux versions des services trouvés
- Exploitation des CVE avec les API des framework connus (Metasploit, ....)
- ... (autres fonctionnalités à définir selon le temps / idées)

## G3 Hugo HASSON, Karine MARCHE, Sacha CAULI

Tuteur : Éric Alata

**Utilisation de l’IA pour repérer une divergence de code dans une trace side-channel**

- Les attaques physiques sur les produits sécurisés utilisent souvent des traces side-channel (consommation de courant, rayonnement électromagnétique, log de l’état du composant) pour analyser l’exécution d’un code.
- La rétroconception de cette exécution est importante pour comprendre à quel moment les données sensibles (ou utiles pour l’attaquant) sont manipulées ou à quel moment une opération critique (confirmation d’une condition d’accès, validation d’un PIN par exemple) est effectuée.
- Le projet consistera à partir de traces side-channel existantes d’essayer d’identifier un changement dans l’exécution de code et de repérer temporellement à quel endroit ce changement intervient.
- La faisabilité d’utiliser des algorithmes d’IA ainsi que la sélection de certains d’entre eux pour réaliser cette tâche sera l’un des résultats attendus du projet comme étape première.
- Un autre résultat serait de comparer l’efficacité en terme de rapidité et de consommation en ressource mémoire des algorithmes d’IA ou de réseaux de neurones retenus dans l’étape précédente

Proposé par le Hardware Security Lab de Thales

## G4 Valérian BROUSSEAU, Michel OBERTI, Pierre RAINJONNEAU

Tuteur : Philippe Queinnec

**IoT : Étude d’une montre connectée**

Le projet débutera par l’analyse d’une montre connectée que nous avons en notre
possession, et pourra évoluer vers l’examen d’autres objets en cas d’impasse ou de
détection de vulnérabilités intéressantes à mettre en pratique sur d’autres objets.

- Étude documentaire de l’objet connecté et son environnement
- Étude réseau : Analyse des échanges, sensibilité à l’écoute passive, sensibilité aux attaques
- Option : Étude applications mobiles : La montre est livrée avec une application constructeur, mais peut également fonctionner avec une application open-source.
- Option : Étude firmware : identification des faiblesses générales, création d’un firmware sécurisé ou malveillant
- Option : Étude hardware : attaques matérielles : alimentation, connections JTAG, série...
- Option : Application des failles trouvées sur d’autres objets connectés
- Conclusion : synthèse et propositions de sécurisation

## G5 Aurelia LEJEUNE, Clément VUILLAUME, Raphael LACROIX

Tuteur : Vincent Nicomette

**Rédaction, test et implémentation de challenges pour la Toulouse Hacking Convention**

(description exacte gardée confidentielle jusqu'à la THCon)

## G6 Bastien LEJARS, Nathan FOUCHER, Johann-Son LUPINSKI

Tuteur : Jonathan Roux

**Étude de vulnérabilités d'une sonde hydrologique connectée**

L'objectif de l'étude porte sur la capacité d'un attaquant à s'introduire à
bord d'un équipement de mesure hydrologique autonome. Ces équipements sont
installés sur le territoire, leur accès physique bien que difficile n'est
pas impossible.

L'étude porte donc sur la vulnérabilité des équipements en eux même, aussi
bien sur le plan de leur architecture matérielle que logicielle. L'étude
portera également sur le niveau de risque du système informatique auquel
sont rattachés les équipements via leur connectivité réseaux.

Proposé par la société vorteX.io.

## G7 Jonathan BONNEFOY, Léo BOUTEILLER, Dylan DEGAIL

Tuteur : Julien Fasson

**Deux challenges pour l'édition 2024 de la THCon**

- challenge de reverse engineering qui nécessite a la fois de l'analyse statique et dynamique d'exécutable et de code Python.
- challenge de sécurité web et applicative avec des notions de cryptographie, de niveau débutant à intermédiaire.

(description exacte gardée confidentielle jusqu'à la THCon)

## G8 Alexandre TULLOT, Gabin FOUQUET

Tuteur : Vincent Nicomette

**Challenges d'exploitation de binaire pour la Toulouse Hacking Convention (THCon)**

La série de challenges portera sur la sécurisation d'un client et serveur mail.
Elle sera divisée en trois étapes:

- Exploitation du client mail.
- Exploitation du serveur.
- Escalade de privilèges à partir de l'exploitation du serveur à l'aide de l'exploitation du driver kernel.

## G9 Enguerrand PICCO, Axel METZINGER

Tuteur : Benoît Morgan

**Challenges d'exploitation web pour la Toulouse Hacking Convention (THCon)**

Conception d'une série de challenges d'exploitation web pour l'édition de cette année de la THCon.
La série de challenges portera sur l'attaque d'un serveur web.

## G10 Estelle CHARPENTIER, Mailis DY

Tuteur : Éric Alata

**Développement d'un keylogger**

Développement d'un système sur clé usb qui exécuterait un
programme pour enregistrer ce qui est tapé sur le clavier de
l'utilisateur sur la clé usb. Extension en envoyant les
informations sur un serveur par exemple.

## G11 Tanguy DUCLOS-GENDREU, Evan ROZIERE

Tuteur : Vincent Migliore

**Charges malveillantes dans les pharmacies**

Nous avons vu que dans les pharmacies, il était possible d'envoyer les
ordonnances par mail. Ce qui nous a donné l'idée de tester s'il était
possible de gagner l'accès à un pc de pharmacie, comme les pharmaciens
sont obligés d'ouvrir la pièce jointe envoyée par mail.
Il est vrai qu'en théorie, il existe une application sécurisée qui
sandbox l'exécution du PDF (donc pour nous la charge malveillante). Mais
nous avons demandé à des amis travaillant dans le monde de la pharmacie
et par manque de qualification informatique, ils utilisent juste Outlook
ou Gmail et non l'application préconisée (2 pharmacies différentes ont
répondu positifs).
Nous pourrions commencer le projet long par un état de l'art des charges
malveillantes envoyables par mail puis essayer en "condition réelles"
dans les pharmacies.

## G12 Enguerrand DELADRIERE, Maxime DAVID, Gabriel CORELLA

Tuteur : Vincent Migliore

**Étude des fichiers polyglottes**

De l'étude des fichiers polyglottes et leur application dans la dissimulation de malwares, à la réalisation d'un malware polyglotte.
L'objectif de cette étude serait de comprendre comment fonctionne les fichiers polyglottes et quelles sont leurs applications dans la dissimulation de malwares, avec pour objectif final, la création d'un malware polyglotte (idéalement cross-plateform).

## G13 Sacha DARTHENUCQ, Paul STARCK

Tuteur : Ladislas Hajnal

**Serious game de gestion crise cyber**

Notre jeu comporterait plusieurs scénarios de crise cyber avec différents contextes et objectifs. Par exemple dans un scénario l'objectif d'une entreprise serait de minimiser ses pertes financières tandis que dans un autre il s'agirait d'empêcher les fuites d'informations confidentielles.

Le jeu se déroulerait en plusieurs phases de crise durant lesquelles le joueur est amené a choisir parmi plusieurs actions. Notre objectif est qu'il y a ai plusieurs solutions "justes" mais que le joueur ne puisse pas forcément toutes les choisir et soit amené a devoir faire des compromis comme dans une crise réelle, en prenant en compte différents facteurs (économiques, médiatiques, politiques...).

Aussi, les scenarios seront accompagnés d'exemples qui expliqueraient les choix faits et leurs conséquences (ex : communication transparente de Maersk contre NotPetya, shutdown de TV5 Monde...)

## G14 Adrien JAKUBIAK, Nicolas RIGAL

Tuteur : Jonathan Roux

**Capture des images d'un écran**

Il existe des méthodes pour reconstruire les images d'un écran via les
émissions électromagnétiques des câbles DVI, HDMI... Nous aimerions
travailler soit sur la reproduction de l'attaque, soit sur un protocole de
mitigation qui chiffrerait le traffic sur le câble de bout en bout (et les
deux avec proof of concept s'il existe un code open source et assez d'infos sur
l'attaque pour tout faire en un mois). https://ieeexplore.ieee.org/document/9743456

## G15 Quentin FRATY, Théodor VALLIER, Maxence PERICAT

Tuteur : Benoît Morgan

**Challenges pour la Toulouse Hacking Convention (THCon)**

Challenges pour la THCON dans les thèmes reverse et pwn.

# Soutenances 11/03/2023 après-midi

20 minutes de présentation, 10 minutes de question.

Jurés :

  * BM : Benoît Morgan
  * EA : Éric Alata
  * JCD : Jean-Christophe Deneuville
  * JF : Julien Fasson
  * JR : Jonathan Roux
  * LH : Ladislas Hajnal
  * PQ : Philippe Queinnec
  * VM : Vincent Migliore
  * VN : Vincent Nicomette

Enseignants anglais : à venir

### Jury 1 : Salle B006

| Heure | Groupe | Tuteur          | Jurés      |
|-------|--------|-----------------|------------|
| 13:30 | G3     | Éric Alata      | EA, BM, LH |
| 14:15 | G9     | Benoît Morgan   |            |
| 15:00 | G13    | Ladislas Hajnal |            |
| 15:45 | G13    | Éric Alata      |            |
| 16:30 | G15    | Benoît Morgan   |            |
| 17:15 | fin    |                 |            |

### Jury 2 : Salle B007

| Heure | Groupe | Tuteur                     | Jurés      |
|-------|--------|----------------------------|------------|
| 13:30 | G1     | Jean-Christophe Deneuville | JCD,JF, VN |
| 14:15 | G2     | Julien Fasson              |            |
| 15:00 | G5     | Vincent Nicomette          |            |
| 15:45 | G7     | Julien Fasson              |            |
| 16:30 | G8     | Vincent Nicomette          |            |
| 17:15 | fin    |                            |            |

### Jury 3 : Salle B209

| Heure | Groupe | Tuteur            | Jurés      |
|-------|--------|-------------------|------------|
| 13:30 | G4     | Philippe Queinnec | PQ, JR, VM |
| 14:15 | G6     | Jonathan Roux     |            |
| 15:00 | G11    | Vincent Migliore  |            |
| 15:45 | G12    | Vincent Migliore  |            |
| 16:30 | G14    | Jonathan Roux     |            |
| 17:15 | fin    |                   |            |
