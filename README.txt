Ce jeu que j'ai réalisé durant ma formation à Geek School est une reproduction du fameux jeu Pac-Man.

L'utilisateur est un Pac-Man poursuivit par des fantômes.
Il se dirige à l'aide des flèches du clavier.
Lorsqu'il appuie sur une flèche, le changement de direction s'effectue lorsqu'il est au centre d'une case.
Les déplacements des fantômes sont choisis aléatoirement.

Le terrain de jeu est généré par une fonction "imageToMap()" qui associe la couleur de chaque pixel de "map.png" à 
un mur, un sol, un fantôme ou à Pac.

Le joueur de Pac peut manger les fantômes après avoir mangé un diamant. La partie se termine lorsque le joueur a mangé 
tous les point blancs, ou lorsqu'il a perdu ses 3 vies.

PS: Ce script nécessite d'être hébergé sur un serveur pour fonctionner (j'ai utilisé Wamp64).
