// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post, numero progressivo da 1 a n
// nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// [e qui è già fatto perchè ve lo passo nello zip :innocente:]


const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

const container = document.getElementById("container");


// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

posts.forEach( element => {
    
    let { id, content, media, author, likes, created } = element;
    const { name, image } = author;
    
    container.innerHTML +=  `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${image}" alt="${name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${content}</div>
            <div class="post__image">
                <img src="${media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    ` ;

/*FIne primmo forEach*/
}
);

// Milestone 3 - Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

const arrayLikeButton = document.querySelectorAll('.like-button');
const arrayIdPostLiked = [];
let likeCounter = document.querySelectorAll('.js-likes-counter');

// (function (el) { el.preventDefault(); …ilrestodeltuocodice });
for ( let i = 0; i < arrayLikeButton.length; i++ ) {

    let stateLike = false;

    arrayLikeButton[i].addEventListener('click', 
    function (el) {
        el.preventDefault(); 
        if (!stateLike) {
            arrayLikeButton[i].classList.add('like-button--liked');
            // aggiungere 1 a Likes del singolo obj post
            posts[i].likes++;
            console.log(posts[i].likes);
            // aumento il couterLikes
            likeCounter[i].innerHTML = posts[i].likes;
            stateLike = true;

            // salva l'id relativo a questo post in un array 
            arrayIdPostLiked.push(posts[i].id);
            // stampa l'array con le posizione degli id salvati
            console.log(arrayIdPostLiked);

        } else {
            
            arrayLikeButton[i].classList.remove('like-button--liked');

            // decremento il counterLikes
            posts[i].likes--;
            console.log(posts[i].likes);

            likeCounter[i].innerHTML = posts[i].likes;
            stateLike = false;

            // trovo la posizione dell'id che voglio rimuovere
            let ind = arrayIdPostLiked.indexOf(posts[i].id);
            // uso la funzione splice e gli dico di rimuove nella posizione di "id da rimuovere" e quanti me ne devo rimuovere
            arrayIdPostLiked.splice(ind, 1);
            // stampo l'array con l'elemento rimosso 
            console.log(arrayIdPostLiked);
        }
    }
    );
}
