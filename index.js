// COR5 Emojis & spirits - Gin, Vodka, Tequila, Rum, Whiskey
// Add beer afterwards if core**
fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito')
.then(res => res.json())
.then(data => console.log(data))