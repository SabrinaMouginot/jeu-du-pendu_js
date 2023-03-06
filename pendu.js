const motEl = document.getElementById('mot');
const mauvaisesLettres = document.getElementById('mauvaises-lettres');
const rejouerBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-contenant');
const notification = document.getElementById('notification-contenant');
const messageFinal = document.getElementById('message-final');

const figurePartie = document.querySelectorAll('.figure-partie');

const mots = ['urluberlu','kaleidoscope','libellule','fifrelin','implémentation','concaténer'];

// SELECTIONNER UN MOT POUR JOUER 

let motSelectionne = mots[Math.floor(Math.random() * mots.length)]; //length parce qu'on ne veut pas un mot random 14 (14e mot dans l'array) si on à seulement 6 mots).
//floor arrondit au plus bas.

const bonnesLettresArr = [''];
const mauvaisesLettresArr = [];

//Afficher le mot caché

function afficherMot() {
    motEl.innerText = ` 
        ${motSelectionne
            .split('')  //séparé par lettre
            .map(   //passer chaque lettre une à la fois
                lettre =>`
                    <span class="lettre">
                        ${bonnesLettresArr.includes(lettre) ? lettre :''}   // ? est comme un if. Si la partie avant contient le lettre alors on affiche la lettre (= lettre après l'?) sinon on n'affiche rien.
                        //
                    </span>
                `
            )
            .join('') // pour les regrouper ensemble
        }
    `;
}

afficherMot();



