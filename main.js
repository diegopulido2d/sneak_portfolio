
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
            card.appendChild(logo);
            card.appendChild(category);

            let gallery = document.getElementsByClassName('gallery')[0];
            gallery.appendChild(card);
        };


    })
    .catch(function(error) {
        console.log('Error' + error.message);
    });
}






let cards = document.getElementsByClassName('card');

function cardBlock(){
    for (i = 0; i < cards.length; i++){
        cards[i].classList.add("cardBlock");
    };
}

function cardRow(){
    for (i = 0; i < cards.length; i++){
        cards[i].classList.remove("cardBlock");
    };
}