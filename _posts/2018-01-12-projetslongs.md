---
layout: post
title: "Projets longs"
---

# Goupes de projets longs 2018-2019

Liste pour validation

## 1. Mehrad Rafii, Vincent Duchamp
Exploitation de vulnérabilités de PRNG / fonctions cryptographiques dans un jeu
vidéo

### Description

Notre première idée était de générer des événements aléatoires à l'aide d'un
simple LFSR. Ainsi, en utilisant l'algorithme de Berlekamp-Massey, un joueur
pourrait tricher en retrouvant l'état interne du LFSR et en prévoyant toutes les
valeurs suivantes produites.

Nous pensons que cela permettrait de faire une présentation ludique et abordable
pour des non-initiés (on aurait à expliquer le fonctionnement d'un LFSR et la
récupération de l'état interne avec l'algorithme). Mais on se demandait si
cela n'est pas trop simpliste d'un point de vue sécurité / cryptographie : qu'en
pensez-vous ? Nous avons aussi pensé à inclure une autre exploitation, d'une
fonction cryptographique par exemple, mais nous n'avons pas encore trouvé
laquelle et comment l'utiliser pour l'instant.

Enfin, nous pensions développer le jeu en Python avec la bibliothèque Pygame.

### Retours équipe pédagogique

#### Vincent Migliore

une idée qui m'a traversé l'esprit : un exemple qui serait bien parlant serait
de partir d'un jeu de casino, et montrer que le jeu semble basé sur des
évènements aléatoires et non predictibles, hors un des joueurs (qui ferait par
exemple partie des concepteurs du jeu) est capable de tricher. Ceci est 100%
faisable car il existe des PRNG qui statistiquement passent les tests mais sont
en fait cassables (Cf. le TP que l'on a fait sur le Mersenne twister).

Cela ferait une bonne démonstration qu'il faut se mefier de l'aléatoire, que ce
soit en cryptographie que dans d'autres domaines qui utilisent l'aléatoire.

## 2. Nicolas Roels
Obtention d'un accès non autorisé à un réseau local : compromission et
fuite d'informations

### Description

Un particulier, féru de nouvelles technologies, a décidé de faire un NAS avec un
Raspberry Pi.  Il a pris le premier tutoriel sur internet et ne s'est pas soucié
de la sécurité. Le NAS est connecté chez lui sur sa box ; accessible n'importe
où en SSH, peut etre Web?  Un collègue de bureau qui ne l'apprécie guère va user
de social engineering pour créer un dictionnaire personnalisé de mots de passe,
pour obtenir l'accès SSH au NAS Il peut alors récupérer tout le contenu du
NAS; de plus, il a désormais accès au réseau local et peut effectuer une
recherche d'éléments du réseau, et par exemple trouver une caméra connectée,
non/faiblement sécurisée, qu'il essaiera de corrompre, toujours dans le but
de nuire.

### Retours équipe pédagogique

#### Vincent Nicomette

Il faudrait l'orienter sécurité IOT et domicile connecté et ca peut être intéressant.
En revanche, pas de binôme pour ce sujet ?

## 3. Clémence Roulin, Jean Verrons
Stéganographie de format de fichiers

### Description

Initialemenet malwares PDF, puis après discussion stéganographie.

### Retours équipe pédagogique

#### Benoît Morgan

Vous avez en effet deux sujets qui peuvent faire un projet long
individuellement :

* Le premier fait partie de la stéganographie. On "cache" un format de fichier
  en lui faisant prendre la forme d'un autre, qui sera autorisé par un IPS par
  exemple.
  ex: https://en.wikipedia.org/wiki/OpenPuff

* Le deuxième est spécifique aux programme qui interprètent des formats de
  fichiers qui ne sont pas nécessairement stéganographiés.
  Le malware gendarmerie nationale dont je vous ai parlé (PDF malveillant).

Vous pouvez choisir l'un des deux.

## 4. Elouan Appéré, Benjamin Voisin-Grall
la sécurité du processus de Boot dans les environnements embarqués et/ou mobiles
(smartphones, consoles de jeux, etc.)

### Description

Nous étudierons les concepts nécessaires à l'établissement de secure bootchains
et l'utilité de ces dernières: bootROM, signatures, protection contre le
glitching, etc.

Nous montrerons ensuite différentes failles de secure bootchains afin de les
exploiter dans un tutoriel.

Exemples de support :
* Nintendo 3DS ou Switch
* Smartphones anciens (Samsung Galaxy old school)

### Retours équipe pédagogique

#### Benoît Morgan

Je lui ai dit que je trouvais ça cool et de contacter les anciens étudiants de
Quarkslab si il en connais.

## 5. Alexa Noel, Hugo Ros
Mini CTF avec des vulnérabilités webs client/serveur

### Description

Ce serait un chemin définit (par exemple, XSS pour se login sur le site, puis un
chemin dans le site pour trouver des pages cachées puis le flag)

### Retours équipe pédagogique

Néant.

## 6. Thomas Chamelot, Benjamin Blum, Côme Ruffel
DPA AES sur FPGA

### Description

Néant (titre parlant).

### Retours équipe pédagogique

#### Vincent Migliore

Apport d'un sujet sur le DPA.

## 7. Ismaël Mohamadou Kaka, Rodrigue Leleivai, Florent GALTIER
Créer un NIDS pour un réseau domestique OU Faire une démonstration d’un IMSI
Catcher

### Description

* créer un NIDS pour un réseau domestique. En effet, le réseau
  domestique est souvent protégé par un pare-feu mis en place par le
  FAI au niveau de la BOX et les antivirus, antimalware et autres au
  niveau des postes clients. Nous voulons proposer une solution de
  type IDS à bas coût à l’aide d’un raspberry Pi. Nous prévoyons
  également d'éprouver notre dispositif avec des attaques (types
  botnets par exemple).
* faire une démonstration d’un IMSI Catcher. Nous souhaitons
  construire un IMSI Catcher à l’aide d’une raspberry Pi et montrer
  les failles de sécurité du réseau GSM.

Si Mr NICOMETTE peut nous obtenir le matériel d’émission radio pour simuler une
BTS, nous opterions donc pour le sujet IMSI Catcher.

Le premier objectif est de mener une attaque de type spoofing (sans casser la
crypto A5/1, en utilisant le rejeu) grâce au IMSI Catcher. En effet, en GSM
l’authentification est unilatérale (seul le terminal s’authentifie).

Selon l’avancement, on souhaiterait ensuite travailler sur l’attaque du système
de crypto d’authentification A5/1.

### Retours équipe pédagogique

#### Benoît Morgan

Tout d'abord je n'y connais rien GSM. Ensuite, il faut s'assurer de pouvoir
mettre en place une infrasctructure de téléphonie mobile réaliste : équipements;
faisabilité; etc.

## 8. Maxime Belmon, Anja Olsen
Architecture générique minimale de sécurité domestique en mode tuto

### Description
Le but est de proposer une architecture simple pour un réseau domestique
permettant de garantir un certain niveau de sécurité à moindre coût et de
maitriser ses équipements réseaux.

Nous pensions effectivement à une certaine architecture générique minimale (en
ajoutant notamment une raspberry pi ayant le rôle d'un équipement de
sécurité). Et on pensait également à identifier des objets que l'on peut
retrouver dans un réseau domestique et essayer de voir comment les protéger d'un
point de vue tentative d'intrusion externe (ex : accès à un serveur/NAS sur le
réseau domestique) et d'un point de vue interne (ex : bloquer l'accès
internet à une caméra IP).  Je pense qu'on retrouve donc effectivement les
points que vous avez identifiés.

Pour l'aspect tutoriel on pensait plus à une optique atelier avec une démo
interactive afin d'expliquer la configuration du réseau et ce qu'elle permet de
faire. Avec la création de scripts documentés pour ceux qui voudraient
reproduire la même architecture. Mais l'idée de la liste de recommandations peut
également être une bonne idée de document à produire car elle offre une approche
plus visuelle et synthétique en ouvrant la porte à plus d'évolutions par rapport
à l'architecture de base.

### Retours équipe pédagogique

Néant.

## 9. Mathilde Piqueras, Eloise Riviere
Stegomalwares appliqués aux botnets

### Description
Selon le temps, nous pensions créer un botnet grâce à un ou des stegomalwares
(application Android, image…) et/ou gérer ce botnet en lui envoyant des
commandes cachées avec de la stéganographie.

### Retours équipe pédagogique

#### Benoît Morgan

Ceci est une très bonne idée. En outre, il m'est déontoligiquement obligé de
vous contraindre à ne pas publier le / les malwares développés en envorinneme nt
de production (apple / google play)

En outre, pour démontrer que votre malwware n'est pas détecté par les analyses
de malware automatiques. Vous pouvez peut-etre en publier un que vous
n'activerez pas, pour prouver votre concept.

Par contre si j'ai bien compris, elle ont une partie de leur démonstration dont
l'intérer est de passer les tests de sécurité des différentes sandbox et autres
outils de détection de malware des plateformes de publication d'application
mobiles (Google play, Apple store).

Peuvent-elles monter leur "botnet" avec des téléphones prétés par les équipes
pédagogqies pour la partie démonstration des attaque et là on peut se passer des
infra google et apple.

Pour ce qui est de la furtivité, elle peuvent uploader l'application avec
succes, mais ne jamais utiliser la charger malveillante ? Ou est-ce que
déontologiquement on est trop limite ?

## 10. Nicolas Dureisseix, Clément Chochoy
Escalade de privilèges virtualisation

### Description

L'idée est de faire une démo/tuto sur comment devenir root sur une machine hôte
à partir de droits user sur une VM virtualbox.Pour cela, on souhaite combiner 3
vulnerabilités qui nous permettrait une élévation de privilèges différente :

* de user à root sur la VM (CVE-2017-3316 par exemple, ou autre vuln)
* de root sur la VM à user du l'host (Vulnérabilité principale sortie en
novembre 2018 : CVE 2018-3295)
* de user sur l'host à root sur l'host depuis la VM (CVE 2017-3561 par exemple,
ou autre vuln)

### Retours équipe pédagogique

Néant.

## 11. Kevyn Ledieu, Ferréol Pennel, Alexis Pernot
Détournement de drones de loisirs par différents moyens (spoofing GPS, Wifi...)

### Description

Néant.

### Retours équipe pédagogique

Néant.

## 12. Antoine Vacher, Florent Fayollas
Le seigneur des drones - Un drone pour les gouverner tous

### Description

En ayant recherché des exemples d'exploitation déjà existants, nous
avons constaté qu'il existe au moins 2 méthodes de prise de contrôle à
distance. Ces attaques ont été effectuées sur les drones suivants:
Parrot AR.Drone 2 [1] et Syma X5C [2]. Le premier est contrôlé en WiFi
et le second en RF 2.4GHz.

L'objectif du projet serait d'embarquer sur un premier drone un
Rapsberry Pi Zero W avec un second dongle WiFi ou un Emetteur 2.4GHz
(suivant le type de drone à pirater). Le raspberry serait télé-commandé 
depuis le sol par du WiFi.

Le scenario consisterait à approcher manuellement notre drone
malveillant du drone cible puis d'en prendre le contrôle et de le
dérouter pour le récupérer.

Nous possédons déjà un drone (2.4GHz) sur lequel nous voulons tenter de
faire le rétro engineering du protocole. Cependant, nous pensons qu'il
est nécessaire d'étudier et comprendre les exploit existants avant de
reverser le protocole inconnu. 

Est-ce que vous auriez la possibilité de nous prêter le matériel
suivant:
* les drones ci-dessus [1] et [2] (ce qui nous permettraient d'avoir la
certitude de pouvoir faire une démonstration lors de la THC.)
* un raspberry pi zero W
* un SDR (Type HackRF)

Nous avons déjà des modules radios 2.4GHz pouvant communiquer entre le
RPI et le drone cible (nRF24L01+).

Il faudra une batterie pour alimenter le RPI pour la durée du vol. Nous
devrions pouvoir en trouver une par nous même.

Il nous faudra aussi nous assurer que le drone pirate soit suffisamment
puissant pour pouvoir transporter le RPI, sa batterie et ses
accessoires. Au besoin, auriez-vous un drone assez puissant à nous
prêter (peu importe le modèle, il ne servira que de plateforme de
transport)?

### Retours équipe pédagogique

#### Benoît Morgan

On collecte déjà les équipements

## 13. Thomas Bailleux, Valentin Rieux
MiFare Ultralight

### Description

Néant.

### Retours équipe pédagogique

Néant.

## 14. Solal Besnard, Jean Thonphan
Enchainenement de CTF web, avec coloration RPG.

### Description

En terme de design, j'aimerais faire des séries de salles avec à chaque fois une
interface systeme à travers le jeu pour passer dans la salle suivante, avec des
indices dans la salle pour résoudre le puzzle/la faille dé sécu.

En terme de moyen, j'étais parti sur Unity :X vu que je maitrise déja un peu, je
connais pas dutout dogot mais à voir. Plutot sur un jeu 2D un peu minimaliste
comme sur gba.

En terme de level design on a deja une bonne base, et avec des editeur de niveau
style Tiled et avec des sprites opensource (dieu bénisse les gens qui passe des
centaines d'heures pour nous permettre de travailler facilement et freely)
ça va vite, la vrai difficulté c'est que je sais pas a quel point les moteurs
permettent de s'interphaser facilement avec un shell unix ou mysql through des
scripts. Je vais test ça soon.

### Retours équipe pédagogique

#### Benoît Morgan

Ok, ça peut être très sympa, mais attention, je ferai bien attention au fait
qu'on doit bien y avoir un très grosse majorité du projet long qui se concentre
sur la sécurité.

#### Vincent Migliore et Benoît Morgan

Utilisez de préférence Gotot Engine si possible

## 15. Cros, Tena
password fort vs faible outillage

### Description

Néant.

### Retours équipe pédagogique

#### Éric Alata

Pour information, ce papier guide vraiment le travail a effectuer :
https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/wheeler

<!--

Vous trouverez ici les règles du jeu pour le projet long ainsi que les dates butoir.

**Attention :** les étudiants en Formation Continue (contrats de professionnalisation inclus) ne font pas de projet long. Ceux d'entre eux qui sont inscrits en M2 (e.g. les étudiants qui suivent l'ensemble du cycle ingénieur en formation continue) doivent faire un projet bibliographique pour valider leur M2.

Vous pouvez choisir deux types de projet long : tuto ou challenge. Si vous voulez faire un challenge normalement vous devez déjà avoir intéragi avec les organisateurs de la THC.

Les projets tuto seront proposés aux participants de la THC, vous devrez assurer une permanence pour votre tuto pendant cette journée.

# Règles du jeu

## Utilité

Le principal critère de l'évaluation est l'utilité du challenge (il est utilisable par celui qui tente le challenge, il est réutilisable par qqun qui veut le proposer à d'autres personnes, il est faisable, il apprend quelque chose à la personne qui le fait, la documentation oriente bien l'utilisateur / correcteur, il n'a pas de bugs, etc.).

## Contenu

En plus des livrables (binaires, sources/imagesdocker/vms, docs) tous les challenges devraient avoir, pour être utiles/réutilisables/instructifs, au moins :
- un titre + abstract + description d'entre 1/2 page et 1 page et 1/2 pour décrire le challenge aux personnes qui liront le sujet sur un catalogue ou qui accèdent en offline au challenge ;
- une solution au challenge détaillé;
- une procédure d'installation / lancement.

## Forme

Le challenge doit être facilement déployable et de taille raisonnable. On vous conseille fortement d'utiliser des composants docker.

Il y a une limite forte de taille à 1 Gb. Si vous devez dépasser celle-ci vous devez demander une autorisation à votre encadrant de projet long.

Vous devez mettre votre challenge dans un dépôt Github, privé au début, associé au compte que vous utilisez dans TLS-SEC. **Attention** si vous n'avez pas demandé la validation à Github de votre compte comme un compte étudiant vous n'avez pas accès à la création de dépôts privés. Le dépôt a vocation à être rendu public, il doit donc être **présentable**.

Le projet se fait par deux, mais dès le début c'est important de décrire comment les tâches sont séparées. La notation est **individuelle**. Vous devez faire des commits au projet chacun depuis votre compte ! Il est **interdit** de travailler à deux devant l'écran et de dire *on l'a fait à deux*. Vous devez faire comme si votre partenaire de projet long était par exemple un employé d'une autre entreprise avec une séparation des responsabilités et contributions que vous voulez claire vis-à-vis de votre employeur. L'évaluateur du projet long a le droit de se baser sur qui a fait quel commit pour une partie de son évaluation.

Il y aura une phase de cross-évaluation où deux autres projets longs vous seront attribués et où vous devrez les tester et faire une évaluation sur une page. Une partie de votre note correspondra à la qualité de vos rapports de cross-évaluation.

# Soutenances

Les soutenances seront organisées par créneaux de 30 minutes (15 minutes de présentation, 10 minutes de questions, 5 minutes de délibération). Les tranparents et le discours devront être en Anglais, et chaque étudiant devra rendre en début de soutenance un résumé individuel du projet. Ce résumé devra être rédigé en Anglais et être de moins de 1000 mots (1 à 2 pages).

# Dates butoir

- 05/02 Remplir le fichier avec votre binôme, sujet et type de projet long sur le dépôt prive-etudiants.

- 05/02 Début du projet long

- 04/03 Rendu final des projets longs (sources et documentation), fermeture du dépôt git

- 05-06/03 Phase de cross-évaluation

- 09/03 Convention

- 14-15/03 Soutenances de projet long

-->
