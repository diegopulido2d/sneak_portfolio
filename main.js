
function getAll(){


    fetch('data.json')
    .then(response => response.json())
    .then(data => {

        let fotosGaleria = data.cards;

        for (i = 0; i < fotosGaleria.length; i++){

            let card = document.createElement('div');
            card.classList.add('card');
            card.classList.add('card' + fotosGaleria[i]['category']);
            card.style.backgroundImage = `url(${fotosGaleria[i]['background']})`;
            let logo = document.createElement('span');
            logo.innerHTML = fotosGaleria[i]['logo'];
            let category = document.createElement('h5');
            category.innerHTML = fotosGaleria[i]['category'];
            let separator = document.createElement('div');
            separator.classList.add('separator');
            let innerCard = document.createElement('div');
            innerCard.classList.add('innerCard');
            innerCard.appendChild(logo);
            innerCard.appendChild(separator);
            innerCard.appendChild(category);
            card.appendChild(innerCard);
            let gallery = document.getElementsByClassName('gallery')[0];
            gallery.appendChild(card);
        };


    })
    .catch(function(error) {
        console.log('Error' + error.message);
    });
};






let cards = document.getElementsByClassName('card');

function cardBlock(){
    for (i = 0; i < cards.length; i++){
        cards[i].classList.add("cardBlock");
    };
};

function cardRow(){
    for (i = 0; i < cards.length; i++){
        cards[i].classList.remove("cardBlock");
    };
};




function catBranding() {
    for (i = 0; i < cards.length; i++){
        if ((cards[i].classList.contains('cardBranding')) == true){
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    };
}

function catWeb() {
    for (i = 0; i < cards.length; i++){
        if ((cards[i].classList.contains('cardWeb')) == true){
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    };
}

function catPhoto() {
    for (i = 0; i < cards.length; i++){
        if ((cards[i].classList.contains('cardPhotography')) == true){
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    };
}

function catApp() {
    for (i = 0; i < cards.length; i++){
        if ((cards[i].classList.contains('cardApp')) == true){
            cards[i].style.display = "flex";
        } else {
            cards[i].style.display = "none";
        }
    };
}

function catAll() {
    for (i = 0; i < cards.length; i++){
        cards[i].style.display = "flex";  
    };
}



function dropMenu(){
    let menuMobile = document.getElementsByClassName('mobile')[0];

    if (menuMobile.classList.contains('drop') == true) {
        menuMobile.style.paddingTop = "0px";
        menuMobile.classList.remove('drop');
    } else {
        menuMobile.classList.add('drop');
        menuMobile.style.paddingTop = "75px";
    }

    
}