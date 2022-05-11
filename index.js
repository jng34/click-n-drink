//Welcome Prompt
function welcome() {
    let greetings = prompt('Are you 21 or older?');
    if (greetings == 'yes') {
        alert('Welcome! Please continue.');
    } else if (greetings == 'no') {
        alert('Get outta here or we\'ll tell your mom!');
    } else {
        alert('Please type "yes" or "no".')
    }
}
welcome();



//Div tags
const emojiDiv = document.querySelector('#emoji');
const cocktailDiv = document.querySelector('#cocktail');
const detailDiv = document.querySelector('#description');

//Emoji tags
const happy = document.getElementById('happy');
const party = document.getElementById('party');
const angry = document.getElementById('angry');
const sad = document.getElementById('sad');
const smirk = document.getElementById('smirk');

//Click Event
function clickEmojis() {
    happy.addEventListener('click', () => {
        cocktailDiv.innerHTML = '';
        fetchMojitos();
    });
    party.addEventListener('click', () => {
        cocktailDiv.innerHTML = '';
        fetchLongIslands();
    });
    angry.addEventListener('click', () => {
        cocktailDiv.innerHTML = '';
        fetchMartinis()
    });
    sad.addEventListener('click', () => {
        cocktailDiv.innerHTML = '';
        fetchDaiquiris();
    });
    smirk.addEventListener('click', () => {
        cocktailDiv.innerHTML = '';
        fetchMargaritas()
    });
}

clickEmojis();



function fetchMojitos() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        console.log(data.drinks);  //data = object, drinks = key, array of drink info = value (want!)
        getDrinks(data);
    })
}


//fetch long island ice teas
function fetchLongIslands() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Long')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        console.log(data.drinks);  //data = object, drinks = key, array of drink info = value (want!)
        getDrinks(data);
    })
}


//fetch martinis - smirk
function fetchMartinis() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Martini')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        console.log(data.drinks);  //data = object, drinks = key, array of drink info = value (want!)
        getDrinks(data);
    })
}


//fetch daiquiris
function fetchDaiquiris() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Daiquiri')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        console.log(data.drinks);  //data = object, drinks = key, array of drink info = value (want!)
        getDrinks(data);
    })
}


//fetch margaritas
function fetchMargaritas() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(res => res.json())
    .then((data) => {
        console.log(data);
        console.log(data.drinks);  //data = object, drinks = key, array of drink info = value (want!)
        getDrinks(data);
    })
}

// fetchMargaritas();



//Adds drink images
function getDrinks(data) {
    
    for (const item of data.drinks) { //data.drinks -> array of 4
        // console.log(data.drinks);
        // console.log(item.strDrinkThumb);   //drink(img) thumbnail
        let drinkImg = document.createElement('img');
        drinkImg.src = item.strDrinkThumb;
        cocktailDiv.append(drinkImg); //appends drink image to the cocktail DIV

        //Mouseover Event
        drinkImg.addEventListener('mouseover', (e) => {
            
            // console.log(e);
            detailDiv.innerHTML = ''; //this clears all stuff in description
            
            let drinkOfChoice = document.createElement('img');
            drinkOfChoice.src = e.target.src; //src = <img src=adfadfa'>
            detailDiv.append(drinkOfChoice);

            //add Cocktail name, description, recipe, where to get it
            let drinkRecipe = document.createElement('p');
            drinkRecipe.innerText = item.strDrink;
            console.log(drinkRecipe);
            detailDiv.append(drinkRecipe);

        })

        
    }

}

document.addEventListener('keydown', (e)=>{
    if (e.key === 'ArrowUp') {
        alert('You have great taste! Cheers!');
    }
    if (e.key === 'ArrowDown') {
        alert('Finish your drink and get something else.');
    }
}) 