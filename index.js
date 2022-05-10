// COR5 Emojis & spirits - Gin, Vodka, Tequila, Rum, Whiskey
// Add beer afterwards if core**
// const grinWithBigEyes = '🙋' ;
// console.log(grinWithBigEyes); 
// const h1 = document.querySelector('h1');  
// h1.innerText = grinWithBigEyes;

// console.log(grinWithBigEyes);
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
.then(res => res.json())
.then((data) => {
    console.log(data);
    console.log(data.drinks);  //data = object, drinks = key, array of drink info = value (want!)
    getDrinks(data);
})

const emojiDiv = document.querySelector('#emoji');
const cocktailDiv = document.querySelector('#cocktail');
const detailDiv = document.querySelector('#description');

let emoji = document.createElement('img');
emoji.src = 'emojis/Happy Emoji.png'
emojiDiv.append(emoji);

function getDrinks(data) {
    
    for (const item of data.drinks) { //data.drinks -> array of 4
        // console.log(data.drinks);
        // console.log(item.strDrinkThumb);   //drink(img) thumbnail
        let drinkImg = document.createElement('img');
        drinkImg.src = item.strDrinkThumb;
        cocktailDiv.append(drinkImg); //appends drink image to the cocktail DIV

        
        drinkImg.addEventListener('mouseover', (e) => {
            
            // console.log(e);
            detailDiv.innerHTML = ''; //this clears all stuff in description
            
            let drinkOfChoice = document.createElement('img');
            drinkOfChoice.src = e.target.src; //src = <img src=adfadfa'>
            detailDiv.append(drinkOfChoice);

            //add Cocktail name, description, recipe, where to get it
            let drinkRecipe = document.createElement('p');
            drinkRecipe.innerText = item.strInstructions;
            console.log(drinkRecipe);
            detailDiv.append(drinkRecipe);

        })

        
    }

}


