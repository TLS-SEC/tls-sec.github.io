---
layout: post
title: "Projets longs"
category: [2022-2023]
---

Vous trouverez ici la liste des projets longs de l'année scolaire 2022-2023.

# Goupes de projets longs 2022-2023

## G1 Rémi BONREPAUX, Bojian SHANG

Tuteur : à venir

**Analyse des dangers et des solutions de protection qui existent pour rendre
accessible des ordinateurs au public et donc à des potentiels attaquants.**

### Description

- Objectifs : Certains magasins offrent la possibilité aux clients de tester
  les ordinateurs qu’ils vendent. C’est par exemple le cas de la Fnac,
  Darty, Carrefour, iConcept. Cette pratique peut s'avérer dangereuse
  puisqu’une personne mal intentionnée a directement accès à ces machines.
  L’objectif du projet sera d’analyser les dangers qui existent, ainsi que
  les moyens de protection pour y faire face.
- Contenu
  * Première partie théorique: Dans un premier temps, le but de cette partie
    serait de lister tous les scénarios d’attaques possibles et d’analyser
    leurs conséquences. Après avoir exprimé les enjeux et les points clés à
    sécuriser, l’objectif sera de proposer une ou plusieurs solutions de
    protection pour chaque danger. Nous pourrons en particulier nous
    demander comment sont gérer les droits de l'utilisateur, l'accès au
    réseau, etc…
   * Deuxième partie pratique: Dans un second temps nous tenterons de
     rentrer en collaboration avec certains magasins qui sont dans cette
     situation pour analyser leur système de protection, et tenter de
     trouver des vulnérabilités. Le contenu de cette partie sera donc
     dépendante des réponses des magasins. A ce jour, nous avons seulement
     contacté la Fnac qui ne nous a pas répondu.

## G2  Louis LOLIVE, Jules BOYER

Tuteur : à venir

**Création et analyse de virus métamorphique**

### Description

- Contexte : Les virus sont pour la majorité souvent découverts par les
  antivirus actuels. Ainsi, nous nous concentrerons sur la création d’un
  virus métamorphique dans l’objectif d’étudier les moteurs métamorphiques,
  le processus de création de ces virus et les techniques employées pour les
  rendre aussi furtifs.
- Sujet : En prenant en compte les documentations actuelles existantes sur
  la création de virus métamorphiques, nous allons dans un premier temps
  réaliser un tel virus. Nous attacherons ensuite une grande importance à la
  complexification de ce moteur métamorphique en essayant de rajouter des
  fonctionnalités et techniques utilisées dans les plus récents virus de ce
  type. Enfin, nous ferons une étude sur les différents points pouvant
  permettre de détecter le virus développé, son efficacité pour tromper des
  antivirus, et les techniques additionnelles n’ayant pas été utilisées lors
  de sa création.
- Références
  * Madenur Sridhara, S., Stamp, M. Metamorphic worm that carries its own morphing engine. J Comput Virol Hack Tech 9, 49–58 (2013).
    https://doi-org.gorgone.univ-toulouse.fr/10.1007/s11416-012-0174-z
  * Borello, JM., Filiol, É. & Mé, L. From the design of a generic metamorphic engine to a black-box classification of antivirus detection techniques. J Comput Virol 6, 277–287 (2010).
    https://doi-org.gorgone.univ-toulouse.fr/10.1007/s11416-009-0136-2
  * Wong, W., Stamp, M. Hunting for metamorphic engines. J Comput Virol 2, 211–229 (2006).
https://doi-org.gorgone.univ-toulouse.fr/10.1007/s11416-006-0028-7
  * Borello, J. M. Étude du métamorphisme viral : modélisation, conception et détection.
    https://theses.hal.science/tel-00660274/document

## G3 Mayeul GASC, Pierre FAVARY

Tuteur : à venir

**Sécurité des connexions réseaux très haut débit : Étude et implémentations sous DPDK**

### Description

- Contexte : L’augmentation des débits jusqu’à 10Gb/s –et au-delà– permise
  par les interfaces réseaux actuelles montre les limites de la pile réseaux
  d’un noyau tel que Linux. DPDK est un projet open-source initié par
  Intel permettant une augmentation significative des performances, via un
  traitement de paquets réseaux en user space (contournant donc la pile
  réseau), qui commence à être largement adopté dans le milieu industriel.
- Sujet : Le projet consiste en l’étude d’une solution anti-(D)DOS sous DPDK
  et en l’implémentation d’un module démonstrateur. Le but est de parvenir à
  réaliser du filtrage simple à très haut débit, permettant de poser les
  bases d’un firewall basé sur DPDK. La solution sera testée sur un banc
  d’essais 10Gb/s.
- Ressources : Le projet sera réalisé avec l’aide de l’association
  Tetaneutral.net pour ce qui est du banc d’essais très haut débit. Les
  membres de l’association 1 ont donné leur accord et sont en copie du mail
  associé à ce document.
- Références : M. Richards, “Linux kernel vs dpdk : Http performance showdown,” Jul 2022. [Online]. Available : https://talawah.io/blog/linux-kernel-vs-dpdk-http-performance-showdown/


## G4 Anthony RODRIGO, Tom HEURTEBISE, Justin FACQUET

Tuteur : à venir

**Réalisation d’une série de challenges pour la THCon 2023 haut niveau/débutant axés sur l’OSINT/web au travers d’une fausse plateforme de réseau social**


### Description

- Contexte : Le but de cette série de challenges découle d’une volonté des
  membres de l’organisation de la THCon 2023 d’attirer de nouveaux publics
  plus orientés débutants en cybersécurité. Nous avons donc pensé à réaliser
  des challenges qui seraient accessibles à des personnes ne disposant que
  de peu de connaissances en sécurité. Pour cela nous souhaitons les axés
  sur la logique et la réflexion. Cette série de défis disposera aussi de
  mécanisme pour apprendre quelques bases en cybersécurité sous la forme de
  faux posts sur notre réseau social. La volonté recherchée dans les
  challenges est de donner envie à de nouvelles personnes de tester le monde
  de la cybersécurité.
- Aspects techniques : Les challenges respecteront le format imposé par le
  gitlab des challenges de la THCON c’est-à-dire qu’ils seront dockerisés.
  Pour le Frontend du réseau social nous pensons utiliser React/TailwindCSS
  (Tailwind CSS - Rapidly build modern websites without ever leaving your
  HTML.) et pour le backend nous penchons pour l’utilisation de GraphQL
  (GraphQL | A query language for your API). A ce jour, nous envisageons
  aussi la possibilité d’utiliser certaines API externes (exemple :
  https://pypi.org/project/chatgpt-api/) pour les intégrer dans nos
  challenges.
- Compétences en sécurité mobilisées : Nous allons réinvestir certaines
  compétences acquises dans les cours de vulnérabilités web.
- Exemple de challenge : Le premier challenge serait celui permettant au
  participant de découvrir notre réseau social. Nous l’aguillerons pour
  qu’il découvre un profil cible dans lequel nous cacherons des éléments
  utilisables pour casser le mot de passe du compte de la cible. Nous
  disposons déjà du déroulé détaillé de nos challenges mais nous ne
  souhaitons pas les exposer à tous dans ce document :)

## G5 Viktor Adrian MOUTON, Thomas HOGER, Keziah SORLIN

Tuteur : à venir

**Deep learning appliqué à l'analyse statique de malwares**

### Description

- Contexte : Les malwares contemporains étant souvent polymorphiques ou
  métamorphiques, il est difficile de se satisfaire d’analyse par signature
  pour les détecter. Le deep learning est donc envisagé pour pouvoir
  détecter un élément suspect quelle que soit sa forme.
- Sujet : En prenant en compte l’état de l’art nous essaierons d’implémenter
  un modèle d’analyse statique utilisant du deep learning. Il faudra, pour
  l’entraîner, traiter des données liées aux malwares pour en extraire les
  informations nécessaires à l’apprentissage (API calls, boucles étranges,
  obfuscation, packing...) [RBa19]. Pour ce faire, nous considérerons
  l’utilisation de graphs de flot de contrôle [Jah15] ainsi que la
  conversion de binaires malveillants en images que nous utiliserons ensuite
  dans un réseau neuronal convolutif [CEc17]. Pour approfondir encore il
  sera possible d’envisager l’utilisation de GAN.
- References
  * [CEc17] B.Kolosnjaji; G.Eraisha; G.Webster; A.Zarras; C.Eckert. “Empowering convolutional networks for malware classification and analysis”. In: (2017). doi:
            https://ieeexplore.ieee.org/document/7966340
  * [Jah15]     R.Mirzazadeh; M.Hossein Moattar; M. Vafaei Jahan. “Metamorphic malware detection using Linear Discriminant Analysis and Graph Similarity”.
            In: (2015). doi: https://arxiv.org/ftp/arxiv/papers/1811/1811.04304.pdf
  * [RBa19] D.Uccia ; L.Aniellob ; R.Baldoni. “Metamorphic malware detection using
            Linear Discriminant Analysis and Graph Similarity”. In: (2019).
            doi: https://sites.cs.ucsb.edu/~chris/research/doc/acmsurvey12_dynamic.pdf

## G6 Andy HUMBERT, Victor de CREVOISIER, Hugo COURTADON

Tuteur : à venir

**Challenges d'analyse forensique pour le CTF de la THCon**

### Description

- Contexte : À la suite d’une attaque, une analyse forensique peut être
  conduite sur le système victime. Celle-ci va permettre d’inspecter
  minutieusement le système afin de repérer les traces de l’attaquant et les
  traces de son attaque pour avoir une meilleure compréhension de celle-ci,
  ou de l’identité de l’attaquant. Un challenge d’analyse forensique dans le
  CTF de la THCon permettra aux débutants de découvrir ce domaine et aux
  participants confirmés d’utiliser les subtilités de certains outils
  d’analyse.
- Objectifs: Nous nous proposons donc de réaliser une série de challenges
  nécessitant des outils d’analyse forensique (Testdisk, Volatility,
  Binwalk…). Le format des challenges respectera l’intégration des
  challenges dans l’événement CTF de la THCon. On utilisera notamment des
  dumps mémoires et disques à analyser.
- Exemple de challenge : Partition chiffrée, fichiers cachés, fichiers
  supprimés à récupérer, stéganographie, analyse de processus mémoire…

## G7 Lauric MARTHRIN-JOHN, Maya ABI-GHANEM

Tuteur : à venir

**Création et sécurisation d’un réseau longue distance (WAN) pour une entreprise fictive.**

### Description

- Contexte : Une entreprise fictive, dont le secteur d’activité est
  l’aviation, fait une demande de création et de mise en place de plusieurs
  mesures de sécurité pour interconnecter des infrastructures de deux sites
  physiques distants, sans passer par un FAI ordinaire, en cas de coupure de
  connexion prévoir une solution palliative. On doit réaliser une maquette
  et expliquer les solutions choisies.
- Ressources : Le projet sera réalisé avec « Cisco-Packet Tracer –
  Networking Simulation Tool » pour la réalisation de la maquette à haut
  débit.

## G8 valentin LEBRUN, Lucas GOUSSARD, Hugo SUZANNE.

Tuteur : à venir

**Réalisation d’un botnet**

### Description

- Sujet : L’objectif de notre projet long est de réaliser un botnet à petite
  échelle, contenant un serveur de commande et un zombie. Nous nous
  attarderons sur les principaux éléments nécessaires à un botnet: l'envoi
  de commandes au zombie via un cheval de Troie, la propagation du botnet
  (plusieurs choix possibles) et la mise en place d’une attaque DDOS
  exploitant nos machines zombifiées.
- Contenu :
  * 1ère partie théorique :
        Dans un premier temps le but sera de faire un état de l’art afin de choisir:
            - les systèmes ciblés
            - une méthode de propagation
            - une méthode de contrôle
            - les failles à utiliser
   * 2ème partie mise en place :
        Ensuite, nous allons créer notre propre botnet qui se découpe en 3 parties :
            - une partie propagation réalisé par un mailer
            - une partie contrôle via un serveur grâce à un trojan à travers chat IRC, twitter,
                GitHub ou autre.
            - une partie exécution de l’attaque qui a pour but d’utiliser nos zombies pour
                une attaque DDOS ou du minage de crypto monnaie.

## G9 Simon JUNCK, Jeremy DREZET, Rokia SBAI

Tuteur : Éric Alata

**titre non fourni**

### Description

- Contexte : Un virus informatique est composé de trois parties :
    -    Le vecteur d'infection : cette partie est chargée de trouver une cible et se
         propage vers cette cible.
    -    Le déclencheur : il s'agit de la condition qui, une fois remplie, exécute la charge
         utile.
    -    La charge utile : la fonction malveillante transportée par le virus.
- Sujet : En nous inspirant du cours d’infections informatiques, nous allons
  tenter de développer un virus/vers et d’étudier sa propagation dans un
  réseau informatique, en infectant d'autres fichiers, apportant
  généralement une "charge utile", qui est une fonction malveillante que
  nous voulons exécuter sur le système cible. Pour ce faire, nous allons
  d’abord nous intéresser aux différentes manières de l’infiltrer, à quel
  but ? (sa charge finale) et pour finir, que faire pour s’en protéger.

## G10 Adrien BARBANSON, Rémy BRÉVART

Tuteur : à venir

**Réalisation d’une série de challenges pour la THCon basés sur la technologie Blockchain ainsi que d’autres sur la sécurité des contrats intelligents du web 3.0 (Ethereum/Solidity).**


### Description

- Contexte: Ethereum, créé en juillet 2015, est aujourd’hui la 1ère
  Blockchain à contrat intelligent au monde. Les contrats intelligents sont
  de nouveaux types de programmes qui sont directement stockés et exécutés
  dans la Blockchain pour fournir de nouveaux services aux utilisateurs
  (comme la finance décentralisée, DeFi). Ces programmes utilisent un
  langage Turing Complet : Solidity. De par la nature immuable de la
  blockchain, tout programme déployé ne peut plus être mis facilement à jour
  et toutes les exécutions réalisées sont irréversibles. Beaucoup de
  programmeurs ne codent pas de manière sécurisée et/ou n’ont pas compris
  des concepts importants du langage / particularités. Ces derniers laissent
  des failles de sécurité exploitables par n’importe quel utilisateur de la
  Blockchain. Par exemple en 2022, nous avons pu assister aux hack de
  WormHole (326 millions de $ siphonnés), ou encore de sécurité dans le
  bridge Nomad (100 Millions volés). Nous souhaitons donc aider à
  sensibiliser le public de la THC à ces problématiques.
- Contenu:
  Le projet consistera à mettre en place plusieurs challenges centrés autour des
technologies de la blockchain, comme par exemple:
   * Un ou plusieurs challenges visant à manipuler les concepts fondamentaux de
        la blockchain, comme sa structure ou le minage de nouveaux blocs
   * Plusieurs challenges basés sur des smart-contracts comportant des
     vulnérabilités avec l’exploitation de ces dernières.
     
   Le projet inclura la mise en place de l’infrastructure permettant
     l’exécution des challenges (conteneurisation, backend, contrats, tests,
     …).

## G11 Zhang Qiuya

Tuteur : à venir

**Création d'une petite plateforme de compétition pour CTF**

### Description
- Contexte : CTF (Capture The Flag) a vu le jour en 1996 lors de la
  conférence mondiale de piratage DEFCON. Il s'agit d'un jeu compétitif
  entre passionnés de cybersécurité. La compétition CTF est toujours axée
  sur l'attaque de sites Web, le Reverse Engineering, le Pwn Binary Exploit,
  la cryptographie, la sécurité mobile et la sécurité diverse. De plus en
  plus, les entreprises de cybersécurité souhaitent que leurs candidats
  aient une expérience de CTF. Mais la plupart des étudiants n'ont jamais
  été exposés au concours de la FFC auparavant. Ils ne comprennent pas le
  format des compétitions de CTF. Et ils ne peuvent pas participer
  directement aux compétitions de la CTF pour acquérir de l'expérience.
- Objectif : Pour aider les gens à simuler la participation à des
  compétitions CTF, je veux créer une mini plateforme de compétition pour
  CTF. Cette plateforme contient le même type de questions que CTF. Les
  personnes s'inscrivent pour participer en tant qu'équipe, répondent à des
  questions sur la plateforme et peuvent consulter le classement pour chaque
  question, le classement de l'équipe et le classement intra- équipe comme
  s'ils participaient à une compétition de CTF.

<!--
## Gx

Tuteur : à venir

### Description
-->

## Soutenances 14/03/2023

Jurés :

  * BM : Benoît Morgan
  * EA : Éric Alata
  * JCD : Jean-Christophe Deneuville
  * JF : Julien Fasson
  * LH : Ladislas Hajnal
  * PHQ : Philippe Queinnec
  * VM : Vincent Migliore
  * VN : Vincent Nicomette

 Enseignants anglais :
  * à venir
  
### Jury 1 : Salle XXXX

|Heure| Groupe | Tuteur | Jurés  |
|-----|--------|--------|--------|
|14:00|Gx | | |
|14:35|Gx | | |
|15:10|Gx | | |
|15:45|Gx | | |

