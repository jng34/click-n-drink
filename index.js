//Welcome Prompt
function welcome() { 
    
    let greetings = prompt('Are you under 21??? We can get you in. \u{1F92B}');
    if (greetings === 'no') {
        alert("Checking to see if you are lying...");
        alert('Ok, welcome to CLICK N\' DRINK!');
    } else if (greetings === 'yes') {
        getOut();
    } else {
        alert('Please enter "yes" or "no".');
        welcome(); //recursion 
    }
};

welcome();



function clickNDrink() {

    //Div tags
    const emojiDiv = document.querySelector('#emoji');
    const cocktailDiv = document.querySelector('#cocktail');
    const detailDiv = document.querySelector('#description');
    const feedEmojiDiv = document.querySelector('#feed-emoji');
    
    //Emoji tags
    const happy = document.getElementById('happy');
    const party = document.getElementById('party');
    const angry = document.getElementById('angry');
    const sad = document.getElementById('sad');
    const smirk = document.getElementById('smirk');
    

    //Emoji images
    let happyEmoji = document.createElement('img');
    happyEmoji.id = 'happiness';
    happyEmoji.setAttribute('class', 'hidden');
    happyEmoji.style.cssText = 'margin-left: 69px;';
    happyEmoji.src = "emojis/Happy Emoji.png";

    let partyEmoji = document.createElement('img');
    partyEmoji.id = 'partayy';
    partyEmoji.setAttribute('class', 'hidden');
    partyEmoji.style.cssText = 'margin-left: 69px;';
    partyEmoji.src = "emojis/Party Face Emoji.png";
    
    let angryEmoji = document.createElement('img');
    angryEmoji.id = 'anger';
    angryEmoji.setAttribute('class', 'hidden');
    angryEmoji.style.cssText = 'margin-left: 69px;';
    angryEmoji.src = "emojis/Very Angry Emoji.png";

    let sadEmoji = document.createElement('img');
    sadEmoji.id = 'sadness';
    sadEmoji.setAttribute('class', 'hidden');
    sadEmoji.style.cssText = 'margin-left: 69px;';
    sadEmoji.src = "emojis/Very Sad Emoji.png";

    let smirkEmoji = document.createElement('img');
    smirkEmoji.id = 'smirky';
    smirkEmoji.setAttribute('class', 'hidden');
    smirkEmoji.style.cssText = 'margin-left: 69px;';
    smirkEmoji.src = "emojis/Smirk Face Emoji.png";
    
    //Text for picking a drink
    let pickADrink = document.createElement('p');
    pickADrink.innerText = 'Drink recommendations just for you: (choose one)';
    pickADrink.style.cssText = 'text-align = center; font: 30px Comic Sans MS; font-weight: bold';
    

    function clearHTML() {
        cocktailDiv.innerHTML = '';
        detailDiv.innerHTML = '';
        feedEmojiDiv.innerHTML = '';
        dragAcross.className = 'hidden';
        happyEmoji.setAttribute('class', 'hidden');
        partyEmoji.setAttribute('class', 'hidden');
        angryEmoji.setAttribute('class', 'hidden');
        sadEmoji.setAttribute('class', 'hidden');
        smirkEmoji.setAttribute('class', 'hidden');
    };


    //Click Event
    function clickEmojis() {
        

        happy.addEventListener('click', () => {
            
            clearHTML();
            fetchMojitos();
            cocktailDiv.append(pickADrink);
            feedEmojiDiv.append(happyEmoji);
            
        });
        party.addEventListener('click', () => {
            
            clearHTML();
            fetchLongIslands();
            cocktailDiv.append(pickADrink);
            feedEmojiDiv.append(partyEmoji);

        });
        angry.addEventListener('click', () => {
            
            clearHTML();
            fetchMartinis();
            cocktailDiv.append(pickADrink);
            feedEmojiDiv.append(angryEmoji);

        });
        sad.addEventListener('click', () => {
            
            clearHTML();
            fetchDaiquiris();
            cocktailDiv.append(pickADrink);
            feedEmojiDiv.append(sadEmoji);

        });
        smirk.addEventListener('click', () => {
            
            clearHTML();
            fetchMargaritas();
            cocktailDiv.append(pickADrink);
            feedEmojiDiv.append(smirkEmoji);

        });
    }
    
    clickEmojis();
    
    
    //fetch mojitos
    function fetchMojitos() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
        .then(res => res.json())
        .then((data) => {
            // console.log(data.drinks);  //data = object, drinks = key, array of drink info = value (want!)
            // getDrinks(data);
            getDrinksForEach(data);
        })
    }
    
    
    //fetch long island ice teas
    function fetchLongIslands() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Long')
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            // console.log(data.drinks);  //data = object, drinks = key, array of drink info = value (want!)
            getDrinksForEach(data);
        })
    }
    
    
    //fetch martinis - smirk
    function fetchMartinis() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Martini')
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            // console.log(data.drinks);  //data = object, drinks = key, array of drink info = value (want!)
           
            getDrinksForEach(data);
        })
    }
    
    
    //fetch daiquiris
    function fetchDaiquiris() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Daiquiri')
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            // console.log(data.drinks);  //data = object, drinks = key, array of drink info = value (want!)
         
            getDrinksForEach(data);
        })
    }
    
    
    //fetch margaritas
    function fetchMargaritas() {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(res => res.json())
        .then((data) => {
            // console.log(data);
            // console.log(data.drinks);  //data = object, drinks = key, array of drink info = value (want!)
          
            getDrinksForEach(data);   
        })
    }
    
    
    let mood = document.createElement('p');
    mood.innerText = 'This is you right now: \n (hover below)' ;
    mood.style.cssText = 'font: 35px Comic Sans MS; text-align: center; font-weight: bold; margin-top: 0px; width: 400px;'
    

    //Add drink images with forEach method
    
    function getDrinksForEach(data) {
    
        data.drinks.forEach( (item) => {
            
            let drinkImg = document.createElement('img');
            drinkImg.src = item.strDrinkThumb;
            cocktailDiv.append(drinkImg);
            
            drinkImg.addEventListener('click', (e) => {
                
                detailDiv.innerHTML = ''; //this clears all stuff in description
                
                feedEmojiDiv.prepend(mood);

                //adds cocktail name
                let drinkName = document.createElement('p');
                drinkName.innerText = item.strDrink.toUpperCase();
                drinkName.style.cssText = 'font: 35px Comic Sans MS; font-weight: bold;'; 

                //adds cocktail image
                let drinkOfChoice = document.createElement('img');
                drinkOfChoice.id = 'drink';
                drinkOfChoice.draggable = 'true'; //prepare drag element
                drinkOfChoice.src = e.target.src; 
                
                //appends name and image to div tag
                detailDiv.append(drinkName, drinkOfChoice);

                //mouseover event listener
                feedEmojiDiv.addEventListener('mouseover', onMouseOver);

            });

        })
    };

    //reveals hidden emojis

    function onMouseOver() {
        happyEmoji.className = '';
        angryEmoji.className = '';
        partyEmoji.className = '';
        sadEmoji.className = '';
        smirkEmoji.className = '';
        dragAcross.className = '';
    }



    const dragNdrop = document.getElementById('dragndrop');
    let dragAcross = document.createElement('p');
    dragAcross.innerText = 'Give me the drink \n >>>>>>>>>>>>>>>>>>>>>>>>>> \n (drag and drop)';
    dragAcross.className = 'hidden';
    dragAcross.style.cssText = 'text-align: center; font: 25px Comic Sans MS; margin-top: 250px;';
    
    let finalMsg = document.createElement('p');
    finalMsg.className = 'hidden';
    finalMsg.innerText = 'This is you afterwards:'.toUpperCase();
    finalMsg.style.cssText = 'text-align: center; font: 25px Comic Sans MS; font-weight: bold; margin: 25px 0px 0px 50px; height: 30px; width: 400px;';

    let ecstaticEmoji = document.createElement('img');
    // ecstaticEmoji.id = 'ecstatic';
    ecstaticEmoji.style.cssText = 'display: center; height: 500px; width: auto;';
    ecstaticEmoji.src = 'emojis/ecstatic.png';
    ecstaticEmoji.className = 'hidden';

    dragNdrop.append(dragAcross, finalMsg, ecstaticEmoji);

    

    //drag N drop

    function feedDrinkDragNDrop() {

        let dragged;
    
        document.addEventListener("drag", function( event ) {
        }, false);
    
        document.addEventListener("dragstart", function( event ) {
            // store a ref. on the dragged elem
            dragged = event.target;
            // make it half transparent
            event.target.style.opacity = .5;
        }, false);
    
        
        document.addEventListener("dragover", function(e) {
            // prevent default to allow drop
            e.preventDefault();
        }, false);
    
    
        document.addEventListener("dragenter", function(e) {
            // highlight potential drop target when the draggable element enters it
            if ( e.target.id == "happiness" ) {
                e.target.style.background = "green";
            } else if ( e.target.id == "sadness" ) {
                e.target.style.background = "grey";
            } else if ( e.target.id == "anger" ) {
                e.target.style.background = "red";
            } else if ( e.target.id == "partayy" ) {
                e.target.style.background = "purple";
            } else if ( e.target.id == "smirky" ) {
                e.target.style.background = "orange";
            }
      
        }, false);
    
        document.addEventListener("dragleave", function(e) {
            // reset background of potential drop target when the draggable element leaves it
            if (e.target.id == "happiness" ) {
                e.target.style.background = "";
            } else if ( e.target.id == "sadness" ) {
                e.target.style.background = "";
            } else if ( e.target.id == "anger" ) {
                e.target.style.background = "";
            } else if ( e.target.id == "partayy" ) {
                e.target.style.background = "";
            } else if ( e.target.id == "smirky" ) {
                e.target.style.background = "";
            }
      
        }, false);
    
        document.addEventListener("drop", function(e) {
            // prevent default action (open as link for some elements)
            e.preventDefault();
            // move dragged elem to the selected drop target
            if ( e.target.id == "happiness" ) {
                
                // detailDiv.innerHTML = '';
                // feedEmojiDiv.innerHTML = '';
                // dragNdrop.style.padding = '50px 50px 50px 50px';
                detailDiv.remove();
                feedEmojiDiv.remove();
                dragNdrop.style.padding = '50px 200px 50px 200px';
                
                dragAcross.innerText = 'Chugging.....';
                document.body.style.cursor = 'progress';
                setTimeout( () => {
                    dragAcross.hidden = true;
                    finalMsg.className = '';
                    ecstaticEmoji.className = '';
                    document.body.style.cursor = '';
                    dragNdrop.style.cssText = 'margin-right: 200px;';
                }, 2000);


            } else if ( e.target.id == "sadness" ) {
                
                detailDiv.remove();
                feedEmojiDiv.remove();
                dragNdrop.style.padding = '50px 200px 50px 200px';

                dragAcross.innerText = 'Chugging.....';
                document.body.style.cursor = 'progress';
                setTimeout( () => {
                    dragAcross.hidden = true;
                    finalMsg.className = '';
                    ecstaticEmoji.className = '';
                    document.body.style.cursor = '';
                    dragNdrop.style.cssText = 'margin-right: 200px;';
                }, 2000);
                
            } else if ( e.target.id == "anger" ) {
                
                detailDiv.remove();
                feedEmojiDiv.remove();
                dragNdrop.style.padding = '50px 200px 50px 200px';

                dragAcross.innerText = 'Chugging.....';
                document.body.style.cursor = 'progress';
                setTimeout( () => {
                    dragAcross.hidden = true;
                    finalMsg.className = '';
                    ecstaticEmoji.className = '';
                    document.body.style.cursor = '';
                    dragNdrop.style.cssText = 'margin-right: 200px;';
                }, 2000);
                
            } else if ( e.target.id == "smirky" ) {
                
                detailDiv.remove();
                feedEmojiDiv.remove();
                dragNdrop.style.padding = '50px 200px 50px 200px';

                dragAcross.innerText = 'Chugging.....';
                document.body.style.cursor = 'progress';
                setTimeout( () => {
                    dragAcross.hidden = true;
                    finalMsg.className = '';
                    ecstaticEmoji.className = '';
                    document.body.style.cursor = '';
                    dragNdrop.style.cssText = 'margin-right: 200px;';
                }, 2000);
                
            } else if ( e.target.id == "partayy" ) {
                
                detailDiv.remove();
                feedEmojiDiv.remove();
                dragNdrop.style.padding = '50px 200px 50px 200px';
                
                dragAcross.innerText = 'Chugging.....';
                document.body.style.cursor = 'progress';
                setTimeout( () => {
                    dragAcross.hidden = true;
                    finalMsg.className = '';
                    ecstaticEmoji.className = '';
                    document.body.style.cursor = '';
                    dragNdrop.style.cssText = 'margin-right: 200px;';
                }, 2000);
                
            }
        }, false);

    }
           
    feedDrinkDragNDrop();

}

clickNDrink();

function getOut() {

    document.body.innerHTML = '';

    let div = document.createElement('div');
    let scolding = document.createElement('img');
    scolding.src = 'emojis/scolding.png';
    scolding.style.height = '400px';
    let msg = document.createElement('h2');
    msg.innerText = "Get outta' here or we'll tell your mom!";
    msg.style.textAlign = 'center';

    div.append(scolding);
    div.style.cssText = 'text-align: center; padding-top: 125px;';
    document.body.append(div, msg);

}