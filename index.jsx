// Sample Recipes Data
const recipes = [
    {
        name: "Spaghetti Carbonara",
        chef: "Chef Mario",
        totalRatings: 500,
        avgRating: 4.8,
        uploadedOn: "2024-01-15",
        mealType: "Dinner",
        dishType: "Pasta",
        testKitchenApproved: true,
        contestWinner: false,
        featured: false,
        description: "A classic Italian pasta dish with a creamy egg-based sauce and crispy pancetta.",
        imgUrl: "https://i.pinimg.com/564x/a9/0e/e4/a90ee4bca901e935a7a406a7d90ca6c2.jpg"
    },
    // Add more recipes here...
];

let filteredRecipes = [...recipes];

// Render recipes
function renderRecipes(recipes) {
    const recipeCards = document.getElementById('recipeCards');
    recipeCards.innerHTML = ''; // Clear previous recipes
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${recipe.imgUrl}" alt="${recipe.name}" />
            <h3>${recipe.name}</h3>
            <p><strong>Chef:</strong> ${recipe.chef}</p>
            <p><strong>Rating:</strong> ${recipe.avgRating} (${recipe.totalRatings} reviews)</p>
            <p>${recipe.description}</p>
        `;
        recipeCards.appendChild(card);
    });
}

// Search functionality
function searchRecipes() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    filteredRecipes = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(searchQuery) ||
            recipe.chef.toLowerCase().includes(searchQuery) ||
            recipe.description.toLowerCase().includes(searchQuery)
        );
    });
    renderRecipes(filteredRecipes);
}

// Sorting functionality
function sortRecipes() {
    const sortOption = document.getElementById('sortOptions').value;
    if (sortOption === 'newest') {
        filteredRecipes.sort((a, b) => new Date(b.uploadedOn) - new Date(a.uploadedOn));
    } else if (sortOption === 'oldest') {
        filteredRecipes.sort((a, b) => new Date(a.uploadedOn) - new Date(b.uploadedOn));
    } else if (sortOption === 'highestRating') {
        filteredRecipes.sort((a, b) => b.avgRating - a.avgRating);
    } else if (sortOption === 'lowestRating') {
        filteredRecipes.sort((a, b) => a.avgRating - b.avgRating);
    }
    renderRecipes(filteredRecipes);
}

// Clear all filters
function clearFilters() {
    document.getElementById('contestWinner').checked = false;
    document.getElementById('featured').checked = false;
    document.getElementById('testKitchenApproved').checked = false;
    document.getElementById('mealType').value = 'all';
    document.getElementById('dishType').value = 'all';
    filteredRecipes = [...recipes];
    renderRecipes(filteredRecipes);
}

document.addEventListener('DOMContentLoaded', () => {
    renderRecipes(recipes);
});
