const motEl = document.getElementById('mot');
const mauvaisesLettres = document.getElementById('mauvaises-lettres');
const rejouerBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-contenant');
const notification = document.getElementById('notification-contenant');
const messageFinal = document.getElementById('message-final');

const figurePartie = document.querySelectorAll('.figure-partie');

const mots = ['urluberlu','kaleidoscope','libellule','fifrelin','implémentation','concaténer'];

//selection un mot pour jouer
let motSelectionne = mots[Math.floor(Math.random() * mots.length)] //length parce qu'on ne veut pas un mot random 14 (14e mot dans l'array) si on à seulement 6 mots).
//floor arrondit au plus bas.