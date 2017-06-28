import React from 'react';

class EditRecipe extends React.Component {

  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this);
    this.editRecipe = this.editRecipe.bind(this);
    // this.renderEditForm = this.renderEditForm.bind(this);
  }

  editRecipe(event, key) {
    event.preventDefault();
    console.log(this.props.recipekey);
    // console.log(event)
    // console.log("editing "+this.name.value);
   const recipe = {
     name : this.name.value,
    ingredients : this.ingredients.value.split(", ")
    }
    this.props.updateRecipe(this.props.recipekey, recipe);
    // this.recipeForm.reset();
  }

  render(key) {
    const recipename = this.props.recipename;
    const ingredients = this.props.ingredients.join(", ");

    return (
      <div className="recipe-edit-div">
      <form ref={(input)=>this.recipeForm = input} className="recipe-edit" onSubmit={(e) => this.editRecipe(e, key)}>
        name:<br/> <input ref={(input)=>this.name = input} type="text" value={recipename} onChange={(e) => this.editRecipe(e, key)}/>
      <br/>
      ingr:<br/><input ref={(input)=>this.ingredients = input} type="text" value={ingredients} onChange={(e) => this.editRecipe(e, key)}/>
      </form>

      <button className="done_editing_recipe_btn" onClick={this.props.toggleForm}>done editing</button>
      <button className="delete_recipe_btn" onClick={() => this.props.removeRecipe(this.props.recipekey)} >delete recipe</button>


     </div>   )
  }
}

export default EditRecipe;
