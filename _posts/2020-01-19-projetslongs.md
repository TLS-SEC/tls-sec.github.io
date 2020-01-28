---
layout: post
title: "Projets longs"
category: [2019-2020]
---

Vous trouverez ici la liste des projets longs de l'année scolaire 2019-2020

# Goupes de projets longs 2019-2020

Liste non validée

## G1 : Thomas Hugueville, Yohan Chenebault

Tuteur : Vincent Migliore

Backdoor dans la génération de clés cryptographiques (kleptographie)

### Description

Bonsoir,

Voici ma proposition de sujet pour le projet long.

Backdoor dans la génération de clés cryptographiques (kleptographie)

- Créer un générateur de clés (par ex. RSA) possédant une backdoor

- S'il y a le temps, créer un virus pouvant infecter un exécutable
(ssh-keygen) avec une backdoor.

Cordialement,
Yohan Chenebault

## G2 : François Conzelmann, Adam Boinet

Tuteur : Benoît Morgan

Évaluation des sécurités DRM mises en place sur les sites de streaming

### Description

Le but de ce projet est de voir les différentes méthodes de protection
et de chiffrement et leur bonne mise en place sur différent plateforme.
De voir les compromis fait entre sécurité et performance, l'utilisation
de widevine ou de protection propriétaire.
Il est possible de nous inspirer du travail d'un chercheur britannique
[1].
Le binôme sera constitué de moi-même et d'Adam Boinet

Références

1. https://twitter.com/David3141593/status/1080606827384131590

## G3 : Nicolas Vial, Guillaume Muh

Tuteur : Ladislas Hajnal

### Description

L'idée générale serait la création d'un outil de détection de problèmes com
muns de sécurité dans un réseau informatique. Cet outil serait une
alternative à un audit technique complet (de type pentest). En effet ce type de
prestation est très onéreuse et est la plupart du temps inaccessible aux
PME, notre solution viserait donc à essayer de rendre plus accessible et
compréhensible les précautions de sécurité sur un réseau d'entreprise.

Cet outil permettrait de détecter les failles les plus courantes et
dangereuses, tout en se concentrant sur l'essentiel. On pourrait donc imaginer
un outil qui scanne, sniffe et analyse le réseau à la recherche de protocoles
non sécurisés, de connexions inhabituelles ou de failles communes dans le but
de rendre un rapport clair et le plus compréhensible possible à la personne
concernée.

Cet outil pourrait aussi intégrer une partie "active" et être utilisé comme
un IPS ou un IDS et ainsi prendre des mesures contre l'attaque ou notifier
l'administrateur dès qu'une action malveillante est détectée au sein du
réseau.

## G4 : Adrien Le Roho, Florian Durant, Thierry Ropp

Tuteur : Cédric Lefebvre

Notre première idée était d'observer et de comprendre le fonctionnement des
badges ENAC.

Réaliser un système de relais des données de la carte entre deux
téléphones

### Description

Notre première idée était d'observer et de comprendre le fonctionnement des
badges ENAC. Ils disposent de quatre fonctionnalités : l'accès au campus,
l'ouverture des salles de classes, l'accès à la chambre étudiante de
l'élève et enfin toute la partie restauration. Cette dernière partie
étant sûrement plus complexe lié à la présence d'un système de payement,
notre objectif est de s'octroyer des accès privilégiés aux trois autres «
zones » dans un premier temps puis finalement de regarder la partie
restauration s'il nous reste du temps.  En parallèle nous souhaiterions
aussi réaliser un système de relais des données de la carte entre deux
téléphones, l'un collé au badge et l'autre collé au terminal (cf. figure
ci-dessous avec un badge au lieu

## G5 : Eva Soussi, Paul Gaillard

Tuteur : Éric Alata

Étudier la sécurité des systèmes de vélo/scooter Indigo

### Description

1 Contexte

Nous avons pu remarquer ces dernières années les vélos et scooter Indigo
déployés dans tout Toulouse. Ces vélos et scooter sont en libre service. Ils
peuvent être utilisés dans une zone géographique précise (centre de
Toulouse). Ils peuvent être récupérés et déposés n'importe o`u dans
cette zone. L'application Indigo weel permet de localiser, réserver et
débloquer les véhicules. Par l'application il est également possible de
réaliser plusieurs actions basiques telles que la création de compte ou le
paiement des trajets. Un vélo peut être débloqué en scannant un QR code
présent sur le véhicule.

2 Travail envisagé

Nous allons étudier la sécurité des systèmes de vélo/scooter Indigo. On
analysera la sécurité d'Indigo Weel disponible sur mobiles : Reverse de
l'application pour étudier son fonctionnement, les protocoles utilisés pour
communiquer, les méthodes de chiffrement et d'authentification ... Nous
testerons les cas limites d'utilisation. Par exemple, est qu'avec un jamming du
signal radio et GPS autour du vélo, peut-on réussir à sortir ce vélo de sa
zone ? Nous pouvons également analyser les messages re¸cus par le vélo,
notamment lors du déblocage afin de voir si le vélo peut être débloqué
en spoofant le signal. Nous pensons accentuer nos recherches sur les
vélos dans un premier temps

## G6 : Alexandre Tanem, Jonathan Amrine

Tuteur : Éric Alata

Étudier la sécurité des postes autoradios. Notre vecteur

### Description

Nous souhaitons étudier la sécurité des postes autoradios. Notre vecteur
d'attaque serait la radio FM, plus particulièrement le RDS (Radio Data System)
et ses fonctionnalités :
- Le radio-texte (Affichage du nom de la station, du programme ...) et RT+
- TMC (Traffic Message Channel)
- AF : Alternative Frequency
- ...
Il pourra aussi être intéressant d'étudier les normes DAB. DAB+ est obligatoire
dans les équipements à partir du 21 décembre 2019 en France.
Plusieurs approches pourront être étudiées :
- Implémentation des protocoles
- Sur radio logicielle
- Et/ou sur Raspberry Pi (projet PiFmRds)
- Fuzzer radio
- Reverse-engineering du firmware d'un autoradio
- Dump de firmware
- A partir de fichiers de mise à jour
Ouverture : est-ce qu'un autoradio compromis peut faire des choses intéressantes
sur le bus CAN de la voiture ?

### Description

1. Introduction

Ces dernières années, les botnets sont devenus l'une des principales menaces à
la sécurité de l'information. En effet, ces derniers sont en constantes
évolutions et deviennent de plus en plus sophistiqués. Un certain nombre de
mesures de détection ont été proposé et implémenté, telles que celles basées sur
Honeynet ou encore celles basées sur des systèmes de détection d'intrusions
(IDS). Une autre approche a été avancé ces dernières années qui utilise les
techniques d'apprentissage automatique avec un modèle de detection basé sur les
requetes DNS.

2. Objetctif

Réalisation d'un IDS capable de détecter, au sein du réseau observé, la possi
ble présence d'un botnet ou d'un CC serveur en utilisant les techniques
d'apprentissage automatique avec un modèle de détection basé sur les requetes
DNS. La création d'un émulateur émulant le comportement des botnets récents sera
réalisé en parallèle.

## G7 : Omar Anser, Yacine Anser

Tuteur : Vincent Nicomette

La détection de botnet à l'aide de techniques d'apprentissage automatique se
basant sur des données de requête DNS

1. Introduction

Ces dernières années, les botnets sont devenus l'une des principales menaces à
la sécurité de l'information. En effet, ces derniers sont en constantes
évolutions et deviennent de plus en plus sophistiqués. Un certain nombre de
mesures de détection ont été proposé et implémenté, telles que celles basées sur
Honeynet ou encore celles basées sur des systèmes de détection d'intrusions
(IDS). Une autre approche a été avancé ces dernières années qui utilise les
techniques d'apprentissage automatique avec un modèle de detection basé sur les
requetes DNS.

2. Objetctif

Réalisation d'un IDS capable de détecter, au sein du réseau observé, la possi
ble présence d'un botnet ou d'un CC serveur en utilisant les techniques
d'apprentissage automatique avec un modèle de détection basé sur les requetes
DNS. La création d'un émulateur émulant le comportement des botnets récents sera
réalisé en parallèle.

## G8 : Valentin Cayrou, Mael Galliot

Tuteur : Vincent Migliore

Dispositif de contrôle d'accès physique VIGIK

### Description

Voici la description du sujet que nous proposons :

VIGIK est un dispositif de contrôle d'accès physique utilisé
principalement pour la sécurisation de logements. Le système VIGIK
repose sur un badge électronique sans contact, de type Mifare,
permettant aux locataires, propriétaires, mais aussi aux professionnels
(La Poste, EDF, opérateur, pompier, ...) de pouvoir rentrer dans un
bâtiment sur une période de temps pouvant être limitée.

Il se base sur un système de chargement de clé privée RSA sur le badge
à validitée limitée permettant de déverrouiller les accès préalablement
choisis. En 2014, VIGIK à fait l'objet d'une conférence au Hackito Ergo
Sum 2014 qui détaille les vulnérabilités potentielles de ce système
(faiblesse de chiffrement, possibilité de duplication,...).

L'objectif est donc de voir si les vulnérabilités sont existantes, et
si oui quel est leur niveau de criticité.

Cordialement

Valentin CAYROU

## G9 : Benjamin Bigey, Célia Prat

Tuteur : Benoît Morgan

Quelles méthodologies
pour comprendre les mécanismes de shadowban présents sur reddit ?

### Description

Voici le descriptif pour notre projet long :

Projet de recherche sur la transparence algorithmique : QUELLES MÉTHODOLOGIES
POUR COMPRENDRE LES MÉCANISMES DE SHADOWBAN PRÉSENTS SUR REDDIT ?

Les utilisateurs de Reddit constatent un phénomène de shadowbanning : des
publications/commentaires sont retirés ou rendus invisibles aux autres
utilisateurs sans notification à l'auteur. Le but de ce projet est de développer
des démarches rigoureuses permettant de

* prouver l'existence du phénomène

* tirer des conclusions claires sur les facteurs impliqués dans le shadowban, et
de développer des proof-of-concept pour ces méthodes.

Nous avons plusieurs pistes
d'exploration :

* Y a-t-il une politique officielle explicitée par
la plateforme concernant le shadowban ?

* Se pencher sur les bots existants sur Reddit (r/AmIShadowBaned,
u/MarkdownShadowBan...) pour comprendre
leur fonctionnement, savoir quelles informations il permettent de collecter et
quelles conclusions ils permettent de tirer.  On pourrait faire un comparatif
entre les bots existants et proposer des pistes d'amélioration

* Cartographier/crawler Reddit de manière à repérer une dysmétrie de
l'information

* Trouver un protocole pour
identifier clairement une distinction entre un shadowban "fait-main" par
les modérateurs de channels et un shadowban algorithmique/automatisé par
la plateforme

* Voir s'il y a une corrélation entre l'activité des
utilisateurs avec le shadowban d'un autre (exemple : si 1000
utilisateurs bloquent un utilisateur, alors celui-ci est-il shadowbanned
?)

* Étudier la répartition des profils shadobanned : est-ce que
certaines populations sur des channels spécifiques se font shadowban
plus fréquemment ?

* Tester les conclusions tirées en se faisant
shadowban volontairement, ou identifier de nouveaux mécanismes ainsi que
la frontière en se faisant shadowban volontairement


* Mettre en place
un scénario d'attaque à la disponibilité en exploitant les mécanismes du
shadowban : peut-on volontairement causer le shadowban d'un utilisateur victime
sur une plateforme donnée ?

Benjamin BIGEY
Célia PRAT

## G10 : Paul Florence, Lucien Menassol

Tuteur : Vincent Nicomette

Développement de modifications de jeux malveillantes

### Description

Voici la description du sujet sur lequel nous souhaiterions travailler pour le
projet long :

Les jeux vidéos exposent de plus en plus souvent une API permettant
à des amateurs de venir modifier le jeu, afin de rajouter du contenu
et des fonctionnalités. On appelle ces modifications des mods.

Un mod est installable de plusieurs façons :

* sur Steam (la plateforme de jeu vidéo la plus répandue) le Steam
Workshop permet d'installer un mod en un seul clic
* sur certains jeux, il faut passer par une interface dédiée et
décompresser une archive dans un dossier spécifique
* enfin, sur d'autres il faut passer par des outils dédiés et
utiliser des header fourni par le studio, c'est plus compliqué

L'utilisation des mods comme vecteur d'attaque semble donc
prometteuse du fait de la facilité d'installation.

On souhaiterait donc étudier comme exploiter les APIs de modding,
afin de compromettre une machine. Dans un second temps nous
regarderions les mécanismes de défense possibles. On se propose
aussi de produire des guidelines à suivre par les développeurs de
jeux vidéos afin de proposer une interface respectant les bonnes
pratiques de sécurité.

D'un point de vue technique, de nombreux jeux offrent une interface
de programmation via un langage de scripting généraliste (LUA,
python) ou créé pour l'occasion.

Par exemple, dans le cas du LUA, le code est exécuté dans la machine
virtuelle LUA, on essayera donc de sortir de cette """VM""", en
ciblant notamment l'interface exposée par le jeu.

Le groupe est composé de Paul FLORENCE et de Lucien MENASSOL.

Que pensez-vous de ce sujet ?

Paul

## G11 : Olivier Rocher, Jean Tachon, Auriane Dubois

Tuteur : Éric Alata

Mise en place d'un outil possible de réponse après la détection d'une intrusion
en cours sur un réseau

### Description

1 Contexte

Ce sujet se propose de mettre en place un outil possible de réponse après la
détection d'une intrusion en cours sur un réseau.

2 Déploiement du HoneyPot

Une fois la compromission découverte, la connexion intruse détectée est
redirigée vers un serveur de type HoneyPot reprenant les paramètres identiques
au réseau compromis. En première approche, le choix de la bascule ou non d'une
connexion vers le HoneyPot sera assuré manuellement par un opérateur humain.

3 Première étape

L'objectif dans un premier temps est d'analyser l'ensemble des commandes
envoyées par l'intrus afin de découvrir les éventuels programmes tiers déposés
par ses soins lors des précédentes visites afin de découvrir leur fonctionnement
et leur localisation. Il s'agit également d'étudier les attaques menées, et les
vulnérabilités exploitées, sans pour autant compromettre plus que nécessaire le
réseau de référence.

4 Deuxième étape (optionnel)

Dans un deuxième temps, l'analyse des moyens utilisés (modes d'attaques,
habitudes de frappes capturées, etc), doit permettre d'alimenter une base de
données à fin de préparer un profilage de l'attaquant.

## G12 : Rémi Gascou, Jérome Kompé Mampianinazakason

Tuteur : Vincent Nicomette

Développement d'un CTF d'introduction aux CTFs

### Description

1 Introduction

Nous souhaiterions développer un CTF d'introduction aux CTFs. En effet, à
l'entrée de TLSSEC comme en 4ème année INSA, beaucoup d'étudiants n'ont jamais
participé à des Capture The Flag (CTF). Ce CTF pourrait être un très bon élément
pour permettre aux étudiants d'apprendre les méthodes utiles en CTF, ainsi que
les outils les plus fréquents.

Nous souhaitons créer des challenges dans les catégories suivantes :
- Web (Côté client, côté serveur)
- Réseau
- Forensics
- Système
- Cryptographie

2 Nos objectifs

- Développer un large panel de challenges pour couvrir le plus de domaines
possibles en sécurité
informatique.
- Fournir des challenges de tous niveaux.
- Détailler la correction de chaque challenge afin de permettre aux étudiants
d'apprendre des
techniques et méthodes utiles en CTF.

## G13 : Jean-Baptiste PAUX, Baptiste Verstraeten

Tuteur : Vincent Migliore

Etude des mécanismes de sécurité et d'isolement des containeurs Docker

### Description

L'étude concerne les mécanismes de sécurités utilisées par Docker pour protéger
la machine hôte des conteneurs Docker. On pourra se poser la problématique
suivante : Est-il sans risque pour sa machine de lancer une image inconnue
trouvé sur le net ?
L'étude portera sur le fonctionnement des Namespaces et les protections
apportées par le module noyau SELinux. Nous chercherons à savoir si les bonnes
pratiques recommandées par Docker +sont suffisantes pour garantir une
utilisation sans risque de l'application.  En fin, nous essaierons d'élaborer un
POC pour illustrer d'éventuelles vulnérabilités.

Ressources :
https://opensource.com/business/14/7/docker-security-selinux

## G14 : Augustin Matter, Jean-François Giraud

Tuteur : Benoît Morgan

Étude de la sécurité des protocoles de positi onnement par satellites (GPS,
    Galileo) et proposition de défense.

### Description

Travail à réaliser :
- Étude du protocole.
- État des lieux des attaques existantes et des mesures de sécurité mises en
place.
- Mise en oeuvre d'une attaque comme exemple.
- Proposition de contre‐mesures.

## G15 : Roman Suchwalko, Clément Amic, Yassine Bargach

Tuteur : Ladislas Hajnal

Études de vulnérabilités utilisée pour rooter les smartphones Apple

### Description

En septembre 2019, le chercheur axi0mX a publié une vulnérabilité impactant le
SecureRom des iPhones 4S (puce A5) aux iPhones X (puce A11), qu'il a découvert
en observant les modifications qu'Apple a effectuées lors d'une mise à jour
d'iBoot censée corriger cette faille pour la nouvelle puce. L'exploitation d'une
chaîne de vulnérabilités au démarrage de ces versions d'iPhones permet de
jailbreaker (prendre le contrôle du système en s'affranchissant des restrictions
logiciel d'Apple) efficacement le téléphone. Du fait que cette exploitation
s'appuie sur un défaut hardware, il n'est pas possible pour Apple de patcher la
vulnérabilité au moyen de correctifs software. Dans un premier temps, nous
comparerons les SecureRom des versions vulnérables et non vulnérables afin de
poser un état de l'art des vulnérabilités connues du système de démarrage de
l'OS des iPhones. Dans un second temps, nous étudierons la chaîne de
vulnérabilité checkm8 (race condition, use-after-free, ...) et tenterons de
reproduire l'exploit sur un téléphone de test en utilisant checkra1n, l'outil
automatisé de jailbreak exploitant ces vulnérabilités, puis en testant
directement d'injecter nos payloads. Enfin nous nous attacherons à montrer
comment Apple a sécurisé le SecureRom dans les puces de nouvelle version, et
quelles techniques sont mises en place afin de rendre (quasi?)impossible tout
jailbreak.

