---
layout: post
title: "Projets longs"
category: [2021-2022]
---

Vous trouverez ici la liste des projets longs de l'année scolaire 2020-2021

Acronymes des encadrants :

- JF:  Julien Fasson
- JCD: Jean-Christophe Deneuville
- PHQ: PHilippe Queinnec
- EA:  Eric Alata
- VN:  Vincent Nicomette
- VM:  Vincent Migliore
- Lad: Ladislas Hajnal
- BM:  Benoit Morgan
- SBD: SomeBoDy

# Goupes de projets longs 2021-2022

## G1 Axel Grunig, Thomas Guillaud, Alexandre Briain

Tuteur : BM

Challenges THCON'22

### Description
Nous souhaitons faire, pour le projet long, des challenges pour la THC. Nous
voulons faire des challenges exploitant différentes vulnérabilités comme les
formats de chaînes de caractères, brute forcer un mot de passe par canal
auxiliaire (temps de vérification), des injections SQL, ...
Nous pensons également chaîner les challenges. Ainsi, pour avancer, le
challenger devra résoudre les challenges les uns après les autres. Les
challenges seront disposés de façon à ce que la difficulté soit croissante.


## G2 Maud Pennetier, Elies Tali, Damien Molina

Tuteur : VN

Développer un outil permettant d'analyser la sécurité d'un réseau et de proposer
des solutions aux vulnérabilités trouvées.

### Description

Notre outil comporterait plusieurs modes de fonctionnement :
- interne : on analyse le réseau depuis son intérieur (du point de vue du poste d'un employé par exemple)
- externe : on analyse le réseau depuis l'extérieur, en passant par les potentiels firewalls, etc.

Notre outil simulerait des attaques (DoS, contournement de règles
firewall, etc.) et fournirait en réponse un pourcentage de sécurité
(basé sur le nombre d'attaques qui sont passées), et proposerait les
solutions adéquates.

## G3 Rémi Bossuet, Arthur Zappa, Thomas Rollain

Tuteur : JF

Tests de pénétration IoT

### Description

Dans le cadre du projet long, nous souhaitons choisir un sujet qui pourrait nous
permettre de toucher un peu à tout dans le domaine de la sécurité offensive.
C’est pourquoi nous souhaitons mener des tests de pénétration sur un objet
connecté. Ces derniers offrent l’avantage d’avoir des prix accessibles et
d’avoir une sécurité relative. Les IoT sont également livrés avec une
application, ce qui pourrait nous permettre de toucher également à la sécurité
WEB / applicative.

## G4 Naoufel Benyahia, Justin Rossmann

Tuteur : PHQ

Étude de add-ons malveillants de programmes

### Description

Étude de add-ons malveillants de programmes (extensions de navigateurs, mods de
jeux, packs d'extensions de programme...), avec potentiellement la création
d'exemples. Le but est notamment d'évaluer la facilité d'utiliser des techniques
malveillantes (keyloggers, screenshots, collecte d'informations personnelles...)
une fois un tel add-on installé.

## G5 Dany Lau, Julien Le Page

Tuteur : JCD

Protection et Résilience aux attaques DDOS

### Description

Protection et Résilience aux attaques DDOS (Nous ferions dans un premier temps
une description des attaques DDOS puis un état des lieux sur les méthodes
utilisées par les grandes entreprises pour protéger de ce type d’attaque
afin de faire la différence entre du flux malveillant et du flux légitime à
l’air du tout internet. Nous souhaiterions ensuite mettre en place des tests
afin de classifier ces différentes méthodes de protection. Enfin, nous
aimerions mettre en place une partie sur la résilience à ce type d’attaque
abordant par exemple le FORENSIC, la reprise d’activités, etc..) 

Sujet alternatif: Etude de la vulnérabilité Log4Shell (Présentation Historique,
Impact de l’attaque, Explications de la vulnérabilité, Mise en place,
Contremesures/Protection)

## G6 Mathieu Dechambe

Tuteur : SBD

Développement du challenge SSTIC 2022

### Description

Edition 2021 : https://sstic.org/2021/challenge/

## G7 Gautier Ben aim, Alexis Carn

Tuteur : BM

Challenges THCON'22

### Description

Conception et développement de challenges pour le CTF de la THCon.

## G8 Rémy Laroudie, Grégoire Podda, Antony Dalmiere

Tuteur : Lad

Challenges THCON'22

### Description

Le sujet est un CTF à faire pour la THCOn, qui sera de niveau débutant
centré sur l'utilisation de metasploit.

## G9 Clément Chaine, Gabin Noblet, Béranger Quintana

Tuteur : VN

Sécurité de systèmes d'exploitation temps réel embarqués

### Description

Nous avons trouvé plusieurs candidats d'OS open-source où nous souhaiterions
trouver des vulnérabilités (mauvaise isolation des tâches, escalade de
privilèges, execution de code arbitraire, ...).

Dans l'ordre:

1. Prex
Un micro-noyau avec une surcouche POSIX permettant de faire tourner des tâches temps-réel à coté de tâches UNIX.
On peut l'émuler sur QEMU, pour des processeurs 32-bits ARM et x86.

2. ChibiOS
Un OS temps réel notamment utilisé sur des drônes. Il y a une certaine volonté de sécurité sur la mémoire.
On peut l'émuler sur QEMU ou l'utiliser sur un STM32. Compatible 32-bits ARM7, x86 et ARM Cortex-M3.

3. AdAstra
OS orienté embarqué (STM32) sans mention de sécurité sur leur site.

## G10 Johan Tirard, Charly Lezzani, Jean-Christophe Wahl

Tuteur : BM

Challenges de reverse engineering pour la THCon'22

### Description

Créer un ou plusieurs CrackMe en C qui serviront de challenge pour la THCon.


## G11 lexandre Gleize-Pons, Benoît Couderc, Benjamin Berthaud

Tuteur : VM

Challenge NFC pour la THCon'22

### Description

Support fourni :
- une carte NFC réinscriptible
- une application sous format APK

Matériel nécessaire :
- un smartphone Android (mode debugger activé) + connectivité internet
- un ordinateur avec decompiler
Infrastructure :
- Database (serveur SQL) + API

Détails du challenge :

- L'utilisation nominale de l'application consiste à lire un
identifiant contenu sur une carte NFC puis récupérer les données
associées à cet identifiant sur la DB à l'aide de l'API et les afficher
à l'utilisateur.

- L'objectif du hacker est d'écrire des données malveillantes sur la
carte NFC pour modifier la DB à l'aide de vulnérabilités présentes dans
l'application et dans l'API.

- Il faudra donc reverse l'application afin de comprendre son
fonctionnement et de déceler la faille dans la lecture de la carte NFC.

- L'objectif étant de modifier la base de données, il faudra alors
exploiter une faille de l'API via le précédent exploit.
Cordialement,

## G12 Clément Rivola, Thibault Poncetta, Romain Malmain

Tuteur : PHQ

Fonction de sécurité pour un Hyperviseur et un OS pour ARM en Rust.

### Description

Pour l'OS:

* Architecture type micro-kernel
* Memory Management (Sûrement un buddy allocator avec un sl{a,u,o}b allocator par dessus, un peu comme pour linux
* Driver MicroSD + FileSystem (sûrement quelque chose comme ext2)
* Process (syscalls notamment)
* Scheduler
* Une forme d'IPC
* Parser ELF
* ASLR (une source d'aléat sera donc nécessaire)
* Des syscalls qui permettent à l'utilisateur de faire de la sécurité (par exemple un syscall pour filtrer les syscalls, un truc proche de l'idée de Seccomp)
* Un système simple de DAC ou MAC
* Optionellement une pile réseau avec un petit firewell (il faudra donc un driver simple pour la carte réseau)

Pour l'Hyperviseur:

* Hyperviseur de type 1
* On ne sait pas encore si ça sera de la para-virtualisation ou pas
* Un antivirus simple pour protéger le kernel (détecter des signatures dangereuses par exemple)
* Avoir divers sanity checks (par exemple pour les tables de page du kernel)
* Implémenter des contre-mesures simples pour protéger le noyau de certains rootkit, sans aller trop loin

## G13 Baptiste Urben, Jean-Christophe Sanchez

Tuteur : EA

Développement d'un vers

### Description

L'objectif étant de s'intéresser à la partie propagation, autonomie,
non-détection plutôt qu'à la partie charge virale.

## Soutenances

Jurés :
  * EA : Éric Alata
  * PHQ : Philippe Queinnec Aït-Ameur
  * LH : Ladislas Hajnal
  * VM : Vincent Migliore
  * VN : Vincent Nicomette
  * BM : Benoît Morgan
  * RR : Raphael Rigo
  * JF : Julien Fasson
  * JCD : Jean-Christophe Deneuville

 Enseignants anglais :
  * BH : Ben Hanson
  * SR : Stephen Ryan
  * SM : Sean MacArdle
  
### 14/03/2022

## Jury 1 : Salle C002

|Heure|Groupe         |Tuteur stage    |Jurés  |
|-----|---------------------|----------------|-------|
|13:30|G1 |BM|BM, VM, BH|
|14:00|G16|RR|BM, VM, RR, BH|
|14:30|G7| BM |BM, VM, BH|
|15:00|G10 |BM|BM, BH|

## Jury 2 : Salle A201


|Heure|Groupe         |Tuteur stage    |Jurés  |
|-----|---------------------|----------------|-------|
|13:30|G8  |LAD|VN, LAD, SM|
|14:00|G2 |VN|VN, LAD, SM|
|14:30|G9 | VN |VN, LAD, SM|
|15:00|G11 |VM|VN, VM, SM|


## Jury 3 : Salle A302

|Heure|Groupe         |Tuteur stage    |Jurés  |
|-----|---------------------|----------------|-------|
|13:30|G3 | JF |PHQ, JF, SR|
|14:00|G4 |PHQ|PHQ, JF, SR|
|14:30|G12 |PHQ|PHQ,JF, SR|
|15:00|G13 |EA|PHQ, JF, EA, SR|
|15:30|G5 |JCD | PHQ, JF, JCD, SR|

## Version pdf : 
![Image Title](Planning_soutenance_PL_TLS_SEC_2022v2.pdf){width=65%}

