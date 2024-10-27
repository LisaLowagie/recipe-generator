function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: ["Searching for recipe"],
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement = addEventListener("submit", generateRecipe);
