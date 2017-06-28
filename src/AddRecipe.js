import React from 'react';

class AddRecipe extends React.Component {
    // getInitialState: function() {
    //     return { showResults: false };
    // },
    // onClick: function() {
    //     this.setState({ showResults: true });
    // },
    constructor() {
      super();
      this.newRecipe = this.newRecipe.bind(this);
    }

  newRecipe(event) {
    event.preventDefault();
    console.log("adding recipe_card");
   const recipe = { name : this.name.value,
    ingredients : this.ingredients.value.split(",")
    }
    this.props.addRecipe(recipe);
    this.recipeForm.reset();
  }

  render() {
    return (
      <form ref={(input)=>this.recipeForm = input} className="recipe-add" onSubmit={(e) => this.newRecipe(e)}>
      <input ref={(input)=>this.name = input} type="text" placeholder="Recipe Name" />
      <input ref={(input)=>this.ingredients = input} type="text" placeholder="Recipe Ingredients" />

      <button type="submit">+ Add Recipe</button>
      </form>    )
  }
}

export default AddRecipe;
