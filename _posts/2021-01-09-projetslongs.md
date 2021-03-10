---
layout: post
title: "Projets longs"
category: [2020-2021]
---

Vous trouverez ici la liste des projets longs de l'année scolaire 2020-2021

# Goupes de projets longs 2020-2021

## G1 Aboukora Ahmed, Bonnet Guillaume

Tuteur : Romain Cayre

Etudier les vulnérabilités du Bluetooth pour prendre le contrôle d'un bracelet
connecté.

### Description

Nous allons considérer le bluetooth comme surface de l'objet. On va
effectivement se servir le bluetooth pour réaliser une attaque sur la MiBand 3.

## G2 Tardy Mahé, Blenner Louis

Tuteur : Benoît Morgan

Exploration de vulnérabilités dans les jeux vidéo pour la triche et le
détournement de l'exécution.

### Description

Nous aimerions étudier la possibilité de tricher, modifier le jeu, voire de
faire de l'injection et exécution de code arbitraire à travers les contrôles du
jeu lui-même, en exploitant des vulnérabilités du code. À travers l'utilisation
d'outils (ceux des « tool assisted speedrun »:
[1]https://en.wikipedia.org/wiki/Tool-assisted_speedrun, qui permettent de
scripter les entrées utilisateur), il est notamment possible d'injecter du
code arbitraire dans des jeux et de déclencher son exécution. Par exemple, ce
tool assisted speedrun de super mario world complètement hallucinant qui permet
de terminer le jeu dès le premier niveau en jouant à pong et snake:
[2]https://www.youtube.com/watch?v=OPcV9uIY5i4 (en voici une liste d'autresJavornik Alexandre, Yu Tung Jin, Bigue-Colas Remy
exemples [3]http://tasvideos.org/Movies-C3050Y.html).

## G3 Sabras Sherwin, Rioux Guilhem

Tuteur : Benoît Morgan

Élaboration de challenges THC pour notre projet long, nous avons plusieurs idées

### Description

- Un challenge de bypass d'ASLR : faire leaker une adresse mémoire via une
vulnérabilité, puis faire l'exploitation (calculs d'offset)
- Un challenge de Stéganographie (à tiroir): cacher un exécutable
dans un fichier d'apparence inoffensive (par exemple un PDF avec le
mécanisme d'Ange Albertini)
- Un challenge de reverse : une application Android (idées à
détailler : chargement dynamique de code + Man in the Middle, etc) dans
laquelle est cachée un flag
- Challenge réseau : fichier pcap à analyser, contournement de pare-feu (couche
3/4 ou applicatif) ou d'IDS, trouver un mdp d'utilisateur non-privilégié,
puis élévation de privilèges (sudo)

## G4 Boulou Valentin, Thoby Simon, Vazquez Théo

Tuteur : Vincent Migliore

Tour d'horizon des vulnérabilités sur les processeurs modernes

### Description

Exemple d'objectifs souhaités :

* Présenter simplement (pour la première partie du moins) les mécanismes de
sécurités mis en place ces dernières années, et leurs limitations

* Discuter de la surface d'attaque d'un SoC moderne

* Parler de l'éventuelle fracture entre les implémentations matérielles et les
objectifs de sécurité des particuliers/entreprises

* Réaliser un PoC qui récupère des données sensibles (si possible: briser le
KASLR) en s'appuyant sur Spectre et Meltdown

* Parler des correctifs (logiciels par exemple) de ces vulnérabilités

## G5 Ariès Corentin, Garo-Sail Camille

Tuteur : Éric Alata

Exploitation de vulnérabilités d'objets connectés

### Description

## G6 Hemon Yoann, Lemistre Marius, Bosca Maxime

Tuteur : Éric Alata

Sécurisation d'une application simple de type Sender-Receiver pour l'envoi de
fichiers entre ordinateurs

### Description

Le but est de définir puis de mettre en place les meilleurs protocoles pour
assurer confidentialité, authentification et contrôle d'intégrité afin que les
deux appareils puissent communiquer de manière sécurisée. Plusieurs
ajouts/améliorations peuvent être considérés (envoi ou réception avec des
appareils Android également, fonction chat, envoi entre deux réseaux privés
distants, envoi à plusieurs appareils etc).

## G7 Dides Justin, Settai Yassine, Santos-da-silva Tiago

Tuteur : Vincent Migliore

Triche dans les jeux vidéos et sécurité

### Description

lancer sur un sujet de
projet long en rapport avec les cheats de jeux (aimbot, speedbot
etc...). On se demandait comment inclure un aspect sécu par rapport au
cheat et on se proposait donc de faire soit du reverse
soit de s'intéresser aux hardwares cheat (cheat dans les
périphériques). Du coup on propose ces deux exemples de sujets :
- Etude et reverse des techniques de cheat (Aimbot surement) et soit
proposer une autre implémentation, soit se pencher sur les
contre-mesures.
- Etude des hardwares cheat et essayer d'en implémenter un depuis une
Raspberry (ou autre) qui imiterai une souris USB par exemple.
Au départ on pensait essayer d'extraire un firmware d'hardware cheat et
le reverse mais comme c'est assez récent et complexe on a peur que ce
soit trop cadenassé, pas assez documenté et qu'on ait pas les
compétences en reverse ou le matériel nécessaire.
Vous en pensez quoi ? On a peur de faire du hors sujet si on ne se
consacre qu'aux aspects techniques de cheat et on hésite aussi à partir
sur les hardware cheat pour les raisons citées plus haut.

## G8 Michaud Aurélien, Timani Mario

Tuteur : Vincent Nicomette

Reverse-engineer des binaires des différents firmwares de vélos et trottinettes
électriques, afin de pouvoir les débrider

### Description

La législation européenne oblige les constructeurs des vélos et
trottinettes de logiciellement limiter leur vitesse à 20 km/h. On
souhaiterait évaluer la sécurité de ces différents firmwares afin de
pouvoir vérifier que cette limite pourra bien être respectée et que les
firmwares ne contiennent pas de bugs/vulnérabilités.

On a aussi réfléchi à un plan de backup dans le cas où on arrive pas à
trouver assez de firmwares de vélos et trottinettes open source. On
pourrait s’intéresser à la sécurité des firmwares des caméras de
surveillances qui sont réputées de contenir un grand nombre de
vulnérabilités.

## G9 Fache Rémi, Decourcelle Jean-Baptiste

Tuteur : Ladislas Hajnal

Élaboration d'un challenge pour la THC

### Description

## G10 Kinderf Julien, Guillard Thibault

Tuteur : Vincent Nicomette

Sécurité du protocole Bluetooth

### Description

Bluetooth. En effet son utilisation a transitionné du simple partage de
fichiers occasionnel à une utilisation quotidienne, que ce soit pour écouter
de la musique via des casques/écouteurs/enceintes connectés ou pour utiliser
de nombreux périphériques sans fil comme des souris ou des claviers.
- Quel est son fonctionnement général ?
- Quels mécanismes de sécurité sont implémentés ?
- Quelles attaques existent et que permettent-t-elles de faire ?

Et si il y a le temps :

- Le BLE met-il en place des mécanismes de sécurité ? Si oui, à quel point
peut-on leur faire confiance ?
- Tentative de mise en œuvre d'attaques connues, et réflexion sur les
contremesures possibles.

## G11 Alfredo Esmeralda, Doganis Dimitrios, Tarnagda Abdel

Tuteur : Cédric Lefebvre

Étude sur les moyens de détection d'un IDS (Suricata ou Snort) dans le cas
d'attaques dans un Cyber Range (environnement virtualisé (LXC, LXD, QEMU)
mettant en œuvre des expérimentations liées à la sécurité)

### Description

Étudier le fonctionnement de malwares nous aimerions intégrer l'étude et la
"mise en œuvre" d'un malware dans l'optique de le détecter et mitiger ses
conséquences.

# G12 Pelous Thomas, Nozahic Morvan, Erpeldinger Clarisse

Tuteur : Benoît Morgan

- Sujet 1 : Décompte de données sur forfait mobile
- Sujet 2 : Réalisation d'un honeypot pour analyse d'attaques en vogue

### Description

Nous
hésitons encore entre les deux sujets suivants, notamment pour des
raisons de faisabilité. Quel serait votre avis ?

- Sujet 1 : Décompte de données sur forfait mobile

L'idée part d'une attaque menée sur les réseaux Wi-Fi payants dans les aéroports
en faisant des requêtes DNS (non payantes) vers un serveur pirate. Le serveur
récupère la payload de la requête, crée une requête http vers un site web et
envoie une réponse DNS avec comme payload la réponse du site web.

Le but de ce projet est de généraliser cette attaque aux forfaits mobiles
pour voir s'il est possible de passer outre le décompte des données de
l'opérateur.

Dans un premier temps il s'agirait de lister les protocoles potentiellement
vulnérables et de faire de multiples requêtes pour savoir s'ils sont
exploitables. Si l'exploitation fonctionne, une dernière partie pourrait être
consacrée à la programmation d'une application équivalente à un proxy pour
toutes les connexions externes du téléphone ou encore à l'étude de l'extraction
de fichiers stockés sur un serveur.

- Sujet 2 : Réalisation d'un honeypot pour analyse d'attaques en vogue

Le but de ce projet serait de développer un honeypot avec pour objectif
d'analyser les différentes attaques qui se font en 2021. Nous pourrions par
exemple créer une DMZ (ou utiliser une raspberry pi en guise de firewall) sur
notre réseau privé et ouvrir certains flux qui nous intéresseraient pour
l'analyse de ces attaques.  La machine vulnérable serait une machine virtuelle.
Eric Alata nous avait expliqué avoir fait une thèse sur un projet similaire, ce
qui nous permettrait de comparer ses résultats avec les notres.

Nous avons quelques doutes sur ce projet à cause des risques que nous prendrions
sur nos machines ainsi que la faisabilité d'un pot de miel assez sophistiqué
pour pouvoir analyser ce qu'il se passe sur la VM.

# G13 Chatain Alexandre, Spilka-Georgeot Basile

Tuteur : Ladislas Hajnal

Élaboration de challenges pour la THC

### Description

Créer un petit jeu en 2D qui sera impossible à terminer. Le seul moyen de le
terminer étant de hacker le jeu. Le jeu aura plusieurs niveaux de difficulté qui
correspondront chacun à un nouveau challenge et demanderons des manœuvres plus
complexes pour avancer.

# G14 Ridwane Aissaoui, Knaff Lucas, Couvert Xavier

Tuteur : Jean-Christophe Deneuville

Chiffrement des signaux GPS en prévention du spoofing

### Description

Les systèmes de géolocalisation actuels diffèrent selon l'objet à localiser.
Dans l'aviation civile, le moyen de localisation primaire est la centrale de
navigation basée sur un complexe coeur inertiel. Les moyens de radionavigation
et le GPS s’ajoutent ensuite en support pour affiner le résultat. Lorsqu'on
parle de drones cependant, le GPS est le moyen primaire de localisation, leur
puces faisant office de centrale inertielle étant très efficace pour estimer les
mouvements à courte échelle de temps, mais perdant en précision avec la durée
d’un trajet et la distance parcourue.

Il est assez simple de générer des trames GPS cohérentes à l'aide d’une simple
antenne. On peut alors émuler les trames reçues à n'importe quel endroit sur
terre, et les transmettre à un drone en vol qui sans aucun système de
vérification va estimer sa position à la position choisie par un attaquant. Il
existe cependant des systèmes anti-fraude, qui vérifient la cohérence des trames
reçues par rapport aux trames précédentes (un saut de position de plusieurs
kilomètres par exemple) et lève une alerte.

# G15 Javornik Alexandre, Yu Tung Jin, Bigue-Colas Remy

Tuteur : TBD

Conception (et possible implémentation) sécurisée de l'architecture
informatique de la nouvelle voiture autonome de l'association TIM UPS
INSA

### Description

Le projet consisterait à concevoir le système informatique de la voiture
autonome en prenant en considération la sécurité dans toutes les
étapes:

- Sécurisation matérielle (Recherche des matérielles les plus adaptes
(besoins + sécurité))

- Sécurisation du ROS (Robot Operating System): ROS est le système open
source que le TIM veut utiliser pour implémenter les différents
algorithmes de la voiture autonome car c'est un système très pratique et
compréhensible, cependant ROS n'a pas de mesures de sécurisé par
défaut, donc un des objectifs consistera à voir quelles sont les
vulnérabilises les plus importantes de ce système et comment on peut
l'améliorer.

- Sécurisation Réseau:  La voiture autonome sera connectée a un serveur
en utilisant une Raspberry Pi (pour les systèmes de télémétrie et
télécommande). Il faudra concevoir une architecture adaptée au haut
débit et la rapidité des données transmises qui est bien sécurisée
afin d'éviter des possibles intrusions et attaques.

C'est un projet assez grand, donc on considère qu'un groupe de 3 personnes
est justifié. Plus précisément, Remy, Jin Yu et moi.


## Soutenances

Jurés :
  * EA : Éric Alata
  * YAA : Yamine Aït-Ameur
  * LH : Ladislas Hajnal
  * VM : Vincent Migliore
  * VN : Vincent Nicomette
  * BM : Benoît Morgan
  * CL : Cédric Lefèbvre
  * RC : Romain Cayre
  * JCD : Jean-Christophe Deneuville

Enseignants anglais :
  * EN : Emma Nelson
  * SR : Stephen Ryan
  * GC : Genevieve Casey

### 15/03/2021

## Jury 1 - Zoom : https://inp-toulouse-fr.zoom.us/j/96198551445?pwd=QU9mNE11c2RBTXE2aS9BOW55VkFKdz09

|Heure|Groupe         |Tuteur stage    |Jurés  |
|-----|---------------------|----------------|-------|
|9:00|G1 (Aboukora Ahmed, Bonnet Guillaume) |RC|VN, YAA, EN, RC|
|9:30|G10 (Kinderf Julien, Guillard Thibault, Gabrielle Garnier)|RC|VN, YAA, EN, RC|
|10:00|G8 (Michaud Aurélien, Timani Mario)| VN |VN, YAA|
|10:30|G11 (Alfredo Esmeralda, Doganis Dimitrios, Tarnagda Abdel)|CL|VN, YAA, EN, CL|
|11:00|G15 (Javornik Alexandre, Yu Tung Jin, Bigue-Colas Remy)|VN|VN, YAA,EN|


## Jury 2 - Zoom : https://us02web.zoom.us/j/4275104794?pwd=N1pwV3VsTnZGTTZURmpYa1ZjWW9EZz09

|Heure|Groupe         |Tuteur stage    |Jurés  |
|-----|---------------------|----------------|-------|
|9:00|G2 (Tardy Mahé, Blenner Louis) |BM|EA, BM, SR|
|9:30|G3 (Sabras Sherwin, Rioux Guilhem)|BM|EA, BM, RC|
|10:00|G5 (Ariès Corentin, Garo-Sail Camille)| EA |EA, BM, SR|
|10:30|G6 (Hemon Yoann, Lemistre Marius, Bosca Maxime)|EA|EA, BM, SR|
|11:00|G12 (Pelous Thomas, Nozahic Morvan, Erpeldinger Clarisse)|BM|EA, BM, SR|


## Jury 3 - Zoom : https://zoom.us/j/98404054554?pwd=LzUxdTZyRDM1OTR0a3UvKzBBaUNJZz09

|Heure|Groupe         |Tuteur stage    |Jurés  |
|-----|---------------------|----------------|-------|
|9:00|G9 (Fache Rémi, Decourcelle Jean-Baptiste)| LH |VM, LH, GC|
|9:30|G7 (Dides Justin, Settai Yassine, Santos-da-silva Tiago)|VM|VM,LH,GC|
|10:00|G4 (Boulou Valentin, Thoby Simon, Vazquez Théo) |VM|VM, LH, GC|
|10:30|G13 (Chatain Alexandre, Spilka-Georgeot Basile)|LH|VM, LH, GC|
|11:00|G14 (Ridwane Aissaoui, Knaff Lucas, Couvert Xavier)|JCD|VM, LH, GC|
