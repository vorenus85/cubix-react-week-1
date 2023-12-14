import './difficulty.css'
const recipes = [
  {
    id: 1,
    name: "Fried eggs",
    ingredients: ['2 eggs', 'a pinch of salt and pepper'],
    instructions: 'Break them, fry them, eat them!',
    difficulty: 2,
  },
  {
    id: 2,
    name: "Fruit salad",
    ingredients: ['1 apple', '2 bananas', '1 orange', '1 grape', '1/3 tablespoon lemon juice', '1/2 cup sugar'],
    instructions: 'Slice the fruits, add sugar and lemon juice. Mix it gently. Cover and refrigerate until serving',
    difficulty: 3,
  },
  {
    id: 3,
    name: "Boiled eggs",
    ingredients: ['2 eggs', 'a pinch of salt and pepper'],
    instructions: 'Boil the eggs, cool it, break them, eat them.',
    difficulty: 1,
  },
];

function Recipe({name, difficulty, ingredients, instructions}) {

  let level = '';
  switch (difficulty) {
    case 1:
      level = 'easy'
      break;
    case 2:
      level = 'medium'
      break;
    case 3:
      level = 'nightmare'
      break;
  
    default:
      break;
  }

  return (<li>
            <h2>{name}</h2>
            <p><b>Ingredients:</b>
              <ul>
                {
                  ingredients.map(ingredient =>{
                    return (<li>- {ingredient}</li>)
                  })
                }
              </ul>
            </p>
            <p><b>Instructions:</b> {instructions}</p>
            <p><small><b>Difficulty:</b> <span className={`level level-${level}`}>{level}</span></small></p>
            
          </li>);
}

function App() {
  return (
    <div className="App">
      <h1>Recipes</h1>
      <ul>
        {
          recipes.map( recipe => {
            return (<Recipe name={recipe.name} difficulty={recipe.difficulty} instructions={recipe.instructions} ingredients={recipe.ingredients} key={recipe.id}/>);
          })
        }
      </ul>
    </div>
  );
}

export default App;
