const recipes = [
  {
    name: "Avocado Toast",
    ingredients: ["1 slice whole grain bread","1/2 avocado","Cherry tomatoes","Salt & pepper"],
    steps: [
      "Toast the bread.",
      "Mash the avocado on the toast.",
      "Top with sliced cherry tomatoes.",
      "Season with salt and pepper."
    ]
  },
  {
    name: "Yogurt Parfait",
    ingredients: ["Greek yogurt","Mixed berries","Granola"],
    steps: [
      "Spoon yogurt into a glass.",
      "Add a layer of berries.",
      "Sprinkle granola on top."
    ]
  }
];
let currentRecipe=null;
let stepIndex=0;

function showRecipe(){
  currentRecipe = recipes[Math.floor(Math.random()*recipes.length)];
  document.getElementById('recipe').innerText = currentRecipe.name;
  const ingDiv = document.getElementById('ingredients');
  ingDiv.innerHTML = '<b>Ingredients:</b><ul>' + currentRecipe.ingredients.map(i=>'<li>'+i+'</li>').join('') + '</ul>';
  stepIndex=0;
  document.getElementById('steps').innerText = '';
  document.getElementById('nextBtn').style.display = 'inline';
}

function nextStep(){
  if(!currentRecipe) return;
  if(stepIndex < currentRecipe.steps.length){
    document.getElementById('steps').innerText = currentRecipe.steps[stepIndex];
    stepIndex++;
  } else {
    document.getElementById('steps').innerText = 'Done! Enjoy your meal 🍽️';
    document.getElementById('nextBtn').style.display = 'none';
  }
}