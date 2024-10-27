function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let apiKey = "o058dc18a71765bc985e10f3be4ft2e4";
  let apiContext =
    "You are a food expert and loves to cook simple recipes. Your mission is to generate a list of ingredients and a 6 line recipe that has a title. Please add some html to the text and separate each line with a <br/>. Between the ingredients and the instructions. Make sure to include the users ingredient. Add exactly 1 <br/> here. Sign the recipe with 'Have a nice meal.', put this in a <strong> element.";
  let instructionsInput = document.querySelector("#user-instructions");
  let apiPrompt = `Users ingredient: ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;
  console.log("apiPrompt");
  console.log("generation recipe");
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement = addEventListener("submit", generateRecipe);
