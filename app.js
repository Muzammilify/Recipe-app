document.addEventListener("DOMContentLoaded", () => {
  fetch("recipes.json")
    .then((response) => response.json())
    .then((recipes) => loadRecipes(recipes));
});

function loadRecipes(recipes) {
  const container = document.getElementById("recipe-container");
  recipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "col-lg-4 col-md-6 col-sm-12";
    card.innerHTML = `
      <div class="card recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${recipe.name}</h5>
          <p class="card-text">${recipe.description}</p>
          <a href="${recipe.link}" class="btn btn-primary">View Recipe</a>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}