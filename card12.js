function showRecipe(){
  const recipes=[
    "Veggie stir-fry with tofu",
    "Oatmeal with fruits and nuts",
    "Grilled salmon with lemon",
    "Bean salad with olive oil"
  ];
  document.getElementById('recipe').innerText = recipes[Math.floor(Math.random()*recipes.length)];
}