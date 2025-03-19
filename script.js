const recipes = [
    {
        name: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "parmesan cheese", "pancetta", "black pepper"],
        procedure: "Cook spaghetti. In a bowl, mix eggs and cheese. Combine with pasta and pancetta."
    },
    {
        name: "Chicken Curry",
        ingredients: ["chicken", "curry powder", "coconut milk", "onion", "garlic"],
        procedure: "Sauté onion and garlic. Add chicken and curry powder. Pour in coconut milk and simmer."
    },
    {
        name: "Vegetable Stir Fry",
        ingredients: ["mixed vegetables", "soy sauce", "ginger", "garlic", "sesame oil"],
        procedure: "Stir-fry vegetables with garlic and ginger. Add soy sauce and sesame oil."
    },
    {
        name: "Tacos",
        ingredients: ["taco shells", "ground beef", "lettuce", "tomato", "cheese"],
        procedure: "Cook ground beef. Fill taco shells with beef, lettuce, tomato, and cheese."
    },
    {
        name: "Pancakes",
        ingredients: ["flour", "milk", "eggs", "baking powder", "sugar"],
        procedure: "Mix ingredients. Pour batter onto a hot griddle. Flip when bubbles form."
    }
];

recipes.forEach((recipe, index) => {
    const recipeInfo = document.getElementById(`recipe${index + 1}-info`);
    recipeInfo.innerHTML = `
        <h2>${recipe.name}</h2>
        <h3>Ingredients:</h3>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h3>Procedure:</h3>
        <p>${recipe.procedure}</p>
    `;
});