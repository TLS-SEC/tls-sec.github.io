---
layout: post
title: "Projets longs"
category: [2023-2024]
---

Vous trouverez ici la liste des projets longs de l'année scolaire 2023-2024.

[Modalités du projet long]({{ site.url }}/documents/projet_long_2023-2024.pdf)

# Goupes de projets longs 2023-2024

## G1 Édouard LEFIZELIER, Nathan MAILLET

Tuteur : à venir

**Side Chanel Attack sur un algorithme de chiffrement post-quantique**

Étude des Side Chanel Attack sur une implémentation d’un algorithme de chiffrement post-quantique. Pour cela, nous allons d'abord sélectionner un type de Side Channel à étudier (cache attack, timing attack, power supply attack).

Une étude préliminaire des crypto systèmes Kyber et HQC permettra de décider sur lequel nous allons réaliser notre étude.

## G2 Matthis RAVEAU, Célian DEBETHUNE, Kilian SOUAL

Tuteur : à venir

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

Tuteur : à venir

**Utilisation de l’IA pour repérer une divergence de code dans une trace side-channel**

- Les attaques physiques sur les produits sécurisés utilisent souvent des traces side-channel (consommation de courant, rayonnement électromagnétique, log de l’état du composant) pour analyser l’exécution d’un code.
- La rétroconception de cette exécution est importante pour comprendre à quel moment les données sensibles (ou utiles pour l’attaquant) sont manipulées ou à quel moment une opération critique (confirmation d’une condition d’accès, validation d’un PIN par exemple) est effectuée.
- Le projet consistera à partir de traces side-channel existantes d’essayer d’identifier un changement dans l’exécution de code et de repérer temporellement à quel endroit ce changement intervient.
- La faisabilité d’utiliser des algorithmes d’IA ainsi que la sélection de certains d’entre eux pour réaliser cette tâche sera l’un des résultats attendus du projet comme étape première.
- Un autre résultat serait de comparer l’efficacité en terme de rapidité et de consommation en ressource mémoire des algorithmes d’IA ou de réseaux de neurones retenus dans l’étape précédente 

Proposé par le Hardware Security Lab de Thales

## G4 Valérian BROUSSEAU, Michel OBERTI, Pierre RAINJONNEAU

Tuteur : à venir

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

Tuteur : à venir

**Rédaction, test et implémentation de challenges pour la Toulouse Hacking Convention**

(description exacte gardée confidentielle jusqu'à la THCon)

## G6 Bastien LEJARS, Nathan FOUCHER, Johann-Son LUPINSKI

Tuteur : à venir

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

## G7 Jonathan BONNEFOY, Léo BOUTEILLER

Tuteur : Julien Fasson

**Deux challenges pour l'édition 2024 de la THCon**

- challenge de reverse engineering qui nécessite a la fois de l'analyse statique et dynamique d'exécutable et de code Python.
- challenge de sécurité web et applicative avec des notions de cryptographie, de niveau débutant à intermédiaire.

(description exacte gardée confidentielle jusqu'à la THCon)

## G8 Alexandre TULLOT, Gabin FOUQUET

Tuteur : à venir

**Challenges d'exploitation de binaire pour la Toulouse Hacking Convention (THCon)**

La série de challenges portera sur la sécurisation d'un client et serveur mail.
Elle sera divisée en trois étapes:

- Exploitation du client mail.
- Exploitation du serveur.
- Escalade de privilèges à partir de l'exploitation du serveur à l'aide de l'exploitation du driver kernel.

## G9 Enguerrand PICCO, Axel METZINGER

Tuteur : à venir

**Challenges d'exploitation web pour la Toulouse Hacking Convention (THCon)**

Conception d'une série de challenges d'exploitation web pour l'édition de cette année de la THCon.
La série de challenges portera sur l'attaque d'un serveur web : 

- Exploitation du site pour gagner un accès initial
- Exploitation du serveur
- Élévation de privilèges

# Soutenances 11/03/2023

20 minutes de présentation, 10 minutes de question.

Jurés :

  * BM : Benoît Morgan
  * EA : Éric Alata
  * JCD : Jean-Christophe Deneuville
  * JF : Julien Fasson
  * LH : Ladislas Hajnal
  * PQ : Philippe Queinnec
  * VM : Vincent Migliore
  * VN : Vincent Nicomette

Enseignants anglais : à venir
 
### Jury 1 : Salle XXXX

| Heure | Groupe       | Tuteur                     | Jurés        |
|-------|--------------|----------------------------|--------------|
| 13:30 |              |                            |              |
| 14:05 |              |                            |              |
| 14:40 |              |                            |              |
| 15:15 |              |                            |              |
| 15:50 | délibération |                            |              |

### Jury 2 : Salle XXX

| Heure | Groupe       | Tuteur                     | Jurés        |
|-------|--------------|----------------------------|--------------|
| 13:30 |              |                            |              |
| 14:05 |              |                            |              |
| 14:40 |              |                            |              |
| 15:15 |              |                            |              |
| 15:50 | délibération |                            |              |

### Jury 3 : Salle XXX

| Heure | Groupe       | Tuteur                     | Jurés        |
|-------|--------------|----------------------------|--------------|
| 13:30 |              |                            |              |
| 14:05 |              |                            |              |
| 14:40 |              |                            |              |
| 15:15 |              |                            |              |
| 15:50 | délibération |                            |              |

