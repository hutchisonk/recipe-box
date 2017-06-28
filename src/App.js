import React from 'react';
import Recipe from './Recipe';
import AddRecipe from './AddRecipe';


class App extends React.Component {
   constructor() {
        super();
        this.addRecipe = this.addRecipe.bind(this);
        this.updateRecipe = this.updateRecipe.bind(this);
        this.removeRecipe = this.removeRecipe.bind(this);

    }

  componentWillMount() {
    // this runs right before the <App> is rendered

    // FOR database this.ref = base.syncState(`${this.props.params.storeID}/fishes`, {
    //  FOR database this.ref = base.syncState(`buttface/fishes`, {
    //   context: this,
    //   state: 'fishes'
    // });

    //check if there is any state available in localStorage
    const localStorageRef = localStorage.getItem('recipes');

    if (localStorageRef) {
      //update App component's order state
      this.setState({
        recipes: JSON.parse(localStorageRef)
      })
    } else {
      this.state = {
        "recipes": {
        recipe1 : {
          name: "burger",
          ingredients: ["beef", "bun", "butter", "lettuce", "pickle"]
        },
        recipe2 :{
          name: "fries",
          ingredients: ["potatoes", "duck fat", "salt", "garlic", "rosemary"]
        },
        recipe3 :{
          name: "salad",
          ingredients: ["leaves", "olive oil", "vinegar", "spices", "nuts", "fruit", "meat"]
        },
        recipe4 :{
          name: "roasted nuts",
          ingredients: ["nuts", "other nuts", "avocado oil", "rosemary", "sea salt"]
        }
       }
     }//this.state=
    }
  }

    componentWillUnmount() {
      // FOR database: base.removeBinding(this.ref);
    }

    componentWillUpdate(nextProps, nextState) {
      // console.log(localStorage)
      // console.log({nextProps, nextState});
      // localStorage.setItem('greetings', 'this is localstorage');
      // localStorage.setItem(`recipe-${this.state.recipes}`, JSON.stringify(nextState.recipes));
      localStorage.setItem('recipes', JSON.stringify(nextState.recipes));

    }

    addRecipe(recipe) {
      const recipes = {...this.state.recipes};
      // console.log("adding"+JSON.stringify(recipes))
      const timestamp = Date.now();
      recipes[`recipe-${timestamp}`] = {
        "name" : recipe.name,
        "ingredients" : recipe.ingredients
      }
      // console.log(recipes);
      this.setState({ recipes });
    }

    updateRecipe(key, updatedRecipe) {
      console.log(key);
      const recipes = {...this.state.recipes};
      // console.log(updatedRecipe.name, updatedRecipe.ingredients);
      // console.log(key);
      recipes[key].name = updatedRecipe.name;
      recipes[key].ingredients = updatedRecipe.ingredients;

      this.setState({ recipes });
    }

    removeRecipe(key) {
      console.log("remove recipe");
      console.log(key);
      const recipes = {...this.state.recipes};
      console.log(recipes);
      console.log(recipes[key]);
      delete recipes[key];
      console.log(recipes);
      this.setState({ recipes });
    }

    render() {
      //below: for recipe in localstorage, print recipe with each recipe getting its props
      return <div className="container">
        <div className="row">
          <div className="three columns spacer">
            <AddRecipe addRecipe={this.addRecipe}/>
          </div>

          <div className="six columns recipebox">
            {    // curly brackets indicate that we'll be using js/JSX
            Object
              .keys(this.state.recipes)
              .map(key =>
                <Recipe
                       key={key}
                       recipekey={key}
                       recipename={this.state.recipes[key].name}
                       ingredients={this.state.recipes[key].ingredients}
                       addRecipe={this.addRecipe}
                       updateRecipe={this.updateRecipe}
                       removeRecipe={this.removeRecipe}
               />
           )
          }
          </div>

          <div className="three columns spacer">

          </div>

        </div>

            </div>;
    }
}

export default App;
