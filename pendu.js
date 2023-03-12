const motEl = document.getElementById('mot');
const mauvaisesLettres = document.getElementById('mauvaises-lettres');
const rejouerBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-contenant');
const notification = document.getElementById('notification-contenant');
const messageFinal = document.getElementById('message-final');

const figurePartie = document.querySelectorAll('.figure-partie');

const mots = ['urluberlu','kaleidoscope','libellule','fifrelin','implementation','concatener'];


// SELECTIONNER UN MOT POUR JOUER 

let motSelectionne = mots[Math.floor(Math.random() * mots.length)]; //length parce qu'on ne veut pas un mot random 14 (14e mot dans l'array) si on à seulement 6 mots).
//floor arrondit au plus bas.

const bonnesLettresArr = [];
const mauvaisesLettresArr = [];


//Afficher le mot caché

function afficherMot() {
    motEl.innerHTML = ` 
        ${motSelectionne
            .split('')  //séparé par lettre
            .map(   //passer chaque lettre une à la fois
                lettre =>`
                    <span class="lettre">
                        ${bonnesLettresArr.includes(lettre) ? lettre :''}   
                    </span>
                `
            )
            .join('') // pour regrouper les lettres ensemble pour faire le mot
        }
    `;

    const motInterne = motEl.innerText.replace(/\n/g, '');
    //Pour comparer le mot à deviner et le mot à l ecran. 

    //si notre mot interne est le même mot que notre mot seletionnée, on va dire le message final "bravo tu as gagné!"
    if(motInterne === motSelectionne){
        messageFinal.innerText = 'Bravo, Tu as gagné!';
        popup.style.display = 'flex';
    }
}


//MAUVAISES LETTRES

function updateMauvaisesLettresEl() {

    //Afficher les mauvaises lettres

    mauvaisesLettres.innerHTML = `
        ${mauvaisesLettresArr.map(lettre => `<span>${lettre}</span>
        `)}
    `
    

    //Afficher le bonhomme
    figurePartie.forEach((partie, index) =>{
        const erreurs =  mauvaisesLettresArr.length;

        if(index < erreurs){
            partie.style.display = 'block';
        }else{
            partie.style.display = 'none'
        }

    })

    //Afficher si on a perdu
    if(mauvaisesLettresArr.length === figurePartie.length){
        messageFinal.innerText = 'Malheureusement, tu as perdu! :('
        popup.style.display = 'flex'
    }
}



//AFFICHER LA NOTIFICATION

function afficherNotification(){

    notification.classList.add('afficher');

    setTimeout(()=>{
        notification.classList.remove('afficher')
    }, 2000);
        
}


//EVENT LISTENERS

//window: n'importe où sur la page/ sur la fenêtre
//keydown: quand on appuie sur les clés de mon clavier (keyup quand on relache la clé)
//e : l'évènement de notre fct. Ici, l'évènement est la touche que je touche sur mon clavier.
window.addEventListener('keydown', e=>{

    // console.log(e.keyCode)
    // chaque touche du clavier est associée à un numéro

    if(e.keyCode >= 65 && e.keyCode <= 90) {
        //si la lettre fait parti du mot, on l'affiche.
        //si la lettre ne fait pas parti du mot, on ne l'affiche pas
        //Mais on la met dans notre Array de mauvaises lettres.
        const lettre = e.key;
        // console.log(lettre);
        if(motSelectionne.includes(lettre)) {
            //!...includes ... : pas inclue
            if(!bonnesLettresArr.includes(lettre)){
                bonnesLettresArr.push(lettre)
                afficherMot()
            }else{
                afficherNotification();
             }

        }else{
            if(!mauvaisesLettres.includes(lettre)){
                mauvaisesLettres.push(lettre);

                updateMauvaisesLettresEl();
            }else{
                afficherNotification();
            }
        }

    }


})







afficherMot();
// ? est comme un if. Si la partie avant contient le lettre alors on affiche la lettre (= lettre après l'?) sinon on n'affiche rien.
// ${} permet d'aller chercher une variable dans les `` .


